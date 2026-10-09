// Máy đánh (để tập luyện): ra quyết định đơn giản theo khoảng cách + chút ngẫu nhiên.
import { B, U } from './sim.js';
import { CHAR } from './chars.js';

export function makeCPU(side, level = 1) {
  let plan = [], hold = 0, cur = 0;
  const SBIT = [B.S1, B.S2, B.S3];
  return (S) => {
    if (S.phase !== 'fight') { plan = []; hold = 0; return 0; }
    const me = S.f[side], o = S.f[1 - side], ch = CHAR[me.c];
    if (plan.length) return plan.shift();
    if (hold-- > 0) return cur;
    const dx = o.x - me.x, dist = Math.abs(dx) / U, fwd = dx > 0 ? B.R : B.L, back = dx > 0 ? B.L : B.R;
    const r = Math.random();
    const idx = (types) => ch.specials.findIndex((s) => types.includes(s.type));
    const proj = idx(['proj', 'wave', 'boomerang', 'lob', 'spread', 'bounce', 'barbell', 'juggle', 'hoop', 'laser']);
    const anti = idx(['rise', 'rocket', 'launcher', 'counter', 'tiger']);
    const rush = idx(['dash', 'charge', 'armor', 'roll', 'cross', 'multikick', 'spin', 'lowspin', 'pole', 'stretch', 'whip', 'dive', 'teleslash', 'flip', 'tele', 'magnet', 'stomp', 'flex']);
    const grab = idx(['grab', 'toss']);
    cur = 0; hold = 3 + Math.floor(Math.random() * (10 - level * 3));
    if (me.meter >= 1000 && dist < 260 && r < 0.25) { plan = [B.SUP]; return 0; }
    if (o.y > 0 && dist < 170 && r < 0.35 + level * 0.15) { plan = anti >= 0 ? [SBIT[anti]] : [B.D | B.HP]; return 0; }
    if (o.st === 'atk' && dist < 190 && r < 0.4 + level * 0.15) { cur = back | (/^c/.test(o.mv || '') ? B.D : 0); hold = 14; return cur; }
    if (S.proj.some((p) => p.own !== side) && r < 0.4) { cur = fwd | B.U; hold = 2; return cur; }
    if (dist > 330) {
      if (proj >= 0 && r < 0.3) plan = [SBIT[proj]];
      else { cur = fwd | (r > 0.88 ? B.U : 0); hold = 10; }
      return cur;
    }
    if (dist > 135) {
      if (proj >= 0 && r < 0.18) plan = [SBIT[proj]];
      else if (r < 0.35) { cur = fwd | B.U; hold = 2; plan = Array(20).fill(0).concat([B.HK]); }
      else if (r < 0.7) { cur = fwd; hold = 8; }
      else if (r < 0.82 && rush >= 0) plan = [SBIT[rush]];
      else { cur = back; hold = 8; }
      return cur;
    }
    if (grab >= 0 && r < 0.12) plan = [SBIT[grab]];
    else if (r < 0.13) plan = [fwd | B.HP];
    else if (r < 0.45) plan = [B.D | B.LK, 0, 0, 0, 0, 0, 0, B.D | B.LP, 0, 0, 0, 0, 0, SBIT[Math.floor(Math.random() * 3)]];
    else if (r < 0.65) plan = [[B.LP, B.HP, B.LK, B.HK, B.D | B.HK, B.D | B.HP][Math.floor(Math.random() * 6)]];
    else if (r < 0.82) { cur = back | B.D; hold = 16; }
    else { cur = back; hold = 10; }
    return cur;
  };
}
