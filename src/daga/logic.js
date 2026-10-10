// Đá Gà Pixel — luật + mô phỏng, chạy trên máy chủ phòng 60 khung/giây.
// Sàn đấu hình tròn co dần; gà húc nhau văng ra ngoài rơi xuống ao bùn. Gà trụ lại cuối cùng thắng hiệp.
// Toạ độ thế giới: tâm sàn (0,0), bán kính ban đầu 150.

export const BIT = { U: 1, D: 2, L: 4, R: 8, DASH: 16 | 32 | 256 | 2048, JUMP: 64 | 128 | 512 };
export const BREEDS = [
  { name: 'Gà Trắng', c: '#f4f1e8', t: '#3a3546' },
  { name: 'Gà Ô', c: '#3f3a52', t: '#18e0c8' },
  { name: 'Gà Điều', c: '#c9532d', t: '#2d6b3a' },
  { name: 'Gà Nhạn', c: '#f2c230', t: '#c9532d' },
  { name: 'Gà Xám', c: '#9aa0ad', t: '#3a3546' },
  { name: 'Gà Tía', c: '#a2408f', t: '#f2c230' },
  { name: 'Gà Lam', c: '#3c8de0', t: '#f4f1e8' },
  { name: 'Gà Lá', c: '#3fae5a', t: '#7a3b1d' },
];
export const BOT_NAMES = ['Gà Tre Máy', 'Gà Nòi Máy', 'Gà Chọi Máy', 'Gà Ri Máy', 'Gà Mía Máy', 'Gà Đông Tảo Máy', 'Gà Hồ Máy'];
export const ITEMS = { corn: '🌽', chili: '🌶️', banana: '🍌' };
const R0 = 150, RMIN = 46, CR = 9; // bán kính sàn, nhỏ nhất, bán kính con gà
const INTRO = 180, ROUND_END = 170;
const DIRS = [[1, 0], [0.707, 0.707], [0, 1], [-0.707, 0.707], [-1, 0], [-0.707, -0.707], [0, -1], [0.707, -0.707]];

export const defaultConfig = { wins: 2, shrink: 'normal', items: true, bots: 1 };
export function cleanConfig(c, p) {
  const o = {};
  if ([1, 2, 3].includes(Number(p.wins))) o.wins = Number(p.wins);
  if (['slow', 'normal', 'fast'].includes(p.shrink)) o.shrink = p.shrink;
  if (typeof p.items === 'boolean') o.items = p.items;
  if ([0, 1, 2, 3, 4].includes(Number(p.bots))) o.bots = Number(p.bots);
  return o;
}

function rnd(s) { s.rs = (Math.imul(s.rs ^ (s.rs >>> 15), 0x2c1b3c6d) + 0x297a2d39) >>> 0; return s.rs / 4294967296; }

export function setup(n, cfg, ctx) {
  const bots = Math.min(8 - n, Math.max(cfg.bots || 0, n < 2 ? 2 - n : 0));
  const total = n + bots;
  const s = {
    n, total, cfg: { ...cfg }, wins: Array(total).fill(0), kos: Array(total).fill(0),
    names: [], breed: [], bot: [], round: 0, ph: 'intro', pt: 0, f: 0, R: R0,
    c: [], it: [], ev: 0, rs: (Math.floor((ctx?.rng?.() ?? Math.random()) * 2 ** 31) | 1) >>> 0, lastWin: -1, dirty: true, champ: -1,
  };
  for (let i = 0; i < total; i++) {
    s.bot.push(i >= n);
    s.names.push(i >= n ? BOT_NAMES[(i - n) % BOT_NAMES.length] : ctx?.name?.(i) || `Gà ${i + 1}`);
    s.breed.push(i % BREEDS.length);
  }
  newRound(s);
  return s;
}
function newRound(s) {
  s.round++; s.ph = 'intro'; s.pt = 0; s.R = R0; s.it = []; s.lastWin = -1;
  s.c = [];
  for (let i = 0; i < s.total; i++) {
    const a = (i / s.total) * Math.PI * 2 + (s.round * 0.7);
    s.c.push({ x: Math.cos(a) * R0 * 0.62, y: Math.sin(a) * R0 * 0.62, vx: 0, vy: 0, face: (Math.round(((a + Math.PI) / (Math.PI / 4))) % 8 + 8) % 8,
      st: 'go', t: 0, dash: 0, dcd: 0, jump: 0, jcd: 0, stun: 0, slip: 0, corn: 0, chili: 0, fall: 0, last: -1, lastT: 0, out: 0, prev: 0, walk: 0, think: 0, bi: 0 });
  }
}

const alive = (s) => s.c.filter((c) => c.st === 'go');

export function step(s, inputs, ctx) {
  s.f++; s.pt++;
  if (s.ph === 'over') return;
  if (s.ph === 'intro') {
    for (const c of s.c) c.prev = inputs[s.c.indexOf(c)] || 0;
    if (s.pt >= INTRO) { s.ph = 'fight'; s.pt = 0; ctx?.fx?.({ type: 'go' }); }
    return;
  }
  // co sàn
  if (s.ph === 'fight') {
    const start = { slow: 900, normal: 600, fast: 360 }[s.cfg.shrink] || 600;
    const rate = { slow: 0.035, normal: 0.055, fast: 0.09 }[s.cfg.shrink] || 0.055;
    if (s.pt > start) s.R = Math.max(RMIN, s.R - rate);
    // vật phẩm
    if (s.cfg.items && s.pt % 300 === 150 && s.it.length < 3) {
      const a = rnd(s) * Math.PI * 2, r = Math.sqrt(rnd(s)) * s.R * 0.7, k = rnd(s);
      s.it.push({ id: ++s.ev, type: k < 0.38 ? 'corn' : k < 0.7 ? 'chili' : 'banana', x: Math.cos(a) * r, y: Math.sin(a) * r, t: 0 });
    }
  }
  for (const it of s.it) it.t++;
  s.it = s.it.filter((it) => it.t < 900 && Math.hypot(it.x, it.y) < s.R - 4);
  // điều khiển
  s.c.forEach((c, i) => {
    const inp = s.bot[i] ? botInput(s, i) : (inputs[i] || 0);
    control(s, c, i, s.ph === 'fight' ? inp : 0, ctx);
  });
  // va chạm giữa các con gà
  for (let i = 0; i < s.c.length; i++) for (let j = i + 1; j < s.c.length; j++) collide(s, s.c[i], s.c[j], i, j, ctx);
  // nhặt vật phẩm, rơi khỏi sàn
  s.c.forEach((c, i) => {
    if (c.st !== 'go') { if (c.st === 'fall' && ++c.fall > 40) { c.st = 'out'; } return; }
    if (!c.jump) for (const it of s.it) {
      if (Math.hypot(it.x - c.x, it.y - c.y) > CR + 6) continue;
      it.t = 9999;
      if (it.type === 'corn') { c.corn = 3; ctx?.fx?.({ type: 'item', k: 'corn', i, x: c.x, y: c.y }); }
      else if (it.type === 'chili') { c.chili = 300; ctx?.fx?.({ type: 'item', k: 'chili', i, x: c.x, y: c.y }); }
      else { c.slip = 55; c.stun = 0; const sp = Math.hypot(c.vx, c.vy) || 1; c.vx = (c.vx / sp) * 3.2; c.vy = (c.vy / sp) * 3.2; ctx?.fx?.({ type: 'slip', i, x: c.x, y: c.y }); }
    }
    if (!c.jump && Math.hypot(c.x, c.y) > s.R + 3) {
      c.st = 'fall'; c.fall = 0; c.out = s.f;
      const by = c.last >= 0 && s.f - c.lastT < 150 ? c.last : -1;
      if (by >= 0) s.kos[by]++;
      ctx?.fx?.({ type: 'fall', i, by, x: c.x, y: c.y });
      ctx?.log?.(by >= 0 ? `🐓 ${s.names[by]} hất ${s.names[i]} xuống ao!` : `🐓 ${s.names[i]} tự lọt xuống ao!`, 'move');
    }
  });
  s.it = s.it.filter((it) => it.t < 9999);
  // hết hiệp
  if (s.ph === 'fight') {
    const a = alive(s);
    const falling = s.c.some((c) => c.st === 'fall');
    if (a.length <= 1 && !falling) {
      const w = a.length ? s.c.indexOf(a[0]) : lastOut(s);
      s.lastWin = w;
      if (w >= 0) s.wins[w]++;
      s.ph = 'roundEnd'; s.pt = 0; s.dirty = true;
      ctx?.fx?.({ type: 'round', w });
      ctx?.log?.(w >= 0 ? `🏆 ${s.names[w]} thắng hiệp ${s.round}!` : `Hiệp ${s.round} hoà.`, 'win');
    }
  } else if (s.ph === 'roundEnd' && s.pt >= ROUND_END) {
    const champ = s.wins.findIndex((v) => v >= s.cfg.wins);
    if (champ >= 0) {
      s.ph = 'over'; s.champ = champ; s.dirty = true;
      const rank = s.wins.map((v, i) => i).sort((a, b) => s.wins[b] - s.wins[a] || s.kos[b] - s.kos[a]).filter((i) => i < s.n);
      ctx?.finish?.({ winners: champ < s.n ? [champ] : [], rank, text: champ < s.n ? `${BREEDS[s.breed[champ]].name} vô địch sàn đấu!` : `${s.names[champ]} (máy) vô địch!` });
    } else { newRound(s); s.dirty = true; }
  }
}
function lastOut(s) {
  // tất cả cùng rơi: con rơi sau cùng thắng
  let best = -1, t = -1;
  s.c.forEach((c, i) => { if (c.out > t) { t = c.out; best = i; } else if (c.out === t) best = -1; });
  return best;
}

function control(s, c, i, inp, ctx) {
  if (c.st !== 'go') { c.vx *= 0.9; c.vy *= 0.9; c.x += c.vx; c.y += c.vy; return; }
  const pressed = inp & ~c.prev;
  c.prev = inp;
  if (c.dcd > 0) c.dcd--;
  if (c.jcd > 0) c.jcd--;
  if (c.chili > 0) c.chili--;
  let dx = ((inp & BIT.R) ? 1 : 0) - ((inp & BIT.L) ? 1 : 0), dy = ((inp & BIT.D) ? 1 : 0) - ((inp & BIT.U) ? 1 : 0);
  const free = !c.stun && !c.slip && !c.dash;
  if ((dx || dy) && !c.slip && !c.stun) c.face = (Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) + 8) % 8;
  if (c.stun > 0) c.stun--;
  if (c.slip > 0) { c.slip--; c.x += c.vx; c.y += c.vy; c.vx *= 0.985; c.vy *= 0.985; return; }
  // nhảy
  if (c.jump > 0) {
    c.jump--;
    if (dx || dy) { const l = Math.hypot(dx, dy); c.vx += (dx / l) * 0.08; c.vy += (dy / l) * 0.08; }
    c.x += c.vx; c.y += c.vy; c.vx *= 0.99; c.vy *= 0.99;
    if (c.jump === 0) land(s, c, i, ctx);
    return;
  }
  if (free && (pressed & BIT.JUMP) && !c.jcd) { c.jump = 34; c.jcd = 75; ctx?.fx?.({ type: 'jump', i }); return; }
  // húc
  if (free && (pressed & BIT.DASH) && !c.dcd) {
    const [fx, fy] = DIRS[c.face];
    const pw = c.corn > 0 ? 7.6 : 5.4;
    c.vx = fx * pw; c.vy = fy * pw; c.dash = 13; c.dcd = 42; c.bi = c.corn > 0 ? 1 : 0;
    if (c.corn > 0) c.corn--;
    ctx?.fx?.({ type: 'dash', i, big: c.bi });
  }
  if (c.dash > 0) { c.dash--; c.x += c.vx; c.y += c.vy; c.vx *= 0.94; c.vy *= 0.94; return; }
  const max = c.chili > 0 ? 2.25 : 1.55, acc = c.chili > 0 ? 0.36 : 0.26;
  if (!c.stun && (dx || dy)) { const l = Math.hypot(dx, dy); c.vx += (dx / l) * acc; c.vy += (dy / l) * acc; c.walk++; }
  const sp = Math.hypot(c.vx, c.vy);
  if (sp > max && !c.stun) { c.vx *= 0.9; c.vy *= 0.9; }
  if (!(dx || dy) || c.stun) { c.vx *= 0.86; c.vy *= 0.86; }
  c.x += c.vx; c.y += c.vy;
}
function land(s, c, i, ctx) {
  // đáp trúng đầu con khác = dẫm choáng
  for (let j = 0; j < s.c.length; j++) {
    const o = s.c[j];
    if (j === i || o.st !== 'go' || o.jump) continue;
    const d = Math.hypot(o.x - c.x, o.y - c.y);
    if (d < CR * 1.7) {
      o.stun = 45; o.dash = 0; const nx = (o.x - c.x) / (d || 1), ny = (o.y - c.y) / (d || 1);
      o.vx += nx * 2.4; o.vy += ny * 2.4; o.last = i; o.lastT = s.f;
      ctx?.fx?.({ type: 'stomp', i, j, x: o.x, y: o.y });
    }
  }
}
function collide(s, a, b, i, j, ctx) {
  if (a.st !== 'go' || b.st !== 'go' || a.jump || b.jump) return;
  let dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy);
  if (d >= CR * 2) return;
  if (d < 0.01) { dx = 1; dy = 0; d = 1; }
  const nx = dx / d, ny = dy / d, ov = CR * 2 - d;
  a.x -= nx * ov / 2; a.y -= ny * ov / 2; b.x += nx * ov / 2; b.y += ny * ov / 2;
  const va = a.vx * nx + a.vy * ny, vb = b.vx * nx + b.vy * ny, rel = va - vb;
  if (rel <= 0) return;
  // va chạm đàn hồi + thưởng lực khi đang húc
  const e = 1.25;
  const imp = (rel * (1 + e)) / 2;
  a.vx -= imp * nx; a.vy -= imp * ny; b.vx += imp * nx; b.vy += imp * ny;
  const hit = (att, def, sx, sy, ai, di) => {
    const k = att.bi ? 4.6 : 3.0;
    def.vx += sx * k; def.vy += sy * k; def.stun = att.bi ? 30 : 18; def.dash = 0;
    att.vx *= 0.35; att.vy *= 0.35; att.dash = Math.min(att.dash, 2);
    def.last = ai; def.lastT = s.f;
    ctx?.fx?.({ type: 'hit', i: ai, j: di, big: att.bi, x: (att.x + def.x) / 2, y: (att.y + def.y) / 2 });
  };
  if (a.dash && !b.dash) hit(a, b, nx, ny, i, j);
  else if (b.dash && !a.dash) hit(b, a, -nx, -ny, j, i);
  else if (a.dash && b.dash) { a.stun = b.stun = 14; a.dash = b.dash = 0; ctx?.fx?.({ type: 'clash', x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }); a.last = j; b.last = i; a.lastT = b.lastT = s.f; }
  else if (rel > 1.2) { a.last = j; b.last = i; a.lastT = b.lastT = s.f; }
}

// ---------- gà máy ----------
function botInput(s, i) {
  const c = s.c[i];
  if (c.st !== 'go') return 0;
  if (c.think > 0) { c.think--; return c.bin || 0; }
  c.think = 4 + Math.floor(rnd(s) * 4);
  let b = 0;
  const r = Math.hypot(c.x, c.y);
  const go = (tx, ty) => { const ax = tx - c.x, ay = ty - c.y; if (ax > 4) b |= BIT.R; if (ax < -4) b |= BIT.L; if (ay > 4) b |= BIT.D; if (ay < -4) b |= BIT.U; };
  // gần mép: chạy vào tâm
  if (r > s.R - 26) { go(0, 0); c.bin = b; return b; }
  // né vỏ chuối
  // tìm mục tiêu: con gần nhất
  let tg = null, td = 1e9;
  s.c.forEach((o, j) => { if (j === i || o.st !== 'go') return; const d = Math.hypot(o.x - c.x, o.y - c.y); if (d < td) { td = d; tg = o; } });
  if (!tg) { c.bin = 0; return 0; }
  // có con đang lao tới: nhảy né
  if (tg.dash && td < 42 && !c.jcd && rnd(s) < 0.5) { c.bin = BIT.JUMP; c.think = 2; return BIT.JUMP; }
  // vật phẩm tốt ở gần
  const good = s.it.find((it) => it.type !== 'banana' && Math.hypot(it.x - c.x, it.y - c.y) < 55);
  if (good && td > 45) { go(good.x, good.y); c.bin = b; return b; }
  // đứng phía tâm sàn so với mục tiêu rồi húc ra ngoài
  const tr = Math.hypot(tg.x, tg.y) || 1;
  const sx = tg.x - (tg.x / tr) * 24, sy = tg.y - (tg.y / tr) * 24;
  if (td < 52) {
    go(tg.x, tg.y);
    const ang = Math.atan2(tg.y - c.y, tg.x - c.x), want = (Math.round(ang / (Math.PI / 4)) + 8) % 8;
    if (want === c.face && !c.dcd && rnd(s) < 0.75) b |= BIT.DASH;
  } else go(sx, sy);
  c.bin = b;
  return b;
}

// ---------- gửi đi ----------
export function live(s) {
  const r = (v) => Math.round(v * 10) / 10;
  return {
    f: s.f, ph: s.ph, pt: s.pt, R: r(s.R), round: s.round, lw: s.lastWin,
    c: s.c.map((c) => [r(c.x), r(c.y), r(c.vx), r(c.vy), c.face, c.st === 'go' ? 0 : c.st === 'fall' ? 1 : 2, c.fall, (c.dash ? 1 : 0) | (c.stun ? 2 : 0) | (c.slip ? 4 : 0) | (c.corn ? 8 : 0) | (c.chili ? 16 : 0), c.jump, c.walk & 255, c.dcd, c.jcd]),
    it: s.it.map((it) => [it.id, it.type, r(it.x), r(it.y)]),
  };
}
export function view(s) {
  return { n: s.n, total: s.total, names: s.names, breed: s.breed, bot: s.bot, wins: s.wins, kos: s.kos, need: s.cfg.wins, round: s.round, ph: s.ph, champ: s.champ, items: s.cfg.items };
}
export const turn = () => -1;
export const turnKey = () => '';
export function auto() {}
export function endEarly(s) {
  const best = s.wins.map((v, i) => i).sort((a, b) => s.wins[b] - s.wins[a] || s.kos[b] - s.kos[a]);
  const top = best.filter((i) => i < s.n);
  return { winners: top.length && s.wins[top[0]] > 0 ? [top[0]] : [], rank: top, text: 'Dừng giữa chừng.' };
}
export const LOGIC = { minSeats: 1, maxSeats: 8, defaultConfig, cleanConfig, setup, act: () => 'Dùng phím để điều khiển gà.', auto, turn, turnKey, view, step, live, endEarly };
