// Thủ Thành Làng online: 1–4 người cùng phe xây chòi canh giữ làng, người còn lại xem.
import { startTableRoom } from '../table/room.js';
import { LOGIC } from './logic.js';
import { MAPS, PCOL } from './data.js';
import { view, thuthanhDemo } from './view.js';

startTableRoom({
  ns: 'thuthanh', title: 'Thủ Thành Làng', emoji: '🏯', logic: LOGIC, view, noTurnTime: true,
  seatName: (i) => `Thủ thành ${i + 1}`, seatColor: (i) => PCOL[i],
  cfg: [
    { key: 'map', label: 'Bản đồ', opts: Object.entries(MAPS).map(([k, m]) => [k, m.name]) },
    { key: 'waves', label: 'Số đợt quái', opts: [[10, '10 đợt'], [20, '20 đợt'], [30, '30 đợt']] },
    { key: 'diff', label: 'Độ khó', opts: [['easy', 'Dễ'], ['normal', 'Vừa'], ['hard', 'Khó']] },
  ],
  ruleNote: 'Cả phe cùng giữ làng. Quái đi theo đường đất về cổng làng: chuột đồng, heo rừng, trâu điên, rùa giáp (đỡ đòn, cần vũ khí xuyên giáp), quạ đen và ong vò vẽ (bay), cùng 2 trùm Chằn Tinh và Thuồng Luồng (tự hồi máu). Lọt cổng là mất máu, hết 20 máu là thua. 9 loại vũ khí: chòi cung, súng máy, máy bắn đá, đại bác, ao bùn, máy phun băng, pháo tre, cột điện, tia laze — mỗi loại nâng được 4 cấp, mỗi cấp mở thêm một tính năng (tên lửa, xuyên giáp, đóng băng, sét nảy...). Gỡ vũ khí được hoàn 50% giá lắp ban đầu. Vàng từ quái chia đều cả phe, tặng nhau được; gọi quái sớm được thưởng vàng.',
  demo: (el) => el && thuthanhDemo(el),
});
