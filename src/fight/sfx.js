// Âm thanh đánh nhau tổng hợp bằng WebAudio (không cần file).
let ac = null, noiseBuf = null, muted = false;
export const setMuted = (m) => { muted = m; };
function ctx() {
  if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch { return null; } }
  if (ac.state === 'suspended') ac.resume().catch(() => {});
  if (!noiseBuf) { noiseBuf = ac.createBuffer(1, ac.sampleRate * 0.5, ac.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
  return ac;
}
export const unlock = () => ctx();
function noise(dur, freq, q, vol, type = 'lowpass') {
  const c = ctx(); if (!c || muted) return;
  const s = c.createBufferSource(); s.buffer = noiseBuf;
  const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = c.createGain(); g.gain.setValueAtTime(vol, c.currentTime); g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
  s.connect(f); f.connect(g); g.connect(c.destination); s.start(); s.stop(c.currentTime + dur);
}
function tone(f0, f1, dur, vol, type = 'sine') {
  const c = ctx(); if (!c || muted) return;
  const o = c.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, c.currentTime); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), c.currentTime + dur);
  const g = c.createGain(); g.gain.setValueAtTime(vol, c.currentTime); g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + dur);
  o.connect(g); g.connect(c.destination); o.start(); o.stop(c.currentTime + dur);
}
export const SND = {
  hit: (big) => { noise(big ? 0.22 : 0.12, big ? 900 : 1400, 1, big ? 0.55 : 0.4); tone(big ? 150 : 220, 50, big ? 0.25 : 0.12, big ? 0.5 : 0.35, 'triangle'); },
  block: () => { noise(0.07, 3000, 4, 0.25, 'bandpass'); tone(900, 600, 0.05, 0.12, 'square'); },
  whiff: (h) => noise(h ? 0.16 : 0.1, h ? 700 : 1100, 0.7, 0.12, 'bandpass'),
  proj: () => { tone(300, 900, 0.25, 0.18, 'sawtooth'); noise(0.3, 600, 1, 0.15); },
  special: () => tone(500, 1000, 0.12, 0.1, 'triangle'),
  super: () => { tone(200, 1200, 0.5, 0.2, 'sawtooth'); tone(300, 1500, 0.6, 0.12, 'square'); },
  quake: () => { tone(80, 30, 0.5, 0.6, 'sine'); noise(0.5, 300, 1, 0.5); },
  ko: () => { tone(400, 60, 1.2, 0.35, 'sawtooth'); noise(0.6, 500, 1, 0.4); },
  round: () => { tone(660, 660, 0.12, 0.15, 'square'); setTimeout(() => tone(990, 990, 0.2, 0.15, 'square'), 140); },
  tele: () => tone(1200, 200, 0.25, 0.12, 'sine'),
};
export function say(text) {
  if (muted || typeof speechSynthesis === 'undefined') return;
  try { const u = new SpeechSynthesisUtterance(text); u.lang = 'vi-VN'; u.rate = 1.15; u.pitch = 0.8; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch {}
}
