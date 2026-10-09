// Phòng cờ đối kháng dùng chung cho Cờ Vua / Cờ Tướng: 2 người chơi, tối đa 8 người xem, chat + voice + cổ vũ.
import '../theme.js';
import { createNet } from '../net.js';
import { Voice } from '../voice.js';
import { ICONS, AVATARS, AV_COLORS, icon } from '../roles.js';
import { $, $$, esc, params, LOCAL, ss, roomCode, loadProfile, saveProfile, clientId, avatarHTML, toast, confetti, SFX, unlockAudio, inviteUrl, copyText, beep } from '../common.js';
import { DuelEngine, CLOCKS, INCS } from './engine.js';
import { gameIdentity, startPresence, presenceUpdate } from '../site.js';

// spec: { ns, title, emoji, rules, label:{w,b}, board, sym(side), lostHTML(st, side), demo(el), legend, views }
export function startDuelRoom(spec) {
  const R = spec.rules, NS = spec.ns, L = spec.label;
  const prof = loadProfile();
  const app = {
    cid: clientId(), code: null, isHost: false, net: null, engine: null, hostPid: null,
    pub: null, joined: false, chat: [], seenLog: 0, unread: 0, gotAt: 0,
    voice: null, speaking: new Set(), lastMoves: -1, lastGame: 0, sel: -1, flip: false,
    view: (() => { try { return localStorage.getItem(NS + '-view') || 'han'; } catch { return 'han'; } })(),
  };
  if (LOCAL) window.__app = app;
  const cleanAv = (av) => ({ e: AVATARS.includes(av?.e) ? av.e : AVATARS[0], c: Number.isInteger(av?.c) && av.c >= 0 && av.c < AV_COLORS.length ? av.c : 0 });
  const CFG_KEY = NS + '-room-opts';
  const loadOpts = () => { try { return JSON.parse(localStorage.getItem(CFG_KEY) || 'null') || {}; } catch { return {}; } };
  const saveOpts = (o) => { try { localStorage.setItem(CFG_KEY, JSON.stringify(o)); } catch {} };
  const SESS = NS + '-session';

  // ================= TRANG CHỦ =================
  function initHome() {
    $$('[data-logo]').forEach((el) => (el.innerHTML = ICONS.wolf));
    gameIdentity(prof);
    startPresence(prof, 'Đang ở ' + spec.title);
    spec.demo?.($('#duelDemo'));
    const form = $('#homeForm');
    let mode = 'create';
    const setMode = (m) => {
      mode = m;
      form.classList.toggle('join', m === 'join');
      $$('.seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.mode === m));
      $('#homeSubmit').textContent = m === 'join' ? 'Vào phòng →' : 'Tạo phòng mới →';
      $('#codeInput').required = m === 'join';
    };
    $$('.seg-btn').forEach((b) => (b.onclick = () => setMode(b.dataset.mode)));
    const pre = (params.get('room') || '').toUpperCase();
    if (pre) { setMode('join'); $('#codeInput').value = pre; }
    form.onsubmit = (e) => {
      e.preventDefault();
      unlockAudio();
      const name = $('#nameInput').value.trim() || prof.name;
      if (!name) return;
      prof.name = name;
      saveProfile(prof);
      if (mode === 'join') {
        const code = $('#codeInput').value.trim().toUpperCase();
        if (!/^[A-Z0-9]{4,8}$/.test(code)) return toast('Mã phòng không hợp lệ', true);
        enterRoom(code, false);
      } else enterRoom(roomCode(), true);
    };
    const sess = JSON.parse(ss.get(SESS) || 'null');
    if (sess && (!pre || sess.code === pre) && prof.name) enterRoom(sess.code, sess.host);
  }

  // ================= VÀO PHÒNG =================
  async function enterRoom(code, host) {
    presenceUpdate(`${spec.emoji} Đang chơi ${spec.title}`);
    app.code = code;
    app.isHost = host;
    ss.set(SESS, JSON.stringify({ code, host }));
    const url = new URL(location.href);
    url.searchParams.set('room', code);
    history.replaceState(null, '', url);
    $('#home').classList.add('hidden');
    $('#room').classList.remove('hidden');
    $('#codeChip').innerHTML = `${icon('copy')}${esc(code)}`;
    $('#codeChip').onclick = () => copyText(inviteUrl(code), 'Đã sao chép link mời!');
    $('#leaveBtn').onclick = () => leaveRoom();
    $('#stage').innerHTML = `<div class="panel hero hero-night"><div class="hero-ic">${ICONS.wolf}</div><div><h2>Đang kết nối...</h2><p>Đang tìm đường tới phòng <b>${esc(code)}</b>.</p></div></div>`;
    try { app.net = await createNet(code, { local: LOCAL, ns: NS }); }
    catch (e) { console.error(e); toast('Không tải được thư viện kết nối.', true); return; }
    const net = app.net;
    app.voice = new Voice(net);
    app.voice.onLevels = onLevels;
    const hello = () => ({ cid: app.cid, name: prof.name, av: prof.av });
    net.on('hello', (d, pid) => {
      if (!app.isHost || !d?.cid) return;
      const err = app.engine.addPlayer(String(d.cid), d, pid);
      if (err) net.send('err', { msg: err, fatal: true }, pid);
    });
    net.on('act', (d, pid) => {
      if (!app.isHost) return;
      const p = app.engine.byPid(pid);
      if (!p) return;
      const err = app.engine.handle(p.cid, d);
      if (err) net.send('err', { msg: err }, pid);
    });
    net.on('chat', (d, pid) => {
      if (app.isHost) { const p = app.engine.byPid(pid); if (p) hostChat(p.cid, d.text); }
      else if (pid === app.hostPid) addChat(d);
    });
    net.on('react', (d) => showReact(d));
    net.on('state', (d, pid) => { if (!app.isHost) { app.hostPid = pid; $('#hostLost').classList.add('hidden'); applyPub(d); } });
    net.on('fx', (d, pid) => { if (!app.isHost && pid === app.hostPid) playFx(d); });
    net.on('err', (d) => { toast(d.msg, true); if (d.fatal) leaveRoom(false); });
    net.onPeerJoin = (pid) => { if (!app.isHost) net.send('hello', hello(), pid); else hostSync(); app.voice?.peerJoined(pid); };
    net.onPeerLeave = (pid) => {
      app.voice?.peerLeft(pid);
      if (app.isHost) app.engine.disconnect(pid);
      else if (pid === app.hostPid) $('#hostLost').classList.remove('hidden');
    };
    net.onPeerStream = (stream, pid) => app.voice.peerStream(stream, pid);
    if (host) {
      app.engine = new DuelEngine(R, app.cid, { cleanAv, label: L });
      app.engine.setConfig(loadOpts());
      app.engine.onChange = hostSync;
      app.engine.onEvent = (ev) => { app.net.send('fx', ev); playFx(ev); };
      app.engine.addPlayer(app.cid, hello(), net.selfId);
      setInterval(() => app.engine.tick(), 300);
      // đồng bộ lại đồng hồ định kỳ cho người xem
      setInterval(() => { if (app.engine.s.phase === 'play' && app.engine.s.game.clock) hostSync(); }, 5000);
    } else {
      setTimeout(() => {
        if (!app.pub && app.net === net) {
          $('#stage').innerHTML = `<div class="panel hero hero-vote"><div class="hero-ic">${ICONS.wolf}</div><div><h2>Chưa thấy chủ phòng</h2><p>Kiểm tra lại mã <b>${esc(code)}</b> và chắc chắn chủ phòng vẫn đang mở trang. Nếu hai máy ở hai mạng khác nhau (wifi công ty, 4G) có thể mất thêm vài giây. Vẫn đang tiếp tục tìm...</p><div style="margin-top:12px"><button class="btn" id="backHome">Về trang trước</button></div></div></div>`;
          $('#backHome').onclick = () => leaveRoom(false);
        }
      }, 15000);
    }
    setInterval(tickClock, 200);
  }
  function leaveRoom(ask = true) {
    const s = app.pub && seatOf(app.cid);
    if (ask && s && app.pub.phase === 'play' && !confirm('Bạn đang chơi — rời phòng sẽ bị xử thua sau 60 giây. Rời?')) return;
    ss.del(SESS);
    try { app.net?.leave(); } catch {}
    const url = new URL(location.href);
    url.searchParams.delete('room');
    location.href = url.toString();
  }

  // ================= HOST =================
  let syncQ = false;
  function hostSync() {
    if (syncQ) return;
    syncQ = true;
    queueMicrotask(() => { syncQ = false; const pub = app.engine.pub(); app.net.send('state', pub); applyPub(pub); });
  }
  function hostChat(cid, text) {
    text = String(text || '').trim().slice(0, 300);
    if (!text) return;
    const me = app.engine.P(cid);
    const msg = { k: 'm', cid, name: me.name, av: me.av, text, ts: Date.now() };
    app.net.send('chat', msg);
    addChat(msg);
  }
  function act(a) {
    if (app.isHost) { const err = app.engine.handle(app.cid, a); if (err) toast(err, true); }
    else if (app.hostPid) app.net.send('act', a, app.hostPid);
    else toast('Chưa kết nối được chủ phòng', true);
  }

  // ================= TRẠNG THÁI =================
  const P = (cid) => app.pub?.players.find((p) => p.cid === cid);
  const seatOf = (cid) => (app.pub?.seats.w === cid ? 'w' : app.pub?.seats.b === cid ? 'b' : null);
  const mySide = () => { const g = app.pub?.game; if (g && (app.pub.phase === 'play' || app.pub.phase === 'over')) return g.by.w === app.cid ? 'w' : g.by.b === app.cid ? 'b' : null; return seatOf(app.cid); };
  function applyPub(pub) {
    app.pub = pub;
    app.gotAt = Date.now();
    const me = pub.players.find((p) => p.cid === app.cid);
    if (me) app.joined = true;
    else if (app.joined) { toast('Bạn đã bị mời ra khỏi phòng.', true); return setTimeout(() => leaveRoom(false), 1200); }
    for (const l of pub.log) if (l.id > app.seenLog) addChat({ k: 'sys', kind: l.kind, text: l.text });
    app.seenLog = Math.max(app.seenLog, ...pub.log.map((l) => l.id), 0);
    render();
  }
  function playFx(ev) {
    if (ev.type === 'move') {
      if (ev.check) { beep([[880, 0.07], [660, 0.1]], 'square', 0.05); toastCheck(); }
      else if (ev.cap) beep([[300, 0.04], [220, 0.08]], 'triangle', 0.09);
      else beep([[ev.side === 'w' ? 560 : 470, 0.05]], 'triangle', 0.07);
    } else if (ev.type === 'start') SFX.start();
    else if (ev.type === 'over') {
      const mine = mySide();
      if (ev.winner === 'draw') SFX.wrong();
      else if (mine && ev.winner === mine) { SFX.correct(); confetti(); }
      else if (mine) SFX.wrong();
      else SFX.correct();
    }
  }
  function toastCheck() {
    const box = $('#boardPanel');
    if (!box) return;
    const el = document.createElement('div');
    el.className = 'check-pop';
    el.textContent = spec.checkWord || 'Chiếu!';
    box.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }

  // ================= RENDER =================
  function render() {
    renderTop();
    renderStage();
    renderScores();
    updateVoice();
  }
  function renderTop() {
    const pub = app.pub, g = pub.game;
    const label = pub.phase === 'play' ? `Ván ${pub.gameId} · lượt ${L[g.st.turn]}` : pub.phase === 'over' ? 'Ván đã xong' : 'Chờ 2 người sẵn sàng';
    $('#phasePill').innerHTML = `${icon('card')}<span class="lbl">${label}</span><span class="t" id="timer"></span>`;
    tickClock();
    renderVoiceBtns();
  }
  const fmt = (ms) => { const s = Math.ceil(Math.max(0, ms) / 1000); return s >= 3600 ? `${Math.floor(s / 3600)}:${String(Math.floor(s / 60) % 60).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}` : `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
  function clockOf(side) {
    const g = app.pub?.game;
    if (!g?.clock) return null;
    let ms = g.clock[side];
    if (g.running === side && app.pub.phase === 'play') ms -= Date.now() - app.gotAt;
    return Math.max(0, ms);
  }
  function tickClock() {
    const pub = app.pub;
    const t = $('#timer');
    if (!t || !pub) return;
    const watchers = pub.players.filter((p) => p.connected && !seatOf(p.cid)).length;
    t.textContent = `👀 ${watchers} xem`;
    $('#timebar').style.width = '0';
    for (const k of ['w', 'b']) {
      const el = $('#clk-' + k);
      if (!el) continue;
      const ms = clockOf(k);
      if (ms == null) { el.textContent = ''; el.hidden = true; continue; }
      el.hidden = false;
      el.textContent = fmt(ms);
      el.classList.toggle('run', pub.game.running === k);
      el.classList.toggle('low', ms < 20000);
    }
  }

  function seatCard(k) {
    const pub = app.pub, g = pub.game;
    const cid = (pub.phase === 'play' || pub.phase === 'over') && g ? g.by[k] : pub.seats[k];
    const p = P(cid), mine = cid === app.cid;
    const turn = pub.phase === 'play' && g.st.turn === k;
    const win = pub.phase === 'over' && g.winner === k;
    let foot = '';
    if (!cid) foot = pub.phase !== 'play' ? `<button class="btn sm primary" data-sit="${k}">Cầm quân ${L[k]}</button>` : '<span class="muted">Trống</span>';
    else if (pub.phase !== 'play') foot = pub.ready[k] ? '<span class="tag ok">✔ Sẵn sàng</span>' : '<span class="muted">Chưa sẵn sàng</span>';
    else if (turn) foot = `<span class="tag turn">${g.check ? '⚠️ Bị chiếu!' : 'Đang nghĩ...'}</span>`;
    const lost = g && pub.phase !== 'idle' ? spec.lostHTML(g.st, k === 'w' ? 'b' : 'w') : '';
    return `<div class="seat seat-${k} ${turn ? 'turn' : ''} ${win ? 'win' : ''} ${mine ? 'me' : ''} ${p && !p.connected ? 'offline' : ''}">
      <span class="sym duel-sym">${spec.sym(k)}</span>
      ${p ? avatarHTML(p) : '<span class="avatar empty">?</span>'}
      <div class="seat-info"><b>${p ? esc(p.name) : 'Ghế trống'}${mine ? ' <span class="muted">(bạn)</span>' : ''}</b>
        ${p ? `<span class="muted rec">${L[k]} · ${p.wins}T ${p.losses}B ${p.draws}H</span>` : `<span class="muted rec">${L[k]}</span>`}
        <div class="seat-foot">${win ? '<span class="tag ok">🏆 Thắng</span>' : foot}</div>
        ${lost ? `<div class="lost">${lost}</div>` : ''}</div>
      <b class="clk" id="clk-${k}" hidden></b>
    </div>`;
  }

  // nước đi hợp lệ của mình (tính tại máy)
  let legalCache = { key: '', moves: [] };
  function myLegal() {
    const pub = app.pub, g = pub.game, mine = mySide();
    if (pub.phase !== 'play' || !mine || g.st.turn !== mine || pub.undo) return [];
    const k = pub.gameId + ':' + g.moves.length;
    if (legalCache.key !== k) legalCache = { key: k, moves: R.legalMoves(g.st) };
    return legalCache.moves;
  }

  function drawBoard(anim = false) {
    const pub = app.pub, g = pub.game;
    const st = g ? g.st : R.init();
    const legal = myLegal();
    const targets = app.sel >= 0 ? legal.filter((m) => m.from === app.sel).filter((m, i, a) => a.findIndex((x) => x.to === m.to) === i).map((m) => ({ to: m.to, cap: st.board[m.to] !== '.' || !!m.ep })) : [];
    const last = g?.moves?.length ? g.moves[g.moves.length - 1] : null;
    const mine = mySide();
    const flip = mine ? mine === 'b' : app.flip;
    spec.board.render($('#board'), {
      st, flip, sel: app.sel, targets, last, anim, can: legal.length > 0, view: app.view,
      check: g?.check ? st.board.indexOf(st.turn === 'w' ? 'K' : 'k') : -1,
    });
  }

  function renderStage() {
    const pub = app.pub, g = pub.game, c = pub.config;
    const mine = mySide();
    const st = $('#stage');
    if (!st.querySelector('.duel-wrap')) {
      st.innerHTML = `<div class="caro-wrap duel-wrap">
        <div class="panel seats" id="seats"></div>
        <div class="panel board-panel" id="boardPanel"><div class="duel-board" id="board" style="--ar:${spec.board.aspect}"></div><div class="board-ov" id="boardOv"></div><div class="reacts" id="reacts"></div></div>
        <div class="panel caro-ctl" id="caroCtl"></div>
        <div class="panel move-list" id="moveList"></div>
        <div class="panel react-bar" id="reactBar">${['👏', '🔥', '😱', '😂', '🤔', '💪', '😭', '🎉'].map((e) => `<button type="button" data-react="${e}">${e}</button>`).join('')}</div>
        <div class="panel cfg ro-body" id="caroCfg"></div>
      </div>`;
      $$('[data-react]').forEach((b) => (b.onclick = () => { const d = { e: b.dataset.react, name: prof.name, id: Math.random() }; app.net.send('react', d); showReact(d); }));
      $('#board').onclick = (e) => { const cell = e.target.closest('[data-sq]'); if (cell) clickSq(Number(cell.dataset.sq)); };
    }
    $('#seats').innerHTML = `${seatCard('w')}<div class="vs">VS</div>${seatCard('b')}`;
    $$('[data-sit]').forEach((b) => (b.onclick = () => act({ t: 'sit', seat: b.dataset.sit })));
    // bàn cờ (hiệu ứng trượt quân khi có nước mới)
    const nMoves = g ? g.moves.length : 0;
    const fresh = app.lastMoves !== -1 && nMoves === app.lastMoves + 1 && app.lastGame === pub.gameId;
    if (nMoves !== app.lastMoves || app.lastGame !== pub.gameId) app.sel = -1;
    drawBoard(fresh);
    app.lastMoves = nMoves;
    // lớp phủ kết thúc
    const ov = $('#boardOv');
    if (pub.phase === 'over' && g) {
      const w = g.winner === 'draw' ? null : P(g.by[g.winner]);
      const why = spec.reasons[g.reason] || '';
      ov.innerHTML = `<div class="over-card">${w ? `${avatarHTML(w)}<b>${esc(w.name)} thắng!</b>` : '<b>🤝 Hoà!</b>'}<span class="muted">${why}</span></div>`;
      ov.hidden = false;
      if (app.lastGame !== pub.gameId || !ov.dataset.shown) { ov.dataset.shown = '1'; ov.classList.remove('fade'); setTimeout(() => { if (app.pub.phase === 'over') ov.classList.add('fade'); }, 3500); }
    } else { ov.hidden = true; ov.innerHTML = ''; ov.dataset.shown = ''; }
    app.lastGame = pub.gameId;
    // điều khiển
    const ctl = $('#caroCtl');
    let h = '';
    if (pub.undo && mine && mine !== pub.undo.from) h = `<div class="ask">🙏 <b>${esc(P(g.by[pub.undo.from])?.name)}</b> xin đi lại một nước.</div><button class="btn sm primary" data-a="undoYes">Cho đi lại</button><button class="btn sm" data-a="undoNo">Không</button>`;
    else if (pub.draw && mine && mine !== pub.draw.from && pub.phase === 'play') h = `<div class="ask">🤝 <b>${esc(P(g.by[pub.draw.from])?.name)}</b> xin hoà.</div><button class="btn sm primary" data-a="drawYes">Đồng ý hoà</button><button class="btn sm" data-a="drawNo">Đánh tiếp</button>`;
    else if (pub.phase === 'play' && mine) h = `<span class="msg">${g.st.turn === mine ? `👉 <b>Tới lượt bạn!</b> ${g.check ? '<b class="warn">Bạn đang bị chiếu!</b> ' : ''}Bấm quân rồi bấm ô muốn đi.` : `⏳ Chờ ${esc(P(g.by[g.st.turn])?.name)} đi...`}${pub.undo ? ' (đang chờ trả lời xin đi lại)' : ''}</span>
      <button class="btn sm" data-a="undo" title="Tối đa 3 lần mỗi ván">↩️ Xin đi lại</button><button class="btn sm" data-a="draw">🤝 Xin hoà</button><button class="btn sm danger" data-a="resign">🏳️ Đầu hàng</button>`;
    else if (pub.phase === 'play') h = `<span class="msg">👀 Bạn đang xem. ${esc(P(g.by.w)?.name)} (${L.w}) đấu ${esc(P(g.by.b)?.name)} (${L.b}). Cổ vũ bằng các nút bên dưới!</span><button class="btn sm" data-a="flip">⇅ Lật bàn</button>`;
    else if (mine && seatOf(app.cid)) {
      const ms = seatOf(app.cid);
      const both = pub.seats.w && pub.seats.b;
      h = `<span class="msg">${both ? (pub.ready[ms] ? 'Đợi đối thủ sẵn sàng...' : 'Bấm <b>Sẵn sàng</b> để bắt đầu ván mới.') : 'Đợi người vào ghế còn lại...'}</span>
        <button class="btn ${pub.ready[ms] ? '' : 'primary'}" data-a="ready">${pub.ready[ms] ? 'Huỷ sẵn sàng' : (pub.phase === 'over' ? '🔁 Đấu lại' : '✅ Sẵn sàng')}</button>
        <button class="btn sm" data-a="swap">⇄ Đổi màu quân</button><button class="btn sm ghost" data-a="stand">Rời ghế, xuống xem</button>`;
    } else h = `<span class="msg">👀 Bạn đang xem.${!pub.seats.w || !pub.seats.b ? ' Còn ghế trống — bấm <b>Cầm quân</b> ở trên để vào chơi.' : ' Khi ai đó rời ghế bạn có thể vào thay.'}</span><button class="btn sm" data-a="flip">⇅ Lật bàn</button>`;
    const viewBtn = spec.views ? `<button class="btn sm" data-a="view">${app.view === 'vi' ? '漢 Chữ Hán' : 'Aa Chữ Việt'}</button>` : '';
    ctl.innerHTML = `<div class="ctl-row">${h}</div><div class="ctl-row small"><button class="btn sm sun" id="copyLink">${icon('copy')}Link mời</button>${viewBtn}<span class="muted">${pub.players.filter((p) => p.connected).length}/${pub.max} người trong phòng</span></div>`;
    $('#copyLink').onclick = () => copyText(inviteUrl(app.code), 'Đã sao chép link mời!');
    const A = {
      undoYes: () => act({ t: 'undoAns', ok: true }), undoNo: () => act({ t: 'undoAns', ok: false }),
      drawYes: () => act({ t: 'draw' }), drawNo: () => act({ t: 'drawNo' }), undo: () => act({ t: 'undo' }),
      draw: () => { act({ t: 'draw' }); },
      resign: () => { if (confirm('Đầu hàng ván này?')) act({ t: 'resign' }); },
      ready: () => act({ t: 'ready', on: !pub.ready[seatOf(app.cid)] }), swap: () => act({ t: 'swap' }), stand: () => act({ t: 'stand' }),
      flip: () => { app.flip = !app.flip; drawBoard(); },
      view: () => { app.view = app.view === 'vi' ? 'han' : 'vi'; try { localStorage.setItem(NS + '-view', app.view); } catch {} renderStage(); },
    };
    $$('[data-a]', ctl).forEach((b) => (b.onclick = A[b.dataset.a]));
    renderMoves();
    // cài đặt
    const cfgEl = $('#caroCfg');
    const ed = app.isHost && pub.phase !== 'play';
    const seg = (key, opts) => `<div class="mini-seg">${opts.map(([v, l]) => `<button type="button" class="${String(c[key]) === String(v) ? 'on' : ''}" data-opt="${key}" data-val="${v}" ${ed ? '' : 'disabled'}>${l}</button>`).join('')}</div>`;
    const ck = `${JSON.stringify(c)}|${ed}`;
    if (cfgEl.dataset.key !== ck) {
      cfgEl.dataset.key = ck;
      cfgEl.innerHTML = `<div class="ro-row"><b>⚙️ Luật chơi</b><span class="muted">${ed ? '' : app.isHost ? '(đổi được khi chưa vào ván)' : '(chủ phòng chỉnh)'}</span></div>
        <div class="ro-grid">
          <label>Thời gian mỗi bên${seg('clock', CLOCKS.map((m) => [m, m ? m + ' phút' : 'Không giới hạn']))}</label>
          <label>Cộng thêm mỗi nước${seg('inc', INCS.map((s) => [s, s ? '+' + s + 's' : 'Không']))}</label>
          <label>Ván sau ai cầm ${L.w}${seg('first', [['loser', 'Người thua'], ['alternate', 'Luân phiên'], ['fixed', 'Giữ nguyên']])}</label>
        </div>
        <p class="ro-note">${spec.ruleNote}</p>${spec.legend ? spec.legend() : ''}`;
      $$('[data-opt]', cfgEl).forEach((bt) => (bt.onclick = () => {
        let v = bt.dataset.val;
        v = /^\d+$/.test(v) ? Number(v) : v;
        const patch = { [bt.dataset.opt]: v };
        act({ t: 'cfg', cfg: patch });
        saveOpts({ ...loadOpts(), ...patch });
      }));
    }
    tickClock();
  }
  function renderMoves() {
    const g = app.pub.game, el = $('#moveList');
    if (!g || !g.moves.length) { el.innerHTML = `<div class="ml-head"><b>📜 Biên bản</b><span class="muted">${spec.notationNote}</span></div><div class="muted ml-empty">Chưa có nước nào.</div>`; return; }
    let rows = '';
    for (let i = 0; i < g.moves.length; i += 2) {
      const a = g.moves[i], b = g.moves[i + 1];
      rows += `<span class="n">${i / 2 + 1}.</span><span class="${i === g.moves.length - 1 ? 'cur' : ''}">${esc(a.san)}</span><span class="${i + 1 === g.moves.length - 1 ? 'cur' : ''}">${b ? esc(b.san) : ''}</span>`;
    }
    el.innerHTML = `<div class="ml-head"><b>📜 Biên bản · ${g.moves.length} nước</b><span class="muted">${spec.notationNote}</span></div><div class="ml-grid">${rows}</div>`;
    const grid = $('.ml-grid', el);
    grid.scrollTop = grid.scrollHeight;
  }

  function clickSq(i) {
    const pub = app.pub, g = pub.game, mine = mySide();
    if (pub.phase !== 'play' || !mine) return;
    if (g.st.turn !== mine) { if (R.sideOf(g.st.board[i]) === mine) toast('Chưa tới lượt bạn.', true); return; }
    if (pub.undo) return toast('Đang chờ trả lời xin đi lại.', true);
    const legal = myLegal();
    if (app.sel >= 0) {
      const ms = legal.filter((m) => m.from === app.sel && m.to === i);
      if (ms.length) {
        if (ms.length > 1 && ms[0].promo) return pickPromo(ms[0]);
        app.sel = -1;
        return act({ t: 'move', from: ms[0].from, to: ms[0].to, promo: ms[0].promo });
      }
    }
    if (R.sideOf(g.st.board[i]) === mine) {
      app.sel = app.sel === i ? -1 : i;
      if (app.sel >= 0 && !legal.some((m) => m.from === i)) toast('Quân này không đi được nước nào.', true);
    } else app.sel = -1;
    drawBoard();
  }
  function pickPromo(m) {
    const side = mySide();
    const ov = $('#overlay');
    ov.innerHTML = `<div class="modal panel promo-modal"><h3>Phong cấp tốt thành...</h3><div class="promo-row">${'qrbn'.map((p) => `<button class="promo-btn" data-p="${p}"><span class="${side === 'w' ? 'pw' : 'pb'}">${spec.glyph(side === 'w' ? p.toUpperCase() : p)}</span></button>`).join('')}</div><button class="btn sm ghost" data-p="">Huỷ</button></div>`;
    ov.classList.remove('hidden');
    $$('[data-p]', ov).forEach((b) => (b.onclick = () => {
      ov.classList.add('hidden'); ov.innerHTML = '';
      if (b.dataset.p) { app.sel = -1; act({ t: 'move', from: m.from, to: m.to, promo: b.dataset.p }); }
    }));
  }
  function showReact(d) {
    const box = $('#reacts');
    if (!box || !d?.e) return;
    const el = document.createElement('span');
    el.className = 'react-pop';
    el.innerHTML = `${esc(d.e)}<small>${esc(String(d.name || '').slice(0, 12))}</small>`;
    el.style.left = 10 + Math.random() * 80 + '%';
    box.appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }

  function renderScores() {
    const pub = app.pub;
    const list = [...pub.players].filter((p) => p.connected || seatOf(p.cid)).sort((a, b) => (seatOf(b.cid) ? 1 : 0) - (seatOf(a.cid) ? 1 : 0) || b.wins - a.wins);
    $('#scoreBox').innerHTML = `<div class="sb-head"><b>Trong phòng (${pub.players.filter((p) => p.connected).length}/${pub.max})</b></div>${list.map((p) => {
      const s = seatOf(p.cid);
      return `<div class="sb-row ${p.cid === app.cid ? 'me' : ''} ${p.connected ? '' : 'offline'} ${(p.pid && app.speaking.has(p.pid)) || (p.cid === app.cid && app.speaking.has('self')) ? 'speaking' : ''}">
        <span class="rank">${s ? `<span class="sym mini duel-sym">${spec.sym(s)}</span>` : '👀'}</span>${avatarHTML(p, 'sm')}<span class="nm">${esc(p.name)}${p.cid === pub.hostCid ? ' 👑' : ''}</span>
        ${app.isHost && p.cid !== app.cid && pub.phase !== 'play' ? `<button class="kick-sm" data-kick="${p.cid}" title="Mời ra">×</button>` : ''}
        <b class="pt">${p.wins}T</b></div>`;
    }).join('')}`;
    $$('[data-kick]').forEach((b) => (b.onclick = () => act({ t: 'kick', cid: b.dataset.kick })));
  }

  // ---------- chat ----------
  function addChat(m) {
    app.chat.push(m);
    if (app.chat.length > 300) app.chat.shift();
    const list = $('#chatList');
    const atBottom = list.scrollHeight - list.scrollTop - list.clientHeight < 80;
    list.insertAdjacentHTML('beforeend', msgHTML(m));
    if (atBottom || m.cid === app.cid) list.scrollTop = list.scrollHeight;
    if (m.k === 'm' && $('.room-body').dataset.tab === 'stage' && innerWidth <= 900) {
      app.unread++;
      $('#chatBadge').textContent = app.unread;
      $('#chatBadge').classList.remove('hidden');
    }
  }
  const SYS = { win: '🏆', phase: spec.emoji, join: '👋', leave: '🚪', info: 'ℹ️' };
  function msgHTML(m) {
    if (m.k === 'sys') return `<div class="sys ${m.kind === 'win' ? 'win' : ''}"><span>${SYS[m.kind] || '•'}</span><span>${esc(m.text)}</span></div>`;
    return `<div class="msg ${m.cid === app.cid ? 'mine' : ''}">${avatarHTML(m, 'sm')}<div class="body"><div class="nm">${esc(m.name)}</div>${esc(m.text)}</div></div>`;
  }
  $('#chatForm').onsubmit = (e) => {
    e.preventDefault();
    const inp = $('#chatInput');
    const text = inp.value.trim();
    if (!text || !app.pub) return;
    inp.value = '';
    if (app.isHost) hostChat(app.cid, text);
    else if (app.hostPid) app.net.send('chat', { text }, app.hostPid);
  };
  $$('.mobile-tabs button').forEach((b) => (b.onclick = () => {
    $('.room-body').dataset.tab = b.dataset.tab;
    $$('.mobile-tabs button').forEach((x) => x.classList.toggle('active', x === b));
    if (b.dataset.tab === 'side') { app.unread = 0; $('#chatBadge').classList.add('hidden'); }
  }));
  $$('.mt-ic').forEach((el) => (el.innerHTML = icon(el.dataset.ic)));

  // ================= VOICE =================
  function updateVoice() { if (app.voice) { app.voice.setRules({ canSpeak: true, canHear: () => true }); renderVoiceBtns(); } }
  function renderVoiceBtns() {
    const v = app.voice, mic = $('#micBtn'), deaf = $('#deafBtn');
    if (!v || !v.enabled) { mic.className = 'icon-btn'; mic.innerHTML = icon('micOff'); mic.title = 'Bật voice chat'; }
    else { mic.className = `icon-btn ${v.micOn ? 'on' : 'off'}`; mic.innerHTML = icon(v.micOn ? 'mic' : 'micOff'); mic.title = v.micOn ? 'Tắt mic' : 'Bật mic'; }
    deaf.className = `icon-btn ${v?.deaf ? 'off' : ''}`;
    deaf.innerHTML = icon(v?.deaf ? 'speakerOff' : 'speaker');
  }
  $('#micBtn').onclick = async () => {
    const v = app.voice;
    if (!v) return;
    if (!v.enabled) { try { await v.enable(); updateVoice(); toast('Đã bật voice chat'); } catch { toast('Không truy cập được micro.', true); } }
    else v.setMic(!v.micOn);
    renderVoiceBtns();
  };
  $('#deafBtn').onclick = () => { const v = app.voice; if (!v) return; v.ensureCtx(); v.setDeaf(!v.deaf); renderVoiceBtns(); };
  function onLevels(set) {
    const changed = set.size !== app.speaking.size || [...set].some((x) => !app.speaking.has(x));
    if (!changed) return;
    app.speaking = set;
    if (app.pub) renderScores();
  }

  initHome();
}
