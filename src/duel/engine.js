// Bộ máy phòng cờ đối kháng 2 người (Cờ Vua, Cờ Tướng) — chỉ chạy trên máy CHỦ PHÒNG, không phụ thuộc DOM/mạng.
// 2 ghế: 'w' (đi trước: Trắng / Đỏ) và 'b' (Đen). Tối đa 10 người: ai không ngồi ghế là người xem.
// Luật cờ cắm vào qua `rules` (xem chess.js / xiangqi.js).

export const MAX_PEOPLE = 10;
export const DEFAULT_CONFIG = {
  clock: 10, // phút mỗi bên, 0 = không tính giờ
  inc: 0, // giây cộng thêm sau mỗi nước
  first: 'loser', // 'loser' = người thua cầm quân đi trước ván sau | 'alternate' = đổi màu mỗi ván | 'fixed' = giữ nguyên
};
export const CLOCKS = [0, 3, 5, 10, 15, 30];
export const INCS = [0, 2, 5, 10];
const other = (s) => (s === 'w' ? 'b' : 'w');

export class DuelEngine {
  constructor(rules, hostCid, { now = () => Date.now(), cleanAv = (a) => a, label = { w: 'Trắng', b: 'Đen' } } = {}) {
    this.R = rules;
    this.now = now;
    this.cleanAv = cleanAv;
    this.label = label;
    this.onChange = () => {};
    this.onEvent = () => {};
    this.s = {
      hostCid, players: [], seats: { w: null, b: null }, ready: { w: false, b: false },
      config: { ...DEFAULT_CONFIG }, phase: 'idle', game: null, undo: null, draw: null,
      gameId: 0, lastLoser: null, log: [], logSeq: 0,
    };
  }
  P(cid) { return this.s.players.find((p) => p.cid === cid); }
  byPid(pid) { return this.s.players.find((p) => p.pid === pid); }
  isHost(cid) { return cid === this.s.hostCid; }
  name(cid) { return this.P(cid)?.name ?? '???'; }
  seatOf(cid) { return this.s.seats.w === cid ? 'w' : this.s.seats.b === cid ? 'b' : null; }
  changed() { this.onChange(); }
  log(text, kind = 'info') {
    this.s.log.push({ id: ++this.s.logSeq, text, kind, ts: Date.now() });
    if (this.s.log.length > 80) this.s.log.splice(0, this.s.log.length - 80);
  }

  addPlayer(cid, info, pid) {
    const name = String(info?.name || '').trim().slice(0, 18) || 'Kỳ thủ';
    const av = this.cleanAv(info?.av);
    const ex = this.P(cid);
    if (ex) { ex.pid = pid; ex.connected = true; ex.name = name; ex.av = av; ex.goneAt = 0; this.changed(); return null; }
    if (this.s.players.filter((p) => p.connected).length >= MAX_PEOPLE) return `Phòng đã đủ ${MAX_PEOPLE} người.`;
    let n = name, k = 2;
    while (this.s.players.some((p) => p.name === n)) n = `${name} ${k++}`;
    this.s.players.push({ cid, pid, name: n, av, connected: true, wins: 0, losses: 0, draws: 0 });
    this.log(`${n} đã vào phòng.`, 'join');
    if (this.s.phase !== 'play') for (const k2 of ['w', 'b']) if (!this.s.seats[k2] && !this.seatOf(cid)) { this.s.seats[k2] = cid; this.s.ready[k2] = false; }
    this.changed();
    return null;
  }
  disconnect(pid) {
    const p = this.byPid(pid);
    if (!p) return;
    p.connected = false;
    const seat = this.seatOf(p.cid);
    if (this.s.phase === 'play' && seat) this.log(`${p.name} mất kết nối — đợi quay lại trong 60 giây...`, 'leave');
    else {
      if (seat) { this.s.seats[seat] = null; this.s.ready[seat] = false; }
      if (!this.isHost(p.cid)) this.s.players = this.s.players.filter((x) => x !== p);
      this.log(`${p.name} đã rời phòng.`, 'leave');
    }
    this.changed();
  }

  handle(cid, a) {
    const me = this.P(cid);
    if (!me || !a || typeof a !== 'object') return 'Không hợp lệ.';
    const s = this.s, host = this.isHost(cid), seat = this.seatOf(cid);
    const L = this.label;
    switch (a.t) {
      case 'cfg': return host && s.phase !== 'play' ? this.setConfig(a.cfg) : 'Chỉ chủ phòng chỉnh được (khi chưa vào ván).';
      case 'sit': {
        if (s.phase === 'play') return 'Đang có ván, đợi xong nhé.';
        const k = a.seat === 'b' ? 'b' : 'w';
        if (s.seats[k] && s.seats[k] !== cid) return 'Ghế này đã có người.';
        if (seat) { s.seats[seat] = null; s.ready[seat] = false; }
        s.seats[k] = cid; s.ready[k] = false;
        this.log(`${me.name} cầm quân ${L[k]}.`, 'info');
        this.changed();
        return null;
      }
      case 'stand': {
        if (!seat) return null;
        if (s.phase === 'play') return 'Đang chơi thì hãy đầu hàng trước.';
        s.seats[seat] = null; s.ready[seat] = false;
        this.log(`${me.name} rời ghế, xuống xem.`, 'info');
        this.changed();
        return null;
      }
      case 'swap': {
        if (s.phase === 'play' || !seat) return 'Không thể đổi lúc này.';
        [s.seats.w, s.seats.b] = [s.seats.b, s.seats.w];
        s.ready = { w: false, b: false };
        this.changed();
        return null;
      }
      case 'kick': {
        if (!host || s.phase === 'play' || a.cid === cid) return 'Không thể mời ra.';
        const p = this.P(a.cid);
        if (!p) return null;
        const st = this.seatOf(p.cid);
        if (st) { s.seats[st] = null; s.ready[st] = false; }
        s.players = s.players.filter((x) => x !== p);
        this.log(`${p.name} đã bị mời ra.`, 'leave');
        this.changed();
        return null;
      }
      case 'ready': {
        if (!seat) return 'Bạn đang là người xem.';
        if (s.phase === 'play') return null;
        s.ready[seat] = a.on !== false;
        this.changed();
        if (s.ready.w && s.ready.b && s.seats.w && s.seats.b) this.start();
        return null;
      }
      case 'move': return this.move(cid, a);
      case 'resign': {
        if (s.phase !== 'play' || !seat) return 'Không thể.';
        this.log(`${me.name} đầu hàng.`, 'info');
        return this.finish(other(seat), 'resign');
      }
      case 'undo': {
        if (s.phase !== 'play' || !seat) return 'Không thể.';
        const g = s.game;
        if (!g.moves.length || g.moves[g.moves.length - 1].side !== seat) return 'Chỉ xin đi lại ngay sau nước của mình.';
        if (g.undos[seat] >= 3) return 'Bạn đã hết lượt xin đi lại (tối đa 3).';
        s.undo = { from: seat };
        this.log(`${me.name} xin đi lại một nước.`, 'info');
        this.changed();
        return null;
      }
      case 'undoAns': {
        if (!s.undo || seat !== other(s.undo.from)) return null;
        const g = s.game;
        if (a.ok) {
          g.moves.pop();
          g.hist.pop();
          g.st = g.prev.pop();
          g.undos[s.undo.from]++;
          g.check = this.R.inCheck(g.st);
          this.log(`${me.name} đồng ý cho đi lại.`, 'info');
        } else this.log(`${me.name} không cho đi lại.`, 'info');
        s.undo = null;
        g.turnAt = this.now(); // thời gian chờ trả lời không bị tính
        this.changed();
        return null;
      }
      case 'draw': {
        if (s.phase !== 'play' || !seat) return 'Không thể.';
        if (s.draw && s.draw.from !== seat) { this.log('Hai bên đồng ý hoà.', 'info'); s.draw = null; return this.finish('draw', 'agree'); }
        s.draw = { from: seat };
        this.log(`${me.name} xin hoà.`, 'info');
        this.changed();
        return null;
      }
      case 'drawNo': { if (s.draw && seat === other(s.draw.from)) { s.draw = null; this.log(`${me.name} từ chối hoà.`, 'info'); this.changed(); } return null; }
    }
    return 'Hành động không rõ.';
  }

  setConfig(cfg) {
    const c = this.s.config;
    if (cfg && 'clock' in cfg && CLOCKS.includes(Number(cfg.clock))) c.clock = Number(cfg.clock);
    if (cfg && 'inc' in cfg && INCS.includes(Number(cfg.inc))) c.inc = Number(cfg.inc);
    if (cfg && 'first' in cfg && ['loser', 'alternate', 'fixed'].includes(cfg.first)) c.first = cfg.first;
    this.s.ready = { w: false, b: false };
    this.changed();
    return null;
  }

  start() {
    const s = this.s;
    if (s.gameId > 0) {
      const swap = s.config.first === 'alternate' || (s.config.first === 'loser' && s.lastLoser && s.seats.b === s.lastLoser);
      if (swap) [s.seats.w, s.seats.b] = [s.seats.b, s.seats.w];
    }
    const st = this.R.init();
    const ms = s.config.clock * 60000;
    s.game = {
      st, prev: [], hist: [this.R.key(st)], moves: [], check: false, winner: null, reason: null,
      by: { w: s.seats.w, b: s.seats.b }, undos: { w: 0, b: 0 },
      clock: ms ? { w: ms, b: ms } : null, turnAt: this.now(),
    };
    s.phase = 'play';
    s.gameId++;
    s.ready = { w: false, b: false };
    s.undo = null; s.draw = null;
    this.log(`Ván ${s.gameId}: ${this.name(s.seats.w)} (${this.label.w}) đấu ${this.name(s.seats.b)} (${this.label.b}). ${this.label.w} đi trước!`, 'phase');
    this.onEvent({ type: 'start' });
    this.changed();
  }

  move(cid, a) {
    const s = this.s, g = s.game;
    if (s.phase !== 'play') return 'Ván chưa bắt đầu.';
    const seat = this.seatOf(cid);
    if (!seat) return 'Bạn đang là người xem.';
    if (g.st.turn !== seat) return 'Chưa tới lượt bạn.';
    if (s.undo) return 'Đang chờ trả lời xin đi lại.';
    const legal = this.R.legalMoves(g.st);
    const m = legal.find((x) => x.from === Number(a.from) && x.to === Number(a.to) && (!x.promo || x.promo === (a.promo || 'q')));
    if (!m) return 'Nước đi không hợp lệ.';
    // đồng hồ
    if (g.clock) {
      g.clock[seat] -= this.now() - g.turnAt;
      if (g.clock[seat] <= 0) { g.clock[seat] = 0; return this.flag(seat); }
      g.clock[seat] += s.config.inc * 1000;
    }
    const cap = g.st.board[m.to] !== '.' || !!m.ep;
    const san = this.R.san(g.st, m, legal);
    g.prev.push(g.st);
    g.st = this.R.apply(g.st, m);
    g.hist.push(this.R.key(g.st));
    g.moves.push({ from: m.from, to: m.to, san, side: seat, cap });
    g.check = this.R.inCheck(g.st);
    g.turnAt = this.now();
    s.draw = null;
    this.onEvent({ type: 'move', side: seat, cap, check: g.check, san });
    const end = this.R.status(g.st, g.hist);
    if (end) return this.finish(end.result, end.reason);
    this.changed();
    return null;
  }

  flag(side) {
    const g = this.s.game;
    this.log(`${this.name(g.by[side])} hết giờ!`, 'info');
    // đối thủ không còn đủ quân để thắng -> hoà
    if (!this.R.canMate(g.st, other(side))) return this.finish('draw', 'timeDraw');
    return this.finish(other(side), 'time');
  }

  finish(winner, reason) {
    const s = this.s, g = s.game;
    // dừng đồng hồ: trừ nốt thời gian của bên đang tới lượt
    if (g.clock && s.phase === 'play' && reason !== 'time' && !s.undo) { const t = g.st.turn; g.clock[t] = Math.max(0, g.clock[t] - (this.now() - g.turnAt)); }
    g.winner = winner; g.reason = reason;
    s.phase = 'over';
    s.undo = null; s.draw = null;
    if (winner === 'draw') {
      for (const k of ['w', 'b']) { const p = this.P(g.by[k]); if (p) p.draws++; }
      s.lastLoser = null;
      const why = { stalemate: 'hết nước đi (pat)', material: 'không đủ quân để chiếu hết', fifty: 'quá nhiều nước không ăn quân', repeat: 'lặp lại thế cờ 3 lần', agree: 'hai bên đồng ý', timeDraw: 'hết giờ nhưng đối thủ không đủ quân thắng' }[reason] || '';
      this.log(`🤝 Ván cờ hoà — ${why}.`, 'win');
    } else {
      const w = this.P(g.by[winner]), l = this.P(g.by[other(winner)]);
      if (w) w.wins++;
      if (l) l.losses++;
      s.lastLoser = g.by[other(winner)];
      const why = { mate: 'chiếu hết', stuck: 'đối thủ hết nước đi', resign: 'đối thủ đầu hàng', time: 'đối thủ hết giờ', left: 'đối thủ rời đi' }[reason] || '';
      this.log(`🏆 ${w?.name ?? '???'} (${this.label[winner]}) thắng — ${why}!`, 'win');
    }
    this.onEvent({ type: 'over', winner, reason });
    this.changed();
    return null;
  }

  tick() {
    const s = this.s;
    if (s.phase !== 'play') return;
    const g = s.game;
    for (const k of ['w', 'b']) {
      const p = this.P(g.by[k]);
      if (p && !p.connected) { p.goneAt ||= this.now(); if (this.now() - p.goneAt > 60000) return this.finish(other(k), 'left'); }
      else if (p) p.goneAt = 0;
    }
    if (g.clock && !s.undo) {
      const t = g.st.turn;
      if (g.clock[t] - (this.now() - g.turnAt) <= 0) { g.clock[t] = 0; g.turnAt = this.now(); this.flag(t); }
    }
  }

  pub() {
    const s = this.s, g = s.game;
    let game = null;
    if (g) {
      const clock = g.clock ? { ...g.clock } : null;
      if (clock && s.phase === 'play' && !s.undo) clock[g.st.turn] = Math.max(0, clock[g.st.turn] - (this.now() - g.turnAt));
      game = { st: g.st, moves: g.moves, check: g.check, winner: g.winner, reason: g.reason, by: g.by, undos: g.undos, clock, running: s.phase === 'play' && !s.undo && clock ? g.st.turn : null };
    }
    return {
      phase: s.phase, gameId: s.gameId, hostCid: s.hostCid,
      players: s.players.map((p) => ({ cid: p.cid, pid: p.pid, name: p.name, av: p.av, connected: p.connected, wins: p.wins, losses: p.losses, draws: p.draws })),
      seats: s.seats, ready: s.ready, config: s.config, game, undo: s.undo, draw: s.draw,
      log: s.log.slice(-40), max: MAX_PEOPLE,
    };
  }
}
