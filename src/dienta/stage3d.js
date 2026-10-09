// Sân khấu 3D: sàn gỗ, rèm nhung, đèn rọi, khán giả.
import { Group, Mesh, Sprite, SpriteMaterial, MeshBasicMaterial, MeshStandardMaterial, CanvasTexture, Color, DoubleSide, SRGBColorSpace, AdditiveBlending, RepeatWrapping, Object3D, SpotLight, Shape, SphereGeometry, CapsuleGeometry, ConeGeometry, CylinderGeometry, TorusGeometry, BoxGeometry, CircleGeometry, PlaneGeometry, ExtrudeGeometry } from 'three';
function woodTexture() {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 512;
  const x = c.getContext('2d');
  const boards = 12, bw = c.width / boards;
  const tones = ['#d9944f', '#cf8846', '#e0a05a', '#c98240', '#d68f4c'];
  for (let i = 0; i < boards; i++) {
    x.fillStyle = tones[(i * 7) % tones.length];
    x.fillRect(i * bw, 0, bw, c.height);
    // vân gỗ
    x.strokeStyle = 'rgba(120,60,20,.18)';
    x.lineWidth = 2;
    for (let k = 0; k < 7; k++) {
      x.beginPath();
      const ox = i * bw + 8 + Math.random() * (bw - 16);
      x.moveTo(ox, 0);
      for (let y = 0; y <= c.height; y += 32) x.lineTo(ox + Math.sin(y / 60 + k) * 4, y);
      x.stroke();
    }
    // khe ván + đầu ván so le
    x.fillStyle = 'rgba(70,30,10,.55)';
    x.fillRect(i * bw, 0, 3, c.height);
    const cut = ((i * 173) % c.height);
    x.fillRect(i * bw, cut, bw, 3);
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.wrapS = t.wrapT = RepeatWrapping;
  t.anisotropy = 4;
  return t;
}
function wallTexture() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 512;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(256, 200, 40, 256, 256, 380);
  g.addColorStop(0, '#6d48d6');
  g.addColorStop(0.55, '#3f2196');
  g.addColorStop(1, '#1d0f52');
  x.fillStyle = g;
  x.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 90; i++) {
    x.fillStyle = Math.random() < 0.25 ? '#ffe9a8' : '#ffffff';
    x.globalAlpha = 0.4 + Math.random() * 0.6;
    x.beginPath();
    x.arc(Math.random() * 512, Math.random() * 420, Math.random() * 2 + 0.6, 0, Math.PI * 2);
    x.fill();
  }
  x.globalAlpha = 1;
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}
function glowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(32, 32, 2, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,240,190,1)');
  g.addColorStop(0.3, 'rgba(255,210,120,.6)');
  g.addColorStop(1, 'rgba(255,200,100,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 64, 64);
  return new CanvasTexture(c);
}
function curtainGeo(w, h, folds) {
  const g = new PlaneGeometry(w, h, folds * 10, 1);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const u = (pos.getX(i) + w / 2) / w;
    pos.setZ(i, Math.sin(u * folds * Math.PI * 2) * 0.16);
  }
  g.computeVertexNormals();
  return g;
}
function starShape(r1 = 0.32, r2 = 0.14) {
  const st = new Shape();
  for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 - Math.PI / 2, rr = i % 2 ? r2 : r1; st[i ? 'lineTo' : 'moveTo'](Math.cos(a) * rr, -Math.sin(a) * rr); }
  return st;
}
export function buildStage(scene) {
  const st = { hangs: [], crowd: [], beams: [], bulbs: [] };
  scene.background = new Color(0x160c2e);
  // sàn sân khấu
  const wood = woodTexture();
  wood.repeat.set(1.6, 1.2);
  const floorTop = new Mesh(new PlaneGeometry(14, 7.5), new MeshStandardMaterial({ map: wood, roughness: 0.55 }));
  floorTop.rotation.x = -Math.PI / 2;
  floorTop.position.set(0, 0, -0.4);
  floorTop.receiveShadow = true;
  scene.add(floorTop);
  const lip = new Mesh(new BoxGeometry(14, 0.55, 0.3), new MeshStandardMaterial({ color: 0x7a3d17, roughness: 0.6 }));
  lip.position.set(0, -0.28, 3.35);
  scene.add(lip);
  const trim = new Mesh(new BoxGeometry(14, 0.08, 0.34), new MeshStandardMaterial({ color: 0xffc93d, roughness: 0.3, metalness: 0.4 }));
  trim.position.set(0, 0.0, 3.36);
  scene.add(trim);
  const pit = new Mesh(new PlaneGeometry(40, 20), new MeshStandardMaterial({ color: 0x0d0720 }));
  pit.rotation.x = -Math.PI / 2;
  pit.position.set(0, -0.55, 10);
  scene.add(pit);
  // tường hậu đài
  const wall = new Mesh(new PlaneGeometry(16, 10), new MeshStandardMaterial({ map: wallTexture(), roughness: 0.9, emissive: 0x1a0d3a, emissiveIntensity: 0.5 }));
  wall.position.set(0, 4.2, -4.1);
  wall.receiveShadow = true;
  scene.add(wall);
  // trăng & sao treo dây
  const hang = (mesh, x, y, z, len) => {
    const pivot = new Group();
    pivot.position.set(x, y + len, z);
    const str = new Mesh(new CylinderGeometry(0.012, 0.012, len, 4), new MeshBasicMaterial({ color: 0xeeeeff, transparent: true, opacity: 0.6 }));
    str.position.y = -len / 2;
    pivot.add(str);
    mesh.position.y = -len;
    pivot.add(mesh);
    pivot.userData.ph = Math.random() * 6;
    scene.add(pivot);
    st.hangs.push(pivot);
  };
  const moonS = new Shape();
  moonS.absarc(0, 0, 0.55, 0, Math.PI * 2, false);
  const hole = new Shape();
  hole.absarc(0.24, 0.16, 0.48, 0, Math.PI * 2, true);
  moonS.holes.push(hole);
  const moon = new Mesh(new ExtrudeGeometry(moonS, { depth: 0.12, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03 }), new MeshStandardMaterial({ color: 0xffd76a, emissive: 0xffb93d, emissiveIntensity: 0.6, roughness: 0.4 }));
  hang(moon, -3.4, 3.4, -3.3, 1.6);
  const starMat = new MeshStandardMaterial({ color: 0xffe27a, emissive: 0xffc93d, emissiveIntensity: 0.5, roughness: 0.4 });
  for (const [x, y, len, sc] of [[-1.8, 4.1, 0.9, 0.8], [2.2, 3.9, 1.2, 1], [3.6, 4.3, 0.7, 0.7], [-4.6, 4.4, 0.6, 0.6]]) {
    const m = new Mesh(new ExtrudeGeometry(starShape(), { depth: 0.08, bevelEnabled: true, bevelSize: 0.02, bevelThickness: 0.02 }), starMat);
    m.scale.setScalar(sc);
    hang(m, x, y, -3.4, len);
  }
  // màn nhung hai bên (xếp nếp) + dây buộc vàng
  const velvet = new MeshStandardMaterial({ color: 0xb3152c, roughness: 0.75, side: DoubleSide });
  for (const sx of [-1, 1]) {
    const c = new Mesh(curtainGeo(3.2, 8, 7), velvet);
    c.position.set(sx * 5.6, 4, 0.6);
    c.rotation.y = sx * -0.25;
    c.castShadow = true;
    scene.add(c);
    const tie = new Mesh(new TorusGeometry(0.42, 0.07, 10, 24), new MeshStandardMaterial({ color: 0xffc93d, roughness: 0.3, metalness: 0.5 }));
    tie.position.set(sx * 4.35, 1.9, 0.75);
    tie.rotation.set(Math.PI / 2, 0, sx * 0.3);
    tie.scale.set(1, 1, 0.6);
    scene.add(tie);
  }
  // rèm diềm phía trên
  const val = new Mesh(curtainGeo(15, 1.5, 22), velvet);
  val.position.set(0, 5.25, 1.6);
  scene.add(val);
  const fringe = new Mesh(new BoxGeometry(15, 0.1, 0.12), new MeshStandardMaterial({ color: 0xffc93d, emissive: 0x8a5a00, emissiveIntensity: 0.3, metalness: 0.4, roughness: 0.3 }));
  fringe.position.set(0, 4.5, 1.7);
  scene.add(fringe);
  // đèn chân sân khấu
  const glow = glowTexture();
  for (let i = 0; i < 9; i++) {
    const x = -4.4 + i * 1.1;
    const bulb = new Mesh(new SphereGeometry(0.09, 12, 8), new MeshBasicMaterial({ color: 0xfff3b0 }));
    bulb.position.set(x, 0.08, 3.1);
    scene.add(bulb);
    const g = new Sprite(new SpriteMaterial({ map: glow, transparent: true, blending: AdditiveBlending, depthWrite: false }));
    g.scale.set(0.9, 0.9, 1);
    g.position.copy(bulb.position);
    scene.add(g);
    st.bulbs.push(g);
  }
  // đèn rọi + vệt sáng
  const target = new Object3D();
  target.position.set(0, 1.2, 0);
  scene.add(target);
  for (const sx of [-1, 1]) {
    const sp = new SpotLight(0xfff1cf, 1.1, 0, 0.36, 0.55, 0);
    sp.position.set(sx * 3.6, 7.2, 3.2);
    sp.target = target;
    if (sx < 0) {
      sp.castShadow = true;
      sp.shadow.mapSize.set(1024, 1024);
      sp.shadow.bias = -0.0004;
    }
    scene.add(sp);
    const len = 8.2;
    const beam = new Mesh(new ConeGeometry(1.5, len, 32, 1, true), new MeshBasicMaterial({ color: 0xfff1cf, transparent: true, opacity: 0.075, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }));
    beam.geometry.translate(0, -len / 2, 0);
    beam.position.copy(sp.position);
    beam.lookAt(target.position);
    beam.rotateX(-Math.PI / 2);
    scene.add(beam);
    st.beams.push(beam);
  }
  // vũng sáng trên sàn
  const pool = new Mesh(new CircleGeometry(1.7, 40), new MeshBasicMaterial({ map: glow, transparent: true, opacity: 0.55, blending: AdditiveBlending, depthWrite: false }));
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(0, 0.012, 0.1);
  scene.add(pool);
  // khán giả phía trước
  const crowdMat = new MeshStandardMaterial({ color: 0x140a2e, roughness: 1 });
  for (let i = 0; i < 11; i++) {
    const g = new Group();
    const sc = 0.85 + Math.random() * 0.35;
    const bodyM = new Mesh(new CapsuleGeometry(0.42, 0.5, 4, 12), crowdMat);
    bodyM.position.y = 0.2;
    g.add(bodyM);
    const headM = new Mesh(new SphereGeometry(0.34, 16, 12), crowdMat);
    headM.position.y = 1.0;
    g.add(headM);
    g.scale.setScalar(sc);
    g.position.set(-5.5 + i * 1.1 + (Math.random() - 0.5) * 0.3, -1.0 + (i % 2) * 0.12, 4.4 + (i % 2) * 0.35);
    g.userData.base = g.position.y;
    g.userData.ph = Math.random() * 6;
    scene.add(g);
    st.crowd.push(g);
  }
  st.cheerUntil = 0;
  st.update = (t, now) => {
    for (const h of st.hangs) h.rotation.z = Math.sin(t * 1.1 + h.userData.ph) * 0.08;
    st.beams.forEach((b, i) => { b.material.opacity = 0.065 + Math.sin(t * 1.3 + i) * 0.015; });
    st.bulbs.forEach((b, i) => { b.material.opacity = 0.75 + Math.sin(t * 3 + i * 1.7) * 0.25; });
    const cheering = now < st.cheerUntil;
    for (const c of st.crowd) {
      const jump = cheering ? Math.abs(Math.sin(t * 9 + c.userData.ph)) * 0.35 : Math.sin(t * 1.4 + c.userData.ph) * 0.02;
      c.position.y = c.userData.base + jump;
    }
  };
  return st;
}

