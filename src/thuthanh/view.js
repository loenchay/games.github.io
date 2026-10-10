// Giao diện Thủ Thành Làng: bản đồ ô vuông nhìn từ trên xuống, chọn vũ khí rồi bấm ô cỏ để lắp.
import { MW, MH, MAPS, TOWERS, TOWER_KEYS, ENEMIES, pathCells, blockedCell, posAt, PCOL, REFUND } from './data.js';
import { CS, drawEnemy, drawTower, towerIcon, background } from './art.js';
import { LiveBuf, lerp, loop, label, rr, touchDev, blip, noise } from '../rt/common.js';

const W = MW * CS, H = MH * CS;
const V = { ctx: null, buf: new LiveBuf(80), gameId: -1, pick: null, sel: null, hover: null, parts: [], tick: 0, banner: null, mapKey: '', bg: null, aim: {}, fireAt: {}, face: {}, lastPos: {}, shake: 0 };

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
    else if (d.rm) { ctx.act({ t: 'remove', id: Number(d.rm) }); V.sel = null; }
    else if (d.unsel) { V.sel = null; panelDirty(); }
    else if (d.gift) ctx.act({ t: 'gift', to: Number(d.gift) });
    else if (d.next) ctx.act({ t: 'next' });
  });
  loop(el, draw);
}
addEventListener('keydown', (e) => {
  if (!V.ctx?.game || e.target.closest?.('input, textarea')) return;
  const n = /^Digit([1-9])$/.exec(e.code);
  if (n && V.ctx.mySeat >= 0) { const k = TOWER_KEYS[Number(n[1]) - 1]; V.pick = V.pick === k ? null : k; V.sel = null; panelDirty(); }
  if (e.code === 'Escape') { V.pick = null; V.sel = null; panelDirty(); }
  if ((e.code === 'KeyU') && V.sel) V.ctx.act({ t: 'up', id: V.sel });
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
let cellsCache = {};
function buildable(x, y) {
  const g = V.ctx.game, map = MAPS[g.map];
  cellsCache[g.map] ||= pathCells(map);
  if (x < 0 || y < 0 || x >= MW || y >= MH) return false;
  return !blockedCell(map, cellsCache[g.map], x, y) && !g.towers.some((t) => t[2] === x && t[3] === y);
}

export const view = {
  phaseLabel: (ctx) => (ctx.game ? `Đợt ${Math.max(1, ctx.game.wave)}/${ctx.game.waves}` : ''),
  render(el, ctx) {
    V.ctx = ctx;
    if (V.gameId !== ctx.pub.gameId) { V.gameId = ctx.pub.gameId; V.buf.reset(); V.parts = []; V.pick = null; V.sel = null; el.innerHTML = ''; V.bg = null; V.aim = {}; }
    if (!el.querySelector('canvas')) build(el);
    if (V.sel && !ctx.game.towers.some((t) => t[0] === V.sel)) V.sel = null;
    panel(el.querySelector('#ttPanel'), ctx);
  },
  fx(ev) {
    if (ev.type === 'build') { blip([[440, 0.05], [660, 0.07]], 'square', 0.03); puff(ev.x + 0.5, ev.y + 0.5, '#ffffff'); }
    else if (ev.type === 'up') { blip([[660, 0.05], [880, 0.05], [1100, 0.08]], 'square', 0.03); const pk = TOWERS[ev.kind]?.perks[ev.lv - 1]; V.parts.push({ k: 'text', x: ev.x + 0.5, y: ev.y, t: 0, life: 70, text: pk ? `★ ${pk[0]}!` : 'NÂNG CẤP!', col: '#ffd43b' }); }
    else if (ev.type === 'remove') { blip([[500, 0.05], [330, 0.08]], 'triangle', 0.03); puff(ev.x + 0.5, ev.y + 0.5, '#c9a25a'); V.parts.push({ k: 'text', x: ev.x + 0.5, y: ev.y, t: 0, life: 50, text: `+${ev.back} vàng`, col: '#ffd43b' }); }
    else if (ev.type === 'wave') { V.banner = { text: ev.boss ? `ĐỢT ${ev.w} · ${ENEMIES[ev.boss].name.toUpperCase()}!` : `ĐỢT ${ev.w}`, t: 0, hot: !!ev.boss }; blip(ev.boss ? [[110, 0.3], [90, 0.4]] : [[330, 0.12], [440, 0.18]], 'sawtooth', 0.05); }
    else if (ev.type === 'leak') { noise(0.25, 0.08, 500); V.shake = 8; }
    else if (ev.type === 'boom') { for (let i = 0; i < (ev.big ? 16 : 9); i++) V.parts.push({ k: 'spark', x: ev.x, y: ev.y, vx: (Math.random() - 0.5) * 0.12, vy: (Math.random() - 0.7) * 0.12, t: 0, life: 26, col: ev.big ? '#ff8a3d' : '#9a8f80' }); V.parts.push({ k: 'ring', x: ev.x, y: ev.y, r: ev.r, t: 0, life: 14, col: ev.big ? '#ffb020' : '#a0855e' }); if (ev.big) { noise(0.2, 0.06, 200); V.shake = Math.max(V.shake, 3); } }
    else if (ev.type === 'clear') { V.banner = { text: `Xong đợt ${ev.w}! +${ev.bonus} vàng`, t: 0 }; blip([[523, 0.08], [659, 0.08], [784, 0.15]], 'square', 0.04); }
    else if (ev.type === 'win') blip([[523, 0.12], [659, 0.12], [784, 0.12], [1046, 0.3]], 'square', 0.05);
    else if (ev.type === 'lose') noise(0.8, 0.12, 200);
    else if (ev.type === 'boss') V.banner = { text: `HẠ ĐƯỢC ${ENEMIES[ev.t]?.name.toUpperCase() || 'TRÙM'}!`, t: 0 };
  },
};
function puff(x, y, col) { for (let q = 0; q < 8; q++) V.parts.push({ k: 'spark', x, y, vx: Math.cos(q) * 0.05, vy: Math.sin(q) * 0.05 - 0.02, t: 0, life: 22, col }); }

// ---------- bảng điều khiển ----------
function panel(el, ctx) {
  if (!el) return;
  const g = ctx.game, m = ctx.mySeat, L = V.buf.last;
  const gold = L ? L.gold : g.gold;
  const selT = V.sel ? g.towers.find((t) => t[0] === V.sel) : null;
  const afford = m >= 0 ? TOWER_KEYS.map((k) => (gold[m] >= TOWERS[k].cost ? 1 : 0)).join('') + (selT && selT[4] < 3 && gold[m] >= TOWERS[selT[1]].up[selT[4]] ? 'u' : '') : '';
  const key = `${ctx.pub.gameId}|${m}|${V.pick}|${V.sel}|${selT?.[4]}|${g.towers.length}|${g.ph}|${afford}|${L?.ph}|${ctx.pub.phase}`;
  if (el.dataset.key === key) return;
  el.dataset.key = key;
  if (ctx.pub.phase !== 'play') { el.innerHTML = `<div class="tt-done">${g.ph === 'win' ? '🎉 Giữ được làng!' : '💥 Làng đã bị phá!'} · ${g.names.map((n, i) => `${ctx.esc(n)}: ${g.kills[i]} con`).join(' · ')}</div>`; return; }
  const team = g.names.map((n, i) => `<span class="tt-mate" style="--pc:${PCOL[i]}">${i === m ? '★ ' : ''}${ctx.esc(n)} <b data-g="${i}">💰${gold[i]}</b>${m >= 0 && i !== m ? `<button class="btn sm" data-gift="${i}" title="Tặng 50 vàng">🎁</button>` : ''}</span>`).join('');
  let mid = '';
  if (m < 0) mid = '<div class="muted">👀 Bạn đang xem — cả phe cùng giữ làng, quái lọt vào cổng là mất máu.</div>';
  else mid = `<div class="tt-shop">${TOWER_KEYS.map((k, i) => { const T = TOWERS[k]; return `<button class="tt-buy ${V.pick === k ? 'on' : ''}" data-buy="${k}" ${gold[m] < T.cost ? 'disabled' : ''} title="${ctx.esc(T.desc)}"><img src="${towerIcon(k)}" alt=""><b>${T.name}</b><small>💰${T.cost}</small>${touchDev ? '' : `<kbd>${i + 1}</kbd>`}</button>`; }).join('')}</div>`;
  let sel = '';
  if (selT) {
    const [id, kind, , , lv, own] = selT, T = TOWERS[kind], S = T.lv[lv];
    const upCost = lv < 3 ? T.up[lv] : 0, next = lv < 3 ? T.perks[lv] : null;
    const stats = `sát thương ${S.dmg}${S.beam ? '/nhịp' : ''} · tầm ${S.range} ô · ${S.air ? 'bắn được quái bay' : 'chỉ đánh dưới đất'}`;
    const perks = T.perks.map((p, i) => `<span class="tt-perk ${i < lv ? 'on' : ''}" title="${ctx.esc(p[1])}">${i < lv ? '✓' : '🔒'} ${ctx.esc(p[0])}</span>`).join('');
    sel = `<div class="tt-sel"><img src="${towerIcon(kind, lv)}" alt=""><div class="tt-sel-info"><b>${T.name} · cấp ${lv + 1}/4</b> <span class="muted">của ${ctx.esc(g.names[own])}</span>
      <div class="muted">${stats}</div><div class="tt-perks">${perks}</div>
      ${next ? `<div class="tt-next">Lên cấp ${lv + 2}: <b>${ctx.esc(next[0])}</b> — ${ctx.esc(next[1])}</div>` : '<div class="tt-next">Đã nâng tối đa ⭐</div>'}</div>
      <div class="tt-sel-btns">${m >= 0 && next ? `<button class="btn sm primary" data-up="${id}" ${gold[m] < upCost ? 'disabled' : ''}>⬆ Nâng cấp 💰${upCost}</button>` : ''}
      ${m === own ? `<button class="btn sm" data-rm="${id}">🔧 Gỡ (+${Math.floor(T.cost * REFUND)} vàng)</button>` : ''}
      <button class="btn sm ghost" data-unsel="1">✕</button></div></div>`;
  } else if (V.pick && m >= 0) {
    const T = TOWERS[V.pick];
    sel = `<div class="tt-sel"><img src="${towerIcon(V.pick)}" alt=""><div class="tt-sel-info"><b>${T.name}</b> <span class="muted">💰${T.cost} · ${ctx.esc(T.desc)}</span>
      <div class="tt-perks">${T.perks.map((p, i) => `<span class="tt-perk" title="${ctx.esc(p[1])}">Cấp ${i + 2}: ${ctx.esc(p[0])}</span>`).join('')}</div>
      <div class="muted">Bấm vào ô cỏ trống trên bản đồ để lắp.</div></div></div>`;
  }
  const nextBtn = L && L.ph === 'build' && m >= 0 ? `<button class="btn sun" data-next="1">📯 Gọi quái sớm (+vàng)</button>` : '';
  el.innerHTML = `<div class="tt-team">${team}${nextBtn}</div>${mid}${sel}${m >= 0 ? `<div class="muted tt-tip">${touchDev ? 'Chọn vũ khí rồi chạm ô cỏ trống để lắp · chạm vào vũ khí để nâng cấp/gỡ' : 'Chọn vũ khí (phím 1–9) rồi bấm ô cỏ trống · bấm vào vũ khí để nâng cấp (<kbd>U</kbd>) hoặc gỡ · <kbd>Esc</kbd> bỏ chọn'} · gỡ được hoàn ${REFUND * 100}% giá lắp</div>` : ''}`;
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
  if (V.mapKey !== g.map || !V.bg) { V.bg = background(g.map); V.mapKey = g.map; }
  const map = MAPS[g.map];
  c.save();
  if (V.shake > 0) { c.translate((Math.random() - 0.5) * V.shake, (Math.random() - 0.5) * V.shake); V.shake--; }
  c.drawImage(V.bg, 0, 0);
  // vị trí quái (nội suy)
  const list = [], posOf = new Map();
  if (L) {
    const amap = new Map((smp.a.e || []).map((e) => [e[0], e]));
    for (const e of L.e) {
      const a = amap.get(e[0]);
      const d = a ? lerp(a[3], e[3], smp.k) : e[3];
      const p = posAt(map.paths[e[2]], d / 100);
      // hướng mặt theo chiều đi
      const prev = V.lastPos[e[0]];
      if (prev && Math.abs(p[0] - prev[0]) > 0.003) V.face[e[0]] = p[0] > prev[0] ? 1 : -1;
      V.lastPos[e[0]] = p;
      posOf.set(e[0], p);
      list.push({ e, p });
    }
  }
  // hướng nòng súng + lúc bắn
  const fNow = L ? L.f + Math.min(6, (ctx.liveAge() * 60) / 1000) : 0;
  if (L) for (const sh of L.s) {
    const [tid, eid, f] = sh;
    const tgt = typeof eid === 'number' ? posOf.get(eid) : Array.isArray(eid) ? posOf.get(eid[0]) : null;
    const t = g.towers.find((q) => q[0] === tid);
    if (t && tgt) V.aim[tid] = Math.atan2(tgt[1] - (t[3] + 0.5), tgt[0] - (t[2] + 0.5));
    V.fireAt[tid] = Math.max(V.fireAt[tid] || 0, f);
  }
  // ô đang chỉ
  if (V.hover && V.pick && me() >= 0) {
    const [hx, hy] = V.hover, ok = buildable(hx, hy);
    c.fillStyle = ok ? 'rgba(255,255,255,.35)' : 'rgba(255,60,60,.35)'; c.fillRect(hx * CS, hy * CS, CS, CS);
    if (ok) { c.strokeStyle = 'rgba(29,22,72,.5)'; c.setLineDash([6, 6]); c.lineWidth = 2; c.beginPath(); c.arc((hx + 0.5) * CS, (hy + 0.5) * CS, TOWERS[V.pick].lv[0].range * CS, 0, 7); c.stroke(); c.setLineDash([]); c.globalAlpha = 0.6; drawTower(c, V.pick, (hx + 0.5) * CS, (hy + 0.5) * CS, 0, me(), -Math.PI / 2, V.tick); c.globalAlpha = 1; }
  }
  // vũ khí
  for (const [id, kind, x, y, lv, own] of g.towers) {
    if (id === V.sel) { c.fillStyle = 'rgba(255,212,59,.16)'; c.beginPath(); c.arc((x + 0.5) * CS, (y + 0.5) * CS, TOWERS[kind].lv[lv].range * CS, 0, 7); c.fill(); c.strokeStyle = '#ffd43b'; c.lineWidth = 2; c.stroke(); }
    const fire = fNow - (V.fireAt[id] ?? -99) < 6 ? 1 : 0;
    drawTower(c, kind, (x + 0.5) * CS, (y + 0.5) * CS, lv, own, V.aim[id] ?? -Math.PI / 2, V.tick, fire);
  }
  // quái (xa trước gần sau)
  list.sort((a, b) => a.p[1] - b.p[1]);
  for (const { e, p } of list) {
    const E = ENEMIES[e[1]], x = p[0] * CS, y = p[1] * CS, px = CS * E.size;
    drawEnemy(c, e[1], x, y, px, V.tick + e[0] * 7, V.face[e[0]] || 1, e[5], !!E.fly);
    const bw = E.boss ? 48 : Math.max(24, px * 0.7), hpk = e[4] / 100, by = y - px * (E.fly ? 0.95 : 0.7) - (E.boss ? 14 : 0);
    c.fillStyle = '#1d1648'; c.fillRect(x - bw / 2 - 1, by - 1, bw + 2, 6);
    c.fillStyle = hpk > 0.5 ? '#2fbf71' : hpk > 0.25 ? '#ffc43d' : '#ff4d5e'; c.fillRect(x - bw / 2, by, bw * hpk, 4);
    if (E.boss) label(c, E.name, x, by - 10, { size: 12, color: '#ff8787', w: 3 });
  }
  // đạn, tia
  if (L) {
    const tw = new Map(g.towers.map((t) => [t[0], t]));
    for (const sh of L.s) {
      const [tid, eid, f, kind, tx, ty] = sh;
      const t = tw.get(tid); if (!t) continue;
      const sx = (t[2] + 0.5) * CS, sy = (t[3] + 0.5) * CS, age = fNow - f;
      if (kind === 0 || kind === 8 || kind === 9) {
        const p = posOf.get(eid), dur = kind === 8 ? 4 : 8; if (!p || age > dur) continue;
        const k = Math.max(0, age / dur), ex = p[0] * CS, ey = p[1] * CS, ax = lerp(sx, ex, k), ay = lerp(sy - 10, ey - 6, k);
        if (kind === 8) { c.strokeStyle = '#ffe066'; c.lineWidth = 2.5; c.beginPath(); c.moveTo(ax, ay); c.lineTo(ax - (ex - sx) * 0.15, ay - (ey - sy) * 0.15); c.stroke(); }
        else if (kind === 9) { c.fillStyle = '#bfefff'; c.beginPath(); c.arc(ax, ay, 5, 0, 7); c.fill(); c.strokeStyle = '#3fa7e0'; c.lineWidth = 1.5; c.stroke(); }
        else { c.strokeStyle = '#5a3b1f'; c.lineWidth = 2.5; c.beginPath(); c.moveTo(ax, ay); c.lineTo(ax - (ex - sx) * 0.1, ay - (ey - sy) * 0.1); c.stroke(); if (TOWERS.cung.lv[t[4]].burn) { c.fillStyle = '#ff8a3d'; c.beginPath(); c.arc(ax, ay, 3, 0, 7); c.fill(); } }
      } else if (kind === 1 || kind === 7) {
        const dur = kind === 7 ? 18 : 22, k = Math.min(1, age / dur), ex = (tx / 100) * CS, ey = (ty / 100) * CS;
        if (age <= dur) { const ax = lerp(sx, ex, k), ay = lerp(sy, ey, k) - Math.sin(k * Math.PI) * (kind === 7 ? 40 : 60); c.fillStyle = kind === 7 ? '#22222c' : '#7d7d8a'; c.beginPath(); c.arc(ax, ay, kind === 7 ? 7 : 6, 0, 7); c.fill(); c.strokeStyle = '#1d1648'; c.lineWidth = 2; c.stroke(); }
      } else if (kind === 2 && age < 16) {
        const R = TOWERS.phao.lv[t[4]].range * CS * (age / 16); c.strokeStyle = `rgba(255,120,40,${1 - age / 16})`; c.lineWidth = 6; c.beginPath(); c.arc(sx, sy, R, 0, 7); c.stroke(); c.fillStyle = '#ffd43b'; for (let q = 0; q < 8; q++) { const a = q * 0.8 + age * 0.3; c.fillRect(sx + Math.cos(a) * R - 2, sy + Math.sin(a) * R - 2, 4, 4); }
      } else if (kind === 3 && age < 18) { c.strokeStyle = `rgba(110,75,40,${0.6 - age / 30})`; c.lineWidth = 3; c.beginPath(); c.arc(sx, sy, 16 + age * 3, 0, 7); c.stroke(); }
      else if (kind === 6 && age < 18) { const R = TOWERS.bang.lv[t[4]].range * CS * (age / 18); c.strokeStyle = `rgba(160,225,255,${1 - age / 18})`; c.lineWidth = 7; c.beginPath(); c.arc(sx, sy, R, 0, 7); c.stroke(); c.fillStyle = '#fff'; for (let q = 0; q < 10; q++) { const a = q * 0.63; c.fillRect(sx + Math.cos(a) * R - 1.5, sy + Math.sin(a) * R - 1.5, 3, 3); } }
      else if (kind === 4 && age < 10 && Array.isArray(eid)) {
        let px0 = sx, py0 = sy - 15;
        c.strokeStyle = `rgba(191,227,255,${1 - age / 10})`; c.lineWidth = 3; c.lineJoin = 'round';
        for (const id2 of eid) { const p = posOf.get(id2); if (!p) continue; const ex = p[0] * CS, ey = p[1] * CS - 6; c.beginPath(); c.moveTo(px0, py0); for (let q = 1; q < 5; q++) c.lineTo(lerp(px0, ex, q / 5) + (Math.random() - 0.5) * 10, lerp(py0, ey, q / 5) + (Math.random() - 0.5) * 10); c.lineTo(ex, ey); c.stroke(); px0 = ex; py0 = ey; }
        c.lineWidth = 1.2; c.strokeStyle = '#fff'; c.stroke();
      } else if (kind === 5 && age < 7) {
        const p = posOf.get(eid); if (!p) continue;
        const heat = (tx || 0) / 100, ex = p[0] * CS, ey = p[1] * CS - 6;
        c.strokeStyle = `rgba(255,${Math.round(150 - heat * 120)},${Math.round(220 - heat * 150)},.85)`; c.lineWidth = 3 + heat * 5; c.beginPath(); c.moveTo(sx, sy - 10); c.lineTo(ex, ey); c.stroke();
        c.strokeStyle = '#fff'; c.lineWidth = 1.5; c.stroke();
        c.fillStyle = '#ffd6ec'; c.beginPath(); c.arc(ex, ey, 4 + heat * 4 + Math.random() * 2, 0, 7); c.fill();
      }
    }
  }
  // hạt
  V.parts = V.parts.filter((p) => ++p.t < p.life);
  for (const p of V.parts) {
    if (p.k === 'spark') { p.x += p.vx; p.y += p.vy; p.vy += 0.004; c.fillStyle = p.col; c.globalAlpha = 1 - p.t / p.life; c.fillRect(p.x * CS - 3, p.y * CS - 3, 6, 6); c.globalAlpha = 1; }
    else if (p.k === 'ring') { c.strokeStyle = p.col; c.globalAlpha = 1 - p.t / p.life; c.lineWidth = 4; c.beginPath(); c.arc(p.x * CS, p.y * CS, p.r * CS * (0.4 + (p.t / p.life) * 0.6), 0, 7); c.stroke(); c.globalAlpha = 1; }
    else label(c, p.text, p.x * CS, p.y * CS - p.t * 0.5, { size: 15, color: p.col, w: 4 });
  }
  c.restore();
  hud(c, g, L);
}
function hud(c, g, L) {
  if (!L) return;
  c.fillStyle = 'rgba(29,22,72,.82)'; rr(c, W / 2 - 230, 6, 460, 36, 14); c.fill();
  const txt = L.ph === 'build' ? `⏳ Đợt ${L.wave + 1} tới sau ${Math.ceil(L.cd / 60)}s` : L.ph === 'wave' ? `⚔️ Đợt ${L.wave}/${g.waves} · còn ${L.left} con` : L.ph === 'win' ? '🎉 Giữ làng thành công!' : '💥 Làng bị phá!';
  label(c, txt, W / 2 - 60, 24, { size: 16, w: 3 });
  label(c, `❤️ ${L.lives}`, W / 2 + 150, 24, { size: 18, w: 3, color: L.lives <= 5 ? '#ff8787' : '#fff' });
  label(c, MAPS[g.map].name, 10, H - 14, { size: 12, align: 'left', w: 3 });
  if (V.banner) { V.banner.t++; if (V.banner.t > 110) V.banner = null; else label(c, V.banner.text, W / 2, H / 2 - 30, { size: 46, color: V.banner.hot ? '#ff4d5e' : '#ffd43b', w: 10, font: '"Bricolage Grotesque",system-ui' }); }
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
    c.strokeStyle = '#d9b06a'; c.lineWidth = 24; c.lineCap = 'round'; c.beginPath(); c.moveTo(-10, 40); c.lineTo(150, 40); c.lineTo(150, 85); c.lineTo(330, 85); c.stroke();
    drawTower(c, 'daibac', 110, 80, 1, 0, -0.8, t, 0); drawTower(c, 'dien', 200, 50, 2, 1, 0, t, 0); drawTower(c, 'laze', 270, 40, 3, 2, 1.6, t, 0);
    const mons = ['chuot', 'heo', 'rua', 'trau'];
    for (let i = 0; i < 4; i++) { const d = ((t * 0.8 + i * 70) % 400); const [x, y, f] = d < 160 ? [d, 40, 1] : d < 205 ? [150, 40 + d - 160, 1] : [150 + d - 205, 85, 1]; drawEnemy(c, mons[i], x, y, 26, t + i * 9, f); }
    requestAnimationFrame(step);
  };
  step();
}
