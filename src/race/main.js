// "Đua Xe Đường Làng": 2 người đua, húc nhau vào chướng ngại vật, tối đa 8 người xem.
import '../theme.js';
import { createNet } from '../net.js';
import { Voice } from '../voice.js';
import { ICONS, AVATARS, AV_COLORS, icon } from '../roles.js';
import { $, $$, esc, params, LOCAL, ss, roomCode, loadProfile, saveProfile, clientId, avatarHTML, toast, confetti, SFX, unlockAudio, inviteUrl, copyText } from '../common.js';
import { gameIdentity, startPresence, presenceUpdate } from '../site.js';
import { FightEngine, setRoster } from '../fight/engine.js';
import { CARS as CHARS, CAR as CHAR, THEMES } from './cars.js';
import * as RACE from './sim.js';
import { initState, step } from './sim.js';
import { Session } from '../fight/netplay.js';
import { render, FX, carPortrait } from './render.js';
import { makeCPU } from './cpu.js';
import { Input } from '../fight/input.js';
import { B } from './sim.js';
import { SND, say, unlock as unlockSnd } from '../fight/sfx.js';
setRoster(CHARS);

const NS = 'duaxe';
const prof = loadProfile();
const app = {
  cid: clientId(), code: null, isHost: false, net: null, engine: null, hostPid: null,
  pub: null, joined: false, chat: [], seenLog: 0, unread: 0, voice: null, speaking: new Set(),
  gfx: (() => { try { return JSON.parse(localStorage.getItem('duaxe-gfx') || 'null') || { pixel: true, crt: true }; } catch { return { pixel: true, crt: true }; } })(),
  offset: 0, sess: null, mode: null, practice: null, fx: new FX(), tick: 0, finBuf: [], reported: 0, arenaUntil: 0, myPick: null,
};
if (LOCAL) window.__app = app;
const input = new Input();
const cleanAv = (av) => ({ e: AVATARS.includes(av?.e) ? av.e : AVATARS[0], c: Number.isInteger(av?.c) && av.c >= 0 && av.c < AV_COLORS.length ? av.c : 0 });
const touchDev = matchMedia('(pointer: coarse)').matches;

// ================= TRANG CHỦ =================
function initHome() {
  $$('[data-logo]').forEach((el) => (el.innerHTML = ICONS.wolf));
  gameIdentity(prof);
  startPresence(prof, 'Đang ở Đua Xe Đường Làng');
  demo();
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
    unlockAudio(); unlockSnd();
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
  const sess = JSON.parse(ss.get('duaxe-session') || 'null');
  if (sess && (!pre || sess.code === pre) && prof.name) enterRoom(sess.code, sess.host);
}
// màn hình giới thiệu: 2 máy tự đánh nhau
function demo() {
  const cv = $('#qcDemo');
  if (!cv) return;
  const c = cv.getContext('2d');
  let S = initState(['cub', 'lam'], { rounds: 2, time: 60, seed: 7 }), fx = new FX(), t = 0;
  const a = makeCPU(0, 1), b = makeCPU(1, 1);
  const loop = () => {
    if ($('#home').classList.contains('hidden')) return;
    const ev = step(S, a(S), b(S));
    for (const e of ev) fx.add({ ...e, key: S.frame + e.k + (e.side ?? '') }, t);
    if ((S.phase === 'end' && S.pt > 200) || S.frame > 60 * 50) { const pick = () => CHARS[Math.floor(Math.random() * CHARS.length)].id; S = initState([pick(), pick()], { rounds: 2, time: 60, seed: Math.floor(Math.random() * 1e9) }); fx = new FX(); }
    if (S.phase === 'end') S.pt++;
    render(c, S, fx, t++, { names: ['Máy 1', 'Máy 2'], riders: ['🤖', '👾'], crowd: ['🦊', '🐼', '🐸'], theme: 0 });
    requestAnimationFrame(loop);
  };
  loop();
}

// ================= VÀO PHÒNG =================
async function enterRoom(code, host) {
  presenceUpdate('🏍️ Đang chơi Đua Xe Đường Làng');
  app.code = code;
  app.isHost = host;
  ss.set('duaxe-session', JSON.stringify({ code, host }));
  const url = new URL(location.href);
  url.searchParams.set('room', code);
  history.replaceState(null, '', url);
  $('#home').classList.add('hidden');
  $('#room').classList.remove('hidden');
  $('#codeChip').innerHTML = `${icon('copy')}${esc(code)}`;
  $('#codeChip').onclick = () => copyText(inviteUrl(code), 'Đã sao chép link mời!');
  $('#leaveBtn').onclick = () => leaveRoom();
  buildStage();
  $('#qcScreen')?.classList.add('dx-screen');
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
  // dữ liệu trận đấu
  net.on('fin', (d) => {
    if (app.sess && d.m === app.sess.mid) app.sess.recv(d);
    else { app.finBuf.push(d); if (app.finBuf.length > 400) app.finBuf.splice(0, 200); }
  });
  net.on('fsnapReq', (d, pid) => { if (app.sess && app.sess.side >= 0 && app.sess.mid === d.m) { const snap = app.sess.snapshot(); if (snap) net.send('fsnap', { m: d.m, snap }, pid); } });
  net.on('fsnap', (d) => { if (app.sess && app.sess.side < 0 && app.sess.mid === d.m && !app.sess.loaded) { app.sess.load(d.snap); app.sess.loaded = true; } });
  net.onPeerJoin = (pid) => { if (!app.isHost) net.send('hello', hello(), pid); else hostSync(); app.voice?.peerJoined(pid); };
  net.onPeerLeave = (pid) => {
    app.voice?.peerLeft(pid);
    if (app.isHost) app.engine.disconnect(pid);
    else if (pid === app.hostPid) $('#hostLost').classList.remove('hidden');
  };
  net.onPeerStream = (stream, pid) => app.voice.peerStream(stream, pid);
  if (host) {
    app.engine = new FightEngine(app.cid, { cleanAv });
    try { const o = JSON.parse(localStorage.getItem('duaxe-room-opts') || 'null'); if (o) app.engine.s.cfg = { ...app.engine.s.cfg, ...o }; } catch {}
    app.engine.onChange = hostSync;
    app.engine.onEvent = (ev) => { app.net.send('fx', ev); playFx(ev); };
    app.engine.addPlayer(app.cid, hello(), net.selfId);
    const saved = localStorage.getItem('duaxe-pick');
    if (saved && CHAR[saved]) app.engine.handle(app.cid, { t: 'pick', c: saved });
    setInterval(() => app.engine.tick(), 1000);
    setInterval(() => { if (app.engine.s.phase === 'fight') hostSync(); }, 4000);
  } else {
    setTimeout(() => {
      if (!app.pub && app.net === net) {
        $('#qcLobby').innerHTML = `<div class="hero hero-vote" style="border:0;box-shadow:none"><div class="hero-ic">${ICONS.wolf}</div><div><h2>Chưa thấy chủ phòng</h2><p>Kiểm tra lại mã <b>${esc(code)}</b> và chắc chắn chủ phòng vẫn đang mở trang. Trong lúc chờ, bạn có thể bấm <b>Chạy thử với máy</b>.</p><div style="margin-top:12px"><button class="btn" id="backHome">Về trang trước</button></div></div></div>`;
        $('#backHome').onclick = () => leaveRoom(false);
      }
    }, 15000);
  }
  requestAnimationFrame(loop);
}
function leaveRoom(ask = true) {
  if (ask && app.sess && app.sess.side >= 0 && !confirm('Bạn đang đua — rời phòng sẽ bị xử thua. Rời?')) return;
  ss.del('duaxe-session');
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
function applyPub(pub) {
  const prev = app.pub;
  app.pub = pub;
  const off = pub.hostNow - Date.now();
  if (app.isHost) app.offset = 0;
  else if (!prev || Math.abs(off - app.offset) > 1500 || off > app.offset) app.offset = off;
  const me = pub.players.find((p) => p.cid === app.cid);
  if (me) app.joined = true;
  else if (app.joined) { toast('Bạn đã bị mời ra khỏi phòng.', true); return setTimeout(() => leaveRoom(false), 1200); }
  for (const l of pub.log) if (l.id > app.seenLog) addChat({ k: 'sys', kind: l.kind, text: l.text });
  app.seenLog = Math.max(app.seenLog, ...pub.log.map((l) => l.id), 0);
  app.myPick = pub.pick[app.cid] || app.myPick;
  // trận mới
  const m = pub.match;
  if (m && (!app.sess || app.sess.mid !== m.id)) startMatch(m);
  if (!m && app.sess && app.mode === 'match' && !app.arenaUntil) app.arenaUntil = Date.now() + 3500;
  render2();
}
function playFx(ev) {
  if (ev.type === 'start') SFX.start();
  else if (ev.type === 'over') { if (ev.winner === app.cid) confetti(); }
}

// ================= TRẬN ĐẤU =================
function startMatch(m) {
  stopPractice();
  const side = m.sides.indexOf(app.cid);
  const sess = new Session({ side, chars: m.chars, cfg: m.cfg, sim: RACE, send: (p) => app.net.send('fin', { m: m.id, ...p }) });
  sess.mid = m.id;
  sess.stage = m.stage ?? 0;
  sess.startLocal = m.startAt - app.offset;
  app.sess = sess; app.mode = 'match'; app.reported = 0; app.fx = new FX(); app.arenaUntil = 0;
  for (const d of app.finBuf) if (d.m === m.id) sess.recv(d);
  app.finBuf = [];
  // người xem vào giữa trận: xin ảnh chụp trận đấu
  if (side < 0 && Date.now() > sess.startLocal + 400) {
    const ask = () => { if (app.sess !== sess || sess.loaded) return; for (const c of m.sides) { const p = P(c); if (p?.pid) app.net.send('fsnapReq', { m: m.id }, p.pid); } setTimeout(ask, 1500); };
    ask();
  } else sess.loaded = true;
  input.enabled = side >= 0;
  setupPad();
  showArena(true);
  if (side >= 0) $('#qcCanvas').focus?.();
}
function startPractice() {
  if (app.sess && app.mode === 'match') return toast('Đang có cuộc đua.', true);
  const mine = app.myPick || 'cub';
  const others = CHARS.filter((c) => c.id !== mine);
  const cpuC = others[Math.floor(Math.random() * others.length)].id;
  app.practice = { S: initState([mine, cpuC], { rounds: 2, time: 60, seed: Math.floor(Math.random() * 1e9) }), cpu: makeCPU(1, 1), stage: Math.floor(Math.random() * 3), vsT: 0 };
  app.mode = 'practice'; app.fx = new FX(); app.sess = null;
  input.enabled = true;
  setupPad();
  showArena(true);
  toast(`Chạy thử với máy: ${CHAR[mine].name} đấu ${CHAR[cpuC].name}`);
}
function stopPractice() { if (app.mode === 'practice') { app.practice = null; app.mode = null; input.enabled = false; showArena(false); } }

let acc = 0, lastT = 0;
function loop(t) {
  requestAnimationFrame(loop);
  const dt = Math.min(100, t - (lastT || t));
  lastT = t;
  if (!app.mode) return;
  acc += dt;
  let n = 0;
  while (acc >= 1000 / 60 && n < 5) { acc -= 1000 / 60; n++; tick(); }
  if (n === 5) acc = 0;
  draw();
}
function tick() {
  app.tick++;
  if (app.mode === 'practice') {
    const pr = app.practice;
    if (pr.vsT < 110) { pr.vsT++; return; }
    const ev = step(pr.S, input.bits(), pr.cpu(pr.S));
    pr.S.frame && handleEvents(ev.map((e) => ({ ...e, key: `${pr.S.frame}:${e.k}:${e.side ?? ''}` })));
    if (pr.S.phase === 'end') pr.endT = (pr.endT || 0) + 1;
    return;
  }
  const s = app.sess;
  if (!s) return;
  if (Date.now() < s.startLocal) { if (s.side >= 0) s.send(s.packet()); return; }
  if (!s.loaded) return;
  if (s.side >= 0) s.setLocal(input.bits());
  s.tick();
  handleEvents(s.drainEvents());
  // báo kết quả
  if (s.side >= 0 && s.state.phase === 'end' && !app.reported) {
    if ((s.endT = (s.endT || 0) + 1) > 150) { app.reported = 1; act({ t: 'result', id: s.mid, w: s.state.winner, score: s.state.c.map((f) => f.wins) }); }
  }
}
function handleEvents(list) {
  for (const e of list) {
    if (!app.fx.add(e, app.tick)) continue;
    switch (e.k) {
      case 'bump': SND.hit(e.big); break;
      case 'ram': SND.whiff(true); break;
      case 'crash': SND.ko(); break;
      case 'smash': SND.block(); break;
      case 'nitro': case 'boost': SND.super(); break;
      case 'spin': SND.tele(); break;
      case 'scrape': SND.block(); break;
      case 'count': SND.round(); say(String(e.n)); break;
      case 'round': say(`Hiệp ${e.n}`); break;
      case 'go': say('Chạy!'); break;
      case 'behind': SND.ko(); break;
      case 'end': if (e.w === (app.mode === 'practice' ? 0 : app.sess?.side)) confetti(); break;
    }
  }
}
function draw() {
  const cv = $('#qcCanvas');
  if (!cv) return;
  const c = cv.getContext('2d');
  let S, info = {};
  const pub = app.pub;
  const crowd = pub ? pub.players.filter((p) => p.connected && !(pub.match?.sides || []).includes(p.cid)).map((p) => p.av?.e || '🙂') : [];
  if (app.mode === 'practice') {
    S = app.practice.S;
    const pr = app.practice;
    info = { names: [prof.name, 'Máy'], riders: [prof.av?.e || '🙂', '🤖'], crowd, theme: pr.stage, me: 0, endSub: S.phase === 'end' ? 'Bấm "Đua lại" hoặc "Thoát tập"' : '' };
    if (pr.vsT < 110) info.vs = { cars: S.c.map((f) => f.id), names: [prof.name, 'Máy'], riders: info.riders, t: pr.vsT, themeName: THEMES[pr.stage] };
  } else if (app.sess) {
    const s = app.sess;
    S = s.state;
    const m = pub?.match;
    const sides = m?.sides || pub?.last?.sides || [];
    info = { names: sides.map((c) => P(c)?.name || ''), riders: sides.map((c) => P(c)?.av?.e || '🙂'), crowd, theme: s.stage, me: s.side };
    if (Date.now() < s.startLocal) { s.vsT = (s.vsT || 0) + 1; info.vs = { cars: s.state.c.map((f) => f.id), names: info.names, riders: info.riders, t: s.vsT, themeName: THEMES[s.stage] }; }
    else if (!s.loaded) info.waiting = 'Đang tải trận đấu...';
    else if (s.side >= 0 && s.stalled > 40) info.waiting = 'Đang chờ tín hiệu đối thủ...';
    else if (s.side < 0 && s.stalled > 120 && S.phase !== 'end') info.waiting = 'Đang chờ dữ liệu trận...';
    if (app.arenaUntil && Date.now() > app.arenaUntil) { app.sess = null; app.mode = null; input.enabled = false; showArena(false); render2(); return; }
  } else return;
  info.pixel = app.gfx.pixel; info.crt = app.gfx.crt;
  render(c, S, app.fx, app.tick, info);
  // thanh trạng thái
  const bar = $('#qcStatus');
  if (bar) {
    const t = app.mode === 'practice' ? '🏍️ Đang chạy thử với máy' : app.sess?.side >= 0 ? `🏍️ Bạn là ${app.sess.side ? 'P2 (xe xanh)' : 'P1 (xe đỏ)'}` : '👀 Bạn đang xem';
    if (bar.dataset.t !== t) { bar.dataset.t = t; bar.textContent = t; }
  }
}

// ================= GIAO DIỆN =================
function buildStage() {
  $('#stage').innerHTML = `<div class="qc-wrap">
    <div class="panel qc-arena hidden" id="qcArena">
      <div class="qc-screen" id="qcScreen"><canvas id="qcCanvas" width="960" height="540" tabindex="0"></canvas><button class="qc-fs" id="qcFs" title="Toàn màn hình">⛶</button><div class="reacts" id="reacts"></div></div>
      <div class="qc-pad ${touchDev ? '' : 'hidden'}" id="qcPad"></div>
      <div class="qc-bar"><span id="qcStatus" class="muted"></span><span class="qc-acts" id="qcActs"></span></div>
    </div>
    <div class="panel qc-lobby" id="qcLobby"><div class="muted">Đang kết nối...</div></div>
    <div class="panel qc-chars" id="qcChars"></div>
    <div class="panel react-bar" id="reactBar">${['👏', '🔥', '😱', '😂', '🤔', '💪', '😭', '🎉'].map((e) => `<button type="button" data-react="${e}">${e}</button>`).join('')}</div>
    <div class="panel cfg ro-body" id="qcCfg"></div>
    <div class="panel qc-help"><b>🎮 Điều khiển</b><div class="qc-keys">
      <span><kbd>A</kbd><kbd>D</kbd> / <kbd>←</kbd><kbd>→</kbd> bẻ lái trái / phải</span><span>Xe tự chạy · giữ <kbd>W</kbd>/<kbd>↑</kbd> chạy hết ga · <kbd>S</kbd>/<kbd>↓</kbd> phanh</span>
      <span><kbd>J</kbd> (hoặc <kbd>1</kbd>) <b>Húc ngang</b> — đẩy đối thủ vào chướng ngại</span><span><kbd>K</kbd> / <kbd>Space</kbd> <b>Nitro</b> khi thanh đầy</span>
      <span>Đâm cọc, rơm, xe ba gác, trâu, đá = thua hiệp · vũng dầu làm xe xoay · bùn làm chậm · mũi tên vàng tăng tốc</span><span>Đâm hoặc bị bỏ xa hơn 160 m = <b>bị loại</b>. Người còn lại <b>chưa thắng ngay</b> mà chạy tiếp tới khi cũng đâm — ai trụ lâu hơn thắng (về đích trước cũng thắng).</span></div></div>
  </div>`;
  $$('[data-react]').forEach((b) => (b.onclick = () => { const d = { e: b.dataset.react, name: prof.name, id: Math.random() }; app.net?.send('react', d); showReact(d); }));
  $('#qcFs').onclick = () => { const el = $('#qcArena'); if (document.fullscreenElement) document.exitFullscreen(); else el.requestFullscreen?.().then(() => screen.orientation?.lock?.('landscape').catch(() => {})).catch(() => {}); };
  renderChars();
}
function showArena(on) {
  $('#qcArena').classList.toggle('hidden', !on);
  $('.qc-wrap').classList.toggle('fighting', !!on);
  renderActs();
  if (on) $('#qcArena').scrollIntoView({ block: 'start', behavior: 'smooth' });
}
function setupPad() {
  const ch = app.mode === 'practice' ? app.practice.S.c[0].id : app.sess && app.sess.side >= 0 ? pubChars()[app.sess.side] : null;
  const pad = $('#qcPad');
  if (!ch) { pad.classList.add('hidden'); return; }
  pad.classList.toggle('hidden', !touchDev);
  input.buildTouch(pad, [], [[B.U, 'Ga<small>hết cỡ</small>'], [B.LP, '💥 Húc', 'sp'], [B.LK, '🔥 Nitro', 'sup']]);
}
const pubChars = () => app.pub?.match?.chars || [];
function renderActs() {
  const el = $('#qcActs');
  if (!el) return;
  if (app.mode === 'practice') el.innerHTML = '<button class="btn sm" id="qcAgain">🔁 Đua lại</button><button class="btn sm ghost" id="qcQuit">Thoát tập</button>';
  else if (app.sess && app.sess.side >= 0 && app.pub?.match) el.innerHTML = '<button class="btn sm danger" id="qcForfeit">🏳️ Bỏ cuộc</button>';
  else el.innerHTML = '';
  el.insertAdjacentHTML('afterbegin', `<button class="btn sm ghost" id="qcPix" title="Đồ hoạ">${app.gfx.pixel ? '🟪 Pixel' : '✨ Mịn'}</button><button class="btn sm ghost" id="qcCrt" title="Hiệu ứng màn hình cũ">${app.gfx.crt ? '📺 CRT bật' : '📺 CRT tắt'}</button>`);
  const saveG = () => { try { localStorage.setItem('duaxe-gfx', JSON.stringify(app.gfx)); } catch {} renderActs(); };
  $('#qcPix').onclick = () => { app.gfx.pixel = !app.gfx.pixel; saveG(); };
  $('#qcCrt').onclick = () => { app.gfx.crt = !app.gfx.crt; saveG(); };
  $('#qcAgain') && ($('#qcAgain').onclick = () => startPractice());
  $('#qcQuit') && ($('#qcQuit').onclick = () => stopPractice());
  $('#qcForfeit') && ($('#qcForfeit').onclick = () => { if (confirm('Bỏ cuộc lượt đua này?')) act({ t: 'forfeit' }); });
}
function render2() {
  if (!app.pub) return;
  renderTop();
  renderLobby();
  renderChars();
  renderCfg();
  renderScores();
  renderActs();
  updateVoice();
}
function renderTop() {
  const pub = app.pub;
  const label = pub.phase === 'fight' ? `Lượt đua ${pub.match?.id ?? ''}` : 'Phòng chờ';
  $('#phasePill').innerHTML = `${icon('card')}<span class="lbl">${label}</span><span class="t">👀 ${pub.players.filter((p) => p.connected && !(pub.match?.sides || pub.seats).includes(p.cid)).length} xem</span>`;
  renderVoiceBtns();
}
function seatHTML(i) {
  const pub = app.pub, cid = pub.match ? pub.match.sides[i] : pub.seats[i], p = P(cid), mine = cid === app.cid;
  const ch = CHAR[(pub.match ? pub.match.chars[i] : pub.pick[cid]) || 'cub'];
  let foot;
  if (!cid) foot = pub.phase === 'lobby' ? `<button class="btn sm primary" data-sit="${i}">Vào đường đua</button>` : '<span class="muted">Trống</span>';
  else if (pub.phase === 'fight') foot = '<span class="tag turn">Đang đấu</span>';
  else foot = pub.ready[i] ? '<span class="tag ok">✔ Sẵn sàng</span>' : '<span class="muted">Chưa sẵn sàng</span>';
  return `<div class="qc-seat ${mine ? 'me' : ''} ${p && !p.connected ? 'offline' : ''}" style="--cc:${ch.color}">
    <span class="qc-side">${i ? 'P2' : 'P1'}</span>
    <canvas class="qc-port dx-port" data-port="${cid ? ch.id : ''}" data-rider="${p?.av?.e || ''}" width="170" height="120"></canvas>
    <div class="qc-sinfo">${p ? `<div class="qc-pn">${avatarHTML(p, 'sm')}<b>${esc(p.name)}${mine ? ' (bạn)' : ''}</b></div><span class="muted">${ch.name} · ${p.wins}T ${p.losses}B</span>` : '<b class="muted">Chờ tay đua...</b>'}<div>${foot}</div></div>
  </div>`;
}
function renderLobby() {
  const pub = app.pub, el = $('#qcLobby');
  const seat = pub.seats.indexOf(app.cid), inQ = pub.queue.includes(app.cid);
  const last = pub.last;
  let res = '';
  if (last && pub.phase === 'lobby') {
    const w = P(last.winner);
    res = `<div class="qc-res">${w ? `🏆 <b>${esc(w.name)}</b> (${CHAR[last.chars[last.w]].name}) thắng ${last.score ? `<b>${last.score[last.w]}–${last.score[1 - last.w]}</b>` : ''}${last.why === 'forfeit' ? ' — đối thủ bỏ cuộc' : last.why === 'left' ? ' — đối thủ rời đi' : ''}` : '🤝 Trận vừa rồi hoà'}</div>`;
  }
  let ctl = '';
  if (pub.phase === 'fight') ctl = `<span class="muted">🏍️ Cuộc đua đang diễn ra${app.mode === 'match' ? '' : ' — bấm Xem để vào khán đài'}.</span>${app.mode !== 'match' ? '<button class="btn sm primary" id="qcWatch">👀 Xem đua</button>' : ''}`;
  else if (seat >= 0) ctl = `<button class="btn ${pub.ready[seat] ? '' : 'primary'} big" id="qcReady">${pub.ready[seat] ? 'Huỷ sẵn sàng' : pub.seats[1 - seat] ? '✅ Sẵn sàng đua!' : '✅ Sẵn sàng'}</button><button class="btn sm ghost" id="qcStand">Rời đường đua</button>`;
  else ctl = `<button class="btn ${inQ ? '' : 'primary'}" id="qcQueue">${inQ ? 'Rời hàng chờ' : '🙋 Xếp hàng lên đua'}</button>`;
  ctl += app.mode ? '' : '<button class="btn sm sun" id="qcPractice">🥋 Chạy thử với máy</button>';
  el.innerHTML = `${res}<div class="qc-seats">${seatHTML(0)}<div class="qc-vs">VS</div>${seatHTML(1)}</div>
    <div class="ctl-row">${ctl}</div>
    ${pub.queue.length ? `<div class="qc-queue"><b>Hàng chờ:</b> ${pub.queue.map((c, i) => `<span class="chip">${i + 1}. ${esc(P(c)?.name ?? '?')}</span>`).join('')}</div>` : ''}
    <div class="ctl-row small"><button class="btn sm sun" id="copyLink">${icon('copy')}Link mời</button><span class="muted">${pub.players.filter((p) => p.connected).length}/${pub.max} người trong phòng · Cuộc đua chạy thẳng giữa 2 máy tay đua, người xem nhận phím bấm để xem lại y hệt.</span></div>`;
  $$('[data-sit]', el).forEach((b) => (b.onclick = () => act({ t: 'sit', side: Number(b.dataset.sit) })));
  $('#qcReady') && ($('#qcReady').onclick = () => { unlockSnd(); act({ t: 'ready', on: !pub.ready[seat] }); });
  $('#qcStand') && ($('#qcStand').onclick = () => act({ t: 'stand' }));
  $('#qcQueue') && ($('#qcQueue').onclick = () => act({ t: 'queue' }));
  $('#qcPractice') && ($('#qcPractice').onclick = () => { unlockSnd(); startPractice(); });
  $('#qcWatch') && ($('#qcWatch').onclick = () => { app.sess = null; startMatch(pub.match); });
  $('#copyLink').onclick = () => copyText(inviteUrl(app.code), 'Đã sao chép link mời!');
  $$('canvas[data-port]', el).forEach((cv) => { if (cv.dataset.port) carPortrait(cv, cv.dataset.port, cv.dataset.rider); });
}
function renderChars() {
  const el = $('#qcChars');
  if (!el) return;
  const pick = app.myPick || (app.pub && app.pub.pick[app.cid]) || 'cub';
  const ch = CHAR[pick];
  const key = pick + (app.pub ? app.pub.phase : '');
  if (el.dataset.key === key) return;
  el.dataset.key = key;
  el.innerHTML = `<div class="ml-head"><b>🏍️ Chọn xe</b><span class="muted">Chọn trước khi bấm Sẵn sàng</span></div>
    <div class="qc-select dx-select"><div class="qc-big" style="--cc:${ch.color}"><canvas width="220" height="150" data-big="${ch.id}"></canvas><b>${ch.name.toUpperCase()}</b><small>${ch.desc}</small></div>
    <div class="qc-grid">${CHARS.map((c) => `<button class="qc-card ${c.id === pick ? 'on' : ''}" data-pick="${c.id}" style="--cc:${c.color}" title="${c.name} — ${c.desc}"><canvas width="120" height="80" data-cport="${c.id}"></canvas><b>${c.name}</b></button>`).join('')}</div></div>
    <div class="dx-stats">${[['Tốc độ', ch.top, 1040, 1290], ['Tăng tốc', ch.acc, 18, 38], ['Lạng lách', ch.steer, 270, 460], ['Sức húc', ch.mass, 70, 175]].map(([n, v, lo, hi]) => `<div><span>${n}</span><i style="--w:${Math.round(20 + ((v - lo) / (hi - lo)) * 80)}%"></i></div>`).join('')}${ch.tough ? '<p class="muted">💪 Đâm cọc / đống rơm không sao (ủi bay luôn).</p>' : ''}</div>`;
  $$('[data-pick]', el).forEach((b) => (b.onclick = () => { app.myPick = b.dataset.pick; try { localStorage.setItem('duaxe-pick', app.myPick); } catch {} if (app.pub) act({ t: 'pick', c: b.dataset.pick }); el.dataset.key = ''; renderChars(); }));
  $$('canvas[data-cport]', el).forEach((cv) => carPortrait(cv, cv.dataset.cport, prof.av?.e || ''));
  $$('canvas[data-big]', el).forEach((cv) => carPortrait(cv, cv.dataset.big, prof.av?.e || ''));
}
function renderCfg() {
  const pub = app.pub, c = pub.cfg, el = $('#qcCfg');
  const ed = app.isHost && pub.phase === 'lobby';
  const seg = (key, opts) => `<div class="mini-seg">${opts.map(([v, l]) => `<button type="button" class="${String(c[key]) === String(v) ? 'on' : ''}" data-opt="${key}" data-val="${v}" ${ed ? '' : 'disabled'}>${l}</button>`).join('')}</div>`;
  const ck = `${JSON.stringify(c)}|${ed}`;
  if (el.dataset.key === ck) return;
  el.dataset.key = ck;
  el.innerHTML = `<div class="ro-row"><b>⚙️ Luật đua</b><span class="muted">${ed ? '' : app.isHost ? '(đổi được khi chưa đấu)' : '(chủ phòng chỉnh)'}</span></div>
    <div class="ro-grid">
      <label>Thắng mấy hiệp${seg('rounds', [[1, '1 hiệp'], [2, '2 hiệp (BO3)'], [3, '3 hiệp (BO5)']])}</label>
      <label>Đường đua${seg('time', [[60, 'Ngắn 1,2 km'], [99, 'Dài 2,4 km'], [0, 'Không có đích (ai trụ lâu hơn)']])}</label>
      <label>Cảnh đường${seg('stage', [[-1, 'Ngẫu nhiên'], ...THEMES.map((st, i) => [i, st])])}</label>
      <label>Sau mỗi cuộc đua${seg('rotate', [[true, 'Thắng ở lại, thua xuống xếp hàng'], [false, 'Giữ nguyên 2 người']])}</label>
    </div>
    <p class="ro-note">2 tay đua cùng chạy trên một con đường qua các làng, tối đa 8 người xem. Đâm chướng ngại vật hoặc bị bỏ xa quá 160 m là bị loại; người còn lại phải chạy tiếp tới khi cũng đâm mới hết hiệp — ai trụ lâu hơn (hoặc về đích trước) thắng. Húc ngang để đẩy đối thủ vào chướng ngại! Mỗi máy tự mô phỏng và "tua lại" khi tín hiệu đối thủ tới trễ nên đua qua mạng vẫn mượt.</p>`;
  $$('[data-opt]', el).forEach((bt) => (bt.onclick = () => {
    let v = bt.dataset.val;
    v = v === 'true' ? true : v === 'false' ? false : Number(v);
    act({ t: 'cfg', cfg: { [bt.dataset.opt]: v } });
    try { const o = JSON.parse(localStorage.getItem('duaxe-room-opts') || '{}'); o[bt.dataset.opt] = v; localStorage.setItem('duaxe-room-opts', JSON.stringify(o)); } catch {}
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
  const fighting = pub.match?.sides || [];
  const list = [...pub.players].filter((p) => p.connected || fighting.includes(p.cid)).sort((a, b) => (fighting.includes(b.cid) ? 1 : 0) - (fighting.includes(a.cid) ? 1 : 0) || b.wins - a.wins);
  $('#scoreBox').innerHTML = `<div class="sb-head"><b>Trong phòng (${pub.players.filter((p) => p.connected).length}/${pub.max})</b></div>${list.map((p) => `<div class="sb-row ${p.cid === app.cid ? 'me' : ''} ${p.connected ? '' : 'offline'} ${(p.pid && app.speaking.has(p.pid)) || (p.cid === app.cid && app.speaking.has('self')) ? 'speaking' : ''}">
      <span class="rank">${fighting.includes(p.cid) ? '🏍️' : pub.seats.includes(p.cid) ? '🪑' : pub.queue.includes(p.cid) ? '🙋' : '👀'}</span>${avatarHTML(p, 'sm')}<span class="nm">${esc(p.name)}${p.cid === pub.hostCid ? ' 👑' : ''}</span>
      ${app.isHost && p.cid !== app.cid && !fighting.includes(p.cid) ? `<button class="kick-sm" data-kick="${p.cid}" title="Mời ra">×</button>` : ''}
      <b class="pt">${p.wins}T</b></div>`).join('')}`;
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
const SYS = { win: '🏆', phase: '🏍️', join: '👋', leave: '🚪', info: 'ℹ️' };
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
