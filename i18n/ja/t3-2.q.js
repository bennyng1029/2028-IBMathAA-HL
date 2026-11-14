/* t3-2.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't3-2.q', {
  questions: {

    // ── t3-2-q001 · mcq · foundation · SL · SL 3.5 · 1 mark
    "t3-2-q001": {
      // EN: <p>What is the exact value of <span class="chem">sin(5*pi/6) + cos(2*pi/3)</span>?</p>
      stem: "<p><span class=\"chem\">sin(5*pi/6) + cos(2*pi/3)</span> の正確な値はどれですか？</p>",
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
      // EN: <p>Given that <span class="chem">cos theta = -3/5</span> and <span class="chem">pi/2 &lt; theta &lt; pi</span>, find the exact value of <span class="chem">sin 2theta</span>.</p>
      stem: "<p><span class=\"chem\">cos theta = -3/5</span> かつ <span class=\"chem\">pi/2 &lt; theta &lt; pi</span> のとき、<span class=\"chem\">sin 2theta</span> の正確な値を求めなさい (Find)。</p>",
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
      // EN: <p>What is the exact value of <span class="chem">arccos(-1/2) + arcsin(-1/2)</span>?</p>
      stem: "<p><span class=\"chem\">arccos(-1/2) + arcsin(-1/2)</span> の正確な値はどれですか？</p>",
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
      // EN: <p>Given that <span class="chem">tan theta = 3/4</span>, find the exact value of <span class="chem">sec^2 theta</span>.</p>
      stem: "<p><span class=\"chem\">tan theta = 3/4</span> のとき、<span class=\"chem\">sec^2 theta</span> の正確な値を求めなさい (Find)。</p>",
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

    // ── t3-2-q008 · mcq · exam · SL · SL 3.8 · 2 marks
    "t3-2-q008": {
      // EN: <p>Find the complete set of solutions to <span class="chem">sin 2x = sin x</span> on the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>
      stem: "<p>区間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> において、方程式 <span class=\"chem\">sin 2x = sin x</span> のすべての解を求めなさい (Find)。</p>",
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
      // EN: <p>Acute angles <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">tan A = 1/4</span> and <span class="chem">tan B = 3/5</span>. Find the exact value of <span class="chem">tan(A + B)</span>.</p>
      stem: "<p>鋭角 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> が <span class=\"chem\">tan A = 1/4</span> かつ <span class=\"chem\">tan B = 3/5</span> を満たす。<span class=\"chem\">tan(A + B)</span> の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: Use the compound-angle identity <span class="chem">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>.
        "加法定理 <span class=\"chem\">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span> を使います。",
        // EN: Calculate <span class="chem">1/4 + 3/5 = 17/20</span> and <span class="chem">1 - (1/4)(3/5) = 17/20</span>.
        "<span class=\"chem\">1/4 + 3/5 = 17/20</span> と <span class=\"chem\">1 - (1/4)(3/5) = 17/20</span> を計算します。",
      ],
      // EN: <div class="worked__math">tan(<i>A</i> + <i>B</i>) = <span class="frac"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class="frac"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>
      solution: "<div class=\"worked__math\">tan(<i>A</i> + <i>B</i>) = <span class=\"frac\"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class=\"frac\"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>",
    },

    // ── t3-2-q011 · mcq · exam · AHL · AHL 3.9 · 2 marks
    "t3-2-q011": {
      // EN: <p>Solving the equation <span class="chem">2 sec^2 x - 3 tan x - 4 = 0</span> leads to which quadratic equation in <span class="chem">tan x</span>?</p>
      stem: "<p>方程式 <span class=\"chem\">2 sec^2 x - 3 tan x - 4 = 0</span> を変形すると、<span class=\"chem\">tan x</span> に関するどの 2 次方程式になりますか？</p>",
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

    // ── t3-2-q012 · mcq · exam · AHL · AHL 3.9 · 2 marks
    "t3-2-q012": {
      // EN: <p>For <span class="chem">0 &lt; x &lt; 1</span>, which algebraic expression is identically equal to <span class="chem">sin(2 arccos x)</span>?</p>
      stem: "<p><span class=\"chem\">0 &lt; x &lt; 1</span> のとき、<span class=\"chem\">sin(2 arccos x)</span> と恒等的に等しい代数式はどれですか？</p>",
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
      // EN: <p>Prove the identity <span class="chem">(sin 2theta) / (1 + cos 2theta) = tan theta</span>, and hence find the exact value of <span class="chem">tan(pi/8)</span> in the form <span class="chem">sqrt(a) - b</span>.</p>
      stem: "<p>恒等式 <span class=\"chem\">(sin 2theta) / (1 + cos 2theta) = tan theta</span> を証明し (Prove)、これを用いて (hence) <span class=\"chem\">tan(pi/8)</span> の厳密値を <span class=\"chem\">sqrt(a) - b</span> の形で求めなさい (Find)。</p>",
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
      // EN: <p>Solve the equation <span class="chem">arctan(x) + arctan(2x) = pi/4</span> for <span class="chem">x &gt; 0</span>. Give your answer in the form <span class="chem">(a + sqrt(b))/c</span>, where <span class="chem">a, b, c</span> are integers.</p>
      stem: "<p><span class=\"chem\">x &gt; 0</span> のとき、方程式 <span class=\"chem\">arctan(x) + arctan(2x) = pi/4</span> を解きなさい。答えは <span class=\"chem\">(a + sqrt(b))/c</span> の形で表しなさい。ただし <span class=\"chem\">a, b, c</span> は整数とする。</p>",
      hints: [
        // EN: Decode: a sum of two arctans is an angle, so take <span class="chem">tan</span> of both sides: <span class="chem">tan(A + B)</span> turns the equation into algebra in <span class="chem">x</span>. The condition <span class="chem">x &gt; 0</span> tells you which root to keep.
        "解読：2 つの arctan の和は 1 つの角なので、両辺の <span class=\"chem\">tan</span> をとります。<span class=\"chem\">tan(A + B)</span> の公式で方程式は <span class=\"chem\">x</span> の代数方程式になります。条件 <span class=\"chem\">x &gt; 0</span> から、どの解を採用するかが決まります。",
        // EN: Take the tangent of both sides using <span class="chem">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span>: <span class="chem">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>.
        "<span class=\"chem\">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span> を使って両辺のタンジェントをとります：<span class=\"chem\">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>。",
        // EN: Solve the quadratic <span class="chem">2x^2 + 3x - 1 = 0</span> and keep the positive root <span class="chem">x = (-3 + sqrt(17))/4</span>.
        "2 次方程式 <span class=\"chem\">2x^2 + 3x - 1 = 0</span> を解き、正の解 <span class=\"chem\">x = (-3 + sqrt(17))/4</span> を採用します。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class="frac"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class=\"frac\"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>",
    },

    // ── t3-2-q016 · mcq · exam · AHL · AHL 3.10 · 2 marks
    "t3-2-q016": {
      // EN: <p>What is the exact value of <span class="chem">cos 15° = cos(pi/12)</span>?</p>
      stem: "<p><span class=\"chem\">cos 15° = cos(pi/12)</span> の正確な値はどれですか？</p>",
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
      // EN: <p>In triangle <span class="chem">ABC</span>, none of the angles is <span class="mono">90°</span>. Using the compound-angle identity for <span class="chem">tan(A + B)</span> and the fact that <span class="chem">A + B + C = pi</span>, prove that <span class="chem">tan A + tan B + tan C = tan A tan B tan C</span>.</p>
      stem: "<p>三角形 <span class=\"chem\">ABC</span> のどの角も <span class=\"mono\">90°</span> ではないとする。<span class=\"chem\">tan(A + B)</span> の加法定理と <span class=\"chem\">A + B + C = pi</span> を用いて、<span class=\"chem\">tan A + tan B + tan C = tan A tan B tan C</span> が成り立つことを証明しなさい (Prove)。</p>",
      hints: [
        // EN: Decode: the condition <span class="chem">A + B + C = pi</span> links the three angles, so write <span class="chem">C = pi - (A + B)</span>. Then the <span class="chem">tan(A + B)</span> identity turns the statement into algebra in <span class="chem">tan A</span>, <span class="chem">tan B</span> and <span class="chem">tan C</span>.
        "解読：条件 <span class=\"chem\">A + B + C = pi</span> は 3 つの角を結びつけているので、<span class=\"chem\">C = pi - (A + B)</span> と書きます。すると <span class=\"chem\">tan(A + B)</span> の公式により、示すべき式は <span class=\"chem\">tan A</span>、<span class=\"chem\">tan B</span>、<span class=\"chem\">tan C</span> の代数の問題になります。",
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
        // EN: M1: Multiply both sides by (1 − tan A tan B).
        "M1：両辺に (1 − tan A tan B) を掛ける。",
        // EN: A1: tan A + tan B = −tan C + tan A tan B tan C, which rearranges to tan A + tan B + tan C = tan A tan B tan C (AG).
        "A1：tan A + tan B = −tan C + tan A tan B tan C となり、整理すると tan A + tan B + tan C = tan A tan B tan C を得る (AG)。",
      ],
    },

    // ── t3-2-q018 · mcq · exam · AHL · AHL 3.11 · 2 marks
    "t3-2-q018": {
      // EN: <p>Given that <span class="chem">sin x = k</span>, where <span class="chem">0 &lt; x &lt; pi/2</span>, which expression is equal to <span class="chem">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span>?</p>
      stem: "<p><span class=\"chem\">sin x = k</span>（ただし <span class=\"chem\">0 &lt; x &lt; pi/2</span>）のとき、<span class=\"chem\">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span> に等しい式はどれですか？</p>",
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
      // EN: <p>How many solutions does the equation <span class="chem">tan(2x) = sqrt(3)</span> have in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>?</p>
      stem: "<p>方程式 <span class=\"chem\">tan(2x) = sqrt(3)</span> は区間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> にいくつの解をもちますか？</p>",
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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't3-2.q', {
  questions: {

    // ── t3-2-q020 · numeric · exam · SL · SL 3.7, 3.8 · 4 marks
    "t3-2-q020": {
      // EN: <p>A Ferris wheel has a diameter of 90 m and its lowest point is 5 m above the ground. It turns at a constant speed and completes one revolution every 18 minutes. A rider boards at the lowest point at <span class="chem">t = 0</span>. The height of the rider above the ground, <span class="chem">h</span> metres, <span class="chem">t</span> minutes after boarding is modelled by <span class="chem">h(t) = 50 - 45 cos((pi/9)t)</span>.</p><p>Find the length of time, in minutes, during one revolution for which the rider is more than 70 m above the ground. Give your answer to 3 significant figures.</p>
      stem: "<p>直径 90 m の観覧車があり、その最下点は地上 5 m の高さにある。観覧車は一定の速さで回転し、18 分ごとに一周する。乗客は <span class=\"chem\">t = 0</span> のときに最下点で乗り込む。乗り込んでから <span class=\"chem\">t</span> 分後の乗客の地上からの高さ <span class=\"chem\">h</span> メートルは <span class=\"chem\">h(t) = 50 - 45 cos((pi/9)t)</span> でモデル化される。</p><p>一周する間に、乗客が地上 70 m より高い位置にいる時間の長さ（分）を求めなさい (Find)。答えは有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: you are asked for a duration, not a time. Find the two times in <span class="chem">0 &lt;= t &lt;= 18</span> at which <span class="chem">h(t) = 70</span>, then subtract.
        "解読：問われているのは時刻ではなく、時間の長さです。<span class=\"chem\">0 &lt;= t &lt;= 18</span> の範囲で <span class=\"chem\">h(t) = 70</span> となる二つの時刻を求め、その差をとります。",
        // EN: On your GDC, graph <span class="chem">y = 50 - 45 cos((pi/9)x)</span> and <span class="chem">y = 70</span> for <span class="chem">0 &lt;= x &lt;= 18</span> and find both intersections.
        "GDC で <span class=\"chem\">0 &lt;= x &lt;= 18</span> の範囲に <span class=\"chem\">y = 50 - 45 cos((pi/9)x)</span> と <span class=\"chem\">y = 70</span> のグラフを描き、二つの交点を求めましょう。",
        // EN: Or by hand: <span class="chem">cos((pi/9)t) = -4/9</span>, so <span class="chem">t_1 = (9/pi) arccos(-4/9)</span> and, by symmetry about <span class="chem">t = 9</span>, <span class="chem">t_2 = 18 - t_1</span>.
        "手計算なら：<span class=\"chem\">cos((pi/9)t) = -4/9</span> なので <span class=\"chem\">t_1 = (9/pi) arccos(-4/9)</span>、そして <span class=\"chem\">t = 9</span> に関する対称性から <span class=\"chem\">t_2 = 18 - t_1</span> です。",
      ],
      // EN: <p><span class="chem">50 - 45 cos((pi/9)t) = 70</span> gives <span class="chem">cos((pi/9)t) = -4/9</span>. The GDC gives <span class="chem">t_1 = 5.8194…</span> and <span class="chem">t_2 = 12.1806…</span> minutes.</p><p>Time above 70 m <span class="chem">= t_2 - t_1 = 6.3612…</span>, so <b>6.36 minutes</b>.</p>
      solution: "<p><span class=\"chem\">50 - 45 cos((pi/9)t) = 70</span> より <span class=\"chem\">cos((pi/9)t) = -4/9</span> です。GDC により <span class=\"chem\">t_1 = 5.8194…</span> 分、<span class=\"chem\">t_2 = 12.1806…</span> 分が得られます。</p><p>70 m より高い時間 <span class=\"chem\">= t_2 - t_1 = 6.3612…</span> なので、<b>6.36 分</b>です。</p>",
    },

    // ── t3-2-q021 · short · exam · SL · SL 3.7, 3.8 · 7 marks
    "t3-2-q021": {
      // EN: <p>The mean monthly temperature in a town, <span class="chem">T</span> °C, is modelled by <span class="chem">T(t) = a cos(b(t - c)) + d</span>, where <span class="chem">t</span> is the month number (<span class="chem">t = 1</span> for January, <span class="chem">t = 12</span> for December) and <span class="chem">a, b, c, d &gt; 0</span>. The highest mean temperature, 27.8 °C, occurs in July (<span class="chem">t = 7</span>) and the lowest, 4.2 °C, occurs in January (<span class="chem">t = 1</span>). The pattern repeats every 12 months.</p><p>(a) Write down the value of <span class="chem">a</span> and the value of <span class="chem">d</span>. [2]</p><p>(b) Find the value of <span class="chem">b</span> and write down a possible value of <span class="chem">c</span>, where <span class="chem">0 &lt; c &lt; 12</span>. [2]</p><p>(c) Use the model to find the length of time, in months, during one year for which the mean temperature is above 20 °C. [3]</p>
      stem: "<p>ある町の月平均気温 <span class=\"chem\">T</span> °C は <span class=\"chem\">T(t) = a cos(b(t - c)) + d</span> でモデル化される。ここで <span class=\"chem\">t</span> は月の番号（<span class=\"chem\">t = 1</span> が一月、<span class=\"chem\">t = 12</span> が十二月）であり、<span class=\"chem\">a, b, c, d &gt; 0</span> とする。最高の月平均気温 27.8 °C は七月（<span class=\"chem\">t = 7</span>）、最低の 4.2 °C は一月（<span class=\"chem\">t = 1</span>）に生じる。このパターンは 12 か月ごとに繰り返す。</p><p>(a) <span class=\"chem\">a</span> の値と <span class=\"chem\">d</span> の値を書きなさい (Write down)。[2]</p><p>(b) <span class=\"chem\">b</span> の値を求め (Find)、<span class=\"chem\">0 &lt; c &lt; 12</span> を満たす <span class=\"chem\">c</span> の値を一つ書きなさい。[2]</p><p>(c) このモデルを用いて、一年のうち月平均気温が 20 °C を上回る期間の長さ（月）を求めなさい。[3]</p>",
      hints: [
        // EN: Decode: (a) and (b) are the standard max/min recipe; (c) asks for the length of the interval of <span class="chem">t</span> on which <span class="chem">T(t) &gt; 20</span>.
        "解読：(a) と (b) は最大値・最小値からモデルを作る定番の手順です。(c) は <span class=\"chem\">T(t) &gt; 20</span> となる <span class=\"chem\">t</span> の区間の長さを問うています。",
        // EN: Amplitude <span class="chem">= (max - min)/2</span>, principal axis <span class="chem">= (max + min)/2</span>, and with <span class="chem">a &gt; 0</span> the cosine peaks at <span class="chem">t = c</span>.
        "振幅 <span class=\"chem\">= (max - min)/2</span>、中心軸 <span class=\"chem\">= (max + min)/2</span> です。また <span class=\"chem\">a &gt; 0</span> のとき、コサインは <span class=\"chem\">t = c</span> で最大になります。",
        // EN: Graph <span class="chem">T(t)</span> and <span class="chem">y = 20</span> for <span class="chem">1 &lt;= t &lt;= 13</span>; subtract the two intersection values.
        "<span class=\"chem\">1 &lt;= t &lt;= 13</span> の範囲で <span class=\"chem\">T(t)</span> と <span class=\"chem\">y = 20</span> のグラフを描き、二つの交点の値の差をとりましょう。",
      ],
      // EN: <p>(a) <span class="chem">a = 11.8</span>, <span class="chem">d = 16</span>. (b) <span class="chem">b = 2pi/12 = pi/6</span>; <span class="chem">c = 7</span>. (c) <span class="chem">T(t) = 20</span> when <span class="chem">t = 4.66</span> and <span class="chem">t = 9.34</span>, so <span class="chem">T &gt; 20</span> for about <b>4.68 months</b>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 11.8</span>、<span class=\"chem\">d = 16</span>。(b) <span class=\"chem\">b = 2pi/12 = pi/6</span>；<span class=\"chem\">c = 7</span>。(c) <span class=\"chem\">t = 4.66</span> と <span class=\"chem\">t = 9.34</span> のとき <span class=\"chem\">T(t) = 20</span> なので、<span class=\"chem\">T &gt; 20</span> となるのは約 <b>4.68 か月</b>。</p>",
      markscheme: [
        // EN: A1: a = (27.8 − 4.2)/2 = 11.8.
        "A1：a = (27.8 − 4.2)/2 = 11.8。",
        // EN: A1: d = (27.8 + 4.2)/2 = 16.
        "A1：d = (27.8 + 4.2)/2 = 16。",
        // EN: A1: Period 12 months, so b = 2π/12 = π/6 (≈ 0.524).
        "A1：周期は 12 か月なので b = 2π/12 = π/6 (≈ 0.524)。",
        // EN: A1: c = 7 (a maximum of a positive cosine occurs at t = c).
        "A1：c = 7（正のコサインの最大値は t = c で生じる）。",
        // EN: M1: Set 11.8 cos((π/6)(t − 7)) + 16 = 20, or intersect the graph with T = 20 on a GDC.
        "M1：11.8 cos((π/6)(t − 7)) + 16 = 20 とおく、または GDC でグラフと T = 20 の交点を求める。",
        // EN: A1: t = 4.66 and t = 9.34.
        "A1：t = 4.66 と t = 9.34。",
        // EN: A1: Length of time = 9.34 − 4.66 = 4.68 months.
        "A1：期間の長さ = 9.34 − 4.66 = 4.68 か月。",
      ],
    },

    // ── t3-2-q022 · numeric · exam · SL · SL 3.8 · 4 marks
    "t3-2-q022": {
      // EN: <p>Consider the equation <span class="chem">4 sin(2x) + 1 = x</span>, where <span class="chem">x</span> is in radians and <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p><p>The equation has three solutions in this interval. Find the largest solution, giving your answer to 3 significant figures.</p>
      stem: "<p>方程式 <span class=\"chem\">4 sin(2x) + 1 = x</span> を考える。ただし <span class=\"chem\">x</span> はラジアンで、<span class=\"chem\">0 &lt;= x &lt;= 2pi</span> とする。</p><p>この方程式はこの区間に三つの解をもつ。最大の解を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: This equation mixes a trigonometric function with a linear one, so it cannot be solved algebraically: solve it graphically on your GDC.
        "この方程式は三角関数と一次関数が混ざっているので、代数的には解けません。GDC を使ってグラフで解きましょう。",
        // EN: Graph <span class="chem">y = 4 sin(2x) + 1</span> and <span class="chem">y = x</span> on <span class="chem">0 &lt;= x &lt;= 2pi</span> (radian mode) and find the intersection with the largest <span class="chem">x</span>-coordinate.
        "<span class=\"chem\">0 &lt;= x &lt;= 2pi</span>（ラジアンモード）で <span class=\"chem\">y = 4 sin(2x) + 1</span> と <span class=\"chem\">y = x</span> のグラフを描き、<span class=\"chem\">x</span> 座標が最大の交点を求めましょう。",
      ],
      // EN: <p>The graphs of <span class="chem">y = 4 sin(2x) + 1</span> and <span class="chem">y = x</span> meet at <span class="chem">x = 1.507…, 3.475…, 4.240…</span>. For <span class="chem">x &gt; 5</span> the line is above the maximum value 5 of the sine curve, so there are no more solutions. Largest solution: <b>x = 4.24</b>.</p>
      solution: "<p><span class=\"chem\">y = 4 sin(2x) + 1</span> と <span class=\"chem\">y = x</span> のグラフは <span class=\"chem\">x = 1.507…, 3.475…, 4.240…</span> で交わります。<span class=\"chem\">x &gt; 5</span> では直線が正弦曲線の最大値 5 より上にあるので、それ以上の解はありません。最大の解：<b>x = 4.24</b>。</p>",
    },

    // ── t3-2-q023 · numeric · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q023": {
      // EN: <p>Solve the equation <span class="chem">5 cos^2 x - 2 sin x - 3 = 0</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>, where <span class="chem">x</span> is in radians.</p><p>The equation has four solutions in this interval. Find the largest one, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">0 &lt;= x &lt;= 2pi</span> において方程式 <span class=\"chem\">5 cos^2 x - 2 sin x - 3 = 0</span> を解きなさい (Solve)。ただし <span class=\"chem\">x</span> はラジアンとする。</p><p>この方程式はこの区間に四つの解をもつ。最大のものを求め、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Replace <span class="chem">cos^2 x</span> with <span class="chem">1 - sin^2 x</span> to get a quadratic in <span class="chem">sin x</span>.
        "<span class=\"chem\">cos^2 x</span> を <span class=\"chem\">1 - sin^2 x</span> に置き換えて、<span class=\"chem\">sin x</span> の二次方程式にします。",
        // EN: You should get <span class="chem">5 sin^2 x + 2 sin x - 2 = 0</span>, so <span class="chem">sin x = (-1 +- sqrt(11))/5</span>. Both values lie in <span class="chem">[-1, 1]</span>.
        "<span class=\"chem\">5 sin^2 x + 2 sin x - 2 = 0</span> となるはずなので、<span class=\"chem\">sin x = (-1 +- sqrt(11))/5</span> です。どちらの値も <span class=\"chem\">[-1, 1]</span> に入っています。",
        // EN: The negative value <span class="chem">sin x = -0.8633…</span> gives solutions in quadrants III and IV: <span class="chem">x = pi + alpha</span> and <span class="chem">x = 2pi - alpha</span>, where <span class="chem">alpha = arcsin(0.8633…)</span>.
        "負の値 <span class=\"chem\">sin x = -0.8633…</span> からは第 3・第 4 象限の解 <span class=\"chem\">x = pi + alpha</span> と <span class=\"chem\">x = 2pi - alpha</span> が得られます。ここで <span class=\"chem\">alpha = arcsin(0.8633…)</span> です。",
      ],
      // EN: <p><span class="chem">5(1 - sin^2 x) - 2 sin x - 3 = 0</span> gives <span class="chem">5 sin^2 x + 2 sin x - 2 = 0</span>, so <span class="chem">sin x = 0.4633…</span> or <span class="chem">sin x = -0.8633…</span>.</p><p><span class="chem">sin x = 0.4633…</span>: <span class="chem">x = 0.482, 2.66</span>. <span class="chem">sin x = -0.8633…</span>: with <span class="chem">alpha = 1.0418…</span>, <span class="chem">x = pi + alpha = 4.18</span> and <span class="chem">x = 2pi - alpha = 5.241…</span>.</p><p>Largest solution: <b>x = 5.24</b>.</p>
      solution: "<p><span class=\"chem\">5(1 - sin^2 x) - 2 sin x - 3 = 0</span> より <span class=\"chem\">5 sin^2 x + 2 sin x - 2 = 0</span> となるので、<span class=\"chem\">sin x = 0.4633…</span> または <span class=\"chem\">sin x = -0.8633…</span> です。</p><p><span class=\"chem\">sin x = 0.4633…</span>：<span class=\"chem\">x = 0.482, 2.66</span>。<span class=\"chem\">sin x = -0.8633…</span>：<span class=\"chem\">alpha = 1.0418…</span> として <span class=\"chem\">x = pi + alpha = 4.18</span>、<span class=\"chem\">x = 2pi - alpha = 5.241…</span>。</p><p>最大の解：<b>x = 5.24</b>。</p>",
    },

    // ── t3-2-q024 · short · challenge · SL · SL 3.7, 3.8 · 7 marks
    "t3-2-q024": {
      // EN: <p>Two marker buoys bob up and down on waves. The heights, in metres, of buoy A and buoy B above mean sea level <span class="chem">t</span> seconds after a recording starts are</p><p><span class="chem">h_A(t) = 0.8 sin(1.3t)</span> and <span class="chem">h_B(t) = 0.6 cos(0.9t) + 0.1</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>.</p><p>(a) Find the first time at which the two buoys are at the same height. [2]</p><p>(b) Find the total length of time during the recording for which buoy A is higher than buoy B. [3]</p><p>(c) Find the greatest vertical distance between the two buoys during the recording. [2]</p>
      stem: "<p>二つの目印のブイが波で上下に揺れている。記録開始から <span class=\"chem\">t</span> 秒後のブイ A とブイ B の平均海面からの高さ（メートル）は</p><p><span class=\"chem\">h_A(t) = 0.8 sin(1.3t)</span> および <span class=\"chem\">h_B(t) = 0.6 cos(0.9t) + 0.1</span>（<span class=\"chem\">0 &lt;= t &lt;= 10</span>）である。</p><p>(a) 二つのブイが初めて同じ高さになる時刻を求めなさい (Find)。[2]</p><p>(b) 記録中にブイ A がブイ B より高い位置にある時間の合計を求めなさい。[3]</p><p>(c) 記録中の二つのブイの鉛直方向の距離の最大値を求めなさい。[2]</p>",
      hints: [
        // EN: Decode: "same height" means <span class="chem">h_A = h_B</span>; "A higher than B" means the inequality <span class="chem">h_A(t) &gt; h_B(t)</span>; "vertical distance" means <span class="chem">|h_A - h_B|</span>. The two waves have different periods, so this is a GDC graphing question.
        "解読：「同じ高さ」は <span class=\"chem\">h_A = h_B</span>、「A が B より高い」は不等式 <span class=\"chem\">h_A(t) &gt; h_B(t)</span>、「鉛直方向の距離」は <span class=\"chem\">|h_A - h_B|</span> を意味します。二つの波は周期が異なるので、これは GDC でグラフを描いて解く問題です。",
        // EN: Graph the single function <span class="chem">y = h_A(t) - h_B(t)</span> for <span class="chem">0 &lt;= t &lt;= 10</span>. Its zeros answer (a), the parts above the axis answer (b).
        "<span class=\"chem\">0 &lt;= t &lt;= 10</span> で一つの関数 <span class=\"chem\">y = h_A(t) - h_B(t)</span> のグラフを描きましょう。その零点が (a) の答え、軸より上の部分が (b) の答えになります。",
        // EN: For (c), the greatest vertical distance is the largest of |max| and |min| of <span class="chem">h_A - h_B</span> on the interval. Check the end points too.
        "(c) では、鉛直方向の距離の最大値は、区間における <span class=\"chem\">h_A - h_B</span> の |最大値| と |最小値| の大きい方です。端点も確認しましょう。",
      ],
      // EN: <p><strong>Decoding:</strong> each phrase is a statement about <span class="chem">D(t) = h_A(t) - h_B(t)</span>: same height ⇔ <span class="chem">D = 0</span>; A higher ⇔ <span class="chem">D &gt; 0</span>; vertical distance <span class="chem">= |D|</span>.</p><p>(a) The zeros of <span class="chem">D</span> are <span class="chem">t = 0.652, 2.809, 4.626, 6.521, 9.421</span>. <span class="chem">D(0) = -0.7 &lt; 0</span>, so the first meeting is at <b>0.652 s</b>.</p><p>(b) <span class="chem">D &gt; 0</span> on <span class="chem">(0.652, 2.809)</span>, <span class="chem">(4.626, 6.521)</span>, <span class="chem">(9.421, 10]</span>: total <b>4.63 s</b>.</p><p>(c) The minimum of <span class="chem">D</span> is <span class="chem">-1.136</span> at <span class="chem">t = 8.11</span> and its maximum is smaller in size, so the greatest distance is <b>1.14 m</b>.</p>
      solution: "<p><strong>解読：</strong>各フレーズは <span class=\"chem\">D(t) = h_A(t) - h_B(t)</span> についての条件です：同じ高さ ⇔ <span class=\"chem\">D = 0</span>、A の方が高い ⇔ <span class=\"chem\">D &gt; 0</span>、鉛直方向の距離 <span class=\"chem\">= |D|</span>。</p><p>(a) <span class=\"chem\">D</span> の零点は <span class=\"chem\">t = 0.652, 2.809, 4.626, 6.521, 9.421</span> です。<span class=\"chem\">D(0) = -0.7 &lt; 0</span> なので、初めて同じ高さになるのは <b>0.652 s</b> です。</p><p>(b) <span class=\"chem\">(0.652, 2.809)</span>、<span class=\"chem\">(4.626, 6.521)</span>、<span class=\"chem\">(9.421, 10]</span> で <span class=\"chem\">D &gt; 0</span>：合計 <b>4.63 s</b>。</p><p>(c) <span class=\"chem\">D</span> の最小値は <span class=\"chem\">t = 8.11</span> での <span class=\"chem\">-1.136</span> で、最大値の大きさはそれより小さいので、最大距離は <b>1.14 m</b> です。</p>",
      // EN: <p>(a) <span class="chem">t = 0.652</span> s. (b) A is higher on <span class="chem">0.652 &lt; t &lt; 2.81</span>, <span class="chem">4.63 &lt; t &lt; 6.52</span> and <span class="chem">9.42 &lt; t &lt;= 10</span>: total <b>4.63 s</b>. (c) The greatest value of <span class="chem">|h_A(t) - h_B(t)|</span> is <b>1.14 m</b> (at <span class="chem">t = 8.11</span>, with B above A).</p>
      answer: "<p>(a) <span class=\"chem\">t = 0.652</span> s。(b) A が高いのは <span class=\"chem\">0.652 &lt; t &lt; 2.81</span>、<span class=\"chem\">4.63 &lt; t &lt; 6.52</span>、<span class=\"chem\">9.42 &lt; t &lt;= 10</span>：合計 <b>4.63 s</b>。(c) <span class=\"chem\">|h_A(t) - h_B(t)|</span> の最大値は <b>1.14 m</b>（<span class=\"chem\">t = 8.11</span> のとき、B が A より上）。</p>",
      markscheme: [
        // EN: M1: Graph h_A and h_B (or h_A − h_B) on 0 ≤ t ≤ 10 and find the first intersection.
        "M1：0 ≤ t ≤ 10 で h_A と h_B（または h_A − h_B）のグラフを描き、最初の交点を求める。",
        // EN: A1: t = 0.652 s.
        "A1：t = 0.652 s。",
        // EN: M1: Find all the intersections: t = 0.652, 2.81, 4.63, 6.52, 9.42.
        "M1：すべての交点を求める：t = 0.652, 2.81, 4.63, 6.52, 9.42。",
        // EN: R1: Identify the intervals where h_A > h_B: (0.652, 2.81), (4.63, 6.52) and (9.42, 10).
        "R1：h_A > h_B となる区間を特定する：(0.652, 2.81)、(4.63, 6.52)、(9.42, 10)。",
        // EN: A1: Total time = 2.157 + 1.896 + 0.579 = 4.63 s.
        "A1：合計時間 = 2.157 + 1.896 + 0.579 = 4.63 s。",
        // EN: M1: Graph y = |h_A(t) − h_B(t)| (or find the max and min of h_A − h_B) on 0 ≤ t ≤ 10.
        "M1：0 ≤ t ≤ 10 で y = |h_A(t) − h_B(t)| のグラフを描く（または h_A − h_B の最大値と最小値を求める）。",
        // EN: A1: Greatest vertical distance = 1.14 m.
        "A1：鉛直方向の距離の最大値 = 1.14 m。",
      ],
    },

    // ── t3-2-q025 · numeric · challenge · SL · SL 3.7, 3.8 · 6 marks
    "t3-2-q025": {
      // EN: <p>In a northern city, the number of hours of daylight <span class="chem">D</span> on day <span class="chem">t</span> of the year (<span class="chem">t = 1</span> is 1 January; the year has 365 days) is modelled by <span class="chem">D(t) = a cos(b(t - c)) + d</span>, with <span class="chem">a, b &gt; 0</span>. The longest day, with 15.20 hours of daylight, is day 172. The shortest day, with 9.10 hours, is half a year later, and the pattern repeats every 365 days.</p><p>A day is called a "long day" if it has more than 14 hours of daylight. Using the model, find how many long days there are in one year (days 1 to 365).</p>
      stem: "<p>北方のある都市で、一年の第 <span class=\"chem\">t</span> 日の日照時間 <span class=\"chem\">D</span>（<span class=\"chem\">t = 1</span> が 1 月 1 日；一年は 365 日）は <span class=\"chem\">D(t) = a cos(b(t - c)) + d</span>（<span class=\"chem\">a, b &gt; 0</span>）でモデル化される。日照時間が最も長い日は第 172 日で、日照時間は 15.20 時間である。最も短い日はその半年後で 9.10 時間であり、このパターンは 365 日ごとに繰り返す。</p><p>日照時間が 14 時間を超える日を「長い日」と呼ぶ。モデルを用いて、一年（第 1 日〜第 365 日）に長い日が何日あるかを求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: build the model first (amplitude, principal axis, period 365 days, maximum at <span class="chem">t = 172</span>), then solve the inequality <span class="chem">D(t) &gt; 14</span>. The answer is a number of whole days, so you must count integers, not subtract decimals.
        "解読：まずモデルを作り（振幅、中心軸、周期 365 日、<span class=\"chem\">t = 172</span> で最大）、次に不等式 <span class=\"chem\">D(t) &gt; 14</span> を解きます。答えは整数の日数なので、小数の差をとるのではなく、整数を数えなければなりません。",
        // EN: <span class="chem">a = (15.20 - 9.10)/2 = 3.05</span>, <span class="chem">d = (15.20 + 9.10)/2 = 12.15</span>, <span class="chem">b = 2pi/365</span>, <span class="chem">c = 172</span>.
        "<span class=\"chem\">a = (15.20 - 9.10)/2 = 3.05</span>、<span class=\"chem\">d = (15.20 + 9.10)/2 = 12.15</span>、<span class=\"chem\">b = 2pi/365</span>、<span class=\"chem\">c = 172</span>。",
        // EN: Solve <span class="chem">D(t) = 14</span> on a GDC: the solutions lie between consecutive whole numbers. Work out the first and last whole-number day with <span class="chem">D(t) &gt; 14</span> and count them inclusively.
        "GDC で <span class=\"chem\">D(t) = 14</span> を解きます。解は連続する整数の間にあります。<span class=\"chem\">D(t) &gt; 14</span> となる最初と最後の整数の日を求め、両端を含めて数えましょう。",
      ],
      // EN: <p><strong>Decoding:</strong> "how many long days" asks for the number of integers <span class="chem">t</span> in <span class="chem">1 &lt;= t &lt;= 365</span> with <span class="chem">D(t) &gt; 14</span>.</p><p><span class="chem">D(t) = 3.05 cos((2pi/365)(t - 172)) + 12.15</span>. Solving <span class="chem">D(t) = 14</span> gives <span class="chem">t = 118.5…</span> and <span class="chem">t = 225.5…</span>. Check: <span class="chem">D(118) = 13.97</span>, <span class="chem">D(119) = 14.02</span>, <span class="chem">D(225) = 14.02</span>, <span class="chem">D(226) = 13.97</span>.</p><p>The long days are days 119 to 225 inclusive: <span class="chem">225 - 119 + 1 =</span> <b>107 days</b>.</p>
      solution: "<p><strong>解読：</strong>「長い日は何日」は、<span class=\"chem\">1 &lt;= t &lt;= 365</span> で <span class=\"chem\">D(t) &gt; 14</span> を満たす整数 <span class=\"chem\">t</span> の個数を問うています。</p><p><span class=\"chem\">D(t) = 3.05 cos((2pi/365)(t - 172)) + 12.15</span>。<span class=\"chem\">D(t) = 14</span> を解くと <span class=\"chem\">t = 118.5…</span> と <span class=\"chem\">t = 225.5…</span> です。確認：<span class=\"chem\">D(118) = 13.97</span>、<span class=\"chem\">D(119) = 14.02</span>、<span class=\"chem\">D(225) = 14.02</span>、<span class=\"chem\">D(226) = 13.97</span>。</p><p>長い日は第 119 日から第 225 日まで（両端を含む）：<span class=\"chem\">225 - 119 + 1 =</span> <b>107 日</b>。</p>",
    },

    // ── t3-2-q026 · short · exam · SL · SL 3.7, 3.8 · 9 marks
    "t3-2-q026": {
      // EN: <p>At a harbour entrance, high tide on a particular day has a depth of 6.4 m at 01:30, and the next low tide has a depth of 2.2 m at 07:45. The depth of water, <span class="chem">y</span> metres, <span class="chem">t</span> hours after midnight is modelled by <span class="chem">y(t) = a cos(b(t - 1.5)) + d</span>, where <span class="chem">a, b &gt; 0</span>.</p><p>(a) Find the values of <span class="chem">a</span>, <span class="chem">d</span> and <span class="chem">b</span>. [3]</p><p>(b) Write down the model, and verify that it gives a depth of 2.2 m at 07:45. [1]</p><p>A fishing boat needs a depth of at least 3.5 m to pass through the entrance.</p><p>(c) Find the earliest time after 07:45 at which the boat can pass through. Give your answer to the nearest minute. [3]</p><p>(d) Find the length of time, in hours and minutes, for which the boat can then pass through without stopping. [2]</p>
      stem: "<p>ある港の入口では、ある日の満潮が 01:30 で水深 6.4 m、次の干潮が 07:45 で水深 2.2 m である。午前零時から <span class=\"chem\">t</span> 時間後の水深 <span class=\"chem\">y</span> メートルは <span class=\"chem\">y(t) = a cos(b(t - 1.5)) + d</span>（<span class=\"chem\">a, b &gt; 0</span>）でモデル化される。</p><p>(a) <span class=\"chem\">a</span>、<span class=\"chem\">d</span>、<span class=\"chem\">b</span> の値を求めなさい (Find)。[3]</p><p>(b) モデルの式を書き (Write down)、それが 07:45 に水深 2.2 m を与えることを確かめなさい (Verify)。[1]</p><p>漁船が入口を通過するには少なくとも 3.5 m の水深が必要である。</p><p>(c) 07:45 より後で漁船が通過できる最も早い時刻を求め、分単位で答えなさい。[3]</p><p>(d) その後、漁船が途切れずに通過できる時間の長さを、時間と分で求めなさい。[2]</p>",
      hints: [
        // EN: Decode: high and low tide give the maximum, minimum and half the period. "At least 3.5 m" means you need <span class="chem">y(t) &gt;= 3.5</span>, and times must be converted from decimal hours to clock times.
        "解読：満潮と干潮から最大値、最小値、半周期がわかります。「少なくとも 3.5 m」は <span class=\"chem\">y(t) &gt;= 3.5</span> が必要という意味です。また、時刻は小数の時間から時計の時刻に換算しなければなりません。",
        // EN: 07:45 is <span class="chem">t = 7.75</span>. The time from high tide to low tide is half a period.
        "07:45 は <span class=\"chem\">t = 7.75</span> です。満潮から干潮までの時間は半周期です。",
        // EN: For (c), the depth rises after the low tide at 07:45. Intersect <span class="chem">y(t)</span> with <span class="chem">y = 3.5</span>; convert the decimal part of the hour to minutes by multiplying by 60.
        "(c) では、07:45 の干潮の後に水深は上昇します。<span class=\"chem\">y(t)</span> と <span class=\"chem\">y = 3.5</span> の交点を求め、時間の小数部分に 60 を掛けて分に換算しましょう。",
      ],
      // EN: <p>(a) <span class="chem">a = 2.1</span>, <span class="chem">d = 4.3</span>, period <span class="chem">= 2(7.75 - 1.5) = 12.5</span> h so <span class="chem">b = 2pi/12.5 = 0.503</span> (<span class="chem">= 4pi/25</span>). (b) <span class="chem">y(t) = 2.1 cos((4pi/25)(t - 1.5)) + 4.3</span>; <span class="chem">y(7.75) = 2.1 cos(pi) + 4.3 = 2.2</span>. (c) <span class="chem">y = 3.5</span> at <span class="chem">t = 10.097</span>, i.e. <b>10:06</b>. (d) The depth next falls to 3.5 m at <span class="chem">t = 17.903</span>, so the window is <span class="chem">7.81</span> h, about <b>7 h 48 min</b>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 2.1</span>、<span class=\"chem\">d = 4.3</span>、周期 <span class=\"chem\">= 2(7.75 - 1.5) = 12.5</span> h なので <span class=\"chem\">b = 2pi/12.5 = 0.503</span>（<span class=\"chem\">= 4pi/25</span>）。(b) <span class=\"chem\">y(t) = 2.1 cos((4pi/25)(t - 1.5)) + 4.3</span>；<span class=\"chem\">y(7.75) = 2.1 cos(pi) + 4.3 = 2.2</span>。(c) <span class=\"chem\">t = 10.097</span> で <span class=\"chem\">y = 3.5</span>、すなわち <b>10:06</b>。(d) 次に水深が 3.5 m まで下がるのは <span class=\"chem\">t = 17.903</span> なので、通過できる時間は <span class=\"chem\">7.81</span> h、約 <b>7 h 48 min</b>。</p>",
      markscheme: [
        // EN: A1: a = (6.4 − 2.2)/2 = 2.1.
        "A1：a = (6.4 − 2.2)/2 = 2.1。",
        // EN: A1: d = (6.4 + 2.2)/2 = 4.3.
        "A1：d = (6.4 + 2.2)/2 = 4.3。",
        // EN: A1: Half-period = 7.75 − 1.5 = 6.25 h, so period 12.5 h and b = 2π/12.5 = 4π/25 (≈ 0.503).
        "A1：半周期 = 7.75 − 1.5 = 6.25 h なので周期は 12.5 h、b = 2π/12.5 = 4π/25 (≈ 0.503)。",
        // EN: A1: y(t) = 2.1 cos((4π/25)(t − 1.5)) + 4.3, and y(7.75) = 2.1 cos π + 4.3 = 2.2.
        "A1：y(t) = 2.1 cos((4π/25)(t − 1.5)) + 4.3 であり、y(7.75) = 2.1 cos π + 4.3 = 2.2。",
        // EN: M1: Solve y(t) = 3.5 on a GDC for t > 7.75 (graph y(t) and y = 3.5).
        "M1：GDC で t > 7.75 における y(t) = 3.5 を解く（y(t) と y = 3.5 のグラフを描く）。",
        // EN: A1: t = 10.097… hours.
        "A1：t = 10.097… 時間。",
        // EN: A1: 0.097 h ≈ 6 minutes, so the time is 10:06.
        "A1：0.097 h ≈ 6 分なので、時刻は 10:06。",
        // EN: M1: Next solution of y(t) = 3.5 is t = 17.903 (or use symmetry about the high tide at t = 14).
        "M1：y(t) = 3.5 の次の解は t = 17.903（または t = 14 の満潮に関する対称性を使う）。",
        // EN: A1: 17.903 − 10.097 = 7.81 h ≈ 7 h 48 min.
        "A1：17.903 − 10.097 = 7.81 h ≈ 7 h 48 min。",
      ],
    },

    // ── t3-2-q027 · numeric · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q027": {
      // EN: <p>Solve the equation <span class="chem">tan x = 1.5 cos x</span> for <span class="chem">0° &lt;= x &lt;= 360°</span>.</p><p>Give the largest solution in degrees, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">0° &lt;= x &lt;= 360°</span> において方程式 <span class=\"chem\">tan x = 1.5 cos x</span> を解きなさい (Solve)。</p><p>最大の解を度数法で、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Write <span class="chem">tan x = sin x / cos x</span> and multiply by <span class="chem">cos x</span>. Note that <span class="chem">cos x != 0</span>, because <span class="chem">tan x</span> is undefined at <span class="chem">90°</span> and <span class="chem">270°</span>.
        "<span class=\"chem\">tan x = sin x / cos x</span> と書いて <span class=\"chem\">cos x</span> を掛けます。<span class=\"chem\">tan x</span> は <span class=\"chem\">90°</span> と <span class=\"chem\">270°</span> で定義されないので、<span class=\"chem\">cos x != 0</span> であることに注意しましょう。",
        // EN: You get <span class="chem">sin x = 1.5 cos^2 x = 1.5(1 - sin^2 x)</span>, a quadratic in <span class="chem">sin x</span>: <span class="chem">1.5 sin^2 x + sin x - 1.5 = 0</span>.
        "<span class=\"chem\">sin x = 1.5 cos^2 x = 1.5(1 - sin^2 x)</span> となり、<span class=\"chem\">sin x</span> の二次方程式 <span class=\"chem\">1.5 sin^2 x + sin x - 1.5 = 0</span> が得られます。",
        // EN: Only one root of the quadratic lies in <span class="chem">[-1, 1]</span>. It is positive, so the solutions are in quadrants I and II.
        "この二次方程式の解のうち <span class=\"chem\">[-1, 1]</span> に入るのは一つだけです。それは正なので、解は第 1・第 2 象限にあります。",
      ],
      // EN: <p>Since <span class="chem">cos x != 0</span>: <span class="chem">sin x = 1.5 cos^2 x</span>, so <span class="chem">1.5 sin^2 x + sin x - 1.5 = 0</span> and <span class="chem">sin x = (-1 +- sqrt(10))/3</span>.</p><p><span class="chem">sin x = -1.387…</span> is impossible. <span class="chem">sin x = 0.72076…</span> gives <span class="chem">x = 46.1°</span> or <span class="chem">x = 180° - 46.1° = 133.88…°</span>. (A GDC graph of <span class="chem">y = tan x - 1.5 cos x</span> confirms only these two; the sign changes at <span class="chem">90°</span> and <span class="chem">270°</span> are asymptotes, not roots.)</p><p>Largest solution: <b>134°</b>.</p>
      solution: "<p><span class=\"chem\">cos x != 0</span> なので <span class=\"chem\">sin x = 1.5 cos^2 x</span>、よって <span class=\"chem\">1.5 sin^2 x + sin x - 1.5 = 0</span> となり、<span class=\"chem\">sin x = (-1 +- sqrt(10))/3</span> です。</p><p><span class=\"chem\">sin x = -1.387…</span> はありえません。<span class=\"chem\">sin x = 0.72076…</span> から <span class=\"chem\">x = 46.1°</span> または <span class=\"chem\">x = 180° - 46.1° = 133.88…°</span> です。（GDC で <span class=\"chem\">y = tan x - 1.5 cos x</span> のグラフを描くと、解はこの二つだけだと確認できます。<span class=\"chem\">90°</span> と <span class=\"chem\">270°</span> での符号の変化は漸近線であり、解ではありません。）</p><p>最大の解：<b>134°</b>。</p>",
    },

    // ── t3-2-q028 · short · exam · AHL · AHL 3.9, SL 3.8 · 6 marks
    "t3-2-q028": {
      // EN: <p>(a) Show that the equation <span class="chem">2 sec^2 x + tan x = 5</span> can be written as <span class="chem">2 tan^2 x + tan x - 3 = 0</span>. [2]</p><p>(b) Hence solve <span class="chem">2 sec^2 x + tan x = 5</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>. Give your answers in radians, to 3 significant figures where they are not exact. [4]</p>
      stem: "<p>(a) 方程式 <span class=\"chem\">2 sec^2 x + tan x = 5</span> が <span class=\"chem\">2 tan^2 x + tan x - 3 = 0</span> と書けることを示しなさい (Show that)。[2]</p><p>(b) これを用いて (Hence)、<span class=\"chem\">0 &lt;= x &lt;= 2pi</span> において <span class=\"chem\">2 sec^2 x + tan x = 5</span> を解きなさい。答えはラジアンで、厳密値でないものは有効数字 3 桁で答えなさい。[4]</p>",
      hints: [
        // EN: Use the booklet identity <span class="chem">1 + tan^2 x = sec^2 x</span>.
        "公式集の恒等式 <span class=\"chem\">1 + tan^2 x = sec^2 x</span> を使いましょう。",
        // EN: The quadratic factorises. One root gives exact angles, the other needs <span class="chem">arctan 1.5 = 0.9828…</span> from the GDC.
        "この二次方程式は因数分解できます。一方の解からは厳密な角が得られ、もう一方には GDC で求めた <span class=\"chem\">arctan 1.5 = 0.9828…</span> が必要です。",
        // EN: <span class="chem">tan x</span> has period <span class="chem">pi</span>, so each value of <span class="chem">tan x</span> gives two solutions in <span class="chem">[0, 2pi]</span>. A negative tangent lies in quadrants II and IV.
        "<span class=\"chem\">tan x</span> の周期は <span class=\"chem\">pi</span> なので、<span class=\"chem\">tan x</span> の各値から <span class=\"chem\">[0, 2pi]</span> に二つの解が得られます。タンジェントが負になるのは第 2・第 4 象限です。",
      ],
      // EN: <p>(a) <span class="chem">2(1 + tan^2 x) + tan x - 5 = 0</span>, so <span class="chem">2 tan^2 x + tan x - 3 = 0</span>. (b) <span class="chem">(2 tan x + 3)(tan x - 1) = 0</span>. <span class="chem">tan x = 1</span>: <span class="chem">x = pi/4, 5pi/4</span> (0.785, 3.93). <span class="chem">tan x = -1.5</span>: <span class="chem">x = pi - arctan 1.5 = 2.16</span> and <span class="chem">x = 2pi - arctan 1.5 = 5.30</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2(1 + tan^2 x) + tan x - 5 = 0</span> より <span class=\"chem\">2 tan^2 x + tan x - 3 = 0</span>。(b) <span class=\"chem\">(2 tan x + 3)(tan x - 1) = 0</span>。<span class=\"chem\">tan x = 1</span>：<span class=\"chem\">x = pi/4, 5pi/4</span> (0.785, 3.93)。<span class=\"chem\">tan x = -1.5</span>：<span class=\"chem\">x = pi - arctan 1.5 = 2.16</span> と <span class=\"chem\">x = 2pi - arctan 1.5 = 5.30</span>。</p>",
      markscheme: [
        // EN: M1: Use 1 + tan²x = sec²x: 2(1 + tan²x) + tan x = 5.
        "M1：1 + tan²x = sec²x を用いる：2(1 + tan²x) + tan x = 5。",
        // EN: A1: 2 + 2 tan²x + tan x − 5 = 0, so 2 tan²x + tan x − 3 = 0 (AG).
        "A1：2 + 2 tan²x + tan x − 5 = 0 より 2 tan²x + tan x − 3 = 0 (AG)。",
        // EN: M1: Factorise (2 tan x + 3)(tan x − 1) = 0, or solve the quadratic, to get tan x = 1 or tan x = −1.5.
        "M1：(2 tan x + 3)(tan x − 1) = 0 と因数分解する（または二次方程式を解く）ことで tan x = 1 または tan x = −1.5 を得る。",
        // EN: A1: tan x = 1 gives x = π/4, 5π/4 (0.785, 3.93).
        "A1：tan x = 1 から x = π/4, 5π/4 (0.785, 3.93)。",
        // EN: A1: tan x = −1.5 gives x = π − arctan 1.5 = 2.16.
        "A1：tan x = −1.5 から x = π − arctan 1.5 = 2.16。",
        // EN: A1: and x = 2π − arctan 1.5 = 5.30 (four solutions in total).
        "A1：および x = 2π − arctan 1.5 = 5.30（解は全部で四つ）。",
      ],
    },

    // ── t3-2-q029 · short · exam · AHL · AHL 3.10, SL 3.8 · 8 marks
    "t3-2-q029": {
      // EN: <p>Two signals are added to give <span class="chem">y = 3 sin t + 4 cos(t - pi/6)</span>, for <span class="chem">0 &lt;= t &lt;= 2pi</span>.</p><p>(a) Use your GDC to find the maximum value of <span class="chem">y</span> and the value of <span class="chem">t</span> at which it occurs. [2]</p><p>(b) Use a compound-angle identity to show that <span class="chem">y = 5 sin t + 2sqrt(3) cos t</span>. [3]</p><p>(c) Hence find the exact value of <span class="chem">tan t</span> when <span class="chem">y = 0</span>, and solve <span class="chem">y = 0</span> for <span class="chem">0 &lt;= t &lt;= 2pi</span>. [3]</p>
      stem: "<p>二つの信号を足し合わせると <span class=\"chem\">y = 3 sin t + 4 cos(t - pi/6)</span>（<span class=\"chem\">0 &lt;= t &lt;= 2pi</span>）となる。</p><p>(a) GDC を用いて、<span class=\"chem\">y</span> の最大値と、そのときの <span class=\"chem\">t</span> の値を求めなさい (Find)。[2]</p><p>(b) 加法定理を用いて、<span class=\"chem\">y = 5 sin t + 2sqrt(3) cos t</span> であることを示しなさい (Show that)。[3]</p><p>(c) これを用いて (Hence)、<span class=\"chem\">y = 0</span> のときの <span class=\"chem\">tan t</span> の厳密値を求め、<span class=\"chem\">0 &lt;= t &lt;= 2pi</span> において <span class=\"chem\">y = 0</span> を解きなさい。[3]</p>",
      hints: [
        // EN: For (a), graph <span class="chem">y</span> in radian mode on <span class="chem">[0, 2pi]</span> and use the maximum feature.
        "(a) では、ラジアンモードで <span class=\"chem\">[0, 2pi]</span> に <span class=\"chem\">y</span> のグラフを描き、最大値の機能を使いましょう。",
        // EN: For (b), use <span class="chem">cos(A - B) = cos A cos B + sin A sin B</span> from the formula booklet.
        "(b) では、公式集の <span class=\"chem\">cos(A - B) = cos A cos B + sin A sin B</span> を使いましょう。",
        // EN: For (c), divide <span class="chem">5 sin t + 2sqrt(3) cos t = 0</span> by <span class="chem">cos t</span> (it cannot be 0 here: then <span class="chem">y = ±5</span>). A negative tangent gives solutions in quadrants II and IV.
        "(c) では、<span class=\"chem\">5 sin t + 2sqrt(3) cos t = 0</span> を <span class=\"chem\">cos t</span> で割ります（ここで 0 にはなりえません：もしそうなら <span class=\"chem\">y = ±5</span> です）。タンジェントが負なので、解は第 2・第 4 象限にあります。",
      ],
      // EN: <p>(a) Maximum <span class="chem">y = 6.08</span> (it is <span class="chem">sqrt(37)</span>) at <span class="chem">t = 0.965</span>. (b) <span class="chem">4 cos(t - pi/6) = 4(cos t · sqrt(3)/2 + sin t · 1/2) = 2sqrt(3) cos t + 2 sin t</span>, so <span class="chem">y = 5 sin t + 2sqrt(3) cos t</span>. (c) <span class="chem">tan t = -2sqrt(3)/5</span>; <span class="chem">t = 2.54</span> or <span class="chem">t = 5.68</span>.</p>
      answer: "<p>(a) 最大値 <span class=\"chem\">y = 6.08</span>（<span class=\"chem\">sqrt(37)</span> に等しい）、<span class=\"chem\">t = 0.965</span> のとき。(b) <span class=\"chem\">4 cos(t - pi/6) = 4(cos t · sqrt(3)/2 + sin t · 1/2) = 2sqrt(3) cos t + 2 sin t</span> より <span class=\"chem\">y = 5 sin t + 2sqrt(3) cos t</span>。(c) <span class=\"chem\">tan t = -2sqrt(3)/5</span>；<span class=\"chem\">t = 2.54</span> または <span class=\"chem\">t = 5.68</span>。</p>",
      markscheme: [
        // EN: A1: Maximum value y = 6.08.
        "A1：最大値 y = 6.08。",
        // EN: A1: at t = 0.965.
        "A1：t = 0.965 のとき。",
        // EN: M1: Expand cos(t − π/6) = cos t cos(π/6) + sin t sin(π/6).
        "M1：cos(t − π/6) = cos t cos(π/6) + sin t sin(π/6) と展開する。",
        // EN: A1: Substitute cos(π/6) = √3/2 and sin(π/6) = 1/2: 4 cos(t − π/6) = 2√3 cos t + 2 sin t.
        "A1：cos(π/6) = √3/2 と sin(π/6) = 1/2 を代入する：4 cos(t − π/6) = 2√3 cos t + 2 sin t。",
        // EN: A1: Collect terms: y = 3 sin t + 2 sin t + 2√3 cos t = 5 sin t + 2√3 cos t (AG).
        "A1：項をまとめる：y = 3 sin t + 2 sin t + 2√3 cos t = 5 sin t + 2√3 cos t (AG)。",
        // EN: M1: y = 0 gives 5 sin t = −2√3 cos t, so tan t = −2√3/5.
        "M1：y = 0 より 5 sin t = −2√3 cos t、よって tan t = −2√3/5。",
        // EN: A1: t = π − arctan(2√3/5) = 2.54.
        "A1：t = π − arctan(2√3/5) = 2.54。",
        // EN: A1: t = 2π − arctan(2√3/5) = 5.68.
        "A1：t = 2π − arctan(2√3/5) = 5.68。",
      ],
    },

    // ── t3-2-q030 · numeric · challenge · AHL · AHL 3.9 · 6 marks
    "t3-2-q030": {
      // EN: <p>A painting 3.6 m tall hangs on a vertical wall. Its lower edge is 1.2 m above the eye level of a visitor, who stands on level ground <span class="chem">x</span> metres from the wall. The angle between the visitor's lines of sight to the top and the bottom of the painting is <span class="chem">theta</span>.</p><p>The visitor chooses <span class="chem">x</span> to make <span class="chem">theta</span> as large as possible. Find this largest value of <span class="chem">theta</span>, in degrees, correct to 3 significant figures.</p>
      stem: "<p>高さ 3.6 m の絵が鉛直な壁に掛かっている。絵の下端は来館者の目の高さより 1.2 m 上にあり、来館者は壁から <span class=\"chem\">x</span> メートル離れた水平な床の上に立っている。来館者から絵の上端と下端を見る二本の視線のなす角を <span class=\"chem\">theta</span> とする。</p><p>来館者は <span class=\"chem\">theta</span> ができるだけ大きくなるように <span class=\"chem\">x</span> を選ぶ。この <span class=\"chem\">theta</span> の最大値を度数法で求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: <span class="chem">theta</span> is the DIFFERENCE of two angles of elevation (to the top and to the bottom of the painting). Write each one with arctan, then maximise the difference on a GDC.
        "解読：<span class=\"chem\">theta</span> は二つの仰角（絵の上端と下端への仰角）の「差」です。それぞれを arctan で表し、GDC でその差を最大化しましょう。",
        // EN: The top is <span class="chem">1.2 + 3.6 = 4.8</span> m above eye level, so <span class="chem">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span> for <span class="chem">x &gt; 0</span>.
        "絵の上端は目の高さより <span class=\"chem\">1.2 + 3.6 = 4.8</span> m 上にあるので、<span class=\"chem\">x &gt; 0</span> に対して <span class=\"chem\">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span> です。",
        // EN: Graph <span class="chem">theta(x)</span> (in degree mode, or convert from radians) for, say, <span class="chem">0 &lt; x &lt;= 10</span> and use the maximum feature.
        "例えば <span class=\"chem\">0 &lt; x &lt;= 10</span> の範囲で <span class=\"chem\">theta(x)</span> のグラフを（度数モードで、またはラジアンから換算して）描き、最大値の機能を使いましょう。",
      ],
      // EN: <p><strong>Decoding:</strong> the angle the painting subtends = (angle of elevation of the top) − (angle of elevation of the bottom).</p><p><span class="chem">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span>. The GDC maximum is at <span class="chem">x = 2.40</span> m, where <span class="chem">theta = arctan 2 - arctan 0.5 = 36.869…°</span>.</p><p>(Check with <span class="chem">tan(A - B)</span>: <span class="chem">(2 - 0.5)/(1 + 2 × 0.5) = 0.75</span>, and <span class="chem">arctan 0.75 = 36.87°</span>.) Largest angle: <b>36.9°</b>.</p>
      solution: "<p><strong>解読：</strong>絵を見込む角 =（上端の仰角）−（下端の仰角）。</p><p><span class=\"chem\">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span>。GDC によると最大となるのは <span class=\"chem\">x = 2.40</span> m のときで、<span class=\"chem\">theta = arctan 2 - arctan 0.5 = 36.869…°</span> です。</p><p>（<span class=\"chem\">tan(A - B)</span> で確認：<span class=\"chem\">(2 - 0.5)/(1 + 2 × 0.5) = 0.75</span>、そして <span class=\"chem\">arctan 0.75 = 36.87°</span>。）最大の角：<b>36.9°</b>。</p>",
    },

    // ── t3-2-q031 · numeric · exam · SL · SL 3.8 · 5 marks
    "t3-2-q031": {
      // EN: <p>Solve the equation <span class="chem">3 sin(2x - 40°) = 1.7</span> for <span class="chem">0° &lt;= x &lt;= 360°</span>.</p><p>The equation has four solutions in this interval. Find the largest one, in degrees, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">0° &lt;= x &lt;= 360°</span> において方程式 <span class=\"chem\">3 sin(2x - 40°) = 1.7</span> を解きなさい (Solve)。</p><p>この方程式はこの区間に四つの解をもつ。最大のものを度数法で求め、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Let <span class="chem">u = 2x - 40°</span>. Change the interval first: <span class="chem">-40° &lt;= u &lt;= 680°</span>.
        "<span class=\"chem\">u = 2x - 40°</span> とおきます。まず区間を変換しましょう：<span class=\"chem\">-40° &lt;= u &lt;= 680°</span>。",
        // EN: <span class="chem">sin u = 1.7/3</span>, so the reference angle is <span class="chem">arcsin(1.7/3) = 34.52°</span>. List <span class="chem">u = 34.52°, 145.48°</span> and add <span class="chem">360°</span> while you stay below <span class="chem">680°</span>.
        "<span class=\"chem\">sin u = 1.7/3</span> なので、基準角は <span class=\"chem\">arcsin(1.7/3) = 34.52°</span> です。<span class=\"chem\">u = 34.52°, 145.48°</span> を書き出し、<span class=\"chem\">680°</span> を超えない限り <span class=\"chem\">360°</span> を足していきます。",
        // EN: Then <span class="chem">x = (u + 40°)/2</span>.
        "そして <span class=\"chem\">x = (u + 40°)/2</span> です。",
      ],
      // EN: <p><span class="chem">u = 2x - 40° in [-40°, 680°]</span>, <span class="chem">sin u = 0.5667</span>: <span class="chem">u = 34.52°, 145.48°, 394.52°, 505.48°</span>.</p><p><span class="chem">x = (u + 40°)/2 = 37.3°, 92.7°, 217.3°, 272.74…°</span>. Largest: <b>273°</b>.</p>
      solution: "<p><span class=\"chem\">u = 2x - 40° in [-40°, 680°]</span>、<span class=\"chem\">sin u = 0.5667</span>：<span class=\"chem\">u = 34.52°, 145.48°, 394.52°, 505.48°</span>。</p><p><span class=\"chem\">x = (u + 40°)/2 = 37.3°, 92.7°, 217.3°, 272.74…°</span>。最大：<b>273°</b>。</p>",
    },

    // ── t3-2-q032 · short · challenge · SL · SL 3.7, 3.8 · 9 marks
    "t3-2-q032": {
      // EN: <p>A Ferris wheel of radius 20 m has its centre 23 m above the ground. It rotates anticlockwise at a constant rate of 0.4 revolutions per minute. At <span class="chem">t = 0</span>, car A is level with the centre and moving upwards. Car B is at the opposite end of the diameter through A.</p><p>(a) Find the time for one revolution, and show that the height of car A above the ground, in metres, <span class="chem">t</span> minutes later is <span class="chem">h_A(t) = 23 + 20 sin(0.8pi t)</span>. [2]</p><p>(b) Find the times during the first revolution at which car A is 35 m above the ground. [3]</p><p>(c) Write down an expression for the height <span class="chem">h_B(t)</span> of car B, and find the first time at which the vertical distance between the two cars is 30 m. [2]</p><p>(d) Find the total time in each revolution for which the vertical distance between the cars is more than 30 m. [2]</p>
      stem: "<p>半径 20 m の観覧車があり、その中心は地上 23 m の高さにある。観覧車は毎分 0.4 回転の一定の速さで反時計回りに回転する。<span class=\"chem\">t = 0</span> のとき、ゴンドラ A は中心と同じ高さにあり、上向きに動いている。ゴンドラ B は A を通る直径のもう一方の端にある。</p><p>(a) 一回転にかかる時間を求め (Find)、<span class=\"chem\">t</span> 分後のゴンドラ A の地上からの高さ（メートル）が <span class=\"chem\">h_A(t) = 23 + 20 sin(0.8pi t)</span> であることを示しなさい (Show that)。[2]</p><p>(b) 最初の一回転の間にゴンドラ A が地上 35 m の高さにある時刻を求めなさい。[3]</p><p>(c) ゴンドラ B の高さ <span class=\"chem\">h_B(t)</span> を表す式を書き (Write down)、二つのゴンドラの鉛直方向の距離が初めて 30 m になる時刻を求めなさい。[2]</p><p>(d) 一回転ごとに、ゴンドラ間の鉛直方向の距離が 30 m を超える時間の合計を求めなさい。[2]</p>",
      hints: [
        // EN: Decode: "0.4 revolutions per minute" is a frequency; the period is its reciprocal. "Opposite end of the diameter" means car B is always half a revolution away from A. "Vertical distance" is <span class="chem">|h_A - h_B|</span>.
        "解読：「毎分 0.4 回転」は振動数で、周期はその逆数です。「直径のもう一方の端」とは、ゴンドラ B が常に A から半回転ずれているという意味です。「鉛直方向の距離」は <span class=\"chem\">|h_A - h_B|</span> です。",
        // EN: Car A starts at the height of the centre and goes up: that is a sine curve with no phase shift.
        "ゴンドラ A は中心の高さから上向きに動き始めます：これは位相のずれのない正弦曲線です。",
        // EN: For car B, <span class="chem">sin(theta + pi) = -sin theta</span>, so <span class="chem">h_B = 23 - 20 sin(0.8pi t)</span> and <span class="chem">h_A - h_B = 40 sin(0.8pi t)</span>.
        "ゴンドラ B については <span class=\"chem\">sin(theta + pi) = -sin theta</span> なので、<span class=\"chem\">h_B = 23 - 20 sin(0.8pi t)</span>、<span class=\"chem\">h_A - h_B = 40 sin(0.8pi t)</span> です。",
        // EN: For (d), graph <span class="chem">y = 40|sin(0.8pi x)|</span> and <span class="chem">y = 30</span> on <span class="chem">0 &lt;= x &lt;= 2.5</span> and add the lengths of the intervals where the curve is above the line.
        "(d) では、<span class=\"chem\">0 &lt;= x &lt;= 2.5</span> で <span class=\"chem\">y = 40|sin(0.8pi x)|</span> と <span class=\"chem\">y = 30</span> のグラフを描き、曲線が直線より上にある区間の長さを足し合わせましょう。",
      ],
      // EN: <p><strong>Decoding:</strong> turn every sentence into a function: period = 1/frequency; B = A shifted by half a turn; vertical distance = <span class="chem">|h_A - h_B| = 40|sin(0.8pi t)|</span>.</p><p>(b) <span class="chem">sin(0.8pi t) = 0.6</span>: <span class="chem">0.8pi t = 0.6435</span> or <span class="chem">pi - 0.6435</span>, so <span class="chem">t = 0.256</span>, <span class="chem">0.994</span> min.</p><p>(c) <span class="chem">40 sin(0.8pi t) = 30</span>: <span class="chem">t = arcsin(0.75)/(0.8pi) = 0.337</span> min.</p><p>(d) <span class="chem">|sin(0.8pi t)| &gt; 0.75</span> on <span class="chem">(0.337, 0.913)</span> and <span class="chem">(1.587, 2.163)</span>: total <b>1.15 min</b>.</p>
      solution: "<p><strong>解読：</strong>すべての文を関数に置き換えます：周期 = 1/振動数、B = A を半回転ずらしたもの、鉛直方向の距離 = <span class=\"chem\">|h_A - h_B| = 40|sin(0.8pi t)|</span>。</p><p>(b) <span class=\"chem\">sin(0.8pi t) = 0.6</span>：<span class=\"chem\">0.8pi t = 0.6435</span> または <span class=\"chem\">pi - 0.6435</span> なので、<span class=\"chem\">t = 0.256</span>、<span class=\"chem\">0.994</span> min。</p><p>(c) <span class=\"chem\">40 sin(0.8pi t) = 30</span>：<span class=\"chem\">t = arcsin(0.75)/(0.8pi) = 0.337</span> min。</p><p>(d) <span class=\"chem\">(0.337, 0.913)</span> と <span class=\"chem\">(1.587, 2.163)</span> で <span class=\"chem\">|sin(0.8pi t)| &gt; 0.75</span>：合計 <b>1.15 min</b>。</p>",
      // EN: <p>(a) One revolution takes <span class="chem">1/0.4 = 2.5</span> min, so <span class="chem">b = 2pi/2.5 = 0.8pi</span>; A starts on the principal axis going up, so <span class="chem">h_A = 23 + 20 sin(0.8pi t)</span>. (b) <span class="chem">sin(0.8pi t) = 0.6</span>: <span class="chem">t = 0.256</span> min and <span class="chem">t = 0.994</span> min. (c) <span class="chem">h_B = 23 - 20 sin(0.8pi t)</span>; distance <span class="chem">= 40|sin(0.8pi t)| = 30</span> first at <span class="chem">t = 0.337</span> min. (d) <span class="chem">|sin(0.8pi t)| &gt; 0.75</span> for a total of <b>1.15 min</b> per revolution.</p>
      answer: "<p>(a) 一回転は <span class=\"chem\">1/0.4 = 2.5</span> min なので <span class=\"chem\">b = 2pi/2.5 = 0.8pi</span>。A は中心軸上から上向きに動き始めるので <span class=\"chem\">h_A = 23 + 20 sin(0.8pi t)</span>。(b) <span class=\"chem\">sin(0.8pi t) = 0.6</span>：<span class=\"chem\">t = 0.256</span> min と <span class=\"chem\">t = 0.994</span> min。(c) <span class=\"chem\">h_B = 23 - 20 sin(0.8pi t)</span>；距離 <span class=\"chem\">= 40|sin(0.8pi t)| = 30</span> となる最初の時刻は <span class=\"chem\">t = 0.337</span> min。(d) 一回転あたり <span class=\"chem\">|sin(0.8pi t)| &gt; 0.75</span> となる時間は合計 <b>1.15 min</b>。</p>",
      markscheme: [
        // EN: A1: Period = 1/0.4 = 2.5 minutes.
        "A1：周期 = 1/0.4 = 2.5 分。",
        // EN: A1: b = 2π/2.5 = 0.8π, amplitude 20, axis 23, and a sine starts on the axis moving up, so h_A(t) = 23 + 20 sin(0.8πt) (AG).
        "A1：b = 2π/2.5 = 0.8π、振幅 20、中心軸 23 であり、正弦は中心軸から上向きに始まるので h_A(t) = 23 + 20 sin(0.8πt) (AG)。",
        // EN: M1: Solve 23 + 20 sin(0.8πt) = 35, i.e. sin(0.8πt) = 0.6, on 0 ≤ t ≤ 2.5.
        "M1：0 ≤ t ≤ 2.5 で 23 + 20 sin(0.8πt) = 35、すなわち sin(0.8πt) = 0.6 を解く。",
        // EN: A1: t = 0.256 min.
        "A1：t = 0.256 min。",
        // EN: A1: t = 0.994 min.
        "A1：t = 0.994 min。",
        // EN: A1: h_B(t) = 23 − 20 sin(0.8πt) (B is half a revolution ahead).
        "A1：h_B(t) = 23 − 20 sin(0.8πt)（B は半回転先にある）。",
        // EN: A1: |h_A − h_B| = 40|sin(0.8πt)| = 30 first when t = 0.337 min.
        "A1：|h_A − h_B| = 40|sin(0.8πt)| = 30 となる最初の時刻は t = 0.337 min。",
        // EN: M1: |sin(0.8πt)| > 0.75 on two intervals per revolution, each of length (π − 2 arcsin 0.75)/(0.8π) = 0.575 min.
        "M1：|sin(0.8πt)| > 0.75 となるのは一回転あたり二つの区間で、それぞれの長さは (π − 2 arcsin 0.75)/(0.8π) = 0.575 min。",
        // EN: A1: Total = 1.15 min per revolution.
        "A1：一回転あたり合計 1.15 min。",
      ],
    },

    // ── t3-2-q033 · numeric · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q033": {
      // EN: <p>The equation <span class="chem">2 cos 2x = 3 sin x - 1</span> has two solutions in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>, where <span class="chem">x</span> is in radians.</p><p>Find the solution that lies in the interval <span class="chem">pi/2 &lt; x &lt; pi</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>方程式 <span class=\"chem\">2 cos 2x = 3 sin x - 1</span> は区間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> に二つの解をもつ。ただし <span class=\"chem\">x</span> はラジアンとする。</p><p>区間 <span class=\"chem\">pi/2 &lt; x &lt; pi</span> にある解を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The equation has <span class="chem">sin x</span> in it, so choose <span class="chem">cos 2x = 1 - 2 sin^2 x</span>.
        "方程式に <span class=\"chem\">sin x</span> が含まれているので、<span class=\"chem\">cos 2x = 1 - 2 sin^2 x</span> を選びます。",
        // EN: You should get <span class="chem">4 sin^2 x + 3 sin x - 3 = 0</span>. Solve this quadratic in <span class="chem">sin x</span> and reject any root outside <span class="chem">[-1, 1]</span>.
        "<span class=\"chem\">4 sin^2 x + 3 sin x - 3 = 0</span> となるはずです。この <span class=\"chem\">sin x</span> の二次方程式を解き、<span class=\"chem\">[-1, 1]</span> の外にある解は捨てましょう。",
        // EN: The second-quadrant solution of <span class="chem">sin x = k</span> (with <span class="chem">k &gt; 0</span>) is <span class="chem">x = pi - arcsin k</span>.
        "<span class=\"chem\">sin x = k</span>（<span class=\"chem\">k &gt; 0</span>）の第 2 象限の解は <span class=\"chem\">x = pi - arcsin k</span> です。",
      ],
      // EN: <p><span class="chem">2(1 - 2 sin^2 x) = 3 sin x - 1</span> gives <span class="chem">4 sin^2 x + 3 sin x - 3 = 0</span>, so <span class="chem">sin x = (-3 +- sqrt(57))/8</span>.</p><p><span class="chem">sin x = -1.319</span> is impossible; <span class="chem">sin x = 0.56873…</span> gives <span class="chem">x = 0.605</span> or <span class="chem">x = pi - 0.60496… = 2.5366…</span>.</p><p>Answer: <b>x = 2.54</b>.</p>
      solution: "<p><span class=\"chem\">2(1 - 2 sin^2 x) = 3 sin x - 1</span> より <span class=\"chem\">4 sin^2 x + 3 sin x - 3 = 0</span> となるので、<span class=\"chem\">sin x = (-3 +- sqrt(57))/8</span> です。</p><p><span class=\"chem\">sin x = -1.319</span> はありえません。<span class=\"chem\">sin x = 0.56873…</span> から <span class=\"chem\">x = 0.605</span> または <span class=\"chem\">x = pi - 0.60496… = 2.5366…</span> です。</p><p>答え：<b>x = 2.54</b>。</p>",
    },

    // ── t3-2-q034 · short · challenge · SL · SL 3.7, 3.8 · 8 marks
    "t3-2-q034": {
      // EN: <p>A simple model for the blood pressure of a resting patient, <span class="chem">P</span> mm Hg, <span class="chem">t</span> seconds after a measurement begins, is <span class="chem">P(t) = 95 + 25 sin(2.4pi t)</span>. One complete cycle of the model represents one heartbeat.</p><p>(a) Find the patient's heart rate, in beats per minute. [2]</p><p>(b) Write down the greatest and the least blood pressure given by the model. [2]</p><p>(c) Find the length of time during one heartbeat for which the blood pressure is above 110 mm Hg. [3]</p><p>(d) Hence find the percentage of the time for which the blood pressure is above 110 mm Hg. [1]</p>
      stem: "<p>安静にしている患者の血圧 <span class=\"chem\">P</span> mm Hg の、測定開始から <span class=\"chem\">t</span> 秒後の簡単なモデルは <span class=\"chem\">P(t) = 95 + 25 sin(2.4pi t)</span> である。モデルの一周期が心拍一回分を表す。</p><p>(a) この患者の心拍数（毎分の拍数）を求めなさい (Find)。[2]</p><p>(b) モデルによる血圧の最大値と最小値を書きなさい (Write down)。[2]</p><p>(c) 心拍一回の間に血圧が 110 mm Hg を上回る時間の長さを求めなさい。[3]</p><p>(d) これを用いて (Hence)、血圧が 110 mm Hg を上回っている時間の割合（%）を求めなさい。[1]</p>",
      hints: [
        // EN: Decode: "one cycle = one heartbeat", so the heart rate is the number of periods in 60 seconds. Units matter: the model uses seconds, the answer is per minute.
        "解読：「一周期 = 心拍一回」なので、心拍数は 60 秒間に含まれる周期の数です。単位に注意：モデルは秒を使い、答えは毎分あたりです。",
        // EN: Period <span class="chem">T = 2pi/b</span> with <span class="chem">b = 2.4pi</span>.
        "周期は <span class=\"chem\">T = 2pi/b</span>、ここで <span class=\"chem\">b = 2.4pi</span> です。",
        // EN: For (c), graph <span class="chem">P(t)</span> and <span class="chem">y = 110</span> over one period <span class="chem">0 &lt;= t &lt;= T</span> and subtract the two intersection times.
        "(c) では、一周期 <span class=\"chem\">0 &lt;= t &lt;= T</span> で <span class=\"chem\">P(t)</span> と <span class=\"chem\">y = 110</span> のグラフを描き、二つの交点の時刻の差をとりましょう。",
      ],
      // EN: <p><strong>Decoding:</strong> heart rate = beats per minute = <span class="chem">60 ÷</span> (period in seconds).</p><p>(a) <span class="chem">T = 2pi/(2.4pi) = 5/6</span> s, so 72 beats per minute. (b) 120 and 70 mm Hg.</p><p>(c) <span class="chem">sin(2.4pi t) = 0.6</span>: <span class="chem">t = 0.6435/(2.4pi) = 0.0853</span> and <span class="chem">t = (pi - 0.6435)/(2.4pi) = 0.3313</span>; difference <b>0.246 s</b>. (d) <b>29.5%</b>.</p>
      solution: "<p><strong>解読：</strong>心拍数 = 毎分の拍数 = <span class=\"chem\">60 ÷</span>（秒単位の周期）。</p><p>(a) <span class=\"chem\">T = 2pi/(2.4pi) = 5/6</span> s なので、毎分 72 拍。(b) 120 mm Hg と 70 mm Hg。</p><p>(c) <span class=\"chem\">sin(2.4pi t) = 0.6</span>：<span class=\"chem\">t = 0.6435/(2.4pi) = 0.0853</span> と <span class=\"chem\">t = (pi - 0.6435)/(2.4pi) = 0.3313</span>；差は <b>0.246 s</b>。(d) <b>29.5%</b>。</p>",
      // EN: <p>(a) Period <span class="chem">= 2pi/(2.4pi) = 0.833</span> s, so <span class="chem">60/0.8333 = 72</span> beats per minute. (b) Greatest 120 mm Hg, least 70 mm Hg. (c) <span class="chem">sin(2.4pi t) = 0.6</span> at <span class="chem">t = 0.0853</span> s and <span class="chem">t = 0.331</span> s, so <b>0.246 s</b>. (d) <span class="chem">0.246/0.833 = 29.5%</span>.</p>
      answer: "<p>(a) 周期 <span class=\"chem\">= 2pi/(2.4pi) = 0.833</span> s なので、<span class=\"chem\">60/0.8333 = 72</span> 拍/分。(b) 最大 120 mm Hg、最小 70 mm Hg。(c) <span class=\"chem\">t = 0.0853</span> s と <span class=\"chem\">t = 0.331</span> s で <span class=\"chem\">sin(2.4pi t) = 0.6</span> なので、<b>0.246 s</b>。(d) <span class=\"chem\">0.246/0.833 = 29.5%</span>。</p>",
      markscheme: [
        // EN: M1: Period = 2π/(2.4π) = 0.8333 s.
        "M1：周期 = 2π/(2.4π) = 0.8333 s。",
        // EN: A1: Heart rate = 60 ÷ 0.8333 = 72 beats per minute.
        "A1：心拍数 = 60 ÷ 0.8333 = 毎分 72 拍。",
        // EN: A1: Greatest P = 95 + 25 = 120 mm Hg.
        "A1：最大の P = 95 + 25 = 120 mm Hg。",
        // EN: A1: Least P = 95 − 25 = 70 mm Hg.
        "A1：最小の P = 95 − 25 = 70 mm Hg。",
        // EN: M1: Solve 95 + 25 sin(2.4πt) = 110 (sin(2.4πt) = 0.6) on 0 ≤ t ≤ 0.8333.
        "M1：0 ≤ t ≤ 0.8333 で 95 + 25 sin(2.4πt) = 110 (sin(2.4πt) = 0.6) を解く。",
        // EN: A1: t = 0.0853 s and t = 0.331 s.
        "A1：t = 0.0853 s と t = 0.331 s。",
        // EN: A1: Time above 110 = 0.331 − 0.0853 = 0.246 s.
        "A1：110 を上回る時間 = 0.331 − 0.0853 = 0.246 s。",
        // EN: A1: Percentage = 0.246/0.8333 × 100 = 29.5%.
        "A1：割合 = 0.246/0.8333 × 100 = 29.5%。",
      ],
    },

    // ── t3-2-q035 · numeric · challenge · SL · SL 3.7, 3.8 · 5 marks
    "t3-2-q035": {
      // EN: <p>Consider the equation <span class="chem">3 sin x + 2 sin 2x = k</span>, where <span class="chem">0 &lt;= x &lt;= 2pi</span> and <span class="chem">k ∈ ℝ</span>.</p><p>Find the largest value of <span class="chem">k</span> for which the equation has at least one solution. Give your answer to 3 significant figures.</p>
      stem: "<p>方程式 <span class=\"chem\">3 sin x + 2 sin 2x = k</span> を考える。ただし <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>、<span class=\"chem\">k ∈ ℝ</span> とする。</p><p>この方程式が少なくとも一つの解をもつような <span class=\"chem\">k</span> の最大値を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: the equation <span class="chem">f(x) = k</span> has a solution exactly when the horizontal line <span class="chem">y = k</span> meets the graph of <span class="chem">y = f(x)</span>. So the largest such <span class="chem">k</span> is the maximum value of <span class="chem">f(x) = 3 sin x + 2 sin 2x</span> on the interval.
        "解読：方程式 <span class=\"chem\">f(x) = k</span> が解をもつのは、水平な直線 <span class=\"chem\">y = k</span> が <span class=\"chem\">y = f(x)</span> のグラフと交わるときに限ります。したがって、そのような <span class=\"chem\">k</span> の最大値は、区間における <span class=\"chem\">f(x) = 3 sin x + 2 sin 2x</span> の最大値です。",
        // EN: The maximum is NOT <span class="chem">3 + 2 = 5</span>: the two terms do not reach their maxima at the same <span class="chem">x</span>.
        "最大値は <span class=\"chem\">3 + 2 = 5</span> では「ありません」：二つの項は同じ <span class=\"chem\">x</span> で最大になるわけではないからです。",
        // EN: Graph <span class="chem">y = 3 sin x + 2 sin 2x</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span> and use the maximum feature.
        "<span class=\"chem\">0 &lt;= x &lt;= 2pi</span> で <span class=\"chem\">y = 3 sin x + 2 sin 2x</span> のグラフを描き、最大値の機能を使いましょう。",
      ],
      // EN: <p><strong>Decoding:</strong> "largest <span class="chem">k</span> with at least one solution" = the maximum value of <span class="chem">f(x) = 3 sin x + 2 sin 2x</span> on <span class="chem">[0, 2pi]</span>.</p><p><span class="chem">3 sin x</span> peaks at <span class="chem">x = pi/2</span>, but <span class="chem">2 sin 2x</span> is 0 there, so the sum cannot reach 5. The GDC maximum is at <span class="chem">x = 0.996</span>, where <span class="chem">f(x) = 4.3431…</span>.</p><p>Largest value: <b>k = 4.34</b>.</p>
      solution: "<p><strong>解読：</strong>「少なくとも一つの解をもつ最大の <span class=\"chem\">k</span>」=「<span class=\"chem\">[0, 2pi]</span> における <span class=\"chem\">f(x) = 3 sin x + 2 sin 2x</span> の最大値」です。</p><p><span class=\"chem\">3 sin x</span> は <span class=\"chem\">x = pi/2</span> で最大になりますが、そこでは <span class=\"chem\">2 sin 2x</span> が 0 なので、和は 5 に届きません。GDC によると最大となるのは <span class=\"chem\">x = 0.996</span> のときで、<span class=\"chem\">f(x) = 4.3431…</span> です。</p><p>最大値：<b>k = 4.34</b>。</p>",
    },

    // ── t3-2-q036 · numeric · exam · AHL · AHL 3.9 · 4 marks
    "t3-2-q036": {
      // EN: <p>Solve the equation <span class="chem">arcsin x + arctan x = 1</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>方程式 <span class=\"chem\">arcsin x + arctan x = 1</span> を解きなさい (Solve)。答えは有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: First decide where the left-hand side is defined: <span class="chem">arcsin x</span> needs <span class="chem">-1 &lt;= x &lt;= 1</span>.
        "まず左辺が定義される範囲を確認しましょう：<span class=\"chem\">arcsin x</span> には <span class=\"chem\">-1 &lt;= x &lt;= 1</span> が必要です。",
        // EN: On this domain both <span class="chem">arcsin x</span> and <span class="chem">arctan x</span> are increasing, so the left-hand side is increasing and there is exactly one solution.
        "この定義域では <span class=\"chem\">arcsin x</span> も <span class=\"chem\">arctan x</span> も増加関数なので、左辺は増加し、解はちょうど一つです。",
        // EN: Graph <span class="chem">y = arcsin x + arctan x</span> and <span class="chem">y = 1</span> (radian mode) for <span class="chem">-1 &lt;= x &lt;= 1</span> and find the intersection.
        "<span class=\"chem\">-1 &lt;= x &lt;= 1</span>（ラジアンモード）で <span class=\"chem\">y = arcsin x + arctan x</span> と <span class=\"chem\">y = 1</span> のグラフを描き、交点を求めましょう。",
      ],
      // EN: <p>The domain is <span class="chem">-1 &lt;= x &lt;= 1</span>. Both functions are increasing there, so <span class="chem">g(x) = arcsin x + arctan x</span> is increasing and takes each value once: <span class="chem">g(-1) = -3pi/4</span>, <span class="chem">g(1) = 3pi/4 &gt; 1</span>.</p><p>The GDC gives <span class="chem">x = 0.50652…</span>, so <b>x = 0.507</b>.</p>
      solution: "<p>定義域は <span class=\"chem\">-1 &lt;= x &lt;= 1</span> です。そこでは両方の関数が増加するので、<span class=\"chem\">g(x) = arcsin x + arctan x</span> は増加し、各値を一度だけとります：<span class=\"chem\">g(-1) = -3pi/4</span>、<span class=\"chem\">g(1) = 3pi/4 &gt; 1</span>。</p><p>GDC により <span class=\"chem\">x = 0.50652…</span>、よって <b>x = 0.507</b>。</p>",
    },

    // ── t3-2-q037 · numeric · exam · AHL · AHL 3.10, SL 3.8 · 5 marks
    "t3-2-q037": {
      // EN: <p>Find the solution of the equation <span class="chem">sin(x + pi/5) = 2 cos(x - pi/7)</span> in the interval <span class="chem">0 &lt;= x &lt;= pi</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>区間 <span class=\"chem\">0 &lt;= x &lt;= pi</span> における方程式 <span class=\"chem\">sin(x + pi/5) = 2 cos(x - pi/7)</span> の解を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Either graph both sides on a GDC (radian mode) and find the intersection, or expand both sides with the compound-angle identities.
        "GDC（ラジアンモード）で両辺のグラフを描いて交点を求めるか、加法定理で両辺を展開しましょう。",
        // EN: Expanding gives <span class="chem">sin x (cos(pi/5) - 2 sin(pi/7)) = cos x (2 cos(pi/7) - sin(pi/5))</span>, so <span class="chem">tan x</span> equals a constant.
        "展開すると <span class=\"chem\">sin x (cos(pi/5) - 2 sin(pi/7)) = cos x (2 cos(pi/7) - sin(pi/5))</span> となるので、<span class=\"chem\">tan x</span> は定数に等しくなります。",
        // EN: The constant is negative (about −20.7), so the solution in <span class="chem">[0, pi]</span> is in the second quadrant: <span class="chem">x = pi + arctan(k)</span>.
        "その定数は負（約 −20.7）なので、<span class=\"chem\">[0, pi]</span> における解は第 2 象限にあります：<span class=\"chem\">x = pi + arctan(k)</span>。",
      ],
      // EN: <p>Expanding: <span class="chem">sin x cos(pi/5) + cos x sin(pi/5) = 2 cos x cos(pi/7) + 2 sin x sin(pi/7)</span>.</p><p>So <span class="chem">tan x = (2 cos(pi/7) - sin(pi/5))/(cos(pi/5) - 2 sin(pi/7)) = 1.2141…/(-0.05875…) = -20.666…</span>.</p><p>In <span class="chem">[0, pi]</span>: <span class="chem">x = pi + arctan(-20.666…) = 1.6191…</span>, so <b>x = 1.62</b> (a GDC graph confirms one intersection).</p>
      solution: "<p>展開すると：<span class=\"chem\">sin x cos(pi/5) + cos x sin(pi/5) = 2 cos x cos(pi/7) + 2 sin x sin(pi/7)</span>。</p><p>よって <span class=\"chem\">tan x = (2 cos(pi/7) - sin(pi/5))/(cos(pi/5) - 2 sin(pi/7)) = 1.2141…/(-0.05875…) = -20.666…</span>。</p><p><span class=\"chem\">[0, pi]</span> では：<span class=\"chem\">x = pi + arctan(-20.666…) = 1.6191…</span>、よって <b>x = 1.62</b>（GDC のグラフで交点が一つだけであることも確認できます）。</p>",
    },

    // ── t3-2-q038 · short · challenge · SL · SL 3.7, 3.8 · 6 marks
    "t3-2-q038": {
      // EN: <p>The depth of water, in metres, at harbour A, <span class="chem">t</span> hours after midnight, is modelled by <span class="chem">d_A(t) = 2.4 cos((pi/6.2)(t - 3)) + 5</span>.</p><p>At harbour B, further along the coast, the tide follows the same pattern with the same mean depth and the same period, but every high and low tide happens 1 hour 40 minutes later than at A, and the amplitude is 20% larger.</p><p>(a) Write down an expression for <span class="chem">d_B(t)</span>, the depth at harbour B. [2]</p><p>(b) Find the first time after midnight at which the two harbours have the same depth. Give your answer in hours after midnight to 3 significant figures. [2]</p><p>(c) Find the largest value of <span class="chem">d_A(t) - d_B(t)</span>. [2]</p>
      stem: "<p>港 A の、午前零時から <span class=\"chem\">t</span> 時間後の水深（メートル）は <span class=\"chem\">d_A(t) = 2.4 cos((pi/6.2)(t - 3)) + 5</span> でモデル化される。</p><p>海岸沿いのさらに先にある港 B では、潮の満ち引きが同じパターン（平均水深と周期が同じ）に従うが、満潮と干潮はいずれも A より 1 時間 40 分遅れて起こり、振幅は 20% 大きい。</p><p>(a) 港 B の水深 <span class=\"chem\">d_B(t)</span> を表す式を書きなさい (Write down)。[2]</p><p>(b) 午前零時以降で、二つの港の水深が初めて等しくなる時刻を求めなさい (Find)。答えは午前零時からの時間数で、有効数字 3 桁で答えなさい。[2]</p><p>(c) <span class=\"chem\">d_A(t) - d_B(t)</span> の最大値を求めなさい。[2]</p>",
      hints: [
        // EN: Decode: "happens 1 hour 40 minutes later" is a horizontal translation to the right of <span class="chem">1 2/3</span> hours (not 1.4 hours!). "20% larger" multiplies the amplitude by 1.2; the mean depth 5 stays the same.
        "解読：「1 時間 40 分遅れて起こる」は右へ <span class=\"chem\">1 2/3</span> 時間の平行移動です（1.4 時間ではありません！）。「20% 大きい」は振幅を 1.2 倍することで、平均水深 5 は変わりません。",
        // EN: Replace <span class="chem">t - 3</span> by <span class="chem">t - 3 - 5/3</span>, and 2.4 by 2.88.
        "<span class=\"chem\">t - 3</span> を <span class=\"chem\">t - 3 - 5/3</span> に、2.4 を 2.88 に置き換えます。",
        // EN: Graph <span class="chem">y = d_A(t) - d_B(t)</span>: its first zero for <span class="chem">t &gt; 0</span> is (b) and its maximum is (c).
        "<span class=\"chem\">y = d_A(t) - d_B(t)</span> のグラフを描きましょう：<span class=\"chem\">t &gt; 0</span> での最初の零点が (b)、最大値が (c) の答えです。",
      ],
      // EN: <p><strong>Decoding:</strong> a later tide is a shift to the right, and minutes must become fractions of an hour: <span class="chem">1</span> h <span class="chem">40</span> min <span class="chem">= 5/3</span> h.</p><p>(a) <span class="chem">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span>.</p><p>(b) <span class="chem">d_A - d_B = 0</span> at <span class="chem">t = 3.439…</span> and <span class="chem">9.639…</span>; the first is <b>3.44 h</b>.</p><p>(c) The maximum of <span class="chem">d_A - d_B</span> (period 12.4 h) is <b>2.21 m</b>, at <span class="chem">t = 0.339</span> (and every 12.4 h after).</p>
      solution: "<p><strong>解読：</strong>潮が遅れることは右への平行移動であり、分は時間の分数に直す必要があります：<span class=\"chem\">1</span> h <span class=\"chem\">40</span> min <span class=\"chem\">= 5/3</span> h。</p><p>(a) <span class=\"chem\">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span>。</p><p>(b) <span class=\"chem\">t = 3.439…</span> と <span class=\"chem\">9.639…</span> で <span class=\"chem\">d_A - d_B = 0</span>；最初は <b>3.44 h</b>。</p><p>(c) <span class=\"chem\">d_A - d_B</span>（周期 12.4 h）の最大値は <b>2.21 m</b> で、<span class=\"chem\">t = 0.339</span>（およびその後 12.4 h ごと）に生じます。</p>",
      // EN: <p>(a) <span class="chem">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span> (the shift is <span class="chem">3 + 5/3 = 4.667</span> h). (b) <span class="chem">t = 3.44</span> hours after midnight. (c) <b>2.21 m</b>.</p>
      answer: "<p>(a) <span class=\"chem\">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span>（平行移動量は <span class=\"chem\">3 + 5/3 = 4.667</span> h）。(b) 午前零時から <span class=\"chem\">t = 3.44</span> 時間後。(c) <b>2.21 m</b>。</p>",
      markscheme: [
        // EN: A1: Amplitude 1.2 × 2.4 = 2.88.
        "A1：振幅 1.2 × 2.4 = 2.88。",
        // EN: A1: Horizontal shift 3 + 1 h 40 min = 3 + 5/3 = 14/3 (4.67): d_B(t) = 2.88 cos((π/6.2)(t − 14/3)) + 5.
        "A1：水平方向の平行移動 3 + 1 h 40 min = 3 + 5/3 = 14/3 (4.67)：d_B(t) = 2.88 cos((π/6.2)(t − 14/3)) + 5。",
        // EN: M1: Graph d_A and d_B (or d_A − d_B) for t ≥ 0 and find the first intersection.
        "M1：t ≥ 0 で d_A と d_B（または d_A − d_B）のグラフを描き、最初の交点を求める。",
        // EN: A1: t = 3.44 hours.
        "A1：t = 3.44 時間。",
        // EN: M1: Graph d_A − d_B and use the maximum feature.
        "M1：d_A − d_B のグラフを描き、最大値の機能を使う。",
        // EN: A1: Largest value = 2.21 m.
        "A1：最大値 = 2.21 m。",
      ],
    },

    // ── t3-2-q039 · numeric · exam · SL · SL 3.7 · 4 marks
    "t3-2-q039": {
      // EN: <p>A lighthouse lamp is 500 m from a straight shoreline. The lamp turns at a constant rate, completing one revolution every 15 seconds. At <span class="chem">t = 0</span> the beam points at the point P on the shore nearest the lighthouse. For <span class="chem">0 &lt;= t &lt; 3.75</span>, the distance, in metres, of the spot of light on the shore from P after <span class="chem">t</span> seconds is <span class="chem">s(t) = 500 tan((2pi/15)t)</span>.</p><p>Find the time at which the spot of light is 1.2 km from P. Give your answer in seconds to 3 significant figures.</p>
      stem: "<p>灯台のランプはまっすぐな海岸線から 500 m 離れている。ランプは一定の速さで回転し、15 秒ごとに一回転する。<span class=\"chem\">t = 0</span> のとき、光線は灯台に最も近い海岸上の点 P を指している。<span class=\"chem\">0 &lt;= t &lt; 3.75</span> において、<span class=\"chem\">t</span> 秒後の海岸上の光の点と P との距離（メートル）は <span class=\"chem\">s(t) = 500 tan((2pi/15)t)</span> である。</p><p>光の点が P から 1.2 km 離れる時刻を求め (Find)、秒単位で有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Use the same units: 1.2 km = 1200 m.
        "単位をそろえましょう：1.2 km = 1200 m。",
        // EN: Solve <span class="chem">500 tan((2pi/15)t) = 1200</span>, i.e. <span class="chem">tan((2pi/15)t) = 2.4</span>, with a GDC (radian mode).
        "GDC（ラジアンモード）で <span class=\"chem\">500 tan((2pi/15)t) = 1200</span>、すなわち <span class=\"chem\">tan((2pi/15)t) = 2.4</span> を解きます。",
        // EN: The graph of <span class="chem">s(t)</span> has a vertical asymptote at <span class="chem">t = 3.75</span> (a quarter turn), so there is exactly one solution in <span class="chem">0 &lt;= t &lt; 3.75</span>.
        "<span class=\"chem\">s(t)</span> のグラフは <span class=\"chem\">t = 3.75</span>（四分の一回転）に鉛直な漸近線をもつので、<span class=\"chem\">0 &lt;= t &lt; 3.75</span> に解はちょうど一つです。",
      ],
      // EN: <p><span class="chem">tan((2pi/15)t) = 1200/500 = 2.4</span>, so <span class="chem">(2pi/15)t = arctan 2.4 = 1.1760…</span> and <span class="chem">t = 15 × 1.1760…/(2pi) = 2.8075…</span>.</p><p>Answer: <b>2.81 s</b>.</p>
      solution: "<p><span class=\"chem\">tan((2pi/15)t) = 1200/500 = 2.4</span> なので、<span class=\"chem\">(2pi/15)t = arctan 2.4 = 1.1760…</span>、<span class=\"chem\">t = 15 × 1.1760…/(2pi) = 2.8075…</span> です。</p><p>答え：<b>2.81 s</b>。</p>",
    },

    // ── t3-2-q040 · numeric · challenge · SL · SL 3.7, 3.8 · 4 marks
    "t3-2-q040": {
      // EN: <p>Find the number of real solutions of the equation <span class="chem">10 sin x = x</span>, where <span class="chem">x</span> is in radians.</p>
      stem: "<p>方程式 <span class=\"chem\">10 sin x = x</span> の実数解の個数を求めなさい (Find)。ただし <span class=\"chem\">x</span> はラジアンとする。</p>",
      hints: [
        // EN: Decode: no interval is given, so you must consider ALL real <span class="chem">x</span>, negative as well as positive. The question asks how many solutions, not what they are.
        "解読：区間が与えられていないので、負も正も含めた「すべての」実数 <span class=\"chem\">x</span> を考える必要があります。問われているのは解の値ではなく、解の個数です。",
        // EN: Since <span class="chem">-10 &lt;= 10 sin x &lt;= 10</span>, every solution satisfies <span class="chem">-10 &lt;= x &lt;= 10</span>. So you only need to graph <span class="chem">y = 10 sin x</span> and <span class="chem">y = x</span> on <span class="chem">[-10, 10]</span>.
        "<span class=\"chem\">-10 &lt;= 10 sin x &lt;= 10</span> なので、すべての解は <span class=\"chem\">-10 &lt;= x &lt;= 10</span> を満たします。したがって <span class=\"chem\">[-10, 10]</span> で <span class=\"chem\">y = 10 sin x</span> と <span class=\"chem\">y = x</span> のグラフを描くだけで十分です。",
        // EN: Both sides are odd functions, so the solutions come in pairs <span class="chem">±x</span>, plus <span class="chem">x = 0</span>.
        "両辺とも奇関数なので、解は <span class=\"chem\">±x</span> の組で現れ、さらに <span class=\"chem\">x = 0</span> があります。",
      ],
      // EN: <p><strong>Decoding:</strong> "real solutions" with no interval means all of ℝ; the bound <span class="chem">|10 sin x| &lt;= 10</span> limits the search to <span class="chem">-10 &lt;= x &lt;= 10</span>.</p><p>On <span class="chem">[0, 10]</span> the GDC gives <span class="chem">x = 0, 2.852, 7.068, 8.423</span>. By symmetry (both sides are odd) the negative solutions are <span class="chem">-2.852, -7.068, -8.423</span>.</p><p>Total: <b>7</b> solutions.</p>
      solution: "<p><strong>解読：</strong>区間の指定がない「実数解」は ℝ 全体を意味します。<span class=\"chem\">|10 sin x| &lt;= 10</span> という制約により、探す範囲は <span class=\"chem\">-10 &lt;= x &lt;= 10</span> に限られます。</p><p><span class=\"chem\">[0, 10]</span> では GDC により <span class=\"chem\">x = 0, 2.852, 7.068, 8.423</span>。対称性（両辺とも奇関数）から、負の解は <span class=\"chem\">-2.852, -7.068, -8.423</span> です。</p><p>合計：<b>7</b> 個の解。</p>",
    },

    // ── t3-2-q041 · short · exam · AHL · AHL 3.9 · 6 marks
    "t3-2-q041": {
      // EN: <p>Let <span class="chem">f(x) = 2 arccos(x/3) - pi/2</span>.</p><p>(a) Write down the largest possible domain of <span class="chem">f</span>, and find the range of <span class="chem">f</span> for this domain. [2]</p><p>(b) Find the exact value of the <span class="chem">x</span>-intercept of the graph of <span class="chem">f</span>. [2]</p><p>(c) Solve <span class="chem">f(x) = x</span>. [2]</p>
      stem: "<p><span class=\"chem\">f(x) = 2 arccos(x/3) - pi/2</span> とする。</p><p>(a) <span class=\"chem\">f</span> のとりうる最大の定義域を書き (Write down)、この定義域における <span class=\"chem\">f</span> の値域を求めなさい (Find)。[2]</p><p>(b) <span class=\"chem\">f</span> のグラフの <span class=\"chem\">x</span> 切片の厳密値を求めなさい。[2]</p><p>(c) <span class=\"chem\">f(x) = x</span> を解きなさい (Solve)。[2]</p>",
      hints: [
        // EN: The domain of <span class="chem">arccos u</span> is <span class="chem">-1 &lt;= u &lt;= 1</span> and its range is <span class="chem">0 &lt;= arccos u &lt;= pi</span>. Apply the stretch by 2 and the shift down by <span class="chem">pi/2</span>.
        "<span class=\"chem\">arccos u</span> の定義域は <span class=\"chem\">-1 &lt;= u &lt;= 1</span>、値域は <span class=\"chem\">0 &lt;= arccos u &lt;= pi</span> です。これに 2 倍の拡大と、下へ <span class=\"chem\">pi/2</span> の平行移動を適用しましょう。",
        // EN: For (b), set <span class="chem">f(x) = 0</span> and take cos of both sides.
        "(b) では、<span class=\"chem\">f(x) = 0</span> とおいて両辺の cos をとります。",
        // EN: For (c), <span class="chem">f</span> is decreasing and <span class="chem">y = x</span> is increasing, so there is exactly one intersection: find it on a GDC.
        "(c) では、<span class=\"chem\">f</span> は減少し <span class=\"chem\">y = x</span> は増加するので、交点はちょうど一つです：GDC で求めましょう。",
      ],
      // EN: <p>(a) Domain <span class="chem">-3 &lt;= x &lt;= 3</span>; range <span class="chem">-pi/2 &lt;= f(x) &lt;= 3pi/2</span>. (b) <span class="chem">arccos(x/3) = pi/4</span>, so <span class="chem">x = 3cos(pi/4) = 3sqrt(2)/2</span>. (c) <span class="chem">x = 0.936</span>.</p>
      answer: "<p>(a) 定義域 <span class=\"chem\">-3 &lt;= x &lt;= 3</span>；値域 <span class=\"chem\">-pi/2 &lt;= f(x) &lt;= 3pi/2</span>。(b) <span class=\"chem\">arccos(x/3) = pi/4</span> より <span class=\"chem\">x = 3cos(pi/4) = 3sqrt(2)/2</span>。(c) <span class=\"chem\">x = 0.936</span>。</p>",
      markscheme: [
        // EN: A1: Domain −3 ≤ x ≤ 3 (since −1 ≤ x/3 ≤ 1).
        "A1：定義域 −3 ≤ x ≤ 3（−1 ≤ x/3 ≤ 1 より）。",
        // EN: A1: Range −π/2 ≤ f(x) ≤ 3π/2 (arccos takes values in [0, π]).
        "A1：値域 −π/2 ≤ f(x) ≤ 3π/2（arccos の値は [0, π] にある）。",
        // EN: M1: f(x) = 0 gives arccos(x/3) = π/4.
        "M1：f(x) = 0 より arccos(x/3) = π/4。",
        // EN: A1: x = 3 cos(π/4) = 3√2/2.
        "A1：x = 3 cos(π/4) = 3√2/2。",
        // EN: M1: Graph y = f(x) and y = x on −3 ≤ x ≤ 3 and find the intersection.
        "M1：−3 ≤ x ≤ 3 で y = f(x) と y = x のグラフを描き、交点を求める。",
        // EN: A1: x = 0.936.
        "A1：x = 0.936。",
      ],
    },

    // ── t3-2-q042 · numeric · foundation · SL · SL 3.5 · 3 marks
    "t3-2-q042": {
      // EN: <p>Find the exact value of <span class="chem">cos(7pi/4) × tan(4pi/3)</span>.</p>
      stem: "<p><span class=\"chem\">cos(7pi/4) × tan(4pi/3)</span> の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: <span class="chem">7pi/4</span> is in quadrant IV (reference angle <span class="chem">pi/4</span>), where cos is positive. <span class="chem">4pi/3</span> is in quadrant III (reference angle <span class="chem">pi/3</span>), where tan is positive.
        "<span class=\"chem\">7pi/4</span> は第 4 象限（基準角 <span class=\"chem\">pi/4</span>）にあり、そこでは cos は正です。<span class=\"chem\">4pi/3</span> は第 3 象限（基準角 <span class=\"chem\">pi/3</span>）にあり、そこでは tan は正です。",
        // EN: <span class="chem">cos(7pi/4) = sqrt(2)/2</span> and <span class="chem">tan(4pi/3) = tan(pi/3) = sqrt(3)</span>.
        "<span class=\"chem\">cos(7pi/4) = sqrt(2)/2</span>、<span class=\"chem\">tan(4pi/3) = tan(pi/3) = sqrt(3)</span> です。",
      ],
      // EN: <p><span class="chem">cos(7pi/4) = +cos(pi/4) = sqrt(2)/2</span>; <span class="chem">tan(4pi/3) = +tan(pi/3) = sqrt(3)</span>.</p><p>Product: <span class="chem">(sqrt(2)/2) × sqrt(3) =</span> <b><span class="chem">sqrt(6)/2</span></b>.</p>
      solution: "<p><span class=\"chem\">cos(7pi/4) = +cos(pi/4) = sqrt(2)/2</span>；<span class=\"chem\">tan(4pi/3) = +tan(pi/3) = sqrt(3)</span>。</p><p>積：<span class=\"chem\">(sqrt(2)/2) × sqrt(3) =</span> <b><span class=\"chem\">sqrt(6)/2</span></b>。</p>",
    },

    // ── t3-2-q043 · numeric · foundation · SL · SL 3.6 · 3 marks
    "t3-2-q043": {
      // EN: <p>The angle <span class="chem">theta</span> is obtuse and <span class="chem">sin theta = 5/13</span>. Find the exact value of <span class="chem">tan theta</span>.</p>
      stem: "<p>角 <span class=\"chem\">theta</span> は鈍角で、<span class=\"chem\">sin theta = 5/13</span> である。<span class=\"chem\">tan theta</span> の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: Use <span class="chem">cos^2 theta = 1 - sin^2 theta</span>. An obtuse angle is in quadrant II, where cosine is negative.
        "<span class=\"chem\">cos^2 theta = 1 - sin^2 theta</span> を使います。鈍角は第 2 象限にあり、そこではコサインは負です。",
        // EN: <span class="chem">cos theta = -12/13</span>, then <span class="chem">tan theta = sin theta / cos theta</span>.
        "<span class=\"chem\">cos theta = -12/13</span>、次に <span class=\"chem\">tan theta = sin theta / cos theta</span> です。",
      ],
      // EN: <p><span class="chem">cos^2 theta = 1 - 25/169 = 144/169</span>, and <span class="chem">theta</span> is obtuse, so <span class="chem">cos theta = -12/13</span>.</p><p><span class="chem">tan theta = (5/13)/(-12/13) =</span> <b><span class="chem">-5/12</span></b>.</p>
      solution: "<p><span class=\"chem\">cos^2 theta = 1 - 25/169 = 144/169</span> であり、<span class=\"chem\">theta</span> は鈍角なので <span class=\"chem\">cos theta = -12/13</span> です。</p><p><span class=\"chem\">tan theta = (5/13)/(-12/13) =</span> <b><span class=\"chem\">-5/12</span></b>。</p>",
    },

    // ── t3-2-q044 · mcq · foundation · SL · SL 3.7 · 2 marks
    "t3-2-q044": {
      // EN: <p>Consider the graph of <span class="chem">y = tan(x/2)</span> for <span class="chem">-2pi &lt; x &lt; 2pi</span>. Which option gives its period and the equations of its vertical asymptotes in this interval?</p>
      stem: "<p><span class=\"chem\">-2pi &lt; x &lt; 2pi</span> における <span class=\"chem\">y = tan(x/2)</span> のグラフを考える。その周期と、この区間における鉛直な漸近線の方程式を正しく示しているのはどれですか？</p>",
      options: [
        // EN: Period <span class="chem">2pi</span>; asymptotes <span class="chem">x = -pi</span> and <span class="chem">x = pi</span>
        "周期 <span class=\"chem\">2pi</span>；漸近線 <span class=\"chem\">x = -pi</span> と <span class=\"chem\">x = pi</span>",
        // EN: Period <span class="chem">pi/2</span>; asymptotes <span class="chem">x = -pi/4</span> and <span class="chem">x = pi/4</span>
        "周期 <span class=\"chem\">pi/2</span>；漸近線 <span class=\"chem\">x = -pi/4</span> と <span class=\"chem\">x = pi/4</span>",
        // EN: Period <span class="chem">4pi</span>; no asymptotes in this interval
        "周期 <span class=\"chem\">4pi</span>；この区間に漸近線はない",
        // EN: Period <span class="chem">2pi</span>; asymptotes <span class="chem">x = -pi/2</span> and <span class="chem">x = pi/2</span>
        "周期 <span class=\"chem\">2pi</span>；漸近線 <span class=\"chem\">x = -pi/2</span> と <span class=\"chem\">x = pi/2</span>",
      ],
      hints: [
        // EN: The basic graph <span class="chem">y = tan u</span> has period <span class="chem">pi</span> and asymptotes at <span class="chem">u = pi/2 + k pi</span>.
        "基本のグラフ <span class=\"chem\">y = tan u</span> は周期 <span class=\"chem\">pi</span> で、漸近線は <span class=\"chem\">u = pi/2 + k pi</span> にあります。",
        // EN: Put <span class="chem">u = x/2</span>: the asymptotes are where <span class="chem">x/2 = ±pi/2</span>.
        "<span class=\"chem\">u = x/2</span> とおくと、漸近線は <span class=\"chem\">x/2 = ±pi/2</span> となるところです。",
      ],
      // EN: <p>Period of <span class="chem">tan(bx)</span> is <span class="chem">pi/b = pi/(1/2) = 2pi</span>. Asymptotes where <span class="chem">x/2 = pi/2 + k pi</span>, i.e. <span class="chem">x = pi + 2k pi</span>; in <span class="chem">(-2pi, 2pi)</span> these are <b><span class="chem">x = -pi</span> and <span class="chem">x = pi</span></b>.</p>
      solution: "<p><span class=\"chem\">tan(bx)</span> の周期は <span class=\"chem\">pi/b = pi/(1/2) = 2pi</span> です。漸近線は <span class=\"chem\">x/2 = pi/2 + k pi</span>、すなわち <span class=\"chem\">x = pi + 2k pi</span> にあり、<span class=\"chem\">(-2pi, 2pi)</span> では <b><span class=\"chem\">x = -pi</span> と <span class=\"chem\">x = pi</span></b> です。</p>",
      misconception: {
        // EN (option B): You multiplied the period π by 1/2. A horizontal stretch by factor 2 (x/2 inside) doubles the period: π ÷ (1/2) = 2π.
        "1": "周期 π に 1/2 を掛けています。水平方向に 2 倍に拡大する（括弧の中が x/2）と周期は倍になります：π ÷ (1/2) = 2π。",
        // EN (option C): The period of tan(bx) is π/b, not 2π/b: tan repeats every π, unlike sin and cos.
        "2": "tan(bx) の周期は 2π/b ではなく π/b です：sin や cos と違って、tan は π ごとに繰り返します。",
        // EN (option D): These are the asymptotes of y = tan x. For tan(x/2) the asymptotes are where x/2 = ±π/2, that is x = ±π.
        "3": "これは y = tan x の漸近線です。tan(x/2) の漸近線は x/2 = ±π/2、すなわち x = ±π となるところにあります。",
      },
    },

    // ── t3-2-q045 · short · exam · SL · SL 3.6, 3.8 · 6 marks
    "t3-2-q045": {
      // EN: <p>(a) Show that the equation <span class="chem">cos 2x + 3 sin x = 2</span> can be written as <span class="chem">2 sin^2 x - 3 sin x + 1 = 0</span>. [2]</p><p>(b) Hence solve <span class="chem">cos 2x + 3 sin x = 2</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>. [4]</p>
      stem: "<p>(a) 方程式 <span class=\"chem\">cos 2x + 3 sin x = 2</span> が <span class=\"chem\">2 sin^2 x - 3 sin x + 1 = 0</span> と書けることを示しなさい (Show that)。[2]</p><p>(b) これを用いて (Hence)、<span class=\"chem\">0 &lt;= x &lt;= 2pi</span> において <span class=\"chem\">cos 2x + 3 sin x = 2</span> を解きなさい。[4]</p>",
      hints: [
        // EN: The equation contains <span class="chem">sin x</span>, so pick the form of <span class="chem">cos 2x</span> that uses only <span class="chem">sin x</span>.
        "方程式に <span class=\"chem\">sin x</span> が含まれているので、<span class=\"chem\">sin x</span> だけを使う <span class=\"chem\">cos 2x</span> の形を選びましょう。",
        // EN: The quadratic factorises. <span class="chem">sin x = 1/2</span> has two solutions in <span class="chem">[0, 2pi]</span>, but <span class="chem">sin x = 1</span> has only one.
        "この二次方程式は因数分解できます。<span class=\"chem\">sin x = 1/2</span> は <span class=\"chem\">[0, 2pi]</span> に二つの解をもちますが、<span class=\"chem\">sin x = 1</span> は一つだけです。",
      ],
      // EN: <p>(a) <span class="chem">1 - 2 sin^2 x + 3 sin x = 2</span>, so <span class="chem">2 sin^2 x - 3 sin x + 1 = 0</span>. (b) <span class="chem">(2 sin x - 1)(sin x - 1) = 0</span>, so <span class="chem">sin x = 1/2</span> or <span class="chem">sin x = 1</span>: <span class="chem">x = pi/6, pi/2, 5pi/6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">1 - 2 sin^2 x + 3 sin x = 2</span> より <span class=\"chem\">2 sin^2 x - 3 sin x + 1 = 0</span>。(b) <span class=\"chem\">(2 sin x - 1)(sin x - 1) = 0</span> より <span class=\"chem\">sin x = 1/2</span> または <span class=\"chem\">sin x = 1</span>：<span class=\"chem\">x = pi/6, pi/2, 5pi/6</span>。</p>",
      markscheme: [
        // EN: M1: Use cos 2x = 1 − 2 sin²x (the form that matches sin x).
        "M1：cos 2x = 1 − 2 sin²x を用いる（sin x に合わせた形）。",
        // EN: A1: 1 − 2 sin²x + 3 sin x − 2 = 0, so 2 sin²x − 3 sin x + 1 = 0 (AG).
        "A1：1 − 2 sin²x + 3 sin x − 2 = 0 より 2 sin²x − 3 sin x + 1 = 0 (AG)。",
        // EN: M1: Factorise: (2 sin x − 1)(sin x − 1) = 0.
        "M1：因数分解する：(2 sin x − 1)(sin x − 1) = 0。",
        // EN: A1: sin x = 1/2 or sin x = 1.
        "A1：sin x = 1/2 または sin x = 1。",
        // EN: A1: x = π/6, 5π/6.
        "A1：x = π/6, 5π/6。",
        // EN: A1: x = π/2.
        "A1：x = π/2。",
      ],
    },

    // ── t3-2-q046 · numeric · exam · SL · SL 3.5, 3.6 · 4 marks
    "t3-2-q046": {
      // EN: <p>Given that <span class="chem">tan theta = -2</span> and <span class="chem">3pi/2 &lt; theta &lt; 2pi</span>, find the exact value of <span class="chem">cos 2theta</span>.</p>
      stem: "<p><span class=\"chem\">tan theta = -2</span> かつ <span class=\"chem\">3pi/2 &lt; theta &lt; 2pi</span> のとき、<span class=\"chem\">cos 2theta</span> の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: Draw a right-angled triangle with opposite 2 and adjacent 1: the hypotenuse is <span class="chem">sqrt(5)</span>. In quadrant IV, cos is positive and sin is negative.
        "対辺 2、隣辺 1 の直角三角形を描くと、斜辺は <span class=\"chem\">sqrt(5)</span> です。第 4 象限では cos は正、sin は負です。",
        // EN: <span class="chem">cos theta = 1/sqrt(5)</span>, <span class="chem">sin theta = -2/sqrt(5)</span>. Then use <span class="chem">cos 2theta = cos^2 theta - sin^2 theta</span>.
        "<span class=\"chem\">cos theta = 1/sqrt(5)</span>、<span class=\"chem\">sin theta = -2/sqrt(5)</span>。次に <span class=\"chem\">cos 2theta = cos^2 theta - sin^2 theta</span> を使いましょう。",
      ],
      // EN: <p>In quadrant IV: <span class="chem">cos theta = 1/sqrt(5)</span>, <span class="chem">sin theta = -2/sqrt(5)</span>.</p><p><span class="chem">cos 2theta = cos^2 theta - sin^2 theta = 1/5 - 4/5 =</span> <b><span class="chem">-3/5</span></b>. (The sign of <span class="chem">sin theta</span> does not matter here, because it is squared.)</p>
      solution: "<p>第 4 象限では：<span class=\"chem\">cos theta = 1/sqrt(5)</span>、<span class=\"chem\">sin theta = -2/sqrt(5)</span>。</p><p><span class=\"chem\">cos 2theta = cos^2 theta - sin^2 theta = 1/5 - 4/5 =</span> <b><span class=\"chem\">-3/5</span></b>。（ここでは <span class=\"chem\">sin theta</span> は二乗されるので、その符号は関係ありません。）</p>",
    },

    // ── t3-2-q047 · short · exam · SL · SL 3.7, 3.8 · 9 marks
    "t3-2-q047": {
      // EN: <p>The function <span class="chem">f(x) = a sin(b(x - c)) + d</span>, where <span class="chem">a, b &gt; 0</span> and <span class="chem">-pi/2 &lt; c &lt; 0</span>, has a maximum point at <span class="chem">(pi/8, 7)</span>. The next minimum point to the right is <span class="chem">(5pi/8, -1)</span>.</p><p>(a) Write down the value of <span class="chem">a</span> and the value of <span class="chem">d</span>. [2]</p><p>(b) Find the value of <span class="chem">b</span>. [2]</p><p>(c) Find the value of <span class="chem">c</span>. [1]</p><p>(d) Solve <span class="chem">f(x) = 5</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. [4]</p>
      stem: "<p>関数 <span class=\"chem\">f(x) = a sin(b(x - c)) + d</span>（ただし <span class=\"chem\">a, b &gt; 0</span>、<span class=\"chem\">-pi/2 &lt; c &lt; 0</span>）は極大点 <span class=\"chem\">(pi/8, 7)</span> をもつ。その右隣の極小点は <span class=\"chem\">(5pi/8, -1)</span> である。</p><p>(a) <span class=\"chem\">a</span> の値と <span class=\"chem\">d</span> の値を書きなさい (Write down)。[2]</p><p>(b) <span class=\"chem\">b</span> の値を求めなさい (Find)。[2]</p><p>(c) <span class=\"chem\">c</span> の値を求めなさい。[1]</p><p>(d) <span class=\"chem\">0 &lt;= x &lt;= pi</span> において <span class=\"chem\">f(x) = 5</span> を解きなさい (Solve)。[4]</p>",
      hints: [
        // EN: Amplitude = half the distance from max to min; the principal axis is halfway between them. From a maximum to the next minimum is half a period.
        "振幅 = 最大値から最小値までの距離の半分、中心軸はその真ん中です。極大点から次の極小点までは半周期です。",
        // EN: A positive sine reaches its maximum when the bracket equals <span class="chem">pi/2</span>: solve <span class="chem">b(pi/8 - c) = pi/2</span>.
        "正の正弦関数は括弧の中が <span class=\"chem\">pi/2</span> のとき最大になります：<span class=\"chem\">b(pi/8 - c) = pi/2</span> を解きましょう。",
        // EN: For (d), let <span class="chem">u = 2x + pi/4</span> and change the interval before you solve <span class="chem">sin u = 1/2</span>.
        "(d) では、<span class=\"chem\">u = 2x + pi/4</span> とおき、<span class=\"chem\">sin u = 1/2</span> を解く前に区間を変換しましょう。",
      ],
      // EN: <p>(a) <span class="chem">a = 4</span>, <span class="chem">d = 3</span>. (b) Period <span class="chem">= 2(5pi/8 - pi/8) = pi</span>, so <span class="chem">b = 2</span>. (c) <span class="chem">2(pi/8 - c) = pi/2</span>, so <span class="chem">c = -pi/8</span>. (d) <span class="chem">sin(2x + pi/4) = 1/2</span> with <span class="chem">pi/4 &lt;= 2x + pi/4 &lt;= 9pi/4</span>: <span class="chem">2x + pi/4 = 5pi/6, 13pi/6</span>, so <span class="chem">x = 7pi/24, 23pi/24</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 4</span>、<span class=\"chem\">d = 3</span>。(b) 周期 <span class=\"chem\">= 2(5pi/8 - pi/8) = pi</span> なので <span class=\"chem\">b = 2</span>。(c) <span class=\"chem\">2(pi/8 - c) = pi/2</span> より <span class=\"chem\">c = -pi/8</span>。(d) <span class=\"chem\">pi/4 &lt;= 2x + pi/4 &lt;= 9pi/4</span> で <span class=\"chem\">sin(2x + pi/4) = 1/2</span>：<span class=\"chem\">2x + pi/4 = 5pi/6, 13pi/6</span>、よって <span class=\"chem\">x = 7pi/24, 23pi/24</span>。</p>",
      markscheme: [
        // EN: A1: a = (7 − (−1))/2 = 4.
        "A1：a = (7 − (−1))/2 = 4。",
        // EN: A1: d = (7 + (−1))/2 = 3.
        "A1：d = (7 + (−1))/2 = 3。",
        // EN: M1: Half-period = 5π/8 − π/8 = π/2, so the period is π.
        "M1：半周期 = 5π/8 − π/8 = π/2 なので、周期は π。",
        // EN: A1: b = 2π/π = 2.
        "A1：b = 2π/π = 2。",
        // EN: A1: Maximum where 2(x − c) = π/2 at x = π/8, so c = π/8 − π/4 = −π/8.
        "A1：x = π/8 で 2(x − c) = π/2 となるところが最大なので、c = π/8 − π/4 = −π/8。",
        // EN: M1: 4 sin(2x + π/4) + 3 = 5 gives sin(2x + π/4) = 1/2.
        "M1：4 sin(2x + π/4) + 3 = 5 より sin(2x + π/4) = 1/2。",
        // EN: M1: Transform the interval: π/4 ≤ 2x + π/4 ≤ 9π/4.
        "M1：区間を変換する：π/4 ≤ 2x + π/4 ≤ 9π/4。",
        // EN: A1: 2x + π/4 = 5π/6 or 13π/6 (π/6 is outside the interval).
        "A1：2x + π/4 = 5π/6 または 13π/6（π/6 は区間外）。",
        // EN: A1: x = 7π/24, 23π/24.
        "A1：x = 7π/24, 23π/24。",
      ],
    },

    // ── t3-2-q048 · numeric · exam · SL · SL 3.8 · 4 marks
    "t3-2-q048": {
      // EN: <p>Find the number of solutions of the equation <span class="chem">2 sin^2 x = sin x</span> in the interval <span class="chem">-pi &lt;= x &lt;= pi</span>.</p>
      stem: "<p>区間 <span class=\"chem\">-pi &lt;= x &lt;= pi</span> における方程式 <span class=\"chem\">2 sin^2 x = sin x</span> の解の個数を求めなさい (Find)。</p>",
      hints: [
        // EN: Do not divide by <span class="chem">sin x</span>: you would lose the solutions with <span class="chem">sin x = 0</span>. Rearrange and factorise instead.
        "<span class=\"chem\">sin x</span> で割ってはいけません：<span class=\"chem\">sin x = 0</span> の解を失ってしまいます。代わりに移項して因数分解しましょう。",
        // EN: <span class="chem">sin x (2 sin x - 1) = 0</span>. Count the solutions of <span class="chem">sin x = 0</span> on <span class="chem">[-pi, pi]</span> (include both end points) and of <span class="chem">sin x = 1/2</span>.
        "<span class=\"chem\">sin x (2 sin x - 1) = 0</span>。<span class=\"chem\">[-pi, pi]</span> における <span class=\"chem\">sin x = 0</span> の解（両端点を含む）と <span class=\"chem\">sin x = 1/2</span> の解を数えましょう。",
      ],
      // EN: <p><span class="chem">sin x (2 sin x - 1) = 0</span>.</p><p><span class="chem">sin x = 0</span>: <span class="chem">x = -pi, 0, pi</span> (3 solutions). <span class="chem">sin x = 1/2</span>: <span class="chem">x = pi/6, 5pi/6</span> (2 solutions; none in <span class="chem">[-pi, 0)</span>, where sin is not positive).</p><p>Total: <b>5</b>.</p>
      solution: "<p><span class=\"chem\">sin x (2 sin x - 1) = 0</span>。</p><p><span class=\"chem\">sin x = 0</span>：<span class=\"chem\">x = -pi, 0, pi</span>（3 個の解）。<span class=\"chem\">sin x = 1/2</span>：<span class=\"chem\">x = pi/6, 5pi/6</span>（2 個の解。<span class=\"chem\">[-pi, 0)</span> では sin は正にならないので、そこには解はありません）。</p><p>合計：<b>5</b>。</p>",
    },

    // ── t3-2-q049 · numeric · exam · AHL · AHL 3.10, SL 3.6 · 5 marks
    "t3-2-q049": {
      // EN: <p>The angle <span class="chem">A</span> is acute with <span class="chem">sin A = 3/5</span>, and the angle <span class="chem">B</span> is obtuse with <span class="chem">cos B = -12/13</span>. Find the exact value of <span class="chem">sin(A - B)</span>.</p>
      stem: "<p>角 <span class=\"chem\">A</span> は鋭角で <span class=\"chem\">sin A = 3/5</span>、角 <span class=\"chem\">B</span> は鈍角で <span class=\"chem\">cos B = -12/13</span> である。<span class=\"chem\">sin(A - B)</span> の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: Find the missing ratios with <span class="chem">sin^2 + cos^2 = 1</span>: A is acute, so <span class="chem">cos A &gt; 0</span>; B is obtuse, so <span class="chem">sin B &gt; 0</span>.
        "<span class=\"chem\">sin^2 + cos^2 = 1</span> で足りない三角比を求めます：A は鋭角なので <span class=\"chem\">cos A &gt; 0</span>、B は鈍角なので <span class=\"chem\">sin B &gt; 0</span> です。",
        // EN: <span class="chem">cos A = 4/5</span>, <span class="chem">sin B = 5/13</span>. Then <span class="chem">sin(A - B) = sin A cos B - cos A sin B</span>.
        "<span class=\"chem\">cos A = 4/5</span>、<span class=\"chem\">sin B = 5/13</span>。次に <span class=\"chem\">sin(A - B) = sin A cos B - cos A sin B</span> です。",
      ],
      // EN: <p><span class="chem">cos A = 4/5</span>, <span class="chem">sin B = 5/13</span>.</p><p><span class="chem">sin(A - B) = (3/5)(-12/13) - (4/5)(5/13) = -36/65 - 20/65 =</span> <b><span class="chem">-56/65</span></b>.</p>
      solution: "<p><span class=\"chem\">cos A = 4/5</span>、<span class=\"chem\">sin B = 5/13</span>。</p><p><span class=\"chem\">sin(A - B) = (3/5)(-12/13) - (4/5)(5/13) = -36/65 - 20/65 =</span> <b><span class=\"chem\">-56/65</span></b>。</p>",
    },

    // ── t3-2-q050 · short · challenge · AHL · AHL 3.10 · 10 marks
    "t3-2-q050": {
      // EN: <p>(a) Show that <span class="chem">tan 3theta = (3t - t^3)/(1 - 3t^2)</span>, where <span class="chem">t = tan theta</span>. [3]</p><p>(b) Show that if <span class="chem">tan 3theta = 1</span>, then <span class="chem">t = tan theta</span> satisfies <span class="chem">t^3 - 3t^2 - 3t + 1 = 0</span>. [1]</p><p>(c) By considering the solutions of <span class="chem">tan 3theta = 1</span> for <span class="chem">0 &lt; theta &lt; pi</span>, or otherwise, find the exact value of <span class="chem">tan(pi/12)</span>. Give your answer in the form <span class="chem">p + q sqrt(3)</span>, where <span class="chem">p, q in Z</span>. [6]</p>
      stem: "<p>(a) <span class=\"chem\">t = tan theta</span> とするとき、<span class=\"chem\">tan 3theta = (3t - t^3)/(1 - 3t^2)</span> であることを示しなさい (Show that)。[3]</p><p>(b) <span class=\"chem\">tan 3theta = 1</span> ならば、<span class=\"chem\">t = tan theta</span> が <span class=\"chem\">t^3 - 3t^2 - 3t + 1 = 0</span> を満たすことを示しなさい。[1]</p><p>(c) <span class=\"chem\">0 &lt; theta &lt; pi</span> における <span class=\"chem\">tan 3theta = 1</span> の解を考えることにより、または他の方法で、<span class=\"chem\">tan(pi/12)</span> の厳密値を求めなさい (Find)。答えは <span class=\"chem\">p + q sqrt(3)</span>（ただし <span class=\"chem\">p, q in Z</span>）の形で答えなさい。[6]</p>",
      hints: [
        // EN: Decode: part (c) hides an exact value inside a cubic. The three angles with <span class="chem">tan 3theta = 1</span> give the three roots of the cubic, and one root is an angle you know.
        "解読：(c) では厳密値が三次方程式の中に隠れています。<span class=\"chem\">tan 3theta = 1</span> を満たす三つの角が三次方程式の三つの解を与え、そのうち一つはよく知っている角です。",
        // EN: For (a), write <span class="chem">3theta = 2theta + theta</span> and use <span class="chem">tan(A + B)</span> with <span class="chem">tan 2theta = 2t/(1 - t^2)</span>.
        "(a) では、<span class=\"chem\">3theta = 2theta + theta</span> と書き、<span class=\"chem\">tan(A + B)</span> と <span class=\"chem\">tan 2theta = 2t/(1 - t^2)</span> を使いましょう。",
        // EN: For (c), <span class="chem">3theta = pi/4 + k pi</span>. One of the three angles is <span class="chem">3pi/4</span>, whose tangent is <span class="chem">-1</span>: use it to factorise the cubic.
        "(c) では、<span class=\"chem\">3theta = pi/4 + k pi</span> です。三つの角の一つは <span class=\"chem\">3pi/4</span> で、そのタンジェントは <span class=\"chem\">-1</span> です：これを使って三次式を因数分解しましょう。",
        // EN: Of the roots <span class="chem">2 - sqrt(3)</span> and <span class="chem">2 + sqrt(3)</span>, which belongs to the smaller angle <span class="chem">pi/12</span>?
        "解 <span class=\"chem\">2 - sqrt(3)</span> と <span class=\"chem\">2 + sqrt(3)</span> のうち、小さい方の角 <span class=\"chem\">pi/12</span> に対応するのはどちらでしょうか？",
      ],
      // EN: <p><strong>Decoding:</strong> the cubic in (b) is the equation <span class="chem">tan 3theta = 1</span> written in terms of <span class="chem">t</span>. Its roots are the tangents of the three angles that solve <span class="chem">tan 3theta = 1</span>, so one root (<span class="chem">tan(3pi/4) = -1</span>) is known and lets you factorise.</p><p><span class="chem">(t + 1)(t^2 - 4t + 1) = 0</span> gives <span class="chem">t = -1, 2 ± sqrt(3)</span>. Since <span class="chem">tan</span> increases on <span class="chem">(0, pi/2)</span>, <span class="chem">tan(pi/12) = 2 - sqrt(3)</span> and <span class="chem">tan(5pi/12) = 2 + sqrt(3)</span>.</p>
      solution: "<p><strong>解読：</strong>(b) の三次方程式は、方程式 <span class=\"chem\">tan 3theta = 1</span> を <span class=\"chem\">t</span> で表したものです。その解は <span class=\"chem\">tan 3theta = 1</span> を満たす三つの角のタンジェントなので、一つの解（<span class=\"chem\">tan(3pi/4) = -1</span>）がわかっており、それを使って因数分解できます。</p><p><span class=\"chem\">(t + 1)(t^2 - 4t + 1) = 0</span> より <span class=\"chem\">t = -1, 2 ± sqrt(3)</span>。<span class=\"chem\">tan</span> は <span class=\"chem\">(0, pi/2)</span> で増加するので、<span class=\"chem\">tan(pi/12) = 2 - sqrt(3)</span>、<span class=\"chem\">tan(5pi/12) = 2 + sqrt(3)</span> です。</p>",
      // EN: <p>(a) <span class="chem">tan(2theta + theta) = (2t/(1 - t^2) + t)/(1 - 2t^2/(1 - t^2)) = (3t - t^3)/(1 - 3t^2)</span>. (b) <span class="chem">3t - t^3 = 1 - 3t^2</span> rearranges to <span class="chem">t^3 - 3t^2 - 3t + 1 = 0</span>. (c) <span class="chem">3theta = pi/4, 5pi/4, 9pi/4</span>, so <span class="chem">theta = pi/12, 5pi/12, 3pi/4</span>: the cubic has roots <span class="chem">tan(pi/12), tan(5pi/12), -1</span>. Factorising, <span class="chem">(t + 1)(t^2 - 4t + 1) = 0</span>, so the other roots are <span class="chem">2 ± sqrt(3)</span>. <span class="chem">tan(pi/12)</span> is the smaller positive root: <span class="chem">tan(pi/12) = 2 - sqrt(3)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">tan(2theta + theta) = (2t/(1 - t^2) + t)/(1 - 2t^2/(1 - t^2)) = (3t - t^3)/(1 - 3t^2)</span>。(b) <span class=\"chem\">3t - t^3 = 1 - 3t^2</span> を整理すると <span class=\"chem\">t^3 - 3t^2 - 3t + 1 = 0</span>。(c) <span class=\"chem\">3theta = pi/4, 5pi/4, 9pi/4</span> より <span class=\"chem\">theta = pi/12, 5pi/12, 3pi/4</span>：三次方程式の解は <span class=\"chem\">tan(pi/12), tan(5pi/12), -1</span>。因数分解すると <span class=\"chem\">(t + 1)(t^2 - 4t + 1) = 0</span> なので、残りの解は <span class=\"chem\">2 ± sqrt(3)</span>。<span class=\"chem\">tan(pi/12)</span> は小さい方の正の解なので <span class=\"chem\">tan(pi/12) = 2 - sqrt(3)</span>。</p>",
      markscheme: [
        // EN: M1: Write tan 3θ = tan(2θ + θ) = (tan 2θ + tan θ)/(1 − tan 2θ tan θ).
        "M1：tan 3θ = tan(2θ + θ) = (tan 2θ + tan θ)/(1 − tan 2θ tan θ) と書く。",
        // EN: M1: Substitute tan 2θ = 2t/(1 − t²).
        "M1：tan 2θ = 2t/(1 − t²) を代入する。",
        // EN: A1: Multiply top and bottom by (1 − t²): (2t + t − t³)/(1 − t² − 2t²) = (3t − t³)/(1 − 3t²) (AG).
        "A1：分子と分母に (1 − t²) を掛ける：(2t + t − t³)/(1 − t² − 2t²) = (3t − t³)/(1 − 3t²) (AG)。",
        // EN: A1: 3t − t³ = 1 − 3t², so t³ − 3t² − 3t + 1 = 0 (AG).
        "A1：3t − t³ = 1 − 3t² より t³ − 3t² − 3t + 1 = 0 (AG)。",
        // EN: M1: 3θ = π/4 + kπ with 0 < 3θ < 3π.
        "M1：3θ = π/4 + kπ（ただし 0 < 3θ < 3π）。",
        // EN: A1: θ = π/12, 5π/12, 3π/4, so the three roots are tan(π/12), tan(5π/12) and tan(3π/4) = −1.
        "A1：θ = π/12, 5π/12, 3π/4 なので、三つの解は tan(π/12)、tan(5π/12)、tan(3π/4) = −1。",
        // EN: M1: t = −1 is a root, so (t + 1) is a factor: t³ − 3t² − 3t + 1 = (t + 1)(t² − 4t + 1).
        "M1：t = −1 が解なので (t + 1) は因数：t³ − 3t² − 3t + 1 = (t + 1)(t² − 4t + 1)。",
        // EN: A1: t² − 4t + 1 = 0 gives t = 2 ± √3.
        "A1：t² − 4t + 1 = 0 より t = 2 ± √3。",
        // EN: R1: 0 < π/12 < 5π/12 < π/2 and tan is increasing there, so tan(π/12) is the smaller root.
        "R1：0 < π/12 < 5π/12 < π/2 であり、そこで tan は増加するので、tan(π/12) は小さい方の解である。",
        // EN: A1: tan(π/12) = 2 − √3.
        "A1：tan(π/12) = 2 − √3。",
      ],
    },

    // ── t3-2-q051 · short · exam · AHL · AHL 3.9, SL 3.8 · 5 marks
    "t3-2-q051": {
      // EN: <p>(a) Show that <span class="chem">sec theta - cos theta = sin theta tan theta</span>, for <span class="chem">cos theta != 0</span>. [2]</p><p>(b) Hence solve <span class="chem">sec theta - cos theta = sqrt(3) sin theta</span> for <span class="chem">0 &lt;= theta &lt;= 2pi</span>. [3]</p>
      stem: "<p>(a) <span class=\"chem\">cos theta != 0</span> のとき、<span class=\"chem\">sec theta - cos theta = sin theta tan theta</span> であることを示しなさい (Show that)。[2]</p><p>(b) これを用いて (Hence)、<span class=\"chem\">0 &lt;= theta &lt;= 2pi</span> において <span class=\"chem\">sec theta - cos theta = sqrt(3) sin theta</span> を解きなさい。[3]</p>",
      hints: [
        // EN: Write <span class="chem">sec theta = 1/cos theta</span> and use a common denominator.
        "<span class=\"chem\">sec theta = 1/cos theta</span> と書き、通分しましょう。",
        // EN: In (b), move everything to one side and factor out <span class="chem">sin theta</span>. None of the solutions makes <span class="chem">cos theta = 0</span>, so all are valid.
        "(b) では、すべてを片側に移して <span class=\"chem\">sin theta</span> でくくります。どの解も <span class=\"chem\">cos theta = 0</span> にはならないので、すべて有効です。",
      ],
      // EN: <p>(a) <span class="chem">sec theta - cos theta = (1 - cos^2 theta)/cos theta = sin^2 theta / cos theta = sin theta tan theta</span>. (b) <span class="chem">sin theta (tan theta - sqrt(3)) = 0</span>: <span class="chem">theta = 0, pi, 2pi</span> or <span class="chem">theta = pi/3, 4pi/3</span>.</p>
      answer: "<p>(a) <span class=\"chem\">sec theta - cos theta = (1 - cos^2 theta)/cos theta = sin^2 theta / cos theta = sin theta tan theta</span>。(b) <span class=\"chem\">sin theta (tan theta - sqrt(3)) = 0</span>：<span class=\"chem\">theta = 0, pi, 2pi</span> または <span class=\"chem\">theta = pi/3, 4pi/3</span>。</p>",
      markscheme: [
        // EN: M1: Write sec θ − cos θ = 1/cos θ − cos θ = (1 − cos²θ)/cos θ.
        "M1：sec θ − cos θ = 1/cos θ − cos θ = (1 − cos²θ)/cos θ と書く。",
        // EN: A1: = sin²θ/cos θ = sin θ · (sin θ/cos θ) = sin θ tan θ (AG).
        "A1：= sin²θ/cos θ = sin θ · (sin θ/cos θ) = sin θ tan θ (AG)。",
        // EN: M1: sin θ tan θ − √3 sin θ = 0, so sin θ (tan θ − √3) = 0 (do not divide by sin θ).
        "M1：sin θ tan θ − √3 sin θ = 0 より sin θ (tan θ − √3) = 0（sin θ で割らない）。",
        // EN: A1: sin θ = 0: θ = 0, π, 2π.
        "A1：sin θ = 0：θ = 0, π, 2π。",
        // EN: A1: tan θ = √3: θ = π/3, 4π/3.
        "A1：tan θ = √3：θ = π/3, 4π/3。",
      ],
    },

    // ── t3-2-q052 · numeric · challenge · AHL · AHL 3.9, 3.11 · 4 marks
    "t3-2-q052": {
      // EN: <p>Find the largest value of <span class="chem">k</span>, where <span class="chem">0 &lt; k &lt; 2</span>, such that <span class="chem">tan(k pi) = cot(pi/9)</span>.</p>
      stem: "<p><span class=\"chem\">0 &lt; k &lt; 2</span> の範囲で、<span class=\"chem\">tan(k pi) = cot(pi/9)</span> を満たす <span class=\"chem\">k</span> の最大値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: rewrite <span class="chem">cot(pi/9)</span> as a tangent of some angle using a symmetry of the graphs, then use the period of tan to find EVERY <span class="chem">k</span> in the interval; the question wants the largest.
        "解読：グラフの対称性を使って <span class=\"chem\">cot(pi/9)</span> をある角のタンジェントに書き直し、次に tan の周期を使って区間内の「すべての」<span class=\"chem\">k</span> を求めます。問われているのはその最大値です。",
        // EN: <span class="chem">cot theta = tan(pi/2 - theta)</span>, so <span class="chem">cot(pi/9) = tan(7pi/18)</span>.
        "<span class=\"chem\">cot theta = tan(pi/2 - theta)</span> なので、<span class=\"chem\">cot(pi/9) = tan(7pi/18)</span> です。",
        // EN: tan has period <span class="chem">pi</span>: <span class="chem">k pi = 7pi/18 + n pi</span>. Which values of <span class="chem">n</span> keep <span class="chem">0 &lt; k &lt; 2</span>?
        "tan の周期は <span class=\"chem\">pi</span> です：<span class=\"chem\">k pi = 7pi/18 + n pi</span>。どの <span class=\"chem\">n</span> なら <span class=\"chem\">0 &lt; k &lt; 2</span> を満たしますか？",
      ],
      // EN: <p><strong>Decoding:</strong> the symmetry <span class="chem">cot theta = tan(pi/2 - theta)</span> turns the right-hand side into a tangent, and the hidden condition "largest" means you must use the period <span class="chem">pi</span> of tan.</p><p><span class="chem">cot(pi/9) = tan(pi/2 - pi/9) = tan(7pi/18)</span>, so <span class="chem">k pi = 7pi/18 + n pi</span>, <span class="chem">k = 7/18 + n</span>. In <span class="chem">0 &lt; k &lt; 2</span>: <span class="chem">k = 7/18</span> or <span class="chem">25/18</span>.</p><p>Largest: <b><span class="chem">k = 25/18</span></b>.</p>
      solution: "<p><strong>解読：</strong>対称性 <span class=\"chem\">cot theta = tan(pi/2 - theta)</span> により右辺がタンジェントになり、「最大」という隠れた条件から tan の周期 <span class=\"chem\">pi</span> を使う必要があります。</p><p><span class=\"chem\">cot(pi/9) = tan(pi/2 - pi/9) = tan(7pi/18)</span> なので、<span class=\"chem\">k pi = 7pi/18 + n pi</span>、<span class=\"chem\">k = 7/18 + n</span>。<span class=\"chem\">0 &lt; k &lt; 2</span> では：<span class=\"chem\">k = 7/18</span> または <span class=\"chem\">25/18</span>。</p><p>最大：<b><span class=\"chem\">k = 25/18</span></b>。</p>",
    },

    // ── t3-2-q053 · short · challenge · SL · SL 3.5, 3.6 · 8 marks
    "t3-2-q053": {
      // EN: <p>The angle <span class="chem">theta</span> satisfies <span class="chem">0 &lt; theta &lt; pi</span> and <span class="chem">sin theta + cos theta = 1/5</span>.</p><p>(a) Find the exact value of <span class="chem">sin 2theta</span>. [2]</p><p>(b) Explain why <span class="chem">pi/2 &lt; theta &lt; pi</span>, and hence find the exact value of <span class="chem">cos theta - sin theta</span>. [3]</p><p>(c) Hence find the exact value of <span class="chem">cos 2theta</span>. [3]</p>
      stem: "<p>角 <span class=\"chem\">theta</span> は <span class=\"chem\">0 &lt; theta &lt; pi</span> かつ <span class=\"chem\">sin theta + cos theta = 1/5</span> を満たす。</p><p>(a) <span class=\"chem\">sin 2theta</span> の厳密値を求めなさい (Find)。[2]</p><p>(b) <span class=\"chem\">pi/2 &lt; theta &lt; pi</span> である理由を説明し (Explain)、これを用いて (hence) <span class=\"chem\">cos theta - sin theta</span> の厳密値を求めなさい。[3]</p><p>(c) これを用いて、<span class=\"chem\">cos 2theta</span> の厳密値を求めなさい。[3]</p>",
      hints: [
        // EN: Decode: you are never asked for <span class="chem">theta</span> itself. Squaring a sum of sin and cos produces <span class="chem">sin^2 + cos^2 = 1</span> and the double-angle term <span class="chem">2 sin theta cos theta = sin 2theta</span>.
        "解読：<span class=\"chem\">theta</span> そのものは一度も問われていません。sin と cos の和を平方すると、<span class=\"chem\">sin^2 + cos^2 = 1</span> と二倍角の項 <span class=\"chem\">2 sin theta cos theta = sin 2theta</span> が現れます。",
        // EN: Square <span class="chem">sin theta + cos theta = 1/5</span>.
        "<span class=\"chem\">sin theta + cos theta = 1/5</span> の両辺を平方しましょう。",
        // EN: For (b), the sign of <span class="chem">sin 2theta</span> tells you the signs of sin and cos. Square <span class="chem">cos theta - sin theta</span> in the same way, then pick the correct sign of the square root.
        "(b) では、<span class=\"chem\">sin 2theta</span> の符号から sin と cos の符号がわかります。同じように <span class=\"chem\">cos theta - sin theta</span> を平方し、平方根の正しい符号を選びましょう。",
        // EN: For (c), factorise <span class="chem">cos^2 theta - sin^2 theta</span> as a difference of two squares.
        "(c) では、<span class=\"chem\">cos^2 theta - sin^2 theta</span> を平方の差として因数分解しましょう。",
      ],
      // EN: <p><strong>Decoding:</strong> "find sin 2θ from sin θ + cos θ" is a squaring trick, and the sign of a square root is decided by the quadrant, which you must justify from the data.</p><p>(a) <span class="chem">sin 2theta = 1/25 - 1 = -24/25</span>. (b) <span class="chem">theta</span> obtuse; <span class="chem">cos theta - sin theta = -7/5</span>. (c) <span class="chem">cos 2theta = -7/25</span>. (Check: <span class="chem">sin theta = 4/5</span>, <span class="chem">cos theta = -3/5</span>.)</p>
      solution: "<p><strong>解読：</strong>「sin θ + cos θ から sin 2θ を求める」は平方するテクニックであり、平方根の符号は象限で決まります。その象限はデータから根拠を示して決める必要があります。</p><p>(a) <span class=\"chem\">sin 2theta = 1/25 - 1 = -24/25</span>。(b) <span class=\"chem\">theta</span> は鈍角；<span class=\"chem\">cos theta - sin theta = -7/5</span>。(c) <span class=\"chem\">cos 2theta = -7/25</span>。（確認：<span class=\"chem\">sin theta = 4/5</span>、<span class=\"chem\">cos theta = -3/5</span>。）</p>",
      // EN: <p>(a) Squaring: <span class="chem">1 + sin 2theta = 1/25</span>, so <span class="chem">sin 2theta = -24/25</span>. (b) <span class="chem">2 sin theta cos theta &lt; 0</span>, and <span class="chem">sin theta &gt; 0</span> on <span class="chem">(0, pi)</span>, so <span class="chem">cos theta &lt; 0</span>: <span class="chem">theta</span> is obtuse. <span class="chem">(cos theta - sin theta)^2 = 1 - sin 2theta = 49/25</span> and <span class="chem">cos theta - sin theta &lt; 0</span>, so it equals <span class="chem">-7/5</span>. (c) <span class="chem">cos 2theta = (cos theta - sin theta)(cos theta + sin theta) = (-7/5)(1/5) = -7/25</span>.</p>
      answer: "<p>(a) 平方して：<span class=\"chem\">1 + sin 2theta = 1/25</span>、よって <span class=\"chem\">sin 2theta = -24/25</span>。(b) <span class=\"chem\">2 sin theta cos theta &lt; 0</span> であり、<span class=\"chem\">(0, pi)</span> では <span class=\"chem\">sin theta &gt; 0</span> なので <span class=\"chem\">cos theta &lt; 0</span>：<span class=\"chem\">theta</span> は鈍角。<span class=\"chem\">(cos theta - sin theta)^2 = 1 - sin 2theta = 49/25</span> かつ <span class=\"chem\">cos theta - sin theta &lt; 0</span> なので、その値は <span class=\"chem\">-7/5</span>。(c) <span class=\"chem\">cos 2theta = (cos theta - sin theta)(cos theta + sin theta) = (-7/5)(1/5) = -7/25</span>。</p>",
      markscheme: [
        // EN: M1: Square both sides: sin²θ + 2 sin θ cos θ + cos²θ = 1/25.
        "M1：両辺を平方する：sin²θ + 2 sin θ cos θ + cos²θ = 1/25。",
        // EN: A1: 1 + sin 2θ = 1/25, so sin 2θ = −24/25.
        "A1：1 + sin 2θ = 1/25 より sin 2θ = −24/25。",
        // EN: R1: sin 2θ = 2 sin θ cos θ < 0 and sin θ > 0 for 0 < θ < π, so cos θ < 0 and π/2 < θ < π.
        "R1：sin 2θ = 2 sin θ cos θ < 0 かつ sin θ > 0（0 < θ < π のとき）なので、cos θ < 0 であり π/2 < θ < π。",
        // EN: M1: (cos θ − sin θ)² = 1 − 2 sin θ cos θ = 1 − sin 2θ = 49/25.
        "M1：(cos θ − sin θ)² = 1 − 2 sin θ cos θ = 1 − sin 2θ = 49/25。",
        // EN: A1: cos θ < 0 < sin θ, so cos θ − sin θ = −7/5.
        "A1：cos θ < 0 < sin θ なので cos θ − sin θ = −7/5。",
        // EN: M1: cos 2θ = cos²θ − sin²θ = (cos θ − sin θ)(cos θ + sin θ).
        "M1：cos 2θ = cos²θ − sin²θ = (cos θ − sin θ)(cos θ + sin θ)。",
        // EN: A1: = (−7/5)(1/5).
        "A1：= (−7/5)(1/5)。",
        // EN: A1: = −7/25.
        "A1：= −7/25。",
      ],
    },

    // ── t3-2-q054 · numeric · exam · SL · SL 3.7 · 3 marks
    "t3-2-q054": {
      // EN: <p>Let <span class="chem">f(x) = 5 sin(2x - pi/3) + 1</span>, for <span class="chem">x &gt; 0</span>. Find the exact value of the smallest <span class="chem">x</span> at which <span class="chem">f</span> has its maximum value.</p>
      stem: "<p><span class=\"chem\">x &gt; 0</span> において <span class=\"chem\">f(x) = 5 sin(2x - pi/3) + 1</span> とする。<span class=\"chem\">f</span> が最大値をとる最小の <span class=\"chem\">x</span> の厳密値を求めなさい (Find)。</p>",
      hints: [
        // EN: A sine function with positive amplitude is largest when its bracket equals <span class="chem">pi/2 + 2k pi</span>.
        "振幅が正の正弦関数は、括弧の中が <span class=\"chem\">pi/2 + 2k pi</span> のとき最大になります。",
        // EN: Solve <span class="chem">2x - pi/3 = pi/2</span>, and check that no smaller positive <span class="chem">x</span> works (the bracket value <span class="chem">pi/2 - 2pi</span> gives a negative <span class="chem">x</span>).
        "<span class=\"chem\">2x - pi/3 = pi/2</span> を解き、それより小さい正の <span class=\"chem\">x</span> がないことを確認しましょう（括弧の値 <span class=\"chem\">pi/2 - 2pi</span> では <span class=\"chem\">x</span> が負になります）。",
      ],
      // EN: <p>Maximum (value 6) when <span class="chem">2x - pi/3 = pi/2 + 2k pi</span>. With <span class="chem">k = 0</span>: <span class="chem">2x = 5pi/6</span>, <span class="chem">x = 5pi/12</span>. With <span class="chem">k = -1</span>, <span class="chem">x = -7pi/12 &lt; 0</span>.</p><p>Answer: <b><span class="chem">x = 5pi/12</span></b>.</p>
      solution: "<p><span class=\"chem\">2x - pi/3 = pi/2 + 2k pi</span> のとき最大（値は 6）。<span class=\"chem\">k = 0</span> のとき：<span class=\"chem\">2x = 5pi/6</span>、<span class=\"chem\">x = 5pi/12</span>。<span class=\"chem\">k = -1</span> のとき、<span class=\"chem\">x = -7pi/12 &lt; 0</span>。</p><p>答え：<b><span class=\"chem\">x = 5pi/12</span></b>。</p>",
    },

    // ── t3-2-q055 · numeric · challenge · AHL · AHL 3.11, SL 3.8 · 6 marks
    "t3-2-q055": {
      // EN: <p>Find the number of solutions of the equation <span class="chem">sin 3x = cos x</span> in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>
      stem: "<p>区間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> における方程式 <span class=\"chem\">sin 3x = cos x</span> の解の個数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is not a quadratic in disguise. Turn the right-hand side into a sine with the symmetry <span class="chem">cos x = sin(pi/2 - x)</span>, so the equation becomes <span class="chem">sin A = sin B</span>.
        "解読：これは二次方程式が隠れた問題ではありません。対称性 <span class=\"chem\">cos x = sin(pi/2 - x)</span> を使って右辺をサインに直すと、方程式は <span class=\"chem\">sin A = sin B</span> の形になります。",
        // EN: <span class="chem">sin A = sin B</span> when <span class="chem">A = B + 2k pi</span> or <span class="chem">A = pi - B + 2k pi</span> (because <span class="chem">sin(pi - theta) = sin theta</span>).
        "<span class=\"chem\">sin A = sin B</span> となるのは <span class=\"chem\">A = B + 2k pi</span> または <span class=\"chem\">A = pi - B + 2k pi</span> のときです（<span class=\"chem\">sin(pi - theta) = sin theta</span> だからです）。",
        // EN: The two families are <span class="chem">x = pi/8 + k pi/2</span> and <span class="chem">x = pi/4 + k pi</span>. List those in <span class="chem">[0, 2pi]</span> and check for repeats.
        "二つの解の系列は <span class=\"chem\">x = pi/8 + k pi/2</span> と <span class=\"chem\">x = pi/4 + k pi</span> です。<span class=\"chem\">[0, 2pi]</span> にあるものを書き出し、重複がないか確認しましょう。",
      ],
      // EN: <p><strong>Decoding:</strong> use the symmetry identities to write both sides as the same function, then solve <span class="chem">sin A = sin B</span>.</p><p><span class="chem">sin 3x = sin(pi/2 - x)</span>.</p><p>Case 1: <span class="chem">3x = pi/2 - x + 2k pi</span>, so <span class="chem">x = pi/8 + k pi/2</span>: <span class="chem">pi/8, 5pi/8, 9pi/8, 13pi/8</span>.</p><p>Case 2: <span class="chem">3x = pi - (pi/2 - x) + 2k pi</span>, so <span class="chem">x = pi/4 + k pi</span>: <span class="chem">pi/4, 5pi/4</span>.</p><p>No value appears twice: <b>6</b> solutions.</p>
      solution: "<p><strong>解読：</strong>対称性の恒等式を使って両辺を同じ関数で表し、<span class=\"chem\">sin A = sin B</span> を解きます。</p><p><span class=\"chem\">sin 3x = sin(pi/2 - x)</span>。</p><p>場合 1：<span class=\"chem\">3x = pi/2 - x + 2k pi</span> より <span class=\"chem\">x = pi/8 + k pi/2</span>：<span class=\"chem\">pi/8, 5pi/8, 9pi/8, 13pi/8</span>。</p><p>場合 2：<span class=\"chem\">3x = pi - (pi/2 - x) + 2k pi</span> より <span class=\"chem\">x = pi/4 + k pi</span>：<span class=\"chem\">pi/4, 5pi/4</span>。</p><p>重複する値はないので：<b>6</b> 個の解。</p>",
    },

    // ── t3-2-q056 · short · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q056": {
      // EN: <p>(a) Show that <span class="chem">cos^4 x - sin^4 x = cos 2x</span>. [2]</p><p>(b) Hence solve <span class="chem">cos^4 x - sin^4 x = 1/2</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. [3]</p>
      stem: "<p>(a) <span class=\"chem\">cos^4 x - sin^4 x = cos 2x</span> であることを示しなさい (Show that)。[2]</p><p>(b) これを用いて (Hence)、<span class=\"chem\">0 &lt;= x &lt;= pi</span> において <span class=\"chem\">cos^4 x - sin^4 x = 1/2</span> を解きなさい。[3]</p>",
      hints: [
        // EN: <span class="chem">cos^4 x - sin^4 x</span> is a difference of two squares: <span class="chem">(cos^2 x)^2 - (sin^2 x)^2</span>.
        "<span class=\"chem\">cos^4 x - sin^4 x</span> は平方の差です：<span class=\"chem\">(cos^2 x)^2 - (sin^2 x)^2</span>。",
        // EN: In (b), double the interval before you solve <span class="chem">cos 2x = 1/2</span>.
        "(b) では、<span class=\"chem\">cos 2x = 1/2</span> を解く前に区間を倍にしましょう。",
      ],
      // EN: <p>(a) <span class="chem">cos^4 x - sin^4 x = (cos^2 x - sin^2 x)(cos^2 x + sin^2 x) = cos 2x × 1 = cos 2x</span>. (b) <span class="chem">cos 2x = 1/2</span> with <span class="chem">0 &lt;= 2x &lt;= 2pi</span>: <span class="chem">2x = pi/3, 5pi/3</span>, so <span class="chem">x = pi/6, 5pi/6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">cos^4 x - sin^4 x = (cos^2 x - sin^2 x)(cos^2 x + sin^2 x) = cos 2x × 1 = cos 2x</span>。(b) <span class=\"chem\">0 &lt;= 2x &lt;= 2pi</span> で <span class=\"chem\">cos 2x = 1/2</span>：<span class=\"chem\">2x = pi/3, 5pi/3</span>、よって <span class=\"chem\">x = pi/6, 5pi/6</span>。</p>",
      markscheme: [
        // EN: M1: Factorise as a difference of squares: (cos²x − sin²x)(cos²x + sin²x).
        "M1：平方の差として因数分解する：(cos²x − sin²x)(cos²x + sin²x)。",
        // EN: A1: Use cos²x + sin²x = 1 and cos²x − sin²x = cos 2x to get cos 2x (AG).
        "A1：cos²x + sin²x = 1 と cos²x − sin²x = cos 2x を用いて cos 2x を得る (AG)。",
        // EN: M1: cos 2x = 1/2 with the interval changed to 0 ≤ 2x ≤ 2π.
        "M1：区間を 0 ≤ 2x ≤ 2π に変換して cos 2x = 1/2 を解く。",
        // EN: A1: 2x = π/3, 5π/3.
        "A1：2x = π/3, 5π/3。",
        // EN: A1: x = π/6, 5π/6.
        "A1：x = π/6, 5π/6。",
      ],
    },

    // ── t3-2-q057 · short · challenge · AHL · AHL 3.9, 3.10 · 18 marks
    "t3-2-q057": {
      // EN: <p>This investigation looks at the sums <span class="chem">S_n = arctan(1/3) + arctan(1/7) + arctan(1/13) + … + arctan(1/(n^2 + n + 1))</span>, where <span class="chem">n in Z^+</span>. So <span class="chem">S_1 = arctan(1/3)</span>, <span class="chem">S_2 = arctan(1/3) + arctan(1/7)</span>, and so on.</p><p>(a) Use your GDC to find <span class="chem">S_1, S_2, S_3, S_4</span> in radians, and in each case find <span class="chem">tan(S_n)</span>, written as a fraction. [4]</p><p>(b) Conjecture an expression for <span class="chem">tan(S_n)</span> in terms of <span class="chem">n</span>. [1]</p><p>(c) Use the identity for <span class="chem">tan(A - B)</span> to show that, for <span class="chem">k in Z^+</span>, <span class="chem">arctan(1/k) - arctan(1/(k + 1)) = arctan(1/(k^2 + k + 1))</span>. [4]</p><p>(d) Hence show that <span class="chem">S_n = pi/4 - arctan(1/(n + 1))</span>. [3]</p><p>(e) Hence prove your conjecture from part (b). [3]</p><p>(f) Write down the limit of <span class="chem">S_n</span> as <span class="chem">n -&gt; infty</span>. [1]</p><p>(g) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 0.78</span>. [2]</p>
      stem: "<p>この探究では、和 <span class=\"chem\">S_n = arctan(1/3) + arctan(1/7) + arctan(1/13) + … + arctan(1/(n^2 + n + 1))</span>（ただし <span class=\"chem\">n in Z^+</span>）を調べる。つまり <span class=\"chem\">S_1 = arctan(1/3)</span>、<span class=\"chem\">S_2 = arctan(1/3) + arctan(1/7)</span>、以下同様である。</p><p>(a) GDC を用いて <span class=\"chem\">S_1, S_2, S_3, S_4</span> をラジアンで求め (Find)、それぞれについて <span class=\"chem\">tan(S_n)</span> を分数で求めなさい。[4]</p><p>(b) <span class=\"chem\">tan(S_n)</span> を <span class=\"chem\">n</span> で表す式を予想しなさい (Conjecture)。[1]</p><p>(c) <span class=\"chem\">tan(A - B)</span> の恒等式を用いて、<span class=\"chem\">k in Z^+</span> に対して <span class=\"chem\">arctan(1/k) - arctan(1/(k + 1)) = arctan(1/(k^2 + k + 1))</span> であることを示しなさい (Show that)。[4]</p><p>(d) これを用いて (Hence)、<span class=\"chem\">S_n = pi/4 - arctan(1/(n + 1))</span> であることを示しなさい。[3]</p><p>(e) これを用いて、(b) の予想を証明しなさい (Prove)。[3]</p><p>(f) <span class=\"chem\">n -&gt; infty</span> のときの <span class=\"chem\">S_n</span> の極限を書きなさい (Write down)。[1]</p><p>(g) <span class=\"chem\">S_n &gt; 0.78</span> となる最小の <span class=\"chem\">n</span> の値を求めなさい。[2]</p>",
      hints: [
        // EN: Decode: this is "compute small cases, spot a pattern, prove it". The tool for the proof is <span class="chem">tan(A - B)</span> from the booklet, which turns a difference of two arctans into one arctan. Then the sum collapses (telescopes).
        "解読：これは「小さい場合を計算し、パターンを見つけ、証明する」問題です。証明の道具は公式集の <span class=\"chem\">tan(A - B)</span> で、二つの arctan の差を一つの arctan に変えます。すると和は隣り合う項が打ち消し合って消えていきます（望遠鏡和）。",
        // EN: In (a), use the fraction feature of your GDC on <span class="chem">tan(S_n)</span>. Look at the pattern <span class="chem">1/3, 2/4, 3/5, 4/6</span>.
        "(a) では、<span class=\"chem\">tan(S_n)</span> に GDC の分数機能を使いましょう。パターン <span class=\"chem\">1/3, 2/4, 3/5, 4/6</span> に注目します。",
        // EN: In (c), after you find <span class="chem">tan(A - B)</span> you still need a reason why <span class="chem">A - B</span> is in the range of arctan.
        "(c) では、<span class=\"chem\">tan(A - B)</span> を求めた後も、<span class=\"chem\">A - B</span> が arctan の値域に入る理由を示す必要があります。",
        // EN: In (g), <span class="chem">S_n &gt; 0.78</span> is equivalent to <span class="chem">tan S_n &gt; tan 0.78 = 0.98926…</span>; solve <span class="chem">n/(n + 2) &gt; 0.98926…</span> for <span class="chem">n</span>.
        "(g) では、<span class=\"chem\">S_n &gt; 0.78</span> は <span class=\"chem\">tan S_n &gt; tan 0.78 = 0.98926…</span> と同値です。<span class=\"chem\">n/(n + 2) &gt; 0.98926…</span> を <span class=\"chem\">n</span> について解きましょう。",
      ],
      // EN: <p><strong>Decoding:</strong> the investigation is about a telescoping sum. Each term <span class="chem">arctan(1/(k^2 + k + 1))</span> is secretly a difference <span class="chem">arctan(1/k) - arctan(1/(k + 1))</span> (part (c)), so almost everything cancels.</p><p>(g) <span class="chem">n/(n + 2) &gt; 0.989261…</span> ⇔ <span class="chem">n(1 - 0.989261…) &gt; 2(0.989261…)</span> ⇔ <span class="chem">n &gt; 184.25</span>. Check: <span class="chem">S_184 = 0.779993…</span>, <span class="chem">S_185 = 0.780022…</span>. So <b>n = 185</b>.</p>
      solution: "<p><strong>解読：</strong>この探究は望遠鏡和（隣り合う項が打ち消し合う和）についてのものです。各項 <span class=\"chem\">arctan(1/(k^2 + k + 1))</span> は実は差 <span class=\"chem\">arctan(1/k) - arctan(1/(k + 1))</span> であり（(c)）、ほとんどすべてが打ち消し合います。</p><p>(g) <span class=\"chem\">n/(n + 2) &gt; 0.989261…</span> ⇔ <span class=\"chem\">n(1 - 0.989261…) &gt; 2(0.989261…)</span> ⇔ <span class=\"chem\">n &gt; 184.25</span>。確認：<span class=\"chem\">S_184 = 0.779993…</span>、<span class=\"chem\">S_185 = 0.780022…</span>。よって <b>n = 185</b>。</p>",
      // EN: <p>(a) <span class="chem">S_1 = 0.322</span>, <span class="chem">tan S_1 = 1/3</span>; <span class="chem">S_2 = 0.464</span>, <span class="chem">tan S_2 = 1/2</span>; <span class="chem">S_3 = 0.540</span>, <span class="chem">tan S_3 = 3/5</span>; <span class="chem">S_4 = 0.588</span>, <span class="chem">tan S_4 = 2/3 = 4/6</span>. (b) <span class="chem">tan(S_n) = n/(n + 2)</span>. (c) With <span class="chem">A = arctan(1/k)</span>, <span class="chem">B = arctan(1/(k + 1))</span>: <span class="chem">tan(A - B) = (1/k - 1/(k + 1))/(1 + 1/(k(k + 1))) = 1/(k^2 + k + 1)</span>, and <span class="chem">0 &lt; A - B &lt; pi/2</span>. (d) The sum telescopes: <span class="chem">S_n = arctan 1 - arctan(1/(n + 1)) = pi/4 - arctan(1/(n + 1))</span>. (e) <span class="chem">tan(S_n) = (1 - 1/(n + 1))/(1 + 1/(n + 1)) = n/(n + 2)</span>. (f) <span class="chem">pi/4</span>. (g) <span class="chem">n/(n + 2) &gt; tan 0.78</span> gives <span class="chem">n &gt; 184.2</span>, so <span class="chem">n = 185</span>.</p>
      answer: "<p>(a) <span class=\"chem\">S_1 = 0.322</span>、<span class=\"chem\">tan S_1 = 1/3</span>；<span class=\"chem\">S_2 = 0.464</span>、<span class=\"chem\">tan S_2 = 1/2</span>；<span class=\"chem\">S_3 = 0.540</span>、<span class=\"chem\">tan S_3 = 3/5</span>；<span class=\"chem\">S_4 = 0.588</span>、<span class=\"chem\">tan S_4 = 2/3 = 4/6</span>。(b) <span class=\"chem\">tan(S_n) = n/(n + 2)</span>。(c) <span class=\"chem\">A = arctan(1/k)</span>、<span class=\"chem\">B = arctan(1/(k + 1))</span> とすると：<span class=\"chem\">tan(A - B) = (1/k - 1/(k + 1))/(1 + 1/(k(k + 1))) = 1/(k^2 + k + 1)</span>、かつ <span class=\"chem\">0 &lt; A - B &lt; pi/2</span>。(d) 和は打ち消し合う：<span class=\"chem\">S_n = arctan 1 - arctan(1/(n + 1)) = pi/4 - arctan(1/(n + 1))</span>。(e) <span class=\"chem\">tan(S_n) = (1 - 1/(n + 1))/(1 + 1/(n + 1)) = n/(n + 2)</span>。(f) <span class=\"chem\">pi/4</span>。(g) <span class=\"chem\">n/(n + 2) &gt; tan 0.78</span> より <span class=\"chem\">n &gt; 184.2</span>、よって <span class=\"chem\">n = 185</span>。</p>",
      markscheme: [
        // EN: A1: S₁ = 0.322, tan S₁ = 1/3.
        "A1：S₁ = 0.322、tan S₁ = 1/3。",
        // EN: A1: S₂ = 0.464, tan S₂ = 1/2.
        "A1：S₂ = 0.464、tan S₂ = 1/2。",
        // EN: A1: S₃ = 0.540, tan S₃ = 3/5.
        "A1：S₃ = 0.540、tan S₃ = 3/5。",
        // EN: A1: S₄ = 0.588, tan S₄ = 2/3 (= 4/6).
        "A1：S₄ = 0.588、tan S₄ = 2/3 (= 4/6)。",
        // EN: A1: Conjecture tan(S_n) = n/(n + 2).
        "A1：予想 tan(S_n) = n/(n + 2)。",
        // EN: M1: Let A = arctan(1/k), B = arctan(1/(k + 1)) and write tan(A − B) = (1/k − 1/(k + 1))/(1 + 1/(k(k + 1))).
        "M1：A = arctan(1/k)、B = arctan(1/(k + 1)) とおき、tan(A − B) = (1/k − 1/(k + 1))/(1 + 1/(k(k + 1))) と書く。",
        // EN: A1: Numerator = 1/(k(k + 1)), denominator = (k(k + 1) + 1)/(k(k + 1)).
        "A1：分子 = 1/(k(k + 1))、分母 = (k(k + 1) + 1)/(k(k + 1))。",
        // EN: A1: tan(A − B) = 1/(k² + k + 1).
        "A1：tan(A − B) = 1/(k² + k + 1)。",
        // EN: R1: 0 < B < A ≤ π/4, so 0 < A − B < π/2, the range of arctan; hence A − B = arctan(1/(k² + k + 1)) (AG).
        "R1：0 < B < A ≤ π/4 なので 0 < A − B < π/2 で、これは arctan の値域内；よって A − B = arctan(1/(k² + k + 1)) (AG)。",
        // EN: M1: Write S_n as a sum of the differences arctan(1/k) − arctan(1/(k + 1)) for k = 1, …, n.
        "M1：S_n を k = 1, …, n についての差 arctan(1/k) − arctan(1/(k + 1)) の和として書く。",
        // EN: A1: All middle terms cancel (telescoping), leaving arctan(1) − arctan(1/(n + 1)).
        "A1：途中の項はすべて打ち消し合い（望遠鏡和）、arctan(1) − arctan(1/(n + 1)) が残る。",
        // EN: A1: arctan 1 = π/4, so S_n = π/4 − arctan(1/(n + 1)) (AG).
        "A1：arctan 1 = π/4 なので S_n = π/4 − arctan(1/(n + 1)) (AG)。",
        // EN: M1: tan(π/4 − B) = (1 − tan B)/(1 + tan B) with tan B = 1/(n + 1).
        "M1：tan B = 1/(n + 1) として tan(π/4 − B) = (1 − tan B)/(1 + tan B)。",
        // EN: A1: = (n/(n + 1)) / ((n + 2)/(n + 1)).
        "A1：= (n/(n + 1)) / ((n + 2)/(n + 1))。",
        // EN: A1: = n/(n + 2), which proves the conjecture.
        "A1：= n/(n + 2) となり、予想が証明される。",
        // EN: A1: S_n → π/4 (since arctan(1/(n + 1)) → 0).
        "A1：S_n → π/4（arctan(1/(n + 1)) → 0 なので）。",
        // EN: M1: S_n > 0.78 ⇔ n/(n + 2) > tan 0.78 (tan is increasing on (0, π/2)), giving n > 184.2.
        "M1：S_n > 0.78 ⇔ n/(n + 2) > tan 0.78（tan は (0, π/2) で増加）であり、n > 184.2 を得る。",
        // EN: A1: n = 185.
        "A1：n = 185。",
      ],
    },

    // ── t3-2-q058 · short · challenge · AHL · AHL 3.10, SL 3.6 · 18 marks
    "t3-2-q058": {
      // EN: <p>This investigation looks at how <span class="chem">cos n theta</span> can be written as a polynomial in <span class="chem">c = cos theta</span>.</p><p>(a) Write down <span class="chem">cos 2theta</span> in terms of <span class="chem">c</span>. [1]</p><p>(b) By writing <span class="chem">3theta = 2theta + theta</span>, show that <span class="chem">cos 3theta = 4c^3 - 3c</span>. [3]</p><p>(c) Show that <span class="chem">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span>. [3]</p><p>(d) Hence find <span class="chem">cos 4theta</span> and <span class="chem">cos 5theta</span> as polynomials in <span class="chem">c</span>. [4]</p><p>(e) Conjecture the coefficient of <span class="chem">c^n</span> in the polynomial for <span class="chem">cos n theta</span>, for <span class="chem">n &gt;= 1</span>, and give a reason for your conjecture. [2]</p><p>(f) By letting <span class="chem">x = cos theta</span>, where <span class="chem">0 &lt;= theta &lt;= pi</span>, solve <span class="chem">8x^4 - 8x^2 + 1 = 0</span>. Hence find the exact value of <span class="chem">cos(pi/8)</span>. [5]</p>
      stem: "<p>この探究では、<span class=\"chem\">cos n theta</span> を <span class=\"chem\">c = cos theta</span> の多項式として表す方法を調べる。</p><p>(a) <span class=\"chem\">cos 2theta</span> を <span class=\"chem\">c</span> で表しなさい (Write down)。[1]</p><p>(b) <span class=\"chem\">3theta = 2theta + theta</span> と書くことにより、<span class=\"chem\">cos 3theta = 4c^3 - 3c</span> であることを示しなさい (Show that)。[3]</p><p>(c) <span class=\"chem\">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span> であることを示しなさい。[3]</p><p>(d) これを用いて (Hence)、<span class=\"chem\">cos 4theta</span> と <span class=\"chem\">cos 5theta</span> を <span class=\"chem\">c</span> の多項式として求めなさい。[4]</p><p>(e) <span class=\"chem\">n &gt;= 1</span> に対して、<span class=\"chem\">cos n theta</span> の多項式における <span class=\"chem\">c^n</span> の係数を予想し (Conjecture)、その予想の理由を述べなさい。[2]</p><p>(f) <span class=\"chem\">x = cos theta</span>（ただし <span class=\"chem\">0 &lt;= theta &lt;= pi</span>）とおくことにより、<span class=\"chem\">8x^4 - 8x^2 + 1 = 0</span> を解きなさい (Solve)。これを用いて、<span class=\"chem\">cos(pi/8)</span> の厳密値を求めなさい。[5]</p>",
      hints: [
        // EN: Decode: build a pattern from small cases (n = 2, 3), find a rule that produces the next case from the previous two (part (c)), then use the polynomial for <span class="chem">n = 4</span> backwards to get exact values.
        "解読：小さい場合（n = 2, 3）からパターンを作り、前の二つの場合から次の場合を作る規則（(c)）を見つけ、最後に <span class=\"chem\">n = 4</span> の多項式を逆向きに使って厳密値を求めます。",
        // EN: In (b), use <span class="chem">cos(A + B)</span>, <span class="chem">sin 2theta = 2 sin theta cos theta</span> and <span class="chem">sin^2 theta = 1 - c^2</span>.
        "(b) では、<span class=\"chem\">cos(A + B)</span>、<span class=\"chem\">sin 2theta = 2 sin theta cos theta</span>、<span class=\"chem\">sin^2 theta = 1 - c^2</span> を使いましょう。",
        // EN: In (d), rearrange (c) as <span class="chem">cos((n + 1)theta) = 2c cos(n theta) - cos((n - 1)theta)</span>.
        "(d) では、(c) を <span class=\"chem\">cos((n + 1)theta) = 2c cos(n theta) - cos((n - 1)theta)</span> と変形しましょう。",
        // EN: In (f), <span class="chem">8x^4 - 8x^2 + 1</span> is exactly <span class="chem">cos 4theta</span>. Which angles in <span class="chem">[0, pi]</span> make <span class="chem">cos 4theta = 0</span>?
        "(f) では、<span class=\"chem\">8x^4 - 8x^2 + 1</span> はまさに <span class=\"chem\">cos 4theta</span> です。<span class=\"chem\">[0, pi]</span> のどの角で <span class=\"chem\">cos 4theta = 0</span> になりますか？",
      ],
      // EN: <p><strong>Decoding:</strong> the polynomial in (f) is the <span class="chem">cos 4theta</span> polynomial from (d), so solving it is the same as solving <span class="chem">cos 4theta = 0</span>; comparing with the algebraic roots gives an exact value.</p><p>(f) <span class="chem">x^2 = (2 ± sqrt(2))/4</span> gives <span class="chem">x = ± sqrt(2 ± sqrt(2))/2</span>. The largest, <span class="chem">sqrt(2 + sqrt(2))/2 = 0.92388…</span>, matches <span class="chem">cos(pi/8) = 0.92388…</span>.</p>
      solution: "<p><strong>解読：</strong>(f) の多項式は (d) の <span class=\"chem\">cos 4theta</span> の多項式なので、それを解くことは <span class=\"chem\">cos 4theta = 0</span> を解くことと同じです。代数的に求めた解と比べることで厳密値が得られます。</p><p>(f) <span class=\"chem\">x^2 = (2 ± sqrt(2))/4</span> より <span class=\"chem\">x = ± sqrt(2 ± sqrt(2))/2</span>。最大の解 <span class=\"chem\">sqrt(2 + sqrt(2))/2 = 0.92388…</span> は <span class=\"chem\">cos(pi/8) = 0.92388…</span> と一致します。</p>",
      // EN: <p>(a) <span class="chem">2c^2 - 1</span>. (b) <span class="chem">cos 3theta = cos 2theta cos theta - sin 2theta sin theta = (2c^2 - 1)c - 2(1 - c^2)c = 4c^3 - 3c</span>. (c) Expanding, the <span class="chem">sin(n theta) sin theta</span> terms cancel, leaving <span class="chem">2 cos(n theta) cos theta</span>. (d) <span class="chem">cos 4theta = 2c(4c^3 - 3c) - (2c^2 - 1) = 8c^4 - 8c^2 + 1</span>; <span class="chem">cos 5theta = 2c(8c^4 - 8c^2 + 1) - (4c^3 - 3c) = 16c^5 - 20c^3 + 5c</span>. (e) <span class="chem">2^{n-1}</span>: each step of the recurrence multiplies the leading term by <span class="chem">2c</span>. (f) <span class="chem">cos 4theta = 0</span> gives <span class="chem">theta = pi/8, 3pi/8, 5pi/8, 7pi/8</span>, so <span class="chem">x = cos(pi/8), cos(3pi/8), cos(5pi/8), cos(7pi/8)</span>. As a quadratic in <span class="chem">x^2</span>: <span class="chem">x^2 = (2 ± sqrt(2))/4</span>. The largest root is <span class="chem">cos(pi/8) = sqrt(2 + sqrt(2))/2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2c^2 - 1</span>。(b) <span class=\"chem\">cos 3theta = cos 2theta cos theta - sin 2theta sin theta = (2c^2 - 1)c - 2(1 - c^2)c = 4c^3 - 3c</span>。(c) 展開すると <span class=\"chem\">sin(n theta) sin theta</span> の項が打ち消し合い、<span class=\"chem\">2 cos(n theta) cos theta</span> が残る。(d) <span class=\"chem\">cos 4theta = 2c(4c^3 - 3c) - (2c^2 - 1) = 8c^4 - 8c^2 + 1</span>；<span class=\"chem\">cos 5theta = 2c(8c^4 - 8c^2 + 1) - (4c^3 - 3c) = 16c^5 - 20c^3 + 5c</span>。(e) <span class=\"chem\">2^{n-1}</span>：漸化式の各ステップで最高次の項に <span class=\"chem\">2c</span> が掛かる。(f) <span class=\"chem\">cos 4theta = 0</span> より <span class=\"chem\">theta = pi/8, 3pi/8, 5pi/8, 7pi/8</span>、よって <span class=\"chem\">x = cos(pi/8), cos(3pi/8), cos(5pi/8), cos(7pi/8)</span>。<span class=\"chem\">x^2</span> の二次方程式として：<span class=\"chem\">x^2 = (2 ± sqrt(2))/4</span>。最大の解は <span class=\"chem\">cos(pi/8) = sqrt(2 + sqrt(2))/2</span>。</p>",
      markscheme: [
        // EN: A1: cos 2θ = 2c² − 1.
        "A1：cos 2θ = 2c² − 1。",
        // EN: M1: cos 3θ = cos 2θ cos θ − sin 2θ sin θ.
        "M1：cos 3θ = cos 2θ cos θ − sin 2θ sin θ。",
        // EN: M1: Substitute sin 2θ sin θ = 2 sin²θ cos θ = 2(1 − c²)c.
        "M1：sin 2θ sin θ = 2 sin²θ cos θ = 2(1 − c²)c を代入する。",
        // EN: A1: (2c² − 1)c − 2c + 2c³ = 4c³ − 3c (AG).
        "A1：(2c² − 1)c − 2c + 2c³ = 4c³ − 3c (AG)。",
        // EN: M1: Expand cos(nθ + θ) = cos nθ cos θ − sin nθ sin θ.
        "M1：cos(nθ + θ) = cos nθ cos θ − sin nθ sin θ と展開する。",
        // EN: A1: cos(nθ − θ) = cos nθ cos θ + sin nθ sin θ.
        "A1：cos(nθ − θ) = cos nθ cos θ + sin nθ sin θ。",
        // EN: A1: Add: the sin nθ sin θ terms cancel, leaving 2 cos θ cos nθ (AG).
        "A1：足すと sin nθ sin θ の項が打ち消し合い、2 cos θ cos nθ が残る (AG)。",
        // EN: M1: Use n = 3: cos 4θ = 2c cos 3θ − cos 2θ = 2c(4c³ − 3c) − (2c² − 1).
        "M1：n = 3 を用いる：cos 4θ = 2c cos 3θ − cos 2θ = 2c(4c³ − 3c) − (2c² − 1)。",
        // EN: A1: cos 4θ = 8c⁴ − 8c² + 1.
        "A1：cos 4θ = 8c⁴ − 8c² + 1。",
        // EN: M1: Use n = 4: cos 5θ = 2c cos 4θ − cos 3θ.
        "M1：n = 4 を用いる：cos 5θ = 2c cos 4θ − cos 3θ。",
        // EN: A1: cos 5θ = 16c⁵ − 20c³ + 5c.
        "A1：cos 5θ = 16c⁵ − 20c³ + 5c。",
        // EN: A1: Conjecture: the coefficient of cⁿ is 2ⁿ⁻¹.
        "A1：予想：cⁿ の係数は 2ⁿ⁻¹。",
        // EN: R1: cos((n + 1)θ) = 2c cos nθ − cos((n − 1)θ), and the second term has lower degree, so each step doubles the leading coefficient (starting from 1 for cos θ = c).
        "R1：cos((n + 1)θ) = 2c cos nθ − cos((n − 1)θ) であり、第二項は次数が低いので、各ステップで最高次の係数が倍になる（cos θ = c の係数 1 から始まる）。",
        // EN: M1: With x = cos θ the equation is cos 4θ = 0, where 0 ≤ 4θ ≤ 4π.
        "M1：x = cos θ とすると方程式は cos 4θ = 0 となり、0 ≤ 4θ ≤ 4π。",
        // EN: A1: 4θ = π/2, 3π/2, 5π/2, 7π/2, so θ = π/8, 3π/8, 5π/8, 7π/8.
        "A1：4θ = π/2, 3π/2, 5π/2, 7π/2 なので θ = π/8, 3π/8, 5π/8, 7π/8。",
        // EN: A1: The four roots are x = cos(π/8), cos(3π/8), cos(5π/8), cos(7π/8) (all different, as cos is decreasing on [0, π]).
        "A1：四つの解は x = cos(π/8), cos(3π/8), cos(5π/8), cos(7π/8)（cos は [0, π] で減少するので、すべて異なる）。",
        // EN: M1: Solve as a quadratic in x²: x² = (8 ± √32)/16 = (2 ± √2)/4.
        "M1：x² の二次方程式として解く：x² = (8 ± √32)/16 = (2 ± √2)/4。",
        // EN: A1: cos(π/8) is the largest root, so cos(π/8) = √(2 + √2)/2.
        "A1：cos(π/8) は最大の解なので、cos(π/8) = √(2 + √2)/2。",
      ],
    },

    // ── t3-2-q059 · short · challenge · AHL · AHL 3.10, 3.11 · 16 marks
    "t3-2-q059": {
      // EN: <p>This investigation finds a closed form for <span class="chem">C_n(x) = cos x + cos 2x + … + cos nx</span>, where <span class="chem">n in Z^+</span> and <span class="chem">x</span> is in radians.</p><p>(a) Let <span class="chem">x = 0.5</span>. Use your GDC to find <span class="chem">C_1(0.5)</span>, <span class="chem">C_2(0.5)</span>, <span class="chem">C_3(0.5)</span>, and compare each with the value of <span class="chem">(sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span> for the same <span class="chem">n</span>. [3]</p><p>(b) Use the identities for <span class="chem">sin(A + B)</span> and <span class="chem">sin(A - B)</span> to show that <span class="chem">2 sin(x/2) cos(kx) = sin((k + 1/2)x) - sin((k - 1/2)x)</span>. [3]</p><p>(c) Hence prove that, when <span class="chem">sin(x/2) != 0</span>, <span class="chem">C_n(x) = (sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span>. [3]</p><p>(d) Hence, using the symmetry <span class="chem">sin(pi - theta) = sin theta</span>, solve <span class="chem">cos x + cos 2x + cos 3x = 0</span> for <span class="chem">0 &lt; x &lt; pi</span>. [5]</p><p>(e) Use a symmetry of the cosine graph to deduce the number of solutions of <span class="chem">cos x + cos 2x + cos 3x = 0</span> for <span class="chem">0 &lt; x &lt; 2pi</span>. [2]</p>
      stem: "<p>この探究では、<span class=\"chem\">C_n(x) = cos x + cos 2x + … + cos nx</span>（ただし <span class=\"chem\">n in Z^+</span>、<span class=\"chem\">x</span> はラジアン）の閉じた形を求める。</p><p>(a) <span class=\"chem\">x = 0.5</span> とする。GDC を用いて <span class=\"chem\">C_1(0.5)</span>、<span class=\"chem\">C_2(0.5)</span>、<span class=\"chem\">C_3(0.5)</span> を求め (Find)、それぞれを同じ <span class=\"chem\">n</span> に対する <span class=\"chem\">(sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span> の値と比べなさい。[3]</p><p>(b) <span class=\"chem\">sin(A + B)</span> と <span class=\"chem\">sin(A - B)</span> の恒等式を用いて、<span class=\"chem\">2 sin(x/2) cos(kx) = sin((k + 1/2)x) - sin((k - 1/2)x)</span> であることを示しなさい (Show that)。[3]</p><p>(c) これを用いて (Hence)、<span class=\"chem\">sin(x/2) != 0</span> のとき <span class=\"chem\">C_n(x) = (sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span> であることを証明しなさい (Prove)。[3]</p><p>(d) これを用いて、対称性 <span class=\"chem\">sin(pi - theta) = sin theta</span> を使い、<span class=\"chem\">0 &lt; x &lt; pi</span> において <span class=\"chem\">cos x + cos 2x + cos 3x = 0</span> を解きなさい (Solve)。[5]</p><p>(e) コサインのグラフの対称性を用いて、<span class=\"chem\">0 &lt; x &lt; 2pi</span> における <span class=\"chem\">cos x + cos 2x + cos 3x = 0</span> の解の個数を導きなさい (Deduce)。[2]</p>",
      hints: [
        // EN: Decode: the sum of cosines does not simplify term by term. Multiplying each term by <span class="chem">2 sin(x/2)</span> turns it into a DIFFERENCE of two sines (part (b)), and then the sum collapses (telescopes), like a telescoping series.
        "解読：コサインの和は項ごとには簡単になりません。各項に <span class=\"chem\">2 sin(x/2)</span> を掛けると二つのサインの「差」になり（(b)）、望遠鏡級数のように和が打ち消し合って縮みます。",
        // EN: For (a), use the sum feature of your GDC, or add the terms directly. Make sure the GDC is in radian mode.
        "(a) では、GDC の和の機能を使うか、項を直接足しましょう。GDC がラジアンモードになっていることを確認しましょう。",
        // EN: For (b), write <span class="chem">(k + 1/2)x = kx + x/2</span> and <span class="chem">(k - 1/2)x = kx - x/2</span>.
        "(b) では、<span class=\"chem\">(k + 1/2)x = kx + x/2</span>、<span class=\"chem\">(k - 1/2)x = kx - x/2</span> と書きましょう。",
        // EN: For (d), with <span class="chem">n = 3</span>, <span class="chem">C_3(x) = 0</span> exactly when <span class="chem">sin(7x/2) = sin(x/2)</span>. Then use <span class="chem">sin(pi - theta) = sin theta</span> to get two families of solutions.
        "(d) では、<span class=\"chem\">n = 3</span> のとき、<span class=\"chem\">C_3(x) = 0</span> となるのは <span class=\"chem\">sin(7x/2) = sin(x/2)</span> のときに限ります。次に <span class=\"chem\">sin(pi - theta) = sin theta</span> を使って二つの解の系列を求めましょう。",
      ],
      // EN: <p><strong>Decoding:</strong> the investigation turns a sum of cosines into a telescoping sum of sines, and then turns the equation <span class="chem">C_3(x) = 0</span> into <span class="chem">sin A = sin B</span>, which is solved with the symmetry <span class="chem">sin(pi - theta) = sin theta</span>.</p><p>(d) Check: <span class="chem">C_3(pi/4) = sqrt(2)/2 + 0 - sqrt(2)/2 = 0</span>; <span class="chem">C_3(2pi/3) = -1/2 - 1/2 + 1 = 0</span>; <span class="chem">C_3(3pi/4) = -sqrt(2)/2 + 0 + sqrt(2)/2 = 0</span>.</p><p>(e) Reflecting in <span class="chem">x = pi</span> gives <span class="chem">5pi/4, 4pi/3, 7pi/4</span>: <b>6</b> solutions in <span class="chem">(0, 2pi)</span>.</p>
      solution: "<p><strong>解読：</strong>この探究では、コサインの和をサインの望遠鏡和に変え、さらに方程式 <span class=\"chem\">C_3(x) = 0</span> を <span class=\"chem\">sin A = sin B</span> に変えて、対称性 <span class=\"chem\">sin(pi - theta) = sin theta</span> で解きます。</p><p>(d) 確認：<span class=\"chem\">C_3(pi/4) = sqrt(2)/2 + 0 - sqrt(2)/2 = 0</span>；<span class=\"chem\">C_3(2pi/3) = -1/2 - 1/2 + 1 = 0</span>；<span class=\"chem\">C_3(3pi/4) = -sqrt(2)/2 + 0 + sqrt(2)/2 = 0</span>。</p><p>(e) <span class=\"chem\">x = pi</span> に関して折り返すと <span class=\"chem\">5pi/4, 4pi/3, 7pi/4</span>：<span class=\"chem\">(0, 2pi)</span> に <b>6</b> 個の解。</p>",
      // EN: <p>(a) <span class="chem">C_1 = 0.8776</span>, <span class="chem">C_2 = 1.418</span>, <span class="chem">C_3 = 1.489</span>; the expression gives the same values. (b) <span class="chem">sin(kx + x/2) - sin(kx - x/2) = 2 cos(kx) sin(x/2)</span>. (c) Summing (b) from <span class="chem">k = 1</span> to <span class="chem">n</span> telescopes to <span class="chem">sin((n + 1/2)x) - sin(x/2)</span>; divide by <span class="chem">2 sin(x/2)</span>. (d) <span class="chem">sin(7x/2) = sin(x/2)</span>: <span class="chem">7x/2 = x/2 + 2k pi</span> gives <span class="chem">x = 2pi/3</span>; <span class="chem">7x/2 = pi - x/2 + 2k pi</span> gives <span class="chem">x = pi/4, 3pi/4</span>. (e) <span class="chem">C_3(2pi - x) = C_3(x)</span>, so the solutions in <span class="chem">(pi, 2pi)</span> are <span class="chem">5pi/4, 4pi/3, 7pi/4</span>, and <span class="chem">C_3(pi) = -1 != 0</span>: <b>6</b> solutions.</p>
      answer: "<p>(a) <span class=\"chem\">C_1 = 0.8776</span>、<span class=\"chem\">C_2 = 1.418</span>、<span class=\"chem\">C_3 = 1.489</span>；式も同じ値を与える。(b) <span class=\"chem\">sin(kx + x/2) - sin(kx - x/2) = 2 cos(kx) sin(x/2)</span>。(c) (b) を <span class=\"chem\">k = 1</span> から <span class=\"chem\">n</span> まで足すと打ち消し合って <span class=\"chem\">sin((n + 1/2)x) - sin(x/2)</span> となり、<span class=\"chem\">2 sin(x/2)</span> で割る。(d) <span class=\"chem\">sin(7x/2) = sin(x/2)</span>：<span class=\"chem\">7x/2 = x/2 + 2k pi</span> から <span class=\"chem\">x = 2pi/3</span>；<span class=\"chem\">7x/2 = pi - x/2 + 2k pi</span> から <span class=\"chem\">x = pi/4, 3pi/4</span>。(e) <span class=\"chem\">C_3(2pi - x) = C_3(x)</span> なので、<span class=\"chem\">(pi, 2pi)</span> の解は <span class=\"chem\">5pi/4, 4pi/3, 7pi/4</span> であり、<span class=\"chem\">C_3(pi) = -1 != 0</span>：<b>6</b> 個の解。</p>",
      markscheme: [
        // EN: A1: C₁(0.5) = 0.8776; the expression also gives 0.8776.
        "A1：C₁(0.5) = 0.8776；式も 0.8776 を与える。",
        // EN: A1: C₂(0.5) = 1.418; the expression also gives 1.418.
        "A1：C₂(0.5) = 1.418；式も 1.418 を与える。",
        // EN: A1: C₃(0.5) = 1.489; the expression also gives 1.489.
        "A1：C₃(0.5) = 1.489；式も 1.489 を与える。",
        // EN: M1: Expand sin(kx + x/2) = sin kx cos(x/2) + cos kx sin(x/2).
        "M1：sin(kx + x/2) = sin kx cos(x/2) + cos kx sin(x/2) と展開する。",
        // EN: M1: Expand sin(kx − x/2) = sin kx cos(x/2) − cos kx sin(x/2).
        "M1：sin(kx − x/2) = sin kx cos(x/2) − cos kx sin(x/2) と展開する。",
        // EN: A1: Subtract: the sin kx cos(x/2) terms cancel, giving 2 sin(x/2) cos kx (AG).
        "A1：引くと sin kx cos(x/2) の項が打ち消し合い、2 sin(x/2) cos kx を得る (AG)。",
        // EN: M1: Add the identity for k = 1, 2, …, n: 2 sin(x/2) C_n(x) = Σ [sin((k + ½)x) − sin((k − ½)x)].
        "M1：k = 1, 2, …, n についての恒等式を足す：2 sin(x/2) C_n(x) = Σ [sin((k + ½)x) − sin((k − ½)x)]。",
        // EN: A1: The sum telescopes: the +sin((k + ½)x) term of each k cancels the −sin(((k + 1) − ½)x) term of k + 1.
        "A1：和は打ち消し合う：各 k の +sin((k + ½)x) の項が k + 1 の −sin(((k + 1) − ½)x) の項と打ち消し合う。",
        // EN: A1: 2 sin(x/2) C_n(x) = sin((n + ½)x) − sin(x/2); dividing by 2 sin(x/2) ≠ 0 gives the result (AG).
        "A1：2 sin(x/2) C_n(x) = sin((n + ½)x) − sin(x/2)；2 sin(x/2) ≠ 0 で割ると結果を得る (AG)。",
        // EN: M1: For 0 < x < π, sin(x/2) ≠ 0, so C₃(x) = 0 ⇔ sin(7x/2) = sin(x/2).
        "M1：0 < x < π では sin(x/2) ≠ 0 なので、C₃(x) = 0 ⇔ sin(7x/2) = sin(x/2)。",
        // EN: M1: sin A = sin B ⇔ A = B + 2kπ or A = π − B + 2kπ.
        "M1：sin A = sin B ⇔ A = B + 2kπ または A = π − B + 2kπ。",
        // EN: A1: 3x = 2kπ gives x = 2π/3.
        "A1：3x = 2kπ から x = 2π/3。",
        // EN: A1: 4x = π + 2kπ gives x = π/4.
        "A1：4x = π + 2kπ から x = π/4。",
        // EN: A1: and x = 3π/4 (no other values in 0 < x < π).
        "A1：および x = 3π/4（0 < x < π に他の値はない）。",
        // EN: R1: cos(k(2π − x)) = cos(kx) for every integer k, so C₃(2π − x) = C₃(x); the solutions in (π, 2π) are 2π minus those in (0, π), and x = π is not a solution since C₃(π) = −1.
        "R1：すべての整数 k について cos(k(2π − x)) = cos(kx) なので C₃(2π − x) = C₃(x)；(π, 2π) の解は (0, π) の解を 2π から引いたものであり、C₃(π) = −1 なので x = π は解ではない。",
        // EN: A1: 6 solutions.
        "A1：6 個の解。",
      ],
    },

  }
});
