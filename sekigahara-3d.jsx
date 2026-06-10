import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/* ============================================================
   決戦・関ヶ原 ― TV特番風 3D俯瞰シミュレーション
   地形 / 軍勢 / 進軍矢印 / 朝霧 / シネマティックカメラ
   ============================================================ */

// ---------- 色 ----------
const EAST = 0xd6453c; // 東軍(緋)
const WEST = 0x3f6fae; // 西軍(瑠璃)
const GOLD = 0xc9a227;

// ---------- 地形高さ関数 ----------
function hill(x, z, cx, cz, r, h) {
  const dx = x - cx, dz = z - cz;
  return h * Math.exp(-(dx * dx + dz * dz) / (r * r));
}
function terrainH(x, z) {
  let h = 0;
  // 伊吹山系(北縁) / 南の山並み / 西の尾根
  h += 26 * Math.exp(-((z + 100) * (z + 100)) / (38 * 38)) * (1 + 0.25 * Math.sin(x * 0.045));
  h += 20 * Math.exp(-((z - 105) * (z - 105)) / (42 * 42)) * (1 + 0.2 * Math.cos(x * 0.05));
  h += 15 * Math.exp(-((x + 112) * (x + 112)) / (32 * 32));
  // 名のある山々
  h += hill(x, z, -52, 58, 19, 13);  // 松尾山
  h += hill(x, z, -64, -44, 13, 7);  // 笹尾山
  h += hill(x, z, 72, 62, 27, 17);   // 南宮山
  h += hill(x, z, 76, -12, 13, 5);   // 桃配山
  h += hill(x, z, -38, 16, 11, 3);   // 天満山
  // 微地形
  h += 0.55 * Math.sin(x * 0.31) * Math.cos(z * 0.27) + 0.3 * Math.sin(x * 0.11 + z * 0.13);
  return h;
}

// ---------- ユーティリティ ----------
const easeIO = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp01 = (t) => Math.max(0, Math.min(1, t));
const JFONT = '"Hiragino Mincho ProN","Yu Mincho","BIZ UDMincho","Noto Serif JP",serif';

// ---------- 部隊データ ----------
const UNITS = [
  // 西軍
  { id: "ishida",  name: "石田三成",  kanji: "石", side: "west", pos: [-62, -40], n: 36, face: 0.9,  big: true },
  { id: "shimazu", name: "島津義弘",  kanji: "島", side: "west", pos: [-46, -24], n: 22, face: 1.2 },
  { id: "konishi", name: "小西行長",  kanji: "小", side: "west", pos: [-41, -8],  n: 26, face: 1.4 },
  { id: "ukita",   name: "宇喜多秀家", kanji: "宇", side: "west", pos: [-35, 13],  n: 40, face: 1.5 },
  { id: "otani",   name: "大谷吉継",  kanji: "大", side: "west", pos: [-43, 33],  n: 22, face: 1.8 },
  { id: "kobaya",  name: "小早川秀秋", kanji: "小早川", side: "turn", pos: [-50, 54], n: 38, face: -0.6, big: true },
  { id: "mori",    name: "毛利秀元",  kanji: "毛", side: "west", pos: [68, 56],   n: 34, face: -1.6 },
  // 東軍
  { id: "kuroda",  name: "黒田長政",  kanji: "黒", side: "east", pos: [-30, -36], n: 28, face: -2.0 },
  { id: "hosokawa",name: "細川忠興",  kanji: "細", side: "east", pos: [-22, -26], n: 24, face: -2.0 },
  { id: "ii",      name: "井伊直政",  kanji: "井", side: "east", pos: [-8, 5],    n: 26, face: -1.6 },
  { id: "fukushima",name:"福島正則",  kanji: "福", side: "east", pos: [-12, 18],  n: 32, face: -1.6 },
  { id: "todo",    name: "藤堂高虎",  kanji: "藤", side: "east", pos: [-16, 32],  n: 24, face: -1.9 },
  { id: "honda",   name: "本多忠勝",  kanji: "本", side: "east", pos: [16, -14],  n: 18, face: -1.6 },
  { id: "ieyasu",  name: "徳川家康",  kanji: "徳", side: "east", pos: [74, -12],  n: 44, face: -1.6, big: true },
];

// 各フェーズ終了時の移動先 { unitId: [x,z] }
const PHASE_DEST = [
  {}, // 0 布陣
  { ii: [-27, 9], fukushima: [-27, 15] },                                   // 1 開戦
  { kuroda: [-48, -38], hosokawa: [-44, -30], ukita: [-24, 14], todo: [-33, 32] }, // 2 激戦
  { ieyasu: [12, -6], honda: [2, -2] },                                     // 3 家康前進
  { kobaya: [-45, 38] },                                                    // 4 裏切り
  { ishida: [-82, -58], konishi: [-74, -34], ukita: [-64, -4], shimazu: [34, 44],
    ii: [-40, 4], fukushima: [-42, 12], kuroda: [-58, -42], kobaya: [-42, 30] }, // 5 崩壊
];
// 各フェーズ終了時の不透明度(壊滅・潰走表現)
const PHASE_FADE = [
  {}, {}, {}, {},
  { otani: 0.55 },
  { otani: 0.0, ishida: 0.35, konishi: 0.3, ukita: 0.35, mori: 0.7 },
];

// ---------- 進軍矢印 ----------
// pts: 経路 / t0-t1: フェーズ内の出現区間
const PHASE_ARROWS = [
  [],
  [
    { pts: [[-8, 5], [-18, 7], [-29, 10]], side: "east", t0: 0.05, t1: 0.5 },
    { pts: [[-12, 18], [-20, 16], [-30, 13]], side: "east", t0: 0.2, t1: 0.7 },
  ],
  [
    { pts: [[-28, -34], [-42, -38], [-55, -42]], side: "east", t0: 0.05, t1: 0.5 },
    { pts: [[-33, 13], [-26, 14], [-19, 15]], side: "west", t0: 0.2, t1: 0.6 },
    { pts: [[-17, 31], [-26, 32], [-35, 32]], side: "east", t0: 0.35, t1: 0.8 },
  ],
  [
    { pts: [[72, -12], [44, -10], [14, -6]], side: "east", t0: 0.05, t1: 0.65 },
  ],
  [
    { pts: [[-50, 52], [-49, 45], [-45, 38]], side: "east", t0: 0.25, t1: 0.65, wide: true },
  ],
  [
    { pts: [[-60, -42], [-72, -50], [-84, -58]], side: "west", t0: 0.1, t1: 0.5, flee: true },
    { pts: [[-44, -22], [-2, 2], [22, 24], [34, 46]], side: "west", t0: 0.2, t1: 0.85 }, // 島津の退き口
    { pts: [[-30, 12], [-44, 4], [-56, -2]], side: "east", t0: 0.15, t1: 0.6 },
  ],
];

// ---------- フェーズ定義 ----------
const PHASES = [
  { key: "布陣", time: "夜明け前 ─ 慶長五年九月十五日", dur: 13, fog: 1.0,
    desc: "深い霧が盆地を覆う。西軍およそ八万は山々を結ぶ鶴翼の陣。東軍七万五千が中山道沿いに対峙する。",
    sky: { top: 0x1a2233, bot: 0x6b6e86, fog: 0x9aa0b0, sun: [-80, 18, -40], sc: 0xaab0c8, si: 0.5 } },
  { key: "開戦", time: "午前八時頃", dur: 12, fog: 0.55,
    desc: "霧が薄れた一瞬、井伊直政隊が抜け駆けで発砲。福島正則隊が宇喜多隊へ突撃し、戦端が開かれる。",
    sky: { top: 0x35506e, bot: 0xd8c9a8, fog: 0xcfc6ae, sun: [-60, 30, 30], sc: 0xffe2b0, si: 0.85 } },
  { key: "激戦", time: "午前十時頃", dur: 12, fog: 0.22,
    desc: "黒田・細川勢が笹尾山の石田隊に殺到。大谷吉継は藤堂・京極勢を相手に一歩も退かず、戦線は膠着する。",
    sky: { top: 0x3e6493, bot: 0xd9dcd2, fog: 0xc8cec2, sun: [-20, 60, 20], sc: 0xfff2d8, si: 1.0 } },
  { key: "家康、本陣を進める", time: "午前十一時過ぎ", dur: 11, fog: 0.14,
    desc: "戦況に焦れた家康は桃配山を下り、最前線・陣場野へ本陣を移す。松尾山へ催促の鉄砲を放ったとも伝わる。",
    sky: { top: 0x40689a, bot: 0xdfe2d6, fog: 0xccd2c4, sun: [10, 70, 0], sc: 0xfff6e2, si: 1.05 } },
  { key: "小早川秀秋、寝返る", time: "正午過ぎ", dur: 13, fog: 0.08,
    desc: "一万五千の小早川勢が松尾山を駆け下り、味方であるはずの大谷隊へ襲いかかる。脇坂ら四隊も呼応し、戦局は一変する。",
    sky: { top: 0x3c618f, bot: 0xe2ddc8, fog: 0xd0ccb6, sun: [30, 65, -10], sc: 0xfff0cc, si: 1.1 } },
  { key: "西軍崩壊・島津の退き口", time: "午後二時頃", dur: 14, fog: 0.04,
    desc: "大谷隊は壊滅、宇喜多・石田隊も潰走。島津義弘はわずかな手勢で敵中を正面突破し戦場を離脱。天下分け目の合戦は、わずか半日で決した。",
    sky: { top: 0x4a3a56, bot: 0xe8a96a, fog: 0xd9a070, sun: [70, 22, 50], sc: 0xffb870, si: 0.9 } },
];

// ---------- カメラ・キーフレーム ----------
const CAMS = [
  [ { p: [-150, 95, 155], l: [0, 0, 0] }, { p: [-45, 42, 110], l: [-35, 8, 25] }, { p: [55, 58, 35], l: [-15, 5, 0] } ],
  [ { p: [32, 30, 58], l: [-20, 3, 12] }, { p: [0, 13, 34], l: [-28, 4, 12] }, { p: [-17, 9, 23], l: [-34, 5, 13] } ],
  [ { p: [-8, 16, -6], l: [-45, 6, -28] }, { p: [-24, 14, -54], l: [-58, 8, -42] }, { p: [-68, 22, -66], l: [-62, 9, -44] } ],
  [ { p: [88, 30, 18], l: [72, 6, -12] }, { p: [42, 18, 12], l: [30, 5, -8] }, { p: [4, 9, 8], l: [15, 5, -6] } ],
  [ { p: [-18, 18, 76], l: [-52, 15, 55] }, { p: [-44, 36, 88], l: [-51, 17, 56] }, { p: [-60, 17, 50], l: [-46, 6, 40] }, { p: [-54, 12, 28], l: [-44, 4, 36] } ],
  [ { p: [-28, 18, 18], l: [-52, 5, -12] }, { p: [22, 42, 58], l: [-8, 5, 2] }, { p: [95, 78, 118], l: [0, 10, -8] } ],
];

// ---------- キャンバス・テクスチャ ----------
function flagTexture(kanji, hex) {
  const c = document.createElement("canvas");
  c.width = 96; c.height = 192;
  const g = c.getContext("2d");
  g.fillStyle = "#" + new THREE.Color(hex).getHexString();
  g.fillRect(0, 0, 96, 192);
  g.fillStyle = "rgba(255,255,255,0.92)";
  g.font = kanji.length > 1 ? `700 30px ${JFONT}` : `700 64px ${JFONT}`;
  g.textAlign = "center"; g.textBaseline = "middle";
  if (kanji.length > 1) {
    [...kanji].forEach((ch, i) => g.fillText(ch, 48, 42 + i * 38));
  } else {
    g.fillText(kanji, 48, 78);
    g.beginPath(); g.arc(48, 152, 16, 0, Math.PI * 2);
    g.lineWidth = 4; g.strokeStyle = "rgba(255,255,255,0.85)"; g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.anisotropy = 4;
  return t;
}
function labelTexture(text, hex, small) {
  const c = document.createElement("canvas");
  c.width = 512; c.height = 128;
  const g = c.getContext("2d");
  g.clearRect(0, 0, 512, 128);
  const col = "#" + new THREE.Color(hex).getHexString();
  if (!small) { g.fillStyle = col; g.fillRect(70, 30, 10, 68); }
  g.font = (small ? "500 40px " : "700 56px ") + JFONT;
  g.textAlign = "left"; g.textBaseline = "middle";
  g.shadowColor = "rgba(0,0,0,0.85)"; g.shadowBlur = 10;
  g.fillStyle = small ? "rgba(235,235,225,0.85)" : "#f5f1e6";
  g.fillText(text, small ? 80 : 96, 66);
  const t = new THREE.CanvasTexture(c);
  return t;
}
function chevronTexture() {
  const c = document.createElement("canvas");
  c.width = 128; c.height = 64;
  const g = c.getContext("2d");
  g.clearRect(0, 0, 128, 64);
  g.fillStyle = "#ffffff";
  g.beginPath();
  g.moveTo(28, 6); g.lineTo(78, 32); g.lineTo(28, 58);
  g.lineTo(52, 32); g.closePath(); g.fill();
  const t = new THREE.CanvasTexture(c);
  t.wrapS = THREE.RepeatWrapping; t.wrapT = THREE.ClampToEdgeWrapping;
  return t;
}
function fogTexture() {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 256;
  const g = c.getContext("2d");
  const rg = g.createRadialGradient(128, 128, 10, 128, 128, 128);
  rg.addColorStop(0, "rgba(255,255,255,0.9)");
  rg.addColorStop(0.6, "rgba(255,255,255,0.45)");
  rg.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = rg; g.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

// ---------- 矢印リボン ----------
function buildArrow(scene, spec) {
  const pts3 = spec.pts.map(([x, z]) => new THREE.Vector3(x, 0, z));
  const curve = new THREE.CatmullRomCurve3(pts3);
  const N = 60;
  const w = spec.wide ? 4.2 : 2.6;
  const pos = [], uv = [], idx = [];
  let last = null;
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const p = curve.getPoint(t);
    const tan = curve.getTangent(t);
    const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
    const ww = w * (0.35 + 0.65 * t);
    const y = terrainH(p.x, p.z) + 0.7;
    pos.push(p.x + perp.x * ww, y, p.z + perp.z * ww);
    pos.push(p.x - perp.x * ww, y, p.z - perp.z * ww);
    uv.push(t * 6, 1, t * 6, 0);
    if (i > 0) {
      const a = (i - 1) * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    last = { p, tan };
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.setDrawRange(0, 0);
  const color = spec.side === "east" ? EAST : WEST;
  const baseMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.32, depthWrite: false, side: THREE.DoubleSide });
  const chevMat = new THREE.MeshBasicMaterial({ map: chevronTexture(), color, transparent: true, opacity: 0.95, depthWrite: false, side: THREE.DoubleSide });
  const base = new THREE.Mesh(geo, baseMat);
  const chev = new THREE.Mesh(geo, chevMat);
  chev.position.y = 0.05;
  // 矢頭
  const headGeo = new THREE.ConeGeometry(w * 1.5, w * 3.2, 3);
  const head = new THREE.Mesh(headGeo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false }));
  head.rotation.x = Math.PI / 2;
  const hy = terrainH(last.p.x, last.p.z) + 0.8;
  head.position.set(last.p.x + last.tan.x * w * 1.4, hy, last.p.z + last.tan.z * w * 1.4);
  head.rotation.z = -Math.atan2(last.tan.x, last.tan.z);
  head.visible = false;
  const grp = new THREE.Group();
  grp.add(base, chev, head);
  grp.visible = false;
  scene.add(grp);
  return { grp, geo, chevMat, head, idxCount: idx.length, t0: spec.t0, t1: spec.t1, flee: !!spec.flee };
}

export default function SekigaharaCinematic() {
  const mountRef = useRef(null);
  const barRef = useRef(null);
  const stateRef = useRef({ playing: false, phase: 0, t: 0, jump: null });
  const [phase, setPhase] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    const W = mount.clientWidth, H = mount.clientHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x9aa0b0, 0.007);
    const camera = new THREE.PerspectiveCamera(46, W / H, 0.5, 900);

    // ---- 光 ----
    const sun = new THREE.DirectionalLight(0xffe2b0, 0.8);
    scene.add(sun);
    const hemi = new THREE.HemisphereLight(0xbcc8da, 0x3a4034, 0.7);
    scene.add(hemi);

    // ---- 地形 ----
    const SEGX = 150, SEGZ = 120, SX = 280, SZ = 230;
    const tg = new THREE.PlaneGeometry(SX, SZ, SEGX, SEGZ);
    tg.rotateX(-Math.PI / 2);
    const tp = tg.attributes.position;
    const colors = [];
    const cValley = new THREE.Color(0x8a9a5e), cPaddy = new THREE.Color(0xa3ab6a),
      cForest = new THREE.Color(0x44603f), cHigh = new THREE.Color(0x5a6e58),
      cRidge = new THREE.Color(0x6d7a86);
    for (let i = 0; i < tp.count; i++) {
      const x = tp.getX(i), z = tp.getZ(i);
      const h = terrainH(x, z);
      tp.setY(i, h);
      let col;
      if (h < 1.6) {
        const checker = (Math.floor(x / 7) + Math.floor(z / 5)) % 2 === 0;
        col = (checker ? cValley : cPaddy).clone();
      } else if (h < 7) col = cForest.clone().lerp(cValley, (7 - h) / 6);
      else if (h < 15) col = cForest.clone().lerp(cHigh, (h - 7) / 8);
      else col = cHigh.clone().lerp(cRidge, Math.min(1, (h - 15) / 10));
      const n = 0.92 + 0.08 * Math.sin(x * 1.7) * Math.cos(z * 1.9);
      colors.push(col.r * n, col.g * n, col.b * n);
    }
    tg.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    tg.computeVertexNormals();
    const terrain = new THREE.Mesh(tg, new THREE.MeshLambertMaterial({ vertexColors: true }));
    scene.add(terrain);

    // ---- 街道(中山道・北国街道) ----
    function road(pts) {
      const curve = new THREE.CatmullRomCurve3(pts.map(([x, z]) => new THREE.Vector3(x, 0, z)));
      const n = 80, pos = [], idx = [];
      for (let i = 0; i < n; i++) {
        const t = i / (n - 1);
        const p = curve.getPoint(t), tan = curve.getTangent(t);
        const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize().multiplyScalar(1.3);
        const y = terrainH(p.x, p.z) + 0.18;
        pos.push(p.x + perp.x, y, p.z + perp.z, p.x - perp.x, y, p.z - perp.z);
        if (i > 0) { const a = (i - 1) * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx);
      const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0xcdbb8e, transparent: true, opacity: 0.55, depthWrite: false }));
      scene.add(m);
    }
    road([[-130, -2], [-60, 2], [-20, 8], [30, 2], [80, -6], [135, -10]]); // 中山道
    road([[-60, 0], [-72, -30], [-86, -70], [-95, -105]]);                  // 北国街道

    // ---- 山名ラベル ----
    [["松尾山", -52, 58, 14], ["笹尾山", -64, -44, 8.5], ["南宮山", 72, 62, 18.5], ["桃配山", 76, -12, 6.5], ["伊吹山地", -10, -95, 24]]
      .forEach(([t, x, z, y]) => {
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTexture(t, 0xffffff, true), transparent: true, opacity: 0.75, depthTest: false }));
        sp.position.set(x, terrainH(x, z) + 5 + (y - terrainH(x, z)) * 0, z);
        sp.position.y = y + 5;
        sp.scale.set(15, 3.75, 1);
        scene.add(sp);
      });

    // ---- 部隊 ----
    const soldierGeo = new THREE.ConeGeometry(0.45, 1.5, 5);
    soldierGeo.translate(0, 0.75, 0);
    const units = {};
    UNITS.forEach((u) => {
      const grp = new THREE.Group();
      const sideColor = u.side === "east" ? EAST : WEST; // 小早川は最初は西軍色
      const mat = new THREE.MeshLambertMaterial({ color: sideColor, transparent: true });
      const im = new THREE.InstancedMesh(soldierGeo, mat, u.n);
      const dummy = new THREE.Object3D();
      const cols = Math.ceil(Math.sqrt(u.n * 1.6));
      let k = 0;
      for (let r = 0; k < u.n; r++) for (let c = 0; c < cols && k < u.n; c++, k++) {
        dummy.position.set((c - cols / 2) * 1.3 + (r % 2) * 0.6, 0, r * 1.5);
        dummy.rotation.y = Math.random() * 0.4;
        dummy.scale.setScalar(0.9 + Math.random() * 0.25);
        dummy.updateMatrix();
        im.setMatrixAt(k, dummy.matrix);
      }
      grp.add(im);
      // 軍旗(のぼり)
      const flagMat = new THREE.MeshBasicMaterial({ map: flagTexture(u.kanji, sideColor), transparent: true, side: THREE.DoubleSide });
      const flags = [];
      const fn = u.big ? 3 : 2;
      for (let f = 0; f < fn; f++) {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 7), new THREE.MeshBasicMaterial({ color: 0x4a3a28 }));
        pole.position.set((f - (fn - 1) / 2) * 3.2, 3.5, 4 + (f % 2));
        const fl = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 3.6), flagMat);
        fl.position.set(pole.position.x + 0.9, 5.0, pole.position.z);
        grp.add(pole, fl);
        flags.push(fl);
      }
      // 名前ラベル
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTexture(u.name, sideColor), transparent: true, depthTest: false }));
      sp.position.set(0, u.big ? 12 : 9.5, 0);
      sp.scale.set(u.big ? 19 : 15, u.big ? 4.75 : 3.75, 1);
      grp.add(sp);
      grp.rotation.y = u.face;
      scene.add(grp);
      // フェーズ毎の開始/終了位置・不透明度を連鎖計算
      const starts = [], ends = [], fadeS = [], fadeE = [];
      let cur = u.pos, fade = 1;
      for (let i = 0; i < PHASES.length; i++) {
        starts.push(cur);
        const d = PHASE_DEST[i][u.id];
        cur = d || cur;
        ends.push(cur);
        fadeS.push(fade);
        const fd = PHASE_FADE[i][u.id];
        fade = fd !== undefined ? fd : fade;
        fadeE.push(fade);
      }
      units[u.id] = { grp, mat, flagMat, sp, starts, ends, fadeS, fadeE, turn: u.side === "turn" };
      const [x, z] = u.pos;
      grp.position.set(x, terrainH(x, z), z);
    });

    // ---- 霧の層 ----
    const fogTex = fogTexture();
    const fogSprites = [];
    for (let i = 0; i < 9; i++) {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(150 + Math.random() * 90, 100 + Math.random() * 60),
        new THREE.MeshBasicMaterial({ map: fogTex, transparent: true, opacity: 0.4, depthWrite: false })
      );
      m.rotation.x = -Math.PI / 2;
      m.position.set((Math.random() - 0.5) * 180, 3.5 + Math.random() * 7, (Math.random() - 0.5) * 140);
      m.userData = { vx: 0.6 + Math.random() * 0.8, base: 0.22 + Math.random() * 0.25 };
      scene.add(m);
      fogSprites.push(m);
    }

    // ---- 矢印 ----
    const arrowsByPhase = PHASE_ARROWS.map((list) => list.map((spec) => buildArrow(scene, spec)));

    // ---- カメラ曲線(フェーズごとに事前生成) ----
    const camCurves = CAMS.map((kfs) => ({
      p: new THREE.CatmullRomCurve3(kfs.map((k) => new THREE.Vector3(...k.p)), false, "catmullrom", 0.4),
      l: new THREE.CatmullRomCurve3(kfs.map((k) => new THREE.Vector3(...k.l)), false, "catmullrom", 0.4),
    }));

    // ---- 空・霧・光のフェーズ補間 ----
    const bg = new THREE.Color();
    function applyAtmosphere(pi, p, dt, elapsed) {
      const cur = PHASES[pi], nxt = PHASES[Math.min(pi + 1, PHASES.length - 1)];
      const mix = clamp01((p - 0.85) / 0.15); // フェーズ末で次の空へ滑らかに
      const lerpC = (a, b) => new THREE.Color(a).lerp(new THREE.Color(b), mix);
      bg.copy(lerpC(cur.sky.bot, nxt.sky.bot));
      scene.background = bg;
      const fogC = lerpC(cur.sky.fog, nxt.sky.fog);
      scene.fog.color.copy(fogC);
      const fogLv = cur.fog + (nxt.fog - cur.fog) * mix;
      scene.fog.density = 0.0012 + fogLv * 0.0085;
      const sp = cur.sky.sun.map((v, i) => v + (nxt.sky.sun[i] - v) * mix);
      sun.position.set(sp[0], sp[1], sp[2]);
      sun.color.copy(lerpC(cur.sky.sc, nxt.sky.sc));
      sun.intensity = cur.sky.si + (nxt.sky.si - cur.sky.si) * mix;
      fogSprites.forEach((m, i) => {
        m.position.x += m.userData.vx * dt;
        if (m.position.x > 160) m.position.x = -160;
        m.material.opacity = m.userData.base * fogLv * (0.85 + 0.15 * Math.sin(elapsed * 0.4 + i));
      });
    }

    // ---- 部隊更新 ----
    const turnColor = new THREE.Color(WEST);
    function updateUnits(pi, p) {
      const e = easeIO(p);
      for (const id in units) {
        const u = units[id];
        const [sx, sz] = u.starts[pi], [ex, ez] = u.ends[pi];
        const x = sx + (ex - sx) * e, z = sz + (ez - sz) * e;
        u.grp.position.set(x, terrainH(x, z), z);
        if (ex !== sx || ez !== sz) u.grp.rotation.y = -Math.atan2(ex - sx, ez - sz) + Math.PI;
        const op = u.fadeS[pi] + (u.fadeE[pi] - u.fadeS[pi]) * e;
        u.mat.opacity = op;
        u.sp.material.opacity = Math.max(0.12, op);
        // 小早川の旗色反転(フェーズ4序盤)
        if (u.turn) {
          let f = 0;
          if (pi > 4) f = 1;
          else if (pi === 4) f = clamp01((p - 0.18) / 0.2);
          turnColor.set(WEST).lerp(new THREE.Color(EAST), f);
          u.mat.color.copy(turnColor);
          u.flagMat.color.setScalar(1); // 旗はテクスチャ色のまま明度維持
          u.flagMat.map = u.flagMap || u.flagMat.map;
          if (f > 0 && !u.flippedTex) { /* 旗テクスチャを赤系へ */ }
          if (f >= 0.5 && !u.flagSwapped) {
            u.flagMat.map = flagTexture("小早川", EAST);
            u.flagMat.needsUpdate = true;
            u.sp.material.map = labelTexture("小早川秀秋", EAST);
            u.flagSwapped = true;
          } else if (f < 0.5 && u.flagSwapped) {
            u.flagMat.map = flagTexture("小早川", WEST);
            u.sp.material.map = labelTexture("小早川秀秋", WEST);
            u.flagSwapped = false;
          }
        }
      }
    }

    // ---- 矢印更新 ----
    function updateArrows(pi, p, dt) {
      arrowsByPhase.forEach((list, i) => {
        list.forEach((a) => {
          if (i !== pi) { a.grp.visible = false; a.geo.setDrawRange(0, 0); a.head.visible = false; return; }
          const g = clamp01((p - a.t0) / (a.t1 - a.t0));
          a.grp.visible = g > 0;
          if (g <= 0) return;
          const cnt = Math.floor((a.idxCount / 6) * easeIO(g)) * 6;
          a.geo.setDrawRange(0, cnt);
          a.head.visible = g > 0.97;
          a.chevMat.map.offset.x -= dt * 0.9;
          // フェーズ末に薄れる
          const fade = p > 0.92 ? 1 - (p - 0.92) / 0.08 : 1;
          a.chevMat.opacity = 0.95 * fade;
          a.grp.children[0].material.opacity = 0.32 * fade;
          a.head.material.opacity = 0.9 * fade;
        });
      });
    }

    // ---- メインループ ----
    const st = stateRef.current;
    const clock = new THREE.Clock();
    let elapsed = 0;
    let raf;
    function animate() {
      raf = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      elapsed += dt;
      if (st.jump !== null) { st.phase = st.jump; st.t = 0; st.jump = null; setPhase(st.phase); }
      if (st.playing) {
        st.t += dt;
        if (st.t >= PHASES[st.phase].dur) {
          if (st.phase < PHASES.length - 1) { st.phase++; st.t = 0; setPhase(st.phase); }
          else { st.t = PHASES[st.phase].dur - 0.001; st.playing = false; setPlaying(false); }
        }
      }
      const pi = st.phase;
      const p = clamp01(st.t / PHASES[pi].dur);
      // カメラ
      const cv = camCurves[pi];
      const cp = easeIO(p);
      const cpos = cv.p.getPoint(cp), clook = cv.l.getPoint(cp);
      // 手持ち風の微揺れ
      cpos.x += Math.sin(elapsed * 0.55) * 0.5;
      cpos.y += Math.sin(elapsed * 0.4 + 2) * 0.35;
      clook.x += Math.sin(elapsed * 0.3 + 1) * 0.4;
      camera.position.copy(cpos);
      camera.lookAt(clook);
      applyAtmosphere(pi, p, dt, elapsed);
      updateUnits(pi, p);
      updateArrows(pi, p, dt);
      if (barRef.current) barRef.current.style.width = (((pi + p) / PHASES.length) * 100).toFixed(2) + "%";
      renderer.render(scene, camera);
    }
    animate();

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  const togglePlay = () => {
    const st = stateRef.current;
    if (!started) setStarted(true);
    // 終幕で再生→最初から
    if (!st.playing && st.phase === PHASES.length - 1 && st.t >= PHASES[st.phase].dur - 0.01) st.jump = 0;
    st.playing = !st.playing;
    setPlaying(st.playing);
  };
  const jumpTo = (i) => {
    const st = stateRef.current;
    st.jump = i;
    if (!started) setStarted(true);
    if (!st.playing) { st.playing = true; setPlaying(true); }
  };

  const ph = PHASES[phase];
  const css = `
    .skg-root{position:relative;width:100%;height:100vh;min-height:560px;background:#0c0e13;overflow:hidden;
      font-family:"Hiragino Kaku Gothic ProN","Yu Gothic","Noto Sans JP",sans-serif;color:#f2ead8;}
    .skg-canvas{position:absolute;inset:0;}
    .skg-bar{position:absolute;left:0;right:0;height:7vh;min-height:34px;background:#07080b;z-index:5;pointer-events:none;}
    .skg-grain{position:absolute;inset:0;z-index:4;pointer-events:none;opacity:.5;mix-blend-mode:overlay;
      background-image:radial-gradient(rgba(255,255,255,.04) 1px,transparent 1px);background-size:3px 3px;}
    .skg-vig{position:absolute;inset:0;z-index:4;pointer-events:none;box-shadow:inset 0 0 180px rgba(5,6,10,.75);}
    .skg-title{position:absolute;top:11vh;right:3.5vw;z-index:8;writing-mode:vertical-rl;text-orientation:upright;
      font-family:${JFONT};font-size:clamp(26px,4.2vmin,46px);font-weight:700;letter-spacing:.45em;color:#f5efe0;
      text-shadow:0 2px 14px rgba(0,0,0,.8);transition:opacity 1.2s;}
    .skg-title small{font-size:.42em;letter-spacing:.3em;color:#c9a227;margin-top:1.2em;display:block;}
    .skg-card{position:absolute;left:3.5vw;bottom:13vh;z-index:8;max-width:min(460px,62vw);
      background:rgba(10,12,17,.72);backdrop-filter:blur(6px);border-left:3px solid #c9a227;
      padding:14px 18px 16px;box-shadow:0 8px 30px rgba(0,0,0,.45);}
    .skg-eyebrow{font-size:11px;letter-spacing:.28em;color:#c9a227;margin-bottom:6px;}
    .skg-phase{font-family:${JFONT};font-size:clamp(18px,2.6vmin,26px);font-weight:700;letter-spacing:.08em;line-height:1.3;}
    .skg-desc{font-size:12.5px;line-height:1.85;color:#d9d2c0;margin-top:8px;}
    .skg-ctrl{position:absolute;left:50%;transform:translateX(-50%);bottom:1.4vh;z-index:9;display:flex;
      align-items:center;gap:10px;max-width:94vw;}
    .skg-play{width:42px;height:42px;border-radius:50%;border:1px solid rgba(201,162,39,.7);background:rgba(12,14,19,.85);
      color:#f2ead8;font-size:15px;cursor:pointer;flex:none;display:flex;align-items:center;justify-content:center;
      transition:background .2s;}
    .skg-play:hover{background:rgba(201,162,39,.25);}
    .skg-play:focus-visible{outline:2px solid #c9a227;outline-offset:2px;}
    .skg-chips{display:flex;gap:6px;overflow-x:auto;padding:4px 2px;scrollbar-width:none;}
    .skg-chip{flex:none;border:1px solid rgba(242,234,216,.25);background:rgba(12,14,19,.7);color:#cfc7b2;
      font-size:11px;letter-spacing:.06em;padding:7px 11px;cursor:pointer;white-space:nowrap;transition:all .2s;}
    .skg-chip:hover{border-color:#c9a227;color:#f2ead8;}
    .skg-chip.on{background:#c9a227;color:#14110a;border-color:#c9a227;font-weight:700;}
    .skg-chip:focus-visible{outline:2px solid #c9a227;outline-offset:2px;}
    .skg-prog{position:absolute;bottom:7vh;left:0;right:0;height:2px;background:rgba(242,234,216,.12);z-index:9;}
    .skg-prog>div{height:100%;background:#c9a227;width:0;}
    .skg-legend{position:absolute;top:9vh;left:3.5vw;z-index:8;display:flex;gap:14px;font-size:11px;letter-spacing:.12em;
      background:rgba(10,12,17,.55);padding:7px 12px;border:1px solid rgba(242,234,216,.12);}
    .skg-dot{display:inline-block;width:9px;height:9px;border-radius:2px;margin-right:6px;vertical-align:-1px;}
    .skg-intro{position:absolute;inset:0;z-index:12;display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:rgba(7,8,11,.78);transition:opacity 1s;cursor:pointer;}
    .skg-intro.off{opacity:0;pointer-events:none;}
    .skg-intro h1{font-family:${JFONT};font-size:clamp(34px,7vmin,72px);font-weight:700;letter-spacing:.3em;margin:0 0 14px;
      color:#f5efe0;text-shadow:0 0 40px rgba(201,162,39,.35);}
    .skg-intro p{letter-spacing:.32em;font-size:13px;color:#c9a227;margin:0 0 36px;}
    .skg-intro button{font-family:inherit;border:1px solid #c9a227;background:transparent;color:#f2ead8;
      letter-spacing:.3em;font-size:14px;padding:13px 38px 13px 42px;cursor:pointer;transition:background .25s;}
    .skg-intro button:hover{background:rgba(201,162,39,.2);}
    @media (prefers-reduced-motion: reduce){ .skg-grain{display:none;} }
    @media (max-width:640px){ .skg-title{display:none;} .skg-card{bottom:15vh;} }
  `;

  return (
    <div className="skg-root">
      <style>{css}</style>
      <div className="skg-canvas" ref={mountRef} />
      {/* レターボックス・質感 */}
      <div className="skg-bar" style={{ top: 0 }} />
      <div className="skg-bar" style={{ bottom: 0 }} />
      <div className="skg-vig" />
      <div className="skg-grain" />
      {/* 縦書きタイトル */}
      <div className="skg-title" style={{ opacity: started ? 0.92 : 0 }}>
        決戦・関ヶ原<small>慶長五年九月十五日</small>
      </div>
      {/* 凡例 */}
      <div className="skg-legend" style={{ opacity: started ? 1 : 0, transition: "opacity 1s" }}>
        <span><i className="skg-dot" style={{ background: "#d6453c" }} />東軍 約七万五千</span>
        <span><i className="skg-dot" style={{ background: "#3f6fae" }} />西軍 約八万</span>
      </div>
      {/* ナレーションカード */}
      <div className="skg-card" style={{ opacity: started ? 1 : 0, transition: "opacity .8s" }}>
        <div className="skg-eyebrow">第{["一", "二", "三", "四", "五", "六"][phase]}幕 ｜ {ph.time}</div>
        <div className="skg-phase">{ph.key}</div>
        <div className="skg-desc">{ph.desc}</div>
      </div>
      {/* 進行バー */}
      <div className="skg-prog"><div ref={barRef} /></div>
      {/* コントロール */}
      <div className="skg-ctrl">
        <button className="skg-play" onClick={togglePlay} aria-label={playing ? "一時停止" : "再生"}>
          {playing ? "❚❚" : "▶"}
        </button>
        <div className="skg-chips">
          {PHASES.map((p, i) => (
            <button key={p.key} className={"skg-chip" + (i === phase ? " on" : "")} onClick={() => jumpTo(i)}>
              {p.key}
            </button>
          ))}
        </div>
      </div>
      {/* 導入画面 */}
      <div className={"skg-intro" + (started ? " off" : "")} onClick={togglePlay}>
        <h1>決戦・関ヶ原</h1>
        <p>慶長五年九月十五日 ── 天下分け目、半日の攻防</p>
        <button>再生する ▶</button>
      </div>
    </div>
  );
}
