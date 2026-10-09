import './theme.js';
import { createNet } from './net.js';
import { Engine, suggestRoles, MIN_PLAYERS } from './engine.js';
import { Voice } from './voice.js';
import { ROLES, ROLE_ORDER, ICONS, AVATARS, AV_COLORS, roleBadge, icon } from './roles.js';

// ================= trạng thái =================
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const params = new URLSearchParams(location.search);
const LOCAL = params.get('local') === '1' || window.MASOI_LOCAL === true;
const ss = safeStore(() => sessionStorage);
const ls = safeStore(() => localStorage);

const app = {
  cid: ss.get('masoi-cid') || rid(12),
  name: ls.get('masoi-name') || '',
  av: loadAv(),
  code: null,
  isHost: false,
  net: null,
  engine: null,
  hostPid: null,
  pub: null,
  priv: null,
  joined: false,
  selected: null,
  witchSave: false,
  chat: [],
  chatTab: 'all',
  unread: 0,
  seenLog: 0,
  endsAt: 0,
  shownRoleFor: 0,
  shownEndFor: 0,
  voice: null,
  speaking: new Set(),
  heroKey: '',
};
ss.set('masoi-cid', app.cid);
if (LOCAL) window.__app = app;

function rid(n) {
  const a = 'abcdefghijkmnpqrstuvwxyz23456789';
  let s = '';
  const r = crypto.getRandomValues(new Uint8Array(n));
  for (const x of r) s += a[x % a.length];
  return s;
}
function loadAv() {
  let a = null;
  try { a = JSON.parse(localStorage.getItem('masoi-av') || 'null'); } catch {}
  if (!a || !AVATARS.includes(a.e)) a = { e: AVATARS[Math.floor(Math.random() * AVATARS.length)], c: Math.floor(Math.random() * AV_COLORS.length) };
  return a;
}
function roomCode() { return rid(6).toUpperCase(); }
function safeStore(get) {
  return {
    get: (k) => { try { return get().getItem(k); } catch { return null; } },
    set: (k, v) => { try { get().setItem(k, v); } catch {} },
    del: (k) => { try { get().removeItem(k); } catch {} },
  };
}
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const hue = (s) => { let h = 0; for (const c of String(s)) h = (h * 31 + c.codePointAt(0)) % 360; return h; };
const initials = (n) => { const w = String(n).trim().split(/\s+/); return ((w[0]?.[0] || '?') + (w.length > 1 ? w[w.length - 1][0] : '')).toUpperCase(); };
const avatar = (p, size = '') => p?.av ? `<span class="avatar ${size}" style="--av:${AV_COLORS[p.av.c] || AV_COLORS[0]}">${p.av.e}</span>` : `<span class="avatar ${size}" style="--av:hsl(${hue(p?.name)} 80% 70%)">${esc(initials(p?.name || '?'))}</span>`;

// ================= trang chủ =================
function initHome() {
  $('#roleStrip').innerHTML = ROLE_ORDER.map((r) => roleBadge(r, 'lg')).join('');
  $('#roleCards').innerHTML = ROLE_ORDER.map((r) => { const R = ROLES[r]; return `<div class="card role-card" style="--c:${R.color}"><div class="top">${roleBadge(r, 'lg')}<div><b>${R.name}</b><div class="team">${R.team === 'wolf' ? 'Phe Sói' : 'Phe Dân Làng'}</div></div></div><p>${R.desc}</p></div>`; }).join('');
  $('#nameInput').value = app.name;
  const drawAv = () => {
    $('#avPreview').style.setProperty('--av', AV_COLORS[app.av.c]);
    $('#avPreview').textContent = app.av.e;
    $('#emojiGrid').innerHTML = AVATARS.map((e) => `<button type="button" class="${e === app.av.e ? 'on' : ''}" data-e="${e}" aria-label="Avatar ${e}">${e}</button>`).join('');
    $('#colorRow').innerHTML = AV_COLORS.map((c, i) => `<button type="button" class="${i === app.av.c ? 'on' : ''}" data-c="${i}" style="--sw:${c}" aria-label="Màu ${i + 1}"></button>`).join('');
    $$('#emojiGrid button').forEach((b) => (b.onclick = () => { app.av.e = b.dataset.e; saveAv(); drawAv(); }));
    $$('#colorRow button').forEach((b) => (b.onclick = () => { app.av.c = Number(b.dataset.c); saveAv(); drawAv(); }));
  };
  const saveAv = () => ls.set('masoi-av', JSON.stringify(app.av));
  drawAv();
  const form = $('#homeForm');
  let mode = 'create';
  const setMode = (m) => {
    mode = m;
    form.classList.toggle('join', m === 'join');
    $$('.seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.mode === m));
    $('#homeSubmit').textContent = m === 'join' ? 'Vào làng →' : 'Tạo phòng mới →';
    $('#codeInput').required = m === 'join';
  };
  $$('.seg-btn').forEach((b) => (b.onclick = () => setMode(b.dataset.mode)));
  const pre = (params.get('room') || '').toUpperCase();
  if (pre) { setMode('join'); $('#codeInput').value = pre; }
  form.onsubmit = (e) => {
    e.preventDefault();
    const name = $('#nameInput').value.trim();
    if (!name) return;
    app.name = name;
    ls.set('masoi-name', name);
    if (mode === 'join') {
      const code = $('#codeInput').value.trim().toUpperCase();
      if (!/^[A-Z0-9]{4,8}$/.test(code)) return toast('Mã phòng không hợp lệ', true);
      enterRoom(code, false);
    } else enterRoom(roomCode(), true);
  };
  $('#rulesLink').onclick = (e) => { e.preventDefault(); showRules(); };

  // Tự vào lại phòng khi F5
  const sess = JSON.parse(ss.get('masoi-session') || 'null');
  if (sess && (!pre || sess.code === pre) && app.name) enterRoom(sess.code, sess.host);
}

// ================= vào phòng =================
async function enterRoom(code, host) {
  app.code = code;
  app.isHost = host;
  ss.set('masoi-session', JSON.stringify({ code, host }));
  const url = new URL(location.href);
  url.searchParams.set('room', code);
  history.replaceState(null, '', url);

  $('#home').classList.add('hidden');
  $('#room').classList.remove('hidden');
  renderChrome();
  $('#stage').innerHTML = `<div class="panel hero"><div class="hero-ic">${ICONS.wolf}</div><div><h2>Đang kết nối...</h2><p>Đang tìm đường đến làng <b>${esc(code)}</b>. Có thể mất vài giây.</p></div></div>`;

  try {
    app.net = await createNet(code, { local: LOCAL });
  } catch (e) {
    console.error(e);
    toast('Không tải được thư viện kết nối. Kiểm tra mạng rồi thử lại.', true);
    return;
  }
  const net = app.net;
  app.voice = new Voice(net);
  app.voice.onLevels = onLevels;

  net.on('hello', onHello);
  net.on('act', onAct);
  net.on('chat', onChatMsg);
  net.on('state', (d, pid) => { if (!app.isHost) { app.hostPid = pid; $('#hostLost').classList.add('hidden'); applyPub(d); } });
  net.on('priv', (d, pid) => { if (!app.isHost && pid === app.hostPid) applyPriv(d); });
  net.on('err', (d) => {
    toast(d.msg, true);
    if (d.fatal) leaveRoom(false);
  });
  net.onPeerJoin = (pid) => {
    if (!app.isHost) net.send('hello', { cid: app.cid, name: app.name, av: app.av }, pid);
    else hostSync();
    app.voice?.peerJoined(pid);
  };
  net.onPeerLeave = (pid) => {
    app.voice?.peerLeft(pid);
    if (app.isHost) app.engine.disconnect(pid);
    else if (pid === app.hostPid) $('#hostLost').classList.remove('hidden');
  };
  net.onPeerStream = (stream, pid) => app.voice.peerStream(stream, pid);

  if (host) {
    const saved = JSON.parse(ls.get('masoi-host-' + code) || 'null');
    app.engine = new Engine(app.cid, saved && saved.hostCid === app.cid ? saved : null);
    app.engine.players.forEach((p) => { if (p.cid !== app.cid) p.connected = false; });
    app.engine.onChange = hostSync;
    app.engine.addPlayer(app.cid, app.name, net.selfId, app.av);
    setInterval(() => app.engine.tick(), 400);
  } else {
    // nếu sau 12s vẫn chưa thấy chủ phòng
    setTimeout(() => {
      if (!app.pub && app.net === net) {
        $('#stage').innerHTML = `<div class="panel hero"><div class="hero-ic">${ICONS.wolf}</div><div><h2>Chưa thấy chủ phòng</h2><p>Kiểm tra lại mã <b>${esc(code)}</b> và đảm bảo chủ phòng vẫn đang mở trang. Vẫn đang tiếp tục tìm...</p><div style="margin-top:12px"><button class="btn" id="backHome">Về trang chủ</button></div></div></div>`;
        $('#backHome').onclick = () => leaveRoom(true);
      }
    }, 12000);
  }
  setInterval(tickTimer, 250);
}

function leaveRoom(confirmFirst = true) {
  if (confirmFirst && app.pub && app.pub.phase !== 'lobby' && app.pub.phase !== 'end' && !confirm('Rời khỏi ván đang chơi?')) return;
  ss.del('masoi-session');
  if (app.isHost) ls.del('masoi-host-' + app.code);
  try { app.net?.leave(); } catch {}
  const url = new URL(location.href);
  url.searchParams.delete('room');
  location.href = url.toString();
}

// ================= HOST =================
let syncQueued = false;
function hostSync() {
  if (syncQueued) return;
  syncQueued = true;
  queueMicrotask(() => {
    syncQueued = false;
    const e = app.engine;
    const pub = e.pub();
    app.net.send('state', pub);
    for (const p of e.players) {
      if (p.cid === app.cid) continue;
      if (p.connected && p.pid) app.net.send('priv', e.priv(p.cid), p.pid);
    }
    applyPub(pub);
    applyPriv(e.priv(app.cid));
    ls.set('masoi-host-' + app.code, JSON.stringify(e.s));
  });
}

function onHello(d, pid) {
  if (!app.isHost || !d?.cid) return;
  const err = app.engine.addPlayer(String(d.cid), String(d.name || ''), pid, d.av);
  if (err) app.net.send('err', { msg: err, fatal: true }, pid);
}

function onAct(d, pid) {
  if (!app.isHost) return;
  const p = app.engine.byPid(pid);
  if (!p) return;
  const err = app.engine.handle(p.cid, d);
  if (err) app.net.send('err', { msg: err }, pid);
}

function hostChat(cid, ch, text) {
  text = String(text || '').trim().slice(0, 300);
  if (!text) return;
  const e = app.engine;
  const r = e.chatRoute(cid, ch);
  const me = e.P(cid);
  if (r.err) {
    if (cid === app.cid) toast(r.err, true);
    else app.net.send('err', { msg: r.err }, me.pid);
    return;
  }
  const msg = { cid, name: me.name, av: me.av, ch: r.ch, text, ts: Date.now(), k: 'm' };
  for (const to of r.to) {
    if (to === app.cid) addChat(msg);
    else {
      const p = e.P(to);
      if (p?.connected && p.pid) app.net.send('chat', msg, p.pid);
    }
  }
}

function onChatMsg(d, pid) {
  if (app.isHost) {
    const p = app.engine.byPid(pid);
    if (p) hostChat(p.cid, d.ch, d.text);
  } else if (pid === app.hostPid) addChat(d);
}

// ================= gửi hành động =================
function act(a) {
  if (app.isHost) {
    const err = app.engine.handle(app.cid, a);
    if (err) toast(err, true);
  } else if (app.hostPid) app.net.send('act', a, app.hostPid);
  else toast('Chưa kết nối được chủ phòng', true);
}

// ================= nhận trạng thái =================
function applyPub(pub) {
  const prev = app.pub;
  app.pub = pub;
  app.endsAt = pub.remaining ? Date.now() + pub.remaining : 0;
  const me = pub.players.find((p) => p.cid === app.cid);
  if (me) app.joined = true;
  else if (app.joined) { toast('Bạn đã bị mời ra khỏi phòng.', true); return setTimeout(() => leaveRoom(false), 1200); }
  // phase change resets selection
  if (!prev || prev.phase !== pub.phase || prev.step !== pub.step || prev.round !== pub.round) {
    app.selected = null;
    app.witchSave = false;
    if (prev && pub.phase === 'night' && pub.step === 'main') sfx('night');
    if (prev && pub.phase === 'day') sfx('day');
  }
  // log -> chat
  for (const l of pub.log) if (l.id > app.seenLog) addChat({ k: 'sys', kind: l.kind, text: l.text, ts: l.ts });
  app.seenLog = Math.max(app.seenLog, ...pub.log.map((l) => l.id));
  render();
}

function applyPriv(priv) {
  if (!priv) return;
  app.priv = priv;
  if (priv.role && priv.gameId !== app.shownRoleFor && app.pub?.phase !== 'end') {
    app.shownRoleFor = priv.gameId;
    showRoleCard(true);
  }
  render();
}

// ================= render =================
function render() {
  if (!app.pub) return;
  const pub = app.pub;
  document.body.classList.toggle('night', pub.phase === 'night');
  renderChrome();
  renderStage();
  renderMyCard();
  renderChatTabs();
  updateVoiceRules();
  if (pub.phase === 'end' && app.shownEndFor !== pub.gameId) {
    app.shownEndFor = pub.gameId;
    setTimeout(showEnd, 900);
  }
  if (pub.phase === 'lobby' && $('#overlay').dataset.kind === 'end') closeOverlay();
}

function renderChrome() {
  $('#codeChip').innerHTML = `${icon('copy')}${esc(app.code || '')}`;
  $('#codeChip').onclick = copyInvite;
  $('#leaveBtn').onclick = () => leaveRoom(true);
  const pub = app.pub;
  let ic = 'moon', label = 'Phòng chờ';
  if (pub) {
    if (pub.phase === 'night') { ic = 'moon'; label = `Đêm ${pub.round}`; }
    else if (pub.phase === 'day') { ic = 'sun'; label = `Ngày ${pub.round}`; }
    else if (pub.phase === 'vote') { ic = 'vote'; label = 'Bỏ phiếu'; }
    else if (pub.phase === 'hunter') { ic = 'skull'; label = 'Thợ săn'; }
    else if (pub.phase === 'end') { ic = 'crown'; label = 'Kết thúc'; }
  }
  $('#phasePill').innerHTML = `${icon(ic)}<span class="lbl">${label}</span><span class="t" id="timer">${app.endsAt ? '' : '--:--'}</span>`;
  tickTimer();
  renderVoiceBtns();
}

function tickTimer() {
  const t = $('#timer');
  if (!t) return;
  const pub = app.pub;
  if (!app.endsAt || !pub) { t.textContent = pub ? `${pub.players.length} người` : '--:--'; t.classList.remove('urgent'); $('#timebar').style.width = '0'; return; }
  const ms = Math.max(0, app.endsAt - Date.now());
  const s = Math.ceil(ms / 1000);
  t.textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  t.classList.toggle('urgent', s <= 10 && s > 0);
  $('#timebar').style.width = pub.durMs ? `${Math.min(100, (ms / pub.durMs) * 100)}%` : '0';
}

function knownRole(p) {
  const priv = app.priv || {};
  if (p.role) return p.role;
  if (p.cid === app.cid) return priv.role;
  if (priv.allRoles) return priv.allRoles[p.cid];
  if (priv.wolves?.includes(p.cid)) return 'wolf';
  return null;
}

function renderStage() {
  const pub = app.pub;
  const st = $('#stage');
  const scroll = st.scrollTop;
  st.innerHTML = pub.phase === 'lobby' ? lobbyHTML() : gameHTML();
  st.scrollTop = scroll;
  bindStage();
}

// ---------- phòng chờ ----------
function lobbyHTML() {
  const pub = app.pub, host = app.isHost, cfg = pub.config, n = pub.players.length;
  const total = Object.values(cfg.roles).reduce((a, b) => a + b, 0);
  const rows = ROLE_ORDER.map((r) => {
    const R = ROLES[r], v = cfg.roles[r];
    const max = r === 'villager' ? 16 : r === 'wolf' ? 5 : 1;
    return `<div class="role-row">${roleBadge(r)}<div><div class="rn">${R.name}</div><div class="rd">${R.short}</div></div>
      ${host ? `<div class="stepper"><button data-role="${r}" data-d="-1" ${v <= 0 ? 'disabled' : ''}>−</button><b>${v}</b><button data-role="${r}" data-d="1" ${v >= max ? 'disabled' : ''}>+</button></div>` : `<div class="stepper"><b style="padding:6px 10px">${v}</b></div>`}</div>`;
  }).join('');
  const d = cfg.dur;
  const num = (k, label) => `<label>${label}<input class="num" type="number" data-dur="${k}" value="${d[k]}" ${host ? '' : 'disabled'} /></label>`;
  return `
  <div class="panel lobby-hero hero enter">
    <div class="grow">
      <div class="lbl">Mã phòng</div>
      <div class="big-code">${esc(app.code)}</div>
      <p style="margin:10px 0 0">Gửi link cho bạn bè để cùng vào làng. ${LOCAL ? '<b>(Chế độ thử nghiệm: chỉ các tab trên máy này)</b>' : ''}</p>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <button class="btn sun" id="copyLink">${icon('copy')}Sao chép link mời</button>
      ${navigator.share ? `<button class="btn" id="shareLink">Chia sẻ</button>` : ''}
    </div>
  </div>
  <div class="sect-title"><h3>Dân làng (${n})</h3><span class="muted">Tối thiểu ${MIN_PLAYERS} người</span></div>
  <div class="grid">${pub.players.map((p) => playerCard(p, { lobby: true })).join('')}</div>
  <div class="sect-title"><h3>Bộ bài vai trò</h3>${host ? `<button class="btn sm" id="suggest">Gợi ý cho ${n} người</button>` : `<span class="muted">Chủ phòng thiết lập</span>`}</div>
  <div class="panel cfg">
    ${rows}
    <div class="cfg-foot"><span class="tally ${total === n ? 'ok' : 'bad'}">${total} vai / ${n} người</span>
      <span class="muted" style="color:var(--ink-2);font-size:13px;font-weight:600">${total === n ? 'Khớp rồi!' : total < n ? `Thêm ${n - total} vai nữa` : `Bớt ${total - n} vai`}</span></div>
    <div class="durs">${num('night', 'Đêm (giây)')}${num('witch', 'Phù thủy (giây)')}${num('day', 'Thảo luận (giây)')}${num('vote', 'Bỏ phiếu (giây)')}</div>
    <label class="toggle"><input type="checkbox" id="revealT" ${cfg.reveal ? 'checked' : ''} ${host ? '' : 'disabled'} />Lộ vai trò khi một người chết</label>
  </div>
  <div class="start-wrap">
    ${host ? `<button class="btn primary big" id="startBtn" ${pub.canStart ? 'disabled' : ''}>${icon('moon')}Bắt đầu — Đêm buông xuống</button>` : `<button class="btn big" disabled>Đang chờ chủ phòng bắt đầu...</button>`}
    ${pub.canStart ? `<div class="why">${esc(pub.canStart)}</div>` : ''}
  </div>`;
}

// ---------- trong game ----------
function heroHTML() {
  const pub = app.pub, P = (cid) => pub.players.find((p) => p.cid === cid);
  const deaths = (ids) => ids.length ? `<div class="deaths">${ids.map((id) => { const p = P(id); return p ? `<span class="death-chip">${avatar(p, 'sm')}${esc(p.name)}${p.role ? ' · ' + ROLES[p.role].name : ''}</span>` : ''; }).join('')}</div>` : '';
  let ic = ICONS.wolf, h = '', sub = '', extra = '';
  if (pub.phase === 'night') {
    ic = `${'<svg viewBox="0 0 64 64"><path fill="currentColor" d="M40 6 A26 26 0 1 0 58 44 A21 21 0 0 1 40 6 Z"/></svg>'}`;
    h = `Đêm ${pub.round}`;
    sub = pub.step === 'witch' ? 'Bầy sói đã chọn xong. Phù thủy đang cân nhắc hai bình thuốc...' : 'Cả làng nhắm mắt. Sói, Tiên tri và Bảo vệ đang thức dậy...';
  } else if (pub.phase === 'day') {
    ic = '<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="12" fill="currentColor"/><g stroke="currentColor" stroke-width="5" stroke-linecap="round"><path d="M32 4V12M32 52V60M4 32H12M52 32H60M12 12L18 18M46 46L52 52M12 52L18 46M46 18L52 12"/></g></svg>';
    h = `Ngày ${pub.round}`;
    const nd = pub.lastDeaths || [];
    sub = nd.length ? 'Trời sáng, dân làng phát hiện có người đã ra đi đêm qua:' : 'Trời sáng. Một đêm bình yên, không ai chết. Hãy thảo luận xem ai là sói!';
    extra = deaths(nd);
  } else if (pub.phase === 'vote') {
    ic = '<svg viewBox="0 0 64 64"><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 2 V26"/><ellipse cx="32" cy="42" rx="12" ry="15" fill="none" stroke="currentColor" stroke-width="5"/><rect x="27" y="22" width="10" height="9" rx="3" fill="currentColor"/></svg>';
    h = 'Giờ phán xét';
    const n = Object.keys(pub.votes).length, alive = pub.players.filter((p) => p.alive).length;
    sub = `Chọn người bạn muốn đưa lên giá treo cổ. Đã bầu: ${n}/${alive}. Hòa phiếu thì không ai bị treo.`;
  } else if (pub.phase === 'hunter') {
    ic = ICONS.hunter;
    const hp = P(pub.hunterCid);
    h = 'Phát súng cuối cùng';
    sub = `${esc(hp?.name)} là Thợ Săn và đang chọn người để kéo theo...`;
    extra = deaths(pub.lastDeaths || []);
  } else if (pub.phase === 'end') {
    ic = pub.winner === 'wolf' ? ICONS.wolf : ICONS.villager;
    h = pub.winner === 'wolf' ? 'Phe Sói chiến thắng' : 'Dân Làng chiến thắng';
    sub = 'Ván đấu đã kết thúc. Tất cả vai trò đã được lật.';
  }
  const key = pub.phase + pub.step + pub.round;
  const enter = key !== app.heroKey;
  app.heroKey = key;
  const hcls = pub.phase === 'end' ? 'hero-end-' + pub.winner : 'hero-' + pub.phase;
  return `<div class="panel hero ${hcls} ${enter ? 'enter' : ''}"><div class="hero-ic">${ic}</div><div><h2>${h}</h2><p>${sub}</p>${extra}</div></div>`;
}

function actionHTML() {
  const pub = app.pub, pr = app.priv?.prompt, P = (cid) => pub.players.find((p) => p.cid === cid);
  const nm = (cid) => esc(P(cid)?.name || '');
  const hostSkip = app.isHost && (pub.phase === 'day' || pub.phase === 'vote')
    ? `<button class="btn sm ghost" id="skipBtn">${pub.phase === 'day' ? 'Vào bỏ phiếu ngay' : 'Kết thúc bỏ phiếu'}</button>` : '';
  const box = (cls, msg, btns = '') => `<div class="panel action ${cls || 'go'}"><div class="msg">${msg}</div><div class="btns">${btns}${hostSkip}</div></div>`;
  if (pub.phase === 'end') return box('calm', `<b>Ván đã kết thúc.</b><small>${app.isHost ? 'Bạn có thể đưa cả làng về phòng chờ để chơi ván mới.' : 'Chờ chủ phòng mở ván mới.'}</small>`,
    `<button class="btn" id="showEnd">Xem kết quả</button>${app.isHost ? `<button class="btn primary" id="toLobby">Ván mới</button>` : ''}`);
  if (!pr) {
    if (pub.phase === 'day') return box('calm', `<b>Thảo luận!</b><small>Bật mic hoặc chat để tranh luận. Hết giờ sẽ chuyển sang bỏ phiếu.</small>`);
    if (pub.phase === 'hunter') return box('calm', `<b>Thợ săn đang ngắm bắn...</b><small>Hãy cầu nguyện đó không phải là bạn.</small>`);
    return '';
  }
  switch (pr.kind) {
    case 'sleep': return box('calm', `<b>Bạn đang say giấc.</b><small>Chờ trời sáng... Đừng nói gì nhé!</small>`);
    case 'dead': return box('calm', `<b>Bạn đã trở thành hồn ma.</b><small>Bạn có thể xem vai của mọi người và trò chuyện (chat & voice) với các hồn ma khác.</small>`);
    case 'wolf': {
      const tally = {};
      Object.values(pr.votes || {}).forEach((v) => v && (tally[v] = (tally[v] || 0) + 1));
      const t = Object.entries(tally).map(([c, n]) => `${nm(c)} (${n})`).join(', ');
      return box('wolfy', `<b>Chọn con mồi đêm nay.</b><small>Bấm vào một người để bỏ phiếu cắn. ${t ? 'Bầy đang chọn: ' + t : 'Bầy chưa ai chọn.'}</small>`);
    }
    case 'seer':
      if (pr.done) {
        const r = app.priv.seerResults.find((x) => x.round === pub.round);
        return box('', `<b>Kết quả soi: ${nm(pr.chosen)} ${r?.isWolf ? '<span style="color:var(--coral)">LÀ MA SÓI!</span>' : 'không phải sói.'}</b><small>Hãy ghi nhớ và dẫn dắt dân làng một cách khéo léo.</small>`);
      }
      return box('', `<b>Bạn muốn soi ai?</b><small>${app.selected ? 'Đã chọn ' + nm(app.selected) + '.' : 'Bấm vào một người.'}</small>`,
        `<button class="btn primary" id="doAct" ${app.selected ? '' : 'disabled'}>${roleBadge('seer', 'xs')}Soi người này</button>`);
    case 'guard':
      return box('', `<b>Bảo vệ ai đêm nay?</b><small>${pr.chosen ? 'Đang bảo vệ: ' + nm(pr.chosen) + '. Có thể đổi trước khi hết giờ.' : 'Bấm vào một người (kể cả bạn).'}${pr.last ? ' Đêm qua đã bảo vệ ' + nm(pr.last) + '.' : ''}</small>`);
    case 'witch': {
      const v = pr.victim ? `Đêm nay sói đã cắn <b>${nm(pr.victim)}</b>.` : pr.canHeal ? '' : 'Bình cứu đã dùng — bạn không còn biết ai bị cắn.';
      const btns = `${pr.canHeal ? `<button class="btn potion heal ${app.witchSave ? 'active' : ''}" id="healBtn">${icon('heal')}${app.witchSave ? 'Sẽ cứu' : 'Cứu'}</button>` : ''}
        <button class="btn primary" id="witchOk">${app.witchSave || app.selected ? 'Xác nhận' : 'Không dùng'}</button>`;
      return box('', `<span>${v || 'Đêm nay sói không cắn ai.'}</span><small>${pr.canPoison ? (app.selected ? `Sẽ đầu độc <b>${nm(app.selected)}</b> (bấm lại để bỏ chọn).` : 'Bấm vào một người nếu muốn dùng bình độc.') : 'Bình độc đã dùng.'}</small>`, btns);
    }
    case 'vote':
      return box('', `<b>${pr.chosen ? (pr.chosen === 'skip' ? 'Bạn đã chọn bỏ qua.' : 'Bạn đã bầu: ' + nm(pr.chosen)) : 'Bấm vào người bạn muốn treo cổ.'}</b><small>Có thể đổi phiếu trước khi hết giờ.</small>`,
        `<button class="btn ${pr.chosen === 'skip' ? 'primary' : ''}" id="voteSkip">Bỏ qua</button>`);
    case 'shoot':
      return box('wolfy', `<b>Bạn là Thợ Săn và đã chết!</b><small>${app.selected ? 'Nhắm vào ' + nm(app.selected) + '.' : 'Chọn một người để kéo theo.'}</small>`,
        `<button class="btn" id="noShoot">Không bắn</button><button class="btn danger" id="doAct" ${app.selected ? '' : 'disabled'}>${icon('hunter')}Bắn!</button>`);
  }
  return '';
}

function gameHTML() {
  const pub = app.pub;
  return `${heroHTML()}${actionHTML()}<div class="grid">${pub.players.map((p) => playerCard(p, {})).join('')}</div>`;
}

function playerCard(p, { lobby }) {
  const pub = app.pub, priv = app.priv || {}, pr = priv.prompt;
  const me = p.cid === app.cid;
  const role = lobby ? null : knownRole(p);
  const cls = ['pcard'];
  if (me) cls.push('me');
  if (!p.alive && !lobby) cls.push('dead');
  if (!p.connected) cls.push('offline');
  if (!lobby && priv.wolves?.includes(p.cid) && !me) cls.push('mate');
  const spk = me ? app.speaking.has('self') : p.pid && app.speaking.has(p.pid);
  if (spk) cls.push('speaking');
  const selectable = !lobby && pr?.targets?.includes(p.cid);
  if (selectable) cls.push('selectable');
  const chosen = pr && (pr.kind === 'wolf' || pr.kind === 'guard' || pr.kind === 'vote') ? pr.chosen : app.selected;
  if (selectable && chosen === p.cid) cls.push('selected');

  let tag = '';
  if (lobby) tag = p.cid === pub.hostCid ? 'Chủ phòng' : p.connected ? 'Sẵn sàng' : 'Mất kết nối';
  else if (!p.alive) tag = p.cause === 'wolf' ? 'Bị sói cắn' : p.cause === 'hang' ? 'Bị treo cổ' : p.cause === 'poison' ? 'Trúng độc' : p.cause === 'hunter' ? 'Bị bắn' : 'Đã chết';
  else if (role) tag = ROLES[role].name;
  const seer = !lobby && priv.seerResults?.filter((r) => r.cid === p.cid).pop();
  // phiếu
  let votes = '';
  if (pub.phase === 'vote') {
    const voters = Object.entries(pub.votes).filter(([, t]) => t === p.cid).map(([c]) => pub.players.find((x) => x.cid === c)).filter(Boolean);
    if (voters.length) votes = `<span class="vote-count">${voters.length}</span><div class="voters">${voters.slice(0, 6).map((v) => avatar(v, 'xs')).join('')}</div>`;
  }
  let wolfp = '';
  if (pr?.kind === 'wolf') {
    const n = Object.values(pr.votes || {}).filter((v) => v === p.cid).length;
    if (n) wolfp = `<div class="wolfpick">${Array.from({ length: n }, () => icon('wolf')).join('')}</div>`;
  }
  return `<div class="${cls.join(' ')}" data-cid="${p.cid}" ${selectable ? 'role="button" tabindex="0"' : ''}>
    <div class="corner l">${p.cid === pub.hostCid ? `<span class="ic crown" title="Chủ phòng">${UI_CROWN}</span>` : ''}</div>
    ${lobby && app.isHost && !me ? `<button class="kick" data-kick="${p.cid}" title="Mời ra">×</button>` : ''}
    <div class="corner r">${role && !lobby ? roleBadge(role, 'xs') : ''}</div>
    ${avatar(p)}
    ${!p.alive && !lobby ? `<span class="skull">${UI_SKULL}</span>` : ''}
    <div class="pname">${esc(p.name)}</div>
    <div class="ptag">${seer ? `<span class="seer-mark ${seer.isWolf ? 'w' : 'v'}">${seer.isWolf ? 'SÓI' : 'Không phải sói'}</span>` : esc(tag)}</div>
    ${wolfp}${votes}
  </div>`;
}
const UI_CROWN = '<svg viewBox="0 0 64 64"><path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/></svg>';
const UI_SKULL = '<svg viewBox="0 0 64 64"><path fill="currentColor" d="M32 6 C17 6 9 16 9 29 C9 37 13 42 18 45 V53 Q18 57 22 57 H42 Q46 57 46 53 V45 C51 42 55 37 55 29 C55 16 47 6 32 6 Z"/><circle cx="23" cy="31" r="6" fill="var(--ink)"/><circle cx="41" cy="31" r="6" fill="var(--ink)"/><path fill="var(--ink)" d="M32 38 L36 45 H28 Z"/></svg>';

function bindStage() {
  const pub = app.pub;
  const on = (sel, f) => { const el = $(sel); if (el) el.onclick = f; };
  // lobby
  on('#copyLink', copyInvite);
  on('#shareLink', () => navigator.share({ title: 'Ma Sói', text: `Vào làng chơi Ma Sói với mình! Mã phòng: ${app.code}`, url: inviteUrl() }).catch(() => {}));
  on('#startBtn', () => act({ t: 'start' }));
  on('#suggest', () => act({ t: 'cfg', cfg: { roles: suggestRoles(pub.players.length) } }));
  $$('.stepper button[data-role]').forEach((b) => (b.onclick = () => {
    const r = b.dataset.role;
    act({ t: 'cfg', cfg: { roles: { [r]: pub.config.roles[r] + Number(b.dataset.d) } } });
  }));
  $$('input[data-dur]').forEach((i) => (i.onchange = () => act({ t: 'cfg', cfg: { dur: { [i.dataset.dur]: Number(i.value) } } })));
  on('#revealT', (e) => act({ t: 'cfg', cfg: { reveal: e.target.checked } }));
  $$('[data-kick]').forEach((b) => (b.onclick = (e) => { e.stopPropagation(); act({ t: 'kick', cid: b.dataset.kick }); }));
  // game
  on('#skipBtn', () => act({ t: 'skip' }));
  on('#toLobby', () => act({ t: 'lobby' }));
  on('#showEnd', showEnd);
  on('#voteSkip', () => act({ t: 'vote', target: 'skip' }));
  on('#noShoot', () => act({ t: 'shoot', target: null }));
  on('#healBtn', () => { app.witchSave = !app.witchSave; render(); });
  on('#witchOk', () => act({ t: 'witch', save: app.witchSave, poison: app.selected }));
  on('#doAct', () => {
    const pr = app.priv?.prompt;
    if (pr && app.selected) act({ t: pr.kind, target: app.selected });
  });
  $$('.pcard.selectable').forEach((el) => {
    const f = () => pickTarget(el.dataset.cid);
    el.onclick = f;
    el.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); f(); } };
  });
}

function pickTarget(cid) {
  const pr = app.priv?.prompt;
  if (!pr) return;
  if (pr.kind === 'wolf' || pr.kind === 'guard' || pr.kind === 'vote') return act({ t: pr.kind, target: cid });
  app.selected = app.selected === cid ? null : cid;
  render();
}

// ---------- thẻ vai ----------
function renderMyCard() {
  const el = $('#mycard');
  const priv = app.priv, pub = app.pub;
  if (!priv?.role || pub.phase === 'lobby') { el.innerHTML = ''; return; }
  const R = ROLES[priv.role];
  const me = pub.players.find((p) => p.cid === app.cid);
  const mates = priv.role === 'wolf' ? pub.players.filter((p) => priv.wolves.includes(p.cid) && p.cid !== app.cid).map((p) => esc(p.name)).join(', ') : '';
  const witch = priv.witch ? ` · Cứu: ${priv.witch.heal ? 'còn' : 'hết'} · Độc: ${priv.witch.poison ? 'còn' : 'hết'}` : '';
  el.innerHTML = `<div class="panel mycard" id="myCardBtn" style="--c:${R.color}">${roleBadge(priv.role, 'lg')}
    <div class="who"><div class="k">Vai của bạn ${me && !me.alive ? '· đã chết' : ''}</div><div class="v">${R.name}</div>
    <div class="s">${mates ? 'Đồng bọn: ' + mates : R.short}${witch}</div></div></div>
    ${priv.notes?.length ? `<div class="panel notes">${priv.notes.slice(-4).map((n) => `<div>${esc(n.text)}</div>`).join('')}</div>` : ''}`;
  $('#myCardBtn').onclick = () => showRoleCard(false);
}

// ================= overlay =================
function openOverlay(html, kind = '') {
  const o = $('#overlay');
  o.innerHTML = html;
  o.dataset.kind = kind;
  o.classList.remove('hidden');
  o.onclick = (e) => { if (e.target === o) closeOverlay(); };
}
function closeOverlay() { const o = $('#overlay'); o.classList.add('hidden'); o.innerHTML = ''; o.dataset.kind = ''; }

function showRoleCard(fresh) {
  const role = app.priv?.role;
  if (!role) return;
  const R = ROLES[role];
  const mates = role === 'wolf' ? app.pub.players.filter((p) => app.priv.wolves.includes(p.cid) && p.cid !== app.cid).map((p) => esc(p.name)) : [];
  openOverlay(`<div class="modal panel">
    <p style="margin:0">${fresh ? 'Lá bài định mệnh của bạn' : 'Vai trò của bạn'}</p>
    <div class="flip ${fresh ? '' : 'flipped'}" id="flip">
      <div class="flip-inner">
        <div class="face front"><span class="logo-sq">${ICONS.wolf}</span><span>Chạm để lật bài</span></div>
        <div class="face back" style="--c:${R.color}">${roleBadge(role, 'xl')}<div class="rname">${R.name}</div>
          <div class="team">${R.team === 'wolf' ? 'Phe Sói' : 'Phe Dân Làng'}</div>
          <div class="rdesc">${R.desc}${mates.length ? `<br/><br/><b style="color:${R.color}">Đồng bọn: ${mates.join(', ')}</b>` : ''}</div></div>
      </div>
    </div>
    <button class="btn primary big" id="roleOk">${fresh ? 'Mình đã hiểu' : 'Đóng'}</button>
    <p style="font-size:12px;margin:10px 0 0">Đừng để ai nhìn thấy màn hình của bạn!</p>
  </div>`, 'role');
  const flip = $('#flip');
  flip.onclick = () => flip.classList.add('flipped');
  if (fresh) setTimeout(() => flip.classList.add('flipped'), 900);
  $('#roleOk').onclick = closeOverlay;
}

function showEnd() {
  const pub = app.pub;
  if (pub.phase !== 'end') return;
  const wolf = pub.winner === 'wolf';
  const myRole = app.priv?.role;
  const won = myRole && (ROLES[myRole].team === pub.winner);
  openOverlay(`<div class="modal panel wide">
    <div style="display:flex;justify-content:center">${roleBadge(wolf ? 'wolf' : 'villager', 'xl')}</div>
    <h2 class="end-title" style="color:${wolf ? 'var(--coral)' : 'var(--lime)'}">${wolf ? 'Phe Sói thắng!' : 'Dân Làng thắng!'}</h2>
    <p>${myRole ? (won ? 'Chúc mừng, bạn đã chiến thắng!' : 'Lần này bạn đã thua. Phục thù ván sau nhé!') : ''}</p>
    <div class="end-list">${pub.players.map((p) => `<div class="end-row ${p.alive ? '' : 'dead'}">${roleBadge(p.role, 'sm')}<div><div class="nm">${esc(p.name)}${p.cid === app.cid ? ' (bạn)' : ''}</div><div class="rr">${ROLES[p.role]?.name || ''} · ${p.alive ? 'Sống sót' : 'Đã chết'}</div></div></div>`).join('')}</div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button class="btn" id="endClose">Xem lại</button>
      ${app.isHost ? `<button class="btn primary" id="endLobby">Chơi ván mới</button>` : ''}
    </div>
  </div>`, 'end');
  $('#endClose').onclick = closeOverlay;
  const l = $('#endLobby');
  if (l) l.onclick = () => { closeOverlay(); act({ t: 'lobby' }); };
  sfx(wolf ? 'night' : 'day');
  if (won) confetti();
}

function showRules() {
  openOverlay(`<div class="modal panel wide" style="text-align:left">
    <h2 style="text-align:center">Luật chơi</h2>
    <p>Mỗi người nhận bí mật một vai. Ban đêm các vai đặc biệt hành động, ban ngày cả làng thảo luận và bỏ phiếu treo cổ một người. <b>Dân làng</b> thắng khi diệt hết sói; <b>Sói</b> thắng khi số sói ≥ số người còn lại.</p>
    <div class="rules">${ROLE_ORDER.map((r) => `<div class="r">${roleBadge(r)}<div><b style="color:${ROLES[r].color}">${ROLES[r].name}</b><p>${ROLES[r].desc}</p></div></div>`).join('')}</div>
    <div style="text-align:center"><button class="btn primary" id="rulesOk">Đã rõ</button></div>
  </div>`);
  $('#rulesOk').onclick = closeOverlay;
}

// ================= chat =================
function chatChannels() {
  const pub = app.pub, priv = app.priv;
  const me = pub?.players.find((p) => p.cid === app.cid);
  const tabs = [{ ch: 'all', label: 'Tất cả' }];
  if (!pub || pub.phase === 'lobby' || pub.phase === 'end') return tabs;
  tabs.push({ ch: 'day', label: 'Làng' });
  if (priv?.role === 'wolf' || (me && !me.alive)) tabs.push({ ch: 'wolf', label: 'Bầy sói' });
  if (me && !me.alive) tabs.push({ ch: 'dead', label: 'Hồn ma' });
  return tabs;
}

function renderChatTabs() {
  const tabs = chatChannels();
  if (!tabs.find((t) => t.ch === app.chatTab)) app.chatTab = 'all';
  const html = tabs.map((t) => `<button data-ch="${t.ch}" class="${t.ch === app.chatTab ? 'active' : ''}">${t.label}</button>`).join('');
  const el = $('#chatTabs');
  if (el.innerHTML !== html) {
    el.innerHTML = html;
    $$('button', el).forEach((b) => (b.onclick = () => { app.chatTab = b.dataset.ch; renderChatTabs(); renderChatList(); }));
  }
  // khả năng gửi
  const { ch, ok, hint } = sendChannel();
  const inp = $('#chatInput');
  inp.disabled = !ok;
  inp.placeholder = hint;
  inp.dataset.ch = ch;
}

function sendChannel() {
  const pub = app.pub, priv = app.priv;
  const me = pub?.players.find((p) => p.cid === app.cid);
  if (!pub || pub.phase === 'lobby' || pub.phase === 'end') return { ch: 'day', ok: true, hint: 'Nhắn cho cả làng...' };
  if (me && !me.alive) return { ch: 'dead', ok: true, hint: 'Thì thầm với các hồn ma...' };
  if (priv?.role === 'wolf' && (app.chatTab === 'wolf' || pub.phase === 'night')) return { ch: 'wolf', ok: true, hint: 'Bàn kế hoạch với bầy sói...' };
  if (pub.phase === 'night') return { ch: 'day', ok: false, hint: 'Ban đêm — cả làng đang ngủ...' };
  return { ch: 'day', ok: true, hint: 'Nhắn cho cả làng...' };
}

function addChat(m) {
  app.chat.push(m);
  if (app.chat.length > 400) app.chat.shift();
  if (visibleIn(m, app.chatTab)) appendMsg(m);
  if (m.k === 'm' && $('.room-body').dataset.tab === 'stage' && innerWidth <= 900) {
    app.unread++;
    const b = $('#chatBadge');
    b.textContent = app.unread;
    b.classList.remove('hidden');
  }
}

function visibleIn(m, tab) {
  if (tab === 'all') return true;
  if (m.k === 'sys') return tab === 'day';
  return m.ch === tab;
}

const SYS_ICON = { night: 'moon', day: 'sun', death: 'skull', vote: 'vote', win: 'crown', hunter: 'hunter', phase: 'card', join: 'users', leave: 'door' };
function msgHTML(m) {
  if (m.k === 'sys') return `<div class="sys ${m.kind}">${SYS_ICON[m.kind] === 'hunter' ? `<span class="ic">${ICONS.hunter}</span>` : icon(SYS_ICON[m.kind] || 'moon')}<span>${esc(m.text)}</span></div>`;
  const p = { name: m.name, av: m.av };
  const tag = m.ch === 'wolf' ? '<span class="chtag">Sói</span>' : m.ch === 'dead' ? '<span class="chtag">Hồn ma</span>' : '';
  return `<div class="msg ${m.ch} ${m.cid === app.cid ? 'mine' : ''}">${avatar(p, 'sm')}<div class="body"><div class="nm">${esc(m.name)}${tag}</div>${esc(m.text)}</div></div>`;
}

function appendMsg(m) {
  const list = $('#chatList');
  const atBottom = list.scrollHeight - list.scrollTop - list.clientHeight < 80;
  list.insertAdjacentHTML('beforeend', msgHTML(m));
  if (atBottom || m.cid === app.cid) list.scrollTop = list.scrollHeight;
}

function renderChatList() {
  const list = $('#chatList');
  list.innerHTML = app.chat.filter((m) => visibleIn(m, app.chatTab)).map(msgHTML).join('');
  list.scrollTop = list.scrollHeight;
}

$('#chatForm').onsubmit = (e) => {
  e.preventDefault();
  const inp = $('#chatInput');
  const text = inp.value.trim();
  if (!text || !app.pub) return;
  const { ch, ok } = sendChannel();
  if (!ok) return;
  inp.value = '';
  if (app.isHost) hostChat(app.cid, ch, text);
  else if (app.hostPid) app.net.send('chat', { ch, text }, app.hostPid);
};

$$('.mobile-tabs button').forEach((b) => (b.onclick = () => {
  $('.room-body').dataset.tab = b.dataset.tab;
  $$('.mobile-tabs button').forEach((x) => x.classList.toggle('active', x === b));
  if (b.dataset.tab === 'side') {
    app.unread = 0;
    $('#chatBadge').classList.add('hidden');
    const l = $('#chatList');
    l.scrollTop = l.scrollHeight;
  }
}));
$$('.mt-ic').forEach((el) => (el.innerHTML = icon(el.dataset.ic)));
$$('[data-logo]').forEach((el) => (el.innerHTML = ICONS.wolf));

function confetti() {
  const box = document.createElement('div');
  box.className = 'confetti';
  const cols = ['#ffc93d', '#ff5a6a', '#2f8bff', '#12c584', '#ff6fb5', '#9b5cf6'];
  box.innerHTML = Array.from({ length: 80 }, () => `<i style="left:${Math.random() * 100}%;background:${cols[Math.floor(Math.random() * cols.length)]};animation-duration:${2 + Math.random() * 2.5}s;animation-delay:${Math.random() * .8}s;transform:rotate(${Math.random() * 360}deg)"></i>`).join('');
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 5500);
}

// ================= voice =================
function voiceRules() {
  const pub = app.pub, priv = app.priv || {};
  const me = pub?.players.find((p) => p.cid === app.cid);
  const byPid = (pid) => pub?.players.find((p) => p.pid === pid);
  if (!pub || !me || pub.phase === 'lobby' || pub.phase === 'end') return { canSpeak: true, canHear: () => true, why: '' };
  const night = pub.phase === 'night';
  const meWolf = priv.role === 'wolf';
  let canSpeak = true, why = '';
  if (!me.alive) why = 'Bạn đã chết — chỉ hồn ma nghe được bạn';
  else if (night && !meWolf) { canSpeak = false; why = 'Ban đêm — mic tự tắt'; }
  else if (night && meWolf) why = 'Ban đêm — chỉ bầy sói nghe được bạn';
  const canHear = (pid) => {
    const o = byPid(pid);
    if (!o) return false;
    if (!me.alive) return true; // hồn ma nghe tất cả
    if (!o.alive) return false; // người sống không nghe hồn ma
    if (night) return meWolf && priv.wolves?.includes(o.cid);
    return true;
  };
  return { canSpeak, canHear, why };
}

function updateVoiceRules() {
  if (!app.voice) return;
  const r = voiceRules();
  app.voice.setRules(r);
  renderVoiceBtns();
}

function renderVoiceBtns() {
  const mic = $('#micBtn'), deaf = $('#deafBtn');
  const v = app.voice;
  const r = app.pub ? voiceRules() : { canSpeak: true, why: '' };
  if (!v || !v.enabled) {
    mic.className = 'icon-btn';
    mic.innerHTML = icon('micOff');
    mic.title = 'Bật voice chat';
  } else {
    const live = v.micOn && r.canSpeak;
    mic.className = `icon-btn ${live ? 'on' : 'off'} ${!r.canSpeak ? 'locked' : ''}`;
    mic.innerHTML = icon(live ? 'mic' : 'micOff');
    mic.title = r.why || (v.micOn ? 'Tắt mic' : 'Bật mic');
  }
  deaf.className = `icon-btn ${v?.deaf ? 'off' : ''}`;
  deaf.innerHTML = icon(v?.deaf ? 'speakerOff' : 'speaker');
  deaf.title = v?.deaf ? 'Bật âm thanh' : 'Tắt âm thanh';
}

$('#micBtn').onclick = async () => {
  const v = app.voice;
  if (!v) return;
  if (!v.enabled) {
    try {
      await v.enable();
      updateVoiceRules();
      toast(voiceRules().why || 'Đã bật voice chat');
    } catch (e) {
      console.warn(e);
      toast('Không truy cập được micro. Hãy cho phép quyền micro trong trình duyệt.', true);
    }
  } else {
    v.setMic(!v.micOn);
    const r = voiceRules();
    if (v.micOn && !r.canSpeak) toast(r.why);
  }
  renderVoiceBtns();
};
$('#deafBtn').onclick = () => {
  const v = app.voice;
  if (!v) return;
  v.ensureCtx();
  v.setDeaf(!v.deaf);
  renderVoiceBtns();
};

function onLevels(set) {
  const changed = set.size !== app.speaking.size || [...set].some((x) => !app.speaking.has(x));
  if (!changed) return;
  app.speaking = set;
  for (const el of $$('.pcard[data-cid]')) {
    const p = app.pub?.players.find((x) => x.cid === el.dataset.cid);
    if (!p) continue;
    const on = p.cid === app.cid ? set.has('self') : set.has(p.pid);
    el.classList.toggle('speaking', !!on);
  }
}

// ================= tiện ích UI =================
function inviteUrl() {
  const u = new URL(location.href);
  u.search = '';
  u.searchParams.set('room', app.code);
  if (LOCAL) u.searchParams.set('local', '1');
  return u.toString();
}
async function copyInvite() {
  try {
    await navigator.clipboard.writeText(inviteUrl());
    toast('Đã sao chép link mời!');
  } catch {
    prompt('Sao chép link này:', inviteUrl());
  }
}

function toast(msg, err = false) {
  const t = document.createElement('div');
  t.className = 'toast' + (err ? ' err' : '');
  t.textContent = msg;
  $('#toasts').appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 300); }, 3200);
}

// Âm thanh nhỏ khi chuyển ngày/đêm (tự tổng hợp, không cần file)
let actx;
function sfx(kind) {
  try {
    actx ||= new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state !== 'running') return;
    const o = actx.createOscillator(), g = actx.createGain();
    const t = actx.currentTime;
    o.type = 'sine';
    const [a, b] = kind === 'night' ? [440, 220] : [330, 660];
    o.frequency.setValueAtTime(a, t);
    o.frequency.exponentialRampToValueAtTime(b, t + 0.6);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.08, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    o.connect(g).connect(actx.destination);
    o.start(t);
    o.stop(t + 1);
  } catch {}
}
document.addEventListener('pointerdown', () => { try { actx ||= new (window.AudioContext || window.webkitAudioContext)(); actx.resume(); } catch {} }, { once: true });

initHome();
