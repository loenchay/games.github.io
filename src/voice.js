// Voice chat dạng mesh (mỗi người nối trực tiếp với mọi người) qua WebRTC.
// Luật nghe/nói theo pha game được áp dụng ở cả phía nói (tắt track) và phía nghe (mute audio).

export class Voice {
  constructor(net) {
    this.net = net;
    this.stream = null;
    this.micOn = true;
    this.deaf = false;
    this.canSpeak = true;
    this.peers = new Map(); // pid -> {audio, analyser, data}
    this.hear = () => true;
    this.ctx = null;
    this.self = null;
    this.onLevels = () => {};
    this._loop = this._loop.bind(this);
  }

  get enabled() { return !!this.stream; }

  async enable() {
    if (this.stream) return;
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      video: false,
    });
    this.ctx ||= new (window.AudioContext || window.webkitAudioContext)();
    await this.ctx.resume().catch(() => {});
    this.self = this._analyser(this.stream);
    this.net.addStream(this.stream);
    this.apply();
    requestAnimationFrame(this._loop);
  }

  ensureCtx() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.ctx.resume().catch(() => {});
  }

  peerJoined(pid) {
    if (this.stream) this.net.addStream(this.stream, pid);
  }

  peerStream(stream, pid) {
    this.peerLeft(pid);
    const audio = document.createElement('audio');
    audio.autoplay = true;
    audio.playsInline = true;
    audio.srcObject = stream;
    document.getElementById('audio-sink').appendChild(audio);
    audio.play().catch(() => {});
    this.ensureCtx();
    const an = this._analyser(stream);
    this.peers.set(pid, { audio, ...an });
    this.apply();
  }

  peerLeft(pid) {
    const p = this.peers.get(pid);
    if (!p) return;
    p.audio.srcObject = null;
    p.audio.remove();
    this.peers.delete(pid);
  }

  setMic(on) { this.micOn = on; this.apply(); }
  setDeaf(d) { this.deaf = d; this.apply(); }

  // rules: { canSpeak: bool, canHear: pid => bool }
  setRules(rules) {
    this.canSpeak = rules.canSpeak;
    this.hear = rules.canHear;
    this.apply();
  }

  apply() {
    if (this.stream) for (const t of this.stream.getAudioTracks()) t.enabled = this.micOn && this.canSpeak;
    for (const [pid, p] of this.peers) {
      p.audio.muted = this.deaf || !this.hear(pid);
      if (!p.audio.muted) p.audio.play().catch(() => {});
    }
  }

  _analyser(stream) {
    try {
      const src = this.ctx.createMediaStreamSource(stream);
      const analyser = this.ctx.createAnalyser();
      analyser.fftSize = 512;
      src.connect(analyser);
      return { analyser, data: new Uint8Array(analyser.fftSize) };
    } catch {
      return { analyser: null, data: null };
    }
  }

  _level(a) {
    if (!a?.analyser) return 0;
    a.analyser.getByteTimeDomainData(a.data);
    let sum = 0;
    for (let i = 0; i < a.data.length; i++) { const v = (a.data[i] - 128) / 128; sum += v * v; }
    return Math.sqrt(sum / a.data.length);
  }

  _loop(ts) {
    if (!this._last || ts - this._last > 120) {
      this._last = ts;
      const speaking = new Set();
      if (this.self && this.micOn && this.canSpeak && this._level(this.self) > 0.04) speaking.add('self');
      for (const [pid, p] of this.peers) if (!p.audio.muted && this._level(p) > 0.04) speaking.add(pid);
      this.onLevels(speaking);
    }
    requestAnimationFrame(this._loop);
  }
}
