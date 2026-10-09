// Mô phỏng trận đấu "Quyền Cước 97" — TẤT ĐỊNH (cùng input → cùng kết quả trên mọi máy), chỉ dùng số nguyên.
// Đơn vị: 1 px = 100 u. Trục y hướng lên, mặt đất y = 0. 60 khung hình / giây.
import { CHAR } from './chars.js';

export const U = 100, FPS = 60;
export const STAGE_W = 960;
const WALL_L = 40 * U, WALL_R = 920 * U;
const GRAV = 95;
// bit nút bấm
export const B = { U: 1, D: 2, L: 4, R: 8, LP: 16, HP: 32, LK: 64, HK: 128, S1: 256, S2: 512, S3: 1024, SUP: 2048 };
const NEUTRAL = ['idle', 'walkf', 'walkb', 'crouch'];
const ATK = B.LP | B.HP | B.LK | B.HK | B.S1 | B.S2 | B.S3 | B.SUP;
const NORMAL_KEYS = ['sLP', 'sHP', 'sLK', 'sHK', 'cLP', 'cHP', 'cLK', 'cHK'];
const BLOCKABLE = [...NEUTRAL, 'block'];
const sgn = (v) => (v > 0 ? 1 : v < 0 ? -1 : 0);
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

// ---------- bảng chiêu ----------
// hb: [x0, y0, x1, y1] px (x tính theo hướng mặt), s/a/r: khung khởi động / có hiệu lực / hồi
const NORMALS = {
  sLP: { s: 3, a: 3, r: 6, dmg: 28, hb: [18, 92, 80, 118], hs: 14, bs: 9, push: 12, h: 'mid', cancel: 1, chain: 1, pose: 'jab' },
  sHP: { s: 6, a: 4, r: 14, dmg: 72, hb: [18, 96, 102, 128], hs: 19, bs: 14, push: 22, h: 'mid', cancel: 1, pose: 'punch' },
  sLK: { s: 4, a: 3, r: 8, dmg: 32, hb: [18, 40, 90, 72], hs: 14, bs: 9, push: 14, h: 'mid', cancel: 1, chain: 1, pose: 'kickL' },
  sHK: { s: 8, a: 4, r: 17, dmg: 82, hb: [22, 76, 120, 112], hs: 19, bs: 14, push: 26, h: 'mid', pose: 'kickH' },
  cLP: { s: 3, a: 2, r: 6, dmg: 24, hb: [18, 52, 78, 74], hs: 13, bs: 8, push: 10, h: 'mid', cancel: 1, chain: 1, pose: 'cjab' },
  cHP: { s: 5, a: 5, r: 16, dmg: 68, hb: [6, 70, 72, 152], hs: 18, bs: 13, push: 18, h: 'mid', cancel: 1, pose: 'cupper' },
  cLK: { s: 4, a: 3, r: 8, dmg: 28, hb: [18, 0, 90, 26], hs: 14, bs: 9, push: 12, h: 'low', cancel: 1, chain: 1, pose: 'ckick' },
  cHK: { s: 7, a: 4, r: 20, dmg: 68, hb: [18, 0, 124, 26], hs: 20, bs: 14, push: 20, h: 'low', kd: 1, pose: 'sweep' },
  jLP: { s: 3, a: 8, r: 4, dmg: 32, hb: [10, 40, 68, 80], hs: 14, bs: 9, push: 10, h: 'over', air: 1, pose: 'jpunch' },
  jHP: { s: 5, a: 6, r: 6, dmg: 72, hb: [10, 20, 80, 70], hs: 19, bs: 13, push: 14, h: 'over', air: 1, pose: 'jpunch' },
  jLK: { s: 3, a: 9, r: 4, dmg: 36, hb: [6, 10, 78, 50], hs: 14, bs: 9, push: 10, h: 'over', air: 1, pose: 'jkick' },
  jHK: { s: 5, a: 6, r: 6, dmg: 78, hb: [10, 0, 96, 46], hs: 19, bs: 13, push: 14, h: 'over', air: 1, pose: 'jkick' },
  throw: { s: 2, a: 1, r: 22, dmg: 120, pose: 'throw' },
};
const PROJ_TYPES = ['proj', 'wave', 'boomerang', 'lob', 'spread', 'bounce', 'barbell', 'juggle', 'hoop'];
// thông số từng loại chiêu (H = 1 khi bấm nút mạnh)
function special(sp, heavy) {
  const H = heavy ? 1 : 0;
  const HIT = { hs: 18, bs: 13, push: 16, chip: 8, h: 'mid' };
  switch (sp.type) {
    // ----- Tèo
    case 'proj': return { ...HIT, s: 13, a: 1, r: 30, dmg: 70, pspd: 480 + 280 * H, pose: 'palm' };
    case 'rise': return { ...HIT, s: 3, a: 14, r: 26, dmg: 95 + 25 * H, hb: [0, 70, 60, 165], vy: 1350 + 300 * H, vx: 180, kd: 1, hs: 20, bs: 16, push: 20, chip: 10, inv: [0, 7], pose: 'uppercut' };
    case 'counter': return { s: 3, a: 22, r: 18, dmg: 115 + 15 * H, counter: 1, pose: 'stance' };
    // ----- Mai
    case 'dash': return { ...HIT, s: 6, a: 16 + 4 * H, r: 16, dmg: 85 + 15 * H, hb: [10, 56, 96, 104], spd: 900 + 180 * H, kd: 1, hs: 20, bs: 15, push: 26, pose: 'flykick' };
    case 'multikick': return { ...HIT, s: 4, a: 26 + 6 * H, r: 14, dmg: 20, hb: [10, 48, 96, 134], hits: 5 + H, every: 5, hs: 13, bs: 8, push: 5, chip: 3, kdLast: 1, pose: 'multikick' };
    case 'dive': return { ...HIT, s: 5, a: 70, r: 10, dmg: 85 + 10 * H, hb: [0, -20, 74, 50], h: 'over', kd: 1, jvy: 1450, jvx: 260, diveAt: 18, dvx: 850 + 200 * H, dvy: -1500, air2: 1, pose: 'dive' };
    // ----- Bác Sấm
    case 'grab': return { s: 4, a: 2, r: 32, dmg: 190 + 30 * H, range: 92 + 10 * H, pose: 'grab', grab: 1 };
    case 'armor': return { ...HIT, s: 9, a: 18 + 4 * H, r: 18, dmg: 90 + 15 * H, hb: [10, 80, 74, 134], spd: 760 + 150 * H, kd: 1, push: 24, armor: 1 + H, pose: 'headbutt' };
    case 'quake': return { ...HIT, s: 18, a: 5, r: 20, dmg: 80 + 10 * H, range: 175, hs: 22, bs: 14, kd: 1, h: 'low', pose: 'stomp' };
    // ----- Lão Hạc
    case 'tele': return { s: 15, a: 1, r: 11, inv: [0, 16], pose: 'tele' };
    case 'stretch': return { ...HIT, s: 9, a: 5, r: 22, dmg: 70 + 10 * H, hb: [30, 86, 250 + 40 * H, 116], push: 18, chip: 5, pose: 'stretch' };
    case 'wave': return { ...HIT, s: 14, a: 1, r: 30, dmg: 45, pspd: 360 + 120 * H, pose: 'palm' };
    // ----- Tư Xích Lô
    case 'boomerang': return { ...HIT, s: 12, a: 1, r: 28, dmg: 50, pspd: 760 + 100 * H, ret: 30 + 6 * H, pose: 'toss' };
    case 'charge': return { ...HIT, s: 8, a: 30 + 6 * H, r: 18, dmg: 90 + 15 * H, hb: [0, 30, 76, 140], spd: 1050 + 150 * H, kd: 1, push: 22, invProj: 1, pose: 'charge' };
    case 'launcher': return { ...HIT, s: 7, a: 4, r: 24, dmg: 60 + 10 * H, hb: [14, 30, 92, 124], launch: 1700 + 200 * H, jug: 34, hs: 20, push: 8, chip: 6, pose: 'kickH' };
    // ----- Cô Ba
    case 'pole': return { ...HIT, s: 10, a: 5, r: 22, dmg: 75 + 10 * H, hb: [20, 0, 220 + 30 * H, 32], h: 'low', kd: 1, hs: 20, bs: 14, push: 20, chip: 7, pose: 'pole' };
    case 'lob': return { ...HIT, s: 12, a: 1, r: 26, dmg: 75, pspd: 380 + 240 * H, pose: 'toss' };
    case 'spin': return { ...HIT, s: 8, a: 27, r: 14, dmg: 32 + 6 * H, hb: [-56, 66, 76, 112], spd: 420 + 120 * H, hits: 3, every: 9, hs: 14, bs: 10, push: 14, chip: 5, lift: 24, pose: 'spin' };
    // ----- Kiệt
    case 'spread': return { ...HIT, s: 12, a: 1, r: 28, dmg: 32, pspd: 950 + 150 * H, pose: 'toss' };
    case 'teleslash': return { ...HIT, s: 14, a: 70, r: 12, dmg: 95 + 10 * H, hb: [-30, -30, 50, 40], h: 'over', kd: 1, inv: [0, 15], air2: 1, pose: 'slash' };
    case 'cross': return { ...HIT, s: 5, a: 16, r: 14, dmg: 40, hb: [-40, 30, 40, 130], spd: 1150 + 150 * H, inv: [0, 22], pass: 1, pose: 'charge' };
    // ----- RX-97
    case 'laser': return { ...HIT, s: 22, a: 8, r: 26, dmg: 90 + 10 * H, hb: [40, 92, 920, 114], hs: 20, bs: 14, push: 10, chip: 12, pose: 'laser' };
    case 'rocket': return { ...HIT, s: 4, a: 18, r: 22, dmg: 38 + 5 * H, hb: [0, 60, 72, 160], vy: 1250 + 200 * H, vx: 520, hits: 3, every: 6, kdLast: 1, push: 10, chip: 6, inv: [0, 6], pose: 'uppercut' };
    case 'magnet': return { s: 12, a: 14, r: 20, range: 520, magnet: 1, pose: 'palm' };
    // ----- Bé Na
    case 'bounce': return { ...HIT, s: 12, a: 1, r: 26, dmg: 55, pspd: 520 + 160 * H, pose: 'toss' };
    case 'roll': return { ...HIT, s: 4, a: 24 + 4 * H, r: 14, dmg: 70, hb: [0, 0, 64, 40], spd: 820 + 140 * H, h: 'low', kd: 1, low: 1, invProj: 1, pose: 'roll' };
    case 'stomp': return { ...HIT, s: 5, a: 80, r: 14, dmg: 85, hb: [-30, -20, 40, 40], h: 'over', kd: 1, jvy: 2000, jvx: 200, diveAt: 22, dvx: 0, dvy: -2400, air2: 1, quakeLand: 130, pose: 'stomp' };
    // ----- Thầy Bảy
    case 'whip': return { ...HIT, s: 8, a: 4, r: 20, dmg: 55, hb: [20, 88, 210 + 20 * H, 124], pull: 1, hs: 22, bs: 12, push: 0, chip: 5, pose: 'whip' };
    case 'lowspin': return { ...HIT, s: 7, a: 24, r: 16, dmg: 30 + 5 * H, hb: [-58, 0, 82, 34], spd: 280 + 80 * H, hits: 3, every: 8, h: 'low', kdLast: 1, hs: 14, bs: 10, push: 10, chip: 5, pose: 'sweep' };
    case 'tiger': return { ...HIT, s: 6, a: 34, r: 12, dmg: 80 + 10 * H, hb: [10, 30, 86, 112], h: 'over', kd: 1, jvy: 900, jvx: 620 + 120 * H, air2: 1, pose: 'claw' };
    // ----- Hùng Tạ
    case 'toss': return { s: 4, a: 2, r: 32, dmg: 170 + 20 * H, range: 96, grab: 1, far: 1, pose: 'grab' };
    case 'barbell': return { ...HIT, s: 14, a: 1, r: 30, dmg: 110, pspd: 340 + 140 * H, kd: 1, h: 'low', pose: 'toss' };
    case 'flex': return { s: 4, a: 1, r: 36, buff: 240, pose: 'flex' };
    // ----- Lan
    case 'juggle': return { ...HIT, s: 12, a: 1, r: 28, dmg: 40, pspd: 300 + 80 * H, pose: 'toss' };
    case 'flip': return { ...HIT, s: 4, a: 50, r: 10, dmg: 70 + 10 * H, hb: [0, 0, 72, 64], h: 'over', hs: 20, bs: 13, push: 14, pass: 1, air2: 1, flip: 1, pose: 'jkick' };
    case 'hoop': return { ...HIT, s: 12, a: 1, r: 26, dmg: 50, pspd: 300 + 100 * H, h: 'low', pose: 'toss' };
    // ----- Tuyệt chiêu
    case 'beam': return { ...HIT, s: 22, a: 42, r: 22, dmg: 46, hb: [44, 66, 640, 132], hits: 6, every: 7, hs: 16, bs: 10, push: 6, chip: 10, inv: [0, 22], sup: 1, pose: 'palm', kdLast: 1 };
    case 'rush': return { ...HIT, s: 6, a: 46, r: 22, dmg: 42, hb: [0, 40, 92, 130], spd: 1050, hits: 7, every: 6, push: 4, chip: 8, inv: [0, 10], sup: 1, pose: 'rush', kdLast: 1 };
    case 'biggrab': return { s: 3, a: 3, r: 36, dmg: 380, range: 120, pose: 'grab', grab: 1, sup: 1, inv: [0, 5] };
    case 'tornado': return { s: 14, a: 1, r: 40, dmg: 40, sup: 1, inv: [0, 14], pose: 'palm' };
    case 'convoy': return { s: 16, a: 44, r: 20, dmg: 65, sup: 1, inv: [0, 20], pose: 'win' };
    case 'rain': return { s: 12, a: 40, r: 20, dmg: 42, sup: 1, inv: [0, 12], pose: 'win' };
    case 'shadow': return { ...HIT, s: 6, a: 48, r: 20, dmg: 45, hb: [-20, 30, 90, 140], spd: 1100, hits: 7, every: 6, push: 2, chip: 8, inv: [0, 54], sup: 1, shadow: 1, kdLast: 1, pose: 'slash' };
    case 'missiles': return { s: 14, a: 30, r: 20, dmg: 55, sup: 1, inv: [0, 14], pose: 'palm' };
    case 'marbles': return { s: 10, a: 1, r: 26, dmg: 24, sup: 1, inv: [0, 10], pose: 'toss' };
    case 'tayson': return { ...HIT, s: 6, a: 42, r: 20, dmg: 50, hb: [-40, 30, 60, 140], spd: 1400, hits: 5, every: 6, push: 2, chip: 8, inv: [0, 48], pass: 1, sup: 1, kdLast: 1, pose: 'charge' };
    case 'bigquake': return { s: 26, a: 2, r: 30, dmg: 260, sup: 1, armor: 99, unblock: 1, pose: 'stomp' };
    case 'circus': return { s: 8, a: 60, r: 16, dmg: 45, sup: 1, inv: [0, 30], air2: 1, pose: 'jump' };
  }
  return null;
}
const MOVES = {};
export function movesOf(cid) {
  if (MOVES[cid]) return MOVES[cid];
  const c = CHAR[cid], sc = c.size / 100, dm = c.dmg / 100;
  const scale = (m) => ({ ...m, dmg: Math.round((m.dmg || 0) * (m.sup ? 1 : dm)), hb: m.hb && m.hb.map((v) => Math.round(v * sc)), range: m.range && Math.round(m.range * sc) });
  const M = {};
  for (const [k, m] of Object.entries(NORMALS)) M[k] = { key: k, ...scale(m) };
  c.specials.forEach((sp, i) => { for (const H of [0, 1]) { const m = special(sp, H); M[`sp${i}${H}`] = { key: `sp${i}${H}`, type: sp.type, special: 1, name: sp.name, ...scale(m) }; } });
  M.sup = { key: 'sup', type: c.super.type, special: 1, name: c.super.name, ...scale(special(c.super, 1)) };
  MOVES[cid] = M;
  return M;
}

// ---------- khởi tạo ----------
function newFighter(cid, side) {
  const c = CHAR[cid];
  return {
    c: cid, side, x: (side ? 640 : 320) * U, y: 0, vx: 0, vy: 0, face: side ? -1 : 1, hp: c.hp, max: c.hp, meter: 0,
    st: 'idle', t: 0, mv: null, hitDone: 0, lastHit: -99, stun: 0, cb: 0, inv: 0, jdir: 0, airAtk: 0,
    prev: 0, pend: 0, np: 5, buf: [], tapD: 0, tapT: -99, run: 0, pbuf: 0, pbT: 0, buff: 0, buffArmor: 0, armorUsed: 0, jug: 0, cnt: 0, combo: 0, showCombo: 0, comboT: 0, wins: 0,
  };
}
export function initState(chars, cfg = {}) {
  return {
    frame: 0, round: 1, phase: 'intro', pt: 0, hitstop: 0, need: cfg.rounds || 2, time: cfg.time ?? 99,
    timer: (cfg.time ?? 99) * FPS, f: [newFighter(chars[0], 0), newFighter(chars[1], 1)], proj: [], winner: -1, lastRoundWinner: -1, why: '',
  };
}
function newRound(S) {
  S.round++;
  for (const f of S.f) { const nf = newFighter(f.c, f.side); nf.meter = f.meter; nf.wins = f.wins; Object.assign(f, nf); }
  S.proj = [];
  S.phase = 'intro'; S.pt = 0; S.timer = S.time * FPS; S.why = '';
}

// ---------- input ----------
function numpad(bits, face) {
  let h = (bits & B.L) && !(bits & B.R) ? -1 : (bits & B.R) && !(bits & B.L) ? 1 : 0;
  h *= face;
  const v = (bits & B.U) && !(bits & B.D) ? 1 : (bits & B.D) && !(bits & B.U) ? -1 : 0;
  return 5 + h + v * 3;
}
function seq(buf, pat, win) {
  let k = pat.length - 1;
  for (let i = buf.length - 1; i >= Math.max(0, buf.length - win); i--) {
    const d = buf[i];
    if (d === pat[k] || (pat[k] === 6 && d === 9 && k === pat.length - 1)) { k--; if (k < 0) return true; }
  }
  return false;
}
const CMD = { qcf: [[2, 3, 6], 16, [6, 9]], qcb: [[2, 1, 4], 16, [4, 7]], dp: [[6, 2, 3], 16, [3, 2]], super: [[2, 3, 6, 2, 3, 6], 34, [6, 9]] };
function cmdOk(f, name) { const [pat, win, end] = CMD[name]; return end.includes(f.np) && seq(f.buf, pat, win); }

// ---------- hộp va chạm ----------
function scaleOf(f) { return CHAR[f.c].size / 100; }
function hurtbox(f) {
  if (f.inv > 0 || ['down', 'getup', 'ko', 'win'].includes(f.st)) return null;
  const sc = scaleOf(f);
  if (f.st === 'fall') return f.jug > 0 ? [f.x - 30 * sc * U, f.y, f.x + 30 * sc * U, f.y + 90 * U] : null;
  const m = f.mv && movesOf(f.c)[f.mv];
  if (m && m.low && f.t >= m.s && f.t < m.s + m.a) return [f.x - 30 * sc * U, 0, f.x + 30 * sc * U, 42 * U];
  if (f.y > 0) return [f.x - 26 * sc * U, f.y + 8 * U, f.x + 26 * sc * U, f.y + 122 * sc * U];
  const crouch = f.st === 'crouch' || (f.st === 'block' && f.cb) || (m && m.key[0] === 'c');
  const h = crouch ? 92 : 146;
  return [f.x - 28 * sc * U, 0, f.x + 28 * sc * U, h * sc * U];
}
function hitbox(f, m) {
  const [a, y0, b, y1] = m.hb;
  const xa = f.x + f.face * a * U, xb = f.x + f.face * b * U;
  return [Math.min(xa, xb), f.y + y0 * U, Math.max(xa, xb), f.y + y1 * U];
}
const overlap = (p, q) => p && q && p[0] < q[2] && q[0] < p[2] && p[1] < q[3] && q[1] < p[3];

// ---------- hành động ----------
function startMove(f, key, ev, S) {
  const m = movesOf(f.c)[key];
  f.st = 'atk'; f.mv = key; f.t = 0; f.hitDone = 0; f.lastHit = -99; f.pbuf = 0; f.pbT = 0;
  if (m.air) f.airAtk = 1;
  else if (f.y === 0) f.vx = 0;
  if (m.sup) { f.meter -= 1000; ev.push({ k: 'super', side: f.side, name: m.name }); S.hitstop = Math.max(S.hitstop, 0); }
  else if (m.special) { f.meter = Math.min(1000, f.meter + 20); ev.push({ k: 'special', side: f.side, name: m.name }); }
  else ev.push({ k: 'whiff', side: f.side, heavy: /H/.test(key) });
}
function control(S, f, o, inp, ev) {
  const fresh = (inp & ~f.prev) | f.pend;
  f.prev = inp; f.pend = 0;
  // bộ đệm phím: nút vừa bấm được nhớ 6 khung để ra đòn ngay khi có thể
  if (fresh & ATK) { f.pbuf = fresh & ATK; f.pbT = 6; }
  else if (f.pbT > 0 && --f.pbT === 0) f.pbuf = 0;
  const pressed = fresh | f.pbuf;
  f.np = numpad(inp, f.face);
  f.buf.push(f.np);
  if (f.buf.length > 36) f.buf.shift();
  if (S.phase !== 'fight') return;
  const P = pressed & (B.LP | B.HP), K = pressed & (B.LK | B.HK), heavyP = !!(pressed & B.HP), heavyK = !!(pressed & B.HK);
  const c = CHAR[f.c], M = movesOf(f.c);
  const neutral = NEUTRAL.includes(f.st) || f.st === 'land' || f.st === 'run';
  const cur = f.mv && M[f.mv];
  const live = f.st === 'atk' && cur && f.hitDone > 0 && f.t < cur.s + cur.a + cur.r - 1;
  const cancelable = live && (cur.cancel || cur.chain);
  const chainable = live && cur.chain;
  const superCancel = live && cur.special && !cur.sup;
  const grounded = f.y === 0;
  // chạy / lùi nhanh: bấm đúp → hoặc ←
  if (grounded && (NEUTRAL.includes(f.st)) && (f.np === 6 || f.np === 4) && f.buf[f.buf.length - 2] !== f.np) {
    if (f.tapD === f.np && S.frame - f.tapT <= 12) {
      f.tapD = 0;
      if (f.np === 6) { f.st = 'run'; f.t = 0; f.vx = f.face * c.walkF * 2.4; }
      else { f.st = 'back'; f.t = 0; f.vx = -f.face * c.walkB * 2.6; f.inv = 1; }
      ev.push({ k: 'dash', side: f.side, x: f.x, dir: f.np === 6 ? f.face : -f.face });
      return;
    }
    f.tapD = f.np; f.tapT = S.frame;
  }
  if (superCancel && f.meter >= 1000 && ((P && cmdOk(f, 'super')) || (pressed & B.SUP))) return startMove(f, 'sup', ev, S);
  if ((neutral || cancelable) && grounded) {
    // tuyệt chiêu
    if (f.meter >= 1000 && ((P && cmdOk(f, 'super')) || (pressed & B.SUP))) return startMove(f, 'sup', ev, S);
    // chiêu đặc biệt (thử →↓↘ trước)
    const order = [...c.specials.keys()].sort((a, b) => (c.specials[a].cmd === 'dp' ? -1 : 0) - (c.specials[b].cmd === 'dp' ? -1 : 0));
    for (const i of order) {
      const sp = c.specials[i];
      const btn = sp.btn === 'p' ? P : K, heavy = sp.btn === 'p' ? heavyP : heavyK;
      const shortcut = pressed & [B.S1, B.S2, B.S3][i];
      if ((btn && cmdOk(f, sp.cmd)) || shortcut) {
        if (PROJ_TYPES.includes(sp.type) && S.proj.some((p) => p.own === f.side && !p.big)) continue;
        return startMove(f, `sp${i}${heavy || shortcut ? 1 : 0}`, ev, S);
      }
    }
    // nối đòn: đòn nhẹ trúng/đỡ → ra tiếp đòn thường
    if (chainable && (P || K)) {
      const key = (f.np <= 3 ? 'c' : 's') + (P ? (heavyP ? 'HP' : 'LP') : heavyK ? 'HK' : 'LK');
      if (NORMAL_KEYS.includes(key)) return startMove(f, key, ev, S);
    }
    if (cancelable) return;
    // quật ngã
    if ((pressed & (B.HP | B.HK)) && (f.np === 6 || f.np === 4) && o.y === 0 && Math.abs(o.x - f.x) < 82 * U * scaleOf(f) && BLOCKABLE.includes(o.st) && o.st !== 'block' && o.inv === 0) {
      startMove(f, 'throw', ev, S);
      const back = f.np === 4;
      hitThrow(S, f, o, M.throw, back, ev);
      return;
    }
    if (P || K) {
      const crouch = f.np <= 3;
      const key = (crouch ? 'c' : 's') + (P ? (heavyP ? 'HP' : 'LP') : heavyK ? 'HK' : 'LK');
      return startMove(f, key, ev, S);
    }
    // di chuyển
    if (f.st === 'land') return;
    if (f.st === 'run') { if (f.np === 6 || f.np === 9 || f.np === 3) { if (f.np === 9) { f.st = 'prejump'; f.t = 0; f.jdir = 1; f.run = 1; } return; } f.st = 'idle'; f.vx = 0; }
    if (f.np >= 7) { f.st = 'prejump'; f.t = 0; f.jdir = f.np - 8; f.vx = 0; return; }
    if (f.np <= 3) { f.st = 'crouch'; f.vx = 0; return; }
    if (f.np === 6) { f.st = 'walkf'; f.vx = f.face * c.walkF; return; }
    if (f.np === 4) { f.st = 'walkb'; f.vx = -f.face * c.walkB; return; }
    f.st = 'idle'; f.vx = 0;
    return;
  }
  // đòn trên không
  if (f.st === 'jump' && !f.airAtk && (P || K)) startMove(f, 'j' + (P ? (heavyP ? 'HP' : 'LP') : heavyK ? 'HK' : 'LK'), ev, S);
}

function hitThrow(S, f, o, m, back, ev) {
  o.hp -= m.dmg;
  o.combo = 0;
  if (back) { f.face = -f.face; }
  o.st = 'fall'; o.t = 0; o.vy = 950; o.y = 1; o.vx = f.face * 420; o.mv = null;
  f.meter = Math.min(1000, f.meter + 60);
  o.meter = Math.min(1000, o.meter + 30);
  S.hitstop = 10;
  ev.push({ k: 'throw', side: f.side, x: o.x, y: 90 * U });
}

function canBlock(o, h) {
  if (o.y > 0 || !BLOCKABLE.includes(o.st)) return false;
  if (!(o.np === 4 || o.np === 1)) return false;
  if (h === 'low') return o.np === 1;
  if (h === 'over') return o.np === 4;
  return true;
}
function applyHit(S, a, o, m, ev, at) {
  const dir = sgn(o.x - a.x) || a.face;
  const om = o.st === 'atk' && o.mv && movesOf(o.c)[o.mv];
  const oAct = om && o.t >= om.s && o.t < om.s + om.a;
  const last = m.kdLast && (m.proj ? m.hitsLeft <= 1 : a.hitDone + 1 >= (m.hits || 1));
  // phản đòn (Tèo)
  if (oAct && om.counter && !m.grab) {
    o.t = om.s + om.a; o.inv = 1; o.cnt = 20;
    ev.push({ k: 'counter', side: o.side, x: at[0], y: at[1] });
    S.hitstop = Math.max(S.hitstop, 16);
    if (!m.proj) {
      a.hp -= Math.round(om.dmg * (o.buff > 0 ? 1.4 : 1));
      a.st = 'fall'; a.vy = 1000; a.y = Math.max(1, a.y); a.vx = -dir * 420; a.mv = null; a.jug = 0;
      o.meter = Math.min(1000, o.meter + 120);
      ev.push({ k: 'hit', side: a.side, x: a.x, y: 100 * U, dmg: om.dmg, big: 1 });
    } else o.meter = Math.min(1000, o.meter + 60);
    return 'counter';
  }
  // gồng: chịu đòn không khựng
  const armorOk = (oAct || (om && o.t < om.s)) && om.armor && (o.armorUsed || 0) < om.armor;
  if (!m.grab && !m.unblock && (armorOk || (o.buff > 0 && !o.buffArmor && o.st !== 'block'))) {
    if (armorOk) o.armorUsed = (o.armorUsed || 0) + 1; else o.buffArmor = 1;
    const dmg = Math.round(m.dmg * 0.8);
    o.hp -= dmg;
    S.hitstop = Math.max(S.hitstop, 7);
    ev.push({ k: 'armor', side: o.side, x: at[0], y: at[1], dmg });
    if (o.hp > 0) return 'armor';
  }
  if (!m.unblock && canBlock(o, m.h)) {
    o.st = 'block'; o.stun = m.bs || 10; o.cb = o.np === 1 ? 1 : 0; o.mv = null; o.t = 0;
    o.vx = dir * Math.round(((m.push || 10) * U) / 7);
    o.hp -= m.chip || 0;
    a.meter = Math.min(1000, a.meter + Math.round(m.dmg * 0.3));
    o.meter = Math.min(1000, o.meter + Math.round(m.dmg * 0.25));
    S.hitstop = Math.max(S.hitstop, 5);
    ev.push({ k: 'block', side: o.side, x: at[0], y: at[1] });
    return 'block';
  }
  const scale = Math.max(40, 100 - o.combo * 10);
  const dmg = Math.max(1, Math.round((m.dmg * scale * (a.buff > 0 && !m.proj ? 1.4 : 1)) / 100));
  o.hp -= dmg;
  o.combo++;
  a.showCombo = o.combo; a.comboT = 70;
  a.meter = Math.min(1000, a.meter + Math.round(dmg * 0.7));
  o.meter = Math.min(1000, o.meter + Math.round(dmg * 0.4));
  o.mv = null; o.t = 0;
  if (m.launch) { o.st = 'fall'; o.vy = m.launch; o.y = Math.max(o.y, 1); o.vx = dir * 120; o.jug = m.jug; }
  else if (o.st === 'fall' && o.jug > 0) { o.vy = Math.max(o.vy, 800); o.vx = dir * 200; o.jug = Math.max(0, o.jug - 8); if (m.kd || last) o.jug = 0; }
  else if ((m.kd && (!m.hits || m.hits === 1 || last)) || (m.kdLast && last) || o.y > 0 || o.hp <= 0) {
    o.st = 'fall'; o.vy = 900 + (m.vy ? 300 : 0); o.y = Math.max(o.y, 1); o.vx = dir * 380; o.jug = 0;
  } else {
    o.st = 'hit'; o.stun = m.hs || 14; o.vx = dir * Math.round(((m.push || 10) * U) / 7); o.cb = m.h === 'low' ? 1 : 0;
    if (m.pull) { o.x = clamp(a.x + a.face * 78 * U, WALL_L, WALL_R); o.vx = 0; }
  }
  S.hitstop = Math.max(S.hitstop, m.kd || dmg >= 70 ? 9 : 6);
  ev.push({ k: 'hit', side: o.side, x: at[0], y: at[1], dmg, big: dmg >= 70 || !!m.kd });
  return 'hit';
}
// chưởng / vật bay
function spawn(S, f, o) {
  return { own: f.side, c: f.c, x: f.x + f.face * 62 * U, y: 96 * U * scaleOf(f), vx: 0, vy: 0, g: 0, life: 240, hitsLeft: 1, every: 14, lastHit: -99, t: 0, dmg: 50, hs: 18, bs: 13, push: 14, chip: 8, h: 'mid', kd: 0, kdLast: 0, w: 22, hh: 20, glyph: 'orb', ret: 0, back: 0, bounce: 0, wall: 0, pierce: 0, pull: 0, home: 0, big: 0, off: 0, proj: 1, face: f.face };
}
function fire(S, f, o, m, ev) {
  const sp = CHAR[f.c].specials.find((x) => x.type === m.type) || {};
  const base = (extra) => { const p = { ...spawn(S, f, o), glyph: sp.glyph || 'orb', dmg: m.dmg, hs: m.hs, bs: m.bs, push: m.push, chip: m.chip, h: m.h || 'mid', ...extra }; S.proj.push(p); return p; };
  switch (m.type) {
    case 'proj': base({ vx: f.face * m.pspd }); break;
    case 'wave': base({ vx: f.face * m.pspd, pierce: 1, hitsLeft: 2, every: 14, glyph: 'wave', w: 26, hh: 30 }); break;
    case 'boomerang': base({ vx: f.face * m.pspd, ret: m.ret, hitsLeft: 2, every: 20, glyph: 'hat', w: 26, hh: 14 }); break;
    case 'lob': base({ vx: f.face * m.pspd, vy: 1150, g: 70, y: 110 * U, glyph: 'pate', w: 18, hh: 18 }); break;
    case 'spread': for (const [y, vy] of [[30, 0], [96, 0], [150, 0]]) base({ vx: f.face * m.pspd, y: y * U, vy, glyph: 'star', w: 14, hh: 12, h: y < 50 ? 'low' : 'mid' }); break;
    case 'bounce': base({ vx: f.face * m.pspd, vy: 700, g: 80, y: 60 * U, bounce: 3, glyph: 'ball', w: 14, hh: 14 }); break;
    case 'barbell': base({ vx: f.face * m.pspd, y: 22 * U, kd: 1, glyph: 'barbell', w: 34, hh: 22, h: 'low' }); break;
    case 'juggle': for (const k of [0, 1, 2]) base({ vx: f.face * (m.pspd + k * 220), vy: 1300, g: 75, y: 120 * U, glyph: 'ball', w: 14, hh: 14, dmg: m.dmg, col: k }); break;
    case 'hoop': base({ vx: f.face * m.pspd, y: 34 * U, life: 360, wall: 1, hitsLeft: 2, every: 30, glyph: 'hoop', w: 26, hh: 34, h: 'low' }); break;
  }
  ev.push({ k: 'proj', side: f.side });
}

// cập nhật đòn đang ra
function updateMove(S, f, o, ev) {
  const m = movesOf(f.c)[f.mv];
  const t = f.t;
  let act = t >= m.s && t < m.s + m.a;
  f.inv = m.inv && t >= m.inv[0] && t < m.inv[1] ? 1 : 0;
  const toward = () => sgn(o.x - f.x) || f.face;
  switch (m.type) {
    case 'proj': case 'wave': case 'boomerang': case 'lob': case 'spread': case 'bounce': case 'barbell': case 'juggle': case 'hoop':
      if (t === m.s) fire(S, f, o, m, ev);
      break;
    case 'rise': case 'rocket':
      if (t === m.s) { f.vy = m.vy; f.vx = f.face * m.vx; f.y = Math.max(1, f.y); }
      break;
    case 'spin': case 'lowspin':
      f.vx = act ? f.face * m.spd : 0;
      if (m.lift) f.y = act ? m.lift * U : 0;
      break;
    case 'dash': case 'armor': case 'charge': case 'roll':
      f.vx = act && !f.hitDone ? f.face * m.spd : 0;
      break;
    case 'rush':
      f.vx = t >= m.s && t < m.s + 26 && !f.hitDone ? f.face * m.spd : 0;
      break;
    case 'shadow':
      if (t >= m.s && t < m.s + 24 && !f.hitDone) f.vx = f.face * m.spd; else f.vx = 0;
      break;
    case 'cross': case 'tayson':
      if (act) {
        f.vx = f.face * m.spd;
        // lướt quá đối thủ 110px thì quay lại (Tây Sơn Thần Tốc)
        if (m.type === 'tayson' && (o.x - f.x) * f.face < -110 * U) f.face = -f.face;
      } else f.vx = 0;
      if (t === m.s + m.a) f.face = toward();
      break;
    case 'grab': case 'biggrab': case 'toss':
      if (t === m.s) {
        const ok = o.y === 0 && o.inv === 0 && !['fall', 'down', 'getup', 'ko'].includes(o.st) && Math.abs(o.x - f.x) < m.range * U && sgn(o.x - f.x) === f.face;
        if (ok) {
          o.hp -= Math.round(m.dmg * (f.buff > 0 ? 1.4 : 1)); o.combo = 0;
          o.st = 'fall'; o.mv = null; o.y = 1; o.jug = 0;
          if (m.far) { o.vy = 1500; o.vx = f.face * 1000; } else { o.vy = m.sup ? 1300 : 1100; o.vx = -f.face * 300; }
          f.meter = Math.min(1000, f.meter + (m.sup ? 0 : 120));
          S.hitstop = m.sup ? 24 : 14;
          f.hitDone = 1;
          ev.push({ k: 'grab', side: f.side, x: o.x, y: 100 * U, big: 1 });
        }
      }
      break;
    case 'tele':
      if (t === m.s) { f.x = clamp(o.x + sgn(o.x - f.x || 1) * 85 * U, WALL_L, WALL_R); f.face = toward(); ev.push({ k: 'tele', side: f.side }); }
      break;
    case 'quake':
      if (t === m.s) { ev.push({ k: 'quake', side: f.side, x: f.x }); if (o.y === 0 && Math.abs(o.x - f.x) < m.range * U && hurtbox(o)) { f.hitDone = 1; applyHit(S, f, o, m, ev, [o.x, 10 * U]); } }
      break;
    case 'bigquake':
      if (t < m.s) f.vx = 0;
      if (t === m.s) { ev.push({ k: 'quake', side: f.side, x: f.x, big: 1 }); S.hitstop = Math.max(S.hitstop, 10); if (o.y === 0 && hurtbox(o)) { f.hitDone = 1; applyHit(S, f, o, { ...m, kd: 1, h: 'mid' }, ev, [o.x, 10 * U]); } }
      break;
    case 'magnet':
      if (t === m.s) ev.push({ k: 'magnet', side: f.side });
      if (act && o.y === 0 && o.inv === 0 && !['fall', 'down', 'getup', 'ko'].includes(o.st)) {
        const dx = o.x - f.x;
        if (Math.abs(dx) > 90 * U && Math.abs(dx) < m.range * U) o.x -= sgn(dx) * Math.min(1400, Math.abs(dx) - 90 * U);
      }
      break;
    case 'flex':
      if (t === m.s) { f.buff = m.buff; f.buffArmor = 0; ev.push({ k: 'flex', side: f.side }); }
      break;
    case 'counter':
      break;
    case 'dive': case 'stomp': case 'tiger':
      if (t === m.s) { f.vy = m.jvy; f.vx = f.face * m.jvx; f.y = Math.max(1, f.y); }
      if (m.diveAt && t === m.diveAt) { f.vx = f.face * m.dvx; f.vy = m.dvy; }
      act = f.y > 0 && t >= (m.diveAt || m.s + 6) && (m.diveAt || f.vy < 300);
      break;
    case 'teleslash':
      if (t === m.s) { f.x = clamp(o.x - o.face * 12 * U, WALL_L, WALL_R); f.y = 230 * U; f.vy = -900; f.vx = 0; f.face = sgn(o.x - f.x) || f.face; ev.push({ k: 'tele', side: f.side }); }
      act = t >= m.s && f.y > 0;
      break;
    case 'flip':
      if (t === m.s) {
        const target = clamp(o.x + toward() * 90 * U, WALL_L, WALL_R);
        f.vy = 1500; f.y = 1; f.vx = Math.trunc((target - f.x) / 32);
      }
      if (f.y > 0 && t > m.s) f.face = toward();
      act = f.y > 0 && t >= m.s + 12;
      break;
    case 'circus':
      if (t === m.s) { f.vy = 2300; f.vx = 0; f.y = 1; ev.push({ k: 'super2', side: f.side }); }
      if (t === m.s + 20) for (let k = 0; k < 6; k++) S.proj.push({ ...spawn(S, f, o), x: f.x, y: f.y + 60 * U, vx: Math.trunc((o.x - f.x) / 26) + Math.trunc((k - 2.5) * 40), vy: -300 - k * 40, g: 40, dmg: m.dmg + 10, glyph: 'ball', w: 16, hh: 16, big: 1, kd: k === 5 ? 1 : 0, col: k % 3, h: 'over' });
      act = false;
      break;
    case 'tornado':
      if (t === m.s) S.proj.push({ ...spawn(S, f, o), x: clamp(f.x + f.face * 220 * U, WALL_L, WALL_R), y: 70 * U, life: 80, hitsLeft: 7, every: 9, dmg: m.dmg, kdLast: 1, pierce: 1, big: 1, pull: 340, glyph: 'tornado', w: 50, hh: 70 });
      break;
    case 'convoy':
      if (t >= m.s && (t - m.s) % 11 === 0 && t - m.s < 44) S.proj.push({ ...spawn(S, f, o), x: f.face > 0 ? 0 : STAGE_W * U, y: 40 * U, vx: f.face * 1500, life: 120, off: 1, dmg: m.dmg, kd: t - m.s === 33 ? 1 : 0, pierce: 1, big: 1, glyph: 'cyclo', w: 50, hh: 40 });
      break;
    case 'rain':
      if (t >= m.s && (t - m.s) % 5 === 0 && t - m.s < 40) { const k = (t - m.s) / 5, off = [-120, -60, 0, 60, 120, -30, 30, 0][k]; S.proj.push({ ...spawn(S, f, o), x: clamp(o.x + off * U, WALL_L, WALL_R), y: 560 * U, vx: 0, vy: -1200, life: 120, off: 1, dmg: m.dmg, kd: k === 7 ? 1 : 0, big: 1, glyph: 'bread', w: 26, hh: 14, h: 'over' }); }
      break;
    case 'missiles':
      if (t >= m.s && (t - m.s) % 6 === 0 && t - m.s < 30) S.proj.push({ ...spawn(S, f, o), x: f.x - f.face * 20 * U, y: 160 * U, vx: -f.face * 200 + ((t - m.s) / 6 - 2) * 120, vy: 1000, life: 160, home: 16, dmg: m.dmg, kd: t - m.s === 24 ? 1 : 0, big: 1, glyph: 'missile', w: 16, hh: 12 });
      break;
    case 'marbles':
      if (t === m.s) for (let k = 0; k < 10; k++) S.proj.push({ ...spawn(S, f, o), x: f.x + f.face * 30 * U, y: 20 * U, vx: f.face * (250 + k * 95), vy: 300 + (k % 3) * 120, g: 60, bounce: 2, life: 200, dmg: m.dmg, hs: 10, h: 'low', big: 1, glyph: 'marble', w: 10, hh: 10, col: k % 4 });
      break;
  }
  // va chạm hitbox
  if (act && m.hb && f.hitDone < (m.hits || 1) && t - f.lastHit >= (m.every || 1)) {
    const hb = hitbox(f, m), hu = hurtbox(o);
    if (overlap(hb, hu)) {
      const at = [Math.round((Math.max(hb[0], hu[0]) + Math.min(hb[2], hu[2])) / 2), Math.round((Math.max(hb[1], hu[1]) + Math.min(hb[3], hu[3])) / 2)];
      const r = applyHit(S, f, o, m, ev, at);
      f.hitDone++; f.lastHit = t;
      // Bóng Đêm: mỗi đòn trúng lại hiện ra phía bên kia
      if (m.shadow && r !== 'counter') { f.x = clamp(o.x + (f.hitDone % 2 ? 1 : -1) * 70 * U * f.face, WALL_L, WALL_R); f.face = sgn(o.x - f.x) || f.face; }
      if ((m.type === 'dive' || m.type === 'tiger' || m.type === 'teleslash') && r) { f.vx = -f.face * 300; f.vy = Math.max(f.vy, 600); }
    }
  }
  f.t++;
  const total = m.s + m.a + m.r;
  if (f.t >= total) {
    if (f.y > 0) { if (m.air) { f.st = 'jump'; f.mv = null; } }
    else { f.st = 'idle'; f.mv = null; f.vx = 0; f.inv = 0; f.y = 0; f.armorUsed = 0; }
  }
}

function physics(S, f, o, ev) {
  const m = f.st === 'atk' && f.mv ? movesOf(f.c)[f.mv] : null;
  const air = f.y > 0 || f.vy > 0;
  if (air && !(m && m.lift)) {
    f.vy -= GRAV;
    f.y += f.vy;
    if (f.st === 'fall' && f.jug > 0) f.jug--;
    if (f.y <= 0) {
      f.y = 0; f.vy = 0;
      if (f.st === 'fall') { f.st = f.hp <= 0 ? 'ko' : 'down'; f.t = 0; f.vx = 0; f.jug = 0; }
      else if (f.st === 'jump' || (m && m.air)) { f.st = 'land'; f.t = 0; f.mv = null; f.vx = 0; f.airAtk = 0; }
      else if (m && (m.air2 || f.t >= m.s)) {
        if (m.quakeLand) { ev.push({ k: 'quake', side: f.side, x: f.x }); if (o.y === 0 && Math.abs(o.x - f.x) < m.quakeLand * U && hurtbox(o)) applyHit(S, f, o, { ...m, dmg: 50, h: 'low', kd: 1 }, ev, [o.x, 10 * U]); }
        f.st = 'land'; f.t = -6; f.mv = null; f.vx = 0; f.inv = 0; f.armorUsed = 0;
      }
    }
  }
  f.x += f.vx;
  if (['hit', 'block'].includes(f.st)) f.vx = Math.trunc(f.vx * 0.82);
}

function stateTick(S, f, o) {
  switch (f.st) {
    case 'hit': case 'block':
      if (--f.stun <= 0) { f.st = f.cb && f.np <= 3 ? 'crouch' : 'idle'; f.vx = 0; }
      break;
    case 'prejump':
      if (++f.t >= 3) {
        const hop = !(f.prev & B.U);
        f.st = 'jump'; f.vy = Math.round(CHAR[f.c].jump * (hop ? 0.72 : 1)); f.y = 1; f.vx = f.jdir * f.face * (f.run ? 560 : 400); f.airAtk = 0; f.run = 0;
      }
      break;
    case 'run':
      f.vx = f.face * CHAR[f.c].walkF * 2.4;
      if (++f.t >= 40) { f.st = 'idle'; f.vx = 0; }
      break;
    case 'back':
      f.t++;
      f.inv = f.t < 8 ? 1 : 0;
      if (f.t > 11) f.vx = 0;
      if (f.t >= 18) { f.st = 'idle'; f.vx = 0; f.inv = 0; }
      break;
    case 'land':
      if (++f.t >= 3) f.st = 'idle';
      break;
    case 'down':
      if (++f.t >= 30) { f.st = 'getup'; f.t = 0; }
      break;
    case 'getup':
      if (++f.t >= 14) { f.st = 'idle'; f.t = 0; }
      break;
  }
  if (f.buff > 0) f.buff--;
  if (f.cnt > 0) f.cnt--;
  if (NEUTRAL.includes(f.st) || f.st === 'land') { f.combo = 0; if (f.y === 0) f.face = sgn(o.x - f.x) || f.face; }
  if (f.comboT > 0) f.comboT--;
}

function passing(f) { const m = f.st === 'atk' && f.mv && movesOf(f.c)[f.mv]; return m && m.pass && f.t >= m.s && f.t < m.s + m.a + 4; }
function pushApart(S) {
  const [a, b] = S.f;
  if (a.y > 60 * U || b.y > 60 * U) return;
  if (['down', 'ko'].includes(a.st) || ['down', 'ko'].includes(b.st)) return;
  if (passing(a) || passing(b)) return;
  const min = Math.round((31 * scaleOf(a) + 31 * scaleOf(b)) * U);
  const dx = b.x - a.x, ad = Math.abs(dx);
  if (ad >= min) return;
  const dir = dx === 0 ? (a.face || 1) : sgn(dx);
  const over = min - ad;
  let pa = Math.floor(over / 2), pb = over - pa;
  a.x -= dir * pa; b.x += dir * pb;
  for (const [f, g] of [[a, b], [b, a]]) {
    if (f.x < WALL_L) { const d = WALL_L - f.x; f.x = WALL_L; g.x += d; }
    if (f.x > WALL_R) { const d = f.x - WALL_R; f.x = WALL_R; g.x -= d; }
  }
}
function invProj(f) { const m = f.st === 'atk' && f.mv && movesOf(f.c)[f.mv]; return m && m.invProj && f.t >= m.s && f.t < m.s + m.a; }
function projectiles(S, ev) {
  for (const p of S.proj) {
    p.t++; p.life--;
    const owner = S.f[p.own], tgt = S.f[1 - p.own];
    // tên lửa tự tìm mục tiêu
    if (p.home && p.t >= p.home) {
      const dx = tgt.x - p.x, dy = tgt.y + 80 * U - p.y, mx = Math.max(Math.abs(dx), Math.abs(dy), 1);
      p.vx = clamp(p.vx + Math.trunc((dx * 140) / mx), -1100, 1100);
      p.vy = clamp(p.vy + Math.trunc((dy * 140) / mx), -1100, 1100);
    }
    // nón lá quay về
    if (p.ret && p.t === p.ret) { p.vx = -p.vx; p.back = 1; }
    if (p.back && Math.abs(owner.x - p.x) < 40 * U) p.life = 0;
    // lốc xoáy hút đối thủ
    if (p.pull && tgt.y === 0 && !['fall', 'down', 'getup', 'ko'].includes(tgt.st) && Math.abs(tgt.x - p.x) < p.pull * U) tgt.x += sgn(p.x - tgt.x) * Math.min(500, Math.abs(p.x - tgt.x));
    p.vy -= p.g; p.y += p.vy; p.x += p.vx;
    if (p.y <= 0 && (p.vy < 0 || p.g)) {
      if (p.bounce > 0) { p.y = 0; p.vy = Math.trunc(Math.abs(p.vy) * 0.72); p.bounce--; }
      else if (p.g || p.vy < 0) { p.life = 0; ev.push({ k: 'splash', x: p.x, side: p.own }); }
    }
    if (!p.off && (p.x < WALL_L - 20 * U || p.x > WALL_R + 20 * U)) { if (p.wall > 0) { p.vx = -p.vx; p.wall--; p.x = clamp(p.x, WALL_L, WALL_R); } else p.life = 0; }
    if (p.off && (p.x < -100 * U || p.x > (STAGE_W + 100) * U)) p.life = 0;
  }
  // chưởng chạm chưởng
  for (let i = 0; i < S.proj.length; i++) for (let j = i + 1; j < S.proj.length; j++) {
    const p = S.proj[i], q = S.proj[j];
    if (p.own === q.own || p.life <= 0 || q.life <= 0) continue;
    if (Math.abs(p.x - q.x) < (p.w + q.w) * U && Math.abs(p.y - q.y) < (p.hh + q.hh) * U) {
      const pw = p.big * 2 + p.pierce, qw = q.big * 2 + q.pierce;
      if (pw <= qw) p.life = 0;
      if (qw <= pw) q.life = 0;
      ev.push({ k: 'clash', x: Math.round((p.x + q.x) / 2), y: Math.round((p.y + q.y) / 2) });
    }
  }
  for (const p of S.proj) {
    if (p.life <= 0 || p.t - p.lastHit < p.every) continue;
    const o = S.f[1 - p.own];
    if (invProj(o)) continue;
    const box = [p.x - p.w * U, p.y - p.hh * U, p.x + p.w * U, p.y + p.hh * U];
    if (overlap(box, hurtbox(o))) {
      const r = applyHit(S, S.f[p.own], o, { ...p, hits: 1 }, ev, [p.x, p.y]);
      p.hitsLeft--; p.lastHit = p.t;
      if (p.hitsLeft <= 0 || r === 'counter') p.life = 0;
    }
  }
  S.proj = S.proj.filter((q) => q.life > 0);
}

// ---------- một khung hình ----------
export function step(S, in0, in1) {
  const ev = [];
  S.frame++;
  const [a, b] = S.f;
  if (S.hitstop > 0) {
    S.hitstop--;
    // vẫn ghi nhận hướng để không mất lệnh chiêu
    for (const [f, inp] of [[a, in0], [b, in1]]) { f.np = numpad(inp, f.face); f.buf.push(f.np); if (f.buf.length > 36) f.buf.shift(); f.pend |= inp & ~f.prev; f.prev = inp; }
    return ev;
  }
  S.pt++;
  if (S.phase === 'intro') {
    if (S.pt === 1) ev.push({ k: 'round', n: S.round });
    if (S.pt === 75) ev.push({ k: 'fight' });
    if (S.pt >= 100) { S.phase = 'fight'; S.pt = 0; }
  }
  const ins = S.phase === 'fight' ? [in0, in1] : [0, 0];
  control(S, a, b, ins[0], ev);
  control(S, b, a, ins[1], ev);
  for (const [f, o] of [[a, b], [b, a]]) if (f.st === 'atk') updateMove(S, f, o, ev); else if (f.st !== 'back') f.inv = ['getup', 'down'].includes(f.st) ? 1 : 0;
  physics(S, a, b, ev); physics(S, b, a, ev);
  stateTick(S, a, b); stateTick(S, b, a);
  pushApart(S);
  for (const f of S.f) f.x = clamp(f.x, WALL_L, WALL_R);
  // 2 võ sĩ không được cách nhau quá màn hình
  const MAXD = 640 * U;
  if (b.x - a.x > MAXD) { const over = b.x - a.x - MAXD; if (Math.abs(a.vx) >= Math.abs(b.vx) && a.vx < 0) a.x += over; else b.x -= over; }
  else if (a.x - b.x > MAXD) { const over = a.x - b.x - MAXD; if (Math.abs(a.vx) >= Math.abs(b.vx) && a.vx > 0) a.x -= over; else b.x += over; }
  projectiles(S, ev);
  // hết máu / hết giờ
  if (S.phase === 'fight') {
    if (S.timer > 0) S.timer--;
    const ko0 = a.hp <= 0, ko1 = b.hp <= 0;
    let w = -2;
    if (ko0 || ko1) { w = ko0 && ko1 ? -1 : ko0 ? 1 : 0; S.why = 'ko'; }
    else if (S.time && S.timer === 0) { const r0 = Math.round((a.hp * 1000) / a.max), r1 = Math.round((b.hp * 1000) / b.max); w = r0 === r1 ? -1 : r0 > r1 ? 0 : 1; S.why = 'time'; }
    if (w !== -2) {
      S.phase = 'ko'; S.pt = 0; S.lastRoundWinner = w;
      for (const f of S.f) { if (f.hp <= 0) { f.hp = 0; if (f.st !== 'fall' && f.st !== 'ko') { f.st = 'fall'; f.vy = 900; f.y = Math.max(1, f.y); f.vx = -f.face * 380; f.mv = null; } } }
      if (w >= 0) S.f[w].wins++;
      else for (const f of S.f) f.wins++;
      S.hitstop = S.why === 'ko' ? 40 : 0;
      ev.push({ k: 'ko', w, why: S.why });
    }
  } else if (S.phase === 'ko') {
    if (S.pt === 70 && S.lastRoundWinner >= 0) { const f = S.f[S.lastRoundWinner]; if (f.y === 0) { f.st = 'win'; f.mv = null; f.vx = 0; } }
    if (S.pt >= 170) {
      const done = S.f.map((f) => f.wins >= S.need);
      if (done[0] || done[1]) {
        S.phase = 'end'; S.pt = 0;
        S.winner = done[0] && done[1] ? -1 : done[0] ? 0 : 1;
        if (S.winner >= 0) { S.f[S.winner].st = 'win'; S.f[1 - S.winner].st = S.f[1 - S.winner].hp <= 0 ? 'ko' : 'lose'; }
        ev.push({ k: 'end', w: S.winner });
      } else newRound(S);
    }
  }
  return ev;
}
export const clone = (S) => (typeof structuredClone === 'function' ? structuredClone(S) : JSON.parse(JSON.stringify(S)));
// mã băm để phát hiện lệch đồng bộ
export function hash(S) {
  let h = 2166136261 >>> 0;
  const add = (v) => { h ^= v & 0xffff; h = Math.imul(h, 16777619) >>> 0; h ^= (v >>> 16) & 0xffff; h = Math.imul(h, 16777619) >>> 0; };
  add(S.frame); add(S.timer); for (const f of S.f) { add(f.x); add(f.y); add(f.hp); add(f.meter); add(f.t); } add(S.proj.length);
  return h;
}
