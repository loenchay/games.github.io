// Giao diện Rắn Săn Mồi: cánh đồng cỏ ô vuông, rắn vẽ mượt giữa 2 nhịp bò, mũi tên/WASD hoặc vuốt để rẽ.
import { GW, GH, COLORS, DIRS } from './logic.js';
import { LiveBuf, lerp, loop, label, rr, touchDev, blip, noise, shade } from '../rt/common.js';

const CS = 15, W = GW * CS, H = GH * CS;
const V = { ctx: null, buf: new LiveBuf(105), gameId: -1, seq: 0, dir: -1, boost: false, parts: [], tick: 0, swipe: null };

function build(el) {
  el.innerHTML = `<div class="rt-wrap rs-wrap"><canvas class="rt-canvas rs-canvas" width="${W}" height="${H}"></canvas>
    <div class="rt-hint">${touchDev ? 'Vuốt trên sân để rẽ · giữ nút <b>Tăng tốc</b> để lao nhanh (tốn đuôi)' : 'Rẽ: <kbd>←↑↓→</kbd> / <kbd>W A S D</kbd> · giữ <kbd>Space</kbd> / <kbd>J</kbd> để <b>tăng tốc</b> (tốn bớt đuôi)'}</div>
    <div class="rs-pad ${touchDev ? '' : 'hidden'}"><button class="rs-boost" id="rsBoost">⚡ Tăng tốc</button></div></div>`;
  V.cv = el.querySelector('canvas'); V.c = V.cv.getContext('2d');
  // vuốt
  V.cv.addEventListener('pointerdown', (e) => { V.swipe = { x: e.clientX, y: e.clientY }; V.cv.setPointerCapture(e.pointerId); });
  V.cv.addEventListener('pointermove', (e) => {
    if (!V.swipe) return;
    const dx = e.clientX - V.swipe.x, dy = e.clientY - V.swipe.y;
    if (Math.hypot(dx, dy) < 18) return;
    turn(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 0 : 2) : dy > 0 ? 1 : 3);
    V.swipe = { x: e.clientX, y: e.clientY };
  });
  V.cv.addEventListener('pointerup', () => (V.swipe = null));
  const bb = el.querySelector('#rsBoost');
  bb.addEventListener('pointerdown', (e) => { e.preventDefault(); V.boost = true; bb.classList.add('on'); push(); });
  const off = () => { V.boost = false; bb.classList.remove('on'); push(); };
  bb.addEventListener('pointerup', off); bb.addEventListener('pointercancel', off); bb.addEventListener('pointerleave', off);
  loop(el, draw);
}
const playing = () => V.ctx && V.ctx.mySeat >= 0 && V.ctx.pub.phase === 'play';
function push() { if (playing()) V.ctx.input({ d: V.dir, s: V.seq, b: V.boost ? 1 : 0 }); }
function turn(d) { if (!playing()) return; V.dir = d; V.seq++; push(); }
const KEYDIR = { ArrowRight: 0, KeyD: 0, ArrowDown: 1, KeyS: 1, ArrowLeft: 2, KeyA: 2, ArrowUp: 3, KeyW: 3 };
addEventListener('keydown', (e) => {
  if (!playing() || e.target.closest?.('input, textarea')) return;
  if (e.code in KEYDIR) { e.preventDefault(); if (!e.repeat) turn(KEYDIR[e.code]); }
  else if (['Space', 'KeyJ', 'ShiftLeft', 'ShiftRight'].includes(e.code)) { e.preventDefault(); if (!V.boost) { V.boost = true; push(); } }
});
addEventListener('keyup', (e) => { if (['Space', 'KeyJ', 'ShiftLeft', 'ShiftRight'].includes(e.code) && V.boost) { V.boost = false; push(); } });

export const view = {
  phaseLabel: (ctx) => (ctx.game ? (ctx.game.mode === 'timed' ? `Săn mồi ${ctx.game.dur} phút` : 'Sinh tồn') : ''),
  render(el, ctx) {
    V.ctx = ctx;
    if (V.gameId !== ctx.pub.gameId) { V.gameId = ctx.pub.gameId; V.buf.reset(); V.parts = []; V.seq = 0; el.innerHTML = ''; }
    if (!el.querySelector('canvas')) build(el);
  },
  fx(ev, ctx) {
    if (ev.type === 'eat') { blip([[ev.t === 'frog' ? 990 : ev.t === 'banh' ? 780 : 620, 0.05]], 'square', ev.i === ctx.mySeat ? 0.035 : 0.012); if (ev.t !== 'apple') V.parts.push({ k: 'text', x: ev.x, y: ev.y, t: 0, life: 45, text: ev.t === 'frog' ? '+5 🐸' : '+3', col: '#ffd43b' }); }
    else if (ev.type === 'die') {
      const g = ctx.game;
      for (let k = 0; k < 18; k++) V.parts.push({ k: 'spark', x: ev.x + 0.5, y: ev.y + 0.5, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, t: 0, life: 35, col: COLORS[g?.col?.[ev.i] ?? 0] });
      V.parts.push({ k: 'text', x: ev.x, y: ev.y - 1, t: 0, life: 60, text: ev.by >= 0 ? `${g.names[ev.by]} hạ gục ${g.names[ev.i]}!` : `${g.names[ev.i]} tự đâm!`, col: '#fff' });
      if (ev.i === ctx.mySeat) { noise(0.4, 0.12, 300); blip([[300, 0.1], [180, 0.2]], 'sawtooth', 0.04); } else noise(0.15, 0.04, 800);
    } else if (ev.type === 'go') { blip([[660, 0.1], [990, 0.2]], 'square', 0.05); V.banner = { text: 'SĂN!', t: 0 }; }
    else if (ev.type === 'shrink') blip([[200, 0.08]], 'triangle', 0.03);
  },
};

function decode(e) {
  if (!e) return null;
  const pts = [[e[0], e[1]]];
  let x = e[0], y = e[1];
  for (const ch of e[2]) { const [dx, dy] = DIRS[+ch]; x += dx; y += dy; pts.push([x, y]); }
  return pts;
}
function draw() {
  const ctx = V.ctx, c = V.c;
  if (!ctx || !c || !ctx.game) return;
  V.tick++;
  const g = ctx.game, me = ctx.mySeat;
  V.buf.feed(ctx.live());
  if (playing() && V.tick % 15 === 0) push();
  const smp = V.buf.sample();
  const L = smp?.b;
  // sân cỏ
  for (let y = 0; y < GH; y++) for (let x = 0; x < GW; x++) { c.fillStyle = (x + y) % 2 ? '#7cc95a' : '#86d163'; c.fillRect(x * CS, y * CS, CS, CS); }
  if (!L) { label(c, 'Đang chờ chủ phòng...', W / 2, H / 2, { size: 26 }); return; }
  // rào khép lại
  const bd = L.border;
  if (bd > 0) {
    c.fillStyle = 'rgba(70,45,25,.82)';
    c.fillRect(0, 0, W, bd * CS); c.fillRect(0, H - bd * CS, W, bd * CS); c.fillRect(0, 0, bd * CS, H); c.fillRect(W - bd * CS, 0, bd * CS, H);
  }
  c.strokeStyle = '#8a5a2b'; c.lineWidth = 4; c.strokeRect(bd * CS + 2, bd * CS + 2, (GW - bd * 2) * CS - 4, (GH - bd * 2) * CS - 4);
  // mồi
  const fd = L.fd;
  for (let i = 0; i < fd.length; i += 3) {
    const x = fd[i] * CS + CS / 2, y = fd[i + 1] * CS + CS / 2, t = fd[i + 2];
    if (t === 0) { c.fillStyle = '#ff3b4e'; c.beginPath(); c.arc(x, y + 1, 5.5, 0, 7); c.fill(); c.fillStyle = '#2f8a2f'; c.fillRect(x, y - 7, 4, 3); c.fillStyle = 'rgba(255,255,255,.6)'; c.fillRect(x - 3, y - 2, 2, 2); }
    else if (t === 3) { c.fillStyle = '#ffe58a'; c.beginPath(); c.arc(x, y, 2.6 + Math.sin(V.tick / 8 + i) * 0.6, 0, 7); c.fill(); }
    else { c.font = `${t === 2 ? 17 : 15}px system-ui`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(t === 2 ? '🐸' : '🥖', x, y + (t === 2 ? Math.sin(V.tick / 5) * 1.5 : 0)); }
  }
  // rắn
  const A = smp.a, k = smp.k;
  const heads = [];
  L.sn.forEach((e, i) => {
    if (!e || !e[3]) return;
    const pb = decode(e), ea = A.sn[i], pa = ea && ea[3] ? decode(ea) : null;
    const pts = pb.map((p, j) => {
      const q = pa && pa[j];
      if (!q || Math.abs(q[0] - p[0]) + Math.abs(q[1] - p[1]) > 1) return [p[0] + 0.5, p[1] + 0.5];
      return [lerp(q[0], p[0], k) + 0.5, lerp(q[1], p[1], k) + 0.5];
    });
    const col = COLORS[g.col[i] ?? i % COLORS.length], boost = e[4];
    c.lineCap = 'round'; c.lineJoin = 'round';
    const path = () => { c.beginPath(); pts.forEach(([x, y], j) => (j ? c.lineTo(x * CS, y * CS) : c.moveTo(x * CS, y * CS))); };
    if (boost) { c.strokeStyle = 'rgba(255,240,150,.6)'; c.lineWidth = 17; path(); c.stroke(); }
    c.strokeStyle = '#1d1648'; c.lineWidth = 13; path(); c.stroke();
    c.strokeStyle = col; c.lineWidth = 10; path(); c.stroke();
    c.strokeStyle = shade(col, -0.22); c.lineWidth = 4; c.setLineDash([3, 7]); path(); c.stroke(); c.setLineDash([]);
    // đầu
    const [hx, hy] = pts[0], d = e[5];
    const [dx, dy] = DIRS[d];
    c.fillStyle = col; c.strokeStyle = '#1d1648'; c.lineWidth = 2.5;
    c.beginPath(); c.arc(hx * CS, hy * CS, 8, 0, 7); c.fill(); c.stroke();
    if (V.tick % 50 < 8) { c.strokeStyle = '#ff3b4e'; c.lineWidth = 2; c.beginPath(); c.moveTo((hx + dx * 0.5) * CS, (hy + dy * 0.5) * CS); c.lineTo((hx + dx * 0.95) * CS, (hy + dy * 0.95) * CS); c.stroke(); }
    for (const sd of [-1, 1]) {
      const ex = hx * CS + dx * 3 + -dy * sd * 4, ey = hy * CS + dy * 3 + dx * sd * 4;
      c.fillStyle = '#fff'; c.beginPath(); c.arc(ex, ey, 3, 0, 7); c.fill();
      c.fillStyle = '#1d1648'; c.beginPath(); c.arc(ex + dx * 1.2, ey + dy * 1.2, 1.6, 0, 7); c.fill();
    }
    heads.push({ i, x: hx * CS, y: hy * CS, len: pb.length });
  });
  for (const h of heads) label(c, (h.i === me ? '▼ ' : '') + g.names[h.i], h.x, h.y - 17, { size: h.i === me ? 14 : 12, color: h.i === me ? '#ffd43b' : '#fff', w: 3 });
  // hạt
  V.parts = V.parts.filter((p) => ++p.t < p.life);
  for (const p of V.parts) {
    if (p.k === 'spark') { p.x += p.vx; p.y += p.vy; c.fillStyle = p.col; c.fillRect(p.x * CS - 2, p.y * CS - 2, 4, 4); }
    else label(c, p.text, p.x * CS, p.y * CS - p.t * 0.5, { size: 14, color: p.col, w: 3 });
  }
  hud(c, g, L, me);
}
function hud(c, g, L, me) {
  // bảng xếp hạng
  const order = [...Array(g.total).keys()].sort((a, b) => L.pts[b] - L.pts[a]);
  const n = Math.min(6, order.length);
  c.fillStyle = 'rgba(29,22,72,.78)'; rr(c, W - 214, 10, 204, 30 + n * 22, 12); c.fill();
  label(c, '🏆 Bảng điểm', W - 112, 26, { size: 13, w: 3 });
  for (let r = 0; r < n; r++) {
    const i = order[r], e = L.sn[i], y = 48 + r * 22;
    c.fillStyle = COLORS[g.col[i] ?? 0]; c.beginPath(); c.arc(W - 198, y, 6, 0, 7); c.fill();
    label(c, `${r + 1}. ${g.names[i]}${e && !e[3] ? ' 💀' : ''}`, W - 186, y, { size: 12, align: 'left', w: 3, color: i === me ? '#ffd43b' : '#fff' });
    label(c, String(L.pts[i]), W - 20, y, { size: 12, align: 'right', w: 3, color: i === me ? '#ffd43b' : '#fff' });
  }
  // giờ
  if (g.mode === 'timed') { const s = Math.max(0, Math.ceil(L.left / 60)); label(c, `⏱ ${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`, W / 2, 22, { size: 20, color: s <= 10 ? '#ff8787' : '#fff' }); }
  else { const alive = L.sn.filter((e) => e && e[3]).length; label(c, `🐍 Còn ${alive} con${L.border ? ' · rào đang khép!' : ''}`, W / 2, 22, { size: 18 }); }
  // của mình
  if (me >= 0 && L.sn[me]) {
    const e = L.sn[me];
    if (!e[3] && L.ph === 'play') label(c, g.mode === 'timed' ? `💀 Hồi sinh sau ${Math.ceil(e[6] / 60)}s` : '💀 Rắn của bạn đã chết — xem tiếp nhé!', W / 2, H - 24, { size: g.mode === 'timed' ? 30 : 20, color: '#ff8fa3', w: 5 });
    else if (L.ph === 'play') label(c, `Dài ${e[2].length + 1} · ${L.pts[me]} điểm · ${L.kills[me]} hạ gục`, 14, H - 16, { size: 14, align: 'left', w: 3 });
  } else if (me < 0) label(c, '👀 Bạn đang xem', 14, H - 16, { size: 14, align: 'left', w: 3 });
  if (L.ph === 'intro') { const n2 = 3 - Math.floor(L.pt / 60); label(c, String(Math.max(1, n2)), W / 2, H / 2 - 20, { size: 110, color: '#ffd43b', w: 12, font: '"Bricolage Grotesque",system-ui' }); if (me >= 0) label(c, 'Rắn của bạn có ▼ trên đầu', W / 2, H / 2 + 60, { size: 20 }); }
  if (V.banner) { V.banner.t++; if (V.banner.t > 40) V.banner = null; else label(c, V.banner.text, W / 2, H / 2 - 20, { size: 110, color: '#ffd43b', w: 12, font: '"Bricolage Grotesque",system-ui' }); }
  if (L.ph === 'end' && g.rank) { const t = g.rank[0]; label(c, `🏆 ${g.names[t]} VÔ ĐỊCH!`, W / 2, H / 2, { size: 46, color: '#ffd43b', w: 10, font: '"Bricolage Grotesque",system-ui' }); }
}

export function ransanDemo(el) {
  el.innerHTML = '<canvas width="320" height="120" class="rt-demo"></canvas>';
  const c = el.firstChild.getContext('2d');
  let t = 0;
  const step = () => {
    if (!el.isConnected) return;
    t++;
    for (let y = 0; y < 8; y++) for (let x = 0; x < 22; x++) { c.fillStyle = (x + y) % 2 ? '#7cc95a' : '#86d163'; c.fillRect(x * 15, y * 15, 15, 15); }
    for (const [col, off, yy] of [['#ff4d5e', 0, 40], ['#3b82f6', 90, 85]]) {
      c.lineCap = 'round'; c.beginPath();
      for (let k = 0; k < 14; k++) { const x = ((t * 1.2 + off) % 380) - 30 - k * 9, y = yy + Math.sin((x + t) / 25) * 12; k ? c.lineTo(x, y) : c.moveTo(x, y); }
      c.strokeStyle = '#1d1648'; c.lineWidth = 13; c.stroke(); c.strokeStyle = col; c.lineWidth = 10; c.stroke();
    }
    c.fillStyle = '#ff3b4e'; c.beginPath(); c.arc(250, 62, 6, 0, 7); c.fill();
    requestAnimationFrame(step);
  };
  step();
}
