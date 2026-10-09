// Lớp mạng P2P. Mặc định dùng Trystero (WebRTC, tín hiệu qua Nostr relay công cộng).
// Thêm ?local=1 vào URL để chơi thử nhiều tab trên cùng một máy (BroadcastChannel, không cần mạng).

import { CONFIG } from './config.js';

export async function createNet(roomCode, { local = false, ns = '' } = {}) {
  const id = (ns ? ns + '-' : '') + roomCode.toUpperCase();
  return local ? createLocalNet(id) : createTrysteroNet(id);
}

async function createTrysteroNet(roomCode) {
  const { joinRoom, selfId } = await import('./trystero.js');
  const cfg = { appId: CONFIG.appId };
  if (CONFIG.turn?.length) cfg.turnConfig = CONFIG.turn;
  if (CONFIG.relayUrls?.length) cfg.relayConfig = { urls: CONFIG.relayUrls };
  const room = joinRoom(cfg, roomCode, {
    onJoinError: (d) => console.warn('[net] join error', d),
  });
  const actions = {};
  const handlers = {};
  const net = {
    selfId,
    mode: 'p2p',
    on(type, cb) {
      handlers[type] = cb;
      act(type).onMessage = (data, { peerId }) => cb(data, peerId);
    },
    send(type, data, target = null) {
      return act(type).send(data, target ? { target } : undefined).catch((e) => console.warn('[net] send', e));
    },
    peers: () => Object.keys(room.getPeers()),
    set onPeerJoin(f) { room.onPeerJoin = f; },
    set onPeerLeave(f) { room.onPeerLeave = f; },
    set onPeerStream(f) { room.onPeerStream = f; },
    addStream: (stream, target) => room.addStream(stream, target ? { target } : undefined),
    removeStream: (stream) => room.removeStream(stream),
    leave: () => room.leave(),
  };
  function act(type) {
    return (actions[type] ||= room.makeAction(type));
  }
  return net;
}

function createLocalNet(roomCode) {
  const selfId = Math.random().toString(36).slice(2, 10);
  const bc = new BroadcastChannel('masoi-' + roomCode);
  const handlers = {};
  const seen = new Map(); // peerId -> lastSeen
  let onJoin = () => {}, onLeave = () => {};
  const post = (m) => bc.postMessage({ ...m, from: selfId });

  bc.onmessage = ({ data: m }) => {
    if (m.from === selfId) return;
    if (m.to && !m.to.includes(selfId)) return;
    const isNew = !seen.has(m.from);
    seen.set(m.from, Date.now());
    if (m.k === 'bye') { seen.delete(m.from); onLeave(m.from); return; }
    if (isNew) {
      onJoin(m.from);
      post({ k: 'hi', to: [m.from] });
    }
    if (m.k === 'msg') setTimeout(() => handlers[m.type]?.(m.data, m.from), 0);
  };
  const beat = setInterval(() => {
    post({ k: 'hi' });
    const now = Date.now();
    for (const [id, t] of seen) if (now - t > 6000) { seen.delete(id); onLeave(id); }
  }, 1500);
  window.addEventListener('beforeunload', () => post({ k: 'bye' }));
  setTimeout(() => post({ k: 'hi' }), 50);

  return {
    selfId,
    mode: 'local',
    on(type, cb) { handlers[type] = cb; },
    send(type, data, target = null) {
      post({ k: 'msg', type, data: JSON.parse(JSON.stringify(data)), to: target ? [].concat(target) : null });
      return Promise.resolve();
    },
    peers: () => [...seen.keys()],
    set onPeerJoin(f) { onJoin = f; for (const id of seen.keys()) f(id); },
    set onPeerLeave(f) { onLeave = f; },
    set onPeerStream(f) {},
    addStream() {},
    removeStream() {},
    leave() { post({ k: 'bye' }); clearInterval(beat); bc.close(); },
  };
}
