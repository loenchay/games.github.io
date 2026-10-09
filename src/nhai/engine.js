// Bộ máy game "Nhại Như Thật" — chỉ chạy trên máy CHỦ PHÒNG. Không phụ thuộc DOM/mạng (test được bằng Node).
// Vòng chơi: nghe mẫu -> mọi người cùng thu âm nhại -> lần lượt trình diễn trên sân khấu -> bỏ phiếu -> chấm điểm.

export const MIN_PLAYERS = 2;
export const MAX_PLAYERS = 16;
export const DEFAULT_CONFIG = {
  rounds: 5, // số đề mỗi ván
  scoring: 'both', // 'auto' = máy chấm | 'vote' = bỏ phiếu | 'both' = cả hai
  listens: 2, // số lần phát mẫu trước khi thu
  categories: null, // null = tất cả
};
export const COUNTDOWN = 3; // giây đếm ngược trước khi thu
export const COLLECT_MAX = 8; // giây chờ mọi người gửi bản thu
export const VOTE_TIME = 15;
export const REVEAL_TIME = 9;

const clampInt = (v, lo, hi, d) => { v = Math.round(Number(v)); return Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : d; };
const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

export const recWindow = (d) => Math.max(2.5, Math.min(9, d * 1.35 + 1));
export const listenTime = (d, n) => 0.8 + n * (d + 0.9);

// Làm sạch dữ liệu đề (không giữ phần âm thanh trong state)
export function loadData(raw) {
  const items = [];
  const ids = new Set();
  for (const it of raw?.items || []) {
    if (!it || !it.id || !it.name || ids.has(it.id)) continue;
    ids.add(it.id);
    items.push({
      id: String(it.id), name: String(it.name).slice(0, 40), emo: String(it.emo || '🎙️').slice(0, 4),
      category: String(it.category || 'Khác').slice(0, 30), hint: String(it.hint || '').slice(0, 90),
      duration: Math.max(0.3, Math.min(10, Number(it.duration) || 2)), points: clampInt(it.points, 5, 50, 10),
    });
  }
  const categories = [...new Set(items.map((i) => i.category))];
  return { items, categories };
}

export class NhaiEngine {
  constructor(hostCid, data, { now = () => Date.now(), cleanAv = (a) => a, cleanLook = (l) => l } = {}) {
    this.now = now;
    this.cleanAv = cleanAv;
    this.cleanLook = cleanLook;
    this.data = data;
    this.custom = []; // đề tự thêm trong phòng
    this.onChange = () => {};
    this.onEvent = () => {};
    this.s = {
      hostCid, phase: 'lobby', players: [], config: { ...DEFAULT_CONFIG },
      round: 0, totalRounds: 0, item: null, used: [], takes: {}, votes: {}, show: null, results: null,
      log: [], logSeq: 0, endsAt: 0, durMs: 0, gameId: 0, rec: null,
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
  setTimer(sec) { this.s.durMs = Math.round(sec * 1000); this.s.endsAt = this.now() + this.s.durMs; }
  allItems() { return [...this.custom, ...this.data.items]; }
  categories() { return [...new Set(this.allItems().map((i) => i.category))]; }
  pool() {
    const cats = this.s.config.categories;
    return this.allItems().filter((i) => i.custom || !cats || cats.includes(i.category));
  }

  // ---------- người chơi ----------
  addPlayer(cid, info, pid) {
    const name = String(info?.name || '').trim().slice(0, 18) || 'Người lạ';
    const av = this.cleanAv(info?.av), look = this.cleanLook(info?.look);
    const ex = this.P(cid);
    if (ex) {
      ex.pid = pid; ex.connected = true; ex.look = look;
      if (this.s.phase === 'lobby') { ex.name = name; ex.av = av; }
      this.changed();
      return null;
    }
    if (this.s.players.length >= MAX_PLAYERS) return 'Phòng đã đủ người.';
    let n = name, k = 2;
    while (this.s.players.some((p) => p.name === n)) n = `${name} ${k++}`;
    this.s.players.push({ cid, pid, name: n, av, look, connected: true, score: 0, wins: 0 });
    this.log(`${n} đã vào phòng.`, 'join');
    this.changed();
    return null;
  }
  disconnect(pid) {
    const p = this.byPid(pid);
    if (!p) return;
    if (this.s.phase === 'lobby' && !this.isHost(p.cid)) {
      this.s.players = this.s.players.filter((x) => x !== p);
      this.log(`${p.name} đã rời phòng.`, 'leave');
    } else p.connected = false;
    this.changed();
    this.maybeAdvance();
  }

  // ---------- hành động ----------
  handle(cid, a) {
    const me = this.P(cid);
    if (!me || !a || typeof a !== 'object') return 'Không hợp lệ.';
    const host = this.isHost(cid);
    const s = this.s;
    switch (a.t) {
      case 'cfg': return host && s.phase === 'lobby' ? this.setConfig(a.cfg) : 'Chỉ chủ phòng mới chỉnh được.';
      case 'start': return host ? this.start() : 'Chỉ chủ phòng mới bắt đầu được.';
      case 'lobby': if (!host || s.phase !== 'end') return 'Không thể.'; this.toLobby(); return null;
      case 'skip': if (!host || s.phase === 'lobby' || s.phase === 'end') return 'Không thể.'; this.advance(); return null;
      case 'vote': return this.vote(cid, a.target);
      case 'kick': {
        if (!host || s.phase !== 'lobby' || a.cid === cid) return 'Không thể mời ra.';
        const p = this.P(a.cid);
        if (p) { s.players = s.players.filter((x) => x !== p); this.log(`${p.name} đã bị mời ra.`, 'leave'); this.changed(); }
        return null;
      }
    }
    return 'Hành động không rõ.';
  }

  setConfig(cfg) {
    const c = this.s.config;
    if (cfg && 'rounds' in cfg) c.rounds = clampInt(cfg.rounds, 1, 20, c.rounds);
    if (cfg && 'listens' in cfg) c.listens = clampInt(cfg.listens, 1, 3, c.listens);
    if (cfg && 'scoring' in cfg) c.scoring = ['auto', 'vote', 'both'].includes(cfg.scoring) ? cfg.scoring : c.scoring;
    if (cfg && 'categories' in cfg) {
      const all = this.data.categories;
      c.categories = Array.isArray(cfg.categories) ? cfg.categories.filter((x) => all.includes(x)) : null;
      if (c.categories && c.categories.length === all.length) c.categories = null;
    }
    this.changed();
    return null;
  }

  // đề tự thêm (âm thanh giữ ở ngoài engine)
  addCustom(item) {
    const it = {
      id: String(item.id), name: String(item.name || 'Âm thanh tự thêm').slice(0, 40), emo: String(item.emo || '🎙️').slice(0, 4),
      category: 'Tự thêm', hint: String(item.hint || '').slice(0, 90), duration: Math.max(0.3, Math.min(10, Number(item.duration) || 2)),
      points: 15, custom: true, by: item.by || null,
    };
    this.custom = this.custom.filter((x) => x.id !== it.id);
    this.custom.push(it);
    this.log(`🎵 Đã thêm đề "${it.name}".`, 'info');
    this.changed();
    return it;
  }
  removeCustom(id) { this.custom = this.custom.filter((x) => x.id !== id); this.changed(); }

  canStart() {
    const n = this.s.players.filter((p) => p.connected).length;
    if (n < MIN_PLAYERS) return `Cần ít nhất ${MIN_PLAYERS} người chơi.`;
    if (!this.pool().length) return 'Chưa chọn nhóm đề nào.';
    return null;
  }

  start() {
    const err = this.canStart();
    if (err) return err;
    const s = this.s;
    s.players = s.players.filter((p) => p.connected);
    s.players.forEach((p) => { p.score = 0; p.wins = 0; });
    Object.assign(s, { round: 0, totalRounds: s.config.rounds, used: [], log: [], gameId: s.gameId + 1, results: null });
    this.log('Trò chơi bắt đầu! Nghe kỹ âm mẫu rồi nhại thật giống nhé.', 'phase');
    this.nextRound();
    return null;
  }

  drawItem() {
    const s = this.s;
    const fresh = this.pool().filter((i) => !s.used.includes(i.id));
    const custom = fresh.filter((i) => i.custom);
    let pool = custom.length ? custom : fresh; // đề tự thêm được chơi trước
    if (!pool.length) { s.used = []; pool = this.pool(); }
    const item = custom.length ? pool[0] : pool[Math.floor(Math.random() * pool.length)];
    s.used.push(item.id);
    return item;
  }

  nextRound() {
    const s = this.s;
    if (s.round >= s.totalRounds) return this.finish();
    s.round++;
    s.item = this.drawItem();
    s.takes = {};
    s.votes = {};
    s.show = null;
    s.results = null;
    s.phase = 'listen';
    this.setTimer(listenTime(s.item.duration, s.config.listens));
    this.log(`Đề ${s.round}/${s.totalRounds}: ${s.item.emo} ${s.item.name}`, 'phase');
    this.onEvent({ type: 'round' });
    this.changed();
  }

  startRecord() {
    const s = this.s;
    s.phase = 'record';
    s.rec = { count: COUNTDOWN, win: recWindow(s.item.duration) };
    this.setTimer(COUNTDOWN + s.rec.win + 0.4);
    this.onEvent({ type: 'record' });
    this.changed();
  }

  // Máy chủ nhận được bản thu của một người
  takeIn(cid, len) {
    const s = this.s;
    if (!['record', 'collect'].includes(s.phase) || !this.P(cid)) return false;
    s.takes[cid] = { len: Math.max(0.2, Math.min(12, Number(len) || 1)), auto: s.takes[cid]?.auto ?? null };
    this.changed();
    this.maybeAdvance();
    return true;
  }
  setAuto(cid, res) {
    const t = this.s.takes[cid];
    if (!t) return;
    t.auto = { score: clampInt(res?.score, 0, 100, 0), pitch: res?.pitch ?? null, rhythm: res?.rhythm ?? null, length: res?.length ?? null, silent: !!res?.silent };
    this.changed();
  }

  maybeAdvance() {
    const s = this.s;
    if (s.phase === 'collect') {
      const need = s.players.filter((p) => p.connected);
      if (need.every((p) => s.takes[p.cid])) this.startShow();
    } else if (s.phase === 'vote') {
      const voters = s.players.filter((p) => p.connected);
      if (voters.length && voters.every((p) => s.votes[p.cid] || !this.voteTargets(p.cid).length)) this.reveal();
    }
  }

  startShow() {
    const s = this.s;
    const order = shuffle(Object.keys(s.takes));
    s.show = { idx: 0, slots: [{ who: 'ref', len: s.item.duration }, ...order.map((cid) => ({ who: cid, len: s.takes[cid].len }))] };
    s.phase = 'show';
    this.setTimer(s.show.slots[0].len + 1.4);
    this.onEvent({ type: 'show' });
    this.changed();
  }
  nextSlot() {
    const s = this.s;
    s.show.idx++;
    if (s.show.idx >= s.show.slots.length) return this.afterShow();
    this.setTimer(s.show.slots[s.show.idx].len + 1.2);
    this.changed();
  }
  useVotes() {
    const s = this.s;
    return s.config.scoring !== 'auto' && Object.keys(s.takes).length >= 2 && s.players.filter((p) => p.connected).length >= 2;
  }
  voteTargets(cid) { return Object.keys(this.s.takes).filter((c) => c !== cid); }
  afterShow() {
    const s = this.s;
    if (!Object.keys(s.takes).length) { this.log('Không ai gửi bản nhại nào…', 'info'); return this.reveal(); }
    if (this.useVotes()) {
      s.phase = 'vote';
      this.setTimer(VOTE_TIME);
      this.changed();
    } else this.reveal();
  }
  vote(cid, target) {
    const s = this.s;
    if (s.phase !== 'vote') return 'Chưa tới lúc bỏ phiếu.';
    if (target === cid) return 'Không được tự bầu cho mình!';
    if (!s.takes[target]) return 'Người này không có bản nhại.';
    s.votes[cid] = target;
    this.changed();
    this.maybeAdvance();
    return null;
  }

  reveal() {
    const s = this.s;
    const mode = s.config.scoring;
    const tally = {};
    for (const t of Object.values(s.votes)) tally[t] = (tally[t] || 0) + 1;
    const voteOn = this.useVotes() && mode !== 'auto';
    const autoOn = mode !== 'vote';
    const res = Object.entries(s.takes).map(([cid, t]) => {
      const auto = t.auto?.score ?? 0;
      const votes = tally[cid] || 0;
      let pts = 0;
      if (mode === 'auto' || (mode === 'both' && !voteOn)) pts = auto;
      else if (mode === 'vote') pts = voteOn ? votes * 30 : auto;
      else pts = Math.round(auto * 0.6) + votes * 20;
      pts = Math.round((pts * s.item.points) / 10);
      return { cid, auto: autoOn || !voteOn ? t.auto : null, votes: voteOn ? votes : null, pts };
    }).sort((a, b) => b.pts - a.pts);
    if (res.length && res[0].pts > 0) res[0].best = true;
    for (const r of res) { const p = this.P(r.cid); if (p) { p.score += r.pts; if (r.best) p.wins++; } }
    s.results = res;
    s.phase = 'reveal';
    if (res[0]?.best) this.log(`👑 ${this.name(res[0].cid)} nhại giống nhất đề "${s.item.name}" (+${res[0].pts})!`, 'correct');
    this.setTimer(REVEAL_TIME);
    this.onEvent({ type: 'reveal' });
    this.changed();
  }

  advance() {
    const s = this.s;
    if (s.phase === 'listen') this.startRecord();
    else if (s.phase === 'record') { s.phase = 'collect'; this.setTimer(COLLECT_MAX); this.changed(); this.maybeAdvance(); }
    else if (s.phase === 'collect') this.startShow();
    else if (s.phase === 'show') this.nextSlot();
    else if (s.phase === 'vote') this.reveal();
    else if (s.phase === 'reveal') this.nextRound();
  }

  finish() {
    const s = this.s;
    s.phase = 'end';
    s.endsAt = 0; s.durMs = 0; s.show = null;
    const top = [...s.players].sort((a, b) => b.score - a.score)[0];
    this.log(top ? `Kết thúc! ${top.name} là Vua Nhại với ${top.score} điểm.` : 'Kết thúc!', 'win');
    this.onEvent({ type: 'end' });
    this.changed();
  }
  toLobby() {
    const s = this.s;
    s.players = s.players.filter((p) => p.connected);
    s.players.forEach((p) => { p.score = 0; p.wins = 0; });
    Object.assign(s, { phase: 'lobby', round: 0, item: null, takes: {}, votes: {}, show: null, results: null, endsAt: 0, durMs: 0 });
    this.log('Quay về phòng chờ.', 'phase');
    this.changed();
  }

  tick() {
    const s = this.s;
    if (!s.endsAt || this.now() < s.endsAt) return;
    this.advance();
  }

  // ---------- góc nhìn công khai ----------
  pub() {
    const s = this.s;
    const showWho = s.show ? s.show.slots[s.show.idx]?.who : null;
    const performer = showWho && showWho !== 'ref' ? this.P(showWho) : null;
    return {
      phase: s.phase, gameId: s.gameId, hostCid: s.hostCid,
      remaining: s.endsAt ? Math.max(0, s.endsAt - this.now()) : 0, durMs: s.durMs,
      players: s.players.map((p) => ({ cid: p.cid, pid: p.pid, name: p.name, av: p.av, skin: p.look?.skin, connected: p.connected, score: p.score, wins: p.wins })),
      config: s.config, categories: this.data.categories, poolCount: this.pool().length,
      custom: this.custom.map((c) => ({ id: c.id, name: c.name, duration: c.duration, by: c.by })),
      round: s.round, totalRounds: s.totalRounds, item: s.item, rec: s.rec,
      takes: Object.fromEntries(Object.entries(s.takes).map(([c, t]) => [c, { len: t.len }])),
      voted: s.phase === 'vote' ? Object.keys(s.votes) : [],
      show: s.show && { idx: s.show.idx, slots: s.show.slots },
      performerLook: performer?.look || null,
      results: s.results,
      log: s.log.slice(-40),
    };
  }
}
