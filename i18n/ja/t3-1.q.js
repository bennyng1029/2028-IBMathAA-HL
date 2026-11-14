/* t3-1.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't3-1.q', {
  questions: {

    // ── t3-1-q001 · numeric · foundation · SL · SL 3.1 · 2 marks
    "t3-1-q001": {
      // EN: <p>Find the straight-line distance between the points <span class="chem">A(1, -2, 4)</span> and <span class="chem">B(3, 4, -2)</span> in three-dimensional space.</p>
      stem: "<p>3 次元空間の 2 点 <span class=\"chem\">A(1, -2, 4)</span> と <span class=\"chem\">B(3, 4, -2)</span> の間の直線距離を求めなさい (Find)。</p>",
      hints: [
        // EN: Use the 3D distance formula: <span class="chem">d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)</span>.
        "3 次元の距離の公式 <span class=\"chem\">d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)</span> を使います。",
        // EN: The differences in the coordinates are <span class="chem">2</span>, <span class="chem">6</span>, and <span class="chem">-6</span>.
        "各座標の差は <span class=\"chem\">2</span>、<span class=\"chem\">6</span>、<span class=\"chem\">-6</span> です。",
      ],
      // EN: <div class="worked__math"><i>d</i> = √((3 − 1)<sup>2</sup> + (4 − (−2))<sup>2</sup> + (−2 − 4)<sup>2</sup>) = √(4 + 36 + 36) = <b>√76 ≈ 8.72</b></div>
      solution: "<div class=\"worked__math\"><i>d</i> = √((3 − 1)<sup>2</sup> + (4 − (−2))<sup>2</sup> + (−2 − 4)<sup>2</sup>) = √(4 + 36 + 36) = <b>√76 ≈ 8.72</b></div>",
    },

    // ── t3-1-q002 · mcq · foundation · SL · SL 3.1 · 2 marks
    "t3-1-q002": {
      // EN: <p>The midpoint of the line segment joining <span class="chem">P(2, -5, 8)</span> and <span class="chem">Q(x, y, z)</span> is <span class="chem">M(-1, 1, 3)</span>. What are the coordinates of <span class="chem">Q</span>?</p>
      stem: "<p>2 点 <span class=\"chem\">P(2, -5, 8)</span> と <span class=\"chem\">Q(x, y, z)</span> を結ぶ線分の中点が <span class=\"chem\">M(-1, 1, 3)</span> である。<span class=\"chem\">Q</span> の座標はどれですか？</p>",
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
        "<span class=\"chem\">((2 + x)/2, (-5 + y)/2, (8 + z)/2) = (-1, 1, 3)</span> を使います。",
        // EN: Multiply the coordinates of <span class="chem">M</span> by 2 and subtract <span class="chem">P</span>: <span class="chem">Q = 2M - P</span>.
        "<span class=\"chem\">M</span> の座標を 2 倍して <span class=\"chem\">P</span> を引きます：<span class=\"chem\">Q = 2M - P</span>。",
      ],
      // EN: <div class="worked__math"><i>x</i> = 2(−1) − 2 = −4, &nbsp; <i>y</i> = 2(1) − (−5) = 7, &nbsp; <i>z</i> = 2(3) − 8 = −2 ⇒ <b>(−4, 7, −2)</b></div>
      solution: "<div class=\"worked__math\"><i>x</i> = 2(−1) − 2 = −4, &nbsp; <i>y</i> = 2(1) − (−5) = 7, &nbsp; <i>z</i> = 2(3) − 8 = −2 ⇒ <b>(−4, 7, −2)</b></div>",
      misconception: {
        // EN (option B): You averaged P and M instead of treating M as the midpoint between P and Q.
        "1": "M を P と Q の中点として扱うのではなく、P と M の平均をとってしまいました。",
        // EN (option C): You found the displacement vector PM = M − P instead of solving (P + Q)/2 = M.
        "2": "(P + Q)/2 = M を解くのではなく、変位ベクトル PM = M − P を求めてしまいました。",
        // EN (option D): You reversed the signs when solving 2 + x = −2, −5 + y = 2, and 8 + z = 6.
        "3": "2 + x = −2, −5 + y = 2, 8 + z = 6 を解くときに符号を逆にしてしまいました。",
      },
    },

    // ── t3-1-q003 · mcq · foundation · SL · SL 3.1 · 2 marks
    "t3-1-q003": {
      // EN: <p>A right circular cone has base radius <span class="mono">5 cm</span> and vertical height <span class="mono">12 cm</span>. What is the <strong>total surface area</strong> of the solid cone (including its circular base)?</p>
      stem: "<p>底面の半径が <span class=\"mono\">5 cm</span>、高さが <span class=\"mono\">12 cm</span> の直円錐がある。この円錐（底面の円を含む）の<strong>全表面積</strong>はどれですか？</p>",
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
        "まず三平方の定理を使って母線の長さ <span class=\"chem\">l = sqrt(r^2 + h^2)</span> を求めます。",
        // EN: Total surface area = curved surface <span class="chem">πrl</span> + base area <span class="chem">πr^2</span>.
        "全表面積 = 側面積 <span class=\"chem\">πrl</span> + 底面積 <span class=\"chem\">πr^2</span> です。",
      ],
      // EN: <div class="worked__math"><i>l</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = 13 cm ⇒ <i>A</i><sub>total</sub> = <i>π</i>(5)(13) + <i>π</i>(5)<sup>2</sup> = 65<i>π</i> + 25<i>π</i> = <b>90<i>π</i> cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>l</i> = √(5<sup>2</sup> + 12<sup>2</sup>) = 13 cm ⇒ <i>A</i><sub>total</sub> = <i>π</i>(5)(13) + <i>π</i>(5)<sup>2</sup> = 65<i>π</i> + 25<i>π</i> = <b>90<i>π</i> cm<sup>2</sup></b></div>",
      misconception: {
        // EN (option B): 65π cm² is only the curved surface area πrl. A solid cone also includes the circular base of area πr² = 25π cm².
        "1": "65π cm² は側面積 πrl のみです。円錐の全表面積には底面の円 πr² = 25π cm² も含まれます。",
        // EN (option C): You used the vertical height h = 12 instead of the slant height l = √(5² + 12²) = 13 in πrl + πr².
        "2": "πrl + πr² に母線の長さ l = √(5² + 12²) = 13 ではなく高さ h = 12 を代入してしまいました。",
        // EN (option D): 100π cm³ is the volume (1/3)π(5²)(12) of the cone, not its surface area.
        "3": "100π cm³ は表面積ではなく円錐の体積 (1/3)π(5²)(12) です。",
      },
    },

    // ── t3-1-q004 · mcq · foundation · SL · SL 3.4 · 1 mark
    "t3-1-q004": {
      // EN: <p>Express <span class="mono">210°</span> in radians as an exact multiple of <span class="chem">pi</span>.</p>
      stem: "<p><span class=\"mono\">210°</span> を <span class=\"chem\">pi</span> を用いた正確な弧度法（ラジアン）で表しなさい。</p>",
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
        "<span class=\"chem\">pi / 180°</span> を掛けて分数 <span class=\"chem\">210 / 180</span> を約分します。",
        // EN: Notice that <span class="mono">210° = 7 × 30°</span> and <span class="mono">30° = π/6</span>.
        "<span class=\"mono\">210° = 7 × 30°</span> かつ <span class=\"mono\">30° = π/6</span> であることに注目しましょう。",
      ],
      // EN: <div class="worked__math">210° × <span class="frac"><span><i>π</i></span><span>180°</span></span> = <span class="frac"><span>7<i>π</i></span><span>6</span></span></div>
      solution: "<div class=\"worked__math\">210° × <span class=\"frac\"><span><i>π</i></span><span>180°</span></span> = <span class=\"frac\"><span>7<i>π</i></span><span>6</span></span></div>",
      misconception: {
        // EN (option B): 5π/6 is 150° (180° − 30°), whereas 210° is 180° + 30°.
        "1": "5π/6 は 150°（180° − 30°）であり、210° は 180° + 30° です。",
        // EN (option C): 4π/3 is 240° (180° + 60°).
        "2": "4π/3 は 240°（180° + 60°）です。",
        // EN (option D): 7π/4 is 315°.
        "3": "7π/4 は 315° です。",
      },
    },

    // ── t3-1-q005 · numeric · foundation · SL · SL 3.4 · 2 marks
    "t3-1-q005": {
      // EN: <p>A circular sector has radius <span class="mono">10 cm</span> and central angle <span class="chem">theta = 1.4</span> radians. Calculate the area of the sector in <span class="unit">cm2</span>.</p>
      stem: "<p>半径 <span class=\"mono\">10 cm</span>、中心角 <span class=\"chem\">theta = 1.4</span> ラジアンの扇形の面積を <span class=\"unit\">cm2</span> で計算しなさい (Calculate)。</p>",
      hints: [
        // EN: Use the sector area formula <span class="chem">A = (1/2)r^2theta</span>.
        "扇形の面積公式 <span class=\"chem\">A = (1/2)r^2theta</span> を使います。",
        // EN: Substitute <span class="chem">r = 10</span> and <span class="chem">theta = 1.4</span>.
        "<span class=\"chem\">r = 10</span> と <span class=\"chem\">theta = 1.4</span> を代入します。",
      ],
      // EN: <div class="worked__math"><i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(10)<sup>2</sup>(1.4) = 50 × 1.4 = <b>70 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> = <span class=\"frac\"><span>1</span><span>2</span></span>(10)<sup>2</sup>(1.4) = 50 × 1.4 = <b>70 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q006 · numeric · foundation · SL · SL 3.2 · 3 marks
    "t3-1-q006": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">a = 7 cm</span>, <span class="chem">b = 8 cm</span>, and <span class="chem">angle C = 60°</span>. Find the exact length of side <span class="chem">c</span>.</p>
      stem: "<p>三角形 <span class=\"chem\">ABC</span> において、<span class=\"chem\">a = 7 cm</span>、<span class=\"chem\">b = 8 cm</span>、<span class=\"chem\">angle C = 60°</span> とする。辺 <span class=\"chem\">c</span> の正確な長さを求めなさい (Find)。</p>",
      hints: [
        // EN: You know two sides and the included angle (<span class="chem">SAS</span>), so use the Cosine Rule: <span class="chem">c^2 = a^2 + b^2 - 2ab cos C</span>.
        "2 辺とその間の角（<span class=\"chem\">SAS</span>）がわかっているので、余弦定理 <span class=\"chem\">c^2 = a^2 + b^2 - 2ab cos C</span> を使います。",
        // EN: Recall that <span class="chem">cos 60° = 1/2</span>.
        "<span class=\"chem\">cos 60° = 1/2</span> であることを思い出しましょう。",
      ],
      // EN: <div class="worked__math"><i>c</i><sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> − 2(7)(8) cos 60° = 49 + 64 − 56 = 57 ⇒ <i>c</i> = <b>√57 cm</b></div>
      solution: "<div class=\"worked__math\"><i>c</i><sup>2</sup> = 7<sup>2</sup> + 8<sup>2</sup> − 2(7)(8) cos 60° = 49 + 64 − 56 = 57 ⇒ <i>c</i> = <b>√57 cm</b></div>",
    },

    // ── t3-1-q007 · mcq · exam · SL · SL 3.2 · 3 marks
    "t3-1-q007": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> In triangle <span class="chem">ABC</span>, the side lengths are <span class="chem">a = 5 cm</span>, <span class="chem">b = 6 cm</span>, and <span class="chem">c = 8 cm</span>. What is the exact value of <span class="chem">cos C</span>, and what does this tell you about <span class="chem">angle C</span>?</p>
      stem: "<p><strong>[Paper 1 — 電卓不可]</strong> 三角形 <span class=\"chem\">ABC</span> の 3 辺の長さが <span class=\"chem\">a = 5 cm</span>、<span class=\"chem\">b = 6 cm</span>、<span class=\"chem\">c = 8 cm</span> である。<span class=\"chem\">cos C</span> の厳密値（正確な値）はいくつで、そこから <span class=\"chem\">angle C</span> について何がわかりますか？</p>",
      options: [
        // EN: <span class="chem">cos C = -1/20</span>, so <span class="chem">angle C</span> is obtuse
        "<span class=\"chem\">cos C = -1/20</span> なので、<span class=\"chem\">angle C</span> は鈍角である",
        // EN: <span class="chem">cos C = 1/20</span>, so <span class="chem">angle C</span> is acute
        "<span class=\"chem\">cos C = 1/20</span> なので、<span class=\"chem\">angle C</span> は鋭角である",
        // EN: <span class="chem">cos C = -3/40</span>, so <span class="chem">angle C</span> is obtuse
        "<span class=\"chem\">cos C = -3/40</span> なので、<span class=\"chem\">angle C</span> は鈍角である",
        // EN: <span class="chem">cos C = 0</span>, so <span class="chem">angle C = 90°</span>
        "<span class=\"chem\">cos C = 0</span> なので、<span class=\"chem\">angle C = 90°</span> である",
      ],
      hints: [
        // EN: Use the rearranged Cosine Rule: <span class="chem">cos C = (a^2 + b^2 - c^2) / (2ab)</span>.
        "変形した余弦定理 <span class=\"chem\">cos C = (a^2 + b^2 - c^2) / (2ab)</span> を使います。",
        // EN: A negative cosine on <span class="chem">(0°, 180°)</span> means the angle lies in Quadrant II (obtuse).
        "<span class=\"chem\">(0°, 180°)</span> でコサインが負のときは、第 2 象限の角（鈍角）になります。",
      ],
      // EN: <div class="worked__math">cos <i>C</i> = <span class="frac"><span>5<sup>2</sup> + 6<sup>2</sup> − 8<sup>2</sup></span><span>2(5)(6)</span></span> = <span class="frac"><span>25 + 36 − 64</span><span>60</span></span> = −<span class="frac"><span>3</span><span>60</span></span> = <b>−<span class="frac"><span>1</span><span>20</span></span></b> (obtuse since cos <i>C</i> &lt; 0)</div>
      solution: "<div class=\"worked__math\">cos <i>C</i> = <span class=\"frac\"><span>5<sup>2</sup> + 6<sup>2</sup> − 8<sup>2</sup></span><span>2(5)(6)</span></span> = <span class=\"frac\"><span>25 + 36 − 64</span><span>60</span></span> = −<span class=\"frac\"><span>3</span><span>60</span></span> = <b>−<span class=\"frac\"><span>1</span><span>20</span></span></b> （cos <i>C</i> &lt; 0 なので鈍角）</div>",
      misconception: {
        // EN (option B): You computed (c² − a² − b²)/(2ab) instead of (a² + b² − c²)/(2ab), flipping the sign.
        "1": "(a² + b² − c²)/(2ab) ではなく (c² − a² − b²)/(2ab) を計算してしまい、符号が逆になっています。",
        // EN (option C): Check your arithmetic: 25 + 36 − 64 = −3, and 2(5)(6) = 60, so −3/60 simplifies to −1/20.
        "2": "計算を確認しましょう：25 + 36 − 64 = −3、2(5)(6) = 60 なので、−3/60 を約分すると −1/20 です。",
        // EN (option D): 5² + 6² = 61 ≠ 64, so this is not a right-angled triangle.
        "3": "5² + 6² = 61 ≠ 64 なので、直角三角形ではありません。",
      },
    },

    // ── t3-1-q008 · numeric · exam · SL · SL 3.2, 3.5 · 4 marks
    "t3-1-q008": {
      // EN: <p><strong>[Paper 2 — GDC]</strong> In triangle <span class="chem">ABC</span>, <span class="chem">AB = 12 cm</span>, <span class="chem">BC = 9 cm</span>, and <span class="chem">angle BAC = 42°</span>. Given that <span class="chem">angle ACB</span> is <strong>obtuse</strong>, find the size of <span class="chem">angle ACB</span> in degrees to 3 significant figures.</p>
      stem: "<p><strong>[Paper 2 — GDC 可]</strong> 三角形 <span class=\"chem\">ABC</span> において、<span class=\"chem\">AB = 12 cm</span>、<span class=\"chem\">BC = 9 cm</span>、<span class=\"chem\">angle BAC = 42°</span> である。<span class=\"chem\">angle ACB</span> が<strong>鈍角</strong>であるとき、<span class=\"chem\">angle ACB</span> の大きさを度数法で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Use the Sine Rule <span class="chem">(sin C)/12 = (sin 42°)/9</span> to find the acute reference angle <span class="chem">C_1</span>.
        "正弦定理 <span class=\"chem\">(sin C)/12 = (sin 42°)/9</span> を使って鋭角 <span class=\"chem\">C_1</span> を求めます。",
        // EN: Since <span class="chem">angle ACB</span> is obtuse, subtract <span class="chem">C_1</span> from <span class="mono">180°</span>.
        "<span class=\"chem\">angle ACB</span> は鈍角なので、<span class=\"mono\">180°</span> から <span class=\"chem\">C_1</span> を引きます。",
      ],
      // EN: <div class="worked__math">sin <i>C</i> = <span class="frac"><span>12 sin 42°</span><span>9</span></span> ≈ 0.892174 ⇒ <i>C</i><sub>1</sub> = 63.148°</div><div class="worked__math"><i>C</i><sub>obtuse</sub> = 180° − 63.148° = <b>117°</b> (116.852°)</div>
      solution: "<div class=\"worked__math\">sin <i>C</i> = <span class=\"frac\"><span>12 sin 42°</span><span>9</span></span> ≈ 0.892174 ⇒ <i>C</i><sub>1</sub> = 63.148°</div><div class=\"worked__math\"><i>C</i><sub>obtuse</sub> = 180° − 63.148° = <b>117°</b> (116.852°)</div>",
    },

    // ── t3-1-q009 · mcq · exam · SL · SL 3.3 · 3 marks
    "t3-1-q009": {
      // EN: <p>Port <span class="chem">B</span> is on a three-figure bearing of <span class="mono">115°</span> from Port <span class="chem">A</span>. What is the three-figure back-bearing of Port <span class="chem">A</span> <strong>from</strong> Port <span class="chem">B</span>?</p>
      stem: "<p>港 <span class=\"chem\">B</span> は港 <span class=\"chem\">A</span> から 3 桁の方位角 <span class=\"mono\">115°</span> の方向にある。港 <span class=\"chem\">B</span> <strong>から</strong>見た港 <span class=\"chem\">A</span> の 3 桁の逆方位角はどれですか？</p>",
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
        "<span class=\"chem\">B</span> から <span class=\"chem\">A</span> への方位角は、<span class=\"chem\">A</span> から <span class=\"chem\">B</span> への向きと正反対です。",
        // EN: Add <span class="mono">180°</span> to <span class="mono">115°</span>.
        "<span class=\"mono\">115°</span> に <span class=\"mono\">180°</span> を足します。",
      ],
      // EN: <div class="worked__math">Back-bearing = 115° + 180° = <b>295°</b></div>
      solution: "<div class=\"worked__math\">逆方位角 = 115° + 180° = <b>295°</b></div>",
      misconception: {
        // EN (option B): 065° is 180° − 115° (the co-interior angle between South at A and North at B), not the clockwise angle from North at B.
        "1": "065° は 180° − 115° であり、B の北から時計回りに測った角度ではありません。",
        // EN (option C): 245° is 360° − 115° (counter-clockwise from North at A).
        "2": "245° は 360° − 115°（A の北から反時計回り）です。",
        // EN (option D): You subtracted from 270° instead of adding 180°.
        "3": "180° を足すのではなく 270° から引いてしまいました。",
      },
    },

    // ── t3-1-q010 · numeric · exam · SL · SL 3.3 · 4 marks
    "t3-1-q010": {
      // EN: <p>A ship sails from harbour <span class="chem">O</span> for <span class="mono">15 km</span> on a bearing of <span class="mono">040°</span> to point <span class="chem">P</span>, and then sails <span class="mono">22 km</span> on a bearing of <span class="mono">160°</span> to point <span class="chem">Q</span>. Calculate the direct distance <span class="chem">OQ</span> in <span class="unit">km</span>, to 3 significant figures.</p>
      stem: "<p>船が港 <span class=\"chem\">O</span> から方位角 <span class=\"mono\">040°</span> の方向に <span class=\"mono\">15 km</span> 進んで点 <span class=\"chem\">P</span> に着き、次に方位角 <span class=\"mono\">160°</span> の方向に <span class=\"mono\">22 km</span> 進んで点 <span class=\"chem\">Q</span> に着いた。直線距離 <span class=\"chem\">OQ</span> を <span class=\"unit\">km</span> で計算し (Calculate)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Draw North arrows at <span class="chem">O</span> and <span class="chem">P</span>. The angle between <span class="chem">PO</span> and South at <span class="chem">P</span> is <span class="mono">40°</span>, and the angle between North at <span class="chem">P</span> and <span class="chem">PQ</span> is <span class="mono">160°</span>.
        "<span class=\"chem\">O</span> と <span class=\"chem\">P</span> に北向きの矢印を描きます。<span class=\"chem\">PO</span> と <span class=\"chem\">P</span> の南向きのなす角は <span class=\"mono\">40°</span>、<span class=\"chem\">P</span> の北向きと <span class=\"chem\">PQ</span> のなす角は <span class=\"mono\">160°</span> です。",
        // EN: This makes the interior angle <span class="chem">angle OPQ = (180° - 160°) + 40° = 60°</span>. Now apply the Cosine Rule to triangle <span class="chem">OPQ</span>!
        "したがって内角は <span class=\"chem\">angle OPQ = (180° - 160°) + 40° = 60°</span> になります。三角形 <span class=\"chem\">OPQ</span> に余弦定理を適用しましょう！",
      ],
      // EN: <div class="worked__math">∠<i>OPQ</i> = 20° + 40° = 60°</div><div class="worked__math"><i>OQ</i> = √(15<sup>2</sup> + 22<sup>2</sup> − 2(15)(22) cos 60°) = √(225 + 484 − 330) = √379 ≈ <b>19.5 km</b></div>
      solution: "<div class=\"worked__math\">∠<i>OPQ</i> = 20° + 40° = 60°</div><div class=\"worked__math\"><i>OQ</i> = √(15<sup>2</sup> + 22<sup>2</sup> − 2(15)(22) cos 60°) = √(225 + 484 − 330) = √379 ≈ <b>19.5 km</b></div>",
    },

    // ── t3-1-q011 · numeric · exam · SL · SL 3.4 · 4 marks
    "t3-1-q011": {
      // EN: <p>A circle has radius <span class="chem">r = 12 cm</span>. A chord <span class="chem">AB</span> subtends a central angle of <span class="chem">theta = 2.1</span> radians at the centre <span class="chem">O</span>. Calculate the area of the minor circular segment bounded by the chord <span class="chem">AB</span> and the arc <span class="chem">AB</span>, to 3 significant figures.</p>
      stem: "<p>半径 <span class=\"chem\">r = 12 cm</span> の円において、弦 <span class=\"chem\">AB</span> が中心 <span class=\"chem\">O</span> で <span class=\"chem\">theta = 2.1</span> ラジアンの中心角を張っている。弦 <span class=\"chem\">AB</span> と弧 <span class=\"chem\">AB</span> で囲まれた小さい方の弓形の面積を計算し (Calculate)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Use <span class="chem">A_{segment} = (1/2)r^2(theta - sin(theta))</span> with <span class="chem">theta</span> in radians.
        "<span class=\"chem\">theta</span> をラジアンとして <span class=\"chem\">A_{segment} = (1/2)r^2(theta - sin(theta))</span> を使います。",
        // EN: Ensure your GDC is in <strong>radians</strong> when evaluating <span class="chem">sin(2.1)</span>.
        "<span class=\"chem\">sin(2.1)</span> を計算するときは、GDC が<strong>ラジアン（RAD）</strong>モードになっていることを確認しましょう。",
      ],
      // EN: <div class="worked__math"><i>A</i><sub>segment</sub> = <span class="frac"><span>1</span><span>2</span></span>(12)<sup>2</sup>(2.1 − sin 2.1) = 72(2.1 − 0.863209) ≈ <b>89.0 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i><sub>segment</sub> = <span class=\"frac\"><span>1</span><span>2</span></span>(12)<sup>2</sup>(2.1 − sin 2.1) = 72(2.1 − 0.863209) ≈ <b>89.0 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q012 · multi · exam · SL · SL 3.5 · 2 marks
    "t3-1-q012": {
      // EN: <p>In triangle <span class="chem">ABC</span>, you are given <span class="chem">angle A = 30°</span> and side <span class="chem">b = 16 cm</span>. For which of the following values of the opposite side <span class="chem">a</span> are there <strong>two distinct possible triangles</strong> <span class="chem">ABC</span>? Select all that apply.</p>
      stem: "<p>三角形 <span class=\"chem\">ABC</span> において <span class=\"chem\">angle A = 30°</span> と辺 <span class=\"chem\">b = 16 cm</span> が与えられている。対辺 <span class=\"chem\">a</span> が次のどの値のとき、<strong>異なる 2 通りの三角形</strong> <span class=\"chem\">ABC</span> が存在しますか？当てはまるものをすべて選びなさい。</p>",
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
        "垂線の長さ <span class=\"chem\">h = b sin A = 16 sin 30° = 8 cm</span> を計算します。",
        // EN: Two distinct triangles exist if and only if <span class="chem">b sin A &lt; a &lt; b</span>, i.e. <span class="chem">8 &lt; a &lt; 16</span>.
        "異なる 2 つの三角形が存在するのは <span class=\"chem\">b sin A &lt; a &lt; b</span>、すなわち <span class=\"chem\">8 &lt; a &lt; 16</span> のとき、かつそのときに限ります。",
      ],
      // EN: <p>Here <span class="chem">b sin A = 16 sin 30° = 8 cm</span>. The ambiguous two-triangle condition is <span class="chem">8 &lt; a &lt; 16</span>, which is satisfied by <span class="chem">a = 10 cm</span> and <span class="chem">a = 14 cm</span>.</p>
      solution: "<p>ここで <span class=\"chem\">b sin A = 16 sin 30° = 8 cm</span> です。三角形が 2 通り決まる条件は <span class=\"chem\">8 &lt; a &lt; 16</span> なので、<span class=\"chem\">a = 10 cm</span> と <span class=\"chem\">a = 14 cm</span> が当てはまります。</p>",
      misconception: {
        // EN (option A): Since b sin A = 16 sin 30° = 8 cm, a = 6 cm is shorter than the perpendicular height, giving 0 triangles.
        "0": "b sin A = 16 sin 30° = 8 cm なので、a = 6 cm は垂線の長さより短く、三角形は 0 個です。",
        // EN (option B): When a = b sin A = 8 cm, side a just touches the base at 90°, forming exactly 1 right-angled triangle.
        "1": "a = b sin A = 8 cm のとき、辺 a は底辺に 90° で接するため、直角三角形がちょうど 1 個だけできます。",
        // EN (option E): When a ≥ b (18 ≥ 16), the obtuse supplement 180° − B would make A + B > 180°, so only 1 triangle is possible.
        "4": "a ≥ b（18 ≥ 16）のとき、鈍角の補角 180° − B では A + B > 180° となるため、三角形は 1 個しかできません。",
      },
    },

    // ── t3-1-q013 · order · exam · SL · SL 3.1 · 3 marks
    "t3-1-q013": {
      // EN: <p>Arrange the steps in logical order to find the acute angle between the space diagonal <span class="chem">AG</span> of a cuboid <span class="chem">ABCDEFGH</span> (with base <span class="mono">6 cm × 8 cm</span> and height <span class="mono">5 cm</span>) and its horizontal base <span class="chem">ABCD</span>.</p>
      stem: "<p>直方体 <span class=\"chem\">ABCDEFGH</span>（底面 <span class=\"mono\">6 cm × 8 cm</span>、高さ <span class=\"mono\">5 cm</span>）の対角線 <span class=\"chem\">AG</span> と水平な底面 <span class=\"chem\">ABCD</span> がなす鋭角を求める手順を正しい論理的順序に並べ替えなさい。</p>",
      options: [
        // EN: Identify the vertical edge CG = 5 cm perpendicular to the base ABCD, so that AC is the orthogonal projection (shadow) of AG on the base.
        "底面 ABCD に垂直な辺 CG = 5 cm を見つけ、AC が AG の底面への正射影（影）であることを確認する。",
        // EN: Use 2D Pythagoras in the horizontal base rectangle ABCD to find the base diagonal AC = √(6² + 8²) = 10 cm.
        "水平な底面の長方形 ABCD で 2 次元の三平方の定理を使い、底面の対角線 AC = √(6² + 8²) = 10 cm を求める。",
        // EN: Form the right-angled vertical triangle ACG with right angle at C, adjacent side AC = 10 cm, and opposite side CG = 5 cm.
        "∠C = 90°、隣辺 AC = 10 cm、対辺 CG = 5 cm の鉛直な直角三角形 ACG を作る。",
        // EN: Compute ∠GAC = arctan(5 / 10) = arctan(0.5) ≈ 26.6°.
        "∠GAC = arctan(5 / 10) = arctan(0.5) ≈ 26.6° を計算する。",
      ],
      hints: [
        // EN: First identify the shadow of <span class="chem">AG</span> on the horizontal base plane.
        "まず水平な底面上の <span class=\"chem\">AG</span> の影を特定します。",
        // EN: Next find the length of that shadow before using right-angled trigonometry.
        "次に直角三角形の三角比を使う前にその影の長さを求めます。",
      ],
      // EN: <p>Drop a perpendicular from <span class="chem">G</span> to <span class="chem">C</span> on the base, find the base diagonal <span class="chem">AC = 10 cm</span>, set up right-angled triangle <span class="chem">ACG</span>, and evaluate <span class="chem">arctan(5/10) ≈ 26.6°</span>.</p>
      solution: "<p><span class=\"chem\">G</span> から底面の <span class=\"chem\">C</span> へ垂線を下ろし、底面の対角線 <span class=\"chem\">AC = 10 cm</span> を求め、直角三角形 <span class=\"chem\">ACG</span> を作って <span class=\"chem\">arctan(5/10) ≈ 26.6°</span> を計算します。</p>",
    },

    // ── t3-1-q014 · short · exam · SL · SL 3.4 · 5 marks
    "t3-1-q014": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> A sector of a circle of radius <span class="chem">r</span> cm has central angle <span class="chem">theta</span> radians. The perimeter of the sector is <span class="mono">20 cm</span> and the area of the sector is <span class="mono">24 cm²</span>. Find the two possible pairs of values of <span class="chem">(r, theta)</span>.</p>
      stem: "<p><strong>[Paper 1 — 電卓不可]</strong> 半径 <span class=\"chem\">r</span> cm、中心角 <span class=\"chem\">theta</span> ラジアンの扇形がある。この扇形の周の長さが <span class=\"mono\">20 cm</span>、面積が <span class=\"mono\">24 cm²</span> であるとき、<span class=\"chem\">(r, theta)</span> のとり得る 2 組の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the two equations: <span class="chem">2r + rθ = 20</span> and <span class="chem">(1/2)r^2theta = 24</span>.
        "2 つの方程式 <span class=\"chem\">2r + rθ = 20</span> と <span class=\"chem\">(1/2)r^2theta = 24</span> を立てます。",
        // EN: Isolate <span class="chem">rθ = 20 - 2r</span> from the first equation and substitute it into <span class="chem">(1/2)r(rθ) = 24</span>.
        "最初の式から <span class=\"chem\">rθ = 20 - 2r</span> を作り、<span class=\"chem\">(1/2)r(rθ) = 24</span> に代入します。",
      ],
      // EN: <p>Either <i>r</i> = 4 cm and <i>θ</i> = 3 rad, or <i>r</i> = 6 cm and <i>θ</i> = 4/3 rad.</p>
      answer: "<p><i>r</i> = 4 cm かつ <i>θ</i> = 3 rad、または <i>r</i> = 6 cm かつ <i>θ</i> = 4/3 rad。</p>",
      markscheme: [
        // EN: M1: Set up the perimeter equation 2r + rθ = 20 and area equation (1/2)r²θ = 24.
        "M1：周の長さの方程式 2r + rθ = 20 と面積の方程式 (1/2)r²θ = 24 を立てる。",
        // EN: M1: Express rθ = 20 − 2r and substitute into the area equation: (1/2)r(20 − 2r) = 24.
        "M1：rθ = 20 − 2r と表して面積の式に代入する：(1/2)r(20 − 2r) = 24。",
        // EN: A1: Simplify to the quadratic r² − 10r + 24 = 0 ⇒ (r − 4)(r − 6) = 0.
        "A1：2 次方程式 r² − 10r + 24 = 0 ⇒ (r − 4)(r − 6) = 0 に整理する。",
        // EN: A1: Obtain r = 4 cm or r = 6 cm.
        "A1：r = 4 cm または r = 6 cm を得る。",
        // EN: A1: Back-substitute into θ = (20 − 2r)/r to get (r = 4, θ = 3) and (r = 6, θ = 4/3).
        "A1：θ = (20 − 2r)/r に代入し、(r = 4, θ = 3) と (r = 6, θ = 4/3) を得る。",
      ],
    },

    // ── t3-1-q015 · numeric · challenge · SL · SL 3.2, 3.5 · 5 marks
    "t3-1-q015": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> In triangle <span class="chem">ABC</span>, <span class="chem">AB = 6 cm</span>, <span class="chem">BC = 4 cm</span>, and <span class="chem">cos(angle BAC) = 3/4</span>. Two different triangles fit this information. Given also that <span class="chem">angle ACB</span> is <strong>obtuse</strong>, find the length of <span class="chem">AC</span> (in <span class="unit">cm</span>).</p>
      stem: "<p><strong>[Paper 1 — 電卓不可]</strong> 三角形 <span class=\"chem\">ABC</span> において、<span class=\"chem\">AB = 6 cm</span>、<span class=\"chem\">BC = 4 cm</span>、<span class=\"chem\">cos(angle BAC) = 3/4</span> である。この条件に合う三角形は 2 通りある。さらに <span class=\"chem\">angle ACB</span> が<strong>鈍角</strong>であるとき、<span class=\"chem\">AC</span> の長さ（<span class=\"unit\">cm</span> 単位）を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is the ambiguous case in cosine-rule form. Two lengths of <span class="chem">AC</span> are possible; the word "obtuse" tells you which one to keep. Find both, then test each.
        "解読：これは余弦定理の形で現れる 2 通りの三角形の場合（三角形の決定）です。<span class=\"chem\">AC</span> の長さは 2 通り考えられ、「鈍角」という条件でどちらを残すかが決まります。両方を求めてから、それぞれを確かめましょう。",
        // EN: Let <span class="chem">AC = b</span> and write the Cosine Rule using <span class="chem">angle A</span>: <span class="chem">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span>.
        "<span class=\"chem\">AC = b</span> とおき、<span class=\"chem\">angle A</span> を使って余弦定理 <span class=\"chem\">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span> を立てます。",
        // EN: Substitute the given values to form a quadratic in <span class="chem">b</span>: <span class="chem">16 = 36 + b^2 - 2(6)(b)(3/4)</span>, i.e. <span class="chem">b^2 - 9b + 20 = 0</span>.
        "与えられた値を代入して <span class=\"chem\">b</span> の 2 次方程式を作ります：<span class=\"chem\">16 = 36 + b^2 - 2(6)(b)(3/4)</span>、すなわち <span class=\"chem\">b^2 - 9b + 20 = 0</span>。",
        // EN: For each root, find the sign of <span class="chem">cos C = (BC^2 + AC^2 - AB^2)/(2(BC)(AC))</span>. A negative value means <span class="chem">angle ACB</span> is obtuse.
        "それぞれの解について <span class=\"chem\">cos C = (BC^2 + AC^2 - AB^2)/(2(BC)(AC))</span> の符号を調べます。負なら <span class=\"chem\">angle ACB</span> は鈍角です。",
      ],
      // EN: <div class="worked__math">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class="frac"><span>3</span><span>4</span></span> ⇒ <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0 ⇒ (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class="worked__math">If <i>b</i> = 4: cos <i>C</i> = <span class="frac"><span>16 + 16 − 36</span><span>2(4)(4)</span></span> = −<span class="frac"><span>1</span><span>8</span></span> &lt; 0, so <i>C</i> is obtuse. If <i>b</i> = 5: cos <i>C</i> = <span class="frac"><span>16 + 25 − 36</span><span>2(4)(5)</span></span> = <span class="frac"><span>1</span><span>8</span></span> &gt; 0, so <i>C</i> is acute.</div><div class="worked__math">Hence <i>AC</i> = <b>4 cm</b>.</div>
      solution: "<div class=\"worked__math\">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class=\"frac\"><span>3</span><span>4</span></span> ⇒ <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0 ⇒ (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class=\"worked__math\"><i>b</i> = 4 のとき：cos <i>C</i> = <span class=\"frac\"><span>16 + 16 − 36</span><span>2(4)(4)</span></span> = −<span class=\"frac\"><span>1</span><span>8</span></span> &lt; 0 なので <i>C</i> は鈍角。<i>b</i> = 5 のとき：cos <i>C</i> = <span class=\"frac\"><span>16 + 25 − 36</span><span>2(4)(5)</span></span> = <span class=\"frac\"><span>1</span><span>8</span></span> &gt; 0 なので <i>C</i> は鋭角。</div><div class=\"worked__math\">よって <i>AC</i> = <b>4 cm</b>。</div>",
    },

    // ── t3-1-q016 · numeric · challenge · SL · SL 3.4 · 6 marks
    "t3-1-q016": {
      // EN: <p>Two identical circles, each of radius <span class="mono">6 cm</span>, are drawn such that the centre of each circle lies on the circumference of the other circle. Find the area of the overlapping region common to both circles, in <span class="unit">cm2</span> to 3 significant figures.</p>
      stem: "<p>半径がともに <span class=\"mono\">6 cm</span> の 2 つの合同な円が、互いの中心がもう一方の円の周上にあるように描かれている。両方の円に共通する重なった部分の面積を <span class=\"unit\">cm2</span> で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the overlap is two equal circular segments, one cut from each circle by the common chord. The hidden fact is the angle each segment subtends at its centre; the condition "each centre lies on the other circle" gives it.
        "解読：重なった部分は、共通弦によって各円から切り取られた 2 つの合同な弓形でできています。隠れた事実は、各弓形が中心で張る角です。「それぞれの中心がもう一方の円周上にある」という条件からその角が分かります。",
        // EN: Let the centres be <span class="chem">O_1, O_2</span> and the intersection points be <span class="chem">A, B</span>. Since <span class="chem">O_1 O_2 = O_1 A = O_2 A = 6 cm</span>, triangles <span class="chem">O_1 O_2 A</span> and <span class="chem">O_1 O_2 B</span> are equilateral (<span class="mono">60° = π/3</span>)!
        "中心を <span class=\"chem\">O_1, O_2</span>、交点を <span class=\"chem\">A, B</span> とします。<span class=\"chem\">O_1 O_2 = O_1 A = O_2 A = 6 cm</span> なので、三角形 <span class=\"chem\">O_1 O_2 A</span> と <span class=\"chem\">O_1 O_2 B</span> は正三角形（<span class=\"mono\">60° = π/3</span>）です！",
        // EN: Thus the central angle at each centre is <span class="chem">theta = 2pi/3</span>, and the overlap consists of <strong>two identical circular segments</strong> of angle <span class="chem">2pi/3</span>.
        "よって各中心での中心角は <span class=\"chem\">theta = 2pi/3</span> となり、重なった部分は中心角 <span class=\"chem\">2pi/3</span> の<strong>合同な 2 つの弓形</strong>からなります。",
      ],
      // EN: <div class="worked__math">∠<i>AO</i><sub>1</sub><i>B</i> = <span class="frac"><span>2<i>π</i></span><span>3</span></span> rad ⇒ <i>A</i><sub>overlap</sub> = 2 × <span class="frac"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − sin <span class="frac"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − <span class="frac"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">∠<i>AO</i><sub>1</sub><i>B</i> = <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> rad ⇒ <i>A</i><sub>overlap</sub> = 2 × <span class=\"frac\"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> − sin <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> − <span class=\"frac\"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q017 · short · challenge · SL · SL 3.1 · 6 marks
    "t3-1-q017": {
      // EN: <p>A hollow right circular cone (open at the base) of base radius <span class="chem">r</span> and slant height <span class="chem">l</span> is made by rolling up a semicircular sheet of thin metal of radius <span class="mono">10 cm</span> so that the two straight radii meet without overlap.<br>(a) Find the base radius <span class="chem">r</span> and vertical height <span class="chem">h</span> of the cone. <strong>[4 marks]</strong><br>(b) Find the acute angle between a slant generator of the cone and the plane of its base. <strong>[2 marks]</strong></p>
      stem: "<p>半径 <span class=\"mono\">10 cm</span> の半円形の薄い金属板を、2 本の半径が重ならないように丸めて、底面の半径 <span class=\"chem\">r</span>、母線の長さ <span class=\"chem\">l</span> の中空の直円錐（底面は開いている）を作った。<br>(a) この円錐の底面の半径 <span class=\"chem\">r</span> と高さ <span class=\"chem\">h</span> を求めなさい (Find)。 <strong>[4 marks]</strong><br>(b) この円錐の母線と底面を含む平面がなす鋭角を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: rolling a flat sheet into a cone keeps lengths. The radius of the sheet becomes the slant height, and the curved edge of the sheet becomes the circumference of the base.
        "解読：平らな板を丸めて円錐にしても長さは変わりません。板の半径は母線の長さに、板の曲線の縁は底面の円周になります。",
        // EN: When you roll a sector into a cone, the radius of the flat sector becomes the <strong>slant height</strong> <span class="chem">l = 10 cm</span> of the cone, and the arc length of the sector becomes the base circumference <span class="chem">2pi r</span>.
        "扇形を丸めて円錐を作ると、元の扇形の半径が円錐の<strong>母線の長さ</strong> <span class=\"chem\">l = 10 cm</span> になり、扇形の弧の長さが底面の円周 <span class=\"chem\">2pi r</span> になります。",
        // EN: Equate <span class="chem">2pi r = 10pi</span> to find <span class="chem">r</span>.
        "<span class=\"chem\">2pi r = 10pi</span> とおいて <span class=\"chem\">r</span> を求めます。",
      ],
      // EN: <p>(a) <i>r</i> = 5 cm, <i>h</i> = 5√3 cm (≈ 8.66 cm); (b) 60° (or π/3 rad).</p>
      answer: "<p>(a) <i>r</i> = 5 cm、<i>h</i> = 5√3 cm (≈ 8.66 cm)；(b) 60°（または π/3 rad）。</p>",
      markscheme: [
        // EN: M1: The arc length of the semicircle (π × 10) becomes the circumference 2πr of the cone base (or equate curved area πrl = (1/2)π(10)² with l = 10).
        "M1：半円の弧の長さ (π × 10) が円錐の底面の円周 2πr になる（または l = 10 として側面積 πrl = (1/2)π(10)² とおく）。",
        // EN: A1: 2πr = 10π ⇒ r = 5 cm (and slant height l = 10 cm).
        "A1：2πr = 10π ⇒ r = 5 cm（および母線 l = 10 cm）。",
        // EN: M1: Use Pythagoras with the slant height: h = √(l² − r²) = √(10² − 5²).
        "M1：母線の長さを使って三平方の定理を用いる：h = √(l² − r²) = √(10² − 5²)。",
        // EN: A1: h = √75 = 5√3 cm (≈ 8.66 cm).
        "A1：h = √75 = 5√3 cm (≈ 8.66 cm)。",
        // EN: M1: Use the right triangle formed by r, h and l: cos θ = r / l = 5 / 10.
        "M1：r, h, l でできる直角三角形を使う：cos θ = r / l = 5 / 10。",
        // EN: A1: cos θ = 1/2 ⇒ θ = 60° (or π/3 rad).
        "A1：cos θ = 1/2 ⇒ θ = 60°（または π/3 rad）。",
      ],
    },

    // ── t3-1-q018 · mcq · challenge · SL · SL 3.3 · 4 marks
    "t3-1-q018": {
      // EN: <p>A vertical radio mast <span class="chem">MT</span> of height <span class="chem">h</span> metres stands on horizontal ground at <span class="chem">M</span>. From a point <span class="chem">A</span> due South of <span class="chem">M</span>, the angle of elevation of the top <span class="chem">T</span> is <span class="mono">45°</span>. From a point <span class="chem">B</span> due East of <span class="chem">M</span>, the angle of elevation of <span class="chem">T</span> is <span class="mono">30°</span>. If the distance <span class="chem">AB</span> along the ground is <span class="mono">100 m</span>, what is the exact height <span class="chem">h</span> of the mast?</p>
      stem: "<p>高さ <span class=\"chem\">h</span> メートルの鉛直な無線塔 <span class=\"chem\">MT</span> が水平な地面の点 <span class=\"chem\">M</span> に立っている。<span class=\"chem\">M</span> の真南にある点 <span class=\"chem\">A</span> から塔の頂点 <span class=\"chem\">T</span> を見上げる仰角は <span class=\"mono\">45°</span> である。<span class=\"chem\">M</span> の真東にある点 <span class=\"chem\">B</span> から <span class=\"chem\">T</span> を見上げる仰角は <span class=\"mono\">30°</span> である。地面上の距離 <span class=\"chem\">AB</span> が <span class=\"mono\">100 m</span> のとき、塔の正確な高さ <span class=\"chem\">h</span> はどれですか？</p>",
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
        "解読：直角三角形が 3 つあります。2 つは鉛直（A を通るものと B を通るもの）、1 つは水平（A, M, B。南と東は垂直なので M で直角）です。地面上の長さをすべて h で表しましょう。",
        // EN: Express both ground distances <span class="chem">AM</span> and <span class="chem">BM</span> in terms of <span class="chem">h</span>: <span class="chem">AM = h / tan 45° = h</span> and <span class="chem">BM = h / tan 30° = h sqrt(3)</span>.
        "地面上の距離 <span class=\"chem\">AM</span> と <span class=\"chem\">BM</span> をともに <span class=\"chem\">h</span> で表します：<span class=\"chem\">AM = h / tan 45° = h</span>、<span class=\"chem\">BM = h / tan 30° = h sqrt(3)</span>。",
        // EN: Since <span class="chem">A</span> is due South and <span class="chem">B</span> is due East of <span class="chem">M</span>, <span class="chem">angle AMB = 90°</span> on the ground, so <span class="chem">AM^2 + BM^2 = 100^2</span>.
        "<span class=\"chem\">A</span> は <span class=\"chem\">M</span> の真南、<span class=\"chem\">B</span> は真東にあるので、地面上で <span class=\"chem\">angle AMB = 90°</span> となり、<span class=\"chem\">AM^2 + BM^2 = 100^2</span> が成り立ちます。",
      ],
      // EN: <div class="worked__math"><i>AM</i> = <i>h</i> cot 45° = <i>h</i>, &nbsp; <i>BM</i> = <i>h</i> cot 30° = <i>h</i>√3</div><div class="worked__math"><i>AM</i><sup>2</sup> + <i>BM</i><sup>2</sup> = <i>h</i><sup>2</sup> + 3<i>h</i><sup>2</sup> = 4<i>h</i><sup>2</sup> = 100<sup>2</sup> ⇒ 2<i>h</i> = 100 ⇒ <i>h</i> = <b>50 m</b></div>
      solution: "<div class=\"worked__math\"><i>AM</i> = <i>h</i> cot 45° = <i>h</i>, &nbsp; <i>BM</i> = <i>h</i> cot 30° = <i>h</i>√3</div><div class=\"worked__math\"><i>AM</i><sup>2</sup> + <i>BM</i><sup>2</sup> = <i>h</i><sup>2</sup> + 3<i>h</i><sup>2</sup> = 4<i>h</i><sup>2</sup> = 100<sup>2</sup> ⇒ 2<i>h</i> = 100 ⇒ <i>h</i> = <b>50 m</b></div>",
      misconception: {
        // EN (option B): 50√2 m assumes AM = BM = h, ignoring that the elevation from B is 30° so BM = h√3.
        "1": "50√2 m は B からの仰角が 30° で BM = h√3 になることを無視して、AM = BM = h としてしまっています。",
        // EN (option C): 50√3 m is the ground distance BM = h√3, not the vertical height h.
        "2": "50√3 m は高さ h ではなく、地面上の距離 BM = h√3 です。",
        // EN (option D): Check Pythagoras in horizontal right triangle AMB: h² + (h√3)² = 4h² = 100², so h = 100/2 = 50 m.
        "3": "水平な直角三角形 AMB での三平方の定理を確認しましょう：h² + (h√3)² = 4h² = 100² なので h = 100/2 = 50 m です。",
      },
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't3-1.q', {
  questions: {

    // ── t3-1-q019 · numeric · foundation · SL · SL 3.4 · 2 marks
    "t3-1-q019": {
      // EN: <p>An angle measures <span class="chem">(3pi)/5</span> radians. Convert this angle to <strong>degrees</strong>.</p>
      stem: "<p>ある角の大きさは <span class=\"chem\">(3pi)/5</span> ラジアンである。この角を<strong>度</strong>に変換しなさい。</p>",
      hints: [
        // EN: To change radians to degrees, multiply by <span class="chem">180°/pi</span>.
        "ラジアンを度に直すには <span class=\"chem\">180°/pi</span> を掛けます。",
        // EN: The <span class="chem">pi</span> cancels, leaving <span class="chem">(3 × 180°)/5</span>.
        "<span class=\"chem\">pi</span> が約分されて <span class=\"chem\">(3 × 180°)/5</span> が残ります。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>3<i>π</i></span><span>5</span></span> × <span class="frac"><span>180°</span><span><i>π</i></span></span> = <span class="frac"><span>540°</span><span>5</span></span> = <b>108°</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>3<i>π</i></span><span>5</span></span> × <span class=\"frac\"><span>180°</span><span><i>π</i></span></span> = <span class=\"frac\"><span>540°</span><span>5</span></span> = <b>108°</b></div>",
    },

    // ── t3-1-q020 · numeric · foundation · SL · SL 3.1 · 3 marks
    "t3-1-q020": {
      // EN: <p>A <strong>solid</strong> hemisphere has radius <span class="mono">3.5 cm</span>. Calculate its <strong>total</strong> surface area (curved surface and flat circular face), in <span class="unit">cm2</span> to 3 significant figures. (No angles are involved.)</p>
      stem: "<p>半径 <span class=\"mono\">3.5 cm</span> の<strong>中身の詰まった</strong>半球がある。その<strong>全</strong>表面積（曲面と平らな円の面）を <span class=\"unit\">cm2</span> で計算し (Calculate)、有効数字 3 桁で答えなさい。（角は関係しない。）</p>",
      hints: [
        // EN: The curved surface of a hemisphere is half of a sphere: <span class="chem">2pi r^2</span>.
        "半球の曲面は球の表面の半分です：<span class=\"chem\">2pi r^2</span>。",
        // EN: A solid hemisphere also has a flat circular face of area <span class="chem">pi r^2</span>, so the total is <span class="chem">3pi r^2</span>.
        "中身の詰まった半球には面積 <span class=\"chem\">pi r^2</span> の平らな円の面もあるので、合計は <span class=\"chem\">3pi r^2</span> です。",
      ],
      // EN: <div class="worked__math"><i>A</i> = 2<i>π</i>(3.5)<sup>2</sup> + <i>π</i>(3.5)<sup>2</sup> = 3<i>π</i>(12.25) = 36.75<i>π</i> ≈ <b>115 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> = 2<i>π</i>(3.5)<sup>2</sup> + <i>π</i>(3.5)<sup>2</sup> = 3<i>π</i>(12.25) = 36.75<i>π</i> ≈ <b>115 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q021 · numeric · foundation · SL · SL 3.2 · 2 marks
    "t3-1-q021": {
      // EN: <p>In triangle <span class="chem">PQR</span>, <span class="chem">PQ = 8 cm</span>, <span class="chem">PR = 5 cm</span> and the angle between them is <span class="chem">angle QPR = 150°</span> (degrees). Find the exact area of the triangle, in <span class="unit">cm2</span>.</p>
      stem: "<p>三角形 <span class=\"chem\">PQR</span> において、<span class=\"chem\">PQ = 8 cm</span>、<span class=\"chem\">PR = 5 cm</span> で、この 二辺のなす角は <span class=\"chem\">angle QPR = 150°</span>（度）である。この三角形の面積の正確な値を <span class=\"unit\">cm2</span> で求めなさい (Find)。</p>",
      hints: [
        // EN: Two sides and the angle between them: use <span class="chem">A = (1/2)ab sin C</span>.
        "二辺とその間の角がわかっているので、<span class=\"chem\">A = (1/2)ab sin C</span> を使います。",
        // EN: <span class="chem">sin 150° = sin 30° = 1/2</span>.
        "<span class=\"chem\">sin 150° = sin 30° = 1/2</span> です。",
      ],
      // EN: <div class="worked__math"><i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(8)(5) sin 150° = 20 × <span class="frac"><span>1</span><span>2</span></span> = <b>10 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>A</i> = <span class=\"frac\"><span>1</span><span>2</span></span>(8)(5) sin 150° = 20 × <span class=\"frac\"><span>1</span><span>2</span></span> = <b>10 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q022 · numeric · foundation · SL · SL 3.3 · 2 marks
    "t3-1-q022": {
      // EN: <p>A point <span class="chem">A</span> on level ground is <span class="mono">40 m</span> from the foot of a vertical tower. The angle of elevation of the top of the tower from <span class="chem">A</span> is <span class="mono">37°</span> (degrees). Find the height of the tower in metres, to 3 significant figures.</p>
      stem: "<p>水平な地面上の点 <span class=\"chem\">A</span> は、鉛直な塔の根元から <span class=\"mono\">40 m</span> 離れている。<span class=\"chem\">A</span> から塔の頂上を見上げた仰角は <span class=\"mono\">37°</span>（度）である。塔の高さをメートルで求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The tower, the ground and the line of sight form a right-angled triangle. The height is <strong>opposite</strong> the <span class="mono">37°</span> angle and the <span class="mono">40 m</span> is <strong>adjacent</strong>.
        "塔、地面、視線で直角三角形ができます。高さは <span class=\"mono\">37°</span> の角の<strong>対辺</strong>で、<span class=\"mono\">40 m</span> は<strong>隣辺</strong>です。",
        // EN: Use <span class="chem">h = 40 tan 37°</span>, with your GDC in degree mode.
        "GDC を度モードにして <span class=\"chem\">h = 40 tan 37°</span> を使います。",
      ],
      // EN: <div class="worked__math"><i>h</i> = 40 tan 37° ≈ 40 × 0.75355 ≈ <b>30.1 m</b></div>
      solution: "<div class=\"worked__math\"><i>h</i> = 40 tan 37° ≈ 40 × 0.75355 ≈ <b>30.1 m</b></div>",
    },

    // ── t3-1-q023 · numeric · exam · SL · SL 3.2 · 3 marks
    "t3-1-q023": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 48°</span>, <span class="chem">angle ABC = 71°</span> (both in degrees) and <span class="chem">BC = 9.4 cm</span>. Find <span class="chem">AC</span>, in <span class="unit">cm</span> to 3 significant figures.</p>
      stem: "<p>三角形 <span class=\"chem\">ABC</span> において、<span class=\"chem\">angle BAC = 48°</span>、<span class=\"chem\">angle ABC = 71°</span>（どちらも度）、<span class=\"chem\">BC = 9.4 cm</span> である。<span class=\"chem\">AC</span> を <span class=\"unit\">cm</span> で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: <span class="chem">BC</span> is opposite <span class="chem">angle A</span> and <span class="chem">AC</span> is opposite <span class="chem">angle B</span>: a side–angle pair is known, so use the sine rule.
        "<span class=\"chem\">BC</span> は <span class=\"chem\">angle A</span> の対辺、<span class=\"chem\">AC</span> は <span class=\"chem\">angle B</span> の対辺です。辺と対角の組がわかっているので、正弦定理を使います。",
        // EN: <span class="chem">AC / (sin 71°) = 9.4 / (sin 48°)</span>.
        "<span class=\"chem\">AC / (sin 71°) = 9.4 / (sin 48°)</span> です。",
      ],
      // EN: <div class="worked__math"><i>AC</i> = <span class="frac"><span>9.4 sin 71°</span><span>sin 48°</span></span> = <span class="frac"><span>8.8879</span><span>0.74314</span></span> ≈ <b>12.0 cm</b> (11.96)</div>
      solution: "<div class=\"worked__math\"><i>AC</i> = <span class=\"frac\"><span>9.4 sin 71°</span><span>sin 48°</span></span> = <span class=\"frac\"><span>8.8879</span><span>0.74314</span></span> ≈ <b>12.0 cm</b> (11.96)</div>",
    },

    // ── t3-1-q024 · numeric · exam · SL · SL 3.2 · 3 marks
    "t3-1-q024": {
      // EN: <p>A triangle has sides of length <span class="mono">7.3 cm</span>, <span class="mono">9.1 cm</span> and <span class="mono">12.6 cm</span>. Find the size of its <strong>largest</strong> angle, in <strong>degrees</strong> to 3 significant figures.</p>
      stem: "<p>三辺の長さが <span class=\"mono\">7.3 cm</span>、<span class=\"mono\">9.1 cm</span>、<span class=\"mono\">12.6 cm</span> の三角形がある。その<strong>最大の</strong>角の大きさを<strong>度</strong>で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The largest angle is opposite the longest side, <span class="mono">12.6 cm</span>.
        "最大の角は最も長い辺 <span class=\"mono\">12.6 cm</span> の対角です。",
        // EN: Use <span class="chem">cos C = (a^2 + b^2 - c^2)/(2ab)</span> with <span class="chem">c = 12.6</span>.
        "<span class=\"chem\">c = 12.6</span> として <span class=\"chem\">cos C = (a^2 + b^2 - c^2)/(2ab)</span> を使います。",
      ],
      // EN: <div class="worked__math">cos <i>C</i> = <span class="frac"><span>7.3<sup>2</sup> + 9.1<sup>2</sup> − 12.6<sup>2</sup></span><span>2(7.3)(9.1)</span></span> = <span class="frac"><span>−22.66</span><span>132.86</span></span> ≈ −0.17056</div><div class="worked__math"><i>C</i> ≈ <b>99.8°</b> (obtuse, as the cosine is negative)</div>
      solution: "<div class=\"worked__math\">cos <i>C</i> = <span class=\"frac\"><span>7.3<sup>2</sup> + 9.1<sup>2</sup> − 12.6<sup>2</sup></span><span>2(7.3)(9.1)</span></span> = <span class=\"frac\"><span>−22.66</span><span>132.86</span></span> ≈ −0.17056</div><div class=\"worked__math\"><i>C</i> ≈ <b>99.8°</b>（余弦が負なので鈍角）</div>",
    },

    // ── t3-1-q025 · numeric · exam · SL · SL 3.2 · 5 marks
    "t3-1-q025": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">BC = 11 cm</span>, <span class="chem">angle BAC = 40°</span> and <span class="chem">angle ABC = 65°</span> (angles in degrees). Find the area of triangle <span class="chem">ABC</span>, in <span class="unit">cm2</span> to 3 significant figures.</p>
      stem: "<p>三角形 <span class=\"chem\">ABC</span> において、<span class=\"chem\">BC = 11 cm</span>、<span class=\"chem\">angle BAC = 40°</span>、<span class=\"chem\">angle ABC = 65°</span>（角は度）である。三角形 <span class=\"chem\">ABC</span> の面積を <span class=\"unit\">cm2</span> で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: you need two sides and the angle between them for <span class="chem">(1/2)ab sin C</span>, but only one side is given. Find a second side first with the sine rule.
        "解読：<span class=\"chem\">(1/2)ab sin C</span> には 二辺とその間の角が必要ですが、与えられている辺は 一つだけです。まず正弦定理で 二つ目の辺を求めます。",
        // EN: <span class="chem">angle C = 180° - 40° - 65° = 75°</span> and <span class="chem">AC = (11 sin 65°)/(sin 40°)</span>.
        "<span class=\"chem\">angle C = 180° - 40° - 65° = 75°</span>、<span class=\"chem\">AC = (11 sin 65°)/(sin 40°)</span> です。",
        // EN: Then area <span class="chem">= (1/2)(BC)(AC) sin C</span>, using the angle <span class="chem">C</span> between <span class="chem">BC</span> and <span class="chem">AC</span>.
        "次に、<span class=\"chem\">BC</span> と <span class=\"chem\">AC</span> のなす角 <span class=\"chem\">C</span> を使って、面積 <span class=\"chem\">= (1/2)(BC)(AC) sin C</span> とします。",
      ],
      // EN: <div class="worked__math"><i>C</i> = 75°, &nbsp; <i>AC</i> = <span class="frac"><span>11 sin 65°</span><span>sin 40°</span></span> ≈ 15.510 cm</div><div class="worked__math">Area = <span class="frac"><span>1</span><span>2</span></span>(11)(15.510) sin 75° ≈ <b>82.4 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\"><i>C</i> = 75°, &nbsp; <i>AC</i> = <span class=\"frac\"><span>11 sin 65°</span><span>sin 40°</span></span> ≈ 15.510 cm</div><div class=\"worked__math\">面積 = <span class=\"frac\"><span>1</span><span>2</span></span>(11)(15.510) sin 75° ≈ <b>82.4 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q026 · short · exam · SL · SL 3.2, 3.3 · 8 marks
    "t3-1-q026": {
      // EN: <p>A yacht leaves harbour <span class="chem">H</span> and sails <span class="mono">18 km</span> on a bearing of <span class="mono">072°</span> to a buoy <span class="chem">B</span>. It then sails <span class="mono">25 km</span> on a bearing of <span class="mono">195°</span> to a point <span class="chem">C</span>. All angles are in degrees.<br>(a) Show that <span class="chem">angle HBC = 57°</span>. <strong>[2 marks]</strong><br>(b) Find the distance <span class="chem">HC</span>, in km to 3 significant figures. <strong>[3 marks]</strong><br>(c) Find the bearing of <span class="chem">H</span> from <span class="chem">C</span>, to the nearest degree. <strong>[3 marks]</strong></p>
      stem: "<p>ヨットが港 <span class=\"chem\">H</span> を出て、方位角 <span class=\"mono\">072°</span> の方向に <span class=\"mono\">18 km</span> 進んでブイ <span class=\"chem\">B</span> に着く。次に方位角 <span class=\"mono\">195°</span> の方向に <span class=\"mono\">25 km</span> 進んで点 <span class=\"chem\">C</span> に着く。角はすべて度である。<br>(a) <span class=\"chem\">angle HBC = 57°</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong><br>(b) 距離 <span class=\"chem\">HC</span> を km で求め (Find)、有効数字 3 桁で答えなさい。<strong>[3 marks]</strong><br>(c) <span class=\"chem\">C</span> から見た <span class=\"chem\">H</span> の方位角を、最も近い整数の度で求めなさい。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: draw a North line at every point. Part (a) is a back-bearing question; parts (b) and (c) are the cosine rule and then the sine rule in triangle <span class="chem">HBC</span>.
        "解読：各点に北向きの線を引きます。(a) は逆方位角の問題で、(b) と (c) は三角形 <span class=\"chem\">HBC</span> での余弦定理、次に正弦定理です。",
        // EN: For (c), find <span class="chem">angle BCH</span> first. At <span class="chem">C</span>, the direction to <span class="chem">B</span> is the bearing <span class="mono">015°</span> (the back-bearing of <span class="mono">195°</span>).
        "(c) では、まず <span class=\"chem\">angle BCH</span> を求めます。<span class=\"chem\">C</span> から見た <span class=\"chem\">B</span> の方向は方位角 <span class=\"mono\">015°</span>（<span class=\"mono\">195°</span> の逆方位角）です。",
        // EN: From the diagram, <span class="chem">H</span> is anticlockwise from <span class="chem">B</span> when seen from <span class="chem">C</span>, so subtract <span class="chem">angle BCH</span> from <span class="mono">015°</span> (adding <span class="mono">360°</span>).
        "図から、<span class=\"chem\">C</span> から見ると <span class=\"chem\">H</span> は <span class=\"chem\">B</span> から反時計回りの側にあるので、<span class=\"mono\">015°</span> から <span class=\"chem\">angle BCH</span> を引きます（<span class=\"mono\">360°</span> を加えます）。",
      ],
      // EN: <p><b>Decode.</b> Bearings give directions; the angles inside the triangle come from North lines and back-bearings.</p><div class="worked__math">(a) Bearing <i>B</i> → <i>H</i> = 252°, so ∠<i>HBC</i> = 252° − 195° = 57°.</div><div class="worked__math">(b) <i>HC</i><sup>2</sup> = 18<sup>2</sup> + 25<sup>2</sup> − 2(18)(25) cos 57° ≈ 458.83 ⇒ <i>HC</i> ≈ <b>21.4 km</b></div><div class="worked__math">(c) sin ∠<i>BCH</i> = <span class="frac"><span>18 sin 57°</span><span>21.420</span></span> ≈ 0.70476 ⇒ ∠<i>BCH</i> ≈ 44.81° (acute, since it is opposite the shortest side)</div><div class="worked__math">Bearing of <i>H</i> from <i>C</i> = 015° − 44.81° + 360° ≈ <b>330°</b></div>
      solution: "<p><b>解読：</b>方位角は方向を表します。三角形の内角は北向きの線と逆方位角から求めます。</p><div class=\"worked__math\">(a) 方位角 <i>B</i> → <i>H</i> = 252° なので、∠<i>HBC</i> = 252° − 195° = 57°。</div><div class=\"worked__math\">(b) <i>HC</i><sup>2</sup> = 18<sup>2</sup> + 25<sup>2</sup> − 2(18)(25) cos 57° ≈ 458.83 ⇒ <i>HC</i> ≈ <b>21.4 km</b></div><div class=\"worked__math\">(c) sin ∠<i>BCH</i> = <span class=\"frac\"><span>18 sin 57°</span><span>21.420</span></span> ≈ 0.70476 ⇒ ∠<i>BCH</i> ≈ 44.81°（最も短い辺の対角なので鋭角）</div><div class=\"worked__math\"><i>C</i> から見た <i>H</i> の方位角 = 015° − 44.81° + 360° ≈ <b>330°</b></div>",
      // EN: <p>(a) The bearing of <i>H</i> from <i>B</i> is 072° + 180° = 252°, so ∠<i>HBC</i> = 252° − 195° = 57°. (b) <i>HC</i> ≈ 21.4 km (21.420). (c) ∠<i>BCH</i> ≈ 44.8°, so the bearing of <i>H</i> from <i>C</i> is 015° − 44.8° + 360° ≈ <b>330°</b>.</p>
      answer: "<p>(a) <i>B</i> から見た <i>H</i> の方位角は 072° + 180° = 252° なので、∠<i>HBC</i> = 252° − 195° = 57°。(b) <i>HC</i> ≈ 21.4 km (21.420)。(c) ∠<i>BCH</i> ≈ 44.8° なので、<i>C</i> から見た <i>H</i> の方位角は 015° − 44.8° + 360° ≈ <b>330°</b>。</p>",
      markscheme: [
        // EN: M1: Back-bearing of H from B is 072° + 180° = 252° (or uses the alternate angle 72° with North lines at H and B).
        "M1：B から見た H の逆方位角は 072° + 180° = 252°（または H と B に北向きの線を引き、錯角 72° を用いる）。",
        // EN: A1: ∠HBC = 252° − 195° = 57°. AG: angle HBC = 57°; the given line itself earns no mark.
        "A1：∠HBC = 252° − 195° = 57°。AG：angle HBC = 57°。与えられた結論の行そのものには点を与えない。",
        // EN: M1: Cosine rule in triangle HBC: HC² = 18² + 25² − 2(18)(25) cos 57°.
        "M1：三角形 HBC で余弦定理：HC² = 18² + 25² − 2(18)(25) cos 57°。",
        // EN: A1: HC² ≈ 458.83.
        "A1：HC² ≈ 458.83。",
        // EN: A1: HC ≈ 21.4 km (21.420).
        "A1：HC ≈ 21.4 km (21.420)。",
        // EN: M1: Finds an angle of triangle HBC at C, e.g. sin(∠BCH) = 18 sin 57° / 21.420, so ∠BCH ≈ 44.81°.
        "M1：三角形 HBC の C における角を求める。例：sin(∠BCH) = 18 sin 57° / 21.420 より ∠BCH ≈ 44.81°。",
        // EN: M1: Uses the bearing of B from C, 195° − 180° = 015°, and turns anticlockwise through ∠BCH (H lies to the west of line CB).
        "M1：C から見た B の方位角 195° − 180° = 015° を用い、∠BCH だけ反時計回りに回る（H は直線 CB の西側にある）。",
        // EN: A1: Bearing of H from C = 360° + 15° − 44.81° ≈ 330°.
        "A1：C から見た H の方位角 = 360° + 15° − 44.81° ≈ 330°。",
      ],
    },

    // ── t3-1-q027 · numeric · exam · SL · SL 3.5 · 5 marks
    "t3-1-q027": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 35°</span> (degrees), <span class="chem">BC = 7 cm</span> and <span class="chem">AC = 11 cm</span>. Two different triangles fit this information. Find the <strong>smaller</strong> possible length of <span class="chem">AB</span>, in cm to 3 significant figures.</p>
      stem: "<p>三角形 <span class=\"chem\">ABC</span> において、<span class=\"chem\">angle BAC = 35°</span>（度）、<span class=\"chem\">BC = 7 cm</span>、<span class=\"chem\">AC = 11 cm</span> である。この条件に合う三角形は 二通りある。<span class=\"chem\">AB</span> の長さとして考えられる値のうち<strong>小さい方</strong>を cm で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: two sides and a non-included angle (SSA) with the side opposite the angle shorter than the other side: this is the ambiguous case. You want the third side, not an angle.
        "解読：二辺とその間にない角（SSA）が与えられ、角の対辺がもう一方の辺より短い。これは三角形が 二通りある場合です。求めるのは角ではなく第三の辺です。",
        // EN: Let <span class="chem">AB = x</span>. The cosine rule with the known angle gives a quadratic: <span class="chem">7^2 = 11^2 + x^2 - 2(11)x cos 35°</span>.
        "<span class=\"chem\">AB = x</span> とおきます。既知の角で余弦定理を使うと 二次方程式になります：<span class=\"chem\">7^2 = 11^2 + x^2 - 2(11)x cos 35°</span>。",
        // EN: Solve <span class="chem">x^2 - (22 cos 35°)x + 72 = 0</span> with your GDC; both roots are positive, and you want the smaller one.
        "GDC で <span class=\"chem\">x^2 - (22 cos 35°)x + 72 = 0</span> を解きます。二つの解はどちらも正で、求めるのは小さい方です。",
      ],
      // EN: <p><b>Decode.</b> SSA with 11 sin 35° ≈ 6.31 &lt; 7 &lt; 11, so there are two triangles; the cosine rule turns this into a quadratic in <i>AB</i>.</p><div class="worked__math">49 = 121 + <i>x</i><sup>2</sup> − 22<i>x</i> cos 35° ⇒ <i>x</i><sup>2</sup> − 18.021<i>x</i> + 72 = 0</div><div class="worked__math"><i>x</i> ≈ 5.979 or 12.043 ⇒ smaller <i>AB</i> ≈ <b>5.98 cm</b></div>
      solution: "<p><b>解読：</b>SSA で 11 sin 35° ≈ 6.31 &lt; 7 &lt; 11 なので三角形は 二つあります。余弦定理によって <i>AB</i> の 二次方程式になります。</p><div class=\"worked__math\">49 = 121 + <i>x</i><sup>2</sup> − 22<i>x</i> cos 35° ⇒ <i>x</i><sup>2</sup> − 18.021<i>x</i> + 72 = 0</div><div class=\"worked__math\"><i>x</i> ≈ 5.979 または 12.043 ⇒ 小さい方の <i>AB</i> ≈ <b>5.98 cm</b></div>",
    },

    // ── t3-1-q028 · short · exam · SL · SL 3.2, 3.5 · 6 marks
    "t3-1-q028": {
      // EN: <p>In triangle <span class="chem">PQR</span>, <span class="chem">PQ = 15 cm</span>, <span class="chem">QR = 10 cm</span> and <span class="chem">angle QPR = 38°</span> (degrees).<br>(a) Find the two possible values of <span class="chem">angle PRQ</span>, in degrees. <strong>[3 marks]</strong><br>(b) Find the difference between the two possible areas of triangle <span class="chem">PQR</span>, in <span class="unit">cm2</span>. <strong>[3 marks]</strong><br>Give angles to 1 decimal place and areas to 3 significant figures.</p>
      stem: "<p>三角形 <span class=\"chem\">PQR</span> において、<span class=\"chem\">PQ = 15 cm</span>、<span class=\"chem\">QR = 10 cm</span>、<span class=\"chem\">angle QPR = 38°</span>（度）である。<br>(a) <span class=\"chem\">angle PRQ</span> として考えられる 二つの値を度で求めなさい (Find)。<strong>[3 marks]</strong><br>(b) 三角形 <span class=\"chem\">PQR</span> の考えられる 二つの面積の差を <span class=\"unit\">cm2</span> で求めなさい。<strong>[3 marks]</strong><br>角は小数第 1 位まで、面積は有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: <span class="chem">QR</span> is opposite the given <span class="mono">38°</span> and is shorter than <span class="chem">PQ</span>: expect two triangles.
        "<span class=\"chem\">QR</span> は与えられた <span class=\"mono\">38°</span> の対辺で、<span class=\"chem\">PQ</span> より短いので、三角形は 二つあると予想できます。",
        // EN: Use the sine rule for <span class="chem">angle PRQ</span>; the second value is <span class="chem">180° - angle PRQ</span>.
        "<span class=\"chem\">angle PRQ</span> は正弦定理で求めます。もう一つの値は <span class=\"chem\">180° - angle PRQ</span> です。",
        // EN: For each triangle, the angle between <span class="chem">PQ</span> and <span class="chem">QR</span> is <span class="chem">angle PQR = 180° - 38° - angle PRQ</span>.
        "それぞれの三角形で、<span class=\"chem\">PQ</span> と <span class=\"chem\">QR</span> のなす角は <span class=\"chem\">angle PQR = 180° - 38° - angle PRQ</span> です。",
      ],
      // EN: <div class="worked__math">(a) sin <i>R</i> = <span class="frac"><span>15 sin 38°</span><span>10</span></span> ≈ 0.92349 ⇒ <i>R</i> ≈ 67.44° or 112.56°</div><div class="worked__math">(b) <i>Q</i> ≈ 74.56° or 29.44°; areas = 75 sin <i>Q</i> ≈ 72.29 and 36.87 ⇒ difference ≈ <b>35.4 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">(a) sin <i>R</i> = <span class=\"frac\"><span>15 sin 38°</span><span>10</span></span> ≈ 0.92349 ⇒ <i>R</i> ≈ 67.44° または 112.56°</div><div class=\"worked__math\">(b) <i>Q</i> ≈ 74.56° または 29.44°；面積 = 75 sin <i>Q</i> ≈ 72.29 と 36.87 ⇒ 差 ≈ <b>35.4 cm<sup>2</sup></b></div>",
      // EN: <p>(a) ∠<i>PRQ</i> ≈ 67.4° or 112.6°. (b) The areas are about 72.3 cm² and 36.9 cm², a difference of about <b>35.4 cm²</b>.</p>
      answer: "<p>(a) ∠<i>PRQ</i> ≈ 67.4° または 112.6°。(b) 面積は約 72.3 cm² と 36.9 cm² で、差は約 <b>35.4 cm²</b>。</p>",
      markscheme: [
        // EN: M1: Sine rule: sin(∠PRQ)/15 = sin 38°/10, so sin(∠PRQ) ≈ 0.92349.
        "M1：正弦定理：sin(∠PRQ)/15 = sin 38°/10 より sin(∠PRQ) ≈ 0.92349。",
        // EN: A1: ∠PRQ ≈ 67.4°.
        "A1：∠PRQ ≈ 67.4°。",
        // EN: A1: or ∠PRQ ≈ 180° − 67.4° = 112.6°.
        "A1：または ∠PRQ ≈ 180° − 67.4° = 112.6°。",
        // EN: M1: Finds ∠PQR = 180° − 38° − ∠PRQ in each case (74.6° and 29.4°) and uses area = (1/2)(15)(10) sin(∠PQR).
        "M1：それぞれの場合で ∠PQR = 180° − 38° − ∠PRQ（74.6° と 29.4°）を求め、面積 = (1/2)(15)(10) sin(∠PQR) を用いる。",
        // EN: A1: Areas ≈ 72.3 cm² and 36.9 cm².
        "A1：面積 ≈ 72.3 cm² と 36.9 cm²。",
        // EN: A1: Difference ≈ 35.4 cm².
        "A1：差 ≈ 35.4 cm²。",
      ],
    },

    // ── t3-1-q029 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q029": {
      // EN: <p>A right pyramid <span class="chem">VABCD</span> has a square base <span class="chem">ABCD</span> of side <span class="mono">10 cm</span> and vertical height <span class="mono">14 cm</span>. Find the angle between the sloping edge <span class="chem">VA</span> and the base <span class="chem">ABCD</span>, in <strong>degrees</strong> to 3 significant figures.</p>
      stem: "<p>直角錐 <span class=\"chem\">VABCD</span> は 一辺 <span class=\"mono\">10 cm</span> の正方形の底面 <span class=\"chem\">ABCD</span> をもち、高さは <span class=\"mono\">14 cm</span> である。斜めの辺 <span class=\"chem\">VA</span> と底面 <span class=\"chem\">ABCD</span> のなす角を<strong>度</strong>で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The apex <span class="chem">V</span> is directly above the centre <span class="chem">M</span> of the square. The projection of <span class="chem">VA</span> on the base is <span class="chem">MA</span>.
        "頂点 <span class=\"chem\">V</span> は正方形の中心 <span class=\"chem\">M</span> の真上にあります。<span class=\"chem\">VA</span> の底面への正射影は <span class=\"chem\">MA</span> です。",
        // EN: <span class="chem">MA</span> is half the diagonal of the square: <span class="chem">MA = (1/2)sqrt(10^2 + 10^2) = 5sqrt(2)</span>.
        "<span class=\"chem\">MA</span> は正方形の対角線の半分です：<span class=\"chem\">MA = (1/2)sqrt(10^2 + 10^2) = 5sqrt(2)</span>。",
        // EN: In right-angled triangle <span class="chem">VMA</span>, <span class="chem">tan(angle VAM) = 14/(5sqrt(2))</span>.
        "直角三角形 <span class=\"chem\">VMA</span> で <span class=\"chem\">tan(angle VAM) = 14/(5sqrt(2))</span> です。",
      ],
      // EN: <div class="worked__math"><i>MA</i> = 5√2 ≈ 7.0711 cm, &nbsp; tan ∠<i>VAM</i> = <span class="frac"><span>14</span><span>7.0711</span></span> ≈ 1.9799</div><div class="worked__math">∠<i>VAM</i> ≈ <b>63.2°</b></div>
      solution: "<div class=\"worked__math\"><i>MA</i> = 5√2 ≈ 7.0711 cm, &nbsp; tan ∠<i>VAM</i> = <span class=\"frac\"><span>14</span><span>7.0711</span></span> ≈ 1.9799</div><div class=\"worked__math\">∠<i>VAM</i> ≈ <b>63.2°</b></div>",
    },

    // ── t3-1-q030 · numeric · exam · SL · SL 3.1, 3.2 · 5 marks
    "t3-1-q030": {
      // EN: <p>A cuboid <span class="chem">ABCDEFGH</span> has base <span class="chem">ABCD</span> with <span class="chem">AB = 6 cm</span> and <span class="chem">AD = 4 cm</span>, and height <span class="chem">AE = 3 cm</span>. The top face is <span class="chem">EFGH</span>, with <span class="chem">E</span>, <span class="chem">F</span>, <span class="chem">G</span>, <span class="chem">H</span> vertically above <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span>. The face diagonals <span class="chem">AF</span> and <span class="chem">AH</span> meet at <span class="chem">A</span>. Find the angle <span class="chem">FAH</span> between these two lines, in <strong>degrees</strong> to 3 significant figures.</p>
      stem: "<p>直方体 <span class=\"chem\">ABCDEFGH</span> の底面 <span class=\"chem\">ABCD</span> は <span class=\"chem\">AB = 6 cm</span>、<span class=\"chem\">AD = 4 cm</span> で、高さは <span class=\"chem\">AE = 3 cm</span> である。上面は <span class=\"chem\">EFGH</span> で、<span class=\"chem\">E</span>、<span class=\"chem\">F</span>、<span class=\"chem\">G</span>、<span class=\"chem\">H</span> はそれぞれ <span class=\"chem\">A</span>、<span class=\"chem\">B</span>、<span class=\"chem\">C</span>、<span class=\"chem\">D</span> の真上にある。面の対角線 <span class=\"chem\">AF</span> と <span class=\"chem\">AH</span> は <span class=\"chem\">A</span> で交わる。この 二直線のなす角 <span class=\"chem\">FAH</span> を<strong>度</strong>で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: this is the angle between two intersecting lines in a solid. The two lines and the segment <span class="chem">FH</span> joining their ends form a triangle that is <strong>not</strong> right-angled, so find all three sides and use the cosine rule.
        "解読：これは立体の中で交わる 二直線のなす角です。二直線とその端を結ぶ線分 <span class=\"chem\">FH</span> でできる三角形は直角三角形<strong>ではない</strong>ので、三辺をすべて求めて余弦定理を使います。",
        // EN: Each side is a diagonal of a rectangular face: <span class="chem">AF = sqrt(6^2 + 3^2)</span>, <span class="chem">AH = sqrt(4^2 + 3^2)</span>, <span class="chem">FH = sqrt(6^2 + 4^2)</span>.
        "どの辺も長方形の面の対角線です：<span class=\"chem\">AF = sqrt(6^2 + 3^2)</span>、<span class=\"chem\">AH = sqrt(4^2 + 3^2)</span>、<span class=\"chem\">FH = sqrt(6^2 + 4^2)</span>。",
        // EN: <span class="chem">cos(angle FAH) = (AF^2 + AH^2 - FH^2)/(2 × AF × AH)</span>.
        "<span class=\"chem\">cos(angle FAH) = (AF^2 + AH^2 - FH^2)/(2 × AF × AH)</span> です。",
      ],
      // EN: <p><b>Decode.</b> Angle between two lines meeting at A: build triangle AFH from three face diagonals.</p><div class="worked__math"><i>AF</i> = √45, &nbsp; <i>AH</i> = 5, &nbsp; <i>FH</i> = √52</div><div class="worked__math">cos ∠<i>FAH</i> = <span class="frac"><span>45 + 25 − 52</span><span>2(√45)(5)</span></span> = <span class="frac"><span>18</span><span>10√45</span></span> ≈ 0.26833 ⇒ ∠<i>FAH</i> ≈ <b>74.4°</b></div>
      solution: "<p><b>解読：</b>A で交わる 二直線のなす角：三本の面の対角線から三角形 AFH を作ります。</p><div class=\"worked__math\"><i>AF</i> = √45, &nbsp; <i>AH</i> = 5, &nbsp; <i>FH</i> = √52</div><div class=\"worked__math\">cos ∠<i>FAH</i> = <span class=\"frac\"><span>45 + 25 − 52</span><span>2(√45)(5)</span></span> = <span class=\"frac\"><span>18</span><span>10√45</span></span> ≈ 0.26833 ⇒ ∠<i>FAH</i> ≈ <b>74.4°</b></div>",
    },

    // ── t3-1-q031 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q031": {
      // EN: <p>An ice-cream model is a solid made of a right circular cone with a hemisphere on top. The cone and the hemisphere both have radius <span class="mono">3.2 cm</span>, and the total height of the model, from the tip of the cone to the top of the hemisphere, is <span class="mono">11 cm</span>. Find the volume of the model, in <span class="unit">cm3</span> to 3 significant figures. (No angles are involved.)</p>
      stem: "<p>アイスクリームの模型は、直円錐の上に半球をのせた中身の詰まった立体である。円錐と半球の半径はどちらも <span class=\"mono\">3.2 cm</span> で、円錐の先端から半球の頂上までの模型全体の高さは <span class=\"mono\">11 cm</span> である。模型の体積を <span class=\"unit\">cm3</span> で求め (Find)、有効数字 3 桁で答えなさい。（角は関係しない。）</p>",
      hints: [
        // EN: The hemisphere adds its radius, <span class="mono">3.2 cm</span>, to the height. So the cone has height <span class="chem">11 - 3.2 = 7.8 cm</span>.
        "半球はその半径 <span class=\"mono\">3.2 cm</span> だけ高さを増やします。よって円錐の高さは <span class=\"chem\">11 - 3.2 = 7.8 cm</span> です。",
        // EN: <span class="chem">V = (1/3)pi r^2 h + (2/3)pi r^3</span>.
        "<span class=\"chem\">V = (1/3)pi r^2 h + (2/3)pi r^3</span> です。",
      ],
      // EN: <div class="worked__math">Cone height = 11 − 3.2 = 7.8 cm</div><div class="worked__math"><i>V</i> = <span class="frac"><span>1</span><span>3</span></span><i>π</i>(3.2)<sup>2</sup>(7.8) + <span class="frac"><span>2</span><span>3</span></span><i>π</i>(3.2)<sup>3</sup> ≈ 83.642 + 68.629 ≈ <b>152 cm<sup>3</sup></b></div>
      solution: "<div class=\"worked__math\">円錐の高さ = 11 − 3.2 = 7.8 cm</div><div class=\"worked__math\"><i>V</i> = <span class=\"frac\"><span>1</span><span>3</span></span><i>π</i>(3.2)<sup>2</sup>(7.8) + <span class=\"frac\"><span>2</span><span>3</span></span><i>π</i>(3.2)<sup>3</sup> ≈ 83.642 + 68.629 ≈ <b>152 cm<sup>3</sup></b></div>",
    },

    // ── t3-1-q032 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q032": {
      // EN: <p>A right circular cone has volume <span class="mono">200 cm³</span> and vertical height <span class="mono">9 cm</span>. Find its <strong>curved</strong> surface area, in <span class="unit">cm2</span> to 3 significant figures. (No angles are involved.)</p>
      stem: "<p>体積 <span class=\"mono\">200 cm³</span>、高さ <span class=\"mono\">9 cm</span> の直円錐がある。その<strong>側面積</strong>（曲面の面積）を <span class=\"unit\">cm2</span> で求め (Find)、有効数字 3 桁で答えなさい。（角は関係しない。）</p>",
      hints: [
        // EN: Find the radius from <span class="chem">(1/3)pi r^2(9) = 200</span>.
        "<span class=\"chem\">(1/3)pi r^2(9) = 200</span> から半径を求めます。",
        // EN: Then the slant height is <span class="chem">l = sqrt(r^2 + 9^2)</span>, and the curved surface area is <span class="chem">pi r l</span>. Keep full accuracy for <span class="chem">r</span>.
        "次に母線の長さは <span class=\"chem\">l = sqrt(r^2 + 9^2)</span>、側面積は <span class=\"chem\">pi r l</span> です。<span class=\"chem\">r</span> は丸めずに使います。",
      ],
      // EN: <div class="worked__math">3<i>πr</i><sup>2</sup> = 200 ⇒ <i>r</i> = √(200/(3<i>π</i>)) ≈ 4.6066 cm</div><div class="worked__math"><i>l</i> = √(4.6066<sup>2</sup> + 81) ≈ 10.110 cm ⇒ <i>πrl</i> ≈ <b>146 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">3<i>πr</i><sup>2</sup> = 200 ⇒ <i>r</i> = √(200/(3<i>π</i>)) ≈ 4.6066 cm</div><div class=\"worked__math\"><i>l</i> = √(4.6066<sup>2</sup> + 81) ≈ 10.110 cm ⇒ <i>πrl</i> ≈ <b>146 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q033 · numeric · exam · SL · SL 3.4 · 4 marks
    "t3-1-q033": {
      // EN: <p>A chord <span class="chem">AB</span> of length <span class="mono">10 cm</span> is drawn in a circle of radius <span class="mono">7 cm</span> and centre <span class="chem">O</span>. Find the length of the <strong>minor arc</strong> <span class="chem">AB</span>, in cm to 3 significant figures. Work in radians.</p>
      stem: "<p>中心 <span class=\"chem\">O</span>、半径 <span class=\"mono\">7 cm</span> の円に、長さ <span class=\"mono\">10 cm</span> の弦 <span class=\"chem\">AB</span> が引かれている。<strong>劣弧</strong> <span class=\"chem\">AB</span> の長さを cm で求め (Find)、有効数字 3 桁で答えなさい。ラジアンで計算すること。</p>",
      hints: [
        // EN: Triangle <span class="chem">OAB</span> is isosceles. The perpendicular from <span class="chem">O</span> bisects the chord and the angle: <span class="chem">sin(theta/2) = 5/7</span>.
        "三角形 <span class=\"chem\">OAB</span> は二等辺三角形です。<span class=\"chem\">O</span> からの垂線は弦と角を 二等分します：<span class=\"chem\">sin(theta/2) = 5/7</span>。",
        // EN: Find <span class="chem">theta = 2 arcsin(5/7)</span> in <strong>radians</strong>, then use <span class="chem">l = r theta</span>.
        "<span class=\"chem\">theta = 2 arcsin(5/7)</span> を<strong>ラジアン</strong>で求め、<span class=\"chem\">l = r theta</span> を使います。",
      ],
      // EN: <div class="worked__math"><i>θ</i> = 2 arcsin(5/7) ≈ 1.5912 rad (or by the cosine rule: cos <i>θ</i> = (49 + 49 − 100)/98)</div><div class="worked__math"><i>l</i> = 7 × 1.5912 ≈ <b>11.1 cm</b></div>
      solution: "<div class=\"worked__math\"><i>θ</i> = 2 arcsin(5/7) ≈ 1.5912 rad（または余弦定理より cos <i>θ</i> = (49 + 49 − 100)/98）</div><div class=\"worked__math\"><i>l</i> = 7 × 1.5912 ≈ <b>11.1 cm</b></div>",
    },

    // ── t3-1-q034 · short · exam · SL · SL 3.4 · 7 marks
    "t3-1-q034": {
      // EN: <p>A flower bed is in the shape of a sector <span class="chem">OAB</span> of a circle with centre <span class="chem">O</span>, radius <span class="mono">4.5 m</span> and <span class="chem">angle AOB = 1.9</span> <strong>radians</strong>.<br>(a) Find the length of the arc <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(b) A straight path is laid from <span class="chem">A</span> to <span class="chem">B</span>. Find the length of the path <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(c) Find the area of the part of the flower bed between the path and the arc. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>花壇は、中心 <span class=\"chem\">O</span>、半径 <span class=\"mono\">4.5 m</span>、<span class=\"chem\">angle AOB = 1.9</span> <strong>ラジアン</strong>の扇形 <span class=\"chem\">OAB</span> の形をしている。<br>(a) 弧 <span class=\"chem\">AB</span> の長さを求めなさい (Find)。<strong>[2 marks]</strong><br>(b) <span class=\"chem\">A</span> から <span class=\"chem\">B</span> まで真っすぐな小道を敷く。小道 <span class=\"chem\">AB</span> の長さを求めなさい。<strong>[2 marks]</strong><br>(c) 花壇のうち、小道と弧の間の部分の面積を求めなさい。<strong>[3 marks]</strong><br>有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The angle is in radians, so <span class="chem">l = r theta</span> and <span class="chem">A = (1/2)r^2 theta</span> apply directly. Set your GDC to radians.
        "角はラジアンなので、<span class=\"chem\">l = r theta</span> と <span class=\"chem\">A = (1/2)r^2 theta</span> をそのまま使えます。GDC をラジアンモードにします。",
        // EN: Segment = sector − triangle: <span class="chem">(1/2)r^2(theta - sin theta)</span>.
        "弓形 = 扇形 − 三角形：<span class=\"chem\">(1/2)r^2(theta - sin theta)</span>。",
      ],
      // EN: <div class="worked__math">(a) <i>l</i> = 4.5(1.9) = <b>8.55 m</b> &nbsp; (b) <i>AB</i> = 9 sin 0.95 ≈ <b>7.32 m</b></div><div class="worked__math">(c) <span class="frac"><span>1</span><span>2</span></span>(4.5)<sup>2</sup>(1.9 − sin 1.9) = 10.125(1.9 − 0.94630) ≈ <b>9.66 m<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">(a) <i>l</i> = 4.5(1.9) = <b>8.55 m</b> &nbsp; (b) <i>AB</i> = 9 sin 0.95 ≈ <b>7.32 m</b></div><div class=\"worked__math\">(c) <span class=\"frac\"><span>1</span><span>2</span></span>(4.5)<sup>2</sup>(1.9 − sin 1.9) = 10.125(1.9 − 0.94630) ≈ <b>9.66 m<sup>2</sup></b></div>",
      // EN: <p>(a) 8.55 m; (b) 7.32 m; (c) 9.66 m².</p>
      answer: "<p>(a) 8.55 m；(b) 7.32 m；(c) 9.66 m²。</p>",
      markscheme: [
        // EN: M1: Arc length l = rθ = 4.5 × 1.9.
        "M1：弧の長さ l = rθ = 4.5 × 1.9。",
        // EN: A1: l = 8.55 m.
        "A1：l = 8.55 m。",
        // EN: M1: Chord by the cosine rule, AB² = 4.5² + 4.5² − 2(4.5)(4.5) cos 1.9 (or AB = 2(4.5) sin 0.95), in radian mode.
        "M1：ラジアンモードで、余弦定理により弦 AB² = 4.5² + 4.5² − 2(4.5)(4.5) cos 1.9（または AB = 2(4.5) sin 0.95）。",
        // EN: A1: AB ≈ 7.32 m.
        "A1：AB ≈ 7.32 m。",
        // EN: M1: Sector area (1/2)(4.5)²(1.9) ≈ 19.2375 m².
        "M1：扇形の面積 (1/2)(4.5)²(1.9) ≈ 19.2375 m²。",
        // EN: M1: Subtracts triangle OAB, (1/2)(4.5)² sin 1.9 ≈ 9.581 m².
        "M1：三角形 OAB の面積 (1/2)(4.5)² sin 1.9 ≈ 9.581 m² を引く。",
        // EN: A1: Segment area ≈ 9.66 m².
        "A1：弓形の面積 ≈ 9.66 m²。",
      ],
    },

    // ── t3-1-q035 · numeric · exam · SL · SL 3.4 · 2 marks
    "t3-1-q035": {
      // EN: <p>A sector of a circle has radius <span class="mono">9 cm</span> and central angle <span class="chem">(5pi)/6</span> radians. Find the exact length of its arc, in cm, as a multiple of <span class="chem">pi</span>.</p>
      stem: "<p>扇形の半径は <span class=\"mono\">9 cm</span>、中心角は <span class=\"chem\">(5pi)/6</span> ラジアンである。その弧の長さの正確な値を、<span class=\"chem\">pi</span> の倍数として cm で求めなさい (Find)。</p>",
      hints: [
        // EN: The angle is already in radians, so use <span class="chem">l = r theta</span>.
        "角はすでにラジアンなので、<span class=\"chem\">l = r theta</span> を使います。",
        // EN: Simplify <span class="chem">9 × (5pi)/6</span>.
        "<span class=\"chem\">9 × (5pi)/6</span> を簡単にします。",
      ],
      // EN: <div class="worked__math"><i>l</i> = 9 × <span class="frac"><span>5<i>π</i></span><span>6</span></span> = <span class="frac"><span>45<i>π</i></span><span>6</span></span> = <b><span class="frac"><span>15<i>π</i></span><span>2</span></span> cm</b></div>
      solution: "<div class=\"worked__math\"><i>l</i> = 9 × <span class=\"frac\"><span>5<i>π</i></span><span>6</span></span> = <span class=\"frac\"><span>45<i>π</i></span><span>6</span></span> = <b><span class=\"frac\"><span>15<i>π</i></span><span>2</span></span> cm</b></div>",
    },

    // ── t3-1-q036 · short · exam · SL · SL 3.2 · 5 marks
    "t3-1-q036": {
      // EN: <p>A triangle has sides of length <span class="mono">3 cm</span>, <span class="mono">5 cm</span> and <span class="mono">7 cm</span>.<br>(a) Show that the largest angle of the triangle is <span class="mono">120°</span> (degrees). <strong>[3 marks]</strong><br>(b) Hence find the exact area of the triangle. <strong>[2 marks]</strong></p>
      stem: "<p>三辺の長さが <span class=\"mono\">3 cm</span>、<span class=\"mono\">5 cm</span>、<span class=\"mono\">7 cm</span> の三角形がある。<br>(a) この三角形の最大の角が <span class=\"mono\">120°</span>（度）であることを示しなさい (Show that)。<strong>[3 marks]</strong><br>(b) これを用いて (Hence)、三角形の面積の正確な値を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: The largest angle is opposite the longest side.
        "最大の角は最も長い辺の対角です。",
        // EN: For (b), the angle between the sides 3 and 5 is the <span class="mono">120°</span> angle, and <span class="chem">sin 120° = sqrt(3)/2</span>.
        "(b) では、長さ 3 と 5 の辺のなす角が <span class=\"mono\">120°</span> の角で、<span class=\"chem\">sin 120° = sqrt(3)/2</span> です。",
      ],
      // EN: <div class="worked__math">(a) cos <i>θ</i> = <span class="frac"><span>9 + 25 − 49</span><span>30</span></span> = −<span class="frac"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 120°</div><div class="worked__math">(b) Area = <span class="frac"><span>1</span><span>2</span></span>(3)(5)<span class="frac"><span>√3</span><span>2</span></span> = <b><span class="frac"><span>15√3</span><span>4</span></span> cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">(a) cos <i>θ</i> = <span class=\"frac\"><span>9 + 25 − 49</span><span>30</span></span> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 120°</div><div class=\"worked__math\">(b) 面積 = <span class=\"frac\"><span>1</span><span>2</span></span>(3)(5)<span class=\"frac\"><span>√3</span><span>2</span></span> = <b><span class=\"frac\"><span>15√3</span><span>4</span></span> cm<sup>2</sup></b></div>",
      // EN: <p>(a) cos θ = (9 + 25 − 49)/30 = −1/2, so θ = 120°. (b) Area = (1/2)(3)(5) sin 120° = 15√3/4 cm².</p>
      answer: "<p>(a) cos θ = (9 + 25 − 49)/30 = −1/2 なので θ = 120°。(b) 面積 = (1/2)(3)(5) sin 120° = 15√3/4 cm²。</p>",
      markscheme: [
        // EN: R1: The largest angle is opposite the longest side, 7 cm.
        "R1：最大の角は最も長い辺 7 cm の対角である。",
        // EN: M1: Cosine rule: cos θ = (3² + 5² − 7²)/(2 × 3 × 5).
        "M1：余弦定理：cos θ = (3² + 5² − 7²)/(2 × 3 × 5)。",
        // EN: A1: cos θ = −15/30 = −1/2, so θ = 120°. AG: the largest angle is 120°; the given line itself earns no mark.
        "A1：cos θ = −15/30 = −1/2 なので θ = 120°。AG：最大の角は 120°。与えられた結論の行そのものには点を与えない。",
        // EN: M1: Area = (1/2)(3)(5) sin 120°, with sin 120° = √3/2.
        "M1：面積 = (1/2)(3)(5) sin 120°、sin 120° = √3/2。",
        // EN: A1: Area = 15√3/4 cm².
        "A1：面積 = 15√3/4 cm²。",
      ],
    },

    // ── t3-1-q037 · numeric · exam · SL · SL 3.3 · 4 marks
    "t3-1-q037": {
      // EN: <p>Points <span class="chem">A</span> and <span class="chem">B</span> lie on level ground in a straight line with the foot <span class="chem">F</span> of a vertical flagpole, on the same side of it, with <span class="chem">B</span> farther from <span class="chem">F</span> and <span class="chem">AB = 20 m</span>. The angles of elevation of the top of the flagpole from <span class="chem">A</span> and from <span class="chem">B</span> are <span class="mono">60°</span> and <span class="mono">30°</span> (degrees). Find the exact height of the flagpole in metres.</p>
      stem: "<p>点 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> は水平な地面上にあり、鉛直な旗ざおの根元 <span class=\"chem\">F</span> と一直線上で、旗ざおの同じ側にある。<span class=\"chem\">B</span> の方が <span class=\"chem\">F</span> から遠く、<span class=\"chem\">AB = 20 m</span> である。<span class=\"chem\">A</span> と <span class=\"chem\">B</span> から旗ざおの先端を見上げた仰角は、それぞれ <span class=\"mono\">60°</span> と <span class=\"mono\">30°</span>（度）である。旗ざおの高さの正確な値をメートルで求めなさい (Find)。</p>",
      hints: [
        // EN: Let the height be <span class="chem">h</span>. Write both ground distances in terms of <span class="chem">h</span>: <span class="chem">AF = h/tan 60°</span> and <span class="chem">BF = h/tan 30°</span>.
        "高さを <span class=\"chem\">h</span> とします。地面上の 二つの距離を <span class=\"chem\">h</span> で表します：<span class=\"chem\">AF = h/tan 60°</span>、<span class=\"chem\">BF = h/tan 30°</span>。",
        // EN: <span class="chem">BF - AF = 20</span>, i.e. <span class="chem">h sqrt(3) - h/sqrt(3) = 20</span>.
        "<span class=\"chem\">BF - AF = 20</span>、つまり <span class=\"chem\">h sqrt(3) - h/sqrt(3) = 20</span> です。",
      ],
      // EN: <div class="worked__math"><i>AF</i> = <i>h</i>/√3, &nbsp; <i>BF</i> = <i>h</i>√3 ⇒ <i>h</i>√3 − <i>h</i>/√3 = 20 ⇒ <span class="frac"><span>2<i>h</i></span><span>√3</span></span> = 20</div><div class="worked__math"><i>h</i> = <b>10√3 m</b> (≈ 17.3 m)</div>
      solution: "<div class=\"worked__math\"><i>AF</i> = <i>h</i>/√3, &nbsp; <i>BF</i> = <i>h</i>√3 ⇒ <i>h</i>√3 − <i>h</i>/√3 = 20 ⇒ <span class=\"frac\"><span>2<i>h</i></span><span>√3</span></span> = 20</div><div class=\"worked__math\"><i>h</i> = <b>10√3 m</b> (≈ 17.3 m)</div>",
    },

    // ── t3-1-q038 · short · exam · SL · SL 3.1 · 5 marks
    "t3-1-q038": {
      // EN: <p>The points <span class="chem">A(2, -1, k)</span> and <span class="chem">B(5, 3, 1)</span> are a distance <span class="chem">sqrt(34)</span> apart. (No angles are involved.)<br>(a) Find the two possible values of <span class="chem">k</span>. <strong>[3 marks]</strong><br>(b) For the positive value of <span class="chem">k</span>, find the midpoint of <span class="chem">AB</span>. <strong>[2 marks]</strong></p>
      stem: "<p>点 <span class=\"chem\">A(2, -1, k)</span> と <span class=\"chem\">B(5, 3, 1)</span> の距離は <span class=\"chem\">sqrt(34)</span> である。（角は関係しない。）<br>(a) <span class=\"chem\">k</span> として考えられる 二つの値を求めなさい (Find)。<strong>[3 marks]</strong><br>(b) <span class=\"chem\">k</span> が正の値のとき、<span class=\"chem\">AB</span> の中点を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Square both sides of the distance formula so that the square root disappears.
        "距離の公式の両辺を 二乗して、平方根をなくします。",
        // EN: Solve <span class="chem">(1 - k)^2 = 9</span>; take both square roots.
        "<span class=\"chem\">(1 - k)^2 = 9</span> を解きます。平方根は正と負の両方をとります。",
      ],
      // EN: <div class="worked__math">(a) 9 + 16 + (1 − <i>k</i>)<sup>2</sup> = 34 ⇒ 1 − <i>k</i> = ±3 ⇒ <i>k</i> = <b>−2 or 4</b></div><div class="worked__math">(b) <i>M</i> = (<span class="frac"><span>7</span><span>2</span></span>, 1, <span class="frac"><span>5</span><span>2</span></span>) = <b>(3.5, 1, 2.5)</b></div>
      solution: "<div class=\"worked__math\">(a) 9 + 16 + (1 − <i>k</i>)<sup>2</sup> = 34 ⇒ 1 − <i>k</i> = ±3 ⇒ <i>k</i> = <b>−2 または 4</b></div><div class=\"worked__math\">(b) <i>M</i> = (<span class=\"frac\"><span>7</span><span>2</span></span>, 1, <span class=\"frac\"><span>5</span><span>2</span></span>) = <b>(3.5, 1, 2.5)</b></div>",
      // EN: <p>(a) k = 4 or k = −2. (b) With k = 4, the midpoint is (3.5, 1, 2.5).</p>
      answer: "<p>(a) k = 4 または k = −2。(b) k = 4 のとき、中点は (3.5, 1, 2.5)。</p>",
      markscheme: [
        // EN: M1: Distance formula: (5 − 2)² + (3 − (−1))² + (1 − k)² = 34.
        "M1：距離の公式：(5 − 2)² + (3 − (−1))² + (1 − k)² = 34。",
        // EN: A1: 9 + 16 + (1 − k)² = 34 ⇒ (1 − k)² = 9.
        "A1：9 + 16 + (1 − k)² = 34 ⇒ (1 − k)² = 9。",
        // EN: A1: k = 4 or k = −2.
        "A1：k = 4 または k = −2。",
        // EN: M1: Midpoint ((2 + 5)/2, (−1 + 3)/2, (4 + 1)/2).
        "M1：中点 ((2 + 5)/2, (−1 + 3)/2, (4 + 1)/2)。",
        // EN: A1: (3.5, 1, 2.5).
        "A1：(3.5, 1, 2.5)。",
      ],
    },

    // ── t3-1-q039 · numeric · exam · SL · SL 3.1 · 4 marks
    "t3-1-q039": {
      // EN: <p>A right pyramid has a rectangular base measuring <span class="mono">6 cm</span> by <span class="mono">8 cm</span>. Each of its four sloping edges has length <span class="mono">13 cm</span>. Find the volume of the pyramid, in <span class="unit">cm3</span>. (No angles are involved.)</p>
      stem: "<p>直角錐の底面は <span class=\"mono\">6 cm</span> × <span class=\"mono\">8 cm</span> の長方形である。四本の斜めの辺の長さはどれも <span class=\"mono\">13 cm</span> である。この角錐の体積を <span class=\"unit\">cm3</span> で求めなさい (Find)。（角は関係しない。）</p>",
      hints: [
        // EN: The apex is above the centre of the rectangle, where the diagonals cross. Half a diagonal is <span class="chem">(1/2)sqrt(6^2 + 8^2) = 5</span>.
        "頂点は長方形の中心、つまり対角線の交点の真上にあります。対角線の半分は <span class=\"chem\">(1/2)sqrt(6^2 + 8^2) = 5</span> です。",
        // EN: A sloping edge, half a diagonal and the height form a right-angled triangle: <span class="chem">h = sqrt(13^2 - 5^2)</span>.
        "斜めの辺、対角線の半分、高さで直角三角形ができます：<span class=\"chem\">h = sqrt(13^2 - 5^2)</span>。",
      ],
      // EN: <div class="worked__math">Half-diagonal = 5 cm, &nbsp; <i>h</i> = √(169 − 25) = 12 cm</div><div class="worked__math"><i>V</i> = <span class="frac"><span>1</span><span>3</span></span>(6 × 8)(12) = <b>192 cm<sup>3</sup></b></div>
      solution: "<div class=\"worked__math\">対角線の半分 = 5 cm, &nbsp; <i>h</i> = √(169 − 25) = 12 cm</div><div class=\"worked__math\"><i>V</i> = <span class=\"frac\"><span>1</span><span>3</span></span>(6 × 8)(12) = <b>192 cm<sup>3</sup></b></div>",
    },

    // ── t3-1-q040 · short · exam · SL · SL 3.4 · 7 marks
    "t3-1-q040": {
      // EN: <p>A sector <span class="chem">OAB</span> of a circle with centre <span class="chem">O</span> has radius <span class="mono">6 cm</span> and <span class="chem">angle AOB = pi/3</span> <strong>radians</strong>.<br>(a) Find the exact length of the arc <span class="chem">AB</span>. <strong>[2 marks]</strong><br>(b) Find the exact area of the segment between the chord <span class="chem">AB</span> and the arc <span class="chem">AB</span>. <strong>[3 marks]</strong><br>(c) Find the exact perimeter of this segment. <strong>[2 marks]</strong></p>
      stem: "<p>中心 <span class=\"chem\">O</span> の円の扇形 <span class=\"chem\">OAB</span> は、半径 <span class=\"mono\">6 cm</span>、<span class=\"chem\">angle AOB = pi/3</span> <strong>ラジアン</strong>である。<br>(a) 弧 <span class=\"chem\">AB</span> の長さの正確な値を求めなさい (Find)。<strong>[2 marks]</strong><br>(b) 弦 <span class=\"chem\">AB</span> と弧 <span class=\"chem\">AB</span> の間の弓形の面積の正確な値を求めなさい。<strong>[3 marks]</strong><br>(c) この弓形の周の長さの正確な値を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: The angle is in radians: <span class="chem">l = r theta</span>, <span class="chem">A = (1/2)r^2 theta</span>.
        "角はラジアンです：<span class=\"chem\">l = r theta</span>、<span class=\"chem\">A = (1/2)r^2 theta</span>。",
        // EN: Segment = sector − triangle, with triangle area <span class="chem">(1/2)r^2 sin theta</span> and <span class="chem">sin(pi/3) = sqrt(3)/2</span>.
        "弓形 = 扇形 − 三角形。三角形の面積は <span class=\"chem\">(1/2)r^2 sin theta</span>、<span class=\"chem\">sin(pi/3) = sqrt(3)/2</span> です。",
        // EN: For (c), what kind of triangle has two sides of 6 cm and a <span class="mono">60°</span> angle between them?
        "(c) では、長さ 6 cm の 二辺のなす角が <span class=\"mono\">60°</span> の三角形はどんな三角形でしょうか？",
      ],
      // EN: <div class="worked__math">(a) <i>l</i> = 6(<i>π</i>/3) = <b>2<i>π</i> cm</b></div><div class="worked__math">(b) 6<i>π</i> − 18(√3/2) = <b>6<i>π</i> − 9√3 cm<sup>2</sup></b></div><div class="worked__math">(c) Equilateral triangle ⇒ <i>AB</i> = 6, perimeter = <b>2<i>π</i> + 6 cm</b></div>
      solution: "<div class=\"worked__math\">(a) <i>l</i> = 6(<i>π</i>/3) = <b>2<i>π</i> cm</b></div><div class=\"worked__math\">(b) 6<i>π</i> − 18(√3/2) = <b>6<i>π</i> − 9√3 cm<sup>2</sup></b></div><div class=\"worked__math\">(c) 正三角形 ⇒ <i>AB</i> = 6、周の長さ = <b>2<i>π</i> + 6 cm</b></div>",
      // EN: <p>(a) 2π cm; (b) (6π − 9√3) cm²; (c) (2π + 6) cm.</p>
      answer: "<p>(a) 2π cm；(b) (6π − 9√3) cm²；(c) (2π + 6) cm。</p>",
      markscheme: [
        // EN: M1: l = rθ = 6 × π/3.
        "M1：l = rθ = 6 × π/3。",
        // EN: A1: l = 2π cm.
        "A1：l = 2π cm。",
        // EN: M1: Sector area (1/2)(6²)(π/3) = 6π.
        "M1：扇形の面積 (1/2)(6²)(π/3) = 6π。",
        // EN: M1: Triangle area (1/2)(6²) sin(π/3) = 9√3.
        "M1：三角形の面積 (1/2)(6²) sin(π/3) = 9√3。",
        // EN: A1: Segment area = 6π − 9√3 cm².
        "A1：弓形の面積 = 6π − 9√3 cm²。",
        // EN: R1: Triangle OAB is isosceles with an angle of π/3 (60°), so it is equilateral and AB = 6 cm.
        "R1：三角形 OAB は角 π/3 (60°) をもつ二等辺三角形なので正三角形であり、AB = 6 cm。",
        // EN: A1: Perimeter = 2π + 6 cm.
        "A1：周の長さ = 2π + 6 cm。",
      ],
    },

    // ── t3-1-q041 · short · exam · SL · SL 3.1 · 9 marks
    "t3-1-q041": {
      // EN: <p>A right pyramid <span class="chem">VABCD</span> has a square base <span class="chem">ABCD</span> of side <span class="mono">8 cm</span>, and each sloping edge has length <span class="mono">11 cm</span>. <span class="chem">M</span> is the centre of the base and <span class="chem">N</span> is the midpoint of <span class="chem">AB</span>. Give angles in degrees and answers to 3 significant figures.<br>(a) Find the height <span class="chem">VM</span>. <strong>[3 marks]</strong><br>(b) Find the volume of the pyramid. <strong>[2 marks]</strong><br>(c) Find the angle between the edge <span class="chem">VA</span> and the base. <strong>[2 marks]</strong><br>(d) Find the angle between the line <span class="chem">VN</span> and the base. <strong>[2 marks]</strong></p>
      stem: "<p>直角錐 <span class=\"chem\">VABCD</span> は 一辺 <span class=\"mono\">8 cm</span> の正方形の底面 <span class=\"chem\">ABCD</span> をもち、斜めの辺の長さはどれも <span class=\"mono\">11 cm</span> である。<span class=\"chem\">M</span> は底面の中心、<span class=\"chem\">N</span> は <span class=\"chem\">AB</span> の中点である。角は度で、答えは有効数字 3 桁で答えなさい。<br>(a) 高さ <span class=\"chem\">VM</span> を求めなさい (Find)。<strong>[3 marks]</strong><br>(b) この角錐の体積を求めなさい。<strong>[2 marks]</strong><br>(c) 辺 <span class=\"chem\">VA</span> と底面のなす角を求めなさい。<strong>[2 marks]</strong><br>(d) 直線 <span class=\"chem\">VN</span> と底面のなす角を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: The apex is directly above the centre <span class="chem">M</span>. For a line from <span class="chem">V</span> to a point of the base, its projection on the base starts at <span class="chem">M</span>, so the angle with the base sits in a right-angled triangle containing the vertical <span class="chem">VM</span>.
        "頂点は中心 <span class=\"chem\">M</span> の真上にあります。<span class=\"chem\">V</span> から底面上の点へ引いた直線の底面への正射影は <span class=\"chem\">M</span> から始まるので、底面とのなす角は鉛直な <span class=\"chem\">VM</span> を含む直角三角形の中にあります。",
        // EN: <span class="chem">MA</span> is half a diagonal; <span class="chem">MN</span> is half a side.
        "<span class=\"chem\">MA</span> は対角線の半分、<span class=\"chem\">MN</span> は 一辺の半分です。",
      ],
      // EN: <div class="worked__math">(a) <i>MA</i> = 4√2, <i>VM</i> = √(121 − 32) = √89 ≈ <b>9.43 cm</b> &nbsp; (b) <i>V</i> = <span class="frac"><span>64√89</span><span>3</span></span> ≈ <b>201 cm<sup>3</sup></b></div><div class="worked__math">(c) cos ∠<i>VAM</i> = 4√2/11 ⇒ <b>59.1°</b> &nbsp; (d) tan ∠<i>VNM</i> = √89/4 ⇒ <b>67.0°</b></div>
      solution: "<div class=\"worked__math\">(a) <i>MA</i> = 4√2, <i>VM</i> = √(121 − 32) = √89 ≈ <b>9.43 cm</b> &nbsp; (b) <i>V</i> = <span class=\"frac\"><span>64√89</span><span>3</span></span> ≈ <b>201 cm<sup>3</sup></b></div><div class=\"worked__math\">(c) cos ∠<i>VAM</i> = 4√2/11 ⇒ <b>59.1°</b> &nbsp; (d) tan ∠<i>VNM</i> = √89/4 ⇒ <b>67.0°</b></div>",
      // EN: <p>(a) VM = √89 ≈ 9.43 cm; (b) 201 cm³; (c) 59.1°; (d) 67.0°.</p>
      answer: "<p>(a) VM = √89 ≈ 9.43 cm；(b) 201 cm³；(c) 59.1°；(d) 67.0°。</p>",
      markscheme: [
        // EN: M1: MA is half the diagonal of the base: AC = √(8² + 8²) = 8√2, so MA = 4√2.
        "M1：MA は底面の対角線の半分：AC = √(8² + 8²) = 8√2 なので MA = 4√2。",
        // EN: M1: Pythagoras in triangle VMA: VM² = 11² − (4√2)² = 121 − 32.
        "M1：三角形 VMA で三平方の定理：VM² = 11² − (4√2)² = 121 − 32。",
        // EN: A1: VM = √89 ≈ 9.43 cm.
        "A1：VM = √89 ≈ 9.43 cm。",
        // EN: M1: V = (1/3)(8²)(√89).
        "M1：V = (1/3)(8²)(√89)。",
        // EN: A1: V ≈ 201 cm³.
        "A1：V ≈ 201 cm³。",
        // EN: M1: The projection of VA on the base is MA, so cos(∠VAM) = 4√2/11 (or tan = √89/(4√2)).
        "M1：VA の底面への正射影は MA なので cos(∠VAM) = 4√2/11（または tan = √89/(4√2)）。",
        // EN: A1: ∠VAM ≈ 59.1°.
        "A1：∠VAM ≈ 59.1°。",
        // EN: M1: The projection of VN on the base is MN = 4 cm, so tan(∠VNM) = √89/4.
        "M1：VN の底面への正射影は MN = 4 cm なので tan(∠VNM) = √89/4。",
        // EN: A1: ∠VNM ≈ 67.0°.
        "A1：∠VNM ≈ 67.0°。",
      ],
    },

    // ── t3-1-q042 · numeric · exam · SL · SL 3.3 · 4 marks
    "t3-1-q042": {
      // EN: <p>From the top of a vertical cliff <span class="mono">85 m</span> above sea level, an observer sees two boats due West of the cliff, in a straight line with its foot. The angles of depression of the boats are <span class="mono">32°</span> and <span class="mono">18°</span> (degrees). Find the distance between the two boats, in metres to 3 significant figures.</p>
      stem: "<p>海面からの高さ <span class=\"mono\">85 m</span> の鉛直な崖の上から、観測者が崖の真西に、崖の根元と一直線上に並ぶ 二隻のボートを見ている。ボートを見下ろす俯角は <span class=\"mono\">32°</span> と <span class=\"mono\">18°</span>（度）である。二隻のボートの間の距離をメートルで求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the angle of depression from the cliff top equals the angle of elevation from the boat (alternate angles). The smaller angle belongs to the farther boat.
        "解読：崖の上からの俯角は、ボートからの仰角に等しくなります（錯角）。小さい方の角は遠い方のボートのものです。",
        // EN: Each boat is at a horizontal distance <span class="chem">85/tan(angle)</span> from the foot of the cliff.
        "各ボートは崖の根元から水平距離 <span class=\"chem\">85/tan(angle)</span> の位置にあります。",
        // EN: Distance between the boats <span class="chem">= 85/tan 18° - 85/tan 32°</span>.
        "ボートの間の距離 <span class=\"chem\">= 85/tan 18° - 85/tan 32°</span> です。",
      ],
      // EN: <div class="worked__math">Far boat: 85/tan 18° ≈ 261.60 m; &nbsp; near boat: 85/tan 32° ≈ 136.03 m</div><div class="worked__math">Distance ≈ 261.60 − 136.03 ≈ <b>126 m</b></div>
      solution: "<div class=\"worked__math\">遠い方のボート：85/tan 18° ≈ 261.60 m； &nbsp; 近い方のボート：85/tan 32° ≈ 136.03 m</div><div class=\"worked__math\">距離 ≈ 261.60 − 136.03 ≈ <b>126 m</b></div>",
    },

    // ── t3-1-q043 · numeric · exam · SL · SL 3.2 · 3 marks
    "t3-1-q043": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 45°</span>, <span class="chem">angle ABC = 60°</span> (degrees) and <span class="chem">BC = 6 cm</span>. Find the exact length of <span class="chem">AC</span>, in cm, in the form <span class="chem">p sqrt(q)</span>.</p>
      stem: "<p>三角形 <span class=\"chem\">ABC</span> において、<span class=\"chem\">angle BAC = 45°</span>、<span class=\"chem\">angle ABC = 60°</span>（度）、<span class=\"chem\">BC = 6 cm</span> である。<span class=\"chem\">AC</span> の長さの正確な値を、<span class=\"chem\">p sqrt(q)</span> の形で cm で求めなさい (Find)。</p>",
      hints: [
        // EN: Sine rule: <span class="chem">AC/(sin 60°) = 6/(sin 45°)</span>.
        "正弦定理：<span class=\"chem\">AC/(sin 60°) = 6/(sin 45°)</span>。",
        // EN: Use <span class="chem">sin 60° = sqrt(3)/2</span> and <span class="chem">sin 45° = sqrt(2)/2</span>, then rationalise.
        "<span class=\"chem\">sin 60° = sqrt(3)/2</span> と <span class=\"chem\">sin 45° = sqrt(2)/2</span> を使い、分母を有理化します。",
      ],
      // EN: <div class="worked__math"><i>AC</i> = <span class="frac"><span>6(√3/2)</span><span>√2/2</span></span> = <span class="frac"><span>6√3</span><span>√2</span></span> = <span class="frac"><span>6√6</span><span>2</span></span> = <b>3√6 cm</b></div>
      solution: "<div class=\"worked__math\"><i>AC</i> = <span class=\"frac\"><span>6(√3/2)</span><span>√2/2</span></span> = <span class=\"frac\"><span>6√3</span><span>√2</span></span> = <span class=\"frac\"><span>6√6</span><span>2</span></span> = <b>3√6 cm</b></div>",
    },

    // ── t3-1-q044 · numeric · exam · SL · SL 3.5 · 4 marks
    "t3-1-q044": {
      // EN: <p>In triangle <span class="chem">ABC</span>, <span class="chem">angle BAC = 30°</span> (degrees), <span class="chem">BC = 5 cm</span> and <span class="chem">AC = 5sqrt(2) cm</span>. Given that <span class="chem">angle ABC</span> is <strong>obtuse</strong>, find the size of <span class="chem">angle ACB</span> in degrees.</p>
      stem: "<p>三角形 <span class=\"chem\">ABC</span> において、<span class=\"chem\">angle BAC = 30°</span>（度）、<span class=\"chem\">BC = 5 cm</span>、<span class=\"chem\">AC = 5sqrt(2) cm</span> である。<span class=\"chem\">angle ABC</span> が<strong>鈍角</strong>であるとき、<span class=\"chem\">angle ACB</span> の大きさを度で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: SSA information with a condition ("obtuse") that picks one of the two triangles. Find <span class="chem">angle ABC</span> with the sine rule, then use the angle sum.
        "解読：SSA の情報に、二つの三角形のうち 一つを選ぶ条件（「鈍角」）がついています。正弦定理で <span class=\"chem\">angle ABC</span> を求め、内角の和を使います。",
        // EN: <span class="chem">sin B = (5sqrt(2) sin 30°)/5 = sqrt(2)/2</span>, so <span class="chem">B = 45°</span> or <span class="chem">135°</span>.
        "<span class=\"chem\">sin B = (5sqrt(2) sin 30°)/5 = sqrt(2)/2</span> なので、<span class=\"chem\">B = 45°</span> または <span class=\"chem\">135°</span> です。",
      ],
      // EN: <p><b>Decode.</b> "Obtuse" selects the second solution of the sine equation.</p><div class="worked__math">sin <i>B</i> = <span class="frac"><span>5√2 × <sup>1</sup>/<sub>2</sub></span><span>5</span></span> = <span class="frac"><span>√2</span><span>2</span></span> ⇒ <i>B</i> = 135° (obtuse)</div><div class="worked__math">∠<i>ACB</i> = 180° − 30° − 135° = <b>15°</b></div>
      solution: "<p><b>解読：</b>「鈍角」という条件で、正弦の方程式の 二つ目の解が選ばれます。</p><div class=\"worked__math\">sin <i>B</i> = <span class=\"frac\"><span>5√2 × <sup>1</sup>/<sub>2</sub></span><span>5</span></span> = <span class=\"frac\"><span>√2</span><span>2</span></span> ⇒ <i>B</i> = 135°（鈍角）</div><div class=\"worked__math\">∠<i>ACB</i> = 180° − 30° − 135° = <b>15°</b></div>",
    },

    // ── t3-1-q045 · numeric · challenge · SL · SL 3.2, 3.3 · 6 marks
    "t3-1-q045": {
      // EN: <p>A lighthouse <span class="chem">L</span> is <span class="mono">12 km</span> from a port <span class="chem">P</span> on a bearing of <span class="mono">050°</span>. A ship leaves <span class="chem">P</span> and sails in a straight line on a bearing of <span class="mono">080°</span> at a constant <span class="mono">15 km h⁻¹</span>. The lighthouse beam can be seen from the ship whenever the ship is within <span class="mono">9 km</span> of <span class="chem">L</span>. For how many <strong>minutes</strong> can the beam be seen? Angles are in degrees; give your answer to 3 significant figures.</p>
      stem: "<p>灯台 <span class=\"chem\">L</span> は港 <span class=\"chem\">P</span> から方位角 <span class=\"mono\">050°</span> の方向に <span class=\"mono\">12 km</span> の位置にある。船が <span class=\"chem\">P</span> を出て、方位角 <span class=\"mono\">080°</span> の方向に一定の速さ <span class=\"mono\">15 km h⁻¹</span> で真っすぐ進む。船が <span class=\"chem\">L</span> から <span class=\"mono\">9 km</span> 以内にあるときはいつでも、灯台の光が船から見える。光が見えるのは何<strong>分</strong>間ですか。角は度で、答えは有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: you need the length of the part of the ship’s path that lies within 9 km of <span class="chem">L</span>, then convert distance to time. The path enters and leaves the 9 km circle at two points: a cosine-rule quadratic (like the ambiguous case).
        "解読：船の航路のうち <span class=\"chem\">L</span> から 9 km 以内にある部分の長さを求め、距離を時間に換算します。航路は 9 km の円に 二点で入って出ます：余弦定理による 二次方程式です（三角形が 二通りある場合と同じです）。",
        // EN: The angle at <span class="chem">P</span> between <span class="chem">PL</span> and the path is <span class="chem">80° - 50° = 30°</span>. If the ship is <span class="chem">x</span> km from <span class="chem">P</span> and 9 km from <span class="chem">L</span>: <span class="chem">9^2 = 12^2 + x^2 - 2(12)x cos 30°</span>.
        "<span class=\"chem\">P</span> における <span class=\"chem\">PL</span> と航路のなす角は <span class=\"chem\">80° - 50° = 30°</span> です。船が <span class=\"chem\">P</span> から <span class=\"chem\">x</span> km、<span class=\"chem\">L</span> から 9 km の位置にあるとき：<span class=\"chem\">9^2 = 12^2 + x^2 - 2(12)x cos 30°</span>。",
        // EN: Solve <span class="chem">x^2 - (24 cos 30°)x + 63 = 0</span>. The difference of the two roots is the distance travelled within range; divide by 15 and convert hours to minutes.
        "<span class=\"chem\">x^2 - (24 cos 30°)x + 63 = 0</span> を解きます。二つの解の差が光の届く範囲内で進んだ距離です。15 で割り、時間を分に換算します。",
      ],
      // EN: <p><b>Decode.</b> "Within 9 km" happens between the two points where the distance to L equals 9 km; find both with the cosine rule.</p><div class="worked__math"><i>x</i><sup>2</sup> − 20.785<i>x</i> + 63 = 0 ⇒ <i>x</i> ≈ 3.684 or 17.101 km</div><div class="worked__math">Distance in range ≈ 13.416 km (= √180) ⇒ time = 13.416/15 h ≈ 0.89443 h ≈ <b>53.7 minutes</b></div>
      solution: "<p><b>解読：</b>「9 km 以内」になるのは、L までの距離がちょうど 9 km になる 二点の間です。余弦定理で両方を求めます。</p><div class=\"worked__math\"><i>x</i><sup>2</sup> − 20.785<i>x</i> + 63 = 0 ⇒ <i>x</i> ≈ 3.684 または 17.101 km</div><div class=\"worked__math\">範囲内の距離 ≈ 13.416 km (= √180) ⇒ 時間 = 13.416/15 h ≈ 0.89443 h ≈ <b>53.7 分</b></div>",
    },

    // ── t3-1-q046 · numeric · challenge · SL · SL 3.5 · 5 marks
    "t3-1-q046": {
      // EN: <p>A straight fence starts at a post <span class="chem">A</span> and runs across a flat field. A goat is tied to a stake <span class="chem">T</span> with a rope of length <span class="mono">6 m</span>. The stake is <span class="mono">9 m</span> from <span class="chem">A</span>, and the line <span class="chem">AT</span> makes an angle of <span class="mono">28°</span> (degrees) with the fence. When the rope is pulled tight, the goat can just reach the fence at exactly two points. How far apart are these two points, in metres to 3 significant figures?</p>
      stem: "<p>真っすぐな柵が杭 <span class=\"chem\">A</span> から平らな野原を横切って延びている。ヤギが長さ <span class=\"mono\">6 m</span> のロープで杭 <span class=\"chem\">T</span> につながれている。その杭は <span class=\"chem\">A</span> から <span class=\"mono\">9 m</span> の位置にあり、直線 <span class=\"chem\">AT</span> は柵と <span class=\"mono\">28°</span>（度）の角をなす。ロープをぴんと張ると、ヤギはちょうど 二点で柵に届く。この 二点は何メートル離れていますか。有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: each point <span class="chem">X</span> on the fence with <span class="chem">TX = 6</span> gives a triangle <span class="chem">ATX</span> with <span class="chem">AT = 9</span>, <span class="chem">TX = 6</span> and <span class="chem">angle TAX = 28°</span>: two sides and a non-included angle, the ambiguous case. You want the difference of the two possible lengths <span class="chem">AX</span>.
        "解読：柵上の点 <span class=\"chem\">X</span> で <span class=\"chem\">TX = 6</span> となるものは、<span class=\"chem\">AT = 9</span>、<span class=\"chem\">TX = 6</span>、<span class=\"chem\">angle TAX = 28°</span> の三角形 <span class=\"chem\">ATX</span> を作ります。二辺とその間にない角なので、三角形が 二通りある場合です。求めるのは 二つの長さ <span class=\"chem\">AX</span> の差です。",
        // EN: Cosine rule in triangle <span class="chem">ATX</span> with <span class="chem">AX = x</span>: <span class="chem">36 = 81 + x^2 - 18x cos 28°</span>.
        "<span class=\"chem\">AX = x</span> として三角形 <span class=\"chem\">ATX</span> で余弦定理：<span class=\"chem\">36 = 81 + x^2 - 18x cos 28°</span>。",
        // EN: Solve the quadratic and subtract the roots (or use the perpendicular from <span class="chem">T</span> to the fence, of length <span class="chem">9 sin 28°</span>).
        "二次方程式を解いて解の差をとります（または <span class=\"chem\">T</span> から柵への長さ <span class=\"chem\">9 sin 28°</span> の垂線を使います）。",
      ],
      // EN: <p><b>Decode.</b> Two triangles from SSA data: the two positions of the rope form an isosceles triangle, and the required length is <i>x</i><sub>1</sub> − <i>x</i><sub>2</sub>.</p><div class="worked__math"><i>x</i><sup>2</sup> − 15.893<i>x</i> + 45 = 0 ⇒ <i>x</i> ≈ 3.687 or 12.206 m</div><div class="worked__math">Distance apart ≈ 12.206 − 3.687 ≈ <b>8.52 m</b> (= 2√(36 − (9 sin 28°)<sup>2</sup>))</div>
      solution: "<p><b>解読：</b>SSA のデータから 二つの三角形ができます。ロープの 二つの位置は二等辺三角形を作り、求める長さは <i>x</i><sub>1</sub> − <i>x</i><sub>2</sub> です。</p><div class=\"worked__math\"><i>x</i><sup>2</sup> − 15.893<i>x</i> + 45 = 0 ⇒ <i>x</i> ≈ 3.687 または 12.206 m</div><div class=\"worked__math\">二点間の距離 ≈ 12.206 − 3.687 ≈ <b>8.52 m</b> (= 2√(36 − (9 sin 28°)<sup>2</sup>))</div>",
    },

    // ── t3-1-q047 · numeric · challenge · SL · SL 3.4 · 6 marks
    "t3-1-q047": {
      // EN: <p>A circular pond has radius <span class="mono">5 m</span>. A straight footbridge is built across it, and the smaller of the two pieces of the pond cut off by the bridge has exactly <strong>one quarter</strong> of the area of the whole pond. Find the shortest distance from the centre of the pond to the footbridge, in metres to 3 significant figures. Work in radians.</p>
      stem: "<p>円形の池の半径は <span class=\"mono\">5 m</span> である。池を横切って真っすぐな歩道橋がかけられ、橋によって分けられた池の 二つの部分のうち小さい方の面積は、池全体の面積のちょうど<strong>四分の一</strong>である。池の中心から歩道橋までの最短距離をメートルで求め (Find)、有効数字 3 桁で答えなさい。ラジアンで計算すること。</p>",
      hints: [
        // EN: Decode: the smaller piece is a circular segment. Its area depends on the angle <span class="chem">theta</span> (radians) that the bridge subtends at the centre. Set the segment area equal to a quarter of the circle and solve for <span class="chem">theta</span>; then find the perpendicular distance.
        "解読：小さい方の部分は弓形です。その面積は、橋が中心に対して張る角 <span class=\"chem\">theta</span>（ラジアン）で決まります。弓形の面積を円の 四分の一 に等しいとおいて <span class=\"chem\">theta</span> を解き、次に垂直距離を求めます。",
        // EN: <span class="chem">(1/2)(5^2)(theta - sin theta) = (1/4)pi(5^2)</span> simplifies to <span class="chem">theta - sin theta = pi/2</span>. This cannot be solved by algebra: use your GDC (graph or solver) in radians.
        "<span class=\"chem\">(1/2)(5^2)(theta - sin theta) = (1/4)pi(5^2)</span> を簡単にすると <span class=\"chem\">theta - sin theta = pi/2</span> になります。これは式変形では解けないので、GDC（グラフまたはソルバー）をラジアンモードで使います。",
        // EN: The perpendicular from the centre bisects the angle, so the distance is <span class="chem">5 cos(theta/2)</span>.
        "中心からの垂線は角を 二等分するので、距離は <span class=\"chem\">5 cos(theta/2)</span> です。",
      ],
      // EN: <p><b>Decode.</b> Segment area = quarter of the circle gives an equation in <i>θ</i>, solved numerically.</p><div class="worked__math"><i>θ</i> − sin <i>θ</i> = <i>π</i>/2 ⇒ <i>θ</i> ≈ 2.3099 rad (GDC)</div><div class="worked__math">Distance = 5 cos(1.15494) ≈ <b>2.02 m</b></div>
      solution: "<p><b>解読：</b>弓形の面積 = 円の 四分の一 から <i>θ</i> の方程式ができ、数値的に解きます。</p><div class=\"worked__math\"><i>θ</i> − sin <i>θ</i> = <i>π</i>/2 ⇒ <i>θ</i> ≈ 2.3099 rad (GDC)</div><div class=\"worked__math\">距離 = 5 cos(1.15494) ≈ <b>2.02 m</b></div>",
    },

    // ── t3-1-q048 · numeric · challenge · SL · SL 3.4 · 7 marks
    "t3-1-q048": {
      // EN: <p>A tight drive belt passes around two pulley wheels of radii <span class="mono">10 cm</span> and <span class="mono">4 cm</span> whose centres are <span class="mono">15 cm</span> apart. The belt does not cross itself: it consists of two straight pieces, each a common tangent to both wheels, and two arcs, one on each wheel. Find the total length of the belt, in cm to 3 significant figures. Work in radians.</p>
      stem: "<p>ぴんと張った駆動ベルトが、半径 <span class=\"mono\">10 cm</span> と <span class=\"mono\">4 cm</span> の二つの滑車にかかっていて、滑車の中心間の距離は <span class=\"mono\">15 cm</span> である。ベルトは交差しておらず、二つの滑車の共通接線である二本の直線部分と、各滑車上に一つずつある二つの弧からなる。ベルトの全長を cm で求め (Find)、有効数字 3 桁で答えなさい。ラジアンで計算すること。</p>",
      hints: [
        // EN: Decode: total length = 2 straight tangent pieces + arc on the large wheel + arc on the small wheel. Each piece needs right-angled trigonometry; the arcs need angles in radians and <span class="chem">l = r theta</span>.
        "解読：全長 = 接線の直線部分 2 本 + 大きい滑車上の弧 + 小さい滑車上の弧。各部分には直角三角形の三角比が必要で、弧にはラジアンの角と <span class=\"chem\">l = r theta</span> が必要です。",
        // EN: Join the centres (15 cm). Draw a line from the small centre parallel to a straight piece: it makes a right-angled triangle with hypotenuse 15 and one side <span class="chem">10 - 4 = 6</span>. So each straight piece is <span class="chem">sqrt(15^2 - 6^2)</span>, and <span class="chem">alpha = arcsin(6/15)</span>.
        "中心どうしを結びます (15 cm)。小さい滑車の中心から直線部分に平行な線を引くと、斜辺 15、一辺 <span class=\"chem\">10 - 4 = 6</span> の直角三角形ができます。よって各直線部分は <span class=\"chem\">sqrt(15^2 - 6^2)</span> で、<span class=\"chem\">alpha = arcsin(6/15)</span> です。",
        // EN: The belt wraps an angle <span class="chem">pi + 2alpha</span> around the large wheel and <span class="chem">pi - 2alpha</span> around the small wheel.
        "ベルトは大きい滑車に角 <span class=\"chem\">pi + 2alpha</span>、小さい滑車に角 <span class=\"chem\">pi - 2alpha</span> だけ巻きついています。",
      ],
      // EN: <p><b>Decode.</b> Split the belt into tangents and arcs; the radius difference gives a right-angled triangle.</p><div class="worked__math">Straight pieces: 2√(225 − 36) = 2√189 ≈ 27.495 cm; &nbsp; <i>α</i> = arcsin 0.4 ≈ 0.41152 rad</div><div class="worked__math">Arcs: 10(<i>π</i> + 2<i>α</i>) + 4(<i>π</i> − 2<i>α</i>) = 14<i>π</i> + 12<i>α</i> ≈ 43.982 + 4.938 = 48.920 cm</div><div class="worked__math">Total ≈ 27.495 + 48.920 ≈ <b>76.4 cm</b></div>
      solution: "<p><b>解読：</b>ベルトを接線と弧に分けます。半径の差から直角三角形ができます。</p><div class=\"worked__math\">直線部分：2√(225 − 36) = 2√189 ≈ 27.495 cm； &nbsp; <i>α</i> = arcsin 0.4 ≈ 0.41152 rad</div><div class=\"worked__math\">弧：10(<i>π</i> + 2<i>α</i>) + 4(<i>π</i> − 2<i>α</i>) = 14<i>π</i> + 12<i>α</i> ≈ 43.982 + 4.938 = 48.920 cm</div><div class=\"worked__math\">全長 ≈ 27.495 + 48.920 ≈ <b>76.4 cm</b></div>",
    },

    // ── t3-1-q049 · numeric · challenge · SL · SL 3.1, 3.2 · 6 marks
    "t3-1-q049": {
      // EN: <p>A storage box is a cuboid <span class="chem">ABCDEFGH</span> with base <span class="chem">ABCD</span>, where <span class="chem">AB = 50 cm</span>, <span class="chem">BC = 30 cm</span>, and height <span class="mono">20 cm</span>; <span class="chem">E</span>, <span class="chem">F</span>, <span class="chem">G</span>, <span class="chem">H</span> are vertically above <span class="chem">A</span>, <span class="chem">B</span>, <span class="chem">C</span>, <span class="chem">D</span>. Two straight wires are fixed inside the box, one from <span class="chem">A</span> to <span class="chem">G</span> and one from <span class="chem">B</span> to <span class="chem">H</span>. They cross at the centre of the box. Find the <strong>acute</strong> angle between the wires, in degrees to 3 significant figures.</p>
      stem: "<p>収納箱は直方体 <span class=\"chem\">ABCDEFGH</span> で、底面 <span class=\"chem\">ABCD</span> は <span class=\"chem\">AB = 50 cm</span>、<span class=\"chem\">BC = 30 cm</span>、高さは <span class=\"mono\">20 cm</span> である。<span class=\"chem\">E</span>、<span class=\"chem\">F</span>、<span class=\"chem\">G</span>、<span class=\"chem\">H</span> はそれぞれ <span class=\"chem\">A</span>、<span class=\"chem\">B</span>、<span class=\"chem\">C</span>、<span class=\"chem\">D</span> の真上にある。箱の中に、<span class=\"chem\">A</span> から <span class=\"chem\">G</span> へ、<span class=\"chem\">B</span> から <span class=\"chem\">H</span> へと二本の真っすぐなワイヤーが固定されている。二本は箱の中心で交わる。ワイヤーのなす<strong>鋭角</strong>を度で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the angle between two intersecting lines in a solid. The space diagonals bisect each other at the centre <span class="chem">O</span>, so triangle <span class="chem">OAB</span> is isosceles with known sides. Watch for the word "acute".
        "解読：立体の中で交わる二直線のなす角です。空間対角線は中心 <span class=\"chem\">O</span> で互いに二等分するので、三角形 <span class=\"chem\">OAB</span> は辺の長さがわかる二等辺三角形です。「鋭角」という語に注意しましょう。",
        // EN: Each half-diagonal is <span class="chem">OA = OB = (1/2)sqrt(50^2 + 30^2 + 20^2)</span>, and the third side is the edge <span class="chem">AB = 50</span>.
        "対角線の半分はそれぞれ <span class=\"chem\">OA = OB = (1/2)sqrt(50^2 + 30^2 + 20^2)</span> で、第三の辺は辺 <span class=\"chem\">AB = 50</span> です。",
        // EN: The cosine rule gives <span class="chem">angle AOB</span>, which is obtuse here. The acute angle between the lines is <span class="chem">180° - angle AOB</span>.
        "余弦定理から <span class=\"chem\">angle AOB</span> が求まりますが、ここでは鈍角です。二直線のなす鋭角は <span class=\"chem\">180° - angle AOB</span> です。",
      ],
      // EN: <p><b>Decode.</b> Two space diagonals meet at the centre; use triangle OAB and then take the acute angle.</p><div class="worked__math"><i>OA</i><sup>2</sup> = <span class="frac"><span>3800</span><span>4</span></span> = 950 ⇒ cos ∠<i>AOB</i> = <span class="frac"><span>950 + 950 − 2500</span><span>2(950)</span></span> = −<span class="frac"><span>6</span><span>19</span></span> ⇒ ∠<i>AOB</i> ≈ 108.41°</div><div class="worked__math">Acute angle ≈ 180° − 108.41° ≈ <b>71.6°</b></div>
      solution: "<p><b>解読：</b>二本の空間対角線が中心で交わります。三角形 OAB を使い、最後に鋭角をとります。</p><div class=\"worked__math\"><i>OA</i><sup>2</sup> = <span class=\"frac\"><span>3800</span><span>4</span></span> = 950 ⇒ cos ∠<i>AOB</i> = <span class=\"frac\"><span>950 + 950 − 2500</span><span>2(950)</span></span> = −<span class=\"frac\"><span>6</span><span>19</span></span> ⇒ ∠<i>AOB</i> ≈ 108.41°</div><div class=\"worked__math\">鋭角 ≈ 180° − 108.41° ≈ <b>71.6°</b></div>",
    },

    // ── t3-1-q050 · numeric · challenge · SL · SL 3.1 · 5 marks
    "t3-1-q050": {
      // EN: <p>A solid metal hemisphere of radius <span class="mono">6 cm</span> is melted down, and the metal is used to cast solid right circular cones, each with base radius <span class="mono">2 cm</span> and height <span class="mono">5 cm</span>. No metal is lost. What is the greatest number of <strong>complete</strong> cones that can be cast? (No angles are involved.)</p>
      stem: "<p>半径 <span class=\"mono\">6 cm</span> の中身の詰まった金属の半球を溶かし、その金属で底面の半径 <span class=\"mono\">2 cm</span>、高さ <span class=\"mono\">5 cm</span> の中身の詰まった直円錐を鋳造する。金属は失われない。鋳造できる<strong>完全な</strong>円錐は最大で何個ですか。（角は関係しない。）</p>",
      hints: [
        // EN: Decode: "melted and recast" means the volume is conserved. Divide the total volume by the volume of one cone; "complete" cones means you must round <strong>down</strong> to a whole number.
        "解読：「溶かして作り直す」とは体積が保存されるということです。全体の体積を円錐一個の体積で割ります。「完全な」円錐なので、整数に<strong>切り捨て</strong>なければなりません。",
        // EN: Hemisphere: <span class="chem">(2/3)pi(6^3) = 144pi</span>. One cone: <span class="chem">(1/3)pi(2^2)(5) = (20pi)/3</span>.
        "半球：<span class=\"chem\">(2/3)pi(6^3) = 144pi</span>。円錐一個：<span class=\"chem\">(1/3)pi(2^2)(5) = (20pi)/3</span>。",
        // EN: <span class="chem">144pi ÷ (20pi)/3 = 432/20</span>. Is this a whole number?
        "<span class=\"chem\">144pi ÷ (20pi)/3 = 432/20</span>。これは整数でしょうか？",
      ],
      // EN: <p><b>Decode.</b> Volume is conserved; the hidden condition is that only whole cones count.</p><div class="worked__math">144<i>π</i> ÷ <span class="frac"><span>20<i>π</i></span><span>3</span></span> = <span class="frac"><span>432</span><span>20</span></span> = 21.6 ⇒ <b>21 complete cones</b></div>
      solution: "<p><b>解読：</b>体積は保存されます。隠れた条件は、完全な円錐だけを数えるということです。</p><div class=\"worked__math\">144<i>π</i> ÷ <span class=\"frac\"><span>20<i>π</i></span><span>3</span></span> = <span class=\"frac\"><span>432</span><span>20</span></span> = 21.6 ⇒ <b>完全な円錐 21 個</b></div>",
    },

    // ── t3-1-q051 · numeric · challenge · SL · SL 3.2, 3.3 · 7 marks
    "t3-1-q051": {
      // EN: <p>Two surveyors stand at points <span class="chem">A</span> and <span class="chem">B</span> on horizontal ground, with <span class="chem">B</span> <span class="mono">200 m</span> due East of <span class="chem">A</span>. The foot <span class="chem">F</span> of a vertical radio mast is on a bearing of <span class="mono">030°</span> from <span class="chem">A</span> and on a bearing of <span class="mono">320°</span> from <span class="chem">B</span>. The angle of elevation of the top of the mast from <span class="chem">A</span> is <span class="mono">25°</span>. Find the angle of elevation of the top of the mast from <span class="chem">B</span>. All angles are in degrees; give your answer to 3 significant figures.</p>
      stem: "<p>二人の測量士が水平な地面上の点 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> に立っていて、<span class=\"chem\">B</span> は <span class=\"chem\">A</span> の真東 <span class=\"mono\">200 m</span> の位置にある。鉛直な無線塔の根元 <span class=\"chem\">F</span> は、<span class=\"chem\">A</span> から方位角 <span class=\"mono\">030°</span>、<span class=\"chem\">B</span> から方位角 <span class=\"mono\">320°</span> の方向にある。<span class=\"chem\">A</span> から塔の頂上を見上げた仰角は <span class=\"mono\">25°</span> である。<span class=\"chem\">B</span> から塔の頂上を見上げた仰角を求めなさい (Find)。角はすべて度で、答えは有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: two separate triangles. First the horizontal triangle <span class="chem">ABF</span> (built from the bearings) gives the ground distances <span class="chem">AF</span> and <span class="chem">BF</span>; then two vertical right-angled triangles link those distances to the height.
        "解読：別々の三角形が二つあります。まず（方位角から作る）水平な三角形 <span class=\"chem\">ABF</span> で地面上の距離 <span class=\"chem\">AF</span> と <span class=\"chem\">BF</span> を求め、次に二つの鉛直な直角三角形でそれらの距離と高さを結びつけます。",
        // EN: In triangle <span class="chem">ABF</span>: <span class="chem">angle FAB = 90° - 30° = 60°</span> and <span class="chem">angle FBA = 320° - 270° = 50°</span>, so <span class="chem">angle AFB = 70°</span>. Use the sine rule for <span class="chem">AF</span> and <span class="chem">BF</span>.
        "三角形 <span class=\"chem\">ABF</span> において、<span class=\"chem\">angle FAB = 90° - 30° = 60°</span>、<span class=\"chem\">angle FBA = 320° - 270° = 50°</span> なので、<span class=\"chem\">angle AFB = 70°</span> です。正弦定理で <span class=\"chem\">AF</span> と <span class=\"chem\">BF</span> を求めます。",
        // EN: Height <span class="chem">h = AF tan 25°</span>; the elevation from <span class="chem">B</span> is <span class="chem">arctan(h / BF)</span>.
        "高さ <span class=\"chem\">h = AF tan 25°</span>。<span class=\"chem\">B</span> からの仰角は <span class=\"chem\">arctan(h / BF)</span> です。",
      ],
      // EN: <p><b>Decode.</b> Bearings → ground triangle → sine rule; elevations → vertical right-angled triangles.</p><div class="worked__math"><i>AF</i> = <span class="frac"><span>200 sin 50°</span><span>sin 70°</span></span> ≈ 163.04 m, &nbsp; <i>BF</i> = <span class="frac"><span>200 sin 60°</span><span>sin 70°</span></span> ≈ 184.32 m</div><div class="worked__math"><i>h</i> = 163.04 tan 25° ≈ 76.027 m ⇒ elevation from <i>B</i> = arctan(76.027/184.32) ≈ <b>22.4°</b></div>
      solution: "<p><b>解読：</b>方位角 → 地面上の三角形 → 正弦定理；仰角 → 鉛直な直角三角形。</p><div class=\"worked__math\"><i>AF</i> = <span class=\"frac\"><span>200 sin 50°</span><span>sin 70°</span></span> ≈ 163.04 m, &nbsp; <i>BF</i> = <span class=\"frac\"><span>200 sin 60°</span><span>sin 70°</span></span> ≈ 184.32 m</div><div class=\"worked__math\"><i>h</i> = 163.04 tan 25° ≈ 76.027 m ⇒ <i>B</i> からの仰角 = arctan(76.027/184.32) ≈ <b>22.4°</b></div>",
    },

    // ── t3-1-q052 · short · challenge · SL · SL 3.2 · 7 marks
    "t3-1-q052": {
      // EN: <p>Three straight rods have lengths <span class="chem">x</span>, <span class="chem">x + 1</span> and <span class="chem">x + 2</span> metres. They are joined end to end to make a triangle whose largest angle is <span class="chem">(2pi)/3</span> <strong>radians</strong>.<br>(a) Find the value of <span class="chem">x</span>. <strong>[5 marks]</strong><br>(b) Find the exact area of the triangle. <strong>[2 marks]</strong></p>
      stem: "<p>長さ <span class=\"chem\">x</span>、<span class=\"chem\">x + 1</span>、<span class=\"chem\">x + 2</span> メートルの三本のまっすぐな棒がある。これらの端どうしをつないで、最大の角が <span class=\"chem\">(2pi)/3</span> <strong>ラジアン</strong>の三角形を作る。<br>(a) <span class=\"chem\">x</span> の値を求めなさい (Find)。<strong>[5 marks]</strong><br>(b) 三角形の面積の正確な値を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "largest angle" tells you which side it is opposite (the longest rod). The angle is in radians: <span class="chem">(2pi)/3 = 120°</span>, and <span class="chem">cos((2pi)/3) = -1/2</span>. Use the cosine rule to get an equation in <span class="chem">x</span>.
        "解読：「最大の角」から、それがどの辺（最も長い棒）の対角かがわかります。角はラジアンです：<span class=\"chem\">(2pi)/3 = 120°</span>、<span class=\"chem\">cos((2pi)/3) = -1/2</span>。余弦定理を使って <span class=\"chem\">x</span> の方程式を作ります。",
        // EN: <span class="chem">(x + 2)^2 = x^2 + (x + 1)^2 - 2x(x + 1)cos((2pi)/3)</span>.
        "<span class=\"chem\">(x + 2)^2 = x^2 + (x + 1)^2 - 2x(x + 1)cos((2pi)/3)</span>。",
        // EN: You will get a quadratic. One root is not a length.
        "二次方程式になります。解の一つは長さになりません。",
      ],
      // EN: <p><b>Decode.</b> The largest angle is opposite the longest side; a cosine-rule equation gives a quadratic with one invalid root.</p><div class="worked__math">(a) <i>x</i><sup>2</sup> + 4<i>x</i> + 4 = 3<i>x</i><sup>2</sup> + 3<i>x</i> + 1 ⇒ 2<i>x</i><sup>2</sup> − <i>x</i> − 3 = 0 ⇒ (2<i>x</i> − 3)(<i>x</i> + 1) = 0 ⇒ <b><i>x</i> = 3/2</b></div><div class="worked__math">(b) Area = <span class="frac"><span>1</span><span>2</span></span> × <span class="frac"><span>3</span><span>2</span></span> × <span class="frac"><span>5</span><span>2</span></span> × <span class="frac"><span>√3</span><span>2</span></span> = <b><span class="frac"><span>15√3</span><span>16</span></span> m<sup>2</sup></b></div>
      solution: "<p><b>解読：</b>最大の角は最も長い辺の対角です。余弦定理の式から二次方程式ができ、その解の一つは不適です。</p><div class=\"worked__math\">(a) <i>x</i><sup>2</sup> + 4<i>x</i> + 4 = 3<i>x</i><sup>2</sup> + 3<i>x</i> + 1 ⇒ 2<i>x</i><sup>2</sup> − <i>x</i> − 3 = 0 ⇒ (2<i>x</i> − 3)(<i>x</i> + 1) = 0 ⇒ <b><i>x</i> = 3/2</b></div><div class=\"worked__math\">(b) 面積 = <span class=\"frac\"><span>1</span><span>2</span></span> × <span class=\"frac\"><span>3</span><span>2</span></span> × <span class=\"frac\"><span>5</span><span>2</span></span> × <span class=\"frac\"><span>√3</span><span>2</span></span> = <b><span class=\"frac\"><span>15√3</span><span>16</span></span> m<sup>2</sup></b></div>",
      // EN: <p>(a) x = 3/2; (b) area = 15√3/16 m².</p>
      answer: "<p>(a) x = 3/2；(b) 面積 = 15√3/16 m²。</p>",
      markscheme: [
        // EN: R1: The largest angle, 2π/3, is opposite the longest rod, x + 2.
        "R1：最大の角 2π/3 は最も長い棒 x + 2 の対角である。",
        // EN: M1: Cosine rule with cos(2π/3) = −1/2: (x + 2)² = x² + (x + 1)² + x(x + 1).
        "M1：cos(2π/3) = −1/2 として余弦定理：(x + 2)² = x² + (x + 1)² + x(x + 1)。",
        // EN: A1: Simplifies to 2x² − x − 3 = 0.
        "A1：2x² − x − 3 = 0 に整理する。",
        // EN: A1: (2x − 3)(x + 1) = 0.
        "A1：(2x − 3)(x + 1) = 0。",
        // EN: R1: x = 3/2, rejecting x = −1 because a length must be positive.
        "R1：長さは正でなければならないので x = −1 を除き、x = 3/2。",
        // EN: M1: Area = (1/2)(3/2)(5/2) sin(2π/3), the angle between the two shorter rods.
        "M1：面積 = (1/2)(3/2)(5/2) sin(2π/3)（短い二本の棒のなす角を用いる）。",
        // EN: A1: Area = 15√3/16 m².
        "A1：面積 = 15√3/16 m²。",
      ],
    },

    // ── t3-1-q053 · numeric · challenge · SL · SL 3.4 · 6 marks
    "t3-1-q053": {
      // EN: <p>A badge is cut from a sector of a circle of radius <span class="mono">12 cm</span> with central angle <span class="mono">1</span> <strong>radian</strong>. A circular hole is cut out of the sector; the hole is as large as possible, so its edge touches both straight edges and the arc of the sector. Find the area of the badge that remains, in <span class="unit">cm2</span> to 3 significant figures.</p>
      stem: "<p>半径 <span class=\"mono\">12 cm</span>、中心角 <span class=\"mono\">1</span> <strong>ラジアン</strong>の扇形からバッジを切り出す。扇形から円形の穴を切り抜く。穴はできるだけ大きく、その縁は扇形の二本の直線の辺と弧の両方に接している。残ったバッジの面積を <span class=\"unit\">cm2</span> で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: remaining area = sector area − area of the largest inscribed circle. The work is finding that circle’s radius <span class="chem">r</span>.
        "解読：残りの面積 = 扇形の面積 − 内接する最大の円の面積。やるべきことはその円の半径 <span class=\"chem\">r</span> を求めることです。",
        // EN: The centre <span class="chem">C</span> of the circle lies on the bisector of the sector angle, at distance <span class="chem">12 - r</span> from the sector’s centre <span class="chem">O</span> (because it touches the arc). The perpendicular from <span class="chem">C</span> to a straight edge has length <span class="chem">r</span>, giving <span class="chem">sin(0.5) = r/(12 - r)</span>.
        "円の中心 <span class=\"chem\">C</span> は扇形の角の二等分線上にあり、（弧に接するので）扇形の中心 <span class=\"chem\">O</span> から距離 <span class=\"chem\">12 - r</span> の位置にあります。<span class=\"chem\">C</span> から直線の辺への垂線の長さは <span class=\"chem\">r</span> なので、<span class=\"chem\">sin(0.5) = r/(12 - r)</span> となります。",
        // EN: So <span class="chem">r = (12 sin 0.5)/(1 + sin 0.5)</span>. Sector area <span class="chem">= (1/2)(12^2)(1)</span>.
        "よって <span class=\"chem\">r = (12 sin 0.5)/(1 + sin 0.5)</span>。扇形の面積 <span class=\"chem\">= (1/2)(12^2)(1)</span> です。",
      ],
      // EN: <p><b>Decode.</b> Sector minus inscribed circle; the circle’s radius comes from a right-angled triangle on the bisector.</p><div class="worked__math"><i>r</i> = <span class="frac"><span>12 sin 0.5</span><span>1 + sin 0.5</span></span> ≈ 3.8887 cm</div><div class="worked__math">Area = 72 − <i>π</i>(3.8887)<sup>2</sup> ≈ 72 − 47.508 ≈ <b>24.5 cm<sup>2</sup></b></div>
      solution: "<p><b>解読：</b>扇形から内接円を引きます。円の半径は二等分線上の直角三角形から求まります。</p><div class=\"worked__math\"><i>r</i> = <span class=\"frac\"><span>12 sin 0.5</span><span>1 + sin 0.5</span></span> ≈ 3.8887 cm</div><div class=\"worked__math\">面積 = 72 − <i>π</i>(3.8887)<sup>2</sup> ≈ 72 − 47.508 ≈ <b>24.5 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q054 · numeric · challenge · SL · SL 3.1, 3.3 · 5 marks
    "t3-1-q054": {
      // EN: <p>A rectangular roof panel <span class="chem">ABCD</span> has a horizontal lower edge <span class="chem">AB = 8 m</span> and edges <span class="chem">AD = BC = 5 m</span> running straight up the slope. The panel is inclined at <span class="mono">30°</span> (degrees) to the horizontal. A cable is fixed along the diagonal from <span class="chem">A</span> to <span class="chem">C</span>. Find the angle between the cable and the horizontal, in degrees to 3 significant figures.</p>
      stem: "<p>長方形の屋根パネル <span class=\"chem\">ABCD</span> は、水平な下の辺 <span class=\"chem\">AB = 8 m</span> と、斜面をまっすぐ上る辺 <span class=\"chem\">AD = BC = 5 m</span> をもつ。パネルは水平面に対して <span class=\"mono\">30°</span>（度）傾いている。対角線に沿って <span class=\"chem\">A</span> から <span class=\"chem\">C</span> までケーブルが固定されている。ケーブルと水平面のなす角を度で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the angle between a line (<span class="chem">AC</span>) and a horizontal plane. You need the vertical height of <span class="chem">C</span> above <span class="chem">A</span> and the length <span class="chem">AC</span>; the <span class="mono">30°</span> is the slope of the panel, not the angle of the cable.
        "解読：直線 (<span class=\"chem\">AC</span>) と水平な平面のなす角です。<span class=\"chem\">A</span> に対する <span class=\"chem\">C</span> の鉛直方向の高さと長さ <span class=\"chem\">AC</span> が必要です。<span class=\"mono\">30°</span> はパネルの傾きであり、ケーブルの角ではありません。",
        // EN: Height of the top edge: <span class="chem">5 sin 30° = 2.5 m</span>. Length of the diagonal: <span class="chem">AC = sqrt(8^2 + 5^2)</span> (it lies in the rectangle).
        "上の辺の高さ：<span class=\"chem\">5 sin 30° = 2.5 m</span>。対角線の長さ：<span class=\"chem\">AC = sqrt(8^2 + 5^2)</span>（長方形の中にあります）。",
        // EN: <span class="chem">sin(angle) = 2.5/sqrt(89)</span>.
        "<span class=\"chem\">sin(angle) = 2.5/sqrt(89)</span> です。",
      ],
      // EN: <p><b>Decode.</b> Line–plane angle: drop a perpendicular from C to the horizontal plane through AB.</p><div class="worked__math">Rise = 5 sin 30° = 2.5 m, &nbsp; <i>AC</i> = √89 ≈ 9.434 m</div><div class="worked__math">sin <i>φ</i> = 2.5/9.434 ≈ 0.26500 ⇒ <i>φ</i> ≈ <b>15.4°</b></div>
      solution: "<p><b>解読：</b>直線と平面のなす角：C から AB を通る水平な平面へ垂線を下ろします。</p><div class=\"worked__math\">高さの増加 = 5 sin 30° = 2.5 m, &nbsp; <i>AC</i> = √89 ≈ 9.434 m</div><div class=\"worked__math\">sin <i>φ</i> = 2.5/9.434 ≈ 0.26500 ⇒ <i>φ</i> ≈ <b>15.4°</b></div>",
    },

    // ── t3-1-q055 · short · challenge · SL · SL 3.2, 3.5 · 7 marks
    "t3-1-q055": {
      // EN: <p>A designer is building a triangular frame <span class="chem">ABC</span> with <span class="chem">AB = 14 cm</span> and <span class="chem">angle BAC = 38°</span> (degrees). The rod <span class="chem">BC</span> has length <span class="chem">x</span> cm, and the length of <span class="chem">AC</span> is free.<br>(a) Find the least value of <span class="chem">x</span> for which the frame can be built. <strong>[2 marks]</strong><br>(b) Write down the set of values of <span class="chem">x</span> for which <strong>two</strong> different frames can be built. <strong>[2 marks]</strong><br>(c) Given <span class="chem">x = 10</span>, find the difference between the two possible lengths of <span class="chem">AC</span>. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>デザイナーが <span class=\"chem\">AB = 14 cm</span>、<span class=\"chem\">angle BAC = 38°</span>（度）の三角形の枠 <span class=\"chem\">ABC</span> を作っている。棒 <span class=\"chem\">BC</span> の長さは <span class=\"chem\">x</span> cm で、<span class=\"chem\">AC</span> の長さは自由に決められる。<br>(a) 枠を作ることができる <span class=\"chem\">x</span> の最小値を求めなさい (Find)。<strong>[2 marks]</strong><br>(b) 異なる枠が<strong>二通り</strong>作れるような <span class=\"chem\">x</span> の値の範囲を書きなさい (Write down)。<strong>[2 marks]</strong><br>(c) <span class=\"chem\">x = 10</span> のとき、<span class=\"chem\">AC</span> の考えられる二つの長さの差を求めなさい。<strong>[3 marks]</strong><br>有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: this is the ambiguous case seen as a design question. The rod <span class="chem">BC</span> swings about <span class="chem">B</span> and must reach the line <span class="chem">AC</span>. Too short: no triangle; just touching: one; between the height and <span class="chem">AB</span>: two.
        "解読：これは三角形が二通りある場合を設計の問題として見たものです。棒 <span class=\"chem\">BC</span> は <span class=\"chem\">B</span> を中心に回り、直線 <span class=\"chem\">AC</span> に届かなければなりません。短すぎると三角形はできず、ちょうど接すると一つ、高さと <span class=\"chem\">AB</span> の間なら二つです。",
        // EN: The distance from <span class="chem">B</span> to the line <span class="chem">AC</span> is <span class="chem">14 sin 38°</span>.
        "<span class=\"chem\">B</span> から直線 <span class=\"chem\">AC</span> までの距離は <span class=\"chem\">14 sin 38°</span> です。",
        // EN: For (c), use the cosine rule with the known angle at <span class="chem">A</span> and solve the quadratic in <span class="chem">AC</span>.
        "(c) では、<span class=\"chem\">A</span> における既知の角で余弦定理を使い、<span class=\"chem\">AC</span> の二次方程式を解きます。",
      ],
      // EN: <p><b>Decode.</b> SSA: count triangles by comparing x with the height 14 sin 38° and with AB = 14.</p><div class="worked__math">(a) <i>x</i><sub>min</sub> = 14 sin 38° ≈ <b>8.62 cm</b> &nbsp; (b) <b>8.62 &lt; <i>x</i> &lt; 14</b></div><div class="worked__math">(c) <i>b</i><sup>2</sup> − 22.064<i>b</i> + 96 = 0 ⇒ <i>b</i> ≈ 5.962 or 16.102 ⇒ difference ≈ <b>10.1 cm</b></div>
      solution: "<p><b>解読：</b>SSA：x を高さ 14 sin 38° および AB = 14 と比べて三角形の個数を数えます。</p><div class=\"worked__math\">(a) <i>x</i><sub>min</sub> = 14 sin 38° ≈ <b>8.62 cm</b> &nbsp; (b) <b>8.62 &lt; <i>x</i> &lt; 14</b></div><div class=\"worked__math\">(c) <i>b</i><sup>2</sup> − 22.064<i>b</i> + 96 = 0 ⇒ <i>b</i> ≈ 5.962 または 16.102 ⇒ 差 ≈ <b>10.1 cm</b></div>",
      // EN: <p>(a) x = 14 sin 38° ≈ 8.62; (b) 8.62 &lt; x &lt; 14; (c) about 10.1 cm.</p>
      answer: "<p>(a) x = 14 sin 38° ≈ 8.62；(b) 8.62 &lt; x &lt; 14；(c) 約 10.1 cm。</p>",
      markscheme: [
        // EN: M1: The shortest BC is the perpendicular from B to line AC: x = 14 sin 38°.
        "M1：最も短い BC は B から直線 AC への垂線である：x = 14 sin 38°。",
        // EN: A1: x ≈ 8.62 cm.
        "A1：x ≈ 8.62 cm。",
        // EN: A1: Lower bound 14 sin 38° ≈ 8.62 < x (strict: x = 8.62 gives one right-angled triangle).
        "A1：下限 14 sin 38° ≈ 8.62 < x（等号なし：x = 8.62 では直角三角形が一つだけできる）。",
        // EN: A1: Upper bound x < 14 (if x ≥ 14 only one triangle).
        "A1：上限 x < 14（x ≥ 14 なら三角形は一つだけ）。",
        // EN: M1: Cosine rule with AC = b: 10² = 14² + b² − 2(14)b cos 38°.
        "M1：AC = b として余弦定理：10² = 14² + b² − 2(14)b cos 38°。",
        // EN: A1: b² − 22.064b + 96 = 0, so b ≈ 5.96 or 16.10.
        "A1：b² − 22.064b + 96 = 0 より b ≈ 5.96 または 16.10。",
        // EN: A1: Difference ≈ 10.1 cm.
        "A1：差 ≈ 10.1 cm。",
      ],
    },

    // ── t3-1-q056 · numeric · challenge · SL · SL 3.4 · 4 marks
    "t3-1-q056": {
      // EN: <p>The hour hand of a clock is <span class="mono">8 cm</span> long. Find the exact area swept out by the hour hand between 3:00 and 3:40 on the same afternoon, in <span class="unit">cm2</span>. Work in radians and give your answer as a multiple of <span class="chem">pi</span>.</p>
      stem: "<p>時計の短針の長さは <span class=\"mono\">8 cm</span> である。同じ日の午後 3:00 から 3:40 までに短針が掃く部分の面積の正確な値を <span class=\"unit\">cm2</span> で求めなさい (Find)。ラジアンで計算し、答えは <span class=\"chem\">pi</span> の倍数で表しなさい。</p>",
      hints: [
        // EN: Decode: the swept region is a sector whose angle is the angle turned by the <strong>hour</strong> hand (not the minute hand) in 40 minutes. Convert that angle to radians, then use <span class="chem">A = (1/2)r^2 theta</span>.
        "解読：掃く部分は扇形で、その角は 40 分間に<strong>短</strong>針（長針ではない）が回る角です。その角をラジアンに直し、<span class=\"chem\">A = (1/2)r^2 theta</span> を使います。",
        // EN: The hour hand turns <span class="chem">2pi</span> radians in 12 hours, so <span class="chem">pi/6</span> radians per hour.
        "短針は 12 時間で <span class=\"chem\">2pi</span> ラジアン回るので、一時間あたり <span class=\"chem\">pi/6</span> ラジアンです。",
        // EN: 40 minutes is <span class="chem">2/3</span> of an hour, so <span class="chem">theta = (2/3)(pi/6) = pi/9</span>.
        "40 分は 一時間の <span class=\"chem\">2/3</span> なので、<span class=\"chem\">theta = (2/3)(pi/6) = pi/9</span> です。",
      ],
      // EN: <p><b>Decode.</b> A sector problem in disguise: the angle comes from the hour hand’s rate.</p><div class="worked__math"><i>θ</i> = <span class="frac"><span>2</span><span>3</span></span> × <span class="frac"><span><i>π</i></span><span>6</span></span> = <span class="frac"><span><i>π</i></span><span>9</span></span> rad ⇒ <i>A</i> = <span class="frac"><span>1</span><span>2</span></span>(64)<span class="frac"><span><i>π</i></span><span>9</span></span> = <b><span class="frac"><span>32<i>π</i></span><span>9</span></span> cm<sup>2</sup></b></div>
      solution: "<p><b>解読：</b>形を変えた扇形の問題です。角は短針の回る速さから求まります。</p><div class=\"worked__math\"><i>θ</i> = <span class=\"frac\"><span>2</span><span>3</span></span> × <span class=\"frac\"><span><i>π</i></span><span>6</span></span> = <span class=\"frac\"><span><i>π</i></span><span>9</span></span> rad ⇒ <i>A</i> = <span class=\"frac\"><span>1</span><span>2</span></span>(64)<span class=\"frac\"><span><i>π</i></span><span>9</span></span> = <b><span class=\"frac\"><span>32<i>π</i></span><span>9</span></span> cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q057 · short · challenge · SL · SL 3.2, 3.3 · 8 marks
    "t3-1-q057": {
      // EN: <p>Two coastguard stations <span class="chem">A</span> and <span class="chem">B</span> are on a straight east–west coastline, with <span class="chem">B</span> <span class="mono">30 km</span> due East of <span class="chem">A</span>. A boat <span class="chem">S</span> out at sea, to the north of the coastline, is on a bearing of <span class="mono">058°</span> from <span class="chem">A</span> and <span class="mono">316°</span> from <span class="chem">B</span>. All angles are in degrees.<br>(a) Show that <span class="chem">angle ASB = 102°</span>. <strong>[2 marks]</strong><br>(b) Find the distance <span class="chem">AS</span>. <strong>[2 marks]</strong><br>(c) Find the shortest distance from the boat to the coastline. <strong>[2 marks]</strong><br>(d) The boat now sails due South at <span class="mono">14 km h⁻¹</span>. Find how many minutes it takes to reach the coastline. <strong>[2 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>二つの沿岸警備隊の基地 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> が東西にまっすぐ延びる海岸線上にあり、<span class=\"chem\">B</span> は <span class=\"chem\">A</span> の真東 <span class=\"mono\">30 km</span> の位置にある。海岸線の北側の沖にいるボート <span class=\"chem\">S</span> は、<span class=\"chem\">A</span> から方位角 <span class=\"mono\">058°</span>、<span class=\"chem\">B</span> から方位角 <span class=\"mono\">316°</span> の方向にある。角はすべて度である。<br>(a) <span class=\"chem\">angle ASB = 102°</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong><br>(b) 距離 <span class=\"chem\">AS</span> を求めなさい (Find)。<strong>[2 marks]</strong><br>(c) ボートから海岸線までの最短距離を求めなさい。<strong>[2 marks]</strong><br>(d) ボートはここから <span class=\"mono\">14 km h⁻¹</span> で真南に進む。海岸線に着くまでに何分かかるかを求めなさい。<strong>[2 marks]</strong><br>有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: build triangle <span class="chem">ABS</span> from the bearings (North lines at <span class="chem">A</span> and <span class="chem">B</span>). "Shortest distance to the coastline" means the perpendicular distance; "due South" travels along exactly that perpendicular.
        "解読：方位角から三角形 <span class=\"chem\">ABS</span> を作ります（<span class=\"chem\">A</span> と <span class=\"chem\">B</span> に北向きの線を引きます）。「海岸線までの最短距離」は垂直距離のことで、「真南」に進むとちょうどその垂線に沿って進みます。",
        // EN: At <span class="chem">A</span>, the angle between East and <span class="chem">AS</span> is <span class="chem">90° - 58°</span>; at <span class="chem">B</span>, the angle between West and <span class="chem">BS</span> is <span class="chem">316° - 270°</span>.
        "<span class=\"chem\">A</span> では東と <span class=\"chem\">AS</span> のなす角は <span class=\"chem\">90° - 58°</span>、<span class=\"chem\">B</span> では西と <span class=\"chem\">BS</span> のなす角は <span class=\"chem\">316° - 270°</span> です。",
        // EN: For (c), use the right-angled triangle with hypotenuse <span class="chem">AS</span> and angle <span class="mono">32°</span> at <span class="chem">A</span>.
        "(c) では、斜辺が <span class=\"chem\">AS</span> で <span class=\"chem\">A</span> における角が <span class=\"mono\">32°</span> の直角三角形を使います。",
      ],
      // EN: <p><b>Decode.</b> Bearings → triangle angles; shortest distance → perpendicular; due South → along that perpendicular.</p><div class="worked__math">(a) 32° + 46° + ∠<i>ASB</i> = 180° ⇒ ∠<i>ASB</i> = 102°</div><div class="worked__math">(b) <i>AS</i> = <span class="frac"><span>30 sin 46°</span><span>sin 102°</span></span> ≈ <b>22.1 km</b> &nbsp; (c) <i>d</i> = 22.062 sin 32° ≈ <b>11.7 km</b></div><div class="worked__math">(d) <i>t</i> = 11.691/14 h ≈ <b>50.1 min</b></div>
      solution: "<p><b>解読：</b>方位角 → 三角形の角；最短距離 → 垂線；真南 → その垂線に沿って進む。</p><div class=\"worked__math\">(a) 32° + 46° + ∠<i>ASB</i> = 180° ⇒ ∠<i>ASB</i> = 102°</div><div class=\"worked__math\">(b) <i>AS</i> = <span class=\"frac\"><span>30 sin 46°</span><span>sin 102°</span></span> ≈ <b>22.1 km</b> &nbsp; (c) <i>d</i> = 22.062 sin 32° ≈ <b>11.7 km</b></div><div class=\"worked__math\">(d) <i>t</i> = 11.691/14 h ≈ <b>50.1 分</b></div>",
      // EN: <p>(a) ∠SAB = 32°, ∠SBA = 46°, so ∠ASB = 102°. (b) AS ≈ 22.1 km. (c) ≈ 11.7 km. (d) ≈ 50.1 minutes.</p>
      answer: "<p>(a) ∠SAB = 32°、∠SBA = 46° なので ∠ASB = 102°。(b) AS ≈ 22.1 km。(c) ≈ 11.7 km。(d) ≈ 50.1 分。</p>",
      markscheme: [
        // EN: M1: ∠SAB = 90° − 58° = 32° and ∠SBA = 316° − 270° = 46°.
        "M1：∠SAB = 90° − 58° = 32° および ∠SBA = 316° − 270° = 46°。",
        // EN: A1: ∠ASB = 180° − 32° − 46° = 102°. AG: angle ASB = 102°; the given line itself earns no mark.
        "A1：∠ASB = 180° − 32° − 46° = 102°。AG：angle ASB = 102°。与えられた結論の行そのものには点を与えない。",
        // EN: M1: Sine rule: AS/sin 46° = 30/sin 102°.
        "M1：正弦定理：AS/sin 46° = 30/sin 102°。",
        // EN: A1: AS ≈ 22.1 km (22.062).
        "A1：AS ≈ 22.1 km (22.062)。",
        // EN: M1: Shortest distance is perpendicular to AB: d = AS sin 32°.
        "M1：最短距離は AB への垂線である：d = AS sin 32°。",
        // EN: A1: d ≈ 11.7 km (11.691).
        "A1：d ≈ 11.7 km (11.691)。",
        // EN: M1: The coastline runs east–west, so sailing due South follows this perpendicular: time = d ÷ 14 hours.
        "M1：海岸線は東西に延びているので、真南に進むとこの垂線に沿う：時間 = d ÷ 14 時間。",
        // EN: A1: Time = 11.691/14 h ≈ 0.83509 h ≈ 50.1 minutes.
        "A1：時間 = 11.691/14 h ≈ 0.83509 h ≈ 50.1 分。",
      ],
    },

    // ── t3-1-q058 · short · challenge · SL · SL 3.2, 3.3 · 8 marks
    "t3-1-q058": {
      // EN: <p>A farmer’s field is a quadrilateral <span class="chem">PQRS</span>. A surveyor measures <span class="chem">PQ = 120 m</span>, <span class="chem">QR = 95 m</span>, <span class="chem">RS = 80 m</span>, <span class="chem">angle PQR = 104°</span> and <span class="chem">angle PRS = 52°</span> (angles in degrees). The field is to be fenced all the way round.<br>(a) Find the length of the diagonal <span class="chem">PR</span>. <strong>[2 marks]</strong><br>(b) Find the area of the field. <strong>[3 marks]</strong><br>(c) Find the total length of fencing needed. <strong>[3 marks]</strong><br>Give answers to 3 significant figures.</p>
      stem: "<p>ある農家の畑は四角形 <span class=\"chem\">PQRS</span> である。測量士が <span class=\"chem\">PQ = 120 m</span>、<span class=\"chem\">QR = 95 m</span>、<span class=\"chem\">RS = 80 m</span>、<span class=\"chem\">angle PQR = 104°</span>、<span class=\"chem\">angle PRS = 52°</span>（角は度）を測定した。畑の周囲全体に柵を立てる。<br>(a) 対角線 <span class=\"chem\">PR</span> の長さを求めなさい (Find)。<strong>[2 marks]</strong><br>(b) 畑の面積を求めなさい。<strong>[3 marks]</strong><br>(c) 必要な柵の全長を求めなさい。<strong>[3 marks]</strong><br>有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: a quadrilateral is two triangles sharing the diagonal <span class="chem">PR</span>. "Fenced all the way round" means the perimeter, so the missing side <span class="chem">PS</span> is needed.
        "解読：四角形は対角線 <span class=\"chem\">PR</span> を共有する二つの三角形です。「周囲全体に柵を立てる」とは周の長さのことなので、わかっていない辺 <span class=\"chem\">PS</span> が必要です。",
        // EN: Triangle <span class="chem">PQR</span>: two sides and the included angle, so cosine rule for <span class="chem">PR</span> and <span class="chem">(1/2)ab sin C</span> for its area.
        "三角形 <span class=\"chem\">PQR</span>：二辺とその間の角がわかっているので、<span class=\"chem\">PR</span> には余弦定理、面積には <span class=\"chem\">(1/2)ab sin C</span> を使います。",
        // EN: Triangle <span class="chem">PRS</span>: you now know <span class="chem">PR</span>, <span class="chem">RS</span> and the included angle <span class="chem">angle PRS</span>. Keep <span class="chem">PR</span> to full accuracy.
        "三角形 <span class=\"chem\">PRS</span>：これで <span class=\"chem\">PR</span>、<span class=\"chem\">RS</span> とその間の角 <span class=\"chem\">angle PRS</span> がわかります。<span class=\"chem\">PR</span> は丸めずに使います。",
      ],
      // EN: <p><b>Decode.</b> Split by the diagonal; each triangle is SAS.</p><div class="worked__math">(a) <i>PR</i> = √(14400 + 9025 − 22800 cos 104°) ≈ <b>170 m</b></div><div class="worked__math">(b) <span class="frac"><span>1</span><span>2</span></span>(120)(95) sin 104° + <span class="frac"><span>1</span><span>2</span></span>(170.12)(80) sin 52° ≈ 5530.7 + 5362.3 ≈ <b>10 900 m<sup>2</sup></b></div><div class="worked__math">(c) <i>PS</i> ≈ 136.32 m ⇒ fencing ≈ <b>431 m</b></div>
      solution: "<p><b>解読：</b>対角線で分けます。どちらの三角形も SAS です。</p><div class=\"worked__math\">(a) <i>PR</i> = √(14400 + 9025 − 22800 cos 104°) ≈ <b>170 m</b></div><div class=\"worked__math\">(b) <span class=\"frac\"><span>1</span><span>2</span></span>(120)(95) sin 104° + <span class=\"frac\"><span>1</span><span>2</span></span>(170.12)(80) sin 52° ≈ 5530.7 + 5362.3 ≈ <b>10 900 m<sup>2</sup></b></div><div class=\"worked__math\">(c) <i>PS</i> ≈ 136.32 m ⇒ 柵 ≈ <b>431 m</b></div>",
      // EN: <p>(a) PR ≈ 170 m (170.12); (b) area ≈ 10 900 m² (10 893); (c) PS ≈ 136 m, so fencing ≈ 431 m.</p>
      answer: "<p>(a) PR ≈ 170 m (170.12)；(b) 面積 ≈ 10 900 m² (10 893)；(c) PS ≈ 136 m なので、柵 ≈ 431 m。</p>",
      markscheme: [
        // EN: M1: Cosine rule in triangle PQR: PR² = 120² + 95² − 2(120)(95) cos 104°.
        "M1：三角形 PQR で余弦定理：PR² = 120² + 95² − 2(120)(95) cos 104°。",
        // EN: A1: PR ≈ 170 m (170.12).
        "A1：PR ≈ 170 m (170.12)。",
        // EN: M1: Splits the field along PR into two triangles and uses (1/2)ab sin C for each.
        "M1：畑を PR で二つの三角形に分け、それぞれに (1/2)ab sin C を用いる。",
        // EN: A1: Triangle PQR ≈ 5530.7 m² and triangle PRS ≈ 5362.3 m².
        "A1：三角形 PQR ≈ 5530.7 m²、三角形 PRS ≈ 5362.3 m²。",
        // EN: A1: Area ≈ 10 900 m² (10 893).
        "A1：面積 ≈ 10 900 m² (10 893)。",
        // EN: M1: Cosine rule in triangle PRS: PS² = 170.12² + 80² − 2(170.12)(80) cos 52°.
        "M1：三角形 PRS で余弦定理：PS² = 170.12² + 80² − 2(170.12)(80) cos 52°。",
        // EN: A1: PS ≈ 136 m (136.32).
        "A1：PS ≈ 136 m (136.32)。",
        // EN: A1: Fencing = 120 + 95 + 80 + 136.32 ≈ 431 m.
        "A1：柵 = 120 + 95 + 80 + 136.32 ≈ 431 m。",
      ],
    },

    // ── t3-1-q059 · numeric · challenge · SL · SL 3.1 · 6 marks
    "t3-1-q059": {
      // EN: <p>A child’s spinning top is a solid made of a right circular cone joined to a hemisphere along their common circular face of radius <span class="mono">3 cm</span>. The cone and the hemisphere are made of the same material and have the <strong>same mass</strong>. Find the exact total surface area of the top, in <span class="unit">cm2</span>, in terms of <span class="chem">pi</span>. (No angles are involved.)</p>
      stem: "<p>子どものこまは、直円錐と半球を、半径 <span class=\"mono\">3 cm</span> の共通の円の面で接合した中身の詰まった立体である。円錐と半球は同じ材料でできていて、<strong>質量が等しい</strong>。こまの表面積の正確な値を、<span class=\"chem\">pi</span> を用いて <span class=\"unit\">cm2</span> で求めなさい (Find)。（角は関係しない。）</p>",
      hints: [
        // EN: Decode: "same material, same mass" means the two parts have the same <strong>volume</strong>; use that to find the cone’s height. The surface of the top is the curved part of the cone plus the curved part of the hemisphere (the joining face is hidden).
        "解読：「同じ材料で質量が等しい」とは、二つの部分の<strong>体積</strong>が等しいということです。これを使って円錐の高さを求めます。こまの表面は円錐の曲面と半球の曲面です（接合面は隠れています）。",
        // EN: <span class="chem">(1/3)pi(3^2)h = (2/3)pi(3^3)</span> gives <span class="chem">h = 6</span>. Then the slant height is <span class="chem">l = sqrt(3^2 + 6^2)</span>.
        "<span class=\"chem\">(1/3)pi(3^2)h = (2/3)pi(3^3)</span> から <span class=\"chem\">h = 6</span>。次に母線の長さは <span class=\"chem\">l = sqrt(3^2 + 6^2)</span> です。",
        // EN: Total <span class="chem">= pi r l + 2pi r^2</span>.
        "合計 <span class=\"chem\">= pi r l + 2pi r^2</span> です。",
      ],
      // EN: <p><b>Decode.</b> Equal mass with the same material means equal volume; the shared circular face is not on the surface.</p><div class="worked__math">3<i>πh</i> = 18<i>π</i> ⇒ <i>h</i> = 6, &nbsp; <i>l</i> = √45 = 3√5</div><div class="worked__math"><i>A</i> = <i>π</i>(3)(3√5) + 2<i>π</i>(9) = <b>18<i>π</i> + 9√5<i>π</i> cm<sup>2</sup></b> (≈ 120 cm<sup>2</sup>)</div>
      solution: "<p><b>解読：</b>同じ材料で質量が等しいので体積が等しくなります。共通の円の面は表面に含まれません。</p><div class=\"worked__math\">3<i>πh</i> = 18<i>π</i> ⇒ <i>h</i> = 6, &nbsp; <i>l</i> = √45 = 3√5</div><div class=\"worked__math\"><i>A</i> = <i>π</i>(3)(3√5) + 2<i>π</i>(9) = <b>18<i>π</i> + 9√5<i>π</i> cm<sup>2</sup></b> (≈ 120 cm<sup>2</sup>)</div>",
    },

    // ── t3-1-q060 · numeric · challenge · SL · SL 3.2 · 5 marks
    "t3-1-q060": {
      // EN: <p>A triangular sail has two edges of length <span class="mono">6 m</span> and <span class="mono">8 m</span> meeting at the top corner, where the angle between them is <strong>obtuse</strong>. The area of the sail is <span class="mono">12 m²</span>. Find the exact value of the <strong>square</strong> of the length of the third edge, in <span class="unit">m2</span>. Angles are in degrees.</p>
      stem: "<p>三角形の帆は、長さ <span class=\"mono\">6 m</span> と <span class=\"mono\">8 m</span> の二辺が上の角で交わり、そのなす角は<strong>鈍角</strong>である。帆の面積は <span class=\"mono\">12 m²</span> である。第三の辺の長さの<strong>二乗</strong>の正確な値を <span class=\"unit\">m2</span> で求めなさい (Find)。角は度で考える。</p>",
      hints: [
        // EN: Decode: the area gives <span class="chem">sin</span> of the angle between the edges, which has two possible angles; "obtuse" picks one. Then the cosine rule gives the third edge squared.
        "解読：面積から二辺のなす角の <span class=\"chem\">sin</span> がわかり、角は二つ考えられます。「鈍角」で一つに決まります。次に余弦定理で第三の辺の二乗が求まります。",
        // EN: <span class="chem">(1/2)(6)(8) sin theta = 12</span> gives <span class="chem">sin theta = 1/2</span>, so <span class="chem">theta = 30°</span> or <span class="chem">150°</span>.
        "<span class=\"chem\">(1/2)(6)(8) sin theta = 12</span> から <span class=\"chem\">sin theta = 1/2</span> なので、<span class=\"chem\">theta = 30°</span> または <span class=\"chem\">150°</span> です。",
        // EN: With <span class="chem">theta = 150°</span>, <span class="chem">cos theta = -sqrt(3)/2</span>, and <span class="chem">c^2 = 6^2 + 8^2 - 2(6)(8)cos 150°</span>.
        "<span class=\"chem\">theta = 150°</span> のとき <span class=\"chem\">cos theta = -sqrt(3)/2</span> で、<span class=\"chem\">c^2 = 6^2 + 8^2 - 2(6)(8)cos 150°</span> です。",
      ],
      // EN: <p><b>Decode.</b> Area → sin θ → choose the obtuse angle → cosine rule.</p><div class="worked__math">24 sin <i>θ</i> = 12 ⇒ sin <i>θ</i> = <span class="frac"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 150° (obtuse)</div><div class="worked__math"><i>c</i><sup>2</sup> = 36 + 64 − 96(−√3/2) = <b>100 + 48√3 m<sup>2</sup></b></div>
      solution: "<p><b>解読：</b>面積 → sin θ → 鈍角を選ぶ → 余弦定理。</p><div class=\"worked__math\">24 sin <i>θ</i> = 12 ⇒ sin <i>θ</i> = <span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>θ</i> = 150°（鈍角）</div><div class=\"worked__math\"><i>c</i><sup>2</sup> = 36 + 64 − 96(−√3/2) = <b>100 + 48√3 m<sup>2</sup></b></div>",
    },

  }
});
