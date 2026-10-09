// Cờ Cá Ngựa online: 2–4 người chơi, những người còn lại xem.
import { startTableRoom } from '../table/room.js';
import { LOGIC } from './logic.js';
import { view, dieHTML } from './view.js';

startTableRoom({
  ns: 'cangua', title: 'Cờ Cá Ngựa', emoji: '🐴', logic: LOGIC, view,
  seatName: (i) => `Ghế ${i + 1}`,
  cfg: [
    { key: 'out', label: 'Xuất quân khi đổ', opts: [['6', 'Chỉ số 6'], ['16', 'Số 1 hoặc 6']] },
    { key: 'block', label: 'Nhảy qua đầu ngựa khác', opts: [[true, 'Không được (luật Việt)'], [false, 'Được']] },
    { key: 'rank', label: 'Kết thúc khi', opts: [['first', 'Có người về đích đủ 4 ngựa'], ['all', 'Xếp hạng tới người cuối']] },
  ],
  ruleNote: 'Mỗi người 4 ngựa trong chuồng. Đổ 6 mới được xuất quân, đổ 6 được đổ thêm (tối đa 3 lần liền). Đi đúng vào ô có ngựa đối thủ thì đá ngựa đó về chuồng. Đi hết 1 vòng thì lên 5 bậc rồi vào đích — phải đổ vừa đủ, không được dư. Chỉ có 1 cách đi thì máy tự đi cho nhanh.',
  demo: (el) => {
    if (!el) return;
    let n = 6;
    el.innerHTML = `<div class="lg-demo">${dieHTML(6, 'roll')}<span class="lg-dh" style="--hc:#ff4d5e">🐴</span><span class="lg-dh" style="--hc:#3b82f6">🐴</span><span class="lg-dh" style="--hc:#2fbf71">🐴</span><span class="lg-dh" style="--hc:#ffc43d">🐴</span></div>`;
    setInterval(() => { n = 1 + Math.floor(Math.random() * 6); const d = el.querySelector('.lg-die'); d.outerHTML = dieHTML(n, 'roll'); }, 1600);
  },
});
