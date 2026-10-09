// Thế giới của game "Vỗ Cánh Sinh Tồn": tất định theo seed, nên máy nào cũng thấy cùng một dãy cột ở cùng thời điểm.
// Mỗi người tự mô phỏng con chim của mình; chỉ gửi vị trí cho người khác xem.

export const W = 400, H = 600, GROUND = 540;
export const BX = 110, R = 15; // vị trí ngang + bán kính chim
export const GRAV = 1500, FLAP = -430, MAX_FALL = 720;
export const PIPE_W = 66, SPACING = 215, X0 = 640;
export const HOVER = 2.2;
export const SPEEDS = {
  chill: { v0: 130, acc: 2, cap: 230, gap0: 175, gapMin: 135 },
  normal: { v0: 150, acc: 3, cap: 290, gap0: 165, gapMin: 125 },
  hard: { v0: 175, acc: 4, cap: 330, gap0: 150, gapMin: 118 },
};

export function rng(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// quãng đường đã trôi sau t giây (tốc độ tăng dần rồi chững lại)
export function dist(t, mode = 'normal') {
  const S = SPEEDS[mode] || SPEEDS.normal;
  if (t <= 0) return 0;
  const tc = (S.cap - S.v0) / S.acc;
  if (t <= tc) return S.v0 * t + 0.5 * S.acc * t * t;
  return S.v0 * tc + 0.5 * S.acc * tc * tc + S.cap * (t - tc);
}

const seqCache = new Map();
// cột thứ i: { x (toạ độ thế giới), top (đáy cột trên), bot (đỉnh cột dưới), hue }
// Tâm khe hở của 2 cột liên tiếp không lệch quá MAX_SHIFT để luôn bay qua được.
const MAX_SHIFT = 100;
export function pipe(seed, i, mode = 'normal') {
  const key = seed + ':' + mode;
  let arr = seqCache.get(key);
  if (!arr) { arr = []; seqCache.set(key, arr); if (seqCache.size > 50) seqCache.delete(seqCache.keys().next().value); }
  const S = SPEEDS[mode] || SPEEDS.normal;
  const margin = 70;
  while (arr.length <= i) {
    const k = arr.length;
    const r = rng((seed ^ Math.imul(k + 1, 0x9e3779b1)) >>> 0);
    r(); r();
    const gap = Math.max(S.gapMin, S.gap0 - k * 1.6);
    const lo = margin + gap / 2, hi = GROUND - margin - gap / 2;
    let c = lo + r() * (hi - lo);
    if (k > 0) { const prev = (arr[k - 1].top + arr[k - 1].bot) / 2; c = Math.max(prev - MAX_SHIFT, Math.min(prev + MAX_SHIFT, c)); }
    arr.push({ i: k, x: X0 + k * SPACING, top: c - gap / 2, bot: c + gap / 2, hue: Math.floor(r() * 4) });
  }
  return arr[i];
}

// số cột đã vượt qua tại quãng đường d
export function passed(d) {
  const k = Math.floor((d + BX - R - X0 - PIPE_W) / SPACING) + 1;
  return Math.max(0, k);
}

// va chạm hình tròn với hình chữ nhật
function hitRect(cx, cy, r, x0, y0, x1, y1) {
  const nx = Math.max(x0, Math.min(cx, x1)), ny = Math.max(y0, Math.min(cy, y1));
  const dx = cx - nx, dy = cy - ny;
  return dx * dx + dy * dy < r * r;
}
export function collide(y, d, seed, mode = 'normal') {
  if (y + R >= GROUND) return true;
  const first = Math.max(0, Math.floor((d + BX - R - X0 - PIPE_W) / SPACING));
  for (let i = first; i <= first + 1; i++) {
    const p = pipe(seed, i, mode);
    const sx = p.x - d;
    if (sx > BX + R || sx + PIPE_W < BX - R) continue;
    const rr = R - 2.5; // tha cho một chút cho dễ chịu
    if (hitRect(BX, y, rr, sx, -1000, sx + PIPE_W, p.top) || hitRect(BX, y, rr, sx, p.bot, sx + PIPE_W, GROUND)) return true;
  }
  return false;
}

// Mô phỏng một con chim theo bước cố định
export class Bird {
  constructor(seed, mode) { this.seed = seed; this.mode = mode; this.reset(); }
  reset() { this.t = 0; this.y = H * 0.42; this.vy = 0; this.alive = true; this.deathT = 0; this.score = 0; this.flaps = 0; }
  // lơ lửng lúc đầu cho tới khi vỗ cánh lần đầu (tối đa HOVER giây)
  get hovering() { return this.flaps === 0 && this.t < HOVER; }
  flap() { if (this.alive) { this.vy = FLAP; this.flaps++; } }
  // tiến tới thời điểm thế giới `T`
  step(T) {
    const DT = 1 / 120;
    while (this.t + DT <= T) {
      this.t += DT;
      if (!this.alive) {
        if (this.y + R < GROUND) { this.vy = Math.min(MAX_FALL, this.vy + GRAV * DT); this.y = Math.min(GROUND - R, this.y + this.vy * DT); }
        continue;
      }
      if (this.hovering) { this.y = H * 0.42 + Math.sin(this.t * 6) * 6; this.vy = 0; continue; }
      this.vy = Math.min(MAX_FALL, this.vy + GRAV * DT);
      this.y += this.vy * DT;
      if (this.y < R) { this.y = R; this.vy = Math.max(0, this.vy); }
      const d = dist(this.t, this.mode);
      this.score = passed(d);
      if (collide(this.y, d, this.seed, this.mode)) { this.alive = false; this.deathT = this.t; this.vy = Math.min(this.vy, 0) - 120; }
    }
  }
}
