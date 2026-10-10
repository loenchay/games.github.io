// Giao diện Đá Gà Pixel: vẽ ở độ phân giải thấp 320×200 rồi phóng to giữ nét pixel; chữ/tên vẽ ở lớp phân giải cao.
import { BREEDS, ITEMS, BIT } from './logic.js';
import { LiveBuf, lerp, loop, pixelSprite, shade, label, rr, touchDev, blip, noise } from '../rt/common.js';
import { Input } from '../fight/input.js';
import { B } from '../fight/sim.js';

const LW = 320, LH = 200, SC = 3, W = LW * SC, H = LH * SC;
const CX = 160, CY = 122, KX = 140 / 150, KY = (140 / 150) * 0.5;
const toS = (x, y) => [CX + x * KX, CY + y * KY];

// ----- ảnh gà 16×16 (quay sang phải) -----
const BODY = [
  '................',
  '..........rr....',
  '.........rrr....',
  '........bbbb....',
  '........bbwe....',
  '..t.....bbbbyy..',
  '.tt....bbbbbr...',
  'tt.t..bbbbbbr...',
  't.ttbbbbbbbb....',
  '.tbbblllbbbb....',
  '..bbbllllbbd....',
  '..dbbbbbbbdd....',
  '...ddbbbbdd.....',
];
const LEGS = {
  idle: ['.....y..y.......', '.....y..y.......', '....yy.yy.......'],
  w1: ['.....y...y......', '....y....y......', '...yy...yy......'],
  w2: ['......yy........', '......y.y.......', '.....yy.yy......'],
  dash: ['...y....y.......', '..y....y........', '.yy...yy........'],
  jump: ['.....yy.yy......', '................', '................'],
};
const WING_UP = ['.....lll........', '....llll........'];
function frame(kind) {
  const rows = BODY.slice();
  if (kind === 'jump') { rows[6] = rows[6].slice(0, 3) + 'll' + rows[6].slice(5); rows[7] = rows[7].slice(0, 4) + 'lll' + rows[7].slice(7); rows[5] = WING_UP[0].slice(0, 6) + rows[5].slice(6); }
  if (kind === 'dash') { for (let i = 0; i < 13; i++) rows[i] = '.' + rows[i].slice(0, 15); }
  return rows.concat(LEGS[kind] || LEGS.idle);
}
const KINDS = ['idle', 'w1', 'w2', 'dash', 'jump'];
const sprCache = new Map();
function sprite(breed, kind, flip, stunned) {
  const key = `${breed}|${kind}|${flip}|${stunned}`;
  let s = sprCache.get(key);
  if (!s) {
    const br = BREEDS[breed];
    const pal = { b: br.c, d: shade(br.c, -0.28), l: shade(br.c, 0.45), r: '#ff3b4e', y: '#ffb321', w: '#ffffff', e: stunned ? '#ff3b4e' : '#14101f', t: br.t };
    s = pixelSprite(frame(kind), pal, '#1d1648', flip);
    sprCache.set(key, s);
  }
  return s;
}
const ITEM_SPR = {
  corn: pixelSprite(['..g.', '.yyg', 'yyyy', 'yyyy', 'yyy.', '.yy.'], { y: '#ffd43b', g: '#47b85a' }),
  chili: pixelSprite(['...g', '..gg', '.rr.', 'rrr.', 'rr..', 'r...'], { r: '#ff3b30', g: '#47b85a' }),
  banana: pixelSprite(['y.....', 'yy....', '.yy..y', '..yyyy', '...yy.'], { y: '#ffd43b' }),
};

// ----- trạng thái giao diện -----
const V = { ctx: null, buf: new LiveBuf(70), parts: [], input: null, hdir: [], shake: 0, banner: null, gameId: -1, tick: 0, lastPh: '' };

function build(el, ctx) {
  el.innerHTML = `<div class="rt-wrap dg-wrap"><canvas class="rt-canvas" width="${W}" height="${H}"></canvas>
    <div class="rt-hint">${touchDev ? '' : 'Di chuyển: <kbd>W A S D</kbd> / <kbd>←↑↓→</kbd> · <b>Húc</b>: <kbd>J</kbd> / <kbd>Space</kbd> · <b>Nhảy</b>: <kbd>K</kbd> (né đòn, đáp xuống đầu gà khác để dẫm choáng)'}</div>
    <div class="qc-pad rt-pad hidden" id="dgPad"></div></div>`;
  const cv = el.querySelector('canvas');
  const low = document.createElement('canvas'); low.width = LW; low.height = LH;
  V.cv = cv; V.c = cv.getContext('2d'); V.low = low; V.lc = low.getContext('2d');
  V.input ||= new Input();
  V.input.buildTouch(el.querySelector('#dgPad'), [], [[B.LP, '🐓 Húc', 'sp'], [B.LK, '🪶 Nhảy', 'sup']]);
  loop(el, draw);
}

export const view = {
  phaseLabel: (ctx) => { const g = ctx.game; return g ? (g.ph === 'over' ? 'Hết trận' : `Hiệp ${g.round} · thắng ${g.need} hiệp`) : ''; },
  render(el, ctx) {
    V.ctx = ctx;
    if (V.gameId !== ctx.pub.gameId) { V.gameId = ctx.pub.gameId; V.buf.reset(); V.parts = []; V.hdir = []; }
    if (!el.querySelector('canvas')) build(el, ctx);
    const pad = el.querySelector('#dgPad');
    pad.classList.toggle('hidden', !(touchDev && ctx.mySeat >= 0 && ctx.pub.phase === 'play'));
  },
  fx(ev, ctx) {
    const at = (x, y) => toS(x, y);
    if (ev.type === 'hit' || ev.type === 'stomp' || ev.type === 'clash') {
      const [sx, sy] = at(ev.x, ev.y);
      const col = ev.j !== undefined && ctx.game ? BREEDS[ctx.game.breed[ev.j]].c : '#fff';
      for (let k = 0; k < (ev.big ? 14 : 8); k++) V.parts.push({ k: 'feather', x: sx, y: sy - 6, vx: (Math.random() - 0.5) * 3, vy: -Math.random() * 2.2, t: 0, life: 50 + Math.random() * 30, col });
      V.parts.push({ k: 'star', x: sx, y: sy - 8, t: 0, life: 14 });
      V.shake = ev.big ? 10 : 5;
      noise(0.12, ev.big ? 0.12 : 0.07, 1200); blip([[ev.big ? 160 : 220, 0.08]], 'square', 0.05);
    } else if (ev.type === 'fall') {
      const [sx, sy] = at(ev.x, ev.y);
      for (let k = 0; k < 16; k++) V.parts.push({ k: 'mud', x: sx, y: sy, vx: (Math.random() - 0.5) * 2.6, vy: -1 - Math.random() * 2, t: 0, life: 40 });
      noise(0.35, 0.09, 300); blip([[300, 0.1], [200, 0.1], [120, 0.18]], 'triangle', 0.05);
    } else if (ev.type === 'dash') { blip([[ev.big ? 520 : 420, 0.05]], 'sawtooth', 0.025); }
    else if (ev.type === 'jump') blip([[500, 0.05], [700, 0.06]], 'square', 0.025);
    else if (ev.type === 'item') { blip([[880, 0.06], [1320, 0.09]], 'square', 0.04); const [sx, sy] = at(ev.x, ev.y); V.parts.push({ k: 'text', x: sx, y: sy - 14, t: 0, life: 50, text: ev.k === 'corn' ? 'BẮP! HÚC MẠNH' : 'ỚT! CHẠY NHANH', col: ev.k === 'corn' ? '#ffd43b' : '#ff6b6b' }); }
    else if (ev.type === 'slip') { blip([[600, 0.05], [300, 0.15]], 'triangle', 0.04); const [sx, sy] = at(ev.x, ev.y); V.parts.push({ k: 'text', x: sx, y: sy - 14, t: 0, life: 45, text: 'TRƯỢT!', col: '#fff' }); }
    else if (ev.type === 'go') { V.banner = { text: 'ĐÁ!', t: 0, big: 1 }; blip([[660, 0.1], [990, 0.2]], 'square', 0.05); }
    else if (ev.type === 'round') {
      const g = ctx.game, nm = ev.w >= 0 && g ? g.names[ev.w] : '';
      V.banner = { text: ev.w >= 0 ? `${nm} THẮNG HIỆP!` : 'HOÀ!', t: 0 };
      blip([[523, 0.1], [659, 0.1], [784, 0.2]], 'square', 0.05);
    }
  },
};

function draw() {
  const ctx = V.ctx, c = V.c, l = V.lc;
  if (!ctx || !c) return;
  V.tick++;
  const g = ctx.game;
  // gửi phím
  const me = ctx.mySeat;
  if (V.input) {
    V.input.enabled = me >= 0 && ctx.pub.phase === 'play';
    if (me >= 0 && ctx.pub.phase === 'play') ctx.input(V.input.bits());
  }
  V.buf.feed(ctx.live());
  const smp = V.buf.sample();
  // ---- nền (độ phân giải thấp) ----
  l.imageSmoothingEnabled = false;
  const Rnow = smp ? lerp(smp.a.R, smp.b.R, smp.k) : 150;
  camera(Rnow);
  drawBack(l, Rnow);
  if (!smp || !g) { blit(c); label(c, 'Đang chờ chủ phòng...', W / 2, H / 2, { size: 28 }); return; }
  const A = smp.a, Bb = smp.b, k = smp.k;
  // vật phẩm
  for (const it of Bb.it) {
    const [sx, sy] = toS(it[2], it[3]);
    const s = ITEM_SPR[it[1]];
    const bob = it[1] === 'banana' ? 0 : Math.round(Math.sin(V.tick / 10 + it[0]) * 1.5);
    l.fillStyle = 'rgba(0,0,0,.25)'; l.fillRect(Math.round(sx - 3), Math.round(sy), 6, 1);
    l.drawImage(s, Math.round(sx - s.width / 2), Math.round(sy - s.height + bob));
  }
  // gà (vẽ theo chiều sâu)
  const list = [];
  Bb.c.forEach((cb, i) => {
    const ca = A.c[i] || cb;
    const x = lerp(ca[0], cb[0], k), y = lerp(ca[1], cb[1], k);
    list.push({ i, x, y, d: cb });
  });
  list.sort((a, b) => a.y - b.y);
  const pos = [];
  for (const it of list) {
    const d = it.d, i = it.i;
    const [sx, sy] = toS(it.x, it.y);
    const face = d[4];
    if ([0, 1, 7].includes(face)) V.hdir[i] = 0; else if ([3, 4, 5].includes(face)) V.hdir[i] = 1;
    const flip = V.hdir[i] === 1 || (V.hdir[i] === undefined && it.x > 0);
    const st = d[5], fl = d[7], jump = d[8];
    if (st === 2) continue;
    const kind = jump > 0 ? 'jump' : fl & 1 ? 'dash' : fl & 4 ? 'idle' : Math.hypot(d[2], d[3]) > 0.4 ? (Math.floor(d[9] / 6) % 2 ? 'w1' : 'w2') : 'idle';
    const s = sprite(g.breed[i] ?? i, kind, flip, !!(fl & 2));
    const jh = jump > 0 ? Math.round(Math.sin((jump / 34) * Math.PI) * 18) : 0;
    let bx = Math.round(sx - s.width / 2), by = Math.round(sy - s.height + 1 - jh);
    if (st === 1) {
      // đang chìm xuống ao
      const sink = Math.min(s.height, Math.round(d[6] * 0.55));
      l.save(); l.beginPath(); l.rect(bx - 2, by - 20, s.width + 4, s.height - sink + 20); l.clip();
      l.drawImage(s, bx, by + sink); l.restore();
      l.fillStyle = '#6b4a2b'; l.fillRect(bx - 1, by + s.height - 2, s.width + 2, 2);
      continue;
    }
    // bóng
    l.fillStyle = 'rgba(30,20,10,.35)'; l.fillRect(Math.round(sx - 6 + jh / 6), Math.round(sy), 12 - Math.round(jh / 4), 2);
    if (fl & 16 && V.tick % 4 < 2) { l.fillStyle = '#ff6b3a'; l.fillRect(bx - 1, by + s.height - 3, 2, 2); }
    if (fl & 8) { l.fillStyle = '#ffd43b'; l.fillRect(bx + (flip ? s.width : -1), by + 4 + (V.tick >> 3) % 3, 1, 1); }
    if (fl & 1) { l.fillStyle = 'rgba(255,255,255,.7)'; for (let q = 0; q < 3; q++) l.fillRect(flip ? bx + s.width + 2 + q * 3 : bx - 3 - q * 3, by + 6 + q * 2, 2, 1); }
    l.drawImage(s, bx, by);
    if (fl & 2) { const a = V.tick / 6; for (let q = 0; q < 3; q++) { l.fillStyle = q % 2 ? '#ffd43b' : '#fff'; l.fillRect(Math.round(sx + Math.cos(a + q * 2.1) * 7), Math.round(by - 3 + Math.sin(a + q * 2.1) * 2), 1, 1); } }
    pos.push({ i, x: sx, y: by, me: me >= 0 && i === me });
  }
  // hạt
  V.parts = V.parts.filter((p) => ++p.t < p.life);
  for (const p of V.parts) {
    if (p.k === 'feather') { p.x += p.vx; p.y += p.vy; p.vy = Math.min(0.5, p.vy + 0.06); p.vx *= 0.97; l.fillStyle = p.col; l.fillRect(Math.round(p.x), Math.round(p.y), 2, 1); }
    else if (p.k === 'mud') { p.x += p.vx; p.y += p.vy; p.vy += 0.12; l.fillStyle = '#7a5532'; l.fillRect(Math.round(p.x), Math.round(p.y), 2, 2); }
    else if (p.k === 'star') { l.fillStyle = '#fff'; const r = p.t; l.fillRect(Math.round(p.x - r), Math.round(p.y), r * 2 + 1, 1); l.fillRect(Math.round(p.x), Math.round(p.y - r), 1, r * 2 + 1); }
  }
  blit(c);
  // ---- lớp chữ ----
  for (const p of pos) {
    const nm = g.names[p.i] || '';
    label(c, p.me ? `▼ ${nm}` : nm, scX(p.x), scY(p.y) - 12, { size: p.me ? 15 : 13, color: p.me ? '#ffd43b' : '#fff' });
  }
  for (const p of V.parts) if (p.k === 'text') { label(c, p.text, scX(p.x), scY(p.y - p.t * 0.3), { size: 16, color: p.col }); }
  hud(c, g, Bb, me);
}
// máy quay: sàn co lại thì phóng to dần (điện thoại nhìn rõ hơn)
function camera(R) {
  const want = Math.max(1, Math.min(2.2, Math.floor((300 / (R * KX * 2 + 64)) * 8) / 8));
  V.zoom = V.zoom ? V.zoom + (want - V.zoom) * 0.05 : want;
  const z = V.zoom, sw = LW / z, sh = LH / z;
  V.cx0 = CX - sw / 2; V.cy0 = Math.max(0, Math.min(LH - sh, CY - 8 - sh / 2));
}
const scX = (x) => (x - (V.cx0 || 0)) * (V.zoom || 1) * SC, scY = (y) => (y - (V.cy0 || 0)) * (V.zoom || 1) * SC;
function blit(c) {
  c.imageSmoothingEnabled = false;
  const sh = V.shake > 0 ? V.shake-- : 0, z = V.zoom || 1;
  c.drawImage(V.low, V.cx0 || 0, V.cy0 || 0, LW / z, LH / z, sh ? (Math.random() - 0.5) * sh : 0, sh ? (Math.random() - 0.5) * sh : 0, W, H);
}

function drawBack(l, R) {
  const t = V.tick;
  // trời + hàng rào tre + khán giả
  l.fillStyle = '#7ec8f0'; l.fillRect(0, 0, LW, 40);
  l.fillStyle = '#b6e3f7'; for (let i = 0; i < 4; i++) l.fillRect(((i * 97 + t / 8) % 360) - 30, 8 + i * 6, 26, 3);
  l.fillStyle = '#5b8f3a'; l.fillRect(0, 30, LW, 12);
  // khán giả (đầu tròn nhấp nhô)
  const crowd = (V.ctx?.pub?.players || []).filter((p) => p.connected && !(V.ctx.pub.order || []).includes(p.cid));
  const n = 26;
  for (let i = 0; i < n; i++) {
    const x = 6 + i * 12.2, bob = Math.sin(t / 7 + i * 1.7) > 0.6 ? -1 : 0;
    const col = ['#f2c9a0', '#d9a77a', '#b98057', '#f0d2b0'][i % 4];
    l.fillStyle = ['#e5484d', '#3b82f6', '#2fbf71', '#f2c230', '#9775fa'][i % 5]; l.fillRect(x - 3, 31 + bob, 7, 6);
    l.fillStyle = col; l.fillRect(x - 2, 26 + bob, 5, 5);
    l.fillStyle = '#2a1f1a'; l.fillRect(x - 2, 25 + bob, 5, 2);
  }
  V.crowd = crowd;
  // rào tre
  l.fillStyle = '#c9a25a'; l.fillRect(0, 36, LW, 3); l.fillRect(0, 44, LW, 2);
  for (let x = 0; x < LW; x += 6) { l.fillStyle = '#d8b46a'; l.fillRect(x, 34, 3, 16); l.fillStyle = '#9c7a3a'; l.fillRect(x + 2, 34, 1, 16); }
  // đất quanh
  l.fillStyle = '#8c6a3f'; l.fillRect(0, 50, LW, LH - 50);
  for (let i = 0; i < 90; i++) { l.fillStyle = i % 2 ? '#7d5c35' : '#9c7a4c'; l.fillRect((i * 53) % LW, 52 + ((i * 31) % (LH - 54)), 2, 1); }
  // ao bùn (vùng R0)
  span(l, 150 + 6, '#5e4026');
  span(l, 150 + 4, '#6d4b2c');
  for (let i = 0; i < 40; i++) { const a = i * 2.39 + t / 90, r = 120 + (i % 5) * 7; const [x, y] = toS(Math.cos(a) * r, Math.sin(a) * r); if (Math.hypot(x - CX, (y - CY) * 2) > R * KX + 3) { l.fillStyle = '#80583a'; l.fillRect(Math.round(x), Math.round(y), 3, 1); } }
  // sàn đất nện
  span(l, R + 2, '#e8c27a');
  span(l, R, '#d9ae66');
  for (let i = 0; i < 60; i++) { const a = i * 2.39, r = Math.sqrt((i * 0.618) % 1) * R * 0.95; const [x, y] = toS(Math.cos(a) * r, Math.sin(a) * r); l.fillStyle = i % 3 ? '#c99d58' : '#e6c182'; l.fillRect(Math.round(x), Math.round(y), 2, 1); }
  // vòng rơm ở mép
  const steps = Math.max(24, Math.round(R / 2.2));
  for (let i = 0; i < steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const [x, y] = toS(Math.cos(a) * (R + 1), Math.sin(a) * (R + 1));
    l.fillStyle = i % 2 ? '#f6d75a' : '#d4a73a'; l.fillRect(Math.round(x) - 1, Math.round(y) - 1, 3, 2);
  }
  // vạch xuất phát giữa
  const [mx, my] = toS(0, 0); l.fillStyle = 'rgba(255,255,255,.35)'; l.fillRect(Math.round(mx) - 4, Math.round(my), 9, 1);
}
function span(l, R, col) {
  l.fillStyle = col;
  const ry = R * KY, rx = R * KX;
  for (let y = Math.ceil(CY - ry); y <= CY + ry; y++) {
    const dy = (y - CY) / ry, w = rx * Math.sqrt(Math.max(0, 1 - dy * dy));
    l.fillRect(Math.round(CX - w), y, Math.round(w * 2), 1);
  }
}

function hud(c, g, Ld, me) {
  // bảng điểm trên cùng
  const n = g.total, bw = Math.min(150, (W - 20) / n);
  for (let i = 0; i < n; i++) {
    const x = 10 + i * bw, y = 8;
    const dead = Ld.c[i] && Ld.c[i][5] !== 0;
    c.globalAlpha = dead ? 0.45 : 1;
    c.fillStyle = 'rgba(29,22,72,.82)'; rr(c, x, y, bw - 6, 40, 10); c.fill();
    if (i === me) { c.strokeStyle = '#ffd43b'; c.lineWidth = 3; c.stroke(); }
    c.drawImage(sprite(g.breed[i] ?? i, 'idle', false, false), x + 4, y + 3, 34, 34);
    label(c, g.names[i] || '', x + 42, y + 14, { size: 12, align: 'left', w: 3 });
    for (let k = 0; k < g.need; k++) { c.fillStyle = k < g.wins[i] ? '#ffd43b' : '#ffffff33'; c.beginPath(); c.arc(x + 48 + k * 13, y + 30, 5, 0, Math.PI * 2); c.fill(); }
    c.globalAlpha = 1;
  }
  // khán giả
  if (V.crowd?.length) label(c, `👀 ${V.crowd.map((p) => p.av?.e || '🙂').slice(0, 8).join('')} đang xem`, W - 12, 64, { size: 13, align: 'right', w: 3 });
  // đếm ngược
  if (Ld.ph === 'intro') {
    const t = Ld.pt;
    const text = t < 60 ? `HIỆP ${Ld.round}` : String(3 - Math.floor((t - 60) / 40));
    if (t < 180) label(c, text, W / 2, H / 2 - 40, { size: t < 60 ? 64 : 96, color: '#ffd43b', w: 10, font: '"Bricolage Grotesque",system-ui' });
  }
  if (Ld.ph === 'fight' && Ld.R < 149.9 && Ld.R > 138 && V.tick % 60 < 40) label(c, 'SÀN ĐANG CO LẠI!', W / 2, H - 28, { size: 18, color: '#ff8787' });
  if (V.banner) {
    const b = V.banner; b.t++;
    if (b.t > (b.big ? 45 : 140)) V.banner = null;
    else label(c, b.text, W / 2, H / 2 - 30, { size: b.big ? 110 : 48, color: '#ffd43b', w: 10, font: '"Bricolage Grotesque",system-ui' });
  }
  // thanh hồi chiêu của mình
  if (me >= 0 && Ld.c[me] && Ld.c[me][5] === 0 && Ld.ph !== 'over') {
    const d = Ld.c[me];
    const bar = (x, txt, v, max, col) => {
      c.fillStyle = 'rgba(29,22,72,.8)'; rr(c, x, H - 40, 150, 28, 14); c.fill();
      c.fillStyle = v ? '#ffffff33' : col; rr(c, x + 4, H - 36, 142 * (1 - v / max), 20, 10); c.fill();
      label(c, v ? txt : txt + ' ✓', x + 75, H - 26, { size: 13, w: 3 });
    };
    bar(W / 2 - 160, 'HÚC (J)', d[10], 42, '#ff6b6b');
    bar(W / 2 + 10, 'NHẢY (K)', d[11], 75, '#4dabf7');
  } else if (me >= 0 && Ld.c[me] && Ld.ph === 'fight') label(c, 'Gà của bạn đã rơi ao — xem tiếp nhé!', W / 2, H - 26, { size: 18, color: '#ff8fa3' });
  else if (me < 0) label(c, '👀 Bạn đang xem trận', W / 2, H - 26, { size: 16 });
  if (g.ph === 'over' && g.champ >= 0) label(c, `🏆 ${g.names[g.champ]} VÔ ĐỊCH!`, W / 2, H / 2, { size: 46, color: '#ffd43b', w: 10, font: '"Bricolage Grotesque",system-ui' });
}

// ảnh minh hoạ cho trang chủ
export function dagaDemo(el) {
  el.innerHTML = '<canvas width="320" height="120" class="rt-demo"></canvas>';
  const c = el.firstChild.getContext('2d');
  c.imageSmoothingEnabled = false;
  let t = 0;
  const step = () => {
    if (!el.isConnected) return;
    t++;
    c.fillStyle = '#d9ae66'; c.fillRect(0, 0, 320, 120);
    c.fillStyle = '#c99d58'; for (let i = 0; i < 40; i++) c.fillRect((i * 53) % 320, (i * 37) % 120, 4, 2);
    const a = Math.sin(t / 20);
    for (let i = 0; i < 2; i++) {
      const x = 110 + i * 70 + (i ? -1 : 1) * Math.max(0, a) * 18, kind = a > 0.6 ? 'dash' : (t >> 3) % 2 ? 'w1' : 'w2';
      c.drawImage(sprite(i ? 3 : 0, kind, !!i, false), x, 40, 54, 54);
    }
    if (a > 0.9) { c.fillStyle = '#fff'; c.fillRect(156, 50, 8, 2); c.fillRect(159, 47, 2, 8); }
    requestAnimationFrame(step);
  };
  step();
}
export { ITEMS, BIT };
