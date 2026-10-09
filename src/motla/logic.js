// Luật "Một Lá!" — game bài màu: đánh lá cùng màu hoặc cùng số/ký hiệu, ai hết bài trước thắng.
// Lá bài là chuỗi: màu (r y g b) + giá trị (0-9, s = mất lượt, v = đảo chiều, d = +2), 'w' = đổi màu, 'f' = +4 đổi màu.
// Còn 1 lá phải bấm "Một lá!" — người khác bắt được trước khi bạn hô thì bạn bốc phạt 2 lá.

export const COLORS = ['r', 'y', 'g', 'b'];
export const COLOR_NAME = { r: 'Đỏ', y: 'Vàng', g: 'Xanh lá', b: 'Xanh dương' };
const shuffle = (a, rng) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const isWild = (c) => c === 'w' || c === 'f';
export const colorOf = (c) => (isWild(c) ? null : c[0]);
export const valOf = (c) => (isWild(c) ? c : c.slice(1));
export const points = (c) => (isWild(c) ? 50 : /\d/.test(valOf(c)) ? Number(valOf(c)) : 20);
export function cardName(c) {
  if (c === 'w') return 'Đổi màu';
  if (c === 'f') return '+4 Đổi màu';
  const v = valOf(c);
  return `${{ s: 'Mất lượt', v: 'Đảo chiều', d: '+2' }[v] ?? v} ${COLOR_NAME[colorOf(c)]}`;
}
export function newDeck() {
  const d = [];
  for (const c of COLORS) {
    d.push(c + '0');
    for (let k = 0; k < 2; k++) for (const v of ['1', '2', '3', '4', '5', '6', '7', '8', '9', 's', 'v', 'd']) d.push(c + v);
  }
  for (let k = 0; k < 4; k++) d.push('w', 'f');
  return d; // 108 lá
}
const ORDER = 'rygb';
export const sortHand = (h) => h.sort((a, b) => (isWild(a) ? 9 : ORDER.indexOf(a[0])) - (isWild(b) ? 9 : ORDER.indexOf(b[0])) || '0123456789svdwf'.indexOf(valOf(a)) - '0123456789svdwf'.indexOf(valOf(b)));

export const defaultConfig = { stack: true, drawUntil: false, hand: 7 };
export function cleanConfig(c, p) {
  const o = {};
  if ('stack' in p) o.stack = !!p.stack;
  if ('drawUntil' in p) o.drawUntil = !!p.drawUntil;
  if ('hand' in p && [5, 7, 10].includes(Number(p.hand))) o.hand = Number(p.hand);
  return o;
}

export function canPlay(s, c) {
  if (s.pending) {
    if (!s.cfg.stack) return false;
    return c === 'f' || (s.pendingType === 'd' && valOf(c) === 'd');
  }
  if (isWild(c)) return true;
  const top = s.discard[s.discard.length - 1];
  return colorOf(c) === s.color || valOf(c) === valOf(top);
}

export function setup(n, cfg, ctx) {
  const deck = shuffle(newDeck(), ctx.rng);
  const hands = Array.from({ length: n }, () => []);
  for (let k = 0; k < cfg.hand; k++) for (const h of hands) h.push(deck.pop());
  hands.forEach(sortHand);
  // lá đầu tiên luôn là lá số
  let i = deck.findIndex((c) => !isWild(c) && /\d/.test(valOf(c)));
  const top = deck.splice(i, 1)[0];
  const first = Math.floor(ctx.rng() * n);
  ctx.log(`Lật lá đầu: ${cardName(top)}. ${ctx.name(first)} đi trước.`, 'phase');
  return {
    n, cfg: { ...cfg }, deck, discard: [top], hands, turn: first, dir: 1, color: colorOf(top),
    pending: 0, pendingType: null, drew: null, one: null, last: { t: 'start', seat: -1, card: top }, seq: 0, out: false,
  };
}
const next = (s, from = s.turn, k = 1) => (((from + s.dir * k) % s.n) + s.n) % s.n;
function drawCards(s, seat, k) {
  const got = [];
  for (let i = 0; i < k; i++) {
    if (!s.deck.length) {
      if (s.discard.length <= 1) break;
      const top = s.discard.pop();
      s.deck = shuffle(s.discard, Math.random);
      s.discard = [top];
    }
    got.push(s.deck.pop());
  }
  s.hands[seat].push(...got);
  sortHand(s.hands[seat]);
  return got;
}
// lượt người khác hành động -> đóng cửa sổ bắt lỗi "Một lá!"
function closeOne(s, seat) { if (s.one && s.one.seat !== seat) s.one = null; }

export function act(s, seat, a, ctx) {
  const t = a.t;
  if (t === 'one') {
    if (s.hands[seat].length === 2 && s.turn === seat && !s.drew) { s.callNext = seat; s.seq++; return null; }
    if (s.one && s.one.seat === seat && !s.one.called) { s.one.called = true; s.seq++; ctx.log(`${ctx.name(seat)} hô "Một lá!" 📣`, 'info'); ctx.fx({ type: 'one', seat }); return null; }
    return 'Chưa phải lúc hô.';
  }
  if (t === 'catch') {
    if (!s.one || s.one.called || s.one.seat === seat) return 'Không bắt được ai.';
    const v = s.one.seat;
    drawCards(s, v, 2);
    s.one = null;
    s.seq++;
    ctx.log(`${ctx.name(seat)} bắt lỗi ${ctx.name(v)} quên hô "Một lá!" — bốc phạt 2 lá!`, 'bad');
    ctx.fx({ type: 'caught', seat, victim: v });
    return null;
  }
  if (s.turn !== seat) return 'Chưa tới lượt bạn.';
  const hand = s.hands[seat];
  if (t === 'play') {
    const i = hand.indexOf(a.card);
    if (i < 0) return 'Bạn không có lá này.';
    if (s.drew && a.card !== s.drew) return 'Chỉ được đánh lá vừa bốc (hoặc bỏ lượt).';
    if (!canPlay(s, a.card)) return 'Lá này không đánh được.';
    if (isWild(a.card) && !COLORS.includes(a.color)) return 'Hãy chọn màu.';
    closeOne(s, seat);
    hand.splice(i, 1);
    const c = a.card;
    s.discard.push(c);
    s.color = isWild(c) ? a.color : colorOf(c);
    s.drew = null;
    s.last = { t: 'play', seat, card: c, color: s.color };
    s.seq++;
    const called = a.one || s.callNext === seat;
    s.callNext = null;
    ctx.fx({ type: 'play', seat, card: c, color: s.color });
    if (!hand.length) return win(s, seat, ctx);
    if (hand.length === 1) { s.one = { seat, called: !!called }; if (called) { ctx.log(`${ctx.name(seat)} hô "Một lá!" 📣`, 'info'); ctx.fx({ type: 'one', seat }); } }
    const v = valOf(c);
    let skip = false;
    if (v === 'v') { s.dir = -s.dir; if (s.n === 2) skip = true; }
    if (v === 's') skip = true;
    if (v === 'd' || c === 'f') {
      const k = v === 'd' ? 2 : 4;
      if (s.cfg.stack) { s.pending += k; s.pendingType = v === 'd' && s.pendingType !== 'f' ? 'd' : 'f'; }
      else { const vic = next(s); drawCards(s, vic, k); ctx.log(`${ctx.name(vic)} bốc ${k} lá và mất lượt.`, 'bad'); skip = true; }
    }
    s.turn = next(s, s.turn, skip ? 2 : 1);
    return null;
  }
  if (t === 'draw') {
    if (s.drew) return 'Bạn đã bốc rồi — đánh lá vừa bốc hoặc bỏ lượt.';
    closeOne(s, seat);
    s.callNext = null;
    if (s.pending) {
      const k = s.pending;
      drawCards(s, seat, k);
      ctx.log(`${ctx.name(seat)} bốc ${k} lá!`, 'bad');
      ctx.fx({ type: 'draw', seat, n: k });
      s.pending = 0; s.pendingType = null;
      s.last = { t: 'draw', seat, n: k };
      s.turn = next(s);
      s.seq++;
      return null;
    }
    let got = drawCards(s, seat, 1), n = got.length;
    if (s.cfg.drawUntil) while (got.length && !canPlay(s, got[0]) && n < 30) { got = drawCards(s, seat, 1); n += got.length; }
    s.last = { t: 'draw', seat, n };
    s.seq++;
    ctx.fx({ type: 'draw', seat, n });
    if (got.length && canPlay(s, got[0])) s.drew = got[0];
    else s.turn = next(s);
    return null;
  }
  if (t === 'pass') {
    if (!s.drew) return 'Bạn phải bốc bài trước.';
    s.drew = null;
    s.turn = next(s);
    s.seq++;
    return null;
  }
  return 'Hành động không rõ.';
}
function win(s, seat, ctx) {
  s.out = true;
  const score = Array(s.n).fill(0);
  score[seat] = s.hands.reduce((a, h, i) => a + (i === seat ? 0 : h.reduce((x, c) => x + points(c), 0)), 0);
  const rank = [...Array(s.n).keys()].sort((a, b) => s.hands[a].length - s.hands[b].length);
  ctx.finish({ winners: [seat], rank, score, text: `Hết bài trước, ăn ${score[seat]} điểm từ bài còn lại của mọi người.` });
  return null;
}

export function auto(s, seat, ctx) {
  if (s.turn !== seat) return;
  const hand = s.hands[seat];
  const pick = s.drew ? (canPlay(s, s.drew) ? s.drew : null) : hand.find((c) => !isWild(c) && canPlay(s, c)) || hand.find((c) => canPlay(s, c));
  if (pick) {
    const cnt = {};
    for (const c of hand) if (!isWild(c)) cnt[c[0]] = (cnt[c[0]] || 0) + 1;
    const color = Object.entries(cnt).sort((a, b) => b[1] - a[1])[0]?.[0] || 'r';
    act(s, seat, { t: 'play', card: pick, color, one: true }, ctx);
  } else if (s.drew) act(s, seat, { t: 'pass' }, ctx);
  else { act(s, seat, { t: 'draw' }, ctx); if (s.turn === seat && s.drew) auto(s, seat, ctx); }
}
export const turn = (s) => (s.out ? -1 : s.turn);
export const turnKey = (s) => `${s.turn}:${s.seq}`;
export function view(s, seat) {
  return {
    n: s.n, cfg: s.cfg, turn: s.turn, dir: s.dir, color: s.color, top: s.discard[s.discard.length - 1], under: s.discard.slice(-4, -1),
    deck: s.deck.length, counts: s.hands.map((h) => h.length), pending: s.pending, pendingType: s.pendingType,
    hand: seat >= 0 ? s.hands[seat] : null, all: seat === -2 ? s.hands : null,
    drew: seat >= 0 && s.turn === seat ? s.drew : s.drew ? '?' : null, one: s.one, callNext: s.callNext === seat, last: s.last, seq: s.seq,
  };
}
export const LOGIC = { minSeats: 2, maxSeats: 10, defaultConfig, cleanConfig, setup, act, auto, turn, turnKey, view };
