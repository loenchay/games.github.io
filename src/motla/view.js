// Giao diện "Một Lá!": bài trên tay, chồng bài giữa bàn, người chơi xung quanh.
import { canPlay, isWild, colorOf, valOf, COLORS, COLOR_NAME, cardName } from './logic.js';

const SYM = { s: '⊘', v: '⇄', d: '+2', w: '✦', f: '+4' };
export function cardHTML(c, extra = '') {
  if (!c || c === '?') return `<div class="ml-card back ${extra}"><i>1</i></div>`;
  const wild = isWild(c), v = valOf(c), sym = SYM[v] ?? v;
  return `<div class="ml-card ${wild ? 'wild' : 'c-' + colorOf(c)} ${extra}" data-card="${c}" title="${cardName(c)}"><span class="tl">${sym}</span><b class="${sym.length > 1 ? 'sm' : ''}">${sym}</b><span class="br">${sym}</span>${wild ? '<em class="q"><i></i><i></i><i></i><i></i></em>' : ''}</div>`;
}
const pop = (box, text, cls = '') => { if (!box) return; const el = document.createElement('div'); el.className = 'ml-pop ' + cls; el.textContent = text; box.appendChild(el); setTimeout(() => el.remove(), 1400); };

export const view = {
  phaseLabel(ctx) { const g = ctx.game; return g ? `Lượt ${ctx.player(g.turn)?.name ?? ''}` : ''; },
  render(el, ctx) {
    const g = ctx.game, me = ctx.mySeat, pub = ctx.pub, L = ctx.local;
    if (!el.dataset.init) {
      el.dataset.init = '1';
      el.innerHTML = `<div class="panel ml-table"><div class="ml-opps" id="mlOpps"></div><div class="ml-center" id="mlCenter"></div><div class="ml-msg" id="mlMsg"></div></div>
        <div class="panel ml-handp"><div class="ml-bar" id="mlBar"></div><div class="ml-hand" id="mlHand"></div></div>`;
      el.addEventListener('click', (e) => {
        const b = e.target.closest('[data-do]');
        if (b) return this.click(b.dataset.do, b.dataset, this.ctx);
        const card = e.target.closest('#mlHand [data-card]');
        if (card) this.playCard(card.dataset.card, this.ctx);
      });
    }
    this.ctx = ctx;
    const over = pub.phase === 'over';
    // đối thủ
    const order = [...Array(g.n).keys()];
    const rot = me >= 0 ? [...order.slice(me + 1), ...order.slice(0, me)] : order;
    el.querySelector('#mlOpps').innerHTML = rot.map((i) => {
      const p = ctx.player(i), cnt = g.counts[i], turn = g.turn === i && !over;
      const oneOpen = g.one && g.one.seat === i;
      const fan = Math.min(cnt, 12);
      return `<div class="ml-opp ${turn ? 'turn' : ''} ${p && !p.connected ? 'offline' : ''}" data-seat="${i}">
        ${ctx.avatarHTML(p)}<div class="ml-on"><b>${ctx.esc(p?.name ?? '?')}</b><span class="muted">${cnt} lá</span></div>
        <div class="ml-fan">${Array.from({ length: fan }, (_, k) => `<i style="--k:${k - (fan - 1) / 2}"></i>`).join('')}</div>
        ${oneOpen ? (g.one.called ? '<span class="tag ok">📣 Một lá!</span>' : me >= 0 ? `<button class="btn sm danger" data-do="catch">🫵 Bắt!</button>` : '<span class="tag">1 lá</span>') : ''}
        ${over && g.all ? `<div class="ml-reveal">${g.all[i].map((c) => cardHTML(c, 'xs')).join('')}</div>` : ''}
      </div>`;
    }).join('');
    // giữa bàn
    const myTurn = me >= 0 && g.turn === me && !over;
    const top = g.top;
    const fresh = L.seq !== g.seq && g.last?.t === 'play';
    el.querySelector('#mlCenter').innerHTML = `
      <div class="ml-deck ${myTurn && !g.drew ? 'can' : ''}" data-do="draw" title="Bốc bài">${cardHTML('?', 'pile')}<span class="ml-cnt">${g.deck}</span></div>
      <div class="ml-pile">${g.under.map((c, k) => cardHTML(c, `under u${k}`)).join('')}${cardHTML(top, `top ${fresh ? 'land' : ''}`)}</div>
      <div class="ml-state"><span class="ml-color c-${g.color}">${COLOR_NAME[g.color]}</span><span class="ml-dir ${g.dir < 0 ? 'rev' : ''}">${g.dir > 0 ? '↻' : '↺'}</span>${g.pending ? `<span class="ml-pend">+${g.pending}</span>` : ''}</div>`;
    L.seq = g.seq;
    // thông báo
    const tp = ctx.player(g.turn);
    let msg = '';
    if (over) msg = '';
    else if (myTurn) msg = g.pending ? `⚠️ Bạn phải bốc <b>${g.pending}</b> lá — hoặc chặn bằng lá ${g.pendingType === 'd' ? '+2 / +4' : '+4'}.` : g.drew ? '🃏 Bạn vừa bốc được lá đánh được — đánh luôn hoặc bỏ lượt.' : '👉 <b>Tới lượt bạn!</b> Bấm lá bài để đánh, hoặc bấm chồng bài để bốc.';
    else msg = `⏳ ${ctx.esc(tp?.name ?? '')} đang nghĩ...${g.pending ? ` (đang phải bốc +${g.pending})` : ''}`;
    el.querySelector('#mlMsg').innerHTML = msg;
    // tay bài
    const hand = g.hand || (g.all && me >= 0 ? g.all[me] : []);
    const bar = el.querySelector('#mlBar'), handEl = el.querySelector('#mlHand');
    if (me < 0) { bar.innerHTML = `<span class="muted">${over ? '🏁 Ván đã xong — bài còn lại của mọi người hiện ở trên.' : '👀 Bạn đang xem — bài của mọi người được giấu.'}</span>`; handEl.innerHTML = ''; return; }
    const playable = (c) => myTurn && canPlay({ ...g, discard: [top], cfg: g.cfg }, c) && (!g.drew || g.drew === c);
    const canOne = (myTurn && hand.length === 2 && !g.drew) || (g.one && g.one.seat === me && !g.one.called);
    const oneArmed = g.callNext || (g.one && g.one.seat === me && g.one.called);
    bar.innerHTML = `<b>Bài của bạn (${hand.length})</b>
      ${myTurn && !g.drew ? `<button class="btn sm" data-do="draw">${g.pending ? `Bốc ${g.pending} lá` : '🂠 Bốc bài'}</button>` : ''}
      ${myTurn && g.drew ? '<button class="btn sm" data-do="pass">Bỏ lượt</button>' : ''}
      <button class="btn sm ml-one ${oneArmed ? 'on' : ''}" data-do="one" ${canOne && !oneArmed ? '' : 'disabled'}>📣 Một lá!</button>`;
    handEl.innerHTML = hand.map((c) => cardHTML(c, `${playable(c) ? 'ok' : myTurn ? 'no' : ''} ${g.drew === c ? 'drawn' : ''}`)).join('');
    handEl.style.setProperty('--n', hand.length);
  },
  click(what, data, ctx) {
    if (what === 'draw') { const g = ctx.game; if (ctx.mySeat < 0 || g.turn !== ctx.mySeat) return ctx.toast('Chưa tới lượt bạn.', true); if (g.drew) return; ctx.act({ t: 'draw' }); }
    else if (what === 'pass') ctx.act({ t: 'pass' });
    else if (what === 'one') ctx.act({ t: 'one' });
    else if (what === 'catch') ctx.act({ t: 'catch' });
  },
  playCard(c, ctx) {
    const g = ctx.game;
    if (ctx.pub.phase !== 'play' || g.turn !== ctx.mySeat) return ctx.toast('Chưa tới lượt bạn.', true);
    if (!canPlay({ ...g, discard: [g.top] }, c) || (g.drew && g.drew !== c)) return ctx.toast(g.pending ? `Phải bốc ${g.pending} lá hoặc chặn bằng lá +.` : 'Lá này không hợp — cần cùng màu hoặc cùng số/ký hiệu.', true);
    if (!isWild(c)) return ctx.act({ t: 'play', card: c });
    // chọn màu
    const ov = document.getElementById('overlay');
    ov.innerHTML = `<div class="modal panel ml-pick"><h3>Chọn màu tiếp theo</h3><div class="ml-colors">${COLORS.map((k) => `<button class="c-${k}" data-col="${k}">${COLOR_NAME[k]}</button>`).join('')}</div><button class="btn sm ghost" data-col="">Huỷ</button></div>`;
    ov.classList.remove('hidden');
    ov.querySelectorAll('[data-col]').forEach((b) => (b.onclick = () => { ov.classList.add('hidden'); ov.innerHTML = ''; if (b.dataset.col) ctx.act({ t: 'play', card: c, color: b.dataset.col }); }));
  },
  fx(ev, ctx) {
    const box = document.querySelector('.ml-table');
    if (ev.type === 'play') { ctx.beep([[isWild(ev.card) ? 880 : 620, 0.05], [isWild(ev.card) ? 1100 : 760, 0.06]], 'triangle', 0.06); if (valOf(ev.card) === 'v') pop(box, '⇄ Đảo chiều!'); if (valOf(ev.card) === 's') pop(box, '⊘ Mất lượt!'); if (ev.card === 'f' || valOf(ev.card) === 'd') pop(box, ev.card === 'f' ? '+4!' : '+2!', 'hot'); }
    else if (ev.type === 'draw') ctx.beep([[300, 0.04]], 'sine', 0.05);
    else if (ev.type === 'one') { pop(box, `📣 ${ctx.player(ev.seat)?.name ?? ''}: MỘT LÁ!`, 'hot'); ctx.beep([[990, 0.08], [1320, 0.12]], 'square', 0.05); }
    else if (ev.type === 'caught') { pop(box, `🫵 Bắt được ${ctx.player(ev.victim)?.name ?? ''}! +2 lá`, 'hot'); ctx.beep([[220, 0.1], [180, 0.15]], 'sawtooth', 0.05); }
  },
};
void colorOf;
