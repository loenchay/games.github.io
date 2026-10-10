// Kéo Co Gõ Phím online: đội Đỏ (ghế 1–8) đấu đội Xanh (ghế 9–16), phòng tối đa 20 người, ai không kéo thì xem và cổ vũ.
import { startTableRoom } from '../table/room.js';
import { LOGIC } from './logic.js';
import { view, keocoDemo } from './view.js';

startTableRoom({
  ns: 'keoco', title: 'Kéo Co Gõ Phím', emoji: '🪢', logic: LOGIC, view, noTurnTime: true,
  seatName: (i) => (i < 8 ? `Đỏ ${i + 1}` : `Xanh ${i - 7}`), seatColor: (i) => (i < 8 ? '#ff4d5e' : '#3b82f6'),
  cfg: [
    { key: 'mode', label: 'Cách kéo', opts: [['type', '⌨️ Gõ chữ'], ['tap', '👆 Bấm nhanh']] },
    { key: 'level', label: 'Chữ', opts: [['easy', 'Từ ngắn'], ['mix', 'Lẫn lộn'], ['hard', 'Cụm từ dài']] },
    { key: 'dur', label: 'Thời gian', opts: [[45, '45s'], [60, '60s'], [90, '90s'], [120, '2 phút']] },
    { key: 'bot', label: 'Người máy (khi đội trống)', opts: [['easy', 'Yếu'], ['normal', 'Vừa'], ['hard', 'Khoẻ']] },
    { key: 'balance', label: 'Cân sức khi lệch người', opts: [[true, 'Có'], [false, 'Không']] },
  ],
  ruleNote: 'Mỗi đội tới 8 người (8 đấu 8): ngồi ghế Đỏ hoặc Xanh để vào đội. Gõ đúng chữ hiện ra (có dấu hay không dấu đều được) là kéo dây về phía đội mình — chữ càng dài kéo càng mạnh, gõ liền mạch không sai thì chuỗi 🔥 tăng lực. Cứ 4 giây có nhịp "Hò... DÔ!": gõ xong đúng lúc DÔ được kéo gấp đôi. Dải lụa đỏ qua vạch trắng bên nào là đội đó thắng; hết giờ thì đội đang dẫn thắng. Người xem bấm cổ vũ cũng kéo giúp một chút. Đội nào trống thì có người máy vào kéo.',
  demo: (el) => el && keocoDemo(el),
});
