// Đổi giao diện sáng / tối. Mặc định theo hệ điều hành; chọn tay thì lưu lại.
const root = document.documentElement;
const mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
const effective = () => root.dataset.theme || (mq?.matches ? 'dark' : 'light');

function draw() {
  const dark = effective() === 'dark';
  document.querySelectorAll('[data-theme-toggle]').forEach((b) => {
    b.textContent = dark ? '☀️' : '🌙';
    b.title = dark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối';
    b.setAttribute('aria-label', b.title);
  });
}

export function initTheme() {
  try { const t = localStorage.getItem('theme'); if (t === 'dark' || t === 'light') root.dataset.theme = t; } catch {}
  document.querySelectorAll('[data-theme-toggle]').forEach((b) => {
    b.onclick = () => {
      const next = effective() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch {}
      draw();
    };
  });
  mq?.addEventListener?.('change', draw);
  draw();
}
initTheme();
