// Xây Tháp Lắc Lư online: 1–4 người thay phiên thả đồ lên bè tre, người còn lại xem.
import { startTableRoom } from '../table/room.js';
import { LOGIC } from './logic.js';
import { view, xaythapDemo } from './view.js';

startTableRoom({
  ns: 'xaythap', title: 'Xây Tháp Lắc Lư', emoji: '🗼', logic: LOGIC, view,
  seatName: (i) => `Thợ xây ${i + 1}`, seatColor: (i) => ['#ff8a3d', '#3b82f6', '#2fbf71', '#9775fa'][i],
  cfg: [
    { key: 'waves', label: 'Sóng', opts: [['calm', '🌤 Lặng'], ['medium', '🌊 Vừa'], ['strong', '🌪 To']] },
    { key: 'set', label: 'Đồ vật', opts: [['easy', 'Dễ (gạch, thùng)'], ['mix', 'Lẫn lộn'], ['crazy', 'Quái (dưa hấu, nón lá)']] },
    { key: 'bot', label: 'Thêm thợ máy', opts: [[0, 'Không'], [1, 'Có']] },
  ],
  ruleNote: 'Mọi người lần lượt thả đồ (gạch, thùng gỗ, bánh chưng, đốt tre, nón lá, dưa hấu...) lên chiếc bè tre đang dập dềnh trên sông. Mỗi lượt được dời trái/phải và xoay từng 15° rồi bấm Thả. Món nào rơi xuống sông là tháp sập — người vừa thả món cuối thua, những người còn lại thắng. Tháp càng cao, sóng càng lắc mạnh. Chơi 1 mình để thử xem xếp được cao bao nhiêu.',
  demo: (el) => el && xaythapDemo(el),
});
