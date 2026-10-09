// Tiện ích dùng chung cho catalog và các game mới.
import { AVATARS, AV_COLORS } from './roles.js';

export const $ = (s, el = document) => el.querySelector(s);
export const $$ = (s, el = document) => [...el.querySelectorAll(s)];
export const params = new URLSearchParams(location.search);
export const LOCAL = params.get('local') === '1' || window.MASOI_LOCAL === true;

function store(get) {
  return {
    get: (k) => { try { return get().getItem(k); } catch { return null; } },
    set: (k, v) => { try { get().setItem(k, v); } catch {} },
    del: (k) => { try { get().removeItem(k); } catch {} },
  };
}
export const ss = store(() => sessionStorage);
export const ls = store(() => localStorage);

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function rid(n) {
  const a = 'abcdefghijkmnpqrstuvwxyz23456789';
  let s = '';
  for (const x of crypto.getRandomValues(new Uint8Array(n))) s += a[x % a.length];
  return s;
}
export const roomCode = () => rid(6).toUpperCase();

// ---- hồ sơ người chơi (dùng chung giữa các game) ----
export function loadProfile() {
  let av = null;
  try { av = JSON.parse(ls.get('masoi-av') || 'null'); } catch {}
  if (!av || !AVATARS.includes(av.e)) av = { e: AVATARS[Math.floor(Math.random() * AVATARS.length)], c: Math.floor(Math.random() * AV_COLORS.length) };
  return { name: ls.get('masoi-name') || '', av };
}
export function saveProfile(p) {
  ls.set('masoi-name', p.name || '');
  ls.set('masoi-av', JSON.stringify(p.av));
}
export function clientId() {
  const k = 'masoi-cid';
  const c = ss.get(k) || rid(12);
  ss.set(k, c);
  return c;
}

export const avatarHTML = (p, size = '') =>
  p?.av
    ? `<span class="avatar ${size}" style="--av:${AV_COLORS[p.av.c] || AV_COLORS[0]}">${p.av.e}</span>`
    : `<span class="avatar ${size}">?</span>`;

// Bộ chọn avatar + màu: render vào container, gọi onChange khi đổi
export function avatarPicker(root, profile, onChange) {
  const draw = () => {
    root.innerHTML = `
      <div class="lbl-sm" style="margin-bottom:6px">Avatar</div>
      <div class="emoji-grid">${AVATARS.map((e) => `<button type="button" class="${e === profile.av.e ? 'on' : ''}" data-e="${e}" aria-label="Avatar ${e}">${e}</button>`).join('')}</div>
      <div class="lbl-sm" style="margin:14px 0 8px">Màu nền</div>
      <div class="color-row">${AV_COLORS.map((c, i) => `<button type="button" class="${i === profile.av.c ? 'on' : ''}" data-c="${i}" style="--sw:${c}" aria-label="Màu ${i + 1}"></button>`).join('')}</div>`;
    $$('[data-e]', root).forEach((b) => (b.onclick = () => { profile.av.e = b.dataset.e; saveProfile(profile); draw(); onChange?.(); }));
    $$('[data-c]', root).forEach((b) => (b.onclick = () => { profile.av.c = Number(b.dataset.c); saveProfile(profile); draw(); onChange?.(); }));
  };
  draw();
}

export function toast(msg, err = false) {
  let box = $('#toasts');
  if (!box) { box = document.createElement('div'); box.id = 'toasts'; document.body.appendChild(box); }
  const t = document.createElement('div');
  t.className = 'toast' + (err ? ' err' : '');
  t.textContent = msg;
  box.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, 3200);
}

export function confetti() {
  const box = document.createElement('div');
  box.className = 'confetti';
  const cols = ['#ffc93d', '#ff5a6a', '#2f8bff', '#12c584', '#ff6fb5', '#9b5cf6'];
  box.innerHTML = Array.from({ length: 80 }, () => `<i style="left:${Math.random() * 100}%;background:${cols[Math.floor(Math.random() * cols.length)]};animation-duration:${2 + Math.random() * 2.5}s;animation-delay:${Math.random() * 0.8}s;transform:rotate(${Math.random() * 360}deg)"></i>`).join('');
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 5500);
}

// Âm thanh tổng hợp (không cần file)
let actx;
export function unlockAudio() {
  try { actx ||= new (window.AudioContext || window.webkitAudioContext)(); actx.resume(); } catch {}
}
document.addEventListener('pointerdown', unlockAudio, { once: true });
export function beep(notes, type = 'sine', vol = 0.09) {
  try {
    if (!actx || actx.state !== 'running') return;
    let t = actx.currentTime;
    for (const [f, d] of notes) {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g).connect(actx.destination);
      o.start(t);
      o.stop(t + d + 0.05);
      t += d * 0.85;
    }
  } catch {}
}
export const SFX = {
  buzz: () => beep([[880, 0.12], [1320, 0.25]], 'square', 0.06),
  correct: () => beep([[523, 0.12], [659, 0.12], [784, 0.12], [1047, 0.35]], 'triangle', 0.1),
  wrong: () => beep([[220, 0.25], [160, 0.4]], 'sawtooth', 0.05),
  tick: () => beep([[1200, 0.05]], 'sine', 0.04),
  start: () => beep([[392, 0.1], [523, 0.1], [659, 0.2]], 'triangle', 0.08),
};

export function inviteUrl(code) {
  const u = new URL(location.href);
  u.search = '';
  u.hash = '';
  u.searchParams.set('room', code);
  if (LOCAL) u.searchParams.set('local', '1');
  return u.toString();
}
export async function copyText(text, okMsg = 'Đã sao chép!') {
  try {
    await navigator.clipboard.writeText(text);
    toast(okMsg);
  } catch {
    window.prompt('Sao chép link này:', text);
  }
}

// Bỏ dấu tiếng Việt, chữ thường, bỏ ký tự đặc biệt
export function norm(s) {
  return String(s ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
