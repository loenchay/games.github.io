// Giao diện Cờ Tỷ Phú: bàn 40 ô (lưới 11×11), quân cờ trượt từng ô, bảng tài sản, đổi chác.
import { BOARD, GROUPS, JAIL, BUYABLE } from './data.js';
import { money, GROUP_SQ, rentOf, ownsGroup } from './logic.js';

export const PCOL = ['#ff4d5e', '#3b82f6', '#2fbf71', '#ffc43d', '#9775fa', '#ff9f43'];
const PIP = { 1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8] };
const die = (n, cls = '') => `<div class="tp-die ${cls}">${Array.from({ length: 9 }, (_, i) => `<i class="${PIP[n]?.includes(i) ? 'on' : ''}"></i>`).join('')}</div>`;
const ICON = { go: '🏁', chance: '❓', chest: '🎁', tax: '💸', rail: '🚆', util: '💡', jail: '🚔', park: '🅿️', gojail: '👮' };
// vị trí ô i trên lưới (hàng, cột 1..11)
export function rc(i) {
  if (i <= 10) return [11, 11 - i];
  if (i <= 20) return [11 - (i - 10), 1];
  if (i <= 30) return [1, 1 + (i - 20)];
  return [1 + (i - 30), 11];
}
const edge = (k) => (k === 1 ? 0.8 : k === 11 ? 11.4 : 1.6 + (k - 2) + 0.5);
export const center = (i) => { const [r, c] = rc(i); return [(edge(r) / 12.2) * 100, (edge(c) / 12.2) * 100]; };
const side = (i) => (i < 10 ? 'b' : i < 20 ? 'l' : i < 30 ? 't' : 'r');

function tileHTML(i) {
  const b = BOARD[i], [r, c] = rc(i);
  const corner = i % 10 === 0;
  const band = b.type === 'prop' ? `<i class="band" style="background:${GROUPS[b.g].color}"></i>` : '';
  const ic = b.type === 'prop' ? '' : `<span class="ic">${b.type === 'util' ? (b.name.includes('nước') ? '🚰' : '💡') : b.type === 'rail' ? (b.name.includes('Sân bay') ? '✈️' : '🚆') : ICON[b.type] || ''}</span>`;
  const price = b.price ? `<span class="pr">${money(b.price)}</span>` : b.amount ? `<span class="pr">${money(b.amount)}</span>` : '';
  return `<div class="tp-tile s-${side(i)} ${corner ? 'corner' : ''} t-${b.type}" style="grid-row:${r};grid-column:${c}" data-sq="${i}">${band}${ic}<span class="nm">${b.short}</span>${price}<span class="hs"></span></div>`;
}

export const view = {
  phaseLabel(ctx) { const g = ctx.game; return g ? `Lượt ${ctx.player(g.turn)?.name ?? ''}` : ''; },
  render(el, ctx) {
    const g = ctx.game, me = ctx.mySeat, pub = ctx.pub, L = ctx.local;
    this.ctx = ctx;
    if (!el.dataset.init) {
      el.dataset.init = '1';
      L.pos = {};
      el.innerHTML = `<div class="panel tp-boardp"><div class="tp-board" id="tpBoard">${BOARD.map((_, i) => tileHTML(i)).join('')}
          <div class="tp-center"><div class="tp-logo">CỜ <b>TỶ PHÚ</b></div><div class="tp-act" id="tpAct"></div></div>
          <div class="tp-tokens" id="tpTokens"></div></div></div>
        <div class="panel tp-players" id="tpPlayers"></div>
        <div class="panel tp-assets" id="tpAssets"></div>`;
      el.addEventListener('click', (e) => {
        const c = this.ctx;
        const a = e.target.closest('[data-a]');
        if (a) {
          const d = a.dataset;
          if (d.a === 'trade') return this.tradeModal(c);
          if (d.a === 'viewTrade') return;
          return c.act({ t: d.a, sq: d.sq !== undefined ? Number(d.sq) : undefined });
        }
        const tile = e.target.closest('[data-sq]');
        if (tile) this.info(Number(tile.dataset.sq), c);
      });
    }
    const board = el.querySelector('#tpBoard');
    // chủ sở hữu, nhà, cầm cố
    BOARD.forEach((b, i) => {
      if (!BUYABLE(i)) return;
      const t = board.querySelector(`[data-sq="${i}"]`);
      const o = g.own[i];
      t.style.setProperty('--own', o !== undefined ? PCOL[o] : 'transparent');
      t.classList.toggle('owned', o !== undefined);
      t.classList.toggle('mort', !!g.mort[i]);
      const h = g.houses[i] || 0;
      t.querySelector('.hs').innerHTML = h === 5 ? '🏨' : '🏠'.repeat(h);
    });
    board.querySelectorAll('.tp-tile.land').forEach((x) => x.classList.remove('land'));
    // quân cờ
    const tk = el.querySelector('#tpTokens');
    const bySq = {};
    for (let s = 0; s < g.n; s++) if (!g.out[s]) (bySq[g.pos[s]] ||= []).push(s);
    for (let s = 0; s < g.n; s++) {
      const id = 'tp' + s;
      let t = tk.querySelector('#' + id);
      const p = ctx.player(s);
      if (!t) { t = document.createElement('div'); t.id = id; t.className = 'tp-tok'; t.style.setProperty('--pc', PCOL[s]); t.innerHTML = p?.av?.e || '●'; tk.appendChild(t); L.pos[id] = g.pos[s]; this.place(t, g.pos[s], 0, 1); }
      t.hidden = g.out[s];
      t.classList.toggle('turn', s === g.turn);
      t.classList.toggle('jail', !!g.jail[s]);
      const here = bySq[g.pos[s]] || [s], idx = here.indexOf(s);
      const was = L.pos[id];
      if (was !== g.pos[s]) {
        L.pos[id] = g.pos[s];
        clearTimeout(t._tm);
        const walk = g.last?.t === 'move' && g.last.seat === s && g.last.to === g.pos[s] && g.last.from === was;
        if (walk) {
          let q = was;
          t._anim = true;
          const step = () => { q = (q + 1) % 40; this.place(t, q, 0, 1); t.classList.add('hop'); setTimeout(() => t.classList.remove('hop'), 110); if (q !== g.pos[s]) t._tm = setTimeout(step, 140); else { t._anim = false; this.place(t, q, idx, here.length); board.querySelector(`[data-sq="${q}"]`)?.classList.add('land'); } };
          step();
        } else { t._anim = false; this.place(t, g.pos[s], idx, here.length); }
      } else if (!t._anim) this.place(t, g.pos[s], idx, here.length);
    }
    this.renderAct(el, ctx);
    this.renderPlayers(el, ctx);
    this.renderAssets(el, ctx);
    L.seq = g.seq;
  },
  place(t, sq, idx, n) {
    const [y, x] = center(sq);
    const off = n > 1 ? [[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4], [0, -2], [0, 2]][idx] || [0, 0] : [0, 0];
    t.style.left = `calc(${x}% + ${off[0]}%)`;
    t.style.top = `calc(${y}% + ${off[1]}%)`;
  },
  renderAct(el, ctx) {
    const g = ctx.game, me = ctx.mySeat, pub = ctx.pub, L = ctx.local;
    const box = el.querySelector('#tpAct');
    const tp = ctx.player(g.turn), myTurn = me >= 0 && g.turn === me && pub.phase === 'play';
    const fresh = L.seq !== g.seq && g.last?.t === 'move';
    let h = `<div class="tp-dice">${die(g.dice[0] || 1, fresh ? 'roll' : g.dice[0] ? '' : 'idle')}${die(g.dice[1] || 1, fresh ? 'roll' : g.dice[1] ? '' : 'idle')}</div>`;
    h += `<div class="tp-who" style="--pc:${PCOL[g.turn]}">${ctx.avatarHTML(tp, 'sm')}<b>${ctx.esc(tp?.name ?? '')}</b>${g.jail[g.turn] ? ' <span class="tag">🚔 trong tù</span>' : ''}</div>`;
    if (g.card) h += `<div class="tp-card ${g.card.kind}"><b>${g.card.kind === 'chance' ? '❓ Cơ hội' : '🎁 Khí vận'}</b><span>${ctx.esc(g.card.text)}</span></div>`;
    const btn = (a, label, cls = '', extra = '') => `<button class="btn ${cls}" data-a="${a}" ${extra}>${label}</button>`;
    let row = '';
    if (pub.phase !== 'play') row = '<span class="muted">🏁 Ván đã xong.</span>';
    else if (g.trade) {
      const tr = g.trade;
      const desc = this.tradeText(tr, ctx);
      if (tr.to === me) row = `<div class="tp-trade"><b>🤝 ${ctx.esc(ctx.player(tr.from)?.name)} muốn đổi chác với bạn:</b>${desc}</div>${btn('accept', '✅ Đồng ý', 'primary')}${btn('decline', '❌ Từ chối')}`;
      else if (tr.from === me) row = `<div class="tp-trade"><b>Đang chờ ${ctx.esc(ctx.player(tr.to)?.name)} trả lời...</b>${desc}</div>${btn('cancelTrade', 'Huỷ đề nghị')}`;
      else row = `<div class="tp-trade"><b>🤝 ${ctx.esc(ctx.player(tr.from)?.name)} đề nghị đổi chác với ${ctx.esc(ctx.player(tr.to)?.name)}</b>${desc}</div>`;
    } else if (myTurn) {
      if (g.phase === 'roll') {
        row = btn('roll', g.jail[me] ? '🎲 Đổ đôi để ra tù' : g.dbl ? '🎲 Đổ tiếp (đôi!)' : '🎲 Đổ xúc xắc', 'primary big');
        if (g.jail[me]) row += btn('payJail', `Nộp ${money(50)} ra tù`) + (g.free[me] ? btn('useCard', `Dùng thẻ ra tù (${g.free[me]})`) : '');
        row += btn('trade', '🤝 Đổi chác', 'sm');
      } else if (g.phase === 'buy') {
        const b = BOARD[g.offer];
        row = `<div class="tp-q">Mua <b>${b.name}</b> giá <b>${money(b.price)}</b>?</div>${btn('buy', `🏠 Mua (${money(b.price)})`, 'primary', g.cash[me] < b.price ? 'disabled' : '')}${btn('skip', 'Bỏ qua')}`;
      } else if (g.phase === 'debt') {
        row = `<div class="tp-q warn">Bạn đang nợ <b>${money(g.debt.amount)}</b> (${ctx.esc(g.debt.why)}). Bán nhà / cầm cố ở bảng tài sản bên dưới để gom tiền.</div>${btn('payDebt', `💵 Trả nợ`, 'primary', g.cash[me] < g.debt.amount ? 'disabled' : '')}${btn('bankrupt', '💀 Phá sản', 'danger')}`;
      } else if (g.phase === 'end') row = btn('end', 'Kết thúc lượt ▶', 'primary big') + btn('trade', '🤝 Đổi chác', 'sm');
    } else {
      const what = { roll: 'đang đổ xúc xắc', buy: `đang cân nhắc mua ${BOARD[g.offer]?.name ?? ''}`, debt: 'đang xoay tiền trả nợ', end: 'sắp hết lượt' }[g.phase] || '';
      row = `<span class="muted">⏳ ${ctx.esc(tp?.name ?? '')} ${what}...</span>`;
    }
    const left = g.endsAt ? Math.max(0, g.endsAt - Date.now()) : 0;
    h += `<div class="tp-btns">${row}</div>${g.endsAt && pub.phase === 'play' ? `<div class="muted tp-limit">⏰ Còn khoảng ${Math.ceil(left / 60000)} phút${g.pot ? ` · Quỹ đỗ xe ${money(g.pot)}` : ''}</div>` : g.pot ? `<div class="muted tp-limit">🅿️ Quỹ đỗ xe ${money(g.pot)}</div>` : ''}`;
    box.innerHTML = h;
  },
  tradeText(tr, ctx) {
    const list = (x) => [...x.props.map((q) => `<span class="tp-chip" style="--gc:${BOARD[q].type === 'prop' ? GROUPS[BOARD[q].g].color : '#aaa'}">${BOARD[q].short}</span>`), x.cash ? `<span class="tp-chip cash">${money(x.cash)}</span>` : ''].join('') || '<span class="muted">không có gì</span>';
    return `<div class="tp-tr"><div><small>${ctx.esc(ctx.player(tr.from)?.name)} đưa</small>${list(tr.give)}</div><div><small>${ctx.esc(ctx.player(tr.to)?.name)} đưa</small>${list(tr.get)}</div></div>`;
  },
  renderPlayers(el, ctx) {
    const g = ctx.game, me = ctx.mySeat;
    el.querySelector('#tpPlayers').innerHTML = [...Array(g.n).keys()].map((s) => {
      const p = ctx.player(s);
      const props = Object.keys(g.own).map(Number).filter((q) => g.own[q] === s).sort((a, b) => a - b);
      return `<div class="tp-pl ${s === g.turn ? 'turn' : ''} ${g.out[s] ? 'out' : ''} ${p && !p.connected ? 'offline' : ''}" style="--pc:${PCOL[s]}">
        <div class="tp-plh">${ctx.avatarHTML(p, 'sm')}<b>${ctx.esc(p?.name ?? '?')}${s === me ? ' (bạn)' : ''}</b>${g.out[s] ? '<span class="tag">💀 Phá sản</span>' : `<span class="tp-cash">${money(g.cash[s])}</span>`}</div>
        <div class="tp-plm"><span class="muted">Tài sản ${money(g.worth[s])}</span>${g.jail[s] ? '<span class="tag">🚔 Tù</span>' : ''}${g.free[s] ? `<span class="tag">🎫×${g.free[s]}</span>` : ''}</div>
        <div class="tp-props">${props.map((q) => `<span class="tp-chip ${g.mort[q] ? 'mort' : ''}" data-sq="${q}" style="--gc:${BOARD[q].type === 'prop' ? GROUPS[BOARD[q].g].color : '#bbb'}">${BOARD[q].short}${g.houses[q] ? ` ${g.houses[q] === 5 ? '🏨' : g.houses[q] + '🏠'}` : ''}</span>`).join('')}</div>
      </div>`;
    }).join('');
  },
  renderAssets(el, ctx) {
    const g = ctx.game, me = ctx.mySeat, box = el.querySelector('#tpAssets');
    if (me < 0 || g.out[me] || ctx.pub.phase !== 'play') { box.hidden = true; return; }
    box.hidden = false;
    const mine = Object.keys(g.own).map(Number).filter((q) => g.own[q] === me).sort((a, b) => a - b);
    const can = g.turn === me && ['roll', 'end', 'debt'].includes(g.phase) && !g.trade;
    if (!mine.length) { box.innerHTML = '<div class="ml-head"><b>🏘️ Tài sản của bạn</b></div><div class="muted">Chưa có ô nào — đi vào ô đất trống để mua nhé.</div>'; return; }
    box.innerHTML = `<div class="ml-head"><b>🏘️ Tài sản của bạn</b><span class="muted">${can ? 'Xây nhà khi có đủ bộ màu · cầm cố lấy nửa giá' : 'Chỉ chỉnh được trong lượt của bạn'}</span></div>
      <div class="tp-alist">${mine.map((q) => {
        const b = BOARD[q], h = g.houses[q] || 0, full = b.type === 'prop' && ownsGroup(g, me, b.g);
        return `<div class="tp-arow ${g.mort[q] ? 'mort' : ''}"><span class="tp-chip" data-sq="${q}" style="--gc:${b.type === 'prop' ? GROUPS[b.g].color : '#bbb'}">${b.name}</span>
          <span class="muted">${g.mort[q] ? 'Đang cầm cố' : h === 5 ? '🏨 Khách sạn' : h ? `${h} 🏠` : full ? 'Đủ bộ!' : ''}</span>
          <span class="tp-abtn">${b.type === 'prop' ? `<button class="btn sm" data-a="build" data-sq="${q}" ${can && full && h < 5 && !g.mort[q] && g.phase !== 'debt' ? '' : 'disabled'} title="Xây (${money(b.house)})">＋🏠</button><button class="btn sm" data-a="sell" data-sq="${q}" ${can && h ? '' : 'disabled'} title="Bán nhà (${money(b.house / 2)})">－🏠</button>` : ''}
          ${g.mort[q] ? `<button class="btn sm" data-a="unmort" data-sq="${q}" ${can && g.phase !== 'debt' ? '' : 'disabled'}>Chuộc</button>` : `<button class="btn sm" data-a="mort" data-sq="${q}" ${can && !(b.type === 'prop' && GROUP_SQ[b.g].some((x) => g.houses[x])) ? '' : 'disabled'}>Cầm cố +${money(b.price / 2)}</button>`}</span></div>`;
      }).join('')}</div>`;
  },
  info(q, ctx) {
    const g = ctx.game, b = BOARD[q];
    let body = '';
    if (b.type === 'prop') body = `<table class="tp-rent"><tr><td>Tiền thuê đất trống</td><td>${money(b.rent[0])} (×2 khi đủ bộ)</td></tr>${[1, 2, 3, 4].map((k) => `<tr><td>${k} nhà</td><td>${money(b.rent[k])}</td></tr>`).join('')}<tr><td>Khách sạn</td><td>${money(b.rent[5])}</td></tr><tr><td>Giá xây 1 nhà</td><td>${money(b.house)}</td></tr><tr><td>Cầm cố</td><td>${money(b.price / 2)}</td></tr></table>`;
    else if (b.type === 'rail') body = '<p>Thuê: 25 / 50 / 100 / 200 khi có 1 / 2 / 3 / 4 bến.</p>';
    else if (b.type === 'util') body = '<p>Thuê: 4 × số xúc xắc (có cả 2 công ty: 10 ×).</p>';
    else body = `<p>${{ go: 'Đi qua nhận $200.', chance: 'Rút một thẻ Cơ hội.', chest: 'Rút một thẻ Khí vận.', tax: `Nộp ${money(b.amount)}.`, jail: 'Chỉ ghé thăm — hoặc đang ngồi tù.', park: 'Nghỉ ngơi miễn phí.', gojail: 'Đi thẳng vào tù, không qua Xuất phát.' }[b.type] || ''}</p>`;
    const o = g.own[q];
    const ov = document.getElementById('overlay');
    ov.innerHTML = `<div class="modal panel tp-info">${b.type === 'prop' ? `<div class="tp-ib" style="background:${GROUPS[b.g].color}">${b.name}</div>` : `<h3>${ICON[b.type] || ''} ${b.name}</h3>`}
      ${b.price ? `<p><b>Giá: ${money(b.price)}</b> · ${o !== undefined ? `Chủ: <b style="color:${PCOL[o]}">${ctx.esc(ctx.player(o)?.name)}</b>${g.mort[q] ? ' (đang cầm cố)' : ''} · Thuê hiện tại ${money(rentOf(g, q, 7))}` : 'Chưa có chủ'}</p>` : ''}${body}
      <button class="btn" data-close>Đóng</button></div>`;
    ov.classList.remove('hidden');
    ov.onclick = (e) => { if (e.target === ov || e.target.closest('[data-close]')) { ov.classList.add('hidden'); ov.innerHTML = ''; ov.onclick = null; } };
  },
  tradeModal(ctx) {
    const g = ctx.game, me = ctx.mySeat;
    const others = [...Array(g.n).keys()].filter((s) => s !== me && !g.out[s]);
    if (!others.length) return;
    let to = others[0];
    const ov = document.getElementById('overlay');
    const tradable = (s) => Object.keys(g.own).map(Number).filter((q) => g.own[q] === s && !(BOARD[q].type === 'prop' && GROUP_SQ[BOARD[q].g].some((x) => g.houses[x])));
    const draw = () => {
      const pl = (s, name) => tradable(s).map((q) => `<label class="tp-ck"><input type="checkbox" name="${name}" value="${q}"><span class="tp-chip ${g.mort[q] ? 'mort' : ''}" style="--gc:${BOARD[q].type === 'prop' ? GROUPS[BOARD[q].g].color : '#bbb'}">${BOARD[q].short}</span></label>`).join('') || '<span class="muted">Không có ô đổi được</span>';
      ov.innerHTML = `<div class="modal panel wide tp-tm"><h3>🤝 Đổi chác</h3>
        <div class="mini-seg">${others.map((s) => `<button type="button" class="${s === to ? 'on' : ''}" data-to="${s}">${ctx.esc(ctx.player(s)?.name)}</button>`).join('')}</div>
        <div class="tp-tcols"><div><b>Bạn đưa</b><div class="tp-cks">${pl(me, 'give')}</div><label class="field"><span>Tiền (có ${money(g.cash[me])})</span><input type="number" min="0" max="${g.cash[me]}" value="0" id="tgc"></label></div>
        <div><b>${ctx.esc(ctx.player(to)?.name)} đưa</b><div class="tp-cks">${pl(to, 'get')}</div><label class="field"><span>Tiền (có ${money(g.cash[to])})</span><input type="number" min="0" max="${g.cash[to]}" value="0" id="tgt"></label></div></div>
        <div class="ctl-row"><button class="btn primary" id="tSend">Gửi đề nghị</button><button class="btn ghost" id="tCancel">Huỷ</button></div></div>`;
      ov.querySelectorAll('[data-to]').forEach((b) => (b.onclick = () => { to = Number(b.dataset.to); draw(); }));
      ov.querySelector('#tCancel').onclick = close;
      ov.querySelector('#tSend').onclick = () => {
        const pick = (n) => [...ov.querySelectorAll(`input[name="${n}"]:checked`)].map((x) => Number(x.value));
        ctx.act({ t: 'offer', to, give: { props: pick('give'), cash: Number(ov.querySelector('#tgc').value) || 0 }, get: { props: pick('get'), cash: Number(ov.querySelector('#tgt').value) || 0 } });
        close();
      };
    };
    const close = () => { ov.classList.add('hidden'); ov.innerHTML = ''; };
    draw();
    ov.classList.remove('hidden');
  },
  fx(ev, ctx) {
    if (ev.type === 'roll') ctx.beep([[420, 0.03], [520, 0.03], [460, 0.03], [600, 0.05]], 'square', 0.04);
    else if (ev.type === 'buy' || ev.type === 'build') ctx.beep([[660, 0.05], [990, 0.08]], 'triangle', 0.06);
    else if (ev.type === 'rent') ctx.beep([[500, 0.05], [350, 0.08]], 'triangle', 0.06);
    else if (ev.type === 'jail') ctx.beep([[300, 0.1], [200, 0.2]], 'sawtooth', 0.05);
    else if (ev.type === 'card') ctx.beep([[880, 0.05], [1175, 0.08]], 'sine', 0.06);
    else if (ev.type === 'offer' && ev.to === ctx.mySeat) { ctx.toast('🤝 Có người muốn đổi chác với bạn!'); ctx.beep([[700, 0.06], [900, 0.06]], 'triangle', 0.06); }
  },
};
