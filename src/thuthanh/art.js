// Hình vẽ Thủ Thành Làng (vẽ bằng canvas, có viền đậm, chuyển động): quái, vũ khí, cảnh vật, nền bản đồ.
import { MW, MH, MAPS, THEMES, TOWERS, pathCells, PCOL } from './data.js';
import { rr, label } from '../rt/common.js';

export const CS = 48;
const OUT = '#1d1648';
const ell = (c, x, y, rx, ry, fill, stroke = OUT, lw = 2.2) => { c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); } };
const circ = (c, x, y, r, fill, stroke = OUT, lw = 2.2) => ell(c, x, y, r, r, fill, stroke, lw);
const poly = (c, pts, fill, stroke = OUT, lw = 2.2) => { c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.closePath(); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); } };
const line = (c, pts, col = OUT, lw = 2.2) => { c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.strokeStyle = col; c.lineWidth = lw; c.lineCap = 'round'; c.stroke(); };
const legs = (c, xs, y, len, t, col, w = 3) => xs.forEach((x, i) => { const a = Math.sin(t / 3 + i * 1.7) * 3; line(c, [[x, y], [x + a, y + len]], OUT, w + 2); line(c, [[x, y], [x + a, y + len]], col, w); });

// ---------- quái (thiết kế trong khung 40 đơn vị, quay mặt sang phải) ----------
const MON = {
  chuot(c, t) {
    line(c, [[-14, 2], [-22, -2], [-27, -9]], '#e58fa0', 2.6);
    legs(c, [-8, -3, 4, 8], 7, 5, t, '#7b7d8a', 2);
    ell(c, 0, 2, 15, 9, '#8d8f9c');
    ell(c, -1, 5, 10, 4, '#b8bac4', null);
    circ(c, 13, -2, 8, '#8d8f9c');
    circ(c, 9, -9, 4.5, '#8d8f9c'); circ(c, 9, -9, 2.2, '#f2a7b7', null);
    circ(c, 16, -4, 1.8, OUT, null); circ(c, 16.6, -4.6, 0.6, '#fff', null);
    circ(c, 21, -1, 2, '#f27c95', OUT, 1.5);
    line(c, [[19, 1], [25, 3]], OUT, 0.8); line(c, [[19, 0], [25, -1]], OUT, 0.8);
  },
  heo(c, t) {
    line(c, [[-16, -3], [-20, -7], [-18, -10]], '#5a3520', 2);
    legs(c, [-10, -4, 5, 10], 8, 6, t, '#5a3520', 3.5);
    ell(c, 0, 0, 17, 11, '#7a4a2b');
    for (let i = -10; i <= 8; i += 4) poly(c, [[i, -10], [i + 2, -15], [i + 4, -10]], '#3d2414', null);
    ell(c, 15, 0, 9, 8, '#7a4a2b');
    poly(c, [[10, -6], [13, -14], [16, -6]], '#6a3e22');
    ell(c, 23, 2, 4, 3.6, '#f2a7b7');
    circ(c, 22, 1.5, 0.8, OUT, null); circ(c, 24.3, 1.5, 0.8, OUT, null);
    poly(c, [[19, 5], [22, 4], [20, 9]], '#fffbe8', OUT, 1.2);
    circ(c, 17, -3, 1.7, OUT, null);
  },
  trau(c, t) {
    legs(c, [-13, -6, 6, 13], 9, 7, t, '#3a3e4f', 4.5);
    line(c, [[-20, -2], [-25, 6]], OUT, 2.5);
    ell(c, 0, -1, 20, 12, '#4a4f63');
    ell(c, -2, 3, 13, 5, '#5c6278', null);
    ell(c, 18, -2, 9, 8.5, '#4a4f63');
    c.lineCap = 'round';
    // sừng cong: chiếc phía sau tối hơn, chiếc phía trước sáng
    for (const [ox, col] of [[-3, '#c9bfa5'], [2, '#efe6cf']]) { const P = [[15 + ox, -8], [10 + ox, -14], [13 + ox, -20]]; c.beginPath(); c.moveTo(...P[0]); c.quadraticCurveTo(...P[1], ...P[2]); c.strokeStyle = OUT; c.lineWidth = 5.5; c.stroke(); c.strokeStyle = col; c.lineWidth = 3.4; c.stroke(); }
    ell(c, 24, 1, 4.5, 4, '#6b7088');
    circ(c, 20, -4, 2.2, '#ff3b4e', OUT, 1.2);
    if (Math.sin(t / 9) > 0.7) { c.globalAlpha = 0.7; circ(c, 30, -1, 2.5, '#fff', null); circ(c, 33, -3, 1.6, '#fff', null); c.globalAlpha = 1; }
  },
  qua(c, t) {
    const fl = Math.sin(t / 2.6);
    poly(c, [[-10, 0], [-19, -4], [-18, 4]], '#23232e');
    poly(c, [[-4, -3], [-10 - fl * 2, -14 - fl * 8], [6, -4]], '#2f2f3d');
    ell(c, 0, 0, 11, 7.5, '#23232e');
    circ(c, 9, -4, 6.2, '#23232e');
    poly(c, [[13, -6], [21, -3.5], [13, -1.5]], '#f2b632', OUT, 1.5);
    circ(c, 10.5, -5.5, 1.8, '#fff', null); circ(c, 11, -5.5, 0.9, OUT, null);
    poly(c, [[-2, 1], [-8 + fl * 2, 10 + fl * 4], [6, 2]], '#2f2f3d');
  },
  rua(c, t) {
    legs(c, [-10, -3, 5, 11], 4, 5, t * 0.6, '#9cc85a', 4);
    circ(c, 18, 1, 5.5, '#9cc85a');
    circ(c, 20, -0.5, 1.3, OUT, null);
    c.beginPath(); c.ellipse(0, 0, 17, 13, 0, Math.PI, 0); c.lineTo(17, 3); c.lineTo(-17, 3); c.closePath(); c.fillStyle = '#3e8e41'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 2.2; c.stroke();
    c.strokeStyle = '#7cc46a'; c.lineWidth = 1.6;
    for (const [x, y] of [[-8, -4], [0, -8], [8, -4], [0, -1]]) { c.beginPath(); for (let k = 0; k < 6; k++) { const a = (k / 6) * Math.PI * 2; c[k ? 'lineTo' : 'moveTo'](x + Math.cos(a) * 4, y + Math.sin(a) * 3); } c.closePath(); c.stroke(); }
    ell(c, 0, 3, 18, 2.6, '#c9a25a');
  },
  ong(c, t) {
    const fl = Math.sin(t * 1.3);
    c.globalAlpha = 0.65; ell(c, -1, -9 - fl * 2, 6, 3.5, '#e7f6ff', OUT, 1.2); ell(c, 4, -8 + fl * 2, 5, 3, '#e7f6ff', OUT, 1.2); c.globalAlpha = 1;
    poly(c, [[-9, 0], [-15, 1], [-9, 3]], OUT, null);
    c.save(); ell(c, 0, 0, 9, 6, '#ffc93d'); c.clip(); c.fillStyle = OUT; for (const x of [-5, 0, 5]) c.fillRect(x - 1.3, -7, 2.6, 14); c.restore();
    ell(c, 0, 0, 9, 6, null);
    circ(c, 9, -1, 4.2, '#2a2a36');
    circ(c, 10.5, -2, 1.3, '#fff', null);
  },
  chan(c, t) {
    const sw = Math.sin(t / 8);
    legs(c, [-6, 6], 10, 8, t * 0.7, '#4d7a32', 6);
    rr(c, -14, -14, 28, 26, 10); c.fillStyle = '#5f8f3e'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 2.4; c.stroke();
    poly(c, [[-14, 4], [14, 4], [12, 13], [-12, 13]], '#8b5a2b');
    circ(c, 2, -20, 10, '#6fa548');
    for (const s of [-1, 1]) poly(c, [[2 + s * 6, -27], [2 + s * 11, -36], [2 + s * 3, -29]], '#f2e6c8');
    circ(c, -2, -22, 2.3, '#ff3b4e', OUT, 1.2); circ(c, 6, -22, 2.3, '#ff3b4e', OUT, 1.2);
    poly(c, [[-3, -15], [7, -15], [6, -12], [-2, -12]], '#3d1a12', OUT, 1.2);
    poly(c, [[-1, -15], [0.5, -12.5], [2, -15]], '#fff', null); poly(c, [[3, -15], [4.5, -12.5], [6, -15]], '#fff', null);
    c.save(); c.translate(13, -6); c.rotate(-0.6 + sw * 0.5);
    line(c, [[0, 0], [12, -14]], OUT, 6); line(c, [[0, 0], [12, -14]], '#6fa548', 4);
    c.translate(12, -14); c.rotate(-0.4);
    rr(c, -3, -18, 9, 20, 4); c.fillStyle = '#7a4a2b'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 2; c.stroke();
    for (const y of [-14, -8]) poly(c, [[6, y], [10, y + 2], [6, y + 4]], '#ddd', OUT, 1);
    c.restore();
  },
  thuong(c, t) {
    for (let k = 7; k >= 1; k--) { const x = -k * 6, y = Math.sin(t / 6 - k * 0.9) * 4; circ(c, x, y, 8.5 - k * 0.7, k % 2 ? '#2a9d8f' : '#34b3a4'); circ(c, x, y + 2.5, (8.5 - k * 0.7) * 0.45, '#bff0e6', null); }
    poly(c, [[-4, -8], [0, -17], [4, -8]], '#f2b632');
    ell(c, 6, 0, 12, 9, '#2a9d8f');
    poly(c, [[2, -7], [6, -15], [10, -7]], '#f2b632');
    ell(c, 15, 2, 6, 4.5, '#34b3a4');
    circ(c, 9, -3, 3, '#ffe066', OUT, 1.4); circ(c, 9.6, -3, 1.3, OUT, null);
    line(c, [[18, 4], [26, 9], [30, 6]], '#ffe066', 1.4); line(c, [[18, 0], [27, -4], [31, -1]], '#ffe066', 1.4);
  },
};
export function drawEnemy(c, type, x, y, px, t, face, flags = 0, fly = false) {
  c.save();
  c.translate(x, y);
  // bóng
  c.fillStyle = 'rgba(0,0,0,.22)'; c.beginPath(); c.ellipse(0, px * 0.36, px * 0.42, px * 0.13, 0, 0, 7); c.fill();
  if (flags & 1) { c.fillStyle = 'rgba(110,75,40,.6)'; c.beginPath(); c.ellipse(0, px * 0.34, px * 0.55, px * 0.17, 0, 0, 7); c.fill(); }
  const k = px / 40;
  c.translate(0, fly ? -px * 0.3 + Math.sin(t / 5) * 3 : -px * 0.05);
  c.scale(face * k, k);
  const tt = flags & 12 ? 0 : t; // choáng/đóng băng thì đứng im
  MON[type]?.(c, tt);
  c.restore();
  // hiệu ứng trên người
  const top = y - px * (fly ? 0.75 : 0.5);
  if (flags & 8) { c.save(); c.globalAlpha = 0.5; c.fillStyle = '#bfefff'; rr(c, x - px * 0.5, y - px * (fly ? 0.75 : 0.45), px, px * 0.75, 8); c.fill(); c.globalAlpha = 1; c.strokeStyle = '#ffffff'; c.lineWidth = 2; c.stroke(); c.restore(); }
  if (flags & 2) for (let i = 0; i < 3; i++) { const fx = x - px * 0.25 + i * px * 0.25, h = 6 + Math.sin(t / 2 + i * 2) * 3; poly(c, [[fx - 3, top + 4], [fx, top - h], [fx + 3, top + 4]], i % 2 ? '#ffb020' : '#ff5a1f', null); }
  if (flags & 4) for (let i = 0; i < 3; i++) { const a = t / 6 + i * 2.1; c.fillStyle = '#ffd43b'; c.font = '10px system-ui'; c.textAlign = 'center'; c.fillText('★', x + Math.cos(a) * px * 0.35, top - 4 + Math.sin(a) * 3); }
}

// ---------- vũ khí ----------
const BASE = { cung: '#b07a3c', sung: '#7b8494', da: '#a0855e', daibac: '#8a8a96', bun: null, bang: '#9fd6f2', phao: '#5e9e3a', dien: '#4a4f63', laze: '#d9d3f2' };
export function drawTower(c, kind, cx, cy, lv, own, ang = -Math.PI / 2, t = 0, fire = 0) {
  c.save(); c.translate(cx, cy);
  if (lv >= 3) { c.globalAlpha = 0.35 + Math.sin(t / 10) * 0.1; circ(c, 0, 0, 23, null, '#ffd43b', 3); c.globalAlpha = 1; }
  if (kind === 'bun') {
    ell(c, 0, 3, 21, 15, '#6e4b2b', PCOL[own] || '#fff', 3);
    ell(c, 0, 2, 15, 9.5, lv >= 1 ? '#5c3d22' : '#8a6239', null);
    for (let i = 0; i < 3 + lv; i++) { const a = t / 30 + i * 2.2, r = 5 + ((t / 3 + i * 7) % 9); c.globalAlpha = 1 - r / 14; circ(c, Math.cos(a) * 7, 2 + Math.sin(a) * 4, r * 0.35, null, 'rgba(255,255,255,.7)', 1.5); c.globalAlpha = 1; }
    if (lv >= 2) for (let i = 0; i < 3; i++) { const a = t / 20 + i * 2.1; line(c, [[Math.cos(a) * 9, 3 + Math.sin(a) * 5], [Math.cos(a) * 9 + 3, 3 + Math.sin(a) * 5 + 2]], '#2b1a0e', 3); }
  } else {
    rr(c, -19, -16, 38, 35, 8); c.fillStyle = OUT; c.fill();
    rr(c, -17, -14, 34, 31, 7); c.fillStyle = BASE[kind]; c.fill();
    c.fillStyle = 'rgba(255,255,255,.18)'; c.fillRect(-17, -14, 34, 6);
    c.fillStyle = PCOL[own] || '#fff'; c.fillRect(-17, 12, 34, 5);
    if (lv >= 2) { c.strokeStyle = '#ffd43b'; c.lineWidth = 2; rr(c, -17, -14, 34, 31, 7); c.stroke(); }
    const rot = (fn) => { c.save(); c.rotate(ang); fn(); c.restore(); };
    if (kind === 'cung') {
      poly(c, [[-12, -6], [0, -16], [12, -6]], '#c0392b');
      rot(() => { c.beginPath(); c.arc(4, 0, 9, -1.3, 1.3); c.strokeStyle = OUT; c.lineWidth = 4.5; c.stroke(); c.strokeStyle = '#8b5a2b'; c.lineWidth = 2.5; c.stroke(); line(c, [[6.4, -8.8], [fire ? 0 : 2, 0], [6.4, 8.8]], '#fff', 1); line(c, [[0, 0], [14, 0]], '#5a3b1f', 2); });
    } else if (kind === 'sung') {
      circ(c, 0, 1, 10, '#5a6170');
      rot(() => { for (const y of [-3.5, 3.5]) { rr(c, 2, y - 2.2, 17, 4.4, 2); c.fillStyle = '#2f3440'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.5; c.stroke(); } if (fire) { poly(c, [[19, -6], [27, 0], [19, 6]], '#ffd43b', null); } });
      circ(c, 0, 1, 5, '#9aa3b2');
    } else if (kind === 'da') {
      rr(c, -12, 2, 24, 8, 3); c.fillStyle = '#7a4a2b'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.8; c.stroke();
      const arm = fire ? -0.2 : -1.1;
      c.save(); c.rotate(arm); line(c, [[0, 0], [0, -18]], OUT, 5); line(c, [[0, 0], [0, -18]], '#a0703c', 3); ell(c, 0, -19, 5, 3.5, '#5a3b1f'); if (!fire) circ(c, 0, -21, 3.2, '#8a8a96'); c.restore();
      circ(c, 0, 0, 3, '#3d2414');
    } else if (kind === 'daibac') {
      circ(c, -6, 9, 5, '#5a3b1f'); circ(c, 6, 9, 5, '#5a3b1f');
      rot(() => { rr(c, -4, -6, 26, 12, 5); c.fillStyle = '#2a2a33'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 2; c.stroke(); c.fillStyle = '#555'; c.fillRect(18, -6, 4, 12); if (fire) { c.globalAlpha = 0.7; circ(c, 28, 0, 7, '#ddd', null); c.globalAlpha = 1; } });
      circ(c, 0, 0, 6, '#3c3c48');
    } else if (kind === 'bang') {
      rot(() => { rr(c, 4, -3, 14, 6, 2); c.fillStyle = '#5bb7e6'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.5; c.stroke(); });
      const g = 0.6 + Math.sin(t / 8) * 0.25;
      c.globalAlpha = g; circ(c, 0, -4, 10, '#e7f8ff', null); c.globalAlpha = 1;
      poly(c, [[0, -16], [8, -5], [0, 6], [-8, -5]], '#bfefff');
      line(c, [[0, -16], [0, 6]], '#ffffff', 1.2);
    } else if (kind === 'phao') {
      const n = 3 + Math.min(2, lv);
      for (let i = 0; i < n; i++) { const x = -10 + (i * 20) / (n - 1); rr(c, x - 3.5, -14 + (i % 2) * 3, 7, 20, 3); c.fillStyle = '#7fbf4a'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.6; c.stroke(); c.fillStyle = '#e63946'; c.fillRect(x - 3.5, -14 + (i % 2) * 3, 7, 4); }
      if (fire) for (let i = 0; i < 6; i++) { const a = i + t; c.fillStyle = '#ffd43b'; c.fillRect(Math.cos(a) * 12, -16 + Math.sin(a) * 6, 3, 3); }
    } else if (kind === 'dien') {
      line(c, [[0, 12], [0, -10]], OUT, 6); line(c, [[0, 12], [0, -10]], '#8b5a2b', 4);
      for (let i = 0; i < 3; i++) ell(c, 0, -2 - i * 4, 7, 2.2, '#d98a3a', OUT, 1.4);
      const gl = fire ? 1 : 0.5 + Math.sin(t / 5) * 0.2;
      c.globalAlpha = gl; circ(c, 0, -15, 9, '#bfe3ff', null); c.globalAlpha = 1;
      circ(c, 0, -15, 5, '#7fd0ff');
      if (Math.sin(t / 3) > 0.6 || fire) line(c, [[-3, -18], [-9, -22], [-6, -24], [-12, -28]], '#ffffff', 1.5);
    } else if (kind === 'laze') {
      poly(c, [[-9, 10], [-6, -8], [6, -8], [9, 10]], '#b9b0e8');
      rot(() => { rr(c, 0, -3, 12, 6, 3); c.fillStyle = '#7048e8'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.5; c.stroke(); });
      const g = fire ? 1 : 0.55 + Math.sin(t / 6) * 0.2;
      c.globalAlpha = g; circ(c, 0, -10, 8, '#ff9ad5', null); c.globalAlpha = 1;
      circ(c, 0, -10, 4.5, '#ff4fa3');
    }
  }
  for (let i = 0; i < 4; i++) { const x = -10.5 + i * 7; poly(c, [[x, -21], [x + 1.6, -18.2], [x + 4.6, -18], [x + 2.3, -16], [x + 3, -13], [x, -14.6], [x - 3, -13], [x - 2.3, -16], [x - 4.6, -18], [x - 1.6, -18.2]], i <= lv ? '#ffd43b' : '#ffffff55', OUT, 1); }
  c.restore();
}
// ảnh nhỏ cho nút cửa hàng
const icoCache = {};
export function towerIcon(kind, lv = 0) {
  const k = kind + lv;
  if (icoCache[k]) return icoCache[k];
  const cv = document.createElement('canvas'); cv.width = 56; cv.height = 56;
  const c = cv.getContext('2d');
  drawTower(c, kind, 28, 30, lv, -1, -0.5, 0, 0);
  return (icoCache[k] = cv.toDataURL());
}

// ---------- cảnh vật ----------
function deco(c, kind, x, y) {
  const cx = (x + 0.5) * CS, cy = (y + 0.5) * CS;
  c.save(); c.translate(cx, cy);
  c.fillStyle = 'rgba(0,0,0,.18)'; c.beginPath(); c.ellipse(0, 14, 18, 6, 0, 0, 7); c.fill();
  if (kind === 'tree') { rr(c, -3, 2, 6, 14, 2); c.fillStyle = '#7a4a2b'; c.fill(); circ(c, 0, -6, 15, '#3f9a3a'); circ(c, -6, -10, 7, '#56b34d', null); }
  else if (kind === 'house' || kind === 'hut') { rr(c, -15, -4, 30, 20, 3); c.fillStyle = '#f2d39b'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 2; c.stroke(); poly(c, [[-20, -2], [0, -20], [20, -2]], kind === 'hut' ? '#c9a25a' : '#c0583e'); rr(c, -4, 4, 8, 12, 2); c.fillStyle = '#7a4a2b'; c.fill(); }
  else if (kind === 'palm') { line(c, [[0, 16], [3, 0], [0, -12]], '#8b5a2b', 4); for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + (i - 2) * 0.7; poly(c, [[0, -12], [Math.cos(a - 0.2) * 18, -12 + Math.sin(a - 0.2) * 12 + 6], [Math.cos(a) * 20, -12 + Math.sin(a) * 14 + 8]], '#3f9a3a', OUT, 1.4); } circ(c, -2, -10, 2.5, '#7a4a2b', null); }
  else if (kind === 'umbrella') { line(c, [[0, 14], [0, -8]], OUT, 2); c.beginPath(); c.arc(0, -6, 16, Math.PI, 0); c.closePath(); c.fillStyle = '#ff6b6b'; c.fill(); c.strokeStyle = OUT; c.lineWidth = 2; c.stroke(); c.fillStyle = '#fff'; c.beginPath(); c.moveTo(0, -6); c.arc(0, -6, 16, Math.PI * 1.25, Math.PI * 1.5); c.fill(); }
  else if (kind === 'boat') { poly(c, [[-18, 2], [18, 2], [12, 12], [-12, 12]], '#a0703c'); line(c, [[0, 2], [0, -16]], OUT, 2); poly(c, [[1, -16], [14, -2], [1, -2]], '#fff8e1'); }
  else if (kind === 'bamboo') { for (const [bx, h, col] of [[-8, 34, '#7fbf4a'], [0, 40, '#6aaa3a'], [8, 30, '#8fcc55']]) { rr(c, bx - 2.5, 14 - h, 5, h, 2); c.fillStyle = col; c.fill(); c.strokeStyle = OUT; c.lineWidth = 1.4; c.stroke(); for (let k = 1; k < 4; k++) line(c, [[bx - 2.5, 14 - (h * k) / 4], [bx + 2.5, 14 - (h * k) / 4]], OUT, 1); poly(c, [[bx, 14 - h], [bx + 9, 14 - h - 3], [bx + 2, 14 - h + 3]], '#4f9a3a', null); } }
  else if (kind === 'rock') { poly(c, [[-16, 12], [-12, -4], [-2, -12], [10, -8], [16, 4], [12, 12]], '#8f8f9c'); poly(c, [[-8, -2], [-2, -8], [4, -6]], '#b3b3bd', null); }
  c.restore();
}
export function background(mapKey) {
  const map = MAPS[mapKey], T = THEMES[map.theme] || THEMES.grass;
  const cv = document.createElement('canvas'); cv.width = MW * CS; cv.height = MH * CS;
  const c = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  const cells = pathCells(map);
  for (let y = 0; y < MH; y++) for (let x = 0; x < MW; x++) {
    c.fillStyle = T.g[(x + y) % 2]; c.fillRect(x * CS, y * CS, CS, CS);
    const h = (x * 73 + y * 151) % 17;
    if (map.theme === 'rice') { c.strokeStyle = 'rgba(80,140,200,.25)'; c.lineWidth = 2; c.beginPath(); c.moveTo(x * CS, y * CS + 40); c.lineTo(x * CS + CS, y * CS + 40); c.stroke(); c.fillStyle = T.tuft; for (let i = 0; i < 4; i++) c.fillRect(x * CS + 6 + i * 11, y * CS + 14 + (i % 2) * 12, 2, 8); }
    else if (map.theme === 'tea') { c.fillStyle = T.tuft; for (let i = 0; i < 3; i++) { c.beginPath(); c.ellipse(x * CS + 8 + i * 16, y * CS + 26, 8, 6, 0, 0, 7); c.fill(); } }
    else if (map.theme === 'sand') { if (h < 5) { c.fillStyle = T.tuft; c.fillRect(x * CS + 10 + h * 6, y * CS + 12 + h * 4, 3, 2); } if (h === 9) { c.font = '14px system-ui'; c.fillText('🐚', x * CS + 26, y * CS + 34); } }
    else { if (h < 3) { c.fillStyle = T.tuft; c.fillRect(x * CS + 10 + h * 7, y * CS + 12 + h * 5, 4, 8); c.fillRect(x * CS + 14 + h * 7, y * CS + 8 + h * 5, 4, 12); } if (h === 5) { c.fillStyle = map.theme === 'rock' ? '#c8c8d0' : '#fff6a8'; c.beginPath(); c.arc(x * CS + 30, y * CS + 30, 3, 0, 7); c.fill(); } }
  }
  for (const [wx, wy, ww, wh] of map.water) {
    const sea = map.theme === 'sand';
    c.fillStyle = sea ? '#3fa7e0' : '#4aa3d8'; rr(c, wx * CS + 3, wy * CS + 3, ww * CS - 6, wh * CS - 6, 16); c.fill();
    c.strokeStyle = sea ? '#fff' : '#6fbde8'; c.lineWidth = 3; rr(c, wx * CS + 3, wy * CS + 3, ww * CS - 6, wh * CS - 6, 16); c.stroke();
    c.fillStyle = '#7fc8ee'; for (let i = 0; i < ww * wh; i++) c.fillRect(wx * CS + 12 + (i * 37) % Math.max(1, ww * CS - 30), wy * CS + 14 + (i * 23) % Math.max(1, wh * CS - 26), 14, 3);
    if (!sea) { c.font = '18px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('🪷', wx * CS + 22, wy * CS + 22); }
  }
  c.lineCap = 'round'; c.lineJoin = 'round';
  for (const [w, col] of [[CS * 0.92, T.road[0]], [CS * 0.76, T.road[1]]]) for (const p of map.paths) { c.strokeStyle = col; c.lineWidth = w; c.beginPath(); p.forEach(([x, y], i) => (i ? c.lineTo((x + 0.5) * CS, (y + 0.5) * CS) : c.moveTo((x + 0.5) * CS, (y + 0.5) * CS))); c.stroke(); }
  c.fillStyle = 'rgba(0,0,0,.08)';
  for (const k of cells) { const [x, y] = k.split(',').map(Number); for (let i = 0; i < 3; i++) c.fillRect(x * CS + 8 + ((x * 7 + y * 13 + i * 17) % 30), y * CS + 10 + ((x * 11 + i * 19) % 28), 3, 3); }
  for (const [x, y, k] of map.deco) deco(c, k, x, y);
  // lối vào quái
  for (const p of map.paths) {
    const [x0, y0] = p[0], [x1, y1] = p[1];
    const a = Math.atan2(y1 - y0, x1 - x0);
    const ax = Math.max(14, Math.min(W - 14, (x0 + 0.5) * CS + Math.cos(a) * CS * 0.6)), ay = Math.max(14, Math.min(H - 14, (y0 + 0.5) * CS + Math.sin(a) * CS * 0.6));
    c.save(); c.translate(ax, ay); c.rotate(a); poly(c, [[-9, -9], [9, 0], [-9, 9], [-4, 0]], '#ff4d5e', OUT, 2); c.restore();
  }
  // cổng làng
  const [gx, gy] = map.gate, cx = Math.max(48, Math.min(W - 48, (gx + 0.5) * CS)), cy = (gy + 0.5) * CS;
  c.fillStyle = '#8b4a2b'; c.fillRect(cx - 34, cy - 40, 10, 70); c.fillRect(cx + 24, cy - 40, 10, 70);
  c.strokeStyle = OUT; c.lineWidth = 2; c.strokeRect(cx - 34, cy - 40, 10, 70); c.strokeRect(cx + 24, cy - 40, 10, 70);
  poly(c, [[cx - 46, cy - 38], [cx - 30, cy - 54], [cx + 30, cy - 54], [cx + 46, cy - 38], [cx + 40, cy - 30], [cx - 40, cy - 30]], '#c0392b');
  rr(c, cx - 24, cy - 34, 48, 16, 4); c.fillStyle = '#ffd43b'; c.fill(); c.stroke();
  c.fillStyle = '#7a2e1d'; c.font = '900 11px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('LÀNG', cx, cy - 26);
  return cv;
}
export { TOWERS, label };
