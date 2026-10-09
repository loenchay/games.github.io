// Xe trong "Đua Xe Đường Làng" — xe tự thiết kế, mỗi chiếc mạnh một kiểu.
// top: tốc độ tối đa (u/khung) · acc: tăng tốc · steer: bẻ lái · mass: nặng (húc mạnh, khó bị đẩy) · len/wid: kích thước px
export const CARS = [
  { id: 'cub', name: 'Cúp 50', desc: 'Cân bằng mọi mặt — dễ chơi nhất.', top: 1180, acc: 26, steer: 360, mass: 100, len: 60, wid: 28, color: '#4dabf7', kind: 'moto' },
  { id: 'vespa', name: 'Vespa Cổ', desc: 'Tăng tốc cực nhanh, nhẹ nên dễ bị húc văng.', top: 1150, acc: 38, steer: 380, mass: 82, len: 58, wid: 30, color: '#38d9a9', kind: 'scooter' },
  { id: 'dream', name: 'Dream Lùn', desc: 'Tốc độ tối đa cao nhất, ôm cua hơi cứng.', top: 1290, acc: 24, steer: 320, mass: 96, len: 64, wid: 28, color: '#9775fa', kind: 'moto' },
  { id: 'lam', name: 'Xe Lam', desc: 'To nặng, húc ai người đó bay — nhưng chậm chạp.', top: 1080, acc: 20, steer: 290, mass: 150, len: 76, wid: 40, color: '#ffd43b', kind: 'lam' },
  { id: 'dien', name: 'Xe Đạp Điện', desc: 'Lạng lách siêu linh hoạt, nhẹ tênh.', top: 1110, acc: 32, steer: 460, mass: 70, len: 54, wid: 26, color: '#ff6fb5', kind: 'ebike' },
  { id: 'nong', name: 'Công Nông', desc: 'Xe trâu sắt: húc là ủi, đâm chướng ngại nhỏ không sao.', top: 1040, acc: 18, steer: 270, mass: 175, len: 80, wid: 42, color: '#ff6b00', kind: 'tractor', tough: 1 },
];
export const CAR = Object.fromEntries(CARS.map((c) => [c.id, c]));
// các làng trên đường đua
export const VILLAGES = ['Làng Đông Hồ', 'Làng Bát Tràng', 'Làng Vạn Phúc', 'Làng Đường Lâm', 'Làng Phù Lãng', 'Làng Chuông', 'Làng Kim Bồng', 'Làng Thanh Hà', 'Làng Sình', 'Làng Nôm', 'Làng Hương Canh', 'Làng Thổ Hà'];
export const THEMES = ['Đồng Lúa', 'Ven Biển', 'Núi Rừng'];
