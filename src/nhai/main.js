// Game "Nhại Như Thật": nghe âm mẫu -> mọi người cùng nhại -> trình diễn trên sân khấu -> máy chấm + bỏ phiếu.
import '../theme.js';
import { createNet } from '../net.js';
import { Voice } from '../voice.js';
import { ICONS, AVATARS, AV_COLORS, icon } from '../roles.js';
import { $, $$, esc, params, LOCAL, ss, ls, roomCode, loadProfile, saveProfile, clientId, avatarHTML, avatarPicker, toast, confetti, SFX, unlockAudio, inviteUrl, copyText } from '../common.js';
import { NhaiEngine, loadData, COUNTDOWN } from './engine.js';
import { compare, features, NET_SR } from './score.js';
import * as A from './audio.js';
import { SKINS, SKIN_IDS } from '../dienta/puppet.js';
import { createPuppet } from '../dienta/puppet3d.js';
import { gameIdentity, startPresence, presenceUpdate } from '../site.js';

const NS = 'nhai';
const prof = loadProfile();
const RAW = window.NHAI_DATA || { items: [] };
const SRC = Object.fromEntries((RAW.items || []).map((i) => [i.id, i.audio]));
const app = {
  cid: clientId(), code: null, isHost: false, net: null, engine: null, hostPid: null,
  pub: null, joined: false, endsAt: 0, chat: [], seenLog: 0, unread: 0,
  look: loadLook(), puppet: null, voice: null, speaking: new Set(),
  takes: {}, // `${gameId}-${round}` -> { cid: b64 }
  clips: {}, // đề tự thêm: id -> b64
  phaseKey: '', shownEnd: 0, myVote: null, recState: null, timers: [],
};
if (LOCAL) window.__app = app;

function loadLook() {
  let l = null;
  try { l = JSON.parse(ls.get('dienta-look') || 'null'); } catch {}
  return { skin: SKINS[l?.skin] ? l.skin : 'tron', head: typeof l?.head === 'string' ? l.head : '' };
}
const saveLook = () => ls.set('dienta-look', JSON.stringify(app.look));
const cleanAv = (av) => ({ e: AVATARS.includes(av?.e) ? av.e : AVATARS[0], c: Number.isInteger(av?.c) && av.c >= 0 && av.c < AV_COLORS.length ? av.c : 0 });
const cleanLook = (l) => {
  const skin = SKIN_IDS.includes(l?.skin) ? l.skin : 'tron';
  let head = typeof l?.head === 'string' ? l.head : '';
  if (!((/^https?:\/\//.test(head) && head.length < 800) || (/^data:image\/(png|jpe?g|webp);base64,[A-Za-z0-9+/=]+$/.test(head) && head.length < 60000))) head = '';
  return { skin, head };
};

// ---- tuỳ chọn phòng ----
const RO_DEFAULT = { rounds: 5, scoring: 'both', listens: 2, categories: null };
function loadRoomOpts() { let o = null; try { o = JSON.parse(ls.get('nhai-room-opts') || 'null'); } catch {} return { ...RO_DEFAULT, ...(o || {}) }; }
const saveRoomOpts = (o) => ls.set('nhai-room-opts', JSON.stringify(o));
function optsHTML(c, cats, editable = true) {
  const dis = editable ? '' : 'disabled';
  const seg = (key, opts) => `<div class="mini-seg">${opts.map(([v, l]) => `<button type="button" class="${String(c[key]) === String(v) ? 'on' : ''}" data-opt="${key}" data-val="${v}" ${dis}>${l}</button>`).join('')}</div>`;
  const on = (x) => !c.categories || c.categories.includes(x);
  return `
    <div class="ro-row"><span>Cách chấm điểm</span>${seg('scoring', [['both', '🤖+🗳️ Máy chấm + bỏ phiếu'], ['auto', '🤖 Chỉ máy chấm'], ['vote', '🗳️ Chỉ bỏ phiếu']])}</div>
    <p class="ro-note">${c.scoring === 'auto' ? 'Máy so cao độ và nhịp của bản nhại với âm mẫu (không hiểu chữ).' : c.scoring === 'vote' ? 'Mọi người nghe lại rồi bầu bản nhại giống nhất (không tự bầu cho mình).' : 'Điểm = 60% điểm máy chấm + phiếu bầu của mọi người.'}</p>
    <div class="ro-grid">
      <label>Số đề mỗi ván${seg('rounds', [[3, '3'], [5, '5'], [8, '8'], [10, '10'], [15, '15']])}</label>
      <label>Nghe mẫu mấy lần${seg('listens', [[1, '1 lần'], [2, '2 lần'], [3, '3 lần']])}</label>
    </div>
    ${cats?.length ? `<div class="ro-row"><span>Nhóm đề</span></div><div class="cat-row">${cats.map((x) => `<button type="button" class="cat-chip ${on(x) ? 'on' : ''}" data-cat="${esc(x)}" ${dis}>${esc(x)}</button>`).join('')}</div>` : ''}`;
}
function bindOpts(root, c, cats, onChange) {
  $$('[data-opt][data-val]', root).forEach((b) => (b.onclick = () => { const v = b.dataset.val; onChange({ [b.dataset.opt]: /^\d+$/.test(v) ? Number(v) : v }); }));
  $$('[data-cat]', root).forEach((b) => (b.onclick = () => {
    const cur = c.categories ? [...c.categories] : [...cats];
    const x = b.dataset.cat;
    const next = cur.includes(x) ? cur.filter((y) => y !== x) : [...cur, x];
    if (!next.length) return toast('Phải bật ít nhất 1 nhóm đề.', true);
    onChange({ categories: next.length === cats.length ? null : next });
  }));
}

// ================= TRANG CHỦ =================
function initHome() {
  $$('[data-logo]').forEach((el) => (el.innerHTML = ICONS.wolf));
  $('#nameInput').value = prof.name;
  gameIdentity(prof);
  startPresence(prof, 'Đang ở Nhại Như Thật');
  const prev = createPuppet($('#lookPreview'));
  let k = 0;
  const show = () => { prev.setLook(app.look); prev.setPose({ body: 'stand', head: 'center', face: ['happy', 'surprised', 'cheeky'][k % 3], armL: 'down', armR: 'down', legL: 'down', legR: 'down', turn: 'front' }); };
  // nhân vật nhép miệng giả lập trên trang chủ
  setInterval(() => { k++; show(); }, 2600);
  let ph = 0;
  setInterval(() => { ph += 0.18; const v = Math.max(0, Math.sin(ph * 3) * 0.6 + Math.sin(ph * 7.3) * 0.3); prev.setTalk?.(Math.sin(ph * 0.5) > -0.3 ? v : 0); }, 60);
  const drawSkins = () => {
    $('#lookEmo').textContent = SKINS[app.look.skin].emo || '';
    $('#lookName').textContent = SKINS[app.look.skin].name;
    $('#skinGrid').innerHTML = SKIN_IDS.map((id) => { const s = SKINS[id]; return `<button type="button" class="skin-btn ${id === app.look.skin ? 'on' : ''}" data-skin="${id}" title="${esc(s.name)}"><span class="sw" style="--a:${s.shirt};--b:${s.pants}">${s.emo || ''}</span><span class="sk-n">${esc(s.name)}</span></button>`; }).join('');
    $$('[data-skin]').forEach((b) => (b.onclick = () => { app.look.skin = b.dataset.skin; saveLook(); drawSkins(); show(); }));
  };
  drawSkins(); show();

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
    unlockAudio(); A.audioCtx();
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
  const sess = JSON.parse(ss.get('nhai-session') || 'null');
  if (sess && (!pre || sess.code === pre) && prof.name) enterRoom(sess.code, sess.host);
}

// ================= VÀO PHÒNG =================
async function enterRoom(code, host) {
  presenceUpdate('🎤 Đang chơi Nhại Như Thật');
  app.code = code;
  app.isHost = host;
  ss.set('nhai-session', JSON.stringify({ code, host }));
  const url = new URL(location.href);
  url.searchParams.set('room', code);
  history.replaceState(null, '', url);
  $('#home').classList.add('hidden');
  $('#room').classList.remove('hidden');
  $('#codeChip').innerHTML = `${icon('copy')}${esc(code)}`;
  $('#codeChip').onclick = () => copyText(inviteUrl(code), 'Đã sao chép link mời!');
  $('#leaveBtn').onclick = () => leaveRoom();
  $('#stage').innerHTML = `<div class="panel hero hero-night"><div class="hero-ic">${ICONS.wolf}</div><div><h2>Đang kết nối...</h2><p>Đang tìm đường tới phòng <b>${esc(code)}</b>.</p></div></div>`;
  // mở sẵn quyền micro (cần cho lúc thu)
  A.getMic().catch(() => toast('Chưa có quyền micro — bạn sẽ không thu âm được. Bấm "🎤 Thử micro" để cấp quyền.', true));

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
    else sendClipsTo(pid);
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
  net.on('fx', (d, pid) => { if (!app.isHost && pid === app.hostPid) playFx(d); });
  net.on('take', (d, pid) => onTake(d, pid));
  net.on('clip', (d, pid) => onClip(d, pid));
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
    const data = loadData(RAW);
    if (!data.items.length) { toast('Không đọc được kho đề (data/nhai-data.js).', true); return; }
    app.engine = new NhaiEngine(app.cid, data, { cleanAv, cleanLook });
    app.engine.setConfig(loadRoomOpts());
    app.engine.onChange = hostSync;
    app.engine.onEvent = (ev) => { app.net.send('fx', ev); playFx(ev); };
    app.engine.addPlayer(app.cid, hello(), net.selfId);
    setInterval(() => app.engine.tick(), 200);
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
  ss.del('nhai-session');
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
    const pub = app.engine.pub();
    app.net.send('state', pub);
    applyPub(pub);
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

// ---------- âm thanh đề ----------
function refSource(item) {
  if (!item) return null;
  if (item.custom) return app.clips[item.id] ? { b64: app.clips[item.id] } : null;
  return SRC[item.id] ? { url: SRC[item.id] } : null;
}
async function getRef(item) {
  const s = refSource(item);
  if (!s) throw new Error('Chưa có âm thanh đề');
  return s.b64 ? A.setRefFromNet(item.id, s.b64) : A.loadRef(item.id, s.url);
}
// đề tự thêm: mọi người đều lưu, chủ phòng thêm vào danh sách đề
function onClip(d, pid) {
  if (!d?.id || typeof d.b64 !== 'string' || d.b64.length > 260000) return;
  app.clips[d.id] = d.b64;
  if (app.isHost) {
    const p = app.engine.byPid(pid);
    if (!p || app.engine.s.phase !== 'lobby') return;
    app.engine.addCustom({ id: d.id, name: d.name, duration: d.duration, by: p.cid });
  }
}
function sendClipsTo(pid) {
  for (const c of app.engine.custom) if (app.clips[c.id]) app.net.send('clip', { id: c.id, name: c.name, duration: c.duration, b64: app.clips[c.id] }, pid);
}
async function addMyClip(samples, sr, name) {
  const y = A.trimSilence(samples, sr, 8);
  if (y.length < sr * 0.3) return toast('Âm thanh quá ngắn hoặc quá nhỏ.', true);
  const b64 = A.encodeTake(y, sr);
  const id = 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  const msg = { id, name: (name || 'Âm thanh của ' + prof.name).slice(0, 40), duration: Math.round((y.length / sr) * 100) / 100, b64 };
  app.clips[id] = b64;
  app.net.send('clip', msg);
  if (app.isHost) app.engine.addCustom({ id, name: msg.name, duration: msg.duration, by: app.cid });
  toast('Đã thêm đề mới! 🎵');
}

// ---------- bản nhại ----------
const roundKey = (pub = app.pub) => `${pub.gameId}-${pub.round}`;
function onTake(d, pid) {
  if (!d?.cid || typeof d.b64 !== 'string' || d.b64.length > 200000) return;
  const key = `${d.gameId}-${d.round}`;
  (app.takes[key] ||= {})[d.cid] = d.b64;
  if (app.isHost) hostScore(d.cid, d.b64, d.gameId, d.round, pid);
  if (app.pub?.phase === 'vote') renderGame();
}
async function hostScore(cid, b64, gameId, round, pid) {
  const e = app.engine;
  const p = e.P(cid);
  if (!p || (pid && p.pid !== pid && cid !== app.cid) || e.s.gameId !== gameId || e.s.round !== round) return;
  const x = A.decodeTake(b64);
  if (!e.takeIn(cid, x.length / NET_SR)) return;
  try {
    const ref = await getRef(e.s.item);
    e.setAuto(cid, compare(ref.feat, features(x, NET_SR)));
  } catch (err) { console.warn('[nhai] chấm điểm lỗi', err); e.setAuto(cid, { score: 0 }); }
}
function takeBuffer(cid) {
  const b64 = app.takes[roundKey()]?.[cid];
  return b64 ? A.bufferFrom(A.decodeTake(b64), NET_SR) : null;
}

// ================= NHẬN TRẠNG THÁI =================
function applyPub(pub) {
  const prevKey = app.phaseKey;
  app.pub = pub;
  app.endsAt = pub.remaining ? Date.now() + pub.remaining : 0;
  const me = pub.players.find((p) => p.cid === app.cid);
  if (me) app.joined = true;
  else if (app.joined) { toast('Bạn đã bị mời ra khỏi phòng.', true); return setTimeout(() => leaveRoom(false), 1200); }
  for (const l of pub.log) if (l.id > app.seenLog) addChat({ k: 'sys', kind: l.kind, text: l.text });
  app.seenLog = Math.max(app.seenLog, ...pub.log.map((l) => l.id), 0);
  const key = `${pub.gameId}-${pub.round}-${pub.phase}-${pub.show?.idx ?? ''}`;
  if (key !== prevKey) { app.phaseKey = key; onPhase(pub); }
  render();
  if (pub.phase === 'end' && app.shownEnd !== pub.gameId) { app.shownEnd = pub.gameId; setTimeout(showEnd, 700); }
  if (pub.phase === 'lobby' && $('#overlay').dataset.kind === 'end') closeOverlay();
}

// Lịch phát / thu theo từng pha (tính theo thời điểm pha bắt đầu)
function later(ms, fn) { app.timers.push(setTimeout(fn, Math.max(0, ms))); }
function clearLater() { app.timers.forEach(clearTimeout); app.timers = []; A.stopAll(); }
function onPhase(pub) {
  clearLater();
  const elapsed = pub.durMs ? pub.durMs - pub.remaining : 0;
  const talk = (v) => app.puppet?.setTalk?.(v);
  if (pub.phase !== 'record') app.recState = null;
  if (pub.phase === 'listen') {
    app.myVote = null;
    app.listenN = 0;
    const d = pub.item.duration;
    for (let i = 0; i < pub.config.listens; i++) {
      later(800 + i * (d + 0.9) * 1000 - elapsed, async () => {
        app.listenN = i + 1; renderOverlay();
        try { const r = await getRef(pub.item); await A.play(r.buffer, { onLevel: talk }); }
        catch (e) { toast('Không phát được âm mẫu: ' + e.message, true); }
      });
    }
    getRef(pub.item).catch(() => {});
  } else if (pub.phase === 'record') {
    const win = pub.rec.win;
    app.recState = { stage: 'count', n: COUNTDOWN };
    for (let i = 0; i < COUNTDOWN; i++) later(i * 1000 - elapsed, () => { app.recState = { stage: 'count', n: COUNTDOWN - i }; SFX.tick?.(); renderOverlay(); });
    later(COUNTDOWN * 1000 - elapsed, async () => {
      app.recState = { stage: 'rec', t0: Date.now(), win };
      renderOverlay();
      const meP = pub.players.find((p) => p.cid === app.cid);
      if (!meP) return;
      try {
        const { samples, sr } = await A.record(win, { onLevel: (v) => { talk(v); app.recLevel = v; } });
        app.recState = { stage: 'sent' };
        renderOverlay();
        const b64 = A.encodeTake(samples, sr);
        const msg = { cid: app.cid, gameId: pub.gameId, round: pub.round, b64 };
        app.net.send('take', msg);
        onTake(msg, null);
      } catch (e) {
        app.recState = { stage: 'nomic' };
        renderOverlay();
        toast('Không thu được âm: hãy cho phép quyền micro.', true);
      }
    });
  } else if (pub.phase === 'show') {
    const slot = pub.show.slots[pub.show.idx];
    later(400 - elapsed, async () => {
      try {
        const buf = slot.who === 'ref' ? (await getRef(pub.item)).buffer : takeBuffer(slot.who);
        if (buf) await A.play(buf, { onLevel: talk });
      } catch {}
    });
  } else if (pub.phase === 'reveal') {
    const best = pub.results?.[0];
    if (best?.best) { cheer(); if (best.cid === app.cid) confetti(); }
  }
}

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
  stageFloat(['👏', '🎉', '⭐', '😍', '🎤']);
}
function playFx(ev) {
  if (ev.type === 'round') SFX.start();
  else if (ev.type === 'record') SFX.buzz?.();
  else if (ev.type === 'reveal') SFX.correct();
}

// ================= RENDER =================
const P = (cid) => app.pub?.players.find((p) => p.cid === cid);
const BASE = { body: 'stand', head: 'center', face: 'neutral', armL: 'down', armR: 'down', legL: 'down', legR: 'down', propL: null, propR: null, ears: null, tail: null, turn: 'front', loop: null };
const MC = { skin: 'idol', head: '' };

function render() {
  const pub = app.pub;
  if (!pub) return;
  renderTop();
  if (pub.phase === 'lobby') renderLobby();
  else renderGame();
  renderScores();
  updateVoice();
}
const PHASE_LBL = { listen: '👂 Nghe mẫu', record: '🔴 Thu âm', collect: '📦 Gom bản nhại', show: '🎤 Trình diễn', vote: '🗳️ Bỏ phiếu', reveal: '🏆 Kết quả', end: 'Kết thúc', lobby: 'Phòng chờ' };
function renderTop() {
  const pub = app.pub;
  const label = pub.phase === 'lobby' || pub.phase === 'end' ? PHASE_LBL[pub.phase] : `Đề ${pub.round}/${pub.totalRounds} · ${PHASE_LBL[pub.phase]}`;
  $('#phasePill').innerHTML = `${icon('card')}<span class="lbl">${label}</span><span class="t" id="timer"></span>`;
  tickTimer();
  renderVoiceBtns();
}
function tickTimer() {
  const t = $('#timer');
  if (!t || !app.pub) return;
  if (!app.endsAt) { t.textContent = `${app.pub.players.length} người`; $('#timebar').style.width = '0'; return; }
  const ms = Math.max(0, app.endsAt - Date.now());
  const s = Math.ceil(ms / 1000);
  t.textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  $('#timebar').style.width = app.pub.durMs ? `${Math.min(100, (ms / app.pub.durMs) * 100)}%` : '0';
  if (app.recState?.stage === 'rec') {
    const f = Math.min(1, (Date.now() - app.recState.t0) / (app.recState.win * 1000));
    const bar = $('#recBar'); if (bar) bar.style.width = f * 100 + '%';
  }
}

// ---------- phòng chờ ----------
const CROWN = '<svg viewBox="0 0 64 64"><path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/></svg>';
let stopMeter = null;
function renderLobby() {
  const pub = app.pub, host = app.isHost, c = pub.config;
  if (app.puppet) { app.puppet.dispose?.(); app.puppet = null; }
  const cats = pub.categories;
  const canStart = host ? app.engine.canStart() : null;
  $('#stage').innerHTML = `
  <div class="panel lobby-hero hero">
    <div class="grow"><div class="lbl">Mã phòng</div><div class="big-code">${esc(app.code)}</div>
    <p style="margin:10px 0 0">Gửi link cho bạn bè để cùng vào. ${LOCAL ? '<b>(Chế độ thử: chỉ các tab trên máy này)</b>' : ''}</p></div>
    <button class="btn sun" id="copyLink">${icon('copy')}Sao chép link mời</button>
  </div>
  <div class="panel nh-mic">
    <div><b>🎤 Kiểm tra micro</b><div class="muted">Nói thử, thanh màu phải nhảy lên. Đeo tai nghe sẽ thu rõ hơn.</div></div>
    <div class="meter"><i id="micMeter"></i></div>
    <button class="btn sm" id="micTest">${stopMeter ? 'Dừng' : 'Thử micro'}</button>
  </div>
  <div class="sect-title"><h3>Người chơi (${pub.players.length})</h3><span class="muted">Tối thiểu 2 người</span></div>
  <div class="grid">${pub.players.map((p) => `
    <div class="pcard ${p.cid === app.cid ? 'me' : ''} ${p.connected ? '' : 'offline'}">
      <div class="corner l">${p.cid === pub.hostCid ? `<span class="ic crown">${CROWN}</span>` : ''}</div>
      ${host && p.cid !== app.cid ? `<button class="kick" data-kick="${p.cid}" title="Mời ra">×</button>` : ''}
      ${avatarHTML(p)}<div class="pname">${esc(p.name)}</div><div class="ptag">${esc(SKINS[p.skin]?.emo || '')} ${esc(SKINS[p.skin]?.name || '')}</div>
    </div>`).join('')}</div>
  <div class="sect-title"><h3>Cài đặt</h3><span class="muted">${pub.poolCount} đề đang bật</span></div>
  <div class="panel cfg ro-body" id="lobbyOpts">${optsHTML(c, cats, host)}</div>
  <div class="sect-title"><h3>🎵 Đề tự thêm (${pub.custom.length})</h3><span class="muted">Ai cũng thêm được · được chơi trước</span></div>
  <div class="panel nh-custom">
    <p class="muted" style="margin:0 0 10px">Thu một tiếng nhại "đặc sản" của bạn, hoặc chọn file âm thanh trên máy (VD: âm meme tải về, tối đa 8 giây). Cả phòng sẽ phải nhại theo!</p>
    <div class="nh-add">
      <input id="clipName" class="field-in" maxlength="40" placeholder="Tên đề, VD: Tiếng cười của Minh" />
      <button class="btn sm" id="clipRec">🔴 Thu 5 giây</button>
      <label class="btn sm" for="clipFile">📁 Chọn file</label><input id="clipFile" type="file" accept="audio/*" hidden />
    </div>
    <div class="nh-clips">${pub.custom.map((x) => `<div class="nh-clip"><button class="btn sm ghost" data-playclip="${x.id}">▶</button><b>${esc(x.name)}</b><span class="muted">${x.duration}s · ${esc(P(x.by)?.name || '')}</span></div>`).join('') || '<span class="muted">Chưa có đề tự thêm.</span>'}</div>
  </div>
  <div class="start-wrap">
    ${host ? `<button class="btn primary big" id="startBtn" ${canStart ? 'disabled' : ''}>🎤 Bắt đầu nhại!</button>` : `<button class="btn big" disabled>Đang chờ chủ phòng bắt đầu...</button>`}
    ${canStart ? `<div class="why">${esc(canStart)}</div>` : ''}
  </div>`;
  $('#copyLink').onclick = () => copyText(inviteUrl(app.code), 'Đã sao chép link mời!');
  const sb = $('#startBtn');
  if (sb) sb.onclick = () => { if (stopMeter) { stopMeter(); stopMeter = null; } act({ t: 'start' }); };
  $$('[data-kick]').forEach((b) => (b.onclick = () => act({ t: 'kick', cid: b.dataset.kick })));
  if (host) bindOpts($('#lobbyOpts'), c, cats, (patch) => { act({ t: 'cfg', cfg: patch }); saveRoomOpts({ ...loadRoomOpts(), ...patch }); });
  $('#micTest').onclick = async () => {
    if (stopMeter) { stopMeter(); stopMeter = null; $('#micTest').textContent = 'Thử micro'; return; }
    try {
      A.audioCtx();
      stopMeter = await A.meter((v) => { const m = $('#micMeter'); if (m) m.style.width = (v ?? 0) * 100 + '%'; });
      $('#micTest').textContent = 'Dừng';
    } catch { toast('Không mở được micro. Hãy cho phép quyền micro trong trình duyệt.', true); }
  };
  $('#clipRec').onclick = async () => {
    const b = $('#clipRec');
    try {
      A.audioCtx();
      b.disabled = true; b.textContent = '🔴 Đang thu...';
      const { samples, sr } = await A.record(5, { onLevel: (v) => { const m = $('#micMeter'); if (m) m.style.width = (v ?? 0) * 100 + '%'; } });
      await addMyClip(samples, sr, $('#clipName').value.trim());
    } catch { toast('Không thu được — hãy cho phép quyền micro.', true); }
    const b2 = $('#clipRec'); if (b2) { b2.disabled = false; b2.textContent = '🔴 Thu 5 giây'; }
  };
  $('#clipFile').onchange = async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 8 * 1024 * 1024) return toast('File quá lớn (tối đa 8MB).', true);
    try {
      const buf = await A.audioCtx().decodeAudioData(await f.arrayBuffer());
      await addMyClip(buf.getChannelData(0), buf.sampleRate, $('#clipName').value.trim() || f.name.replace(/\.[^.]+$/, ''));
    } catch { toast('Không đọc được file âm thanh này.', true); }
  };
  $$('[data-playclip]').forEach((b) => (b.onclick = async () => {
    const id = b.dataset.playclip;
    if (!app.clips[id]) return toast('Chưa nhận được âm thanh này.', true);
    A.play(A.bufferFrom(A.decodeTake(app.clips[id]), NET_SR));
  }));
}

// ---------- trong game ----------
function ensureStage() {
  const st = $('#stage');
  if (!st.querySelector('.stage-wrap')) {
    st.innerHTML = `
      <div class="panel turn-bar" id="turnBar"></div>
      <div class="panel stage-wrap stage3d" id="stageWrap">
        <div class="puppet-box" id="puppetBox"></div>
        <div class="stage-overlay" id="stageOverlay"></div>
      </div>
      <div id="belowStage"></div>`;
    app.puppet = createPuppet($('#puppetBox'), { stage: true });
  }
}
// Ai đang đứng trên sân khấu
function stageActor() {
  const pub = app.pub;
  if (pub.phase === 'show') {
    const slot = pub.show.slots[pub.show.idx];
    if (slot.who === 'ref') return { look: MC, pose: { ...BASE, propR: 'mic', armR: 'mouth', face: 'happy' }, who: 'ref' };
    const p = P(slot.who);
    const faces = ['happy', 'surprised', 'cheeky', 'love'];
    return { look: pub.performerLook || { skin: p?.skin || 'tron' }, pose: { ...BASE, face: faces[pub.show.idx % faces.length], armR: pub.show.idx % 2 ? 'mouth' : 'down', propR: pub.show.idx % 2 ? 'mic' : null }, who: slot.who };
  }
  if (pub.phase === 'listen') return { look: MC, pose: { ...BASE, propR: 'mic', armR: 'mouth', face: 'happy' }, who: 'ref' };
  if (pub.phase === 'reveal' && pub.results?.[0]?.best) {
    const p = P(pub.results[0].cid);
    return { look: { skin: p?.skin || 'tron' }, pose: { ...BASE, armL: 'up', armR: 'up', face: 'happy', loop: 'dance' }, who: p?.cid };
  }
  const meP = P(app.cid);
  return { look: app.look, pose: { ...BASE, face: pub.phase === 'record' ? 'surprised' : 'neutral', propR: pub.phase === 'record' ? 'mic' : null, armR: pub.phase === 'record' ? 'mouth' : 'down' }, who: meP?.cid };
}
function renderGame() {
  const pub = app.pub;
  ensureStage();
  const sa = stageActor();
  app.puppet.setLook(sa.look);
  app.puppet.setPose(sa.pose);
  if (!['listen', 'record', 'show'].includes(pub.phase)) app.puppet.setTalk?.(null);
  const it = pub.item;
  $('#turnBar').innerHTML = pub.phase === 'end'
    ? `<b>🏁 Ván đã kết thúc</b><button class="btn sm" id="showEnd">Xem bảng xếp hạng</button>${app.isHost ? `<button class="btn sm primary" id="toLobby">Chơi lại</button>` : ''}`
    : it ? `<div class="nh-item"><span class="nh-emo">${esc(it.emo)}</span><div><b>${esc(it.name)}</b><div class="muted">${esc(it.hint || '')}</div></div></div>
      <span class="chip cat">${esc(it.category)}</span><span class="chip pts">${it.points}đ</span>
      ${app.isHost && !['end', 'reveal'].includes(pub.phase) ? '<button class="btn sm ghost" id="skipBtn" title="Chủ phòng: chuyển bước">⏭</button>' : ''}` : '';
  const se = $('#showEnd'); if (se) se.onclick = showEnd;
  const tl = $('#toLobby'); if (tl) tl.onclick = () => act({ t: 'lobby' });
  const sk = $('#skipBtn'); if (sk) sk.onclick = () => act({ t: 'skip' });
  renderOverlay();
  renderBelow();
}
function renderOverlay() {
  const ov = $('#stageOverlay');
  if (!ov || !app.pub) return;
  const pub = app.pub;
  let h = '';
  if (pub.phase === 'listen') h = `<div class="bubble nh-bub">👂 Nghe kỹ nhé! ${app.listenN ? `(lần ${app.listenN}/${pub.config.listens})` : ''}</div>`;
  else if (pub.phase === 'record') {
    const r = app.recState || {};
    if (r.stage === 'count') h = `<div class="nh-count">${r.n}</div><div class="bubble nh-bub">Chuẩn bị nhại…</div>`;
    else if (r.stage === 'rec') h = `<div class="bubble nh-bub rec">🔴 ĐANG THU — nhại đi!<div class="nh-recbar"><i id="recBar"></i></div></div>`;
    else if (r.stage === 'sent') h = `<div class="bubble nh-bub">✅ Đã gửi bản nhại!</div>`;
    else if (r.stage === 'nomic') h = `<div class="bubble nh-bub">🚫 Không có micro</div>`;
  } else if (pub.phase === 'collect') h = `<div class="bubble nh-bub">📦 Đang gom bản nhại… (${Object.keys(pub.takes).length}/${pub.players.filter((p) => p.connected).length})</div>`;
  else if (pub.phase === 'show') {
    const slot = pub.show.slots[pub.show.idx];
    const p = P(slot.who);
    h = `<div class="bubble nh-bub">${slot.who === 'ref' ? '🎧 <b>Bản gốc</b>' : `${avatarHTML(p, 'sm')} <b>${esc(p?.name)}</b> nhại`} <span class="muted">(${pub.show.idx + 1}/${pub.show.slots.length})</span></div>`;
  } else if (pub.phase === 'reveal') {
    const best = pub.results?.[0];
    h = best?.best ? `<div class="bubble nh-bub">👑 <b>${esc(P(best.cid)?.name)}</b> nhại giống nhất!</div>` : `<div class="bubble nh-bub">Không ai ghi điểm đề này</div>`;
  }
  ov.innerHTML = h;
}
function renderBelow() {
  const pub = app.pub, el = $('#belowStage');
  if (!el) return;
  // chỉ vẽ lại khi nội dung đổi (tránh nút nhảy dưới tay khi người khác bầu)
  const key = `${app.phaseKey}|${app.myVote}|${pub.voted?.length}|${Object.keys(pub.takes).length}|${pub.results ? 1 : 0}`;
  if (el.dataset.key === key) return;
  el.dataset.key = key;
  if (pub.phase === 'vote') {
    const mine = app.myVote;
    const list = Object.keys(pub.takes);
    el.innerHTML = `<div class="panel nh-vote"><div class="nh-vtitle"><b>🗳️ Bản nhại nào giống nhất?</b><span class="muted">Bấm ▶ để nghe lại · không được bầu cho mình · đã bầu ${pub.voted.length}/${pub.players.filter((p) => p.connected).length}</span></div>
      <div class="nh-vlist">${list.map((cid) => { const p = P(cid); const self = cid === app.cid; return `<div class="nh-vrow ${mine === cid ? 'on' : ''}">${avatarHTML(p, 'sm')}<b>${esc(p?.name)}</b>${self ? '<span class="tag">bạn</span>' : ''}
        <button class="btn sm ghost" data-play="${cid}">▶ Nghe</button>${self ? '' : `<button class="btn sm ${mine === cid ? 'primary' : ''}" data-vote="${cid}">${mine === cid ? '✔ Đã bầu' : 'Bầu'}</button>`}</div>`; }).join('')}
      <div class="nh-vrow"><span class="nh-emo">🎧</span><b>Bản gốc</b><button class="btn sm ghost" data-play="ref">▶ Nghe</button></div></div></div>`;
    $$('[data-play]', el).forEach((b) => (b.onclick = async () => {
      const who = b.dataset.play;
      const buf = who === 'ref' ? (await getRef(pub.item).catch(() => null))?.buffer : takeBuffer(who);
      if (!buf) return toast('Chưa nhận được bản thu này.', true);
      const p = who === 'ref' ? null : P(who);
      app.puppet.setLook(who === 'ref' ? MC : { skin: p?.skin || 'tron' });
      A.play(buf, { onLevel: (v) => app.puppet?.setTalk?.(v) });
    }));
    $$('[data-vote]', el).forEach((b) => (b.onclick = () => { app.myVote = b.dataset.vote; act({ t: 'vote', target: b.dataset.vote }); renderBelow(); }));
  } else if (pub.phase === 'reveal' && pub.results) {
    el.innerHTML = `<div class="panel nh-res"><b class="nh-vtitle">🏆 Kết quả đề "${esc(pub.item.name)}"</b>
      ${pub.results.map((r, i) => { const p = P(r.cid); const a = r.auto; return `<div class="nh-rrow ${r.cid === app.cid ? 'me' : ''}">
        <span class="rank">${r.best ? '👑' : i + 1}</span>${avatarHTML(p, 'sm')}<b class="nm">${esc(p?.name)}</b>
        ${a ? `<div class="nh-bars" title="Máy chấm: cao độ ${a.pitch ?? '–'} · nhịp ${a.rhythm ?? '–'} · độ dài ${a.length ?? '–'}"><div class="nh-bar"><i style="width:${a.score}%"></i></div><span>${a.silent ? '🔇 im lặng' : `🤖 ${a.score}%`}</span></div>` : ''}
        ${r.votes != null ? `<span class="chip">🗳️ ${r.votes}</span>` : ''}
        <b class="pt">+${r.pts}</b></div>`; }).join('') || '<p class="muted">Không có bản nhại nào.</p>'}
    </div>`;
  } else if (pub.phase === 'record' && !app.recState) el.innerHTML = '';
  else if (pub.phase === 'end') el.innerHTML = '';
  else {
    const tips = { listen: 'Nghe kỹ lên xuống, dài ngắn, ngắt nghỉ — máy chấm dựa vào ngữ điệu và nhịp, không cần đúng chữ.', record: 'Nhại to, rõ, đúng nhịp. Đừng nói chuyện khác trong lúc thu nhé!', collect: 'Chờ mọi người gửi bản nhại…', show: 'Cùng nghe từng người nhại — nhân vật sẽ nhép miệng theo!' };
    el.innerHTML = tips[pub.phase] ? `<div class="panel action calm"><div class="msg">${tips[pub.phase]}</div></div>` : '';
  }
}

function renderScores() {
  const pub = app.pub;
  const list = [...pub.players].sort((a, b) => b.score - a.score);
  $('#scoreBox').innerHTML = `<div class="sb-head"><b>Bảng điểm</b></div>${list.map((p, i) => `
    <div class="sb-row ${p.cid === app.cid ? 'me' : ''} ${p.connected ? '' : 'offline'} ${(p.pid && app.speaking.has(p.pid)) || (p.cid === app.cid && app.speaking.has('self')) ? 'speaking' : ''}">
      <span class="rank">${i + 1}</span>${avatarHTML(p, 'sm')}<span class="nm">${esc(p.name)}</span>
      ${pub.phase !== 'lobby' && pub.takes?.[p.cid] ? '<span class="tag act">🎤</span>' : ''}
      ${pub.phase === 'vote' && pub.voted.includes(p.cid) ? '<span class="tag">✔</span>' : ''}
      ${p.wins ? `<span class="tag">👑${p.wins}</span>` : ''}
      <b class="pt">${p.score}</b></div>`).join('')}`;
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
const SYS = { correct: '👑', wrong: '❌', reveal: '💡', win: '🏆', phase: '🎤', join: '👋', leave: '🚪', info: 'ℹ️' };
function msgHTML(m) {
  if (m.k === 'sys') return `<div class="sys ${m.kind === 'correct' ? 'day' : m.kind === 'win' ? 'win' : ''}"><span>${SYS[m.kind] || '•'}</span><span>${esc(m.text)}</span></div>`;
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

// ---------- kết thúc ----------
function showEnd() {
  const pub = app.pub;
  if (!pub || pub.phase !== 'end') return;
  const list = [...pub.players].sort((a, b) => b.score - a.score);
  const podium = [list[1], list[0], list[2]];
  const o = $('#overlay');
  o.dataset.kind = 'end';
  o.innerHTML = `<div class="modal panel wide">
    <h2>🎤 Vua Nhại Giọng</h2>
    <div class="podium">${podium.map((p, i) => p ? `<div class="pod p${[2, 1, 3][i]}">${avatarHTML(p, 'xl')}<b>${esc(p.name)}</b><span>${p.score} điểm</span><div class="step">${[2, 1, 3][i]}</div></div>` : '<div></div>').join('')}</div>
    <div class="end-list">${list.slice(3).map((p, i) => `<div class="end-row">${avatarHTML(p, 'sm')}<div><div class="nm">#${i + 4} ${esc(p.name)}</div><div class="rr">${p.score} điểm · ${p.wins} lần giống nhất</div></div></div>`).join('')}</div>
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
// Khi nghe mẫu / thu âm / trình diễn: tắt voice chat để không lẫn tiếng
const quiet = () => ['listen', 'record', 'show'].includes(app.pub?.phase);
function updateVoice() {
  if (!app.voice) return;
  app.voice.setRules({ canSpeak: !quiet(), canHear: () => !quiet() });
  renderVoiceBtns();
}
function renderVoiceBtns() {
  const v = app.voice, mic = $('#micBtn'), deaf = $('#deafBtn');
  const locked = quiet();
  if (!v || !v.enabled) { mic.className = 'icon-btn'; mic.innerHTML = icon('micOff'); mic.title = 'Bật voice chat'; }
  else {
    const live = v.micOn && !locked;
    mic.className = `icon-btn ${live ? 'on' : 'off'} ${locked ? 'locked' : ''}`;
    mic.innerHTML = icon(live ? 'mic' : 'micOff');
    mic.title = locked ? 'Voice chat tạm tắt trong lúc nghe / thu / trình diễn' : v.micOn ? 'Tắt mic' : 'Bật mic';
  }
  deaf.className = `icon-btn ${v?.deaf ? 'off' : ''}`;
  deaf.innerHTML = icon(v?.deaf ? 'speakerOff' : 'speaker');
}
$('#micBtn').onclick = async () => {
  const v = app.voice;
  if (!v) return;
  if (!v.enabled) {
    try { await v.enable(); updateVoice(); toast(quiet() ? 'Voice chat sẽ bật lại sau phần thu âm' : 'Đã bật voice chat'); }
    catch { toast('Không truy cập được micro. Hãy cho phép quyền micro trong trình duyệt.', true); }
  } else v.setMic(!v.micOn);
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
