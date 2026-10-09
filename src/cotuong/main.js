// Cờ Tướng online: 2 người chơi (Đỏ đi trước, Đen), tối đa 8 người xem.
import { startDuelRoom } from '../duel/room.js';
import { RULES, START, init, legalMoves, apply, sideOf } from '../duel/xiangqi.js';
import { xqBoard, xqChar, xqName, lostPieces } from '../duel/boards.js';

const ORD = 'rchepak';
startDuelRoom({
  ns: 'cotuong', title: 'Cờ Tướng', emoji: '🀄', rules: RULES, label: { w: 'Đỏ', b: 'Đen' },
  board: xqBoard, views: true, checkWord: 'Chiếu tướng!',
  sym: (s) => `<span class="xq-chip ${s === 'w' ? 'xr' : 'xb'}">${s === 'w' ? '帥' : '將'}</span>`,
  lostHTML: (st, side) => {
    const lost = lostPieces(START, st.board, side, sideOf).sort((a, b) => ORD.indexOf(a.toLowerCase()) - ORD.indexOf(b.toLowerCase()));
    return lost.map((p) => `<span class="xq-chip sm ${side === 'w' ? 'xr' : 'xb'}" title="${xqName(p)}">${xqChar(p)}</span>`).join('');
  },
  reasons: { mate: 'Chiếu bí!', stuck: 'Đối thủ hết nước đi (vây bí)', resign: 'Đối thủ đầu hàng', time: 'Đối thủ hết giờ', left: 'Đối thủ rời đi', material: 'Cả hai không còn quân tấn công', fifty: '60 nước không ăn quân', repeat: 'Lặp thế cờ 3 lần', agree: 'Hai bên đồng ý', timeDraw: 'Hết giờ, đối thủ không còn quân tấn công' },
  ruleNote: 'Luật cờ tướng: Đỏ đi trước. Tướng/Sĩ trong cung, Tượng không qua sông, Mã bị cản chân, Pháo phải có ngòi mới ăn, Tốt qua sông được đi ngang, hai Tướng không được đối mặt. Hết nước đi (kể cả không bị chiếu) là thua. Hoà khi lặp thế 3 lần hoặc 60 nước không ăn quân.',
  notationNote: '. tấn · / thoái · - bình',
  legend: () => `<div class="xq-legend">${'kaehrcp'.split('').map((t) => `<span><span class="xq-chip sm xr">${xqChar(t.toUpperCase())}</span><span class="xq-chip sm xb">${xqChar(t)}</span>${xqName(t)}</span>`).join('')}</div>`,
  demo: (el) => {
    if (!el) return;
    const sq = (r, c) => r * 9 + c;
    const seq = [[sq(7, 7), sq(7, 4)], [sq(0, 7), sq(2, 6)], [sq(9, 7), sq(7, 6)], [sq(0, 8), sq(0, 7)], [sq(9, 8), sq(9, 7)], [sq(3, 6), sq(4, 6)], [sq(7, 4), sq(3, 4)]];
    let st = init(), k = 0, last = null;
    const draw = (anim) => xqBoard.render(el, { st, flip: false, sel: -1, targets: [], last, anim, can: false, check: -1, view: 'han' });
    draw();
    setInterval(() => {
      if (k >= seq.length + 2) { st = init(); k = 0; last = null; return draw(); }
      if (k < seq.length) { const [a, b] = seq[k]; const m = legalMoves(st).find((x) => x.from === a && x.to === b); if (!m) { k = seq.length; return; } last = m; st = apply(st, m); }
      k++;
      draw(k <= seq.length);
    }, 1000);
  },
});
