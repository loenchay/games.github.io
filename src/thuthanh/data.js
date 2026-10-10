// Dữ liệu Thủ Thành Làng: bản đồ, tháp canh, quái. Dùng chung cho mô phỏng và hình vẽ.
export const MW = 20, MH = 12; // lưới ô
// đường đi: các điểm gấp khúc theo ô (đi thẳng ngang/dọc), bắt đầu ngoài mép trái, kết thúc ở cổng làng
export const MAPS = {
  duonglang: { name: 'Đường Làng', paths: [[[-1, 2], [4, 2], [4, 8], [9, 8], [9, 3], [14, 3], [14, 9], [18, 9], [18, 6], [19, 6]]], gate: [19, 6], water: [[0, 10, 3, 2], [11, 10, 3, 2]] },
  ngaba: { name: 'Ngã Ba Sông', paths: [[[-1, 1], [6, 1], [6, 6], [12, 6], [12, 10], [17, 10], [17, 5], [19, 5]], [[-1, 10], [3, 10], [3, 6], [6, 6], [12, 6], [12, 10], [17, 10], [17, 5], [19, 5]]], gate: [19, 5], water: [[8, 0, 4, 3], [0, 4, 2, 1]] },
  xoanoc: { name: 'Vòng Xoáy', paths: [[[-1, 1], [18, 1], [18, 10], [1, 10], [1, 4], [15, 4], [15, 7], [5, 7], [5, 5], [11, 5]]], gate: [11, 5], water: [[19, 4, 1, 4]] },
};
export const TOWERS = {
  cung: { name: 'Chòi cung', icon: '🏹', cost: 50, up: [45, 90], range: [2.6, 2.9, 3.2], dmg: [9, 15, 25], rate: [30, 24, 18], air: true, desc: 'Bắn nhanh 1 mục tiêu, bắn được chim bay' },
  da: { name: 'Máy bắn đá', icon: '🪨', cost: 90, up: [75, 130], range: [3.2, 3.5, 3.8], dmg: [24, 40, 62], rate: [84, 78, 72], splash: [0.9, 1.05, 1.2], air: false, desc: 'Ném đá vỡ một vùng, chậm mà đau, không trúng chim' },
  bun: { name: 'Ao bùn', icon: '🌀', cost: 60, up: [50, 90], range: [1.8, 2.0, 2.2], dmg: [2, 3, 5], rate: [20, 20, 20], slow: [0.35, 0.45, 0.55], air: false, desc: 'Làm quái lội bùn chậm lại' },
  phao: { name: 'Pháo tre', icon: '🧨', cost: 120, up: [100, 160], range: [2.2, 2.4, 2.6], dmg: [16, 27, 42], rate: [72, 66, 60], burst: true, air: true, desc: 'Nổ đì đùng trúng mọi quái quanh tháp' },
};
export const ENEMIES = {
  chuot: { name: 'Chuột đồng', icon: '🐀', hp: 30, sp: 0.052, gold: 4, dmg: 1 },
  heo: { name: 'Heo rừng', icon: '🐗', hp: 85, sp: 0.034, gold: 7, dmg: 1 },
  trau: { name: 'Trâu điên', icon: '🐃', hp: 280, sp: 0.023, gold: 15, dmg: 2 },
  qua: { name: 'Quạ đen', icon: '🐦‍⬛', hp: 45, sp: 0.045, gold: 6, dmg: 1, fly: true },
  chan: { name: 'Chằn Tinh', icon: '👹', hp: 950, sp: 0.016, gold: 90, dmg: 6, boss: true },
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
