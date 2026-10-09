// Luật Cờ Tướng. Bàn 9 cột × 10 hàng = chuỗi 90 ký tự, ô 0 = góc trên trái (phía Đen), hàng 9 = hàng cuối phía Đỏ.
// Chữ hoa = Đỏ (đi trước, nội bộ gọi là 'w'), chữ thường = Đen ('b').
// k Tướng · a Sĩ · e Tượng · h Mã · r Xe · c Pháo · p Tốt
// Thắng khi đối phương hết nước đi (bị chiếu bí hoặc bị vây không còn nước = thua). Tướng không được đối mặt nhau.

export const START = 'rheakaehr' + '.'.repeat(9) + '.c.....c.' + 'p.p.p.p.p' + '.'.repeat(18) + 'P.P.P.P.P' + '.C.....C.' + '.'.repeat(9) + 'RHEAKAEHR';
export const sideOf = (p) => (p === '.' ? null : p === p.toUpperCase() ? 'w' : 'b');
const other = (s) => (s === 'w' ? 'b' : 'w');
const ok = (r, c) => r >= 0 && r < 10 && c >= 0 && c < 9;
const inPalace = (side, r, c) => c >= 3 && c <= 5 && (side === 'w' ? r >= 7 : r <= 2);
const ownHalf = (side, r) => (side === 'w' ? r >= 5 : r <= 4);
const ORTH = [[-1, 0], [1, 0], [0, -1], [0, 1]];
const DIAG = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
const HORSE = [[-2, -1, -1, 0], [-2, 1, -1, 0], [2, -1, 1, 0], [2, 1, 1, 0], [-1, -2, 0, -1], [1, -2, 0, -1], [-1, 2, 0, 1], [1, 2, 0, 1]];

export function init() { return { board: START, turn: 'w', half: 0, full: 1 }; }

// đích đi được (giả định, chưa xét tự chiếu) của quân ở ô i
function targets(b, i) {
  const p = b[i], me = sideOf(p), t = p.toLowerCase();
  const r = Math.floor(i / 9), c = i % 9, out = [];
  const can = (y, x) => ok(y, x) && sideOf(b[y * 9 + x]) !== me;
  if (t === 'k') { for (const [dr, dc] of ORTH) if (inPalace(me, r + dr, c + dc) && can(r + dr, c + dc)) out.push((r + dr) * 9 + c + dc); }
  else if (t === 'a') { for (const [dr, dc] of DIAG) if (inPalace(me, r + dr, c + dc) && can(r + dr, c + dc)) out.push((r + dr) * 9 + c + dc); }
  else if (t === 'e') {
    for (const [dr, dc] of DIAG) {
      const y = r + 2 * dr, x = c + 2 * dc;
      if (ok(y, x) && ownHalf(me, y) && b[(r + dr) * 9 + c + dc] === '.' && can(y, x)) out.push(y * 9 + x);
    }
  } else if (t === 'h') {
    for (const [dr, dc, lr, lc] of HORSE) if (ok(r + dr, c + dc) && b[(r + lr) * 9 + c + lc] === '.' && can(r + dr, c + dc)) out.push((r + dr) * 9 + c + dc);
  } else if (t === 'r' || t === 'c') {
    for (const [dr, dc] of ORTH) {
      let y = r + dr, x = c + dc, screen = false;
      while (ok(y, x)) {
        const q = b[y * 9 + x];
        if (!screen) {
          if (q === '.') out.push(y * 9 + x);
          else { if (t === 'r') { if (sideOf(q) !== me) out.push(y * 9 + x); break; } screen = true; }
        } else if (q !== '.') { if (sideOf(q) !== me) out.push(y * 9 + x); break; }
        y += dr; x += dc;
      }
    }
  } else if (t === 'p') {
    const f = me === 'w' ? -1 : 1;
    if (can(r + f, c)) out.push((r + f) * 9 + c);
    if (!ownHalf(me, r)) for (const dc of [-1, 1]) if (can(r, c + dc)) out.push(r * 9 + c + dc);
  }
  return out;
}

// hai tướng đối mặt trên cùng một cột, không có quân nào ở giữa
function facing(b) {
  const K = b.indexOf('K'), k = b.indexOf('k');
  if (K < 0 || k < 0 || K % 9 !== k % 9) return false;
  for (let i = k + 9; i < K; i += 9) if (b[i] !== '.') return false;
  return true;
}
export function attacked(b, sq, by) {
  for (let i = 0; i < 90; i++) if (sideOf(b[i]) === by && targets(b, i).includes(sq)) return true;
  return false;
}
export const kingSq = (b, side) => b.indexOf(side === 'w' ? 'K' : 'k');
export const inCheck = (st, side = st.turn) => attacked(st.board, kingSq(st.board, side), other(side));

export function apply(st, m) {
  const b = st.board.split('');
  const cap = b[m.to] !== '.';
  b[m.to] = b[m.from];
  b[m.from] = '.';
  return { board: b.join(''), turn: other(st.turn), half: cap ? 0 : st.half + 1, full: st.full + (st.turn === 'b' ? 1 : 0) };
}

export function legalMoves(st) {
  const b = st.board, me = st.turn, out = [];
  for (let i = 0; i < 90; i++) {
    if (sideOf(b[i]) !== me) continue;
    for (const to of targets(b, i)) {
      const nb = apply(st, { from: i, to }).board;
      if (facing(nb) || attacked(nb, kingSq(nb, me), other(me))) continue;
      out.push({ from: i, to });
    }
  }
  return out;
}
export const key = (st) => st.board + st.turn;

export function status(st, hist = []) {
  if (!legalMoves(st).length) return { result: other(st.turn), reason: inCheck(st) ? 'mate' : 'stuck' };
  const att = [...st.board].some((p) => 'rhcpRHCP'.includes(p));
  if (!att) return { result: 'draw', reason: 'material' };
  if (st.half >= 120) return { result: 'draw', reason: 'fifty' };
  const k = hist[hist.length - 1];
  if (k && hist.filter((x) => x === k).length >= 3) return { result: 'draw', reason: 'repeat' };
  return null;
}

// Ký hiệu kiểu Việt Nam: P2-5 (Pháo 2 bình 5), M8.7 (Mã 8 tấn 7), X1/2 (Xe 1 thoái 2). t/s = quân trước/sau cùng cột.
const VN = { k: 'Tg', a: 'S', e: 'T', h: 'M', r: 'X', c: 'P', p: 'B' };
export const NAMES = { k: 'Tướng', a: 'Sĩ', e: 'Tượng', h: 'Mã', r: 'Xe', c: 'Pháo', p: 'Tốt' };
export function san(st, m) {
  const b = st.board, p = b[m.from], me = sideOf(p), t = p.toLowerCase();
  const file = (i) => (me === 'w' ? 9 - (i % 9) : (i % 9) + 1);
  const row = (i) => Math.floor(i / 9);
  // cùng loại cùng cột?
  const same = [];
  for (let i = m.from % 9; i < 90; i += 9) if (b[i] === p) same.push(i);
  let head = VN[t] + file(m.from);
  if (same.length === 2) { const front = me === 'w' ? Math.min(...same) : Math.max(...same); head = VN[t] + (m.from === front ? 't' : 's'); }
  const dr = row(m.to) - row(m.from), fwd = me === 'w' ? -dr : dr;
  let s;
  if (dr === 0) s = `${head}-${file(m.to)}`;
  else if ('kprc'.includes(t) && m.to % 9 === m.from % 9) s = `${head}${fwd > 0 ? '.' : '/'}${Math.abs(dr)}`;
  else s = `${head}${fwd > 0 ? '.' : '/'}${file(m.to)}`;
  const nx = apply(st, m);
  if (inCheck(nx)) s += legalMoves(nx).length ? '+' : '#';
  return s;
}

export function perft(st, d) {
  if (!d) return 1;
  let n = 0;
  for (const m of legalMoves(st)) n += d === 1 ? 1 : perft(apply(st, m), d - 1);
  return n;
}

export const RULES = {
  id: 'xiangqi', size: [9, 10], sides: ['w', 'b'], init, legalMoves, apply, status, san, key, inCheck, sideOf,
  kingSq: (st) => kingSq(st.board, st.turn),
  canMate: (st, side) => [...st.board].some((p) => sideOf(p) === side && 'rhcp'.includes(p.toLowerCase())),
};
