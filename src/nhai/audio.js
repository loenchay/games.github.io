// Âm thanh cho game Nhại: giải mã âm mẫu, phát kèm đo âm lượng (để nhân vật nhép miệng), thu âm micro.
import { features, NET_SR, resample, mulawEncode, mulawDecode, toB64, fromB64 } from './score.js';

let ctx = null;
export function audioCtx() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}

// ---------- âm mẫu ----------
const refCache = new Map(); // id -> Promise<{buffer, net:Float32Array, feat}>
export function loadRef(id, src) {
  if (refCache.has(id)) return refCache.get(id);
  const p = (async () => {
    let bytes;
    if (src instanceof Uint8Array) bytes = src.buffer.slice(src.byteOffset, src.byteOffset + src.byteLength);
    else {
      const r = await fetch(src);
      if (!r.ok) throw new Error('Không tải được âm thanh ' + id);
      bytes = await r.arrayBuffer();
    }
    const buffer = await audioCtx().decodeAudioData(bytes);
    // chấm điểm trên cùng "đường truyền" như bản nhại để công bằng
    const net = toNet(buffer.getChannelData(0), buffer.sampleRate);
    return { buffer, feat: features(net, NET_SR) };
  })();
  refCache.set(id, p);
  p.catch(() => refCache.delete(id));
  return p;
}
export function setRefFromNet(id, b64) {
  const x = mulawDecode(fromB64(b64));
  const buffer = bufferFrom(x, NET_SR);
  const p = Promise.resolve({ buffer, feat: features(x, NET_SR) });
  refCache.set(id, p);
  return p;
}

// ---------- bản thu <-> chuỗi gửi mạng ----------
export function toNet(samples, sr) { return mulawDecode(mulawEncode(resample(samples, sr, NET_SR))); }
export function encodeTake(samples, sr) { return toB64(mulawEncode(resample(samples, sr, NET_SR))); }
export function decodeTake(b64) { return mulawDecode(fromB64(b64)); }
export function bufferFrom(x, sr) {
  const b = audioCtx().createBuffer(1, Math.max(1, x.length), sr);
  b.copyToChannel(x instanceof Float32Array ? x : Float32Array.from(x), 0);
  return b;
}

// ---------- phát + đo âm lượng ----------
let current = null;
export function stopAll() { if (current) { try { current.src.stop(); } catch {} current.done(); current = null; } }
export function play(buffer, { onLevel, gain = 1 } = {}) {
  stopAll();
  const c = audioCtx();
  const src = c.createBufferSource();
  src.buffer = buffer;
  const g = c.createGain();
  g.gain.value = gain;
  const an = c.createAnalyser();
  an.fftSize = 512;
  src.connect(g); g.connect(an); an.connect(c.destination);
  const data = new Uint8Array(an.fftSize);
  let raf = 0, stopped = false;
  const loop = () => {
    if (stopped) return;
    an.getByteTimeDomainData(data);
    let s = 0;
    for (let i = 0; i < data.length; i++) { const v = (data[i] - 128) / 128; s += v * v; }
    onLevel?.(Math.min(1, Math.sqrt(s / data.length) * 4));
    raf = requestAnimationFrame(loop);
  };
  return new Promise((res) => {
    const done = () => { if (stopped) return; stopped = true; cancelAnimationFrame(raf); onLevel?.(null); res(); };
    current = { src, done };
    src.onended = () => { if (current?.src === src) current = null; done(); };
    src.start();
    loop();
  });
}

// ---------- thu âm ----------
let micStream = null;
export async function getMic() {
  if (micStream && micStream.getAudioTracks().some((t) => t.readyState === 'live')) return micStream;
  micStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: true }, video: false });
  return micStream;
}
export const hasMic = () => !!micStream;

// Thu trong `seconds` giây; onLevel(0..1) gọi liên tục để hiển thị / nhép miệng
export async function record(seconds, { onLevel } = {}) {
  const stream = await getMic();
  const c = audioCtx();
  const src = c.createMediaStreamSource(stream);
  const proc = c.createScriptProcessor(4096, 1, 1);
  const chunks = [];
  let total = 0;
  const mute = c.createGain();
  mute.gain.value = 0;
  src.connect(proc); proc.connect(mute); mute.connect(c.destination);
  proc.onaudioprocess = (e) => {
    const x = e.inputBuffer.getChannelData(0);
    chunks.push(new Float32Array(x));
    total += x.length;
    let s = 0;
    for (let i = 0; i < x.length; i += 4) s += x[i] * x[i];
    onLevel?.(Math.min(1, Math.sqrt(s / (x.length / 4)) * 5));
  };
  await new Promise((r) => setTimeout(r, seconds * 1000));
  proc.onaudioprocess = null;
  try { src.disconnect(); proc.disconnect(); mute.disconnect(); } catch {}
  onLevel?.(null);
  const out = new Float32Array(total);
  let o = 0;
  for (const ch of chunks) { out.set(ch, o); o += ch.length; }
  return { samples: out, sr: c.sampleRate };
}

// Mở mic chỉ để đo (nút "Thử micro")
export async function meter(onLevel) {
  const stream = await getMic();
  const c = audioCtx();
  const src = c.createMediaStreamSource(stream);
  const an = c.createAnalyser();
  an.fftSize = 512;
  src.connect(an);
  const data = new Uint8Array(an.fftSize);
  let on = true;
  const loop = () => {
    if (!on) return;
    an.getByteTimeDomainData(data);
    let s = 0;
    for (let i = 0; i < data.length; i++) { const v = (data[i] - 128) / 128; s += v * v; }
    onLevel(Math.min(1, Math.sqrt(s / data.length) * 5));
    requestAnimationFrame(loop);
  };
  loop();
  return () => { on = false; try { src.disconnect(); } catch {} onLevel(null); };
}

// Cắt bớt khoảng lặng đầu/cuối và giới hạn độ dài (cho âm thanh tự thêm)
export function trimSilence(x, sr, maxSec = 8) {
  let peak = 0;
  for (let i = 0; i < x.length; i++) peak = Math.max(peak, Math.abs(x[i]));
  const thr = peak * 0.04;
  let a = 0, b = x.length - 1;
  while (a < b && Math.abs(x[a]) < thr) a++;
  while (b > a && Math.abs(x[b]) < thr) b--;
  a = Math.max(0, a - Math.round(sr * 0.05));
  b = Math.min(x.length, b + Math.round(sr * 0.1), a + Math.round(sr * maxSec));
  const y = x.slice(a, b);
  if (peak > 0) for (let i = 0; i < y.length; i++) y[i] = (y[i] / peak) * 0.9;
  return y;
}
