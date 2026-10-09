// Luật Cờ Vua (đầy đủ: nhập thành, bắt tốt qua đường, phong cấp, chiếu hết, hết nước đi, 50 nước, lặp 3 lần, thiếu quân).
// Bàn cờ là chuỗi 64 ký tự, ô 0 = a8, ô 63 = h1. Chữ hoa = Trắng (w), chữ thường = Đen (b), '.' = trống.
// Không phụ thuộc DOM — dùng chung cho máy chủ phòng (kiểm tra nước đi) và máy người chơi (gợi ý nước đi).

export const START = 'rnbqkbnrpppppppp' + '.'.repeat(32) + 'PPPPPPPPRNBQKBNR';
const N8 = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
const K8 = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
const DIAG = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
const ORTH = [[-1, 0], [1, 0], [0, -1], [0, 1]];
export const sideOf = (p) => (p === '.' ? null : p === p.toUpperCase() ? 'w' : 'b');
const other = (s) => (s === 'w' ? 'b' : 'w');
const rc = (i) => [i >> 3, i & 7];
const ok = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
export const sqName = (i) => 'abcdefgh'[i & 7] + (8 - (i >> 3));

export function init() { return { board: START, turn: 'w', castle: 'KQkq', ep: -1, half: 0, full: 1 }; }

export function fromFEN(fen) {
  const [pl, turn, castle, ep, half, full] = fen.trim().split(/\s+/);
  let board = '';
  for (const ch of pl.replace(/\//g, '')) board += /\d/.test(ch) ? '.'.repeat(Number(ch)) : ch;
  const epI = ep && ep !== '-' ? (8 - Number(ep[1])) * 8 + 'abcdefgh'.indexOf(ep[0]) : -1;
  return { board, turn: turn || 'w', castle: castle && castle !== '-' ? castle : '', ep: epI, half: Number(half) || 0, full: Number(full) || 1 };
}

// ô `sq` có bị bên `by` tấn công không
export function attacked(b, sq, by) {
  const [r, c] = rc(sq);
  const up = by === 'w';
  // tốt
  const pr = up ? r + 1 : r - 1, P = up ? 'P' : 'p';
  for (const dc of [-1, 1]) if (ok(pr, c + dc) && b[pr * 8 + c + dc] === P) return true;
  const Nn = up ? 'N' : 'n', Kk = up ? 'K' : 'k';
  for (const [dr, dc] of N8) if (ok(r + dr, c + dc) && b[(r + dr) * 8 + c + dc] === Nn) return true;
  for (const [dr, dc] of K8) if (ok(r + dr, c + dc) && b[(r + dr) * 8 + c + dc] === Kk) return true;
  const ray = (dirs, set) => {
    for (const [dr, dc] of dirs) {
      let y = r + dr, x = c + dc;
      while (ok(y, x)) {
        const p = b[y * 8 + x];
        if (p !== '.') { if (sideOf(p) === by && set.includes(p.toLowerCase())) return true; break; }
        y += dr; x += dc;
      }
    }
    return false;
  };
  return ray(DIAG, 'bq') || ray(ORTH, 'rq');
}
export const kingSq = (b, side) => b.indexOf(side === 'w' ? 'K' : 'k');
export const inCheck = (st, side = st.turn) => attacked(st.board, kingSq(st.board, side), other(side));

function pseudo(st) {
  const b = st.board, me = st.turn, out = [];
  const add = (from, to, extra) => out.push({ from, to, ...extra });
  for (let i = 0; i < 64; i++) {
    const p = b[i];
    if (sideOf(p) !== me) continue;
    const [r, c] = rc(i), t = p.toLowerCase();
    if (t === 'p') {
      const dir = me === 'w' ? -1 : 1, startR = me === 'w' ? 6 : 1, lastR = me === 'w' ? 0 : 7;
      const push = (to) => { if ((to >> 3) === lastR) for (const pr of 'qrbn') add(i, to, { promo: pr }); else add(i, to); };
      const f = (r + dir) * 8 + c;
      if (ok(r + dir, c) && b[f] === '.') {
        push(f);
        const f2 = (r + 2 * dir) * 8 + c;
        if (r === startR && b[f2] === '.') add(i, f2);
      }
      for (const dc of [-1, 1]) {
        if (!ok(r + dir, c + dc)) continue;
        const to = (r + dir) * 8 + c + dc;
        if (sideOf(b[to]) === other(me)) push(to);
        else if (to === st.ep) add(i, to, { ep: true });
      }
    } else if (t === 'n' || t === 'k') {
      for (const [dr, dc] of t === 'n' ? N8 : K8) {
        if (!ok(r + dr, c + dc)) continue;
        const to = (r + dr) * 8 + c + dc;
        if (sideOf(b[to]) !== me) add(i, to);
      }
      if (t === 'k') {
        const home = me === 'w' ? 60 : 4, K = me === 'w' ? 'K' : 'k', Q = me === 'w' ? 'Q' : 'q';
        if (i === home && !attacked(b, i, other(me))) {
          if (st.castle.includes(K) && b[i + 1] === '.' && b[i + 2] === '.' && b[i + 3] === (me === 'w' ? 'R' : 'r') && !attacked(b, i + 1, other(me)) && !attacked(b, i + 2, other(me))) add(i, i + 2, { castle: 'K' });
          if (st.castle.includes(Q) && b[i - 1] === '.' && b[i - 2] === '.' && b[i - 3] === '.' && b[i - 4] === (me === 'w' ? 'R' : 'r') && !attacked(b, i - 1, other(me)) && !attacked(b, i - 2, other(me))) add(i, i - 2, { castle: 'Q' });
        }
      }
    } else {
      const dirs = t === 'b' ? DIAG : t === 'r' ? ORTH : [...DIAG, ...ORTH];
      for (const [dr, dc] of dirs) {
        let y = r + dr, x = c + dc;
        while (ok(y, x)) {
          const to = y * 8 + x, q = b[to];
          if (q === '.') add(i, to);
          else { if (sideOf(q) !== me) add(i, to); break; }
          y += dr; x += dc;
        }
      }
    }
  }
  return out;
}

export function apply(st, m) {
  const b = st.board.split('');
  const p = b[m.from], me = st.turn, t = p.toLowerCase();
  const cap = b[m.to] !== '.' || !!m.ep;
  b[m.to] = m.promo ? (me === 'w' ? m.promo.toUpperCase() : m.promo) : p;
  b[m.from] = '.';
  if (m.ep) b[m.to + (me === 'w' ? 8 : -8)] = '.';
  if (m.castle === 'K') { b[m.to - 1] = b[m.to + 1]; b[m.to + 1] = '.'; }
  if (m.castle === 'Q') { b[m.to + 1] = b[m.to - 2]; b[m.to - 2] = '.'; }
  let castle = st.castle;
  if (t === 'k') castle = castle.replace(me === 'w' ? /[KQ]/g : /[kq]/g, '');
  const strip = (sq) => { if (sq === 63) castle = castle.replace('K', ''); if (sq === 56) castle = castle.replace('Q', ''); if (sq === 7) castle = castle.replace('k', ''); if (sq === 0) castle = castle.replace('q', ''); };
  strip(m.from); strip(m.to);
  const ep = t === 'p' && Math.abs(m.to - m.from) === 16 ? (m.to + m.from) / 2 : -1;
  return { board: b.join(''), turn: other(me), castle, ep, half: t === 'p' || cap ? 0 : st.half + 1, full: st.full + (me === 'b' ? 1 : 0) };
}

export function legalMoves(st) {
  return pseudo(st).filter((m) => !inCheck({ ...apply(st, m), turn: st.turn }, st.turn));
}

// khoá vị trí để đếm lặp lại (ep chỉ tính nếu thật sự bắt được)
export function key(st) {
  let ep = -1;
  if (st.ep >= 0 && legalMoves(st).some((m) => m.ep)) ep = st.ep;
  return `${st.board}${st.turn}${st.castle}${ep}`;
}

// bên `side` còn đủ quân để chiếu hết không
export function canMate(b, side) {
  const mine = [...b].filter((p) => sideOf(p) === side && p.toLowerCase() !== 'k').map((p) => p.toLowerCase());
  if (mine.some((p) => 'pqr'.includes(p))) return true;
  return mine.length >= 2;
}
function insufficient(b) {
  const rest = [];
  for (let i = 0; i < 64; i++) { const p = b[i]; if (p !== '.' && p.toLowerCase() !== 'k') rest.push([p.toLowerCase(), i]); }
  if (rest.some(([p]) => 'pqr'.includes(p))) return false;
  if (rest.length <= 1) return true;
  // chỉ còn tượng, tất cả cùng màu ô
  if (rest.every(([p]) => p === 'b')) { const col = rest.map(([, i]) => ((i >> 3) + (i & 7)) & 1); return col.every((x) => x === col[0]); }
  return false;
}

// tình trạng sau nước vừa đi. hist = danh sách khoá các vị trí đã qua (kể cả hiện tại)
export function status(st, hist = []) {
  const moves = legalMoves(st);
  if (!moves.length) return inCheck(st) ? { result: other(st.turn), reason: 'mate' } : { result: 'draw', reason: 'stalemate' };
  if (insufficient(st.board)) return { result: 'draw', reason: 'material' };
  if (st.half >= 100) return { result: 'draw', reason: 'fifty' };
  const k = hist[hist.length - 1];
  if (k && hist.filter((x) => x === k).length >= 3) return { result: 'draw', reason: 'repeat' };
  return null;
}

// ký hiệu SAN: Nf3, exd5, O-O, e8=Q+, Qxf7#
export function san(st, m, legal = legalMoves(st)) {
  const p = st.board[m.from], t = p.toLowerCase();
  let s;
  if (m.castle) s = m.castle === 'K' ? 'O-O' : 'O-O-O';
  else {
    const cap = st.board[m.to] !== '.' || m.ep;
    if (t === 'p') s = (cap ? 'abcdefgh'[m.from & 7] + 'x' : '') + sqName(m.to) + (m.promo ? '=' + m.promo.toUpperCase() : '');
    else {
      const twins = legal.filter((x) => x.to === m.to && x.from !== m.from && st.board[x.from] === p);
      let dis = '';
      if (twins.length) {
        const sameFile = twins.some((x) => (x.from & 7) === (m.from & 7)), sameRank = twins.some((x) => x.from >> 3 === m.from >> 3);
        dis = !sameFile ? 'abcdefgh'[m.from & 7] : !sameRank ? String(8 - (m.from >> 3)) : sqName(m.from);
      }
      s = t.toUpperCase() + dis + (cap ? 'x' : '') + sqName(m.to);
    }
  }
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
  id: 'chess', size: [8, 8], sides: ['w', 'b'], init, legalMoves, apply, status, san, key, inCheck, sideOf,
  kingSq: (st) => kingSq(st.board, st.turn),
  canMate: (st, side) => canMate(st.board, side),
  pieces: (st) => st.board,
};
