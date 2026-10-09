// Trang "Tủ đồ nhân vật": xem thử toàn bộ nhân vật 3D và chọn nhân vật mặc định.
import './theme.js';
import { ICONS } from './roles.js';
import { $, $$, esc, ls, toast } from './common.js';
import { createPuppet } from './dienta/puppet3d.js';
import { CHARS, CHAR_MAP } from './dienta/chars.js';

$$('[data-logo]').forEach((el) => (el.innerHTML = ICONS.wolf));
const BASE = { body: 'stand', head: 'center', face: 'neutral', armL: 'down', armR: 'down', legL: 'down', legR: 'down', propL: null, propR: null, ears: null, tail: null, turn: 'front', loop: null };
const POSES = [
  ['👋 Chào', { armR: 'wave', armL: 'hip', face: 'happy' }],
  ['💃 Nhảy', { loop: 'dance', face: 'happy', armL: 'diag' }],
  ['🚶 Đi bộ', { loop: 'walk', turn: 'r45' }],
  ['🏃 Chạy', { loop: 'run', turn: 'right', face: 'scared' }],
  ['🙇 Cúi chào', { body: 'bow', loop: 'clap' }],
  ['🪑 Ngồi ăn', { body: 'sit', armR: 'mouth', propR: 'chopsticks', armL: 'cross', propL: 'bowl', face: 'happy', loop: 'nod' }],
  ['🐶 Bò', { body: 'crawl', ears: 'dog', tail: 'dog', face: 'cheeky' }],
  ['😴 Ngủ', { body: 'lie', face: 'sleepy' }],
  ['💪 Khoe cơ', { armL: 'flex', armR: 'flex', legR: 'kick', face: 'angry' }],
  ['🐔 Gà', { body: 'squat', armL: 'hip', armR: 'hip', loop: 'flap', face: 'surprised' }],
  ['🤸 Trồng chuối', { body: 'handstand', armL: 'up', armR: 'up', face: 'surprised' }],
  ['🍑 Lắc mông', { loop: 'butt', turn: 'back', armL: 'hip', armR: 'hip' }],
  ['🎤 Hát', { armR: 'mouth', propR: 'mic', armL: 'diag', face: 'love', loop: 'dance' }],
  ['😱 Hoảng', { armL: 'head', armR: 'head', loop: 'shiver', face: 'scared' }],
];
const FACES = [['neutral', '😐'], ['happy', '😄'], ['sad', '😢'], ['angry', '😠'], ['surprised', '😮'], ['scared', '😱'], ['sleepy', '😴'], ['cheeky', '😜'], ['love', '😍']];
const TURNS = [['front', '⬆️ Trước'], ['l45', '↖️ Chéo trái'], ['r45', '↗️ Chéo phải'], ['left', '⬅️ Trái'], ['right', '➡️ Phải'], ['back', '⬇️ Lưng']];

let look = { skin: 'tron', head: '' };
try { const l = JSON.parse(ls.get('dienta-look') || 'null'); if (l && CHAR_MAP[l.skin]) look = { skin: l.skin, head: l.head || '' }; } catch {}
let cur = look.skin, pose = { ...BASE, ...POSES[0][1] }, poseI = 0;
const pp = createPuppet($('#wdView'));
const apply = () => { pp.setLook({ skin: cur, head: '' }); pp.setPose({ ...pose, fx: null }); };

function drawInfo() {
  const c = CHAR_MAP[cur];
  $('#wdEmo').textContent = c.emo;
  $('#wdName').textContent = c.name;
  $('#wdPick').disabled = cur === look.skin;
  $('#wdPick').textContent = cur === look.skin ? '✔ Đang dùng' : '✔ Chọn nhân vật này';
}
function drawList() {
  const q = $('#wdSearch').value.trim().toLowerCase();
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  const list = CHARS.filter((c) => !q || norm(c.name).includes(norm(q)));
  $('#wdList').innerHTML = list.map((c) => `<button type="button" class="skin-btn ${c.id === cur ? 'on' : ''}" data-id="${c.id}"><span class="sw" style="--a:${c.top};--b:${c.bottom}">${c.emo}</span><span class="sk-n">${esc(c.name)}</span>${c.id === look.skin ? '<i class="wd-using">đang dùng</i>' : ''}</button>`).join('') || '<p class="muted">Không tìm thấy nhân vật nào.</p>';
  $$('[data-id]', $('#wdList')).forEach((b) => (b.onclick = () => { cur = b.dataset.id; apply(); drawList(); drawInfo(); }));
}
const chips = (el, items, on, li = 1) => { el.innerHTML = items.map((it, i) => `<button type="button" class="tip-chip" data-i="${i}">${it[li]}</button>`).join(''); $$('button', el).forEach((b) => (b.onclick = () => on(items[b.dataset.i]))); };
chips($('#wdPoses'), POSES, ([, p]) => { pose = { ...BASE, ...p }; apply(); }, 0);
chips($('#wdFaces'), FACES, ([v]) => { pose = { ...pose, face: v }; apply(); });
chips($('#wdTurns'), TURNS, ([v]) => { pose = { ...pose, turn: v }; apply(); });
$('#wdPick').onclick = () => { look = { skin: cur, head: look.head }; ls.set('dienta-look', JSON.stringify(look)); drawInfo(); drawList(); toast(`Đã chọn ${CHAR_MAP[cur].name}! Vào phòng Diễn Tả là dùng ngay.`); };
$('#wdSearch').oninput = drawList;
$('#wdCount').textContent = CHARS.length;
setInterval(() => { if (!$('#wdAuto').checked) return; poseI = (poseI + 1) % POSES.length; pose = { ...BASE, ...POSES[poseI][1] }; apply(); }, 2600);
apply(); drawList(); drawInfo();
