import './theme.js';
import { ICONS, roleBadge } from './roles.js';
import { $, $$, esc, loadProfile, saveProfile, avatarHTML, avatarPicker } from './common.js';
import { profileChip, requireProfile, startPresence } from './site.js';
import { createPuppet } from './dienta/puppet3d.js';
import { chessBoard, xqBoard } from './duel/boards.js';
import { fromFEN } from './duel/chess.js';
import { init as xqInit } from './duel/xiangqi.js';
import { cardHTML as motlaCard } from './motla/view.js';
import { dieHTML as ludoDie } from './cangua/view.js';
import { render as fightRender, FX as FightFX } from './fight/render.js';
import { initState as fightInit } from './fight/sim.js';
import { render as raceRender, FX as RaceFX } from './race/render.js';
import { initState as raceInit } from './race/sim.js';
import { dagaDemo } from './daga/view.js';
import { keocoDemo } from './keoco/view.js';
import { xaythapDemo } from './xaythap/view.js';
const raceArt = (c) => { const S = raceInit(['cub', 'lam'], { seed: 3, time: 60 }); S.phase = 'race'; S.c[0].x = 1150 * 100; S.c[1].x = 1320 * 100; S.c[0].l = 110 * 100; S.c[1].l = 190 * 100; S.camX = 1100 * 100; raceRender(c, S, new RaceFX(), 30, { names: ['', ''], riders: ['🐧', '🦖'], crowd: [], me: 0 }); };
const fightArt = (c) => { const S = fightInit(['teo', 'sam'], {}); S.phase = 'fight'; S.f[0].x = 400 * 100; S.f[1].x = 560 * 100; S.f[0].st = 'win'; fightRender(c, S, new FightFX(), 30, { names: ['', ''], crowd: ['🦊', '🐼', '🐸'] }); };

// Danh sách game — thêm game mới vào đây
const GAMES = [
  {
    id: 'masoi', url: 'masoi.html', name: 'Ma Sói', color: 'var(--grape)', soft: 'var(--grape-soft)',
    tag: 'Suy luận · Lừa lọc', players: '4–16 người', time: '15–30 phút',
    desc: 'Đêm xuống, sói đi săn. Ngày lên, cả làng bỏ phiếu treo cổ kẻ đáng nghi. Có Tiên tri, Bảo vệ, Phù thủy, Thợ săn.',
    art: () => `<div class="art-roles">${['wolf', 'seer', 'witch', 'guard', 'hunter'].map((r) => roleBadge(r, 'lg')).join('')}</div>`,
  },
  {
    id: 'dienta', url: 'dienta.html', name: 'Diễn Tả Hình Hài', color: 'var(--sky)', soft: 'var(--sky-soft)', isNew: true,
    tag: 'Diễn kịch câm · Bấm chuông', players: '2–16 người', time: '10–20 phút',
    desc: 'Một người lên sân khấu điều khiển nhân vật diễn tả đề bài, cả phòng tranh nhau bấm chuông đoán chữ để ghi điểm.',
    art: (el) => { const p = createPuppet(el); p.setLook({ skin: 'idol' }); p.setPose({ body: 'stand', head: 'tiltL', face: 'happy', armL: 'wave', armR: 'hip', legL: 'step', legR: 'down', loop: 'dance' }); },
  },
  {
    id: 'nhai', url: 'nhai.html', name: 'Nhại Như Thật', color: 'var(--orange)', soft: 'var(--orange-soft)', isNew: true,
    tag: 'Nhại giọng · Chấm điểm', players: '2–16 người', time: '10–15 phút',
    desc: 'Nghe tiếng gà gáy, còi xe, câu "Ối dồi ôi"... rồi cả phòng cùng nhại lại. Máy chấm độ giống + mọi người bỏ phiếu.',
    art: (el) => { const p = createPuppet(el); p.setLook({ skin: 'chotdon' }); p.setPose({ body: 'stand', head: 'center', face: 'happy', armL: 'down', armR: 'mouth', propR: 'mic', legL: 'down', legR: 'down' }); let ph = 0; setInterval(() => { ph += 0.2; p.setTalk?.(Math.max(0, Math.sin(ph * 3) * 0.6 + Math.sin(ph * 7.1) * 0.3)); }, 70); },
  },
  {
    id: 'caro', url: 'caro.html', name: 'Cờ Caro', color: 'var(--coral)', soft: 'var(--coral-soft)', isNew: true,
    tag: 'Đối kháng · Trí tuệ', players: '2 chơi + 8 xem', time: '5–15 phút',
    desc: 'Xếp đủ 5 quân liên tiếp để thắng. 2 người ngồi ghế đấu nhau, tối đa 8 người vào xem, chat và cổ vũ.',
    art: (el) => { el.innerHTML = '<div class="caro-art">' + Array.from({ length: 25 }, (_, i) => { const m = { 6: 'X', 7: 'O', 12: 'X', 13: 'O', 18: 'X', 8: 'O', 24: 'X', 0: 'X' }[i]; return `<i class="${m || ''}">${m === 'X' ? '✕' : m === 'O' ? '○' : ''}</i>`; }).join('') + '</div>'; },
  },
  {
    id: 'cotuong', url: 'cotuong.html', name: 'Cờ Tướng', color: 'var(--coral)', soft: 'var(--coral-soft)', isNew: true,
    tag: 'Đối kháng · Mưu lược', players: '2 chơi + 8 xem', time: '15–40 phút',
    desc: 'Cờ tướng đầy đủ luật, có đồng hồ, biên bản nước đi. Xem quân bằng chữ Hán hoặc chữ Việt. 8 người vào xem và cổ vũ.',
    art: (el) => { el.innerHTML = '<div class="xq-art"></div>'; xqBoard.render(el.firstChild, { st: xqInit(), flip: false, sel: -1, targets: [], last: null, check: -1, view: 'han' }); },
  },
  {
    id: 'covua', url: 'covua.html', name: 'Cờ Vua', color: 'var(--sky)', soft: 'var(--sky-soft)', isNew: true,
    tag: 'Đối kháng · Chiến thuật', players: '2 chơi + 8 xem', time: '10–30 phút',
    desc: 'Cờ vua quốc tế đầy đủ luật: nhập thành, bắt tốt qua đường, phong cấp. Đồng hồ cho mỗi bên, 8 người vào xem.',
    art: (el) => { el.innerHTML = '<div class="cv-art"></div>'; chessBoard.render(el.firstChild, { st: fromFEN('r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4'), flip: false, sel: -1, targets: [], last: { from: 31, to: 13 }, check: 4 }); },
  },
  {
    id: 'daga', url: 'daga.html', name: 'Đá Gà Pixel', color: 'var(--sun)', soft: 'var(--sun-soft)', isNew: true,
    tag: 'Hỗn chiến · Đẩy nhau', players: '1–8 gà + người xem', time: '2–4 phút',
    desc: 'Mỗi người một con gà pixel trên sàn tròn co dần: húc, nhảy, dẫm đầu nhau cho văng xuống ao bùn. Con trụ lại cuối cùng thắng!',
    art: (el) => dagaDemo(el),
  },
  {
    id: 'keoco', url: 'keoco.html', name: 'Kéo Co Gõ Phím', color: 'var(--coral)', soft: 'var(--coral-soft)', isNew: true,
    tag: 'Đồng đội · Gõ nhanh', players: 'Đỏ vs Xanh, tới 4–4', time: '1–2 phút',
    desc: 'Hai đội gõ chữ thật nhanh để kéo dây, gõ đúng nhịp "Hò... DÔ!" được gấp đôi. Người xem bấm cổ vũ cũng kéo giúp!',
    art: (el) => keocoDemo(el),
  },
  {
    id: 'xaythap', url: 'xaythap.html', name: 'Xây Tháp Lắc Lư', color: 'var(--lime)', soft: 'var(--lime-soft)', isNew: true,
    tag: 'Vật lý · Khéo tay', players: '1–4 người + xem', time: '3–8 phút',
    desc: 'Thay phiên thả gạch, thùng gỗ, nón lá, dưa hấu lên chiếc bè tre dập dềnh. Ai làm rơi đồ xuống sông là thua!',
    art: (el) => xaythapDemo(el),
  },
  {
    id: 'duaxe', url: 'duaxe.html', name: 'Đua Xe Đường Làng', color: 'var(--lime)', soft: 'var(--lime-soft)', isNew: true,
    tag: 'Đua xe · Húc nhau', players: '2 đua + 8 xem', time: '1–3 phút/lượt',
    desc: 'Phóng xe qua các làng, lạng lách tránh cọc, rơm, trâu qua đường — và húc ngang để đẩy đối thủ đâm vào chướng ngại!',
    art: (el) => { el.innerHTML = '<canvas class="qc-art" width="300" height="170"></canvas>'; const c = el.firstChild.getContext('2d'); c.scale(300 / 960, 170 / 540); raceArt(c); },
  },
  {
    id: 'quyen', url: 'quyen.html', name: 'Quyền Cước 97', color: 'var(--coral)', soft: 'var(--coral-soft)', isNew: true,
    tag: 'Đối kháng · Hành động', players: '2 đấu + 8 xem', time: '2–5 phút/trận',
    desc: 'Game đánh nhau kiểu thùng game ngày xưa: 12 võ sĩ, đánh liên hoàn, chạy lướt, tuyệt chiêu, đồ hoạ pixel. Thắng ở lại, thua xuống xếp hàng!',
    art: (el) => { el.innerHTML = '<canvas class="qc-art" width="300" height="170"></canvas>'; const cv = el.firstChild, c = cv.getContext('2d'); c.scale(300 / 960, 170 / 540); c.translate(0, 0); fightArt(c); },
  },
  {
    id: 'motla', url: 'motla.html', name: 'Một Lá!', color: 'var(--coral)', soft: 'var(--coral-soft)', isNew: true,
    tag: 'Bài màu · Siêu nhanh', players: '2–10 người', time: '5–15 phút',
    desc: 'Đánh lá cùng màu hoặc cùng số, chặn +2 +4 cộng dồn, đảo chiều, đổi màu. Còn 1 lá nhớ hô "Một lá!" kẻo bị bắt phạt!',
    art: (el) => { el.innerHTML = `<div class="ml-demo">${['r7', 'yv', 'w', 'gd', 'f'].map((c, i) => motlaCard(c, 'd' + i)).join('')}</div>`; },
  },
  {
    id: 'cangua', url: 'cangua.html', name: 'Cờ Cá Ngựa', color: 'var(--lime)', soft: 'var(--lime-soft)', isNew: true,
    tag: 'Xúc xắc · Đá ngựa', players: '2–4 chơi + xem', time: '15–30 phút',
    desc: 'Đổ 6 xuất quân, đi trúng là đá ngựa đối thủ về chuồng, đưa đủ 4 ngựa về đích trước để thắng. Luật Việt quen thuộc.',
    art: (el) => { el.innerHTML = `<div class="lg-demo">${ludoDie(6, '')}<span class="lg-dh" style="--hc:#ff4d5e">🐴</span><span class="lg-dh" style="--hc:#3b82f6">🐴</span><span class="lg-dh" style="--hc:#2fbf71">🐴</span><span class="lg-dh" style="--hc:#ffc43d">🐴</span></div>`; },
  },
  {
    id: 'typhu', url: 'typhu.html', name: 'Cờ Tỷ Phú', color: 'var(--orange)', soft: 'var(--orange-soft)', isNew: true,
    tag: 'Kinh doanh · Đổi chác', players: '2–6 chơi + xem', time: '20–90 phút',
    desc: 'Đi một vòng Việt Nam: mua đất Hà Giang tới Thủ Thiêm, gom bộ màu, xây nhà, khách sạn, thu tiền thuê, đổi chác — làm đối thủ phá sản!',
    art: (el) => { el.innerHTML = '<div class="tp-demo"><span style="--gc:#ff6fb5">Huế</span><span style="--gc:#3ecf6e">Hồ Tây</span><span style="--gc:#3b5bdb">Quận 1</span><b>🏠🏨</b></div>'; },
  },
  {
    id: 'bay', url: 'bay.html', name: 'Vỗ Cánh Sinh Tồn', color: 'var(--lime)', soft: 'var(--lime-soft)', isNew: true,
    tag: 'Phản xạ · Sinh tồn', players: '1–16 người', time: '1–3 phút/ván',
    desc: 'Cả phòng cùng vỗ cánh luồn qua các cột kẹo trên một bầu trời. Đụng là rơi — chú chim trụ lại cuối cùng thắng!',
    art: (el) => { el.innerHTML = '<div class="bay-art"><span class="p1"></span><span class="p2"></span><b style="left:28%;top:40%">🐥</b><b style="left:40%;top:56%;opacity:.6">🦊</b><b style="left:18%;top:62%;opacity:.6">🐸</b></div>'; },
  },
];

const prof = loadProfile();
$$('[data-logo]').forEach((el) => (el.innerHTML = ICONS.wolf));

// hồ sơ chung: bắt buộc đặt tên + avatar ngay khi vào trang
profileChip(prof);
requireProfile(prof, () => profileChip(prof));
startPresence(prof, 'Đang chọn game');

$('#gameCount').textContent = `${GAMES.length} game · sẽ còn thêm`;
$('#gameGrid').innerHTML = GAMES.map((g) => `
  <a class="card game-card" href="${g.url}" style="--gc:${g.color};--gs:${g.soft}">
    <div class="gc-art" id="art-${g.id}"></div>
    <div class="gc-body">
      <div class="gc-title"><b>${g.name}</b>${g.isNew ? '<span class="chip new">MỚI</span>' : ''}</div>
      <div class="gc-tag">${g.tag}</div>
      <p>${g.desc}</p>
      <div class="gc-meta"><span class="chip">👥 ${g.players}</span><span class="chip">⏱ ${g.time}</span><span class="chip">🎙 Voice</span></div>
      <span class="btn primary gc-go">Chơi ngay →</span>
    </div>
  </a>`).join('') + `
  <div class="card game-card soon"><div class="gc-art"><span style="font-size:64px">🧩</span></div>
    <div class="gc-body"><div class="gc-title"><b>Game tiếp theo</b><span class="chip">Sắp có</span></div><p>Đang được nấu... Bạn muốn chơi gì thì đề xuất nhé!</p></div></div>`;
for (const g of GAMES) {
  const el = $('#art-' + g.id);
  const r = g.art(el);
  if (typeof r === 'string') el.innerHTML = r;
}
