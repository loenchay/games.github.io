// Rắn Săn Mồi online: tới 10 người cùng sân (thêm rắn máy cho đông), còn lại xem.
import { startTableRoom } from '../table/room.js';
import { LOGIC, COLORS } from './logic.js';
import { view, ransanDemo } from './view.js';

startTableRoom({
  ns: 'ransan', title: 'Rắn Săn Mồi', emoji: '🐍', logic: LOGIC, view, noTurnTime: true,
  seatName: (i) => `Rắn ${i + 1}`, seatColor: (i) => COLORS[i],
  cfg: [
    { key: 'mode', label: 'Chế độ', opts: [['timed', '⏱ Săn mồi tính giờ (chết thì hồi sinh)'], ['survive', '💀 Sinh tồn (chết là hết)']] },
    { key: 'dur', label: 'Thời gian (chế độ tính giờ)', opts: [[2, '2 phút'], [3, '3 phút'], [5, '5 phút']] },
    { key: 'bots', label: 'Rắn máy', opts: [[0, 'Không'], [1, '1'], [2, '2'], [3, '3'], [4, '4'], [6, '6']] },
    { key: 'speed', label: 'Tốc độ', opts: [['slow', 'Chậm'], ['normal', 'Vừa'], ['fast', 'Nhanh']] },
  ],
  ruleNote: 'Mỗi người một con rắn trên cánh đồng chung. Ăn 🍎 (+1), 🥖 (+3), 🐸 ếch nhảy lung tung (+5) để dài ra. Đầu đâm vào rào hay thân rắn khác (kể cả thân mình) là chết, thân rơi ra thành mồi cho người khác. Đối đầu trực diện thì con dài hơn thắng. Giữ Space để tăng tốc nhưng tốn bớt đuôi. Tính giờ: hạ gục +10 điểm, chết thì 3 giây sau hồi sinh, hết giờ ai nhiều điểm nhất thắng. Sinh tồn: không hồi sinh, sau 45 giây rào khép dần, con cuối cùng thắng.',
  demo: (el) => el && ransanDemo(el),
});
