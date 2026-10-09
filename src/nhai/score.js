// Chấm điểm "nhại giống": so đường cao độ (ngữ điệu) + đường âm lượng (nhịp) của bản nhại với âm mẫu.
// Không hiểu chữ — chỉ nghe lên xuống, dài ngắn, ngắt nghỉ. Không phụ thuộc giọng nam/nữ (so cao độ tương đối).
// Thuần JS, không dùng DOM -> test được bằng Node.

const TARGET_SR = 11025;
const HOP_S = 0.02; // 20ms / khung
const WIN = 512;

// Giảm tần số lấy mẫu (lọc trung bình đơn giản)
function downsample(x, sr) {
  const f = Math.max(1, Math.floor(sr / TARGET_SR));
  if (f === 1) return { y: x, sr };
  const n = Math.floor(x.length / f);
  const y = new Float32Array(n);
  for (let i = 0; i < n; i++) { let s = 0; for (let j = 0; j < f; j++) s += x[i * f + j]; y[i] = s / f; }
  return { y, sr: sr / f };
}

// YIN rút gọn: trả về tần số (Hz) hoặc 0 nếu không có cao độ rõ
function yin(buf, off, sr, minF = 70, maxF = 1500) {
  const tMin = Math.floor(sr / maxF), tMax = Math.min(Math.floor(sr / minF), WIN / 2 - 1);
  const W = WIN / 2;
  const d = new Float32Array(tMax + 1);
  for (let t = 1; t <= tMax; t++) {
    let s = 0;
    for (let i = 0; i < W; i++) { const v = buf[off + i] - buf[off + i + t]; s += v * v; }
    d[t] = s;
  }
  // chuẩn hoá tích luỹ
  let run = 0, best = -1;
  const cm = new Float32Array(tMax + 1); cm[0] = 1;
  for (let t = 1; t <= tMax; t++) { run += d[t]; cm[t] = run ? (d[t] * t) / run : 1; }
  for (let t = tMin; t <= tMax; t++) {
    if (cm[t] < 0.18) { while (t + 1 <= tMax && cm[t + 1] < cm[t]) t++; best = t; break; }
  }
  if (best < 0) {
    let mv = 1; for (let t = tMin; t <= tMax; t++) if (cm[t] < mv) { mv = cm[t]; best = t; }
    if (mv > 0.35) return 0;
  }
  // nội suy parabol
  const a = cm[best - 1] ?? cm[best], b = cm[best], c = cm[best + 1] ?? cm[best];
  const den = a - 2 * b + c;
  const tt = den ? best + (a - c) / (2 * den) : best;
  return sr / tt;
}

// Trích đặc trưng: mảng khung { e: năng lượng 0..1, p: cao độ (semitone) hoặc NaN }
export function features(samples, sampleRate) {
  const { y, sr } = downsample(samples, sampleRate);
  const hop = Math.round(sr * HOP_S);
  const n = Math.max(0, Math.floor((y.length - WIN) / hop) + 1);
  const db = new Float32Array(n), hz = new Float32Array(n);
  let maxDb = -120;
  for (let k = 0; k < n; k++) {
    const off = k * hop;
    let s = 0;
    for (let i = 0; i < WIN; i++) s += y[off + i] * y[off + i];
    db[k] = 10 * Math.log10(s / WIN + 1e-10);
    if (db[k] > maxDb) maxDb = db[k];
  }
  for (let k = 0; k < n; k++) hz[k] = db[k] > maxDb - 30 ? yin(y, k * hop, sr) : 0;
  // cắt im lặng hai đầu
  const thr = maxDb - 32;
  let a = 0, b = n - 1;
  while (a < n && db[a] < thr) a++;
  while (b > a && db[b] < thr) b--;
  const frames = [];
  for (let k = a; k <= b; k++) {
    const e = Math.max(0, Math.min(1, (db[k] - (maxDb - 40)) / 40));
    const p = hz[k] > 0 ? 12 * Math.log2(hz[k] / 440) + 69 : NaN;
    frames.push({ e, p });
  }
  // làm mượt cao độ (trung vị 3 khung) để bớt nhảy quãng tám lẻ tẻ
  for (let i = 1; i < frames.length - 1; i++) {
    const t = [frames[i - 1].p, frames[i].p, frames[i + 1].p].filter((v) => !Number.isNaN(v)).sort((u, v) => u - v);
    if (t.length === 3) frames[i].pm = t[1];
  }
  for (const f of frames) if (f.pm !== undefined) { f.p = f.pm; delete f.pm; }
  const voiced = frames.filter((f) => !Number.isNaN(f.p)).map((f) => f.p).sort((u, v) => u - v);
  const med = voiced.length ? voiced[Math.floor(voiced.length / 2)] : 0;
  for (const f of frames) f.r = Number.isNaN(f.p) ? NaN : f.p - med; // cao độ tương đối
  return { frames, maxDb, voicedRatio: frames.length ? voiced.length / frames.length : 0, dur: frames.length * HOP_S };
}

// So 2 bộ đặc trưng bằng DTW. Trả về điểm 0..100 và các thành phần để hiển thị.
export function compare(ref, mim) {
  const A = ref.frames, B = mim.frames;
  if (!B.length || mim.maxDb < -50) return { score: 0, pitch: 0, rhythm: 0, length: 0, silent: true };
  if (!A.length) return { score: 0, pitch: 0, rhythm: 0, length: 0 };
  const n = A.length, m = B.length;
  const pitched = ref.voicedRatio > 0.3;
  const band = Math.max(8, Math.ceil(Math.max(n, m) * 0.35));
  const INF = 1e9;
  let prev = new Float64Array(m + 1).fill(INF), cur = new Float64Array(m + 1);
  let prevL = new Float64Array(m + 1), curL = new Float64Array(m + 1);
  let prevP = new Float64Array(m + 1), curP = new Float64Array(m + 1);
  prev[0] = 0;
  for (let i = 1; i <= n; i++) {
    cur.fill(INF); curL.fill(0); curP.fill(0);
    const jc = Math.round((i * m) / n);
    const j0 = Math.max(1, jc - band), j1 = Math.min(m, jc + band);
    const a = A[i - 1];
    for (let j = j0; j <= j1; j++) {
      const b = B[j - 1];
      const ce = Math.abs(a.e - b.e);
      let cp;
      const va = !Number.isNaN(a.r), vb = !Number.isNaN(b.r);
      if (va && vb) { let d = Math.abs(a.r - b.r); d = Math.min(d, Math.abs(d - 12), Math.abs(d + 12) * 1.2); cp = Math.min(d, 7) / 7; }
      else if (va !== vb) cp = 0.45 * Math.max(a.e, b.e);
      else cp = 0;
      const c = ce * 0.8 + (pitched ? cp * 1.2 : cp * 0.4);
      // chọn đường đi tốt nhất
      let best = prev[j - 1], bl = prevL[j - 1], bp = prevP[j - 1];
      if (prev[j] < best) { best = prev[j]; bl = prevL[j]; bp = prevP[j]; }
      if (cur[j - 1] < best) { best = cur[j - 1]; bl = curL[j - 1]; bp = curP[j - 1]; }
      cur[j] = best + c; curL[j] = bl + 1; curP[j] = bp + cp;
    }
    [prev, cur] = [cur, prev]; [prevL, curL] = [curL, prevL]; [prevP, curP] = [curP, prevP];
  }
  const total = prev[m], L = prevL[m] || 1;
  if (total >= INF / 2) return { score: 5, pitch: 0, rhythm: 0, length: 0 };
  const D = total / L;
  const ratio = mim.dur / Math.max(0.05, ref.dur);
  const lenPen = Math.abs(Math.log2(ratio));
  const score = 100 * Math.exp(-(D * 2.1 + Math.max(0, lenPen - 0.15) * 1.3));
  const pitchSim = pitched ? 100 * (1 - Math.min(1, prevP[m] / L)) : null;
  const rhythmSim = 100 * Math.exp(-D * 1.2);
  const lengthSim = 100 * Math.exp(-lenPen * 1.6);
  // giãn thang điểm: bản nhại ngẫu nhiên ~ 10-25, nhại khá ~ 60-80, gần y hệt ~ 95-100
  const shown = 100 * Math.pow(Math.max(0, Math.min(1, (score - 18) / 72)), 0.8);
  return { score: Math.round(shown), raw: Math.round(score), pitch: pitchSim == null ? null : Math.round(pitchSim), rhythm: Math.round(rhythmSim), length: Math.round(lengthSim) };
}

export function similarity(refSamples, refSr, mimSamples, mimSr) {
  return compare(features(refSamples, refSr), features(mimSamples, mimSr));
}

// ---------- mã hoá bản thu để gửi qua mạng (μ-law 8 bit, 12kHz) ----------
export const NET_SR = 12000;
export function resample(x, from, to) {
  if (from === to) return Float32Array.from(x);
  const n = Math.floor((x.length * to) / from);
  const y = new Float32Array(n);
  const r = from / to;
  // lọc thấp đơn giản khi giảm tần số
  const k = Math.max(1, Math.round(r));
  for (let i = 0; i < n; i++) {
    const c = i * r;
    let s = 0, cnt = 0;
    for (let j = Math.floor(c - k / 2); j <= Math.floor(c + k / 2); j++) if (j >= 0 && j < x.length) { s += x[j]; cnt++; }
    y[i] = cnt ? s / cnt : 0;
  }
  return y;
}
export function mulawEncode(x) {
  const out = new Uint8Array(x.length);
  for (let i = 0; i < x.length; i++) {
    const v = Math.max(-1, Math.min(1, x[i]));
    const m = Math.sign(v) * Math.log1p(255 * Math.abs(v)) / Math.log1p(255);
    out[i] = Math.round((m + 1) * 127.5);
  }
  return out;
}
export function mulawDecode(u) {
  const out = new Float32Array(u.length);
  for (let i = 0; i < u.length; i++) {
    const m = u[i] / 127.5 - 1;
    out[i] = Math.sign(m) * (Math.pow(256, Math.abs(m)) - 1) / 255;
  }
  return out;
}
export function toB64(bytes) {
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(s);
}
export function fromB64(b64) {
  const s = atob(b64);
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i);
  return out;
}
