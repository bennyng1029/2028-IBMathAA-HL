/* t3-2.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't3-2.q', {
  questions: {

    // ── t3-2-q001 · mcq · foundation · SL · SL 3.5 · 1 mark
    "t3-2-q001": {
      // EN: <p>What is the exact value of <span class="chem">sin(5*pi/6) + cos(2*pi/3)</span>?</p>
      stem: "<p><span class=\"chem\">sin(5*pi/6) + cos(2*pi/3)</span> 的準確值是多少？</p>",
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
        "<span class=\"chem\">5*pi/6</span> 與 <span class=\"chem\">2*pi/3</span> 皆位於第二象限，其中 <span class=\"chem\">sin &gt; 0</span> 而 <span class=\"chem\">cos &lt; 0</span>。",
        // EN: <span class="chem">sin(5*pi/6) = +sin(pi/6) = 1/2</span> and <span class="chem">cos(2*pi/3) = -cos(pi/3) = -1/2</span>.
        "<span class=\"chem\">sin(5*pi/6) = +sin(pi/6) = 1/2</span> 且 <span class=\"chem\">cos(2*pi/3) = -cos(pi/3) = -1/2</span>。",
      ],
      // EN: <div class="worked__math">sin(<span class="frac"><span>5<i>π</i></span><span>6</span></span>) + cos(<span class="frac"><span>2<i>π</i></span><span>3</span></span>) = <span class="frac"><span>1</span><span>2</span></span> + (−<span class="frac"><span>1</span><span>2</span></span>) = <b>0</b></div>
      solution: "<div class=\"worked__math\">sin(<span class=\"frac\"><span>5<i>π</i></span><span>6</span></span>) + cos(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span>) = <span class=\"frac\"><span>1</span><span>2</span></span> + (−<span class=\"frac\"><span>1</span><span>2</span></span>) = <b>0</b></div>",
      misconception: {
        // EN (option B): In Quadrant II, cos(2π/3) = −1/2 (negative!), not +1/2.
        "1": "在第二象限中，cos(2π/3) = −1/2（負數！），而非 +1/2。",
        // EN (option C): sin(5π/6) = 1/2 (not √3/2), because the reference angle is π/6 = 30°.
        "2": "sin(5π/6) = 1/2（而非 √3/2），因為參考角為 π/6 = 30°。",
        // EN (option D): In Quadrant II, sin(5π/6) = +1/2 (positive!).
        "3": "在第二象限中，sin(5π/6) = +1/2（正數！）。",
      },
    },

    // ── t3-2-q002 · numeric · foundation · SL · SL 3.6 · 3 marks
    "t3-2-q002": {
      // EN: <p>Given that <span class="chem">cos theta = -3/5</span> and <span class="chem">pi/2 &lt; theta &lt; pi</span>, find the exact value of <span class="chem">sin 2theta</span>.</p>
      stem: "<p>已知 <span class=\"chem\">cos theta = -3/5</span> 且 <span class=\"chem\">pi/2 &lt; theta &lt; pi</span>，求 (find) <span class=\"chem\">sin 2theta</span> 的準確值。</p>",
      hints: [
        // EN: In Quadrant II (<span class="chem">pi/2 &lt; theta &lt; pi</span>), <span class="chem">sin theta &gt; 0</span>, so <span class="chem">sin theta = +sqrt(1 - (-3/5)^2) = 4/5</span>.
        "在第二象限（<span class=\"chem\">pi/2 &lt; theta &lt; pi</span>）中，<span class=\"chem\">sin theta &gt; 0</span>，故 <span class=\"chem\">sin theta = +sqrt(1 - (-3/5)^2) = 4/5</span>。",
        // EN: Use <span class="chem">sin 2theta = 2 sin theta cos theta</span>.
        "使用 <span class=\"chem\">sin 2theta = 2 sin theta cos theta</span>。",
      ],
      // EN: <div class="worked__math">sin <i>θ</i> = <span class="frac"><span>4</span><span>5</span></span> ⇒ sin 2<i>θ</i> = 2(<span class="frac"><span>4</span><span>5</span></span>)(−<span class="frac"><span>3</span><span>5</span></span>) = −<span class="frac"><span>24</span><span>25</span></span> = <b>−0.96</b></div>
      solution: "<div class=\"worked__math\">sin <i>θ</i> = <span class=\"frac\"><span>4</span><span>5</span></span> ⇒ sin 2<i>θ</i> = 2(<span class=\"frac\"><span>4</span><span>5</span></span>)(−<span class=\"frac\"><span>3</span><span>5</span></span>) = −<span class=\"frac\"><span>24</span><span>25</span></span> = <b>−0.96</b></div>",
    },

    // ── t3-2-q003 · mcq · foundation · SL · SL 3.7 · 2 marks
    "t3-2-q003": {
      // EN: <p>What are the amplitude and period of the function <span class="chem">f(x) = -3 cos(4x) + 5</span> (where <span class="chem">x</span> is in radians)?</p>
      stem: "<p>函數 <span class=\"chem\">f(x) = -3 cos(4x) + 5</span>（其中 <span class=\"chem\">x</span> 以弧度為單位）的振幅與週期分別是多少？</p>",
      options: [
        // EN: Amplitude <span class="mono">= 3</span>, Period <span class="chem">= pi/2</span>
        "振幅 <span class=\"mono\">= 3</span>，週期 <span class=\"chem\">= pi/2</span>",
        // EN: Amplitude <span class="mono">= −3</span>, Period <span class="chem">= pi/2</span>
        "振幅 <span class=\"mono\">= −3</span>，週期 <span class=\"chem\">= pi/2</span>",
        // EN: Amplitude <span class="mono">= 3</span>, Period <span class="mono">= 4</span>
        "振幅 <span class=\"mono\">= 3</span>，週期 <span class=\"mono\">= 4</span>",
        // EN: Amplitude <span class="mono">= 5</span>, Period <span class="chem">= 8*pi</span>
        "振幅 <span class=\"mono\">= 5</span>，週期 <span class=\"chem\">= 8*pi</span>",
      ],
      hints: [
        // EN: Amplitude is <span class="chem">|a|</span> (always positive).
        "振幅為 <span class=\"chem\">|a|</span>（恒為正數）。",
        // EN: Period is <span class="chem">T = 2*pi / b</span>.
        "週期為 <span class=\"chem\">T = 2*pi / b</span>。",
      ],
      // EN: <div class="worked__math">Amplitude = |−3| = <b>3</b>, &nbsp;&nbsp; Period = <span class="frac"><span>2<i>π</i></span><span>4</span></span> = <b><span class="frac"><span><i>π</i></span><span>2</span></span></b></div>
      solution: "<div class=\"worked__math\">振幅 = |−3| = <b>3</b>, &nbsp;&nbsp; 週期 = <span class=\"frac\"><span>2<i>π</i></span><span>4</span></span> = <b><span class=\"frac\"><span><i>π</i></span><span>2</span></span></b></div>",
      misconception: {
        // EN (option B): Amplitude is always positive: |a| = |−3| = 3.
        "1": "振幅恒為正數：|a| = |−3| = 3。",
        // EN (option C): 4 is the frequency factor b; the period is T = 2π/b = 2π/4 = π/2.
        "2": "4 是頻率因子 b；週期為 T = 2π/b = 2π/4 = π/2。",
        // EN (option D): 5 is the vertical shift d (the principal axis y = 5), and T = 2π/b, not 2πb.
        "3": "5 是鉛垂平移 d（主軸 y = 5），且 T = 2π/b，而非 2πb。",
      },
    },

    // ── t3-2-q004 · mcq · foundation · SL · SL 3.8 · 2 marks
    "t3-2-q004": {
      // EN: <p>How many solutions does the equation <span class="chem">sin(3x) = 1/2</span> have in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>?</p>
      stem: "<p>方程 <span class=\"chem\">sin(3x) = 1/2</span> 在區間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> 內有多少個解？</p>",
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
        "變換區間：若 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>，則 <span class=\"chem\">0 &lt;= 3x &lt;= 6pi</span>（三個完整週期）。",
        // EN: Each full revolution of <span class="chem">2pi</span> contains 2 solutions to <span class="chem">sin u = 1/2</span>.
        "每個 <span class=\"chem\">2pi</span> 的完整週期包含 2 個 <span class=\"chem\">sin u = 1/2</span> 的解。",
      ],
      // EN: <p>Let <span class="chem">u = 3x in [0, 6pi]</span>. Since <span class="chem">sin u = 1/2</span> has 2 solutions in each <span class="chem">2pi</span> period, across 3 periods there are <span class="mono">3 × 2 = 6</span> solutions.</p>
      solution: "<p>設 <span class=\"chem\">u = 3x in [0, 6pi]</span>。由於 <span class=\"chem\">sin u = 1/2</span> 在每個 <span class=\"chem\">2pi</span> 週期內有 2 個解，因此在 3 個週期內共有 <span class=\"mono\">3 × 2 = 6</span> 個解。</p>",
      misconception: {
        // EN (option B): sin u = 1/2 has 2 solutions per period, but sin(3x) completes 3 full periods on [0, 2π].
        "1": "sin u = 1/2 每個週期有 2 個解，但 sin(3x) 在 [0, 2π] 內完成了 3 個完整週期。",
        // EN (option C): Each of the 3 periods gives 2 solutions (one in Quadrant I, one in Quadrant II), so 3 × 2 = 6.
        "2": "3 個週期中每個都得出 2 個解（一個在第一象限，一個在第二象限），故 3 × 2 = 6。",
        // EN (option D): 4 solutions corresponds to sin(2x) = 1/2 on [0, 2π].
        "3": "4 個解對應的是 sin(2x) = 1/2 在 [0, 2π] 內的解數。",
      },
    },

    // ── t3-2-q005 · mcq · foundation · AHL · AHL 3.9 · 2 marks
    "t3-2-q005": {
      // EN: <p>What is the exact value of <span class="chem">arccos(-1/2) + arcsin(-1/2)</span>?</p>
      stem: "<p><span class=\"chem\">arccos(-1/2) + arcsin(-1/2)</span> 的準確值是多少？</p>",
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
        "<span class=\"chem\">arccos</span> 的主值域為 <span class=\"chem\">[0, pi]</span>，故 <span class=\"chem\">arccos(-1/2) = 2*pi/3</span>。",
        // EN: The principal range of <span class="chem">arcsin</span> is <span class="chem">[-pi/2, pi/2]</span>, so <span class="chem">arcsin(-1/2) = -pi/6</span>.
        "<span class=\"chem\">arcsin</span> 的主值域為 <span class=\"chem\">[-pi/2, pi/2]</span>，故 <span class=\"chem\">arcsin(-1/2) = -pi/6</span>。",
      ],
      // EN: <div class="worked__math">arccos(−<span class="frac"><span>1</span><span>2</span></span>) + arcsin(−<span class="frac"><span>1</span><span>2</span></span>) = <span class="frac"><span>2<i>π</i></span><span>3</span></span> + (−<span class="frac"><span><i>π</i></span><span>6</span></span>) = <b><span class="frac"><span><i>π</i></span><span>2</span></span></b></div>
      solution: "<div class=\"worked__math\">arccos(−<span class=\"frac\"><span>1</span><span>2</span></span>) + arcsin(−<span class=\"frac\"><span>1</span><span>2</span></span>) = <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> + (−<span class=\"frac\"><span><i>π</i></span><span>6</span></span>) = <b><span class=\"frac\"><span><i>π</i></span><span>2</span></span></b></div>",
      misconception: {
        // EN (option B): You may have taken arccos(−1/2) = π/6 (the value of arcsin(1/2)). The principal values are arccos(−1/2) = 2π/3 and arcsin(−1/2) = −π/6.
        "1": "你可能把 arccos(−1/2) 當成了 π/6（即 arcsin(1/2) 的值）。主值為 arccos(−1/2) = 2π/3 及 arcsin(−1/2) = −π/6。",
        // EN (option C): You added +π/6 instead of −π/6 for arcsin(−1/2).
        "2": "你把 arcsin(−1/2) 加成了 +π/6，而非 −π/6。",
        // EN (option D): arccos(−1/2) is NOT −π/3! The range of arccos is [0, π], so arccos(−1/2) = 2π/3, while arcsin(−1/2) = −π/6. Check: arcsin x + arccos x = π/2 for all x ∈ [−1, 1].
        "3": "arccos(−1/2) 並不是 −π/3！arccos 的值域是 [0, π]，故 arccos(−1/2) = 2π/3，而 arcsin(−1/2) = −π/6。驗算：對所有 x ∈ [−1, 1]，arcsin x + arccos x = π/2。",
      },
    },

    // ── t3-2-q006 · numeric · foundation · AHL · AHL 3.9 · 2 marks
    "t3-2-q006": {
      // EN: <p>Given that <span class="chem">tan theta = 3/4</span>, find the exact value of <span class="chem">sec^2 theta</span>.</p>
      stem: "<p>已知 <span class=\"chem\">tan theta = 3/4</span>，求 (find) <span class=\"chem\">sec^2 theta</span> 的準確值。</p>",
      hints: [
        // EN: Use the Pythagorean identity <span class="chem">1 + tan^2 theta = sec^2 theta</span> from the Formula Booklet.
        "使用公式手冊中的平方關係恒等式 <span class=\"chem\">1 + tan^2 theta = sec^2 theta</span>。",
        // EN: Calculate <span class="chem">1 + (3/4)^2 = 1 + 9/16 = 25/16</span>.
        "計算 <span class=\"chem\">1 + (3/4)^2 = 1 + 9/16 = 25/16</span>。",
      ],
      // EN: <div class="worked__math">sec<sup>2</sup><i>θ</i> = 1 + tan<sup>2</sup><i>θ</i> = 1 + <span class="frac"><span>9</span><span>16</span></span> = <b><span class="frac"><span>25</span><span>16</span></span> = 1.5625</b></div>
      solution: "<div class=\"worked__math\">sec<sup>2</sup><i>θ</i> = 1 + tan<sup>2</sup><i>θ</i> = 1 + <span class=\"frac\"><span>9</span><span>16</span></span> = <b><span class=\"frac\"><span>25</span><span>16</span></span> = 1.5625</b></div>",
    },

    // ── t3-2-q007 · numeric · exam · SL · SL 3.7 · 4 marks
    "t3-2-q007": {
      // EN: <p>A Ferris wheel rotates at a constant speed. A rider's height <span class="chem">h(t)</span> in metres above the ground at time <span class="chem">t</span> minutes is modelled by <span class="chem">h(t) = -15 cos((pi/5)t) + 17</span>. Find the first positive time <span class="chem">t</span> (in minutes) at which the rider reaches a height of <span class="mono">24.5 m</span>.</p>
      stem: "<p>一個摩天輪以等速旋轉。在時間 <span class=\"chem\">t</span> 分鐘時，乘客離地面的高度 <span class=\"chem\">h(t)</span>（以米為單位）以 <span class=\"chem\">h(t) = -15 cos((pi/5)t) + 17</span> 模擬。求 (Find) 乘客到達 <span class=\"mono\">24.5 m</span> 高度的最早正時間 <span class=\"chem\">t</span>（以分鐘為單位）。</p>",
      hints: [
        // EN: Set <span class="chem">-15 cos((pi/5)t) + 17 = 24.5</span> and isolate <span class="chem">cos((pi/5)t)</span>.
        "令 <span class=\"chem\">-15 cos((pi/5)t) + 17 = 24.5</span> 並分離出 <span class=\"chem\">cos((pi/5)t)</span>。",
        // EN: You will get <span class="chem">cos((pi/5)t) = -0.5</span>, so the first positive angle is <span class="chem">(pi/5)t = 2*pi/3</span>.
        "你將得出 <span class=\"chem\">cos((pi/5)t) = -0.5</span>，故最早的正角為 <span class=\"chem\">(pi/5)t = 2*pi/3</span>。",
      ],
      // EN: <div class="worked__math">−15 cos(<span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i>) = 7.5 ⇒ cos(<span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i>) = −<span class="frac"><span>1</span><span>2</span></span> ⇒ <span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i> = <span class="frac"><span>2<i>π</i></span><span>3</span></span> ⇒ <i>t</i> = <b><span class="frac"><span>10</span><span>3</span></span> ≈ 3.33 min</b></div>
      solution: "<div class=\"worked__math\">−15 cos(<span class=\"frac\"><span><i>π</i></span><span>5</span></span><i>t</i>) = 7.5 ⇒ cos(<span class=\"frac\"><span><i>π</i></span><span>5</span></span><i>t</i>) = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <span class=\"frac\"><span><i>π</i></span><span>5</span></span><i>t</i> = <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> ⇒ <i>t</i> = <b><span class=\"frac\"><span>10</span><span>3</span></span> ≈ 3.33 min</b></div>",
    },

    // ── t3-2-q008 · mcq · exam · SL · SL 3.8 · 2 marks
    "t3-2-q008": {
      // EN: <p>Find the complete set of solutions to <span class="chem">sin 2x = sin x</span> on the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">sin 2x = sin x</span> 在區間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> 內的完整解集。</p>",
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
        "把所有項移至同一邊並展開 <span class=\"chem\">sin 2x = 2 sin x cos x</span>：<span class=\"chem\">2 sin x cos x - sin x = 0</span>。",
        // EN: Factor out <span class="chem">sin x</span>: <span class="chem">sin x (2 cos x - 1) = 0</span>.
        "抽出公因數 <span class=\"chem\">sin x</span>：<span class=\"chem\">sin x (2 cos x - 1) = 0</span>。",
      ],
      // EN: <div class="worked__math">sin <i>x</i>(2 cos <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = 0 (<i>x</i> = 0, <i>π</i>, 2<i>π</i>) &nbsp; or &nbsp; cos <i>x</i> = <span class="frac"><span>1</span><span>2</span></span> (<i>x</i> = <span class="frac"><span><i>π</i></span><span>3</span></span>, <span class="frac"><span>5<i>π</i></span><span>3</span></span>)</div>
      solution: "<div class=\"worked__math\">sin <i>x</i>(2 cos <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = 0 (<i>x</i> = 0, <i>π</i>, 2<i>π</i>) &nbsp; 或 &nbsp; cos <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> (<i>x</i> = <span class=\"frac\"><span><i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>5<i>π</i></span><span>3</span></span>)</div>",
      misconception: {
        // EN (option B): You divided both sides by sin x, losing all three roots where sin x = 0 (x = 0, π, 2π)!
        "1": "你把兩邊同除以 sin x，丟失了使 sin x = 0 的三個根（x = 0, π, 2π）！",
        // EN (option C): cos x = 1/2 gives x = π/3 and 5π/3, not π/6 and 11π/6.
        "2": "cos x = 1/2 得出 x = π/3 與 5π/3，而非 π/6 與 11π/6。",
        // EN (option D): 2π/3 and 4π/3 correspond to cos x = −1/2, not +1/2.
        "3": "2π/3 與 4π/3 對應的是 cos x = −1/2，而非 +1/2。",
      },
    },

    // ── t3-2-q009 · multi · exam · SL · SL 3.7 · 3 marks
    "t3-2-q009": {
      // EN: <p>The depth of water at a pier reaches a high tide of <span class="mono">8.2 m</span> at <span class="mono">t = 2</span> hours and the next low tide of <span class="mono">2.6 m</span> at <span class="mono">t = 8</span> hours. Which of the following equations correctly model the depth <span class="chem">y(t)</span>? Select all that apply.</p>
      stem: "<p>碼頭的水深在 <span class=\"mono\">t = 2</span> 小時達至高潮 <span class=\"mono\">8.2 m</span>，並在 <span class=\"mono\">t = 8</span> 小時達至下一個低潮 <span class=\"mono\">2.6 m</span>。下列哪些方程正確模擬水深 <span class=\"chem\">y(t)</span>？選出所有適用選項。</p>",
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
        "求得振幅 <span class=\"chem\">a = (8.2 - 2.6)/2 = 2.8</span>、主軸 <span class=\"chem\">d = (8.2 + 2.6)/2 = 5.4</span> 及週期 <span class=\"chem\">T = 2(8 - 2) = 12</span>，故 <span class=\"chem\">b = pi/6</span>。",
        // EN: Check which phase shifts place a maximum of <span class="mono">8.2</span> at <span class="mono">t = 2</span> and a minimum of <span class="mono">2.6</span> at <span class="mono">t = 8</span>.
        "檢查哪些相移會在 <span class=\"mono\">t = 2</span> 處產生極大值 <span class=\"mono\">8.2</span>，並在 <span class=\"mono\">t = 8</span> 處產生極小值 <span class=\"mono\">2.6</span>。",
      ],
      // EN: <p>With <span class="chem">a = 2.8, d = 5.4, b = pi/6</span>: <span class="chem">2.8 cos((pi/6)(t-2)) + 5.4</span> starts at a peak at <span class="mono">t = 2</span>; <span class="chem">-2.8 cos((pi/6)(t-8)) + 5.4</span> starts at a trough at <span class="mono">t = 8</span>; and <span class="chem">2.8 sin((pi/6)(t+1)) + 5.4</span> crosses the mean line rising at <span class="mono">t = −1</span> (a quarter-period before <span class="mono">t = 2</span>).</p>
      solution: "<p>當 <span class=\"chem\">a = 2.8, d = 5.4, b = pi/6</span> 時：<span class=\"chem\">2.8 cos((pi/6)(t-2)) + 5.4</span> 在 <span class=\"mono\">t = 2</span> 處位於波峰；<span class=\"chem\">-2.8 cos((pi/6)(t-8)) + 5.4</span> 在 <span class=\"mono\">t = 8</span> 處位於波谷；而 <span class=\"chem\">2.8 sin((pi/6)(t+1)) + 5.4</span> 在 <span class=\"mono\">t = −1</span>（即 <span class=\"mono\">t = 2</span> 前四分之一個週期）向上穿過主軸。</p>",
      misconception: {
        // EN (option D): The time from high tide (t = 2) to low tide (t = 8) is half a period (T/2 = 6 h), so T = 12 h and b = 2π/12 = π/6, not π/3.
        "3": "由高潮（t = 2）到低潮（t = 8）的時間為半個週期（T/2 = 6 h），故 T = 12 h 且 b = 2π/12 = π/6，而非 π/3。",
        // EN (option E): 5.6 m is the peak-to-trough range (8.2 − 2.6); the amplitude is half of that: a = 2.8 m.
        "4": "5.6 m 是波峰至波谷的全距（8.2 − 2.6）；振幅是其一半：a = 2.8 m。",
      },
    },

    // ── t3-2-q010 · numeric · exam · AHL · AHL 3.10 · 4 marks
    "t3-2-q010": {
      // EN: <p>Acute angles <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">tan A = 1/4</span> and <span class="chem">tan B = 3/5</span>. Find the exact value of <span class="chem">tan(A + B)</span>.</p>
      stem: "<p>銳角 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 滿足 <span class=\"chem\">tan A = 1/4</span> 及 <span class=\"chem\">tan B = 3/5</span>。求 (Find) <span class=\"chem\">tan(A + B)</span> 的準確值。</p>",
      hints: [
        // EN: Use the compound-angle identity <span class="chem">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>.
        "使用複角公式 <span class=\"chem\">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>。",
        // EN: Calculate <span class="chem">1/4 + 3/5 = 17/20</span> and <span class="chem">1 - (1/4)(3/5) = 17/20</span>.
        "計算 <span class=\"chem\">1/4 + 3/5 = 17/20</span> 及 <span class=\"chem\">1 - (1/4)(3/5) = 17/20</span>。",
      ],
      // EN: <div class="worked__math">tan(<i>A</i> + <i>B</i>) = <span class="frac"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class="frac"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>
      solution: "<div class=\"worked__math\">tan(<i>A</i> + <i>B</i>) = <span class=\"frac\"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class=\"frac\"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>",
    },

    // ── t3-2-q011 · mcq · exam · AHL · AHL 3.9 · 2 marks
    "t3-2-q011": {
      // EN: <p>Solving the equation <span class="chem">2 sec^2 x - 3 tan x - 4 = 0</span> leads to which quadratic equation in <span class="chem">tan x</span>?</p>
      stem: "<p>解方程 <span class=\"chem\">2 sec^2 x - 3 tan x - 4 = 0</span> 會化為哪條關於 <span class=\"chem\">tan x</span> 的二次方程？</p>",
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
        "代入平方關係恒等式 <span class=\"chem\">sec^2 x = 1 + tan^2 x</span>。",
        // EN: Expand <span class="chem">2(1 + tan^2 x) - 3 tan x - 4 = 0</span>.
        "展開 <span class=\"chem\">2(1 + tan^2 x) - 3 tan x - 4 = 0</span>。",
      ],
      // EN: <div class="worked__math">2(1 + tan<sup>2</sup><i>x</i>) − 3 tan <i>x</i> − 4 = 0 ⇒ <b>2 tan<sup>2</sup><i>x</i> − 3 tan <i>x</i> − 2 = 0</b> ⇒ (2 tan <i>x</i> + 1)(tan <i>x</i> − 2) = 0</div>
      solution: "<div class=\"worked__math\">2(1 + tan<sup>2</sup><i>x</i>) − 3 tan <i>x</i> − 4 = 0 ⇒ <b>2 tan<sup>2</sup><i>x</i> − 3 tan <i>x</i> − 2 = 0</b> ⇒ (2 tan <i>x</i> + 1)(tan <i>x</i> − 2) = 0</div>",
      misconception: {
        // EN (option B): You substituted sec²x = tan²x − 1 instead of 1 + tan²x.
        "1": "你誤代了 sec²x = tan²x − 1，而非 1 + tan²x。",
        // EN (option C): You forgot to multiply the 1 in (1 + tan²x) by the coefficient 2.
        "2": "你忘記把 (1 + tan²x) 中的 1 乘以係數 2。",
        // EN (option D): You flipped the sign of −3 tan x.
        "3": "你把 −3 tan x 的正負號弄反了。",
      },
    },

    // ── t3-2-q012 · mcq · exam · AHL · AHL 3.9 · 2 marks
    "t3-2-q012": {
      // EN: <p>For <span class="chem">0 &lt; x &lt; 1</span>, which algebraic expression is identically equal to <span class="chem">sin(2 arccos x)</span>?</p>
      stem: "<p>當 <span class=\"chem\">0 &lt; x &lt; 1</span> 時，下列哪個代數式恒等於 <span class=\"chem\">sin(2 arccos x)</span>？</p>",
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
        "設 <span class=\"chem\">theta = arccos x</span>，則 <span class=\"chem\">cos theta = x</span> 且 <span class=\"chem\">sin theta = sqrt(1 - x^2)</span>。",
        // EN: Use <span class="chem">sin(2theta) = 2 sin theta cos theta</span>.
        "使用 <span class=\"chem\">sin(2theta) = 2 sin theta cos theta</span>。",
      ],
      // EN: <div class="worked__math">Let <i>θ</i> = arccos <i>x</i> ⇒ cos <i>θ</i> = <i>x</i>, &nbsp; sin <i>θ</i> = √(1 − <i>x</i><sup>2</sup>) ⇒ sin 2<i>θ</i> = 2 sin <i>θ</i> cos <i>θ</i> = <b>2<i>x</i>√(1 − <i>x</i><sup>2</sup>)</b></div>
      solution: "<div class=\"worked__math\">設 <i>θ</i> = arccos <i>x</i> ⇒ cos <i>θ</i> = <i>x</i>, &nbsp; sin <i>θ</i> = √(1 − <i>x</i><sup>2</sup>) ⇒ sin 2<i>θ</i> = 2 sin <i>θ</i> cos <i>θ</i> = <b>2<i>x</i>√(1 − <i>x</i><sup>2</sup>)</b></div>",
      misconception: {
        // EN (option B): 2x² − 1 is cos(2 arccos x), not sin(2 arccos x).
        "1": "2x² − 1 是 cos(2 arccos x)，而非 sin(2 arccos x)。",
        // EN (option C): You forgot the factor cos θ = x in sin(2θ) = 2 sin θ cos θ.
        "2": "你在 sin(2θ) = 2 sin θ cos θ 中漏了因子 cos θ = x。",
        // EN (option D): 1 − 2x² is cos(2 arcsin x).
        "3": "1 − 2x² 是 cos(2 arcsin x)。",
      },
    },

    // ── t3-2-q013 · order · exam · SL · SL 3.8 · 3 marks
    "t3-2-q013": {
      // EN: <p>Put these steps in the correct order to find all solutions to <span class="chem">cos(2x - pi/3) = 1/2</span> on the domain <span class="chem">0 &lt;= x &lt;= pi</span>.</p>
      stem: "<p>將以下步驟按正確順序排列，以求 <span class=\"chem\">cos(2x - pi/3) = 1/2</span> 在定義域 <span class=\"chem\">0 &lt;= x &lt;= pi</span> 內的所有解。</p>",
      options: [
        // EN: Let u = 2x − π/3 and transform the domain 0 ≤ x ≤ π into −π/3 ≤ u ≤ 5π/3.
        "設 u = 2x − π/3，並將定義域 0 ≤ x ≤ π 變換為 −π/3 ≤ u ≤ 5π/3。",
        // EN: Identify the acute reference angle α = arccos(1/2) = π/3.
        "找出銳角參考角 α = arccos(1/2) = π/3。",
        // EN: List all angles u in Quadrants I and IV that fall inside [−π/3, 5π/3]: u = −π/3, π/3, 5π/3.
        "列出第 I 及第 IV 象限中落在 [−π/3, 5π/3] 內的所有角 u：u = −π/3, π/3, 5π/3。",
        // EN: Add π/3 to each value of u and divide by 2 to obtain x = 0, π/3, π.
        "把每個 u 值加上 π/3 再除以 2，得出 x = 0, π/3, π。",
      ],
      hints: [
        // EN: Always transform the domain for the inner argument <span class="chem">u = 2x - pi/3</span> first!
        "務必先為括號內的自變數 <span class=\"chem\">u = 2x - pi/3</span> 變換定義域！",
        // EN: Only divide by 2 at the very last step.
        "只在最後一步才除以 2。",
      ],
      // EN: <p>Transforming the interval to <span class="chem">[-pi/3, 5pi/3]</span> first ensures you capture all three roots <span class="chem">u = -pi/3, pi/3, 5pi/3</span>, giving <span class="chem">x = 0, pi/3, pi</span>.</p>
      solution: "<p>先把區間變換為 <span class=\"chem\">[-pi/3, 5pi/3]</span> 可確保不遺漏三個根 <span class=\"chem\">u = -pi/3, pi/3, 5pi/3</span>，從而得出 <span class=\"chem\">x = 0, pi/3, pi</span>。</p>",
    },

    // ── t3-2-q014 · short · exam · SL · SL 3.6 · 5 marks
    "t3-2-q014": {
      // EN: <p>Prove the identity <span class="chem">(sin 2theta) / (1 + cos 2theta) = tan theta</span>, and hence find the exact value of <span class="chem">tan(pi/8)</span> in the form <span class="chem">sqrt(a) - b</span>.</p>
      stem: "<p>證明 (Prove) 恒等式 <span class=\"chem\">(sin 2theta) / (1 + cos 2theta) = tan theta</span>，並由此求 (hence find) <span class=\"chem\">tan(pi/8)</span> 的準確值，以 <span class=\"chem\">sqrt(a) - b</span> 形式表示。</p>",
      hints: [
        // EN: Choose <span class="chem">cos 2theta = 2 cos^2 theta - 1</span> in the denominator so that <span class="mono">+1</span> and <span class="mono">−1</span> cancel!
        "在分母中選用 <span class=\"chem\">cos 2theta = 2 cos^2 theta - 1</span>，使 <span class=\"mono\">+1</span> 與 <span class=\"mono\">−1</span> 相消！",
        // EN: Then set <span class="chem">theta = pi/8</span> so <span class="chem">2theta = pi/4</span>.
        "然後設 <span class=\"chem\">theta = pi/8</span>，使 <span class=\"chem\">2theta = pi/4</span>。",
      ],
      // EN: <p>tan(π/8) = √2 − 1.</p>
      answer: "<p>tan(π/8) = √2 − 1。</p>",
      markscheme: [
        // EN: M1: Substitute sin 2θ = 2 sin θ cos θ and cos 2θ = 2 cos²θ − 1 into the LHS.
        "M1：將 sin 2θ = 2 sin θ cos θ 與 cos 2θ = 2 cos²θ − 1 代入左方 (LHS)。",
        // EN: A1: Simplify LHS = (2 sin θ cos θ) / (1 + 2 cos²θ − 1) = (2 sin θ cos θ) / (2 cos²θ) = sin θ / cos θ = tan θ (AG).
        "A1：化簡左方 = (2 sin θ cos θ) / (1 + 2 cos²θ − 1) = (2 sin θ cos θ) / (2 cos²θ) = sin θ / cos θ = tan θ (AG)。",
        // EN: M1: Substitute θ = π/8 so 2θ = π/4: tan(π/8) = sin(π/4) / (1 + cos(π/4)).
        "M1：代入 θ = π/8 使 2θ = π/4：tan(π/8) = sin(π/4) / (1 + cos(π/4))。",
        // EN: A1: Write (√2/2) / (1 + √2/2) = √2 / (2 + √2) = 1 / (√2 + 1).
        "A1：寫出 (√2/2) / (1 + √2/2) = √2 / (2 + √2) = 1 / (√2 + 1)。",
        // EN: A1: Rationalize the denominator: (√2 − 1) / ((√2 + 1)(√2 − 1)) = √2 − 1.
        "A1：有理化分母：(√2 − 1) / ((√2 + 1)(√2 − 1)) = √2 − 1。",
      ],
    },

    // ── t3-2-q015 · numeric · challenge · AHL · AHL 3.10 · 5 marks
    "t3-2-q015": {
      // EN: <p>Solve the equation <span class="chem">arctan(x) + arctan(2x) = pi/4</span> for <span class="chem">x &gt; 0</span>. Give your answer in the form <span class="chem">(a + sqrt(b))/c</span>, where <span class="chem">a, b, c</span> are integers.</p>
      stem: "<p>在 <span class=\"chem\">x &gt; 0</span> 的條件下解 (Solve) 方程 <span class=\"chem\">arctan(x) + arctan(2x) = pi/4</span>。答案以 <span class=\"chem\">(a + sqrt(b))/c</span> 的形式表示，其中 <span class=\"chem\">a, b, c</span> 為整數。</p>",
      hints: [
        // EN: Decode: a sum of two arctans is an angle, so take <span class="chem">tan</span> of both sides: <span class="chem">tan(A + B)</span> turns the equation into algebra in <span class="chem">x</span>. The condition <span class="chem">x &gt; 0</span> tells you which root to keep.
        "解碼：兩個 arctan 的和是一個角，所以對兩邊取 <span class=\"chem\">tan</span>：<span class=\"chem\">tan(A + B)</span> 公式會把方程變成關於 <span class=\"chem\">x</span> 的代數方程。條件 <span class=\"chem\">x &gt; 0</span> 告訴你要保留哪一個根。",
        // EN: Take the tangent of both sides using <span class="chem">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span>: <span class="chem">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>.
        "利用 <span class=\"chem\">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span> 對兩邊取正切：<span class=\"chem\">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>。",
        // EN: Solve the quadratic <span class="chem">2x^2 + 3x - 1 = 0</span> and keep the positive root <span class="chem">x = (-3 + sqrt(17))/4</span>.
        "解二次方程 <span class=\"chem\">2x^2 + 3x - 1 = 0</span> 並保留正根 <span class=\"chem\">x = (-3 + sqrt(17))/4</span>。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class="frac"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class=\"frac\"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>",
    },

    // ── t3-2-q016 · mcq · exam · AHL · AHL 3.10 · 2 marks
    "t3-2-q016": {
      // EN: <p>What is the exact value of <span class="chem">cos 15° = cos(pi/12)</span>?</p>
      stem: "<p><span class=\"chem\">cos 15° = cos(pi/12)</span> 的準確值是多少？</p>",
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
        "寫出 <span class=\"mono\">15° = 45° − 30°</span>（或 <span class=\"chem\">pi/12 = pi/4 - pi/6</span>）。",
        // EN: Expand <span class="chem">cos(45° - 30°) = cos 45° cos 30° + sin 45° sin 30°</span>.
        "展開 <span class=\"chem\">cos(45° - 30°) = cos 45° cos 30° + sin 45° sin 30°</span>。",
      ],
      // EN: <div class="worked__math">cos(45° − 30°) = <span class="frac"><span>√2</span><span>2</span></span>·<span class="frac"><span>√3</span><span>2</span></span> + <span class="frac"><span>√2</span><span>2</span></span>·<span class="frac"><span>1</span><span>2</span></span> = <b><span class="frac"><span>√6 + √2</span><span>4</span></span></b></div>
      solution: "<div class=\"worked__math\">cos(45° − 30°) = <span class=\"frac\"><span>√2</span><span>2</span></span>·<span class=\"frac\"><span>√3</span><span>2</span></span> + <span class=\"frac\"><span>√2</span><span>2</span></span>·<span class=\"frac\"><span>1</span><span>2</span></span> = <b><span class=\"frac\"><span>√6 + √2</span><span>4</span></span></b></div>",
      misconception: {
        // EN (option B): (√6 − √2)/4 is sin 15° = cos 75°, because cos(A − B) has a PLUS sign: cos A cos B + sin A sin B.
        "1": "(√6 − √2)/4 是 sin 15° = cos 75°，因為 cos(A − B) 中間是加號：cos A cos B + sin A sin B。",
        // EN (option C): You treated cos 45° and sin 45° as 1, but each is √2/2, so the result is (√2/2)(√3/2 + 1/2) = (√6 + √2)/4.
        "2": "你把 cos 45° 及 sin 45° 當成了 1，但兩者都是 √2/2，所以結果是 (√2/2)(√3/2 + 1/2) = (√6 + √2)/4。",
        // EN (option D): Using the half-angle identity gives √(2 + √3) / 2, with denominator 2, not 4.
        "3": "使用半角公式得出 √(2 + √3) / 2，分母是 2，而非 4。",
      },
    },

    // ── t3-2-q017 · short · challenge · AHL · AHL 3.10 · 5 marks
    "t3-2-q017": {
      // EN: <p>In triangle <span class="chem">ABC</span>, none of the angles is <span class="mono">90°</span>. Using the compound-angle identity for <span class="chem">tan(A + B)</span> and the fact that <span class="chem">A + B + C = pi</span>, prove that <span class="chem">tan A + tan B + tan C = tan A tan B tan C</span>.</p>
      stem: "<p>在三角形 <span class=\"chem\">ABC</span> 中，沒有任何一個角為 <span class=\"mono\">90°</span>。利用 <span class=\"chem\">tan(A + B)</span> 的複角公式及 <span class=\"chem\">A + B + C = pi</span> 的事實，證明 (prove that) <span class=\"chem\">tan A + tan B + tan C = tan A tan B tan C</span>。</p>",
      hints: [
        // EN: Decode: the condition <span class="chem">A + B + C = pi</span> links the three angles, so write <span class="chem">C = pi - (A + B)</span>. Then the <span class="chem">tan(A + B)</span> identity turns the statement into algebra in <span class="chem">tan A</span>, <span class="chem">tan B</span> and <span class="chem">tan C</span>.
        "解碼：條件 <span class=\"chem\">A + B + C = pi</span> 把三個角聯繫起來，所以寫成 <span class=\"chem\">C = pi - (A + B)</span>。然後利用 <span class=\"chem\">tan(A + B)</span> 公式，把要證的式子變成關於 <span class=\"chem\">tan A</span>、<span class=\"chem\">tan B</span> 和 <span class=\"chem\">tan C</span> 的代數問題。",
        // EN: Start with <span class="chem">A + B = pi - C</span> and take <span class="chem">tan</span> of both sides.
        "由 <span class=\"chem\">A + B = pi - C</span> 開始，對兩邊取 <span class=\"chem\">tan</span>。",
        // EN: Recall that <span class="chem">tan(pi - C) = -tan C</span>.
        "緊記 <span class=\"chem\">tan(pi - C) = -tan C</span>。",
      ],
      // EN: <p>Since <i>A</i> + <i>B</i> = <i>π</i> − <i>C</i>, taking tan of both sides gives (tan <i>A</i> + tan <i>B</i>)/(1 − tan <i>A</i> tan <i>B</i>) = −tan <i>C</i>, which rearranges to tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i>.</p>
      answer: "<p>由於 <i>A</i> + <i>B</i> = <i>π</i> − <i>C</i>，對兩邊取 tan 得 (tan <i>A</i> + tan <i>B</i>)/(1 − tan <i>A</i> tan <i>B</i>) = −tan <i>C</i>，移項整理即得 tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i>。</p>",
      markscheme: [
        // EN: M1: Write A + B = π − C from the angle sum of a triangle.
        "M1：由三角形內角和寫出 A + B = π − C。",
        // EN: A1: Apply tangent to both sides: tan(A + B) = tan(π − C) = −tan C.
        "A1：對兩邊取正切：tan(A + B) = tan(π − C) = −tan C。",
        // EN: M1: Expand the LHS using the compound-angle formula: (tan A + tan B) / (1 − tan A tan B) = −tan C.
        "M1：用複角公式展開左方 (LHS)：(tan A + tan B) / (1 − tan A tan B) = −tan C。",
        // EN: M1: Multiply both sides by (1 − tan A tan B).
        "M1：兩邊同乘 (1 − tan A tan B)。",
        // EN: A1: tan A + tan B = −tan C + tan A tan B tan C, which rearranges to tan A + tan B + tan C = tan A tan B tan C (AG).
        "A1：tan A + tan B = −tan C + tan A tan B tan C，移項整理得 tan A + tan B + tan C = tan A tan B tan C (AG)。",
      ],
    },

    // ── t3-2-q018 · mcq · exam · AHL · AHL 3.11 · 2 marks
    "t3-2-q018": {
      // EN: <p>Given that <span class="chem">sin x = k</span>, where <span class="chem">0 &lt; x &lt; pi/2</span>, which expression is equal to <span class="chem">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span>?</p>
      stem: "<p>已知 <span class=\"chem\">sin x = k</span>，其中 <span class=\"chem\">0 &lt; x &lt; pi/2</span>，下列哪個式子等於 <span class=\"chem\">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span>？</p>",
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
        "運用對稱恆等式 <span class=\"chem\">sin(pi - x) = sin x</span>、<span class=\"chem\">cos(pi/2 + x) = -sin x</span> 及 <span class=\"chem\">tan(pi + x) = tan x</span>。",
        // EN: Since <span class="chem">x</span> is acute, <span class="chem">cos x = sqrt(1 - k^2)</span>, so <span class="chem">tan x = k / sqrt(1 - k^2)</span>.
        "由於 <span class=\"chem\">x</span> 是銳角，<span class=\"chem\">cos x = sqrt(1 - k^2)</span>，所以 <span class=\"chem\">tan x = k / sqrt(1 - k^2)</span>。",
      ],
      // EN: <div class="worked__math">sin(<i>π</i> − <i>x</i>) + cos(<span class="frac"><span><i>π</i></span><span>2</span></span> + <i>x</i>) + tan(<i>π</i> + <i>x</i>) = <i>k</i> − <i>k</i> + tan <i>x</i> = <b><span class="frac"><span><i>k</i></span><span>√(1 − <i>k</i><sup>2</sup>)</span></span></b></div>
      solution: "<div class=\"worked__math\">sin(<i>π</i> − <i>x</i>) + cos(<span class=\"frac\"><span><i>π</i></span><span>2</span></span> + <i>x</i>) + tan(<i>π</i> + <i>x</i>) = <i>k</i> − <i>k</i> + tan <i>x</i> = <b><span class=\"frac\"><span><i>k</i></span><span>√(1 − <i>k</i><sup>2</sup>)</span></span></b></div>",
      misconception: {
        // EN (option B): cos(π/2 + x) = −sin x, not +sin x: adding π/2 moves the point into the second quadrant, where cosine is negative.
        "1": "cos(π/2 + x) = −sin x，而不是 +sin x：加上 π/2 會把點移到第二象限，那裏的餘弦是負數。",
        // EN (option C): tan has period π, so tan(π + x) = +tan x. The half-turn changes the sign of both sin and cos, so their ratio keeps its sign.
        "2": "tan 的週期是 π，所以 tan(π + x) = +tan x。半周旋轉同時改變 sin 和 cos 的正負號，因此兩者之比的正負號不變。",
        // EN (option D): sin(π − x) = +sin x, because the sine graph is symmetric about x = π/2. Only cos(π/2 + x) contributes −k.
        "3": "sin(π − x) = +sin x，因為正弦圖像關於 x = π/2 對稱。只有 cos(π/2 + x) 貢獻 −k。",
      },
    },

    // ── t3-2-q019 · numeric · exam · SL · SL 3.7, 3.8 · 4 marks
    "t3-2-q019": {
      // EN: <p>How many solutions does the equation <span class="chem">tan(2x) = sqrt(3)</span> have in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>?</p>
      stem: "<p>方程 <span class=\"chem\">tan(2x) = sqrt(3)</span> 在區間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> 內有多少個解？</p>",
      hints: [
        // EN: Let <span class="chem">u = 2x</span>, so <span class="chem">0 &lt;= u &lt;= 4pi</span>. The graph of <span class="chem">tan u</span> has period <span class="chem">pi</span>, so <span class="chem">tan u = sqrt(3)</span> has one solution in each interval of length <span class="chem">pi</span>.
        "設 <span class=\"chem\">u = 2x</span>，則 <span class=\"chem\">0 &lt;= u &lt;= 4pi</span>。<span class=\"chem\">tan u</span> 的圖像週期為 <span class=\"chem\">pi</span>，所以 <span class=\"chem\">tan u = sqrt(3)</span> 在每個長度為 <span class=\"chem\">pi</span> 的區間內有一個解。",
        // EN: List <span class="chem">u = pi/3 + k*pi</span> for <span class="chem">k = 0, 1, 2, ...</span> while <span class="chem">u &lt;= 4pi</span>.
        "對 <span class=\"chem\">k = 0, 1, 2, ...</span> 列出 <span class=\"chem\">u = pi/3 + k*pi</span> 的值，直至 <span class=\"chem\">u &lt;= 4pi</span> 為止。",
      ],
      // EN: <div class="worked__math"><i>u</i> = 2<i>x</i> ∈ [0, 4<i>π</i>]: &nbsp; <i>u</i> = <span class="frac"><span><i>π</i></span><span>3</span></span>, <span class="frac"><span>4<i>π</i></span><span>3</span></span>, <span class="frac"><span>7<i>π</i></span><span>3</span></span>, <span class="frac"><span>10<i>π</i></span><span>3</span></span> ⇒ <i>x</i> = <span class="frac"><span><i>π</i></span><span>6</span></span>, <span class="frac"><span>2<i>π</i></span><span>3</span></span>, <span class="frac"><span>7<i>π</i></span><span>6</span></span>, <span class="frac"><span>5<i>π</i></span><span>3</span></span>, so there are <b>4</b> solutions.</div>
      solution: "<div class=\"worked__math\"><i>u</i> = 2<i>x</i> ∈ [0, 4<i>π</i>]: &nbsp; <i>u</i> = <span class=\"frac\"><span><i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>4<i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>7<i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>10<i>π</i></span><span>3</span></span>  ⇒  <i>x</i> = <span class=\"frac\"><span><i>π</i></span><span>6</span></span>, <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>7<i>π</i></span><span>6</span></span>, <span class=\"frac\"><span>5<i>π</i></span><span>3</span></span>，所以共有 <b>4</b> 個解。</div>",
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't3-2.q', {
  questions: {

    // ── t3-2-q020 · numeric · exam · SL · SL 3.7, 3.8 · 4 marks
    "t3-2-q020": {
      // EN: <p>A Ferris wheel has a diameter of 90 m and its lowest point is 5 m above the ground. It turns at a constant speed and completes one revolution every 18 minutes. A rider boards at the lowest point at <span class="chem">t = 0</span>. The height of the rider above the ground, <span class="chem">h</span> metres, <span class="chem">t</span> minutes after boarding is modelled by <span class="chem">h(t) = 50 - 45 cos((pi/9)t)</span>.</p><p>Find the length of time, in minutes, during one revolution for which the rider is more than 70 m above the ground. Give your answer to 3 significant figures.</p>
      stem: "<p>一個摩天輪的直徑為 90 m，其最低點離地面 5 m。摩天輪以等速旋轉，每 18 分鐘轉一圈。一名乘客在 <span class=\"chem\">t = 0</span> 時於最低點上車。乘客上車 <span class=\"chem\">t</span> 分鐘後離地面的高度 <span class=\"chem\">h</span> 米以 <span class=\"chem\">h(t) = 50 - 45 cos((pi/9)t)</span> 模擬。</p><p>求 (Find) 在轉一圈期間，乘客離地面高於 70 m 的時間長度（以分鐘為單位），答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: you are asked for a duration, not a time. Find the two times in <span class="chem">0 &lt;= t &lt;= 18</span> at which <span class="chem">h(t) = 70</span>, then subtract.
        "解碼：題目要求的是一段時間的長度，而不是某個時刻。先找出在 <span class=\"chem\">0 &lt;= t &lt;= 18</span> 內使 <span class=\"chem\">h(t) = 70</span> 的兩個時刻，再把兩者相減。",
        // EN: On your GDC, graph <span class="chem">y = 50 - 45 cos((pi/9)x)</span> and <span class="chem">y = 70</span> for <span class="chem">0 &lt;= x &lt;= 18</span> and find both intersections.
        "在 GDC 上繪畫 <span class=\"chem\">y = 50 - 45 cos((pi/9)x)</span> 及 <span class=\"chem\">y = 70</span> 在 <span class=\"chem\">0 &lt;= x &lt;= 18</span> 的圖像，並求出兩個交點。",
        // EN: Or by hand: <span class="chem">cos((pi/9)t) = -4/9</span>, so <span class="chem">t_1 = (9/pi) arccos(-4/9)</span> and, by symmetry about <span class="chem">t = 9</span>, <span class="chem">t_2 = 18 - t_1</span>.
        "或用筆算：<span class=\"chem\">cos((pi/9)t) = -4/9</span>，故 <span class=\"chem\">t_1 = (9/pi) arccos(-4/9)</span>，而由於圖像對 <span class=\"chem\">t = 9</span> 對稱，<span class=\"chem\">t_2 = 18 - t_1</span>。",
      ],
      // EN: <p><span class="chem">50 - 45 cos((pi/9)t) = 70</span> gives <span class="chem">cos((pi/9)t) = -4/9</span>. The GDC gives <span class="chem">t_1 = 5.8194…</span> and <span class="chem">t_2 = 12.1806…</span> minutes.</p><p>Time above 70 m <span class="chem">= t_2 - t_1 = 6.3612…</span>, so <b>6.36 minutes</b>.</p>
      solution: "<p>由 <span class=\"chem\">50 - 45 cos((pi/9)t) = 70</span> 得 <span class=\"chem\">cos((pi/9)t) = -4/9</span>。GDC 給出 <span class=\"chem\">t_1 = 5.8194…</span> 及 <span class=\"chem\">t_2 = 12.1806…</span> 分鐘。</p><p>高於 70 m 的時間 <span class=\"chem\">= t_2 - t_1 = 6.3612…</span>，即 <b>6.36 分鐘</b>。</p>",
    },

    // ── t3-2-q021 · short · exam · SL · SL 3.7, 3.8 · 7 marks
    "t3-2-q021": {
      // EN: <p>The mean monthly temperature in a town, <span class="chem">T</span> °C, is modelled by <span class="chem">T(t) = a cos(b(t - c)) + d</span>, where <span class="chem">t</span> is the month number (<span class="chem">t = 1</span> for January, <span class="chem">t = 12</span> for December) and <span class="chem">a, b, c, d &gt; 0</span>. The highest mean temperature, 27.8 °C, occurs in July (<span class="chem">t = 7</span>) and the lowest, 4.2 °C, occurs in January (<span class="chem">t = 1</span>). The pattern repeats every 12 months.</p><p>(a) Write down the value of <span class="chem">a</span> and the value of <span class="chem">d</span>. [2]</p><p>(b) Find the value of <span class="chem">b</span> and write down a possible value of <span class="chem">c</span>, where <span class="chem">0 &lt; c &lt; 12</span>. [2]</p><p>(c) Use the model to find the length of time, in months, during one year for which the mean temperature is above 20 °C. [3]</p>
      stem: "<p>某市鎮的月平均氣溫 <span class=\"chem\">T</span> °C 以 <span class=\"chem\">T(t) = a cos(b(t - c)) + d</span> 模擬，其中 <span class=\"chem\">t</span> 為月份編號（<span class=\"chem\">t = 1</span> 代表一月，<span class=\"chem\">t = 12</span> 代表十二月），且 <span class=\"chem\">a, b, c, d &gt; 0</span>。最高月平均氣溫 27.8 °C 出現在七月（<span class=\"chem\">t = 7</span>），最低的 4.2 °C 出現在一月（<span class=\"chem\">t = 1</span>）。這規律每 12 個月重複一次。</p><p>(a) 寫出 (Write down) <span class=\"chem\">a</span> 的值及 <span class=\"chem\">d</span> 的值。[2]</p><p>(b) 求 (Find) <span class=\"chem\">b</span> 的值，並寫出 <span class=\"chem\">c</span> 的一個可能值，其中 <span class=\"chem\">0 &lt; c &lt; 12</span>。[2]</p><p>(c) 利用此模型，求在一年內月平均氣溫高於 20 °C 的時間長度（以月為單位）。[3]</p>",
      hints: [
        // EN: Decode: (a) and (b) are the standard max/min recipe; (c) asks for the length of the interval of <span class="chem">t</span> on which <span class="chem">T(t) &gt; 20</span>.
        "解碼：(a) 和 (b) 是標準的「由最大值／最小值建立模型」步驟；(c) 要求的是使 <span class=\"chem\">T(t) &gt; 20</span> 的 <span class=\"chem\">t</span> 區間的長度。",
        // EN: Amplitude <span class="chem">= (max - min)/2</span>, principal axis <span class="chem">= (max + min)/2</span>, and with <span class="chem">a &gt; 0</span> the cosine peaks at <span class="chem">t = c</span>.
        "振幅 <span class=\"chem\">= (max - min)/2</span>，主軸 <span class=\"chem\">= (max + min)/2</span>；而當 <span class=\"chem\">a &gt; 0</span> 時，餘弦函數在 <span class=\"chem\">t = c</span> 達到最大值。",
        // EN: Graph <span class="chem">T(t)</span> and <span class="chem">y = 20</span> for <span class="chem">1 &lt;= t &lt;= 13</span>; subtract the two intersection values.
        "在 <span class=\"chem\">1 &lt;= t &lt;= 13</span> 繪畫 <span class=\"chem\">T(t)</span> 及 <span class=\"chem\">y = 20</span> 的圖像，再把兩個交點的值相減。",
      ],
      // EN: <p>(a) <span class="chem">a = 11.8</span>, <span class="chem">d = 16</span>. (b) <span class="chem">b = 2pi/12 = pi/6</span>; <span class="chem">c = 7</span>. (c) <span class="chem">T(t) = 20</span> when <span class="chem">t = 4.66</span> and <span class="chem">t = 9.34</span>, so <span class="chem">T &gt; 20</span> for about <b>4.68 months</b>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 11.8</span>，<span class=\"chem\">d = 16</span>。(b) <span class=\"chem\">b = 2pi/12 = pi/6</span>；<span class=\"chem\">c = 7</span>。(c) 當 <span class=\"chem\">t = 4.66</span> 及 <span class=\"chem\">t = 9.34</span> 時 <span class=\"chem\">T(t) = 20</span>，故 <span class=\"chem\">T &gt; 20</span> 的時間約為 <b>4.68 個月</b>。</p>",
      markscheme: [
        // EN: A1: a = (27.8 − 4.2)/2 = 11.8.
        "A1：a = (27.8 − 4.2)/2 = 11.8。",
        // EN: A1: d = (27.8 + 4.2)/2 = 16.
        "A1：d = (27.8 + 4.2)/2 = 16。",
        // EN: A1: Period 12 months, so b = 2π/12 = π/6 (≈ 0.524).
        "A1：週期為 12 個月，故 b = 2π/12 = π/6 (≈ 0.524)。",
        // EN: A1: c = 7 (a maximum of a positive cosine occurs at t = c).
        "A1：c = 7（正餘弦函數的最大值出現在 t = c）。",
        // EN: M1: Set 11.8 cos((π/6)(t − 7)) + 16 = 20, or intersect the graph with T = 20 on a GDC.
        "M1：設 11.8 cos((π/6)(t − 7)) + 16 = 20，或在 GDC 上求圖像與 T = 20 的交點。",
        // EN: A1: t = 4.66 and t = 9.34.
        "A1：t = 4.66 及 t = 9.34。",
        // EN: A1: Length of time = 9.34 − 4.66 = 4.68 months.
        "A1：時間長度 = 9.34 − 4.66 = 4.68 個月。",
      ],
    },

    // ── t3-2-q022 · numeric · exam · SL · SL 3.8 · 4 marks
    "t3-2-q022": {
      // EN: <p>Consider the equation <span class="chem">4 sin(2x) + 1 = x</span>, where <span class="chem">x</span> is in radians and <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p><p>The equation has three solutions in this interval. Find the largest solution, giving your answer to 3 significant figures.</p>
      stem: "<p>考慮方程 <span class=\"chem\">4 sin(2x) + 1 = x</span>，其中 <span class=\"chem\">x</span> 以弧度為單位，且 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>。</p><p>此方程在該區間內有三個解。求 (Find) 最大的解，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: This equation mixes a trigonometric function with a linear one, so it cannot be solved algebraically: solve it graphically on your GDC.
        "這個方程混合了三角函數與線性函數，因此不能用代數方法求解：要在 GDC 上用圖像法解。",
        // EN: Graph <span class="chem">y = 4 sin(2x) + 1</span> and <span class="chem">y = x</span> on <span class="chem">0 &lt;= x &lt;= 2pi</span> (radian mode) and find the intersection with the largest <span class="chem">x</span>-coordinate.
        "在 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>（弧度模式）繪畫 <span class=\"chem\">y = 4 sin(2x) + 1</span> 及 <span class=\"chem\">y = x</span> 的圖像，並找出 <span class=\"chem\">x</span> 坐標最大的交點。",
      ],
      // EN: <p>The graphs of <span class="chem">y = 4 sin(2x) + 1</span> and <span class="chem">y = x</span> meet at <span class="chem">x = 1.507…, 3.475…, 4.240…</span>. For <span class="chem">x &gt; 5</span> the line is above the maximum value 5 of the sine curve, so there are no more solutions. Largest solution: <b>x = 4.24</b>.</p>
      solution: "<p><span class=\"chem\">y = 4 sin(2x) + 1</span> 與 <span class=\"chem\">y = x</span> 的圖像相交於 <span class=\"chem\">x = 1.507…, 3.475…, 4.240…</span>。當 <span class=\"chem\">x &gt; 5</span> 時，直線高於正弦曲線的最大值 5，所以再沒有其他解。最大的解：<b>x = 4.24</b>。</p>",
    },

    // ── t3-2-q023 · numeric · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q023": {
      // EN: <p>Solve the equation <span class="chem">5 cos^2 x - 2 sin x - 3 = 0</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>, where <span class="chem">x</span> is in radians.</p><p>The equation has four solutions in this interval. Find the largest one, giving your answer to 3 significant figures.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">5 cos^2 x - 2 sin x - 3 = 0</span>，其中 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>，<span class=\"chem\">x</span> 以弧度為單位。</p><p>此方程在該區間內有四個解。求 (Find) 最大的一個，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Replace <span class="chem">cos^2 x</span> with <span class="chem">1 - sin^2 x</span> to get a quadratic in <span class="chem">sin x</span>.
        "把 <span class=\"chem\">cos^2 x</span> 換成 <span class=\"chem\">1 - sin^2 x</span>，得到關於 <span class=\"chem\">sin x</span> 的二次方程。",
        // EN: You should get <span class="chem">5 sin^2 x + 2 sin x - 2 = 0</span>, so <span class="chem">sin x = (-1 +- sqrt(11))/5</span>. Both values lie in <span class="chem">[-1, 1]</span>.
        "你應得到 <span class=\"chem\">5 sin^2 x + 2 sin x - 2 = 0</span>，故 <span class=\"chem\">sin x = (-1 +- sqrt(11))/5</span>。兩個值都在 <span class=\"chem\">[-1, 1]</span> 之內。",
        // EN: The negative value <span class="chem">sin x = -0.8633…</span> gives solutions in quadrants III and IV: <span class="chem">x = pi + alpha</span> and <span class="chem">x = 2pi - alpha</span>, where <span class="chem">alpha = arcsin(0.8633…)</span>.
        "負值 <span class=\"chem\">sin x = -0.8633…</span> 給出第三及第四象限的解：<span class=\"chem\">x = pi + alpha</span> 及 <span class=\"chem\">x = 2pi - alpha</span>，其中 <span class=\"chem\">alpha = arcsin(0.8633…)</span>。",
      ],
      // EN: <p><span class="chem">5(1 - sin^2 x) - 2 sin x - 3 = 0</span> gives <span class="chem">5 sin^2 x + 2 sin x - 2 = 0</span>, so <span class="chem">sin x = 0.4633…</span> or <span class="chem">sin x = -0.8633…</span>.</p><p><span class="chem">sin x = 0.4633…</span>: <span class="chem">x = 0.482, 2.66</span>. <span class="chem">sin x = -0.8633…</span>: with <span class="chem">alpha = 1.0418…</span>, <span class="chem">x = pi + alpha = 4.18</span> and <span class="chem">x = 2pi - alpha = 5.241…</span>.</p><p>Largest solution: <b>x = 5.24</b>.</p>
      solution: "<p>由 <span class=\"chem\">5(1 - sin^2 x) - 2 sin x - 3 = 0</span> 得 <span class=\"chem\">5 sin^2 x + 2 sin x - 2 = 0</span>，故 <span class=\"chem\">sin x = 0.4633…</span> 或 <span class=\"chem\">sin x = -0.8633…</span>。</p><p><span class=\"chem\">sin x = 0.4633…</span>：<span class=\"chem\">x = 0.482, 2.66</span>。<span class=\"chem\">sin x = -0.8633…</span>：取 <span class=\"chem\">alpha = 1.0418…</span>，則 <span class=\"chem\">x = pi + alpha = 4.18</span> 及 <span class=\"chem\">x = 2pi - alpha = 5.241…</span>。</p><p>最大的解：<b>x = 5.24</b>。</p>",
    },

    // ── t3-2-q024 · short · challenge · SL · SL 3.7, 3.8 · 7 marks
    "t3-2-q024": {
      // EN: <p>Two marker buoys bob up and down on waves. The heights, in metres, of buoy A and buoy B above mean sea level <span class="chem">t</span> seconds after a recording starts are</p><p><span class="chem">h_A(t) = 0.8 sin(1.3t)</span> and <span class="chem">h_B(t) = 0.6 cos(0.9t) + 0.1</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>.</p><p>(a) Find the first time at which the two buoys are at the same height. [2]</p><p>(b) Find the total length of time during the recording for which buoy A is higher than buoy B. [3]</p><p>(c) Find the greatest vertical distance between the two buoys during the recording. [2]</p>
      stem: "<p>兩個浮標隨波浪上下浮動。記錄開始後 <span class=\"chem\">t</span> 秒，浮標 A 和浮標 B 在平均海平面以上的高度（以米為單位）分別為</p><p><span class=\"chem\">h_A(t) = 0.8 sin(1.3t)</span> 及 <span class=\"chem\">h_B(t) = 0.6 cos(0.9t) + 0.1</span>，其中 <span class=\"chem\">0 &lt;= t &lt;= 10</span>。</p><p>(a) 求 (Find) 兩個浮標首次處於相同高度的時刻。[2]</p><p>(b) 求在記錄期間浮標 A 高於浮標 B 的總時間長度。[3]</p><p>(c) 求在記錄期間兩個浮標之間的最大垂直距離。[2]</p>",
      hints: [
        // EN: Decode: "same height" means <span class="chem">h_A = h_B</span>; "A higher than B" means the inequality <span class="chem">h_A(t) &gt; h_B(t)</span>; "vertical distance" means <span class="chem">|h_A - h_B|</span>. The two waves have different periods, so this is a GDC graphing question.
        "解碼：「相同高度」即 <span class=\"chem\">h_A = h_B</span>；「A 高於 B」即不等式 <span class=\"chem\">h_A(t) &gt; h_B(t)</span>；「垂直距離」即 <span class=\"chem\">|h_A - h_B|</span>。兩個波的週期不同，所以這是一道用 GDC 繪圖的題目。",
        // EN: Graph the single function <span class="chem">y = h_A(t) - h_B(t)</span> for <span class="chem">0 &lt;= t &lt;= 10</span>. Its zeros answer (a), the parts above the axis answer (b).
        "在 <span class=\"chem\">0 &lt;= t &lt;= 10</span> 繪畫單一函數 <span class=\"chem\">y = h_A(t) - h_B(t)</span> 的圖像。它的零點回答 (a)，圖像在軸上方的部分回答 (b)。",
        // EN: For (c), the greatest vertical distance is the largest of |max| and |min| of <span class="chem">h_A - h_B</span> on the interval. Check the end points too.
        "對於 (c)，最大垂直距離是 <span class=\"chem\">h_A - h_B</span> 在該區間上 |最大值| 與 |最小值| 之中較大者。也要檢查端點。",
      ],
      // EN: <p><strong>Decoding:</strong> each phrase is a statement about <span class="chem">D(t) = h_A(t) - h_B(t)</span>: same height ⇔ <span class="chem">D = 0</span>; A higher ⇔ <span class="chem">D &gt; 0</span>; vertical distance <span class="chem">= |D|</span>.</p><p>(a) The zeros of <span class="chem">D</span> are <span class="chem">t = 0.652, 2.809, 4.626, 6.521, 9.421</span>. <span class="chem">D(0) = -0.7 &lt; 0</span>, so the first meeting is at <b>0.652 s</b>.</p><p>(b) <span class="chem">D &gt; 0</span> on <span class="chem">(0.652, 2.809)</span>, <span class="chem">(4.626, 6.521)</span>, <span class="chem">(9.421, 10]</span>: total <b>4.63 s</b>.</p><p>(c) The minimum of <span class="chem">D</span> is <span class="chem">-1.136</span> at <span class="chem">t = 8.11</span> and its maximum is smaller in size, so the greatest distance is <b>1.14 m</b>.</p>
      solution: "<p><strong>解碼：</strong>每個片語都是關於 <span class=\"chem\">D(t) = h_A(t) - h_B(t)</span> 的敘述：相同高度 ⇔ <span class=\"chem\">D = 0</span>；A 較高 ⇔ <span class=\"chem\">D &gt; 0</span>；垂直距離 <span class=\"chem\">= |D|</span>。</p><p>(a) <span class=\"chem\">D</span> 的零點為 <span class=\"chem\">t = 0.652, 2.809, 4.626, 6.521, 9.421</span>。<span class=\"chem\">D(0) = -0.7 &lt; 0</span>，所以首次相遇在 <b>0.652 s</b>。</p><p>(b) 在 <span class=\"chem\">(0.652, 2.809)</span>、<span class=\"chem\">(4.626, 6.521)</span>、<span class=\"chem\">(9.421, 10]</span> 上 <span class=\"chem\">D &gt; 0</span>：合共 <b>4.63 s</b>。</p><p>(c) <span class=\"chem\">D</span> 的最小值為 <span class=\"chem\">-1.136</span>，出現在 <span class=\"chem\">t = 8.11</span>，而其最大值的絕對值較小，所以最大距離為 <b>1.14 m</b>。</p>",
      // EN: <p>(a) <span class="chem">t = 0.652</span> s. (b) A is higher on <span class="chem">0.652 &lt; t &lt; 2.81</span>, <span class="chem">4.63 &lt; t &lt; 6.52</span> and <span class="chem">9.42 &lt; t &lt;= 10</span>: total <b>4.63 s</b>. (c) The greatest value of <span class="chem">|h_A(t) - h_B(t)|</span> is <b>1.14 m</b> (at <span class="chem">t = 8.11</span>, with B above A).</p>
      answer: "<p>(a) <span class=\"chem\">t = 0.652</span> s。(b) A 在 <span class=\"chem\">0.652 &lt; t &lt; 2.81</span>、<span class=\"chem\">4.63 &lt; t &lt; 6.52</span> 及 <span class=\"chem\">9.42 &lt; t &lt;= 10</span> 較高：合共 <b>4.63 s</b>。(c) <span class=\"chem\">|h_A(t) - h_B(t)|</span> 的最大值為 <b>1.14 m</b>（在 <span class=\"chem\">t = 8.11</span>，此時 B 高於 A）。</p>",
      markscheme: [
        // EN: M1: Graph h_A and h_B (or h_A − h_B) on 0 ≤ t ≤ 10 and find the first intersection.
        "M1：在 0 ≤ t ≤ 10 繪畫 h_A 及 h_B（或 h_A − h_B）的圖像，並求首個交點。",
        // EN: A1: t = 0.652 s.
        "A1：t = 0.652 s。",
        // EN: M1: Find all the intersections: t = 0.652, 2.81, 4.63, 6.52, 9.42.
        "M1：求所有交點：t = 0.652, 2.81, 4.63, 6.52, 9.42。",
        // EN: R1: Identify the intervals where h_A > h_B: (0.652, 2.81), (4.63, 6.52) and (9.42, 10).
        "R1：找出 h_A > h_B 的區間：(0.652, 2.81)、(4.63, 6.52) 及 (9.42, 10)。",
        // EN: A1: Total time = 2.157 + 1.896 + 0.579 = 4.63 s.
        "A1：總時間 = 2.157 + 1.896 + 0.579 = 4.63 s。",
        // EN: M1: Graph y = |h_A(t) − h_B(t)| (or find the max and min of h_A − h_B) on 0 ≤ t ≤ 10.
        "M1：在 0 ≤ t ≤ 10 繪畫 y = |h_A(t) − h_B(t)| 的圖像（或求 h_A − h_B 的最大值和最小值）。",
        // EN: A1: Greatest vertical distance = 1.14 m.
        "A1：最大垂直距離 = 1.14 m。",
      ],
    },

    // ── t3-2-q025 · numeric · challenge · SL · SL 3.7, 3.8 · 6 marks
    "t3-2-q025": {
      // EN: <p>In a northern city, the number of hours of daylight <span class="chem">D</span> on day <span class="chem">t</span> of the year (<span class="chem">t = 1</span> is 1 January; the year has 365 days) is modelled by <span class="chem">D(t) = a cos(b(t - c)) + d</span>, with <span class="chem">a, b &gt; 0</span>. The longest day, with 15.20 hours of daylight, is day 172. The shortest day, with 9.10 hours, is half a year later, and the pattern repeats every 365 days.</p><p>A day is called a "long day" if it has more than 14 hours of daylight. Using the model, find how many long days there are in one year (days 1 to 365).</p>
      stem: "<p>在某北方城市，一年中第 <span class=\"chem\">t</span> 天的日照時數 <span class=\"chem\">D</span>（<span class=\"chem\">t = 1</span> 為 1 月 1 日；一年有 365 天）以 <span class=\"chem\">D(t) = a cos(b(t - c)) + d</span> 模擬，其中 <span class=\"chem\">a, b &gt; 0</span>。日照最長的一天是第 172 天，有 15.20 小時日照。日照最短的一天在半年之後，有 9.10 小時，而這規律每 365 天重複一次。</p><p>若某天的日照多於 14 小時，則稱為「長日」。利用此模型，求 (Find) 一年內（第 1 至 365 天）有多少個長日。</p>",
      hints: [
        // EN: Decode: build the model first (amplitude, principal axis, period 365 days, maximum at <span class="chem">t = 172</span>), then solve the inequality <span class="chem">D(t) &gt; 14</span>. The answer is a number of whole days, so you must count integers, not subtract decimals.
        "解碼：先建立模型（振幅、主軸、週期 365 天、在 <span class=\"chem\">t = 172</span> 達到最大值），再解不等式 <span class=\"chem\">D(t) &gt; 14</span>。答案是整數天數，所以你要數整數，而不是把小數相減。",
        // EN: <span class="chem">a = (15.20 - 9.10)/2 = 3.05</span>, <span class="chem">d = (15.20 + 9.10)/2 = 12.15</span>, <span class="chem">b = 2pi/365</span>, <span class="chem">c = 172</span>.
        "<span class=\"chem\">a = (15.20 - 9.10)/2 = 3.05</span>，<span class=\"chem\">d = (15.20 + 9.10)/2 = 12.15</span>，<span class=\"chem\">b = 2pi/365</span>，<span class=\"chem\">c = 172</span>。",
        // EN: Solve <span class="chem">D(t) = 14</span> on a GDC: the solutions lie between consecutive whole numbers. Work out the first and last whole-number day with <span class="chem">D(t) &gt; 14</span> and count them inclusively.
        "在 GDC 上解 <span class=\"chem\">D(t) = 14</span>：解位於相鄰兩個整數之間。找出使 <span class=\"chem\">D(t) &gt; 14</span> 的第一個和最後一個整數日，並連首尾一起計算天數。",
      ],
      // EN: <p><strong>Decoding:</strong> "how many long days" asks for the number of integers <span class="chem">t</span> in <span class="chem">1 &lt;= t &lt;= 365</span> with <span class="chem">D(t) &gt; 14</span>.</p><p><span class="chem">D(t) = 3.05 cos((2pi/365)(t - 172)) + 12.15</span>. Solving <span class="chem">D(t) = 14</span> gives <span class="chem">t = 118.5…</span> and <span class="chem">t = 225.5…</span>. Check: <span class="chem">D(118) = 13.97</span>, <span class="chem">D(119) = 14.02</span>, <span class="chem">D(225) = 14.02</span>, <span class="chem">D(226) = 13.97</span>.</p><p>The long days are days 119 to 225 inclusive: <span class="chem">225 - 119 + 1 =</span> <b>107 days</b>.</p>
      solution: "<p><strong>解碼：</strong>「有多少個長日」問的是在 <span class=\"chem\">1 &lt;= t &lt;= 365</span> 中滿足 <span class=\"chem\">D(t) &gt; 14</span> 的整數 <span class=\"chem\">t</span> 的個數。</p><p><span class=\"chem\">D(t) = 3.05 cos((2pi/365)(t - 172)) + 12.15</span>。解 <span class=\"chem\">D(t) = 14</span> 得 <span class=\"chem\">t = 118.5…</span> 及 <span class=\"chem\">t = 225.5…</span>。檢查：<span class=\"chem\">D(118) = 13.97</span>，<span class=\"chem\">D(119) = 14.02</span>，<span class=\"chem\">D(225) = 14.02</span>，<span class=\"chem\">D(226) = 13.97</span>。</p><p>長日為第 119 至 225 天（包括首尾）：<span class=\"chem\">225 - 119 + 1 =</span> <b>107 天</b>。</p>",
    },

    // ── t3-2-q026 · short · exam · SL · SL 3.7, 3.8 · 9 marks
    "t3-2-q026": {
      // EN: <p>At a harbour entrance, high tide on a particular day has a depth of 6.4 m at 01:30, and the next low tide has a depth of 2.2 m at 07:45. The depth of water, <span class="chem">y</span> metres, <span class="chem">t</span> hours after midnight is modelled by <span class="chem">y(t) = a cos(b(t - 1.5)) + d</span>, where <span class="chem">a, b &gt; 0</span>.</p><p>(a) Find the values of <span class="chem">a</span>, <span class="chem">d</span> and <span class="chem">b</span>. [3]</p><p>(b) Write down the model, and verify that it gives a depth of 2.2 m at 07:45. [1]</p><p>A fishing boat needs a depth of at least 3.5 m to pass through the entrance.</p><p>(c) Find the earliest time after 07:45 at which the boat can pass through. Give your answer to the nearest minute. [3]</p><p>(d) Find the length of time, in hours and minutes, for which the boat can then pass through without stopping. [2]</p>
      stem: "<p>在某港口入口，某一天的高潮於 01:30 出現，水深 6.4 m；接着的低潮於 07:45 出現，水深 2.2 m。午夜後 <span class=\"chem\">t</span> 小時的水深 <span class=\"chem\">y</span> 米以 <span class=\"chem\">y(t) = a cos(b(t - 1.5)) + d</span> 模擬，其中 <span class=\"chem\">a, b &gt; 0</span>。</p><p>(a) 求 (Find) <span class=\"chem\">a</span>、<span class=\"chem\">d</span> 及 <span class=\"chem\">b</span> 的值。[3]</p><p>(b) 寫出 (Write down) 此模型，並驗證 (verify) 它在 07:45 給出 2.2 m 的水深。[1]</p><p>一艘漁船需要至少 3.5 m 的水深才能通過入口。</p><p>(c) 求在 07:45 之後漁船最早可以通過的時間，答案準確至最接近的分鐘。[3]</p><p>(d) 求漁船之後可以不停地通過的時間長度，以小時和分鐘表示。[2]</p>",
      hints: [
        // EN: Decode: high and low tide give the maximum, minimum and half the period. "At least 3.5 m" means you need <span class="chem">y(t) &gt;= 3.5</span>, and times must be converted from decimal hours to clock times.
        "解碼：高潮和低潮給出最大值、最小值及半個週期。「至少 3.5 m」表示你需要 <span class=\"chem\">y(t) &gt;= 3.5</span>，而時間必須由小數小時換算成鐘面時間。",
        // EN: 07:45 is <span class="chem">t = 7.75</span>. The time from high tide to low tide is half a period.
        "07:45 即 <span class=\"chem\">t = 7.75</span>。由高潮到低潮的時間是半個週期。",
        // EN: For (c), the depth rises after the low tide at 07:45. Intersect <span class="chem">y(t)</span> with <span class="chem">y = 3.5</span>; convert the decimal part of the hour to minutes by multiplying by 60.
        "對於 (c)，水深在 07:45 的低潮之後上升。求 <span class=\"chem\">y(t)</span> 與 <span class=\"chem\">y = 3.5</span> 的交點；把小時的小數部分乘以 60 換算成分鐘。",
      ],
      // EN: <p>(a) <span class="chem">a = 2.1</span>, <span class="chem">d = 4.3</span>, period <span class="chem">= 2(7.75 - 1.5) = 12.5</span> h so <span class="chem">b = 2pi/12.5 = 0.503</span> (<span class="chem">= 4pi/25</span>). (b) <span class="chem">y(t) = 2.1 cos((4pi/25)(t - 1.5)) + 4.3</span>; <span class="chem">y(7.75) = 2.1 cos(pi) + 4.3 = 2.2</span>. (c) <span class="chem">y = 3.5</span> at <span class="chem">t = 10.097</span>, i.e. <b>10:06</b>. (d) The depth next falls to 3.5 m at <span class="chem">t = 17.903</span>, so the window is <span class="chem">7.81</span> h, about <b>7 h 48 min</b>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 2.1</span>，<span class=\"chem\">d = 4.3</span>，週期 <span class=\"chem\">= 2(7.75 - 1.5) = 12.5</span> h，故 <span class=\"chem\">b = 2pi/12.5 = 0.503</span>（<span class=\"chem\">= 4pi/25</span>）。(b) <span class=\"chem\">y(t) = 2.1 cos((4pi/25)(t - 1.5)) + 4.3</span>；<span class=\"chem\">y(7.75) = 2.1 cos(pi) + 4.3 = 2.2</span>。(c) 當 <span class=\"chem\">t = 10.097</span> 時 <span class=\"chem\">y = 3.5</span>，即 <b>10:06</b>。(d) 水深在 <span class=\"chem\">t = 17.903</span> 再次降至 3.5 m，所以可通過的時段為 <span class=\"chem\">7.81</span> h，約 <b>7 h 48 min</b>。</p>",
      markscheme: [
        // EN: A1: a = (6.4 − 2.2)/2 = 2.1.
        "A1：a = (6.4 − 2.2)/2 = 2.1。",
        // EN: A1: d = (6.4 + 2.2)/2 = 4.3.
        "A1：d = (6.4 + 2.2)/2 = 4.3。",
        // EN: A1: Half-period = 7.75 − 1.5 = 6.25 h, so period 12.5 h and b = 2π/12.5 = 4π/25 (≈ 0.503).
        "A1：半週期 = 7.75 − 1.5 = 6.25 h，故週期為 12.5 h，b = 2π/12.5 = 4π/25 (≈ 0.503)。",
        // EN: A1: y(t) = 2.1 cos((4π/25)(t − 1.5)) + 4.3, and y(7.75) = 2.1 cos π + 4.3 = 2.2.
        "A1：y(t) = 2.1 cos((4π/25)(t − 1.5)) + 4.3，且 y(7.75) = 2.1 cos π + 4.3 = 2.2。",
        // EN: M1: Solve y(t) = 3.5 on a GDC for t > 7.75 (graph y(t) and y = 3.5).
        "M1：在 GDC 上就 t > 7.75 解 y(t) = 3.5（繪畫 y(t) 及 y = 3.5 的圖像）。",
        // EN: A1: t = 10.097… hours.
        "A1：t = 10.097… 小時。",
        // EN: A1: 0.097 h ≈ 6 minutes, so the time is 10:06.
        "A1：0.097 h ≈ 6 分鐘，故時間為 10:06。",
        // EN: M1: Next solution of y(t) = 3.5 is t = 17.903 (or use symmetry about the high tide at t = 14).
        "M1：y(t) = 3.5 的下一個解為 t = 17.903（或利用關於 t = 14 高潮的對稱性）。",
        // EN: A1: 17.903 − 10.097 = 7.81 h ≈ 7 h 48 min.
        "A1：17.903 − 10.097 = 7.81 h ≈ 7 h 48 min。",
      ],
    },

    // ── t3-2-q027 · numeric · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q027": {
      // EN: <p>Solve the equation <span class="chem">tan x = 1.5 cos x</span> for <span class="chem">0° &lt;= x &lt;= 360°</span>.</p><p>Give the largest solution in degrees, correct to 3 significant figures.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">tan x = 1.5 cos x</span>，其中 <span class=\"chem\">0° &lt;= x &lt;= 360°</span>。</p><p>以度為單位寫出最大的解，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Write <span class="chem">tan x = sin x / cos x</span> and multiply by <span class="chem">cos x</span>. Note that <span class="chem">cos x != 0</span>, because <span class="chem">tan x</span> is undefined at <span class="chem">90°</span> and <span class="chem">270°</span>.
        "寫成 <span class=\"chem\">tan x = sin x / cos x</span> 再乘以 <span class=\"chem\">cos x</span>。注意 <span class=\"chem\">cos x != 0</span>，因為 <span class=\"chem\">tan x</span> 在 <span class=\"chem\">90°</span> 及 <span class=\"chem\">270°</span> 沒有定義。",
        // EN: You get <span class="chem">sin x = 1.5 cos^2 x = 1.5(1 - sin^2 x)</span>, a quadratic in <span class="chem">sin x</span>: <span class="chem">1.5 sin^2 x + sin x - 1.5 = 0</span>.
        "你會得到 <span class=\"chem\">sin x = 1.5 cos^2 x = 1.5(1 - sin^2 x)</span>，這是關於 <span class=\"chem\">sin x</span> 的二次方程：<span class=\"chem\">1.5 sin^2 x + sin x - 1.5 = 0</span>。",
        // EN: Only one root of the quadratic lies in <span class="chem">[-1, 1]</span>. It is positive, so the solutions are in quadrants I and II.
        "這個二次方程只有一個根在 <span class=\"chem\">[-1, 1]</span> 之內。它是正數，所以解位於第一及第二象限。",
      ],
      // EN: <p>Since <span class="chem">cos x != 0</span>: <span class="chem">sin x = 1.5 cos^2 x</span>, so <span class="chem">1.5 sin^2 x + sin x - 1.5 = 0</span> and <span class="chem">sin x = (-1 +- sqrt(10))/3</span>.</p><p><span class="chem">sin x = -1.387…</span> is impossible. <span class="chem">sin x = 0.72076…</span> gives <span class="chem">x = 46.1°</span> or <span class="chem">x = 180° - 46.1° = 133.88…°</span>. (A GDC graph of <span class="chem">y = tan x - 1.5 cos x</span> confirms only these two; the sign changes at <span class="chem">90°</span> and <span class="chem">270°</span> are asymptotes, not roots.)</p><p>Largest solution: <b>134°</b>.</p>
      solution: "<p>由於 <span class=\"chem\">cos x != 0</span>：<span class=\"chem\">sin x = 1.5 cos^2 x</span>，故 <span class=\"chem\">1.5 sin^2 x + sin x - 1.5 = 0</span>，而 <span class=\"chem\">sin x = (-1 +- sqrt(10))/3</span>。</p><p><span class=\"chem\">sin x = -1.387…</span> 不可能。<span class=\"chem\">sin x = 0.72076…</span> 給出 <span class=\"chem\">x = 46.1°</span> 或 <span class=\"chem\">x = 180° - 46.1° = 133.88…°</span>。（在 GDC 上繪畫 <span class=\"chem\">y = tan x - 1.5 cos x</span> 的圖像，可確認只有這兩個解；在 <span class=\"chem\">90°</span> 及 <span class=\"chem\">270°</span> 的符號改變是漸近線，不是根。）</p><p>最大的解：<b>134°</b>。</p>",
    },

    // ── t3-2-q028 · short · exam · AHL · AHL 3.9, SL 3.8 · 6 marks
    "t3-2-q028": {
      // EN: <p>(a) Show that the equation <span class="chem">2 sec^2 x + tan x = 5</span> can be written as <span class="chem">2 tan^2 x + tan x - 3 = 0</span>. [2]</p><p>(b) Hence solve <span class="chem">2 sec^2 x + tan x = 5</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>. Give your answers in radians, to 3 significant figures where they are not exact. [4]</p>
      stem: "<p>(a) 證明 (Show that) 方程 <span class=\"chem\">2 sec^2 x + tan x = 5</span> 可寫成 <span class=\"chem\">2 tan^2 x + tan x - 3 = 0</span>。[2]</p><p>(b) 由此 (Hence) 解 <span class=\"chem\">2 sec^2 x + tan x = 5</span>，其中 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>。答案以弧度表示，非準確值的答案準確至 3 位有效數字。[4]</p>",
      hints: [
        // EN: Use the booklet identity <span class="chem">1 + tan^2 x = sec^2 x</span>.
        "利用公式手冊中的恒等式 <span class=\"chem\">1 + tan^2 x = sec^2 x</span>。",
        // EN: The quadratic factorises. One root gives exact angles, the other needs <span class="chem">arctan 1.5 = 0.9828…</span> from the GDC.
        "這個二次方程可以因式分解。其中一個根給出準確的角，另一個則需要用 GDC 求 <span class=\"chem\">arctan 1.5 = 0.9828…</span>。",
        // EN: <span class="chem">tan x</span> has period <span class="chem">pi</span>, so each value of <span class="chem">tan x</span> gives two solutions in <span class="chem">[0, 2pi]</span>. A negative tangent lies in quadrants II and IV.
        "<span class=\"chem\">tan x</span> 的週期為 <span class=\"chem\">pi</span>，所以每個 <span class=\"chem\">tan x</span> 的值在 <span class=\"chem\">[0, 2pi]</span> 內給出兩個解。負的正切值位於第二及第四象限。",
      ],
      // EN: <p>(a) <span class="chem">2(1 + tan^2 x) + tan x - 5 = 0</span>, so <span class="chem">2 tan^2 x + tan x - 3 = 0</span>. (b) <span class="chem">(2 tan x + 3)(tan x - 1) = 0</span>. <span class="chem">tan x = 1</span>: <span class="chem">x = pi/4, 5pi/4</span> (0.785, 3.93). <span class="chem">tan x = -1.5</span>: <span class="chem">x = pi - arctan 1.5 = 2.16</span> and <span class="chem">x = 2pi - arctan 1.5 = 5.30</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2(1 + tan^2 x) + tan x - 5 = 0</span>，故 <span class=\"chem\">2 tan^2 x + tan x - 3 = 0</span>。(b) <span class=\"chem\">(2 tan x + 3)(tan x - 1) = 0</span>。<span class=\"chem\">tan x = 1</span>：<span class=\"chem\">x = pi/4, 5pi/4</span> (0.785, 3.93)。<span class=\"chem\">tan x = -1.5</span>：<span class=\"chem\">x = pi - arctan 1.5 = 2.16</span> 及 <span class=\"chem\">x = 2pi - arctan 1.5 = 5.30</span>。</p>",
      markscheme: [
        // EN: M1: Use 1 + tan²x = sec²x: 2(1 + tan²x) + tan x = 5.
        "M1：利用 1 + tan²x = sec²x：2(1 + tan²x) + tan x = 5。",
        // EN: A1: 2 + 2 tan²x + tan x − 5 = 0, so 2 tan²x + tan x − 3 = 0 (AG).
        "A1：2 + 2 tan²x + tan x − 5 = 0，故 2 tan²x + tan x − 3 = 0 (AG)。",
        // EN: M1: Factorise (2 tan x + 3)(tan x − 1) = 0, or solve the quadratic, to get tan x = 1 or tan x = −1.5.
        "M1：因式分解 (2 tan x + 3)(tan x − 1) = 0，或解此二次方程，得 tan x = 1 或 tan x = −1.5。",
        // EN: A1: tan x = 1 gives x = π/4, 5π/4 (0.785, 3.93).
        "A1：tan x = 1 給出 x = π/4, 5π/4 (0.785, 3.93)。",
        // EN: A1: tan x = −1.5 gives x = π − arctan 1.5 = 2.16.
        "A1：tan x = −1.5 給出 x = π − arctan 1.5 = 2.16。",
        // EN: A1: and x = 2π − arctan 1.5 = 5.30 (four solutions in total).
        "A1：及 x = 2π − arctan 1.5 = 5.30（共四個解）。",
      ],
    },

    // ── t3-2-q029 · short · exam · AHL · AHL 3.10, SL 3.8 · 8 marks
    "t3-2-q029": {
      // EN: <p>Two signals are added to give <span class="chem">y = 3 sin t + 4 cos(t - pi/6)</span>, for <span class="chem">0 &lt;= t &lt;= 2pi</span>.</p><p>(a) Use your GDC to find the maximum value of <span class="chem">y</span> and the value of <span class="chem">t</span> at which it occurs. [2]</p><p>(b) Use a compound-angle identity to show that <span class="chem">y = 5 sin t + 2sqrt(3) cos t</span>. [3]</p><p>(c) Hence find the exact value of <span class="chem">tan t</span> when <span class="chem">y = 0</span>, and solve <span class="chem">y = 0</span> for <span class="chem">0 &lt;= t &lt;= 2pi</span>. [3]</p>
      stem: "<p>把兩個訊號相加得 <span class=\"chem\">y = 3 sin t + 4 cos(t - pi/6)</span>，其中 <span class=\"chem\">0 &lt;= t &lt;= 2pi</span>。</p><p>(a) 利用 GDC 求 (find) <span class=\"chem\">y</span> 的最大值及取得最大值時 <span class=\"chem\">t</span> 的值。[2]</p><p>(b) 利用複角公式證明 (show that) <span class=\"chem\">y = 5 sin t + 2sqrt(3) cos t</span>。[3]</p><p>(c) 由此 (Hence) 求當 <span class=\"chem\">y = 0</span> 時 <span class=\"chem\">tan t</span> 的準確值，並就 <span class=\"chem\">0 &lt;= t &lt;= 2pi</span> 解 <span class=\"chem\">y = 0</span>。[3]</p>",
      hints: [
        // EN: For (a), graph <span class="chem">y</span> in radian mode on <span class="chem">[0, 2pi]</span> and use the maximum feature.
        "對於 (a)，在弧度模式下於 <span class=\"chem\">[0, 2pi]</span> 繪畫 <span class=\"chem\">y</span> 的圖像，並使用求最大值的功能。",
        // EN: For (b), use <span class="chem">cos(A - B) = cos A cos B + sin A sin B</span> from the formula booklet.
        "對於 (b)，使用公式手冊中的 <span class=\"chem\">cos(A - B) = cos A cos B + sin A sin B</span>。",
        // EN: For (c), divide <span class="chem">5 sin t + 2sqrt(3) cos t = 0</span> by <span class="chem">cos t</span> (it cannot be 0 here: then <span class="chem">y = ±5</span>). A negative tangent gives solutions in quadrants II and IV.
        "對於 (c)，把 <span class=\"chem\">5 sin t + 2sqrt(3) cos t = 0</span> 除以 <span class=\"chem\">cos t</span>（這裏它不可能是 0：否則 <span class=\"chem\">y = ±5</span>）。負的正切值給出第二及第四象限的解。",
      ],
      // EN: <p>(a) Maximum <span class="chem">y = 6.08</span> (it is <span class="chem">sqrt(37)</span>) at <span class="chem">t = 0.965</span>. (b) <span class="chem">4 cos(t - pi/6) = 4(cos t · sqrt(3)/2 + sin t · 1/2) = 2sqrt(3) cos t + 2 sin t</span>, so <span class="chem">y = 5 sin t + 2sqrt(3) cos t</span>. (c) <span class="chem">tan t = -2sqrt(3)/5</span>; <span class="chem">t = 2.54</span> or <span class="chem">t = 5.68</span>.</p>
      answer: "<p>(a) 最大值 <span class=\"chem\">y = 6.08</span>（即 <span class=\"chem\">sqrt(37)</span>），在 <span class=\"chem\">t = 0.965</span> 取得。(b) <span class=\"chem\">4 cos(t - pi/6) = 4(cos t · sqrt(3)/2 + sin t · 1/2) = 2sqrt(3) cos t + 2 sin t</span>，故 <span class=\"chem\">y = 5 sin t + 2sqrt(3) cos t</span>。(c) <span class=\"chem\">tan t = -2sqrt(3)/5</span>；<span class=\"chem\">t = 2.54</span> 或 <span class=\"chem\">t = 5.68</span>。</p>",
      markscheme: [
        // EN: A1: Maximum value y = 6.08.
        "A1：最大值 y = 6.08。",
        // EN: A1: at t = 0.965.
        "A1：在 t = 0.965 取得。",
        // EN: M1: Expand cos(t − π/6) = cos t cos(π/6) + sin t sin(π/6).
        "M1：展開 cos(t − π/6) = cos t cos(π/6) + sin t sin(π/6)。",
        // EN: A1: Substitute cos(π/6) = √3/2 and sin(π/6) = 1/2: 4 cos(t − π/6) = 2√3 cos t + 2 sin t.
        "A1：代入 cos(π/6) = √3/2 及 sin(π/6) = 1/2：4 cos(t − π/6) = 2√3 cos t + 2 sin t。",
        // EN: A1: Collect terms: y = 3 sin t + 2 sin t + 2√3 cos t = 5 sin t + 2√3 cos t (AG).
        "A1：合併同類項：y = 3 sin t + 2 sin t + 2√3 cos t = 5 sin t + 2√3 cos t (AG)。",
        // EN: M1: y = 0 gives 5 sin t = −2√3 cos t, so tan t = −2√3/5.
        "M1：y = 0 給出 5 sin t = −2√3 cos t，故 tan t = −2√3/5。",
        // EN: A1: t = π − arctan(2√3/5) = 2.54.
        "A1：t = π − arctan(2√3/5) = 2.54。",
        // EN: A1: t = 2π − arctan(2√3/5) = 5.68.
        "A1：t = 2π − arctan(2√3/5) = 5.68。",
      ],
    },

    // ── t3-2-q030 · numeric · challenge · AHL · AHL 3.9 · 6 marks
    "t3-2-q030": {
      // EN: <p>A painting 3.6 m tall hangs on a vertical wall. Its lower edge is 1.2 m above the eye level of a visitor, who stands on level ground <span class="chem">x</span> metres from the wall. The angle between the visitor's lines of sight to the top and the bottom of the painting is <span class="chem">theta</span>.</p><p>The visitor chooses <span class="chem">x</span> to make <span class="chem">theta</span> as large as possible. Find this largest value of <span class="chem">theta</span>, in degrees, correct to 3 significant figures.</p>
      stem: "<p>一幅高 3.6 m 的畫掛在一面垂直的牆上。畫的下邊緣比一名參觀者的視線水平高 1.2 m，參觀者站在水平地面上，距離牆壁 <span class=\"chem\">x</span> 米。參觀者望向畫的頂部和底部的兩條視線之間的夾角為 <span class=\"chem\">theta</span>。</p><p>參觀者選擇 <span class=\"chem\">x</span> 使 <span class=\"chem\">theta</span> 盡可能大。求 (Find) <span class=\"chem\">theta</span> 的這個最大值（以度為單位），答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: <span class="chem">theta</span> is the DIFFERENCE of two angles of elevation (to the top and to the bottom of the painting). Write each one with arctan, then maximise the difference on a GDC.
        "解碼：<span class=\"chem\">theta</span> 是兩個仰角（望向畫的頂部和底部）之「差」。把兩者分別用 arctan 表示，再在 GDC 上求這個差的最大值。",
        // EN: The top is <span class="chem">1.2 + 3.6 = 4.8</span> m above eye level, so <span class="chem">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span> for <span class="chem">x &gt; 0</span>.
        "畫的頂部比視線水平高 <span class=\"chem\">1.2 + 3.6 = 4.8</span> m，所以當 <span class=\"chem\">x &gt; 0</span> 時 <span class=\"chem\">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span>。",
        // EN: Graph <span class="chem">theta(x)</span> (in degree mode, or convert from radians) for, say, <span class="chem">0 &lt; x &lt;= 10</span> and use the maximum feature.
        "在例如 <span class=\"chem\">0 &lt; x &lt;= 10</span> 的範圍繪畫 <span class=\"chem\">theta(x)</span> 的圖像（用度數模式，或由弧度換算），並使用求最大值的功能。",
      ],
      // EN: <p><strong>Decoding:</strong> the angle the painting subtends = (angle of elevation of the top) − (angle of elevation of the bottom).</p><p><span class="chem">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span>. The GDC maximum is at <span class="chem">x = 2.40</span> m, where <span class="chem">theta = arctan 2 - arctan 0.5 = 36.869…°</span>.</p><p>(Check with <span class="chem">tan(A - B)</span>: <span class="chem">(2 - 0.5)/(1 + 2 × 0.5) = 0.75</span>, and <span class="chem">arctan 0.75 = 36.87°</span>.) Largest angle: <b>36.9°</b>.</p>
      solution: "<p><strong>解碼：</strong>畫所對的角 =（頂部的仰角）−（底部的仰角）。</p><p><span class=\"chem\">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span>。GDC 顯示最大值在 <span class=\"chem\">x = 2.40</span> m，此時 <span class=\"chem\">theta = arctan 2 - arctan 0.5 = 36.869…°</span>。</p><p>（用 <span class=\"chem\">tan(A - B)</span> 檢查：<span class=\"chem\">(2 - 0.5)/(1 + 2 × 0.5) = 0.75</span>，而 <span class=\"chem\">arctan 0.75 = 36.87°</span>。）最大的角：<b>36.9°</b>。</p>",
    },

    // ── t3-2-q031 · numeric · exam · SL · SL 3.8 · 5 marks
    "t3-2-q031": {
      // EN: <p>Solve the equation <span class="chem">3 sin(2x - 40°) = 1.7</span> for <span class="chem">0° &lt;= x &lt;= 360°</span>.</p><p>The equation has four solutions in this interval. Find the largest one, in degrees, correct to 3 significant figures.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">3 sin(2x - 40°) = 1.7</span>，其中 <span class=\"chem\">0° &lt;= x &lt;= 360°</span>。</p><p>此方程在該區間內有四個解。求 (Find) 最大的一個（以度為單位），答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Let <span class="chem">u = 2x - 40°</span>. Change the interval first: <span class="chem">-40° &lt;= u &lt;= 680°</span>.
        "設 <span class=\"chem\">u = 2x - 40°</span>。先變換區間：<span class=\"chem\">-40° &lt;= u &lt;= 680°</span>。",
        // EN: <span class="chem">sin u = 1.7/3</span>, so the reference angle is <span class="chem">arcsin(1.7/3) = 34.52°</span>. List <span class="chem">u = 34.52°, 145.48°</span> and add <span class="chem">360°</span> while you stay below <span class="chem">680°</span>.
        "<span class=\"chem\">sin u = 1.7/3</span>，所以參考角為 <span class=\"chem\">arcsin(1.7/3) = 34.52°</span>。列出 <span class=\"chem\">u = 34.52°, 145.48°</span>，並在不超過 <span class=\"chem\">680°</span> 的情況下加上 <span class=\"chem\">360°</span>。",
        // EN: Then <span class="chem">x = (u + 40°)/2</span>.
        "然後 <span class=\"chem\">x = (u + 40°)/2</span>。",
      ],
      // EN: <p><span class="chem">u = 2x - 40° in [-40°, 680°]</span>, <span class="chem">sin u = 0.5667</span>: <span class="chem">u = 34.52°, 145.48°, 394.52°, 505.48°</span>.</p><p><span class="chem">x = (u + 40°)/2 = 37.3°, 92.7°, 217.3°, 272.74…°</span>. Largest: <b>273°</b>.</p>
      solution: "<p><span class=\"chem\">u = 2x - 40° in [-40°, 680°]</span>，<span class=\"chem\">sin u = 0.5667</span>：<span class=\"chem\">u = 34.52°, 145.48°, 394.52°, 505.48°</span>。</p><p><span class=\"chem\">x = (u + 40°)/2 = 37.3°, 92.7°, 217.3°, 272.74…°</span>。最大：<b>273°</b>。</p>",
    },

    // ── t3-2-q032 · short · challenge · SL · SL 3.7, 3.8 · 9 marks
    "t3-2-q032": {
      // EN: <p>A Ferris wheel of radius 20 m has its centre 23 m above the ground. It rotates anticlockwise at a constant rate of 0.4 revolutions per minute. At <span class="chem">t = 0</span>, car A is level with the centre and moving upwards. Car B is at the opposite end of the diameter through A.</p><p>(a) Find the time for one revolution, and show that the height of car A above the ground, in metres, <span class="chem">t</span> minutes later is <span class="chem">h_A(t) = 23 + 20 sin(0.8pi t)</span>. [2]</p><p>(b) Find the times during the first revolution at which car A is 35 m above the ground. [3]</p><p>(c) Write down an expression for the height <span class="chem">h_B(t)</span> of car B, and find the first time at which the vertical distance between the two cars is 30 m. [2]</p><p>(d) Find the total time in each revolution for which the vertical distance between the cars is more than 30 m. [2]</p>
      stem: "<p>一個半徑 20 m 的摩天輪，其中心離地面 23 m。摩天輪以每分鐘 0.4 圈的等速率逆時針旋轉。在 <span class=\"chem\">t = 0</span> 時，車廂 A 與中心同高並正在向上移動。車廂 B 位於經過 A 的直徑的另一端。</p><p>(a) 求 (Find) 轉一圈所需的時間，並證明 (show that) <span class=\"chem\">t</span> 分鐘後車廂 A 離地面的高度（以米為單位）為 <span class=\"chem\">h_A(t) = 23 + 20 sin(0.8pi t)</span>。[2]</p><p>(b) 求在第一圈期間車廂 A 離地面 35 m 的時刻。[3]</p><p>(c) 寫出 (Write down) 車廂 B 高度 <span class=\"chem\">h_B(t)</span> 的表達式，並求兩個車廂之間的垂直距離首次為 30 m 的時刻。[2]</p><p>(d) 求每一圈中兩個車廂之間的垂直距離大於 30 m 的總時間。[2]</p>",
      hints: [
        // EN: Decode: "0.4 revolutions per minute" is a frequency; the period is its reciprocal. "Opposite end of the diameter" means car B is always half a revolution away from A. "Vertical distance" is <span class="chem">|h_A - h_B|</span>.
        "解碼：「每分鐘 0.4 圈」是頻率；週期是它的倒數。「直徑的另一端」表示車廂 B 總是與 A 相差半圈。「垂直距離」即 <span class=\"chem\">|h_A - h_B|</span>。",
        // EN: Car A starts at the height of the centre and goes up: that is a sine curve with no phase shift.
        "車廂 A 從中心的高度開始向上移動：這是一條沒有相移的正弦曲線。",
        // EN: For car B, <span class="chem">sin(theta + pi) = -sin theta</span>, so <span class="chem">h_B = 23 - 20 sin(0.8pi t)</span> and <span class="chem">h_A - h_B = 40 sin(0.8pi t)</span>.
        "對於車廂 B，<span class=\"chem\">sin(theta + pi) = -sin theta</span>，所以 <span class=\"chem\">h_B = 23 - 20 sin(0.8pi t)</span>，而 <span class=\"chem\">h_A - h_B = 40 sin(0.8pi t)</span>。",
        // EN: For (d), graph <span class="chem">y = 40|sin(0.8pi x)|</span> and <span class="chem">y = 30</span> on <span class="chem">0 &lt;= x &lt;= 2.5</span> and add the lengths of the intervals where the curve is above the line.
        "對於 (d)，在 <span class=\"chem\">0 &lt;= x &lt;= 2.5</span> 繪畫 <span class=\"chem\">y = 40|sin(0.8pi x)|</span> 及 <span class=\"chem\">y = 30</span> 的圖像，並把曲線高於直線的各區間長度相加。",
      ],
      // EN: <p><strong>Decoding:</strong> turn every sentence into a function: period = 1/frequency; B = A shifted by half a turn; vertical distance = <span class="chem">|h_A - h_B| = 40|sin(0.8pi t)|</span>.</p><p>(b) <span class="chem">sin(0.8pi t) = 0.6</span>: <span class="chem">0.8pi t = 0.6435</span> or <span class="chem">pi - 0.6435</span>, so <span class="chem">t = 0.256</span>, <span class="chem">0.994</span> min.</p><p>(c) <span class="chem">40 sin(0.8pi t) = 30</span>: <span class="chem">t = arcsin(0.75)/(0.8pi) = 0.337</span> min.</p><p>(d) <span class="chem">|sin(0.8pi t)| &gt; 0.75</span> on <span class="chem">(0.337, 0.913)</span> and <span class="chem">(1.587, 2.163)</span>: total <b>1.15 min</b>.</p>
      solution: "<p><strong>解碼：</strong>把每一句都轉化為函數：週期 = 1/頻率；B = A 移後半圈；垂直距離 = <span class=\"chem\">|h_A - h_B| = 40|sin(0.8pi t)|</span>。</p><p>(b) <span class=\"chem\">sin(0.8pi t) = 0.6</span>：<span class=\"chem\">0.8pi t = 0.6435</span> 或 <span class=\"chem\">pi - 0.6435</span>，故 <span class=\"chem\">t = 0.256</span>、<span class=\"chem\">0.994</span> min。</p><p>(c) <span class=\"chem\">40 sin(0.8pi t) = 30</span>：<span class=\"chem\">t = arcsin(0.75)/(0.8pi) = 0.337</span> min。</p><p>(d) 在 <span class=\"chem\">(0.337, 0.913)</span> 及 <span class=\"chem\">(1.587, 2.163)</span> 上 <span class=\"chem\">|sin(0.8pi t)| &gt; 0.75</span>：合共 <b>1.15 min</b>。</p>",
      // EN: <p>(a) One revolution takes <span class="chem">1/0.4 = 2.5</span> min, so <span class="chem">b = 2pi/2.5 = 0.8pi</span>; A starts on the principal axis going up, so <span class="chem">h_A = 23 + 20 sin(0.8pi t)</span>. (b) <span class="chem">sin(0.8pi t) = 0.6</span>: <span class="chem">t = 0.256</span> min and <span class="chem">t = 0.994</span> min. (c) <span class="chem">h_B = 23 - 20 sin(0.8pi t)</span>; distance <span class="chem">= 40|sin(0.8pi t)| = 30</span> first at <span class="chem">t = 0.337</span> min. (d) <span class="chem">|sin(0.8pi t)| &gt; 0.75</span> for a total of <b>1.15 min</b> per revolution.</p>
      answer: "<p>(a) 轉一圈需時 <span class=\"chem\">1/0.4 = 2.5</span> min，故 <span class=\"chem\">b = 2pi/2.5 = 0.8pi</span>；A 從主軸開始向上移動，故 <span class=\"chem\">h_A = 23 + 20 sin(0.8pi t)</span>。(b) <span class=\"chem\">sin(0.8pi t) = 0.6</span>：<span class=\"chem\">t = 0.256</span> min 及 <span class=\"chem\">t = 0.994</span> min。(c) <span class=\"chem\">h_B = 23 - 20 sin(0.8pi t)</span>；距離 <span class=\"chem\">= 40|sin(0.8pi t)| = 30</span> 首次出現在 <span class=\"chem\">t = 0.337</span> min。(d) 每一圈中 <span class=\"chem\">|sin(0.8pi t)| &gt; 0.75</span> 的時間合共 <b>1.15 min</b>。</p>",
      markscheme: [
        // EN: A1: Period = 1/0.4 = 2.5 minutes.
        "A1：週期 = 1/0.4 = 2.5 分鐘。",
        // EN: A1: b = 2π/2.5 = 0.8π, amplitude 20, axis 23, and a sine starts on the axis moving up, so h_A(t) = 23 + 20 sin(0.8πt) (AG).
        "A1：b = 2π/2.5 = 0.8π，振幅 20，主軸 23，而正弦函數從主軸開始向上，故 h_A(t) = 23 + 20 sin(0.8πt) (AG)。",
        // EN: M1: Solve 23 + 20 sin(0.8πt) = 35, i.e. sin(0.8πt) = 0.6, on 0 ≤ t ≤ 2.5.
        "M1：在 0 ≤ t ≤ 2.5 解 23 + 20 sin(0.8πt) = 35，即 sin(0.8πt) = 0.6。",
        // EN: A1: t = 0.256 min.
        "A1：t = 0.256 min。",
        // EN: A1: t = 0.994 min.
        "A1：t = 0.994 min。",
        // EN: A1: h_B(t) = 23 − 20 sin(0.8πt) (B is half a revolution ahead).
        "A1：h_B(t) = 23 − 20 sin(0.8πt)（B 領先半圈）。",
        // EN: A1: |h_A − h_B| = 40|sin(0.8πt)| = 30 first when t = 0.337 min.
        "A1：|h_A − h_B| = 40|sin(0.8πt)| = 30 首次出現在 t = 0.337 min。",
        // EN: M1: |sin(0.8πt)| > 0.75 on two intervals per revolution, each of length (π − 2 arcsin 0.75)/(0.8π) = 0.575 min.
        "M1：每一圈中 |sin(0.8πt)| > 0.75 在兩個區間上成立，每個區間長度為 (π − 2 arcsin 0.75)/(0.8π) = 0.575 min。",
        // EN: A1: Total = 1.15 min per revolution.
        "A1：每一圈合共 1.15 min。",
      ],
    },

    // ── t3-2-q033 · numeric · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q033": {
      // EN: <p>The equation <span class="chem">2 cos 2x = 3 sin x - 1</span> has two solutions in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>, where <span class="chem">x</span> is in radians.</p><p>Find the solution that lies in the interval <span class="chem">pi/2 &lt; x &lt; pi</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>方程 <span class=\"chem\">2 cos 2x = 3 sin x - 1</span> 在區間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> 內有兩個解，其中 <span class=\"chem\">x</span> 以弧度為單位。</p><p>求 (Find) 位於區間 <span class=\"chem\">pi/2 &lt; x &lt; pi</span> 內的解，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: The equation has <span class="chem">sin x</span> in it, so choose <span class="chem">cos 2x = 1 - 2 sin^2 x</span>.
        "方程中含有 <span class=\"chem\">sin x</span>，所以選用 <span class=\"chem\">cos 2x = 1 - 2 sin^2 x</span>。",
        // EN: You should get <span class="chem">4 sin^2 x + 3 sin x - 3 = 0</span>. Solve this quadratic in <span class="chem">sin x</span> and reject any root outside <span class="chem">[-1, 1]</span>.
        "你應得到 <span class=\"chem\">4 sin^2 x + 3 sin x - 3 = 0</span>。解這個關於 <span class=\"chem\">sin x</span> 的二次方程，並捨去 <span class=\"chem\">[-1, 1]</span> 以外的根。",
        // EN: The second-quadrant solution of <span class="chem">sin x = k</span> (with <span class="chem">k &gt; 0</span>) is <span class="chem">x = pi - arcsin k</span>.
        "<span class=\"chem\">sin x = k</span>（其中 <span class=\"chem\">k &gt; 0</span>）在第二象限的解是 <span class=\"chem\">x = pi - arcsin k</span>。",
      ],
      // EN: <p><span class="chem">2(1 - 2 sin^2 x) = 3 sin x - 1</span> gives <span class="chem">4 sin^2 x + 3 sin x - 3 = 0</span>, so <span class="chem">sin x = (-3 +- sqrt(57))/8</span>.</p><p><span class="chem">sin x = -1.319</span> is impossible; <span class="chem">sin x = 0.56873…</span> gives <span class="chem">x = 0.605</span> or <span class="chem">x = pi - 0.60496… = 2.5366…</span>.</p><p>Answer: <b>x = 2.54</b>.</p>
      solution: "<p>由 <span class=\"chem\">2(1 - 2 sin^2 x) = 3 sin x - 1</span> 得 <span class=\"chem\">4 sin^2 x + 3 sin x - 3 = 0</span>，故 <span class=\"chem\">sin x = (-3 +- sqrt(57))/8</span>。</p><p><span class=\"chem\">sin x = -1.319</span> 不可能；<span class=\"chem\">sin x = 0.56873…</span> 給出 <span class=\"chem\">x = 0.605</span> 或 <span class=\"chem\">x = pi - 0.60496… = 2.5366…</span>。</p><p>答案：<b>x = 2.54</b>。</p>",
    },

    // ── t3-2-q034 · short · challenge · SL · SL 3.7, 3.8 · 8 marks
    "t3-2-q034": {
      // EN: <p>A simple model for the blood pressure of a resting patient, <span class="chem">P</span> mm Hg, <span class="chem">t</span> seconds after a measurement begins, is <span class="chem">P(t) = 95 + 25 sin(2.4pi t)</span>. One complete cycle of the model represents one heartbeat.</p><p>(a) Find the patient's heart rate, in beats per minute. [2]</p><p>(b) Write down the greatest and the least blood pressure given by the model. [2]</p><p>(c) Find the length of time during one heartbeat for which the blood pressure is above 110 mm Hg. [3]</p><p>(d) Hence find the percentage of the time for which the blood pressure is above 110 mm Hg. [1]</p>
      stem: "<p>一名休息中病人的血壓 <span class=\"chem\">P</span> mm Hg 在量度開始後 <span class=\"chem\">t</span> 秒的簡單模型為 <span class=\"chem\">P(t) = 95 + 25 sin(2.4pi t)</span>。模型的一個完整週期代表一次心跳。</p><p>(a) 求 (Find) 病人的心率，以每分鐘心跳次數表示。[2]</p><p>(b) 寫出 (Write down) 模型給出的最高血壓和最低血壓。[2]</p><p>(c) 求在一次心跳中血壓高於 110 mm Hg 的時間長度。[3]</p><p>(d) 由此 (Hence) 求血壓高於 110 mm Hg 的時間所佔的百分比。[1]</p>",
      hints: [
        // EN: Decode: "one cycle = one heartbeat", so the heart rate is the number of periods in 60 seconds. Units matter: the model uses seconds, the answer is per minute.
        "解碼：「一個週期 = 一次心跳」，所以心率就是 60 秒內的週期數目。注意單位：模型用秒，答案要以每分鐘計。",
        // EN: Period <span class="chem">T = 2pi/b</span> with <span class="chem">b = 2.4pi</span>.
        "週期 <span class=\"chem\">T = 2pi/b</span>，其中 <span class=\"chem\">b = 2.4pi</span>。",
        // EN: For (c), graph <span class="chem">P(t)</span> and <span class="chem">y = 110</span> over one period <span class="chem">0 &lt;= t &lt;= T</span> and subtract the two intersection times.
        "對於 (c)，在一個週期 <span class=\"chem\">0 &lt;= t &lt;= T</span> 內繪畫 <span class=\"chem\">P(t)</span> 及 <span class=\"chem\">y = 110</span> 的圖像，並把兩個交點的時間相減。",
      ],
      // EN: <p><strong>Decoding:</strong> heart rate = beats per minute = <span class="chem">60 ÷</span> (period in seconds).</p><p>(a) <span class="chem">T = 2pi/(2.4pi) = 5/6</span> s, so 72 beats per minute. (b) 120 and 70 mm Hg.</p><p>(c) <span class="chem">sin(2.4pi t) = 0.6</span>: <span class="chem">t = 0.6435/(2.4pi) = 0.0853</span> and <span class="chem">t = (pi - 0.6435)/(2.4pi) = 0.3313</span>; difference <b>0.246 s</b>. (d) <b>29.5%</b>.</p>
      solution: "<p><strong>解碼：</strong>心率 = 每分鐘心跳次數 = <span class=\"chem\">60 ÷</span>（以秒為單位的週期）。</p><p>(a) <span class=\"chem\">T = 2pi/(2.4pi) = 5/6</span> s，故每分鐘 72 次。(b) 120 及 70 mm Hg。</p><p>(c) <span class=\"chem\">sin(2.4pi t) = 0.6</span>：<span class=\"chem\">t = 0.6435/(2.4pi) = 0.0853</span> 及 <span class=\"chem\">t = (pi - 0.6435)/(2.4pi) = 0.3313</span>；兩者之差為 <b>0.246 s</b>。(d) <b>29.5%</b>。</p>",
      // EN: <p>(a) Period <span class="chem">= 2pi/(2.4pi) = 0.833</span> s, so <span class="chem">60/0.8333 = 72</span> beats per minute. (b) Greatest 120 mm Hg, least 70 mm Hg. (c) <span class="chem">sin(2.4pi t) = 0.6</span> at <span class="chem">t = 0.0853</span> s and <span class="chem">t = 0.331</span> s, so <b>0.246 s</b>. (d) <span class="chem">0.246/0.833 = 29.5%</span>.</p>
      answer: "<p>(a) 週期 <span class=\"chem\">= 2pi/(2.4pi) = 0.833</span> s，故 <span class=\"chem\">60/0.8333 = 72</span> 次每分鐘。(b) 最高 120 mm Hg，最低 70 mm Hg。(c) <span class=\"chem\">sin(2.4pi t) = 0.6</span> 在 <span class=\"chem\">t = 0.0853</span> s 及 <span class=\"chem\">t = 0.331</span> s，故為 <b>0.246 s</b>。(d) <span class=\"chem\">0.246/0.833 = 29.5%</span>。</p>",
      markscheme: [
        // EN: M1: Period = 2π/(2.4π) = 0.8333 s.
        "M1：週期 = 2π/(2.4π) = 0.8333 s。",
        // EN: A1: Heart rate = 60 ÷ 0.8333 = 72 beats per minute.
        "A1：心率 = 60 ÷ 0.8333 = 每分鐘 72 次。",
        // EN: A1: Greatest P = 95 + 25 = 120 mm Hg.
        "A1：最高 P = 95 + 25 = 120 mm Hg。",
        // EN: A1: Least P = 95 − 25 = 70 mm Hg.
        "A1：最低 P = 95 − 25 = 70 mm Hg。",
        // EN: M1: Solve 95 + 25 sin(2.4πt) = 110 (sin(2.4πt) = 0.6) on 0 ≤ t ≤ 0.8333.
        "M1：在 0 ≤ t ≤ 0.8333 解 95 + 25 sin(2.4πt) = 110 (sin(2.4πt) = 0.6)。",
        // EN: A1: t = 0.0853 s and t = 0.331 s.
        "A1：t = 0.0853 s 及 t = 0.331 s。",
        // EN: A1: Time above 110 = 0.331 − 0.0853 = 0.246 s.
        "A1：高於 110 的時間 = 0.331 − 0.0853 = 0.246 s。",
        // EN: A1: Percentage = 0.246/0.8333 × 100 = 29.5%.
        "A1：百分比 = 0.246/0.8333 × 100 = 29.5%。",
      ],
    },

    // ── t3-2-q035 · numeric · challenge · SL · SL 3.7, 3.8 · 5 marks
    "t3-2-q035": {
      // EN: <p>Consider the equation <span class="chem">3 sin x + 2 sin 2x = k</span>, where <span class="chem">0 &lt;= x &lt;= 2pi</span> and <span class="chem">k ∈ ℝ</span>.</p><p>Find the largest value of <span class="chem">k</span> for which the equation has at least one solution. Give your answer to 3 significant figures.</p>
      stem: "<p>考慮方程 <span class=\"chem\">3 sin x + 2 sin 2x = k</span>，其中 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> 及 <span class=\"chem\">k ∈ ℝ</span>。</p><p>求 (Find) 使方程至少有一個解的 <span class=\"chem\">k</span> 的最大值，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the equation <span class="chem">f(x) = k</span> has a solution exactly when the horizontal line <span class="chem">y = k</span> meets the graph of <span class="chem">y = f(x)</span>. So the largest such <span class="chem">k</span> is the maximum value of <span class="chem">f(x) = 3 sin x + 2 sin 2x</span> on the interval.
        "解碼：方程 <span class=\"chem\">f(x) = k</span> 有解，恰好是當水平線 <span class=\"chem\">y = k</span> 與 <span class=\"chem\">y = f(x)</span> 的圖像相交時。所以這樣的 <span class=\"chem\">k</span> 的最大值就是 <span class=\"chem\">f(x) = 3 sin x + 2 sin 2x</span> 在該區間上的最大值。",
        // EN: The maximum is NOT <span class="chem">3 + 2 = 5</span>: the two terms do not reach their maxima at the same <span class="chem">x</span>.
        "最大值「不是」<span class=\"chem\">3 + 2 = 5</span>：兩項並不在同一個 <span class=\"chem\">x</span> 達到各自的最大值。",
        // EN: Graph <span class="chem">y = 3 sin x + 2 sin 2x</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span> and use the maximum feature.
        "在 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> 繪畫 <span class=\"chem\">y = 3 sin x + 2 sin 2x</span> 的圖像，並使用求最大值的功能。",
      ],
      // EN: <p><strong>Decoding:</strong> "largest <span class="chem">k</span> with at least one solution" = the maximum value of <span class="chem">f(x) = 3 sin x + 2 sin 2x</span> on <span class="chem">[0, 2pi]</span>.</p><p><span class="chem">3 sin x</span> peaks at <span class="chem">x = pi/2</span>, but <span class="chem">2 sin 2x</span> is 0 there, so the sum cannot reach 5. The GDC maximum is at <span class="chem">x = 0.996</span>, where <span class="chem">f(x) = 4.3431…</span>.</p><p>Largest value: <b>k = 4.34</b>.</p>
      solution: "<p><strong>解碼：</strong>「使方程至少有一個解的最大 <span class=\"chem\">k</span>」= <span class=\"chem\">f(x) = 3 sin x + 2 sin 2x</span> 在 <span class=\"chem\">[0, 2pi]</span> 上的最大值。</p><p><span class=\"chem\">3 sin x</span> 在 <span class=\"chem\">x = pi/2</span> 達到最大值，但 <span class=\"chem\">2 sin 2x</span> 在該處為 0，所以和不可能達到 5。GDC 顯示最大值在 <span class=\"chem\">x = 0.996</span>，此時 <span class=\"chem\">f(x) = 4.3431…</span>。</p><p>最大值：<b>k = 4.34</b>。</p>",
    },

    // ── t3-2-q036 · numeric · exam · AHL · AHL 3.9 · 4 marks
    "t3-2-q036": {
      // EN: <p>Solve the equation <span class="chem">arcsin x + arctan x = 1</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">arcsin x + arctan x = 1</span>，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: First decide where the left-hand side is defined: <span class="chem">arcsin x</span> needs <span class="chem">-1 &lt;= x &lt;= 1</span>.
        "先確定左方在哪裏有定義：<span class=\"chem\">arcsin x</span> 需要 <span class=\"chem\">-1 &lt;= x &lt;= 1</span>。",
        // EN: On this domain both <span class="chem">arcsin x</span> and <span class="chem">arctan x</span> are increasing, so the left-hand side is increasing and there is exactly one solution.
        "在這個定義域上，<span class=\"chem\">arcsin x</span> 和 <span class=\"chem\">arctan x</span> 都是遞增的，所以左方是遞增的，方程恰好有一個解。",
        // EN: Graph <span class="chem">y = arcsin x + arctan x</span> and <span class="chem">y = 1</span> (radian mode) for <span class="chem">-1 &lt;= x &lt;= 1</span> and find the intersection.
        "在 <span class=\"chem\">-1 &lt;= x &lt;= 1</span>（弧度模式）繪畫 <span class=\"chem\">y = arcsin x + arctan x</span> 及 <span class=\"chem\">y = 1</span> 的圖像，並求交點。",
      ],
      // EN: <p>The domain is <span class="chem">-1 &lt;= x &lt;= 1</span>. Both functions are increasing there, so <span class="chem">g(x) = arcsin x + arctan x</span> is increasing and takes each value once: <span class="chem">g(-1) = -3pi/4</span>, <span class="chem">g(1) = 3pi/4 &gt; 1</span>.</p><p>The GDC gives <span class="chem">x = 0.50652…</span>, so <b>x = 0.507</b>.</p>
      solution: "<p>定義域為 <span class=\"chem\">-1 &lt;= x &lt;= 1</span>。兩個函數在此都是遞增的，所以 <span class=\"chem\">g(x) = arcsin x + arctan x</span> 是遞增的，每個值只取一次：<span class=\"chem\">g(-1) = -3pi/4</span>，<span class=\"chem\">g(1) = 3pi/4 &gt; 1</span>。</p><p>GDC 給出 <span class=\"chem\">x = 0.50652…</span>，故 <b>x = 0.507</b>。</p>",
    },

    // ── t3-2-q037 · numeric · exam · AHL · AHL 3.10, SL 3.8 · 5 marks
    "t3-2-q037": {
      // EN: <p>Find the solution of the equation <span class="chem">sin(x + pi/5) = 2 cos(x - pi/7)</span> in the interval <span class="chem">0 &lt;= x &lt;= pi</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>求 (Find) 方程 <span class=\"chem\">sin(x + pi/5) = 2 cos(x - pi/7)</span> 在區間 <span class=\"chem\">0 &lt;= x &lt;= pi</span> 內的解，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Either graph both sides on a GDC (radian mode) and find the intersection, or expand both sides with the compound-angle identities.
        "可以在 GDC 上（弧度模式）繪畫兩邊的圖像並求交點，或用複角公式展開兩邊。",
        // EN: Expanding gives <span class="chem">sin x (cos(pi/5) - 2 sin(pi/7)) = cos x (2 cos(pi/7) - sin(pi/5))</span>, so <span class="chem">tan x</span> equals a constant.
        "展開後得 <span class=\"chem\">sin x (cos(pi/5) - 2 sin(pi/7)) = cos x (2 cos(pi/7) - sin(pi/5))</span>，所以 <span class=\"chem\">tan x</span> 等於一個常數。",
        // EN: The constant is negative (about −20.7), so the solution in <span class="chem">[0, pi]</span> is in the second quadrant: <span class="chem">x = pi + arctan(k)</span>.
        "這個常數是負數（約 −20.7），所以在 <span class=\"chem\">[0, pi]</span> 內的解位於第二象限：<span class=\"chem\">x = pi + arctan(k)</span>。",
      ],
      // EN: <p>Expanding: <span class="chem">sin x cos(pi/5) + cos x sin(pi/5) = 2 cos x cos(pi/7) + 2 sin x sin(pi/7)</span>.</p><p>So <span class="chem">tan x = (2 cos(pi/7) - sin(pi/5))/(cos(pi/5) - 2 sin(pi/7)) = 1.2141…/(-0.05875…) = -20.666…</span>.</p><p>In <span class="chem">[0, pi]</span>: <span class="chem">x = pi + arctan(-20.666…) = 1.6191…</span>, so <b>x = 1.62</b> (a GDC graph confirms one intersection).</p>
      solution: "<p>展開：<span class=\"chem\">sin x cos(pi/5) + cos x sin(pi/5) = 2 cos x cos(pi/7) + 2 sin x sin(pi/7)</span>。</p><p>故 <span class=\"chem\">tan x = (2 cos(pi/7) - sin(pi/5))/(cos(pi/5) - 2 sin(pi/7)) = 1.2141…/(-0.05875…) = -20.666…</span>。</p><p>在 <span class=\"chem\">[0, pi]</span> 內：<span class=\"chem\">x = pi + arctan(-20.666…) = 1.6191…</span>，故 <b>x = 1.62</b>（GDC 圖像確認只有一個交點）。</p>",
    },

    // ── t3-2-q038 · short · challenge · SL · SL 3.7, 3.8 · 6 marks
    "t3-2-q038": {
      // EN: <p>The depth of water, in metres, at harbour A, <span class="chem">t</span> hours after midnight, is modelled by <span class="chem">d_A(t) = 2.4 cos((pi/6.2)(t - 3)) + 5</span>.</p><p>At harbour B, further along the coast, the tide follows the same pattern with the same mean depth and the same period, but every high and low tide happens 1 hour 40 minutes later than at A, and the amplitude is 20% larger.</p><p>(a) Write down an expression for <span class="chem">d_B(t)</span>, the depth at harbour B. [2]</p><p>(b) Find the first time after midnight at which the two harbours have the same depth. Give your answer in hours after midnight to 3 significant figures. [2]</p><p>(c) Find the largest value of <span class="chem">d_A(t) - d_B(t)</span>. [2]</p>
      stem: "<p>港口 A 在午夜後 <span class=\"chem\">t</span> 小時的水深（以米為單位）以 <span class=\"chem\">d_A(t) = 2.4 cos((pi/6.2)(t - 3)) + 5</span> 模擬。</p><p>在沿海岸更遠處的港口 B，潮汐遵循相同的規律，平均水深和週期都相同，但每次高潮和低潮都比 A 遲 1 小時 40 分鐘出現，而且振幅大 20%。</p><p>(a) 寫出 (Write down) 港口 B 水深 <span class=\"chem\">d_B(t)</span> 的表達式。[2]</p><p>(b) 求 (Find) 午夜後兩個港口水深首次相同的時刻，答案以午夜後的小時數表示，準確至 3 位有效數字。[2]</p><p>(c) 求 <span class=\"chem\">d_A(t) - d_B(t)</span> 的最大值。[2]</p>",
      hints: [
        // EN: Decode: "happens 1 hour 40 minutes later" is a horizontal translation to the right of <span class="chem">1 2/3</span> hours (not 1.4 hours!). "20% larger" multiplies the amplitude by 1.2; the mean depth 5 stays the same.
        "解碼：「遲 1 小時 40 分鐘出現」是向右平移 <span class=\"chem\">1 2/3</span> 小時（不是 1.4 小時！）。「大 20%」是把振幅乘以 1.2；平均水深 5 保持不變。",
        // EN: Replace <span class="chem">t - 3</span> by <span class="chem">t - 3 - 5/3</span>, and 2.4 by 2.88.
        "把 <span class=\"chem\">t - 3</span> 換成 <span class=\"chem\">t - 3 - 5/3</span>，並把 2.4 換成 2.88。",
        // EN: Graph <span class="chem">y = d_A(t) - d_B(t)</span>: its first zero for <span class="chem">t &gt; 0</span> is (b) and its maximum is (c).
        "繪畫 <span class=\"chem\">y = d_A(t) - d_B(t)</span> 的圖像：它在 <span class=\"chem\">t &gt; 0</span> 的第一個零點是 (b) 的答案，它的最大值是 (c) 的答案。",
      ],
      // EN: <p><strong>Decoding:</strong> a later tide is a shift to the right, and minutes must become fractions of an hour: <span class="chem">1</span> h <span class="chem">40</span> min <span class="chem">= 5/3</span> h.</p><p>(a) <span class="chem">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span>.</p><p>(b) <span class="chem">d_A - d_B = 0</span> at <span class="chem">t = 3.439…</span> and <span class="chem">9.639…</span>; the first is <b>3.44 h</b>.</p><p>(c) The maximum of <span class="chem">d_A - d_B</span> (period 12.4 h) is <b>2.21 m</b>, at <span class="chem">t = 0.339</span> (and every 12.4 h after).</p>
      solution: "<p><strong>解碼：</strong>潮汐較遲即向右平移，而分鐘必須化為小時的分數：<span class=\"chem\">1</span> h <span class=\"chem\">40</span> min <span class=\"chem\">= 5/3</span> h。</p><p>(a) <span class=\"chem\">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span>。</p><p>(b) 在 <span class=\"chem\">t = 3.439…</span> 及 <span class=\"chem\">9.639…</span> 時 <span class=\"chem\">d_A - d_B = 0</span>；第一個為 <b>3.44 h</b>。</p><p>(c) <span class=\"chem\">d_A - d_B</span>（週期 12.4 h）的最大值為 <b>2.21 m</b>，出現在 <span class=\"chem\">t = 0.339</span>（及其後每 12.4 h）。</p>",
      // EN: <p>(a) <span class="chem">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span> (the shift is <span class="chem">3 + 5/3 = 4.667</span> h). (b) <span class="chem">t = 3.44</span> hours after midnight. (c) <b>2.21 m</b>.</p>
      answer: "<p>(a) <span class=\"chem\">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span>（平移量為 <span class=\"chem\">3 + 5/3 = 4.667</span> h）。(b) 午夜後 <span class=\"chem\">t = 3.44</span> 小時。(c) <b>2.21 m</b>。</p>",
      markscheme: [
        // EN: A1: Amplitude 1.2 × 2.4 = 2.88.
        "A1：振幅 1.2 × 2.4 = 2.88。",
        // EN: A1: Horizontal shift 3 + 1 h 40 min = 3 + 5/3 = 14/3 (4.67): d_B(t) = 2.88 cos((π/6.2)(t − 14/3)) + 5.
        "A1：水平平移 3 + 1 h 40 min = 3 + 5/3 = 14/3 (4.67)：d_B(t) = 2.88 cos((π/6.2)(t − 14/3)) + 5。",
        // EN: M1: Graph d_A and d_B (or d_A − d_B) for t ≥ 0 and find the first intersection.
        "M1：就 t ≥ 0 繪畫 d_A 及 d_B（或 d_A − d_B）的圖像，並求首個交點。",
        // EN: A1: t = 3.44 hours.
        "A1：t = 3.44 小時。",
        // EN: M1: Graph d_A − d_B and use the maximum feature.
        "M1：繪畫 d_A − d_B 的圖像並使用求最大值的功能。",
        // EN: A1: Largest value = 2.21 m.
        "A1：最大值 = 2.21 m。",
      ],
    },

    // ── t3-2-q039 · numeric · exam · SL · SL 3.7 · 4 marks
    "t3-2-q039": {
      // EN: <p>A lighthouse lamp is 500 m from a straight shoreline. The lamp turns at a constant rate, completing one revolution every 15 seconds. At <span class="chem">t = 0</span> the beam points at the point P on the shore nearest the lighthouse. For <span class="chem">0 &lt;= t &lt; 3.75</span>, the distance, in metres, of the spot of light on the shore from P after <span class="chem">t</span> seconds is <span class="chem">s(t) = 500 tan((2pi/15)t)</span>.</p><p>Find the time at which the spot of light is 1.2 km from P. Give your answer in seconds to 3 significant figures.</p>
      stem: "<p>一座燈塔的燈距離一條筆直的海岸線 500 m。燈以等速率旋轉，每 15 秒轉一圈。在 <span class=\"chem\">t = 0</span> 時，光束指向海岸上最接近燈塔的點 P。當 <span class=\"chem\">0 &lt;= t &lt; 3.75</span> 時，<span class=\"chem\">t</span> 秒後海岸上的光點與 P 的距離（以米為單位）為 <span class=\"chem\">s(t) = 500 tan((2pi/15)t)</span>。</p><p>求 (Find) 光點與 P 相距 1.2 km 的時刻，答案以秒為單位，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Use the same units: 1.2 km = 1200 m.
        "使用相同的單位：1.2 km = 1200 m。",
        // EN: Solve <span class="chem">500 tan((2pi/15)t) = 1200</span>, i.e. <span class="chem">tan((2pi/15)t) = 2.4</span>, with a GDC (radian mode).
        "用 GDC（弧度模式）解 <span class=\"chem\">500 tan((2pi/15)t) = 1200</span>，即 <span class=\"chem\">tan((2pi/15)t) = 2.4</span>。",
        // EN: The graph of <span class="chem">s(t)</span> has a vertical asymptote at <span class="chem">t = 3.75</span> (a quarter turn), so there is exactly one solution in <span class="chem">0 &lt;= t &lt; 3.75</span>.
        "<span class=\"chem\">s(t)</span> 的圖像在 <span class=\"chem\">t = 3.75</span>（轉四分之一圈）有一條垂直漸近線，所以在 <span class=\"chem\">0 &lt;= t &lt; 3.75</span> 內恰好有一個解。",
      ],
      // EN: <p><span class="chem">tan((2pi/15)t) = 1200/500 = 2.4</span>, so <span class="chem">(2pi/15)t = arctan 2.4 = 1.1760…</span> and <span class="chem">t = 15 × 1.1760…/(2pi) = 2.8075…</span>.</p><p>Answer: <b>2.81 s</b>.</p>
      solution: "<p><span class=\"chem\">tan((2pi/15)t) = 1200/500 = 2.4</span>，故 <span class=\"chem\">(2pi/15)t = arctan 2.4 = 1.1760…</span>，而 <span class=\"chem\">t = 15 × 1.1760…/(2pi) = 2.8075…</span>。</p><p>答案：<b>2.81 s</b>。</p>",
    },

    // ── t3-2-q040 · numeric · challenge · SL · SL 3.7, 3.8 · 4 marks
    "t3-2-q040": {
      // EN: <p>Find the number of real solutions of the equation <span class="chem">10 sin x = x</span>, where <span class="chem">x</span> is in radians.</p>
      stem: "<p>求 (Find) 方程 <span class=\"chem\">10 sin x = x</span> 的實數解的數目，其中 <span class=\"chem\">x</span> 以弧度為單位。</p>",
      hints: [
        // EN: Decode: no interval is given, so you must consider ALL real <span class="chem">x</span>, negative as well as positive. The question asks how many solutions, not what they are.
        "解碼：題目沒有給出區間，所以你必須考慮「所有」實數 <span class=\"chem\">x</span>，包括負數和正數。題目問的是有多少個解，而不是解是甚麼。",
        // EN: Since <span class="chem">-10 &lt;= 10 sin x &lt;= 10</span>, every solution satisfies <span class="chem">-10 &lt;= x &lt;= 10</span>. So you only need to graph <span class="chem">y = 10 sin x</span> and <span class="chem">y = x</span> on <span class="chem">[-10, 10]</span>.
        "由於 <span class=\"chem\">-10 &lt;= 10 sin x &lt;= 10</span>，每個解都滿足 <span class=\"chem\">-10 &lt;= x &lt;= 10</span>。所以你只需在 <span class=\"chem\">[-10, 10]</span> 繪畫 <span class=\"chem\">y = 10 sin x</span> 及 <span class=\"chem\">y = x</span> 的圖像。",
        // EN: Both sides are odd functions, so the solutions come in pairs <span class="chem">±x</span>, plus <span class="chem">x = 0</span>.
        "兩邊都是奇函數，所以解以 <span class=\"chem\">±x</span> 成對出現，另加 <span class=\"chem\">x = 0</span>。",
      ],
      // EN: <p><strong>Decoding:</strong> "real solutions" with no interval means all of ℝ; the bound <span class="chem">|10 sin x| &lt;= 10</span> limits the search to <span class="chem">-10 &lt;= x &lt;= 10</span>.</p><p>On <span class="chem">[0, 10]</span> the GDC gives <span class="chem">x = 0, 2.852, 7.068, 8.423</span>. By symmetry (both sides are odd) the negative solutions are <span class="chem">-2.852, -7.068, -8.423</span>.</p><p>Total: <b>7</b> solutions.</p>
      solution: "<p><strong>解碼：</strong>沒有給出區間的「實數解」指整個 ℝ；界限 <span class=\"chem\">|10 sin x| &lt;= 10</span> 把搜尋範圍限制在 <span class=\"chem\">-10 &lt;= x &lt;= 10</span>。</p><p>在 <span class=\"chem\">[0, 10]</span> 上，GDC 給出 <span class=\"chem\">x = 0, 2.852, 7.068, 8.423</span>。由對稱性（兩邊都是奇函數），負數解為 <span class=\"chem\">-2.852, -7.068, -8.423</span>。</p><p>合共：<b>7</b> 個解。</p>",
    },

    // ── t3-2-q041 · short · exam · AHL · AHL 3.9 · 6 marks
    "t3-2-q041": {
      // EN: <p>Let <span class="chem">f(x) = 2 arccos(x/3) - pi/2</span>.</p><p>(a) Write down the largest possible domain of <span class="chem">f</span>, and find the range of <span class="chem">f</span> for this domain. [2]</p><p>(b) Find the exact value of the <span class="chem">x</span>-intercept of the graph of <span class="chem">f</span>. [2]</p><p>(c) Solve <span class="chem">f(x) = x</span>. [2]</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 2 arccos(x/3) - pi/2</span>。</p><p>(a) 寫出 (Write down) <span class=\"chem\">f</span> 最大可能的定義域，並求 (find) 在此定義域下 <span class=\"chem\">f</span> 的值域。[2]</p><p>(b) 求 <span class=\"chem\">f</span> 的圖像的 <span class=\"chem\">x</span> 軸截距的準確值。[2]</p><p>(c) 解 (Solve) <span class=\"chem\">f(x) = x</span>。[2]</p>",
      hints: [
        // EN: The domain of <span class="chem">arccos u</span> is <span class="chem">-1 &lt;= u &lt;= 1</span> and its range is <span class="chem">0 &lt;= arccos u &lt;= pi</span>. Apply the stretch by 2 and the shift down by <span class="chem">pi/2</span>.
        "<span class=\"chem\">arccos u</span> 的定義域為 <span class=\"chem\">-1 &lt;= u &lt;= 1</span>，值域為 <span class=\"chem\">0 &lt;= arccos u &lt;= pi</span>。再應用乘以 2 的伸縮及向下平移 <span class=\"chem\">pi/2</span>。",
        // EN: For (b), set <span class="chem">f(x) = 0</span> and take cos of both sides.
        "對於 (b)，設 <span class=\"chem\">f(x) = 0</span>，並對兩邊取 cos。",
        // EN: For (c), <span class="chem">f</span> is decreasing and <span class="chem">y = x</span> is increasing, so there is exactly one intersection: find it on a GDC.
        "對於 (c)，<span class=\"chem\">f</span> 是遞減的而 <span class=\"chem\">y = x</span> 是遞增的，所以恰好有一個交點：在 GDC 上求出它。",
      ],
      // EN: <p>(a) Domain <span class="chem">-3 &lt;= x &lt;= 3</span>; range <span class="chem">-pi/2 &lt;= f(x) &lt;= 3pi/2</span>. (b) <span class="chem">arccos(x/3) = pi/4</span>, so <span class="chem">x = 3cos(pi/4) = 3sqrt(2)/2</span>. (c) <span class="chem">x = 0.936</span>.</p>
      answer: "<p>(a) 定義域 <span class=\"chem\">-3 &lt;= x &lt;= 3</span>；值域 <span class=\"chem\">-pi/2 &lt;= f(x) &lt;= 3pi/2</span>。(b) <span class=\"chem\">arccos(x/3) = pi/4</span>，故 <span class=\"chem\">x = 3cos(pi/4) = 3sqrt(2)/2</span>。(c) <span class=\"chem\">x = 0.936</span>。</p>",
      markscheme: [
        // EN: A1: Domain −3 ≤ x ≤ 3 (since −1 ≤ x/3 ≤ 1).
        "A1：定義域 −3 ≤ x ≤ 3（因為 −1 ≤ x/3 ≤ 1）。",
        // EN: A1: Range −π/2 ≤ f(x) ≤ 3π/2 (arccos takes values in [0, π]).
        "A1：值域 −π/2 ≤ f(x) ≤ 3π/2（arccos 的取值在 [0, π] 內）。",
        // EN: M1: f(x) = 0 gives arccos(x/3) = π/4.
        "M1：f(x) = 0 給出 arccos(x/3) = π/4。",
        // EN: A1: x = 3 cos(π/4) = 3√2/2.
        "A1：x = 3 cos(π/4) = 3√2/2。",
        // EN: M1: Graph y = f(x) and y = x on −3 ≤ x ≤ 3 and find the intersection.
        "M1：在 −3 ≤ x ≤ 3 繪畫 y = f(x) 及 y = x 的圖像，並求交點。",
        // EN: A1: x = 0.936.
        "A1：x = 0.936。",
      ],
    },

    // ── t3-2-q042 · numeric · foundation · SL · SL 3.5 · 3 marks
    "t3-2-q042": {
      // EN: <p>Find the exact value of <span class="chem">cos(7pi/4) × tan(4pi/3)</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">cos(7pi/4) × tan(4pi/3)</span> 的準確值。</p>",
      hints: [
        // EN: <span class="chem">7pi/4</span> is in quadrant IV (reference angle <span class="chem">pi/4</span>), where cos is positive. <span class="chem">4pi/3</span> is in quadrant III (reference angle <span class="chem">pi/3</span>), where tan is positive.
        "<span class=\"chem\">7pi/4</span> 位於第四象限（參考角 <span class=\"chem\">pi/4</span>），該處 cos 為正。<span class=\"chem\">4pi/3</span> 位於第三象限（參考角 <span class=\"chem\">pi/3</span>），該處 tan 為正。",
        // EN: <span class="chem">cos(7pi/4) = sqrt(2)/2</span> and <span class="chem">tan(4pi/3) = tan(pi/3) = sqrt(3)</span>.
        "<span class=\"chem\">cos(7pi/4) = sqrt(2)/2</span> 及 <span class=\"chem\">tan(4pi/3) = tan(pi/3) = sqrt(3)</span>。",
      ],
      // EN: <p><span class="chem">cos(7pi/4) = +cos(pi/4) = sqrt(2)/2</span>; <span class="chem">tan(4pi/3) = +tan(pi/3) = sqrt(3)</span>.</p><p>Product: <span class="chem">(sqrt(2)/2) × sqrt(3) =</span> <b><span class="chem">sqrt(6)/2</span></b>.</p>
      solution: "<p><span class=\"chem\">cos(7pi/4) = +cos(pi/4) = sqrt(2)/2</span>；<span class=\"chem\">tan(4pi/3) = +tan(pi/3) = sqrt(3)</span>。</p><p>乘積：<span class=\"chem\">(sqrt(2)/2) × sqrt(3) =</span> <b><span class=\"chem\">sqrt(6)/2</span></b>。</p>",
    },

    // ── t3-2-q043 · numeric · foundation · SL · SL 3.6 · 3 marks
    "t3-2-q043": {
      // EN: <p>The angle <span class="chem">theta</span> is obtuse and <span class="chem">sin theta = 5/13</span>. Find the exact value of <span class="chem">tan theta</span>.</p>
      stem: "<p>角 <span class=\"chem\">theta</span> 是鈍角，且 <span class=\"chem\">sin theta = 5/13</span>。求 (Find) <span class=\"chem\">tan theta</span> 的準確值。</p>",
      hints: [
        // EN: Use <span class="chem">cos^2 theta = 1 - sin^2 theta</span>. An obtuse angle is in quadrant II, where cosine is negative.
        "利用 <span class=\"chem\">cos^2 theta = 1 - sin^2 theta</span>。鈍角位於第二象限，該處餘弦為負。",
        // EN: <span class="chem">cos theta = -12/13</span>, then <span class="chem">tan theta = sin theta / cos theta</span>.
        "<span class=\"chem\">cos theta = -12/13</span>，然後 <span class=\"chem\">tan theta = sin theta / cos theta</span>。",
      ],
      // EN: <p><span class="chem">cos^2 theta = 1 - 25/169 = 144/169</span>, and <span class="chem">theta</span> is obtuse, so <span class="chem">cos theta = -12/13</span>.</p><p><span class="chem">tan theta = (5/13)/(-12/13) =</span> <b><span class="chem">-5/12</span></b>.</p>
      solution: "<p><span class=\"chem\">cos^2 theta = 1 - 25/169 = 144/169</span>，而 <span class=\"chem\">theta</span> 是鈍角，故 <span class=\"chem\">cos theta = -12/13</span>。</p><p><span class=\"chem\">tan theta = (5/13)/(-12/13) =</span> <b><span class=\"chem\">-5/12</span></b>。</p>",
    },

    // ── t3-2-q044 · mcq · foundation · SL · SL 3.7 · 2 marks
    "t3-2-q044": {
      // EN: <p>Consider the graph of <span class="chem">y = tan(x/2)</span> for <span class="chem">-2pi &lt; x &lt; 2pi</span>. Which option gives its period and the equations of its vertical asymptotes in this interval?</p>
      stem: "<p>考慮 <span class=\"chem\">y = tan(x/2)</span> 在 <span class=\"chem\">-2pi &lt; x &lt; 2pi</span> 的圖像。哪一個選項給出它的週期，以及它在此區間內的垂直漸近線的方程？</p>",
      options: [
        // EN: Period <span class="chem">2pi</span>; asymptotes <span class="chem">x = -pi</span> and <span class="chem">x = pi</span>
        "週期 <span class=\"chem\">2pi</span>；漸近線 <span class=\"chem\">x = -pi</span> 及 <span class=\"chem\">x = pi</span>",
        // EN: Period <span class="chem">pi/2</span>; asymptotes <span class="chem">x = -pi/4</span> and <span class="chem">x = pi/4</span>
        "週期 <span class=\"chem\">pi/2</span>；漸近線 <span class=\"chem\">x = -pi/4</span> 及 <span class=\"chem\">x = pi/4</span>",
        // EN: Period <span class="chem">4pi</span>; no asymptotes in this interval
        "週期 <span class=\"chem\">4pi</span>；在此區間內沒有漸近線",
        // EN: Period <span class="chem">2pi</span>; asymptotes <span class="chem">x = -pi/2</span> and <span class="chem">x = pi/2</span>
        "週期 <span class=\"chem\">2pi</span>；漸近線 <span class=\"chem\">x = -pi/2</span> 及 <span class=\"chem\">x = pi/2</span>",
      ],
      hints: [
        // EN: The basic graph <span class="chem">y = tan u</span> has period <span class="chem">pi</span> and asymptotes at <span class="chem">u = pi/2 + k pi</span>.
        "基本圖像 <span class=\"chem\">y = tan u</span> 的週期為 <span class=\"chem\">pi</span>，漸近線在 <span class=\"chem\">u = pi/2 + k pi</span>。",
        // EN: Put <span class="chem">u = x/2</span>: the asymptotes are where <span class="chem">x/2 = ±pi/2</span>.
        "設 <span class=\"chem\">u = x/2</span>：漸近線位於 <span class=\"chem\">x/2 = ±pi/2</span> 之處。",
      ],
      // EN: <p>Period of <span class="chem">tan(bx)</span> is <span class="chem">pi/b = pi/(1/2) = 2pi</span>. Asymptotes where <span class="chem">x/2 = pi/2 + k pi</span>, i.e. <span class="chem">x = pi + 2k pi</span>; in <span class="chem">(-2pi, 2pi)</span> these are <b><span class="chem">x = -pi</span> and <span class="chem">x = pi</span></b>.</p>
      solution: "<p><span class=\"chem\">tan(bx)</span> 的週期是 <span class=\"chem\">pi/b = pi/(1/2) = 2pi</span>。漸近線位於 <span class=\"chem\">x/2 = pi/2 + k pi</span>，即 <span class=\"chem\">x = pi + 2k pi</span>；在 <span class=\"chem\">(-2pi, 2pi)</span> 內為 <b><span class=\"chem\">x = -pi</span> 及 <span class=\"chem\">x = pi</span></b>。</p>",
      misconception: {
        // EN (option B): You multiplied the period π by 1/2. A horizontal stretch by factor 2 (x/2 inside) doubles the period: π ÷ (1/2) = 2π.
        "1": "你把週期 π 乘以了 1/2。水平方向以因子 2 伸縮（括號內是 x/2）會使週期加倍：π ÷ (1/2) = 2π。",
        // EN (option C): The period of tan(bx) is π/b, not 2π/b: tan repeats every π, unlike sin and cos.
        "2": "tan(bx) 的週期是 π/b，不是 2π/b：與 sin 和 cos 不同，tan 每隔 π 便重複。",
        // EN (option D): These are the asymptotes of y = tan x. For tan(x/2) the asymptotes are where x/2 = ±π/2, that is x = ±π.
        "3": "這些是 y = tan x 的漸近線。對於 tan(x/2)，漸近線位於 x/2 = ±π/2 之處，即 x = ±π。",
      },
    },

    // ── t3-2-q045 · short · exam · SL · SL 3.6, 3.8 · 6 marks
    "t3-2-q045": {
      // EN: <p>(a) Show that the equation <span class="chem">cos 2x + 3 sin x = 2</span> can be written as <span class="chem">2 sin^2 x - 3 sin x + 1 = 0</span>. [2]</p><p>(b) Hence solve <span class="chem">cos 2x + 3 sin x = 2</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>. [4]</p>
      stem: "<p>(a) 證明 (Show that) 方程 <span class=\"chem\">cos 2x + 3 sin x = 2</span> 可寫成 <span class=\"chem\">2 sin^2 x - 3 sin x + 1 = 0</span>。[2]</p><p>(b) 由此 (Hence) 解 <span class=\"chem\">cos 2x + 3 sin x = 2</span>，其中 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>。[4]</p>",
      hints: [
        // EN: The equation contains <span class="chem">sin x</span>, so pick the form of <span class="chem">cos 2x</span> that uses only <span class="chem">sin x</span>.
        "方程含有 <span class=\"chem\">sin x</span>，所以選用只含 <span class=\"chem\">sin x</span> 的 <span class=\"chem\">cos 2x</span> 形式。",
        // EN: The quadratic factorises. <span class="chem">sin x = 1/2</span> has two solutions in <span class="chem">[0, 2pi]</span>, but <span class="chem">sin x = 1</span> has only one.
        "這個二次方程可以因式分解。<span class=\"chem\">sin x = 1/2</span> 在 <span class=\"chem\">[0, 2pi]</span> 內有兩個解，但 <span class=\"chem\">sin x = 1</span> 只有一個。",
      ],
      // EN: <p>(a) <span class="chem">1 - 2 sin^2 x + 3 sin x = 2</span>, so <span class="chem">2 sin^2 x - 3 sin x + 1 = 0</span>. (b) <span class="chem">(2 sin x - 1)(sin x - 1) = 0</span>, so <span class="chem">sin x = 1/2</span> or <span class="chem">sin x = 1</span>: <span class="chem">x = pi/6, pi/2, 5pi/6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">1 - 2 sin^2 x + 3 sin x = 2</span>，故 <span class=\"chem\">2 sin^2 x - 3 sin x + 1 = 0</span>。(b) <span class=\"chem\">(2 sin x - 1)(sin x - 1) = 0</span>，故 <span class=\"chem\">sin x = 1/2</span> 或 <span class=\"chem\">sin x = 1</span>：<span class=\"chem\">x = pi/6, pi/2, 5pi/6</span>。</p>",
      markscheme: [
        // EN: M1: Use cos 2x = 1 − 2 sin²x (the form that matches sin x).
        "M1：利用 cos 2x = 1 − 2 sin²x（與 sin x 配合的形式）。",
        // EN: A1: 1 − 2 sin²x + 3 sin x − 2 = 0, so 2 sin²x − 3 sin x + 1 = 0 (AG).
        "A1：1 − 2 sin²x + 3 sin x − 2 = 0，故 2 sin²x − 3 sin x + 1 = 0 (AG)。",
        // EN: M1: Factorise: (2 sin x − 1)(sin x − 1) = 0.
        "M1：因式分解：(2 sin x − 1)(sin x − 1) = 0。",
        // EN: A1: sin x = 1/2 or sin x = 1.
        "A1：sin x = 1/2 或 sin x = 1。",
        // EN: A1: x = π/6, 5π/6.
        "A1：x = π/6, 5π/6。",
        // EN: A1: x = π/2.
        "A1：x = π/2。",
      ],
    },

    // ── t3-2-q046 · numeric · exam · SL · SL 3.5, 3.6 · 4 marks
    "t3-2-q046": {
      // EN: <p>Given that <span class="chem">tan theta = -2</span> and <span class="chem">3pi/2 &lt; theta &lt; 2pi</span>, find the exact value of <span class="chem">cos 2theta</span>.</p>
      stem: "<p>已知 <span class=\"chem\">tan theta = -2</span> 及 <span class=\"chem\">3pi/2 &lt; theta &lt; 2pi</span>，求 (find) <span class=\"chem\">cos 2theta</span> 的準確值。</p>",
      hints: [
        // EN: Draw a right-angled triangle with opposite 2 and adjacent 1: the hypotenuse is <span class="chem">sqrt(5)</span>. In quadrant IV, cos is positive and sin is negative.
        "畫一個對邊為 2、鄰邊為 1 的直角三角形：斜邊為 <span class=\"chem\">sqrt(5)</span>。在第四象限，cos 為正而 sin 為負。",
        // EN: <span class="chem">cos theta = 1/sqrt(5)</span>, <span class="chem">sin theta = -2/sqrt(5)</span>. Then use <span class="chem">cos 2theta = cos^2 theta - sin^2 theta</span>.
        "<span class=\"chem\">cos theta = 1/sqrt(5)</span>，<span class=\"chem\">sin theta = -2/sqrt(5)</span>。然後利用 <span class=\"chem\">cos 2theta = cos^2 theta - sin^2 theta</span>。",
      ],
      // EN: <p>In quadrant IV: <span class="chem">cos theta = 1/sqrt(5)</span>, <span class="chem">sin theta = -2/sqrt(5)</span>.</p><p><span class="chem">cos 2theta = cos^2 theta - sin^2 theta = 1/5 - 4/5 =</span> <b><span class="chem">-3/5</span></b>. (The sign of <span class="chem">sin theta</span> does not matter here, because it is squared.)</p>
      solution: "<p>在第四象限：<span class=\"chem\">cos theta = 1/sqrt(5)</span>，<span class=\"chem\">sin theta = -2/sqrt(5)</span>。</p><p><span class=\"chem\">cos 2theta = cos^2 theta - sin^2 theta = 1/5 - 4/5 =</span> <b><span class=\"chem\">-3/5</span></b>。（這裏 <span class=\"chem\">sin theta</span> 的符號不影響結果，因為它被平方。）</p>",
    },

    // ── t3-2-q047 · short · exam · SL · SL 3.7, 3.8 · 9 marks
    "t3-2-q047": {
      // EN: <p>The function <span class="chem">f(x) = a sin(b(x - c)) + d</span>, where <span class="chem">a, b &gt; 0</span> and <span class="chem">-pi/2 &lt; c &lt; 0</span>, has a maximum point at <span class="chem">(pi/8, 7)</span>. The next minimum point to the right is <span class="chem">(5pi/8, -1)</span>.</p><p>(a) Write down the value of <span class="chem">a</span> and the value of <span class="chem">d</span>. [2]</p><p>(b) Find the value of <span class="chem">b</span>. [2]</p><p>(c) Find the value of <span class="chem">c</span>. [1]</p><p>(d) Solve <span class="chem">f(x) = 5</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. [4]</p>
      stem: "<p>函數 <span class=\"chem\">f(x) = a sin(b(x - c)) + d</span>（其中 <span class=\"chem\">a, b &gt; 0</span> 及 <span class=\"chem\">-pi/2 &lt; c &lt; 0</span>）有一個極大點 <span class=\"chem\">(pi/8, 7)</span>。其右方的下一個極小點為 <span class=\"chem\">(5pi/8, -1)</span>。</p><p>(a) 寫出 (Write down) <span class=\"chem\">a</span> 的值及 <span class=\"chem\">d</span> 的值。[2]</p><p>(b) 求 (Find) <span class=\"chem\">b</span> 的值。[2]</p><p>(c) 求 <span class=\"chem\">c</span> 的值。[1]</p><p>(d) 解 (Solve) <span class=\"chem\">f(x) = 5</span>，其中 <span class=\"chem\">0 &lt;= x &lt;= pi</span>。[4]</p>",
      hints: [
        // EN: Amplitude = half the distance from max to min; the principal axis is halfway between them. From a maximum to the next minimum is half a period.
        "振幅 = 由最大值到最小值距離的一半；主軸在兩者正中。由一個極大點到下一個極小點是半個週期。",
        // EN: A positive sine reaches its maximum when the bracket equals <span class="chem">pi/2</span>: solve <span class="chem">b(pi/8 - c) = pi/2</span>.
        "正的正弦函數在括號內等於 <span class=\"chem\">pi/2</span> 時達到最大值：解 <span class=\"chem\">b(pi/8 - c) = pi/2</span>。",
        // EN: For (d), let <span class="chem">u = 2x + pi/4</span> and change the interval before you solve <span class="chem">sin u = 1/2</span>.
        "對於 (d)，設 <span class=\"chem\">u = 2x + pi/4</span>，並在解 <span class=\"chem\">sin u = 1/2</span> 之前先變換區間。",
      ],
      // EN: <p>(a) <span class="chem">a = 4</span>, <span class="chem">d = 3</span>. (b) Period <span class="chem">= 2(5pi/8 - pi/8) = pi</span>, so <span class="chem">b = 2</span>. (c) <span class="chem">2(pi/8 - c) = pi/2</span>, so <span class="chem">c = -pi/8</span>. (d) <span class="chem">sin(2x + pi/4) = 1/2</span> with <span class="chem">pi/4 &lt;= 2x + pi/4 &lt;= 9pi/4</span>: <span class="chem">2x + pi/4 = 5pi/6, 13pi/6</span>, so <span class="chem">x = 7pi/24, 23pi/24</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 4</span>，<span class=\"chem\">d = 3</span>。(b) 週期 <span class=\"chem\">= 2(5pi/8 - pi/8) = pi</span>，故 <span class=\"chem\">b = 2</span>。(c) <span class=\"chem\">2(pi/8 - c) = pi/2</span>，故 <span class=\"chem\">c = -pi/8</span>。(d) <span class=\"chem\">sin(2x + pi/4) = 1/2</span>，其中 <span class=\"chem\">pi/4 &lt;= 2x + pi/4 &lt;= 9pi/4</span>：<span class=\"chem\">2x + pi/4 = 5pi/6, 13pi/6</span>，故 <span class=\"chem\">x = 7pi/24, 23pi/24</span>。</p>",
      markscheme: [
        // EN: A1: a = (7 − (−1))/2 = 4.
        "A1：a = (7 − (−1))/2 = 4。",
        // EN: A1: d = (7 + (−1))/2 = 3.
        "A1：d = (7 + (−1))/2 = 3。",
        // EN: M1: Half-period = 5π/8 − π/8 = π/2, so the period is π.
        "M1：半週期 = 5π/8 − π/8 = π/2，故週期為 π。",
        // EN: A1: b = 2π/π = 2.
        "A1：b = 2π/π = 2。",
        // EN: A1: Maximum where 2(x − c) = π/2 at x = π/8, so c = π/8 − π/4 = −π/8.
        "A1：在 x = π/8 時 2(x − c) = π/2 取得最大值，故 c = π/8 − π/4 = −π/8。",
        // EN: M1: 4 sin(2x + π/4) + 3 = 5 gives sin(2x + π/4) = 1/2.
        "M1：4 sin(2x + π/4) + 3 = 5 給出 sin(2x + π/4) = 1/2。",
        // EN: M1: Transform the interval: π/4 ≤ 2x + π/4 ≤ 9π/4.
        "M1：變換區間：π/4 ≤ 2x + π/4 ≤ 9π/4。",
        // EN: A1: 2x + π/4 = 5π/6 or 13π/6 (π/6 is outside the interval).
        "A1：2x + π/4 = 5π/6 或 13π/6（π/6 在區間以外）。",
        // EN: A1: x = 7π/24, 23π/24.
        "A1：x = 7π/24, 23π/24。",
      ],
    },

    // ── t3-2-q048 · numeric · exam · SL · SL 3.8 · 4 marks
    "t3-2-q048": {
      // EN: <p>Find the number of solutions of the equation <span class="chem">2 sin^2 x = sin x</span> in the interval <span class="chem">-pi &lt;= x &lt;= pi</span>.</p>
      stem: "<p>求 (Find) 方程 <span class=\"chem\">2 sin^2 x = sin x</span> 在區間 <span class=\"chem\">-pi &lt;= x &lt;= pi</span> 內的解的數目。</p>",
      hints: [
        // EN: Do not divide by <span class="chem">sin x</span>: you would lose the solutions with <span class="chem">sin x = 0</span>. Rearrange and factorise instead.
        "不要除以 <span class=\"chem\">sin x</span>：這樣會失去 <span class=\"chem\">sin x = 0</span> 的解。應該移項並因式分解。",
        // EN: <span class="chem">sin x (2 sin x - 1) = 0</span>. Count the solutions of <span class="chem">sin x = 0</span> on <span class="chem">[-pi, pi]</span> (include both end points) and of <span class="chem">sin x = 1/2</span>.
        "<span class=\"chem\">sin x (2 sin x - 1) = 0</span>。數出 <span class=\"chem\">sin x = 0</span> 在 <span class=\"chem\">[-pi, pi]</span> 上的解（包括兩個端點）及 <span class=\"chem\">sin x = 1/2</span> 的解。",
      ],
      // EN: <p><span class="chem">sin x (2 sin x - 1) = 0</span>.</p><p><span class="chem">sin x = 0</span>: <span class="chem">x = -pi, 0, pi</span> (3 solutions). <span class="chem">sin x = 1/2</span>: <span class="chem">x = pi/6, 5pi/6</span> (2 solutions; none in <span class="chem">[-pi, 0)</span>, where sin is not positive).</p><p>Total: <b>5</b>.</p>
      solution: "<p><span class=\"chem\">sin x (2 sin x - 1) = 0</span>。</p><p><span class=\"chem\">sin x = 0</span>：<span class=\"chem\">x = -pi, 0, pi</span>（3 個解）。<span class=\"chem\">sin x = 1/2</span>：<span class=\"chem\">x = pi/6, 5pi/6</span>（2 個解；在 <span class=\"chem\">[-pi, 0)</span> 內沒有，因為該處 sin 不是正數）。</p><p>合共：<b>5</b>。</p>",
    },

    // ── t3-2-q049 · numeric · exam · AHL · AHL 3.10, SL 3.6 · 5 marks
    "t3-2-q049": {
      // EN: <p>The angle <span class="chem">A</span> is acute with <span class="chem">sin A = 3/5</span>, and the angle <span class="chem">B</span> is obtuse with <span class="chem">cos B = -12/13</span>. Find the exact value of <span class="chem">sin(A - B)</span>.</p>
      stem: "<p>角 <span class=\"chem\">A</span> 是銳角且 <span class=\"chem\">sin A = 3/5</span>，角 <span class=\"chem\">B</span> 是鈍角且 <span class=\"chem\">cos B = -12/13</span>。求 (Find) <span class=\"chem\">sin(A - B)</span> 的準確值。</p>",
      hints: [
        // EN: Find the missing ratios with <span class="chem">sin^2 + cos^2 = 1</span>: A is acute, so <span class="chem">cos A &gt; 0</span>; B is obtuse, so <span class="chem">sin B &gt; 0</span>.
        "用 <span class=\"chem\">sin^2 + cos^2 = 1</span> 求出欠缺的三角比：A 是銳角，所以 <span class=\"chem\">cos A &gt; 0</span>；B 是鈍角，所以 <span class=\"chem\">sin B &gt; 0</span>。",
        // EN: <span class="chem">cos A = 4/5</span>, <span class="chem">sin B = 5/13</span>. Then <span class="chem">sin(A - B) = sin A cos B - cos A sin B</span>.
        "<span class=\"chem\">cos A = 4/5</span>，<span class=\"chem\">sin B = 5/13</span>。然後 <span class=\"chem\">sin(A - B) = sin A cos B - cos A sin B</span>。",
      ],
      // EN: <p><span class="chem">cos A = 4/5</span>, <span class="chem">sin B = 5/13</span>.</p><p><span class="chem">sin(A - B) = (3/5)(-12/13) - (4/5)(5/13) = -36/65 - 20/65 =</span> <b><span class="chem">-56/65</span></b>.</p>
      solution: "<p><span class=\"chem\">cos A = 4/5</span>，<span class=\"chem\">sin B = 5/13</span>。</p><p><span class=\"chem\">sin(A - B) = (3/5)(-12/13) - (4/5)(5/13) = -36/65 - 20/65 =</span> <b><span class=\"chem\">-56/65</span></b>。</p>",
    },

    // ── t3-2-q050 · short · challenge · AHL · AHL 3.10 · 10 marks
    "t3-2-q050": {
      // EN: <p>(a) Show that <span class="chem">tan 3theta = (3t - t^3)/(1 - 3t^2)</span>, where <span class="chem">t = tan theta</span>. [3]</p><p>(b) Show that if <span class="chem">tan 3theta = 1</span>, then <span class="chem">t = tan theta</span> satisfies <span class="chem">t^3 - 3t^2 - 3t + 1 = 0</span>. [1]</p><p>(c) By considering the solutions of <span class="chem">tan 3theta = 1</span> for <span class="chem">0 &lt; theta &lt; pi</span>, or otherwise, find the exact value of <span class="chem">tan(pi/12)</span>. Give your answer in the form <span class="chem">p + q sqrt(3)</span>, where <span class="chem">p, q in Z</span>. [6]</p>
      stem: "<p>(a) 證明 (Show that) <span class=\"chem\">tan 3theta = (3t - t^3)/(1 - 3t^2)</span>，其中 <span class=\"chem\">t = tan theta</span>。[3]</p><p>(b) 證明若 <span class=\"chem\">tan 3theta = 1</span>，則 <span class=\"chem\">t = tan theta</span> 滿足 <span class=\"chem\">t^3 - 3t^2 - 3t + 1 = 0</span>。[1]</p><p>(c) 考慮 <span class=\"chem\">tan 3theta = 1</span> 在 <span class=\"chem\">0 &lt; theta &lt; pi</span> 的解，或用其他方法，求 (find) <span class=\"chem\">tan(pi/12)</span> 的準確值。答案以 <span class=\"chem\">p + q sqrt(3)</span> 的形式表示，其中 <span class=\"chem\">p, q in Z</span>。[6]</p>",
      hints: [
        // EN: Decode: part (c) hides an exact value inside a cubic. The three angles with <span class="chem">tan 3theta = 1</span> give the three roots of the cubic, and one root is an angle you know.
        "解碼：(c) 把一個準確值藏在三次方程裏。使 <span class=\"chem\">tan 3theta = 1</span> 的三個角給出三次方程的三個根，而其中一個根對應你熟悉的角。",
        // EN: For (a), write <span class="chem">3theta = 2theta + theta</span> and use <span class="chem">tan(A + B)</span> with <span class="chem">tan 2theta = 2t/(1 - t^2)</span>.
        "對於 (a)，寫成 <span class=\"chem\">3theta = 2theta + theta</span>，並利用 <span class=\"chem\">tan(A + B)</span> 及 <span class=\"chem\">tan 2theta = 2t/(1 - t^2)</span>。",
        // EN: For (c), <span class="chem">3theta = pi/4 + k pi</span>. One of the three angles is <span class="chem">3pi/4</span>, whose tangent is <span class="chem">-1</span>: use it to factorise the cubic.
        "對於 (c)，<span class=\"chem\">3theta = pi/4 + k pi</span>。三個角之一是 <span class=\"chem\">3pi/4</span>，其正切為 <span class=\"chem\">-1</span>：用它來把三次方程因式分解。",
        // EN: Of the roots <span class="chem">2 - sqrt(3)</span> and <span class="chem">2 + sqrt(3)</span>, which belongs to the smaller angle <span class="chem">pi/12</span>?
        "在根 <span class=\"chem\">2 - sqrt(3)</span> 與 <span class=\"chem\">2 + sqrt(3)</span> 之中，哪一個屬於較小的角 <span class=\"chem\">pi/12</span>？",
      ],
      // EN: <p><strong>Decoding:</strong> the cubic in (b) is the equation <span class="chem">tan 3theta = 1</span> written in terms of <span class="chem">t</span>. Its roots are the tangents of the three angles that solve <span class="chem">tan 3theta = 1</span>, so one root (<span class="chem">tan(3pi/4) = -1</span>) is known and lets you factorise.</p><p><span class="chem">(t + 1)(t^2 - 4t + 1) = 0</span> gives <span class="chem">t = -1, 2 ± sqrt(3)</span>. Since <span class="chem">tan</span> increases on <span class="chem">(0, pi/2)</span>, <span class="chem">tan(pi/12) = 2 - sqrt(3)</span> and <span class="chem">tan(5pi/12) = 2 + sqrt(3)</span>.</p>
      solution: "<p><strong>解碼：</strong>(b) 中的三次方程就是用 <span class=\"chem\">t</span> 表示的方程 <span class=\"chem\">tan 3theta = 1</span>。它的根是滿足 <span class=\"chem\">tan 3theta = 1</span> 的三個角的正切，所以其中一個根（<span class=\"chem\">tan(3pi/4) = -1</span>）是已知的，可用來因式分解。</p><p><span class=\"chem\">(t + 1)(t^2 - 4t + 1) = 0</span> 給出 <span class=\"chem\">t = -1, 2 ± sqrt(3)</span>。由於 <span class=\"chem\">tan</span> 在 <span class=\"chem\">(0, pi/2)</span> 上遞增，<span class=\"chem\">tan(pi/12) = 2 - sqrt(3)</span> 而 <span class=\"chem\">tan(5pi/12) = 2 + sqrt(3)</span>。</p>",
      // EN: <p>(a) <span class="chem">tan(2theta + theta) = (2t/(1 - t^2) + t)/(1 - 2t^2/(1 - t^2)) = (3t - t^3)/(1 - 3t^2)</span>. (b) <span class="chem">3t - t^3 = 1 - 3t^2</span> rearranges to <span class="chem">t^3 - 3t^2 - 3t + 1 = 0</span>. (c) <span class="chem">3theta = pi/4, 5pi/4, 9pi/4</span>, so <span class="chem">theta = pi/12, 5pi/12, 3pi/4</span>: the cubic has roots <span class="chem">tan(pi/12), tan(5pi/12), -1</span>. Factorising, <span class="chem">(t + 1)(t^2 - 4t + 1) = 0</span>, so the other roots are <span class="chem">2 ± sqrt(3)</span>. <span class="chem">tan(pi/12)</span> is the smaller positive root: <span class="chem">tan(pi/12) = 2 - sqrt(3)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">tan(2theta + theta) = (2t/(1 - t^2) + t)/(1 - 2t^2/(1 - t^2)) = (3t - t^3)/(1 - 3t^2)</span>。(b) <span class=\"chem\">3t - t^3 = 1 - 3t^2</span> 移項整理得 <span class=\"chem\">t^3 - 3t^2 - 3t + 1 = 0</span>。(c) <span class=\"chem\">3theta = pi/4, 5pi/4, 9pi/4</span>，故 <span class=\"chem\">theta = pi/12, 5pi/12, 3pi/4</span>：三次方程的根為 <span class=\"chem\">tan(pi/12), tan(5pi/12), -1</span>。因式分解得 <span class=\"chem\">(t + 1)(t^2 - 4t + 1) = 0</span>，所以另外兩個根為 <span class=\"chem\">2 ± sqrt(3)</span>。<span class=\"chem\">tan(pi/12)</span> 是較小的正根：<span class=\"chem\">tan(pi/12) = 2 - sqrt(3)</span>。</p>",
      markscheme: [
        // EN: M1: Write tan 3θ = tan(2θ + θ) = (tan 2θ + tan θ)/(1 − tan 2θ tan θ).
        "M1：寫出 tan 3θ = tan(2θ + θ) = (tan 2θ + tan θ)/(1 − tan 2θ tan θ)。",
        // EN: M1: Substitute tan 2θ = 2t/(1 − t²).
        "M1：代入 tan 2θ = 2t/(1 − t²)。",
        // EN: A1: Multiply top and bottom by (1 − t²): (2t + t − t³)/(1 − t² − 2t²) = (3t − t³)/(1 − 3t²) (AG).
        "A1：分子分母同乘 (1 − t²)：(2t + t − t³)/(1 − t² − 2t²) = (3t − t³)/(1 − 3t²) (AG)。",
        // EN: A1: 3t − t³ = 1 − 3t², so t³ − 3t² − 3t + 1 = 0 (AG).
        "A1：3t − t³ = 1 − 3t²，故 t³ − 3t² − 3t + 1 = 0 (AG)。",
        // EN: M1: 3θ = π/4 + kπ with 0 < 3θ < 3π.
        "M1：3θ = π/4 + kπ，其中 0 < 3θ < 3π。",
        // EN: A1: θ = π/12, 5π/12, 3π/4, so the three roots are tan(π/12), tan(5π/12) and tan(3π/4) = −1.
        "A1：θ = π/12, 5π/12, 3π/4，故三個根為 tan(π/12)、tan(5π/12) 及 tan(3π/4) = −1。",
        // EN: M1: t = −1 is a root, so (t + 1) is a factor: t³ − 3t² − 3t + 1 = (t + 1)(t² − 4t + 1).
        "M1：t = −1 是一個根，所以 (t + 1) 是一個因式：t³ − 3t² − 3t + 1 = (t + 1)(t² − 4t + 1)。",
        // EN: A1: t² − 4t + 1 = 0 gives t = 2 ± √3.
        "A1：t² − 4t + 1 = 0 給出 t = 2 ± √3。",
        // EN: R1: 0 < π/12 < 5π/12 < π/2 and tan is increasing there, so tan(π/12) is the smaller root.
        "R1：0 < π/12 < 5π/12 < π/2，而 tan 在此區間遞增，故 tan(π/12) 是較小的根。",
        // EN: A1: tan(π/12) = 2 − √3.
        "A1：tan(π/12) = 2 − √3。",
      ],
    },

    // ── t3-2-q051 · short · exam · AHL · AHL 3.9, SL 3.8 · 5 marks
    "t3-2-q051": {
      // EN: <p>(a) Show that <span class="chem">sec theta - cos theta = sin theta tan theta</span>, for <span class="chem">cos theta != 0</span>. [2]</p><p>(b) Hence solve <span class="chem">sec theta - cos theta = sqrt(3) sin theta</span> for <span class="chem">0 &lt;= theta &lt;= 2pi</span>. [3]</p>
      stem: "<p>(a) 證明 (Show that) 當 <span class=\"chem\">cos theta != 0</span> 時，<span class=\"chem\">sec theta - cos theta = sin theta tan theta</span>。[2]</p><p>(b) 由此 (Hence) 解 <span class=\"chem\">sec theta - cos theta = sqrt(3) sin theta</span>，其中 <span class=\"chem\">0 &lt;= theta &lt;= 2pi</span>。[3]</p>",
      hints: [
        // EN: Write <span class="chem">sec theta = 1/cos theta</span> and use a common denominator.
        "寫成 <span class=\"chem\">sec theta = 1/cos theta</span>，並通分母。",
        // EN: In (b), move everything to one side and factor out <span class="chem">sin theta</span>. None of the solutions makes <span class="chem">cos theta = 0</span>, so all are valid.
        "在 (b) 中，把所有項移到一邊並抽出公因式 <span class=\"chem\">sin theta</span>。沒有任何解使 <span class=\"chem\">cos theta = 0</span>，所以全部解都有效。",
      ],
      // EN: <p>(a) <span class="chem">sec theta - cos theta = (1 - cos^2 theta)/cos theta = sin^2 theta / cos theta = sin theta tan theta</span>. (b) <span class="chem">sin theta (tan theta - sqrt(3)) = 0</span>: <span class="chem">theta = 0, pi, 2pi</span> or <span class="chem">theta = pi/3, 4pi/3</span>.</p>
      answer: "<p>(a) <span class=\"chem\">sec theta - cos theta = (1 - cos^2 theta)/cos theta = sin^2 theta / cos theta = sin theta tan theta</span>。(b) <span class=\"chem\">sin theta (tan theta - sqrt(3)) = 0</span>：<span class=\"chem\">theta = 0, pi, 2pi</span> 或 <span class=\"chem\">theta = pi/3, 4pi/3</span>。</p>",
      markscheme: [
        // EN: M1: Write sec θ − cos θ = 1/cos θ − cos θ = (1 − cos²θ)/cos θ.
        "M1：寫出 sec θ − cos θ = 1/cos θ − cos θ = (1 − cos²θ)/cos θ。",
        // EN: A1: = sin²θ/cos θ = sin θ · (sin θ/cos θ) = sin θ tan θ (AG).
        "A1：= sin²θ/cos θ = sin θ · (sin θ/cos θ) = sin θ tan θ (AG)。",
        // EN: M1: sin θ tan θ − √3 sin θ = 0, so sin θ (tan θ − √3) = 0 (do not divide by sin θ).
        "M1：sin θ tan θ − √3 sin θ = 0，故 sin θ (tan θ − √3) = 0（不要除以 sin θ）。",
        // EN: A1: sin θ = 0: θ = 0, π, 2π.
        "A1：sin θ = 0：θ = 0, π, 2π。",
        // EN: A1: tan θ = √3: θ = π/3, 4π/3.
        "A1：tan θ = √3：θ = π/3, 4π/3。",
      ],
    },

    // ── t3-2-q052 · numeric · challenge · AHL · AHL 3.9, 3.11 · 4 marks
    "t3-2-q052": {
      // EN: <p>Find the largest value of <span class="chem">k</span>, where <span class="chem">0 &lt; k &lt; 2</span>, such that <span class="chem">tan(k pi) = cot(pi/9)</span>.</p>
      stem: "<p>求 (Find) 使 <span class=\"chem\">tan(k pi) = cot(pi/9)</span> 成立的 <span class=\"chem\">k</span> 的最大值，其中 <span class=\"chem\">0 &lt; k &lt; 2</span>。</p>",
      hints: [
        // EN: Decode: rewrite <span class="chem">cot(pi/9)</span> as a tangent of some angle using a symmetry of the graphs, then use the period of tan to find EVERY <span class="chem">k</span> in the interval; the question wants the largest.
        "解碼：利用圖像的對稱性把 <span class=\"chem\">cot(pi/9)</span> 改寫成某個角的正切，再利用 tan 的週期找出區間內的「每一個」<span class=\"chem\">k</span>；題目要求的是最大的一個。",
        // EN: <span class="chem">cot theta = tan(pi/2 - theta)</span>, so <span class="chem">cot(pi/9) = tan(7pi/18)</span>.
        "<span class=\"chem\">cot theta = tan(pi/2 - theta)</span>，故 <span class=\"chem\">cot(pi/9) = tan(7pi/18)</span>。",
        // EN: tan has period <span class="chem">pi</span>: <span class="chem">k pi = 7pi/18 + n pi</span>. Which values of <span class="chem">n</span> keep <span class="chem">0 &lt; k &lt; 2</span>?
        "tan 的週期為 <span class=\"chem\">pi</span>：<span class=\"chem\">k pi = 7pi/18 + n pi</span>。哪些 <span class=\"chem\">n</span> 值能使 <span class=\"chem\">0 &lt; k &lt; 2</span> 成立？",
      ],
      // EN: <p><strong>Decoding:</strong> the symmetry <span class="chem">cot theta = tan(pi/2 - theta)</span> turns the right-hand side into a tangent, and the hidden condition "largest" means you must use the period <span class="chem">pi</span> of tan.</p><p><span class="chem">cot(pi/9) = tan(pi/2 - pi/9) = tan(7pi/18)</span>, so <span class="chem">k pi = 7pi/18 + n pi</span>, <span class="chem">k = 7/18 + n</span>. In <span class="chem">0 &lt; k &lt; 2</span>: <span class="chem">k = 7/18</span> or <span class="chem">25/18</span>.</p><p>Largest: <b><span class="chem">k = 25/18</span></b>.</p>
      solution: "<p><strong>解碼：</strong>對稱關係 <span class=\"chem\">cot theta = tan(pi/2 - theta)</span> 把右方變成正切，而隱藏條件「最大」表示你必須利用 tan 的週期 <span class=\"chem\">pi</span>。</p><p><span class=\"chem\">cot(pi/9) = tan(pi/2 - pi/9) = tan(7pi/18)</span>，故 <span class=\"chem\">k pi = 7pi/18 + n pi</span>，<span class=\"chem\">k = 7/18 + n</span>。在 <span class=\"chem\">0 &lt; k &lt; 2</span> 內：<span class=\"chem\">k = 7/18</span> 或 <span class=\"chem\">25/18</span>。</p><p>最大：<b><span class=\"chem\">k = 25/18</span></b>。</p>",
    },

    // ── t3-2-q053 · short · challenge · SL · SL 3.5, 3.6 · 8 marks
    "t3-2-q053": {
      // EN: <p>The angle <span class="chem">theta</span> satisfies <span class="chem">0 &lt; theta &lt; pi</span> and <span class="chem">sin theta + cos theta = 1/5</span>.</p><p>(a) Find the exact value of <span class="chem">sin 2theta</span>. [2]</p><p>(b) Explain why <span class="chem">pi/2 &lt; theta &lt; pi</span>, and hence find the exact value of <span class="chem">cos theta - sin theta</span>. [3]</p><p>(c) Hence find the exact value of <span class="chem">cos 2theta</span>. [3]</p>
      stem: "<p>角 <span class=\"chem\">theta</span> 滿足 <span class=\"chem\">0 &lt; theta &lt; pi</span> 及 <span class=\"chem\">sin theta + cos theta = 1/5</span>。</p><p>(a) 求 (Find) <span class=\"chem\">sin 2theta</span> 的準確值。[2]</p><p>(b) 解釋 (Explain) 為何 <span class=\"chem\">pi/2 &lt; theta &lt; pi</span>，並由此 (hence) 求 <span class=\"chem\">cos theta - sin theta</span> 的準確值。[3]</p><p>(c) 由此求 <span class=\"chem\">cos 2theta</span> 的準確值。[3]</p>",
      hints: [
        // EN: Decode: you are never asked for <span class="chem">theta</span> itself. Squaring a sum of sin and cos produces <span class="chem">sin^2 + cos^2 = 1</span> and the double-angle term <span class="chem">2 sin theta cos theta = sin 2theta</span>.
        "解碼：題目從來沒有要求 <span class=\"chem\">theta</span> 本身。把 sin 與 cos 之和平方，會產生 <span class=\"chem\">sin^2 + cos^2 = 1</span> 及二倍角項 <span class=\"chem\">2 sin theta cos theta = sin 2theta</span>。",
        // EN: Square <span class="chem">sin theta + cos theta = 1/5</span>.
        "把 <span class=\"chem\">sin theta + cos theta = 1/5</span> 平方。",
        // EN: For (b), the sign of <span class="chem">sin 2theta</span> tells you the signs of sin and cos. Square <span class="chem">cos theta - sin theta</span> in the same way, then pick the correct sign of the square root.
        "對於 (b)，<span class=\"chem\">sin 2theta</span> 的符號告訴你 sin 和 cos 的符號。用同樣方法把 <span class=\"chem\">cos theta - sin theta</span> 平方，再選取平方根的正確符號。",
        // EN: For (c), factorise <span class="chem">cos^2 theta - sin^2 theta</span> as a difference of two squares.
        "對於 (c)，把 <span class=\"chem\">cos^2 theta - sin^2 theta</span> 以平方差因式分解。",
      ],
      // EN: <p><strong>Decoding:</strong> "find sin 2θ from sin θ + cos θ" is a squaring trick, and the sign of a square root is decided by the quadrant, which you must justify from the data.</p><p>(a) <span class="chem">sin 2theta = 1/25 - 1 = -24/25</span>. (b) <span class="chem">theta</span> obtuse; <span class="chem">cos theta - sin theta = -7/5</span>. (c) <span class="chem">cos 2theta = -7/25</span>. (Check: <span class="chem">sin theta = 4/5</span>, <span class="chem">cos theta = -3/5</span>.)</p>
      solution: "<p><strong>解碼：</strong>「由 sin θ + cos θ 求 sin 2θ」是平方的技巧，而平方根的符號由象限決定，你必須根據已知資料加以說明。</p><p>(a) <span class=\"chem\">sin 2theta = 1/25 - 1 = -24/25</span>。(b) <span class=\"chem\">theta</span> 是鈍角；<span class=\"chem\">cos theta - sin theta = -7/5</span>。(c) <span class=\"chem\">cos 2theta = -7/25</span>。（檢查：<span class=\"chem\">sin theta = 4/5</span>，<span class=\"chem\">cos theta = -3/5</span>。）</p>",
      // EN: <p>(a) Squaring: <span class="chem">1 + sin 2theta = 1/25</span>, so <span class="chem">sin 2theta = -24/25</span>. (b) <span class="chem">2 sin theta cos theta &lt; 0</span>, and <span class="chem">sin theta &gt; 0</span> on <span class="chem">(0, pi)</span>, so <span class="chem">cos theta &lt; 0</span>: <span class="chem">theta</span> is obtuse. <span class="chem">(cos theta - sin theta)^2 = 1 - sin 2theta = 49/25</span> and <span class="chem">cos theta - sin theta &lt; 0</span>, so it equals <span class="chem">-7/5</span>. (c) <span class="chem">cos 2theta = (cos theta - sin theta)(cos theta + sin theta) = (-7/5)(1/5) = -7/25</span>.</p>
      answer: "<p>(a) 平方：<span class=\"chem\">1 + sin 2theta = 1/25</span>，故 <span class=\"chem\">sin 2theta = -24/25</span>。(b) <span class=\"chem\">2 sin theta cos theta &lt; 0</span>，而在 <span class=\"chem\">(0, pi)</span> 上 <span class=\"chem\">sin theta &gt; 0</span>，故 <span class=\"chem\">cos theta &lt; 0</span>：<span class=\"chem\">theta</span> 是鈍角。<span class=\"chem\">(cos theta - sin theta)^2 = 1 - sin 2theta = 49/25</span>，且 <span class=\"chem\">cos theta - sin theta &lt; 0</span>，所以它等於 <span class=\"chem\">-7/5</span>。(c) <span class=\"chem\">cos 2theta = (cos theta - sin theta)(cos theta + sin theta) = (-7/5)(1/5) = -7/25</span>。</p>",
      markscheme: [
        // EN: M1: Square both sides: sin²θ + 2 sin θ cos θ + cos²θ = 1/25.
        "M1：兩邊平方：sin²θ + 2 sin θ cos θ + cos²θ = 1/25。",
        // EN: A1: 1 + sin 2θ = 1/25, so sin 2θ = −24/25.
        "A1：1 + sin 2θ = 1/25，故 sin 2θ = −24/25。",
        // EN: R1: sin 2θ = 2 sin θ cos θ < 0 and sin θ > 0 for 0 < θ < π, so cos θ < 0 and π/2 < θ < π.
        "R1：sin 2θ = 2 sin θ cos θ < 0，且 sin θ > 0（當 0 < θ < π），故 cos θ < 0 及 π/2 < θ < π。",
        // EN: M1: (cos θ − sin θ)² = 1 − 2 sin θ cos θ = 1 − sin 2θ = 49/25.
        "M1：(cos θ − sin θ)² = 1 − 2 sin θ cos θ = 1 − sin 2θ = 49/25。",
        // EN: A1: cos θ < 0 < sin θ, so cos θ − sin θ = −7/5.
        "A1：cos θ < 0 < sin θ，故 cos θ − sin θ = −7/5。",
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
      stem: "<p>設 <span class=\"chem\">f(x) = 5 sin(2x - pi/3) + 1</span>，其中 <span class=\"chem\">x &gt; 0</span>。求 (Find) 使 <span class=\"chem\">f</span> 取得最大值的最小 <span class=\"chem\">x</span> 的準確值。</p>",
      hints: [
        // EN: A sine function with positive amplitude is largest when its bracket equals <span class="chem">pi/2 + 2k pi</span>.
        "振幅為正的正弦函數，在括號內等於 <span class=\"chem\">pi/2 + 2k pi</span> 時取得最大值。",
        // EN: Solve <span class="chem">2x - pi/3 = pi/2</span>, and check that no smaller positive <span class="chem">x</span> works (the bracket value <span class="chem">pi/2 - 2pi</span> gives a negative <span class="chem">x</span>).
        "解 <span class=\"chem\">2x - pi/3 = pi/2</span>，並檢查沒有更小的正數 <span class=\"chem\">x</span> 符合（括號值 <span class=\"chem\">pi/2 - 2pi</span> 給出負數 <span class=\"chem\">x</span>）。",
      ],
      // EN: <p>Maximum (value 6) when <span class="chem">2x - pi/3 = pi/2 + 2k pi</span>. With <span class="chem">k = 0</span>: <span class="chem">2x = 5pi/6</span>, <span class="chem">x = 5pi/12</span>. With <span class="chem">k = -1</span>, <span class="chem">x = -7pi/12 &lt; 0</span>.</p><p>Answer: <b><span class="chem">x = 5pi/12</span></b>.</p>
      solution: "<p>當 <span class=\"chem\">2x - pi/3 = pi/2 + 2k pi</span> 時取得最大值（值為 6）。取 <span class=\"chem\">k = 0</span>：<span class=\"chem\">2x = 5pi/6</span>，<span class=\"chem\">x = 5pi/12</span>。取 <span class=\"chem\">k = -1</span>，<span class=\"chem\">x = -7pi/12 &lt; 0</span>。</p><p>答案：<b><span class=\"chem\">x = 5pi/12</span></b>。</p>",
    },

    // ── t3-2-q055 · numeric · challenge · AHL · AHL 3.11, SL 3.8 · 6 marks
    "t3-2-q055": {
      // EN: <p>Find the number of solutions of the equation <span class="chem">sin 3x = cos x</span> in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>
      stem: "<p>求 (Find) 方程 <span class=\"chem\">sin 3x = cos x</span> 在區間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> 內的解的數目。</p>",
      hints: [
        // EN: Decode: this is not a quadratic in disguise. Turn the right-hand side into a sine with the symmetry <span class="chem">cos x = sin(pi/2 - x)</span>, so the equation becomes <span class="chem">sin A = sin B</span>.
        "解碼：這不是偽裝的二次方程。利用對稱關係 <span class=\"chem\">cos x = sin(pi/2 - x)</span> 把右方變成正弦，使方程變成 <span class=\"chem\">sin A = sin B</span>。",
        // EN: <span class="chem">sin A = sin B</span> when <span class="chem">A = B + 2k pi</span> or <span class="chem">A = pi - B + 2k pi</span> (because <span class="chem">sin(pi - theta) = sin theta</span>).
        "當 <span class=\"chem\">A = B + 2k pi</span> 或 <span class=\"chem\">A = pi - B + 2k pi</span> 時 <span class=\"chem\">sin A = sin B</span>（因為 <span class=\"chem\">sin(pi - theta) = sin theta</span>）。",
        // EN: The two families are <span class="chem">x = pi/8 + k pi/2</span> and <span class="chem">x = pi/4 + k pi</span>. List those in <span class="chem">[0, 2pi]</span> and check for repeats.
        "兩組解為 <span class=\"chem\">x = pi/8 + k pi/2</span> 及 <span class=\"chem\">x = pi/4 + k pi</span>。列出在 <span class=\"chem\">[0, 2pi]</span> 內的解，並檢查有沒有重複。",
      ],
      // EN: <p><strong>Decoding:</strong> use the symmetry identities to write both sides as the same function, then solve <span class="chem">sin A = sin B</span>.</p><p><span class="chem">sin 3x = sin(pi/2 - x)</span>.</p><p>Case 1: <span class="chem">3x = pi/2 - x + 2k pi</span>, so <span class="chem">x = pi/8 + k pi/2</span>: <span class="chem">pi/8, 5pi/8, 9pi/8, 13pi/8</span>.</p><p>Case 2: <span class="chem">3x = pi - (pi/2 - x) + 2k pi</span>, so <span class="chem">x = pi/4 + k pi</span>: <span class="chem">pi/4, 5pi/4</span>.</p><p>No value appears twice: <b>6</b> solutions.</p>
      solution: "<p><strong>解碼：</strong>利用對稱恒等式把兩邊寫成同一個函數，再解 <span class=\"chem\">sin A = sin B</span>。</p><p><span class=\"chem\">sin 3x = sin(pi/2 - x)</span>。</p><p>情況 1：<span class=\"chem\">3x = pi/2 - x + 2k pi</span>，故 <span class=\"chem\">x = pi/8 + k pi/2</span>：<span class=\"chem\">pi/8, 5pi/8, 9pi/8, 13pi/8</span>。</p><p>情況 2：<span class=\"chem\">3x = pi - (pi/2 - x) + 2k pi</span>，故 <span class=\"chem\">x = pi/4 + k pi</span>：<span class=\"chem\">pi/4, 5pi/4</span>。</p><p>沒有值重複出現：共 <b>6</b> 個解。</p>",
    },

    // ── t3-2-q056 · short · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q056": {
      // EN: <p>(a) Show that <span class="chem">cos^4 x - sin^4 x = cos 2x</span>. [2]</p><p>(b) Hence solve <span class="chem">cos^4 x - sin^4 x = 1/2</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. [3]</p>
      stem: "<p>(a) 證明 (Show that) <span class=\"chem\">cos^4 x - sin^4 x = cos 2x</span>。[2]</p><p>(b) 由此 (Hence) 解 <span class=\"chem\">cos^4 x - sin^4 x = 1/2</span>，其中 <span class=\"chem\">0 &lt;= x &lt;= pi</span>。[3]</p>",
      hints: [
        // EN: <span class="chem">cos^4 x - sin^4 x</span> is a difference of two squares: <span class="chem">(cos^2 x)^2 - (sin^2 x)^2</span>.
        "<span class=\"chem\">cos^4 x - sin^4 x</span> 是平方差：<span class=\"chem\">(cos^2 x)^2 - (sin^2 x)^2</span>。",
        // EN: In (b), double the interval before you solve <span class="chem">cos 2x = 1/2</span>.
        "在 (b) 中，解 <span class=\"chem\">cos 2x = 1/2</span> 之前先把區間加倍。",
      ],
      // EN: <p>(a) <span class="chem">cos^4 x - sin^4 x = (cos^2 x - sin^2 x)(cos^2 x + sin^2 x) = cos 2x × 1 = cos 2x</span>. (b) <span class="chem">cos 2x = 1/2</span> with <span class="chem">0 &lt;= 2x &lt;= 2pi</span>: <span class="chem">2x = pi/3, 5pi/3</span>, so <span class="chem">x = pi/6, 5pi/6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">cos^4 x - sin^4 x = (cos^2 x - sin^2 x)(cos^2 x + sin^2 x) = cos 2x × 1 = cos 2x</span>。(b) <span class=\"chem\">cos 2x = 1/2</span>，其中 <span class=\"chem\">0 &lt;= 2x &lt;= 2pi</span>：<span class=\"chem\">2x = pi/3, 5pi/3</span>，故 <span class=\"chem\">x = pi/6, 5pi/6</span>。</p>",
      markscheme: [
        // EN: M1: Factorise as a difference of squares: (cos²x − sin²x)(cos²x + sin²x).
        "M1：以平方差因式分解：(cos²x − sin²x)(cos²x + sin²x)。",
        // EN: A1: Use cos²x + sin²x = 1 and cos²x − sin²x = cos 2x to get cos 2x (AG).
        "A1：利用 cos²x + sin²x = 1 及 cos²x − sin²x = cos 2x 得 cos 2x (AG)。",
        // EN: M1: cos 2x = 1/2 with the interval changed to 0 ≤ 2x ≤ 2π.
        "M1：cos 2x = 1/2，並把區間變換為 0 ≤ 2x ≤ 2π。",
        // EN: A1: 2x = π/3, 5π/3.
        "A1：2x = π/3, 5π/3。",
        // EN: A1: x = π/6, 5π/6.
        "A1：x = π/6, 5π/6。",
      ],
    },

    // ── t3-2-q057 · short · challenge · AHL · AHL 3.9, 3.10 · 18 marks
    "t3-2-q057": {
      // EN: <p>This investigation looks at the sums <span class="chem">S_n = arctan(1/3) + arctan(1/7) + arctan(1/13) + … + arctan(1/(n^2 + n + 1))</span>, where <span class="chem">n in Z^+</span>. So <span class="chem">S_1 = arctan(1/3)</span>, <span class="chem">S_2 = arctan(1/3) + arctan(1/7)</span>, and so on.</p><p>(a) Use your GDC to find <span class="chem">S_1, S_2, S_3, S_4</span> in radians, and in each case find <span class="chem">tan(S_n)</span>, written as a fraction. [4]</p><p>(b) Conjecture an expression for <span class="chem">tan(S_n)</span> in terms of <span class="chem">n</span>. [1]</p><p>(c) Use the identity for <span class="chem">tan(A - B)</span> to show that, for <span class="chem">k in Z^+</span>, <span class="chem">arctan(1/k) - arctan(1/(k + 1)) = arctan(1/(k^2 + k + 1))</span>. [4]</p><p>(d) Hence show that <span class="chem">S_n = pi/4 - arctan(1/(n + 1))</span>. [3]</p><p>(e) Hence prove your conjecture from part (b). [3]</p><p>(f) Write down the limit of <span class="chem">S_n</span> as <span class="chem">n -&gt; infty</span>. [1]</p><p>(g) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 0.78</span>. [2]</p>
      stem: "<p>本探究研究以下的和：<span class=\"chem\">S_n = arctan(1/3) + arctan(1/7) + arctan(1/13) + … + arctan(1/(n^2 + n + 1))</span>，其中 <span class=\"chem\">n in Z^+</span>。所以 <span class=\"chem\">S_1 = arctan(1/3)</span>，<span class=\"chem\">S_2 = arctan(1/3) + arctan(1/7)</span>，如此類推。</p><p>(a) 利用 GDC 求 (find) <span class=\"chem\">S_1, S_2, S_3, S_4</span>（以弧度表示），並在每種情況下求 <span class=\"chem\">tan(S_n)</span>，以分數表示。[4]</p><p>(b) 以 <span class=\"chem\">n</span> 猜想 (Conjecture) <span class=\"chem\">tan(S_n)</span> 的表達式。[1]</p><p>(c) 利用 <span class=\"chem\">tan(A - B)</span> 的恒等式證明 (show that) 對於 <span class=\"chem\">k in Z^+</span>，<span class=\"chem\">arctan(1/k) - arctan(1/(k + 1)) = arctan(1/(k^2 + k + 1))</span>。[4]</p><p>(d) 由此 (Hence) 證明 <span class=\"chem\">S_n = pi/4 - arctan(1/(n + 1))</span>。[3]</p><p>(e) 由此證明 (prove) 你在 (b) 的猜想。[3]</p><p>(f) 寫出 (Write down) 當 <span class=\"chem\">n -&gt; infty</span> 時 <span class=\"chem\">S_n</span> 的極限。[1]</p><p>(g) 求使 <span class=\"chem\">S_n &gt; 0.78</span> 的 <span class=\"chem\">n</span> 的最小值。[2]</p>",
      hints: [
        // EN: Decode: this is "compute small cases, spot a pattern, prove it". The tool for the proof is <span class="chem">tan(A - B)</span> from the booklet, which turns a difference of two arctans into one arctan. Then the sum collapses (telescopes).
        "解碼：這是「計算簡單情況、找出規律、加以證明」的題目。證明的工具是公式手冊中的 <span class=\"chem\">tan(A - B)</span>，它把兩個 arctan 之差變成一個 arctan。然後這個和會裂項相消。",
        // EN: In (a), use the fraction feature of your GDC on <span class="chem">tan(S_n)</span>. Look at the pattern <span class="chem">1/3, 2/4, 3/5, 4/6</span>.
        "在 (a) 中，對 <span class=\"chem\">tan(S_n)</span> 使用 GDC 的分數功能。觀察規律 <span class=\"chem\">1/3, 2/4, 3/5, 4/6</span>。",
        // EN: In (c), after you find <span class="chem">tan(A - B)</span> you still need a reason why <span class="chem">A - B</span> is in the range of arctan.
        "在 (c) 中，求出 <span class=\"chem\">tan(A - B)</span> 之後，你仍需要說明為何 <span class=\"chem\">A - B</span> 在 arctan 的值域之內。",
        // EN: In (g), <span class="chem">S_n &gt; 0.78</span> is equivalent to <span class="chem">tan S_n &gt; tan 0.78 = 0.98926…</span>; solve <span class="chem">n/(n + 2) &gt; 0.98926…</span> for <span class="chem">n</span>.
        "在 (g) 中，<span class=\"chem\">S_n &gt; 0.78</span> 等價於 <span class=\"chem\">tan S_n &gt; tan 0.78 = 0.98926…</span>；就 <span class=\"chem\">n</span> 解 <span class=\"chem\">n/(n + 2) &gt; 0.98926…</span>。",
      ],
      // EN: <p><strong>Decoding:</strong> the investigation is about a telescoping sum. Each term <span class="chem">arctan(1/(k^2 + k + 1))</span> is secretly a difference <span class="chem">arctan(1/k) - arctan(1/(k + 1))</span> (part (c)), so almost everything cancels.</p><p>(g) <span class="chem">n/(n + 2) &gt; 0.989261…</span> ⇔ <span class="chem">n(1 - 0.989261…) &gt; 2(0.989261…)</span> ⇔ <span class="chem">n &gt; 184.25</span>. Check: <span class="chem">S_184 = 0.779993…</span>, <span class="chem">S_185 = 0.780022…</span>. So <b>n = 185</b>.</p>
      solution: "<p><strong>解碼：</strong>本探究關於一個裂項相消的和。每一項 <span class=\"chem\">arctan(1/(k^2 + k + 1))</span> 其實是一個差 <span class=\"chem\">arctan(1/k) - arctan(1/(k + 1))</span>（(c) 部分），所以幾乎所有項都會相消。</p><p>(g) <span class=\"chem\">n/(n + 2) &gt; 0.989261…</span> ⇔ <span class=\"chem\">n(1 - 0.989261…) &gt; 2(0.989261…)</span> ⇔ <span class=\"chem\">n &gt; 184.25</span>。檢查：<span class=\"chem\">S_184 = 0.779993…</span>，<span class=\"chem\">S_185 = 0.780022…</span>。故 <b>n = 185</b>。</p>",
      // EN: <p>(a) <span class="chem">S_1 = 0.322</span>, <span class="chem">tan S_1 = 1/3</span>; <span class="chem">S_2 = 0.464</span>, <span class="chem">tan S_2 = 1/2</span>; <span class="chem">S_3 = 0.540</span>, <span class="chem">tan S_3 = 3/5</span>; <span class="chem">S_4 = 0.588</span>, <span class="chem">tan S_4 = 2/3 = 4/6</span>. (b) <span class="chem">tan(S_n) = n/(n + 2)</span>. (c) With <span class="chem">A = arctan(1/k)</span>, <span class="chem">B = arctan(1/(k + 1))</span>: <span class="chem">tan(A - B) = (1/k - 1/(k + 1))/(1 + 1/(k(k + 1))) = 1/(k^2 + k + 1)</span>, and <span class="chem">0 &lt; A - B &lt; pi/2</span>. (d) The sum telescopes: <span class="chem">S_n = arctan 1 - arctan(1/(n + 1)) = pi/4 - arctan(1/(n + 1))</span>. (e) <span class="chem">tan(S_n) = (1 - 1/(n + 1))/(1 + 1/(n + 1)) = n/(n + 2)</span>. (f) <span class="chem">pi/4</span>. (g) <span class="chem">n/(n + 2) &gt; tan 0.78</span> gives <span class="chem">n &gt; 184.2</span>, so <span class="chem">n = 185</span>.</p>
      answer: "<p>(a) <span class=\"chem\">S_1 = 0.322</span>，<span class=\"chem\">tan S_1 = 1/3</span>；<span class=\"chem\">S_2 = 0.464</span>，<span class=\"chem\">tan S_2 = 1/2</span>；<span class=\"chem\">S_3 = 0.540</span>，<span class=\"chem\">tan S_3 = 3/5</span>；<span class=\"chem\">S_4 = 0.588</span>，<span class=\"chem\">tan S_4 = 2/3 = 4/6</span>。(b) <span class=\"chem\">tan(S_n) = n/(n + 2)</span>。(c) 設 <span class=\"chem\">A = arctan(1/k)</span>，<span class=\"chem\">B = arctan(1/(k + 1))</span>：<span class=\"chem\">tan(A - B) = (1/k - 1/(k + 1))/(1 + 1/(k(k + 1))) = 1/(k^2 + k + 1)</span>，且 <span class=\"chem\">0 &lt; A - B &lt; pi/2</span>。(d) 這個和裂項相消：<span class=\"chem\">S_n = arctan 1 - arctan(1/(n + 1)) = pi/4 - arctan(1/(n + 1))</span>。(e) <span class=\"chem\">tan(S_n) = (1 - 1/(n + 1))/(1 + 1/(n + 1)) = n/(n + 2)</span>。(f) <span class=\"chem\">pi/4</span>。(g) <span class=\"chem\">n/(n + 2) &gt; tan 0.78</span> 給出 <span class=\"chem\">n &gt; 184.2</span>，故 <span class=\"chem\">n = 185</span>。</p>",
      markscheme: [
        // EN: A1: S₁ = 0.322, tan S₁ = 1/3.
        "A1：S₁ = 0.322，tan S₁ = 1/3。",
        // EN: A1: S₂ = 0.464, tan S₂ = 1/2.
        "A1：S₂ = 0.464，tan S₂ = 1/2。",
        // EN: A1: S₃ = 0.540, tan S₃ = 3/5.
        "A1：S₃ = 0.540，tan S₃ = 3/5。",
        // EN: A1: S₄ = 0.588, tan S₄ = 2/3 (= 4/6).
        "A1：S₄ = 0.588，tan S₄ = 2/3 (= 4/6)。",
        // EN: A1: Conjecture tan(S_n) = n/(n + 2).
        "A1：猜想 tan(S_n) = n/(n + 2)。",
        // EN: M1: Let A = arctan(1/k), B = arctan(1/(k + 1)) and write tan(A − B) = (1/k − 1/(k + 1))/(1 + 1/(k(k + 1))).
        "M1：設 A = arctan(1/k)，B = arctan(1/(k + 1))，並寫出 tan(A − B) = (1/k − 1/(k + 1))/(1 + 1/(k(k + 1)))。",
        // EN: A1: Numerator = 1/(k(k + 1)), denominator = (k(k + 1) + 1)/(k(k + 1)).
        "A1：分子 = 1/(k(k + 1))，分母 = (k(k + 1) + 1)/(k(k + 1))。",
        // EN: A1: tan(A − B) = 1/(k² + k + 1).
        "A1：tan(A − B) = 1/(k² + k + 1)。",
        // EN: R1: 0 < B < A ≤ π/4, so 0 < A − B < π/2, the range of arctan; hence A − B = arctan(1/(k² + k + 1)) (AG).
        "R1：0 < B < A ≤ π/4，故 0 < A − B < π/2，即在 arctan 的值域內；因此 A − B = arctan(1/(k² + k + 1)) (AG)。",
        // EN: M1: Write S_n as a sum of the differences arctan(1/k) − arctan(1/(k + 1)) for k = 1, …, n.
        "M1：把 S_n 寫成差 arctan(1/k) − arctan(1/(k + 1)) 對 k = 1, …, n 之和。",
        // EN: A1: All middle terms cancel (telescoping), leaving arctan(1) − arctan(1/(n + 1)).
        "A1：所有中間項相消（裂項相消），剩下 arctan(1) − arctan(1/(n + 1))。",
        // EN: A1: arctan 1 = π/4, so S_n = π/4 − arctan(1/(n + 1)) (AG).
        "A1：arctan 1 = π/4，故 S_n = π/4 − arctan(1/(n + 1)) (AG)。",
        // EN: M1: tan(π/4 − B) = (1 − tan B)/(1 + tan B) with tan B = 1/(n + 1).
        "M1：tan(π/4 − B) = (1 − tan B)/(1 + tan B)，其中 tan B = 1/(n + 1)。",
        // EN: A1: = (n/(n + 1)) / ((n + 2)/(n + 1)).
        "A1：= (n/(n + 1)) / ((n + 2)/(n + 1))。",
        // EN: A1: = n/(n + 2), which proves the conjecture.
        "A1：= n/(n + 2)，從而證明了猜想。",
        // EN: A1: S_n → π/4 (since arctan(1/(n + 1)) → 0).
        "A1：S_n → π/4（因為 arctan(1/(n + 1)) → 0）。",
        // EN: M1: S_n > 0.78 ⇔ n/(n + 2) > tan 0.78 (tan is increasing on (0, π/2)), giving n > 184.2.
        "M1：S_n > 0.78 ⇔ n/(n + 2) > tan 0.78（tan 在 (0, π/2) 上遞增），得 n > 184.2。",
        // EN: A1: n = 185.
        "A1：n = 185。",
      ],
    },

    // ── t3-2-q058 · short · challenge · AHL · AHL 3.10, SL 3.6 · 18 marks
    "t3-2-q058": {
      // EN: <p>This investigation looks at how <span class="chem">cos n theta</span> can be written as a polynomial in <span class="chem">c = cos theta</span>.</p><p>(a) Write down <span class="chem">cos 2theta</span> in terms of <span class="chem">c</span>. [1]</p><p>(b) By writing <span class="chem">3theta = 2theta + theta</span>, show that <span class="chem">cos 3theta = 4c^3 - 3c</span>. [3]</p><p>(c) Show that <span class="chem">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span>. [3]</p><p>(d) Hence find <span class="chem">cos 4theta</span> and <span class="chem">cos 5theta</span> as polynomials in <span class="chem">c</span>. [4]</p><p>(e) Conjecture the coefficient of <span class="chem">c^n</span> in the polynomial for <span class="chem">cos n theta</span>, for <span class="chem">n &gt;= 1</span>, and give a reason for your conjecture. [2]</p><p>(f) By letting <span class="chem">x = cos theta</span>, where <span class="chem">0 &lt;= theta &lt;= pi</span>, solve <span class="chem">8x^4 - 8x^2 + 1 = 0</span>. Hence find the exact value of <span class="chem">cos(pi/8)</span>. [5]</p>
      stem: "<p>本探究研究如何把 <span class=\"chem\">cos n theta</span> 寫成關於 <span class=\"chem\">c = cos theta</span> 的多項式。</p><p>(a) 以 <span class=\"chem\">c</span> 寫出 (Write down) <span class=\"chem\">cos 2theta</span>。[1]</p><p>(b) 透過寫成 <span class=\"chem\">3theta = 2theta + theta</span>，證明 (show that) <span class=\"chem\">cos 3theta = 4c^3 - 3c</span>。[3]</p><p>(c) 證明 <span class=\"chem\">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span>。[3]</p><p>(d) 由此 (Hence) 求 <span class=\"chem\">cos 4theta</span> 及 <span class=\"chem\">cos 5theta</span>，以關於 <span class=\"chem\">c</span> 的多項式表示。[4]</p><p>(e) 對於 <span class=\"chem\">n &gt;= 1</span>，猜想 (Conjecture) <span class=\"chem\">cos n theta</span> 的多項式中 <span class=\"chem\">c^n</span> 的係數，並給出你的猜想的理由。[2]</p><p>(f) 設 <span class=\"chem\">x = cos theta</span>，其中 <span class=\"chem\">0 &lt;= theta &lt;= pi</span>，解 (solve) <span class=\"chem\">8x^4 - 8x^2 + 1 = 0</span>。由此求 <span class=\"chem\">cos(pi/8)</span> 的準確值。[5]</p>",
      hints: [
        // EN: Decode: build a pattern from small cases (n = 2, 3), find a rule that produces the next case from the previous two (part (c)), then use the polynomial for <span class="chem">n = 4</span> backwards to get exact values.
        "解碼：由簡單情況（n = 2, 3）建立規律，找出一條由前兩個情況得出下一個情況的規則（(c) 部分），然後把 <span class=\"chem\">n = 4</span> 的多項式倒過來使用，以求出準確值。",
        // EN: In (b), use <span class="chem">cos(A + B)</span>, <span class="chem">sin 2theta = 2 sin theta cos theta</span> and <span class="chem">sin^2 theta = 1 - c^2</span>.
        "在 (b) 中，利用 <span class=\"chem\">cos(A + B)</span>、<span class=\"chem\">sin 2theta = 2 sin theta cos theta</span> 及 <span class=\"chem\">sin^2 theta = 1 - c^2</span>。",
        // EN: In (d), rearrange (c) as <span class="chem">cos((n + 1)theta) = 2c cos(n theta) - cos((n - 1)theta)</span>.
        "在 (d) 中，把 (c) 改寫成 <span class=\"chem\">cos((n + 1)theta) = 2c cos(n theta) - cos((n - 1)theta)</span>。",
        // EN: In (f), <span class="chem">8x^4 - 8x^2 + 1</span> is exactly <span class="chem">cos 4theta</span>. Which angles in <span class="chem">[0, pi]</span> make <span class="chem">cos 4theta = 0</span>?
        "在 (f) 中，<span class=\"chem\">8x^4 - 8x^2 + 1</span> 正是 <span class=\"chem\">cos 4theta</span>。<span class=\"chem\">[0, pi]</span> 內哪些角使 <span class=\"chem\">cos 4theta = 0</span>？",
      ],
      // EN: <p><strong>Decoding:</strong> the polynomial in (f) is the <span class="chem">cos 4theta</span> polynomial from (d), so solving it is the same as solving <span class="chem">cos 4theta = 0</span>; comparing with the algebraic roots gives an exact value.</p><p>(f) <span class="chem">x^2 = (2 ± sqrt(2))/4</span> gives <span class="chem">x = ± sqrt(2 ± sqrt(2))/2</span>. The largest, <span class="chem">sqrt(2 + sqrt(2))/2 = 0.92388…</span>, matches <span class="chem">cos(pi/8) = 0.92388…</span>.</p>
      solution: "<p><strong>解碼：</strong>(f) 中的多項式就是 (d) 中 <span class=\"chem\">cos 4theta</span> 的多項式，所以解它等同於解 <span class=\"chem\">cos 4theta = 0</span>；與代數方法求得的根比較，便得出準確值。</p><p>(f) <span class=\"chem\">x^2 = (2 ± sqrt(2))/4</span> 給出 <span class=\"chem\">x = ± sqrt(2 ± sqrt(2))/2</span>。最大的根 <span class=\"chem\">sqrt(2 + sqrt(2))/2 = 0.92388…</span> 與 <span class=\"chem\">cos(pi/8) = 0.92388…</span> 相符。</p>",
      // EN: <p>(a) <span class="chem">2c^2 - 1</span>. (b) <span class="chem">cos 3theta = cos 2theta cos theta - sin 2theta sin theta = (2c^2 - 1)c - 2(1 - c^2)c = 4c^3 - 3c</span>. (c) Expanding, the <span class="chem">sin(n theta) sin theta</span> terms cancel, leaving <span class="chem">2 cos(n theta) cos theta</span>. (d) <span class="chem">cos 4theta = 2c(4c^3 - 3c) - (2c^2 - 1) = 8c^4 - 8c^2 + 1</span>; <span class="chem">cos 5theta = 2c(8c^4 - 8c^2 + 1) - (4c^3 - 3c) = 16c^5 - 20c^3 + 5c</span>. (e) <span class="chem">2^{n-1}</span>: each step of the recurrence multiplies the leading term by <span class="chem">2c</span>. (f) <span class="chem">cos 4theta = 0</span> gives <span class="chem">theta = pi/8, 3pi/8, 5pi/8, 7pi/8</span>, so <span class="chem">x = cos(pi/8), cos(3pi/8), cos(5pi/8), cos(7pi/8)</span>. As a quadratic in <span class="chem">x^2</span>: <span class="chem">x^2 = (2 ± sqrt(2))/4</span>. The largest root is <span class="chem">cos(pi/8) = sqrt(2 + sqrt(2))/2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2c^2 - 1</span>。(b) <span class=\"chem\">cos 3theta = cos 2theta cos theta - sin 2theta sin theta = (2c^2 - 1)c - 2(1 - c^2)c = 4c^3 - 3c</span>。(c) 展開後，<span class=\"chem\">sin(n theta) sin theta</span> 項相消，剩下 <span class=\"chem\">2 cos(n theta) cos theta</span>。(d) <span class=\"chem\">cos 4theta = 2c(4c^3 - 3c) - (2c^2 - 1) = 8c^4 - 8c^2 + 1</span>；<span class=\"chem\">cos 5theta = 2c(8c^4 - 8c^2 + 1) - (4c^3 - 3c) = 16c^5 - 20c^3 + 5c</span>。(e) <span class=\"chem\">2^{n-1}</span>：遞推關係的每一步都把首項乘以 <span class=\"chem\">2c</span>。(f) <span class=\"chem\">cos 4theta = 0</span> 給出 <span class=\"chem\">theta = pi/8, 3pi/8, 5pi/8, 7pi/8</span>，故 <span class=\"chem\">x = cos(pi/8), cos(3pi/8), cos(5pi/8), cos(7pi/8)</span>。作為關於 <span class=\"chem\">x^2</span> 的二次方程：<span class=\"chem\">x^2 = (2 ± sqrt(2))/4</span>。最大的根是 <span class=\"chem\">cos(pi/8) = sqrt(2 + sqrt(2))/2</span>。</p>",
      markscheme: [
        // EN: A1: cos 2θ = 2c² − 1.
        "A1：cos 2θ = 2c² − 1。",
        // EN: M1: cos 3θ = cos 2θ cos θ − sin 2θ sin θ.
        "M1：cos 3θ = cos 2θ cos θ − sin 2θ sin θ。",
        // EN: M1: Substitute sin 2θ sin θ = 2 sin²θ cos θ = 2(1 − c²)c.
        "M1：代入 sin 2θ sin θ = 2 sin²θ cos θ = 2(1 − c²)c。",
        // EN: A1: (2c² − 1)c − 2c + 2c³ = 4c³ − 3c (AG).
        "A1：(2c² − 1)c − 2c + 2c³ = 4c³ − 3c (AG)。",
        // EN: M1: Expand cos(nθ + θ) = cos nθ cos θ − sin nθ sin θ.
        "M1：展開 cos(nθ + θ) = cos nθ cos θ − sin nθ sin θ。",
        // EN: A1: cos(nθ − θ) = cos nθ cos θ + sin nθ sin θ.
        "A1：cos(nθ − θ) = cos nθ cos θ + sin nθ sin θ。",
        // EN: A1: Add: the sin nθ sin θ terms cancel, leaving 2 cos θ cos nθ (AG).
        "A1：相加：sin nθ sin θ 項相消，剩下 2 cos θ cos nθ (AG)。",
        // EN: M1: Use n = 3: cos 4θ = 2c cos 3θ − cos 2θ = 2c(4c³ − 3c) − (2c² − 1).
        "M1：取 n = 3：cos 4θ = 2c cos 3θ − cos 2θ = 2c(4c³ − 3c) − (2c² − 1)。",
        // EN: A1: cos 4θ = 8c⁴ − 8c² + 1.
        "A1：cos 4θ = 8c⁴ − 8c² + 1。",
        // EN: M1: Use n = 4: cos 5θ = 2c cos 4θ − cos 3θ.
        "M1：取 n = 4：cos 5θ = 2c cos 4θ − cos 3θ。",
        // EN: A1: cos 5θ = 16c⁵ − 20c³ + 5c.
        "A1：cos 5θ = 16c⁵ − 20c³ + 5c。",
        // EN: A1: Conjecture: the coefficient of cⁿ is 2ⁿ⁻¹.
        "A1：猜想：cⁿ 的係數為 2ⁿ⁻¹。",
        // EN: R1: cos((n + 1)θ) = 2c cos nθ − cos((n − 1)θ), and the second term has lower degree, so each step doubles the leading coefficient (starting from 1 for cos θ = c).
        "R1：cos((n + 1)θ) = 2c cos nθ − cos((n − 1)θ)，而第二項的次數較低，所以每一步都把首項係數加倍（由 cos θ = c 的係數 1 開始）。",
        // EN: M1: With x = cos θ the equation is cos 4θ = 0, where 0 ≤ 4θ ≤ 4π.
        "M1：設 x = cos θ，方程變為 cos 4θ = 0，其中 0 ≤ 4θ ≤ 4π。",
        // EN: A1: 4θ = π/2, 3π/2, 5π/2, 7π/2, so θ = π/8, 3π/8, 5π/8, 7π/8.
        "A1：4θ = π/2, 3π/2, 5π/2, 7π/2，故 θ = π/8, 3π/8, 5π/8, 7π/8。",
        // EN: A1: The four roots are x = cos(π/8), cos(3π/8), cos(5π/8), cos(7π/8) (all different, as cos is decreasing on [0, π]).
        "A1：四個根為 x = cos(π/8), cos(3π/8), cos(5π/8), cos(7π/8)（由於 cos 在 [0, π] 上遞減，它們互不相同）。",
        // EN: M1: Solve as a quadratic in x²: x² = (8 ± √32)/16 = (2 ± √2)/4.
        "M1：作為關於 x² 的二次方程求解：x² = (8 ± √32)/16 = (2 ± √2)/4。",
        // EN: A1: cos(π/8) is the largest root, so cos(π/8) = √(2 + √2)/2.
        "A1：cos(π/8) 是最大的根，故 cos(π/8) = √(2 + √2)/2。",
      ],
    },

    // ── t3-2-q059 · short · challenge · AHL · AHL 3.10, 3.11 · 16 marks
    "t3-2-q059": {
      // EN: <p>This investigation finds a closed form for <span class="chem">C_n(x) = cos x + cos 2x + … + cos nx</span>, where <span class="chem">n in Z^+</span> and <span class="chem">x</span> is in radians.</p><p>(a) Let <span class="chem">x = 0.5</span>. Use your GDC to find <span class="chem">C_1(0.5)</span>, <span class="chem">C_2(0.5)</span>, <span class="chem">C_3(0.5)</span>, and compare each with the value of <span class="chem">(sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span> for the same <span class="chem">n</span>. [3]</p><p>(b) Use the identities for <span class="chem">sin(A + B)</span> and <span class="chem">sin(A - B)</span> to show that <span class="chem">2 sin(x/2) cos(kx) = sin((k + 1/2)x) - sin((k - 1/2)x)</span>. [3]</p><p>(c) Hence prove that, when <span class="chem">sin(x/2) != 0</span>, <span class="chem">C_n(x) = (sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span>. [3]</p><p>(d) Hence, using the symmetry <span class="chem">sin(pi - theta) = sin theta</span>, solve <span class="chem">cos x + cos 2x + cos 3x = 0</span> for <span class="chem">0 &lt; x &lt; pi</span>. [5]</p><p>(e) Use a symmetry of the cosine graph to deduce the number of solutions of <span class="chem">cos x + cos 2x + cos 3x = 0</span> for <span class="chem">0 &lt; x &lt; 2pi</span>. [2]</p>
      stem: "<p>本探究求 <span class=\"chem\">C_n(x) = cos x + cos 2x + … + cos nx</span> 的閉合形式，其中 <span class=\"chem\">n in Z^+</span>，<span class=\"chem\">x</span> 以弧度為單位。</p><p>(a) 設 <span class=\"chem\">x = 0.5</span>。利用 GDC 求 (find) <span class=\"chem\">C_1(0.5)</span>、<span class=\"chem\">C_2(0.5)</span>、<span class=\"chem\">C_3(0.5)</span>，並把每個值與相同 <span class=\"chem\">n</span> 下 <span class=\"chem\">(sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span> 的值比較。[3]</p><p>(b) 利用 <span class=\"chem\">sin(A + B)</span> 及 <span class=\"chem\">sin(A - B)</span> 的恒等式證明 (show that) <span class=\"chem\">2 sin(x/2) cos(kx) = sin((k + 1/2)x) - sin((k - 1/2)x)</span>。[3]</p><p>(c) 由此 (Hence) 證明 (prove) 當 <span class=\"chem\">sin(x/2) != 0</span> 時，<span class=\"chem\">C_n(x) = (sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span>。[3]</p><p>(d) 由此，利用對稱關係 <span class=\"chem\">sin(pi - theta) = sin theta</span>，解 (solve) <span class=\"chem\">cos x + cos 2x + cos 3x = 0</span>，其中 <span class=\"chem\">0 &lt; x &lt; pi</span>。[5]</p><p>(e) 利用餘弦圖像的對稱性，推導 (deduce) <span class=\"chem\">cos x + cos 2x + cos 3x = 0</span> 在 <span class=\"chem\">0 &lt; x &lt; 2pi</span> 內的解的數目。[2]</p>",
      hints: [
        // EN: Decode: the sum of cosines does not simplify term by term. Multiplying each term by <span class="chem">2 sin(x/2)</span> turns it into a DIFFERENCE of two sines (part (b)), and then the sum collapses (telescopes), like a telescoping series.
        "解碼：餘弦之和不能逐項化簡。把每一項乘以 <span class=\"chem\">2 sin(x/2)</span>，它便會變成兩個正弦之「差」（(b) 部分），然後整個和就像裂項相消的級數一樣相消。",
        // EN: For (a), use the sum feature of your GDC, or add the terms directly. Make sure the GDC is in radian mode.
        "對於 (a)，使用 GDC 的求和功能，或直接把各項相加。確保 GDC 處於弧度模式。",
        // EN: For (b), write <span class="chem">(k + 1/2)x = kx + x/2</span> and <span class="chem">(k - 1/2)x = kx - x/2</span>.
        "對於 (b)，寫成 <span class=\"chem\">(k + 1/2)x = kx + x/2</span> 及 <span class=\"chem\">(k - 1/2)x = kx - x/2</span>。",
        // EN: For (d), with <span class="chem">n = 3</span>, <span class="chem">C_3(x) = 0</span> exactly when <span class="chem">sin(7x/2) = sin(x/2)</span>. Then use <span class="chem">sin(pi - theta) = sin theta</span> to get two families of solutions.
        "對於 (d)，取 <span class=\"chem\">n = 3</span>，<span class=\"chem\">C_3(x) = 0</span> 恰好當 <span class=\"chem\">sin(7x/2) = sin(x/2)</span>。然後利用 <span class=\"chem\">sin(pi - theta) = sin theta</span> 得出兩組解。",
      ],
      // EN: <p><strong>Decoding:</strong> the investigation turns a sum of cosines into a telescoping sum of sines, and then turns the equation <span class="chem">C_3(x) = 0</span> into <span class="chem">sin A = sin B</span>, which is solved with the symmetry <span class="chem">sin(pi - theta) = sin theta</span>.</p><p>(d) Check: <span class="chem">C_3(pi/4) = sqrt(2)/2 + 0 - sqrt(2)/2 = 0</span>; <span class="chem">C_3(2pi/3) = -1/2 - 1/2 + 1 = 0</span>; <span class="chem">C_3(3pi/4) = -sqrt(2)/2 + 0 + sqrt(2)/2 = 0</span>.</p><p>(e) Reflecting in <span class="chem">x = pi</span> gives <span class="chem">5pi/4, 4pi/3, 7pi/4</span>: <b>6</b> solutions in <span class="chem">(0, 2pi)</span>.</p>
      solution: "<p><strong>解碼：</strong>本探究把餘弦之和變成正弦的裂項相消和，然後把方程 <span class=\"chem\">C_3(x) = 0</span> 變成 <span class=\"chem\">sin A = sin B</span>，再用對稱關係 <span class=\"chem\">sin(pi - theta) = sin theta</span> 求解。</p><p>(d) 檢查：<span class=\"chem\">C_3(pi/4) = sqrt(2)/2 + 0 - sqrt(2)/2 = 0</span>；<span class=\"chem\">C_3(2pi/3) = -1/2 - 1/2 + 1 = 0</span>；<span class=\"chem\">C_3(3pi/4) = -sqrt(2)/2 + 0 + sqrt(2)/2 = 0</span>。</p><p>(e) 沿 <span class=\"chem\">x = pi</span> 反射得 <span class=\"chem\">5pi/4, 4pi/3, 7pi/4</span>：在 <span class=\"chem\">(0, 2pi)</span> 內共 <b>6</b> 個解。</p>",
      // EN: <p>(a) <span class="chem">C_1 = 0.8776</span>, <span class="chem">C_2 = 1.418</span>, <span class="chem">C_3 = 1.489</span>; the expression gives the same values. (b) <span class="chem">sin(kx + x/2) - sin(kx - x/2) = 2 cos(kx) sin(x/2)</span>. (c) Summing (b) from <span class="chem">k = 1</span> to <span class="chem">n</span> telescopes to <span class="chem">sin((n + 1/2)x) - sin(x/2)</span>; divide by <span class="chem">2 sin(x/2)</span>. (d) <span class="chem">sin(7x/2) = sin(x/2)</span>: <span class="chem">7x/2 = x/2 + 2k pi</span> gives <span class="chem">x = 2pi/3</span>; <span class="chem">7x/2 = pi - x/2 + 2k pi</span> gives <span class="chem">x = pi/4, 3pi/4</span>. (e) <span class="chem">C_3(2pi - x) = C_3(x)</span>, so the solutions in <span class="chem">(pi, 2pi)</span> are <span class="chem">5pi/4, 4pi/3, 7pi/4</span>, and <span class="chem">C_3(pi) = -1 != 0</span>: <b>6</b> solutions.</p>
      answer: "<p>(a) <span class=\"chem\">C_1 = 0.8776</span>，<span class=\"chem\">C_2 = 1.418</span>，<span class=\"chem\">C_3 = 1.489</span>；該表達式給出相同的值。(b) <span class=\"chem\">sin(kx + x/2) - sin(kx - x/2) = 2 cos(kx) sin(x/2)</span>。(c) 把 (b) 由 <span class=\"chem\">k = 1</span> 至 <span class=\"chem\">n</span> 相加，裂項相消後得 <span class=\"chem\">sin((n + 1/2)x) - sin(x/2)</span>；再除以 <span class=\"chem\">2 sin(x/2)</span>。(d) <span class=\"chem\">sin(7x/2) = sin(x/2)</span>：<span class=\"chem\">7x/2 = x/2 + 2k pi</span> 給出 <span class=\"chem\">x = 2pi/3</span>；<span class=\"chem\">7x/2 = pi - x/2 + 2k pi</span> 給出 <span class=\"chem\">x = pi/4, 3pi/4</span>。(e) <span class=\"chem\">C_3(2pi - x) = C_3(x)</span>，所以在 <span class=\"chem\">(pi, 2pi)</span> 內的解為 <span class=\"chem\">5pi/4, 4pi/3, 7pi/4</span>，而 <span class=\"chem\">C_3(pi) = -1 != 0</span>：共 <b>6</b> 個解。</p>",
      markscheme: [
        // EN: A1: C₁(0.5) = 0.8776; the expression also gives 0.8776.
        "A1：C₁(0.5) = 0.8776；該表達式也給出 0.8776。",
        // EN: A1: C₂(0.5) = 1.418; the expression also gives 1.418.
        "A1：C₂(0.5) = 1.418；該表達式也給出 1.418。",
        // EN: A1: C₃(0.5) = 1.489; the expression also gives 1.489.
        "A1：C₃(0.5) = 1.489；該表達式也給出 1.489。",
        // EN: M1: Expand sin(kx + x/2) = sin kx cos(x/2) + cos kx sin(x/2).
        "M1：展開 sin(kx + x/2) = sin kx cos(x/2) + cos kx sin(x/2)。",
        // EN: M1: Expand sin(kx − x/2) = sin kx cos(x/2) − cos kx sin(x/2).
        "M1：展開 sin(kx − x/2) = sin kx cos(x/2) − cos kx sin(x/2)。",
        // EN: A1: Subtract: the sin kx cos(x/2) terms cancel, giving 2 sin(x/2) cos kx (AG).
        "A1：相減：sin kx cos(x/2) 項相消，得 2 sin(x/2) cos kx (AG)。",
        // EN: M1: Add the identity for k = 1, 2, …, n: 2 sin(x/2) C_n(x) = Σ [sin((k + ½)x) − sin((k − ½)x)].
        "M1：把 k = 1, 2, …, n 的恒等式相加：2 sin(x/2) C_n(x) = Σ [sin((k + ½)x) − sin((k − ½)x)]。",
        // EN: A1: The sum telescopes: the +sin((k + ½)x) term of each k cancels the −sin(((k + 1) − ½)x) term of k + 1.
        "A1：此和裂項相消：每個 k 的 +sin((k + ½)x) 項與 k + 1 的 −sin(((k + 1) − ½)x) 項相消。",
        // EN: A1: 2 sin(x/2) C_n(x) = sin((n + ½)x) − sin(x/2); dividing by 2 sin(x/2) ≠ 0 gives the result (AG).
        "A1：2 sin(x/2) C_n(x) = sin((n + ½)x) − sin(x/2)；除以 2 sin(x/2) ≠ 0 即得結果 (AG)。",
        // EN: M1: For 0 < x < π, sin(x/2) ≠ 0, so C₃(x) = 0 ⇔ sin(7x/2) = sin(x/2).
        "M1：當 0 < x < π 時 sin(x/2) ≠ 0，故 C₃(x) = 0 ⇔ sin(7x/2) = sin(x/2)。",
        // EN: M1: sin A = sin B ⇔ A = B + 2kπ or A = π − B + 2kπ.
        "M1：sin A = sin B ⇔ A = B + 2kπ 或 A = π − B + 2kπ。",
        // EN: A1: 3x = 2kπ gives x = 2π/3.
        "A1：3x = 2kπ 給出 x = 2π/3。",
        // EN: A1: 4x = π + 2kπ gives x = π/4.
        "A1：4x = π + 2kπ 給出 x = π/4。",
        // EN: A1: and x = 3π/4 (no other values in 0 < x < π).
        "A1：及 x = 3π/4（在 0 < x < π 內沒有其他值）。",
        // EN: R1: cos(k(2π − x)) = cos(kx) for every integer k, so C₃(2π − x) = C₃(x); the solutions in (π, 2π) are 2π minus those in (0, π), and x = π is not a solution since C₃(π) = −1.
        "R1：對每個整數 k，cos(k(2π − x)) = cos(kx)，故 C₃(2π − x) = C₃(x)；在 (π, 2π) 內的解是 2π 減去 (0, π) 內的解，而由於 C₃(π) = −1，x = π 不是解。",
        // EN: A1: 6 solutions.
        "A1：共 6 個解。",
      ],
    },

  }
});
