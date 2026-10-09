// "Một Lá!" — game bài màu online, 2–10 người.
import { startTableRoom } from '../table/room.js';
import { LOGIC } from './logic.js';
import { view, cardHTML } from './view.js';

startTableRoom({
  ns: 'motla', title: 'Một Lá!', emoji: '🃏', logic: LOGIC, view, showScore: true,
  seatName: (i) => `Ghế ${i + 1}`,
  cfg: [
    { key: 'hand', label: 'Số lá chia đầu ván', opts: [[5, '5 lá'], [7, '7 lá'], [10, '10 lá']] },
    { key: 'stack', label: 'Cộng dồn +2 / +4', opts: [[true, 'Được chặn & cộng dồn'], [false, 'Không']] },
    { key: 'drawUntil', label: 'Khi không có lá đánh', opts: [[false, 'Bốc 1 lá'], [true, 'Bốc tới khi đánh được']] },
  ],
  ruleNote: 'Đánh lá cùng màu hoặc cùng số/ký hiệu với lá trên cùng. ⊘ Mất lượt · ⇄ Đảo chiều · +2 người sau bốc 2 · ✦ Đổi màu · +4 Đổi màu và người sau bốc 4. Còn 2 lá thì bấm "Một lá!" trước khi đánh — quên hô mà bị người khác bấm "Bắt!" thì bốc phạt 2 lá. Ai hết bài trước thắng và ăn điểm bài còn lại của mọi người (số = điểm, lá chức năng 20, lá đổi màu 50).',
  demo: (el) => {
    if (!el) return;
    const hands = [['r7', 'y7', 'yv', 'w', 'g2'], ['b3', 'bd', 'gs', 'f', 'r0']];
    let k = 0;
    const draw = () => { el.innerHTML = `<div class="ml-demo">${hands[k % 2].map((c, i) => cardHTML(c, `d${i}`)).join('')}</div>`; };
    draw();
    setInterval(() => { k++; draw(); }, 2200);
  },
});
