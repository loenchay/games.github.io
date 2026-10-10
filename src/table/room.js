// Phòng "bàn chơi nhiều người" dùng chung (Cờ Cá Ngựa, Cờ Tỷ Phú, Một Lá!): ghế, sẵn sàng, chat, voice, cổ vũ.
// Mỗi game cung cấp: logic (xem table/engine.js) + view.render(el, ctx) để vẽ phần chơi.
import '../theme.js';
import { createNet } from '../net.js';
import { Voice } from '../voice.js';
import { ICONS, AVATARS, AV_COLORS, icon } from '../roles.js';
import { $, $$, esc, params, LOCAL, ss, roomCode, loadProfile, saveProfile, clientId, avatarHTML, toast, confetti, SFX, unlockAudio, inviteUrl, copyText, beep } from '../common.js';
import { TableEngine, TURN_TIMES } from './engine.js';
import { gameIdentity, startPresence, presenceUpdate } from '../site.js';

// spec: { ns, title, emoji, logic, view, cfg:[{key,label,opts:[[v,l]]}], ruleNote, seatName(i), seatColor(i), demo(el) }
export function startTableRoom(spec) {
  const G = spec.logic, NS = spec.ns;
  const prof = loadProfile();
  const app = {
    cid: clientId(), code: null, isHost: false, net: null, engine: null, hostPid: null,
    pub: null, joined: false, endsAt: 0, chat: [], seenLog: 0, unread: 0,
    voice: null, speaking: new Set(), lastGame: 0, local: {},
    live: null, liveAt: 0, myIn: null, inSentAt: 0,
  };
  if (LOCAL) window.__app = app;
  const cleanAv = (av) => ({ e: AVATARS.includes(av?.e) ? av.e : AVATARS[0], c: Number.isInteger(av?.c) && av.c >= 0 && av.c < AV_COLORS.length ? av.c : 0 });
  const CFG_KEY = NS + '-room-opts', SESS = NS + '-session';
  const loadOpts = () => { try { return JSON.parse(localStorage.getItem(CFG_KEY) || 'null') || {}; } catch { return {}; } };
  const saveOpts = (o) => { try { localStorage.setItem(CFG_KEY, JSON.stringify(o)); } catch {} };

  // ================= TRANG CHỦ =================
  function initHome() {
    $$('[data-logo]').forEach((el) => (el.innerHTML = ICONS.wolf));
    gameIdentity(prof);
    startPresence(prof, 'Đang ở ' + spec.title);
    spec.demo?.($('#tbDemo'));
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
    // thời gian thực: người chơi gửi phím lên chủ phòng, chủ phòng gửi gói trạng thái nhỏ cho mọi người
    net.on('in', (d, pid) => { if (!app.isHost) return; const p = app.engine.byPid(pid); if (p) app.engine.input(p.cid, d); });
    net.on('live', (d, pid) => { if (!app.isHost && (pid === app.hostPid || !app.hostPid)) { app.live = d; app.liveAt = performance.now(); } });
    net.on('err', (d) => { toast(d.msg, true); if (d.fatal) leaveRoom(false); });
    net.onPeerJoin = (pid) => { if (!app.isHost) net.send('hello', hello(), pid); else hostSync(); app.voice?.peerJoined(pid); };
    net.onPeerLeave = (pid) => {
      app.voice?.peerLeft(pid);
      if (app.isHost) app.engine.disconnect(pid);
      else if (pid === app.hostPid) $('#hostLost').classList.remove('hidden');
    };
    net.onPeerStream = (stream, pid) => app.voice.peerStream(stream, pid);
    if (host) {
      app.engine = new TableEngine(G, app.cid, { cleanAv });
      const o = loadOpts();
      app.engine.onChange = hostSync;
      app.engine.onEvent = (ev) => { app.net.send('fx', ev); playFx(ev); };
      app.engine.addPlayer(app.cid, hello(), net.selfId);
      app.engine.s.config = { ...app.engine.s.config, ...G.cleanConfig(app.engine.s.config, o) };
      if (TURN_TIMES.includes(Number(o.turnTime))) app.engine.s.config.turnTime = Number(o.turnTime);
      setInterval(() => app.engine.tick(), 300);
      if (G.step) startLoop();
    } else {
      setTimeout(() => {
        if (!app.pub && app.net === net) {
          $('#stage').innerHTML = `<div class="panel hero hero-vote"><div class="hero-ic">${ICONS.wolf}</div><div><h2>Chưa thấy chủ phòng</h2><p>Kiểm tra lại mã <b>${esc(code)}</b> và chắc chắn chủ phòng vẫn đang mở trang. Nếu hai máy ở hai mạng khác nhau (wifi công ty, 4G) có thể mất thêm vài giây. Vẫn đang tiếp tục tìm...</p><div style="margin-top:12px"><button class="btn" id="backHome">Về trang trước</button></div></div></div>`;
          $('#backHome').onclick = () => leaveRoom(false);
        }
      }, 15000);
    }
    setInterval(tickTimer, 250);
  }
  // vòng lặp 60 khung/giây của chủ phòng (dùng Worker để tab bị ẩn vẫn chạy đều)
  function startLoop() {
    const STEP = 1000 / 60;
    let last = performance.now(), acc = 0, n = 0;
    const run = () => {
      const now = performance.now();
      acc = Math.min(acc + now - last, 250);
      last = now;
      let stepped = false;
      while (acc >= STEP) { acc -= STEP; if (app.engine.step()) stepped = true; n++; }
      if (stepped || app.engine.s.phase === 'play') {
        if (n >= 2) {
          n = 0;
          const d = app.engine.live();
          if (d) { app.live = d; app.liveAt = now; app.net.send('live', d); }
        }
      }
    };
    try {
      const w = new Worker(URL.createObjectURL(new Blob(['setInterval(()=>postMessage(0),8)'], { type: 'text/javascript' })));
      w.onmessage = run;
    } catch { setInterval(run, 8); }
  }
  function sendInput(v) {
    const key = JSON.stringify(v);
    const now = performance.now();
    if (key === app.myIn && now - app.inSentAt < 300) return;
    app.myIn = key; app.inSentAt = now;
    if (app.isHost) app.engine.input(app.cid, v);
    else if (app.hostPid) app.net.send('in', v, app.hostPid);
  }
  function leaveRoom(ask = true) {
    const inGame = app.pub && app.pub.phase === 'play' && app.pub.order.includes(app.cid);
    if (ask && inGame && !confirm('Bạn đang chơi — rời phòng thì máy sẽ tự đi thay bạn. Rời?')) return;
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
    queueMicrotask(() => {
      syncQ = false;
      const e = app.engine;
      // mỗi người nhận một bản riêng (giấu bài của người khác)
      for (const p of e.s.players) if (p.connected && p.cid !== app.cid && p.pid) app.net.send('state', e.pub(p.cid), p.pid);
      applyPub(e.pub(app.cid));
    });
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
  const seatOf = (cid) => (app.pub ? app.pub.seats.indexOf(cid) : -1);
  const mySeat = () => (app.pub && (app.pub.phase === 'play' || app.pub.phase === 'over') ? app.pub.order.indexOf(app.cid) : -1);
  function applyPub(pub) {
    app.pub = pub;
    app.endsAt = pub.remaining ? Date.now() + pub.remaining : 0;
    const me = pub.players.find((p) => p.cid === app.cid);
    if (me) app.joined = true;
    else if (app.joined) { toast('Bạn đã bị mời ra khỏi phòng.', true); return setTimeout(() => leaveRoom(false), 1200); }
    for (const l of pub.log) if (l.id > app.seenLog) addChat({ k: 'sys', kind: l.kind, text: l.text });
    app.seenLog = Math.max(app.seenLog, ...pub.log.map((l) => l.id), 0);
    render();
  }
  function playFx(ev) {
    if (ev.type === 'start') SFX.start();
    else if (ev.type === 'over') {
      const mine = ev.winners?.includes(app.cid);
      if (mine) { SFX.correct(); confetti(); } else if (mySeat() >= 0) SFX.wrong(); else SFX.correct();
    } else spec.view.fx?.(ev, viewCtx());
  }

  // ================= RENDER =================
  function viewCtx() {
    const pub = app.pub;
    return {
      pub, game: pub?.game, mySeat: mySeat(), isHost: app.isHost, local: app.local,
      act: (a) => act({ t: 'g', a }),
      input: sendInput, live: () => app.live, liveAge: () => performance.now() - app.liveAt, cid: app.cid,
      player: (seat) => P(pub.order[seat]), seatCid: (seat) => pub.order[seat],
      esc, avatarHTML, toast, beep, rerender: () => renderGame(),
      remaining: () => (app.endsAt ? Math.max(0, app.endsAt - Date.now()) : 0),
    };
  }
  function render() {
    renderTop();
    renderStage();
    renderScores();
    updateVoice();
  }
  function renderTop() {
    const pub = app.pub;
    const label = pub.phase === 'play' ? (spec.view.phaseLabel?.(viewCtx()) || `Ván ${pub.gameId}`) : pub.phase === 'over' ? 'Ván đã xong' : 'Phòng chờ';
    $('#phasePill').innerHTML = `${icon('card')}<span class="lbl">${esc(label)}</span><span class="t" id="timer"></span>`;
    tickTimer();
    renderVoiceBtns();
  }
  function tickTimer() {
    const t = $('#timer');
    if (!t || !app.pub) return;
    const pub = app.pub;
    if (!app.endsAt || pub.phase !== 'play') { const w = pub.players.filter((p) => p.connected && !pub.order.includes(p.cid)).length; t.textContent = pub.phase === 'play' ? `👀 ${w} xem` : ''; $('#timebar').style.width = '0'; return; }
    const ms = Math.max(0, app.endsAt - Date.now());
    const s = Math.ceil(ms / 1000);
    t.textContent = `${s}s`;
    t.classList.toggle('urgent', s <= 5);
    $('#timebar').style.width = pub.durMs ? `${Math.min(100, (ms / pub.durMs) * 100)}%` : '0';
    spec.view.tick?.(viewCtx(), s);
  }

  function renderStage() {
    const pub = app.pub;
    const st = $('#stage');
    if (!st.querySelector('.tb-wrap')) {
      st.innerHTML = `<div class="tb-wrap">
        <div class="panel tb-lobby" id="tbLobby"></div>
        <div class="tb-game" id="tbGame"><div class="reacts" id="reacts"></div></div>
        <div class="panel react-bar" id="reactBar">${['👏', '🔥', '😱', '😂', '🤔', '💪', '😭', '🎉'].map((e) => `<button type="button" data-react="${e}">${e}</button>`).join('')}</div>
        <div class="panel cfg ro-body" id="tbCfg"></div>
      </div>`;
      $$('[data-react]').forEach((b) => (b.onclick = () => { const d = { e: b.dataset.react, name: prof.name, id: Math.random() }; app.net.send('react', d); showReact(d); }));
    }
    renderLobby();
    renderGame();
    renderCfg();
  }
  function renderLobby() {
    const pub = app.pub, el = $('#tbLobby');
    const inGame = pub.phase === 'play';
    el.hidden = inGame;
    if (inGame) return;
    const my = seatOf(app.cid);
    let res = '';
    if (pub.phase === 'over' && pub.result) {
      const ws = pub.result.winners.map(P).filter(Boolean);
      res = `<div class="tb-result">${ws.length ? `${ws.map((w) => avatarHTML(w)).join('')}<div><b>🏆 ${ws.map((w) => esc(w.name)).join(', ')} thắng!</b><div class="muted">${esc(pub.result.text)}</div></div>` : `<div><b>Ván kết thúc</b><div class="muted">${esc(pub.result.text)}</div></div>`}</div>`;
    }
    const seats = pub.seats.map((cid, i) => {
      const p = P(cid), mine = cid === app.cid;
      const col = spec.seatColor?.(i);
      return `<div class="tb-seat ${p ? '' : 'empty'} ${mine ? 'me' : ''}" ${col ? `style="--sc:${col}"` : ''}>
        <span class="tb-sn">${esc(spec.seatName?.(i) ?? `Ghế ${i + 1}`)}</span>
        ${p ? `${avatarHTML(p)}<b>${esc(p.name)}${cid === pub.hostCid ? ' 👑' : ''}</b>${cid === pub.hostCid ? '<span class="tag">Chủ phòng</span>' : pub.ready[cid] ? '<span class="tag ok">✔ Sẵn sàng</span>' : '<span class="muted">Chưa sẵn sàng</span>'}` : `<button class="btn sm" data-sit="${i}">Ngồi đây</button>`}
      </div>`;
    }).join('');
    let ctl = '';
    if (app.isHost) ctl = `<button class="btn primary big" id="tbStart" ${pub.canStart ? 'disabled' : ''}>${pub.phase === 'over' ? '🔁 Chơi ván mới' : '▶ Bắt đầu'}</button><span class="muted">${pub.canStart ? esc(pub.canStart) : 'Mọi người đã sẵn sàng!'}</span>`;
    else if (my >= 0) ctl = `<button class="btn ${pub.ready[app.cid] ? '' : 'primary'} big" id="tbReady">${pub.ready[app.cid] ? 'Huỷ sẵn sàng' : '✅ Sẵn sàng'}</button><span class="muted">Chủ phòng sẽ bấm bắt đầu khi mọi người sẵn sàng.</span>`;
    else ctl = `<span class="muted">👀 Bạn đang xem. Bấm <b>Ngồi đây</b> ở ghế trống để vào chơi.</span>`;
    if (my >= 0) ctl += `<button class="btn sm ghost" id="tbStand">Rời ghế, xuống xem</button>`;
    el.innerHTML = `${res}<div class="tb-lhead"><b>🪑 Ghế ngồi (${pub.seats.filter(Boolean).length}/${pub.maxSeats})</b><span class="muted">cần ít nhất ${pub.minSeats} người</span></div>
      <div class="tb-seats">${seats}</div>
      <div class="ctl-row">${ctl}</div>
      <div class="ctl-row small"><button class="btn sm sun" id="copyLink">${icon('copy')}Link mời</button><span class="muted">${pub.players.filter((p) => p.connected).length}/${pub.max} người trong phòng</span></div>`;
    $$('[data-sit]', el).forEach((b) => (b.onclick = () => act({ t: 'sit', seat: Number(b.dataset.sit) })));
    $('#tbStart') && ($('#tbStart').onclick = () => act({ t: 'start' }));
    $('#tbReady') && ($('#tbReady').onclick = () => act({ t: 'ready', on: !pub.ready[app.cid] }));
    $('#tbStand') && ($('#tbStand').onclick = () => act({ t: 'stand' }));
    $('#copyLink').onclick = () => copyText(inviteUrl(app.code), 'Đã sao chép link mời!');
  }
  function renderGame() {
    const pub = app.pub, el = $('#tbGame');
    let host = $('#tbView');
    if (!pub.game) { if (host) host.remove(); el.classList.add('empty'); return; }
    el.classList.remove('empty');
    if (!host || host.dataset.g !== String(pub.gameId)) {
      host?.remove();
      host = document.createElement('div');
      host.id = 'tbView';
      host.dataset.g = pub.gameId;
      el.prepend(host);
    }
    spec.view.render(host, viewCtx());
    if (pub.phase === 'play' && app.isHost && !$('#tbEnd')) {
      const b = document.createElement('button');
      b.id = 'tbEnd'; b.className = 'btn sm ghost tb-end'; b.textContent = '⏹ Kết thúc ván';
      b.onclick = () => { if (confirm('Kết thúc ván này ngay?')) act({ t: 'end' }); };
      el.appendChild(b);
    } else if (pub.phase !== 'play') $('#tbEnd')?.remove();
  }
  function renderCfg() {
    const pub = app.pub, c = pub.config, el = $('#tbCfg');
    const ed = app.isHost && pub.phase !== 'play';
    const seg = (key, opts) => `<div class="mini-seg">${opts.map(([v, l]) => `<button type="button" class="${String(c[key]) === String(v) ? 'on' : ''}" data-opt="${key}" data-val="${v}" ${ed ? '' : 'disabled'}>${l}</button>`).join('')}</div>`;
    const ck = `${JSON.stringify(c)}|${ed}`;
    if (el.dataset.key === ck) return;
    el.dataset.key = ck;
    const items = spec.noTurnTime ? [...spec.cfg] : [...spec.cfg, { key: 'turnTime', label: 'Thời gian mỗi lượt', opts: TURN_TIMES.map((t) => [t, t ? t + 's' : 'Không giới hạn']) }];
    el.innerHTML = `<div class="ro-row"><b>⚙️ Luật chơi</b><span class="muted">${ed ? '' : app.isHost ? '(đổi được khi chưa vào ván)' : '(chủ phòng chỉnh)'}</span></div>
      <div class="ro-grid">${items.map((it) => `<label>${it.label}${seg(it.key, it.opts)}</label>`).join('')}</div>
      <p class="ro-note">${spec.ruleNote}</p>`;
    $$('[data-opt]', el).forEach((bt) => (bt.onclick = () => {
      let v = bt.dataset.val;
      v = v === 'true' ? true : v === 'false' ? false : /^-?\d+$/.test(v) ? Number(v) : v;
      const patch = { [bt.dataset.opt]: v };
      act({ t: 'cfg', cfg: patch });
      saveOpts({ ...loadOpts(), ...patch });
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
    const inG = (c) => pub.phase !== 'idle' && pub.order.includes(c);
    const list = [...pub.players].filter((p) => p.connected || inG(p.cid)).sort((a, b) => (inG(b.cid) ? 1 : 0) - (inG(a.cid) ? 1 : 0) || b.wins - a.wins);
    $('#scoreBox').innerHTML = `<div class="sb-head"><b>Trong phòng (${pub.players.filter((p) => p.connected).length}/${pub.max})</b></div>${list.map((p) => {
      return `<div class="sb-row ${p.cid === app.cid ? 'me' : ''} ${p.connected ? '' : 'offline'} ${(p.pid && app.speaking.has(p.pid)) || (p.cid === app.cid && app.speaking.has('self')) ? 'speaking' : ''}">
        <span class="rank">${inG(p.cid) ? '🎲' : seatOf(p.cid) >= 0 ? '🪑' : '👀'}</span>${avatarHTML(p, 'sm')}<span class="nm">${esc(p.name)}${p.cid === pub.hostCid ? ' 👑' : ''}</span>
        ${app.isHost && p.cid !== app.cid && pub.phase !== 'play' ? `<button class="kick-sm" data-kick="${p.cid}" title="Mời ra">×</button>` : ''}
        <b class="pt">${p.wins}🏆${spec.showScore ? ` · ${p.score}đ` : ''}</b></div>`;
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
  const SYS = { win: '🏆', phase: spec.emoji, join: '👋', leave: '🚪', info: 'ℹ️', good: '💰', bad: '💸', move: '🎲' };
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
