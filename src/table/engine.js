// Bộ máy phòng "bàn chơi nhiều người" (Cờ Cá Ngựa, Cờ Tỷ Phú, Một Lá!) — chạy trên máy CHỦ PHÒNG.
// Lo phần chung: người vào/ra, ghế ngồi, sẵn sàng, bắt đầu/kết thúc ván, đếm giờ lượt, tự đi thay người mất mạng.
// Luật từng game cắm vào qua `game`:
//   game.minSeats, game.maxSeats, game.defaultConfig, game.cleanConfig(cfg, patch)
//   game.setup(n, config, ctx) -> state            (n = số người chơi, ghế 0..n-1)
//   game.act(state, seat, action, ctx) -> lỗi|null
//   game.turn(state) -> ghế đang phải hành động (hoặc -1)  · game.turnKey(state) -> chuỗi đổi khi lượt đổi
//   game.auto(state, seat, ctx)                    (đi thay khi hết giờ / mất mạng)
//   game.view(state, seat) -> trạng thái gửi cho người ở ghế `seat` (-1 = người xem) — giấu bài người khác
//   ctx: { log, fx, rng, now, name(seat), finish({ winners:[seat], rank:[seat], text }) }

export const MAX_PEOPLE = 10;
export const TURN_TIMES = [0, 15, 30, 60];

export class TableEngine {
  constructor(game, hostCid, { now = () => Date.now(), cleanAv = (a) => a, rng = Math.random } = {}) {
    this.G = game;
    this.now = now;
    this.rng = rng;
    this.cleanAv = cleanAv;
    this.onChange = () => {};
    this.onEvent = () => {};
    this.s = {
      hostCid, players: [], seats: Array(game.maxSeats).fill(null), ready: {},
      config: { turnTime: 30, ...game.defaultConfig }, phase: 'idle', gameId: 0,
      game: null, order: [], result: null, deadline: 0, durMs: 0, turnKey: '',
      log: [], logSeq: 0,
    };
    const self = this;
    this.ctx = {
      log: (t, k) => self.log(t, k),
      fx: (ev) => self.onEvent(ev),
      rng: () => self.rng(),
      now: () => self.now(),
      name: (seat) => self.name(self.s.order[seat]),
      finish: (r) => self.finish(r),
    };
  }
  P(cid) { return this.s.players.find((p) => p.cid === cid); }
  byPid(pid) { return this.s.players.find((p) => p.pid === pid); }
  isHost(cid) { return cid === this.s.hostCid; }
  name(cid) { return this.P(cid)?.name ?? '???'; }
  seatOf(cid) { const i = this.s.seats.indexOf(cid); return i; }
  playSeat(cid) { return this.s.phase === 'play' || this.s.phase === 'over' ? this.s.order.indexOf(cid) : -1; }
  changed() { this.onChange(); }
  log(text, kind = 'info') {
    this.s.log.push({ id: ++this.s.logSeq, text, kind, ts: Date.now() });
    if (this.s.log.length > 100) this.s.log.splice(0, this.s.log.length - 100);
  }

  addPlayer(cid, info, pid) {
    const name = String(info?.name || '').trim().slice(0, 18) || 'Người chơi';
    const av = this.cleanAv(info?.av);
    const ex = this.P(cid);
    if (ex) { ex.pid = pid; ex.connected = true; ex.name = name; ex.av = av; this.changed(); return null; }
    if (this.s.players.filter((p) => p.connected).length >= MAX_PEOPLE) return `Phòng đã đủ ${MAX_PEOPLE} người.`;
    let n = name, k = 2;
    while (this.s.players.some((p) => p.name === n)) n = `${name} ${k++}`;
    this.s.players.push({ cid, pid, name: n, av, connected: true, wins: 0, played: 0, score: 0 });
    this.log(`${n} đã vào phòng.`, 'join');
    if (this.s.phase !== 'play') { const i = this.s.seats.indexOf(null); if (i >= 0) { this.s.seats[i] = cid; this.s.ready[cid] = false; } }
    this.changed();
    return null;
  }
  disconnect(pid) {
    const p = this.byPid(pid);
    if (!p) return;
    p.connected = false;
    const inGame = this.s.phase === 'play' && this.s.order.includes(p.cid);
    if (inGame) this.log(`${p.name} mất kết nối — máy sẽ tự đi thay cho tới khi quay lại.`, 'leave');
    else {
      const i = this.seatOf(p.cid);
      if (i >= 0) this.s.seats[i] = null;
      if (!this.isHost(p.cid)) this.s.players = this.s.players.filter((x) => x !== p);
      this.log(`${p.name} đã rời phòng.`, 'leave');
    }
    this.changed();
  }

  handle(cid, a) {
    const me = this.P(cid);
    if (!me || !a || typeof a !== 'object') return 'Không hợp lệ.';
    const s = this.s, host = this.isHost(cid), seat = this.seatOf(cid);
    switch (a.t) {
      case 'cfg': {
        if (!host || s.phase === 'play') return 'Chỉ chủ phòng chỉnh được (khi chưa vào ván).';
        const p = a.cfg || {};
        if ('turnTime' in p && TURN_TIMES.includes(Number(p.turnTime))) s.config.turnTime = Number(p.turnTime);
        s.config = { ...s.config, ...this.G.cleanConfig(s.config, p) };
        for (const k in s.ready) s.ready[k] = false;
        this.changed();
        return null;
      }
      case 'sit': {
        if (s.phase === 'play') return 'Đang có ván, đợi xong nhé.';
        const i = Number(a.seat);
        if (!(i >= 0 && i < s.seats.length)) return 'Ghế không hợp lệ.';
        if (s.seats[i] && s.seats[i] !== cid) return 'Ghế này đã có người.';
        if (seat >= 0) s.seats[seat] = null;
        s.seats[i] = cid; s.ready[cid] = false;
        this.changed();
        return null;
      }
      case 'stand': {
        if (s.phase === 'play') return 'Đang chơi, không rời ghế được.';
        if (seat >= 0) { s.seats[seat] = null; s.ready[cid] = false; this.log(`${me.name} rời ghế, xuống xem.`, 'info'); this.changed(); }
        return null;
      }
      case 'kick': {
        if (!host || s.phase === 'play' || a.cid === cid) return 'Không thể mời ra.';
        const p = this.P(a.cid);
        if (!p) return null;
        const i = this.seatOf(p.cid);
        if (i >= 0) s.seats[i] = null;
        s.players = s.players.filter((x) => x !== p);
        this.log(`${p.name} đã bị mời ra.`, 'leave');
        this.changed();
        return null;
      }
      case 'ready': {
        if (seat < 0) return 'Bạn đang là người xem.';
        if (s.phase === 'play') return null;
        s.ready[cid] = a.on !== false;
        this.changed();
        return null;
      }
      case 'start': {
        if (!host) return 'Chỉ chủ phòng bắt đầu được.';
        return this.start();
      }
      case 'end': {
        if (!host || s.phase !== 'play') return 'Không thể.';
        this.log('Chủ phòng kết thúc ván sớm.', 'info');
        const r = this.G.endEarly ? this.G.endEarly(s.game, this.ctx) : null;
        if (s.phase === 'play') this.finish(r || { winners: [], text: 'Ván bị dừng.' });
        return null;
      }
      case 'g': {
        if (s.phase !== 'play') return 'Ván chưa bắt đầu.';
        const ps = s.order.indexOf(cid);
        if (ps < 0) return 'Bạn đang là người xem.';
        const err = this.G.act(s.game, ps, a.a || {}, this.ctx);
        if (!err) this.afterAct();
        return err;
      }
    }
    return 'Hành động không rõ.';
  }

  seated() { return this.s.seats.filter((c) => c && this.P(c)?.connected); }
  canStart() {
    const sd = this.seated();
    if (sd.length < this.G.minSeats) return `Cần ít nhất ${this.G.minSeats} người ngồi ghế.`;
    const notReady = sd.filter((c) => !this.s.ready[c] && !this.isHost(c));
    if (notReady.length) return `Còn ${notReady.length} người chưa sẵn sàng.`;
    return null;
  }
  start() {
    const s = this.s;
    if (s.phase === 'play') return 'Đang chơi rồi.';
    const err = this.canStart();
    if (err) return err;
    // thứ tự chơi = thứ tự ghế (bỏ ghế trống)
    s.order = s.seats.filter((c) => c && this.P(c)?.connected);
    s.gameId++;
    s.result = null;
    s.phase = 'play';
    for (const c of s.order) { const p = this.P(c); if (p) p.played++; s.ready[c] = false; }
    this.log(`Ván ${s.gameId} bắt đầu với ${s.order.length} người!`, 'phase');
    s.game = this.G.setup(s.order.length, s.config, this.ctx);
    s.turnKey = '';
    this.onEvent({ type: 'start' });
    this.afterAct();
    return null;
  }
  afterAct() {
    const s = this.s;
    if (s.phase === 'play') {
      const k = this.G.turnKey(s.game);
      if (k !== s.turnKey) {
        s.turnKey = k;
        const t = s.config.turnTime;
        s.durMs = t ? t * 1000 : 0;
        s.deadline = t ? this.now() + s.durMs : 0;
      }
    }
    this.changed();
  }
  finish(r) {
    const s = this.s;
    if (s.phase !== 'play') return;
    s.phase = 'over';
    s.deadline = 0;
    const winners = (r?.winners || []).map((i) => s.order[i]).filter(Boolean);
    for (const c of winners) { const p = this.P(c); if (p) p.wins++; }
    if (r?.score) r.score.forEach((v, i) => { const p = this.P(s.order[i]); if (p) p.score += v || 0; });
    s.result = { winners, rank: (r?.rank || []).map((i) => s.order[i]), text: r?.text || '' };
    this.log(winners.length ? `🏆 ${winners.map((c) => this.name(c)).join(', ')} thắng! ${r?.text || ''}` : `Ván kết thúc. ${r?.text || ''}`, 'win');
    this.onEvent({ type: 'over', winners });
    this.changed();
  }
  tick() {
    const s = this.s;
    if (s.phase !== 'play') return;
    if (this.G.tick) { this.G.tick(s.game, this.ctx); if (s.phase !== 'play') return; }
    const seat = this.G.turn(s.game);
    if (seat < 0) return;
    const p = this.P(s.order[seat]);
    const off = !p || !p.connected;
    // người mất mạng: đi thay sau 3 giây
    if (off) { p && (p.offAt ||= this.now()); if (this.now() - (p?.offAt || 0) < 3000) return; }
    else if (p) p.offAt = 0;
    if (off || (s.deadline && this.now() >= s.deadline)) {
      if (!off) this.log(`${p.name} hết giờ — máy tự đi thay.`, 'info');
      this.G.auto(s.game, seat, this.ctx);
      s.turnKey = ''; // luôn đặt lại đồng hồ sau khi tự đi
      this.afterAct();
    }
  }

  // trạng thái gửi cho người `cid` (giấu bài người khác)
  pub(cid) {
    const s = this.s;
    const seat = s.order.indexOf(cid);
    return {
      phase: s.phase, gameId: s.gameId, hostCid: s.hostCid,
      remaining: s.deadline ? Math.max(0, s.deadline - this.now()) : 0, durMs: s.durMs,
      players: s.players.map((p) => ({ cid: p.cid, pid: p.pid, name: p.name, av: p.av, connected: p.connected, wins: p.wins, played: p.played, score: p.score })),
      seats: s.seats, ready: s.ready, config: s.config, order: s.order, result: s.result,
      game: s.game && (s.phase === 'play' || s.phase === 'over') ? this.G.view(s.game, s.phase === 'over' ? -2 : seat) : null,
      canStart: s.phase !== 'play' ? this.canStart() : null,
      log: s.log.slice(-40), max: MAX_PEOPLE, maxSeats: this.G.maxSeats, minSeats: this.G.minSeats,
    };
  }
}
