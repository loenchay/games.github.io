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
  ruleNote: 'Cả phe cùng giữ làng. Quái (chuột đồng, heo rừng, trâu điên, quạ đen, mỗi 10 đợt có Chằn Tinh) đi theo đường đất về cổng làng — lọt vào là làng mất máu, hết 20 máu là thua. Mỗi người có vàng riêng để xây chòi: 🏹 Chòi cung (nhanh, bắn được chim), 🪨 Máy bắn đá (nổ một vùng), 🌀 Ao bùn (làm chậm), 🧨 Pháo tre (nổ quanh chòi). Ai nâng cấp chòi nào cũng được, chỉ chủ chòi mới bán. Vàng từ mỗi con quái chia đều cho cả phe; có thể tặng vàng cho đồng đội. Gọi quái sớm được thưởng thêm vàng.',
  demo: (el) => el && thuthanhDemo(el),
});
