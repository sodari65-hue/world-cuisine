/* =========================================================
   dishes.js — 郷土料理イラスト（すべてこのアプリ用の自作SVG）
   外部画像を一切使わないので、オフラインでも表示できます。
   ========================================================= */
(function (global) {
  'use strict';

  const DISH_ART = {};

  /* 影・湯気などの共通パーツ */
  const shadow = (cx, cy, rx, ry, o) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#000" opacity="${o || 0.22}"/>`;

  const steam = (x, y, s) => `<g opacity=".4" stroke="#fff" stroke-width="3.2" fill="none" stroke-linecap="round">
    <path d="M${x} ${y} c-7 -10 7 -16 0 -26"/>
    <path d="M${x + 15} ${y + 5} c-7 -11 7 -17 0 -28"/>
    <path d="M${x - 15} ${y + 4} c-6 -9 6 -14 0 -23"/></g>`;

  function art(id, bgA, bgB, inner) {
    DISH_ART[id] =
      `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-label="${id}">` +
      `<defs><radialGradient id="bg_${id}" cx="50%" cy="34%" r="82%">` +
      `<stop offset="0" stop-color="${bgA}"/><stop offset="1" stop-color="${bgB}"/></radialGradient></defs>` +
      `<rect width="320" height="200" fill="url(#bg_${id})"/>` + inner + `</svg>`;
  }

  /* ───────────── 日本：寿司 ───────────── */
  art('sushi', '#24314a', '#0f1725', `
    <g transform="translate(-8,-16) scale(1.05)">
    ${shadow(160, 168, 120, 13, .3)}
    <g stroke="#3b2a1c" stroke-width="5" stroke-linecap="round" opacity=".95">
      <path d="M40 116 L258 98"/><path d="M40 126 L258 108"/>
    </g>
    <g transform="translate(160,88) rotate(-3)">
      <rect x="-120" y="40" width="240" height="30" rx="6" fill="#5e3f28"/>
      <rect x="-120" y="30" width="240" height="14" rx="7" fill="#8a6039"/>
      <rect x="-120" y="32" width="240" height="4" rx="2" fill="#a67a4c" opacity=".7"/>
    </g>
    <g transform="translate(88,108) rotate(-7)">
      <rect x="-30" y="-6" width="60" height="26" rx="12" fill="#f6f0e2"/>
      <rect x="-32" y="-18" width="64" height="17" rx="7" fill="#d9483f"/>
      <rect x="-26" y="-15" width="42" height="4.5" rx="2" fill="#f2857a" opacity=".75"/>
      <rect x="-30" y="-7" width="60" height="4" rx="2" fill="#fff" opacity=".5"/>
    </g>
    <g transform="translate(158,102) rotate(4)">
      <rect x="-30" y="-6" width="60" height="26" rx="12" fill="#f6f0e2"/>
      <rect x="-32" y="-18" width="64" height="17" rx="7" fill="#f0873c"/>
      <path d="M-30 -14 h60 M-30 -8 h60" stroke="#ffd0a5" stroke-width="2.6" opacity=".85"/>
      <rect x="-30" y="-7" width="60" height="4" rx="2" fill="#fff" opacity=".5"/>
    </g>
    <g transform="translate(228,110) rotate(-4)">
      <rect x="-28" y="-5" width="56" height="25" rx="11" fill="#f6f0e2"/>
      <rect x="-30" y="-19" width="60" height="18" rx="4" fill="#f5cd4e"/>
      <rect x="-30" y="-19" width="60" height="5" rx="2" fill="#ffe07d" opacity=".8"/>
      <rect x="-9" y="-21" width="18" height="42" rx="2" fill="#26313d"/>
    </g>
    <g transform="translate(272,124)">
      <ellipse cx="0" cy="4" rx="17" ry="7" fill="#000" opacity=".2"/>
      <path d="M-13 2 q4 -14 13 -14 q9 0 13 14 z" fill="#8fc24a"/>
      <path d="M-6 -4 q5 -6 10 -2" stroke="#b7e07a" stroke-width="2.4" fill="none"/>
    </g>
    <g transform="translate(48,150)">
      <ellipse cx="0" cy="6" rx="28" ry="10" fill="#000" opacity=".22"/>
      <ellipse cx="0" cy="0" rx="28" ry="12" fill="#e9e3d6"/>
      <ellipse cx="0" cy="0" rx="21" ry="8" fill="#3a2a22"/>
      <ellipse cx="-7" cy="-2" rx="7" ry="2.6" fill="#5e453a" opacity=".8"/>
    </g>
    </g>`);

  /* ───────────── 韓国：キムチ ───────────── */
  art('kimchi', '#3b2331', '#1a1016', `
    ${shadow(158, 172, 112, 12, .32)}
    <g transform="translate(252,86)">
      <path d="M-30 -14 q30 -16 60 0 l6 46 q-36 14 -72 0 z" fill="#4a3a33"/>
      <ellipse cx="0" cy="-14" rx="30" ry="9" fill="#6b5347"/>
      <ellipse cx="0" cy="-15" rx="22" ry="6" fill="#2b211c"/>
      <path d="M-24 6 q24 8 48 0" stroke="#8a6d5c" stroke-width="2.5" fill="none" opacity=".7"/>
    </g>
    <g transform="translate(150,124)">
      <path d="M-86 -6 q0 48 86 48 q86 0 86 -48 z" fill="#efe9e0"/>
      <ellipse cx="0" cy="-6" rx="86" ry="22" fill="#fbf7f1"/>
      <ellipse cx="0" cy="-6" rx="76" ry="18" fill="#c6362b"/>
      <g>
        <path d="M-62 -10 q18 -22 44 -14 q20 6 10 20 q-24 12 -54 -6z" fill="#d8452f"/>
        <path d="M-58 -9 q16 -16 38 -11" stroke="#f6ecd8" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M-14 -16 q26 -16 50 -2 q12 8 -2 16 q-26 8 -48 -14z" fill="#c3301f"/>
        <path d="M-8 -13 q22 -10 42 0" stroke="#f3e6cd" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M6 -2 q28 -12 48 4 q-18 14 -48 -4z" fill="#e2563a"/>
        <path d="M-48 2 q26 -10 44 2" stroke="#f6ecd8" stroke-width="4" fill="none" stroke-linecap="round" opacity=".9"/>
      </g>
      <g fill="#f4e6c4"><circle cx="-34" cy="-14" r="2"/><circle cx="4" cy="-22" r="2"/><circle cx="34" cy="-8" r="2"/><circle cx="-12" cy="-4" r="2"/></g>
      <g stroke="#3f7a35" stroke-width="3" fill="none" stroke-linecap="round">
        <path d="M46 -14 q10 -8 18 -4"/><path d="M-66 -16 q-8 -6 -14 -4"/>
      </g>
      <path d="M-86 -6 q0 48 86 48 q86 0 86 -48" fill="none" stroke="#d6cec2" stroke-width="2"/>
    </g>`);

  /* ───────────── 中国：麻婆豆腐 ───────────── */
  art('mapo', '#3d2119', '#1a0f0b', `
    ${shadow(160, 174, 108, 12, .34)}
    ${steam(150, 60, 1)}
    <g transform="translate(160,128)">
      <path d="M-84 -8 q0 46 84 46 q84 0 84 -46 z" fill="#1d1a1c"/>
      <ellipse cx="0" cy="-8" rx="84" ry="22" fill="#2b2628"/>
      <ellipse cx="0" cy="-8" rx="75" ry="18.5" fill="#8f2a17"/>
      <ellipse cx="0" cy="-9" rx="70" ry="16" fill="#a8371c"/>
      <g fill="#f8f4e6">
        <rect x="-52" y="-22" width="20" height="15" rx="2.5" transform="rotate(-8 -42 -15)"/>
        <rect x="-22" y="-26" width="21" height="16" rx="2.5" transform="rotate(6 -11 -18)"/>
        <rect x="10" y="-22" width="20" height="15" rx="2.5" transform="rotate(-4 20 -15)"/>
        <rect x="38" y="-17" width="18" height="13" rx="2.5" transform="rotate(10 47 -11)"/>
        <rect x="-36" y="-8" width="19" height="13" rx="2.5" transform="rotate(4 -27 -2)"/>
        <rect x="-2" y="-8" width="20" height="13" rx="2.5" transform="rotate(-9 8 -2)"/>
      </g>
      <g opacity=".45" fill="#5e1b0c">
        <rect x="-50" y="-20" width="20" height="4" rx="2" transform="rotate(-8 -40 -18)"/>
        <rect x="-20" y="-24" width="21" height="4" rx="2" transform="rotate(6 -10 -22)"/>
      </g>
      <g fill="#3f8f3a"><ellipse cx="-58" cy="-12" rx="6" ry="3"/><ellipse cx="-6" cy="-19" rx="6.5" ry="3"/><ellipse cx="46" cy="-4" rx="6" ry="3"/><ellipse cx="22" cy="-16" rx="5" ry="2.6"/></g>
      <g fill="#d9542c"><circle cx="-40" cy="-4" r="2.2"/><circle cx="30" cy="-10" r="2"/><circle cx="-14" cy="2" r="2.2"/><circle cx="58" cy="-12" r="1.8"/></g>
      <ellipse cx="-26" cy="-14" rx="16" ry="4" fill="#fff" opacity=".13"/>
    </g>
    <g transform="translate(262,150) rotate(-18)" stroke="#2c2220" stroke-width="4.5" stroke-linecap="round">
      <path d="M0 0 L36 -52"/><path d="M8 2 L44 -50"/>
    </g>`);

  /* ───────────── インド：ターリー（カレー定食） ───────────── */
  art('thali', '#3c2b14', '#1b1409', `
    ${shadow(160, 176, 118, 12, .34)}
    <g transform="translate(160,110)">
      <ellipse cx="0" cy="56" rx="116" ry="30" fill="#8b929c"/>
      <ellipse cx="0" cy="50" rx="116" ry="30" fill="#c3cbd4"/>
      <ellipse cx="0" cy="50" rx="104" ry="25" fill="#aeb7c1"/>
      <g>
        <ellipse cx="-42" cy="44" rx="34" ry="15" fill="#f6f1e6"/>
        <path d="M-70 42 q12 -22 28 -22 q16 0 28 22 q-28 10 -56 0z" fill="#fdfaf2"/>
        <ellipse cx="-42" cy="30" rx="11" ry="5" fill="#f6d36a"/>
      </g>
      <g>
        <ellipse cx="38" cy="30" rx="30" ry="13" fill="#e4e9ee"/>
        <ellipse cx="38" cy="28" rx="26" ry="10.5" fill="#d4881f"/>
        <ellipse cx="34" cy="26" rx="8" ry="3.5" fill="#efae45"/>
        <circle cx="46" cy="30" r="3.4" fill="#f3c86a"/>
      </g>
      <g>
        <ellipse cx="86" cy="52" rx="26" ry="11" fill="#e4e9ee"/>
        <ellipse cx="86" cy="50" rx="22" ry="9" fill="#e8c23c"/>
        <ellipse cx="82" cy="48" rx="7" ry="3" fill="#f6dc79"/>
      </g>
      <g>
        <ellipse cx="-6" cy="60" rx="24" ry="10" fill="#e4e9ee"/>
        <ellipse cx="-6" cy="58" rx="20" ry="8" fill="#8f2f1e"/>
        <ellipse cx="-10" cy="56" rx="6" ry="2.6" fill="#c0563a"/>
      </g>
      <g transform="translate(-88,26)">
        <ellipse cx="0" cy="18" rx="30" ry="13" fill="#d9b177"/>
        <ellipse cx="0" cy="15" rx="30" ry="13" fill="#eccb96"/>
        <g fill="#c79a5e" opacity=".8"><ellipse cx="-10" cy="12" rx="5" ry="2.6"/><ellipse cx="9" cy="18" rx="4" ry="2.2"/><ellipse cx="2" cy="8" rx="3.5" ry="2"/></g>
      </g>
      <g fill="#3f8f3a" opacity=".9"><ellipse cx="60" cy="18" rx="7" ry="3.2" transform="rotate(-20 60 18)"/><ellipse cx="68" cy="22" rx="6" ry="2.8" transform="rotate(15 68 22)"/></g>
    </g>`);

  /* ───────────── タイ：トムヤムクン ───────────── */
  art('tomyum', '#123b33', '#08201c', `
    ${shadow(160, 174, 104, 12, .34)}
    ${steam(152, 56, 1)}
    <g transform="translate(160,126)">
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48 z" fill="#e9e3d8"/>
      <ellipse cx="0" cy="-8" rx="80" ry="21" fill="#f7f3ea"/>
      <ellipse cx="0" cy="-8" rx="71" ry="17.5" fill="#c9481f"/>
      <ellipse cx="0" cy="-9" rx="66" ry="15.5" fill="#dd5b28"/>
      <g fill="#f07b3f" opacity=".55"><ellipse cx="-28" cy="-12" rx="20" ry="5"/><ellipse cx="30" cy="-6" rx="15" ry="4"/></g>
      <g>
        <path d="M-46 -16 q-4 -14 10 -16 q14 -2 15 10 q1 9 -9 11 q-13 2 -16 -5z" fill="#f2857a"/>
        <path d="M-44 -18 q2 -9 11 -10" stroke="#fff" stroke-width="2.4" fill="none" opacity=".8"/>
        <path d="M14 -20 q-4 -14 10 -16 q14 -2 15 10 q1 9 -9 11 q-13 2 -16 -5z" fill="#ef7f6f"/>
        <path d="M16 -22 q2 -9 11 -10" stroke="#fff" stroke-width="2.3" fill="none" opacity=".8"/>
      </g>
      <g fill="#f3e5cb"><ellipse cx="-12" cy="-6" rx="9" ry="4.6"/><ellipse cx="42" cy="-14" rx="8" ry="4"/><ellipse cx="-56" cy="-4" rx="7" ry="3.6"/></g>
      <g stroke="#9ab648" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M-34 4 q22 -8 44 -2"/><path d="M-20 -22 q18 -6 34 2"/>
      </g>
      <g fill="#2f7a34"><ellipse cx="54" cy="-6" rx="8" ry="4" transform="rotate(-25 54 -6)"/><ellipse cx="-62" cy="-14" rx="7" ry="3.4" transform="rotate(20 -62 -14)"/></g>
      <g fill="#c4321f"><ellipse cx="6" cy="0" rx="10" ry="3" transform="rotate(12 6 0)"/><ellipse cx="-40" cy="-10" rx="8" ry="2.6" transform="rotate(-15 -40 -10)"/></g>
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48" fill="none" stroke="#cfc7b8" stroke-width="2"/>
    </g>`);

  /* ───────────── ベトナム：フォー ───────────── */
  art('pho', '#14333c', '#08191e', `
    ${shadow(158, 174, 106, 12, .34)}
    ${steam(148, 56, 1)}
    <g transform="translate(158,126)">
      <path d="M-82 -8 q0 48 82 48 q82 0 82 -48 z" fill="#eef1f3"/>
      <ellipse cx="0" cy="-8" rx="82" ry="21" fill="#fbfcfd"/>
      <ellipse cx="0" cy="-8" rx="73" ry="17.5" fill="#c99a4e"/>
      <ellipse cx="0" cy="-9" rx="68" ry="15.5" fill="#dcb068"/>
      <g stroke="#f7f0dd" stroke-width="3.4" fill="none" stroke-linecap="round" opacity=".95">
        <path d="M-50 -10 q16 -10 34 -2"/><path d="M-46 -4 q18 -9 36 -1"/><path d="M-54 -16 q16 -8 32 -3"/>
      </g>
      <g>
        <path d="M6 -18 q22 -8 38 2 q-18 10 -38 -2z" fill="#b8534a"/>
        <path d="M10 -16 q18 -5 30 1" stroke="#e08d7f" stroke-width="2.4" fill="none"/>
        <path d="M-4 -6 q22 -7 38 3 q-18 9 -38 -3z" fill="#a8463e"/>
      </g>
      <g fill="#f3f7f0" opacity=".95"><ellipse cx="46" cy="-14" rx="9" ry="3" transform="rotate(-18 46 -14)"/><ellipse cx="-58" cy="-2" rx="8" ry="2.8" transform="rotate(10 -58 -2)"/></g>
      <g fill="#3f9142"><path d="M52 -4 q10 -12 20 -6 q-6 12 -20 6z"/><path d="M-66 -12 q-10 -10 -20 -4 q8 10 20 4z"/></g>
      <g fill="#7ec242"><ellipse cx="24" cy="-22" rx="7" ry="3.4" transform="rotate(-20 24 -22)"/><ellipse cx="-24" cy="2" rx="6" ry="3" transform="rotate(14 -24 2)"/></g>
      <ellipse cx="66" cy="-6" rx="8" ry="4" fill="#d9e84a" opacity=".9"/>
      <path d="M-82 -8 q0 48 82 48 q82 0 82 -48" fill="none" stroke="#d3d8dc" stroke-width="2"/>
    </g>
    <g transform="translate(250,158) rotate(-20)" stroke="#c9b28a" stroke-width="4.5" stroke-linecap="round">
      <path d="M0 0 L30 -56"/><path d="M9 3 L39 -53"/>
    </g>`);

  /* ───────────── モンゴル：ボーズ ───────────── */
  art('buuz', '#2b3141', '#141823', `
    ${shadow(160, 172, 110, 12, .32)}
    ${steam(160, 52, 1)}
    <g transform="translate(160,132)">
      <ellipse cx="0" cy="18" rx="104" ry="26" fill="#c7cdd6"/>
      <ellipse cx="0" cy="13" rx="104" ry="26" fill="#eef2f6"/>
      <ellipse cx="0" cy="13" rx="92" ry="21" fill="#dfe5ec"/>
      <g>
        <g transform="translate(-48,2)">
          <ellipse cx="0" cy="12" rx="34" ry="12" fill="#cfd4dc" opacity=".6"/>
          <path d="M-32 10 q-4 -32 32 -32 q36 0 32 32 q-32 10 -64 0z" fill="#f3ead9"/>
          <path d="M-32 6 q32 12 64 0" stroke="#dfd2ba" stroke-width="2" fill="none"/>
          <g stroke="#d9cbb0" stroke-width="2.4" fill="none" stroke-linecap="round">
            <path d="M-16 -18 q6 -8 3 -2"/><path d="M-6 -22 q6 -8 3 -2"/><path d="M6 -21 q6 -7 3 -1"/><path d="M16 -16 q6 -7 3 -1"/>
          </g>
          <circle cx="0" cy="-22" r="5" fill="#e3d6bb"/>
        </g>
        <g transform="translate(40,-6)">
          <ellipse cx="0" cy="12" rx="34" ry="12" fill="#cfd4dc" opacity=".6"/>
          <path d="M-32 10 q-4 -32 32 -32 q36 0 32 32 q-32 10 -64 0z" fill="#f7efe0"/>
          <path d="M-32 6 q32 12 64 0" stroke="#dfd2ba" stroke-width="2" fill="none"/>
          <g stroke="#d9cbb0" stroke-width="2.4" fill="none" stroke-linecap="round">
            <path d="M-16 -18 q6 -8 3 -2"/><path d="M-6 -22 q6 -8 3 -2"/><path d="M6 -21 q6 -7 3 -1"/><path d="M16 -16 q6 -7 3 -1"/>
          </g>
          <circle cx="0" cy="-22" r="5" fill="#e3d6bb"/>
        </g>
        <g transform="translate(-4,22) scale(.92)">
          <path d="M-32 10 q-4 -32 32 -32 q36 0 32 32 q-32 10 -64 0z" fill="#fbf4e7"/>
          <path d="M-32 6 q32 12 64 0" stroke="#e2d5bd" stroke-width="2" fill="none"/>
          <g stroke="#dccfb4" stroke-width="2.4" fill="none" stroke-linecap="round">
            <path d="M-16 -18 q6 -8 3 -2"/><path d="M-6 -22 q6 -8 3 -2"/><path d="M6 -21 q6 -7 3 -1"/><path d="M16 -16 q6 -7 3 -1"/>
          </g>
          <circle cx="0" cy="-22" r="5" fill="#e8dcc2"/>
        </g>
      </g>
    </g>`);

  /* ───────────── トルコ：シシ・ケバブ ───────────── */
  art('kebab', '#3d2c1b', '#1b140b', `
    ${shadow(160, 174, 116, 12, .34)}
    <g transform="translate(160,130)">
      <ellipse cx="0" cy="22" rx="112" ry="28" fill="#b9a78d"/>
      <ellipse cx="0" cy="17" rx="112" ry="28" fill="#e8d9bd"/>
      <ellipse cx="0" cy="17" rx="100" ry="23" fill="#dcc9a8"/>
      <g fill="#cbb389" opacity=".75"><ellipse cx="-40" cy="14" rx="18" ry="5"/><ellipse cx="46" cy="22" rx="16" ry="4.6"/><ellipse cx="6" cy="26" rx="14" ry="4"/></g>
      <g transform="translate(60,4)">
        <path d="M-34 6 q10 -20 30 -20 q22 0 30 20 q-30 10 -60 0z" fill="#f2ead6"/>
        <g fill="#e6d9ba"><circle cx="-10" cy="-2" r="3"/><circle cx="8" cy="-6" r="2.6"/><circle cx="20" cy="2" r="2.6"/></g>
      </g>
      <g transform="translate(-14,-8) rotate(-6)">
        <rect x="-86" y="-3" width="176" height="5" rx="2.5" fill="#9aa4ae"/>
        <rect x="-86" y="-3" width="176" height="2" rx="1" fill="#c8d2db"/>
        <g>
          <rect x="-72" y="-16" width="30" height="30" rx="8" fill="#7d4426"/>
          <rect x="-68" y="-13" width="18" height="7" rx="3.5" fill="#a0603a" opacity=".85"/>
          <rect x="-36" y="-13" width="22" height="24" rx="6" fill="#c33b2c"/>
          <rect x="-8" y="-16" width="30" height="30" rx="8" fill="#8b4a28"/>
          <rect x="-4" y="-13" width="18" height="7" rx="3.5" fill="#ab6a40" opacity=".85"/>
          <rect x="28" y="-13" width="22" height="24" rx="6" fill="#3f8f3a"/>
          <rect x="56" y="-16" width="30" height="30" rx="8" fill="#7d4426"/>
          <rect x="60" y="-13" width="18" height="7" rx="3.5" fill="#a0603a" opacity=".85"/>
        </g>
      </g>
      <g fill="#c94a3a"><ellipse cx="-70" cy="20" rx="12" ry="5" transform="rotate(-8 -70 20)"/></g>
      <g fill="#6aa83f"><ellipse cx="-46" cy="26" rx="10" ry="4" transform="rotate(10 -46 26)"/></g>
    </g>`);

  /* ───────────── モロッコ：タジン ───────────── */
  art('tagine', '#432c17', '#1e140a', `
    ${shadow(150, 176, 100, 12, .34)}
    ${steam(150, 34, 1)}
    <g transform="translate(150,120)">
      <path d="M-56 34 q56 16 112 0 l-6 14 q-50 12 -100 0z" fill="#8a5a2e"/>
      <ellipse cx="0" cy="34" rx="56" ry="15" fill="#b5762f"/>
      <ellipse cx="0" cy="32" rx="56" ry="15" fill="#d18c37"/>
      <ellipse cx="0" cy="32" rx="46" ry="11" fill="#b06e26"/>
      <path d="M-50 26 q50 -96 100 0 q-50 16 -100 0z" fill="#c9762b"/>
      <g opacity=".85" fill="#f0c98a">
        <path d="M-44 18 q44 -74 88 0 q-6 2 -12 3 q-32 -54 -64 0 q-6 -1 -12 -3z"/>
      </g>
      <g stroke="#7d3f18" stroke-width="2.6" fill="none" opacity=".75">
        <path d="M-36 8 q36 -54 72 0"/><path d="M-26 -8 q26 -34 52 0"/>
      </g>
      <g fill="#7d3f18" opacity=".7"><circle cx="-22" cy="16" r="2.6"/><circle cx="0" cy="12" r="2.6"/><circle cx="22" cy="16" r="2.6"/></g>
      <ellipse cx="0" cy="-48" rx="9" ry="7" fill="#c9762b"/>
      <ellipse cx="0" cy="-52" rx="6" ry="6" fill="#e2a052"/>
    </g>
    <g transform="translate(258,142)">
      <ellipse cx="0" cy="18" rx="46" ry="14" fill="#cbb896"/>
      <ellipse cx="0" cy="15" rx="46" ry="14" fill="#efe2c6"/>
      <path d="M-34 14 q10 -26 34 -26 q24 0 34 26 q-34 10 -68 0z" fill="#f2d98c"/>
      <g fill="#dcbd66" opacity=".8"><circle cx="-14" cy="2" r="3"/><circle cx="4" cy="-4" r="2.6"/><circle cx="18" cy="4" r="2.6"/><circle cx="-2" cy="8" r="2.4"/></g>
      <g fill="#c4622c"><circle cx="-6" cy="-10" r="4"/><circle cx="12" cy="-6" r="3.4"/></g>
    </g>`);

  /* ───────────── エチオピア：インジェラ ───────────── */
  art('injera', '#34261b', '#191108', `
    ${shadow(160, 172, 116, 12, .34)}
    <g transform="translate(160,116)">
      <ellipse cx="0" cy="34" rx="116" ry="34" fill="#c2a97f"/>
      <ellipse cx="0" cy="28" rx="116" ry="34" fill="#e8d7b4"/>
      <ellipse cx="0" cy="28" rx="110" ry="31" fill="#f0e2c4"/>
      <g fill="#d6c19a" opacity=".75">
        <circle cx="-70" cy="24" r="3.4"/><circle cx="-40" cy="38" r="3"/><circle cx="-14" cy="18" r="3.2"/>
        <circle cx="26" cy="40" r="3"/><circle cx="60" cy="22" r="3.4"/><circle cx="84" cy="34" r="2.8"/>
        <circle cx="-88" cy="34" r="2.8"/><circle cx="8" cy="48" r="2.6"/><circle cx="46" cy="14" r="2.8"/>
      </g>
      <g>
        <ellipse cx="-52" cy="18" rx="30" ry="15" fill="#a8321c"/>
        <ellipse cx="-56" cy="14" rx="14" ry="6" fill="#c45633" opacity=".7"/>
        <ellipse cx="22" cy="12" rx="28" ry="14" fill="#d79a22"/>
        <ellipse cx="18" cy="8" rx="12" ry="5" fill="#eebb4f" opacity=".8"/>
        <ellipse cx="-12" cy="44" rx="27" ry="13" fill="#3c7a36"/>
        <ellipse cx="-16" cy="40" rx="11" ry="5" fill="#5da04f" opacity=".8"/>
        <ellipse cx="66" cy="38" rx="24" ry="12" fill="#8a5a2e"/>
        <ellipse cx="62" cy="34" rx="10" ry="4.5" fill="#a9763f" opacity=".8"/>
        <ellipse cx="-88" cy="42" rx="19" ry="9" fill="#e8dcc0"/>
      </g>
      <g fill="#fff" opacity=".5"><circle cx="-46" cy="14" r="2"/><circle cx="28" cy="8" r="2"/></g>
    </g>`);

  /* ───────────── イタリア：ピッツァ・マルゲリータ ───────────── */
  art('pizza', '#2d3520', '#141a0e', `
    ${shadow(146, 172, 110, 13, .34)}
    <g transform="translate(146,116)">
      <ellipse cx="0" cy="8" rx="98" ry="52" fill="#b98846"/>
      <ellipse cx="0" cy="3" rx="98" ry="52" fill="#e2b06a"/>
      <ellipse cx="0" cy="3" rx="84" ry="43" fill="#c94a2c"/>
      <ellipse cx="0" cy="1" rx="84" ry="43" fill="#d4573a"/>
      <g fill="#c48a3d" opacity=".55">
        <ellipse cx="-78" cy="-8" rx="9" ry="5"/><ellipse cx="0" cy="-42" rx="10" ry="4.6"/>
        <ellipse cx="74" cy="12" rx="9" ry="5"/><ellipse cx="-44" cy="40" rx="9" ry="4.4"/>
        <ellipse cx="50" cy="-34" rx="8" ry="4"/>
      </g>
      <g fill="#fbf6e6">
        <ellipse cx="-44" cy="-14" rx="18" ry="11"/><ellipse cx="14" cy="-24" rx="16" ry="10"/>
        <ellipse cx="48" cy="6" rx="17" ry="11"/><ellipse cx="-12" cy="18" rx="19" ry="12"/>
        <ellipse cx="-58" cy="18" rx="13" ry="8"/><ellipse cx="30" cy="30" rx="13" ry="8"/>
      </g>
      <g fill="#fffdf4" opacity=".7">
        <ellipse cx="-48" cy="-18" rx="7" ry="3.6"/><ellipse cx="10" cy="-28" rx="6" ry="3"/><ellipse cx="44" cy="2" rx="6" ry="3"/>
      </g>
      <g fill="#3f8f3a">
        <path d="M-24 -30 q12 -12 22 -4 q-8 12 -22 4z"/>
        <path d="M34 -12 q13 -10 22 -1 q-9 11 -22 1z"/>
        <path d="M-40 26 q12 -12 22 -3 q-9 12 -22 3z"/>
        <path d="M18 34 q-12 -11 -3 -20 q12 8 3 20z"/>
      </g>
      <g stroke="#2f7a34" stroke-width="1.6" opacity=".8" fill="none">
        <path d="M-20 -30 q7 -5 14 -3"/><path d="M38 -12 q7 -5 14 -2"/>
      </g>
      <g opacity=".3"><ellipse cx="-30" cy="-30" rx="24" ry="9" fill="#fff"/></g>
    </g>
    <g transform="translate(250,66) rotate(14)">
      <path d="M0 0 L58 -14 L58 26 Z" fill="#e2b06a"/>
      <path d="M6 2 L52 -9 L52 20 Z" fill="#d4573a"/>
      <ellipse cx="26" cy="5" rx="11" ry="7" fill="#fbf6e6"/>
      <path d="M38 -2 q9 -7 15 -1 q-6 8 -15 1z" fill="#3f8f3a"/>
    </g>`);

  /* ───────────── スペイン：パエリア ───────────── */
  art('paella', '#3c2d13', '#1a1407', `
    ${shadow(160, 174, 122, 12, .34)}
    <g transform="translate(160,118)">
      <ellipse cx="0" cy="42" rx="112" ry="26" fill="#3a3f47"/>
      <ellipse cx="0" cy="36" rx="112" ry="30" fill="#5d646e"/>
      <ellipse cx="0" cy="36" rx="102" ry="25" fill="#2f343b"/>
      <ellipse cx="0" cy="34" rx="98" ry="23" fill="#e0a92e"/>
      <ellipse cx="0" cy="33" rx="94" ry="21" fill="#eeba3c"/>
      <g fill="#d69a24" opacity=".7">
        <ellipse cx="-50" cy="30" rx="20" ry="6"/><ellipse cx="34" cy="38" rx="18" ry="5.6"/><ellipse cx="-4" cy="24" rx="16" ry="5"/>
      </g>
      <g>
        <path d="M-58 26 q-6 -14 8 -17 q14 -3 16 8 q2 10 -9 12 q-12 2 -15 -3z" fill="#f08a72"/>
        <path d="M-56 22 q2 -8 10 -10" stroke="#fff" stroke-width="2.2" fill="none" opacity=".8"/>
        <path d="M30 20 q-6 -14 8 -17 q14 -3 16 8 q2 10 -9 12 q-12 2 -15 -3z" fill="#ee8168"/>
        <path d="M32 16 q2 -8 10 -10" stroke="#fff" stroke-width="2.2" fill="none" opacity=".8"/>
      </g>
      <g>
        <path d="M-18 40 q-16 -6 -14 -16 q2 -10 18 -8 q16 2 14 12 q-2 12 -18 12z" fill="#2c2f3d"/>
        <path d="M-18 36 q-10 -4 -9 -11" stroke="#6b7186" stroke-width="2.4" fill="none"/>
        <path d="M66 32 q-16 -6 -14 -16 q2 -10 18 -8 q16 2 14 12 q-2 12 -18 12z" fill="#33374a"/>
      </g>
      <g fill="#c4331f">
        <rect x="-82" y="24" width="30" height="7" rx="3.5" transform="rotate(-10 -67 27)"/>
        <rect x="4" y="34" width="32" height="7" rx="3.5" transform="rotate(8 20 37)"/>
        <rect x="40" y="16" width="26" height="6" rx="3" transform="rotate(-14 53 19)"/>
      </g>
      <g fill="#4e9a45"><ellipse cx="-34" cy="42" rx="9" ry="4" transform="rotate(12 -34 42)"/><ellipse cx="14" cy="14" rx="8" ry="3.6" transform="rotate(-18 14 14)"/></g>
      <g transform="translate(82,20)">
        <path d="M0 0 q14 4 14 14 q0 10 -14 12 q-14 -2 -14 -12 q0 -10 14 -14z" fill="#f2e05a"/>
        <path d="M0 2 q10 4 10 12 q0 8 -10 10" fill="#fbf094" opacity=".8"/>
      </g>
      <g fill="#b8371f" opacity=".85"><circle cx="-24" cy="20" r="2"/><circle cx="46" cy="40" r="2"/><circle cx="6" cy="44" r="2"/></g>
    </g>`);

  /* ───────────── フランス：ブイヤベース ───────────── */
  art('bouillabaisse', '#2b3044', '#131725', `
    ${shadow(146, 174, 104, 12, .34)}
    ${steam(140, 54, 1)}
    <g transform="translate(146,124)">
      <path d="M-82 -8 q0 48 82 48 q82 0 82 -48 z" fill="#f0efe9"/>
      <ellipse cx="0" cy="-8" rx="82" ry="21" fill="#fbfaf5"/>
      <ellipse cx="0" cy="-8" rx="73" ry="17.5" fill="#c2551d"/>
      <ellipse cx="0" cy="-9" rx="68" ry="15.5" fill="#d96a26"/>
      <g fill="#e88b41" opacity=".55"><ellipse cx="-24" cy="-13" rx="22" ry="5"/><ellipse cx="34" cy="-5" rx="16" ry="4"/></g>
      <g>
        <path d="M-56 -12 q20 -12 44 -4 q-4 10 -20 12 q-18 2 -24 -8z" fill="#b8c3ce"/>
        <path d="M-56 -12 q-12 -8 -16 -2 q4 8 16 6z" fill="#95a3b0"/>
        <circle cx="-30" cy="-12" r="2.4" fill="#2d3642"/>
        <path d="M-46 -10 q12 -4 22 -1" stroke="#dbe3ea" stroke-width="2" fill="none"/>
      </g>
      <g>
        <path d="M16 -22 q-14 -6 -12 -15 q2 -9 16 -7 q15 2 13 11 q-2 11 -17 11z" fill="#2a2c3a"/>
        <path d="M16 -26 q-9 -4 -8 -10" stroke="#697088" stroke-width="2.2" fill="none"/>
        <path d="M50 -6 q-14 -6 -12 -15 q2 -9 16 -7 q15 2 13 11 q-2 11 -17 11z" fill="#32354a"/>
      </g>
      <g fill="#f0d98a"><ellipse cx="-14" cy="0" rx="12" ry="7"/><ellipse cx="-16" cy="-2" rx="6" ry="3" fill="#f8ecb8"/></g>
      <g stroke="#e8b52f" stroke-width="2.2" stroke-linecap="round" fill="none" opacity=".9">
        <path d="M-40 4 q6 -6 12 -4"/><path d="M28 2 q6 -6 12 -3"/><path d="M-4 -24 q6 -5 12 -3"/>
      </g>
      <g fill="#3f8f3a"><ellipse cx="44" cy="-18" rx="8" ry="3.4" transform="rotate(-22 44 -18)"/></g>
      <path d="M-82 -8 q0 48 82 48 q82 0 82 -48" fill="none" stroke="#d8d6ce" stroke-width="2"/>
    </g>
    <g transform="translate(256,136) rotate(-10)">
      <ellipse cx="0" cy="26" rx="40" ry="10" fill="#000" opacity=".2"/>
      <ellipse cx="0" cy="8" rx="34" ry="19" fill="#e0b979"/>
      <ellipse cx="0" cy="6" rx="30" ry="16" fill="#f2e0bb"/>
      <ellipse cx="0" cy="4" rx="22" ry="11" fill="#e2913c"/>
      <ellipse cx="-6" cy="1" rx="9" ry="4" fill="#f0b262" opacity=".8"/>
    </g>`);

  /* ───────────── ドイツ：ソーセージとザワークラウト ───────────── */
  art('wurst', '#302c1d', '#16140d', `
    ${shadow(160, 176, 118, 12, .34)}
    <g transform="translate(160,120)">
      <ellipse cx="0" cy="40" rx="112" ry="28" fill="#c2c7cc"/>
      <ellipse cx="0" cy="35" rx="112" ry="28" fill="#f3f5f7"/>
      <ellipse cx="0" cy="35" rx="100" ry="23" fill="#e4e8ec"/>
      <g transform="translate(46,12)">
        <ellipse cx="0" cy="26" rx="52" ry="17" fill="#ddcb8b"/>
        <g stroke="#f2ecc8" stroke-width="3.6" stroke-linecap="round" fill="none">
          <path d="M-40 24 q18 -14 38 -6"/><path d="M-34 30 q22 -12 42 -4"/><path d="M-20 18 q20 -10 38 -2"/>
          <path d="M-44 30 q16 -8 30 -10"/><path d="M0 32 q20 -10 36 -2"/>
        </g>
        <g stroke="#cfc28e" stroke-width="2" stroke-linecap="round" fill="none" opacity=".8">
          <path d="M-30 26 q18 -10 34 -4"/><path d="M-10 22 q18 -8 32 0"/>
        </g>
        <g fill="#6b7a3a" opacity=".85"><circle cx="-16" cy="20" r="2.2"/><circle cx="14" cy="26" r="2"/><circle cx="30" cy="20" r="2"/></g>
      </g>
      <g transform="translate(-34,18) rotate(-8)">
        <rect x="-56" y="-2" width="112" height="28" rx="14" fill="#a85a2c"/>
        <rect x="-56" y="-2" width="112" height="12" rx="6" fill="#c2743c"/>
        <rect x="-48" y="1" width="60" height="5" rx="2.5" fill="#d99a63" opacity=".8"/>
        <g stroke="#8d4720" stroke-width="2" opacity=".6"><path d="M-30 -2 v28"/><path d="M14 -2 v28"/></g>
      </g>
      <g transform="translate(-24,-4) rotate(6)">
        <rect x="-52" y="-2" width="104" height="26" rx="13" fill="#b96434"/>
        <rect x="-52" y="-2" width="104" height="11" rx="5.5" fill="#d38047"/>
        <rect x="-44" y="1" width="54" height="5" rx="2.5" fill="#e6a873" opacity=".8"/>
      </g>
      <g transform="translate(-88,40)">
        <path d="M-16 8 q4 -18 16 -18 q12 0 16 18 q-16 6 -32 0z" fill="#e8b92c"/>
        <path d="M-8 0 q6 -6 12 -3" stroke="#f6d96e" stroke-width="2.4" fill="none"/>
      </g>
      <g fill="#3f8f3a"><ellipse cx="86" cy="42" rx="10" ry="4" transform="rotate(14 86 42)"/><ellipse cx="74" cy="46" rx="8" ry="3.4" transform="rotate(-10 74 46)"/></g>
    </g>`);

  /* ───────────── イギリス：フィッシュ・アンド・チップス ───────────── */
  art('fishchips', '#243240', '#10181f', `
    ${shadow(160, 176, 116, 12, .34)}
    <g transform="translate(160,122)">
      <path d="M-104 -20 L104 -20 L86 50 L-86 50 Z" fill="#e8e3d6"/>
      <path d="M-104 -20 L104 -20 L98 4 L-98 4 Z" fill="#f4f0e5"/>
      <g stroke="#b9b3a2" stroke-width="1.4" opacity=".55">
        <path d="M-88 -12 h60 M-88 -6 h50 M-88 0 h64"/>
        <path d="M24 -12 h64 M34 -6 h54 M20 0 h68"/>
        <path d="M-80 12 h44 M-78 20 h40"/>
        <path d="M40 14 h44 M42 22 h38"/>
      </g>
      <g>
        <rect x="-86" y="6" width="18" height="46" rx="4" fill="#e8b950" transform="rotate(-8 -77 29)"/>
        <rect x="-64" y="2" width="17" height="48" rx="4" fill="#f0c65f" transform="rotate(5 -55 26)"/>
        <rect x="-44" y="10" width="18" height="42" rx="4" fill="#e2ad46" transform="rotate(-4 -35 31)"/>
        <rect x="-24" y="4" width="17" height="46" rx="4" fill="#f2cc6b" transform="rotate(10 -15 27)"/>
        <rect x="-4" y="12" width="17" height="40" rx="4" fill="#e6b44c" transform="rotate(-6 4 32)"/>
        <g opacity=".45" fill="#fff">
          <rect x="-82" y="10" width="7" height="30" rx="3" transform="rotate(-8 -78 25)"/>
          <rect x="-60" y="6" width="6" height="32" rx="3" transform="rotate(5 -57 22)"/>
          <rect x="-20" y="8" width="6" height="30" rx="3" transform="rotate(10 -17 23)"/>
        </g>
      </g>
      <g transform="translate(44,10) rotate(-8)">
        <path d="M-60 14 q-14 -8 -16 -16 q10 -4 16 -10z" fill="#8a5410"/>
        <path d="M-58 12 q6 -36 46 -36 q44 0 56 27 q-10 19 -56 19 q-40 0 -46 -10z" fill="#9e6415"/>
        <path d="M-54 9 q6 -30 42 -30 q40 0 50 23 q-10 15 -50 15 q-36 0 -42 -8z" fill="#dda136"/>
        <path d="M-48 2 q8 -24 36 -24 q32 0 42 18" fill="none" stroke="#f2cb70" stroke-width="6" stroke-linecap="round" opacity=".7"/>
        <g fill="#f6d78a" opacity=".85">
          <ellipse cx="-22" cy="-10" rx="11" ry="5.4"/><ellipse cx="8" cy="-16" rx="9" ry="4.6"/><ellipse cx="30" cy="-4" rx="10" ry="4.6"/>
        </g>
        <g fill="#8a5410" opacity=".6"><circle cx="-36" cy="2" r="3.2"/><circle cx="-6" cy="5" r="2.8"/><circle cx="26" cy="9" r="2.8"/><circle cx="14" cy="-8" r="2.6"/><circle cx="-20" cy="10" r="2.4"/></g>
      </g>
      <g transform="translate(74,40)">
        <ellipse cx="0" cy="0" rx="20" ry="9" fill="#4e8f3d"/>
        <g fill="#6fb054"><circle cx="-8" cy="-2" r="4"/><circle cx="2" cy="1" r="4"/><circle cx="11" cy="-2" r="3.6"/><circle cx="-2" cy="-5" r="3.4"/></g>
      </g>
      <g transform="translate(-88,44)">
        <circle cx="0" cy="0" r="13" fill="#f2e05a"/>
        <circle cx="0" cy="0" r="10" fill="#fbf094"/>
        <g stroke="#e8d54a" stroke-width="1.6"><path d="M0 -10 V10 M-10 0 H10 M-7 -7 L7 7 M7 -7 L-7 7"/></g>
      </g>
    </g>`);

  /* ───────────── スイス：チーズフォンデュ ───────────── */
  art('fondue', '#2e2b22', '#151410', `
    ${shadow(140, 178, 92, 11, .34)}
    ${steam(134, 44, 1)}
    <g transform="translate(140,126)">
      <rect x="-34" y="40" width="68" height="8" rx="4" fill="#5b5245"/>
      <path d="M-20 34 q20 10 40 0 l-4 10 q-16 6 -32 0z" fill="#3e3a33"/>
      <g fill="#f2913c" opacity=".9">
        <path d="M-10 36 q4 -12 10 -12 q6 0 10 12 q-10 6 -20 0z"/>
        <path d="M-4 34 q3 -8 6 -8 q3 0 6 8 q-6 4 -12 0z" fill="#ffd45e"/>
      </g>
      <path d="M-56 -6 q0 42 56 42 q56 0 56 -42 z" fill="#b9432c"/>
      <path d="M-56 -6 q0 42 56 42 q56 0 56 -42 z" fill="#cb4d32"/>
      <ellipse cx="0" cy="-6" rx="56" ry="15" fill="#e05a3c"/>
      <ellipse cx="0" cy="-6" rx="48" ry="12" fill="#e8c24e"/>
      <ellipse cx="0" cy="-7" rx="44" ry="10.5" fill="#f2d670"/>
      <g fill="#fbe89c" opacity=".85"><ellipse cx="-14" cy="-10" rx="14" ry="4"/><ellipse cx="20" cy="-4" rx="10" ry="3"/></g>
      <g fill="#d9b03c" opacity=".7"><circle cx="-26" cy="-4" r="2.4"/><circle cx="8" cy="-12" r="2"/><circle cx="30" cy="-8" r="2.2"/></g>
      <path d="M-56 -6 q0 42 56 42 q56 0 56 -42" fill="none" stroke="#9c3924" stroke-width="2"/>
      <rect x="-62" y="10" width="14" height="6" rx="3" fill="#8f3320"/>
      <rect x="48" y="10" width="14" height="6" rx="3" fill="#8f3320"/>
      <g transform="rotate(-32)">
        <rect x="-6" y="-70" width="5" height="76" rx="2.5" fill="#9aa4ae"/>
        <rect x="-10" y="-84" width="13" height="18" rx="4" fill="#3b3227"/>
        <rect x="-8" y="-4" width="20" height="18" rx="4" fill="#efdcae" transform="rotate(8)"/>
      </g>
    </g>
    <g transform="translate(252,144)">
      <ellipse cx="0" cy="18" rx="44" ry="12" fill="#000" opacity=".22"/>
      <path d="M-38 16 q6 -16 38 -16 q32 0 38 16 q-38 10 -76 0z" fill="#8a6a45"/>
      <g>
        <rect x="-30" y="-6" width="22" height="20" rx="5" fill="#efdcae" transform="rotate(-10 -19 4)"/>
        <rect x="-6" y="-12" width="22" height="20" rx="5" fill="#f6e6bd" transform="rotate(6 5 -2)"/>
        <rect x="16" y="-4" width="21" height="19" rx="5" fill="#e8d2a0" transform="rotate(-6 26 5)"/>
        <rect x="-18" y="-20" width="20" height="18" rx="5" fill="#f2e0b4" transform="rotate(12 -8 -11)"/>
      </g>
    </g>`);

  /* ───────────── ウクライナ：ボルシチ ───────────── */
  art('borscht', '#371b2c', '#1a0c14', `
    ${shadow(146, 174, 102, 12, .34)}
    ${steam(140, 54, 1)}
    <g transform="translate(146,124)">
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48 z" fill="#f2efe6"/>
      <ellipse cx="0" cy="-8" rx="80" ry="21" fill="#fcfaf3"/>
      <g stroke="#c23a52" stroke-width="2.4" fill="none" opacity=".7">
        <path d="M-58 20 q10 -8 18 0 q8 8 16 0 q8 -8 16 0"/>
      </g>
      <ellipse cx="0" cy="-8" rx="71" ry="17.5" fill="#8e1c33"/>
      <ellipse cx="0" cy="-9" rx="66" ry="15.5" fill="#a52440"/>
      <g fill="#bd3554" opacity=".6"><ellipse cx="-22" cy="-13" rx="22" ry="5"/><ellipse cx="32" cy="-5" rx="16" ry="4"/></g>
      <g fill="#8c1630" opacity=".8">
        <rect x="-44" y="-16" width="16" height="6" rx="3" transform="rotate(-18 -36 -13)"/>
        <rect x="-8" y="-20" width="18" height="6" rx="3" transform="rotate(10 1 -17)"/>
        <rect x="26" y="-12" width="15" height="6" rx="3" transform="rotate(-8 33 -9)"/>
      </g>
      <g fill="#e8a13c" opacity=".9">
        <rect x="-32" y="-6" width="14" height="5" rx="2.5" transform="rotate(12 -25 -4)"/>
        <rect x="8" y="-8" width="13" height="5" rx="2.5" transform="rotate(-14 14 -6)"/>
      </g>
      <g>
        <path d="M-18 -14 q16 -10 28 -2 q10 8 -2 14 q-16 6 -26 -4 q-6 -6 0 -8z" fill="#fbfaf6"/>
        <path d="M-12 -12 q12 -6 20 0" stroke="#e6e3db" stroke-width="2" fill="none"/>
      </g>
      <g stroke="#3f8f3a" stroke-width="2.2" fill="none" stroke-linecap="round">
        <path d="M22 -20 q6 -6 10 -2 M26 -22 v6 M18 -16 q4 -5 8 -2"/>
        <path d="M-44 -4 q6 -6 10 -2 M-40 -6 v6"/>
      </g>
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48" fill="none" stroke="#dbd7cc" stroke-width="2"/>
    </g>
    <g transform="translate(254,140)">
      <ellipse cx="0" cy="26" rx="42" ry="11" fill="#000" opacity=".22"/>
      <circle cx="-16" cy="8" r="20" fill="#cf9a4e"/>
      <circle cx="-16" cy="4" r="20" fill="#e6b468"/>
      <circle cx="18" cy="12" r="18" fill="#cf9a4e"/>
      <circle cx="18" cy="8" r="18" fill="#e6b468"/>
      <g fill="#f2d097" opacity=".8"><circle cx="-22" cy="-2" r="6"/><circle cx="13" cy="2" r="5"/></g>
      <g fill="#3f8f3a" opacity=".9"><circle cx="-10" cy="10" r="2"/><circle cx="24" cy="14" r="2"/><circle cx="4" cy="2" r="2"/></g>
    </g>`);

  /* ───────────── ノルウェー：グラブラクス（サーモンの塩じめ） ───────────── */
  art('gravlaks', '#1d3039', '#0d161c', `
    ${shadow(160, 176, 118, 12, .34)}
    <g transform="translate(160,120)">
      <rect x="-114" y="-30" width="228" height="82" rx="10" fill="#6b4f34"/>
      <rect x="-114" y="-36" width="228" height="14" rx="7" fill="#8a6743"/>
      <rect x="-114" y="-34" width="228" height="5" rx="2.5" fill="#a17c53" opacity=".7"/>
      <g stroke="#5a4129" stroke-width="1.6" opacity=".5"><path d="M-90 -20 h180 M-90 6 h180 M-90 32 h180"/></g>
      <g>
        <g transform="translate(-48,-6) rotate(-6)">
          <path d="M-46 0 q10 -18 46 -18 q36 0 46 18 q-10 14 -46 14 q-36 0 -46 -14z" fill="#e8734a"/>
          <g stroke="#fbd9c2" stroke-width="3" fill="none" opacity=".9">
            <path d="M-36 -2 q20 -10 40 -8"/><path d="M-30 4 q22 -10 44 -6"/><path d="M-20 -8 q20 -6 36 -2"/>
          </g>
          <path d="M-46 0 q10 -18 46 -18" fill="none" stroke="#3f8f3a" stroke-width="3"/>
        </g>
        <g transform="translate(24,10) rotate(5)">
          <path d="M-46 0 q10 -18 46 -18 q36 0 46 18 q-10 14 -46 14 q-36 0 -46 -14z" fill="#f08154"/>
          <g stroke="#fce0cb" stroke-width="3" fill="none" opacity=".9">
            <path d="M-36 -2 q20 -10 40 -8"/><path d="M-30 4 q22 -10 44 -6"/><path d="M-20 -8 q20 -6 36 -2"/>
          </g>
        </g>
      </g>
      <g stroke="#3f8f3a" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".95">
        <path d="M60 -20 q8 -8 14 -3 M66 -24 v8 M54 -14 q6 -7 12 -3"/>
        <path d="M-84 24 q8 -8 14 -3 M-78 20 v8"/>
      </g>
      <g transform="translate(86,26)">
        <circle cx="0" cy="0" r="14" fill="#f2e05a"/><circle cx="0" cy="0" r="10.5" fill="#fbf094"/>
        <g stroke="#e8d54a" stroke-width="1.6"><path d="M0 -10 V10 M-10 0 H10 M-7 -7 L7 7 M7 -7 L-7 7"/></g>
      </g>
      <g transform="translate(-92,-8) rotate(-12)">
        <rect x="-22" y="-16" width="44" height="32" rx="3" fill="#d9bd8c"/>
        <g fill="#b89b6c"><circle cx="-10" cy="-6" r="2.4"/><circle cx="6" cy="-10" r="2.2"/><circle cx="12" cy="4" r="2.4"/><circle cx="-6" cy="8" r="2.2"/><circle cx="0" cy="-1" r="2"/></g>
      </g>
    </g>`);

  /* ───────────── メキシコ：タコス ───────────── */
  art('tacos', '#3c2617', '#1b110a', `
    ${shadow(150, 176, 112, 12, .34)}
    <g transform="translate(150,124)">
      <ellipse cx="0" cy="36" rx="108" ry="26" fill="#cfd5db"/>
      <ellipse cx="0" cy="31" rx="108" ry="26" fill="#f4f7fa"/>
      <ellipse cx="0" cy="31" rx="96" ry="21" fill="#e6ebf0"/>
      <g transform="translate(-44,0) rotate(-6)">
        <path d="M-40 26 q-14 -46 14 -58 q26 -10 44 6 q-10 6 -14 22 q-4 18 4 30 q-28 6 -48 0z" fill="#e8b455"/>
        <path d="M-40 26 q-14 -46 14 -58 q10 -4 18 -2 q-22 16 -12 60 q-12 2 -20 0z" fill="#f2c76e"/>
        <path d="M-32 6 q22 -12 46 -4 q-6 10 -6 18 q-24 6 -40 -14z" fill="#8a4a24"/>
        <g fill="#a35c2c"><circle cx="-14" cy="6" r="4"/><circle cx="2" cy="2" r="3.4"/><circle cx="14" cy="10" r="3.4"/></g>
        <g fill="#f6f2e8"><circle cx="-18" cy="-2" r="2.6"/><circle cx="6" cy="-4" r="2.4"/><circle cx="18" cy="4" r="2.2"/></g>
        <g fill="#4e9a45"><ellipse cx="-8" cy="-6" rx="7" ry="3" transform="rotate(-20 -8 -6)"/><ellipse cx="12" cy="-2" rx="6" ry="2.6" transform="rotate(14 12 -2)"/></g>
      </g>
      <g transform="translate(24,10) rotate(7)">
        <path d="M-40 26 q-14 -46 14 -58 q26 -10 44 6 q-10 6 -14 22 q-4 18 4 30 q-28 6 -48 0z" fill="#e0a94c"/>
        <path d="M-40 26 q-14 -46 14 -58 q10 -4 18 -2 q-22 16 -12 60 q-12 2 -20 0z" fill="#efc169"/>
        <path d="M-32 6 q22 -12 46 -4 q-6 10 -6 18 q-24 6 -40 -14z" fill="#7d4220"/>
        <g fill="#9c5528"><circle cx="-14" cy="6" r="4"/><circle cx="2" cy="2" r="3.4"/><circle cx="14" cy="10" r="3.4"/></g>
        <g fill="#f6f2e8"><circle cx="-18" cy="-2" r="2.6"/><circle cx="6" cy="-4" r="2.4"/></g>
        <g fill="#4e9a45"><ellipse cx="-4" cy="-6" rx="7" ry="3" transform="rotate(-16 -4 -6)"/></g>
      </g>
      <g transform="translate(78,20)">
        <path d="M-16 -4 q16 -10 32 0 q-4 16 -16 16 q-12 0 -16 -16z" fill="#f2e05a"/>
        <path d="M-12 -2 q12 -6 24 0 q-3 11 -12 11 q-9 0 -12 -11z" fill="#fbf094"/>
        <g stroke="#e0cd48" stroke-width="1.4"><path d="M0 -4 v13 M-8 -1 l8 6 M8 -1 l-8 6"/></g>
      </g>
      <g transform="translate(-86,22)">
        <ellipse cx="0" cy="4" rx="22" ry="9" fill="#e6ebf0"/>
        <ellipse cx="0" cy="2" rx="18" ry="7" fill="#b8301f"/>
        <ellipse cx="-4" cy="0" rx="6" ry="2.6" fill="#d6543a"/>
      </g>
    </g>`);

  /* ───────────── ペルー：セビーチェ ───────────── */
  art('ceviche', '#18313d', '#0b171f', `
    ${shadow(160, 176, 116, 12, .34)}
    <g transform="translate(160,120)">
      <ellipse cx="0" cy="34" rx="110" ry="30" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="110" ry="30" fill="#fbfdff"/>
      <ellipse cx="0" cy="28" rx="98" ry="25" fill="#dbe4ec"/>
      <ellipse cx="-6" cy="24" rx="62" ry="21" fill="#eef7dc"/>
      <ellipse cx="-6" cy="23" rx="54" ry="17" fill="#f6fbe8"/>
      <g fill="#fdfdfa" stroke="#c3d2dd" stroke-width="1.3">
        <rect x="-52" y="8" width="22" height="18" rx="4" transform="rotate(-12 -41 17)"/>
        <rect x="-26" y="2" width="23" height="19" rx="4" transform="rotate(8 -14 11)"/>
        <rect x="2" y="10" width="22" height="18" rx="4" transform="rotate(-6 13 19)"/>
        <rect x="-40" y="24" width="21" height="17" rx="4" transform="rotate(14 -29 32)"/>
        <rect x="-8" y="26" width="22" height="17" rx="4" transform="rotate(-10 3 34)"/>
      </g>
      <g fill="#e8eef2" opacity=".9">
        <rect x="-48" y="10" width="12" height="5" rx="2.5" transform="rotate(-12 -42 12)"/>
        <rect x="-22" y="5" width="12" height="5" rx="2.5" transform="rotate(8 -16 7)"/>
      </g>
      <g fill="#a8437a" opacity=".92">
        <path d="M-58 20 q22 -8 42 -2 q-20 8 -42 2z"/>
        <path d="M-14 34 q22 -8 42 -2 q-20 8 -42 2z"/>
        <path d="M6 4 q20 -7 38 -1 q-18 7 -38 1z"/>
      </g>
      <g fill="#c96aa0" opacity=".7">
        <path d="M-54 19 q18 -5 32 -2"/><path d="M-10 33 q18 -5 32 -2"/>
      </g>
      <g transform="translate(64,12)">
        <circle cx="0" cy="0" r="17" fill="#6fae3a"/>
        <circle cx="0" cy="0" r="13" fill="#b8d96a"/>
        <g stroke="#8fc24a" stroke-width="1.8"><path d="M0 -13 V13 M-13 0 H13 M-9 -9 L9 9 M9 -9 L-9 9"/></g>
        <circle cx="0" cy="0" r="2.4" fill="#e8f2c8"/>
      </g>
      <g transform="translate(-76,34)">
        <path d="M-20 6 q4 -18 20 -18 q16 0 20 18 q-20 8 -40 0z" fill="#e2913c"/>
        <path d="M-14 2 q4 -12 14 -12 q10 0 14 12 q-14 6 -28 0z" fill="#f0ae5c"/>
        <path d="M-16 4 q16 4 32 -2" stroke="#c9762b" stroke-width="1.8" fill="none"/>
      </g>
      <g transform="translate(24,44)">
        <g fill="#f2e08a"><circle cx="-14" cy="0" r="6"/><circle cx="-2" cy="-3" r="6"/><circle cx="10" cy="1" r="6"/><circle cx="-8" cy="6" r="5.4"/><circle cx="4" cy="6" r="5.4"/></g>
        <g fill="#fbf2be" opacity=".8"><circle cx="-15" cy="-2" r="2.4"/><circle cx="-3" cy="-5" r="2.2"/><circle cx="9" cy="-1" r="2.2"/></g>
      </g>
      <g fill="#c4331f"><circle cx="-30" cy="0" r="2.4"/><circle cx="20" cy="26" r="2.2"/><circle cx="-2" cy="16" r="2.2"/></g>
      <g fill="#3f8f3a"><ellipse cx="40" cy="36" rx="8" ry="3.4" transform="rotate(16 40 36)"/></g>
    </g>`);

  /* ───────────── ブラジル：フェイジョアーダ ───────────── */
  art('feijoada', '#27331f', '#121a0f', `
    ${shadow(160, 176, 118, 12, .34)}
    <g transform="translate(160,120)">
      <ellipse cx="0" cy="34" rx="112" ry="30" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="112" ry="30" fill="#fbfdff"/>
      <ellipse cx="0" cy="28" rx="100" ry="25" fill="#eef3f7"/>
      <g transform="translate(-44,8)">
        <path d="M-40 14 q8 -30 40 -30 q32 0 40 30 q-40 12 -80 0z" fill="#fbfaf6"/>
        <g fill="#eceae2"><ellipse cx="-14" cy="0" rx="9" ry="4"/><ellipse cx="10" cy="-6" rx="8" ry="3.4"/><ellipse cx="18" cy="6" rx="7" ry="3"/></g>
      </g>
      <g transform="translate(30,2)">
        <ellipse cx="0" cy="20" rx="46" ry="17" fill="#2a1f1c"/>
        <ellipse cx="0" cy="17" rx="46" ry="17" fill="#3a2b25"/>
        <g fill="#241a17">
          <ellipse cx="-22" cy="12" rx="7" ry="4.6" transform="rotate(-20 -22 12)"/>
          <ellipse cx="-4" cy="18" rx="7" ry="4.6" transform="rotate(12 -4 18)"/>
          <ellipse cx="16" cy="10" rx="7" ry="4.6" transform="rotate(-8 16 10)"/>
          <ellipse cx="28" cy="20" rx="6.4" ry="4.2" transform="rotate(18 28 20)"/>
          <ellipse cx="4" cy="6" rx="6.4" ry="4.2" transform="rotate(-14 4 6)"/>
          <ellipse cx="-16" cy="24" rx="6.4" ry="4.2" transform="rotate(6 -16 24)"/>
        </g>
        <g fill="#8a5a3c" opacity=".9">
          <rect x="-12" y="2" width="22" height="9" rx="4" transform="rotate(-12 -1 6)"/>
          <rect x="14" y="14" width="20" height="8" rx="4" transform="rotate(10 24 18)"/>
        </g>
        <ellipse cx="-10" cy="10" rx="14" ry="4" fill="#fff" opacity=".07"/>
      </g>
      <g transform="translate(-70,40)">
        <g fill="#2f7a34">
          <path d="M-18 0 q10 -12 22 -6 q-8 12 -22 6z"/><path d="M-4 6 q12 -12 24 -5 q-10 12 -24 5z"/>
          <path d="M-22 8 q10 -11 22 -5 q-9 11 -22 5z"/>
        </g>
        <g stroke="#4e9a45" stroke-width="1.6" fill="none"><path d="M-14 2 q8 -5 14 -4"/><path d="M0 8 q9 -5 16 -4"/></g>
      </g>
      <g transform="translate(78,32)">
        <circle cx="0" cy="0" r="18" fill="#e8963a"/>
        <circle cx="0" cy="0" r="14" fill="#f6b45c"/>
        <g stroke="#e8963a" stroke-width="1.8"><path d="M0 -14 V14 M-14 0 H14 M-10 -10 L10 10 M10 -10 L-10 10"/></g>
      </g>
      <g transform="translate(6,52)">
        <ellipse cx="0" cy="0" rx="26" ry="8" fill="#e2c88a"/>
        <g fill="#f0daa8" opacity=".85"><circle cx="-12" cy="-2" r="3"/><circle cx="0" cy="-3" r="3"/><circle cx="12" cy="-1" r="2.8"/><circle cx="-6" cy="2" r="2.6"/><circle cx="7" cy="2" r="2.6"/></g>
      </g>
    </g>`);

  /* ───────────── アメリカ：ハンバーガー ───────────── */
  art('burger', '#332a1d', '#16110b', `
    ${shadow(140, 178, 98, 11, .34)}
    <g transform="translate(140,120)">
      <path d="M-70 24 q0 26 70 26 q70 0 70 -26 z" fill="#c98a3f"/>
      <ellipse cx="0" cy="24" rx="70" ry="16" fill="#e0a64f"/>
      <path d="M-72 18 q10 -14 72 -14 q62 0 72 14 q-72 14 -144 0z" fill="#efdcae"/>
      <path d="M-74 14 q12 -18 74 -18 q62 0 74 18 q-74 10 -148 0z" fill="#3f8f3a"/>
      <path d="M-72 8 q14 -16 72 -16 q58 0 72 16 q-72 10 -144 0z" fill="#5fae4a"/>
      <g fill="#c4331f">
        <ellipse cx="-34" cy="0" rx="26" ry="9"/><ellipse cx="22" cy="-2" rx="26" ry="9"/>
        <ellipse cx="-34" cy="-1" rx="20" ry="6" fill="#d6543a"/><ellipse cx="22" cy="-3" rx="20" ry="6" fill="#d6543a"/>
      </g>
      <path d="M-66 -6 q12 -12 66 -12 q54 0 66 12 q-8 18 -34 8 q-20 -8 -34 4 q-18 10 -36 0 q-18 -10 -28 -12z" fill="#f2c14e"/>
      <path d="M-62 -10 q14 -10 62 -10 q48 0 62 10 q-10 14 -30 6 q-18 -8 -34 4 q-16 10 -32 0 q-16 -10 -28 -10z" fill="#fbd96e"/>
      <path d="M-64 -16 q10 -20 64 -20 q54 0 64 20 q-64 12 -128 0z" fill="#5a3520"/>
      <path d="M-62 -20 q12 -18 62 -18 q50 0 62 18 q-62 10 -124 0z" fill="#7a4a2b"/>
      <g fill="#5a3520" opacity=".55"><circle cx="-30" cy="-24" r="3"/><circle cx="4" cy="-28" r="2.6"/><circle cx="34" cy="-22" r="3"/></g>
      <path d="M-68 -30 q0 -34 68 -34 q68 0 68 34 q-68 12 -136 0z" fill="#d9993f"/>
      <path d="M-66 -32 q0 -30 66 -30 q66 0 66 30 q-66 10 -132 0z" fill="#efb85a"/>
      <g fill="#fdf3dc">
        <ellipse cx="-34" cy="-46" rx="5" ry="2.6" transform="rotate(-18 -34 -46)"/>
        <ellipse cx="-8" cy="-54" rx="5" ry="2.6" transform="rotate(10 -8 -54)"/>
        <ellipse cx="22" cy="-50" rx="5" ry="2.6" transform="rotate(-8 22 -50)"/>
        <ellipse cx="44" cy="-40" rx="4.6" ry="2.4" transform="rotate(20 44 -40)"/>
        <ellipse cx="-52" cy="-36" rx="4.6" ry="2.4" transform="rotate(14 -52 -36)"/>
        <ellipse cx="6" cy="-38" rx="4.6" ry="2.4"/>
      </g>
    </g>
    <g transform="translate(262,124)">
      <path d="M-30 4 L30 4 L24 56 L-24 56 Z" fill="#c4331f"/>
      <path d="M-30 4 L30 4 L28 18 L-28 18 Z" fill="#d6543a"/>
      <g>
        <rect x="-24" y="-30" width="11" height="42" rx="4" fill="#f0c65f" transform="rotate(-10 -18 -9)"/>
        <rect x="-10" y="-38" width="11" height="48" rx="4" fill="#e8b950" transform="rotate(4 -4 -14)"/>
        <rect x="4" y="-32" width="11" height="44" rx="4" fill="#f2cc6b" transform="rotate(12 9 -10)"/>
        <rect x="14" y="-22" width="10" height="36" rx="4" fill="#e2ad46" transform="rotate(-6 19 -4)"/>
      </g>
    </g>`);

  /* ───────────── ニュージーランド：ハンギ ───────────── */
  art('hangi', '#241d16', '#110d09', `
    <rect x="0" y="104" width="320" height="96" fill="#5b4a33"/>
    <rect x="0" y="104" width="320" height="10" fill="#6f5a3d"/>
    <rect x="0" y="100" width="320" height="6" fill="#4a6b32"/>
    <g fill="#3f5c2a" opacity=".8"><ellipse cx="34" cy="101" rx="26" ry="5"/><ellipse cx="286" cy="101" rx="30" ry="5"/></g>
    ${steam(160, 74, 1)}
    <g transform="translate(160,150)">
      <path d="M-92 -46 q6 58 92 58 q86 0 92 -58 q-92 -18 -184 0z" fill="#33291d"/>
      <ellipse cx="0" cy="-46" rx="92" ry="20" fill="#2a2118"/>
      <ellipse cx="0" cy="-42" rx="82" ry="17" fill="#1f1912"/>
      <g>
        <ellipse cx="-44" cy="-16" rx="17" ry="11" fill="#6b6259"/>
        <ellipse cx="-10" cy="-8" rx="19" ry="12" fill="#7a7168"/>
        <ellipse cx="30" cy="-14" rx="18" ry="11" fill="#6b6259"/>
        <ellipse cx="56" cy="-4" rx="15" ry="10" fill="#5e564e"/>
        <ellipse cx="-66" cy="-4" rx="15" ry="10" fill="#5e564e"/>
        <ellipse cx="10" cy="4" rx="17" ry="10" fill="#6e655c"/>
      </g>
      <g fill="#e05a2c" opacity=".85">
        <ellipse cx="-44" cy="-16" rx="11" ry="6"/><ellipse cx="-10" cy="-8" rx="12" ry="6.4"/>
        <ellipse cx="30" cy="-14" rx="11" ry="6"/><ellipse cx="10" cy="4" rx="10" ry="5"/>
      </g>
      <g fill="#f2a63c" opacity=".8">
        <ellipse cx="-44" cy="-17" rx="6" ry="3"/><ellipse cx="-10" cy="-9" rx="6" ry="3"/><ellipse cx="30" cy="-15" rx="6" ry="3"/>
      </g>
      <g transform="translate(0,-40)">
        <path d="M-60 0 q6 -22 60 -22 q54 0 60 22 q-60 14 -120 0z" fill="#3f6b2c"/>
        <g fill="#4e8a35">
          <path d="M-52 -4 q16 -16 34 -12 q-12 16 -34 12z"/>
          <path d="M-14 -10 q18 -14 36 -8 q-14 16 -36 8z"/>
          <path d="M22 -4 q16 -14 34 -8 q-14 14 -34 8z"/>
        </g>
        <g fill="#6b4a2c">
          <ellipse cx="-30" cy="-14" rx="13" ry="8"/><ellipse cx="4" cy="-20" rx="14" ry="8.5"/><ellipse cx="34" cy="-14" rx="12" ry="7.5"/>
        </g>
        <g fill="#e2913c"><ellipse cx="-30" cy="-16" rx="7" ry="4"/><ellipse cx="4" cy="-22" rx="7" ry="4"/></g>
        <g fill="#8a5a3c"><ellipse cx="18" cy="-8" rx="10" ry="5.6"/><ellipse cx="-14" cy="-6" rx="9" ry="5"/></g>
      </g>
      <g stroke="#2a2118" stroke-width="3" fill="none" opacity=".7">
        <path d="M-92 -46 q6 58 92 58 q86 0 92 -58"/>
      </g>
    </g>
    <g transform="translate(272,60)" opacity=".9">
      <path d="M0 0 q-16 -30 4 -44 q8 22 18 26 q-14 8 -22 18z" fill="#3f6b2c"/>
      <path d="M2 -2 q-10 -24 4 -34" stroke="#6b9c4a" stroke-width="2" fill="none"/>
    </g>`);

  /* ───────────── インドネシア：ルンダン ───────────── */
  art('rendang', '#3b2117', '#190e08', `
    ${shadow(154, 174, 104, 12, .34)}
    <g transform="translate(154,126)">
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48 z" fill="#2b2320"/>
      <ellipse cx="0" cy="-8" rx="80" ry="21" fill="#3d332e"/>
      <ellipse cx="0" cy="-8" rx="71" ry="17.5" fill="#4a2a15"/>
      <ellipse cx="0" cy="-9" rx="66" ry="15.5" fill="#5e3619"/>
      <g fill="#3a2110">
        <rect x="-50" y="-22" width="28" height="20" rx="7" transform="rotate(-11 -36 -12)"/>
        <rect x="-16" y="-26" width="30" height="21" rx="7" transform="rotate(7 -1 -15)"/>
        <rect x="20" y="-20" width="27" height="19" rx="7" transform="rotate(-6 33 -10)"/>
        <rect x="-36" y="-6" width="26" height="18" rx="6" transform="rotate(9 -23 3)"/>
        <rect x="4" y="-4" width="26" height="17" rx="6" transform="rotate(-8 17 4)"/>
      </g>
      <g fill="#6b4222" opacity=".85">
        <rect x="-46" y="-19" width="16" height="5" rx="2.5" transform="rotate(-11 -38 -16)"/>
        <rect x="-12" y="-23" width="18" height="5" rx="2.5" transform="rotate(7 -3 -20)"/>
        <rect x="24" y="-17" width="15" height="5" rx="2.5" transform="rotate(-6 31 -14)"/>
      </g>
      <g fill="#c4331f"><ellipse cx="-58" cy="-12" rx="10" ry="3" transform="rotate(-18 -58 -12)"/><ellipse cx="46" cy="-6" rx="9" ry="2.8" transform="rotate(14 46 -6)"/></g>
      <g fill="#2f7a34"><path d="M52 -18 q12 -12 22 -4 q-10 12 -22 4z"/><path d="M-66 0 q-12 -10 -22 -2 q10 10 22 2z"/></g>
      <g fill="#e8d9b8" opacity=".7"><circle cx="-24" cy="2" r="2.2"/><circle cx="14" cy="-14" r="2"/><circle cx="36" cy="4" r="2"/></g>
    </g>
    <g transform="translate(268,148)">
      <ellipse cx="0" cy="18" rx="34" ry="10" fill="#000" opacity=".22"/>
      <path d="M-30 6 q0 -30 30 -30 q30 0 30 30 q-30 12 -60 0z" fill="#5b4330"/>
      <path d="M-26 4 q0 -25 26 -25 q26 0 26 25 q-26 10 -52 0z" fill="#f6f1e4"/>
      <ellipse cx="0" cy="2" rx="18" ry="7" fill="#e8e0cd"/>
    </g>`);

  /* ───────────── フィリピン：アドボ ───────────── */
  art('adobo', '#2e2a1d', '#14120c', `
    ${shadow(150, 176, 112, 12, .34)}
    <g transform="translate(150,122)">
      <ellipse cx="0" cy="36" rx="110" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="30" rx="110" ry="28" fill="#f7fafc"/>
      <ellipse cx="0" cy="30" rx="98" ry="23" fill="#e8edf2"/>
      <g transform="translate(-56,6)">
        <path d="M-38 16 q8 -32 38 -32 q30 0 38 32 q-38 12 -76 0z" fill="#fbfaf6"/>
        <g fill="#edeae2"><ellipse cx="-12" cy="2" rx="9" ry="4"/><ellipse cx="10" cy="-4" rx="8" ry="3.4"/></g>
      </g>
      <g transform="translate(34,4)">
        <ellipse cx="0" cy="22" rx="48" ry="17" fill="#3a2418"/>
        <ellipse cx="0" cy="19" rx="48" ry="17" fill="#4d301d"/>
        <g fill="#7a4a24">
          <rect x="-34" y="4" width="32" height="22" rx="9" transform="rotate(-12 -18 15)"/>
          <rect x="-2" y="0" width="34" height="23" rx="9" transform="rotate(8 15 11)"/>
          <rect x="6" y="18" width="28" height="19" rx="8" transform="rotate(-6 20 27)"/>
        </g>
        <g fill="#9e6636" opacity=".85">
          <rect x="-28" y="8" width="18" height="6" rx="3" transform="rotate(-12 -19 11)"/>
          <rect x="4" y="4" width="20" height="6" rx="3" transform="rotate(8 14 7)"/>
        </g>
        <ellipse cx="-14" cy="14" rx="14" ry="4" fill="#fff" opacity=".1"/>
        <g fill="#2f7a34"><path d="M30 6 q12 -10 20 -2 q-10 10 -20 2z"/><path d="M-40 24 q-12 -8 -20 0 q10 8 20 0z"/></g>
      </g>
      <g fill="#3a2418"><circle cx="-6" cy="44" r="2.6"/><circle cx="22" cy="40" r="2.4"/><circle cx="-24" cy="38" r="2.2"/></g>
    </g>`);

  /* ───────────── ネパール：ダルバート ───────────── */
  art('dalbhat', '#2b3128', '#121611', `
    ${shadow(160, 176, 116, 12, .34)}
    <g transform="translate(160,112)">
      <ellipse cx="0" cy="56" rx="114" ry="30" fill="#8b929c"/>
      <ellipse cx="0" cy="50" rx="114" ry="30" fill="#ccd4dc"/>
      <ellipse cx="0" cy="50" rx="102" ry="25" fill="#b4bdc6"/>
      <g transform="translate(-10,14)">
        <ellipse cx="0" cy="34" rx="42" ry="17" fill="#f2ede1"/>
        <path d="M-38 32 q14 -34 38 -34 q24 0 38 34 q-38 12 -76 0z" fill="#fdfbf4"/>
        <g fill="#eee9dc"><ellipse cx="-12" cy="16" rx="10" ry="4"/><ellipse cx="10" cy="8" rx="8" ry="3.4"/></g>
      </g>
      <g transform="translate(62,22)">
        <ellipse cx="0" cy="0" rx="32" ry="14" fill="#dfe6ec"/>
        <ellipse cx="0" cy="-2" rx="27" ry="11" fill="#e2ad2a"/>
        <ellipse cx="-6" cy="-5" rx="9" ry="4" fill="#f2c95e" opacity=".85"/>
        <g fill="#c4901c"><circle cx="8" cy="0" r="2.6"/><circle cx="-2" cy="3" r="2.2"/></g>
      </g>
      <g transform="translate(-72,30)">
        <ellipse cx="0" cy="0" rx="28" ry="12" fill="#dfe6ec"/>
        <ellipse cx="0" cy="-2" rx="23" ry="9.5" fill="#2f7a34"/>
        <g fill="#4e9a45"><path d="M-14 -4 q10 -10 20 -4 q-10 10 -20 4z"/><path d="M2 0 q10 -9 18 -3 q-9 9 -18 3z"/></g>
      </g>
      <g transform="translate(34,54)">
        <ellipse cx="0" cy="0" rx="26" ry="11" fill="#dfe6ec"/>
        <ellipse cx="0" cy="-2" rx="21" ry="8.5" fill="#b5652a"/>
        <g fill="#e2b06a"><circle cx="-8" cy="-3" r="5"/><circle cx="4" cy="0" r="4.6"/><circle cx="12" cy="-4" r="4"/></g>
      </g>
      <g transform="translate(-58,58)">
        <ellipse cx="0" cy="0" rx="18" ry="8" fill="#dfe6ec"/>
        <ellipse cx="0" cy="-1" rx="13" ry="5.4" fill="#8f2f1e"/>
      </g>
    </g>`);

  /* ───────────── ウズベキスタン：プロフ ───────────── */
  art('palov', '#3a2c14', '#1a1409', `
    ${shadow(160, 176, 120, 12, .34)}
    ${steam(160, 56, 1)}
    <g transform="translate(160,120)">
      <ellipse cx="0" cy="40" rx="112" ry="30" fill="#7c6a52"/>
      <ellipse cx="0" cy="34" rx="112" ry="30" fill="#b09a76"/>
      <ellipse cx="0" cy="34" rx="100" ry="25" fill="#8f7c5d"/>
      <path d="M-86 30 q12 -46 86 -46 q74 0 86 46 q-86 20 -172 0z" fill="#e0b556"/>
      <path d="M-80 26 q12 -40 80 -40 q68 0 80 40 q-80 16 -160 0z" fill="#efc96f"/>
      <g fill="#dd8f2a">
        <rect x="-62" y="2" width="30" height="7" rx="3.5" transform="rotate(-14 -47 5)"/>
        <rect x="-24" y="-8" width="32" height="7" rx="3.5" transform="rotate(8 -8 -5)"/>
        <rect x="16" y="4" width="30" height="7" rx="3.5" transform="rotate(-10 31 7)"/>
        <rect x="-46" y="16" width="28" height="6" rx="3" transform="rotate(10 -32 19)"/>
        <rect x="30" y="-6" width="26" height="6" rx="3" transform="rotate(16 43 -3)"/>
      </g>
      <g fill="#7d4a24">
        <rect x="-36" y="-16" width="28" height="19" rx="7" transform="rotate(-8 -22 -7)"/>
        <rect x="4" y="-20" width="30" height="20" rx="7" transform="rotate(6 19 -10)"/>
      </g>
      <g fill="#9c6436" opacity=".85"><rect x="-30" y="-13" width="16" height="5" rx="2.5" transform="rotate(-8 -22 -11)"/><rect x="10" y="-17" width="18" height="5" rx="2.5" transform="rotate(6 19 -15)"/></g>
      <g transform="translate(58,14)">
        <path d="M0 -14 q14 2 14 14 q0 12 -14 12 q-14 0 -14 -12 q0 -12 14 -14z" fill="#f2ead6"/>
        <path d="M0 -14 q-3 -8 0 -10 q3 2 0 10z" fill="#c9bda0"/>
        <g stroke="#ddd2b8" stroke-width="1.6" fill="none"><path d="M-6 -6 q6 16 0 22"/><path d="M6 -6 q-6 16 0 22"/></g>
      </g>
      <g fill="#3f2a18" opacity=".8"><circle cx="-56" cy="10" r="2.2"/><circle cx="-12" cy="14" r="2"/><circle cx="26" cy="16" r="2"/><circle cx="0" cy="2" r="1.8"/></g>
    </g>`);

  /* ───────────── レバノン：メゼ（タブーレとフムス） ───────────── */
  art('mezze', '#2a3226', '#121710', `
    ${shadow(160, 176, 122, 12, .32)}
    <g transform="translate(160,126)">
      <g transform="translate(-58,-6)">
        <ellipse cx="0" cy="22" rx="52" ry="18" fill="#dfe6ec"/>
        <ellipse cx="0" cy="19" rx="52" ry="18" fill="#f7fafc"/>
        <path d="M-40 18 q10 -26 40 -26 q30 0 40 26 q-40 12 -80 0z" fill="#3f8f3a"/>
        <g fill="#5fae4a">
          <path d="M-28 12 q10 -12 20 -6 q-8 12 -20 6z"/><path d="M-6 6 q11 -12 21 -5 q-9 12 -21 5z"/>
          <path d="M12 14 q10 -11 20 -5 q-9 11 -20 5z"/><path d="M-16 20 q10 -10 20 -4 q-9 10 -20 4z"/>
        </g>
        <g fill="#c4331f"><circle cx="-14" cy="8" r="3.2"/><circle cx="8" cy="12" r="3"/><circle cx="20" cy="4" r="2.8"/></g>
        <g fill="#e8dcb4"><circle cx="-4" cy="16" r="2.4"/><circle cx="14" cy="18" r="2.2"/></g>
      </g>
      <g transform="translate(52,4)">
        <ellipse cx="0" cy="18" rx="46" ry="16" fill="#dfe6ec"/>
        <ellipse cx="0" cy="15" rx="46" ry="16" fill="#f7fafc"/>
        <ellipse cx="0" cy="13" rx="38" ry="13" fill="#e2cf9c"/>
        <path d="M-26 12 q10 -8 22 -4 q12 4 22 -2" fill="none" stroke="#cbb277" stroke-width="3"/>
        <ellipse cx="-4" cy="10" rx="14" ry="5" fill="#d9a83f" opacity=".8"/>
        <g fill="#8a6a2c"><circle cx="-10" cy="10" r="2.4"/><circle cx="6" cy="13" r="2.2"/><circle cx="16" cy="8" r="2"/></g>
        <g fill="#3f8f3a"><ellipse cx="12" cy="4" rx="7" ry="3" transform="rotate(-20 12 4)"/></g>
      </g>
      <g transform="translate(-4,44)">
        <ellipse cx="0" cy="0" rx="34" ry="12" fill="#f2ead6"/>
        <path d="M-26 -2 L-4 -16 L14 -2 Z" fill="#e8cf9c"/>
        <path d="M-6 -2 L12 -14 L30 -2 Z" fill="#f2ddb0"/>
        <path d="M-22 -2 L-2 -13 L10 -2 Z" fill="#dcc08a" opacity=".6"/>
      </g>
      <g transform="translate(106,40)">
        <ellipse cx="0" cy="0" rx="22" ry="9" fill="#e4ebf0"/>
        <g fill="#3f4a22"><ellipse cx="-8" cy="-2" rx="6" ry="4"/><ellipse cx="3" cy="0" rx="6" ry="4"/><ellipse cx="12" cy="-3" rx="5.4" ry="3.6"/></g>
        <g fill="#6b7a3a" opacity=".7"><ellipse cx="-9" cy="-3" rx="2.4" ry="1.4"/><ellipse cx="2" cy="-1" rx="2.2" ry="1.3"/></g>
      </g>
    </g>`);

  /* ───────────── エジプト：コシャリ ───────────── */
  art('koshari', '#3a2a16', '#1a130a', `
    ${shadow(158, 174, 104, 12, .34)}
    <g transform="translate(158,126)">
      <path d="M-82 -8 q0 48 82 48 q82 0 82 -48 z" fill="#e6eaee"/>
      <ellipse cx="0" cy="-8" rx="82" ry="21" fill="#f7fafc"/>
      <ellipse cx="0" cy="-8" rx="73" ry="17.5" fill="#e0d6bd"/>
      <g fill="#c9b98f">
        <rect x="-56" y="-14" width="26" height="6" rx="3" transform="rotate(-12 -43 -11)"/>
        <rect x="-20" y="-16" width="28" height="6" rx="3" transform="rotate(8 -6 -13)"/>
        <rect x="18" y="-12" width="26" height="6" rx="3" transform="rotate(-6 31 -9)"/>
      </g>
      <g fill="#6b4a2c"><ellipse cx="-38" cy="-6" rx="6" ry="4"/><ellipse cx="-14" cy="-2" rx="6" ry="4"/><ellipse cx="10" cy="-6" rx="6" ry="4"/><ellipse cx="34" cy="-2" rx="5.6" ry="3.8"/><ellipse cx="-26" cy="2" rx="5.6" ry="3.8"/></g>
      <path d="M-62 -14 q24 -18 62 -18 q38 0 62 18 q-8 12 -62 12 q-54 0 -62 -12z" fill="#b8341d"/>
      <path d="M-56 -16 q22 -15 56 -15 q34 0 56 15 q-8 9 -56 9 q-48 0 -56 -9z" fill="#cf4426"/>
      <g fill="#e2913c">
        <path d="M-34 -22 q16 -8 30 -2 q-14 8 -30 2z"/><path d="M0 -26 q16 -7 30 0 q-14 8 -30 0z"/>
        <path d="M-16 -16 q16 -7 30 -1 q-14 8 -30 1z"/><path d="M18 -18 q14 -7 26 -1 q-12 8 -26 1z"/>
      </g>
      <g fill="#f0ae5c" opacity=".8"><path d="M-30 -21 q12 -5 22 -2"/><path d="M4 -25 q12 -5 22 -1"/></g>
      <g fill="#e8d9a8"><circle cx="-48" cy="-4" r="3.4"/><circle cx="46" cy="-6" r="3.2"/><circle cx="-2" cy="0" r="3"/></g>
      <path d="M-82 -8 q0 48 82 48 q82 0 82 -48" fill="none" stroke="#cdd3d9" stroke-width="2"/>
    </g>
    <g transform="translate(268,150) rotate(-14)">
      <ellipse cx="0" cy="16" rx="26" ry="8" fill="#000" opacity=".2"/>
      <path d="M-20 12 q-4 -24 20 -24 q24 0 20 24 q-20 8 -40 0z" fill="#d9c9a0"/>
      <ellipse cx="0" cy="-10" rx="15" ry="6" fill="#efe3c4"/>
    </g>`);

  /* ───────────── セネガル：チェブジェン ───────────── */
  art('thieb', '#33281a', '#17110a', `
    ${shadow(160, 176, 122, 12, .34)}
    <g transform="translate(160,118)">
      <ellipse cx="0" cy="42" rx="116" ry="30" fill="#9aa2ab"/>
      <ellipse cx="0" cy="36" rx="116" ry="30" fill="#dbe2e8"/>
      <ellipse cx="0" cy="36" rx="104" ry="25" fill="#c3ccd4"/>
      <path d="M-92 32 q14 -44 92 -44 q78 0 92 44 q-92 20 -184 0z" fill="#c25a22"/>
      <path d="M-86 28 q14 -39 86 -39 q72 0 86 39 q-86 17 -172 0z" fill="#d9752e"/>
      <g fill="#e8964a" opacity=".6"><ellipse cx="-40" cy="10" rx="26" ry="7"/><ellipse cx="36" cy="18" rx="22" ry="6"/></g>
      <g transform="translate(-6,-4)">
        <path d="M-34 10 q10 -22 36 -22 q28 0 36 22 q-8 12 -36 12 q-28 0 -36 -12z" fill="#e6e2d6"/>
        <path d="M-34 10 q-14 -6 -18 -12 q10 -6 18 -10z" fill="#c9c4b6"/>
        <g stroke="#c9c4b6" stroke-width="2.4" fill="none"><path d="M-20 4 q20 -8 40 -2"/><path d="M-14 12 q20 -8 38 -2"/></g>
        <circle cx="-16" cy="0" r="2.6" fill="#4a4a44"/>
      </g>
      <g fill="#e8b93c">
        <rect x="-74" y="10" width="26" height="9" rx="4.5" transform="rotate(-14 -61 14)"/>
        <rect x="44" y="4" width="24" height="8" rx="4" transform="rotate(12 56 8)"/>
      </g>
      <g fill="#f2ead6">
        <rect x="-52" y="24" width="28" height="12" rx="5" transform="rotate(8 -38 30)"/>
        <rect x="26" y="26" width="26" height="11" rx="5" transform="rotate(-8 39 31)"/>
      </g>
      <g fill="#6bae52"><ellipse cx="0" cy="30" rx="20" ry="9"/><ellipse cx="-2" cy="27" rx="12" ry="5" fill="#8fc76a"/></g>
      <g fill="#8f2f1e"><circle cx="-24" cy="16" r="3"/><circle cx="18" cy="8" r="2.6"/><circle cx="62" cy="24" r="2.6"/></g>
    </g>`);

  /* ───────────── ナイジェリア：ジョロフライス ───────────── */
  art('jollof', '#33261a', '#17110a', `
    ${shadow(154, 176, 112, 12, .34)}
    <g transform="translate(154,122)">
      <ellipse cx="0" cy="36" rx="108" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="30" rx="108" ry="28" fill="#f7fafc"/>
      <ellipse cx="0" cy="30" rx="96" ry="23" fill="#e8edf2"/>
      <path d="M-76 26 q12 -40 76 -40 q64 0 76 40 q-76 18 -152 0z" fill="#c03d1c"/>
      <path d="M-70 22 q12 -35 70 -35 q58 0 70 35 q-70 15 -140 0z" fill="#d85527"/>
      <g fill="#e8733a" opacity=".65"><ellipse cx="-28" cy="4" rx="24" ry="7"/><ellipse cx="30" cy="12" rx="18" ry="5.4"/></g>
      <g fill="#f2ead6" opacity=".55">
        <rect x="-50" y="2" width="14" height="4.6" rx="2.3" transform="rotate(-16 -43 4)"/>
        <rect x="-8" y="-6" width="15" height="4.6" rx="2.3" transform="rotate(10 0 -4)"/>
        <rect x="28" y="6" width="14" height="4.6" rx="2.3" transform="rotate(-8 35 8)"/>
        <rect x="-26" y="14" width="13" height="4.4" rx="2.2" transform="rotate(14 -20 16)"/>
      </g>
      <g transform="translate(24,-12)">
        <path d="M-26 12 q4 -22 26 -22 q22 0 26 22 q-26 10 -52 0z" fill="#9e5c26"/>
        <path d="M-20 8 q4 -16 20 -16 q16 0 20 16 q-20 8 -40 0z" fill="#c07a38"/>
        <g fill="#8a4a1c" opacity=".6"><circle cx="-8" cy="2" r="3"/><circle cx="8" cy="0" r="2.6"/><circle cx="0" cy="6" r="2.4"/></g>
      </g>
      <g transform="translate(-58,28)">
        <g fill="#e8a63c">
          <ellipse cx="-12" cy="0" rx="14" ry="7" transform="rotate(-16 -12 0)"/>
          <ellipse cx="8" cy="4" rx="14" ry="7" transform="rotate(10 8 4)"/>
        </g>
        <g fill="#f6c76c"><ellipse cx="-13" cy="-2" rx="7" ry="3" transform="rotate(-16 -13 -2)"/><ellipse cx="7" cy="2" rx="7" ry="3" transform="rotate(10 7 2)"/></g>
      </g>
      <g fill="#3f8f3a"><ellipse cx="62" cy="34" rx="10" ry="4" transform="rotate(14 62 34)"/><ellipse cx="50" cy="38" rx="8" ry="3.4" transform="rotate(-10 50 38)"/></g>
    </g>`);

  /* ───────────── ケニア：ウガリとスクマウィキ ───────────── */
  art('ugali', '#27301f', '#11160e', `
    ${shadow(160, 176, 116, 12, .34)}
    <g transform="translate(160,120)">
      <ellipse cx="0" cy="38" rx="112" ry="29" fill="#cfd5db"/>
      <ellipse cx="0" cy="32" rx="112" ry="29" fill="#fbfdff"/>
      <ellipse cx="0" cy="32" rx="100" ry="24" fill="#eef3f7"/>
      <g transform="translate(-42,2)">
        <ellipse cx="0" cy="30" rx="46" ry="16" fill="#e8e2d2"/>
        <path d="M-42 28 q6 -50 42 -50 q36 0 42 50 q-42 14 -84 0z" fill="#fbf8ee"/>
        <path d="M-30 14 q6 -30 30 -30" fill="none" stroke="#fff" stroke-width="5" opacity=".7"/>
        <path d="M-42 28 q42 14 84 0" fill="none" stroke="#e0d9c6" stroke-width="2.4"/>
      </g>
      <g transform="translate(48,10)">
        <ellipse cx="0" cy="22" rx="46" ry="16" fill="#1f4a20"/>
        <g fill="#2f7a34">
          <path d="M-34 18 q14 -18 30 -10 q-12 18 -30 10z"/>
          <path d="M-8 10 q16 -18 32 -9 q-14 18 -32 9z"/>
          <path d="M6 22 q14 -16 30 -8 q-13 16 -30 8z"/>
          <path d="M-26 26 q14 -15 28 -7 q-13 15 -28 7z"/>
        </g>
        <g stroke="#5fae4a" stroke-width="1.8" fill="none">
          <path d="M-26 14 q12 -8 20 -6"/><path d="M0 6 q12 -8 22 -5"/><path d="M12 20 q11 -7 19 -5"/>
        </g>
        <g fill="#c4331f"><circle cx="-12" cy="20" r="3"/><circle cx="16" cy="14" r="2.6"/></g>
      </g>
      <g transform="translate(4,50)">
        <ellipse cx="0" cy="0" rx="24" ry="9" fill="#e4ebf0"/>
        <ellipse cx="0" cy="-2" rx="19" ry="7" fill="#7a3f1c"/>
        <g fill="#a3653a"><circle cx="-7" cy="-3" r="3.4"/><circle cx="4" cy="-1" r="3"/><circle cx="11" cy="-4" r="2.6"/></g>
      </g>
    </g>`);

  /* ───────────── 南アフリカ：ボボティー ───────────── */
  art('bobotie', '#33291a', '#17120a', `
    ${shadow(146, 176, 112, 12, .34)}
    <g transform="translate(146,124)">
      <path d="M-84 -10 q0 42 84 42 q84 0 84 -42 z" fill="#8f4a33"/>
      <ellipse cx="0" cy="-10" rx="84" ry="24" fill="#b35e40"/>
      <ellipse cx="0" cy="-10" rx="75" ry="20" fill="#6b3a24"/>
      <ellipse cx="0" cy="-12" rx="72" ry="19" fill="#f0c65f"/>
      <ellipse cx="0" cy="-13" rx="66" ry="17" fill="#f6d67f"/>
      <g fill="#e2a83c" opacity=".7"><ellipse cx="-26" cy="-16" rx="22" ry="6"/><ellipse cx="30" cy="-8" rx="16" ry="5"/></g>
      <g fill="#c98a2e" opacity=".55"><ellipse cx="-46" cy="-6" rx="10" ry="3.4"/><ellipse cx="14" cy="-2" rx="9" ry="3"/><ellipse cx="50" cy="-16" rx="8" ry="3"/></g>
      <g fill="#3f8f3a">
        <path d="M-18 -24 q16 -12 28 -2 q-14 12 -28 2z"/>
        <path d="M18 -14 q14 -11 26 -2 q-13 11 -26 2z"/>
      </g>
      <g stroke="#2f7a34" stroke-width="1.6" fill="none"><path d="M-14 -24 q8 -5 16 -3"/><path d="M22 -14 q8 -5 15 -3"/></g>
      <path d="M-84 -10 q0 42 84 42 q84 0 84 -42" fill="none" stroke="#7a3d28" stroke-width="2"/>
      <rect x="-96" y="-16" width="16" height="8" rx="4" fill="#8f4a33"/>
      <rect x="80" y="-16" width="16" height="8" rx="4" fill="#8f4a33"/>
    </g>
    <g transform="translate(266,142)">
      <ellipse cx="0" cy="22" rx="42" ry="12" fill="#000" opacity=".22"/>
      <ellipse cx="0" cy="16" rx="42" ry="14" fill="#eef3f7"/>
      <path d="M-32 14 q10 -28 32 -28 q22 0 32 28 q-32 10 -64 0z" fill="#f2d670"/>
      <g fill="#dcb94c" opacity=".75"><circle cx="-12" cy="2" r="3.4"/><circle cx="6" cy="-4" r="3"/><circle cx="16" cy="4" r="2.8"/></g>
      <g fill="#8a5a2c"><circle cx="-4" cy="-8" r="3"/><circle cx="12" cy="-2" r="2.6"/></g>
    </g>`);

  /* ───────────── ギリシャ：ムサカ ───────────── */
  art('moussaka', '#22303a', '#0f171d', `
    ${shadow(150, 176, 106, 12, .34)}
    <g transform="translate(150,126)">
      <ellipse cx="0" cy="34" rx="104" ry="26" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="104" ry="26" fill="#fbfdff"/>
      <ellipse cx="0" cy="28" rx="92" ry="21" fill="#edf2f6"/>
      <g transform="translate(-6,-4)">
        <path d="M-56 26 L56 26 L56 8 L-56 8 Z" fill="#5e3c22"/>
        <path d="M-56 8 L56 8 L56 -4 L-56 -4 Z" fill="#6b3f6b"/>
        <path d="M-56 -4 L56 -4 L56 -16 L-56 -16 Z" fill="#8a4a2c"/>
        <path d="M-56 -16 L56 -16 L56 -26 L-56 -26 Z" fill="#7a3f7a"/>
        <path d="M-58 -26 q10 -18 58 -18 q48 0 58 18 q-8 8 -58 8 q-50 0 -58 -8z" fill="#f2e6c8"/>
        <path d="M-54 -28 q10 -14 54 -14 q44 0 54 14 q-8 6 -54 6 q-46 0 -54 -6z" fill="#fbf3dd"/>
        <g fill="#e0cb9c" opacity=".8"><ellipse cx="-24" cy="-30" rx="14" ry="4"/><ellipse cx="18" cy="-32" rx="11" ry="3.4"/></g>
        <g fill="#c98a2e" opacity=".5"><circle cx="-34" cy="-28" r="2.6"/><circle cx="4" cy="-34" r="2.4"/><circle cx="34" cy="-27" r="2.4"/></g>
        <g fill="#a35c2c" opacity=".8"><circle cx="-30" cy="-10" r="2.6"/><circle cx="0" cy="-8" r="2.4"/><circle cx="30" cy="-11" r="2.4"/></g>
        <path d="M-56 26 L56 26" stroke="#4a2e18" stroke-width="2"/>
      </g>
      <g transform="translate(74,8)">
        <path d="M-12 -14 q14 -10 24 0 q-6 18 -12 18 q-6 0 -12 -18z" fill="#3f8f3a"/>
        <path d="M0 -14 v18" stroke="#2f7a34" stroke-width="1.6"/>
      </g>
      <g transform="translate(-78,18)">
        <g fill="#3f4a22"><ellipse cx="-6" cy="0" rx="6" ry="4.4"/><ellipse cx="5" cy="3" rx="6" ry="4.4"/><ellipse cx="2" cy="-5" rx="5.4" ry="4"/></g>
      </g>
    </g>`);

  /* ───────────── ポルトガル：バカリャウ ───────────── */
  art('bacalhau', '#243040', '#101720', `
    ${shadow(154, 176, 112, 12, .34)}
    <g transform="translate(250,64) rotate(12)" opacity=".55">
      <path d="M-46 0 q10 -20 46 -20 q38 0 46 18 q-10 16 -46 16 q-36 0 -46 -14z" fill="#cfc3a8"/>
      <path d="M-46 0 q-14 -8 -18 -14 q10 -6 18 -10z" fill="#b8ac92"/>
      <g stroke="#a89c82" stroke-width="2" fill="none"><path d="M-30 -4 q20 -8 40 -4"/><path d="M-26 4 q20 -8 38 -3"/></g>
      <circle cx="-26" cy="-4" r="2.4" fill="#4a4a44"/>
    </g>
    <g transform="translate(154,124)">
      <ellipse cx="0" cy="34" rx="108" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="108" ry="28" fill="#fbfdff"/>
      <ellipse cx="0" cy="28" rx="96" ry="23" fill="#eef3f7"/>
      <g fill="#f6f2e6" stroke="#d9d2c0" stroke-width="1.2">
        <path d="M-52 14 q16 -12 34 -4 q-14 14 -34 4z"/>
        <path d="M-22 4 q18 -12 36 -3 q-16 14 -36 3z"/>
        <path d="M-6 22 q18 -11 36 -2 q-16 13 -36 2z"/>
        <path d="M-44 28 q16 -10 32 -3 q-14 12 -32 3z"/>
      </g>
      <g fill="#f0d98a">
        <ellipse cx="-62" cy="26" rx="18" ry="11"/><ellipse cx="42" cy="12" rx="17" ry="10"/><ellipse cx="30" cy="32" rx="16" ry="9.6"/>
        <ellipse cx="-64" cy="23" rx="8" ry="4" fill="#f8ecb8"/><ellipse cx="40" cy="9" rx="7" ry="3.6" fill="#f8ecb8"/>
      </g>
      <g>
        <ellipse cx="62" cy="34" rx="14" ry="9" fill="#fbfaf2"/>
        <ellipse cx="62" cy="33" rx="6" ry="4.4" fill="#f2c14e"/>
        <ellipse cx="-30" cy="42" rx="13" ry="8" fill="#fbfaf2"/>
        <ellipse cx="-30" cy="41" rx="5.4" ry="4" fill="#f2c14e"/>
      </g>
      <g fill="#2a2a24"><ellipse cx="6" cy="38" rx="6" ry="4.4"/><ellipse cx="-16" cy="16" rx="5.6" ry="4"/><ellipse cx="54" cy="24" rx="5.4" ry="3.8"/></g>
      <g fill="#3f8f3a"><ellipse cx="18" cy="-2" rx="9" ry="3.6" transform="rotate(-20 18 -2)"/><ellipse cx="-40" cy="2" rx="8" ry="3.2" transform="rotate(16 -40 2)"/></g>
    </g>`);

  /* ───────────── ポーランド：ピエロギ ───────────── */
  art('pierogi', '#2b3140', '#141822', `
    ${shadow(158, 176, 114, 12, .34)}
    ${steam(158, 56, 1)}
    <g transform="translate(158,124)">
      <ellipse cx="0" cy="36" rx="110" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="30" rx="110" ry="28" fill="#fbfdff"/>
      <ellipse cx="0" cy="30" rx="98" ry="23" fill="#eef3f7"/>
      <g>
        <g transform="translate(-48,6) rotate(-10)">
          <path d="M-34 6 q0 -30 34 -30 q34 0 34 30 q-34 12 -68 0z" fill="#f2e8d2"/>
          <path d="M-34 6 q34 12 68 0 q-34 6 -68 0z" fill="#e0d3b6"/>
          <g stroke="#d9c9a8" stroke-width="2.2" fill="none" stroke-linecap="round">
            <path d="M-30 0 q4 -8 8 -4"/><path d="M-18 -8 q4 -8 8 -4"/><path d="M-4 -12 q4 -8 8 -4"/><path d="M10 -9 q4 -8 8 -4"/><path d="M22 -2 q4 -8 8 -4"/>
          </g>
        </g>
        <g transform="translate(24,-2) rotate(8)">
          <path d="M-34 6 q0 -30 34 -30 q34 0 34 30 q-34 12 -68 0z" fill="#f8f0dd"/>
          <path d="M-34 6 q34 12 68 0 q-34 6 -68 0z" fill="#e6dac0"/>
          <g stroke="#ddcfae" stroke-width="2.2" fill="none" stroke-linecap="round">
            <path d="M-30 0 q4 -8 8 -4"/><path d="M-18 -8 q4 -8 8 -4"/><path d="M-4 -12 q4 -8 8 -4"/><path d="M10 -9 q4 -8 8 -4"/><path d="M22 -2 q4 -8 8 -4"/>
          </g>
        </g>
        <g transform="translate(-8,34) rotate(-3) scale(.94)">
          <path d="M-34 6 q0 -30 34 -30 q34 0 34 30 q-34 12 -68 0z" fill="#fbf5e6"/>
          <g stroke="#e0d3b6" stroke-width="2.2" fill="none" stroke-linecap="round">
            <path d="M-30 0 q4 -8 8 -4"/><path d="M-18 -8 q4 -8 8 -4"/><path d="M-4 -12 q4 -8 8 -4"/><path d="M10 -9 q4 -8 8 -4"/><path d="M22 -2 q4 -8 8 -4"/>
          </g>
        </g>
      </g>
      <g transform="translate(66,26)">
        <path d="M-18 2 q6 -16 18 -16 q12 0 18 16 q-18 8 -36 0z" fill="#fbfaf6"/>
        <path d="M-10 -4 q6 -7 12 -3" stroke="#e6e3db" stroke-width="2.2" fill="none"/>
      </g>
      <g fill="#c98a3d"><ellipse cx="-58" cy="36" rx="9" ry="3" transform="rotate(-14 -58 36)"/><ellipse cx="-44" cy="42" rx="8" ry="2.8" transform="rotate(10 -44 42)"/><ellipse cx="34" cy="44" rx="8" ry="2.8" transform="rotate(-8 34 44)"/></g>
      <g fill="#3f8f3a"><circle cx="8" cy="20" r="2.4"/><circle cx="-24" cy="12" r="2.2"/><circle cx="44" cy="8" r="2.2"/></g>
    </g>`);

  /* ───────────── ハンガリー：グヤーシュ ───────────── */
  art('gulyas', '#3a2118', '#190d0a', `
    ${shadow(146, 176, 100, 12, .34)}
    ${steam(140, 52, 1)}
    <g transform="translate(146,124)">
      <path d="M-78 -8 q0 48 78 48 q78 0 78 -48 z" fill="#3a3a42"/>
      <path d="M-78 -8 q0 48 78 48 q78 0 78 -48 z" fill="#4a4a54"/>
      <ellipse cx="0" cy="-8" rx="78" ry="21" fill="#63636e"/>
      <ellipse cx="0" cy="-8" rx="69" ry="17.5" fill="#9e2f14"/>
      <ellipse cx="0" cy="-9" rx="64" ry="15.5" fill="#b83b18"/>
      <g fill="#cf5a2a" opacity=".6"><ellipse cx="-24" cy="-13" rx="22" ry="5"/><ellipse cx="30" cy="-5" rx="16" ry="4"/></g>
      <g fill="#5e2a14">
        <rect x="-44" y="-18" width="22" height="15" rx="5" transform="rotate(-12 -33 -10)"/>
        <rect x="-10" y="-22" width="23" height="16" rx="5" transform="rotate(8 1 -14)"/>
        <rect x="24" y="-14" width="21" height="14" rx="5" transform="rotate(-6 34 -7)"/>
      </g>
      <g fill="#e8b93c">
        <ellipse cx="-30" cy="-2" rx="10" ry="6"/><ellipse cx="6" cy="-4" rx="9" ry="5.4"/><ellipse cx="38" cy="-14" rx="8" ry="5"/>
        <ellipse cx="-32" cy="-4" rx="5" ry="2.6" fill="#f6d97a"/>
      </g>
      <g fill="#c4331f"><ellipse cx="-52" cy="-6" rx="7" ry="3.4" transform="rotate(-20 -52 -6)"/><ellipse cx="48" cy="0" rx="6.4" ry="3" transform="rotate(16 48 0)"/></g>
      <g fill="#3f8f3a"><circle cx="-14" cy="-16" r="2.4"/><circle cx="20" cy="-18" r="2.2"/></g>
      <path d="M-78 -8 q0 48 78 48 q78 0 78 -48" fill="none" stroke="#33333b" stroke-width="2"/>
      <rect x="-88" y="6" width="14" height="7" rx="3.5" fill="#4a4a54"/>
      <rect x="74" y="6" width="14" height="7" rx="3.5" fill="#4a4a54"/>
    </g>
    <g transform="translate(258,146)">
      <ellipse cx="0" cy="20" rx="30" ry="9" fill="#000" opacity=".22"/>
      <path d="M-6 8 q-18 -6 -18 -22 q0 -18 20 -18 q22 0 22 18 q0 16 -18 22z" fill="#c4331f"/>
      <path d="M-4 4 q-12 -6 -12 -18 q0 -12 14 -12" fill="none" stroke="#e0603f" stroke-width="3" opacity=".7"/>
      <path d="M2 -32 q2 -10 10 -12" stroke="#4e9a45" stroke-width="4" fill="none" stroke-linecap="round"/>
    </g>`);

  /* ───────────── ロシア：ペリメニ ───────────── */
  art('pelmeni', '#28303d', '#121720', `
    ${shadow(158, 176, 110, 12, .32)}
    ${steam(158, 54, 1)}
    <g transform="translate(158,126)">
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48 z" fill="#e8edf2"/>
      <ellipse cx="0" cy="-8" rx="80" ry="21" fill="#fbfdff"/>
      <g stroke="#5f8fd0" stroke-width="2.6" fill="none" opacity=".65">
        <path d="M-54 18 q9 -7 18 0 q9 7 18 0 q9 -7 18 0"/>
      </g>
      <ellipse cx="0" cy="-8" rx="71" ry="17.5" fill="#dfe6ec"/>
      <g>
        <g transform="translate(-40,-12)">
          <circle cx="0" cy="0" r="17" fill="#f6f1e4"/>
          <circle cx="0" cy="-1" r="13" fill="#fbf8ee"/>
          <path d="M-14 4 q14 10 28 0" fill="none" stroke="#e0d8c4" stroke-width="2.4"/>
          <circle cx="0" cy="-2" r="6" fill="#efe7d4"/>
        </g>
        <g transform="translate(-2,-20)">
          <circle cx="0" cy="0" r="17" fill="#fbf6e9"/>
          <circle cx="0" cy="-1" r="13" fill="#fffcf4"/>
          <path d="M-14 4 q14 10 28 0" fill="none" stroke="#e4dcc8" stroke-width="2.4"/>
          <circle cx="0" cy="-2" r="6" fill="#f2ebd8"/>
        </g>
        <g transform="translate(36,-10)">
          <circle cx="0" cy="0" r="16" fill="#f6f1e4"/>
          <circle cx="0" cy="-1" r="12" fill="#fbf8ee"/>
          <path d="M-13 4 q13 9 26 0" fill="none" stroke="#e0d8c4" stroke-width="2.4"/>
          <circle cx="0" cy="-2" r="5.4" fill="#efe7d4"/>
        </g>
        <g transform="translate(16,4)">
          <circle cx="0" cy="0" r="15" fill="#f2ecdd"/>
          <circle cx="0" cy="-1" r="11" fill="#f8f4ea"/>
          <path d="M-12 4 q12 8 24 0" fill="none" stroke="#ded5c0" stroke-width="2.2"/>
        </g>
        <g transform="translate(-24,6)">
          <circle cx="0" cy="0" r="15" fill="#f2ecdd"/>
          <circle cx="0" cy="-1" r="11" fill="#f8f4ea"/>
          <path d="M-12 4 q12 8 24 0" fill="none" stroke="#ded5c0" stroke-width="2.2"/>
        </g>
      </g>
      <g transform="translate(2,-26)">
        <path d="M-16 4 q6 -16 16 -16 q10 0 16 16 q-16 8 -32 0z" fill="#fbfdff"/>
        <path d="M-8 -2 q6 -7 12 -3" stroke="#e4eaf0" stroke-width="2.2" fill="none"/>
      </g>
      <g stroke="#3f8f3a" stroke-width="2" fill="none" stroke-linecap="round">
        <path d="M52 -14 q6 -6 10 -2 M56 -18 v7"/>
        <path d="M-56 -4 q6 -6 10 -2 M-52 -8 v7"/>
      </g>
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48" fill="none" stroke="#d3dae1" stroke-width="2"/>
    </g>`);

  /* ───────────── カナダ：プーティン ───────────── */
  art('poutine', '#2a2f22', '#131610', `
    ${shadow(158, 178, 102, 11, .34)}
    <g transform="translate(158,128)">
      <path d="M-78 -18 L78 -18 L62 48 L-62 48 Z" fill="#c9502f"/>
      <path d="M-78 -18 L78 -18 L74 -2 L-74 -2 Z" fill="#e0603a"/>
      <path d="M-70 -14 L70 -14 L67 -6 L-67 -6 Z" fill="#fbfaf2" opacity=".25"/>
      <g>
        <rect x="-58" y="-42" width="15" height="52" rx="5" fill="#f0c65f" transform="rotate(-12 -50 -16)"/>
        <rect x="-38" y="-50" width="15" height="58" rx="5" fill="#e8b950" transform="rotate(5 -30 -21)"/>
        <rect x="-18" y="-46" width="15" height="54" rx="5" fill="#f2cc6b" transform="rotate(-6 -10 -19)"/>
        <rect x="2" y="-52" width="15" height="58" rx="5" fill="#e6b44c" transform="rotate(10 9 -23)"/>
        <rect x="22" y="-44" width="14" height="52" rx="5" fill="#f0c65f" transform="rotate(-4 29 -18)"/>
        <rect x="40" y="-38" width="14" height="48" rx="5" fill="#e2ad46" transform="rotate(14 47 -14)"/>
      </g>
      <g fill="#fbf6e2">
        <ellipse cx="-34" cy="-22" rx="11" ry="9"/><ellipse cx="-2" cy="-32" rx="12" ry="9.6"/>
        <ellipse cx="28" cy="-20" rx="11" ry="9"/><ellipse cx="10" cy="-10" rx="10" ry="8"/>
        <ellipse cx="-20" cy="-6" rx="9.6" ry="7.6"/>
      </g>
      <g fill="#fffdf2" opacity=".8">
        <ellipse cx="-36" cy="-25" rx="5" ry="3.4"/><ellipse cx="-4" cy="-35" rx="5.4" ry="3.6"/><ellipse cx="26" cy="-23" rx="5" ry="3.4"/>
      </g>
      <g fill="#5e3a1c" opacity=".92">
        <path d="M-48 -18 q22 -10 42 2 q20 12 44 -2 q-8 16 -24 14 q-20 -2 -34 -6 q-16 -4 -28 -8z"/>
        <path d="M-30 2 q20 -8 38 2 q18 10 30 2 q-6 12 -22 10 q-18 -2 -30 -6 q-10 -4 -16 -8z"/>
      </g>
      <g fill="#7a5028" opacity=".8"><ellipse cx="-16" cy="-14" rx="12" ry="4"/><ellipse cx="18" cy="6" rx="10" ry="3.4"/></g>
    </g>`);

  /* ───────────── アルゼンチン：アサード ───────────── */
  art('asado', '#3a2418', '#170e09', `
    ${shadow(150, 178, 118, 12, .34)}
    <g transform="translate(150,126)">
      <path d="M-104 30 q0 18 104 18 q104 0 104 -18 l-6 18 q-16 12 -98 12 q-82 0 -98 -12z" fill="#3a3028"/>
      <g fill="#e05a2c" opacity=".8">
        <ellipse cx="-58" cy="36" rx="16" ry="6"/><ellipse cx="-14" cy="40" rx="18" ry="6.4"/>
        <ellipse cx="34" cy="36" rx="16" ry="6"/><ellipse cx="70" cy="40" rx="14" ry="5.4"/>
      </g>
      <g fill="#f2a63c" opacity=".7">
        <ellipse cx="-58" cy="35" rx="8" ry="3"/><ellipse cx="-14" cy="39" rx="9" ry="3.2"/><ellipse cx="34" cy="35" rx="8" ry="3"/>
      </g>
      <g stroke="#7a7168" stroke-width="4" stroke-linecap="round">
        <path d="M-104 16 L104 16"/><path d="M-104 26 L104 26"/><path d="M-104 6 L104 6"/>
      </g>
      <g transform="translate(-46,4) rotate(-6)">
        <path d="M-36 10 q4 -24 36 -24 q32 0 36 24 q-36 10 -72 0z" fill="#5e2a18"/>
        <path d="M-32 7 q4 -19 32 -19 q28 0 32 19 q-32 8 -64 0z" fill="#8a3f22"/>
        <g stroke="#3a1a10" stroke-width="3.4" fill="none" opacity=".8"><path d="M-22 0 h44"/><path d="M-26 8 h52"/></g>
        <path d="M-36 10 q36 -6 72 0 q-4 6 -36 6 q-32 0 -36 -6z" fill="#efe4d0"/>
      </g>
      <g transform="translate(40,-4) rotate(5)">
        <path d="M-34 10 q4 -22 34 -22 q30 0 34 22 q-34 10 -68 0z" fill="#6b3018"/>
        <path d="M-30 7 q4 -18 30 -18 q26 0 30 18 q-30 8 -60 0z" fill="#9a4a26"/>
        <g stroke="#3a1a10" stroke-width="3.4" fill="none" opacity=".8"><path d="M-20 0 h40"/><path d="M-24 8 h48"/></g>
      </g>
      <g transform="translate(-6,-28) rotate(-3)">
        <path d="M-26 8 q4 -18 26 -18 q22 0 26 18 q-26 8 -52 0z" fill="#7d3a1e"/>
        <g stroke="#3a1a10" stroke-width="3" fill="none" opacity=".75"><path d="M-16 0 h32"/></g>
      </g>
      <g transform="translate(88,-20)">
        <ellipse cx="0" cy="14" rx="26" ry="8" fill="#000" opacity=".2"/>
        <ellipse cx="0" cy="8" rx="26" ry="10" fill="#e8edf2"/>
        <ellipse cx="0" cy="6" rx="21" ry="8" fill="#2f7a34"/>
        <g fill="#5fae4a"><circle cx="-8" cy="4" r="3.4"/><circle cx="3" cy="7" r="3"/><circle cx="11" cy="3" r="2.8"/></g>
        <g fill="#c4331f"><circle cx="-2" cy="2" r="2"/></g>
      </g>
    </g>`);

  /* ───────────── ジャマイカ：ジャークチキン ───────────── */
  art('jerk', '#1f2e1c', '#0e150c', `
    ${shadow(150, 176, 112, 12, .34)}
    <g transform="translate(150,122)">
      <ellipse cx="0" cy="36" rx="110" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="30" rx="110" ry="28" fill="#f7fafc"/>
      <ellipse cx="0" cy="30" rx="98" ry="23" fill="#e8edf2"/>
      <g transform="translate(-56,10)">
        <ellipse cx="0" cy="18" rx="40" ry="14" fill="#c9b89c"/>
        <path d="M-34 16 q8 -26 34 -26 q26 0 34 26 q-34 10 -68 0z" fill="#e8dcc0"/>
        <g fill="#2a2620"><circle cx="-14" cy="4" r="3.4"/><circle cx="2" cy="0" r="3"/><circle cx="14" cy="6" r="3.2"/><circle cx="-4" cy="10" r="2.8"/><circle cx="18" cy="-2" r="2.6"/></g>
      </g>
      <g transform="translate(34,-2) rotate(-8)">
        <path d="M-40 14 q2 -28 34 -30 q30 -2 40 20 q6 14 -14 18 q-28 6 -46 -2 q-14 -2 -14 -6z" fill="#3a1f12"/>
        <path d="M-34 10 q2 -22 30 -24 q26 -2 34 16 q5 11 -12 14 q-24 5 -40 -2 q-11 -1 -12 -4z" fill="#6b3a1c"/>
        <g fill="#8f5226" opacity=".8"><ellipse cx="-14" cy="-6" rx="12" ry="6"/><ellipse cx="12" cy="-2" rx="10" ry="5"/></g>
        <g fill="#1f120a" opacity=".8"><circle cx="-22" cy="4" r="3.4"/><circle cx="2" cy="8" r="3"/><circle cx="20" cy="4" r="2.8"/><circle cx="-4" cy="-8" r="2.6"/><circle cx="14" cy="-10" r="2.4"/></g>
        <path d="M34 8 q14 2 18 10 q-10 4 -20 -2z" fill="#e8dcc0"/>
      </g>
      <g transform="translate(74,34)">
        <path d="M0 -8 q12 0 12 12 q0 12 -12 12 q-12 0 -12 -12 q0 -12 12 -12z" fill="#c4331f"/>
        <path d="M-4 -10 q4 -8 10 -6" stroke="#4e9a45" stroke-width="3.4" fill="none" stroke-linecap="round"/>
        <path d="M-4 -2 q4 6 2 12" stroke="#e0603f" stroke-width="2" fill="none" opacity=".8"/>
      </g>
      <g transform="translate(-16,44)">
        <path d="M-14 -4 q14 -8 28 0 q-4 14 -14 14 q-10 0 -14 -14z" fill="#6fae3a"/>
        <path d="M-10 -2 q10 -5 20 0 q-3 10 -10 10 q-7 0 -10 -10z" fill="#b8d96a"/>
      </g>
      <g fill="#3f8f3a"><ellipse cx="46" cy="44" rx="9" ry="3.6" transform="rotate(12 46 44)"/></g>
    </g>`);

  /* ───────────── オーストラリア：ミートパイ ───────────── */
  art('meatpie', '#2f2a1d', '#15120c', `
    ${shadow(146, 176, 108, 12, .34)}
    <g transform="translate(146,124)">
      <ellipse cx="0" cy="34" rx="106" ry="27" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="106" ry="27" fill="#f7fafc"/>
      <ellipse cx="0" cy="28" rx="94" ry="22" fill="#e8edf2"/>
      <g transform="translate(-14,0)">
        <ellipse cx="0" cy="18" rx="62" ry="22" fill="#a8702f"/>
        <ellipse cx="0" cy="12" rx="62" ry="22" fill="#c9903f"/>
        <ellipse cx="0" cy="10" rx="54" ry="18" fill="#e0ae5c"/>
        <path d="M-54 8 q10 -22 54 -22 q44 0 54 22 q-54 14 -108 0z" fill="#efc272"/>
        <path d="M-50 6 q10 -18 50 -18 q40 0 50 18 q-50 12 -100 0z" fill="#f6d28c"/>
        <g fill="#dcae60" opacity=".8"><ellipse cx="-22" cy="-4" rx="14" ry="4.6"/><ellipse cx="16" cy="-8" rx="11" ry="3.6"/></g>
        <g stroke="#b5813a" stroke-width="2" fill="none" opacity=".8"><path d="M-40 6 q40 12 80 0"/></g>
        <g fill="#c9903f" opacity=".7"><circle cx="-8" cy="-2" r="2.4"/><circle cx="8" cy="0" r="2.2"/></g>
      </g>
      <g transform="translate(-14,-16)">
        <path d="M-26 6 q10 -14 26 -14 q16 0 26 14 q-26 8 -52 0z" fill="#8a3f22" opacity=".0"/>
      </g>
      <path d="M-56 -8 q18 -10 34 -2 q16 8 30 -2 q14 -10 30 -2" fill="none" stroke="#c4331f" stroke-width="5" stroke-linecap="round"/>
      <g transform="translate(74,22)">
        <path d="M-12 20 q-6 -30 0 -38 q2 -8 12 -8 q10 0 12 8 q6 8 0 38 q-12 6 -24 0z" fill="#c4331f"/>
        <path d="M-8 18 q-4 -26 0 -32" fill="none" stroke="#e0603f" stroke-width="3" opacity=".6"/>
        <rect x="-6" y="-32" width="12" height="8" rx="3" fill="#8f2416"/>
        <rect x="-10" y="-6" width="20" height="12" rx="2" fill="#f2ead6"/>
      </g>
    </g>`);

  /* ───────────── フィジー：ココンダ ───────────── */
  art('kokoda', '#12322f', '#081a19', `
    ${shadow(150, 176, 100, 12, .34)}
    <g transform="translate(150,124)">
      <path d="M-76 -6 q0 46 76 46 q76 0 76 -46 z" fill="#5b4330"/>
      <path d="M-76 -6 q0 46 76 46 q76 0 76 -46 z" fill="#6b4f38"/>
      <ellipse cx="0" cy="-6" rx="76" ry="20" fill="#8a6743"/>
      <ellipse cx="0" cy="-6" rx="68" ry="17" fill="#3d2c1c"/>
      <ellipse cx="0" cy="-7" rx="64" ry="15.5" fill="#f6f2e6"/>
      <ellipse cx="-8" cy="-9" rx="40" ry="10" fill="#fdfbf4"/>
      <g fill="#fbfaf4" stroke="#ded7c6" stroke-width="1.2">
        <rect x="-44" y="-16" width="20" height="15" rx="4" transform="rotate(-12 -34 -9)"/>
        <rect x="-18" y="-20" width="21" height="16" rx="4" transform="rotate(8 -8 -12)"/>
        <rect x="10" y="-15" width="20" height="15" rx="4" transform="rotate(-6 20 -8)"/>
        <rect x="-32" y="-4" width="19" height="14" rx="4" transform="rotate(10 -23 3)"/>
        <rect x="2" y="-2" width="19" height="13" rx="4" transform="rotate(-8 11 4)"/>
      </g>
      <g fill="#c4331f" opacity=".9">
        <ellipse cx="-50" cy="-4" rx="8" ry="5"/><ellipse cx="40" cy="-12" rx="7.4" ry="4.6"/><ellipse cx="22" cy="4" rx="7" ry="4.4"/>
      </g>
      <g fill="#a8437a" opacity=".85">
        <path d="M-40 4 q18 -6 32 -2 q-16 7 -32 2z"/><path d="M8 -20 q16 -6 30 -2 q-15 7 -30 2z"/>
      </g>
      <g fill="#3f8f3a"><ellipse cx="52" cy="-2" rx="8" ry="3.4" transform="rotate(-22 52 -2)"/><ellipse cx="-58" cy="-14" rx="7" ry="3" transform="rotate(18 -58 -14)"/></g>
      <path d="M-76 -6 q0 46 76 46 q76 0 76 -46" fill="none" stroke="#4a3626" stroke-width="2"/>
    </g>
    <g transform="translate(268,148)">
      <circle cx="0" cy="0" r="18" fill="#6fae3a"/>
      <circle cx="0" cy="0" r="14" fill="#b8d96a"/>
      <g stroke="#8fc24a" stroke-width="1.8"><path d="M0 -14 V14 M-14 0 H14 M-10 -10 L10 10 M10 -10 L-10 10"/></g>
    </g>
    <g transform="translate(46,54)" opacity=".85">
      <path d="M0 0 q-30 -14 -40 -34 q26 6 44 24 q-2 6 -4 10z" fill="#2f7a34"/>
      <path d="M-2 -2 q-22 -12 -32 -26" stroke="#4e9a45" stroke-width="2" fill="none"/>
    </g>`);

  /* ═════════ 同じ国の中の、もう一つの郷土料理 ═════════ */

  /* 日本・山梨：ほうとう */
  art('houtou', '#2b2f1f', '#131610', `
    ${shadow(150, 176, 104, 12, .34)}
    ${steam(144, 52, 1)}
    <g transform="translate(150,126)">
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48 z" fill="#2a1d16"/>
      <ellipse cx="0" cy="-8" rx="80" ry="21" fill="#3d2b20"/>
      <ellipse cx="0" cy="-8" rx="71" ry="17.5" fill="#8a6a33"/>
      <ellipse cx="0" cy="-9" rx="66" ry="15.5" fill="#a5823f"/>
      <g fill="#c2a05a" opacity=".5"><ellipse cx="-24" cy="-13" rx="22" ry="5"/><ellipse cx="32" cy="-4" rx="15" ry="4"/></g>
      <g fill="#f2e6cb" stroke="#ddcba4" stroke-width="1.2">
        <path d="M-56 -10 q22 -9 44 -2 q-20 9 -44 2z"/>
        <path d="M-26 -18 q24 -8 46 -1 q-22 9 -46 1z"/>
        <path d="M-10 -2 q24 -9 46 -1 q-22 9 -46 1z"/>
        <path d="M-48 2 q20 -8 40 -1 q-19 8 -40 1z"/>
      </g>
      <g>
        <path d="M6 -24 q16 -12 30 -2 q4 12 -10 16 q-18 4 -22 -6 q-2 -6 2 -8z" fill="#e2913c"/>
        <path d="M10 -22 q12 -8 22 -2" stroke="#f2b562" stroke-width="3" fill="none"/>
        <path d="M6 -24 q16 -12 30 -2" fill="none" stroke="#3f7a35" stroke-width="3.4"/>
        <path d="M-52 -20 q14 -10 26 -2 q3 10 -9 13 q-15 3 -19 -5z" fill="#d9832f"/>
        <path d="M-52 -20 q14 -10 26 -2" fill="none" stroke="#3f7a35" stroke-width="3"/>
      </g>
      <g fill="#c9a86a"><ellipse cx="-34" cy="4" rx="10" ry="6"/><ellipse cx="44" cy="-14" rx="9" ry="5.4"/></g>
      <g fill="#3f8f3a"><ellipse cx="18" cy="2" rx="9" ry="3.4" transform="rotate(-14 18 2)"/><ellipse cx="-14" cy="-26" rx="8" ry="3" transform="rotate(12 -14 -26)"/></g>
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48" fill="none" stroke="#1f150f" stroke-width="2"/>
    </g>
    <g transform="translate(262,152) rotate(-18)" stroke="#3b2a1c" stroke-width="4.5" stroke-linecap="round">
      <path d="M0 0 L32 -54"/><path d="M9 3 L41 -51"/>
    </g>`);

  /* 日本・北海道：石狩鍋 */
  art('ishikari', '#1e2a34', '#0d141a', `
    ${shadow(152, 176, 106, 12, .34)}
    ${steam(146, 52, 1)}
    <g transform="translate(152,126)">
      <path d="M-82 -8 q0 48 82 48 q82 0 82 -48 z" fill="#2b2320"/>
      <ellipse cx="0" cy="-8" rx="82" ry="21" fill="#3f342f"/>
      <ellipse cx="0" cy="-8" rx="73" ry="17.5" fill="#8a6136"/>
      <ellipse cx="0" cy="-9" rx="68" ry="15.5" fill="#a37a44"/>
      <g fill="#bd9457" opacity=".5"><ellipse cx="-26" cy="-13" rx="22" ry="5"/><ellipse cx="34" cy="-4" rx="15" ry="4"/></g>
      <g>
        <path d="M-52 -14 q22 -12 42 -4 q-6 12 -22 14 q-18 2 -20 -10z" fill="#e8734a"/>
        <g stroke="#fbd9c2" stroke-width="3" fill="none" opacity=".9"><path d="M-44 -12 q18 -8 34 -4"/><path d="M-40 -6 q18 -8 34 -3"/></g>
        <path d="M4 -22 q22 -10 40 -2 q-6 12 -22 13 q-16 1 -18 -11z" fill="#f08154"/>
        <g stroke="#fce0cb" stroke-width="3" fill="none" opacity=".9"><path d="M12 -20 q16 -7 30 -3"/><path d="M14 -14 q16 -7 30 -3"/></g>
      </g>
      <g fill="#f2e4c0"><ellipse cx="-18" cy="2" rx="12" ry="7"/><ellipse cx="-20" cy="0" rx="6" ry="3" fill="#faf2d8"/></g>
      <g fill="#6bae52"><path d="M40 -16 q14 -14 26 -4 q-12 14 -26 4z"/><path d="M-64 -6 q-14 -12 -26 -2 q12 12 26 2z"/></g>
      <g fill="#e8d9a8"><ellipse cx="22" cy="0" rx="9" ry="5"/><ellipse cx="54" cy="-8" rx="7" ry="4"/></g>
      <rect x="-12" y="-30" width="22" height="9" rx="3" fill="#f6e8b8"/>
      <path d="M-82 -8 q0 48 82 48 q82 0 82 -48" fill="none" stroke="#1f1814" stroke-width="2"/>
    </g>
    <g transform="translate(44,66)" opacity=".8">
      <g fill="#dbe7f0"><circle cx="0" cy="0" r="3"/><circle cx="22" cy="12" r="2.4"/><circle cx="-16" cy="16" r="2.2"/><circle cx="12" cy="-12" r="2"/><circle cx="34" cy="-6" r="1.8"/></g>
    </g>`);

  /* 中国・北京：北京ダック */
  art('peking', '#3a2a1a', '#18110a', `
    ${shadow(152, 176, 112, 12, .34)}
    <g transform="translate(152,122)">
      <ellipse cx="0" cy="36" rx="110" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="30" rx="110" ry="28" fill="#f7fafc"/>
      <ellipse cx="0" cy="30" rx="98" ry="23" fill="#e8edf2"/>
      <g transform="translate(-26,-4)">
        <g fill="#8a4a1c">
          <path d="M-46 14 q10 -16 34 -18 q22 -2 30 8 q-8 12 -30 14 q-24 2 -34 -4z"/>
          <path d="M-20 6 q12 -16 36 -16 q24 0 30 12 q-10 10 -32 10 q-24 0 -34 -6z"/>
        </g>
        <g fill="#b5651f">
          <path d="M-42 12 q10 -13 32 -15 q20 -2 26 7 q-8 10 -27 12 q-22 2 -31 -4z"/>
          <path d="M-16 4 q12 -13 32 -13 q22 0 27 10 q-9 8 -29 8 q-22 0 -30 -5z"/>
        </g>
        <g fill="#d98b32" opacity=".85">
          <ellipse cx="-24" cy="4" rx="14" ry="5"/><ellipse cx="6" cy="-2" rx="13" ry="4.6"/><ellipse cx="28" cy="4" rx="10" ry="4"/>
        </g>
        <g fill="#6b3512" opacity=".55"><circle cx="-34" cy="10" r="2.6"/><circle cx="-4" cy="10" r="2.4"/><circle cx="22" cy="12" r="2.4"/><circle cx="12" cy="-6" r="2.2"/></g>
      </g>
      <g transform="translate(58,16)">
        <ellipse cx="0" cy="10" rx="34" ry="12" fill="#e4ebf0"/>
        <ellipse cx="0" cy="6" rx="32" ry="11" fill="#fbf8ef"/>
        <ellipse cx="0" cy="2" rx="32" ry="11" fill="#f6f1e2"/>
        <ellipse cx="0" cy="-2" rx="32" ry="11" fill="#fdfbf2"/>
        <ellipse cx="0" cy="-3" rx="22" ry="6" fill="#f0e9d6" opacity=".6"/>
      </g>
      <g transform="translate(-72,32)">
        <g stroke="#8fc24a" stroke-width="4.4" stroke-linecap="round" fill="none">
          <path d="M-14 6 L14 -2"/><path d="M-14 12 L14 4"/>
        </g>
        <g stroke="#f2f0e0" stroke-width="4.4" stroke-linecap="round" fill="none">
          <path d="M-14 0 L14 -8"/>
        </g>
      </g>
      <g transform="translate(6,44)">
        <ellipse cx="0" cy="0" rx="20" ry="8" fill="#e4ebf0"/>
        <ellipse cx="0" cy="-2" rx="15" ry="6" fill="#4a2a18"/>
        <ellipse cx="-4" cy="-3" rx="5" ry="2.2" fill="#6b4028"/>
      </g>
    </g>`);

  /* 中国・広東：飲茶（点心） */
  art('dimsum', '#2a3326', '#121710', `
    ${shadow(158, 176, 112, 12, .32)}
    ${steam(150, 46, 1)}
    <g transform="translate(158,124)">
      <g transform="translate(-48,6)">
        <ellipse cx="0" cy="30" rx="50" ry="15" fill="#8a6335"/>
        <path d="M-48 28 q0 -22 48 -22 q48 0 48 22 q-48 12 -96 0z" fill="#b5895a"/>
        <path d="M-48 8 q0 -14 48 -14 q48 0 48 14 q-48 10 -96 0z" fill="#d9b483"/>
        <ellipse cx="0" cy="4" rx="44" ry="12" fill="#c49a66"/>
        <g>
          <path d="M-26 4 q0 -14 14 -14 q14 0 14 14 q-14 6 -28 0z" fill="#f2b8a8"/>
          <g stroke="#e09a88" stroke-width="1.8" fill="none"><path d="M-20 -2 q6 -6 12 -3"/><path d="M-24 2 q10 -6 18 -2"/></g>
          <path d="M2 2 q0 -14 14 -14 q14 0 14 14 q-14 6 -28 0z" fill="#f6c6b4"/>
          <g stroke="#e09a88" stroke-width="1.8" fill="none"><path d="M8 -4 q6 -6 12 -3"/></g>
          <path d="M-12 10 q0 -12 13 -12 q13 0 13 12 q-13 5 -26 0z" fill="#efae9c"/>
        </g>
      </g>
      <g transform="translate(46,-8)">
        <ellipse cx="0" cy="26" rx="44" ry="13" fill="#8a6335"/>
        <path d="M-42 24 q0 -20 42 -20 q42 0 42 20 q-42 11 -84 0z" fill="#b5895a"/>
        <path d="M-42 6 q0 -13 42 -13 q42 0 42 13 q-42 9 -84 0z" fill="#d9b483"/>
        <ellipse cx="0" cy="2" rx="38" ry="11" fill="#c49a66"/>
        <g>
          <path d="M-24 2 q-2 -16 12 -16 q14 0 12 16 q-12 6 -24 0z" fill="#f2ead2"/>
          <g stroke="#ddd2b4" stroke-width="1.8" fill="none"><path d="M-18 -6 q6 -6 12 -3"/></g>
          <path d="M0 0 q-2 -16 12 -16 q14 0 12 16 q-12 6 -24 0z" fill="#f8f2dc"/>
          <g fill="#e8b93c"><circle cx="-12" cy="-12" r="3"/><circle cx="12" cy="-14" r="3"/></g>
        </g>
      </g>
      <g transform="translate(-4,42)">
        <ellipse cx="0" cy="8" rx="26" ry="8" fill="#000" opacity=".2"/>
        <path d="M-20 4 q0 -18 20 -18 q20 0 20 18 q-20 8 -40 0z" fill="#f2f6f8"/>
        <ellipse cx="0" cy="-12" rx="17" ry="6" fill="#b5822f"/>
        <ellipse cx="-4" cy="-13" rx="7" ry="2.6" fill="#d9a84f"/>
        <path d="M18 -2 q10 2 10 8 q-8 2 -12 -4z" fill="#f2f6f8"/>
      </g>
    </g>`);

  /* 南インド：ドーサ */
  art('dosa', '#33301a', '#16150a', `
    ${shadow(160, 176, 118, 12, .34)}
    <g transform="translate(160,120)">
      <ellipse cx="0" cy="38" rx="114" ry="29" fill="#8b929c"/>
      <ellipse cx="0" cy="32" rx="114" ry="29" fill="#ccd4dc"/>
      <ellipse cx="0" cy="32" rx="102" ry="24" fill="#b4bdc6"/>
      <g transform="translate(-16,6)">
        <path d="M-72 22 q-6 -36 26 -44 q30 -8 44 6 q-12 8 -16 22 q-4 16 6 26 q-34 6 -60 -10z" fill="#d9a441"/>
        <path d="M-72 22 q-6 -36 26 -44 q12 -4 20 -2 q-26 16 -14 56 q-20 2 -32 -10z" fill="#efc264"/>
        <path d="M-60 6 q20 -16 40 -14" fill="none" stroke="#f8dc95" stroke-width="5" opacity=".7"/>
        <g fill="#c48b2c" opacity=".6"><circle cx="-40" cy="10" r="3"/><circle cx="-20" cy="-8" r="2.6"/><circle cx="-52" cy="-6" r="2.4"/></g>
      </g>
      <g transform="translate(64,18)">
        <ellipse cx="0" cy="0" rx="30" ry="13" fill="#dfe6ec"/>
        <ellipse cx="0" cy="-2" rx="25" ry="10" fill="#e2ad2a"/>
        <ellipse cx="-6" cy="-5" rx="9" ry="4" fill="#f2c95e" opacity=".85"/>
        <g fill="#c4901c"><circle cx="8" cy="0" r="2.6"/><circle cx="-2" cy="3" r="2.2"/></g>
      </g>
      <g transform="translate(66,48)">
        <ellipse cx="0" cy="0" rx="26" ry="11" fill="#dfe6ec"/>
        <ellipse cx="0" cy="-2" rx="21" ry="8.5" fill="#f2f0e4"/>
        <ellipse cx="-4" cy="-4" rx="8" ry="3.2" fill="#fbfaf2"/>
        <g fill="#3f8f3a"><circle cx="8" cy="-2" r="2.4"/><circle cx="-8" cy="1" r="2.2"/></g>
      </g>
      <g transform="translate(-74,48)">
        <ellipse cx="0" cy="0" rx="24" ry="10" fill="#dfe6ec"/>
        <ellipse cx="0" cy="-2" rx="19" ry="7.6" fill="#b5652a"/>
        <g fill="#e2b06a"><circle cx="-6" cy="-3" r="3.4"/><circle cx="5" cy="0" r="3"/></g>
      </g>
    </g>`);

  /* ネパール高地：ディロ */
  art('dhido', '#2a2f36', '#12161b', `
    ${shadow(158, 176, 112, 12, .34)}
    <g transform="translate(158,120)">
      <ellipse cx="0" cy="38" rx="110" ry="28" fill="#a89a86"/>
      <ellipse cx="0" cy="32" rx="110" ry="28" fill="#dbcfb8"/>
      <ellipse cx="0" cy="32" rx="98" ry="23" fill="#c4b79f"/>
      <g transform="translate(-38,0)">
        <ellipse cx="0" cy="30" rx="44" ry="15" fill="#6b5a3f"/>
        <path d="M-40 28 q6 -48 40 -48 q34 0 40 48 q-40 14 -80 0z" fill="#8a7450"/>
        <path d="M-30 14 q6 -30 30 -30 q10 0 16 8 q-28 6 -30 26z" fill="#a08a63" opacity=".8"/>
        <g fill="#6b5a3f" opacity=".5"><circle cx="-12" cy="8" r="3"/><circle cx="8" cy="0" r="2.6"/><circle cx="14" cy="14" r="2.6"/></g>
      </g>
      <g transform="translate(48,12)">
        <ellipse cx="0" cy="0" rx="32" ry="13" fill="#cbbfa8"/>
        <ellipse cx="0" cy="-2" rx="27" ry="10.5" fill="#2f7a34"/>
        <g fill="#4e9a45">
          <path d="M-16 -6 q10 -10 20 -4 q-10 10 -20 4z"/><path d="M0 -2 q10 -9 18 -3 q-9 9 -18 3z"/>
        </g>
      </g>
      <g transform="translate(46,44)">
        <ellipse cx="0" cy="0" rx="28" ry="11" fill="#cbbfa8"/>
        <ellipse cx="0" cy="-2" rx="23" ry="9" fill="#c98a2e"/>
        <g fill="#e2ad55"><circle cx="-8" cy="-3" r="3.4"/><circle cx="4" cy="0" r="3"/><circle cx="12" cy="-4" r="2.6"/></g>
      </g>
      <g transform="translate(-86,46)">
        <ellipse cx="0" cy="0" rx="18" ry="8" fill="#cbbfa8"/>
        <ellipse cx="0" cy="-1" rx="13" ry="5.4" fill="#e8c24e"/>
      </g>
    </g>
    <g transform="translate(252,52)" opacity=".5">
      <path d="M-46 30 L-18 -16 L2 14 L20 -8 L48 30 Z" fill="#6b7c8e"/>
      <path d="M-18 -16 L-8 1 L-28 1 Z" fill="#e8eef4"/>
      <path d="M20 -8 L28 6 L12 6 Z" fill="#e8eef4"/>
    </g>`);

  /* タイ北部：カオソーイ */
  art('khaosoi', '#2e3320', '#141810', `
    ${shadow(154, 176, 104, 12, .34)}
    ${steam(148, 52, 1)}
    <g transform="translate(154,126)">
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48 z" fill="#e9e3d8"/>
      <ellipse cx="0" cy="-8" rx="80" ry="21" fill="#f7f3ea"/>
      <ellipse cx="0" cy="-8" rx="71" ry="17.5" fill="#c98a1e"/>
      <ellipse cx="0" cy="-9" rx="66" ry="15.5" fill="#dda42e"/>
      <g fill="#e8bb55" opacity=".55"><ellipse cx="-26" cy="-13" rx="22" ry="5"/><ellipse cx="32" cy="-4" rx="15" ry="4"/></g>
      <g stroke="#f2e2a8" stroke-width="3" fill="none" stroke-linecap="round" opacity=".9">
        <path d="M-48 -6 q16 -10 34 -3"/><path d="M-42 0 q18 -9 36 -2"/>
      </g>
      <g transform="translate(6,-18)">
        <g stroke="#e0a13c" stroke-width="3.4" fill="none" stroke-linecap="round">
          <path d="M-30 6 q14 -18 30 -10"/><path d="M-24 0 q16 -16 32 -8"/><path d="M-18 12 q16 -18 34 -10"/>
          <path d="M-34 0 q12 -14 24 -12"/><path d="M-10 4 q16 -14 30 -8"/>
        </g>
        <g stroke="#f2c471" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8">
          <path d="M-28 4 q12 -14 26 -8"/><path d="M-16 10 q14 -14 28 -8"/>
        </g>
      </g>
      <g fill="#8a4a24"><path d="M-30 2 q18 -8 32 0 q-16 8 -32 0z"/></g>
      <g fill="#4e7a2a"><ellipse cx="44" cy="-14" rx="10" ry="4.4" transform="rotate(-18 44 -14)"/><ellipse cx="-56" cy="-4" rx="9" ry="4" transform="rotate(14 -56 -4)"/></g>
      <g fill="#c4331f"><ellipse cx="18" cy="2" rx="9" ry="2.8" transform="rotate(12 18 2)"/></g>
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48" fill="none" stroke="#cfc7b8" stroke-width="2"/>
    </g>
    <g transform="translate(266,150)">
      <path d="M-14 -4 q14 -9 28 0 q-4 15 -14 15 q-10 0 -14 -15z" fill="#6fae3a"/>
      <path d="M-10 -2 q10 -6 20 0 q-3 11 -10 11 q-7 0 -10 -11z" fill="#b8d96a"/>
    </g>`);

  /* 北イタリア：リゾット */
  art('risotto', '#2c3320', '#141a0f', `
    ${shadow(154, 176, 112, 12, .34)}
    <g transform="translate(154,124)">
      <ellipse cx="0" cy="34" rx="108" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="108" ry="28" fill="#fbfdff"/>
      <ellipse cx="0" cy="28" rx="96" ry="23" fill="#eef3f7"/>
      <path d="M-66 24 q8 -30 66 -30 q58 0 66 30 q-66 16 -132 0z" fill="#e0a92e"/>
      <path d="M-60 20 q8 -25 60 -25 q52 0 60 25 q-60 14 -120 0z" fill="#efc243"/>
      <g fill="#f8db7e" opacity=".8">
        <ellipse cx="-24" cy="2" rx="22" ry="7"/><ellipse cx="26" cy="10" rx="16" ry="5.4"/>
      </g>
      <g fill="#d9a41e" opacity=".55">
        <ellipse cx="-42" cy="14" rx="9" ry="3.4"/><ellipse cx="4" cy="16" rx="8" ry="3"/><ellipse cx="44" cy="4" rx="7" ry="2.8"/>
      </g>
      <g fill="#fdfbf0" opacity=".65">
        <rect x="-38" y="6" width="11" height="4.2" rx="2.1" transform="rotate(-16 -32 8)"/>
        <rect x="-4" y="0" width="12" height="4.2" rx="2.1" transform="rotate(10 2 2)"/>
        <rect x="22" y="14" width="11" height="4" rx="2" transform="rotate(-8 27 16)"/>
        <rect x="-20" y="16" width="10" height="4" rx="2" transform="rotate(14 -15 18)"/>
      </g>
      <g stroke="#b5401c" stroke-width="2.4" stroke-linecap="round" fill="none">
        <path d="M-10 -8 q6 -7 12 -4"/><path d="M24 -2 q6 -7 12 -3"/><path d="M-36 -2 q6 -6 11 -3"/>
      </g>
      <g transform="translate(58,-14)">
        <ellipse cx="0" cy="0" rx="17" ry="12" fill="#f6f2e2"/>
        <ellipse cx="-3" cy="-3" rx="7" ry="4" fill="#fdfbf2"/>
        <g stroke="#e0d9c2" stroke-width="1.6" fill="none"><path d="M-10 4 q10 4 20 -2"/></g>
      </g>
      <g fill="#3f8f3a"><ellipse cx="-56" cy="26" rx="9" ry="3.6" transform="rotate(14 -56 26)"/></g>
    </g>`);

  /* フランス・ブルターニュ：ガレット */
  art('galette', '#2a2d38', '#121419', `
    ${shadow(154, 176, 112, 12, .34)}
    <g transform="translate(154,122)">
      <ellipse cx="0" cy="36" rx="108" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="30" rx="108" ry="28" fill="#fbfdff"/>
      <ellipse cx="0" cy="30" rx="96" ry="23" fill="#eef3f7"/>
      <g transform="translate(-10,4)">
        <path d="M-70 24 L-34 -28 L34 -28 L70 24 Z" fill="#7d6247"/>
        <path d="M-64 22 L-30 -24 L30 -24 L64 22 Z" fill="#96795b"/>
        <g fill="#6b5340" opacity=".55">
          <circle cx="-40" cy="10" r="3.4"/><circle cx="-8" cy="16" r="3"/><circle cx="30" cy="8" r="3.2"/>
          <circle cx="12" cy="-12" r="2.6"/><circle cx="-24" cy="-8" r="2.6"/><circle cx="48" cy="16" r="2.4"/>
        </g>
        <path d="M-34 -28 L34 -28 L30 -24 L-30 -24 Z" fill="#a8896a"/>
        <g>
          <path d="M-30 12 q14 -10 30 -6 q-2 10 -14 12 q-14 2 -16 -6z" fill="#f2b8a8"/>
          <path d="M8 6 q14 -10 30 -5 q-2 10 -14 12 q-14 2 -16 -7z" fill="#efaa98"/>
        </g>
        <g>
          <ellipse cx="-2" cy="0" rx="22" ry="15" fill="#fdfbf2"/>
          <ellipse cx="-2" cy="0" rx="11" ry="8.4" fill="#f2b431"/>
          <ellipse cx="-5" cy="-3" rx="4.4" ry="3" fill="#f8d271"/>
        </g>
        <g fill="#f6e5a8" opacity=".9">
          <path d="M-46 4 q12 -6 22 -2 q-10 8 -22 2z"/><path d="M28 -4 q12 -6 22 -2 q-10 8 -22 2z"/>
        </g>
        <g fill="#3f8f3a"><circle cx="20" cy="14" r="2.4"/><circle cx="-38" cy="-4" r="2.2"/></g>
      </g>
      <g transform="translate(78,6)">
        <path d="M-12 26 q-6 -26 0 -34 q2 -8 10 -8 q8 0 10 8 q6 8 0 34 q-10 6 -20 0z" fill="#d9a84f"/>
        <path d="M-9 22 q-4 -22 0 -28" fill="none" stroke="#f0c980" stroke-width="3" opacity=".6"/>
        <ellipse cx="-1" cy="-16" rx="9" ry="4" fill="#f2e2b8" opacity=".8"/>
      </g>
    </g>`);

  /* スペイン・アンダルシア：ガスパチョ */
  art('gazpacho', '#3a2418', '#170e09', `
    ${shadow(150, 176, 100, 12, .34)}
    <g transform="translate(150,128)">
      <path d="M-56 -28 q6 44 56 44 q50 0 56 -44 z" fill="#e8edf2"/>
      <path d="M-56 -28 q6 44 56 44 q50 0 56 -44 z" fill="#f2f6f9"/>
      <ellipse cx="0" cy="-28" rx="56" ry="15" fill="#fbfdff"/>
      <path d="M-52 -26 q6 38 52 38 q46 0 52 -38 z" fill="#c4331f"/>
      <ellipse cx="0" cy="-26" rx="52" ry="13.5" fill="#d6543a"/>
      <ellipse cx="-10" cy="-28" rx="26" ry="7" fill="#e0705a" opacity=".7"/>
      <g fill="#6fae3a"><circle cx="14" cy="-28" r="3.4"/><circle cx="24" cy="-24" r="2.8"/><circle cx="-26" cy="-22" r="2.6"/></g>
      <g fill="#f2e2b8"><circle cx="-2" cy="-22" r="2.6"/><circle cx="30" cy="-30" r="2.2"/></g>
      <path d="M-40 -34 q14 -6 26 -2" stroke="#e8a63c" stroke-width="2.4" fill="none" opacity=".8"/>
      <rect x="-14" y="16" width="28" height="8" rx="3" fill="#dbe2e8"/>
      <ellipse cx="0" cy="26" rx="34" ry="8" fill="#eef3f7"/>
    </g>
    <g transform="translate(252,140)">
      <ellipse cx="0" cy="26" rx="44" ry="11" fill="#000" opacity=".22"/>
      <circle cx="-14" cy="6" r="19" fill="#a82b1a"/>
      <circle cx="-14" cy="3" r="19" fill="#c4331f"/>
      <ellipse cx="-20" cy="-4" rx="7" ry="4" fill="#e0705a" opacity=".8"/>
      <path d="M-14 -16 q-6 -6 0 -8 q6 2 0 8z" fill="#4e9a45"/>
      <ellipse cx="18" cy="14" rx="14" ry="10" fill="#3f8f3a"/>
      <ellipse cx="18" cy="11" rx="14" ry="10" fill="#5fae4a"/>
      <ellipse cx="14" cy="7" rx="5" ry="3" fill="#8fc24a"/>
    </g>
    <g transform="translate(52,50)" opacity=".5">
      <circle cx="0" cy="0" r="14" fill="#f2c14e"/>
      <g stroke="#f2c14e" stroke-width="2.6" stroke-linecap="round"><path d="M0 -22 V-18 M0 18 V22 M-22 0 H-18 M18 0 H22 M-15 -15 l3 3 M15 15 l-3 -3 M15 -15 l-3 3 M-15 15 l3 -3"/></g>
    </g>`);

  /* ペルー高地：チューニョ */
  art('chuno', '#26303a', '#10161d', `
    ${shadow(158, 176, 112, 12, .34)}
    <rect x="0" y="140" width="320" height="60" fill="#8a7a63"/>
    <rect x="0" y="140" width="320" height="8" fill="#a3937a"/>
    <g opacity=".6" fill="#dbe7f0"><ellipse cx="40" cy="152" rx="26" ry="5"/><ellipse cx="280" cy="156" rx="30" ry="5"/><ellipse cx="160" cy="150" rx="20" ry="4"/></g>
    <g transform="translate(160,128)">
      <path d="M-84 20 q10 -14 84 -14 q74 0 84 14 q-84 14 -168 0z" fill="#6b5f4e"/>
      <g fill="#3a3129">
        <ellipse cx="-56" cy="10" rx="16" ry="11" transform="rotate(-12 -56 10)"/>
        <ellipse cx="-24" cy="4" rx="17" ry="12" transform="rotate(8 -24 4)"/>
        <ellipse cx="10" cy="10" rx="16" ry="11" transform="rotate(-6 10 10)"/>
        <ellipse cx="44" cy="2" rx="15" ry="10.5" transform="rotate(14 44 2)"/>
        <ellipse cx="72" cy="12" rx="14" ry="10" transform="rotate(-10 72 12)"/>
        <ellipse cx="-40" cy="20" rx="14" ry="9.6" transform="rotate(6 -40 20)"/>
        <ellipse cx="-6" cy="22" rx="14" ry="9.6" transform="rotate(-14 -6 22)"/>
        <ellipse cx="30" cy="22" rx="13" ry="9" transform="rotate(10 30 22)"/>
      </g>
      <g fill="#5e5348" opacity=".9">
        <ellipse cx="-58" cy="6" rx="7" ry="4" transform="rotate(-12 -58 6)"/>
        <ellipse cx="-26" cy="0" rx="7" ry="4" transform="rotate(8 -26 0)"/>
        <ellipse cx="8" cy="6" rx="6.4" ry="3.6"/>
        <ellipse cx="42" cy="-2" rx="6" ry="3.4"/>
      </g>
      <g fill="#f2f6fa" opacity=".55">
        <ellipse cx="-50" cy="4" rx="4" ry="2"/><ellipse cx="-18" cy="-2" rx="4" ry="2"/><ellipse cx="50" cy="-4" rx="3.6" ry="1.8"/>
      </g>
      <g transform="translate(-96,-6)">
        <ellipse cx="0" cy="14" rx="22" ry="8" fill="#000" opacity=".2"/>
        <ellipse cx="0" cy="6" rx="20" ry="13" fill="#d9b46a"/>
        <ellipse cx="-5" cy="2" rx="8" ry="5" fill="#eccb96"/>
        <g fill="#b5914c" opacity=".7"><circle cx="6" cy="8" r="2.6"/><circle cx="-8" cy="10" r="2.2"/></g>
      </g>
    </g>
    <g transform="translate(250,52)" opacity=".55">
      <path d="M-52 40 L-20 -22 L4 18 L24 -10 L52 40 Z" fill="#5e6e80"/>
      <path d="M-20 -22 L-8 2 L-32 2 Z" fill="#f2f6fa"/>
      <path d="M24 -10 L34 8 L14 8 Z" fill="#f2f6fa"/>
    </g>`);

  /* アメリカ・ルイジアナ：ガンボ */
  art('gumbo', '#2a3222', '#121710', `
    ${shadow(150, 176, 106, 12, .34)}
    ${steam(144, 52, 1)}
    <g transform="translate(150,126)">
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48 z" fill="#eef1f3"/>
      <ellipse cx="0" cy="-8" rx="80" ry="21" fill="#fbfcfd"/>
      <ellipse cx="0" cy="-8" rx="71" ry="17.5" fill="#6b3d1c"/>
      <ellipse cx="0" cy="-9" rx="66" ry="15.5" fill="#864d24"/>
      <g fill="#a36633" opacity=".55"><ellipse cx="-26" cy="-13" rx="22" ry="5"/><ellipse cx="32" cy="-4" rx="15" ry="4"/></g>
      <g>
        <path d="M-50 -14 q-4 -13 9 -15 q13 -2 14 9 q1 9 -8 10 q-12 2 -15 -4z" fill="#f2857a"/>
        <path d="M-48 -16 q2 -8 10 -9" stroke="#fff" stroke-width="2.2" fill="none" opacity=".8"/>
        <path d="M14 -20 q-4 -13 9 -15 q13 -2 14 9 q1 9 -8 10 q-12 2 -15 -4z" fill="#ef7f6f"/>
        <path d="M16 -22 q2 -8 10 -9" stroke="#fff" stroke-width="2.2" fill="none" opacity=".8"/>
      </g>
      <g fill="#4e8f3d">
        <ellipse cx="-16" cy="-4" rx="9" ry="5" transform="rotate(-20 -16 -4)"/>
        <ellipse cx="34" cy="-12" rx="8" ry="4.6" transform="rotate(16 34 -12)"/>
        <ellipse cx="-38" cy="0" rx="8" ry="4.4" transform="rotate(8 -38 0)"/>
      </g>
      <g fill="#6fb054" opacity=".85">
        <circle cx="-16" cy="-4" r="2.6"/><circle cx="34" cy="-12" r="2.4"/><circle cx="-38" cy="0" r="2.2"/>
      </g>
      <g fill="#fbfaf2"><ellipse cx="48" cy="-2" rx="13" ry="7"/><ellipse cx="46" cy="-4" rx="6" ry="3" fill="#fff"/></g>
      <g fill="#c4331f"><circle cx="0" cy="2" r="2.4"/><circle cx="-56" cy="-8" r="2.2"/><circle cx="22" cy="-2" r="2.2"/></g>
      <path d="M-80 -8 q0 48 80 48 q80 0 80 -48" fill="none" stroke="#d3d8dc" stroke-width="2"/>
    </g>
    <g transform="translate(262,142)">
      <ellipse cx="0" cy="22" rx="40" ry="11" fill="#000" opacity=".22"/>
      <ellipse cx="0" cy="16" rx="40" ry="13" fill="#eef3f7"/>
      <path d="M-30 14 q10 -26 30 -26 q20 0 30 26 q-30 10 -60 0z" fill="#fbfaf4"/>
      <g fill="#ece8dc"><ellipse cx="-10" cy="2" rx="8" ry="3.4"/><ellipse cx="8" cy="-4" rx="7" ry="3"/></g>
    </g>`);

  /* ブラジル・アマゾン：アサイー */
  art('acai', '#1d2c1c', '#0d150c', `
    ${shadow(150, 176, 100, 12, .34)}
    <g transform="translate(150,126)">
      <path d="M-70 -10 q0 46 70 46 q70 0 70 -46 z" fill="#5b4330"/>
      <path d="M-70 -10 q0 46 70 46 q70 0 70 -46 z" fill="#6b4f38"/>
      <ellipse cx="0" cy="-10" rx="70" ry="19" fill="#8a6743"/>
      <ellipse cx="0" cy="-10" rx="62" ry="16" fill="#3a1d3f"/>
      <ellipse cx="0" cy="-11" rx="58" ry="14.5" fill="#4e2a55"/>
      <ellipse cx="-14" cy="-14" rx="30" ry="7" fill="#63376b" opacity=".7"/>
      <g fill="#2e1633" opacity=".7"><ellipse cx="26" cy="-6" rx="14" ry="4"/></g>
      <g>
        <path d="M-40 -18 q10 -8 20 -2 q-8 10 -20 2z" fill="#f2c14e"/>
        <path d="M-22 -22 q10 -8 20 -2 q-8 10 -20 2z" fill="#fbd96e"/>
        <path d="M-4 -18 q10 -8 20 -2 q-8 10 -20 2z" fill="#f2c14e"/>
      </g>
      <g fill="#e8dcb4">
        <circle cx="26" cy="-18" r="3"/><circle cx="36" cy="-12" r="2.6"/><circle cx="18" cy="-10" r="2.4"/><circle cx="44" cy="-18" r="2.2"/>
      </g>
      <g fill="#6b2f74"><circle cx="-46" cy="-6" r="4"/><circle cx="-34" cy="-2" r="3.4"/><circle cx="8" cy="-4" r="3.4"/></g>
      <path d="M-70 -10 q0 46 70 46 q70 0 70 -46" fill="none" stroke="#4a3626" stroke-width="2"/>
    </g>
    <g transform="translate(258,72)" opacity=".85">
      <path d="M0 60 L0 6" stroke="#6b5a3f" stroke-width="6" stroke-linecap="round"/>
      <g fill="#2f7a34">
        <path d="M0 8 q-30 -10 -44 -28 q30 2 46 20z"/>
        <path d="M0 8 q30 -10 44 -28 q-30 2 -46 20z"/>
        <path d="M0 4 q-16 -22 -12 -44 q18 16 16 42z"/>
        <path d="M0 4 q16 -22 12 -44 q-18 16 -16 42z"/>
      </g>
      <g fill="#4e2a55"><circle cx="-6" cy="16" r="4"/><circle cx="5" cy="20" r="3.6"/><circle cx="-1" cy="26" r="3.4"/></g>
    </g>
    <g transform="translate(46,152)" opacity=".7">
      <path d="M-30 0 q30 -10 60 0 q-30 8 -60 0z" fill="#3f6b7d"/>
      <path d="M-20 8 q26 -8 52 0 q-26 7 -52 0z" fill="#4e8298"/>
    </g>`);

  /* 韓国・済州島：あわび粥 */
  art('jeonbok', '#1c2f33', '#0c161a', `
    ${shadow(152, 176, 102, 12, .34)}
    ${steam(146, 54, 1)}
    <g transform="translate(152,128)">
      <path d="M-78 -8 q0 46 78 46 q78 0 78 -46 z" fill="#eef1f3"/>
      <ellipse cx="0" cy="-8" rx="78" ry="20" fill="#fbfcfd"/>
      <ellipse cx="0" cy="-8" rx="69" ry="17" fill="#7a8a5a"/>
      <ellipse cx="0" cy="-9" rx="64" ry="15" fill="#93a46b"/>
      <g fill="#a8b87e" opacity=".6"><ellipse cx="-22" cy="-13" rx="20" ry="5"/><ellipse cx="30" cy="-4" rx="14" ry="4"/></g>
      <g fill="#f2f0e2" opacity=".8"><circle cx="-34" cy="-6" r="2.4"/><circle cx="6" cy="-14" r="2.2"/><circle cx="36" cy="-10" r="2.2"/><circle cx="-10" cy="0" r="2"/></g>
      <g transform="translate(6,-16)">
        <ellipse cx="0" cy="0" rx="22" ry="13" fill="#3a3a30"/>
        <ellipse cx="0" cy="-2" rx="19" ry="11" fill="#5e5c4a"/>
        <ellipse cx="-4" cy="-4" rx="9" ry="5" fill="#8a8670" opacity=".8"/>
        <g fill="#2a2a22"><circle cx="-10" cy="2" r="2"/><circle cx="2" cy="4" r="1.8"/><circle cx="11" cy="0" r="1.8"/></g>
      </g>
      <g fill="#2f6b4a"><ellipse cx="-44" cy="-14" rx="10" ry="4" transform="rotate(-18 -44 -14)"/><ellipse cx="42" cy="-16" rx="9" ry="3.4" transform="rotate(16 42 -16)"/></g>
      <path d="M-78 -8 q0 46 78 46 q78 0 78 -46" fill="none" stroke="#d3d8dc" stroke-width="2"/>
    </g>`);

  /* ベトナム・ホイアン：カオラウ */
  art('caolau', '#2a3330', '#121816', `
    ${shadow(152, 176, 102, 12, .34)}
    <g transform="translate(152,126)">
      <path d="M-78 -8 q0 46 78 46 q78 0 78 -46 z" fill="#e8ece6"/>
      <ellipse cx="0" cy="-8" rx="78" ry="20" fill="#f6f8f3"/>
      <ellipse cx="0" cy="-8" rx="69" ry="17" fill="#8a6a3a"/>
      <ellipse cx="0" cy="-9" rx="64" ry="15" fill="#a3814a"/>
      <g stroke="#d9b87e" stroke-width="5" fill="none" stroke-linecap="round">
        <path d="M-44 -8 q18 -14 38 -6"/><path d="M-38 0 q20 -13 40 -5"/><path d="M-30 -16 q20 -10 38 -4"/>
      </g>
      <g stroke="#efd6a4" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".8">
        <path d="M-40 -10 q16 -10 32 -5"/><path d="M-32 -2 q18 -10 34 -4"/>
      </g>
      <g>
        <path d="M8 -20 q20 -8 34 2 q-16 9 -34 -2z" fill="#a8523f"/>
        <path d="M12 -18 q16 -5 26 1" stroke="#d9836a" stroke-width="2.4" fill="none"/>
        <path d="M0 -8 q20 -7 34 3 q-16 8 -34 -3z" fill="#96473a"/>
      </g>
      <g fill="#3f8f3a"><path d="M44 -12 q12 -12 22 -4 q-10 12 -22 4z"/><path d="M-58 -6 q-12 -10 -22 -2 q10 10 22 2z"/></g>
      <g fill="#e8c98a"><path d="M-16 -26 L6 -34 L2 -22 Z"/><path d="M22 -24 L42 -30 L38 -18 Z"/></g>
      <path d="M-78 -8 q0 46 78 46 q78 0 78 -46" fill="none" stroke="#cdd2c9" stroke-width="2"/>
    </g>
    <g transform="translate(258,154) rotate(-18)" stroke="#5e4630" stroke-width="4.5" stroke-linecap="round">
      <path d="M0 0 L30 -52"/><path d="M9 3 L39 -49"/>
    </g>`);

  /* モンゴル：ホルホグ */
  art('khorkhog', '#2f2a20', '#141210', `
    ${shadow(152, 178, 96, 11, .34)}
    ${steam(152, 42, 1)}
    <g transform="translate(152,128)">
      <path d="M-58 -20 q6 54 58 54 q52 0 58 -54 z" fill="#5e646b"/>
      <path d="M-56 -20 q6 50 56 50 q50 0 56 -50 z" fill="#7a828b"/>
      <ellipse cx="0" cy="-20" rx="58" ry="16" fill="#98a1ab"/>
      <ellipse cx="0" cy="-20" rx="50" ry="13" fill="#3a3f45"/>
      <g fill="#6b4a2c">
        <ellipse cx="-24" cy="-22" rx="16" ry="9" transform="rotate(-10 -24 -22)"/>
        <ellipse cx="8" cy="-26" rx="17" ry="9.6" transform="rotate(8 8 -26)"/>
        <ellipse cx="30" cy="-18" rx="14" ry="8" transform="rotate(-6 30 -18)"/>
      </g>
      <g fill="#8f6438" opacity=".85">
        <ellipse cx="-26" cy="-25" rx="8" ry="4"/><ellipse cx="6" cy="-29" rx="8" ry="4"/>
      </g>
      <g fill="#8a8f96">
        <circle cx="-8" cy="-18" r="7"/><circle cx="22" cy="-26" r="6"/><circle cx="-38" cy="-16" r="5.4"/>
      </g>
      <g fill="#c96a3a" opacity=".8"><circle cx="-8" cy="-18" r="4"/><circle cx="22" cy="-26" r="3.4"/></g>
      <g fill="#e8b93c"><ellipse cx="-14" cy="-14" rx="8" ry="5"/><ellipse cx="36" cy="-26" rx="7" ry="4.4"/></g>
      <rect x="-64" y="-14" width="14" height="8" rx="4" fill="#7a828b"/>
      <rect x="50" y="-14" width="14" height="8" rx="4" fill="#7a828b"/>
    </g>
    <g transform="translate(258,160)">
      <g fill="#7a818a"><circle cx="0" cy="0" r="11"/><circle cx="20" cy="6" r="9"/><circle cx="-16" cy="8" r="8"/></g>
      <g fill="#c96a3a" opacity=".55"><circle cx="0" cy="0" r="6"/><circle cx="20" cy="6" r="5"/></g>
    </g>`);

  /* トルコ・黒海：ハムシ */
  art('hamsi', '#1f3038', '#0e171c', `
    ${shadow(154, 176, 110, 12, .34)}
    <g transform="translate(154,124)">
      <ellipse cx="0" cy="34" rx="106" ry="27" fill="#b5a88e"/>
      <ellipse cx="0" cy="28" rx="106" ry="27" fill="#e0d5bb"/>
      <ellipse cx="0" cy="28" rx="94" ry="22" fill="#cfc2a4"/>
      <g>
        <g fill="#9aa2a8" stroke="#5e666c" stroke-width="1.4">
          <path d="M-64 6 q22 -12 44 0 q-22 12 -44 0z"/><path d="M-40 -6 q22 -12 44 0 q-22 12 -44 0z"/>
          <path d="M-16 8 q22 -12 44 0 q-22 12 -44 0z"/><path d="M8 -4 q22 -12 44 0 q-22 12 -44 0z"/>
          <path d="M-52 20 q22 -12 44 0 q-22 12 -44 0z"/><path d="M-4 22 q22 -12 44 0 q-22 12 -44 0z"/>
        </g>
        <g fill="#5e666c">
          <path d="M-64 6 q-10 -7 -13 -11 q8 -2 13 -4z"/><path d="M-40 -6 q-10 -7 -13 -11 q8 -2 13 -4z"/>
          <path d="M-16 8 q-10 -7 -13 -11 q8 -2 13 -4z"/><path d="M8 -4 q-10 -7 -13 -11 q8 -2 13 -4z"/>
          <path d="M-52 20 q-10 -7 -13 -11 q8 -2 13 -4z"/><path d="M-4 22 q-10 -7 -13 -11 q8 -2 13 -4z"/>
        </g>
        <g fill="#dbe0e4" opacity=".85">
          <path d="M-60 4 q18 -8 36 0 q-18 6 -36 0z"/><path d="M-36 -8 q18 -8 36 0 q-18 6 -36 0z"/>
          <path d="M-12 6 q18 -8 36 0 q-18 6 -36 0z"/><path d="M12 -6 q18 -8 36 0 q-18 6 -36 0z"/>
        </g>
        <g fill="#e8c98a" opacity=".6">
          <circle cx="-44" cy="8" r="2.4"/><circle cx="-20" cy="-4" r="2.2"/><circle cx="4" cy="10" r="2.2"/><circle cx="28" cy="-2" r="2"/>
        </g>
        <g fill="#3a4147"><circle cx="-62" cy="5" r="2"/><circle cx="-38" cy="-7" r="2"/><circle cx="-14" cy="7" r="2"/><circle cx="10" cy="-5" r="1.8"/><circle cx="-50" cy="19" r="1.8"/><circle cx="-2" cy="21" r="1.8"/></g>
      </g>
      <g transform="translate(74,26)">
        <circle cx="0" cy="0" r="14" fill="#f2e05a"/><circle cx="0" cy="0" r="10.5" fill="#fbf094"/>
        <g stroke="#e8d54a" stroke-width="1.6"><path d="M0 -10 V10 M-10 0 H10 M-7 -7 L7 7 M7 -7 L-7 7"/></g>
      </g>
      <g fill="#3f8f3a"><ellipse cx="-74" cy="30" rx="10" ry="4" transform="rotate(14 -74 30)"/></g>
    </g>`);

  /* モロッコ：イワシの炭火焼き */
  art('sardine', '#33281c', '#16120b', `
    ${shadow(154, 178, 112, 12, .34)}
    <g transform="translate(154,132)">
      <path d="M-100 20 q0 16 100 16 q100 0 100 -16 l-6 16 q-16 10 -94 10 q-78 0 -94 -10z" fill="#3a3028"/>
      <g fill="#e05a2c" opacity=".75"><ellipse cx="-50" cy="26" rx="16" ry="5.4"/><ellipse cx="0" cy="30" rx="18" ry="5.6"/><ellipse cx="52" cy="26" rx="15" ry="5"/></g>
      <g stroke="#7a7168" stroke-width="4" stroke-linecap="round">
        <path d="M-100 8 L100 8"/><path d="M-100 18 L100 18"/>
      </g>
      <g>
        <g fill="#9aa6ad">
          <path d="M-72 -6 q26 -14 52 0 q-26 14 -52 0z"/>
          <path d="M-32 -18 q26 -14 52 0 q-26 14 -52 0z"/>
          <path d="M-16 4 q26 -14 52 0 q-26 14 -52 0z"/>
          <path d="M20 -10 q26 -13 50 0 q-25 13 -50 0z"/>
        </g>
        <g fill="#c4ced4" opacity=".9">
          <path d="M-68 -8 q22 -9 44 0 q-22 7 -44 0z"/><path d="M-28 -20 q22 -9 44 0 q-22 7 -44 0z"/>
          <path d="M-12 2 q22 -9 44 0 q-22 7 -44 0z"/><path d="M24 -12 q21 -8 42 0 q-21 7 -42 0z"/>
        </g>
        <g fill="#8a5a2c" opacity=".55">
          <ellipse cx="-50" cy="-5" rx="12" ry="3.4"/><ellipse cx="-10" cy="-17" rx="12" ry="3.4"/><ellipse cx="6" cy="5" rx="11" ry="3"/>
        </g>
        <g fill="#2f353a"><circle cx="-70" cy="-6" r="2.2"/><circle cx="-30" cy="-18" r="2.2"/><circle cx="-14" cy="4" r="2.2"/><circle cx="22" cy="-10" r="2"/></g>
      </g>
      <g transform="translate(-4,-42)">
        <circle cx="0" cy="0" r="13" fill="#f2e05a"/><circle cx="0" cy="0" r="10" fill="#fbf094"/>
        <g stroke="#e8d54a" stroke-width="1.6"><path d="M0 -10 V10 M-10 0 H10"/></g>
      </g>
      <g fill="#c4331f"><circle cx="62" cy="-16" r="3"/><circle cx="-66" cy="-22" r="2.6"/></g>
    </g>`);

  /* エチオピア：コーヒーセレモニー */
  art('buna', '#2e2018', '#140d09', `
    ${shadow(146, 178, 92, 11, .34)}
    ${steam(140, 44, 1)}
    <g transform="translate(146,128)">
      <path d="M-24 34 q24 10 48 0 l-6 12 q-18 6 -36 0z" fill="#4a2f22"/>
      <path d="M-30 26 q0 -34 30 -34 q30 0 30 34 q-30 12 -60 0z" fill="#3a241a"/>
      <path d="M-26 22 q0 -28 26 -28 q26 0 26 28 q-26 10 -52 0z" fill="#5e3a28"/>
      <path d="M-14 -8 q0 -22 14 -22 q14 0 14 22" fill="none" stroke="#3a241a" stroke-width="7"/>
      <path d="M0 -30 q-4 -10 4 -14 q4 6 -4 14z" fill="#3a241a"/>
      <path d="M26 2 q22 -4 22 14 q0 16 -20 16" fill="none" stroke="#3a241a" stroke-width="7" stroke-linecap="round"/>
      <path d="M-26 6 q-18 -2 -20 10" fill="none" stroke="#3a241a" stroke-width="7" stroke-linecap="round"/>
      <g fill="#8a5a3c" opacity=".7"><ellipse cx="-8" cy="6" rx="10" ry="16"/></g>
    </g>
    <g transform="translate(252,150)">
      <g>
        <path d="M-40 0 q0 -14 14 -14 q14 0 14 14 q-14 6 -28 0z" fill="#f2f6f8"/>
        <ellipse cx="-26" cy="-12" rx="14" ry="5" fill="#4a2a18"/>
        <path d="M-4 4 q0 -14 14 -14 q14 0 14 14 q-14 6 -28 0z" fill="#f8fbfc"/>
        <ellipse cx="10" cy="-8" rx="14" ry="5" fill="#5e3620"/>
        <path d="M28 -2 q0 -12 12 -12 q12 0 12 12 q-12 5 -24 0z" fill="#f2f6f8"/>
        <ellipse cx="40" cy="-13" rx="12" ry="4.4" fill="#4a2a18"/>
      </g>
      <ellipse cx="0" cy="12" rx="52" ry="9" fill="#8a6a45" opacity=".8"/>
    </g>
    <g transform="translate(56,148)">
      <ellipse cx="0" cy="6" rx="26" ry="8" fill="#000" opacity=".2"/>
      <path d="M-20 4 q4 -16 20 -16 q16 0 20 16 q-20 8 -40 0z" fill="#8a6a45"/>
      <g fill="#5e3a22"><circle cx="-8" cy="-4" r="4"/><circle cx="3" cy="-7" r="3.6"/><circle cx="11" cy="-2" r="3.4"/><circle cx="-1" cy="0" r="3.4"/></g>
      <g fill="#7d4f2e" opacity=".8"><circle cx="-8" cy="-5" r="1.8"/><circle cx="3" cy="-8" r="1.6"/></g>
    </g>`);

  /* ドイツ南部：ケーゼシュペッツレ */
  art('spatzle', '#2e2f1f', '#141610', `
    ${shadow(152, 176, 104, 12, .34)}
    ${steam(148, 52, 1)}
    <g transform="translate(152,128)">
      <path d="M-80 -6 q0 44 80 44 q80 0 80 -44 z" fill="#c4562f"/>
      <ellipse cx="0" cy="-6" rx="80" ry="20" fill="#dd6a3c"/>
      <ellipse cx="0" cy="-6" rx="71" ry="17" fill="#f2ead6"/>
      <g fill="#e8d9b4">
        <ellipse cx="-42" cy="-10" rx="15" ry="7" transform="rotate(-16 -42 -10)"/>
        <ellipse cx="-14" cy="-14" rx="16" ry="7.4" transform="rotate(10 -14 -14)"/>
        <ellipse cx="16" cy="-9" rx="15" ry="7" transform="rotate(-8 16 -9)"/>
        <ellipse cx="42" cy="-13" rx="13" ry="6.4" transform="rotate(14 42 -13)"/>
        <ellipse cx="-28" cy="-2" rx="14" ry="6.6" transform="rotate(6 -28 -2)"/>
        <ellipse cx="4" cy="0" rx="14" ry="6.6" transform="rotate(-12 4 0)"/>
        <ellipse cx="32" cy="2" rx="12" ry="6" transform="rotate(8 32 2)"/>
      </g>
      <g fill="#f2c14e" opacity=".9">
        <path d="M-54 -6 q26 -12 50 -2 q26 10 50 -4 q-8 16 -30 14 q-24 -2 -40 -4 q-18 -2 -30 -4z"/>
      </g>
      <g fill="#fbd96e" opacity=".8"><ellipse cx="-20" cy="-6" rx="16" ry="4"/><ellipse cx="30" cy="-2" rx="12" ry="3.4"/></g>
      <g fill="#a8622c">
        <ellipse cx="-34" cy="-18" rx="11" ry="3.4" transform="rotate(-14 -34 -18)"/>
        <ellipse cx="6" cy="-22" rx="12" ry="3.4" transform="rotate(8 6 -22)"/>
        <ellipse cx="38" cy="-20" rx="10" ry="3" transform="rotate(-10 38 -20)"/>
      </g>
      <g fill="#3f8f3a"><ellipse cx="52" cy="-16" rx="9" ry="3.4" transform="rotate(-20 52 -16)"/><ellipse cx="-56" cy="-14" rx="8" ry="3" transform="rotate(16 -56 -14)"/></g>
      <path d="M-80 -6 q0 44 80 44 q80 0 80 -44" fill="none" stroke="#a8461f" stroke-width="2"/>
    </g>`);

  /* イギリス・スコットランド：ハギス */
  art('haggis', '#26303a', '#10161d', `
    ${shadow(154, 176, 112, 12, .34)}
    <g transform="translate(154,124)">
      <ellipse cx="0" cy="34" rx="108" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="108" ry="28" fill="#fbfdff"/>
      <ellipse cx="0" cy="28" rx="96" ry="23" fill="#eef3f7"/>
      <g transform="translate(-8,-2)">
        <ellipse cx="0" cy="22" rx="48" ry="16" fill="#5e4130"/>
        <path d="M-46 20 q-4 -40 46 -40 q50 0 46 40 q-46 14 -92 0z" fill="#7a5540"/>
        <path d="M-40 14 q-4 -32 40 -32 q20 0 30 8 q-46 4 -50 28z" fill="#96694e" opacity=".7"/>
        <g fill="#4a3226" opacity=".6"><circle cx="-16" cy="4" r="3.4"/><circle cx="10" cy="-4" r="3"/><circle cx="24" cy="8" r="3"/><circle cx="-2" cy="12" r="2.8"/></g>
        <g stroke="#5e4130" stroke-width="2.2" fill="none"><path d="M-30 -6 q30 -10 58 2"/></g>
      </g>
      <g transform="translate(62,22)">
        <path d="M-26 12 q4 -22 26 -22 q22 0 26 22 q-26 8 -52 0z" fill="#d9a04a"/>
        <path d="M-20 8 q4 -16 20 -16 q16 0 20 16 q-20 6 -40 0z" fill="#efc06a"/>
        <g fill="#c98a2e" opacity=".6"><circle cx="-6" cy="0" r="2.6"/><circle cx="6" cy="4" r="2.4"/></g>
      </g>
      <g transform="translate(-66,26)">
        <path d="M-24 10 q4 -20 24 -20 q20 0 24 20 q-24 8 -48 0z" fill="#e8ddc4"/>
        <path d="M-18 6 q4 -14 18 -14 q14 0 18 14 q-18 6 -36 0z" fill="#f6efdc"/>
      </g>
      <g stroke="#8a3f4a" stroke-width="3" fill="none" opacity=".7"><path d="M-30 44 q30 -8 58 2"/></g>
    </g>`);

  /* スイス・レマン湖：パーチのフライ */
  art('perche', '#1e2c36', '#0d151b', `
    ${shadow(154, 176, 110, 12, .34)}
    <g transform="translate(154,122)">
      <ellipse cx="0" cy="36" rx="108" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="30" rx="108" ry="28" fill="#fbfdff"/>
      <ellipse cx="0" cy="30" rx="96" ry="23" fill="#eef3f7"/>
      <g transform="translate(-16,2)">
        <g fill="#c98a2e">
          <path d="M-52 4 q18 -16 40 -8 q-14 16 -40 8z"/>
          <path d="M-28 -8 q18 -16 40 -8 q-14 16 -40 8z"/>
          <path d="M-14 12 q18 -16 40 -8 q-14 16 -40 8z"/>
          <path d="M6 0 q18 -15 38 -8 q-13 15 -38 8z"/>
        </g>
        <g fill="#e8ab48">
          <path d="M-48 2 q15 -12 32 -6 q-11 12 -32 6z"/>
          <path d="M-24 -10 q15 -12 32 -6 q-11 12 -32 6z"/>
          <path d="M-10 10 q15 -12 32 -6 q-11 12 -32 6z"/>
        </g>
        <g fill="#f2c96e" opacity=".8">
          <ellipse cx="-38" cy="-2" rx="9" ry="3.4" transform="rotate(-20 -38 -2)"/>
          <ellipse cx="-14" cy="-14" rx="9" ry="3.4" transform="rotate(-20 -14 -14)"/>
        </g>
      </g>
      <g transform="translate(66,16)">
        <circle cx="0" cy="0" r="14" fill="#f2e05a"/><circle cx="0" cy="0" r="10.5" fill="#fbf094"/>
        <g stroke="#e8d54a" stroke-width="1.6"><path d="M0 -10 V10 M-10 0 H10 M-7 -7 L7 7 M7 -7 L-7 7"/></g>
      </g>
      <g transform="translate(60,44)">
        <ellipse cx="0" cy="0" rx="22" ry="9" fill="#e4ebf0"/>
        <ellipse cx="0" cy="-2" rx="17" ry="7" fill="#f6f2e4"/>
        <g fill="#3f8f3a"><circle cx="-5" cy="-3" r="2"/><circle cx="6" cy="-1" r="1.8"/></g>
      </g>
      <g transform="translate(-70,34)">
        <ellipse cx="0" cy="8" rx="26" ry="9" fill="#e4ebf0"/>
        <g fill="#f0d98a"><ellipse cx="-8" cy="0" rx="12" ry="7"/><ellipse cx="8" cy="4" rx="11" ry="6.4"/></g>
        <g fill="#f8ecb8"><ellipse cx="-10" cy="-2" rx="5" ry="2.6"/></g>
      </g>
    </g>`);

  /* ウクライナ・カルパティア：バノシュ */
  art('banosh', '#2a3020', '#121610', `
    ${shadow(150, 176, 100, 12, .34)}
    ${steam(146, 52, 1)}
    <g transform="translate(150,128)">
      <path d="M-76 -6 q0 44 76 44 q76 0 76 -44 z" fill="#3a2f26"/>
      <ellipse cx="0" cy="-6" rx="76" ry="19" fill="#5e4c3c"/>
      <ellipse cx="0" cy="-6" rx="67" ry="16" fill="#e8c24e"/>
      <ellipse cx="0" cy="-7" rx="62" ry="14.5" fill="#f2d670"/>
      <g fill="#fbe89c" opacity=".7"><ellipse cx="-20" cy="-11" rx="20" ry="5"/><ellipse cx="28" cy="-4" rx="14" ry="4"/></g>
      <g fill="#fbfaf2">
        <ellipse cx="-16" cy="-14" rx="16" ry="7"/><ellipse cx="14" cy="-10" rx="13" ry="6"/>
      </g>
      <g fill="#eae6d8"><ellipse cx="-18" cy="-16" rx="8" ry="3"/></g>
      <g fill="#7a5a3a">
        <ellipse cx="-38" cy="-6" rx="9" ry="6"/><ellipse cx="34" cy="-14" rx="8" ry="5.4"/><ellipse cx="6" cy="-2" rx="8" ry="5"/>
      </g>
      <g fill="#a37e52" opacity=".85"><ellipse cx="-38" cy="-8" rx="5" ry="2.6"/><ellipse cx="34" cy="-16" rx="4.4" ry="2.4"/></g>
      <g fill="#c4553a"><ellipse cx="-50" cy="-12" rx="9" ry="3.4" transform="rotate(-14 -50 -12)"/><ellipse cx="46" cy="-4" rx="8" ry="3" transform="rotate(12 46 -4)"/></g>
      <g fill="#3f8f3a"><circle cx="-6" cy="-18" r="2.4"/><circle cx="22" cy="-16" r="2.2"/></g>
      <path d="M-76 -6 q0 44 76 44 q76 0 76 -44" fill="none" stroke="#2a2019" stroke-width="2"/>
    </g>`);

  /* ノルウェー・北極圏：トナカイ肉の煮込み */
  art('finnbiff', '#20293a', '#0e121c', `
    ${shadow(150, 176, 102, 12, .34)}
    ${steam(146, 52, 1)}
    <g transform="translate(150,128)">
      <path d="M-78 -6 q0 44 78 44 q78 0 78 -44 z" fill="#eef1f3"/>
      <ellipse cx="0" cy="-6" rx="78" ry="20" fill="#fbfcfd"/>
      <ellipse cx="0" cy="-6" rx="69" ry="17" fill="#5e3a24"/>
      <ellipse cx="0" cy="-7" rx="64" ry="15" fill="#7a4c2c"/>
      <g fill="#a8703c" opacity=".55"><ellipse cx="-22" cy="-11" rx="20" ry="5"/><ellipse cx="30" cy="-3" rx="14" ry="4"/></g>
      <g fill="#42281a">
        <ellipse cx="-40" cy="-10" rx="14" ry="5" transform="rotate(-16 -40 -10)"/>
        <ellipse cx="-10" cy="-14" rx="15" ry="5.4" transform="rotate(10 -10 -14)"/>
        <ellipse cx="20" cy="-8" rx="14" ry="5" transform="rotate(-8 20 -8)"/>
        <ellipse cx="-26" cy="-2" rx="13" ry="4.6" transform="rotate(6 -26 -2)"/>
        <ellipse cx="8" cy="0" rx="13" ry="4.6" transform="rotate(-12 8 0)"/>
      </g>
      <g fill="#6b6152"><ellipse cx="38" cy="-16" rx="9" ry="5.4"/><ellipse cx="-50" cy="-4" rx="8" ry="5"/></g>
      <g fill="#8a7f6c" opacity=".8"><ellipse cx="38" cy="-18" rx="5" ry="2.4"/></g>
      <g fill="#c4331f"><circle cx="-4" cy="-20" r="3.4"/><circle cx="26" cy="-18" r="3"/><circle cx="46" cy="-6" r="2.8"/><circle cx="-34" cy="-18" r="2.8"/></g>
      <g fill="#e0705a" opacity=".7"><circle cx="-5" cy="-21" r="1.4"/><circle cx="25" cy="-19" r="1.2"/></g>
      <path d="M-78 -6 q0 44 78 44 q78 0 78 -44" fill="none" stroke="#d3d8dc" stroke-width="2"/>
    </g>
    <g transform="translate(266,146)">
      <ellipse cx="0" cy="18" rx="26" ry="8" fill="#000" opacity=".2"/>
      <ellipse cx="0" cy="10" rx="26" ry="10" fill="#e8eef4"/>
      <g fill="#a82b3a"><circle cx="-9" cy="4" r="6"/><circle cx="2" cy="8" r="5.6"/><circle cx="11" cy="2" r="5.2"/><circle cx="-2" cy="-2" r="5"/></g>
      <g fill="#c94a58" opacity=".85"><circle cx="-10" cy="2" r="2.4"/><circle cx="1" cy="6" r="2.2"/></g>
      <g stroke="#3f8f3a" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M6 -6 q6 -8 12 -6"/></g>
    </g>`);

  /* メキシコ・ユカタン：コチニータ・ピビル */
  art('pibil', '#2a2f1d', '#12150e', `
    ${shadow(152, 176, 108, 12, .34)}
    <g transform="translate(152,124)">
      <ellipse cx="0" cy="34" rx="104" ry="27" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="104" ry="27" fill="#f7fafc"/>
      <g transform="translate(-6,0)">
        <path d="M-72 22 q-8 -30 20 -36 q52 -12 96 2 q26 8 16 32 q-66 16 -132 2z" fill="#2f7a34"/>
        <path d="M-66 18 q-6 -24 18 -29 q48 -10 88 2 q22 6 13 25 q-60 14 -119 2z" fill="#4e9a45"/>
        <g stroke="#3f8f3a" stroke-width="2" opacity=".7"><path d="M-60 4 q60 -14 118 2"/></g>
        <g transform="translate(-4,0)">
          <path d="M-46 10 q18 -16 40 -10 q-14 16 -40 10z" fill="#a8391c"/>
          <path d="M-14 2 q20 -16 42 -9 q-16 17 -42 9z" fill="#bd4522"/>
          <path d="M-32 18 q20 -14 42 -7 q-16 15 -42 7z" fill="#96301a"/>
          <path d="M6 14 q18 -13 38 -6 q-14 14 -38 6z" fill="#b03e1e"/>
          <g fill="#d96a3c" opacity=".7"><ellipse cx="-30" cy="4" rx="9" ry="3"/><ellipse cx="6" cy="-2" rx="8" ry="2.8"/></g>
        </g>
        <g fill="#c4448a">
          <path d="M20 -6 q22 -8 40 -2 q-20 8 -40 2z"/><path d="M-52 -4 q20 -7 36 -1 q-18 7 -36 1z"/>
        </g>
      </g>
      <g transform="translate(76,36)">
        <path d="M-14 -4 q14 -9 28 0 q-4 15 -14 15 q-10 0 -14 -15z" fill="#6fae3a"/>
        <path d="M-10 -2 q10 -6 20 0 q-3 11 -10 11 q-7 0 -10 -11z" fill="#b8d96a"/>
      </g>
      <g transform="translate(-74,38)">
        <ellipse cx="0" cy="0" rx="22" ry="9" fill="#e6ebf0"/>
        <ellipse cx="0" cy="-2" rx="17" ry="7" fill="#c4331f"/>
        <ellipse cx="-4" cy="-4" rx="6" ry="2.4" fill="#e0705a"/>
      </g>
    </g>`);

  /* ニュージーランド：ラムのロースト */
  art('lamb', '#2c3320', '#131a0f', `
    ${shadow(152, 176, 110, 12, .34)}
    <g transform="translate(152,122)">
      <ellipse cx="0" cy="36" rx="106" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="30" rx="106" ry="28" fill="#fbfdff"/>
      <ellipse cx="0" cy="30" rx="94" ry="23" fill="#eef3f7"/>
      <g transform="translate(-14,0)">
        <path d="M-46 16 q-6 -34 26 -40 q34 -6 46 14 q10 18 -10 28 q-34 10 -62 -2z" fill="#7d3a20"/>
        <path d="M-40 12 q-6 -28 22 -34 q30 -5 40 12 q8 15 -9 23 q-30 9 -53 -1z" fill="#9e5230"/>
        <g fill="#b56b42" opacity=".8"><ellipse cx="-14" cy="-8" rx="16" ry="7"/><ellipse cx="12" cy="0" rx="12" ry="5.4"/></g>
        <g stroke="#5e2a14" stroke-width="2.4" fill="none" opacity=".6"><path d="M-30 6 q30 -10 52 2"/></g>
        <rect x="26" y="-2" width="34" height="9" rx="4.5" fill="#efe4d0" transform="rotate(-12 43 2)"/>
        <rect x="24" y="8" width="30" height="8" rx="4" fill="#e6dbc6" transform="rotate(-6 39 12)"/>
      </g>
      <g transform="translate(60,32)">
        <g fill="#e8b950"><ellipse cx="-10" cy="0" rx="14" ry="9"/><ellipse cx="10" cy="4" rx="13" ry="8"/></g>
        <g fill="#f6d27e"><ellipse cx="-12" cy="-3" rx="6" ry="3.4"/><ellipse cx="8" cy="1" rx="5.4" ry="3"/></g>
      </g>
      <g transform="translate(-66,34)">
        <g fill="#e2913c"><ellipse cx="-8" cy="0" rx="13" ry="9"/><ellipse cx="9" cy="3" rx="12" ry="8"/></g>
        <g fill="#f2b562"><ellipse cx="-10" cy="-3" rx="6" ry="3"/></g>
      </g>
      <g fill="#3f8f3a">
        <path d="M18 -18 q12 -14 22 -6 q-10 14 -22 6z"/>
        <g stroke="#2f7a34" stroke-width="1.6" fill="none"><path d="M22 -18 q8 -6 14 -4"/></g>
      </g>
      <g fill="#6fae3a"><ellipse cx="4" cy="46" rx="14" ry="6"/><ellipse cx="2" cy="44" rx="7" ry="3" fill="#9ed166"/></g>
    </g>`);

  /* インドネシア東部：パペダ */
  art('papeda', '#1d3028', '#0c1612', `
    ${shadow(152, 176, 108, 12, .34)}
    <g transform="translate(152,124)">
      <ellipse cx="0" cy="34" rx="104" ry="27" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="104" ry="27" fill="#f7fafc"/>
      <ellipse cx="0" cy="28" rx="92" ry="22" fill="#e8edf2"/>
      <g transform="translate(-40,2)">
        <ellipse cx="0" cy="24" rx="42" ry="14" fill="#dfe6ec"/>
        <path d="M-36 22 q-6 -40 36 -40 q42 0 36 40 q-36 12 -72 0z" fill="#f2f6f2" opacity=".92"/>
        <path d="M-26 8 q-2 -22 26 -22 q10 0 16 4 q-32 4 -34 22z" fill="#fbfdfb" opacity=".9"/>
        <g stroke="#dfe8e2" stroke-width="2" fill="none"><path d="M-30 14 q30 10 60 -2"/></g>
      </g>
      <g transform="translate(48,8)">
        <ellipse cx="0" cy="22" rx="46" ry="16" fill="#dfe6ec"/>
        <ellipse cx="0" cy="19" rx="46" ry="16" fill="#f7fafc"/>
        <ellipse cx="0" cy="18" rx="38" ry="12.5" fill="#d9a41e"/>
        <ellipse cx="0" cy="17" rx="34" ry="11" fill="#e8b93c"/>
        <g>
          <path d="M-22 14 q18 -12 36 -4 q-14 14 -36 4z" fill="#b5b9bd"/>
          <g stroke="#dbe0e4" stroke-width="2.2" fill="none"><path d="M-14 12 q14 -6 26 -2"/></g>
          <circle cx="-19" cy="12" r="2" fill="#3a4147"/>
        </g>
        <g fill="#3f8f3a"><ellipse cx="22" cy="12" rx="9" ry="3.6" transform="rotate(-18 22 12)"/></g>
        <g fill="#c4331f"><circle cx="-4" cy="22" r="2.4"/><circle cx="16" cy="22" r="2.2"/></g>
      </g>
      <g transform="translate(-4,50)">
        <g stroke="#7a5a3a" stroke-width="5" stroke-linecap="round"><path d="M-18 0 L18 -6"/></g>
        <path d="M18 -6 q10 -4 14 2 q-8 6 -16 2z" fill="#8a6a45"/>
      </g>
    </g>`);

  /* フィリピン・ビコール：ビコール・エクスプレス */
  art('bicol', '#2a3320', '#121810', `
    ${shadow(150, 176, 100, 12, .34)}
    ${steam(146, 52, 1)}
    <g transform="translate(150,128)">
      <path d="M-76 -6 q0 44 76 44 q76 0 76 -44 z" fill="#eef1f3"/>
      <ellipse cx="0" cy="-6" rx="76" ry="19" fill="#fbfcfd"/>
      <ellipse cx="0" cy="-6" rx="67" ry="16" fill="#e8e2d0"/>
      <ellipse cx="0" cy="-7" rx="62" ry="14.5" fill="#f6f2e4"/>
      <g fill="#fbfaf2" opacity=".8"><ellipse cx="-20" cy="-11" rx="20" ry="5"/></g>
      <g fill="#b5763a">
        <rect x="-44" y="-16" width="24" height="12" rx="5" transform="rotate(-12 -32 -10)"/>
        <rect x="-10" y="-19" width="25" height="12" rx="5" transform="rotate(8 2 -13)"/>
        <rect x="22" y="-13" width="22" height="11" rx="5" transform="rotate(-6 33 -8)"/>
      </g>
      <g fill="#d99a58" opacity=".85">
        <rect x="-40" y="-13" width="14" height="4.6" rx="2.3" transform="rotate(-12 -33 -11)"/>
        <rect x="-6" y="-16" width="14" height="4.6" rx="2.3" transform="rotate(8 1 -14)"/>
      </g>
      <g fill="#3f8f3a">
        <path d="M-52 -4 q18 -10 34 -2 q-16 10 -34 2z"/>
        <path d="M8 -2 q18 -10 34 -2 q-16 10 -34 2z"/>
        <path d="M-28 4 q18 -9 34 -1 q-16 9 -34 1z"/>
      </g>
      <g fill="#5fae4a" opacity=".85">
        <path d="M-48 -5 q14 -7 26 -2"/><path d="M12 -3 q14 -7 26 -2"/>
      </g>
      <g fill="#6fae3a">
        <path d="M34 -16 q14 -6 22 2 q-12 6 -22 -2z"/><path d="M-58 -12 q-12 -6 -20 1 q10 6 20 -1z"/>
      </g>
      <path d="M-76 -6 q0 44 76 44 q76 0 76 -44" fill="none" stroke="#d3d8dc" stroke-width="2"/>
    </g>
    <g transform="translate(256,66)" opacity=".5">
      <path d="M-40 60 L0 -18 L40 60 Z" fill="#5e6b52"/>
      <path d="M-12 22 L0 -18 L12 22 Z" fill="#7a8a6b"/>
      <g opacity=".7"><ellipse cx="0" cy="-16" rx="10" ry="5" fill="#cfd5db"/></g>
    </g>`);

  /* ウズベキスタン：ラグマン */
  art('lagman', '#332a18', '#16120a', `
    ${shadow(150, 176, 102, 12, .34)}
    ${steam(146, 52, 1)}
    <g transform="translate(150,128)">
      <path d="M-78 -6 q0 44 78 44 q78 0 78 -44 z" fill="#e4e9ee"/>
      <ellipse cx="0" cy="-6" rx="78" ry="20" fill="#f6f9fb"/>
      <ellipse cx="0" cy="-6" rx="69" ry="17" fill="#b5401c"/>
      <ellipse cx="0" cy="-7" rx="64" ry="15" fill="#cf5527"/>
      <g fill="#e0713c" opacity=".55"><ellipse cx="-22" cy="-11" rx="20" ry="5"/><ellipse cx="30" cy="-3" rx="14" ry="4"/></g>
      <g stroke="#f2e6c8" stroke-width="4" fill="none" stroke-linecap="round">
        <path d="M-46 -8 q18 -12 38 -4"/><path d="M-40 0 q20 -11 40 -3"/><path d="M-28 -16 q20 -9 38 -3"/>
      </g>
      <g stroke="#fbf5df" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8">
        <path d="M-42 -9 q16 -10 32 -4"/><path d="M-34 -1 q18 -9 34 -3"/>
      </g>
      <g fill="#7d3f1c">
        <rect x="6" y="-20" width="22" height="13" rx="5" transform="rotate(-10 17 -13)"/>
        <rect x="30" y="-12" width="20" height="12" rx="5" transform="rotate(8 40 -6)"/>
      </g>
      <g fill="#3f8f3a">
        <rect x="-56" y="-14" width="20" height="6" rx="3" transform="rotate(-16 -46 -11)"/>
        <rect x="16" y="2" width="20" height="6" rx="3" transform="rotate(10 26 5)"/>
      </g>
      <g fill="#c4331f"><ellipse cx="-14" cy="-22" rx="10" ry="3.4" transform="rotate(-12 -14 -22)"/><ellipse cx="44" cy="-14" rx="8" ry="3" transform="rotate(14 44 -14)"/></g>
      <g fill="#2f7a34"><circle cx="-4" cy="4" r="2.4"/><circle cx="24" cy="-20" r="2.2"/></g>
      <path d="M-78 -6 q0 44 78 44 q78 0 78 -44" fill="none" stroke="#cdd3d9" stroke-width="2"/>
    </g>`);

  /* レバノン山岳：キッベ */
  art('kibbeh', '#2f2a1c', '#141208', `
    ${shadow(152, 176, 108, 12, .34)}
    <g transform="translate(152,124)">
      <ellipse cx="0" cy="34" rx="104" ry="27" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="104" ry="27" fill="#f7fafc"/>
      <ellipse cx="0" cy="28" rx="92" ry="22" fill="#e8edf2"/>
      <g>
        <g transform="translate(-46,6)">
          <path d="M0 -26 q16 6 16 22 q0 18 -16 20 q-16 -2 -16 -20 q0 -16 16 -22z" fill="#8a5424"/>
          <path d="M0 -22 q12 5 12 18 q0 14 -12 16 q-12 -2 -12 -16 q0 -13 12 -18z" fill="#a86c33"/>
          <path d="M-5 -12 q6 -6 10 -2" stroke="#c48c4e" stroke-width="2.4" fill="none" opacity=".8"/>
        </g>
        <g transform="translate(-4,-4)">
          <path d="M0 -26 q16 6 16 22 q0 18 -16 20 q-16 -2 -16 -20 q0 -16 16 -22z" fill="#96602b"/>
          <path d="M0 -22 q12 5 12 18 q0 14 -12 16 q-12 -2 -12 -16 q0 -13 12 -18z" fill="#b5783c"/>
          <path d="M-5 -12 q6 -6 10 -2" stroke="#d09a5c" stroke-width="2.4" fill="none" opacity=".8"/>
        </g>
        <g transform="translate(40,8)">
          <path d="M0 -24 q15 6 15 20 q0 17 -15 19 q-15 -2 -15 -19 q0 -14 15 -20z" fill="#8a5424"/>
          <path d="M0 -20 q11 5 11 17 q0 13 -11 15 q-11 -2 -11 -15 q0 -12 11 -17z" fill="#a86c33"/>
        </g>
      </g>
      <g fill="#3f8f3a">
        <path d="M62 24 q14 -12 24 -4 q-12 12 -24 4z"/>
        <path d="M-78 22 q-12 -10 -22 -2 q10 10 22 2z"/>
      </g>
      <g transform="translate(16,42)">
        <ellipse cx="0" cy="0" rx="24" ry="9" fill="#e6ebf0"/>
        <ellipse cx="0" cy="-2" rx="19" ry="7" fill="#fbfaf4"/>
        <g fill="#3f8f3a"><circle cx="-5" cy="-3" r="2"/><circle cx="6" cy="-1" r="1.8"/></g>
      </g>
      <g fill="#c9a05e"><circle cx="-24" cy="-30" r="2.6"/><circle cx="18" cy="-34" r="2.4"/><circle cx="-56" cy="-22" r="2.2"/></g>
    </g>`);

  /* エジプト・アレクサンドリア：サヤディーヤ */
  art('sayadeya', '#2a2f3a', '#12151c', `
    ${shadow(154, 176, 110, 12, .34)}
    <g transform="translate(154,122)">
      <ellipse cx="0" cy="36" rx="106" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="30" rx="106" ry="28" fill="#fbfdff"/>
      <ellipse cx="0" cy="30" rx="94" ry="23" fill="#eef3f7"/>
      <path d="M-74 26 q10 -34 74 -34 q64 0 74 34 q-74 16 -148 0z" fill="#8a5a2c"/>
      <path d="M-68 22 q10 -29 68 -29 q58 0 68 29 q-68 14 -136 0z" fill="#a3703a"/>
      <g fill="#c49356" opacity=".6"><ellipse cx="-28" cy="6" rx="24" ry="7"/><ellipse cx="30" cy="12" rx="18" ry="5.4"/></g>
      <g fill="#e0b478" opacity=".65">
        <rect x="-50" y="4" width="13" height="4.4" rx="2.2" transform="rotate(-16 -44 6)"/>
        <rect x="-8" y="-2" width="14" height="4.4" rx="2.2" transform="rotate(10 -1 0)"/>
        <rect x="28" y="8" width="13" height="4.2" rx="2.1" transform="rotate(-8 34 10)"/>
      </g>
      <g transform="translate(-4,-10)">
        <path d="M-34 10 q10 -20 36 -20 q28 0 34 20 q-8 10 -34 10 q-28 0 -36 -10z" fill="#e2e6e8"/>
        <path d="M-34 10 q-14 -6 -18 -11 q10 -5 18 -9z" fill="#c4cacd"/>
        <g stroke="#c4cacd" stroke-width="2.2" fill="none"><path d="M-20 4 q20 -8 40 -2"/><path d="M-16 12 q20 -8 36 -2"/></g>
        <circle cx="-16" cy="0" r="2.4" fill="#3a4147"/>
      </g>
      <g transform="translate(66,28)">
        <circle cx="0" cy="0" r="13" fill="#f2e05a"/><circle cx="0" cy="0" r="10" fill="#fbf094"/>
        <g stroke="#e8d54a" stroke-width="1.6"><path d="M0 -10 V10 M-10 0 H10"/></g>
      </g>
      <g fill="#3f8f3a"><ellipse cx="-62" cy="30" rx="10" ry="4" transform="rotate(14 -62 30)"/><ellipse cx="34" cy="36" rx="9" ry="3.4" transform="rotate(-10 34 36)"/></g>
    </g>`);

  /* セネガル内陸：チェレ */
  art('thiere', '#33291a', '#17120a', `
    ${shadow(152, 176, 106, 12, .34)}
    <g transform="translate(152,122)">
      <ellipse cx="0" cy="34" rx="104" ry="27" fill="#a8977a"/>
      <ellipse cx="0" cy="28" rx="104" ry="27" fill="#d9caa8"/>
      <ellipse cx="0" cy="28" rx="92" ry="22" fill="#c2b291"/>
      <g transform="translate(-14,2)">
        <ellipse cx="0" cy="26" rx="50" ry="16" fill="#b5a483"/>
        <path d="M-46 24 q-4 -46 46 -46 q50 0 46 46 q-46 14 -92 0z" fill="#d9c9a0"/>
        <path d="M-34 10 q-2 -28 34 -28 q12 0 20 4 q-42 4 -44 28z" fill="#e8dcbc" opacity=".8"/>
        <g fill="#c4b18a" opacity=".9">
          <circle cx="-22" cy="4" r="3"/><circle cx="-2" cy="-6" r="2.8"/><circle cx="18" cy="2" r="2.8"/>
          <circle cx="-12" cy="14" r="2.6"/><circle cx="12" cy="16" r="2.6"/><circle cx="30" cy="10" r="2.4"/>
        </g>
      </g>
      <g transform="translate(62,20)">
        <ellipse cx="0" cy="0" rx="30" ry="13" fill="#e8ddc4"/>
        <ellipse cx="0" cy="-2" rx="25" ry="10" fill="#f6f2e8"/>
        <ellipse cx="-6" cy="-5" rx="9" ry="3.4" fill="#fdfcf6"/>
      </g>
      <g transform="translate(58,46)">
        <ellipse cx="0" cy="0" rx="26" ry="10" fill="#e8ddc4"/>
        <ellipse cx="0" cy="-2" rx="21" ry="8" fill="#8a4a24"/>
        <g fill="#b5763a"><circle cx="-7" cy="-3" r="3.4"/><circle cx="5" cy="0" r="3"/></g>
      </g>
      <g transform="translate(-74,44)">
        <g fill="#c9a05e"><circle cx="-6" cy="0" r="5"/><circle cx="4" cy="3" r="4.6"/><circle cx="10" cy="-3" r="4.2"/></g>
      </g>
    </g>`);

  /* ナイジェリア北部：スヤ */
  art('suya', '#33271a', '#17110a', `
    ${shadow(154, 178, 114, 12, .34)}
    <g transform="translate(154,130)">
      <path d="M-100 18 q0 16 100 16 q100 0 100 -16 l-6 18 q-16 10 -94 10 q-78 0 -94 -10z" fill="#3a3028"/>
      <g fill="#e05a2c" opacity=".75"><ellipse cx="-52" cy="24" rx="16" ry="5.4"/><ellipse cx="2" cy="28" rx="18" ry="5.6"/><ellipse cx="54" cy="24" rx="15" ry="5"/></g>
      <g stroke="#7a7168" stroke-width="4" stroke-linecap="round"><path d="M-100 6 L100 6"/><path d="M-100 16 L100 16"/></g>
      <g transform="translate(0,-10) rotate(-4)">
        <rect x="-92" y="-2" width="188" height="4.4" rx="2.2" fill="#9aa4ae"/>
        <g>
          <rect x="-80" y="-14" width="34" height="26" rx="6" fill="#6b3a1c"/>
          <rect x="-38" y="-16" width="36" height="28" rx="6" fill="#7d4420"/>
          <rect x="6" y="-14" width="34" height="26" rx="6" fill="#6b3a1c"/>
          <rect x="48" y="-16" width="34" height="27" rx="6" fill="#7d4420"/>
        </g>
        <g fill="#c98a3d" opacity=".9">
          <rect x="-74" y="-10" width="22" height="7" rx="3.5"/><rect x="-32" y="-12" width="24" height="7" rx="3.5"/>
          <rect x="12" y="-10" width="22" height="7" rx="3.5"/><rect x="54" y="-12" width="22" height="7" rx="3.5"/>
        </g>
        <g fill="#3a1f10" opacity=".7">
          <circle cx="-64" cy="4" r="2.6"/><circle cx="-20" cy="2" r="2.4"/><circle cx="22" cy="5" r="2.4"/><circle cx="64" cy="2" r="2.4"/>
        </g>
      </g>
      <g transform="translate(-4,-44)">
        <path d="M-18 4 q6 -14 18 -14 q12 0 18 14 q-18 8 -36 0z" fill="#c4331f"/>
        <g fill="#e0705a"><circle cx="-4" cy="-2" r="3"/><circle cx="7" cy="1" r="2.6"/></g>
      </g>
      <g transform="translate(62,-40)">
        <g fill="#f2f6f8"><ellipse cx="0" cy="0" rx="8" ry="4"/><ellipse cx="12" cy="3" rx="7" ry="3.6"/><ellipse cx="-11" cy="3" rx="7" ry="3.4"/></g>
      </g>
    </g>`);

  /* ケニア海岸：ピラウ */
  art('pilau', '#2a331f', '#12180e', `
    ${shadow(152, 176, 108, 12, .34)}
    <g transform="translate(152,122)">
      <ellipse cx="0" cy="34" rx="104" ry="27" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="104" ry="27" fill="#f7fafc"/>
      <ellipse cx="0" cy="28" rx="92" ry="22" fill="#e8edf2"/>
      <path d="M-74 24 q10 -34 74 -34 q64 0 74 34 q-74 16 -148 0z" fill="#7d5028"/>
      <path d="M-68 20 q10 -29 68 -29 q58 0 68 29 q-68 14 -136 0z" fill="#9c6835"/>
      <g fill="#bd8a4e" opacity=".6"><ellipse cx="-28" cy="4" rx="24" ry="7"/><ellipse cx="30" cy="10" rx="18" ry="5.4"/></g>
      <g fill="#d9b078" opacity=".6">
        <rect x="-50" y="2" width="13" height="4.4" rx="2.2" transform="rotate(-16 -44 4)"/>
        <rect x="-8" y="-4" width="14" height="4.4" rx="2.2" transform="rotate(10 -1 -2)"/>
        <rect x="28" y="6" width="13" height="4.2" rx="2.1" transform="rotate(-8 34 8)"/>
      </g>
      <g fill="#4a2a14">
        <ellipse cx="-38" cy="-4" rx="4" ry="2" transform="rotate(-20 -38 -4)"/>
        <ellipse cx="-6" cy="-10" rx="4" ry="2" transform="rotate(14 -6 -10)"/>
        <ellipse cx="26" cy="-2" rx="4" ry="2" transform="rotate(-8 26 -2)"/>
        <ellipse cx="48" cy="6" rx="3.6" ry="1.8" transform="rotate(20 48 6)"/>
        <ellipse cx="6" cy="10" rx="3.6" ry="1.8"/>
      </g>
      <g transform="translate(6,-14)">
        <rect x="-26" y="-10" width="26" height="20" rx="6" fill="#6b3a1c" transform="rotate(-10 -13 0)"/>
        <rect x="2" y="-8" width="24" height="19" rx="6" fill="#7d4420" transform="rotate(8 14 1)"/>
        <g fill="#9e5c2c" opacity=".85"><rect x="-20" y="-6" width="14" height="5" rx="2.5" transform="rotate(-10 -13 -4)"/></g>
      </g>
      <g transform="translate(-68,32)">
        <path d="M-16 6 q4 -18 16 -18 q12 0 16 18 q-16 6 -32 0z" fill="#f6f2e4"/>
        <g fill="#e6e0cd"><circle cx="-4" cy="-2" r="3"/><circle cx="6" cy="1" r="2.6"/></g>
      </g>
      <g fill="#3f8f3a"><ellipse cx="62" cy="34" rx="10" ry="4" transform="rotate(14 62 34)"/></g>
    </g>`);

  /* 南アフリカ内陸：パップとブラーイ */
  art('pap', '#2f2a1d', '#14120b', `
    ${shadow(154, 176, 112, 12, .34)}
    <g transform="translate(154,122)">
      <ellipse cx="0" cy="36" rx="108" ry="28" fill="#cfd5db"/>
      <ellipse cx="0" cy="30" rx="108" ry="28" fill="#fbfdff"/>
      <ellipse cx="0" cy="30" rx="96" ry="23" fill="#eef3f7"/>
      <g transform="translate(-48,2)">
        <ellipse cx="0" cy="28" rx="44" ry="15" fill="#e8e2d0"/>
        <path d="M-40 26 q-6 -48 40 -48 q46 0 40 48 q-40 14 -80 0z" fill="#fbf8ec"/>
        <path d="M-30 12 q-2 -30 30 -30" fill="none" stroke="#fff" stroke-width="5" opacity=".7"/>
        <path d="M-40 26 q40 14 80 0" fill="none" stroke="#e0d9c2" stroke-width="2.4"/>
      </g>
      <g transform="translate(46,0)">
        <g transform="rotate(-8)">
          <rect x="-44" y="-2" width="88" height="22" rx="11" fill="#a8542a"/>
          <rect x="-44" y="-2" width="88" height="9" rx="4.5" fill="#c26d3c"/>
          <g stroke="#8a3f1c" stroke-width="2" opacity=".6"><path d="M-22 -2 v22"/><path d="M10 -2 v22"/></g>
        </g>
        <g transform="translate(6,26) rotate(6)">
          <path d="M-36 8 q4 -20 36 -20 q32 0 36 20 q-36 10 -72 0z" fill="#7d3a20"/>
          <path d="M-30 5 q4 -15 30 -15 q26 0 30 15 q-30 8 -60 0z" fill="#9e5230"/>
          <g stroke="#5e2a14" stroke-width="3" fill="none" opacity=".75"><path d="M-18 -2 h36"/><path d="M-22 6 h44"/></g>
        </g>
      </g>
      <g transform="translate(6,52)">
        <ellipse cx="0" cy="0" rx="26" ry="9" fill="#e6ebf0"/>
        <ellipse cx="0" cy="-2" rx="21" ry="7" fill="#c4331f"/>
        <ellipse cx="-5" cy="-4" rx="7" ry="2.6" fill="#e0705a"/>
      </g>
    </g>`);

  /* ギリシャ・クレタ島：ダコス */
  art('dakos', '#1f3038', '#0e171c', `
    ${shadow(152, 176, 108, 12, .34)}
    <g transform="translate(152,124)">
      <ellipse cx="0" cy="34" rx="104" ry="27" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="104" ry="27" fill="#f7fafc"/>
      <ellipse cx="0" cy="28" rx="92" ry="22" fill="#e8edf2"/>
      <g transform="translate(-6,0)">
        <ellipse cx="0" cy="20" rx="56" ry="20" fill="#a8845a"/>
        <ellipse cx="0" cy="14" rx="56" ry="20" fill="#c9a877"/>
        <ellipse cx="0" cy="12" rx="50" ry="17" fill="#d9bb8c"/>
        <g fill="#b89765" opacity=".8"><circle cx="-28" cy="8" r="3.4"/><circle cx="4" cy="18" r="3"/><circle cx="30" cy="6" r="3"/></g>
        <g fill="#c4331f">
          <ellipse cx="-24" cy="2" rx="17" ry="9"/><ellipse cx="6" cy="-4" rx="18" ry="9.4"/><ellipse cx="30" cy="4" rx="15" ry="8"/>
          <ellipse cx="-8" cy="10" rx="15" ry="8"/>
        </g>
        <g fill="#d6543a">
          <ellipse cx="-26" cy="-1" rx="8" ry="4"/><ellipse cx="4" cy="-7" rx="8" ry="4"/><ellipse cx="28" cy="1" rx="7" ry="3.4"/>
        </g>
        <g fill="#fbfaf4">
          <ellipse cx="-14" cy="-4" rx="10" ry="6"/><ellipse cx="14" cy="4" rx="11" ry="6.4"/><ellipse cx="0" cy="10" rx="9" ry="5.4"/>
        </g>
        <g fill="#3f8f3a">
          <circle cx="-22" cy="-8" r="2.6"/><circle cx="10" cy="-10" r="2.4"/><circle cx="24" cy="10" r="2.4"/><circle cx="-6" cy="16" r="2.2"/>
        </g>
        <g fill="#2f353a"><ellipse cx="-34" cy="10" rx="5.4" ry="4"/><ellipse cx="34" cy="-4" rx="5" ry="3.6"/></g>
      </g>
      <g transform="translate(76,34)">
        <path d="M-12 26 q-6 -26 0 -34 q2 -8 10 -8 q8 0 10 8 q6 8 0 34 q-10 6 -20 0z" fill="#6b8a3a"/>
        <path d="M-9 22 q-4 -22 0 -28" fill="none" stroke="#9dbd5e" stroke-width="3" opacity=".6"/>
      </g>
    </g>`);

  /* ポルトガル内陸：豚肉とアサリ */
  art('porco', '#2e2a1c', '#14120a', `
    ${shadow(152, 176, 108, 12, .34)}
    <g transform="translate(152,124)">
      <ellipse cx="0" cy="34" rx="104" ry="27" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="104" ry="27" fill="#f7fafc"/>
      <ellipse cx="0" cy="28" rx="92" ry="22" fill="#e8edf2"/>
      <g transform="translate(-10,0)">
        <g fill="#8a4a24">
          <rect x="-50" y="0" width="26" height="19" rx="6" transform="rotate(-12 -37 9)"/>
          <rect x="-20" y="-6" width="27" height="20" rx="6" transform="rotate(8 -6 4)"/>
          <rect x="10" y="2" width="25" height="18" rx="6" transform="rotate(-6 22 11)"/>
          <rect x="-36" y="16" width="24" height="17" rx="6" transform="rotate(10 -24 24)"/>
        </g>
        <g fill="#b5713c" opacity=".9">
          <rect x="-44" y="4" width="16" height="6" rx="3" transform="rotate(-12 -36 7)"/>
          <rect x="-14" y="-2" width="17" height="6" rx="3" transform="rotate(8 -5 1)"/>
          <rect x="16" y="6" width="15" height="5.4" rx="2.7" transform="rotate(-6 23 8)"/>
        </g>
        <g fill="#d99a4e" opacity=".5"><ellipse cx="-24" cy="10" rx="20" ry="6"/></g>
      </g>
      <g>
        <g transform="translate(44,-6)">
          <path d="M-14 4 q-4 -14 14 -14 q18 0 14 14 q-14 6 -28 0z" fill="#3a3028"/>
          <path d="M-11 2 q-3 -10 11 -10 q14 0 11 10 q-11 5 -22 0z" fill="#5e5245"/>
          <path d="M-11 2 q11 5 22 0" fill="none" stroke="#8a7d6b" stroke-width="1.8"/>
        </g>
        <g transform="translate(66,14)">
          <path d="M-13 4 q-4 -13 13 -13 q17 0 13 13 q-13 6 -26 0z" fill="#3a3028"/>
          <path d="M-10 2 q-3 -9 10 -9 q13 0 10 9 q-10 5 -20 0z" fill="#6b5e4e"/>
        </g>
        <g transform="translate(24,26)">
          <path d="M-13 4 q-4 -13 13 -13 q17 0 13 13 q-13 6 -26 0z" fill="#33291f"/>
          <path d="M-10 2 q-3 -9 10 -9 q13 0 10 9 q-10 5 -20 0z" fill="#5e5245"/>
        </g>
      </g>
      <g fill="#3f8f3a">
        <path d="M-58 30 q12 -12 22 -4 q-10 12 -22 4z"/><path d="M-36 40 q12 -11 22 -4 q-10 11 -22 4z"/>
      </g>
      <g transform="translate(-74,14)">
        <circle cx="0" cy="0" r="12" fill="#f2e05a"/><circle cx="0" cy="0" r="9" fill="#fbf094"/>
        <g stroke="#e8d54a" stroke-width="1.4"><path d="M0 -9 V9 M-9 0 H9"/></g>
      </g>
    </g>`);

  /* ポーランド・タトラ山脈：オスツィペク */
  art('oscypek', '#2a3140', '#131822', `
    ${shadow(152, 176, 108, 12, .34)}
    <g transform="translate(152,124)">
      <ellipse cx="0" cy="36" rx="104" ry="26" fill="#6b5a45"/>
      <ellipse cx="0" cy="30" rx="104" ry="26" fill="#8a7458"/>
      <ellipse cx="0" cy="30" rx="92" ry="21" fill="#75604a"/>
      <g transform="translate(-16,-4) rotate(-8)">
        <path d="M-56 0 q6 -16 18 -16 q10 0 14 8 q26 -4 48 0 q12 0 12 8 q0 8 -12 8 q-22 4 -48 0 q-4 8 -14 8 q-12 0 -18 -16z" fill="#c9903f"/>
        <path d="M-52 -2 q6 -12 16 -12 q9 0 12 7 q24 -3 44 0 q10 0 10 7 q0 7 -10 7 q-20 3 -44 0 q-3 7 -12 7 q-10 0 -16 -16z" fill="#e0ab54"/>
        <g stroke="#a8722a" stroke-width="2" fill="none" opacity=".85">
          <path d="M-30 -10 q0 20 0 20"/><path d="M-14 -12 q0 24 0 24"/><path d="M2 -12 q0 24 0 24"/><path d="M18 -11 q0 22 0 22"/>
          <path d="M-36 -4 q60 -4 72 0"/><path d="M-36 4 q60 4 72 0"/>
        </g>
        <g fill="#f2c96e" opacity=".7"><ellipse cx="-20" cy="-6" rx="14" ry="3.4"/></g>
      </g>
      <g transform="translate(58,26)">
        <ellipse cx="0" cy="0" rx="24" ry="10" fill="#e6ebf0"/>
        <ellipse cx="0" cy="-2" rx="19" ry="8" fill="#a82b45"/>
        <ellipse cx="-5" cy="-4" rx="7" ry="3" fill="#c94a62"/>
      </g>
      <g transform="translate(-72,20)" opacity=".9">
        <g stroke="#8a7458" stroke-width="3" fill="none" stroke-linecap="round">
          <path d="M-8 14 L-8 -6"/><path d="M8 14 L8 -6"/><path d="M-12 -6 L12 -6"/>
        </g>
      </g>
    </g>
    <g transform="translate(252,54)" opacity=".5">
      <path d="M-48 38 L-18 -20 L2 14 L22 -8 L48 38 Z" fill="#5e6b7d"/>
      <path d="M-18 -20 L-7 3 L-29 3 Z" fill="#f2f6fa"/>
      <path d="M22 -8 L31 8 L13 8 Z" fill="#f2f6fa"/>
    </g>`);

  /* ハンガリー：ハラースレー */
  art('halaszle', '#33201c', '#160d0b', `
    ${shadow(148, 176, 100, 12, .34)}
    ${steam(144, 52, 1)}
    <g transform="translate(148,128)">
      <path d="M-76 -6 q0 44 76 44 q76 0 76 -44 z" fill="#2f2a28"/>
      <ellipse cx="0" cy="-6" rx="76" ry="19" fill="#4a4340"/>
      <ellipse cx="0" cy="-6" rx="67" ry="16" fill="#9e2a12"/>
      <ellipse cx="0" cy="-7" rx="62" ry="14.5" fill="#bd3a17"/>
      <g fill="#d65c2e" opacity=".55"><ellipse cx="-20" cy="-11" rx="20" ry="5"/><ellipse cx="28" cy="-3" rx="14" ry="4"/></g>
      <g>
        <path d="M-46 -10 q20 -12 42 -4 q-4 10 -20 12 q-18 2 -22 -8z" fill="#c9cfd4"/>
        <path d="M-46 -10 q-12 -8 -16 -2 q4 8 16 6z" fill="#a8b0b6"/>
        <circle cx="-22" cy="-10" r="2.4" fill="#2d3642"/>
        <g stroke="#e4eaee" stroke-width="2" fill="none"><path d="M-36 -8 q12 -4 22 -1"/></g>
      </g>
      <g>
        <path d="M6 -18 q20 -10 40 -2 q-6 10 -22 11 q-16 1 -18 -9z" fill="#b8c0c6"/>
        <g stroke="#dde3e8" stroke-width="2" fill="none"><path d="M14 -16 q12 -4 22 -1"/></g>
        <circle cx="30" cy="-16" r="2.2" fill="#2d3642"/>
      </g>
      <g stroke="#f2e6c8" stroke-width="3" fill="none" stroke-linecap="round" opacity=".9">
        <path d="M-40 2 q16 -8 32 -2"/><path d="M0 4 q16 -8 32 -2"/>
      </g>
      <g fill="#e8b93c"><ellipse cx="-52" cy="-6" rx="8" ry="4"/><ellipse cx="48" cy="-10" rx="7" ry="3.6"/></g>
      <g fill="#c4331f"><circle cx="-6" cy="0" r="2.4"/><circle cx="18" cy="-22" r="2.2"/></g>
      <path d="M-76 -6 q0 44 76 44 q76 0 76 -44" fill="none" stroke="#241f1d" stroke-width="2"/>
      <rect x="-86" y="6" width="14" height="7" rx="3.5" fill="#4a4340"/>
      <rect x="72" y="6" width="14" height="7" rx="3.5" fill="#4a4340"/>
    </g>`);

  /* ロシア・バイカル：ストロガニナ */
  art('stroganina', '#1c2836', '#0b121b', `
    ${shadow(152, 178, 108, 11, .3)}
    <g transform="translate(152,126)">
      <ellipse cx="0" cy="36" rx="104" ry="26" fill="#9aa8b5"/>
      <ellipse cx="0" cy="30" rx="104" ry="26" fill="#d9e4ee"/>
      <ellipse cx="0" cy="30" rx="92" ry="21" fill="#c2d0dc"/>
      <g>
        <g fill="#efb8a0">
          <path d="M-62 14 q16 -26 34 -12 q-10 22 -34 12z"/>
          <path d="M-36 4 q16 -28 34 -14 q-10 24 -34 14z"/>
          <path d="M-12 16 q16 -27 34 -13 q-10 23 -34 13z"/>
          <path d="M12 2 q16 -26 34 -12 q-10 22 -34 12z"/>
          <path d="M-48 26 q16 -24 32 -11 q-9 21 -32 11z"/>
          <path d="M6 28 q16 -24 32 -11 q-9 21 -32 11z"/>
        </g>
        <g stroke="#fbe0d2" stroke-width="2.4" fill="none" opacity=".9">
          <path d="M-56 12 q12 -16 24 -10"/><path d="M-30 2 q12 -17 24 -11"/>
          <path d="M-6 14 q12 -16 24 -10"/><path d="M18 0 q12 -16 24 -10"/>
        </g>
        <g fill="#f8d2c0" opacity=".8">
          <path d="M-58 16 q14 -18 28 -10"/><path d="M-8 18 q14 -18 28 -10"/>
        </g>
      </g>
      <g transform="translate(-76,34)">
        <ellipse cx="0" cy="0" rx="16" ry="7" fill="#e8eef4"/>
        <ellipse cx="0" cy="-1" rx="11" ry="4.6" fill="#fbfdff"/>
      </g>
      <g transform="translate(74,32)">
        <ellipse cx="0" cy="0" rx="16" ry="7" fill="#e8eef4"/>
        <ellipse cx="0" cy="-1" rx="11" ry="4.6" fill="#3a3f45"/>
      </g>
      <g fill="#fbfdff" opacity=".85">
        <circle cx="-30" cy="-22" r="2.4"/><circle cx="14" cy="-28" r="2.2"/><circle cx="48" cy="-18" r="2"/><circle cx="-56" cy="-14" r="2"/>
      </g>
    </g>
    <g transform="translate(250,60) rotate(14)">
      <rect x="-4" y="-34" width="8" height="58" rx="3" fill="#9aa4ae"/>
      <rect x="-3" y="-34" width="3" height="58" rx="1.5" fill="#c8d2db"/>
      <rect x="-8" y="22" width="16" height="22" rx="5" fill="#5e4630"/>
    </g>`);

  /* カナダ西海岸：杉板焼きサーモン */
  art('plankedsalmon', '#1e2e28', '#0d1613', `
    ${shadow(152, 176, 116, 12, .34)}
    ${steam(150, 48, 1)}
    <g transform="translate(152,126)">
      <path d="M-104 18 q0 14 104 14 q104 0 104 -14 l-6 14 q-16 10 -98 10 q-82 0 -98 -10z" fill="#33291d"/>
      <g fill="#e05a2c" opacity=".6"><ellipse cx="-46" cy="22" rx="16" ry="5"/><ellipse cx="14" cy="26" rx="18" ry="5.4"/><ellipse cx="66" cy="22" rx="14" ry="4.6"/></g>
      <g transform="translate(-4,-6) rotate(-3)">
        <rect x="-92" y="0" width="184" height="24" rx="5" fill="#5e3a22"/>
        <rect x="-92" y="-6" width="184" height="10" rx="5" fill="#7d4f2e"/>
        <g stroke="#4a2c18" stroke-width="1.8" opacity=".6"><path d="M-80 -2 h160"/><path d="M-80 2 h160"/></g>
        <g transform="translate(0,-6)">
          <path d="M-72 0 q14 -24 72 -24 q58 0 72 24 q-14 14 -72 14 q-58 0 -72 -14z" fill="#d9633a"/>
          <path d="M-66 -2 q14 -19 66 -19 q52 0 66 19 q-14 11 -66 11 q-52 0 -66 -11z" fill="#ee7f4f"/>
          <g stroke="#fbd9c2" stroke-width="3.4" fill="none" opacity=".9">
            <path d="M-54 -4 q28 -12 56 -8"/><path d="M-46 2 q30 -12 60 -7"/><path d="M-34 -10 q28 -8 52 -4"/>
          </g>
          <g fill="#8a4a24" opacity=".5"><ellipse cx="-20" cy="-2" rx="16" ry="4"/><ellipse cx="26" cy="2" rx="12" ry="3.4"/></g>
          <g fill="#3f8f3a"><ellipse cx="50" cy="-12" rx="10" ry="4" transform="rotate(-20 50 -12)"/><ellipse cx="-58" cy="-8" rx="9" ry="3.4" transform="rotate(16 -58 -8)"/></g>
        </g>
      </g>
      <g transform="translate(78,-42)">
        <circle cx="0" cy="0" r="11" fill="#f2e05a"/><circle cx="0" cy="0" r="8" fill="#fbf094"/>
      </g>
    </g>
    <g transform="translate(46,54)" opacity=".7">
      <path d="M0 44 L0 8" stroke="#4a3a28" stroke-width="4"/>
      <g fill="#2f6b4a">
        <path d="M0 10 q-22 -6 -30 -20 q22 2 32 14z"/><path d="M0 10 q22 -6 30 -20 q-22 2 -32 14z"/>
        <path d="M0 2 q-16 -10 -18 -26 q16 10 20 24z"/><path d="M0 2 q16 -10 18 -26 q-16 10 -20 24z"/>
      </g>
    </g>`);

  /* アルゼンチン北西部：ロクロ */
  art('locro', '#33280f', '#161207', `
    ${shadow(150, 176, 102, 12, .34)}
    ${steam(146, 52, 1)}
    <g transform="translate(150,128)">
      <path d="M-78 -6 q0 44 78 44 q78 0 78 -44 z" fill="#8a4a2c"/>
      <ellipse cx="0" cy="-6" rx="78" ry="20" fill="#a3603a"/>
      <ellipse cx="0" cy="-6" rx="69" ry="17" fill="#d9a041"/>
      <ellipse cx="0" cy="-7" rx="64" ry="15" fill="#e8b352"/>
      <g fill="#f2c96e" opacity=".6"><ellipse cx="-22" cy="-11" rx="20" ry="5"/><ellipse cx="30" cy="-3" rx="14" ry="4"/></g>
      <g fill="#f6e08a">
        <circle cx="-40" cy="-8" r="6"/><circle cx="-24" cy="-14" r="5.6"/><circle cx="-6" cy="-6" r="6"/>
        <circle cx="14" cy="-14" r="5.6"/><circle cx="34" cy="-6" r="5.4"/><circle cx="48" cy="-14" r="5"/>
        <circle cx="-32" cy="0" r="5"/><circle cx="6" cy="2" r="5"/>
      </g>
      <g fill="#fbeeb4" opacity=".8">
        <circle cx="-41" cy="-10" r="2.4"/><circle cx="-7" cy="-8" r="2.4"/><circle cx="33" cy="-8" r="2.2"/>
      </g>
      <g fill="#e8e2cd">
        <ellipse cx="-14" cy="-20" rx="6" ry="4" transform="rotate(-20 -14 -20)"/>
        <ellipse cx="22" cy="-20" rx="6" ry="4" transform="rotate(14 22 -20)"/>
        <ellipse cx="-48" cy="-16" rx="5.4" ry="3.6"/>
      </g>
      <g fill="#c96a26"><ellipse cx="-2" cy="-14" rx="9" ry="6"/><ellipse cx="42" cy="-20" rx="8" ry="5"/></g>
      <path d="M-46 -18 q22 -6 44 2 q22 8 44 -2" fill="none" stroke="#c4331f" stroke-width="3.4" opacity=".85"/>
      <g fill="#3f8f3a"><circle cx="16" cy="-24" r="2.4"/><circle cx="-34" cy="-22" r="2.2"/></g>
      <path d="M-78 -6 q0 44 78 44 q78 0 78 -44" fill="none" stroke="#6b3620" stroke-width="2"/>
    </g>`);

  /* ジャマイカ：アキー＆ソルトフィッシュ */
  art('ackee', '#20331f', '#0e170e', `
    ${shadow(152, 176, 108, 12, .34)}
    <g transform="translate(152,124)">
      <ellipse cx="0" cy="34" rx="104" ry="27" fill="#cfd5db"/>
      <ellipse cx="0" cy="28" rx="104" ry="27" fill="#f7fafc"/>
      <ellipse cx="0" cy="28" rx="92" ry="22" fill="#e8edf2"/>
      <g transform="translate(-6,2)">
        <g fill="#f2c14e">
          <ellipse cx="-38" cy="6" rx="15" ry="10" transform="rotate(-14 -38 6)"/>
          <ellipse cx="-10" cy="-2" rx="16" ry="10.6" transform="rotate(10 -10 -2)"/>
          <ellipse cx="18" cy="6" rx="15" ry="10" transform="rotate(-6 18 6)"/>
          <ellipse cx="-24" cy="16" rx="14" ry="9" transform="rotate(8 -24 16)"/>
          <ellipse cx="6" cy="16" rx="14" ry="9" transform="rotate(-12 6 16)"/>
          <ellipse cx="40" cy="-2" rx="13" ry="8.6" transform="rotate(16 40 -2)"/>
        </g>
        <g fill="#fbd96e" opacity=".85">
          <ellipse cx="-40" cy="3" rx="7" ry="4"/><ellipse cx="-12" cy="-5" rx="7" ry="4"/><ellipse cx="16" cy="3" rx="6.4" ry="3.6"/>
        </g>
        <g fill="#f6f2e8">
          <path d="M-46 -8 q18 -8 32 -2 q-14 8 -32 2z"/>
          <path d="M-4 -12 q18 -8 32 -2 q-14 8 -32 2z"/>
          <path d="M-24 22 q18 -8 32 -2 q-14 8 -32 2z"/>
        </g>
        <g fill="#c4331f">
          <path d="M-32 -10 q14 -5 24 -1 q-12 6 -24 1z"/><path d="M12 18 q14 -5 24 -1 q-12 6 -24 1z"/>
        </g>
        <g fill="#3f8f3a">
          <path d="M28 -12 q12 -10 20 -3 q-10 10 -20 3z"/><path d="M-52 12 q-12 -9 -20 -2 q10 9 20 2z"/>
        </g>
        <g fill="#2a2a24"><circle cx="-18" cy="8" r="2.6"/><circle cx="10" cy="0" r="2.4"/><circle cx="30" cy="12" r="2.2"/></g>
      </g>
      <g transform="translate(72,36)">
        <path d="M-16 6 q4 -18 16 -18 q12 0 16 18 q-16 6 -32 0z" fill="#e2913c"/>
        <path d="M-10 2 q4 -12 10 -12 q6 0 10 12 q-10 5 -20 0z" fill="#f2b562"/>
      </g>
    </g>`);

  /* オーストラリア内陸：ブッシュタッカー */
  art('bushtucker', '#3a2a1c', '#18110a', `
    ${shadow(152, 176, 112, 12, .34)}
    <g transform="translate(152,122)">
      <ellipse cx="0" cy="36" rx="106" ry="28" fill="#8a6a4a"/>
      <ellipse cx="0" cy="30" rx="106" ry="28" fill="#c4a37d"/>
      <ellipse cx="0" cy="30" rx="94" ry="23" fill="#ab8a64"/>
      <g transform="translate(-16,0)">
        <path d="M-44 14 q-4 -30 24 -36 q30 -6 40 12 q8 16 -10 24 q-30 10 -54 0z" fill="#6b2a1c"/>
        <path d="M-38 10 q-4 -24 20 -30 q26 -5 34 10 q7 13 -9 20 q-26 8 -45 0z" fill="#8f3f24"/>
        <g fill="#a85a32" opacity=".8"><ellipse cx="-12" cy="-6" rx="14" ry="6"/><ellipse cx="12" cy="2" rx="10" ry="4.6"/></g>
        <g stroke="#4a1a10" stroke-width="2.6" fill="none" opacity=".7"><path d="M-26 4 q26 -10 46 2"/></g>
      </g>
      <g transform="translate(62,20)">
        <g fill="#8a3f28">
          <circle cx="-10" cy="0" r="8"/><circle cx="6" cy="4" r="7.4"/><circle cx="14" cy="-6" r="6.6"/><circle cx="-2" cy="-8" r="6.4"/>
        </g>
        <g fill="#b5573a" opacity=".8"><circle cx="-11" cy="-2" r="3.4"/><circle cx="5" cy="2" r="3"/></g>
      </g>
      <g transform="translate(-68,32)">
        <g fill="#5e4a2c"><circle cx="-8" cy="0" r="4"/><circle cx="1" cy="3" r="3.6"/><circle cx="8" cy="-2" r="3.4"/><circle cx="-2" cy="-4" r="3.4"/><circle cx="-14" cy="4" r="3"/></g>
      </g>
      <g transform="translate(16,44)">
        <g fill="#6b8a3a"><ellipse cx="-10" cy="0" rx="11" ry="5" transform="rotate(-16 -10 0)"/><ellipse cx="8" cy="3" rx="10" ry="4.6" transform="rotate(12 8 3)"/></g>
        <g fill="#8fad52" opacity=".8"><ellipse cx="-11" cy="-2" rx="5" ry="2.2" transform="rotate(-16 -11 -2)"/></g>
      </g>
      <g fill="#c98a3d" opacity=".7"><circle cx="-44" cy="-22" r="2.6"/><circle cx="6" cy="-30" r="2.4"/><circle cx="52" cy="-16" r="2.4"/></g>
    </g>`);

  /* フィジー：ロボ */
  art('lovo', '#22301c', '#0f160c', `
    <rect x="0" y="108" width="320" height="92" fill="#6b5236"/>
    <rect x="0" y="108" width="320" height="9" fill="#7d6242"/>
    <rect x="0" y="104" width="320" height="6" fill="#3f6b2c"/>
    <g fill="#33592a" opacity=".8"><ellipse cx="30" cy="105" rx="26" ry="5"/><ellipse cx="290" cy="105" rx="30" ry="5"/></g>
    ${steam(160, 72, 1)}
    <g transform="translate(160,150)">
      <path d="M-88 -44 q6 54 88 54 q82 0 88 -54 q-88 -18 -176 0z" fill="#33291d"/>
      <ellipse cx="0" cy="-44" rx="88" ry="19" fill="#2a2118"/>
      <ellipse cx="0" cy="-40" rx="78" ry="16" fill="#1f1912"/>
      <g>
        <ellipse cx="-42" cy="-14" rx="16" ry="10" fill="#6b6259"/>
        <ellipse cx="-8" cy="-6" rx="18" ry="11" fill="#7a7168"/>
        <ellipse cx="28" cy="-12" rx="17" ry="10" fill="#6b6259"/>
        <ellipse cx="54" cy="-2" rx="14" ry="9" fill="#5e564e"/>
        <ellipse cx="-64" cy="-2" rx="14" ry="9" fill="#5e564e"/>
      </g>
      <g fill="#e05a2c" opacity=".85">
        <ellipse cx="-42" cy="-14" rx="10" ry="5.4"/><ellipse cx="-8" cy="-6" rx="11" ry="6"/><ellipse cx="28" cy="-12" rx="10" ry="5.4"/>
      </g>
      <g transform="translate(0,-38)">
        <path d="M-58 0 q6 -20 58 -20 q52 0 58 20 q-58 13 -116 0z" fill="#2f6b2c"/>
        <g fill="#3f8a35">
          <path d="M-50 -4 q16 -15 32 -11 q-12 15 -32 11z"/>
          <path d="M-12 -10 q18 -13 34 -7 q-14 15 -34 7z"/>
          <path d="M22 -4 q16 -13 32 -7 q-14 13 -32 7z"/>
        </g>
        <g fill="#8a5a3c">
          <ellipse cx="-28" cy="-13" rx="13" ry="7.6"/><ellipse cx="6" cy="-18" rx="14" ry="8"/><ellipse cx="34" cy="-12" rx="12" ry="7"/>
        </g>
        <g fill="#c9a86a"><ellipse cx="-28" cy="-15" rx="7" ry="3.4"/><ellipse cx="6" cy="-20" rx="7" ry="3.4"/></g>
        <g fill="#a8b8c4"><ellipse cx="18" cy="-6" rx="10" ry="5"/><ellipse cx="-14" cy="-4" rx="9" ry="4.6"/></g>
      </g>
      <g stroke="#2a2118" stroke-width="3" fill="none" opacity=".7"><path d="M-88 -44 q6 54 88 54 q82 0 88 -54"/></g>
    </g>
    <g transform="translate(272,56)" opacity=".9">
      <path d="M0 40 L0 4" stroke="#6b5236" stroke-width="4"/>
      <g fill="#3f7a2c">
        <path d="M0 6 q-26 -8 -36 -24 q26 4 38 18z"/><path d="M0 6 q26 -8 36 -24 q-26 4 -38 18z"/>
        <path d="M0 0 q-14 -20 -10 -38 q16 16 14 36z"/><path d="M0 0 q14 -20 10 -38 q-16 16 -14 36z"/>
      </g>
    </g>`);

  global.DISH_ART = DISH_ART;
})(window);
