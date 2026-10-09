// Máy lái (tập luyện + thử nghiệm): nhìn trước chướng ngại, chọn làn trống, thỉnh thoảng húc đối thủ.
import { B, U, LANE_W, ROAD_W, OBS, obstacles, obsL } from './sim.js';
import { CAR } from './cars.js';

export function makeCPU(side, skill = 1) {
  let goal = null, think = 0;
  return (S) => {
    const me = S.c[side], o = S.c[1 - side];
    if (S.phase !== 'race' || me.st !== 'go') return 0;
    let bits = B.U;
    if (--think <= 0) {
      think = 3 + Math.floor(Math.random() * (6 - skill * 2));
      const ahead = obstacles(S, me.x + 20 * U, me.x + (380 + skill * 120) * U).filter((x) => OBS[x.type].solid || x.type === 'oil' || x.type === 'mud');
      const danger = (lane) => { const cl = lane * LANE_W + LANE_W / 2; let d = 0; for (const x of ahead) { if (Math.abs(obsL(x, S.frame) - cl) < (OBS[x.type].h / 2 + CAR[me.id].wid / 2 + 8) * U) d += 1e6 + 1e9 / Math.max(1, x.x - me.x); } return d; };
      const cur = Math.max(0, Math.min(4, Math.floor(me.l / LANE_W)));
      let best = cur, bd = danger(cur);
      for (const ln of [cur - 1, cur + 1, cur - 2, cur + 2]) { if (ln < 0 || ln > 4) continue; const d = danger(ln) + Math.abs(ln - cur) * 1e3; if (d < bd) { bd = d; best = ln; } }
      // nhắm đẩy đối thủ khi chạy song song
      if (bd === 0 && Math.abs(o.x - me.x) < 70 * U && Math.random() < 0.3 * skill) best = Math.max(0, Math.min(4, Math.floor(o.l / LANE_W)));
      goal = best * LANE_W + LANE_W / 2;
      if (Math.abs(o.x - me.x) < 60 * U && Math.abs(o.l - me.l) < 60 * U && Math.random() < 0.35) bits |= B.LP;
      if (me.nitro >= 1000 && Math.random() < 0.2) bits |= B.LK;
    }
    if (goal !== null) { const d = goal - me.l; if (d > 12 * U) bits |= B.R; else if (d < -12 * U) bits |= B.L; }
    return bits;
  };
}
