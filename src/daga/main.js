// Đá Gà Pixel online: 1–8 người điều khiển gà (thiếu người thì thêm gà máy), còn lại xem.
import { startTableRoom } from '../table/room.js';
import { LOGIC, BREEDS } from './logic.js';
import { view, dagaDemo } from './view.js';

startTableRoom({
  ns: 'daga', title: 'Đá Gà Pixel', emoji: '🐓', logic: LOGIC, view, noTurnTime: true,
  seatName: (i) => BREEDS[i].name, seatColor: (i) => BREEDS[i].c,
  cfg: [
    { key: 'wins', label: 'Thắng mấy hiệp', opts: [[1, '1 hiệp'], [2, '2 hiệp'], [3, '3 hiệp']] },
    { key: 'bots', label: 'Thêm gà máy', opts: [[0, 'Không'], [1, '1 con'], [2, '2 con'], [3, '3 con'], [4, '4 con']] },
    { key: 'shrink', label: 'Sàn co lại', opts: [['slow', 'Chậm'], ['normal', 'Vừa'], ['fast', 'Nhanh']] },
    { key: 'items', label: 'Vật phẩm', opts: [[true, 'Có 🌽🌶️🍌'], [false, 'Không']] },
  ],
  ruleNote: 'Mỗi người điều khiển một con gà trên sàn đất tròn. Húc (J/Space) để lao tới — trúng đối thủ thì nó văng đi và choáng. Nhảy (K) để né cú húc, đáp xuống đầu con khác thì dẫm nó choáng. Văng ra khỏi vòng rơm là rơi xuống ao bùn. Sau 10 giây sàn bắt đầu co lại. Con trụ lại cuối cùng thắng hiệp. 🌽 bắp: 3 cú húc cực mạnh · 🌶️ ớt: chạy nhanh · 🍌 vỏ chuối: dẫm phải là trượt dài. Chơi 1 mình thì có gà máy đấu cùng.',
  demo: (el) => el && dagaDemo(el),
});
