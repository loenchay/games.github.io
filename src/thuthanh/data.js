// Dữ liệu Thủ Thành Làng: bản đồ, vũ khí, quái. Dùng chung cho mô phỏng và hình vẽ.
export const MW = 20, MH = 12; // lưới ô
// Bản đồ: đường đi gồm các điểm gấp khúc theo ô (đi ngang/dọc), bắt đầu ngoài mép, kết thúc ở cổng làng.
// theme: màu đất/cỏ · water: [x,y,w,h] ao hồ · deco: [x,y,loại] vật cản không xây được
export const MAPS = {
  duonglang: { name: 'Đường Làng', theme: 'grass', paths: [[[-1, 2], [4, 2], [4, 8], [9, 8], [9, 3], [14, 3], [14, 9], [18, 9], [18, 6], [19, 6]]], gate: [19, 6], water: [[0, 10, 3, 2], [11, 10, 3, 2]], deco: [[1, 5, 'tree'], [7, 5, 'house'], [16, 1, 'tree'], [11, 1, 'tree']] },
  ngaba: { name: 'Ngã Ba Sông', theme: 'grass', paths: [[[-1, 1], [6, 1], [6, 6], [12, 6], [12, 10], [17, 10], [17, 5], [19, 5]], [[-1, 10], [3, 10], [3, 6], [6, 6], [12, 6], [12, 10], [17, 10], [17, 5], [19, 5]]], gate: [19, 5], water: [[8, 0, 4, 3], [0, 4, 2, 1]], deco: [[15, 2, 'house'], [9, 9, 'tree']] },
  xoanoc: { name: 'Vòng Xoáy', theme: 'grass', paths: [[[-1, 1], [18, 1], [18, 10], [1, 10], [1, 4], [15, 4], [15, 7], [5, 7], [5, 5], [11, 5]]], gate: [11, 5], water: [[19, 4, 1, 4]], deco: [] },
  ruongbac: { name: 'Ruộng Bậc Thang', theme: 'rice', paths: [[[-1, 1], [18, 1], [18, 4], [1, 4], [1, 7], [18, 7], [18, 10], [19, 10]]], gate: [19, 10], water: [[0, 9, 6, 3], [7, 9, 5, 3]], deco: [[0, 2, 'tree'], [19, 2, 'tree'], [0, 5, 'hut'], [19, 5, 'tree']] },
  bienxanh: { name: 'Bãi Biển', theme: 'sand', paths: [[[-1, 2], [7, 2], [7, 6], [19, 6]], [[-1, 10], [10, 10], [10, 6], [19, 6]]], gate: [19, 6], water: [[12, 9, 8, 3], [12, 0, 8, 2]], deco: [[3, 5, 'palm'], [4, 7, 'palm'], [15, 3, 'palm'], [2, 0, 'umbrella'], [16, 8, 'boat']] },
  rungtre: { name: 'Rừng Tre 3 Lối', theme: 'bamboo', paths: [[[-1, 1], [9, 1], [9, 6], [16, 6], [16, 3], [19, 3]], [[-1, 10], [9, 10], [9, 6], [16, 6], [16, 3], [19, 3]], [[13, 12], [13, 6], [16, 6], [16, 3], [19, 3]]], gate: [19, 3], water: [], deco: [[2, 4, 'bamboo'], [3, 7, 'bamboo'], [5, 5, 'bamboo'], [17, 9, 'bamboo'], [18, 10, 'bamboo'], [11, 3, 'bamboo'], [19, 7, 'bamboo']] },
  doiche: { name: 'Đồi Chè', theme: 'tea', paths: [[[20, 1], [2, 1], [2, 5], [17, 5], [17, 9], [0, 9]]], gate: [0, 9], water: [[8, 10, 4, 2]], deco: [[5, 3, 'hut'], [12, 7, 'tree'], [19, 7, 'tree']] },
  nuida: { name: 'Núi Đá', theme: 'rock', paths: [[[-1, 6], [6, 6], [6, 2], [13, 2], [13, 9], [19, 9]]], gate: [19, 9], water: [[16, 1, 3, 3]], deco: [[2, 3, 'rock'], [3, 9, 'rock'], [9, 5, 'rock'], [10, 6, 'rock'], [9, 7, 'rock'], [16, 6, 'rock'], [4, 0, 'rock'], [10, 10, 'rock'], [17, 11, 'rock'], [1, 1, 'rock']] },
};
export const THEMES = {
  grass: { g: ['#8fd16a', '#97d873'], tuft: '#7cbf58', road: ['#a5783f', '#d9b06a'] },
  rice: { g: ['#9fd86b', '#a8df74'], tuft: '#6fae3f', road: ['#8b6a3a', '#c9a061'] },
  sand: { g: ['#f2dca0', '#f6e3ab'], tuft: '#d9c07a', road: ['#b48a52', '#e2c181'] },
  bamboo: { g: ['#6fb352', '#78bb5a'], tuft: '#4f8f39', road: ['#8e6537', '#c49a5e'] },
  tea: { g: ['#7fcb5c', '#88d364'], tuft: '#4f9a3a', road: ['#a0703c', '#d6a865'] },
  rock: { g: ['#9fb38b', '#a7bb93'], tuft: '#7f9370', road: ['#7f7466', '#b3a792'] },
};

// Vũ khí: mỗi loại 4 cấp. lv[i] là chỉ số ở cấp i (0..3); perks[i] là tính năng mở khi lên cấp i+1.
// Thuộc tính đặc biệt trong cấp: multi (số mục tiêu), burn [sát thương, số khung], splash (bán kính ô), slow [hệ số, khung],
// stun [tỉ lệ, khung], freeze [tỉ lệ, khung], chain (số lần nảy), pierce (xuyên giáp), crit [tỉ lệ, hệ số], burst (trúng mọi quái trong tầm),
// beam (tia liên tục, ramp = hệ số tối đa khi chiếu lâu), air (bắn được quái bay)
export const TOWERS = {
  cung: {
    name: 'Chòi cung', cost: 50, up: [45, 75, 120], desc: 'Rẻ, bắn nhanh 1 mục tiêu, trúng cả chim',
    lv: [
      { range: 2.6, dmg: 9, rate: 30, air: true },
      { range: 2.9, dmg: 13, rate: 27, air: true, multi: 2 },
      { range: 3.1, dmg: 18, rate: 24, air: true, multi: 2, burn: [24, 120] },
      { range: 3.5, dmg: 26, rate: 20, air: true, multi: 3, burn: [36, 120] },
    ],
    perks: [['Tên đôi', 'Bắn 2 mục tiêu cùng lúc'], ['Tên lửa', 'Mũi tên tẩm dầu đốt cháy quái'], ['Mưa tên', 'Bắn 3 mục tiêu, tầm xa hơn']],
  },
  sung: {
    name: 'Súng máy', cost: 80, up: [70, 110, 170], desc: 'Bắn liên thanh, sát thương nhỏ, trúng cả chim',
    lv: [
      { range: 2.4, dmg: 4, rate: 8, air: true },
      { range: 2.6, dmg: 5, rate: 7, air: true, pierce: true },
      { range: 2.8, dmg: 7, rate: 5, air: true, pierce: true },
      { range: 3.0, dmg: 9, rate: 5, air: true, pierce: true, crit: [0.2, 3] },
    ],
    perks: [['Đạn xuyên giáp', 'Bỏ qua giáp của rùa, Chằn Tinh'], ['Băng đạn lớn', 'Bắn nhanh hơn hẳn'], ['Chí mạng', '20% phát bắn gây gấp 3 sát thương']],
  },
  da: {
    name: 'Máy bắn đá', cost: 90, up: [75, 120, 180], desc: 'Ném đá vỡ một vùng, không trúng chim',
    lv: [
      { range: 3.2, dmg: 24, rate: 84, splash: 0.9 },
      { range: 3.4, dmg: 36, rate: 80, splash: 1.2 },
      { range: 3.6, dmg: 50, rate: 76, splash: 1.25, stun: [0.3, 40] },
      { range: 3.9, dmg: 66, rate: 72, splash: 1.3, stun: [0.3, 40], multi: 2 },
    ],
    perks: [['Đá tảng', 'Vùng vỡ rộng hơn'], ['Đá choáng', '30% làm quái choáng đứng im'], ['Mưa đá', 'Ném 2 tảng vào 2 mục tiêu']],
  },
  daibac: {
    name: 'Đại bác', cost: 150, up: [120, 180, 260], desc: 'Tầm rất xa, nổ to, bắn chậm',
    lv: [
      { range: 4.2, dmg: 60, rate: 130, splash: 1.0 },
      { range: 4.5, dmg: 85, rate: 125, splash: 1.1, burn: [40, 120] },
      { range: 5.4, dmg: 120, rate: 115, splash: 1.2, burn: [50, 120] },
      { range: 5.8, dmg: 160, rate: 105, splash: 1.4, burn: [60, 120], multi: 2, air: true },
    ],
    perks: [['Đạn cháy', 'Vụ nổ để lại lửa đốt quái'], ['Nòng dài', 'Tầm bắn xa hẳn ra'], ['Pháo kép phòng không', 'Bắn 2 phát, trúng được cả quái bay']],
  },
  bun: {
    name: 'Ao bùn', cost: 60, up: [50, 80, 120], desc: 'Làm quái lội bùn chậm lại',
    lv: [
      { range: 1.8, dmg: 2, rate: 20, slow: [0.35, 40], burst: true },
      { range: 2.0, dmg: 3, rate: 20, slow: [0.5, 40], burst: true },
      { range: 2.1, dmg: 4, rate: 20, slow: [0.55, 40], burst: true, burn: [12, 60] },
      { range: 2.5, dmg: 6, rate: 20, slow: [0.6, 40], burst: true, burn: [18, 60], stun: [0.06, 30] },
    ],
    perks: [['Bùn sâu', 'Chậm hơn nữa'], ['Đỉa', 'Đỉa bám hút máu quái'], ['Đầm lầy', 'Rộng hơn, thỉnh thoảng sa lầy đứng im']],
  },
  bang: {
    name: 'Máy phun băng', cost: 110, up: [90, 140, 200], desc: 'Bắn băng làm chậm mạnh, trúng cả chim',
    lv: [
      { range: 2.4, dmg: 5, rate: 24, slow: [0.45, 80], air: true },
      { range: 2.6, dmg: 7, rate: 22, slow: [0.6, 80], air: true },
      { range: 2.8, dmg: 9, rate: 20, slow: [0.6, 90], air: true, freeze: [0.12, 60] },
      { range: 3.0, dmg: 12, rate: 18, slow: [0.65, 90], air: true, freeze: [0.12, 60], burst: true },
    ],
    perks: [['Lạnh buốt', 'Làm chậm mạnh hơn'], ['Đóng băng', '12% đóng băng quái đứng im 1 giây'], ['Bão tuyết', 'Phun trúng mọi quái trong tầm']],
  },
  phao: {
    name: 'Pháo tre', cost: 120, up: [100, 150, 210], desc: 'Nổ đì đùng trúng mọi quái quanh chòi',
    lv: [
      { range: 2.2, dmg: 16, rate: 72, burst: true, air: true },
      { range: 2.5, dmg: 26, rate: 68, burst: true, air: true },
      { range: 2.6, dmg: 36, rate: 62, burst: true, air: true, stun: [0.15, 30] },
      { range: 2.8, dmg: 50, rate: 46, burst: true, air: true, stun: [0.15, 30] },
    ],
    perks: [['Pháo đại', 'Nổ to và rộng hơn'], ['Pháo hoa', '15% làm quái loá mắt đứng im'], ['Pháo dây', 'Nổ liên tục, nhanh hơn hẳn']],
  },
  dien: {
    name: 'Cột điện', cost: 140, up: [110, 160, 230], desc: 'Tia sét nảy qua nhiều quái, trúng cả chim',
    lv: [
      { range: 2.8, dmg: 20, rate: 60, chain: 3, air: true },
      { range: 3.0, dmg: 26, rate: 56, chain: 4, air: true },
      { range: 3.1, dmg: 34, rate: 52, chain: 4, air: true, stun: [0.2, 25] },
      { range: 3.4, dmg: 46, rate: 46, chain: 6, air: true, stun: [0.2, 25] },
    ],
    perks: [['Dây đồng', 'Sét nảy thêm 1 con'], ['Giật tê', '20% làm quái tê liệt'], ['Sấm sét', 'Nảy tới 6 con, mạnh hơn']],
  },
  laze: {
    name: 'Tia laze', cost: 180, up: [140, 200, 300], desc: 'Chiếu tia liên tục, càng lâu càng nóng, xuyên giáp',
    lv: [
      { range: 3.0, dmg: 3, rate: 6, beam: true, ramp: 2, pierce: true, air: true },
      { range: 3.2, dmg: 4, rate: 6, beam: true, ramp: 3, pierce: true, air: true },
      { range: 3.4, dmg: 5, rate: 6, beam: true, ramp: 3, pierce: true, air: true, multi: 2 },
      { range: 4.0, dmg: 8, rate: 6, beam: true, ramp: 3.5, pierce: true, air: true, multi: 2 },
    ],
    perks: [['Hội tụ', 'Chiếu lâu nóng tới gấp 3'], ['Tia đôi', 'Chiếu 2 mục tiêu'], ['Tia tử thần', 'Mạnh và xa hơn nhiều']],
  },
};
export const TOWER_KEYS = Object.keys(TOWERS);

export const ENEMIES = {
  chuot: { name: 'Chuột đồng', hp: 30, sp: 0.052, gold: 4, dmg: 1, size: 0.55 },
  heo: { name: 'Heo rừng', hp: 85, sp: 0.034, gold: 7, dmg: 1, size: 0.7 },
  trau: { name: 'Trâu điên', hp: 280, sp: 0.023, gold: 15, dmg: 2, size: 0.9 },
  qua: { name: 'Quạ đen', hp: 45, sp: 0.045, gold: 6, dmg: 1, fly: true, size: 0.6 },
  rua: { name: 'Rùa giáp', hp: 150, sp: 0.02, gold: 10, dmg: 1, armor: 6, size: 0.7 },
  ong: { name: 'Ong vò vẽ', hp: 22, sp: 0.07, gold: 3, dmg: 1, fly: true, size: 0.4 },
  chan: { name: 'Chằn Tinh', hp: 950, sp: 0.016, gold: 90, dmg: 6, boss: true, armor: 3, size: 1.25 },
  thuong: { name: 'Thuồng Luồng', hp: 1150, sp: 0.018, gold: 120, dmg: 7, boss: true, regen: 0.00018, size: 1.3 },
};
// các ô thuộc đường đi (không được xây)
export function pathCells(map) {
  const set = new Set();
  for (const p of map.paths) for (let i = 0; i < p.length - 1; i++) {
    const [x0, y0] = p[i], [x1, y1] = p[i + 1];
    const n = Math.ceil(Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) * 2);
    for (let k = 0; k <= n; k++) { const x = x0 + ((x1 - x0) * k) / n, y = y0 + ((y1 - y0) * k) / n; set.add(Math.round(x) + ',' + Math.round(y)); set.add(Math.floor(x) + ',' + Math.floor(y)); }
  }
  return set;
}
export function blockedCell(map, cells, x, y) {
  return cells.has(x + ',' + y) || map.water.some(([wx, wy, ww, wh]) => x >= wx && x < wx + ww && y >= wy && y < wy + wh)
    || map.deco.some(([dx, dy]) => dx === x && dy === y) || (x === map.gate[0] && Math.abs(y - map.gate[1]) <= 1);
}
export function pathLen(p) { let L = 0; for (let i = 0; i < p.length - 1; i++) L += Math.hypot(p[i + 1][0] - p[i][0], p[i + 1][1] - p[i][1]); return L; }
// vị trí (ô, có số lẻ) theo quãng đường đã đi; toạ độ tâm ô = số nguyên + 0.5
export function posAt(p, d) {
  for (let i = 0; i < p.length - 1; i++) {
    const L = Math.hypot(p[i + 1][0] - p[i][0], p[i + 1][1] - p[i][1]);
    if (d <= L) { const k = L ? d / L : 0; return [p[i][0] + (p[i + 1][0] - p[i][0]) * k + 0.5, p[i][1] + (p[i + 1][1] - p[i][1]) * k + 0.5]; }
    d -= L;
  }
  const e = p[p.length - 1];
  return [e[0] + 0.5, e[1] + 0.5];
}
export const PCOL = ['#ff8a3d', '#3b82f6', '#2fbf71', '#9775fa'];
export const REFUND = 0.5; // gỡ vũ khí hoàn 50% giá xây ban đầu
