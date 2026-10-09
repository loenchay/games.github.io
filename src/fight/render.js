// Vẽ trận đấu "Quyền Cước 97" lên canvas 960×540: sân khấu phố đêm, võ sĩ hoạt hình, hiệu ứng, thanh máu.
import { CHAR } from './chars.js';
import { U, movesOf } from './sim.js';

export const CW = 960, CH = 540, GY = 470;
const EDGE = '#1d1648';
const D2R = Math.PI / 180;
const lerp = (a, b, k) => a + (b - a) * k;
const ease = (k) => k * k * (3 - 2 * k);

// ---------------- TƯ THẾ ----------------
// góc tính bằng độ: 0 = chỉ thẳng xuống, 90 = chỉ về phía trước (hướng mặt), 180 = chỉ lên trời
// arm: [vai, khuỷu (gập lên)], leg: [hông, gối (gập ra sau)]
const P = (o) => ({ lean: 4, head: 0, aN: [40, 85], aF: [22, 105], lN: [16, 18], lF: [-16, 12], dip: 0, rot: 0, ...o });
const POSES = {
  idle: P({}),
  crouch: P({ lean: 14, lN: [78, 128], lF: [8, 138], aN: [55, 95], aF: [35, 110], dip: 0 }),
  jump: P({ lean: 0, lN: [70, 120], lF: [30, 125], aN: [110, 50], aF: [80, 70] }),
  block: P({ lean: -6, aN: [100, 125], aF: [85, 135], head: -6 }),
  cblock: P({ lean: 6, lN: [78, 128], lF: [8, 138], aN: [100, 125], aF: [85, 135] }),
  hit: P({ lean: -20, head: -22, aN: [-25, 35], aF: [-45, 25], lN: [22, 10], lF: [-22, 14] }),
  chit: P({ lean: -8, head: -18, lN: [78, 128], lF: [8, 138], aN: [-20, 40], aF: [-40, 30] }),
  jab: P({ lean: 12, aN: [92, 0], aF: [28, 110] }),
  punch: P({ lean: 22, aF: [96, 0], aN: [30, 120], lN: [26, 10], lF: [-28, 6] }),
  kickL: P({ lean: -4, lN: [82, 8], lF: [-8, 10], aN: [60, 90], aF: [10, 100] }),
  kickH: P({ lean: -24, lN: [118, 0], lF: [-6, 6], aN: [50, 100], aF: [-30, 60], head: -8 }),
  cjab: P({ lean: 16, lN: [78, 128], lF: [8, 138], aN: [88, 4], aF: [35, 110] }),
  cupper: P({ lean: 4, lN: [50, 70], lF: [-4, 80], aN: [172, 8], aF: [30, 100] }),
  ckick: P({ lean: 18, lN: [88, 6], lF: [6, 140], aN: [60, 95], aF: [30, 110] }),
  sweep: P({ lean: 34, lN: [92, 0], lF: [-40, 150], aN: [10, 30], aF: [-30, 30], dip: 8 }),
  jpunch: P({ lean: 10, aN: [65, -5], aF: [20, 90], lN: [70, 115], lF: [30, 120] }),
  jkick: P({ lean: -8, lN: [62, 0], lF: [20, 130], aN: [100, 60], aF: [60, 80] }),
  throw: P({ lean: 18, aN: [82, 50], aF: [70, 60], lN: [28, 14], lF: [-26, 8] }),
  palm: P({ lean: 14, aN: [90, 8], aF: [86, 14], lN: [34, 10], lF: [-36, 6] }),
  toss: P({ lean: 10, aN: [115, -25], aF: [-20, 60], lN: [30, 10], lF: [-30, 8] }),
  uppercut: P({ lean: 8, aN: [176, 0], aF: [20, 110], lN: [8, 45], lF: [-26, 70] }),
  flipkick: P({ lean: -40, lN: [165, 0], lF: [40, 100], aN: [-40, 30], aF: [-60, 20], head: -20 }),
  spin: P({ lean: 0, lN: [92, 0], lF: [-92, 0], aN: [120, 10], aF: [-120, 10] }),
  flykick: P({ lean: -26, lN: [96, 0], lF: [20, 125], aN: [-50, 40], aF: [-70, 30], head: -10 }),
  headbutt: P({ lean: 62, head: 10, aN: [-70, 20], aF: [-80, 20], lN: [30, 20], lF: [-40, 10] }),
  grab: P({ lean: 16, aN: [98, 45], aF: [92, 55], lN: [30, 18], lF: [-30, 10] }),
  tele: P({ lean: 0, aN: [60, 120], aF: [60, 120] }),
  stomp: P({ lean: 0, lN: [75, 100], lF: [-6, 10], aN: [140, 50], aF: [120, 60] }),
  flap: P({ lean: -6, aN: [150, 8], aF: [135, 14], lN: [12, 22], lF: [-14, 16] }),
  rush: P({ lean: 16, aN: [92, 0], aF: [40, 100], lN: [30, 12], lF: [-28, 6] }),
  stance: P({ lean: -4, aN: [70, 140], aF: [60, 150], lN: [30, 30], lF: [-30, 20], dip: 6 }),
  dive: P({ lean: 40, lN: [120, 0], lF: [40, 110], aN: [-60, 30], aF: [-80, 30], rot: 30 }),
  charge: P({ lean: 34, aN: [80, 30], aF: [70, 40], lN: [70, 90], lF: [30, 100], head: 10 }),
  pole: P({ lean: 30, aN: [80, 10], aF: [70, 20], lN: [60, 100], lF: [-20, 130], dip: 10 }),
  stretch: P({ lean: 16, aN: [92, 0], aF: [-20, 60], lN: [36, 10], lF: [-34, 6] }),
  whip: P({ lean: 10, aN: [110, -10], aF: [10, 90], lN: [34, 12], lF: [-30, 6] }),
  laser: P({ lean: -8, aN: [90, 0], aF: [90, 0], lN: [26, 10], lF: [-28, 8], head: -4 }),
  roll: P({ lean: 60, aN: [100, 120], aF: [90, 130], lN: [100, 150], lF: [80, 150], dip: 34 }),
  claw: P({ lean: 30, aN: [140, -30], aF: [120, -20], lN: [80, 60], lF: [-20, 40] }),
  slash: P({ lean: 24, aN: [40, 0], aF: [150, 30], lN: [60, 80], lF: [10, 90] }),
  flex: P({ lean: 0, aN: [100, 110], aF: [100, 110], lN: [22, 10], lF: [-22, 10], head: 4 }),
  multikick: P({ lean: -14, lN: [100, 0], lF: [-10, 10], aN: [50, 100], aF: [-20, 70] }),
  elbow: P({ lean: 26, aN: [100, 150], aF: [-30, 60], lN: [40, 16], lF: [-34, 8], head: 6 }),
  back: P({ lean: -16, aN: [60, 100], aF: [30, 110], lN: [-10, 30], lF: [-40, 20], head: -6 }),
  win: P({ lean: 0, aN: [172, 30], aF: [10, 120], head: 6 }),
  lose: P({ lean: 26, head: 30, aN: [-6, 10], aF: [-12, 8], lN: [10, 30], lF: [-8, 26] }),
  down: P({ rot: -90, aN: [150, 20], aF: [120, 30], lN: [10, 10], lF: [-6, 20], lean: 0 }),
};
function mix(a, b, k) {
  const o = {};
  for (const key of Object.keys(a)) o[key] = Array.isArray(a[key]) ? a[key].map((v, i) => lerp(v, b[key][i], k)) : lerp(a[key], b[key], k);
  return o;
}
function poseOf(f, S, tick) {
  const st = f.st;
  const breathe = Math.sin(tick / 9 + f.side * 2) * 2;
  let p = { ...POSES.idle, aN: [POSES.idle.aN[0] + breathe, POSES.idle.aN[1]], lean: POSES.idle.lean + breathe * 0.4 };
  if (st === 'walkf' || st === 'walkb') {
    const ph = (f.x / U / 14) * (st === 'walkb' ? -1 : 1);
    p = { ...p, lN: [16 + Math.sin(ph) * 22, 18 + Math.max(0, Math.cos(ph)) * 28], lF: [-16 - Math.sin(ph) * 22, 12 + Math.max(0, -Math.cos(ph)) * 28], lean: st === 'walkf' ? 9 : -2 };
  } else if (st === 'run') {
    const ph = f.x / U / 9;
    p = { ...p, lean: 28, head: 8, lN: [30 + Math.sin(ph) * 40, 30 + Math.max(0, Math.cos(ph)) * 70], lF: [-20 - Math.sin(ph) * 40, 30 + Math.max(0, -Math.cos(ph)) * 70], aN: [60 - Math.sin(ph) * 40, 90], aF: [20 + Math.sin(ph) * 40, 90] };
  } else if (st === 'back') p = POSES.back;
  else if (st === 'crouch') p = POSES.crouch;
  else if (st === 'prejump' || st === 'land') p = mix(POSES.idle, POSES.crouch, 0.5);
  else if (st === 'jump') p = POSES.jump;
  else if (st === 'block') p = f.cb ? POSES.cblock : POSES.block;
  else if (st === 'hit') p = f.cb ? POSES.chit : mix(POSES.hit, POSES.idle, Math.max(0, 1 - f.stun / 12) * 0.5);
  else if (st === 'fall') p = { ...POSES.hit, rot: -Math.min(80, 20 + (900 - f.vy) / 20), lN: [40, 30], lF: [10, 40] };
  else if (st === 'down' || st === 'ko') p = POSES.down;
  else if (st === 'getup') p = mix(POSES.down, POSES.crouch, Math.min(1, f.t / 14));
  else if (st === 'win') p = { ...POSES.win, aN: [172 + Math.sin(tick / 6) * 8, 30] };
  else if (st === 'lose') p = POSES.lose;
  else if (st === 'atk' && f.mv) {
    const m = movesOf(f.c)[f.mv];
    let peak = POSES[m.pose] || POSES.jab;
    let base = m.key[0] === 'c' ? POSES.crouch : m.air || f.y > 0 ? POSES.jump : POSES.idle;
    if (m.pose === 'rush') peak = Math.floor(f.t / 6) % 2 ? POSES.kickL : POSES.jab;
    if (m.pose === 'multikick') peak = Math.floor(f.t / 4) % 2 ? POSES.kickH : POSES.multikick;
    if (m.pose === 'jump' || ((m.air2 || m.type === 'circus') && f.y > 0 && !['dive', 'slash', 'claw', 'stomp'].includes(m.pose))) base = POSES.jump;
    let k;
    if (f.t < m.s) k = ease(f.t / Math.max(1, m.s));
    else if (f.t < m.s + m.a) k = 1;
    else k = 1 - ease(Math.min(1, (f.t - m.s - m.a) / Math.max(1, m.r)));
    if (m.type === 'rise' && f.y > 0 && f.t >= m.s) k = 1;
    p = mix(base, peak, k);
    if (m.pose === 'spin' && f.t >= m.s && f.t < m.s + m.a) p.spin = Math.floor(f.t / 3) % 2;
    if (m.pose === 'flipkick' && f.y > 0) p.rot = -((f.t - m.s) * 24) % 360;
    if (m.pose === 'roll' && f.t >= m.s && f.t < m.s + m.a) p.rot = -((f.t * 28) % 360);
    if (m.type === 'flip' && f.y > 0) p.rot = -((f.t - m.s) * 13) % 360;
    if (m.type === 'tele') p.alpha = Math.abs(f.t - m.s) < 8 ? Math.abs(f.t - m.s) / 8 : 1;
  }
  return p;
}

// ---------------- VÕ SĨ ----------------
function limb(c, x, y, a1, l1, a2, l2, w, col) {
  const x1 = x + Math.sin(a1 * D2R) * l1, y1 = y + Math.cos(a1 * D2R) * l1;
  const x2 = x1 + Math.sin(a2 * D2R) * l2, y2 = y1 + Math.cos(a2 * D2R) * l2;
  c.lineCap = 'round'; c.lineJoin = 'round';
  c.strokeStyle = EDGE; c.lineWidth = w + 6;
  c.beginPath(); c.moveTo(x, y); c.lineTo(x1, y1); c.lineTo(x2, y2); c.stroke();
  c.strokeStyle = col; c.lineWidth = w;
  c.beginPath(); c.moveTo(x, y); c.lineTo(x1, y1); c.lineTo(x2, y2); c.stroke();
  return [x2, y2, a2];
}
function circle(c, x, y, r, fill, lw = 3) { c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fillStyle = fill; c.fill(); c.lineWidth = lw; c.strokeStyle = EDGE; c.stroke(); }
function shade(hex, k) { const n = parseInt(hex.slice(1), 16); let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255; r = Math.round(r * k); g = Math.round(g * k); b = Math.round(b * k); return `rgb(${Math.min(255, r)},${Math.min(255, g)},${Math.min(255, b)})`; }

export function drawFighter(c, f, p, { flash = 0, tick = 0, scale = 1, ghost = false } = {}) {
  const ch = CHAR[f.c], L = ch.look, sc = (ch.size / 100) * scale;
  const thigh = 31, shin = 31, upper = 25, fore = 25, torso = 46;
  // chiều cao hông để chân thấp nhất chạm đất
  const legH = (l) => Math.cos(l[0] * D2R) * thigh + Math.cos((l[0] - l[1]) * D2R) * shin;
  const hipH = Math.max(legH(p.lN), legH(p.lF), 16) + 6;
  c.save();
  c.translate(f.x / U, GY - f.y / U);
  c.scale(f.face * sc * (p.spin ? -1 : 1), sc);
  if (p.alpha !== undefined) c.globalAlpha = Math.max(0.05, p.alpha);
  if (ghost) c.globalAlpha *= 0.35;
  // bóng đổ
  c.save(); c.scale(1, 0.25); c.fillStyle = 'rgba(0,0,0,.28)'; c.beginPath(); c.arc(0, (f.y / U) * 4 / sc, 34, 0, Math.PI * 2); c.fill(); c.restore();
  if (p.rot) { c.translate(0, -24); c.rotate(p.rot * D2R); c.translate(0, 24); }
  const hipY = -hipH + (p.dip || 0);
  const lean = p.lean * D2R;
  const neckX = Math.sin(lean) * torso, neckY = hipY - Math.cos(lean) * torso;
  const shX = neckX * 0.92 - 2, shY = neckY + 7;
  const skin = L.skin, gi = L.gi, pants = L.pants;
  // tay sau, chân sau
  const sleeve = L.sleeve === 'skin' ? skin : L.sleeve || (gi === '#ffffff' ? '#f4f4fb' : gi);
  limb(c, shX - 4, shY, p.aF[0], upper, p.aF[0] + p.aF[1], fore, L.robot ? 12 : 11, shade(sleeve === '#ffffff' ? '#e6e6f0' : sleeve, 0.85));
  const fistB = endPt(shX - 4, shY, p.aF, upper, fore);
  circle(c, fistB[0], fistB[1], 7.5, shade(skin, 0.9));
  limb(c, -4, hipY, p.lF[0], thigh, p.lF[0] - p.lF[1], shin, 14, shade(pants === '#ffffff' ? '#e6e6f0' : pants, 0.85));
  foot(c, endPt2(-4, hipY, p.lF, thigh, shin), p.lF[0] - p.lF[1], shade(skin, 0.9));
  // thân
  c.save();
  c.translate(0, hipY); c.rotate(lean);
  roundRect(c, -15, -torso - 4, 30, torso + 10, 10); c.fillStyle = gi; c.fill(); c.lineWidth = 3; c.strokeStyle = EDGE; c.stroke();
  // vạt áo
  c.strokeStyle = L.trim; c.lineWidth = 3.5; c.beginPath(); c.moveTo(-8, -torso + 2); c.lineTo(4, -torso * 0.45); c.lineTo(10, -torso + 2); c.stroke();
  if (L.open) { c.fillStyle = skin; c.beginPath(); c.moveTo(-8, -torso); c.lineTo(10, -torso); c.lineTo(2, -torso * 0.5); c.closePath(); c.fill(); }
  if (L.tank) { c.fillStyle = skin; c.beginPath(); c.moveTo(-15, -torso - 2); c.quadraticCurveTo(-4, -torso + 14, 0, -torso - 4); c.fill(); c.beginPath(); c.moveTo(15, -torso - 2); c.quadraticCurveTo(6, -torso + 14, 2, -torso - 4); c.fill(); }
  if (L.apron) { c.fillStyle = L.apron; roundRect(c, -11, -torso * 0.62, 24, torso * 0.62 + 18, 5); c.fill(); c.lineWidth = 2; c.strokeStyle = EDGE; c.stroke(); c.fillStyle = L.trim; c.fillRect(-3, -torso * 0.3, 8, 6); }
  if (L.robot) { c.strokeStyle = 'rgba(29,22,72,.45)'; c.lineWidth = 2; c.beginPath(); c.moveTo(-12, -torso * 0.5); c.lineTo(12, -torso * 0.5); c.stroke(); c.fillStyle = L.aura; c.beginPath(); c.arc(2, -torso * 0.72, 5 + Math.sin(tick / 5), 0, 7); c.fill(); c.stroke(); for (const rx of [-9, 9]) { c.fillStyle = EDGE; c.beginPath(); c.arc(rx, -torso + 6, 1.8, 0, 7); c.fill(); } }
  if (L.scarf) { const w = Math.sin(tick / 5) * 3; c.fillStyle = '#ff4d5e'; c.strokeStyle = EDGE; c.lineWidth = 2.5; roundRect(c, -14, -torso - 6, 30, 9, 4); c.fill(); c.stroke(); c.beginPath(); c.moveTo(-12, -torso); c.quadraticCurveTo(-26, -torso + 10 + w, -30, -torso + 22 - w); c.lineTo(-22, -torso + 22); c.quadraticCurveTo(-18, -torso + 8, -8, -torso + 2); c.closePath(); c.fill(); c.stroke(); c.fillStyle = '#ffffff'; for (let k = 0; k < 4; k++) c.fillRect(-12 + k * 7, -torso - 4, 3, 3); }
  // thắt lưng
  c.fillStyle = L.belt; c.fillRect(-16, -6, 32, 7); c.strokeStyle = EDGE; c.lineWidth = 2; c.strokeRect(-16, -6, 32, 7);
  c.beginPath(); c.moveTo(-10, 1); c.lineTo(-16 - Math.sin(tick / 5) * 3, 12); c.moveTo(-6, 1); c.lineTo(-8, 14); c.strokeStyle = L.belt; c.lineWidth = 4; c.stroke();
  c.restore();
  // chân trước
  limb(c, 4, hipY, p.lN[0], thigh, p.lN[0] - p.lN[1], shin, 14, pants);
  foot(c, endPt2(4, hipY, p.lN, thigh, shin), p.lN[0] - p.lN[1], skin);
  // đầu
  const hx = neckX + Math.sin(lean) * 16, hy = neckY - Math.cos(lean) * 16;
  drawHead(c, hx, hy, (p.head + p.lean * 0.4) * D2R, ch, flash, tick, f);
  // tay trước
  limb(c, shX + 4, shY, p.aN[0], upper, p.aN[0] + p.aN[1], fore, L.robot ? 12 : 11, sleeve);
  const fist = endPt(shX + 4, shY, p.aN, upper, fore);
  circle(c, fist[0], fist[1], L.robot ? 9 : 8, L.gloves || skin);
  if (flash) { c.globalCompositeOperation = 'source-atop'; c.fillStyle = `rgba(255,255,255,${0.6 * flash})`; c.fillRect(-90, -220, 180, 260); }
  c.restore();
}
function endPt(x, y, a, l1, l2) {
  const a1 = a[0], a2 = a[0] + a[1];
  const x1 = x + Math.sin(a1 * D2R) * l1, y1 = y + Math.cos(a1 * D2R) * l1;
  return [x1 + Math.sin(a2 * D2R) * l2, y1 + Math.cos(a2 * D2R) * l2];
}
function endPt2(x, y, l, l1, l2) {
  const x1 = x + Math.sin(l[0] * D2R) * l1, y1 = y + Math.cos(l[0] * D2R) * l1;
  const a2 = l[0] - l[1];
  return [x1 + Math.sin(a2 * D2R) * l2, y1 + Math.cos(a2 * D2R) * l2];
}
function foot(c, [x, y], ang, col) {
  c.save(); c.translate(x, y); c.rotate(-ang * D2R * 0.3);
  c.beginPath(); c.ellipse(5, 2, 11, 6, 0, 0, Math.PI * 2); c.fillStyle = col; c.fill(); c.lineWidth = 3; c.strokeStyle = EDGE; c.stroke();
  c.restore();
}
function roundRect(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
function drawHead(c, x, y, rot, ch, flash, tick, f) {
  const L = ch.look, R = 21;
  c.save(); c.translate(x, y); c.rotate(rot);
  // tóc dài phía sau
  if (L.hairStyle === 'long') { c.fillStyle = L.hair; c.beginPath(); c.moveTo(-16, -8); c.quadraticCurveTo(-30, 18, -22, 34); c.lineTo(-6, 20); c.closePath(); c.fill(); c.lineWidth = 3; c.strokeStyle = EDGE; c.stroke(); }
  if (L.hairStyle === 'bun') { circle(c, -16, -18, 10, L.hair); }
  if (L.hairStyle === 'ponytail') { const w = Math.sin(tick / 5 + f.side) * 5; c.fillStyle = L.hair; c.strokeStyle = EDGE; c.lineWidth = 3; c.beginPath(); c.moveTo(-14, -14); c.quadraticCurveTo(-38, -10 + w, -40, 18 - w); c.quadraticCurveTo(-26, 4, -12, -4); c.closePath(); c.fill(); c.stroke(); }
  if (L.hairStyle === 'pigtails') { for (const sy of [-1, 1]) { c.fillStyle = L.hair; c.strokeStyle = EDGE; c.lineWidth = 3; c.beginPath(); c.ellipse(-20, -4 + sy * 12 + Math.sin(tick / 4 + sy) * 2, 9, 7, sy * 0.5, 0, 7); c.fill(); c.stroke(); } }
  if (L.robot) {
    roundRect(c, -20, -22, 42, 42, 10); c.fillStyle = L.skin; c.fill(); c.lineWidth = 3; c.strokeStyle = EDGE; c.stroke();
    c.fillStyle = '#1d1648'; roundRect(c, -2, -10, 22, 12, 4); c.fill();
    c.fillStyle = L.aura; c.fillRect(2 + ((tick / 2) % 12), -7, 5, 6);
    c.beginPath(); c.moveTo(0, -22); c.lineTo(-2, -32); c.stroke(); c.fillStyle = '#ff4d5e'; c.beginPath(); c.arc(-2, -34, 4, 0, 7); c.fill(); c.stroke();
    c.strokeStyle = EDGE; c.lineWidth = 2; for (let k = 0; k < 3; k++) { c.beginPath(); c.moveTo(4 + k * 5, 10); c.lineTo(4 + k * 5, 15); c.stroke(); }
    c.restore();
    return;
  }
  circle(c, 0, 0, R, L.skin);
  // tóc
  c.fillStyle = L.hair; c.strokeStyle = EDGE; c.lineWidth = 3;
  if (L.hairStyle === 'spike') {
    c.beginPath(); c.moveTo(-21, -2);
    const pts = [[-22, -18], [-12, -14], [-10, -30], [-1, -18], [6, -32], [10, -17], [20, -24], [19, -8], [22, -2]];
    for (const [px, py] of pts) c.lineTo(px, py);
    c.quadraticCurveTo(10, -12, -21, -2); c.closePath(); c.fill(); c.stroke();
  } else if (L.hairStyle === 'bun') {
    c.beginPath(); c.arc(0, -2, R, Math.PI * 1.02, Math.PI * 1.98); c.quadraticCurveTo(4, -8, -21, -4); c.closePath(); c.fill(); c.stroke();
  } else if (L.hairStyle === 'long') {
    c.beginPath(); c.arc(0, -2, R, Math.PI * 1.05, Math.PI * 1.95); c.quadraticCurveTo(0, -12, -21, -4); c.closePath(); c.fill(); c.stroke();
  } else if (L.hairStyle === 'ponytail' || L.hairStyle === 'pigtails') {
    c.beginPath(); c.arc(0, -2, R, Math.PI * 1.0, Math.PI * 1.98); c.quadraticCurveTo(8, -6, 2, -14); c.quadraticCurveTo(-6, -4, -21, -2); c.closePath(); c.fill(); c.stroke();
  } else if (L.hairStyle === 'flat') {
    c.beginPath(); c.moveTo(-21, -4); c.lineTo(-20, -20); c.lineTo(18, -22); c.lineTo(20, -12); c.quadraticCurveTo(0, -14, -21, -4); c.closePath(); c.fill(); c.stroke();
  } else if (L.hairStyle === 'topknot') {
    c.beginPath(); c.arc(0, -2, R, Math.PI * 1.05, Math.PI * 1.95); c.quadraticCurveTo(0, -12, -21, -4); c.closePath(); c.fill(); c.stroke();
    circle(c, -4, -26, 7, L.hair);
  } else if (L.hairStyle === 'scarf') {
    c.fillStyle = L.band || '#ff4d5e'; c.beginPath(); c.arc(0, -3, R + 1, Math.PI * 0.95, Math.PI * 2.02); c.quadraticCurveTo(0, -10, -22, -1); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = '#fff'; for (let k = 0; k < 5; k++) { c.beginPath(); c.arc(-14 + k * 7, -16 + Math.abs(k - 2) * 2, 1.8, 0, 7); c.fill(); }
    c.fillStyle = L.band || '#ff4d5e'; c.beginPath(); c.moveTo(-18, -12); c.lineTo(-32, -18 + Math.sin(tick / 4) * 3); c.lineTo(-28, -6); c.closePath(); c.fill(); c.stroke();
  } else if (L.hairStyle === 'cap') {
    c.fillStyle = L.gi; c.beginPath(); c.arc(0, -4, R, Math.PI, Math.PI * 2); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = L.band || L.trim; c.beginPath(); c.moveTo(-20, -6); c.lineTo(-36, -4); c.lineTo(-34, 0); c.lineTo(-18, -2); c.closePath(); c.fill(); c.stroke();
    c.fillStyle = '#fff'; c.beginPath(); c.arc(4, -14, 5, 0, 7); c.fill();
  } else if (L.hairStyle === 'mask') {
    c.fillStyle = L.gi; c.beginPath(); c.arc(0, 0, R, 0, Math.PI * 2); c.fill(); c.stroke();
    c.fillStyle = L.skin; roundRect(c, 0, -9, 21, 12, 5); c.fill(); c.lineWidth = 2; c.stroke(); c.lineWidth = 3;
  } else if (L.hairStyle === 'hat') {
    c.fillStyle = L.hair; c.beginPath(); c.arc(0, -4, R, Math.PI * 1.05, Math.PI * 1.95); c.fill();
    c.fillStyle = '#f2d27a'; c.beginPath(); c.moveTo(-34, -10); c.lineTo(2, -40); c.lineTo(36, -10); c.quadraticCurveTo(0, -4, -34, -10); c.closePath(); c.fill(); c.stroke();
    c.strokeStyle = 'rgba(29,22,72,.35)'; c.lineWidth = 1.5; for (const k of [-16, 0, 16]) { c.beginPath(); c.moveTo(2, -38); c.lineTo(k, -8); c.stroke(); }
    c.strokeStyle = EDGE; c.lineWidth = 3;
  } else if (L.hairStyle === 'bald') {
    c.fillStyle = 'rgba(255,255,255,.35)'; c.beginPath(); c.ellipse(-4, -12, 7, 4, -0.4, 0, Math.PI * 2); c.fill();
  }
  // băng đô
  if (L.band && !['scarf', 'cap', 'hat'].includes(L.hairStyle)) {
    c.fillStyle = L.band; c.fillRect(-21, -12, 42, 7); c.strokeRect(-21, -12, 42, 7);
    const w = Math.sin(tick / 4 + f.side) * 4;
    c.beginPath(); c.moveTo(-20, -9); c.quadraticCurveTo(-34, -6 + w, -44, -2 - w); c.lineTo(-42, 4 - w); c.quadraticCurveTo(-32, 2 + w, -20, -4); c.closePath(); c.fill(); c.stroke();
  }
  // mặt (nhìn về phía trước = +x)
  const hurt = ['hit', 'fall', 'down', 'ko', 'lose'].includes(f.st);
  const blink = !hurt && (tick + f.side * 37) % 150 < 5;
  c.fillStyle = EDGE; c.strokeStyle = EDGE;
  if (hurt) { c.lineWidth = 3; for (const ex of [6, 15]) { c.beginPath(); c.moveTo(ex - 3, -5); c.lineTo(ex + 3, 1); c.moveTo(ex + 3, -5); c.lineTo(ex - 3, 1); c.stroke(); } }
  else if (blink) { c.lineWidth = 3; c.beginPath(); c.moveTo(4, -2); c.lineTo(9, -2); c.moveTo(13, -2); c.lineTo(18, -2); c.stroke(); }
  else { c.beginPath(); c.ellipse(7, -2, 2.6, 4, 0, 0, 7); c.ellipse(16, -2, 2.6, 4, 0, 0, 7); c.fill(); }
  // lông mày giận
  c.lineWidth = 3; c.beginPath(); c.moveTo(3, -10); c.lineTo(10, -7); c.moveTo(13, -7); c.lineTo(20, -10); c.stroke();
  // miệng
  c.lineWidth = 2.5; c.beginPath();
  if (L.hairStyle === 'mask') { /* che miệng */ }
  else if (f.st === 'atk' || f.st === 'win') { c.ellipse(13, 9, 4, 3.5, 0, 0, 7); c.fillStyle = '#7a2340'; c.fill(); c.stroke(); }
  else if (hurt) { c.ellipse(13, 10, 3, 4, 0, 0, 7); c.fillStyle = '#7a2340'; c.fill(); c.stroke(); }
  else { c.moveTo(8, 9); c.lineTo(17, 8); c.stroke(); }
  if (L.mustache) { c.fillStyle = EDGE; c.beginPath(); c.moveTo(5, 5); c.quadraticCurveTo(13, 1, 21, 5); c.quadraticCurveTo(13, 8, 5, 5); c.fill(); }
  // râu
  if (L.beard) {
    c.fillStyle = L.longBeard ? '#f1f1f1' : '#3a2a20'; c.lineWidth = 3;
    c.beginPath(); c.moveTo(0, 8); c.quadraticCurveTo(10, L.longBeard ? 44 : 26, 20, 10); c.quadraticCurveTo(12, 16, 0, 8); c.closePath(); c.fill(); c.stroke();
    if (!L.longBeard) { c.beginPath(); c.moveTo(6, 5); c.lineTo(20, 4); c.stroke(); }
  }
  // má hồng
  c.fillStyle = 'rgba(255,120,140,.35)'; c.beginPath(); c.arc(16, 6, 4, 0, 7); c.fill();
  c.restore();
  void flash;
}

// ---------------- SÂN KHẤU ----------------
function stageStreet(c) {
  const g = c.createLinearGradient(0, 0, 0, GY);
  g.addColorStop(0, '#1b1446'); g.addColorStop(0.6, '#4a2f7d'); g.addColorStop(1, '#ff8f6b');
  c.fillStyle = g; c.fillRect(0, 0, CW, GY);
  c.fillStyle = 'rgba(255,255,255,.8)';
  for (let i = 0; i < 50; i++) c.fillRect((i * 173) % CW, (i * 61) % 150, 1.8, 1.8);
  circle(c, 820, 70, 30, '#fff3c4', 0);
  // nhà ống xa
  c.fillStyle = '#2b1f5c';
  for (let x = -20; x < CW; x += 70) { const h = 140 + ((x * 37) % 90); c.fillRect(x, GY - 90 - h, 64, h + 90); }
  // dãy nhà gần
  const houses = [['#ffb3c1', '#c95d7a'], ['#ffe08a', '#c9962b'], ['#a5e3c5', '#3f9d72'], ['#b7c7ff', '#5468c9'], ['#ffc9a0', '#c97a3f'], ['#d6c2ff', '#7b5fc9']];
  let hx = -10, k = 0;
  const signs = ['PHỞ', 'CÀ PHÊ', 'BÁNH MÌ', 'TẠP HOÁ', 'BÚN CHẢ', 'TRÀ ĐÁ'];
  while (hx < CW) {
    const w = 150 + ((k * 53) % 40), h = 250 + ((k * 71) % 70);
    const [col, dark] = houses[k % houses.length];
    c.fillStyle = col; c.fillRect(hx, GY - h, w, h); c.lineWidth = 3; c.strokeStyle = EDGE; c.strokeRect(hx, GY - h, w, h);
    // mái
    c.fillStyle = dark; c.fillRect(hx - 6, GY - h - 12, w + 12, 14); c.strokeRect(hx - 6, GY - h - 12, w + 12, 14);
    // cửa sổ
    for (let fl = 0; fl < 2; fl++) {
      const wy = GY - h + 30 + fl * 85;
      for (let wi = 0; wi < 2; wi++) {
        const wx = hx + 20 + wi * (w / 2 - 6);
        c.fillStyle = (k + fl + wi) % 3 ? '#fff1a8' : '#3a2f6a'; c.fillRect(wx, wy, w / 2 - 34, 46); c.strokeRect(wx, wy, w / 2 - 34, 46);
        c.beginPath(); c.moveTo(wx + (w / 2 - 34) / 2, wy); c.lineTo(wx + (w / 2 - 34) / 2, wy + 46); c.stroke();
      }
      // ban công
      c.strokeStyle = EDGE; c.lineWidth = 2.5; c.beginPath(); c.moveTo(hx + 8, wy + 56); c.lineTo(hx + w - 8, wy + 56); c.stroke();
      for (let bx = hx + 12; bx < hx + w - 8; bx += 9) { c.beginPath(); c.moveTo(bx, wy + 56); c.lineTo(bx, wy + 72); c.stroke(); }
      c.beginPath(); c.moveTo(hx + 8, wy + 72); c.lineTo(hx + w - 8, wy + 72); c.stroke();
      c.fillStyle = '#4caf50'; c.beginPath(); c.arc(hx + w - 22, wy + 50, 10, 0, 7); c.fill(); c.stroke();
    }
    // biển hiệu
    c.fillStyle = k % 2 ? '#ff4d5e' : '#2f6bff'; roundRect(c, hx + 14, GY - 110, w - 28, 30, 6); c.fill(); c.stroke();
    c.fillStyle = '#fff'; c.font = '800 17px system-ui, sans-serif'; c.textAlign = 'center'; c.fillText(signs[k % signs.length], hx + w / 2, GY - 89);
    // cửa cuốn
    c.fillStyle = shade(dark, 0.7); c.fillRect(hx + 18, GY - 74, w - 36, 74); c.strokeRect(hx + 18, GY - 74, w - 36, 74);
    c.strokeStyle = 'rgba(0,0,0,.25)'; for (let ly = GY - 70; ly < GY; ly += 8) { c.beginPath(); c.moveTo(hx + 20, ly); c.lineTo(hx + w - 20, ly); c.stroke(); }
    c.strokeStyle = EDGE;
    hx += w; k++;
  }
  // dây điện + đèn lồng
  c.strokeStyle = '#120c2c'; c.lineWidth = 2;
  for (const yy of [118, 132, 150]) { c.beginPath(); c.moveTo(0, yy); c.quadraticCurveTo(CW / 2, yy + 40, CW, yy - 6); c.stroke(); }
  for (let i = 0; i < 9; i++) {
    const x = 60 + i * 105, y = 128 + Math.sin(i) * 6 + 18 * Math.sin((i / 8) * Math.PI);
    c.strokeStyle = EDGE; c.beginPath(); c.moveTo(x, y - 12); c.lineTo(x, y); c.stroke();
    c.fillStyle = i % 2 ? '#ff4d5e' : '#ffc43d'; c.beginPath(); c.ellipse(x, y + 12, 11, 14, 0, 0, 7); c.fill(); c.lineWidth = 2.5; c.stroke();
    c.fillStyle = 'rgba(255,240,180,.25)'; c.beginPath(); c.arc(x, y + 12, 24, 0, 7); c.fill();
  }
  // vỉa hè
  c.fillStyle = '#b9a6d9'; c.fillRect(0, GY, CW, CH - GY);
  c.strokeStyle = 'rgba(29,22,72,.25)'; c.lineWidth = 2;
  for (let x = 0; x < CW; x += 48) { c.beginPath(); c.moveTo(x, GY); c.lineTo(x - 30, CH); c.stroke(); }
  c.beginPath(); c.moveTo(0, GY + 30); c.lineTo(CW, GY + 30); c.stroke();
  c.strokeStyle = EDGE; c.lineWidth = 3; c.beginPath(); c.moveTo(0, GY); c.lineTo(CW, GY); c.stroke();
  // ghế nhựa + xe máy
  const stool = (x, col) => { c.fillStyle = col; roundRect(c, x, GY - 26, 26, 8, 3); c.fill(); c.stroke(); c.fillRect(x + 3, GY - 18, 4, 18); c.fillRect(x + 19, GY - 18, 4, 18); c.strokeRect(x + 3, GY - 18, 4, 18); c.strokeRect(x + 19, GY - 18, 4, 18); };
  stool(30, '#ff4d5e'); stool(66, '#2f6bff'); stool(880, '#ffc43d');
  c.fillStyle = '#3a2f6a'; c.beginPath(); c.arc(130, GY - 12, 12, 0, 7); c.arc(186, GY - 12, 12, 0, 7); c.fill(); c.stroke();
  c.fillStyle = '#ff6fb5'; roundRect(c, 124, GY - 40, 70, 20, 8); c.fill(); c.stroke();
}


// Chợ nổi lúc hoàng hôn
function stageMarket(c) {
  const g = c.createLinearGradient(0, 0, 0, GY);
  g.addColorStop(0, '#ff7eb3'); g.addColorStop(0.55, '#ffb347'); g.addColorStop(1, '#ffe08a');
  c.fillStyle = g; c.fillRect(0, 0, CW, GY);
  circle(c, 700, 230, 70, '#fff3c4', 0);
  // hàng dừa xa
  c.fillStyle = '#7a3f6a';
  c.fillRect(0, 300, CW, 40);
  for (let x = 20; x < CW; x += 90) {
    const h = 90 + ((x * 13) % 50);
    c.fillRect(x, 300 - h, 6, h);
    for (let k = 0; k < 5; k++) { c.beginPath(); c.ellipse(x + 3 + Math.cos(k * 1.3) * 22, 300 - h + Math.sin(k * 1.3) * 6, 26, 7, k * 1.3, 0, 7); c.fill(); }
  }
  // sông
  const w = c.createLinearGradient(0, 330, 0, GY);
  w.addColorStop(0, '#c56a8f'); w.addColorStop(1, '#6a4f9e');
  c.fillStyle = w; c.fillRect(0, 330, CW, GY - 330);
  c.strokeStyle = 'rgba(255,240,200,.45)'; c.lineWidth = 3;
  for (let y = 345; y < GY; y += 18) for (let x = (y * 7) % 60; x < CW; x += 120) { c.beginPath(); c.moveTo(x, y); c.lineTo(x + 40, y); c.stroke(); }
  // ghe xuồng chở trái cây
  const boat = (x, y, s, fruits) => {
    c.save(); c.translate(x, y); c.scale(s, s);
    c.fillStyle = '#6b3e1f'; c.strokeStyle = EDGE; c.lineWidth = 3;
    c.beginPath(); c.moveTo(-110, 0); c.quadraticCurveTo(0, 34, 110, 0); c.lineTo(90, -10); c.lineTo(-90, -10); c.closePath(); c.fill(); c.stroke();
    fruits.forEach((col, i) => circle(c, -70 + i * 22, -18 - (i % 2) * 8, 12, col, 2.5));
    // người đội nón
    c.fillStyle = '#ff6b6b'; c.fillRect(50, -48, 18, 30); c.strokeRect(50, -48, 18, 30);
    c.fillStyle = '#f2d27a'; c.beginPath(); c.moveTo(38, -46); c.lineTo(59, -70); c.lineTo(80, -46); c.closePath(); c.fill(); c.stroke();
    // sào tre treo hàng
    c.beginPath(); c.moveTo(-90, -10); c.lineTo(-96, -120); c.stroke();
    circle(c, -96, -118, 9, fruits[0], 2.5); circle(c, -84, -106, 8, fruits[2] || '#ffd43b', 2.5);
    c.restore();
  };
  boat(170, 395, 1, ['#ffd43b', '#3ecf6e', '#ff6b6b', '#ff9f43', '#ffd43b']);
  boat(560, 380, 0.8, ['#3ecf6e', '#ff6b6b', '#ffd43b', '#ff9f43']);
  boat(850, 410, 1.05, ['#ff9f43', '#ffd43b', '#3ecf6e', '#ff6b6b', '#3ecf6e']);
  // cầu tàu gỗ
  c.fillStyle = '#a0683d'; c.fillRect(0, GY, CW, CH - GY);
  c.strokeStyle = 'rgba(29,22,72,.35)'; c.lineWidth = 2;
  for (let x = 0; x < CW; x += 36) { c.beginPath(); c.moveTo(x, GY); c.lineTo(x, CH); c.stroke(); }
  c.strokeStyle = EDGE; c.lineWidth = 3; c.beginPath(); c.moveTo(0, GY); c.lineTo(CW, GY); c.stroke();
  for (const x of [60, 300, 640, 900]) { c.fillStyle = '#6b3e1f'; c.fillRect(x, GY - 40, 14, 44); c.strokeRect(x, GY - 40, 14, 44); }
}
// Đỉnh núi mây
function stageMountain(c) {
  const g = c.createLinearGradient(0, 0, 0, GY);
  g.addColorStop(0, '#5ec8ff'); g.addColorStop(1, '#e9f8ff');
  c.fillStyle = g; c.fillRect(0, 0, CW, GY);
  // mây
  c.fillStyle = 'rgba(255,255,255,.9)';
  for (let i = 0; i < 6; i++) { const x = (i * 173) % CW, y = 60 + (i * 41) % 120; c.beginPath(); c.arc(x, y, 24, 0, 7); c.arc(x + 28, y - 10, 30, 0, 7); c.arc(x + 60, y, 22, 0, 7); c.fill(); }
  // dãy núi
  const ridge = (base, amp, col, seed) => { c.fillStyle = col; c.beginPath(); c.moveTo(0, GY); for (let x = 0; x <= CW; x += 20) c.lineTo(x, base - Math.abs(Math.sin((x + seed) / 130)) * amp - Math.sin((x + seed) / 37) * 10); c.lineTo(CW, GY); c.fill(); };
  ridge(330, 160, '#8fa8d6', 40);
  // đỉnh tuyết
  c.fillStyle = '#ffffff';
  for (let x = 0; x <= CW; x += 20) { const y = 330 - Math.abs(Math.sin((x + 40) / 130)) * 160 - Math.sin((x + 40) / 37) * 10; if (y < 230) { c.beginPath(); c.arc(x, y + 6, 12, 0, 7); c.fill(); } }
  ridge(400, 90, '#5d7fb8', 300);
  ridge(440, 50, '#3f8f5f', 120);
  // cáp treo
  c.strokeStyle = '#1d1648'; c.lineWidth = 2.5; c.beginPath(); c.moveTo(0, 120); c.quadraticCurveTo(480, 190, CW, 90); c.stroke();
  c.fillStyle = '#ff4d5e'; roundRect(c, 610, 160, 46, 36, 6); c.fill(); c.stroke(); c.fillStyle = '#fff3c4'; c.fillRect(618, 168, 30, 12); c.beginPath(); c.moveTo(633, 160); c.lineTo(633, 150); c.stroke();
  // mái chùa
  c.fillStyle = '#b5482c'; c.strokeStyle = EDGE; c.lineWidth = 3;
  c.beginPath(); c.moveTo(60, 330); c.quadraticCurveTo(140, 300, 220, 270); c.quadraticCurveTo(300, 300, 380, 330); c.lineTo(340, 326); c.lineTo(100, 326); c.closePath(); c.fill(); c.stroke();
  c.fillStyle = '#ffe08a'; c.fillRect(120, 326, 200, 70); c.strokeRect(120, 326, 200, 70);
  c.fillStyle = '#7a2e1d'; c.fillRect(200, 346, 40, 50); c.strokeRect(200, 346, 40, 50);
  // nền đá
  c.fillStyle = '#c8c3d9'; c.fillRect(0, GY, CW, CH - GY);
  c.strokeStyle = 'rgba(29,22,72,.25)'; c.lineWidth = 2;
  for (let y = GY + 18; y < CH; y += 22) { c.beginPath(); c.moveTo(0, y); c.lineTo(CW, y); c.stroke(); }
  for (let x = 0; x < CW; x += 70) { c.beginPath(); c.moveTo(x + ((x / 70) % 2) * 35, GY); c.lineTo(x + ((x / 70) % 2) * 35, CH); c.stroke(); }
  c.strokeStyle = EDGE; c.lineWidth = 3; c.beginPath(); c.moveTo(0, GY); c.lineTo(CW, GY); c.stroke();
}
export const STAGES = [
  { name: 'Phố Cổ Về Đêm', draw: stageStreet, crowd: [[60, 230], [250, 220], [440, 305], [640, 230], [820, 305], [160, 305], [540, 220], [900, 220]] },
  { name: 'Chợ Nổi Cái Răng', draw: stageMarket, crowd: [[120, 370], [230, 380], [520, 355], [600, 360], [800, 385], [900, 390], [350, 330], [700, 330]] },
  { name: 'Đỉnh Núi Mây', draw: stageMountain, crowd: [[150, 320], [260, 318], [633, 186], [420, 380], [760, 400], [880, 360], [60, 400], [330, 420]] },
];
const stageCache = {};
function stageImage(i) {
  if (!stageCache[i]) {
    const cv = typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(CW, CH) : Object.assign(document.createElement('canvas'), { width: CW, height: CH });
    STAGES[i].draw(cv.getContext('2d'));
    stageCache[i] = cv;
  }
  return stageCache[i];
}
function drawCrowd(c, crowd, tick, cheer, stage) {
  const spots = STAGES[stage].crowd;
  crowd.slice(0, spots.length).forEach((e, i) => {
    const [x, y0] = spots[i];
    const y = y0 + Math.sin(tick / 6 + i) * (cheer ? 6 : 1.5) - (cheer ? 4 : 0);
    c.font = '26px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif'; c.textAlign = 'center';
    c.fillText(e, x, y);
    if (cheer && i % 2 === 0) { c.font = '14px system-ui'; c.fillText(['🙌', '🔥', '👏'][i % 3], x + 16, y - 18); }
  });
}
const mkCanvas = (w, h) => (typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(w, h) : Object.assign(document.createElement('canvas'), { width: w, height: h }));
// mặt nhân vật (dùng cho thanh máu, màn chọn, cắt cảnh tuyệt chiêu)
const headCache = {};
export function headImage(cid, size = 96) {
  const key = cid + size;
  if (headCache[key]) return headCache[key];
  const cv = mkCanvas(size, size), c = cv.getContext('2d');
  c.translate(size / 2, size / 2 + size * 0.06); c.scale(size / 62, size / 62);
  drawHead(c, -4, 0, 0, CHAR[cid], 0, 0, { side: 0, st: 'idle' });
  headCache[key] = cv;
  return cv;
}
export function headPortrait(canvas, cid) {
  const c = canvas.getContext('2d');
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.drawImage(headImage(cid, 128), 0, 0, canvas.width, canvas.height);
}
// ---------------- HIỆU ỨNG ----------------
export class FX {
  constructor() { this.list = []; this.seen = new Set(); this.shake = 0; this.flash = 0; this.banner = null; this.trail = [null, null]; this.cheer = 0; }
  add(e, tick) {
    if (this.seen.has(e.key)) return false;
    this.seen.add(e.key);
    if (this.seen.size > 3000) this.seen = new Set([...this.seen].slice(-1500));
    const k = e.k;
    if (k === 'hit') { this.list.push({ k: 'spark', x: e.x / U, y: GY - e.y / U, born: tick, big: e.big }); if (e.big) this.shake = Math.max(this.shake, 8); this.cheer = 40; }
    else if (k === 'block') this.list.push({ k: 'guard', x: e.x / U, y: GY - e.y / U, born: tick });
    else if (k === 'throw' || k === 'grab') { this.list.push({ k: 'spark', x: e.x / U, y: GY - e.y / U, born: tick, big: 1 }); this.shake = 14; this.cheer = 50; }
    else if (k === 'quake') { this.list.push({ k: 'quake', x: e.x / U, born: tick }); this.shake = 10; }
    else if (k === 'clash') this.list.push({ k: 'spark', x: e.x / U, y: GY - e.y / U, born: tick, big: 1, col: '#9be7ff' });
    else if (k === 'tele') this.list.push({ k: 'smoke', side: e.side, born: tick });
    else if (k === 'special') this.list.push({ k: 'name', side: e.side, text: e.name, born: tick });
    else if (k === 'super') { this.flash = 30; this.list.push({ k: 'cutin', side: e.side, text: e.name, born: tick }); this.cheer = 60; }
    else if (k === 'counter') { this.list.push({ k: 'pop', x: e.x / U, y: GY - e.y / U - 40, text: 'PHẢN ĐÒN!', col: '#74c0fc', born: tick }); this.shake = 10; this.cheer = 50; }
    else if (k === 'armor') { this.list.push({ k: 'spark', x: e.x / U, y: GY - e.y / U, born: tick, col: '#ff8787' }); this.list.push({ k: 'pop', x: e.x / U, y: GY - e.y / U - 40, text: 'GỒNG!', col: '#ff8787', born: tick }); }
    else if (k === 'flex') this.list.push({ k: 'name', side: e.side, text: 'GỒNG CƠ! 💪', born: tick });
    else if (k === 'splash') this.list.push({ k: 'guard', x: e.x / U, y: GY - 6, born: tick });
    else if (k === 'dash') this.list.push({ k: 'dust', x: e.x / U, dir: e.dir, born: tick });
    else if (k === 'round') this.banner = { text: `HIỆP ${e.n}`, born: tick, sub: '' };
    else if (k === 'fight') this.banner = { text: 'ĐÁNH!', born: tick, hot: 1 };
    else if (k === 'ko') { this.banner = { text: e.why === 'time' ? 'HẾT GIỜ!' : e.w === -1 ? 'HAI BÊN GỤC!' : 'K.O.!', born: tick, hot: 1, big: 1 }; this.shake = 16; this.cheer = 90; }
    return true;
  }
}

// ---------------- KHUNG HÌNH ----------------
let worldCv = null, scanCv = null;
function scanlines() {
  if (scanCv) return scanCv;
  scanCv = mkCanvas(CW, CH);
  const c = scanCv.getContext('2d');
  c.fillStyle = 'rgba(0,0,0,.16)';
  for (let y = 0; y < CH; y += 3) c.fillRect(0, y, CW, 1);
  const v = c.createRadialGradient(CW / 2, CH / 2, CH * 0.45, CW / 2, CH / 2, CW * 0.65);
  v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.45)');
  c.fillStyle = v; c.fillRect(0, 0, CW, CH);
  return scanCv;
}
// info: { names, crowd, stage, pixel, crt, waiting, endSub, vs }
export function render(c, S, fx, tick, info = {}) {
  const stage = (info.stage ?? 0) % STAGES.length;
  const pixel = info.pixel !== false;
  const scale = pixel ? 0.5 : 1;
  if (!worldCv || worldCv.width !== CW * scale) worldCv = mkCanvas(CW * scale, CH * scale);
  const w = worldCv.getContext('2d');
  w.save(); w.setTransform(scale, 0, 0, scale, 0, 0);
  drawWorld(w, S, fx, tick, info, stage);
  w.restore();
  c.save();
  let sx = 0, sy = 0;
  if (fx.shake > 0) { sx = (Math.random() - 0.5) * fx.shake; sy = (Math.random() - 0.5) * fx.shake; fx.shake *= 0.85; if (fx.shake < 0.5) fx.shake = 0; }
  c.imageSmoothingEnabled = !pixel;
  c.fillStyle = '#000'; c.fillRect(0, 0, CW, CH);
  c.drawImage(worldCv, sx, sy, CW, CH);
  c.imageSmoothingEnabled = true;
  c.restore();
  cutins(c, S, fx, tick);
  hud(c, S, fx, tick, info);
  if (info.vs) drawVS(c, info.vs, tick);
  if (info.crt !== false) c.drawImage(scanlines(), 0, 0);
}
const ZOOM = 1.3;
function drawWorld(c, S, fx, tick, info, stage) {
  // máy quay bám theo 2 võ sĩ (phóng to như thùng game)
  const half = CW / ZOOM / 2;
  const want = Math.max(half, Math.min(CW - half, (S.f[0].x + S.f[1].x) / 2 / U));
  fx.cam = fx.cam === undefined || Math.abs(fx.cam - want) > 200 ? want : fx.cam + (want - fx.cam) * 0.2;
  c.fillStyle = '#000'; c.fillRect(0, 0, CW, CH);
  c.scale(ZOOM, ZOOM);
  c.translate(-(fx.cam - half), -(GY - (CH - 58) / ZOOM));
  c.drawImage(stageImage(stage), 0, 0);
  drawCrowd(c, info.crowd || [], tick, fx.cheer > 0, stage);
  if (fx.cheer > 0) fx.cheer--;
  if (fx.flash > 0) { c.fillStyle = `rgba(10,6,30,${Math.min(0.6, fx.flash / 30)})`; c.fillRect(0, 0, CW, CH); fx.flash--; }
  for (const e of fx.list) if (e.k === 'quake') { const a = tick - e.born; c.strokeStyle = `rgba(255,200,80,${Math.max(0, 1 - a / 24)})`; c.lineWidth = 6; c.beginPath(); c.ellipse(e.x, GY, a * 9, 10, 0, 0, Math.PI * 2); c.stroke(); }
  // võ sĩ (người đang ra đòn vẽ sau) + bóng mờ khi chạy
  const order = S.f[0].st === 'atk' ? [1, 0] : [0, 1];
  for (const i of order) {
    const f = S.f[i];
    const p = poseOf(f, S, tick);
    const m = f.st === 'atk' && f.mv && movesOf(f.c)[f.mv];
    if (f.st === 'run' || (m && m.special && ['dash', 'rush', 'cross', 'tayson', 'shadow', 'roll', 'armor', 'tiger', 'dive'].includes(m.type) && (f.vx || f.vy))) for (let k = 3; k >= 1; k--) drawFighter(c, { ...f, x: f.x - f.vx * k * 3 }, p, { tick, ghost: true });
    if (m && m.sup && f.t < m.s + m.a) aura(c, f, CHAR[f.c].look.aura, tick);
    if (f.buff > 0) aura(c, f, '#ff4d5e', tick);
    if (m && m.counter && f.t >= m.s && f.t < m.s + m.a) { c.strokeStyle = `rgba(150,220,255,${0.5 + Math.sin(tick) * 0.3})`; c.lineWidth = 5; c.beginPath(); c.ellipse(f.x / U, GY - f.y / U - 75, 46, 88, 0, 0, 7); c.stroke(); }
    if (m && m.pose === 'charge' && m.type === 'charge' && f.t >= m.s && f.t < m.s + m.a) cyclo(c, f.x / U + f.face * 10, GY, f.face, tick);
    drawFighter(c, f, p, { tick });
    if (m) moveExtras(c, f, m, tick);
    if (m && m.type === 'beam' && f.t >= m.s && f.t < m.s + m.a) beam(c, f, m, tick, CHAR[f.c].super.color || '#4dabf7');
  }
  for (const p of S.proj) projectile(c, p, tick);
  fx.list = fx.list.filter((e) => tick - e.born < (e.k === 'cutin' ? 50 : e.k === 'name' ? 45 : 26));
  for (const e of fx.list) {
    const a = tick - e.born;
    if (e.k === 'spark') spark(c, e.x, e.y, a, e.big, e.col);
    else if (e.k === 'guard') { c.strokeStyle = `rgba(120,200,255,${Math.max(0, 1 - a / 14)})`; c.lineWidth = 5; c.beginPath(); c.arc(e.x, e.y, 10 + a * 2.2, -1.2, 1.2); c.stroke(); }
    else if (e.k === 'smoke') { const f = S.f[e.side]; c.fillStyle = `rgba(230,220,255,${Math.max(0, 0.7 - a / 30)})`; for (let k = 0; k < 6; k++) { c.beginPath(); c.arc(f.x / U + Math.cos(k) * a * 2, GY - 70 + Math.sin(k * 2) * a * 1.5, 14 + a, 0, 7); c.fill(); } }
    else if (e.k === 'dust') { c.fillStyle = `rgba(255,255,255,${Math.max(0, 0.6 - a / 20)})`; for (let k = 0; k < 3; k++) { c.beginPath(); c.arc(e.x - e.dir * (a * 2 + k * 10), GY - 6 - k * 3, 6 + a * 0.6, 0, 7); c.fill(); } }
    else if (e.k === 'pop') { c.save(); c.globalAlpha = Math.max(0, 1 - a / 26); c.font = 'italic 900 26px system-ui'; c.textAlign = 'center'; c.lineWidth = 6; c.strokeStyle = EDGE; c.strokeText(e.text, e.x, e.y - a); c.fillStyle = e.col; c.fillText(e.text, e.x, e.y - a); c.restore(); }
    else if (e.k === 'name') {
      const f = S.f[e.side];
      c.save(); c.globalAlpha = 45 - a > 10 ? 1 : (45 - a) / 10;
      c.font = 'italic 900 19px system-ui, sans-serif'; c.textAlign = 'center'; c.lineWidth = 5; c.strokeStyle = EDGE;
      const x = Math.max(90, Math.min(CW - 90, f.x / U)), y = GY - 205 - Math.min(10, a);
      c.strokeText(e.text, x, y); c.fillStyle = '#fff'; c.fillText(e.text, x, y);
      c.restore();
    }
  }
}
// cắt cảnh khi tung tuyệt chiêu
function cutins(c, S, fx, tick) {
  for (const e of fx.list) {
    if (e.k !== 'cutin') continue;
    const a = tick - e.born, f = S.f[e.side];
    const k = a < 8 ? a / 8 : a > 40 ? Math.max(0, (50 - a) / 10) : 1;
    const y = 170, h = 120 * k;
    c.save();
    c.beginPath(); c.moveTo(0, y - h / 2 + 20); c.lineTo(CW, y - h / 2 - 20); c.lineTo(CW, y + h / 2 - 20); c.lineTo(0, y + h / 2 + 20); c.closePath();
    c.fillStyle = 'rgba(20,10,50,.92)'; c.fill(); c.clip();
    c.strokeStyle = CHAR[f.c].look.aura; c.globalAlpha = 0.6; c.lineWidth = 3;
    for (let i = 0; i < 18; i++) { const yy = y - 60 + ((i * 37 + a * 30) % 120); c.beginPath(); c.moveTo(((i * 97 + a * 60 * (e.side ? -1 : 1)) % (CW + 200)) - 100, yy); c.lineTo(((i * 97 + a * 60 * (e.side ? -1 : 1)) % (CW + 200)) + 60, yy - 4); c.stroke(); }
    c.globalAlpha = 1;
    const hx = e.side ? CW - 200 - (1 - k) * 200 : 60 + (1 - k) * -200;
    c.drawImage(headImage(f.c, 160), hx, y - 92, 170, 170);
    c.font = 'italic 900 40px system-ui, sans-serif'; c.textAlign = e.side ? 'right' : 'left'; c.lineWidth = 8; c.strokeStyle = EDGE;
    const tx = e.side ? CW - 240 : 240;
    c.strokeText(e.text, tx, y + 14); c.fillStyle = '#ffd43b'; c.fillText(e.text, tx, y + 14);
    c.restore();
  }
}
function cyclo(c, x, y, dir, tick) {
  c.save(); c.translate(x, y); c.scale(dir, 1);
  c.strokeStyle = EDGE; c.lineWidth = 3;
  for (const wx of [-34, 30, 46]) { c.fillStyle = '#2a2350'; c.beginPath(); c.arc(wx, -14, 13, 0, 7); c.fill(); c.stroke(); c.strokeStyle = '#ccc'; c.beginPath(); c.moveTo(wx + Math.cos(tick / 2) * 10, -14 + Math.sin(tick / 2) * 10); c.lineTo(wx - Math.cos(tick / 2) * 10, -14 - Math.sin(tick / 2) * 10); c.stroke(); c.strokeStyle = EDGE; }
  c.fillStyle = '#2f9e44'; roundRect(c, 14, -56, 46, 30, 8); c.fill(); c.stroke();
  c.beginPath(); c.moveTo(-34, -14); c.lineTo(10, -30); c.lineTo(30, -14); c.stroke();
  c.restore();
}
function projectile(c, p, tick) {
  const x = p.x / U, y = GY - p.y / U, ch = CHAR[p.c];
  const sp = ch.specials.find((s) => s.glyph === p.glyph) || ch.specials.find((s) => s.color) || {};
  const col = sp.color || ch.look.aura || '#4dabf7', glyph = p.glyph || 'orb', dir = Math.sign(p.vx) || p.face || 1;
  const BALL = ['#ff4d5e', '#ffd43b', '#4dabf7', '#38d9a9'];
  if (!['cyclo', 'tornado', 'missile', 'barbell'].includes(glyph)) { for (let i = 3; i >= 1; i--) { c.globalAlpha = 0.14; circle(c, x - dir * i * 11, y + Math.sin(tick / 2 + i) * 3, Math.max(4, p.w - i * 3), col, 0); } c.globalAlpha = 1; }
  c.save(); c.translate(x, y); c.strokeStyle = EDGE; c.lineWidth = 3;
  switch (glyph) {
    case 'star': c.rotate(tick / 2); c.fillStyle = col; c.beginPath(); for (let k = 0; k < 4; k++) { const a = (k / 4) * Math.PI * 2; c.lineTo(Math.cos(a) * 16, Math.sin(a) * 16); c.lineTo(Math.cos(a + 0.78) * 5, Math.sin(a + 0.78) * 5); } c.closePath(); c.fill(); c.stroke(); break;
    case 'hat': c.rotate(tick / 2.5); c.fillStyle = '#f2d27a'; c.beginPath(); c.ellipse(0, 0, 28, 10, 0, 0, 7); c.fill(); c.stroke(); c.beginPath(); c.moveTo(-22, -2); c.lineTo(0, -20); c.lineTo(22, -2); c.closePath(); c.fill(); c.stroke(); break;
    case 'ball': circle(c, 0, 0, p.w, BALL[p.col || 0] || col); c.fillStyle = 'rgba(255,255,255,.7)'; c.beginPath(); c.arc(-4, -5, 4, 0, 7); c.fill(); break;
    case 'marble': circle(c, 0, 0, 9, BALL[p.col || 0], 2); c.fillStyle = 'rgba(255,255,255,.85)'; c.beginPath(); c.arc(-3, -3, 3, 0, 7); c.fill(); break;
    case 'bread': c.rotate(p.vy ? Math.PI / 2 + 0.3 : tick / 4); c.fillStyle = '#e8a64a'; c.beginPath(); c.ellipse(0, 0, 28, 10, 0, 0, 7); c.fill(); c.stroke(); c.strokeStyle = '#8a5a2b'; c.lineWidth = 2; for (const k of [-12, 0, 12]) { c.beginPath(); c.moveTo(k - 4, -6); c.lineTo(k + 4, 6); c.stroke(); } break;
    case 'pate': c.rotate(tick / 3); c.fillStyle = '#c97a3f'; c.beginPath(); c.arc(0, 0, 16, 0, 7); c.fill(); c.stroke(); c.fillStyle = '#ffd8a8'; c.beginPath(); c.arc(-4, -4, 5, 0, 7); c.fill(); break;
    case 'wave': c.strokeStyle = col; c.lineWidth = 7; for (let k = 0; k < 3; k++) { c.globalAlpha = 1 - k * 0.3; c.beginPath(); c.arc(-dir * k * 12, 0, 24 + k * 3 + Math.sin(tick / 2) * 2, dir > 0 ? -1.1 : Math.PI - 1.1, dir > 0 ? 1.1 : Math.PI + 1.1); c.stroke(); } break;
    case 'barbell': c.rotate((p.x / U / 12) * dir); c.fillStyle = '#666'; c.fillRect(-30, -4, 60, 8); c.strokeRect(-30, -4, 60, 8); for (const sx of [-1, 1]) { c.fillStyle = '#2a2350'; c.beginPath(); c.arc(sx * 26, 0, 20, 0, 7); c.fill(); c.stroke(); c.fillStyle = '#ff4d5e'; c.beginPath(); c.arc(sx * 26, 0, 8, 0, 7); c.fill(); } break;
    case 'hoop': c.rotate(tick / 3); c.lineWidth = 8; c.strokeStyle = '#ff6b00'; c.beginPath(); c.arc(0, 0, 28, 0, 7); c.stroke(); c.lineWidth = 3; c.strokeStyle = '#ffd43b'; for (let k = 0; k < 8; k++) { const a = (k / 8) * 7; c.beginPath(); c.moveTo(Math.cos(a) * 30, Math.sin(a) * 30); c.lineTo(Math.cos(a) * (38 + Math.sin(tick + k) * 4), Math.sin(a) * (38 + Math.sin(tick + k) * 4)); c.stroke(); } break;
    case 'tornado': for (let k = 0; k < 7; k++) { const yy = 60 - k * 20, r = 16 + k * 8; c.strokeStyle = k % 2 ? '#b197fc' : '#e5dbff'; c.lineWidth = 6; c.beginPath(); c.ellipse(Math.sin(tick / 3 + k) * 8, yy, r, 7, 0, 0, 7); c.stroke(); } break;
    case 'cyclo': c.restore(); cyclo(c, x, GY, dir, tick); c.save(); break;
    case 'missile': c.rotate(Math.atan2(-p.vy, p.vx)); c.fillStyle = '#e9ecef'; roundRect(c, -16, -6, 32, 12, 6); c.fill(); c.stroke(); c.fillStyle = '#ff4d5e'; c.beginPath(); c.moveTo(16, -6); c.lineTo(24, 0); c.lineTo(16, 6); c.fill(); c.fillStyle = '#ffd43b'; c.beginPath(); c.moveTo(-16, -4); c.lineTo(-28 - Math.random() * 8, 0); c.lineTo(-16, 4); c.fill(); break;
    default: circle(c, 0, 0, 22 + Math.sin(tick / 2) * 2, col); circle(c, dir * 4, -3, 11, '#ffffff', 0); if (ch.id === 'teo') { c.font = '18px system-ui'; c.textAlign = 'center'; c.fillText('🍜', 0, 7); }
  }
  c.restore();
}
// đồ vật đi kèm chiêu (tay dài, khăn, gậy bánh mì, laser, nam châm)
function moveExtras(c, f, m, tick) {
  const act = f.t >= m.s && f.t < m.s + m.a, sc = CHAR[f.c].size / 100;
  const x = f.x / U, gy = GY - f.y / U, d = f.face;
  if (!act) return;
  c.save(); c.lineCap = 'round';
  if (m.type === 'stretch' || m.type === 'whip') {
    const [, y0, x1, y1] = m.hb; const yy = gy - ((y0 + y1) / 2) * 1;
    const x0 = x + d * 30 * sc, xe = x + d * x1;
    if (m.type === 'stretch') { c.strokeStyle = EDGE; c.lineWidth = 17; c.beginPath(); c.moveTo(x0, yy); c.lineTo(xe, yy); c.stroke(); c.strokeStyle = CHAR[f.c].look.skin; c.lineWidth = 11; c.stroke(); circle(c, xe, yy, 11, CHAR[f.c].look.skin); }
    else { c.strokeStyle = EDGE; c.lineWidth = 9; c.beginPath(); c.moveTo(x0, yy); for (let k = 1; k <= 10; k++) c.lineTo(x0 + ((xe - x0) * k) / 10, yy + Math.sin(k + tick) * 6); c.stroke(); c.strokeStyle = '#ff4d5e'; c.lineWidth = 5; c.stroke(); }
  } else if (m.type === 'pole') {
    const xe = x + d * m.hb[2], yy = GY - 16;
    c.fillStyle = '#e8a64a'; c.strokeStyle = EDGE; c.lineWidth = 3;
    c.beginPath(); c.ellipse((x + d * 20 + xe) / 2, yy, Math.abs(xe - x - d * 20) / 2, 9, 0, 0, 7); c.fill(); c.stroke();
  } else if (m.type === 'laser') {
    const yy = gy - 103 * sc, xe = x + d * 920;
    c.strokeStyle = '#38d9a9'; c.lineWidth = 16 + Math.sin(tick * 2) * 4; c.globalAlpha = 0.6; c.beginPath(); c.moveTo(x + d * 40, yy); c.lineTo(xe, yy); c.stroke();
    c.strokeStyle = '#fff'; c.lineWidth = 5; c.globalAlpha = 1; c.stroke();
  } else if (m.type === 'magnet') {
    c.strokeStyle = '#ff4d5e'; c.lineWidth = 4;
    for (let k = 0; k < 4; k++) { const r = ((tick * 6 + k * 40) % 160) + 30; c.globalAlpha = 1 - r / 190; c.beginPath(); c.arc(x, gy - 100, r, d > 0 ? -0.6 : Math.PI - 0.6, d > 0 ? 0.6 : Math.PI + 0.6); c.stroke(); }
  }
  c.restore();
}

// ---------------- THANH MÁU KIỂU THÙNG GAME ----------------
function bar(c, x, y, w, h, k, trail, side) {
  const sl = 14; // độ nghiêng
  const shape = (kk) => { c.beginPath(); if (side === 0) { const x1 = x + w, x0 = x1 - w * kk; c.moveTo(x0 + sl, y); c.lineTo(x1, y); c.lineTo(x1 - sl, y + h); c.lineTo(x0, y + h); } else { const x0 = x, x1 = x0 + w * kk; c.moveTo(x0, y); c.lineTo(x1 - sl, y); c.lineTo(x1, y + h); c.lineTo(x0 + sl, y + h); } c.closePath(); };
  shape(1); c.fillStyle = '#2a1f55'; c.fill();
  if (trail > 0) { shape(trail); c.fillStyle = '#ff2e4d'; c.fill(); }
  if (k > 0) { shape(k); const g = c.createLinearGradient(0, y, 0, y + h); g.addColorStop(0, '#fff6a8'); g.addColorStop(0.5, k > 0.25 ? '#ffd43b' : '#ff9f43'); g.addColorStop(1, k > 0.25 ? '#e0a800' : '#e8590c'); c.fillStyle = g; c.fill(); }
  shape(1); c.lineWidth = 4; c.strokeStyle = EDGE; c.stroke(); c.lineWidth = 1.5; c.strokeStyle = 'rgba(255,255,255,.6)'; c.stroke();
}
function hud(c, S, fx, tick, info) {
  const names = info.names || ['', ''];
  const W = 340, Y = 18, H = 26;
  for (const s of [0, 1]) {
    const f = S.f[s], ch = CHAR[f.c];
    const k = Math.max(0, f.hp) / f.max;
    if (fx.trail[s] === null || fx.trail[s] < k) fx.trail[s] = k;
    else if (f.st !== 'hit' && f.st !== 'block') fx.trail[s] = Math.max(k, fx.trail[s] - 0.008);
    const x0 = s === 0 ? 96 : CW - 96 - W;
    bar(c, x0, Y, W, H, k, fx.trail[s], s);
    // khung mặt
    const px = s === 0 ? 14 : CW - 14 - 74;
    c.fillStyle = '#2a1f55'; roundRect(c, px, Y - 6, 74, 74, 10); c.fill();
    c.save(); roundRect(c, px, Y - 6, 74, 74, 10); c.clip();
    c.fillStyle = ch.look.aura; c.globalAlpha = 0.5; c.fillRect(px, Y - 6, 74, 74); c.globalAlpha = 1;
    if (s === 1) { c.translate(px * 2 + 74, 0); c.scale(-1, 1); }
    c.drawImage(headImage(f.c, 96), px - 6, Y - 10, 86, 86);
    c.restore();
    c.lineWidth = 4; c.strokeStyle = EDGE; roundRect(c, px, Y - 6, 74, 74, 10); c.stroke();
    // tên
    c.font = 'italic 900 22px system-ui, sans-serif'; c.textAlign = s === 0 ? 'left' : 'right'; c.lineWidth = 6; c.strokeStyle = EDGE; c.fillStyle = '#fff';
    const nx = s === 0 ? x0 + 4 : x0 + W - 4;
    c.strokeText(ch.name.toUpperCase(), nx, Y + H + 24); c.fillText(ch.name.toUpperCase(), nx, Y + H + 24);
    if (names[s]) { c.font = '800 13px system-ui'; c.lineWidth = 4; const nw = c.measureText(ch.name.toUpperCase()).width; void nw; c.strokeText(names[s], nx, Y + H + 42); c.fillStyle = '#ffd43b'; c.fillText(names[s], nx, Y + H + 42); }
    // số hiệp thắng
    for (let wn = 0; wn < S.need; wn++) {
      const cx = s === 0 ? x0 + W - 14 - wn * 26 : x0 + 14 + wn * 26, cy = Y + H + 16;
      c.save(); c.translate(cx, cy); c.rotate(0.2);
      c.fillStyle = wn < f.wins ? '#ffd43b' : '#2a1f55'; c.strokeStyle = EDGE; c.lineWidth = 3; roundRect(c, -10, -9, 20, 18, 4); c.fill(); c.stroke();
      if (wn < f.wins) { c.font = '900 13px system-ui'; c.textAlign = 'center'; c.fillStyle = '#c2410c'; c.fillText('V', 0, 5); }
      c.restore();
    }
    // nội lực
    const mY = CH - 34, mW = 250, mx = s === 0 ? 30 : CW - 30 - mW;
    const mk = f.meter / 1000;
    c.fillStyle = '#2a1f55'; roundRect(c, mx - 3, mY - 3, mW + 6, 20, 6); c.fill();
    const g = c.createLinearGradient(mx, 0, mx + mW, 0);
    if (mk >= 1) { const h0 = (tick * 9) % 360; g.addColorStop(0, `hsl(${h0},95%,60%)`); g.addColorStop(1, `hsl(${(h0 + 120) % 360},95%,60%)`); } else { g.addColorStop(0, '#228be6'); g.addColorStop(1, '#74c0fc'); }
    c.fillStyle = g;
    if (s === 0) c.fillRect(mx, mY, mW * mk, 14); else c.fillRect(mx + mW * (1 - mk), mY, mW * mk, 14);
    c.strokeStyle = EDGE; c.lineWidth = 3; roundRect(c, mx - 3, mY - 3, mW + 6, 20, 6); c.stroke();
    c.font = 'italic 900 15px system-ui'; c.textAlign = s === 0 ? 'left' : 'right'; c.lineWidth = 4;
    const mt = mk >= 1 ? (tick % 20 < 12 ? '★ MAX — TUYỆT CHIÊU!' : '') : 'NỘI LỰC';
    c.strokeText(mt, s === 0 ? mx : mx + mW, mY - 8); c.fillStyle = mk >= 1 ? '#ffd43b' : '#fff'; c.fillText(mt, s === 0 ? mx : mx + mW, mY - 8);
    // combo
    if (f.comboT > 0 && f.showCombo >= 2) {
      c.save(); const pop = Math.max(0, f.comboT - 62) / 8;
      c.translate(s === 0 ? 40 : CW - 40, 150); c.scale(1 + pop * 0.4, 1 + pop * 0.4);
      c.font = 'italic 900 44px system-ui'; c.textAlign = s === 0 ? 'left' : 'right'; c.lineWidth = 8; c.strokeStyle = EDGE; c.fillStyle = '#ffd43b';
      c.strokeText(`${f.showCombo} ĐÒN`, 0, 0); c.fillText(`${f.showCombo} ĐÒN`, 0, 0);
      c.font = 'italic 900 18px system-ui'; c.lineWidth = 5; c.fillStyle = '#ff6b6b'; c.strokeText('LIÊN HOÀN!', 0, 22); c.fillText('LIÊN HOÀN!', 0, 22);
      c.restore();
    }
  }
  // đồng hồ
  c.fillStyle = '#2a1f55'; roundRect(c, CW / 2 - 38, 10, 76, 58, 12); c.fill(); c.strokeStyle = EDGE; c.lineWidth = 4; c.stroke();
  c.font = '900 40px system-ui, sans-serif'; c.textAlign = 'center'; c.fillStyle = S.time && S.timer < 600 && tick % 30 < 15 ? '#ff6b6b' : '#ffd43b';
  c.lineWidth = 5; c.strokeStyle = EDGE;
  const tt = S.time ? String(Math.ceil(S.timer / 60)).padStart(2, '0') : '∞';
  c.strokeText(tt, CW / 2, 54); c.fillText(tt, CW / 2, 54);
  // băng rôn
  if (fx.banner) {
    const a = tick - fx.banner.born;
    const life = fx.banner.big ? 110 : 60;
    if (a > life) fx.banner = null;
    else {
      const k = Math.min(1, a / 8), out = a > life - 12 ? (life - a) / 12 : 1;
      c.save(); c.globalAlpha = out; c.translate(CW / 2, 240); c.scale(0.4 + k * 0.6 + (fx.banner.hot ? Math.sin(a / 3) * 0.03 : 0), 0.4 + k * 0.6); c.rotate(-0.05);
      c.font = `italic 900 ${fx.banner.big ? 120 : 84}px system-ui, sans-serif`; c.textAlign = 'center'; c.lineWidth = 14; c.strokeStyle = EDGE; c.lineJoin = 'round';
      c.strokeText(fx.banner.text, 0, 0);
      const g = c.createLinearGradient(0, -80, 0, 10); g.addColorStop(0, '#fff6a8'); g.addColorStop(1, fx.banner.hot ? '#ff2e4d' : '#ffb000');
      c.fillStyle = g; c.fillText(fx.banner.text, 0, 0);
      c.restore();
    }
  }
  if (S.phase === 'end') {
    const w = S.winner;
    const t = w < 0 ? 'HOÀ!' : `${CHAR[S.f[w].c].name.toUpperCase()} THẮNG!`;
    c.save(); c.translate(CW / 2, 250); c.font = 'italic 900 66px system-ui'; c.textAlign = 'center'; c.lineWidth = 12; c.strokeStyle = EDGE; c.strokeText(t, 0, 0); c.fillStyle = '#ffd43b'; c.fillText(t, 0, 0);
    const q = w >= 0 ? `“${CHAR[S.f[w].c].quote}”` : '';
    if (q) { c.font = 'italic 800 22px system-ui'; c.lineWidth = 6; c.strokeText(q, 0, 44); c.fillStyle = '#fff'; c.fillText(q, 0, 44); }
    if (info.endSub) { c.font = '800 18px system-ui'; c.lineWidth = 5; c.strokeText(info.endSub, 0, 80); c.fillStyle = '#c9c0f0'; c.fillText(info.endSub, 0, 80); }
    c.restore();
  }
  if (info.waiting) {
    c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(0, CH / 2 + 60, CW, 50);
    c.font = '800 22px system-ui'; c.textAlign = 'center'; c.fillStyle = '#fff'; c.fillText(info.waiting, CW / 2, CH / 2 + 93);
  }
}

// màn hình VS trước trận
export function drawVS(c, vs, tick) {
  const k = Math.min(1, (vs.t || 0) / 20);
  c.save();
  c.fillStyle = '#c92a2a'; c.beginPath(); c.moveTo(0, 0); c.lineTo(CW / 2 + 60, 0); c.lineTo(CW / 2 - 60, CH); c.lineTo(0, CH); c.closePath(); c.fill();
  c.fillStyle = '#1c4fd8'; c.beginPath(); c.moveTo(CW / 2 + 60, 0); c.lineTo(CW, 0); c.lineTo(CW, CH); c.lineTo(CW / 2 - 60, CH); c.closePath(); c.fill();
  c.strokeStyle = 'rgba(255,255,255,.12)'; c.lineWidth = 2;
  for (let i = -CH; i < CW; i += 26) { c.beginPath(); c.moveTo(i + (tick * 4) % 26, 0); c.lineTo(i + CH + (tick * 4) % 26, CH); c.stroke(); }
  for (const s of [0, 1]) {
    const cid = vs.chars[s];
    const f = { c: cid, side: s, x: (s ? 700 + (1 - k) * 300 : 260 - (1 - k) * 300) * U, y: 0, face: s ? -1 : 1, st: 'idle', t: 0, vy: 0, stun: 0, cb: 0 };
    c.save(); c.translate(0, -60); c.scale(1, 1);
    c.translate((f.x / U), GY); c.scale(1.9, 1.9); c.translate(-(f.x / U), -GY);
    drawFighter(c, f, poseOf(f, null, tick), { tick });
    c.restore();
    c.font = 'italic 900 46px system-ui'; c.textAlign = s ? 'right' : 'left'; c.lineWidth = 9; c.strokeStyle = EDGE; c.fillStyle = '#fff';
    const x = s ? CW - 30 : 30;
    c.strokeText(CHAR[cid].name.toUpperCase(), x, CH - 70); c.fillText(CHAR[cid].name.toUpperCase(), x, CH - 70);
    c.font = '800 20px system-ui'; c.lineWidth = 5; c.fillStyle = '#ffd43b';
    c.strokeText(vs.names?.[s] || CHAR[cid].title, x, CH - 40); c.fillText(vs.names?.[s] || CHAR[cid].title, x, CH - 40);
  }
  const sc = 1 + Math.max(0, 1 - (vs.t || 0) / 12) * 2;
  c.translate(CW / 2, CH / 2); c.scale(sc, sc); c.rotate(-0.08);
  c.font = 'italic 900 130px system-ui'; c.textAlign = 'center'; c.lineWidth = 14; c.strokeStyle = EDGE; c.strokeText('VS', 0, 45);
  const g = c.createLinearGradient(0, -60, 0, 50); g.addColorStop(0, '#fff6a8'); g.addColorStop(1, '#ffb000'); c.fillStyle = g; c.fillText('VS', 0, 45);
  c.restore();
  if (vs.stageName) { c.font = '800 18px system-ui'; c.textAlign = 'center'; c.fillStyle = '#fff'; c.fillText(`Sàn đấu: ${vs.stageName}`, CW / 2, 40); }
}

// chân dung toàn thân cho màn chọn nhân vật
export function portrait(canvas, cid, pose = 'idle', tick = 0) {
  const c = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  c.clearRect(0, 0, w, h);
  c.save();
  const sc = h / 230;
  c.scale(sc, sc);
  const f = { c: cid, side: 0, x: (w / 2 / sc) * U, y: 0, face: 1, st: pose === 'win' ? 'win' : 'idle', t: 0, vy: 0, stun: 0, cb: 0 };
  c.translate(0, -(GY - 210));
  drawFighter(c, f, pose === 'win' ? { ...POSES.win, aN: [172 + Math.sin(tick / 6) * 8, 30] } : poseOf(f, null, tick), { tick });
  c.restore();
}

function aura(c, f, col, tick) {
  const x = f.x / U, y = GY - f.y / U - 75;
  for (let i = 0; i < 3; i++) { c.strokeStyle = col; c.globalAlpha = 0.35 - i * 0.1; c.lineWidth = 10; c.beginPath(); c.ellipse(x, y, 52 + i * 10 + Math.sin(tick / 2) * 4, 95 + i * 10, 0, 0, 7); c.stroke(); }
  c.globalAlpha = 1;
}
function beam(c, f, m, tick, col) {
  const sc = CHAR[f.c].size / 100;
  const x0 = f.x / U + f.face * 50 * sc, y = GY - f.y / U - 100 * sc;
  const len = Math.min(640, (f.t - m.s) * 40) * f.face;
  const h = 46 + Math.sin(tick) * 6;
  const g = c.createLinearGradient(0, y - h / 2, 0, y + h / 2);
  g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.3, col); g.addColorStop(0.5, '#ffffff'); g.addColorStop(0.7, col); g.addColorStop(1, 'rgba(255,255,255,0)');
  c.fillStyle = g; c.fillRect(Math.min(x0, x0 + len), y - h / 2, Math.abs(len), h);
  circle(c, x0, y, 34 + Math.sin(tick * 1.3) * 5, '#ffffff', 0);
  c.globalAlpha = 0.6; circle(c, x0, y, 46, col, 0); c.globalAlpha = 1;
}
function spark(c, x, y, a, big, col) {
  const n = big ? 12 : 8, r = (big ? 16 : 10) + a * (big ? 5 : 3.5);
  c.save(); c.translate(x, y); c.rotate(a * 0.05);
  c.globalAlpha = Math.max(0, 1 - a / 18);
  c.fillStyle = col || (big ? '#ffd43b' : '#fff3c4'); c.strokeStyle = EDGE; c.lineWidth = 2.5;
  c.beginPath();
  for (let k = 0; k < n * 2; k++) { const rr = k % 2 ? r * 0.35 : r; const ang = (k / (n * 2)) * Math.PI * 2; c.lineTo(Math.cos(ang) * rr, Math.sin(ang) * rr); }
  c.closePath(); c.fill(); c.stroke();
  if (big && a < 6) { c.fillStyle = '#fff'; c.beginPath(); c.arc(0, 0, r * 0.3, 0, 7); c.fill(); }
  c.restore();
}
