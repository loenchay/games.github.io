// Đồng bộ trận đấu qua mạng P2P kiểu "rollback" (như GGPO):
// mỗi máy tự mô phỏng, gửi phím của mình cho đối thủ; chưa nhận được phím đối thủ thì đoán (giữ phím cũ),
// khi phím thật tới mà khác dự đoán thì quay lại khung đó và mô phỏng lại. Người xem chỉ chạy các khung đã chắc chắn.
import * as FIGHT from './sim.js';

export class Session {
  constructor({ side, chars, cfg, send, delay = 2, maxRollback = 10, sim = FIGHT }) {
    this.SIM = sim;
    this.side = side; // 0 | 1 | -1 (người xem)
    this.send = send || (() => {});
    this.delay = delay;
    this.maxRB = maxRollback;
    this.state = sim.initState(chars, cfg);
    this.frame = 0; // số khung đã mô phỏng
    this.inputs = [[], []];
    this.hi = [delay - 1, delay - 1]; // khung cao nhất đã biết liên tục của mỗi bên
    for (const s of [0, 1]) for (let f = 0; f < delay; f++) this.inputs[s][f] = 0;
    this.pred = [];
    this.snaps = new Map();
    this.rb = null;
    this.remoteFrame = 0;
    this.stalled = 0;
    this.events = [];
    this.lastInput = 0;
  }
  get rem() { return 1 - this.side; }
  // người chơi: ghi phím cho khung hiện tại + độ trễ
  setLocal(bits) {
    if (this.side < 0) return;
    const f = this.frame + this.delay;
    if (this.inputs[this.side][f] === undefined) {
      // lấp chỗ trống (khi vừa đứng chờ)
      for (let k = this.hi[this.side] + 1; k <= f; k++) this.inputs[this.side][k] = bits;
      this.hi[this.side] = f;
    }
    this.lastInput = bits;
  }
  packet() {
    const s = this.side, hi = this.hi[s], from = Math.max(0, hi - 23);
    return { s, f: hi, i: this.inputs[s].slice(from, hi + 1), cur: this.frame };
  }
  recv(p) {
    const s = p.s;
    if (s !== 0 && s !== 1 || s === this.side) return;
    const from = p.f - p.i.length + 1;
    for (let k = 0; k < p.i.length; k++) {
      const fr = from + k;
      if (fr < 0 || this.inputs[s][fr] !== undefined) continue;
      this.inputs[s][fr] = p.i[k];
      if (this.side >= 0 && fr < this.frame && this.pred[fr] !== p.i[k]) this.rb = this.rb === null ? fr : Math.min(this.rb, fr);
    }
    while (this.inputs[s][this.hi[s] + 1] !== undefined) this.hi[s]++;
    if (typeof p.cur === 'number') this.remoteFrame = Math.max(this.remoteFrame, p.cur);
  }
  sim(fr) {
    this.snaps.set(fr, this.SIM.clone(this.state));
    const ins = [0, 0];
    for (const s of [0, 1]) {
      let v = this.inputs[s][fr];
      if (v === undefined) { v = this.inputs[s][this.hi[s]] ?? 0; if (s === this.rem) this.pred[fr] = v; }
      else if (s === this.rem) this.pred[fr] = v;
      ins[s] = v;
    }
    const ev = this.SIM.step(this.state, ins[0], ins[1]);
    for (const e of ev) this.events.push({ key: `${fr}:${e.k}:${e.side ?? ''}`, fr, ...e });
  }
  // mỗi 1/60 giây
  tick() {
    if (this.side < 0) return this.tickSpectator();
    if (this.rb !== null) {
      const from = this.rb;
      this.rb = null;
      const snap = this.snaps.get(from);
      if (snap) {
        this.state = this.SIM.clone(snap);
        for (let fr = from; fr < this.frame; fr++) this.sim(fr);
      }
    }
    // đứng chờ nếu đã đoán quá xa
    if (this.frame - this.hi[this.rem] > this.maxRB) { this.stalled++; this.send(this.packet()); return 0; }
    this.stalled = 0;
    // cân bằng thời gian: nếu mình đi nhanh hơn đối thủ thì thỉnh thoảng nghỉ 1 khung
    const adv = this.frame - this.remoteFrame;
    if (adv > 3 && this.frame % 5 === 0) { this.send(this.packet()); return 0; }
    this.sim(this.frame);
    this.frame++;
    this.send(this.packet());
    // dọn ảnh chụp cũ
    const keep = Math.min(this.hi[0], this.hi[1]) - 2;
    for (const k of this.snaps.keys()) if (k < keep) this.snaps.delete(k);
    return 1;
  }
  tickSpectator() {
    const ready = Math.min(this.hi[0], this.hi[1]);
    const behind = ready - this.frame;
    let n = behind > 90 ? 8 : behind > 20 ? 2 : behind >= 3 ? 1 : 0;
    let done = 0;
    while (n-- > 0 && this.frame <= ready) { this.sim(this.frame); this.frame++; done++; }
    this.stalled = done ? 0 : this.stalled + 1;
    if (this.snaps.size > 4) for (const k of [...this.snaps.keys()].slice(0, this.snaps.size - 4)) this.snaps.delete(k);
    return done;
  }
  // ảnh chụp đã chắc chắn — gửi cho người xem vào giữa trận
  snapshot() {
    const c = Math.min(this.hi[0], this.hi[1], this.frame - 1);
    for (let fr = c; fr >= 0; fr--) {
      const st = this.snaps.get(fr);
      if (st) return { frame: fr, state: st, inputs: [this.inputs[0].slice(fr), this.inputs[1].slice(fr)] };
    }
    return null;
  }
  load(snap) {
    this.state = this.SIM.clone(snap.state);
    this.frame = snap.frame;
    for (const s of [0, 1]) { this.inputs[s] = []; snap.inputs[s].forEach((v, k) => { if (v !== null && v !== undefined) this.inputs[s][snap.frame + k] = v; }); this.hi[s] = snap.frame - 1; while (this.inputs[s][this.hi[s] + 1] !== undefined) this.hi[s]++; }
  }
  drainEvents() { const e = this.events; this.events = []; return e; }
}
