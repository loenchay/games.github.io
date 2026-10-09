// Cờ Vua online: 2 người chơi, tối đa 8 người xem.
import { startDuelRoom } from '../duel/room.js';
import { RULES, START, init, legalMoves, apply, sideOf } from '../duel/chess.js';
import { chessBoard, chessGlyph, lostPieces } from '../duel/boards.js';

const VAL = { q: 9, r: 5, b: 3, n: 3, p: 1 };
startDuelRoom({
  ns: 'covua', title: 'Cờ Vua', emoji: '♟️', rules: RULES, label: { w: 'Trắng', b: 'Đen' },
  board: chessBoard, glyph: chessGlyph, checkWord: 'Chiếu!',
  sym: (s) => `<span class="cv-sym ${s === 'w' ? 'pw' : 'pb'}">${chessGlyph(s === 'w' ? 'K' : 'k')}</span>`,
  // quân của bên `side` đã bị ăn -> hiện dưới tên người ăn
  lostHTML: (st, side) => {
    const lost = lostPieces(START, st.board, side, sideOf).sort((a, b) => VAL[b.toLowerCase()] - VAL[a.toLowerCase()]);
    if (!lost.length) return '';
    const mat = (s) => [...st.board].filter((p) => sideOf(p) === s && p.toLowerCase() !== 'k').reduce((a, p) => a + VAL[p.toLowerCase()], 0);
    const diff = mat(side === 'w' ? 'b' : 'w') - mat(side);
    return `<span class="${side === 'w' ? 'pw' : 'pb'}">${lost.map(chessGlyph).join('')}</span>${diff > 0 ? `<em>+${diff}</em>` : ''}`;
  },
  reasons: { mate: 'Chiếu hết!', resign: 'Đối thủ đầu hàng', time: 'Đối thủ hết giờ', left: 'Đối thủ rời đi', stalemate: 'Hết nước đi (pat)', material: 'Không đủ quân chiếu hết', fifty: 'Luật 50 nước', repeat: 'Lặp thế cờ 3 lần', agree: 'Hai bên đồng ý', timeDraw: 'Hết giờ, đối thủ không đủ quân' },
  ruleNote: 'Luật cờ vua quốc tế đầy đủ: nhập thành, bắt tốt qua đường, phong cấp. Hoà khi pat, lặp thế 3 lần, 50 nước không ăn quân/đi tốt, hoặc không đủ quân chiếu hết. Mỗi người xin đi lại tối đa 3 lần.',
  notationNote: 'ký hiệu quốc tế',
  demo: (el) => {
    if (!el) return;
    // ván Học trò (Scholar's mate) tự chạy
    const seq = [['e2', 'e4'], ['e7', 'e5'], ['f1', 'c4'], ['b8', 'c6'], ['d1', 'h5'], ['g8', 'f6'], ['h5', 'f7']];
    const sq = (n) => (8 - Number(n[1])) * 8 + 'abcdefgh'.indexOf(n[0]);
    let st = init(), k = 0, last = null;
    const draw = (anim) => chessBoard.render(el, { st, flip: false, sel: -1, targets: [], last, anim, can: false, check: k >= seq.length ? st.board.indexOf('k') : -1 });
    draw();
    setInterval(() => {
      if (k >= seq.length + 2) { st = init(); k = 0; last = null; return draw(); }
      if (k < seq.length) { const [a, b] = seq[k].map(sq); const m = legalMoves(st).find((x) => x.from === a && x.to === b); last = m; st = apply(st, m); }
      k++;
      draw(k <= seq.length);
    }, 900);
  },
});
