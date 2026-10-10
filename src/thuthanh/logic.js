// Thủ Thành Làng — 1–4 người cùng phe xây vũ khí chặn quái kéo về phá làng. Chạy trên máy chủ phòng 60 khung/giây.
import { MW, MH, MAPS, TOWERS, ENEMIES, pathCells, blockedCell, pathLen, posAt, REFUND } from './data.js';

const DIFF = { easy: [0.75, 1.15], normal: [1, 1], hard: [1.4, 0.9] }; // [máu quái, vàng]
export const defaultConfig = { map: 'duonglang', waves: 20, diff: 'normal' };
export function cleanConfig(c, p) {
  const o = {};
  if (p.map in MAPS) o.map = p.map;
  if ([10, 20, 30].includes(Number(p.waves))) o.waves = Number(p.waves);
  if (p.diff in DIFF) o.diff = p.diff;
  return o;
}

// thành phần từng đợt quái: [loại, khoảng cách khung tới con sau]
export function waveList(w) {
  const L = [];
  const add = (t, n, gap) => { for (let i = 0; i < n; i++) L.push([t, gap]); };
  if (w % 10 === 0) { add('heo', 4 + w / 5, 40); add('chan', Math.floor(w / 10), 150); add('chuot', 8, 18); return L; }
  if (w % 10 === 5 && w >= 15) { add('rua', 4, 50); add('thuong', w >= 25 ? 2 : 1, 200); add('ong', 8, 14); return L; }
  if (w === 5) { add('heo', 5, 34); add('trau', 3, 80); return L; }
  if (w % 5 === 4 && w > 2) { add('qua', 6 + w, 28); if (w >= 9) add('ong', w, 14); add('chuot', 4, 20); return L; }
  add('chuot', 5 + Math.floor(w * 1.2), 22);
  if (w >= 2) add('heo', 2 + Math.floor(w * 0.8), 36);
  if (w >= 6) add('trau', Math.floor((w - 3) / 3), 70);
  if (w >= 7) add('rua', Math.floor((w - 5) / 2), 60);
  if (w >= 8 && w % 2 === 0) add('qua', 3 + Math.floor(w / 3), 26);
  if (w >= 11 && w % 2 === 1) add('ong', 6 + Math.floor(w / 2), 14);
  return L;
}
const BREAK = 900; // 15 giây nghỉ giữa các đợt

export function setup(n, cfg, ctx) {
  const map = MAPS[cfg.map] || MAPS.duonglang;
  const s = {
    n, cfg: { ...cfg }, names: [],
    ph: 'build', cd: 1500, f: 0, wave: 0, lives: 20, gold: Array(n).fill(n === 1 ? 230 : 160), towers: [], tid: 0,
    en: [], eid: 0, queue: [], qT: 0, shots: [], kills: Array(n).fill(0), dealt: Array(n).fill(0), built: Array(n).fill(0),
    lens: map.paths.map(pathLen), dirty: true, leaks: 0, pending: [],
  };
  for (let i = 0; i < n; i++) s.names.push(ctx?.name?.(i) || `Người ${i + 1}`);
  Object.defineProperty(s, 'M', { value: { map, cells: pathCells(map) }, enumerable: false });
  Object.defineProperty(s, 'rnd', { value: rng((Math.floor((ctx?.rng?.() ?? Math.random()) * 2 ** 31) | 1) >>> 0), enumerable: false });
  return s;
}
function rng(seed) { let r = seed; return () => { r = (Math.imul(r ^ (r >>> 15), 0x2c1b3c6d) + 0x297a2d39) >>> 0; return r / 4294967296; }; }
export function canBuild(s, x, y) { return x >= 0 && y >= 0 && x < MW && y < MH && !blockedCell(s.M.map, s.M.cells, x, y) && !s.towers.some((t) => t.x === x && t.y === y); }
// mỗi con quái bị giết: chia đều vàng cho cả phe (khuyến khích hợp tác)
function share(s, g) { const each = Math.max(1, Math.round((g * 1.35 * DIFF[s.cfg.diff][1] * (s.n === 1 ? 1 : 1.25)) / s.n)); for (let i = 0; i < s.n; i++) s.gold[i] += each; }

export function act(s, seat, a, ctx) {
  if (s.ph === 'win' || s.ph === 'lose') return 'Trận đã xong.';
  if (a.t === 'build') {
    const T = TOWERS[a.kind];
    const x = Math.floor(Number(a.x)), y = Math.floor(Number(a.y));
    if (!T) return 'Loại vũ khí không rõ.';
    if (!canBuild(s, x, y)) return 'Chỗ này không xây được.';
    if (s.gold[seat] < T.cost) return 'Không đủ vàng.';
    s.gold[seat] -= T.cost; s.built[seat]++;
    s.towers.push({ id: ++s.tid, kind: a.kind, x, y, lv: 0, own: seat, cd: 10, beam: {} });
    s.dirty = true; ctx?.fx?.({ type: 'build', seat, x, y, kind: a.kind });
    return null;
  }
  if (a.t === 'up') {
    const t = s.towers.find((q) => q.id === a.id);
    if (!t) return 'Không thấy vũ khí.';
    if (t.lv >= 3) return 'Đã nâng tối đa.';
    const cost = TOWERS[t.kind].up[t.lv];
    if (s.gold[seat] < cost) return 'Không đủ vàng.';
    s.gold[seat] -= cost; t.lv++;
    s.dirty = true; ctx?.fx?.({ type: 'up', seat, x: t.x, y: t.y, kind: t.kind, lv: t.lv });
    return null;
  }
  if (a.t === 'remove' || a.t === 'sell') {
    const i = s.towers.findIndex((q) => q.id === a.id);
    if (i < 0) return 'Không thấy vũ khí.';
    const t = s.towers[i];
    if (t.own !== seat) return 'Chỉ người lắp mới gỡ được.';
    const back = Math.floor(TOWERS[t.kind].cost * REFUND);
    s.gold[seat] += back;
    s.towers.splice(i, 1); s.dirty = true;
    ctx?.fx?.({ type: 'remove', seat, x: t.x, y: t.y, back });
    return null;
  }
  if (a.t === 'gift') {
    const to = Number(a.to), amt = Math.min(s.gold[seat], 50);
    if (!(to >= 0 && to < s.n) || to === seat || amt <= 0) return 'Không tặng được.';
    s.gold[seat] -= amt; s.gold[to] += amt;
    ctx?.log?.(`💰 ${s.names[seat]} tặng ${amt} vàng cho ${s.names[to]}.`, 'good');
    s.dirty = true;
    return null;
  }
  if (a.t === 'next') {
    if (s.ph !== 'build') return 'Đang có đợt quái.';
    const bonus = Math.floor(s.cd / 60);
    if (bonus > 0) for (let i = 0; i < s.n; i++) s.gold[i] += bonus;
    s.cd = 1;
    ctx?.log?.(`📯 ${s.names[seat]} gọi đợt quái sớm${bonus ? ` (+${bonus} vàng mỗi người)` : ''}.`, 'info');
    return null;
  }
  return 'Hành động không rõ.';
}

function startWave(s, ctx) {
  s.wave++; s.ph = 'wave';
  s.queue = waveList(s.wave); s.qT = 30; s.dirty = true;
  const boss = s.queue.find((q) => ENEMIES[q[0]].boss);
  ctx?.fx?.({ type: 'wave', w: s.wave, boss: boss ? boss[0] : '' });
}
const posOf = (s, e) => posAt(s.M.map.paths[e.p], e.d);

export function step(s, inputs, ctx) {
  s.f++;
  if (s.ph === 'win' || s.ph === 'lose') return;
  if (s.ph === 'build') { if (--s.cd <= 0) startWave(s, ctx); }
  // thả quái
  if (s.ph === 'wave' && s.queue.length && --s.qT <= 0) {
    const [t, gap] = s.queue.shift();
    const E = ENEMIES[t];
    const grow = 1 + (s.wave - 1) * 0.15 + Math.max(0, s.wave - 10) ** 2 * 0.012;
    const lanes = 1 - 0.1 * (s.M.map.paths.length - 1); // nhiều lối vào thì quái yếu bớt vì phải chia quân giữ
    const hp = Math.round(E.hp * grow * DIFF[s.cfg.diff][0] * (1 + (s.n - 1) * 0.25) * lanes);
    s.en.push({ id: ++s.eid, t, p: s.eid % s.M.map.paths.length, d: 0, hp, max: hp, slow: 0, slowK: 0, stun: 0, frz: 0, burn: null });
    s.qT = gap;
  }
  // quái đi
  for (const e of s.en) {
    const E = ENEMIES[e.t];
    if (E.regen && e.hp < e.max) e.hp = Math.min(e.max, e.hp + e.max * E.regen);
    if (e.burn) { e.burn.left--; if (e.burn.left % 15 === 0) hit(s, e, e.burn.tick, e.burn.own, ctx, true); if (e.burn.left <= 0) e.burn = null; }
    if (e.stun > 0) { e.stun--; continue; }
    if (e.frz > 0) { e.frz--; continue; }
    const sp = E.sp * (e.slow > 0 ? 1 - e.slowK : 1);
    if (e.slow > 0 && --e.slow === 0) e.slowK = 0;
    e.d += sp;
    if (e.d >= s.lens[e.p]) {
      e.done = true; s.lives -= E.dmg; s.leaks++;
      ctx?.fx?.({ type: 'leak', dmg: E.dmg });
      s.dirty = true;
    }
  }
  s.en = s.en.filter((e) => !e.done && e.hp > 0);
  // vũ khí bắn
  const P = new Map(s.en.map((e) => [e.id, posOf(s, e)]));
  for (const t of s.towers) {
    if (t.cd > 0) { t.cd--; continue; }
    const S = TOWERS[t.kind].lv[t.lv], cx = t.x + 0.5, cy = t.y + 0.5;
    const inR = s.en.filter((e) => e.hp > 0 && (S.air || !ENEMIES[e.t].fly) && Math.hypot(P.get(e.id)[0] - cx, P.get(e.id)[1] - cy) <= S.range);
    if (!inR.length) { t.beam = {}; continue; }
    t.cd = S.rate;
    const kindFx = t.kind === 'bun' ? 3 : t.kind === 'bang' && S.burst ? 6 : 2;
    if (S.burst) { for (const e of inR) strike(s, t, S, e, S.dmg, ctx); s.shots.push([t.id, 0, s.f, kindFx]); continue; }
    // mục tiêu: những con đi xa nhất
    const tg = inR.sort((a, b) => b.d - a.d).slice(0, S.multi || 1);
    if (S.chain) {
      for (const first of tg) {
        const ids = [first.id], hitSet = new Set([first.id]);
        let cur = first, dmg = S.dmg;
        strike(s, t, S, cur, dmg, ctx);
        for (let k = 1; k < S.chain; k++) {
          const cp = P.get(cur.id);
          const nx = s.en.filter((e) => e.hp > 0 && !hitSet.has(e.id) && Math.hypot(P.get(e.id)[0] - cp[0], P.get(e.id)[1] - cp[1]) < 1.8).sort((a, b) => Math.hypot(P.get(a.id)[0] - cp[0], P.get(a.id)[1] - cp[1]) - Math.hypot(P.get(b.id)[0] - cp[0], P.get(b.id)[1] - cp[1]))[0];
          if (!nx) break;
          dmg *= 0.82; hitSet.add(nx.id); ids.push(nx.id); cur = nx;
          strike(s, t, S, nx, dmg, ctx);
        }
        s.shots.push([t.id, ids, s.f, 4]);
      }
      continue;
    }
    if (S.beam) {
      // tia laze: chiếu cùng 1 con càng lâu càng mạnh
      const nb = {};
      for (const e of tg) {
        const heat = Math.min(S.ramp, (t.beam[e.id] || 1) + (S.ramp - 1) / 20);
        nb[e.id] = heat;
        strike(s, t, S, e, S.dmg * heat, ctx);
        s.shots.push([t.id, e.id, s.f, 5, Math.round(((heat - 1) / Math.max(0.01, S.ramp - 1)) * 100)]);
      }
      t.beam = nb;
      continue;
    }
    for (const e of tg) {
      if (S.splash) {
        const [tx, ty] = P.get(e.id);
        const fly = t.kind === 'daibac' ? 18 : 22;
        s.shots.push([t.id, e.id, s.f, t.kind === 'daibac' ? 7 : 1, Math.round(tx * 100), Math.round(ty * 100)]);
        s.pending.push({ at: s.f + fly, x: tx, y: ty, r: S.splash, dmg: S.dmg, t, S });
      } else {
        strike(s, t, S, e, S.dmg, ctx);
        s.shots.push([t.id, e.id, s.f, t.kind === 'sung' ? 8 : t.kind === 'bang' ? 9 : 0]);
      }
    }
  }
  // đạn nổ rơi trúng
  if (s.pending.length) {
    const now = s.pending.filter((p) => p.at <= s.f);
    s.pending = s.pending.filter((p) => p.at > s.f);
    for (const p of now) {
      for (const e of s.en) { if (e.hp <= 0 || (ENEMIES[e.t].fly && !p.S.air)) continue; const q = posOf(s, e); if (Math.hypot(q[0] - p.x, q[1] - p.y) <= p.r) strike(s, p.t, p.S, e, p.dmg, ctx); }
      ctx?.fx?.({ type: 'boom', x: p.x, y: p.y, r: p.r, big: p.t.kind === 'daibac' });
    }
  }
  s.en = s.en.filter((e) => e.hp > 0);
  s.shots = s.shots.filter((q) => s.f - q[2] < 30);
  if (s.lives <= 0) {
    s.lives = 0; s.ph = 'lose'; s.dirty = true;
    ctx?.fx?.({ type: 'lose' });
    ctx?.finish?.({ winners: [], text: `Quái phá được cổng làng ở đợt ${s.wave}/${s.cfg.waves}.`, rank: rankOf(s) });
    return;
  }
  if (s.ph === 'wave' && !s.queue.length && !s.en.length) {
    if (s.wave >= s.cfg.waves) {
      s.ph = 'win'; s.dirty = true;
      ctx?.fx?.({ type: 'win' });
      ctx?.finish?.({ winners: [...Array(s.n).keys()], rank: rankOf(s), text: `Giữ làng thành công qua ${s.cfg.waves} đợt, còn ${s.lives} máu!` });
      return;
    }
    s.ph = 'build'; s.cd = BREAK; s.dirty = true;
    const bonus = 30 + s.wave * 5;
    for (let i = 0; i < s.n; i++) s.gold[i] += bonus;
    ctx?.fx?.({ type: 'clear', w: s.wave, bonus });
  }
}
// một phát trúng: sát thương + các hiệu ứng của cấp vũ khí
function strike(s, t, S, e, dmg, ctx) {
  if (e.hp <= 0) return;
  let d = dmg;
  if (S.crit && s.rnd() < S.crit[0]) d *= S.crit[1];
  if (!S.pierce && ENEMIES[e.t].armor) d = Math.max(1, d - ENEMIES[e.t].armor);
  hit(s, e, d, t.own, ctx);
  if (S.slow) { e.slow = Math.max(e.slow, S.slow[1]); e.slowK = Math.max(e.slowK, S.slow[0] * (ENEMIES[e.t].boss ? 0.6 : 1)); }
  if (S.burn && (!e.burn || e.burn.tick < S.burn[0] / (S.burn[1] / 15))) e.burn = { tick: S.burn[0] / (S.burn[1] / 15), left: S.burn[1], own: t.own };
  if (S.stun && !ENEMIES[e.t].boss && s.rnd() < S.stun[0]) e.stun = Math.max(e.stun, S.stun[1]);
  if (S.freeze && !ENEMIES[e.t].boss && s.rnd() < S.freeze[0]) e.frz = Math.max(e.frz, S.freeze[1]);
}
function hit(s, e, dmg, own, ctx) {
  if (e.hp <= 0) return;
  const real = Math.min(e.hp, dmg);
  e.hp -= dmg; s.dealt[own] += real;
  if (e.hp <= 0) { s.kills[own]++; share(s, ENEMIES[e.t].gold); if (ENEMIES[e.t].boss) ctx?.fx?.({ type: 'boss', seat: own, t: e.t }); }
}
const rankOf = (s) => [...Array(s.n).keys()].sort((a, b) => s.dealt[b] - s.dealt[a]);

export function live(s) {
  const r = (v) => Math.round(v * 100);
  return {
    f: s.f, ph: s.ph, cd: s.cd, wave: s.wave, lives: s.lives, gold: s.gold, left: s.queue.length + s.en.length,
    // cờ: 1 chậm · 2 cháy · 4 choáng · 8 đóng băng
    e: s.en.map((e) => [e.id, e.t, e.p, r(e.d), Math.max(1, Math.round((e.hp / e.max) * 100)), (e.slow > 0 ? 1 : 0) | (e.burn ? 2 : 0) | (e.stun > 0 ? 4 : 0) | (e.frz > 0 ? 8 : 0)]),
    s: s.shots.filter((q) => s.f - q[2] < 26), kills: s.kills, dealt: s.dealt,
  };
}
export function view(s) {
  return { n: s.n, names: s.names, map: s.cfg.map, waves: s.cfg.waves, diff: s.cfg.diff, ph: s.ph, wave: s.wave, lives: s.lives, towers: s.towers.map((t) => [t.id, t.kind, t.x, t.y, t.lv, t.own]), gold: s.gold, kills: s.kills, dealt: s.dealt, built: s.built };
}
export const turn = () => -1;
export const turnKey = () => '';
export function auto() {}
export function endEarly(s) { return { winners: [], text: `Dừng ở đợt ${s.wave}/${s.cfg.waves}.` }; }
export const LOGIC = { minSeats: 1, maxSeats: 4, liveEvery: 3, defaultConfig, cleanConfig, setup, act, auto, turn, turnKey, view, step, live, endEarly };
