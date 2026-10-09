// Vẽ bàn Cờ Vua và Cờ Tướng bằng SVG (một khối duy nhất → không bao giờ bị giãn ô).
// render(el, o): o = { st, flip, sel, targets:[{to,cap}], last:{from,to}, check:sq|-1, anim:bool, can:bool, view }
import { sideOf as chessSide } from './chess.js';
import { sideOf as xqSide, NAMES as XQ_NAMES } from './xiangqi.js';

// ---------------- CỜ VUA ----------------
const CG = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };
const VS = '︎';
export const chessGlyph = (p) => CG[p.toLowerCase()] + VS;
const C_LIGHT = '#f6e3bd', C_DARK = '#c98f5f';

export const chessBoard = {
  aspect: 1,
  render(el, o) {
    const S = 100, b = o.st.board;
    const pos = (i) => { let r = i >> 3, c = i & 7; if (o.flip) { r = 7 - r; c = 7 - c; } return [c * S, r * S]; };
    const tg = new Map((o.targets || []).map((t) => [t.to, t]));
    let sq = '', marks = '', pcs = '', hits = '';
    for (let i = 0; i < 64; i++) {
      const [x, y] = pos(i), dark = ((i >> 3) + (i & 7)) & 1;
      sq += `<rect x="${x}" y="${y}" width="${S}" height="${S}" fill="${dark ? C_DARK : C_LIGHT}"/>`;
      if (o.last && (i === o.last.from || i === o.last.to)) sq += `<rect x="${x}" y="${y}" width="${S}" height="${S}" fill="#ffd84a" opacity=".55"/>`;
      if (i === o.sel) sq += `<rect x="${x}" y="${y}" width="${S}" height="${S}" fill="#7bd148" opacity=".7"/>`;
      if (i === o.check) sq += `<rect x="${x}" y="${y}" width="${S}" height="${S}" fill="#ff3d4f" opacity=".35"/><circle cx="${x + 50}" cy="${y + 50}" r="40" fill="#ff3d4f" opacity=".55"/>`;
      // toạ độ
      const r = i >> 3, c = i & 7;
      const leftCol = o.flip ? c === 7 : c === 0, botRow = o.flip ? r === 0 : r === 7;
      const tc = dark ? C_LIGHT : C_DARK;
      if (leftCol) marks += `<text x="${x + 6}" y="${y + 22}" class="coord" fill="${tc}">${8 - r}</text>`;
      if (botRow) marks += `<text x="${x + S - 6}" y="${y + S - 7}" class="coord" text-anchor="end" fill="${tc}">${'abcdefgh'[c]}</text>`;
      const t = tg.get(i);
      if (t) marks += t.cap ? `<circle cx="${x + 50}" cy="${y + 50}" r="44" fill="none" stroke="rgba(29,22,72,.35)" stroke-width="8"/>` : `<circle cx="${x + 50}" cy="${y + 50}" r="15" fill="rgba(29,22,72,.3)"/>`;
      const p = b[i];
      if (p !== '.') {
        const w = chessSide(p) === 'w';
        let st = '';
        if (o.anim && o.last && i === o.last.to) { const [fx, fy] = pos(o.last.from); st = ` style="--dx:${fx - x}px;--dy:${fy - y}px"`; }
        pcs += `<g class="pc ${w ? 'pw' : 'pb'} ${st ? 'mv' : ''}"${st}><text x="${x + 50}" y="${y + 78}" text-anchor="middle">${chessGlyph(p)}</text></g>`;
      }
      hits += `<rect data-sq="${i}" x="${x}" y="${y}" width="${S}" height="${S}" fill="transparent"/>`;
    }
    el.innerHTML = `<svg class="duel-svg chess-svg ${o.can ? 'can' : ''}" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
      ${sq}${marks}${pcs}${hits}</svg>`;
  },
  // bàn minh hoạ nhỏ trên trang chủ
  demoFrames: null,
};

// ---------------- CỜ TƯỚNG ----------------
const XQ_RED = { k: '帥', a: '仕', e: '相', h: '傌', r: '俥', c: '炮', p: '兵' };
const XQ_BLK = { k: '將', a: '士', e: '象', h: '馬', r: '車', c: '砲', p: '卒' };
export const xqChar = (p) => (xqSide(p) === 'w' ? XQ_RED : XQ_BLK)[p.toLowerCase()];
export const xqName = (p) => XQ_NAMES[p.toLowerCase()];
const XS = 100, XM = 60;

function xqGrid(flip) {
  const X = (c) => XM + c * XS, Y = (r) => XM + r * XS;
  let g = '';
  for (let r = 0; r < 10; r++) g += `<line x1="${X(0)}" y1="${Y(r)}" x2="${X(8)}" y2="${Y(r)}"/>`;
  for (let c = 0; c < 9; c++) {
    if (c === 0 || c === 8) g += `<line x1="${X(c)}" y1="${Y(0)}" x2="${X(c)}" y2="${Y(9)}"/>`;
    else g += `<line x1="${X(c)}" y1="${Y(0)}" x2="${X(c)}" y2="${Y(4)}"/><line x1="${X(c)}" y1="${Y(5)}" x2="${X(c)}" y2="${Y(9)}"/>`;
  }
  for (const [r0, r1] of [[0, 2], [7, 9]]) g += `<line x1="${X(3)}" y1="${Y(r0)}" x2="${X(5)}" y2="${Y(r1)}"/><line x1="${X(5)}" y1="${Y(r0)}" x2="${X(3)}" y2="${Y(r1)}"/>`;
  // dấu vị trí pháo / tốt
  const mark = (r, c) => {
    const x = X(c), y = Y(r), d = 7, l = 18;
    let s = '';
    for (const sx of [-1, 1]) {
      if ((sx < 0 && c === 0) || (sx > 0 && c === 8)) continue;
      for (const sy of [-1, 1]) s += `<path d="M${x + sx * d} ${y + sy * (d + l)} V${y + sy * d} H${x + sx * (d + l)}"/>`;
    }
    return s;
  };
  let mk = '';
  for (const [r, c] of [[2, 1], [2, 7], [7, 1], [7, 7], [3, 0], [3, 2], [3, 4], [3, 6], [3, 8], [6, 0], [6, 2], [6, 4], [6, 6], [6, 8]]) mk += mark(r, c);
  const river = `<text x="${X(2)}" y="${Y(4.5) + 18}" class="river" text-anchor="middle">${flip ? '漢 界' : '楚 河'}</text><text x="${X(6)}" y="${Y(4.5) + 18}" class="river" text-anchor="middle">${flip ? '楚 河' : '漢 界'}</text>`;
  return `<rect x="${X(0)}" y="${Y(0)}" width="${8 * XS}" height="${9 * XS}" fill="none" stroke-width="6" class="xq-frame"/><g class="xq-lines">${g}</g><g class="xq-marks">${mk}</g>${river}`;
}

export const xqBoard = {
  aspect: 920 / 1020,
  render(el, o) {
    const b = o.st.board;
    const pos = (i) => { let r = Math.floor(i / 9), c = i % 9; if (o.flip) { r = 9 - r; c = 8 - c; } return [XM + c * XS, XM + r * XS]; };
    const tg = new Map((o.targets || []).map((t) => [t.to, t]));
    let hl = '', pcs = '', hits = '', dots = '';
    if (o.last) {
      const [fx, fy] = pos(o.last.from);
      hl += `<rect x="${fx - 30}" y="${fy - 30}" width="60" height="60" rx="10" class="xq-from"/>`;
    }
    for (let i = 0; i < 90; i++) {
      const [x, y] = pos(i), p = b[i];
      if (p !== '.') {
        const red = xqSide(p) === 'w';
        const viet = o.view === 'vi';
        const label = viet ? xqName(p) : xqChar(p);
        const fs = viet ? (label.length >= 5 ? 20 : label.length >= 4 ? 25 : 31) : 52;
        let st = '';
        if (o.anim && o.last && i === o.last.to) { const [fx, fy] = pos(o.last.from); st = ` style="--dx:${fx - x}px;--dy:${fy - y}px"`; }
        const cls = `xpc ${red ? 'xr' : 'xb'} ${i === o.sel ? 'sel' : ''} ${i === o.check ? 'chk' : ''} ${o.last && i === o.last.to ? 'last' : ''} ${st ? 'mv' : ''}`;
        pcs += `<g class="${cls}"${st}><circle cx="${x}" cy="${y + 4}" r="44" class="sh"/><circle cx="${x}" cy="${y}" r="44" class="o"/><circle cx="${x}" cy="${y}" r="36" class="i"/><text x="${x}" y="${y + fs * 0.36}" text-anchor="middle" style="font-size:${fs}px" class="${viet ? 'vi' : 'han'}">${label}</text></g>`;
      }
      const t = tg.get(i);
      if (t) dots += t.cap ? `<circle cx="${x}" cy="${y}" r="49" class="xq-cap"/>` : `<circle cx="${x}" cy="${y}" r="14" class="xq-dot"/>`;
      hits += `<circle data-sq="${i}" cx="${x}" cy="${y}" r="50" fill="transparent"/>`;
    }
    el.innerHTML = `<svg class="duel-svg xq-svg ${o.can ? 'can' : ''}" viewBox="0 0 920 1020" preserveAspectRatio="xMidYMid meet">${xqGrid(o.flip)}${hl}${pcs}${dots}${hits}</svg>`;
  },
};

// quân đã bị ăn (so với thế cờ ban đầu): trả về danh sách quân của bên `side` đã mất
export function lostPieces(start, board, side, sideOf) {
  const cnt = {};
  for (const p of start) if (sideOf(p) === side) cnt[p] = (cnt[p] || 0) + 1;
  for (const p of board) if (sideOf(p) === side && cnt[p]) cnt[p]--;
  const out = [];
  for (const [p, n] of Object.entries(cnt)) for (let k = 0; k < n; k++) out.push(p);
  return out;
}
