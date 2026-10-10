// Rắn Săn Mồi Online — nhiều con rắn chung một cánh đồng (lưới 64×40). Chạy trên máy chủ phòng 60 khung/giây.
// Ăn mồi để dài ra; đầu đâm vào tường hay thân rắn khác (kể cả thân mình) là chết, thân biến thành mồi.
export const GW = 64, GH = 40;
export const DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // phải, xuống, trái, lên
export const COLORS = ['#ff4d5e', '#3b82f6', '#2fbf71', '#ffc43d', '#9775fa', '#ff8a3d', '#18c8d8', '#ff6fb5', '#8d6e63', '#f4f1e8', '#7a8a2a', '#5b5bd6'];
export const BOT_NAMES = ['Rắn Mối', 'Rắn Ráo', 'Rắn Nước', 'Rắn Lục', 'Trăn Gấm', 'Rắn Hổ Mây', 'Rắn Cạp Nia', 'Rắn Roi'];
export const FOOD = { apple: { v: 1 }, banh: { v: 3 }, frog: { v: 5 }, bit: { v: 1 } };
const SPEED = { slow: 8, normal: 6, fast: 4 };

export const defaultConfig = { mode: 'timed', dur: 3, bots: 3, speed: 'normal' };
export function cleanConfig(c, p) {
  const o = {};
  if (['timed', 'survive'].includes(p.mode)) o.mode = p.mode;
  if ([2, 3, 5].includes(Number(p.dur))) o.dur = Number(p.dur);
  if ([0, 1, 2, 3, 4, 6].includes(Number(p.bots))) o.bots = Number(p.bots);
  if (p.speed in SPEED) o.speed = p.speed;
  return o;
}
function rnd(s) { s.rs = (Math.imul(s.rs ^ (s.rs >>> 15), 0x2c1b3c6d) + 0x297a2d39) >>> 0; return s.rs / 4294967296; }
const ri = (s, n) => Math.floor(rnd(s) * n);

export function setup(n, cfg, ctx) {
  const bots = Math.min(12 - n, Math.max(cfg.bots || 0, n < 2 && cfg.mode === 'survive' ? 2 - n : 0));
  const total = n + bots;
  const s = {
    n, total, cfg: { ...cfg }, rs: (Math.floor((ctx?.rng?.() ?? Math.random()) * 2 ** 31) | 1) >>> 0,
    ph: 'intro', pt: 0, f: 0, left: cfg.dur * 3600, border: 0, names: [], bot: [], col: [], sn: [], food: [], fid: 0,
    pts: Array(total).fill(0), kills: Array(total).fill(0), best: Array(total).fill(0), deaths: Array(total).fill(0), seq: Array(total).fill(-1),
    period: SPEED[cfg.speed] || 6, liveCache: null, moved: true, dirty: true, outOrder: [],
  };
  for (let i = 0; i < total; i++) { s.bot.push(i >= n); s.names.push(i >= n ? BOT_NAMES[(i - n) % BOT_NAMES.length] : ctx?.name?.(i) || `Rắn ${i + 1}`); s.col.push(i % COLORS.length); s.sn.push(null); }
  for (let i = 0; i < total; i++) spawn(s, i, i);
  fillFood(s);
  return s;
}
function occupied(s) {
  const o = new Set();
  for (const sn of s.sn) if (sn && sn.alive) for (const [x, y] of sn.b) o.add(x + y * GW);
  return o;
}
function spawn(s, i, slot = -1) {
  const occ = occupied(s);
  const b0 = s.border + 3;
  for (let tries = 0; tries < 200; tries++) {
    let x, y, d;
    if (slot >= 0 && tries < 5) {
      // lúc đầu trận: xếp đều quanh sân, quay vào giữa
      const a = (slot / s.total) * Math.PI * 2;
      x = Math.round(GW / 2 + Math.cos(a) * (GW / 2 - 9)); y = Math.round(GH / 2 + Math.sin(a) * (GH / 2 - 7));
      d = Math.abs(Math.cos(a)) > Math.abs(Math.sin(a)) ? (Math.cos(a) > 0 ? 2 : 0) : (Math.sin(a) > 0 ? 3 : 1);
    } else { x = b0 + ri(s, GW - b0 * 2); y = b0 + ri(s, GH - b0 * 2); d = ri(s, 4); }
    const [dx, dy] = DIRS[d];
    const b = [];
    for (let k = 0; k < 4; k++) b.push([x - dx * k, y - dy * k]);
    // không đè lên ai, phía trước trống vài ô
    let ok = b.every(([bx, by]) => bx >= b0 - 2 && by >= b0 - 2 && bx < GW - b0 + 2 && by < GH - b0 + 2 && !occ.has(bx + by * GW));
    for (let k = 1; k <= 4 && ok; k++) if (occ.has(x + dx * k + (y + dy * k) * GW)) ok = false;
    if (!ok) continue;
    s.sn[i] = { b, d, q: [], grow: 0, alive: true, boost: 0, mv: 0, bc: 0, spawnF: s.f, think: 0 };
    return true;
  }
  return false;
}
function fillFood(s) {
  const want = 14 + s.total * 3;
  const occ = occupied(s);
  for (const f of s.food) occ.add(f.x + f.y * GW);
  let frogs = s.food.filter((f) => f.t === 'frog').length;
  let guard = 0;
  while (s.food.filter((f) => f.t !== 'bit').length < want && guard++ < 400) {
    const x = s.border + 1 + ri(s, GW - 2 - s.border * 2), y = s.border + 1 + ri(s, GH - 2 - s.border * 2);
    if (occ.has(x + y * GW)) continue;
    const k = rnd(s);
    const t = k < 0.05 && frogs < 2 ? 'frog' : k < 0.16 ? 'banh' : 'apple';
    if (t === 'frog') frogs++;
    s.food.push({ id: ++s.fid, t, x, y });
    occ.add(x + y * GW);
  }
}

export function step(s, inputs, ctx) {
  s.f++; s.pt++;
  if (s.ph === 'intro') { if (s.pt >= 180) { s.ph = 'play'; s.pt = 0; s.dirty = true; ctx?.fx?.({ type: 'go' }); s.moved = true; } return; }
  if (s.ph === 'end') return;
  if (s.cfg.mode === 'timed') s.left--;
  // khép rào (chế độ sinh tồn sau 45 giây)
  if (s.cfg.mode === 'survive' && s.pt > 2700 && s.pt % 150 === 0 && s.border < 14) { s.border++; s.moved = true; ctx?.fx?.({ type: 'shrink' }); s.food = s.food.filter((f) => inside(s, f.x, f.y)); }
  // phím người chơi
  for (let i = 0; i < s.n; i++) {
    const v = inputs[i], sn = s.sn[i];
    if (!v || typeof v !== 'object' || !sn) continue;
    if (v.s !== s.seq[i] && [0, 1, 2, 3].includes(v.d)) { s.seq[i] = v.s; if (sn.q.length < 3) sn.q.push(v.d); }
    sn.boost = v.b ? 1 : 0;
  }
  // ếch nhảy
  if (s.f % 40 === 0) {
    const occ = occupied(s);
    for (const f of s.food) if (f.t === 'frog') { const [dx, dy] = DIRS[ri(s, 4)]; const nx = f.x + dx, ny = f.y + dy; if (inside(s, nx, ny) && !occ.has(nx + ny * GW)) { f.x = nx; f.y = ny; s.moved = true; } }
  }
  // ai đến lượt bò
  const movers = [];
  s.sn.forEach((sn, i) => {
    if (!sn) return;
    if (!sn.alive) {
      if (s.cfg.mode === 'timed' && s.f >= sn.respawnAt) { if (spawn(s, i)) { s.moved = true; ctx?.fx?.({ type: 'spawn', i }); } }
      return;
    }
    if (s.bot[i]) botThink(s, i);
    const fast = sn.boost && sn.b.length > 5;
    sn.mv++;
    if (sn.mv >= (fast ? Math.max(2, s.period >> 1) : s.period)) { sn.mv = 0; movers.push(i); if (fast && ++sn.bc % 5 === 0) { const t = sn.b.pop(); dropFood(s, t[0], t[1], 'bit'); } }
  });
  if (!movers.length) return;
  s.moved = true;
  // tính đầu mới
  const heads = new Map();
  for (const i of movers) {
    const sn = s.sn[i];
    while (sn.q.length) { const d = sn.q.shift(); if (d !== sn.d && (d + 2) % 4 !== sn.d) { sn.d = d; break; } }
    const [dx, dy] = DIRS[sn.d], [hx, hy] = sn.b[0];
    heads.set(i, [hx + dx, hy + dy]);
  }
  // ô bị chiếm (đuôi của con sắp bò mà không lớn thì được tính là trống)
  const occ = new Map();
  s.sn.forEach((sn, i) => {
    if (!sn || !sn.alive) return;
    const L = sn.b.length - (heads.has(i) && sn.grow === 0 ? 1 : 0);
    for (let k = 0; k < L; k++) occ.set(sn.b[k][0] + sn.b[k][1] * GW, i);
  });
  const dead = new Map(); // i -> người giết (-1 = tự chết)
  for (const [i, [x, y]] of heads) {
    if (!inside(s, x, y)) { dead.set(i, -1); continue; }
    const who = occ.get(x + y * GW);
    if (who !== undefined) dead.set(i, who === i ? -1 : who);
  }
  // đối đầu: con dài hơn thắng, bằng nhau thì cùng chết
  const byCell = new Map();
  for (const [i, [x, y]] of heads) { const k = x + y * GW; if (!byCell.has(k)) byCell.set(k, []); byCell.get(k).push(i); }
  for (const list of byCell.values()) {
    if (list.length < 2) continue;
    const maxL = Math.max(...list.map((i) => s.sn[i].b.length));
    const top = list.filter((i) => s.sn[i].b.length === maxL);
    for (const i of list) if (top.length > 1 || s.sn[i].b.length < maxL) dead.set(i, top.length === 1 ? top[0] : -1);
  }
  for (const [i, [x, y]] of heads) {
    if (dead.has(i)) continue;
    const sn = s.sn[i];
    sn.b.unshift([x, y]);
    if (sn.grow > 0) sn.grow--; else sn.b.pop();
    // ăn mồi
    const fi = s.food.findIndex((f) => f.x === x && f.y === y);
    if (fi >= 0) {
      const f = s.food[fi]; s.food.splice(fi, 1);
      const v = FOOD[f.t].v;
      sn.grow += v; s.pts[i] += v;
      if (f.t !== 'bit') ctx?.fx?.({ type: 'eat', i, t: f.t, x, y });
    }
    s.best[i] = Math.max(s.best[i], sn.b.length + sn.grow);
  }
  for (const [i, by] of dead) kill(s, i, by, ctx);
  if (dead.size) s.dirty = true;
  fillFood(s);
  // hết trận
  const aliveIdx = s.sn.map((sn, i) => (sn && sn.alive ? i : -1)).filter((i) => i >= 0);
  if (s.cfg.mode === 'timed' && s.left <= 0) finish(s, ctx, 'Hết giờ!');
  else if (s.cfg.mode === 'survive' && (s.total > 1 ? aliveIdx.length <= 1 : aliveIdx.length === 0)) finish(s, ctx, aliveIdx.length ? `${s.names[aliveIdx[0]]} trụ lại cuối cùng!` : 'Không còn con rắn nào!');
}
const inside = (s, x, y) => x >= s.border && y >= s.border && x < GW - s.border && y < GH - s.border;
function dropFood(s, x, y, t) { if (inside(s, x, y) && !s.food.some((f) => f.x === x && f.y === y)) s.food.push({ id: ++s.fid, t, x, y }); }
function kill(s, i, by, ctx) {
  const sn = s.sn[i];
  sn.alive = false; sn.respawnAt = s.f + 180; s.deaths[i]++;
  s.outOrder.push(i);
  sn.b.forEach(([x, y], k) => { if (k % 2 === 0) dropFood(s, x, y, 'bit'); });
  if (by >= 0) { s.kills[by]++; s.pts[by] += 10; }
  if (s.cfg.mode === 'timed') s.pts[i] = Math.max(0, s.pts[i] - 5);
  ctx?.fx?.({ type: 'die', i, by, x: sn.b[0][0], y: sn.b[0][1] });
  ctx?.log?.(by >= 0 ? `🐍 ${s.names[by]} hạ gục ${s.names[i]}!` : `💥 ${s.names[i]} tự đâm!`, 'move');
}
function finish(s, ctx, why) {
  s.ph = 'end'; s.dirty = true; s.moved = true;
  let rank;
  if (s.cfg.mode === 'timed') rank = [...Array(s.total).keys()].sort((a, b) => s.pts[b] - s.pts[a] || s.kills[b] - s.kills[a]);
  else {
    const alive = s.sn.map((sn, i) => (sn?.alive ? i : -1)).filter((i) => i >= 0);
    rank = [...alive, ...[...s.outOrder].reverse().filter((i) => !alive.includes(i))];
  }
  s.rank = rank;
  const top = rank[0];
  const humans = rank.filter((i) => i < s.n);
  ctx?.finish?.({ winners: top !== undefined && top < s.n && (s.total > 1 || s.cfg.mode === 'timed') ? [top] : [], rank: humans, text: `${why} ${top !== undefined ? `Rắn vô địch: ${s.names[top]}${top >= s.n ? ' (máy)' : ''} — ${s.pts[top]} điểm, ${s.kills[top]} lần hạ gục.` : ''}` });
}

// ---------- rắn máy ----------
function botThink(s, i) {
  const sn = s.sn[i];
  if (sn.mv !== s.period - 1 && sn.mv !== 0) return; // chỉ nghĩ ngay trước khi bò
  const occ = occupied(s);
  const [hx, hy] = sn.b[0];
  // mục tiêu: mồi gần nhất (ưu tiên mồi to)
  let tg = null, td = 1e9;
  for (const f of s.food) { const d = Math.abs(f.x - hx) + Math.abs(f.y - hy) - FOOD[f.t].v * 2; if (d < td) { td = d; tg = f; } }
  let best = sn.d, bestScore = -1e9;
  for (let d = 0; d < 4; d++) {
    if ((d + 2) % 4 === sn.d) continue;
    const nx = hx + DIRS[d][0], ny = hy + DIRS[d][1];
    if (!inside(s, nx, ny) || occ.has(nx + ny * GW)) continue;
    const room = flood(s, occ, nx, ny, 40);
    let sc = room >= 40 ? 0 : -400 + room * 8;
    if (tg) sc -= (Math.abs(tg.x - nx) + Math.abs(tg.y - ny)) * 3;
    // tránh đầu rắn khác
    for (const o of s.sn) if (o && o !== sn && o.alive && Math.abs(o.b[0][0] - nx) + Math.abs(o.b[0][1] - ny) <= 1) sc -= 60;
    sc += rnd(s) * 2;
    if (sc > bestScore) { bestScore = sc; best = d; }
  }
  sn.q = [best];
  sn.boost = tg && td < 6 && sn.b.length > 12 && rnd(s) < 0.1 ? 1 : 0;
}
function flood(s, occ, x, y, cap) {
  const seen = new Set([x + y * GW]), st = [[x, y]];
  while (st.length && seen.size < cap) {
    const [cx, cy] = st.pop();
    for (const [dx, dy] of DIRS) { const nx = cx + dx, ny = cy + dy, k = nx + ny * GW; if (inside(s, nx, ny) && !occ.has(k) && !seen.has(k)) { seen.add(k); st.push([nx, ny]); } }
  }
  return seen.size;
}

// ---------- gửi đi ----------
export function live(s) {
  if (!s.moved && s.liveCache && s.f % 30) return s.liveCache;
  s.moved = false;
  const sn = s.sn.map((o) => {
    if (!o) return null;
    let p = '';
    for (let k = 1; k < o.b.length; k++) { const dx = o.b[k][0] - o.b[k - 1][0], dy = o.b[k][1] - o.b[k - 1][1]; p += dx === 1 ? 0 : dy === 1 ? 1 : dx === -1 ? 2 : 3; }
    return [o.b[0][0], o.b[0][1], p, o.alive ? 1 : 0, o.boost && o.b.length > 5 ? 1 : 0, o.d, o.alive ? 0 : Math.max(0, o.respawnAt - s.f)];
  });
  const fd = [];
  for (const f of s.food) fd.push(f.x, f.y, f.t === 'apple' ? 0 : f.t === 'banh' ? 1 : f.t === 'frog' ? 2 : 3);
  s.liveCache = { f: s.f, ph: s.ph, pt: s.pt, left: s.left, border: s.border, sn, fd, pts: s.pts, kills: s.kills, period: s.period };
  return s.liveCache;
}
export function view(s) {
  return { n: s.n, total: s.total, names: s.names, bot: s.bot, col: s.col, mode: s.cfg.mode, dur: s.cfg.dur, ph: s.ph, pts: s.pts, kills: s.kills, best: s.best, rank: s.rank || null };
}
export const turn = () => -1;
export const turnKey = () => '';
export function auto() {}
export function endEarly(s, ctx) { finish(s, { ...ctx, finish: (r) => (s._r = r) }, 'Dừng sớm.'); return s._r; }
export const LOGIC = { minSeats: 1, maxSeats: 10, maxPeople: 16, liveEvery: 1, defaultConfig, cleanConfig, setup, act: () => null, auto, turn, turnKey, view, step, live, endEarly };
