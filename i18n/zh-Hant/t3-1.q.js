/* t3-1.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't3-1.q', {
  questions: {

    // ── t3-1-q001 · numeric · foundation · SL · SL 3.1 · 2 marks
    "t3-1-q001": {
      // EN: <p>Find the straight-line distance between the points <span class="chem">A(1, -2, 4)</span> and <span class="chem">B(3, 4, -2)</span> in three-dimensional space.</p>
      stem: "<p>求 (Find) 三維空間中兩點 <span class=\"chem\">A(1, -2, 4)</span> 與 <span class=\"chem\">B(3, 4, -2)</span> 之間的直線距離。</p>",
      hints: [
        // EN: Use the 3D distance formula: <span class="chem">d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)</span>.
        "使用 3D 距離公式：<span class=\"chem\">d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)</span>。",
        // EN: The differences in the coordinates are <span class="chem">2</span>, <span class="chem">6</span>, and <span class="chem">-6</span>.
        "各坐標之差分別為 <span class=\"chem\">2</span>、<span class=\"chem\">6</span> 及 <span class=\"chem\">-6</span>。",
      ],
      // EN: <div class="worked__math"><i>d</i> = √((3 − 1)<sup>2</sup> + (4 − (−2))<sup>2</sup> + (−2 − 4)<sup>2</sup>) = √(4 + 36 + 36) = <b>√76 ≈ 8.72</b></div>
      solution: "<div class=\"worked__math\"><i>d</i> = √((3 − 1)<sup>2</sup> + (4 − (−2))<sup>2</sup> + (−2 − 4)<sup>2</sup>) = √(4 + 36 + 36) = <b>√76 ≈ 8.72</b></div>",
    },

    // ── t3-1-q002 · mcq · foundation · SL · SL 3.1 · 2 marks
    "t3-1-q002": {
      // EN: <p>The midpoint of the line segment joining <span class="chem">P(2, -5, 8)</span> and <span class="chem">Q(x, y, z)</span> is <span class="chem">M(-1, 1, 3)</span>. What are the coordinates of <span class="chem">Q</span>?</p>
      stem: "<p>連接 <span class=\"chem\">P(2, -5, 8)</span> 與 <span class=\"chem\">Q(x, y, z)</span> 的線段之中點為 <span class=\"chem\">M(-1, 1, 3)</span>。<span class=\"chem\">Q</span> 的坐標是甚麼？</p>",
      options: [
        // EN: <span class="chem">(-4, 7, -2)</span>
        "<span class=\"chem\">(-4, 7, -2)</span>",
        // EN: <span class="chem">(0.5, -2, 5.5)</span>
        "<span class=\"chem\">(0.5, -2, 5.5)</span>",
        // EN: <span class="chem">(-3, 6, -5)</span>
        "<span class=\"chem\">(-3, 6, -5)</span>",
        // EN: <span class="chem">(4, -7, 2)</span>
        "<span class=\"chem\">(4, -7, 2)</span>",
      ],
      hints: [
        // EN: Use <span class="chem">((2 + x)/2, (-5 + y)/2, (8 + z)/2) = (-1, 1, 3)</span>.
        "使用 <span class=\"chem\">((2 + x)/2, (-5 + y)/2, (8 + z)/2) = (-1, 1, 3)</span>。",
        // EN: Multiply the coordinates of <span class="chem">M</span> by 2 and subtract <span class="chem">P</span>: <span class="chem">Q = 2M - P</span>.
        "將 <span class=\"chem\">M</span> 的坐標乘以 2 再減去 <span class=\"chem\">P</span>：<span class=\"chem\">Q = 2M - P</span>。",
      ],
      // EN: <div class="worked__math"><i>x</i> = 2(−1) − 2 = −4, &nbsp; <i>y</i> = 2(1) − (−5) = 7, &nbsp; <i>z</i> = 2(3) − 8 = −2 ⇒ <b>(−4, 7, −2)</b></div>
      solution: "<div class=\"worked__math\"><i>x</i> = 2(−1) − 2 = −4, &nbsp; <i>y</i> = 2(1) − (−5) = 7, &nbsp; <i>z</i> = 2(3) − 8 = −2 ⇒ <b>(−4, 7, −2)</b></div>",
      misconception: {
        // EN (option B): You averaged P and M instead of treating M as the midpoint between P and Q.
        "1": "你求了 P 與 M 的平均值，而非把 M 視為 P 與 Q 之間的中點。",
        // EN (option C): You found the displacement vector PM = M − P instead of solving (P + Q)/2 = M.
        "2": "你求了位移向量 PM = M − P，而非解 (P + Q)/2 = M。",
        // EN (option D): You reversed the signs when solving 2 + x = −2, −5 + y = 2, and 8 + z = 6.
        "3": "你在解 2 + x = −2、−5 + y = 2 及 8 + z = 6 時把正負號弄反了。",
      },
    },

    // ── t3-1-q003 · mcq · foundation · SL · SL 3.1 · 2 marks
    "t3-1-q003": {
      // EN: <p>A right circular cone has base radius <span class="mono">5 cm</span> and vertical height <span class="mono">12 cm</span>. What is the <strong>total surface area</strong> of the solid cone (including its circular base)?</p>
      stem: "<p>一個直立圓錐體的底半徑為 <span class=\"mono\">5 cm</span>，垂直高為 <span class=\"mono\">12 cm</span>。該實心圓錐體的<strong>總表面面積</strong>（包括圓形底面）是多少？</p>",
      options: [
        // EN: <span class="chem">90pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">90pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class="chem">65pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">65pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class="chem">85pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">85pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class="chem">100pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">100pi</span> <span class=\"unit\">cm2</span>",
      ],
      hints: [
        // EN: First find the slant height <span class="chem">l = sqrt(r^2 + h^2)</span> using Pythagoras.
        "先利用畢氏定理求斜高 <span class=\"chem\">l = sqrt(r^2 + h^2)</span>。",
        // EN: Total surface area = curved surface <span class="chem">πrl</span> + base area <span class="chem">πr^2</span>.
        "總表面面積 = 曲面面積 <span class=\"chem\">πrl</span> + 底面積 <span class=\"chem\">πr^2</span>。",
      ],
      // EN: <div class="worked__math"><i>l</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = 13 cm ⇒ <i>A</i><sub>total</sub> = <i>π</i>(5)(13) + <i>π</i>(5)<sup>2</sup> = 65<i>π</i> + 25<i>π</i> = <b>90<i>π</i> cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>l</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = 13 cm ⇒ <i>A</i><sub>total</sub> = <i>π</i>(5)(13) + <i>π</i>(5)<sup>2</sup> = 65<i>π</i> + 25<i>π</i> = <b>90<i>π</i> cm<sup>2</sup></b></div>",
      misconception: {
        // EN (option B): 65π cm² is only the curved surface area πrl. A solid cone also includes the circular base of area πr² = 25π cm².
        "1": "65π cm² 只是曲面面積 πrl。實心圓錐體還包括面積為 πr² = 25π cm² 的圓形底面。",
        // EN (option C): You used the vertical height h = 12 instead of the slant height l = √(5² + 12²) = 13 in πrl + πr².
        "2": "你在 πrl + πr² 中誤用了垂直高 h = 12，而非斜高 l = √(5² + 12²) = 13。",
        // EN (option D): 100π cm³ is the volume (1/3)π(5²)(12) of the cone, not its surface area.
        "3": "100π cm³ 是該圓錐體的體積 (1/3)π(5²)(12)，而非表面面積。",
      },
    },

    // ── t3-1-q004 · mcq · foundation · SL · SL 3.4 · 1 mark
    "t3-1-q004": {
      // EN: <p>Express <span class="mono">210°</span> in radians as an exact multiple of <span class="chem">pi</span>.</p>
      stem: "<p>把 <span class=\"mono\">210°</span> 以弧度表示為 <span class=\"chem\">pi</span> 的準確倍數。</p>",
      options: [
        // EN: <span class="chem">7pi / 6</span>
        "<span class=\"chem\">7pi / 6</span>",
        // EN: <span class="chem">5pi / 6</span>
        "<span class=\"chem\">5pi / 6</span>",
        // EN: <span class="chem">4pi / 3</span>
        "<span class=\"chem\">4pi / 3</span>",
        // EN: <span class="chem">7pi / 4</span>
        "<span class=\"chem\">7pi / 4</span>",
      ],
      hints: [
        // EN: Multiply by <span class="chem">pi / 180°</span> and simplify the fraction <span class="chem">210 / 180</span>.
        "乘以 <span class=\"chem\">pi / 180°</span> 並約簡分數 <span class=\"chem\">210 / 180</span>。",
        // EN: Notice that <span class="mono">210° = 7 × 30°</span> and <span class="mono">30° = π/6</span>.
        "留意 <span class=\"mono\">210° = 7 × 30°</span> 且 <span class=\"mono\">30° = π/6</span>。",
      ],
      // EN: <div class="worked__math">210° × <span class="frac"><span><i>π</i></span><span>180°</span></span> = <span class="frac"><span>7<i>π</i></span><span>6</span></span></div>
      solution: "<div class=\"worked__math\">210° × <span class=\"frac\"><span><i>π</i></span><span>180°</span></span> = <span class=\"frac\"><span>7<i>π</i></span><span>6</span></span></div>",
      misconception: {
        // EN (option B): 5π/6 is 150° (180° − 30°), whereas 210° is 180° + 30°.
        "1": "5π/6 是 150°（180° − 30°），而 210° 是 180° + 30°。",
        // EN (option C): 4π/3 is 240° (180° + 60°).
        "2": "4π/3 是 240°（180° + 60°）。",
        // EN (option D): 7π/4 is 315°.
        "3": "7π/4 是 315°。",
      },
    },

    // ── t3-1-q005 · numeric · foundation · SL · SL 3.4 · 2 marks
    "t3-1-q005": {
      // EN: <p>A circular sector has radius <span class="mono">10 cm</span> and central angle <span class="chem">theta = 1.4</span> radians. Calculate the area of the sector in <span class="unit">cm2</span>.</p>
      stem: "<p>一個圓扇形的半徑為 <span class=\"mono\">10 cm</span>，圓心角為 <span class=\"chem\">theta = 1.4</span> 弧度。計算 (Calculate) 該扇形的面積（以 <span class=\"unit\">cm2</span> 為單位）。</p>",
      hints: [
        // EN: Use the sector area formula <span class="chem">A = (1/2)r^2theta</span>.
        "使用扇形面積公式 <span class=\"chem\">A = (1/2)r^2theta</span>。",
        // EN: Substitute <span class="chem">r = 10</span> and <span class="chem">theta = 1.4</span>.
        "代入 <span class=\"chem\">r = 10</span> 及 <span class=\"chem\">theta = 1.4</span>。",
      ],
      // EN: <div class="worked__math"><i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(10)<sup>2</sup>(1.4) = 50 × 1.4 = <b>70 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> = <span class=\"frac\"><span>1</span><span>2</span></span>(10)<sup>2</sup>(1.4) = 50 × 1.4 = <b>70 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q006 · numeric · foundation · SL · SL 3.2 · 3 marks
    "t3-1-q006": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">a = 7 cm</span>, <span class="chem">b = 8 cm</span>, and <span class="chem">angle C = 60°</span>. Find the exact length of side <span class="chem">c</span>.</p>
      stem: "<p>在三角形 <span class=\"chem\">ABC</span> 中，<span class=\"chem\">a = 7 cm</span>，<span class=\"chem\">b = 8 cm</span>，且 <span class=\"chem\">angle C = 60°</span>。求 (Find) 邊 <span class=\"chem\">c</span> 的準確長度。</p>",
      hints: [
        // EN: You know two sides and the included angle (<span class="chem">SAS</span>), so use the Cosine Rule: <span class="chem">c^2 = a^2 + b^2 - 2ab cos C</span>.
        "已知兩邊及其夾角（<span class=\"chem\">SAS</span>），故使用餘弦定律：<span class=\"chem\">c^2 = a^2 + b^2 - 2ab cos C</span>。",
        // EN: Recall that <span class="chem">cos 60° = 1/2</span>.
        "記得 <span class=\"chem\">cos 60° = 1/2</span>。",
      ],
      // EN: <div class="worked__math"><i>c</i><sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> − 2(7)(8) cos 60° = 49 + 64 − 56 = 57 ⇒ <i>c</i> = <b>√57 cm</b></div>
      solution: "<div class=\"worked__math\"><i>c</i><sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> − 2(7)(8) cos 60° = 49 + 64 − 56 = 57 ⇒ <i>c</i> = <b>√57 cm</b></div>",
    },

    // ── t3-1-q007 · mcq · exam · SL · SL 3.2 · 3 marks
    "t3-1-q007": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> In triangle <span class="chem">ABC</span>, the side lengths are <span class="chem">a = 5 cm</span>, <span class="chem">b = 6 cm</span>, and <span class="chem">c = 8 cm</span>. What is the exact value of <span class="chem">cos C</span>, and what does this tell you about <span class="chem">angle C</span>?</p>
      stem: "<p><strong>[Paper 1 — 不可用 GDC]</strong> 在三角形 <span class=\"chem\">ABC</span> 中，三邊長度為 <span class=\"chem\">a = 5 cm</span>、<span class=\"chem\">b = 6 cm</span> 及 <span class=\"chem\">c = 8 cm</span>。<span class=\"chem\">cos C</span> 的準確值是多少？這說明 <span class=\"chem\">angle C</span> 是甚麼角？</p>",
      options: [
        // EN: <span class="chem">cos C = -1/20</span>, so <span class="chem">angle C</span> is obtuse
        "<span class=\"chem\">cos C = -1/20</span>，故 <span class=\"chem\">angle C</span> 為鈍角",
        // EN: <span class="chem">cos C = 1/20</span>, so <span class="chem">angle C</span> is acute
        "<span class=\"chem\">cos C = 1/20</span>，故 <span class=\"chem\">angle C</span> 為銳角",
        // EN: <span class="chem">cos C = -3/40</span>, so <span class="chem">angle C</span> is obtuse
        "<span class=\"chem\">cos C = -3/40</span>，故 <span class=\"chem\">angle C</span> 為鈍角",
        // EN: <span class="chem">cos C = 0</span>, so <span class="chem">angle C = 90°</span>
        "<span class=\"chem\">cos C = 0</span>，故 <span class=\"chem\">angle C = 90°</span>",
      ],
      hints: [
        // EN: Use the rearranged Cosine Rule: <span class="chem">cos C = (a^2 + b^2 - c^2) / (2ab)</span>.
        "使用移項後的餘弦定律：<span class=\"chem\">cos C = (a^2 + b^2 - c^2) / (2ab)</span>。",
        // EN: A negative cosine on <span class="chem">(0°, 180°)</span> means the angle lies in Quadrant II (obtuse).
        "在 <span class=\"chem\">(0°, 180°)</span> 內餘弦值為負，表示該角位於第二象限（鈍角）。",
      ],
      // EN: <div class="worked__math">cos <i>C</i> = <span class="frac"><span>5<sup>2</sup> + 6<sup>2</sup> − 8<sup>2</sup></span><span>2(5)(6)</span></span> = <span class="frac"><span>25 + 36 − 64</span><span>60</span></span> = −<span class="frac"><span>3</span><span>60</span></span> = <b>−<span class="frac"><span>1</span><span>20</span></span></b> (obtuse since cos <i>C</i> &lt; 0)</div>
      solution: "<div class=\"worked__math\">cos <i>C</i> = <span class=\"frac\"><span>5<sup>2</sup> + 6<sup>2</sup> − 8<sup>2</sup></span><span>2(5)(6)</span></span> = <span class=\"frac\"><span>25 + 36 − 64</span><span>60</span></span> = −<span class=\"frac\"><span>3</span><span>60</span></span> = <b>−<span class=\"frac\"><span>1</span><span>20</span></span></b>（因 cos <i>C</i> &lt; 0 故為鈍角）</div>",
      misconception: {
        // EN (option B): You computed (c² − a² − b²)/(2ab) instead of (a² + b² − c²)/(2ab), flipping the sign.
        "1": "你計算了 (c² − a² − b²)/(2ab) 而非 (a² + b² − c²)/(2ab)，導致正負號反轉。",
        // EN (option C): Check your arithmetic: 25 + 36 − 64 = −3, and 2(5)(6) = 60, so −3/60 simplifies to −1/20.
        "2": "核對算術：25 + 36 − 64 = −3，且 2(5)(6) = 60，故 −3/60 約簡為 −1/20。",
        // EN (option D): 5² + 6² = 61 ≠ 64, so this is not a right-angled triangle.
        "3": "5² + 6² = 61 ≠ 64，因此這不是直角三角形。",
      },
    },

    // ── t3-1-q008 · numeric · exam · SL · SL 3.2, 3.5 · 4 marks
    "t3-1-q008": {
      // EN: <p><strong>[Paper 2 — GDC]</strong> In triangle <span class="chem">ABC</span>, <span class="chem">AB = 12 cm</span>, <span class="chem">BC = 9 cm</span>, and <span class="chem">angle BAC = 42°</span>. Given that <span class="chem">angle ACB</span> is <strong>obtuse</strong>, find the size of <span class="chem">angle ACB</span> in degrees to 3 significant figures.</p>
      stem: "<p><strong>[Paper 2 — 可用 GDC]</strong> 在三角形 <span class=\"chem\">ABC</span> 中，<span class=\"chem\">AB = 12 cm</span>，<span class=\"chem\">BC = 9 cm</span>，且 <span class=\"chem\">angle BAC = 42°</span>。已知 <span class=\"chem\">angle ACB</span> 為<strong>鈍角</strong>，求 (find) <span class=\"chem\">angle ACB</span> 的大小（以度為單位，準確至 3 位有效數字）。</p>",
      hints: [
        // EN: Use the Sine Rule <span class="chem">(sin C)/12 = (sin 42°)/9</span> to find the acute reference angle <span class="chem">C_1</span>.
        "使用正弦定律 <span class=\"chem\">(sin C)/12 = (sin 42°)/9</span> 求銳角參考角 <span class=\"chem\">C_1</span>。",
        // EN: Since <span class="chem">angle ACB</span> is obtuse, subtract <span class="chem">C_1</span> from <span class="mono">180°</span>.
        "由於 <span class=\"chem\">angle ACB</span> 為鈍角，用 <span class=\"mono\">180°</span> 減去 <span class=\"chem\">C_1</span>。",
      ],
      // EN: <div class="worked__math">sin <i>C</i> = <span class="frac"><span>12 sin 42°</span><span>9</span></span> ≈ 0.892174 ⇒ <i>C</i><sub>1</sub> = 63.148°</div><div class="worked__math"><i>C</i><sub>obtuse</sub> = 180° − 63.148° = <b>117°</b> (116.852°)</div>
      solution: "<div class=\"worked__math\">sin <i>C</i> = <span class=\"frac\"><span>12 sin 42°</span><span>9</span></span> ≈ 0.892174 ⇒ <i>C</i><sub>1</sub> = 63.148°</div><div class=\"worked__math\"><i>C</i><sub>obtuse</sub> = 180° − 63.148° = <b>117°</b> (116.852°)</div>",
    },

    // ── t3-1-q009 · mcq · exam · SL · SL 3.3 · 3 marks
    "t3-1-q009": {
      // EN: <p>Port <span class="chem">B</span> is on a three-figure bearing of <span class="mono">115°</span> from Port <span class="chem">A</span>. What is the three-figure back-bearing of Port <span class="chem">A</span> <strong>from</strong> Port <span class="chem">B</span>?</p>
      stem: "<p>港口 <span class=\"chem\">B</span> 在由港口 <span class=\"chem\">A</span> 測得的三位方位角 <span class=\"mono\">115°</span> 處。港口 <span class=\"chem\">A</span> <strong>由</strong>港口 <span class=\"chem\">B</span> 測得的三位反方位角是多少？</p>",
      options: [
        // EN: <span class="mono">295°</span>
        "<span class=\"mono\">295°</span>",
        // EN: <span class="mono">065°</span>
        "<span class=\"mono\">065°</span>",
        // EN: <span class="mono">245°</span>
        "<span class=\"mono\">245°</span>",
        // EN: <span class="mono">155°</span>
        "<span class=\"mono\">155°</span>",
      ],
      hints: [
        // EN: The bearing from <span class="chem">B</span> back to <span class="chem">A</span> points in the exact opposite direction to the vector from <span class="chem">A</span> to <span class="chem">B</span>.
        "由 <span class=\"chem\">B</span> 返回 <span class=\"chem\">A</span> 的方位角與由 <span class=\"chem\">A</span> 到 <span class=\"chem\">B</span> 的向量方向完全相反。",
        // EN: Add <span class="mono">180°</span> to <span class="mono">115°</span>.
        "將 <span class=\"mono\">115°</span> 加上 <span class=\"mono\">180°</span>。",
      ],
      // EN: <div class="worked__math">Back-bearing = 115° + 180° = <b>295°</b></div>
      solution: "<div class=\"worked__math\">反方位角 = 115° + 180° = <b>295°</b></div>",
      misconception: {
        // EN (option B): 065° is 180° − 115° (the co-interior angle between South at A and North at B), not the clockwise angle from North at B.
        "1": "065° 是 180° − 115°（A 點正南與 B 點正北之間的同旁內角），而非從 B 點正北起順時針量度的角度。",
        // EN (option C): 245° is 360° − 115° (counter-clockwise from North at A).
        "2": "245° 是 360° − 115°（從 A 點正北起逆時針量度）。",
        // EN (option D): You subtracted from 270° instead of adding 180°.
        "3": "你用 270° 相減，而非加上 180°。",
      },
    },

    // ── t3-1-q010 · numeric · exam · SL · SL 3.3 · 4 marks
    "t3-1-q010": {
      // EN: <p>A ship sails from harbour <span class="chem">O</span> for <span class="mono">15 km</span> on a bearing of <span class="mono">040°</span> to point <span class="chem">P</span>, and then sails <span class="mono">22 km</span> on a bearing of <span class="mono">160°</span> to point <span class="chem">Q</span>. Calculate the direct distance <span class="chem">OQ</span> in <span class="unit">km</span>, to 3 significant figures.</p>
      stem: "<p>一艘船從海港 <span class=\"chem\">O</span> 出發，沿方位角 <span class=\"mono\">040°</span> 航行 <span class=\"mono\">15 km</span> 至點 <span class=\"chem\">P</span>，再沿方位角 <span class=\"mono\">160°</span> 航行 <span class=\"mono\">22 km</span> 至點 <span class=\"chem\">Q</span>。計算 (Calculate) <span class=\"chem\">OQ</span> 的直線距離（以 <span class=\"unit\">km</span> 為單位，準確至 3 位有效數字）。</p>",
      hints: [
        // EN: Draw North arrows at <span class="chem">O</span> and <span class="chem">P</span>. The angle between <span class="chem">PO</span> and South at <span class="chem">P</span> is <span class="mono">40°</span>, and the angle between North at <span class="chem">P</span> and <span class="chem">PQ</span> is <span class="mono">160°</span>.
        "在 <span class=\"chem\">O</span> 與 <span class=\"chem\">P</span> 處畫正北箭號。<span class=\"chem\">PO</span> 與 <span class=\"chem\">P</span> 點正南之間的夾角為 <span class=\"mono\">40°</span>，而 <span class=\"chem\">P</span> 點正北與 <span class=\"chem\">PQ</span> 之間的夾角為 <span class=\"mono\">160°</span>。",
        // EN: This makes the interior angle <span class="chem">angle OPQ = (180° - 160°) + 40° = 60°</span>. Now apply the Cosine Rule to triangle <span class="chem">OPQ</span>!
        "這使內角 <span class=\"chem\">angle OPQ = (180° - 160°) + 40° = 60°</span>。現在對三角形 <span class=\"chem\">OPQ</span> 應用餘弦定律！",
      ],
      // EN: <div class="worked__math">∠<i>OPQ</i> = 20° + 40° = 60°</div><div class="worked__math"><i>OQ</i> = √(15<sup>2</sup> + 22<sup>2</sup> − 2(15)(22) cos 60°) = √(225 + 484 − 330) = √379 ≈ <b>19.5 km</b></div>
      solution: "<div class=\"worked__math\">∠<i>OPQ</i> = 20° + 40° = 60°</div><div class=\"worked__math\"><i>OQ</i> = √(15<sup>2</sup> + 22<sup>2</sup> − 2(15)(22) cos 60°) = √(225 + 484 − 330) = √379 ≈ <b>19.5 km</b></div>",
    },

    // ── t3-1-q011 · numeric · exam · SL · SL 3.4 · 4 marks
    "t3-1-q011": {
      // EN: <p>A circle has radius <span class="chem">r = 12 cm</span>. A chord <span class="chem">AB</span> subtends a central angle of <span class="chem">theta = 2.1</span> radians at the centre <span class="chem">O</span>. Calculate the area of the minor circular segment bounded by the chord <span class="chem">AB</span> and the arc <span class="chem">AB</span>, to 3 significant figures.</p>
      stem: "<p>一個圓的半徑為 <span class=\"chem\">r = 12 cm</span>。弦 <span class=\"chem\">AB</span> 在圓心 <span class=\"chem\">O</span> 所對的圓心角為 <span class=\"chem\">theta = 2.1</span> 弧度。計算 (Calculate) 由弦 <span class=\"chem\">AB</span> 與弧 <span class=\"chem\">AB</span> 所圍成的劣弓形面積，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Use <span class="chem">A_{segment} = (1/2)r^2(theta - sin(theta))</span> with <span class="chem">theta</span> in radians.
        "使用 <span class=\"chem\">A_{segment} = (1/2)r^2(theta - sin(theta))</span>，其中 <span class=\"chem\">theta</span> 以弧度為單位。",
        // EN: Ensure your GDC is in <strong>radians</strong> when evaluating <span class="chem">sin(2.1)</span>.
        "計算 <span class=\"chem\">sin(2.1)</span> 時確保你的 GDC 處於<strong>弧度 (RAD)</strong> 模式。",
      ],
      // EN: <div class="worked__math"><i>A</i><sub>segment</sub> = <span class="frac"><span>1</span><span>2</span></span>(12)<sup>2</sup>(2.1 − sin 2.1) = 72(2.1 − 0.863209) ≈ <b>89.0 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i><sub>segment</sub> = <span class=\"frac\"><span>1</span><span>2</span></span>(12)<sup>2</sup>(2.1 − sin 2.1) = 72(2.1 − 0.863209) ≈ <b>89.0 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q012 · multi · exam · SL · SL 3.5 · 2 marks
    "t3-1-q012": {
      // EN: <p>In triangle <span class="chem">ABC</span>, you are given <span class="chem">angle A = 30°</span> and side <span class="chem">b = 16 cm</span>. For which of the following values of the opposite side <span class="chem">a</span> are there <strong>two distinct possible triangles</strong> <span class="chem">ABC</span>? Select all that apply.</p>
      stem: "<p>在三角形 <span class=\"chem\">ABC</span> 中，已知 <span class=\"chem\">angle A = 30°</span> 及邊 <span class=\"chem\">b = 16 cm</span>。對邊 <span class=\"chem\">a</span> 取下列哪些數值時，會存在<strong>兩個相異的可能三角形</strong> <span class=\"chem\">ABC</span>？選出所有適用選項。</p>",
      options: [
        // EN: <span class="chem">a = 6 cm</span>
        "<span class=\"chem\">a = 6 cm</span>",
        // EN: <span class="chem">a = 8 cm</span>
        "<span class=\"chem\">a = 8 cm</span>",
        // EN: <span class="chem">a = 10 cm</span>
        "<span class=\"chem\">a = 10 cm</span>",
        // EN: <span class="chem">a = 14 cm</span>
        "<span class=\"chem\">a = 14 cm</span>",
        // EN: <span class="chem">a = 18 cm</span>
        "<span class=\"chem\">a = 18 cm</span>",
      ],
      hints: [
        // EN: Calculate the perpendicular height <span class="chem">h = b sin A = 16 sin 30° = 8 cm</span>.
        "計算垂直高 <span class=\"chem\">h = b sin A = 16 sin 30° = 8 cm</span>。",
        // EN: Two distinct triangles exist if and only if <span class="chem">b sin A &lt; a &lt; b</span>, i.e. <span class="chem">8 &lt; a &lt; 16</span>.
        "兩個相異三角形存在，當且僅當 <span class=\"chem\">b sin A &lt; a &lt; b</span>，即 <span class=\"chem\">8 &lt; a &lt; 16</span>。",
      ],
      // EN: <p>Here <span class="chem">b sin A = 16 sin 30° = 8 cm</span>. The ambiguous two-triangle condition is <span class="chem">8 &lt; a &lt; 16</span>, which is satisfied by <span class="chem">a = 10 cm</span> and <span class="chem">a = 14 cm</span>.</p>
      solution: "<p>這裏 <span class=\"chem\">b sin A = 16 sin 30° = 8 cm</span>。兩義情況的雙三角形條件為 <span class=\"chem\">8 &lt; a &lt; 16</span>，符合條件的是 <span class=\"chem\">a = 10 cm</span> 與 <span class=\"chem\">a = 14 cm</span>。</p>",
      misconception: {
        // EN (option A): Since b sin A = 16 sin 30° = 8 cm, a = 6 cm is shorter than the perpendicular height, giving 0 triangles.
        "0": "由於 b sin A = 16 sin 30° = 8 cm，a = 6 cm 短於垂直高，得出 0 個三角形。",
        // EN (option B): When a = b sin A = 8 cm, side a just touches the base at 90°, forming exactly 1 right-angled triangle.
        "1": "當 a = b sin A = 8 cm 時，邊 a 剛好以 90° 觸及底邊，只構成 1 個直角三角形。",
        // EN (option E): When a ≥ b (18 ≥ 16), the obtuse supplement 180° − B would make A + B > 180°, so only 1 triangle is possible.
        "4": "當 a ≥ b（18 ≥ 16）時，鈍角補角 180° − B 會使 A + B > 180°，故只可能有 1 個三角形。",
      },
    },

    // ── t3-1-q013 · order · exam · SL · SL 3.1 · 3 marks
    "t3-1-q013": {
      // EN: <p>Arrange the steps in logical order to find the acute angle between the space diagonal <span class="chem">AG</span> of a cuboid <span class="chem">ABCDEFGH</span> (with base <span class="mono">6 cm × 8 cm</span> and height <span class="mono">5 cm</span>) and its horizontal base <span class="chem">ABCD</span>.</p>
      stem: "<p>按邏輯順序排列以下步驟，以求長方體 <span class=\"chem\">ABCDEFGH</span>（底面為 <span class=\"mono\">6 cm × 8 cm</span>，高為 <span class=\"mono\">5 cm</span>）的空間對角線 <span class=\"chem\">AG</span> 與水平底面 <span class=\"chem\">ABCD</span> 之間的銳角。</p>",
      options: [
        // EN: Identify the vertical edge CG = 5 cm perpendicular to the base ABCD, so that AC is the orthogonal projection (shadow) of AG on the base.
        "識別垂直於底面 ABCD 的鉛垂稜 CG = 5 cm，使得 AC 為 AG 在底面上的正射影（投影）。",
        // EN: Use 2D Pythagoras in the horizontal base rectangle ABCD to find the base diagonal AC = √(6² + 8²) = 10 cm.
        "在水平底面長方形 ABCD 中運用 2D 畢氏定理，求得底面對角線 AC = √(6² + 8²) = 10 cm。",
        // EN: Form the right-angled vertical triangle ACG with right angle at C, adjacent side AC = 10 cm, and opposite side CG = 5 cm.
        "構成直角在 C 的垂直直角三角形 ACG，其中鄰邊 AC = 10 cm，對邊 CG = 5 cm。",
        // EN: Compute ∠GAC = arctan(5 / 10) = arctan(0.5) ≈ 26.6°.
        "計算 ∠GAC = arctan(5 / 10) = arctan(0.5) ≈ 26.6°。",
      ],
      hints: [
        // EN: First identify the shadow of <span class="chem">AG</span> on the horizontal base plane.
        "先找出 <span class=\"chem\">AG</span> 在水平底面上的投影。",
        // EN: Next find the length of that shadow before using right-angled trigonometry.
        "接着求該投影的長度，然後再運用直角三角形三角比。",
      ],
      // EN: <p>Drop a perpendicular from <span class="chem">G</span> to <span class="chem">C</span> on the base, find the base diagonal <span class="chem">AC = 10 cm</span>, set up right-angled triangle <span class="chem">ACG</span>, and evaluate <span class="chem">arctan(5/10) ≈ 26.6°</span>.</p>
      solution: "<p>從 <span class=\"chem\">G</span> 向底面作垂線至 <span class=\"chem\">C</span>，求底面對角線 <span class=\"chem\">AC = 10 cm</span>，建立直角三角形 <span class=\"chem\">ACG</span>，並計算 <span class=\"chem\">arctan(5/10) ≈ 26.6°</span>。</p>",
    },

    // ── t3-1-q014 · short · exam · SL · SL 3.4 · 5 marks
    "t3-1-q014": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> A sector of a circle of radius <span class="chem">r</span> cm has central angle <span class="chem">theta</span> radians. The perimeter of the sector is <span class="mono">20 cm</span> and the area of the sector is <span class="mono">24 cm²</span>. Find the two possible pairs of values of <span class="chem">(r, theta)</span>.</p>
      stem: "<p><strong>[Paper 1 — 不可用 GDC]</strong> 一個半徑為 <span class=\"chem\">r</span> cm 的圓扇形，其圓心角為 <span class=\"chem\">theta</span> 弧度。該扇形的周界為 <span class=\"mono\">20 cm</span>，面積為 <span class=\"mono\">24 cm²</span>。求 (Find) <span class=\"chem\">(r, theta)</span> 的兩對可能值。</p>",
      hints: [
        // EN: Write the two equations: <span class="chem">2r + rθ = 20</span> and <span class="chem">(1/2)r^2theta = 24</span>.
        "列出兩條方程：<span class=\"chem\">2r + rθ = 20</span> 與 <span class=\"chem\">(1/2)r^2theta = 24</span>。",
        // EN: Isolate <span class="chem">rθ = 20 - 2r</span> from the first equation and substitute it into <span class="chem">(1/2)r(rθ) = 24</span>.
        "從第一式抽出 <span class=\"chem\">rθ = 20 - 2r</span>，並代入 <span class=\"chem\">(1/2)r(rθ) = 24</span>。",
      ],
      // EN: <p>Either <i>r</i> = 4 cm and <i>θ</i> = 3 rad, or <i>r</i> = 6 cm and <i>θ</i> = 4/3 rad.</p>
      answer: "<p><i>r</i> = 4 cm 及 <i>θ</i> = 3 rad，或 <i>r</i> = 6 cm 及 <i>θ</i> = 4/3 rad。</p>",
      markscheme: [
        // EN: M1: Set up the perimeter equation 2r + rθ = 20 and area equation (1/2)r²θ = 24.
        "M1：列出周界方程 2r + rθ = 20 及面積方程 (1/2)r²θ = 24。",
        // EN: M1: Express rθ = 20 − 2r and substitute into the area equation: (1/2)r(20 − 2r) = 24.
        "M1：寫出 rθ = 20 − 2r 並代入面積方程：(1/2)r(20 − 2r) = 24。",
        // EN: A1: Simplify to the quadratic r² − 10r + 24 = 0 ⇒ (r − 4)(r − 6) = 0.
        "A1：化簡為二次方程 r² − 10r + 24 = 0 ⇒ (r − 4)(r − 6) = 0。",
        // EN: A1: Obtain r = 4 cm or r = 6 cm.
        "A1：求得 r = 4 cm 或 r = 6 cm。",
        // EN: A1: Back-substitute into θ = (20 − 2r)/r to get (r = 4, θ = 3) and (r = 6, θ = 4/3).
        "A1：代回 θ = (20 − 2r)/r 得 (r = 4, θ = 3) 及 (r = 6, θ = 4/3)。",
      ],
    },

    // ── t3-1-q015 · numeric · challenge · SL · SL 3.2, 3.5 · 5 marks
    "t3-1-q015": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> In triangle <span class="chem">ABC</span>, <span class="chem">AB = 6 cm</span>, <span class="chem">BC = 4 cm</span>, and <span class="chem">cos(angle BAC) = 3/4</span>. Two different triangles fit this information. Given also that <span class="chem">angle ACB</span> is <strong>obtuse</strong>, find the length of <span class="chem">AC</span> (in <span class="unit">cm</span>).</p>
      stem: "<p><strong>[Paper 1 — 不可用 GDC]</strong> 在三角形 <span class=\"chem\">ABC</span> 中，<span class=\"chem\">AB = 6 cm</span>，<span class=\"chem\">BC = 4 cm</span>，且 <span class=\"chem\">cos(angle BAC) = 3/4</span>。符合這些資料的三角形有兩個。若另知 <span class=\"chem\">angle ACB</span> 為<strong>鈍角</strong>，求 (Find) <span class=\"chem\">AC</span> 的長度（以 <span class=\"unit\">cm</span> 為單位）。</p>",
      hints: [
        // EN: Decode: this is the ambiguous case in cosine-rule form. Two lengths of <span class="chem">AC</span> are possible; the word "obtuse" tells you which one to keep. Find both, then test each.
        "解碼：這是以餘弦定律形式出現的兩義情況。<span class=\"chem\">AC</span> 有兩個可能長度，「鈍角」一詞告訴你保留哪一個。先求出兩者，再逐一檢驗。",
        // EN: Let <span class="chem">AC = b</span> and write the Cosine Rule using <span class="chem">angle A</span>: <span class="chem">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span>.
        "設 <span class=\"chem\">AC = b</span>，以 <span class=\"chem\">angle A</span> 寫出餘弦定律：<span class=\"chem\">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span>。",
        // EN: Substitute the given values to form a quadratic in <span class="chem">b</span>: <span class="chem">16 = 36 + b^2 - 2(6)(b)(3/4)</span>, i.e. <span class="chem">b^2 - 9b + 20 = 0</span>.
        "代入已知數值組成關於 <span class=\"chem\">b</span> 的二次方程：<span class=\"chem\">16 = 36 + b^2 - 2(6)(b)(3/4)</span>，即 <span class=\"chem\">b^2 - 9b + 20 = 0</span>。",
        // EN: For each root, find the sign of <span class="chem">cos C = (BC^2 + AC^2 - AB^2)/(2(BC)(AC))</span>. A negative value means <span class="chem">angle ACB</span> is obtuse.
        "對每個根，判斷 <span class=\"chem\">cos C = (BC^2 + AC^2 - AB^2)/(2(BC)(AC))</span> 的正負。若為負，則 <span class=\"chem\">angle ACB</span> 為鈍角。",
      ],
      // EN: <div class="worked__math">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class="frac"><span>3</span><span>4</span></span> ⇒ <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0 ⇒ (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class="worked__math">If <i>b</i> = 4: cos <i>C</i> = <span class="frac"><span>16 + 16 − 36</span><span>2(4)(4)</span></span> = −<span class="frac"><span>1</span><span>8</span></span> &lt; 0, so <i>C</i> is obtuse. If <i>b</i> = 5: cos <i>C</i> = <span class="frac"><span>16 + 25 − 36</span><span>2(4)(5)</span></span> = <span class="frac"><span>1</span><span>8</span></span> &gt; 0, so <i>C</i> is acute.</div><div class="worked__math">Hence <i>AC</i> = <b>4 cm</b>.</div>
      solution: "<div class=\"worked__math\">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class=\"frac\"><span>3</span><span>4</span></span> ⇒ <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0 ⇒ (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class=\"worked__math\">若 <i>b</i> = 4：cos <i>C</i> = <span class=\"frac\"><span>16 + 16 − 36</span><span>2(4)(4)</span></span> = −<span class=\"frac\"><span>1</span><span>8</span></span> &lt; 0，故 <i>C</i> 為鈍角。若 <i>b</i> = 5：cos <i>C</i> = <span class=\"frac\"><span>16 + 25 − 36</span><span>2(4)(5)</span></span> = <span class=\"frac\"><span>1</span><span>8</span></span> &gt; 0，故 <i>C</i> 為銳角。</div><div class=\"worked__math\">因此 <i>AC</i> = <b>4 cm</b>。</div>",
    },

    // ── t3-1-q016 · numeric · challenge · SL · SL 3.4 · 6 marks
    "t3-1-q016": {
      // EN: <p>Two identical circles, each of radius <span class="mono">6 cm</span>, are drawn such that the centre of each circle lies on the circumference of the other circle. Find the area of the overlapping region common to both circles, in <span class="unit">cm2</span> to 3 significant figures.</p>
      stem: "<p>兩個半徑皆為 <span class=\"mono\">6 cm</span> 的全等圓，繪畫成每個圓的圓心都位於另一個圓的圓周上。求 (Find) 兩圓重疊公共區域的面積（以 <span class=\"unit\">cm2</span> 為單位，準確至 3 位有效數字）。</p>",
      hints: [
        // EN: Decode: the overlap is two equal circular segments, one cut from each circle by the common chord. The hidden fact is the angle each segment subtends at its centre; the condition "each centre lies on the other circle" gives it.
        "解碼：重疊部分由兩個全等的弓形組成，各由公共弦從一個圓切出。隱藏的關鍵是每個弓形在其圓心所對的角；「每個圓心都在另一個圓上」這個條件就給出了這個角。",
        // EN: Let the centres be <span class="chem">O_1, O_2</span> and the intersection points be <span class="chem">A, B</span>. Since <span class="chem">O_1 O_2 = O_1 A = O_2 A = 6 cm</span>, triangles <span class="chem">O_1 O_2 A</span> and <span class="chem">O_1 O_2 B</span> are equilateral (<span class="mono">60° = π/3</span>)!
        "設兩圓心為 <span class=\"chem\">O_1, O_2</span>，交點為 <span class=\"chem\">A, B</span>。由於 <span class=\"chem\">O_1 O_2 = O_1 A = O_2 A = 6 cm</span>，三角形 <span class=\"chem\">O_1 O_2 A</span> 與 <span class=\"chem\">O_1 O_2 B</span> 皆為等邊三角形（<span class=\"mono\">60° = π/3</span>）！",
        // EN: Thus the central angle at each centre is <span class="chem">theta = 2pi/3</span>, and the overlap consists of <strong>two identical circular segments</strong> of angle <span class="chem">2pi/3</span>.
        "因此每個圓心處的圓心角為 <span class=\"chem\">theta = 2pi/3</span>，重疊部分由<strong>兩個全等、圓心角為 <span class=\"chem\">2pi/3</span> 的弓形</strong>組成。",
      ],
      // EN: <div class="worked__math">∠<i>AO</i><sub>1</sub><i>B</i> = <span class="frac"><span>2<i>π</i></span><span>3</span></span> rad ⇒ <i>A</i><sub>overlap</sub> = 2 × <span class="frac"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − sin <span class="frac"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − <span class="frac"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">∠<i>AO</i><sub>1</sub><i>B</i> = <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> rad ⇒ <i>A</i><sub>overlap</sub> = 2 × <span class=\"frac\"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> − sin <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> − <span class=\"frac\"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q017 · short · challenge · SL · SL 3.1 · 6 marks
    "t3-1-q017": {
      // EN: <p>A hollow right circular cone (open at the base) of base radius <span class="chem">r</span> and slant height <span class="chem">l</span> is made by rolling up a semicircular sheet of thin metal of radius <span class="mono">10 cm</span> so that the two straight radii meet without overlap.<br>(a) Find the base radius <span class="chem">r</span> and vertical height <span class="chem">h</span> of the cone. <strong>[4 marks]</strong><br>(b) Find the acute angle between a slant generator of the cone and the plane of its base. <strong>[2 marks]</strong></p>
      stem: "<p>將一塊半徑為 <span class=\"mono\">10 cm</span> 的半圓形薄金屬片捲成一個底半徑為 <span class=\"chem\">r</span>、斜高為 <span class=\"chem\">l</span> 的空心直立圓錐體（底部開口），使兩條直半徑邊緣恰好相接而不重疊。<br>(a) 求 (Find) 該圓錐體的底半徑 <span class=\"chem\">r</span> 與垂直高 <span class=\"chem\">h</span>。<strong>[4 marks]</strong><br>(b) 求 (Find) 該圓錐體的斜邊母線與其底面所在平面之間的銳角。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: rolling a flat sheet into a cone keeps lengths. The radius of the sheet becomes the slant height, and the curved edge of the sheet becomes the circumference of the base.
        "解碼：把平面紙片捲成圓錐時，長度保持不變。紙片的半徑變成斜高，紙片的弧邊變成底面的圓周。",
        // EN: When you roll a sector into a cone, the radius of the flat sector becomes the <strong>slant height</strong> <span class="chem">l = 10 cm</span> of the cone, and the arc length of the sector becomes the base circumference <span class="chem">2pi r</span>.
        "將扇形捲成圓錐體時，平面扇形的半徑會成為圓錐體的<strong>斜高</strong> <span class=\"chem\">l = 10 cm</span>，而扇形的弧長會成為底圓圓周 <span class=\"chem\">2pi r</span>。",
        // EN: Equate <span class="chem">2pi r = 10pi</span> to find <span class="chem">r</span>.
        "令 <span class=\"chem\">2pi r = 10pi</span> 以求 <span class=\"chem\">r</span>。",
      ],
      // EN: <p>(a) <i>r</i> = 5 cm, <i>h</i> = 5√3 cm (≈ 8.66 cm); (b) 60° (or π/3 rad).</p>
      answer: "<p>(a) <i>r</i> = 5 cm，<i>h</i> = 5√3 cm（≈ 8.66 cm）；(b) 60°（或 π/3 rad）。</p>",
      markscheme: [
        // EN: M1: The arc length of the semicircle (π × 10) becomes the circumference 2πr of the cone base (or equate curved area πrl = (1/2)π(10)² with l = 10).
        "M1：半圓的弧長 (π × 10) 成為圓錐底圓的圓周 2πr（或以 l = 10 令曲面面積 πrl = (1/2)π(10)²）。",
        // EN: A1: 2πr = 10π ⇒ r = 5 cm (and slant height l = 10 cm).
        "A1：2πr = 10π ⇒ r = 5 cm（且斜高 l = 10 cm）。",
        // EN: M1: Use Pythagoras with the slant height: h = √(l² − r²) = √(10² − 5²).
        "M1：用畢氏定理及斜高：h = √(l² − r²) = √(10² − 5²)。",
        // EN: A1: h = √75 = 5√3 cm (≈ 8.66 cm).
        "A1：h = √75 = 5√3 cm（≈ 8.66 cm）。",
        // EN: M1: Use the right triangle formed by r, h and l: cos θ = r / l = 5 / 10.
        "M1：利用由 r、h 與 l 構成的直角三角形：cos θ = r / l = 5 / 10。",
        // EN: A1: cos θ = 1/2 ⇒ θ = 60° (or π/3 rad).
        "A1：cos θ = 1/2 ⇒ θ = 60°（或 π/3 rad）。",
      ],
    },

    // ── t3-1-q018 · mcq · challenge · SL · SL 3.3 · 4 marks
    "t3-1-q018": {
      // EN: <p>A vertical radio mast <span class="chem">MT</span> of height <span class="chem">h</span> metres stands on horizontal ground at <span class="chem">M</span>. From a point <span class="chem">A</span> due South of <span class="chem">M</span>, the angle of elevation of the top <span class="chem">T</span> is <span class="mono">45°</span>. From a point <span class="chem">B</span> due East of <span class="chem">M</span>, the angle of elevation of <span class="chem">T</span> is <span class="mono">30°</span>. If the distance <span class="chem">AB</span> along the ground is <span class="mono">100 m</span>, what is the exact height <span class="chem">h</span> of the mast?</p>
      stem: "<p>一條高 <span class=\"chem\">h</span> 米的垂直無線電桅杆 <span class=\"chem\">MT</span> 矗立在水平地面的 <span class=\"chem\">M</span> 處。從 <span class=\"chem\">M</span> 正南方的點 <span class=\"chem\">A</span> 測得頂端 <span class=\"chem\">T</span> 的仰角為 <span class=\"mono\">45°</span>；從 <span class=\"chem\">M</span> 正東方的點 <span class=\"chem\">B</span> 測得 <span class=\"chem\">T</span> 的仰角為 <span class=\"mono\">30°</span>。若地面上的距離 <span class=\"chem\">AB</span> 為 <span class=\"mono\">100 m</span>，桅杆的準確高度 <span class=\"chem\">h</span> 是多少？</p>",
      options: [
        // EN: <span class="chem">50 m</span>
        "<span class=\"chem\">50 m</span>",
        // EN: <span class="chem">50sqrt(2) m</span>
        "<span class=\"chem\">50sqrt(2) m</span>",
        // EN: <span class="chem">50sqrt(3) m</span>
        "<span class=\"chem\">50sqrt(3) m</span>",
        // EN: <span class="chem">25sqrt(3) m</span>
        "<span class=\"chem\">25sqrt(3) m</span>",
      ],
      hints: [
        // EN: Decode: three right-angled triangles. Two are vertical (one through A, one through B) and one is horizontal (A, M, B, with the right angle at M because South and East are perpendicular). Write every ground length in terms of h.
        "解碼：有三個直角三角形。兩個是鉛垂的（一個經過 A，一個經過 B），一個是水平的（A、M、B，因為正南與正東互相垂直，直角在 M）。把每段地面長度都用 h 表示。",
        // EN: Express both ground distances <span class="chem">AM</span> and <span class="chem">BM</span> in terms of <span class="chem">h</span>: <span class="chem">AM = h / tan 45° = h</span> and <span class="chem">BM = h / tan 30° = h sqrt(3)</span>.
        "以 <span class=\"chem\">h</span> 表示兩段地面距離 <span class=\"chem\">AM</span> 與 <span class=\"chem\">BM</span>：<span class=\"chem\">AM = h / tan 45° = h</span> 及 <span class=\"chem\">BM = h / tan 30° = h sqrt(3)</span>。",
        // EN: Since <span class="chem">A</span> is due South and <span class="chem">B</span> is due East of <span class="chem">M</span>, <span class="chem">angle AMB = 90°</span> on the ground, so <span class="chem">AM^2 + BM^2 = 100^2</span>.
        "由於 <span class=\"chem\">A</span> 在正南而 <span class=\"chem\">B</span> 在 <span class=\"chem\">M</span> 正東，地面上 <span class=\"chem\">angle AMB = 90°</span>，故 <span class=\"chem\">AM^2 + BM^2 = 100^2</span>。",
      ],
      // EN: <div class="worked__math"><i>AM</i> = <i>h</i> cot 45° = <i>h</i>, &nbsp; <i>BM</i> = <i>h</i> cot 30° = <i>h</i>√3</div><div class="worked__math"><i>AM</i><sup>2</sup> + <i>BM</i><sup>2</sup> = <i>h</i><sup>2</sup> + 3<i>h</i><sup>2</sup> = 4<i>h</i><sup>2</sup> = 100<sup>2</sup> ⇒ 2<i>h</i> = 100 ⇒ <i>h</i> = <b>50 m</b></div>
      solution: "<div class=\"worked__math\"><i>AM</i> = <i>h</i> cot 45° = <i>h</i>, &nbsp; <i>BM</i> = <i>h</i> cot 30° = <i>h</i>√3</div><div class=\"worked__math\"><i>AM</i><sup>2</sup> + <i>BM</i><sup>2</sup> = <i>h</i><sup>2</sup> + 3<i>h</i><sup>2</sup> = 4<i>h</i><sup>2</sup> = 100<sup>2</sup> ⇒ 2<i>h</i> = 100 ⇒ <i>h</i> = <b>50 m</b></div>",
      misconception: {
        // EN (option B): 50√2 m assumes AM = BM = h, ignoring that the elevation from B is 30° so BM = h√3.
        "1": "50√2 m 假設了 AM = BM = h，忽略了從 B 測得的仰角為 30°，因此 BM = h√3。",
        // EN (option C): 50√3 m is the ground distance BM = h√3, not the vertical height h.
        "2": "50√3 m 是地面距離 BM = h√3，而非垂直高度 h。",
        // EN (option D): Check Pythagoras in horizontal right triangle AMB: h² + (h√3)² = 4h² = 100², so h = 100/2 = 50 m.
        "3": "檢查水平直角三角形 AMB 的畢氏定理：h² + (h√3)² = 4h² = 100²，故 h = 100/2 = 50 m。",
      },
    },

  }
});
