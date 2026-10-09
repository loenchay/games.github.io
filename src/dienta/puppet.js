import { CHARS } from './chars.js';
// Nhân vật rối SVG: khung xương đơn giản (đầu, thân, tay 2 đốt, chân 2 đốt)
// + bộ trang phục (skin) tự thiết kế + tuỳ chọn ảnh làm mặt.

// Bảng màu cho bản 2D (dự phòng) lấy từ danh sách nhân vật
export const SKINS = Object.fromEntries(CHARS.map((c) => [c.id, { name: c.name, emo: c.emo, skin: c.skin, shirt: c.top, pants: c.bottom, shoes: c.shoes, hair: c.hair }]));
export const SKIN_IDS = Object.keys(SKINS);

// ----- Bảng góc khớp (độ). Tay/chân TRÁI: dương = xoay ra ngoài (về bên trái màn hình) -----
export const ARM = {
  down: [10, 0], up: [170, 0], side: [90, 0], diag: [135, 0], hip: [40, -105],
  flex: [90, 90], cross: [25, -125], head: [150, -150], mouth: [15, -150], point: [65, -10], wave: [150, 25],
};
export const LEG = { down: [4, 0], kick: [70, -10], knee: [28, -55], step: [22, 0], spread: [35, 0] };
export const BODY = {
  stand: { t: '', legs: null },
  sit: { t: 'translate(0px,26px)', legs: [[80, -80], [80, -80]], stool: true },
  squat: { t: 'translate(0px,40px)', legs: [[110, -150], [110, -150]] },
  kneel: { t: 'translate(0px,34px)', legs: [[0, 170], [0, 170]] },
  lie: { t: 'translate(72px,58px) rotate(-90deg)' },
  leanL: { t: '', torso: 'rotate(18deg)' },
  leanR: { t: '', torso: 'rotate(-18deg)' },
  handstand: { t: 'translate(0px,-120px) rotate(180deg)' },
  // Bò 4 chân: thân nằm ngang, tay chân chống xuống đất, đầu xoay lại cho thẳng
  crawl: { t: 'translate(86px,6px) rotate(-90deg)', absArms: [[90, 0], [90, 0]], absLegs: [[90, 0], [90, 0]], head: 90, tail: 100 },
  bow: { t: '', torso: 'translateY(16px) scaleY(.84)', headDown: true },
  crossleg: { t: 'translate(0px,44px)', legs: [[88, -165], [88, -165]] },
};
export const HEAD = { center: 0, tiltL: 18, tiltR: -18, up: 0, down: 0 };

// Đạo cụ cầm tay: [mã, emoji, tên]
export const PROP_LIST = [
  ['scissors', '✂️', 'Kéo'], ['comb', '🪮', 'Lược'], ['mic', '🎤', 'Micro'], ['phone', '📱', 'Điện thoại'], ['ball', '⚽', 'Quả bóng'],
  ['racket', '🏸', 'Vợt'], ['rod', '🎣', 'Cần câu'], ['pan', '🍳', 'Chảo'], ['broom', '🧹', 'Chổi'], ['sword', '🗡️', 'Kiếm'],
  ['umbrella', '☂️', 'Ô'], ['book', '📖', 'Sách'], ['guitar', '🎸', 'Đàn'], ['violin', '🎻', 'Violin'], ['hammer', '🔨', 'Búa'],
  ['chopsticks', '🥢', 'Đũa'], ['bowl', '🍜', 'Tô'], ['wand', '🪄', 'Đũa phép'], ['magnifier', '🔍', 'Kính lúp'], ['camera', '📷', 'Máy ảnh'],
  ['flower', '🌹', 'Hoa'], ['gift', '🎁', 'Quà'], ['cup', '☕', 'Cốc'], ['toothbrush', '🪥', 'Bàn chải'], ['money', '💵', 'Tiền'],
  ['bone', '🦴', 'Khúc xương'], ['carrot', '🥕', 'Cà rốt'], ['banana', '🍌', 'Chuối'], ['stethoscope', '🩺', 'Ống nghe'], ['ruler', '📏', 'Thước'],
  ['balloon', '🎈', 'Bóng bay'], ['extinguisher', '🧯', 'Bình chữa cháy'], ['bottle', '🍼', 'Bình sữa'], ['gamepad', '🎮', 'Tay cầm game'], ['laptop', '💻', 'Laptop'],
  ['basket', '🧺', 'Giỏ'], ['ring', '💍', 'Nhẫn'], ['cake', '🎂', 'Bánh kem'], ['torch', '🔦', 'Đèn pin'], ['towel', '🧻', 'Khăn giấy'],
];
const PROPS = PROP_LIST.map(([id, e, n]) => [id, `${e} ${n}`]);
export const PROP_EMO = Object.fromEntries(PROP_LIST.map(([id, e]) => [id, e]));

// Danh sách nút điều khiển cho người diễn
export const CONTROLS = [
  { group: 'Toàn thân', key: 'body', opts: [['stand', 'Đứng'], ['sit', 'Ngồi ghế'], ['squat', 'Ngồi xổm'], ['kneel', 'Quỳ'], ['lie', 'Nằm'], ['leanL', 'Nghiêng trái'], ['leanR', 'Nghiêng phải'], ['handstand', 'Trồng cây chuối'], ['crawl', 'Bò 4 chân'], ['bow', 'Cúi chào'], ['crossleg', 'Ngồi xếp bằng']] },
  { group: 'Đầu', key: 'head', opts: [['center', 'Thẳng'], ['tiltL', 'Nghiêng trái'], ['tiltR', 'Nghiêng phải'], ['up', 'Ngước lên'], ['down', 'Cúi xuống']] },
  { group: 'Mặt', key: 'face', opts: [['neutral', '😐'], ['happy', '😄'], ['sad', '😢'], ['angry', '😠'], ['surprised', '😮'], ['scared', '😱'], ['sleepy', '😴'], ['cheeky', '😜'], ['love', '😍']] },
  { group: 'Tay trái', key: 'armL', opts: [['down', 'Hạ'], ['up', 'Giơ cao'], ['side', 'Dang ngang'], ['diag', 'Chéo lên'], ['hip', 'Chống hông'], ['flex', 'Khoe cơ'], ['cross', 'Ôm ngực'], ['head', 'Ôm đầu'], ['mouth', 'Đưa lên miệng'], ['point', 'Chỉ'], ['wave', 'Vẫy']] },
  { group: 'Tay phải', key: 'armR', opts: [['down', 'Hạ'], ['up', 'Giơ cao'], ['side', 'Dang ngang'], ['diag', 'Chéo lên'], ['hip', 'Chống hông'], ['flex', 'Khoe cơ'], ['cross', 'Ôm ngực'], ['head', 'Ôm đầu'], ['mouth', 'Đưa lên miệng'], ['point', 'Chỉ'], ['wave', 'Vẫy']] },
  { group: 'Chân trái', key: 'legL', opts: [['down', 'Thẳng'], ['step', 'Bước'], ['spread', 'Dạng'], ['knee', 'Co gối'], ['kick', 'Đá']] },
  { group: 'Chân phải', key: 'legR', opts: [['down', 'Thẳng'], ['step', 'Bước'], ['spread', 'Dạng'], ['knee', 'Co gối'], ['kick', 'Đá']] },
  { group: 'Đạo cụ tay trái', key: 'propL', toggle: true, opts: PROPS },
  { group: 'Đạo cụ tay phải', key: 'propR', toggle: true, opts: PROPS },
  { group: 'Hoá trang', key: 'ears', toggle: true, opts: [['dog', '🐶 Tai chó'], ['cat', '🐱 Tai mèo'], ['bunny', '🐰 Tai thỏ'], ['mouse', '🐭 Tai chuột'], ['horns', '🐮 Sừng'], ['antenna', '🐝 Râu côn trùng']] },
  { group: 'Đuôi', key: 'tail', toggle: true, opts: [['dog', '🐕 Đuôi chó'], ['cat', '🐈 Đuôi mèo'], ['pig', '🐷 Đuôi heo'], ['dino', '🦖 Đuôi khủng long']] },
  { group: 'Chuyển động (bật/tắt)', key: 'loop', toggle: true, opts: [['walk', 'Đi bộ'], ['run', 'Chạy'], ['dance', 'Nhảy múa'], ['butt', 'Lắc mông'], ['flap', 'Vỗ cánh'], ['swim', 'Bơi'], ['shiver', 'Run rẩy'], ['clap', 'Vỗ tay'], ['punch', 'Đấm'], ['row', 'Chèo'], ['nod', 'Gật gù'], ['shake', 'Lắc đầu']] },
  { group: 'Hiệu ứng', key: 'fx', oneshot: true, opts: [['jump', 'Bật nhảy'], ['spin', 'Xoay vòng'], ['fall', 'Té ngã'], ['bounce', 'Nhún nhảy']] },
  { group: 'Xoay người', key: 'turn', opts: [['front', '⬆️ Nhìn khán giả'], ['l45', '↖️ Xoay chéo trái'], ['r45', '↗️ Xoay chéo phải'], ['left', '⬅️ Quay trái'], ['right', '➡️ Quay phải'], ['back', '⬇️ Quay lưng']] },
];

export const FACE_EMO = Object.fromEntries(CONTROLS.find((c) => c.key === 'face').opts);

const J = {
  // toạ độ khớp trong viewBox 300x340
  hip: [150, 218], neck: [150, 146],
  shL: [124, 160], shR: [176, 160], elL: [124, 192], elR: [176, 192],
  hipL: [138, 222], hipR: [162, 222], knL: [138, 254], knR: [162, 254],
};
const O = (p) => `${p[0]}px ${p[1]}px`;

export function faceSVG(face, head, noEyes = false) {
  const dy = head === 'up' ? -4 : head === 'down' ? 4 : 0;
  const y = 99 + dy;
  // Mắt lồi kiểu "ngố": tròng trắng to, con ngươi nhỏ nhìn lệch nhau
  const googly = (x, px, py, r = 3.6) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="10.5" fill="#fff" class="ol"/><circle cx="${x + px}" cy="${y + py}" r="${r}" class="dk"/><circle cx="${x + px + 1.2}" cy="${y + py - 1.4}" r="1.1" fill="#fff"/>`;
  let eyes;
  switch (face) {
    case 'happy': eyes = `<path d="M128 ${y + 2} q9 -11 18 0 M154 ${y + 2} q9 -11 18 0" class="ln"/>`; break;
    case 'sleepy': eyes = `<path d="M128 ${y} q9 6 18 0 M154 ${y} q9 6 18 0" class="ln"/>`; break;
    case 'love': eyes = `<path d="M137 ${y + 8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z M163 ${y + 8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z" fill="#ff3d6e" class="ol" style="stroke-width:2"/>`; break;
    case 'cheeky': eyes = `<path d="M128 ${y} q9 -6 18 0" class="ln"/>${googly(163, -2, 1)}`; break;
    case 'surprised': eyes = googly(137, 0, 0, 2.4) + googly(163, 0, 0, 2.4); break;
    case 'scared': eyes = googly(137, 2, 2, 2.6) + googly(163, -2, 2, 2.6) + `<path d="M180 ${y - 8} q5 8 0 12 q-5 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`; break;
    case 'sad': eyes = googly(137, 1, 3) + googly(163, -1, 3); break;
    case 'angry': eyes = googly(137, 2, 1) + googly(163, -2, 1); break;
    default: eyes = googly(137, 3, 2) + googly(163, -3, -2); // lác nhẹ cho ngố
  }
  const brows = {
    angry: `<path d="M127 ${y - 15} L146 ${y - 9} M173 ${y - 15} L154 ${y - 9}" class="ln" style="stroke-width:4.5"/>`,
    sad: `<path d="M128 ${y - 10} L145 ${y - 15} M172 ${y - 10} L155 ${y - 15}" class="ln"/>`,
    scared: `<path d="M127 ${y - 14} q5 -4 9 0 q5 4 9 0 M155 ${y - 14} q5 -4 9 0 q5 4 9 0" class="ln"/>`,
    surprised: `<path d="M128 ${y - 17} q9 -6 18 0 M154 ${y - 17} q9 -6 18 0" class="ln"/>`,
  }[face] || '';
  const my = 118 + dy;
  const mouth = {
    happy: `<path d="M133 ${my - 2} q17 22 34 0 z" fill="#c2273d" class="ol"/><path d="M146 ${my - 1} h8 v5 h-8z" fill="#fff"/><path d="M143 ${my + 8} q7 -5 14 0 q-7 6 -14 0z" fill="#ff7b93"/>`,
    sad: `<path d="M139 ${my + 5} q11 -10 22 0" class="ln"/><path d="M134 ${y + 8} q-3 8 0 12 q3 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`,
    angry: `<rect x="138" y="${my - 3}" width="24" height="9" rx="3" fill="#fff" class="ol"/><path d="M144 ${my - 3} v9 M150 ${my - 3} v9 M156 ${my - 3} v9" stroke="#1d1648" stroke-width="1.6"/>`,
    surprised: `<ellipse cx="150" cy="${my + 2}" rx="7" ry="9" fill="#c2273d" class="ol"/>`,
    scared: `<path d="M136 ${my + 2} l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4" class="ln"/>`,
    sleepy: `<ellipse cx="150" cy="${my + 1}" rx="4" ry="3.2" class="dk"/><path d="M155 ${my + 2} q2 8 -1 11" stroke="#7cc8ff" stroke-width="3" fill="none" stroke-linecap="round"/><text x="178" y="${78 + dy}" class="zz">z</text><text x="188" y="${64 + dy}" class="zz">Z</text>`,
    cheeky: `<path d="M138 ${my - 1} q12 9 24 0" class="ln"/><path d="M147 ${my + 2} q5 13 10 0" fill="#ff6f8a" class="ol"/>`,
    love: `<path d="M138 ${my - 2} q12 12 24 0" class="ln"/>`,
    neutral: `<path d="M138 ${my - 1} q6 6 12 1 q6 5 12 -2" class="ln"/><rect x="146" y="${my}" width="7" height="6" rx="1.5" fill="#fff" class="ol" style="stroke-width:1.6"/>`,
  }[face] || '';
  const nose = `<ellipse cx="150" cy="${110 + dy}" rx="4.5" ry="3.6" fill="#ff9f8a" class="ol" style="stroke-width:1.8"/>`;
  const cheeks = `<circle cx="125" cy="${113 + dy}" r="5.5" fill="#ff8fa3" opacity="${['happy', 'love', 'cheeky'].includes(face) ? 0.75 : 0.4}"/><circle cx="175" cy="${113 + dy}" r="5.5" fill="#ff8fa3" opacity="${['happy', 'love', 'cheeky'].includes(face) ? 0.75 : 0.4}"/>`;
  return `${cheeks}${noEyes ? '' : `<g class="pp-eyes">${eyes}</g>${brows}`}${nose}${mouth}`;
}

// Phụ kiện theo skin. layer: 'back' (sau thân), 'torso', 'hairBack', 'hairFront'
function accessories(id, k) {
  switch (id) {
    case 'tron': return { hairFront: `<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${k.hair}" class="ol"/><path class="pp-ahoge" d="M150 64 q-4 -16 8 -20 q-8 8 -2 20z" fill="${k.hair}" stroke="#1d1648" stroke-width="2.5"/>` };
    case 'ninja': return {
      hairFront: `<path d="M116 96 q2 -36 34 -36 q32 0 34 36 z" fill="${k.hair}" class="ol"/><rect x="116" y="88" width="68" height="10" rx="3" fill="#ff3d4f" class="ol"/><path d="M184 92 q16 -4 22 6 M184 94 q14 6 18 16" stroke="#ff3d4f" stroke-width="5" fill="none" stroke-linecap="round"/>`,
      mask: `<path d="M117 108 q33 8 66 0 q0 28 -33 30 q-33 -2 -33 -30z" fill="${k.hair}" class="ol"/>`,
    };
    case 'scientist': return {
      hairBack: `<circle cx="118" cy="88" r="14" fill="${k.hair}" class="ol"/><circle cx="182" cy="88" r="14" fill="${k.hair}" class="ol"/><circle cx="130" cy="72" r="13" fill="${k.hair}" class="ol"/><circle cx="170" cy="72" r="13" fill="${k.hair}" class="ol"/><circle cx="150" cy="66" r="13" fill="${k.hair}" class="ol"/>`,
      hairFront: `<rect x="124" y="80" width="52" height="12" rx="6" fill="#4dabf7" class="ol"/><circle cx="138" cy="86" r="5" fill="#bfe6ff"/><circle cx="162" cy="86" r="5" fill="#bfe6ff"/>`,
      torso: `<path d="M150 144 L140 196 M150 144 L160 196" stroke="#cfd5ea" stroke-width="3"/><rect x="156" y="166" width="12" height="9" rx="2" fill="#4dabf7" class="ol"/>`,
    };
    case 'boss': return {
      hairFront: `<path d="M118 96 q0 -32 34 -32 q30 0 30 26 q-20 -8 -46 -2 q-10 2 -18 8z" fill="${k.hair}" class="ol"/><rect x="124" y="96" width="22" height="12" rx="4" class="dk"/><rect x="154" y="96" width="22" height="12" rx="4" class="dk"/><path d="M146 101 h8" class="ln"/>`,
      torso: `<path d="M140 144 L150 160 L160 144 Z" fill="#fff" class="ol"/><path d="M150 152 l-5 8 l5 26 l5 -26 z" fill="#ff3d4f" class="ol"/>`,
      noEyes: true,
    };
    case 'idol': return {
      hairBack: `<path d="M112 84 q-22 18 -10 52 q6 -20 14 -28z M188 84 q22 18 10 52 q-6 -20 -14 -28z" fill="${k.hair}" class="ol"/>`,
      hairFront: `<path d="M116 96 q2 -34 34 -34 q32 0 34 34 q-12 -10 -20 -10 l-6 10 l-8 -12 q-16 4 -34 12z" fill="${k.hair}" class="ol"/><path d="M112 98 q-6 20 14 26" stroke="#1d1648" stroke-width="3" fill="none"/><circle cx="127" cy="124" r="4" class="dk"/>`,
      torso: `<path d="M150 158 l4 8 l9 1 l-7 6 l2 9 l-8 -5 l-8 5 l2 -9 l-7 -6 l9 -1z" fill="#fff" class="ol"/>`,
    };
    case 'hero': return {
      back: `<path d="M128 148 Q110 230 104 262 L196 262 Q190 230 172 148 Z" fill="#ff3d4f" class="ol"/>`,
      hairFront: `<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-14 -10 -32 -10 q-18 0 -32 10z" fill="${k.hair}" class="ol"/><path d="M120 96 q30 -8 60 0 l0 12 q-30 -6 -60 0z" fill="#ff3d4f" class="ol"/>`,
      torso: `<path d="M150 158 l5 10 l11 1 l-8 7 l3 11 l-11 -6 l-11 6 l3 -11 l-8 -7 l11 -1z" fill="#ffc93d" class="ol"/>`,
    };
    case 'astro': return {
      hairFront: `<path d="M120 94 q4 -26 30 -26 q26 0 30 26 q-14 -8 -30 -8 q-16 0 -30 8z" fill="${k.hair}" class="ol"/>`,
      helmet: `<circle cx="150" cy="106" r="46" fill="#bfe6ff" fill-opacity=".28" stroke="#1d1648" stroke-width="3"/><path d="M122 84 q8 -14 24 -16" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>`,
      torso: `<rect x="138" y="160" width="24" height="16" rx="3" fill="#ff8a1f" class="ol"/><circle cx="145" cy="168" r="2.5" fill="#fff"/><circle cx="155" cy="168" r="2.5" fill="#12c584"/>`,
    };
    case 'nonla': return {
      hairBack: `<path d="M118 100 q-4 34 10 44 l8 -30z" fill="${k.hair}" class="ol"/>`,
      hairFront: `<path d="M118 96 q2 -26 32 -26 q30 0 32 26 q-16 -10 -32 -10 q-16 0 -32 10z" fill="${k.hair}" class="ol"/>`,
      hat: `<path d="M96 86 L150 40 L204 86 Q150 96 96 86Z" fill="#f2d48a" class="ol"/><path d="M110 82 L150 48 M190 82 L150 48 M130 87 L150 48 M170 87 L150 48" stroke="#c9a457" stroke-width="1.5"/>`,
      torso: `<circle cx="150" cy="166" r="2.5" fill="#fff"/><circle cx="150" cy="180" r="2.5" fill="#fff"/><circle cx="150" cy="194" r="2.5" fill="#fff"/>`,
    };
    case 'bear': return {
      hairBack: `<circle cx="120" cy="74" r="14" fill="${k.hair}" class="ol"/><circle cx="180" cy="74" r="14" fill="${k.hair}" class="ol"/><circle cx="120" cy="74" r="7" fill="#f2c79b"/><circle cx="180" cy="74" r="7" fill="#f2c79b"/>`,
      under: `<ellipse cx="150" cy="115" rx="17" ry="13" fill="#f2c79b"/>`,
      torso: `<ellipse cx="150" cy="182" rx="17" ry="22" fill="#f2c79b"/>`,
    };
  }
  // nhân vật mới: tóc đơn giản theo màu tóc (bản 2D chỉ dùng khi máy không có WebGL)
  return { hairFront: `<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${k.hair}" class="ol"/>` };
}

const EAR_C = '#c98b52';
const EARS = {
  dog: { front: `<path d="M112 80 q-16 6 -12 34 q4 14 14 6 q6 -20 4 -38z M188 80 q16 6 12 34 q-4 14 -14 6 q-6 -20 -4 -38z" fill="${EAR_C}" class="ol"/>` },
  cat: { back: `<path d="M114 86 L112 52 L140 72 z M186 86 L188 52 L160 72 z" fill="${EAR_C}" class="ol"/><path d="M118 80 L117 60 L134 73z M182 80 L183 60 L166 73z" fill="#ff9fb2"/>` },
  bunny: { back: `<ellipse cx="134" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(-10 134 48)"/><ellipse cx="166" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(10 166 48)"/><ellipse cx="134" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(-10 134 50)"/><ellipse cx="166" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(10 166 50)"/>` },
  mouse: { back: `<circle cx="118" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="182" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="118" cy="74" r="9" fill="#ffb3c4"/><circle cx="182" cy="74" r="9" fill="#ffb3c4"/>` },
  horns: { back: `<path d="M124 78 q-14 -10 -10 -30 q8 14 20 18z M176 78 q14 -10 10 -30 q-8 14 -20 18z" fill="#f2f0e6" class="ol"/>` },
  antenna: { back: `<path d="M138 74 q-6 -22 -18 -28 M162 74 q6 -22 18 -28" class="ln"/><circle cx="119" cy="45" r="6" fill="#ffc93d" class="ol"/><circle cx="181" cy="45" r="6" fill="#ffc93d" class="ol"/>` },
};
const TAILS = {
  dog: `<path d="M174 212 q34 2 44 -28 q3 -9 -5 -8 q-9 22 -39 26z" fill="${EAR_C}" class="ol"/>`,
  cat: `<path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="#1d1648" stroke-width="11" stroke-linecap="round"/><path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="${EAR_C}" stroke-width="6" stroke-linecap="round"/>`,
  pig: `<path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/><path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#ffa3b8" stroke-width="3.5" stroke-linecap="round"/>`,
  dino: `<path d="M172 196 q44 10 70 38 q-38 -6 -70 6z" fill="#12c584" class="ol"/><path d="M196 206 l4 -9 l5 10 M214 216 l5 -8 l4 11" fill="#ffc93d" class="ol" style="stroke-width:2"/>`,
};

export function createPuppet2D(container) {
  container.innerHTML = `
  <svg class="pp" viewBox="0 0 300 340" role="img" aria-label="Nhân vật trên sân khấu">
    <defs><clipPath id="ppHeadClip"><circle cx="150" cy="106" r="34"/></clipPath></defs>
    <ellipse class="pp-shadow" cx="150" cy="300" rx="62" ry="9"/>
    <g class="pp-stool"><rect x="110" y="250" width="80" height="13" rx="6" class="ol" fill="#ff8a1f"/><path d="M120 263 L114 300 M180 263 L186 300" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/></g>
    <g class="pp-root j" style="transform-origin:${O(J.hip)}"><g class="pp-fx in" style="transform-origin:150px 260px"><g class="pp-loop in" style="transform-origin:${O(J.hip)}">
      <g class="pp-back"></g>
      <g class="pp-tail j" style="transform-origin:174px 212px"></g>
      ${leg('L')}${leg('R')}
      <g class="pp-torso j" style="transform-origin:${O(J.hip)}"><g class="in pp-torsoIn" style="transform-origin:${O(J.hip)}">
        <g class="pp-cape"></g>
        <path class="pp-shirt ol" d="M126 156 Q124 144 138 144 L162 144 Q176 144 174 156 Q190 196 178 224 Q150 236 122 224 Q110 196 126 156 Z"/>
        <path class="pp-belt" d="M117 212 Q150 224 183 212 L178 224 Q150 236 122 224 Z"/>
        <g class="pp-torsoAcc"></g>
        ${arm('L')}${arm('R')}
        <g class="pp-head j" style="transform-origin:${O(J.neck)}"><g class="in pp-headIn" style="transform-origin:${O(J.neck)}"><g transform="translate(150 96) scale(1.32) translate(-150 -106)">
          <rect class="pp-skin ol" x="143" y="134" width="14" height="10" rx="4"/>
          <g class="pp-earsBack"></g>
          <g class="pp-hairBack"></g>
          <circle class="pp-skin ol pp-headBall" cx="150" cy="106" r="34"/>
          <image class="pp-photo" x="116" y="72" width="68" height="68" clip-path="url(#ppHeadClip)" preserveAspectRatio="xMidYMid slice"/>
          <circle class="pp-photoRing" cx="150" cy="106" r="34" fill="none" stroke="#1d1648" stroke-width="3"/>
          <g class="pp-under"></g>
          <g class="pp-face"></g>
          <g class="pp-mask"></g>
          <g class="pp-hairFront"></g>
          <g class="pp-earsFront"></g>
          <g class="pp-helmet"></g>
          <text class="pp-emote" x="186" y="78"></text>
        </g></g></g>
      </g></g>
    </g></g></g>
  </svg>`;
  function leg(s) {
    const hp = J['hip' + s], kn = J['kn' + s];
    return `<g class="pp-leg${s} j" style="transform-origin:${O(hp)}"><g class="in pp-leg${s}In" style="transform-origin:${O(hp)}">
      <line class="pp-pants" x1="${hp[0]}" y1="${hp[1]}" x2="${kn[0]}" y2="${kn[1]}"/>
      <g class="pp-shin${s} j" style="transform-origin:${O(kn)}"><g class="in pp-shin${s}In" style="transform-origin:${O(kn)}">
        <line class="pp-pants" x1="${kn[0]}" y1="${kn[1]}" x2="${kn[0]}" y2="${kn[1] + 30}"/>
        <ellipse class="pp-shoe ol" cx="${kn[0] + (s === 'L' ? -8 : 8)}" cy="${kn[1] + 36}" rx="17" ry="9.5"/>
      </g></g>
    </g></g>`;
  }
  function arm(s) {
    const sh = J['sh' + s], el = J['el' + s];
    return `<g class="pp-arm${s} j" style="transform-origin:${O(sh)}"><g class="in pp-arm${s}In" style="transform-origin:${O(sh)}">
      <line class="pp-sleeve" x1="${sh[0]}" y1="${sh[1]}" x2="${el[0]}" y2="${el[1]}"/>
      <g class="pp-fore${s} j" style="transform-origin:${O(el)}"><g class="in pp-fore${s}In" style="transform-origin:${O(el)}">
        <line class="pp-forearm" x1="${el[0]}" y1="${el[1]}" x2="${el[0]}" y2="${el[1] + 26}"/>
        <circle class="pp-hand pp-skin ol" cx="${el[0]}" cy="${el[1] + 31}" r="10.5"/>
        <text class="pp-prop pp-prop${s}" x="${el[0]}" y="${el[1] + 40}"></text>
        <path d="M${el[0] + (s === 'L' ? 7 : -7)} ${el[1] + 26} q${s === 'L' ? 7 : -7} -2 ${s === 'L' ? 6 : -6} 6" class="pp-thumb pp-skin ol" style="stroke-width:2.2"/>
      </g></g>
    </g></g>`;
  }

  const svg = container.querySelector('svg');
  const q = (c) => svg.querySelector('.' + c);
  const set = (c, t) => { q(c).style.transform = t; };
  let lastFx = null;
  let look = null;

  function setLook(l) {
    const id = SKINS[l?.skin] ? l.skin : 'tron';
    const k = SKINS[id];
    svg.style.setProperty('--pp-skin', k.skin);
    svg.style.setProperty('--pp-shirt', k.shirt);
    svg.style.setProperty('--pp-pants', k.pants);
    svg.style.setProperty('--pp-shoes', k.shoes);
    const acc = accessories(id, k);
    const photo = l?.head || '';
    q('pp-photo').setAttribute('href', photo);
    svg.classList.toggle('has-photo', !!photo);
    q('pp-back').innerHTML = acc.back || '';
    q('pp-hairBack').innerHTML = photo ? '' : acc.hairBack || '';
    q('pp-hairFront').innerHTML = (photo ? '' : acc.hairFront || '') + (acc.hat || '');
    q('pp-mask').innerHTML = photo ? '' : acc.mask || '';
    q('pp-under').innerHTML = photo ? '' : acc.under || '';
    q('pp-helmet').innerHTML = acc.helmet || '';
    q('pp-torsoAcc').innerHTML = acc.torso || '';
    svg.dataset.skin = id;
    look = { ...l, noEyes: acc.noEyes };
  }

  function setPose(p) {
    const b = BODY[p.body] || BODY.stand;
    set('pp-root', b.t || 'none');
    set('pp-torso', b.torso || 'none');
    q('pp-stool').classList.toggle('on', !!b.stool);
    for (const s of ['L', 'R']) {
      const sign = s === 'L' ? 1 : -1;
      const i = s === 'L' ? 0 : 1;
      const armDown = !p['arm' + s] || p['arm' + s] === 'down';
      if (b.absArms && armDown) {
        set('pp-arm' + s, `rotate(${b.absArms[i][0]}deg)`);
        set('pp-fore' + s, `rotate(${b.absArms[i][1]}deg)`);
      } else {
        const a = ARM[p['arm' + s]] || ARM.down;
        set('pp-arm' + s, `rotate(${a[0] * sign}deg)`);
        set('pp-fore' + s, `rotate(${a[1] * sign}deg)`);
      }
      const legDown = !p['leg' + s] || p['leg' + s] === 'down';
      if (b.absLegs && legDown) {
        set('pp-leg' + s, `rotate(${b.absLegs[i][0]}deg)`);
        set('pp-shin' + s, `rotate(${b.absLegs[i][1]}deg)`);
      } else {
        const lg = b.legs ? b.legs[i] : LEG[p['leg' + s]] || LEG.down;
        set('pp-leg' + s, `rotate(${lg[0] * sign}deg)`);
        set('pp-shin' + s, `rotate(${lg[1] * sign}deg)`);
      }
      svg.classList.toggle('wave' + s, p['arm' + s] === 'wave');
      q('pp-prop' + s).textContent = PROP_EMO[p['prop' + s]] || '';
    }
    set('pp-head', `rotate(${(HEAD[p.head] ?? 0) + (b.head || 0)}deg)`);
    const photo = svg.classList.contains('has-photo');
    const headLook = b.headDown && (!p.head || p.head === 'center') ? 'down' : p.head;
    q('pp-face').innerHTML = photo ? '' : faceSVG(p.face, headLook, look?.noEyes);
    const ears = EARS[p.ears] || {};
    q('pp-earsBack').innerHTML = ears.back || '';
    q('pp-earsFront').innerHTML = ears.front || '';
    q('pp-tail').innerHTML = TAILS[p.tail] ? `<g class="pp-tailIn">${TAILS[p.tail]}</g>` : '';
    set('pp-tail', b.tail ? `rotate(${b.tail}deg)` : 'none');
    q('pp-emote').textContent = photo && p.face && p.face !== 'neutral' ? FACE_EMO[p.face] || '' : '';
    svg.dataset.loop = p.loop || '';
    if (p.fx && p.fx.seq !== lastFx) {
      lastFx = p.fx.seq;
      if (Date.now() - (p.fx.at || 0) < 4000) {
        svg.classList.remove('fx-jump', 'fx-spin', 'fx-fall', 'fx-bounce');
        void svg.getBoundingClientRect();
        svg.classList.add('fx-' + p.fx.name);
        clearTimeout(svg._fxT);
        svg._fxT = setTimeout(() => svg.classList.remove('fx-' + p.fx.name), 1600);
      }
    }
  }
  return { setPose, setLook, el: svg };
}
