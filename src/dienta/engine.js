// Bộ máy game "Diễn Tả Hình Hài" — chỉ chạy trên máy CHỦ PHÒNG.
// Không phụ thuộc DOM/mạng để test được bằng Node.

export const MIN_PLAYERS = 2;
export const MAX_PLAYERS = 16;

export const DEFAULT_CONFIG = {
  turns: 2, // số lượt diễn mỗi người
  actTime: 90, // giây diễn mỗi lượt
  answerTime: 12, // giây để gõ đáp án sau khi bấm chuông
  revealTime: 6,
  categories: null, // null = tất cả
  order: 'random', // 'random' = bốc thăm ngẫu nhiên, ai diễn rồi không bốc lại trong vòng | 'join' = theo thứ tự vào phòng
  hints: true, // gợi ý số chữ / chữ cái đầu
  mult: true, // số nhân ngẫu nhiên
  rerolls: 1, // số lần người diễn được đổi đề
};

const clampInt = (v, lo, hi, d) => {
  v = Math.round(Number(v));
  return Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : d;
};
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export function norm(s) {
  return String(s ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function isCorrect(guess, answers) {
  const g = norm(guess);
  if (!g) return false;
  const gs = g.replace(/ /g, '');
  return answers.some((a) => {
    const n = norm(a);
    return n && (n === g || n.replace(/ /g, '') === gs);
  });
}

// Kiểm tra và làm sạch dữ liệu đề
export function loadData(raw) {
  const errors = [];
  const items = [];
  const ids = new Set();
  for (const [i, it] of (raw?.items || []).entries()) {
    if (!it || typeof it !== 'object') { errors.push(`Đề #${i + 1} không hợp lệ`); continue; }
    const answer = (Array.isArray(it.answer) ? it.answer : [it.answer]).filter((a) => typeof a === 'string' && norm(a));
    if (!it.name || !answer.length) { errors.push(`Đề #${i + 1} thiếu name hoặc answer`); continue; }
    let id = String(it.id || norm(it.name).replace(/ /g, '-'));
    while (ids.has(id)) id += '_';
    ids.add(id);
    items.push({
      id,
      name: String(it.name),
      image: String(it.image || '❓'),
      answer,
      points: clampInt(it.points, 1, 1000, 10),
      category: String(it.category || 'Khác'),
      hint: it.hint ? String(it.hint).slice(0, 80) : '',
      acting: it.acting ? String(it.acting).slice(0, 120) : '',
      multipliers: Array.isArray(it.multipliers) ? it.multipliers.map(Number).filter((x) => x > 0) : null,
    });
  }
  let mult = (raw?.multipliers || []).map((m) => ({ value: Number(m.value), weight: Number(m.weight) })).filter((m) => m.value > 0 && m.weight > 0);
  if (!mult.length) mult = [{ value: 1, weight: 1 }];
  const actorShare = Number.isFinite(Number(raw?.actorShare)) ? Math.max(0, Number(raw.actorShare)) : 0.5;
  return { items, multipliers: mult, actorShare, errors, categories: [...new Set(items.map((i) => i.category))] };
}

// Gợi ý: cấp 1 = số chữ (+ hint riêng), cấp 2 = thêm chữ cái đầu mỗi từ
export function maskHint(item, level) {
  const words = item.name.trim().split(/\s+/);
  const pattern = words.map((w) => [...w].map((ch, i) => (level >= 2 && i === 0 ? ch.toUpperCase() : '_')).join(' ')).join('   ');
  return { pattern, letters: words.map((w) => [...w].length), text: item.hint || '' };
}

function rollMultiplier(data, item) {
  if (item.multipliers?.length) return item.multipliers[Math.floor(Math.random() * item.multipliers.length)];
  const total = data.multipliers.reduce((a, m) => a + m.weight, 0);
  let r = Math.random() * total;
  for (const m of data.multipliers) { if ((r -= m.weight) < 0) return m.value; }
  return data.multipliers[0].value;
}

export const DEFAULT_POSE = { body: 'stand', head: 'center', face: 'neutral', armL: 'down', armR: 'down', legL: 'down', legR: 'down', propL: null, propR: null, ears: null, tail: null, turn: 'front', loop: null, fx: null };

export class DientaEngine {
  constructor(hostCid, data, saved, { now = () => Date.now(), cleanAv = (a) => a, cleanLook = (l) => l } = {}) {
    this.now = now;
    this.cleanAv = cleanAv;
    this.cleanLook = cleanLook;
    this.data = data;
    this.onChange = () => {};
    this.onEvent = () => {}; // sự kiện âm thanh/hiệu ứng: {type, ...}
    this.s = saved || {
      hostCid,
      phase: 'lobby', // lobby | acting | answering | reveal | end
      players: [],
      config: { ...DEFAULT_CONFIG },
      acted: [],
      round: 0,
      turnCount: 0,
      totalTurns: 0,
      turn: null,
      used: [],
      log: [],
      logSeq: 0,
      endsAt: 0,
      durMs: 0,
      gameId: 0,
      pose: { ...DEFAULT_POSE },
    };
  }

  get players() { return this.s.players; }
  P(cid) { return this.s.players.find((p) => p.cid === cid); }
  byPid(pid) { return this.s.players.find((p) => p.pid === pid); }
  isHost(cid) { return cid === this.s.hostCid; }
  changed() { this.onChange(); }
  log(text, kind = 'info') {
    this.s.log.push({ id: ++this.s.logSeq, text, kind, ts: Date.now() });
    if (this.s.log.length > 80) this.s.log.splice(0, this.s.log.length - 80);
  }
  setTimer(sec) {
    this.s.durMs = Math.round(sec * 1000);
    this.s.endsAt = this.now() + this.s.durMs;
  }
  name(cid) { return this.P(cid)?.name ?? '???'; }

  // ---------- phòng chờ ----------
  addPlayer(cid, info, pid) {
    let name = String(info?.name || '').trim().slice(0, 18) || 'Người lạ';
    const av = this.cleanAv(info?.av), look = this.cleanLook(info?.look);
    const ex = this.P(cid);
    if (ex) {
      ex.pid = pid;
      ex.connected = true;
      ex.look = look;
      if (this.s.phase === 'lobby') { ex.name = name; ex.av = av; }
      this.changed();
      return null;
    }
    if (this.s.players.length >= MAX_PLAYERS) return 'Phòng đã đủ người.';
    let n = name, k = 2;
    while (this.s.players.some((p) => p.name === n)) n = `${name} ${k++}`;
    this.s.players.push({ cid, pid, name: n, av, look, connected: true, score: 0, correct: 0 });
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
    } else {
      p.connected = false;
      // Người diễn rời đi -> bỏ qua lượt
      if (this.s.turn?.actor === p.cid && (this.s.phase === 'acting' || this.s.phase === 'answering')) {
        this.log(`${p.name} mất kết nối, bỏ qua lượt diễn.`, 'leave');
        this.reveal(null);
        return;
      }
      if (this.s.phase === 'answering' && this.s.turn?.answering?.cid === p.cid) this.wrongAnswer(p.cid, '');
    }
    this.changed();
  }

  // ---------- hành động ----------
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
        if (p) { s.players = s.players.filter((x) => x !== p); this.log(`${p.name} đã bị mời ra.`, 'leave'); this.changed(); }
        return null;
      }
      case 'start': return host ? this.start() : 'Chỉ chủ phòng mới bắt đầu được.';
      case 'lobby': if (!host || s.phase !== 'end') return 'Không thể.'; this.toLobby(); return null;
      case 'skipTurn': {
        if (!(host || s.turn?.actor === cid) || !['acting', 'answering'].includes(s.phase)) return 'Không thể bỏ qua.';
        this.log(`${this.name(s.turn.actor)} đã bỏ lượt.`, 'info');
        this.reveal(null);
        return null;
      }
      case 'reroll': return this.reroll(cid);
      case 'buzz': return this.buzz(cid);
      case 'answer': return this.answer(cid, a.text);
      case 'pose': return this.setPose(cid, a.pose);
    }
    return 'Hành động không rõ.';
  }

  setConfig(cfg) {
    const c = this.s.config;
    if (cfg && 'turns' in cfg) c.turns = clampInt(cfg.turns, 1, 5, c.turns);
    if (cfg && 'actTime' in cfg) c.actTime = clampInt(cfg.actTime, 20, 300, c.actTime);
    if (cfg && 'answerTime' in cfg) c.answerTime = clampInt(cfg.answerTime, 5, 60, c.answerTime);
    if (cfg && 'order' in cfg) c.order = cfg.order === 'join' ? 'join' : 'random';
    if (cfg && 'hints' in cfg) c.hints = !!cfg.hints;
    if (cfg && 'mult' in cfg) c.mult = !!cfg.mult;
    if (cfg && 'rerolls' in cfg) c.rerolls = clampInt(cfg.rerolls, 0, 3, c.rerolls ?? 1);
    if (cfg && 'categories' in cfg) {
      const all = this.data.categories;
      c.categories = Array.isArray(cfg.categories) ? cfg.categories.filter((x) => all.includes(x)) : null;
      if (c.categories && (c.categories.length === all.length || !c.categories.length)) c.categories = c.categories.length ? null : [];
    }
    this.changed();
    return null;
  }

  pool() {
    const cats = this.s.config.categories;
    return this.data.items.filter((i) => !cats || cats.includes(i.category));
  }

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
    s.players.forEach((p) => { p.score = 0; p.correct = 0; });
    Object.assign(s, { round: 1, acted: [], turnCount: 0, totalTurns: s.config.turns * s.players.length, turn: null, used: [], log: [], gameId: s.gameId + 1 });
    this.log('Trò chơi bắt đầu! Mỗi người sẽ lần lượt lên sân khấu.', 'phase');
    this.nextTurn();
    return null;
  }

  drawItem() {
    const s = this.s;
    let pool = this.pool().filter((i) => !s.used.includes(i.id));
    if (!pool.length) { s.used = []; pool = this.pool(); }
    const item = pool[Math.floor(Math.random() * pool.length)];
    s.used.push(item.id);
    return item;
  }

  // Chọn người diễn tiếp theo: trong mỗi vòng ai cũng diễn 1 lần, không lặp lại.
  pickActor() {
    const s = this.s;
    const free = () => s.players.filter((p) => p.connected && !s.acted.includes(p.cid));
    let c = free();
    if (!c.length) {
      s.round++;
      s.acted = [];
      if (s.round > s.config.turns) return null;
      c = free();
    }
    if (!c.length) return null;
    const p = s.config.order === 'join' ? c[0] : c[Math.floor(Math.random() * c.length)];
    s.acted.push(p.cid);
    return p.cid;
  }

  nextTurn() {
    const s = this.s;
    const actor = this.pickActor();
    if (!actor) return this.finish();
    s.turnCount++;
    s.totalTurns = Math.max(s.totalTurns, s.turnCount);
    const item = this.drawItem();
    s.turn = {
      n: s.turnCount,
      total: s.totalTurns,
      round: s.round,
      actor,
      item,
      mult: s.config.mult === false ? 1 : rollMultiplier(this.data, item),
      answering: null,
      locked: [],
      rerolls: s.config.rerolls ?? 1,
      hintLevel: 0,
      actLeft: 0,
      result: null,
      guesses: [],
    };
    s.pose = { ...DEFAULT_POSE };
    s.phase = 'acting';
    this.setTimer(s.config.actTime);
    this.log(`Lượt ${s.turn.n}/${s.turn.total}: ${this.name(s.turn.actor)} lên sân khấu! Đề x${s.turn.mult}.`, 'phase');
    this.onEvent({ type: 'turn' });
    this.changed();
  }

  reroll(cid) {
    const t = this.s.turn;
    if (this.s.phase !== 'acting' || t?.actor !== cid) return 'Chỉ người diễn mới đổi đề được.';
    if (t.rerolls <= 0) return 'Bạn đã hết lượt đổi đề.';
    t.rerolls--;
    t.item = this.drawItem();
    t.mult = this.s.config.mult === false ? 1 : rollMultiplier(this.data, t.item);
    t.locked = [];
    t.hintLevel = 0;
    this.s.endsAt = this.now() + this.s.config.actTime * 1000;
    this.log(`${this.name(cid)} đã đổi đề. Đề mới x${t.mult}.`, 'info');
    this.changed();
    return null;
  }

  setPose(cid, pose) {
    if (this.s.turn?.actor !== cid || !pose || typeof pose !== 'object') return null;
    this.s.pose = { ...DEFAULT_POSE, ...pose };
    return null; // không broadcast state (pose đi đường riêng)
  }

  buzz(cid) {
    const s = this.s, t = s.turn;
    if (s.phase !== 'acting') return s.phase === 'answering' ? null : 'Chưa thể bấm chuông.';
    if (t.actor === cid) return 'Người diễn không được bấm chuông.';
    if (t.locked.includes(cid)) return 'Bạn đã trả lời sai lượt này.';
    t.actLeft = Math.max(1000, s.endsAt - this.now());
    t.answering = { cid };
    s.phase = 'answering';
    this.setTimer(s.config.answerTime);
    this.onEvent({ type: 'buzz', cid });
    this.changed();
    return null;
  }

  answer(cid, text) {
    const s = this.s, t = s.turn;
    if (s.phase !== 'answering' || t.answering?.cid !== cid) return 'Không phải lượt trả lời của bạn.';
    text = String(text || '').trim().slice(0, 60);
    if (isCorrect(text, t.item.answer)) {
      const gain = t.item.points * t.mult;
      const actorGain = Math.round(gain * this.data.actorShare);
      const p = this.P(cid), a = this.P(t.actor);
      p.score += gain;
      p.correct++;
      if (a) a.score += actorGain;
      t.guesses.push({ cid, text, ok: true });
      this.log(`${p.name} đoán đúng "${t.item.name}"! +${gain} điểm${actorGain ? ` (người diễn +${actorGain})` : ''}.`, 'correct');
      this.reveal({ cid, gain, actorGain, text });
    } else this.wrongAnswer(cid, text);
    return null;
  }

  wrongAnswer(cid, text) {
    const s = this.s, t = s.turn;
    t.locked.push(cid);
    t.guesses.push({ cid, text, ok: false });
    t.answering = null;
    this.log(`${this.name(cid)} trả lời ${text ? `"${text}"` : '(không kịp)'} — sai rồi!`, 'wrong');
    this.onEvent({ type: 'wrong', cid });
    const guessers = s.players.filter((p) => p.connected && p.cid !== t.actor);
    if (guessers.every((p) => t.locked.includes(p.cid))) {
      this.log('Không còn ai được trả lời.', 'info');
      return this.reveal(null);
    }
    s.phase = 'acting';
    s.durMs = s.config.actTime * 1000;
    s.endsAt = this.now() + t.actLeft;
    this.changed();
  }

  reveal(result) {
    const s = this.s;
    s.turn.result = result;
    s.turn.answering = null;
    s.phase = 'reveal';
    if (!result) this.log(`Hết lượt! Đáp án là "${s.turn.item.name}".`, 'reveal');
    this.setTimer(s.config.revealTime ?? DEFAULT_CONFIG.revealTime);
    this.onEvent({ type: result ? 'correct' : 'reveal' });
    this.changed();
  }

  finish() {
    const s = this.s;
    s.phase = 'end';
    s.turn = null;
    s.endsAt = 0;
    s.durMs = 0;
    const top = [...s.players].sort((a, b) => b.score - a.score)[0];
    this.log(top ? `Kết thúc! ${top.name} vô địch với ${top.score} điểm.` : 'Kết thúc!', 'win');
    this.onEvent({ type: 'end' });
    this.changed();
  }

  toLobby() {
    const s = this.s;
    s.players = s.players.filter((p) => p.connected);
    s.players.forEach((p) => { p.score = 0; p.correct = 0; });
    Object.assign(s, { phase: 'lobby', turn: null, acted: [], round: 0, turnCount: 0, endsAt: 0, durMs: 0, pose: { ...DEFAULT_POSE } });
    this.log('Quay về phòng chờ.', 'phase');
    this.changed();
  }

  hintFrac() {
    const s = this.s, t = s.turn;
    if (!t || !['acting', 'answering'].includes(s.phase)) return 0;
    const left = s.phase === 'acting' ? s.endsAt - this.now() : t.actLeft;
    return 1 - left / (s.config.actTime * 1000);
  }

  tick() {
    const s = this.s;
    if (s.turn && s.config.hints !== false && ['acting', 'answering'].includes(s.phase)) {
      const f = this.hintFrac();
      const lvl = f >= 0.65 ? 2 : f >= 0.35 ? 1 : 0;
      if (lvl > (s.turn.hintLevel || 0)) {
        s.turn.hintLevel = lvl;
        this.log(lvl === 1 ? '💡 Gợi ý: đã hiện số chữ của đáp án.' : '💡 Gợi ý: đã hiện chữ cái đầu.', 'info');
        this.changed();
      }
    }
    if (!s.endsAt || this.now() < s.endsAt) return;
    if (s.phase === 'acting') this.reveal(null);
    else if (s.phase === 'answering') this.wrongAnswer(s.turn.answering.cid, '');
    else if (s.phase === 'reveal') this.nextTurn();
  }

  // ---------- chat ----------
  // Người diễn không được chat khi đang diễn. Tin nhắn chứa đáp án sẽ bị che.
  chatFilter(cid, text) {
    const s = this.s, t = s.turn;
    if (t && ['acting', 'answering'].includes(s.phase)) {
      if (t.actor === cid) return { err: 'Người diễn không được chat! Hãy diễn tả bằng hành động.' };
      const n = ' ' + norm(text) + ' ';
      const ns = n.replace(/ /g, '');
      if (t.item.answer.some((a) => { const x = norm(a); return x && (n.includes(' ' + x + ' ') || (x.length > 3 && ns.includes(x.replace(/ /g, '')))); }))
        return { text: '🤐 (tin nhắn bị ẩn vì chứa đáp án — hãy bấm chuông để trả lời!)', masked: true };
    }
    return { text };
  }

  // ---------- góc nhìn ----------
  pub() {
    const s = this.s, t = s.turn;
    const showItem = s.phase === 'reveal' || s.phase === 'end';
    return {
      phase: s.phase, gameId: s.gameId, hostCid: s.hostCid,
      remaining: s.endsAt ? Math.max(0, s.endsAt - this.now()) : 0, durMs: s.durMs,
      players: s.players.map((p) => ({ cid: p.cid, pid: p.pid, name: p.name, av: p.av, skin: p.look?.skin, connected: p.connected, score: p.score, correct: p.correct })),
      config: s.config,
      categories: this.data.categories,
      itemCount: this.data.items.length,
      poolCount: this.pool().length,
      turn: t && {
        n: t.n, total: t.total, actor: t.actor, mult: t.mult,
        points: t.item.points, category: t.item.category,
        answering: t.answering, locked: t.locked, rerolls: t.rerolls,
        result: t.result, guesses: t.guesses.slice(-6),
        item: showItem ? t.item : null,
        hint: t.hintLevel ? maskHint(t.item, t.hintLevel) : null,
      },
      pose: s.pose,
      actorLook: t ? this.P(t.actor)?.look ?? null : null,
      log: s.log.slice(-60),
      canStart: s.phase === 'lobby' ? this.canStart() : null,
    };
  }

  priv(cid) {
    const t = this.s.turn;
    return { gameId: this.s.gameId, item: t && t.actor === cid && ['acting', 'answering', 'reveal'].includes(this.s.phase) ? t.item : null };
  }
}
