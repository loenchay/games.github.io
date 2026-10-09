// Game "Vỗ Cánh Sinh Tồn": nhiều người cùng bay trên một bầu trời, ai trụ lại cuối cùng thắng.
import '../theme.js';
import { createNet } from '../net.js';
import { Voice } from '../voice.js';
import { ICONS, AVATARS, AV_COLORS, icon } from '../roles.js';
import { $, $$, esc, params, LOCAL, ss, roomCode, loadProfile, saveProfile, clientId, avatarHTML, toast, confetti, SFX, unlockAudio, inviteUrl, copyText, beep } from '../common.js';
import { BayEngine } from './engine.js';
import { W, H, GROUND, BX, R, PIPE_W, GRAV, MAX_FALL, Bird, pipe, dist, passed } from './world.js';
import { gameIdentity, startPresence, presenceUpdate } from '../site.js';

const NS = 'bay';
const prof = loadProfile();
const app = {
  cid: clientId(), code: null, isHost: false, net: null, engine: null, hostPid: null,
  pub: null, joined: false, chat: [], seenLog: 0, unread: 0, voice: null, speaking: new Set(),
  offset: 0, bird: null, birdRound: 0, ghosts: new Map(), sentDead: 0, lastSend: 0, lastScore: 0,
  lobbyHop: { y: 0, vy: 0 }, overD: null, shownOver: 0,
};
if (LOCAL) { window.__app = app; window.__bay = { pipe, dist, PIPE_W, BX, R, flap: () => flap() }; }
const cleanAv = (av) => ({ e: AVATARS.includes(av?.e) ? av.e : AVATARS[0], c: Number.isInteger(av?.c) && av.c >= 0 && av.c < AV_COLORS.length ? av.c : 0 });

// ================= VẼ =================
const PIPE_COL = [['#7bd148', '#a9ec7c'], ['#38b2ff', '#8fd3ff'], ['#ff6fb5', '#ffb3d9'], ['#ffc93d', '#ffe08a']];
const EDGE = '#1d1648';
const isDark = () => document.documentElement.dataset.theme === 'dark' || (!document.documentElement.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
function rr(x, y, w, h, r, c) {
  c.beginPath();
  c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r);
  c.closePath();
}
function drawSky(c, d, t) {
  const dark = isDark();
  const g = c.createLinearGradient(0, 0, 0, GROUND);
  if (dark) { g.addColorStop(0, '#171238'); g.addColorStop(1, '#3d2f7d'); } else { g.addColorStop(0, '#7fd0ff'); g.addColorStop(1, '#e9f8ff'); }
  c.fillStyle = g; c.fillRect(0, 0, W, GROUND);
  if (dark) { c.fillStyle = 'rgba(255,255,255,.75)'; for (let i = 0; i < 40; i++) { const x = ((i * 97 - d * 0.05) % W + W) % W, y = (i * 53) % 300; c.fillRect(x, y, 1.6, 1.6); } }
  // mặt trời / trăng
  c.fillStyle = dark ? '#fff3c4' : '#ffe14d';
  c.beginPath(); c.arc(320, 90, 30, 0, Math.PI * 2); c.fill();
  // mây
  c.fillStyle = dark ? 'rgba(255,255,255,.12)' : 'rgba(255,255,255,.9)';
  for (let i = 0; i < 5; i++) {
    const x = ((i * 190 - d * 0.18) % (W + 200) + (W + 200)) % (W + 200) - 100, y = 60 + (i * 71) % 180;
    c.beginPath(); c.arc(x, y, 22, 0, 7); c.arc(x + 24, y - 10, 26, 0, 7); c.arc(x + 52, y, 20, 0, 7); c.fill();
  }
  // đồi xa
  c.fillStyle = dark ? '#2b2465' : '#a8e6a0';
  c.beginPath(); c.moveTo(0, GROUND);
  for (let x = 0; x <= W; x += 10) c.lineTo(x, GROUND - 60 - Math.sin((x + d * 0.35) / 70) * 22 - Math.sin((x + d * 0.35) / 23) * 6);
  c.lineTo(W, GROUND); c.fill();
}
function drawPipes(c, d, seed, mode) {
  const first = Math.max(0, Math.floor((d - 100 - 640) / 215));
  for (let i = first; i < first + 5; i++) {
    const p = pipe(seed, i, mode);
    const x = p.x - d;
    if (x > W + 20 || x + PIPE_W < -20) continue;
    const [col, hi] = PIPE_COL[p.hue];
    c.lineWidth = 3; c.strokeStyle = EDGE;
    for (const [y0, y1, capY] of [[-10, p.top, p.top - 26], [p.bot, GROUND + 10, p.bot]]) {
      c.fillStyle = col; rr(x, y0, PIPE_W, y1 - y0, 8, c); c.fill(); c.stroke();
      c.fillStyle = hi; c.fillRect(x + 8, y0 + 4, 10, y1 - y0 - 8);
      // sọc kẹo
      c.save(); rr(x, y0, PIPE_W, y1 - y0, 8, c); c.clip(); c.fillStyle = 'rgba(255,255,255,.22)';
      for (let yy = Math.floor(y0 / 28) * 28; yy < y1; yy += 28) { c.beginPath(); c.moveTo(x, yy); c.lineTo(x + PIPE_W, yy + 14); c.lineTo(x + PIPE_W, yy + 22); c.lineTo(x, yy + 8); c.fill(); }
      c.restore();
      c.fillStyle = col; rr(x - 6, capY, PIPE_W + 12, 26, 8, c); c.fill(); c.stroke();
      c.fillStyle = hi; c.fillRect(x + 2, capY + 5, 12, 16);
    }
  }
}
function drawGround(c, d) {
  const dark = isDark();
  c.fillStyle = dark ? '#3c7a3a' : '#7bd148'; c.fillRect(0, GROUND, W, 16);
  c.fillStyle = dark ? '#5b3a1e' : '#e8b77a'; c.fillRect(0, GROUND + 16, W, H - GROUND - 16);
  c.fillStyle = dark ? 'rgba(0,0,0,.18)' : 'rgba(0,0,0,.08)';
  for (let x = -((d % 30) + 30); x < W + 30; x += 30) { c.beginPath(); c.moveTo(x, GROUND + 16); c.lineTo(x + 15, GROUND + 16); c.lineTo(x + 5, H); c.lineTo(x - 10, H); c.fill(); }
  c.strokeStyle = EDGE; c.lineWidth = 3; c.beginPath(); c.moveTo(0, GROUND); c.lineTo(W, GROUND); c.stroke();
}
function drawBird(c, x, y, vy, p, { ghost = false, dim = false, label = '', dead = false, t = 0 } = {}) {
  c.save();
  // chim người khác mờ hơn (và nhỏ hơn chút) khi mình đang bay, để mắt tập trung vào chim của mình
  c.globalAlpha = ghost ? (dim ? 0.28 : 0.6) : 1;
  c.translate(x, y);
  if (ghost && dim) c.scale(0.86, 0.86);
  const ang = dead ? Math.PI / 2 : Math.max(-0.45, Math.min(1.2, vy / 600));
  c.rotate(ang);
  const col = AV_COLORS[p?.av?.c ?? 0] || '#ffc93d';
  c.lineWidth = 2.5; c.strokeStyle = EDGE;
  // đuôi
  c.fillStyle = col; c.beginPath(); c.moveTo(-R + 2, -3); c.lineTo(-R - 9, -8); c.lineTo(-R - 7, 4); c.closePath(); c.fill(); c.stroke();
  // thân
  c.beginPath(); c.arc(0, 0, R, 0, Math.PI * 2); c.fillStyle = col; c.fill(); c.stroke();
  // mỏ
  c.fillStyle = '#ff8a1f'; c.beginPath(); c.moveTo(R - 3, -3); c.lineTo(R + 9, 1); c.lineTo(R - 3, 6); c.closePath(); c.fill(); c.stroke();
  // mặt = avatar emoji
  c.font = `${R * 1.15}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
  c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText(p?.av?.e || '🐤', 1, 1.5);
  // cánh vỗ
  const flap = dead ? 0 : Math.sin(t * 22) * (vy < 0 ? 1 : 0.35);
  c.fillStyle = '#ffffff'; c.beginPath(); c.ellipse(-R + 3, 4, 7.5, 4.5, -0.5 + flap * 0.8, 0, Math.PI * 2); c.fill(); c.stroke();
  if (dead) { c.fillStyle = EDGE; c.font = 'bold 12px sans-serif'; c.fillText('✖✖', 2, -6); }
  c.restore();
  if (label) {
    c.save();
    c.globalAlpha = ghost ? (dim ? 0.4 : 0.85) : 1;
    c.font = '700 11px "Be Vietnam Pro",sans-serif';
    const w = c.measureText(label).width + 12;
    c.fillStyle = ghost ? 'rgba(255,255,255,.85)' : '#ffc93d';
    rr(x - w / 2, y - R - 24, w, 17, 8, c); c.fill(); c.lineWidth = 1.5; c.strokeStyle = EDGE; c.stroke();
    c.fillStyle = EDGE; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(label, x, y - R - 15.5);
    c.restore();
  }
}
function bigText(c, text, y, size = 64, color = '#fff') {
  c.save(); c.font = `800 ${size}px "Bricolage Grotesque","Be Vietnam Pro",sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.lineWidth = size / 8; c.strokeStyle = EDGE; c.lineJoin = 'round'; c.strokeText(text, W / 2, y); c.fillStyle = color; c.fillText(text, W / 2, y); c.restore();
}
function fitCanvas(cv) {
  const dpr = Math.min(2, devicePixelRatio || 1);
  const r = cv.getBoundingClientRect();
  const w = Math.round(r.width * dpr), h = Math.round(r.height * dpr);
  if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
  const c = cv.getContext('2d');
  c.setTransform(cv.width / W, 0, 0, cv.height / H, 0, 0);
  return c;
}

// ================= TRANG CHỦ =================
function initHome() {
  $$('[data-logo]').forEach((el) => (el.innerHTML = ICONS.wolf));
  gameIdentity(prof);
  startPresence(prof, 'Đang ở Vỗ Cánh Sinh Tồn');
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
  const sess = JSON.parse(ss.get('bay-session') || 'null');
  if (sess && (!pre || sess.code === pre) && prof.name) enterRoom(sess.code, sess.host);
}
// màn minh hoạ: vài chú chim tự bay
function demo() {
  const cv = $('#bayDemo');
  if (!cv) return;
  const c = cv.getContext('2d');
  const birds = [0, 1, 2].map((k) => ({ b: new Bird(7, 'chill'), av: { e: ['🐥', '🦊', '🐸'][k], c: [2, 4, 5][k] }, off: k * 9 }));
  const t0 = performance.now();
  const loop = (now) => {
    if (!cv.isConnected || $('#home').classList.contains('hidden')) return;
    requestAnimationFrame(loop);
    const T = ((now - t0) / 1000) % 40;
    const d = dist(T, 'chill');
    c.setTransform(cv.width / W, 0, 0, cv.width / W, 0, -150 * (cv.width / W));
    drawSky(c, d, T); drawPipes(c, d, 7, 'chill'); drawGround(c, d);
    for (const it of birds) {
      if (T < it.b.t) it.b.reset();
      let k = 0; while (pipe(7, k, 'chill').x - d + PIPE_W < BX - R) k++;
      const p = pipe(7, k, 'chill');
      const target = (p.top + p.bot) / 2 + 10 + it.off;
      if (it.b.y > target && it.b.vy > -50) it.b.flap();
      it.b.step(T);
      drawBird(c, BX - it.off * 2, it.b.y, it.b.vy, { av: it.av }, { t: T });
    }
  };
  requestAnimationFrame(loop);
}

// ================= VÀO PHÒNG =================
async function enterRoom(code, host) {
  presenceUpdate('🐤 Đang chơi Vỗ Cánh Sinh Tồn');
  app.code = code;
  app.isHost = host;
  ss.set('bay-session', JSON.stringify({ code, host }));
  const url = new URL(location.href);
  url.searchParams.set('room', code);
  history.replaceState(null, '', url);
  $('#home').classList.add('hidden');
  $('#room').classList.remove('hidden');
  $('#codeChip').innerHTML = `${icon('copy')}${esc(code)}`;
  $('#codeChip').onclick = () => copyText(inviteUrl(code), 'Đã sao chép link mời!');
  $('#leaveBtn').onclick = () => leaveRoom();
  buildStage();
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
  net.on('pos', (d, pid) => onPos(d, pid));
  net.on('chat', (d, pid) => {
    if (app.isHost) { const p = app.engine.byPid(pid); if (p) hostChat(p.cid, d.text); }
    else if (pid === app.hostPid) addChat(d);
  });
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
    app.engine = new BayEngine(app.cid, { cleanAv });
    try { const m = localStorage.getItem('bay-mode'); if (m) app.engine.s.config.mode = m; } catch {}
    app.engine.onChange = hostSync;
    app.engine.onEvent = (ev) => { app.net.send('fx', ev); playFx(ev); };
    app.engine.addPlayer(app.cid, hello(), net.selfId);
    setInterval(() => app.engine.tick(), 100);
    setInterval(() => { if (['count', 'play'].includes(app.engine.s.phase)) hostSync(); }, 2000); // đồng bộ đồng hồ
  } else {
    setTimeout(() => {
      if (!app.pub && app.net === net) $('#bayStatus').innerHTML = `<b>Chưa thấy chủ phòng.</b> Kiểm tra mã <b>${esc(code)}</b> và chắc chắn chủ phòng vẫn mở trang. Nếu ở mạng công ty / 4G có thể mất thêm vài giây...`;
    }, 15000);
  }
}
function leaveRoom(ask = true) {
  if (ask && app.bird?.alive && app.pub?.phase === 'play' && !confirm('Đang bay mà rời phòng?')) return;
  ss.del('bay-session');
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
}

// ================= TRẠNG THÁI =================
const P = (cid) => app.pub?.players.find((p) => p.cid === cid);
const worldT = () => (Date.now() + app.offset - (app.pub?.startAt || 0)) / 1000;
function applyPub(pub) {
  const prev = app.pub;
  app.pub = pub;
  // ước lượng chênh lệch đồng hồ với chủ phòng (lấy giá trị lớn nhất -> bớt ảnh hưởng độ trễ mạng)
  const off = pub.hostNow - Date.now();
  if (app.isHost) app.offset = 0;
  else if (!prev || Math.abs(off - app.offset) > 1500 || off > app.offset) app.offset = off;
  const me = pub.players.find((p) => p.cid === app.cid);
  if (me) app.joined = true;
  else if (app.joined) { toast('Bạn đã bị mời ra khỏi phòng.', true); return setTimeout(() => leaveRoom(false), 1200); }
  for (const l of pub.log) if (l.id > app.seenLog) addChat({ k: 'sys', kind: l.kind, text: l.text });
  app.seenLog = Math.max(app.seenLog, ...pub.log.map((l) => l.id), 0);
  // ván mới -> tạo chim mới
  if (pub.round !== app.birdRound && ['count', 'play'].includes(pub.phase)) {
    app.birdRound = pub.round;
    app.ghosts.clear();
    app.overD = null;
    app.bird = pub.racers.includes(app.cid) ? new Bird(pub.seed, pub.config.mode) : null;
    app.sentDead = 0;
  }
  if (pub.phase === 'over' && app.overD == null) app.overD = Math.max(0, worldT());
  if (pub.phase === 'over' && app.shownOver !== pub.round) {
    app.shownOver = pub.round;
    if (pub.winner === app.cid) confetti();
  }
  renderPanel();
  renderScores();
  updateVoice();
}
function playFx(ev) {
  if (ev.type === 'count') SFX.start();
  else if (ev.type === 'dead' && ev.cid !== app.cid) beep([[200, 0.08]], 'sawtooth', 0.03);
  else if (ev.type === 'over') SFX.correct();
}
function onPos(d, pid) {
  if (!d?.cid || d.r !== app.pub?.round) return;
  app.ghosts.set(d.cid, { ...d, at: performance.now() });
  if (app.isHost) app.engine.live(d.cid, d.s);
}
function flap() {
  const pub = app.pub;
  if (!pub) return;
  if (['count', 'play'].includes(pub.phase) && app.bird) {
    if (worldT() < 0 || !app.bird.alive) return;
    app.bird.flap();
    beep([[760, 0.035]], 'square', 0.025);
    sendPos(true);
  } else if (pub.phase === 'lobby' || pub.phase === 'over') { app.lobbyHop.vy = -330; beep([[760, 0.035]], 'square', 0.025); }
}
function sendPos(force = false) {
  const b = app.bird;
  if (!b || !app.net) return;
  const now = performance.now();
  if (!force && now - app.lastSend < 80) return;
  app.lastSend = now;
  const msg = { cid: app.cid, r: app.pub.round, y: Math.round(b.y * 10) / 10, vy: Math.round(b.vy), s: b.score, a: b.alive ? 1 : 0, t: Math.round(b.t * 100) / 100 };
  app.net.send('pos', msg);
  if (app.isHost) app.engine.live(app.cid, b.score); // gói tin không tự gửi về chính mình
}

// ================= SÂN KHẤU =================
function buildStage() {
  $('#stage').innerHTML = `<div class="bay-wrap">
    <div class="panel bay-stage"><canvas id="bayCv" class="bay-cv" aria-label="Bầu trời"></canvas></div>
    <div class="panel bay-panel"><div id="bayStatus" class="bay-status">Đang kết nối tới phòng...</div><div id="bayCtl" class="bay-ctl"></div></div>
  </div>`;
  const cv = $('#bayCv');
  cv.addEventListener('pointerdown', (e) => { e.preventDefault(); flap(); });
  window.addEventListener('keydown', (e) => {
    if (e.target.closest?.('input, textarea')) return;
    if (['Space', 'ArrowUp', 'KeyW', 'Enter'].includes(e.code)) { e.preventDefault(); if (!e.repeat) flap(); }
  });
  requestAnimationFrame(frame);
}
function frame(now) {
  requestAnimationFrame(frame);
  const cv = $('#bayCv');
  if (!cv || !app.pub) return;
  const c = fitCanvas(cv);
  const pub = app.pub, mode = pub.config.mode, tsec = now / 1000;
  let T = worldT();
  const racing = ['count', 'play'].includes(pub.phase);
  if (pub.phase === 'over') T = app.overD ?? T;
  const d = racing || pub.phase === 'over' ? dist(Math.max(0, T), mode) : (now / 1000) * 60;
  drawSky(c, d, tsec);
  if (racing || pub.phase === 'over') drawPipes(c, d, pub.seed, mode);
  drawGround(c, d);
  // chim của mình
  const b = app.bird;
  if (b && racing && T > 0) {
    b.step(T);
    if (b.score > app.lastScore) { app.lastScore = b.score; beep([[988, 0.05], [1319, 0.08]], 'triangle', 0.04); }
    if (!b.alive && app.sentDead !== pub.round) {
      app.sentDead = pub.round;
      act({ t: 'dead', time: b.deathT, score: b.score });
      sendPos(true);
      beep([[300, 0.06], [140, 0.25]], 'sawtooth', 0.05);
      { const st = $('.bay-stage'); st?.classList.remove('shake'); void st?.offsetWidth; st?.classList.add('shake'); }
    }
    sendPos();
  }
  if (b && racing && T <= 0) app.lastScore = 0;
  // chim của người khác
  if (racing || pub.phase === 'over') {
    const dim = racing && !!b && b.alive && pub.racers.includes(app.cid);
    for (const cid of pub.racers) {
      if (cid === app.cid) continue;
      const g = app.ghosts.get(cid), p = P(cid);
      if (!p) continue;
      let y = H * 0.42 + Math.sin(tsec * 6 + cid.length) * 6, vy = 0, alive = !pub.dead[cid];
      if (g) {
        const dt = Math.min(0.25, (performance.now() - g.at) / 1000);
        y = g.y; vy = g.vy;
        if (g.a || alive) { y = g.y + g.vy * dt + 0.5 * GRAV * dt * dt; vy = Math.min(MAX_FALL, g.vy + GRAV * dt); }
        if (!g.a) alive = false;
        y = Math.max(R, Math.min(GROUND - R, y));
      }
      drawBird(c, BX, y, vy, p, { ghost: true, dim, label: p.name, dead: !alive, t: tsec + cid.length });
    }
  } else {
    // phòng chờ: mọi người xếp hàng lơ lửng
    const list = pub.players.filter((p) => p.connected);
    const hop = app.lobbyHop;
    hop.vy += GRAV * 0.7 / 60; hop.y = Math.min(0, hop.y + hop.vy / 60); if (hop.y === 0) hop.vy = 0;
    list.forEach((p, k) => {
      const cols = Math.min(4, list.length), row = Math.floor(k / 4), col = k % 4;
      const x = W / 2 + (col - (cols - 1) / 2) * 80, y = 220 + row * 80 + Math.sin(tsec * 4 + k) * 8 + (p.cid === app.cid ? hop.y : 0);
      drawBird(c, x, y, p.cid === app.cid ? hop.vy : 0, p, { label: p.cid === app.cid ? 'Bạn' : p.name, t: tsec + k });
    });
  }
  if (b && (racing || pub.phase === 'over')) drawBird(c, BX, b.y, b.vy, P(app.cid), { label: 'Bạn', dead: !b.alive, t: tsec });
  // chữ trên màn
  if (pub.phase === 'count') {
    const s = Math.ceil(-T);
    bigText(c, s > 0 ? String(s) : 'BAY!', 250, 96, s > 0 ? '#fff' : '#ffe14d');
    bigText(c, 'Chạm / Space để vỗ cánh', 330, 20);
  } else if (pub.phase === 'play') {
    const sc = b ? b.score : Math.max(0, ...[...app.ghosts.values()].map((g) => g.s || 0));
    bigText(c, String(sc), 70, 54);
    const alive = pub.racers.filter((x) => !pub.dead[x]).length;
    c.save(); c.font = '800 14px "Be Vietnam Pro",sans-serif'; c.fillStyle = EDGE; c.textAlign = 'left';
    rr(10, 10, 112, 26, 13, c); c.fillStyle = '#fff'; c.fill(); c.lineWidth = 2; c.strokeStyle = EDGE; c.stroke();
    c.fillStyle = EDGE; c.textBaseline = 'middle'; c.fillText(`🐤 còn ${alive}/${pub.racers.length}`, 20, 23.5); c.restore();
    if (T > 0 && T < 2.2 && b && b.hovering) bigText(c, 'Vỗ cánh đi!', 330, 26, '#ffe14d');
    if (b && !b.alive) bigText(c, 'Rơi rồi! Đang xem...', 300, 26, '#ff8fa3');
    if (!b) bigText(c, '👀 Đang xem ván này', 300, 22);
  } else if (pub.phase === 'over') {
    const w = P(pub.winner);
    bigText(c, w ? (pub.winner === app.cid ? 'BẠN THẮNG!' : `${w.name} thắng!`) : 'Kết thúc!', 200, w && w.name.length > 10 ? 34 : 44, '#ffe14d');
    (pub.results || []).slice(0, 5).forEach((r, k) => {
      const p = P(r.cid);
      bigText(c, `${k === 0 && pub.winner ? '👑' : k + 1 + '.'} ${p?.name ?? '?'} · ${r.score} cột`, 260 + k * 30, 18);
    });
  } else if (pub.phase === 'lobby') {
    bigText(c, 'Phòng chờ', 110, 40);
    bigText(c, 'Chạm để nhảy thử 🐤', 470, 18);
  }
}

// ================= BẢNG ĐIỀU KHIỂN =================
function renderPanel() {
  const pub = app.pub, host = app.isHost;
  const st = $('#bayStatus'), ctl = $('#bayCtl');
  if (!st) return;
  const n = pub.players.filter((p) => p.connected).length;
  if (pub.phase === 'lobby') st.innerHTML = host ? `<b>${n} người trong phòng.</b> Gửi link mời rồi bấm <b>Cất cánh</b> khi đủ người (bay 1 mình để tập cũng được).` : `<b>${n} người trong phòng.</b> Đợi chủ phòng bấm Cất cánh...`;
  else if (pub.phase === 'count') st.innerHTML = '<b>Chuẩn bị!</b> Chạm vào bầu trời hoặc bấm phím cách / ↑ để vỗ cánh.';
  else if (pub.phase === 'play') st.innerHTML = app.bird ? (app.bird.alive ? '<b>Bay đi!</b> Luồn qua khe giữa các cột. Đụng cột hoặc đất là rơi.' : '<b>Bạn đã rơi.</b> Xem ai trụ lại cuối cùng nhé!') : '<b>Bạn vào giữa ván</b> — đang xem, ván sau sẽ được bay.';
  else st.innerHTML = pub.winner ? `🏆 <b>${esc(P(pub.winner)?.name)}</b> trụ lại cuối cùng!` : 'Kết thúc ván tập bay.';
  const modes = [['chill', '🌤️ Thong thả'], ['normal', '🌬️ Vừa'], ['hard', '🌪️ Khó']];
  const canCfg = host && !['count', 'play'].includes(pub.phase);
  const key = `${pub.phase}|${pub.config.mode}|${host}`;
  if (ctl.dataset.key === key) return;
  ctl.dataset.key = key;
  ctl.innerHTML = `
    ${host && !['count', 'play'].includes(pub.phase) ? `<button class="btn primary big" id="goBtn">${pub.phase === 'over' ? '🔁 Bay ván mới' : '🐤 Cất cánh!'}</button>` : ''}
    <div class="bay-row"><span class="muted">Độ khó</span><div class="mini-seg">${modes.map(([v, l]) => `<button type="button" class="${pub.config.mode === v ? 'on' : ''}" data-mode="${v}" ${canCfg ? '' : 'disabled'}>${l}</button>`).join('')}</div></div>
    <div class="bay-row"><button class="btn sm sun" id="copyLink">${icon('copy')}Link mời</button><span class="muted">Tối đa ${pub.max} người · càng bay càng nhanh, khe càng hẹp</span></div>`;
  const go = $('#goBtn');
  if (go) go.onclick = () => act({ t: 'start' });
  $$('[data-mode]', ctl).forEach((b) => (b.onclick = () => { act({ t: 'cfg', cfg: { mode: b.dataset.mode } }); try { localStorage.setItem('bay-mode', b.dataset.mode); } catch {} }));
  $('#copyLink').onclick = () => copyText(inviteUrl(app.code), 'Đã sao chép link mời!');
}
function renderScores() {
  const pub = app.pub;
  const racing = ['count', 'play'].includes(pub.phase);
  const list = [...pub.players].filter((p) => p.connected || pub.racers.includes(p.cid));
  list.sort((a, b) => b.wins - a.wins || b.best - a.best);
  $('#scoreBox').innerHTML = `<div class="sb-head"><b>Bầy chim (${pub.players.filter((p) => p.connected).length}/${pub.max})</b></div>${list.map((p) => {
    const inR = pub.racers.includes(p.cid), dead = pub.dead[p.cid];
    const tag = racing && inR ? (dead ? `<span class="tag no">💥 ${dead.score}</span>` : '<span class="tag act">🐤 bay</span>') : racing ? '<span class="tag">👀</span>' : '';
    return `<div class="sb-row ${p.cid === app.cid ? 'me' : ''} ${p.connected ? '' : 'offline'} ${(p.pid && app.speaking.has(p.pid)) || (p.cid === app.cid && app.speaking.has('self')) ? 'speaking' : ''}">
      <span class="rank">${p.cid === pub.winner && pub.phase === 'over' ? '👑' : ''}</span>${avatarHTML(p, 'sm')}<span class="nm">${esc(p.name)}</span>${tag}
      ${app.isHost && p.cid !== app.cid && !racing ? `<button class="kick-sm" data-kick="${p.cid}" title="Mời ra">×</button>` : ''}
      <b class="pt" title="Số ván thắng · kỷ lục cột">${p.wins}🏆 · ${p.best}</b></div>`;
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
const SYS = { win: '🏆', phase: '🐤', join: '👋', leave: '🚪', info: 'ℹ️', wrong: '💥' };
function msgHTML(m) {
  if (m.k === 'sys') return `<div class="sys ${m.kind === 'win' ? 'win' : m.kind === 'wrong' ? 'death' : ''}"><span>${SYS[m.kind] || '•'}</span><span>${esc(m.text)}</span></div>`;
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
  else { mic.className = `icon-btn ${v.micOn ? 'on' : 'off'}`; mic.innerHTML = icon(v.micOn ? 'mic' : 'micOff'); }
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
$('#phasePill').innerHTML = `${icon('card')}<span class="lbl">Vỗ Cánh</span>`;
renderVoiceBtns();

initHome();
