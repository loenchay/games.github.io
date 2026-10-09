// Cấu hình kết nối. Phần TURN / relay đọc từ file site-config.js ở thư mục gốc
// (sửa file đó là đủ, không cần build lại).
const SITE = (typeof window !== 'undefined' && window.SITE_CONFIG) || {};
export const CONFIG = {
  // Đổi chuỗi này nếu muốn tách hẳn "server" game của bạn với các bản fork khác.
  appId: 'masoi-online-vn-v1',
  turn: Array.isArray(SITE.turn) ? SITE.turn.filter((x) => x && x.urls) : [],
  relayUrls: Array.isArray(SITE.relayUrls) ? SITE.relayUrls : [],
};
