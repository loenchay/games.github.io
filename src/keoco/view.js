// Giao diện Kéo Co Gõ Phím: cảnh kéo co bên ao bùn (canvas) + ô gõ chữ / nút bấm nhanh / nút cổ vũ cho người xem.
import { wordAt, norm, TEAM, BEAT, BEAT_ON } from './logic.js';
import { LiveBuf, lerp, loop, label, rr, touchDev, blip, noise } from '../rt/common.js';

const W = 960, H = 420, CX = 480, GY = 300, PX = 2.3; // mỗi đơn vị dây = 2.3px
const TC = ['#ff4d5e', '#3b82f6'], TD = ['#b3213a', '#1f4fb0'];
const V = { ctx: null, buf: new LiveBuf(60), k: 0, gameId: -1, taps: 0, missAt: 0, missSent: false, parts: [], tick: 0, lastBeat: -1, lean: {}, lastPull: -1 };

function build(el) {
  el.innerHTML = `<div class="rt-wrap kc-wrap"><canvas class="rt-canvas kc-canvas" width="${W}" height="${H}"></canvas>
    <div class="panel kc-panel" id="kcPanel"></div></div>`;
  V.cv = el.querySelector('canvas'); V.c = V.cv.getContext('2d');
  loop(el, draw);
}
export const view = {
  phaseLabel: (ctx) => (ctx.game ? (ctx.game.mode === 'tap' ? 'Kéo co · bấm nhanh' : 'Kéo co · gõ chữ') : ''),
  render(el, ctx) {
    V.ctx = ctx;
    if (V.gameId !== ctx.pub.gameId) { V.gameId = ctx.pub.gameId; V.buf.reset(); V.k = 0; V.taps = 0; V.parts = []; V.lean = {}; el.innerHTML = ''; }
    if (!el.querySelector('canvas')) build(el);
    panel(el.querySelector('#kcPanel'), ctx);
  },
  fx(ev) {
    if (ev.type === 'go') { blip([[660, 0.1], [990, 0.25]], 'square', 0.05); V.banner = { text: 'KÉO!', t: 0 }; }
    else if (ev.type === 'end') { blip([[523, 0.12], [659, 0.12], [784, 0.3]], 'square', 0.05); noise(0.5, 0.08, 300); }
  },
};

// ---------- khung gõ chữ / bấm ----------
function panel(el, ctx) {
  const g = ctx.game, me = ctx.mySeat, playing = ctx.pub.phase === 'play';
  const key = `${ctx.pub.gameId}|${me}|${g.mode}|${playing}|${g.ph}`;
  if (el.dataset.key === key) return;
  el.dataset.key = key;
  if (!playing || g.ph === 'end') { el.innerHTML = `<div class="kc-done">${g.win < 0 ? '🤝 Hoà!' : `🏆 Đội <b style="color:${TC[g.win]}">${TEAM[g.win]}</b> thắng!`}</div>`; return; }
  if (me < 0) {
    el.innerHTML = `<div class="kc-cheer"><span class="muted">👀 Bạn đang xem — bấm để cổ vũ, mỗi lần cổ vũ kéo giúp một chút xíu!</span>
      <div class="kc-cheer-btns"><button class="btn big kc-red" data-ch="0">📣 Cổ vũ Đỏ</button><button class="btn big kc-blue" data-ch="1">📣 Cổ vũ Xanh</button></div></div>`;
    el.querySelectorAll('[data-ch]').forEach((b) => (b.onclick = () => { ctx.act({ t: 'cheer', team: Number(b.dataset.ch), e: ['📣', '👏', '🔥', '💪'][Math.floor(Math.random() * 4)] }); blip([[700, 0.04]], 'square', 0.02); }));
    return;
  }
  const t = g.team[me];
  if (g.mode === 'tap') {
    el.innerHTML = `<div class="kc-tap"><div class="kc-team" style="--tc:${TC[t]}">Bạn ở đội <b>${TEAM[t]}</b></div>
      <button class="kc-tapbtn" id="kcTap" style="--tc:${TC[t]}">💪 KÉO!<small>bấm thật nhanh · bấm đúng lúc <b>DÔ!</b> được gấp đôi</small></button>
      <div class="muted">${touchDev ? '' : 'Hoặc gõ phím <kbd>Space</kbd> / <kbd>J</kbd> / <kbd>F</kbd> liên tục'}</div></div>`;
    const b = el.querySelector('#kcTap');
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); tap(); b.classList.add('on'); });
    b.addEventListener('pointerup', () => b.classList.remove('on'));
    b.addEventListener('pointerleave', () => b.classList.remove('on'));
    return;
  }
  el.innerHTML = `<div class="kc-type"><div class="kc-team" style="--tc:${TC[t]}">Bạn ở đội <b>${TEAM[t]}</b> · <span id="kcCombo"></span></div>
    <div class="kc-word" id="kcWord"></div><div class="kc-next muted" id="kcNext"></div>
    <input id="kcIn" class="kc-in" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Gõ chữ ở trên rồi nó tự kéo — có dấu hay không dấu đều được" />
    <div class="muted kc-tip">Gõ đúng lúc <b>DÔ!</b> được kéo gấp đôi · gõ liền mạch không sai để tăng chuỗi 🔥</div></div>`;
  const inp = el.querySelector('#kcIn');
  inp.addEventListener('input', () => typed(inp));
  setTimeout(() => inp.focus(), 50);
}
addEventListener('keydown', (e) => {
  const ctx = V.ctx;
  if (!ctx?.game || ctx.mySeat < 0 || ctx.game.mode !== 'tap' || ctx.pub.phase !== 'play') return;
  if (e.target.closest?.('input, textarea')) return;
  if (['Space', 'KeyJ', 'KeyF', 'Enter'].includes(e.code)) { e.preventDefault(); if (!e.repeat) tap(); }
});
function tap() {
  const ctx = V.ctx;
  if (!ctx?.game || (V.buf.last?.ph || ctx.game.ph) !== 'pull') return;
  V.taps++;
  ctx.input({ taps: V.taps, n: 0 });
  if (V.taps % 2) blip([[300 + Math.random() * 60, 0.03]], 'square', 0.02);
}
function curWord() { const g = V.ctx.game; return wordAt(g.seed, V.ctx.mySeat, V.k, g.level); }
function typed(inp) {
  const ctx = V.ctx, g = ctx.game;
  if (!g || (V.buf.last?.ph || g.ph) !== 'pull') { inp.value = ''; return; }
  const w = curWord(), nw = norm(w), v = norm(inp.value).replace(/^ /, '');
  if (v === nw || v === nw + ' ') {
    ctx.act({ t: 'w', k: V.k });
    V.k++; inp.value = ''; V.missAt = 0; V.missSent = false;
    blip([[880, 0.04], [1175, 0.06]], 'square', 0.03);
    ctx.input({ n: 0, k: V.k });
    showWord();
    return;
  }
  const ok = nw.startsWith(v);
  inp.classList.toggle('bad', !ok);
  if (!ok) { V.missAt ||= performance.now(); } else { V.missAt = 0; V.missSent = false; }
  ctx.input({ n: ok ? v.length : 0, k: V.k });
  showWord(ok ? v.length : -1);
}
function showWord(n = 0) {
  const ctx = V.ctx, el = document.getElementById('kcWord');
  if (!el || ctx.mySeat < 0) return;
  const w = curWord(), nw = norm(w);
  // tô màu phần đã gõ (đếm theo chữ không dấu nhưng hiển thị chữ có dấu)
  const chars = [...w.normalize('NFC')];
  let html = '';
  chars.forEach((ch, i) => { html += `<span class="${n < 0 ? 'x' : i < n ? 'ok' : ''}">${ch === ' ' ? '&nbsp;' : ch}</span>`; });
  el.innerHTML = html;
  el.classList.toggle('shake', n < 0);
  const nx = document.getElementById('kcNext');
  if (nx) nx.textContent = 'tiếp: ' + wordAt(ctx.game.seed, ctx.mySeat, V.k + 1, ctx.game.level);
  void nw;
}

// ---------- vẽ cảnh ----------
function draw() {
  const ctx = V.ctx, c = V.c;
  if (!ctx || !c || !ctx.game) return;
  V.tick++;
  const g = ctx.game, me = ctx.mySeat;
  V.buf.feed(ctx.live());
  const smp = V.buf.sample();
  const L = smp ? smp.b : null;
  // đồng bộ chỉ số chữ với chủ phòng
  if (L && me >= 0 && g.mode === 'type') {
    const hi = L.idx[me];
    if (V.k < hi || V.k > hi + 2) { V.k = hi; const inp = document.getElementById('kcIn'); if (inp) inp.value = ''; showWord(); }
    if (!document.getElementById('kcWord')?.childNodes.length) showWord();
    if (V.missAt && !V.missSent && performance.now() - V.missAt > 350) { V.missSent = true; ctx.act({ t: 'miss' }); }
    const cb = document.getElementById('kcCombo'); if (cb) cb.textContent = L.combo[me] > 1 ? `🔥 chuỗi ${L.combo[me]}` : `${L.words[me]} chữ`;
  }
  const p = smp ? lerp(smp.a.p, smp.b.p, smp.k) : 0;
  const f = L ? L.f : 0;
  const beat = f % BEAT, on = beat >= BEAT_ON && L?.ph === 'pull';
  if (L && L.ph === 'pull') {
    const bi = Math.floor(f / BEAT);
    if (beat >= BEAT_ON && V.lastBeat !== bi) { V.lastBeat = bi; blip([[150, 0.12], [110, 0.15]], 'triangle', 0.09); noise(0.08, 0.05, 2000); }
    if (beat === 60 || beat === 120) blip([[220, 0.06]], 'triangle', 0.05);
  }
  // nền
  const sky = c.createLinearGradient(0, 0, 0, GY);
  sky.addColorStop(0, '#8fd3ff'); sky.addColorStop(1, '#dff4ff');
  c.fillStyle = sky; c.fillRect(0, 0, W, H);
  c.fillStyle = '#fff3b0'; c.beginPath(); c.arc(820, 70, 34, 0, 7); c.fill();
  c.fillStyle = '#9fd38a'; c.beginPath(); c.moveTo(0, 220); for (let x = 0; x <= W; x += 40) c.lineTo(x, 200 + Math.sin(x / 90) * 18); c.lineTo(W, GY); c.lineTo(0, GY); c.fill();
  // cờ đuôi nheo
  for (let i = 0; i < 24; i++) {
    const x = 20 + i * 40, y = 30 + Math.sin(i / 23 * Math.PI) * 26;
    c.fillStyle = ['#ff4d5e', '#ffd43b', '#3b82f6', '#2fbf71'][i % 4];
    c.beginPath(); c.moveTo(x, y); c.lineTo(x + 24, y + 2); c.lineTo(x + 12, y + 22 + Math.sin(V.tick / 10 + i) * 2); c.fill();
  }
  c.strokeStyle = '#6b4a2b'; c.lineWidth = 2; c.beginPath(); for (let i = 0; i <= 24; i++) { const x = 20 + i * 40, y = 30 + Math.sin(i / 23 * Math.PI) * 26; i ? c.lineTo(x, y) : c.moveTo(x, y); } c.stroke();
  // mặt đất
  c.fillStyle = '#6cbf4f'; c.fillRect(0, GY - 20, W, H - GY + 20);
  c.fillStyle = '#5aa841'; for (let i = 0; i < 60; i++) c.fillRect((i * 97) % W, GY - 14 + ((i * 53) % 110), 6, 2);
  // ao bùn giữa sân
  c.fillStyle = '#6b4a2b'; c.beginPath(); c.ellipse(CX, GY + 18, 120, 28, 0, 0, 7); c.fill();
  c.fillStyle = '#7d5a36'; c.beginPath(); c.ellipse(CX, GY + 14, 104, 20, 0, 0, 7); c.fill();
  c.fillStyle = 'rgba(255,255,255,.18)'; for (let i = 0; i < 5; i++) c.fillRect(CX - 70 + i * 32 + Math.sin(V.tick / 20 + i) * 4, GY + 10 + (i % 2) * 8, 18, 2);
  // vạch thắng
  for (const t of [0, 1]) {
    const x = CX + (t ? 1 : -1) * 100 * PX;
    c.strokeStyle = '#fff'; c.lineWidth = 5; c.setLineDash([12, 8]); c.beginPath(); c.moveTo(x, GY - 26); c.lineTo(x, H - 10); c.stroke(); c.setLineDash([]);
    c.fillStyle = TC[t]; c.beginPath(); c.moveTo(x, GY - 70); c.lineTo(x + (t ? 26 : -26), GY - 60); c.lineTo(x, GY - 50); c.fill();
    c.strokeStyle = '#4a3a2a'; c.lineWidth = 3; c.beginPath(); c.moveTo(x, GY - 72); c.lineTo(x, GY - 26); c.stroke();
  }
  // dây + người
  const rx = CX + p * PX;
  const recent = {};
  if (L) for (const [seat, a, dbl, pf] of L.pulls) if (L.f - pf < 14) recent[seat] = Math.max(recent[seat] || 0, (dbl ? 2 : 1) * (1 - (L.f - pf) / 14));
  const ppl = [];
  for (const t of [0, 1]) {
    const mem = g.team.map((x, i) => (x === t ? i : -1)).filter((i) => i >= 0);
    // đông người thì đứng sát lại, thu nhỏ, tên so le cho khỏi đè nhau
    const m = mem.length, sp = Math.min(78, 300 / Math.max(1, m - 1)), sc = m > 6 ? 0.72 : m > 4 ? 0.84 : 1;
    mem.forEach((i, k) => ppl.push({ i, t, k, sc, ly: m > 3 ? (k % 2) * 30 : 0, x: rx + (t ? 1 : -1) * (150 + k * sp) }));
  }
  const ry = GY - 52;
  const ends = ppl.reduce((m, q) => [Math.min(m[0], q.x), Math.max(m[1], q.x)], [rx - 160, rx + 160]);
  c.strokeStyle = '#c9a25a'; c.lineWidth = 7; c.beginPath(); c.moveTo(ends[0] - 30, ry + 6);
  c.quadraticCurveTo(rx, ry + 8 + Math.sin(V.tick / 3) * (on ? 2 : 0.6), ends[1] + 30, ry + 6); c.stroke();
  c.strokeStyle = '#a07d3c'; c.lineWidth = 2; c.setLineDash([6, 6]); c.beginPath(); c.moveTo(ends[0] - 30, ry + 6); c.quadraticCurveTo(rx, ry + 8, ends[1] + 30, ry + 6); c.stroke(); c.setLineDash([]);
  // dải lụa giữa dây
  c.fillStyle = '#ff2e4d'; c.beginPath(); c.moveTo(rx - 6, ry + 6); c.lineTo(rx + 6, ry + 6); c.lineTo(rx + 10 + Math.sin(V.tick / 6) * 4, ry + 46); c.lineTo(rx - 10 + Math.sin(V.tick / 6) * 4, ry + 46); c.fill();
  c.strokeStyle = '#1d1648'; c.lineWidth = 2; c.stroke();
  const end = g.ph === 'end' || L?.ph === 'end';
  for (const q of ppl) person(c, q, g, L, recent[q.i] || 0, end, me);
  // cổ vũ bay lên
  if (L) for (const [t, e, cf] of L.cl) {
    const a = (L.f - cf) / 90, x = (t ? W - 120 : 120) + Math.sin(cf * 1.7) * 70;
    c.globalAlpha = 1 - a; c.font = '28px system-ui'; c.textAlign = 'center'; c.fillText(e, x, 260 - a * 160); c.globalAlpha = 1;
  }
  // HUD trên
  if (L) {
    const sec = Math.max(0, Math.ceil(L.left / 60));
    c.fillStyle = 'rgba(29,22,72,.85)'; rr(c, CX - 70, 10, 140, 46, 16); c.fill();
    label(c, L.ph === 'intro' ? 'Chuẩn bị' : `⏱ ${sec}s`, CX, 33, { size: 22, color: sec <= 10 && L.ph === 'pull' ? '#ff8787' : '#fff' });
    for (const t of [0, 1]) {
      const n = g.team.reduce((s, x, i) => s + (x === t ? (g.mode === 'tap' ? L.taps[i] : L.words[i]) : 0), 0);
      label(c, `Đội ${TEAM[t]} · ${n} ${g.mode === 'tap' ? 'lần kéo' : 'chữ'} · 📣${L.cheer[t]}`, t ? W - 20 : 20, 84, { size: 15, align: t ? 'right' : 'left', color: '#fff', stroke: TD[t] });
    }
    // nhịp hò dô
    if (L.ph === 'pull') {
      const bw = 220, bx = CX - bw / 2, by = 66;
      c.fillStyle = 'rgba(29,22,72,.75)'; rr(c, bx, by, bw, 20, 10); c.fill();
      c.fillStyle = on ? '#ffd43b' : '#ffffff55'; rr(c, bx + 3, by + 3, (bw - 6) * Math.min(1, beat / BEAT_ON), 14, 7); c.fill();
      if (on) label(c, 'DÔ!', CX, 130, { size: 64, color: '#ffd43b', w: 10, font: '"Bricolage Grotesque",system-ui' });
      else label(c, beat < 80 ? 'HÒ...' : beat < 160 ? 'HÒ...' : 'chuẩn bị...', CX, 105, { size: 18 });
    }
    if (L.ph === 'intro') { const n = 3 - Math.floor(L.pt / 60); label(c, String(Math.max(1, n)), CX, 170, { size: 110, color: '#ffd43b', w: 12, font: '"Bricolage Grotesque",system-ui' }); }
    if (end) label(c, L.win < 0 ? 'HOÀ!' : `ĐỘI ${TEAM[L.win].toUpperCase()} THẮNG!`, CX, 160, { size: 60, color: L.win < 0 ? '#fff' : TC[L.win], w: 12, font: '"Bricolage Grotesque",system-ui' });
  }
  if (V.banner) { V.banner.t++; if (V.banner.t > 40) V.banner = null; else label(c, V.banner.text, CX, 170, { size: 110, color: '#ffd43b', w: 12, font: '"Bricolage Grotesque",system-ui' }); }
}
function person(c, q, g, L, jerk, end, me) {
  const t = q.t, dir = t ? 1 : -1; // người đội Đỏ đứng bên trái, ngả về trái
  const p = g.names[q.i] && ctxPlayer(q.i);
  let x = q.x, y = GY;
  const lost = end && L && L.win >= 0 && L.win !== t;
  const won = end && L && L.win === t;
  let lean = 0.42 + jerk * 0.25;
  if (won) { y -= Math.abs(Math.sin(V.tick / 6 + q.i)) * 18; lean = 0.1; }
  // đội thua: người đứng đầu ngã xuống bùn
  const first = lost && Math.abs(q.x - (CX + (L.p * PX))) < 160;
  if (first) { x = CX + dir * 30; y = GY + 22; lean = -1.2 * dir * dir; }
  c.save(); c.translate(x, y); c.scale(q.sc || 1, q.sc || 1);
  // chân
  c.strokeStyle = '#1d1648'; c.lineWidth = 7; c.lineCap = 'round';
  c.beginPath(); c.moveTo(0, -40); c.lineTo(dir * 18, 0); c.moveTo(0, -40); c.lineTo(-dir * 14, -2); c.stroke();
  // thân ngả
  c.rotate(dir * lean);
  c.fillStyle = TC[t]; c.strokeStyle = '#1d1648'; c.lineWidth = 3;
  rr(c, -13, -86, 26, 48, 10); c.fill(); c.stroke();
  // tay nắm dây về phía giữa
  c.lineWidth = 6; c.strokeStyle = '#f2c9a0';
  c.beginPath(); c.moveTo(0, -74); c.lineTo(-dir * 34, -60); c.stroke();
  // đầu
  c.fillStyle = '#ffe0bd'; c.beginPath(); c.arc(0, -100, 17, 0, 7); c.fill(); c.lineWidth = 3; c.strokeStyle = '#1d1648'; c.stroke();
  c.font = '24px system-ui'; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText(g.bot[q.i] ? '🤖' : p?.av?.e || '🙂', 0, -99);
  c.restore();
  if (first) { c.fillStyle = '#6b4a2b'; for (let k = 0; k < 6; k++) c.fillRect(x - 20 + k * 8, y - 8 - Math.abs(Math.sin(V.tick / 5 + k)) * 10, 5, 5); }
  // tên + tiến độ gõ
  const isMe = q.i === me;
  const hy = y - 140 * (q.sc || 1) - (q.ly || 0);
  label(c, (isMe ? '▼ ' : '') + g.names[q.i], x, hy, { size: isMe ? 15 : 13, color: isMe ? '#ffd43b' : '#fff', stroke: TD[t] });
  if (L && g.mode === 'type' && L.ph === 'pull') {
    const w = wordAt(g.seed, q.i, L.idx[q.i], g.level), n = Math.min(norm(w).length, L.bt[q.i] || 0);
    // đội đông: chỉ hiện thanh tiến độ gọn cho người khác, chữ đầy đủ cho mình
    if ((q.sc || 1) < 1 && !isMe) {
      const bw = 40;
      c.fillStyle = 'rgba(255,255,255,.9)'; rr(c, x - bw / 2, hy - 24, bw, 7, 3); c.fill();
      c.fillStyle = '#2fbf71'; rr(c, x - bw / 2, hy - 24, bw * (n / Math.max(1, norm(w).length)), 7, 3); c.fill();
      if (L.combo[q.i] > 2) label(c, `🔥${L.combo[q.i]}`, x, hy - 36, { size: 11, w: 3 });
      return;
    }
    c.font = '700 13px system-ui';
    const tw = c.measureText(w).width + 16;
    c.fillStyle = 'rgba(255,255,255,.92)'; rr(c, x - tw / 2, hy - 36, tw, 22, 10); c.fill();
    c.fillStyle = '#2fbf71'; rr(c, x - tw / 2, hy - 18, tw * (n / Math.max(1, norm(w).length)), 4, 2); c.fill();
    c.fillStyle = '#1d1648'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(w, x, hy - 25);
    if (L.combo[q.i] > 2) label(c, `🔥${L.combo[q.i]}`, x + tw / 2 + 14, hy - 25, { size: 12 });
  }
}
function ctxPlayer(seat) { return V.ctx.player(seat); }

export function keocoDemo(el) {
  el.innerHTML = '<canvas width="320" height="120" class="rt-demo"></canvas>';
  const c = el.firstChild.getContext('2d');
  let t = 0;
  const step = () => {
    if (!el.isConnected) return;
    t++;
    c.fillStyle = '#bfe8ff'; c.fillRect(0, 0, 320, 120); c.fillStyle = '#6cbf4f'; c.fillRect(0, 84, 320, 36);
    c.fillStyle = '#6b4a2b'; c.beginPath(); c.ellipse(160, 92, 40, 9, 0, 0, 7); c.fill();
    const off = Math.sin(t / 30) * 18;
    c.strokeStyle = '#c9a25a'; c.lineWidth = 3; c.beginPath(); c.moveTo(30, 66); c.lineTo(290, 66); c.stroke();
    c.fillStyle = '#ff2e4d'; c.fillRect(158 + off, 66, 5, 14);
    for (let k = 0; k < 4; k++) { const x = k < 2 ? 70 - k * 34 + off : 250 - (k - 2) * 34 + off; const tc = k < 2 ? '#ff4d5e' : '#3b82f6'; c.save(); c.translate(x, 84); c.rotate((k < 2 ? -1 : 1) * 0.4); c.fillStyle = tc; c.fillRect(-6, -30, 12, 20); c.fillStyle = '#ffe0bd'; c.beginPath(); c.arc(0, -36, 7, 0, 7); c.fill(); c.restore(); }
    requestAnimationFrame(step);
  };
  step();
}
