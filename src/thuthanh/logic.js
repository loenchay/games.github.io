// Thủ Thành Làng — 1–4 người cùng phe xây chòi canh chặn quái kéo về phá làng. Chạy trên máy chủ phòng 60 khung/giây.
import { MW, MH, MAPS, TOWERS, ENEMIES, pathCells, pathLen, posAt } from './data.js';

const DIFF = { easy: [0.75, 1.15], normal: [1, 1], hard: [1.4, 0.9] }; // [máu quái, vàng]
export const defaultConfig = { map: 'duonglang', waves: 20, diff: 'normal' };
export function cleanConfig(c, p) {
  const o = {};
  if (p.map in MAPS) o.map = p.map;
  if ([10, 20, 30].includes(Number(p.waves))) o.waves = Number(p.waves);
  if (p.diff in DIFF) o.diff = p.diff;
  return o;
}
function rnd(s) { s.rs = (Math.imul(s.rs ^ (s.rs >>> 15), 0x2c1b3c6d) + 0x297a2d39) >>> 0; return s.rs / 4294967296; }

// thành phần từng đợt quái
export function waveList(w) {
  const L = [];
  const add = (t, n, gap) => { for (let i = 0; i < n; i++) L.push([t, gap]); };
  if (w % 5 === 0) {
    if (w < 10) { add('heo', 5, 34); add('trau', 2 + w / 5, 80); return L; }
    add('heo', 4 + w / 5, 40); add('chan', Math.floor(w / 10), 120); add('chuot', 6, 18); return L;
  }
  if (w % 5 === 4 && w > 2) { add('qua', 6 + w, 28); add('chuot', 4, 20); return L; }
  add('chuot', 5 + Math.floor(w * 1.2), 22);
  if (w >= 2) add('heo', 2 + Math.floor(w * 0.8), 36);
  if (w >= 6) add('trau', Math.floor((w - 3) / 3), 70);
  if (w >= 8 && w % 2 === 0) add('qua', 3 + Math.floor(w / 3), 26);
  return L;
}
const BREAK = 900; // 15 giây nghỉ giữa các đợt

export function setup(n, cfg, ctx) {
  const map = MAPS[cfg.map] || MAPS.duonglang;
  const s = {
    n, cfg: { ...cfg }, rs: (Math.floor((ctx?.rng?.() ?? Math.random()) * 2 ** 31) | 1) >>> 0, names: [],
    ph: 'build', cd: 1500, f: 0, wave: 0, lives: 20, gold: Array(n).fill(n === 1 ? 230 : 160), towers: [], tid: 0,
    en: [], eid: 0, queue: [], qT: 0, shots: [], kills: Array(n).fill(0), dealt: Array(n).fill(0), built: Array(n).fill(0),
    lens: map.paths.map(pathLen), dirty: true, liveCache: null, leaks: 0,
  };
  for (let i = 0; i < n; i++) s.names.push(ctx?.name?.(i) || `Người ${i + 1}`);
  Object.defineProperty(s, 'M', { value: { map, cells: pathCells(map) }, enumerable: false });
  return s;
}
const blocked = (s, x, y) => s.M.cells.has(x + ',' + y) || s.M.map.water.some(([wx, wy, ww, wh]) => x >= wx && x < wx + ww && y >= wy && y < wy + wh) || (x === s.M.map.gate[0] && Math.abs(y - s.M.map.gate[1]) <= 1);
export function canBuild(s, x, y) { return x >= 0 && y >= 0 && x < MW && y < MH && !blocked(s, x, y) && !s.towers.some((t) => t.x === x && t.y === y); }
// mỗi con quái bị giết: chia đều vàng cho cả phe (khuyến khích hợp tác)
function share(s, g) { const each = Math.max(1, Math.round((g * 1.35 * DIFF[s.cfg.diff][1] * (s.n === 1 ? 1 : 1.25)) / s.n)); for (let i = 0; i < s.n; i++) s.gold[i] += each; }

export function act(s, seat, a, ctx) {
  if (s.ph === 'win' || s.ph === 'lose') return 'Trận đã xong.';
  if (a.t === 'build') {
    const T = TOWERS[a.kind];
    const x = Math.floor(Number(a.x)), y = Math.floor(Number(a.y));
    if (!T) return 'Loại tháp không rõ.';
    if (!canBuild(s, x, y)) return 'Chỗ này không xây được.';
    if (s.gold[seat] < T.cost) return 'Không đủ vàng.';
    s.gold[seat] -= T.cost; s.built[seat]++;
    s.towers.push({ id: ++s.tid, kind: a.kind, x, y, lv: 0, own: seat, cd: 10, spent: T.cost });
    s.dirty = true; ctx?.fx?.({ type: 'build', seat, x, y, kind: a.kind });
    return null;
  }
  if (a.t === 'up') {
    const t = s.towers.find((q) => q.id === a.id);
    if (!t) return 'Không thấy tháp.';
    if (t.lv >= 2) return 'Tháp đã tối đa.';
    const cost = TOWERS[t.kind].up[t.lv];
    if (s.gold[seat] < cost) return 'Không đủ vàng.';
    s.gold[seat] -= cost; t.lv++; t.spent += cost;
    s.dirty = true; ctx?.fx?.({ type: 'up', seat, x: t.x, y: t.y });
    return null;
  }
  if (a.t === 'sell') {
    const i = s.towers.findIndex((q) => q.id === a.id);
    if (i < 0) return 'Không thấy tháp.';
    if (s.towers[i].own !== seat) return 'Chỉ chủ tháp mới bán được.';
    s.gold[seat] += Math.floor(s.towers[i].spent * 0.7);
    s.towers.splice(i, 1); s.dirty = true;
    return null;
  }
  if (a.t === 'gift') {
    const to = Number(a.to), amt = Math.min(s.gold[seat], 50);
    if (!(to >= 0 && to < s.n) || to === seat || amt <= 0) return 'Không tặng được.';
    s.gold[seat] -= amt; s.gold[to] += amt;
    ctx?.log?.(`💰 ${s.names[seat]} tặng ${amt} vàng cho ${s.names[to]}.`, 'good');
    s.dirty = true;
    return null;
  }
  if (a.t === 'next') {
    if (s.ph !== 'build') return 'Đang có đợt quái.';
    // gọi quái sớm: thưởng vàng theo thời gian còn lại
    const bonus = Math.floor(s.cd / 60);
    if (bonus > 0) for (let i = 0; i < s.n; i++) s.gold[i] += bonus;
    s.cd = 1;
    ctx?.log?.(`📯 ${s.names[seat]} gọi đợt quái sớm${bonus ? ` (+${bonus} vàng mỗi người)` : ''}.`, 'info');
    return null;
  }
  return 'Hành động không rõ.';
}

function startWave(s, ctx) {
  s.wave++; s.ph = 'wave';
  s.queue = waveList(s.wave); s.qT = 30; s.dirty = true;
  ctx?.fx?.({ type: 'wave', w: s.wave, boss: s.queue.some((q) => ENEMIES[q[0]].boss) });
}
export function step(s, inputs, ctx) {
  s.f++;
  if (s.ph === 'win' || s.ph === 'lose') return;
  if (s.ph === 'build') { if (--s.cd <= 0) startWave(s, ctx); }
  // thả quái
  if (s.ph === 'wave' && s.queue.length && --s.qT <= 0) {
    const [t, gap] = s.queue.shift();
    const E = ENEMIES[t];
    const hp = Math.round(E.hp * (1 + (s.wave - 1) * 0.15 + Math.max(0, s.wave - 10) ** 2 * 0.012) * DIFF[s.cfg.diff][0] * (1 + (s.n - 1) * 0.25));
    s.en.push({ id: ++s.eid, t, p: s.eid % s.M.map.paths.length, d: 0, hp, max: hp, slow: 0 });
    s.qT = gap;
  }
  // quái đi
  for (const e of s.en) {
    const E = ENEMIES[e.t];
    const sp = E.sp * (e.slow > 0 ? 1 - e.slowK : 1);
    if (e.slow > 0) e.slow--;
    e.d += sp;
    if (e.d >= s.lens[e.p]) {
      e.done = true; s.lives -= E.dmg; s.leaks++;
      ctx?.fx?.({ type: 'leak', dmg: E.dmg });
      s.dirty = true;
    }
  }
  s.en = s.en.filter((e) => !e.done);
  // tháp bắn
  const pos = new Map(s.en.map((e) => [e.id, posAt(s.M.map.paths[e.p], e.d)]));
  for (const t of s.towers) {
    if (t.cd > 0) { t.cd--; continue; }
    const T = TOWERS[t.kind], R = T.range[t.lv], cx = t.x + 0.5, cy = t.y + 0.5;
    const inR = s.en.filter((e) => (T.air || !ENEMIES[e.t].fly) && Math.hypot(pos.get(e.id)[0] - cx, pos.get(e.id)[1] - cy) <= R);
    if (!inR.length) continue;
    t.cd = T.rate[t.lv];
    const dmg = T.dmg[t.lv];
    if (T.burst) { for (const e of inR) hit(s, e, dmg, t, ctx); s.shots.push([t.id, 0, s.f, 2]); continue; }
    if (T.slow) { for (const e of inR) { e.slow = 40; e.slowK = Math.max(e.slowK || 0, T.slow[t.lv]); hit(s, e, dmg, t, ctx); } s.shots.push([t.id, 0, s.f, 3]); continue; }
    // mục tiêu: con đi xa nhất
    const tg = inR.reduce((a, b) => (b.d > a.d ? b : a));
    if (T.splash) {
      const [tx, ty] = pos.get(tg.id);
      s.shots.push([t.id, tg.id, s.f, 1, Math.round(tx * 100), Math.round(ty * 100)]);
      s.pending ||= [];
      s.pending.push({ at: s.f + 22, x: tx, y: ty, r: T.splash[t.lv], dmg, t });
    } else { hit(s, tg, dmg, t, ctx); s.shots.push([t.id, tg.id, s.f, 0]); }
  }
  // đá rơi trúng
  if (s.pending?.length) {
    const now = s.pending.filter((p) => p.at <= s.f);
    s.pending = s.pending.filter((p) => p.at > s.f);
    for (const p of now) for (const e of s.en) { if (ENEMIES[e.t].fly) continue; const q = posAt(s.M.map.paths[e.p], e.d); if (Math.hypot(q[0] - p.x, q[1] - p.y) <= p.r) hit(s, e, p.dmg, p.t, ctx); }
  }
  s.en = s.en.filter((e) => e.hp > 0);
  s.shots = s.shots.filter((q) => s.f - q[2] < 30);
  // thua / hết đợt
  if (s.lives <= 0) {
    s.lives = 0; s.ph = 'lose'; s.dirty = true;
    ctx?.fx?.({ type: 'lose' });
    ctx?.finish?.({ winners: [], text: `Quái phá được cổng làng ở đợt ${s.wave}/${s.cfg.waves}.`, rank: rankOf(s) });
    return;
  }
  if (s.ph === 'wave' && !s.queue.length && !s.en.length) {
    if (s.wave >= s.cfg.waves) {
      s.ph = 'win'; s.dirty = true;
      ctx?.fx?.({ type: 'win' });
      ctx?.finish?.({ winners: [...Array(s.n).keys()], rank: rankOf(s), text: `Giữ làng thành công qua ${s.cfg.waves} đợt, còn ${s.lives} máu!` });
      return;
    }
    s.ph = 'build'; s.cd = BREAK; s.dirty = true;
    const bonus = 30 + s.wave * 5;
    for (let i = 0; i < s.n; i++) s.gold[i] += bonus;
    ctx?.fx?.({ type: 'clear', w: s.wave, bonus });
  }
}
function hit(s, e, dmg, t, ctx) {
  if (e.hp <= 0) return;
  const real = Math.min(e.hp, dmg);
  e.hp -= dmg; s.dealt[t.own] += real;
  if (e.hp <= 0) { s.kills[t.own]++; share(s, ENEMIES[e.t].gold); if (ENEMIES[e.t].boss) ctx?.fx?.({ type: 'boss', seat: t.own }); }
}
const rankOf = (s) => [...Array(s.n).keys()].sort((a, b) => s.dealt[b] - s.dealt[a]);

export function live(s) {
  const r = (v) => Math.round(v * 100);
  return {
    f: s.f, ph: s.ph, cd: s.cd, wave: s.wave, lives: s.lives, gold: s.gold, left: s.queue.length + s.en.length,
    e: s.en.map((e) => [e.id, e.t, e.p, r(e.d), Math.round((e.hp / e.max) * 100), e.slow > 0 ? 1 : 0]),
    s: s.shots.filter((q) => s.f - q[2] < 26), kills: s.kills, dealt: s.dealt,
  };
}
export function view(s) {
  return { n: s.n, names: s.names, map: s.cfg.map, waves: s.cfg.waves, diff: s.cfg.diff, ph: s.ph, wave: s.wave, lives: s.lives, towers: s.towers.map((t) => [t.id, t.kind, t.x, t.y, t.lv, t.own]), gold: s.gold, kills: s.kills, dealt: s.dealt, built: s.built };
}
export const turn = () => -1;
export const turnKey = () => '';
export function auto() {}
export function endEarly(s) { return { winners: [], text: `Dừng ở đợt ${s.wave}/${s.cfg.waves}.` }; }
export const LOGIC = { minSeats: 1, maxSeats: 4, liveEvery: 3, defaultConfig, cleanConfig, setup, act, auto, turn, turnKey, view, step, live, endEarly };
