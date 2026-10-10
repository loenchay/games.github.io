// Giao diện Xây Tháp Lắc Lư: bè tre trên sông giữa núi đá vôi, cần cẩu treo đồ, máy quay lùi xa khi tháp cao lên.
import { PIECES, radiusOf, RAFT_W, RAFT_H } from './pieces.js';
import { loop, label, rr, touchDev, blip, noise, shade } from '../rt/common.js';

const W = 960, H = 600;
const V = { ctx: null, gameId: -1, bodies: new Map(), last: null, raft: [0, 0, 0], aim: { x: 0, a: 0 }, myAim: { x: 0, a: 0 }, turnSeen: -1, parts: [], tick: 0, cam: { bot: -1.4, top: 7.5 }, keys: {}, banner: null, drag: false };

function build(el) {
  el.innerHTML = `<div class="rt-wrap xt-wrap"><canvas class="rt-canvas xt-canvas" width="${W}" height="${H}"></canvas>
    <div class="xt-ctl" id="xtCtl"></div></div>`;
  V.cv = el.querySelector('canvas'); V.c = V.cv.getContext('2d');
  const toWorldX = (e) => { const r = V.cv.getBoundingClientRect(); return ((e.clientX - r.left) / r.width * W - W / 2) / scale(); };
  V.cv.addEventListener('pointerdown', (e) => { if (!myTurn()) return; V.drag = true; V.cv.setPointerCapture(e.pointerId); V.myAim.x = clampX(toWorldX(e)); });
  V.cv.addEventListener('pointermove', (e) => { if (V.drag && myTurn()) V.myAim.x = clampX(toWorldX(e)); });
  V.cv.addEventListener('pointerup', () => { V.drag = false; });
  loop(el, draw);
}
const clampX = (x) => Math.max(-3.8, Math.min(3.8, x));
const myTurn = () => { const ctx = V.ctx, g = ctx?.game; return g && ctx.mySeat >= 0 && ctx.mySeat === g.cur && (V.last?.ph ?? g.ph) === 'aim' && ctx.pub.phase === 'play'; };
function rot(d) { V.myAim.a = ((V.myAim.a + d) % 360 + 360) % 360; blip([[600, 0.03]], 'square', 0.02); }
function dropNow() { if (!myTurn()) return; V.ctx.act({ t: 'drop', x: V.myAim.x, a: V.myAim.a }); blip([[300, 0.06], [200, 0.08]], 'triangle', 0.05); }

addEventListener('keydown', (e) => {
  if (e.target.closest?.('input, textarea') || !myTurn()) return;
  const k = e.code;
  if (['KeyA', 'ArrowLeft', 'KeyD', 'ArrowRight'].includes(k)) { V.keys[k] = 1; e.preventDefault(); }
  else if (['KeyQ', 'KeyW', 'ArrowUp'].includes(k)) { if (!e.repeat) rot(k === 'KeyQ' ? -15 : 15); e.preventDefault(); }
  else if (k === 'KeyE') { if (!e.repeat) rot(15); e.preventDefault(); }
  else if (['Space', 'Enter', 'KeyS', 'ArrowDown'].includes(k)) { if (!e.repeat) dropNow(); e.preventDefault(); }
});
addEventListener('keyup', (e) => { delete V.keys[e.code]; });

export const view = {
  phaseLabel: (ctx) => (ctx.game ? `Món thứ ${ctx.game.blocks.length + 1}` : ''),
  render(el, ctx) {
    V.ctx = ctx;
    if (V.gameId !== ctx.pub.gameId) { V.gameId = ctx.pub.gameId; V.bodies.clear(); V.last = null; V.parts = []; V.cam = { bot: -1.4, top: 5.6 }; V.banner = null; el.innerHTML = ''; }
    if (!el.querySelector('canvas')) build(el);
    ctl(el.querySelector('#xtCtl'), ctx);
  },
  fx(ev, ctx) {
    if (ev.type === 'splash') {
      for (let k = 0; k < 26; k++) V.parts.push({ x: ev.x, y: -0.3, vx: (Math.random() - 0.5) * 0.08, vy: 0.05 + Math.random() * 0.1, t: 0, life: 60 });
      noise(0.6, 0.12, 400); blip([[300, 0.15], [150, 0.3]], 'triangle', 0.05);
      V.banner = { text: 'SẬP RỒI!', t: 0 };
    } else if (ev.type === 'placed') { blip([[520, 0.05], [780, 0.08]], 'square', 0.035); }
    else if (ev.type === 'drop') { if (ctx?.mySeat !== ev.seat) blip([[260, 0.06]], 'triangle', 0.03); }
  },
};
function ctl(el, ctx) {
  const g = ctx.game, mine = ctx.mySeat >= 0 && ctx.mySeat === g.cur && g.ph === 'aim' && ctx.pub.phase === 'play';
  const key = `${ctx.pub.gameId}|${g.turnNo}|${mine}|${g.ph}`;
  if (el.dataset.key === key) return;
  el.dataset.key = key;
  if (mine && V.turnSeen !== g.turnNo) { V.turnSeen = g.turnNo; V.myAim = { x: 0, a: 0 }; blip([[660, 0.08], [880, 0.1]], 'square', 0.04); }
  if (!mine) {
    const who = g.names[g.cur];
    el.innerHTML = ctx.pub.phase === 'play' ? `<div class="muted xt-wait">${g.ph === 'aim' ? `⏳ Lượt của <b>${ctx.esc(who)}</b> — đang ngắm thả <b>${PIECES[g.kind].name}</b>` : g.ph === 'settle' ? '🫨 Đang chờ tháp đứng yên...' : '🌊 Tháp sập!'}</div>` : '';
    return;
  }
  el.innerHTML = `<div class="xt-btns">
    <button class="btn big" data-x="rl">⟲</button><button class="btn big" data-x="l">◀</button>
    <button class="btn primary big xt-drop" data-x="d">⬇ THẢ</button>
    <button class="btn big" data-x="r">▶</button><button class="btn big" data-x="rr">⟳</button></div>
    <div class="muted xt-tip">${touchDev ? 'Kéo ngang trên hình để chỉnh vị trí' : '<kbd>A</kbd><kbd>D</kbd> / <kbd>←</kbd><kbd>→</kbd> dời · <kbd>Q</kbd><kbd>E</kbd> / <kbd>↑</kbd> xoay 15° · <kbd>Space</kbd> thả · hoặc kéo chuột trên hình'}</div>`;
  el.querySelectorAll('[data-x]').forEach((b) => {
    const x = b.dataset.x;
    if (x === 'rl') b.onclick = () => rot(-15);
    else if (x === 'rr') b.onclick = () => rot(15);
    else if (x === 'd') b.onclick = dropNow;
    else {
      const d = x === 'l' ? -1 : 1;
      let iv = null;
      b.addEventListener('pointerdown', (e) => { e.preventDefault(); V.myAim.x = clampX(V.myAim.x + d * 0.1); iv = setInterval(() => (V.myAim.x = clampX(V.myAim.x + d * 0.05)), 30); });
      const stop = () => clearInterval(iv);
      b.addEventListener('pointerup', stop); b.addEventListener('pointerleave', stop); b.addEventListener('pointercancel', stop);
    }
  });
}

// nửa chiều cao thật của món đồ khi xoay góc a (độ) — để dây cẩu chạm đúng mép trên
function topOf(kind, a) {
  const r = (a * Math.PI) / 180, cs = Math.cos(r), sn = Math.sin(r);
  let top = 0;
  for (const p of PIECES[kind].parts) {
    const pts = p.t === 'box' ? [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([u, v]) => [(p.x || 0) + (u * p.w) / 2, (p.y || 0) + (v * p.h) / 2]) : p.t === 'poly' ? p.p : null;
    if (pts) for (const [x, y] of pts) top = Math.max(top, x * sn + y * cs);
    else top = Math.max(top, (p.x || 0) * sn + (p.y || 0) * cs + p.r);
  }
  return top;
}
// ---------- máy quay ----------
const scale = () => (H - 30) / (V.cam.top - V.cam.bot);
const sx = (x) => W / 2 + x * scale();
const sy = (y) => H - (y - V.cam.bot) * scale();

function draw() {
  const ctx = V.ctx, c = V.c;
  if (!ctx || !c || !ctx.game) return;
  V.tick++;
  const g = ctx.game;
  // nhận gói mới
  const L = ctx.live();
  if (L && L !== V.last) {
    V.last = L;
    const seen = new Set();
    for (const [id, x, y, a] of L.b) {
      seen.add(id);
      const o = V.bodies.get(id);
      if (o) { o.tx = x; o.ty = y; o.ta = a; } else V.bodies.set(id, { x, y, a, tx: x, ty: y, ta: a });
    }
    if (L.full) for (const id of [...V.bodies.keys()]) if (!seen.has(id)) V.bodies.delete(id);
    V.raftT = L.raft;
  }
  for (const o of V.bodies.values()) { o.x += (o.tx - o.x) * 0.45; o.y += (o.ty - o.y) * 0.45; o.a += (o.ta - o.a) * 0.45; }
  if (V.raftT) for (let i = 0; i < 3; i++) V.raft[i] += (V.raftT[i] - V.raft[i]) * 0.45;
  // điều khiển của mình
  const mine = myTurn();
  if (mine) {
    if (V.keys.KeyA || V.keys.ArrowLeft) V.myAim.x = clampX(V.myAim.x - 0.05);
    if (V.keys.KeyD || V.keys.ArrowRight) V.myAim.x = clampX(V.myAim.x + 0.05);
    ctx.input({ x: Math.round(V.myAim.x * 100) / 100, a: V.myAim.a });
  }
  const aim = mine ? V.myAim : L?.aim || { x: 0, a: 0 };
  V.aim.x += (aim.x - V.aim.x) * (mine ? 1 : 0.3);
  V.aim.a = aim.a;
  // máy quay
  const hy = L?.hy ?? g.hy;
  const wantTop = Math.max(5.6, hy + radiusOf(g.kind) + 1.4);
  V.cam.top += (wantTop - V.cam.top) * 0.04;
  const k = scale();
  // trời + núi
  const sky = c.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, '#ffb07a'); sky.addColorStop(0.55, '#ffe2b0'); sky.addColorStop(1, '#bfe6ff');
  c.fillStyle = sky; c.fillRect(0, 0, W, H);
  c.fillStyle = '#fff4d0'; c.beginPath(); c.arc(760, sy(5.5) * 0.5 + 60, 46, 0, 7); c.fill();
  const wy0 = sy(-0.15);
  karst(c, '#b9b3d6', wy0, 0.62, 170, 0);
  karst(c, '#8f89b8', wy0, 0.42, 120, 3);
  for (let i = 0; i < 4; i++) { const x = ((i * 290 + V.tick * 0.15) % (W + 200)) - 100; c.fillStyle = 'rgba(255,255,255,.75)'; c.beginPath(); c.ellipse(x, 70 + i * 26, 60, 14, 0, 0, 7); c.ellipse(x + 34, 62 + i * 26, 34, 12, 0, 0, 7); c.fill(); }
  // vạch độ cao
  c.font = '700 12px system-ui'; c.textAlign = 'left';
  for (let m = 1; m < V.cam.top; m++) {
    const y = sy(m + RAFT_H / 2);
    if (y < 40) break;
    c.strokeStyle = 'rgba(29,22,72,.12)'; c.lineWidth = 1; c.beginPath(); c.moveTo(0, y); c.lineTo(46, y); c.stroke();
    c.fillStyle = 'rgba(29,22,72,.45)'; c.fillText(`${m} m`, 6, y - 4);
  }
  // kỷ lục
  if (g.best > RAFT_H / 2 + 0.2) {
    const y = sy(g.best); c.strokeStyle = '#ff4d5e'; c.setLineDash([10, 8]); c.lineWidth = 2; c.beginPath(); c.moveTo(60, y); c.lineTo(W - 20, y); c.stroke(); c.setLineDash([]);
    label(c, `cao nhất ${(g.best - RAFT_H / 2).toFixed(1)} m`, W - 24, y - 12, { size: 13, align: 'right', color: '#ff4d5e', stroke: '#fff' });
  }
  // sông (phía sau)
  const wy = sy(-0.15);
  c.fillStyle = '#4aa3d8'; c.fillRect(0, wy, W, H - wy);
  // bè
  c.save(); c.translate(sx(V.raft[0]), sy(V.raft[1])); c.rotate(-V.raft[2]); c.scale(k, k);
  raftArt(c); c.restore();
  // đồ đã thả
  const kinds = new Map(g.blocks.map(([id, kind, by]) => [id, [kind, by]]));
  for (const [id, o] of V.bodies) {
    const kd = kinds.get(id); if (!kd) continue;
    c.save(); c.translate(sx(o.x), sy(o.y)); c.rotate(-o.a); c.scale(k, k);
    pieceArt(c, kd[0], k); c.restore();
  }
  // sóng trước
  c.fillStyle = 'rgba(40,120,190,.55)';
  c.beginPath(); c.moveTo(0, H);
  for (let x = 0; x <= W; x += 20) c.lineTo(x, wy + 8 + Math.sin(x / 40 + V.tick / 14) * 5);
  c.lineTo(W, H); c.fill();
  c.strokeStyle = 'rgba(255,255,255,.6)'; c.lineWidth = 2;
  for (let i = 0; i < 12; i++) { const x = ((i * 97 + V.tick * 0.6) % (W + 60)) - 30, y = wy + 22 + (i % 3) * 18; c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + 12, y - 5, x + 24, y); c.stroke(); }
  // nước bắn
  V.parts = V.parts.filter((p) => ++p.t < p.life);
  c.fillStyle = '#e8f6ff';
  for (const p of V.parts) { p.x += p.vx; p.y += p.vy; p.vy -= 0.006; c.beginPath(); c.arc(sx(p.x), sy(p.y), 4, 0, 7); c.fill(); }
  // cần cẩu + món đang treo
  const ph = L?.ph ?? g.ph;
  if (ph === 'aim' && ctx.pub.phase === 'play') {
    const hx = sx(V.aim.x), hyy = sy(hy);
    const sw = Math.sin(V.tick / 22) * 2;
    const tp = topOf(g.kind, V.aim.a) * k;
    c.strokeStyle = '#4a3a2a'; c.lineWidth = 3; c.beginPath(); c.moveTo(hx + sw, 0); c.lineTo(hx + sw, hyy - tp - 4); c.stroke();
    c.fillStyle = '#4a3a2a'; c.fillRect(hx + sw - 8, hyy - tp - 8, 16, 6);
    if (mine) { c.strokeStyle = 'rgba(29,22,72,.35)'; c.setLineDash([6, 8]); c.lineWidth = 2; c.beginPath(); c.moveTo(hx, hyy); c.lineTo(hx, wy); c.stroke(); c.setLineDash([]); }
    c.save(); c.translate(hx + sw, hyy); c.rotate((-V.aim.a * Math.PI) / 180); c.scale(k, k); c.globalAlpha = 0.95; pieceArt(c, g.kind, k); c.restore();
  }
  hud(c, g, L, ph);
}
// núi đá vôi mọc lên từ mặt sông (kiểu vịnh Hạ Long)
function karst(c, col, by, amp, step, seed) {
  c.fillStyle = col; c.beginPath(); c.moveTo(0, by + 2);
  for (let x = -step / 2, i = 0; x <= W + step; x += step, i++) {
    const tall = (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(i * 2.7 + seed * 1.9))) * Math.min(by, H * 0.7) * amp;
    const w = step * (0.32 + 0.12 * Math.sin(i * 1.3 + seed));
    c.lineTo(x - w, by);
    c.bezierCurveTo(x - w * 1.05, by - tall * 0.8, x - w * 0.6, by - tall * 1.05, x, by - tall);
    c.bezierCurveTo(x + w * 0.6, by - tall * 1.02, x + w * 1.1, by - tall * 0.7, x + w, by);
  }
  c.lineTo(W, by + 2); c.closePath(); c.fill();
}
function raftArt(c) {
  const w = RAFT_W, h = RAFT_H, n = 11;
  for (let i = 0; i < n; i++) {
    const x = -w / 2 + (i + 0.5) * (w / n);
    c.fillStyle = i % 2 ? '#b9cf63' : '#a8c050'; c.strokeStyle = '#4f6a1e'; c.lineWidth = 0.03;
    c.fillRect(-w / 2, -h / 2 + (i / n) * 0, 0, 0);
    rr(c, x - w / n / 2, -h / 2, w / n - 0.02, h, 0.08); c.fill(); c.stroke();
    c.fillStyle = '#4f6a1e'; c.fillRect(x - 0.12, -0.02, 0.24, 0.04);
  }
  c.fillStyle = '#7a5532'; c.fillRect(-w / 2 + 0.3, -0.08, w - 0.6, 0.06); c.fillRect(-w / 2 + 0.3, 0.12, w - 0.6, 0.06);
}
// vẽ món đồ trong hệ toạ độ mét (y lên trên → lật dấu y khi vẽ)
export function pieceArt(c, kind, k = 60) {
  const P = PIECES[kind];
  const lw = 2.5 / k;
  c.lineJoin = 'round';
  for (const p of P.parts) {
    const x = p.x || 0, y = -(p.y || 0);
    c.beginPath();
    if (p.t === 'box') rr(c, x - p.w / 2, y - p.h / 2, p.w, p.h, Math.min(p.w, p.h) * 0.12);
    else if (p.t === 'circle') c.arc(x, y, p.r, 0, 7);
    else { p.p.forEach(([px, py], i) => (i ? c.lineTo(px, -py) : c.moveTo(px, -py))); c.closePath(); }
    c.fillStyle = P.color; c.fill(); c.strokeStyle = '#1d1648'; c.lineWidth = lw; c.stroke();
  }
  // trang trí riêng
  c.strokeStyle = shade(P.color, -0.35); c.lineWidth = lw * 0.8;
  const line = (a, b, cc, d) => { c.beginPath(); c.moveTo(a, b); c.lineTo(cc, d); c.stroke(); };
  if (kind === 'gach') { line(-0.6, 0, 0.6, 0); line(0, -0.22, 0, 0); line(-0.3, 0, -0.3, 0.22); line(0.3, 0, 0.3, 0.22); }
  else if (kind === 'thung') { line(-0.45, -0.45, 0.45, 0.45); line(-0.45, 0.45, 0.45, -0.45); c.strokeRect(-0.36, -0.36, 0.72, 0.72); }
  else if (kind === 'banhchung') { c.strokeStyle = '#e9e2b8'; c.lineWidth = lw * 1.4; line(-0.14, -0.42, -0.14, 0.42); line(0.14, -0.42, 0.14, 0.42); line(-0.42, -0.14, 0.42, -0.14); line(-0.42, 0.14, 0.42, 0.14); }
  else if (kind === 'tre') { for (const x of [-0.8, 0, 0.8]) line(x, -0.13, x, 0.13); c.strokeStyle = 'rgba(255,255,255,.5)'; line(-1.1, -0.06, 1.1, -0.06); }
  else if (kind === 'mam') { c.strokeStyle = '#fff3c4'; line(-0.8, -0.03, 0.8, -0.03); }
  else if (kind === 'bao') { c.save(); c.scale(0.01, 0.01); c.fillStyle = '#c0583e'; c.font = '900 22px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('GẠO', 0, 2); c.restore(); line(-0.22, -0.34, 0.22, -0.34); }
  else if (kind === 'non') { line(0, -0.42, -0.36, 0.22); line(0, -0.42, 0.36, 0.22); line(-0.4, 0.05, 0.4, 0.05); }
  else if (kind === 'dua') { c.strokeStyle = '#1f5f25'; c.lineWidth = lw * 1.6; for (const a of [-0.25, 0, 0.25]) { c.beginPath(); c.ellipse(0, 0, Math.abs(Math.cos(a * 3)) * 0.4 + 0.02, 0.4, 0, -1.4, 1.4); c.stroke(); } }
  else if (kind === 'ghe') { c.strokeStyle = 'rgba(255,255,255,.35)'; line(-0.45, -0.3, 0.45, -0.3); }
  else if (kind === 'L') { line(-0.6, 0.2, 0.6, 0.2); line(-0.2, -0.5, -0.2, 0.4); }
  else if (kind === 'chum') { c.strokeStyle = '#e0b07a'; line(-0.3, -0.36, 0.3, -0.36); line(-0.46, 0, 0.46, 0); }
}
function hud(c, g, L, ph) {
  const ctx = V.ctx;
  // danh sách lượt
  const rowH = 34;
  g.names.forEach((nm, i) => {
    const y = 12 + i * (rowH + 4), cur = i === g.cur && ph !== 'end' && ph !== 'collapse';
    c.fillStyle = cur ? 'rgba(255,212,59,.95)' : 'rgba(29,22,72,.78)'; rr(c, 60, y, 230, rowH, 12); c.fill();
    const p = i < g.n ? ctx.player(i) : null;
    c.font = '20px system-ui'; c.textAlign = 'left'; c.textBaseline = 'middle'; c.fillText(g.bot[i] ? '🤖' : p?.av?.e || '🙂', 68, y + rowH / 2 + 1);
    label(c, (i === ctx.mySeat ? '★ ' : '') + nm, 96, y + rowH / 2, { size: 14, align: 'left', w: 3, color: cur ? '#1d1648' : '#fff', stroke: cur ? '#fff' : '#1d1648' });
    label(c, `${g.placed[i]} món`, 280, y + rowH / 2, { size: 13, align: 'right', w: 3, color: cur ? '#1d1648' : '#ffd43b', stroke: cur ? '#fff' : '#1d1648' });
    if (g.loser === i) label(c, '💦', 300, y + rowH / 2, { size: 18, align: 'left', w: 0 });
  });
  // độ cao + món tiếp theo
  c.fillStyle = 'rgba(29,22,72,.82)'; rr(c, W - 230, 12, 218, 112, 14); c.fill();
  label(c, `Tháp cao ${Math.max(0, (L?.h ?? g.h) - RAFT_H / 2).toFixed(1)} m`, W - 121, 32, { size: 18, color: '#ffd43b' });
  label(c, `Đang treo: ${PIECES[g.kind].name}`, W - 121, 56, { size: 13, w: 3 });
  label(c, 'Tiếp theo:', W - 190, 92, { size: 13, w: 3 });
  c.save(); c.translate(W - 80, 92); const kk = 26 / Math.max(0.5, radiusOf(g.next)); c.scale(kk, kk); pieceArt(c, g.next, kk); c.restore();
  label(c, `Sóng: ${{ calm: 'lặng', medium: 'vừa', strong: 'to' }[g.waves]}`, W - 121, 114, { size: 11, w: 3, color: '#a5d8ff' });
  // thời gian lượt
  const rem = ctx.remaining();
  if (ph === 'aim' && rem > 0 && ctx.pub.phase === 'play') { const s = Math.ceil(rem / 1000); label(c, `⏱ ${s}s`, W / 2, 30, { size: 22, color: s <= 5 ? '#ff6b6b' : '#fff' }); }
  if (ph === 'aim' && ctx.pub.phase === 'play') {
    const me = ctx.mySeat === g.cur;
    label(c, me ? 'Lượt của bạn! Ngắm rồi thả' : `Lượt của ${g.names[g.cur]}`, W / 2, 62, { size: me ? 24 : 18, color: me ? '#ffd43b' : '#fff' });
  } else if (ph === 'settle') label(c, 'Chờ tháp đứng yên...', W / 2, 62, { size: 16 });
  if (V.banner) { V.banner.t++; if (V.banner.t > 120) V.banner = null; else label(c, V.banner.text, W / 2, H / 2 - 40, { size: 84, color: '#ff4d5e', w: 12, font: '"Bricolage Grotesque",system-ui' }); }
  if (ctx.pub.phase === 'over' && g.loser >= 0) label(c, `${g.names[g.loser]} làm sập tháp!`, W / 2, H / 2 + 40, { size: 30, color: '#fff', w: 8 });
}

export function xaythapDemo(el) {
  el.innerHTML = '<canvas width="320" height="140" class="rt-demo"></canvas>';
  const c = el.firstChild.getContext('2d');
  let t = 0;
  const stack = [['gach', 0, 0.48, 0], ['thung', 0.1, 1.15, 0], ['tre', -0.05, 1.73, 0], ['non', 0.2, 2.08, 0]];
  const step = () => {
    if (!el.isConnected) return;
    t++;
    const g = c.createLinearGradient(0, 0, 0, 140); g.addColorStop(0, '#ffc79a'); g.addColorStop(1, '#bfe6ff');
    c.fillStyle = g; c.fillRect(0, 0, 320, 140);
    c.fillStyle = '#4aa3d8'; c.fillRect(0, 118, 320, 22);
    const a = Math.sin(t / 40) * 0.05;
    c.save(); c.translate(160, 118); c.rotate(a); c.scale(30, 30); raftArt(c);
    for (const [k, x, y] of stack) { c.save(); c.translate(x, -y); pieceArt(c, k, 30); c.restore(); }
    c.restore();
    requestAnimationFrame(step);
  };
  step();
}
