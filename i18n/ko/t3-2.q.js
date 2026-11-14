/* t3-2.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't3-2.q', {
  questions: {

    // ── t3-2-q001 · mcq · foundation · SL · SL 3.5 · 1 mark
    "t3-2-q001": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> What is the exact value of <span class="chem">sin(5*pi/6) + cos(2*pi/3)</span>?</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> <span class=\"chem\">sin(5*pi/6) + cos(2*pi/3)</span>의 정확한 값은 얼마인가요?</p>",
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
        "<span class=\"chem\">5*pi/6</span>와 <span class=\"chem\">2*pi/3</span>는 모두 <span class=\"chem\">sin &gt; 0</span>이고 <span class=\"chem\">cos &lt; 0</span>인 제2사분면에 있어요.",
        // EN: <span class="chem">sin(5*pi/6) = +sin(pi/6) = 1/2</span> and <span class="chem">cos(2*pi/3) = -cos(pi/3) = -1/2</span>.
        "<span class=\"chem\">sin(5*pi/6) = +sin(pi/6) = 1/2</span>이고 <span class=\"chem\">cos(2*pi/3) = -cos(pi/3) = -1/2</span>예요.",
      ],
      // EN: <div class="worked__math">sin(<span class="frac"><span>5<i>π</i></span><span>6</span></span>) + cos(<span class="frac"><span>2<i>π</i></span><span>3</span></span>) = <span class="frac"><span>1</span><span>2</span></span> + (−<span class="frac"><span>1</span><span>2</span></span>) = <b>0</b></div>
      solution: "<div class=\"worked__math\">sin(<span class=\"frac\"><span>5<i>π</i></span><span>6</span></span>) + cos(<span class=\"frac\"><span>2<i>π</i></span><span>3</span></span>) = <span class=\"frac\"><span>1</span><span>2</span></span> + (−<span class=\"frac\"><span>1</span><span>2</span></span>) = <b>0</b></div>",
      misconception: {
        // EN (option B): In Quadrant II, cos(2π/3) = −1/2 (negative!), not +1/2.
        "1": "제2사분면에서 cos(2π/3) = −1/2 (음수!)이에요 (+1/2이 아니에요).",
        // EN (option C): sin(5π/6) = 1/2 (not √3/2), because the reference angle is π/6 = 30°.
        "2": "기준각이 π/6 = 30°이므로 sin(5π/6) = 1/2이에요 (√3/2가 아니에요).",
        // EN (option D): In Quadrant II, sin(5π/6) = +1/2 (positive!).
        "3": "제2사분면에서 sin(5π/6) = +1/2 (양수!)이에요.",
      },
    },

    // ── t3-2-q002 · numeric · foundation · SL · SL 3.6 · 3 marks
    "t3-2-q002": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> Given that <span class="chem">cos theta = -3/5</span> and <span class="chem">pi/2 &lt; theta &lt; pi</span>, find the exact value of <span class="chem">sin 2theta</span> as a decimal.</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> <span class=\"chem\">cos theta = -3/5</span>이고 <span class=\"chem\">pi/2 &lt; theta &lt; pi</span>일 때, <span class=\"chem\">sin 2theta</span>의 정확한 값을 소수로 구하시오 (Find).</p>",
      hints: [
        // EN: In Quadrant II (<span class="chem">pi/2 &lt; theta &lt; pi</span>), <span class="chem">sin theta &gt; 0</span>, so <span class="chem">sin theta = +sqrt(1 - (-3/5)^2) = 4/5</span>.
        "제2사분면(<span class=\"chem\">pi/2 &lt; theta &lt; pi</span>)에서는 <span class=\"chem\">sin theta &gt; 0</span>이므로 <span class=\"chem\">sin theta = +sqrt(1 - (-3/5)^2) = 4/5</span>예요.",
        // EN: Use <span class="chem">sin 2theta = 2 sin theta cos theta</span>.
        "<span class=\"chem\">sin 2theta = 2 sin theta cos theta</span>를 사용하세요.",
      ],
      // EN: <div class="worked__math">sin <i>θ</i> = <span class="frac"><span>4</span><span>5</span></span> ⇒ sin 2<i>θ</i> = 2(<span class="frac"><span>4</span><span>5</span></span>)(−<span class="frac"><span>3</span><span>5</span></span>) = −<span class="frac"><span>24</span><span>25</span></span> = <b>−0.96</b></div>
      solution: "<div class=\"worked__math\">sin <i>θ</i> = <span class=\"frac\"><span>4</span><span>5</span></span> ⇒ sin 2<i>θ</i> = 2(<span class=\"frac\"><span>4</span><span>5</span></span>)(−<span class=\"frac\"><span>3</span><span>5</span></span>) = −<span class=\"frac\"><span>24</span><span>25</span></span> = <b>−0.96</b></div>",
    },

    // ── t3-2-q003 · mcq · foundation · SL · SL 3.7 · 2 marks
    "t3-2-q003": {
      // EN: <p>What are the amplitude and period of the function <span class="chem">f(x) = -3 cos(4x) + 5</span> (where <span class="chem">x</span> is in radians)?</p>
      stem: "<p>함수 <span class=\"chem\">f(x) = -3 cos(4x) + 5</span> (<span class=\"chem\">x</span>는 라디안)의 진폭과 주기는 얼마인가요?</p>",
      options: [
        // EN: Amplitude <span class="mono">= 3</span>, Period <span class="chem">= pi/2</span>
        "진폭 <span class=\"mono\">= 3</span>, 주기 <span class=\"chem\">= pi/2</span>",
        // EN: Amplitude <span class="mono">= −3</span>, Period <span class="chem">= pi/2</span>
        "진폭 <span class=\"mono\">= −3</span>, 주기 <span class=\"chem\">= pi/2</span>",
        // EN: Amplitude <span class="mono">= 3</span>, Period <span class="mono">= 4</span>
        "진폭 <span class=\"mono\">= 3</span>, 주기 <span class=\"mono\">= 4</span>",
        // EN: Amplitude <span class="mono">= 5</span>, Period <span class="chem">= 8*pi</span>
        "진폭 <span class=\"mono\">= 5</span>, 주기 <span class=\"chem\">= 8*pi</span>",
      ],
      hints: [
        // EN: Amplitude is <span class="chem">|a|</span> (always positive).
        "진폭은 <span class=\"chem\">|a|</span> (항상 양수)예요.",
        // EN: Period is <span class="chem">T = 2*pi / b</span>.
        "주기는 <span class=\"chem\">T = 2*pi / b</span>예요.",
      ],
      // EN: <div class="worked__math">Amplitude = |−3| = <b>3</b>, &nbsp;&nbsp; Period = <span class="frac"><span>2<i>π</i></span><span>4</span></span> = <b><span class="frac"><span><i>π</i></span><span>2</span></span></b></div>
      solution: "<div class=\"worked__math\">진폭 = |−3| = <b>3</b>, &nbsp;&nbsp; 주기 = <span class=\"frac\"><span>2<i>π</i></span><span>4</span></span> = <b><span class=\"frac\"><span><i>π</i></span><span>2</span></span></b></div>",
      misconception: {
        // EN (option B): Amplitude is always positive: |a| = |−3| = 3.
        "1": "진폭은 항상 양수예요: |a| = |−3| = 3.",
        // EN (option C): 4 is the frequency factor b; the period is T = 2π/b = 2π/4 = π/2.
        "2": "4는 진동수 계수 b이고, 주기는 T = 2π/b = 2π/4 = π/2예요.",
        // EN (option D): 5 is the vertical shift d (the principal axis y = 5), and T = 2π/b, not 2πb.
        "3": "5는 수직 평행이동 d (중심선 y = 5)이며, 주기는 2πb가 아니라 T = 2π/b예요.",
      },
    },

    // ── t3-2-q004 · mcq · foundation · SL · SL 3.8 · 2 marks
    "t3-2-q004": {
      // EN: <p>How many solutions does the equation <span class="chem">sin(3x) = 1/2</span> have in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>?</p>
      stem: "<p>구간 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 방정식 <span class=\"chem\">sin(3x) = 1/2</span>의 해는 몇 개인가요?</p>",
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
        "구간을 변환하세요: <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>이면 <span class=\"chem\">0 &lt;= 3x &lt;= 6pi</span> (세 바퀴)예요.",
        // EN: Each full revolution of <span class="chem">2pi</span> contains 2 solutions to <span class="chem">sin u = 1/2</span>.
        "<span class=\"chem\">2pi</span>의 한 바퀴마다 <span class=\"chem\">sin u = 1/2</span>의 해가 2개씩 있어요.",
      ],
      // EN: <p>Let <span class="chem">u = 3x in [0, 6pi]</span>. Since <span class="chem">sin u = 1/2</span> has 2 solutions in each <span class="chem">2pi</span> period, across 3 periods there are <span class="mono">3 × 2 = 6</span> solutions.</p>
      solution: "<p><span class=\"chem\">u = 3x in [0, 6pi]</span>로 두세요. <span class=\"chem\">sin u = 1/2</span>은 매 <span class=\"chem\">2pi</span> 주기마다 2개의 해를 가지므로 3개 주기 동안 총 <span class=\"mono\">3 × 2 = 6</span>개의 해가 있어요.</p>",
      misconception: {
        // EN (option B): sin u = 1/2 has 2 solutions per period, but sin(3x) completes 3 full periods on [0, 2π].
        "1": "sin u = 1/2은 한 주기마다 2개의 해를 갖지만, sin(3x)는 [0, 2π]에서 3주기를 돌아요.",
        // EN (option C): Each of the 3 periods gives 2 solutions (one in Quadrant I, one in Quadrant II), so 3 × 2 = 6.
        "2": "3개의 주기마다 각각 2개의 해(제1사분면 1개, 제2사분면 1개)가 나오므로 3 × 2 = 6이에요.",
        // EN (option D): 4 solutions corresponds to sin(2x) = 1/2 on [0, 2π].
        "3": "4개는 [0, 2π]에서 sin(2x) = 1/2의 해의 개수예요.",
      },
    },

    // ── t3-2-q005 · mcq · foundation · AHL · AHL 3.9 · 2 marks
    "t3-2-q005": {
      // EN: <p><strong>[AHL · Paper 1]</strong> What is the exact value of <span class="chem">arccos(-1/2) + arcsin(-1/2)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">arccos(-1/2) + arcsin(-1/2)</span>의 정확한 값은 얼마인가요?</p>",
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
        "<span class=\"chem\">arccos</span>의 주치역은 <span class=\"chem\">[0, pi]</span>이므로 <span class=\"chem\">arccos(-1/2) = 2*pi/3</span>이에요.",
        // EN: The principal range of <span class="chem">arcsin</span> is <span class="chem">[-pi/2, pi/2]</span>, so <span class="chem">arcsin(-1/2) = -pi/6</span>.
        "<span class=\"chem\">arcsin</span>의 주치역은 <span class=\"chem\">[-pi/2, pi/2]</span>이므로 <span class=\"chem\">arcsin(-1/2) = -pi/6</span>이에요.",
      ],
      // EN: <div class="worked__math">arccos(−<span class="frac"><span>1</span><span>2</span></span>) + arcsin(−<span class="frac"><span>1</span><span>2</span></span>) = <span class="frac"><span>2<i>π</i></span><span>3</span></span> + (−<span class="frac"><span><i>π</i></span><span>6</span></span>) = <b><span class="frac"><span><i>π</i></span><span>2</span></span></b></div>
      solution: "<div class=\"worked__math\">arccos(−<span class=\"frac\"><span>1</span><span>2</span></span>) + arcsin(−<span class=\"frac\"><span>1</span><span>2</span></span>) = <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> + (−<span class=\"frac\"><span><i>π</i></span><span>6</span></span>) = <b><span class=\"frac\"><span><i>π</i></span><span>2</span></span></b></div>",
      misconception: {
        // EN (option B): You may have taken arccos(−1/2) = π/6 (the value of arcsin(1/2)). The principal values are arccos(−1/2) = 2π/3 and arcsin(−1/2) = −π/6.
        "1": "arccos(−1/2)를 π/6 (arcsin(1/2)의 값)으로 잡았을 수 있어요. 주치는 arccos(−1/2) = 2π/3, arcsin(−1/2) = −π/6이에요.",
        // EN (option C): You added +π/6 instead of −π/6 for arcsin(−1/2).
        "2": "arcsin(−1/2)에 −π/6 대신 +π/6을 더했어요.",
        // EN (option D): arccos(−1/2) is NOT −π/3! The range of arccos is [0, π], so arccos(−1/2) = 2π/3, while arcsin(−1/2) = −π/6. Check: arcsin x + arccos x = π/2 for all x ∈ [−1, 1].
        "3": "arccos(−1/2)는 −π/3이 아니에요! arccos의 치역은 [0, π]이므로 arccos(−1/2) = 2π/3이고 arcsin(−1/2) = −π/6이에요. 확인: 모든 x ∈ [−1, 1]에 대해 arcsin x + arccos x = π/2예요.",
      },
    },

    // ── t3-2-q006 · numeric · foundation · AHL · AHL 3.9 · 2 marks
    "t3-2-q006": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Given that <span class="chem">tan theta = 3/4</span>, find the exact value of <span class="chem">sec^2 theta</span> as a decimal.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">tan theta = 3/4</span>일 때, <span class=\"chem\">sec^2 theta</span>의 정확한 값을 소수로 구하시오 (Find).</p>",
      hints: [
        // EN: Use the Pythagorean identity <span class="chem">1 + tan^2 theta = sec^2 theta</span> from the Formula Booklet.
        "공식집에 있는 피타고라스 항등식 <span class=\"chem\">1 + tan^2 theta = sec^2 theta</span>를 사용하세요.",
        // EN: Calculate <span class="chem">1 + (3/4)^2 = 1 + 9/16 = 25/16</span>.
        "<span class=\"chem\">1 + (3/4)^2 = 1 + 9/16 = 25/16</span>을 계산하세요.",
      ],
      // EN: <div class="worked__math">sec<sup>2</sup><i>θ</i> = 1 + tan<sup>2</sup><i>θ</i> = 1 + <span class="frac"><span>9</span><span>16</span></span> = <b><span class="frac"><span>25</span><span>16</span></span> = 1.5625</b></div>
      solution: "<div class=\"worked__math\">sec<sup>2</sup><i>θ</i> = 1 + tan<sup>2</sup><i>θ</i> = 1 + <span class=\"frac\"><span>9</span><span>16</span></span> = <b><span class=\"frac\"><span>25</span><span>16</span></span> = 1.5625</b></div>",
    },

    // ── t3-2-q007 · numeric · exam · SL · SL 3.7 · 4 marks
    "t3-2-q007": {
      // EN: <p>A Ferris wheel rotates at a constant speed. A rider's height <span class="chem">h(t)</span> in metres above the ground at time <span class="chem">t</span> minutes is modelled by <span class="chem">h(t) = -15 cos((pi/5)t) + 17</span>. Find the first positive time <span class="chem">t</span> (in minutes) at which the rider reaches a height of <span class="mono">24.5 m</span>.</p>
      stem: "<p>대관람차가 일정한 속력으로 회전하고 있어요. 시각 <span class=\"chem\">t</span>분일 때 탑승자의 지면으로부터의 높이 <span class=\"chem\">h(t)</span>(미터)가 <span class=\"chem\">h(t) = -15 cos((pi/5)t) + 17</span>로 모델링돼요. 탑승자가 처음으로 높이 <span class=\"mono\">24.5 m</span>에 도달하는 양의 시각 <span class=\"chem\">t</span>(분)를 구하시오 (Find).</p>",
      hints: [
        // EN: Set <span class="chem">-15 cos((pi/5)t) + 17 = 24.5</span> and isolate <span class="chem">cos((pi/5)t)</span>.
        "<span class=\"chem\">-15 cos((pi/5)t) + 17 = 24.5</span>로 놓고 <span class=\"chem\">cos((pi/5)t)</span>만 남기세요.",
        // EN: You will get <span class="chem">cos((pi/5)t) = -0.5</span>, so the first positive angle is <span class="chem">(pi/5)t = 2*pi/3</span>.
        "<span class=\"chem\">cos((pi/5)t) = -0.5</span>가 되므로 첫 번째 양의 각은 <span class=\"chem\">(pi/5)t = 2*pi/3</span>이에요.",
      ],
      // EN: <div class="worked__math">−15 cos(<span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i>) = 7.5 ⇒ cos(<span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i>) = −<span class="frac"><span>1</span><span>2</span></span> ⇒ <span class="frac"><span><i>π</i></span><span>5</span></span><i>t</i> = <span class="frac"><span>2<i>π</i></span><span>3</span></span> ⇒ <i>t</i> = <b><span class="frac"><span>10</span><span>3</span></span> ≈ 3.33 min</b></div>
      solution: "<div class=\"worked__math\">−15 cos(<span class=\"frac\"><span><i>π</i></span><span>5</span></span><i>t</i>) = 7.5 ⇒ cos(<span class=\"frac\"><span><i>π</i></span><span>5</span></span><i>t</i>) = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <span class=\"frac\"><span><i>π</i></span><span>5</span></span><i>t</i> = <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span> ⇒ <i>t</i> = <b><span class=\"frac\"><span>10</span><span>3</span></span> ≈ 3.33 분</b></div>",
    },

    // ── t3-2-q008 · mcq · exam · SL · SL 3.8 · 4 marks
    "t3-2-q008": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> Find the complete set of solutions to <span class="chem">sin 2x = sin x</span> on the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> 구간 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 방정식 <span class=\"chem\">sin 2x = sin x</span>의 모든 해를 구하시오 (Find).</p>",
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
        "모두 한쪽으로 이항하고 <span class=\"chem\">sin 2x = 2 sin x cos x</span>를 전개하세요: <span class=\"chem\">2 sin x cos x - sin x = 0</span>.",
        // EN: Factor out <span class="chem">sin x</span>: <span class="chem">sin x (2 cos x - 1) = 0</span>.
        "<span class=\"chem\">sin x</span>를 묶어 내세요: <span class=\"chem\">sin x (2 cos x - 1) = 0</span>.",
      ],
      // EN: <div class="worked__math">sin <i>x</i>(2 cos <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = 0 (<i>x</i> = 0, <i>π</i>, 2<i>π</i>) &nbsp; or &nbsp; cos <i>x</i> = <span class="frac"><span>1</span><span>2</span></span> (<i>x</i> = <span class="frac"><span><i>π</i></span><span>3</span></span>, <span class="frac"><span>5<i>π</i></span><span>3</span></span>)</div>
      solution: "<div class=\"worked__math\">sin <i>x</i>(2 cos <i>x</i> − 1) = 0 ⇒ sin <i>x</i> = 0 (<i>x</i> = 0, <i>π</i>, 2<i>π</i>) &nbsp; 또는 &nbsp; cos <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> (<i>x</i> = <span class=\"frac\"><span><i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>5<i>π</i></span><span>3</span></span>)</div>",
      misconception: {
        // EN (option B): You divided both sides by sin x, losing all three roots where sin x = 0 (x = 0, π, 2π)!
        "1": "양변을 sin x로 나누어 sin x = 0이 되는 세 근 (x = 0, π, 2π)을 모두 잃어버렸어요!",
        // EN (option C): cos x = 1/2 gives x = π/3 and 5π/3, not π/6 and 11π/6.
        "2": "cos x = 1/2의 해는 π/6와 11π/6이 아니라 π/3와 5π/3이에요.",
        // EN (option D): 2π/3 and 4π/3 correspond to cos x = −1/2, not +1/2.
        "3": "2π/3와 4π/3은 +1/2이 아니라 cos x = −1/2에 해당하는 각이에요.",
      },
    },

    // ── t3-2-q009 · multi · exam · SL · SL 3.7 · 3 marks
    "t3-2-q009": {
      // EN: <p>The depth of water at a pier reaches a high tide of <span class="mono">8.2 m</span> at <span class="mono">t = 2</span> hours and the next low tide of <span class="mono">2.6 m</span> at <span class="mono">t = 8</span> hours. Which of the following equations correctly model the depth <span class="chem">y(t)</span>? Select all that apply.</p>
      stem: "<p>부두의 수심이 <span class=\"mono\">t = 2</span>시간에 만조(최고) <span class=\"mono\">8.2 m</span>에 도달하고, 다음 간조(최저) <span class=\"mono\">2.6 m</span>에는 <span class=\"mono\">t = 8</span>시간에 도달해요. 다음 중 수심 <span class=\"chem\">y(t)</span>를 올바르게 모델링한 식을 모두 고르시오.</p>",
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
        "진폭 <span class=\"chem\">a = (8.2 - 2.6)/2 = 2.8</span>, 중심선 <span class=\"chem\">d = (8.2 + 2.6)/2 = 5.4</span>, 주기 <span class=\"chem\">T = 2(8 - 2) = 12</span>이므로 <span class=\"chem\">b = pi/6</span>을 구하세요.",
        // EN: Check which phase shifts place a maximum of <span class="mono">8.2</span> at <span class="mono">t = 2</span> and a minimum of <span class="mono">2.6</span> at <span class="mono">t = 8</span>.
        "어떤 위상 이동이 <span class=\"mono\">t = 2</span>에서 최댓값 <span class=\"mono\">8.2</span>를, <span class=\"mono\">t = 8</span>에서 최솟값 <span class=\"mono\">2.6</span>을 만드는지 확인하세요.",
      ],
      // EN: <p>With <span class="chem">a = 2.8, d = 5.4, b = pi/6</span>: <span class="chem">2.8 cos((pi/6)(t-2)) + 5.4</span> starts at a peak at <span class="mono">t = 2</span>; <span class="chem">-2.8 cos((pi/6)(t-8)) + 5.4</span> starts at a trough at <span class="mono">t = 8</span>; and <span class="chem">2.8 sin((pi/6)(t+1)) + 5.4</span> crosses the mean line rising at <span class="mono">t = −1</span> (a quarter-period before <span class="mono">t = 2</span>).</p>
      solution: "<p><span class=\"chem\">a = 2.8, d = 5.4, b = pi/6</span>일 때: <span class=\"chem\">2.8 cos((pi/6)(t-2)) + 5.4</span>는 <span class=\"mono\">t = 2</span>에서 최댓값으로 시작하고, <span class=\"chem\">-2.8 cos((pi/6)(t-8)) + 5.4</span>는 <span class=\"mono\">t = 8</span>에서 최솟값으로 시작하며, <span class=\"chem\">2.8 sin((pi/6)(t+1)) + 5.4</span>는 (<span class=\"mono\">t = 2</span>보다 4분의 1주기 앞인) <span class=\"mono\">t = −1</span>에서 중심선을 올라가며 지나가요.</p>",
      misconception: {
        // EN (option D): The time from high tide (t = 2) to low tide (t = 8) is half a period (T/2 = 6 h), so T = 12 h and b = 2π/12 = π/6, not π/3.
        "3": "만조(t = 2)에서 간조(t = 8)까지의 시간은 반주기(T/2 = 6시간)이므로 T = 12시간이고 b = 2π/12 = π/6이에요 (π/3이 아니에요).",
        // EN (option E): 5.6 m is the peak-to-trough range (8.2 − 2.6); the amplitude is half of that: a = 2.8 m.
        "4": "5.6 m는 최고와 최저의 차이(8.2 − 2.6)예요; 진폭은 그 절반인 a = 2.8 m예요.",
      },
    },

    // ── t3-2-q010 · numeric · exam · AHL · AHL 3.10 · 4 marks
    "t3-2-q010": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Acute angles <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">tan A = 1/4</span> and <span class="chem">tan B = 3/5</span>. Find the exact value of <span class="chem">tan(A + B)</span>.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 두 예각 <span class=\"chem\">A</span>, <span class=\"chem\">B</span>가 <span class=\"chem\">tan A = 1/4</span>, <span class=\"chem\">tan B = 3/5</span>를 만족해요. <span class=\"chem\">tan(A + B)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Use the compound-angle identity <span class="chem">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>.
        "덧셈정리 <span class=\"chem\">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>를 사용하세요.",
        // EN: Calculate <span class="chem">1/4 + 3/5 = 17/20</span> and <span class="chem">1 - (1/4)(3/5) = 17/20</span>.
        "<span class=\"chem\">1/4 + 3/5 = 17/20</span>과 <span class=\"chem\">1 - (1/4)(3/5) = 17/20</span>을 계산하세요.",
      ],
      // EN: <div class="worked__math">tan(<i>A</i> + <i>B</i>) = <span class="frac"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class="frac"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>
      solution: "<div class=\"worked__math\">tan(<i>A</i> + <i>B</i>) = <span class=\"frac\"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class=\"frac\"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>",
    },

    // ── t3-2-q011 · mcq · exam · AHL · AHL 3.9 · 4 marks
    "t3-2-q011": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Solving the equation <span class="chem">2 sec^2 x - 3 tan x - 4 = 0</span> leads to which quadratic equation in <span class="chem">tan x</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 방정식 <span class=\"chem\">2 sec^2 x - 3 tan x - 4 = 0</span>을 정리하면 <span class=\"chem\">tan x</span>에 대한 어떤 이차방정식이 되나요?</p>",
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
        "피타고라스 항등식 <span class=\"chem\">sec^2 x = 1 + tan^2 x</span>를 대입하세요.",
        // EN: Expand <span class="chem">2(1 + tan^2 x) - 3 tan x - 4 = 0</span>.
        "<span class=\"chem\">2(1 + tan^2 x) - 3 tan x - 4 = 0</span>을 전개하세요.",
      ],
      // EN: <div class="worked__math">2(1 + tan<sup>2</sup><i>x</i>) − 3 tan <i>x</i> − 4 = 0 ⇒ <b>2 tan<sup>2</sup><i>x</i> − 3 tan <i>x</i> − 2 = 0</b> ⇒ (2 tan <i>x</i> + 1)(tan <i>x</i> − 2) = 0</div>
      solution: "<div class=\"worked__math\">2(1 + tan<sup>2</sup><i>x</i>) − 3 tan <i>x</i> − 4 = 0 ⇒ <b>2 tan<sup>2</sup><i>x</i> − 3 tan <i>x</i> − 2 = 0</b> ⇒ (2 tan <i>x</i> + 1)(tan <i>x</i> − 2) = 0</div>",
      misconception: {
        // EN (option B): You substituted sec²x = tan²x − 1 instead of 1 + tan²x.
        "1": "1 + tan²x 대신 sec²x = tan²x − 1을 대입했어요.",
        // EN (option C): You forgot to multiply the 1 in (1 + tan²x) by the coefficient 2.
        "2": "(1 + tan²x)의 1에 계수 2를 곱하는 것을 빠뜨렸어요.",
        // EN (option D): You flipped the sign of −3 tan x.
        "3": "−3 tan x의 부호를 반대로 적었어요.",
      },
    },

    // ── t3-2-q012 · mcq · exam · AHL · AHL 3.9 · 4 marks
    "t3-2-q012": {
      // EN: <p><strong>[AHL · Paper 1]</strong> For <span class="chem">0 &lt; x &lt; 1</span>, which algebraic expression is identically equal to <span class="chem">sin(2 arccos x)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">0 &lt; x &lt; 1</span>일 때, <span class=\"chem\">sin(2 arccos x)</span>와 항상 같은 대수적 식은 무엇인가요?</p>",
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
        "<span class=\"chem\">theta = arccos x</span>라 두면 <span class=\"chem\">cos theta = x</span>이고 <span class=\"chem\">sin theta = sqrt(1 - x^2)</span>예요.",
        // EN: Use <span class="chem">sin(2theta) = 2 sin theta cos theta</span>.
        "<span class=\"chem\">sin(2theta) = 2 sin theta cos theta</span>를 사용하세요.",
      ],
      // EN: <div class="worked__math">Let <i>θ</i> = arccos <i>x</i> ⇒ cos <i>θ</i> = <i>x</i>, &nbsp; sin <i>θ</i> = √(1 − <i>x</i><sup>2</sup>) ⇒ sin 2<i>θ</i> = 2 sin <i>θ</i> cos <i>θ</i> = <b>2<i>x</i>√(1 − <i>x</i><sup>2</sup>)</b></div>
      solution: "<div class=\"worked__math\"><i>θ</i> = arccos <i>x</i>라 두면 cos <i>θ</i> = <i>x</i>, &nbsp; sin <i>θ</i> = √(1 − <i>x</i><sup>2</sup>) ⇒ sin 2<i>θ</i> = 2 sin <i>θ</i> cos <i>θ</i> = <b>2<i>x</i>√(1 − <i>x</i><sup>2</sup>)</b></div>",
      misconception: {
        // EN (option B): 2x² − 1 is cos(2 arccos x), not sin(2 arccos x).
        "1": "2x² − 1은 sin(2 arccos x)가 아니라 cos(2 arccos x)예요.",
        // EN (option C): You forgot the factor cos θ = x in sin(2θ) = 2 sin θ cos θ.
        "2": "sin(2θ) = 2 sin θ cos θ에서 cos θ = x를 곱하는 것을 빠뜨렸어요.",
        // EN (option D): 1 − 2x² is cos(2 arcsin x).
        "3": "1 − 2x²은 cos(2 arcsin x)예요.",
      },
    },

    // ── t3-2-q013 · order · exam · SL · SL 3.8 · 3 marks
    "t3-2-q013": {
      // EN: <p>Put these steps in the correct order to find all solutions to <span class="chem">cos(2x - pi/3) = 1/2</span> on the domain <span class="chem">0 &lt;= x &lt;= pi</span>.</p>
      stem: "<p>정의역 <span class=\"chem\">0 &lt;= x &lt;= pi</span>에서 <span class=\"chem\">cos(2x - pi/3) = 1/2</span>의 모든 해를 구하는 단계를 올바른 순서로 배열하시오.</p>",
      options: [
        // EN: Let u = 2x − π/3 and transform the domain 0 ≤ x ≤ π into −π/3 ≤ u ≤ 5π/3.
        "u = 2x − π/3으로 놓고 정의역 0 ≤ x ≤ π를 −π/3 ≤ u ≤ 5π/3으로 변환한다.",
        // EN: Identify the acute reference angle α = arccos(1/2) = π/3.
        "예각 기준각 α = arccos(1/2) = π/3을 구한다.",
        // EN: List all angles u in Quadrants I and IV that fall inside [−π/3, 5π/3]: u = −π/3, π/3, 5π/3.
        "제1·4사분면에서 [−π/3, 5π/3] 안에 들어가는 모든 각 u를 나열한다: u = −π/3, π/3, 5π/3.",
        // EN: Add π/3 to each value of u and divide by 2 to obtain x = 0, π/3, π.
        "각 u 값에 π/3을 더한 뒤 2로 나누어 x = 0, π/3, π를 얻는다.",
      ],
      hints: [
        // EN: Always transform the domain for the inner argument <span class="chem">u = 2x - pi/3</span> first!
        "항상 먼저 안쪽 식 <span class=\"chem\">u = 2x - pi/3</span>에 맞게 정의역을 변환하세요!",
        // EN: Only divide by 2 at the very last step.
        "2로 나누는 것은 맨 마지막 단계에서만 하세요.",
      ],
      // EN: <p>Transforming the interval to <span class="chem">[-pi/3, 5pi/3]</span> first ensures you capture all three roots <span class="chem">u = -pi/3, pi/3, 5pi/3</span>, giving <span class="chem">x = 0, pi/3, pi</span>.</p>
      solution: "<p>먼저 구간을 <span class=\"chem\">[-pi/3, 5pi/3]</span>로 변환하면 세 근 <span class=\"chem\">u = -pi/3, pi/3, 5pi/3</span>을 빠짐없이 찾아 <span class=\"chem\">x = 0, pi/3, pi</span>를 얻을 수 있어요.</p>",
    },

    // ── t3-2-q014 · short · exam · SL · SL 3.6 · 5 marks
    "t3-2-q014": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> Prove the identity <span class="chem">(sin 2theta) / (1 + cos 2theta) = tan theta</span>, and hence find the exact value of <span class="chem">tan(pi/8)</span> in the form <span class="chem">sqrt(a) - b</span>.</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> 항등식 <span class=\"chem\">(sin 2theta) / (1 + cos 2theta) = tan theta</span>를 증명하고, 이를 이용하여 <span class=\"chem\">tan(pi/8)</span>의 정확한 값을 <span class=\"chem\">sqrt(a) - b</span> 꼴로 구하시오 (Find).</p>",
      hints: [
        // EN: Choose <span class="chem">cos 2theta = 2 cos^2 theta - 1</span> in the denominator so that <span class="mono">+1</span> and <span class="mono">−1</span> cancel!
        "분모에서 <span class=\"mono\">+1</span>과 <span class=\"mono\">−1</span>이 지워지도록 <span class=\"chem\">cos 2theta = 2 cos^2 theta - 1</span>을 선택하세요!",
        // EN: Then set <span class="chem">theta = pi/8</span> so <span class="chem">2theta = pi/4</span>.
        "그다음 <span class=\"chem\">2theta = pi/4</span>가 되도록 <span class=\"chem\">theta = pi/8</span>을 대입하세요.",
      ],
      // EN: <p>tan(π/8) = √2 − 1.</p>
      answer: "<p>tan(π/8) = √2 − 1.</p>",
      markscheme: [
        // EN: M1: Substitute sin 2θ = 2 sin θ cos θ and cos 2θ = 2 cos²θ − 1 into the LHS.
        "M1: 좌변에 sin 2θ = 2 sin θ cos θ와 cos 2θ = 2 cos²θ − 1을 대입함.",
        // EN: A1: Simplify LHS = (2 sin θ cos θ) / (1 + 2 cos²θ − 1) = (2 sin θ cos θ) / (2 cos²θ) = sin θ / cos θ = tan θ (AG).
        "A1: 좌변 = (2 sin θ cos θ) / (1 + 2 cos²θ − 1) = (2 sin θ cos θ) / (2 cos²θ) = sin θ / cos θ = tan θ로 정리함 (AG).",
        // EN: M1: Substitute θ = π/8 so 2θ = π/4: tan(π/8) = sin(π/4) / (1 + cos(π/4)).
        "M1: 2θ = π/4가 되도록 θ = π/8을 대입함: tan(π/8) = sin(π/4) / (1 + cos(π/4)).",
        // EN: A1: Write (√2/2) / (1 + √2/2) = √2 / (2 + √2) = 1 / (√2 + 1).
        "A1: (√2/2) / (1 + √2/2) = √2 / (2 + √2) = 1 / (√2 + 1)로 정리함.",
        // EN: A1: Rationalize the denominator: (√2 − 1) / ((√2 + 1)(√2 − 1)) = √2 − 1.
        "A1: 분모를 유리화함: (√2 − 1) / ((√2 + 1)(√2 − 1)) = √2 − 1.",
      ],
    },

    // ── t3-2-q015 · numeric · challenge · AHL · AHL 3.10 · 5 marks
    "t3-2-q015": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Solve the equation <span class="chem">arctan(x) + arctan(2x) = pi/4</span> for <span class="chem">x &gt; 0</span>. Give your answer in the form <span class="chem">(a + sqrt(b))/c</span>, where <span class="chem">a, b, c</span> are integers.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">x &gt; 0</span>일 때 방정식 <span class=\"chem\">arctan(x) + arctan(2x) = pi/4</span>를 푸시오. 답을 <span class=\"chem\">(a + sqrt(b))/c</span> 꼴로 나타내시오. 단, <span class=\"chem\">a, b, c</span>는 정수이다.</p>",
      hints: [
        // EN: Take the tangent of both sides using <span class="chem">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span>: <span class="chem">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>.
        "<span class=\"chem\">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span>를 이용해 양변에 탄젠트를 취하세요: <span class=\"chem\">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>.",
        // EN: Solve the quadratic <span class="chem">2x^2 + 3x - 1 = 0</span> and keep the positive root <span class="chem">x = (-3 + sqrt(17))/4</span>.
        "이차방정식 <span class=\"chem\">2x^2 + 3x - 1 = 0</span>을 풀고 양수 근 <span class=\"chem\">x = (-3 + sqrt(17))/4</span>를 선택하세요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class="frac"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class=\"frac\"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>",
    },

    // ── t3-2-q016 · mcq · challenge · AHL · AHL 3.10 · 5 marks
    "t3-2-q016": {
      // EN: <p><strong>[AHL · Paper 1]</strong> What is the exact value of <span class="chem">cos 15° = cos(pi/12)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">cos 15° = cos(pi/12)</span>의 정확한 값은 얼마인가요?</p>",
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
        "<span class=\"mono\">15° = 45° − 30°</span> (또는 <span class=\"chem\">pi/12 = pi/4 - pi/6</span>)로 쓰세요.",
        // EN: Expand <span class="chem">cos(45° - 30°) = cos 45° cos 30° + sin 45° sin 30°</span>.
        "<span class=\"chem\">cos(45° - 30°) = cos 45° cos 30° + sin 45° sin 30°</span>를 전개하세요.",
      ],
      // EN: <div class="worked__math">cos(45° − 30°) = <span class="frac"><span>√2</span><span>2</span></span>·<span class="frac"><span>√3</span><span>2</span></span> + <span class="frac"><span>√2</span><span>2</span></span>·<span class="frac"><span>1</span><span>2</span></span> = <b><span class="frac"><span>√6 + √2</span><span>4</span></span></b></div>
      solution: "<div class=\"worked__math\">cos(45° − 30°) = <span class=\"frac\"><span>√2</span><span>2</span></span>·<span class=\"frac\"><span>√3</span><span>2</span></span> + <span class=\"frac\"><span>√2</span><span>2</span></span>·<span class=\"frac\"><span>1</span><span>2</span></span> = <b><span class=\"frac\"><span>√6 + √2</span><span>4</span></span></b></div>",
      misconception: {
        // EN (option B): (√6 − √2)/4 is sin 15° = cos 75°, because cos(A − B) has a PLUS sign: cos A cos B + sin A sin B.
        "1": "(√6 − √2)/4는 sin 15° = cos 75°예요. cos(A − B) = cos A cos B + sin A sin B이므로 가운데가 더하기예요.",
        // EN (option C): You treated cos 45° and sin 45° as 1, but each is √2/2, so the result is (√2/2)(√3/2 + 1/2) = (√6 + √2)/4.
        "2": "cos 45°와 sin 45°를 1로 계산했어요. 둘 다 √2/2이므로 결과는 (√2/2)(√3/2 + 1/2) = (√6 + √2)/4예요.",
        // EN (option D): Using the half-angle identity gives √(2 + √3) / 2, with denominator 2, not 4.
        "3": "반각 공식을 쓰면 분모가 4가 아니라 2인 √(2 + √3) / 2가 나와요.",
      },
    },

    // ── t3-2-q017 · short · challenge · AHL · AHL 3.10 · 5 marks
    "t3-2-q017": {
      // EN: <p><strong>[AHL · Paper 1]</strong> In triangle <span class="chem">ABC</span>, none of the angles is <span class="mono">90°</span>. Using the compound-angle identity for <span class="chem">tan(A + B)</span> and the fact that <span class="chem">A + B + C = pi</span>, prove that <span class="chem">tan A + tan B + tan C = tan A tan B tan C</span>.</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> 삼각형 <span class=\"chem\">ABC</span>의 세 각이 모두 <span class=\"mono\">90°</span>가 아니다. <span class=\"chem\">tan(A + B)</span>의 덧셈정리와 <span class=\"chem\">A + B + C = pi</span>임을 이용하여 <span class=\"chem\">tan A + tan B + tan C = tan A tan B tan C</span>임을 증명하시오.</p>",
      hints: [
        // EN: Start with <span class="chem">A + B = pi - C</span> and take <span class="chem">tan</span> of both sides.
        "<span class=\"chem\">A + B = pi - C</span>에서 시작하여 양변에 <span class=\"chem\">tan</span>를 취하세요.",
        // EN: Recall that <span class="chem">tan(pi - C) = -tan C</span>.
        "<span class=\"chem\">tan(pi - C) = -tan C</span>임을 떠올리세요.",
      ],
      // EN: <p>Since <i>A</i> + <i>B</i> = <i>π</i> − <i>C</i>, taking tan of both sides gives (tan <i>A</i> + tan <i>B</i>)/(1 − tan <i>A</i> tan <i>B</i>) = −tan <i>C</i>, which rearranges to tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i>.</p>
      answer: "<p><i>A</i> + <i>B</i> = <i>π</i> − <i>C</i>이므로 양변에 tan를 취하면 (tan <i>A</i> + tan <i>B</i>)/(1 − tan <i>A</i> tan <i>B</i>) = −tan <i>C</i>이고, 정리하면 tan <i>A</i> + tan <i>B</i> + tan <i>C</i> = tan <i>A</i> tan <i>B</i> tan <i>C</i>가 돼요.</p>",
      markscheme: [
        // EN: M1: Write A + B = π − C from the angle sum of a triangle.
        "M1: 삼각형의 내각의 합으로부터 A + B = π − C를 세움.",
        // EN: A1: Apply tangent to both sides: tan(A + B) = tan(π − C) = −tan C.
        "A1: 양변에 탄젠트를 적용함: tan(A + B) = tan(π − C) = −tan C.",
        // EN: M1: Expand the LHS using the compound-angle formula: (tan A + tan B) / (1 − tan A tan B) = −tan C.
        "M1: 좌변을 덧셈정리로 전개함: (tan A + tan B) / (1 − tan A tan B) = −tan C.",
        // EN: M1: Multiply both sides by (1 − tan A tan B): tan A + tan B = −tan C + tan A tan B tan C.
        "M1: 양변에 (1 − tan A tan B)를 곱함: tan A + tan B = −tan C + tan A tan B tan C.",
        // EN: A1: Rearrange to obtain tan A + tan B + tan C = tan A tan B tan C (AG).
        "A1: 이항하여 tan A + tan B + tan C = tan A tan B tan C를 얻음 (AG).",
      ],
    },

    // ── t3-2-q018 · mcq · exam · AHL · AHL 3.11 · 4 marks
    "t3-2-q018": {
      // EN: <p><strong>[AHL · Paper 1]</strong> Given that <span class="chem">sin x = k</span>, where <span class="chem">0 &lt; x &lt; pi/2</span>, which expression is equal to <span class="chem">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span>?</p>
      stem: "<p><strong>[AHL · Paper 1]</strong> <span class=\"chem\">sin x = k</span> (단, <span class=\"chem\">0 &lt; x &lt; pi/2</span>)일 때, <span class=\"chem\">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span>와 같은 식은 무엇인가요?</p>",
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
        "대칭 항등식 <span class=\"chem\">sin(pi - x) = sin x</span>, <span class=\"chem\">cos(pi/2 + x) = -sin x</span>, <span class=\"chem\">tan(pi + x) = tan x</span>를 이용하세요.",
        // EN: Since <span class="chem">x</span> is acute, <span class="chem">cos x = sqrt(1 - k^2)</span>, so <span class="chem">tan x = k / sqrt(1 - k^2)</span>.
        "<span class=\"chem\">x</span>가 예각이므로 <span class=\"chem\">cos x = sqrt(1 - k^2)</span>이고, 따라서 <span class=\"chem\">tan x = k / sqrt(1 - k^2)</span>예요.",
      ],
      // EN: <div class="worked__math">sin(<i>π</i> − <i>x</i>) + cos(<span class="frac"><span><i>π</i></span><span>2</span></span> + <i>x</i>) + tan(<i>π</i> + <i>x</i>) = <i>k</i> − <i>k</i> + tan <i>x</i> = <b><span class="frac"><span><i>k</i></span><span>√(1 − <i>k</i><sup>2</sup>)</span></span></b></div>
      solution: "<div class=\"worked__math\">sin(<i>π</i> − <i>x</i>) + cos(<span class=\"frac\"><span><i>π</i></span><span>2</span></span> + <i>x</i>) + tan(<i>π</i> + <i>x</i>) = <i>k</i> − <i>k</i> + tan <i>x</i> = <b><span class=\"frac\"><span><i>k</i></span><span>√(1 − <i>k</i><sup>2</sup>)</span></span></b></div>",
      misconception: {
        // EN (option B): cos(π/2 + x) = −sin x, not +sin x: adding π/2 moves the point into the second quadrant, where cosine is negative.
        "1": "cos(π/2 + x)는 +sin x가 아니라 −sin x예요. π/2를 더하면 점이 제2사분면으로 옮겨 가고, 거기서 코사인은 음수예요.",
        // EN (option C): tan has period π, so tan(π + x) = +tan x. The half-turn changes the sign of both sin and cos, so their ratio keeps its sign.
        "2": "tan의 주기는 π이므로 tan(π + x) = +tan x예요. 반 바퀴 회전하면 sin과 cos의 부호가 모두 바뀌므로 그 비의 부호는 그대로예요.",
        // EN (option D): sin(π − x) = +sin x, because the sine graph is symmetric about x = π/2. Only cos(π/2 + x) contributes −k.
        "3": "사인 그래프는 x = π/2에 대해 대칭이므로 sin(π − x) = +sin x예요. −k가 되는 것은 cos(π/2 + x)뿐이에요.",
      },
    },

    // ── t3-2-q019 · numeric · exam · SL · SL 3.7, 3.8 · 4 marks
    "t3-2-q019": {
      // EN: <p><strong>[Paper 1 — No GDC]</strong> How many solutions does the equation <span class="chem">tan(2x) = sqrt(3)</span> have in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>?</p>
      stem: "<p><strong>[Paper 1 — No GDC]</strong> 방정식 <span class=\"chem\">tan(2x) = sqrt(3)</span>는 구간 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 해를 몇 개 가지나요?</p>",
      hints: [
        // EN: Let <span class="chem">u = 2x</span>, so <span class="chem">0 &lt;= u &lt;= 4pi</span>. The graph of <span class="chem">tan u</span> has period <span class="chem">pi</span>, so <span class="chem">tan u = sqrt(3)</span> has one solution in each interval of length <span class="chem">pi</span>.
        "<span class=\"chem\">u = 2x</span>로 놓으면 <span class=\"chem\">0 &lt;= u &lt;= 4pi</span>예요. <span class=\"chem\">tan u</span>의 그래프는 주기가 <span class=\"chem\">pi</span>이므로 <span class=\"chem\">tan u = sqrt(3)</span>는 길이가 <span class=\"chem\">pi</span>인 구간마다 해를 하나씩 가져요.",
        // EN: List <span class="chem">u = pi/3 + k*pi</span> for <span class="chem">k = 0, 1, 2, ...</span> while <span class="chem">u &lt;= 4pi</span>.
        "<span class=\"chem\">k = 0, 1, 2, ...</span>에 대해 <span class=\"chem\">u = pi/3 + k*pi</span>를 <span class=\"chem\">u &lt;= 4pi</span>인 동안 나열하세요.",
      ],
      // EN: <div class="worked__math"><i>u</i> = 2<i>x</i> ∈ [0, 4<i>π</i>]: &nbsp; <i>u</i> = <span class="frac"><span><i>π</i></span><span>3</span></span>, <span class="frac"><span>4<i>π</i></span><span>3</span></span>, <span class="frac"><span>7<i>π</i></span><span>3</span></span>, <span class="frac"><span>10<i>π</i></span><span>3</span></span> ⇒ <i>x</i> = <span class="frac"><span><i>π</i></span><span>6</span></span>, <span class="frac"><span>2<i>π</i></span><span>3</span></span>, <span class="frac"><span>7<i>π</i></span><span>6</span></span>, <span class="frac"><span>5<i>π</i></span><span>3</span></span>, so there are <b>4</b> solutions.</div>
      solution: "<div class=\"worked__math\"><i>u</i> = 2<i>x</i> ∈ [0, 4<i>π</i>]: &nbsp; <i>u</i> = <span class=\"frac\"><span><i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>4<i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>7<i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>10<i>π</i></span><span>3</span></span>  ⇒  <i>x</i> = <span class=\"frac\"><span><i>π</i></span><span>6</span></span>, <span class=\"frac\"><span>2<i>π</i></span><span>3</span></span>, <span class=\"frac\"><span>7<i>π</i></span><span>6</span></span>, <span class=\"frac\"><span>5<i>π</i></span><span>3</span></span>이므로 해는 <b>4</b>개예요.</div>",
    },

  }
});
