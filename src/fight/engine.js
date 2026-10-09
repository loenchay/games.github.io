// Bộ máy phòng "Quyền Cước 97" — chạy trên máy CHỦ PHÒNG: ghế 2 võ sĩ, chọn nhân vật, sẵn sàng, hàng chờ, ghi kết quả.
// Trận đấu thật do 2 máy võ sĩ tự mô phỏng (xem netplay.js) rồi báo kết quả về đây.
import { CHAR as FCHAR, CHARS as FCHARS } from './chars.js';
let CHAR = FCHAR, CHARS = FCHARS;
// dùng lại cho game khác (VD: đua xe) với danh sách nhân vật/xe riêng
export function setRoster(list) { CHARS = list; CHAR = Object.fromEntries(list.map((c) => [c.id, c])); }

export const MAX_PEOPLE = 10;
export class FightEngine {
  constructor(hostCid, { now = () => Date.now(), cleanAv = (a) => a } = {}) {
    this.now = now;
    this.cleanAv = cleanAv;
    this.onChange = () => {};
    this.onEvent = () => {};
    this.s = {
      hostCid, players: [], seats: [null, null], ready: [false, false], pick: {}, queue: [],
      cfg: { rounds: 2, time: 99, rotate: true, stage: -1 }, phase: 'lobby', match: null, mid: 0, last: null, log: [], logSeq: 0,
    };
  }
  P(cid) { return this.s.players.find((p) => p.cid === cid); }
  byPid(pid) { return this.s.players.find((p) => p.pid === pid); }
  isHost(cid) { return cid === this.s.hostCid; }
  name(cid) { return this.P(cid)?.name ?? '???'; }
  seatOf(cid) { return this.s.seats.indexOf(cid); }
  changed() { this.onChange(); }
  log(text, kind = 'info') { this.s.log.push({ id: ++this.s.logSeq, text, kind }); if (this.s.log.length > 80) this.s.log.splice(0, this.s.log.length - 80); }

  addPlayer(cid, info, pid) {
    const name = String(info?.name || '').trim().slice(0, 18) || 'Võ sĩ';
    const av = this.cleanAv(info?.av);
    const ex = this.P(cid);
    if (ex) { ex.pid = pid; ex.connected = true; ex.name = name; ex.av = av; ex.goneAt = 0; this.changed(); return null; }
    if (this.s.players.filter((p) => p.connected).length >= MAX_PEOPLE) return `Phòng đã đủ ${MAX_PEOPLE} người.`;
    let n = name, k = 2;
    while (this.s.players.some((p) => p.name === n)) n = `${name} ${k++}`;
    this.s.players.push({ cid, pid, name: n, av, connected: true, wins: 0, losses: 0 });
    if (!this.s.pick[cid]) this.s.pick[cid] = CHARS[this.s.players.length % CHARS.length].id;
    this.log(`${n} đã vào phòng.`, 'join');
    if (this.s.phase === 'lobby') { const i = this.s.seats.indexOf(null); if (i >= 0) { this.s.seats[i] = cid; this.s.ready[i] = false; } }
    this.changed();
    return null;
  }
  disconnect(pid) {
    const p = this.byPid(pid);
    if (!p) return;
    p.connected = false;
    const i = this.seatOf(p.cid);
    this.s.queue = this.s.queue.filter((c) => c !== p.cid);
    if (this.s.phase === 'fight' && this.s.match?.sides.includes(p.cid)) { p.goneAt = this.now(); this.log(`${p.name} mất kết nối — đợi quay lại 30 giây...`, 'leave'); }
    else {
      if (i >= 0) { this.s.seats[i] = null; this.s.ready[i] = false; }
      if (!this.isHost(p.cid)) this.s.players = this.s.players.filter((x) => x !== p);
      this.log(`${p.name} đã rời phòng.`, 'leave');
      this.fillSeats();
    }
    this.changed();
  }
  fillSeats() {
    if (this.s.phase !== 'lobby') return;
    for (let i = 0; i < 2; i++) if (!this.s.seats[i] && this.s.queue.length) { const c = this.s.queue.shift(); if (this.P(c)?.connected && this.seatOf(c) < 0) { this.s.seats[i] = c; this.s.ready[i] = false; this.log(`${this.name(c)} lên võ đài!`, 'info'); } }
  }

  handle(cid, a) {
    const me = this.P(cid);
    if (!me || !a || typeof a !== 'object') return 'Không hợp lệ.';
    const s = this.s, host = this.isHost(cid), seat = this.seatOf(cid);
    switch (a.t) {
      case 'pick':
        if (!CHAR[a.c]) return 'Nhân vật không có.';
        if (s.phase === 'fight' && s.match?.sides.includes(cid)) return 'Đang đấu.';
        s.pick[cid] = a.c;
        if (seat >= 0) s.ready[seat] = false;
        this.changed();
        return null;
      case 'sit': {
        if (s.phase !== 'lobby') return 'Đang có trận, đợi xong nhé.';
        const i = a.side === 1 ? 1 : 0;
        if (s.seats[i] && s.seats[i] !== cid) return 'Ghế này đã có người.';
        if (seat >= 0) { s.seats[seat] = null; s.ready[seat] = false; }
        s.seats[i] = cid; s.ready[i] = false;
        s.queue = s.queue.filter((c) => c !== cid);
        this.changed();
        return null;
      }
      case 'stand':
        if (seat < 0) return null;
        if (s.phase === 'fight' && s.match?.sides.includes(cid)) return 'Đang đấu.';
        s.seats[seat] = null; s.ready[seat] = false;
        this.fillSeats();
        this.changed();
        return null;
      case 'queue':
        if (seat >= 0) return 'Bạn đang ngồi ghế rồi.';
        if (s.queue.includes(cid)) s.queue = s.queue.filter((c) => c !== cid);
        else s.queue.push(cid);
        this.fillSeats();
        this.changed();
        return null;
      case 'ready':
        if (seat < 0) return 'Bạn đang là người xem.';
        if (s.phase !== 'lobby') return null;
        s.ready[seat] = a.on !== false;
        this.changed();
        if (s.ready[0] && s.ready[1] && s.seats[0] && s.seats[1]) this.start();
        return null;
      case 'cfg':
        if (!host || s.phase !== 'lobby') return 'Chỉ chủ phòng chỉnh được khi chưa đấu.';
        if ([1, 2, 3].includes(Number(a.cfg?.rounds))) s.cfg.rounds = Number(a.cfg.rounds);
        if ([0, 60, 99].includes(Number(a.cfg?.time))) s.cfg.time = Number(a.cfg.time);
        if (a.cfg && 'rotate' in a.cfg) s.cfg.rotate = !!a.cfg.rotate;
        if ([-1, 0, 1, 2].includes(Number(a.cfg?.stage))) s.cfg.stage = Number(a.cfg.stage);
        s.ready = [false, false];
        this.changed();
        return null;
      case 'kick': {
        if (!host || a.cid === cid || (s.phase === 'fight' && s.match?.sides.includes(a.cid))) return 'Không thể mời ra.';
        const p = this.P(a.cid);
        if (!p) return null;
        const i = this.seatOf(p.cid);
        if (i >= 0) { s.seats[i] = null; s.ready[i] = false; }
        s.queue = s.queue.filter((c) => c !== p.cid);
        s.players = s.players.filter((x) => x !== p);
        this.log(`${p.name} đã bị mời ra.`, 'leave');
        this.fillSeats();
        this.changed();
        return null;
      }
      case 'result': {
        if (s.phase !== 'fight' || !s.match || a.id !== s.match.id) return null;
        if (!s.match.sides.includes(cid)) return null;
        const w = a.w === 0 || a.w === 1 ? a.w : -1;
        return this.finish(w, 'end', a.score);
      }
      case 'forfeit': {
        if (s.phase !== 'fight' || !s.match) return null;
        const side = s.match.sides.indexOf(cid);
        if (side < 0) return null;
        this.log(`${me.name} bỏ cuộc.`, 'info');
        return this.finish(1 - side, 'forfeit');
      }
    }
    return 'Hành động không rõ.';
  }
  start() {
    const s = this.s;
    const sides = [...s.seats];
    s.match = { id: ++s.mid, sides, chars: sides.map((c) => s.pick[c] || CHARS[0].id), cfg: { rounds: s.cfg.rounds, time: s.cfg.time, seed: Math.floor(Math.random() * 2 ** 31) }, stage: s.cfg.stage >= 0 ? s.cfg.stage : Math.floor(Math.random() * 3), startAt: this.now() + 3200 };
    s.phase = 'fight';
    s.ready = [false, false];
    this.log(`🥊 Trận ${s.mid}: ${this.name(sides[0])} (${CHAR[s.match.chars[0]].name}) đấu ${this.name(sides[1])} (${CHAR[s.match.chars[1]].name})!`, 'phase');
    this.onEvent({ type: 'start' });
    this.changed();
  }
  finish(w, why, score) {
    const s = this.s, m = s.match;
    s.phase = 'lobby';
    const wc = w >= 0 ? m.sides[w] : null, lc = w >= 0 ? m.sides[1 - w] : null;
    if (wc) { const p = this.P(wc); if (p) p.wins++; const q = this.P(lc); if (q) q.losses++; }
    s.last = { id: m.id, w, winner: wc, loser: lc, chars: m.chars, sides: m.sides, why, score: Array.isArray(score) ? score.slice(0, 2).map(Number) : null };
    this.log(wc ? `🏆 ${this.name(wc)} (${CHAR[m.chars[w]].name}) thắng${why === 'forfeit' ? ' — đối thủ bỏ cuộc' : why === 'left' ? ' — đối thủ rời đi' : ''}!` : '🤝 Trận đấu hoà!', 'win');
    // người thắng ở lại, người thua nhường ghế cho người xếp hàng
    if (s.cfg.rotate && lc && s.queue.length) {
      const i = s.seats.indexOf(lc);
      if (i >= 0) { s.seats[i] = null; s.queue.push(lc); this.log(`${this.name(lc)} xuống xếp hàng.`, 'info'); }
    }
    for (let i = 0; i < 2; i++) if (s.seats[i] && !this.P(s.seats[i])?.connected) s.seats[i] = null;
    this.fillSeats();
    s.match = null;
    this.onEvent({ type: 'over', winner: wc });
    this.changed();
    return null;
  }
  tick() {
    const s = this.s;
    if (s.phase !== 'fight' || !s.match) return;
    s.match.sides.forEach((c, i) => {
      const p = this.P(c);
      if (s.phase === 'fight' && p && !p.connected && p.goneAt && this.now() - p.goneAt > 30000) this.finish(1 - i, 'left');
    });
  }
  pub() {
    const s = this.s;
    return {
      phase: s.phase, hostCid: s.hostCid, hostNow: this.now(), seats: s.seats, ready: s.ready, pick: s.pick, queue: s.queue, cfg: s.cfg, match: s.match, last: s.last,
      players: s.players.map((p) => ({ cid: p.cid, pid: p.pid, name: p.name, av: p.av, connected: p.connected, wins: p.wins, losses: p.losses })),
      log: s.log.slice(-40), max: MAX_PEOPLE,
    };
  }
}
