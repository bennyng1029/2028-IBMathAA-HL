/* t3-2.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't3-2.q', {
  questions: {

    // ── t3-2-q001 · mcq · foundation · SL · SL 3.5 · 1 mark
    "t3-2-q001": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> What is the exact value of <span class="chem">sin(5*pi/6) + cos(2*pi/3)</span>?</p>
      stem: "<p><strong>[Paper 1 — 電卓不可]</strong> <span class=\"chem\">sin(5*pi/6) + cos(2*pi/3)</span> の正確な値はどれですか？</p>",
      options: [
        // EN: <span class="mono">0</span>
        "<span class=\"mono\">0</span>",
        // EN: <span class="mono">1</span>
        "<span class=\"mono\">1</span>",
        // EN: <span class="chem">(sqrt(3) - 1) / 2</span>
        "<span class=\"chem\">(sqrt(3) - 1) / 2</span>",
        // EN: <span class="mono">−1</span>
        "<span class=\"mono\">−1</span>",
      ],
      hints: [
        // EN: Both <span class="chem">5*pi/6</span> and <span class="chem">2*pi/3</span> lie in Quadrant II, where <span class="chem">sin &gt; 0</span> and <span class="chem">cos &lt; 0</span>.
        "<span class=\"chem\">5*pi/6</span> も <span class=\"chem\">2*pi/3</span> も第 2 象限にあり、そこでは <span class=\"chem\">sin &gt; 0</span>、<span class=\"chem\">cos &lt; 0</span> です。",
        // EN: <span class="chem">sin(5*pi/6) = +sin(pi/6) = 1/2</span> and <span class="chem">cos(2*pi/3) = -cos(pi/3) = -1/2</span>.
        "<span class=\"chem\">sin(5*pi/6) = +sin(pi/6) = 1/2</span>、かつ <span class=\"chem\">cos(2*pi/3) = -cos(pi/3) = -1/2</span> です。",
      ],
      // EN: <div class="worked__math">sin(<span class="frac"><span>5<i>π</i></span><span>6</span></span>) + cos(<span class="frac"><span>2<i>π</i></span><span>3</span></span>) = <span class="frac"><span>1</span><span>2</span></span> + (−<span class="frac"><span>1</span><span>2</span></span>) = <b>0</b></div>
      solution: "<div class=\"worked__math\">sin(<span class=\"frac\"><span>5<i>π</i></span><span>6</span></span>) + cos(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span>) = <span class=\"frac\"><span>1</span><span>2</span></span> + (−<span class=\"frac\"><span>1</span><span>2</span></span>) = <b>0</b></div>",
      misconception: {
        // EN (option B): In Quadrant II, cos(2π/3) = −1/2 (negative!), not +1/2.
        "1": "第 2 象限では cos(2π/3) = −1/2（負！）であり、+1/2 ではありません。",
        // EN (option C): sin(5π/6) = 1/2 (not √3/2), because the reference angle is π/6 = 30°.
        "2": "基準角が π/6 = 30° なので、sin(5π/6) = 1/2（√3/2 ではない）です。",
        // EN (option D): In Quadrant II, sin(5π/6) = +1/2 (positive!).
        "3": "第 2 象限では sin(5π/6) = +1/2（正！）です。",
      },
    },

    // ── t3-2-q002 · numeric · foundation · SL · SL 3.6 · 3 marks
    "t3-2-q002": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> Given that <span class="chem">cos theta = -3/5</span> and <span class="chem">pi/2 &lt; theta &lt; pi</span>, find the exact value of <span class="chem">sin 2theta</span> as a decimal.</p>
      stem: "<p><strong>[Paper 1 — 電卓不可]</strong> <span class=\"chem\">cos theta = -3/5</span> かつ <span class=\"chem\">pi/2 &lt; theta &lt; pi</span> のとき、<span class=\"chem\">sin 2theta</span> の正確な値を小数で求めなさい (Find)。</p>",
      hints: [
        // EN: In Quadrant II (<span class="chem">pi/2 &lt; theta &lt; pi</span>), <span class="chem">sin theta &gt; 0</span>, so <span class="chem">sin theta = +sqrt(1 - (-3/5)^2) = 4/5</span>.
        "第 2 象限（<span class=\"chem\">pi/2 &lt; theta &lt; pi</span>）では <span class=\"chem\">sin theta &gt; 0</span> なので、<span class=\"chem\">sin theta = +sqrt(1 - (-3/5)^2) = 4/5</span> です。",
        // EN: Use <span class="chem">sin 2theta = 2 sin theta cos theta</span>.
        "<span class=\"chem\">sin 2theta = 2 sin theta cos theta</span> を使います。",
      ],
      // EN: <div class="worked__math">sin <i>θ</i> = <span class="frac"><span>4</span><span>5</span></span> ⇒ sin 2<i>θ</i> = 2(<span class="frac"><span>4</span><span>5</span></span>)(−<span class="frac"><span>3</span><span>5</span></span>) = −<span class="frac"><span>24</span><span>25</span></span> = <b>−0.96</b></div>
      solution: "<div class=\"worked__math\">sin <i>θ</i> = <span class=\"frac\"><span>4</span><span>5</span></span> ⇒ sin 2<i>θ</i> = 2(<span class=\"frac\"><span>4</span><span>5</span></span>)(−<span class=\"frac\"><span>3</span><span>5</span></span>) = −<span class=\"frac\"><span>24</span><span>25</span></span> = <b>−0.96</b></div>",
    },

    // ── t3-2-q003 · mcq · foundation · SL · SL 3.7 · 2 marks
    "t3-2-q003": {
      // EN: <p>What are the amplitude and period of the function <span class="chem">f(x) = -3 cos(4x) + 5</span> (where <span class="chem">x</span> is in radians)?</p>
      stem: "<p>関数 <span class=\"chem\">f(x) = -3 cos(4x) + 5</span>（<span class=\"chem\">x</span> はラジアン）の振幅と周期はどれですか？</p>",
      options: [
        // EN: Amplitude <span class="mono">= 3</span>, Period <span class="chem">= pi/2</span>
        "振幅 <span class=\"mono\">= 3</span>、周期 <span class=\"chem\">= pi/2</span>",
        // EN: Amplitude <span class="mono">= −3</span>, Period <span class="chem">= pi/2</span>
        "振幅 <span class=\"mono\">= −3</span>、周期 <span class=\"chem\">= pi/2</span>",
        // EN: Amplitude <span class="mono">= 3</span>, Period <span class="mono">= 4</span>
        "振幅 <span class=\"mono\">= 3</span>、周期 <span class=\"mono\">= 4</span>",
        // EN: Amplitude <span class="mono">= 5</span>, Period <span class="chem">= 8*pi</span>
        "振幅 <span class=\"mono\">= 5</span>、周期 <span class=\"chem\">= 8*pi</span>",
      ],
      hints: [
        // EN: Amplitude is <span class="chem">|a|</span> (always positive).
        "振幅は <span class=\"chem\">|a|</span>（常に正）です。",
        // EN: Period is <span class="chem">T = 2*pi / b</span>.
        "周期は <span class=\"chem\">T = 2*pi / b</span> です。",
      ],
      // EN: <div class="worked__math">Amplitude = |−3| = <b>3</b>, &nbsp;&nbsp; Period = <span class="frac"><span>2<i>π</i></span><span>4</span></span> = <b><span class="frac"><span><i>π</i></span><span>2</span></span></b></div>
      solution: "<div class=\"worked__math\">振幅 = |−3| = <b>3</b>, &nbsp;&nbsp; 周期 = <span class=\"frac\"><span>2<i>π</i></span><span>4</span></span> = <b><span class=\"frac\"><span><i>π</i></span><span>2</span></span></b></div>",
      misconception: {
        // EN (option B): Amplitude is always positive: |a| = |−3| = 3.
        "1": "振幅は常に正です：|a| = |−3| = 3。",
        // EN (option C): 4 is the frequency factor b; the period is T = 2π/b = 2π/4 = π/2.
        "2": "4 は角振動数 b であり、周期は T = 2π/b = 2π/4 = π/2 です。",
        // EN (option D): 5 is the vertical shift d (the principal axis y = 5), and T = 2π/b, not 2πb.
        "3": "5 は上下の平行移動 d（中心軸 y = 5）であり、また T = 2πb ではなく 2π/b です。",
      },
    },

    // ── t3-2-q004 · mcq · foundation · SL · SL 3.8 · 2 marks
    "t3-2-q004": {
      // EN: <p>How many solutions does the equation <span class="chem">sin(3x) = 1/2</span> have in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>?</p>
      stem: "<p>区間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> において、方程式 <span class=\"chem\">sin(3x) = 1/2</span> は何個の解をもちますか？</p>",
      options: [
        // EN: <span class="mono">6</span>
        "<span class=\"mono\">6</span>",
        // EN: <span class="mono">2</span>
        "<span class=\"mono\">2</span>",
        // EN: <span class="mono">3</span>
        "<span class=\"mono\">3</span>",
        // EN: <span class="mono">4</span>
        "<span class=\"mono\">4</span>",
      ],
      hints: [
        // EN: Transform the interval: if <span class="chem">0 &lt;= x &lt;= 2pi</span>, then <span class="chem">0 &lt;= 3x &lt;= 6pi</span> (three full revolutions).
        "区間を変換します：<span class=\"chem\">0 &lt;= x &lt;= 2pi</span> なら <span class=\"chem\">0 &lt;= 3x &lt;= 6pi</span>（3 周分）です。",
        // EN: Each full revolution of <span class="chem">2pi</span> contains 2 solutions to <span class="chem">sin u = 1/2</span>.
        "<span class=\"chem\">2pi</span> の 1 周ごとに <span class=\"chem\">sin u = 1/2</span> の解が 2 個ずつあります。",
      ],
      // EN: <p>Let <span class="chem">u = 3x in [0, 6pi]</span>. Since <span class="chem">sin u = 1/2</span> has 2 solutions in each <span class="chem">2pi</span> period, across 3 periods there are <span class="mono">3 × 2 = 6</span> solutions.</p>
      solution: "<p><span class=\"chem\">u = 3x in [0, 6pi]</span> とおきます。<span class=\"chem\">sin u = 1/2</span> は <span class=\"chem\">2pi</span> の 1 周期ごとに 2 個の解をもつため、3 周期では <span class=\"mono\">3 × 2 = 6</span> 個の解があります。</p>",
      misconception: {
        // EN (option B): sin u = 1/2 has 2 solutions per period, but sin(3x) completes 3 full periods on [0, 2π].
        "1": "sin u = 1/2 の解は 1 周期あたり 2 個ですが、sin(3x) は [0, 2π] で 3 周期分あります。",
        // EN (option C): Each of the 3 periods gives 2 solutions (one in Quadrant I, one in Quadrant II), so 3 × 2 = 6.
        "2": "3 つの各周期で 2 個ずつ解がある（第 1 象限と第 2 象限）ので、3 × 2 = 6 です。",
        // EN (option D): 4 solutions corresponds to sin(2x) = 1/2 on [0, 2π].
        "3": "4 個になるのは [0, 2π] での sin(2x) = 1/2 の場合です。",
      },
    },

    // ── t3-2-q005 · mcq · foundation · AHL · AHL 3.9 · 2 marks
    "t3-2-q005": {
      // EN: <p><strong>[AHL · Paper 1]</strong> What is the exact value of <span class="chem">arccos(-1/2) + arcsin(-1/2)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">arccos(-1/2) + arcsin(-1/2)</span> の正確な値はどれですか？</p>",
      options: [
        // EN: <span class="chem">pi / 2</span>
        "<span class=\"chem\">pi / 2</span>",
        // EN: <span class="mono">0</span>
        "<span class=\"mono\">0</span>",
        // EN: <span class="chem">5*pi / 6</span>
        "<span class=\"chem\">5*pi / 6</span>",
        // EN: <span class="chem">-pi / 2</span>
        "<span class=\"chem\">-pi / 2</span>",
      ],
      hints: [
        // EN: The principal range of <span class="chem">arccos</span> is <span class="chem">[0, pi]</span>, so <span class="chem">arccos(-1/2) = 2*pi/3</span>.
        "<span class=\"chem\">arccos</span> の主値の範囲は <span class=\"chem\">[0, pi]</span> なので、<span class=\"chem\">arccos(-1/2) = 2*pi/3</span> です。",
        // EN: The principal range of <span class="chem">arcsin</span> is <span class="chem">[-pi/2, pi/2]</span>, so <span class="chem">arcsin(-1/2) = -pi/6</span>.
        "<span class=\"chem\">arcsin</span> の主値の範囲は <span class=\"chem\">[-pi/2, pi/2]</span> なので、<span class=\"chem\">arcsin(-1/2) = -pi/6</span> です。",
      ],
      // EN: <div class="worked__math">arccos(−<span class="frac"><span>1</span><span>2</span></span>) + arcsin(−<span class="frac"><span>1</span><span>2</span></span>) = <span class="frac"><span>2<i>π</i></span><span>3</span></span> + (−<span class="frac"><span><i>π</i></span><span>6</span></span>) = <b><span class="frac"><span><i>π</i></span><span>2</span></span></b></div>
      solution: "<div class=\"worked__math\">arccos(−<span class=\"frac\"><span>1</span><span>2</span></span>) + arcsin(−<span class=\"frac\"><span>1</span><span>2</span></span>) = <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> + (−<span class=\"frac\"><span><i>π</i></span><span>6</span></span>) = <b><span class=\"frac\"><span><i>π</i></span><span>2</span></span></b></div>",
      misconception: {
        // EN (option B): You may have taken arccos(−1/2) = π/6 (the value of arcsin(1/2)). The principal values are arccos(−1/2) = 2π/3 and arcsin(−1/2) = −π/6.
        "1": "arccos(−1/2) を π/6（arcsin(1/2) の値）としてしまったのかもしれません。主値は arccos(−1/2) = 2π/3、arcsin(−1/2) = −π/6 です。",
        // EN (option C): You added +π/6 instead of −π/6 for arcsin(−1/2).
        "2": "arcsin(−1/2) に対して −π/6 ではなく +π/6 を足してしまいました。",
        // EN (option D): arccos(−1/2) is NOT −π/3! The range of arccos is [0, π], so arccos(−1/2) = 2π/3, while arcsin(−1/2) = −π/6. Check: arcsin x + arccos x = π/2 for all x ∈ [−1, 1].
        "3": "arccos(−1/2) は −π/3 ではありません！arccos の値域は [0, π] なので arccos(−1/2) = 2π/3、一方 arcsin(−1/2) = −π/6 です。確認：すべての x ∈ [−1, 1] に対して arcsin x + arccos x = π/2 です。",
      },
    },

    // ── t3-2-q006 · numeric · foundation · AHL · AHL 3.9 · 2 marks
    "t3-2-q006": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Given that <span class="chem">tan theta = 3/4</span>, find the exact value of <span class="chem">sec^2 theta</span> as a decimal.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">tan theta = 3/4</span> のとき、<span class=\"chem\">sec^2 theta</span> の正確な値を小数で求めなさい (Find)。</p>",
      hints: [
        // EN: Use the Pythagorean identity <span class="chem">1 + tan^2 theta = sec^2 theta</span> from the Formula Booklet.
        "公式集にある相互関係 <span class=\"chem\">1 + tan^2 theta = sec^2 theta</span> を使います。",
        // EN: Calculate <span class="chem">1 + (3/4)^2 = 1 + 9/16 = 25/16</span>.
        "<span class=\"chem\">1 + (3/4)^2 = 1 + 9/16 = 25/16</span> を計算します。",
      ],
      // EN: <div class="worked__math">sec<sup>2</sup><i>θ</i> = 1 + tan<sup>2</sup><i>θ</i> = 1 + <span class="frac"><span>9</span><span>16</span></span> = <b><span class="frac"><span>25</span><span>16</span></span> = 1.5625</b></div>
      solution: "<div class=\"worked__math\">sec<sup>2</sup><i>θ</i> = 1 + tan<sup>2</sup><i>θ</i> = 1 + <span class=\"frac\"><span>9</span><span>16</span></span> = <b><span class=\"frac\"><span>25</span><span>16</span></span> = 1.5625</b></div>",
    },

    // ── t3-2-q007 · numeric · exam · SL · SL 3.7 · 4 marks
    "t3-2-q007": {
      // EN: <p>A Ferris wheel rotates at a constant speed. A rider's height <span class="chem">h(t)</span> in metres above the ground at time <span class="chem">t</span> minutes is modelled by <span class="chem">h(t) = -15 cos((pi/5)t) + 17</span>. Find the first positive time <span class="chem">t</span> (in minutes) at which the rider reaches a height of <span class="mono">24.5 m</span>.</p>
      stem: "<p>観覧車が一定の速さで回転している。時刻 <span class=\"chem\">t</span>（分）における乗客の地上からの高さ <span class=\"chem\">h(t)</span>（メートル）が <span class=\"chem\">h(t) = -15 cos((pi/5)t) + 17</span> でモデル化されている。乗客が高さ <span class=\"mono\">24.5 m</span> に達する最初の正の時刻 <span class=\"chem\">t</span>（分）を求めなさい (Find)。</p>",
      hints: [
        // EN: Set <span class="chem">-15 cos((pi/5)t) + 17 = 24.5</span> and isolate <span class="chem">cos((pi/5)t)</span>.
        "<span class=\"chem\">-15 cos((pi/5)t) + 17 = 24.5</span> とおいて <span class=\"chem\">cos((pi/5)t)</span> を求めます。",
        // EN: You will get <span class="chem">cos((pi/5)t) = -0.5</span>, so the first positive angle is <span class="chem">(pi/5)t = 2*pi/3</span>.
        "<span class=\"chem\">cos((pi/5)t) = -0.5</span> が得られるので、最初の正の角は <span class=\"chem\">(pi/5)t = 2*pi/3</span> です。",
      ],
      // EN: <div class="worked__math">−15 cos(<span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i>) = 7.5 ⇒ cos(<span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i>) = −<span class="frac"><span>1</span><span>2</span></span> ⇒ <span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i> = <span class="frac"><span>2<i>π</i></span><span>3</span></span> ⇒ <i>t</i> = <b><span class="frac"><span>10</span><span>3</span></span> ≈ 3.33 min</b></div>
      solution: "<div class=\"worked__math\">−15 cos(<span class=\"frac\"><span><i>π</i></span><span>5</span></span><i>t</i>) = 7.5 ⇒ cos(<span class=\"frac\"><span><i>π</i></span><span>5</span></span><i>t</i>) = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <span class=\"frac\"><span><i>π</i></span><span>5</span></span><i>t</i> = <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> ⇒ <i>t</i> = <b><span class=\"frac\"><span>10</span><span>3</span></span> ≈ 3.33 分</b></div>",
    },

    // ── t3-2-q008 · mcq · exam · SL · SL 3.8 · 4 marks
    "t3-2-q008": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> Find the complete set of solutions to <span class="chem">sin 2x = sin x</span> on the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>
      stem: "<p><strong>[Paper 1 — 電卓不可]</strong> 区間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> において、方程式 <span class=\"chem\">sin 2x = sin x</span> のすべての解を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">0, pi/3, pi, 5*pi/3, 2*pi</span>
        "<span class=\"chem\">0, pi/3, pi, 5*pi/3, 2*pi</span>",
        // EN: <span class="chem">pi/3, 5*pi/3</span>
        "<span class=\"chem\">pi/3, 5*pi/3</span>",
        // EN: <span class="chem">0, pi/6, pi, 11*pi/6, 2*pi</span>
        "<span class=\"chem\">0, pi/6, pi, 11*pi/6, 2*pi</span>",
        // EN: <span class="chem">0, 2*pi/3, pi, 4*pi/3, 2*pi</span>
        "<span class=\"chem\">0, 2*pi/3, pi, 4*pi/3, 2*pi</span>",
      ],
      hints: [
        // EN: Move everything to one side and expand <span class="chem">sin 2x = 2 sin x cos x</span>: <span class="chem">2 sin x cos x - sin x = 0</span>.
        "すべてを左辺に移項し、<span class=\"chem\">sin 2x = 2 sin x cos x</span> を展開します：<span class=\"chem\">2 sin x cos x - sin x = 0</span>。",
        // EN: Factor out <span class="chem">sin x</span>: <span class="chem">sin x (2 cos x - 1) = 0</span>.
        "<span class=\"chem\">sin x</span> をくくり出します：<span class=\"chem\">sin x (2 cos x - 1) = 0</span>。",
      ],
      // EN: <div class="worked__math">sin <i>x</i>(2 cos <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = 0 (<i>x</i> = 0, <i>π</i>, 2<i>π</i>) &nbsp; or &nbsp; cos <i>x</i> = <span class="frac"><span>1</span><span>2</span></span> (<i>x</i> = <span class="frac"><span><i>π</i></span><span>3</span></span>, <span class="frac"><span>5<i>π</i></span><span>3</span></span>)</div>
      solution: "<div class=\"worked__math\">sin <i>x</i>(2 cos <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = 0 (<i>x</i> = 0, <i>π</i>, 2<i>π</i>) &nbsp; または &nbsp; cos <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> (<i>x</i> = <span class=\"frac\"><span><i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>5<i>π</i></span><span>3</span></span>)</div>",
      misconception: {
        // EN (option B): You divided both sides by sin x, losing all three roots where sin x = 0 (x = 0, π, 2π)!
        "1": "両辺を sin x で割ってしまったため、sin x = 0 となる 3 つの解（x = 0, π, 2π）をすべて失っています！",
        // EN (option C): cos x = 1/2 gives x = π/3 and 5π/3, not π/6 and 11π/6.
        "2": "cos x = 1/2 の解は π/6 と 11π/6 ではなく、π/3 と 5π/3 です。",
        // EN (option D): 2π/3 and 4π/3 correspond to cos x = −1/2, not +1/2.
        "3": "2π/3 と 4π/3 は +1/2 ではなく cos x = −1/2 の解です。",
      },
    },

    // ── t3-2-q009 · multi · exam · SL · SL 3.7 · 3 marks
    "t3-2-q009": {
      // EN: <p>The depth of water at a pier reaches a high tide of <span class="mono">8.2 m</span> at <span class="mono">t = 2</span> hours and the next low tide of <span class="mono">2.6 m</span> at <span class="mono">t = 8</span> hours. Which of the following equations correctly model the depth <span class="chem">y(t)</span>? Select all that apply.</p>
      stem: "<p>桟橋の水深が <span class=\"mono\">t = 2</span> 時間で満潮 <span class=\"mono\">8.2 m</span>、次の <span class=\"mono\">t = 8</span> 時間で干潮 <span class=\"mono\">2.6 m</span> に達する。水深 <span class=\"chem\">y(t)</span> を正しくモデル化している方程式はどれですか？当てはまるものをすべて選びなさい。</p>",
      options: [
        // EN: <span class="chem">y(t) = 2.8 cos((pi/6)(t - 2)) + 5.4</span>
        "<span class=\"chem\">y(t) = 2.8 cos((pi/6)(t - 2)) + 5.4</span>",
        // EN: <span class="chem">y(t) = -2.8 cos((pi/6)(t - 8)) + 5.4</span>
        "<span class=\"chem\">y(t) = -2.8 cos((pi/6)(t - 8)) + 5.4</span>",
        // EN: <span class="chem">y(t) = 2.8 sin((pi/6)(t + 1)) + 5.4</span>
        "<span class=\"chem\">y(t) = 2.8 sin((pi/6)(t + 1)) + 5.4</span>",
        // EN: <span class="chem">y(t) = 2.8 cos((pi/3)(t - 2)) + 5.4</span>
        "<span class=\"chem\">y(t) = 2.8 cos((pi/3)(t - 2)) + 5.4</span>",
        // EN: <span class="chem">y(t) = 5.6 cos((pi/6)(t - 2)) + 5.4</span>
        "<span class=\"chem\">y(t) = 5.6 cos((pi/6)(t - 2)) + 5.4</span>",
      ],
      hints: [
        // EN: Find amplitude <span class="chem">a = (8.2 - 2.6)/2 = 2.8</span>, mean line <span class="chem">d = (8.2 + 2.6)/2 = 5.4</span>, and period <span class="chem">T = 2(8 - 2) = 12</span> so <span class="chem">b = pi/6</span>.
        "振幅 <span class=\"chem\">a = (8.2 - 2.6)/2 = 2.8</span>、中心軸 <span class=\"chem\">d = (8.2 + 2.6)/2 = 5.4</span>、周期 <span class=\"chem\">T = 2(8 - 2) = 12</span> より <span class=\"chem\">b = pi/6</span> を求めます。",
        // EN: Check which phase shifts place a maximum of <span class="mono">8.2</span> at <span class="mono">t = 2</span> and a minimum of <span class="mono">2.6</span> at <span class="mono">t = 8</span>.
        "<span class=\"mono\">t = 2</span> で最大値 <span class=\"mono\">8.2</span>、<span class=\"mono\">t = 8</span> で最小値 <span class=\"mono\">2.6</span> となる位相のずれを確認します。",
      ],
      // EN: <p>With <span class="chem">a = 2.8, d = 5.4, b = pi/6</span>: <span class="chem">2.8 cos((pi/6)(t-2)) + 5.4</span> starts at a peak at <span class="mono">t = 2</span>; <span class="chem">-2.8 cos((pi/6)(t-8)) + 5.4</span> starts at a trough at <span class="mono">t = 8</span>; and <span class="chem">2.8 sin((pi/6)(t+1)) + 5.4</span> crosses the mean line rising at <span class="mono">t = −1</span> (a quarter-period before <span class="mono">t = 2</span>).</p>
      solution: "<p><span class=\"chem\">a = 2.8, d = 5.4, b = pi/6</span> より、<span class=\"chem\">2.8 cos((pi/6)(t-2)) + 5.4</span> は <span class=\"mono\">t = 2</span> で山になり、<span class=\"chem\">-2.8 cos((pi/6)(t-8)) + 5.4</span> は <span class=\"mono\">t = 8</span> で谷になり、<span class=\"chem\">2.8 sin((pi/6)(t+1)) + 5.4</span> は <span class=\"mono\">t = −1</span>（<span class=\"mono\">t = 2</span> の 1/4 周期前）で中心軸を上向きに横切ります。</p>",
      misconception: {
        // EN (option D): The time from high tide (t = 2) to low tide (t = 8) is half a period (T/2 = 6 h), so T = 12 h and b = 2π/12 = π/6, not π/3.
        "3": "満潮 (t = 2) から干潮 (t = 8) までの時間は半周期 (T/2 = 6 h) なので、T = 12 h であり b = 2π/12 = π/6（π/3 ではない）です。",
        // EN (option E): 5.6 m is the peak-to-trough range (8.2 − 2.6); the amplitude is half of that: a = 2.8 m.
        "4": "5.6 m は山から谷までの全幅 (8.2 − 2.6) であり、振幅はその半分の a = 2.8 m です。",
      },
    },

    // ── t3-2-q010 · numeric · exam · AHL · AHL 3.10 · 4 marks
    "t3-2-q010": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Acute angles <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">tan A = 1/4</span> and <span class="chem">tan B = 3/5</span>. Find the exact value of <span class="chem">tan(A + B)</span>.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 鋭角 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> が <span class=\"chem\">tan A = 1/4</span> かつ <span class=\"chem\">tan B = 3/5</span> を満たす。<span class=\"chem\">tan(A + B)</span> の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: Use the compound-angle identity <span class="chem">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>.
        "加法定理 <span class=\"chem\">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span> を使います。",
        // EN: Calculate <span class="chem">1/4 + 3/5 = 17/20</span> and <span class="chem">1 - (1/4)(3/5) = 17/20</span>.
        "<span class=\"chem\">1/4 + 3/5 = 17/20</span> と <span class=\"chem\">1 - (1/4)(3/5) = 17/20</span> を計算します。",
      ],
      // EN: <div class="worked__math">tan(<i>A</i> + <i>B</i>) = <span class="frac"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class="frac"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>
      solution: "<div class=\"worked__math\">tan(<i>A</i> + <i>B</i>) = <span class=\"frac\"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class=\"frac\"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>",
    },

    // ── t3-2-q011 · mcq · exam · AHL · AHL 3.9 · 4 marks
    "t3-2-q011": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Solving the equation <span class="chem">2 sec^2 x - 3 tan x - 4 = 0</span> leads to which quadratic equation in <span class="chem">tan x</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 方程式 <span class=\"chem\">2 sec^2 x - 3 tan x - 4 = 0</span> を変形すると、<span class=\"chem\">tan x</span> に関するどの 2 次方程式になりますか？</p>",
      options: [
        // EN: <span class="chem">2 tan^2 x - 3 tan x - 2 = 0</span>
        "<span class=\"chem\">2 tan^2 x - 3 tan x - 2 = 0</span>",
        // EN: <span class="chem">2 tan^2 x - 3 tan x - 6 = 0</span>
        "<span class=\"chem\">2 tan^2 x - 3 tan x - 6 = 0</span>",
        // EN: <span class="chem">2 tan^2 x - 3 tan x - 3 = 0</span>
        "<span class=\"chem\">2 tan^2 x - 3 tan x - 3 = 0</span>",
        // EN: <span class="chem">2 tan^2 x + 3 tan x - 2 = 0</span>
        "<span class=\"chem\">2 tan^2 x + 3 tan x - 2 = 0</span>",
      ],
      hints: [
        // EN: Substitute the Pythagorean identity <span class="chem">sec^2 x = 1 + tan^2 x</span>.
        "相互関係 <span class=\"chem\">sec^2 x = 1 + tan^2 x</span> を代入します。",
        // EN: Expand <span class="chem">2(1 + tan^2 x) - 3 tan x - 4 = 0</span>.
        "<span class=\"chem\">2(1 + tan^2 x) - 3 tan x - 4 = 0</span> を展開します。",
      ],
      // EN: <div class="worked__math">2(1 + tan<sup>2</sup><i>x</i>) − 3 tan <i>x</i> − 4 = 0 ⇒ <b>2 tan<sup>2</sup><i>x</i> − 3 tan <i>x</i> − 2 = 0</b> ⇒ (2 tan <i>x</i> + 1)(tan <i>x</i> − 2) = 0</div>
      solution: "<div class=\"worked__math\">2(1 + tan<sup>2</sup><i>x</i>) − 3 tan <i>x</i> − 4 = 0 ⇒ <b>2 tan<sup>2</sup><i>x</i> − 3 tan <i>x</i> − 2 = 0</b> ⇒ (2 tan <i>x</i> + 1)(tan <i>x</i> − 2) = 0</div>",
      misconception: {
        // EN (option B): You substituted sec²x = tan²x − 1 instead of 1 + tan²x.
        "1": "1 + tan²x ではなく sec²x = tan²x − 1 を代入してしまいました。",
        // EN (option C): You forgot to multiply the 1 in (1 + tan²x) by the coefficient 2.
        "2": "(1 + tan²x) の 1 に係数 2 を掛け忘れてしまいました。",
        // EN (option D): You flipped the sign of −3 tan x.
        "3": "−3 tan x の符号を逆にしてしまいました。",
      },
    },

    // ── t3-2-q012 · mcq · exam · AHL · AHL 3.9 · 4 marks
    "t3-2-q012": {
      // EN: <p><strong>[AHL · Paper 1]</strong> For <span class="chem">0 &lt; x &lt; 1</span>, which algebraic expression is identically equal to <span class="chem">sin(2 arccos x)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">0 &lt; x &lt; 1</span> のとき、<span class=\"chem\">sin(2 arccos x)</span> と恒等的に等しい代数式はどれですか？</p>",
      options: [
        // EN: <span class="chem">2x*sqrt(1 - x^2)</span>
        "<span class=\"chem\">2x*sqrt(1 - x^2)</span>",
        // EN: <span class="chem">2x^2 - 1</span>
        "<span class=\"chem\">2x^2 - 1</span>",
        // EN: <span class="chem">2*sqrt(1 - x^2)</span>
        "<span class=\"chem\">2*sqrt(1 - x^2)</span>",
        // EN: <span class="chem">1 - 2x^2</span>
        "<span class=\"chem\">1 - 2x^2</span>",
      ],
      hints: [
        // EN: Let <span class="chem">theta = arccos x</span>, so <span class="chem">cos theta = x</span> and <span class="chem">sin theta = sqrt(1 - x^2)</span>.
        "<span class=\"chem\">theta = arccos x</span> とおくと、<span class=\"chem\">cos theta = x</span> かつ <span class=\"chem\">sin theta = sqrt(1 - x^2)</span> です。",
        // EN: Use <span class="chem">sin(2theta) = 2 sin theta cos theta</span>.
        "<span class=\"chem\">sin(2theta) = 2 sin theta cos theta</span> を使います。",
      ],
      // EN: <div class="worked__math">Let <i>θ</i> = arccos <i>x</i> ⇒ cos <i>θ</i> = <i>x</i>, &nbsp; sin <i>θ</i> = √(1 − <i>x</i><sup>2</sup>) ⇒ sin 2<i>θ</i> = 2 sin <i>θ</i> cos <i>θ</i> = <b>2<i>x</i>√(1 − <i>x</i><sup>2</sup>)</b></div>
      solution: "<div class=\"worked__math\"><i>θ</i> = arccos <i>x</i> とおくと cos <i>θ</i> = <i>x</i>, &nbsp; sin <i>θ</i> = √(1 − <i>x</i><sup>2</sup>) ⇒ sin 2<i>θ</i> = 2 sin <i>θ</i> cos <i>θ</i> = <b>2<i>x</i>√(1 − <i>x</i><sup>2</sup>)</b></div>",
      misconception: {
        // EN (option B): 2x² − 1 is cos(2 arccos x), not sin(2 arccos x).
        "1": "2x² − 1 は sin(2 arccos x) ではなく cos(2 arccos x) です。",
        // EN (option C): You forgot the factor cos θ = x in sin(2θ) = 2 sin θ cos θ.
        "2": "sin(2θ) = 2 sin θ cos θ の cos θ = x を掛け忘れています。",
        // EN (option D): 1 − 2x² is cos(2 arcsin x).
        "3": "1 − 2x² は cos(2 arcsin x) です。",
      },
    },

    // ── t3-2-q013 · order · exam · SL · SL 3.8 · 3 marks
    "t3-2-q013": {
      // EN: <p>Put these steps in the correct order to find all solutions to <span class="chem">cos(2x - pi/3) = 1/2</span> on the domain <span class="chem">0 &lt;= x &lt;= pi</span>.</p>
      stem: "<p>定義域 <span class=\"chem\">0 &lt;= x &lt;= pi</span> で <span class=\"chem\">cos(2x - pi/3) = 1/2</span> のすべての解を求める手順を正しい順序に並べ替えなさい。</p>",
      options: [
        // EN: Let u = 2x − π/3 and transform the domain 0 ≤ x ≤ π into −π/3 ≤ u ≤ 5π/3.
        "u = 2x − π/3 とおき、定義域 0 ≤ x ≤ π を −π/3 ≤ u ≤ 5π/3 に変換する。",
        // EN: Identify the acute reference angle α = arccos(1/2) = π/3.
        "鋭角の基準角 α = arccos(1/2) = π/3 を求める。",
        // EN: List all angles u in Quadrants I and IV that fall inside [−π/3, 5π/3]: u = −π/3, π/3, 5π/3.
        "[−π/3, 5π/3] の範囲内にある第 1・第 4 象限の角 u をすべて書き出す：u = −π/3, π/3, 5π/3。",
        // EN: Add π/3 to each value of u and divide by 2 to obtain x = 0, π/3, π.
        "各 u の値に π/3 を足して 2 で割り、x = 0, π/3, π を得る。",
      ],
      hints: [
        // EN: Always transform the domain for the inner argument <span class="chem">u = 2x - pi/3</span> first!
        "必ず最初に内側の式 <span class=\"chem\">u = 2x - pi/3</span> の定義域を変換しましょう！",
        // EN: Only divide by 2 at the very last step.
        "2 で割るのは一番最後のステップだけにしてください。",
      ],
      // EN: <p>Transforming the interval to <span class="chem">[-pi/3, 5pi/3]</span> first ensures you capture all three roots <span class="chem">u = -pi/3, pi/3, 5pi/3</span>, giving <span class="chem">x = 0, pi/3, pi</span>.</p>
      solution: "<p>最初に区間を <span class=\"chem\">[-pi/3, 5pi/3]</span> に変換することで、3 つの解 <span class=\"chem\">u = -pi/3, pi/3, 5pi/3</span> をすべて漏れなく捉え、<span class=\"chem\">x = 0, pi/3, pi</span> を得ることができます。</p>",
    },

    // ── t3-2-q014 · short · exam · SL · SL 3.6 · 5 marks
    "t3-2-q014": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> Prove the identity <span class="chem">(sin 2theta) / (1 + cos 2theta) = tan theta</span>, and hence find the exact value of <span class="chem">tan(pi/8)</span> in the form <span class="chem">sqrt(a) - b</span>.</p>
      stem: "<p><strong>[Paper 1 — 電卓不可]</strong> 恒等式 <span class=\"chem\">(sin 2theta) / (1 + cos 2theta) = tan theta</span> を証明し (Prove)、これを用いて (hence) <span class=\"chem\">tan(pi/8)</span> の厳密値を <span class=\"chem\">sqrt(a) - b</span> の形で求めなさい (Find)。</p>",
      hints: [
        // EN: Choose <span class="chem">cos 2theta = 2 cos^2 theta - 1</span> in the denominator so that <span class="mono">+1</span> and <span class="mono">−1</span> cancel!
        "分母では <span class=\"mono\">+1</span> と <span class=\"mono\">−1</span> が打ち消し合うように <span class=\"chem\">cos 2theta = 2 cos^2 theta - 1</span> を選びましょう！",
        // EN: Then set <span class="chem">theta = pi/8</span> so <span class="chem">2theta = pi/4</span>.
        "次に <span class=\"chem\">theta = pi/8</span> とおくと <span class=\"chem\">2theta = pi/4</span> になります。",
      ],
      // EN: <p>tan(π/8) = √2 − 1.</p>
      answer: "<p>tan(π/8) = √2 − 1。</p>",
      markscheme: [
        // EN: M1: Substitute sin 2θ = 2 sin θ cos θ and cos 2θ = 2 cos²θ − 1 into the LHS.
        "M1：sin 2θ = 2 sin θ cos θ と cos 2θ = 2 cos²θ − 1 を左辺に代入する。",
        // EN: A1: Simplify LHS = (2 sin θ cos θ) / (1 + 2 cos²θ − 1) = (2 sin θ cos θ) / (2 cos²θ) = sin θ / cos θ = tan θ (AG).
        "A1：左辺 = (2 sin θ cos θ) / (1 + 2 cos²θ − 1) = (2 sin θ cos θ) / (2 cos²θ) = sin θ / cos θ = tan θ と整理する (AG)。",
        // EN: M1: Substitute θ = π/8 so 2θ = π/4: tan(π/8) = sin(π/4) / (1 + cos(π/4)).
        "M1：θ = π/8（2θ = π/4）を代入する：tan(π/8) = sin(π/4) / (1 + cos(π/4))。",
        // EN: A1: Write (√2/2) / (1 + √2/2) = √2 / (2 + √2) = 1 / (√2 + 1).
        "A1：(√2/2) / (1 + √2/2) = √2 / (2 + √2) = 1 / (√2 + 1) と書く。",
        // EN: A1: Rationalize the denominator: (√2 − 1) / ((√2 + 1)(√2 − 1)) = √2 − 1.
        "A1：分母を有理化する：(√2 − 1) / ((√2 + 1)(√2 − 1)) = √2 − 1。",
      ],
    },

    // ── t3-2-q015 · numeric · challenge · AHL · AHL 3.10 · 5 marks
    "t3-2-q015": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Solve the equation <span class="chem">arctan(x) + arctan(2x) = pi/4</span> for <span class="chem">x &gt; 0</span>. Give your answer in the form <span class="chem">(a + sqrt(b))/c</span>, where <span class="chem">a, b, c</span> are integers.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">x &gt; 0</span> のとき、方程式 <span class=\"chem\">arctan(x) + arctan(2x) = pi/4</span> を解きなさい。答えは <span class=\"chem\">(a + sqrt(b))/c</span> の形で表しなさい。ただし <span class=\"chem\">a, b, c</span> は整数とする。</p>",
      hints: [
        // EN: Take the tangent of both sides using <span class="chem">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span>: <span class="chem">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>.
        "<span class=\"chem\">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span> を使って両辺のタンジェントをとります：<span class=\"chem\">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>。",
        // EN: Solve the quadratic <span class="chem">2x^2 + 3x - 1 = 0</span> and keep the positive root <span class="chem">x = (-3 + sqrt(17))/4</span>.
        "2 次方程式 <span class=\"chem\">2x^2 + 3x - 1 = 0</span> を解き、正の解 <span class=\"chem\">x = (-3 + sqrt(17))/4</span> を採用します。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class="frac"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class=\"frac\"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>",
    },

    // ── t3-2-q016 · mcq · challenge · AHL · AHL 3.10 · 5 marks
    "t3-2-q016": {
      // EN: <p><strong>[AHL · Paper 1]</strong> What is the exact value of <span class="chem">cos 15° = cos(pi/12)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">cos 15° = cos(pi/12)</span> の正確な値はどれですか？</p>",
      options: [
        // EN: <span class="chem">(sqrt(6) + sqrt(2)) / 4</span>
        "<span class=\"chem\">(sqrt(6) + sqrt(2)) / 4</span>",
        // EN: <span class="chem">(sqrt(6) - sqrt(2)) / 4</span>
        "<span class=\"chem\">(sqrt(6) - sqrt(2)) / 4</span>",
        // EN: <span class="chem">(sqrt(3) + 1) / 2</span>
        "<span class=\"chem\">(sqrt(3) + 1) / 2</span>",
        // EN: <span class="chem">sqrt(2 + sqrt(3)) / 4</span>
        "<span class=\"chem\">sqrt(2 + sqrt(3)) / 4</span>",
      ],
      hints: [
        // EN: Write <span class="mono">15° = 45° − 30°</span> (or <span class="chem">pi/12 = pi/4 - pi/6</span>).
        "<span class=\"mono\">15° = 45° − 30°</span>（または <span class=\"chem\">pi/12 = pi/4 - pi/6</span>）と表します。",
        // EN: Expand <span class="chem">cos(45° - 30°) = cos 45° cos 30° + sin 45° sin 30°</span>.
        "<span class=\"chem\">cos(45° - 30°) = cos 45° cos 30° + sin 45° sin 30°</span> と展開します。",
      ],
      // EN: <div class="worked__math">cos(45° − 30°) = <span class="frac"><span>√2</span><span>2</span></span>·<span class="frac"><span>√3</span><span>2</span></span> + <span class="frac"><span>√2</span><span>2</span></span>·<span class="frac"><span>1</span><span>2</span></span> = <b><span class="frac"><span>√6 + √2</span><span>4</span></span></b></div>
      solution: "<div class=\"worked__math\">cos(45° − 30°) = <span class=\"frac\"><span>√2</span><span>2</span></span>·<span class=\"frac\"><span>√3</span><span>2</span></span> + <span class=\"frac\"><span>√2</span><span>2</span></span>·<span class=\"frac\"><span>1</span><span>2</span></span> = <b><span class=\"frac\"><span>√6 + √2</span><span>4</span></span></b></div>",
      misconception: {
        // EN (option B): (√6 − √2)/4 is sin 15° = cos 75°, because cos(A − B) has a PLUS sign: cos A cos B + sin A sin B.
        "1": "(√6 − √2)/4 は sin 15° = cos 75° です。cos(A − B) はプラス符号（cos A cos B + sin A sin B）になります。",
        // EN (option C): You treated cos 45° and sin 45° as 1, but each is √2/2, so the result is (√2/2)(√3/2 + 1/2) = (√6 + √2)/4.
        "2": "cos 45° と sin 45° を 1 として計算しています。どちらも √2/2 なので、結果は (√2/2)(√3/2 + 1/2) = (√6 + √2)/4 です。",
        // EN (option D): Using the half-angle identity gives √(2 + √3) / 2, with denominator 2, not 4.
        "3": "半角の公式を使うと分母は 4 ではなく 2 になり、√(2 + √3) / 2 となります。",
      },
    },

    // ── t3-2-q017 · short · challenge · AHL · AHL 3.10 · 5 marks
    "t3-2-q017": {
      // EN: <p><strong>[AHL · Paper 1]</strong> In triangle <span class="chem">ABC</span>, none of the angles is <span class="mono">90°</span>. Using the compound-angle identity for <span class="chem">tan(A + B)</span> and the fact that <span class="chem">A + B + C = pi</span>, prove that <span class="chem">tan A + tan B + tan C = tan A tan B tan C</span>.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 三角形 <span class=\"chem\">ABC</span> のどの角も <span class=\"mono\">90°</span> ではないとする。<span class=\"chem\">tan(A + B)</span> の加法定理と <span class=\"chem\">A + B + C = pi</span> を用いて、<span class=\"chem\">tan A + tan B + tan C = tan A tan B tan C</span> が成り立つことを証明しなさい (Prove)。</p>",
      hints: [
        // EN: Start with <span class="chem">A + B = pi - C</span> and take <span class="chem">tan</span> of both sides.
        "<span class=\"chem\">A + B = pi - C</span> から始めて、両辺の <span class=\"chem\">tan</span> をとります。",
        // EN: Recall that <span class="chem">tan(pi - C) = -tan C</span>.
        "<span class=\"chem\">tan(pi - C) = -tan C</span> であることを思い出しましょう。",
      ],
      // EN: <p>Since <i>A</i> + <i>B</i> = <i>π</i> − <i>C</i>, taking tan of both sides gives (tan <i>A</i> + tan <i>B</i>)/(1 − tan <i>A</i> tan <i>B</i>) = −tan <i>C</i>, which rearranges to tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i>.</p>
      answer: "<p><i>A</i> + <i>B</i> = <i>π</i> − <i>C</i> より両辺の tan をとると (tan <i>A</i> + tan <i>B</i>)/(1 − tan <i>A</i> tan <i>B</i>) = −tan <i>C</i> となり、整理すると tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i> が得られる。</p>",
      markscheme: [
        // EN: M1: Write A + B = π − C from the angle sum of a triangle.
        "M1：三角形の内角の和より A + B = π − C と書く。",
        // EN: A1: Apply tangent to both sides: tan(A + B) = tan(π − C) = −tan C.
        "A1：両辺のタンジェントをとる：tan(A + B) = tan(π − C) = −tan C。",
        // EN: M1: Expand the LHS using the compound-angle formula: (tan A + tan B) / (1 − tan A tan B) = −tan C.
        "M1：左辺を加法定理で展開する：(tan A + tan B) / (1 − tan A tan B) = −tan C。",
        // EN: M1: Multiply both sides by (1 − tan A tan B): tan A + tan B = −tan C + tan A tan B tan C.
        "M1：両辺に (1 − tan A tan B) を掛ける：tan A + tan B = −tan C + tan A tan B tan C。",
        // EN: A1: Rearrange to obtain tan A + tan B + tan C = tan A tan B tan C (AG).
        "A1：整理して tan A + tan B + tan C = tan A tan B tan C を得る (AG)。",
      ],
    },

    // ── t3-2-q018 · mcq · exam · AHL · AHL 3.11 · 4 marks
    "t3-2-q018": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Given that <span class="chem">sin x = k</span>, where <span class="chem">0 &lt; x &lt; pi/2</span>, which expression is equal to <span class="chem">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">sin x = k</span>（ただし <span class=\"chem\">0 &lt; x &lt; pi/2</span>）のとき、<span class=\"chem\">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span> に等しい式はどれですか？</p>",
      options: [
        // EN: <span class="chem">k / sqrt(1 - k^2)</span>
        "<span class=\"chem\">k / sqrt(1 - k^2)</span>",
        // EN: <span class="chem">2k + k / sqrt(1 - k^2)</span>
        "<span class=\"chem\">2k + k / sqrt(1 - k^2)</span>",
        // EN: <span class="chem">-k / sqrt(1 - k^2)</span>
        "<span class=\"chem\">-k / sqrt(1 - k^2)</span>",
        // EN: <span class="chem">-2k + k / sqrt(1 - k^2)</span>
        "<span class=\"chem\">-2k + k / sqrt(1 - k^2)</span>",
      ],
      hints: [
        // EN: Use the symmetry identities <span class="chem">sin(pi - x) = sin x</span>, <span class="chem">cos(pi/2 + x) = -sin x</span> and <span class="chem">tan(pi + x) = tan x</span>.
        "対称性の恒等式 <span class=\"chem\">sin(pi - x) = sin x</span>、<span class=\"chem\">cos(pi/2 + x) = -sin x</span>、<span class=\"chem\">tan(pi + x) = tan x</span> を使いましょう。",
        // EN: Since <span class="chem">x</span> is acute, <span class="chem">cos x = sqrt(1 - k^2)</span>, so <span class="chem">tan x = k / sqrt(1 - k^2)</span>.
        "<span class=\"chem\">x</span> は鋭角なので <span class=\"chem\">cos x = sqrt(1 - k^2)</span>、よって <span class=\"chem\">tan x = k / sqrt(1 - k^2)</span> です。",
      ],
      // EN: <div class="worked__math">sin(<i>π</i> − <i>x</i>) + cos(<span class="frac"><span><i>π</i></span><span>2</span></span> + <i>x</i>) + tan(<i>π</i> + <i>x</i>) = <i>k</i> − <i>k</i> + tan <i>x</i> = <b><span class="frac"><span><i>k</i></span><span>√(1 − <i>k</i><sup>2</sup>)</span></span></b></div>
      solution: "<div class=\"worked__math\">sin(<i>π</i> − <i>x</i>) + cos(<span class=\"frac\"><span><i>π</i></span><span>2</span></span> + <i>x</i>) + tan(<i>π</i> + <i>x</i>) = <i>k</i> − <i>k</i> + tan <i>x</i> = <b><span class=\"frac\"><span><i>k</i></span><span>√(1 − <i>k</i><sup>2</sup>)</span></span></b></div>",
      misconception: {
        // EN (option B): cos(π/2 + x) = −sin x, not +sin x: adding π/2 moves the point into the second quadrant, where cosine is negative.
        "1": "cos(π/2 + x) は +sin x ではなく −sin x です。π/2 を加えると点は第 2 象限に移り、そこではコサインが負になります。",
        // EN (option C): tan has period π, so tan(π + x) = +tan x. The half-turn changes the sign of both sin and cos, so their ratio keeps its sign.
        "2": "tan の周期は π なので tan(π + x) = +tan x です。半回転で sin と cos の符号が両方変わるので、その比の符号は変わりません。",
        // EN (option D): sin(π − x) = +sin x, because the sine graph is symmetric about x = π/2. Only cos(π/2 + x) contributes −k.
        "3": "正弦曲線は x = π/2 に関して対称なので sin(π − x) = +sin x です。−k になるのは cos(π/2 + x) だけです。",
      },
    },

    // ── t3-2-q019 · numeric · exam · SL · SL 3.7, 3.8 · 4 marks
    "t3-2-q019": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> How many solutions does the equation <span class="chem">tan(2x) = sqrt(3)</span> have in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>?</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> 方程式 <span class=\"chem\">tan(2x) = sqrt(3)</span> は区間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> にいくつの解をもちますか？</p>",
      hints: [
        // EN: Let <span class="chem">u = 2x</span>, so <span class="chem">0 &lt;= u &lt;= 4pi</span>. The graph of <span class="chem">tan u</span> has period <span class="chem">pi</span>, so <span class="chem">tan u = sqrt(3)</span> has one solution in each interval of length <span class="chem">pi</span>.
        "<span class=\"chem\">u = 2x</span> とおくと <span class=\"chem\">0 &lt;= u &lt;= 4pi</span> です。<span class=\"chem\">tan u</span> のグラフの周期は <span class=\"chem\">pi</span> なので、<span class=\"chem\">tan u = sqrt(3)</span> は長さ <span class=\"chem\">pi</span> の区間ごとに解を 1 つもちます。",
        // EN: List <span class="chem">u = pi/3 + k*pi</span> for <span class="chem">k = 0, 1, 2, ...</span> while <span class="chem">u &lt;= 4pi</span>.
        "<span class=\"chem\">k = 0, 1, 2, ...</span> に対して <span class=\"chem\">u = pi/3 + k*pi</span> を、<span class=\"chem\">u &lt;= 4pi</span> である限り書き出しましょう。",
      ],
      // EN: <div class="worked__math"><i>u</i> = 2<i>x</i> ∈ [0, 4<i>π</i>]: &nbsp; <i>u</i> = <span class="frac"><span><i>π</i></span><span>3</span></span>, <span class="frac"><span>4<i>π</i></span><span>3</span></span>, <span class="frac"><span>7<i>π</i></span><span>3</span></span>, <span class="frac"><span>10<i>π</i></span><span>3</span></span> ⇒ <i>x</i> = <span class="frac"><span><i>π</i></span><span>6</span></span>, <span class="frac"><span>2<i>π</i></span><span>3</span></span>, <span class="frac"><span>7<i>π</i></span><span>6</span></span>, <span class="frac"><span>5<i>π</i></span><span>3</span></span>, so there are <b>4</b> solutions.</div>
      solution: "<div class=\"worked__math\"><i>u</i> = 2<i>x</i> ∈ [0, 4<i>π</i>]: &nbsp; <i>u</i> = <span class=\"frac\"><span><i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>4<i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>7<i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>10<i>π</i></span><span>3</span></span>  ⇒  <i>x</i> = <span class=\"frac\"><span><i>π</i></span><span>6</span></span>, <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>7<i>π</i></span><span>6</span></span>, <span class=\"frac\"><span>5<i>π</i></span><span>3</span></span> なので、解は <b>4</b> 個です。</div>",
    },

  }
});
