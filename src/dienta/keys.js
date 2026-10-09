// Phím tắt + tổ hợp (combo) cho người diễn. Lưu trong trình duyệt của từng người.
import { CONTROLS, PROP_LIST } from './puppet.js';

const KEYS_STORE = 'dienta-keys-v1';
const COMBO_STORE = 'dienta-combos-v1';

const D = (n) => 'Digit' + n;
const K = (c) => 'Key' + c;
const S = (k) => 'Shift+' + k;

// Phím mặc định: actionId -> chuỗi phím
export const DEFAULT_KEYS = {
  // Toàn thân: 1-8
  'body:stand': D(1), 'body:sit': D(2), 'body:squat': D(3), 'body:kneel': D(4), 'body:lie': D(5), 'body:leanL': D(6), 'body:leanR': D(7), 'body:handstand': D(8),
  'body:crawl': D(9), 'body:bow': 'Minus', 'body:crossleg': 'Equal',
  // Đầu: mũi tên, 0 = thẳng
  'head:center': D(0), 'head:tiltL': 'ArrowLeft', 'head:tiltR': 'ArrowRight', 'head:up': 'ArrowUp', 'head:down': 'ArrowDown',
  // Mặt: Shift + 1..9
  'face:neutral': S(D(1)), 'face:happy': S(D(2)), 'face:sad': S(D(3)), 'face:angry': S(D(4)), 'face:surprised': S(D(5)),
  'face:scared': S(D(6)), 'face:sleepy': S(D(7)), 'face:cheeky': S(D(8)), 'face:love': S(D(9)),
  // Tay trái: phím bên trái bàn phím
  'armL:up': K('Q'), 'armL:diag': K('W'), 'armL:side': K('A'), 'armL:hip': K('S'), 'armL:down': K('Z'), 'armL:wave': K('X'),
  'armL:flex': S(K('Q')), 'armL:head': S(K('W')), 'armL:mouth': S(K('A')), 'armL:cross': S(K('S')), 'armL:point': S(K('Z')),
  // Tay phải: phím bên phải bàn phím
  'armR:up': K('P'), 'armR:diag': K('O'), 'armR:side': K('L'), 'armR:hip': K('K'), 'armR:down': K('M'), 'armR:wave': K('N'),
  'armR:flex': S(K('P')), 'armR:head': S(K('O')), 'armR:mouth': S(K('L')), 'armR:cross': S(K('K')), 'armR:point': S(K('M')),
  // Chân
  'legL:kick': K('R'), 'legL:knee': K('F'), 'legL:spread': K('G'), 'legL:step': K('T'), 'legL:down': K('V'),
  'legR:kick': K('U'), 'legR:knee': K('J'), 'legR:spread': K('H'), 'legR:step': K('Y'), 'legR:down': K('B'),
  // Chuyển động
  'loop:walk': K('E'), 'loop:run': K('D'), 'loop:dance': K('C'), 'loop:butt': K('I'),
  'loop:flap': S(K('E')), 'loop:swim': S(K('D')), 'loop:shiver': S(K('C')), 'loop:clap': S(K('I')),
  'loop:punch': S(K('R')), 'loop:row': S(K('F')), 'loop:nod': S(K('G')), 'loop:shake': S(K('H')),
  // Hiệu ứng
  'fx:jump': 'BracketLeft', 'fx:spin': 'BracketRight', 'fx:fall': 'Semicolon', 'fx:bounce': 'Quote',
  // Đạo cụ: , . = đổi đạo cụ tay trái / phải; Shift = bỏ đạo cụ
  'cycle:propL': 'Comma', 'cycle:propR': 'Period', 'clear:propL': S('Comma'), 'clear:propR': S('Period'),
  // Hoá trang: ` = đổi tai/sừng, \ = đổi đuôi; Shift = bỏ
  'cycle:ears': 'Backquote', 'cycle:tail': 'Backslash', 'clear:ears': S('Backquote'), 'clear:tail': S('Backslash'),
  // Xoay người: Shift + mũi tên (trái/phải/lưng/trước), Alt + ← → = xoay chéo
  'turn:front': S('ArrowUp'), 'turn:back': S('ArrowDown'), 'turn:left': S('ArrowLeft'), 'turn:right': S('ArrowRight'),
  'turn:l45': 'Alt+ArrowLeft', 'turn:r45': 'Alt+ArrowRight',
  // Khác
  reset: 'Backspace', help: S('Slash'),
};

const P = (o) => ({ body: 'stand', head: 'center', face: 'neutral', armL: 'down', armR: 'down', legL: 'down', legR: 'down', propL: null, propR: null, ears: null, tail: null, turn: 'front', loop: null, ...o });
export const DEFAULT_COMBOS = [
  { id: 'c-hello', name: '👋 Chào hỏi', pose: P({ armR: 'wave', face: 'happy', head: 'tiltR' }), key: 'Alt+Digit1' },
  { id: 'c-sleep', name: '😴 Đi ngủ', pose: P({ body: 'lie', face: 'sleepy' }), key: 'Alt+Digit2' },
  { id: 'c-eat', name: '🍜 Ăn mì', pose: P({ body: 'sit', armR: 'mouth', propR: 'chopsticks', armL: 'cross', propL: 'bowl', face: 'happy', loop: 'nod' }), key: 'Alt+Digit3' },
  { id: 'c-phone', name: '📱 Gọi điện', pose: P({ armR: 'head', propR: 'phone', armL: 'hip', face: 'surprised', head: 'tiltR' }), key: 'Alt+Digit4' },
  { id: 'c-sing', name: '🎤 Hát', pose: P({ armR: 'mouth', propR: 'mic', armL: 'diag', face: 'happy', loop: 'dance' }), key: 'Alt+Digit5' },
  { id: 'c-hero', name: '🦸 Siêu nhân', pose: P({ armR: 'up', armL: 'hip', legL: 'knee', face: 'angry', body: 'leanR' }), key: 'Alt+Digit6' },
  { id: 'c-chicken', name: '🐔 Vỗ cánh', pose: P({ body: 'squat', armL: 'hip', armR: 'hip', loop: 'flap', face: 'surprised' }), key: 'Alt+Digit7' },
  { id: 'c-scared', name: '😱 Hoảng sợ', pose: P({ armL: 'head', armR: 'head', loop: 'shiver', face: 'scared' }), key: 'Alt+Digit8' },
  { id: 'c-dog', name: '🐶 Cún con', pose: P({ body: 'crawl', ears: 'dog', tail: 'dog', face: 'cheeky', propR: 'bone' }), key: 'Alt+Digit9' },
];

const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
const CODE_LABEL = {
  ArrowLeft: '←', ArrowRight: '→', ArrowUp: '↑', ArrowDown: '↓', BracketLeft: '[', BracketRight: ']', Semicolon: ';', Quote: "'",
  Comma: ',', Period: '.', Slash: '/', Backslash: '\\', Minus: '-', Equal: '=', Backquote: '`', Backspace: '⌫', Enter: '↵', Tab: 'Tab', Space: 'Space',
};
export function keyLabel(k) {
  if (!k) return '';
  return k.split('+').map((part) => {
    if (part === 'Shift') return '⇧';
    if (part === 'Alt') return isMac ? '⌥' : 'Alt';
    if (part.startsWith('Key')) return part.slice(3);
    if (part.startsWith('Digit')) return part.slice(5);
    if (part.startsWith('Numpad')) return 'Num' + part.slice(6);
    if (/^F\d+$/.test(part)) return part;
    return CODE_LABEL[part] || part;
  }).join(isMac ? '' : '+');
}
export function eventKey(e) {
  if (e.ctrlKey || e.metaKey) return null;
  if (['ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'MetaLeft', 'MetaRight', 'CapsLock'].includes(e.code)) return null;
  return (e.altKey ? 'Alt+' : '') + (e.shiftKey ? 'Shift+' : '') + e.code;
}

function load(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } }
function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }

export class Keymap {
  constructor() {
    this.overrides = load(KEYS_STORE, {});
    this.combos = load(COMBO_STORE, null) || DEFAULT_COMBOS.map((c) => ({ ...c, pose: { ...c.pose } }));
    this.rebuild();
  }
  rebuild() {
    this.map = { ...DEFAULT_KEYS, ...this.overrides };
    for (const c of this.combos) this.map['combo:' + c.id] = c.key ?? null;
    this.rev = {};
    for (const [id, k] of Object.entries(this.map)) if (k) this.rev[k] = id;
  }
  keyOf(id) { return this.map[id] || null; }
  actionFor(k) { return this.rev[k] || null; }
  bind(id, k) {
    // gỡ phím khỏi hành động cũ đang dùng nó
    const old = this.rev[k];
    if (old && old !== id) this.setRaw(old, null);
    this.setRaw(id, k);
    this.persist();
  }
  setRaw(id, k) {
    if (id.startsWith('combo:')) {
      const c = this.combos.find((x) => 'combo:' + x.id === id);
      if (c) c.key = k;
    } else if (DEFAULT_KEYS[id] === k) delete this.overrides[id];
    else this.overrides[id] = k;
    this.rebuild();
  }
  addCombo(name, pose) {
    const id = 'u' + Date.now().toString(36);
    const used = new Set(Object.values(this.map));
    let key = null;
    for (let i = 9; i >= 0 && !key; i--) if (!used.has('Alt+Digit' + i)) key = 'Alt+Digit' + i;
    const { fx, ...rest } = pose;
    this.combos.push({ id, name: name || 'Tổ hợp ' + (this.combos.length + 1), pose: rest, key });
    this.persist();
    return id;
  }
  removeCombo(id) { this.combos = this.combos.filter((c) => c.id !== id); this.persist(); }
  renameCombo(id, name) { const c = this.combos.find((x) => x.id === id); if (c) { c.name = name.slice(0, 30); this.persist(); } }
  reset() { this.overrides = {}; this.combos = DEFAULT_COMBOS.map((c) => ({ ...c, pose: { ...c.pose } })); this.persist(); }
  persist() { this.rebuild(); save(KEYS_STORE, this.overrides); save(COMBO_STORE, this.combos); }
}

// Danh sách nhóm hành động để hiển thị trong bảng phím tắt
export function actionGroups(keymap) {
  const groups = CONTROLS.filter((g) => !g.key.startsWith('prop')).map((g) => ({
    title: g.group,
    items: g.opts.map(([v, label]) => ({ id: `${g.key}:${v}`, label })),
  }));
  groups.push({
    title: 'Đạo cụ & khác',
    items: [
      { id: 'cycle:propL', label: 'Đổi đạo cụ tay trái' }, { id: 'cycle:propR', label: 'Đổi đạo cụ tay phải' },
      { id: 'clear:propL', label: 'Bỏ đạo cụ tay trái' }, { id: 'clear:propR', label: 'Bỏ đạo cụ tay phải' },
      { id: 'cycle:ears', label: 'Đổi tai / sừng' }, { id: 'cycle:tail', label: 'Đổi đuôi' },
      { id: 'clear:ears', label: 'Bỏ tai / sừng' }, { id: 'clear:tail', label: 'Bỏ đuôi' },
      { id: 'reset', label: 'Đặt lại tư thế' }, { id: 'help', label: 'Mở bảng phím tắt' },
    ],
  });
  for (const side of ['L', 'R']) {
    groups.push({ title: `Đạo cụ tay ${side === 'L' ? 'trái' : 'phải'} (gán phím tuỳ ý)`, items: PROP_LIST.map(([id, e, n]) => ({ id: `prop${side}:${id}`, label: `${e} ${n}` })) });
  }
  return groups;
}
export { PROP_LIST };
