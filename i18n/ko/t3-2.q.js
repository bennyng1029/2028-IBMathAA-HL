/* t3-2.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't3-2.q', {
  questions: {

    // ── t3-2-q001 · mcq · foundation · SL · SL 3.5 · 1 mark
    "t3-2-q001": {
      // EN: <p>What is the exact value of <span class="chem">sin(5*pi/6) + cos(2*pi/3)</span>?</p>
      stem: "<p><span class=\"chem\">sin(5*pi/6) + cos(2*pi/3)</span>의 정확한 값은 얼마인가요?</p>",
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
      // EN: <p>Given that <span class="chem">cos theta = -3/5</span> and <span class="chem">pi/2 &lt; theta &lt; pi</span>, find the exact value of <span class="chem">sin 2theta</span>.</p>
      stem: "<p><span class=\"chem\">cos theta = -3/5</span>이고 <span class=\"chem\">pi/2 &lt; theta &lt; pi</span>일 때, <span class=\"chem\">sin 2theta</span>의 정확한 값을 구하시오 (Find).</p>",
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
      // EN: <p>What is the exact value of <span class="chem">arccos(-1/2) + arcsin(-1/2)</span>?</p>
      stem: "<p><span class=\"chem\">arccos(-1/2) + arcsin(-1/2)</span>의 정확한 값은 얼마인가요?</p>",
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
      // EN: <p>Given that <span class="chem">tan theta = 3/4</span>, find the exact value of <span class="chem">sec^2 theta</span>.</p>
      stem: "<p><span class=\"chem\">tan theta = 3/4</span>일 때, <span class=\"chem\">sec^2 theta</span>의 정확한 값을 구하시오 (Find).</p>",
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

    // ── t3-2-q008 · mcq · exam · SL · SL 3.8 · 2 marks
    "t3-2-q008": {
      // EN: <p>Find the complete set of solutions to <span class="chem">sin 2x = sin x</span> on the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>
      stem: "<p>구간 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 방정식 <span class=\"chem\">sin 2x = sin x</span>의 모든 해를 구하시오 (Find).</p>",
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
      // EN: <p>Acute angles <span class="chem">A</span> and <span class="chem">B</span> satisfy <span class="chem">tan A = 1/4</span> and <span class="chem">tan B = 3/5</span>. Find the exact value of <span class="chem">tan(A + B)</span>.</p>
      stem: "<p>두 예각 <span class=\"chem\">A</span>, <span class=\"chem\">B</span>가 <span class=\"chem\">tan A = 1/4</span>, <span class=\"chem\">tan B = 3/5</span>를 만족해요. <span class=\"chem\">tan(A + B)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Use the compound-angle identity <span class="chem">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>.
        "덧셈정리 <span class=\"chem\">tan(A + B) = (tan A + tan B) / (1 - tan A tan B)</span>를 사용하세요.",
        // EN: Calculate <span class="chem">1/4 + 3/5 = 17/20</span> and <span class="chem">1 - (1/4)(3/5) = 17/20</span>.
        "<span class=\"chem\">1/4 + 3/5 = 17/20</span>과 <span class=\"chem\">1 - (1/4)(3/5) = 17/20</span>을 계산하세요.",
      ],
      // EN: <div class="worked__math">tan(<i>A</i> + <i>B</i>) = <span class="frac"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class="frac"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>
      solution: "<div class=\"worked__math\">tan(<i>A</i> + <i>B</i>) = <span class=\"frac\"><span>1/4 + 3/5</span><span>1 − (1/4)(3/5)</span></span> = <span class=\"frac\"><span>17/20</span><span>17/20</span></span> = <b>1</b></div>",
    },

    // ── t3-2-q011 · mcq · exam · AHL · AHL 3.9 · 2 marks
    "t3-2-q011": {
      // EN: <p>Solving the equation <span class="chem">2 sec^2 x - 3 tan x - 4 = 0</span> leads to which quadratic equation in <span class="chem">tan x</span>?</p>
      stem: "<p>방정식 <span class=\"chem\">2 sec^2 x - 3 tan x - 4 = 0</span>을 정리하면 <span class=\"chem\">tan x</span>에 대한 어떤 이차방정식이 되나요?</p>",
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

    // ── t3-2-q012 · mcq · exam · AHL · AHL 3.9 · 2 marks
    "t3-2-q012": {
      // EN: <p>For <span class="chem">0 &lt; x &lt; 1</span>, which algebraic expression is identically equal to <span class="chem">sin(2 arccos x)</span>?</p>
      stem: "<p><span class=\"chem\">0 &lt; x &lt; 1</span>일 때, <span class=\"chem\">sin(2 arccos x)</span>와 항상 같은 대수적 식은 무엇인가요?</p>",
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
      // EN: <p>Prove the identity <span class="chem">(sin 2theta) / (1 + cos 2theta) = tan theta</span>, and hence find the exact value of <span class="chem">tan(pi/8)</span> in the form <span class="chem">sqrt(a) - b</span>.</p>
      stem: "<p>항등식 <span class=\"chem\">(sin 2theta) / (1 + cos 2theta) = tan theta</span>를 증명하고, 이를 이용하여 <span class=\"chem\">tan(pi/8)</span>의 정확한 값을 <span class=\"chem\">sqrt(a) - b</span> 꼴로 구하시오 (Find).</p>",
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
      // EN: <p>Solve the equation <span class="chem">arctan(x) + arctan(2x) = pi/4</span> for <span class="chem">x &gt; 0</span>. Give your answer in the form <span class="chem">(a + sqrt(b))/c</span>, where <span class="chem">a, b, c</span> are integers.</p>
      stem: "<p><span class=\"chem\">x &gt; 0</span>일 때 방정식 <span class=\"chem\">arctan(x) + arctan(2x) = pi/4</span>를 푸시오. 답을 <span class=\"chem\">(a + sqrt(b))/c</span> 꼴로 나타내시오. 단, <span class=\"chem\">a, b, c</span>는 정수이다.</p>",
      hints: [
        // EN: Decode: a sum of two arctans is an angle, so take <span class="chem">tan</span> of both sides: <span class="chem">tan(A + B)</span> turns the equation into algebra in <span class="chem">x</span>. The condition <span class="chem">x &gt; 0</span> tells you which root to keep.
        "해석: 두 arctan의 합은 하나의 각이므로 양변에 <span class=\"chem\">tan</span>을 취하세요. <span class=\"chem\">tan(A + B)</span> 공식이 방정식을 <span class=\"chem\">x</span>에 대한 대수 방정식으로 바꿉니다. 조건 <span class=\"chem\">x &gt; 0</span>으로 어느 근을 택할지 정합니다.",
        // EN: Take the tangent of both sides using <span class="chem">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span>: <span class="chem">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>.
        "<span class=\"chem\">tan(A + B) = (tan A + tan B)/(1 - tan A tan B)</span>를 이용해 양변에 탄젠트를 취하세요: <span class=\"chem\">(x + 2x)/(1 - 2x^2) = tan(pi/4) = 1</span>.",
        // EN: Solve the quadratic <span class="chem">2x^2 + 3x - 1 = 0</span> and keep the positive root <span class="chem">x = (-3 + sqrt(17))/4</span>.
        "이차방정식 <span class=\"chem\">2x^2 + 3x - 1 = 0</span>을 풀고 양수 근 <span class=\"chem\">x = (-3 + sqrt(17))/4</span>를 선택하세요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class="frac"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>x</i> + 2<i>x</i></span><span>1 − 2<i>x</i><sup>2</sup></span></span> = 1 ⇒ 2<i>x</i><sup>2</sup> + 3<i>x</i> − 1 = 0 ⇒ <i>x</i> = <b><span class=\"frac\"><span>−3 + √17</span><span>4</span></span></b> (≈ 0.281)</div>",
    },

    // ── t3-2-q016 · mcq · exam · AHL · AHL 3.10 · 2 marks
    "t3-2-q016": {
      // EN: <p>What is the exact value of <span class="chem">cos 15° = cos(pi/12)</span>?</p>
      stem: "<p><span class=\"chem\">cos 15° = cos(pi/12)</span>의 정확한 값은 얼마인가요?</p>",
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
      // EN: <p>In triangle <span class="chem">ABC</span>, none of the angles is <span class="mono">90°</span>. Using the compound-angle identity for <span class="chem">tan(A + B)</span> and the fact that <span class="chem">A + B + C = pi</span>, prove that <span class="chem">tan A + tan B + tan C = tan A tan B tan C</span>.</p>
      stem: "<p>삼각형 <span class=\"chem\">ABC</span>의 세 각이 모두 <span class=\"mono\">90°</span>가 아니다. <span class=\"chem\">tan(A + B)</span>의 덧셈정리와 <span class=\"chem\">A + B + C = pi</span>임을 이용하여 <span class=\"chem\">tan A + tan B + tan C = tan A tan B tan C</span>임을 증명하시오.</p>",
      hints: [
        // EN: Decode: the condition <span class="chem">A + B + C = pi</span> links the three angles, so write <span class="chem">C = pi - (A + B)</span>. Then the <span class="chem">tan(A + B)</span> identity turns the statement into algebra in <span class="chem">tan A</span>, <span class="chem">tan B</span> and <span class="chem">tan C</span>.
        "해석: 조건 <span class=\"chem\">A + B + C = pi</span>는 세 각을 연결하므로 <span class=\"chem\">C = pi - (A + B)</span>로 쓰세요. 그러면 <span class=\"chem\">tan(A + B)</span> 공식이 증명할 식을 <span class=\"chem\">tan A</span>, <span class=\"chem\">tan B</span>, <span class=\"chem\">tan C</span>에 대한 대수 문제로 바꿉니다.",
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
        // EN: M1: Multiply both sides by (1 − tan A tan B).
        "M1: 양변에 (1 − tan A tan B)를 곱함.",
        // EN: A1: tan A + tan B = −tan C + tan A tan B tan C, which rearranges to tan A + tan B + tan C = tan A tan B tan C (AG).
        "A1: tan A + tan B = −tan C + tan A tan B tan C이고, 이항하면 tan A + tan B + tan C = tan A tan B tan C를 얻음 (AG).",
      ],
    },

    // ── t3-2-q018 · mcq · exam · AHL · AHL 3.11 · 2 marks
    "t3-2-q018": {
      // EN: <p>Given that <span class="chem">sin x = k</span>, where <span class="chem">0 &lt; x &lt; pi/2</span>, which expression is equal to <span class="chem">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span>?</p>
      stem: "<p><span class=\"chem\">sin x = k</span> (단, <span class=\"chem\">0 &lt; x &lt; pi/2</span>)일 때, <span class=\"chem\">sin(pi - x) + cos(pi/2 + x) + tan(pi + x)</span>와 같은 식은 무엇인가요?</p>",
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
      // EN: <p>How many solutions does the equation <span class="chem">tan(2x) = sqrt(3)</span> have in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>?</p>
      stem: "<p>방정식 <span class=\"chem\">tan(2x) = sqrt(3)</span>는 구간 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 해를 몇 개 가지나요?</p>",
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

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't3-2.q', {
  questions: {

    // ── t3-2-q020 · numeric · exam · SL · SL 3.7, 3.8 · 4 marks
    "t3-2-q020": {
      // EN: <p>A Ferris wheel has a diameter of 90 m and its lowest point is 5 m above the ground. It turns at a constant speed and completes one revolution every 18 minutes. A rider boards at the lowest point at <span class="chem">t = 0</span>. The height of the rider above the ground, <span class="chem">h</span> metres, <span class="chem">t</span> minutes after boarding is modelled by <span class="chem">h(t) = 50 - 45 cos((pi/9)t)</span>.</p><p>Find the length of time, in minutes, during one revolution for which the rider is more than 70 m above the ground. Give your answer to 3 significant figures.</p>
      stem: "<p>지름이 90 m인 대관람차가 있고, 가장 낮은 지점은 지면에서 5 m 높이에 있어요. 대관람차는 일정한 속력으로 돌며 18분마다 한 바퀴를 돌아요. 한 승객이 <span class=\"chem\">t = 0</span>일 때 가장 낮은 지점에서 탑승해요. 탑승하고 <span class=\"chem\">t</span>분 후 승객의 지면으로부터의 높이 <span class=\"chem\">h</span> 미터는 <span class=\"chem\">h(t) = 50 - 45 cos((pi/9)t)</span>로 모델링돼요.</p><p>한 바퀴 도는 동안 승객이 지면에서 70 m보다 높은 곳에 있는 시간의 길이(분)를 구하시오 (Find). 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Decode: you are asked for a duration, not a time. Find the two times in <span class="chem">0 &lt;= t &lt;= 18</span> at which <span class="chem">h(t) = 70</span>, then subtract.
        "해석: 묻는 것은 시각이 아니라 시간의 길이예요. <span class=\"chem\">0 &lt;= t &lt;= 18</span>에서 <span class=\"chem\">h(t) = 70</span>이 되는 두 시각을 구한 다음 빼세요.",
        // EN: On your GDC, graph <span class="chem">y = 50 - 45 cos((pi/9)x)</span> and <span class="chem">y = 70</span> for <span class="chem">0 &lt;= x &lt;= 18</span> and find both intersections.
        "GDC에서 <span class=\"chem\">0 &lt;= x &lt;= 18</span>에 대해 <span class=\"chem\">y = 50 - 45 cos((pi/9)x)</span>와 <span class=\"chem\">y = 70</span>의 그래프를 그리고 두 교점을 모두 구하세요.",
        // EN: Or by hand: <span class="chem">cos((pi/9)t) = -4/9</span>, so <span class="chem">t_1 = (9/pi) arccos(-4/9)</span> and, by symmetry about <span class="chem">t = 9</span>, <span class="chem">t_2 = 18 - t_1</span>.
        "손으로 풀려면: <span class=\"chem\">cos((pi/9)t) = -4/9</span>이므로 <span class=\"chem\">t_1 = (9/pi) arccos(-4/9)</span>이고, <span class=\"chem\">t = 9</span>에 대한 대칭성에 의해 <span class=\"chem\">t_2 = 18 - t_1</span>이에요.",
      ],
      // EN: <p><span class="chem">50 - 45 cos((pi/9)t) = 70</span> gives <span class="chem">cos((pi/9)t) = -4/9</span>. The GDC gives <span class="chem">t_1 = 5.8194…</span> and <span class="chem">t_2 = 12.1806…</span> minutes.</p><p>Time above 70 m <span class="chem">= t_2 - t_1 = 6.3612…</span>, so <b>6.36 minutes</b>.</p>
      solution: "<p><span class=\"chem\">50 - 45 cos((pi/9)t) = 70</span>에서 <span class=\"chem\">cos((pi/9)t) = -4/9</span>예요. GDC로 <span class=\"chem\">t_1 = 5.8194…</span>분과 <span class=\"chem\">t_2 = 12.1806…</span>분을 얻어요.</p><p>70 m보다 높은 시간 <span class=\"chem\">= t_2 - t_1 = 6.3612…</span>이므로 <b>6.36분</b>이에요.</p>",
    },

    // ── t3-2-q021 · short · exam · SL · SL 3.7, 3.8 · 7 marks
    "t3-2-q021": {
      // EN: <p>The mean monthly temperature in a town, <span class="chem">T</span> °C, is modelled by <span class="chem">T(t) = a cos(b(t - c)) + d</span>, where <span class="chem">t</span> is the month number (<span class="chem">t = 1</span> for January, <span class="chem">t = 12</span> for December) and <span class="chem">a, b, c, d &gt; 0</span>. The highest mean temperature, 27.8 °C, occurs in July (<span class="chem">t = 7</span>) and the lowest, 4.2 °C, occurs in January (<span class="chem">t = 1</span>). The pattern repeats every 12 months.</p><p>(a) Write down the value of <span class="chem">a</span> and the value of <span class="chem">d</span>. [2]</p><p>(b) Find the value of <span class="chem">b</span> and write down a possible value of <span class="chem">c</span>, where <span class="chem">0 &lt; c &lt; 12</span>. [2]</p><p>(c) Use the model to find the length of time, in months, during one year for which the mean temperature is above 20 °C. [3]</p>
      stem: "<p>어느 마을의 월평균 기온 <span class=\"chem\">T</span> °C는 <span class=\"chem\">T(t) = a cos(b(t - c)) + d</span>로 모델링돼요. 여기서 <span class=\"chem\">t</span>는 월 번호(<span class=\"chem\">t = 1</span>은 1월, <span class=\"chem\">t = 12</span>는 12월)이고 <span class=\"chem\">a, b, c, d &gt; 0</span>이에요. 가장 높은 월평균 기온 27.8 °C는 7월(<span class=\"chem\">t = 7</span>)에, 가장 낮은 4.2 °C는 1월(<span class=\"chem\">t = 1</span>)에 나타나요. 이 패턴은 12개월마다 반복돼요.</p><p>(a) <span class=\"chem\">a</span>의 값과 <span class=\"chem\">d</span>의 값을 쓰시오 (Write down). [2]</p><p>(b) <span class=\"chem\">b</span>의 값을 구하고 (Find), <span class=\"chem\">0 &lt; c &lt; 12</span>인 <span class=\"chem\">c</span>의 가능한 값 하나를 쓰시오. [2]</p><p>(c) 이 모델을 이용하여 한 해 중 월평균 기온이 20 °C보다 높은 기간의 길이(개월)를 구하시오. [3]</p>",
      hints: [
        // EN: Decode: (a) and (b) are the standard max/min recipe; (c) asks for the length of the interval of <span class="chem">t</span> on which <span class="chem">T(t) &gt; 20</span>.
        "해석: (a)와 (b)는 최댓값/최솟값으로 모델을 세우는 표준 절차예요. (c)는 <span class=\"chem\">T(t) &gt; 20</span>인 <span class=\"chem\">t</span>의 구간의 길이를 묻고 있어요.",
        // EN: Amplitude <span class="chem">= (max - min)/2</span>, principal axis <span class="chem">= (max + min)/2</span>, and with <span class="chem">a &gt; 0</span> the cosine peaks at <span class="chem">t = c</span>.
        "진폭 <span class=\"chem\">= (max - min)/2</span>, 중심축 <span class=\"chem\">= (max + min)/2</span>이고, <span class=\"chem\">a &gt; 0</span>이면 코사인은 <span class=\"chem\">t = c</span>에서 최대가 돼요.",
        // EN: Graph <span class="chem">T(t)</span> and <span class="chem">y = 20</span> for <span class="chem">1 &lt;= t &lt;= 13</span>; subtract the two intersection values.
        "<span class=\"chem\">1 &lt;= t &lt;= 13</span>에서 <span class=\"chem\">T(t)</span>와 <span class=\"chem\">y = 20</span>의 그래프를 그리고 두 교점의 값을 빼세요.",
      ],
      // EN: <p>(a) <span class="chem">a = 11.8</span>, <span class="chem">d = 16</span>. (b) <span class="chem">b = 2pi/12 = pi/6</span>; <span class="chem">c = 7</span>. (c) <span class="chem">T(t) = 20</span> when <span class="chem">t = 4.66</span> and <span class="chem">t = 9.34</span>, so <span class="chem">T &gt; 20</span> for about <b>4.68 months</b>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 11.8</span>, <span class=\"chem\">d = 16</span>. (b) <span class=\"chem\">b = 2pi/12 = pi/6</span>; <span class=\"chem\">c = 7</span>. (c) <span class=\"chem\">t = 4.66</span>과 <span class=\"chem\">t = 9.34</span>일 때 <span class=\"chem\">T(t) = 20</span>이므로, <span class=\"chem\">T &gt; 20</span>인 기간은 약 <b>4.68개월</b>이에요.</p>",
      markscheme: [
        // EN: A1: a = (27.8 − 4.2)/2 = 11.8.
        "A1: a = (27.8 − 4.2)/2 = 11.8.",
        // EN: A1: d = (27.8 + 4.2)/2 = 16.
        "A1: d = (27.8 + 4.2)/2 = 16.",
        // EN: A1: Period 12 months, so b = 2π/12 = π/6 (≈ 0.524).
        "A1: 주기가 12개월이므로 b = 2π/12 = π/6 (≈ 0.524).",
        // EN: A1: c = 7 (a maximum of a positive cosine occurs at t = c).
        "A1: c = 7 (양의 코사인의 최댓값은 t = c에서 나타남).",
        // EN: M1: Set 11.8 cos((π/6)(t − 7)) + 16 = 20, or intersect the graph with T = 20 on a GDC.
        "M1: 11.8 cos((π/6)(t − 7)) + 16 = 20으로 놓거나, GDC에서 그래프와 T = 20의 교점을 구함.",
        // EN: A1: t = 4.66 and t = 9.34.
        "A1: t = 4.66, t = 9.34.",
        // EN: A1: Length of time = 9.34 − 4.66 = 4.68 months.
        "A1: 기간의 길이 = 9.34 − 4.66 = 4.68개월.",
      ],
    },

    // ── t3-2-q022 · numeric · exam · SL · SL 3.8 · 4 marks
    "t3-2-q022": {
      // EN: <p>Consider the equation <span class="chem">4 sin(2x) + 1 = x</span>, where <span class="chem">x</span> is in radians and <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p><p>The equation has three solutions in this interval. Find the largest solution, giving your answer to 3 significant figures.</p>
      stem: "<p>방정식 <span class=\"chem\">4 sin(2x) + 1 = x</span>를 생각해요. 여기서 <span class=\"chem\">x</span>는 라디안이고 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>예요.</p><p>이 방정식은 이 구간에서 세 개의 해를 가져요. 가장 큰 해를 구하고 (Find), 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: This equation mixes a trigonometric function with a linear one, so it cannot be solved algebraically: solve it graphically on your GDC.
        "이 방정식은 삼각함수와 일차함수가 섞여 있어서 대수적으로 풀 수 없어요. GDC에서 그래프로 푸세요.",
        // EN: Graph <span class="chem">y = 4 sin(2x) + 1</span> and <span class="chem">y = x</span> on <span class="chem">0 &lt;= x &lt;= 2pi</span> (radian mode) and find the intersection with the largest <span class="chem">x</span>-coordinate.
        "<span class=\"chem\">0 &lt;= x &lt;= 2pi</span>(라디안 모드)에서 <span class=\"chem\">y = 4 sin(2x) + 1</span>과 <span class=\"chem\">y = x</span>의 그래프를 그리고, <span class=\"chem\">x</span>좌표가 가장 큰 교점을 구하세요.",
      ],
      // EN: <p>The graphs of <span class="chem">y = 4 sin(2x) + 1</span> and <span class="chem">y = x</span> meet at <span class="chem">x = 1.507…, 3.475…, 4.240…</span>. For <span class="chem">x &gt; 5</span> the line is above the maximum value 5 of the sine curve, so there are no more solutions. Largest solution: <b>x = 4.24</b>.</p>
      solution: "<p><span class=\"chem\">y = 4 sin(2x) + 1</span>과 <span class=\"chem\">y = x</span>의 그래프는 <span class=\"chem\">x = 1.507…, 3.475…, 4.240…</span>에서 만나요. <span class=\"chem\">x &gt; 5</span>이면 직선이 사인 곡선의 최댓값 5보다 위에 있으므로 더 이상 해가 없어요. 가장 큰 해: <b>x = 4.24</b>.</p>",
    },

    // ── t3-2-q023 · numeric · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q023": {
      // EN: <p>Solve the equation <span class="chem">5 cos^2 x - 2 sin x - 3 = 0</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>, where <span class="chem">x</span> is in radians.</p><p>The equation has four solutions in this interval. Find the largest one, giving your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 방정식 <span class=\"chem\">5 cos^2 x - 2 sin x - 3 = 0</span>을 푸시오 (Solve). 여기서 <span class=\"chem\">x</span>는 라디안이에요.</p><p>이 방정식은 이 구간에서 네 개의 해를 가져요. 가장 큰 해를 구하고, 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Replace <span class="chem">cos^2 x</span> with <span class="chem">1 - sin^2 x</span> to get a quadratic in <span class="chem">sin x</span>.
        "<span class=\"chem\">cos^2 x</span>를 <span class=\"chem\">1 - sin^2 x</span>로 바꾸어 <span class=\"chem\">sin x</span>에 대한 이차방정식을 만드세요.",
        // EN: You should get <span class="chem">5 sin^2 x + 2 sin x - 2 = 0</span>, so <span class="chem">sin x = (-1 +- sqrt(11))/5</span>. Both values lie in <span class="chem">[-1, 1]</span>.
        "<span class=\"chem\">5 sin^2 x + 2 sin x - 2 = 0</span>이 나와야 하므로 <span class=\"chem\">sin x = (-1 +- sqrt(11))/5</span>예요. 두 값 모두 <span class=\"chem\">[-1, 1]</span> 안에 있어요.",
        // EN: The negative value <span class="chem">sin x = -0.8633…</span> gives solutions in quadrants III and IV: <span class="chem">x = pi + alpha</span> and <span class="chem">x = 2pi - alpha</span>, where <span class="chem">alpha = arcsin(0.8633…)</span>.
        "음수 값 <span class=\"chem\">sin x = -0.8633…</span>은 제3사분면과 제4사분면의 해 <span class=\"chem\">x = pi + alpha</span>와 <span class=\"chem\">x = 2pi - alpha</span>를 줘요. 여기서 <span class=\"chem\">alpha = arcsin(0.8633…)</span>이에요.",
      ],
      // EN: <p><span class="chem">5(1 - sin^2 x) - 2 sin x - 3 = 0</span> gives <span class="chem">5 sin^2 x + 2 sin x - 2 = 0</span>, so <span class="chem">sin x = 0.4633…</span> or <span class="chem">sin x = -0.8633…</span>.</p><p><span class="chem">sin x = 0.4633…</span>: <span class="chem">x = 0.482, 2.66</span>. <span class="chem">sin x = -0.8633…</span>: with <span class="chem">alpha = 1.0418…</span>, <span class="chem">x = pi + alpha = 4.18</span> and <span class="chem">x = 2pi - alpha = 5.241…</span>.</p><p>Largest solution: <b>x = 5.24</b>.</p>
      solution: "<p><span class=\"chem\">5(1 - sin^2 x) - 2 sin x - 3 = 0</span>에서 <span class=\"chem\">5 sin^2 x + 2 sin x - 2 = 0</span>이므로 <span class=\"chem\">sin x = 0.4633…</span> 또는 <span class=\"chem\">sin x = -0.8633…</span>이에요.</p><p><span class=\"chem\">sin x = 0.4633…</span>: <span class=\"chem\">x = 0.482, 2.66</span>. <span class=\"chem\">sin x = -0.8633…</span>: <span class=\"chem\">alpha = 1.0418…</span>로 두면 <span class=\"chem\">x = pi + alpha = 4.18</span>, <span class=\"chem\">x = 2pi - alpha = 5.241…</span>.</p><p>가장 큰 해: <b>x = 5.24</b>.</p>",
    },

    // ── t3-2-q024 · short · challenge · SL · SL 3.7, 3.8 · 7 marks
    "t3-2-q024": {
      // EN: <p>Two marker buoys bob up and down on waves. The heights, in metres, of buoy A and buoy B above mean sea level <span class="chem">t</span> seconds after a recording starts are</p><p><span class="chem">h_A(t) = 0.8 sin(1.3t)</span> and <span class="chem">h_B(t) = 0.6 cos(0.9t) + 0.1</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>.</p><p>(a) Find the first time at which the two buoys are at the same height. [2]</p><p>(b) Find the total length of time during the recording for which buoy A is higher than buoy B. [3]</p><p>(c) Find the greatest vertical distance between the two buoys during the recording. [2]</p>
      stem: "<p>두 개의 표지 부표가 파도에 따라 오르내려요. 기록을 시작하고 <span class=\"chem\">t</span>초 후 부표 A와 부표 B의 평균 해수면으로부터의 높이(미터)는</p><p><span class=\"chem\">h_A(t) = 0.8 sin(1.3t)</span>, <span class=\"chem\">h_B(t) = 0.6 cos(0.9t) + 0.1</span> (<span class=\"chem\">0 &lt;= t &lt;= 10</span>)이에요.</p><p>(a) 두 부표가 처음으로 같은 높이가 되는 시각을 구하시오 (Find). [2]</p><p>(b) 기록하는 동안 부표 A가 부표 B보다 높이 있는 시간의 합을 구하시오. [3]</p><p>(c) 기록하는 동안 두 부표 사이의 수직 거리의 최댓값을 구하시오. [2]</p>",
      hints: [
        // EN: Decode: "same height" means <span class="chem">h_A = h_B</span>; "A higher than B" means the inequality <span class="chem">h_A(t) &gt; h_B(t)</span>; "vertical distance" means <span class="chem">|h_A - h_B|</span>. The two waves have different periods, so this is a GDC graphing question.
        "해석: \"같은 높이\"는 <span class=\"chem\">h_A = h_B</span>, \"A가 B보다 높다\"는 부등식 <span class=\"chem\">h_A(t) &gt; h_B(t)</span>, \"수직 거리\"는 <span class=\"chem\">|h_A - h_B|</span>를 뜻해요. 두 파동의 주기가 다르므로 GDC로 그래프를 그려 푸는 문제예요.",
        // EN: Graph the single function <span class="chem">y = h_A(t) - h_B(t)</span> for <span class="chem">0 &lt;= t &lt;= 10</span>. Its zeros answer (a), the parts above the axis answer (b).
        "<span class=\"chem\">0 &lt;= t &lt;= 10</span>에서 하나의 함수 <span class=\"chem\">y = h_A(t) - h_B(t)</span>의 그래프를 그리세요. 그 영점이 (a)의 답, 축 위에 있는 부분이 (b)의 답이에요.",
        // EN: For (c), the greatest vertical distance is the largest of |max| and |min| of <span class="chem">h_A - h_B</span> on the interval. Check the end points too.
        "(c)에서 수직 거리의 최댓값은 구간에서 <span class=\"chem\">h_A - h_B</span>의 |최댓값|과 |최솟값| 중 큰 쪽이에요. 끝점도 확인하세요.",
      ],
      // EN: <p><strong>Decoding:</strong> each phrase is a statement about <span class="chem">D(t) = h_A(t) - h_B(t)</span>: same height ⇔ <span class="chem">D = 0</span>; A higher ⇔ <span class="chem">D &gt; 0</span>; vertical distance <span class="chem">= |D|</span>.</p><p>(a) The zeros of <span class="chem">D</span> are <span class="chem">t = 0.652, 2.809, 4.626, 6.521, 9.421</span>. <span class="chem">D(0) = -0.7 &lt; 0</span>, so the first meeting is at <b>0.652 s</b>.</p><p>(b) <span class="chem">D &gt; 0</span> on <span class="chem">(0.652, 2.809)</span>, <span class="chem">(4.626, 6.521)</span>, <span class="chem">(9.421, 10]</span>: total <b>4.63 s</b>.</p><p>(c) The minimum of <span class="chem">D</span> is <span class="chem">-1.136</span> at <span class="chem">t = 8.11</span> and its maximum is smaller in size, so the greatest distance is <b>1.14 m</b>.</p>
      solution: "<p><strong>해석:</strong> 각 표현은 <span class=\"chem\">D(t) = h_A(t) - h_B(t)</span>에 대한 조건이에요: 같은 높이 ⇔ <span class=\"chem\">D = 0</span>; A가 더 높음 ⇔ <span class=\"chem\">D &gt; 0</span>; 수직 거리 <span class=\"chem\">= |D|</span>.</p><p>(a) <span class=\"chem\">D</span>의 영점은 <span class=\"chem\">t = 0.652, 2.809, 4.626, 6.521, 9.421</span>이에요. <span class=\"chem\">D(0) = -0.7 &lt; 0</span>이므로 처음 만나는 때는 <b>0.652 s</b>예요.</p><p>(b) <span class=\"chem\">(0.652, 2.809)</span>, <span class=\"chem\">(4.626, 6.521)</span>, <span class=\"chem\">(9.421, 10]</span>에서 <span class=\"chem\">D &gt; 0</span>: 합계 <b>4.63 s</b>.</p><p>(c) <span class=\"chem\">D</span>의 최솟값은 <span class=\"chem\">t = 8.11</span>에서 <span class=\"chem\">-1.136</span>이고 최댓값의 크기는 이보다 작으므로, 최대 거리는 <b>1.14 m</b>예요.</p>",
      // EN: <p>(a) <span class="chem">t = 0.652</span> s. (b) A is higher on <span class="chem">0.652 &lt; t &lt; 2.81</span>, <span class="chem">4.63 &lt; t &lt; 6.52</span> and <span class="chem">9.42 &lt; t &lt;= 10</span>: total <b>4.63 s</b>. (c) The greatest value of <span class="chem">|h_A(t) - h_B(t)|</span> is <b>1.14 m</b> (at <span class="chem">t = 8.11</span>, with B above A).</p>
      answer: "<p>(a) <span class=\"chem\">t = 0.652</span> s. (b) A가 더 높은 구간은 <span class=\"chem\">0.652 &lt; t &lt; 2.81</span>, <span class=\"chem\">4.63 &lt; t &lt; 6.52</span>, <span class=\"chem\">9.42 &lt; t &lt;= 10</span>: 합계 <b>4.63 s</b>. (c) <span class=\"chem\">|h_A(t) - h_B(t)|</span>의 최댓값은 <b>1.14 m</b>예요(<span class=\"chem\">t = 8.11</span>에서, B가 A보다 위).</p>",
      markscheme: [
        // EN: M1: Graph h_A and h_B (or h_A − h_B) on 0 ≤ t ≤ 10 and find the first intersection.
        "M1: 0 ≤ t ≤ 10에서 h_A와 h_B(또는 h_A − h_B)의 그래프를 그리고 첫 번째 교점을 구함.",
        // EN: A1: t = 0.652 s.
        "A1: t = 0.652 s.",
        // EN: M1: Find all the intersections: t = 0.652, 2.81, 4.63, 6.52, 9.42.
        "M1: 모든 교점을 구함: t = 0.652, 2.81, 4.63, 6.52, 9.42.",
        // EN: R1: Identify the intervals where h_A > h_B: (0.652, 2.81), (4.63, 6.52) and (9.42, 10).
        "R1: h_A > h_B인 구간을 찾음: (0.652, 2.81), (4.63, 6.52), (9.42, 10).",
        // EN: A1: Total time = 2.157 + 1.896 + 0.579 = 4.63 s.
        "A1: 총 시간 = 2.157 + 1.896 + 0.579 = 4.63 s.",
        // EN: M1: Graph y = |h_A(t) − h_B(t)| (or find the max and min of h_A − h_B) on 0 ≤ t ≤ 10.
        "M1: 0 ≤ t ≤ 10에서 y = |h_A(t) − h_B(t)|의 그래프를 그림(또는 h_A − h_B의 최댓값과 최솟값을 구함).",
        // EN: A1: Greatest vertical distance = 1.14 m.
        "A1: 수직 거리의 최댓값 = 1.14 m.",
      ],
    },

    // ── t3-2-q025 · numeric · challenge · SL · SL 3.7, 3.8 · 6 marks
    "t3-2-q025": {
      // EN: <p>In a northern city, the number of hours of daylight <span class="chem">D</span> on day <span class="chem">t</span> of the year (<span class="chem">t = 1</span> is 1 January; the year has 365 days) is modelled by <span class="chem">D(t) = a cos(b(t - c)) + d</span>, with <span class="chem">a, b &gt; 0</span>. The longest day, with 15.20 hours of daylight, is day 172. The shortest day, with 9.10 hours, is half a year later, and the pattern repeats every 365 days.</p><p>A day is called a "long day" if it has more than 14 hours of daylight. Using the model, find how many long days there are in one year (days 1 to 365).</p>
      stem: "<p>북쪽의 한 도시에서 한 해 중 <span class=\"chem\">t</span>번째 날의 낮의 길이 <span class=\"chem\">D</span>(시간)(<span class=\"chem\">t = 1</span>은 1월 1일; 한 해는 365일)는 <span class=\"chem\">D(t) = a cos(b(t - c)) + d</span> (<span class=\"chem\">a, b &gt; 0</span>)로 모델링돼요. 낮이 가장 긴 날은 172번째 날로 낮의 길이가 15.20시간이에요. 낮이 가장 짧은 날은 반년 후로 9.10시간이며, 이 패턴은 365일마다 반복돼요.</p><p>낮의 길이가 14시간보다 긴 날을 \"긴 날\"이라고 해요. 이 모델을 이용하여 한 해(1번째 날부터 365번째 날까지) 동안 긴 날이 며칠인지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: build the model first (amplitude, principal axis, period 365 days, maximum at <span class="chem">t = 172</span>), then solve the inequality <span class="chem">D(t) &gt; 14</span>. The answer is a number of whole days, so you must count integers, not subtract decimals.
        "해석: 먼저 모델을 세우고(진폭, 중심축, 주기 365일, <span class=\"chem\">t = 172</span>에서 최대), 그다음 부등식 <span class=\"chem\">D(t) &gt; 14</span>를 푸세요. 답은 정수인 날수이므로 소수를 빼는 것이 아니라 정수를 세어야 해요.",
        // EN: <span class="chem">a = (15.20 - 9.10)/2 = 3.05</span>, <span class="chem">d = (15.20 + 9.10)/2 = 12.15</span>, <span class="chem">b = 2pi/365</span>, <span class="chem">c = 172</span>.
        "<span class=\"chem\">a = (15.20 - 9.10)/2 = 3.05</span>, <span class=\"chem\">d = (15.20 + 9.10)/2 = 12.15</span>, <span class=\"chem\">b = 2pi/365</span>, <span class=\"chem\">c = 172</span>.",
        // EN: Solve <span class="chem">D(t) = 14</span> on a GDC: the solutions lie between consecutive whole numbers. Work out the first and last whole-number day with <span class="chem">D(t) &gt; 14</span> and count them inclusively.
        "GDC에서 <span class=\"chem\">D(t) = 14</span>를 푸세요. 해는 연속한 두 정수 사이에 있어요. <span class=\"chem\">D(t) &gt; 14</span>인 첫 번째 정수 날과 마지막 정수 날을 구하고 양 끝을 포함해서 세세요.",
      ],
      // EN: <p><strong>Decoding:</strong> "how many long days" asks for the number of integers <span class="chem">t</span> in <span class="chem">1 &lt;= t &lt;= 365</span> with <span class="chem">D(t) &gt; 14</span>.</p><p><span class="chem">D(t) = 3.05 cos((2pi/365)(t - 172)) + 12.15</span>. Solving <span class="chem">D(t) = 14</span> gives <span class="chem">t = 118.5…</span> and <span class="chem">t = 225.5…</span>. Check: <span class="chem">D(118) = 13.97</span>, <span class="chem">D(119) = 14.02</span>, <span class="chem">D(225) = 14.02</span>, <span class="chem">D(226) = 13.97</span>.</p><p>The long days are days 119 to 225 inclusive: <span class="chem">225 - 119 + 1 =</span> <b>107 days</b>.</p>
      solution: "<p><strong>해석:</strong> \"긴 날이 며칠\"은 <span class=\"chem\">1 &lt;= t &lt;= 365</span>에서 <span class=\"chem\">D(t) &gt; 14</span>를 만족하는 정수 <span class=\"chem\">t</span>의 개수를 묻는 거예요.</p><p><span class=\"chem\">D(t) = 3.05 cos((2pi/365)(t - 172)) + 12.15</span>. <span class=\"chem\">D(t) = 14</span>를 풀면 <span class=\"chem\">t = 118.5…</span>와 <span class=\"chem\">t = 225.5…</span>예요. 확인: <span class=\"chem\">D(118) = 13.97</span>, <span class=\"chem\">D(119) = 14.02</span>, <span class=\"chem\">D(225) = 14.02</span>, <span class=\"chem\">D(226) = 13.97</span>.</p><p>긴 날은 119번째 날부터 225번째 날까지(양 끝 포함)예요: <span class=\"chem\">225 - 119 + 1 =</span> <b>107일</b>.</p>",
    },

    // ── t3-2-q026 · short · exam · SL · SL 3.7, 3.8 · 9 marks
    "t3-2-q026": {
      // EN: <p>At a harbour entrance, high tide on a particular day has a depth of 6.4 m at 01:30, and the next low tide has a depth of 2.2 m at 07:45. The depth of water, <span class="chem">y</span> metres, <span class="chem">t</span> hours after midnight is modelled by <span class="chem">y(t) = a cos(b(t - 1.5)) + d</span>, where <span class="chem">a, b &gt; 0</span>.</p><p>(a) Find the values of <span class="chem">a</span>, <span class="chem">d</span> and <span class="chem">b</span>. [3]</p><p>(b) Write down the model, and verify that it gives a depth of 2.2 m at 07:45. [1]</p><p>A fishing boat needs a depth of at least 3.5 m to pass through the entrance.</p><p>(c) Find the earliest time after 07:45 at which the boat can pass through. Give your answer to the nearest minute. [3]</p><p>(d) Find the length of time, in hours and minutes, for which the boat can then pass through without stopping. [2]</p>
      stem: "<p>어느 항구 입구에서 어느 날 만조는 01:30에 수심 6.4 m이고, 그다음 간조는 07:45에 수심 2.2 m예요. 자정으로부터 <span class=\"chem\">t</span>시간 후의 수심 <span class=\"chem\">y</span> 미터는 <span class=\"chem\">y(t) = a cos(b(t - 1.5)) + d</span> (<span class=\"chem\">a, b &gt; 0</span>)로 모델링돼요.</p><p>(a) <span class=\"chem\">a</span>, <span class=\"chem\">d</span>, <span class=\"chem\">b</span>의 값을 구하시오 (Find). [3]</p><p>(b) 모델을 쓰고 (Write down), 이 모델이 07:45에 수심 2.2 m를 주는지 확인하시오 (Verify). [1]</p><p>어선이 입구를 지나가려면 수심이 적어도 3.5 m여야 해요.</p><p>(c) 07:45 이후 어선이 지나갈 수 있는 가장 이른 시각을 구하고, 분 단위까지 나타내시오. [3]</p><p>(d) 그 후 어선이 멈추지 않고 지나갈 수 있는 시간의 길이를 시간과 분으로 구하시오. [2]</p>",
      hints: [
        // EN: Decode: high and low tide give the maximum, minimum and half the period. "At least 3.5 m" means you need <span class="chem">y(t) &gt;= 3.5</span>, and times must be converted from decimal hours to clock times.
        "해석: 만조와 간조로 최댓값, 최솟값, 반주기를 알 수 있어요. \"적어도 3.5 m\"는 <span class=\"chem\">y(t) &gt;= 3.5</span>가 필요하다는 뜻이고, 시간은 소수 시간에서 시계 시각으로 바꿔야 해요.",
        // EN: 07:45 is <span class="chem">t = 7.75</span>. The time from high tide to low tide is half a period.
        "07:45는 <span class=\"chem\">t = 7.75</span>예요. 만조에서 간조까지의 시간은 반주기예요.",
        // EN: For (c), the depth rises after the low tide at 07:45. Intersect <span class="chem">y(t)</span> with <span class="chem">y = 3.5</span>; convert the decimal part of the hour to minutes by multiplying by 60.
        "(c)에서 07:45의 간조 이후 수심은 올라가요. <span class=\"chem\">y(t)</span>와 <span class=\"chem\">y = 3.5</span>의 교점을 구하고, 시간의 소수 부분에 60을 곱해 분으로 바꾸세요.",
      ],
      // EN: <p>(a) <span class="chem">a = 2.1</span>, <span class="chem">d = 4.3</span>, period <span class="chem">= 2(7.75 - 1.5) = 12.5</span> h so <span class="chem">b = 2pi/12.5 = 0.503</span> (<span class="chem">= 4pi/25</span>). (b) <span class="chem">y(t) = 2.1 cos((4pi/25)(t - 1.5)) + 4.3</span>; <span class="chem">y(7.75) = 2.1 cos(pi) + 4.3 = 2.2</span>. (c) <span class="chem">y = 3.5</span> at <span class="chem">t = 10.097</span>, i.e. <b>10:06</b>. (d) The depth next falls to 3.5 m at <span class="chem">t = 17.903</span>, so the window is <span class="chem">7.81</span> h, about <b>7 h 48 min</b>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 2.1</span>, <span class=\"chem\">d = 4.3</span>, 주기 <span class=\"chem\">= 2(7.75 - 1.5) = 12.5</span> h이므로 <span class=\"chem\">b = 2pi/12.5 = 0.503</span> (<span class=\"chem\">= 4pi/25</span>). (b) <span class=\"chem\">y(t) = 2.1 cos((4pi/25)(t - 1.5)) + 4.3</span>; <span class=\"chem\">y(7.75) = 2.1 cos(pi) + 4.3 = 2.2</span>. (c) <span class=\"chem\">t = 10.097</span>일 때 <span class=\"chem\">y = 3.5</span>, 즉 <b>10:06</b>. (d) 수심이 다음에 3.5 m로 내려가는 때는 <span class=\"chem\">t = 17.903</span>이므로 지나갈 수 있는 시간은 <span class=\"chem\">7.81</span> h, 약 <b>7 h 48 min</b>이에요.</p>",
      markscheme: [
        // EN: A1: a = (6.4 − 2.2)/2 = 2.1.
        "A1: a = (6.4 − 2.2)/2 = 2.1.",
        // EN: A1: d = (6.4 + 2.2)/2 = 4.3.
        "A1: d = (6.4 + 2.2)/2 = 4.3.",
        // EN: A1: Half-period = 7.75 − 1.5 = 6.25 h, so period 12.5 h and b = 2π/12.5 = 4π/25 (≈ 0.503).
        "A1: 반주기 = 7.75 − 1.5 = 6.25 h이므로 주기는 12.5 h이고 b = 2π/12.5 = 4π/25 (≈ 0.503).",
        // EN: A1: y(t) = 2.1 cos((4π/25)(t − 1.5)) + 4.3, and y(7.75) = 2.1 cos π + 4.3 = 2.2.
        "A1: y(t) = 2.1 cos((4π/25)(t − 1.5)) + 4.3이고, y(7.75) = 2.1 cos π + 4.3 = 2.2.",
        // EN: M1: Solve y(t) = 3.5 on a GDC for t > 7.75 (graph y(t) and y = 3.5).
        "M1: GDC에서 t > 7.75에 대해 y(t) = 3.5를 풂(y(t)와 y = 3.5의 그래프를 그림).",
        // EN: A1: t = 10.097… hours.
        "A1: t = 10.097…시간.",
        // EN: A1: 0.097 h ≈ 6 minutes, so the time is 10:06.
        "A1: 0.097 h ≈ 6분이므로 시각은 10:06.",
        // EN: M1: Next solution of y(t) = 3.5 is t = 17.903 (or use symmetry about the high tide at t = 14).
        "M1: y(t) = 3.5의 다음 해는 t = 17.903 (또는 t = 14의 만조에 대한 대칭성을 이용함).",
        // EN: A1: 17.903 − 10.097 = 7.81 h ≈ 7 h 48 min.
        "A1: 17.903 − 10.097 = 7.81 h ≈ 7 h 48 min.",
      ],
    },

    // ── t3-2-q027 · numeric · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q027": {
      // EN: <p>Solve the equation <span class="chem">tan x = 1.5 cos x</span> for <span class="chem">0° &lt;= x &lt;= 360°</span>.</p><p>Give the largest solution in degrees, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">0° &lt;= x &lt;= 360°</span>에서 방정식 <span class=\"chem\">tan x = 1.5 cos x</span>를 푸시오 (Solve).</p><p>가장 큰 해를 도(°) 단위로, 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Write <span class="chem">tan x = sin x / cos x</span> and multiply by <span class="chem">cos x</span>. Note that <span class="chem">cos x != 0</span>, because <span class="chem">tan x</span> is undefined at <span class="chem">90°</span> and <span class="chem">270°</span>.
        "<span class=\"chem\">tan x = sin x / cos x</span>로 쓰고 <span class=\"chem\">cos x</span>를 곱하세요. <span class=\"chem\">tan x</span>는 <span class=\"chem\">90°</span>와 <span class=\"chem\">270°</span>에서 정의되지 않으므로 <span class=\"chem\">cos x != 0</span>임에 주의하세요.",
        // EN: You get <span class="chem">sin x = 1.5 cos^2 x = 1.5(1 - sin^2 x)</span>, a quadratic in <span class="chem">sin x</span>: <span class="chem">1.5 sin^2 x + sin x - 1.5 = 0</span>.
        "<span class=\"chem\">sin x = 1.5 cos^2 x = 1.5(1 - sin^2 x)</span>가 되고, 이는 <span class=\"chem\">sin x</span>에 대한 이차방정식 <span class=\"chem\">1.5 sin^2 x + sin x - 1.5 = 0</span>이에요.",
        // EN: Only one root of the quadratic lies in <span class="chem">[-1, 1]</span>. It is positive, so the solutions are in quadrants I and II.
        "이 이차방정식의 근 중 <span class=\"chem\">[-1, 1]</span> 안에 있는 것은 하나뿐이에요. 그 근은 양수이므로 해는 제1사분면과 제2사분면에 있어요.",
      ],
      // EN: <p>Since <span class="chem">cos x != 0</span>: <span class="chem">sin x = 1.5 cos^2 x</span>, so <span class="chem">1.5 sin^2 x + sin x - 1.5 = 0</span> and <span class="chem">sin x = (-1 +- sqrt(10))/3</span>.</p><p><span class="chem">sin x = -1.387…</span> is impossible. <span class="chem">sin x = 0.72076…</span> gives <span class="chem">x = 46.1°</span> or <span class="chem">x = 180° - 46.1° = 133.88…°</span>. (A GDC graph of <span class="chem">y = tan x - 1.5 cos x</span> confirms only these two; the sign changes at <span class="chem">90°</span> and <span class="chem">270°</span> are asymptotes, not roots.)</p><p>Largest solution: <b>134°</b>.</p>
      solution: "<p><span class=\"chem\">cos x != 0</span>이므로 <span class=\"chem\">sin x = 1.5 cos^2 x</span>, 따라서 <span class=\"chem\">1.5 sin^2 x + sin x - 1.5 = 0</span>이고 <span class=\"chem\">sin x = (-1 +- sqrt(10))/3</span>이에요.</p><p><span class=\"chem\">sin x = -1.387…</span>은 불가능해요. <span class=\"chem\">sin x = 0.72076…</span>에서 <span class=\"chem\">x = 46.1°</span> 또는 <span class=\"chem\">x = 180° - 46.1° = 133.88…°</span>예요. (GDC로 <span class=\"chem\">y = tan x - 1.5 cos x</span>의 그래프를 그리면 해가 이 둘뿐임을 확인할 수 있어요. <span class=\"chem\">90°</span>와 <span class=\"chem\">270°</span>에서의 부호 변화는 점근선이지 근이 아니에요.)</p><p>가장 큰 해: <b>134°</b>.</p>",
    },

    // ── t3-2-q028 · short · exam · AHL · AHL 3.9, SL 3.8 · 6 marks
    "t3-2-q028": {
      // EN: <p>(a) Show that the equation <span class="chem">2 sec^2 x + tan x = 5</span> can be written as <span class="chem">2 tan^2 x + tan x - 3 = 0</span>. [2]</p><p>(b) Hence solve <span class="chem">2 sec^2 x + tan x = 5</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>. Give your answers in radians, to 3 significant figures where they are not exact. [4]</p>
      stem: "<p>(a) 방정식 <span class=\"chem\">2 sec^2 x + tan x = 5</span>를 <span class=\"chem\">2 tan^2 x + tan x - 3 = 0</span>으로 쓸 수 있음을 보이시오 (Show that). [2]</p><p>(b) 이를 이용하여 (Hence) <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 <span class=\"chem\">2 sec^2 x + tan x = 5</span>를 푸시오. 답은 라디안으로 나타내고, 정확한 값이 아닌 것은 유효숫자 3자리로 나타내시오. [4]</p>",
      hints: [
        // EN: Use the booklet identity <span class="chem">1 + tan^2 x = sec^2 x</span>.
        "공식집의 항등식 <span class=\"chem\">1 + tan^2 x = sec^2 x</span>를 이용하세요.",
        // EN: The quadratic factorises. One root gives exact angles, the other needs <span class="chem">arctan 1.5 = 0.9828…</span> from the GDC.
        "이 이차방정식은 인수분해돼요. 한 근에서는 정확한 각이 나오고, 다른 근에는 GDC로 구한 <span class=\"chem\">arctan 1.5 = 0.9828…</span>이 필요해요.",
        // EN: <span class="chem">tan x</span> has period <span class="chem">pi</span>, so each value of <span class="chem">tan x</span> gives two solutions in <span class="chem">[0, 2pi]</span>. A negative tangent lies in quadrants II and IV.
        "<span class=\"chem\">tan x</span>의 주기는 <span class=\"chem\">pi</span>이므로 <span class=\"chem\">tan x</span>의 각 값은 <span class=\"chem\">[0, 2pi]</span>에서 두 개의 해를 줘요. 탄젠트가 음수인 곳은 제2사분면과 제4사분면이에요.",
      ],
      // EN: <p>(a) <span class="chem">2(1 + tan^2 x) + tan x - 5 = 0</span>, so <span class="chem">2 tan^2 x + tan x - 3 = 0</span>. (b) <span class="chem">(2 tan x + 3)(tan x - 1) = 0</span>. <span class="chem">tan x = 1</span>: <span class="chem">x = pi/4, 5pi/4</span> (0.785, 3.93). <span class="chem">tan x = -1.5</span>: <span class="chem">x = pi - arctan 1.5 = 2.16</span> and <span class="chem">x = 2pi - arctan 1.5 = 5.30</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2(1 + tan^2 x) + tan x - 5 = 0</span>이므로 <span class=\"chem\">2 tan^2 x + tan x - 3 = 0</span>. (b) <span class=\"chem\">(2 tan x + 3)(tan x - 1) = 0</span>. <span class=\"chem\">tan x = 1</span>: <span class=\"chem\">x = pi/4, 5pi/4</span> (0.785, 3.93). <span class=\"chem\">tan x = -1.5</span>: <span class=\"chem\">x = pi - arctan 1.5 = 2.16</span>, <span class=\"chem\">x = 2pi - arctan 1.5 = 5.30</span>.</p>",
      markscheme: [
        // EN: M1: Use 1 + tan²x = sec²x: 2(1 + tan²x) + tan x = 5.
        "M1: 1 + tan²x = sec²x를 이용함: 2(1 + tan²x) + tan x = 5.",
        // EN: A1: 2 + 2 tan²x + tan x − 5 = 0, so 2 tan²x + tan x − 3 = 0 (AG).
        "A1: 2 + 2 tan²x + tan x − 5 = 0이므로 2 tan²x + tan x − 3 = 0 (AG).",
        // EN: M1: Factorise (2 tan x + 3)(tan x − 1) = 0, or solve the quadratic, to get tan x = 1 or tan x = −1.5.
        "M1: (2 tan x + 3)(tan x − 1) = 0으로 인수분해하거나 이차방정식을 풀어 tan x = 1 또는 tan x = −1.5를 얻음.",
        // EN: A1: tan x = 1 gives x = π/4, 5π/4 (0.785, 3.93).
        "A1: tan x = 1에서 x = π/4, 5π/4 (0.785, 3.93).",
        // EN: A1: tan x = −1.5 gives x = π − arctan 1.5 = 2.16.
        "A1: tan x = −1.5에서 x = π − arctan 1.5 = 2.16.",
        // EN: A1: and x = 2π − arctan 1.5 = 5.30 (four solutions in total).
        "A1: 그리고 x = 2π − arctan 1.5 = 5.30 (해는 모두 네 개).",
      ],
    },

    // ── t3-2-q029 · short · exam · AHL · AHL 3.10, SL 3.8 · 8 marks
    "t3-2-q029": {
      // EN: <p>Two signals are added to give <span class="chem">y = 3 sin t + 4 cos(t - pi/6)</span>, for <span class="chem">0 &lt;= t &lt;= 2pi</span>.</p><p>(a) Use your GDC to find the maximum value of <span class="chem">y</span> and the value of <span class="chem">t</span> at which it occurs. [2]</p><p>(b) Use a compound-angle identity to show that <span class="chem">y = 5 sin t + 2sqrt(3) cos t</span>. [3]</p><p>(c) Hence find the exact value of <span class="chem">tan t</span> when <span class="chem">y = 0</span>, and solve <span class="chem">y = 0</span> for <span class="chem">0 &lt;= t &lt;= 2pi</span>. [3]</p>
      stem: "<p>두 신호를 더하면 <span class=\"chem\">y = 3 sin t + 4 cos(t - pi/6)</span> (<span class=\"chem\">0 &lt;= t &lt;= 2pi</span>)가 돼요.</p><p>(a) GDC를 이용하여 <span class=\"chem\">y</span>의 최댓값과 그때의 <span class=\"chem\">t</span>의 값을 구하시오 (Find). [2]</p><p>(b) 삼각함수의 덧셈정리를 이용하여 <span class=\"chem\">y = 5 sin t + 2sqrt(3) cos t</span>임을 보이시오 (Show that). [3]</p><p>(c) 이를 이용하여 (Hence) <span class=\"chem\">y = 0</span>일 때 <span class=\"chem\">tan t</span>의 정확한 값을 구하고, <span class=\"chem\">0 &lt;= t &lt;= 2pi</span>에서 <span class=\"chem\">y = 0</span>을 푸시오. [3]</p>",
      hints: [
        // EN: For (a), graph <span class="chem">y</span> in radian mode on <span class="chem">[0, 2pi]</span> and use the maximum feature.
        "(a)에서는 라디안 모드로 <span class=\"chem\">[0, 2pi]</span>에서 <span class=\"chem\">y</span>의 그래프를 그리고 최댓값 기능을 사용하세요.",
        // EN: For (b), use <span class="chem">cos(A - B) = cos A cos B + sin A sin B</span> from the formula booklet.
        "(b)에서는 공식집의 <span class=\"chem\">cos(A - B) = cos A cos B + sin A sin B</span>를 사용하세요.",
        // EN: For (c), divide <span class="chem">5 sin t + 2sqrt(3) cos t = 0</span> by <span class="chem">cos t</span> (it cannot be 0 here: then <span class="chem">y = ±5</span>). A negative tangent gives solutions in quadrants II and IV.
        "(c)에서는 <span class=\"chem\">5 sin t + 2sqrt(3) cos t = 0</span>을 <span class=\"chem\">cos t</span>로 나누세요(여기서 0일 수 없어요: 그렇다면 <span class=\"chem\">y = ±5</span>예요). 탄젠트가 음수이므로 해는 제2사분면과 제4사분면에 있어요.",
      ],
      // EN: <p>(a) Maximum <span class="chem">y = 6.08</span> (it is <span class="chem">sqrt(37)</span>) at <span class="chem">t = 0.965</span>. (b) <span class="chem">4 cos(t - pi/6) = 4(cos t · sqrt(3)/2 + sin t · 1/2) = 2sqrt(3) cos t + 2 sin t</span>, so <span class="chem">y = 5 sin t + 2sqrt(3) cos t</span>. (c) <span class="chem">tan t = -2sqrt(3)/5</span>; <span class="chem">t = 2.54</span> or <span class="chem">t = 5.68</span>.</p>
      answer: "<p>(a) 최댓값 <span class=\"chem\">y = 6.08</span>(<span class=\"chem\">sqrt(37)</span>과 같음), <span class=\"chem\">t = 0.965</span>일 때. (b) <span class=\"chem\">4 cos(t - pi/6) = 4(cos t · sqrt(3)/2 + sin t · 1/2) = 2sqrt(3) cos t + 2 sin t</span>이므로 <span class=\"chem\">y = 5 sin t + 2sqrt(3) cos t</span>. (c) <span class=\"chem\">tan t = -2sqrt(3)/5</span>; <span class=\"chem\">t = 2.54</span> 또는 <span class=\"chem\">t = 5.68</span>.</p>",
      markscheme: [
        // EN: A1: Maximum value y = 6.08.
        "A1: 최댓값 y = 6.08.",
        // EN: A1: at t = 0.965.
        "A1: t = 0.965일 때.",
        // EN: M1: Expand cos(t − π/6) = cos t cos(π/6) + sin t sin(π/6).
        "M1: cos(t − π/6) = cos t cos(π/6) + sin t sin(π/6)으로 전개함.",
        // EN: A1: Substitute cos(π/6) = √3/2 and sin(π/6) = 1/2: 4 cos(t − π/6) = 2√3 cos t + 2 sin t.
        "A1: cos(π/6) = √3/2, sin(π/6) = 1/2를 대입함: 4 cos(t − π/6) = 2√3 cos t + 2 sin t.",
        // EN: A1: Collect terms: y = 3 sin t + 2 sin t + 2√3 cos t = 5 sin t + 2√3 cos t (AG).
        "A1: 항을 정리함: y = 3 sin t + 2 sin t + 2√3 cos t = 5 sin t + 2√3 cos t (AG).",
        // EN: M1: y = 0 gives 5 sin t = −2√3 cos t, so tan t = −2√3/5.
        "M1: y = 0에서 5 sin t = −2√3 cos t이므로 tan t = −2√3/5.",
        // EN: A1: t = π − arctan(2√3/5) = 2.54.
        "A1: t = π − arctan(2√3/5) = 2.54.",
        // EN: A1: t = 2π − arctan(2√3/5) = 5.68.
        "A1: t = 2π − arctan(2√3/5) = 5.68.",
      ],
    },

    // ── t3-2-q030 · numeric · challenge · AHL · AHL 3.9 · 6 marks
    "t3-2-q030": {
      // EN: <p>A painting 3.6 m tall hangs on a vertical wall. Its lower edge is 1.2 m above the eye level of a visitor, who stands on level ground <span class="chem">x</span> metres from the wall. The angle between the visitor's lines of sight to the top and the bottom of the painting is <span class="chem">theta</span>.</p><p>The visitor chooses <span class="chem">x</span> to make <span class="chem">theta</span> as large as possible. Find this largest value of <span class="chem">theta</span>, in degrees, correct to 3 significant figures.</p>
      stem: "<p>높이 3.6 m인 그림이 수직인 벽에 걸려 있어요. 그림의 아래쪽 가장자리는 관람객의 눈높이보다 1.2 m 위에 있고, 관람객은 벽에서 <span class=\"chem\">x</span> 미터 떨어진 평평한 바닥에 서 있어요. 관람객이 그림의 위쪽 끝과 아래쪽 끝을 바라보는 두 시선 사이의 각을 <span class=\"chem\">theta</span>라고 해요.</p><p>관람객은 <span class=\"chem\">theta</span>가 가능한 한 커지도록 <span class=\"chem\">x</span>를 정해요. 이때 <span class=\"chem\">theta</span>의 최댓값을 도(°) 단위로 구하고 (Find), 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Decode: <span class="chem">theta</span> is the DIFFERENCE of two angles of elevation (to the top and to the bottom of the painting). Write each one with arctan, then maximise the difference on a GDC.
        "해석: <span class=\"chem\">theta</span>는 두 올려본각(그림의 위쪽 끝과 아래쪽 끝을 올려본각)의 \"차\"예요. 각각을 arctan으로 나타낸 다음, GDC에서 그 차를 최대화하세요.",
        // EN: The top is <span class="chem">1.2 + 3.6 = 4.8</span> m above eye level, so <span class="chem">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span> for <span class="chem">x &gt; 0</span>.
        "그림의 위쪽 끝은 눈높이보다 <span class=\"chem\">1.2 + 3.6 = 4.8</span> m 위에 있으므로, <span class=\"chem\">x &gt; 0</span>에 대해 <span class=\"chem\">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span>예요.",
        // EN: Graph <span class="chem">theta(x)</span> (in degree mode, or convert from radians) for, say, <span class="chem">0 &lt; x &lt;= 10</span> and use the maximum feature.
        "예를 들어 <span class=\"chem\">0 &lt; x &lt;= 10</span>에서 <span class=\"chem\">theta(x)</span>의 그래프를 (도 모드로, 또는 라디안에서 변환하여) 그리고 최댓값 기능을 사용하세요.",
      ],
      // EN: <p><strong>Decoding:</strong> the angle the painting subtends = (angle of elevation of the top) − (angle of elevation of the bottom).</p><p><span class="chem">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span>. The GDC maximum is at <span class="chem">x = 2.40</span> m, where <span class="chem">theta = arctan 2 - arctan 0.5 = 36.869…°</span>.</p><p>(Check with <span class="chem">tan(A - B)</span>: <span class="chem">(2 - 0.5)/(1 + 2 × 0.5) = 0.75</span>, and <span class="chem">arctan 0.75 = 36.87°</span>.) Largest angle: <b>36.9°</b>.</p>
      solution: "<p><strong>해석:</strong> 그림을 바라보는 각 = (위쪽 끝의 올려본각) − (아래쪽 끝의 올려본각).</p><p><span class=\"chem\">theta(x) = arctan(4.8/x) - arctan(1.2/x)</span>. GDC에 따르면 최댓값은 <span class=\"chem\">x = 2.40</span> m일 때이고, 이때 <span class=\"chem\">theta = arctan 2 - arctan 0.5 = 36.869…°</span>예요.</p><p>(<span class=\"chem\">tan(A - B)</span>로 확인: <span class=\"chem\">(2 - 0.5)/(1 + 2 × 0.5) = 0.75</span>, 그리고 <span class=\"chem\">arctan 0.75 = 36.87°</span>.) 가장 큰 각: <b>36.9°</b>.</p>",
    },

    // ── t3-2-q031 · numeric · exam · SL · SL 3.8 · 5 marks
    "t3-2-q031": {
      // EN: <p>Solve the equation <span class="chem">3 sin(2x - 40°) = 1.7</span> for <span class="chem">0° &lt;= x &lt;= 360°</span>.</p><p>The equation has four solutions in this interval. Find the largest one, in degrees, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">0° &lt;= x &lt;= 360°</span>에서 방정식 <span class=\"chem\">3 sin(2x - 40°) = 1.7</span>을 푸시오 (Solve).</p><p>이 방정식은 이 구간에서 네 개의 해를 가져요. 가장 큰 해를 도(°) 단위로 구하고, 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Let <span class="chem">u = 2x - 40°</span>. Change the interval first: <span class="chem">-40° &lt;= u &lt;= 680°</span>.
        "<span class=\"chem\">u = 2x - 40°</span>로 두세요. 먼저 구간을 바꾸세요: <span class=\"chem\">-40° &lt;= u &lt;= 680°</span>.",
        // EN: <span class="chem">sin u = 1.7/3</span>, so the reference angle is <span class="chem">arcsin(1.7/3) = 34.52°</span>. List <span class="chem">u = 34.52°, 145.48°</span> and add <span class="chem">360°</span> while you stay below <span class="chem">680°</span>.
        "<span class=\"chem\">sin u = 1.7/3</span>이므로 기준각은 <span class=\"chem\">arcsin(1.7/3) = 34.52°</span>예요. <span class=\"chem\">u = 34.52°, 145.48°</span>를 쓰고, <span class=\"chem\">680°</span>를 넘지 않는 동안 <span class=\"chem\">360°</span>를 더하세요.",
        // EN: Then <span class="chem">x = (u + 40°)/2</span>.
        "그런 다음 <span class=\"chem\">x = (u + 40°)/2</span>예요.",
      ],
      // EN: <p><span class="chem">u = 2x - 40° in [-40°, 680°]</span>, <span class="chem">sin u = 0.5667</span>: <span class="chem">u = 34.52°, 145.48°, 394.52°, 505.48°</span>.</p><p><span class="chem">x = (u + 40°)/2 = 37.3°, 92.7°, 217.3°, 272.74…°</span>. Largest: <b>273°</b>.</p>
      solution: "<p><span class=\"chem\">u = 2x - 40° in [-40°, 680°]</span>, <span class=\"chem\">sin u = 0.5667</span>: <span class=\"chem\">u = 34.52°, 145.48°, 394.52°, 505.48°</span>.</p><p><span class=\"chem\">x = (u + 40°)/2 = 37.3°, 92.7°, 217.3°, 272.74…°</span>. 가장 큰 해: <b>273°</b>.</p>",
    },

    // ── t3-2-q032 · short · challenge · SL · SL 3.7, 3.8 · 9 marks
    "t3-2-q032": {
      // EN: <p>A Ferris wheel of radius 20 m has its centre 23 m above the ground. It rotates anticlockwise at a constant rate of 0.4 revolutions per minute. At <span class="chem">t = 0</span>, car A is level with the centre and moving upwards. Car B is at the opposite end of the diameter through A.</p><p>(a) Find the time for one revolution, and show that the height of car A above the ground, in metres, <span class="chem">t</span> minutes later is <span class="chem">h_A(t) = 23 + 20 sin(0.8pi t)</span>. [2]</p><p>(b) Find the times during the first revolution at which car A is 35 m above the ground. [3]</p><p>(c) Write down an expression for the height <span class="chem">h_B(t)</span> of car B, and find the first time at which the vertical distance between the two cars is 30 m. [2]</p><p>(d) Find the total time in each revolution for which the vertical distance between the cars is more than 30 m. [2]</p>
      stem: "<p>반지름이 20 m인 대관람차의 중심은 지면에서 23 m 높이에 있어요. 대관람차는 분당 0.4바퀴의 일정한 비율로 시계 반대 방향으로 돌아요. <span class=\"chem\">t = 0</span>일 때 칸 A는 중심과 같은 높이에서 위쪽으로 움직이고 있어요. 칸 B는 A를 지나는 지름의 반대쪽 끝에 있어요.</p><p>(a) 한 바퀴 도는 데 걸리는 시간을 구하고 (Find), <span class=\"chem\">t</span>분 후 칸 A의 지면으로부터의 높이(미터)가 <span class=\"chem\">h_A(t) = 23 + 20 sin(0.8pi t)</span>임을 보이시오 (Show that). [2]</p><p>(b) 첫 번째 바퀴 동안 칸 A가 지면에서 35 m 높이에 있는 시각을 구하시오. [3]</p><p>(c) 칸 B의 높이 <span class=\"chem\">h_B(t)</span>를 나타내는 식을 쓰고 (Write down), 두 칸 사이의 수직 거리가 처음으로 30 m가 되는 시각을 구하시오. [2]</p><p>(d) 한 바퀴마다 두 칸 사이의 수직 거리가 30 m보다 큰 시간의 합을 구하시오. [2]</p>",
      hints: [
        // EN: Decode: "0.4 revolutions per minute" is a frequency; the period is its reciprocal. "Opposite end of the diameter" means car B is always half a revolution away from A. "Vertical distance" is <span class="chem">|h_A - h_B|</span>.
        "해석: \"분당 0.4바퀴\"는 진동수이고, 주기는 그 역수예요. \"지름의 반대쪽 끝\"은 칸 B가 항상 A로부터 반 바퀴 떨어져 있다는 뜻이에요. \"수직 거리\"는 <span class=\"chem\">|h_A - h_B|</span>예요.",
        // EN: Car A starts at the height of the centre and goes up: that is a sine curve with no phase shift.
        "칸 A는 중심의 높이에서 위쪽으로 움직이기 시작해요: 이는 위상차가 없는 사인 곡선이에요.",
        // EN: For car B, <span class="chem">sin(theta + pi) = -sin theta</span>, so <span class="chem">h_B = 23 - 20 sin(0.8pi t)</span> and <span class="chem">h_A - h_B = 40 sin(0.8pi t)</span>.
        "칸 B에 대해서는 <span class=\"chem\">sin(theta + pi) = -sin theta</span>이므로 <span class=\"chem\">h_B = 23 - 20 sin(0.8pi t)</span>이고 <span class=\"chem\">h_A - h_B = 40 sin(0.8pi t)</span>예요.",
        // EN: For (d), graph <span class="chem">y = 40|sin(0.8pi x)|</span> and <span class="chem">y = 30</span> on <span class="chem">0 &lt;= x &lt;= 2.5</span> and add the lengths of the intervals where the curve is above the line.
        "(d)에서는 <span class=\"chem\">0 &lt;= x &lt;= 2.5</span>에서 <span class=\"chem\">y = 40|sin(0.8pi x)|</span>와 <span class=\"chem\">y = 30</span>의 그래프를 그리고, 곡선이 직선보다 위에 있는 구간들의 길이를 더하세요.",
      ],
      // EN: <p><strong>Decoding:</strong> turn every sentence into a function: period = 1/frequency; B = A shifted by half a turn; vertical distance = <span class="chem">|h_A - h_B| = 40|sin(0.8pi t)|</span>.</p><p>(b) <span class="chem">sin(0.8pi t) = 0.6</span>: <span class="chem">0.8pi t = 0.6435</span> or <span class="chem">pi - 0.6435</span>, so <span class="chem">t = 0.256</span>, <span class="chem">0.994</span> min.</p><p>(c) <span class="chem">40 sin(0.8pi t) = 30</span>: <span class="chem">t = arcsin(0.75)/(0.8pi) = 0.337</span> min.</p><p>(d) <span class="chem">|sin(0.8pi t)| &gt; 0.75</span> on <span class="chem">(0.337, 0.913)</span> and <span class="chem">(1.587, 2.163)</span>: total <b>1.15 min</b>.</p>
      solution: "<p><strong>해석:</strong> 모든 문장을 함수로 바꾸세요: 주기 = 1/진동수; B = A를 반 바퀴 이동한 것; 수직 거리 = <span class=\"chem\">|h_A - h_B| = 40|sin(0.8pi t)|</span>.</p><p>(b) <span class=\"chem\">sin(0.8pi t) = 0.6</span>: <span class=\"chem\">0.8pi t = 0.6435</span> 또는 <span class=\"chem\">pi - 0.6435</span>이므로 <span class=\"chem\">t = 0.256</span>, <span class=\"chem\">0.994</span> min.</p><p>(c) <span class=\"chem\">40 sin(0.8pi t) = 30</span>: <span class=\"chem\">t = arcsin(0.75)/(0.8pi) = 0.337</span> min.</p><p>(d) <span class=\"chem\">(0.337, 0.913)</span>과 <span class=\"chem\">(1.587, 2.163)</span>에서 <span class=\"chem\">|sin(0.8pi t)| &gt; 0.75</span>: 합계 <b>1.15 min</b>.</p>",
      // EN: <p>(a) One revolution takes <span class="chem">1/0.4 = 2.5</span> min, so <span class="chem">b = 2pi/2.5 = 0.8pi</span>; A starts on the principal axis going up, so <span class="chem">h_A = 23 + 20 sin(0.8pi t)</span>. (b) <span class="chem">sin(0.8pi t) = 0.6</span>: <span class="chem">t = 0.256</span> min and <span class="chem">t = 0.994</span> min. (c) <span class="chem">h_B = 23 - 20 sin(0.8pi t)</span>; distance <span class="chem">= 40|sin(0.8pi t)| = 30</span> first at <span class="chem">t = 0.337</span> min. (d) <span class="chem">|sin(0.8pi t)| &gt; 0.75</span> for a total of <b>1.15 min</b> per revolution.</p>
      answer: "<p>(a) 한 바퀴는 <span class=\"chem\">1/0.4 = 2.5</span> min이므로 <span class=\"chem\">b = 2pi/2.5 = 0.8pi</span>; A는 중심축에서 위쪽으로 출발하므로 <span class=\"chem\">h_A = 23 + 20 sin(0.8pi t)</span>. (b) <span class=\"chem\">sin(0.8pi t) = 0.6</span>: <span class=\"chem\">t = 0.256</span> min, <span class=\"chem\">t = 0.994</span> min. (c) <span class=\"chem\">h_B = 23 - 20 sin(0.8pi t)</span>; 거리 <span class=\"chem\">= 40|sin(0.8pi t)| = 30</span>이 처음 되는 때는 <span class=\"chem\">t = 0.337</span> min. (d) 한 바퀴마다 <span class=\"chem\">|sin(0.8pi t)| &gt; 0.75</span>인 시간은 합계 <b>1.15 min</b>.</p>",
      markscheme: [
        // EN: A1: Period = 1/0.4 = 2.5 minutes.
        "A1: 주기 = 1/0.4 = 2.5분.",
        // EN: A1: b = 2π/2.5 = 0.8π, amplitude 20, axis 23, and a sine starts on the axis moving up, so h_A(t) = 23 + 20 sin(0.8πt) (AG).
        "A1: b = 2π/2.5 = 0.8π, 진폭 20, 중심축 23이고, 사인은 중심축에서 위로 출발하므로 h_A(t) = 23 + 20 sin(0.8πt) (AG).",
        // EN: M1: Solve 23 + 20 sin(0.8πt) = 35, i.e. sin(0.8πt) = 0.6, on 0 ≤ t ≤ 2.5.
        "M1: 0 ≤ t ≤ 2.5에서 23 + 20 sin(0.8πt) = 35, 즉 sin(0.8πt) = 0.6을 풂.",
        // EN: A1: t = 0.256 min.
        "A1: t = 0.256 min.",
        // EN: A1: t = 0.994 min.
        "A1: t = 0.994 min.",
        // EN: A1: h_B(t) = 23 − 20 sin(0.8πt) (B is half a revolution ahead).
        "A1: h_B(t) = 23 − 20 sin(0.8πt) (B는 반 바퀴 앞서 있음).",
        // EN: A1: |h_A − h_B| = 40|sin(0.8πt)| = 30 first when t = 0.337 min.
        "A1: |h_A − h_B| = 40|sin(0.8πt)| = 30이 처음 되는 때는 t = 0.337 min.",
        // EN: M1: |sin(0.8πt)| > 0.75 on two intervals per revolution, each of length (π − 2 arcsin 0.75)/(0.8π) = 0.575 min.
        "M1: |sin(0.8πt)| > 0.75는 한 바퀴마다 두 구간에서 성립하고, 각 구간의 길이는 (π − 2 arcsin 0.75)/(0.8π) = 0.575 min.",
        // EN: A1: Total = 1.15 min per revolution.
        "A1: 한 바퀴마다 합계 1.15 min.",
      ],
    },

    // ── t3-2-q033 · numeric · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q033": {
      // EN: <p>The equation <span class="chem">2 cos 2x = 3 sin x - 1</span> has two solutions in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>, where <span class="chem">x</span> is in radians.</p><p>Find the solution that lies in the interval <span class="chem">pi/2 &lt; x &lt; pi</span>, giving your answer to 3 significant figures.</p>
      stem: "<p>방정식 <span class=\"chem\">2 cos 2x = 3 sin x - 1</span>은 구간 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 두 개의 해를 가져요. 여기서 <span class=\"chem\">x</span>는 라디안이에요.</p><p>구간 <span class=\"chem\">pi/2 &lt; x &lt; pi</span>에 있는 해를 구하고 (Find), 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: The equation has <span class="chem">sin x</span> in it, so choose <span class="chem">cos 2x = 1 - 2 sin^2 x</span>.
        "방정식에 <span class=\"chem\">sin x</span>가 있으므로 <span class=\"chem\">cos 2x = 1 - 2 sin^2 x</span>를 선택하세요.",
        // EN: You should get <span class="chem">4 sin^2 x + 3 sin x - 3 = 0</span>. Solve this quadratic in <span class="chem">sin x</span> and reject any root outside <span class="chem">[-1, 1]</span>.
        "<span class=\"chem\">4 sin^2 x + 3 sin x - 3 = 0</span>이 나와야 해요. 이 <span class=\"chem\">sin x</span>에 대한 이차방정식을 풀고, <span class=\"chem\">[-1, 1]</span> 밖에 있는 근은 버리세요.",
        // EN: The second-quadrant solution of <span class="chem">sin x = k</span> (with <span class="chem">k &gt; 0</span>) is <span class="chem">x = pi - arcsin k</span>.
        "<span class=\"chem\">sin x = k</span> (<span class=\"chem\">k &gt; 0</span>)의 제2사분면 해는 <span class=\"chem\">x = pi - arcsin k</span>예요.",
      ],
      // EN: <p><span class="chem">2(1 - 2 sin^2 x) = 3 sin x - 1</span> gives <span class="chem">4 sin^2 x + 3 sin x - 3 = 0</span>, so <span class="chem">sin x = (-3 +- sqrt(57))/8</span>.</p><p><span class="chem">sin x = -1.319</span> is impossible; <span class="chem">sin x = 0.56873…</span> gives <span class="chem">x = 0.605</span> or <span class="chem">x = pi - 0.60496… = 2.5366…</span>.</p><p>Answer: <b>x = 2.54</b>.</p>
      solution: "<p><span class=\"chem\">2(1 - 2 sin^2 x) = 3 sin x - 1</span>에서 <span class=\"chem\">4 sin^2 x + 3 sin x - 3 = 0</span>이므로 <span class=\"chem\">sin x = (-3 +- sqrt(57))/8</span>이에요.</p><p><span class=\"chem\">sin x = -1.319</span>는 불가능해요. <span class=\"chem\">sin x = 0.56873…</span>에서 <span class=\"chem\">x = 0.605</span> 또는 <span class=\"chem\">x = pi - 0.60496… = 2.5366…</span>이에요.</p><p>답: <b>x = 2.54</b>.</p>",
    },

    // ── t3-2-q034 · short · challenge · SL · SL 3.7, 3.8 · 8 marks
    "t3-2-q034": {
      // EN: <p>A simple model for the blood pressure of a resting patient, <span class="chem">P</span> mm Hg, <span class="chem">t</span> seconds after a measurement begins, is <span class="chem">P(t) = 95 + 25 sin(2.4pi t)</span>. One complete cycle of the model represents one heartbeat.</p><p>(a) Find the patient's heart rate, in beats per minute. [2]</p><p>(b) Write down the greatest and the least blood pressure given by the model. [2]</p><p>(c) Find the length of time during one heartbeat for which the blood pressure is above 110 mm Hg. [3]</p><p>(d) Hence find the percentage of the time for which the blood pressure is above 110 mm Hg. [1]</p>
      stem: "<p>안정을 취하고 있는 환자의 혈압 <span class=\"chem\">P</span> mm Hg에 대해, 측정을 시작하고 <span class=\"chem\">t</span>초 후의 간단한 모델은 <span class=\"chem\">P(t) = 95 + 25 sin(2.4pi t)</span>예요. 이 모델의 한 주기는 심장 박동 한 번을 나타내요.</p><p>(a) 환자의 심박수(분당 박동 수)를 구하시오 (Find). [2]</p><p>(b) 모델이 주는 혈압의 최댓값과 최솟값을 쓰시오 (Write down). [2]</p><p>(c) 심장 박동 한 번 동안 혈압이 110 mm Hg보다 높은 시간의 길이를 구하시오. [3]</p><p>(d) 이를 이용하여 (Hence) 혈압이 110 mm Hg보다 높은 시간의 백분율을 구하시오. [1]</p>",
      hints: [
        // EN: Decode: "one cycle = one heartbeat", so the heart rate is the number of periods in 60 seconds. Units matter: the model uses seconds, the answer is per minute.
        "해석: \"한 주기 = 심장 박동 한 번\"이므로 심박수는 60초 동안의 주기의 개수예요. 단위에 주의하세요: 모델은 초를 쓰고, 답은 분당이에요.",
        // EN: Period <span class="chem">T = 2pi/b</span> with <span class="chem">b = 2.4pi</span>.
        "주기 <span class=\"chem\">T = 2pi/b</span>이고, 여기서 <span class=\"chem\">b = 2.4pi</span>예요.",
        // EN: For (c), graph <span class="chem">P(t)</span> and <span class="chem">y = 110</span> over one period <span class="chem">0 &lt;= t &lt;= T</span> and subtract the two intersection times.
        "(c)에서는 한 주기 <span class=\"chem\">0 &lt;= t &lt;= T</span> 동안 <span class=\"chem\">P(t)</span>와 <span class=\"chem\">y = 110</span>의 그래프를 그리고, 두 교점의 시각을 빼세요.",
      ],
      // EN: <p><strong>Decoding:</strong> heart rate = beats per minute = <span class="chem">60 ÷</span> (period in seconds).</p><p>(a) <span class="chem">T = 2pi/(2.4pi) = 5/6</span> s, so 72 beats per minute. (b) 120 and 70 mm Hg.</p><p>(c) <span class="chem">sin(2.4pi t) = 0.6</span>: <span class="chem">t = 0.6435/(2.4pi) = 0.0853</span> and <span class="chem">t = (pi - 0.6435)/(2.4pi) = 0.3313</span>; difference <b>0.246 s</b>. (d) <b>29.5%</b>.</p>
      solution: "<p><strong>해석:</strong> 심박수 = 분당 박동 수 = <span class=\"chem\">60 ÷</span> (초 단위의 주기).</p><p>(a) <span class=\"chem\">T = 2pi/(2.4pi) = 5/6</span> s이므로 분당 72회. (b) 120 mm Hg와 70 mm Hg.</p><p>(c) <span class=\"chem\">sin(2.4pi t) = 0.6</span>: <span class=\"chem\">t = 0.6435/(2.4pi) = 0.0853</span>, <span class=\"chem\">t = (pi - 0.6435)/(2.4pi) = 0.3313</span>; 차는 <b>0.246 s</b>. (d) <b>29.5%</b>.</p>",
      // EN: <p>(a) Period <span class="chem">= 2pi/(2.4pi) = 0.833</span> s, so <span class="chem">60/0.8333 = 72</span> beats per minute. (b) Greatest 120 mm Hg, least 70 mm Hg. (c) <span class="chem">sin(2.4pi t) = 0.6</span> at <span class="chem">t = 0.0853</span> s and <span class="chem">t = 0.331</span> s, so <b>0.246 s</b>. (d) <span class="chem">0.246/0.833 = 29.5%</span>.</p>
      answer: "<p>(a) 주기 <span class=\"chem\">= 2pi/(2.4pi) = 0.833</span> s이므로 <span class=\"chem\">60/0.8333 = 72</span>회/분. (b) 최댓값 120 mm Hg, 최솟값 70 mm Hg. (c) <span class=\"chem\">t = 0.0853</span> s와 <span class=\"chem\">t = 0.331</span> s에서 <span class=\"chem\">sin(2.4pi t) = 0.6</span>이므로 <b>0.246 s</b>. (d) <span class=\"chem\">0.246/0.833 = 29.5%</span>.</p>",
      markscheme: [
        // EN: M1: Period = 2π/(2.4π) = 0.8333 s.
        "M1: 주기 = 2π/(2.4π) = 0.8333 s.",
        // EN: A1: Heart rate = 60 ÷ 0.8333 = 72 beats per minute.
        "A1: 심박수 = 60 ÷ 0.8333 = 분당 72회.",
        // EN: A1: Greatest P = 95 + 25 = 120 mm Hg.
        "A1: P의 최댓값 = 95 + 25 = 120 mm Hg.",
        // EN: A1: Least P = 95 − 25 = 70 mm Hg.
        "A1: P의 최솟값 = 95 − 25 = 70 mm Hg.",
        // EN: M1: Solve 95 + 25 sin(2.4πt) = 110 (sin(2.4πt) = 0.6) on 0 ≤ t ≤ 0.8333.
        "M1: 0 ≤ t ≤ 0.8333에서 95 + 25 sin(2.4πt) = 110 (sin(2.4πt) = 0.6)을 풂.",
        // EN: A1: t = 0.0853 s and t = 0.331 s.
        "A1: t = 0.0853 s, t = 0.331 s.",
        // EN: A1: Time above 110 = 0.331 − 0.0853 = 0.246 s.
        "A1: 110보다 높은 시간 = 0.331 − 0.0853 = 0.246 s.",
        // EN: A1: Percentage = 0.246/0.8333 × 100 = 29.5%.
        "A1: 백분율 = 0.246/0.8333 × 100 = 29.5%.",
      ],
    },

    // ── t3-2-q035 · numeric · challenge · SL · SL 3.7, 3.8 · 5 marks
    "t3-2-q035": {
      // EN: <p>Consider the equation <span class="chem">3 sin x + 2 sin 2x = k</span>, where <span class="chem">0 &lt;= x &lt;= 2pi</span> and <span class="chem">k ∈ ℝ</span>.</p><p>Find the largest value of <span class="chem">k</span> for which the equation has at least one solution. Give your answer to 3 significant figures.</p>
      stem: "<p>방정식 <span class=\"chem\">3 sin x + 2 sin 2x = k</span>를 생각해요. 여기서 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>이고 <span class=\"chem\">k ∈ ℝ</span>예요.</p><p>이 방정식이 적어도 하나의 해를 갖도록 하는 <span class=\"chem\">k</span>의 최댓값을 구하고 (Find), 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Decode: the equation <span class="chem">f(x) = k</span> has a solution exactly when the horizontal line <span class="chem">y = k</span> meets the graph of <span class="chem">y = f(x)</span>. So the largest such <span class="chem">k</span> is the maximum value of <span class="chem">f(x) = 3 sin x + 2 sin 2x</span> on the interval.
        "해석: 방정식 <span class=\"chem\">f(x) = k</span>가 해를 갖는 것은 정확히 수평선 <span class=\"chem\">y = k</span>가 <span class=\"chem\">y = f(x)</span>의 그래프와 만날 때예요. 따라서 그러한 <span class=\"chem\">k</span>의 최댓값은 구간에서 <span class=\"chem\">f(x) = 3 sin x + 2 sin 2x</span>의 최댓값이에요.",
        // EN: The maximum is NOT <span class="chem">3 + 2 = 5</span>: the two terms do not reach their maxima at the same <span class="chem">x</span>.
        "최댓값은 <span class=\"chem\">3 + 2 = 5</span>가 \"아니에요\": 두 항은 같은 <span class=\"chem\">x</span>에서 최대가 되지 않아요.",
        // EN: Graph <span class="chem">y = 3 sin x + 2 sin 2x</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span> and use the maximum feature.
        "<span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 <span class=\"chem\">y = 3 sin x + 2 sin 2x</span>의 그래프를 그리고 최댓값 기능을 사용하세요.",
      ],
      // EN: <p><strong>Decoding:</strong> "largest <span class="chem">k</span> with at least one solution" = the maximum value of <span class="chem">f(x) = 3 sin x + 2 sin 2x</span> on <span class="chem">[0, 2pi]</span>.</p><p><span class="chem">3 sin x</span> peaks at <span class="chem">x = pi/2</span>, but <span class="chem">2 sin 2x</span> is 0 there, so the sum cannot reach 5. The GDC maximum is at <span class="chem">x = 0.996</span>, where <span class="chem">f(x) = 4.3431…</span>.</p><p>Largest value: <b>k = 4.34</b>.</p>
      solution: "<p><strong>해석:</strong> \"적어도 하나의 해를 갖는 가장 큰 <span class=\"chem\">k</span>\" = <span class=\"chem\">[0, 2pi]</span>에서 <span class=\"chem\">f(x) = 3 sin x + 2 sin 2x</span>의 최댓값.</p><p><span class=\"chem\">3 sin x</span>는 <span class=\"chem\">x = pi/2</span>에서 최대가 되지만 그곳에서 <span class=\"chem\">2 sin 2x</span>는 0이므로 합은 5에 도달할 수 없어요. GDC에 따르면 최댓값은 <span class=\"chem\">x = 0.996</span>에서이고, 이때 <span class=\"chem\">f(x) = 4.3431…</span>이에요.</p><p>최댓값: <b>k = 4.34</b>.</p>",
    },

    // ── t3-2-q036 · numeric · exam · AHL · AHL 3.9 · 4 marks
    "t3-2-q036": {
      // EN: <p>Solve the equation <span class="chem">arcsin x + arctan x = 1</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>방정식 <span class=\"chem\">arcsin x + arctan x = 1</span>을 푸시오 (Solve). 답은 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: First decide where the left-hand side is defined: <span class="chem">arcsin x</span> needs <span class="chem">-1 &lt;= x &lt;= 1</span>.
        "먼저 좌변이 정의되는 범위를 정하세요: <span class=\"chem\">arcsin x</span>는 <span class=\"chem\">-1 &lt;= x &lt;= 1</span>이 필요해요.",
        // EN: On this domain both <span class="chem">arcsin x</span> and <span class="chem">arctan x</span> are increasing, so the left-hand side is increasing and there is exactly one solution.
        "이 정의역에서 <span class=\"chem\">arcsin x</span>와 <span class=\"chem\">arctan x</span>는 모두 증가하므로, 좌변은 증가하고 해는 정확히 하나예요.",
        // EN: Graph <span class="chem">y = arcsin x + arctan x</span> and <span class="chem">y = 1</span> (radian mode) for <span class="chem">-1 &lt;= x &lt;= 1</span> and find the intersection.
        "<span class=\"chem\">-1 &lt;= x &lt;= 1</span>(라디안 모드)에서 <span class=\"chem\">y = arcsin x + arctan x</span>와 <span class=\"chem\">y = 1</span>의 그래프를 그리고 교점을 구하세요.",
      ],
      // EN: <p>The domain is <span class="chem">-1 &lt;= x &lt;= 1</span>. Both functions are increasing there, so <span class="chem">g(x) = arcsin x + arctan x</span> is increasing and takes each value once: <span class="chem">g(-1) = -3pi/4</span>, <span class="chem">g(1) = 3pi/4 &gt; 1</span>.</p><p>The GDC gives <span class="chem">x = 0.50652…</span>, so <b>x = 0.507</b>.</p>
      solution: "<p>정의역은 <span class=\"chem\">-1 &lt;= x &lt;= 1</span>이에요. 그곳에서 두 함수 모두 증가하므로 <span class=\"chem\">g(x) = arcsin x + arctan x</span>는 증가하고 각 값을 한 번씩만 가져요: <span class=\"chem\">g(-1) = -3pi/4</span>, <span class=\"chem\">g(1) = 3pi/4 &gt; 1</span>.</p><p>GDC로 <span class=\"chem\">x = 0.50652…</span>를 얻으므로 <b>x = 0.507</b>이에요.</p>",
    },

    // ── t3-2-q037 · numeric · exam · AHL · AHL 3.10, SL 3.8 · 5 marks
    "t3-2-q037": {
      // EN: <p>Find the solution of the equation <span class="chem">sin(x + pi/5) = 2 cos(x - pi/7)</span> in the interval <span class="chem">0 &lt;= x &lt;= pi</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>구간 <span class=\"chem\">0 &lt;= x &lt;= pi</span>에서 방정식 <span class=\"chem\">sin(x + pi/5) = 2 cos(x - pi/7)</span>의 해를 구하고 (Find), 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Either graph both sides on a GDC (radian mode) and find the intersection, or expand both sides with the compound-angle identities.
        "GDC(라디안 모드)에서 양변의 그래프를 그려 교점을 구하거나, 삼각함수의 덧셈정리로 양변을 전개하세요.",
        // EN: Expanding gives <span class="chem">sin x (cos(pi/5) - 2 sin(pi/7)) = cos x (2 cos(pi/7) - sin(pi/5))</span>, so <span class="chem">tan x</span> equals a constant.
        "전개하면 <span class=\"chem\">sin x (cos(pi/5) - 2 sin(pi/7)) = cos x (2 cos(pi/7) - sin(pi/5))</span>이므로 <span class=\"chem\">tan x</span>는 상수와 같아요.",
        // EN: The constant is negative (about −20.7), so the solution in <span class="chem">[0, pi]</span> is in the second quadrant: <span class="chem">x = pi + arctan(k)</span>.
        "그 상수는 음수(약 −20.7)이므로 <span class=\"chem\">[0, pi]</span>에서의 해는 제2사분면에 있어요: <span class=\"chem\">x = pi + arctan(k)</span>.",
      ],
      // EN: <p>Expanding: <span class="chem">sin x cos(pi/5) + cos x sin(pi/5) = 2 cos x cos(pi/7) + 2 sin x sin(pi/7)</span>.</p><p>So <span class="chem">tan x = (2 cos(pi/7) - sin(pi/5))/(cos(pi/5) - 2 sin(pi/7)) = 1.2141…/(-0.05875…) = -20.666…</span>.</p><p>In <span class="chem">[0, pi]</span>: <span class="chem">x = pi + arctan(-20.666…) = 1.6191…</span>, so <b>x = 1.62</b> (a GDC graph confirms one intersection).</p>
      solution: "<p>전개하면: <span class=\"chem\">sin x cos(pi/5) + cos x sin(pi/5) = 2 cos x cos(pi/7) + 2 sin x sin(pi/7)</span>.</p><p>따라서 <span class=\"chem\">tan x = (2 cos(pi/7) - sin(pi/5))/(cos(pi/5) - 2 sin(pi/7)) = 1.2141…/(-0.05875…) = -20.666…</span>.</p><p><span class=\"chem\">[0, pi]</span>에서: <span class=\"chem\">x = pi + arctan(-20.666…) = 1.6191…</span>이므로 <b>x = 1.62</b>예요(GDC 그래프로 교점이 하나임을 확인할 수 있어요).</p>",
    },

    // ── t3-2-q038 · short · challenge · SL · SL 3.7, 3.8 · 6 marks
    "t3-2-q038": {
      // EN: <p>The depth of water, in metres, at harbour A, <span class="chem">t</span> hours after midnight, is modelled by <span class="chem">d_A(t) = 2.4 cos((pi/6.2)(t - 3)) + 5</span>.</p><p>At harbour B, further along the coast, the tide follows the same pattern with the same mean depth and the same period, but every high and low tide happens 1 hour 40 minutes later than at A, and the amplitude is 20% larger.</p><p>(a) Write down an expression for <span class="chem">d_B(t)</span>, the depth at harbour B. [2]</p><p>(b) Find the first time after midnight at which the two harbours have the same depth. Give your answer in hours after midnight to 3 significant figures. [2]</p><p>(c) Find the largest value of <span class="chem">d_A(t) - d_B(t)</span>. [2]</p>
      stem: "<p>항구 A에서 자정으로부터 <span class=\"chem\">t</span>시간 후의 수심(미터)은 <span class=\"chem\">d_A(t) = 2.4 cos((pi/6.2)(t - 3)) + 5</span>로 모델링돼요.</p><p>해안을 따라 더 멀리 있는 항구 B에서는 조수가 같은 패턴(같은 평균 수심, 같은 주기)을 따르지만, 모든 만조와 간조가 A보다 1시간 40분 늦게 일어나고 진폭은 20% 더 커요.</p><p>(a) 항구 B의 수심 <span class=\"chem\">d_B(t)</span>를 나타내는 식을 쓰시오 (Write down). [2]</p><p>(b) 자정 이후 두 항구의 수심이 처음으로 같아지는 시각을 구하시오 (Find). 답은 자정으로부터의 시간 수로, 유효숫자 3자리로 나타내시오. [2]</p><p>(c) <span class=\"chem\">d_A(t) - d_B(t)</span>의 최댓값을 구하시오. [2]</p>",
      hints: [
        // EN: Decode: "happens 1 hour 40 minutes later" is a horizontal translation to the right of <span class="chem">1 2/3</span> hours (not 1.4 hours!). "20% larger" multiplies the amplitude by 1.2; the mean depth 5 stays the same.
        "해석: \"1시간 40분 늦게 일어난다\"는 오른쪽으로 <span class=\"chem\">1 2/3</span>시간 평행이동이에요(1.4시간이 아니에요!). \"20% 더 크다\"는 진폭에 1.2를 곱하는 것이고, 평균 수심 5는 그대로예요.",
        // EN: Replace <span class="chem">t - 3</span> by <span class="chem">t - 3 - 5/3</span>, and 2.4 by 2.88.
        "<span class=\"chem\">t - 3</span>을 <span class=\"chem\">t - 3 - 5/3</span>으로, 2.4를 2.88로 바꾸세요.",
        // EN: Graph <span class="chem">y = d_A(t) - d_B(t)</span>: its first zero for <span class="chem">t &gt; 0</span> is (b) and its maximum is (c).
        "<span class=\"chem\">y = d_A(t) - d_B(t)</span>의 그래프를 그리세요: <span class=\"chem\">t &gt; 0</span>에서의 첫 번째 영점이 (b), 최댓값이 (c)의 답이에요.",
      ],
      // EN: <p><strong>Decoding:</strong> a later tide is a shift to the right, and minutes must become fractions of an hour: <span class="chem">1</span> h <span class="chem">40</span> min <span class="chem">= 5/3</span> h.</p><p>(a) <span class="chem">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span>.</p><p>(b) <span class="chem">d_A - d_B = 0</span> at <span class="chem">t = 3.439…</span> and <span class="chem">9.639…</span>; the first is <b>3.44 h</b>.</p><p>(c) The maximum of <span class="chem">d_A - d_B</span> (period 12.4 h) is <b>2.21 m</b>, at <span class="chem">t = 0.339</span> (and every 12.4 h after).</p>
      solution: "<p><strong>해석:</strong> 조수가 늦어지는 것은 오른쪽으로의 평행이동이고, 분은 시간의 분수로 바꿔야 해요: <span class=\"chem\">1</span> h <span class=\"chem\">40</span> min <span class=\"chem\">= 5/3</span> h.</p><p>(a) <span class=\"chem\">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span>.</p><p>(b) <span class=\"chem\">t = 3.439…</span>와 <span class=\"chem\">9.639…</span>에서 <span class=\"chem\">d_A - d_B = 0</span>; 첫 번째는 <b>3.44 h</b>.</p><p>(c) <span class=\"chem\">d_A - d_B</span>(주기 12.4 h)의 최댓값은 <b>2.21 m</b>이고, <span class=\"chem\">t = 0.339</span>(그리고 그 후 12.4 h마다)에서 나타나요.</p>",
      // EN: <p>(a) <span class="chem">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span> (the shift is <span class="chem">3 + 5/3 = 4.667</span> h). (b) <span class="chem">t = 3.44</span> hours after midnight. (c) <b>2.21 m</b>.</p>
      answer: "<p>(a) <span class=\"chem\">d_B(t) = 2.88 cos((pi/6.2)(t - 14/3)) + 5</span>(평행이동량은 <span class=\"chem\">3 + 5/3 = 4.667</span> h). (b) 자정으로부터 <span class=\"chem\">t = 3.44</span>시간 후. (c) <b>2.21 m</b>.</p>",
      markscheme: [
        // EN: A1: Amplitude 1.2 × 2.4 = 2.88.
        "A1: 진폭 1.2 × 2.4 = 2.88.",
        // EN: A1: Horizontal shift 3 + 1 h 40 min = 3 + 5/3 = 14/3 (4.67): d_B(t) = 2.88 cos((π/6.2)(t − 14/3)) + 5.
        "A1: 수평 이동 3 + 1 h 40 min = 3 + 5/3 = 14/3 (4.67): d_B(t) = 2.88 cos((π/6.2)(t − 14/3)) + 5.",
        // EN: M1: Graph d_A and d_B (or d_A − d_B) for t ≥ 0 and find the first intersection.
        "M1: t ≥ 0에서 d_A와 d_B(또는 d_A − d_B)의 그래프를 그리고 첫 번째 교점을 구함.",
        // EN: A1: t = 3.44 hours.
        "A1: t = 3.44시간.",
        // EN: M1: Graph d_A − d_B and use the maximum feature.
        "M1: d_A − d_B의 그래프를 그리고 최댓값 기능을 사용함.",
        // EN: A1: Largest value = 2.21 m.
        "A1: 최댓값 = 2.21 m.",
      ],
    },

    // ── t3-2-q039 · numeric · exam · SL · SL 3.7 · 4 marks
    "t3-2-q039": {
      // EN: <p>A lighthouse lamp is 500 m from a straight shoreline. The lamp turns at a constant rate, completing one revolution every 15 seconds. At <span class="chem">t = 0</span> the beam points at the point P on the shore nearest the lighthouse. For <span class="chem">0 &lt;= t &lt; 3.75</span>, the distance, in metres, of the spot of light on the shore from P after <span class="chem">t</span> seconds is <span class="chem">s(t) = 500 tan((2pi/15)t)</span>.</p><p>Find the time at which the spot of light is 1.2 km from P. Give your answer in seconds to 3 significant figures.</p>
      stem: "<p>등대의 램프는 곧은 해안선에서 500 m 떨어져 있어요. 램프는 일정한 비율로 돌며 15초마다 한 바퀴를 돌아요. <span class=\"chem\">t = 0</span>일 때 빛줄기는 등대에서 가장 가까운 해안 위의 점 P를 향해요. <span class=\"chem\">0 &lt;= t &lt; 3.75</span>일 때, <span class=\"chem\">t</span>초 후 해안 위 빛의 점과 P 사이의 거리(미터)는 <span class=\"chem\">s(t) = 500 tan((2pi/15)t)</span>예요.</p><p>빛의 점이 P에서 1.2 km 떨어지는 시각을 구하고 (Find), 초 단위로 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Use the same units: 1.2 km = 1200 m.
        "같은 단위를 쓰세요: 1.2 km = 1200 m.",
        // EN: Solve <span class="chem">500 tan((2pi/15)t) = 1200</span>, i.e. <span class="chem">tan((2pi/15)t) = 2.4</span>, with a GDC (radian mode).
        "GDC(라디안 모드)로 <span class=\"chem\">500 tan((2pi/15)t) = 1200</span>, 즉 <span class=\"chem\">tan((2pi/15)t) = 2.4</span>를 푸세요.",
        // EN: The graph of <span class="chem">s(t)</span> has a vertical asymptote at <span class="chem">t = 3.75</span> (a quarter turn), so there is exactly one solution in <span class="chem">0 &lt;= t &lt; 3.75</span>.
        "<span class=\"chem\">s(t)</span>의 그래프는 <span class=\"chem\">t = 3.75</span>(사분의 일 바퀴)에서 수직 점근선을 가지므로 <span class=\"chem\">0 &lt;= t &lt; 3.75</span>에서 해는 정확히 하나예요.",
      ],
      // EN: <p><span class="chem">tan((2pi/15)t) = 1200/500 = 2.4</span>, so <span class="chem">(2pi/15)t = arctan 2.4 = 1.1760…</span> and <span class="chem">t = 15 × 1.1760…/(2pi) = 2.8075…</span>.</p><p>Answer: <b>2.81 s</b>.</p>
      solution: "<p><span class=\"chem\">tan((2pi/15)t) = 1200/500 = 2.4</span>이므로 <span class=\"chem\">(2pi/15)t = arctan 2.4 = 1.1760…</span>이고 <span class=\"chem\">t = 15 × 1.1760…/(2pi) = 2.8075…</span>예요.</p><p>답: <b>2.81 s</b>.</p>",
    },

    // ── t3-2-q040 · numeric · challenge · SL · SL 3.7, 3.8 · 4 marks
    "t3-2-q040": {
      // EN: <p>Find the number of real solutions of the equation <span class="chem">10 sin x = x</span>, where <span class="chem">x</span> is in radians.</p>
      stem: "<p>방정식 <span class=\"chem\">10 sin x = x</span>의 실근의 개수를 구하시오 (Find). 여기서 <span class=\"chem\">x</span>는 라디안이에요.</p>",
      hints: [
        // EN: Decode: no interval is given, so you must consider ALL real <span class="chem">x</span>, negative as well as positive. The question asks how many solutions, not what they are.
        "해석: 구간이 주어지지 않았으므로 음수와 양수를 포함한 \"모든\" 실수 <span class=\"chem\">x</span>를 생각해야 해요. 문제는 해가 무엇인지가 아니라 몇 개인지를 묻고 있어요.",
        // EN: Since <span class="chem">-10 &lt;= 10 sin x &lt;= 10</span>, every solution satisfies <span class="chem">-10 &lt;= x &lt;= 10</span>. So you only need to graph <span class="chem">y = 10 sin x</span> and <span class="chem">y = x</span> on <span class="chem">[-10, 10]</span>.
        "<span class=\"chem\">-10 &lt;= 10 sin x &lt;= 10</span>이므로 모든 해는 <span class=\"chem\">-10 &lt;= x &lt;= 10</span>을 만족해요. 따라서 <span class=\"chem\">[-10, 10]</span>에서 <span class=\"chem\">y = 10 sin x</span>와 <span class=\"chem\">y = x</span>의 그래프만 그리면 돼요.",
        // EN: Both sides are odd functions, so the solutions come in pairs <span class="chem">±x</span>, plus <span class="chem">x = 0</span>.
        "양변 모두 기함수이므로 해는 <span class=\"chem\">±x</span> 쌍으로 나타나고, 여기에 <span class=\"chem\">x = 0</span>이 더해져요.",
      ],
      // EN: <p><strong>Decoding:</strong> "real solutions" with no interval means all of ℝ; the bound <span class="chem">|10 sin x| &lt;= 10</span> limits the search to <span class="chem">-10 &lt;= x &lt;= 10</span>.</p><p>On <span class="chem">[0, 10]</span> the GDC gives <span class="chem">x = 0, 2.852, 7.068, 8.423</span>. By symmetry (both sides are odd) the negative solutions are <span class="chem">-2.852, -7.068, -8.423</span>.</p><p>Total: <b>7</b> solutions.</p>
      solution: "<p><strong>해석:</strong> 구간이 없는 \"실근\"은 ℝ 전체를 뜻해요. <span class=\"chem\">|10 sin x| &lt;= 10</span>이라는 범위 때문에 찾는 범위는 <span class=\"chem\">-10 &lt;= x &lt;= 10</span>으로 좁혀져요.</p><p><span class=\"chem\">[0, 10]</span>에서 GDC로 <span class=\"chem\">x = 0, 2.852, 7.068, 8.423</span>을 얻어요. 대칭성(양변 모두 기함수)에 의해 음수 해는 <span class=\"chem\">-2.852, -7.068, -8.423</span>이에요.</p><p>합계: <b>7</b>개의 해.</p>",
    },

    // ── t3-2-q041 · short · exam · AHL · AHL 3.9 · 6 marks
    "t3-2-q041": {
      // EN: <p>Let <span class="chem">f(x) = 2 arccos(x/3) - pi/2</span>.</p><p>(a) Write down the largest possible domain of <span class="chem">f</span>, and find the range of <span class="chem">f</span> for this domain. [2]</p><p>(b) Find the exact value of the <span class="chem">x</span>-intercept of the graph of <span class="chem">f</span>. [2]</p><p>(c) Solve <span class="chem">f(x) = x</span>. [2]</p>
      stem: "<p><span class=\"chem\">f(x) = 2 arccos(x/3) - pi/2</span>라고 해요.</p><p>(a) <span class=\"chem\">f</span>의 가능한 가장 큰 정의역을 쓰고 (Write down), 이 정의역에 대한 <span class=\"chem\">f</span>의 치역을 구하시오 (Find). [2]</p><p>(b) <span class=\"chem\">f</span>의 그래프의 <span class=\"chem\">x</span>절편의 정확한 값을 구하시오. [2]</p><p>(c) <span class=\"chem\">f(x) = x</span>를 푸시오 (Solve). [2]</p>",
      hints: [
        // EN: The domain of <span class="chem">arccos u</span> is <span class="chem">-1 &lt;= u &lt;= 1</span> and its range is <span class="chem">0 &lt;= arccos u &lt;= pi</span>. Apply the stretch by 2 and the shift down by <span class="chem">pi/2</span>.
        "<span class=\"chem\">arccos u</span>의 정의역은 <span class=\"chem\">-1 &lt;= u &lt;= 1</span>이고 치역은 <span class=\"chem\">0 &lt;= arccos u &lt;= pi</span>예요. 여기에 2배 확대와 아래로 <span class=\"chem\">pi/2</span> 평행이동을 적용하세요.",
        // EN: For (b), set <span class="chem">f(x) = 0</span> and take cos of both sides.
        "(b)에서는 <span class=\"chem\">f(x) = 0</span>으로 놓고 양변에 cos를 취하세요.",
        // EN: For (c), <span class="chem">f</span> is decreasing and <span class="chem">y = x</span> is increasing, so there is exactly one intersection: find it on a GDC.
        "(c)에서는 <span class=\"chem\">f</span>는 감소하고 <span class=\"chem\">y = x</span>는 증가하므로 교점은 정확히 하나예요: GDC로 구하세요.",
      ],
      // EN: <p>(a) Domain <span class="chem">-3 &lt;= x &lt;= 3</span>; range <span class="chem">-pi/2 &lt;= f(x) &lt;= 3pi/2</span>. (b) <span class="chem">arccos(x/3) = pi/4</span>, so <span class="chem">x = 3cos(pi/4) = 3sqrt(2)/2</span>. (c) <span class="chem">x = 0.936</span>.</p>
      answer: "<p>(a) 정의역 <span class=\"chem\">-3 &lt;= x &lt;= 3</span>; 치역 <span class=\"chem\">-pi/2 &lt;= f(x) &lt;= 3pi/2</span>. (b) <span class=\"chem\">arccos(x/3) = pi/4</span>이므로 <span class=\"chem\">x = 3cos(pi/4) = 3sqrt(2)/2</span>. (c) <span class=\"chem\">x = 0.936</span>.</p>",
      markscheme: [
        // EN: A1: Domain −3 ≤ x ≤ 3 (since −1 ≤ x/3 ≤ 1).
        "A1: 정의역 −3 ≤ x ≤ 3 (−1 ≤ x/3 ≤ 1이므로).",
        // EN: A1: Range −π/2 ≤ f(x) ≤ 3π/2 (arccos takes values in [0, π]).
        "A1: 치역 −π/2 ≤ f(x) ≤ 3π/2 (arccos의 값은 [0, π]에 있음).",
        // EN: M1: f(x) = 0 gives arccos(x/3) = π/4.
        "M1: f(x) = 0에서 arccos(x/3) = π/4.",
        // EN: A1: x = 3 cos(π/4) = 3√2/2.
        "A1: x = 3 cos(π/4) = 3√2/2.",
        // EN: M1: Graph y = f(x) and y = x on −3 ≤ x ≤ 3 and find the intersection.
        "M1: −3 ≤ x ≤ 3에서 y = f(x)와 y = x의 그래프를 그리고 교점을 구함.",
        // EN: A1: x = 0.936.
        "A1: x = 0.936.",
      ],
    },

    // ── t3-2-q042 · numeric · foundation · SL · SL 3.5 · 3 marks
    "t3-2-q042": {
      // EN: <p>Find the exact value of <span class="chem">cos(7pi/4) × tan(4pi/3)</span>.</p>
      stem: "<p><span class=\"chem\">cos(7pi/4) × tan(4pi/3)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: <span class="chem">7pi/4</span> is in quadrant IV (reference angle <span class="chem">pi/4</span>), where cos is positive. <span class="chem">4pi/3</span> is in quadrant III (reference angle <span class="chem">pi/3</span>), where tan is positive.
        "<span class=\"chem\">7pi/4</span>는 제4사분면(기준각 <span class=\"chem\">pi/4</span>)에 있고, 그곳에서 cos는 양수예요. <span class=\"chem\">4pi/3</span>은 제3사분면(기준각 <span class=\"chem\">pi/3</span>)에 있고, 그곳에서 tan는 양수예요.",
        // EN: <span class="chem">cos(7pi/4) = sqrt(2)/2</span> and <span class="chem">tan(4pi/3) = tan(pi/3) = sqrt(3)</span>.
        "<span class=\"chem\">cos(7pi/4) = sqrt(2)/2</span>, <span class=\"chem\">tan(4pi/3) = tan(pi/3) = sqrt(3)</span>.",
      ],
      // EN: <p><span class="chem">cos(7pi/4) = +cos(pi/4) = sqrt(2)/2</span>; <span class="chem">tan(4pi/3) = +tan(pi/3) = sqrt(3)</span>.</p><p>Product: <span class="chem">(sqrt(2)/2) × sqrt(3) =</span> <b><span class="chem">sqrt(6)/2</span></b>.</p>
      solution: "<p><span class=\"chem\">cos(7pi/4) = +cos(pi/4) = sqrt(2)/2</span>; <span class=\"chem\">tan(4pi/3) = +tan(pi/3) = sqrt(3)</span>.</p><p>곱: <span class=\"chem\">(sqrt(2)/2) × sqrt(3) =</span> <b><span class=\"chem\">sqrt(6)/2</span></b>.</p>",
    },

    // ── t3-2-q043 · numeric · foundation · SL · SL 3.6 · 3 marks
    "t3-2-q043": {
      // EN: <p>The angle <span class="chem">theta</span> is obtuse and <span class="chem">sin theta = 5/13</span>. Find the exact value of <span class="chem">tan theta</span>.</p>
      stem: "<p>각 <span class=\"chem\">theta</span>는 둔각이고 <span class=\"chem\">sin theta = 5/13</span>이에요. <span class=\"chem\">tan theta</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Use <span class="chem">cos^2 theta = 1 - sin^2 theta</span>. An obtuse angle is in quadrant II, where cosine is negative.
        "<span class=\"chem\">cos^2 theta = 1 - sin^2 theta</span>를 이용하세요. 둔각은 제2사분면에 있고, 그곳에서 코사인은 음수예요.",
        // EN: <span class="chem">cos theta = -12/13</span>, then <span class="chem">tan theta = sin theta / cos theta</span>.
        "<span class=\"chem\">cos theta = -12/13</span>, 그다음 <span class=\"chem\">tan theta = sin theta / cos theta</span>예요.",
      ],
      // EN: <p><span class="chem">cos^2 theta = 1 - 25/169 = 144/169</span>, and <span class="chem">theta</span> is obtuse, so <span class="chem">cos theta = -12/13</span>.</p><p><span class="chem">tan theta = (5/13)/(-12/13) =</span> <b><span class="chem">-5/12</span></b>.</p>
      solution: "<p><span class=\"chem\">cos^2 theta = 1 - 25/169 = 144/169</span>이고 <span class=\"chem\">theta</span>는 둔각이므로 <span class=\"chem\">cos theta = -12/13</span>이에요.</p><p><span class=\"chem\">tan theta = (5/13)/(-12/13) =</span> <b><span class=\"chem\">-5/12</span></b>.</p>",
    },

    // ── t3-2-q044 · mcq · foundation · SL · SL 3.7 · 2 marks
    "t3-2-q044": {
      // EN: <p>Consider the graph of <span class="chem">y = tan(x/2)</span> for <span class="chem">-2pi &lt; x &lt; 2pi</span>. Which option gives its period and the equations of its vertical asymptotes in this interval?</p>
      stem: "<p><span class=\"chem\">-2pi &lt; x &lt; 2pi</span>에서 <span class=\"chem\">y = tan(x/2)</span>의 그래프를 생각해요. 그 주기와 이 구간에서의 수직 점근선의 방정식을 바르게 나타낸 것은 어느 것인가요?</p>",
      options: [
        // EN: Period <span class="chem">2pi</span>; asymptotes <span class="chem">x = -pi</span> and <span class="chem">x = pi</span>
        "주기 <span class=\"chem\">2pi</span>; 점근선 <span class=\"chem\">x = -pi</span>와 <span class=\"chem\">x = pi</span>",
        // EN: Period <span class="chem">pi/2</span>; asymptotes <span class="chem">x = -pi/4</span> and <span class="chem">x = pi/4</span>
        "주기 <span class=\"chem\">pi/2</span>; 점근선 <span class=\"chem\">x = -pi/4</span>와 <span class=\"chem\">x = pi/4</span>",
        // EN: Period <span class="chem">4pi</span>; no asymptotes in this interval
        "주기 <span class=\"chem\">4pi</span>; 이 구간에서 점근선 없음",
        // EN: Period <span class="chem">2pi</span>; asymptotes <span class="chem">x = -pi/2</span> and <span class="chem">x = pi/2</span>
        "주기 <span class=\"chem\">2pi</span>; 점근선 <span class=\"chem\">x = -pi/2</span>와 <span class=\"chem\">x = pi/2</span>",
      ],
      hints: [
        // EN: The basic graph <span class="chem">y = tan u</span> has period <span class="chem">pi</span> and asymptotes at <span class="chem">u = pi/2 + k pi</span>.
        "기본 그래프 <span class=\"chem\">y = tan u</span>는 주기가 <span class=\"chem\">pi</span>이고 점근선은 <span class=\"chem\">u = pi/2 + k pi</span>에 있어요.",
        // EN: Put <span class="chem">u = x/2</span>: the asymptotes are where <span class="chem">x/2 = ±pi/2</span>.
        "<span class=\"chem\">u = x/2</span>로 두세요: 점근선은 <span class=\"chem\">x/2 = ±pi/2</span>인 곳이에요.",
      ],
      // EN: <p>Period of <span class="chem">tan(bx)</span> is <span class="chem">pi/b = pi/(1/2) = 2pi</span>. Asymptotes where <span class="chem">x/2 = pi/2 + k pi</span>, i.e. <span class="chem">x = pi + 2k pi</span>; in <span class="chem">(-2pi, 2pi)</span> these are <b><span class="chem">x = -pi</span> and <span class="chem">x = pi</span></b>.</p>
      solution: "<p><span class=\"chem\">tan(bx)</span>의 주기는 <span class=\"chem\">pi/b = pi/(1/2) = 2pi</span>예요. 점근선은 <span class=\"chem\">x/2 = pi/2 + k pi</span>, 즉 <span class=\"chem\">x = pi + 2k pi</span>인 곳이고, <span class=\"chem\">(-2pi, 2pi)</span>에서는 <b><span class=\"chem\">x = -pi</span>와 <span class=\"chem\">x = pi</span></b>예요.</p>",
      misconception: {
        // EN (option B): You multiplied the period π by 1/2. A horizontal stretch by factor 2 (x/2 inside) doubles the period: π ÷ (1/2) = 2π.
        "1": "주기 π에 1/2을 곱했어요. 수평 방향으로 2배 확대하면(괄호 안이 x/2) 주기는 두 배가 돼요: π ÷ (1/2) = 2π.",
        // EN (option C): The period of tan(bx) is π/b, not 2π/b: tan repeats every π, unlike sin and cos.
        "2": "tan(bx)의 주기는 2π/b가 아니라 π/b예요: sin, cos와 달리 tan는 π마다 반복돼요.",
        // EN (option D): These are the asymptotes of y = tan x. For tan(x/2) the asymptotes are where x/2 = ±π/2, that is x = ±π.
        "3": "이것은 y = tan x의 점근선이에요. tan(x/2)의 점근선은 x/2 = ±π/2, 즉 x = ±π인 곳이에요.",
      },
    },

    // ── t3-2-q045 · short · exam · SL · SL 3.6, 3.8 · 6 marks
    "t3-2-q045": {
      // EN: <p>(a) Show that the equation <span class="chem">cos 2x + 3 sin x = 2</span> can be written as <span class="chem">2 sin^2 x - 3 sin x + 1 = 0</span>. [2]</p><p>(b) Hence solve <span class="chem">cos 2x + 3 sin x = 2</span> for <span class="chem">0 &lt;= x &lt;= 2pi</span>. [4]</p>
      stem: "<p>(a) 방정식 <span class=\"chem\">cos 2x + 3 sin x = 2</span>를 <span class=\"chem\">2 sin^2 x - 3 sin x + 1 = 0</span>으로 쓸 수 있음을 보이시오 (Show that). [2]</p><p>(b) 이를 이용하여 (Hence) <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 <span class=\"chem\">cos 2x + 3 sin x = 2</span>를 푸시오. [4]</p>",
      hints: [
        // EN: The equation contains <span class="chem">sin x</span>, so pick the form of <span class="chem">cos 2x</span> that uses only <span class="chem">sin x</span>.
        "방정식에 <span class=\"chem\">sin x</span>가 있으므로 <span class=\"chem\">sin x</span>만 쓰는 <span class=\"chem\">cos 2x</span>의 꼴을 고르세요.",
        // EN: The quadratic factorises. <span class="chem">sin x = 1/2</span> has two solutions in <span class="chem">[0, 2pi]</span>, but <span class="chem">sin x = 1</span> has only one.
        "이 이차방정식은 인수분해돼요. <span class=\"chem\">sin x = 1/2</span>은 <span class=\"chem\">[0, 2pi]</span>에서 두 개의 해를 갖지만, <span class=\"chem\">sin x = 1</span>은 하나뿐이에요.",
      ],
      // EN: <p>(a) <span class="chem">1 - 2 sin^2 x + 3 sin x = 2</span>, so <span class="chem">2 sin^2 x - 3 sin x + 1 = 0</span>. (b) <span class="chem">(2 sin x - 1)(sin x - 1) = 0</span>, so <span class="chem">sin x = 1/2</span> or <span class="chem">sin x = 1</span>: <span class="chem">x = pi/6, pi/2, 5pi/6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">1 - 2 sin^2 x + 3 sin x = 2</span>이므로 <span class=\"chem\">2 sin^2 x - 3 sin x + 1 = 0</span>. (b) <span class=\"chem\">(2 sin x - 1)(sin x - 1) = 0</span>이므로 <span class=\"chem\">sin x = 1/2</span> 또는 <span class=\"chem\">sin x = 1</span>: <span class=\"chem\">x = pi/6, pi/2, 5pi/6</span>.</p>",
      markscheme: [
        // EN: M1: Use cos 2x = 1 − 2 sin²x (the form that matches sin x).
        "M1: cos 2x = 1 − 2 sin²x를 이용함(sin x에 맞는 꼴).",
        // EN: A1: 1 − 2 sin²x + 3 sin x − 2 = 0, so 2 sin²x − 3 sin x + 1 = 0 (AG).
        "A1: 1 − 2 sin²x + 3 sin x − 2 = 0이므로 2 sin²x − 3 sin x + 1 = 0 (AG).",
        // EN: M1: Factorise: (2 sin x − 1)(sin x − 1) = 0.
        "M1: 인수분해함: (2 sin x − 1)(sin x − 1) = 0.",
        // EN: A1: sin x = 1/2 or sin x = 1.
        "A1: sin x = 1/2 또는 sin x = 1.",
        // EN: A1: x = π/6, 5π/6.
        "A1: x = π/6, 5π/6.",
        // EN: A1: x = π/2.
        "A1: x = π/2.",
      ],
    },

    // ── t3-2-q046 · numeric · exam · SL · SL 3.5, 3.6 · 4 marks
    "t3-2-q046": {
      // EN: <p>Given that <span class="chem">tan theta = -2</span> and <span class="chem">3pi/2 &lt; theta &lt; 2pi</span>, find the exact value of <span class="chem">cos 2theta</span>.</p>
      stem: "<p><span class=\"chem\">tan theta = -2</span>이고 <span class=\"chem\">3pi/2 &lt; theta &lt; 2pi</span>일 때, <span class=\"chem\">cos 2theta</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Draw a right-angled triangle with opposite 2 and adjacent 1: the hypotenuse is <span class="chem">sqrt(5)</span>. In quadrant IV, cos is positive and sin is negative.
        "대변이 2, 이웃변이 1인 직각삼각형을 그리면 빗변은 <span class=\"chem\">sqrt(5)</span>예요. 제4사분면에서 cos는 양수, sin은 음수예요.",
        // EN: <span class="chem">cos theta = 1/sqrt(5)</span>, <span class="chem">sin theta = -2/sqrt(5)</span>. Then use <span class="chem">cos 2theta = cos^2 theta - sin^2 theta</span>.
        "<span class=\"chem\">cos theta = 1/sqrt(5)</span>, <span class=\"chem\">sin theta = -2/sqrt(5)</span>. 그다음 <span class=\"chem\">cos 2theta = cos^2 theta - sin^2 theta</span>를 이용하세요.",
      ],
      // EN: <p>In quadrant IV: <span class="chem">cos theta = 1/sqrt(5)</span>, <span class="chem">sin theta = -2/sqrt(5)</span>.</p><p><span class="chem">cos 2theta = cos^2 theta - sin^2 theta = 1/5 - 4/5 =</span> <b><span class="chem">-3/5</span></b>. (The sign of <span class="chem">sin theta</span> does not matter here, because it is squared.)</p>
      solution: "<p>제4사분면에서: <span class=\"chem\">cos theta = 1/sqrt(5)</span>, <span class=\"chem\">sin theta = -2/sqrt(5)</span>.</p><p><span class=\"chem\">cos 2theta = cos^2 theta - sin^2 theta = 1/5 - 4/5 =</span> <b><span class=\"chem\">-3/5</span></b>. (여기서 <span class=\"chem\">sin theta</span>는 제곱되므로 그 부호는 상관없어요.)</p>",
    },

    // ── t3-2-q047 · short · exam · SL · SL 3.7, 3.8 · 9 marks
    "t3-2-q047": {
      // EN: <p>The function <span class="chem">f(x) = a sin(b(x - c)) + d</span>, where <span class="chem">a, b &gt; 0</span> and <span class="chem">-pi/2 &lt; c &lt; 0</span>, has a maximum point at <span class="chem">(pi/8, 7)</span>. The next minimum point to the right is <span class="chem">(5pi/8, -1)</span>.</p><p>(a) Write down the value of <span class="chem">a</span> and the value of <span class="chem">d</span>. [2]</p><p>(b) Find the value of <span class="chem">b</span>. [2]</p><p>(c) Find the value of <span class="chem">c</span>. [1]</p><p>(d) Solve <span class="chem">f(x) = 5</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. [4]</p>
      stem: "<p>함수 <span class=\"chem\">f(x) = a sin(b(x - c)) + d</span> (<span class=\"chem\">a, b &gt; 0</span>, <span class=\"chem\">-pi/2 &lt; c &lt; 0</span>)는 극대점 <span class=\"chem\">(pi/8, 7)</span>을 가져요. 오른쪽으로 그다음 극소점은 <span class=\"chem\">(5pi/8, -1)</span>이에요.</p><p>(a) <span class=\"chem\">a</span>의 값과 <span class=\"chem\">d</span>의 값을 쓰시오 (Write down). [2]</p><p>(b) <span class=\"chem\">b</span>의 값을 구하시오 (Find). [2]</p><p>(c) <span class=\"chem\">c</span>의 값을 구하시오. [1]</p><p>(d) <span class=\"chem\">0 &lt;= x &lt;= pi</span>에서 <span class=\"chem\">f(x) = 5</span>를 푸시오 (Solve). [4]</p>",
      hints: [
        // EN: Amplitude = half the distance from max to min; the principal axis is halfway between them. From a maximum to the next minimum is half a period.
        "진폭 = 최댓값에서 최솟값까지 거리의 절반이고, 중심축은 그 한가운데에 있어요. 극대점에서 다음 극소점까지는 반주기예요.",
        // EN: A positive sine reaches its maximum when the bracket equals <span class="chem">pi/2</span>: solve <span class="chem">b(pi/8 - c) = pi/2</span>.
        "양의 사인 함수는 괄호 안이 <span class=\"chem\">pi/2</span>일 때 최대가 돼요: <span class=\"chem\">b(pi/8 - c) = pi/2</span>를 푸세요.",
        // EN: For (d), let <span class="chem">u = 2x + pi/4</span> and change the interval before you solve <span class="chem">sin u = 1/2</span>.
        "(d)에서는 <span class=\"chem\">u = 2x + pi/4</span>로 두고, <span class=\"chem\">sin u = 1/2</span>을 풀기 전에 구간을 바꾸세요.",
      ],
      // EN: <p>(a) <span class="chem">a = 4</span>, <span class="chem">d = 3</span>. (b) Period <span class="chem">= 2(5pi/8 - pi/8) = pi</span>, so <span class="chem">b = 2</span>. (c) <span class="chem">2(pi/8 - c) = pi/2</span>, so <span class="chem">c = -pi/8</span>. (d) <span class="chem">sin(2x + pi/4) = 1/2</span> with <span class="chem">pi/4 &lt;= 2x + pi/4 &lt;= 9pi/4</span>: <span class="chem">2x + pi/4 = 5pi/6, 13pi/6</span>, so <span class="chem">x = 7pi/24, 23pi/24</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a = 4</span>, <span class=\"chem\">d = 3</span>. (b) 주기 <span class=\"chem\">= 2(5pi/8 - pi/8) = pi</span>이므로 <span class=\"chem\">b = 2</span>. (c) <span class=\"chem\">2(pi/8 - c) = pi/2</span>이므로 <span class=\"chem\">c = -pi/8</span>. (d) <span class=\"chem\">pi/4 &lt;= 2x + pi/4 &lt;= 9pi/4</span>에서 <span class=\"chem\">sin(2x + pi/4) = 1/2</span>: <span class=\"chem\">2x + pi/4 = 5pi/6, 13pi/6</span>이므로 <span class=\"chem\">x = 7pi/24, 23pi/24</span>.</p>",
      markscheme: [
        // EN: A1: a = (7 − (−1))/2 = 4.
        "A1: a = (7 − (−1))/2 = 4.",
        // EN: A1: d = (7 + (−1))/2 = 3.
        "A1: d = (7 + (−1))/2 = 3.",
        // EN: M1: Half-period = 5π/8 − π/8 = π/2, so the period is π.
        "M1: 반주기 = 5π/8 − π/8 = π/2이므로 주기는 π.",
        // EN: A1: b = 2π/π = 2.
        "A1: b = 2π/π = 2.",
        // EN: A1: Maximum where 2(x − c) = π/2 at x = π/8, so c = π/8 − π/4 = −π/8.
        "A1: x = π/8에서 2(x − c) = π/2일 때 최대이므로 c = π/8 − π/4 = −π/8.",
        // EN: M1: 4 sin(2x + π/4) + 3 = 5 gives sin(2x + π/4) = 1/2.
        "M1: 4 sin(2x + π/4) + 3 = 5에서 sin(2x + π/4) = 1/2.",
        // EN: M1: Transform the interval: π/4 ≤ 2x + π/4 ≤ 9π/4.
        "M1: 구간을 바꿈: π/4 ≤ 2x + π/4 ≤ 9π/4.",
        // EN: A1: 2x + π/4 = 5π/6 or 13π/6 (π/6 is outside the interval).
        "A1: 2x + π/4 = 5π/6 또는 13π/6 (π/6은 구간 밖).",
        // EN: A1: x = 7π/24, 23π/24.
        "A1: x = 7π/24, 23π/24.",
      ],
    },

    // ── t3-2-q048 · numeric · exam · SL · SL 3.8 · 4 marks
    "t3-2-q048": {
      // EN: <p>Find the number of solutions of the equation <span class="chem">2 sin^2 x = sin x</span> in the interval <span class="chem">-pi &lt;= x &lt;= pi</span>.</p>
      stem: "<p>구간 <span class=\"chem\">-pi &lt;= x &lt;= pi</span>에서 방정식 <span class=\"chem\">2 sin^2 x = sin x</span>의 해의 개수를 구하시오 (Find).</p>",
      hints: [
        // EN: Do not divide by <span class="chem">sin x</span>: you would lose the solutions with <span class="chem">sin x = 0</span>. Rearrange and factorise instead.
        "<span class=\"chem\">sin x</span>로 나누지 마세요: <span class=\"chem\">sin x = 0</span>인 해를 잃게 돼요. 대신 이항하고 인수분해하세요.",
        // EN: <span class="chem">sin x (2 sin x - 1) = 0</span>. Count the solutions of <span class="chem">sin x = 0</span> on <span class="chem">[-pi, pi]</span> (include both end points) and of <span class="chem">sin x = 1/2</span>.
        "<span class=\"chem\">sin x (2 sin x - 1) = 0</span>. <span class=\"chem\">[-pi, pi]</span>에서 <span class=\"chem\">sin x = 0</span>의 해(양 끝점 포함)와 <span class=\"chem\">sin x = 1/2</span>의 해를 세세요.",
      ],
      // EN: <p><span class="chem">sin x (2 sin x - 1) = 0</span>.</p><p><span class="chem">sin x = 0</span>: <span class="chem">x = -pi, 0, pi</span> (3 solutions). <span class="chem">sin x = 1/2</span>: <span class="chem">x = pi/6, 5pi/6</span> (2 solutions; none in <span class="chem">[-pi, 0)</span>, where sin is not positive).</p><p>Total: <b>5</b>.</p>
      solution: "<p><span class=\"chem\">sin x (2 sin x - 1) = 0</span>.</p><p><span class=\"chem\">sin x = 0</span>: <span class=\"chem\">x = -pi, 0, pi</span> (3개의 해). <span class=\"chem\">sin x = 1/2</span>: <span class=\"chem\">x = pi/6, 5pi/6</span> (2개의 해; <span class=\"chem\">[-pi, 0)</span>에서는 sin이 양수가 아니므로 해가 없어요).</p><p>합계: <b>5</b>.</p>",
    },

    // ── t3-2-q049 · numeric · exam · AHL · AHL 3.10, SL 3.6 · 5 marks
    "t3-2-q049": {
      // EN: <p>The angle <span class="chem">A</span> is acute with <span class="chem">sin A = 3/5</span>, and the angle <span class="chem">B</span> is obtuse with <span class="chem">cos B = -12/13</span>. Find the exact value of <span class="chem">sin(A - B)</span>.</p>
      stem: "<p>각 <span class=\"chem\">A</span>는 예각이고 <span class=\"chem\">sin A = 3/5</span>이며, 각 <span class=\"chem\">B</span>는 둔각이고 <span class=\"chem\">cos B = -12/13</span>이에요. <span class=\"chem\">sin(A - B)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Find the missing ratios with <span class="chem">sin^2 + cos^2 = 1</span>: A is acute, so <span class="chem">cos A &gt; 0</span>; B is obtuse, so <span class="chem">sin B &gt; 0</span>.
        "<span class=\"chem\">sin^2 + cos^2 = 1</span>로 빠진 삼각비를 구하세요: A는 예각이므로 <span class=\"chem\">cos A &gt; 0</span>, B는 둔각이므로 <span class=\"chem\">sin B &gt; 0</span>이에요.",
        // EN: <span class="chem">cos A = 4/5</span>, <span class="chem">sin B = 5/13</span>. Then <span class="chem">sin(A - B) = sin A cos B - cos A sin B</span>.
        "<span class=\"chem\">cos A = 4/5</span>, <span class=\"chem\">sin B = 5/13</span>. 그다음 <span class=\"chem\">sin(A - B) = sin A cos B - cos A sin B</span>예요.",
      ],
      // EN: <p><span class="chem">cos A = 4/5</span>, <span class="chem">sin B = 5/13</span>.</p><p><span class="chem">sin(A - B) = (3/5)(-12/13) - (4/5)(5/13) = -36/65 - 20/65 =</span> <b><span class="chem">-56/65</span></b>.</p>
      solution: "<p><span class=\"chem\">cos A = 4/5</span>, <span class=\"chem\">sin B = 5/13</span>.</p><p><span class=\"chem\">sin(A - B) = (3/5)(-12/13) - (4/5)(5/13) = -36/65 - 20/65 =</span> <b><span class=\"chem\">-56/65</span></b>.</p>",
    },

    // ── t3-2-q050 · short · challenge · AHL · AHL 3.10 · 10 marks
    "t3-2-q050": {
      // EN: <p>(a) Show that <span class="chem">tan 3theta = (3t - t^3)/(1 - 3t^2)</span>, where <span class="chem">t = tan theta</span>. [3]</p><p>(b) Show that if <span class="chem">tan 3theta = 1</span>, then <span class="chem">t = tan theta</span> satisfies <span class="chem">t^3 - 3t^2 - 3t + 1 = 0</span>. [1]</p><p>(c) By considering the solutions of <span class="chem">tan 3theta = 1</span> for <span class="chem">0 &lt; theta &lt; pi</span>, or otherwise, find the exact value of <span class="chem">tan(pi/12)</span>. Give your answer in the form <span class="chem">p + q sqrt(3)</span>, where <span class="chem">p, q in Z</span>. [6]</p>
      stem: "<p>(a) <span class=\"chem\">t = tan theta</span>일 때 <span class=\"chem\">tan 3theta = (3t - t^3)/(1 - 3t^2)</span>임을 보이시오 (Show that). [3]</p><p>(b) <span class=\"chem\">tan 3theta = 1</span>이면 <span class=\"chem\">t = tan theta</span>가 <span class=\"chem\">t^3 - 3t^2 - 3t + 1 = 0</span>을 만족함을 보이시오. [1]</p><p>(c) <span class=\"chem\">0 &lt; theta &lt; pi</span>에서 <span class=\"chem\">tan 3theta = 1</span>의 해를 생각하거나 다른 방법으로, <span class=\"chem\">tan(pi/12)</span>의 정확한 값을 구하시오 (Find). 답은 <span class=\"chem\">p + q sqrt(3)</span> (<span class=\"chem\">p, q in Z</span>) 꼴로 나타내시오. [6]</p>",
      hints: [
        // EN: Decode: part (c) hides an exact value inside a cubic. The three angles with <span class="chem">tan 3theta = 1</span> give the three roots of the cubic, and one root is an angle you know.
        "해석: (c)는 정확한 값을 삼차방정식 속에 숨겨 두었어요. <span class=\"chem\">tan 3theta = 1</span>을 만족하는 세 각이 삼차방정식의 세 근을 주고, 그중 한 근은 여러분이 아는 각이에요.",
        // EN: For (a), write <span class="chem">3theta = 2theta + theta</span> and use <span class="chem">tan(A + B)</span> with <span class="chem">tan 2theta = 2t/(1 - t^2)</span>.
        "(a)에서는 <span class=\"chem\">3theta = 2theta + theta</span>로 쓰고 <span class=\"chem\">tan(A + B)</span>와 <span class=\"chem\">tan 2theta = 2t/(1 - t^2)</span>를 이용하세요.",
        // EN: For (c), <span class="chem">3theta = pi/4 + k pi</span>. One of the three angles is <span class="chem">3pi/4</span>, whose tangent is <span class="chem">-1</span>: use it to factorise the cubic.
        "(c)에서는 <span class=\"chem\">3theta = pi/4 + k pi</span>예요. 세 각 중 하나는 <span class=\"chem\">3pi/4</span>이고 그 탄젠트는 <span class=\"chem\">-1</span>이에요: 이를 이용해 삼차식을 인수분해하세요.",
        // EN: Of the roots <span class="chem">2 - sqrt(3)</span> and <span class="chem">2 + sqrt(3)</span>, which belongs to the smaller angle <span class="chem">pi/12</span>?
        "근 <span class=\"chem\">2 - sqrt(3)</span>과 <span class=\"chem\">2 + sqrt(3)</span> 중 더 작은 각 <span class=\"chem\">pi/12</span>에 해당하는 것은 어느 것일까요?",
      ],
      // EN: <p><strong>Decoding:</strong> the cubic in (b) is the equation <span class="chem">tan 3theta = 1</span> written in terms of <span class="chem">t</span>. Its roots are the tangents of the three angles that solve <span class="chem">tan 3theta = 1</span>, so one root (<span class="chem">tan(3pi/4) = -1</span>) is known and lets you factorise.</p><p><span class="chem">(t + 1)(t^2 - 4t + 1) = 0</span> gives <span class="chem">t = -1, 2 ± sqrt(3)</span>. Since <span class="chem">tan</span> increases on <span class="chem">(0, pi/2)</span>, <span class="chem">tan(pi/12) = 2 - sqrt(3)</span> and <span class="chem">tan(5pi/12) = 2 + sqrt(3)</span>.</p>
      solution: "<p><strong>해석:</strong> (b)의 삼차방정식은 방정식 <span class=\"chem\">tan 3theta = 1</span>을 <span class=\"chem\">t</span>로 나타낸 것이에요. 그 근은 <span class=\"chem\">tan 3theta = 1</span>을 푸는 세 각의 탄젠트이므로, 한 근(<span class=\"chem\">tan(3pi/4) = -1</span>)을 알고 있어 인수분해할 수 있어요.</p><p><span class=\"chem\">(t + 1)(t^2 - 4t + 1) = 0</span>에서 <span class=\"chem\">t = -1, 2 ± sqrt(3)</span>. <span class=\"chem\">tan</span>은 <span class=\"chem\">(0, pi/2)</span>에서 증가하므로 <span class=\"chem\">tan(pi/12) = 2 - sqrt(3)</span>, <span class=\"chem\">tan(5pi/12) = 2 + sqrt(3)</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">tan(2theta + theta) = (2t/(1 - t^2) + t)/(1 - 2t^2/(1 - t^2)) = (3t - t^3)/(1 - 3t^2)</span>. (b) <span class="chem">3t - t^3 = 1 - 3t^2</span> rearranges to <span class="chem">t^3 - 3t^2 - 3t + 1 = 0</span>. (c) <span class="chem">3theta = pi/4, 5pi/4, 9pi/4</span>, so <span class="chem">theta = pi/12, 5pi/12, 3pi/4</span>: the cubic has roots <span class="chem">tan(pi/12), tan(5pi/12), -1</span>. Factorising, <span class="chem">(t + 1)(t^2 - 4t + 1) = 0</span>, so the other roots are <span class="chem">2 ± sqrt(3)</span>. <span class="chem">tan(pi/12)</span> is the smaller positive root: <span class="chem">tan(pi/12) = 2 - sqrt(3)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">tan(2theta + theta) = (2t/(1 - t^2) + t)/(1 - 2t^2/(1 - t^2)) = (3t - t^3)/(1 - 3t^2)</span>. (b) <span class=\"chem\">3t - t^3 = 1 - 3t^2</span>를 정리하면 <span class=\"chem\">t^3 - 3t^2 - 3t + 1 = 0</span>. (c) <span class=\"chem\">3theta = pi/4, 5pi/4, 9pi/4</span>이므로 <span class=\"chem\">theta = pi/12, 5pi/12, 3pi/4</span>: 삼차방정식의 근은 <span class=\"chem\">tan(pi/12), tan(5pi/12), -1</span>. 인수분해하면 <span class=\"chem\">(t + 1)(t^2 - 4t + 1) = 0</span>이므로 나머지 근은 <span class=\"chem\">2 ± sqrt(3)</span>. <span class=\"chem\">tan(pi/12)</span>는 더 작은 양의 근이므로 <span class=\"chem\">tan(pi/12) = 2 - sqrt(3)</span>.</p>",
      markscheme: [
        // EN: M1: Write tan 3θ = tan(2θ + θ) = (tan 2θ + tan θ)/(1 − tan 2θ tan θ).
        "M1: tan 3θ = tan(2θ + θ) = (tan 2θ + tan θ)/(1 − tan 2θ tan θ)로 씀.",
        // EN: M1: Substitute tan 2θ = 2t/(1 − t²).
        "M1: tan 2θ = 2t/(1 − t²)를 대입함.",
        // EN: A1: Multiply top and bottom by (1 − t²): (2t + t − t³)/(1 − t² − 2t²) = (3t − t³)/(1 − 3t²) (AG).
        "A1: 분자와 분모에 (1 − t²)를 곱함: (2t + t − t³)/(1 − t² − 2t²) = (3t − t³)/(1 − 3t²) (AG).",
        // EN: A1: 3t − t³ = 1 − 3t², so t³ − 3t² − 3t + 1 = 0 (AG).
        "A1: 3t − t³ = 1 − 3t²이므로 t³ − 3t² − 3t + 1 = 0 (AG).",
        // EN: M1: 3θ = π/4 + kπ with 0 < 3θ < 3π.
        "M1: 3θ = π/4 + kπ, 단 0 < 3θ < 3π.",
        // EN: A1: θ = π/12, 5π/12, 3π/4, so the three roots are tan(π/12), tan(5π/12) and tan(3π/4) = −1.
        "A1: θ = π/12, 5π/12, 3π/4이므로 세 근은 tan(π/12), tan(5π/12), tan(3π/4) = −1.",
        // EN: M1: t = −1 is a root, so (t + 1) is a factor: t³ − 3t² − 3t + 1 = (t + 1)(t² − 4t + 1).
        "M1: t = −1이 근이므로 (t + 1)은 인수: t³ − 3t² − 3t + 1 = (t + 1)(t² − 4t + 1).",
        // EN: A1: t² − 4t + 1 = 0 gives t = 2 ± √3.
        "A1: t² − 4t + 1 = 0에서 t = 2 ± √3.",
        // EN: R1: 0 < π/12 < 5π/12 < π/2 and tan is increasing there, so tan(π/12) is the smaller root.
        "R1: 0 < π/12 < 5π/12 < π/2이고 그 범위에서 tan는 증가하므로 tan(π/12)는 더 작은 근임.",
        // EN: A1: tan(π/12) = 2 − √3.
        "A1: tan(π/12) = 2 − √3.",
      ],
    },

    // ── t3-2-q051 · short · exam · AHL · AHL 3.9, SL 3.8 · 5 marks
    "t3-2-q051": {
      // EN: <p>(a) Show that <span class="chem">sec theta - cos theta = sin theta tan theta</span>, for <span class="chem">cos theta != 0</span>. [2]</p><p>(b) Hence solve <span class="chem">sec theta - cos theta = sqrt(3) sin theta</span> for <span class="chem">0 &lt;= theta &lt;= 2pi</span>. [3]</p>
      stem: "<p>(a) <span class=\"chem\">cos theta != 0</span>일 때 <span class=\"chem\">sec theta - cos theta = sin theta tan theta</span>임을 보이시오 (Show that). [2]</p><p>(b) 이를 이용하여 (Hence) <span class=\"chem\">0 &lt;= theta &lt;= 2pi</span>에서 <span class=\"chem\">sec theta - cos theta = sqrt(3) sin theta</span>를 푸시오. [3]</p>",
      hints: [
        // EN: Write <span class="chem">sec theta = 1/cos theta</span> and use a common denominator.
        "<span class=\"chem\">sec theta = 1/cos theta</span>로 쓰고 통분하세요.",
        // EN: In (b), move everything to one side and factor out <span class="chem">sin theta</span>. None of the solutions makes <span class="chem">cos theta = 0</span>, so all are valid.
        "(b)에서는 모든 항을 한쪽으로 옮기고 <span class=\"chem\">sin theta</span>로 묶으세요. 어떤 해도 <span class=\"chem\">cos theta = 0</span>이 되지 않으므로 모두 유효해요.",
      ],
      // EN: <p>(a) <span class="chem">sec theta - cos theta = (1 - cos^2 theta)/cos theta = sin^2 theta / cos theta = sin theta tan theta</span>. (b) <span class="chem">sin theta (tan theta - sqrt(3)) = 0</span>: <span class="chem">theta = 0, pi, 2pi</span> or <span class="chem">theta = pi/3, 4pi/3</span>.</p>
      answer: "<p>(a) <span class=\"chem\">sec theta - cos theta = (1 - cos^2 theta)/cos theta = sin^2 theta / cos theta = sin theta tan theta</span>. (b) <span class=\"chem\">sin theta (tan theta - sqrt(3)) = 0</span>: <span class=\"chem\">theta = 0, pi, 2pi</span> 또는 <span class=\"chem\">theta = pi/3, 4pi/3</span>.</p>",
      markscheme: [
        // EN: M1: Write sec θ − cos θ = 1/cos θ − cos θ = (1 − cos²θ)/cos θ.
        "M1: sec θ − cos θ = 1/cos θ − cos θ = (1 − cos²θ)/cos θ로 씀.",
        // EN: A1: = sin²θ/cos θ = sin θ · (sin θ/cos θ) = sin θ tan θ (AG).
        "A1: = sin²θ/cos θ = sin θ · (sin θ/cos θ) = sin θ tan θ (AG).",
        // EN: M1: sin θ tan θ − √3 sin θ = 0, so sin θ (tan θ − √3) = 0 (do not divide by sin θ).
        "M1: sin θ tan θ − √3 sin θ = 0이므로 sin θ (tan θ − √3) = 0 (sin θ로 나누지 않음).",
        // EN: A1: sin θ = 0: θ = 0, π, 2π.
        "A1: sin θ = 0: θ = 0, π, 2π.",
        // EN: A1: tan θ = √3: θ = π/3, 4π/3.
        "A1: tan θ = √3: θ = π/3, 4π/3.",
      ],
    },

    // ── t3-2-q052 · numeric · challenge · AHL · AHL 3.9, 3.11 · 4 marks
    "t3-2-q052": {
      // EN: <p>Find the largest value of <span class="chem">k</span>, where <span class="chem">0 &lt; k &lt; 2</span>, such that <span class="chem">tan(k pi) = cot(pi/9)</span>.</p>
      stem: "<p><span class=\"chem\">0 &lt; k &lt; 2</span>에서 <span class=\"chem\">tan(k pi) = cot(pi/9)</span>를 만족하는 <span class=\"chem\">k</span>의 최댓값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: rewrite <span class="chem">cot(pi/9)</span> as a tangent of some angle using a symmetry of the graphs, then use the period of tan to find EVERY <span class="chem">k</span> in the interval; the question wants the largest.
        "해석: 그래프의 대칭성을 이용해 <span class=\"chem\">cot(pi/9)</span>를 어떤 각의 탄젠트로 바꿔 쓴 다음, tan의 주기를 이용해 구간 안의 \"모든\" <span class=\"chem\">k</span>를 찾으세요. 문제는 그중 가장 큰 값을 원해요.",
        // EN: <span class="chem">cot theta = tan(pi/2 - theta)</span>, so <span class="chem">cot(pi/9) = tan(7pi/18)</span>.
        "<span class=\"chem\">cot theta = tan(pi/2 - theta)</span>이므로 <span class=\"chem\">cot(pi/9) = tan(7pi/18)</span>이에요.",
        // EN: tan has period <span class="chem">pi</span>: <span class="chem">k pi = 7pi/18 + n pi</span>. Which values of <span class="chem">n</span> keep <span class="chem">0 &lt; k &lt; 2</span>?
        "tan의 주기는 <span class=\"chem\">pi</span>예요: <span class=\"chem\">k pi = 7pi/18 + n pi</span>. 어떤 <span class=\"chem\">n</span>의 값이 <span class=\"chem\">0 &lt; k &lt; 2</span>를 유지하나요?",
      ],
      // EN: <p><strong>Decoding:</strong> the symmetry <span class="chem">cot theta = tan(pi/2 - theta)</span> turns the right-hand side into a tangent, and the hidden condition "largest" means you must use the period <span class="chem">pi</span> of tan.</p><p><span class="chem">cot(pi/9) = tan(pi/2 - pi/9) = tan(7pi/18)</span>, so <span class="chem">k pi = 7pi/18 + n pi</span>, <span class="chem">k = 7/18 + n</span>. In <span class="chem">0 &lt; k &lt; 2</span>: <span class="chem">k = 7/18</span> or <span class="chem">25/18</span>.</p><p>Largest: <b><span class="chem">k = 25/18</span></b>.</p>
      solution: "<p><strong>해석:</strong> 대칭 관계 <span class=\"chem\">cot theta = tan(pi/2 - theta)</span>가 우변을 탄젠트로 바꾸고, \"가장 큰\"이라는 숨은 조건은 tan의 주기 <span class=\"chem\">pi</span>를 이용해야 함을 뜻해요.</p><p><span class=\"chem\">cot(pi/9) = tan(pi/2 - pi/9) = tan(7pi/18)</span>이므로 <span class=\"chem\">k pi = 7pi/18 + n pi</span>, <span class=\"chem\">k = 7/18 + n</span>. <span class=\"chem\">0 &lt; k &lt; 2</span>에서: <span class=\"chem\">k = 7/18</span> 또는 <span class=\"chem\">25/18</span>.</p><p>최댓값: <b><span class=\"chem\">k = 25/18</span></b>.</p>",
    },

    // ── t3-2-q053 · short · challenge · SL · SL 3.5, 3.6 · 8 marks
    "t3-2-q053": {
      // EN: <p>The angle <span class="chem">theta</span> satisfies <span class="chem">0 &lt; theta &lt; pi</span> and <span class="chem">sin theta + cos theta = 1/5</span>.</p><p>(a) Find the exact value of <span class="chem">sin 2theta</span>. [2]</p><p>(b) Explain why <span class="chem">pi/2 &lt; theta &lt; pi</span>, and hence find the exact value of <span class="chem">cos theta - sin theta</span>. [3]</p><p>(c) Hence find the exact value of <span class="chem">cos 2theta</span>. [3]</p>
      stem: "<p>각 <span class=\"chem\">theta</span>는 <span class=\"chem\">0 &lt; theta &lt; pi</span>와 <span class=\"chem\">sin theta + cos theta = 1/5</span>를 만족해요.</p><p>(a) <span class=\"chem\">sin 2theta</span>의 정확한 값을 구하시오 (Find). [2]</p><p>(b) <span class=\"chem\">pi/2 &lt; theta &lt; pi</span>인 이유를 설명하고 (Explain), 이를 이용하여 (hence) <span class=\"chem\">cos theta - sin theta</span>의 정확한 값을 구하시오. [3]</p><p>(c) 이를 이용하여 <span class=\"chem\">cos 2theta</span>의 정확한 값을 구하시오. [3]</p>",
      hints: [
        // EN: Decode: you are never asked for <span class="chem">theta</span> itself. Squaring a sum of sin and cos produces <span class="chem">sin^2 + cos^2 = 1</span> and the double-angle term <span class="chem">2 sin theta cos theta = sin 2theta</span>.
        "해석: <span class=\"chem\">theta</span> 자체는 한 번도 묻지 않아요. sin과 cos의 합을 제곱하면 <span class=\"chem\">sin^2 + cos^2 = 1</span>과 배각 항 <span class=\"chem\">2 sin theta cos theta = sin 2theta</span>가 나와요.",
        // EN: Square <span class="chem">sin theta + cos theta = 1/5</span>.
        "<span class=\"chem\">sin theta + cos theta = 1/5</span>를 제곱하세요.",
        // EN: For (b), the sign of <span class="chem">sin 2theta</span> tells you the signs of sin and cos. Square <span class="chem">cos theta - sin theta</span> in the same way, then pick the correct sign of the square root.
        "(b)에서는 <span class=\"chem\">sin 2theta</span>의 부호가 sin과 cos의 부호를 알려 줘요. 같은 방법으로 <span class=\"chem\">cos theta - sin theta</span>를 제곱한 다음, 제곱근의 올바른 부호를 고르세요.",
        // EN: For (c), factorise <span class="chem">cos^2 theta - sin^2 theta</span> as a difference of two squares.
        "(c)에서는 <span class=\"chem\">cos^2 theta - sin^2 theta</span>를 제곱의 차로 인수분해하세요.",
      ],
      // EN: <p><strong>Decoding:</strong> "find sin 2θ from sin θ + cos θ" is a squaring trick, and the sign of a square root is decided by the quadrant, which you must justify from the data.</p><p>(a) <span class="chem">sin 2theta = 1/25 - 1 = -24/25</span>. (b) <span class="chem">theta</span> obtuse; <span class="chem">cos theta - sin theta = -7/5</span>. (c) <span class="chem">cos 2theta = -7/25</span>. (Check: <span class="chem">sin theta = 4/5</span>, <span class="chem">cos theta = -3/5</span>.)</p>
      solution: "<p><strong>해석:</strong> \"sin θ + cos θ로부터 sin 2θ 구하기\"는 제곱하는 기법이고, 제곱근의 부호는 사분면으로 정해지는데, 이는 주어진 자료로부터 근거를 대야 해요.</p><p>(a) <span class=\"chem\">sin 2theta = 1/25 - 1 = -24/25</span>. (b) <span class=\"chem\">theta</span>는 둔각; <span class=\"chem\">cos theta - sin theta = -7/5</span>. (c) <span class=\"chem\">cos 2theta = -7/25</span>. (확인: <span class=\"chem\">sin theta = 4/5</span>, <span class=\"chem\">cos theta = -3/5</span>.)</p>",
      // EN: <p>(a) Squaring: <span class="chem">1 + sin 2theta = 1/25</span>, so <span class="chem">sin 2theta = -24/25</span>. (b) <span class="chem">2 sin theta cos theta &lt; 0</span>, and <span class="chem">sin theta &gt; 0</span> on <span class="chem">(0, pi)</span>, so <span class="chem">cos theta &lt; 0</span>: <span class="chem">theta</span> is obtuse. <span class="chem">(cos theta - sin theta)^2 = 1 - sin 2theta = 49/25</span> and <span class="chem">cos theta - sin theta &lt; 0</span>, so it equals <span class="chem">-7/5</span>. (c) <span class="chem">cos 2theta = (cos theta - sin theta)(cos theta + sin theta) = (-7/5)(1/5) = -7/25</span>.</p>
      answer: "<p>(a) 제곱하면: <span class=\"chem\">1 + sin 2theta = 1/25</span>이므로 <span class=\"chem\">sin 2theta = -24/25</span>. (b) <span class=\"chem\">2 sin theta cos theta &lt; 0</span>이고 <span class=\"chem\">(0, pi)</span>에서 <span class=\"chem\">sin theta &gt; 0</span>이므로 <span class=\"chem\">cos theta &lt; 0</span>: <span class=\"chem\">theta</span>는 둔각. <span class=\"chem\">(cos theta - sin theta)^2 = 1 - sin 2theta = 49/25</span>이고 <span class=\"chem\">cos theta - sin theta &lt; 0</span>이므로 그 값은 <span class=\"chem\">-7/5</span>. (c) <span class=\"chem\">cos 2theta = (cos theta - sin theta)(cos theta + sin theta) = (-7/5)(1/5) = -7/25</span>.</p>",
      markscheme: [
        // EN: M1: Square both sides: sin²θ + 2 sin θ cos θ + cos²θ = 1/25.
        "M1: 양변을 제곱함: sin²θ + 2 sin θ cos θ + cos²θ = 1/25.",
        // EN: A1: 1 + sin 2θ = 1/25, so sin 2θ = −24/25.
        "A1: 1 + sin 2θ = 1/25이므로 sin 2θ = −24/25.",
        // EN: R1: sin 2θ = 2 sin θ cos θ < 0 and sin θ > 0 for 0 < θ < π, so cos θ < 0 and π/2 < θ < π.
        "R1: sin 2θ = 2 sin θ cos θ < 0이고 sin θ > 0 (0 < θ < π일 때)이므로 cos θ < 0이고 π/2 < θ < π.",
        // EN: M1: (cos θ − sin θ)² = 1 − 2 sin θ cos θ = 1 − sin 2θ = 49/25.
        "M1: (cos θ − sin θ)² = 1 − 2 sin θ cos θ = 1 − sin 2θ = 49/25.",
        // EN: A1: cos θ < 0 < sin θ, so cos θ − sin θ = −7/5.
        "A1: cos θ < 0 < sin θ이므로 cos θ − sin θ = −7/5.",
        // EN: M1: cos 2θ = cos²θ − sin²θ = (cos θ − sin θ)(cos θ + sin θ).
        "M1: cos 2θ = cos²θ − sin²θ = (cos θ − sin θ)(cos θ + sin θ).",
        // EN: A1: = (−7/5)(1/5).
        "A1: = (−7/5)(1/5).",
        // EN: A1: = −7/25.
        "A1: = −7/25.",
      ],
    },

    // ── t3-2-q054 · numeric · exam · SL · SL 3.7 · 3 marks
    "t3-2-q054": {
      // EN: <p>Let <span class="chem">f(x) = 5 sin(2x - pi/3) + 1</span>, for <span class="chem">x &gt; 0</span>. Find the exact value of the smallest <span class="chem">x</span> at which <span class="chem">f</span> has its maximum value.</p>
      stem: "<p><span class=\"chem\">x &gt; 0</span>에서 <span class=\"chem\">f(x) = 5 sin(2x - pi/3) + 1</span>이라고 해요. <span class=\"chem\">f</span>가 최댓값을 갖는 가장 작은 <span class=\"chem\">x</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: A sine function with positive amplitude is largest when its bracket equals <span class="chem">pi/2 + 2k pi</span>.
        "진폭이 양수인 사인 함수는 괄호 안이 <span class=\"chem\">pi/2 + 2k pi</span>일 때 최대가 돼요.",
        // EN: Solve <span class="chem">2x - pi/3 = pi/2</span>, and check that no smaller positive <span class="chem">x</span> works (the bracket value <span class="chem">pi/2 - 2pi</span> gives a negative <span class="chem">x</span>).
        "<span class=\"chem\">2x - pi/3 = pi/2</span>를 풀고, 더 작은 양수 <span class=\"chem\">x</span>가 없는지 확인하세요(괄호의 값 <span class=\"chem\">pi/2 - 2pi</span>는 음수 <span class=\"chem\">x</span>를 줘요).",
      ],
      // EN: <p>Maximum (value 6) when <span class="chem">2x - pi/3 = pi/2 + 2k pi</span>. With <span class="chem">k = 0</span>: <span class="chem">2x = 5pi/6</span>, <span class="chem">x = 5pi/12</span>. With <span class="chem">k = -1</span>, <span class="chem">x = -7pi/12 &lt; 0</span>.</p><p>Answer: <b><span class="chem">x = 5pi/12</span></b>.</p>
      solution: "<p><span class=\"chem\">2x - pi/3 = pi/2 + 2k pi</span>일 때 최대(값은 6). <span class=\"chem\">k = 0</span>이면: <span class=\"chem\">2x = 5pi/6</span>, <span class=\"chem\">x = 5pi/12</span>. <span class=\"chem\">k = -1</span>이면 <span class=\"chem\">x = -7pi/12 &lt; 0</span>.</p><p>답: <b><span class=\"chem\">x = 5pi/12</span></b>.</p>",
    },

    // ── t3-2-q055 · numeric · challenge · AHL · AHL 3.11, SL 3.8 · 6 marks
    "t3-2-q055": {
      // EN: <p>Find the number of solutions of the equation <span class="chem">sin 3x = cos x</span> in the interval <span class="chem">0 &lt;= x &lt;= 2pi</span>.</p>
      stem: "<p>구간 <span class=\"chem\">0 &lt;= x &lt;= 2pi</span>에서 방정식 <span class=\"chem\">sin 3x = cos x</span>의 해의 개수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is not a quadratic in disguise. Turn the right-hand side into a sine with the symmetry <span class="chem">cos x = sin(pi/2 - x)</span>, so the equation becomes <span class="chem">sin A = sin B</span>.
        "해석: 이것은 이차방정식이 숨어 있는 문제가 아니에요. 대칭 관계 <span class=\"chem\">cos x = sin(pi/2 - x)</span>로 우변을 사인으로 바꾸면 방정식은 <span class=\"chem\">sin A = sin B</span>가 돼요.",
        // EN: <span class="chem">sin A = sin B</span> when <span class="chem">A = B + 2k pi</span> or <span class="chem">A = pi - B + 2k pi</span> (because <span class="chem">sin(pi - theta) = sin theta</span>).
        "<span class=\"chem\">sin A = sin B</span>는 <span class=\"chem\">A = B + 2k pi</span> 또는 <span class=\"chem\">A = pi - B + 2k pi</span>일 때 성립해요(<span class=\"chem\">sin(pi - theta) = sin theta</span>이기 때문이에요).",
        // EN: The two families are <span class="chem">x = pi/8 + k pi/2</span> and <span class="chem">x = pi/4 + k pi</span>. List those in <span class="chem">[0, 2pi]</span> and check for repeats.
        "두 해의 묶음은 <span class=\"chem\">x = pi/8 + k pi/2</span>와 <span class=\"chem\">x = pi/4 + k pi</span>예요. <span class=\"chem\">[0, 2pi]</span>에 있는 것을 나열하고 중복이 있는지 확인하세요.",
      ],
      // EN: <p><strong>Decoding:</strong> use the symmetry identities to write both sides as the same function, then solve <span class="chem">sin A = sin B</span>.</p><p><span class="chem">sin 3x = sin(pi/2 - x)</span>.</p><p>Case 1: <span class="chem">3x = pi/2 - x + 2k pi</span>, so <span class="chem">x = pi/8 + k pi/2</span>: <span class="chem">pi/8, 5pi/8, 9pi/8, 13pi/8</span>.</p><p>Case 2: <span class="chem">3x = pi - (pi/2 - x) + 2k pi</span>, so <span class="chem">x = pi/4 + k pi</span>: <span class="chem">pi/4, 5pi/4</span>.</p><p>No value appears twice: <b>6</b> solutions.</p>
      solution: "<p><strong>해석:</strong> 대칭 항등식을 이용해 양변을 같은 함수로 쓴 다음 <span class=\"chem\">sin A = sin B</span>를 푸세요.</p><p><span class=\"chem\">sin 3x = sin(pi/2 - x)</span>.</p><p>경우 1: <span class=\"chem\">3x = pi/2 - x + 2k pi</span>이므로 <span class=\"chem\">x = pi/8 + k pi/2</span>: <span class=\"chem\">pi/8, 5pi/8, 9pi/8, 13pi/8</span>.</p><p>경우 2: <span class=\"chem\">3x = pi - (pi/2 - x) + 2k pi</span>이므로 <span class=\"chem\">x = pi/4 + k pi</span>: <span class=\"chem\">pi/4, 5pi/4</span>.</p><p>두 번 나오는 값이 없으므로: <b>6</b>개의 해.</p>",
    },

    // ── t3-2-q056 · short · exam · SL · SL 3.6, 3.8 · 5 marks
    "t3-2-q056": {
      // EN: <p>(a) Show that <span class="chem">cos^4 x - sin^4 x = cos 2x</span>. [2]</p><p>(b) Hence solve <span class="chem">cos^4 x - sin^4 x = 1/2</span> for <span class="chem">0 &lt;= x &lt;= pi</span>. [3]</p>
      stem: "<p>(a) <span class=\"chem\">cos^4 x - sin^4 x = cos 2x</span>임을 보이시오 (Show that). [2]</p><p>(b) 이를 이용하여 (Hence) <span class=\"chem\">0 &lt;= x &lt;= pi</span>에서 <span class=\"chem\">cos^4 x - sin^4 x = 1/2</span>을 푸시오. [3]</p>",
      hints: [
        // EN: <span class="chem">cos^4 x - sin^4 x</span> is a difference of two squares: <span class="chem">(cos^2 x)^2 - (sin^2 x)^2</span>.
        "<span class=\"chem\">cos^4 x - sin^4 x</span>는 제곱의 차예요: <span class=\"chem\">(cos^2 x)^2 - (sin^2 x)^2</span>.",
        // EN: In (b), double the interval before you solve <span class="chem">cos 2x = 1/2</span>.
        "(b)에서는 <span class=\"chem\">cos 2x = 1/2</span>을 풀기 전에 구간을 두 배로 늘리세요.",
      ],
      // EN: <p>(a) <span class="chem">cos^4 x - sin^4 x = (cos^2 x - sin^2 x)(cos^2 x + sin^2 x) = cos 2x × 1 = cos 2x</span>. (b) <span class="chem">cos 2x = 1/2</span> with <span class="chem">0 &lt;= 2x &lt;= 2pi</span>: <span class="chem">2x = pi/3, 5pi/3</span>, so <span class="chem">x = pi/6, 5pi/6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">cos^4 x - sin^4 x = (cos^2 x - sin^2 x)(cos^2 x + sin^2 x) = cos 2x × 1 = cos 2x</span>. (b) <span class=\"chem\">0 &lt;= 2x &lt;= 2pi</span>에서 <span class=\"chem\">cos 2x = 1/2</span>: <span class=\"chem\">2x = pi/3, 5pi/3</span>이므로 <span class=\"chem\">x = pi/6, 5pi/6</span>.</p>",
      markscheme: [
        // EN: M1: Factorise as a difference of squares: (cos²x − sin²x)(cos²x + sin²x).
        "M1: 제곱의 차로 인수분해함: (cos²x − sin²x)(cos²x + sin²x).",
        // EN: A1: Use cos²x + sin²x = 1 and cos²x − sin²x = cos 2x to get cos 2x (AG).
        "A1: cos²x + sin²x = 1과 cos²x − sin²x = cos 2x를 이용해 cos 2x를 얻음 (AG).",
        // EN: M1: cos 2x = 1/2 with the interval changed to 0 ≤ 2x ≤ 2π.
        "M1: 구간을 0 ≤ 2x ≤ 2π로 바꾸어 cos 2x = 1/2을 풂.",
        // EN: A1: 2x = π/3, 5π/3.
        "A1: 2x = π/3, 5π/3.",
        // EN: A1: x = π/6, 5π/6.
        "A1: x = π/6, 5π/6.",
      ],
    },

    // ── t3-2-q057 · short · challenge · AHL · AHL 3.9, 3.10 · 18 marks
    "t3-2-q057": {
      // EN: <p>This investigation looks at the sums <span class="chem">S_n = arctan(1/3) + arctan(1/7) + arctan(1/13) + … + arctan(1/(n^2 + n + 1))</span>, where <span class="chem">n in Z^+</span>. So <span class="chem">S_1 = arctan(1/3)</span>, <span class="chem">S_2 = arctan(1/3) + arctan(1/7)</span>, and so on.</p><p>(a) Use your GDC to find <span class="chem">S_1, S_2, S_3, S_4</span> in radians, and in each case find <span class="chem">tan(S_n)</span>, written as a fraction. [4]</p><p>(b) Conjecture an expression for <span class="chem">tan(S_n)</span> in terms of <span class="chem">n</span>. [1]</p><p>(c) Use the identity for <span class="chem">tan(A - B)</span> to show that, for <span class="chem">k in Z^+</span>, <span class="chem">arctan(1/k) - arctan(1/(k + 1)) = arctan(1/(k^2 + k + 1))</span>. [4]</p><p>(d) Hence show that <span class="chem">S_n = pi/4 - arctan(1/(n + 1))</span>. [3]</p><p>(e) Hence prove your conjecture from part (b). [3]</p><p>(f) Write down the limit of <span class="chem">S_n</span> as <span class="chem">n -&gt; infty</span>. [1]</p><p>(g) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 0.78</span>. [2]</p>
      stem: "<p>이 탐구에서는 합 <span class=\"chem\">S_n = arctan(1/3) + arctan(1/7) + arctan(1/13) + … + arctan(1/(n^2 + n + 1))</span> (<span class=\"chem\">n in Z^+</span>)를 살펴봐요. 즉 <span class=\"chem\">S_1 = arctan(1/3)</span>, <span class=\"chem\">S_2 = arctan(1/3) + arctan(1/7)</span>, 이와 같이 계속돼요.</p><p>(a) GDC를 이용하여 <span class=\"chem\">S_1, S_2, S_3, S_4</span>를 라디안으로 구하고 (Find), 각 경우에 <span class=\"chem\">tan(S_n)</span>을 분수로 구하시오. [4]</p><p>(b) <span class=\"chem\">tan(S_n)</span>을 <span class=\"chem\">n</span>으로 나타내는 식을 추측하시오 (Conjecture). [1]</p><p>(c) <span class=\"chem\">tan(A - B)</span>의 항등식을 이용하여 <span class=\"chem\">k in Z^+</span>에 대해 <span class=\"chem\">arctan(1/k) - arctan(1/(k + 1)) = arctan(1/(k^2 + k + 1))</span>임을 보이시오 (Show that). [4]</p><p>(d) 이를 이용하여 (Hence) <span class=\"chem\">S_n = pi/4 - arctan(1/(n + 1))</span>임을 보이시오. [3]</p><p>(e) 이를 이용하여 (b)의 추측을 증명하시오 (Prove). [3]</p><p>(f) <span class=\"chem\">n -&gt; infty</span>일 때 <span class=\"chem\">S_n</span>의 극한을 쓰시오 (Write down). [1]</p><p>(g) <span class=\"chem\">S_n &gt; 0.78</span>인 <span class=\"chem\">n</span>의 최솟값을 구하시오. [2]</p>",
      hints: [
        // EN: Decode: this is "compute small cases, spot a pattern, prove it". The tool for the proof is <span class="chem">tan(A - B)</span> from the booklet, which turns a difference of two arctans into one arctan. Then the sum collapses (telescopes).
        "해석: 이것은 \"작은 경우를 계산하고, 패턴을 찾고, 증명하는\" 문제예요. 증명의 도구는 공식집의 <span class=\"chem\">tan(A - B)</span>로, 두 arctan의 차를 하나의 arctan으로 바꿔요. 그러면 합이 연쇄적으로 소거돼요(망원 합).",
        // EN: In (a), use the fraction feature of your GDC on <span class="chem">tan(S_n)</span>. Look at the pattern <span class="chem">1/3, 2/4, 3/5, 4/6</span>.
        "(a)에서는 <span class=\"chem\">tan(S_n)</span>에 GDC의 분수 기능을 사용하세요. 패턴 <span class=\"chem\">1/3, 2/4, 3/5, 4/6</span>을 살펴보세요.",
        // EN: In (c), after you find <span class="chem">tan(A - B)</span> you still need a reason why <span class="chem">A - B</span> is in the range of arctan.
        "(c)에서는 <span class=\"chem\">tan(A - B)</span>를 구한 후에도 <span class=\"chem\">A - B</span>가 arctan의 치역 안에 있는 이유를 밝혀야 해요.",
        // EN: In (g), <span class="chem">S_n &gt; 0.78</span> is equivalent to <span class="chem">tan S_n &gt; tan 0.78 = 0.98926…</span>; solve <span class="chem">n/(n + 2) &gt; 0.98926…</span> for <span class="chem">n</span>.
        "(g)에서 <span class=\"chem\">S_n &gt; 0.78</span>은 <span class=\"chem\">tan S_n &gt; tan 0.78 = 0.98926…</span>과 동치예요. <span class=\"chem\">n/(n + 2) &gt; 0.98926…</span>을 <span class=\"chem\">n</span>에 대해 푸세요.",
      ],
      // EN: <p><strong>Decoding:</strong> the investigation is about a telescoping sum. Each term <span class="chem">arctan(1/(k^2 + k + 1))</span> is secretly a difference <span class="chem">arctan(1/k) - arctan(1/(k + 1))</span> (part (c)), so almost everything cancels.</p><p>(g) <span class="chem">n/(n + 2) &gt; 0.989261…</span> ⇔ <span class="chem">n(1 - 0.989261…) &gt; 2(0.989261…)</span> ⇔ <span class="chem">n &gt; 184.25</span>. Check: <span class="chem">S_184 = 0.779993…</span>, <span class="chem">S_185 = 0.780022…</span>. So <b>n = 185</b>.</p>
      solution: "<p><strong>해석:</strong> 이 탐구는 망원 합(연쇄적으로 소거되는 합)에 관한 것이에요. 각 항 <span class=\"chem\">arctan(1/(k^2 + k + 1))</span>은 사실 차 <span class=\"chem\">arctan(1/k) - arctan(1/(k + 1))</span>이므로((c)), 거의 모든 항이 소거돼요.</p><p>(g) <span class=\"chem\">n/(n + 2) &gt; 0.989261…</span> ⇔ <span class=\"chem\">n(1 - 0.989261…) &gt; 2(0.989261…)</span> ⇔ <span class=\"chem\">n &gt; 184.25</span>. 확인: <span class=\"chem\">S_184 = 0.779993…</span>, <span class=\"chem\">S_185 = 0.780022…</span>. 따라서 <b>n = 185</b>.</p>",
      // EN: <p>(a) <span class="chem">S_1 = 0.322</span>, <span class="chem">tan S_1 = 1/3</span>; <span class="chem">S_2 = 0.464</span>, <span class="chem">tan S_2 = 1/2</span>; <span class="chem">S_3 = 0.540</span>, <span class="chem">tan S_3 = 3/5</span>; <span class="chem">S_4 = 0.588</span>, <span class="chem">tan S_4 = 2/3 = 4/6</span>. (b) <span class="chem">tan(S_n) = n/(n + 2)</span>. (c) With <span class="chem">A = arctan(1/k)</span>, <span class="chem">B = arctan(1/(k + 1))</span>: <span class="chem">tan(A - B) = (1/k - 1/(k + 1))/(1 + 1/(k(k + 1))) = 1/(k^2 + k + 1)</span>, and <span class="chem">0 &lt; A - B &lt; pi/2</span>. (d) The sum telescopes: <span class="chem">S_n = arctan 1 - arctan(1/(n + 1)) = pi/4 - arctan(1/(n + 1))</span>. (e) <span class="chem">tan(S_n) = (1 - 1/(n + 1))/(1 + 1/(n + 1)) = n/(n + 2)</span>. (f) <span class="chem">pi/4</span>. (g) <span class="chem">n/(n + 2) &gt; tan 0.78</span> gives <span class="chem">n &gt; 184.2</span>, so <span class="chem">n = 185</span>.</p>
      answer: "<p>(a) <span class=\"chem\">S_1 = 0.322</span>, <span class=\"chem\">tan S_1 = 1/3</span>; <span class=\"chem\">S_2 = 0.464</span>, <span class=\"chem\">tan S_2 = 1/2</span>; <span class=\"chem\">S_3 = 0.540</span>, <span class=\"chem\">tan S_3 = 3/5</span>; <span class=\"chem\">S_4 = 0.588</span>, <span class=\"chem\">tan S_4 = 2/3 = 4/6</span>. (b) <span class=\"chem\">tan(S_n) = n/(n + 2)</span>. (c) <span class=\"chem\">A = arctan(1/k)</span>, <span class=\"chem\">B = arctan(1/(k + 1))</span>로 두면: <span class=\"chem\">tan(A - B) = (1/k - 1/(k + 1))/(1 + 1/(k(k + 1))) = 1/(k^2 + k + 1)</span>이고 <span class=\"chem\">0 &lt; A - B &lt; pi/2</span>. (d) 합이 연쇄적으로 소거됨: <span class=\"chem\">S_n = arctan 1 - arctan(1/(n + 1)) = pi/4 - arctan(1/(n + 1))</span>. (e) <span class=\"chem\">tan(S_n) = (1 - 1/(n + 1))/(1 + 1/(n + 1)) = n/(n + 2)</span>. (f) <span class=\"chem\">pi/4</span>. (g) <span class=\"chem\">n/(n + 2) &gt; tan 0.78</span>에서 <span class=\"chem\">n &gt; 184.2</span>이므로 <span class=\"chem\">n = 185</span>.</p>",
      markscheme: [
        // EN: A1: S₁ = 0.322, tan S₁ = 1/3.
        "A1: S₁ = 0.322, tan S₁ = 1/3.",
        // EN: A1: S₂ = 0.464, tan S₂ = 1/2.
        "A1: S₂ = 0.464, tan S₂ = 1/2.",
        // EN: A1: S₃ = 0.540, tan S₃ = 3/5.
        "A1: S₃ = 0.540, tan S₃ = 3/5.",
        // EN: A1: S₄ = 0.588, tan S₄ = 2/3 (= 4/6).
        "A1: S₄ = 0.588, tan S₄ = 2/3 (= 4/6).",
        // EN: A1: Conjecture tan(S_n) = n/(n + 2).
        "A1: 추측 tan(S_n) = n/(n + 2).",
        // EN: M1: Let A = arctan(1/k), B = arctan(1/(k + 1)) and write tan(A − B) = (1/k − 1/(k + 1))/(1 + 1/(k(k + 1))).
        "M1: A = arctan(1/k), B = arctan(1/(k + 1))로 두고 tan(A − B) = (1/k − 1/(k + 1))/(1 + 1/(k(k + 1)))로 씀.",
        // EN: A1: Numerator = 1/(k(k + 1)), denominator = (k(k + 1) + 1)/(k(k + 1)).
        "A1: 분자 = 1/(k(k + 1)), 분모 = (k(k + 1) + 1)/(k(k + 1)).",
        // EN: A1: tan(A − B) = 1/(k² + k + 1).
        "A1: tan(A − B) = 1/(k² + k + 1).",
        // EN: R1: 0 < B < A ≤ π/4, so 0 < A − B < π/2, the range of arctan; hence A − B = arctan(1/(k² + k + 1)) (AG).
        "R1: 0 < B < A ≤ π/4이므로 0 < A − B < π/2이고, 이는 arctan의 치역; 따라서 A − B = arctan(1/(k² + k + 1)) (AG).",
        // EN: M1: Write S_n as a sum of the differences arctan(1/k) − arctan(1/(k + 1)) for k = 1, …, n.
        "M1: S_n을 k = 1, …, n에 대한 차 arctan(1/k) − arctan(1/(k + 1))의 합으로 씀.",
        // EN: A1: All middle terms cancel (telescoping), leaving arctan(1) − arctan(1/(n + 1)).
        "A1: 중간 항이 모두 소거되어(망원 합) arctan(1) − arctan(1/(n + 1))이 남음.",
        // EN: A1: arctan 1 = π/4, so S_n = π/4 − arctan(1/(n + 1)) (AG).
        "A1: arctan 1 = π/4이므로 S_n = π/4 − arctan(1/(n + 1)) (AG).",
        // EN: M1: tan(π/4 − B) = (1 − tan B)/(1 + tan B) with tan B = 1/(n + 1).
        "M1: tan B = 1/(n + 1)일 때 tan(π/4 − B) = (1 − tan B)/(1 + tan B).",
        // EN: A1: = (n/(n + 1)) / ((n + 2)/(n + 1)).
        "A1: = (n/(n + 1)) / ((n + 2)/(n + 1)).",
        // EN: A1: = n/(n + 2), which proves the conjecture.
        "A1: = n/(n + 2)이므로 추측이 증명됨.",
        // EN: A1: S_n → π/4 (since arctan(1/(n + 1)) → 0).
        "A1: S_n → π/4 (arctan(1/(n + 1)) → 0이므로).",
        // EN: M1: S_n > 0.78 ⇔ n/(n + 2) > tan 0.78 (tan is increasing on (0, π/2)), giving n > 184.2.
        "M1: S_n > 0.78 ⇔ n/(n + 2) > tan 0.78 (tan는 (0, π/2)에서 증가)이고, n > 184.2를 얻음.",
        // EN: A1: n = 185.
        "A1: n = 185.",
      ],
    },

    // ── t3-2-q058 · short · challenge · AHL · AHL 3.10, SL 3.6 · 18 marks
    "t3-2-q058": {
      // EN: <p>This investigation looks at how <span class="chem">cos n theta</span> can be written as a polynomial in <span class="chem">c = cos theta</span>.</p><p>(a) Write down <span class="chem">cos 2theta</span> in terms of <span class="chem">c</span>. [1]</p><p>(b) By writing <span class="chem">3theta = 2theta + theta</span>, show that <span class="chem">cos 3theta = 4c^3 - 3c</span>. [3]</p><p>(c) Show that <span class="chem">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span>. [3]</p><p>(d) Hence find <span class="chem">cos 4theta</span> and <span class="chem">cos 5theta</span> as polynomials in <span class="chem">c</span>. [4]</p><p>(e) Conjecture the coefficient of <span class="chem">c^n</span> in the polynomial for <span class="chem">cos n theta</span>, for <span class="chem">n &gt;= 1</span>, and give a reason for your conjecture. [2]</p><p>(f) By letting <span class="chem">x = cos theta</span>, where <span class="chem">0 &lt;= theta &lt;= pi</span>, solve <span class="chem">8x^4 - 8x^2 + 1 = 0</span>. Hence find the exact value of <span class="chem">cos(pi/8)</span>. [5]</p>
      stem: "<p>이 탐구에서는 <span class=\"chem\">cos n theta</span>를 <span class=\"chem\">c = cos theta</span>에 대한 다항식으로 나타내는 방법을 살펴봐요.</p><p>(a) <span class=\"chem\">cos 2theta</span>를 <span class=\"chem\">c</span>로 나타내어 쓰시오 (Write down). [1]</p><p>(b) <span class=\"chem\">3theta = 2theta + theta</span>로 써서 <span class=\"chem\">cos 3theta = 4c^3 - 3c</span>임을 보이시오 (Show that). [3]</p><p>(c) <span class=\"chem\">cos((n + 1)theta) + cos((n - 1)theta) = 2 cos theta cos(n theta)</span>임을 보이시오. [3]</p><p>(d) 이를 이용하여 (Hence) <span class=\"chem\">cos 4theta</span>와 <span class=\"chem\">cos 5theta</span>를 <span class=\"chem\">c</span>에 대한 다항식으로 구하시오. [4]</p><p>(e) <span class=\"chem\">n &gt;= 1</span>일 때 <span class=\"chem\">cos n theta</span>의 다항식에서 <span class=\"chem\">c^n</span>의 계수를 추측하고 (Conjecture), 그 추측의 이유를 쓰시오. [2]</p><p>(f) <span class=\"chem\">x = cos theta</span> (<span class=\"chem\">0 &lt;= theta &lt;= pi</span>)로 두어 <span class=\"chem\">8x^4 - 8x^2 + 1 = 0</span>을 푸시오 (Solve). 이를 이용하여 <span class=\"chem\">cos(pi/8)</span>의 정확한 값을 구하시오. [5]</p>",
      hints: [
        // EN: Decode: build a pattern from small cases (n = 2, 3), find a rule that produces the next case from the previous two (part (c)), then use the polynomial for <span class="chem">n = 4</span> backwards to get exact values.
        "해석: 작은 경우(n = 2, 3)로 패턴을 만들고, 앞의 두 경우로 다음 경우를 만드는 규칙((c))을 찾은 다음, <span class=\"chem\">n = 4</span>의 다항식을 거꾸로 이용해 정확한 값을 구해요.",
        // EN: In (b), use <span class="chem">cos(A + B)</span>, <span class="chem">sin 2theta = 2 sin theta cos theta</span> and <span class="chem">sin^2 theta = 1 - c^2</span>.
        "(b)에서는 <span class=\"chem\">cos(A + B)</span>, <span class=\"chem\">sin 2theta = 2 sin theta cos theta</span>, <span class=\"chem\">sin^2 theta = 1 - c^2</span>을 이용하세요.",
        // EN: In (d), rearrange (c) as <span class="chem">cos((n + 1)theta) = 2c cos(n theta) - cos((n - 1)theta)</span>.
        "(d)에서는 (c)를 <span class=\"chem\">cos((n + 1)theta) = 2c cos(n theta) - cos((n - 1)theta)</span>로 변형하세요.",
        // EN: In (f), <span class="chem">8x^4 - 8x^2 + 1</span> is exactly <span class="chem">cos 4theta</span>. Which angles in <span class="chem">[0, pi]</span> make <span class="chem">cos 4theta = 0</span>?
        "(f)에서 <span class=\"chem\">8x^4 - 8x^2 + 1</span>은 바로 <span class=\"chem\">cos 4theta</span>예요. <span class=\"chem\">[0, pi]</span>에서 어떤 각이 <span class=\"chem\">cos 4theta = 0</span>이 되게 하나요?",
      ],
      // EN: <p><strong>Decoding:</strong> the polynomial in (f) is the <span class="chem">cos 4theta</span> polynomial from (d), so solving it is the same as solving <span class="chem">cos 4theta = 0</span>; comparing with the algebraic roots gives an exact value.</p><p>(f) <span class="chem">x^2 = (2 ± sqrt(2))/4</span> gives <span class="chem">x = ± sqrt(2 ± sqrt(2))/2</span>. The largest, <span class="chem">sqrt(2 + sqrt(2))/2 = 0.92388…</span>, matches <span class="chem">cos(pi/8) = 0.92388…</span>.</p>
      solution: "<p><strong>해석:</strong> (f)의 다항식은 (d)의 <span class=\"chem\">cos 4theta</span> 다항식이므로, 그것을 푸는 것은 <span class=\"chem\">cos 4theta = 0</span>을 푸는 것과 같아요. 대수적으로 구한 근과 비교하면 정확한 값을 얻어요.</p><p>(f) <span class=\"chem\">x^2 = (2 ± sqrt(2))/4</span>에서 <span class=\"chem\">x = ± sqrt(2 ± sqrt(2))/2</span>. 가장 큰 근 <span class=\"chem\">sqrt(2 + sqrt(2))/2 = 0.92388…</span>은 <span class=\"chem\">cos(pi/8) = 0.92388…</span>과 일치해요.</p>",
      // EN: <p>(a) <span class="chem">2c^2 - 1</span>. (b) <span class="chem">cos 3theta = cos 2theta cos theta - sin 2theta sin theta = (2c^2 - 1)c - 2(1 - c^2)c = 4c^3 - 3c</span>. (c) Expanding, the <span class="chem">sin(n theta) sin theta</span> terms cancel, leaving <span class="chem">2 cos(n theta) cos theta</span>. (d) <span class="chem">cos 4theta = 2c(4c^3 - 3c) - (2c^2 - 1) = 8c^4 - 8c^2 + 1</span>; <span class="chem">cos 5theta = 2c(8c^4 - 8c^2 + 1) - (4c^3 - 3c) = 16c^5 - 20c^3 + 5c</span>. (e) <span class="chem">2^{n-1}</span>: each step of the recurrence multiplies the leading term by <span class="chem">2c</span>. (f) <span class="chem">cos 4theta = 0</span> gives <span class="chem">theta = pi/8, 3pi/8, 5pi/8, 7pi/8</span>, so <span class="chem">x = cos(pi/8), cos(3pi/8), cos(5pi/8), cos(7pi/8)</span>. As a quadratic in <span class="chem">x^2</span>: <span class="chem">x^2 = (2 ± sqrt(2))/4</span>. The largest root is <span class="chem">cos(pi/8) = sqrt(2 + sqrt(2))/2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">2c^2 - 1</span>. (b) <span class=\"chem\">cos 3theta = cos 2theta cos theta - sin 2theta sin theta = (2c^2 - 1)c - 2(1 - c^2)c = 4c^3 - 3c</span>. (c) 전개하면 <span class=\"chem\">sin(n theta) sin theta</span> 항이 소거되고 <span class=\"chem\">2 cos(n theta) cos theta</span>가 남아요. (d) <span class=\"chem\">cos 4theta = 2c(4c^3 - 3c) - (2c^2 - 1) = 8c^4 - 8c^2 + 1</span>; <span class=\"chem\">cos 5theta = 2c(8c^4 - 8c^2 + 1) - (4c^3 - 3c) = 16c^5 - 20c^3 + 5c</span>. (e) <span class=\"chem\">2^{n-1}</span>: 점화식의 각 단계에서 최고차항에 <span class=\"chem\">2c</span>가 곱해져요. (f) <span class=\"chem\">cos 4theta = 0</span>에서 <span class=\"chem\">theta = pi/8, 3pi/8, 5pi/8, 7pi/8</span>이므로 <span class=\"chem\">x = cos(pi/8), cos(3pi/8), cos(5pi/8), cos(7pi/8)</span>. <span class=\"chem\">x^2</span>에 대한 이차방정식으로: <span class=\"chem\">x^2 = (2 ± sqrt(2))/4</span>. 가장 큰 근은 <span class=\"chem\">cos(pi/8) = sqrt(2 + sqrt(2))/2</span>.</p>",
      markscheme: [
        // EN: A1: cos 2θ = 2c² − 1.
        "A1: cos 2θ = 2c² − 1.",
        // EN: M1: cos 3θ = cos 2θ cos θ − sin 2θ sin θ.
        "M1: cos 3θ = cos 2θ cos θ − sin 2θ sin θ.",
        // EN: M1: Substitute sin 2θ sin θ = 2 sin²θ cos θ = 2(1 − c²)c.
        "M1: sin 2θ sin θ = 2 sin²θ cos θ = 2(1 − c²)c를 대입함.",
        // EN: A1: (2c² − 1)c − 2c + 2c³ = 4c³ − 3c (AG).
        "A1: (2c² − 1)c − 2c + 2c³ = 4c³ − 3c (AG).",
        // EN: M1: Expand cos(nθ + θ) = cos nθ cos θ − sin nθ sin θ.
        "M1: cos(nθ + θ) = cos nθ cos θ − sin nθ sin θ로 전개함.",
        // EN: A1: cos(nθ − θ) = cos nθ cos θ + sin nθ sin θ.
        "A1: cos(nθ − θ) = cos nθ cos θ + sin nθ sin θ.",
        // EN: A1: Add: the sin nθ sin θ terms cancel, leaving 2 cos θ cos nθ (AG).
        "A1: 더하면 sin nθ sin θ 항이 소거되고 2 cos θ cos nθ가 남음 (AG).",
        // EN: M1: Use n = 3: cos 4θ = 2c cos 3θ − cos 2θ = 2c(4c³ − 3c) − (2c² − 1).
        "M1: n = 3을 이용함: cos 4θ = 2c cos 3θ − cos 2θ = 2c(4c³ − 3c) − (2c² − 1).",
        // EN: A1: cos 4θ = 8c⁴ − 8c² + 1.
        "A1: cos 4θ = 8c⁴ − 8c² + 1.",
        // EN: M1: Use n = 4: cos 5θ = 2c cos 4θ − cos 3θ.
        "M1: n = 4를 이용함: cos 5θ = 2c cos 4θ − cos 3θ.",
        // EN: A1: cos 5θ = 16c⁵ − 20c³ + 5c.
        "A1: cos 5θ = 16c⁵ − 20c³ + 5c.",
        // EN: A1: Conjecture: the coefficient of cⁿ is 2ⁿ⁻¹.
        "A1: 추측: cⁿ의 계수는 2ⁿ⁻¹.",
        // EN: R1: cos((n + 1)θ) = 2c cos nθ − cos((n − 1)θ), and the second term has lower degree, so each step doubles the leading coefficient (starting from 1 for cos θ = c).
        "R1: cos((n + 1)θ) = 2c cos nθ − cos((n − 1)θ)이고 두 번째 항은 차수가 더 낮으므로, 각 단계에서 최고차항의 계수가 두 배가 됨(cos θ = c의 계수 1에서 시작).",
        // EN: M1: With x = cos θ the equation is cos 4θ = 0, where 0 ≤ 4θ ≤ 4π.
        "M1: x = cos θ로 두면 방정식은 cos 4θ = 0이고, 0 ≤ 4θ ≤ 4π.",
        // EN: A1: 4θ = π/2, 3π/2, 5π/2, 7π/2, so θ = π/8, 3π/8, 5π/8, 7π/8.
        "A1: 4θ = π/2, 3π/2, 5π/2, 7π/2이므로 θ = π/8, 3π/8, 5π/8, 7π/8.",
        // EN: A1: The four roots are x = cos(π/8), cos(3π/8), cos(5π/8), cos(7π/8) (all different, as cos is decreasing on [0, π]).
        "A1: 네 근은 x = cos(π/8), cos(3π/8), cos(5π/8), cos(7π/8) (cos는 [0, π]에서 감소하므로 모두 다름).",
        // EN: M1: Solve as a quadratic in x²: x² = (8 ± √32)/16 = (2 ± √2)/4.
        "M1: x²에 대한 이차방정식으로 풂: x² = (8 ± √32)/16 = (2 ± √2)/4.",
        // EN: A1: cos(π/8) is the largest root, so cos(π/8) = √(2 + √2)/2.
        "A1: cos(π/8)은 가장 큰 근이므로 cos(π/8) = √(2 + √2)/2.",
      ],
    },

    // ── t3-2-q059 · short · challenge · AHL · AHL 3.10, 3.11 · 16 marks
    "t3-2-q059": {
      // EN: <p>This investigation finds a closed form for <span class="chem">C_n(x) = cos x + cos 2x + … + cos nx</span>, where <span class="chem">n in Z^+</span> and <span class="chem">x</span> is in radians.</p><p>(a) Let <span class="chem">x = 0.5</span>. Use your GDC to find <span class="chem">C_1(0.5)</span>, <span class="chem">C_2(0.5)</span>, <span class="chem">C_3(0.5)</span>, and compare each with the value of <span class="chem">(sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span> for the same <span class="chem">n</span>. [3]</p><p>(b) Use the identities for <span class="chem">sin(A + B)</span> and <span class="chem">sin(A - B)</span> to show that <span class="chem">2 sin(x/2) cos(kx) = sin((k + 1/2)x) - sin((k - 1/2)x)</span>. [3]</p><p>(c) Hence prove that, when <span class="chem">sin(x/2) != 0</span>, <span class="chem">C_n(x) = (sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span>. [3]</p><p>(d) Hence, using the symmetry <span class="chem">sin(pi - theta) = sin theta</span>, solve <span class="chem">cos x + cos 2x + cos 3x = 0</span> for <span class="chem">0 &lt; x &lt; pi</span>. [5]</p><p>(e) Use a symmetry of the cosine graph to deduce the number of solutions of <span class="chem">cos x + cos 2x + cos 3x = 0</span> for <span class="chem">0 &lt; x &lt; 2pi</span>. [2]</p>
      stem: "<p>이 탐구에서는 <span class=\"chem\">C_n(x) = cos x + cos 2x + … + cos nx</span> (<span class=\"chem\">n in Z^+</span>, <span class=\"chem\">x</span>는 라디안)의 닫힌 꼴을 구해요.</p><p>(a) <span class=\"chem\">x = 0.5</span>로 두어요. GDC를 이용하여 <span class=\"chem\">C_1(0.5)</span>, <span class=\"chem\">C_2(0.5)</span>, <span class=\"chem\">C_3(0.5)</span>를 구하고 (Find), 각각을 같은 <span class=\"chem\">n</span>에 대한 <span class=\"chem\">(sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span>의 값과 비교하시오. [3]</p><p>(b) <span class=\"chem\">sin(A + B)</span>와 <span class=\"chem\">sin(A - B)</span>의 항등식을 이용하여 <span class=\"chem\">2 sin(x/2) cos(kx) = sin((k + 1/2)x) - sin((k - 1/2)x)</span>임을 보이시오 (Show that). [3]</p><p>(c) 이를 이용하여 (Hence) <span class=\"chem\">sin(x/2) != 0</span>일 때 <span class=\"chem\">C_n(x) = (sin((n + 1/2)x) - sin(x/2))/(2 sin(x/2))</span>임을 증명하시오 (Prove). [3]</p><p>(d) 이를 이용하고 대칭 관계 <span class=\"chem\">sin(pi - theta) = sin theta</span>를 사용하여 <span class=\"chem\">0 &lt; x &lt; pi</span>에서 <span class=\"chem\">cos x + cos 2x + cos 3x = 0</span>을 푸시오 (Solve). [5]</p><p>(e) 코사인 그래프의 대칭성을 이용하여 <span class=\"chem\">0 &lt; x &lt; 2pi</span>에서 <span class=\"chem\">cos x + cos 2x + cos 3x = 0</span>의 해의 개수를 유도하시오 (Deduce). [2]</p>",
      hints: [
        // EN: Decode: the sum of cosines does not simplify term by term. Multiplying each term by <span class="chem">2 sin(x/2)</span> turns it into a DIFFERENCE of two sines (part (b)), and then the sum collapses (telescopes), like a telescoping series.
        "해석: 코사인의 합은 항별로 간단해지지 않아요. 각 항에 <span class=\"chem\">2 sin(x/2)</span>를 곱하면 두 사인의 \"차\"가 되고((b)), 그러면 망원급수처럼 합이 연쇄적으로 소거돼요.",
        // EN: For (a), use the sum feature of your GDC, or add the terms directly. Make sure the GDC is in radian mode.
        "(a)에서는 GDC의 합 기능을 사용하거나 항을 직접 더하세요. GDC가 라디안 모드인지 확인하세요.",
        // EN: For (b), write <span class="chem">(k + 1/2)x = kx + x/2</span> and <span class="chem">(k - 1/2)x = kx - x/2</span>.
        "(b)에서는 <span class=\"chem\">(k + 1/2)x = kx + x/2</span>, <span class=\"chem\">(k - 1/2)x = kx - x/2</span>로 쓰세요.",
        // EN: For (d), with <span class="chem">n = 3</span>, <span class="chem">C_3(x) = 0</span> exactly when <span class="chem">sin(7x/2) = sin(x/2)</span>. Then use <span class="chem">sin(pi - theta) = sin theta</span> to get two families of solutions.
        "(d)에서 <span class=\"chem\">n = 3</span>이면 <span class=\"chem\">C_3(x) = 0</span>은 정확히 <span class=\"chem\">sin(7x/2) = sin(x/2)</span>일 때 성립해요. 그다음 <span class=\"chem\">sin(pi - theta) = sin theta</span>를 이용해 두 해의 묶음을 구하세요.",
      ],
      // EN: <p><strong>Decoding:</strong> the investigation turns a sum of cosines into a telescoping sum of sines, and then turns the equation <span class="chem">C_3(x) = 0</span> into <span class="chem">sin A = sin B</span>, which is solved with the symmetry <span class="chem">sin(pi - theta) = sin theta</span>.</p><p>(d) Check: <span class="chem">C_3(pi/4) = sqrt(2)/2 + 0 - sqrt(2)/2 = 0</span>; <span class="chem">C_3(2pi/3) = -1/2 - 1/2 + 1 = 0</span>; <span class="chem">C_3(3pi/4) = -sqrt(2)/2 + 0 + sqrt(2)/2 = 0</span>.</p><p>(e) Reflecting in <span class="chem">x = pi</span> gives <span class="chem">5pi/4, 4pi/3, 7pi/4</span>: <b>6</b> solutions in <span class="chem">(0, 2pi)</span>.</p>
      solution: "<p><strong>해석:</strong> 이 탐구는 코사인의 합을 사인의 망원 합으로 바꾼 다음, 방정식 <span class=\"chem\">C_3(x) = 0</span>을 <span class=\"chem\">sin A = sin B</span>로 바꾸어 대칭 관계 <span class=\"chem\">sin(pi - theta) = sin theta</span>로 풀어요.</p><p>(d) 확인: <span class=\"chem\">C_3(pi/4) = sqrt(2)/2 + 0 - sqrt(2)/2 = 0</span>; <span class=\"chem\">C_3(2pi/3) = -1/2 - 1/2 + 1 = 0</span>; <span class=\"chem\">C_3(3pi/4) = -sqrt(2)/2 + 0 + sqrt(2)/2 = 0</span>.</p><p>(e) <span class=\"chem\">x = pi</span>에 대해 대칭이동하면 <span class=\"chem\">5pi/4, 4pi/3, 7pi/4</span>: <span class=\"chem\">(0, 2pi)</span>에서 <b>6</b>개의 해.</p>",
      // EN: <p>(a) <span class="chem">C_1 = 0.8776</span>, <span class="chem">C_2 = 1.418</span>, <span class="chem">C_3 = 1.489</span>; the expression gives the same values. (b) <span class="chem">sin(kx + x/2) - sin(kx - x/2) = 2 cos(kx) sin(x/2)</span>. (c) Summing (b) from <span class="chem">k = 1</span> to <span class="chem">n</span> telescopes to <span class="chem">sin((n + 1/2)x) - sin(x/2)</span>; divide by <span class="chem">2 sin(x/2)</span>. (d) <span class="chem">sin(7x/2) = sin(x/2)</span>: <span class="chem">7x/2 = x/2 + 2k pi</span> gives <span class="chem">x = 2pi/3</span>; <span class="chem">7x/2 = pi - x/2 + 2k pi</span> gives <span class="chem">x = pi/4, 3pi/4</span>. (e) <span class="chem">C_3(2pi - x) = C_3(x)</span>, so the solutions in <span class="chem">(pi, 2pi)</span> are <span class="chem">5pi/4, 4pi/3, 7pi/4</span>, and <span class="chem">C_3(pi) = -1 != 0</span>: <b>6</b> solutions.</p>
      answer: "<p>(a) <span class=\"chem\">C_1 = 0.8776</span>, <span class=\"chem\">C_2 = 1.418</span>, <span class=\"chem\">C_3 = 1.489</span>; 식도 같은 값을 줘요. (b) <span class=\"chem\">sin(kx + x/2) - sin(kx - x/2) = 2 cos(kx) sin(x/2)</span>. (c) (b)를 <span class=\"chem\">k = 1</span>부터 <span class=\"chem\">n</span>까지 더하면 연쇄적으로 소거되어 <span class=\"chem\">sin((n + 1/2)x) - sin(x/2)</span>가 되고, <span class=\"chem\">2 sin(x/2)</span>로 나눠요. (d) <span class=\"chem\">sin(7x/2) = sin(x/2)</span>: <span class=\"chem\">7x/2 = x/2 + 2k pi</span>에서 <span class=\"chem\">x = 2pi/3</span>; <span class=\"chem\">7x/2 = pi - x/2 + 2k pi</span>에서 <span class=\"chem\">x = pi/4, 3pi/4</span>. (e) <span class=\"chem\">C_3(2pi - x) = C_3(x)</span>이므로 <span class=\"chem\">(pi, 2pi)</span>에서의 해는 <span class=\"chem\">5pi/4, 4pi/3, 7pi/4</span>이고, <span class=\"chem\">C_3(pi) = -1 != 0</span>: <b>6</b>개의 해.</p>",
      markscheme: [
        // EN: A1: C₁(0.5) = 0.8776; the expression also gives 0.8776.
        "A1: C₁(0.5) = 0.8776; 식도 0.8776을 줌.",
        // EN: A1: C₂(0.5) = 1.418; the expression also gives 1.418.
        "A1: C₂(0.5) = 1.418; 식도 1.418을 줌.",
        // EN: A1: C₃(0.5) = 1.489; the expression also gives 1.489.
        "A1: C₃(0.5) = 1.489; 식도 1.489를 줌.",
        // EN: M1: Expand sin(kx + x/2) = sin kx cos(x/2) + cos kx sin(x/2).
        "M1: sin(kx + x/2) = sin kx cos(x/2) + cos kx sin(x/2)로 전개함.",
        // EN: M1: Expand sin(kx − x/2) = sin kx cos(x/2) − cos kx sin(x/2).
        "M1: sin(kx − x/2) = sin kx cos(x/2) − cos kx sin(x/2)로 전개함.",
        // EN: A1: Subtract: the sin kx cos(x/2) terms cancel, giving 2 sin(x/2) cos kx (AG).
        "A1: 빼면 sin kx cos(x/2) 항이 소거되어 2 sin(x/2) cos kx를 얻음 (AG).",
        // EN: M1: Add the identity for k = 1, 2, …, n: 2 sin(x/2) C_n(x) = Σ [sin((k + ½)x) − sin((k − ½)x)].
        "M1: k = 1, 2, …, n에 대한 항등식을 더함: 2 sin(x/2) C_n(x) = Σ [sin((k + ½)x) − sin((k − ½)x)].",
        // EN: A1: The sum telescopes: the +sin((k + ½)x) term of each k cancels the −sin(((k + 1) − ½)x) term of k + 1.
        "A1: 합이 연쇄적으로 소거됨: 각 k의 +sin((k + ½)x) 항이 k + 1의 −sin(((k + 1) − ½)x) 항과 소거됨.",
        // EN: A1: 2 sin(x/2) C_n(x) = sin((n + ½)x) − sin(x/2); dividing by 2 sin(x/2) ≠ 0 gives the result (AG).
        "A1: 2 sin(x/2) C_n(x) = sin((n + ½)x) − sin(x/2); 2 sin(x/2) ≠ 0으로 나누면 결과를 얻음 (AG).",
        // EN: M1: For 0 < x < π, sin(x/2) ≠ 0, so C₃(x) = 0 ⇔ sin(7x/2) = sin(x/2).
        "M1: 0 < x < π에서 sin(x/2) ≠ 0이므로 C₃(x) = 0 ⇔ sin(7x/2) = sin(x/2).",
        // EN: M1: sin A = sin B ⇔ A = B + 2kπ or A = π − B + 2kπ.
        "M1: sin A = sin B ⇔ A = B + 2kπ 또는 A = π − B + 2kπ.",
        // EN: A1: 3x = 2kπ gives x = 2π/3.
        "A1: 3x = 2kπ에서 x = 2π/3.",
        // EN: A1: 4x = π + 2kπ gives x = π/4.
        "A1: 4x = π + 2kπ에서 x = π/4.",
        // EN: A1: and x = 3π/4 (no other values in 0 < x < π).
        "A1: 그리고 x = 3π/4 (0 < x < π에서 다른 값은 없음).",
        // EN: R1: cos(k(2π − x)) = cos(kx) for every integer k, so C₃(2π − x) = C₃(x); the solutions in (π, 2π) are 2π minus those in (0, π), and x = π is not a solution since C₃(π) = −1.
        "R1: 모든 정수 k에 대해 cos(k(2π − x)) = cos(kx)이므로 C₃(2π − x) = C₃(x); (π, 2π)에서의 해는 2π에서 (0, π)의 해를 뺀 것이고, C₃(π) = −1이므로 x = π는 해가 아님.",
        // EN: A1: 6 solutions.
        "A1: 6개의 해.",
      ],
    },

  }
});
