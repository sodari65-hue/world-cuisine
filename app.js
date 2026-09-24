/* =========================================================
   app.js — 3D地球儀（標高・海・川・国境）＋郷土料理パネル
   three.js r128 / 外部依存は three.js・地形テクスチャ・国境データのみ
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 定数 ---------- */
  const DEG = Math.PI / 180;
  const EVEREST_RATIO = 8848 / 6371000;     // 実際の地球での最高点の比率
  const CDN_IMG = 'https://cdn.jsdelivr.net/npm/three-globe/example/img/';
  const TOPO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
  const TEX_W = 1024, TEX_H = 512;

  const $ = (s) => document.querySelector(s);
  const el = {
    canvas: $('#gl'), pins: $('#pins'), hover: $('#hoverName'),
    listPanel: $('#listPanel'), listBody: $('#listBody'), search: $('#search'),
    modeTabs: $('#modeTabs'), tagWrap: $('#tagWrap'), tagDesc: $('#tagDesc'), listHead: $('#listHead'),
    detail: $('#detail'), dCountry: $('#dCountry'), dDish: $('#dDish'), dLocal: $('#dLocal'),
    dTabs: $('#dTabs'), dBody: $('#dBody'),
    exag: $('#exag'), exagVal: $('#exagVal'), legend: $('#legend'),
    quiz: $('#quiz'), qStep: $('#qStep'), qArt: $('#qArt'), qTitle: $('#qTitle'), qHint: $('#qHint'), qResult: $('#qResult'),
    qDish: $('#qDish'), qLocal: $('#qLocal'), qForm: $('#qForm'), qInput: $('#qInput'), qMiss: $('#qMiss'),
    loading: $('#loading'), barFill: $('#barFill'), loadNote: $('#loadNote'),
    help: $('#help')
  };

  /* ---------- 状態 ---------- */
  const state = {
    exagX: 25,                 // 標高の強調倍率
    mode: 'natural',           // natural | relief
    layers: { rivers: true, borders: true, labels: true, spin: false },
    listMode: 'country',       // country | terrain
    terrain: null,             // 絞りこみ中の地形タグ
    selected: null,            // 選択中の国
    selectedDish: null,        // 選択中の料理
    quiz: null,
    view: { lat: 20, lon: 100, dist: 2.9 },
    target: { lat: 20, lon: 100, dist: 2.9 },
    dragging: false
  };

  /* =========================================================
     緯度経度 ⇄ 3Dベクトル（three.js の SphereGeometry の向きに合わせる）
     ========================================================= */
  function llToVec(lat, lon, r, out) {
    const phi = (90 - lat) * DEG, theta = (lon + 180) * DEG;
    const sp = Math.sin(phi);
    out = out || new THREE.Vector3();
    return out.set(-r * sp * Math.cos(theta), r * Math.cos(phi), r * sp * Math.sin(theta));
  }
  function vecToLL(v) {
    const r = v.length();
    const lat = 90 - Math.acos(v.y / r) / DEG;
    let lon = Math.atan2(v.z, -v.x) / DEG - 180;
    if (lon < -180) lon += 360;
    return { lat: lat, lon: lon };
  }

  /* =========================================================
     標高データ（テクスチャのピクセルを読んで高さを取り出す）
     ========================================================= */
  let elevData = null;         // Uint8ClampedArray (TEX_W x TEX_H, 0-255)
  function elevAt(lat, lon) {
    if (!elevData) return 0;
    let x = Math.round(((lon + 180) / 360) * (TEX_W - 1));
    let y = Math.round(((90 - lat) / 180) * (TEX_H - 1));
    x = Math.max(0, Math.min(TEX_W - 1, x));
    y = Math.max(0, Math.min(TEX_H - 1, y));
    return elevData[(y * TEX_W + x) * 4] / 255;
  }
  function dispScale() { return state.exagX * EVEREST_RATIO; }

  /* =========================================================
     料理の一覧 — 1つの国に複数の料理をもたせる
     国の代表の一品を dishes[0] とし、EXTRA_DISHES の分を続ける。
     それぞれが「生まれた土地」（地域名・緯度経度・標高・地形）をもつ。
     ========================================================= */
  function dishesOf(c) {
    if (c._dishes) return c._dishes;
    const first = {
      country: c, name: c.dish, local: c.local, art: c.art,
      area: c.area,
      // 料理が生まれた土地の位置（なければ国の代表点）
      lat: (typeof c.dlat === 'number' ? c.dlat : c.lat),
      lon: (typeof c.dlon === 'number' ? c.dlon : c.lon),
      alt: c.alt, terrain: c.terrain || [],
      caption: c.caption, materials: c.materials, why: c.why, questions: c.questions
    };
    const extra = (window.EXTRA_DISHES && window.EXTRA_DISHES[c.id]) || [];
    c._dishes = [first].concat(extra.map(function (d) {
      return {
        country: c, name: d.dish, local: d.local, art: d.art,
        area: d.area, lat: d.lat, lon: d.lon, alt: d.alt, terrain: d.terrain || [],
        caption: d.caption, materials: d.materials, why: d.why, questions: d.questions
      };
    }));
    c._dishes.forEach(function (d, i) { d.index = i; d.key = c.id + '-' + i; });
    return c._dishes;
  }
  let ALL_DISHES = [];
  function buildDishIndex() {
    ALL_DISHES = [];
    for (const c of window.COUNTRIES) for (const d of dishesOf(c)) ALL_DISHES.push(d);
  }
  const terrainDef = (k) => window.TERRAINS.find((t) => t.key === k);

  /* 料理の見た目 — 写真があれば写真、なければイラスト。
     クイズでは出典リンクを出さない（ファイル名から答えがわかるため）。 */
  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g,
    (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
  function dishVisual(dish, forQuiz) {
    const svg = window.DISH_ART[dish.art] || '';
    const p = window.DISH_PHOTOS && window.DISH_PHOTOS[dish.art];
    if (!p || !p.file) return svg;
    const credit = '写真：' + esc(p.credit) + (p.license ? '（' + esc(p.license) + '）' : '');
    const cap = (!forQuiz && p.source)
      ? '<a href="' + esc(p.source) + '" target="_blank" rel="noopener">' + credit + '</a>'
      : credit;
    return '<figure class="photo"><img src="' + esc(p.file) + '" alt="' + (forQuiz ? '料理の写真' : esc(dish.name)) +
      '" decoding="async" data-art="' + esc(dish.art) + '"><figcaption>' + cap + '</figcaption></figure>';
  }
  /* 写真が読みこめなければイラストにもどす */
  document.addEventListener('error', (e) => {
    const img = e.target;
    if (!img || img.tagName !== 'IMG' || !img.closest) return;
    const fig = img.closest('figure.photo');
    if (!fig) return;
    const tmp = document.createElement('div');
    tmp.innerHTML = window.DISH_ART[img.dataset.art] || '';
    fig.replaceWith(tmp.firstElementChild || document.createTextNode(''));
  }, true);
  const fmtM = (m) => m.toLocaleString('ja-JP');
  function fmtLL(lat, lon) {
    return (lat >= 0 ? '北緯' : '南緯') + Math.abs(lat).toFixed(1) + '° ' +
      (lon >= 0 ? '東経' : '西経') + Math.abs(lon).toFixed(1) + '°';
  }

  /* =========================================================
     three.js セットアップ
     ========================================================= */
  let renderer, scene, camera, globe, atmosphere, pickSphere, sunLight;
  let borderLines = null, riverLines = null, selectLines = null;
  let naturalTex = null, reliefTex = null;
  /* THREE が読みこめていない場合にそなえ、ベクトル類はここでは作らない */
  let _pv, camPos, raycaster, ndc;

  function initThree() {
    _pv = new THREE.Vector3();
    camPos = new THREE.Vector3();
    raycaster = new THREE.Raycaster();
    ndc = new THREE.Vector2();

    renderer = new THREE.WebGLRenderer({ canvas: el.canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.05, 100);

    scene.add(new THREE.AmbientLight(0xffffff, 0.42));
    sunLight = new THREE.DirectionalLight(0xfff4e0, 1.05);
    scene.add(sunLight);
    const rim = new THREE.DirectionalLight(0x5f8fd0, 0.35);
    rim.position.set(-3, 1, -2);
    scene.add(rim);

    /* 星空 */
    const starGeo = new THREE.BufferGeometry();
    const N = 1400, sp = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 40 + Math.random() * 30;
      const t = Math.random() * Math.PI * 2, p = Math.acos(2 * Math.random() - 1);
      sp[i * 3] = r * Math.sin(p) * Math.cos(t);
      sp[i * 3 + 1] = r * Math.cos(p);
      sp[i * 3 + 2] = r * Math.sin(p) * Math.sin(t);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xbcd0ea, size: 0.22, sizeAttenuation: true, transparent: true, opacity: 0.75 })));

    /* 地球本体 */
    const geo = new THREE.SphereGeometry(1, 360, 180);
    const mat = new THREE.MeshPhongMaterial({
      color: 0xffffff, shininess: 14, specular: 0x1b2c44,
      displacementScale: dispScale(), bumpScale: 0.012
    });
    globe = new THREE.Mesh(geo, mat);
    scene.add(globe);

    /* 大気のふちの光 */
    atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.035, 64, 32),
      new THREE.ShaderMaterial({
        transparent: true, side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending,
        uniforms: {},
        vertexShader: 'varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.0); vP = mv.xyz; gl_Position = projectionMatrix * mv; }',
        fragmentShader: 'varying vec3 vN; varying vec3 vP; void main(){ float f = pow(1.0 - abs(dot(normalize(vN), normalize(-vP))), 2.6); gl_FragColor = vec4(0.35,0.62,1.0, f*0.85); }'
      })
    );
    scene.add(atmosphere);

    /* 当たり判定用の透明な球 */
    pickSphere = new THREE.Mesh(new THREE.SphereGeometry(1, 96, 48), new THREE.MeshBasicMaterial({ visible: false }));
    scene.add(pickSphere);

    window.addEventListener('resize', onResize);
    onResize();
  }

  function onResize() {
    const w = window.innerWidth, h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }

  /* =========================================================
     画像の読みこみ
     ========================================================= */
  function loadImage(url) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => res(img);
      img.onerror = () => rej(new Error('画像を読みこめません: ' + url));
      img.src = url;
    });
  }
  function toCanvasData(img) {
    const c = document.createElement('canvas');
    c.width = TEX_W; c.height = TEX_H;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, TEX_W, TEX_H);
    return ctx.getImageData(0, 0, TEX_W, TEX_H);
  }

  /* 標高の色分けテクスチャを作る（緑→茶→白／海は青） */
  const RAMP = [
    [0.000, [31, 107, 58]], [0.035, [78, 154, 74]], [0.095, [157, 189, 94]],
    [0.175, [216, 196, 122]], [0.275, [185, 139, 82]], [0.410, [141, 106, 79]],
    [0.570, [185, 170, 156]], [0.740, [255, 255, 255]], [1.001, [255, 255, 255]]
  ];
  function rampColor(v) {
    for (let i = 0; i < RAMP.length - 1; i++) {
      if (v <= RAMP[i + 1][0]) {
        const t = (v - RAMP[i][0]) / (RAMP[i + 1][0] - RAMP[i][0]);
        const a = RAMP[i][1], b = RAMP[i + 1][1];
        return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      }
    }
    return [255, 255, 255];
  }
  function buildReliefTexture(topoData, waterData) {
    const c = document.createElement('canvas');
    c.width = TEX_W; c.height = TEX_H;
    const ctx = c.getContext('2d');
    const out = ctx.createImageData(TEX_W, TEX_H);
    for (let i = 0; i < TEX_W * TEX_H; i++) {
      const k = i * 4;
      const isWater = waterData ? waterData.data[k] > 128 : topoData.data[k] < 4;
      if (isWater) {
        out.data[k] = 24; out.data[k + 1] = 72; out.data[k + 2] = 118;
      } else {
        const col = rampColor(topoData.data[k] / 255);
        out.data[k] = col[0]; out.data[k + 1] = col[1]; out.data[k + 2] = col[2];
      }
      out.data[k + 3] = 255;
    }
    ctx.putImageData(out, 0, 0);
    const t = new THREE.CanvasTexture(c);
    if (THREE.sRGBEncoding) t.encoding = THREE.sRGBEncoding;
    return t;
  }

  /* 通信できないときの予備テクスチャ（単純な海と陸の色） */
  function fallbackTexture() {
    const c = document.createElement('canvas');
    c.width = 16; c.height = 8;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#1b4670'; ctx.fillRect(0, 0, 16, 8);
    const t = new THREE.CanvasTexture(c);
    if (THREE.sRGBEncoding) t.encoding = THREE.sRGBEncoding;
    return t;
  }

  /* =========================================================
     TopoJSON（国境）を読む — 小さな自前デコーダ
     ========================================================= */
  function decodeTopo(topology, objName) {
    const o = topology.objects[objName];
    const tr = topology.transform;
    const sx = tr ? tr.scale[0] : 1, sy = tr ? tr.scale[1] : 1;
    const dx = tr ? tr.translate[0] : 0, dy = tr ? tr.translate[1] : 0;
    const arcs = topology.arcs.map((arc) => {
      let x = 0, y = 0;
      return arc.map((p) => {
        if (tr) { x += p[0]; y += p[1]; return [x * sx + dx, y * sy + dy]; }
        return [p[0], p[1]];
      });
    });
    const line = (idxs) => {
      const out = [];
      for (let k = 0; k < idxs.length; k++) {
        const i = idxs[k];
        let a = i < 0 ? arcs[~i].slice().reverse() : arcs[i];
        if (out.length) a = a.slice(1);
        for (let j = 0; j < a.length; j++) out.push(a[j]);
      }
      return out;
    };
    return o.geometries.map((g) => {
      const rings = [];
      if (g.type === 'Polygon') { for (const r of g.arcs) rings.push(line(r)); }
      else if (g.type === 'MultiPolygon') { for (const poly of g.arcs) for (const r of poly) rings.push(line(r)); }
      let x0 = 999, y0 = 999, x1 = -999, y1 = -999;
      for (const r of rings) for (const p of r) {
        if (p[0] < x0) x0 = p[0]; if (p[0] > x1) x1 = p[0];
        if (p[1] < y0) y0 = p[1]; if (p[1] > y1) y1 = p[1];
      }
      return { id: +g.id, name: (g.properties && g.properties.name) || '', rings: rings, bbox: [x0, y0, x1, y1] };
    });
  }

  let features = [];
  function featureAt(lon, lat) {
    for (const f of features) {
      const b = f.bbox;
      if (lon < b[0] || lon > b[2] || lat < b[1] || lat > b[3]) continue;
      let inside = false;
      for (const ring of f.rings) {
        for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
          const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
          if ((yi > lat) !== (yj > lat) && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
        }
      }
      if (inside) return f;
    }
    return null;
  }

  /* =========================================================
     線（国境・川・選択中の輪郭）を地表にはりつける
     ========================================================= */
  function makeLines(segments, color, opacity, lift) {
    // segments: [[lat,lon],[lat,lon]] の配列
    const n = segments.length;
    const pos = new Float32Array(n * 3);
    const dirs = new Float32Array(n * 3);
    const hs = new Float32Array(n);
    const v = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      const p = segments[i];
      llToVec(p[0], p[1], 1, v);
      dirs[i * 3] = v.x; dirs[i * 3 + 1] = v.y; dirs[i * 3 + 2] = v.z;
      hs[i] = elevAt(p[0], p[1]);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mesh = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({
      color: color, transparent: true, opacity: opacity, depthWrite: false
    }));
    mesh.userData = { dirs: dirs, hs: hs, lift: lift };
    updateLinePositions(mesh);
    return mesh;
  }
  function updateLinePositions(mesh) {
    const { dirs, hs, lift } = mesh.userData;
    const pos = mesh.geometry.attributes.position.array;
    const s = dispScale();
    for (let i = 0; i < hs.length; i++) {
      const r = 1 + hs[i] * s + lift;
      pos[i * 3] = dirs[i * 3] * r;
      pos[i * 3 + 1] = dirs[i * 3 + 1] * r;
      pos[i * 3 + 2] = dirs[i * 3 + 2] * r;
    }
    mesh.geometry.attributes.position.needsUpdate = true;
    mesh.geometry.computeBoundingSphere();
  }
  function ringsToSegments(rings, closed) {
    const seg = [];
    for (const ring of rings) {
      for (let i = 0; i < ring.length - 1; i++) {
        seg.push([ring[i][1], ring[i][0]], [ring[i + 1][1], ring[i + 1][0]]);
      }
      if (closed && ring.length > 2) {
        seg.push([ring[ring.length - 1][1], ring[ring.length - 1][0]], [ring[0][1], ring[0][0]]);
      }
    }
    return seg;
  }

  function buildBorders() {
    const seg = [];
    for (const f of features) {
      const s = ringsToSegments(f.rings, true);
      for (const p of s) seg.push(p);
    }
    borderLines = makeLines(seg, 0xffffff, 0.3, 0.004);
    borderLines.visible = state.layers.borders;
    scene.add(borderLines);
  }

  function buildRivers() {
    const seg = [];
    for (const r of window.RIVERS) {
      for (let i = 0; i < r.pts.length - 1; i++) {
        // 直線だと地表からういてしまうので、あいだを細かく分ける
        const a = r.pts[i], b = r.pts[i + 1];
        const steps = 6;
        for (let k = 0; k < steps; k++) {
          const t0 = k / steps, t1 = (k + 1) / steps;
          seg.push([a[0] + (b[0] - a[0]) * t0, a[1] + (b[1] - a[1]) * t0]);
          seg.push([a[0] + (b[0] - a[0]) * t1, a[1] + (b[1] - a[1]) * t1]);
        }
      }
    }
    riverLines = makeLines(seg, 0x5fd8ff, 0.95, 0.007);
    riverLines.visible = state.layers.rivers;
    scene.add(riverLines);
  }

  function highlightCountry(country) {
    if (selectLines) { scene.remove(selectLines); selectLines.geometry.dispose(); selectLines = null; }
    if (!country) return;
    const f = features.find((x) => x.id === country.iso);
    if (!f) return;
    selectLines = makeLines(ringsToSegments(f.rings, true), 0xffd166, 1, 0.009);
    scene.add(selectLines);
  }

  function refreshTerrain() {
    globe.material.displacementScale = dispScale();
    globe.material.bumpScale = 0.004 + state.exagX * 0.0009;
    globe.material.needsUpdate = true;
    pickSphere.scale.setScalar(1 + dispScale() * 0.4);
    if (borderLines) updateLinePositions(borderLines);
    if (riverLines) updateLinePositions(riverLines);
    if (selectLines) updateLinePositions(selectLines);
  }

  /* =========================================================
     ピン（HTMLで地球の上に重ねる）
     ========================================================= */
  const pinEls = [];
  function buildPins() {
    for (const dish of ALL_DISHES) {
      const node = document.createElement('div');
      node.className = 'pin';
      node.innerHTML = '<span class="dot"></span><span class="tag"></span>';
      node.addEventListener('click', (e) => {
        e.stopPropagation();
        if (state.quiz) answerQuiz(dish.country); else selectDish(dish);
      });
      el.pins.appendChild(node);
      pinEls.push({
        el: node, tag: node.querySelector('.tag'), c: dish.country, d: dish,
        dir: llToVec(dish.lat, dish.lon, 1), h: 0, label: ''
      });
    }
  }
  function refreshPinHeights() {
    for (const p of pinEls) p.h = elevAt(p.d.lat, p.d.lon);
  }

  const _placed = [];
  const _active = [];
  function updatePins() {
    const w = window.innerWidth, h = window.innerHeight, s = dispScale();
    const terrainMode = state.listMode === 'terrain' && !state.quiz;
    _active.length = 0;
    for (const p of pinEls) {
      /* どのピンを出すか
         ・地形モード … 選んだ地形にあてはまる料理だけ（料理名を表示）
         ・国を選択中 … その国の料理は全部（料理名）、ほかの国は代表の一品（国名）
         ・ふだん     … 各国の代表の一品だけ（国名）                       */
      let active;
      if (state.quiz) active = p.d.index === 0;
      else if (terrainMode) active = !state.terrain || p.d.terrain.indexOf(state.terrain) >= 0;
      else active = p.d.index === 0 || state.selected === p.c;
      p.el.hidden = !active;
      if (!active) continue;

      const perDish = terrainMode || (state.selected === p.c && dishesOf(p.c).length > 1);
      const label = perDish ? p.d.name : p.c.name;
      if (p.label !== label) { p.label = label; p.tag.textContent = label; }

      const r = 1 + p.h * s + 0.014;
      _pv.copy(p.dir).multiplyScalar(r);
      p.front = p.dir.dot(camera.position);      // 大きいほど手前（1.0が地平線）
      p.visible = p.front > 1.0;
      _pv.project(camera);
      p.x = (_pv.x * 0.5 + 0.5) * w;
      p.y = (-_pv.y * 0.5 + 0.5) * h;
      p.el.style.left = p.x + 'px';
      p.el.style.top = p.y + 'px';
      p.el.classList.toggle('behind', !p.visible);
      _active.push(p);
    }
    // 名前が重ならないよう、手前にあるものから順に、置けるものだけ表示する
    const showLabels = state.layers.labels && !state.quiz;
    _placed.length = 0;
    _active.sort((a, b) => b.front - a.front);
    for (const p of _active) {
      let ok = showLabels && p.visible;
      if (ok) {
        const bw = 32 + p.label.length * 11, bh = 20;
        const x0 = p.x - 8, y0 = p.y - bh / 2, x1 = x0 + bw, y1 = y0 + bh;
        for (let i = 0; i < _placed.length; i++) {
          const q = _placed[i];
          if (x0 < q[2] && x1 > q[0] && y0 < q[3] && y1 > q[1]) { ok = false; break; }
        }
        if (ok) _placed.push([x0, y0, x1, y1]);
      }
      p.el.classList.toggle('nolabel', !ok);
    }
  }

  /* =========================================================
     カメラ操作（自作のかんたんなオービットコントロール）
     ========================================================= */
  function initControls() {
    const c = el.canvas;
    let px = 0, py = 0, pointers = new Map(), pinchDist = 0, moved = 0;

    c.addEventListener('pointerdown', (e) => {
      c.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) { px = e.clientX; py = e.clientY; moved = 0; state.dragging = true; }
      if (pointers.size === 2) pinchDist = twoDist(pointers);
    });
    c.addEventListener('pointermove', (e) => {
      if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const d = twoDist(pointers);
        if (pinchDist > 0) setDist(state.target.dist * (pinchDist / d));
        pinchDist = d;
        return;
      }
      if (state.dragging && pointers.size === 1) {
        const dx = e.clientX - px, dy = e.clientY - py;
        px = e.clientX; py = e.clientY;
        moved += Math.abs(dx) + Math.abs(dy);
        const k = 0.19 * (state.target.dist / 2.9);
        state.target.lon -= dx * k;
        state.target.lat = clamp(state.target.lat + dy * k, -85, 85);
        state.layers.spin = false;
        syncToggleUI();
      } else {
        showHover(e.clientX, e.clientY);
      }
    });
    const up = (e) => {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinchDist = 0;
      if (pointers.size === 0) {
        if (state.dragging && moved < 6) onTap(e.clientX, e.clientY);
        state.dragging = false;
      }
    };
    c.addEventListener('pointerup', up);
    c.addEventListener('pointercancel', up);
    c.addEventListener('pointerleave', () => { el.hover.style.opacity = 0; });
    c.addEventListener('wheel', (e) => {
      e.preventDefault();
      setDist(state.target.dist * (1 + Math.sign(e.deltaY) * 0.12));
    }, { passive: false });
  }
  function twoDist(m) {
    const a = [...m.values()];
    return Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y);
  }
  function setDist(d) { state.target.dist = clamp(d, 1.28, 6.5); }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  function flyTo(lat, lon, dist) {
    state.target.lat = clamp(lat, -85, 85);
    // いちばん近い方向に回す
    let d = lon - state.view.lon;
    while (d > 180) d -= 360;
    while (d < -180) d += 360;
    state.target.lon = state.view.lon + d;
    if (dist) setDist(dist);
    state.layers.spin = false;
    syncToggleUI();
  }

  /* ---------- 画面上の点 → 国 ---------- */


  function pickLL(cx, cy) {
    ndc.set((cx / window.innerWidth) * 2 - 1, -(cy / window.innerHeight) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObject(pickSphere, false);
    if (!hits.length) return null;
    return vecToLL(hits[0].point);
  }
  /* 110m の国境データには、済州島のような小さな島がふくまれていない。
     海の上だと判定されたときは、近くの料理のピンを手がかりにする。 */
  function nearestDish(lat, lon, maxDeg) {
    let best = null, bestD = maxDeg * maxDeg;
    for (const d of ALL_DISHES) {
      const dy = d.lat - lat;
      const dx = (d.lon - lon) * Math.cos(lat * DEG);
      const dd = dx * dx + dy * dy;
      if (dd < bestD) { bestD = dd; best = d; }
    }
    return best;
  }

  let hoverT = 0;
  function showHover(cx, cy) {
    if (!features.length || state.quiz) return;
    const now = performance.now();
    if (now - hoverT < 70) return;
    hoverT = now;
    const ll = pickLL(cx, cy);
    if (!ll) { el.hover.style.opacity = 0; return; }
    const f = featureAt(ll.lon, ll.lat);
    let label = null;
    if (f) {
      const known = window.COUNTRIES.find((c) => c.iso === f.id);
      label = known ? known.name + '　🍽' : f.name;
    } else {
      const near = nearestDish(ll.lat, ll.lon, 1.2);
      if (near) label = near.country.name + '　🍽';
    }
    if (!label) { el.hover.style.opacity = 0; return; }
    el.hover.textContent = label;
    el.hover.style.left = cx + 'px';
    el.hover.style.top = cy + 'px';
    el.hover.style.opacity = 1;
  }
  function onTap(cx, cy) {
    const ll = pickLL(cx, cy);
    if (!ll) return;
    const f = featureAt(ll.lon, ll.lat);
    if (!f) {
      const near = nearestDish(ll.lat, ll.lon, 1.2);
      if (near) { if (state.quiz) answerQuiz(near.country); else selectDish(near); }
      return;
    }
    const known = window.COUNTRIES.find((c) => c.iso === f.id);
    if (known) { if (state.quiz) answerQuiz(known); else selectCountry(known); }
  }

  /* =========================================================
     国の詳細パネル
     ========================================================= */
  function selectDish(dish) {
    if (state.quiz) { answerQuiz(dish.country); return; }   // クイズ中は「答え」として扱う
    const c = dish.country;
    state.selected = c;
    state.selectedDish = dish;
    highlightCountry(c);
    renderDetail(dish);
    el.detail.classList.add('open');
    flyTo(dish.lat, dish.lon, Math.min(state.target.dist, 2.1));
    syncSelectionUI();
  }
  function selectCountry(c) { selectDish(dishesOf(c)[0]); }

  function syncSelectionUI() {
    const key = state.selectedDish ? state.selectedDish.key : '';
    const cid = state.selected ? state.selected.id : '';
    for (const p of pinEls) p.el.classList.toggle('sel', p.d === state.selectedDish);
    for (const b of el.listBody.querySelectorAll('.c-item')) b.classList.toggle('sel', b.dataset.id === cid);
    for (const b of el.listBody.querySelectorAll('.d-row')) b.classList.toggle('sel', b.dataset.dkey === key);
  }
  function closeDetail() {
    el.detail.classList.remove('open');
    state.selected = null;
    state.selectedDish = null;
    highlightCountry(null);
    syncSelectionUI();
  }

  function renderDetail(dish) {
    const c = dish.country;
    const list = dishesOf(c);
    el.dCountry.textContent = c.flag + '　' + c.region + '　/　' + c.en;
    el.dDish.textContent = dish.name;
    el.dLocal.textContent = dish.local;

    /* 同じ国に料理が複数あればタブを出す */
    el.dTabs.classList.toggle('hide', list.length < 2);
    el.dTabs.innerHTML = '';
    if (list.length > 1) {
      for (const d of list) {
        const b = document.createElement('button');
        b.textContent = d.name;
        if (d === dish) b.className = 'on';
        b.addEventListener('click', () => selectDish(d));
        el.dTabs.appendChild(b);
      }
    }

    const terr = dish.terrain.map((k) => {
      const t = terrainDef(k);
      return t ? '<span>' + t.icon + ' ' + t.label + '</span>' : '';
    }).join('');

    el.dBody.innerHTML =
      '<div id="dArt">' + dishVisual(dish, false) + '</div>' +
      '<div id="dCaption">' + dish.caption + '</div>' +
      '<div id="dPlace">' +
        '<div class="alt">' + fmtM(dish.alt) + '<small>m</small></div>' +
        '<div class="pl"><b>' + dish.area + '</b><span>' + fmtLL(dish.lat, dish.lon) + '</span>' +
        '<div class="terr">' + terr + '</div></div>' +
      '</div>' +
      (list.length > 1
        ? '<div class="sec"><h3>同じ国の、ちがう土地の料理</h3><p style="font-size:12.5px">' +
          list.filter((d) => d !== dish).map((d) =>
            '「' + d.name + '」（' + d.area + '・標高' + fmtM(d.alt) + 'm）').join('　') +
          ' もあります。上のタブで見くらべてみよう。</p></div>'
        : '') +
      '<div class="sec"><h3>おもな材料</h3><div class="chips">' +
      dish.materials.map((m) => '<span class="chip">' + m + '</span>').join('') + '</div></div>' +
      '<div class="sec"><h3>なぜ、この料理が生まれたのか</h3>' +
      why('⛰', '地形と気候', dish.why.land) +
      why('🕰', '歴史と交流', dish.why.history) +
      why('🏠', 'くらしと信仰', dish.why.life) +
      '</div>' +
      '<div class="sec"><h3>国の地理データ</h3><dl class="geo">' +
      row('首都', c.geo.capital) + row('気候', c.geo.climate) + row('最高地点', c.geo.high) +
      row('おもな川', c.geo.rivers) + row('面する海', c.geo.sea) +
      '</dl></div>' +
      '<div class="sec"><h3>調べてみよう</h3><ol class="q">' +
      dish.questions.map((q) => '<li>' + q + '</li>').join('') + '</ol></div>' +
      '<button id="dFly">この料理が生まれた土地をアップにする</button>';
    const fly = document.getElementById('dFly');
    if (fly) fly.addEventListener('click', () => flyTo(dish.lat, dish.lon, 1.5));
    el.dBody.scrollTop = 0;
  }
  const why = (ic, t, b) => '<div class="why"><div class="ic">' + ic + '</div><div><b>' + t + '</b><p>' + b + '</p></div></div>';
  const row = (k, v) => '<dt>' + k + '</dt><dd>' + v + '</dd>';

  /* =========================================================
     国リスト
     ========================================================= */
  function searchText(c) {
    return (c.name + c.en + c.region + (c.kw || '') +
      dishesOf(c).map((d) => d.name + d.local + d.area + d.materials.join('') +
        d.terrain.map((k) => { const t = terrainDef(k); return t ? t.label : ''; }).join('')).join('')
    ).toLowerCase();
  }

  function buildList(filter) {
    if (state.listMode === 'terrain') { buildTerrainList(); return; }
    el.tagWrap.hidden = true;
    el.tagDesc.hidden = true;
    el.search.hidden = false;
    const q = (filter || '').trim().toLowerCase();
    el.listBody.innerHTML = '';
    for (const region of window.REGIONS) {
      const items = window.COUNTRIES.filter((c) => c.region === region && (!q || searchText(c).includes(q)));
      if (!items.length) continue;
      const h = document.createElement('div');
      h.className = 'region-h';
      h.textContent = region;
      el.listBody.appendChild(h);
      for (const c of items) {
        const list = dishesOf(c);
        const b = document.createElement('button');
        b.className = 'c-item';
        b.dataset.id = c.id;
        if (state.selected === c) b.classList.add('sel');
        b.innerHTML = '<span class="flag">' + c.flag + '</span><span><span class="nm">' + c.name +
          '</span><span class="dish">' + c.dish +
          (list.length > 1 ? '　ほか' + (list.length - 1) + '品' : '') + '</span></span>';
        b.addEventListener('click', () => selectCountry(c));
        el.listBody.appendChild(b);
      }
    }
    if (!el.listBody.children.length) {
      el.listBody.innerHTML = '<div style="padding:18px 10px;font-size:12px;color:#9fb0c8">見つかりませんでした</div>';
    }
    syncSelectionUI();
  }

  /* ---------- 地形からくらべる（標高の高い順にならべる） ---------- */
  const MAX_ALT = 3850;
  function buildTerrainList() {
    el.search.hidden = true;
    el.tagWrap.hidden = false;
    el.tagDesc.hidden = false;

    el.tagWrap.innerHTML = '';
    const mk = (key, icon, label) => {
      const b = document.createElement('button');
      b.className = 'tagchip' + (state.terrain === key ? ' on' : '');
      b.innerHTML = (icon ? icon + ' ' : '') + label;
      b.addEventListener('click', () => {
        state.terrain = (state.terrain === key) ? null : key;
        buildTerrainList();
      });
      el.tagWrap.appendChild(b);
    };
    mk(null, '', 'すべて');
    for (const t of window.TERRAINS) mk(t.key, t.icon, t.label);

    const cur = state.terrain ? terrainDef(state.terrain) : null;
    el.tagDesc.textContent = cur
      ? cur.desc + ' — ' + ALL_DISHES.filter((d) => d.terrain.indexOf(cur.key) >= 0).length + '品'
      : '標高の高い順にならべています。タグをえらぶと、その地形で生まれた料理だけになります。';

    const items = ALL_DISHES
      .filter((d) => !state.terrain || d.terrain.indexOf(state.terrain) >= 0)
      .sort((a, b) => b.alt - a.alt);

    el.listBody.innerHTML = '';
    for (const d of items) {
      const b = document.createElement('button');
      b.className = 'd-row';
      b.dataset.dkey = d.key;
      if (state.selectedDish === d) b.classList.add('sel');
      const pct = Math.max(2, Math.round((d.alt / MAX_ALT) * 100));
      b.innerHTML =
        '<span class="t"><span class="nm">' + d.country.flag + ' ' + d.name +
        '</span><span class="m">' + fmtM(d.alt) + 'm</span></span>' +
        '<span class="a">' + d.country.name + '・' + d.area + '</span>' +
        '<span class="d-bar"><i style="width:' + pct + '%"></i></span>';
      b.addEventListener('click', () => selectDish(d));
      el.listBody.appendChild(b);
    }
    if (!items.length) {
      el.listBody.innerHTML = '<div style="padding:18px 10px;font-size:12px;color:#9fb0c8">あてはまる料理がありません</div>';
    }
  }
  function setListMode(mode) {
    state.listMode = mode;
    for (const b of el.modeTabs.querySelectorAll('button')) b.classList.toggle('on', b.dataset.mode === mode);
    buildList(el.search.value);
  }

  /* =========================================================
     料理クイズ
     ========================================================= */
  /* =========================================================
     国名の照合 — 児童が入力した国名を国とむすびつける
     ひらがな／カタカナ／漢字／英語、長音や中黒のゆれを吸収する。
     ========================================================= */
  const COUNTRY_ALIAS = {
    jp: ['にほん', 'にっぽん', 'japan'],
    kr: ['かんこく', '大韓民国', 'korea', 'southkorea', 'republicofkorea'],
    cn: ['ちゅうごく', '中華人民共和国', 'china'],
    in: ['いんど', 'india'],
    th: ['たい', 'thailand'],
    vn: ['べとなむ', 'vietnam', 'ベトナム社会主義共和国'],
    mn: ['もんごる', 'mongolia'],
    tr: ['とるこ', 'テュルキエ', 'turkey', 'turkiye'],
    ma: ['もろっこ', 'morocco'],
    et: ['えちおぴあ', 'ethiopia'],
    it: ['いたりあ', 'italy'],
    es: ['すぺいん', 'spain'],
    fr: ['ふらんす', 'france'],
    de: ['どいつ', 'ドイツ連邦共和国', 'germany'],
    gb: ['いぎりす', '英国', 'イングランド', 'uk', 'unitedkingdom', 'england', 'britain'],
    ch: ['すいす', 'switzerland'],
    ua: ['うくらいな', 'ukraine'],
    no: ['のるうぇー', 'norway'],
    mx: ['めきしこ', 'mexico'],
    pe: ['ぺるー', 'peru'],
    br: ['ぶらじる', 'ブラジル連邦共和国', 'brazil'],
    us: ['あめりか', 'アメリカ', '米国', 'アメリカ合衆国', 'usa', 'us', 'unitedstates', 'america'],
    nz: ['にゅーじーらんど', 'ニュージランド', 'nz', 'newzealand'],
    id: ['いんどねしあ', 'indonesia'],
    ph: ['ふぃりぴん', 'philippines'],
    np: ['ねぱーる', 'nepal'],
    uz: ['うずべきすたん', 'uzbekistan'],
    lb: ['ればのん', 'lebanon'],
    eg: ['えじぷと', 'egypt'],
    sn: ['せねがる', 'senegal'],
    ng: ['ないじぇりあ', 'nigeria'],
    ke: ['けにあ', 'けにや', 'kenya'],
    za: ['みなみあふりか', '南アフリカ共和国', 'southafrica'],
    gr: ['ぎりしゃ', 'ギリシア', 'greece'],
    pt: ['ぽるとがる', 'portugal'],
    pl: ['ぽーらんど', 'poland'],
    hu: ['はんがりー', 'hungary'],
    ru: ['ろしあ', 'ロシア連邦', 'russia'],
    ca: ['かなだ', 'canada'],
    ar: ['あるぜんちん', 'argentina'],
    jm: ['じゃまいか', 'jamaica'],
    au: ['おーすとらりあ', 'オーストラリア連邦', 'australia'],
    fj: ['ふぃじー', 'fiji']
  };
  /* 全角→半角、カタカナ→ひらがな、記号と長音をのぞいてそろえる */
  function normName(v) {
    return String(v || '')
      .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xfee0))
      .replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60))
      .toLowerCase()
      .replace(/[\s　・･()（）、。,.\-‐ー–—_'"]/g, '');
  }
  let nameIndex = null;
  function buildNameIndex() {
    nameIndex = new Map();
    for (const c of window.COUNTRIES) {
      const keys = [c.name, c.en].concat(COUNTRY_ALIAS[c.id] || []);
      for (const k of keys) {
        const n = normName(k);
        if (n && !nameIndex.has(n)) nameIndex.set(n, c);
      }
    }
  }
  function findCountryByName(input) {
    if (!nameIndex) buildNameIndex();
    const q = normName(input);
    if (!q) return null;
    if (nameIndex.has(q)) return nameIndex.get(q);       // ぴったり一致
    if (q.length < 3) return null;
    let hit = null;                                       // 部分一致は1つに決まるときだけ
    for (const [k, c] of nameIndex) {
      if (k.indexOf(q) === 0 || q.indexOf(k) === 0) {
        if (hit && hit !== c) return null;
        hit = c;
      }
    }
    return hit;
  }

  let quizPool = [];
  let listWasOpen = true;
  function startQuiz() {
    closeDetail();
    state.quiz = { n: 0, score: 0, cur: null, answered: false };
    quizPool = ALL_DISHES.slice();
    // 国一覧には答えが書いてあるので、クイズ中は閉じる
    listWasOpen = !el.listPanel.classList.contains('hide');
    el.listPanel.classList.add('hide');
    $('#btnList').classList.remove('on');
    el.quiz.classList.add('open');
    nextQuiz();
  }
  function endQuiz() {
    state.quiz = null;
    el.quiz.classList.remove('open');
    highlightCountry(null);
    $('#btnQuiz').classList.remove('on');
    if (listWasOpen) {
      el.listPanel.classList.remove('hide');
      $('#btnList').classList.add('on');
    }
  }
  function nextQuiz() {
    const q = state.quiz;
    if (!q) return;
    if (!quizPool.length) quizPool = ALL_DISHES.slice();
    const i = Math.floor(Math.random() * quizPool.length);
    q.cur = quizPool.splice(i, 1)[0];
    q.n++; q.answered = false;
    highlightCountry(null);
    el.qStep.textContent = '第' + q.n + '問　—　正解 ' + q.score + '／' + (q.n - 1);
    el.qArt.innerHTML = dishVisual(q.cur, true);
    el.qDish.textContent = '「' + q.cur.name + '」';
    el.qLocal.textContent = q.cur.local || '';
    el.qTitle.textContent = 'この料理は、どこの国のもの？';
    el.qHint.textContent = 'ヒント：' + q.cur.materials.slice(0, 4).join('・') + ' を使います';
    el.qResult.classList.remove('show');
    el.qResult.innerHTML = '';
    el.qForm.classList.remove('done');
    el.qInput.value = '';
    el.qMiss.textContent = '';
    // タブレットではキーボードが地球儀をかくすので、広い画面のときだけ入力欄にフォーカスする
    if (window.innerWidth > 900) setTimeout(() => el.qInput.focus(), 60);
  }

  /* 入力された国名で答える */
  function submitQuizName() {
    const q = state.quiz;
    if (!q || q.answered) return;
    const raw = el.qInput.value.trim();
    if (!raw) return;
    const c = findCountryByName(raw);
    if (!c) {
      el.qMiss.textContent = '「' + raw + '」が見つかりません。ちがう書き方で試すか、地球儀の点をタップしてね';
      el.qInput.select();
      return;
    }
    el.qMiss.textContent = '';
    answerQuiz(c);
  }
  function answerQuiz(c) {
    const q = state.quiz;
    if (!q || q.answered) return;
    q.answered = true;
    el.qForm.classList.add('done');
    el.qMiss.textContent = '';
    if (document.activeElement === el.qInput) el.qInput.blur();
    const ans = q.cur.country;
    const ok = c === ans;
    if (ok) q.score++;
    highlightCountry(ans);
    flyTo(q.cur.lat, q.cur.lon, Math.min(state.target.dist, 2.2));
    el.qResult.classList.add('show');
    el.qResult.innerHTML =
      (ok ? '<b style="color:var(--ok)">せいかい！</b>' : '<b style="color:var(--ng)">ざんねん…</b>　あなたの答え：' + c.name) +
      '<br>「' + q.cur.name + '」は <b>' + ans.name + '</b> の料理です<br>' +
      '<span style="color:var(--accent2);font-size:12px">' + q.cur.area + '　標高' + fmtM(q.cur.alt) + 'm</span><br>' +
      '<span style="color:var(--dim);font-size:12px">' + q.cur.why.land + '</span>' +
      '<div style="margin-top:10px"><button class="btn" id="qMore">この料理をくわしく見る</button></div>';
    const more = document.getElementById('qMore');
    if (more) more.addEventListener('click', () => { const t = q.cur; endQuiz(); selectDish(t); });
    el.qStep.textContent = '第' + q.n + '問　—　正解 ' + q.score + '／' + q.n;
  }

  /* =========================================================
     UIの配線
     ========================================================= */
  function syncToggleUI() {
    for (const t of document.querySelectorAll('.tg')) {
      t.classList.toggle('on', !!state.layers[t.dataset.layer]);
    }
  }
  function initUI() {
    $('#btnList').addEventListener('click', (e) => {
      el.listPanel.classList.toggle('hide');
      e.currentTarget.classList.toggle('on', !el.listPanel.classList.contains('hide'));
    });
    $('#btnMode').addEventListener('click', (e) => {
      state.mode = state.mode === 'natural' ? 'relief' : 'natural';
      applyMode();
      e.currentTarget.classList.toggle('on', state.mode === 'relief');
      e.currentTarget.textContent = state.mode === 'relief' ? 'しぜんの色' : '高さの色分け';
    });
    $('#btnQuiz').addEventListener('click', (e) => {
      if (state.quiz) endQuiz();
      else { startQuiz(); e.currentTarget.classList.add('on'); }
    });
    $('#btnHelp').addEventListener('click', () => el.help.classList.add('open'));
    $('#helpClose').addEventListener('click', () => el.help.classList.remove('open'));
    el.help.addEventListener('click', (e) => { if (e.target === el.help) el.help.classList.remove('open'); });
    $('#dClose').addEventListener('click', closeDetail);
    $('#qNext').addEventListener('click', nextQuiz);
    el.qForm.addEventListener('submit', (e) => { e.preventDefault(); submitQuizName(); });
    el.qInput.addEventListener('input', () => { el.qMiss.textContent = ''; });
    // 端末によっては Enter でフォームが送られないことがあるので、念のため直接ひろう
    el.qInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); submitQuizName(); }
    });
    $('#qEnd').addEventListener('click', endQuiz);

    el.search.addEventListener('input', () => buildList(el.search.value));

    for (const b of el.modeTabs.querySelectorAll('button')) {
      b.addEventListener('click', () => setListMode(b.dataset.mode));
    }

    el.exag.addEventListener('input', () => {
      state.exagX = +el.exag.value;
      el.exagVal.textContent = state.exagX === 0 ? '実物どおり' : '×' + state.exagX;
      refreshTerrain();
    });

    for (const t of document.querySelectorAll('.tg')) {
      t.addEventListener('click', () => {
        const k = t.dataset.layer;
        state.layers[k] = !state.layers[k];
        if (k === 'borders' && borderLines) borderLines.visible = state.layers.borders;
        if (k === 'rivers' && riverLines) riverLines.visible = state.layers.rivers;
        syncToggleUI();
      });
    }
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { el.help.classList.remove('open'); closeDetail(); }
    });
  }
  function applyMode() {
    const t = state.mode === 'relief' ? reliefTex : naturalTex;
    if (t) { globe.material.map = t; globe.material.needsUpdate = true; }
    el.legend.classList.toggle('show', state.mode === 'relief');
  }

  /* =========================================================
     メインループ
     ========================================================= */

  let lastT = 0;
  function animate(now) {
    requestAnimationFrame(animate);
    // 秒あたりで動かすので、30fpsの端末でも60fpsの端末でも同じ速さになる
    const dt = lastT ? Math.min((now - lastT) / 1000, 0.1) : 1 / 60;
    lastT = now;
    const k = 1 - Math.pow(1 - 0.12, dt * 60);

    if (state.layers.spin && !state.dragging) state.target.lon += 3.3 * dt;

    const v = state.view, t = state.target;
    v.lat += (t.lat - v.lat) * k;
    v.lon += (t.lon - v.lon) * k;
    v.dist += (t.dist - v.dist) * k;

    llToVec(v.lat, v.lon, v.dist, camPos);
    camera.position.copy(camPos);
    camera.lookAt(0, 0, 0);

    // 光は視点よりすこし左上から当てて、山のかげが見えるようにする
    const lp = camPos.clone().normalize();
    const c = Math.cos(0.75), s = Math.sin(0.75);
    sunLight.position.set(lp.x * c + lp.z * s, lp.y + 0.45, -lp.x * s + lp.z * c).multiplyScalar(6);

    updatePins();
    renderer.render(scene, camera);
  }

  /* =========================================================
     起動
     ========================================================= */
  function setProgress(p, note) {
    el.barFill.style.width = Math.round(p * 100) + '%';
    if (note) el.loadNote.textContent = note;
  }

  async function boot() {
    if (typeof THREE === 'undefined') {
      el.loading.innerHTML = '<div class="box"><h2>読みこめませんでした</h2>' +
        '<p>3D表示に必要なライブラリ（three.js）を取得できませんでした。<br>' +
        'インターネットにつないでから、ページを再読みこみしてください。</p></div>';
      return;
    }
    initThree();
    initControls();
    initUI();
    buildDishIndex();
    buildList('');
    buildPins();
    setProgress(0.08, '地形データを読みこんでいます…');

    /* --- テクスチャ --- */
    let topoImg = null, waterImg = null, colorImg = null;
    try {
      colorImg = await loadImage(CDN_IMG + 'earth-blue-marble.jpg');
      setProgress(0.35, '標高データを読みこんでいます…');
      topoImg = await loadImage(CDN_IMG + 'earth-topology.png');
      setProgress(0.6, '海と陸のデータを読みこんでいます…');
      waterImg = await loadImage(CDN_IMG + 'earth-water.png');
      setProgress(0.72, '');
    } catch (err) {
      console.warn(err);
    }

    if (colorImg) {
      naturalTex = new THREE.Texture(colorImg);
      if (THREE.sRGBEncoding) naturalTex.encoding = THREE.sRGBEncoding;
      naturalTex.needsUpdate = true;
    } else {
      naturalTex = fallbackTexture();
      el.loadNote.textContent = '地形データを取得できなかったため、簡易表示になります。';
    }
    globe.material.map = naturalTex;

    if (topoImg) {
      const dt = new THREE.Texture(topoImg);
      dt.needsUpdate = true;
      globe.material.displacementMap = dt;
      globe.material.bumpMap = dt;
      const topoData = toCanvasData(topoImg);
      elevData = topoData.data;
      const waterData = waterImg ? toCanvasData(waterImg) : null;
      if (waterImg) {
        const st = new THREE.Texture(waterImg);
        st.needsUpdate = true;
        globe.material.specularMap = st;
      }
      reliefTex = buildReliefTexture(topoData, waterData);
    }
    globe.material.needsUpdate = true;
    refreshPinHeights();
    refreshTerrain();
    setProgress(0.82, '国境データを読みこんでいます…');

    /* --- 国境 --- */
    try {
      const res = await fetch(TOPO_URL);
      const topo = await res.json();
      features = decodeTopo(topo, 'countries');
      buildBorders();
    } catch (err) {
      console.warn('国境データを読みこめませんでした', err);
      const t = document.querySelector('[data-layer="borders"]');
      if (t) { t.disabled = true; t.style.opacity = .35; }
    }
    setProgress(0.95, '');
    buildRivers();
    setProgress(1, '');

    // 動作確認用（コンソールから状態を見るため）
    window.__app = {
      state: state, globe: globe, flyTo: flyTo, elevAt: elevAt, dispScale: dispScale,
      features: features, featureAt: featureAt,
      dishes: ALL_DISHES, dishesOf: dishesOf, selectDish: selectDish,
      findCountryByName: findCountryByName
    };

    animate();
    setTimeout(() => el.loading.classList.add('done'), 350);

    // 初めて開いたときだけ使い方を出す（2回目からは「使い方」ボタンで）
    let firstTime = true;
    try { firstTime = !localStorage.getItem('wc-seen'); localStorage.setItem('wc-seen', '1'); } catch (e) { /* 非公開モードなど */ }
    if (firstTime) {
      setTimeout(() => {
        if (!state.selected && !state.quiz) el.help.classList.add('open');
      }, 900);
    }
  }

  window.addEventListener('DOMContentLoaded', boot);
})();
