import './theme.js';
import { ICONS, roleBadge } from './roles.js';
import { $, $$, esc, loadProfile, saveProfile, avatarHTML, avatarPicker } from './common.js';
import { profileChip, requireProfile, startPresence } from './site.js';
import { createPuppet } from './dienta/puppet3d.js';

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
