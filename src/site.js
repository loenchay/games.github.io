// Phần dùng chung cho mọi trang: hồ sơ người chơi (tên + avatar, nhập 1 lần dùng cho mọi game)
// và chip "đang online" ở góc phải (đếm mọi người đang mở trang, qua cùng kết nối P2P).
import { $, $$, esc, ls, LOCAL, saveProfile, avatarHTML, avatarPicker, rid } from './common.js';
import { createNet } from './net.js';

// ---------- hồ sơ ----------
let modalEl = null;
function modalRoot() {
  if (!modalEl) {
    modalEl = document.createElement('div');
    modalEl.className = 'overlay site-modal hidden';
    document.body.appendChild(modalEl);
  }
  return modalEl;
}
// Mở hộp nhập tên + avatar. required = không cho đóng khi chưa có tên.
export function profileModal(prof, { required = false, onSave } = {}) {
  const o = modalRoot();
  o.innerHTML = `<form class="modal panel pf-modal" autocomplete="off">
    <div class="pf-head">${avatarHTML(prof, 'xl')}<div><h2 style="margin:0">${required ? 'Chào bạn! 👋' : 'Hồ sơ của bạn'}</h2>
    <p class="muted" style="margin:4px 0 0">${required ? 'Đặt tên và chọn avatar một lần — vào game nào cũng dùng luôn, không phải nhập lại.' : 'Tên và avatar dùng chung cho mọi game.'}</p></div></div>
    <label class="field"><span>Tên hiển thị</span><input id="pfName" maxlength="18" value="${esc(prof.name)}" placeholder="VD: Sói Già, Vua Nhại..." required /></label>
    <div id="pfAv"></div>
    <div class="pf-btns">${required ? '' : '<button type="button" class="btn" data-close>Huỷ</button>'}<button class="btn primary big" type="submit">${required ? 'Vào sân chơi →' : 'Lưu'}</button></div>
  </form>`;
  o.classList.remove('hidden');
  const head = () => { const a = $('.pf-head .avatar', o); if (a) a.outerHTML = avatarHTML(prof, 'xl'); };
  avatarPicker($('#pfAv', o), prof, head);
  const close = () => { o.classList.add('hidden'); o.innerHTML = ''; };
  o.onclick = (e) => { if (!required && e.target === o) close(); };
  $$('[data-close]', o).forEach((b) => (b.onclick = close));
  const inp = $('#pfName', o);
  setTimeout(() => inp.focus(), 50);
  $('form', o).onsubmit = (e) => {
    e.preventDefault();
    const name = inp.value.trim().slice(0, 18);
    if (!name) { inp.focus(); return; }
    prof.name = name;
    saveProfile(prof);
    close();
    onSave?.(prof);
    presenceUpdate();
  };
}
export const requireProfile = (prof, onSave) => { if (!prof.name) profileModal(prof, { required: true, onSave }); };

// Chip hồ sơ ở góc phải
export function profileChip(prof, onChange) {
  const nav = $('.home-nav .nav-right');
  if (!nav) return () => {};
  let chip = $('#profileBtn');
  if (!chip) {
    chip = document.createElement('button');
    chip.type = 'button';
    chip.id = 'profileBtn';
    chip.className = 'profile-chip';
    nav.appendChild(chip);
  }
  const draw = () => { chip.innerHTML = `${avatarHTML(prof, 'sm')}<span>${esc(prof.name || 'Đặt tên')}</span>`; };
  chip.onclick = () => profileModal(prof, { onSave: () => { draw(); onChange?.(prof); } });
  draw();
  return draw;
}

// Trong form tạo / vào phòng của game: ẩn ô tên + avatar, thay bằng thẻ "Bạn là ..."
export function gameIdentity(prof, { onChange } = {}) {
  const form = $('#homeForm');
  if (!form) return;
  let card = $('#meCard');
  if (!card) {
    card = document.createElement('div');
    card.id = 'meCard';
    card.className = 'me-card';
    const h2 = $('h2', form);
    (h2 || form.firstChild).after(card);
  }
  form.classList.add('has-profile');
  const nameIn = $('#nameInput');
  const draw = () => {
    if (nameIn) nameIn.value = prof.name || '';
    card.innerHTML = `${avatarHTML(prof)}<div class="mc-txt"><span class="muted">Bạn chơi với tên</span><b>${esc(prof.name || '...')}</b></div><button type="button" class="btn sm" id="meEdit">✏️ Đổi</button>`;
    $('#meEdit').onclick = () => profileModal(prof, { onSave: () => { draw(); drawChip(); onChange?.(prof); } });
  };
  const drawChip = profileChip(prof, () => { draw(); onChange?.(prof); });
  draw();
  requireProfile(prof, () => { draw(); drawChip(); onChange?.(prof); });
}

// ---------- đang online ----------
let pres = null;
let did = null;
const deviceId = () => { if (did) return did; did = ls.get('site-did'); if (!did) { did = rid(10); ls.set('site-did', did); } return did; };
export async function startPresence(prof, page) {
  if (pres) return pres;
  const nav = $('.home-nav .nav-right');
  const chip = document.createElement('button');
  chip.type = 'button';
  chip.className = 'online-chip';
  chip.title = 'Số người đang mở Sân Chơi';
  chip.innerHTML = '<i class="dot"></i><b>1</b><span>online</span>';
  nav?.prepend(chip);
  const pop = document.createElement('div');
  pop.className = 'online-pop panel hidden';
  document.body.appendChild(pop);
  chip.onclick = (e) => { e.stopPropagation(); pop.classList.toggle('hidden'); draw(); };
  document.addEventListener('click', (e) => { if (!pop.contains(e.target)) pop.classList.add('hidden'); });

  const peers = new Map(); // pid -> info
  pres = { prof, page, peers, chip, pop, net: null };
  const me = () => ({ did: deviceId(), name: prof.name || 'Khách', av: prof.av, page: pres.page });
  function draw() {
    const all = [me(), ...peers.values()];
    const byDid = new Map();
    for (const p of all) if (p?.did && !byDid.has(p.did)) byDid.set(p.did, p);
    const n = Math.max(1, byDid.size);
    $('b', chip).textContent = n;
    pop.innerHTML = `<div class="op-head"><i class="dot"></i><b>${n} người đang online</b></div>
      ${[...byDid.values()].map((p, i) => `<div class="op-row">${avatarHTML(p, 'sm')}<div><b>${esc(p.name)}${i === 0 ? ' <span class="muted">(bạn)</span>' : ''}</b><div class="muted">${esc(p.page || '')}</div></div></div>`).join('')}
      ${n === 1 ? '<p class="muted" style="margin:6px 0 0;font-size:12.5px">Chưa thấy ai khác. Gửi link cho bạn bè nhé!</p>' : ''}`;
  }
  pres.draw = draw;
  draw();
  try {
    const net = await createNet('ONLINE', { local: LOCAL, ns: 'presence' });
    pres.net = net;
    net.on('me', (d, pid) => { if (d && typeof d === 'object') { peers.set(pid, { did: String(d.did || pid).slice(0, 20), name: String(d.name || 'Khách').slice(0, 18), av: d.av, page: String(d.page || '').slice(0, 40) }); draw(); } });
    net.onPeerJoin = (pid) => { net.send('me', me(), pid); };
    net.onPeerLeave = (pid) => { peers.delete(pid); draw(); };
    net.send('me', me());
  } catch (e) { console.warn('[presence]', e); }
  return pres;
}
// Báo cho mọi người khi đổi tên / đổi trang (VD: vào phòng chơi)
export function presenceUpdate(page) {
  if (!pres) return;
  if (page) pres.page = page;
  pres.draw?.();
  pres.net?.send('me', { did: deviceId(), name: pres.prof.name || 'Khách', av: pres.prof.av, page: pres.page });
}
