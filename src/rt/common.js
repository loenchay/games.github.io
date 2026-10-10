// Đồ dùng chung cho các game thời gian thực trong phòng bàn chơi (Đá Gà, Kéo Co, Xây Tháp).
export const touchDev = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;

// Đệm gói trạng thái từ chủ phòng để vẽ mượt (nội suy giữa 2 gói, trễ ~70ms)
export class LiveBuf {
  constructor(delay = 70) { this.delay = delay; this.buf = []; this.last = null; }
  feed(d) {
    if (!d || d === this.last) return;
    this.last = d;
    this.buf.push({ t: performance.now(), d });
    if (this.buf.length > 10) this.buf.shift();
  }
  reset() { this.buf = []; this.last = null; }
  sample() {
    const b = this.buf;
    if (!b.length) return null;
    const t = performance.now() - this.delay;
    for (let i = b.length - 1; i > 0; i--) {
      if (b[i - 1].t <= t) {
        const a = b[i - 1], c = b[i];
        const k = c.t > a.t ? Math.max(0, Math.min(1, (t - a.t) / (c.t - a.t))) : 1;
        return { a: a.d, b: c.d, k };
      }
    }
    return { a: b[0].d, b: b[0].d, k: 1 };
  }
}
export const lerp = (a, b, k) => a + (b - a) * k;
export const lerpAng = (a, b, k) => { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return a + d * k; };

// vòng vẽ: tự dừng khi phần tử bị gỡ khỏi trang
export function loop(el, fn) {
  if (el.__loop) return;
  el.__loop = true;
  const tick = () => { if (!el.isConnected) { el.__loop = false; return; } try { fn(); } catch (e) { console.error(e); } requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}

// ảnh pixel từ chuỗi ký tự + bảng màu, tự viền đậm 1px
export function pixelSprite(rows, pal, outline = '#1d1648', flip = false) {
  const h = rows.length, w = rows[0].length;
  const cv = document.createElement('canvas');
  cv.width = w + 2; cv.height = h + 2;
  const c = cv.getContext('2d');
  const on = (x, y) => y >= 0 && y < h && x >= 0 && x < w && rows[y][flip ? w - 1 - x : x] !== '.';
  for (let y = -1; y <= h; y++) for (let x = -1; x <= w; x++) {
    if (on(x, y)) { c.fillStyle = pal[rows[y][flip ? w - 1 - x : x]] || '#f0f'; c.fillRect(x + 1, y + 1, 1, 1); }
    else if (outline && (on(x - 1, y) || on(x + 1, y) || on(x, y - 1) || on(x, y + 1))) { c.fillStyle = outline; c.fillRect(x + 1, y + 1, 1, 1); }
  }
  return cv;
}
export function shade(hex, k) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v) => Math.max(0, Math.min(255, Math.round(k < 0 ? v * (1 + k) : v + (255 - v) * k)));
  return '#' + [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => f(v).toString(16).padStart(2, '0')).join('');
}
// chữ có viền cho canvas độ phân giải cao
export function label(c, text, x, y, { size = 14, color = '#fff', stroke = '#1d1648', w = 4, align = 'center', weight = 800, font = 'system-ui' } = {}) {
  c.font = `${weight} ${size}px ${font}`; c.textAlign = align; c.textBaseline = 'middle';
  c.lineJoin = 'round'; c.lineWidth = w; c.strokeStyle = stroke; c.strokeText(text, x, y);
  c.fillStyle = color; c.fillText(text, x, y);
}
export function rr(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
// âm thanh nhỏ không cần file
let AC = null;
export function blip(notes, type = 'square', vol = 0.04) {
  try {
    AC ||= new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    let t = AC.currentTime;
    for (const [f, d] of notes) {
      const o = AC.createOscillator(), g = AC.createGain();
      o.type = type; o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g).connect(AC.destination); o.start(t); o.stop(t + d + 0.02);
      t += d * 0.8;
    }
  } catch {}
}
export function noise(dur = 0.2, vol = 0.05, hp = 800) {
  try {
    AC ||= new (window.AudioContext || window.webkitAudioContext)();
    const n = Math.floor(AC.sampleRate * dur), buf = AC.createBuffer(1, n, AC.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const s = AC.createBufferSource(), g = AC.createGain(), f = AC.createBiquadFilter();
    f.type = 'highpass'; f.frequency.value = hp; g.gain.value = vol;
    s.buffer = buf; s.connect(f).connect(g).connect(AC.destination); s.start();
  } catch {}
}
