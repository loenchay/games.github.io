import './theme.js';
import { ICONS, roleBadge } from './roles.js';
import { $, $$, esc, loadProfile, saveProfile, avatarHTML, avatarPicker } from './common.js';
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
];

const prof = loadProfile();
$$('[data-logo]').forEach((el) => (el.innerHTML = ICONS.wolf));

function drawProfile() {
  $('#profileBtn').innerHTML = `${avatarHTML(prof, 'sm')}<span>${esc(prof.name || 'Đặt tên')}</span>`;
}
$('#profileBtn').onclick = () => {
  const o = $('#overlay');
  o.innerHTML = `<form class="modal panel" id="pf" style="text-align:left;display:grid;gap:14px">
    <h2 style="margin:0">Hồ sơ của bạn</h2>
    <label class="field"><span>Tên hiển thị</span><input id="pfName" maxlength="18" value="${esc(prof.name)}" placeholder="VD: Sói Già" /></label>
    <div id="pfAv"></div>
    <button class="btn primary big" type="submit">Lưu</button></form>`;
  o.classList.remove('hidden');
  avatarPicker($('#pfAv'), prof, drawProfile);
  o.onclick = (e) => { if (e.target === o) o.classList.add('hidden'); };
  $('#pf').onsubmit = (e) => { e.preventDefault(); prof.name = $('#pfName').value.trim(); saveProfile(prof); drawProfile(); o.classList.add('hidden'); };
};
drawProfile();

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
