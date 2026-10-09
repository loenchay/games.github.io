// Luật "Cờ Tỷ Phú": 2–6 người, đổ 2 xúc xắc đi quanh bàn, mua đất, thu tiền thuê, xây nhà, cầm cố, đổi chác.
// Người cuối cùng còn trụ lại (không phá sản) thắng — hoặc hết giờ thì ai giàu nhất thắng.
import { BOARD, GROUPS, JAIL, BUYABLE, CHANCE, CHEST } from './data.js';

const shuffle = (a, rng) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const money = (n) => `$${n}`;
export const GROUP_SQ = {};
BOARD.forEach((b, i) => { if (b.type === 'prop') (GROUP_SQ[b.g] ||= []).push(i); });
const RAILS = BOARD.map((b, i) => (b.type === 'rail' ? i : -1)).filter((i) => i >= 0);
const UTILS = BOARD.map((b, i) => (b.type === 'util' ? i : -1)).filter((i) => i >= 0);

export const defaultConfig = { cash: 1500, limit: 45, pot: false };
export function cleanConfig(c, p) {
  const o = {};
  if ([1000, 1500, 2000].includes(Number(p.cash))) o.cash = Number(p.cash);
  if ([0, 20, 30, 45, 60, 90].includes(Number(p.limit))) o.limit = Number(p.limit);
  if ('pot' in p) o.pot = !!p.pot;
  return o;
}

export function setup(n, cfg, ctx) {
  const first = Math.floor(ctx.rng() * n);
  ctx.log(`Mỗi người nhận ${money(cfg.cash)}. ${ctx.name(first)} đổ trước.`, 'phase');
  return {
    n, cfg: { ...cfg }, pos: Array(n).fill(0), cash: Array(n).fill(cfg.cash), jail: Array(n).fill(0), free: Array(n).fill(0), out: Array(n).fill(false),
    own: {}, houses: {}, mort: {}, turn: first, phase: 'roll', dice: [0, 0], dbl: 0, offer: -1, debt: null, card: null, trade: null, pot: 0,
    chance: shuffle([...CHANCE.keys()], ctx.rng), chest: shuffle([...CHEST.keys()], ctx.rng),
    startedAt: ctx.now(), endsAt: cfg.limit ? ctx.now() + cfg.limit * 60000 : 0, seq: 0, last: null, done: false,
  };
}

// ---------- tiện ích ----------
const active = (s) => [...Array(s.n).keys()].filter((i) => !s.out[i]);
export const ownsGroup = (s, seat, g) => GROUP_SQ[g].every((q) => s.own[q] === seat);
export function rentOf(s, sq, diceSum, mult = 1) {
  const b = BOARD[sq], o = s.own[sq];
  if (o === undefined || s.mort[sq]) return 0;
  if (b.type === 'prop') { const h = s.houses[sq] || 0; return h ? b.rent[h] : b.rent[0] * (ownsGroup(s, o, b.g) && GROUP_SQ[b.g].every((q) => !s.mort[q]) ? 2 : 1); }
  if (b.type === 'rail') { const c = RAILS.filter((q) => s.own[q] === o).length; return 25 * 2 ** (c - 1) * mult; }
  if (b.type === 'util') { const c = UTILS.filter((q) => s.own[q] === o).length; return diceSum * (mult === 10 ? 10 : c === 2 ? 10 : 4); }
  return 0;
}
export function worth(s, seat) {
  let w = s.cash[seat];
  for (const [q, o] of Object.entries(s.own)) if (o === seat) { const b = BOARD[q]; w += s.mort[q] ? b.price / 2 : b.price; w += (s.houses[q] || 0) * (b.house || 0); }
  return w;
}
// tiền mặt có thể gom được nếu bán hết nhà + cầm cố hết
export function liquid(s, seat) {
  let w = s.cash[seat];
  for (const [q, o] of Object.entries(s.own)) if (o === seat) { const b = BOARD[q]; w += ((s.houses[q] || 0) * (b.house || 0)) / 2; if (!s.mort[q]) w += b.price / 2; }
  return w;
}
const unmortCost = (sq) => Math.ceil((BOARD[sq].price / 2) * 1.1);

// ---------- di chuyển ----------
function moveTo(s, seat, to, ctx, passGo = true) {
  const from = s.pos[seat];
  if (passGo && to < from) { s.cash[seat] += 200; ctx.log(`${ctx.name(seat)} đi qua Xuất phát, nhận ${money(200)}.`, 'good'); }
  s.pos[seat] = to;
}
function sendJail(s, seat, ctx) {
  s.pos[seat] = JAIL;
  s.jail[seat] = 1;
  s.dbl = 0;
  ctx.log(`${ctx.name(seat)} vào tù! 🚔`, 'bad');
  ctx.fx({ type: 'jail', seat });
}
// trả tiền: to = ghế người nhận | -1 ngân hàng | 'pot' quỹ bãi đỗ xe. Thiếu tiền -> vào trạng thái nợ
function charge(s, seat, amount, to, ctx, why) {
  if (amount <= 0) return true;
  if (s.cash[seat] >= amount) { pay(s, seat, amount, to); return true; }
  s.debt = { to, amount, why };
  s.phase = 'debt';
  ctx.log(`${ctx.name(seat)} thiếu tiền trả ${money(amount)} (${why}) — phải bán nhà / cầm cố hoặc phá sản.`, 'bad');
  return false;
}
function pay(s, seat, amount, to) {
  s.cash[seat] -= amount;
  if (typeof to === 'number' && to >= 0) s.cash[to] += amount;
  else if (to === 'pot' && s.cfg.pot) s.pot += amount;
}
function afterResolve(s, seat) {
  if (s.phase === 'debt' || s.phase === 'buy' || s.out[seat]) return;
  s.phase = s.dbl > 0 && !s.jail[seat] ? 'roll' : 'end';
}

function land(s, seat, ctx, mult = 1) {
  const sq = s.pos[seat], b = BOARD[sq];
  const sum = s.dice[0] + s.dice[1];
  s.card = null;
  if (BUYABLE(sq)) {
    const o = s.own[sq];
    if (o === undefined) { s.offer = sq; s.phase = 'buy'; return; }
    if (o !== seat && !s.out[o]) {
      if (s.mort[sq]) { ctx.log(`${b.name} đang cầm cố — không phải trả tiền thuê.`, 'info'); }
      else {
        const r = rentOf(s, sq, sum, mult);
        ctx.log(`${ctx.name(seat)} trả ${ctx.name(o)} ${money(r)} tiền thuê ${b.name}.`, 'bad');
        ctx.fx({ type: 'rent', seat, to: o, n: r, sq });
        charge(s, seat, r, o, ctx, `thuê ${b.name}`);
      }
    }
  } else if (b.type === 'tax') {
    ctx.log(`${ctx.name(seat)} nộp ${b.name} ${money(b.amount)}.`, 'bad');
    charge(s, seat, b.amount, 'pot', ctx, b.name);
  } else if (b.type === 'gojail') sendJail(s, seat, ctx);
  else if (b.type === 'park') {
    if (s.cfg.pot && s.pot) { s.cash[seat] += s.pot; ctx.log(`${ctx.name(seat)} nhặt được quỹ Bãi đỗ xe ${money(s.pot)}! 🤑`, 'good'); s.pot = 0; }
  } else if (b.type === 'chance' || b.type === 'chest') drawCard(s, seat, b.type, ctx);
  afterResolve(s, seat);
}
function drawCard(s, seat, kind, ctx) {
  const deck = s[kind], list = kind === 'chance' ? CHANCE : CHEST;
  const id = deck.shift();
  const c = list[id];
  if (c.k !== 'free') deck.push(id);
  s.card = { kind, text: c.text, seat };
  ctx.log(`${kind === 'chance' ? '❓ Cơ hội' : '🎁 Khí vận'} — ${ctx.name(seat)}: ${c.text}`, 'info');
  ctx.fx({ type: 'card', seat, kind, text: c.text });
  const others = active(s).filter((i) => i !== seat);
  switch (c.k) {
    case 'goto': moveTo(s, seat, c.to, ctx); land(s, seat, ctx); s.card = { kind, text: c.text, seat }; break;
    case 'back': s.pos[seat] = (s.pos[seat] + 40 - c.n) % 40; land(s, seat, ctx); s.card = { kind, text: c.text, seat }; break;
    case 'rail2': { let q = s.pos[seat]; do q = (q + 1) % 40; while (BOARD[q].type !== 'rail'); moveTo(s, seat, q, ctx); land(s, seat, ctx, 2); s.card = { kind, text: c.text, seat }; break; }
    case 'util10': { let q = s.pos[seat]; do q = (q + 1) % 40; while (BOARD[q].type !== 'util'); moveTo(s, seat, q, ctx); land(s, seat, ctx, 10); s.card = { kind, text: c.text, seat }; break; }
    case 'money': if (c.n > 0) s.cash[seat] += c.n; else charge(s, seat, -c.n, 'pot', ctx, 'thẻ'); break;
    case 'free': s.free[seat]++; break;
    case 'jail': sendJail(s, seat, ctx); break;
    case 'repair': {
      let h = 0, H = 0;
      for (const [q, o] of Object.entries(s.own)) if (o === seat) { const k = s.houses[q] || 0; if (k === 5) H++; else h += k; }
      charge(s, seat, h * c.h + H * c.H, -1, ctx, 'sửa nhà');
      break;
    }
    case 'each':
      if (c.n > 0) for (const o of others) { const g = Math.min(c.n, s.cash[o]); s.cash[o] -= g; s.cash[seat] += g; }
      else {
        const per = -c.n;
        if (s.cash[seat] >= per * others.length) for (const o of others) pay(s, seat, per, o);
        else { s.debt = { to: 'each', amount: per * others.length, per, why: 'thẻ' }; s.phase = 'debt'; ctx.log(`${ctx.name(seat)} thiếu tiền trả thẻ — phải bán nhà / cầm cố hoặc phá sản.`, 'bad'); }
      }
      break;
  }
}

function nextTurn(s, ctx) {
  s.dbl = 0; s.offer = -1; s.card = null; s.trade = null;
  const alive = active(s);
  if (alive.length <= 1) return finishGame(s, ctx, 'last');
  for (let i = 1; i <= s.n; i++) { const t = (s.turn + i) % s.n; if (!s.out[t]) { s.turn = t; break; } }
  s.phase = 'roll';
  s.seq++;
}
function finishGame(s, ctx, why) {
  if (s.done) return;
  s.done = true;
  const alive = active(s);
  const rank = [...Array(s.n).keys()].sort((a, b) => (s.out[a] - s.out[b]) || worth(s, b) - worth(s, a));
  const w = rank[0];
  ctx.finish({ winners: [w], rank, text: why === 'last' ? 'Người cuối cùng chưa phá sản.' : `Giàu nhất khi hết giờ: tài sản ${money(worth(s, w))}.`, score: rank.map(() => 0) });
  void alive;
}
export function tick(s, ctx) { if (!s.done && s.endsAt && ctx.now() >= s.endsAt && s.phase !== 'debt') { ctx.log('⏰ Hết giờ chơi!', 'phase'); finishGame(s, ctx, 'time'); } }
export function endEarly(s, ctx) { finishGame(s, ctx, 'time'); return null; }

// ---------- hành động ----------
function bankrupt(s, seat, ctx) {
  const to = s.debt?.to;
  const cred = typeof to === 'number' && to >= 0 && !s.out[to] ? to : -1;
  for (const [q, o] of Object.entries(s.own)) {
    if (o !== seat) continue;
    if (s.houses[q]) { s.cash[seat] += (s.houses[q] * BOARD[q].house) / 2; delete s.houses[q]; }
    if (cred >= 0) s.own[q] = cred;
    else { delete s.own[q]; delete s.mort[q]; }
  }
  if (cred >= 0) s.cash[cred] += Math.max(0, s.cash[seat]);
  s.cash[seat] = 0;
  s.free[seat] = 0;
  s.out[seat] = true;
  s.debt = null;
  ctx.log(`💀 ${ctx.name(seat)} phá sản!${cred >= 0 ? ` Toàn bộ tài sản về tay ${ctx.name(cred)}.` : ''}`, 'bad');
  ctx.fx({ type: 'bankrupt', seat });
  nextTurn(s, ctx);
}

export function act(s, seat, a, ctx) {
  if (s.done) return 'Ván đã xong.';
  const t = a.t;
  // ----- trả lời đổi chác -----
  if (t === 'accept' || t === 'decline') {
    const tr = s.trade;
    if (!tr || tr.to !== seat) return 'Không có đề nghị nào.';
    s.trade = null; s.seq++;
    if (t === 'decline') { ctx.log(`${ctx.name(seat)} từ chối đổi chác.`, 'info'); return null; }
    const err = tradeValid(s, tr);
    if (err) return err;
    for (const q of tr.give.props) s.own[q] = tr.to;
    for (const q of tr.get.props) s.own[q] = tr.from;
    s.cash[tr.from] += tr.get.cash - tr.give.cash;
    s.cash[tr.to] += tr.give.cash - tr.get.cash;
    ctx.log(`🤝 ${ctx.name(tr.from)} và ${ctx.name(tr.to)} đã đổi chác!`, 'good');
    ctx.fx({ type: 'trade', from: tr.from, to: tr.to });
    return null;
  }
  if (s.turn !== seat) return 'Chưa tới lượt bạn.';
  if (s.trade && t !== 'cancelTrade') return 'Đang chờ trả lời đổi chác.';
  const sq = Number(a.sq);
  switch (t) {
    case 'roll': {
      if (s.phase !== 'roll') return 'Chưa đổ được lúc này.';
      const d = [1 + Math.floor(ctx.rng() * 6), 1 + Math.floor(ctx.rng() * 6)];
      s.dice = d; s.seq++;
      const dbl = d[0] === d[1], sum = d[0] + d[1];
      ctx.fx({ type: 'roll', seat, dice: d });
      if (s.jail[seat]) {
        if (dbl) { s.jail[seat] = 0; ctx.log(`${ctx.name(seat)} đổ đôi ${d[0]}-${d[1]}, ra tù!`, 'good'); s.dbl = 0; }
        else if (s.jail[seat] >= 3) {
          s.jail[seat] = 0;
          ctx.log(`${ctx.name(seat)} ở tù 3 lượt, nộp ${money(50)} để ra.`, 'bad');
          if (!charge(s, seat, 50, 'pot', ctx, 'tiền bảo lãnh')) { s.pendingMove = sum; return null; }
        } else { s.jail[seat]++; ctx.log(`${ctx.name(seat)} đổ ${d[0]}-${d[1]}, vẫn ở trong tù.`, 'info'); s.phase = 'end'; return null; }
        const from = s.pos[seat];
        moveTo(s, seat, (s.pos[seat] + sum) % 40, ctx);
        s.last = { t: 'move', seat, from, to: s.pos[seat] };
        s.dbl = 0;
        land(s, seat, ctx);
        return null;
      }
      if (dbl) s.dbl++; else s.dbl = 0;
      if (s.dbl >= 3) { ctx.log(`${ctx.name(seat)} đổ đôi 3 lần liền — vào tù!`, 'bad'); sendJail(s, seat, ctx); s.phase = 'end'; return null; }
      const from = s.pos[seat];
      moveTo(s, seat, (from + sum) % 40, ctx);
      s.last = { t: 'move', seat, from, to: s.pos[seat] };
      ctx.log(`${ctx.name(seat)} đổ ${d[0]}-${d[1]}${dbl ? ' (đôi!)' : ''} → ${BOARD[s.pos[seat]].name}.`, 'move');
      land(s, seat, ctx);
      return null;
    }
    case 'payJail': {
      if (s.phase !== 'roll' || !s.jail[seat]) return 'Bạn không ở trong tù.';
      if (s.cash[seat] < 50) return 'Không đủ tiền.';
      pay(s, seat, 50, 'pot'); s.jail[seat] = 0; s.seq++;
      ctx.log(`${ctx.name(seat)} nộp ${money(50)} ra tù.`, 'info');
      return null;
    }
    case 'useCard': {
      if (s.phase !== 'roll' || !s.jail[seat] || !s.free[seat]) return 'Không dùng được.';
      s.free[seat]--; s.jail[seat] = 0; s.seq++;
      // trả thẻ về cuối bộ
      const ci = CHANCE.findIndex((c) => c.k === 'free'), hi = CHEST.findIndex((c) => c.k === 'free');
      if (!s.chance.includes(ci)) s.chance.push(ci); else if (!s.chest.includes(hi)) s.chest.push(hi);
      ctx.log(`${ctx.name(seat)} dùng thẻ ra tù miễn phí.`, 'info');
      return null;
    }
    case 'buy': {
      if (s.phase !== 'buy') return 'Không có gì để mua.';
      const b = BOARD[s.offer];
      if (s.cash[seat] < b.price) return 'Không đủ tiền mua.';
      s.cash[seat] -= b.price;
      s.own[s.offer] = seat;
      ctx.log(`${ctx.name(seat)} mua ${b.name} giá ${money(b.price)}. 🏠`, 'good');
      ctx.fx({ type: 'buy', seat, sq: s.offer });
      s.offer = -1; s.seq++;
      afterResolve(s, seat);
      if (s.phase === 'buy') s.phase = s.dbl > 0 ? 'roll' : 'end';
      return null;
    }
    case 'skip': {
      if (s.phase !== 'buy') return 'Không thể.';
      ctx.log(`${ctx.name(seat)} không mua ${BOARD[s.offer].name}.`, 'info');
      s.offer = -1; s.seq++;
      s.phase = s.dbl > 0 && !s.jail[seat] ? 'roll' : 'end';
      return null;
    }
    case 'end': {
      if (s.phase !== 'end') return s.phase === 'roll' ? 'Bạn còn lượt đổ.' : 'Chưa kết thúc lượt được.';
      nextTurn(s, ctx);
      return null;
    }
    case 'build': case 'sell': case 'mort': case 'unmort': {
      if (!['roll', 'end', 'debt'].includes(s.phase)) return 'Làm việc này sau khi xong quyết định hiện tại.';
      const err = asset(s, seat, t, sq, ctx);
      if (!err) s.seq++;
      return err;
    }
    case 'payDebt': {
      if (s.phase !== 'debt') return 'Không có nợ.';
      const d = s.debt;
      if (s.cash[seat] < d.amount) return `Chưa đủ ${money(d.amount)}. Hãy bán nhà / cầm cố thêm.`;
      if (d.to === 'each') for (const o of active(s).filter((i) => i !== seat)) pay(s, seat, d.per, o);
      else pay(s, seat, d.amount, d.to);
      ctx.log(`${ctx.name(seat)} đã trả nợ ${money(d.amount)}.`, 'info');
      s.debt = null; s.phase = 'end'; s.seq++;
      if (s.pendingMove) { const m = s.pendingMove; s.pendingMove = 0; moveTo(s, seat, (s.pos[seat] + m) % 40, ctx); land(s, seat, ctx); return null; }
      s.phase = s.dbl > 0 && !s.jail[seat] ? 'roll' : 'end';
      return null;
    }
    case 'bankrupt': {
      if (s.phase !== 'debt') return 'Bạn chưa cần phá sản.';
      bankrupt(s, seat, ctx);
      return null;
    }
    case 'offer': {
      if (!['roll', 'end'].includes(s.phase)) return 'Chỉ đổi chác lúc đầu hoặc cuối lượt.';
      const to = Number(a.to);
      if (!(to >= 0 && to < s.n) || to === seat || s.out[to]) return 'Chọn người để đổi.';
      const norm = (x) => ({ props: [...new Set((x?.props || []).map(Number))].filter((q) => BUYABLE(q)), cash: Math.max(0, Math.floor(Number(x?.cash) || 0)) });
      const tr = { from: seat, to, give: norm(a.give), get: norm(a.get) };
      if (!tr.give.props.length && !tr.get.props.length && !tr.give.cash && !tr.get.cash) return 'Đề nghị đang trống.';
      const err = tradeValid(s, tr);
      if (err) return err;
      s.trade = tr; s.seq++;
      ctx.log(`${ctx.name(seat)} đề nghị đổi chác với ${ctx.name(to)}.`, 'info');
      ctx.fx({ type: 'offer', from: seat, to });
      return null;
    }
    case 'cancelTrade': { if (s.trade?.from === seat) { s.trade = null; s.seq++; } return null; }
  }
  return 'Hành động không rõ.';
}
function tradeValid(s, tr) {
  for (const q of tr.give.props) if (s.own[q] !== tr.from) return 'Có ô không còn thuộc người đưa.';
  for (const q of tr.get.props) if (s.own[q] !== tr.to) return 'Có ô không còn thuộc người nhận.';
  for (const q of [...tr.give.props, ...tr.get.props]) { const b = BOARD[q]; if (b.type === 'prop' && GROUP_SQ[b.g].some((x) => s.houses[x])) return `Phải bán hết nhà nhóm ${GROUPS[b.g].name} trước khi đổi.`; }
  if (s.cash[tr.from] < tr.give.cash) return 'Người đề nghị không đủ tiền.';
  if (s.cash[tr.to] < tr.get.cash) return 'Người nhận không đủ tiền.';
  return null;
}
function asset(s, seat, t, sq, ctx) {
  const b = BOARD[sq];
  if (!b || s.own[sq] !== seat) return 'Ô này không phải của bạn.';
  const grp = b.type === 'prop' ? GROUP_SQ[b.g] : [sq];
  const h = s.houses[sq] || 0;
  if (t === 'build') {
    if (s.phase === 'debt') return 'Đang nợ, không xây được.';
    if (b.type !== 'prop') return 'Chỉ xây nhà trên đất.';
    if (!ownsGroup(s, seat, b.g)) return `Cần sở hữu cả nhóm ${GROUPS[b.g].name}.`;
    if (grp.some((q) => s.mort[q])) return 'Nhóm này có ô đang cầm cố.';
    if (h >= 5) return 'Đã có khách sạn.';
    if (grp.some((q) => (s.houses[q] || 0) < h)) return 'Phải xây đều các ô trong nhóm.';
    if (s.cash[seat] < b.house) return 'Không đủ tiền xây.';
    s.cash[seat] -= b.house; s.houses[sq] = h + 1;
    ctx.log(`${ctx.name(seat)} xây ${h + 1 === 5 ? 'khách sạn 🏨' : `nhà thứ ${h + 1} 🏠`} ở ${b.name}.`, 'good');
    ctx.fx({ type: 'build', seat, sq });
    return null;
  }
  if (t === 'sell') {
    if (!h) return 'Không có nhà để bán.';
    if (grp.some((q) => (s.houses[q] || 0) > h)) return 'Phải bán đều các ô trong nhóm.';
    s.houses[sq] = h - 1; if (!s.houses[sq]) delete s.houses[sq];
    s.cash[seat] += b.house / 2;
    ctx.log(`${ctx.name(seat)} bán 1 nhà ở ${b.name} được ${money(b.house / 2)}.`, 'info');
    return null;
  }
  if (t === 'mort') {
    if (s.mort[sq]) return 'Đã cầm cố rồi.';
    if (grp.some((q) => s.houses[q])) return 'Bán hết nhà trong nhóm trước.';
    s.mort[sq] = true; s.cash[seat] += b.price / 2;
    ctx.log(`${ctx.name(seat)} cầm cố ${b.name} lấy ${money(b.price / 2)}.`, 'info');
    return null;
  }
  if (t === 'unmort') {
    if (s.phase === 'debt') return 'Đang nợ.';
    if (!s.mort[sq]) return 'Ô này không cầm cố.';
    const c = unmortCost(sq);
    if (s.cash[seat] < c) return `Cần ${money(c)} để chuộc.`;
    s.cash[seat] -= c; delete s.mort[sq];
    ctx.log(`${ctx.name(seat)} chuộc lại ${b.name} (${money(c)}).`, 'info');
    return null;
  }
  return 'Không rõ.';
}

export function auto(s, seat, ctx) {
  if (s.done) return;
  if (s.trade && s.trade.to === seat) return void act(s, seat, { t: 'decline' }, ctx);
  if (s.turn !== seat) return;
  if (s.trade) return void act(s, seat, { t: 'cancelTrade' }, ctx);
  if (s.phase === 'roll') { if (s.jail[seat] && s.free[seat]) act(s, seat, { t: 'useCard' }, ctx); act(s, seat, { t: 'roll' }, ctx); }
  else if (s.phase === 'buy') act(s, seat, { t: s.cash[seat] - BOARD[s.offer].price >= 150 ? 'buy' : 'skip' }, ctx);
  else if (s.phase === 'debt') {
    // gom tiền: bán nhà rồi cầm cố
    let guard = 60;
    while (s.cash[seat] < s.debt.amount && guard--) {
      const mine = Object.keys(s.own).map(Number).filter((q) => s.own[q] === seat);
      const withH = mine.filter((q) => s.houses[q]).sort((a, b) => (s.houses[b] || 0) - (s.houses[a] || 0));
      if (withH.length) { asset(s, seat, 'sell', withH[0], ctx); continue; }
      const m = mine.find((q) => !s.mort[q]);
      if (m === undefined) break;
      asset(s, seat, 'mort', m, ctx);
    }
    act(s, seat, { t: s.cash[seat] >= s.debt.amount ? 'payDebt' : 'bankrupt' }, ctx);
  } else if (s.phase === 'end') {
    // còn dư tiền thì xây thêm nhà (giữ lại ít nhất 300)
    let guard = 20;
    while (guard--) {
      const can = Object.keys(s.own).map(Number).filter((q) => s.own[q] === seat && BOARD[q].type === 'prop' && s.cash[seat] - BOARD[q].house >= 300);
      const q = can.find((x) => !asset({ ...s, cash: [...s.cash], houses: { ...s.houses } }, seat, 'build', x, { log() {}, fx() {}, name: () => '' }));
      if (q === undefined) break;
      asset(s, seat, 'build', q, ctx);
    }
    act(s, seat, { t: 'end' }, ctx);
  }
}
export const turn = (s) => (s.done ? -1 : s.trade ? s.trade.to : s.turn);
export const turnKey = (s) => `${s.turn}:${s.phase}:${s.seq}:${s.trade ? 't' : ''}`;
export function view(s) {
  const { chance, chest, ...rest } = s;
  void chance; void chest;
  return { ...rest, worth: [...Array(s.n).keys()].map((i) => worth(s, i)) };
}
export const LOGIC = { minSeats: 2, maxSeats: 6, defaultConfig, cleanConfig, setup, act, auto, turn, turnKey, view, tick, endEarly };
