// Bộ máy game — chỉ chạy trên máy CHỦ PHÒNG (host-authoritative).
// Không phụ thuộc DOM/mạng để có thể test bằng Node.

import { AVATARS, AV_COLORS } from './roles.js';

export const MIN_PLAYERS = 4;
const cleanAv = (av) => ({
  e: AVATARS.includes(av?.e) ? av.e : AVATARS[Math.floor(Math.random() * AVATARS.length)],
  c: Number.isInteger(av?.c) && av.c >= 0 && av.c < AV_COLORS.length ? av.c : Math.floor(Math.random() * AV_COLORS.length),
});
export const MAX_PLAYERS = 16;

export const DEFAULT_CONFIG = {
  roles: { wolf: 1, villager: 2, seer: 1, guard: 0, witch: 0, hunter: 0 },
  dur: { night: 45, witch: 20, day: 120, vote: 40, hunter: 20 },
  reveal: true, // lộ vai khi chết
};

export function suggestRoles(n) {
  n = Math.max(MIN_PLAYERS, Math.min(MAX_PLAYERS, n));
  const r = { wolf: n <= 5 ? 1 : n <= 8 ? 2 : n <= 12 ? 3 : 4, seer: 1, guard: n >= 6 ? 1 : 0, witch: n >= 7 ? 1 : 0, hunter: n >= 8 ? 1 : 0 };
  r.villager = n - r.wolf - r.seer - r.guard - r.witch - r.hunter;
  return { wolf: r.wolf, villager: r.villager, seer: r.seer, guard: r.guard, witch: r.witch, hunter: r.hunter };
}

const clone = (o) => JSON.parse(JSON.stringify(o));
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const pick = (a) => a[Math.floor(Math.random() * a.length)];
const clampInt = (v, lo, hi, d) => {
  v = Math.round(Number(v));
  return Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : d;
};

export class Engine {
  constructor(hostCid, saved, now = () => Date.now()) {
    this.now = now;
    this.onChange = () => {};
    this.s = saved || {
      hostCid,
      phase: 'lobby', // lobby | night | day | vote | hunter | end
      step: null, // night: main | witch
      round: 0,
      endsAt: 0,
      durMs: 0,
      players: [],
      config: clone(DEFAULT_CONFIG),
      log: [],
      logSeq: 0,
      votes: {},
      night: null,
      witch: { heal: true, poison: true },
      guardLast: null,
      seerResults: [],
      notes: {},
      hunter: null,
      winner: null,
      lastDeaths: [],
      lastHanged: null,
      gameId: 0,
    };
  }

  // ---------- tiện ích ----------
  get players() { return this.s.players; }
  P(cid) { return this.s.players.find((p) => p.cid === cid); }
  byPid(pid) { return this.s.players.find((p) => p.pid === pid); }
  alive() { return this.s.players.filter((p) => p.alive); }
  aliveRole(role) { return this.alive().filter((p) => p.role === role); }
  isHost(cid) { return cid === this.s.hostCid; }
  changed() { this.onChange(); }

  log(text, kind = 'info') {
    this.s.log.push({ id: ++this.s.logSeq, text, kind, ts: Date.now() });
    if (this.s.log.length > 80) this.s.log.splice(0, this.s.log.length - 80);
  }
  note(cid, text) {
    (this.s.notes[cid] ||= []).push({ round: this.s.round, text });
  }
  setTimer(sec) {
    this.s.durMs = Math.round(sec * 1000);
    this.s.endsAt = this.now() + this.s.durMs;
  }
  name(cid) { return this.P(cid)?.name ?? '???'; }

  // ---------- phòng chờ ----------
  addPlayer(cid, name, pid, av) {
    name = String(name || '').trim().slice(0, 18) || 'Người lạ';
    const ex = this.P(cid);
    if (ex) {
      ex.pid = pid;
      ex.connected = true;
      if (this.s.phase === 'lobby') { ex.name = name; ex.av = cleanAv(av); }
      this.changed();
      return null;
    }
    if (this.s.phase !== 'lobby') return 'Ván đang diễn ra, hãy chờ ván sau nhé.';
    if (this.s.players.length >= MAX_PLAYERS) return 'Phòng đã đủ người.';
    let n = name, k = 2;
    while (this.s.players.some((p) => p.name === n)) n = `${name} ${k++}`;
    this.s.players.push({ cid, pid, name: n, av: cleanAv(av), connected: true, alive: true, role: null, cause: null, diedRound: null });
    this.log(`${n} đã vào làng.`, 'join');
    this.changed();
    return null;
  }

  disconnect(pid) {
    const p = this.byPid(pid);
    if (!p) return;
    if (this.s.phase === 'lobby' && !this.isHost(p.cid)) {
      this.s.players = this.s.players.filter((x) => x !== p);
      this.log(`${p.name} đã rời làng.`, 'leave');
    } else {
      p.connected = false;
    }
    this.changed();
  }

  // ---------- xử lý hành động ----------
  handle(cid, a) {
    const me = this.P(cid);
    if (!me || !a || typeof a !== 'object') return 'Không hợp lệ.';
    const host = this.isHost(cid);
    const s = this.s;
    switch (a.t) {
      case 'cfg': return host && s.phase === 'lobby' ? this.setConfig(a.cfg) : 'Chỉ chủ phòng mới chỉnh được.';
      case 'kick': {
        if (!host || s.phase !== 'lobby' || a.cid === cid) return 'Không thể mời ra.';
        const p = this.P(a.cid);
        if (!p) return null;
        s.players = s.players.filter((x) => x !== p);
        this.log(`${p.name} đã bị mời ra khỏi làng.`, 'leave');
        this.changed();
        return null;
      }
      case 'start': return host ? this.start() : 'Chỉ chủ phòng mới bắt đầu được.';
      case 'skip': {
        if (!host || !['day', 'vote', 'night', 'hunter'].includes(s.phase)) return 'Không thể bỏ qua.';
        this.timeout();
        return null;
      }
      case 'lobby': {
        if (!host || s.phase !== 'end') return 'Không thể.';
        this.toLobby();
        return null;
      }
      case 'wolf': return this.actWolf(me, a.target);
      case 'seer': return this.actSeer(me, a.target);
      case 'guard': return this.actGuard(me, a.target);
      case 'witch': return this.actWitch(me, a);
      case 'vote': return this.actVote(me, a.target);
      case 'shoot': return this.actShoot(me, a.target);
    }
    return 'Hành động không rõ.';
  }

  setConfig(cfg) {
    const c = this.s.config;
    if (cfg?.roles) for (const k of Object.keys(c.roles)) if (k in cfg.roles) c.roles[k] = clampInt(cfg.roles[k], 0, k === 'villager' ? 16 : k === 'wolf' ? 5 : 1, c.roles[k]);
    if (cfg?.dur) {
      const lim = { night: [15, 120], witch: [10, 60], day: [30, 600], vote: [15, 120], hunter: [10, 60] };
      for (const k of Object.keys(c.dur)) if (k in cfg.dur) c.dur[k] = clampInt(cfg.dur[k], lim[k][0], lim[k][1], c.dur[k]);
    }
    if (cfg && 'reveal' in cfg) c.reveal = !!cfg.reveal;
    this.changed();
    return null;
  }

  roleTotal() { return Object.values(this.s.config.roles).reduce((a, b) => a + b, 0); }

  canStart() {
    const n = this.s.players.length, r = this.s.config.roles;
    if (n < MIN_PLAYERS) return `Cần ít nhất ${MIN_PLAYERS} người chơi.`;
    if (this.roleTotal() !== n) return `Số vai (${this.roleTotal()}) phải bằng số người chơi (${n}).`;
    if (r.wolf < 1) return 'Cần ít nhất 1 Ma Sói.';
    if (r.wolf * 2 >= n) return 'Quá nhiều sói so với số người.';
    return null;
  }

  start() {
    const err = this.canStart();
    if (err) return err;
    const s = this.s;
    const deck = [];
    for (const [role, n] of Object.entries(s.config.roles)) for (let i = 0; i < n; i++) deck.push(role);
    shuffle(deck);
    s.players.forEach((p, i) => Object.assign(p, { role: deck[i], alive: true, cause: null, diedRound: null }));
    Object.assign(s, {
      round: 0, votes: {}, witch: { heal: true, poison: true }, guardLast: null, seerResults: [],
      notes: {}, hunter: null, winner: null, lastDeaths: [], lastHanged: null, log: [], gameId: s.gameId + 1,
    });
    this.log('Trò chơi bắt đầu! Mỗi người đã nhận một lá bài vai trò.', 'phase');
    this.startNight();
    return null;
  }

  toLobby() {
    const s = this.s;
    s.players = s.players.filter((p) => p.connected);
    s.players.forEach((p) => Object.assign(p, { role: null, alive: true, cause: null, diedRound: null }));
    Object.assign(s, { phase: 'lobby', step: null, endsAt: 0, durMs: 0, round: 0, votes: {}, night: null, hunter: null, winner: null, lastDeaths: [], lastHanged: null, notes: {}, seerResults: [] });
    this.log('Quay về phòng chờ.', 'phase');
    this.changed();
  }

  // ---------- đêm ----------
  startNight() {
    const s = this.s;
    s.round++;
    s.phase = 'night';
    s.step = 'main';
    s.night = { wolfVotes: {}, seer: null, guard: null, save: false, poison: null, witchDone: false, target: null };
    s.lastDeaths = [];
    this.setTimer(s.config.dur.night);
    this.log(`Đêm ${s.round} buông xuống. Cả làng đi ngủ...`, 'night');
    this.changed();
  }

  actWolf(me, target) {
    const s = this.s;
    if (s.phase !== 'night' || s.step !== 'main' || me.role !== 'wolf' || !me.alive) return 'Chưa đến lượt bạn.';
    const t = this.P(target);
    if (target !== null && (!t || !t.alive || t.role === 'wolf')) return 'Mục tiêu không hợp lệ.';
    s.night.wolfVotes[me.cid] = target;
    this.checkNightMain();
    this.changed();
    return null;
  }

  actSeer(me, target) {
    const s = this.s;
    if (s.phase !== 'night' || s.step !== 'main' || me.role !== 'seer' || !me.alive) return 'Chưa đến lượt bạn.';
    if (s.night.seer) return 'Bạn đã soi đêm nay rồi.';
    const t = this.P(target);
    if (!t || !t.alive || t.cid === me.cid) return 'Mục tiêu không hợp lệ.';
    s.night.seer = target;
    const isWolf = t.role === 'wolf';
    s.seerResults.push({ round: s.round, cid: t.cid, isWolf });
    this.note(me.cid, `Đêm ${s.round}: ${t.name} ${isWolf ? 'LÀ MA SÓI' : 'không phải sói'}.`);
    this.checkNightMain();
    this.changed();
    return null;
  }

  actGuard(me, target) {
    const s = this.s;
    if (s.phase !== 'night' || s.step !== 'main' || me.role !== 'guard' || !me.alive) return 'Chưa đến lượt bạn.';
    const t = this.P(target);
    if (!t || !t.alive) return 'Mục tiêu không hợp lệ.';
    if (target === s.guardLast) return 'Không được bảo vệ một người hai đêm liên tiếp.';
    s.night.guard = target;
    this.checkNightMain();
    this.changed();
    return null;
  }

  checkNightMain() {
    const n = this.s.night;
    const wolves = this.aliveRole('wolf');
    const done =
      wolves.every((w) => w.cid in n.wolfVotes) &&
      this.aliveRole('seer').every(() => n.seer) &&
      this.aliveRole('guard').every(() => n.guard);
    if (done) this.toWitch();
  }

  wolfTarget() {
    const votes = Object.values(this.s.night.wolfVotes).filter(Boolean);
    if (!votes.length) return null;
    const c = {};
    votes.forEach((v) => (c[v] = (c[v] || 0) + 1));
    const max = Math.max(...Object.values(c));
    return pick(Object.keys(c).filter((k) => c[k] === max));
  }

  witchActive() {
    const w = this.aliveRole('witch')[0];
    return w && (this.s.witch.heal || this.s.witch.poison) ? w : null;
  }

  toWitch() {
    const s = this.s;
    s.step = 'witch';
    s.night.target = this.wolfTarget();
    // Luôn có pha phù thủy (kể cả khi phù thủy đã chết) để không lộ thông tin.
    this.setTimer(this.witchActive() ? s.config.dur.witch : 5 + Math.random() * 5);
    this.log('Phù thủy thức dậy...', 'night');
  }

  actWitch(me, a) {
    const s = this.s;
    if (s.phase !== 'night' || s.step !== 'witch' || me.role !== 'witch' || !me.alive || s.night.witchDone) return 'Chưa đến lượt bạn.';
    if (a.save) {
      if (!s.witch.heal || !s.night.target) return 'Không thể dùng bình cứu.';
    }
    if (a.poison) {
      const t = this.P(a.poison);
      if (!s.witch.poison || !t || !t.alive || t.cid === me.cid) return 'Không thể dùng bình độc lên người này.';
    }
    s.night.save = !!a.save;
    s.night.poison = a.poison || null;
    if (a.save) { s.witch.heal = false; this.note(me.cid, `Đêm ${s.round}: bạn đã cứu ${this.name(s.night.target)}.`); }
    if (a.poison) { s.witch.poison = false; this.note(me.cid, `Đêm ${s.round}: bạn đã đầu độc ${this.name(a.poison)}.`); }
    s.night.witchDone = true;
    this.resolveNight();
    return null;
  }

  kill(cid, cause) {
    const p = this.P(cid);
    if (!p || !p.alive) return null;
    p.alive = false;
    p.cause = cause;
    p.diedRound = this.s.round;
    return p;
  }

  resolveNight() {
    const s = this.s, n = s.night;
    s.guardLast = n.guard;
    const deaths = [];
    if (n.target && !n.save && n.guard !== n.target) {
      const p = this.kill(n.target, 'wolf');
      if (p) deaths.push(p);
    }
    if (n.poison) {
      const p = this.kill(n.poison, 'poison');
      if (p) deaths.push(p);
    }
    shuffle(deaths);
    s.lastDeaths = deaths.map((p) => p.cid);
    if (!deaths.length) this.log(`Trời sáng. Đêm ${s.round} bình yên, không ai chết.`, 'day');
    else this.log(`Trời sáng. Đêm qua ${deaths.map((p) => this.deathLabel(p)).join(' và ')} đã ra đi.`, 'death');
    const hunter = deaths.find((p) => p.role === 'hunter' && p.cause !== 'poison');
    if (hunter) return this.startHunter(hunter.cid, 'day');
    this.afterDeaths('day');
  }

  deathLabel(p) {
    return this.s.config.reveal ? `${p.name} (${ROLE_NAMES[p.role]})` : p.name;
  }

  // ---------- thợ săn ----------
  startHunter(cid, next) {
    const s = this.s;
    s.phase = 'hunter';
    s.step = null;
    s.hunter = { cid, next };
    this.setTimer(s.config.dur.hunter);
    this.log(`${this.name(cid)} là Thợ Săn! Đang giương súng chọn người kéo theo...`, 'hunter');
    this.changed();
  }

  actShoot(me, target) {
    const s = this.s;
    if (s.phase !== 'hunter' || s.hunter?.cid !== me.cid) return 'Chưa đến lượt bạn.';
    if (target) {
      const t = this.P(target);
      if (!t || !t.alive) return 'Mục tiêu không hợp lệ.';
      this.kill(target, 'hunter');
      s.lastDeaths.push(target);
      this.log(`Đoàng! Thợ Săn đã bắn chết ${this.deathLabel(t)}.`, 'death');
    } else {
      this.log('Thợ Săn hạ súng, không bắn ai.', 'hunter');
    }
    const next = s.hunter.next;
    s.hunter = null;
    this.afterDeaths(next);
    return null;
  }

  afterDeaths(next) {
    if (this.checkWin()) return;
    if (next === 'day') this.startDay();
    else this.startNight();
  }

  checkWin() {
    const wolves = this.aliveRole('wolf').length;
    const others = this.alive().length - wolves;
    let w = null;
    if (wolves === 0) w = 'village';
    else if (wolves >= others) w = 'wolf';
    if (!w) return false;
    const s = this.s;
    s.phase = 'end';
    s.step = null;
    s.winner = w;
    s.endsAt = 0;
    s.durMs = 0;
    this.log(w === 'wolf' ? 'Bầy sói đã chiếm được ngôi làng. PHE SÓI THẮNG!' : 'Con sói cuối cùng đã bị tiêu diệt. PHE DÂN LÀNG THẮNG!', 'win');
    this.changed();
    return true;
  }

  // ---------- ngày ----------
  startDay() {
    const s = this.s;
    s.phase = 'day';
    s.step = null;
    this.setTimer(s.config.dur.day);
    this.log(`Ngày ${s.round}: mọi người hãy thảo luận xem ai là sói.`, 'day');
    this.changed();
  }

  startVote() {
    const s = this.s;
    s.phase = 'vote';
    s.votes = {};
    this.setTimer(s.config.dur.vote);
    this.log('Đến giờ bỏ phiếu! Chọn người bạn muốn treo cổ.', 'vote');
    this.changed();
  }

  actVote(me, target) {
    const s = this.s;
    if (s.phase !== 'vote' || !me.alive) return 'Bạn không thể bỏ phiếu lúc này.';
    if (target !== 'skip') {
      const t = this.P(target);
      if (!t || !t.alive || t.cid === me.cid) return 'Mục tiêu không hợp lệ.';
    }
    s.votes[me.cid] = target;
    if (this.alive().every((p) => p.cid in s.votes)) this.resolveVote();
    else this.changed();
    return null;
  }

  resolveVote() {
    const s = this.s;
    const c = {};
    Object.values(s.votes).forEach((v) => (c[v] = (c[v] || 0) + 1));
    const entries = Object.entries(c).sort((a, b) => b[1] - a[1]);
    s.lastDeaths = [];
    s.lastHanged = null;
    if (!entries.length || entries[0][0] === 'skip' || (entries[1] && entries[1][1] === entries[0][1])) {
      this.log(entries.length ? 'Phiếu bầu không thống nhất. Hôm nay không ai bị treo cổ.' : 'Không ai bỏ phiếu. Hôm nay không ai bị treo cổ.', 'vote');
      return this.afterDeaths('night');
    }
    const p = this.kill(entries[0][0], 'hang');
    s.lastHanged = p.cid;
    s.lastDeaths = [p.cid];
    this.log(`Dân làng đã treo cổ ${this.deathLabel(p)} với ${entries[0][1]} phiếu.`, 'death');
    if (p.role === 'hunter') return this.startHunter(p.cid, 'night');
    this.afterDeaths('night');
  }

  // ---------- hẹn giờ ----------
  tick() {
    const s = this.s;
    if (s.endsAt && this.now() >= s.endsAt && ['night', 'day', 'vote', 'hunter'].includes(s.phase)) this.timeout();
  }

  timeout() {
    const s = this.s;
    if (s.phase === 'night') {
      if (s.step === 'main') { this.toWitch(); this.changed(); }
      else this.resolveNight();
    } else if (s.phase === 'day') this.startVote();
    else if (s.phase === 'vote') this.resolveVote();
    else if (s.phase === 'hunter') this.actShoot(this.P(s.hunter.cid), null);
  }

  // ---------- chat ----------
  // Trả về { to: [cid...] } hoặc { err }
  chatRoute(cid, ch) {
    const s = this.s, me = this.P(cid);
    if (!me) return { err: 'Không hợp lệ.' };
    const all = s.players.map((p) => p.cid);
    if (s.phase === 'lobby' || s.phase === 'end') return { to: all, ch: 'day' };
    const dead = s.players.filter((p) => !p.alive).map((p) => p.cid);
    if (!me.alive) return { to: dead, ch: 'dead' };
    if (ch === 'wolf') {
      if (me.role !== 'wolf') return { err: 'Bạn không phải sói.' };
      return { to: [...new Set([...s.players.filter((p) => p.role === 'wolf').map((p) => p.cid), ...dead])], ch: 'wolf' };
    }
    if (s.phase === 'night') return { err: 'Ban đêm cả làng đang ngủ, không thể nói chuyện.' };
    return { to: all, ch: 'day' };
  }

  // ---------- góc nhìn ----------
  pub() {
    const s = this.s, ended = s.phase === 'end';
    return {
      phase: s.phase, step: s.step, round: s.round, gameId: s.gameId,
      remaining: s.endsAt ? Math.max(0, s.endsAt - this.now()) : 0, durMs: s.durMs,
      hostCid: s.hostCid,
      players: s.players.map((p) => ({
        cid: p.cid, pid: p.pid, name: p.name, av: p.av, alive: p.alive, connected: p.connected,
        role: ended || (!p.alive && s.config.reveal) ? p.role : null,
        cause: p.alive ? null : ended || s.config.reveal ? p.cause : 'dead', diedRound: p.diedRound,
      })),
      config: s.config,
      votes: s.phase === 'vote' ? s.votes : {},
      log: s.log.slice(-60),
      winner: s.winner,
      lastDeaths: s.lastDeaths,
      lastHanged: s.lastHanged,
      hunterCid: s.phase === 'hunter' ? s.hunter.cid : null,
      canStart: s.phase === 'lobby' ? this.canStart() : null,
    };
  }

  priv(cid) {
    const s = this.s, me = this.P(cid);
    if (!me) return null;
    const out = { role: me.role, gameId: s.gameId, wolves: [], seerResults: [], notes: s.notes[cid] || [], prompt: null };
    if (!me.role) return out;
    if (me.role === 'wolf') out.wolves = s.players.filter((p) => p.role === 'wolf').map((p) => p.cid);
    if (me.role === 'seer') out.seerResults = s.seerResults;
    if (me.role === 'witch') out.witch = { ...s.witch };
    if (me.role === 'guard') out.guardLast = s.guardLast;
    // Người chết được xem toàn bộ vai (khán giả)
    if (!me.alive || s.phase === 'end') out.allRoles = Object.fromEntries(s.players.map((p) => [p.cid, p.role]));
    out.prompt = this.prompt(me);
    return out;
  }

  prompt(me) {
    const s = this.s, n = s.night;
    const others = this.alive().filter((p) => p.cid !== me.cid).map((p) => p.cid);
    if (s.phase === 'end' || s.phase === 'lobby') return null;
    if (s.phase === 'hunter' && s.hunter.cid === me.cid) return { kind: 'shoot', targets: this.alive().map((p) => p.cid) };
    if (!me.alive) return { kind: 'dead' };
    if (s.phase === 'night' && s.step === 'main') {
      if (me.role === 'wolf') return { kind: 'wolf', targets: this.alive().filter((p) => p.role !== 'wolf').map((p) => p.cid), chosen: n.wolfVotes[me.cid] ?? null, votes: n.wolfVotes };
      if (me.role === 'seer') return n.seer ? { kind: 'seer', done: true, chosen: n.seer } : { kind: 'seer', targets: others };
      if (me.role === 'guard') return { kind: 'guard', targets: this.alive().map((p) => p.cid).filter((c) => c !== s.guardLast), chosen: n.guard, last: s.guardLast };
      return { kind: 'sleep' };
    }
    if (s.phase === 'night' && s.step === 'witch') {
      if (me.role === 'witch' && this.witchActive() && !n.witchDone)
        return { kind: 'witch', victim: s.witch.heal ? n.target : null, canHeal: s.witch.heal && !!n.target, canPoison: s.witch.poison, targets: others };
      return { kind: 'sleep' };
    }
    if (s.phase === 'vote') return { kind: 'vote', targets: others, chosen: s.votes[me.cid] ?? null };
    return null;
  }
}

const ROLE_NAMES = { wolf: 'Ma Sói', villager: 'Dân Làng', seer: 'Tiên Tri', guard: 'Bảo Vệ', witch: 'Phù Thủy', hunter: 'Thợ Săn' };
