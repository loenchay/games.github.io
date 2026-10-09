// Luật Cờ Cá Ngựa (kiểu Việt Nam): 2–4 người, mỗi người 4 ngựa, 1 xúc xắc.
// Đổ 6 (tuỳ chọn: 1 hoặc 6) mới được xuất quân. Đổ 6 được đổ thêm lượt. Đi đúng vào ô có ngựa đối thủ thì "đá" về chuồng.
// Tuỳ chọn: không được nhảy qua đầu ngựa khác. Đi hết 1 vòng (51 ô) thì vào 6 bậc về đích, phải đổ vừa đủ.
// Vị trí ngựa: -1 = trong chuồng · 0..50 = trên đường (tính từ ô xuất phát của mình) · 51..56 = bậc về đích (56 = đích)

export const TRACK = 52, LAST = 50, GOAL = 56;
export const COLORS = ['red', 'blue', 'green', 'yellow'];
export const COLOR_VN = { red: 'Đỏ', blue: 'Xanh dương', green: 'Xanh lá', yellow: 'Vàng' };
export const START = { red: 0, blue: 13, green: 26, yellow: 39 };
export const colorsFor = (n) => (n === 2 ? ['red', 'green'] : n === 3 ? ['red', 'blue', 'green'] : COLORS.slice(0, n));

export const defaultConfig = { out: '6', block: true, rank: 'first' };
export function cleanConfig(c, p) {
  const o = {};
  if (['6', '16'].includes(String(p.out))) o.out = String(p.out);
  if ('block' in p) o.block = !!p.block;
  if (['first', 'all'].includes(p.rank)) o.rank = p.rank;
  return o;
}

export function setup(n, cfg, ctx) {
  const colors = colorsFor(n);
  const first = Math.floor(ctx.rng() * n);
  ctx.log(`${ctx.name(first)} (${COLOR_VN[colors[first]]}) đổ trước.`, 'phase');
  return { n, cfg: { ...cfg }, colors, horses: colors.map(() => [-1, -1, -1, -1]), turn: first, phase: 'roll', die: 0, sixes: 0, done: [], moves: [], seq: 0, last: null, out: false };
}
// ô tuyệt đối trên đường đua (0..51) của ngựa màu `color` ở tiến độ p (0..50)
export const absSq = (color, p) => (START[color] + p) % TRACK;
function whoAt(s, abs) {
  const r = [];
  s.colors.forEach((col, seat) => s.horses[seat].forEach((p, k) => { if (p >= 0 && p <= LAST && absSq(col, p) === abs) r.push({ seat, k }); }));
  return r;
}

// các nước đi hợp lệ của `seat` với số `die`: [{ k, from, to, kick: {seat,k}|null }]
export function legal(s, seat, die) {
  const col = s.colors[seat], mine = s.horses[seat], out = [];
  const canOut = s.cfg.out === '16' ? die === 1 || die === 6 : die === 6;
  for (let k = 0; k < 4; k++) {
    const p = mine[k];
    if (p === GOAL) continue;
    if (p < 0) {
      if (!canOut) continue;
      if (mine.some((q) => q === 0)) continue; // ô xuất phát đang có ngựa mình
      const occ = whoAt(s, absSq(col, 0)).find((o) => o.seat !== seat);
      // đã có ngựa khác đang ra quân ở lựa chọn trước thì bỏ trùng
      if (out.some((m) => m.from < 0)) continue;
      out.push({ k, from: -1, to: 0, kick: occ || null });
      continue;
    }
    const to = p + die;
    if (to > GOAL) continue;
    let ok = true;
    for (let q = p + 1; q < to; q++) {
      if (q <= LAST) { if (s.cfg.block && whoAt(s, absSq(col, q)).length) { ok = false; break; } }
      else if (mine.includes(q)) { ok = false; break; }
    }
    if (!ok) continue;
    let kick = null;
    if (to <= LAST) {
      const occ = whoAt(s, absSq(col, to));
      if (occ.some((o) => o.seat === seat)) continue;
      kick = occ[0] || null;
    } else if (to < GOAL && mine.includes(to)) continue;
    out.push({ k, from: p, to, kick });
  }
  return out;
}

function nextTurn(s) {
  for (let i = 1; i <= s.n; i++) {
    const t = (s.turn + i) % s.n;
    if (!s.done.includes(t)) { s.turn = t; break; }
  }
  s.phase = 'roll'; s.die = 0; s.sixes = 0; s.moves = [];
}

export function act(s, seat, a, ctx) {
  if (s.out) return 'Ván đã xong.';
  if (s.turn !== seat) return 'Chưa tới lượt bạn.';
  if (a.t === 'roll') {
    if (s.phase !== 'roll') return 'Hãy chọn ngựa để đi.';
    const die = 1 + Math.floor(ctx.rng() * 6);
    s.die = die;
    s.seq++;
    if (die === 6) s.sixes++;
    s.last = { t: 'roll', seat, die };
    ctx.fx({ type: 'roll', seat, die });
    const ms = legal(s, seat, die);
    if (!ms.length) {
      ctx.log(`${ctx.name(seat)} đổ ${die} — không đi được.`, 'move');
      if (die === 6) { s.phase = 'roll'; } else nextTurn(s);
      return null;
    }
    s.phase = 'move';
    s.moves = ms;
    // chỉ có 1 cách đi thì tự đi luôn
    if (ms.length === 1 || ms.every((m) => m.from === ms[0].from && m.to === ms[0].to)) return move(s, seat, ms[0], ctx);
    return null;
  }
  if (a.t === 'move') {
    if (s.phase !== 'move') return 'Hãy đổ xúc xắc trước.';
    const m = s.moves.find((x) => x.k === Number(a.k));
    if (!m) return 'Con ngựa này không đi được.';
    return move(s, seat, m, ctx);
  }
  return 'Hành động không rõ.';
}
function move(s, seat, m, ctx) {
  const col = s.colors[seat];
  s.horses[seat][m.k] = m.to;
  s.seq++;
  let text = m.from < 0 ? `${ctx.name(seat)} xuất quân 🐴` : m.to === GOAL ? `${ctx.name(seat)} đưa một ngựa về đích! 🏁` : m.to > LAST ? `${ctx.name(seat)} lên bậc ${m.to - LAST}.` : null;
  if (m.kick) {
    s.horses[m.kick.seat][m.kick.k] = -1;
    text = `${ctx.name(seat)} đá ngựa của ${ctx.name(m.kick.seat)} về chuồng! 💥`;
  }
  if (text) ctx.log(text, m.kick ? 'bad' : 'move');
  s.last = { t: 'move', seat, k: m.k, from: m.from, to: m.to, kick: m.kick, color: col };
  ctx.fx({ type: 'move', seat, k: m.k, from: m.from, to: m.to, kick: m.kick });
  if (s.horses[seat].every((p) => p === GOAL)) {
    s.done.push(seat);
    ctx.log(`🏆 ${ctx.name(seat)} đã đưa cả 4 ngựa về đích!`, 'win');
    const left = [...Array(s.n).keys()].filter((i) => !s.done.includes(i));
    if (s.cfg.rank === 'first' || left.length <= 1) {
      s.out = true;
      const prog = (i) => s.horses[i].reduce((a, p) => a + (p < 0 ? 0 : p + 1), 0);
      const rank = [...s.done, ...left.sort((a, b) => prog(b) - prog(a))];
      ctx.finish({ winners: [s.done[0]], rank, text: s.done.length > 1 ? `Thứ tự về đích: ${s.done.map((i) => ctx.name(i)).join(' → ')}.` : 'Về đích cả 4 ngựa đầu tiên.' });
      return null;
    }
    nextTurn(s);
    return null;
  }
  if (s.die === 6 && s.sixes < 3) { s.phase = 'roll'; s.moves = []; }
  else nextTurn(s);
  return null;
}

export function auto(s, seat, ctx) {
  if (s.turn !== seat || s.out) return;
  if (s.phase === 'roll') act(s, seat, { t: 'roll' }, ctx);
  if (s.turn === seat && s.phase === 'move' && s.moves.length) {
    // ưu tiên: đá ngựa > về đích > xuất quân > ngựa đi xa nhất
    const m = [...s.moves].sort((a, b) => (b.kick ? 3 : 0) - (a.kick ? 3 : 0) || (b.to === GOAL) - (a.to === GOAL) || (b.from < 0) - (a.from < 0) || b.from - a.from)[0];
    act(s, seat, { t: 'move', k: m.k }, ctx);
  }
}
export const turn = (s) => (s.out ? -1 : s.turn);
export const turnKey = (s) => `${s.turn}:${s.seq}`;
export const view = (s) => s;
export const LOGIC = { minSeats: 2, maxSeats: 4, defaultConfig, cleanConfig, setup, act, auto, turn, turnKey, view };
