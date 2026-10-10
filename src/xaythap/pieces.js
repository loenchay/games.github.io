// Các khối đồ vật dùng để xây tháp (đơn vị mét, trục y hướng lên). Dùng chung cho mô phỏng và hình vẽ.
export const PIECES = {
  gach: { name: 'Viên gạch', color: '#c8553d', parts: [{ t: 'box', w: 1.2, h: 0.45 }] },
  thung: { name: 'Thùng gỗ', color: '#b07a3c', parts: [{ t: 'box', w: 0.9, h: 0.9 }] },
  banhchung: { name: 'Bánh chưng', color: '#3f8f3a', parts: [{ t: 'box', w: 0.85, h: 0.85 }] },
  tre: { name: 'Đốt tre', color: '#9cc64a', parts: [{ t: 'box', w: 2.4, h: 0.26 }] },
  mam: { name: 'Mâm đồng', color: '#e0a93a', parts: [{ t: 'box', w: 1.9, h: 0.16 }] },
  bao: { name: 'Bao gạo', color: '#e9dcc0', parts: [{ t: 'poly', p: [[-0.55, -0.32], [0.55, -0.32], [0.5, 0.28], [0.22, 0.38], [-0.22, 0.38], [-0.5, 0.28]] }] },
  non: { name: 'Nón lá', color: '#e8c96a', parts: [{ t: 'poly', p: [[-0.72, -0.22], [0.72, -0.22], [0, 0.42]] }] },
  dua: { name: 'Quả dưa hấu', color: '#3a9a43', parts: [{ t: 'circle', r: 0.42 }] },
  ghe: { name: 'Ghế đẩu', color: '#a8683a', parts: [{ t: 'box', w: 1.0, h: 0.14, y: 0.28 }, { t: 'box', w: 0.14, h: 0.46, x: -0.36, y: -0.02 }, { t: 'box', w: 0.14, h: 0.46, x: 0.36, y: -0.02 }] },
  L: { name: 'Gạch chữ L', color: '#d4763b', parts: [{ t: 'box', w: 1.2, h: 0.4, y: -0.2 }, { t: 'box', w: 0.4, h: 0.5, x: -0.4, y: 0.25 }] },
  chum: { name: 'Cái chum', color: '#8a5a3c', parts: [{ t: 'poly', p: [[-0.3, -0.45], [0.3, -0.45], [0.48, 0], [0.3, 0.45], [-0.3, 0.45], [-0.48, 0]] }] },
};
export const SETS = {
  easy: ['gach', 'gach', 'thung', 'banhchung', 'mam', 'bao', 'tre', 'thung'],
  mix: ['gach', 'thung', 'banhchung', 'mam', 'bao', 'tre', 'ghe', 'L', 'chum', 'non'],
  crazy: ['gach', 'thung', 'tre', 'mam', 'ghe', 'L', 'chum', 'non', 'non', 'dua', 'bao'],
};
// bán kính bao quanh (để biết treo cao bao nhiêu cho khỏi chạm tháp)
export function radiusOf(kind) {
  let r = 0;
  for (const p of PIECES[kind].parts) {
    const cx = p.x || 0, cy = p.y || 0;
    if (p.t === 'box') r = Math.max(r, Math.hypot(Math.abs(cx) + p.w / 2, Math.abs(cy) + p.h / 2));
    else if (p.t === 'circle') r = Math.max(r, Math.hypot(cx, cy) + p.r);
    else for (const [x, y] of p.p) r = Math.max(r, Math.hypot(x, y));
  }
  return r;
}
export const RAFT_W = 6.4, RAFT_H = 0.5;
