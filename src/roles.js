// Định nghĩa vai trò + icon SVG tự vẽ cho từng vai.
// Mỗi icon dùng currentColor (màu vai) và var(--ink) (màu nét tối bên trong).

const svg = (inner) =>
  `<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">${inner}</svg>`;

export const ICONS = {
  wolf: svg(`
    <path fill="currentColor" d="M12 6 L25 22 Q32 19 39 22 L52 6 L54 30 Q54 42 44 51 L36 58 Q32 60 28 58 L20 51 Q10 42 10 30 Z"/>
    <path fill="var(--ink)" opacity=".35" d="M15 13 L22 22 L17 26 Z M49 13 L42 22 L47 26 Z"/>
    <path fill="var(--ink)" d="M18 31 L28 34 L21 38 Z M46 31 L36 34 L43 38 Z"/>
    <path fill="var(--ink)" d="M27 47 L37 47 L32 52 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" opacity=".5" d="M32 40 V46"/>`),
  villager: svg(`
    <path fill="currentColor" d="M8 31 L32 10 L56 31 L51 31 L51 56 L13 56 L13 31 Z"/>
    <rect x="42" y="13" width="6" height="11" rx="1" fill="currentColor"/>
    <rect x="27" y="38" width="10" height="18" rx="5" fill="var(--ink)"/>
    <rect x="17" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>
    <rect x="40" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>`),
  seer: svg(`
    <path fill="currentColor" d="M4 34 Q32 6 60 34 Q32 62 4 34 Z"/>
    <circle cx="32" cy="34" r="11" fill="var(--ink)"/>
    <circle cx="32" cy="34" r="5" fill="currentColor"/>
    <circle cx="35.5" cy="30.5" r="2" fill="#fff" opacity=".9"/>
    <path fill="currentColor" d="M32 2 L34 9 L41 11 L34 13 L32 20 L30 13 L23 11 L30 9 Z" transform="translate(16 -1) scale(.6)"/>`),
  guard: svg(`
    <path fill="currentColor" d="M32 5 L54 13 V30 Q54 47 32 59 Q10 47 10 30 V13 Z"/>
    <path fill="var(--ink)" opacity=".28" d="M32 5 L54 13 V30 Q54 47 32 59 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M21 32 L29 40 L44 24"/>`),
  witch: svg(`
    <rect x="25" y="5" width="14" height="6" rx="2" fill="currentColor"/>
    <path fill="currentColor" d="M27 11 H37 V24 L50 45 Q55 58 42 58 H22 Q9 58 14 45 L27 24 Z"/>
    <path fill="var(--ink)" opacity=".45" d="M17.5 40 Q32 35 46.5 40 L50 45 Q55 58 42 58 H22 Q9 58 14 45 Z"/>
    <circle cx="27" cy="48" r="3" fill="currentColor"/>
    <circle cx="37" cy="51" r="2" fill="currentColor"/>
    <circle cx="34" cy="44" r="1.6" fill="currentColor"/>`),
  hunter: svg(`
    <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" stroke-width="5"/>
    <circle cx="32" cy="32" r="8" fill="currentColor"/>
    <path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 3 V15 M32 49 V61 M3 32 H15 M49 32 H61"/>
    <circle cx="32" cy="32" r="3" fill="var(--ink)"/>`),
};

export const UI_ICONS = {
  moon: svg(`<path fill="currentColor" d="M40 6 A26 26 0 1 0 58 44 A21 21 0 0 1 40 6 Z"/>`),
  sun: svg(`<circle cx="32" cy="32" r="12" fill="currentColor"/><g stroke="currentColor" stroke-width="5" stroke-linecap="round"><path d="M32 4V12M32 52V60M4 32H12M52 32H60M12 12L18 18M46 46L52 52M12 52L18 46M46 18L52 12"/></g>`),
  skull: svg(`<path fill="currentColor" d="M32 6 C17 6 9 16 9 29 C9 37 13 42 18 45 V53 Q18 57 22 57 H42 Q46 57 46 53 V45 C51 42 55 37 55 29 C55 16 47 6 32 6 Z"/><circle cx="23" cy="31" r="6" fill="var(--ink)"/><circle cx="41" cy="31" r="6" fill="var(--ink)"/><path fill="var(--ink)" d="M32 38 L36 45 H28 Z"/><path stroke="var(--ink)" stroke-width="2.5" d="M26 50V57M32 50V57M38 50V57"/>`),
  vote: svg(`<path fill="currentColor" d="M10 34 H54 V56 Q54 58 52 58 H12 Q10 58 10 56 Z"/><path fill="currentColor" opacity=".55" d="M20 8 H44 V34 H20 Z"/><path fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M25 21 L30 26 L39 16"/><rect x="18" y="32" width="28" height="4" rx="2" fill="var(--ink)"/>`),
  noose: svg(`<path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 2 V26"/><ellipse cx="32" cy="42" rx="12" ry="15" fill="none" stroke="currentColor" stroke-width="5"/><rect x="27" y="22" width="10" height="9" rx="3" fill="currentColor"/>`),
  mic: svg(`<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42"/>`),
  micOff: svg(`<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor" opacity=".45"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42" opacity=".45"/><path stroke="currentColor" stroke-width="6" stroke-linecap="round" d="M8 8 L56 56"/>`),
  speaker: svg(`<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 22 Q49 32 42 42 M48 14 Q61 32 48 50"/>`),
  speakerOff: svg(`<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 24 L58 40 M58 24 L42 40"/>`),
  crown: svg(`<path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/>`),
  copy: svg(`<rect x="20" y="20" width="34" height="38" rx="5" fill="none" stroke="currentColor" stroke-width="5"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M12 44 V12 Q12 8 16 8 H40"/>`),
  chat: svg(`<path fill="currentColor" d="M8 12 Q8 6 14 6 H50 Q56 6 56 12 V38 Q56 44 50 44 H26 L14 56 V44 Q8 44 8 38 Z"/>`),
  users: svg(`<circle cx="24" cy="20" r="10" fill="currentColor"/><path fill="currentColor" d="M6 54 Q6 34 24 34 Q42 34 42 54 Z"/><circle cx="45" cy="22" r="8" fill="currentColor" opacity=".6"/><path fill="currentColor" opacity=".6" d="M44 36 Q58 36 58 54 H46 Q46 43 40 38 Z"/>`),
  card: svg(`<rect x="12" y="4" width="40" height="56" rx="6" fill="currentColor"/><circle cx="32" cy="30" r="9" fill="var(--ink)"/>`),
  door: svg(`<path fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" d="M28 8 H52 V56 H28"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M8 32 H38 M30 22 L40 32 L30 42"/>`),
  heal: svg(`<path fill="currentColor" d="M32 56 C10 42 4 30 8 20 C12 10 26 8 32 18 C38 8 52 10 56 20 C60 30 54 42 32 56 Z"/>`),
  poison: svg(`<path fill="currentColor" d="M32 4 C32 4 12 28 12 40 A20 20 0 0 0 52 40 C52 28 32 4 32 4 Z"/><path stroke="var(--ink)" stroke-width="4" stroke-linecap="round" d="M24 34 L40 50 M40 34 L24 50"/>`),
};

export const ROLES = {
  wolf: {
    id: 'wolf', name: 'Ma Sói', team: 'wolf', color: '#ff5d6c',
    short: 'Mỗi đêm cùng bầy chọn một người để cắn.',
    desc: 'Mỗi đêm, cả bầy sói mở mắt, nhìn thấy nhau và cùng chọn một người để cắn. Ban ngày giả làm dân lành. Thắng khi số sói bằng hoặc nhiều hơn số người còn lại.',
  },
  villager: {
    id: 'villager', name: 'Dân Làng', team: 'village', color: '#f2b65a',
    short: 'Không có năng lực, chỉ có lý lẽ và lá phiếu.',
    desc: 'Không có năng lực đặc biệt. Ban ngày thảo luận, suy luận và bỏ phiếu treo cổ kẻ đáng nghi. Thắng khi tất cả sói bị tiêu diệt.',
  },
  seer: {
    id: 'seer', name: 'Tiên Tri', team: 'village', color: '#a78bff',
    short: 'Mỗi đêm soi một người: là sói hay không.',
    desc: 'Mỗi đêm chọn một người để soi, quản trò sẽ cho biết người đó có phải là Sói hay không. Hãy khéo léo dẫn dắt dân làng mà không để lộ thân phận.',
  },
  guard: {
    id: 'guard', name: 'Bảo Vệ', team: 'village', color: '#54b4ff',
    short: 'Mỗi đêm bảo vệ một người khỏi sói.',
    desc: 'Mỗi đêm chọn một người (có thể là chính mình) để bảo vệ khỏi bị sói cắn. Không được bảo vệ cùng một người hai đêm liên tiếp.',
  },
  witch: {
    id: 'witch', name: 'Phù Thủy', team: 'village', color: '#3fd69a',
    short: 'Một bình cứu, một bình độc.',
    desc: 'Có một bình thuốc cứu và một bình thuốc độc, mỗi bình dùng một lần trong cả ván. Khi còn bình cứu, mỗi đêm được biết ai bị sói cắn để quyết định cứu hay không.',
  },
  hunter: {
    id: 'hunter', name: 'Thợ Săn', team: 'village', color: '#ff9447',
    short: 'Khi chết được bắn chết một người.',
    desc: 'Khi chết (bị sói cắn hoặc bị treo cổ), được kéo theo một người bất kỳ. Nếu chết vì thuốc độc của Phù thủy thì không được bắn.',
  },
};

export const ROLE_ORDER = ['wolf', 'villager', 'seer', 'guard', 'witch', 'hunter'];

export function roleBadge(roleId, size = 'md') {
  const r = ROLES[roleId];
  if (!r) return '';
  return `<span class="role-badge ${size}" style="--c:${r.color}" title="${r.name}">${ICONS[roleId]}</span>`;
}

export function icon(name, cls = '') {
  return `<span class="ic ${cls}">${UI_ICONS[name] || ICONS[name] || ''}</span>`;
}

export const AVATARS = ['🦊', '🐼', '🐯', '🐸', '🐵', '🐧', '🦁', '🐨', '🐰', '🐙', '🦄', '🐲', '🐻', '🐱', '🐶', '🦉', '🐳', '🦖'];
export const AV_COLORS = ['#ff6b6b', '#ffa94d', '#ffd43b', '#38d9a9', '#4dabf7', '#9775fa', '#f783ac', '#69db7c'];
