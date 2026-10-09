// Cờ Tỷ Phú online: 2–6 người chơi, những người còn lại xem.
import { startTableRoom } from '../table/room.js';
import { LOGIC } from './logic.js';
import { view } from './view.js';

startTableRoom({
  ns: 'typhu', title: 'Cờ Tỷ Phú', emoji: '🏙️', logic: LOGIC, view,
  seatName: (i) => `Ghế ${i + 1}`,
  cfg: [
    { key: 'cash', label: 'Tiền khởi đầu', opts: [[1000, '$1000'], [1500, '$1500'], [2000, '$2000']] },
    { key: 'limit', label: 'Giới hạn thời gian (hết giờ ai giàu nhất thắng)', opts: [[20, '20 phút'], [30, '30'], [45, '45'], [60, '60'], [90, '90'], [0, 'Tới khi phá sản hết']] },
    { key: 'pot', label: 'Quỹ Bãi đỗ xe', opts: [[false, 'Tắt'], [true, 'Tiền thuế/phạt dồn vào, ai đỗ trúng nhặt']] },
  ],
  ruleNote: 'Đổ 2 xúc xắc đi quanh bàn. Đi vào ô đất trống thì được mua; vào đất người khác thì trả tiền thuê. Gom đủ bộ màu để thuê gấp đôi và xây nhà (xây đều, tối đa 4 nhà rồi lên khách sạn). Đổ đôi được đổ tiếp, đôi 3 lần liền thì vào tù. Thiếu tiền thì bán nhà / cầm cố, không đủ nữa là phá sản. Có thể đề nghị đổi chác đất và tiền với người khác trong lượt của mình. Bấm vào ô bất kỳ để xem bảng giá thuê.',
  demo: (el) => {
    if (!el) return;
    el.innerHTML = '<div class="tp-demo"><span style="--gc:#ff6fb5">Huế</span><span style="--gc:#3ecf6e">Hồ Tây</span><span style="--gc:#3b5bdb">Quận 1</span><span style="--gc:#ffd43b">Hải Phòng</span><b>🎲🎲</b><b>🏠🏠🏨</b></div>';
  },
});
