// Dàn võ sĩ của "Quyền Cước 97" — 12 nhân vật tự thiết kế (không dùng nhân vật của game nào khác).
// Lệnh chiêu (khi nhìn về bên phải): qcf = ↓↘→ · qcb = ↓↙← · dp = →↓↘ · super = ↓↘→↓↘→  + nút Đấm (P) / Đá (K)
// look: skin, hair, hairStyle, gi (áo), trim, belt, pants, band, aura, sleeve (màu tay áo, 'skin' = áo ba lỗ), extra phụ kiện
// glyph: hình vẽ chưởng (orb | star | hat | laser | ball | bread | leaf | wave)

export const CHARS = [
  {
    id: 'teo', name: 'Tèo', title: 'Quyền Phố Cổ', desc: 'Cân bằng, dễ chơi: chưởng từ xa, đấm móc chống nhảy, chỏ lao tới.',
    hp: 1000, walkF: 400, walkB: 330, jump: 1750, size: 100, dmg: 100,
    look: { skin: '#ffd2a8', hair: '#2a2350', hairStyle: 'spike', gi: '#2f6bff', trim: '#ffd43b', belt: '#ffd43b', pants: '#2a2350', band: '#3ecf6e', aura: '#4dabf7', sleeve: 'skin' },
    specials: [
      { cmd: 'qcf', btn: 'p', name: 'Chưởng Phở', type: 'proj', glyph: 'orb', color: '#4dabf7', info: 'Chưởng bay thẳng, nhẹ chậm / mạnh nhanh' },
      { cmd: 'dp', btn: 'p', name: 'Thăng Long Quyền', type: 'rise', info: 'Đấm móc bay lên, bất tử lúc ra đòn — chống nhảy' },
      { cmd: 'qcb', btn: 'p', name: 'Tĩnh Tâm Phản Đòn', type: 'counter', info: 'Thủ thế: bị đánh trúng lúc này thì tự phản đòn cực đau' },
    ],
    super: { name: 'Đại Chưởng Phở', type: 'beam', color: '#4dabf7', info: 'Luồng chưởng khổng lồ quét ngang màn hình' }, quote: 'Ăn bát phở rồi đánh tiếp nhé!',
  },
  {
    id: 'mai', name: 'Mai', title: 'Lốc Xoáy Sông Hàn', desc: 'Nhanh, chân dài: phi cước lao tới, liên hoàn cước, phi tiêu hoa.',
    hp: 920, walkF: 460, walkB: 380, jump: 1820, size: 92, dmg: 92,
    look: { skin: '#ffe0bd', hair: '#5b2a86', hairStyle: 'ponytail', gi: '#ff6fb5', trim: '#ffffff', belt: '#ffffff', pants: '#2a2350', band: null, aura: '#ff6fb5' },
    specials: [
      { cmd: 'qcf', btn: 'k', name: 'Phi Cước', type: 'dash', info: 'Lao tới đá bay, ngã đối thủ' },
      { cmd: 'qcb', btn: 'k', name: 'Liên Hoàn Cước', type: 'multikick', info: 'Đá liên tục 5–6 cú tại chỗ' },
      { cmd: 'dp', btn: 'k', name: 'Phượng Hoàng Lao', type: 'dive', info: 'Bật lên rồi lao chéo xuống — phải đỡ đứng' },
    ],
    super: { name: 'Bão Cước Hàn Giang', type: 'rush', info: 'Lao tới tung chuỗi đá liên hoàn' }, quote: 'Chân nhanh hơn não của bạn đó!',
  },
  {
    id: 'sam', name: 'Bác Sấm', title: 'Đô Vật Làng Mai', desc: 'To khoẻ, chậm: ôm vật cực đau, húc đầu, dậm đất.',
    hp: 1150, walkF: 290, walkB: 250, jump: 1560, size: 118, dmg: 115,
    look: { skin: '#e8a27c', hair: '#1d1648', hairStyle: 'bald', gi: '#ff9f43', trim: '#1d1648', belt: '#1d1648', pants: '#8a5a2b', band: null, aura: '#ff9f43', beard: true, open: true },
    specials: [
      { cmd: 'qcb', btn: 'p', name: 'Ôm Gấu', type: 'grab', info: 'Ôm vật tầm gần, không đỡ được' },
      { cmd: 'qcf', btn: 'p', name: 'Húc Đầu Trâu', type: 'armor', info: 'Lao húc, chịu được 1 đòn mà không khựng (mạnh: 2 đòn)' },
      { cmd: 'dp', btn: 'k', name: 'Dậm Đất', type: 'quake', info: 'Rung đất quanh mình — phải ngồi đỡ hoặc nhảy' },
    ],
    super: { name: 'Sấm Sét Giáng Đồi', type: 'biggrab', info: 'Ôm vật siêu cấp, tầm xa hơn' }, quote: 'Về nhà ăn thêm bát cơm nữa đi cháu.',
  },
  {
    id: 'hac', name: 'Lão Hạc', title: 'Ẩn Sĩ Núi Tản', desc: 'Tay dài, khó lường: chưởng gió, thuấn di ra sau lưng.',
    hp: 950, walkF: 350, walkB: 330, jump: 1650, size: 104, dmg: 98,
    look: { skin: '#f3d3b0', hair: '#f1f1f1', hairStyle: 'long', gi: '#9775fa', trim: '#ffffff', belt: '#ffffff', pants: '#2a2350', band: null, aura: '#9775fa', beard: true, longBeard: true },
    specials: [
      { cmd: 'qcb', btn: 'k', name: 'Thuấn Di', type: 'tele', info: 'Biến mất rồi hiện ra sau lưng đối thủ' },
      { cmd: 'qcf', btn: 'p', name: 'Hạc Mỏ Dài', type: 'stretch', info: 'Vươn tay đâm cực xa' },
      { cmd: 'dp', btn: 'p', name: 'Chưởng Gió', type: 'wave', info: 'Gió xuyên qua chưởng địch, trúng 2 lần' },
    ],
    super: { name: 'Vạn Chưởng Quy Tông', type: 'tornado', info: 'Lốc xoáy hút đối thủ vào rồi đánh liên tục' }, quote: 'Gió núi Tản thổi bay mọi kiêu ngạo.',
  },
  {
    id: 'tu', name: 'Tư Xích Lô', title: 'Tay Lái Lụa Sài Gòn', desc: 'Chiếc nón lá bay vòng, lao như xích lô xuống dốc.',
    hp: 1000, walkF: 380, walkB: 320, jump: 1700, size: 102, dmg: 100,
    look: { skin: '#d9976b', hair: '#1d1648', hairStyle: 'hat', gi: '#ffffff', trim: '#8a5a2b', belt: '#8a5a2b', pants: '#5b4636', band: null, aura: '#ffd43b', sleeve: 'skin', tank: true },
    specials: [
      { cmd: 'qcf', btn: 'p', name: 'Nón Lá Bay', type: 'boomerang', glyph: 'hat', color: '#f2d27a', info: 'Nón bay ra rồi quay về, trúng 2 lượt' },
      { cmd: 'qcb', btn: 'k', name: 'Xích Lô Xuống Dốc', type: 'charge', info: 'Lao dài, xuyên qua chưởng của đối thủ' },
      { cmd: 'dp', btn: 'k', name: 'Đạp Bàn Đạp', type: 'launcher', info: 'Hất đối thủ bay lên — đánh tiếp được trên không' },
    ],
    super: { name: 'Đoàn Xích Lô Xuyên Việt', type: 'convoy', info: 'Cả đoàn xích lô phóng ngang màn hình' }, quote: 'Lên xe đi, chú chở về bệnh viện!',
  },
  {
    id: 'ba', name: 'Cô Ba', title: 'Bánh Mì Chợ Lớn', desc: 'Vung ổ bánh mì dài như gậy: đòn xa, quay tít, ném pa-tê.',
    hp: 980, walkF: 360, walkB: 320, jump: 1680, size: 98, dmg: 102,
    look: { skin: '#ffd8b5', hair: '#7a2e1d', hairStyle: 'scarf', gi: '#ffd43b', trim: '#ff4d5e', belt: '#ff4d5e', pants: '#2a2350', band: '#ff4d5e', aura: '#ffb347', apron: '#ffffff' },
    specials: [
      { cmd: 'qcf', btn: 'k', name: 'Gậy Bánh Mì Quét', type: 'pole', info: 'Quét thấp cực xa bằng ổ bánh mì dài' },
      { cmd: 'qcb', btn: 'p', name: 'Ném Pa-tê', type: 'lob', glyph: 'pate', color: '#c97a3f', info: 'Ném vòng cầu rơi trúng đầu' },
      { cmd: 'dp', btn: 'k', name: 'Gió Lốc Chợ Lớn', type: 'spin', info: 'Xoay tròn tiến tới, trúng 3 lần' },
    ],
    super: { name: 'Mưa Bánh Mì', type: 'rain', info: 'Bánh mì rơi như mưa xuống đầu đối thủ' }, quote: 'Mua một ổ không? Cô bán rẻ cho!',
  },
  {
    id: 'kiet', name: 'Kiệt', title: 'Ninja Rừng Tràm', desc: 'Thoắt ẩn thoắt hiện: phi tiêu nhanh, đá lộn, dịch chuyển.',
    hp: 900, walkF: 450, walkB: 400, jump: 1880, size: 96, dmg: 94,
    look: { skin: '#f0c49a', hair: '#1d1648', hairStyle: 'mask', gi: '#2a2350', trim: '#ff4d5e', belt: '#ff4d5e', pants: '#2a2350', band: '#ff4d5e', aura: '#ff4d5e' },
    specials: [
      { cmd: 'qcf', btn: 'p', name: 'Tam Phi Tiêu', type: 'spread', glyph: 'star', color: '#c0c6d6', info: '3 phi tiêu: thấp, giữa, cao' },
      { cmd: 'dp', btn: 'k', name: 'Ưng Trảm', type: 'teleslash', info: 'Biến mất, hiện trên đầu đối thủ rồi chém xuống' },
      { cmd: 'qcb', btn: 'k', name: 'Khói Mù Xuyên Thân', type: 'cross', info: 'Lướt xuyên qua người đối thủ, bất tử' },
    ],
    super: { name: 'Bóng Đêm Rừng Tràm', type: 'shadow', info: 'Chém liên tục từ mọi phía' }, quote: 'Bạn còn chưa thấy mình ra đòn.',
  },
  {
    id: 'rx', name: 'RX-97', title: 'Robot Phế Liệu', desc: 'Chậm mà chắc: tia laser, tên lửa đấm móc, bắn tia siêu cấp.',
    hp: 1080, walkF: 300, walkB: 270, jump: 1580, size: 108, dmg: 106,
    look: { skin: '#b8c4d6', hair: '#6b7a90', hairStyle: 'robot', gi: '#8fa3bf', trim: '#ffd43b', belt: '#ffd43b', pants: '#6b7a90', band: null, aura: '#38d9a9', robot: true },
    specials: [
      { cmd: 'qcf', btn: 'p', name: 'Tia Laser', type: 'laser', color: '#38d9a9', info: 'Tia laser bắn tức thì hết màn hình (ra chậm)' },
      { cmd: 'dp', btn: 'p', name: 'Tên Lửa Đấm Móc', type: 'rocket', info: 'Phóng chéo lên như tên lửa, trúng 3 lần' },
      { cmd: 'qcb', btn: 'p', name: 'Nam Châm Hút', type: 'magnet', info: 'Hút đối thủ lại gần (không gây sát thương)' },
    ],
    super: { name: 'Mưa Tên Lửa Đồng Nát', type: 'missiles', info: '5 tên lửa tự đuổi theo đối thủ' }, quote: 'BÍP. ĐỐI THỦ ĐÃ BỊ TÁI CHẾ.',
  },
  {
    id: 'na', name: 'Bé Na', title: 'Siêu Nhân Ná Thun', desc: 'Nhỏ xíu, khó đánh trúng: bắn ná, lăn tròn, nhảy cực cao.',
    hp: 860, walkF: 430, walkB: 380, jump: 1950, size: 84, dmg: 88,
    look: { skin: '#ffe0bd', hair: '#3a2a20', hairStyle: 'cap', gi: '#ff4d5e', trim: '#ffffff', belt: '#2f6bff', pants: '#2f6bff', band: '#ffd43b', aura: '#ffd43b' },
    specials: [
      { cmd: 'qcf', btn: 'p', name: 'Ná Nảy Bi', type: 'bounce', glyph: 'ball', color: '#ff9f43', info: 'Viên bi nảy tưng tưng dọc mặt đất' },
      { cmd: 'qcb', btn: 'k', name: 'Lăn Bánh Xe', type: 'roll', info: 'Lăn thấp, né chưởng và đòn đứng' },
      { cmd: 'dp', btn: 'k', name: 'Nhảy Lò Xo', type: 'stomp', info: 'Bật cao rồi dậm xuống, rung đất' },
    ],
    super: { name: 'Mưa Bi Ve', type: 'marbles', info: 'Rải bi ve khắp mặt đất, trúng đòn thấp liên tục' }, quote: 'Mẹ ơi con thắng rồi!!!',
  },
  {
    id: 'thay', name: 'Thầy Bảy', title: 'Võ Bình Định', desc: 'Võ cổ truyền: đá quét, khăn rằn quất gió, thế đứng vững chãi.',
    hp: 1020, walkF: 360, walkB: 320, jump: 1680, size: 102, dmg: 104,
    look: { skin: '#e2a878', hair: '#1d1648', hairStyle: 'topknot', gi: '#1d1648', trim: '#ff4d5e', belt: '#ff4d5e', pants: '#1d1648', band: null, aura: '#ff4d5e', scarf: true, beard: true },
    specials: [
      { cmd: 'qcf', btn: 'p', name: 'Khăn Rằn Quất', type: 'whip', info: 'Quất khăn tầm trung, kéo đối thủ lại gần' },
      { cmd: 'qcb', btn: 'k', name: 'Thiết Tảo Quét Đất', type: 'lowspin', info: 'Xoay quét thấp 3 lần — phải ngồi đỡ' },
      { cmd: 'dp', btn: 'p', name: 'Mãnh Hổ Vồ Mồi', type: 'tiger', info: 'Vồ tới trên cao — phải đỡ đứng' },
    ],
    super: { name: 'Tây Sơn Thần Tốc', type: 'tayson', info: 'Lướt xuyên qua đối thủ nhiều lần' }, quote: 'Ở Bình Định, con gái cũng đánh hay hơn con.',
  },
  {
    id: 'hung', name: 'Hùng Tạ', title: 'Lực Sĩ Cử Tạ', desc: 'Cơ bắp cuồn cuộn: quăng người, dậm tạ rung đất, lao như trâu.',
    hp: 1120, walkF: 300, walkB: 260, jump: 1560, size: 114, dmg: 112,
    look: { skin: '#c98a5e', hair: '#1d1648', hairStyle: 'flat', gi: '#ff4d5e', trim: '#ffffff', belt: '#1d1648', pants: '#ff4d5e', band: null, aura: '#ff4d5e', sleeve: 'skin', tank: true, mustache: true },
    specials: [
      { cmd: 'qcb', btn: 'p', name: 'Quăng Tạ Người', type: 'toss', info: 'Túm người quăng văng xa' },
      { cmd: 'qcf', btn: 'p', name: 'Lăn Tạ', type: 'barbell', glyph: 'barbell', color: '#555', info: 'Quả tạ lăn sát đất, rất đau — phải ngồi đỡ' },
      { cmd: 'dp', btn: 'p', name: 'Gồng Cơ', type: 'flex', info: '4 giây: đòn mạnh hơn 40% và chịu được 1 đòn' },
    ],
    super: { name: 'Cử Giật 300 Ký', type: 'bigquake', info: 'Thả tạ rung cả sàn — không nhảy là dính' }, quote: 'Nhẹ hều, như nâng tạ 5 ký.',
  },
  {
    id: 'lan', name: 'Lan', title: 'Nghệ Sĩ Xiếc Trung Ương', desc: 'Nhào lộn trên không: tung bóng, lộn ra sau lưng, đá xoay.',
    hp: 900, walkF: 420, walkB: 380, jump: 1900, size: 94, dmg: 94,
    look: { skin: '#ffe0bd', hair: '#ff6b00', hairStyle: 'pigtails', gi: '#9775fa', trim: '#ffd43b', belt: '#ffd43b', pants: '#ffd43b', band: null, aura: '#9775fa' },
    specials: [
      { cmd: 'qcf', btn: 'p', name: 'Tung Bóng Xiếc', type: 'juggle', glyph: 'ball', color: '#9775fa', info: 'Tung 3 quả bóng vòng cầu ở 3 tầm' },
      { cmd: 'qcb', btn: 'k', name: 'Lộn Qua Đầu', type: 'flip', info: 'Lộn qua đầu đối thủ rồi đá từ phía sau' },
      { cmd: 'dp', btn: 'p', name: 'Vòng Lửa Xiếc', type: 'hoop', glyph: 'hoop', color: '#ff6b00', info: 'Vòng lửa lăn chậm, dội tường quay lại' },
    ],
    super: { name: 'Đêm Diễn Cuối Cùng', type: 'circus', info: 'Bật lò xo lên cao, rải bóng xuống đối thủ' }, quote: 'Cảm ơn quý khán giả! Vỗ tay đi nào!',
  },
];
export const CHAR = Object.fromEntries(CHARS.map((c) => [c.id, c]));
export const CMD_TXT = { qcf: '↓↘→', qcb: '↓↙←', dp: '→↓↘', super: '↓↘→↓↘→' };
