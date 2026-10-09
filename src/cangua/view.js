// Giao diện Cờ Cá Ngựa: bàn 15×15 vẽ bằng SVG, ngựa là các nút đặt chồng lên (trượt từng ô khi đi).
import { COLOR_VN, LAST, GOAL, legal } from './logic.js';

export const HEX = { red: '#ff4d5e', blue: '#3b82f6', green: '#2fbf71', yellow: '#ffc43d' };
const SOFT = { red: '#ffd6da', blue: '#d6e6ff', green: '#d3f5e2', yellow: '#fff1c7' };
// 52 ô đường đua (hàng, cột), bắt đầu từ ô xuất phát của Đỏ
export const TRACK_RC = (() => {
  const r = [];
  for (let c = 1; c <= 5; c++) r.push([6, c]);
  for (let y = 5; y >= 0; y--) r.push([y, 6]);
  r.push([0, 7], [0, 8]);
  for (let y = 1; y <= 5; y++) r.push([y, 8]);
  for (let c = 9; c <= 14; c++) r.push([6, c]);
  r.push([7, 14], [8, 14]);
  for (let c = 13; c >= 9; c--) r.push([8, c]);
  for (let y = 9; y <= 14; y++) r.push([y, 8]);
  r.push([14, 7], [14, 6]);
  for (let y = 13; y >= 9; y--) r.push([y, 6]);
  for (let c = 5; c >= 0; c--) r.push([8, c]);
  r.push([7, 0], [6, 0]);
  return r;
})();
const START_I = { red: 0, blue: 13, green: 26, yellow: 39 };
const HOME_RC = {
  red: [1, 2, 3, 4, 5].map((c) => [7, c]), blue: [1, 2, 3, 4, 5].map((r) => [r, 7]),
  green: [13, 12, 11, 10, 9].map((c) => [7, c]), yellow: [13, 12, 11, 10, 9].map((r) => [r, 7]),
};
const YARD = { red: [0, 0], blue: [0, 9], green: [9, 9], yellow: [9, 0] };
const GOAL_C = { red: [7.5, 6.55], blue: [6.55, 7.5], green: [7.5, 8.45], yellow: [8.45, 7.5] };
// toạ độ tâm (đơn vị ô) của ngựa k màu `col` ở tiến độ p
export function coord(col, p, k) {
  if (p < 0) { const [r0, c0] = YARD[col]; return [r0 + (k < 2 ? 2 : 4), c0 + (k % 2 ? 4 : 2)]; }
  if (p <= LAST) { const [r, c] = TRACK_RC[(START_I[col] + p) % 52]; return [r + 0.5, c + 0.5]; }
  if (p < GOAL) { const [r, c] = HOME_RC[col][p - LAST - 1]; return [r + 0.5, c + 0.5]; }
  const [r, c] = GOAL_C[col], o = [[-0.28, -0.28], [-0.28, 0.28], [0.28, -0.28], [0.28, 0.28]][k];
  return [r + o[0] * 0.9, c + o[1] * 0.9];
}

function boardSVG() {
  const S = 40;
  let g = '';
  const cell = (r, c, fill, extra = '') => `<rect x="${c * S}" y="${r * S}" width="${S}" height="${S}" fill="${fill}" stroke="#1d1648" stroke-width="1.5" ${extra}/>`;
  for (const [col, [r0, c0]] of Object.entries(YARD)) {
    g += `<rect x="${c0 * S}" y="${r0 * S}" width="${6 * S}" height="${6 * S}" fill="${HEX[col]}" stroke="#1d1648" stroke-width="2.5"/>`;
    g += `<rect x="${(c0 + 0.8) * S}" y="${(r0 + 0.8) * S}" width="${4.4 * S}" height="${4.4 * S}" rx="22" fill="#fffaf0" stroke="#1d1648" stroke-width="2.5"/>`;
    for (let k = 0; k < 4; k++) { const [y, x] = coord(col, -1, k); g += `<circle cx="${x * S}" cy="${y * S}" r="${S * 0.62}" fill="${SOFT[col]}" stroke="#1d1648" stroke-width="2" stroke-dasharray="5 4"/>`; }
  }
  TRACK_RC.forEach(([r, c], i) => {
    const st = Object.entries(START_I).find(([, v]) => v === i)?.[0];
    g += cell(r, c, st ? HEX[st] : '#fffaf0');
    if (st) g += `<text x="${c * S + S / 2}" y="${r * S + S / 2 + 7}" text-anchor="middle" class="lg-star">★</text>`;
  });
  for (const [col, cells] of Object.entries(HOME_RC)) cells.forEach(([r, c], i) => { g += cell(r, c, HEX[col]); g += `<text x="${c * S + S / 2}" y="${r * S + S / 2 + 6}" text-anchor="middle" class="lg-num">${i + 1}</text>`; });
  const C = 6 * S, D = 9 * S, M = 7.5 * S;
  g += `<polygon points="${C},${C} ${C},${D} ${M},${M}" fill="${HEX.red}" stroke="#1d1648" stroke-width="2"/>`;
  g += `<polygon points="${C},${C} ${D},${C} ${M},${M}" fill="${HEX.blue}" stroke="#1d1648" stroke-width="2"/>`;
  g += `<polygon points="${D},${C} ${D},${D} ${M},${M}" fill="${HEX.green}" stroke="#1d1648" stroke-width="2"/>`;
  g += `<polygon points="${C},${D} ${D},${D} ${M},${M}" fill="${HEX.yellow}" stroke="#1d1648" stroke-width="2"/>`;
  g += `<text x="${M}" y="${M + 9}" text-anchor="middle" class="lg-goal">🏁</text>`;
  return `<svg viewBox="0 0 600 600" class="lg-svg">${g}<rect x="1.5" y="1.5" width="597" height="597" rx="14" fill="none" stroke="#1d1648" stroke-width="3"/></svg>`;
}
const PIPS = { 1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8] };
export const dieHTML = (n, cls = '') => `<div class="lg-die ${cls}">${Array.from({ length: 9 }, (_, i) => `<i class="${PIPS[n]?.includes(i) ? 'on' : ''}"></i>`).join('')}</div>`;

export const view = {
  phaseLabel(ctx) { const g = ctx.game; return g ? `Lượt ${ctx.player(g.turn)?.name ?? ''}` : ''; },
  render(el, ctx) {
    const g = ctx.game, me = ctx.mySeat, pub = ctx.pub, L = ctx.local;
    this.ctx = ctx;
    if (!el.dataset.init) {
      el.dataset.init = '1';
      el.innerHTML = `<div class="lg-wrap"><div class="panel lg-boardp"><div class="lg-board" id="lgBoard">${boardSVG()}<div class="lg-marks" id="lgMarks"></div><div class="lg-tokens" id="lgTokens"></div></div></div>
        <div class="lg-side"><div class="panel lg-dice" id="lgDice"></div><div class="panel lg-players" id="lgPlayers"></div></div></div>`;
      el.addEventListener('click', (e) => {
        const c = this.ctx;
        const t = e.target.closest('[data-k]');
        if (t && t.classList.contains('can')) return c.act({ t: 'move', k: Number(t.dataset.k) });
        if (e.target.closest('[data-roll]')) return c.act({ t: 'roll' });
      });
      L.pos = {};
    }
    const myTurn = me >= 0 && g.turn === me && pub.phase === 'play';
    const movable = myTurn && g.phase === 'move' ? new Set(g.moves.map((m) => m.k)) : new Set();
    // ngựa
    const tk = el.querySelector('#lgTokens');
    g.colors.forEach((col, seat) => g.horses[seat].forEach((p, k) => {
      const id = `t${seat}-${k}`;
      let t = tk.querySelector('#' + id);
      if (!t) { t = document.createElement('button'); t.id = id; t.className = 'lg-tok'; t.style.setProperty('--hc', HEX[col]); t.dataset.k = k; t.innerHTML = `<span>🐴</span>`; tk.appendChild(t); place(t, coord(col, p, k)); L.pos[id] = p; }
      t.dataset.k = k;
      t.classList.toggle('can', seat === me && movable.has(k));
      t.classList.toggle('mine', seat === me);
      t.classList.toggle('turn', seat === g.turn);
      t.title = `${ctx.player(seat)?.name ?? ''} — ngựa ${k + 1}`;
      const was = L.pos[id];
      if (was !== p) {
        L.pos[id] = p;
        clearTimeout(t._tm);
        if (was >= 0 && p > was && p - was <= 6) {
          // trượt từng ô
          let q = was;
          const stepF = () => { q++; place(t, coord(col, q, k)); t.classList.add('hop'); setTimeout(() => t.classList.remove('hop'), 120); if (q < p) t._tm = setTimeout(stepF, 160); };
          stepF();
        } else place(t, coord(col, p, k));
      }
    }));
    // đích đến gợi ý
    const marks = el.querySelector('#lgMarks');
    marks.innerHTML = myTurn && g.phase === 'move' ? g.moves.map((m) => { const [y, x] = coord(g.colors[me], m.to, m.k); return `<i class="lg-mark ${m.kick ? 'kick' : ''}" style="left:${(x / 15) * 100}%;top:${(y / 15) * 100}%"></i>`; }).join('') : '';
    // xúc xắc + nút
    const dice = el.querySelector('#lgDice');
    const tp = ctx.player(g.turn), tcol = g.colors[g.turn];
    const fresh = L.seq !== g.seq && g.last?.t === 'roll';
    L.seq = g.seq;
    let msg;
    if (pub.phase !== 'play') msg = '🏁 Ván đã xong.';
    else if (myTurn) msg = g.phase === 'roll' ? (g.die === 6 ? '🎉 Đổ 6 — được đổ thêm lượt!' : '👉 Tới lượt bạn — bấm đổ xúc xắc!') : '👉 Chọn ngựa đang nhún nhảy để đi.';
    else msg = `⏳ ${ctx.esc(tp?.name ?? '')} (${COLOR_VN[tcol]}) ${g.phase === 'roll' ? 'đang đổ...' : 'đang chọn ngựa...'}`;
    dice.style.setProperty('--hc', HEX[tcol]);
    dice.innerHTML = `<div class="lg-drow">${dieHTML(g.die || 1, `${fresh ? 'roll' : ''} ${g.die ? '' : 'idle'}`)}
      <div class="lg-dmsg"><b style="color:${HEX[tcol]}">${ctx.esc(tp?.name ?? '')}</b><span>${msg}</span></div></div>
      ${myTurn && g.phase === 'roll' ? '<button class="btn primary big lg-rollbtn" data-roll>🎲 Đổ xúc xắc</button>' : ''}`;
    // người chơi
    el.querySelector('#lgPlayers').innerHTML = g.colors.map((col, seat) => {
      const p = ctx.player(seat), home = g.horses[seat].filter((x) => x === GOAL).length, out = g.horses[seat].filter((x) => x >= 0 && x < GOAL).length;
      return `<div class="lg-pl ${seat === g.turn && pub.phase === 'play' ? 'turn' : ''} ${p && !p.connected ? 'offline' : ''}" style="--hc:${HEX[col]}">
        <span class="lg-dot"></span>${ctx.avatarHTML(p, 'sm')}<b>${ctx.esc(p?.name ?? '?')}${seat === me ? ' (bạn)' : ''}</b>
        <span class="lg-cnt" title="Đang chạy / về đích">🐴${out} · 🏁${home}/4</span></div>`;
    }).join('');
    void legal;
  },
  fx(ev, ctx) {
    if (ev.type === 'roll') ctx.beep([[420, 0.03], [520, 0.03], [460, 0.03], [600, 0.05]], 'square', 0.04);
    else if (ev.type === 'move') {
      if (ev.kick) { ctx.beep([[200, 0.08], [140, 0.15]], 'sawtooth', 0.06); const b = document.querySelector('.lg-board'); b?.classList.remove('shake'); void b?.offsetWidth; b?.classList.add('shake'); }
      else if (ev.to === GOAL) ctx.beep([[660, 0.06], [880, 0.06], [1100, 0.1]], 'triangle', 0.06);
      else ctx.beep([[520, 0.04]], 'triangle', 0.05);
    }
  },
};
function place(t, [y, x]) { t.style.left = `${(x / 15) * 100}%`; t.style.top = `${(y / 15) * 100}%`; }
