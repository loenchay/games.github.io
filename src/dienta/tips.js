// Biến "Mẹo diễn" (chuỗi chữ trong bộ đề) thành các nút bấm được, khớp đúng với nút điều khiển.
import { CONTROLS, PROP_LIST } from './puppet.js';

const norm = (s) => s.toLowerCase().replace(/[\u{1F000}-\u{1FFFF}☀-➿️]/gu, '').replace(/\s+/g, ' ').trim();
const both = (a) => ['armL:' + a, 'armR:' + a];

// Từ viết trong mẹo -> danh sách hành động
const ALIAS = {
  'cúi chào': ['body:bow'], 'cúi người': ['body:bow'], 'cúi': ['body:bow'],
  'bò': ['body:crawl'], 'nằm/bò': ['body:crawl'], 'ngồi': ['body:sit'], 'đứng thẳng': ['body:stand'], 'đứng': ['body:stand'],
  'nghiêng': ['body:leanR'], 'nghiêng người': ['body:leanR'], 'nghiêng đầu': ['head:tiltR'], 'ngước': ['head:up'], 'cúi đầu': ['head:down'],
  'mặt vui': ['face:happy'], 'mặt buồn': ['face:sad'], 'mặt giận': ['face:angry'], 'mặt ngạc nhiên': ['face:surprised'],
  'mặt sợ': ['face:scared'], 'mặt ngủ': ['face:sleepy'], 'mặt lè lưỡi': ['face:cheeky'], 'mặt yêu': ['face:love'], 'mặt thường': ['face:neutral'],
  'ngáp': ['face:sleepy', 'armR:mouth'],
  'giơ cao': ['armR:up'], 'giơ 2 tay': both('up'), '2 tay giơ cao': both('up'), 'tay giơ cao xen kẽ': ['armL:up', 'armR:down', 'loop:punch'],
  'dang tay': both('side'), 'dang 2 tay': both('side'), '2 tay dang': both('side'), 'tay dang': both('side'), 'tay hạ dang nhẹ': both('diag'),
  '2 tay chéo lên': both('diag'), 'chống hông': ['armR:hip'], 'chống hông 2 tay': both('hip'),
  'khoe cơ': ['armR:flex'], 'khoe cơ 2 tay': both('flex'), 'co 2 tay': both('flex'), 'ôm ngực': both('cross'), 'ôm đầu': both('head'),
  'đưa lên miệng': ['armR:mouth'], 'đưa tay lên miệng': ['armR:mouth'], '1 tay đưa lên miệng làm vòi': ['armR:mouth'],
  'chỉ': ['armR:point'], 'chỉ lên': ['armR:diag'], '2 tay chỉ': both('point'), '1 tay giơ ra hiệu dừng': ['armR:point'], 'vẫy': ['armR:wave'], 'vẫy tay': ['armR:wave'],
  'co gối': ['legL:knee'], 'co gối 1 chân': ['legL:knee'], 'đá': ['legR:kick'], 'đá chân': ['legR:kick'],
  'lắc': ['loop:shake'], 'đi chậm': ['loop:walk'], 'nhảy múa uốn éo': ['loop:dance'], 'vỗ tay (hàm)': ['loop:clap'], 'nhún': ['fx:bounce'],
  'đuôi': ['tail:dog'], 'đuôi heo xoắn': ['tail:pig'], 'xương': ['propR:bone'], 'bóng': ['propR:ball'], 'đàn': ['propR:guitar'],
};

const LOOKUP = {};
for (const g of CONTROLS) {
  if (g.key.startsWith('prop') || g.key === 'face') continue;
  const pre = g.key === 'armL' ? 'tay trái ' : g.key === 'armR' ? 'tay phải ' : g.key === 'legL' ? 'chân trái ' : g.key === 'legR' ? 'chân phải ' : '';
  for (const [v, l] of g.opts) { const k = norm(pre + l); if (!LOOKUP[k]) LOOKUP[k] = [g.key + ':' + v]; }
}
for (const [id, , n] of PROP_LIST) LOOKUP[norm(n)] = ['prop:' + id];
Object.assign(LOOKUP, ALIAS);

// "cúi chào + vỗ tay" -> [{ text, ids }]
export function parseTip(tip) {
  if (!tip) return [];
  let propN = 0;
  return tip.split(/\s*(?:\+|,|→|;)\s*/).filter(Boolean).map((text) => {
    let ids = LOOKUP[norm(text)] || null;
    if (ids) ids = ids.map((id) => (id.startsWith('prop:') ? (propN++ ? 'propL:' : 'propR:') + id.slice(5) : id));
    return { text, ids };
  });
}
export { LOOKUP as TIP_LOOKUP };
