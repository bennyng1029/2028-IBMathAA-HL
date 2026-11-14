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
        // EN: <span class="chem">90*pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">90*pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class="chem">65*pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">65*pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class="chem">85*pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">85*pi</span> <span class=\"unit\">cm2</span>",
        // EN: <span class="chem">100*pi</span> <span class="unit">cm2</span>
        "<span class=\"chem\">100*pi</span> <span class=\"unit\">cm2</span>",
      ],
      hints: [
        // EN: First find the slant height <span class="chem">l = sqrt(r^2 + h^2)</span> using Pythagoras.
        "まず三平方の定理を使って母線の長さ <span class=\"chem\">l = sqrt(r^2 + h^2)</span> を求めます。",
        // EN: Total surface area = curved surface <span class="chem">pi*r*l</span> + base area <span class="chem">pi*r^2</span>.
        "全表面積 = 側面積 <span class=\"chem\">pi*r*l</span> + 底面積 <span class=\"chem\">pi*r^2</span> です。",
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
        // EN: <span class="chem">7*pi / 6</span>
        "<span class=\"chem\">7*pi / 6</span>",
        // EN: <span class="chem">5*pi / 6</span>
        "<span class=\"chem\">5*pi / 6</span>",
        // EN: <span class="chem">4*pi / 3</span>
        "<span class=\"chem\">4*pi / 3</span>",
        // EN: <span class="chem">7*pi / 4</span>
        "<span class=\"chem\">7*pi / 4</span>",
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
        // EN: Use the sector area formula <span class="chem">A = (1/2)r^2*theta</span>.
        "扇形の面積公式 <span class=\"chem\">A = (1/2)r^2*theta</span> を使います。",
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
        // EN: Write the two equations: <span class="chem">2r + r*theta = 20</span> and <span class="chem">(1/2)r^2*theta = 24</span>.
        "2 つの方程式 <span class=\"chem\">2r + r*theta = 20</span> と <span class=\"chem\">(1/2)r^2*theta = 24</span> を立てます。",
        // EN: Isolate <span class="chem">r*theta = 20 - 2r</span> from the first equation and substitute it into <span class="chem">(1/2)r(r*theta) = 24</span>.
        "最初の式から <span class=\"chem\">r*theta = 20 - 2r</span> を作り、<span class=\"chem\">(1/2)r(r*theta) = 24</span> に代入します。",
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
      // EN: <p><strong>[Paper 1 — No GDC]</strong> In triangle <span class="chem">ABC</span>, <span class="chem">AB = 6 cm</span>, <span class="chem">BC = 4 cm</span>, and <span class="chem">cos(angle BAC) = 3/4</span>. There are two possible values for the length of <span class="chem">AC</span>. Find the <strong>sum</strong> of these two possible lengths of <span class="chem">AC</span> (in <span class="unit">cm</span>).</p>
      stem: "<p><strong>[Paper 1 — 電卓不可]</strong> 三角形 <span class=\"chem\">ABC</span> において、<span class=\"chem\">AB = 6 cm</span>、<span class=\"chem\">BC = 4 cm</span>、<span class=\"chem\">cos(angle BAC) = 3/4</span> である。<span class=\"chem\">AC</span> の長さには 2 通りの値がある。これら 2 通りの <span class=\"chem\">AC</span> の長さの<strong>和</strong>（<span class=\"unit\">cm</span> 単位）を求めなさい (Find)。</p>",
      hints: [
        // EN: Let <span class="chem">AC = b</span> and write the Cosine Rule using <span class="chem">angle A</span>: <span class="chem">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span>.
        "<span class=\"chem\">AC = b</span> とおき、<span class=\"chem\">angle A</span> を使って余弦定理 <span class=\"chem\">BC^2 = AB^2 + b^2 - 2(AB)(b) cos A</span> を立てます。",
        // EN: Substitute the given values to form a quadratic in <span class="chem">b</span>: <span class="chem">16 = 36 + b^2 - 2(6)(b)(3/4)</span>, i.e. <span class="chem">b^2 - 9b + 20 = 0</span>.
        "与えられた値を代入して <span class=\"chem\">b</span> の 2 次方程式を作ります：<span class=\"chem\">16 = 36 + b^2 - 2(6)(b)(3/4)</span>、すなわち <span class=\"chem\">b^2 - 9b + 20 = 0</span>。",
      ],
      // EN: <div class="worked__math">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class="frac"><span>3</span><span>4</span></span> ⇒ <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0 ⇒ (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class="worked__math">The two possible lengths are <i>b</i> = 4 cm and <i>b</i> = 5 cm, so their sum is 4 + 5 = <b>9 cm</b>.</div>
      solution: "<div class=\"worked__math\">4<sup>2</sup> = 6<sup>2</sup> + <i>b</i><sup>2</sup> − 2(6)<i>b</i><span class=\"frac\"><span>3</span><span>4</span></span> ⇒ <i>b</i><sup>2</sup> − 9<i>b</i> + 20 = 0 ⇒ (<i>b</i> − 4)(<i>b</i> − 5) = 0</div><div class=\"worked__math\">とり得る 2 つの長さは <i>b</i> = 4 cm と <i>b</i> = 5 cm なので、その和は 4 + 5 = <b>9 cm</b> です。</div>",
    },

    // ── t3-1-q016 · numeric · challenge · SL · SL 3.4 · 6 marks
    "t3-1-q016": {
      // EN: <p>Two identical circles, each of radius <span class="mono">6 cm</span>, are drawn such that the centre of each circle lies on the circumference of the other circle. Find the area of the overlapping region common to both circles, in <span class="unit">cm2</span> to 3 significant figures.</p>
      stem: "<p>半径がともに <span class=\"mono\">6 cm</span> の 2 つの合同な円が、互いの中心がもう一方の円の周上にあるように描かれている。両方の円に共通する重なった部分の面積を <span class=\"unit\">cm2</span> で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Let the centres be <span class="chem">O_1, O_2</span> and the intersection points be <span class="chem">A, B</span>. Since <span class="chem">O_1 O_2 = O_1 A = O_2 A = 6 cm</span>, triangles <span class="chem">O_1 O_2 A</span> and <span class="chem">O_1 O_2 B</span> are equilateral (<span class="mono">60° = π/3</span>)!
        "中心を <span class=\"chem\">O_1, O_2</span>、交点を <span class=\"chem\">A, B</span> とします。<span class=\"chem\">O_1 O_2 = O_1 A = O_2 A = 6 cm</span> なので、三角形 <span class=\"chem\">O_1 O_2 A</span> と <span class=\"chem\">O_1 O_2 B</span> は正三角形（<span class=\"mono\">60° = π/3</span>）です！",
        // EN: Thus the central angle at each centre is <span class="chem">theta = 2*pi/3</span>, and the overlap consists of <strong>two identical circular segments</strong> of angle <span class="chem">2*pi/3</span>.
        "よって各中心での中心角は <span class=\"chem\">theta = 2*pi/3</span> となり、重なった部分は中心角 <span class=\"chem\">2*pi/3</span> の<strong>合同な 2 つの弓形</strong>からなります。",
      ],
      // EN: <div class="worked__math">∠<i>AO</i><sub>1</sub><i>B</i> = <span class="frac"><span>2<i>π</i></span><span>3</span></span> rad ⇒ <i>A</i><sub>overlap</sub> = 2 × <span class="frac"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − sin <span class="frac"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class="frac"><span>2<i>π</i></span><span>3</span></span> − <span class="frac"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>
      solution: "<div class=\"worked__math\">∠<i>AO</i><sub>1</sub><i>B</i> = <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> rad ⇒ <i>A</i><sub>overlap</sub> = 2 × <span class=\"frac\"><span>1</span><span>2</span></span>(6)<sup>2</sup>(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> − sin <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span>) = 36(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> − <span class=\"frac\"><span>√3</span><span>2</span></span>) = 24<i>π</i> − 18√3 ≈ <b>44.2 cm<sup>2</sup></b></div>",
    },

    // ── t3-1-q017 · short · challenge · SL · SL 3.1 · 6 marks
    "t3-1-q017": {
      // EN: <p>A hollow right circular cone (open at the base) of base radius <span class="chem">r</span> and slant height <span class="chem">l</span> is made by rolling up a semicircular sheet of thin metal of radius <span class="mono">10 cm</span> so that the two straight radii meet without overlap.<br>(a) Find the base radius <span class="chem">r</span> and vertical height <span class="chem">h</span> of the cone. <strong>[4 marks]</strong><br>(b) Find the acute angle between a slant generator of the cone and the plane of its base. <strong>[2 marks]</strong></p>
      stem: "<p>半径 <span class=\"mono\">10 cm</span> の半円形の薄い金属板を、2 本の半径が重ならないように丸めて、底面の半径 <span class=\"chem\">r</span>、母線の長さ <span class=\"chem\">l</span> の中空の直円錐（底面は開いている）を作った。<br>(a) この円錐の底面の半径 <span class=\"chem\">r</span> と高さ <span class=\"chem\">h</span> を求めなさい (Find)。 <strong>[4 marks]</strong><br>(b) この円錐の母線と底面を含む平面がなす鋭角を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
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
        // EN: <span class="chem">50*sqrt(2) m</span>
        "<span class=\"chem\">50*sqrt(2) m</span>",
        // EN: <span class="chem">50*sqrt(3) m</span>
        "<span class=\"chem\">50*sqrt(3) m</span>",
        // EN: <span class="chem">25*sqrt(3) m</span>
        "<span class=\"chem\">25*sqrt(3) m</span>",
      ],
      hints: [
        // EN: Express both ground distances <span class="chem">AM</span> and <span class="chem">BM</span> in terms of <span class="chem">h</span>: <span class="chem">AM = h / tan 45° = h</span> and <span class="chem">BM = h / tan 30° = h*sqrt(3)</span>.
        "地面上の距離 <span class=\"chem\">AM</span> と <span class=\"chem\">BM</span> をともに <span class=\"chem\">h</span> で表します：<span class=\"chem\">AM = h / tan 45° = h</span>、<span class=\"chem\">BM = h / tan 30° = h*sqrt(3)</span>。",
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
