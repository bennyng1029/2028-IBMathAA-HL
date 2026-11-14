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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't3-1.q', {
  questions: {

    // ── t3-1-q019 · numeric · foundation · SL · SL 3.4 · 2 marks
    "t3-1-q019": {
      // EN: <p>An angle measures <span class="chem">(3pi)/5</span> radians. Convert this angle to <strong>degrees</strong>.</p>
      stem: "<p>某角的大小為 <span class=\"chem\">(3pi)/5</span> 弧度。把這個角換算為<strong>度</strong>。</p>",
      hints: [
        // EN: To change radians to degrees, multiply by <span class="chem">180°/pi</span>.
        "把弧度換算為度，要乘以 <span class=\"chem\">180°/pi</span>。",
        // EN: The <span class="chem">pi</span> cancels, leaving <span class="chem">(3 × 180°)/5</span>.
        "<span class=\"chem\">pi</span> 互相抵消，剩下 <span class=\"chem\">(3 × 180°)/5</span>。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>3<i>π</i></span><span>5</span></span> × <span class="frac"><span>180°</span><span><i>π</i></span></span> = <span class="frac"><span>540°</span><span>5</span></span> = <b>108°</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>3<i>π</i></span><span>5</span></span> × <span class=\"frac\"><span>180°</span><span><i>π</i></span></span> = <span class=\"frac\"><span>540°</span><span>5</span></span> = <b>108°</b></div>",
    },

    // ── t3-1-q020 · numeric · foundation · SL · SL 3.1 · 3 marks
    "t3-1-q020": {
      // EN: <p>A <strong>solid</strong> hemisphere has radius <span class="mono">3.5 cm</span>. Calculate its <strong>total</strong> surface area (curved surface and flat circular face), in <span class="unit">cm2</span> to 3 significant figures. (No angles are involved.)</p>
      stem: "<p>一個<strong>實心</strong>半球體的半徑為 <span class=\"mono\">3.5 cm</span>。計算 (Calculate) 它的<strong>總</strong>表面積（曲面及平的圓形面），以 <span class=\"unit\">cm2</span> 為單位，答案準確至 3 位有效數字。（題目不涉及角。）</p>",
      hints: [
        // EN: The curved surface of a hemisphere is half of a sphere: <span class="chem">2pi r^2</span>.
        "半球體的曲面是球體表面的一半：<span class=\"chem\">2pi r^2</span>。",
        // EN: A solid hemisphere also has a flat circular face of area <span class="chem">pi r^2</span>, so the total is <span class="chem">3pi r^2</span>.
        "實心半球體還有一個面積為 <span class=\"chem\">pi r^2</span> 的平圓形面，所以總和為 <span class=\"chem\">3pi r^2</span>。",
      ],
      // EN: <div class="worked__math"><i>A</i> = 2<i>π</i>(3.5)<sup>2</sup> + <i>π</i>(3.5)<sup>2</sup> = 3<i>π</i>(12.25) = 36.75<i>π</i> ≈ <b>115 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> = 2<i>π</i>(3.5)<sup>2</sup> + <i>π</i>(3.5)<sup>2</sup> = 3<i>π</i>(12.25) = 36.75<i>π</i> ≈ <b>115 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q021 · numeric · foundation · SL · SL 3.2 · 2 marks
    "t3-1-q021": {
      // EN: <p>In triangle <span class="chem">PQR</span>, <span class="chem">PQ = 8 cm</span>, <span class="chem">PR = 5 cm</span> and the angle between them is <span class="chem">angle QPR = 150°</span> (degrees). Find the exact area of the triangle, in <span class="unit">cm2</span>.</p>
      stem: "<p>在三角形 <span class=\"chem\">PQR</span> 中，<span class=\"chem\">PQ = 8 cm</span>，<span class=\"chem\">PR = 5 cm</span>，且兩邊的夾角為 <span class=\"chem\">angle QPR = 150°</span>（度）。求 (Find) 該三角形面積的準確值，以 <span class=\"unit\">cm2</span> 為單位。</p>",
      hints: [
        // EN: Two sides and the angle between them: use <span class="chem">A = (1/2)ab sin C</span>.
        "已知兩邊及其夾角：使用 <span class=\"chem\">A = (1/2)ab sin C</span>。",
        // EN: <span class="chem">sin 150° = sin 30° = 1/2</span>.
        "<span class=\"chem\">sin 150° = sin 30° = 1/2</span>。",
      ],
      // EN: <div class="worked__math"><i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(8)(5) sin 150° = 20 × <span class="frac"><span>1</span><span>2</span></span> = <b>10 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> = <span class=\"frac\"><span>1</span><span>2</span></span>(8)(5) sin 150° = 20 × <span class=\"frac\"><span>1</span><span>2</span></span> = <b>10 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q022 · numeric · foundation · SL · SL 3.3 · 2 marks
    "t3-1-q022": {
      // EN: <p>A point <span class="chem">A</span> on level ground is <span class="mono">40 m</span> from the foot of a vertical tower. The angle of elevation of the top of the tower from <span class="chem">A</span> is <span class="mono">37°</span> (degrees). Find the height of the tower in metres, to 3 significant figures.</p>
      stem: "<p>水平地面上的點 <span class=\"chem\">A</span> 與一座垂直塔的底部相距 <span class=\"mono\">40 m</span>。從 <span class=\"chem\">A</span> 測得塔頂的仰角為 <span class=\"mono\">37°</span>（度）。求 (Find) 塔的高度，以米為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: The tower, the ground and the line of sight form a right-angled triangle. The height is <strong>opposite</strong> the <span class="mono">37°</span> angle and the <span class="mono">40 m</span> is <strong>adjacent</strong>.
        "塔、地面及視線構成一個直角三角形。高度是 <span class=\"mono\">37°</span> 角的<strong>對邊</strong>，而 <span class=\"mono\">40 m</span> 是<strong>鄰邊</strong>。",
        // EN: Use <span class="chem">h = 40 tan 37°</span>, with your GDC in degree mode.
        "把 GDC 設定為度模式，使用 <span class=\"chem\">h = 40 tan 37°</span>。",
      ],
      // EN: <div class="worked__math"><i>h</i> = 40 tan 37° ≈ 40 × 0.75355 ≈ <b>30.1 m</b></div>
      solution: "<div class=\"worked__math\"><i>h</i> = 40 tan 37° ≈ 40 × 0.75355 ≈ <b>30.1 m</b></div>",
    },

    // ── t3-1-q023 · numeric · exam · SL · SL 3.2 · 3 marks
    "t3-1-q023": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 48°</span>, <span class="chem">angle ABC = 71°</span> (both in degrees) and <span class="chem">BC = 9.4 cm</span>. Find <span class="chem">AC</span>, in <span class="unit">cm</span> to 3 significant figures.</p>
      stem: "<p>在三角形 <span class=\"chem\">ABC</span> 中，<span class=\"chem\">angle BAC = 48°</span>，<span class=\"chem\">angle ABC = 71°</span>（兩者皆以度為單位），且 <span class=\"chem\">BC = 9.4 cm</span>。求 (Find) <span class=\"chem\">AC</span>，以 <span class=\"unit\">cm</span> 為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: <span class="chem">BC</span> is opposite <span class="chem">angle A</span> and <span class="chem">AC</span> is opposite <span class="chem">angle B</span>: a side–angle pair is known, so use the sine rule.
        "<span class=\"chem\">BC</span> 是 <span class=\"chem\">angle A</span> 的對邊，<span class=\"chem\">AC</span> 是 <span class=\"chem\">angle B</span> 的對邊：已知一組邊與對角，所以使用正弦定律。",
        // EN: <span class="chem">AC / (sin 71°) = 9.4 / (sin 48°)</span>.
        "<span class=\"chem\">AC / (sin 71°) = 9.4 / (sin 48°)</span>。",
      ],
      // EN: <div class="worked__math"><i>AC</i> = <span class="frac"><span>9.4 sin 71°</span><span>sin 48°</span></span> = <span class="frac"><span>8.8879</span><span>0.74314</span></span> ≈ <b>12.0 cm</b> (11.96)</div>
      solution: "<div class=\"worked__math\"><i>AC</i> = <span class=\"frac\"><span>9.4 sin 71°</span><span>sin 48°</span></span> = <span class=\"frac\"><span>8.8879</span><span>0.74314</span></span> ≈ <b>12.0 cm</b> (11.96)</div>",
    },

    // ── t3-1-q024 · numeric · exam · SL · SL 3.2 · 3 marks
    "t3-1-q024": {
      // EN: <p>A triangle has sides of length <span class="mono">7.3 cm</span>, <span class="mono">9.1 cm</span> and <span class="mono">12.6 cm</span>. Find the size of its <strong>largest</strong> angle, in <strong>degrees</strong> to 3 significant figures.</p>
      stem: "<p>一個三角形的三邊長度為 <span class=\"mono\">7.3 cm</span>、<span class=\"mono\">9.1 cm</span> 及 <span class=\"mono\">12.6 cm</span>。求 (Find) 它<strong>最大</strong>的角的大小，以<strong>度</strong>為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: The largest angle is opposite the longest side, <span class="mono">12.6 cm</span>.
        "最大的角是最長邊 <span class=\"mono\">12.6 cm</span> 的對角。",
        // EN: Use <span class="chem">cos C = (a^2 + b^2 - c^2)/(2ab)</span> with <span class="chem">c = 12.6</span>.
        "以 <span class=\"chem\">c = 12.6</span> 代入 <span class=\"chem\">cos C = (a^2 + b^2 - c^2)/(2ab)</span>。",
      ],
      // EN: <div class="worked__math">cos <i>C</i> = <span class="frac"><span>7.3<sup>2</sup> + 9.1<sup>2</sup> − 12.6<sup>2</sup></span><span>2(7.3)(9.1)</span></span> = <span class="frac"><span>−22.66</span><span>132.86</span></span> ≈ −0.17056</div><div class="worked__math"><i>C</i> ≈ <b>99.8°</b> (obtuse, as the cosine is negative)</div>
      solution: "<div class=\"worked__math\">cos <i>C</i> = <span class=\"frac\"><span>7.3<sup>2</sup> + 9.1<sup>2</sup> − 12.6<sup>2</sup></span><span>2(7.3)(9.1)</span></span> = <span class=\"frac\"><span>−22.66</span><span>132.86</span></span> ≈ −0.17056</div><div class=\"worked__math\"><i>C</i> ≈ <b>99.8°</b>（餘弦為負，所以是鈍角）</div>",
    },

    // ── t3-1-q025 · numeric · exam · SL · SL 3.2 · 5 marks
    "t3-1-q025": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">BC = 11 cm</span>, <span class="chem">angle BAC = 40°</span> and <span class="chem">angle ABC = 65°</span> (angles in degrees). Find the area of triangle <span class="chem">ABC</span>, in <span class="unit">cm2</span> to 3 significant figures.</p>
      stem: "<p>在三角形 <span class=\"chem\">ABC</span> 中，<span class=\"chem\">BC = 11 cm</span>，<span class=\"chem\">angle BAC = 40°</span>，且 <span class=\"chem\">angle ABC = 65°</span>（角以度為單位）。求 (Find) 三角形 <span class=\"chem\">ABC</span> 的面積，以 <span class=\"unit\">cm2</span> 為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: you need two sides and the angle between them for <span class="chem">(1/2)ab sin C</span>, but only one side is given. Find a second side first with the sine rule.
        "解碼：使用 <span class=\"chem\">(1/2)ab sin C</span> 需要兩邊及其夾角，但題目只給出一條邊。先用正弦定律求出第二條邊。",
        // EN: <span class="chem">angle C = 180° - 40° - 65° = 75°</span> and <span class="chem">AC = (11 sin 65°)/(sin 40°)</span>.
        "<span class=\"chem\">angle C = 180° - 40° - 65° = 75°</span>，而 <span class=\"chem\">AC = (11 sin 65°)/(sin 40°)</span>。",
        // EN: Then area <span class="chem">= (1/2)(BC)(AC) sin C</span>, using the angle <span class="chem">C</span> between <span class="chem">BC</span> and <span class="chem">AC</span>.
        "然後利用 <span class=\"chem\">BC</span> 與 <span class=\"chem\">AC</span> 的夾角 <span class=\"chem\">C</span>，得面積 <span class=\"chem\">= (1/2)(BC)(AC) sin C</span>。",
      ],
      // EN: <div class="worked__math"><i>C</i> = 75°, &nbsp; <i>AC</i> = <span class="frac"><span>11 sin 65°</span><span>sin 40°</span></span> ≈ 15.510 cm</div><div class="worked__math">Area = <span class="frac"><span>1</span><span>2</span></span>(11)(15.510) sin 75° ≈ <b>82.4 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>C</i> = 75°, &nbsp; <i>AC</i> = <span class=\"frac\"><span>11 sin 65°</span><span>sin 40°</span></span> ≈ 15.510 cm</div><div class=\"worked__math\">面積 = <span class=\"frac\"><span>1</span><span>2</span></span>(11)(15.510) sin 75° ≈ <b>82.4 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q026 · short · exam · SL · SL 3.2, 3.3 · 8 marks
    "t3-1-q026": {
      // EN: <p>A yacht leaves harbour <span class="chem">H</span> and sails <span class="mono">18 km</span> on a bearing of <span class="mono">072°</span> to a buoy <span class="chem">B</span>. It then sails <span class="mono">25 km</span> on a bearing of <span class="mono">195°</span> to a point <span class="chem">C</span>. All angles are in degrees.<br>(a) Show that <span class="chem">angle HBC = 57°</span>. <strong>[2 marks]</strong><br>(b) Find the distance <span class="chem">HC</span>, in km to 3 significant figures. <strong>[3 marks]</strong><br>(c) Find the bearing of <span class="chem">H</span> from <span class="chem">C</span>, to the nearest degree. <strong>[3 marks]</strong></p>
      stem: "<p>一艘遊艇離開海港 <span class=\"chem\">H</span>，沿方位角 <span class=\"mono\">072°</span> 航行 <span class=\"mono\">18 km</span> 至浮標 <span class=\"chem\">B</span>，再沿方位角 <span class=\"mono\">195°</span> 航行 <span class=\"mono\">25 km</span> 至點 <span class=\"chem\">C</span>。所有角皆以度為單位。<br>(a) 證明 (Show that) <span class=\"chem\">angle HBC = 57°</span>。<strong>[2 marks]</strong><br>(b) 求 (Find) 距離 <span class=\"chem\">HC</span>，以 km 為單位，答案準確至 3 位有效數字。<strong>[3 marks]</strong><br>(c) 求 <span class=\"chem\">H</span> 由 <span class=\"chem\">C</span> 測得的方位角，答案準確至最接近的度。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: draw a North line at every point. Part (a) is a back-bearing question; parts (b) and (c) are the cosine rule and then the sine rule in triangle <span class="chem">HBC</span>.
        "解碼：在每一點畫一條指向北方的線。(a) 部是反方位角的問題；(b) 及 (c) 部則在三角形 <span class=\"chem\">HBC</span> 中先用餘弦定律，再用正弦定律。",
        // EN: For (c), find <span class="chem">angle BCH</span> first. At <span class="chem">C</span>, the direction to <span class="chem">B</span> is the bearing <span class="mono">015°</span> (the back-bearing of <span class="mono">195°</span>).
        "在 (c) 部，先求 <span class=\"chem\">angle BCH</span>。在 <span class=\"chem\">C</span> 點，指向 <span class=\"chem\">B</span> 的方向是方位角 <span class=\"mono\">015°</span>（即 <span class=\"mono\">195°</span> 的反方位角）。",
        // EN: From the diagram, <span class="chem">H</span> is anticlockwise from <span class="chem">B</span> when seen from <span class="chem">C</span>, so subtract <span class="chem">angle BCH</span> from <span class="mono">015°</span> (adding <span class="mono">360°</span>).
        "從圖可見，由 <span class=\"chem\">C</span> 看，<span class=\"chem\">H</span> 位於 <span class=\"chem\">B</span> 的逆時針方向，所以從 <span class=\"mono\">015°</span> 減去 <span class=\"chem\">angle BCH</span>（再加上 <span class=\"mono\">360°</span>）。",
      ],
      // EN: <p><b>Decode.</b> Bearings give directions; the angles inside the triangle come from North lines and back-bearings.</p><div class="worked__math">(a) Bearing <i>B</i> → <i>H</i> = 252°, so ∠<i>HBC</i> = 252° − 195° = 57°.</div><div class="worked__math">(b) <i>HC</i><sup>2</sup> = 18<sup>2</sup> + 25<sup>2</sup> − 2(18)(25) cos 57° ≈ 458.83 ⇒ <i>HC</i> ≈ <b>21.4 km</b></div><div class="worked__math">(c) sin ∠<i>BCH</i> = <span class="frac"><span>18 sin 57°</span><span>21.420</span></span> ≈ 0.70476 ⇒ ∠<i>BCH</i> ≈ 44.81° (acute, since it is opposite the shortest side)</div><div class="worked__math">Bearing of <i>H</i> from <i>C</i> = 015° − 44.81° + 360° ≈ <b>330°</b></div>
      solution: "<p><b>解碼：</b>方位角表示方向；三角形內的角由指北線及反方位角得出。</p><div class=\"worked__math\">(a) 方位角 <i>B</i> → <i>H</i> = 252°，所以 ∠<i>HBC</i> = 252° − 195° = 57°。</div><div class=\"worked__math\">(b) <i>HC</i><sup>2</sup> = 18<sup>2</sup> + 25<sup>2</sup> − 2(18)(25) cos 57° ≈ 458.83 ⇒ <i>HC</i> ≈ <b>21.4 km</b></div><div class=\"worked__math\">(c) sin ∠<i>BCH</i> = <span class=\"frac\"><span>18 sin 57°</span><span>21.420</span></span> ≈ 0.70476 ⇒ ∠<i>BCH</i> ≈ 44.81°（它是最短邊的對角，所以是銳角）</div><div class=\"worked__math\"><i>H</i> 由 <i>C</i> 測得的方位角 = 015° − 44.81° + 360° ≈ <b>330°</b></div>",
      // EN: <p>(a) The bearing of <i>H</i> from <i>B</i> is 072° + 180° = 252°, so ∠<i>HBC</i> = 252° − 195° = 57°. (b) <i>HC</i> ≈ 21.4 km (21.420). (c) ∠<i>BCH</i> ≈ 44.8°, so the bearing of <i>H</i> from <i>C</i> is 015° − 44.8° + 360° ≈ <b>330°</b>.</p>
      answer: "<p>(a) <i>H</i> 由 <i>B</i> 測得的方位角為 072° + 180° = 252°，所以 ∠<i>HBC</i> = 252° − 195° = 57°。(b) <i>HC</i> ≈ 21.4 km (21.420)。(c) ∠<i>BCH</i> ≈ 44.8°，所以 <i>H</i> 由 <i>C</i> 測得的方位角為 015° − 44.8° + 360° ≈ <b>330°</b>。</p>",
      markscheme: [
        // EN: M1: Back-bearing of H from B is 072° + 180° = 252° (or uses the alternate angle 72° with North lines at H and B).
        "M1：H 由 B 測得的反方位角為 072° + 180° = 252°（或在 H 及 B 畫指北線，利用錯角 72°）。",
        // EN: A1: ∠HBC = 252° − 195° = 57°. AG: angle HBC = 57°; the given line itself earns no mark.
        "A1：∠HBC = 252° − 195° = 57°。AG：angle HBC = 57°；只寫出已給結論本身不得分。",
        // EN: M1: Cosine rule in triangle HBC: HC² = 18² + 25² − 2(18)(25) cos 57°.
        "M1：在三角形 HBC 中使用餘弦定律：HC² = 18² + 25² − 2(18)(25) cos 57°。",
        // EN: A1: HC² ≈ 458.83.
        "A1：HC² ≈ 458.83。",
        // EN: A1: HC ≈ 21.4 km (21.420).
        "A1：HC ≈ 21.4 km (21.420)。",
        // EN: M1: Finds an angle of triangle HBC at C, e.g. sin(∠BCH) = 18 sin 57° / 21.420, so ∠BCH ≈ 44.81°.
        "M1：求三角形 HBC 在 C 的角，例如 sin(∠BCH) = 18 sin 57° / 21.420，所以 ∠BCH ≈ 44.81°。",
        // EN: M1: Uses the bearing of B from C, 195° − 180° = 015°, and turns anticlockwise through ∠BCH (H lies to the west of line CB).
        "M1：利用 B 由 C 測得的方位角 195° − 180° = 015°，並逆時針轉過 ∠BCH（H 位於直線 CB 的西面）。",
        // EN: A1: Bearing of H from C = 360° + 15° − 44.81° ≈ 330°.
        "A1：H 由 C 測得的方位角 = 360° + 15° − 44.81° ≈ 330°。",
      ],
    },

    // ── t3-1-q027 · numeric · exam · SL · SL 3.5 · 5 marks
    "t3-1-q027": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 35°</span> (degrees), <span class="chem">BC = 7 cm</span> and <span class="chem">AC = 11 cm</span>. Two different triangles fit this information. Find the <strong>smaller</strong> possible length of <span class="chem">AB</span>, in cm to 3 significant figures.</p>
      stem: "<p>在三角形 <span class=\"chem\">ABC</span> 中，<span class=\"chem\">angle BAC = 35°</span>（度），<span class=\"chem\">BC = 7 cm</span>，且 <span class=\"chem\">AC = 11 cm</span>。符合這些資料的三角形有兩個。求 (Find) <span class=\"chem\">AB</span> 可能長度中<strong>較小</strong>的一個，以 cm 為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: two sides and a non-included angle (SSA) with the side opposite the angle shorter than the other side: this is the ambiguous case. You want the third side, not an angle.
        "解碼：已知兩邊及一個非夾角（SSA），而該角的對邊比另一邊短：這是兩義情況。所求的是第三條邊，不是角。",
        // EN: Let <span class="chem">AB = x</span>. The cosine rule with the known angle gives a quadratic: <span class="chem">7^2 = 11^2 + x^2 - 2(11)x cos 35°</span>.
        "設 <span class=\"chem\">AB = x</span>。以已知角使用餘弦定律，得出一條二次方程：<span class=\"chem\">7^2 = 11^2 + x^2 - 2(11)x cos 35°</span>。",
        // EN: Solve <span class="chem">x^2 - (22 cos 35°)x + 72 = 0</span> with your GDC; both roots are positive, and you want the smaller one.
        "用 GDC 解 <span class=\"chem\">x^2 - (22 cos 35°)x + 72 = 0</span>；兩個根皆為正數，取較小的一個。",
      ],
      // EN: <p><b>Decode.</b> SSA with 11 sin 35° ≈ 6.31 &lt; 7 &lt; 11, so there are two triangles; the cosine rule turns this into a quadratic in <i>AB</i>.</p><div class="worked__math">49 = 121 + <i>x</i><sup>2</sup> − 22<i>x</i> cos 35° ⇒ <i>x</i><sup>2</sup> − 18.021<i>x</i> + 72 = 0</div><div class="worked__math"><i>x</i> ≈ 5.979 or 12.043 ⇒ smaller <i>AB</i> ≈ <b>5.98 cm</b></div>
      solution: "<p><b>解碼：</b>SSA，且 11 sin 35° ≈ 6.31 &lt; 7 &lt; 11，所以有兩個三角形；餘弦定律把問題化為 <i>AB</i> 的二次方程。</p><div class=\"worked__math\">49 = 121 + <i>x</i><sup>2</sup> − 22<i>x</i> cos 35° ⇒ <i>x</i><sup>2</sup> − 18.021<i>x</i> + 72 = 0</div><div class=\"worked__math\"><i>x</i> ≈ 5.979 或 12.043 ⇒ 較小的 <i>AB</i> ≈ <b>5.98 cm</b></div>",
    },

    // ── t3-1-q028 · short · exam · SL · SL 3.2, 3.5 · 6 marks
    "t3-1-q028": {
      // EN: <p>In triangle <span class="chem">PQR</span>, <span class="chem">PQ = 15 cm</span>, <span class="chem">QR = 10 cm</span> and <span class="chem">angle QPR = 38°</span> (degrees).<br>(a) Find the two possible values of <span class="chem">angle PRQ</span>, in degrees. <strong>[3 marks]</strong><br>(b) Find the difference between the two possible areas of triangle <span class="chem">PQR</span>, in <span class="unit">cm2</span>. <strong>[3 marks]</strong><br>Give angles to 1 decimal place and areas to 3 significant figures.</p>
      stem: "<p>在三角形 <span class=\"chem\">PQR</span> 中，<span class=\"chem\">PQ = 15 cm</span>，<span class=\"chem\">QR = 10 cm</span>，且 <span class=\"chem\">angle QPR = 38°</span>（度）。<br>(a) 求 (Find) <span class=\"chem\">angle PRQ</span> 的兩個可能值，以度為單位。<strong>[3 marks]</strong><br>(b) 求三角形 <span class=\"chem\">PQR</span> 兩個可能面積之差，以 <span class=\"unit\">cm2</span> 為單位。<strong>[3 marks]</strong><br>角準確至 1 位小數，面積準確至 3 位有效數字。</p>",
      hints: [
        // EN: <span class="chem">QR</span> is opposite the given <span class="mono">38°</span> and is shorter than <span class="chem">PQ</span>: expect two triangles.
        "<span class=\"chem\">QR</span> 是已知角 <span class=\"mono\">38°</span> 的對邊，且比 <span class=\"chem\">PQ</span> 短：預計有兩個三角形。",
        // EN: Use the sine rule for <span class="chem">angle PRQ</span>; the second value is <span class="chem">180° - angle PRQ</span>.
        "用正弦定律求 <span class=\"chem\">angle PRQ</span>；第二個值為 <span class=\"chem\">180° - angle PRQ</span>。",
        // EN: For each triangle, the angle between <span class="chem">PQ</span> and <span class="chem">QR</span> is <span class="chem">angle PQR = 180° - 38° - angle PRQ</span>.
        "對每個三角形，<span class=\"chem\">PQ</span> 與 <span class=\"chem\">QR</span> 的夾角為 <span class=\"chem\">angle PQR = 180° - 38° - angle PRQ</span>。",
      ],
      // EN: <div class="worked__math">(a) sin <i>R</i> = <span class="frac"><span>15 sin 38°</span><span>10</span></span> ≈ 0.92349 ⇒ <i>R</i> ≈ 67.44° or 112.56°</div><div class="worked__math">(b) <i>Q</i> ≈ 74.56° or 29.44°; areas = 75 sin <i>Q</i> ≈ 72.29 and 36.87 ⇒ difference ≈ <b>35.4 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">(a) sin <i>R</i> = <span class=\"frac\"><span>15 sin 38°</span><span>10</span></span> ≈ 0.92349 ⇒ <i>R</i> ≈ 67.44° 或 112.56°</div><div class=\"worked__math\">(b) <i>Q</i> ≈ 74.56° 或 29.44°；面積 = 75 sin <i>Q</i> ≈ 72.29 及 36.87 ⇒ 差 ≈ <b>35.4 cm<sup>2</sup></b></div>",
      // EN: <p>(a) ∠<i>PRQ</i> ≈ 67.4° or 112.6°. (b) The areas are about 72.3 cm² and 36.9 cm², a difference of about <b>35.4 cm²</b>.</p>
      answer: "<p>(a) ∠<i>PRQ</i> ≈ 67.4° 或 112.6°。(b) 兩個面積約為 72.3 cm² 及 36.9 cm²，相差約 <b>35.4 cm²</b>。</p>",
      markscheme: [
        // EN: M1: Sine rule: sin(∠PRQ)/15 = sin 38°/10, so sin(∠PRQ) ≈ 0.92349.
        "M1：正弦定律：sin(∠PRQ)/15 = sin 38°/10，所以 sin(∠PRQ) ≈ 0.92349。",
        // EN: A1: ∠PRQ ≈ 67.4°.
        "A1：∠PRQ ≈ 67.4°。",
        // EN: A1: or ∠PRQ ≈ 180° − 67.4° = 112.6°.
        "A1：或 ∠PRQ ≈ 180° − 67.4° = 112.6°。",
        // EN: M1: Finds ∠PQR = 180° − 38° − ∠PRQ in each case (74.6° and 29.4°) and uses area = (1/2)(15)(10) sin(∠PQR).
        "M1：在每種情況求 ∠PQR = 180° − 38° − ∠PRQ（74.6° 及 29.4°），並使用面積 = (1/2)(15)(10) sin(∠PQR)。",
        // EN: A1: Areas ≈ 72.3 cm² and 36.9 cm².
        "A1：面積 ≈ 72.3 cm² 及 36.9 cm²。",
        // EN: A1: Difference ≈ 35.4 cm².
        "A1：差 ≈ 35.4 cm²。",
      ],
    },

    // ── t3-1-q029 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q029": {
      // EN: <p>A right pyramid <span class="chem">VABCD</span> has a square base <span class="chem">ABCD</span> of side <span class="mono">10 cm</span> and vertical height <span class="mono">14 cm</span>. Find the angle between the sloping edge <span class="chem">VA</span> and the base <span class="chem">ABCD</span>, in <strong>degrees</strong> to 3 significant figures.</p>
      stem: "<p>直立角錐體 <span class=\"chem\">VABCD</span> 的底 <span class=\"chem\">ABCD</span> 是邊長 <span class=\"mono\">10 cm</span> 的正方形，垂直高度為 <span class=\"mono\">14 cm</span>。求 (Find) 斜稜 <span class=\"chem\">VA</span> 與底 <span class=\"chem\">ABCD</span> 之間的角，以<strong>度</strong>為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: The apex <span class="chem">V</span> is directly above the centre <span class="chem">M</span> of the square. The projection of <span class="chem">VA</span> on the base is <span class="chem">MA</span>.
        "頂點 <span class=\"chem\">V</span> 位於正方形中心 <span class=\"chem\">M</span> 的正上方。<span class=\"chem\">VA</span> 在底上的投影是 <span class=\"chem\">MA</span>。",
        // EN: <span class="chem">MA</span> is half the diagonal of the square: <span class="chem">MA = (1/2)sqrt(10^2 + 10^2) = 5sqrt(2)</span>.
        "<span class=\"chem\">MA</span> 是正方形對角線的一半：<span class=\"chem\">MA = (1/2)sqrt(10^2 + 10^2) = 5sqrt(2)</span>。",
        // EN: In right-angled triangle <span class="chem">VMA</span>, <span class="chem">tan(angle VAM) = 14/(5sqrt(2))</span>.
        "在直角三角形 <span class=\"chem\">VMA</span> 中，<span class=\"chem\">tan(angle VAM) = 14/(5sqrt(2))</span>。",
      ],
      // EN: <div class="worked__math"><i>MA</i> = 5√2 ≈ 7.0711 cm, &nbsp; tan ∠<i>VAM</i> = <span class="frac"><span>14</span><span>7.0711</span></span> ≈ 1.9799</div><div class="worked__math">∠<i>VAM</i> ≈ <b>63.2°</b></div>
      solution: "<div class=\"worked__math\"><i>MA</i> = 5√2 ≈ 7.0711 cm, &nbsp; tan ∠<i>VAM</i> = <span class=\"frac\"><span>14</span><span>7.0711</span></span> ≈ 1.9799</div><div class=\"worked__math\">∠<i>VAM</i> ≈ <b>63.2°</b></div>",
    },

    // ── t3-1-q030 · numeric · exam · SL · SL 3.1, 3.2 · 5 marks
    "t3-1-q030": {
      // EN: <p>A cuboid <span class="chem">ABCDEFGH</span> has base <span class="chem">ABCD</span> with <span class="chem">AB = 6 cm</span> and <span class="chem">AD = 4 cm</span>, and height <span class="chem">AE = 3 cm</span>. The top face is <span class="chem">EFGH</span>, with <span class="chem">E</span>, <span class="chem">F</span>, <span class="chem">G</span>, <span class="chem">H</span> vertically above <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span>. The face diagonals <span class="chem">AF</span> and <span class="chem">AH</span> meet at <span class="chem">A</span>. Find the angle <span class="chem">FAH</span> between these two lines, in <strong>degrees</strong> to 3 significant figures.</p>
      stem: "<p>長方體 <span class=\"chem\">ABCDEFGH</span> 的底 <span class=\"chem\">ABCD</span> 中 <span class=\"chem\">AB = 6 cm</span>、<span class=\"chem\">AD = 4 cm</span>，高為 <span class=\"chem\">AE = 3 cm</span>。頂面為 <span class=\"chem\">EFGH</span>，其中 <span class=\"chem\">E</span>、<span class=\"chem\">F</span>、<span class=\"chem\">G</span>、<span class=\"chem\">H</span> 分別位於 <span class=\"chem\">A</span>、<span class=\"chem\">B</span>、<span class=\"chem\">C</span>、<span class=\"chem\">D</span> 的正上方。面對角線 <span class=\"chem\">AF</span> 與 <span class=\"chem\">AH</span> 相交於 <span class=\"chem\">A</span>。求 (Find) 這兩條直線之間的角 <span class=\"chem\">FAH</span>，以<strong>度</strong>為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: this is the angle between two intersecting lines in a solid. The two lines and the segment <span class="chem">FH</span> joining their ends form a triangle that is <strong>not</strong> right-angled, so find all three sides and use the cosine rule.
        "解碼：這是立體中兩條相交直線之間的角。兩條直線與連接其端點的線段 <span class=\"chem\">FH</span> 組成一個<strong>不是</strong>直角三角形的三角形，所以要求出全部三條邊，再用餘弦定律。",
        // EN: Each side is a diagonal of a rectangular face: <span class="chem">AF = sqrt(6^2 + 3^2)</span>, <span class="chem">AH = sqrt(4^2 + 3^2)</span>, <span class="chem">FH = sqrt(6^2 + 4^2)</span>.
        "每條邊都是一個長方形面的對角線：<span class=\"chem\">AF = sqrt(6^2 + 3^2)</span>、<span class=\"chem\">AH = sqrt(4^2 + 3^2)</span>、<span class=\"chem\">FH = sqrt(6^2 + 4^2)</span>。",
        // EN: <span class="chem">cos(angle FAH) = (AF^2 + AH^2 - FH^2)/(2 × AF × AH)</span>.
        "<span class=\"chem\">cos(angle FAH) = (AF^2 + AH^2 - FH^2)/(2 × AF × AH)</span>。",
      ],
      // EN: <p><b>Decode.</b> Angle between two lines meeting at A: build triangle AFH from three face diagonals.</p><div class="worked__math"><i>AF</i> = √45, &nbsp; <i>AH</i> = 5, &nbsp; <i>FH</i> = √52</div><div class="worked__math">cos ∠<i>FAH</i> = <span class="frac"><span>45 + 25 − 52</span><span>2(√45)(5)</span></span> = <span class="frac"><span>18</span><span>10√45</span></span> ≈ 0.26833 ⇒ ∠<i>FAH</i> ≈ <b>74.4°</b></div>
      solution: "<p><b>解碼：</b>相交於 A 的兩條直線之間的角：用三條面對角線組成三角形 AFH。</p><div class=\"worked__math\"><i>AF</i> = √45, &nbsp; <i>AH</i> = 5, &nbsp; <i>FH</i> = √52</div><div class=\"worked__math\">cos ∠<i>FAH</i> = <span class=\"frac\"><span>45 + 25 − 52</span><span>2(√45)(5)</span></span> = <span class=\"frac\"><span>18</span><span>10√45</span></span> ≈ 0.26833 ⇒ ∠<i>FAH</i> ≈ <b>74.4°</b></div>",
    },

    // ── t3-1-q031 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q031": {
      // EN: <p>An ice-cream model is a solid made of a right circular cone with a hemisphere on top. The cone and the hemisphere both have radius <span class="mono">3.2 cm</span>, and the total height of the model, from the tip of the cone to the top of the hemisphere, is <span class="mono">11 cm</span>. Find the volume of the model, in <span class="unit">cm3</span> to 3 significant figures. (No angles are involved.)</p>
      stem: "<p>一個雪糕模型是由一個直立圓錐體和其上的一個半球體組成的實心立體。圓錐體和半球體的半徑都是 <span class=\"mono\">3.2 cm</span>，而由圓錐尖端至半球頂部，模型的總高度為 <span class=\"mono\">11 cm</span>。求 (Find) 模型的體積，以 <span class=\"unit\">cm3</span> 為單位，答案準確至 3 位有效數字。（題目不涉及角。）</p>",
      hints: [
        // EN: The hemisphere adds its radius, <span class="mono">3.2 cm</span>, to the height. So the cone has height <span class="chem">11 - 3.2 = 7.8 cm</span>.
        "半球體令高度增加其半徑 <span class=\"mono\">3.2 cm</span>。所以圓錐體的高為 <span class=\"chem\">11 - 3.2 = 7.8 cm</span>。",
        // EN: <span class="chem">V = (1/3)pi r^2 h + (2/3)pi r^3</span>.
        "<span class=\"chem\">V = (1/3)pi r^2 h + (2/3)pi r^3</span>。",
      ],
      // EN: <div class="worked__math">Cone height = 11 − 3.2 = 7.8 cm</div><div class="worked__math"><i>V</i> = <span class="frac"><span>1</span><span>3</span></span><i>π</i>(3.2)<sup>2</sup>(7.8) + <span class="frac"><span>2</span><span>3</span></span><i>π</i>(3.2)<sup>3</sup> ≈ 83.642 + 68.629 ≈ <b>152 cm<sup>3</sup></b></div>
      solution: "<div class=\"worked__math\">圓錐體的高 = 11 − 3.2 = 7.8 cm</div><div class=\"worked__math\"><i>V</i> = <span class=\"frac\"><span>1</span><span>3</span></span><i>π</i>(3.2)<sup>2</sup>(7.8) + <span class=\"frac\"><span>2</span><span>3</span></span><i>π</i>(3.2)<sup>3</sup> ≈ 83.642 + 68.629 ≈ <b>152 cm<sup>3</sup></b></div>",
    },

    // ── t3-1-q032 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q032": {
      // EN: <p>A right circular cone has volume <span class="mono">200 cm³</span> and vertical height <span class="mono">9 cm</span>. Find its <strong>curved</strong> surface area, in <span class="unit">cm2</span> to 3 significant figures. (No angles are involved.)</p>
      stem: "<p>一個直立圓錐體的體積為 <span class=\"mono\">200 cm³</span>，垂直高度為 <span class=\"mono\">9 cm</span>。求 (Find) 它的<strong>曲面</strong>面積，以 <span class=\"unit\">cm2</span> 為單位，答案準確至 3 位有效數字。（題目不涉及角。）</p>",
      hints: [
        // EN: Find the radius from <span class="chem">(1/3)pi r^2(9) = 200</span>.
        "由 <span class=\"chem\">(1/3)pi r^2(9) = 200</span> 求半徑。",
        // EN: Then the slant height is <span class="chem">l = sqrt(r^2 + 9^2)</span>, and the curved surface area is <span class="chem">pi r l</span>. Keep full accuracy for <span class="chem">r</span>.
        "然後斜高為 <span class=\"chem\">l = sqrt(r^2 + 9^2)</span>，曲面面積為 <span class=\"chem\">pi r l</span>。<span class=\"chem\">r</span> 要保留全部精確度。",
      ],
      // EN: <div class="worked__math">3<i>πr</i><sup>2</sup> = 200 ⇒ <i>r</i> = √(200/(3<i>π</i>)) ≈ 4.6066 cm</div><div class="worked__math"><i>l</i> = √(4.6066<sup>2</sup> + 81) ≈ 10.110 cm ⇒ <i>πrl</i> ≈ <b>146 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">3<i>πr</i><sup>2</sup> = 200 ⇒ <i>r</i> = √(200/(3<i>π</i>)) ≈ 4.6066 cm</div><div class=\"worked__math\"><i>l</i> = √(4.6066<sup>2</sup> + 81) ≈ 10.110 cm ⇒ <i>πrl</i> ≈ <b>146 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q033 · numeric · exam · SL · SL 3.4 · 4 marks
    "t3-1-q033": {
      // EN: <p>A chord <span class="chem">AB</span> of length <span class="mono">10 cm</span> is drawn in a circle of radius <span class="mono">7 cm</span> and centre <span class="chem">O</span>. Find the length of the <strong>minor arc</strong> <span class="chem">AB</span>, in cm to 3 significant figures. Work in radians.</p>
      stem: "<p>在圓心為 <span class=\"chem\">O</span>、半徑為 <span class=\"mono\">7 cm</span> 的圓中，畫有一條長 <span class=\"mono\">10 cm</span> 的弦 <span class=\"chem\">AB</span>。求 (Find) <strong>劣弧</strong> <span class=\"chem\">AB</span> 的長度，以 cm 為單位，答案準確至 3 位有效數字。以弧度計算。</p>",
      hints: [
        // EN: Triangle <span class="chem">OAB</span> is isosceles. The perpendicular from <span class="chem">O</span> bisects the chord and the angle: <span class="chem">sin(theta/2) = 5/7</span>.
        "三角形 <span class=\"chem\">OAB</span> 是等腰三角形。從 <span class=\"chem\">O</span> 所作的垂線平分弦及該角：<span class=\"chem\">sin(theta/2) = 5/7</span>。",
        // EN: Find <span class="chem">theta = 2 arcsin(5/7)</span> in <strong>radians</strong>, then use <span class="chem">l = r theta</span>.
        "以<strong>弧度</strong>求 <span class=\"chem\">theta = 2 arcsin(5/7)</span>，然後使用 <span class=\"chem\">l = r theta</span>。",
      ],
      // EN: <div class="worked__math"><i>θ</i> = 2 arcsin(5/7) ≈ 1.5912 rad (or by the cosine rule: cos <i>θ</i> = (49 + 49 − 100)/98)</div><div class="worked__math"><i>l</i> = 7 × 1.5912 ≈ <b>11.1 cm</b></div>
      solution: "<div class=\"worked__math\"><i>θ</i> = 2 arcsin(5/7) ≈ 1.5912 rad（或用餘弦定律：cos <i>θ</i> = (49 + 49 − 100)/98）</div><div class=\"worked__math\"><i>l</i> = 7 × 1.5912 ≈ <b>11.1 cm</b></div>",
    },

    // ── t3-1-q034 · short · exam · SL · SL 3.4 · 7 marks
    "t3-1-q034": {
      // EN: <p>A flower bed is in the shape of a sector <span class="chem">OAB</span> of a circle with centre <span class="chem">O</span>, radius <span class="mono">4.5 m</span> and <span class="chem">angle AOB = 1.9</span> <strong>radians</strong>.<br>(a) Find the length of the arc <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(b) A straight path is laid from <span class="chem">A</span> to <span class="chem">B</span>. Find the length of the path <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(c) Find the area of the part of the flower bed between the path and the arc. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>一個花圃的形狀是圓心為 <span class=\"chem\">O</span>、半徑為 <span class=\"mono\">4.5 m</span> 的扇形 <span class=\"chem\">OAB</span>，且 <span class=\"chem\">angle AOB = 1.9</span> <strong>弧度</strong>。<br>(a) 求 (Find) 弧 <span class=\"chem\">AB</span> 的長度。<strong>[2 marks]</strong><br>(b) 由 <span class=\"chem\">A</span> 至 <span class=\"chem\">B</span> 鋪設一條筆直的小徑。求小徑 <span class=\"chem\">AB</span> 的長度。<strong>[2 marks]</strong><br>(c) 求花圃中介乎小徑與弧之間部分的面積。<strong>[3 marks]</strong><br>答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: The angle is in radians, so <span class="chem">l = r theta</span> and <span class="chem">A = (1/2)r^2 theta</span> apply directly. Set your GDC to radians.
        "角以弧度為單位，所以可直接使用 <span class=\"chem\">l = r theta</span> 及 <span class=\"chem\">A = (1/2)r^2 theta</span>。把 GDC 設定為弧度模式。",
        // EN: Segment = sector − triangle: <span class="chem">(1/2)r^2(theta - sin theta)</span>.
        "弓形 = 扇形 − 三角形：<span class=\"chem\">(1/2)r^2(theta - sin theta)</span>。",
      ],
      // EN: <div class="worked__math">(a) <i>l</i> = 4.5(1.9) = <b>8.55 m</b> &nbsp; (b) <i>AB</i> = 9 sin 0.95 ≈ <b>7.32 m</b></div><div class="worked__math">(c) <span class="frac"><span>1</span><span>2</span></span>(4.5)<sup>2</sup>(1.9 − sin 1.9) = 10.125(1.9 − 0.94630) ≈ <b>9.66 m<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">(a) <i>l</i> = 4.5(1.9) = <b>8.55 m</b> &nbsp; (b) <i>AB</i> = 9 sin 0.95 ≈ <b>7.32 m</b></div><div class=\"worked__math\">(c) <span class=\"frac\"><span>1</span><span>2</span></span>(4.5)<sup>2</sup>(1.9 − sin 1.9) = 10.125(1.9 − 0.94630) ≈ <b>9.66 m<sup>2</sup></b></div>",
      // EN: <p>(a) 8.55 m; (b) 7.32 m; (c) 9.66 m².</p>
      answer: "<p>(a) 8.55 m；(b) 7.32 m；(c) 9.66 m²。</p>",
      markscheme: [
        // EN: M1: Arc length l = rθ = 4.5 × 1.9.
        "M1：弧長 l = rθ = 4.5 × 1.9。",
        // EN: A1: l = 8.55 m.
        "A1：l = 8.55 m。",
        // EN: M1: Chord by the cosine rule, AB² = 4.5² + 4.5² − 2(4.5)(4.5) cos 1.9 (or AB = 2(4.5) sin 0.95), in radian mode.
        "M1：在弧度模式下用餘弦定律求弦：AB² = 4.5² + 4.5² − 2(4.5)(4.5) cos 1.9（或 AB = 2(4.5) sin 0.95）。",
        // EN: A1: AB ≈ 7.32 m.
        "A1：AB ≈ 7.32 m。",
        // EN: M1: Sector area (1/2)(4.5)²(1.9) ≈ 19.2375 m².
        "M1：扇形面積 (1/2)(4.5)²(1.9) ≈ 19.2375 m²。",
        // EN: M1: Subtracts triangle OAB, (1/2)(4.5)² sin 1.9 ≈ 9.581 m².
        "M1：減去三角形 OAB 的面積 (1/2)(4.5)² sin 1.9 ≈ 9.581 m²。",
        // EN: A1: Segment area ≈ 9.66 m².
        "A1：弓形面積 ≈ 9.66 m²。",
      ],
    },

    // ── t3-1-q035 · numeric · exam · SL · SL 3.4 · 2 marks
    "t3-1-q035": {
      // EN: <p>A sector of a circle has radius <span class="mono">9 cm</span> and central angle <span class="chem">(5pi)/6</span> radians. Find the exact length of its arc, in cm, as a multiple of <span class="chem">pi</span>.</p>
      stem: "<p>一個圓扇形的半徑為 <span class=\"mono\">9 cm</span>，圓心角為 <span class=\"chem\">(5pi)/6</span> 弧度。求 (Find) 其弧長的準確值，以 cm 為單位，並表示為 <span class=\"chem\">pi</span> 的倍數。</p>",
      hints: [
        // EN: The angle is already in radians, so use <span class="chem">l = r theta</span>.
        "角已經以弧度表示，所以使用 <span class=\"chem\">l = r theta</span>。",
        // EN: Simplify <span class="chem">9 × (5pi)/6</span>.
        "化簡 <span class=\"chem\">9 × (5pi)/6</span>。",
      ],
      // EN: <div class="worked__math"><i>l</i> = 9 × <span class="frac"><span>5<i>π</i></span><span>6</span></span> = <span class="frac"><span>45<i>π</i></span><span>6</span></span> = <b><span class="frac"><span>15<i>π</i></span><span>2</span></span> cm</b></div>
      solution: "<div class=\"worked__math\"><i>l</i> = 9 × <span class=\"frac\"><span>5<i>π</i></span><span>6</span></span> = <span class=\"frac\"><span>45<i>π</i></span><span>6</span></span> = <b><span class=\"frac\"><span>15<i>π</i></span><span>2</span></span> cm</b></div>",
    },

    // ── t3-1-q036 · short · exam · SL · SL 3.2 · 5 marks
    "t3-1-q036": {
      // EN: <p>A triangle has sides of length <span class="mono">3 cm</span>, <span class="mono">5 cm</span> and <span class="mono">7 cm</span>.<br>(a) Show that the largest angle of the triangle is <span class="mono">120°</span> (degrees). <strong>[3 marks]</strong><br>(b) Hence find the exact area of the triangle. <strong>[2 marks]</strong></p>
      stem: "<p>一個三角形的三邊長度為 <span class=\"mono\">3 cm</span>、<span class=\"mono\">5 cm</span> 及 <span class=\"mono\">7 cm</span>。<br>(a) 證明 (Show that) 該三角形最大的角為 <span class=\"mono\">120°</span>（度）。<strong>[3 marks]</strong><br>(b) 由此 (Hence) 求該三角形面積的準確值。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: The largest angle is opposite the longest side.
        "最大的角是最長邊的對角。",
        // EN: For (b), the angle between the sides 3 and 5 is the <span class="mono">120°</span> angle, and <span class="chem">sin 120° = sqrt(3)/2</span>.
        "在 (b) 部，長度為 3 及 5 的兩邊的夾角就是 <span class=\"mono\">120°</span> 的角，而 <span class=\"chem\">sin 120° = sqrt(3)/2</span>。",
      ],
      // EN: <div class="worked__math">(a) cos <i>θ</i> = <span class="frac"><span>9 + 25 − 49</span><span>30</span></span> = −<span class="frac"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 120°</div><div class="worked__math">(b) Area = <span class="frac"><span>1</span><span>2</span></span>(3)(5)<span class="frac"><span>√3</span><span>2</span></span> = <b><span class="frac"><span>15√3</span><span>4</span></span> cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">(a) cos <i>θ</i> = <span class=\"frac\"><span>9 + 25 − 49</span><span>30</span></span> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 120°</div><div class=\"worked__math\">(b) 面積 = <span class=\"frac\"><span>1</span><span>2</span></span>(3)(5)<span class=\"frac\"><span>√3</span><span>2</span></span> = <b><span class=\"frac\"><span>15√3</span><span>4</span></span> cm<sup>2</sup></b></div>",
      // EN: <p>(a) cos θ = (9 + 25 − 49)/30 = −1/2, so θ = 120°. (b) Area = (1/2)(3)(5) sin 120° = 15√3/4 cm².</p>
      answer: "<p>(a) cos θ = (9 + 25 − 49)/30 = −1/2，所以 θ = 120°。(b) 面積 = (1/2)(3)(5) sin 120° = 15√3/4 cm²。</p>",
      markscheme: [
        // EN: R1: The largest angle is opposite the longest side, 7 cm.
        "R1：最大的角是最長邊 7 cm 的對角。",
        // EN: M1: Cosine rule: cos θ = (3² + 5² − 7²)/(2 × 3 × 5).
        "M1：餘弦定律：cos θ = (3² + 5² − 7²)/(2 × 3 × 5)。",
        // EN: A1: cos θ = −15/30 = −1/2, so θ = 120°. AG: the largest angle is 120°; the given line itself earns no mark.
        "A1：cos θ = −15/30 = −1/2，所以 θ = 120°。AG：最大的角為 120°；只寫出已給結論本身不得分。",
        // EN: M1: Area = (1/2)(3)(5) sin 120°, with sin 120° = √3/2.
        "M1：面積 = (1/2)(3)(5) sin 120°，其中 sin 120° = √3/2。",
        // EN: A1: Area = 15√3/4 cm².
        "A1：面積 = 15√3/4 cm²。",
      ],
    },

    // ── t3-1-q037 · numeric · exam · SL · SL 3.3 · 4 marks
    "t3-1-q037": {
      // EN: <p>Points <span class="chem">A</span> and <span class="chem">B</span> lie on level ground in a straight line with the foot <span class="chem">F</span> of a vertical flagpole, on the same side of it, with <span class="chem">B</span> farther from <span class="chem">F</span> and <span class="chem">AB = 20 m</span>. The angles of elevation of the top of the flagpole from <span class="chem">A</span> and from <span class="chem">B</span> are <span class="mono">60°</span> and <span class="mono">30°</span> (degrees). Find the exact height of the flagpole in metres.</p>
      stem: "<p>點 <span class=\"chem\">A</span> 及 <span class=\"chem\">B</span> 位於水平地面上，與一支垂直旗桿的底部 <span class=\"chem\">F</span> 成一直線，並在旗桿的同一側；<span class=\"chem\">B</span> 離 <span class=\"chem\">F</span> 較遠，且 <span class=\"chem\">AB = 20 m</span>。從 <span class=\"chem\">A</span> 及 <span class=\"chem\">B</span> 測得旗桿頂部的仰角分別為 <span class=\"mono\">60°</span> 及 <span class=\"mono\">30°</span>（度）。求 (Find) 旗桿高度的準確值，以米為單位。</p>",
      hints: [
        // EN: Let the height be <span class="chem">h</span>. Write both ground distances in terms of <span class="chem">h</span>: <span class="chem">AF = h/tan 60°</span> and <span class="chem">BF = h/tan 30°</span>.
        "設高度為 <span class=\"chem\">h</span>。以 <span class=\"chem\">h</span> 表示兩段地面距離：<span class=\"chem\">AF = h/tan 60°</span> 及 <span class=\"chem\">BF = h/tan 30°</span>。",
        // EN: <span class="chem">BF - AF = 20</span>, i.e. <span class="chem">h sqrt(3) - h/sqrt(3) = 20</span>.
        "<span class=\"chem\">BF - AF = 20</span>，即 <span class=\"chem\">h sqrt(3) - h/sqrt(3) = 20</span>。",
      ],
      // EN: <div class="worked__math"><i>AF</i> = <i>h</i>/√3, &nbsp; <i>BF</i> = <i>h</i>√3 ⇒ <i>h</i>√3 − <i>h</i>/√3 = 20 ⇒ <span class="frac"><span>2<i>h</i></span><span>√3</span></span> = 20</div><div class="worked__math"><i>h</i> = <b>10√3 m</b> (≈ 17.3 m)</div>
      solution: "<div class=\"worked__math\"><i>AF</i> = <i>h</i>/√3, &nbsp; <i>BF</i> = <i>h</i>√3 ⇒ <i>h</i>√3 − <i>h</i>/√3 = 20 ⇒ <span class=\"frac\"><span>2<i>h</i></span><span>√3</span></span> = 20</div><div class=\"worked__math\"><i>h</i> = <b>10√3 m</b> (≈ 17.3 m)</div>",
    },

    // ── t3-1-q038 · short · exam · SL · SL 3.1 · 5 marks
    "t3-1-q038": {
      // EN: <p>The points <span class="chem">A(2, -1, k)</span> and <span class="chem">B(5, 3, 1)</span> are a distance <span class="chem">sqrt(34)</span> apart. (No angles are involved.)<br>(a) Find the two possible values of <span class="chem">k</span>. <strong>[3 marks]</strong><br>(b) For the positive value of <span class="chem">k</span>, find the midpoint of <span class="chem">AB</span>. <strong>[2 marks]</strong></p>
      stem: "<p>點 <span class=\"chem\">A(2, -1, k)</span> 與 <span class=\"chem\">B(5, 3, 1)</span> 相距 <span class=\"chem\">sqrt(34)</span>。（題目不涉及角。）<br>(a) 求 (Find) <span class=\"chem\">k</span> 的兩個可能值。<strong>[3 marks]</strong><br>(b) 對於 <span class=\"chem\">k</span> 的正值，求 <span class=\"chem\">AB</span> 的中點。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Square both sides of the distance formula so that the square root disappears.
        "把距離公式兩邊平方，使平方根消失。",
        // EN: Solve <span class="chem">(1 - k)^2 = 9</span>; take both square roots.
        "解 <span class=\"chem\">(1 - k)^2 = 9</span>；正負兩個平方根都要取。",
      ],
      // EN: <div class="worked__math">(a) 9 + 16 + (1 − <i>k</i>)<sup>2</sup> = 34 ⇒ 1 − <i>k</i> = ±3 ⇒ <i>k</i> = <b>−2 or 4</b></div><div class="worked__math">(b) <i>M</i> = (<span class="frac"><span>7</span><span>2</span></span>, 1, <span class="frac"><span>5</span><span>2</span></span>) = <b>(3.5, 1, 2.5)</b></div>
      solution: "<div class=\"worked__math\">(a) 9 + 16 + (1 − <i>k</i>)<sup>2</sup> = 34 ⇒ 1 − <i>k</i> = ±3 ⇒ <i>k</i> = <b>−2 或 4</b></div><div class=\"worked__math\">(b) <i>M</i> = (<span class=\"frac\"><span>7</span><span>2</span></span>, 1, <span class=\"frac\"><span>5</span><span>2</span></span>) = <b>(3.5, 1, 2.5)</b></div>",
      // EN: <p>(a) k = 4 or k = −2. (b) With k = 4, the midpoint is (3.5, 1, 2.5).</p>
      answer: "<p>(a) k = 4 或 k = −2。(b) 當 k = 4，中點為 (3.5, 1, 2.5)。</p>",
      markscheme: [
        // EN: M1: Distance formula: (5 − 2)² + (3 − (−1))² + (1 − k)² = 34.
        "M1：距離公式：(5 − 2)² + (3 − (−1))² + (1 − k)² = 34。",
        // EN: A1: 9 + 16 + (1 − k)² = 34 ⇒ (1 − k)² = 9.
        "A1：9 + 16 + (1 − k)² = 34 ⇒ (1 − k)² = 9。",
        // EN: A1: k = 4 or k = −2.
        "A1：k = 4 或 k = −2。",
        // EN: M1: Midpoint ((2 + 5)/2, (−1 + 3)/2, (4 + 1)/2).
        "M1：中點 ((2 + 5)/2, (−1 + 3)/2, (4 + 1)/2)。",
        // EN: A1: (3.5, 1, 2.5).
        "A1：(3.5, 1, 2.5)。",
      ],
    },

    // ── t3-1-q039 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q039": {
      // EN: <p>A right pyramid has a rectangular base measuring <span class="mono">6 cm</span> by <span class="mono">8 cm</span>. Each of its four sloping edges has length <span class="mono">13 cm</span>. Find the volume of the pyramid, in <span class="unit">cm3</span>. (No angles are involved.)</p>
      stem: "<p>一個直立角錐體的底是 <span class=\"mono\">6 cm</span> 乘 <span class=\"mono\">8 cm</span> 的長方形，四條斜稜的長度都是 <span class=\"mono\">13 cm</span>。求 (Find) 該角錐體的體積，以 <span class=\"unit\">cm3</span> 為單位。（題目不涉及角。）</p>",
      hints: [
        // EN: The apex is above the centre of the rectangle, where the diagonals cross. Half a diagonal is <span class="chem">(1/2)sqrt(6^2 + 8^2) = 5</span>.
        "頂點位於長方形中心（即對角線交點）的正上方。對角線的一半為 <span class=\"chem\">(1/2)sqrt(6^2 + 8^2) = 5</span>。",
        // EN: A sloping edge, half a diagonal and the height form a right-angled triangle: <span class="chem">h = sqrt(13^2 - 5^2)</span>.
        "斜稜、半條對角線及高組成一個直角三角形：<span class=\"chem\">h = sqrt(13^2 - 5^2)</span>。",
      ],
      // EN: <div class="worked__math">Half-diagonal = 5 cm, &nbsp; <i>h</i> = √(169 − 25) = 12 cm</div><div class="worked__math"><i>V</i> = <span class="frac"><span>1</span><span>3</span></span>(6 × 8)(12) = <b>192 cm<sup>3</sup></b></div>
      solution: "<div class=\"worked__math\">半條對角線 = 5 cm, &nbsp; <i>h</i> = √(169 − 25) = 12 cm</div><div class=\"worked__math\"><i>V</i> = <span class=\"frac\"><span>1</span><span>3</span></span>(6 × 8)(12) = <b>192 cm<sup>3</sup></b></div>",
    },

    // ── t3-1-q040 · short · exam · SL · SL 3.4 · 7 marks
    "t3-1-q040": {
      // EN: <p>A sector <span class="chem">OAB</span> of a circle with centre <span class="chem">O</span> has radius <span class="mono">6 cm</span> and <span class="chem">angle AOB = pi/3</span> <strong>radians</strong>.<br>(a) Find the exact length of the arc <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(b) Find the exact area of the segment between the chord <span class="chem">AB</span> and the arc <span class="chem">AB</span>. <strong>[3 marks]</strong><br>(c) Find the exact perimeter of this segment. <strong>[2 marks]</strong></p>
      stem: "<p>圓心為 <span class=\"chem\">O</span> 的圓扇形 <span class=\"chem\">OAB</span>，半徑為 <span class=\"mono\">6 cm</span>，且 <span class=\"chem\">angle AOB = pi/3</span> <strong>弧度</strong>。<br>(a) 求 (Find) 弧 <span class=\"chem\">AB</span> 長度的準確值。<strong>[2 marks]</strong><br>(b) 求介乎弦 <span class=\"chem\">AB</span> 與弧 <span class=\"chem\">AB</span> 之間的弓形面積的準確值。<strong>[3 marks]</strong><br>(c) 求這個弓形周界的準確值。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: The angle is in radians: <span class="chem">l = r theta</span>, <span class="chem">A = (1/2)r^2 theta</span>.
        "角以弧度為單位：<span class=\"chem\">l = r theta</span>，<span class=\"chem\">A = (1/2)r^2 theta</span>。",
        // EN: Segment = sector − triangle, with triangle area <span class="chem">(1/2)r^2 sin theta</span> and <span class="chem">sin(pi/3) = sqrt(3)/2</span>.
        "弓形 = 扇形 − 三角形，其中三角形面積為 <span class=\"chem\">(1/2)r^2 sin theta</span>，而 <span class=\"chem\">sin(pi/3) = sqrt(3)/2</span>。",
        // EN: For (c), what kind of triangle has two sides of 6 cm and a <span class="mono">60°</span> angle between them?
        "在 (c) 部，兩邊皆為 6 cm 而夾角為 <span class=\"mono\">60°</span> 的三角形是哪一種三角形？",
      ],
      // EN: <div class="worked__math">(a) <i>l</i> = 6(<i>π</i>/3) = <b>2<i>π</i> cm</b></div><div class="worked__math">(b) 6<i>π</i> − 18(√3/2) = <b>6<i>π</i> − 9√3 cm<sup>2</sup></b></div><div class="worked__math">(c) Equilateral triangle ⇒ <i>AB</i> = 6, perimeter = <b>2<i>π</i> + 6 cm</b></div>
      solution: "<div class=\"worked__math\">(a) <i>l</i> = 6(<i>π</i>/3) = <b>2<i>π</i> cm</b></div><div class=\"worked__math\">(b) 6<i>π</i> − 18(√3/2) = <b>6<i>π</i> − 9√3 cm<sup>2</sup></b></div><div class=\"worked__math\">(c) 等邊三角形 ⇒ <i>AB</i> = 6，周界 = <b>2<i>π</i> + 6 cm</b></div>",
      // EN: <p>(a) 2π cm; (b) (6π − 9√3) cm²; (c) (2π + 6) cm.</p>
      answer: "<p>(a) 2π cm；(b) (6π − 9√3) cm²；(c) (2π + 6) cm。</p>",
      markscheme: [
        // EN: M1: l = rθ = 6 × π/3.
        "M1：l = rθ = 6 × π/3。",
        // EN: A1: l = 2π cm.
        "A1：l = 2π cm。",
        // EN: M1: Sector area (1/2)(6²)(π/3) = 6π.
        "M1：扇形面積 (1/2)(6²)(π/3) = 6π。",
        // EN: M1: Triangle area (1/2)(6²) sin(π/3) = 9√3.
        "M1：三角形面積 (1/2)(6²) sin(π/3) = 9√3。",
        // EN: A1: Segment area = 6π − 9√3 cm².
        "A1：弓形面積 = 6π − 9√3 cm²。",
        // EN: R1: Triangle OAB is isosceles with an angle of π/3 (60°), so it is equilateral and AB = 6 cm.
        "R1：三角形 OAB 是等腰三角形，且有一個角為 π/3 (60°)，所以它是等邊三角形，AB = 6 cm。",
        // EN: A1: Perimeter = 2π + 6 cm.
        "A1：周界 = 2π + 6 cm。",
      ],
    },

    // ── t3-1-q041 · short · exam · SL · SL 3.1 · 9 marks
    "t3-1-q041": {
      // EN: <p>A right pyramid <span class="chem">VABCD</span> has a square base <span class="chem">ABCD</span> of side <span class="mono">8 cm</span>, and each sloping edge has length <span class="mono">11 cm</span>. <span class="chem">M</span> is the centre of the base and <span class="chem">N</span> is the midpoint of <span class="chem">AB</span>. Give angles in degrees and answers to 3 significant figures.<br>(a) Find the height <span class="chem">VM</span>. <strong>[3 marks]</strong><br>(b) Find the volume of the pyramid. <strong>[2 marks]</strong><br>(c) Find the angle between the edge <span class="chem">VA</span> and the base. <strong>[2 marks]</strong><br>(d) Find the angle between the line <span class="chem">VN</span> and the base. <strong>[2 marks]</strong></p>
      stem: "<p>直立角錐體 <span class=\"chem\">VABCD</span> 的底 <span class=\"chem\">ABCD</span> 是邊長 <span class=\"mono\">8 cm</span> 的正方形，每條斜稜的長度都是 <span class=\"mono\">11 cm</span>。<span class=\"chem\">M</span> 是底的中心，<span class=\"chem\">N</span> 是 <span class=\"chem\">AB</span> 的中點。角以度為單位，答案準確至 3 位有效數字。<br>(a) 求 (Find) 高 <span class=\"chem\">VM</span>。<strong>[3 marks]</strong><br>(b) 求該角錐體的體積。<strong>[2 marks]</strong><br>(c) 求稜 <span class=\"chem\">VA</span> 與底之間的角。<strong>[2 marks]</strong><br>(d) 求直線 <span class=\"chem\">VN</span> 與底之間的角。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: The apex is directly above the centre <span class="chem">M</span>. For a line from <span class="chem">V</span> to a point of the base, its projection on the base starts at <span class="chem">M</span>, so the angle with the base sits in a right-angled triangle containing the vertical <span class="chem">VM</span>.
        "頂點位於中心 <span class=\"chem\">M</span> 的正上方。由 <span class=\"chem\">V</span> 至底上某點的直線，其在底上的投影由 <span class=\"chem\">M</span> 開始，所以它與底所成的角位於一個包含垂直線 <span class=\"chem\">VM</span> 的直角三角形中。",
        // EN: <span class="chem">MA</span> is half a diagonal; <span class="chem">MN</span> is half a side.
        "<span class=\"chem\">MA</span> 是半條對角線；<span class=\"chem\">MN</span> 是半條邊。",
      ],
      // EN: <div class="worked__math">(a) <i>MA</i> = 4√2, <i>VM</i> = √(121 − 32) = √89 ≈ <b>9.43 cm</b> &nbsp; (b) <i>V</i> = <span class="frac"><span>64√89</span><span>3</span></span> ≈ <b>201 cm<sup>3</sup></b></div><div class="worked__math">(c) cos ∠<i>VAM</i> = 4√2/11 ⇒ <b>59.1°</b> &nbsp; (d) tan ∠<i>VNM</i> = √89/4 ⇒ <b>67.0°</b></div>
      solution: "<div class=\"worked__math\">(a) <i>MA</i> = 4√2, <i>VM</i> = √(121 − 32) = √89 ≈ <b>9.43 cm</b> &nbsp; (b) <i>V</i> = <span class=\"frac\"><span>64√89</span><span>3</span></span> ≈ <b>201 cm<sup>3</sup></b></div><div class=\"worked__math\">(c) cos ∠<i>VAM</i> = 4√2/11 ⇒ <b>59.1°</b> &nbsp; (d) tan ∠<i>VNM</i> = √89/4 ⇒ <b>67.0°</b></div>",
      // EN: <p>(a) VM = √89 ≈ 9.43 cm; (b) 201 cm³; (c) 59.1°; (d) 67.0°.</p>
      answer: "<p>(a) VM = √89 ≈ 9.43 cm；(b) 201 cm³；(c) 59.1°；(d) 67.0°。</p>",
      markscheme: [
        // EN: M1: MA is half the diagonal of the base: AC = √(8² + 8²) = 8√2, so MA = 4√2.
        "M1：MA 是底的對角線的一半：AC = √(8² + 8²) = 8√2，所以 MA = 4√2。",
        // EN: M1: Pythagoras in triangle VMA: VM² = 11² − (4√2)² = 121 − 32.
        "M1：在三角形 VMA 中使用畢氏定理：VM² = 11² − (4√2)² = 121 − 32。",
        // EN: A1: VM = √89 ≈ 9.43 cm.
        "A1：VM = √89 ≈ 9.43 cm。",
        // EN: M1: V = (1/3)(8²)(√89).
        "M1：V = (1/3)(8²)(√89)。",
        // EN: A1: V ≈ 201 cm³.
        "A1：V ≈ 201 cm³。",
        // EN: M1: The projection of VA on the base is MA, so cos(∠VAM) = 4√2/11 (or tan = √89/(4√2)).
        "M1：VA 在底上的投影是 MA，所以 cos(∠VAM) = 4√2/11（或 tan = √89/(4√2)）。",
        // EN: A1: ∠VAM ≈ 59.1°.
        "A1：∠VAM ≈ 59.1°。",
        // EN: M1: The projection of VN on the base is MN = 4 cm, so tan(∠VNM) = √89/4.
        "M1：VN 在底上的投影是 MN = 4 cm，所以 tan(∠VNM) = √89/4。",
        // EN: A1: ∠VNM ≈ 67.0°.
        "A1：∠VNM ≈ 67.0°。",
      ],
    },

    // ── t3-1-q042 · numeric · exam · SL · SL 3.3 · 4 marks
    "t3-1-q042": {
      // EN: <p>From the top of a vertical cliff <span class="mono">85 m</span> above sea level, an observer sees two boats due West of the cliff, in a straight line with its foot. The angles of depression of the boats are <span class="mono">32°</span> and <span class="mono">18°</span> (degrees). Find the distance between the two boats, in metres to 3 significant figures.</p>
      stem: "<p>一名觀察者在一個高出海平面 <span class=\"mono\">85 m</span> 的垂直懸崖頂上，看見兩艘位於懸崖正西方、與懸崖底部成一直線的小船。兩艘小船的俯角分別為 <span class=\"mono\">32°</span> 及 <span class=\"mono\">18°</span>（度）。求 (Find) 兩艘小船之間的距離，以米為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the angle of depression from the cliff top equals the angle of elevation from the boat (alternate angles). The smaller angle belongs to the farther boat.
        "解碼：從懸崖頂測得的俯角等於從小船測得的仰角（錯角）。較小的角屬於較遠的小船。",
        // EN: Each boat is at a horizontal distance <span class="chem">85/tan(angle)</span> from the foot of the cliff.
        "每艘小船與懸崖底部的水平距離為 <span class=\"chem\">85/tan(angle)</span>。",
        // EN: Distance between the boats <span class="chem">= 85/tan 18° - 85/tan 32°</span>.
        "兩艘小船之間的距離 <span class=\"chem\">= 85/tan 18° - 85/tan 32°</span>。",
      ],
      // EN: <div class="worked__math">Far boat: 85/tan 18° ≈ 261.60 m; &nbsp; near boat: 85/tan 32° ≈ 136.03 m</div><div class="worked__math">Distance ≈ 261.60 − 136.03 ≈ <b>126 m</b></div>
      solution: "<div class=\"worked__math\">較遠的小船：85/tan 18° ≈ 261.60 m； &nbsp; 較近的小船：85/tan 32° ≈ 136.03 m</div><div class=\"worked__math\">距離 ≈ 261.60 − 136.03 ≈ <b>126 m</b></div>",
    },

    // ── t3-1-q043 · numeric · exam · SL · SL 3.2 · 3 marks
    "t3-1-q043": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 45°</span>, <span class="chem">angle ABC = 60°</span> (degrees) and <span class="chem">BC = 6 cm</span>. Find the exact length of <span class="chem">AC</span>, in cm, in the form <span class="chem">p sqrt(q)</span>.</p>
      stem: "<p>在三角形 <span class=\"chem\">ABC</span> 中，<span class=\"chem\">angle BAC = 45°</span>，<span class=\"chem\">angle ABC = 60°</span>（度），且 <span class=\"chem\">BC = 6 cm</span>。求 (Find) <span class=\"chem\">AC</span> 長度的準確值，以 cm 為單位，並以 <span class=\"chem\">p sqrt(q)</span> 的形式表示。</p>",
      hints: [
        // EN: Sine rule: <span class="chem">AC/(sin 60°) = 6/(sin 45°)</span>.
        "正弦定律：<span class=\"chem\">AC/(sin 60°) = 6/(sin 45°)</span>。",
        // EN: Use <span class="chem">sin 60° = sqrt(3)/2</span> and <span class="chem">sin 45° = sqrt(2)/2</span>, then rationalise.
        "使用 <span class=\"chem\">sin 60° = sqrt(3)/2</span> 及 <span class=\"chem\">sin 45° = sqrt(2)/2</span>，然後把分母有理化。",
      ],
      // EN: <div class="worked__math"><i>AC</i> = <span class="frac"><span>6(√3/2)</span><span>√2/2</span></span> = <span class="frac"><span>6√3</span><span>√2</span></span> = <span class="frac"><span>6√6</span><span>2</span></span> = <b>3√6 cm</b></div>
      solution: "<div class=\"worked__math\"><i>AC</i> = <span class=\"frac\"><span>6(√3/2)</span><span>√2/2</span></span> = <span class=\"frac\"><span>6√3</span><span>√2</span></span> = <span class=\"frac\"><span>6√6</span><span>2</span></span> = <b>3√6 cm</b></div>",
    },

    // ── t3-1-q044 · numeric · exam · SL · SL 3.5 · 4 marks
    "t3-1-q044": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 30°</span> (degrees), <span class="chem">BC = 5 cm</span> and <span class="chem">AC = 5sqrt(2) cm</span>. Given that <span class="chem">angle ABC</span> is <strong>obtuse</strong>, find the size of <span class="chem">angle ACB</span> in degrees.</p>
      stem: "<p>在三角形 <span class=\"chem\">ABC</span> 中，<span class=\"chem\">angle BAC = 30°</span>（度），<span class=\"chem\">BC = 5 cm</span>，且 <span class=\"chem\">AC = 5sqrt(2) cm</span>。已知 <span class=\"chem\">angle ABC</span> 為<strong>鈍角</strong>，求 (Find) <span class=\"chem\">angle ACB</span> 的大小，以度為單位。</p>",
      hints: [
        // EN: Decode: SSA information with a condition ("obtuse") that picks one of the two triangles. Find <span class="chem">angle ABC</span> with the sine rule, then use the angle sum.
        "解碼：SSA 資料附帶一個條件（「鈍角」），用以從兩個三角形中選出一個。先用正弦定律求 <span class=\"chem\">angle ABC</span>，再用三角形內角和。",
        // EN: <span class="chem">sin B = (5sqrt(2) sin 30°)/5 = sqrt(2)/2</span>, so <span class="chem">B = 45°</span> or <span class="chem">135°</span>.
        "<span class=\"chem\">sin B = (5sqrt(2) sin 30°)/5 = sqrt(2)/2</span>，所以 <span class=\"chem\">B = 45°</span> 或 <span class=\"chem\">135°</span>。",
      ],
      // EN: <p><b>Decode.</b> "Obtuse" selects the second solution of the sine equation.</p><div class="worked__math">sin <i>B</i> = <span class="frac"><span>5√2 × <sup>1</sup>/<sub>2</sub></span><span>5</span></span> = <span class="frac"><span>√2</span><span>2</span></span> ⇒ <i>B</i> = 135° (obtuse)</div><div class="worked__math">∠<i>ACB</i> = 180° − 30° − 135° = <b>15°</b></div>
      solution: "<p><b>解碼：</b>「鈍角」選出了正弦方程的第二個解。</p><div class=\"worked__math\">sin <i>B</i> = <span class=\"frac\"><span>5√2 × <sup>1</sup>/<sub>2</sub></span><span>5</span></span> = <span class=\"frac\"><span>√2</span><span>2</span></span> ⇒ <i>B</i> = 135°（鈍角）</div><div class=\"worked__math\">∠<i>ACB</i> = 180° − 30° − 135° = <b>15°</b></div>",
    },

    // ── t3-1-q045 · numeric · challenge · SL · SL 3.2, 3.3 · 6 marks
    "t3-1-q045": {
      // EN: <p>A lighthouse <span class="chem">L</span> is <span class="mono">12 km</span> from a port <span class="chem">P</span> on a bearing of <span class="mono">050°</span>. A ship leaves <span class="chem">P</span> and sails in a straight line on a bearing of <span class="mono">080°</span> at a constant <span class="mono">15 km h⁻¹</span>. The lighthouse beam can be seen from the ship whenever the ship is within <span class="mono">9 km</span> of <span class="chem">L</span>. For how many <strong>minutes</strong> can the beam be seen? Angles are in degrees; give your answer to 3 significant figures.</p>
      stem: "<p>燈塔 <span class=\"chem\">L</span> 位於港口 <span class=\"chem\">P</span> 方位角 <span class=\"mono\">050°</span> 的方向，與港口相距 <span class=\"mono\">12 km</span>。一艘船離開 <span class=\"chem\">P</span>，沿方位角 <span class=\"mono\">080°</span> 以 <span class=\"mono\">15 km h⁻¹</span> 的恒速直線航行。每當船與 <span class=\"chem\">L</span> 的距離在 <span class=\"mono\">9 km</span> 以內，船上便能看見燈塔的光束。光束能被看見多少<strong>分鐘</strong>？角以度為單位；答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: you need the length of the part of the ship’s path that lies within 9 km of <span class="chem">L</span>, then convert distance to time. The path enters and leaves the 9 km circle at two points: a cosine-rule quadratic (like the ambiguous case).
        "解碼：你需要求出船的航線中位於 <span class=\"chem\">L</span> 的 9 km 範圍內那一段的長度，再把距離換算為時間。航線在兩點進入及離開半徑 9 km 的圓：這是一條由餘弦定律得出的二次方程（與兩義情況相似）。",
        // EN: The angle at <span class="chem">P</span> between <span class="chem">PL</span> and the path is <span class="chem">80° - 50° = 30°</span>. If the ship is <span class="chem">x</span> km from <span class="chem">P</span> and 9 km from <span class="chem">L</span>: <span class="chem">9^2 = 12^2 + x^2 - 2(12)x cos 30°</span>.
        "在 <span class=\"chem\">P</span>，<span class=\"chem\">PL</span> 與航線的夾角為 <span class=\"chem\">80° - 50° = 30°</span>。若船與 <span class=\"chem\">P</span> 相距 <span class=\"chem\">x</span> km，並與 <span class=\"chem\">L</span> 相距 9 km，則 <span class=\"chem\">9^2 = 12^2 + x^2 - 2(12)x cos 30°</span>。",
        // EN: Solve <span class="chem">x^2 - (24 cos 30°)x + 63 = 0</span>. The difference of the two roots is the distance travelled within range; divide by 15 and convert hours to minutes.
        "解 <span class=\"chem\">x^2 - (24 cos 30°)x + 63 = 0</span>。兩根之差就是在範圍內航行的距離；除以 15，再把小時換算為分鐘。",
      ],
      // EN: <p><b>Decode.</b> "Within 9 km" happens between the two points where the distance to L equals 9 km; find both with the cosine rule.</p><div class="worked__math"><i>x</i><sup>2</sup> − 20.785<i>x</i> + 63 = 0 ⇒ <i>x</i> ≈ 3.684 or 17.101 km</div><div class="worked__math">Distance in range ≈ 13.416 km (= √180) ⇒ time = 13.416/15 h ≈ 0.89443 h ≈ <b>53.7 minutes</b></div>
      solution: "<p><b>解碼：</b>「在 9 km 以內」發生在與 L 的距離等於 9 km 的兩點之間；用餘弦定律求出這兩點。</p><div class=\"worked__math\"><i>x</i><sup>2</sup> − 20.785<i>x</i> + 63 = 0 ⇒ <i>x</i> ≈ 3.684 或 17.101 km</div><div class=\"worked__math\">範圍內的距離 ≈ 13.416 km (= √180) ⇒ 時間 = 13.416/15 h ≈ 0.89443 h ≈ <b>53.7 分鐘</b></div>",
    },

    // ── t3-1-q046 · numeric · challenge · SL · SL 3.5 · 5 marks
    "t3-1-q046": {
      // EN: <p>A straight fence starts at a post <span class="chem">A</span> and runs across a flat field. A goat is tied to a stake <span class="chem">T</span> with a rope of length <span class="mono">6 m</span>. The stake is <span class="mono">9 m</span> from <span class="chem">A</span>, and the line <span class="chem">AT</span> makes an angle of <span class="mono">28°</span> (degrees) with the fence. When the rope is pulled tight, the goat can just reach the fence at exactly two points. How far apart are these two points, in metres to 3 significant figures?</p>
      stem: "<p>一道筆直的圍欄由柱 <span class=\"chem\">A</span> 開始，橫越一片平坦的田野。一隻山羊被一條長 <span class=\"mono\">6 m</span> 的繩繫在樁 <span class=\"chem\">T</span> 上。該樁與 <span class=\"chem\">A</span> 相距 <span class=\"mono\">9 m</span>，而直線 <span class=\"chem\">AT</span> 與圍欄成 <span class=\"mono\">28°</span>（度）角。當繩被拉緊時，山羊恰好能在兩點觸及圍欄。這兩點相距多少米？答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: each point <span class="chem">X</span> on the fence with <span class="chem">TX = 6</span> gives a triangle <span class="chem">ATX</span> with <span class="chem">AT = 9</span>, <span class="chem">TX = 6</span> and <span class="chem">angle TAX = 28°</span>: two sides and a non-included angle, the ambiguous case. You want the difference of the two possible lengths <span class="chem">AX</span>.
        "解碼：圍欄上每一個使 <span class=\"chem\">TX = 6</span> 的點 <span class=\"chem\">X</span>，都給出一個三角形 <span class=\"chem\">ATX</span>，其中 <span class=\"chem\">AT = 9</span>、<span class=\"chem\">TX = 6</span> 及 <span class=\"chem\">angle TAX = 28°</span>：兩邊及一個非夾角，即兩義情況。所求的是兩個可能長度 <span class=\"chem\">AX</span> 之差。",
        // EN: Cosine rule in triangle <span class="chem">ATX</span> with <span class="chem">AX = x</span>: <span class="chem">36 = 81 + x^2 - 18x cos 28°</span>.
        "設 <span class=\"chem\">AX = x</span>，在三角形 <span class=\"chem\">ATX</span> 中使用餘弦定律：<span class=\"chem\">36 = 81 + x^2 - 18x cos 28°</span>。",
        // EN: Solve the quadratic and subtract the roots (or use the perpendicular from <span class="chem">T</span> to the fence, of length <span class="chem">9 sin 28°</span>).
        "解二次方程並把兩根相減（或利用由 <span class=\"chem\">T</span> 至圍欄、長度為 <span class=\"chem\">9 sin 28°</span> 的垂線）。",
      ],
      // EN: <p><b>Decode.</b> Two triangles from SSA data: the two positions of the rope form an isosceles triangle, and the required length is <i>x</i><sub>1</sub> − <i>x</i><sub>2</sub>.</p><div class="worked__math"><i>x</i><sup>2</sup> − 15.893<i>x</i> + 45 = 0 ⇒ <i>x</i> ≈ 3.687 or 12.206 m</div><div class="worked__math">Distance apart ≈ 12.206 − 3.687 ≈ <b>8.52 m</b> (= 2√(36 − (9 sin 28°)<sup>2</sup>))</div>
      solution: "<p><b>解碼：</b>SSA 資料給出兩個三角形：繩的兩個位置組成一個等腰三角形，所求長度為 <i>x</i><sub>1</sub> − <i>x</i><sub>2</sub>。</p><div class=\"worked__math\"><i>x</i><sup>2</sup> − 15.893<i>x</i> + 45 = 0 ⇒ <i>x</i> ≈ 3.687 或 12.206 m</div><div class=\"worked__math\">兩點距離 ≈ 12.206 − 3.687 ≈ <b>8.52 m</b> (= 2√(36 − (9 sin 28°)<sup>2</sup>))</div>",
    },

    // ── t3-1-q047 · numeric · challenge · SL · SL 3.4 · 6 marks
    "t3-1-q047": {
      // EN: <p>A circular pond has radius <span class="mono">5 m</span>. A straight footbridge is built across it, and the smaller of the two pieces of the pond cut off by the bridge has exactly <strong>one quarter</strong> of the area of the whole pond. Find the shortest distance from the centre of the pond to the footbridge, in metres to 3 significant figures. Work in radians.</p>
      stem: "<p>一個圓形池塘的半徑為 <span class=\"mono\">5 m</span>。池上建有一條筆直的行人橋，橋把池塘分成兩部分，其中較小部分的面積恰好是整個池塘面積的<strong>四分之一</strong>。求 (Find) 池塘中心至行人橋的最短距離，以米為單位，答案準確至 3 位有效數字。以弧度計算。</p>",
      hints: [
        // EN: Decode: the smaller piece is a circular segment. Its area depends on the angle <span class="chem">theta</span> (radians) that the bridge subtends at the centre. Set the segment area equal to a quarter of the circle and solve for <span class="chem">theta</span>; then find the perpendicular distance.
        "解碼：較小的部分是一個弓形。它的面積取決於橋在圓心所對的角 <span class=\"chem\">theta</span>（弧度）。設弓形面積等於圓面積的四分之一，解出 <span class=\"chem\">theta</span>；然後求垂直距離。",
        // EN: <span class="chem">(1/2)(5^2)(theta - sin theta) = (1/4)pi(5^2)</span> simplifies to <span class="chem">theta - sin theta = pi/2</span>. This cannot be solved by algebra: use your GDC (graph or solver) in radians.
        "<span class=\"chem\">(1/2)(5^2)(theta - sin theta) = (1/4)pi(5^2)</span> 化簡為 <span class=\"chem\">theta - sin theta = pi/2</span>。這條方程不能用代數方法解：要用 GDC（圖像或解方程功能），並設定為弧度。",
        // EN: The perpendicular from the centre bisects the angle, so the distance is <span class="chem">5 cos(theta/2)</span>.
        "由圓心所作的垂線平分該角，所以距離為 <span class=\"chem\">5 cos(theta/2)</span>。",
      ],
      // EN: <p><b>Decode.</b> Segment area = quarter of the circle gives an equation in <i>θ</i>, solved numerically.</p><div class="worked__math"><i>θ</i> − sin <i>θ</i> = <i>π</i>/2 ⇒ <i>θ</i> ≈ 2.3099 rad (GDC)</div><div class="worked__math">Distance = 5 cos(1.15494) ≈ <b>2.02 m</b></div>
      solution: "<p><b>解碼：</b>弓形面積 = 圓面積的四分之一，得出一條 <i>θ</i> 的方程，以數值方法求解。</p><div class=\"worked__math\"><i>θ</i> − sin <i>θ</i> = <i>π</i>/2 ⇒ <i>θ</i> ≈ 2.3099 rad (GDC)</div><div class=\"worked__math\">距離 = 5 cos(1.15494) ≈ <b>2.02 m</b></div>",
    },

    // ── t3-1-q048 · numeric · challenge · SL · SL 3.4 · 7 marks
    "t3-1-q048": {
      // EN: <p>A tight drive belt passes around two pulley wheels of radii <span class="mono">10 cm</span> and <span class="mono">4 cm</span> whose centres are <span class="mono">15 cm</span> apart. The belt does not cross itself: it consists of two straight pieces, each a common tangent to both wheels, and two arcs, one on each wheel. Find the total length of the belt, in cm to 3 significant figures. Work in radians.</p>
      stem: "<p>一條拉緊的傳動帶繞過兩個半徑分別為 <span class=\"mono\">10 cm</span> 及 <span class=\"mono\">4 cm</span> 的滑輪，兩個滑輪的圓心相距 <span class=\"mono\">15 cm</span>。傳動帶不會自我交叉：它由兩段直線部分（每段都是兩個滑輪的公切線）及兩段弧（每個滑輪上各一段）組成。求 (Find) 傳動帶的總長度，以 cm 為單位，答案準確至 3 位有效數字。以弧度計算。</p>",
      hints: [
        // EN: Decode: total length = 2 straight tangent pieces + arc on the large wheel + arc on the small wheel. Each piece needs right-angled trigonometry; the arcs need angles in radians and <span class="chem">l = r theta</span>.
        "解碼：總長度 = 2 段直線切線部分 + 大滑輪上的弧 + 小滑輪上的弧。每段直線部分都要用直角三角形的三角學；弧則需要以弧度表示的角及 <span class=\"chem\">l = r theta</span>。",
        // EN: Join the centres (15 cm). Draw a line from the small centre parallel to a straight piece: it makes a right-angled triangle with hypotenuse 15 and one side <span class="chem">10 - 4 = 6</span>. So each straight piece is <span class="chem">sqrt(15^2 - 6^2)</span>, and <span class="chem">alpha = arcsin(6/15)</span>.
        "連接兩個圓心 (15 cm)。由小滑輪的圓心畫一條與直線部分平行的線：它組成一個斜邊為 15、其中一邊為 <span class=\"chem\">10 - 4 = 6</span> 的直角三角形。所以每段直線部分長 <span class=\"chem\">sqrt(15^2 - 6^2)</span>，且 <span class=\"chem\">alpha = arcsin(6/15)</span>。",
        // EN: The belt wraps an angle <span class="chem">pi + 2alpha</span> around the large wheel and <span class="chem">pi - 2alpha</span> around the small wheel.
        "傳動帶在大滑輪上繞過的角為 <span class=\"chem\">pi + 2alpha</span>，在小滑輪上繞過的角為 <span class=\"chem\">pi - 2alpha</span>。",
      ],
      // EN: <p><b>Decode.</b> Split the belt into tangents and arcs; the radius difference gives a right-angled triangle.</p><div class="worked__math">Straight pieces: 2√(225 − 36) = 2√189 ≈ 27.495 cm; &nbsp; <i>α</i> = arcsin 0.4 ≈ 0.41152 rad</div><div class="worked__math">Arcs: 10(<i>π</i> + 2<i>α</i>) + 4(<i>π</i> − 2<i>α</i>) = 14<i>π</i> + 12<i>α</i> ≈ 43.982 + 4.938 = 48.920 cm</div><div class="worked__math">Total ≈ 27.495 + 48.920 ≈ <b>76.4 cm</b></div>
      solution: "<p><b>解碼：</b>把傳動帶分成切線及弧；半徑之差給出一個直角三角形。</p><div class=\"worked__math\">直線部分：2√(225 − 36) = 2√189 ≈ 27.495 cm； &nbsp; <i>α</i> = arcsin 0.4 ≈ 0.41152 rad</div><div class=\"worked__math\">弧：10(<i>π</i> + 2<i>α</i>) + 4(<i>π</i> − 2<i>α</i>) = 14<i>π</i> + 12<i>α</i> ≈ 43.982 + 4.938 = 48.920 cm</div><div class=\"worked__math\">總長 ≈ 27.495 + 48.920 ≈ <b>76.4 cm</b></div>",
    },

    // ── t3-1-q049 · numeric · challenge · SL · SL 3.1, 3.2 · 6 marks
    "t3-1-q049": {
      // EN: <p>A storage box is a cuboid <span class="chem">ABCDEFGH</span> with base <span class="chem">ABCD</span>, where <span class="chem">AB = 50 cm</span>, <span class="chem">BC = 30 cm</span>, and height <span class="mono">20 cm</span>; <span class="chem">E</span>, <span class="chem">F</span>, <span class="chem">G</span>, <span class="chem">H</span> are vertically above <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span>. Two straight wires are fixed inside the box, one from <span class="chem">A</span> to <span class="chem">G</span> and one from <span class="chem">B</span> to <span class="chem">H</span>. They cross at the centre of the box. Find the <strong>acute</strong> angle between the wires, in degrees to 3 significant figures.</p>
      stem: "<p>一個儲物箱是長方體 <span class=\"chem\">ABCDEFGH</span>，底為 <span class=\"chem\">ABCD</span>，其中 <span class=\"chem\">AB = 50 cm</span>，<span class=\"chem\">BC = 30 cm</span>，高為 <span class=\"mono\">20 cm</span>；<span class=\"chem\">E</span>、<span class=\"chem\">F</span>、<span class=\"chem\">G</span>、<span class=\"chem\">H</span> 分別位於 <span class=\"chem\">A</span>、<span class=\"chem\">B</span>、<span class=\"chem\">C</span>、<span class=\"chem\">D</span> 的正上方。箱內固定了兩條筆直的鋼線，一條由 <span class=\"chem\">A</span> 至 <span class=\"chem\">G</span>，另一條由 <span class=\"chem\">B</span> 至 <span class=\"chem\">H</span>。兩條鋼線在箱的中心相交。求 (Find) 兩條鋼線之間的<strong>銳角</strong>，以度為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the angle between two intersecting lines in a solid. The space diagonals bisect each other at the centre <span class="chem">O</span>, so triangle <span class="chem">OAB</span> is isosceles with known sides. Watch for the word "acute".
        "解碼：立體中兩條相交直線之間的角。空間對角線在中心 <span class=\"chem\">O</span> 互相平分，所以三角形 <span class=\"chem\">OAB</span> 是邊長已知的等腰三角形。留意「銳角」一詞。",
        // EN: Each half-diagonal is <span class="chem">OA = OB = (1/2)sqrt(50^2 + 30^2 + 20^2)</span>, and the third side is the edge <span class="chem">AB = 50</span>.
        "每條半對角線為 <span class=\"chem\">OA = OB = (1/2)sqrt(50^2 + 30^2 + 20^2)</span>，而第三條邊是稜 <span class=\"chem\">AB = 50</span>。",
        // EN: The cosine rule gives <span class="chem">angle AOB</span>, which is obtuse here. The acute angle between the lines is <span class="chem">180° - angle AOB</span>.
        "餘弦定律給出 <span class=\"chem\">angle AOB</span>，在這裏它是鈍角。兩條直線之間的銳角為 <span class=\"chem\">180° - angle AOB</span>。",
      ],
      // EN: <p><b>Decode.</b> Two space diagonals meet at the centre; use triangle OAB and then take the acute angle.</p><div class="worked__math"><i>OA</i><sup>2</sup> = <span class="frac"><span>3800</span><span>4</span></span> = 950 ⇒ cos ∠<i>AOB</i> = <span class="frac"><span>950 + 950 − 2500</span><span>2(950)</span></span> = −<span class="frac"><span>6</span><span>19</span></span> ⇒ ∠<i>AOB</i> ≈ 108.41°</div><div class="worked__math">Acute angle ≈ 180° − 108.41° ≈ <b>71.6°</b></div>
      solution: "<p><b>解碼：</b>兩條空間對角線相交於中心；利用三角形 OAB，再取銳角。</p><div class=\"worked__math\"><i>OA</i><sup>2</sup> = <span class=\"frac\"><span>3800</span><span>4</span></span> = 950 ⇒ cos ∠<i>AOB</i> = <span class=\"frac\"><span>950 + 950 − 2500</span><span>2(950)</span></span> = −<span class=\"frac\"><span>6</span><span>19</span></span> ⇒ ∠<i>AOB</i> ≈ 108.41°</div><div class=\"worked__math\">銳角 ≈ 180° − 108.41° ≈ <b>71.6°</b></div>",
    },

    // ── t3-1-q050 · numeric · challenge · SL · SL 3.1 · 5 marks
    "t3-1-q050": {
      // EN: <p>A solid metal hemisphere of radius <span class="mono">6 cm</span> is melted down, and the metal is used to cast solid right circular cones, each with base radius <span class="mono">2 cm</span> and height <span class="mono">5 cm</span>. No metal is lost. What is the greatest number of <strong>complete</strong> cones that can be cast? (No angles are involved.)</p>
      stem: "<p>把一個半徑為 <span class=\"mono\">6 cm</span> 的實心金屬半球體熔掉，用這些金屬鑄造實心直立圓錐體，每個圓錐體的底半徑為 <span class=\"mono\">2 cm</span>、高為 <span class=\"mono\">5 cm</span>。過程中沒有損失金屬。最多能鑄造多少個<strong>完整</strong>的圓錐體？（題目不涉及角。）</p>",
      hints: [
        // EN: Decode: "melted and recast" means the volume is conserved. Divide the total volume by the volume of one cone; "complete" cones means you must round <strong>down</strong> to a whole number.
        "解碼：「熔掉再鑄造」表示體積守恆。把總體積除以一個圓錐體的體積；「完整」的圓錐體表示你必須<strong>捨去</strong>至整數。",
        // EN: Hemisphere: <span class="chem">(2/3)pi(6^3) = 144pi</span>. One cone: <span class="chem">(1/3)pi(2^2)(5) = (20pi)/3</span>.
        "半球體：<span class=\"chem\">(2/3)pi(6^3) = 144pi</span>。一個圓錐體：<span class=\"chem\">(1/3)pi(2^2)(5) = (20pi)/3</span>。",
        // EN: <span class="chem">144pi ÷ (20pi)/3 = 432/20</span>. Is this a whole number?
        "<span class=\"chem\">144pi ÷ (20pi)/3 = 432/20</span>。這是整數嗎？",
      ],
      // EN: <p><b>Decode.</b> Volume is conserved; the hidden condition is that only whole cones count.</p><div class="worked__math">144<i>π</i> ÷ <span class="frac"><span>20<i>π</i></span><span>3</span></span> = <span class="frac"><span>432</span><span>20</span></span> = 21.6 ⇒ <b>21 complete cones</b></div>
      solution: "<p><b>解碼：</b>體積守恆；隱藏的條件是只計算完整的圓錐體。</p><div class=\"worked__math\">144<i>π</i> ÷ <span class=\"frac\"><span>20<i>π</i></span><span>3</span></span> = <span class=\"frac\"><span>432</span><span>20</span></span> = 21.6 ⇒ <b>21 個完整的圓錐體</b></div>",
    },

    // ── t3-1-q051 · numeric · challenge · SL · SL 3.2, 3.3 · 7 marks
    "t3-1-q051": {
      // EN: <p>Two surveyors stand at points <span class="chem">A</span> and <span class="chem">B</span> on horizontal ground, with <span class="chem">B</span> <span class="mono">200 m</span> due East of <span class="chem">A</span>. The foot <span class="chem">F</span> of a vertical radio mast is on a bearing of <span class="mono">030°</span> from <span class="chem">A</span> and on a bearing of <span class="mono">320°</span> from <span class="chem">B</span>. The angle of elevation of the top of the mast from <span class="chem">A</span> is <span class="mono">25°</span>. Find the angle of elevation of the top of the mast from <span class="chem">B</span>. All angles are in degrees; give your answer to 3 significant figures.</p>
      stem: "<p>兩名測量員站在水平地面上的點 <span class=\"chem\">A</span> 及 <span class=\"chem\">B</span>，<span class=\"chem\">B</span> 位於 <span class=\"chem\">A</span> 正東方 <span class=\"mono\">200 m</span> 處。一支垂直無線電桅杆的底部 <span class=\"chem\">F</span> 位於 <span class=\"chem\">A</span> 的方位角 <span class=\"mono\">030°</span> 方向，及 <span class=\"chem\">B</span> 的方位角 <span class=\"mono\">320°</span> 方向。從 <span class=\"chem\">A</span> 測得桅杆頂部的仰角為 <span class=\"mono\">25°</span>。求 (Find) 從 <span class=\"chem\">B</span> 測得桅杆頂部的仰角。所有角皆以度為單位；答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: two separate triangles. First the horizontal triangle <span class="chem">ABF</span> (built from the bearings) gives the ground distances <span class="chem">AF</span> and <span class="chem">BF</span>; then two vertical right-angled triangles link those distances to the height.
        "解碼：兩個獨立的三角形。首先，由方位角建立的水平三角形 <span class=\"chem\">ABF</span> 給出地面距離 <span class=\"chem\">AF</span> 及 <span class=\"chem\">BF</span>；然後兩個垂直的直角三角形把這些距離與高度聯繫起來。",
        // EN: In triangle <span class="chem">ABF</span>: <span class="chem">angle FAB = 90° - 30° = 60°</span> and <span class="chem">angle FBA = 320° - 270° = 50°</span>, so <span class="chem">angle AFB = 70°</span>. Use the sine rule for <span class="chem">AF</span> and <span class="chem">BF</span>.
        "在三角形 <span class=\"chem\">ABF</span> 中：<span class=\"chem\">angle FAB = 90° - 30° = 60°</span>，<span class=\"chem\">angle FBA = 320° - 270° = 50°</span>，所以 <span class=\"chem\">angle AFB = 70°</span>。用正弦定律求 <span class=\"chem\">AF</span> 及 <span class=\"chem\">BF</span>。",
        // EN: Height <span class="chem">h = AF tan 25°</span>; the elevation from <span class="chem">B</span> is <span class="chem">arctan(h / BF)</span>.
        "高度 <span class=\"chem\">h = AF tan 25°</span>；從 <span class=\"chem\">B</span> 測得的仰角為 <span class=\"chem\">arctan(h / BF)</span>。",
      ],
      // EN: <p><b>Decode.</b> Bearings → ground triangle → sine rule; elevations → vertical right-angled triangles.</p><div class="worked__math"><i>AF</i> = <span class="frac"><span>200 sin 50°</span><span>sin 70°</span></span> ≈ 163.04 m, &nbsp; <i>BF</i> = <span class="frac"><span>200 sin 60°</span><span>sin 70°</span></span> ≈ 184.32 m</div><div class="worked__math"><i>h</i> = 163.04 tan 25° ≈ 76.027 m ⇒ elevation from <i>B</i> = arctan(76.027/184.32) ≈ <b>22.4°</b></div>
      solution: "<p><b>解碼：</b>方位角 → 地面三角形 → 正弦定律；仰角 → 垂直的直角三角形。</p><div class=\"worked__math\"><i>AF</i> = <span class=\"frac\"><span>200 sin 50°</span><span>sin 70°</span></span> ≈ 163.04 m, &nbsp; <i>BF</i> = <span class=\"frac\"><span>200 sin 60°</span><span>sin 70°</span></span> ≈ 184.32 m</div><div class=\"worked__math\"><i>h</i> = 163.04 tan 25° ≈ 76.027 m ⇒ 從 <i>B</i> 測得的仰角 = arctan(76.027/184.32) ≈ <b>22.4°</b></div>",
    },

    // ── t3-1-q052 · short · challenge · SL · SL 3.2 · 7 marks
    "t3-1-q052": {
      // EN: <p>Three straight rods have lengths <span class="chem">x</span>, <span class="chem">x + 1</span> and <span class="chem">x + 2</span> metres. They are joined end to end to make a triangle whose largest angle is <span class="chem">(2pi)/3</span> <strong>radians</strong>.<br>(a) Find the value of <span class="chem">x</span>. <strong>[5 marks]</strong><br>(b) Find the exact area of the triangle. <strong>[2 marks]</strong></p>
      stem: "<p>三支直棒的長度分別為 <span class=\"chem\">x</span>、<span class=\"chem\">x + 1</span> 及 <span class=\"chem\">x + 2</span> 米。把它們首尾相接，組成一個最大角為 <span class=\"chem\">(2pi)/3</span> <strong>弧度</strong>的三角形。<br>(a) 求 (Find) <span class=\"chem\">x</span> 的值。<strong>[5 marks]</strong><br>(b) 求該三角形面積的準確值。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "largest angle" tells you which side it is opposite (the longest rod). The angle is in radians: <span class="chem">(2pi)/3 = 120°</span>, and <span class="chem">cos((2pi)/3) = -1/2</span>. Use the cosine rule to get an equation in <span class="chem">x</span>.
        "解碼：「最大角」告訴你它是哪一條邊（最長的棒）的對角。角以弧度為單位：<span class=\"chem\">(2pi)/3 = 120°</span>，而 <span class=\"chem\">cos((2pi)/3) = -1/2</span>。用餘弦定律得出一條 <span class=\"chem\">x</span> 的方程。",
        // EN: <span class="chem">(x + 2)^2 = x^2 + (x + 1)^2 - 2x(x + 1)cos((2pi)/3)</span>.
        "<span class=\"chem\">(x + 2)^2 = x^2 + (x + 1)^2 - 2x(x + 1)cos((2pi)/3)</span>。",
        // EN: You will get a quadratic. One root is not a length.
        "你會得到一條二次方程。其中一個根不是長度。",
      ],
      // EN: <p><b>Decode.</b> The largest angle is opposite the longest side; a cosine-rule equation gives a quadratic with one invalid root.</p><div class="worked__math">(a) <i>x</i><sup>2</sup> + 4<i>x</i> + 4 = 3<i>x</i><sup>2</sup> + 3<i>x</i> + 1 ⇒ 2<i>x</i><sup>2</sup> − <i>x</i> − 3 = 0 ⇒ (2<i>x</i> − 3)(<i>x</i> + 1) = 0 ⇒ <b><i>x</i> = 3/2</b></div><div class="worked__math">(b) Area = <span class="frac"><span>1</span><span>2</span></span> × <span class="frac"><span>3</span><span>2</span></span> × <span class="frac"><span>5</span><span>2</span></span> × <span class="frac"><span>√3</span><span>2</span></span> = <b><span class="frac"><span>15√3</span><span>16</span></span> m<sup>2</sup></b></div>
      solution: "<p><b>解碼：</b>最大角是最長邊的對角；餘弦定律得出的二次方程有一個不合理的根。</p><div class=\"worked__math\">(a) <i>x</i><sup>2</sup> + 4<i>x</i> + 4 = 3<i>x</i><sup>2</sup> + 3<i>x</i> + 1 ⇒ 2<i>x</i><sup>2</sup> − <i>x</i> − 3 = 0 ⇒ (2<i>x</i> − 3)(<i>x</i> + 1) = 0 ⇒ <b><i>x</i> = 3/2</b></div><div class=\"worked__math\">(b) 面積 = <span class=\"frac\"><span>1</span><span>2</span></span> × <span class=\"frac\"><span>3</span><span>2</span></span> × <span class=\"frac\"><span>5</span><span>2</span></span> × <span class=\"frac\"><span>√3</span><span>2</span></span> = <b><span class=\"frac\"><span>15√3</span><span>16</span></span> m<sup>2</sup></b></div>",
      // EN: <p>(a) x = 3/2; (b) area = 15√3/16 m².</p>
      answer: "<p>(a) x = 3/2；(b) 面積 = 15√3/16 m²。</p>",
      markscheme: [
        // EN: R1: The largest angle, 2π/3, is opposite the longest rod, x + 2.
        "R1：最大角 2π/3 是最長的棒 x + 2 的對角。",
        // EN: M1: Cosine rule with cos(2π/3) = −1/2: (x + 2)² = x² + (x + 1)² + x(x + 1).
        "M1：以 cos(2π/3) = −1/2 代入餘弦定律：(x + 2)² = x² + (x + 1)² + x(x + 1)。",
        // EN: A1: Simplifies to 2x² − x − 3 = 0.
        "A1：化簡為 2x² − x − 3 = 0。",
        // EN: A1: (2x − 3)(x + 1) = 0.
        "A1：(2x − 3)(x + 1) = 0。",
        // EN: R1: x = 3/2, rejecting x = −1 because a length must be positive.
        "R1：x = 3/2，由於長度必須是正數，捨去 x = −1。",
        // EN: M1: Area = (1/2)(3/2)(5/2) sin(2π/3), the angle between the two shorter rods.
        "M1：面積 = (1/2)(3/2)(5/2) sin(2π/3)，即兩支較短的棒之間的夾角。",
        // EN: A1: Area = 15√3/16 m².
        "A1：面積 = 15√3/16 m²。",
      ],
    },

    // ── t3-1-q053 · numeric · challenge · SL · SL 3.4 · 6 marks
    "t3-1-q053": {
      // EN: <p>A badge is cut from a sector of a circle of radius <span class="mono">12 cm</span> with central angle <span class="mono">1</span> <strong>radian</strong>. A circular hole is cut out of the sector; the hole is as large as possible, so its edge touches both straight edges and the arc of the sector. Find the area of the badge that remains, in <span class="unit">cm2</span> to 3 significant figures.</p>
      stem: "<p>從一個半徑為 <span class=\"mono\">12 cm</span>、圓心角為 <span class=\"mono\">1</span> <strong>弧度</strong>的圓扇形切出一個徽章。從扇形中切去一個圓孔；圓孔盡可能大，所以它的邊緣同時觸及扇形的兩條直邊及弧。求 (Find) 剩下的徽章的面積，以 <span class=\"unit\">cm2</span> 為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: remaining area = sector area − area of the largest inscribed circle. The work is finding that circle’s radius <span class="chem">r</span>.
        "解碼：剩下的面積 = 扇形面積 − 最大內切圓的面積。關鍵在於求出該圓的半徑 <span class=\"chem\">r</span>。",
        // EN: The centre <span class="chem">C</span> of the circle lies on the bisector of the sector angle, at distance <span class="chem">12 - r</span> from the sector’s centre <span class="chem">O</span> (because it touches the arc). The perpendicular from <span class="chem">C</span> to a straight edge has length <span class="chem">r</span>, giving <span class="chem">sin(0.5) = r/(12 - r)</span>.
        "圓心 <span class=\"chem\">C</span> 位於扇形角的角平分線上，與扇形的圓心 <span class=\"chem\">O</span> 相距 <span class=\"chem\">12 - r</span>（因為它觸及弧）。由 <span class=\"chem\">C</span> 至一條直邊的垂線長度為 <span class=\"chem\">r</span>，得出 <span class=\"chem\">sin(0.5) = r/(12 - r)</span>。",
        // EN: So <span class="chem">r = (12 sin 0.5)/(1 + sin 0.5)</span>. Sector area <span class="chem">= (1/2)(12^2)(1)</span>.
        "所以 <span class=\"chem\">r = (12 sin 0.5)/(1 + sin 0.5)</span>。扇形面積 <span class=\"chem\">= (1/2)(12^2)(1)</span>。",
      ],
      // EN: <p><b>Decode.</b> Sector minus inscribed circle; the circle’s radius comes from a right-angled triangle on the bisector.</p><div class="worked__math"><i>r</i> = <span class="frac"><span>12 sin 0.5</span><span>1 + sin 0.5</span></span> ≈ 3.8887 cm</div><div class="worked__math">Area = 72 − <i>π</i>(3.8887)<sup>2</sup> ≈ 72 − 47.508 ≈ <b>24.5 cm<sup>2</sup></b></div>
      solution: "<p><b>解碼：</b>扇形減去內切圓；圓的半徑由角平分線上的直角三角形求得。</p><div class=\"worked__math\"><i>r</i> = <span class=\"frac\"><span>12 sin 0.5</span><span>1 + sin 0.5</span></span> ≈ 3.8887 cm</div><div class=\"worked__math\">面積 = 72 − <i>π</i>(3.8887)<sup>2</sup> ≈ 72 − 47.508 ≈ <b>24.5 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q054 · numeric · challenge · SL · SL 3.1, 3.3 · 5 marks
    "t3-1-q054": {
      // EN: <p>A rectangular roof panel <span class="chem">ABCD</span> has a horizontal lower edge <span class="chem">AB = 8 m</span> and edges <span class="chem">AD = BC = 5 m</span> running straight up the slope. The panel is inclined at <span class="mono">30°</span> (degrees) to the horizontal. A cable is fixed along the diagonal from <span class="chem">A</span> to <span class="chem">C</span>. Find the angle between the cable and the horizontal, in degrees to 3 significant figures.</p>
      stem: "<p>一塊長方形屋頂板 <span class=\"chem\">ABCD</span> 有一條水平的下邊 <span class=\"chem\">AB = 8 m</span>，而邊 <span class=\"chem\">AD = BC = 5 m</span> 沿斜面筆直向上。屋頂板與水平面成 <span class=\"mono\">30°</span>（度）傾斜。一條纜線沿對角線由 <span class=\"chem\">A</span> 固定至 <span class=\"chem\">C</span>。求 (Find) 纜線與水平面之間的角，以度為單位，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the angle between a line (<span class="chem">AC</span>) and a horizontal plane. You need the vertical height of <span class="chem">C</span> above <span class="chem">A</span> and the length <span class="chem">AC</span>; the <span class="mono">30°</span> is the slope of the panel, not the angle of the cable.
        "解碼：直線（<span class=\"chem\">AC</span>）與水平面之間的角。你需要 <span class=\"chem\">C</span> 高於 <span class=\"chem\">A</span> 的垂直高度及長度 <span class=\"chem\">AC</span>；<span class=\"mono\">30°</span> 是屋頂板的傾斜角，不是纜線的角。",
        // EN: Height of the top edge: <span class="chem">5 sin 30° = 2.5 m</span>. Length of the diagonal: <span class="chem">AC = sqrt(8^2 + 5^2)</span> (it lies in the rectangle).
        "上邊的高度：<span class=\"chem\">5 sin 30° = 2.5 m</span>。對角線的長度：<span class=\"chem\">AC = sqrt(8^2 + 5^2)</span>（它位於長方形內）。",
        // EN: <span class="chem">sin(angle) = 2.5/sqrt(89)</span>.
        "<span class=\"chem\">sin(angle) = 2.5/sqrt(89)</span>。",
      ],
      // EN: <p><b>Decode.</b> Line–plane angle: drop a perpendicular from C to the horizontal plane through AB.</p><div class="worked__math">Rise = 5 sin 30° = 2.5 m, &nbsp; <i>AC</i> = √89 ≈ 9.434 m</div><div class="worked__math">sin <i>φ</i> = 2.5/9.434 ≈ 0.26500 ⇒ <i>φ</i> ≈ <b>15.4°</b></div>
      solution: "<p><b>解碼：</b>直線與平面之間的角：由 C 向通過 AB 的水平面作垂線。</p><div class=\"worked__math\">上升高度 = 5 sin 30° = 2.5 m, &nbsp; <i>AC</i> = √89 ≈ 9.434 m</div><div class=\"worked__math\">sin <i>φ</i> = 2.5/9.434 ≈ 0.26500 ⇒ <i>φ</i> ≈ <b>15.4°</b></div>",
    },

    // ── t3-1-q055 · short · challenge · SL · SL 3.2, 3.5 · 7 marks
    "t3-1-q055": {
      // EN: <p>A designer is building a triangular frame <span class="chem">ABC</span> with <span class="chem">AB = 14 cm</span> and <span class="chem">angle BAC = 38°</span> (degrees). The rod <span class="chem">BC</span> has length <span class="chem">x</span> cm, and the length of <span class="chem">AC</span> is free.<br>(a) Find the least value of <span class="chem">x</span> for which the frame can be built. <strong>[2 marks]</strong><br>(b) Write down the set of values of <span class="chem">x</span> for which <strong>two</strong> different frames can be built. <strong>[2 marks]</strong><br>(c) Given <span class="chem">x = 10</span>, find the difference between the two possible lengths of <span class="chem">AC</span>. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>一名設計師正在製作一個三角形框架 <span class=\"chem\">ABC</span>，其中 <span class=\"chem\">AB = 14 cm</span>，<span class=\"chem\">angle BAC = 38°</span>（度）。棒 <span class=\"chem\">BC</span> 的長度為 <span class=\"chem\">x</span> cm，而 <span class=\"chem\">AC</span> 的長度不受限制。<br>(a) 求 (Find) 能製作框架的 <span class=\"chem\">x</span> 的最小值。<strong>[2 marks]</strong><br>(b) 寫出 (Write down) 能製作<strong>兩個</strong>不同框架的 <span class=\"chem\">x</span> 值的集合。<strong>[2 marks]</strong><br>(c) 已知 <span class=\"chem\">x = 10</span>，求 <span class=\"chem\">AC</span> 的兩個可能長度之差。<strong>[3 marks]</strong><br>答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: this is the ambiguous case seen as a design question. The rod <span class="chem">BC</span> swings about <span class="chem">B</span> and must reach the line <span class="chem">AC</span>. Too short: no triangle; just touching: one; between the height and <span class="chem">AB</span>: two.
        "解碼：這是以設計問題呈現的兩義情況。棒 <span class=\"chem\">BC</span> 繞 <span class=\"chem\">B</span> 擺動，必須觸及直線 <span class=\"chem\">AC</span>。太短：沒有三角形；剛好觸及：一個；介乎高與 <span class=\"chem\">AB</span> 之間：兩個。",
        // EN: The distance from <span class="chem">B</span> to the line <span class="chem">AC</span> is <span class="chem">14 sin 38°</span>.
        "由 <span class=\"chem\">B</span> 至直線 <span class=\"chem\">AC</span> 的距離為 <span class=\"chem\">14 sin 38°</span>。",
        // EN: For (c), use the cosine rule with the known angle at <span class="chem">A</span> and solve the quadratic in <span class="chem">AC</span>.
        "在 (c) 部，以 <span class=\"chem\">A</span> 處的已知角使用餘弦定律，並解 <span class=\"chem\">AC</span> 的二次方程。",
      ],
      // EN: <p><b>Decode.</b> SSA: count triangles by comparing x with the height 14 sin 38° and with AB = 14.</p><div class="worked__math">(a) <i>x</i><sub>min</sub> = 14 sin 38° ≈ <b>8.62 cm</b> &nbsp; (b) <b>8.62 &lt; <i>x</i> &lt; 14</b></div><div class="worked__math">(c) <i>b</i><sup>2</sup> − 22.064<i>b</i> + 96 = 0 ⇒ <i>b</i> ≈ 5.962 or 16.102 ⇒ difference ≈ <b>10.1 cm</b></div>
      solution: "<p><b>解碼：</b>SSA：把 x 與高 14 sin 38° 及 AB = 14 比較，以數算三角形的個數。</p><div class=\"worked__math\">(a) <i>x</i><sub>min</sub> = 14 sin 38° ≈ <b>8.62 cm</b> &nbsp; (b) <b>8.62 &lt; <i>x</i> &lt; 14</b></div><div class=\"worked__math\">(c) <i>b</i><sup>2</sup> − 22.064<i>b</i> + 96 = 0 ⇒ <i>b</i> ≈ 5.962 或 16.102 ⇒ 差 ≈ <b>10.1 cm</b></div>",
      // EN: <p>(a) x = 14 sin 38° ≈ 8.62; (b) 8.62 &lt; x &lt; 14; (c) about 10.1 cm.</p>
      answer: "<p>(a) x = 14 sin 38° ≈ 8.62；(b) 8.62 &lt; x &lt; 14；(c) 約 10.1 cm。</p>",
      markscheme: [
        // EN: M1: The shortest BC is the perpendicular from B to line AC: x = 14 sin 38°.
        "M1：最短的 BC 是由 B 至直線 AC 的垂線：x = 14 sin 38°。",
        // EN: A1: x ≈ 8.62 cm.
        "A1：x ≈ 8.62 cm。",
        // EN: A1: Lower bound 14 sin 38° ≈ 8.62 < x (strict: x = 8.62 gives one right-angled triangle).
        "A1：下限 14 sin 38° ≈ 8.62 < x（嚴格不等：x = 8.62 只得一個直角三角形）。",
        // EN: A1: Upper bound x < 14 (if x ≥ 14 only one triangle).
        "A1：上限 x < 14（若 x ≥ 14，只有一個三角形）。",
        // EN: M1: Cosine rule with AC = b: 10² = 14² + b² − 2(14)b cos 38°.
        "M1：設 AC = b，使用餘弦定律：10² = 14² + b² − 2(14)b cos 38°。",
        // EN: A1: b² − 22.064b + 96 = 0, so b ≈ 5.96 or 16.10.
        "A1：b² − 22.064b + 96 = 0，所以 b ≈ 5.96 或 16.10。",
        // EN: A1: Difference ≈ 10.1 cm.
        "A1：差 ≈ 10.1 cm。",
      ],
    },

    // ── t3-1-q056 · numeric · challenge · SL · SL 3.4 · 4 marks
    "t3-1-q056": {
      // EN: <p>The hour hand of a clock is <span class="mono">8 cm</span> long. Find the exact area swept out by the hour hand between 3:00 and 3:40 on the same afternoon, in <span class="unit">cm2</span>. Work in radians and give your answer as a multiple of <span class="chem">pi</span>.</p>
      stem: "<p>一個時鐘的時針長 <span class=\"mono\">8 cm</span>。求 (Find) 同一天下午 3:00 至 3:40 期間時針掃過的面積的準確值，以 <span class=\"unit\">cm2</span> 為單位。以弧度計算，答案以 <span class=\"chem\">pi</span> 的倍數表示。</p>",
      hints: [
        // EN: Decode: the swept region is a sector whose angle is the angle turned by the <strong>hour</strong> hand (not the minute hand) in 40 minutes. Convert that angle to radians, then use <span class="chem">A = (1/2)r^2 theta</span>.
        "解碼：掃過的區域是一個扇形，其角是<strong>時</strong>針（不是分針）在 40 分鐘內轉過的角。把這個角換算為弧度，然後使用 <span class=\"chem\">A = (1/2)r^2 theta</span>。",
        // EN: The hour hand turns <span class="chem">2pi</span> radians in 12 hours, so <span class="chem">pi/6</span> radians per hour.
        "時針在 12 小時內轉過 <span class=\"chem\">2pi</span> 弧度，所以每小時轉過 <span class=\"chem\">pi/6</span> 弧度。",
        // EN: 40 minutes is <span class="chem">2/3</span> of an hour, so <span class="chem">theta = (2/3)(pi/6) = pi/9</span>.
        "40 分鐘是一小時的 <span class=\"chem\">2/3</span>，所以 <span class=\"chem\">theta = (2/3)(pi/6) = pi/9</span>。",
      ],
      // EN: <p><b>Decode.</b> A sector problem in disguise: the angle comes from the hour hand’s rate.</p><div class="worked__math"><i>θ</i> = <span class="frac"><span>2</span><span>3</span></span> × <span class="frac"><span><i>π</i></span><span>6</span></span> = <span class="frac"><span><i>π</i></span><span>9</span></span> rad ⇒ <i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(64)<span class="frac"><span><i>π</i></span><span>9</span></span> = <b><span class="frac"><span>32<i>π</i></span><span>9</span></span> cm<sup>2</sup></b></div>
      solution: "<p><b>解碼：</b>一道變相的扇形問題：角由時針轉動的速率得出。</p><div class=\"worked__math\"><i>θ</i> = <span class=\"frac\"><span>2</span><span>3</span></span> × <span class=\"frac\"><span><i>π</i></span><span>6</span></span> = <span class=\"frac\"><span><i>π</i></span><span>9</span></span> rad ⇒ <i>A</i> = <span class=\"frac\"><span>1</span><span>2</span></span>(64)<span class=\"frac\"><span><i>π</i></span><span>9</span></span> = <b><span class=\"frac\"><span>32<i>π</i></span><span>9</span></span> cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q057 · short · challenge · SL · SL 3.2, 3.3 · 8 marks
    "t3-1-q057": {
      // EN: <p>Two coastguard stations <span class="chem">A</span> and <span class="chem">B</span> are on a straight east–west coastline, with <span class="chem">B</span> <span class="mono">30 km</span> due East of <span class="chem">A</span>. A boat <span class="chem">S</span> out at sea, to the north of the coastline, is on a bearing of <span class="mono">058°</span> from <span class="chem">A</span> and <span class="mono">316°</span> from <span class="chem">B</span>. All angles are in degrees.<br>(a) Show that <span class="chem">angle ASB = 102°</span>. <strong>[2 marks]</strong><br>(b) Find the distance <span class="chem">AS</span>. <strong>[2 marks]</strong><br>(c) Find the shortest distance from the boat to the coastline. <strong>[2 marks]</strong><br>(d) The boat now sails due South at <span class="mono">14 km h⁻¹</span>. Find how many minutes it takes to reach the coastline. <strong>[2 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>兩個海岸警衞站 <span class=\"chem\">A</span> 及 <span class=\"chem\">B</span> 位於一條筆直的東西向海岸線上，<span class=\"chem\">B</span> 在 <span class=\"chem\">A</span> 正東方 <span class=\"mono\">30 km</span> 處。海上一艘位於海岸線以北的小船 <span class=\"chem\">S</span>，在 <span class=\"chem\">A</span> 的方位角 <span class=\"mono\">058°</span> 方向，及 <span class=\"chem\">B</span> 的方位角 <span class=\"mono\">316°</span> 方向。所有角皆以度為單位。<br>(a) 證明 (Show that) <span class=\"chem\">angle ASB = 102°</span>。<strong>[2 marks]</strong><br>(b) 求 (Find) 距離 <span class=\"chem\">AS</span>。<strong>[2 marks]</strong><br>(c) 求小船至海岸線的最短距離。<strong>[2 marks]</strong><br>(d) 小船現以 <span class=\"mono\">14 km h⁻¹</span> 向正南方航行。求它需要多少分鐘才到達海岸線。<strong>[2 marks]</strong><br>答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: build triangle <span class="chem">ABS</span> from the bearings (North lines at <span class="chem">A</span> and <span class="chem">B</span>). "Shortest distance to the coastline" means the perpendicular distance; "due South" travels along exactly that perpendicular.
        "解碼：由方位角建立三角形 <span class=\"chem\">ABS</span>（在 <span class=\"chem\">A</span> 及 <span class=\"chem\">B</span> 畫指北線）。「至海岸線的最短距離」指垂直距離；「正南方」航行正是沿着這條垂線。",
        // EN: At <span class="chem">A</span>, the angle between East and <span class="chem">AS</span> is <span class="chem">90° - 58°</span>; at <span class="chem">B</span>, the angle between West and <span class="chem">BS</span> is <span class="chem">316° - 270°</span>.
        "在 <span class=\"chem\">A</span>，東方與 <span class=\"chem\">AS</span> 的夾角為 <span class=\"chem\">90° - 58°</span>；在 <span class=\"chem\">B</span>，西方與 <span class=\"chem\">BS</span> 的夾角為 <span class=\"chem\">316° - 270°</span>。",
        // EN: For (c), use the right-angled triangle with hypotenuse <span class="chem">AS</span> and angle <span class="mono">32°</span> at <span class="chem">A</span>.
        "在 (c) 部，使用斜邊為 <span class=\"chem\">AS</span>、在 <span class=\"chem\">A</span> 的角為 <span class=\"mono\">32°</span> 的直角三角形。",
      ],
      // EN: <p><b>Decode.</b> Bearings → triangle angles; shortest distance → perpendicular; due South → along that perpendicular.</p><div class="worked__math">(a) 32° + 46° + ∠<i>ASB</i> = 180° ⇒ ∠<i>ASB</i> = 102°</div><div class="worked__math">(b) <i>AS</i> = <span class="frac"><span>30 sin 46°</span><span>sin 102°</span></span> ≈ <b>22.1 km</b> &nbsp; (c) <i>d</i> = 22.062 sin 32° ≈ <b>11.7 km</b></div><div class="worked__math">(d) <i>t</i> = 11.691/14 h ≈ <b>50.1 min</b></div>
      solution: "<p><b>解碼：</b>方位角 → 三角形的角；最短距離 → 垂線；正南方 → 沿該垂線航行。</p><div class=\"worked__math\">(a) 32° + 46° + ∠<i>ASB</i> = 180° ⇒ ∠<i>ASB</i> = 102°</div><div class=\"worked__math\">(b) <i>AS</i> = <span class=\"frac\"><span>30 sin 46°</span><span>sin 102°</span></span> ≈ <b>22.1 km</b> &nbsp; (c) <i>d</i> = 22.062 sin 32° ≈ <b>11.7 km</b></div><div class=\"worked__math\">(d) <i>t</i> = 11.691/14 h ≈ <b>50.1 分鐘</b></div>",
      // EN: <p>(a) ∠SAB = 32°, ∠SBA = 46°, so ∠ASB = 102°. (b) AS ≈ 22.1 km. (c) ≈ 11.7 km. (d) ≈ 50.1 minutes.</p>
      answer: "<p>(a) ∠SAB = 32°，∠SBA = 46°，所以 ∠ASB = 102°。(b) AS ≈ 22.1 km。(c) ≈ 11.7 km。(d) ≈ 50.1 分鐘。</p>",
      markscheme: [
        // EN: M1: ∠SAB = 90° − 58° = 32° and ∠SBA = 316° − 270° = 46°.
        "M1：∠SAB = 90° − 58° = 32° 及 ∠SBA = 316° − 270° = 46°。",
        // EN: A1: ∠ASB = 180° − 32° − 46° = 102°. AG: angle ASB = 102°; the given line itself earns no mark.
        "A1：∠ASB = 180° − 32° − 46° = 102°。AG：angle ASB = 102°；只寫出已給結論本身不得分。",
        // EN: M1: Sine rule: AS/sin 46° = 30/sin 102°.
        "M1：正弦定律：AS/sin 46° = 30/sin 102°。",
        // EN: A1: AS ≈ 22.1 km (22.062).
        "A1：AS ≈ 22.1 km (22.062)。",
        // EN: M1: Shortest distance is perpendicular to AB: d = AS sin 32°.
        "M1：最短距離是垂直於 AB 的距離：d = AS sin 32°。",
        // EN: A1: d ≈ 11.7 km (11.691).
        "A1：d ≈ 11.7 km (11.691)。",
        // EN: M1: The coastline runs east–west, so sailing due South follows this perpendicular: time = d ÷ 14 hours.
        "M1：海岸線是東西向的，所以向正南方航行就是沿這條垂線：時間 = d ÷ 14 小時。",
        // EN: A1: Time = 11.691/14 h ≈ 0.83509 h ≈ 50.1 minutes.
        "A1：時間 = 11.691/14 h ≈ 0.83509 h ≈ 50.1 分鐘。",
      ],
    },

    // ── t3-1-q058 · short · challenge · SL · SL 3.2, 3.3 · 8 marks
    "t3-1-q058": {
      // EN: <p>A farmer’s field is a quadrilateral <span class="chem">PQRS</span>. A surveyor measures <span class="chem">PQ = 120 m</span>, <span class="chem">QR = 95 m</span>, <span class="chem">RS = 80 m</span>, <span class="chem">angle PQR = 104°</span> and <span class="chem">angle PRS = 52°</span> (angles in degrees). The field is to be fenced all the way round.<br>(a) Find the length of the diagonal <span class="chem">PR</span>. <strong>[2 marks]</strong><br>(b) Find the area of the field. <strong>[3 marks]</strong><br>(c) Find the total length of fencing needed. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>一名農夫的田地是四邊形 <span class=\"chem\">PQRS</span>。一名測量員量得 <span class=\"chem\">PQ = 120 m</span>，<span class=\"chem\">QR = 95 m</span>，<span class=\"chem\">RS = 80 m</span>，<span class=\"chem\">angle PQR = 104°</span> 及 <span class=\"chem\">angle PRS = 52°</span>（角以度為單位）。田地四周都要圍上圍欄。<br>(a) 求 (Find) 對角線 <span class=\"chem\">PR</span> 的長度。<strong>[2 marks]</strong><br>(b) 求田地的面積。<strong>[3 marks]</strong><br>(c) 求所需圍欄的總長度。<strong>[3 marks]</strong><br>答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: a quadrilateral is two triangles sharing the diagonal <span class="chem">PR</span>. "Fenced all the way round" means the perimeter, so the missing side <span class="chem">PS</span> is needed.
        "解碼：四邊形是兩個共用對角線 <span class=\"chem\">PR</span> 的三角形。「四周都要圍上圍欄」指周界，所以需要求出未知的邊 <span class=\"chem\">PS</span>。",
        // EN: Triangle <span class="chem">PQR</span>: two sides and the included angle, so cosine rule for <span class="chem">PR</span> and <span class="chem">(1/2)ab sin C</span> for its area.
        "三角形 <span class=\"chem\">PQR</span>：已知兩邊及其夾角，所以用餘弦定律求 <span class=\"chem\">PR</span>，用 <span class=\"chem\">(1/2)ab sin C</span> 求其面積。",
        // EN: Triangle <span class="chem">PRS</span>: you now know <span class="chem">PR</span>, <span class="chem">RS</span> and the included angle <span class="chem">angle PRS</span>. Keep <span class="chem">PR</span> to full accuracy.
        "三角形 <span class=\"chem\">PRS</span>：現在你知道 <span class=\"chem\">PR</span>、<span class=\"chem\">RS</span> 及夾角 <span class=\"chem\">angle PRS</span>。<span class=\"chem\">PR</span> 要保留全部精確度。",
      ],
      // EN: <p><b>Decode.</b> Split by the diagonal; each triangle is SAS.</p><div class="worked__math">(a) <i>PR</i> = √(14400 + 9025 − 22800 cos 104°) ≈ <b>170 m</b></div><div class="worked__math">(b) <span class="frac"><span>1</span><span>2</span></span>(120)(95) sin 104° + <span class="frac"><span>1</span><span>2</span></span>(170.12)(80) sin 52° ≈ 5530.7 + 5362.3 ≈ <b>10 900 m<sup>2</sup></b></div><div class="worked__math">(c) <i>PS</i> ≈ 136.32 m ⇒ fencing ≈ <b>431 m</b></div>
      solution: "<p><b>解碼：</b>沿對角線分割；每個三角形都是 SAS。</p><div class=\"worked__math\">(a) <i>PR</i> = √(14400 + 9025 − 22800 cos 104°) ≈ <b>170 m</b></div><div class=\"worked__math\">(b) <span class=\"frac\"><span>1</span><span>2</span></span>(120)(95) sin 104° + <span class=\"frac\"><span>1</span><span>2</span></span>(170.12)(80) sin 52° ≈ 5530.7 + 5362.3 ≈ <b>10 900 m<sup>2</sup></b></div><div class=\"worked__math\">(c) <i>PS</i> ≈ 136.32 m ⇒ 圍欄 ≈ <b>431 m</b></div>",
      // EN: <p>(a) PR ≈ 170 m (170.12); (b) area ≈ 10 900 m² (10 893); (c) PS ≈ 136 m, so fencing ≈ 431 m.</p>
      answer: "<p>(a) PR ≈ 170 m (170.12)；(b) 面積 ≈ 10 900 m² (10 893)；(c) PS ≈ 136 m，所以圍欄 ≈ 431 m。</p>",
      markscheme: [
        // EN: M1: Cosine rule in triangle PQR: PR² = 120² + 95² − 2(120)(95) cos 104°.
        "M1：在三角形 PQR 中使用餘弦定律：PR² = 120² + 95² − 2(120)(95) cos 104°。",
        // EN: A1: PR ≈ 170 m (170.12).
        "A1：PR ≈ 170 m (170.12)。",
        // EN: M1: Splits the field along PR into two triangles and uses (1/2)ab sin C for each.
        "M1：沿 PR 把田地分成兩個三角形，並對每個三角形使用 (1/2)ab sin C。",
        // EN: A1: Triangle PQR ≈ 5530.7 m² and triangle PRS ≈ 5362.3 m².
        "A1：三角形 PQR ≈ 5530.7 m² 及三角形 PRS ≈ 5362.3 m²。",
        // EN: A1: Area ≈ 10 900 m² (10 893).
        "A1：面積 ≈ 10 900 m² (10 893)。",
        // EN: M1: Cosine rule in triangle PRS: PS² = 170.12² + 80² − 2(170.12)(80) cos 52°.
        "M1：在三角形 PRS 中使用餘弦定律：PS² = 170.12² + 80² − 2(170.12)(80) cos 52°。",
        // EN: A1: PS ≈ 136 m (136.32).
        "A1：PS ≈ 136 m (136.32)。",
        // EN: A1: Fencing = 120 + 95 + 80 + 136.32 ≈ 431 m.
        "A1：圍欄 = 120 + 95 + 80 + 136.32 ≈ 431 m。",
      ],
    },

    // ── t3-1-q059 · numeric · challenge · SL · SL 3.1 · 6 marks
    "t3-1-q059": {
      // EN: <p>A child’s spinning top is a solid made of a right circular cone joined to a hemisphere along their common circular face of radius <span class="mono">3 cm</span>. The cone and the hemisphere are made of the same material and have the <strong>same mass</strong>. Find the exact total surface area of the top, in <span class="unit">cm2</span>, in terms of <span class="chem">pi</span>. (No angles are involved.)</p>
      stem: "<p>一個兒童陀螺是由一個直立圓錐體與一個半球體沿着它們半徑為 <span class=\"mono\">3 cm</span> 的公共圓形面接合而成的實心立體。圓錐體與半球體由相同材料製成，並且<strong>質量相同</strong>。求 (Find) 陀螺總表面積的準確值，以 <span class=\"unit\">cm2</span> 為單位，並以 <span class=\"chem\">pi</span> 表示。（題目不涉及角。）</p>",
      hints: [
        // EN: Decode: "same material, same mass" means the two parts have the same <strong>volume</strong>; use that to find the cone’s height. The surface of the top is the curved part of the cone plus the curved part of the hemisphere (the joining face is hidden).
        "解碼：「相同材料、相同質量」表示兩部分的<strong>體積</strong>相同；用這一點求圓錐體的高。陀螺的表面是圓錐體的曲面加上半球體的曲面（接合面被隱藏）。",
        // EN: <span class="chem">(1/3)pi(3^2)h = (2/3)pi(3^3)</span> gives <span class="chem">h = 6</span>. Then the slant height is <span class="chem">l = sqrt(3^2 + 6^2)</span>.
        "由 <span class=\"chem\">(1/3)pi(3^2)h = (2/3)pi(3^3)</span> 得 <span class=\"chem\">h = 6</span>。然後斜高為 <span class=\"chem\">l = sqrt(3^2 + 6^2)</span>。",
        // EN: Total <span class="chem">= pi r l + 2pi r^2</span>.
        "總和 <span class=\"chem\">= pi r l + 2pi r^2</span>。",
      ],
      // EN: <p><b>Decode.</b> Equal mass with the same material means equal volume; the shared circular face is not on the surface.</p><div class="worked__math">3<i>πh</i> = 18<i>π</i> ⇒ <i>h</i> = 6, &nbsp; <i>l</i> = √45 = 3√5</div><div class="worked__math"><i>A</i> = <i>π</i>(3)(3√5) + 2<i>π</i>(9) = <b>18<i>π</i> + 9√5<i>π</i> cm<sup>2</sup></b> (≈ 120 cm<sup>2</sup>)</div>
      solution: "<p><b>解碼：</b>相同材料而質量相等即體積相等；公共圓形面不在表面上。</p><div class=\"worked__math\">3<i>πh</i> = 18<i>π</i> ⇒ <i>h</i> = 6, &nbsp; <i>l</i> = √45 = 3√5</div><div class=\"worked__math\"><i>A</i> = <i>π</i>(3)(3√5) + 2<i>π</i>(9) = <b>18<i>π</i> + 9√5<i>π</i> cm<sup>2</sup></b> (≈ 120 cm<sup>2</sup>)</div>",
    },

    // ── t3-1-q060 · numeric · challenge · SL · SL 3.2 · 5 marks
    "t3-1-q060": {
      // EN: <p>A triangular sail has two edges of length <span class="mono">6 m</span> and <span class="mono">8 m</span> meeting at the top corner, where the angle between them is <strong>obtuse</strong>. The area of the sail is <span class="mono">12 m²</span>. Find the exact value of the <strong>square</strong> of the length of the third edge, in <span class="unit">m2</span>. Angles are in degrees.</p>
      stem: "<p>一塊三角形帆的兩條邊長為 <span class=\"mono\">6 m</span> 及 <span class=\"mono\">8 m</span>，它們在頂角相交，兩者的夾角為<strong>鈍角</strong>。帆的面積為 <span class=\"mono\">12 m²</span>。求 (Find) 第三條邊長度的<strong>平方</strong>的準確值，以 <span class=\"unit\">m2</span> 為單位。角以度為單位。</p>",
      hints: [
        // EN: Decode: the area gives <span class="chem">sin</span> of the angle between the edges, which has two possible angles; "obtuse" picks one. Then the cosine rule gives the third edge squared.
        "解碼：面積給出兩邊夾角的 <span class=\"chem\">sin</span> 值，而這對應兩個可能的角；「鈍角」選出其中一個。然後餘弦定律給出第三條邊的平方。",
        // EN: <span class="chem">(1/2)(6)(8) sin theta = 12</span> gives <span class="chem">sin theta = 1/2</span>, so <span class="chem">theta = 30°</span> or <span class="chem">150°</span>.
        "由 <span class=\"chem\">(1/2)(6)(8) sin theta = 12</span> 得 <span class=\"chem\">sin theta = 1/2</span>，所以 <span class=\"chem\">theta = 30°</span> 或 <span class=\"chem\">150°</span>。",
        // EN: With <span class="chem">theta = 150°</span>, <span class="chem">cos theta = -sqrt(3)/2</span>, and <span class="chem">c^2 = 6^2 + 8^2 - 2(6)(8)cos 150°</span>.
        "當 <span class=\"chem\">theta = 150°</span>，<span class=\"chem\">cos theta = -sqrt(3)/2</span>，而 <span class=\"chem\">c^2 = 6^2 + 8^2 - 2(6)(8)cos 150°</span>。",
      ],
      // EN: <p><b>Decode.</b> Area → sin θ → choose the obtuse angle → cosine rule.</p><div class="worked__math">24 sin <i>θ</i> = 12 ⇒ sin <i>θ</i> = <span class="frac"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 150° (obtuse)</div><div class="worked__math"><i>c</i><sup>2</sup> = 36 + 64 − 96(−√3/2) = <b>100 + 48√3 m<sup>2</sup></b></div>
      solution: "<p><b>解碼：</b>面積 → sin θ → 選取鈍角 → 餘弦定律。</p><div class=\"worked__math\">24 sin <i>θ</i> = 12 ⇒ sin <i>θ</i> = <span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 150°（鈍角）</div><div class=\"worked__math\"><i>c</i><sup>2</sup> = 36 + 64 − 96(−√3/2) = <b>100 + 48√3 m<sup>2</sup></b></div>",
    },

  }
});
