// Game Cờ Caro: 2 người chơi (X, O), tối đa 8 người xem, chat + voice + cổ vũ.
import '../theme.js';
import { createNet } from '../net.js';
import { Voice } from '../voice.js';
import { ICONS, AVATARS, AV_COLORS, icon } from '../roles.js';
import { $, $$, esc, params, LOCAL, ss, roomCode, loadProfile, saveProfile, clientId, avatarHTML, toast, confetti, SFX, unlockAudio, inviteUrl, copyText, beep } from '../common.js';
import { CaroEngine } from './engine.js';
import { gameIdentity, startPresence, presenceUpdate } from '../site.js';

const NS = 'caro';
const prof = loadProfile();
const app = {
  cid: clientId(), code: null, isHost: false, net: null, engine: null, hostPid: null,
  pub: null, joined: false, endsAt: 0, chat: [], seenLog: 0, unread: 0,
  voice: null, speaking: new Set(), lastMoves: 0, lastGame: 0, hover: -1,
};
if (LOCAL) window.__app = app;
const cleanAv = (av) => ({ e: AVATARS.includes(av?.e) ? av.e : AVATARS[0], c: Number.isInteger(av?.c) && av.c >= 0 && av.c < AV_COLORS.length ? av.c : 0 });
const CFG_KEY = 'caro-room-opts';
const loadOpts = () => { try { return JSON.parse(localStorage.getItem(CFG_KEY) || 'null') || {}; } catch { return {}; } };
const saveOpts = (o) => { try { localStorage.setItem(CFG_KEY, JSON.stringify(o)); } catch {} };

// ================= TRANG CHỦ =================
function initHome() {
  $$('[data-logo]').forEach((el) => (el.innerHTML = ICONS.wolf));
  gameIdentity(prof);
  startPresence(prof, 'Đang ở Cờ Caro');
  drawDemo();
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
  const sess = JSON.parse(ss.get('caro-session') || 'null');
  if (sess && (!pre || sess.code === pre) && prof.name) enterRoom(sess.code, sess.host);
}
// bàn cờ minh hoạ tự chơi trên trang chủ
function drawDemo() {
  const el = $('#caroDemo');
  if (!el) return;
  const n = 9, seq = [40, 41, 31, 49, 22, 13, 50, 32, 30, 58, 39, 21, 48, 57, 66];
  let k = 0;
  const draw = () => {
    const b = Array(n * n).fill('');
    seq.slice(0, k).forEach((i, j) => (b[i] = j % 2 ? 'O' : 'X'));
    const win = k >= seq.length ? [22, 31, 40, 49, 58].filter((i) => b[i] === 'X') : [];
    el.innerHTML = `<div class="cboard demo" style="--n:${n}">${b.map((v, i) => `<i class="${v} ${win.includes(i) ? 'win' : ''} ${i === seq[k - 1] ? 'last' : ''}">${v === 'X' ? XSVG : v === 'O' ? OSVG : ''}</i>`).join('')}</div>`;
  };
  draw();
  setInterval(() => { k = k >= seq.length + 3 ? 0 : k + 1; draw(); }, 650);
}
const XSVG = '<svg viewBox="0 0 10 10"><path d="M2.2 2.2 7.8 7.8M7.8 2.2 2.2 7.8"/></svg>';
const OSVG = '<svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="3.1"/></svg>';

// ================= VÀO PHÒNG =================
async function enterRoom(code, host) {
  presenceUpdate('⭕ Đang chơi Cờ Caro');
  app.code = code;
  app.isHost = host;
  ss.set('caro-session', JSON.stringify({ code, host }));
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
    app.engine = new CaroEngine(app.cid, { cleanAv });
    app.engine.setConfig(loadOpts());
    app.engine.onChange = hostSync;
    app.engine.onEvent = (ev) => { app.net.send('fx', ev); playFx(ev); };
    app.engine.addPlayer(app.cid, hello(), net.selfId);
    setInterval(() => app.engine.tick(), 400);
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
function leaveRoom(ask = true) {
  const s = app.pub && seatOf(app.cid);
  if (ask && s && app.pub.phase === 'play' && !confirm('Bạn đang chơi — rời phòng sẽ bị xử thua sau 60 giây. Rời?')) return;
  ss.del('caro-session');
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
const seatOf = (cid) => (app.pub?.seats.X === cid ? 'X' : app.pub?.seats.O === cid ? 'O' : null);
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
  if (ev.type === 'move') beep([[ev.seat === 'X' ? 660 : 520, 0.05]], 'triangle', 0.06);
  else if (ev.type === 'start') SFX.start();
  else if (ev.type === 'over') {
    const mine = seatOf(app.cid);
    if (ev.winner === 'draw') SFX.wrong();
    else if (mine && ev.winner === mine) { SFX.correct(); confetti(); }
    else if (mine) SFX.wrong();
    else SFX.correct();
  }
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
  const label = pub.phase === 'play' ? `Ván ${pub.gameId} · lượt ${g.turn}` : pub.phase === 'over' ? 'Ván đã xong' : 'Chờ 2 người sẵn sàng';
  $('#phasePill').innerHTML = `${icon('card')}<span class="lbl">${label}</span><span class="t" id="timer"></span>`;
  tickTimer();
  renderVoiceBtns();
}
function tickTimer() {
  const t = $('#timer');
  if (!t || !app.pub) return;
  const pub = app.pub;
  const watchers = pub.players.filter((p) => p.connected && !seatOf(p.cid)).length;
  if (!app.endsAt) { t.textContent = `👀 ${watchers} xem`; $('#timebar').style.width = '0'; return; }
  const ms = Math.max(0, app.endsAt - Date.now());
  const s = Math.ceil(ms / 1000);
  t.textContent = `${s}s`;
  t.classList.toggle('urgent', s <= 5);
  $('#timebar').style.width = pub.durMs ? `${Math.min(100, (ms / pub.durMs) * 100)}%` : '0';
  const ct = $(`#clk${pub.game?.turn}`);
  if (ct) ct.textContent = s + 's';
}

function seatCard(k) {
  const pub = app.pub, g = pub.game, cid = pub.phase === 'play' || pub.phase === 'over' ? g?.by[k] ?? pub.seats[k] : pub.seats[k];
  const p = P(cid), mine = cid === app.cid;
  const turn = pub.phase === 'play' && g.turn === k;
  const win = pub.phase === 'over' && g.winner === k;
  let foot = '';
  if (!cid) foot = pub.phase !== 'play' ? `<button class="btn sm primary" data-sit="${k}">Ngồi ghế ${k}</button>` : '<span class="muted">Trống</span>';
  else if (pub.phase !== 'play') foot = pub.ready[k] ? '<span class="tag ok">✔ Sẵn sàng</span>' : '<span class="muted">Chưa sẵn sàng</span>';
  else if (turn) foot = `<span class="tag turn">Đang đi${pub.config.turnTime ? ` · <b id="clk${k}"></b>` : ''}</span>`;
  return `<div class="seat seat-${k} ${turn ? 'turn' : ''} ${win ? 'win' : ''} ${mine ? 'me' : ''} ${p && !p.connected ? 'offline' : ''}">
    <span class="sym ${k}">${k === 'X' ? XSVG : OSVG}</span>
    ${p ? avatarHTML(p) : '<span class="avatar empty">?</span>'}
    <div class="seat-info"><b>${p ? esc(p.name) : 'Ghế trống'}${mine ? ' <span class="muted">(bạn)</span>' : ''}</b>
      ${p ? `<span class="muted rec">${p.wins}T · ${p.losses}B · ${p.draws}H</span>` : ''}
      <div class="seat-foot">${win ? '<span class="tag ok">🏆 Thắng</span>' : foot}</div></div>
  </div>`;
}

function renderStage() {
  const pub = app.pub, g = pub.game, c = pub.config;
  const mine = seatOf(app.cid);
  const st = $('#stage');
  if (!st.querySelector('.caro-wrap')) {
    st.innerHTML = `<div class="caro-wrap">
      <div class="panel seats" id="seats"></div>
      <div class="panel board-panel" id="boardPanel"><div class="board-scroll"><div class="cboard" id="board"></div></div><div class="board-ov" id="boardOv"></div><div class="reacts" id="reacts"></div></div>
      <div class="panel caro-ctl" id="caroCtl"></div>
      <div class="panel react-bar" id="reactBar">${['👏', '🔥', '😱', '😂', '🤔', '💪', '😭', '🎉'].map((e) => `<button type="button" data-react="${e}">${e}</button>`).join('')}</div>
      <div class="panel cfg ro-body" id="caroCfg"></div>
    </div>`;
    $$('[data-react]').forEach((b) => (b.onclick = () => { const d = { e: b.dataset.react, name: prof.name, id: Math.random() }; app.net.send('react', d); showReact(d); }));
    const board = $('#board');
    board.onclick = (e) => { const cell = e.target.closest('[data-i]'); if (cell) tryMove(Number(cell.dataset.i)); };
  }
  $('#seats').innerHTML = `${seatCard('X')}<div class="vs">VS</div>${seatCard('O')}`;
  $$('[data-sit]').forEach((b) => (b.onclick = () => act({ t: 'sit', seat: b.dataset.sit })));
  // bàn cờ
  const n = g?.size || c.size, board = g?.board || '.'.repeat(n * n);
  const last = g?.moves?.[g.moves.length - 1];
  const line = new Set(g?.line || []);
  const canMove = pub.phase === 'play' && mine && g.turn === mine && !pub.undo;
  const b = $('#board');
  b.style.setProperty('--n', n);
  b.classList.toggle('can', !!canMove);
  b.classList.toggle('turnX', canMove && mine === 'X');
  b.classList.toggle('turnO', canMove && mine === 'O');
  // chỉ vẽ lại toàn bộ khi đổi kích thước / ván, còn lại cập nhật từng ô
  if (b.dataset.key !== `${pub.gameId}-${n}`) {
    b.dataset.key = `${pub.gameId}-${n}`;
    b.innerHTML = Array.from({ length: n * n }, (_, i) => `<i data-i="${i}"></i>`).join('');
  }
  const cells = b.children;
  for (let i = 0; i < n * n; i++) {
    const v = board[i] === '.' ? '' : board[i];
    const el = cells[i];
    const cls = `${v} ${i === last ? 'last' : ''} ${line.has(i) ? 'win' : ''}`.trim();
    if (el.dataset.v !== v) { el.dataset.v = v; el.innerHTML = v === 'X' ? XSVG : v === 'O' ? OSVG : ''; }
    if (el.className !== cls) el.className = cls;
  }
  // lớp phủ kết thúc
  const ov = $('#boardOv');
  if (pub.phase === 'over' && g) {
    const w = g.winner === 'draw' ? null : P(g.by[g.winner]);
    const why = { five: 'Đủ 5 quân!', resign: 'Đối thủ đầu hàng', time: 'Đối thủ hết giờ', left: 'Đối thủ rời đi', full: 'Hết chỗ đi', agree: 'Hai bên đồng ý' }[g.reason] || '';
    ov.innerHTML = `<div class="over-card">${w ? `${avatarHTML(w)}<b>${esc(w.name)} thắng!</b>` : '<b>🤝 Hoà!</b>'}<span class="muted">${why}</span></div>`;
    ov.hidden = false;
    if (app.lastGame !== pub.gameId) { app.lastGame = pub.gameId; setTimeout(() => { if (app.pub.phase === 'over') ov.classList.add('fade'); }, 3500); ov.classList.remove('fade'); }
  } else { ov.hidden = true; ov.innerHTML = ''; }
  // điều khiển
  const ctl = $('#caroCtl');
  let h = '';
  if (pub.undo && mine && mine !== pub.undo.from) h = `<div class="ask">🙏 <b>${esc(P(g.by[pub.undo.from])?.name)}</b> xin đi lại một nước.</div><button class="btn sm primary" data-a="undoYes">Cho đi lại</button><button class="btn sm" data-a="undoNo">Không</button>`;
  else if (pub.draw && mine && mine !== pub.draw.from) h = `<div class="ask">🤝 <b>${esc(P(g.by[pub.draw.from])?.name)}</b> xin hoà.</div><button class="btn sm primary" data-a="drawYes">Đồng ý hoà</button><button class="btn sm" data-a="drawNo">Đánh tiếp</button>`;
  else if (pub.phase === 'play' && mine) h = `<span class="msg">${g.turn === mine ? '👉 <b>Tới lượt bạn!</b> Bấm vào ô để đánh.' : `⏳ Chờ ${esc(P(g.by[g.turn])?.name)} đi...`}${pub.undo ? ' (đang chờ trả lời xin đi lại)' : ''}</span>
    <button class="btn sm" data-a="undo" title="Tối đa 3 lần mỗi ván">↩️ Xin đi lại</button><button class="btn sm" data-a="draw">🤝 Xin hoà</button><button class="btn sm danger" data-a="resign">🏳️ Đầu hàng</button>`;
  else if (pub.phase === 'play') h = `<span class="msg">👀 Bạn đang xem. ${esc(P(g.by.X)?.name)} (X) đấu ${esc(P(g.by.O)?.name)} (O). Cổ vũ bằng các nút bên dưới!</span>`;
  else if (mine) {
    const both = pub.seats.X && pub.seats.O;
    h = `<span class="msg">${both ? (pub.ready[mine] ? 'Đợi đối thủ sẵn sàng...' : 'Bấm <b>Sẵn sàng</b> để bắt đầu ván mới.') : 'Đợi người vào ghế còn lại...'}</span>
      <button class="btn ${pub.ready[mine] ? '' : 'primary'}" data-a="ready">${pub.ready[mine] ? 'Huỷ sẵn sàng' : (pub.phase === 'over' ? '🔁 Đấu lại' : '✅ Sẵn sàng')}</button>
      <button class="btn sm" data-a="swap">⇄ Đổi X/O</button><button class="btn sm ghost" data-a="stand">Rời ghế, xuống xem</button>`;
  } else h = `<span class="msg">👀 Bạn đang xem.${!pub.seats.X || !pub.seats.O ? ' Còn ghế trống — bấm <b>Ngồi ghế</b> ở trên để vào chơi.' : ' Khi ai đó rời ghế bạn có thể vào thay.'}</span>`;
  ctl.innerHTML = `<div class="ctl-row">${h}</div><div class="ctl-row small"><button class="btn sm sun" id="copyLink">${icon('copy')}Link mời</button><span class="muted">${pub.players.filter((p) => p.connected).length}/${pub.max} người trong phòng</span></div>`;
  $('#copyLink').onclick = () => copyText(inviteUrl(app.code), 'Đã sao chép link mời!');
  const A = {
    undoYes: () => act({ t: 'undoAns', ok: true }), undoNo: () => act({ t: 'undoAns', ok: false }),
    drawYes: () => act({ t: 'draw' }), drawNo: () => act({ t: 'drawNo' }), undo: () => act({ t: 'undo' }), draw: () => act({ t: 'draw' }),
    resign: () => { if (confirm('Đầu hàng ván này?')) act({ t: 'resign' }); },
    ready: () => act({ t: 'ready', on: !pub.ready[mine] }), swap: () => act({ t: 'swap' }), stand: () => act({ t: 'stand' }),
  };
  $$('[data-a]', ctl).forEach((b) => (b.onclick = A[b.dataset.a]));
  // cài đặt (chủ phòng, khi chưa chơi)
  const cfgEl = $('#caroCfg');
  const ed = app.isHost && pub.phase !== 'play';
  const seg = (key, opts) => `<div class="mini-seg">${opts.map(([v, l]) => `<button type="button" class="${String(c[key]) === String(v) ? 'on' : ''}" data-opt="${key}" data-val="${v}" ${ed ? '' : 'disabled'}>${l}</button>`).join('')}</div>`;
  const ck = `${JSON.stringify(c)}|${ed}`;
  if (cfgEl.dataset.key !== ck) {
    cfgEl.dataset.key = ck;
    cfgEl.innerHTML = `<div class="ro-row"><b>⚙️ Luật chơi</b><span class="muted">${ed ? '' : app.isHost ? '(đổi được khi chưa vào ván)' : '(chủ phòng chỉnh)'}</span></div>
      <div class="ro-grid">
        <label>Bàn cờ${seg('size', [[15, '15 × 15'], [19, '19 × 19']])}</label>
        <label>Thời gian mỗi nước${seg('turnTime', [[0, 'Không giới hạn'], [15, '15s'], [30, '30s'], [60, '60s']])}</label>
        <label>Luật chặn 2 đầu${seg('block2', [['false', 'Tắt'], ['true', 'Bật']])}</label>
        <label>Ván sau ai đi trước${seg('first', [['loser', 'Người thua'], ['alternate', 'Luân phiên'], ['fixed', 'Giữ nguyên']])}</label>
      </div>
      <p class="ro-note">Chặn 2 đầu: hàng 5 quân bị quân đối phương chặn cả hai đầu thì không tính thắng. X luôn đi trước.</p>`;
    $$('[data-opt]', cfgEl).forEach((bt) => (bt.onclick = () => {
      let v = bt.dataset.val;
      v = v === 'true' ? true : v === 'false' ? false : /^\d+$/.test(v) ? Number(v) : v;
      const patch = { [bt.dataset.opt]: v };
      act({ t: 'cfg', cfg: patch });
      saveOpts({ ...loadOpts(), ...patch });
    }));
  }
  if (g && g.moves.length !== app.lastMoves) {
    app.lastMoves = g.moves.length;
    const lc = cells[last];
    if (lc && innerWidth < 760) lc.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
}
function tryMove(i) {
  const pub = app.pub, mine = seatOf(app.cid);
  if (pub.phase !== 'play' || !mine) return;
  if (pub.game.turn !== mine) return toast('Chưa tới lượt bạn.', true);
  if (pub.game.board[i] !== '.') return;
  act({ t: 'move', i });
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
      <span class="rank">${s ? `<span class="sym mini ${s}">${s === 'X' ? XSVG : OSVG}</span>` : '👀'}</span>${avatarHTML(p, 'sm')}<span class="nm">${esc(p.name)}${p.cid === pub.hostCid ? ' 👑' : ''}</span>
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
const SYS = { win: '🏆', phase: '⭕', join: '👋', leave: '🚪', info: 'ℹ️' };
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
