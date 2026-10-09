// Bộ máy phòng "Vỗ Cánh Sinh Tồn" — chạy trên máy chủ phòng: quản lý người chơi, bắt đầu ván, ghi nhận ai rơi, chọn người thắng.
// Việc bay thì mỗi máy tự mô phỏng (xem world.js) và tự báo khi rơi.

export const MAX_PLAYERS = 16;
export const COUNTDOWN_MS = 3500;
const MODES = ['chill', 'normal', 'hard'];

export class BayEngine {
  constructor(hostCid, { now = () => Date.now(), cleanAv = (a) => a } = {}) {
    this.now = now;
    this.cleanAv = cleanAv;
    this.onChange = () => {};
    this.onEvent = () => {};
    this.s = {
      hostCid, phase: 'lobby', players: [], config: { mode: 'normal' },
      round: 0, seed: 0, startAt: 0, racers: [], dead: {}, live: {}, winner: null, results: null, log: [], logSeq: 0,
    };
  }
  P(cid) { return this.s.players.find((p) => p.cid === cid); }
  byPid(pid) { return this.s.players.find((p) => p.pid === pid); }
  isHost(cid) { return cid === this.s.hostCid; }
  name(cid) { return this.P(cid)?.name ?? '???'; }
  changed() { this.onChange(); }
  log(text, kind = 'info') {
    this.s.log.push({ id: ++this.s.logSeq, text, kind, ts: Date.now() });
    if (this.s.log.length > 80) this.s.log.splice(0, this.s.log.length - 80);
  }
  t() { return (this.now() - this.s.startAt) / 1000; }

  addPlayer(cid, info, pid) {
    const name = String(info?.name || '').trim().slice(0, 18) || 'Chim lạ';
    const av = this.cleanAv(info?.av);
    const ex = this.P(cid);
    if (ex) { ex.pid = pid; ex.connected = true; ex.name = name; ex.av = av; this.changed(); return null; }
    if (this.s.players.filter((p) => p.connected).length >= MAX_PLAYERS) return `Phòng đã đủ ${MAX_PLAYERS} người.`;
    let n = name, k = 2;
    while (this.s.players.some((p) => p.name === n)) n = `${name} ${k++}`;
    this.s.players.push({ cid, pid, name: n, av, connected: true, wins: 0, best: 0, rounds: 0 });
    this.log(`${n} đã vào phòng.`, 'join');
    this.changed();
    return null;
  }
  disconnect(pid) {
    const p = this.byPid(pid);
    if (!p) return;
    p.connected = false;
    if (this.s.racers.includes(p.cid) && ['count', 'play'].includes(this.s.phase) && !this.s.dead[p.cid]) {
      this.s.dead[p.cid] = { t: Math.max(0, this.t()), score: this.s.live[p.cid] || 0, left: true };
    }
    if (this.s.phase === 'lobby' && !this.isHost(p.cid)) this.s.players = this.s.players.filter((x) => x !== p);
    this.log(`${p.name} đã rời phòng.`, 'leave');
    this.changed();
    this.check();
  }

  handle(cid, a) {
    const me = this.P(cid);
    if (!me || !a || typeof a !== 'object') return 'Không hợp lệ.';
    const s = this.s, host = this.isHost(cid);
    switch (a.t) {
      case 'cfg':
        if (!host || ['count', 'play'].includes(s.phase)) return 'Chỉ chủ phòng chỉnh được khi chưa bay.';
        if (MODES.includes(a.cfg?.mode)) s.config.mode = a.cfg.mode;
        this.changed();
        return null;
      case 'start': return host ? this.start() : 'Chỉ chủ phòng bắt đầu được.';
      case 'dead': return this.dead(cid, a.time, a.score);
      case 'kick': {
        if (!host || a.cid === cid || ['count', 'play'].includes(s.phase)) return 'Không thể mời ra.';
        const p = this.P(a.cid);
        if (p) { s.players = s.players.filter((x) => x !== p); this.log(`${p.name} đã bị mời ra.`, 'leave'); this.changed(); }
        return null;
      }
    }
    return 'Hành động không rõ.';
  }

  start() {
    const s = this.s;
    if (['count', 'play'].includes(s.phase)) return 'Đang bay rồi!';
    const racers = s.players.filter((p) => p.connected).map((p) => p.cid);
    if (!racers.length) return 'Chưa có ai.';
    s.round++;
    s.seed = (Math.random() * 2 ** 31) >>> 0;
    s.startAt = this.now() + COUNTDOWN_MS;
    s.racers = racers;
    s.dead = {}; s.live = {}; s.winner = null; s.results = null; s.soloLogged = 0; this.seen = {};
    s.phase = 'count';
    for (const c of racers) { const p = this.P(c); if (p) p.rounds++; }
    this.log(`Ván ${s.round}: ${racers.length} chú chim cất cánh! Ai trụ lại cuối cùng sẽ thắng.`, 'phase');
    this.onEvent({ type: 'count' });
    this.changed();
    return null;
  }

  // điểm hiện tại của người đang bay (từ gói vị trí)
  live(cid, score) {
    if (!this.s.racers.includes(cid)) return;
    this.s.live[cid] = Math.max(this.s.live[cid] || 0, Math.min(9999, Number(score) || 0));
    (this.seen ||= {})[cid] = this.now();
  }

  dead(cid, time, score) {
    const s = this.s;
    if (!['count', 'play'].includes(s.phase) || !s.racers.includes(cid) || s.dead[cid]) return null;
    const t = Math.max(0, Math.min(Number(time) || this.t(), this.t() + 1));
    s.dead[cid] = { t, score: Math.max(0, Math.min(9999, Math.round(Number(score) || 0))) };
    const left = s.racers.filter((c) => !s.dead[c]).length;
    this.log(`💥 ${this.name(cid)} rơi rồi! (${s.dead[cid].score} cột)${s.racers.length > 1 ? ` — còn ${left} chim` : ''}`, 'wrong');
    this.onEvent({ type: 'dead', cid });
    this.changed();
    this.check();
    return null;
  }

  check() {
    const s = this.s;
    if (s.phase !== 'play' && s.phase !== 'count') return;
    const alive = s.racers.filter((c) => !s.dead[c]);
    // không dừng khi chỉ còn 1 chim: chim cuối cùng bay tiếp tới khi rơi (ai trụ lâu nhất thắng)
    if (alive.length === 1 && s.racers.length >= 2 && !s.soloLogged) { s.soloLogged = 1; this.log(`🐤 Chỉ còn ${this.name(alive[0])}! Bay tiếp tới khi rơi để nâng kỷ lục.`, 'info'); }
    if (alive.length === 0) this.finish(null);
  }

  finish(survivor) {
    const s = this.s;
    const res = s.racers.map((cid) => ({ cid, t: s.dead[cid]?.t ?? Infinity, score: s.dead[cid]?.score ?? s.live[cid] ?? 0, alive: !s.dead[cid] }));
    res.sort((a, b) => b.t - a.t || b.score - a.score);
    let winner = null;
    if (s.racers.length >= 2) winner = survivor || res[0]?.cid || null;
    for (const r of res) { const p = this.P(r.cid); if (p) p.best = Math.max(p.best, r.score); }
    if (winner) { const p = this.P(winner); if (p) p.wins++; }
    s.results = res.map((r) => ({ ...r, t: Number.isFinite(r.t) ? Math.round(r.t * 10) / 10 : null }));
    s.winner = winner;
    s.phase = 'over';
    this.log(winner ? `🏆 ${this.name(winner)} là chú chim trụ lâu nhất!` : `Ván tập bay kết thúc: ${res[0]?.score ?? 0} cột.`, 'win');
    this.onEvent({ type: 'over', winner });
    this.changed();
  }

  tick() {
    const s = this.s;
    if (s.phase === 'count' && this.now() >= s.startAt) { s.phase = 'play'; this.changed(); }
    if (s.phase === 'play' && this.t() > 600) this.finish(null); // an toàn: tối đa 10 phút
    // ai im lặng quá 4 giây (ẩn tab, mất mạng) thì coi như đã rơi để ván không bị treo
    if (s.phase === 'play' && this.t() > 5) {
      for (const cid of s.racers) {
        if (s.dead[cid]) continue;
        const last = this.seen?.[cid] ?? s.startAt;
        if (this.now() - last > 4000) { this.log(`${this.name(cid)} mất tín hiệu.`, 'leave'); this.dead(cid, (last - s.startAt) / 1000, s.live[cid] || 0); }
        if (s.phase !== 'play') break;
      }
    }
  }

  pub() {
    const s = this.s;
    return {
      phase: s.phase, round: s.round, seed: s.seed, startAt: s.startAt, hostNow: this.now(), hostCid: s.hostCid,
      config: s.config, racers: s.racers, dead: s.dead, winner: s.winner, results: s.results,
      players: s.players.map((p) => ({ cid: p.cid, pid: p.pid, name: p.name, av: p.av, connected: p.connected, wins: p.wins, best: p.best, rounds: p.rounds })),
      log: s.log.slice(-40), max: MAX_PLAYERS,
    };
  }
}
