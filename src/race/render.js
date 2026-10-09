// Vẽ "Đua Xe Đường Làng" kiểu nhìn từ sau xe, đường chạy thẳng vào phía trước (giả 3D như máy đua thùng).
import { U, ROAD_W, LANES, LANE_W, START_X, OBS, obstacles, obsL, MAX_GAP } from './sim.js';
import { CAR, VILLAGES, THEMES } from './cars.js';

export const CW = 960, CH = 540;
const EDGE = '#1d1648';
const HY = 175, CAMH = 150, F = 1100, NEAR = 440, FAR = 3400, BACK = 560; // tầm nhìn (px thế giới)
const RW = ROAD_W / U; // bề rộng đường px
const GATE_GAP = 3000;
const mk = (w, h) => (typeof OffscreenCanvas !== 'undefined' ? new OffscreenCanvas(w, h) : Object.assign(document.createElement('canvas'), { width: w, height: h }));
const hsh = (n) => { let x = Math.imul(n ^ 0x5bd1e995, 0x27d4eb2d); x ^= x >>> 15; return (x >>> 0) / 4294967296; };
function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
function circ(c, x, y, r, fill, lw = 3) { c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fillStyle = fill; c.fill(); if (lw) { c.lineWidth = lw; c.strokeStyle = EDGE; c.stroke(); } }
// đường cong (chỉ để nhìn, không ảnh hưởng luật)
const curve = (z) => 170 * Math.sin(z / 2600) + 70 * Math.sin(z / 1100 + 1);

export class FX {
  constructor() { this.list = []; this.seen = new Set(); this.shake = 0; this.banner = null; this.gate = -1; this.trail = []; }
  add(e, tick) {
    if (this.seen.has(e.key)) return false;
    this.seen.add(e.key);
    if (this.seen.size > 3000) this.seen = new Set([...this.seen].slice(-1500));
    const k = e.k;
    if (k === 'crash') { this.list.push({ k: 'boom', x: e.x, l: e.l, born: tick }); this.shake = 18; this.banner = { text: { cone: 'ĐÂM CỌC!', hay: 'ĐÂM ĐỐNG RƠM!', cart: 'ĐÂM XE BA GÁC!', buffalo: 'ĐÂM TRÂU!', rock: 'ĐÂM ĐÁ!' }[e.type] || 'TÔNG RỒI!', born: tick, hot: 1 }; }
    else if (k === 'bump') { this.list.push({ k: 'spark', x: e.x, l: e.l, born: tick, big: e.big }); this.shake = Math.max(this.shake, e.big ? 7 : 3); }
    else if (k === 'smash') this.list.push({ k: 'bits', x: e.x, l: e.l, born: tick, type: e.type });
    else if (k === 'round') this.banner = { text: `HIỆP ${e.n}`, born: tick };
    else if (k === 'count') this.banner = { text: String(e.n), born: tick, big: 1 };
    else if (k === 'go') this.banner = { text: 'CHẠY!', born: tick, hot: 1, big: 1 };
    else if (k === 'out') this.outBorn = tick;
    else if (k === 'behind') this.banner = { text: 'BỊ BỎ RƠI!', born: tick, hot: 1 };
    else if (k === 'ko' && e.why === 'finish') this.banner = { text: 'VỀ ĐÍCH!', born: tick, big: 1 };
    else if (k === 'nitro') this.list.push({ k: 'text', side: e.side, text: 'NITRO!', born: tick, col: '#4dabf7' });
    else if (k === 'ram') this.list.push({ k: 'text', side: e.side, text: 'HÚC!', born: tick, col: '#ff6b6b' });
    else if (k === 'spin') this.list.push({ k: 'text', side: e.side, text: 'TRƠN!', born: tick, col: '#adb5bd' });
    else if (k === 'boost') this.list.push({ k: 'text', side: e.side, text: 'TĂNG TỐC!', born: tick, col: '#ffd43b' });
    return true;
  }
}



// ---------- máy quay ----------
function camera(S, fx, me) {
  let z;
  if (me >= 0) z = S.c[me].x / U - BACK;
  else {
    // người xem: theo xe chậm hơn, nhưng nếu 1 xe đã bị loại thì theo xe còn chạy
    const live = S.c.filter((c) => c.st === 'go' || S.frame - c.outAt < 70);
    const L = live.length ? live : S.c;
    z = Math.min(...L.map((c) => c.x)) / U - BACK;
  }
  const target = me >= 0 ? S.c[me].l / U : (S.c[0].l + S.c[1].l) / 2 / U;
  const wantL = RW / 2 + (target - RW / 2) * 0.55;
  fx.camL = fx.camL === undefined ? wantL : fx.camL + (wantL - fx.camL) * 0.15;
  fx.camZ = z;
  return { z, l: fx.camL };
}
function proj(cam, z, l, h = 0) {
  const dz = z - cam.z;
  if (dz < 10) return null;
  const s = F / dz;
  return { x: CW / 2 + (l - cam.l + curve(z) - curve(cam.z + BACK)) * s, y: HY + (CAMH - h) * s, s };
}

// ---------- bầu trời, đồi xa ----------
const SKY = [['#5ec8ff', '#d0f0ff'], ['#ff9a8b', '#ffd6a5'], ['#3b5bdb', '#a5d8ff']];
function sky(c, cam, theme, tick) {
  const g = c.createLinearGradient(0, 0, 0, HY); g.addColorStop(0, SKY[theme][0]); g.addColorStop(1, SKY[theme][1]);
  c.fillStyle = g; c.fillRect(0, 0, CW, HY + 2);
  const sh = -(curve(cam.z + 1500) - curve(cam.z + BACK)) * 0.3 - cam.l * 0.3;
  if (theme === 1) circ(c, 700 + sh * 0.2, 110, 46, '#fff3c4', 0); else circ(c, 780 + sh * 0.2, 60, 26, '#fff8d6', 0);
  // mây
  c.fillStyle = 'rgba(255,255,255,.85)';
  for (let i = 0; i < 6; i++) { const x = (((i * 190 + sh * 0.5 - tick * 0.15) % 1200) + 1200) % 1200 - 120, y = 30 + (i * 37) % 70; c.beginPath(); c.arc(x, y, 16, 0, 7); c.arc(x + 20, y - 8, 20, 0, 7); c.arc(x + 44, y, 15, 0, 7); c.fill(); }
  // dãy núi / đồi
  const ridge = (base, amp, col, k, par) => { c.fillStyle = col; c.beginPath(); c.moveTo(0, HY + 2); for (let x = 0; x <= CW; x += 16) c.lineTo(x, base - Math.abs(Math.sin((x - sh * par) / k)) * amp - Math.sin((x - sh * par) / 31) * 6); c.lineTo(CW, HY + 2); c.fill(); };
  if (theme === 2) { ridge(HY, 110, '#6a7fb8', 120, 0.4); ridge(HY, 60, '#3f5f8f', 70, 0.7); }
  else if (theme === 1) { c.fillStyle = '#4dabf7'; c.fillRect(0, HY - 26, CW, 28); c.strokeStyle = 'rgba(255,255,255,.6)'; c.lineWidth = 2; for (let i = 0; i < 14; i++) { const x = ((i * 83 + sh + tick * 0.4) % 1000 + 1000) % 1000 - 20; c.beginPath(); c.moveTo(x, HY - 14 + (i % 3) * 6); c.lineTo(x + 18, HY - 14 + (i % 3) * 6); c.stroke(); } }
  else { ridge(HY, 40, '#8fcf7a', 90, 0.4); ridge(HY, 22, '#5fae54', 50, 0.7); }
}
// ---------- mặt đất + đường ----------
const GRASS = [['#7bd148', '#6cc13f'], ['#f4d88a', '#ead07c'], ['#2f9e44', '#2b8a3e']];
function ground(c, cam, S, theme) {
  c.fillStyle = GRASS[theme][0]; c.fillRect(0, HY, CW, CH - HY);
  const step = 30;
  let prev = null;
  const zStart = Math.floor((cam.z + FAR) / step) * step;
  for (let z = zStart; z >= cam.z + NEAR - 80; z -= step) {
    const a = proj(cam, z, 0), b = proj(cam, z - step, 0);
    if (!a || !b) continue;
    const ar = proj(cam, z, RW), br = proj(cam, z - step, RW);
    const band = Math.floor(z / 150) % 2;
    // cỏ 2 bên
    c.fillStyle = GRASS[theme][band]; c.fillRect(0, a.y, CW, b.y - a.y + 1);
    // lề sọc đỏ trắng
    const rum = 16;
    c.fillStyle = Math.floor(z / 60) % 2 ? '#ff4d5e' : '#ffffff';
    quad(c, a.x - rum * a.s, a.y, b.x - rum * b.s, b.y, b.x, b.y, a.x, a.y);
    quad(c, ar.x, a.y, br.x, b.y, br.x + rum * br.s, b.y, ar.x + rum * ar.s, a.y);
    // mặt đường
    c.fillStyle = band ? '#5c5470' : '#56506a';
    quad(c, a.x, a.y, b.x, b.y, br.x, b.y, ar.x, a.y);
    // vạch làn
    if (Math.floor(z / 90) % 2 === 0) {
      c.fillStyle = 'rgba(255,255,255,.9)';
      for (let k = 1; k < LANES; k++) { const lx = (k * LANE_W) / U, w = 2.5; const p1 = proj(cam, z, lx - w), p2 = proj(cam, z, lx + w), p3 = proj(cam, z - step, lx + w), p4 = proj(cam, z - step, lx - w); quad(c, p1.x, p1.y, p4.x, p4.y, p3.x, p3.y, p2.x, p2.y); }
    }
    // vạch xuất phát / đích (ô cờ)
    for (const lineZ of [(START_X - 40 * U) / U, S.len ? (START_X + S.len) / U : -1]) {
      if (lineZ > 0 && z >= lineZ && z - step < lineZ + 24) {
        for (let k = 0; k < 10; k++) { c.fillStyle = (k + Math.floor(z / 12)) % 2 ? '#fff' : EDGE; const p1 = proj(cam, z, (k * RW) / 10), p2 = proj(cam, z, ((k + 1) * RW) / 10), p3 = proj(cam, z - step, ((k + 1) * RW) / 10), p4 = proj(cam, z - step, (k * RW) / 10); quad(c, p1.x, p1.y, p4.x, p4.y, p3.x, p3.y, p2.x, p2.y); }
      }
    }
    prev = b;
  }
  void prev;
}
function quad(c, x1, y1, x2, y2, x3, y3, x4, y4) { c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.lineTo(x3, y3); c.lineTo(x4, y4); c.closePath(); c.fill(); }

// ---------- vật thể (gốc toạ độ = điểm chạm đất, đơn vị px thế giới) ----------
export function carRear(c, id, { rider = '', tick = 0, lean = 0, boost = 0, brake = 0, crash = 0 } = {}) {
  const C = CAR[id], W = C.wid, col = C.color;
  c.save(); c.rotate(lean);
  c.fillStyle = 'rgba(0,0,0,.28)'; c.beginPath(); c.ellipse(0, 0, W * 0.75, 6, 0, 0, 7); c.fill();
  c.strokeStyle = EDGE; c.lineWidth = 3;
  if (boost) for (let k = 0; k < 2; k++) { c.fillStyle = k ? '#ffd43b' : '#ff6b00'; c.beginPath(); c.moveTo(-6 + k * 3, -18); c.lineTo(0, -18 + 26 + Math.random() * 18 - k * 8); c.lineTo(6 - k * 3, -18); c.fill(); }
  if (C.kind === 'lam' || C.kind === 'tractor') {
    const big = C.kind === 'tractor';
    for (const sx of [-1, 1]) { c.fillStyle = '#2a2350'; rr(c, sx * W / 2 - (big ? 9 : 6), big ? -34 : -18, big ? 18 : 12, big ? 34 : 18, 4); c.fill(); }
    c.fillStyle = col; rr(c, -W / 2 + 4, big ? -46 : -54, W - 8, big ? 26 : 40, 6); c.fill(); c.stroke();
    if (!big) { c.fillStyle = '#2f9e44'; rr(c, -W / 2 + 1, -62, W - 2, 10, 4); c.fill(); c.stroke(); c.fillStyle = '#ffd43b'; c.fillRect(-W / 2 + 8, -30, 8, 6); c.fillRect(W / 2 - 16, -30, 8, 6); }
    else { c.fillStyle = '#495057'; c.fillRect(6, -70, 6, 26); c.strokeRect(6, -70, 6, 26); c.fillStyle = `rgba(90,90,90,${0.5})`; c.beginPath(); c.arc(9 + Math.sin(tick / 4) * 3, -78 - (tick % 14), 6 + (tick % 14) / 3, 0, 7); c.fill(); }
    // người lái
    c.fillStyle = shade(col); rr(c, -11, big ? -70 : -86, 22, 22, 6); c.fill(); c.stroke();
    helmet(c, 0, big ? -80 : -96, rider);
  } else {
    c.fillStyle = '#2a2350'; rr(c, -5, -20, 10, 20, 4); c.fill();
    const bw = C.kind === 'scooter' ? W * 0.9 : W * 0.7;
    c.fillStyle = col; rr(c, -bw / 2, -34, bw, 18, C.kind === 'scooter' ? 9 : 5); c.fill(); c.stroke();
    c.fillStyle = brake ? '#ff2e2e' : '#ff8787'; rr(c, -5, -26, 10, 5, 2); c.fill();
    if (C.kind === 'ebike') { c.fillStyle = '#ced4da'; rr(c, -10, -44, 20, 10, 2); c.fill(); c.stroke(); }
    // người ngồi
    c.fillStyle = shade(col); rr(c, -13, -62, 26, 30, 8); c.fill(); c.stroke();
    c.strokeStyle = EDGE; c.lineWidth = 4; c.beginPath(); c.moveTo(-13, -54); c.lineTo(-W / 2 - 4, -46); c.moveTo(13, -54); c.lineTo(W / 2 + 4, -46); c.stroke();
    helmet(c, 0, -72, rider);
  }
  if (crash) { c.font = '22px system-ui'; c.textAlign = 'center'; c.fillText('💫', 0, -110 - Math.sin(tick / 4) * 4); }
  c.restore();
}
function shade(hex) { const n = parseInt(hex.slice(1), 16); return `rgb(${((n >> 16) & 255) * 0.75 | 0},${((n >> 8) & 255) * 0.75 | 0},${(n & 255) * 0.75 | 0})`; }
function helmet(c, x, y, rider) {
  circ(c, x, y, 13, '#ffffff', 3);
  c.fillStyle = '#1d1648'; c.fillRect(x - 13, y + 1, 26, 3);
  if (rider) { c.font = '15px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(rider, x, y - 2); c.textBaseline = 'alphabetic'; }
}
function obstacleArt(c, o, frame, tick) {
  c.strokeStyle = EDGE; c.lineWidth = 3;
  switch (o.type) {
    case 'cone': c.fillStyle = '#ff922b'; c.beginPath(); c.moveTo(-12, 0); c.lineTo(0, -30); c.lineTo(12, 0); c.closePath(); c.fill(); c.stroke(); c.fillStyle = '#fff'; c.fillRect(-6, -18, 12, 5); c.fillStyle = '#ff922b'; c.fillRect(-14, -3, 28, 4); break;
    case 'hay': circ(c, 0, -22, 22, '#f2c94c'); c.strokeStyle = '#c99a2e'; c.lineWidth = 2; for (const r of [8, 15]) { c.beginPath(); c.arc(0, -22, r, 0, 7); c.stroke(); } break;
    case 'cart': c.fillStyle = '#a0683d'; rr(c, -44, -38, 88, 28, 4); c.fill(); c.stroke(); for (const [x, col] of [[-26, '#69db7c'], [-8, '#ff6b6b'], [10, '#ffd43b'], [28, '#ff922b']]) circ(c, x, -44, 10, col, 2); for (const sx of [-1, 1]) circ(c, sx * 36, -10, 10, '#2a2350', 2.5); break;
    case 'buffalo': {
      const dir = (frame + o.ph) % 240 < 120 ? 1 : -1, step = Math.sin(tick / 4) * 4;
      c.save(); c.scale(dir, 1);
      c.fillStyle = '#5c636a'; for (const lx of [-24, -12, 14, 26]) { c.fillRect(lx - 3, -22, 7, 22 + (lx % 2 ? step : -step) * 0.3); }
      c.beginPath(); c.ellipse(0, -34, 36, 18, 0, 0, 7); c.fill(); c.stroke();
      circ(c, 38, -40, 12, '#6c757d');
      c.strokeStyle = '#f1f3f5'; c.lineWidth = 4; c.beginPath(); c.arc(32, -52, 12, Math.PI * 1.1, Math.PI * 1.9); c.stroke();
      c.fillStyle = EDGE; c.beginPath(); c.arc(42, -42, 2, 0, 7); c.fill();
      c.strokeStyle = EDGE; c.lineWidth = 3; c.beginPath(); c.moveTo(-36, -36); c.lineTo(-44, -24 + step); c.stroke();
      c.restore();
      break;
    }
    case 'rock': c.fillStyle = '#868e96'; c.beginPath(); c.moveTo(-22, 0); c.lineTo(-18, -24); c.lineTo(-2, -36); c.lineTo(16, -28); c.lineTo(22, 0); c.closePath(); c.fill(); c.stroke(); break;
    case 'oil': c.fillStyle = '#1d1648'; c.beginPath(); c.ellipse(0, -2, 30, 6, 0, 0, 7); c.fill(); c.fillStyle = 'rgba(180,140,255,.6)'; c.beginPath(); c.ellipse(-8, -3, 10, 2, 0, 0, 7); c.fill(); break;
    case 'mud': c.fillStyle = '#8a5a2b'; c.beginPath(); c.ellipse(0, -2, 46, 8, 0, 0, 7); c.fill(); break;
    case 'boost': c.fillStyle = '#ffd43b'; c.strokeStyle = EDGE; c.lineWidth = 2; for (const k of [0, 1]) { c.beginPath(); c.moveTo(-20, -2 - k * 6); c.lineTo(0, -8 - k * 6); c.lineTo(20, -2 - k * 6); c.lineTo(20, 1 - k * 6); c.lineTo(0, -5 - k * 6); c.lineTo(-20, 1 - k * 6); c.closePath(); c.fill(); c.stroke(); } break;
  }
}
function decorArt(c, kind, h) {
  c.strokeStyle = EDGE; c.lineWidth = 3;
  if (kind === 'tree') { c.fillStyle = '#8a5a2b'; c.fillRect(-5, -40, 10, 40); circ(c, 0, -62, 30, '#2f9e44'); circ(c, -10, -70, 12, '#69db7c', 0); }
  else if (kind === 'pine') { c.fillStyle = '#8a5a2b'; c.fillRect(-4, -20, 8, 20); c.fillStyle = '#1b5e20'; c.beginPath(); c.moveTo(-28, -20); c.lineTo(0, -100); c.lineTo(28, -20); c.closePath(); c.fill(); c.stroke(); }
  else if (kind === 'palm') { c.strokeStyle = '#8a5a2b'; c.lineWidth = 7; c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(8, -50, 2, -100); c.stroke(); c.fillStyle = '#2f9e44'; for (let k = 0; k < 6; k++) { const a = (k / 6) * Math.PI * 2; c.beginPath(); c.ellipse(2 + Math.cos(a) * 22, -100 + Math.sin(a) * 8, 26, 6, a, 0, 7); c.fill(); } }
  else if (kind === 'house') { const col = ['#ffb3c1', '#ffe08a', '#a5e3c5', '#b7c7ff'][Math.floor(h * 4)]; c.fillStyle = col; c.fillRect(-40, -54, 80, 54); c.strokeRect(-40, -54, 80, 54); c.fillStyle = '#c0583e'; c.beginPath(); c.moveTo(-50, -52); c.lineTo(0, -88); c.lineTo(50, -52); c.closePath(); c.fill(); c.stroke(); c.fillStyle = '#7a2e1d'; c.fillRect(-10, -30, 20, 30); c.fillStyle = '#fff1a8'; c.fillRect(-32, -42, 14, 12); c.fillRect(18, -42, 14, 12); }
  else if (kind === 'bamboo') { for (const x of [-14, -4, 8, 16]) { c.strokeStyle = '#5c940d'; c.lineWidth = 5; c.beginPath(); c.moveTo(x, 0); c.lineTo(x + 4, -110); c.stroke(); } c.fillStyle = '#82c91e'; for (let k = 0; k < 8; k++) { c.beginPath(); c.ellipse(-10 + (k % 4) * 9, -110 + k * 6, 14, 4, k, 0, 7); c.fill(); } }
  else if (kind === 'stack') { c.fillStyle = '#e9c46a'; c.beginPath(); c.moveTo(-18, 0); c.lineTo(0, -42); c.lineTo(18, 0); c.closePath(); c.fill(); c.stroke(); }
  else if (kind === 'umbrella') { c.fillStyle = '#ff6b6b'; c.beginPath(); c.arc(0, -50, 30, Math.PI, 0); c.fill(); c.stroke(); c.strokeStyle = '#8a5a2b'; c.beginPath(); c.moveTo(0, -50); c.lineTo(0, 0); c.stroke(); }
  else if (kind === 'rockside') { c.fillStyle = '#868e96'; c.beginPath(); c.ellipse(0, -16, 30, 18, 0, 0, 7); c.fill(); c.stroke(); }
}
const DECOR = [['tree', 'house', 'bamboo', 'stack', 'tree'], ['palm', 'palm', 'umbrella', 'house', 'palm'], ['pine', 'pine', 'rockside', 'house', 'pine']];

// ---------------- KHUNG HÌNH ----------------
let world = null, scan = null;
export function render(c, S, fx, tick, info = {}) {
  const pixel = info.pixel !== false, scale = pixel ? 0.5 : 1;
  if (!world || world.width !== CW * scale) world = mk(CW * scale, CH * scale);
  const w = world.getContext('2d');
  w.save(); w.setTransform(scale, 0, 0, scale, 0, 0);
  drawWorld(w, S, fx, tick, info);
  w.restore();
  c.save();
  let ox = 0, oy = 0;
  if (fx.shake > 0) { ox = (Math.random() - 0.5) * fx.shake; oy = (Math.random() - 0.5) * fx.shake; fx.shake *= 0.85; if (fx.shake < 0.5) fx.shake = 0; }
  c.imageSmoothingEnabled = !pixel; c.fillStyle = '#000'; c.fillRect(0, 0, CW, CH); c.drawImage(world, ox, oy, CW, CH); c.imageSmoothingEnabled = true;
  c.restore();
  hud(c, S, fx, tick, info);
  if (info.crt !== false) {
    if (!scan) { scan = mk(CW, CH); const s = scan.getContext('2d'); s.fillStyle = 'rgba(0,0,0,.14)'; for (let y = 0; y < CH; y += 3) s.fillRect(0, y, CW, 1); const v = s.createRadialGradient(CW / 2, CH / 2, CH * 0.45, CW / 2, CH / 2, CW * 0.65); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.4)'); s.fillStyle = v; s.fillRect(0, 0, CW, CH); }
    c.drawImage(scan, 0, 0);
  }
}
function drawWorld(c, S, fx, tick, info) {
  const theme = (info.theme ?? 0) % 3;
  let me = info.me ?? -1;
  // xe mình đã bị loại mà đối thủ còn chạy: một lúc sau máy quay chuyển sang theo đối thủ
  if (me >= 0 && S.c[me].st !== 'go' && S.c[1 - me].st === 'go' && S.frame - S.c[me].outAt > 70) me = 1 - me;
  const cam = camera(S, fx, me);
  sky(c, cam, theme, tick);
  ground(c, cam, S, theme);
  // gom mọi vật thể rồi vẽ từ xa tới gần
  const items = [];
  const z0 = cam.z + NEAR - 120, z1 = cam.z + FAR;
  for (const o of obstacles(S, z0 * U, z1 * U)) items.push({ z: o.x / U, l: obsL(o, S.frame) / U, draw: (cc) => obstacleArt(cc, o, S.frame, tick) });
  // cây cối, nhà bên đường
  const DS = 110;
  for (let k = Math.floor(z0 / DS); k <= Math.floor(z1 / DS); k++) {
    for (const side of [0, 1]) {
      const h = hsh(k * 2 + side + theme * 1000);
      if (h < 0.35) continue;
      const kind = DECOR[theme][Math.floor(hsh(k * 5 + side) * 5)];
      const l = side ? RW + 50 + h * 120 : -50 - h * 120;
      items.push({ z: k * DS + h * 40, l, draw: (cc) => decorArt(cc, kind, h) });
    }
  }
  // cổng làng
  for (let k = Math.max(1, Math.floor((z0 - START_X / U) / GATE_GAP)); k <= Math.floor((z1 - START_X / U) / GATE_GAP) + 1; k++) {
    const gz = START_X / U + k * GATE_GAP;
    if (S.len && gz >= (START_X + S.len) / U) break;
    if (gz < z0 || gz > z1) continue;
    items.push({ z: gz, gate: VILLAGES[(k - 1 + S.round * 3) % VILLAGES.length] });
  }
  // xe
  S.c.forEach((car, i) => items.push({ z: car.x / U, l: car.l / U, car, i }));
  items.sort((a, b) => b.z - a.z);
  for (const it of items) {
    if (it.gate) { gate(c, cam, it.z, it.gate); continue; }
    // xe đối thủ ở sát sau lưng camera thì không vẽ (sẽ to đùng che màn hình) — có mũi tên báo bên dưới
    if (it.car && me >= 0 && it.i !== me && it.z < cam.z + BACK * 0.85) continue;
    const p = proj(cam, it.z, it.l);
    if (!p || p.y < HY - 5 || p.x < -300 || p.x > CW + 300) continue;
    c.save(); c.translate(p.x, p.y); c.scale(p.s, p.s);
    if (it.car) {
      const car = it.car;
      let lean = Math.max(-0.3, Math.min(0.3, (car.lv + car.push) / 2500));
      if (car.spin) lean = Math.sin(tick / 2) * 0.6;
      if (car.st === 'crash') lean = 0.9 * (it.i ? -1 : 1);
      carRear(c, car.id, { rider: info.riders?.[it.i] || '', tick, lean, boost: car.boost > 0, brake: (car.prev & 2) && car.st === 'go', crash: car.st === 'crash' });
      if (car.ram > 0) { c.strokeStyle = 'rgba(255,80,80,.8)'; c.lineWidth = 4; for (let k = 0; k < 3; k++) { const d = car.push > 0 ? -1 : 1; c.beginPath(); c.moveTo(d * (24 + k * 8), -60 + k * 14); c.lineTo(d * (50 + k * 8), -60 + k * 14); c.stroke(); } }
      c.restore();
      // tên
      const nm = info.names?.[it.i] || (it.i ? 'P2' : 'P1');
      c.font = '800 14px system-ui'; c.textAlign = 'center'; c.lineWidth = 4; c.strokeStyle = EDGE; c.fillStyle = it.i ? '#74c0fc' : '#ff8787';
      const ty = p.y - (CAR[car.id].kind === 'lam' ? 138 : 108) * p.s;
      c.strokeText(nm, p.x, ty); c.fillText(nm, p.x, ty);
      continue;
    }
    it.draw(c);
    c.restore();
  }
  // tia lửa, chữ
  fx.list = fx.list.filter((e) => tick - e.born < (e.k === 'boom' ? 50 : 30));
  for (const e of fx.list) {
    const a = tick - e.born;
    if (e.k === 'spark' || e.k === 'boom' || e.k === 'bits') {
      const p = proj(cam, e.x / U, e.l / U, 30);
      if (!p) continue;
      const n = e.k === 'boom' ? 14 : 8, r = ((e.k === 'boom' ? 20 : 10) + a * (e.k === 'boom' ? 4 : 2.5)) * Math.min(2.5, p.s);
      c.save(); c.translate(p.x, p.y); c.globalAlpha = Math.max(0, 1 - a / (e.k === 'boom' ? 40 : 20));
      c.fillStyle = e.k === 'boom' ? '#ff922b' : e.k === 'bits' ? '#f2c94c' : '#ffd43b'; c.strokeStyle = EDGE; c.lineWidth = 2.5;
      c.beginPath(); for (let k = 0; k < n * 2; k++) { const r2 = k % 2 ? r * 0.4 : r, ang = (k / (n * 2)) * Math.PI * 2 + a * 0.05; c.lineTo(Math.cos(ang) * r2, Math.sin(ang) * r2); } c.closePath(); c.fill(); c.stroke();
      c.restore();
    } else if (e.k === 'text') {
      const car = S.c[e.side], p = proj(cam, car.x / U, car.l / U, 110);
      if (!p) continue;
      c.save(); c.globalAlpha = Math.max(0, 1 - a / 30); c.font = 'italic 900 22px system-ui'; c.textAlign = 'center'; c.lineWidth = 5; c.strokeStyle = EDGE; c.fillStyle = e.col;
      c.strokeText(e.text, p.x, p.y - a); c.fillText(e.text, p.x, p.y - a); c.restore();
    }
  }
  // tốc độ cao: vệt gió 2 bên
  const mine = me >= 0 ? S.c[me] : null;
  if (mine && (mine.boost > 0 || mine.v > 1150)) {
    c.strokeStyle = mine.boost ? 'rgba(255,212,59,.6)' : 'rgba(255,255,255,.35)'; c.lineWidth = 3;
    for (let k = 0; k < 10; k++) { const a = (k / 10) * Math.PI * 2 + tick * 0.3, r = 300 + ((tick * 30 + k * 70) % 260); c.beginPath(); c.moveTo(CW / 2 + Math.cos(a) * r, HY + 120 + Math.sin(a) * r * 0.55); c.lineTo(CW / 2 + Math.cos(a) * (r + 60), HY + 120 + Math.sin(a) * (r + 60) * 0.55); c.stroke(); }
  }
  // đối thủ ở phía sau màn hình
  if (mine) {
    const o = S.c[1 - me], gap = (mine.x - o.x) / U;
    if (o.st === 'go' && o.x / U < cam.z + BACK * 0.85) {
      const x = Math.max(60, Math.min(CW - 60, CW / 2 + (o.l / U - cam.l) * 1.6));
      c.font = '800 15px system-ui'; c.textAlign = 'center'; c.lineWidth = 5; c.strokeStyle = EDGE; c.fillStyle = '#fff';
      const t = `▼ ${info.names?.[1 - me] || 'Đối thủ'} sau ${Math.round(gap / 10)} m`;
      c.strokeText(t, x, CH - 54); c.fillText(t, x, CH - 54);
    }
  }
  // khán giả cổ vũ
  (info.crowd || []).slice(0, 8).forEach((e, i) => { const x = 40 + i * 50, y = CH - 70 + Math.sin(tick / 6 + i) * (fx.shake > 1 ? 7 : 2); c.font = '22px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif'; c.textAlign = 'center'; c.fillText(e, x, y); });
}
function gate(c, cam, z, name) {
  const L = proj(cam, z, -26), R = proj(cam, z, RW + 26);
  if (!L || !R || L.y < HY) return;
  const s = L.s, h = 150 * s;
  c.save(); c.strokeStyle = EDGE; c.lineWidth = Math.max(1.5, 3 * s);
  for (const P of [L, R]) { c.fillStyle = '#c0583e'; c.fillRect(P.x - 9 * s, P.y - h, 18 * s, h); c.strokeRect(P.x - 9 * s, P.y - h, 18 * s, h); }
  c.fillStyle = '#b5482c'; rr(c, L.x - 22 * s, L.y - h - 34 * s, R.x - L.x + 44 * s, 34 * s, 6 * s); c.fill(); c.stroke();
  c.fillStyle = '#ffe08a'; rr(c, L.x + 40 * s, L.y - h - 28 * s, R.x - L.x - 80 * s, 22 * s, 4 * s); c.fill();
  c.font = `900 ${Math.max(6, 17 * s)}px system-ui`; c.textAlign = 'center'; c.fillStyle = '#7a2e1d'; c.fillText(name.toUpperCase(), (L.x + R.x) / 2, L.y - h - 11 * s);
  c.restore();
}
function hud(c, S, fx, tick, info) {
  // 1 người đã bị loại, người kia chạy tiếp tới khi cũng đâm
  if (S.phase === 'race') {
    const out = S.c.find((c) => c.st !== 'go'), alive = S.c.find((c) => c.st === 'go');
    if (out && alive) {
      const nm = info.names || ['P1', 'P2'], extra = Math.max(0, Math.round((alive.x - out.x) / U / 10));
      const t = `${nm[out.side] || 'P' + (out.side + 1)} đã bị loại · ${nm[alive.side] || 'P' + (alive.side + 1)} chạy tiếp tới khi đâm! (+${extra} m)`;
      c.font = '800 16px system-ui'; const w = c.measureText(t).width + 30;
      c.fillStyle = 'rgba(42,31,85,.85)'; rr(c, CW / 2 - w / 2, 68, w, 30, 15); c.fill();
      c.textAlign = 'center'; c.fillStyle = '#ffd43b'; c.fillText(t, CW / 2, 89);
    }
  }
  const names = info.names || ['P1', 'P2'];
  // thanh tiến độ / khoảng cách
  const total = S.len || Math.max(6000 * U, Math.max(S.c[0].x, S.c[1].x) - START_X + 2000 * U);
  const bx = 250, bw = 460, by = 18;
  c.fillStyle = '#2a1f55'; rr(c, bx - 6, by - 6, bw + 12, 26, 10); c.fill(); c.strokeStyle = EDGE; c.lineWidth = 3; c.stroke();
  c.fillStyle = '#5c5470'; c.fillRect(bx, by + 4, bw, 6);
  for (let k = 1; k * GATE_GAP * U < total; k++) { const gx = bx + (k * GATE_GAP * U / total) * bw; c.fillStyle = '#c0583e'; c.fillRect(gx - 2, by, 4, 14); }
  S.c.forEach((car, i) => { const px = bx + Math.min(1, (car.x - START_X) / total) * bw; circ(c, px, by + 7, 9, i ? '#4dabf7' : '#ff6b6b', 2.5); });
  c.font = '800 12px system-ui'; c.textAlign = 'center'; c.fillStyle = '#fff';
  c.fillText(S.len ? `${Math.round(Math.max(0, START_X + S.len - Math.max(S.c[0].x, S.c[1].x)) / U / 10)} m tới đích` : `${Math.round((Math.max(S.c[0].x, S.c[1].x) - START_X) / U / 10)} m · không có đích — ai trụ lâu hơn thắng`, CW / 2, by + 36);
  // 2 bên
  for (const i of [0, 1]) {
    const car = S.c[i], C = CAR[car.id], x = i ? CW - 20 : 20;
    c.textAlign = i ? 'right' : 'left';
    c.font = 'italic 900 20px system-ui'; c.lineWidth = 5; c.strokeStyle = EDGE; c.fillStyle = i ? '#74c0fc' : '#ff8787';
    c.strokeText(names[i], x, 30); c.fillText(names[i], x, 30);
    c.font = '800 12px system-ui'; c.fillStyle = '#fff'; c.strokeText(C.name, x, 47); c.fillText(C.name, x, 47);
    for (let k = 0; k < S.need; k++) circ(c, i ? x - 8 - k * 20 : x + 8 + k * 20, 62, 7, k < car.wins ? '#ffd43b' : '#2a1f55', 2.5);
    // nitro + tốc độ
    const mw = 200, mx = i ? CW - 20 - mw : 20, my = CH - 30;
    c.fillStyle = '#2a1f55'; rr(c, mx - 3, my - 3, mw + 6, 18, 6); c.fill();
    c.fillStyle = car.nitro >= 1000 ? `hsl(${(tick * 9) % 360},95%,60%)` : '#4dabf7';
    const nw = (mw * car.nitro) / 1000; c.fillRect(i ? mx + mw - nw : mx, my, nw, 12);
    c.strokeStyle = EDGE; c.lineWidth = 3; rr(c, mx - 3, my - 3, mw + 6, 18, 6); c.stroke();
    c.font = 'italic 900 14px system-ui'; c.lineWidth = 4; c.fillStyle = car.nitro >= 1000 ? '#ffd43b' : '#fff';
    const t = `${Math.round(car.v / 100 * 9)} km/h · ${car.nitro >= 1000 ? 'NITRO SẴN SÀNG!' : 'NITRO'}${car.ramCd ? '' : ' · HÚC ✓'}`;
    c.strokeText(t, i ? mx + mw : mx, my - 7); c.fillText(t, i ? mx + mw : mx, my - 7);
  }
  // băng rôn
  if (fx.banner) {
    const a = tick - fx.banner.born, life = fx.banner.big ? 40 : 70;
    if (a > life) fx.banner = null;
    else {
      const k = Math.min(1, a / 6), out = a > life - 10 ? (life - a) / 10 : 1;
      c.save(); c.globalAlpha = out; c.translate(CW / 2, 300); c.scale(0.5 + k * 0.5, 0.5 + k * 0.5); c.rotate(-0.04);
      c.font = `italic 900 ${fx.banner.big ? 120 : 78}px system-ui`; c.textAlign = 'center'; c.lineWidth = 12; c.strokeStyle = EDGE; c.lineJoin = 'round';
      c.strokeText(fx.banner.text, 0, 0); const g = c.createLinearGradient(0, -70, 0, 10); g.addColorStop(0, '#fff6a8'); g.addColorStop(1, fx.banner.hot ? '#ff2e4d' : '#ffb000'); c.fillStyle = g; c.fillText(fx.banner.text, 0, 0);
      c.restore();
    }
  }
  if (S.phase === 'end') {
    const t = S.winner < 0 ? 'HOÀ!' : `${names[S.winner].toUpperCase()} THẮNG!`;
    c.save(); c.translate(CW / 2, 280); c.font = 'italic 900 64px system-ui'; c.textAlign = 'center'; c.lineWidth = 12; c.strokeStyle = EDGE; c.strokeText(t, 0, 0); c.fillStyle = '#ffd43b'; c.fillText(t, 0, 0);
    if (info.endSub) { c.font = '800 20px system-ui'; c.lineWidth = 6; c.strokeText(info.endSub, 0, 40); c.fillStyle = '#fff'; c.fillText(info.endSub, 0, 40); }
    c.restore();
  }
  if (info.waiting) { c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(0, CH / 2 + 80, CW, 46); c.font = '800 20px system-ui'; c.textAlign = 'center'; c.fillStyle = '#fff'; c.fillText(info.waiting, CW / 2, CH / 2 + 110); }
  if (info.vs) vsScreen(c, info.vs, tick);
}

function vsScreen(c, vs, tick) {
  c.save();
  c.fillStyle = '#c92a2a'; c.fillRect(0, 0, CW / 2, CH); c.fillStyle = '#1c4fd8'; c.fillRect(CW / 2, 0, CW / 2, CH);
  c.strokeStyle = 'rgba(255,255,255,.12)'; c.lineWidth = 2; for (let i = -CH; i < CW; i += 26) { c.beginPath(); c.moveTo(i + (tick * 5) % 26, 0); c.lineTo(i + CH + (tick * 5) % 26, CH); c.stroke(); }
  for (const s of [0, 1]) {
    const x = s ? 720 : 240, k = Math.min(1, (vs.t || 0) / 20);
    c.save(); c.translate(x + (s ? 1 : -1) * (1 - k) * 300, 340); c.scale(2.6, 2.6); carRear(c, vs.cars[s], { rider: vs.riders?.[s] || '', tick }); c.restore();
    c.font = 'italic 900 40px system-ui'; c.textAlign = 'center'; c.lineWidth = 8; c.strokeStyle = EDGE; c.fillStyle = '#fff';
    c.strokeText(vs.names?.[s] || '', x, 410); c.fillText(vs.names?.[s] || '', x, 410);
    c.font = '800 20px system-ui'; c.lineWidth = 5; c.fillStyle = '#ffd43b'; c.strokeText(CAR[vs.cars[s]].name, x, 442); c.fillText(CAR[vs.cars[s]].name, x, 442);
  }
  const sc = 1 + Math.max(0, 1 - (vs.t || 0) / 12) * 2;
  c.translate(CW / 2, 250); c.scale(sc, sc); c.rotate(-0.08);
  c.font = 'italic 900 120px system-ui'; c.textAlign = 'center'; c.lineWidth = 14; c.strokeStyle = EDGE; c.strokeText('VS', 0, 40); c.fillStyle = '#ffd43b'; c.fillText('VS', 0, 40);
  c.restore();
  if (vs.themeName) { c.font = '800 18px system-ui'; c.textAlign = 'center'; c.fillStyle = '#fff'; c.fillText(`Đường đua: ${vs.themeName}`, CW / 2, 40); }
}
export function carPortrait(canvas, id, rider = '') {
  const c = canvas.getContext('2d'); c.clearRect(0, 0, canvas.width, canvas.height);
  c.save(); c.translate(canvas.width / 2, canvas.height - 6); const s = canvas.height / 120; c.scale(s, s); carRear(c, id, { rider }); c.restore();
}
export { THEMES, MAX_GAP };
