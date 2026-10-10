// Xây Tháp Lắc Lư — 1–4 người thay phiên thả đồ vật lên chiếc bè tre đang dập dềnh trên sông.
// Đồ rơi xuống nước = tháp sập: người thả khối cuối cùng thua. Vật lý (planck.js) chỉ chạy trên máy chủ phòng.
import { World, Vec2, Box, Circle, Polygon } from 'planck';
import { PIECES, SETS, radiusOf, RAFT_W, RAFT_H } from './pieces.js';

const DT = 1 / 60;
const WAVES = { calm: 0.018, medium: 0.04, strong: 0.068 };
export const BOT_NAMES = ['Thợ Xây Máy', 'Cụ Đồ Máy', 'Bé Tí Máy'];

export const defaultConfig = { waves: 'medium', set: 'mix', bot: 0, turnTime: 30 };
export function cleanConfig(c, p) {
  const o = {};
  if (p.waves in WAVES) o.waves = p.waves;
  if (p.set in SETS) o.set = p.set;
  if ([0, 1].includes(Number(p.bot))) o.bot = Number(p.bot);
  return o;
}
function rnd(s) { s.rs = (Math.imul(s.rs ^ (s.rs >>> 15), 0x2c1b3c6d) + 0x297a2d39) >>> 0; return s.rs / 4294967296; }
const pick = (s) => { const L = SETS[s.cfg.set] || SETS.mix; return L[Math.floor(rnd(s) * L.length)]; };

export function setup(n, cfg, ctx) {
  const bots = Math.min(4 - n, cfg.bot || 0);
  const total = n + bots;
  const s = {
    n, total, cfg: { ...cfg }, names: [], bot: [], rs: (Math.floor((ctx?.rng?.() ?? Math.random()) * 2 ** 31) | 1) >>> 0,
    ph: 'aim', pt: 0, f: 0, cur: 0, turnNo: 1, kind: '', next: '', blocks: [], placed: Array(total).fill(0),
    aim: { x: 0, a: 0 }, height: RAFT_H / 2, best: RAFT_H / 2, last: -1, loser: -1, still: 0, dirty: true, nid: 0,
  };
  for (let i = 0; i < total; i++) { s.bot.push(i >= n); s.names.push(i >= n ? BOT_NAMES[i - n] : ctx?.name?.(i) || `Người ${i + 1}`); }
  s.kind = pick(s); s.next = pick(s);
  // thế giới vật lý: không cho vào trạng thái gửi đi
  const world = new World({ gravity: Vec2(0, -10) });
  const raft = world.createKinematicBody({ position: Vec2(0, 0) });
  raft.createFixture({ shape: new Box(RAFT_W / 2, RAFT_H / 2), friction: 0.9 });
  Object.defineProperty(s, 'W', { value: { world, raft, bodies: new Map() }, enumerable: false, writable: true });
  return s;
}
const amp = (s) => WAVES[s.cfg.waves] * (1 + Math.min(1.2, s.blocks.length * 0.035));
function hookY(s, kind) { return s.height + 1.25 + radiusOf(kind); }

function drop(s, x, a, ctx) {
  if (s.ph !== 'aim') return;
  const kind = s.kind, P = PIECES[kind];
  x = Math.max(-3.8, Math.min(3.8, Number(x) || 0));
  a = Math.round((Number(a) || 0) / 15) * 15 % 360;
  const { world, bodies } = s.W;
  const b = world.createDynamicBody({ position: Vec2(x, hookY(s, kind)), angle: (a * Math.PI) / 180, angularDamping: 0.05 });
  for (const p of P.parts) {
    let shape;
    if (p.t === 'box') shape = new Box(p.w / 2, p.h / 2, Vec2(p.x || 0, p.y || 0), 0);
    else if (p.t === 'circle') shape = new Circle(Vec2(p.x || 0, p.y || 0), p.r);
    else shape = new Polygon(p.p.map(([px, py]) => Vec2(px, py)));
    b.createFixture({ shape, density: kind === 'dua' ? 0.8 : 1, friction: kind === 'dua' ? 0.5 : 0.75, restitution: kind === 'dua' ? 0.15 : 0.02 });
  }
  const id = ++s.nid;
  bodies.set(id, b);
  s.blocks.push([id, kind, s.cur]);
  s.last = s.cur;
  s.ph = 'settle'; s.pt = 0; s.still = 0; s.dirty = true;
  ctx?.fx?.({ type: 'drop', seat: s.cur, kind });
}
function height(s) {
  let h = RAFT_H / 2;
  for (const b of s.W.bodies.values()) for (let f = b.getFixtureList(); f; f = f.getNext()) { const ab = f.getAABB(0); if (ab.upperBound.y > h && ab.lowerBound.y > -0.6) h = ab.upperBound.y; }
  return h;
}
function relSpeed(s, b) {
  const p = b.getWorldCenter(), v = b.getLinearVelocity(), rv = s.W.raft.getLinearVelocityFromWorldPoint(p);
  return Math.hypot(v.x - rv.x, v.y - rv.y) + Math.abs(b.getAngularVelocity() - s.W.raft.getAngularVelocity()) * 0.5;
}

export function act(s, seat, a, ctx) {
  if (a.t === 'drop') {
    if (s.ph !== 'aim' || seat !== s.cur) return 'Chưa tới lượt bạn.';
    drop(s, a.x, a.a, ctx);
    return null;
  }
  return null;
}

export function step(s, inputs, ctx) {
  s.f++; s.pt++;
  const { world, raft, bodies } = s.W;
  // bè dập dềnh
  const w = (Math.PI * 2) / 4.6, A = amp(s), t = s.f * DT;
  raft.setAngularVelocity(A * w * Math.cos(w * t));
  raft.setLinearVelocity(Vec2(Math.sin(w * 0.5 * t) * 0.02, 0.05 * w * 1.3 * Math.cos(w * 1.3 * t)));
  world.step(DT, 8, 4);
  // ngắm
  if (s.ph === 'aim') {
    if (s.bot[s.cur]) {
      if (s.pt === 1) {
        const top = [...bodies.values()].reduce((m, b) => (b.getPosition().y > (m?.getPosition().y ?? -9) ? b : m), null);
        s.botX = (top ? top.getPosition().x : 0) + (rnd(s) - 0.5) * 0.5;
      }
      s.aim = { x: s.botX * Math.min(1, s.pt / 50) + (s.pt < 50 ? Math.sin(s.pt / 8) * 0.6 : 0), a: 0 };
      if (s.pt >= 75) drop(s, s.botX, 0, ctx);
    } else {
      const v = inputs[s.cur];
      if (v && typeof v === 'object') s.aim = { x: Math.max(-3.8, Math.min(3.8, Number(v.x) || 0)), a: (Math.round((Number(v.a) || 0) / 15) * 15) % 360 };
    }
  }
  // có món nào rơi xuống sông chưa
  if (s.ph !== 'collapse' && s.ph !== 'end') {
    for (const b of bodies.values()) {
      if (b.getPosition().y < -0.9) {
        s.loser = s.last; s.ph = 'collapse'; s.pt = 0; s.dirty = true;
        ctx?.fx?.({ type: 'splash', x: b.getPosition().x });
        ctx?.log?.(`🌊 Tháp sập! ${s.names[s.last]} vừa làm rơi đồ xuống sông.`, 'bad');
        break;
      }
    }
  }
  if (s.ph === 'settle') {
    let moving = false;
    for (const b of bodies.values()) if (relSpeed(s, b) > 0.12) { moving = true; break; }
    s.still = moving ? 0 : s.still + 1;
    if (s.still >= 36 || s.pt > 480) {
      s.placed[s.last]++;
      s.height = height(s); s.best = Math.max(s.best, s.height);
      s.cur = (s.cur + 1) % s.total; s.turnNo++;
      s.kind = s.next; s.next = pick(s);
      s.ph = 'aim'; s.pt = 0; s.aim = { x: 0, a: 0 }; s.dirty = true;
      ctx?.fx?.({ type: 'placed', h: s.height });
    }
  } else if (s.ph === 'aim' && s.f % 30 === 0) s.height = height(s);
  for (const [id, b] of bodies) if (b.getPosition().y < -7) { world.destroyBody(b); bodies.delete(id); }
  if (s.ph === 'collapse' && s.pt >= 170) {
    s.ph = 'end'; s.dirty = true;
    const total = s.blocks.length - 1, hm = Math.round((s.best - RAFT_H / 2) * 10) / 10;
    if (s.total === 1) ctx?.finish?.({ winners: [], text: `Xếp được ${total} món, tháp cao nhất ${hm} m.` });
    else {
      const winners = []; for (let i = 0; i < s.n; i++) if (i !== s.loser) winners.push(i);
      ctx?.finish?.({ winners, rank: winners, text: `${s.names[s.loser]} làm sập tháp sau ${total} món (cao ${hm} m).` });
    }
  }
}
export function auto(s, seat, ctx) { if (s.ph === 'aim' && seat === s.cur) drop(s, s.aim.x, s.aim.a, ctx); }
export function live(s) {
  const r2 = (v) => Math.round(v * 100) / 100;
  const { raft, bodies } = s.W;
  const full = s.f % 20 === 0;
  const b = [];
  for (const [id, bd] of bodies) if (full || bd.isAwake()) { const p = bd.getPosition(); b.push([id, r2(p.x), r2(p.y), Math.round(bd.getAngle() * 1000) / 1000]); }
  const rp = raft.getPosition();
  return { f: s.f, ph: s.ph, pt: s.pt, cur: s.cur, raft: [r2(rp.x), Math.round(rp.y * 1000) / 1000, Math.round(raft.getAngle() * 10000) / 10000], b, full, aim: s.aim, h: r2(s.height), hy: r2(hookY(s, s.kind)) };
}
export function view(s) {
  return { n: s.n, total: s.total, names: s.names, bot: s.bot, ph: s.ph, cur: s.cur, kind: s.kind, next: s.next, blocks: s.blocks, placed: s.placed, loser: s.loser, best: s.best, h: s.height, hy: hookY(s, s.kind), waves: s.cfg.waves, turnNo: s.turnNo };
}
export const turn = (s) => (s.ph === 'aim' && !s.bot[s.cur] ? s.cur : -1);
export const turnKey = (s) => `${s.turnNo}:${s.ph === 'aim'}`;
export function endEarly(s) {
  const winners = []; for (let i = 0; i < s.n; i++) winners.push(i);
  return { winners: s.total > 1 ? [] : [], text: `Dừng sớm — tháp cao ${Math.round((s.best - RAFT_H / 2) * 10) / 10} m.` };
}
export const LOGIC = { minSeats: 1, maxSeats: 4, defaultConfig, cleanConfig, setup, act, auto, turn, turnKey, view, step, live, endEarly };
