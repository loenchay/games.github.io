import '../theme.js';
import { createNet } from '../net.js';
import { Voice } from '../voice.js';
import { ICONS, AVATARS, AV_COLORS, icon } from '../roles.js';
import { $, $$, esc, params, LOCAL, ss, ls, roomCode, loadProfile, saveProfile, clientId, avatarHTML, avatarPicker, toast, confetti, SFX, unlockAudio, inviteUrl, copyText } from '../common.js';
import { DientaEngine, loadData, DEFAULT_POSE } from './engine.js';
import { SKINS, SKIN_IDS, CONTROLS, PROP_LIST } from './puppet.js';
import { createPuppet } from './puppet3d.js';
import { Keymap, keyLabel, eventKey, actionGroups } from './keys.js';
import { parseTip } from './tips.js';
import { gameIdentity, startPresence, presenceUpdate } from '../site.js';

const keymap = new Keymap();
const kbd = (id) => { const k = keymap.keyOf(id); return k ? `<kbd>${esc(keyLabel(k))}</kbd>` : ''; };

const NS = 'dienta';
const prof = loadProfile();
const app = {
  cid: clientId(),
  code: null, isHost: false, net: null, engine: null, hostPid: null,
  pub: null, priv: null, joined: false, endsAt: 0,
  chat: [], seenLog: 0, unread: 0,
  look: loadLook(),
  pose: { ...DEFAULT_POSE },
  poseSeq: 0,
  puppet: null, voice: null, speaking: new Set(),
  shownEnd: 0, lastTurnKey: '', ctlTab: 0,
};
if (LOCAL) window.__app = app;

// ---- tuỳ chọn phòng (lưu lại cho lần tạo phòng sau) ----
const RO_DEFAULT = { order: 'random', turns: 2, actTime: 90, answerTime: 12, hints: true, mult: true, rerolls: 1, categories: null };
function loadRoomOpts() {
  let o = null;
  try { o = JSON.parse(ls.get('dienta-room-opts') || 'null'); } catch {}
  return { ...RO_DEFAULT, ...(o || {}) };
}
const saveRoomOpts = (o) => ls.set('dienta-room-opts', JSON.stringify(o));

// Các ô cài đặt dùng chung cho màn tạo phòng và phòng chờ
function optsHTML(c, cats, editable = true) {
  const dis = editable ? '' : 'disabled';
  const seg = (key, opts) => `<div class="mini-seg">${opts.map(([v, l]) => `<button type="button" class="${String(c[key]) === String(v) ? 'on' : ''}" data-opt="${key}" data-val="${v}" ${dis}>${l}</button>`).join('')}</div>`;
  const on = (x) => !c.categories || c.categories.includes(x);
  return `
    <div class="ro-row"><span>Thứ tự lên diễn</span>${seg('order', [['random', '🎲 Bốc thăm ngẫu nhiên'], ['join', '📋 Theo thứ tự vào phòng']])}</div>
    <p class="ro-note">${c.order === 'join' ? 'Lần lượt từ người vào phòng trước.' : 'Mỗi lượt bốc ngẫu nhiên một người; ai diễn rồi thì không bị bốc lại cho tới vòng sau.'}</p>
    <div class="ro-grid">
      <label>Số vòng (mỗi người diễn)${seg('turns', [[1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5']])}</label>
      <label>Thời gian diễn${seg('actTime', [[45, '45s'], [60, '60s'], [90, '90s'], [120, '2p'], [180, '3p']])}</label>
      <label>Thời gian trả lời${seg('answerTime', [[8, '8s'], [12, '12s'], [20, '20s'], [30, '30s']])}</label>
      <label>Lượt đổi đề${seg('rerolls', [[0, '0'], [1, '1'], [2, '2'], [3, '3']])}</label>
    </div>
    <div class="ro-toggles">
      <label class="toggle"><input type="checkbox" data-opt="hints" ${c.hints !== false ? 'checked' : ''} ${dis}/>💡 Gợi ý tự động (số chữ, chữ cái đầu)</label>
      <label class="toggle"><input type="checkbox" data-opt="mult" ${c.mult !== false ? 'checked' : ''} ${dis}/>✖️ Số nhân điểm ngẫu nhiên (x2, x3, x5)</label>
    </div>
    ${cats?.length ? `<div class="ro-row"><span>Nhóm đề</span></div><div class="cat-row">${cats.map((x) => `<button type="button" class="cat-chip ${on(x) ? 'on' : ''}" data-cat="${esc(x)}" ${dis}>${esc(x)}</button>`).join('')}</div>` : ''}`;
}
// Gắn sự kiện; onChange(patch) nhận phần cài đặt thay đổi
function bindOpts(root, c, cats, onChange) {
  $$('[data-opt][data-val]', root).forEach((b) => (b.onclick = () => {
    const k = b.dataset.opt, v = b.dataset.val;
    onChange({ [k]: /^\d+$/.test(v) ? Number(v) : v });
  }));
  $$('input[data-opt]', root).forEach((i) => (i.onchange = () => onChange({ [i.dataset.opt]: i.checked })));
  $$('[data-cat]', root).forEach((b) => (b.onclick = () => {
    const cur = c.categories ? [...c.categories] : [...cats];
    const x = b.dataset.cat;
    const next = cur.includes(x) ? cur.filter((y) => y !== x) : [...cur, x];
    onChange({ categories: next.length === cats.length ? null : next });
  }));
}

function loadLook() {
  let l = null;
  try { l = JSON.parse(ls.get('dienta-look') || 'null'); } catch {}
  return { skin: SKINS[l?.skin] ? l.skin : 'tron', head: typeof l?.head === 'string' ? l.head : '' };
}
const saveLook = () => ls.set('dienta-look', JSON.stringify(app.look));

const cleanAv = (av) => ({
  e: AVATARS.includes(av?.e) ? av.e : AVATARS[0],
  c: Number.isInteger(av?.c) && av.c >= 0 && av.c < AV_COLORS.length ? av.c : 0,
});
const cleanLook = (l) => {
  const skin = SKIN_IDS.includes(l?.skin) ? l.skin : 'tron';
  let head = typeof l?.head === 'string' ? l.head : '';
  if (!((/^https?:\/\//.test(head) && head.length < 800) || (/^data:image\/(png|jpe?g|webp);base64,[A-Za-z0-9+/=]+$/.test(head) && head.length < 60000))) head = '';
  return { skin, head };
};

// ================= TRANG CHỦ =================
function initHome() {
  $$('[data-logo]').forEach((el) => (el.innerHTML = ICONS.wolf));
  $('#nameInput').value = prof.name;
  const prev = createPuppet($('#lookPreview'));
  const demoPoses = [
    { ...DEFAULT_POSE, armL: 'wave', face: 'happy', loop: null },
    { ...DEFAULT_POSE, armL: 'up', armR: 'up', face: 'surprised', legL: 'spread', legR: 'spread' },
    { ...DEFAULT_POSE, armL: 'hip', armR: 'flex', face: 'cheeky' },
    { ...DEFAULT_POSE, loop: 'dance', face: 'happy', armL: 'diag', armR: 'down' },
  ];
  let di = 0;
  const show = () => { prev.setLook(app.look); prev.setPose(demoPoses[di % demoPoses.length]); };
  setInterval(() => { di++; show(); }, 2200);

  const drawSkins = () => {
    $('#skinGrid').innerHTML = SKIN_IDS.map((id) => {
      const k = SKINS[id];
      return `<button type="button" class="skin-btn ${id === app.look.skin ? 'on' : ''}" data-skin="${id}" title="${esc(k.name)}"><span class="sw" style="--a:${k.shirt};--b:${k.pants}">${k.emo || ''}</span><span class="sk-n">${esc(k.name)}</span></button>`;
    }).join('') + `<button type="button" class="skin-btn rnd" id="skinRandom"><span class="sw">🎲</span><span class="sk-n">Ngẫu nhiên</span></button>`;
    $$('[data-skin]').forEach((b) => (b.onclick = () => { app.look.skin = b.dataset.skin; saveLook(); drawSkins(); show(); }));
    $('#skinRandom').onclick = () => { const o = SKIN_IDS.filter((x) => x !== app.look.skin); app.look.skin = o[Math.floor(Math.random() * o.length)]; saveLook(); drawSkins(); show(); $(`[data-skin="${app.look.skin}"]`)?.scrollIntoView({ block: 'nearest' }); };
    $('#skinCount').textContent = SKIN_IDS.length;
    $('#photoState').textContent = app.look.head ? 'Đang dùng ảnh làm mặt' : 'Chưa có ảnh (dùng mặt hoạt hình)';
    $('#photoClear').hidden = !app.look.head;
  };
  drawSkins();
  show();

  $('#photoLink').onchange = () => {
    const v = $('#photoLink').value.trim();
    if (v && !/^https?:\/\//.test(v)) return toast('Link ảnh phải bắt đầu bằng http:// hoặc https://', true);
    app.look.head = v;
    saveLook(); drawSkins(); show();
  };
  $('#photoFile').onchange = async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    try {
      app.look.head = await shrinkImage(f, 128);
      $('#photoLink').value = '';
      saveLook(); drawSkins(); show();
    } catch { toast('Không đọc được ảnh này, thử ảnh khác nhé.', true); }
  };
  $('#photoClear').onclick = () => { app.look.head = ''; $('#photoLink').value = ''; saveLook(); drawSkins(); show(); };

  gameIdentity(prof);
  startPresence(prof, 'Đang ở Diễn Tả Hình Hài');

  const ro = loadRoomOpts();
  const homeCats = loadData(window.DIENTA_DATA).categories;
  const drawRO = () => {
    $('#roomOptsBody').innerHTML = optsHTML(ro, homeCats);
    bindOpts($('#roomOptsBody'), ro, homeCats, (patch) => {
      Object.assign(ro, patch);
      if (ro.categories && !ro.categories.length) ro.categories = null;
      saveRoomOpts(ro);
      drawRO();
    });
  };
  drawRO();

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
    const name = $('#nameInput').value.trim();
    if (!name) return;
    prof.name = name;
    saveProfile(prof);
    if (mode === 'join') {
      const code = $('#codeInput').value.trim().toUpperCase();
      if (!/^[A-Z0-9]{4,8}$/.test(code)) return toast('Mã phòng không hợp lệ', true);
      enterRoom(code, false);
    } else enterRoom(roomCode(), true);
  };
  const sess = JSON.parse(ss.get('dienta-session') || 'null');
  if (sess && (!pre || sess.code === pre) && prof.name) enterRoom(sess.code, sess.host);
}

function shrinkImage(file, size) {
  return new Promise((res, rej) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = c.height = size;
      const s = Math.min(img.width, img.height);
      c.getContext('2d').drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size);
      URL.revokeObjectURL(url);
      res(c.toDataURL('image/jpeg', 0.82));
    };
    img.onerror = rej;
    img.src = url;
  });
}

// ================= VÀO PHÒNG =================
async function enterRoom(code, host) {
  presenceUpdate('🎭 Đang chơi Diễn Tả Hình Hài');
  app.code = code;
  app.isHost = host;
  ss.set('dienta-session', JSON.stringify({ code, host }));
  const url = new URL(location.href);
  url.searchParams.set('room', code);
  history.replaceState(null, '', url);
  $('#home').classList.add('hidden');
  $('#room').classList.remove('hidden');
  $('#codeChip').innerHTML = `${icon('copy')}${esc(code)}`;
  $('#codeChip').onclick = () => copyText(inviteUrl(code), 'Đã sao chép link mời!');
  $('#leaveBtn').onclick = () => leaveRoom();
  $('#stage').innerHTML = `<div class="panel hero hero-night"><div class="hero-ic">${ICONS.wolf}</div><div><h2>Đang kết nối...</h2><p>Đang tìm đường tới phòng <b>${esc(code)}</b>.</p></div></div>`;

  let data = null;
  if (host) {
    data = loadData(window.DIENTA_DATA);
    if (data.errors.length) console.warn('[dienta] lỗi dữ liệu', data.errors);
    if (!data.items.length) { toast('Không đọc được kho đề (data/dienta-data.js).', true); return; }
  }
  try { app.net = await createNet(code, { local: LOCAL, ns: NS }); }
  catch (e) { console.error(e); toast('Không tải được thư viện kết nối.', true); return; }
  const net = app.net;
  app.voice = new Voice(net);
  app.voice.onLevels = onLevels;

  const hello = () => ({ cid: app.cid, name: prof.name, av: prof.av, look: app.look });
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
  net.on('state', (d, pid) => { if (!app.isHost) { app.hostPid = pid; $('#hostLost').classList.add('hidden'); applyPub(d); } });
  net.on('priv', (d, pid) => { if (!app.isHost && pid === app.hostPid) applyPriv(d); });
  net.on('fx', (d, pid) => { if (!app.isHost && pid === app.hostPid) playFx(d); });
  net.on('pose', (d, pid) => {
    const actor = app.pub?.players.find((p) => p.cid === app.pub.turn?.actor);
    if (!actor || actor.pid !== pid) return;
    if (app.isHost) app.engine.setPose(actor.cid, d);
    app.remotePose = { ...DEFAULT_POSE, ...d };
    app.puppet?.setPose(app.remotePose);
  });
  net.on('err', (d) => { toast(d.msg, true); if (d.fatal) leaveRoom(false); });
  net.onPeerJoin = (pid) => {
    if (!app.isHost) net.send('hello', hello(), pid);
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
    const saved = JSON.parse(ls.get('dienta-host-' + code) || 'null');
    app.engine = new DientaEngine(app.cid, data, saved && saved.hostCid === app.cid ? saved : null, { cleanAv, cleanLook });
    app.engine.players.forEach((p) => { if (p.cid !== app.cid) p.connected = false; });
    if (!(saved && saved.hostCid === app.cid)) app.engine.setConfig(loadRoomOpts());
    app.engine.onChange = hostSync;
    app.engine.onEvent = (ev) => { app.net.send('fx', ev); playFx(ev); };
    app.engine.addPlayer(app.cid, hello(), net.selfId);
    setInterval(() => app.engine.tick(), 300);
  } else {
    setTimeout(() => {
      if (!app.pub && app.net === net) {
        $('#stage').innerHTML = `<div class="panel hero hero-vote"><div class="hero-ic">${ICONS.wolf}</div><div><h2>Chưa thấy chủ phòng</h2><p>Kiểm tra lại mã <b>${esc(code)}</b> và chắc chắn chủ phòng vẫn đang mở trang. Vẫn đang tiếp tục tìm...</p><div style="margin-top:12px"><button class="btn" id="backHome">Về trang trước</button></div></div></div>`;
        $('#backHome').onclick = () => leaveRoom(false);
      }
    }, 12000);
  }
  setInterval(tickTimer, 200);
}

function leaveRoom(ask = true) {
  if (ask && app.pub && !['lobby', 'end'].includes(app.pub.phase) && !confirm('Rời khỏi ván đang chơi?')) return;
  ss.del('dienta-session');
  if (app.isHost) ls.del('dienta-host-' + app.code);
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
    const pub = e.pub();
    app.net.send('state', pub);
    for (const p of e.players) if (p.cid !== app.cid && p.connected && p.pid) app.net.send('priv', e.priv(p.cid), p.pid);
    applyPub(pub);
    applyPriv(e.priv(app.cid));
    ls.set('dienta-host-' + app.code, JSON.stringify(e.s));
  });
}
function hostChat(cid, text) {
  text = String(text || '').trim().slice(0, 300);
  if (!text) return;
  const e = app.engine, me = e.P(cid);
  const r = e.chatFilter(cid, text);
  if (r.err) { if (cid === app.cid) toast(r.err, true); else app.net.send('err', { msg: r.err }, me.pid); return; }
  const msg = { k: 'm', cid, name: me.name, av: me.av, text: r.text, masked: !!r.masked, ts: Date.now() };
  app.net.send('chat', msg);
  addChat(msg);
}
function act(a) {
  if (app.isHost) { const err = app.engine.handle(app.cid, a); if (err) toast(err, true); }
  else if (app.hostPid) app.net.send('act', a, app.hostPid);
  else toast('Chưa kết nối được chủ phòng', true);
}

// ================= NHẬN TRẠNG THÁI =================
function applyPub(pub) {
  const prev = app.pub;
  app.pub = pub;
  app.endsAt = pub.remaining ? Date.now() + pub.remaining : 0;
  const me = pub.players.find((p) => p.cid === app.cid);
  if (me) app.joined = true;
  else if (app.joined) { toast('Bạn đã bị mời ra khỏi phòng.', true); return setTimeout(() => leaveRoom(false), 1200); }
  for (const l of pub.log) if (l.id > app.seenLog) addChat({ k: 'sys', kind: l.kind, text: l.text });
  app.seenLog = Math.max(app.seenLog, ...pub.log.map((l) => l.id), 0);
  const turnKey = pub.turn ? `${pub.gameId}-${pub.turn.n}` : '';
  if (turnKey !== app.lastTurnKey) {
    app.lastTurnKey = turnKey;
    app.pose = { ...(pub.pose || DEFAULT_POSE) };
    app.remotePose = { ...DEFAULT_POSE, ...(pub.pose || {}) };
    app.answerDraft = '';
  }
  render();
  if (pub.phase === 'end' && app.shownEnd !== pub.gameId) { app.shownEnd = pub.gameId; setTimeout(showEnd, 700); }
  if (pub.phase === 'lobby' && $('#overlay').dataset.kind === 'end') closeOverlay();
}
function applyPriv(p) { app.priv = p; render(); }

function stageFloat(chars) {
  const w = $('#stageWrap');
  if (!w) return;
  for (let i = 0; i < 10; i++) {
    const e = document.createElement('span');
    e.className = 'st-float';
    e.textContent = chars[i % chars.length];
    e.style.left = 8 + Math.random() * 84 + '%';
    e.style.animationDelay = Math.random() * 0.5 + 's';
    e.style.setProperty('--r', (Math.random() * 40 - 20) + 'deg');
    w.appendChild(e);
    setTimeout(() => e.remove(), 2500);
  }
}
function cheer() {
  const w = $('#stageWrap');
  if (!w) return;
  w.classList.remove('cheer'); void w.offsetWidth; w.classList.add('cheer');
  setTimeout(() => w.classList.remove('cheer'), 1600);
  app.puppet?.cheer?.();
  stageFloat(['👏', '🎉', '⭐', '😍', '👏']);
}
function playFx(ev) {
  if (ev.type === 'correct') cheer();
  if (ev.type === 'wrong') stageFloat(['😅', '❌', '🤣']);
  if (ev.type === 'buzz') SFX.buzz();
  else if (ev.type === 'correct') { SFX.correct(); if (ev.cid === app.cid) confetti(); }
  else if (ev.type === 'wrong') SFX.wrong();
  else if (ev.type === 'turn') SFX.start();
}

// ================= RENDER =================
const me = () => app.pub?.players.find((p) => p.cid === app.cid);
const P = (cid) => app.pub?.players.find((p) => p.cid === cid);
const isActor = () => app.pub?.turn?.actor === app.cid && ['acting', 'answering'].includes(app.pub.phase);

function render() {
  const pub = app.pub;
  if (!pub) return;
  document.body.classList.toggle('night', false);
  renderTop();
  if (pub.phase === 'lobby') renderLobby();
  else renderGame();
  renderScores();
  renderChatBox();
  updateVoice();
}

function renderTop() {
  const pub = app.pub;
  const label = pub.phase === 'lobby' ? 'Phòng chờ' : pub.phase === 'end' ? 'Kết thúc' : `Lượt ${pub.turn?.n}/${pub.turn?.total}`;
  $('#phasePill').innerHTML = `${icon(pub.phase === 'answering' ? 'vote' : 'card')}<span class="lbl">${label}</span><span class="t" id="timer"></span>`;
  tickTimer();
  renderVoiceBtns();
}
function tickTimer() {
  const t = $('#timer');
  if (!t || !app.pub) return;
  if (!app.endsAt) { t.textContent = `${app.pub.players.length} người`; t.classList.remove('urgent'); $('#timebar').style.width = '0'; return; }
  const ms = Math.max(0, app.endsAt - Date.now());
  const s = Math.ceil(ms / 1000);
  t.textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  t.classList.toggle('urgent', s <= 10 && s > 0);
  $('#timebar').style.width = app.pub.durMs ? `${Math.min(100, (ms / app.pub.durMs) * 100)}%` : '0';
  const ab = $('#ansTimer');
  if (ab) ab.textContent = s + 's';
}

// ---------- phòng chờ ----------
function renderLobby() {
  const pub = app.pub, host = app.isHost, c = pub.config;
  app.puppet = null;
  const cats = pub.categories;
  $('#stage').innerHTML = `
  <div class="panel lobby-hero hero">
    <div class="grow"><div class="lbl">Mã phòng</div><div class="big-code">${esc(app.code)}</div>
    <p style="margin:10px 0 0">Gửi link cho bạn bè để cùng vào. ${LOCAL ? '<b>(Chế độ thử: chỉ các tab trên máy này)</b>' : ''}</p></div>
    <button class="btn sun" id="copyLink">${icon('copy')}Sao chép link mời</button>
  </div>
  <div class="sect-title"><h3>Người chơi (${pub.players.length})</h3><span class="muted">Tối thiểu 2 người</span></div>
  <div class="grid">${pub.players.map((p) => `
    <div class="pcard ${p.cid === app.cid ? 'me' : ''} ${p.connected ? '' : 'offline'}">
      <div class="corner l">${p.cid === pub.hostCid ? `<span class="ic crown">${CROWN}</span>` : ''}</div>
      ${host && p.cid !== app.cid ? `<button class="kick" data-kick="${p.cid}" title="Mời ra">×</button>` : ''}
      ${avatarHTML(p)}<div class="pname">${esc(p.name)}</div><div class="ptag">${esc(SKINS[p.skin]?.name || '')}</div>
    </div>`).join('')}</div>
  <div class="sect-title"><h3>Cài đặt</h3><span class="muted">${pub.poolCount}/${pub.itemCount} đề đang bật</span></div>
  <div class="panel cfg ro-body" id="lobbyOpts">${optsHTML(c, cats, host)}</div>
  <div class="start-wrap">
    ${host ? `<button class="btn primary big" id="startBtn" ${pub.canStart ? 'disabled' : ''}>🎭 Bắt đầu diễn!</button>` : `<button class="btn big" disabled>Đang chờ chủ phòng bắt đầu...</button>`}
    ${pub.canStart ? `<div class="why">${esc(pub.canStart)}</div>` : ''}
  </div>`;
  $('#copyLink').onclick = () => copyText(inviteUrl(app.code), 'Đã sao chép link mời!');
  const sb = $('#startBtn');
  if (sb) sb.onclick = () => act({ t: 'start' });
  $$('[data-kick]').forEach((b) => (b.onclick = () => act({ t: 'kick', cid: b.dataset.kick })));
  if (host) bindOpts($('#lobbyOpts'), c, cats, (patch) => {
    act({ t: 'cfg', cfg: patch });
    // nhớ lại cho lần tạo phòng sau
    const ro = { ...loadRoomOpts(), ...patch };
    saveRoomOpts(ro);
  });
}
const CROWN = '<svg viewBox="0 0 64 64"><path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/></svg>';

// ---------- trong game ----------
function renderGame() {
  const pub = app.pub, t = pub.turn;
  const st = $('#stage');
  if (!st.querySelector('.stage-wrap')) {
    st.innerHTML = `
      <div class="panel turn-bar" id="turnBar"></div>
      <div class="panel stage-wrap stage3d" id="stageWrap">
        <div class="puppet-box" id="puppetBox"></div>
        <div class="st-hint" id="stHint" hidden></div><div class="key-flash" id="keyFlash"></div>

        <div class="stage-overlay" id="stageOverlay"></div>
      </div>
      <div id="belowStage"></div>`;
    app.puppet = createPuppet($('#puppetBox'), { stage: true });
  }
  if (!app.puppet) app.puppet = createPuppet($('#puppetBox'), { stage: true });
  // nhân vật
  app.puppet.setLook(pub.actorLook || { skin: 'tron' });
  if (!isActor()) app.puppet.setPose(app.remotePose || DEFAULT_POSE);
  else app.puppet.setPose(app.pose);

  // thanh lượt
  const actor = t && P(t.actor);
  $('#turnBar').innerHTML = pub.phase === 'end' ? `<b>🏁 Ván đã kết thúc</b><button class="btn sm" id="showEnd">Xem bảng xếp hạng</button>${app.isHost ? `<button class="btn sm primary" id="toLobby">Chơi lại</button>` : ''}` : t ? `
    <div class="tb-actor">${avatarHTML(actor, 'sm')}<span><b>${esc(actor?.name)}</b> đang diễn</span></div>
    <span class="chip cat">${esc(t.category)}</span>
    <span class="chip pts">${t.points}đ</span>
    <span class="chip mult m${t.mult}">x${t.mult}</span>` : '';
  const se = $('#showEnd'); if (se) se.onclick = showEnd;
  const tl = $('#toLobby'); if (tl) tl.onclick = () => act({ t: 'lobby' });

  // gợi ý
  const hb = $('#stHint');
  const h = t?.hint;
  hb.hidden = !(h && ['acting', 'answering'].includes(pub.phase));
  if (h) hb.innerHTML = `<span class="hl">💡 Gợi ý</span><span class="pat">${esc(h.pattern)}</span><span class="cnt">${h.letters.join(' + ')} chữ</span>${h.text ? `<span class="txt">${esc(h.text)}</span>` : ''}`;

  // overlay trên sân khấu
  const ov = $('#stageOverlay');
  if (pub.phase === 'answering') {
    const who = P(t.answering.cid);
    ov.innerHTML = `<div class="bubble ans">${avatarHTML(who, 'sm')}<b>${esc(who?.name)}</b> bấm chuông! Đang trả lời... <span id="ansTimer"></span></div>`;
  } else if (pub.phase === 'reveal' && t?.item) {
    const r = t.result, who = r && P(r.cid);
    ov.innerHTML = `<div class="reveal-card">${imgHTML(t.item.image, 'big')}<div class="rv-name">${esc(t.item.name)}</div>
      <div class="rv-sub">${r ? `${avatarHTML(who, 'sm')} <b>${esc(who?.name)}</b> đoán đúng! +${r.gain}` : 'Không ai đoán ra!'}</div></div>`;
  } else ov.innerHTML = '';

  // khu vực dưới sân khấu
  const below = $('#belowStage');
  if (isActor()) renderActorPanel(below);
  else if (pub.phase === 'acting' || pub.phase === 'answering') renderGuesser(below);
  else below.innerHTML = pub.phase === 'reveal' ? `<div class="panel action calm"><div class="msg"><b>Chuẩn bị lượt tiếp theo...</b></div></div>` : '';
}

function imgHTML(image, cls = '') {
  if (/^(https?:|data:image|\.{0,2}\/|images\/)/.test(image) || /\.(png|jpe?g|gif|webp|svg)$/i.test(image)) return `<img class="item-img ${cls}" src="${esc(image)}" alt="">`;
  return `<span class="item-emoji ${cls}">${esc(image)}</span>`;
}

function renderActorPanel(el) {
  const item = app.priv?.item, t = app.pub.turn;
  const key = 'actor-' + app.lastTurnKey + '-' + (item?.id || '') + '-' + t.rerolls;
  if (el.dataset.key !== key) {
    el.dataset.key = key;
    el.innerHTML = `
      <div class="panel secret">
        ${item ? imgHTML(item.image) : ''}
        <div class="sc-main"><div class="sc-k">Đề của bạn — chỉ mình bạn thấy</div><div class="sc-name">${esc(item?.name || '...')}</div>
        <div class="sc-sub">${esc(item?.category || '')} · ${item?.points || 0}đ × ${t.mult} = <b>${(item?.points || 0) * t.mult}đ</b></div>
        ${item?.acting ? `<div class="sc-tip"><span>🎬 Mẹo diễn <small>(bấm để làm theo)</small>:</span> ${parseTip(item.acting).map((c, i) => c.ids ? `<button type="button" class="tip-chip" data-tip="${i}" title="${esc(c.ids.map((id) => ACTION_LABEL[id] || id).join(' + '))}">${esc(c.text)}${c.ids.length === 1 ? kbd(c.ids[0]) : ''}</button>` : `<span class="tip-txt">${esc(c.text)}</span>`).join('<span class="tip-plus">+</span>')}</div>` : ''}</div>
        <div class="sc-btns"><button class="btn sm" id="rerollBtn" ${t.rerolls > 0 ? '' : 'disabled'}>🔄 Đổi đề (${t.rerolls})</button><button class="btn sm ghost" id="skipBtn">Bỏ lượt</button></div>
      </div>
      <div class="panel controls">
        <div class="ctl-head"><b>Điều khiển nhân vật</b><span class="muted">Dùng bàn phím cho nhanh — phím tắt hiện trên từng nút</span>
          <button class="btn sm" id="keysBtn">⌨️ Phím tắt</button><button class="btn sm" id="resetPose">Đặt lại ${kbd('reset')}</button></div>
        <div class="ctl-tabs">${TABS().map((g, i) => `<button type="button" data-tab="${i}" class="${i === app.ctlTab ? 'on' : ''}">${g.group}</button>`).join('')}</div>
        <div class="ctl-opts" id="ctlOpts"></div>
      </div>`;
    $('#rerollBtn').onclick = () => act({ t: 'reroll' });
    $('#skipBtn').onclick = () => act({ t: 'skipTurn' });
    $('#resetPose').onclick = () => setPose({ ...DEFAULT_POSE });
    $('#keysBtn').onclick = openKeys;
    const tips = parseTip(item?.acting);
    $$('[data-tip]', el).forEach((b) => (b.onclick = () => applyTip(tips[b.dataset.tip])));
    $$('.ctl-tabs button', el).forEach((b) => (b.onclick = () => { app.ctlTab = Number(b.dataset.tab); $$('.ctl-tabs button', el).forEach((x) => x.classList.toggle('on', x === b)); drawOpts(); }));
  }
  drawOpts();
}
// Tab "Tổ hợp" đứng đầu, sau đó là các nhóm điều khiển
const TABS = () => [{ group: '⭐ Tổ hợp', key: 'combo' }, ...CONTROLS];

function drawOpts() {
  const box = $('#ctlOpts');
  if (!box) return;
  const g = TABS()[app.ctlTab] || TABS()[0];
  if (g.key === 'combo') {
    box.innerHTML = keymap.combos.map((c) => `<button type="button" class="ctl combo" data-combo="${c.id}">${esc(c.name)}${kbd('combo:' + c.id)}</button>`).join('') +
      `<button type="button" class="ctl add" id="saveCombo">＋ Lưu tư thế hiện tại</button>`;
    $$('[data-combo]', box).forEach((b) => (b.onclick = () => runAction('combo:' + b.dataset.combo)));
    $('#saveCombo').onclick = saveComboPrompt;
    return;
  }
  box.innerHTML = g.opts.map(([v, label]) => {
    const active = g.oneshot ? false : app.pose[g.key] === v;
    return `<button type="button" class="ctl ${active ? 'on' : ''} ${g.key === 'face' ? 'emo' : ''}" data-v="${v}">${label}${kbd(g.key + ':' + v)}</button>`;
  }).join('');
  $$('button', box).forEach((b) => (b.onclick = () => runAction(g.key + ':' + b.dataset.v)));
}

const ACTION_LABEL = {};
for (const g of CONTROLS) for (const [v, l] of g.opts) ACTION_LABEL[g.key + ':' + v] = (/^(arm|leg|prop)/.test(g.key) ? g.group + ': ' : '') + l;

// Thực hiện một hành động theo id (từ nút bấm hoặc phím tắt)
function runAction(id) {
  if (!isActor()) return false;
  const [k, v] = id.split(':');
  const p = { ...app.pose };
  let label = ACTION_LABEL[id] || '';
  if (k === 'combo') {
    const c = keymap.combos.find((x) => x.id === v);
    if (!c) return false;
    Object.assign(p, DEFAULT_POSE, c.pose, { fx: null });
    label = c.name;
  } else if (k === 'reset') { Object.assign(p, DEFAULT_POSE); label = 'Đặt lại'; }
  else if (k === 'help') { openKeys(); return true; }
  else if (k === 'cycle') {
    const g = CONTROLS.find((x) => x.key === v);
    if (!g) return false;
    const ids = [...g.opts.map((x) => x[0]), null];
    p[v] = ids[(ids.indexOf(p[v] ?? null) + 1) % ids.length];
    label = p[v] ? ACTION_LABEL[v + ':' + p[v]] || '' : g.group + ': bỏ';
  } else if (k === 'clear') { p[v] = null; label = (CONTROLS.find((x) => x.key === v)?.group || '') + ': bỏ'; }
  else {
    const g = CONTROLS.find((x) => x.key === k);
    if (!g) return false;
    if (g.oneshot) p.fx = { name: v, seq: ++app.poseSeq, at: Date.now() };
    else if (g.toggle) p[k] = p[k] === v ? null : v;
    else p[k] = v;
  }
  setPose(p);
  flashKey(label);
  return true;
}
// Làm theo một mẹo: bật đúng các nút tương ứng (không tắt nếu đang bật)
function applyTip(tip) {
  if (!tip?.ids || !isActor()) return;
  const p = { ...app.pose };
  for (const id of tip.ids) {
    const [k, v] = id.split(':');
    const g = CONTROLS.find((x) => x.key === k);
    if (!g) continue;
    if (g.oneshot) p.fx = { name: v, seq: ++app.poseSeq, at: Date.now() };
    else p[k] = v;
  }
  setPose(p);
  flashKey(tip.ids.map((id) => ACTION_LABEL[id] || '').filter(Boolean).join(' + '));
  // nhảy tới tab chứa nút để người diễn biết nút nằm đâu
  const t = TABS().findIndex((g) => g.key === tip.ids[0].split(':')[0]);
  if (t >= 0) { app.ctlTab = t; $$('.ctl-tabs button').forEach((x) => x.classList.toggle('on', Number(x.dataset.tab) === t)); drawOpts(); }
}
function flashKey(label) {
  const f = $('#keyFlash');
  if (!f || !label) return;
  f.textContent = label;
  f.classList.remove('show'); void f.offsetWidth; f.classList.add('show');
}
function setPose(p) {
  app.pose = p;
  app.puppet?.setPose(p);
  app.net.send('pose', p);
  if (app.isHost) app.engine.setPose(app.cid, p);
  drawOpts();
}

// ---------- bàn phím ----------
let capturing = null; // id hành động đang chờ gán phím
document.addEventListener('keydown', (e) => {
  if (capturing) {
    e.preventDefault();
    if (e.code === 'Escape') { capturing = null; drawKeys(); return; }
    const k = eventKey(e);
    if (!k) return;
    keymap.bind(capturing, k);
    capturing = null;
    drawKeys();
    return;
  }
  if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName) || e.repeat) return;
  if (!isActor()) return;
  const k = eventKey(e);
  const id = k && keymap.actionFor(k);
  if (id && runAction(id)) e.preventDefault();
});

function saveComboPrompt() {
  const box = $('#ctlOpts');
  const add = $('#saveCombo');
  if (!add) return;
  add.outerHTML = `<form class="combo-form" id="comboForm"><input id="comboName" maxlength="30" placeholder="Tên tổ hợp, VD: Cắt tóc" /><button class="btn sm primary">Lưu</button></form>`;
  const inp = $('#comboName');
  inp.focus();
  $('#comboForm').onsubmit = (e) => {
    e.preventDefault();
    const id = keymap.addCombo(inp.value.trim(), app.pose);
    const c = keymap.combos.find((x) => x.id === id);
    toast(`Đã lưu "${c.name}"${c.key ? ' — phím ' + keyLabel(c.key) : ''}`);
    drawOpts();
  };
  inp.onkeydown = (e) => { if (e.key === 'Escape') drawOpts(); };
  void box;
}

// ---------- bảng phím tắt ----------
function openKeys() {
  const o = $('#overlay');
  o.dataset.kind = 'keys';
  o.classList.remove('hidden');
  o.onclick = (e) => { if (e.target === o) { capturing = null; closeOverlay(); } };
  drawKeys();
}
function drawKeys() {
  const o = $('#overlay');
  if (o.dataset.kind !== 'keys') return;
  const row = (id, label) => `<div class="kb-row"><span>${esc(label)}</span><button type="button" class="kb-key ${capturing === id ? 'wait' : ''}" data-bind="${esc(id)}">${capturing === id ? 'Nhấn phím…' : keymap.keyOf(id) ? esc(keyLabel(keymap.keyOf(id))) : '—'}</button></div>`;
  const scroll = $('.kb-body', o)?.scrollTop || 0;
  o.innerHTML = `<div class="modal panel wide kb-modal">
    <div class="kb-top"><h2>⌨️ Phím tắt</h2><div style="display:flex;gap:6px"><button class="btn sm" id="kbReset">Khôi phục mặc định</button><button class="btn sm primary" id="kbClose">Xong</button></div></div>
    <p class="kb-tip">Bấm vào ô phím rồi nhấn phím mới (có thể kèm ⇧ Shift hoặc ${/Mac/.test(navigator.platform) ? '⌥ Option' : 'Alt'}). Esc để huỷ. Phím tắt chỉ hoạt động khi bạn đang diễn.</p>
    <div class="kb-body">
      <div class="kb-group"><h3>⭐ Tổ hợp của bạn</h3>
        ${keymap.combos.map((c) => `<div class="kb-row combo-row"><input class="kb-name" data-rename="${c.id}" value="${esc(c.name)}" maxlength="30"/><button type="button" class="kb-key ${capturing === 'combo:' + c.id ? 'wait' : ''}" data-bind="combo:${c.id}">${capturing === 'combo:' + c.id ? 'Nhấn phím…' : c.key ? esc(keyLabel(c.key)) : '—'}</button><button type="button" class="kb-del" data-del="${c.id}" title="Xoá">✕</button></div>`).join('')}
        <p class="kb-tip">Tạo tổ hợp mới: tạo dáng cho nhân vật rồi bấm "＋ Lưu tư thế hiện tại" trong tab ⭐ Tổ hợp.</p>
      </div>
      ${actionGroups(keymap).map((g) => `<div class="kb-group"><h3>${esc(g.title)}</h3>${g.items.map((it) => row(it.id, it.label)).join('')}</div>`).join('')}
    </div></div>`;
  const body = $('.kb-body', o);
  body.scrollTop = scroll;
  $('#kbClose').onclick = () => { capturing = null; closeOverlay(); drawOpts(); };
  $('#kbReset').onclick = () => { keymap.reset(); drawKeys(); drawOpts(); };
  $$('[data-bind]', o).forEach((b) => (b.onclick = () => { capturing = b.dataset.bind; drawKeys(); }));
  $$('[data-del]', o).forEach((b) => (b.onclick = () => { keymap.removeCombo(b.dataset.del); drawKeys(); drawOpts(); }));
  $$('[data-rename]', o).forEach((i) => (i.onchange = () => { keymap.renameCombo(i.dataset.rename, i.value.trim() || 'Tổ hợp'); drawOpts(); }));
}

function renderGuesser(el) {
  const pub = app.pub, t = pub.turn;
  const locked = t.locked.includes(app.cid);
  const answeringMe = pub.phase === 'answering' && t.answering?.cid === app.cid;
  const key = `g-${app.lastTurnKey}-${pub.phase}-${t.answering?.cid || ''}-${locked}`;
  const wrong = t.guesses.filter((g) => !g.ok).map((g) => `<span class="guess">${avatarHTML(P(g.cid), 'xs')} ${esc(g.text || '(hết giờ)')}</span>`).join('');
  if (el.dataset.key === key) { const gl = $('#guessList'); if (gl) gl.innerHTML = wrong; return; }
  el.dataset.key = key;
  if (answeringMe) {
    el.innerHTML = `<form class="panel answer-box" id="ansForm" autocomplete="off"><b>Bạn bấm nhanh nhất! Đáp án là gì?</b>
      <div class="ans-row"><input id="ansInput" maxlength="60" placeholder="Gõ đáp án (không cần dấu)..." /><button class="btn primary" type="submit">Trả lời</button></div></form>`;
    const inp = $('#ansInput');
    inp.focus();
    $('#ansForm').onsubmit = (e) => { e.preventDefault(); act({ t: 'answer', text: inp.value }); };
    return;
  }
  const canBuzz = pub.phase === 'acting' && !locked;
  el.innerHTML = `<div class="buzz-zone">
      <button class="buzzer ${canBuzz ? '' : 'off'}" id="buzzBtn" ${canBuzz ? '' : 'disabled'}><span>🔔</span>${locked ? 'Đã trả lời sai' : pub.phase === 'answering' ? 'Đang có người trả lời' : 'BẤM CHUÔNG'}</button>
      <div class="buzz-hint">${canBuzz ? 'Hoặc nhấn phím <kbd>Space</kbd>' : locked ? 'Chờ lượt sau nhé!' : ''}</div>
      <div class="guess-list" id="guessList">${wrong}</div>
    </div>`;
  const b = $('#buzzBtn');
  if (b) b.onclick = () => { unlockAudio(); act({ t: 'buzz' }); };
}
document.addEventListener('keydown', (e) => {
  if (e.code !== 'Space' || /INPUT|TEXTAREA/.test(document.activeElement?.tagName)) return;
  const b = $('#buzzBtn');
  if (b && !b.disabled) { e.preventDefault(); b.click(); }
});

// ---------- bảng điểm ----------
function renderScores() {
  const pub = app.pub, t = pub.turn;
  const list = [...pub.players].sort((a, b) => b.score - a.score);
  $('#scoreBox').innerHTML = `<div class="sb-head"><b>Bảng điểm</b></div>${list.map((p, i) => `
    <div class="sb-row ${p.cid === app.cid ? 'me' : ''} ${p.connected ? '' : 'offline'} ${p.pid && app.speaking.has(p.pid) || (p.cid === app.cid && app.speaking.has('self')) ? 'speaking' : ''}">
      <span class="rank">${i + 1}</span>${avatarHTML(p, 'sm')}<span class="nm">${esc(p.name)}</span>
      ${t?.actor === p.cid && pub.phase !== 'lobby' && pub.phase !== 'end' ? '<span class="tag act">🎭 diễn</span>' : ''}
      ${t?.locked?.includes(p.cid) ? '<span class="tag no">✖</span>' : ''}
      <b class="pt">${p.score}</b></div>`).join('')}`;
}

// ---------- chat ----------
function renderChatBox() {
  const inp = $('#chatInput');
  const blocked = isActor();
  inp.disabled = blocked;
  inp.placeholder = blocked ? 'Bạn đang diễn — không được chat! 🤐' : 'Nhắn cho mọi người...';
}
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
const SYS = { correct: '🎉', wrong: '❌', reveal: '💡', win: '🏆', phase: '🎭', join: '👋', leave: '🚪', info: 'ℹ️' };
function msgHTML(m) {
  if (m.k === 'sys') return `<div class="sys ${m.kind === 'correct' ? 'day' : m.kind === 'wrong' ? 'death' : m.kind === 'win' ? 'win' : ''}"><span>${SYS[m.kind] || '•'}</span><span>${esc(m.text)}</span></div>`;
  return `<div class="msg ${m.cid === app.cid ? 'mine' : ''} ${m.masked ? 'masked' : ''}">${avatarHTML(m, 'sm')}<div class="body"><div class="nm">${esc(m.name)}</div>${esc(m.text)}</div></div>`;
}
$('#chatForm').onsubmit = (e) => {
  e.preventDefault();
  const inp = $('#chatInput');
  const text = inp.value.trim();
  if (!text || !app.pub || inp.disabled) return;
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

// ---------- kết thúc ----------
function showEnd() {
  const pub = app.pub;
  if (!pub || pub.phase !== 'end') return;
  const list = [...pub.players].sort((a, b) => b.score - a.score);
  const podium = [list[1], list[0], list[2]];
  const o = $('#overlay');
  o.dataset.kind = 'end';
  o.innerHTML = `<div class="modal panel wide">
    <h2>🏆 Bảng vàng diễn viên</h2>
    <div class="podium">${podium.map((p, i) => p ? `<div class="pod p${[2, 1, 3][i]}">${avatarHTML(p, 'xl')}<b>${esc(p.name)}</b><span>${p.score} điểm</span><div class="step">${[2, 1, 3][i]}</div></div>` : '<div></div>').join('')}</div>
    <div class="end-list">${list.slice(3).map((p, i) => `<div class="end-row">${avatarHTML(p, 'sm')}<div><div class="nm">#${i + 4} ${esc(p.name)}</div><div class="rr">${p.score} điểm · đoán đúng ${p.correct}</div></div></div>`).join('')}</div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button class="btn" id="endClose">Đóng</button>${app.isHost ? '<button class="btn primary" id="endLobby">Chơi ván mới</button>' : ''}</div>
  </div>`;
  o.classList.remove('hidden');
  o.onclick = (e) => { if (e.target === o) closeOverlay(); };
  $('#endClose').onclick = closeOverlay;
  const l = $('#endLobby');
  if (l) l.onclick = () => { closeOverlay(); act({ t: 'lobby' }); };
  if (list[0]?.cid === app.cid) confetti();
}
function closeOverlay() { const o = $('#overlay'); o.classList.add('hidden'); o.innerHTML = ''; o.dataset.kind = ''; }

// ================= VOICE =================
function updateVoice() {
  if (!app.voice) return;
  const muted = isActor();
  app.voice.setRules({ canSpeak: !muted, canHear: () => true });
  renderVoiceBtns();
}
function renderVoiceBtns() {
  const v = app.voice, mic = $('#micBtn'), deaf = $('#deafBtn');
  const locked = isActor();
  if (!v || !v.enabled) { mic.className = 'icon-btn'; mic.innerHTML = icon('micOff'); mic.title = 'Bật voice chat'; }
  else {
    const live = v.micOn && !locked;
    mic.className = `icon-btn ${live ? 'on' : 'off'} ${locked ? 'locked' : ''}`;
    mic.innerHTML = icon(live ? 'mic' : 'micOff');
    mic.title = locked ? 'Người diễn không được nói' : v.micOn ? 'Tắt mic' : 'Bật mic';
  }
  deaf.className = `icon-btn ${v?.deaf ? 'off' : ''}`;
  deaf.innerHTML = icon(v?.deaf ? 'speakerOff' : 'speaker');
}
$('#micBtn').onclick = async () => {
  const v = app.voice;
  if (!v) return;
  if (!v.enabled) {
    try { await v.enable(); updateVoice(); toast(isActor() ? 'Bạn đang diễn — mic tạm khoá' : 'Đã bật voice chat'); }
    catch { toast('Không truy cập được micro. Hãy cho phép quyền micro trong trình duyệt.', true); }
  } else { v.setMic(!v.micOn); if (v.micOn && isActor()) toast('Người diễn không được nói!'); }
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
