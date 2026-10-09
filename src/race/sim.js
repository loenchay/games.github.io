// Mô phỏng "Đua Xe Đường Làng" — TẤT ĐỊNH (số nguyên), dùng chung cơ chế mạng rollback với Quyền Cước.
// Trục x = chiều chạy tới trước, trục l = vị trí ngang trên mặt đường (0 = mép trái, ROAD_W = mép phải).
// 2 xe chạy cùng một con đường; đâm chướng ngại, bị bỏ xa quá 160m hoặc về đích sau = thua hiệp.
// Phím: ← → lái, ↑ ga hết cỡ, ↓ phanh.
import { CAR } from './cars.js';

export const U = 100, FPS = 60;
export const ROAD_W = 300 * U, LANES = 5, LANE_W = ROAD_W / LANES;
export const CHUNK = 520 * U, START_X = 200 * U, FIRST_OBS = 1000 * U;
export const MAX_GAP = 1600 * U; // bị bỏ xa hơn khoảng này là thua
export const B = { U: 1, D: 2, L: 4, R: 8, LP: 16, HP: 32, LK: 64, HK: 128, S1: 256, S2: 512, S3: 1024, SUP: 2048 };
const sgn = (v) => (v > 0 ? 1 : v < 0 ? -1 : 0);
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

// ---------- chướng ngại vật (sinh từ seed, không lưu trong trạng thái) ----------
export const OBS = {
  cone: { w: 22, h: 22, solid: 1, small: 1 },
  hay: { w: 50, h: 44, solid: 1, small: 1 },
  cart: { w: 86, h: 38, solid: 1 },
  buffalo: { w: 72, h: 40, solid: 1, moving: 1 },
  rock: { w: 40, h: 40, solid: 1 },
  oil: { w: 56, h: 40 },
  mud: { w: 90, h: 50 },
  boost: { w: 48, h: 36 },
};
const WEIGHTS = [['cone', 18], ['hay', 12], ['cart', 10], ['buffalo', 9], ['rock', 9], ['oil', 9], ['mud', 7], ['boost', 8]];
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const cache = new Map();
export function chunk(seed, k) {
  const key = seed + ':' + k;
  if (cache.has(key)) return cache.get(key);
  const r = rng((seed ^ Math.imul(k + 7, 0x9e3779b1)) >>> 0);
  const list = [];
  const x0 = k * CHUNK;
  if (x0 >= FIRST_OBS) {
    const hard = Math.min(3, Math.floor(k / 6));
    const n = 1 + Math.floor(r() * (2 + Math.min(1, hard)));
    const lanes = [0, 1, 2, 3, 4];
    for (let i = 4; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [lanes[i], lanes[j]] = [lanes[j], lanes[i]]; }
    for (let i = 0; i < Math.min(n, 3); i++) {
      let w = r() * 82, type = 'cone';
      for (const [t, wt] of WEIGHTS) { if (w < wt) { type = t; break; } w -= wt; }
      list.push({ id: `${k}:${i}`, type, x: x0 + Math.floor((60 + r() * 380) * U), l: lanes[i] * LANE_W + LANE_W / 2, ph: Math.floor(r() * 200) });
    }
  }
  cache.set(key, list);
  if (cache.size > 600) cache.delete(cache.keys().next().value);
  return list;
}
// vị trí ngang hiện tại (trâu đi qua đi lại)
export function obsL(o, frame) {
  if (!OBS[o.type].moving) return o.l;
  const p = (frame + o.ph) % 240, tri = p < 120 ? p : 240 - p; // 0..120..0
  return clamp(o.l + (tri - 60) * 70, 20 * U, ROAD_W - 20 * U);
}
export function obstacles(S, x0, x1) {
  const out = [];
  for (let k = Math.max(0, Math.floor(x0 / CHUNK)); k <= Math.floor(x1 / CHUNK); k++) for (const o of chunk(S.rs, k)) if (!S.gone.includes(o.id) && (!S.len || o.x < START_X + S.len - 200 * U)) out.push(o);
  return out;
}

// ---------- khởi tạo ----------
function newCar(id, side) {
  return { id, side, x: START_X, l: side ? 210 * U : 90 * U, v: 0, lv: 0, push: 0, st: 'go', t: 0, stun: 0, spin: 0, ram: 0, ramCd: 0, nitro: 300, boost: 0, prev: 0, scrape: 0, wins: 0, outAt: 0, behind: 0 };
}
export function initState(cars, cfg = {}) {
  const seed = (cfg.seed ?? 12345) >>> 0;
  return { frame: 0, round: 1, phase: 'intro', pt: 0, need: cfg.rounds || 2, len: (cfg.time === 99 ? 24000 : cfg.time === 60 ? 12000 : 0) * U, seed, rs: seed, c: [newCar(cars[0], 0), newCar(cars[1], 1)], gone: [], camX: 0, winner: -1, lastW: -1, why: '', hitstop: 0 };
}
function newRound(S) {
  S.round++;
  for (const c of S.c) { const n = newCar(c.id, c.side); n.wins = c.wins; n.nitro = Math.max(300, c.nitro); Object.assign(c, n); }
  S.rs = (S.seed + Math.imul(S.round, 7777)) >>> 0; S.gone = []; S.camX = 0;
  S.phase = 'intro'; S.pt = 0; S.why = '';
}

// ---------- một khung hình ----------
function drive(S, c, o, inp, ev) {
  const car = CAR[c.id];
  const pressed = inp & ~c.prev;
  c.prev = inp;
  if (c.st !== 'go') { c.v = Math.max(0, c.v - 40); return; }
  const racing = S.phase === 'race';
  // ga / phanh: xe tự chạy tới 85% tốc độ, giữ → để chạy hết ga, giữ ← để phanh
  let top = car.top + Math.min(260, Math.trunc((c.x - START_X) / U / 40));
  if (c.boost > 0) { top += 360; c.boost--; }
  const want = !racing ? 0 : (inp & B.D) ? Math.trunc(top * 0.45) : (inp & B.U) || c.boost ? top : Math.trunc((top * 85) / 100);
  if (c.v < want) c.v = Math.min(want, c.v + car.acc * (c.boost ? 2 : 1));
  else c.v = Math.max(want, c.v - ((inp & B.D) ? car.acc * 2 : 6));
  if (c.spin > 0) { c.spin--; c.v = Math.trunc((c.v * 97) / 100); }
  // lái
  const dir = racing && !c.spin ? ((inp & B.R) ? 1 : 0) - ((inp & B.L) ? 1 : 0) : 0;
  const steer = c.stun > 0 ? Math.trunc(car.steer / 2) : car.steer;
  const target = dir * steer;
  c.lv += clamp(target - c.lv, -Math.trunc(steer / 5), Math.trunc(steer / 5));
  if (c.spin) c.lv = c.spin % 20 < 10 ? 160 : -160;
  if (c.stun > 0) c.stun--;
  // húc ngang
  if (c.ramCd > 0) c.ramCd--;
  if (c.ram > 0) c.ram--;
  if (racing && (pressed & (B.LP | B.HP | B.S1)) && !c.ramCd && !c.spin) {
    const d = dir || sgn(o.l - c.l) || 1;
    c.ram = 14; c.ramCd = 50; c.push += d * 950;
    ev.push({ k: 'ram', side: c.side });
  }
  // nitro
  if (racing) c.nitro = Math.min(1000, c.nitro + 2);
  if (racing && (pressed & (B.LK | B.HK | B.S2 | B.SUP)) && c.nitro >= 1000) { c.nitro = 0; c.boost = 100; ev.push({ k: 'nitro', side: c.side }); }
  c.l += c.lv + c.push;
  c.push = Math.trunc((c.push * 86) / 100);
  c.x += c.v;
  // lan can 2 bên đường
  const half = (car.wid / 2) * U;
  if (c.l < half || c.l > ROAD_W - half) {
    c.l = clamp(c.l, half, ROAD_W - half); c.lv = 0; c.push = 0; c.v = Math.max(0, c.v - 14);
    if (++c.scrape % 10 === 1) ev.push({ k: 'scrape', side: c.side });
  } else c.scrape = 0;
}
function bump(S, a, b, ev) {
  if (a.st !== 'go' || b.st !== 'go') return;
  const A = CAR[a.id], Bc = CAR[b.id];
  const dx = b.x - a.x, dl = b.l - a.l;
  const ox = Math.trunc(((A.len + Bc.len) / 2) * U) - Math.abs(dx), ol = Math.trunc(((A.wid + Bc.wid) / 2) * U) - Math.abs(dl);
  if (ox <= 0 || ol <= 0) return;
  const ma = A.mass, mb = Bc.mass;
  if (ol * 16 < ox * 10) {
    // va chạm ngang: đẩy nhau sang 2 bên
    const d = sgn(dl) || (a.side ? -1 : 1);
    const pa = Math.trunc((ol * mb) / (ma + mb)), pb = ol - pa;
    a.l -= d * pa; b.l += d * pb;
    const fa = 260 + (b.ram ? 1150 : 0), fb = 260 + (a.ram ? 1150 : 0);
    a.push -= d * Math.trunc((fa * mb) / ma); b.push += d * Math.trunc((fb * ma) / mb);
    if (b.ram) { a.stun = 22; a.v = Math.trunc((a.v * 92) / 100); }
    if (a.ram) { b.stun = 22; b.v = Math.trunc((b.v * 92) / 100); }
    if (a.ram) a.nitro = Math.min(1000, a.nitro + 150);
    if (b.ram) b.nitro = Math.min(1000, b.nitro + 150);
    if (a.ram || b.ram) { a.ram = 0; b.ram = 0; S.hitstop = Math.max(S.hitstop, 4); }
    ev.push({ k: 'bump', x: Math.trunc((a.x + b.x) / 2), l: Math.trunc((a.l + b.l) / 2), big: 1 });
  } else {
    // va đuôi: xe sau bị chậm lại, xe trước được đẩy lên
    const [rear, front] = dx > 0 ? [a, b] : [b, a];
    rear.x -= ox;
    const rm = CAR[rear.id].mass, fm = CAR[front.id].mass;
    rear.v = Math.max(0, Math.min(rear.v, front.v - 60));
    front.v += Math.trunc((60 * rm) / fm);
    ev.push({ k: 'bump', x: front.x, l: front.l });
  }
}
function hitObstacles(S, c, ev) {
  if (c.st !== 'go') return;
  const car = CAR[c.id];
  const hl = (car.len / 2) * U, hw = (car.wid / 2) * U;
  for (const o of obstacles(S, c.x - 120 * U, c.x + 120 * U)) {
    const T = OBS[o.type], ol = obsL(o, S.frame);
    if (Math.abs(o.x - c.x) >= hl + (T.w / 2) * U || Math.abs(ol - c.l) >= hw + (T.h / 2) * U - 4 * U) continue;
    if (T.solid) {
      if (car.tough && T.small) { S.gone.push(o.id); c.v = Math.trunc((c.v * 80) / 100); ev.push({ k: 'smash', side: c.side, x: o.x, l: ol, type: o.type }); continue; }
      c.st = 'crash'; c.t = 0; c.lv = 0; c.push = 0;
      ev.push({ k: 'crash', side: c.side, x: c.x, l: c.l, type: o.type });
      S.hitstop = Math.max(S.hitstop, 12);
      return;
    }
    if (o.type === 'oil' && !c.spin) { c.spin = 40; ev.push({ k: 'spin', side: c.side }); }
    if (o.type === 'mud') c.v = Math.trunc((c.v * 94) / 100);
    if (o.type === 'boost' && c.boost < 40) { c.boost = 60; S.gone.push(o.id); ev.push({ k: 'boost', side: c.side }); }
  }
}
export function step(S, in0, in1) {
  const ev = [];
  S.frame++;
  if (S.hitstop > 0) { S.hitstop--; for (const [c, i] of [[S.c[0], in0], [S.c[1], in1]]) c.prev = i; return ev; }
  S.pt++;
  const [a, b] = S.c;
  if (S.phase === 'intro') {
    if (S.pt === 1) ev.push({ k: 'round', n: S.round });
    if (S.pt === 40 || S.pt === 80 || S.pt === 120) ev.push({ k: 'count', n: 3 - (S.pt / 40 - 1) });
    if (S.pt >= 160) { S.phase = 'race'; S.pt = 0; ev.push({ k: 'go' }); }
  }
  drive(S, a, b, in0, ev);
  drive(S, b, a, in1, ev);
  bump(S, a, b, ev);
  hitObstacles(S, a, ev);
  hitObstacles(S, b, ev);
  // máy quay bám theo xe dẫn đầu
  S.camX = Math.max(S.camX, Math.min(...S.c.filter((c) => c.st === 'go').map((c) => c.x), Math.max(a.x, b.x)));
  if (S.phase === 'race') {
    let w = -2;
    // bị bỏ xa (chỉ tính khi cả 2 còn chạy) = bị loại
    for (const c of S.c) { const o = S.c[1 - c.side]; if (c.st === 'go' && o.st === 'go' && S.pt > 60 && o.x - c.x > MAX_GAP) { c.st = 'crash'; c.behind = 1; c.t = 0; ev.push({ k: 'behind', side: c.side }); } }
    // ai bị loại trước: người kia chưa thắng ngay mà tiếp tục chạy một mình cho tới khi cũng đâm (hoặc về đích)
    for (const c of S.c) if (c.st === 'crash' && !c.outAt) { c.outAt = S.frame; if (S.c[1 - c.side].st === 'go') ev.push({ k: 'out', side: c.side }); }
    const alive = S.c.filter((c) => c.st === 'go');
    const fin = S.len ? alive.filter((c) => c.x >= START_X + S.len) : [];
    if (fin.length) { w = fin.length === 2 ? (a.x === b.x ? -1 : a.x > b.x ? 0 : 1) : fin[0].side; S.why = 'finish'; }
    else if (!alive.length) {
      // cả 2 đều đã bị loại: ai trụ lâu hơn thắng
      w = a.outAt === b.outAt ? -1 : a.outAt > b.outAt ? 0 : 1;
      S.why = w >= 0 && S.c[w].behind ? 'behind' : 'crash';
      if (w >= 0) S.dist = Math.trunc((S.c[w].x - START_X) / U / 10);
    }
    if (w !== -2) {
      S.phase = 'ko'; S.pt = 0; S.lastW = w;
      if (w >= 0) S.c[w].wins++; else for (const c of S.c) c.wins++;
      ev.push({ k: 'ko', w, why: S.why });
    }
  } else if (S.phase === 'ko') {
    for (const c of S.c) if (c.st === 'go') c.v = Math.max(0, c.v - 10);
    if (S.pt >= 170) {
      const done = S.c.map((c) => c.wins >= S.need);
      if (done[0] || done[1]) { S.phase = 'end'; S.pt = 0; S.winner = done[0] && done[1] ? -1 : done[0] ? 0 : 1; ev.push({ k: 'end', w: S.winner }); }
      else newRound(S);
    }
  }
  return ev;
}
export const clone = (S) => (typeof structuredClone === 'function' ? structuredClone(S) : JSON.parse(JSON.stringify(S)));
export function hash(S) {
  let h = 2166136261 >>> 0;
  const add = (v) => { h ^= v & 0xffff; h = Math.imul(h, 16777619) >>> 0; h ^= (v >>> 16) & 0xffff; h = Math.imul(h, 16777619) >>> 0; };
  add(S.frame); for (const c of S.c) { add(c.x); add(c.l); add(c.v); add(c.nitro); } add(S.gone.length);
  return h;
}
