// Bộ máy game Cờ Caro — chỉ chạy trên máy CHỦ PHÒNG. Không phụ thuộc DOM/mạng (test được bằng Node).
// 2 ghế (X đi trước, O), tối đa 10 người trong phòng: ai không ngồi ghế là người xem.

export const MAX_PEOPLE = 10;
export const DEFAULT_CONFIG = {
  size: 15, // 15 hoặc 19
  block2: false, // luật chặn 2 đầu: 5 quân bị chặn cả 2 đầu thì không thắng
  turnTime: 0, // giây mỗi nước, 0 = không giới hạn
  first: 'loser', // 'loser' = người thua được đi trước ván sau | 'alternate' = đổi lượt mỗi ván | 'fixed' = X luôn đi trước
};
const clampInt = (v, lo, hi, d) => { v = Math.round(Number(v)); return Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : d; };
const DIRS = [[1, 0], [0, 1], [1, 1], [1, -1]];
const other = (s) => (s === 'X' ? 'O' : 'X');

// Kiểm tra thắng sau khi đặt quân tại i. Trả về mảng ô của đường thắng hoặc null.
export function checkWin(board, size, i, block2 = false) {
  const me = board[i];
  if (me !== 'X' && me !== 'O') return null;
  const x0 = i % size, y0 = Math.floor(i / size);
  const at = (x, y) => (x < 0 || y < 0 || x >= size || y >= size ? '#' : board[y * size + x]);
  for (const [dx, dy] of DIRS) {
    const line = [i];
    let x = x0 + dx, y = y0 + dy;
    while (at(x, y) === me) { line.push(y * size + x); x += dx; y += dy; }
    const endA = at(x, y);
    x = x0 - dx; y = y0 - dy;
    while (at(x, y) === me) { line.unshift(y * size + x); x -= dx; y -= dy; }
    const endB = at(x, y);
    if (line.length >= 5) {
      // chặn 2 đầu: cả 2 đầu đều là quân đối phương (mép bàn không tính là chặn)
      if (block2 && endA === other(me) && endB === other(me)) continue;
      return line;
    }
  }
  return null;
}

export class CaroEngine {
  constructor(hostCid, { now = () => Date.now(), cleanAv = (a) => a } = {}) {
    this.now = now;
    this.cleanAv = cleanAv;
    this.onChange = () => {};
    this.onEvent = () => {};
    this.s = {
      hostCid, players: [], seats: { X: null, O: null }, ready: { X: false, O: false },
      config: { ...DEFAULT_CONFIG }, phase: 'idle', game: null, undo: null, draw: null,
      endsAt: 0, durMs: 0, gameId: 0, lastLoser: null, log: [], logSeq: 0,
    };
  }
  P(cid) { return this.s.players.find((p) => p.cid === cid); }
  byPid(pid) { return this.s.players.find((p) => p.pid === pid); }
  isHost(cid) { return cid === this.s.hostCid; }
  name(cid) { return this.P(cid)?.name ?? '???'; }
  seatOf(cid) { return this.s.seats.X === cid ? 'X' : this.s.seats.O === cid ? 'O' : null; }
  changed() { this.onChange(); }
  log(text, kind = 'info') {
    this.s.log.push({ id: ++this.s.logSeq, text, kind, ts: Date.now() });
    if (this.s.log.length > 80) this.s.log.splice(0, this.s.log.length - 80);
  }
  setTimer(sec) { this.s.durMs = sec ? Math.round(sec * 1000) : 0; this.s.endsAt = sec ? this.now() + this.s.durMs : 0; }

  addPlayer(cid, info, pid) {
    const name = String(info?.name || '').trim().slice(0, 18) || 'Người lạ';
    const av = this.cleanAv(info?.av);
    const ex = this.P(cid);
    if (ex) { ex.pid = pid; ex.connected = true; ex.name = name; ex.av = av; this.changed(); return null; }
    if (this.s.players.filter((p) => p.connected).length >= MAX_PEOPLE) return `Phòng đã đủ ${MAX_PEOPLE} người.`;
    let n = name, k = 2;
    while (this.s.players.some((p) => p.name === n)) n = `${name} ${k++}`;
    this.s.players.push({ cid, pid, name: n, av, connected: true, wins: 0, losses: 0, draws: 0 });
    this.log(`${n} đã vào phòng.`, 'join');
    // tự ngồi vào ghế trống khi chưa có ván
    if (this.s.phase !== 'play') for (const k2 of ['X', 'O']) if (!this.s.seats[k2] && !this.seatOf(cid)) { this.s.seats[k2] = cid; this.s.ready[k2] = false; }
    this.changed();
    return null;
  }
  disconnect(pid) {
    const p = this.byPid(pid);
    if (!p) return;
    p.connected = false;
    const seat = this.seatOf(p.cid);
    if (this.s.phase === 'play' && seat) {
      this.log(`${p.name} mất kết nối — đợi quay lại trong 60 giây...`, 'leave');
    } else {
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
    switch (a.t) {
      case 'cfg': return host && s.phase !== 'play' ? this.setConfig(a.cfg) : 'Chỉ chủ phòng chỉnh được (khi chưa vào ván).';
      case 'sit': {
        if (s.phase === 'play') return 'Đang có ván, đợi xong nhé.';
        const k = a.seat === 'O' ? 'O' : 'X';
        if (s.seats[k] && s.seats[k] !== cid) return 'Ghế này đã có người.';
        if (seat) { s.seats[seat] = null; s.ready[seat] = false; }
        s.seats[k] = cid; s.ready[k] = false;
        this.log(`${me.name} ngồi vào ghế ${k}.`, 'info');
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
        [s.seats.X, s.seats.O] = [s.seats.O, s.seats.X];
        s.ready = { X: false, O: false };
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
        if (s.ready.X && s.ready.O && s.seats.X && s.seats.O) this.start();
        return null;
      }
      case 'move': return this.move(cid, a.i);
      case 'resign': {
        if (s.phase !== 'play' || !seat) return 'Không thể.';
        this.log(`${me.name} đầu hàng.`, 'info');
        return this.finish(other(seat), null, 'resign');
      }
      case 'undo': {
        if (s.phase !== 'play' || !seat) return 'Không thể.';
        const g = s.game;
        // chỉ xin đi lại nước mình vừa đi (đối thủ chưa đi tiếp)
        const lastBy = g.moves.length ? g.board[g.moves[g.moves.length - 1]] : null;
        if (lastBy !== seat) return 'Chỉ xin đi lại ngay sau nước của mình.';
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
          const i = g.moves.pop();
          g.board = g.board.slice(0, i) + '.' + g.board.slice(i + 1);
          g.undos[s.undo.from]++;
          g.turn = s.undo.from;
          if (s.config.turnTime) this.setTimer(s.config.turnTime);
          this.log(`${me.name} đồng ý cho đi lại.`, 'info');
        } else this.log(`${me.name} không cho đi lại.`, 'info');
        s.undo = null;
        this.changed();
        return null;
      }
      case 'draw': {
        if (s.phase !== 'play' || !seat) return 'Không thể.';
        if (s.draw && s.draw.from !== seat) { this.log('Hai bên đồng ý hoà.', 'info'); s.draw = null; return this.finish('draw', null, 'agree'); }
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
    if (cfg && 'size' in cfg) c.size = [15, 19].includes(Number(cfg.size)) ? Number(cfg.size) : c.size;
    if (cfg && 'block2' in cfg) c.block2 = !!cfg.block2;
    if (cfg && 'turnTime' in cfg) c.turnTime = [0, 15, 30, 60].includes(Number(cfg.turnTime)) ? Number(cfg.turnTime) : c.turnTime;
    if (cfg && 'first' in cfg) c.first = ['loser', 'alternate', 'fixed'].includes(cfg.first) ? cfg.first : c.first;
    this.s.ready = { X: false, O: false };
    this.changed();
    return null;
  }

  start() {
    const s = this.s;
    // ai đi trước: X luôn đi trước, nên đổi ghế khi cần
    if (s.gameId > 0) {
      const swap = s.config.first === 'alternate' || (s.config.first === 'loser' && s.lastLoser && s.seats.O === s.lastLoser);
      if (swap) [s.seats.X, s.seats.O] = [s.seats.O, s.seats.X];
    }
    const n = s.config.size;
    s.game = { size: n, board: '.'.repeat(n * n), turn: 'X', moves: [], winner: null, line: null, reason: null, by: { X: s.seats.X, O: s.seats.O }, undos: { X: 0, O: 0 } };
    s.phase = 'play';
    s.gameId++;
    s.ready = { X: false, O: false };
    s.undo = null; s.draw = null;
    this.setTimer(s.config.turnTime);
    this.log(`Ván ${s.gameId}: ${this.name(s.seats.X)} (X) đấu ${this.name(s.seats.O)} (O). X đi trước!`, 'phase');
    this.onEvent({ type: 'start' });
    this.changed();
  }

  move(cid, i) {
    const s = this.s, g = s.game;
    if (s.phase !== 'play') return 'Ván chưa bắt đầu.';
    const seat = this.seatOf(cid);
    if (!seat) return 'Bạn đang là người xem.';
    if (g.turn !== seat) return 'Chưa tới lượt bạn.';
    if (s.undo) return 'Đang chờ trả lời xin đi lại.';
    i = Math.round(Number(i));
    if (!Number.isInteger(i) || i < 0 || i >= g.size * g.size || g.board[i] !== '.') return 'Ô này không đi được.';
    g.board = g.board.slice(0, i) + seat + g.board.slice(i + 1);
    g.moves.push(i);
    s.draw = null;
    const line = checkWin(g.board, g.size, i, s.config.block2);
    this.onEvent({ type: 'move', i, seat });
    if (line) return this.finish(seat, line, 'five');
    if (g.moves.length >= g.size * g.size) return this.finish('draw', null, 'full');
    g.turn = other(seat);
    this.setTimer(s.config.turnTime);
    this.changed();
    return null;
  }

  finish(winner, line, reason) {
    const s = this.s, g = s.game;
    g.winner = winner; g.line = line; g.reason = reason;
    s.phase = 'over';
    s.undo = null; s.draw = null;
    this.setTimer(0);
    if (winner === 'draw') {
      for (const k of ['X', 'O']) { const p = this.P(g.by[k]); if (p) p.draws++; }
      s.lastLoser = null;
      this.log('Ván cờ hoà!', 'win');
    } else {
      const w = this.P(g.by[winner]), l = this.P(g.by[other(winner)]);
      if (w) w.wins++;
      if (l) l.losses++;
      s.lastLoser = g.by[other(winner)];
      const why = { five: 'xếp đủ 5 quân', resign: 'đối thủ đầu hàng', time: 'đối thủ hết giờ', left: 'đối thủ rời đi' }[reason] || '';
      this.log(`🏆 ${w?.name ?? '???'} (${winner}) thắng — ${why}!`, 'win');
    }
    this.onEvent({ type: 'over', winner });
    this.changed();
    return null;
  }

  tick() {
    const s = this.s;
    if (s.phase !== 'play') return;
    // người chơi rời quá 60 giây -> xử thua
    for (const k of ['X', 'O']) {
      const p = this.P(s.game.by[k]);
      if (p && !p.connected) { p.goneAt ||= this.now(); if (this.now() - p.goneAt > 60000) return this.finish(other(k), null, 'left'); }
      else if (p) p.goneAt = 0;
    }
    if (s.endsAt && this.now() >= s.endsAt && !s.undo) {
      this.log(`${this.name(s.game.by[s.game.turn])} hết giờ!`, 'info');
      this.finish(other(s.game.turn), null, 'time');
    }
  }

  pub() {
    const s = this.s;
    return {
      phase: s.phase, gameId: s.gameId, hostCid: s.hostCid,
      remaining: s.endsAt ? Math.max(0, s.endsAt - this.now()) : 0, durMs: s.durMs,
      players: s.players.map((p) => ({ cid: p.cid, pid: p.pid, name: p.name, av: p.av, connected: p.connected, wins: p.wins, losses: p.losses, draws: p.draws })),
      seats: s.seats, ready: s.ready, config: s.config, game: s.game, undo: s.undo, draw: s.draw,
      log: s.log.slice(-40), max: MAX_PEOPLE,
    };
  }
}
