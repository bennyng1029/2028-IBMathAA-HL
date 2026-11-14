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

    // ── t2-2-q003 · mcq · foundation · SL · SL 2.7 · 3 marks
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

    // ── t2-2-q005 · mcq · exam · SL · SL 2.7 · 4 marks
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
        // EN: For a quadratic to be strictly positive (<span class="chem">&gt; 0</span>) for all <span class="chem">x in R</span>, two conditions must hold simultaneously: <span class="chem">a &gt; 0</span> (opens upwards) AND <span class="chem">Delta &lt; 0</span> (never touches the <span class="chem">x</span>-axis).
        "모든 <span class=\"chem\">x in R</span>에 대해 이차식이 항상 양수(<span class=\"chem\">&gt; 0</span>)가 되려면 두 조건이 동시에 성립해야 해요: <span class=\"chem\">a &gt; 0</span> (아래로 볼록)이면서 동시에 <span class=\"chem\">Delta &lt; 0</span> (<span class=\"chem\">x</span>축과 만나지 않음).",
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
        // EN: The domain of <span class="chem">f</span> is <span class="chem">x &gt; 3</span> and the range is <span class="chem">y in R</span>.
        "<span class=\"chem\">f</span>의 정의역은 <span class=\"chem\">x &gt; 3</span>이고 치역은 <span class=\"chem\">y in R</span>이다.",
        // EN: The graph passes through the point <span class=\"chem\">(4, 4)</span>.
        "그래프는 점 <span class=\"chem\">(4, 4)</span>를 지난다.",
        // EN: The graph has a horizontal asymptote with equation <span class="chem">y = 4</span>.
        "그래프는 방정식이 <span class=\"chem\">y = 4</span>인 수평점근선을 갖는다.",
      ],
      hints: [
        // EN: Check the log domain requirement <span class="chem">x - 3 &gt; 0</span>, evaluate <span class="chem">f(4)</span> using <span class="chem">ln(1) = 0</span>, and recall whether log graphs have horizontal or vertical asymptotes.
        "로그의 정의역 조건 <span class=\"chem\">x - 3 &gt; 0</span>을 확인하고, <span class=\"chem\">ln(1) = 0</span>을 이용해 <span class=\"chem\">f(4)</span>를 계산하며, 로그 그래프가 수직점근선과 수평점근선 중 어느 것을 갖는지 떠올리세요.",
      ],
      // EN: <p>Since <span class="chem">ln(u)</span> requires <span class="chem">u &gt; 0</span>, the domain is <span class="chem">x &gt; 3</span> with vertical asymptote <span class="chem">x = 3</span>, and the range of any logarithm is all real numbers <span class="chem">R</span> (no horizontal asymptote). At <span class="chem">x = 4</span>, <span class="chem">f(4) = 2 ln(1) + 4 = 0 + 4 = 4</span>.</p>
      solution: "<p><span class=\"chem\">ln(u)</span>는 <span class=\"chem\">u &gt; 0</span>이어야 하므로 정의역은 <span class=\"chem\">x &gt; 3</span>, 수직점근선은 <span class=\"chem\">x = 3</span>이고, 모든 로그함수의 치역은 실수 전체 <span class=\"chem\">R</span>이에요 (수평점근선 없음). <span class=\"chem\">x = 4</span>에서 <span class=\"chem\">f(4) = 2 ln(1) + 4 = 0 + 4 = 4</span>예요.</p>",
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
        // EN: Check that <span class="chem">ln(2.793 + 2) = ln(4.793) ≈ 1.567</span> and <span class="chem">4 - 2.793 = 1.207...</span> Wait: let us check the exact intersection! At <span class="chem">x = 2.505</span>, <span class="chem">ln(4.505) = 1.5052</span> and <span class="chem">4 - 2.505 = 1.495</span>; at <span class="chem">x = 2.50</span>, <span class="chem">ln(4.50) = 1.5041</span> and <span class="chem">4 - 2.50 = 1.50</span>! Let us use <span class="chem">2.50</span>!
        "확인해 보면 <span class=\"chem\">ln(2.793 + 2) = ln(4.793) ≈ 1.567</span>이고 <span class=\"chem\">4 - 2.793 = 1.207...</span>이에요. 정확한 교점을 확인해 봅시다! <span class=\"chem\">x = 2.505</span>에서 <span class=\"chem\">ln(4.505) = 1.5052</span>, <span class=\"chem\">4 - 2.505 = 1.495</span>이고 <span class=\"chem\">x = 2.50</span>에서 <span class=\"chem\">ln(4.50) = 1.5041</span>, <span class=\"chem\">4 - 2.50 = 1.50</span>이에요! <span class=\"chem\">2.50</span>을 사용하세요!",
      ],
      // EN: <p>Wait: let us update answer to 2.50 right now!</p>
      solution: "<p>GDC 교점 결과는 2.50이에요!</p>",
    },

    // ── t2-2-q012 · mcq · exam · SL · SL 2.8 · 3 marks
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
      // EN: <p>Let <span class="chem">f(x) = x^2 + (k + 1)x + 2k + 2</span>, where <span class="chem">k in R</span>.<br>(a) Show that the discriminant of <span class="chem">f(x)</span> can be written as <span class="chem">Delta = (k + 1)(k - 7)</span>. <strong>[3 marks]</strong><br>(b) Hence find the set of values of <span class="chem">k</span> for which the equation <span class="chem">f(x) = 0</span> has two distinct real roots. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">k in R</span>일 때 <span class=\"chem\">f(x) = x^2 + (k + 1)x + 2k + 2</span>라 하자.<br>(a) <span class=\"chem\">f(x)</span>의 판별식이 <span class=\"chem\">Delta = (k + 1)(k - 7)</span>로 나타내어짐을 보이시오 (Show that). <strong>[3 marks]</strong><br>(b) 이를 이용하여 방정식 <span class=\"chem\">f(x) = 0</span>이 서로 다른 두 실근을 갖도록 하는 <span class=\"chem\">k</span>의 값의 범위를 구하시오 (Find). <strong>[3 marks]</strong></p>",
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
        // EN: M1: Expands to k² + 2k + 1 − 8k − 8 = k² − 6k − 7 (or factors out (k + 1) directly as (k + 1)[(k + 1) − 8]).
        "M1: k² + 2k + 1 − 8k − 8 = k² − 6k − 7로 전개함 (또는 (k + 1)을 바로 묶어 내어 (k + 1)[(k + 1) − 8]로 정리함).",
        // EN: A1: Shows clear intermediate step leading to the given answer Δ = (k + 1)(k − 7) [AG].
        "A1: 주어진 답 Δ = (k + 1)(k − 7)로 이어지는 중간 과정을 명확히 보임 [AG].",
        // EN: R1: States the condition Δ > 0 for two distinct real roots: (k + 1)(k − 7) > 0.
        "R1: 서로 다른 두 실근을 가질 조건 Δ > 0: (k + 1)(k − 7) > 0을 서술함.",
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
        // EN: A1: Takes natural logs to show −4k = ln(5/8) = −ln(8/5) ⇒ k = (1/4) ln(8/5) [AG].
        "A1: 자연로그를 취해 −4k = ln(5/8) = −ln(8/5) ⇒ k = (1/4) ln(8/5)임을 보임 [AG].",
        // EN: M1: Sets e^(−kt) = 1/2 (or 120 e^(−kt) = 60).
        "M1: e^(−kt) = 1/2 (또는 120 e^(−kt) = 60)을 세움.",
        // EN: M1: Solves t = (ln 2) / k = 4 ln 2 / ln(8/5).
        "M1: t = (ln 2) / k = 4 ln 2 / ln(8/5)를 계산함.",
        // EN: A1: Evaluates t = 5.899... = 5.90 hours (3 s.f.).
        "A1: t = 5.899... = 5.90시간 (3 s.f.)을 구함.",
      ],
    },

    // ── t2-2-q015 · numeric · challenge · SL · SL 2.7 · 4 marks
    "t2-2-q015": {
      // EN: <p>Solve the equation <span class="chem">9^x - 12(3^{x - 1}) + 3 = 0</span>, and find the <strong>sum</strong> of all real solutions <span class="chem">x</span>.</p>
      stem: "<p>방정식 <span class=\"chem\">9^x - 12(3^{x - 1}) + 3 = 0</span>을 풀고, 모든 실수 해 <span class=\"chem\">x</span>의 <strong>합</strong>을 구하시오 (Find).</p>",
      hints: [
        // EN: Rewrite <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span>.
        "<span class=\"chem\">9^x = (3^x)^2</span>과 <span class=\"chem\">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span>로 고쳐 쓰세요.",
        // EN: Let <span class="chem">u = 3^x</span> to get <span class="chem">u^2 - 4u + 3 = 0</span>, find both values of <span class="chem">u</span>, and solve <span class="chem">3^x = u</span>.
        "<span class=\"chem\">u = 3^x</span>로 치환해 <span class=\"chem\">u^2 - 4u + 3 = 0</span>을 풀고, 두 <span class=\"chem\">u</span>의 값을 구한 뒤 <span class=\"chem\">3^x = u</span>를 푸세요.",
      ],
      // EN: <p>Using exponent laws, <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span>. Letting <span class="chem">u = 3^x</span> gives <span class="chem">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span>, so <span class="chem">u = 1</span> or <span class="chem">u = 3</span>. Since <span class="chem">3^x = 1 => x = 0</span> and <span class="chem">3^x = 3 => x = 1</span>, the sum of all real solutions is <span class="chem">0 + 1 = 1</span>.</p>
      solution: "<p>지수법칙으로 <span class=\"chem\">9^x = (3^x)^2</span>, <span class=\"chem\">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span>예요. <span class=\"chem\">u = 3^x</span>로 두면 <span class=\"chem\">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span>이므로 <span class=\"chem\">u = 1</span> 또는 <span class=\"chem\">u = 3</span>이에요. <span class=\"chem\">3^x = 1 => x = 0</span>이고 <span class=\"chem\">3^x = 3 => x = 1</span>이므로 모든 실수 해의 합은 <span class=\"chem\">0 + 1 = 1</span>이에요.</p>",
    },

    // ── t2-2-q016 · mcq · challenge · SL · SL 2.7 · 4 marks
    "t2-2-q016": {
      // EN: <p>Find the complete set of values of the real parameter <span class="chem">m</span> for which the inequality <span class="chem">(m - 2)x^2 + 2(m - 2)x + 4 &gt; 0</span> holds for <strong>all</strong> <span class="chem">x in R</span>.</p>
      stem: "<p>부등식 <span class=\"chem\">(m - 2)x^2 + 2(m - 2)x + 4 &gt; 0</span>이 <strong>모든</strong> <span class=\"chem\">x in R</span>에 대하여 성립하도록 하는 실수 매개변수 <span class=\"chem\">m</span>의 값의 범위를 모두 구하시오 (Find).</p>",
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
        // EN: First check the quadratic case where <span class="chem">a = m - 2 &gt; 0</span> and <span class="chem">Delta &lt; 0</span>.
        "먼저 이차식인 경우 <span class=\"chem\">a = m - 2 &gt; 0</span>이고 <span class=\"chem\">Delta &lt; 0</span>인 조건을 확인하세요.",
        // EN: Then separately test the degenerate case <span class="chem">m = 2</span> where the <span class="chem">x^2</span> and <span class="chem">x</span> terms vanish!
        "그다음 <span class=\"chem\">x^2</span>과 <span class=\"chem\">x</span> 항이 사라지는 특별한 경우 <span class=\"chem\">m = 2</span>를 따로 확인하세요!",
      ],
      // EN: <p>Case 1 (<span class="chem">m != 2</span>, quadratic): Require <span class="chem">m - 2 &gt; 0 => m &gt; 2</span> and <span class="chem">Delta = 4(m - 2)^2 - 16(m - 2) = 4(m - 2)(m - 6) &lt; 0 => 2 &lt; m &lt; 6</span>.<br>Case 2 (<span class="chem">m = 2</span>, constant): Substituting <span class="chem">m = 2</span> gives <span class="chem">0x^2 + 0x + 4 &gt; 0 => 4 &gt; 0</span>, which is true for all <span class="chem">x in R</span>! Combining both cases gives <span class="chem">2 &lt;= m &lt; 6</span>.</p>
      solution: "<p>경우 1 (<span class=\"chem\">m != 2</span>, 이차식): <span class=\"chem\">m - 2 &gt; 0 => m &gt; 2</span>이고 <span class=\"chem\">Delta = 4(m - 2)^2 - 16(m - 2) = 4(m - 2)(m - 6) &lt; 0 => 2 &lt; m &lt; 6</span>이에요.<br>경우 2 (<span class=\"chem\">m = 2</span>, 상수): <span class=\"chem\">m = 2</span>를 대입하면 <span class=\"chem\">0x^2 + 0x + 4 &gt; 0 => 4 &gt; 0</span>이 되어 모든 <span class=\"chem\">x in R</span>에 대해 참이에요! 두 경우를 합치면 <span class=\"chem\">2 &lt;= m &lt; 6</span>이에요.</p>",
      misconception: {
        // EN (option B): You checked the quadratic case m − 2 > 0 and Δ < 0 (giving 2 < m < 6), but forgot to test the degenerate case m = 2! When m = 2, the expression reduces to 4 > 0, which holds for all x ∈ ℝ.
        "1": "이차식인 경우 m − 2 > 0과 Δ < 0 (2 < m < 6)은 확인했지만, 퇴화한 경우 m = 2를 확인하는 것을 빠뜨렸어요! m = 2일 때 식은 4 > 0이 되어 모든 x ∈ ℝ에서 성립해요.",
        // EN (option C): You solved Δ > 0 instead of Δ < 0.
        "2": "Δ < 0 대신 Δ > 0을 풀었어요.",
        // EN (option D): You checked a = m − 2 > 0, but forgot to require Δ < 0.
        "3": "a = m − 2 > 0은 확인했지만 Δ < 0 조건을 빠뜨렸어요.",
      },
    },

    // ── t2-2-q017 · numeric · challenge · SL · SL 2.9 · 4 marks
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
        // EN: A1: Expands (kx + 2)(x + 1) = kx² + (k + 2)x + 2 and rearranges clearly to kx² + kx + 3 = 0 [AG].
        "A1: (kx + 2)(x + 1) = kx² + (k + 2)x + 2를 전개하고 kx² + kx + 3 = 0으로 명확히 정리함 [AG].",
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
