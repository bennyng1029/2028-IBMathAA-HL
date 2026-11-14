/* t2-2.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't2-2.q', {
  questions: {

    // ── t2-2-q001 · mcq · foundation · SL · SL 2.6 · 2 marks
    "t2-2-q001": {
      // EN: <p>Express the quadratic function <span class="chem">f(x) = 3x^2 - 12x + 7</span> in vertex form <span class="chem">a(x - h)^2 + k</span>.</p>
      stem: "<p>이차함수 <span class=\"chem\">f(x) = 3x^2 - 12x + 7</span>을 표준형 <span class=\"chem\">a(x - h)^2 + k</span> 꼴로 나타내시오.</p>",
      options: [
        // EN: <span class="chem">3(x - 2)^2 - 5</span>
        "<span class=\"chem\">3(x - 2)^2 - 5</span>",
        // EN: <span class="chem">3(x - 2)^2 + 3</span>
        "<span class=\"chem\">3(x - 2)^2 + 3</span>",
        // EN: <span class="chem">3(x - 6)^2 - 101</span>
        "<span class=\"chem\">3(x - 6)^2 - 101</span>",
        // EN: <span class="chem">3(x + 2)^2 - 5</span>
        "<span class=\"chem\">3(x + 2)^2 - 5</span>",
      ],
      hints: [
        // EN: Factor <span class="chem">3</span> out of the first two terms: <span class="chem">3(x^2 - 4x) + 7</span>.
        "앞의 두 항에서 <span class=\"chem\">3</span>을 묶어 내세요: <span class=\"chem\">3(x^2 - 4x) + 7</span>.",
        // EN: Replace <span class="chem">x^2 - 4x</span> with <span class="chem">(x - 2)^2 - 4</span> and distribute the <span class="chem">3</span>.
        "<span class=\"chem\">x^2 - 4x</span>를 <span class=\"chem\">(x - 2)^2 - 4</span>로 바꾼 뒤 <span class=\"chem\">3</span>을 분배하세요.",
      ],
      // EN: <p><span class="chem">f(x) = 3(x^2 - 4x) + 7 = 3[(x - 2)^2 - 4] + 7 = 3(x - 2)^2 - 12 + 7 = 3(x - 2)^2 - 5</span>. You can verify the vertex at <span class="chem">x = -(-12)/(2 × 3) = 2</span> and <span class="chem">f(2) = 3(4) - 24 + 7 = -5</span>.</p>
      solution: "<p><span class=\"chem\">f(x) = 3(x^2 - 4x) + 7 = 3[(x - 2)^2 - 4] + 7 = 3(x - 2)^2 - 12 + 7 = 3(x - 2)^2 - 5</span>예요. 꼭짓점이 <span class=\"chem\">x = -(-12)/(2 × 3) = 2</span>이고 <span class=\"chem\">f(2) = 3(4) - 24 + 7 = -5</span>인 것으로 검산할 수 있어요.</p>",
      misconception: {
        // EN (option B): When completing the square inside 3[(x − 2)² − 4] + 7, you forgot to multiply −4 by the factored 3, subtracting 4 instead of 12.
        "1": "3[(x − 2)² − 4] + 7에서 완전제곱식을 만들 때 −4에 묶어 낸 3을 곱하는 것을 빠뜨려 12 대신 4를 뺐어요.",
        // EN (option C): You halved −12 to −6 before factoring out 3. Always factor 3 out of 3x² − 12x = 3(x² − 4x) first!
        "2": "3을 묶어 내기 전에 −12의 절반 −6을 취했어요. 항상 먼저 3x² − 12x = 3(x² − 4x)로 3을 묶어 내세요!",
        // EN (option D): Since the middle term is −12x, the bracket is (x − 2)², not (x + 2)².
        "3": "가운데 항이 −12x이므로 괄호 안은 (x + 2)²가 아니라 (x − 2)²여야 해요.",
      },
    },

    // ── t2-2-q002 · numeric · foundation · SL · SL 2.6 · 2 marks
    "t2-2-q002": {
      // EN: <p>A parabola has <span class="chem">x</span>-intercepts at <span class="chem">(-3, 0)</span> and <span class="chem">(7, 0)</span>, and passes through the point <span class="chem">(0, -42)</span>. Find the <span class="chem">y</span>-coordinate of its vertex.</p>
      stem: "<p>어떤 포물선의 <span class=\"chem\">x</span>절편이 <span class=\"chem\">(-3, 0)</span>과 <span class=\"chem\">(7, 0)</span>이고, 점 <span class=\"chem\">(0, -42)</span>를 지나요. 이 포물선의 꼭짓점의 <span class=\"chem\">y</span>좌표를 구하시오 (Find).</p>",
      hints: [
        // EN: Write the quadratic in factored form <span class="chem">y = a(x + 3)(x - 7)</span> and plug in <span class="chem">(0, -42)</span> to find <span class="chem">a</span>.
        "이차함수를 인수분해형 <span class=\"chem\">y = a(x + 3)(x - 7)</span>로 쓰고 <span class=\"chem\">(0, -42)</span>를 대입해 <span class=\"chem\">a</span>를 구하세요.",
        // EN: The axis of symmetry is halfway between the roots at <span class="chem">x = (-3 + 7)/2 = 2</span>. Evaluate <span class="chem">y(2)</span>.
        "대칭축은 두 근의 한가운데인 <span class=\"chem\">x = (-3 + 7)/2 = 2</span>예요. <span class=\"chem\">y(2)</span>를 계산하세요.",
      ],
      // EN: <p>Using factored form <span class="chem">y = a(x + 3)(x - 7)</span>, substituting <span class="chem">(0, -42)</span> gives <span class="chem">-42 = a(3)(-7) = -21a => a = 2</span>. The axis of symmetry is <span class="chem">x = (-3 + 7)/2 = 2</span>, so the vertex <span class="chem">y</span>-coordinate is <span class="chem">y(2) = 2(2 + 3)(2 - 7) = 2(5)(-5) = -50</span>.</p>
      solution: "<p>인수분해형 <span class=\"chem\">y = a(x + 3)(x - 7)</span>에 <span class=\"chem\">(0, -42)</span>를 대입하면 <span class=\"chem\">-42 = a(3)(-7) = -21a => a = 2</span>예요. 대칭축은 <span class=\"chem\">x = (-3 + 7)/2 = 2</span>이므로 꼭짓점의 <span class=\"chem\">y</span>좌표는 <span class=\"chem\">y(2) = 2(2 + 3)(2 - 7) = 2(5)(-5) = -50</span>이에요.</p>",
    },

    // ── t2-2-q003 · mcq · foundation · SL · SL 2.7 · 2 marks
    "t2-2-q003": {
      // EN: <p>Solve the quadratic inequality <span class="chem">2x^2 + 3x - 9 &gt;= 0</span>.</p>
      stem: "<p>이차부등식 <span class=\"chem\">2x^2 + 3x - 9 &gt;= 0</span>을 푸시오.</p>",
      options: [
        // EN: <span class="chem">x &lt;= -3</span> or <span class="chem">x &gt;= 1.5</span>
        "<span class=\"chem\">x &lt;= -3</span> 또는 <span class=\"chem\">x &gt;= 1.5</span>",
        // EN: <span class="chem">-3 &lt;= x &lt;= 1.5</span>
        "<span class=\"chem\">-3 &lt;= x &lt;= 1.5</span>",
        // EN: <span class="chem">x &lt;= -1.5</span> or <span class="chem">x &gt;= 3</span>
        "<span class=\"chem\">x &lt;= -1.5</span> 또는 <span class=\"chem\">x &gt;= 3</span>",
        // EN: <span class="chem">x &gt;= 1.5</span>
        "<span class=\"chem\">x &gt;= 1.5</span>",
      ],
      hints: [
        // EN: Factor <span class="chem">2x^2 + 3x - 9 = (2x - 3)(x + 3)</span> to find the roots <span class="chem">x = -3</span> and <span class="chem">x = 1.5</span>.
        "<span class=\"chem\">2x^2 + 3x - 9 = (2x - 3)(x + 3)</span>로 인수분해하여 근 <span class=\"chem\">x = -3</span>과 <span class=\"chem\">x = 1.5</span>를 구하세요.",
        // EN: Sketch the upward-opening parabola and identify where it lies on or above the <span class="chem">x</span>-axis.
        "아래로 볼록한 포물선을 그려 <span class=\"chem\">x</span>축 위쪽 또는 축 위의 구간을 찾으세요.",
      ],
      // EN: <p>Factoring gives <span class="chem">(2x - 3)(x + 3) &gt;= 0</span>, with roots at <span class="chem">x = -3</span> and <span class="chem">x = 1.5</span>. Since the leading coefficient is positive (<span class="chem">a = 2 &gt; 0</span>), the parabola opens upwards and is <span class="chem">&gt;= 0</span> outside the roots: <span class="chem">x &lt;= -3</span> or <span class="chem">x &gt;= 1.5</span>.</p>
      solution: "<p>인수분해하면 <span class=\"chem\">(2x - 3)(x + 3) &gt;= 0</span>이고 근은 <span class=\"chem\">x = -3</span>, <span class=\"chem\">x = 1.5</span>예요. 최고차항 계수가 양수(<span class=\"chem\">a = 2 &gt; 0</span>)이므로 포물선은 아래로 볼록하고 두 근 바깥쪽에서 <span class=\"chem\">&gt;= 0</span>이에요: <span class=\"chem\">x &lt;= -3</span> 또는 <span class=\"chem\">x &gt;= 1.5</span>.</p>",
      misconception: {
        // EN (option B): Because a = 2 > 0, the parabola opens upwards, so 2x² + 3x − 9 is ≥ 0 OUTSIDE the roots, not between them.
        "1": "a = 2 > 0이므로 포물선은 아래로 볼록해요. 따라서 2x² + 3x − 9 ≥ 0은 두 근 사이가 아니라 바깥쪽이에요.",
        // EN (option C): You flipped the signs of the roots when factoring (2x − 3)(x + 3) = 0; the roots are x = 1.5 and x = −3.
        "2": "(2x − 3)(x + 3) = 0을 풀 때 근의 부호를 반대로 적었어요; 근은 x = 1.5와 x = −3이에요.",
        // EN (option D): You forgot the left branch x ≤ −3 where the parabola also rises above the x-axis.
        "3": "포물선이 x축 위로 올라가는 왼쪽 구간 x ≤ −3을 빠뜨렸어요.",
      },
    },

    // ── t2-2-q004 · numeric · exam · SL · SL 2.7 · 4 marks
    "t2-2-q004": {
      // EN: <p>The line <span class="chem">y = 2x + k</span> is a tangent to the parabola <span class="chem">y = x^2 - 4x + 7</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>직선 <span class=\"chem\">y = 2x + k</span>가 포물선 <span class=\"chem\">y = x^2 - 4x + 7</span>에 접해요. <span class=\"chem\">k</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Equate <span class="chem">x^2 - 4x + 7 = 2x + k</span> and move all terms to the left: <span class="chem">x^2 - 6x + (7 - k) = 0</span>.
        "<span class=\"chem\">x^2 - 4x + 7 = 2x + k</span>로 놓고 모든 항을 좌변으로 이항하세요: <span class=\"chem\">x^2 - 6x + (7 - k) = 0</span>.",
        // EN: A tangent line touches the parabola at a single repeated root, so set <span class="chem">Delta = (-6)^2 - 4(1)(7 - k) = 0</span>.
        "접선은 포물선과 한 점(중근)에서 만나므로 <span class=\"chem\">Delta = (-6)^2 - 4(1)(7 - k) = 0</span>으로 두세요.",
      ],
      // EN: <p>Setting <span class="chem">x^2 - 4x + 7 = 2x + k</span> gives <span class="chem">x^2 - 6x + (7 - k) = 0</span>. Since the line is tangent to the parabola, <span class="chem">Delta = 0</span>: <span class="chem">(-6)^2 - 4(1)(7 - k) = 0 => 36 - 28 + 4k = 0 => 4k = -8 => k = -2</span>.</p>
      solution: "<p><span class=\"chem\">x^2 - 4x + 7 = 2x + k</span>로 놓으면 <span class=\"chem\">x^2 - 6x + (7 - k) = 0</span>이에요. 직선이 포물선에 접하므로 <span class=\"chem\">Delta = 0</span>: <span class=\"chem\">(-6)^2 - 4(1)(7 - k) = 0 => 36 - 28 + 4k = 0 => 4k = -8 => k = -2</span>예요.</p>",
    },

    // ── t2-2-q005 · mcq · exam · SL · SL 2.7 · 2 marks
    "t2-2-q005": {
      // EN: <p>Find the set of values of <span class="chem">k</span> for which the quadratic expression <span class="chem">kx^2 + 6x + k</span> is <strong>strictly positive</strong> (<span class="chem">&gt; 0</span>) for all real values of <span class="chem">x</span>.</p>
      stem: "<p>모든 실수 <span class=\"chem\">x</span>에 대하여 이차식 <span class=\"chem\">kx^2 + 6x + k</span>가 <strong>항상 양수</strong>(<span class=\"chem\">&gt; 0</span>)가 되도록 하는 <span class=\"chem\">k</span>의 값의 범위를 구하시오 (Find).</p>",
      options: [
        // EN: <span class="chem">k &gt; 3</span>
        "<span class=\"chem\">k &gt; 3</span>",
        // EN: <span class="chem">k &lt; -3</span> or <span class="chem">k &gt; 3</span>
        "<span class=\"chem\">k &lt; -3</span> 또는 <span class=\"chem\">k &gt; 3</span>",
        // EN: <span class="chem">-3 &lt; k &lt; 3</span>
        "<span class=\"chem\">-3 &lt; k &lt; 3</span>",
        // EN: <span class="chem">k &gt;= 3</span>
        "<span class=\"chem\">k &gt;= 3</span>",
      ],
      hints: [
        // EN: For a quadratic to be strictly positive (<span class="chem">&gt; 0</span>) for all <span class="chem">x ∈ ℝ</span>, two conditions must hold simultaneously: <span class="chem">a &gt; 0</span> (opens upwards) AND <span class="chem">Delta &lt; 0</span> (never touches the <span class="chem">x</span>-axis).
        "모든 <span class=\"chem\">x ∈ ℝ</span>에 대해 이차식이 항상 양수(<span class=\"chem\">&gt; 0</span>)가 되려면 두 조건이 동시에 성립해야 해요: <span class=\"chem\">a &gt; 0</span> (아래로 볼록)이면서 동시에 <span class=\"chem\">Delta &lt; 0</span> (<span class=\"chem\">x</span>축과 만나지 않음).",
        // EN: Solve <span class="chem">6^2 - 4(k)(k) &lt; 0</span> and intersect with <span class="chem">k &gt; 0</span>.
        "<span class=\"chem\">6^2 - 4(k)(k) &lt; 0</span>을 풀고 <span class=\"chem\">k &gt; 0</span>과 교집합을 구하세요.",
      ],
      // EN: <p>We need the parabola to open upwards (<span class="chem">k &gt; 0</span>) and never touch the <span class="chem">x</span>-axis (<span class="chem">Delta &lt; 0</span>). Here <span class="chem">Delta = 36 - 4k^2 &lt; 0 => k^2 &gt; 9 => k &lt; -3</span> or <span class="chem">k &gt; 3</span>. Intersecting with <span class="chem">k &gt; 0</span> leaves <span class="chem">k &gt; 3</span>.</p>
      solution: "<p>포물선이 아래로 볼록(<span class=\"chem\">k &gt; 0</span>)이면서 <span class=\"chem\">x</span>축과 만나지 않아야(<span class=\"chem\">Delta &lt; 0</span>) 해요. <span class=\"chem\">Delta = 36 - 4k^2 &lt; 0 => k^2 &gt; 9 => k &lt; -3</span> 또는 <span class=\"chem\">k &gt; 3</span>이므로, <span class=\"chem\">k &gt; 0</span>과의 교집합은 <span class=\"chem\">k &gt; 3</span>이에요.</p>",
      misconception: {
        // EN (option B): Δ < 0 gives k² > 9 (k < −3 or k > 3), but for k < −3 the parabola opens downwards and is always NEGATIVE, not always positive! You must also require a = k > 0.
        "1": "Δ < 0에서 k² > 9 (k < −3 또는 k > 3)이 나오지만, k < −3일 때는 포물선이 위로 볼록해져서 항상 음수가 돼요! 반드시 a = k > 0 조건도 확인해야 해요.",
        // EN (option C): You solved Δ > 0 (two real roots) instead of Δ < 0 (no real roots).
        "2": "Δ < 0 (실근 없음) 대신 Δ > 0 (두 실근)을 풀었어요.",
        // EN (option D): If k = 3, then 3x² + 6x + 3 = 3(x + 1)² equals 0 at x = −1, violating strictly positive (> 0).
        "3": "k = 3이면 3x² + 6x + 3 = 3(x + 1)²이 x = −1에서 0이 되어 항상 양수(> 0) 조건에 어긋나요.",
      },
    },

    // ── t2-2-q006 · mcq · foundation · SL · SL 2.8 · 2 marks
    "t2-2-q006": {
      // EN: <p>What are the equations of the vertical and horizontal asymptotes of the rational function <span class="chem">f(x) = (6 - 2x)/(x + 4)</span>?</p>
      stem: "<p>유리함수 <span class=\"chem\">f(x) = (6 - 2x)/(x + 4)</span>의 수직점근선과 수평점근선의 방정식은 무엇인가요?</p>",
      options: [
        // EN: Vertical asymptote: <span class="chem">x = -4</span>; Horizontal asymptote: <span class="chem">y = -2</span>
        "수직점근선: <span class=\"chem\">x = -4</span>; 수평점근선: <span class=\"chem\">y = -2</span>",
        // EN: Vertical asymptote: <span class="chem">x = -4</span>; Horizontal asymptote: <span class="chem">y = 6</span>
        "수직점근선: <span class=\"chem\">x = -4</span>; 수평점근선: <span class=\"chem\">y = 6</span>",
        // EN: Vertical asymptote: <span class="chem">x = 4</span>; Horizontal asymptote: <span class="chem">y = -2</span>
        "수직점근선: <span class=\"chem\">x = 4</span>; 수평점근선: <span class=\"chem\">y = -2</span>",
        // EN: Vertical asymptote: <span class="chem">x = 3</span>; Horizontal asymptote: <span class="chem">y = -4</span>
        "수직점근선: <span class=\"chem\">x = 3</span>; 수평점근선: <span class=\"chem\">y = -4</span>",
      ],
      hints: [
        // EN: Write the numerator in standard descending order <span class="chem">f(x) = (-2x + 6)/(x + 4)</span> so you do not misread <span class="chem">a</span>!
        "<span class=\"chem\">a</span>를 잘못 읽지 않도록 분자를 내림차순으로 정리해 <span class=\"chem\">f(x) = (-2x + 6)/(x + 4)</span>로 쓰세요!",
      ],
      // EN: <p>Rewriting <span class="chem">f(x) = (-2x + 6)/(x + 4)</span>: the denominator is zero when <span class="chem">x + 4 = 0 => x = -4</span> (vertical asymptote), and the ratio of <span class="chem">x</span>-coefficients is <span class="chem">-2/1 = -2 => y = -2</span> (horizontal asymptote).</p>
      solution: "<p><span class=\"chem\">f(x) = (-2x + 6)/(x + 4)</span>로 고쳐 쓰면, 분모가 0이 되는 <span class=\"chem\">x + 4 = 0 => x = -4</span>가 수직점근선이고, <span class=\"chem\">x</span> 계수의 비 <span class=\"chem\">-2/1 = -2 => y = -2</span>가 수평점근선이에요.</p>",
      misconception: {
        // EN (option B): Watch the order of terms in the numerator 6 − 2x = −2x + 6! The leading x-coefficient is −2 (not 6), so y = −2/1 = −2.
        "1": "분자 6 − 2x = −2x + 6의 항 순서를 조심하세요! x의 계수는 6이 아니라 −2이므로 y = −2/1 = −2예요.",
        // EN (option C): Setting the denominator x + 4 = 0 gives x = −4, not x = +4.
        "2": "분모 x + 4 = 0을 풀면 x = +4가 아니라 x = −4예요.",
        // EN (option D): Setting the numerator 6 − 2x = 0 gives the x-intercept x = 3, not the vertical asymptote.
        "3": "분자 6 − 2x = 0을 풀면 수직점근선이 아니라 x절편 x = 3이 나와요.",
      },
    },

    // ── t2-2-q007 · numeric · exam · SL · SL 2.8 · 3 marks
    "t2-2-q007": {
      // EN: <p>When the rational function <span class="chem">f(x) = (4x - 3)/(x + 2)</span> is written in the form <span class="chem">A + B/(x + 2)</span>, find the value of <span class="chem">B</span>.</p>
      stem: "<p>유리함수 <span class=\"chem\">f(x) = (4x - 3)/(x + 2)</span>를 <span class=\"chem\">A + B/(x + 2)</span> 꼴로 나타낼 때, <span class=\"chem\">B</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Write <span class="chem">4x - 3 = 4(x + 2) + B</span> and equate constants on both sides.
        "<span class=\"chem\">4x - 3 = 4(x + 2) + B</span>로 쓰고 양변의 상수항을 비교하세요.",
      ],
      // EN: <p>Write the numerator in terms of <span class="chem">(x + 2)</span>: <span class="chem">4x - 3 = 4(x + 2) - 8 - 3 = 4(x + 2) - 11</span>. Dividing by <span class="chem">(x + 2)</span> gives <span class="chem">f(x) = 4 + (-11)/(x + 2)</span>, so <span class="chem">B = -11</span>.</p>
      solution: "<p>분자를 <span class=\"chem\">(x + 2)</span>로 나타내면 <span class=\"chem\">4x - 3 = 4(x + 2) - 8 - 3 = 4(x + 2) - 11</span>이에요. <span class=\"chem\">(x + 2)</span>로 나누면 <span class=\"chem\">f(x) = 4 + (-11)/(x + 2)</span>이므로 <span class=\"chem\">B = -11</span>이에요.</p>",
    },

    // ── t2-2-q008 · multi · exam · SL · SL 2.9 · 3 marks
    "t2-2-q008": {
      // EN: <p>Consider the logarithmic function <span class="chem">f(x) = 2 ln(x - 3) + 4</span>. Which of the following statements about the graph of <span class="chem">f</span> are correct?</p>
      stem: "<p>로그함수 <span class=\"chem\">f(x) = 2 ln(x - 3) + 4</span>를 생각하자. <span class=\"chem\">f</span>의 그래프에 대한 설명 중 옳은 것을 모두 고르시오.</p>",
      options: [
        // EN: The graph has a vertical asymptote with equation <span class="chem">x = 3</span>.
        "그래프는 방정식이 <span class=\"chem\">x = 3</span>인 수직점근선을 갖는다.",
        // EN: The domain of <span class="chem">f</span> is <span class="chem">x &gt; 3</span> and the range is <span class="chem">y ∈ ℝ</span>.
        "<span class=\"chem\">f</span>의 정의역은 <span class=\"chem\">x &gt; 3</span>이고 치역은 <span class=\"chem\">y ∈ ℝ</span>이다.",
        // EN: The graph passes through the point <span class=\"chem\">(4, 4)</span>.
        "그래프는 점 <span class=\"chem\">(4, 4)</span>를 지난다.",
        // EN: The graph has a horizontal asymptote with equation <span class="chem">y = 4</span>.
        "그래프는 방정식이 <span class=\"chem\">y = 4</span>인 수평점근선을 갖는다.",
      ],
      hints: [
        // EN: Check the log domain requirement <span class="chem">x - 3 &gt; 0</span>, evaluate <span class="chem">f(4)</span> using <span class="chem">ln(1) = 0</span>, and recall whether log graphs have horizontal or vertical asymptotes.
        "로그의 정의역 조건 <span class=\"chem\">x - 3 &gt; 0</span>을 확인하고, <span class=\"chem\">ln(1) = 0</span>을 이용해 <span class=\"chem\">f(4)</span>를 계산하며, 로그 그래프가 수직점근선과 수평점근선 중 어느 것을 갖는지 떠올리세요.",
      ],
      // EN: <p>Since <span class="chem">ln(u)</span> requires <span class="chem">u &gt; 0</span>, the domain is <span class="chem">x &gt; 3</span> with vertical asymptote <span class="chem">x = 3</span>, and the range of any logarithm is all real numbers <span class="chem">ℝ</span> (no horizontal asymptote). At <span class="chem">x = 4</span>, <span class="chem">f(4) = 2 ln(1) + 4 = 0 + 4 = 4</span>.</p>
      solution: "<p><span class=\"chem\">ln(u)</span>는 <span class=\"chem\">u &gt; 0</span>이어야 하므로 정의역은 <span class=\"chem\">x &gt; 3</span>, 수직점근선은 <span class=\"chem\">x = 3</span>이고, 모든 로그함수의 치역은 실수 전체 <span class=\"chem\">ℝ</span>이에요 (수평점근선 없음). <span class=\"chem\">x = 4</span>에서 <span class=\"chem\">f(4) = 2 ln(1) + 4 = 0 + 4 = 4</span>예요.</p>",
      misconception: {
        // EN (option D): Exponential functions have a horizontal asymptote, whereas logarithmic functions grow without bound as x → ∞ and have a VERTICAL asymptote (x = 3), not a horizontal one.
        "3": "지수함수는 수평점근선을 갖지만, 로그함수는 x → ∞일 때 끝없이 커지므로 수평점근선이 아니라 수직점근선(x = 3)을 가져요.",
      },
    },

    // ── t2-2-q009 · order · foundation · SL · SL 2.7 · 3 marks
    "t2-2-q009": {
      // EN: <p>Place the following steps in the correct logical order to find the values of <span class="chem">m</span> for which the line <span class="chem">y = mx - 2</span> is tangent to the parabola <span class="chem">y = 2x^2 + 3x</span>.</p>
      stem: "<p>직선 <span class=\"chem\">y = mx - 2</span>가 포물선 <span class=\"chem\">y = 2x^2 + 3x</span>에 접하도록 하는 <span class=\"chem\">m</span>의 값을 구하는 단계를 올바른 논리적 순서로 배열하시오.</p>",
      options: [
        // EN: Equate the two equations: <span class="chem">2x^2 + 3x = mx - 2</span>.
        "두 식을 같다고 놓는다: <span class=\"chem\">2x^2 + 3x = mx - 2</span>.",
        // EN: Rearrange into standard quadratic form <span class="chem">Ax^2 + Bx + C = 0</span>: <span class="chem">2x^2 + (3 - m)x + 2 = 0</span>.
        "이차방정식의 일반형 <span class=\"chem\">Ax^2 + Bx + C = 0</span>으로 정리한다: <span class=\"chem\">2x^2 + (3 - m)x + 2 = 0</span>.",
        // EN: Set the discriminant <span class="chem">Delta = B^2 - 4AC = 0</span> for tangency: <span class="chem">(3 - m)^2 - 4(2)(2) = 0</span>.
        "접할 조건으로 판별식 <span class=\"chem\">Delta = B^2 - 4AC = 0</span>으로 둔다: <span class=\"chem\">(3 - m)^2 - 4(2)(2) = 0</span>.",
        // EN: Solve <span class="chem">(3 - m)^2 = 16</span> to obtain <span class="chem">3 - m = +-4</span>, giving <span class="chem">m = -1</span> or <span class="chem">m = 7</span>.
        "<span class=\"chem\">(3 - m)^2 = 16</span>을 풀어 <span class=\"chem\">3 - m = +-4</span>, 즉 <span class=\"chem\">m = -1</span> 또는 <span class=\"chem\">m = 7</span>을 얻는다.",
      ],
      hints: [
        // EN: First equate <span class="chem">y</span>-values, group like powers of <span class="chem">x</span> to identify <span class="chem">A, B, C</span>, apply <span class="chem">Delta = 0</span>, and solve for <span class="chem">m</span>.
        "먼저 <span class=\"chem\">y</span>값을 같다고 놓고, <span class=\"chem\">x</span>의 동류항을 묶어 <span class=\"chem\">A, B, C</span>를 찾은 뒤 <span class=\"chem\">Delta = 0</span>을 적용하여 <span class=\"chem\">m</span>을 푸세요.",
      ],
      // EN: <p>Equating <span class="chem">2x^2 + 3x = mx - 2</span> and rearranging to <span class="chem">2x^2 + (3 - m)x + 2 = 0</span> identifies <span class="chem">A = 2, B = 3 - m, C = 2</span>. Tangency requires <span class="chem">Delta = (3 - m)^2 - 16 = 0 => m = -1</span> or <span class="chem">m = 7</span>.</p>
      solution: "<p><span class=\"chem\">2x^2 + 3x = mx - 2</span>를 <span class=\"chem\">2x^2 + (3 - m)x + 2 = 0</span>으로 정리하면 <span class=\"chem\">A = 2, B = 3 - m, C = 2</span>예요. 접하려면 <span class=\"chem\">Delta = (3 - m)^2 - 16 = 0 => m = -1</span> 또는 <span class=\"chem\">m = 7</span>이어야 해요.</p>",
    },

    // ── t2-2-q010 · numeric · exam · SL · SL 2.9 · 3 marks
    "t2-2-q010": {
      // EN: <p>A population of bacteria is modelled by <span class="chem">P(t) = 450 e^{0.18t}</span>, where <span class="chem">t</span> is the time in hours after observation begins. Find the time <span class="chem">t</span> when the population reaches <span class="chem">1800</span>, giving your answer in hours correct to 3 significant figures.</p>
      stem: "<p>박테리아 개체 수가 관찰 시작 <span class=\"chem\">t</span>시간 후에 <span class=\"chem\">P(t) = 450 e^{0.18t}</span>로 모델링돼요. 개체 수가 <span class=\"chem\">1800</span>에 도달하는 시각 <span class=\"chem\">t</span>를 시간 단위로 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Divide both sides of <span class="chem">450 e^{0.18t} = 1800</span> by <span class="chem">450</span> first to get <span class="chem">e^{0.18t} = 4</span>.
        "먼저 <span class=\"chem\">450 e^{0.18t} = 1800</span>의 양변을 <span class=\"chem\">450</span>으로 나누어 <span class=\"chem\">e^{0.18t} = 4</span>를 얻으세요.",
        // EN: Take the natural logarithm: <span class="chem">t = (ln 4) / 0.18</span>.
        "자연로그를 취하세요: <span class=\"chem\">t = (ln 4) / 0.18</span>.",
      ],
      // EN: <p>Setting <span class="chem">450 e^{0.18t} = 1800</span> gives <span class="chem">e^{0.18t} = 4 => 0.18t = ln 4 => t = (ln 4)/0.18 ≈ 7.7016 = 7.70</span> hours (3 s.f.).</p>
      solution: "<p><span class=\"chem\">450 e^{0.18t} = 1800</span>으로 놓으면 <span class=\"chem\">e^{0.18t} = 4 => 0.18t = ln 4 => t = (ln 4)/0.18 ≈ 7.7016 = 7.70</span>시간 (3 s.f.)이에요.</p>",
    },

    // ── t2-2-q011 · numeric · exam · SL · SL 2.10 · 3 marks
    "t2-2-q011": {
      // EN: <p>Using a GDC, find the solution to the equation <span class="chem">ln(x + 2) = 4 - x</span>, giving your answer correct to 3 significant figures.</p>
      stem: "<p>GDC를 사용하여 방정식 <span class=\"chem\">ln(x + 2) = 4 - x</span>의 해를 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Graph <span class="chem">Y_1 = ln(x + 2)</span> and <span class="chem">Y_2 = 4 - x</span> (or find the zero of <span class="chem">ln(x + 2) + x - 4</span>).
        "GDC에 <span class=\"chem\">Y_1 = ln(x + 2)</span>와 <span class=\"chem\">Y_2 = 4 - x</span>를 그리세요 (또는 <span class=\"chem\">ln(x + 2) + x - 4</span>의 영점을 찾으세요).",
        // EN: Use the intersect tool (or the zero tool on <span class="chem">ln(x + 2) + x - 4</span>); you should find <span class="chem">x ≈ 2.497</span>. Check: <span class="chem">ln(4.497) ≈ 1.503</span> and <span class="chem">4 - 2.497 = 1.503</span>.
        "교점 기능(또는 <span class=\"chem\">ln(x + 2) + x - 4</span>에 zero 기능)을 사용하면 <span class=\"chem\">x ≈ 2.497</span>을 얻어요. 확인: <span class=\"chem\">ln(4.497) ≈ 1.503</span>, <span class=\"chem\">4 - 2.497 = 1.503</span>.",
      ],
      // EN: <p>Graphing <span class="chem">Y_1 = ln(x + 2)</span> and <span class="chem">Y_2 = 4 - x</span> gives a single intersection at <span class="chem">(2.4967, 1.5033)</span>, so <span class="chem">x = 2.50</span> (3 s.f.). There is only one solution because <span class="chem">ln(x + 2)</span> is increasing and <span class="chem">4 - x</span> is decreasing.</p>
      solution: "<p><span class=\"chem\">Y_1 = ln(x + 2)</span>와 <span class=\"chem\">Y_2 = 4 - x</span>를 그리면 교점은 <span class=\"chem\">(2.4967, 1.5033)</span> 하나뿐이므로 <span class=\"chem\">x = 2.50</span>(유효숫자 3자리)이에요. <span class=\"chem\">ln(x + 2)</span>는 증가하고 <span class=\"chem\">4 - x</span>는 감소하므로 해는 하나뿐이에요.</p>",
    },

    // ── t2-2-q012 · mcq · exam · SL · SL 2.8 · 2 marks
    "t2-2-q012": {
      // EN: <p>The graph of the rational function <span class="chem">f(x) = (ax + b)/(x + c)</span> has a vertical asymptote <span class="chem">x = 2</span>, a horizontal asymptote <span class="chem">y = -3</span>, and passes through the origin <span class="chem">(0, 0)</span>. What are the values of <span class="chem">a, b, c</span>?</p>
      stem: "<p>유리함수 <span class=\"chem\">f(x) = (ax + b)/(x + c)</span>의 그래프가 수직점근선 <span class=\"chem\">x = 2</span>, 수평점근선 <span class=\"chem\">y = -3</span>을 갖고 원점 <span class=\"chem\">(0, 0)</span>을 지나요. <span class=\"chem\">a, b, c</span>의 값은 무엇인가요?</p>",
      options: [
        // EN: <span class="chem">a = -3, b = 0, c = -2</span>
        "<span class=\"chem\">a = -3, b = 0, c = -2</span>",
        // EN: <span class="chem">a = -3, b = 0, c = 2</span>
        "<span class=\"chem\">a = -3, b = 0, c = 2</span>",
        // EN: <span class="chem">a = 2, b = 0, c = -3</span>
        "<span class=\"chem\">a = 2, b = 0, c = -3</span>",
        // EN: <span class="chem">a = -3, b = 6, c = -2</span>
        "<span class=\"chem\">a = -3, b = 6, c = -2</span>",
      ],
      hints: [
        // EN: Use the vertical asymptote <span class="chem">x = -c = 2</span> to find <span class="chem">c</span>, the horizontal asymptote <span class="chem">y = a/1 = -3</span> to find <span class="chem">a</span>, and <span class="chem">f(0) = 0</span> to find <span class="chem">b</span>.
        "수직점근선 <span class=\"chem\">x = -c = 2</span>로 <span class=\"chem\">c</span>를, 수평점근선 <span class=\"chem\">y = a/1 = -3</span>으로 <span class=\"chem\">a</span>를, <span class=\"chem\">f(0) = 0</span>으로 <span class=\"chem\">b</span>를 구하세요.",
      ],
      // EN: <p>The vertical asymptote <span class="chem">x = 2</span> requires <span class="chem">2 + c = 0 => c = -2</span>. The horizontal asymptote <span class="chem">y = -3</span> gives <span class="chem">a/1 = -3 => a = -3</span>. Passing through <span class="chem">(0, 0)</span> gives <span class="chem">f(0) = b/(-2) = 0 => b = 0</span>.</p>
      solution: "<p>수직점근선이 <span class=\"chem\">x = 2</span>이므로 <span class=\"chem\">2 + c = 0 => c = -2</span>예요. 수평점근선이 <span class=\"chem\">y = -3</span>이므로 <span class=\"chem\">a/1 = -3 => a = -3</span>이에요. <span class=\"chem\">(0, 0)</span>을 지나므로 <span class=\"chem\">f(0) = b/(-2) = 0 => b = 0</span>이에요.</p>",
      misconception: {
        // EN (option B): A vertical asymptote at x = 2 means the denominator x + c is zero when x = 2, so 2 + c = 0 ⇒ c = −2, not +2.
        "1": "x = 2가 수직점근선이라는 것은 x = 2일 때 분모 x + c가 0이라는 뜻이므로 2 + c = 0 ⇒ c = −2예요 (+2가 아니에요).",
        // EN (option C): You swapped the horizontal asymptote y = a and the vertical asymptote x = −c.
        "2": "수평점근선 y = a와 수직점근선 x = −c를 서로 바꾸어 적었어요.",
        // EN (option D): Since the graph passes through (0, 0), f(0) = b/c = 0 ⇒ b = 0.
        "3": "그래프가 (0, 0)을 지나므로 f(0) = b/c = 0 ⇒ b = 0이에요.",
      },
    },

    // ── t2-2-q013 · short · exam · SL · SL 2.7 · 6 marks
    "t2-2-q013": {
      // EN: <p>Let <span class="chem">f(x) = x^2 + (k + 1)x + 2k + 2</span>, where <span class="chem">k ∈ ℝ</span>.<br>(a) Show that the discriminant of <span class="chem">f(x)</span> can be written as <span class="chem">Delta = (k + 1)(k - 7)</span>. <strong>[3 marks]</strong><br>(b) Hence find the set of values of <span class="chem">k</span> for which the equation <span class="chem">f(x) = 0</span> has two distinct real roots. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">k ∈ ℝ</span>일 때 <span class=\"chem\">f(x) = x^2 + (k + 1)x + 2k + 2</span>라 하자.<br>(a) <span class=\"chem\">f(x)</span>의 판별식이 <span class=\"chem\">Delta = (k + 1)(k - 7)</span>로 나타내어짐을 보이시오 (Show that). <strong>[3 marks]</strong><br>(b) 이를 이용하여 방정식 <span class=\"chem\">f(x) = 0</span>이 서로 다른 두 실근을 갖도록 하는 <span class=\"chem\">k</span>의 값의 범위를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: In part (a), notice that <span class="chem">2k + 2 = 2(k + 1)</span>, so you can factor <span class="chem">(k + 1)</span> out of <span class="chem">(k + 1)^2 - 8(k + 1)</span> in one step!
        "(a)에서는 <span class=\"chem\">2k + 2 = 2(k + 1)</span>이므로 <span class=\"chem\">(k + 1)^2 - 8(k + 1)</span>에서 <span class=\"chem\">(k + 1)</span>을 한 번에 묶어 낼 수 있어요!",
        // EN: In part (b), sketch the upward-opening parabola <span class="chem">y = (k + 1)(k - 7)</span> to see where <span class="chem">Delta &gt; 0</span>.
        "(b)에서는 아래로 볼록한 포물선 <span class=\"chem\">y = (k + 1)(k - 7)</span>을 그려 <span class=\"chem\">Delta &gt; 0</span>인 구간을 찾으세요.",
      ],
      // EN: <p>(a) <span class="chem">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)^2 - 8(k + 1) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>.<br>(b) For two distinct real roots, <span class="chem">Delta &gt; 0 => (k + 1)(k - 7) &gt; 0</span>. Since the quadratic in <span class="chem">k</span> opens upwards with roots at <span class="chem">k = -1</span> and <span class="chem">k = 7</span>, we have <span class="chem">k &lt; -1</span> or <span class="chem">k &gt; 7</span>.</p>
      solution: "<p>(a) <span class=\"chem\">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)^2 - 8(k + 1) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>.<br>(b) 서로 다른 두 실근을 가지려면 <span class=\"chem\">Delta &gt; 0 => (k + 1)(k - 7) &gt; 0</span>이어야 해요. <span class=\"chem\">k</span>에 대한 이차식이 아래로 볼록하고 근이 <span class=\"chem\">k = -1</span>, <span class=\"chem\">k = 7</span>이므로 <span class=\"chem\">k &lt; -1</span> 또는 <span class=\"chem\">k &gt; 7</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>; (b) <span class="chem">k &lt; -1</span> or <span class="chem">k &gt; 7</span>.</p>
      answer: "<p>(a) <span class=\"chem\">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>; (b) <span class=\"chem\">k &lt; -1</span> 또는 <span class=\"chem\">k &gt; 7</span>.</p>",
      markscheme: [
        // EN: M1: Substitutes a = 1, b = k + 1, c = 2k + 2 into Δ = b² − 4ac to get Δ = (k + 1)² − 4(2k + 2).
        "M1: Δ = b² − 4ac에 a = 1, b = k + 1, c = 2k + 2를 대입해 Δ = (k + 1)² − 4(2k + 2)를 세움.",
        // EN: M1: Expands to k² + 2k + 1 − 8k − 8 (or writes 4(2k + 2) as 8(k + 1) to give (k + 1)² − 8(k + 1)).
        "M1: k² + 2k + 1 − 8k − 8로 전개함 (또는 4(2k + 2)를 8(k + 1)로 써서 (k + 1)² − 8(k + 1)로 나타냄).",
        // EN: A1: Obtains k² − 6k − 7 (or (k + 1)[(k + 1) − 8]). AG: Δ = (k + 1)(k − 7) follows; the given line itself earns no mark.
        "A1: k² − 6k − 7 (또는 (k + 1)[(k + 1) − 8])을 얻음. AG: 따라서 Δ = (k + 1)(k − 7); 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: M1: Uses the condition Δ > 0 for two distinct real roots: (k + 1)(k − 7) > 0.
        "M1: 서로 다른 두 실근을 가질 조건 Δ > 0을 이용함: (k + 1)(k − 7) > 0.",
        // EN: A1: Identifies critical values k = −1 and k = 7.
        "A1: 경계값 k = −1과 k = 7을 구함.",
        // EN: A1: States the correct outside intervals k < −1 or k > 7 (strict inequalities required).
        "A1: 올바른 바깥 구간 k < −1 또는 k > 7을 답함 (등호 없는 부등식 필수).",
      ],
    },

    // ── t2-2-q014 · short · exam · SL · SL 2.9 · 6 marks
    "t2-2-q014": {
      // EN: <p>The mass <span class="chem">M(t)</span> (in milligrams) of a medical tracer in a patient's bloodstream <span class="chem">t</span> hours after injection is modelled by <span class="chem">M(t) = M_0 e^{-kt}</span> for <span class="chem">t &gt;= 0</span>. Initially (<span class="chem">t = 0</span>), <span class="chem">120</span> <span class="unit">mg</span> is injected. After <span class="chem">4</span> hours, <span class="chem">75</span> <span class="unit">mg</span> remains.<br>(a) Find the value of <span class="chem">M_0</span> and show that <span class="chem">k = (1/4) ln(8/5)</span>. <strong>[3 marks]</strong><br>(b) Find the half-life of the tracer (the time taken for the mass to fall to <span class="chem">60</span> <span class="unit">mg</span>), giving your answer in hours to 3 significant figures. <strong>[3 marks]</strong></p>
      stem: "<p>환자의 혈류에 주사된 의료용 추적자의 주사 후 <span class=\"chem\">t</span>시간 뒤 질량 <span class=\"chem\">M(t)</span>(밀리그램)가 <span class=\"chem\">t &gt;= 0</span>에서 <span class=\"chem\">M(t) = M_0 e^{-kt}</span>로 모델링된다. 처음(<span class=\"chem\">t = 0</span>)에 <span class=\"chem\">120</span> <span class=\"unit\">mg</span>을 주사했고, <span class=\"chem\">4</span>시간 후에는 <span class=\"chem\">75</span> <span class=\"unit\">mg</span>이 남아 있다.<br>(a) <span class=\"chem\">M_0</span>의 값을 구하고 (Find), <span class=\"chem\">k = (1/4) ln(8/5)</span>임을 보이시오 (Show that). <strong>[3 marks]</strong><br>(b) 추적자의 반감기(질량이 <span class=\"chem\">60</span> <span class=\"unit\">mg</span>으로 줄어드는 데 걸리는 시간)를 시간 단위로 구하고 (Find) 유효숫자 3자리로 답하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Simplify the fraction <span class="chem">75 / 120 = 5 / 8</span> and use <span class="chem">-ln(5/8) = ln(8/5)</span>.
        "분수 <span class=\"chem\">75 / 120 = 5 / 8</span>을 약분하고 <span class=\"chem\">-ln(5/8) = ln(8/5)</span>를 이용하세요.",
        // EN: For the half-life, solve <span class="chem">e^{-kt} = 0.5 => t = (ln 2) / k</span>.
        "반감기를 구하려면 <span class=\"chem\">e^{-kt} = 0.5 => t = (ln 2) / k</span>를 푸세요.",
      ],
      // EN: <p>(a) At <span class="chem">t = 0</span>, <span class="chem">M(0) = M_0 e^0 = 120 => M_0 = 120</span>. At <span class="chem">t = 4</span>, <span class="chem">120 e^{-4k} = 75 => e^{-4k} = 75/120 = 5/8 => -4k = ln(5/8) = -ln(8/5) => k = (1/4) ln(8/5)</span>.<br>(b) Setting <span class="chem">M(t) = 60</span> gives <span class="chem">e^{-kt} = 1/2 => kt = ln 2 => t = 4 ln 2 / ln(8/5) ≈ 5.899 = 5.90</span> hours (3 s.f.).</p>
      solution: "<p>(a) <span class=\"chem\">t = 0</span>일 때 <span class=\"chem\">M(0) = M_0 e^0 = 120 => M_0 = 120</span>이에요. <span class=\"chem\">t = 4</span>일 때 <span class=\"chem\">120 e^{-4k} = 75 => e^{-4k} = 75/120 = 5/8 => -4k = ln(5/8) = -ln(8/5) => k = (1/4) ln(8/5)</span>예요.<br>(b) <span class=\"chem\">M(t) = 60</span>으로 놓으면 <span class=\"chem\">e^{-kt} = 1/2 => kt = ln 2 => t = 4 ln 2 / ln(8/5) ≈ 5.899 = 5.90</span>시간 (3 s.f.)이에요.</p>",
      // EN: <p>(a) <span class="chem">M_0 = 120</span>; <span class="chem">k = (1/4) ln(8/5) ≈ 0.1175</span>; (b) <span class="chem">5.90</span> hours.</p>
      answer: "<p>(a) <span class=\"chem\">M_0 = 120</span>; <span class=\"chem\">k = (1/4) ln(8/5) ≈ 0.1175</span>; (b) <span class=\"chem\">5.90</span>시간.</p>",
      markscheme: [
        // EN: A1: States M₀ = 120 from M(0) = 120.
        "A1: M(0) = 120으로부터 M₀ = 120을 구함.",
        // EN: M1: Substitutes t = 4, M = 75 to write 120 e^(−4k) = 75 ⇒ e^(−4k) = 75/120 = 5/8.
        "M1: t = 4, M = 75를 대입해 120 e^(−4k) = 75 ⇒ e^(−4k) = 75/120 = 5/8을 세움.",
        // EN: A1: Takes natural logs: −4k = ln(5/8) = −ln(8/5). AG: k = (1/4) ln(8/5); the given line itself earns no mark.
        "A1: 자연로그를 취함: −4k = ln(5/8) = −ln(8/5). AG: k = (1/4) ln(8/5); 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: M1: Sets e^(−kt) = 1/2 (or 120 e^(−kt) = 60).
        "M1: e^(−kt) = 1/2 (또는 120 e^(−kt) = 60)을 세움.",
        // EN: M1: Solves t = (ln 2) / k = 4 ln 2 / ln(8/5).
        "M1: t = (ln 2) / k = 4 ln 2 / ln(8/5)를 계산함.",
        // EN: A1: Evaluates t = 5.899... = 5.90 hours (3 s.f.).
        "A1: t = 5.899... = 5.90시간 (3 s.f.)을 구함.",
      ],
    },

    // ── t2-2-q015 · numeric · exam · SL · SL 1.7 / 2.7 · 4 marks
    "t2-2-q015": {
      // EN: <p>The equation <span class="chem">9^x - 12(3^{x - 1}) + 3 = 0</span> has two real solutions. Solve the equation, and give the <strong>positive</strong> solution <span class="chem">x</span>.</p>
      stem: "<p>방정식 <span class=\"chem\">9^x - 12(3^{x - 1}) + 3 = 0</span>은 두 개의 실수 해를 가져요. 이 방정식을 풀고 (Solve), <strong>양수인</strong> 해 <span class=\"chem\">x</span>를 구하시오.</p>",
      hints: [
        // EN: Rewrite <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span>.
        "<span class=\"chem\">9^x = (3^x)^2</span>과 <span class=\"chem\">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span>로 고쳐 쓰세요.",
        // EN: Let <span class="chem">u = 3^x</span> to get <span class="chem">u^2 - 4u + 3 = 0</span>, find both values of <span class="chem">u</span>, and solve <span class="chem">3^x = u</span>.
        "<span class=\"chem\">u = 3^x</span>로 치환해 <span class=\"chem\">u^2 - 4u + 3 = 0</span>을 풀고, 두 <span class=\"chem\">u</span>의 값을 구한 뒤 <span class=\"chem\">3^x = u</span>를 푸세요.",
      ],
      // EN: <p>Using exponent laws, <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span>. Letting <span class="chem">u = 3^x</span> gives <span class="chem">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span>, so <span class="chem">u = 1</span> or <span class="chem">u = 3</span>. Since <span class="chem">3^x = 1 => x = 0</span> and <span class="chem">3^x = 3 => x = 1</span>, the solutions are <span class="chem">x = 0</span> and <span class="chem">x = 1</span>, so the positive solution is <span class="chem">x = 1</span>.</p>
      solution: "<p>지수법칙으로 <span class=\"chem\">9^x = (3^x)^2</span>, <span class=\"chem\">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span>예요. <span class=\"chem\">u = 3^x</span>로 두면 <span class=\"chem\">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span>이므로 <span class=\"chem\">u = 1</span> 또는 <span class=\"chem\">u = 3</span>이에요. <span class=\"chem\">3^x = 1 => x = 0</span>이고 <span class=\"chem\">3^x = 3 => x = 1</span>이므로 해는 <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 1</span>이므로 양수인 해는 <span class=\"chem\">x = 1</span>이에요.</p>",
    },

    // ── t2-2-q016 · mcq · challenge · SL · SL 2.7 · 2 marks
    "t2-2-q016": {
      // EN: <p>Find the complete set of values of the real parameter <span class="chem">m</span> for which the inequality <span class="chem">(m - 2)x^2 + 2(m - 2)x + 4 &gt; 0</span> holds for <strong>all</strong> <span class="chem">x ∈ ℝ</span>.</p>
      stem: "<p>부등식 <span class=\"chem\">(m - 2)x^2 + 2(m - 2)x + 4 &gt; 0</span>이 <strong>모든</strong> <span class=\"chem\">x ∈ ℝ</span>에 대하여 성립하도록 하는 실수 매개변수 <span class=\"chem\">m</span>의 값의 범위를 모두 구하시오 (Find).</p>",
      options: [
        // EN: <span class="chem">2 &lt;= m &lt; 6</span>
        "<span class=\"chem\">2 &lt;= m &lt; 6</span>",
        // EN: <span class="chem">2 &lt; m &lt; 6</span>
        "<span class=\"chem\">2 &lt; m &lt; 6</span>",
        // EN: <span class="chem">m &lt; 2</span> or <span class="chem">m &gt; 6</span>
        "<span class=\"chem\">m &lt; 2</span> 또는 <span class=\"chem\">m &gt; 6</span>",
        // EN: <span class="chem">m &gt; 2</span>
        "<span class=\"chem\">m &gt; 2</span>",
      ],
      hints: [
        // EN: Decode: the coefficient of <span class="chem">x^2</span> contains the parameter, so "for all <span class="chem">x</span>" splits into two situations: the expression is a genuine quadratic (<span class="chem">m != 2</span>), or the <span class="chem">x^2</span> coefficient is zero and it is not a quadratic at all. Both must be checked.
        "해석: <span class=\"chem\">x^2</span>의 계수에 매개변수가 들어 있으므로 \"모든 <span class=\"chem\">x</span>에 대하여\"는 두 경우로 나뉩니다: 식이 실제로 이차식인 경우(<span class=\"chem\">m != 2</span>)와, <span class=\"chem\">x^2</span>의 계수가 0이 되어 이차식이 아닌 경우입니다. 두 경우를 모두 확인해야 합니다.",
        // EN: First check the quadratic case where <span class="chem">a = m - 2 &gt; 0</span> and <span class="chem">Delta &lt; 0</span>.
        "먼저 이차식인 경우 <span class=\"chem\">a = m - 2 &gt; 0</span>이고 <span class=\"chem\">Delta &lt; 0</span>인 조건을 확인하세요.",
        // EN: Then separately test the degenerate case <span class="chem">m = 2</span> where the <span class="chem">x^2</span> and <span class="chem">x</span> terms vanish!
        "그다음 <span class=\"chem\">x^2</span>과 <span class=\"chem\">x</span> 항이 사라지는 특별한 경우 <span class=\"chem\">m = 2</span>를 따로 확인하세요!",
      ],
      // EN: <p>Case 1 (<span class="chem">m != 2</span>, quadratic): Require <span class="chem">m - 2 &gt; 0 => m &gt; 2</span> and <span class="chem">Delta = 4(m - 2)^2 - 16(m - 2) = 4(m - 2)(m - 6) &lt; 0 => 2 &lt; m &lt; 6</span>.<br>Case 2 (<span class="chem">m = 2</span>, constant): Substituting <span class="chem">m = 2</span> gives <span class="chem">0x^2 + 0x + 4 &gt; 0 => 4 &gt; 0</span>, which is true for all <span class="chem">x ∈ ℝ</span>! Combining both cases gives <span class="chem">2 &lt;= m &lt; 6</span>.</p>
      solution: "<p>경우 1 (<span class=\"chem\">m != 2</span>, 이차식): <span class=\"chem\">m - 2 &gt; 0 => m &gt; 2</span>이고 <span class=\"chem\">Delta = 4(m - 2)^2 - 16(m - 2) = 4(m - 2)(m - 6) &lt; 0 => 2 &lt; m &lt; 6</span>이에요.<br>경우 2 (<span class=\"chem\">m = 2</span>, 상수): <span class=\"chem\">m = 2</span>를 대입하면 <span class=\"chem\">0x^2 + 0x + 4 &gt; 0 => 4 &gt; 0</span>이 되어 모든 <span class=\"chem\">x ∈ ℝ</span>에 대해 참이에요! 두 경우를 합치면 <span class=\"chem\">2 &lt;= m &lt; 6</span>이에요.</p>",
      misconception: {
        // EN (option B): You checked the quadratic case m − 2 > 0 and Δ < 0 (giving 2 < m < 6), but forgot to test the degenerate case m = 2! When m = 2, the expression reduces to 4 > 0, which holds for all x ∈ ℝ.
        "1": "이차식인 경우 m − 2 > 0과 Δ < 0 (2 < m < 6)은 확인했지만, 퇴화한 경우 m = 2를 확인하는 것을 빠뜨렸어요! m = 2일 때 식은 4 > 0이 되어 모든 x ∈ ℝ에서 성립해요.",
        // EN (option C): You solved Δ > 0 instead of Δ < 0.
        "2": "Δ < 0 대신 Δ > 0을 풀었어요.",
        // EN (option D): You checked a = m − 2 > 0, but forgot to require Δ < 0.
        "3": "a = m − 2 > 0은 확인했지만 Δ < 0 조건을 빠뜨렸어요.",
      },
    },

    // ── t2-2-q017 · numeric · exam · SL · SL 1.7 · 4 marks
    "t2-2-q017": {
      // EN: <p>Solve the logarithmic equation <span class="chem">log_2(x - 1) + log_2(x + 2) = 2</span> for <span class="chem">x</span>.</p>
      stem: "<p>로그방정식 <span class=\"chem\">log_2(x - 1) + log_2(x + 2) = 2</span>를 <span class=\"chem\">x</span>에 관해 푸시오.</p>",
      hints: [
        // EN: Combine the logs using <span class="chem">log_2((x - 1)(x + 2)) = 2</span>, so <span class="chem">(x - 1)(x + 2) = 2^2 = 4</span>.
        "<span class=\"chem\">log_2((x - 1)(x + 2)) = 2</span>로 로그를 합쳐 <span class=\"chem\">(x - 1)(x + 2) = 2^2 = 4</span>를 얻으세요.",
        // EN: Solve the quadratic and reject any root that violates the domain restriction <span class="chem">x - 1 &gt; 0</span>!
        "이차방정식을 풀고 정의역 조건 <span class=\"chem\">x - 1 &gt; 0</span>을 어기는 근은 제외하세요!",
      ],
      // EN: <p>Domain requires <span class="chem">x - 1 &gt; 0</span> and <span class="chem">x + 2 &gt; 0</span>, so <span class="chem">x &gt; 1</span>. Combining the logarithms gives <span class="chem">log_2[(x - 1)(x + 2)] = 2 => (x - 1)(x + 2) = 2^2 = 4 => x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0</span>. Rejecting <span class="chem">x = -3</span> (since <span class="chem">x &gt; 1</span>) leaves the unique valid solution <span class="chem">x = 2</span>.</p>
      solution: "<p>정의역 조건은 <span class=\"chem\">x - 1 &gt; 0</span>이고 <span class=\"chem\">x + 2 &gt; 0</span>이므로 <span class=\"chem\">x &gt; 1</span>이에요. 로그를 합치면 <span class=\"chem\">log_2[(x - 1)(x + 2)] = 2 => (x - 1)(x + 2) = 2^2 = 4 => x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0</span>이에요. <span class=\"chem\">x &gt; 1</span>이므로 <span class=\"chem\">x = -3</span>을 제외하면 유일한 해 <span class=\"chem\">x = 2</span>가 남아요.</p>",
    },

    // ── t2-2-q018 · short · challenge · SL · SL 2.8 · 6 marks
    "t2-2-q018": {
      // EN: <p>Let <span class="chem">f(x) = (2x - 1)/(x + 1)</span> for <span class="chem">x != -1</span>, and let <span class="chem">g_k(x) = kx + 2</span>.<br>(a) Show that the <span class="chem">x</span>-coordinates of the points of intersection of the graphs of <span class="chem">f</span> and <span class="chem">g_k</span> satisfy <span class="chem">kx^2 + kx + 3 = 0</span>. <strong>[2 marks]</strong><br>(b) Hence find the non-zero value of <span class="chem">k</span> for which the line <span class="chem">y = kx + 2</span> is tangent to the hyperbola <span class="chem">y = f(x)</span>, and find the coordinates of the point of contact. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">x != -1</span>에서 <span class=\"chem\">f(x) = (2x - 1)/(x + 1)</span>이고 <span class=\"chem\">g_k(x) = kx + 2</span>라 하자.<br>(a) <span class=\"chem\">f</span>와 <span class=\"chem\">g_k</span>의 그래프의 교점의 <span class=\"chem\">x</span>좌표가 <span class=\"chem\">kx^2 + kx + 3 = 0</span>을 만족함을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) 이를 이용하여 직선 <span class=\"chem\">y = kx + 2</span>가 쌍곡선 <span class=\"chem\">y = f(x)</span>에 접하도록 하는 0이 아닌 <span class=\"chem\">k</span>의 값을 구하고 (Find), 접점의 좌표를 구하시오 (Find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "tangent" means the line meets the curve at exactly one point, so the equation from (a) must have a repeated root (<span class="chem">Delta = 0</span>). "Non-zero" tells you to reject <span class="chem">k = 0</span>, because then the equation is not a quadratic.
        "해석: \"접한다\"는 직선과 곡선이 정확히 한 점에서 만난다는 뜻이므로 (a)의 방정식은 중근을 가져야 합니다(<span class=\"chem\">Delta = 0</span>). \"0이 아닌\"은 <span class=\"chem\">k = 0</span>일 때 방정식이 이차방정식이 아니므로 제외하라는 뜻입니다.",
        // EN: For part (a), multiply both sides of <span class="chem">(2x - 1)/(x + 1) = kx + 2</span> by <span class="chem">(x + 1)</span> and expand.
        "(a)에서는 <span class=\"chem\">(2x - 1)/(x + 1) = kx + 2</span>의 양변에 <span class=\"chem\">(x + 1)</span>을 곱하고 전개하세요.",
        // EN: For part (b), set the discriminant of <span class="chem">kx^2 + kx + 3 = 0</span> equal to zero!
        "(b)에서는 <span class=\"chem\">kx^2 + kx + 3 = 0</span>의 판별식을 0으로 두세요!",
      ],
      // EN: <p>(a) Setting <span class="chem">(2x - 1)/(x + 1) = kx + 2</span> and multiplying by <span class="chem">x + 1</span> (<span class="chem">x != -1</span>) gives <span class="chem">2x - 1 = kx^2 + kx + 2x + 2 => kx^2 + kx + 3 = 0</span>.<br>(b) For tangency, <span class="chem">Delta = k^2 - 4(k)(3) = k(k - 12) = 0</span>. Since <span class="chem">k != 0</span>, <span class="chem">k = 12</span>. Substituting <span class="chem">k = 12</span> gives <span class="chem">12x^2 + 12x + 3 = 3(2x + 1)^2 = 0 => x = -1/2</span>, and <span class="chem">y = 12(-1/2) + 2 = -4</span>, so the point of contact is <span class="chem">(-1/2, -4)</span>.</p>
      solution: "<p>(a) <span class=\"chem\">(2x - 1)/(x + 1) = kx + 2</span>로 놓고 <span class=\"chem\">x + 1</span> (<span class=\"chem\">x != -1</span>)을 곱하면 <span class=\"chem\">2x - 1 = kx^2 + kx + 2x + 2 => kx^2 + kx + 3 = 0</span>이에요.<br>(b) 접하려면 <span class=\"chem\">Delta = k^2 - 4(k)(3) = k(k - 12) = 0</span>이어야 해요. <span class=\"chem\">k != 0</span>이므로 <span class=\"chem\">k = 12</span>예요. <span class=\"chem\">k = 12</span>를 대입하면 <span class=\"chem\">12x^2 + 12x + 3 = 3(2x + 1)^2 = 0 => x = -1/2</span>이고 <span class=\"chem\">y = 12(-1/2) + 2 = -4</span>이므로 접점은 <span class=\"chem\">(-1/2, -4)</span>예요.</p>",
      // EN: <p>(a) <span class="chem">(2x - 1)/(x + 1) = kx + 2 => 2x - 1 = (kx + 2)(x + 1) = kx^2 + (k + 2)x + 2 => kx^2 + kx + 3 = 0</span>; (b) <span class="chem">k = 12</span>, point of contact <span class="chem">(-1/2, -4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(2x - 1)/(x + 1) = kx + 2 => 2x - 1 = (kx + 2)(x + 1) = kx^2 + (k + 2)x + 2 => kx^2 + kx + 3 = 0</span>; (b) <span class=\"chem\">k = 12</span>, 접점 <span class=\"chem\">(-1/2, -4)</span>.</p>",
      markscheme: [
        // EN: M1: Equates (2x − 1)/(x + 1) = kx + 2 and multiplies both sides by (x + 1).
        "M1: (2x − 1)/(x + 1) = kx + 2로 놓고 양변에 (x + 1)을 곱함.",
        // EN: A1: Expands correctly: 2x − 1 = kx² + (k + 2)x + 2. AG: kx² + kx + 3 = 0; the given line itself earns no mark.
        "A1: 올바르게 전개함: 2x − 1 = kx² + (k + 2)x + 2. AG: kx² + kx + 3 = 0; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: M1: Sets discriminant Δ = k² − 4(k)(3) = 0 for tangency.
        "M1: 접할 조건으로 판별식 Δ = k² − 4(k)(3) = 0을 세움.",
        // EN: A1: Solves k(k − 12) = 0 and selects the non-zero value k = 12.
        "A1: k(k − 12) = 0을 풀어 0이 아닌 값 k = 12를 선택함.",
        // EN: M1: Substitutes k = 12 into 12x² + 12x + 3 = 0 ⇒ 3(2x + 1)² = 0 to find x = −1/2.
        "M1: 12x² + 12x + 3 = 0 ⇒ 3(2x + 1)² = 0에 k = 12를 대입해 x = −1/2를 구함.",
        // EN: A1: Evaluates y = 12(−1/2) + 2 = −4 to state the point of contact (−1/2, −4).
        "A1: y = 12(−1/2) + 2 = −4를 계산하여 접점 (−1/2, −4)를 답함.",
      ],
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't2-2.q', {
  questions: {

    // ── t2-2-q019 · numeric · foundation · SL · SL 2.6 · 2 marks
    "t2-2-q019": {
      // EN: <p>Let <span class="chem">f(x) = -2x^2 + 12x - 5</span>. Find the maximum value of <span class="chem">f(x)</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = -2x^2 + 12x - 5</span>라 하자. <span class=\"chem\">f(x)</span>의 최댓값을 구하시오 (Find).</p>",
      hints: [
        // EN: The coefficient of <span class="chem">x^2</span> is negative, so the vertex is a maximum. Use the axis of symmetry <span class="chem">x = -b/(2a)</span> from the formula booklet.
        "<span class=\"chem\">x^2</span>의 계수가 음수이므로 꼭짓점에서 최댓값을 가져요. 공식집의 대칭축 <span class=\"chem\">x = -b/(2a)</span>를 이용하세요.",
        // EN: Here <span class="chem">x = -12/(2 × (-2)) = 3</span>. Now evaluate <span class="chem">f(3)</span>.
        "여기서 <span class=\"chem\">x = -12/(2 × (-2)) = 3</span>이에요. 이제 <span class=\"chem\">f(3)</span>을 계산하세요.",
      ],
      // EN: <p>The axis of symmetry is <span class="chem">x = -b/(2a) = -12/(-4) = 3</span>. Since <span class="chem">a = -2 &lt; 0</span>, the vertex is a maximum: <span class="chem">f(3) = -2(9) + 36 - 5 = 13</span>. (Completing the square gives the same result: <span class="chem">f(x) = -2(x - 3)^2 + 13</span>.)</p>
      solution: "<p>대칭축은 <span class=\"chem\">x = -b/(2a) = -12/(-4) = 3</span>이에요. <span class=\"chem\">a = -2 &lt; 0</span>이므로 꼭짓점에서 최대가 되고, <span class=\"chem\">f(3) = -2(9) + 36 - 5 = 13</span>이에요. (완전제곱식으로 변형해도 같은 결과 <span class=\"chem\">f(x) = -2(x - 3)^2 + 13</span>을 얻어요.)</p>",
    },

    // ── t2-2-q020 · mcq · foundation · SL · SL 2.8 · 1 mark
    "t2-2-q020": {
      // EN: <p>Let <span class="chem">f(x) = 1/x</span>, for <span class="chem">x != 0</span>. Which statement is correct?</p>
      stem: "<p><span class=\"chem\">x != 0</span>에 대하여 <span class=\"chem\">f(x) = 1/x</span>라 하자. 옳은 것은 어느 것인가?</p>",
      options: [
        // EN: <span class="chem">f^{-1}(x) = 1/x</span>, so <span class="chem">f</span> is self-inverse and its graph is symmetric about the line <span class="chem">y = x</span>.
        "<span class=\"chem\">f^{-1}(x) = 1/x</span>이므로 <span class=\"chem\">f</span>는 자기역함수이고, 그 그래프는 직선 <span class=\"chem\">y = x</span>에 대하여 대칭이다.",
        // EN: <span class="chem">f^{-1}(x) = -1/x</span>, so the graph of <span class="chem">f</span> is symmetric about the line <span class="chem">y = -x</span>.
        "<span class=\"chem\">f^{-1}(x) = -1/x</span>이므로 <span class=\"chem\">f</span>의 그래프는 직선 <span class=\"chem\">y = -x</span>에 대하여 대칭이다.",
        // EN: <span class="chem">f</span> has no inverse function, because <span class="chem">f</span> is not defined at <span class="chem">x = 0</span>.
        "<span class=\"chem\">f</span>는 <span class=\"chem\">x = 0</span>에서 정의되지 않으므로 <span class=\"chem\">f</span>는 역함수를 갖지 않는다.",
        // EN: <span class="chem">f(f(x)) = 1/x^2</span>.
        "<span class=\"chem\">f(f(x)) = 1/x^2</span>.",
      ],
      hints: [
        // EN: Swap <span class="chem">x</span> and <span class="chem">y</span> in <span class="chem">y = 1/x</span> and make <span class="chem">y</span> the subject. What do you get?
        "<span class=\"chem\">y = 1/x</span>에서 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 서로 바꾸고 <span class=\"chem\">y</span>에 대하여 정리하세요. 무엇이 나오나요?",
      ],
      // EN: <p>Swapping gives <span class="chem">x = 1/y => y = 1/x</span>, so <span class="chem">f^{-1}(x) = 1/x = f(x)</span>: the reciprocal function is self-inverse, and <span class="chem">f(f(x)) = 1/(1/x) = x</span>. A function and its inverse are reflections in <span class="chem">y = x</span>, so the graph of a self-inverse function is symmetric about <span class="chem">y = x</span>.</p>
      solution: "<p>서로 바꾸면 <span class=\"chem\">x = 1/y => y = 1/x</span>이므로 <span class=\"chem\">f^{-1}(x) = 1/x = f(x)</span>예요. 즉, 분수함수는 자기역함수이고 <span class=\"chem\">f(f(x)) = 1/(1/x) = x</span>예요. 함수와 그 역함수는 <span class=\"chem\">y = x</span>에 대하여 대칭이므로, 자기역함수의 그래프는 <span class=\"chem\">y = x</span>에 대하여 대칭이에요.</p>",
      misconception: {
        // EN (option B): The graph of 1/x is symmetric about y = −x as well, but that is not what makes f its own inverse. Solving x = 1/y gives y = 1/x, not −1/x.
        "1": "1/x의 그래프는 y = −x에 대해서도 대칭이지만, 그것이 f가 자기 자신의 역함수가 되는 이유는 아니에요. x = 1/y를 풀면 y = 1/x가 나오고, −1/x가 아니에요.",
        // EN (option C): A function needs to be one-to-one on its domain to have an inverse. Leaving out x = 0 does not stop that: 1/x is one-to-one on x ≠ 0.
        "2": "함수가 역함수를 가지려면 정의역에서 일대일이면 돼요. x = 0을 제외해도 이것은 방해받지 않아요: 1/x는 x ≠ 0에서 일대일이에요.",
        // EN (option D): Composing is not multiplying. f(f(x)) = f(1/x) = 1/(1/x) = x, not (1/x) × (1/x).
        "3": "합성은 곱셈이 아니에요. f(f(x)) = f(1/x) = 1/(1/x) = x이고, (1/x) × (1/x)가 아니에요.",
      },
    },

    // ── t2-2-q021 · numeric · foundation · SL · SL 2.9 · 2 marks
    "t2-2-q021": {
      // EN: <p>The graph of <span class="chem">y = 3^x</span> is reflected in the line <span class="chem">y = x</span> to give the graph of <span class="chem">y = g(x)</span>. Find <span class="chem">g(81)</span>.</p>
      stem: "<p><span class=\"chem\">y = 3^x</span>의 그래프를 직선 <span class=\"chem\">y = x</span>에 대하여 대칭이동하면 <span class=\"chem\">y = g(x)</span>의 그래프가 된다. <span class=\"chem\">g(81)</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: A reflection in <span class="chem">y = x</span> gives the inverse function. The inverse of <span class="chem">3^x</span> is <span class="chem">log_3 x</span>.
        "<span class=\"chem\">y = x</span>에 대한 대칭이동은 역함수를 줘요. <span class=\"chem\">3^x</span>의 역함수는 <span class=\"chem\">log_3 x</span>예요.",
        // EN: Write <span class="chem">81</span> as a power of <span class="chem">3</span>.
        "<span class=\"chem\">81</span>을 <span class=\"chem\">3</span>의 거듭제곱으로 나타내세요.",
      ],
      // EN: <p>The reflection of <span class="chem">y = 3^x</span> in <span class="chem">y = x</span> is its inverse, <span class="chem">g(x) = log_3 x</span>. Since <span class="chem">81 = 3^4</span>, <span class="chem">g(81) = log_3 3^4 = 4</span> (booklet: <span class="chem">log_a a^x = x</span>).</p>
      solution: "<p><span class=\"chem\">y = 3^x</span>을 <span class=\"chem\">y = x</span>에 대하여 대칭이동한 것은 그 역함수 <span class=\"chem\">g(x) = log_3 x</span>예요. <span class=\"chem\">81 = 3^4</span>이므로 <span class=\"chem\">g(81) = log_3 3^4 = 4</span>예요 (공식집: <span class=\"chem\">log_a a^x = x</span>).</p>",
    },

    // ── t2-2-q022 · short · exam · SL · SL 2.6, 2.7 · 6 marks
    "t2-2-q022": {
      // EN: <p>The graph of <span class="chem">y = a(x - h)^2 + k</span> has its vertex at <span class="chem">(-1, 8)</span> and passes through the point <span class="chem">(2, -10)</span>.<br>(a) Write down the values of <span class="chem">h</span> and <span class="chem">k</span>, and find the value of <span class="chem">a</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-intercepts of the graph. <strong>[2 marks]</strong><br>(c) Express the function in the form <span class="chem">y = px^2 + qx + r</span>, and write down the <span class="chem">y</span>-intercept. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">y = a(x - h)^2 + k</span>의 그래프는 꼭짓점이 <span class=\"chem\">(-1, 8)</span>이고 점 <span class=\"chem\">(2, -10)</span>을 지난다.<br>(a) <span class=\"chem\">h</span>와 <span class=\"chem\">k</span>의 값을 쓰고 (Write down), <span class=\"chem\">a</span>의 값을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 그래프의 <span class=\"chem\">x</span>절편을 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 함수를 <span class=\"chem\">y = px^2 + qx + r</span>의 꼴로 나타내고 (Express), <span class=\"chem\">y</span>절편을 쓰시오 (Write down). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: In vertex form the vertex is <span class="chem">(h, k)</span>, so you can write down <span class="chem">h</span> and <span class="chem">k</span> straight away. Substitute <span class="chem">(2, -10)</span> to find <span class="chem">a</span>.
        "꼭짓점 꼴에서 꼭짓점은 <span class=\"chem\">(h, k)</span>이므로 <span class=\"chem\">h</span>와 <span class=\"chem\">k</span>는 바로 쓸 수 있어요. <span class=\"chem\">(2, -10)</span>을 대입해서 <span class=\"chem\">a</span>를 구하세요.",
        // EN: For the <span class="chem">x</span>-intercepts, set <span class="chem">y = 0</span> and take square roots of <span class="chem">(x + 1)^2 = 4</span>; remember the <span class="chem">+-</span>.
        "<span class=\"chem\">x</span>절편은 <span class=\"chem\">y = 0</span>으로 놓고 <span class=\"chem\">(x + 1)^2 = 4</span>의 제곱근을 취해서 구해요. <span class=\"chem\">+-</span>를 잊지 마세요.",
      ],
      // EN: <p>(a) The vertex is <span class="chem">(h, k) = (-1, 8)</span>. Substituting <span class="chem">(2, -10)</span>: <span class="chem">-10 = a(3)^2 + 8 => 9a = -18 => a = -2</span>.<br>(b) <span class="chem">-2(x + 1)^2 + 8 = 0 => (x + 1)^2 = 4 => x + 1 = +-2 => x = 1</span> or <span class="chem">x = -3</span>. Check: the axis <span class="chem">x = -1</span> is halfway between them.<br>(c) <span class="chem">y = -2(x^2 + 2x + 1) + 8 = -2x^2 - 4x + 6</span>, so the <span class="chem">y</span>-intercept is <span class="chem">6</span>.</p>
      solution: "<p>(a) 꼭짓점은 <span class=\"chem\">(h, k) = (-1, 8)</span>이에요. <span class=\"chem\">(2, -10)</span>을 대입하면 <span class=\"chem\">-10 = a(3)^2 + 8 => 9a = -18 => a = -2</span>예요.<br>(b) <span class=\"chem\">-2(x + 1)^2 + 8 = 0 => (x + 1)^2 = 4 => x + 1 = +-2 => x = 1</span> 또는 <span class=\"chem\">x = -3</span>예요. 확인: 축 <span class=\"chem\">x = -1</span>은 두 값의 한가운데에 있어요.<br>(c) <span class=\"chem\">y = -2(x^2 + 2x + 1) + 8 = -2x^2 - 4x + 6</span>이므로 <span class=\"chem\">y</span>절편은 <span class=\"chem\">6</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">h = -1</span>, <span class="chem">k = 8</span>, <span class="chem">a = -2</span>; (b) <span class="chem">x = -3</span> and <span class="chem">x = 1</span>; (c) <span class="chem">y = -2x^2 - 4x + 6</span>, <span class="chem">y</span>-intercept <span class="chem">6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">h = -1</span>, <span class=\"chem\">k = 8</span>, <span class=\"chem\">a = -2</span>; (b) <span class=\"chem\">x = -3</span>과 <span class=\"chem\">x = 1</span>; (c) <span class=\"chem\">y = -2x^2 - 4x + 6</span>, <span class=\"chem\">y</span>절편 <span class=\"chem\">6</span>.</p>",
      markscheme: [
        // EN: M1: Substitutes the point into y = a(x + 1)² + 8: −10 = a(2 + 1)² + 8, i.e. 9a = −18.
        "M1: 점을 y = a(x + 1)² + 8에 대입함: −10 = a(2 + 1)² + 8, 즉 9a = −18.",
        // EN: A1: a = −2 (with h = −1, k = 8).
        "A1: a = −2 (h = −1, k = 8과 함께).",
        // EN: M1: Sets −2(x + 1)² + 8 = 0 ⇒ (x + 1)² = 4 ⇒ x + 1 = ±2.
        "M1: −2(x + 1)² + 8 = 0 ⇒ (x + 1)² = 4 ⇒ x + 1 = ±2로 놓음.",
        // EN: A1: x = −3 and x = 1.
        "A1: x = −3과 x = 1.",
        // EN: A1: Expands −2(x² + 2x + 1) + 8 = −2x² − 4x + 6.
        "A1: −2(x² + 2x + 1) + 8 = −2x² − 4x + 6으로 전개함.",
        // EN: A1: y-intercept is 6 (the point (0, 6)).
        "A1: y절편은 6 (점 (0, 6)).",
      ],
    },

    // ── t2-2-q023 · numeric · exam · SL · SL 2.7 · 3 marks
    "t2-2-q023": {
      // EN: <p>The equation <span class="chem">2x^2 - 6x + 3 = 0</span> has two real roots. Find the larger root, giving your answer in exact form.</p>
      stem: "<p>방정식 <span class=\"chem\">2x^2 - 6x + 3 = 0</span>은 두 실근을 갖는다. 더 큰 근을 구하고 (Find) 정확한 값으로 나타내시오.</p>",
      hints: [
        // EN: The quadratic does not factorise over the integers, so use the quadratic formula with <span class="chem">a = 2</span>, <span class="chem">b = -6</span>, <span class="chem">c = 3</span>.
        "이 이차식은 정수 범위에서 인수분해되지 않으므로 <span class=\"chem\">a = 2</span>, <span class=\"chem\">b = -6</span>, <span class=\"chem\">c = 3</span>으로 근의 공식을 이용하세요.",
        // EN: Simplify the surd: <span class="chem">sqrt(12) = 2 sqrt(3)</span>, then divide every term by the common factor.
        "근호를 간단히 하세요: <span class=\"chem\">sqrt(12) = 2 sqrt(3)</span>. 그다음 각 항을 공통인수로 나누세요.",
      ],
      // EN: <p><span class="chem">x = (6 +- sqrt(36 - 24))/4 = (6 +- sqrt(12))/4 = (6 +- 2 sqrt(3))/4 = (3 +- sqrt(3))/2</span>. The larger root is <span class="chem">(3 + sqrt(3))/2</span>.</p>
      solution: "<p><span class=\"chem\">x = (6 +- sqrt(36 - 24))/4 = (6 +- sqrt(12))/4 = (6 +- 2 sqrt(3))/4 = (3 +- sqrt(3))/2</span>. 더 큰 근은 <span class=\"chem\">(3 + sqrt(3))/2</span>예요.</p>",
    },

    // ── t2-2-q024 · short · exam · SL · SL 2.7 · 4 marks
    "t2-2-q024": {
      // EN: <p>Solve the inequality <span class="chem">3x^2 &lt;= 5x + 2</span>.</p>
      stem: "<p>부등식 <span class=\"chem\">3x^2 &lt;= 5x + 2</span>를 푸시오 (Solve).</p>",
      hints: [
        // EN: Move everything to one side so that you compare a quadratic with <span class="chem">0</span>. Do not divide by <span class="chem">x</span>.
        "모든 항을 한쪽으로 옮겨 이차식을 <span class=\"chem\">0</span>과 비교하는 꼴로 만드세요. <span class=\"chem\">x</span>로 나누면 안 돼요.",
        // EN: Factorise <span class="chem">3x^2 - 5x - 2</span> and sketch the parabola: it opens upwards, so where is it below the axis?
        "<span class=\"chem\">3x^2 - 5x - 2</span>를 인수분해하고 포물선을 그려 보세요: 아래로 볼록하니까 축보다 아래에 있는 곳은 어디일까요?",
      ],
      // EN: <p><span class="chem">3x^2 - 5x - 2 &lt;= 0 => (3x + 1)(x - 2) &lt;= 0</span>. The critical values are <span class="chem">x = -1/3</span> and <span class="chem">x = 2</span>. The parabola opens upwards, so it is on or below the <span class="chem">x</span>-axis between the roots: <span class="chem">-1/3 &lt;= x &lt;= 2</span>.</p>
      solution: "<p><span class=\"chem\">3x^2 - 5x - 2 &lt;= 0 => (3x + 1)(x - 2) &lt;= 0</span>. 경계값은 <span class=\"chem\">x = -1/3</span>과 <span class=\"chem\">x = 2</span>예요. 포물선이 아래로 볼록하므로 두 근 사이에서 <span class=\"chem\">x</span>축 위 또는 그 아래에 있어요: <span class=\"chem\">-1/3 &lt;= x &lt;= 2</span>.</p>",
      // EN: <p><span class="chem">-1/3 &lt;= x &lt;= 2</span></p>
      answer: "<p><span class=\"chem\">-1/3 &lt;= x &lt;= 2</span></p>",
      markscheme: [
        // EN: M1: Rearranges to one side: 3x² − 5x − 2 ≤ 0.
        "M1: 한쪽으로 정리함: 3x² − 5x − 2 ≤ 0.",
        // EN: A1: Factorises (3x + 1)(x − 2) or otherwise finds the critical values x = −1/3 and x = 2.
        "A1: (3x + 1)(x − 2)로 인수분해하거나 다른 방법으로 경계값 x = −1/3과 x = 2를 구함.",
        // EN: M1: Uses a sketch of the upward parabola or a sign diagram to see the expression is ≤ 0 between the roots.
        "M1: 아래로 볼록한 포물선의 그림이나 부호표를 이용해 두 근 사이에서 식이 ≤ 0임을 확인함.",
        // EN: A1: −1/3 ≤ x ≤ 2 (inclusive inequalities required).
        "A1: −1/3 ≤ x ≤ 2 (등호를 포함한 부등식 필수).",
      ],
    },

    // ── t2-2-q025 · short · exam · SL · SL 2.8 · 7 marks
    "t2-2-q025": {
      // EN: <p>Let <span class="chem">f(x) = (6x - 3)/(2x + 4)</span>, for <span class="chem">x != -2</span>.<br>(a) Write down the equation of (i) the vertical asymptote and (ii) the horizontal asymptote of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the coordinates of the points where the graph meets the axes. <strong>[2 marks]</strong><br>(c) Sketch the graph of <span class="chem">f</span>, showing the asymptotes and intercepts. <strong>[2 marks]</strong><br>(d) Hence write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">x != -2</span>에 대하여 <span class=\"chem\">f(x) = (6x - 3)/(2x + 4)</span>라 하자.<br>(a) <span class=\"chem\">f</span>의 그래프의 (i) 수직점근선과 (ii) 수평점근선의 방정식을 쓰시오 (Write down). <strong>[2 marks]</strong><br>(b) 그래프가 좌표축과 만나는 점의 좌표를 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 점근선과 절편을 나타내어 <span class=\"chem\">f</span>의 그래프를 그리시오 (Sketch). <strong>[2 marks]</strong><br>(d) 이를 이용하여 (Hence) <span class=\"chem\">f</span>의 치역을 쓰시오. <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Set the denominator equal to zero for the vertical asymptote. For the horizontal asymptote, divide the <span class="chem">x</span>-coefficients: <span class="chem">a/c</span>.
        "수직점근선은 분모를 0으로 놓아 구해요. 수평점근선은 <span class=\"chem\">x</span>의 계수끼리 나눈 <span class=\"chem\">a/c</span>예요.",
        // EN: The <span class="chem">x</span>-intercept comes from the numerator being zero; the <span class="chem">y</span>-intercept is <span class="chem">f(0)</span>.
        "<span class=\"chem\">x</span>절편은 분자가 0이 되는 곳에서 나오고, <span class=\"chem\">y</span>절편은 <span class=\"chem\">f(0)</span>이에요.",
        // EN: Put both intercepts on your sketch first. They tell you which pair of opposite regions the branches lie in.
        "먼저 두 절편을 그림에 표시하세요. 그러면 두 곡선 가지가 어느 쪽 마주 보는 영역에 있는지 알 수 있어요.",
      ],
      // EN: <p>(a) <span class="chem">2x + 4 = 0 => x = -2</span>; horizontal asymptote <span class="chem">y = 6/2 = 3</span>.<br>(b) <span class="chem">6x - 3 = 0 => x = 1/2</span>, giving <span class="chem">(1/2, 0)</span>; <span class="chem">f(0) = -3/4</span>, giving <span class="chem">(0, -3/4)</span>.<br>(c) Both intercepts lie to the right of <span class="chem">x = -2</span> and below <span class="chem">y = 3</span>, so one branch runs through them from near <span class="chem">x = -2</span> (going down to <span class="chem">-infty</span>) up towards <span class="chem">y = 3</span>. The other branch is in the opposite region: left of <span class="chem">x = -2</span>, above <span class="chem">y = 3</span>.<br>(d) The graph never reaches its horizontal asymptote, so the range is <span class="chem">y != 3</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2x + 4 = 0 => x = -2</span>; 수평점근선은 <span class=\"chem\">y = 6/2 = 3</span>이에요.<br>(b) <span class=\"chem\">6x - 3 = 0 => x = 1/2</span>이므로 <span class=\"chem\">(1/2, 0)</span>; <span class=\"chem\">f(0) = -3/4</span>이므로 <span class=\"chem\">(0, -3/4)</span>이에요.<br>(c) 두 절편 모두 <span class=\"chem\">x = -2</span>의 오른쪽, <span class=\"chem\">y = 3</span>의 아래쪽에 있으므로, 한 가지는 이 점들을 지나 <span class=\"chem\">x = -2</span> 근처(<span class=\"chem\">-infty</span>로 내려감)에서 <span class=\"chem\">y = 3</span> 쪽으로 올라가요. 다른 가지는 마주 보는 영역, 즉 <span class=\"chem\">x = -2</span>의 왼쪽이고 <span class=\"chem\">y = 3</span>의 위쪽에 있어요.<br>(d) 그래프는 수평점근선에 결코 닿지 않으므로 치역은 <span class=\"chem\">y != 3</span>이에요.</p>",
      // EN: <p>(a) (i) <span class="chem">x = -2</span>; (ii) <span class="chem">y = 3</span>; (b) <span class="chem">(1/2, 0)</span> and <span class="chem">(0, -3/4)</span>; (c) a hyperbola in the top-left and bottom-right regions formed by the asymptotes, passing through both intercepts; (d) <span class="chem">y != 3</span> (all real <span class="chem">y</span> except <span class="chem">3</span>).</p>
      answer: "<p>(a) (i) <span class=\"chem\">x = -2</span>; (ii) <span class=\"chem\">y = 3</span>; (b) <span class=\"chem\">(1/2, 0)</span>과 <span class=\"chem\">(0, -3/4)</span>; (c) 점근선으로 나뉜 왼쪽 위와 오른쪽 아래 영역에 있고 두 절편을 지나는 쌍곡선; (d) <span class=\"chem\">y != 3</span> (<span class=\"chem\">3</span>을 제외한 모든 실수 <span class=\"chem\">y</span>).</p>",
      markscheme: [
        // EN: A1: Vertical asymptote x = −2.
        "A1: 수직점근선 x = −2.",
        // EN: A1: Horizontal asymptote y = 3 (ratio 6/2 of the x-coefficients).
        "A1: 수평점근선 y = 3 (x의 계수의 비 6/2).",
        // EN: A1: x-intercept (1/2, 0) from 6x − 3 = 0.
        "A1: 6x − 3 = 0으로부터 x절편 (1/2, 0).",
        // EN: A1: y-intercept (0, −3/4) from f(0) = −3/4.
        "A1: f(0) = −3/4로부터 y절편 (0, −3/4).",
        // EN: A1: Sketch shows both asymptotes and a two-branch hyperbola approaching them.
        "A1: 그림에 두 점근선과 이에 가까워지는 두 가지의 쌍곡선이 나타나 있음.",
        // EN: A1: Correct branches: the branch through (1/2, 0) and (0, −3/4) lies to the right of x = −2 and below y = 3; the other branch lies to the left of x = −2 and above y = 3.
        "A1: 가지의 위치가 올바름: (1/2, 0)과 (0, −3/4)을 지나는 가지는 x = −2의 오른쪽, y = 3의 아래쪽에 있고, 다른 가지는 x = −2의 왼쪽, y = 3의 위쪽에 있음.",
        // EN: A1: Range y ≠ 3.
        "A1: 치역 y ≠ 3.",
      ],
    },

    // ── t2-2-q026 · numeric · foundation · SL · SL 2.9 · 2 marks
    "t2-2-q026": {
      // EN: <p>The function <span class="chem">f(x) = 2^{3x}</span> can be written in the form <span class="chem">f(x) = e^{kx}</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>함수 <span class=\"chem\">f(x) = 2^{3x}</span>는 <span class=\"chem\">f(x) = e^{kx}</span>의 꼴로 나타낼 수 있다. <span class=\"chem\">k</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: The formula booklet gives <span class="chem">a^x = e^{x ln a}</span>. Write <span class="chem">2^{3x}</span> as <span class="chem">(2^3)^x</span> or apply the identity with exponent <span class="chem">3x</span>.
        "공식집에 <span class=\"chem\">a^x = e^{x ln a}</span>가 있어요. <span class=\"chem\">2^{3x}</span>를 <span class=\"chem\">(2^3)^x</span>로 쓰거나, 지수를 <span class=\"chem\">3x</span>로 하여 이 항등식을 적용하세요.",
      ],
      // EN: <p>Using <span class="chem">a^x = e^{x ln a}</span>: <span class="chem">2^{3x} = e^{3x ln 2}</span>, so <span class="chem">k = 3 ln 2</span> (equivalently <span class="chem">ln 8</span>).</p>
      solution: "<p><span class=\"chem\">a^x = e^{x ln a}</span>를 이용하면 <span class=\"chem\">2^{3x} = e^{3x ln 2}</span>이므로 <span class=\"chem\">k = 3 ln 2</span> (<span class=\"chem\">ln 8</span>와 같음)예요.</p>",
    },

    // ── t2-2-q027 · short · exam · SL · SL 2.9, 2.5 · 6 marks
    "t2-2-q027": {
      // EN: <p>Let <span class="chem">f(x) = ln(2x - 4) + 1</span>, for <span class="chem">x &gt; 2</span>.<br>(a) Write down the equation of the vertical asymptote of the graph of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(b) Find the exact <span class="chem">x</span>-intercept of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(c) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[2 marks]</strong><br>(d) Write down the equation of the horizontal asymptote of the graph of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">x &gt; 2</span>에 대하여 <span class=\"chem\">f(x) = ln(2x - 4) + 1</span>이라 하자.<br>(a) <span class=\"chem\">f</span>의 그래프의 수직점근선의 방정식을 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) <span class=\"chem\">f</span>의 그래프의 <span class=\"chem\">x</span>절편의 정확한 값을 구하시오 (Find). <strong>[2 marks]</strong><br>(c) <span class=\"chem\">f^{-1}(x)</span>에 대한 식을 구하시오 (Find). <strong>[2 marks]</strong><br>(d) <span class=\"chem\">f^{-1}</span>의 그래프의 수평점근선의 방정식을 쓰시오 (Write down). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: A logarithm needs a positive argument, and its graph has a vertical asymptote where the argument is zero.
        "로그의 진수는 양수여야 하고, 그 그래프는 진수가 0이 되는 곳에 수직점근선을 가져요.",
        // EN: For (b), set <span class="chem">f(x) = 0</span>, isolate the logarithm and use <span class="chem">ln u = -1 => u = e^{-1}</span>.
        "(b)에서는 <span class=\"chem\">f(x) = 0</span>으로 놓고 로그만 한쪽에 남긴 다음 <span class=\"chem\">ln u = -1 => u = e^{-1}</span>를 이용하세요.",
        // EN: For (d), the asymptotes of <span class="chem">f^{-1}</span> are the reflections of those of <span class="chem">f</span> in <span class="chem">y = x</span>.
        "(d)에서 <span class=\"chem\">f^{-1}</span>의 점근선은 <span class=\"chem\">f</span>의 점근선을 <span class=\"chem\">y = x</span>에 대하여 대칭이동한 것이에요.",
      ],
      // EN: <p>(a) <span class="chem">2x - 4 = 0 => x = 2</span>.<br>(b) <span class="chem">ln(2x - 4) = -1 => 2x - 4 = e^{-1} => x = 2 + 1/(2e)</span>.<br>(c) Let <span class="chem">x = ln(2y - 4) + 1</span>. Then <span class="chem">e^{x - 1} = 2y - 4</span>, so <span class="chem">f^{-1}(x) = (e^{x - 1} + 4)/2</span>.<br>(d) As <span class="chem">x -&gt; -infty</span>, <span class="chem">e^{x - 1} -&gt; 0</span>, so <span class="chem">f^{-1}(x) -&gt; 2</span>: the horizontal asymptote is <span class="chem">y = 2</span>, the reflection of <span class="chem">x = 2</span> in <span class="chem">y = x</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2x - 4 = 0 => x = 2</span>.<br>(b) <span class=\"chem\">ln(2x - 4) = -1 => 2x - 4 = e^{-1} => x = 2 + 1/(2e)</span>.<br>(c) <span class=\"chem\">x = ln(2y - 4) + 1</span>이라 하면 <span class=\"chem\">e^{x - 1} = 2y - 4</span>이므로 <span class=\"chem\">f^{-1}(x) = (e^{x - 1} + 4)/2</span>예요.<br>(d) <span class=\"chem\">x -&gt; -infty</span>일 때 <span class=\"chem\">e^{x - 1} -&gt; 0</span>이므로 <span class=\"chem\">f^{-1}(x) -&gt; 2</span>예요: 수평점근선은 <span class=\"chem\">y = 2</span>이고, 이는 <span class=\"chem\">x = 2</span>를 <span class=\"chem\">y = x</span>에 대하여 대칭이동한 것이에요.</p>",
      // EN: <p>(a) <span class="chem">x = 2</span>; (b) <span class="chem">x = 2 + 1/(2e)</span>; (c) <span class="chem">f^{-1}(x) = (e^{x - 1} + 4)/2</span>; (d) <span class="chem">y = 2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x = 2</span>; (b) <span class=\"chem\">x = 2 + 1/(2e)</span>; (c) <span class=\"chem\">f^{-1}(x) = (e^{x - 1} + 4)/2</span>; (d) <span class=\"chem\">y = 2</span>.</p>",
      markscheme: [
        // EN: A1: x = 2 (where 2x − 4 = 0).
        "A1: x = 2 (2x − 4 = 0인 곳).",
        // EN: M1: Sets f(x) = 0: ln(2x − 4) = −1 ⇒ 2x − 4 = e⁻¹.
        "M1: f(x) = 0으로 놓음: ln(2x − 4) = −1 ⇒ 2x − 4 = e⁻¹.",
        // EN: A1: x = 2 + 1/(2e) (or (4e + 1)/(2e)).
        "A1: x = 2 + 1/(2e) (또는 (4e + 1)/(2e)).",
        // EN: M1: Interchanges x and y and removes the logarithm: x − 1 = ln(2y − 4) ⇒ e^(x − 1) = 2y − 4.
        "M1: x와 y를 바꾸고 로그를 없앰: x − 1 = ln(2y − 4) ⇒ e^(x − 1) = 2y − 4.",
        // EN: A1: f⁻¹(x) = (e^(x − 1) + 4)/2.
        "A1: f⁻¹(x) = (e^(x − 1) + 4)/2.",
        // EN: A1: y = 2 (the reflection of x = 2 in y = x).
        "A1: y = 2 (x = 2를 y = x에 대하여 대칭이동한 것).",
      ],
    },

    // ── t2-2-q028 · numeric · exam · SL · SL 2.9 · 4 marks
    "t2-2-q028": {
      // EN: <p>The temperature, in °C, of a metal rod <span class="chem">t</span> minutes after it is taken out of a furnace is modelled by <span class="chem">P(t) = 40 + 60 e^{-kt}</span>, where <span class="chem">k &gt; 0</span>. After <span class="chem">10</span> minutes the temperature is <span class="chem">55</span> °C. Find the exact value of <span class="chem">k</span>, giving your answer in the form <span class="chem">(ln a)/b</span>, where <span class="chem">a, b ∈ ℤ^+</span> and <span class="chem">a</span> is prime.</p>
      stem: "<p>용광로에서 꺼낸 지 <span class=\"chem\">t</span>분 후 금속 막대의 온도(°C)가 <span class=\"chem\">P(t) = 40 + 60 e^{-kt}</span>로 모델링된다. 단, <span class=\"chem\">k &gt; 0</span>이다. <span class=\"chem\">10</span>분 후 온도는 <span class=\"chem\">55</span> °C이다. <span class=\"chem\">k</span>의 정확한 값을 구하고 (Find), <span class=\"chem\">a, b ∈ ℤ^+</span>이고 <span class=\"chem\">a</span>가 소수일 때 <span class=\"chem\">(ln a)/b</span>의 꼴로 답하시오.</p>",
      hints: [
        // EN: Decode: you are given one data point, <span class="chem">P(10) = 55</span>. Substitute it and isolate the exponential term before taking logs.
        "해석: 주어진 자료는 한 점 <span class=\"chem\">P(10) = 55</span>이에요. 이를 대입하고, 로그를 취하기 전에 지수 항만 한쪽에 남기세요.",
        // EN: <span class="chem">60 e^{-10k} = 15 => e^{-10k} = 1/4</span>. Now take natural logs and use <span class="chem">ln 4 = 2 ln 2</span>.
        "<span class=\"chem\">60 e^{-10k} = 15 => e^{-10k} = 1/4</span>. 이제 자연로그를 취하고 <span class=\"chem\">ln 4 = 2 ln 2</span>를 이용하세요.",
      ],
      // EN: <p><span class="chem">40 + 60 e^{-10k} = 55 => e^{-10k} = 15/60 = 1/4 => -10k = ln(1/4) = -ln 4 => k = (ln 4)/10 = (2 ln 2)/10 = (ln 2)/5</span>.</p>
      solution: "<p><span class=\"chem\">40 + 60 e^{-10k} = 55 => e^{-10k} = 15/60 = 1/4 => -10k = ln(1/4) = -ln 4 => k = (ln 4)/10 = (2 ln 2)/10 = (ln 2)/5</span>.</p>",
    },

    // ── t2-2-q029 · numeric · exam · SL · SL 2.10, 1.7 · 4 marks
    "t2-2-q029": {
      // EN: <p>Solve the equation <span class="chem">2^{x + 1} = 3^x</span>, giving your answer in the form <span class="chem">(ln a)/(ln b - ln a)</span>, where <span class="chem">a, b ∈ ℤ^+</span>.</p>
      stem: "<p>방정식 <span class=\"chem\">2^{x + 1} = 3^x</span>을 풀고 (Solve), <span class=\"chem\">a, b ∈ ℤ^+</span>일 때 <span class=\"chem\">(ln a)/(ln b - ln a)</span>의 꼴로 답하시오.</p>",
      hints: [
        // EN: The two sides have different bases, so take natural logs of both sides and bring the powers down.
        "양변의 밑이 다르므로 양변에 자연로그를 취하고 지수를 앞으로 내리세요.",
        // EN: <span class="chem">(x + 1) ln 2 = x ln 3</span>. Collect the <span class="chem">x</span> terms on one side and factorise.
        "<span class=\"chem\">(x + 1) ln 2 = x ln 3</span>. <span class=\"chem\">x</span>가 있는 항을 한쪽으로 모으고 묶어 내세요.",
      ],
      // EN: <p>Taking natural logs: <span class="chem">(x + 1) ln 2 = x ln 3 => ln 2 = x ln 3 - x ln 2 = x(ln 3 - ln 2)</span>, so <span class="chem">x = (ln 2)/(ln 3 - ln 2)</span> (<span class="chem">≈ 1.71</span>).</p>
      solution: "<p>자연로그를 취하면 <span class=\"chem\">(x + 1) ln 2 = x ln 3 => ln 2 = x ln 3 - x ln 2 = x(ln 3 - ln 2)</span>이므로 <span class=\"chem\">x = (ln 2)/(ln 3 - ln 2)</span> (<span class=\"chem\">≈ 1.71</span>)예요.</p>",
    },

    // ── t2-2-q030 · short · challenge · SL · SL 2.6 · 8 marks
    "t2-2-q030": {
      // EN: <p>A farmer has <span class="chem">40</span> m of fencing to make a rectangular pen against a straight stone wall. The wall forms one long side of the pen, so fencing is needed for the other three sides only. The two sides perpendicular to the wall each have length <span class="chem">x</span> m.<br>(a) Show that the area of the pen is <span class="chem">A = 40x - 2x^2</span> square metres. <strong>[2 marks]</strong><br>(b) Write <span class="chem">A</span> in the form <span class="chem">a(x - h)^2 + k</span>. <strong>[2 marks]</strong><br>(c) Write down the largest possible area if the wall is long enough. <strong>[1 mark]</strong><br>(d) The wall is only <span class="chem">16</span> m long, and the side parallel to the wall cannot be longer than the wall. Find the largest possible area of the pen in this case. <strong>[3 marks]</strong></p>
      stem: "<p>한 농부가 곧은 돌담에 붙여 직사각형 우리를 만들려고 <span class=\"chem\">40</span> m의 울타리를 가지고 있다. 돌담이 우리의 긴 변 하나가 되므로 울타리는 나머지 세 변에만 필요하다. 돌담에 수직인 두 변의 길이는 각각 <span class=\"chem\">x</span> m이다.<br>(a) 우리의 넓이가 <span class=\"chem\">A = 40x - 2x^2</span> 제곱미터임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">A</span>를 <span class=\"chem\">a(x - h)^2 + k</span>의 꼴로 나타내시오. <strong>[2 marks]</strong><br>(c) 돌담이 충분히 길 때 가능한 최대 넓이를 쓰시오 (Write down). <strong>[1 mark]</strong><br>(d) 돌담의 길이는 <span class=\"chem\">16</span> m뿐이고, 돌담에 평행한 변은 돌담보다 길 수 없다. 이 경우 우리의 가능한 최대 넓이를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a quadratic maximum problem with a hidden restriction. The wall length limits the side parallel to the wall, which changes the domain of <span class="chem">x</span>, so the vertex may no longer be allowed.
        "해석: 숨은 제한 조건이 있는 이차함수 최댓값 문제예요. 돌담의 길이가 돌담에 평행한 변을 제한해서 <span class=\"chem\">x</span>의 정의역이 바뀌므로, 꼭짓점이 더 이상 허용되지 않을 수도 있어요.",
        // EN: The three fenced sides are <span class="chem">x</span>, <span class="chem">x</span> and <span class="chem">40 - 2x</span>. Multiply two adjacent sides for the area.
        "울타리를 친 세 변은 <span class=\"chem\">x</span>, <span class=\"chem\">x</span>, <span class=\"chem\">40 - 2x</span>이에요. 이웃한 두 변을 곱하면 넓이가 돼요.",
        // EN: In (d), turn "the side parallel to the wall is at most <span class="chem">16</span> m" into an inequality for <span class="chem">x</span>. Is the vertex <span class="chem">x = 10</span> inside the allowed set?
        "(d)에서는 \"돌담에 평행한 변은 최대 <span class=\"chem\">16</span> m\"를 <span class=\"chem\">x</span>에 대한 부등식으로 바꾸세요. 꼭짓점 <span class=\"chem\">x = 10</span>은 허용되는 범위 안에 있나요?",
        // EN: If the vertex is outside the allowed interval, the maximum of a parabola on that interval is at the end-point nearest to the vertex.
        "꼭짓점이 허용되는 구간 밖에 있으면, 그 구간에서 포물선의 최댓값은 꼭짓점에 가장 가까운 끝점에서 나와요.",
      ],
      // EN: <p><strong>Decode:</strong> parts (a)–(c) are a standard "maximise a quadratic" problem. Part (d) adds a domain restriction hidden in words: the parallel side <span class="chem">40 - 2x</span> must be at most <span class="chem">16</span>.</p><p>(a) Fencing: <span class="chem">x + x + (40 - 2x) = 40</span>, so the parallel side is <span class="chem">40 - 2x</span> and <span class="chem">A = x(40 - 2x) = 40x - 2x^2</span>.<br>(b) <span class="chem">A = -2(x^2 - 20x) = -2[(x - 10)^2 - 100] = -2(x - 10)^2 + 200</span>.<br>(c) The maximum is <span class="chem">200</span> m² at <span class="chem">x = 10</span>, but then the parallel side is <span class="chem">20</span> m.<br>(d) We need <span class="chem">40 - 2x &lt;= 16 => x &gt;= 12</span> (and <span class="chem">x &lt; 20</span>). The vertex <span class="chem">x = 10</span> is not allowed. For <span class="chem">x &gt; 10</span> the parabola is decreasing, so the largest area is at <span class="chem">x = 12</span>: <span class="chem">A = 12 × 16 = 192</span> m².</p>
      solution: "<p><strong>해석:</strong> (a)–(c)는 표준적인 \"이차함수 최대화\" 문제예요. (d)에는 문장 속에 숨은 정의역 제한이 더해져요: 평행한 변 <span class=\"chem\">40 - 2x</span>은 최대 <span class=\"chem\">16</span>이어야 해요.</p><p>(a) 울타리: <span class=\"chem\">x + x + (40 - 2x) = 40</span>이므로 평행한 변은 <span class=\"chem\">40 - 2x</span>이고 <span class=\"chem\">A = x(40 - 2x) = 40x - 2x^2</span>예요.<br>(b) <span class=\"chem\">A = -2(x^2 - 20x) = -2[(x - 10)^2 - 100] = -2(x - 10)^2 + 200</span>.<br>(c) 최댓값은 <span class=\"chem\">x = 10</span>일 때 <span class=\"chem\">200</span> m²이지만, 그때 평행한 변은 <span class=\"chem\">20</span> m가 돼요.<br>(d) <span class=\"chem\">40 - 2x &lt;= 16 => x &gt;= 12</span> (그리고 <span class=\"chem\">x &lt; 20</span>)이어야 해요. 꼭짓점 <span class=\"chem\">x = 10</span>은 허용되지 않아요. <span class=\"chem\">x &gt; 10</span>에서 포물선은 감소하므로 넓이가 최대인 것은 <span class=\"chem\">x = 12</span>일 때이고, <span class=\"chem\">A = 12 × 16 = 192</span> m²예요.</p>",
      // EN: <p>(a) The side parallel to the wall is <span class="chem">40 - 2x</span>, so <span class="chem">A = x(40 - 2x) = 40x - 2x^2</span>; (b) <span class="chem">A = -2(x - 10)^2 + 200</span>; (c) <span class="chem">200</span> m²; (d) <span class="chem">192</span> m² (when <span class="chem">x = 12</span>).</p>
      answer: "<p>(a) 돌담에 평행한 변은 <span class=\"chem\">40 - 2x</span>이므로 <span class=\"chem\">A = x(40 - 2x) = 40x - 2x^2</span>; (b) <span class=\"chem\">A = -2(x - 10)^2 + 200</span>; (c) <span class=\"chem\">200</span> m²; (d) <span class=\"chem\">192</span> m² (<span class=\"chem\">x = 12</span>일 때).</p>",
      markscheme: [
        // EN: M1: The side parallel to the wall has length 40 − 2x.
        "M1: 돌담에 평행한 변의 길이는 40 − 2x.",
        // EN: A1: A = x(40 − 2x) = 40x − 2x². AG: the given line itself earns no mark.
        "A1: A = x(40 − 2x) = 40x − 2x². AG: 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: M1: Factorises −2(x² − 20x) and completes the square: −2[(x − 10)² − 100].
        "M1: −2(x² − 20x)로 묶고 완전제곱식으로 변형함: −2[(x − 10)² − 100].",
        // EN: A1: A = −2(x − 10)² + 200.
        "A1: A = −2(x − 10)² + 200.",
        // EN: A1: 200 m².
        "A1: 200 m².",
        // EN: M1: Writes the condition 40 − 2x ≤ 16 ⇒ x ≥ 12.
        "M1: 조건 40 − 2x ≤ 16 ⇒ x ≥ 12를 씀.",
        // EN: R1: A is decreasing for x > 10 (right of the vertex), so on x ≥ 12 the maximum is at x = 12.
        "R1: x > 10(꼭짓점의 오른쪽)에서 A는 감소하므로 x ≥ 12에서 최댓값은 x = 12에서 나옴.",
        // EN: A1: A = 12 × 16 = 192 m².
        "A1: A = 12 × 16 = 192 m².",
      ],
    },

    // ── t2-2-q031 · numeric · challenge · SL · SL 2.7 · 5 marks
    "t2-2-q031": {
      // EN: <p>Consider the equation <span class="chem">kx^2 + 4x + k - 3 = 0</span>, where <span class="chem">k ∈ ℤ</span>. Find the number of integer values of <span class="chem">k</span> for which the equation has two distinct real roots.</p>
      stem: "<p><span class=\"chem\">k ∈ ℤ</span>일 때 방정식 <span class=\"chem\">kx^2 + 4x + k - 3 = 0</span>을 생각하자. 이 방정식이 서로 다른 두 실근을 갖도록 하는 정수 <span class=\"chem\">k</span>의 값의 개수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "two distinct real roots" means <span class="chem">Delta &gt; 0</span>, which gives an interval for <span class="chem">k</span>. Then count the integers in it. There is a hidden condition: the equation must really be a quadratic.
        "해석: \"서로 다른 두 실근\"은 <span class=\"chem\">Delta &gt; 0</span>을 뜻하고, 이로부터 <span class=\"chem\">k</span>의 구간이 나와요. 그다음 그 안의 정수를 세요. 숨은 조건이 있어요: 방정식이 정말로 이차방정식이어야 해요.",
        // EN: <span class="chem">Delta = 16 - 4k(k - 3)</span>. Set <span class="chem">Delta &gt; 0</span> and simplify to a quadratic inequality in <span class="chem">k</span>.
        "<span class=\"chem\">Delta = 16 - 4k(k - 3)</span>. <span class=\"chem\">Delta &gt; 0</span>으로 놓고 <span class=\"chem\">k</span>에 대한 이차부등식으로 정리하세요.",
        // EN: You should get <span class="chem">-1 &lt; k &lt; 4</span>. Now check <span class="chem">k = 0</span> separately: what kind of equation is it then?
        "<span class=\"chem\">-1 &lt; k &lt; 4</span>가 나와야 해요. 이제 <span class=\"chem\">k = 0</span>을 따로 확인하세요: 그때 방정식은 어떤 종류인가요?",
      ],
      // EN: <p><strong>Decode:</strong> two distinct real roots needs a genuine quadratic (<span class="chem">k != 0</span>) with <span class="chem">Delta &gt; 0</span>; then count integers.</p><p><span class="chem">Delta = 16 - 4k(k - 3) &gt; 0 => 4 - k^2 + 3k &gt; 0 => k^2 - 3k - 4 &lt; 0 => (k - 4)(k + 1) &lt; 0 => -1 &lt; k &lt; 4</span>. The integers in this interval are <span class="chem">0, 1, 2, 3</span>. When <span class="chem">k = 0</span> the equation is <span class="chem">4x - 3 = 0</span>, which has only one root, so <span class="chem">k = 0</span> is rejected. That leaves <span class="chem">k = 1, 2, 3</span>: <strong>3</strong> values.</p>
      solution: "<p><strong>해석:</strong> 서로 다른 두 실근을 가지려면 진짜 이차방정식(<span class=\"chem\">k != 0</span>)이면서 <span class=\"chem\">Delta &gt; 0</span>이어야 해요. 그다음 정수를 세요.</p><p><span class=\"chem\">Delta = 16 - 4k(k - 3) &gt; 0 => 4 - k^2 + 3k &gt; 0 => k^2 - 3k - 4 &lt; 0 => (k - 4)(k + 1) &lt; 0 => -1 &lt; k &lt; 4</span>. 이 구간에 있는 정수는 <span class=\"chem\">0, 1, 2, 3</span>이에요. <span class=\"chem\">k = 0</span>일 때 방정식은 <span class=\"chem\">4x - 3 = 0</span>이 되어 근이 하나뿐이므로 <span class=\"chem\">k = 0</span>은 제외해요. 남는 것은 <span class=\"chem\">k = 1, 2, 3</span>: <strong>3</strong>개예요.</p>",
    },

    // ── t2-2-q032 · short · challenge · SL · SL 2.8 · 7 marks
    "t2-2-q032": {
      // EN: <p>A small café has fixed costs of <span class="chem">$300</span> per day (rent, wages and power). Each cup of coffee it sells costs an extra <span class="chem">$2</span> in ingredients. The average cost per cup on a day when <span class="chem">n</span> cups are sold is <span class="chem">C(n)</span> dollars, where <span class="chem">n</span> is a positive integer.<br>(a) Show that <span class="chem">C(n) = (2n + 300)/n</span>, and write this in the form <span class="chem">C(n) = a + b/n</span>. <strong>[2 marks]</strong><br>(b) Find the least number of cups the café must sell in a day for the average cost per cup to be at most <span class="chem">$2.40</span>. <strong>[3 marks]</strong><br>(c) Write down the equation of the horizontal asymptote of the graph of <span class="chem">C</span>, and explain what it means for the café. <strong>[2 marks]</strong></p>
      stem: "<p>어느 작은 카페의 고정비는 하루 <span class=\"chem\">$300</span>(임대료, 임금, 전기료)이다. 커피 한 잔을 팔 때마다 재료비가 <span class=\"chem\">$2</span>씩 추가로 든다. 하루에 <span class=\"chem\">n</span>잔을 판 날의 한 잔당 평균 비용을 <span class=\"chem\">C(n)</span>달러라 하자. 단, <span class=\"chem\">n</span>은 양의 정수이다.<br>(a) <span class=\"chem\">C(n) = (2n + 300)/n</span>임을 보이고 (Show that), 이를 <span class=\"chem\">C(n) = a + b/n</span>의 꼴로 나타내시오. <strong>[2 marks]</strong><br>(b) 한 잔당 평균 비용이 <span class=\"chem\">$2.40</span> 이하가 되려면 카페가 하루에 팔아야 하는 최소 잔 수를 구하시오 (Find). <strong>[3 marks]</strong><br>(c) <span class=\"chem\">C</span>의 그래프의 수평점근선의 방정식을 쓰고 (Write down), 그것이 카페에 어떤 의미인지 설명하시오 (Explain). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "average cost per cup" means total cost divided by the number of cups. This builds a rational function <span class="chem">(ax + b)/(cx + d)</span> with <span class="chem">c = 1</span>, <span class="chem">d = 0</span>.
        "해석: \"한 잔당 평균 비용\"은 총비용을 잔 수로 나눈 것이에요. 이로부터 <span class=\"chem\">c = 1</span>, <span class=\"chem\">d = 0</span>인 유리함수 <span class=\"chem\">(ax + b)/(cx + d)</span>가 만들어져요.",
        // EN: The total cost on a day with <span class="chem">n</span> cups is the fixed cost plus <span class="chem">$2</span> for each cup.
        "<span class=\"chem\">n</span>잔을 판 날의 총비용은 고정비에 한 잔마다 <span class=\"chem\">$2</span>를 더한 것이에요.",
        // EN: For (b), "at most" means <span class="chem">&lt;=</span>. Since <span class="chem">n &gt; 0</span>, you may multiply both sides by <span class="chem">n</span> without reversing the inequality.
        "(b)에서 \"이하\"는 <span class=\"chem\">&lt;=</span>를 뜻해요. <span class=\"chem\">n &gt; 0</span>이므로 부등호 방향을 바꾸지 않고 양변에 <span class=\"chem\">n</span>을 곱해도 돼요.",
      ],
      // EN: <p><strong>Decode:</strong> average cost = total cost ÷ number of cups, which gives a reciprocal-type model; "at most" gives an inequality; the long-run behaviour is the horizontal asymptote.</p><p>(a) Total cost <span class="chem">= 300 + 2n</span>, so <span class="chem">C(n) = (2n + 300)/n = 2 + 300/n</span>.<br>(b) <span class="chem">2 + 300/n &lt;= 2.4 => 300/n &lt;= 0.4 => n &gt;= 300/0.4 = 750</span>. The least number of cups is <span class="chem">750</span>.<br>(c) As <span class="chem">n -&gt; infty</span>, <span class="chem">300/n -&gt; 0</span>, so the asymptote is <span class="chem">C = 2</span>. The average cost per cup gets closer and closer to the <span class="chem">$2</span> ingredient cost but never reaches it, because some of the fixed cost is always included.</p>
      solution: "<p><strong>해석:</strong> 평균 비용 = 총비용 ÷ 잔 수이고, 이는 분수함수형 모델이 돼요. \"이하\"는 부등식을 주고, 장기적인 행동은 수평점근선이에요.</p><p>(a) 총비용 <span class=\"chem\">= 300 + 2n</span>이므로 <span class=\"chem\">C(n) = (2n + 300)/n = 2 + 300/n</span>예요.<br>(b) <span class=\"chem\">2 + 300/n &lt;= 2.4 => 300/n &lt;= 0.4 => n &gt;= 300/0.4 = 750</span>. 최소 잔 수는 <span class=\"chem\">750</span>이에요.<br>(c) <span class=\"chem\">n -&gt; infty</span>일 때 <span class=\"chem\">300/n -&gt; 0</span>이므로 점근선은 <span class=\"chem\">C = 2</span>예요. 고정비의 일부가 항상 포함되기 때문에, 한 잔당 평균 비용은 재료비 <span class=\"chem\">$2</span>에 점점 가까워지지만 결코 도달하지 않아요.</p>",
      // EN: <p>(a) Total cost <span class="chem">300 + 2n</span> divided by <span class="chem">n</span> cups: <span class="chem">C(n) = (2n + 300)/n = 2 + 300/n</span>; (b) <span class="chem">750</span> cups; (c) <span class="chem">C = 2</span>: however many cups are sold, the average cost per cup stays above <span class="chem">$2</span> and gets closer to it, because the fixed cost is shared over more cups.</p>
      answer: "<p>(a) 총비용 <span class=\"chem\">300 + 2n</span>을 <span class=\"chem\">n</span>잔으로 나눔: <span class=\"chem\">C(n) = (2n + 300)/n = 2 + 300/n</span>; (b) <span class=\"chem\">750</span>잔; (c) <span class=\"chem\">C = 2</span>: 몇 잔을 팔든 한 잔당 평균 비용은 <span class=\"chem\">$2</span>보다 크게 유지되며, 고정비가 더 많은 잔에 나뉘므로 그 값에 가까워진다.</p>",
      markscheme: [
        // EN: M1: Total daily cost = 300 + 2n, and average cost = total cost ÷ n. AG: C(n) = (2n + 300)/n; the given line itself earns no mark.
        "M1: 하루 총비용 = 300 + 2n, 평균 비용 = 총비용 ÷ n. AG: C(n) = (2n + 300)/n; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: A1: C(n) = 2 + 300/n.
        "A1: C(n) = 2 + 300/n.",
        // EN: M1: Sets up 2 + 300/n ≤ 2.40.
        "M1: 2 + 300/n ≤ 2.40을 세움.",
        // EN: A1: 300/n ≤ 0.4 ⇒ n ≥ 750 (multiplying by n is safe because n > 0).
        "A1: 300/n ≤ 0.4 ⇒ n ≥ 750 (n > 0이므로 n을 곱해도 안전함).",
        // EN: A1: Least number of cups is 750.
        "A1: 최소 잔 수는 750.",
        // EN: A1: Horizontal asymptote C = 2.
        "A1: 수평점근선 C = 2.",
        // EN: R1: Interpretation: as n grows, the fixed $300 is shared over more cups, so the average cost approaches (but never reaches) the $2 ingredient cost.
        "R1: 맥락 해석: n이 커지면 고정비 $300이 더 많은 잔에 나뉘므로 평균 비용은 재료비 $2에 가까워짐 (그러나 결코 도달하지 않음).",
      ],
    },

    // ── t2-2-q033 · numeric · challenge · SL · SL 2.9, 2.5 · 4 marks
    "t2-2-q033": {
      // EN: <p>The graph of <span class="chem">y = a^x</span>, where <span class="chem">a &gt; 0</span>, passes through the point <span class="chem">(3/2, 8)</span>. The point <span class="chem">(k, 2)</span> lies on the graph of the inverse function. Find the value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">a &gt; 0</span>일 때 <span class=\"chem\">y = a^x</span>의 그래프는 점 <span class=\"chem\">(3/2, 8)</span>을 지난다. 점 <span class=\"chem\">(k, 2)</span>는 역함수의 그래프 위에 있다. <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: two separate facts. First use the given point to find the base <span class="chem">a</span>. Then remember that a point <span class="chem">(p, q)</span> on an inverse graph corresponds to <span class="chem">(q, p)</span> on the original graph.
        "해석: 두 가지 별개의 사실이 있어요. 먼저 주어진 점을 이용해 밑 <span class=\"chem\">a</span>를 구하세요. 그다음 역함수 그래프 위의 점 <span class=\"chem\">(p, q)</span>는 원래 그래프 위의 <span class=\"chem\">(q, p)</span>에 대응한다는 것을 기억하세요.",
        // EN: Solve <span class="chem">a^{3/2} = 8</span> by raising both sides to the power <span class="chem">2/3</span>.
        "양변을 <span class=\"chem\">2/3</span>제곱하여 <span class=\"chem\">a^{3/2} = 8</span>을 푸세요.",
        // EN: If <span class="chem">(k, 2)</span> is on the inverse, then <span class="chem">(2, k)</span> is on <span class="chem">y = a^x</span>.
        "<span class=\"chem\">(k, 2)</span>가 역함수의 그래프 위에 있으면 <span class=\"chem\">(2, k)</span>는 <span class=\"chem\">y = a^x</span> 위에 있어요.",
      ],
      // EN: <p><strong>Decode:</strong> find the base from the point, then swap coordinates to move between the graph and its inverse.</p><p><span class="chem">a^{3/2} = 8 => a = 8^{2/3} = (8^{1/3})^2 = 4</span>. The inverse of <span class="chem">y = 4^x</span> is <span class="chem">y = log_4 x</span>. Since <span class="chem">(k, 2)</span> lies on it, <span class="chem">log_4 k = 2 => k = 4^2 = 16</span>. (Equivalently, <span class="chem">(2, k)</span> lies on <span class="chem">y = 4^x</span>, so <span class="chem">k = 16</span>.)</p>
      solution: "<p><strong>해석:</strong> 점에서 밑을 구한 다음, 좌표를 바꾸어 그래프와 그 역함수의 그래프 사이를 오가요.</p><p><span class=\"chem\">a^{3/2} = 8 => a = 8^{2/3} = (8^{1/3})^2 = 4</span>. <span class=\"chem\">y = 4^x</span>의 역함수는 <span class=\"chem\">y = log_4 x</span>예요. <span class=\"chem\">(k, 2)</span>가 그 위에 있으므로 <span class=\"chem\">log_4 k = 2 => k = 4^2 = 16</span>이에요. (마찬가지로 <span class=\"chem\">(2, k)</span>가 <span class=\"chem\">y = 4^x</span> 위에 있으므로 <span class=\"chem\">k = 16</span>이에요.)</p>",
    },

    // ── t2-2-q034 · numeric · challenge · SL · SL 1.7, 2.10 · 5 marks
    "t2-2-q034": {
      // EN: <p>Solve the equation <span class="chem">log_3 x = log_9(x + 6)</span>.</p>
      stem: "<p>방정식 <span class=\"chem\">log_3 x = log_9(x + 6)</span>를 푸시오 (Solve).</p>",
      hints: [
        // EN: Decode: the logarithms have different bases (<span class="chem">3</span> and <span class="chem">9 = 3^2</span>). Change them to the same base, solve the quadratic that appears, then check each root against the domain.
        "해석: 로그의 밑이 서로 달라요 (<span class=\"chem\">3</span>과 <span class=\"chem\">9 = 3^2</span>). 같은 밑으로 바꾸고, 나타나는 이차방정식을 푼 다음, 각 근을 정의역과 비교해 확인하세요.",
        // EN: Change of base: <span class="chem">log_9(x + 6) = log_3(x + 6)/log_3 9 = (1/2) log_3(x + 6)</span>.
        "밑의 변환: <span class=\"chem\">log_9(x + 6) = log_3(x + 6)/log_3 9 = (1/2) log_3(x + 6)</span>.",
        // EN: You should reach <span class="chem">x^2 = x + 6</span>. Which root makes <span class="chem">log_3 x</span> undefined?
        "<span class=\"chem\">x^2 = x + 6</span>에 도달해야 해요. 어느 근이 <span class=\"chem\">log_3 x</span>를 정의되지 않게 하나요?",
      ],
      // EN: <p><strong>Decode:</strong> a "same base" problem in disguise, followed by a domain check (<span class="chem">x &gt; 0</span> and <span class="chem">x + 6 &gt; 0</span>).</p><p><span class="chem">log_9(x + 6) = (1/2) log_3(x + 6)</span>, so <span class="chem">2 log_3 x = log_3(x + 6) => log_3 x^2 = log_3(x + 6) => x^2 = x + 6 => (x - 3)(x + 2) = 0</span>. The root <span class="chem">x = -2</span> is rejected because <span class="chem">log_3(-2)</span> is undefined. So <span class="chem">x = 3</span>. Check: <span class="chem">log_3 3 = 1</span> and <span class="chem">log_9 9 = 1</span>.</p>
      solution: "<p><strong>해석:</strong> 겉모습을 바꾼 \"같은 밑\" 문제이고, 그다음 정의역 확인(<span class=\"chem\">x &gt; 0</span>, <span class=\"chem\">x + 6 &gt; 0</span>)이 필요해요.</p><p><span class=\"chem\">log_9(x + 6) = (1/2) log_3(x + 6)</span>이므로 <span class=\"chem\">2 log_3 x = log_3(x + 6) => log_3 x^2 = log_3(x + 6) => x^2 = x + 6 => (x - 3)(x + 2) = 0</span>이에요. <span class=\"chem\">log_3(-2)</span>는 정의되지 않으므로 근 <span class=\"chem\">x = -2</span>는 제외해요. 따라서 <span class=\"chem\">x = 3</span>이에요. 확인: <span class=\"chem\">log_3 3 = 1</span>, <span class=\"chem\">log_9 9 = 1</span>.</p>",
    },

    // ── t2-2-q035 · short · challenge · SL · SL 2.8 · 7 marks
    "t2-2-q035": {
      // EN: <p>A tank holds <span class="chem">50</span> litres of water in which <span class="chem">2</span> kg of salt is dissolved. Starting at <span class="chem">t = 0</span>, salt water containing <span class="chem">0.3</span> kg of salt per litre is pumped into the tank at <span class="chem">4</span> litres per minute. Nothing leaves the tank, and the mixture stays evenly mixed. The tank can hold at most <span class="chem">200</span> litres.<br>(a) Show that the concentration of salt, in kg per litre, after <span class="chem">t</span> minutes is <span class="chem">C(t) = (2 + 1.2t)/(50 + 4t)</span>. <strong>[2 marks]</strong><br>(b) Write down the equation of the horizontal asymptote of the graph of <span class="chem">C</span>, and explain its meaning in context. <strong>[2 marks]</strong><br>(c) A scientist claims that the concentration will reach <span class="chem">0.25</span> kg per litre before the tank overflows. Determine whether the claim is correct. <strong>[3 marks]</strong></p>
      stem: "<p>어떤 탱크에 물 <span class=\"chem\">50</span>리터가 들어 있고, 그 안에 소금 <span class=\"chem\">2</span> kg이 녹아 있다. <span class=\"chem\">t = 0</span>부터 리터당 소금 <span class=\"chem\">0.3</span> kg을 포함한 소금물이 분당 <span class=\"chem\">4</span>리터씩 탱크에 주입된다. 탱크에서 빠져나가는 것은 없으며 혼합물은 항상 고르게 섞여 있다. 탱크는 최대 <span class=\"chem\">200</span>리터를 담을 수 있다.<br>(a) <span class=\"chem\">t</span>분 후 소금의 농도(리터당 kg)가 <span class=\"chem\">C(t) = (2 + 1.2t)/(50 + 4t)</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">C</span>의 그래프의 수평점근선의 방정식을 쓰고 (Write down), 그 의미를 상황에 맞게 설명하시오 (Explain). <strong>[2 marks]</strong><br>(c) 한 과학자는 탱크가 넘치기 전에 농도가 리터당 <span class=\"chem\">0.25</span> kg에 도달할 것이라고 주장한다. 이 주장이 옳은지 판단하시오 (Determine). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: concentration = mass of salt ÷ volume of liquid, and both grow linearly with <span class="chem">t</span>. That is a rational function <span class="chem">(at + b)/(ct + d)</span>. The capacity of <span class="chem">200</span> litres is a hidden domain restriction.
        "해석: 농도 = 소금의 질량 ÷ 액체의 부피이고, 둘 다 <span class=\"chem\">t</span>에 대해 일차식으로 증가해요. 이것은 유리함수 <span class=\"chem\">(at + b)/(ct + d)</span>예요. 용량 <span class=\"chem\">200</span>리터는 숨은 정의역 제한이에요.",
        // EN: Each minute <span class="chem">4</span> litres arrive, carrying <span class="chem">4 × 0.3 = 1.2</span> kg of salt.
        "매분 <span class=\"chem\">4</span>리터가 들어오고, 소금 <span class=\"chem\">4 × 0.3 = 1.2</span> kg을 함께 가져와요.",
        // EN: For (c), compare two times: when the tank is full, and when <span class="chem">C(t) = 0.25</span>.
        "(c)에서는 두 시각을 비교하세요: 탱크가 가득 차는 때와 <span class=\"chem\">C(t) = 0.25</span>인 때.",
      ],
      // EN: <p><strong>Decode:</strong> build a linear-over-linear model, read its asymptote, then test the claim against the domain <span class="chem">0 &lt;= t &lt;= 37.5</span> set by the tank capacity.</p><p>(a) After <span class="chem">t</span> minutes the salt is <span class="chem">2 + 0.3 × 4t = 2 + 1.2t</span> kg and the volume is <span class="chem">50 + 4t</span> L, so <span class="chem">C(t) = (2 + 1.2t)/(50 + 4t)</span>.<br>(b) Horizontal asymptote <span class="chem">C = 1.2/4 = 0.3</span>: the mixture becomes more and more like the incoming salt water.<br>(c) The tank is full when <span class="chem">50 + 4t = 200 => t = 37.5</span> min. Solving <span class="chem">C(t) = 0.25</span>: <span class="chem">2 + 1.2t = 0.25(50 + 4t) = 12.5 + t => 0.2t = 10.5 => t = 52.5</span> min. This is after the tank overflows (at <span class="chem">t = 37.5</span>, <span class="chem">C = 47/200 = 0.235</span>), so the claim is <strong>not</strong> correct.</p>
      solution: "<p><strong>해석:</strong> 일차식 ÷ 일차식 모델을 세우고, 점근선을 읽은 다음, 탱크 용량으로 정해지는 정의역 <span class=\"chem\">0 &lt;= t &lt;= 37.5</span>에 비추어 주장을 검증해요.</p><p>(a) <span class=\"chem\">t</span>분 후 소금은 <span class=\"chem\">2 + 0.3 × 4t = 2 + 1.2t</span> kg, 부피는 <span class=\"chem\">50 + 4t</span> L이므로 <span class=\"chem\">C(t) = (2 + 1.2t)/(50 + 4t)</span>예요.<br>(b) 수평점근선 <span class=\"chem\">C = 1.2/4 = 0.3</span>: 혼합물은 들어오는 소금물과 점점 더 비슷해져요.<br>(c) 탱크는 <span class=\"chem\">50 + 4t = 200 => t = 37.5</span>분일 때 가득 차요. <span class=\"chem\">C(t) = 0.25</span>을 풀면 <span class=\"chem\">2 + 1.2t = 0.25(50 + 4t) = 12.5 + t => 0.2t = 10.5 => t = 52.5</span>분이에요. 이는 탱크가 넘친 뒤이므로 (<span class=\"chem\">t = 37.5</span>일 때 <span class=\"chem\">C = 47/200 = 0.235</span>), 주장은 옳지 <strong>않아요</strong>.</p>",
      // EN: <p>(a) Salt <span class="chem">2 + 0.3(4t) = 2 + 1.2t</span> kg in <span class="chem">50 + 4t</span> litres; (b) <span class="chem">C = 0.3</span>: in the long run the concentration approaches that of the incoming salt water; (c) not correct: <span class="chem">C = 0.25</span> needs <span class="chem">t = 52.5</span> min, but the tank is full at <span class="chem">t = 37.5</span> min (when <span class="chem">C = 0.235</span>).</p>
      answer: "<p>(a) 소금 <span class=\"chem\">2 + 0.3(4t) = 2 + 1.2t</span> kg이 <span class=\"chem\">50 + 4t</span>리터 안에 있음; (b) <span class=\"chem\">C = 0.3</span>: 장기적으로 농도는 들어오는 소금물의 농도에 가까워짐; (c) 옳지 않음: <span class=\"chem\">C = 0.25</span>이 되려면 <span class=\"chem\">t = 52.5</span>분이 필요하지만 탱크는 <span class=\"chem\">t = 37.5</span>분에 가득 참 (그때 <span class=\"chem\">C = 0.235</span>).</p>",
      markscheme: [
        // EN: M1: Salt after t minutes = 2 + 0.3 × 4t = 2 + 1.2t kg; volume = 50 + 4t litres.
        "M1: t분 후 소금 = 2 + 0.3 × 4t = 2 + 1.2t kg; 부피 = 50 + 4t리터.",
        // EN: A1: Concentration = salt ÷ volume. AG: C(t) = (2 + 1.2t)/(50 + 4t); the given line itself earns no mark.
        "A1: 농도 = 소금 ÷ 부피. AG: C(t) = (2 + 1.2t)/(50 + 4t); 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: A1: Horizontal asymptote C = 1.2/4 = 0.3.
        "A1: 수평점근선 C = 1.2/4 = 0.3.",
        // EN: R1: The concentration approaches (but does not reach) 0.3 kg/L, the concentration of the incoming salt water.
        "R1: 농도는 들어오는 소금물의 농도인 0.3 kg/L에 가까워짐 (그러나 도달하지는 않음).",
        // EN: M1: Finds the time to fill: 50 + 4t = 200 ⇒ t = 37.5 minutes.
        "M1: 가득 차는 시간을 구함: 50 + 4t = 200 ⇒ t = 37.5분.",
        // EN: A1: Solves C(t) = 0.25: 2 + 1.2t = 12.5 + t ⇒ t = 52.5 minutes (or finds C(37.5) = 47/200 = 0.235).
        "A1: C(t) = 0.25를 풂: 2 + 1.2t = 12.5 + t ⇒ t = 52.5분 (또는 C(37.5) = 47/200 = 0.235를 구함).",
        // EN: R1: Since 52.5 > 37.5 (or 0.235 < 0.25), the tank overflows first, so the claim is not correct.
        "R1: 52.5 > 37.5 (또는 0.235 < 0.25)이므로 탱크가 먼저 넘침. 따라서 주장은 옳지 않음.",
      ],
    },

    // ── t2-2-q036 · numeric · exam · SL · SL 2.6, 2.7 · 3 marks
    "t2-2-q036": {
      // EN: <p>A ball is thrown upwards from a balcony. Its height above the ground, in metres, <span class="chem">t</span> seconds after it is thrown is modelled by <span class="chem">h(t) = -4.9t^2 + 12.5t + 1.6</span>, for <span class="chem">t &gt;= 0</span>. Find the time at which the ball hits the ground, giving your answer in seconds correct to 3 significant figures.</p>
      stem: "<p>발코니에서 공을 위로 던진다. 던진 지 <span class=\"chem\">t</span>초 후 공의 지면으로부터의 높이(미터)는 <span class=\"chem\">t &gt;= 0</span>에서 <span class=\"chem\">h(t) = -4.9t^2 + 12.5t + 1.6</span>로 모델링된다. 공이 지면에 닿는 시각을 구하고 (Find), 초 단위로 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: The ball hits the ground when <span class="chem">h(t) = 0</span>. Use the GDC polynomial solver, or graph <span class="chem">h</span> and find its zero.
        "공은 <span class=\"chem\">h(t) = 0</span>일 때 지면에 닿아요. GDC의 다항식 풀이 기능을 쓰거나 <span class=\"chem\">h</span>의 그래프를 그려 영점을 구하세요.",
        // EN: You get two roots. One is negative; reject it because <span class="chem">t &gt;= 0</span>.
        "근이 두 개 나와요. 하나는 음수이므로 <span class=\"chem\">t &gt;= 0</span>에 의해 제외하세요.",
      ],
      // EN: <p>Solving <span class="chem">-4.9t^2 + 12.5t + 1.6 = 0</span> on the GDC gives <span class="chem">t ≈ -0.122</span> or <span class="chem">t ≈ 2.6732</span>. Since <span class="chem">t &gt;= 0</span>, the ball lands at <span class="chem">t = 2.67</span> s (3 s.f.).</p>
      solution: "<p>GDC로 <span class=\"chem\">-4.9t^2 + 12.5t + 1.6 = 0</span>을 풀면 <span class=\"chem\">t ≈ -0.122</span> 또는 <span class=\"chem\">t ≈ 2.6732</span>이에요. <span class=\"chem\">t &gt;= 0</span>이므로 공은 <span class=\"chem\">t = 2.67</span> s (3 s.f.)에 떨어져요.</p>",
    },

    // ── t2-2-q037 · numeric · exam · SL · SL 2.7 · 3 marks
    "t2-2-q037": {
      // EN: <p>A rectangular vegetable garden is <span class="chem">3.5</span> m longer than it is wide. Its area is <span class="chem">42.6</span> m². Find the width of the garden, giving your answer in metres correct to 3 significant figures.</p>
      stem: "<p>직사각형 텃밭의 길이는 폭보다 <span class=\"chem\">3.5</span> m 더 길다. 텃밭의 넓이는 <span class=\"chem\">42.6</span> m²이다. 텃밭의 폭을 구하고 (Find), 미터 단위로 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: let the width be <span class="chem">w</span>; then the length is <span class="chem">w + 3.5</span>. The area condition gives a quadratic equation in <span class="chem">w</span>.
        "해석: 폭을 <span class=\"chem\">w</span>라 하면 길이는 <span class=\"chem\">w + 3.5</span>예요. 넓이 조건에서 <span class=\"chem\">w</span>에 대한 이차방정식이 나와요.",
        // EN: Solve <span class="chem">w^2 + 3.5w - 42.6 = 0</span> with the GDC and keep only the root that makes sense for a length.
        "GDC로 <span class=\"chem\">w^2 + 3.5w - 42.6 = 0</span>을 풀고, 길이로서 의미가 있는 근만 남기세요.",
      ],
      // EN: <p><span class="chem">w(w + 3.5) = 42.6 => w^2 + 3.5w - 42.6 = 0</span>. The GDC gives <span class="chem">w ≈ 5.0074</span> or <span class="chem">w ≈ -8.51</span>. A width must be positive, so <span class="chem">w = 5.01</span> m (3 s.f.). Note that <span class="chem">5.00</span> would be wrong: check <span class="chem">5 × 8.5 = 42.5 != 42.6</span>.</p>
      solution: "<p><span class=\"chem\">w(w + 3.5) = 42.6 => w^2 + 3.5w - 42.6 = 0</span>. GDC로 구하면 <span class=\"chem\">w ≈ 5.0074</span> 또는 <span class=\"chem\">w ≈ -8.51</span>이에요. 폭은 양수여야 하므로 <span class=\"chem\">w = 5.01</span> m (3 s.f.)예요. <span class=\"chem\">5.00</span>은 틀린 답이라는 점에 주의하세요: <span class=\"chem\">5 × 8.5 = 42.5 != 42.6</span>로 확인할 수 있어요.</p>",
    },

    // ── t2-2-q038 · short · exam · SL · SL 2.6, 2.10 · 8 marks
    "t2-2-q038": {
      // EN: <p>The underside of a footbridge arch is modelled by <span class="chem">h(x) = ax^2 + bx + c</span>, where <span class="chem">h</span> is the height in metres above the water and <span class="chem">x</span> is the horizontal distance in metres from a marker post at the water&#8217;s edge. Three measurements are taken.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><span class="chem">x</span> (m)</th><td>0</td><td>4</td><td>10</td></tr></thead><tbody><tr><th scope="row"><span class="chem">h</span> (m)</th><td>1.2</td><td>6.8</td><td>6.0</td></tr></tbody></table></div><p>(a) Find the values of <span class="chem">a</span>, <span class="chem">b</span> and <span class="chem">c</span>. <strong>[3 marks]</strong><br>(b) Find the maximum height of the arch above the water. <strong>[2 marks]</strong><br>(c) A boat with a mast needs at least <span class="chem">5</span> m of headroom. Find the width of the part of the river, measured horizontally, in which the arch is at least <span class="chem">5</span> m above the water. <strong>[3 marks]</strong></p>
      stem: "<p>보행자 다리 아치의 아랫면이 <span class=\"chem\">h(x) = ax^2 + bx + c</span>로 모델링된다. 여기서 <span class=\"chem\">h</span>는 수면으로부터의 높이(미터)이고, <span class=\"chem\">x</span>는 물가의 표지 기둥으로부터의 수평 거리(미터)이다. 세 번의 측정값을 얻었다.</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><span class=\"chem\">x</span> (m)</th><td>0</td><td>4</td><td>10</td></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">h</span> (m)</th><td>1.2</td><td>6.8</td><td>6.0</td></tr></tbody></table></div><p>(a) <span class=\"chem\">a</span>, <span class=\"chem\">b</span>, <span class=\"chem\">c</span>의 값을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 수면으로부터 아치의 최대 높이를 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 돛대가 있는 배는 적어도 <span class=\"chem\">5</span> m의 머리 위 공간이 필요하다. 아치가 수면에서 적어도 <span class=\"chem\">5</span> m 높이에 있는 강의 부분의 폭을 수평으로 재어 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: each data point gives one equation in <span class="chem">a, b, c</span>. The measurement at <span class="chem">x = 0</span> gives <span class="chem">c</span> straight away, so the other two points leave two linear equations in <span class="chem">a</span> and <span class="chem">b</span>.
        "해석: 각 자료점은 <span class=\"chem\">a, b, c</span>에 대한 방정식을 하나씩 줘요. <span class=\"chem\">x = 0</span>에서의 측정값으로 <span class=\"chem\">c</span>를 바로 알 수 있으므로, 나머지 두 점에서 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>에 대한 일차방정식 두 개가 남아요.",
        // EN: Keep the full GDC values of <span class="chem">a, b, c</span> stored for later parts; rounding them early changes the third figure.
        "나중 문항을 위해 <span class=\"chem\">a, b, c</span>의 GDC 값을 모두 저장해 두세요. 일찍 반올림하면 셋째 자리가 바뀌어요.",
        // EN: For (c), graph <span class="chem">y = h(x)</span> and <span class="chem">y = 5</span> and find both intersections. The width is the distance between them.
        "(c)에서는 <span class=\"chem\">y = h(x)</span>과 <span class=\"chem\">y = 5</span>의 그래프를 그려 두 교점을 모두 구하세요. 폭은 두 교점 사이의 거리예요.",
      ],
      // EN: <p>(a) <span class="chem">h(0) = c = 1.2</span>. The other two points give <span class="chem">16a + 4b + 1.2 = 6.8</span> and <span class="chem">100a + 10b + 1.2 = 6.0</span>, that is <span class="chem">4a + b = 1.4</span> and <span class="chem">10a + b = 0.48</span>. Subtracting: <span class="chem">6a = -0.92</span>, so <span class="chem">a = -0.153333... = -23/150</span> and <span class="chem">b = 1.4 - 4a = 2.013333... = 151/75</span>. So <span class="chem">a = -0.153</span>, <span class="chem">b = 2.01</span>, <span class="chem">c = 1.2</span>.<br>(b) The vertex is at <span class="chem">x = -b/(2a) ≈ 6.565</span>, and <span class="chem">h(6.565) ≈ 7.8090</span>, so the maximum height is <span class="chem">7.81</span> m.<br>(c) <span class="chem">h(x) = 5</span> at <span class="chem">x ≈ 2.2851</span> and <span class="chem">x ≈ 10.8453</span>. The arch is at least <span class="chem">5</span> m high between these, a width of <span class="chem">10.8453 - 2.2851 ≈ 8.56</span> m.</p>
      solution: "<p>(a) <span class=\"chem\">h(0) = c = 1.2</span>. 나머지 두 점에서 <span class=\"chem\">16a + 4b + 1.2 = 6.8</span>과 <span class=\"chem\">100a + 10b + 1.2 = 6.0</span>, 즉 <span class=\"chem\">4a + b = 1.4</span>과 <span class=\"chem\">10a + b = 0.48</span>이 나와요. 두 식을 빼면 <span class=\"chem\">6a = -0.92</span>이므로 <span class=\"chem\">a = -0.153333... = -23/150</span>, <span class=\"chem\">b = 1.4 - 4a = 2.013333... = 151/75</span>이에요. 따라서 <span class=\"chem\">a = -0.153</span>, <span class=\"chem\">b = 2.01</span>, <span class=\"chem\">c = 1.2</span>예요.<br>(b) 꼭짓점은 <span class=\"chem\">x = -b/(2a) ≈ 6.565</span>에 있고 <span class=\"chem\">h(6.565) ≈ 7.8090</span>이므로 최대 높이는 <span class=\"chem\">7.81</span> m예요.<br>(c) <span class=\"chem\">h(x) = 5</span>인 것은 <span class=\"chem\">x ≈ 2.2851</span>와 <span class=\"chem\">x ≈ 10.8453</span>일 때예요. 아치는 그 사이에서 적어도 <span class=\"chem\">5</span> m 높이에 있고, 폭은 <span class=\"chem\">10.8453 - 2.2851 ≈ 8.56</span> m예요.</p>",
      // EN: <p>(a) <span class="chem">a = -0.153</span>, <span class="chem">b = 2.01</span>, <span class="chem">c = 1.2</span> (exactly <span class="chem">-23/150</span>, <span class="chem">151/75</span>, <span class="chem">6/5</span>); (b) <span class="chem">7.81</span> m (at <span class="chem">x ≈ 6.57</span>); (c) <span class="chem">8.56</span> m (from <span class="chem">x ≈ 2.29</span> to <span class="chem">x ≈ 10.8</span>).</p>
      answer: "<p>(a) <span class=\"chem\">a = -0.153</span>, <span class=\"chem\">b = 2.01</span>, <span class=\"chem\">c = 1.2</span> (정확히는 <span class=\"chem\">-23/150</span>, <span class=\"chem\">151/75</span>, <span class=\"chem\">6/5</span>); (b) <span class=\"chem\">7.81</span> m (<span class=\"chem\">x ≈ 6.57</span>에서); (c) <span class=\"chem\">8.56</span> m (<span class=\"chem\">x ≈ 2.29</span>부터 <span class=\"chem\">x ≈ 10.8</span>까지).</p>",
      markscheme: [
        // EN: M1: Uses h(0) = 1.2 to get c = 1.2, and substitutes the other two points: 16a + 4b + 1.2 = 6.8 and 100a + 10b + 1.2 = 6.0.
        "M1: h(0) = 1.2를 이용해 c = 1.2를 구하고 나머지 두 점을 대입함: 16a + 4b + 1.2 = 6.8과 100a + 10b + 1.2 = 6.0.",
        // EN: A1: a = −0.153 (−23/150 = −0.15333…).
        "A1: a = −0.153 (−23/150 = −0.15333…).",
        // EN: A1: b = 2.01 (151/75 = 2.01333…) and c = 1.2.
        "A1: b = 2.01 (151/75 = 2.01333…)과 c = 1.2.",
        // EN: M1: Uses the vertex x = −b/(2a) ≈ 6.57, or the GDC maximum.
        "M1: 꼭짓점 x = −b/(2a) ≈ 6.57 또는 GDC의 최댓값 기능을 이용함.",
        // EN: A1: Maximum height 7.81 m.
        "A1: 최대 높이 7.81 m.",
        // EN: M1: Solves h(x) = 5 (GDC intersection of y = h(x) and y = 5).
        "M1: h(x) = 5를 풂 (y = h(x)와 y = 5의 GDC 교점).",
        // EN: A1: x ≈ 2.29 and x ≈ 10.8.
        "A1: x ≈ 2.29와 x ≈ 10.8.",
        // EN: A1: Width 10.845 − 2.285 = 8.56 m.
        "A1: 폭 10.845 − 2.285 = 8.56 m.",
      ],
    },

    // ── t2-2-q039 · short · exam · SL · SL 2.7 · 3 marks
    "t2-2-q039": {
      // EN: <p>Solve the inequality <span class="chem">2.4x^2 - 3.1x - 5.6 &gt; 0</span>, giving the boundary values correct to 3 significant figures.</p>
      stem: "<p>부등식 <span class=\"chem\">2.4x^2 - 3.1x - 5.6 &gt; 0</span>을 풀고 (Solve), 경계값을 유효숫자 3자리까지 나타내시오.</p>",
      hints: [
        // EN: Find where the quadratic equals zero first, using the GDC.
        "먼저 GDC를 이용해 이차식이 0이 되는 곳을 구하세요.",
        // EN: The parabola opens upwards (<span class="chem">a = 2.4 &gt; 0</span>), so it is positive outside the two roots.
        "포물선이 아래로 볼록하므로 (<span class=\"chem\">a = 2.4 &gt; 0</span>) 두 근의 바깥에서 양수예요.",
      ],
      // EN: <p>The GDC gives the roots <span class="chem">x ≈ -1.0126</span> and <span class="chem">x ≈ 2.3043</span>. Since the leading coefficient is positive, the expression is positive outside the roots: <span class="chem">x &lt; -1.01</span> or <span class="chem">x &gt; 2.30</span>.</p>
      solution: "<p>GDC로 구한 근은 <span class=\"chem\">x ≈ -1.0126</span>와 <span class=\"chem\">x ≈ 2.3043</span>이에요. 최고차항의 계수가 양수이므로 식은 두 근의 바깥에서 양수예요: <span class=\"chem\">x &lt; -1.01</span> 또는 <span class=\"chem\">x &gt; 2.30</span>.</p>",
      // EN: <p><span class="chem">x &lt; -1.01</span> or <span class="chem">x &gt; 2.30</span></p>
      answer: "<p><span class=\"chem\">x &lt; -1.01</span> 또는 <span class=\"chem\">x &gt; 2.30</span></p>",
      markscheme: [
        // EN: M1: Finds the roots of 2.4x² − 3.1x − 5.6 = 0 (GDC solver or quadratic formula).
        "M1: 2.4x² − 3.1x − 5.6 = 0의 근을 구함 (GDC 풀이 기능 또는 근의 공식).",
        // EN: A1: Roots x ≈ −1.0126 and x ≈ 2.3043.
        "A1: 근 x ≈ −1.0126과 x ≈ 2.3043.",
        // EN: A1: x < −1.01 or x > 2.30 (outside the roots, strict inequalities).
        "A1: x < −1.01 또는 x > 2.30 (근의 바깥, 등호 없는 부등식).",
      ],
    },

    // ── t2-2-q040 · numeric · exam · SL · SL 2.6 · 5 marks
    "t2-2-q040": {
      // EN: <p>A cinema finds that when the ticket price is <span class="chem">$8</span>, it sells <span class="chem">540</span> tickets a week, and when the price is <span class="chem">$14</span>, it sells <span class="chem">330</span> tickets a week. It models the number of tickets sold, <span class="chem">N</span>, as a linear function of the price <span class="chem">p</span> dollars. The weekly revenue is <span class="chem">R = pN</span>. Find the maximum weekly revenue predicted by the model, in dollars correct to 2 decimal places.</p>
      stem: "<p>어느 영화관은 티켓 가격이 <span class=\"chem\">$8</span>일 때 일주일에 <span class=\"chem\">540</span>장을 팔고, 가격이 <span class=\"chem\">$14</span>일 때 일주일에 <span class=\"chem\">330</span>장을 판다는 것을 알았다. 팔린 티켓 수 <span class=\"chem\">N</span>을 가격 <span class=\"chem\">p</span>달러의 일차함수로 모델링한다. 일주일 수입은 <span class=\"chem\">R = pN</span>이다. 이 모델이 예측하는 일주일 최대 수입을 구하고 (Find), 달러 단위로 소수점 아래 2자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: two (price, tickets) data points give a straight line <span class="chem">N = mp + c</span>. Revenue is price times tickets, so <span class="chem">R</span> is a quadratic in <span class="chem">p</span>, and you need its maximum.
        "해석: (가격, 티켓 수) 자료점 두 개로 직선 <span class=\"chem\">N = mp + c</span>를 얻어요. 수입은 가격 × 티켓 수이므로 <span class=\"chem\">R</span>은 <span class=\"chem\">p</span>에 대한 이차식이고, 그 최댓값이 필요해요.",
        // EN: The gradient is <span class="chem">(330 - 540)/(14 - 8) = -35</span>. Find <span class="chem">c</span>, then write <span class="chem">R(p) = p(c - 35p)</span>.
        "기울기는 <span class=\"chem\">(330 - 540)/(14 - 8) = -35</span>예요. <span class=\"chem\">c</span>를 구한 다음 <span class=\"chem\">R(p) = p(c - 35p)</span>로 쓰세요.",
        // EN: Find the vertex of <span class="chem">R</span> with <span class="chem">p = -b/(2a)</span> or with the GDC maximum. Do not round <span class="chem">p</span> before you work out <span class="chem">R</span>.
        "<span class=\"chem\">p = -b/(2a)</span> 또는 GDC의 최댓값 기능으로 <span class=\"chem\">R</span>의 꼭짓점을 구하세요. <span class=\"chem\">R</span>을 계산하기 전에 <span class=\"chem\">p</span>를 반올림하지 마세요.",
      ],
      // EN: <p><strong>Decode:</strong> linear demand from two points, then maximise a quadratic revenue.</p><p>Gradient <span class="chem">m = (330 - 540)/(14 - 8) = -35</span>, so <span class="chem">N = 540 - 35(p - 8) = 820 - 35p</span>. Then <span class="chem">R(p) = p(820 - 35p) = 820p - 35p^2</span>. The vertex is at <span class="chem">p = 820/70 ≈ 11.714</span>, and <span class="chem">R_{max} = 820^2/140 ≈ 4802.857</span>. The maximum weekly revenue is <span class="chem">$4802.86</span>.</p>
      solution: "<p><strong>해석:</strong> 두 점으로 일차 수요 함수를 만든 다음, 이차식인 수입을 최대화해요.</p><p>기울기 <span class=\"chem\">m = (330 - 540)/(14 - 8) = -35</span>이므로 <span class=\"chem\">N = 540 - 35(p - 8) = 820 - 35p</span>예요. 그러면 <span class=\"chem\">R(p) = p(820 - 35p) = 820p - 35p^2</span>이에요. 꼭짓점은 <span class=\"chem\">p = 820/70 ≈ 11.714</span>에 있고 <span class=\"chem\">R_{max} = 820^2/140 ≈ 4802.857</span>이에요. 일주일 최대 수입은 <span class=\"chem\">$4802.86</span>이에요.</p>",
    },

    // ── t2-2-q041 · short · challenge · SL · SL 2.6 · 6 marks
    "t2-2-q041": {
      // EN: <p>A player throws a ball towards a fence. The path of the ball is modelled by <span class="chem">h(x) = -0.045x^2 + 0.62x + 1.8</span>, where <span class="chem">h</span> is the height in metres and <span class="chem">x</span> is the horizontal distance in metres from the player, for <span class="chem">h &gt;= 0</span>.<br>(a) Find the maximum height reached by the ball. <strong>[2 marks]</strong><br>(b) The fence is <span class="chem">3.8</span> m tall and stands <span class="chem">9</span> m from the player. Determine whether the ball passes over the fence. <strong>[2 marks]</strong><br>(c) The fence is then taken down. Find the horizontal distance from the player to the point where the ball lands. <strong>[2 marks]</strong></p>
      stem: "<p>한 선수가 울타리를 향해 공을 던진다. 공의 경로는 <span class=\"chem\">h &gt;= 0</span>에서 <span class=\"chem\">h(x) = -0.045x^2 + 0.62x + 1.8</span>로 모델링된다. 여기서 <span class=\"chem\">h</span>는 높이(미터)이고, <span class=\"chem\">x</span>는 선수로부터의 수평 거리(미터)이다.<br>(a) 공이 도달하는 최대 높이를 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 울타리의 높이는 <span class=\"chem\">3.8</span> m이고 선수로부터 <span class=\"chem\">9</span> m 떨어진 곳에 서 있다. 공이 울타리를 넘어가는지 판단하시오 (Determine). <strong>[2 marks]</strong><br>(c) 그 후 울타리를 철거했다. 선수로부터 공이 떨어지는 지점까지의 수평 거리를 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "passes over the fence" is about the height of the ball when it is above the fence (at <span class="chem">x = 9</span>), not about its maximum height. A maximum above <span class="chem">3.8</span> m does not prove anything.
        "해석: \"울타리를 넘어가는지\"는 공이 울타리 바로 위(<span class=\"chem\">x = 9</span>)에 있을 때의 높이에 관한 것이지, 최대 높이에 관한 것이 아니에요. 최댓값이 <span class=\"chem\">3.8</span> m보다 높다고 해서 아무것도 증명되지 않아요.",
        // EN: For (a), the vertex is at <span class="chem">x = -b/(2a)</span>; or use the GDC maximum.
        "(a)에서 꼭짓점은 <span class=\"chem\">x = -b/(2a)</span>에 있어요. GDC의 최댓값 기능을 써도 돼요.",
        // EN: For (b), compare <span class="chem">h(9)</span> with <span class="chem">3.8</span>. For (c), solve <span class="chem">h(x) = 0</span> and keep the positive root.
        "(b)에서는 <span class=\"chem\">h(9)</span>와 <span class=\"chem\">3.8</span>을 비교하세요. (c)에서는 <span class=\"chem\">h(x) = 0</span>을 풀고 양의 근을 남기세요.",
      ],
      // EN: <p><strong>Decode:</strong> (b) asks for the height at a given <span class="chem">x</span>, not the maximum height. The maximum (3.94 m) is above 3.8 m, but it happens at <span class="chem">x ≈ 6.89</span>, before the fence.</p><p>(a) <span class="chem">x = 0.62/(2 × 0.045) ≈ 6.889</span>, <span class="chem">h(6.889) ≈ 3.9356</span>, so the maximum height is <span class="chem">3.94</span> m.<br>(b) <span class="chem">h(9) = -0.045(81) + 0.62(9) + 1.8 = -3.645 + 5.58 + 1.8 = 3.735</span> m. This is less than <span class="chem">3.8</span> m, so the ball hits the fence and does not pass over it.<br>(c) <span class="chem">h(x) = 0</span> gives <span class="chem">x ≈ -2.46</span> or <span class="chem">x ≈ 16.24</span>. The ball lands <span class="chem">16.2</span> m from the player.</p>
      solution: "<p><strong>해석:</strong> (b)는 주어진 <span class=\"chem\">x</span>에서의 높이를 묻는 것이지 최대 높이를 묻는 것이 아니에요. 최댓값 (3.94 m)은 3.8 m보다 높지만, 그것은 울타리보다 앞인 <span class=\"chem\">x ≈ 6.89</span>에서 나타나요.</p><p>(a) <span class=\"chem\">x = 0.62/(2 × 0.045) ≈ 6.889</span>, <span class=\"chem\">h(6.889) ≈ 3.9356</span>이므로 최대 높이는 <span class=\"chem\">3.94</span> m예요.<br>(b) <span class=\"chem\">h(9) = -0.045(81) + 0.62(9) + 1.8 = -3.645 + 5.58 + 1.8 = 3.735</span> m예요. 이는 <span class=\"chem\">3.8</span> m보다 작으므로 공은 울타리에 부딪히고 넘어가지 못해요.<br>(c) <span class=\"chem\">h(x) = 0</span>에서 <span class=\"chem\">x ≈ -2.46</span> 또는 <span class=\"chem\">x ≈ 16.24</span>이에요. 공은 선수로부터 <span class=\"chem\">16.2</span> m 떨어진 곳에 떨어져요.</p>",
      // EN: <p>(a) <span class="chem">3.94</span> m; (b) <span class="chem">h(9) = 3.735 &lt; 3.8</span>, so the ball does <strong>not</strong> pass over the fence (it hits it); (c) <span class="chem">16.2</span> m.</p>
      answer: "<p>(a) <span class=\"chem\">3.94</span> m; (b) <span class=\"chem\">h(9) = 3.735 &lt; 3.8</span>이므로 공은 울타리를 넘어가지 <strong>못함</strong> (울타리에 부딪힘); (c) <span class=\"chem\">16.2</span> m.</p>",
      markscheme: [
        // EN: M1: Uses x = −b/(2a) = 0.62/0.09 ≈ 6.89, or the GDC maximum.
        "M1: x = −b/(2a) = 0.62/0.09 ≈ 6.89 또는 GDC의 최댓값 기능을 이용함.",
        // EN: A1: Maximum height 3.94 m (3.9356…).
        "A1: 최대 높이 3.94 m (3.9356…).",
        // EN: M1: Evaluates the height at the fence: h(9) = 3.735.
        "M1: 울타리 위치에서의 높이를 계산함: h(9) = 3.735.",
        // EN: R1: Since 3.735 < 3.8, the ball does not pass over the fence.
        "R1: 3.735 < 3.8이므로 공은 울타리를 넘어가지 못함.",
        // EN: M1: Solves h(x) = 0 and rejects the negative root (x ≈ −2.46).
        "M1: h(x) = 0을 풀고 음의 근 (x ≈ −2.46)을 제외함.",
        // EN: A1: x = 16.2 m (16.240…).
        "A1: x = 16.2 m (16.240…).",
      ],
    },

    // ── t2-2-q042 · numeric · challenge · SL · SL 2.6 · 5 marks
    "t2-2-q042": {
      // EN: <p>A road tunnel has a parabolic cross-section. At road level the tunnel is <span class="chem">18.4</span> m wide, and its highest point is <span class="chem">7.5</span> m above the centre of the road. A truck <span class="chem">3.2</span> m wide drives exactly along the centre of the road. Safety rules require at least <span class="chem">0.3</span> m of clearance between the top corners of the truck and the tunnel roof, measured vertically. Find the maximum height of the truck allowed by these rules, in metres correct to 3 significant figures.</p>
      stem: "<p>어느 도로 터널의 단면은 포물선 모양이다. 노면 높이에서 터널의 폭은 <span class=\"chem\">18.4</span> m이고, 가장 높은 점은 도로 중앙 위 <span class=\"chem\">7.5</span> m에 있다. 폭이 <span class=\"chem\">3.2</span> m인 트럭이 도로의 정확히 중앙을 따라 달린다. 안전 규정에 따르면 트럭의 위쪽 모서리와 터널 천장 사이에 수직으로 잰 여유 공간이 적어도 <span class=\"chem\">0.3</span> m 있어야 한다. 이 규정이 허용하는 트럭의 최대 높이를 구하고 (Find), 미터 단위로 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: choose axes yourself. Put the origin on the road at the centre of the tunnel, so the roof is <span class="chem">h(x) = 7.5 - kx^2</span> and the feet are at <span class="chem">x = +-9.2</span>. The truck is centred, so its top corners are at <span class="chem">x = +-1.6</span>, not at <span class="chem">x = 3.2</span>.
        "해석: 좌표축은 직접 정하세요. 원점을 터널 중앙의 노면 위에 두면 천장은 <span class=\"chem\">h(x) = 7.5 - kx^2</span>이고 양 끝 바닥은 <span class=\"chem\">x = +-9.2</span>에 있어요. 트럭이 중앙에 있으므로 위쪽 모서리는 <span class=\"chem\">x = 3.2</span>가 아니라 <span class=\"chem\">x = +-1.6</span>에 있어요.",
        // EN: Use <span class="chem">h(9.2) = 0</span> to find <span class="chem">k</span>.
        "<span class=\"chem\">h(9.2) = 0</span>을 이용해 <span class=\"chem\">k</span>를 구하세요.",
        // EN: Find the roof height at <span class="chem">x = 1.6</span>, then subtract the <span class="chem">0.3</span> m clearance.
        "<span class=\"chem\">x = 1.6</span>에서 천장의 높이를 구한 다음 여유 공간 <span class=\"chem\">0.3</span> m를 빼세요.",
      ],
      // EN: <p><strong>Decode:</strong> set up a symmetric model; a centred truck of width <span class="chem">3.2</span> m has corners <span class="chem">1.6</span> m either side of the centre; "clearance" means subtract <span class="chem">0.3</span> m.</p><p>With the origin at the centre of the road, <span class="chem">h(x) = 7.5 - kx^2</span>. Since <span class="chem">h(9.2) = 0</span>, <span class="chem">k = 7.5/9.2^2 = 7.5/84.64 ≈ 0.08861</span>. At the corners, <span class="chem">h(1.6) = 7.5 - 0.08861 × 2.56 ≈ 7.2732</span> m. The maximum truck height is <span class="chem">7.2732 - 0.3 ≈ 6.97</span> m.</p>
      solution: "<p><strong>해석:</strong> 대칭인 모델을 세워요. 중앙에 있는 폭 <span class=\"chem\">3.2</span> m인 트럭의 모서리는 중앙에서 양쪽으로 <span class=\"chem\">1.6</span> m 떨어져 있어요. \"여유 공간\"은 <span class=\"chem\">0.3</span> m를 빼라는 뜻이에요.</p><p>원점을 도로 중앙에 두면 <span class=\"chem\">h(x) = 7.5 - kx^2</span>예요. <span class=\"chem\">h(9.2) = 0</span>이므로 <span class=\"chem\">k = 7.5/9.2^2 = 7.5/84.64 ≈ 0.08861</span>이에요. 모서리에서 <span class=\"chem\">h(1.6) = 7.5 - 0.08861 × 2.56 ≈ 7.2732</span> m예요. 트럭의 최대 높이는 <span class=\"chem\">7.2732 - 0.3 ≈ 6.97</span> m예요.</p>",
    },

    // ── t2-2-q043 · short · challenge · SL · SL 2.6, 2.7 · 8 marks
    "t2-2-q043": {
      // EN: <p>A workshop makes garden chairs. Its weekly profit is modelled by <span class="chem">P(x) = -0.8x^2 + 46x - 380</span>, where <span class="chem">P</span> is the profit in <strong>thousands</strong> of dollars and <span class="chem">x</span> is the number of chairs made in <strong>hundreds</strong>, for <span class="chem">0 &lt;= x &lt;= 55</span>.<br>(a) Find the two values of <span class="chem">x</span> at which the workshop breaks even. <strong>[2 marks]</strong><br>(b) Find the maximum weekly profit in dollars, and the number of chairs needed to earn it. <strong>[3 marks]</strong><br>(c) The owners want a weekly profit of at least <span class="chem">$200 000</span>. Find the least and greatest number of chairs they can make in a week to achieve this. <strong>[3 marks]</strong></p>
      stem: "<p>어느 공방에서 정원용 의자를 만든다. 일주일 이익은 <span class=\"chem\">0 &lt;= x &lt;= 55</span>에서 <span class=\"chem\">P(x) = -0.8x^2 + 46x - 380</span>로 모델링된다. 여기서 <span class=\"chem\">P</span>는 이익(<strong>천</strong> 달러 단위)이고, <span class=\"chem\">x</span>는 만든 의자 수(<strong>백</strong> 개 단위)이다.<br>(a) 공방이 손익분기점에 이르는 <span class=\"chem\">x</span>의 두 값을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 일주일 최대 이익을 달러 단위로 구하고, 그 이익을 얻는 데 필요한 의자 수를 구하시오 (Find). <strong>[3 marks]</strong><br>(c) 주인들은 일주일 이익이 적어도 <span class=\"chem\">$200 000</span>이기를 원한다. 이를 달성하기 위해 일주일에 만들 수 있는 의자의 최소 개수와 최대 개수를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: watch the units. <span class="chem">P</span> is in thousands of dollars and <span class="chem">x</span> in hundreds of chairs, so "$200 000" means <span class="chem">P = 200</span>, and a value such as <span class="chem">x = 18.67</span> means <span class="chem">1867.2</span> chairs. Chairs come in whole numbers.
        "해석: 단위에 주의하세요. <span class=\"chem\">P</span>는 천 달러 단위, <span class=\"chem\">x</span>는 백 개 단위이므로 \"$200 000\"은 <span class=\"chem\">P = 200</span>을 뜻하고, <span class=\"chem\">x = 18.67</span> 같은 값은 의자 <span class=\"chem\">1867.2</span>개를 뜻해요. 의자 수는 자연수예요.",
        // EN: "Breaks even" means zero profit: solve <span class="chem">P(x) = 0</span>.
        "\"손익분기\"는 이익이 0이라는 뜻이에요: <span class=\"chem\">P(x) = 0</span>을 푸세요.",
        // EN: For (c), solve <span class="chem">P(x) = 200</span> with the GDC. The parabola opens downwards, so <span class="chem">P &gt;= 200</span> between the roots. Then round inwards to whole chairs.
        "(c)에서는 GDC로 <span class=\"chem\">P(x) = 200</span>을 푸세요. 포물선이 위로 볼록하므로 두 근 사이에서 <span class=\"chem\">P &gt;= 200</span>이에요. 그다음 안쪽으로 반올림해서 의자의 개수(자연수)로 만드세요.",
      ],
      // EN: <p><strong>Decode:</strong> convert both units before and after using the model, and remember that the number of chairs is a whole number.</p><p>(a) <span class="chem">-0.8x^2 + 46x - 380 = 0 => x = 10</span> or <span class="chem">x = 47.5</span>.<br>(b) The vertex is at <span class="chem">x = -46/(2 × (-0.8)) = 28.75</span>, with <span class="chem">P(28.75) = 281.25</span>. So the maximum profit is <span class="chem">$281 250</span>, from <span class="chem">2875</span> chairs.<br>(c) <span class="chem">P(x) &gt;= 200 => -0.8x^2 + 46x - 580 &gt;= 0</span>. The GDC gives roots <span class="chem">x ≈ 18.672</span> and <span class="chem">x ≈ 38.828</span>, and the profit is at least <span class="chem">200</span> between them. In chairs: <span class="chem">1867.2 &lt;= n &lt;= 3882.8</span>, so the least number is <span class="chem">1868</span> and the greatest is <span class="chem">3882</span>.</p>
      solution: "<p><strong>해석:</strong> 모델을 쓰기 전과 후에 두 단위를 모두 변환하고, 의자 수는 자연수라는 것을 기억하세요.</p><p>(a) <span class=\"chem\">-0.8x^2 + 46x - 380 = 0 => x = 10</span> 또는 <span class=\"chem\">x = 47.5</span>.<br>(b) 꼭짓점은 <span class=\"chem\">x = -46/(2 × (-0.8)) = 28.75</span>에 있고 <span class=\"chem\">P(28.75) = 281.25</span>예요. 따라서 최대 이익은 <span class=\"chem\">$281 250</span>이고, 의자 <span class=\"chem\">2875</span>개에서 얻어요.<br>(c) <span class=\"chem\">P(x) &gt;= 200 => -0.8x^2 + 46x - 580 &gt;= 0</span>. GDC로 구한 근은 <span class=\"chem\">x ≈ 18.672</span>과 <span class=\"chem\">x ≈ 38.828</span>이고, 그 사이에서 이익은 적어도 <span class=\"chem\">200</span>이에요. 의자 수로 나타내면 <span class=\"chem\">1867.2 &lt;= n &lt;= 3882.8</span>이므로 최소 개수는 <span class=\"chem\">1868</span>, 최대 개수는 <span class=\"chem\">3882</span>예요.</p>",
      // EN: <p>(a) <span class="chem">x = 10</span> and <span class="chem">x = 47.5</span>; (b) <span class="chem">$281 250</span> from <span class="chem">2875</span> chairs; (c) from <span class="chem">1868</span> to <span class="chem">3882</span> chairs.</p>
      answer: "<p>(a) <span class=\"chem\">x = 10</span>과 <span class=\"chem\">x = 47.5</span>; (b) 의자 <span class=\"chem\">2875</span>개에서 <span class=\"chem\">$281 250</span>; (c) 의자 <span class=\"chem\">1868</span>개부터 <span class=\"chem\">3882</span>개까지.</p>",
      markscheme: [
        // EN: M1: Solves P(x) = 0 (GDC or formula).
        "M1: P(x) = 0을 풂 (GDC 또는 공식).",
        // EN: A1: x = 10 and x = 47.5 (1000 and 4750 chairs).
        "A1: x = 10과 x = 47.5 (의자 1000개와 4750개).",
        // EN: M1: Finds the vertex x = 46/1.6 = 28.75 (or GDC maximum).
        "M1: 꼭짓점 x = 46/1.6 = 28.75를 구함 (또는 GDC의 최댓값 기능).",
        // EN: A1: Maximum profit P = 281.25, i.e. $281 250.
        "A1: 최대 이익 P = 281.25, 즉 $281 250.",
        // EN: A1: 2875 chairs.
        "A1: 의자 2875개.",
        // EN: M1: Sets P(x) ≥ 200 (profit in thousands) and solves −0.8x² + 46x − 580 = 0.
        "M1: P(x) ≥ 200 (이익은 천 달러 단위)으로 놓고 −0.8x² + 46x − 580 = 0을 풂.",
        // EN: A1: x ≈ 18.672 and x ≈ 38.828.
        "A1: x ≈ 18.672와 x ≈ 38.828.",
        // EN: A1: Converts to whole chairs: least 1868, greatest 3882.
        "A1: 의자의 개수로 변환함: 최소 1868, 최대 3882.",
      ],
    },

    // ── t2-2-q044 · numeric · exam · SL · SL 2.9 · 5 marks
    "t2-2-q044": {
      // EN: <p>A cup of tea is left to cool in a room kept at <span class="chem">20</span> °C. Its temperature <span class="chem">t</span> minutes later is modelled by <span class="chem">T(t) = 20 + A e^{-kt}</span>. The tea is at <span class="chem">88</span> °C when <span class="chem">t = 0</span> and at <span class="chem">61</span> °C when <span class="chem">t = 6</span>. Find the time it takes for the tea to cool to <span class="chem">35</span> °C, in minutes correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">20</span> °C로 유지되는 방에 차 한 잔을 두어 식힌다. <span class=\"chem\">t</span>분 후 차의 온도는 <span class=\"chem\">T(t) = 20 + A e^{-kt}</span>로 모델링된다. 차의 온도는 <span class=\"chem\">t = 0</span>일 때 <span class=\"chem\">88</span> °C이고 <span class=\"chem\">t = 6</span>일 때 <span class=\"chem\">61</span> °C이다. 차가 <span class=\"chem\">35</span> °C까지 식는 데 걸리는 시간을 구하고 (Find), 분 단위로 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: two unknowns, two data points. <span class="chem">t = 0</span> gives <span class="chem">A</span> at once (since <span class="chem">e^0 = 1</span>); <span class="chem">t = 6</span> then gives <span class="chem">k</span>.
        "해석: 미지수가 두 개, 자료점이 두 개예요. <span class=\"chem\">t = 0</span>에서 바로 <span class=\"chem\">A</span>를 얻고 (<span class=\"chem\">e^0 = 1</span>이므로), 그다음 <span class=\"chem\">t = 6</span>에서 <span class=\"chem\">k</span>를 얻어요.",
        // EN: You should find <span class="chem">A = 68</span> and <span class="chem">e^{-6k} = 41/68</span>.
        "<span class=\"chem\">A = 68</span>과 <span class=\"chem\">e^{-6k} = 41/68</span>가 나와야 해요.",
        // EN: Solve <span class="chem">20 + 68 e^{-kt} = 35</span> using logs, or graph <span class="chem">y = T(t)</span> and <span class="chem">y = 35</span>.
        "로그를 이용해 <span class=\"chem\">20 + 68 e^{-kt} = 35</span>를 풀거나, <span class=\"chem\">y = T(t)</span>와 <span class=\"chem\">y = 35</span>의 그래프를 그리세요.",
      ],
      // EN: <p><span class="chem">T(0) = 20 + A = 88 => A = 68</span>. Then <span class="chem">20 + 68 e^{-6k} = 61 => e^{-6k} = 41/68 => k = (1/6) ln(68/41) ≈ 0.084323</span>. For <span class="chem">T = 35</span>: <span class="chem">68 e^{-kt} = 15 => t = ln(68/15)/k ≈ 17.925</span>, so <span class="chem">t = 17.9</span> minutes.</p>
      solution: "<p><span class=\"chem\">T(0) = 20 + A = 88 => A = 68</span>. 그다음 <span class=\"chem\">20 + 68 e^{-6k} = 61 => e^{-6k} = 41/68 => k = (1/6) ln(68/41) ≈ 0.084323</span>. <span class=\"chem\">T = 35</span>일 때: <span class=\"chem\">68 e^{-kt} = 15 => t = ln(68/15)/k ≈ 17.925</span>이므로 <span class=\"chem\">t = 17.9</span>분이에요.</p>",
    },

    // ── t2-2-q045 · numeric · challenge · SL · SL 2.9 · 5 marks
    "t2-2-q045": {
      // EN: <p>The number of wild ponies in a national park is counted on 1 January each year. The count was <span class="chem">3400</span> in 2015 and <span class="chem">4150</span> in 2020. The rangers model the count with <span class="chem">P = 3400 b^t</span>, where <span class="chem">t</span> is the number of years after 2015. Use the model to find the first year in which the count is greater than <span class="chem">6000</span>.</p>
      stem: "<p>어느 국립공원의 야생 조랑말 수를 매년 1월 1일에 센다. 2015년의 수는 <span class=\"chem\">3400</span>이고 2020년은 <span class=\"chem\">4150</span>이었다. 관리원들은 이 수를 <span class=\"chem\">P = 3400 b^t</span>으로 모델링한다. 여기서 <span class=\"chem\">t</span>는 2015년 이후의 연수이다. 이 모델을 이용하여 수가 처음으로 <span class=\"chem\">6000</span>보다 커지는 해를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the 2020 count fixes the growth factor <span class="chem">b</span>; then solve <span class="chem">P &gt; 6000</span> for <span class="chem">t</span>. The question asks for a calendar year, and counts happen only at whole values of <span class="chem">t</span>.
        "해석: 2020년의 수로 성장 인수 <span class=\"chem\">b</span>가 정해져요. 그다음 <span class=\"chem\">P &gt; 6000</span>를 <span class=\"chem\">t</span>에 대하여 푸세요. 묻는 것은 달력상의 연도이고, 수를 세는 것은 <span class=\"chem\">t</span>가 정수일 때뿐이에요.",
        // EN: <span class="chem">3400 b^5 = 4150 => b = (4150/3400)^{1/5} ≈ 1.04067</span>.
        "<span class=\"chem\">3400 b^5 = 4150 => b = (4150/3400)^{1/5} ≈ 1.04067</span>.",
        // EN: Solving <span class="chem">3400 b^t = 6000</span> gives a non-integer <span class="chem">t</span>. The count first exceeds 6000 at the next whole <span class="chem">t</span>; check <span class="chem">P</span> at the integers on either side.
        "<span class=\"chem\">3400 b^t = 6000</span>을 풀면 정수가 아닌 <span class=\"chem\">t</span>가 나와요. 수가 처음으로 6000을 넘는 것은 다음 정수 <span class=\"chem\">t</span>에서예요. 양쪽 정수에서 <span class=\"chem\">P</span>를 확인하세요.",
      ],
      // EN: <p><strong>Decode:</strong> fit <span class="chem">b</span> from the second data point, solve the inequality, then turn <span class="chem">t</span> into a whole year.</p><p><span class="chem">b^5 = 4150/3400 => b ≈ 1.040672</span>. <span class="chem">3400 b^t = 6000 => t = ln(6000/3400)/ln b ≈ 14.25</span>. Check: <span class="chem">P(14) ≈ 5941 &lt; 6000</span> and <span class="chem">P(15) ≈ 6183 &gt; 6000</span>. So the first count above 6000 is at <span class="chem">t = 15</span>, in the year <span class="chem">2030</span>.</p>
      solution: "<p><strong>해석:</strong> 두 번째 자료점으로 <span class=\"chem\">b</span>를 정하고, 부등식을 푼 다음, <span class=\"chem\">t</span>를 정수 연도로 바꿔요.</p><p><span class=\"chem\">b^5 = 4150/3400 => b ≈ 1.040672</span>. <span class=\"chem\">3400 b^t = 6000 => t = ln(6000/3400)/ln b ≈ 14.25</span>. 확인: <span class=\"chem\">P(14) ≈ 5941 &lt; 6000</span>, <span class=\"chem\">P(15) ≈ 6183 &gt; 6000</span>. 따라서 처음으로 6000을 넘는 것은 <span class=\"chem\">t = 15</span>, 즉 <span class=\"chem\">2030</span>년이에요.</p>",
    },

    // ── t2-2-q046 · numeric · challenge · SL · SL 2.9 · 4 marks
    "t2-2-q046": {
      // EN: <p>After a single dose, a patient's body removes <span class="chem">30%</span> of a drug every <span class="chem">4</span> hours: in any 4-hour period, the amount present at the start falls by 30%. Assuming the amount decreases continuously according to this exponential pattern, find how long after the dose the amount first falls below <span class="chem">10%</span> of the original dose. Give your answer in hours correct to 3 significant figures.</p>
      stem: "<p>한 번 투여한 후 환자의 몸은 <span class=\"chem\">4</span>시간마다 약의 <span class=\"chem\">30%</span>를 제거한다: 어떤 4시간 동안에도 처음에 있던 양이 30% 줄어든다. 양이 이 지수적 패턴에 따라 연속적으로 감소한다고 가정할 때, 투여 후 얼마 뒤에 양이 처음으로 원래 투여량의 <span class=\"chem\">10%</span> 아래로 떨어지는지 구하시오 (Find). 시간 단위로 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: "removes 30%" means <span class="chem">70%</span> remains, so the growth factor for one 4-hour period is <span class="chem">0.7</span>. The model is <span class="chem">M(t) = M_0 (0.7)^{t/4}</span>. The size of the dose is not needed, because you compare with a percentage of it.
        "해석: \"30%를 제거한다\"는 것은 <span class=\"chem\">70%</span>가 남는다는 뜻이므로, 4시간 동안의 성장 인수는 <span class=\"chem\">0.7</span>이에요. 모델은 <span class=\"chem\">M(t) = M_0 (0.7)^{t/4}</span>예요. 투여량의 크기는 필요 없어요. 그 백분율과 비교하기 때문이에요.",
        // EN: Solve <span class="chem">(0.7)^{t/4} = 0.1</span>, by logs or by GDC intersection.
        "로그나 GDC 교점으로 <span class=\"chem\">(0.7)^{t/4} = 0.1</span>을 푸세요.",
      ],
      // EN: <p><strong>Decode:</strong> a 30% decrease per 4 hours is a factor of <span class="chem">0.7</span> per 4 hours; "10% of the dose" means <span class="chem">M = 0.1 M_0</span>, so <span class="chem">M_0</span> cancels.</p><p><span class="chem">M_0 (0.7)^{t/4} = 0.1 M_0 => (t/4) ln 0.7 = ln 0.1 => t = 4 ln 0.1/ln 0.7 ≈ 25.82</span>. So the amount first falls below 10% after about <span class="chem">25.8</span> hours.</p>
      solution: "<p><strong>해석:</strong> 4시간마다 30% 감소는 4시간마다 인수 <span class=\"chem\">0.7</span>을 곱하는 것이에요. \"투여량의 10%\"는 <span class=\"chem\">M = 0.1 M_0</span>을 뜻하므로 <span class=\"chem\">M_0</span>은 약분돼요.</p><p><span class=\"chem\">M_0 (0.7)^{t/4} = 0.1 M_0 => (t/4) ln 0.7 = ln 0.1 => t = 4 ln 0.1/ln 0.7 ≈ 25.82</span>. 따라서 양은 약 <span class=\"chem\">25.8</span>시간 후에 처음으로 10% 아래로 떨어져요.</p>",
    },

    // ── t2-2-q047 · numeric · exam · SL · SL 2.9 · 4 marks
    "t2-2-q047": {
      // EN: <p>The loudness <span class="chem">L</span> decibels of a sound of intensity <span class="chem">I</span> (in watts per square metre) is given by <span class="chem">L = 10 log_{10}(I/10^{-12})</span>. A rock concert has a loudness of <span class="chem">108</span> dB and a busy street has a loudness of <span class="chem">74</span> dB. Find how many times greater the intensity of the concert is than the intensity of the street, correct to 3 significant figures.</p>
      stem: "<p>세기가 <span class=\"chem\">I</span>(제곱미터당 와트)인 소리의 크기 <span class=\"chem\">L</span>데시벨은 <span class=\"chem\">L = 10 log_{10}(I/10^{-12})</span>로 주어진다. 록 콘서트의 소리 크기는 <span class=\"chem\">108</span> dB이고 번잡한 거리의 소리 크기는 <span class=\"chem\">74</span> dB이다. 콘서트 소리의 세기가 거리 소리의 세기의 몇 배인지 구하고 (Find), 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: you need the ratio <span class="chem">I_{concert}/I_{street}</span>, not the difference in decibels.
        "해석: 필요한 것은 비 <span class=\"chem\">I_{concert}/I_{street}</span>이지, 데시벨의 차가 아니에요.",
        // EN: Make <span class="chem">I</span> the subject: <span class="chem">I = 10^{-12} × 10^{L/10}</span>. Divide one intensity by the other; the <span class="chem">10^{-12}</span> cancels.
        "<span class=\"chem\">I</span>에 대하여 정리하세요: <span class=\"chem\">I = 10^{-12} × 10^{L/10}</span>. 한 세기를 다른 세기로 나누면 <span class=\"chem\">10^{-12}</span>는 약분돼요.",
      ],
      // EN: <p><span class="chem">L = 10 log_{10}(I/10^{-12}) => I = 10^{-12} × 10^{L/10}</span>. So <span class="chem">I_{concert}/I_{street} = 10^{10.8}/10^{7.4} = 10^{3.4} ≈ 2511.9</span>. The concert is about <span class="chem">2510</span> times as intense.</p>
      solution: "<p><span class=\"chem\">L = 10 log_{10}(I/10^{-12}) => I = 10^{-12} × 10^{L/10}</span>. 따라서 <span class=\"chem\">I_{concert}/I_{street} = 10^{10.8}/10^{7.4} = 10^{3.4} ≈ 2511.9</span>이에요. 콘서트는 약 <span class=\"chem\">2510</span>배 더 세요.</p>",
    },

    // ── t2-2-q048 · numeric · exam · SL · SL 2.9 · 5 marks
    "t2-2-q048": {
      // EN: <p>A phone battery is charged from empty. Its charge, as a percentage of full charge, <span class="chem">t</span> minutes after charging starts is modelled by <span class="chem">C(t) = 100(1 - e^{-kt})</span>. The battery reaches <span class="chem">60%</span> after <span class="chem">25</span> minutes. Find how many <strong>more</strong> minutes it takes to go from <span class="chem">60%</span> to <span class="chem">95%</span>, correct to 3 significant figures.</p>
      stem: "<p>휴대전화 배터리를 완전히 방전된 상태에서 충전한다. 충전을 시작한 지 <span class=\"chem\">t</span>분 후 충전량(완전 충전에 대한 백분율)은 <span class=\"chem\">C(t) = 100(1 - e^{-kt})</span>로 모델링된다. 배터리는 <span class=\"chem\">25</span>분 후에 <span class=\"chem\">60%</span>에 도달한다. <span class=\"chem\">60%</span>에서 <span class=\"chem\">95%</span>까지 가는 데 몇 분이 <strong>더</strong> 걸리는지 구하고 (Find), 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: use the 25-minute data point to find <span class="chem">k</span>, find the time at which <span class="chem">C = 95</span>, then subtract <span class="chem">25</span>: the question asks for the extra time.
        "해석: 25분 자료점으로 <span class=\"chem\">k</span>를 구하고, <span class=\"chem\">C = 95</span>가 되는 시각을 구한 다음 <span class=\"chem\">25</span>를 빼세요: 묻는 것은 추가 시간이에요.",
        // EN: <span class="chem">100(1 - e^{-25k}) = 60 => e^{-25k} = 0.4</span>.
        "<span class=\"chem\">100(1 - e^{-25k}) = 60 => e^{-25k} = 0.4</span>.",
        // EN: For <span class="chem">95%</span>: <span class="chem">e^{-kt} = 0.05</span>.
        "<span class=\"chem\">95%</span>일 때: <span class=\"chem\">e^{-kt} = 0.05</span>.",
      ],
      // EN: <p><span class="chem">e^{-25k} = 0.4 => k = -ln(0.4)/25 ≈ 0.036652</span>. For <span class="chem">C = 95</span>: <span class="chem">e^{-kt} = 0.05 => t = -ln(0.05)/k ≈ 81.735</span> minutes. The extra time is <span class="chem">81.735 - 25 ≈ 56.7</span> minutes.</p>
      solution: "<p><span class=\"chem\">e^{-25k} = 0.4 => k = -ln(0.4)/25 ≈ 0.036652</span>. <span class=\"chem\">C = 95</span>일 때: <span class=\"chem\">e^{-kt} = 0.05 => t = -ln(0.05)/k ≈ 81.735</span>분이에요. 추가 시간은 <span class=\"chem\">81.735 - 25 ≈ 56.7</span>분이에요.</p>",
    },

    // ── t2-2-q049 · numeric · exam · SL · SL 2.9 · 4 marks
    "t2-2-q049": {
      // EN: <p>The height <span class="chem">h</span> cm of a seedling <span class="chem">x</span> weeks after planting is modelled by <span class="chem">h(x) = a ln x + b</span>, for <span class="chem">x &gt;= 1</span>. The seedling is <span class="chem">5.1</span> cm tall after 2 weeks and <span class="chem">8.7</span> cm tall after 9 weeks. Find the value of <span class="chem">a</span>, correct to 3 significant figures.</p>
      stem: "<p>심은 지 <span class=\"chem\">x</span>주 후 묘목의 높이 <span class=\"chem\">h</span> cm는 <span class=\"chem\">x &gt;= 1</span>에서 <span class=\"chem\">h(x) = a ln x + b</span>로 모델링된다. 묘목은 2주 후 <span class=\"chem\">5.1</span> cm, 9주 후 <span class=\"chem\">8.7</span> cm이다. <span class=\"chem\">a</span>의 값을 구하고 (Find), 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Each data point gives a linear equation in <span class="chem">a</span> and <span class="chem">b</span>: <span class="chem">a ln 2 + b = 5.1</span> and <span class="chem">a ln 9 + b = 8.7</span>.
        "각 자료점은 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>에 대한 일차방정식을 줘요: <span class=\"chem\">a ln 2 + b = 5.1</span>과 <span class=\"chem\">a ln 9 + b = 8.7</span>.",
        // EN: Subtract to eliminate <span class="chem">b</span>, and use <span class="chem">ln 9 - ln 2 = ln 4.5</span>; or use the GDC simultaneous-equation solver.
        "두 식을 빼서 <span class=\"chem\">b</span>를 소거하고 <span class=\"chem\">ln 9 - ln 2 = ln 4.5</span>를 이용하세요. 또는 GDC의 연립방정식 풀이 기능을 쓰세요.",
      ],
      // EN: <p><span class="chem">a ln 9 + b = 8.7</span> and <span class="chem">a ln 2 + b = 5.1</span>. Subtracting: <span class="chem">a(ln 9 - ln 2) = 3.6 => a = 3.6/ln 4.5 ≈ 2.3935</span>, so <span class="chem">a = 2.39</span> (and <span class="chem">b ≈ 3.44</span>).</p>
      solution: "<p><span class=\"chem\">a ln 9 + b = 8.7</span>과 <span class=\"chem\">a ln 2 + b = 5.1</span>. 두 식을 빼면 <span class=\"chem\">a(ln 9 - ln 2) = 3.6 => a = 3.6/ln 4.5 ≈ 2.3935</span>이므로 <span class=\"chem\">a = 2.39</span>예요 (그리고 <span class=\"chem\">b ≈ 3.44</span>).</p>",
    },

    // ── t2-2-q050 · short · challenge · SL · SL 2.9, 2.10 · 9 marks
    "t2-2-q050": {
      // EN: <p>Goats are released on an island. Ecologists model the number of goats <span class="chem">t</span> years after release by <span class="chem">P(t) = L/(1 + C e^{-kt})</span>, where <span class="chem">L</span>, <span class="chem">C</span> and <span class="chem">k</span> are positive constants. The island can support at most <span class="chem">5000</span> goats, and the model's population approaches this value in the long term. <span class="chem">400</span> goats are released at <span class="chem">t = 0</span>, and there are <span class="chem">1100</span> goats after 3 years.<br>(a) Write down the value of <span class="chem">L</span>, giving a reason. <strong>[2 marks]</strong><br>(b) Show that <span class="chem">C = 11.5</span>. <strong>[2 marks]</strong><br>(c) Find the value of <span class="chem">k</span>. <strong>[3 marks]</strong><br>(d) Find how long it takes for the population to reach <span class="chem">4000</span> goats. <strong>[2 marks]</strong></p>
      stem: "<p>어느 섬에 염소를 풀어놓는다. 생태학자들은 풀어놓은 지 <span class=\"chem\">t</span>년 후의 염소 수를 <span class=\"chem\">P(t) = L/(1 + C e^{-kt})</span>로 모델링한다. 여기서 <span class=\"chem\">L</span>, <span class=\"chem\">C</span>, <span class=\"chem\">k</span>는 양의 상수이다. 이 섬은 최대 <span class=\"chem\">5000</span>마리의 염소를 부양할 수 있고, 모델의 개체 수는 장기적으로 이 값에 가까워진다. <span class=\"chem\">t = 0</span>에 염소 <span class=\"chem\">400</span>마리를 풀어놓았고, 3년 후에는 <span class=\"chem\">1100</span>마리가 되었다.<br>(a) 이유를 들어 <span class=\"chem\">L</span>의 값을 쓰시오 (Write down). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">C = 11.5</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(c) <span class=\"chem\">k</span>의 값을 구하시오 (Find). <strong>[3 marks]</strong><br>(d) 개체 수가 <span class=\"chem\">4000</span>마리에 도달하는 데 걸리는 시간을 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a logistic-style model. The phrase "approaches this value in the long term" tells you what happens to <span class="chem">P(t)</span> as <span class="chem">t -&gt; infty</span>, which gives <span class="chem">L</span> without any data. The two counts then give <span class="chem">C</span> and <span class="chem">k</span>.
        "해석: 이것은 로지스틱형 모델이에요. \"장기적으로 이 값에 가까워진다\"는 표현은 <span class=\"chem\">t -&gt; infty</span>일 때 <span class=\"chem\">P(t)</span>가 어떻게 되는지 알려 주므로, 자료 없이도 <span class=\"chem\">L</span>을 얻을 수 있어요. 그다음 두 개의 수로 <span class=\"chem\">C</span>와 <span class=\"chem\">k</span>를 구해요.",
        // EN: At <span class="chem">t = 0</span>, <span class="chem">e^0 = 1</span>, so <span class="chem">P(0) = L/(1 + C)</span>.
        "<span class=\"chem\">t = 0</span>일 때 <span class=\"chem\">e^0 = 1</span>이므로 <span class=\"chem\">P(0) = L/(1 + C)</span>예요.",
        // EN: For (c), rearrange <span class="chem">1100 = 5000/(1 + 11.5 e^{-3k})</span> to isolate <span class="chem">e^{-3k}</span>, or solve on the GDC.
        "(c)에서는 <span class=\"chem\">1100 = 5000/(1 + 11.5 e^{-3k})</span>를 정리해 <span class=\"chem\">e^{-3k}</span>만 한쪽에 남기거나 GDC로 푸세요.",
        // EN: Keep the unrounded <span class="chem">k</span> in your GDC for (d).
        "(d)를 위해 반올림하지 않은 <span class=\"chem\">k</span>를 GDC에 저장해 두세요.",
      ],
      // EN: <p><strong>Decode:</strong> the long-term limit is the horizontal asymptote of the model, so it gives <span class="chem">L</span>; each data point then fixes one more constant.</p><p>(a) As <span class="chem">t -&gt; infty</span>, <span class="chem">e^{-kt} -&gt; 0</span> so <span class="chem">P(t) -&gt; L</span>. The long-term population is 5000, so <span class="chem">L = 5000</span>.<br>(b) <span class="chem">400 = 5000/(1 + C) => 1 + C = 12.5 => C = 11.5</span>.<br>(c) <span class="chem">1100 = 5000/(1 + 11.5 e^{-3k}) => 1 + 11.5 e^{-3k} = 50/11 => e^{-3k} = (39/11)/11.5 ≈ 0.30830 => k = -ln(0.30830)/3 ≈ 0.392</span>.<br>(d) <span class="chem">4000 = 5000/(1 + 11.5 e^{-kt}) => 11.5 e^{-kt} = 0.25 => t = ln(46)/k ≈ 9.76</span> years.</p>
      solution: "<p><strong>해석:</strong> 장기적 극한은 모델의 수평점근선이므로 <span class=\"chem\">L</span>을 줘요. 그다음 각 자료점이 상수를 하나씩 정해요.</p><p>(a) <span class=\"chem\">t -&gt; infty</span>일 때 <span class=\"chem\">e^{-kt} -&gt; 0</span>이므로 <span class=\"chem\">P(t) -&gt; L</span>이에요. 장기적 개체 수가 5000이므로 <span class=\"chem\">L = 5000</span>이에요.<br>(b) <span class=\"chem\">400 = 5000/(1 + C) => 1 + C = 12.5 => C = 11.5</span>.<br>(c) <span class=\"chem\">1100 = 5000/(1 + 11.5 e^{-3k}) => 1 + 11.5 e^{-3k} = 50/11 => e^{-3k} = (39/11)/11.5 ≈ 0.30830 => k = -ln(0.30830)/3 ≈ 0.392</span>.<br>(d) <span class=\"chem\">4000 = 5000/(1 + 11.5 e^{-kt}) => 11.5 e^{-kt} = 0.25 => t = ln(46)/k ≈ 9.76</span>년이에요.</p>",
      // EN: <p>(a) <span class="chem">L = 5000</span>, because <span class="chem">e^{-kt} -&gt; 0</span> so <span class="chem">P -&gt; L</span>; (b) <span class="chem">400 = 5000/(1 + C) => C = 11.5</span>; (c) <span class="chem">k ≈ 0.392</span>; (d) <span class="chem">9.76</span> years.</p>
      answer: "<p>(a) <span class=\"chem\">L = 5000</span>, <span class=\"chem\">e^{-kt} -&gt; 0</span>이므로 <span class=\"chem\">P -&gt; L</span>이기 때문; (b) <span class=\"chem\">400 = 5000/(1 + C) => C = 11.5</span>; (c) <span class=\"chem\">k ≈ 0.392</span>; (d) <span class=\"chem\">9.76</span>년.</p>",
      markscheme: [
        // EN: A1: L = 5000.
        "A1: L = 5000.",
        // EN: R1: As t → ∞, e^(−kt) → 0, so P(t) → L; the long-term value is 5000.
        "R1: t → ∞일 때 e^(−kt) → 0이므로 P(t) → L; 장기적인 값은 5000.",
        // EN: M1: Substitutes t = 0: 400 = 5000/(1 + C e⁰) = 5000/(1 + C).
        "M1: t = 0을 대입함: 400 = 5000/(1 + C e⁰) = 5000/(1 + C).",
        // EN: A1: 1 + C = 12.5. AG: C = 11.5; the given line itself earns no mark.
        "A1: 1 + C = 12.5. AG: C = 11.5; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: M1: Substitutes t = 3, P = 1100: 1100 = 5000/(1 + 11.5e^(−3k)).
        "M1: t = 3, P = 1100을 대입함: 1100 = 5000/(1 + 11.5e^(−3k)).",
        // EN: A1: e^(−3k) = (5000/1100 − 1)/11.5 ≈ 0.30830 (or GDC solve).
        "A1: e^(−3k) = (5000/1100 − 1)/11.5 ≈ 0.30830 (또는 GDC로 풂).",
        // EN: A1: k ≈ 0.392 (0.39223…).
        "A1: k ≈ 0.392 (0.39223…).",
        // EN: M1: Solves 4000 = 5000/(1 + 11.5e^(−kt)) (algebraically or by GDC intersection).
        "M1: 4000 = 5000/(1 + 11.5e^(−kt))를 풂 (대수적으로 또는 GDC 교점으로).",
        // EN: A1: t ≈ 9.76 years.
        "A1: t ≈ 9.76년.",
      ],
    },

    // ── t2-2-q051 · numeric · challenge · SL · SL 2.9, 2.10 · 5 marks
    "t2-2-q051": {
      // EN: <p>At the start of 2025, town A has <span class="chem">12 000</span> residents and town B has <span class="chem">18 500</span>. The population of town A is growing by <span class="chem">2.5%</span> per year, and the population of town B is falling by <span class="chem">1.2%</span> per year. Assuming these rates continue, find the least whole number of years <span class="chem">n</span> after the start of 2025 such that the population of A is greater than the population of B after <span class="chem">n</span> years.</p>
      stem: "<p>2025년 초에 A 도시의 주민은 <span class=\"chem\">12 000</span>명이고 B 도시는 <span class=\"chem\">18 500</span>명이다. A 도시의 인구는 매년 <span class=\"chem\">2.5%</span>씩 증가하고, B 도시의 인구는 매년 <span class=\"chem\">1.2%</span>씩 감소한다. 이 비율이 계속된다고 가정할 때, <span class=\"chem\">n</span>년 후 A의 인구가 B의 인구보다 많아지는, 2025년 초 이후의 최소 정수 연수 <span class=\"chem\">n</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "growing by 2.5%" gives a factor of <span class="chem">1.025</span> per year; "falling by 1.2%" gives <span class="chem">0.988</span>. You need the first whole <span class="chem">n</span> after the two exponential graphs cross.
        "해석: \"2.5% 증가\"는 매년 인수 <span class=\"chem\">1.025</span>를, \"1.2% 감소\"는 <span class=\"chem\">0.988</span>을 줘요. 두 지수함수 그래프가 만난 뒤의 첫 번째 정수 <span class=\"chem\">n</span>이 필요해요.",
        // EN: Solve <span class="chem">12000(1.025)^n = 18500(0.988)^n</span> by GDC intersection (or by logs).
        "GDC 교점(또는 로그)으로 <span class=\"chem\">12000(1.025)^n = 18500(0.988)^n</span>을 푸세요.",
        // EN: The crossing value is not a whole number. Round <strong>up</strong>, and check the populations at the integers on either side.
        "만나는 값은 정수가 아니에요. <strong>올림</strong>하고, 양쪽 정수에서 인구를 확인하세요.",
      ],
      // EN: <p><strong>Decode:</strong> two exponential models with factors <span class="chem">1.025</span> and <span class="chem">0.988</span>; find where <span class="chem">A = B</span>, then the next whole year.</p><p><span class="chem">12000(1.025)^n = 18500(0.988)^n => (1.025/0.988)^n = 18500/12000 => n = ln(18500/12000)/ln(1.025/0.988) ≈ 11.77</span>. Check: after 11 years A ≈ 15 745 and B ≈ 16 199 (B larger); after 12 years A ≈ 16 139 and B ≈ 16 005 (A larger). So <span class="chem">n = 12</span>.</p>
      solution: "<p><strong>해석:</strong> 인수가 <span class=\"chem\">1.025</span>와 <span class=\"chem\">0.988</span>인 두 지수 모델이에요. <span class=\"chem\">A = B</span>인 곳을 구한 다음, 그다음 정수 연도를 구해요.</p><p><span class=\"chem\">12000(1.025)^n = 18500(0.988)^n => (1.025/0.988)^n = 18500/12000 => n = ln(18500/12000)/ln(1.025/0.988) ≈ 11.77</span>. 확인: 11년 후 A ≈ 15 745, B ≈ 16 199 (B가 더 큼); 12년 후 A ≈ 16 139, B ≈ 16 005 (A가 더 큼). 따라서 <span class=\"chem\">n = 12</span>예요.</p>",
    },

    // ── t2-2-q052 · numeric · exam · SL · SL 2.10 · 3 marks
    "t2-2-q052": {
      // EN: <p>Find the positive solution of the equation <span class="chem">x^2 - 3 = 2 ln(x + 1)</span>, giving your answer correct to 3 significant figures.</p>
      stem: "<p>방정식 <span class=\"chem\">x^2 - 3 = 2 ln(x + 1)</span>의 양의 해를 구하고 (Find), 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: There is no algebraic method for an equation mixing a polynomial and a logarithm. Graph <span class="chem">y = x^2 - 3</span> and <span class="chem">y = 2 ln(x + 1)</span> on the GDC.
        "다항식과 로그가 섞인 방정식은 대수적인 풀이 방법이 없어요. GDC로 <span class=\"chem\">y = x^2 - 3</span>과 <span class=\"chem\">y = 2 ln(x + 1)</span>의 그래프를 그리세요.",
        // EN: There are two intersections. Choose the one with <span class="chem">x &gt; 0</span>.
        "교점이 두 개 있어요. <span class=\"chem\">x &gt; 0</span>인 것을 고르세요.",
      ],
      // EN: <p>Graphing <span class="chem">Y_1 = x^2 - 3</span> and <span class="chem">Y_2 = 2 ln(x + 1)</span> gives intersections at <span class="chem">x ≈ -0.712</span> and <span class="chem">x ≈ 2.3243</span>. The positive solution is <span class="chem">x = 2.32</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">Y_1 = x^2 - 3</span>과 <span class=\"chem\">Y_2 = 2 ln(x + 1)</span>의 그래프를 그리면 교점은 <span class=\"chem\">x ≈ -0.712</span>와 <span class=\"chem\">x ≈ 2.3243</span>이에요. 양의 해는 <span class=\"chem\">x = 2.32</span> (3 s.f.)예요.</p>",
    },

    // ── t2-2-q053 · numeric · exam · SL · SL 2.10 · 3 marks
    "t2-2-q053": {
      // EN: <p>The equation <span class="chem">2^x = x + 3</span> has two solutions. Find the negative solution, correct to 3 significant figures.</p>
      stem: "<p>방정식 <span class=\"chem\">2^x = x + 3</span>은 두 해를 갖는다. 음의 해를 구하고 (Find), 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Graph <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span>, or find the zeros of <span class="chem">y = 2^x - x - 3</span>.
        "<span class=\"chem\">y = 2^x</span>와 <span class=\"chem\">y = x + 3</span>의 그래프를 그리거나 <span class=\"chem\">y = 2^x - x - 3</span>의 영점을 구하세요.",
        // EN: The line crosses the exponential curve twice. You need the crossing to the left of the <span class="chem">y</span>-axis; your viewing window must include <span class="chem">x = -3</span>.
        "직선은 지수함수 곡선과 두 번 만나요. 필요한 것은 <span class=\"chem\">y</span>축 왼쪽의 교점이에요. 화면 범위에 <span class=\"chem\">x = -3</span>이 포함되어야 해요.",
      ],
      // EN: <p>The zeros of <span class="chem">2^x - x - 3</span> are <span class="chem">x ≈ -2.8625</span> and <span class="chem">x ≈ 2.4449</span>. The negative solution is <span class="chem">x = -2.86</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">2^x - x - 3</span>의 영점은 <span class=\"chem\">x ≈ -2.8625</span>와 <span class=\"chem\">x ≈ 2.4449</span>예요. 음의 해는 <span class=\"chem\">x = -2.86</span> (3 s.f.)예요.</p>",
    },

    // ── t2-2-q054 · short · exam · SL · SL 2.10 · 5 marks
    "t2-2-q054": {
      // EN: <p>Let <span class="chem">f(x) = ln x</span> and <span class="chem">g(x) = 0.5x - 1</span>, for <span class="chem">x &gt; 0</span>.<br>(a) Find the <span class="chem">x</span>-coordinates of the points where the graphs of <span class="chem">f</span> and <span class="chem">g</span> intersect. <strong>[3 marks]</strong><br>(b) Hence solve the inequality <span class="chem">ln x &gt; 0.5x - 1</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">x &gt; 0</span>에 대하여 <span class=\"chem\">f(x) = ln x</span>, <span class=\"chem\">g(x) = 0.5x - 1</span>라 하자.<br>(a) <span class=\"chem\">f</span>와 <span class=\"chem\">g</span>의 그래프가 만나는 점의 <span class=\"chem\">x</span>좌표를 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 이를 이용하여 (Hence) 부등식 <span class=\"chem\">ln x &gt; 0.5x - 1</span>을 푸시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Use the GDC intersect tool twice: once near <span class="chem">x = 0.5</span> and once near <span class="chem">x = 5</span>. Choose a window that shows both.
        "GDC의 교점 기능을 두 번 쓰세요: 한 번은 <span class=\"chem\">x = 0.5</span> 근처에서, 한 번은 <span class=\"chem\">x = 5</span> 근처에서요. 두 교점이 모두 보이는 화면 범위를 고르세요.",
        // EN: For (b), look at your graph: where is the curve <span class="chem">y = ln x</span> above the line?
        "(b)에서는 그래프를 보세요: 곡선 <span class=\"chem\">y = ln x</span>가 직선보다 위에 있는 곳은 어디인가요?",
      ],
      // EN: <p>(a) The GDC gives intersections at <span class="chem">x ≈ 0.46392</span> and <span class="chem">x ≈ 5.35669</span>, i.e. <span class="chem">x ≈ 0.464</span> and <span class="chem">x ≈ 5.36</span>.<br>(b) At <span class="chem">x = 1</span>, <span class="chem">ln 1 = 0 &gt; -0.5</span>, so the curve is above the line between the intersections (and below outside them). Hence <span class="chem">0.464 &lt; x &lt; 5.36</span>.</p>
      solution: "<p>(a) GDC로 구한 교점은 <span class=\"chem\">x ≈ 0.46392</span>와 <span class=\"chem\">x ≈ 5.35669</span>, 즉 <span class=\"chem\">x ≈ 0.464</span>와 <span class=\"chem\">x ≈ 5.36</span>이에요.<br>(b) <span class=\"chem\">x = 1</span>에서 <span class=\"chem\">ln 1 = 0 &gt; -0.5</span>이므로 두 교점 사이에서 곡선이 직선보다 위에 있어요 (바깥에서는 아래에 있어요). 따라서 <span class=\"chem\">0.464 &lt; x &lt; 5.36</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">x ≈ 0.464</span> and <span class="chem">x ≈ 5.36</span>; (b) <span class="chem">0.464 &lt; x &lt; 5.36</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x ≈ 0.464</span>와 <span class=\"chem\">x ≈ 5.36</span>; (b) <span class=\"chem\">0.464 &lt; x &lt; 5.36</span>.</p>",
      markscheme: [
        // EN: M1: Graphs y = ln x and y = 0.5x − 1 (or finds the zeros of ln x − 0.5x + 1) on the GDC.
        "M1: GDC로 y = ln x와 y = 0.5x − 1의 그래프를 그림 (또는 ln x − 0.5x + 1의 영점을 구함).",
        // EN: A1: x ≈ 0.464.
        "A1: x ≈ 0.464.",
        // EN: A1: x ≈ 5.36.
        "A1: x ≈ 5.36.",
        // EN: M1: Identifies that the logarithm graph lies above the line between the intersections.
        "M1: 두 교점 사이에서 로그함수의 그래프가 직선보다 위에 있음을 파악함.",
        // EN: A1: 0.464 < x < 5.36.
        "A1: 0.464 < x < 5.36.",
      ],
    },

    // ── t2-2-q055 · numeric · exam · SL · SL 2.8, 2.10 · 3 marks
    "t2-2-q055": {
      // EN: <p>Solve the equation <span class="chem">(2x + 1)/(x - 1) = e^{0.5x}</span> for <span class="chem">x &gt; 1</span>, giving your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x &gt; 1</span>에서 방정식 <span class=\"chem\">(2x + 1)/(x - 1) = e^{0.5x}</span>를 풀고 (Solve), 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Graph <span class="chem">y = (2x + 1)/(x - 1)</span> and <span class="chem">y = e^{0.5x}</span>. The rational graph has a vertical asymptote at <span class="chem">x = 1</span>, so look to the right of it.
        "<span class=\"chem\">y = (2x + 1)/(x - 1)</span>와 <span class=\"chem\">y = e^{0.5x}</span>의 그래프를 그리세요. 유리함수의 그래프는 <span class=\"chem\">x = 1</span>에 수직점근선이 있으므로 그 오른쪽을 보세요.",
        // EN: For <span class="chem">x &gt; 1</span> the rational function decreases towards <span class="chem">2</span> while the exponential increases, so there is exactly one intersection there.
        "<span class=\"chem\">x &gt; 1</span>에서 유리함수는 <span class=\"chem\">2</span>를 향해 감소하고 지수함수는 증가하므로, 그곳에서 교점은 정확히 하나예요.",
      ],
      // EN: <p>The GDC intersection of <span class="chem">Y_1 = (2x + 1)/(x - 1)</span> and <span class="chem">Y_2 = e^{0.5x}</span> on <span class="chem">x &gt; 1</span> is at <span class="chem">x ≈ 2.6688</span>, so <span class="chem">x = 2.67</span>. (There is another intersection with <span class="chem">x &lt; 1</span>, which the question excludes.)</p>
      solution: "<p><span class=\"chem\">x &gt; 1</span>에서 <span class=\"chem\">Y_1 = (2x + 1)/(x - 1)</span>와 <span class=\"chem\">Y_2 = e^{0.5x}</span>의 GDC 교점은 <span class=\"chem\">x ≈ 2.6688</span>이므로 <span class=\"chem\">x = 2.67</span>예요. (<span class=\"chem\">x &lt; 1</span>에도 교점이 하나 더 있지만 문제에서 제외돼요.)</p>",
    },

    // ── t2-2-q056 · numeric · exam · SL · SL 2.10 · 2 marks
    "t2-2-q056": {
      // EN: <p>Use your GDC to find the number of real solutions of the equation <span class="chem">ln x = x^2 - 3x + 1</span>.</p>
      stem: "<p>GDC를 이용하여 방정식 <span class=\"chem\">ln x = x^2 - 3x + 1</span>의 실근의 개수를 구하시오 (Find).</p>",
      hints: [
        // EN: Graph both sides. Remember that <span class="chem">ln x</span> exists only for <span class="chem">x &gt; 0</span>, and zoom out enough to see the whole picture.
        "양변의 그래프를 그리세요. <span class=\"chem\">ln x</span>는 <span class=\"chem\">x &gt; 0</span>에서만 존재한다는 것을 기억하고, 전체 모습이 보이도록 충분히 축소하세요.",
        // EN: The parabola has its vertex at <span class="chem">x = 1.5</span>; it is above <span class="chem">ln x</span> near <span class="chem">x = 0</span> and again for large <span class="chem">x</span>.
        "포물선의 꼭짓점은 <span class=\"chem\">x = 1.5</span>에 있어요. 포물선은 <span class=\"chem\">x = 0</span> 근처에서 <span class=\"chem\">ln x</span>보다 위에 있고, <span class=\"chem\">x</span>가 클 때 다시 위에 있어요.",
      ],
      // EN: <p>Graphing <span class="chem">y = ln x</span> and <span class="chem">y = x^2 - 3x + 1</span> shows intersections at <span class="chem">x ≈ 0.621</span> and <span class="chem">x ≈ 3.04</span>. The parabola is above the curve for <span class="chem">0 &lt; x &lt; 0.621</span> and for <span class="chem">x &gt; 3.04</span>, and below it in between, so there are <strong>2</strong> real solutions.</p>
      solution: "<p><span class=\"chem\">y = ln x</span>와 <span class=\"chem\">y = x^2 - 3x + 1</span>의 그래프를 그리면 교점은 <span class=\"chem\">x ≈ 0.621</span>과 <span class=\"chem\">x ≈ 3.04</span>이에요. 포물선은 <span class=\"chem\">0 &lt; x &lt; 0.621</span>과 <span class=\"chem\">x &gt; 3.04</span>에서 곡선보다 위에 있고 그 사이에서는 아래에 있으므로, 실근은 <strong>2</strong>개예요.</p>",
    },

    // ── t2-2-q057 · numeric · exam · SL · SL 2.9, 2.10 · 3 marks
    "t2-2-q057": {
      // EN: <p>Tank A contains <span class="chem">500</span> litres of water and starts to leak. The volume left in tank A after <span class="chem">t</span> minutes is <span class="chem">V_A = 500 e^{-0.04t}</span> litres. At the same moment, tank B, which contains <span class="chem">50</span> litres, starts to be filled at <span class="chem">20</span> litres per minute. Find the time at which the two tanks contain the same volume, correct to 3 significant figures.</p>
      stem: "<p>탱크 A에는 물 <span class=\"chem\">500</span>리터가 들어 있고 물이 새기 시작한다. <span class=\"chem\">t</span>분 후 탱크 A에 남은 양은 <span class=\"chem\">V_A = 500 e^{-0.04t}</span>리터이다. 같은 순간, 물 <span class=\"chem\">50</span>리터가 들어 있는 탱크 B에 분당 <span class=\"chem\">20</span>리터씩 물을 채우기 시작한다. 두 탱크에 든 물의 양이 같아지는 시각을 구하고 (Find), 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Decode: write the volume of tank B as a linear function, <span class="chem">V_B = 50 + 20t</span>, then solve <span class="chem">V_A = V_B</span>.
        "해석: 탱크 B의 양을 일차함수 <span class=\"chem\">V_B = 50 + 20t</span>로 나타낸 다음 <span class=\"chem\">V_A = V_B</span>를 푸세요.",
        // EN: An equation mixing <span class="chem">e^{-0.04t}</span> and <span class="chem">t</span> needs the GDC: intersect the two graphs.
        "<span class=\"chem\">e^{-0.04t}</span>와 <span class=\"chem\">t</span>가 섞인 방정식은 GDC가 필요해요: 두 그래프의 교점을 구하세요.",
      ],
      // EN: <p><span class="chem">500 e^{-0.04t} = 50 + 20t</span>. The GDC intersection is at <span class="chem">t ≈ 12.602</span>, so the volumes are equal after <span class="chem">12.6</span> minutes (both about <span class="chem">302</span> litres).</p>
      solution: "<p><span class=\"chem\">500 e^{-0.04t} = 50 + 20t</span>. GDC로 구한 교점은 <span class=\"chem\">t ≈ 12.602</span>이므로 <span class=\"chem\">12.6</span>분 후에 양이 같아져요 (둘 다 약 <span class=\"chem\">302</span>리터).</p>",
    },

    // ── t2-2-q058 · numeric · exam · SL · SL 2.8, 2.10 · 3 marks
    "t2-2-q058": {
      // EN: <p>The graphs of <span class="chem">y = (3x - 2)/(x + 1)</span> and <span class="chem">y = 0.5x^2 - 1.8</span> intersect at three points. Find the <span class="chem">x</span>-coordinate of the point of intersection with <span class="chem">x &gt; 1</span>, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">y = (3x - 2)/(x + 1)</span>와 <span class=\"chem\">y = 0.5x^2 - 1.8</span>의 그래프는 세 점에서 만난다. <span class=\"chem\">x &gt; 1</span>인 교점의 <span class=\"chem\">x</span>좌표를 구하고 (Find), 유효숫자 3자리까지 답하시오.</p>",
      hints: [
        // EN: Graph both functions. The rational graph has a vertical asymptote at <span class="chem">x = -1</span>; the GDC may draw a false near-vertical line there, which is not an intersection.
        "두 함수의 그래프를 그리세요. 유리함수의 그래프는 <span class=\"chem\">x = -1</span>에 수직점근선이 있어요. GDC가 그곳에 거의 수직인 가짜 선을 그릴 수 있는데, 그것은 교점이 아니에요.",
        // EN: Use the intersect tool with a starting guess near <span class="chem">x = 2.5</span>.
        "교점 기능을 쓰고 시작 추정값을 <span class=\"chem\">x = 2.5</span> 근처로 잡으세요.",
      ],
      // EN: <p>The graphs intersect at <span class="chem">x ≈ -3.656</span>, <span class="chem">x ≈ 0.0419</span> and <span class="chem">x ≈ 2.6140</span>. The one with <span class="chem">x &gt; 1</span> is <span class="chem">x = 2.61</span> (3 s.f.).</p>
      solution: "<p>두 그래프는 <span class=\"chem\">x ≈ -3.656</span>, <span class=\"chem\">x ≈ 0.0419</span>, <span class=\"chem\">x ≈ 2.6140</span>에서 만나요. <span class=\"chem\">x &gt; 1</span>인 것은 <span class=\"chem\">x = 2.61</span> (3 s.f.)예요.</p>",
    },

    // ── t2-2-q059 · short · challenge · SL · SL 2.8, 2.9, 2.10 · 9 marks
    "t2-2-q059": {
      // EN: <p>Two students learn to touch-type. Their typing speeds, in words per minute, <span class="chem">t</span> weeks after starting are modelled by<br>Asha: <span class="chem">A(t) = (75t + 20)/(t + 4)</span> &nbsp; and &nbsp; Ben: <span class="chem">B(t) = 82(1 - e^{-0.15t})</span>, for <span class="chem">t &gt;= 0</span>.<br>(a) Write down each student's typing speed when they start. <strong>[2 marks]</strong><br>(b) Write down the speed that each student's model approaches in the long term. <strong>[2 marks]</strong><br>(c) Find the time when the two students type at the same speed. <strong>[2 marks]</strong><br>(d) Each student aims to reach <span class="chem">60</span> words per minute. Find how many weeks longer Asha takes than Ben to reach this target. <strong>[3 marks]</strong></p>
      stem: "<p>두 학생이 타자 연습을 한다. 시작한 지 <span class=\"chem\">t</span>주 후 두 학생의 타자 속도(분당 단어 수)는 다음과 같이 모델링된다.<br>아샤: <span class=\"chem\">A(t) = (75t + 20)/(t + 4)</span> &nbsp; 그리고 &nbsp; 벤: <span class=\"chem\">B(t) = 82(1 - e^{-0.15t})</span>, 단 <span class=\"chem\">t &gt;= 0</span>.<br>(a) 시작할 때 각 학생의 타자 속도를 쓰시오 (Write down). <strong>[2 marks]</strong><br>(b) 각 학생의 모델이 장기적으로 가까워지는 속도를 쓰시오 (Write down). <strong>[2 marks]</strong><br>(c) 두 학생의 타자 속도가 같아지는 시각을 구하시오 (Find). <strong>[2 marks]</strong><br>(d) 두 학생 모두 분당 <span class=\"chem\">60</span>단어에 도달하는 것을 목표로 한다. 이 목표에 도달하는 데 아샤가 벤보다 몇 주 더 걸리는지 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: one model is linear-over-linear (horizontal asymptote = ratio of the <span class="chem">t</span>-coefficients); the other is exponential (as <span class="chem">t -&gt; infty</span>, <span class="chem">e^{-0.15t} -&gt; 0</span>). "When they start" means <span class="chem">t = 0</span>; "in the long term" means the asymptotes.
        "해석: 한 모델은 일차식 ÷ 일차식(수평점근선 = <span class=\"chem\">t</span>의 계수의 비)이고, 다른 하나는 지수 모델이에요 (<span class=\"chem\">t -&gt; infty</span>일 때 <span class=\"chem\">e^{-0.15t} -&gt; 0</span>). \"시작할 때\"는 <span class=\"chem\">t = 0</span>을, \"장기적으로\"는 점근선을 뜻해요.",
        // EN: For (c), graph both models for <span class="chem">0 &lt;= t &lt;= 30</span> and use the intersect tool.
        "(c)에서는 <span class=\"chem\">0 &lt;= t &lt;= 30</span>에서 두 모델의 그래프를 그리고 교점 기능을 쓰세요.",
        // EN: For (d), solve <span class="chem">A(t) = 60</span> and <span class="chem">B(t) = 60</span> separately, then subtract. Asha's equation can be solved by hand.
        "(d)에서는 <span class=\"chem\">A(t) = 60</span>과 <span class=\"chem\">B(t) = 60</span>을 따로 푼 다음 빼세요. 아샤의 방정식은 손으로 풀 수 있어요.",
      ],
      // EN: <p><strong>Decode:</strong> start values come from <span class="chem">t = 0</span>, long-term values from the horizontal asymptotes, and "same speed" from the intersection of the two graphs.</p><p>(a) <span class="chem">A(0) = 20/4 = 5</span>; <span class="chem">B(0) = 82(1 - 1) = 0</span>.<br>(b) <span class="chem">A(t) -&gt; 75/1 = 75</span>; <span class="chem">B(t) -&gt; 82</span> because <span class="chem">e^{-0.15t} -&gt; 0</span>.<br>(c) The GDC intersection for <span class="chem">t &gt; 0</span> is at <span class="chem">t ≈ 5.27</span> weeks (Asha is faster before this, Ben after).<br>(d) Asha: <span class="chem">75t + 20 = 60t + 240 => t = 220/15 ≈ 14.667</span>. Ben: <span class="chem">e^{-0.15t} = 22/82 => t = ln(82/22)/0.15 ≈ 8.771</span>. Asha takes <span class="chem">14.667 - 8.771 ≈ 5.90</span> weeks longer.</p>
      solution: "<p><strong>해석:</strong> 처음 값은 <span class=\"chem\">t = 0</span>에서, 장기적인 값은 수평점근선에서, \"같은 속도\"는 두 그래프의 교점에서 나와요.</p><p>(a) <span class=\"chem\">A(0) = 20/4 = 5</span>; <span class=\"chem\">B(0) = 82(1 - 1) = 0</span>.<br>(b) <span class=\"chem\">A(t) -&gt; 75/1 = 75</span>; <span class=\"chem\">e^{-0.15t} -&gt; 0</span>이므로 <span class=\"chem\">B(t) -&gt; 82</span>.<br>(c) <span class=\"chem\">t &gt; 0</span>에서 GDC 교점은 <span class=\"chem\">t ≈ 5.27</span>주예요 (그 전에는 아샤가, 그 후에는 벤이 더 빨라요).<br>(d) 아샤: <span class=\"chem\">75t + 20 = 60t + 240 => t = 220/15 ≈ 14.667</span>. 벤: <span class=\"chem\">e^{-0.15t} = 22/82 => t = ln(82/22)/0.15 ≈ 8.771</span>. 아샤가 <span class=\"chem\">14.667 - 8.771 ≈ 5.90</span>주 더 걸려요.</p>",
      // EN: <p>(a) Asha <span class="chem">5</span> wpm, Ben <span class="chem">0</span> wpm; (b) Asha <span class="chem">75</span> wpm, Ben <span class="chem">82</span> wpm; (c) <span class="chem">t ≈ 5.27</span> weeks; (d) Asha <span class="chem">14.67</span> weeks, Ben <span class="chem">8.77</span> weeks: <span class="chem">5.90</span> weeks longer.</p>
      answer: "<p>(a) 아샤 <span class=\"chem\">5</span> wpm, 벤 <span class=\"chem\">0</span> wpm; (b) 아샤 <span class=\"chem\">75</span> wpm, 벤 <span class=\"chem\">82</span> wpm; (c) <span class=\"chem\">t ≈ 5.27</span>주; (d) 아샤 <span class=\"chem\">14.67</span>주, 벤 <span class=\"chem\">8.77</span>주: <span class=\"chem\">5.90</span>주 더 김.</p>",
      markscheme: [
        // EN: A1: A(0) = 20/4 = 5 words per minute.
        "A1: A(0) = 20/4 = 분당 5단어.",
        // EN: A1: B(0) = 82(1 − 1) = 0 words per minute.
        "A1: B(0) = 82(1 − 1) = 분당 0단어.",
        // EN: A1: Asha approaches 75 (horizontal asymptote 75/1).
        "A1: 아샤는 75에 가까워짐 (수평점근선 75/1).",
        // EN: A1: Ben approaches 82 (since e^(−0.15t) → 0).
        "A1: 벤은 82에 가까워짐 (e^(−0.15t) → 0이므로).",
        // EN: M1: Solves A(t) = B(t) using the GDC (intersection for t > 0).
        "M1: GDC를 이용해 A(t) = B(t)를 풂 (t > 0인 교점).",
        // EN: A1: t ≈ 5.27 weeks.
        "A1: t ≈ 5.27주.",
        // EN: M1: Sets A(t) = 60 and B(t) = 60 and solves each (by hand or GDC).
        "M1: A(t) = 60과 B(t) = 60으로 놓고 각각 풂 (손으로 또는 GDC).",
        // EN: A1: Asha t = 44/3 ≈ 14.67 weeks (75t + 20 = 60t + 240) and Ben t = ln(82/22)/0.15 ≈ 8.77 weeks.
        "A1: 아샤 t = 44/3 ≈ 14.67주 (75t + 20 = 60t + 240), 벤 t = ln(82/22)/0.15 ≈ 8.77주.",
        // EN: A1: Difference ≈ 5.90 weeks.
        "A1: 차 ≈ 5.90주.",
      ],
    },

    // ── t2-2-q060 · short · challenge · SL · SL 2.9, 2.10 · 8 marks
    "t2-2-q060": {
      // EN: <p>Mia buys a car for <span class="chem">$28 000</span> with a loan. The value of the car <span class="chem">t</span> years after purchase is modelled by <span class="chem">V(t) = 28000(0.82)^t</span>. The amount she still owes on the loan is modelled by <span class="chem">D(t) = 26500 - 2900t</span>, until the loan is paid off. A car loan is described as "under water" when the amount owed is more than the value of the car.<br>(a) Find the value of the car after 3 years, to the nearest dollar. <strong>[2 marks]</strong><br>(b) Find the set of values of <span class="chem">t</span> for which Mia's loan is under water. <strong>[4 marks]</strong><br>(c) Find the greatest amount by which the debt exceeds the value of the car, to the nearest dollar. <strong>[2 marks]</strong></p>
      stem: "<p>미아는 대출을 받아 <span class=\"chem\">$28 000</span>에 자동차를 산다. 구입한 지 <span class=\"chem\">t</span>년 후 자동차의 가치는 <span class=\"chem\">V(t) = 28000(0.82)^t</span>로 모델링된다. 대출을 다 갚을 때까지 미아가 아직 갚아야 할 금액은 <span class=\"chem\">D(t) = 26500 - 2900t</span>로 모델링된다. 갚아야 할 금액이 자동차의 가치보다 클 때 그 자동차 대출을 \"언더워터(under water)\"라고 한다.<br>(a) 3년 후 자동차의 가치를 달러 단위로 반올림하여 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 미아의 대출이 언더워터인 <span class=\"chem\">t</span>의 값의 범위를 구하시오 (Find). <strong>[4 marks]</strong><br>(c) 부채가 자동차의 가치를 초과하는 금액의 최댓값을 달러 단위로 반올림하여 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "under water" is defined in the stem: debt <span class="chem">&gt;</span> value, i.e. <span class="chem">D(t) &gt; V(t)</span>. That is an inequality between a linear and an exponential function, so you need the GDC intersections.
        "해석: \"언더워터\"는 문제에 정의되어 있어요: 부채 <span class=\"chem\">&gt;</span> 가치, 즉 <span class=\"chem\">D(t) &gt; V(t)</span>. 이것은 일차함수와 지수함수 사이의 부등식이므로 GDC로 교점을 구해야 해요.",
        // EN: Graph <span class="chem">Y_1 = 26500 - 2900x</span> and <span class="chem">Y_2 = 28000(0.82)^x</span> for <span class="chem">0 &lt;= x &lt;= 9</span>. There are two intersections.
        "<span class=\"chem\">0 &lt;= x &lt;= 9</span>에서 <span class=\"chem\">Y_1 = 26500 - 2900x</span>와 <span class=\"chem\">Y_2 = 28000(0.82)^x</span>의 그래프를 그리세요. 교점이 두 개 있어요.",
        // EN: For (c), graph <span class="chem">Y_3 = Y_1 - Y_2</span> and find its maximum. The greatest gap is not at either intersection.
        "(c)에서는 <span class=\"chem\">Y_3 = Y_1 - Y_2</span>의 그래프를 그리고 그 최댓값을 구하세요. 차이가 가장 큰 곳은 어느 교점도 아니에요.",
      ],
      // EN: <p><strong>Decode:</strong> translate the definition "under water" into the inequality <span class="chem">D(t) &gt; V(t)</span>, solve it graphically, and turn "greatest amount by which the debt exceeds the value" into the maximum of <span class="chem">D - V</span>.</p><p>(a) <span class="chem">V(3) = 28000(0.82)^3 ≈ 15438.30</span>, so about <span class="chem">$15 438</span>.<br>(b) At <span class="chem">t = 0</span>, <span class="chem">D = 26500 &lt; 28000 = V</span>. The graphs intersect at <span class="chem">t ≈ 0.648</span> and <span class="chem">t ≈ 6.457</span>, and <span class="chem">D &gt; V</span> between them, so the loan is under water for <span class="chem">0.648 &lt; t &lt; 6.46</span>.<br>(c) The maximum of <span class="chem">D(t) - V(t)</span> is about <span class="chem">2384.15</span> at <span class="chem">t ≈ 3.28</span>, so the greatest excess is <span class="chem">$2384</span>.</p>
      solution: "<p><strong>해석:</strong> \"언더워터\"의 정의를 부등식 <span class=\"chem\">D(t) &gt; V(t)</span>로 바꾸어 그래프로 풀고, \"부채가 가치를 초과하는 금액의 최댓값\"을 <span class=\"chem\">D - V</span>의 최댓값으로 바꿔요.</p><p>(a) <span class=\"chem\">V(3) = 28000(0.82)^3 ≈ 15438.30</span>이므로 약 <span class=\"chem\">$15 438</span>예요.<br>(b) <span class=\"chem\">t = 0</span>일 때 <span class=\"chem\">D = 26500 &lt; 28000 = V</span>이에요. 두 그래프는 <span class=\"chem\">t ≈ 0.648</span>과 <span class=\"chem\">t ≈ 6.457</span>에서 만나고 그 사이에서 <span class=\"chem\">D &gt; V</span>이므로, 대출은 <span class=\"chem\">0.648 &lt; t &lt; 6.46</span>에서 언더워터예요.<br>(c) <span class=\"chem\">D(t) - V(t)</span>의 최댓값은 <span class=\"chem\">t ≈ 3.28</span>에서 약 <span class=\"chem\">2384.15</span>이므로, 초과 금액의 최댓값은 <span class=\"chem\">$2384</span>예요.</p>",
      // EN: <p>(a) <span class="chem">$15 438</span>; (b) <span class="chem">0.648 &lt; t &lt; 6.46</span>; (c) <span class="chem">$2384</span> (at <span class="chem">t ≈ 3.28</span>).</p>
      answer: "<p>(a) <span class=\"chem\">$15 438</span>; (b) <span class=\"chem\">0.648 &lt; t &lt; 6.46</span>; (c) <span class=\"chem\">$2384</span> (<span class=\"chem\">t ≈ 3.28</span>일 때).</p>",
      markscheme: [
        // EN: M1: Substitutes t = 3: 28000 × 0.82³.
        "M1: t = 3을 대입함: 28000 × 0.82³.",
        // EN: A1: $15 438 (15 438.30…).
        "A1: $15 438 (15 438.30…).",
        // EN: M1: Sets up D(t) > V(t), i.e. 26500 − 2900t > 28000(0.82)^t, and graphs both functions (or their difference).
        "M1: D(t) > V(t), 즉 26500 − 2900t > 28000(0.82)^t를 세우고 두 함수(또는 그 차)의 그래프를 그림.",
        // EN: A1: First intersection t ≈ 0.648.
        "A1: 첫 번째 교점 t ≈ 0.648.",
        // EN: A1: Second intersection t ≈ 6.46.
        "A1: 두 번째 교점 t ≈ 6.46.",
        // EN: A1: Under water for 0.648 < t < 6.46.
        "A1: 0.648 < t < 6.46에서 언더워터.",
        // EN: M1: Maximises D(t) − V(t) on the GDC (maximum of the difference graph).
        "M1: GDC로 D(t) − V(t)를 최대화함 (차의 그래프의 최댓값).",
        // EN: A1: Greatest excess ≈ $2384 (at t ≈ 3.28).
        "A1: 초과 금액의 최댓값 ≈ $2384 (t ≈ 3.28일 때).",
      ],
    },

  }
});
