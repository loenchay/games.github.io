// Nhân vật 3D "Bé Đụt" (Three.js) — thiết kế mới:
// • tô màu hoạt hình (toon 3 tầng) + viền đậm giống phong cách sticker của giao diện
// • đầu to, thân hình hạt đậu, tay chân "ống mì" uốn cong mềm (rubber-hose), găng tay tròn, giày to
// • mắt lồi 3D có mí, con ngươi lúc lắc độc lập -> nhìn "đụt đụt"
// • mọi chuyển động chạy qua lò xo + nhún / co giãn (squash & stretch) nên dẻo và nảy
// Dùng chung bảng tư thế với bản 2D. Máy không có WebGL thì tự quay về bản 2D.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Sprite, SpriteMaterial, MeshToonMaterial, MeshBasicMaterial, AmbientLight,
  ShaderMaterial, DataTexture, CanvasTexture, Color, NearestFilter, RedFormat, BackSide, DoubleSide, SRGBColorSpace,
  SphereGeometry, CapsuleGeometry, LatheGeometry, ConeGeometry, CylinderGeometry, TorusGeometry, BoxGeometry, CircleGeometry,
  TubeGeometry, CatmullRomCurve3, QuadraticBezierCurve3, Curve, ExtrudeGeometry, Shape, Vector2, Vector3, HemisphereLight, DirectionalLight, PCFSoftShadowMap,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { ARM, LEG, BODY, HEAD, PROP_EMO, FACE_EMO, createPuppet2D } from './puppet.js';
import { CHAR_MAP } from './chars.js';
import { buildStage } from './stage3d.js';

const D2R = Math.PI / 180;
const PX = 1 / 112; // 1 đơn vị 3D ≈ 112px của bản 2D
const EDGE = 0x1d1648;

// ---------- vật liệu ----------
let gradTex;
function gradient() {
  if (!gradTex) {
    gradTex = new DataTexture(new Uint8Array([140, 205, 240]), 3, 1, RedFormat);
    gradTex.minFilter = gradTex.magFilter = NearestFilter;
    gradTex.needsUpdate = true;
  }
  return gradTex;
}
const toon = (color, extra = {}) => new MeshToonMaterial({ color, gradientMap: gradient(), ...extra });
const mkOutline = (t) => new ShaderMaterial({
  uniforms: { t: { value: t }, color: { value: new Color(EDGE) } },
  vertexShader: 'uniform float t; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vec3 n = normalize(normalMatrix * normal); mv.xyz += n * t; gl_Position = projectionMatrix * mv; }',
  fragmentShader: 'uniform vec3 color; void main(){ gl_FragColor = vec4(color, 1.0); }',
  side: BackSide,
});
const OUTLINE = mkOutline(0.026);
const OUTLINE_THIN = mkOutline(0.016);
const SHARED = new Set([OUTLINE, OUTLINE_THIN]);

function part(geo, color, { outline = true, thin = false, mat } = {}) {
  const g = new Group();
  const m = new Mesh(geo, mat || toon(color));
  m.castShadow = true;
  g.add(m);
  if (outline) g.add(new Mesh(geo, thin ? OUTLINE_THIN : OUTLINE));
  g.userData.mesh = m;
  return g;
}
const at = (o, x, y, z) => { o.position.set(x, y, z); return o; };
const rot = (o, x, y, z) => { o.rotation.set(x, y, z); return o; };
const scl = (o, x, y, z) => { o.scale.set(x, y, z); return o; };
const lathe = (pts, seg = 32, phiStart = 0, phiLen = Math.PI * 2) => {
  const p = pts[0][1] > pts[pts.length - 1][1] ? [...pts].reverse() : pts; // từ dưới lên để pháp tuyến hướng ra ngoài
  return new LatheGeometry(p.map(([r, y]) => new Vector2(r, y)), seg, phiStart, phiLen);
};

// ---------- texture ----------
const texCache = new Map();
function svgTexture(key, inner) {
  if (texCache.has(key)) return texCache.get(key);
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  const img = new Image();
  img.onload = () => { c.getContext('2d').drawImage(img, 0, 0, 512, 512); tex.needsUpdate = true; };
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">${inner}</svg>`);
  texCache.set(key, tex);
  return tex;
}
const emojiCache = new Map();
function emojiTexture(ch) {
  if (emojiCache.has(ch)) return emojiCache.get(ch);
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  x.font = '100px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.fillText(ch, 64, 72);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  emojiCache.set(ch, t);
  return t;
}

// ---------- đầu ----------
const HR = 0.62; // bán kính đầu
const SPREAD = 1.0; // mảnh mặt phủ ±1 rad
const EYE = { lon: 0.34, lat: 0.06, r: 0.155 };
// toạ độ trên texture mặt (0..100) từ kinh độ/vĩ độ
const fx_ = (lon) => 50 + (lon / SPREAD) * 50;
const fy_ = (lat) => 50 - (lat / SPREAD) * 50;

// Vẽ phần mặt phẳng: miệng, lông mày, má hồng, mắt nhắm/tim (khi mắt 3D bị ẩn)
export function faceTex(face, { eyes3D = true, wink = false, extras = [] } = {}) {
  const ex = fx_(-EYE.lon), ex2 = fx_(EYE.lon), ey = fy_(EYE.lat);
  const L = 'fill="none" stroke="#1d1648" stroke-linecap="round" stroke-linejoin="round"';
  let s = '';
  const blush = extras.includes('blush') || ['happy', 'love', 'cheeky'].includes(face);
  if (blush) s += `<ellipse cx="${ex - 4}" cy="${ey + 13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/><ellipse cx="${ex2 + 4}" cy="${ey + 13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/>`;
  if (extras.includes('freckles')) for (const [x, y] of [[-6, 12], [-2, 15], [-9, 15], [6, 12], [2, 15], [9, 15]]) s += `<circle cx="${(x < 0 ? ex : ex2) + x}" cy="${ey + y}" r=".9" fill="#b0643a"/>`;
  // mắt vẽ (khi không dùng mắt 3D)
  const arcUp = (x) => `<path d="M${x - 8} ${ey + 3} Q${x} ${ey - 8} ${x + 8} ${ey + 3}" ${L} stroke-width="3.6"/>`;
  const arcDown = (x) => `<path d="M${x - 8} ${ey} Q${x} ${ey + 6} ${x + 8} ${ey}" ${L} stroke-width="3.4"/>`;
  const heart = (x) => `<path d="M${x} ${ey + 7} l-8 -8 a4.6 4.6 0 0 1 8 -5.4 a4.6 4.6 0 0 1 8 5.4 z" fill="#ff3d6e" stroke="#1d1648" stroke-width="1.6"/>`;
  if (!eyes3D) {
    if (face === 'love') s += heart(ex) + heart(ex2);
    else if (face === 'sleepy') s += arcDown(ex) + arcDown(ex2);
    else s += arcUp(ex) + arcUp(ex2);
  } else if (wink) s += arcUp(ex);
  // lông mày (nằm cao hơn mắt lồi)
  const by = ey - 17;
  const brow = (d) => `<path d="${d}" ${L} stroke-width="3.2"/>`;
  const B = {
    angry: `M${ex - 9} ${by + 1} L${ex + 7} ${by + 7} M${ex2 + 9} ${by + 1} L${ex2 - 7} ${by + 7}`,
    sad: `M${ex - 8} ${by + 6} L${ex + 7} ${by} M${ex2 + 8} ${by + 6} L${ex2 - 7} ${by}`,
    scared: `M${ex - 8} ${by + 2} Q${ex} ${by - 5} ${ex + 7} ${by - 1} M${ex2 + 8} ${by + 2} Q${ex2} ${by - 5} ${ex2 - 7} ${by - 1}`,
    surprised: `M${ex - 8} ${by - 2} Q${ex} ${by - 8} ${ex + 8} ${by - 2} M${ex2 - 8} ${by - 2} Q${ex2} ${by - 8} ${ex2 + 8} ${by - 2}`,
    cheeky: `M${ex - 8} ${by + 2} Q${ex} ${by - 2} ${ex + 8} ${by + 3} M${ex2 - 8} ${by - 3} Q${ex2} ${by - 8} ${ex2 + 8} ${by - 2}`,
    neutral: `M${ex - 7} ${by + 1} Q${ex} ${by - 3} ${ex + 7} ${by + 2} M${ex2 - 7} ${by - 1} Q${ex2} ${by - 5} ${ex2 + 7} ${by}`,
  };
  s += brow(B[face] || B.neutral);
  // miệng
  const my = fy_(-0.36);
  const teeth = (y) => `<rect x="45.6" y="${y}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/><rect x="50.2" y="${y}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/>`;
  const M = {
    neutral: `<path d="M41 ${my - 2} Q50 ${my + 4} 59 ${my - 3}" ${L} stroke-width="2.8"/>${teeth(my)}`,
    happy: `<path d="M37 ${my - 4} Q50 ${my + 16} 63 ${my - 4} Z" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.4" stroke-linejoin="round"/>${teeth(my - 3.6)}<path d="M44 ${my + 6} Q50 ${my + 2} 56 ${my + 6} Q50 ${my + 10} 44 ${my + 6}Z" fill="#ff7b93"/>`,
    sad: `<path d="M41 ${my + 4} Q50 ${my - 4} 59 ${my + 4}" ${L} stroke-width="2.8"/><path d="M${ex - 3} ${ey + 9} q-3 7 0 10 q3 -3 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,
    angry: `<path d="M40 ${my - 2} H60 Q61 ${my + 7} 50 ${my + 7} Q39 ${my + 7} 40 ${my - 2}Z" fill="#fff" stroke="#1d1648" stroke-width="2.2"/><path d="M40.5 ${my + 2.5} H59.5 M45 ${my - 2} v9 M50 ${my - 2} v9 M55 ${my - 2} v9" stroke="#1d1648" stroke-width="1.2"/>`,
    surprised: `<ellipse cx="50" cy="${my + 2}" rx="5.4" ry="7.4" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.2"/>`,
    scared: `<path d="M38 ${my + 2} l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4" ${L} stroke-width="2.4"/><path d="M${ex2 + 12} ${ey - 10} q4 6 0 10 q-4 -4 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,
    sleepy: `<ellipse cx="51" cy="${my + 1}" rx="3.4" ry="2.8" fill="#7a1f2b" stroke="#1d1648" stroke-width="1.6"/><path d="M54 ${my + 2} q1 6 -1 8" fill="none" stroke="#7cc8ff" stroke-width="1.8" stroke-linecap="round"/><text x="70" y="${ey - 16}" font-family="sans-serif" font-weight="900" font-size="9" fill="#4b4478">z</text><text x="77" y="${ey - 24}" font-family="sans-serif" font-weight="900" font-size="12" fill="#4b4478">Z</text>`,
    cheeky: `<path d="M40 ${my - 2} Q50 ${my + 7} 60 ${my - 3}" ${L} stroke-width="2.8"/><path d="M50 ${my + 2} q2 10 8 2 z" fill="#ff6f8a" stroke="#1d1648" stroke-width="1.6" stroke-linejoin="round"/>`,
    love: `<path d="M40 ${my - 3} Q50 ${my + 9} 60 ${my - 3}" ${L} stroke-width="2.8"/>`,
  };
  s += M[face] || M.neutral;
  if (extras.includes('fangs')) s += `<path d="M44 ${my + 1} l1.6 4 l1.6 -4 M53 ${my + 1} l1.6 4 l1.6 -4" fill="#fff" stroke="#1d1648" stroke-width="1"/>`;
  return s;
}

// Mảnh cầu phía trước đầu để dán mặt / ảnh
const facePatch = (r, spread) => new SphereGeometry(r, 40, 28, Math.PI / 2 - spread, spread * 2, Math.PI / 2 - spread, spread * 2);
// điểm trên mặt cầu đầu theo kinh độ / vĩ độ
const onHead = (lon, lat, r = HR) => new Vector3(r * Math.sin(lon) * Math.cos(lat), r * Math.sin(lat), r * Math.cos(lon) * Math.cos(lat));

// ---------- bảng tư thế riêng cho 3D (xoay trục X = đưa ra trước) ----------
const ARM_X = { point: [-75, 0], mouth: [-30, -100], cross: [-45, -60], head: [-15, -40], hip: [10, 0] };
const ARM_Z = { point: [20, 0], mouth: [10, 25], cross: [16, -70], wave: [128, 22] };
const HIP_Y = 0.8;
const BODY3D = {
  sit: { y: 0.6, legs: [[-88, 88, 6], [-88, 88, 6]] },
  squat: { y: 0.46, legs: [[-115, 135, 26], [-115, 135, 26]] },
  kneel: { y: 0.5, legs: [[0, 95, 4], [0, 95, 4]] },
  crossleg: { y: 0.34, legs: [[-80, 0, 52, -125], [-80, 0, 52, -125]] },
  lie: { x: 0.45, y: 0.5 },
  crawl: { x: 0, y: 0.54 },
  handstand: { y: 2.12 },
};
const TURN = { front: 0, l45: -Math.PI / 4, r45: Math.PI / 4, left: -Math.PI / 2, right: Math.PI / 2, back: Math.PI };

// đoạn đầu của một đường cong (để làm tay áo / ống quần)
class SubCurve extends Curve {
  constructor(c, a, b) { super(); this.c = c; this.a = a; this.b = b; }
  getPoint(t, out = new Vector3()) { return this.c.getPoint(this.a + (this.b - this.a) * t, out); }
}

export function createPuppet(container, opts = {}) {
  let renderer;
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  } catch (e) {
    console.warn('[puppet3d] WebGL không khả dụng, dùng bản 2D', e);
    return createPuppet2D(container);
  }
  container.innerHTML = '';
  const canvas = renderer.domElement;
  canvas.className = 'pp pp3d';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', 'Nhân vật trên sân khấu');
  container.appendChild(canvas);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = SRGBColorSpace;

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 100);
  const CAM = opts.stage ? { y: 2.0, z: 8.8, ly: 1.5, fov: 34 } : { y: 1.75, z: 7.4, ly: 1.38, fov: 30 };
  camera.fov = CAM.fov;
  camera.position.set(0, CAM.y, CAM.z);
  camera.lookAt(0, CAM.ly, 0);
  scene.add(new HemisphereLight(0xffffff, 0xd9c2ff, opts.stage ? 0.6 : 1.3));
  scene.add(new AmbientLight(0xffffff, opts.stage ? 0.15 : 0.5));
  const sun = new DirectionalLight(0xffffff, opts.stage ? 0.8 : 1.9);
  sun.position.set(3, 6, 6);
  scene.add(sun);

  const STAGE = opts.stage ? buildStage(scene) : null;
  if (STAGE) {
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
  }

  // bóng dưới chân
  const shadow = new Mesh(new CircleGeometry(0.8, 32), new MeshBasicMaterial({ color: 0x1d1648, transparent: true, opacity: STAGE ? 0.12 : 0.18, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.01;
  scene.add(shadow);

  // ghế đẩu (khi ngồi)
  const stool = new Group();
  stool.add(at(part(new CylinderGeometry(0.5, 0.5, 0.13, 28), 0xff8a1f), 0, 0.42, 0));
  for (const [x, z] of [[-0.32, -0.22], [0.32, -0.22], [-0.32, 0.22], [0.32, 0.22]]) stool.add(at(part(new CylinderGeometry(0.05, 0.05, 0.42, 8), 0x1d1648, { outline: false }), x, 0.21, z));
  stool.position.z = -0.2;
  scene.add(stool);

  // ---------- khung xương ----------
  const fig = new Group(); // xoay người
  scene.add(fig);
  const hips = new Group();
  hips.rotation.order = 'YXZ';
  fig.add(hips);
  const squash = new Group(); // co giãn toàn thân
  hips.add(squash);
  const torso = new Group();
  torso.rotation.order = 'YXZ';
  torso.position.y = 0.12;
  squash.add(torso);
  const wear = new Group(); // trang phục gắn hông (quần/váy)
  squash.add(wear);
  const torsoWear = new Group(); // trang phục gắn thân
  torso.add(torsoWear);
  const capeG = new Group();
  capeG.position.set(0, 0.62, -0.28);
  torso.add(capeG);

  const neck = new Group();
  neck.rotation.order = 'YXZ';
  neck.position.y = 0.66;
  torso.add(neck);
  const headIn = new Group(); // trễ nhịp so với cổ (lắc lư)
  headIn.rotation.order = 'YXZ';
  neck.add(headIn);
  const head = new Group();
  head.position.y = HR * 0.9;
  headIn.add(head);
  const headBall = part(new SphereGeometry(HR, 48, 36), 0xffffff);
  scl(headBall, 1.06, 0.95, 1);
  head.add(headBall);
  const headScale = new Group(); // cùng tỉ lệ với quả đầu, chứa mặt + mắt
  headScale.scale.set(1.06, 0.95, 1);
  head.add(headScale);
  // tai người
  const earsHuman = new Group();
  head.add(earsHuman);
  for (const sx of [-1, 1]) {
    const e = part(new SphereGeometry(0.13, 16, 12), 0xffffff);
    scl(e, 0.55, 0.9, 0.7);
    earsHuman.add(at(e, sx * HR * 1.03, -0.04, 0));
  }
  // mũi củ hành
  const nose = part(new SphereGeometry(0.085, 18, 14), 0xffffff, { thin: true });
  scl(nose, 1.1, 0.9, 0.9);
  const np = onHead(0, -0.14, HR * 0.99);
  headScale.add(at(nose, np.x, np.y, np.z));
  const faceMat = new MeshBasicMaterial({ transparent: true, depthWrite: false });
  const faceMesh = new Mesh(facePatch(HR + 0.006, SPREAD), faceMat);
  faceMesh.renderOrder = 1;
  headScale.add(faceMesh);
  const photoMat = new MeshBasicMaterial({ transparent: true, depthWrite: false });
  const photo = new Mesh(facePatch(HR + 0.035, 1.12), photoMat);
  photo.visible = false;
  photo.renderOrder = 2;
  headScale.add(photo);

  // mắt lồi 3D: lòng trắng + con ngươi + mí mắt màu da
  const eyes = [];
  for (const sx of [-1, 1]) {
    const pos = onHead(sx * EYE.lon, EYE.lat, HR * 0.93);
    const g = new Group();
    g.position.copy(pos);
    g.lookAt(pos.clone().multiplyScalar(3));
    headScale.add(g);
    const inner = new Group();
    inner.scale.set(1, 1.08, 0.62);
    g.add(inner);
    // lookAt làm trục Z hướng ra ngoài -> dựng mắt theo trục Z
    const white = part(new SphereGeometry(EYE.r, 28, 20), 0xffffff, { thin: true });
    inner.add(white);
    const pupil = new Mesh(new SphereGeometry(EYE.r * 0.44, 18, 14), new MeshBasicMaterial({ color: 0x1d1648 }));
    pupil.scale.z = 0.5;
    inner.add(pupil);
    const shine = new Mesh(new SphereGeometry(EYE.r * 0.13, 10, 8), new MeshBasicMaterial({ color: 0xffffff }));
    inner.add(shine);
    const lidPivot = new Group();
    inner.add(lidPivot);
    const lid = part(new SphereGeometry(EYE.r * 1.08, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), 0xffffff, { thin: true });
    lidPivot.add(lid);
    eyes.push({ g, inner, white, pupil, shine, lidPivot, lid, sx, px: 0, py: 0, wx: 0, wy: 0 });
  }

  const headAcc = new Group();
  headScale.add(headAcc); // cùng tỉ lệ với quả đầu để tóc/mũ ôm khít
  const earG = new Group();
  head.add(earG);
  const emote = new Sprite(new SpriteMaterial({ transparent: true, depthTest: false, depthWrite: false }));
  emote.scale.set(0.5, 0.5, 1);
  emote.position.set(0.66, HR + 0.5, 0.3);
  emote.visible = false;
  head.add(emote);

  // thân hạt đậu (áo trên + quần dưới)
  const shirtGeo = lathe([[0, 0.72], [0.18, 0.71], [0.3, 0.64], [0.38, 0.5], [0.43, 0.3], [0.455, 0.12], [0.46, -0.02]], 36);
  const shirt = part(shirtGeo, 0xffffff);
  torso.add(shirt);
  const pantsGeo = lathe([[0.462, 0.14], [0.47, 0.0], [0.45, -0.12], [0.38, -0.2], [0.22, -0.25], [0, -0.26]], 36);
  const pantsBody = part(pantsGeo, 0xffffff);
  squash.add(pantsBody);
  const neckPart = part(new CylinderGeometry(0.13, 0.15, 0.16, 16), 0xffffff, { thin: true });
  at(neckPart, 0, 0.72, 0);
  torso.add(neckPart);

  // xương tay / chân (để tính vị trí khớp, phần ống tay chân dựng lại mỗi khung hình)
  const J = {};
  const UA = 0.32, FA = 0.3, TH = 0.3, SH = 0.28;
  for (const s of ['L', 'R']) {
    const sx = s === 'L' ? -1 : 1;
    const arm = new Group();
    arm.rotation.order = 'ZXY';
    arm.position.set(sx * 0.36, 0.5, 0);
    torso.add(arm);
    const elbow = new Group();
    elbow.rotation.order = 'ZXY';
    elbow.position.y = -UA;
    arm.add(elbow);
    const wrist = new Group();
    wrist.position.y = -FA;
    elbow.add(wrist);
    // găng tay tròn + ngón cái
    const hand = new Group();
    hand.position.y = -0.1;
    wrist.add(hand);
    const palm = part(new SphereGeometry(0.135, 20, 16), 0xffffff, { thin: true });
    scl(palm, 1, 1.1, 0.85);
    hand.add(palm);
    const thumb = part(new CapsuleGeometry(0.045, 0.08, 4, 10), 0xffffff, { thin: true });
    at(thumb, -sx * 0.12, 0.04, 0.03);
    thumb.rotation.z = -sx * 0.8;
    hand.add(thumb);
    const cuff = part(new TorusGeometry(0.1, 0.035, 8, 18), 0xffffff, { thin: true });
    cuff.rotation.x = Math.PI / 2;
    cuff.position.y = 0.08;
    hand.add(cuff);
    const prop = new Sprite(new SpriteMaterial({ transparent: true, depthWrite: false }));
    prop.scale.set(0.56, 0.56, 1);
    prop.position.set(0, -0.12, 0.2);
    prop.visible = false;
    hand.add(prop);
    J['arm' + s] = arm; J['fore' + s] = elbow; J['wrist' + s] = wrist; J['prop' + s] = prop;
    J['hand' + s] = { palm, thumb, cuff };
  }
  for (const s of ['L', 'R']) {
    const sx = s === 'L' ? -1 : 1;
    const leg = new Group();
    leg.rotation.order = 'ZXY';
    leg.position.set(sx * 0.2, -0.08, 0);
    squash.add(leg);
    const knee = new Group();
    knee.rotation.order = 'ZXY';
    knee.position.y = -TH;
    leg.add(knee);
    const ankle = new Group();
    ankle.position.y = -SH;
    knee.add(ankle);
    const shoe = part(new SphereGeometry(0.2, 22, 16), 0xffffff);
    scl(shoe, 0.95, 0.62, 1.35);
    at(shoe, sx * 0.02, -0.08, 0.08);
    ankle.add(shoe);
    const sole = part(new CylinderGeometry(0.17, 0.19, 0.05, 20), 0xffffff, { thin: true });
    scl(sole, 1, 1, 1.4);
    at(sole, sx * 0.02, -0.18, 0.09);
    ankle.add(sole);
    J['leg' + s] = leg; J['shin' + s] = knee; J['ankle' + s] = ankle; J['shoe' + s] = shoe; J['sole' + s] = sole;
  }
  const tailG = new Group();
  tailG.position.set(0, 0.02, -0.4);
  squash.add(tailG);

  // ống tay / ống chân dẻo
  const limbs = {};
  const mkLimb = (key, r) => {
    const mat = toon(0xffffff);
    const m = new Mesh(new TubeGeometry(new QuadraticBezierCurve3(new Vector3(), new Vector3(0, -0.1, 0), new Vector3(0, -0.2, 0)), 4, r, 8), mat);
    m.castShadow = true;
    const o = new Mesh(m.geometry, OUTLINE);
    fig.add(m, o);
    limbs[key] = { m, o, r, mat, len: 1 };
  };
  for (const s of ['L', 'R']) { mkLimb('arm' + s, 0.082); mkLimb('sleeve' + s, 0.118); mkLimb('leg' + s, 0.105); mkLimb('pant' + s, 0.14); }

  // ---------- trang phục ----------
  let C = CHAR_MAP.tron, look = { skin: 'tron', head: '' }, lookKey = '', noEyes = false, extras = [];
  const setC = (g, c) => g.userData.mesh.material.color.set(c);
  function setLook(l) {
    const nl = { skin: CHAR_MAP[l?.skin] ? l.skin : 'tron', head: l?.head || '' };
    const key = nl.skin + '|' + nl.head;
    if (key === lookKey) return;
    lookKey = key;
    look = nl;
    C = CHAR_MAP[look.skin];
    const ex = C.extra || {};
    for (const g of [headBall, nose, neckPart, ...earsHuman.children]) setC(g, C.skin);
    for (const e of eyes) setC(e.lid, C.skin);
    setC(shirt, ex.aodai || C.top);
    setC(pantsBody, ex.dress || C.bottom);
    for (const s of ['L', 'R']) {
      const glove = C.gloves || C.skin;
      setC(J['hand' + s].palm, glove); setC(J['hand' + s].thumb, glove);
      setC(J['hand' + s].cuff, C.gloves ? C.gloves : (C.sleeve >= 0.95 ? (ex.coat || C.top) : C.skin));
      J['hand' + s].cuff.visible = !!C.gloves || C.sleeve >= 0.95;
      setC(J['shoe' + s], C.shoes); setC(J['sole' + s], '#ffffff');
      limbs['arm' + s].mat.color.set(C.gloves && C.sleeve >= 0.95 ? (ex.coat || C.top) : C.arms || C.skin);
      limbs['sleeve' + s].mat.color.set(ex.coat || ex.aodai || C.top);
      limbs['sleeve' + s].len = Math.max(0.12, C.sleeve ?? 0.3);
      limbs['leg' + s].mat.color.set(C.legs || C.skin);
      limbs['pant' + s].mat.color.set(ex.aodai ? C.bottom : C.bottom);
      limbs['pant' + s].len = ex.dress ? 0.001 : Math.max(0.12, C.pants ?? 1);
    }
    buildOutfit();
    if (look.head) loadPhoto(look.head);
    else photo.visible = false;
    lastFaceKey = '';
    applyFace();
  }

  function loadPhoto(src) {
    const img = new Image();
    if (/^https?:/.test(src)) img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const c = document.createElement('canvas');
        c.width = c.height = 256;
        const x = c.getContext('2d');
        x.beginPath();
        x.arc(128, 128, 124, 0, Math.PI * 2);
        x.clip();
        const s = Math.min(img.width, img.height);
        x.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, 256, 256);
        const t = new CanvasTexture(c);
        t.colorSpace = SRGBColorSpace;
        photoMat.map?.dispose();
        photoMat.map = t;
        photoMat.needsUpdate = true;
        photo.visible = true;
        lastFaceKey = '';
        applyFace();
      } catch { photo.visible = false; }
    };
    img.onerror = () => { photo.visible = false; };
    img.src = src;
  }

  function clear(g) {
    while (g.children.length) {
      const c = g.children.pop();
      c.traverse((o) => { if (o.isMesh && !SHARED.has(o.material)) { o.geometry.dispose(); o.material.dispose(); } });
    }
  }
  const sph = (r, color, o = {}) => part(new SphereGeometry(r, 24, 18), color, o);

  // ---- tóc ----
  function cap(color, theta = 1.15, tilt = -0.3, s = 1.07, back = 2.1) {
    const g = new Group();
    g.add(rot(part(new SphereGeometry(HR * s, 36, 20, 0, Math.PI * 2, 0, theta), color), tilt, 0, 0));
    g.add(part(new SphereGeometry(HR * (s - 0.012), 36, 20, Math.PI, Math.PI, 0, back), color));
    return g;
  }
  function hairOf(style, color) {
    const g = new Group();
    const add = (o) => { g.add(o); return o; };
    switch (style) {
      case 'ahoge': {
        add(cap(color));
        add(rot(scl(at(sph(0.3, color), 0.14, 0.43, 0.36), 1.25, 0.42, 0.75), 0.4, 0, -0.35));
        add(rot(scl(at(sph(0.3, color), -0.32, 0.38, 0.28), 0.65, 0.45, 0.7), 0.3, 0, 0.5));
        const ah = part(new TorusGeometry(0.15, 0.04, 8, 18, Math.PI * 1.25), color, { thin: true });
        at(ah, 0.05, HR + 0.1, 0); ah.rotation.z = 0.5; ah.name = 'ahoge';
        add(ah);
        break;
      }
      case 'short': add(cap(color, 1.05, -0.25)); add(rot(scl(at(sph(0.3, color), 0, 0.45, 0.32), 1.5, 0.35, 0.7), 0.45, 0, 0)); break;
      case 'spiky': {
        add(cap(color, 1.1, -0.25));
        for (let i = 0; i < 7; i++) { const a = (i / 6 - 0.5) * 2.2; const c = part(new ConeGeometry(0.12, 0.34, 10), color, { thin: true }); at(c, Math.sin(a) * 0.42, 0.52 + Math.cos(a) * 0.1, Math.cos(a) * 0.12 - 0.05); c.rotation.set(-0.3, 0, -a * 0.55); add(c); }
        break;
      }
      case 'messy': {
        add(cap(color, 1.0, -0.2));
        for (const [x, y, z, r] of [[-0.5, 0.25, 0, 0.22], [0.5, 0.25, 0, 0.22], [-0.3, 0.52, -0.1, 0.24], [0.3, 0.52, -0.1, 0.24], [0, 0.62, 0, 0.24], [-0.55, -0.05, -0.15, 0.18], [0.55, -0.05, -0.15, 0.18], [0, 0.4, -0.45, 0.26]]) add(at(sph(r, color), x, y, z));
        break;
      }
      case 'slick': add(cap(color, 1.15, -0.45)); add(rot(scl(at(sph(0.3, color), 0.05, 0.47, 0.25), 1.55, 0.42, 1.0), 0.2, 0, 0.12)); break;
      case 'bob': case 'long': case 'wavy': case 'pigtails': case 'bun': {
        g.add(part(new SphereGeometry(HR * 1.1, 36, 20, Math.PI / 2 + 0.8, Math.PI * 2 - 1.6, 0, style === 'long' || style === 'wavy' ? 2.35 : 2.0), color));
        add(rot(scl(at(sph(0.3, color), 0, 0.42, 0.38), 1.6, 0.42, 0.7), 0.4, 0, 0));
        add(cap(color, 1.0, -0.15, 1.09));
        if (style === 'long') add(scl(at(sph(0.42, color), 0, -0.45, -0.32), 1.25, 1.2, 0.6));
        if (style === 'wavy') for (const sx of [-1, 1]) for (let i = 0; i < 3; i++) add(at(sph(0.17, color), sx * (0.58 - i * 0.05), -0.25 - i * 0.2, -0.05 - i * 0.05));
        if (style === 'pigtails') for (const sx of [-1, 1]) { add(at(sph(0.24, color), sx * 0.72, 0.2, -0.12)); add(at(sph(0.08, 0xff3d8b, { thin: true }), sx * 0.6, 0.36, -0.1)); }
        if (style === 'bun') { add(at(sph(0.26, color), 0, 0.42, -0.5)); }
        break;
      }
      case 'mohawk': for (let i = 0; i < 5; i++) { const c = part(new ConeGeometry(0.11, 0.4, 8), color, { thin: true }); at(c, 0, 0.6 - Math.abs(i - 2) * 0.05, 0.3 - i * 0.2); c.rotation.x = -0.3 - i * 0.25; add(c); } break;
      default: break; // bald
    }
    return g;
  }

  // ---- mũ ----
  function hatOf(id, c) {
    const g = new Group();
    const add = (o) => { g.add(o); return o; };
    const col = c.hatColor || '#ff3d4f';
    switch (id) {
      case 'nonla': add(at(part(new ConeGeometry(1.05, 0.55, 40, 1, true), 0xf2d48a, { mat: toon(0xf2d48a, { side: DoubleSide }) }), 0, HR * 0.86, 0)); break;
      case 'ninja': {
        add(cap(col, 1.55, -0.65, 1.04, 2.4));
        add(part(new SphereGeometry(HR * 1.035, 36, 16, Math.PI / 2 - 1.3, 2.6, 1.82, 0.85), col));
        const band = part(new TorusGeometry(HR * 1.05, 0.06, 10, 40), 0xff3d4f, { thin: true });
        band.rotation.x = Math.PI / 2 - 0.12; band.position.y = 0.26; add(band);
        for (const z of [0.2, -0.15]) add(rot(at(part(new BoxGeometry(0.08, 0.05, 0.45), 0xff3d4f, { thin: true }), 0.2 + z, 0.2, -HR - 0.14), 0.5, z, 0.3));
        break;
      }
      case 'bubble': {
        add(new Mesh(new SphereGeometry(HR * 1.42, 32, 24), new MeshBasicMaterial({ color: 0xbfe6ff, transparent: true, opacity: 0.18, depthWrite: false })));
        const ring = part(new TorusGeometry(0.52, 0.09, 10, 30), 0xdfe3f5); ring.rotation.x = Math.PI / 2; ring.position.y = -HR * 0.92; add(ring);
        add(at(sph(0.06, 0xff3d4f, { thin: true }), 0.55, 0.7, 0));
        break;
      }
      case 'helmet': {
        add(rot(part(new SphereGeometry(HR * 1.13, 36, 18, 0, Math.PI * 2, 0, 1.35), col), -0.2, 0, 0));
        add(rot(at(part(new CylinderGeometry(0.03, 0.03, 0.5, 6), 0x1d1648, { outline: false }), 0, -0.48, 0.25), 0.5, 0, Math.PI / 2));
        add(at(scl(sph(0.06, 0xffffff, { thin: true }), 1, 1, 0.5), 0, 0.7, 0.28));
        break;
      }
      case 'fullhelmet': {
        add(rot(part(new SphereGeometry(HR * 1.15, 36, 20, 0, Math.PI * 2, 0, 1.55), col), -0.35, 0, 0));
        add(part(new SphereGeometry(HR * 1.14, 36, 20, Math.PI, Math.PI, 0, 2.3), col));
        add(rot(scl(at(sph(0.3, 0x1d1648), 0, 0.42, 0.42), 1.4, 0.3, 0.6), 0.6, 0, 0));
        break;
      }
      case 'cap': case 'capBack': {
        add(rot(part(new SphereGeometry(HR * 1.1, 36, 18, 0, Math.PI * 2, 0, 1.2), col), -0.15, 0, 0));
        const bill = part(new CylinderGeometry(0.42, 0.42, 0.04, 28, 1, false, -Math.PI / 2, Math.PI), col);
        if (id === 'cap') at(bill, 0, 0.32, 0.45); else { at(bill, 0, 0.32, -0.45); bill.rotation.y = Math.PI; }
        bill.rotation.x += id === 'cap' ? 0.12 : -0.12;
        add(bill);
        if (id === 'cap') add(at(scl(sph(0.08, 0xffc93d, { thin: true }), 1, 1, 0.4), 0, 0.55, 0.52));
        break;
      }
      case 'chef': {
        add(at(part(new CylinderGeometry(0.5, 0.5, 0.36, 28), 0xffffff), 0, 0.62, -0.05));
        for (const [x, z] of [[-0.25, 0], [0.25, 0], [0, 0.2], [0, -0.2], [0, 0]]) add(at(sph(0.3, 0xffffff), x, 0.98, z - 0.05));
        break;
      }
      case 'crown': {
        const cr = part(new CylinderGeometry(0.38, 0.34, 0.22, 10, 1, true), 0xffc93d, { mat: toon(0xffc93d, { side: DoubleSide }) });
        at(cr, 0, 0.66, 0); add(cr);
        for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; add(at(part(new ConeGeometry(0.08, 0.2, 8), 0xffc93d, { thin: true }), Math.sin(a) * 0.34, 0.86, Math.cos(a) * 0.34)); }
        add(at(sph(0.06, 0xff3d4f, { thin: true }), 0, 0.68, 0.38));
        break;
      }
      case 'tiara': {
        const t = part(new TorusGeometry(0.4, 0.03, 8, 30, Math.PI), 0xffe08a, { thin: true }); at(t, 0, 0.5, 0.1); t.rotation.x = -0.4; add(t);
        add(at(part(new ConeGeometry(0.08, 0.22, 4), 0xffe08a, { thin: true }), 0, 0.72, 0.28));
        add(at(sph(0.05, 0xff6fb5, { thin: true }), 0, 0.62, 0.36));
        break;
      }
      case 'tricorn': {
        add(rot(part(new SphereGeometry(HR * 1.08, 32, 16, 0, Math.PI * 2, 0, 1.15), col), -0.1, 0, 0));
        const sh = new Shape();
        sh.moveTo(-0.95, 0); sh.quadraticCurveTo(-0.7, 0.62, 0, 0.7); sh.quadraticCurveTo(0.7, 0.62, 0.95, 0); sh.quadraticCurveTo(0, 0.18, -0.95, 0);
        const bic = part(new ExtrudeGeometry(sh, { depth: 0.12, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2 }), col);
        at(bic, 0, 0.42, -0.06); bic.rotation.x = -0.12; add(bic);
        add(at(scl(sph(0.1, 0xffffff, { thin: true }), 1, 1, 0.35), 0, 0.82, 0.1));
        const trim = part(new TorusGeometry(0.06, 0.02, 6, 12), 0xffc93d, { outline: false }); at(trim, 0, 0.82, 0.14); add(trim);
        break;
      }
      case 'santa': {
        const c1 = part(new ConeGeometry(0.58, 1.0, 28), 0xe8344a); at(c1, 0.12, 0.92, -0.08); c1.rotation.z = -0.45; add(c1);
        const rim = part(new TorusGeometry(0.58, 0.12, 12, 30), 0xffffff); rim.rotation.x = Math.PI / 2 - 0.1; rim.position.y = 0.48; add(rim);
        add(at(sph(0.14, 0xffffff), 0.62, 1.22, -0.08));
        break;
      }
      case 'fire': {
        add(rot(part(new SphereGeometry(HR * 1.14, 36, 18, 0, Math.PI * 2, 0, 1.3), col), -0.15, 0, 0));
        const br = part(new CylinderGeometry(0.85, 0.85, 0.05, 32), col); br.position.set(0, 0.28, -0.12); br.rotation.x = -0.18; add(br);
        add(at(scl(sph(0.13, 0xffc93d, { thin: true }), 1, 1.2, 0.35), 0, 0.62, 0.48));
        break;
      }
      case 'band': { const b = part(new TorusGeometry(HR * 1.05, 0.065, 10, 40), col, { thin: true }); b.rotation.x = Math.PI / 2 - 0.15; b.position.y = 0.3; add(b); break; }
      case 'mirror': {
        const b = part(new TorusGeometry(HR * 1.05, 0.04, 8, 40), 0x1d1648, { thin: true }); b.rotation.x = Math.PI / 2 - 0.2; b.position.y = 0.3; add(b);
        const m = part(new CylinderGeometry(0.15, 0.15, 0.04, 24), 0xdfe8ff); m.rotation.x = Math.PI / 2 - 0.2; m.position.set(0, 0.5, 0.52); add(m);
        break;
      }
      case 'turban': { const t = part(new TorusGeometry(HR * 0.95, 0.13, 12, 36), col); t.rotation.x = Math.PI / 2 - 0.1; t.position.y = 0.32; add(t); add(cap(col, 0.9, -0.1, 1.04)); break; }
      case 'veil': {
        const v = new Mesh(new SphereGeometry(HR * 1.2, 32, 18, Math.PI / 2 + 0.95, Math.PI * 2 - 1.9, 0.3, 2.5), new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, side: DoubleSide, depthWrite: false }));
        v.scale.set(1.05, 1.15, 1.1); v.position.y = -0.12;
        add(v);
        add(at(sph(0.08, 0xffc2dc, { thin: true }), -0.35, 0.5, 0.25));
        add(at(sph(0.07, 0xffffff, { thin: true }), -0.25, 0.56, 0.3));
        break;
      }
      case 'phones': {
        const b = part(new TorusGeometry(HR * 1.1, 0.05, 8, 30, Math.PI), col, { thin: true }); b.position.y = 0.05; add(b);
        for (const sx of [-1, 1]) { const e = part(new CylinderGeometry(0.2, 0.2, 0.14, 22), col); e.rotation.z = Math.PI / 2; e.position.set(sx * HR * 1.05, 0.02, 0); add(e); add(at(rot(part(new CylinderGeometry(0.12, 0.12, 0.02, 18), 0x38e8a0, { outline: false }), 0, 0, Math.PI / 2), sx * HR * 1.13, 0.02, 0)); }
        break;
      }
      case 'scarfHead': {
        add(rot(part(new SphereGeometry(HR * 1.1, 36, 18, 0, Math.PI * 2, 0, 1.3), col), -0.45, 0, 0));
        add(rot(at(part(new ConeGeometry(0.12, 0.3, 10), col, { thin: true }), 0, 0.15, -0.68), -2.2, 0, 0));
        break;
      }
      case 'beanie': {
        add(rot(part(new SphereGeometry(HR * 1.1, 36, 18, 0, Math.PI * 2, 0, 1.35), col), -0.15, 0, 0));
        const r = part(new TorusGeometry(HR * 0.98, 0.09, 10, 36), col); r.rotation.x = Math.PI / 2 - 0.15; r.position.y = 0.22; add(r);
        add(at(sph(0.15, 0xffffff), 0, 0.82, -0.05));
        break;
      }
      case 'hood': {
        const sp = part(new SphereGeometry(HR * 1.16, 40, 24, Math.PI / 2 + 0.95, Math.PI * 2 - 1.9, 0, 2.6), col);
        add(sp);
        add(part(new SphereGeometry(HR * 1.16, 40, 20, 0, Math.PI * 2, 0, 0.95), col));
        const ring = part(new TorusGeometry(HR * 0.86, 0.07, 10, 36), col); ring.position.z = 0.42; ring.scale.set(1, 1.1, 1); add(ring);
        const k = c.hood;
        for (const sx of [-1, 1]) {
          if (k === 'bear') { add(at(sph(0.2, col), sx * 0.5, 0.55, -0.05)); add(at(scl(sph(0.11, 0xf2d2a9, { outline: false }), 1, 1, 0.4), sx * 0.52, 0.56, 0.1)); }
          if (k === 'cat') add(rot(at(part(new ConeGeometry(0.2, 0.36, 4), col), sx * 0.38, 0.7, 0), 0, 0, -sx * 0.4));
          if (k === 'dog') add(rot(scl(at(sph(0.2, 0xa8692e), sx * 0.66, 0.1, 0), 0.7, 1.6, 0.5), 0, 0, sx * 0.3));
          if (k === 'frog') { add(at(sph(0.2, col), sx * 0.3, 0.68, 0.1)); add(at(sph(0.12, 0xffffff, { thin: true }), sx * 0.3, 0.72, 0.24)); add(at(sph(0.06, 0x1d1648, { outline: false }), sx * 0.3, 0.73, 0.34)); }
        }
        if (k === 'dino') for (let i = 0; i < 5; i++) { const sp2 = part(new ConeGeometry(0.11, 0.26, 4), 0xffc93d, { thin: true }); const a = 0.4 - i * 0.45; at(sp2, 0, Math.cos(a) * 0.72, Math.sin(a) * 0.72); sp2.rotation.x = a; add(sp2); }
        break;
      }
      default: break;
    }
    return g;
  }

  // ---- phụ kiện mặt ----
  function faceAccOf(list, c) {
    const g = new Group();
    const add = (o) => { g.add(o); return o; };
    const p = (lon, lat, r = HR) => onHead(lon, lat, r);
    for (const f of list || []) {
      if (f === 'glasses') {
        for (const sx of [-1, 1]) { const q = p(sx * EYE.lon, EYE.lat, HR * 1.12); const r = part(new TorusGeometry(0.19, 0.022, 8, 28), 0x1d1648, { outline: false }); at(r, q.x, q.y, q.z); r.lookAt(q.clone().multiplyScalar(3)); add(r); }
        add(at(part(new CylinderGeometry(0.018, 0.018, 0.2, 6), 0x1d1648, { outline: false }), 0, EYE.lat * HR * 0.95 + 0.02, HR * 1.1)).rotation.z = Math.PI / 2;
      }
      if (f === 'shades') {
        const b = part(new RoundedBoxGeometry(0.98, 0.24, 0.1, 3, 0.05), 0x14102e);
        const q = p(0, EYE.lat, HR * 1.06); at(b, 0, q.y, q.z); add(b);
        add(at(scl(sph(0.05, 0xffffff, { outline: false }), 1.8, 0.6, 0.3), -0.3, q.y + 0.04, q.z + 0.06));
      }
      if (f === 'mustache' || f === 'curly') {
        const col = c.hair === '#eeeef5' ? '#eeeef5' : '#2a1a14';
        for (const sx of [-1, 1]) {
          const q = p(sx * 0.12, -0.24, HR * 1.0);
          const m = scl(sph(0.1, col, { thin: true }), 1.5, 0.6, 0.6); at(m, q.x, q.y, q.z); m.rotation.z = sx * 0.3; add(m);
          if (f === 'curly') { const cu = part(new TorusGeometry(0.06, 0.025, 6, 12, Math.PI * 1.5), col, { thin: true }); at(cu, q.x + sx * 0.14, q.y + 0.05, q.z - 0.02); cu.rotation.z = sx > 0 ? 0 : Math.PI; add(cu); }
        }
      }
      if (f === 'beard') {
        const col = c.beard || '#eeeef5';
        const b = part(new SphereGeometry(HR * 0.82, 32, 18, Math.PI / 2 - 1.1, 2.2, 1.85, 1.05), col);
        b.position.set(0, -0.06, 0.12); add(b);
        add(scl(at(sph(0.26, col), 0, -0.62, 0.32), 1.2, 0.9, 0.7));
      }
      if (f === 'patch') {
        const q = p(EYE.lon, EYE.lat, HR * 1.06);
        const e = part(new CylinderGeometry(0.17, 0.17, 0.04, 20), 0x14102e, { thin: true }); at(e, q.x, q.y, q.z); e.lookAt(q.clone().multiplyScalar(3)); e.rotateX(Math.PI / 2); add(e);
      }
    }
    return g;
  }

  // ---- trang phục thân ----
  function buildOutfit() {
    clear(headAcc); clear(torsoWear); clear(capeG); clear(wear);
    const c = C, ex = c.extra || {};
    const photoOn = !!look.head;
    const hood = c.hat === 'hood';
    if (!photoOn || hood) headAcc.add(hairOf(c.hairStyle, c.hair));
    if (c.hat) headAcc.add(hatOf(c.hat, c));
    const faceList = (c.face || []).filter((f) => ['glasses', 'shades', 'mustache', 'curly', 'beard', 'patch'].includes(f));
    if (!photoOn) headAcc.add(faceAccOf(faceList, c));
    extras = c.face || [];
    noEyes = faceList.includes('shades') || photoOn;
    earsHuman.visible = !hood && !['helmet', 'fullhelmet', 'ninja', 'fire', 'phones', 'scarfHead', 'beanie'].includes(c.hat);
    const T = (o) => { torsoWear.add(o); return o; };
    const W = (o) => { wear.add(o); return o; };
    if (ex.dress) {
      W(at(part(lathe([[0.44, 0.12], [0.5, -0.05], [0.62, -0.3], [0.7, -0.45], [0, -0.45]], 36), ex.dress), 0, 0, 0));
      W(at(part(new TorusGeometry(0.68, 0.035, 8, 40), ex.dress, { thin: true }), 0, -0.45, 0)).rotation.x = Math.PI / 2;
    }
    if (ex.aodai) {
      for (const z of [1, -1]) {
        const f = part(new RoundedBoxGeometry(0.5, 0.62, 0.04, 3, 0.02), ex.aodai, { thin: true });
        at(f, 0, -0.36, z * 0.37); f.rotation.x = z * 0.28; T(f);
      }
      T(at(part(new CylinderGeometry(0.15, 0.16, 0.12, 18), ex.aodai, { thin: true }), 0, 0.72, 0));
    }
    if (ex.coat) {
      const coat = part(lathe([[0.34, 0.66], [0.44, 0.5], [0.49, 0.28], [0.51, 0.05], [0.54, -0.2], [0.57, -0.45]], 36, Math.PI / 2 + 0.42, Math.PI * 2 - 0.84), ex.coat, { outline: false, mat: toon(ex.coat, { side: DoubleSide }) });
      T(coat);
      for (const sx of [-1, 1]) T(rot(at(part(new BoxGeometry(0.16, 0.3, 0.03), ex.coat, { thin: true }), sx * 0.2, 0.52, 0.36), -0.5, 0, sx * 0.5));
    }
    if (ex.vest) for (const sx of [-1, 1]) T(rot(at(part(new BoxGeometry(0.2, 0.62, 0.05), ex.vest, { thin: true }), sx * 0.27, 0.32, 0.4), 0.05, sx * 0.4, 0));
    if (ex.apron) {
      T(at(part(new RoundedBoxGeometry(0.56, 0.78, 0.04, 3, 0.02), ex.apron), 0, 0.12, 0.45)).rotation.x = -0.1;
      const st = part(new TorusGeometry(0.3, 0.02, 6, 24, Math.PI), ex.apron, { thin: true }); st.position.set(0, 0.5, 0.28); st.rotation.x = -0.6; T(st);
    }
    if (ex.tie) { T(rot(at(part(new BoxGeometry(0.1, 0.36, 0.04), ex.tie, { thin: true }), 0, 0.46, 0.38), -0.2, 0, 0)); T(at(part(new ConeGeometry(0.07, 0.1, 4), ex.tie, { thin: true }), 0, 0.25, 0.43)).rotation.x = Math.PI; }
    if (ex.scarf) {
      const s = part(new TorusGeometry(0.2, 0.08, 10, 24), ex.scarf); s.rotation.x = Math.PI / 2; s.position.y = 0.68; T(s);
      T(rot(at(part(new RoundedBoxGeometry(0.13, 0.32, 0.05, 2, 0.02), ex.scarf, { thin: true }), 0.12, 0.5, 0.3), -0.35, 0, 0.25));
    }
    if (ex.collar) { const cl = part(new CylinderGeometry(0.45, 0.22, 0.4, 24, 1, true, Math.PI * 0.75, Math.PI * 1.5), ex.collar, { mat: toon(ex.collar, { side: DoubleSide }) }); cl.position.set(0, 0.86, -0.04); T(cl); }
    if (ex.pack) T(at(part(new RoundedBoxGeometry(0.56, 0.6, 0.28, 3, 0.1), ex.pack), 0, 0.32, -0.44));
    if (ex.box) { T(at(part(new RoundedBoxGeometry(0.82, 0.74, 0.5, 3, 0.06), ex.box), 0, 0.42, -0.62)); T(at(part(new BoxGeometry(0.4, 0.06, 0.02), 0xffffff, { outline: false }), 0, 0.5, -0.36)); }
    if (ex.belly) T(scl(at(sph(0.3, ex.belly, { outline: false }), 0, 0.2, 0.33), 1, 1.15, 0.45));
    if (ex.chain) { const ch = part(new TorusGeometry(0.24, 0.025, 8, 30), 0xffc93d, { thin: true }); ch.position.set(0, 0.56, 0.18); ch.rotation.x = Math.PI / 2 - 0.9; T(ch); T(at(sph(0.06, 0xffc93d, { thin: true }), 0, 0.37, 0.4)); }
    if (ex.star) {
      const st = new Shape();
      for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 - Math.PI / 2, rr = i % 2 ? 0.07 : 0.16; st[i ? 'lineTo' : 'moveTo'](Math.cos(a) * rr, -Math.sin(a) * rr); }
      T(at(part(new ExtrudeGeometry(st, { depth: 0.04, bevelEnabled: false }), ex.star, { thin: true }), 0, 0.36, 0.42));
    }
    if (ex.badge) T(at(part(new CylinderGeometry(0.07, 0.07, 0.03, 16), 0xffc93d, { thin: true }), 0.2, 0.42, 0.4)).rotation.x = Math.PI / 2;
    if (ex.whistle) T(at(part(new CapsuleGeometry(0.04, 0.08, 4, 8), 0xdfe3f5, { thin: true }), -0.16, 0.38, 0.42)).rotation.z = Math.PI / 2;
    if (ex.belt) { const b = part(new TorusGeometry(0.455, 0.045, 8, 40), ex.belt, { thin: true }); b.rotation.x = Math.PI / 2; b.position.y = 0.0; T(b); }
    if (ex.cape) {
      const cp = part(new CylinderGeometry(0.4, 0.7, 1.3, 24, 6, true, Math.PI * 0.6, Math.PI * 0.8), ex.cape, { mat: toon(ex.cape, { side: DoubleSide }) });
      cp.position.set(0, -0.62, 0.22);
      capeG.add(cp);
    }
  }

  // ---------- tai / sừng / đuôi theo tư thế ----------
  let curEars = null, curTail = null;
  function setEars(t) {
    if (t === curEars) return;
    curEars = t;
    clear(earG);
    const add = (o, x, y, z, rz = 0, rx = 0) => { o.position.set(x, y, z); o.rotation.set(rx, 0, rz); earG.add(o); };
    for (const sx of [-1, 1]) {
      if (t === 'dog') add(scl(sph(0.2, 0xc98b52), 0.75, 1.6, 0.45), sx * 0.66, 0, 0.05, sx * 0.25);
      if (t === 'cat') add(part(new ConeGeometry(0.2, 0.36, 4), 0xc98b52), sx * 0.38, 0.66, 0, -sx * 0.45);
      if (t === 'bunny') { const e = part(new CapsuleGeometry(0.11, 0.5, 6, 12), 0xffffff); add(e, sx * 0.22, 0.95, -0.05, -sx * 0.18); }
      if (t === 'mouse') add(part(new CylinderGeometry(0.26, 0.26, 0.06, 24), 0xb9b9c9), sx * 0.55, 0.5, -0.05, 0, Math.PI / 2);
      if (t === 'horns') add(part(new ConeGeometry(0.09, 0.32, 12), 0xf2f0e6), sx * 0.36, 0.66, 0, -sx * 0.55);
      if (t === 'antenna') { add(part(new CylinderGeometry(0.02, 0.02, 0.45, 6), 0x1d1648, { outline: false }), sx * 0.26, 0.82, 0, -sx * 0.35); add(sph(0.09, 0xffc93d), sx * 0.35, 1.02, 0); }
    }
  }
  function setTail(t) {
    if (t === curTail) return;
    curTail = t;
    clear(tailG);
    if (t === 'dog') { const tg = new CapsuleGeometry(0.08, 0.3, 6, 12); tg.translate(0, 0.2, 0); const g = part(tg, 0xc98b52); g.rotation.x = -0.7; tailG.add(g); }
    if (t === 'cat') tailG.add(part(new TubeGeometry(new CatmullRomCurve3([new Vector3(0, 0, 0), new Vector3(0, 0.15, -0.35), new Vector3(0, 0.55, -0.5), new Vector3(0.1, 0.8, -0.35)]), 24, 0.06, 8), 0xc98b52));
    if (t === 'pig') { const g = part(new TorusGeometry(0.1, 0.04, 8, 20, Math.PI * 1.7), 0xffa3b8); g.rotation.y = Math.PI / 2; tailG.add(g); }
    if (t === 'dino') { const g = part(new ConeGeometry(0.28, 1.0, 16), 0x2fbf71); g.rotation.x = -Math.PI / 2 - 0.5; g.position.set(0, -0.15, -0.35); tailG.add(g); }
  }

  // ---------- mặt ----------
  let lastFaceKey = '', pose = {};
  const EYE3D_HIDE = { happy: true, love: true };
  function applyFace() {
    const f = pose.face || 'neutral';
    const photoOn = photo.visible;
    const eyes3D = !photoOn && !noEyes && !EYE3D_HIDE[f];
    const wink = f === 'cheeky';
    for (const e of eyes) e.g.visible = eyes3D && !(wink && e.sx < 0);
    const key = `${f}|${eyes3D}|${photoOn}|${extras.join(',')}|${noEyes}`;
    if (key !== lastFaceKey) {
      lastFaceKey = key;
      faceMat.map = svgTexture(key, photoOn ? '' : faceTex(f, { eyes3D: eyes3D || noEyes, wink, extras }));
      faceMat.needsUpdate = true;
    }
    faceMesh.visible = !photoOn;
    nose.visible = !photoOn;
    if (photoOn && f !== 'neutral' && FACE_EMO[f]) {
      emote.material.map = emojiTexture(FACE_EMO[f]);
      emote.material.needsUpdate = true;
      emote.visible = true;
    } else emote.visible = false;
  }

  // ---------- lò xo ----------
  const springs = new Map();
  function spring(name, target, k = 0.16, damp = 0.72) {
    let s = springs.get(name);
    if (!s) { s = { v: 0, x: target }; springs.set(name, s); }
    s.v = (s.v + (target - s.x) * k) * damp;
    s.x += s.v;
    return s.x;
  }
  const vel = (name) => springs.get(name)?.v || 0;

  let fx = null, lastFxSeq = null, popAt = 0;
  function setPose(p) {
    const changed = JSON.stringify({ ...pose, fx: 0 }) !== JSON.stringify({ ...p, fx: 0 });
    pose = { ...p };
    if (changed) popAt = performance.now();
    setEars(p.ears || null);
    setTail(p.tail || null);
    for (const s of ['L', 'R']) {
      const id = p['prop' + s];
      const spr = J['prop' + s];
      if (id && PROP_EMO[id]) { spr.material.map = emojiTexture(PROP_EMO[id]); spr.material.needsUpdate = true; spr.visible = true; } else spr.visible = false;
    }
    if (p.fx && p.fx.seq !== lastFxSeq) {
      lastFxSeq = p.fx.seq;
      if (Date.now() - (p.fx.at || 0) < 4000) fx = { name: p.fx.name, t0: performance.now() };
    }
    applyFace();
  }
  function parseT(t) {
    const out = { x: 0, y: 0, r: 0 };
    if (!t) return out;
    const tr = /translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(t);
    if (tr) { out.x = +tr[1]; out.y = +tr[2]; }
    const ro = /rotate\(([-\d.]+)deg\)/.exec(t);
    if (ro) out.r = +ro[1];
    return out;
  }

  // dựng lại ống tay chân theo vị trí khớp
  const vA = new Vector3(), vB = new Vector3(), vC = new Vector3(), vCtl = new Vector3(), vMid = new Vector3();
  function wpos(obj, out) { out.setFromMatrixPosition(obj.matrixWorld); return fig.worldToLocal(out); }
  function updateLimb(key, a, b, c, coverKey) {
    vMid.copy(a).add(c).multiplyScalar(0.5);
    vCtl.copy(b).multiplyScalar(2).sub(vMid); // điểm điều khiển để đường cong đi qua khớp
    vCtl.lerp(b, 0.25); // giảm độ "bung" khi gập mạnh
    const curve = new QuadraticBezierCurve3(a.clone(), vCtl.clone(), c.clone());
    const L = limbs[key];
    const geo = new TubeGeometry(curve, 16, L.r, 10);
    L.m.geometry.dispose();
    L.m.geometry = geo; L.o.geometry = geo;
    const cv = limbs[coverKey];
    if (cv.len < 0.01) { cv.m.visible = cv.o.visible = false; return; }
    cv.m.visible = cv.o.visible = true;
    const g2 = new TubeGeometry(new SubCurve(curve, 0, Math.min(1, cv.len)), 10, cv.r, 10);
    cv.m.geometry.dispose();
    cv.m.geometry = g2; cv.o.geometry = g2;
  }

  // ---------- vòng lặp vẽ ----------
  let w = 0, h = 0, alive = true, raf = 0, blinkAt = performance.now() + 2200, lookAt = 0, lookX = 0, lookY = 0;
  const ro = new ResizeObserver(() => resize());
  ro.observe(container);
  function resize() {
    const r = container.getBoundingClientRect();
    if (!r.width || !r.height) return;
    if (r.width === w && r.height === h) return;
    w = r.width; h = r.height;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const minA = STAGE ? 1.25 : 0.75;
    camera.position.z = w / h < minA ? CAM.z / Math.max(0.5, (w / h) / minA) : CAM.z;
    camera.updateProjectionMatrix();
  }

  function frame(now) {
    if (!alive) return;
    if (!canvas.isConnected) { dispose(); return; }
    raf = requestAnimationFrame(frame);
    resize();
    const t = now / 1000;
    const b = BODY[pose.body] || BODY.stand;
    const T = parseT(b.t);
    const loop = pose.loop;
    const sin = (f, ph = 0) => Math.sin(t * Math.PI * 2 * f + ph);

    // ----- thân -----
    const B3 = BODY3D[pose.body] || {};
    let hx = B3.x ?? T.x * PX, hy = B3.y ?? HIP_Y - T.y * PX, hrz = -T.r * D2R, hry = 0, hrx = 0;
    const crawl = pose.body === 'crawl';
    if (crawl) { hrz = 0; hrx = 68 * D2R; hry = -1.0; }
    if (pose.body === 'lie') { hry = 0.25; }
    let bob = 0;
    if (!loop && !fx) bob = Math.abs(sin(0.55)) * 0.025; // nhún nhẹ khi đứng yên
    if (loop === 'walk') { bob = Math.abs(sin(1.3)) * 0.1; hrz += sin(1.3) * 0.08; }
    if (loop === 'run') { bob = Math.abs(sin(2.4)) * 0.22; hrx += 0.25; }
    if (loop === 'butt') { hx += sin(2.9) * 0.14; hrz += sin(2.9) * 0.16; hry += sin(2.9) * 0.2; }
    if (loop === 'dance') { hrz += sin(1) * 0.2; hx += sin(1) * 0.12; bob = Math.abs(sin(2)) * 0.12; }
    if (loop === 'shiver') hx += sin(11) * 0.03;
    if (loop === 'row') hrz += sin(0.5) * 0.08;
    if (loop === 'flap') bob = Math.abs(sin(3)) * 0.06;
    let fxY = 0, fxSpin = 0, fxFall = 0, sq = 0;
    if (fx) {
      const e = (now - fx.t0) / 1000;
      if (fx.name === 'jump') { if (e < 0.95) { const k = Math.min(1, Math.max(0, (e - 0.12) / 0.7)); fxY = Math.sin(k * Math.PI) * 1.2; sq = e < 0.12 ? -0.18 * Math.sin((e / 0.12) * Math.PI) : (k >= 1 ? -0.15 * Math.sin(((e - 0.82) / 0.13) * Math.PI) : 0.1 * Math.sin(k * Math.PI)); } else fx = null; }
      else if (fx.name === 'spin') { if (e < 0.9) { fxSpin = (1 - Math.pow(1 - e / 0.9, 3)) * Math.PI * 2; fxY = Math.sin((e / 0.9) * Math.PI) * 0.3; } else fx = null; }
      else if (fx.name === 'fall') { if (e < 1.8) fxFall = Math.min(1, e / 0.35) * (e > 1.4 ? (1.8 - e) / 0.4 : 1) * 1.45; else fx = null; }
      else if (fx.name === 'bounce') { if (e < 1.1) { const ph = e * Math.PI * 3.6; fxY = Math.abs(Math.sin(ph)) * 0.32 * (1 - e / 1.1); sq = (Math.abs(Math.sin(ph)) < 0.3 ? -0.14 : 0.06) * (1 - e / 1.1); } else fx = null; }
    }
    fig.rotation.y = spring('turn', TURN[pose.turn] ?? 0, 0.12, 0.74);
    const yS = spring('hy', hy + bob, 0.18, 0.7);
    hips.position.set(spring('hx', hx), yS + fxY, 0);
    hips.rotation.set(spring('hrx', hrx), spring('hry', hry) + fxSpin, spring('hrz', hrz) + fxFall);
    if (fxFall) hips.position.x += Math.sin(fxFall) * 0.75;
    // co giãn: theo vận tốc dọc + "pop" khi đổi tư thế
    const pop = popAt ? Math.exp(-(now - popAt) / 160) * Math.sin((now - popAt) / 45) * 0.07 : 0;
    const st = Math.max(-0.2, Math.min(0.2, vel('hy') * 1.6 + sq + pop));
    const sS = spring('sq', st, 0.3, 0.6);
    squash.scale.set(1 - sS * 0.6, 1 + sS, 1 - sS * 0.6);

    let trz = 0, trx = 0;
    const tt = parseT(b.torso);
    trz = -tt.r * D2R;
    if (pose.body === 'bow') trx = 0.85;
    if (loop === 'run') trx += 0.15;
    const breathe = loop ? 1 : 1 + sin(0.4) * 0.02;
    torso.rotation.set(spring('trx', trx, 0.12, 0.74), 0, spring('trz', trz, 0.12, 0.74));
    torso.scale.set(1 / breathe, breathe, 1 / breathe);
    stool.visible = !!b.stool;
    capeG.rotation.x = spring('cape', 0.15 + Math.min(0.9, Math.abs(vel('hx')) * 6 + (loop === 'run' ? 0.8 : 0) + (fxY ? 0.5 : 0)) + sin(0.7) * 0.05, 0.1, 0.8);

    // ----- đầu: cổ theo tư thế, đầu trễ nhịp tạo độ lắc lư -----
    let nz = -((HEAD[pose.head] ?? 0) + (crawl ? 0 : b.head || 0)) * D2R, nx = crawl ? -1.0 : 0, ny = 0;
    if (pose.head === 'up') nx = -0.38;
    if (pose.head === 'down' || (b.headDown && (!pose.head || pose.head === 'center'))) nx = 0.38;
    if (pose.body === 'bow') nx -= 0.3;
    if (!loop) { nz += sin(0.3) * 0.07; ny += sin(0.17) * 0.12; }
    if (loop === 'nod') nx += sin(2.5) * 0.3;
    if (loop === 'shake') ny += sin(2.2) * 0.6;
    if (loop === 'dance') nz += sin(2) * 0.18;
    if (loop === 'walk') nz += sin(1.3) * 0.06;
    neck.rotation.set(spring('nx', nx, 0.14, 0.72), spring('ny', ny, 0.14, 0.72), spring('nz', nz, 0.14, 0.72));
    // đầu lúc lắc như lò xo theo chuyển động thân
    headIn.rotation.set(spring('jx', -vel('hy') * 2.2 + vel('trx') * 2, 0.22, 0.62), 0, spring('jz', vel('hx') * 2.5 - vel('hrz') * 1.6, 0.22, 0.62));

    // ----- tay -----
    for (const s of ['L', 'R']) {
      const sign = s === 'L' ? 1 : -1;
      const opt = pose['arm' + s] || 'down';
      const i = s === 'L' ? 0 : 1;
      let uz, fz, ux = 0, fxx = 0;
      if (crawl && opt === 'down') { uz = 6 * sign; fz = 0; ux = -68; }
      else if (b.absArms && opt === 'down') { uz = b.absArms[i][0]; fz = b.absArms[i][1]; }
      else {
        const a = ARM_Z[opt] || ARM[opt] || ARM.down;
        uz = a[0] * sign; fz = a[1] * sign;
        const ax = ARM_X[opt];
        if (ax) { ux = ax[0]; fxx = ax[1]; }
      }
      if (opt === 'down' && !loop && !crawl) uz += 6 * sign + sin(0.55, i) * 3 * sign;
      const ph = s === 'L' ? 0 : Math.PI;
      if (loop === 'walk') ux += sin(1.3, ph) * 32;
      if (loop === 'run') { ux += sin(2.4, ph) * 60; fxx -= 70; }
      if (loop === 'dance') { uz += (sin(2, ph) * 30 + 30) * sign; fxx -= 30; }
      if (loop === 'flap') { uz += (0.5 + 0.5 * sin(3)) * 75 * sign; fz -= sin(3) * 20 * sign; }
      if (loop === 'swim') ux += ((t * 360 * 0.9 + (s === 'L' ? 0 : 180)) % 360) * -1;
      if (loop === 'clap') { ux += -72; uz += (s === 'L' ? -1 : 1) * (14 + sin(3.5) * 14); fxx -= 20; }
      if (loop === 'punch') { const pp = Math.max(0, sin(2, ph)); ux += -88 * pp; fxx += -80 * (1 - pp); }
      if (loop === 'row') { ux += sin(1) * 40 - 30; fxx -= 40; }
      if (loop === 'shiver') uz += sin(9, ph) * 4;
      if (opt === 'wave') fz += sin(2.8) * 32 * sign;
      J['arm' + s].rotation.set(spring('ux' + s, ux * D2R, 0.15, 0.7), 0, spring('uz' + s, -uz * D2R, 0.15, 0.7));
      // khuỷu tay trễ nhịp hơn chút -> tay dẻo như sợi mì
      J['fore' + s].rotation.set(spring('fx' + s, fxx * D2R, 0.11, 0.72), 0, spring('fz' + s, -fz * D2R, 0.11, 0.72));
    }
    // ----- chân -----
    for (const s of ['L', 'R']) {
      const sign = s === 'L' ? 1 : -1;
      const opt = pose['leg' + s] || 'down';
      const i = s === 'L' ? 0 : 1;
      let lz, kz, lx = 0, kx = 0;
      if (crawl && opt === 'down') { lx = -66; kx = 95; lz = 6 * sign; kz = 0; }
      else if (B3.legs && opt === 'down') { const L3 = B3.legs[i]; lx = L3[0]; kx = L3[1]; lz = (L3[2] || 0) * sign; kz = (L3[3] || 0) * sign; }
      else if (b.absLegs && opt === 'down') { lz = b.absLegs[i][0]; kz = b.absLegs[i][1]; }
      else {
        const lg = b.legs ? b.legs[i] : LEG[opt] || LEG.down;
        lz = lg[0] * sign; kz = lg[1] * sign;
      }
      if (opt === 'kick') { lx = -65; lz *= 0.5; }
      if (opt === 'knee') { lx = -70; kx = 100; lz = 8 * sign; kz = 0; }
      const ph = s === 'L' ? Math.PI : 0;
      if (loop === 'walk') { lx += sin(1.3, ph) * 32; kx += Math.max(0, sin(1.3, ph + 1.2)) * 40; }
      if (loop === 'run') { lx += sin(2.4, ph) * 58; kx += Math.max(0, sin(2.4, ph + 1.2)) * 90; }
      if (loop === 'dance') { kx += Math.max(0, sin(2, ph)) * 40; lx -= Math.max(0, sin(2, ph)) * 25; }
      if (loop === 'butt') kx += 20;
      J['leg' + s].rotation.set(spring('lx' + s, lx * D2R, 0.15, 0.7), 0, spring('lz' + s, -lz * D2R, 0.15, 0.7));
      J['shin' + s].rotation.set(spring('kx' + s, kx * D2R, 0.12, 0.72), 0, spring('kz' + s, -kz * D2R, 0.12, 0.72));
      // bàn chân luôn gần song song mặt đất khi đứng
      const ankleTarget = pose.body === 'crawl' || pose.body === 'lie' || pose.body === 'handstand' ? 0 : -(lx + kx) * D2R * 0.6;
      J['ankle' + s].rotation.x = spring('ax' + s, ankleTarget, 0.15, 0.7);
    }

    fig.updateMatrixWorld(true);
    for (const s of ['L', 'R']) {
      updateLimb('arm' + s, wpos(J['arm' + s], vA), wpos(J['fore' + s], vB), wpos(J['wrist' + s], vC), 'sleeve' + s);
      updateLimb('leg' + s, wpos(J['leg' + s], vA), wpos(J['shin' + s], vB), wpos(J['ankle' + s], vC), 'pant' + s);
    }

    tailG.rotation.set(crawl ? -0.4 : 0, sin(2.2) * 0.5, 0);
    // ----- mắt: chớp, mí, con ngươi đảo lung tung -----
    const f = pose.face || 'neutral';
    if (now > lookAt) { lookAt = now + 700 + Math.random() * 1800; lookX = (Math.random() - 0.5) * 0.9; lookY = (Math.random() - 0.5) * 0.6; }
    const LID = { neutral: 0.42, angry: 0.52, sad: 0.4, surprised: 0.05, scared: 0.08, sleepy: 0.72, cheeky: 0.38 }[f] ?? 0.4;
    const PUP = { surprised: 0.75, scared: 0.55, angry: 0.9 }[f] ?? 1;
    const ESC = { surprised: 1.18, scared: 1.12 }[f] ?? 1;
    const blinkK = blinkTimer(now);
    for (const e of eyes) {
      if (!e.g.visible) continue;
      // mắt "đụt": mỗi con ngươi lệch một chút theo hướng riêng
      let tx = lookX * 0.5 + (e.sx < 0 ? 0.18 : -0.08), ty = lookY * 0.4 + (e.sx < 0 ? -0.05 : 0.12);
      if (f === 'sad') ty = -0.45;
      if (f === 'scared') { tx = Math.sin(now / 37 + e.sx) * 0.2; ty = 0.1; }
      if (f === 'angry') { tx = -e.sx * 0.25; ty = 0; }
      if (f === 'surprised') { tx *= 0.3; ty = 0.05; }
      e.px = spring('px' + e.sx, tx, 0.12, 0.6) + vel('nz') * 4 * e.sx;
      e.py = spring('py' + e.sx, ty, 0.12, 0.6) - vel('hy') * 3;
      const rr = EYE.r * 0.5;
      const ox = Math.max(-1, Math.min(1, e.px)) * rr, oy = Math.max(-1, Math.min(1, e.py)) * rr;
      e.pupil.position.set(ox, oy, Math.sqrt(Math.max(0, EYE.r * EYE.r - ox * ox - oy * oy)) * 0.98);
      e.pupil.scale.set(PUP, PUP, 0.5);
      e.shine.position.set(ox + EYE.r * 0.12, oy + EYE.r * 0.14, e.pupil.position.z + 0.012);
      const es = spring('es' + e.sx, ESC, 0.2, 0.6);
      e.inner.scale.set(es, es * 1.08, 0.62);
      const closed = Math.max(LID, blinkK);
      // nghiêng mí: giận -> trong thấp, buồn -> ngoài thấp
      const tilt = f === 'angry' ? -e.sx * 0.45 : f === 'sad' ? e.sx * 0.35 : f === 'neutral' ? e.sx * 0.08 : 0;
      e.lidPivot.rotation.set(-Math.PI / 2 + closed * Math.PI * 0.95, 0, spring('lt' + e.sx, tilt, 0.2, 0.6));
    }
    const ah = headAcc.getObjectByName('ahoge');
    if (ah) ah.rotation.x = spring('ah', sin(0.8) * 0.2 - vel('hy') * 6, 0.1, 0.8);
    shadow.position.x = hips.position.x * 0.8;
    shadow.scale.setScalar(Math.max(0.45, 1 - (fxY + hips.position.y - HIP_Y > 0 ? fxY * 0.35 : 0)));

    STAGE?.update(t, now);
    renderer.render(scene, camera);
  }
  let blinkStart = 0;
  function blinkTimer(now) {
    if (!blinkStart && now > blinkAt) { blinkStart = now; blinkAt = now + 2200 + Math.random() * 2600; }
    if (blinkStart) {
      const e = (now - blinkStart) / 150;
      if (e >= 1) { blinkStart = 0; return 0; }
      return Math.sin(e * Math.PI);
    }
    return 0;
  }
  raf = requestAnimationFrame(frame);
  const cheer = () => { if (STAGE) STAGE.cheerUntil = performance.now() + 1600; };

  function dispose() {
    alive = false;
    cancelAnimationFrame(raf);
    ro.disconnect();
    scene.traverse((o) => { if (o.isMesh && !SHARED.has(o.material)) { o.geometry?.dispose(); o.material?.dispose(); } });
    renderer.dispose();
    renderer.forceContextLoss?.();
  }

  setLook({ skin: 'tron' });
  setPose({ body: 'stand', head: 'center', face: 'neutral', armL: 'down', armR: 'down', legL: 'down', legR: 'down' });
  return { setPose, setLook, el: canvas, dispose, cheer, is3D: true };
}
