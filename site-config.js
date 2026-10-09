// ====== CẤU HÌNH KẾT NỐI — sửa file này rồi push là xong, KHÔNG cần build lại ======
window.SITE_CONFIG = {
  // TURN server: giúp người chơi ở mạng khó (4G, wifi công ty, NAT chặt) vẫn vào phòng và nghe voice được.
  // Lấy thông tin ở trang quản lý TURN (VD: Metered.ca > TURN Server > Credentials), dán vào đây.
  // Nên có cả cổng 80/443 và bản TCP/TLS để qua được tường lửa công ty.
  turn: [
    { urls: 'stun:stun.relay.metered.ca:80' },
    { urls: 'turn:global.relay.metered.ca:80', username: '97081191f34681a21c2cd592', credential: 'roe2Hcwgq9OdQmaK' },
    { urls: 'turn:global.relay.metered.ca:80?transport=tcp', username: '97081191f34681a21c2cd592', credential: 'roe2Hcwgq9OdQmaK' },
    { urls: 'turn:global.relay.metered.ca:443', username: '97081191f34681a21c2cd592', credential: 'roe2Hcwgq9OdQmaK' },
    { urls: 'turns:global.relay.metered.ca:443?transport=tcp', username: '97081191f34681a21c2cd592', credential: 'roe2Hcwgq9OdQmaK' },
  ],
  // Nostr relay để các máy tìm thấy nhau (đã chọn các relay đang chạy tốt; mặc định của thư viện có vài cái đã chết).
  // Mọi người phải dùng chung danh sách này, nên đổi xong nhớ deploy lại.
  relayUrls: [
    'wss://nostr-01.yakihonne.com',
    'wss://nos.lol',
    'wss://nostr.sathoarder.com',
    'wss://basspistol.org',
    'wss://nostr-relay.corb.net',
    'wss://purplerelay.com',
    'wss://nostr.data.haus',
    'wss://relay02.lnfi.network',
    'wss://relay.mostro.network',
  ],
};
