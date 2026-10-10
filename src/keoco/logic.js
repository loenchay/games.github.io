// Kéo Co Gõ Phím — 2 đội (Đỏ ghế 1–8, Xanh ghế 9–16), phòng tối đa 20 người. Gõ đúng chữ (hoặc bấm nhanh) để kéo dây về phía đội mình.
// Chạy trên máy chủ phòng 60 khung/giây. Dây: p < 0 nghiêng về Đỏ (bên trái), p > 0 về Xanh. |p| ≥ 100 là thắng.

export const EASY = ('mèo chó gà vịt cá bò trâu dê heo ngựa lúa ngô khoai sắn mía chè cà phê sữa trà bánh phở bún cơm cháo xôi chè kem kẹo '
  + 'nhà cửa sân vườn ao hồ sông núi biển mây trời gió mưa nắng trăng sao đèn bàn ghế giường tủ nồi chảo bát đũa thìa cốc '
  + 'xe đạp thuyền bè cầu đường chợ làng phố quán trường lớp sách vở bút mực thước cặp áo quần mũ nón giày dép khăn '
  + 'vui buồn cười khóc hát múa chạy nhảy bơi leo kéo đẩy nắm thả ném bắt đá đấm hô hò dô ta khỏe mạnh nhanh chậm').split(' ');
export const HARD = ('bánh chưng|bánh mì|cà phê sữa|trâu cày ruộng|gà gáy sáng|kéo co|hò dô ta|đồng lúa chín|lũy tre làng|cây đa đầu làng|'
  + 'nồi bánh trôi|chợ phiên|đèn ông sao|thả diều|nhảy dây|ô ăn quan|bịt mắt bắt dê|mèo đuổi chuột|rồng rắn lên mây|'
  + 'đường làng|bến nước|con đò|chiếc nón lá|áo bà ba|cơm tấm|bún chả|phở bò|chè đỗ đen|sữa đậu nành|nước mía|'
  + 'quyết thắng|đồng lòng|kéo mạnh lên|một hai ba|cố lên nào|đội đỏ|đội xanh|trọng tài|vạch giữa|ao bùn').split('|');
export function norm(t) {
  return String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().replace(/\s+/g, ' ');
}
function hash(a, b, c) { let h = (a ^ Math.imul(b + 1, 0x9e3779b1) ^ Math.imul(c + 7, 0x85ebca6b)) >>> 0; h = Math.imul(h ^ (h >>> 16), 0x7feb352d); h = Math.imul(h ^ (h >>> 15), 0x846ca68b); return (h ^ (h >>> 16)) >>> 0; }
export function wordAt(seed, seat, k, level) {
  const list = level === 'hard' ? HARD : level === 'mix' ? (hash(seed, seat, k * 3 + 1) % 3 ? EASY : HARD) : EASY;
  return list[hash(seed, seat, k) % list.length];
}
export const pullOf = (w) => 3 + norm(w).replace(/ /g, '').length * 0.55;

export const BEAT = 240, BEAT_ON = 200; // nhịp "Hò ... DÔ!" 4 giây, cửa sổ DÔ 0.67 giây
const INTRO = 180;
export const TEAM = ['Đỏ', 'Xanh'];
export const TEAM_SEATS = 8; // mỗi đội tối đa 8 người
export const BOT_NAMES = [['Bác Tèo (máy)', 'Cô Mai (máy)', 'Anh Sẩm (máy)', 'Chị Na (máy)'], ['Chú Hắc (máy)', 'Bà Tư (máy)', 'Út Kiệt (máy)', 'Thím Lan (máy)']];

export const defaultConfig = { mode: 'type', level: 'easy', dur: 60, bot: 'normal', balance: true };
export function cleanConfig(c, p) {
  const o = {};
  if (['type', 'tap'].includes(p.mode)) o.mode = p.mode;
  if (['easy', 'mix', 'hard'].includes(p.level)) o.level = p.level;
  if ([45, 60, 90, 120].includes(Number(p.dur))) o.dur = Number(p.dur);
  if (['easy', 'normal', 'hard'].includes(p.bot)) o.bot = p.bot;
  if (typeof p.balance === 'boolean') o.balance = p.balance;
  return o;
}

export function setup(n, cfg, ctx) {
  const team = [];
  for (let i = 0; i < n; i++) team.push((ctx?.seatIdx?.[i] ?? i) < TEAM_SEATS ? 0 : 1);
  const names = [];
  for (let i = 0; i < n; i++) names.push(ctx?.name?.(i) || `Người ${i + 1}`);
  const bot = Array(n).fill(false);
  // đội nào trống thì thêm 1 người máy
  for (const t of [0, 1]) if (!team.includes(t)) { team.push(t); bot.push(true); names.push(BOT_NAMES[t][0]); }
  const total = team.length;
  const s = {
    n, total, team, names, bot, cfg: { ...cfg }, seed: Math.floor((ctx?.rng?.() ?? Math.random()) * 2 ** 30),
    ph: 'intro', pt: 0, f: 0, p: 0, tp: 0, left: cfg.dur * 60,
    idx: Array(total).fill(0), combo: Array(total).fill(0), best: Array(total).fill(0), words: Array(total).fill(0), lastW: Array(total).fill(-99),
    taps: Array(total).fill(0), tapSeen: Array(total).fill(0), bt: Array(total).fill(0), cheer: [0, 0], cheerT: {}, cheerLog: [], pulls: [], dirty: true, win: -1,
  };
  s.size = [0, 1].map((t) => team.filter((x) => x === t).length);
  return s;
}
const beatOn = (s) => s.f % BEAT >= BEAT_ON;
function pull(s, seat, amount, ctx, kind) {
  const t = s.team[seat];
  const bal = s.cfg.balance ? (s.size[0] + s.size[1]) / 2 / s.size[t] : 1;
  const on = beatOn(s);
  const a = amount * (on ? 2 : 1) * bal;
  s.tp += t === 0 ? -a : a;
  s.pulls.push([seat, Math.round(a * 10) / 10, on ? 1 : 0, s.f]);
  if (s.pulls.length > 24) s.pulls.shift();
  if (kind === 'word' && on) ctx?.fx?.({ type: 'do', seat });
}

export function act(s, seat, a, ctx) {
  if (s.ph !== 'pull') return null;
  if (a.t === 'w' && s.cfg.mode === 'type') {
    const k = Number(a.k);
    if (k !== s.idx[seat]) return null;
    if (s.f - s.lastW[seat] < 12) return null; // chống gửi quá nhanh
    s.lastW[seat] = s.f;
    const w = wordAt(s.seed, seat, k, s.cfg.level);
    s.idx[seat]++; s.words[seat]++;
    s.combo[seat]++; s.best[seat] = Math.max(s.best[seat], s.combo[seat]);
    pull(s, seat, pullOf(w) * (1 + Math.min(10, s.combo[seat]) * 0.05), ctx, 'word');
    return null;
  }
  if (a.t === 'miss') { s.combo[seat] = 0; return null; }
  return null;
}
// người xem cổ vũ
export function watchAct(s, cid, a) {
  if (s.ph !== 'pull' || a.t !== 'cheer' || ![0, 1].includes(a.team)) return null;
  const last = s.cheerT[cid] || -99;
  if (s.f - last < 10) return null;
  s.cheerT[cid] = s.f;
  s.cheer[a.team]++;
  s.tp += a.team === 0 ? -0.25 : 0.25;
  s.cheerLog.push([a.team, String(a.e || '📣').slice(0, 4), s.f]);
  if (s.cheerLog.length > 20) s.cheerLog.shift();
  return null;
}

export function step(s, inputs, ctx) {
  s.f++; s.pt++;
  if (s.ph === 'intro') { if (s.pt >= INTRO) { s.ph = 'pull'; s.pt = 0; s.dirty = true; ctx?.fx?.({ type: 'go' }); } return; }
  if (s.ph !== 'pull') { s.p += (s.tp - s.p) * 0.08; return; }
  s.left--;
  // tiến độ gõ + số lần bấm
  for (let i = 0; i < s.n; i++) {
    const v = inputs[i];
    if (!v || typeof v !== 'object') continue;
    s.bt[i] = Math.max(0, Math.min(40, Number(v.n) || 0));
    if (s.cfg.mode === 'tap') {
      const taps = Math.max(0, Number(v.taps) || 0);
      if (taps > s.tapSeen[i]) {
        // tối đa ~10 lần/giây
        s.tapBudget ||= [];
        s.tapBudget[i] = Math.min(4, (s.tapBudget[i] ?? 4) + 10 / 60);
        let d = Math.min(taps - s.tapSeen[i], Math.floor(s.tapBudget[i]));
        s.tapSeen[i] += d; s.tapBudget[i] -= d; s.taps[i] += d;
        if (taps - s.tapSeen[i] > 20) s.tapSeen[i] = taps; // bỏ qua phần dồn ứ
        while (d-- > 0) pull(s, i, 0.62, ctx, 'tap');
      } else { s.tapBudget ||= []; s.tapBudget[i] = Math.min(4, (s.tapBudget[i] ?? 4) + 10 / 60); }
    }
  }
  // người máy
  const lv = { easy: [120, 4.2], normal: [82, 6], hard: [58, 7.8] }[s.cfg.bot] || [82, 6];
  for (let i = s.n; i < s.total; i++) {
    if (s.cfg.mode === 'tap') {
      if (s.f % Math.round(60 / lv[1]) === 0 && (s.f + i * 7) % 97 > 6) { s.taps[i]++; pull(s, i, 0.62, ctx, 'tap'); }
    } else {
      const w = wordAt(s.seed, i, s.idx[i], s.cfg.level);
      const need = Math.round(lv[0] * (0.55 + norm(w).length / 10));
      s.bt[i] = Math.min(norm(w).length, Math.floor(((s.f - s.lastW[i]) / need) * norm(w).length));
      if (s.f - s.lastW[i] >= need) {
        s.lastW[i] = s.f; s.idx[i]++; s.words[i]++; s.combo[i] = (s.f * 7 + i) % 13 === 0 ? 0 : s.combo[i] + 1;
        pull(s, i, pullOf(w) * (1 + Math.min(10, s.combo[i]) * 0.05), ctx, 'word');
        s.bt[i] = 0;
      }
    }
  }
  s.p += (s.tp - s.p) * 0.08;
  if (Math.abs(s.p) >= 100 || s.left <= 0) {
    s.p = Math.max(-100, Math.min(100, s.p)); s.tp = s.p;
    const w = Math.abs(s.p) < 2 ? -1 : s.p < 0 ? 0 : 1;
    s.win = w; s.ph = 'end'; s.dirty = true;
    const winners = [];
    for (let i = 0; i < s.n; i++) if (s.team[i] === w) winners.push(i);
    const rank = [...Array(s.n).keys()].sort((a, b) => s.words[b] + s.taps[b] / 8 - (s.words[a] + s.taps[a] / 8));
    const mvp = rank[0];
    const how = Math.abs(s.p) >= 100 ? 'kéo đối thủ qua vạch' : 'dẫn trước khi hết giờ';
    ctx?.fx?.({ type: 'end', w });
    ctx?.finish?.({ winners, rank, text: w < 0 ? 'Hai đội bất phân thắng bại!' : `Đội ${TEAM[w]} ${how}!${mvp !== undefined ? ` Kéo khoẻ nhất: ${s.names[mvp]}.` : ''}` });
  }
}

export function live(s) {
  return {
    f: s.f, ph: s.ph, pt: s.pt, p: Math.round(s.p * 10) / 10, left: s.left, idx: s.idx, bt: s.bt, combo: s.combo, words: s.words, taps: s.taps,
    pulls: s.pulls.filter((x) => s.f - x[3] < 40), cheer: s.cheer, cl: s.cheerLog.filter((x) => s.f - x[2] < 90), win: s.win,
  };
}
export function view(s) {
  return { n: s.n, total: s.total, team: s.team, names: s.names, bot: s.bot, seed: s.seed, mode: s.cfg.mode, level: s.cfg.level, dur: s.cfg.dur, ph: s.ph, win: s.win, words: s.words, best: s.best, taps: s.taps };
}
export const turn = () => -1;
export const turnKey = () => '';
export function auto() {}
export function endEarly(s) {
  const w = Math.abs(s.p) < 2 ? -1 : s.p < 0 ? 0 : 1;
  const winners = []; for (let i = 0; i < s.n; i++) if (s.team[i] === w) winners.push(i);
  return { winners, text: w < 0 ? 'Dừng giữa chừng, hoà.' : `Dừng giữa chừng — đội ${TEAM[w]} đang dẫn.` };
}
export const LOGIC = { minSeats: 1, maxSeats: 16, maxPeople: 20, defaultConfig, cleanConfig, setup, act, auto, turn, turnKey, view, step, live, watchAct, endEarly };
