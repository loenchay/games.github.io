// Giao diện Thủ Thành Làng: bản đồ ô vuông nhìn từ trên xuống, bấm chọn loại chòi rồi bấm ô để xây.
import { MW, MH, MAPS, TOWERS, ENEMIES, pathCells, posAt, PCOL } from './data.js';
import { LiveBuf, lerp, loop, label, rr, touchDev, blip, noise } from '../rt/common.js';

const CS = 48, W = MW * CS, H = MH * CS;
const V = { ctx: null, buf: new LiveBuf(80), gameId: -1, pick: null, sel: null, hover: null, parts: [], tick: 0, banner: null, mapKey: '', bg: null };

function build(el) {
  el.innerHTML = `<div class="rt-wrap tt-wrap"><canvas class="rt-canvas tt-canvas" width="${W}" height="${H}"></canvas>
    <div class="panel tt-panel" id="ttPanel"></div></div>`;
  V.cv = el.querySelector('canvas'); V.c = V.cv.getContext('2d');
  const cell = (e) => { const r = V.cv.getBoundingClientRect(); return [Math.floor(((e.clientX - r.left) / r.width) * MW), Math.floor(((e.clientY - r.top) / r.height) * MH)]; };
  V.cv.addEventListener('pointermove', (e) => { V.hover = cell(e); });
  V.cv.addEventListener('pointerleave', () => { V.hover = null; });
  V.cv.addEventListener('click', (e) => clickCell(...cell(e)));
  // một bộ lắng nghe cho cả bảng (bảng có vẽ lại cũng không mất cú bấm)
  el.querySelector('#ttPanel').addEventListener('pointerdown', (e) => {
    const b = e.target.closest('button');
    if (!b || b.disabled) return;
    e.preventDefault();
    const ctx = V.ctx, d = b.dataset;
    if (d.buy) { V.pick = V.pick === d.buy ? null : d.buy; V.sel = null; panelDirty(); }
    else if (d.up) ctx.act({ t: 'up', id: Number(d.up) });
    else if (d.sell) { ctx.act({ t: 'sell', id: Number(d.sell) }); V.sel = null; }
    else if (d.unsel) { V.sel = null; panelDirty(); }
    else if (d.gift) ctx.act({ t: 'gift', to: Number(d.gift) });
    else if (d.next) ctx.act({ t: 'next' });
  });
  loop(el, draw);
}
addEventListener('keydown', (e) => {
  if (!V.ctx?.game || e.target.closest?.('input, textarea')) return;
  const k = { Digit1: 'cung', Digit2: 'da', Digit3: 'bun', Digit4: 'phao' }[e.code];
  if (k && V.ctx.mySeat >= 0) { V.pick = V.pick === k ? null : k; V.sel = null; panelDirty(); }
  if (e.code === 'Escape') { V.pick = null; V.sel = null; panelDirty(); }
});
const me = () => V.ctx.mySeat;
const myGold = () => { const L = V.buf.last; return L && me() >= 0 ? L.gold[me()] : 0; };
function panelDirty() { const el = document.getElementById('ttPanel'); if (el) { el.dataset.key = ''; panel(el, V.ctx); } }
function clickCell(x, y) {
  const ctx = V.ctx, g = ctx.game;
  if (!g || ctx.pub.phase !== 'play') return;
  const t = g.towers.find((q) => q[2] === x && q[3] === y);
  if (t) { V.sel = t[0]; V.pick = null; panelDirty(); blip([[700, 0.03]], 'square', 0.02); return; }
  if (V.pick && me() >= 0) {
    if (!buildable(x, y)) { blip([[180, 0.08]], 'square', 0.03); return; }
    if (myGold() < TOWERS[V.pick].cost) { ctx.toast('Không đủ vàng!', true); return; }
    ctx.act({ t: 'build', kind: V.pick, x, y });
    if (myGold() - TOWERS[V.pick].cost < TOWERS[V.pick].cost) { V.pick = null; panelDirty(); }
    return;
  }
  V.sel = null; panelDirty();
}
let cellsCache = null;
function buildable(x, y) {
  const g = V.ctx.game, map = MAPS[g.map];
  cellsCache ||= {}; cellsCache[g.map] ||= pathCells(map);
  if (x < 0 || y < 0 || x >= MW || y >= MH) return false;
  if (cellsCache[g.map].has(x + ',' + y)) return false;
  if (map.water.some(([wx, wy, ww, wh]) => x >= wx && x < wx + ww && y >= wy && y < wy + wh)) return false;
  if (x === map.gate[0] && Math.abs(y - map.gate[1]) <= 1) return false;
  return !g.towers.some((t) => t[2] === x && t[3] === y);
}

export const view = {
  phaseLabel: (ctx) => (ctx.game ? `Đợt ${Math.max(1, ctx.game.wave)}/${ctx.game.waves}` : ''),
  render(el, ctx) {
    V.ctx = ctx;
    if (V.gameId !== ctx.pub.gameId) { V.gameId = ctx.pub.gameId; V.buf.reset(); V.parts = []; V.pick = null; V.sel = null; el.innerHTML = ''; V.bg = null; }
    if (!el.querySelector('canvas')) build(el);
    panel(el.querySelector('#ttPanel'), ctx);
  },
  fx(ev, ctx) {
    if (ev.type === 'build') { blip([[440, 0.05], [660, 0.07]], 'square', 0.03); V.parts.push({ k: 'puff', x: ev.x + 0.5, y: ev.y + 0.5, t: 0, life: 24 }); }
    else if (ev.type === 'up') { blip([[660, 0.05], [880, 0.05], [1100, 0.08]], 'square', 0.03); V.parts.push({ k: 'text', x: ev.x + 0.5, y: ev.y, t: 0, life: 45, text: 'NÂNG CẤP!', col: '#ffd43b' }); }
    else if (ev.type === 'wave') { V.banner = { text: ev.boss ? `ĐỢT ${ev.w} · CHẰN TINH!` : `ĐỢT ${ev.w}`, t: 0, hot: ev.boss }; blip(ev.boss ? [[110, 0.3], [90, 0.4]] : [[330, 0.12], [440, 0.18]], 'sawtooth', 0.05); }
    else if (ev.type === 'leak') { noise(0.25, 0.08, 500); V.shake = 8; }
    else if (ev.type === 'clear') { V.banner = { text: `Xong đợt ${ev.w}! +${ev.bonus} vàng`, t: 0 }; blip([[523, 0.08], [659, 0.08], [784, 0.15]], 'square', 0.04); }
    else if (ev.type === 'win') blip([[523, 0.12], [659, 0.12], [784, 0.12], [1046, 0.3]], 'square', 0.05);
    else if (ev.type === 'lose') { noise(0.8, 0.12, 200); }
    else if (ev.type === 'boss') V.banner = { text: 'HẠ ĐƯỢC CHẰN TINH!', t: 0 };
  },
};

// ---------- bảng điều khiển ----------
function panel(el, ctx) {
  if (!el) return;
  const g = ctx.game, m = ctx.mySeat, L = V.buf.last;
  const gold = L ? L.gold : g.gold;
  const selT = V.sel ? g.towers.find((t) => t[0] === V.sel) : null;
  const afford = m >= 0 ? Object.values(TOWERS).map((T) => (gold[m] >= T.cost ? 1 : 0)).join('') + (selT && selT[4] < 2 && gold[m] >= TOWERS[selT[1]].up[selT[4]] ? 'u' : '') : '';
  const key = `${ctx.pub.gameId}|${m}|${V.pick}|${V.sel}|${selT?.[4]}|${g.towers.length}|${g.ph}|${afford}|${L?.ph}|${ctx.pub.phase}`;
  if (el.dataset.key === key) return;
  el.dataset.key = key;
  if (ctx.pub.phase !== 'play') { el.innerHTML = `<div class="tt-done">${g.ph === 'win' ? '🎉 Giữ được làng!' : '💥 Làng đã bị phá!'} · ${g.names.map((n, i) => `${ctx.esc(n)}: ${g.kills[i]} con`).join(' · ')}</div>`; return; }
  const team = g.names.map((n, i) => `<span class="tt-mate" style="--pc:${PCOL[i]}">${i === m ? '★ ' : ''}${ctx.esc(n)} <b data-g="${i}">💰${gold[i]}</b>${m >= 0 && i !== m ? `<button class="btn sm" data-gift="${i}" title="Tặng 50 vàng">🎁</button>` : ''}</span>`).join('');
  let mid = '';
  if (m < 0) mid = '<div class="muted">👀 Bạn đang xem — cả phe cùng giữ làng, quái lọt vào cổng là mất máu.</div>';
  else {
    mid = `<div class="tt-shop">${Object.entries(TOWERS).map(([k, T], i) => `<button class="tt-buy ${V.pick === k ? 'on' : ''}" data-buy="${k}" ${gold[m] < T.cost ? 'disabled' : ''}><span class="ic">${T.icon}</span><b>${T.name}</b><small>💰${T.cost} · ${T.desc}</small>${touchDev ? '' : `<kbd>${i + 1}</kbd>`}</button>`).join('')}</div>`;
  }
  let sel = '';
  if (selT) {
    const [id, kind, , , lv, own] = selT, T = TOWERS[kind];
    const upCost = lv < 2 ? T.up[lv] : 0;
    sel = `<div class="tt-sel"><b>${T.icon} ${T.name} cấp ${lv + 1}</b> <span class="muted">của ${ctx.esc(g.names[own])} · sát thương ${T.dmg[lv]} · tầm ${T.range[lv]} ô</span>
      ${m >= 0 && lv < 2 ? `<button class="btn sm primary" data-up="${id}" ${gold[m] < upCost ? 'disabled' : ''}>⬆ Nâng cấp 💰${upCost}</button>` : lv >= 2 ? '<span class="tag ok">Tối đa</span>' : ''}
      ${m === own ? `<button class="btn sm" data-sell="${id}">Bán lấy lại 70%</button>` : ''}
      <button class="btn sm ghost" data-unsel="1">✕</button></div>`;
  }
  const next = L && L.ph === 'build' && m >= 0 ? `<button class="btn sun" data-next="1">📯 Gọi quái sớm (+vàng)</button>` : '';
  el.innerHTML = `<div class="tt-team">${team}${next}</div>${mid}${sel}${m >= 0 && !touchDev ? '<div class="muted tt-tip">Chọn chòi (phím 1–4) rồi bấm ô cỏ trống để xây · bấm vào chòi để nâng cấp/bán · <kbd>Esc</kbd> bỏ chọn</div>' : m >= 0 ? '<div class="muted tt-tip">Chọn chòi rồi chạm ô cỏ trống để xây · chạm vào chòi để nâng cấp/bán</div>' : ''}`;

}

// ---------- nền bản đồ (vẽ 1 lần) ----------
function background(g) {
  const map = MAPS[g.map];
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const c = cv.getContext('2d');
  const cells = pathCells(map);
  for (let y = 0; y < MH; y++) for (let x = 0; x < MW; x++) {
    c.fillStyle = (x + y) % 2 ? '#8fd16a' : '#97d873'; c.fillRect(x * CS, y * CS, CS, CS);
    const h = (x * 73 + y * 151) % 17;
    if (h < 3) { c.fillStyle = '#7cbf58'; c.fillRect(x * CS + 10 + h * 7, y * CS + 12 + h * 5, 4, 8); c.fillRect(x * CS + 14 + h * 7, y * CS + 8 + h * 5, 4, 12); }
    if (h === 5) { c.fillStyle = '#fff6a8'; c.beginPath(); c.arc(x * CS + 30, y * CS + 30, 3, 0, 7); c.fill(); }
  }
  // nước
  for (const [wx, wy, ww, wh] of map.water) {
    c.fillStyle = '#4aa3d8'; rr(c, wx * CS + 3, wy * CS + 3, ww * CS - 6, wh * CS - 6, 16); c.fill();
    c.fillStyle = '#6fbde8'; for (let i = 0; i < ww * wh; i++) c.fillRect(wx * CS + 12 + (i * 37) % (ww * CS - 30), wy * CS + 14 + (i * 23) % (wh * CS - 26), 14, 3);
    c.font = '20px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('🪷', wx * CS + 22, wy * CS + 22);
  }
  // đường đất
  c.lineCap = 'round'; c.lineJoin = 'round';
  for (const [w, col] of [[CS * 0.9, '#a5783f'], [CS * 0.76, '#d9b06a']]) {
    for (const p of map.paths) { c.strokeStyle = col; c.lineWidth = w; c.beginPath(); p.forEach(([x, y], i) => (i ? c.lineTo((x + 0.5) * CS, (y + 0.5) * CS) : c.moveTo((x + 0.5) * CS, (y + 0.5) * CS))); c.stroke(); }
  }
  c.fillStyle = 'rgba(160,110,50,.35)';
  for (const k of cells) { const [x, y] = k.split(',').map(Number); for (let i = 0; i < 3; i++) c.fillRect(x * CS + 8 + ((x * 7 + y * 13 + i * 17) % 30), y * CS + 10 + ((x * 11 + i * 19) % 28), 3, 3); }
  // lối vào
  for (const p of map.paths) { const [x, y] = p[1]; const sy = (p[0][1] + 0.5) * CS; label(c, '➤', 10, sy, { size: 22, color: '#ff4d5e', w: 3, align: 'left' }); void x; void y; }
  // cổng làng
  const [gx, gy] = map.gate, cx = Math.min(W - 48, (gx + 0.5) * CS), cy = (gy + 0.5) * CS;
  c.fillStyle = '#8b4a2b'; c.fillRect(cx - 34, cy - 40, 10, 70); c.fillRect(cx + 24, cy - 40, 10, 70);
  c.fillStyle = '#c0392b'; c.beginPath(); c.moveTo(cx - 46, cy - 38); c.quadraticCurveTo(cx, cy - 66, cx + 46, cy - 38); c.lineTo(cx + 40, cy - 30); c.quadraticCurveTo(cx, cy - 52, cx - 40, cy - 30); c.closePath(); c.fill();
  c.fillStyle = '#ffd43b'; rr(c, cx - 24, cy - 34, 48, 16, 4); c.fill();
  c.fillStyle = '#7a2e1d'; c.font = '900 11px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('LÀNG', cx, cy - 26);
  return cv;
}

// ---------- vẽ ----------
function draw() {
  const ctx = V.ctx, c = V.c;
  if (!ctx || !c || !ctx.game) return;
  V.tick++;
  const g = ctx.game;
  V.buf.feed(ctx.live());
  const smp = V.buf.sample(), L = smp?.b;
  if (V.tick % 10 === 0 && V.buf.last) {
    const el = document.getElementById('ttPanel');
    if (el) { panel(el, ctx); el.querySelectorAll('[data-g]').forEach((b) => { b.textContent = '💰' + V.buf.last.gold[+b.dataset.g]; }); }
  }
  if (V.mapKey !== g.map || !V.bg) { V.bg = background(g); V.mapKey = g.map; cellsCache = null; }
  c.save();
  if (V.shake > 0) { c.translate((Math.random() - 0.5) * V.shake, (Math.random() - 0.5) * V.shake); V.shake--; }
  c.drawImage(V.bg, 0, 0);
  const map = MAPS[g.map];
  // ô đang chỉ
  if (V.hover && V.pick && me() >= 0) {
    const [hx, hy] = V.hover, ok = buildable(hx, hy);
    c.fillStyle = ok ? 'rgba(255,255,255,.35)' : 'rgba(255,60,60,.35)'; c.fillRect(hx * CS, hy * CS, CS, CS);
    if (ok) { c.strokeStyle = 'rgba(29,22,72,.5)'; c.setLineDash([6, 6]); c.lineWidth = 2; c.beginPath(); c.arc((hx + 0.5) * CS, (hy + 0.5) * CS, TOWERS[V.pick].range[0] * CS, 0, 7); c.stroke(); c.setLineDash([]); c.globalAlpha = 0.6; tower(c, V.pick, hx, hy, 0, me()); c.globalAlpha = 1; }
  }
  // chòi
  for (const [id, kind, x, y, lv, own] of g.towers) {
    if (id === V.sel) { c.fillStyle = 'rgba(255,212,59,.18)'; c.beginPath(); c.arc((x + 0.5) * CS, (y + 0.5) * CS, TOWERS[kind].range[lv] * CS, 0, 7); c.fill(); c.strokeStyle = '#ffd43b'; c.lineWidth = 2; c.stroke(); }
    tower(c, kind, x, y, lv, own);
  }
  // quái
  const posOf = new Map();
  if (L) {
    const amap = new Map((smp.a.e || []).map((e) => [e[0], e]));
    const list = L.e.map((e) => { const a = amap.get(e[0]); const d = a ? lerp(a[3], e[3], smp.k) : e[3]; const p = posAt(map.paths[e[2]], d / 100); return { e, p }; });
    list.sort((a, b) => a.p[1] - b.p[1]);
    for (const { e, p } of list) {
      posOf.set(e[0], p);
      const E = ENEMIES[e[1]], x = p[0] * CS, y = p[1] * CS, sz = E.boss ? 44 : E.fly ? 26 : e[1] === 'trau' ? 32 : 26;
      const bob = Math.sin(V.tick / 5 + e[0]) * (E.fly ? 4 : 1.5);
      c.fillStyle = 'rgba(0,0,0,.2)'; c.beginPath(); c.ellipse(x, y + sz * 0.38, sz * 0.4, sz * 0.14, 0, 0, 7); c.fill();
      if (e[5]) { c.fillStyle = 'rgba(120,80,40,.55)'; c.beginPath(); c.ellipse(x, y + sz * 0.35, sz * 0.5, sz * 0.18, 0, 0, 7); c.fill(); }
      c.font = `${sz}px system-ui`; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText(E.icon, x, y - (E.fly ? 10 : 0) + bob);
      // thanh máu
      const bw = E.boss ? 46 : 28, hpk = e[4] / 100;
      c.fillStyle = '#1d1648'; c.fillRect(x - bw / 2 - 1, y - sz * 0.62 - 1 - (E.fly ? 10 : 0), bw + 2, 6);
      c.fillStyle = hpk > 0.5 ? '#2fbf71' : hpk > 0.25 ? '#ffc43d' : '#ff4d5e'; c.fillRect(x - bw / 2, y - sz * 0.62 - (E.fly ? 10 : 0), bw * hpk, 4);
    }
    // đạn
    const fNow = L.f + Math.min(6, (ctx.liveAge() * 60) / 1000);
    const tw = new Map(g.towers.map((t) => [t[0], t]));
    for (const [tid, eid, f, kind, tx, ty] of L.s) {
      const t = tw.get(tid); if (!t) continue;
      const sx = (t[2] + 0.5) * CS, sy = (t[3] + 0.5) * CS, age = fNow - f;
      if (kind === 0) { const p = posOf.get(eid); if (!p || age > 8) continue; const k = age / 8; const ex = p[0] * CS, ey = p[1] * CS; const ax = lerp(sx, ex, k), ay = lerp(sy - 14, ey, k); c.strokeStyle = '#5a3b1f'; c.lineWidth = 2.5; c.beginPath(); c.moveTo(ax, ay); c.lineTo(ax - (ex - sx) * 0.08, ay - (ey - sy) * 0.08); c.stroke(); }
      else if (kind === 1) { const k = Math.min(1, age / 22), ex = (tx / 100) * CS, ey = (ty / 100) * CS; if (age <= 22) { const ax = lerp(sx, ex, k), ay = lerp(sy, ey, k) - Math.sin(k * Math.PI) * 60; c.fillStyle = '#7d7d8a'; c.beginPath(); c.arc(ax, ay, 6, 0, 7); c.fill(); c.strokeStyle = '#1d1648'; c.lineWidth = 2; c.stroke(); } else if (age < 30) { c.strokeStyle = `rgba(120,90,60,${1 - (age - 22) / 8})`; c.lineWidth = 4; c.beginPath(); c.arc(ex, ey, 10 + (age - 22) * 6, 0, 7); c.stroke(); } }
      else if (kind === 2 && age < 16) { const R = TOWERS.phao.range[t[4]] * CS * (age / 16); c.strokeStyle = `rgba(255,120,40,${1 - age / 16})`; c.lineWidth = 6; c.beginPath(); c.arc(sx, sy, R, 0, 7); c.stroke(); c.fillStyle = '#ffd43b'; for (let q = 0; q < 6; q++) { const a = q + age * 0.3; c.fillRect(sx + Math.cos(a) * R - 2, sy + Math.sin(a) * R - 2, 4, 4); } }
      else if (kind === 3 && age < 18) { c.strokeStyle = `rgba(110,75,40,${0.6 - age / 30})`; c.lineWidth = 3; c.beginPath(); c.arc(sx, sy, 16 + age * 3, 0, 7); c.stroke(); }
    }
  }
  // hạt
  V.parts = V.parts.filter((p) => ++p.t < p.life);
  for (const p of V.parts) {
    if (p.k === 'puff') { c.fillStyle = `rgba(255,255,255,${1 - p.t / p.life})`; for (let q = 0; q < 6; q++) { const a = q * 1.05; c.beginPath(); c.arc(p.x * CS + Math.cos(a) * p.t * 1.2, p.y * CS + Math.sin(a) * p.t * 1.2, 6, 0, 7); c.fill(); } }
    else label(c, p.text, p.x * CS, p.y * CS - p.t * 0.5, { size: 15, color: p.col, w: 4 });
  }
  c.restore();
  hud(c, g, L);
}
function tower(c, kind, x, y, lv, own) {
  const cx = (x + 0.5) * CS, cy = (y + 0.5) * CS;
  if (kind === 'bun') {
    c.fillStyle = '#7a5532'; c.beginPath(); c.ellipse(cx, cy + 4, 20, 14, 0, 0, 7); c.fill();
    c.fillStyle = '#946a40'; c.beginPath(); c.ellipse(cx, cy + 2, 15, 9, 0, 0, 7); c.fill();
    c.strokeStyle = PCOL[own] || '#fff'; c.lineWidth = 3; c.beginPath(); c.ellipse(cx, cy + 4, 21, 15, 0, 0, 7); c.stroke();
    c.strokeStyle = 'rgba(255,255,255,.35)'; c.lineWidth = 2; c.beginPath(); c.arc(cx, cy + 2, 6 + (V.tick / 4) % 8, 0, 7); c.stroke();
  } else {
    c.fillStyle = '#1d1648'; rr(c, cx - 19, cy - 15, 38, 34, 8); c.fill();
    c.fillStyle = kind === 'cung' ? '#b07a3c' : kind === 'da' ? '#8a8a96' : '#5e9e3a'; rr(c, cx - 17, cy - 13, 34, 30, 7); c.fill();
    c.fillStyle = PCOL[own] || '#fff'; c.fillRect(cx - 17, cy + 11, 34, 6);
    c.font = '22px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(TOWERS[kind].icon, cx, cy - 1);
  }
  for (let i = 0; i <= lv && lv > 0; i++) { c.fillStyle = '#ffd43b'; c.beginPath(); c.arc(cx - 8 + i * 8, cy - 19, 3.5, 0, 7); c.fill(); c.strokeStyle = '#1d1648'; c.lineWidth = 1.5; c.stroke(); }
}
function hud(c, g, L) {
  if (!L) return;
  c.fillStyle = 'rgba(29,22,72,.82)'; rr(c, W / 2 - 230, 6, 460, 36, 14); c.fill();
  const txt = L.ph === 'build' ? `⏳ Đợt ${L.wave + 1} tới sau ${Math.ceil(L.cd / 60)}s` : L.ph === 'wave' ? `⚔️ Đợt ${L.wave}/${g.waves} · còn ${L.left} con` : L.ph === 'win' ? '🎉 Giữ làng thành công!' : '💥 Làng bị phá!';
  label(c, txt, W / 2 - 60, 24, { size: 16, w: 3 });
  label(c, `❤️ ${L.lives}`, W / 2 + 150, 24, { size: 18, w: 3, color: L.lives <= 5 ? '#ff8787' : '#fff' });
  if (V.banner) { V.banner.t++; if (V.banner.t > 110) V.banner = null; else label(c, V.banner.text, W / 2, H / 2 - 30, { size: 52, color: V.banner.hot ? '#ff4d5e' : '#ffd43b', w: 10, font: '"Bricolage Grotesque",system-ui' }); }
  if (L.ph === 'lose') label(c, 'LÀNG ĐÃ BỊ PHÁ!', W / 2, H / 2, { size: 60, color: '#ff4d5e', w: 12, font: '"Bricolage Grotesque",system-ui' });
  if (L.ph === 'win') label(c, 'GIỮ LÀNG THÀNH CÔNG!', W / 2, H / 2, { size: 56, color: '#ffd43b', w: 12, font: '"Bricolage Grotesque",system-ui' });
}

export function thuthanhDemo(el) {
  el.innerHTML = '<canvas width="320" height="120" class="rt-demo"></canvas>';
  const c = el.firstChild.getContext('2d');
  let t = 0;
  const step = () => {
    if (!el.isConnected) return;
    t++;
    c.fillStyle = '#93d46e'; c.fillRect(0, 0, 320, 120);
    c.strokeStyle = '#d9b06a'; c.lineWidth = 22; c.lineCap = 'round'; c.beginPath(); c.moveTo(-10, 40); c.lineTo(150, 40); c.lineTo(150, 85); c.lineTo(330, 85); c.stroke();
    c.font = '22px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText('🏹', 110, 75); c.fillText('🧨', 200, 55); c.fillText('🪨', 260, 108);
    for (let i = 0; i < 4; i++) { const d = ((t * 0.8 + i * 70) % 400); const [x, y] = d < 160 ? [d, 40] : d < 205 ? [150, 40 + d - 160] : [150 + d - 205, 85]; c.fillText(['🐀', '🐗', '🐀', '🐃'][i], x, y - 2); }
    requestAnimationFrame(step);
  };
  step();
}
