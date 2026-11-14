/* t3-2.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't3-2.q', {
  questions: {

    // ── t3-2-q001 · mcq · foundation · SL · SL 3.5 · 1 mark
    "t3-2-q001": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> What is the exact value of <span class="chem">sin(5*pi/6) + cos(2*pi/3)</span>?</p>
      stem: "<p><strong>[Paper 1 — 不可用 GDC]</strong> <span class=\"chem\">sin(5*pi/6) + cos(2*pi/3)</span> 的準確值是多少？</p>",
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
      // EN: <p><strong>[Paper 1 — No GDC]</strong> Given that <span class="chem">cos theta = -3/5</span> and <span class="chem">pi/2 &lt; theta &lt; pi</span>, find the exact value of <span class="chem">sin 2theta</span> as a decimal.</p>
      stem: "<p><strong>[Paper 1 — 不可用 GDC]</strong> 已知 <span class=\"chem\">cos theta = -3/5</span> 且 <span class=\"chem\">pi/2 &lt; theta &lt; pi</span>，求 (find) <span class=\"chem\">sin 2theta</span> 的準確值（以小數表示）。</p>",
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
      // EN: <p><strong>[AHL · Paper 1]</strong> What is the exact value of <span class="chem">arccos(-1/2) + arcsin(-1/2)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">arccos(-1/2) + arcsin(-1/2)</span> 的準確值是多少？</p>",
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
      // EN: <p><strong>[AHL · Paper 1]</strong> Given that <span class="chem">tan theta = 3/4</span>, find the exact value of <span class="chem">sec^2 theta</span> as a decimal.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 已知 <span class=\"chem\">tan theta = 3/4</span>，求 (find) <span class=\"chem\">sec^2 theta</span> 的準確值（以小數表示）。</p>",
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

    // ── t3-2-q008 · mcq · exam · SL · SL 3.8 · 4 marks
    "t3-2-q008": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> Find the complete set of solutions to <span class="chem">sin 2x = sin x</span> on the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>
      stem: "<p><strong>[Paper 1 — 不可用 GDC]</strong> 求 (Find) <span class=\"chem\">sin 2x = sin x</span> 在區間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> 內的完整解集。</p>",
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
      // EN: <p><strong>[AHL · Paper 1]</strong> Acute angles <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">tan A = 1/4</span> and <span class="chem">tan B = 3/5</span>. Find the exact value of <span class="chem">tan(A + B)</span>.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 銳角 <span class=\"chem\">A</span> 與 <span class=\"chem\">B</span> 滿足 <span class=\"chem\">tan A = 1/4</span> 及 <span class=\"chem\">tan B = 3/5</span>。求 (Find) <span class=\"chem\">tan(A + B)</span> 的準確值。</p>",
      hints: [
        // EN: Use the compound-angle identity <span class="chem">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>.
        "使用複角公式 <span class=\"chem\">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>。",
        // EN: Calculate <span class="chem">1/4 + 3/5 = 17/20</span> and <span class="chem">1 - (1/4)(3/5) = 17/20</span>.
        "計算 <span class=\"chem\">1/4 + 3/5 = 17/20</span> 及 <span class=\"chem\">1 - (1/4)(3/5) = 17/20</span>。",
      ],
      // EN: <div class="worked__math">tan(<i>A</i> + <i>B</i>) = <span class="frac"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class="frac"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>
      solution: "<div class=\"worked__math\">tan(<i>A</i> + <i>B</i>) = <span class=\"frac\"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class=\"frac\"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>",
    },

    // ── t3-2-q011 · mcq · exam · AHL · AHL 3.9 · 4 marks
    "t3-2-q011": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Solving the equation <span class="chem">2 sec^2 x - 3 tan x - 4 = 0</span> leads to which quadratic equation in <span class="chem">tan x</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 解方程 <span class=\"chem\">2 sec^2 x - 3 tan x - 4 = 0</span> 會化為哪條關於 <span class=\"chem\">tan x</span> 的二次方程？</p>",
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

    // ── t3-2-q012 · mcq · exam · AHL · AHL 3.9 · 4 marks
    "t3-2-q012": {
      // EN: <p><strong>[AHL · Paper 1]</strong> For <span class="chem">0 &lt; x &lt; 1</span>, which algebraic expression is identically equal to <span class="chem">sin(2 arccos x)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 當 <span class=\"chem\">0 &lt; x &lt; 1</span> 時，下列哪個代數式恒等於 <span class=\"chem\">sin(2 arccos x)</span>？</p>",
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
      // EN: <p><strong>[Paper 1 — No GDC]</strong> Prove the identity <span class="chem">(sin 2theta) / (1 + cos 2theta) = tan theta</span>, and hence find the exact value of <span class="chem">tan(pi/8)</span> in the form <span class="chem">sqrt(a) - b</span>.</p>
      stem: "<p><strong>[Paper 1 — 不可用 GDC]</strong> 證明 (Prove) 恒等式 <span class=\"chem\">(sin 2theta) / (1 + cos 2theta) = tan theta</span>，並由此求 (hence find) <span class=\"chem\">tan(pi/8)</span> 的準確值，以 <span class=\"chem\">sqrt(a) - b</span> 形式表示。</p>",
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
      // EN: <p><strong>[AHL · Paper 1]</strong> Solve the equation <span class="chem">arctan(x) + arctan(2x) = pi/4</span> for <span class="chem">x &gt; 0</span>. Give your answer in the form <span class="chem">(a + sqrt(b))/c</span>, where <span class="chem">a, b, c</span> are integers.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 在 <span class=\"chem\">x &gt; 0</span> 的條件下解 (Solve) 方程 <span class=\"chem\">arctan(x) + arctan(2x) = pi/4</span>。答案以 <span class=\"chem\">(a + sqrt(b))/c</span> 的形式表示，其中 <span class=\"chem\">a, b, c</span> 為整數。</p>",
      hints: [
        // EN: Take the tangent of both sides using <span class="chem">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span>: <span class="chem">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>.
        "利用 <span class=\"chem\">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span> 對兩邊取正切：<span class=\"chem\">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>。",
        // EN: Solve the quadratic <span class="chem">2x^2 + 3x - 1 = 0</span> and keep the positive root <span class="chem">x = (-3 + sqrt(17))/4</span>.
        "解二次方程 <span class=\"chem\">2x^2 + 3x - 1 = 0</span> 並保留正根 <span class=\"chem\">x = (-3 + sqrt(17))/4</span>。",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class="frac"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class=\"frac\"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>",
    },

    // ── t3-2-q016 · mcq · challenge · AHL · AHL 3.10 · 5 marks
    "t3-2-q016": {
      // EN: <p><strong>[AHL · Paper 1]</strong> What is the exact value of <span class="chem">cos 15° = cos(pi/12)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">cos 15° = cos(pi/12)</span> 的準確值是多少？</p>",
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
      // EN: <p><strong>[AHL · Paper 1]</strong> In triangle <span class="chem">ABC</span>, none of the angles is <span class="mono">90°</span>. Using the compound-angle identity for <span class="chem">tan(A + B)</span> and the fact that <span class="chem">A + B + C = pi</span>, prove that <span class="chem">tan A + tan B + tan C = tan A tan B tan C</span>.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 在三角形 <span class=\"chem\">ABC</span> 中，沒有任何一個角為 <span class=\"mono\">90°</span>。利用 <span class=\"chem\">tan(A + B)</span> 的複角公式及 <span class=\"chem\">A + B + C = pi</span> 的事實，證明 (prove that) <span class=\"chem\">tan A + tan B + tan C = tan A tan B tan C</span>。</p>",
      hints: [
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
        // EN: M1: Multiply both sides by (1 − tan A tan B): tan A + tan B = −tan C + tan A tan B tan C.
        "M1：兩邊同乘 (1 − tan A tan B)：tan A + tan B = −tan C + tan A tan B tan C。",
        // EN: A1: Rearrange to obtain tan A + tan B + tan C = tan A tan B tan C (AG).
        "A1：移項整理得 tan A + tan B + tan C = tan A tan B tan C (AG)。",
      ],
    },

    // ── t3-2-q018 · mcq · exam · AHL · AHL 3.11 · 4 marks
    "t3-2-q018": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Given that <span class="chem">sin x = k</span>, where <span class="chem">0 &lt; x &lt; pi/2</span>, which expression is equal to <span class="chem">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 已知 <span class=\"chem\">sin x = k</span>，其中 <span class=\"chem\">0 &lt; x &lt; pi/2</span>，下列哪個式子等於 <span class=\"chem\">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span>？</p>",
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
      // EN: <p><strong>[Paper 1 — No GDC]</strong> How many solutions does the equation <span class="chem">tan(2x) = sqrt(3)</span> have in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>?</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> 方程 <span class=\"chem\">tan(2x) = sqrt(3)</span> 在區間 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span> 內有多少個解？</p>",
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
