// Bàn phím + tay cầm + nút cảm ứng → bit phím cho mô phỏng.
import { B } from './sim.js';

const KEYS = {
  KeyW: B.U, ArrowUp: B.U, KeyS: B.D, ArrowDown: B.D, KeyA: B.L, ArrowLeft: B.L, KeyD: B.R, ArrowRight: B.R,
  KeyJ: B.LP, KeyU: B.HP, KeyK: B.LK, KeyI: B.HK, KeyZ: B.LP, KeyX: B.LK, KeyC: B.HP, KeyV: B.HK,
  Digit1: B.S1, Digit2: B.S2, Digit3: B.S3, KeyL: B.SUP, Space: B.SUP, Numpad1: B.S1, Numpad2: B.S2, Numpad3: B.S3,
};
export class Input {
  constructor() {
    this.keys = 0; this.touch = 0; this.touchBtn = 0; this.enabled = false;
    addEventListener('keydown', (e) => {
      if (!this.enabled || e.target.closest?.('input, textarea')) return;
      const b = KEYS[e.code]; if (!b) return;
      this.keys |= b; e.preventDefault();
    });
    addEventListener('keyup', (e) => { const b = KEYS[e.code]; if (b) this.keys &= ~b; });
    addEventListener('blur', () => { this.keys = 0; this.touch = 0; this.touchBtn = 0; });
  }
  pad() {
    let b = 0;
    const gps = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const g of gps) {
      if (!g) continue;
      const ax = g.axes[0] || 0, ay = g.axes[1] || 0, bt = (i) => g.buttons[i]?.pressed;
      if (ax < -0.45 || bt(14)) b |= B.L; if (ax > 0.45 || bt(15)) b |= B.R;
      if (ay < -0.5 || bt(12)) b |= B.U; if (ay > 0.5 || bt(13)) b |= B.D;
      if (bt(2)) b |= B.LP; if (bt(3)) b |= B.HP; if (bt(0)) b |= B.LK; if (bt(1)) b |= B.HK;
      if (bt(4)) b |= B.S1; if (bt(5)) b |= B.S2; if (bt(6)) b |= B.S3; if (bt(7)) b |= B.SUP;
    }
    return b;
  }
  bits() { return this.enabled ? this.keys | this.touch | this.touchBtn | this.pad() : 0; }
  // dựng tay cầm cảm ứng
  buildTouch(el, specials, custom = null) {
    el.innerHTML = custom ? `<div class="qc-stick" id="qcStick"><i></i></div><div class="qc-btns">${custom.map(([b, label, cls]) => `<button class="${cls || ''}" data-b="${b}">${label}</button>`).join('')}</div>` : `<div class="qc-stick" id="qcStick"><i></i></div>
      <div class="qc-btns">
        <button data-b="${B.LP}">Đấm<small>nhẹ</small></button><button data-b="${B.HP}">Đấm<small>mạnh</small></button>
        <button data-b="${B.LK}">Đá<small>nhẹ</small></button><button data-b="${B.HK}">Đá<small>mạnh</small></button>
        ${specials.map((s, i) => `<button class="sp" data-b="${[B.S1, B.S2, B.S3][i]}">${s}</button>`).join('')}
        <button class="sup" data-b="${B.SUP}">★ Tuyệt chiêu</button>
      </div>`;
    const stick = el.querySelector('#qcStick'), knob = stick.querySelector('i');
    let sp = null;
    const setDir = (e) => {
      const r = stick.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dx = e.clientX - cx, dy = e.clientY - cy, d = Math.hypot(dx, dy), dead = r.width * 0.16;
      knob.style.transform = `translate(${Math.max(-1, Math.min(1, dx / (r.width / 2))) * 30}px, ${Math.max(-1, Math.min(1, dy / (r.height / 2))) * 30}px)`;
      let b = 0;
      if (d > dead) { const a = Math.atan2(dy, dx); const oct = Math.round(a / (Math.PI / 4)); const m = { 0: B.R, 1: B.R | B.D, 2: B.D, 3: B.D | B.L, 4: B.L, '-4': B.L, '-3': B.L | B.U, '-2': B.U, '-1': B.U | B.R }; b = m[oct] || 0; }
      this.touch = b;
    };
    stick.addEventListener('pointerdown', (e) => { sp = e.pointerId; stick.setPointerCapture(e.pointerId); setDir(e); e.preventDefault(); });
    stick.addEventListener('pointermove', (e) => { if (e.pointerId === sp) setDir(e); });
    const up = (e) => { if (e.pointerId === sp) { sp = null; this.touch = 0; knob.style.transform = ''; } };
    stick.addEventListener('pointerup', up); stick.addEventListener('pointercancel', up);
    for (const btn of el.querySelectorAll('[data-b]')) {
      const b = Number(btn.dataset.b);
      btn.addEventListener('pointerdown', (e) => { e.preventDefault(); btn.setPointerCapture(e.pointerId); this.touchBtn |= b; btn.classList.add('on'); });
      const off = () => { this.touchBtn &= ~b; btn.classList.remove('on'); };
      btn.addEventListener('pointerup', off); btn.addEventListener('pointercancel', off); btn.addEventListener('lostpointercapture', off);
      btn.addEventListener('contextmenu', (e) => e.preventDefault());
    }
  }
}
