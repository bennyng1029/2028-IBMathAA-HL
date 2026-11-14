/* t2-2.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't2-2.q', {
  questions: {

    // ── t2-2-q001 · mcq · foundation · SL · SL 2.6 · 2 marks
    "t2-2-q001": {
      // EN: <p>Express the quadratic function <span class="chem">f(x) = 3x^2 - 12x + 7</span> in vertex form <span class="chem">a(x - h)^2 + k</span>.</p>
      stem: "<p>2 次関数 <span class=\"chem\">f(x) = 3x^2 - 12x + 7</span> を頂点形 <span class=\"chem\">a(x - h)^2 + k</span> で表しなさい。</p>",
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
        "最初の 2 項から <span class=\"chem\">3</span> をくくり出します：<span class=\"chem\">3(x^2 - 4x) + 7</span>。",
        // EN: Replace <span class="chem">x^2 - 4x</span> with <span class="chem">(x - 2)^2 - 4</span> and distribute the <span class="chem">3</span>.
        "<span class=\"chem\">x^2 - 4x</span> を <span class=\"chem\">(x - 2)^2 - 4</span> に置き換えて、<span class=\"chem\">3</span> を分配します。",
      ],
      // EN: <p><span class="chem">f(x) = 3(x^2 - 4x) + 7 = 3[(x - 2)^2 - 4] + 7 = 3(x - 2)^2 - 12 + 7 = 3(x - 2)^2 - 5</span>. You can verify the vertex at <span class="chem">x = -(-12)/(2 × 3) = 2</span> and <span class="chem">f(2) = 3(4) - 24 + 7 = -5</span>.</p>
      solution: "<p><span class=\"chem\">f(x) = 3(x^2 - 4x) + 7 = 3[(x - 2)^2 - 4] + 7 = 3(x - 2)^2 - 12 + 7 = 3(x - 2)^2 - 5</span> です。<span class=\"chem\">x = -(-12)/(2 × 3) = 2</span>、および <span class=\"chem\">f(2) = 3(4) - 24 + 7 = -5</span> から頂点を確認できます。</p>",
      misconception: {
        // EN (option B): When completing the square inside 3[(x − 2)² − 4] + 7, you forgot to multiply −4 by the factored 3, subtracting 4 instead of 12.
        "1": "3[(x − 2)² − 4] + 7 の平方完成で、括弧の外に出すときに −4 へくくり出した 3 を掛け忘れ、12 ではなく 4 を引いてしまいました。",
        // EN (option C): You halved −12 to −6 before factoring out 3. Always factor 3 out of 3x² − 12x = 3(x² − 4x) first!
        "2": "3 をくくり出す前に −12 を半分にして −6 にしてしまいました。必ず最初に 3x² − 12x = 3(x² − 4x) のように 3 をくくり出しましょう！",
        // EN (option D): Since the middle term is −12x, the bracket is (x − 2)², not (x + 2)².
        "3": "x の項が −12x なので、括弧の中は (x + 2)² ではなく (x − 2)² です。",
      },
    },

    // ── t2-2-q002 · numeric · foundation · SL · SL 2.6 · 2 marks
    "t2-2-q002": {
      // EN: <p>A parabola has <span class="chem">x</span>-intercepts at <span class="chem">(-3, 0)</span> and <span class="chem">(7, 0)</span>, and passes through the point <span class="chem">(0, -42)</span>. Find the <span class="chem">y</span>-coordinate of its vertex.</p>
      stem: "<p>ある放物線の <span class=\"chem\">x</span> 切片が <span class=\"chem\">(-3, 0)</span> と <span class=\"chem\">(7, 0)</span> であり、点 <span class=\"chem\">(0, -42)</span> を通る。この放物線の頂点の <span class=\"chem\">y</span> 座標を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the quadratic in factored form <span class="chem">y = a(x + 3)(x - 7)</span> and plug in <span class="chem">(0, -42)</span> to find <span class="chem">a</span>.
        "2 次関数を因数分解形 <span class=\"chem\">y = a(x + 3)(x - 7)</span> で表し、<span class=\"chem\">(0, -42)</span> を代入して <span class=\"chem\">a</span> を求めます。",
        // EN: The axis of symmetry is halfway between the roots at <span class="chem">x = (-3 + 7)/2 = 2</span>. Evaluate <span class="chem">y(2)</span>.
        "対称軸は 2 解のちょうど真ん中 <span class=\"chem\">x = (-3 + 7)/2 = 2</span> です。<span class=\"chem\">y(2)</span> を計算します。",
      ],
      // EN: <p>Using factored form <span class="chem">y = a(x + 3)(x - 7)</span>, substituting <span class="chem">(0, -42)</span> gives <span class="chem">-42 = a(3)(-7) = -21a => a = 2</span>. The axis of symmetry is <span class="chem">x = (-3 + 7)/2 = 2</span>, so the vertex <span class="chem">y</span>-coordinate is <span class="chem">y(2) = 2(2 + 3)(2 - 7) = 2(5)(-5) = -50</span>.</p>
      solution: "<p>因数分解形 <span class=\"chem\">y = a(x + 3)(x - 7)</span> に <span class=\"chem\">(0, -42)</span> を代入すると <span class=\"chem\">-42 = a(3)(-7) = -21a => a = 2</span> となります。対称軸は <span class=\"chem\">x = (-3 + 7)/2 = 2</span> なので、頂点の <span class=\"chem\">y</span> 座標は <span class=\"chem\">y(2) = 2(2 + 3)(2 - 7) = 2(5)(-5) = -50</span> です。</p>",
    },

    // ── t2-2-q003 · mcq · foundation · SL · SL 2.7 · 2 marks
    "t2-2-q003": {
      // EN: <p>Solve the quadratic inequality <span class="chem">2x^2 + 3x - 9 &gt;= 0</span>.</p>
      stem: "<p>2 次不等式 <span class=\"chem\">2x^2 + 3x - 9 &gt;= 0</span> を解きなさい。</p>",
      options: [
        // EN: <span class="chem">x &lt;= -3</span> or <span class="chem">x &gt;= 1.5</span>
        "<span class=\"chem\">x &lt;= -3</span> または <span class=\"chem\">x &gt;= 1.5</span>",
        // EN: <span class="chem">-3 &lt;= x &lt;= 1.5</span>
        "<span class=\"chem\">-3 &lt;= x &lt;= 1.5</span>",
        // EN: <span class="chem">x &lt;= -1.5</span> or <span class="chem">x &gt;= 3</span>
        "<span class=\"chem\">x &lt;= -1.5</span> または <span class=\"chem\">x &gt;= 3</span>",
        // EN: <span class="chem">x &gt;= 1.5</span>
        "<span class=\"chem\">x &gt;= 1.5</span>",
      ],
      hints: [
        // EN: Factor <span class="chem">2x^2 + 3x - 9 = (2x - 3)(x + 3)</span> to find the roots <span class="chem">x = -3</span> and <span class="chem">x = 1.5</span>.
        "<span class=\"chem\">2x^2 + 3x - 9 = (2x - 3)(x + 3)</span> と因数分解して、解 <span class=\"chem\">x = -3</span> と <span class=\"chem\">x = 1.5</span> を求めます。",
        // EN: Sketch the upward-opening parabola and identify where it lies on or above the <span class="chem">x</span>-axis.
        "下に凸の放物線の概形を描き、<span class=\"chem\">x</span> 軸上またはそれより上にある範囲を特定します。",
      ],
      // EN: <p>Factoring gives <span class="chem">(2x - 3)(x + 3) &gt;= 0</span>, with roots at <span class="chem">x = -3</span> and <span class="chem">x = 1.5</span>. Since the leading coefficient is positive (<span class="chem">a = 2 &gt; 0</span>), the parabola opens upwards and is <span class="chem">&gt;= 0</span> outside the roots: <span class="chem">x &lt;= -3</span> or <span class="chem">x &gt;= 1.5</span>.</p>
      solution: "<p>因数分解すると <span class=\"chem\">(2x - 3)(x + 3) &gt;= 0</span> となり、解は <span class=\"chem\">x = -3</span> と <span class=\"chem\">x = 1.5</span> です。最高次係数が正（<span class=\"chem\">a = 2 &gt; 0</span>）なので放物線は下に凸であり、解の外側で <span class=\"chem\">&gt;= 0</span> となります：<span class=\"chem\">x &lt;= -3</span> または <span class=\"chem\">x &gt;= 1.5</span>。</p>",
      misconception: {
        // EN (option B): Because a = 2 > 0, the parabola opens upwards, so 2x² + 3x − 9 is ≥ 0 OUTSIDE the roots, not between them.
        "1": "a = 2 > 0 なので放物線は下に凸であり、2x² + 3x − 9 が ≥ 0 になるのは解の内側ではなく外側です。",
        // EN (option C): You flipped the signs of the roots when factoring (2x − 3)(x + 3) = 0; the roots are x = 1.5 and x = −3.
        "2": "(2x − 3)(x + 3) = 0 の解の符号を逆にしてしまいました；解は x = 1.5 と x = −3 です。",
        // EN (option D): You forgot the left branch x ≤ −3 where the parabola also rises above the x-axis.
        "3": "放物線が x 軸より上にある左側の範囲 x ≤ −3 を忘れています。",
      },
    },

    // ── t2-2-q004 · numeric · exam · SL · SL 2.7 · 4 marks
    "t2-2-q004": {
      // EN: <p>The line <span class="chem">y = 2x + k</span> is a tangent to the parabola <span class="chem">y = x^2 - 4x + 7</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>直線 <span class=\"chem\">y = 2x + k</span> が放物線 <span class=\"chem\">y = x^2 - 4x + 7</span> に接している。<span class=\"chem\">k</span> の厳密値（正確な値）を求めなさい (Find)。</p>",
      hints: [
        // EN: Equate <span class="chem">x^2 - 4x + 7 = 2x + k</span> and move all terms to the left: <span class="chem">x^2 - 6x + (7 - k) = 0</span>.
        "<span class=\"chem\">x^2 - 4x + 7 = 2x + k</span> とおいて左辺に集めます：<span class=\"chem\">x^2 - 6x + (7 - k) = 0</span>。",
        // EN: A tangent line touches the parabola at a single repeated root, so set <span class="chem">Delta = (-6)^2 - 4(1)(7 - k) = 0</span>.
        "接線は放物線と 1 つの重解で接するため、<span class=\"chem\">Delta = (-6)^2 - 4(1)(7 - k) = 0</span> とおきます。",
      ],
      // EN: <p>Setting <span class="chem">x^2 - 4x + 7 = 2x + k</span> gives <span class="chem">x^2 - 6x + (7 - k) = 0</span>. Since the line is tangent to the parabola, <span class="chem">Delta = 0</span>: <span class="chem">(-6)^2 - 4(1)(7 - k) = 0 => 36 - 28 + 4k = 0 => 4k = -8 => k = -2</span>.</p>
      solution: "<p><span class=\"chem\">x^2 - 4x + 7 = 2x + k</span> より <span class=\"chem\">x^2 - 6x + (7 - k) = 0</span> です。直線が放物線に接するので <span class=\"chem\">Delta = 0</span>：<span class=\"chem\">(-6)^2 - 4(1)(7 - k) = 0 => 36 - 28 + 4k = 0 => 4k = -8 => k = -2</span>。</p>",
    },

    // ── t2-2-q005 · mcq · exam · SL · SL 2.7 · 2 marks
    "t2-2-q005": {
      // EN: <p>Find the set of values of <span class="chem">k</span> for which the quadratic expression <span class="chem">kx^2 + 6x + k</span> is <strong>strictly positive</strong> (<span class="chem">&gt; 0</span>) for all real values of <span class="chem">x</span>.</p>
      stem: "<p>2 次式 <span class=\"chem\">kx^2 + 6x + k</span> がすべての実数 <span class=\"chem\">x</span> に対して<strong>真に正</strong>（<span class=\"chem\">&gt; 0</span>）となるような <span class=\"chem\">k</span> の値の範囲を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">k &gt; 3</span>
        "<span class=\"chem\">k &gt; 3</span>",
        // EN: <span class="chem">k &lt; -3</span> or <span class="chem">k &gt; 3</span>
        "<span class=\"chem\">k &lt; -3</span> または <span class=\"chem\">k &gt; 3</span>",
        // EN: <span class="chem">-3 &lt; k &lt; 3</span>
        "<span class=\"chem\">-3 &lt; k &lt; 3</span>",
        // EN: <span class="chem">k &gt;= 3</span>
        "<span class=\"chem\">k &gt;= 3</span>",
      ],
      hints: [
        // EN: For a quadratic to be strictly positive (<span class="chem">&gt; 0</span>) for all <span class="chem">x ∈ ℝ</span>, two conditions must hold simultaneously: <span class="chem">a &gt; 0</span> (opens upwards) AND <span class="chem">Delta &lt; 0</span> (never touches the <span class="chem">x</span>-axis).
        "2 次式がすべての <span class=\"chem\">x ∈ ℝ</span> で真に正（<span class=\"chem\">&gt; 0</span>）となるには、2 つの条件が同時に成り立つ必要があります：<span class=\"chem\">a &gt; 0</span>（下に凸）かつ <span class=\"chem\">Delta &lt; 0</span>（<span class=\"chem\">x</span> 軸と交わらない）。",
        // EN: Solve <span class="chem">6^2 - 4(k)(k) &lt; 0</span> and intersect with <span class="chem">k &gt; 0</span>.
        "<span class=\"chem\">6^2 - 4(k)(k) &lt; 0</span> を解き、<span class=\"chem\">k &gt; 0</span> との共通部分をとります。",
      ],
      // EN: <p>We need the parabola to open upwards (<span class="chem">k &gt; 0</span>) and never touch the <span class="chem">x</span>-axis (<span class="chem">Delta &lt; 0</span>). Here <span class="chem">Delta = 36 - 4k^2 &lt; 0 => k^2 &gt; 9 => k &lt; -3</span> or <span class="chem">k &gt; 3</span>. Intersecting with <span class="chem">k &gt; 0</span> leaves <span class="chem">k &gt; 3</span>.</p>
      solution: "<p>放物線が下に凸（<span class=\"chem\">k &gt; 0</span>）であり、かつ <span class=\"chem\">x</span> 軸と交わらない（<span class=\"chem\">Delta &lt; 0</span>）必要があります。<span class=\"chem\">Delta = 36 - 4k^2 &lt; 0 => k^2 &gt; 9 => k &lt; -3</span> または <span class=\"chem\">k &gt; 3</span> です。<span class=\"chem\">k &gt; 0</span> との共通部分をとると <span class=\"chem\">k &gt; 3</span> が残ります。</p>",
      misconception: {
        // EN (option B): Δ < 0 gives k² > 9 (k < −3 or k > 3), but for k < −3 the parabola opens downwards and is always NEGATIVE, not always positive! You must also require a = k > 0.
        "1": "Δ < 0 から k² > 9（k < −3 または k > 3）が出ますが、k < −3 では放物線が上に凸になり常に負になってしまいます！a = k > 0 の条件も必要です。",
        // EN (option C): You solved Δ > 0 (two real roots) instead of Δ < 0 (no real roots).
        "2": "Δ < 0（実数解なし）ではなく Δ > 0（2 つの実数解）を解いてしまいました。",
        // EN (option D): If k = 3, then 3x² + 6x + 3 = 3(x + 1)² equals 0 at x = −1, violating strictly positive (> 0).
        "3": "k = 3 のとき 3x² + 6x + 3 = 3(x + 1)² は x = −1 で 0 になるため、真に正（> 0）を満たしません。",
      },
    },

    // ── t2-2-q006 · mcq · foundation · SL · SL 2.8 · 2 marks
    "t2-2-q006": {
      // EN: <p>What are the equations of the vertical and horizontal asymptotes of the rational function <span class="chem">f(x) = (6 - 2x)/(x + 4)</span>?</p>
      stem: "<p>分数関数 <span class=\"chem\">f(x) = (6 - 2x)/(x + 4)</span> の鉛直漸近線と水平漸近線の方程式はどれですか？</p>",
      options: [
        // EN: Vertical asymptote: <span class="chem">x = -4</span>; Horizontal asymptote: <span class="chem">y = -2</span>
        "鉛直漸近線：<span class=\"chem\">x = -4</span>；水平漸近線：<span class=\"chem\">y = -2</span>",
        // EN: Vertical asymptote: <span class="chem">x = -4</span>; Horizontal asymptote: <span class="chem">y = 6</span>
        "鉛直漸近線：<span class=\"chem\">x = -4</span>；水平漸近線：<span class=\"chem\">y = 6</span>",
        // EN: Vertical asymptote: <span class="chem">x = 4</span>; Horizontal asymptote: <span class="chem">y = -2</span>
        "鉛直漸近線：<span class=\"chem\">x = 4</span>；水平漸近線：<span class=\"chem\">y = -2</span>",
        // EN: Vertical asymptote: <span class="chem">x = 3</span>; Horizontal asymptote: <span class=\"chem\">y = -4</span>
        "鉛直漸近線：<span class=\"chem\">x = 3</span>；水平漸近線：<span class=\"chem\">y = -4</span>",
      ],
      hints: [
        // EN: Write the numerator in standard descending order <span class="chem">f(x) = (-2x + 6)/(x + 4)</span> so you do not misread <span class="chem">a</span>!
        "<span class=\"chem\">a</span> を読み間違えないよう、分子を降べきの順に <span class=\"chem\">f(x) = (-2x + 6)/(x + 4)</span> と書き直しましょう！",
      ],
      // EN: <p>Rewriting <span class="chem">f(x) = (-2x + 6)/(x + 4)</span>: the denominator is zero when <span class="chem">x + 4 = 0 => x = -4</span> (vertical asymptote), and the ratio of <span class="chem">x</span>-coefficients is <span class="chem">-2/1 = -2 => y = -2</span> (horizontal asymptote).</p>
      solution: "<p><span class=\"chem\">f(x) = (-2x + 6)/(x + 4)</span> と書き直すと、分母が 0 になるのは <span class=\"chem\">x + 4 = 0 => x = -4</span>（鉛直漸近線）、<span class=\"chem\">x</span> の係数の比は <span class=\"chem\">-2/1 = -2 => y = -2</span>（水平漸近線）となります。</p>",
      misconception: {
        // EN (option B): Watch the order of terms in the numerator 6 − 2x = −2x + 6! The leading x-coefficient is −2 (not 6), so y = −2/1 = −2.
        "1": "分子の項の順番 6 − 2x = −2x + 6 に注意しましょう！x の係数は 6 ではなく −2 なので、y = −2/1 = −2 です。",
        // EN (option C): Setting the denominator x + 4 = 0 gives x = −4, not x = +4.
        "2": "分母 x + 4 = 0 を解くと x = +4 ではなく x = −4 です。",
        // EN (option D): Setting the numerator 6 − 2x = 0 gives the x-intercept x = 3, not the vertical asymptote.
        "3": "分子 6 − 2x = 0 を解くと得られる x = 3 は、鉛直漸近線ではなく x 切片です。",
      },
    },

    // ── t2-2-q007 · numeric · exam · SL · SL 2.8 · 3 marks
    "t2-2-q007": {
      // EN: <p>When the rational function <span class="chem">f(x) = (4x - 3)/(x + 2)</span> is written in the form <span class="chem">A + B/(x + 2)</span>, find the value of <span class="chem">B</span>.</p>
      stem: "<p>分数関数 <span class=\"chem\">f(x) = (4x - 3)/(x + 2)</span> を <span class=\"chem\">A + B/(x + 2)</span> の形で表すとき、<span class=\"chem\">B</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write <span class="chem">4x - 3 = 4(x + 2) + B</span> and equate constants on both sides.
        "<span class=\"chem\">4x - 3 = 4(x + 2) + B</span> とおいて、両辺の定数項を比較します。",
      ],
      // EN: <p>Write the numerator in terms of <span class="chem">(x + 2)</span>: <span class="chem">4x - 3 = 4(x + 2) - 8 - 3 = 4(x + 2) - 11</span>. Dividing by <span class="chem">(x + 2)</span> gives <span class="chem">f(x) = 4 + (-11)/(x + 2)</span>, so <span class="chem">B = -11</span>.</p>
      solution: "<p>分子を <span class=\"chem\">(x + 2)</span> で表すと <span class=\"chem\">4x - 3 = 4(x + 2) - 8 - 3 = 4(x + 2) - 11</span> となります。<span class=\"chem\">(x + 2)</span> で割ると <span class=\"chem\">f(x) = 4 + (-11)/(x + 2)</span> となるため、<span class=\"chem\">B = -11</span> です。</p>",
    },

    // ── t2-2-q008 · multi · exam · SL · SL 2.9 · 3 marks
    "t2-2-q008": {
      // EN: <p>Consider the logarithmic function <span class="chem">f(x) = 2 ln(x - 3) + 4</span>. Which of the following statements about the graph of <span class="chem">f</span> are correct?</p>
      stem: "<p>対数関数 <span class=\"chem\">f(x) = 2 ln(x - 3) + 4</span> を考える。<span class=\"chem\">f</span> のグラフについて正しい記述をすべて選びなさい。</p>",
      options: [
        // EN: The graph has a vertical asymptote with equation <span class="chem">x = 3</span>.
        "グラフは方程式 <span class=\"chem\">x = 3</span> の鉛直漸近線をもつ。",
        // EN: The domain of <span class="chem">f</span> is <span class="chem">x &gt; 3</span> and the range is <span class="chem">y ∈ ℝ</span>.
        "<span class=\"chem\">f</span> の定義域は <span class=\"chem\">x &gt; 3</span> であり、値域は <span class=\"chem\">y ∈ ℝ</span> である。",
        // EN: The graph passes through the point <span class="chem">(4, 4)</span>.
        "グラフは点 <span class=\"chem\">(4, 4)</span> を通る。",
        // EN: The graph has a horizontal asymptote with equation <span class=\"chem\">y = 4</span>.
        "グラフは方程式 <span class=\"chem\">y = 4</span> の水平漸近線をもつ。",
      ],
      hints: [
        // EN: Check the log domain requirement <span class="chem">x - 3 &gt; 0</span>, evaluate <span class="chem">f(4)</span> using <span class="chem">ln(1) = 0</span>, and recall whether log graphs have horizontal or vertical asymptotes.
        "対数の定義域の条件 <span class=\"chem\">x - 3 &gt; 0</span> を確認し、<span class=\"chem\">ln(1) = 0</span> を使って <span class=\"chem\">f(4)</span> を計算し、対数グラフが水平・鉛直のどちらの漸近線をもつかを思い出しましょう。",
      ],
      // EN: <p>Since <span class="chem">ln(u)</span> requires <span class="chem">u &gt; 0</span>, the domain is <span class="chem">x &gt; 3</span> with vertical asymptote <span class="chem">x = 3</span>, and the range of any logarithm is all real numbers <span class="chem">ℝ</span> (no horizontal asymptote). At <span class="chem">x = 4</span>, <span class="chem">f(4) = 2 ln(1) + 4 = 0 + 4 = 4</span>.</p>
      solution: "<p><span class=\"chem\">ln(u)</span> は <span class=\"chem\">u &gt; 0</span> が必要なので、定義域は <span class=\"chem\">x &gt; 3</span> で鉛直漸近線は <span class=\"chem\">x = 3</span>、そして対数関数の値域はすべての実数 <span class=\"chem\">ℝ</span> です（水平漸近線はありません）。<span class=\"chem\">x = 4</span> のとき <span class=\"chem\">f(4) = 2 ln(1) + 4 = 0 + 4 = 4</span> となります。</p>",
      misconception: {
        // EN (option D): Exponential functions have a horizontal asymptote, whereas logarithmic functions grow without bound as x → ∞ and have a VERTICAL asymptote (x = 3), not a horizontal one.
        "3": "指数関数は水平漸近線をもちますが、対数関数は x → ∞ で限りなく大きくなるため水平漸近線はなく、鉛直漸近線（x = 3）をもちます。",
      },
    },

    // ── t2-2-q009 · order · foundation · SL · SL 2.7 · 3 marks
    "t2-2-q009": {
      // EN: <p>Place the following steps in the correct logical order to find the values of <span class="chem">m</span> for which the line <span class="chem">y = mx - 2</span> is tangent to the parabola <span class="chem">y = 2x^2 + 3x</span>.</p>
      stem: "<p>直線 <span class=\"chem\">y = mx - 2</span> が放物線 <span class=\"chem\">y = 2x^2 + 3x</span> に接するような <span class=\"chem\">m</span> の値を求める手順を正しい論理的順序に並べ替えなさい。</p>",
      options: [
        // EN: Equate the two equations: <span class="chem">2x^2 + 3x = mx - 2</span>.
        "2 つの方程式を等置する：<span class=\"chem\">2x^2 + 3x = mx - 2</span>。",
        // EN: Rearrange into standard quadratic form <span class="chem">Ax^2 + Bx + C = 0</span>: <span class="chem">2x^2 + (3 - m)x + 2 = 0</span>.
        "2 次方程式の標準形 <span class=\"chem\">Ax^2 + Bx + C = 0</span> に整理する：<span class=\"chem\">2x^2 + (3 - m)x + 2 = 0</span>。",
        // EN: Set the discriminant <span class="chem">Delta = B^2 - 4AC = 0</span> for tangency: <span class="chem">(3 - m)^2 - 4(2)(2) = 0</span>.
        "接する条件として判別式 <span class=\"chem\">Delta = B^2 - 4AC = 0</span> とおく：<span class=\"chem\">(3 - m)^2 - 4(2)(2) = 0</span>。",
        // EN: Solve <span class="chem">(3 - m)^2 = 16</span> to obtain <span class="chem">3 - m = +-4</span>, giving <span class="chem">m = -1</span> or <span class="chem">m = 7</span>.
        "<span class=\"chem\">(3 - m)^2 = 16</span> を解いて <span class=\"chem\">3 - m = +-4</span> とし、<span class=\"chem\">m = -1</span> または <span class=\"chem\">m = 7</span> を得る。",
      ],
      hints: [
        // EN: First equate <span class="chem">y</span>-values, group like powers of <span class="chem">x</span> to identify <span class="chem">A, B, C</span>, apply <span class="chem">Delta = 0</span>, and solve for <span class="chem">m</span>.
        "まず <span class=\"chem\">y</span> を等置し、<span class=\"chem\">x</span> の同類項をまとめて <span class=\"chem\">A, B, C</span> を読み取り、<span class=\"chem\">Delta = 0</span> を適用して <span class=\"chem\">m</span> を解きます。",
      ],
      // EN: <p>Equating <span class="chem">2x^2 + 3x = mx - 2</span> and rearranging to <span class="chem">2x^2 + (3 - m)x + 2 = 0</span> identifies <span class="chem">A = 2, B = 3 - m, C = 2</span>. Tangency requires <span class="chem">Delta = (3 - m)^2 - 16 = 0 => m = -1</span> or <span class="chem">m = 7</span>.</p>
      solution: "<p><span class=\"chem\">2x^2 + 3x = mx - 2</span> を等置して <span class=\"chem\">2x^2 + (3 - m)x + 2 = 0</span> に整理すると、<span class=\"chem\">A = 2, B = 3 - m, C = 2</span> となります。接する条件は <span class=\"chem\">Delta = (3 - m)^2 - 16 = 0 => m = -1</span> または <span class=\"chem\">m = 7</span> です。</p>",
    },

    // ── t2-2-q010 · numeric · exam · SL · SL 2.9 · 3 marks
    "t2-2-q010": {
      // EN: <p>A population of bacteria is modelled by <span class="chem">P(t) = 450 e^{0.18t}</span>, where <span class="chem">t</span> is the time in hours after observation begins. Find the time <span class="chem">t</span> when the population reaches <span class="chem">1800</span>, giving your answer in hours correct to 3 significant figures.</p>
      stem: "<p>ある細菌の個体数が <span class=\"chem\">P(t) = 450 e^{0.18t}</span> でモデル化されている（<span class=\"chem\">t</span> は観察開始からの時間、単位は時間）。個体数が <span class=\"chem\">1800</span> に達する時刻 <span class=\"chem\">t</span> を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Divide both sides of <span class="chem">450 e^{0.18t} = 1800</span> by <span class="chem">450</span> first to get <span class="chem">e^{0.18t} = 4</span>.
        "まず <span class=\"chem\">450 e^{0.18t} = 1800</span> の両辺を <span class=\"chem\">450</span> で割って <span class=\"chem\">e^{0.18t} = 4</span> とします。",
        // EN: Take the natural logarithm: <span class="chem">t = (ln 4) / 0.18</span>.
        "自然対数をとります：<span class=\"chem\">t = (ln 4) / 0.18</span>。",
      ],
      // EN: <p>Setting <span class="chem">450 e^{0.18t} = 1800</span> gives <span class="chem">e^{0.18t} = 4 => 0.18t = ln 4 => t = (ln 4)/0.18 ≈ 7.7016 = 7.70</span> hours (3 s.f.).</p>
      solution: "<p><span class=\"chem\">450 e^{0.18t} = 1800</span> より <span class=\"chem\">e^{0.18t} = 4 => 0.18t = ln 4 => t = (ln 4)/0.18 ≈ 7.7016 = 7.70</span> 時間（有効数字 3 桁）です。</p>",
    },

    // ── t2-2-q011 · numeric · exam · SL · SL 2.10 · 3 marks
    "t2-2-q011": {
      // EN: <p>Using a GDC, find the solution to the equation <span class="chem">ln(x + 2) = 4 - x</span>, giving your answer correct to 3 significant figures.</p>
      stem: "<p>GDC を用いて方程式 <span class=\"chem\">ln(x + 2) = 4 - x</span> の解を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Graph <span class="chem">Y_1 = ln(x + 2)</span> and <span class="chem">Y_2 = 4 - x</span> (or find the zero of <span class="chem">ln(x + 2) + x - 4</span>).
        "<span class=\"chem\">Y_1 = ln(x + 2)</span> と <span class=\"chem\">Y_2 = 4 - x</span> のグラフを描きます（または <span class=\"chem\">ln(x + 2) + x - 4</span> の零点を求めます）。",
        // EN: Use the intersect tool (or the zero tool on <span class="chem">ln(x + 2) + x - 4</span>); you should find <span class="chem">x ≈ 2.497</span>. Check: <span class="chem">ln(4.497) ≈ 1.503</span> and <span class="chem">4 - 2.497 = 1.503</span>.
        "交点を求める機能（または <span class=\"chem\">ln(x + 2) + x - 4</span> に zero 機能）を使うと、<span class=\"chem\">x ≈ 2.497</span> が得られます。確認：<span class=\"chem\">ln(4.497) ≈ 1.503</span>、<span class=\"chem\">4 - 2.497 = 1.503</span>。",
      ],
      // EN: <p>Graphing <span class="chem">Y_1 = ln(x + 2)</span> and <span class="chem">Y_2 = 4 - x</span> gives a single intersection at <span class="chem">(2.4967, 1.5033)</span>, so <span class="chem">x = 2.50</span> (3 s.f.). There is only one solution because <span class="chem">ln(x + 2)</span> is increasing and <span class="chem">4 - x</span> is decreasing.</p>
      solution: "<p><span class=\"chem\">Y_1 = ln(x + 2)</span> と <span class=\"chem\">Y_2 = 4 - x</span> のグラフをかくと、交点は <span class=\"chem\">(2.4967, 1.5033)</span> の 1 つだけなので、<span class=\"chem\">x = 2.50</span>（有効数字 3 桁）です。<span class=\"chem\">ln(x + 2)</span> は増加関数、<span class=\"chem\">4 - x</span> は減少関数なので、解は 1 つしかありません。</p>",
    },

    // ── t2-2-q012 · mcq · exam · SL · SL 2.8 · 2 marks
    "t2-2-q012": {
      // EN: <p>The graph of the rational function <span class="chem">f(x) = (ax + b)/(x + c)</span> has a vertical asymptote <span class="chem">x = 2</span>, a horizontal asymptote <span class="chem">y = -3</span>, and passes through the origin <span class="chem">(0, 0)</span>. What are the values of <span class="chem">a, b, c</span>?</p>
      stem: "<p>分数関数 <span class=\"chem\">f(x) = (ax + b)/(x + c)</span> のグラフが鉛直漸近線 <span class=\"chem\">x = 2</span>、水平漸近線 <span class=\"chem\">y = -3</span> をもち、原点 <span class=\"chem\">(0, 0)</span> を通る。<span class=\"chem\">a, b, c</span> の値はどれですか？</p>",
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
        "鉛直漸近線 <span class=\"chem\">x = -c = 2</span> から <span class=\"chem\">c</span> を、水平漸近線 <span class=\"chem\">y = a/1 = -3</span> から <span class=\"chem\">a</span> を、そして <span class=\"chem\">f(0) = 0</span> から <span class=\"chem\">b</span> を求めます。",
      ],
      // EN: <p>The vertical asymptote <span class="chem">x = 2</span> requires <span class="chem">2 + c = 0 => c = -2</span>. The horizontal asymptote <span class="chem">y = -3</span> gives <span class="chem">a/1 = -3 => a = -3</span>. Passing through <span class="chem">(0, 0)</span> gives <span class="chem">f(0) = b/(-2) = 0 => b = 0</span>.</p>
      solution: "<p>鉛直漸近線 <span class=\"chem\">x = 2</span> より <span class=\"chem\">2 + c = 0 => c = -2</span>、水平漸近線 <span class=\"chem\">y = -3</span> より <span class=\"chem\">a/1 = -3 => a = -3</span> です。また <span class=\"chem\">(0, 0)</span> を通るので <span class=\"chem\">f(0) = b/(-2) = 0 => b = 0</span> となります。</p>",
      misconception: {
        // EN (option B): A vertical asymptote at x = 2 means the denominator x + c is zero when x = 2, so 2 + c = 0 ⇒ c = −2, not +2.
        "1": "鉛直漸近線が x = 2 ということは、x = 2 で分母 x + c が 0 になるということなので、2 + c = 0 ⇒ c = −2（+2 ではない）です。",
        // EN (option C): You swapped the horizontal asymptote y = a and the vertical asymptote x = −c.
        "2": "水平漸近線 y = a と鉛直漸近線 x = −c を取り違えています。",
        // EN (option D): Since the graph passes through (0, 0), f(0) = b/c = 0 ⇒ b = 0.
        "3": "グラフが (0, 0) を通るので f(0) = b/c = 0 ⇒ b = 0 です。",
      },
    },

    // ── t2-2-q013 · short · exam · SL · SL 2.7 · 6 marks
    "t2-2-q013": {
      // EN: <p>Let <span class="chem">f(x) = x^2 + (k + 1)x + 2k + 2</span>, where <span class="chem">k ∈ ℝ</span>.<br>(a) Show that the discriminant of <span class="chem">f(x)</span> can be written as <span class="chem">Delta = (k + 1)(k - 7)</span>. <strong>[3 marks]</strong><br>(b) Hence find the set of values of <span class="chem">k</span> for which the equation <span class="chem">f(x) = 0</span> has two distinct real roots. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">k ∈ ℝ</span> として <span class=\"chem\">f(x) = x^2 + (k + 1)x + 2k + 2</span> とする。<br>(a) <span class=\"chem\">f(x)</span> の判別式が <span class=\"chem\">Delta = (k + 1)(k - 7)</span> と表せることを示しなさい (Show that)。 <strong>[3 marks]</strong><br>(b) これを用いて (Hence)、方程式 <span class=\"chem\">f(x) = 0</span> が異なる 2 つの実数解をもつような <span class=\"chem\">k</span> の値の範囲を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: In part (a), notice that <span class="chem">2k + 2 = 2(k + 1)</span>, so you can factor <span class="chem">(k + 1)</span> out of <span class="chem">(k + 1)^2 - 8(k + 1)</span> in one step!
        "(a) では、<span class=\"chem\">2k + 2 = 2(k + 1)</span> であることに気づくと、<span class=\"chem\">(k + 1)^2 - 8(k + 1)</span> から <span class=\"chem\">(k + 1)</span> を一気にくくり出せます！",
        // EN: In part (b), sketch the upward-opening parabola <span class="chem">y = (k + 1)(k - 7)</span> to see where <span class="chem">Delta &gt; 0</span>.
        "(b) では、下に凸の放物線 <span class=\"chem\">y = (k + 1)(k - 7)</span> の概形を描いて <span class=\"chem\">Delta &gt; 0</span> となる範囲を確認します。",
      ],
      // EN: <p>(a) <span class="chem">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)^2 - 8(k + 1) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>.<br>(b) For two distinct real roots, <span class="chem">Delta &gt; 0 => (k + 1)(k - 7) &gt; 0</span>. Since the quadratic in <span class="chem">k</span> opens upwards with roots at <span class="chem">k = -1</span> and <span class="chem">k = 7</span>, we have <span class="chem">k &lt; -1</span> or <span class="chem">k &gt; 7</span>.</p>
      solution: "<p>(a) <span class=\"chem\">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)^2 - 8(k + 1) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>。<br>(b) 異なる 2 つの実数解をもつ条件は <span class=\"chem\">Delta &gt; 0 => (k + 1)(k - 7) &gt; 0</span> です。<span class=\"chem\">k</span> の 2 次式は <span class=\"chem\">k = -1</span> と <span class=\"chem\">k = 7</span> に解をもち下に凸なので、<span class=\"chem\">k &lt; -1</span> または <span class=\"chem\">k &gt; 7</span> となります。</p>",
      // EN: <p>(a) <span class="chem">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>; (b) <span class="chem">k &lt; -1</span> or <span class="chem">k &gt; 7</span>.</p>
      answer: "<p>(a) <span class=\"chem\">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>；(b) <span class=\"chem\">k &lt; -1</span> または <span class=\"chem\">k &gt; 7</span>。</p>",
      markscheme: [
        // EN: M1: Substitutes a = 1, b = k + 1, c = 2k + 2 into Δ = b² − 4ac to get Δ = (k + 1)² − 4(2k + 2).
        "M1：a = 1, b = k + 1, c = 2k + 2 を Δ = b² − 4ac に代入して Δ = (k + 1)² − 4(2k + 2) を得る。",
        // EN: M1: Expands to k² + 2k + 1 − 8k − 8 (or writes 4(2k + 2) as 8(k + 1) to give (k + 1)² − 8(k + 1)).
        "M1：k² + 2k + 1 − 8k − 8 に展開する（または 4(2k + 2) を 8(k + 1) と書いて (k + 1)² − 8(k + 1) とする）。",
        // EN: A1: Obtains k² − 6k − 7 (or (k + 1)[(k + 1) − 8]). AG: Δ = (k + 1)(k − 7) follows; the given line itself earns no mark.
        "A1：k² − 6k − 7（または (k + 1)[(k + 1) − 8]）を得る。AG：これより Δ = (k + 1)(k − 7)。与えられた結果の行そのものには得点がない。",
        // EN: M1: Uses the condition Δ > 0 for two distinct real roots: (k + 1)(k − 7) > 0.
        "M1：異なる 2 つの実数解をもつ条件 Δ > 0 を用いる：(k + 1)(k − 7) > 0。",
        // EN: A1: Identifies critical values k = −1 and k = 7.
        "A1：境界値 k = −1 と k = 7 を特定する。",
        // EN: A1: States the correct outside intervals k < −1 or k > 7 (strict inequalities required).
        "A1：正しい外側の範囲 k < −1 または k > 7 を述べる（等号なしの不等号が必要）。",
      ],
    },

    // ── t2-2-q014 · short · exam · SL · SL 2.9 · 6 marks
    "t2-2-q014": {
      // EN: <p>The mass <span class="chem">M(t)</span> (in milligrams) of a medical tracer in a patient's bloodstream <span class="chem">t</span> hours after injection is modelled by <span class="chem">M(t) = M_0 e^{-kt}</span> for <span class="chem">t &gt;= 0</span>. Initially (<span class="chem">t = 0</span>), <span class="chem">120</span> <span class="unit">mg</span> is injected. After <span class="chem">4</span> hours, <span class="chem">75</span> <span class="unit">mg</span> remains.<br>(a) Find the value of <span class="chem">M_0</span> and show that <span class="chem">k = (1/4) ln(8/5)</span>. <strong>[3 marks]</strong><br>(b) Find the half-life of the tracer (the time taken for the mass to fall to <span class="chem">60</span> <span class="unit">mg</span>), giving your answer in hours to 3 significant figures. <strong>[3 marks]</strong></p>
      stem: "<p>患者の血中に注射された医療用トレーサーの <span class=\"chem\">t</span> 時間後の質量 <span class=\"chem\">M(t)</span>（ミリグラム単位）が <span class=\"chem\">t &gt;= 0</span> に対して <span class=\"chem\">M(t) = M_0 e^{-kt}</span> でモデル化されている。初期（<span class=\"chem\">t = 0</span>）に <span class=\"chem\">120</span> <span class=\"unit\">mg</span> が注射され、<span class=\"chem\">4</span> 時間後には <span class=\"chem\">75</span> <span class=\"unit\">mg</span> が残っていた。<br>(a) <span class=\"chem\">M_0</span> の値を求め (Find)、<span class=\"chem\">k = (1/4) ln(8/5)</span> となることを示しなさい (Show that)。 <strong>[3 marks]</strong><br>(b) トレーサーの半減期（質量が <span class=\"chem\">60</span> <span class=\"unit\">mg</span> まで減るのにかかる時間）を求め (Find)、有効数字 3 桁（時間単位）で答えなさい。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Simplify the fraction <span class="chem">75 / 120 = 5 / 8</span> and use <span class="chem">-ln(5/8) = ln(8/5)</span>.
        "分数 <span class=\"chem\">75 / 120 = 5 / 8</span> を約分し、<span class=\"chem\">-ln(5/8) = ln(8/5)</span> を使います。",
        // EN: For the half-life, solve <span class="chem">e^{-kt} = 0.5 => t = (ln 2) / k</span>.
        "半減期については <span class=\"chem\">e^{-kt} = 0.5 => t = (ln 2) / k</span> を解きます。",
      ],
      // EN: <p>(a) At <span class="chem">t = 0</span>, <span class="chem">M(0) = M_0 e^0 = 120 => M_0 = 120</span>. At <span class="chem">t = 4</span>, <span class="chem">120 e^{-4k} = 75 => e^{-4k} = 75/120 = 5/8 => -4k = ln(5/8) = -ln(8/5) => k = (1/4) ln(8/5)</span>.<br>(b) Setting <span class="chem">M(t) = 60</span> gives <span class="chem">e^{-kt} = 1/2 => kt = ln 2 => t = 4 ln 2 / ln(8/5) ≈ 5.899 = 5.90</span> hours (3 s.f.).</p>
      solution: "<p>(a) <span class=\"chem\">t = 0</span> で <span class=\"chem\">M(0) = M_0 e^0 = 120 => M_0 = 120</span>。<span class=\"chem\">t = 4</span> で <span class=\"chem\">120 e^{-4k} = 75 => e^{-4k} = 75/120 = 5/8 => -4k = ln(5/8) = -ln(8/5) => k = (1/4) ln(8/5)</span>。<br>(b) <span class=\"chem\">M(t) = 60</span> とおくと <span class=\"chem\">e^{-kt} = 1/2 => kt = ln 2 => t = 4 ln 2 / ln(8/5) ≈ 5.899 = 5.90</span> 時間（有効数字 3 桁）となります。</p>",
      // EN: <p>(a) <span class="chem">M_0 = 120</span>; <span class="chem">k = (1/4) ln(8/5) ≈ 0.1175</span>; (b) <span class="chem">5.90</span> hours.</p>
      answer: "<p>(a) <span class=\"chem\">M_0 = 120</span>；<span class=\"chem\">k = (1/4) ln(8/5) ≈ 0.1175</span>；(b) <span class=\"chem\">5.90</span> 時間。</p>",
      markscheme: [
        // EN: A1: States M₀ = 120 from M(0) = 120.
        "A1：M(0) = 120 より M₀ = 120 を述べる。",
        // EN: M1: Substitutes t = 4, M = 75 to write 120 e^(−4k) = 75 ⇒ e^(−4k) = 75/120 = 5/8.
        "M1：t = 4, M = 75 を代入して 120 e^(−4k) = 75 ⇒ e^(−4k) = 75/120 = 5/8 と書く。",
        // EN: A1: Takes natural logs: −4k = ln(5/8) = −ln(8/5). AG: k = (1/4) ln(8/5); the given line itself earns no mark.
        "A1：自然対数をとる：−4k = ln(5/8) = −ln(8/5)。AG：k = (1/4) ln(8/5)。与えられた結果の行そのものには得点がない。",
        // EN: M1: Sets e^(−kt) = 1/2 (or 120 e^(−kt) = 60).
        "M1：e^(−kt) = 1/2（または 120 e^(−kt) = 60）とおく。",
        // EN: M1: Solves t = (ln 2) / k = 4 ln 2 / ln(8/5).
        "M1：t = (ln 2) / k = 4 ln 2 / ln(8/5) を解く。",
        // EN: A1: Evaluates t = 5.899... = 5.90 hours (3 s.f.).
        "A1：t = 5.899... = 5.90 時間（有効数字 3 桁）を計算する。",
      ],
    },

    // ── t2-2-q015 · numeric · exam · SL · SL 1.7 / 2.7 · 4 marks
    "t2-2-q015": {
      // EN: <p>The equation <span class="chem">9^x - 12(3^{x - 1}) + 3 = 0</span> has two real solutions. Solve the equation, and give the <strong>positive</strong> solution <span class="chem">x</span>.</p>
      stem: "<p>方程式 <span class=\"chem\">9^x - 12(3^{x - 1}) + 3 = 0</span> は 2 つの実数解をもつ。この方程式を解き (Solve)、<strong>正の</strong>解 <span class=\"chem\">x</span> を答えなさい。</p>",
      hints: [
        // EN: Rewrite <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span>.
        "<span class=\"chem\">9^x = (3^x)^2</span> および <span class=\"chem\">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span> と書き換えます。",
        // EN: Let <span class="chem">u = 3^x</span> to get <span class="chem">u^2 - 4u + 3 = 0</span>, find both values of <span class="chem">u</span>, and solve <span class="chem">3^x = u</span>.
        "<span class=\"chem\">u = 3^x</span> とおいて <span class=\"chem\">u^2 - 4u + 3 = 0</span> を作り、2 つの <span class=\"chem\">u</span> の値を求めてから <span class=\"chem\">3^x = u</span> を解きます。",
      ],
      // EN: <p>Using exponent laws, <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span>. Letting <span class="chem">u = 3^x</span> gives <span class="chem">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span>, so <span class="chem">u = 1</span> or <span class="chem">u = 3</span>. Since <span class="chem">3^x = 1 => x = 0</span> and <span class="chem">3^x = 3 => x = 1</span>, the solutions are <span class="chem">x = 0</span> and <span class="chem">x = 1</span>, so the positive solution is <span class="chem">x = 1</span>.</p>
      solution: "<p>指数法則より <span class=\"chem\">9^x = (3^x)^2</span>、<span class=\"chem\">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span> です。<span class=\"chem\">u = 3^x</span> とおくと <span class=\"chem\">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span> となり、<span class=\"chem\">u = 1</span> または <span class=\"chem\">u = 3</span> です。<span class=\"chem\">3^x = 1 => x = 0</span> と <span class=\"chem\">3^x = 3 => x = 1</span> より、解は <span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 1</span> であり、正の解は <span class=\"chem\">x = 1</span> です。</p>",
    },

    // ── t2-2-q016 · mcq · challenge · SL · SL 2.7 · 2 marks
    "t2-2-q016": {
      // EN: <p>Find the complete set of values of the real parameter <span class="chem">m</span> for which the inequality <span class="chem">(m - 2)x^2 + 2(m - 2)x + 4 &gt; 0</span> holds for <strong>all</strong> <span class="chem">x ∈ ℝ</span>.</p>
      stem: "<p><strong>すべての</strong> <span class=\"chem\">x ∈ ℝ</span> に対して不等式 <span class=\"chem\">(m - 2)x^2 + 2(m - 2)x + 4 &gt; 0</span> が成り立つような実数パラメーター <span class=\"chem\">m</span> の値の範囲を完全に求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">2 &lt;= m &lt; 6</span>
        "<span class=\"chem\">2 &lt;= m &lt; 6</span>",
        // EN: <span class="chem">2 &lt; m &lt; 6</span>
        "<span class=\"chem\">2 &lt; m &lt; 6</span>",
        // EN: <span class="chem">m &lt; 2</span> or <span class="chem">m &gt; 6</span>
        "<span class=\"chem\">m &lt; 2</span> または <span class=\"chem\">m &gt; 6</span>",
        // EN: <span class="chem">m &gt; 2</span>
        "<span class=\"chem\">m &gt; 2</span>",
      ],
      hints: [
        // EN: Decode: the coefficient of <span class="chem">x^2</span> contains the parameter, so "for all <span class="chem">x</span>" splits into two situations: the expression is a genuine quadratic (<span class="chem">m != 2</span>), or the <span class="chem">x^2</span> coefficient is zero and it is not a quadratic at all. Both must be checked.
        "解読：<span class=\"chem\">x^2</span> の係数にパラメーターが含まれているので、「すべての <span class=\"chem\">x</span> で成り立つ」は 2 つの場合に分かれます：式が本当に 2 次式である場合（<span class=\"chem\">m != 2</span>）と、<span class=\"chem\">x^2</span> の係数が 0 で 2 次式ではなくなる場合です。両方を調べる必要があります。",
        // EN: First check the quadratic case where <span class="chem">a = m - 2 &gt; 0</span> and <span class="chem">Delta &lt; 0</span>.
        "まず 2 次式になる場合として <span class=\"chem\">a = m - 2 &gt; 0</span> かつ <span class=\"chem\">Delta &lt; 0</span> を調べます。",
        // EN: Then separately test the degenerate case <span class="chem">m = 2</span> where the <span class="chem">x^2</span> and <span class="chem">x</span> terms vanish!
        "次に、<span class=\"chem\">x^2</span> と <span class=\"chem\">x</span> の項が消える退化した場合 <span class=\"chem\">m = 2</span> を別に調べましょう！",
      ],
      // EN: <p>Case 1 (<span class="chem">m != 2</span>, quadratic): Require <span class="chem">m - 2 &gt; 0 => m &gt; 2</span> and <span class="chem">Delta = 4(m - 2)^2 - 16(m - 2) = 4(m - 2)(m - 6) &lt; 0 => 2 &lt; m &lt; 6</span>.<br>Case 2 (<span class="chem">m = 2</span>, constant): Substituting <span class="chem">m = 2</span> gives <span class="chem">0x^2 + 0x + 4 &gt; 0 => 4 &gt; 0</span>, which is true for all <span class="chem">x ∈ ℝ</span>! Combining both cases gives <span class="chem">2 &lt;= m &lt; 6</span>.</p>
      solution: "<p>場合 1（<span class=\"chem\">m != 2</span>、2 次式）：<span class=\"chem\">m - 2 &gt; 0 => m &gt; 2</span> かつ <span class=\"chem\">Delta = 4(m - 2)^2 - 16(m - 2) = 4(m - 2)(m - 6) &lt; 0 => 2 &lt; m &lt; 6</span> が必要です。<br>場合 2（<span class=\"chem\">m = 2</span>、定数）：<span class=\"chem\">m = 2</span> を代入すると <span class=\"chem\">0x^2 + 0x + 4 &gt; 0 => 4 &gt; 0</span> となり、すべての <span class=\"chem\">x ∈ ℝ</span> で成り立ちます！両方を合わせると <span class=\"chem\">2 &lt;= m &lt; 6</span> となります。</p>",
      misconception: {
        // EN (option B): You checked the quadratic case m − 2 > 0 and Δ < 0 (giving 2 < m < 6), but forgot to test the degenerate case m = 2! When m = 2, the expression reduces to 4 > 0, which holds for all x ∈ ℝ.
        "1": "2 次式の場合（m − 2 > 0 かつ Δ < 0 で 2 < m < 6）は調べられましたが、m = 2 の場合を確認し忘れています！m = 2 のとき式は 4 > 0 となり、すべての x ∈ ℝ で成り立ちます。",
        // EN (option C): You solved Δ > 0 instead of Δ < 0.
        "2": "Δ < 0 ではなく Δ > 0 を解いてしまいました。",
        // EN (option D): You checked a = m − 2 > 0, but forgot to require Δ < 0.
        "3": "a = m − 2 > 0 は確認しましたが、Δ < 0 の条件を忘れています。",
      },
    },

    // ── t2-2-q017 · numeric · exam · SL · SL 1.7 · 4 marks
    "t2-2-q017": {
      // EN: <p>Solve the logarithmic equation <span class="chem">log_2(x - 1) + log_2(x + 2) = 2</span> for <span class="chem">x</span>.</p>
      stem: "<p>対数方程式 <span class=\"chem\">log_2(x - 1) + log_2(x + 2) = 2</span> を <span class=\"chem\">x</span> について解きなさい。</p>",
      hints: [
        // EN: Combine the logs using <span class="chem">log_2((x - 1)(x + 2)) = 2</span>, so <span class="chem">(x - 1)(x + 2) = 2^2 = 4</span>.
        "対数を <span class=\"chem\">log_2((x - 1)(x + 2)) = 2</span> とまとめて、<span class=\"chem\">(x - 1)(x + 2) = 2^2 = 4</span> とします。",
        // EN: Solve the quadratic and reject any root that violates the domain restriction <span class="chem">x - 1 &gt; 0</span>!
        "2 次方程式を解き、定義域の制限 <span class=\"chem\">x - 1 &gt; 0</span> に反する解を除外します！",
      ],
      // EN: <p>Domain requires <span class="chem">x - 1 &gt; 0</span> and <span class="chem">x + 2 &gt; 0</span>, so <span class="chem">x &gt; 1</span>. Combining the logarithms gives <span class="chem">log_2[(x - 1)(x + 2)] = 2 => (x - 1)(x + 2) = 2^2 = 4 => x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0</span>. Rejecting <span class="chem">x = -3</span> (since <span class="chem">x &gt; 1</span>) leaves the unique valid solution <span class="chem">x = 2</span>.</p>
      solution: "<p>定義域より <span class=\"chem\">x - 1 &gt; 0</span> かつ <span class=\"chem\">x + 2 &gt; 0</span> なので <span class=\"chem\">x &gt; 1</span> です。対数をまとめると <span class=\"chem\">log_2[(x - 1)(x + 2)] = 2 => (x - 1)(x + 2) = 2^2 = 4 => x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0</span> となります。<span class=\"chem\">x = -3</span> は <span class=\"chem\">x &gt; 1</span> を満たさないため不適であり、唯一の有効な解は <span class=\"chem\">x = 2</span> です。</p>",
    },

    // ── t2-2-q018 · short · challenge · SL · SL 2.8 · 6 marks
    "t2-2-q018": {
      // EN: <p>Let <span class="chem">f(x) = (2x - 1)/(x + 1)</span> for <span class="chem">x != -1</span>, and let <span class="chem">g_k(x) = kx + 2</span>.<br>(a) Show that the <span class="chem">x</span>-coordinates of the points of intersection of the graphs of <span class="chem">f</span> and <span class="chem">g_k</span> satisfy <span class="chem">kx^2 + kx + 3 = 0</span>. <strong>[2 marks]</strong><br>(b) Hence find the non-zero value of <span class="chem">k</span> for which the line <span class="chem">y = kx + 2</span> is tangent to the hyperbola <span class="chem">y = f(x)</span>, and find the coordinates of the point of contact. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">x != -1</span> に対して <span class=\"chem\">f(x) = (2x - 1)/(x + 1)</span> とし、<span class=\"chem\">g_k(x) = kx + 2</span> とする。<br>(a) <span class=\"chem\">f</span> と <span class=\"chem\">g_k</span> のグラフの交点の <span class=\"chem\">x</span> 座標が <span class=\"chem\">kx^2 + kx + 3 = 0</span> を満たすことを示しなさい (Show that)。 <strong>[2 marks]</strong><br>(b) これを用いて (Hence)、直線 <span class=\"chem\">y = kx + 2</span> が双曲線 <span class=\"chem\">y = f(x)</span> に接するような 0 でない <span class=\"chem\">k</span> の値を求め (Find)、その接点の座標を求めなさい (Find)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "tangent" means the line meets the curve at exactly one point, so the equation from (a) must have a repeated root (<span class="chem">Delta = 0</span>). "Non-zero" tells you to reject <span class="chem">k = 0</span>, because then the equation is not a quadratic.
        "解読：「接する」とは直線と曲線がちょうど 1 点で交わることなので、(a) の方程式は重解をもたなければなりません（<span class=\"chem\">Delta = 0</span>）。「0 でない」は、<span class=\"chem\">k = 0</span> のとき方程式が 2 次方程式でなくなるので除外する、という意味です。",
        // EN: For part (a), multiply both sides of <span class="chem">(2x - 1)/(x + 1) = kx + 2</span> by <span class="chem">(x + 1)</span> and expand.
        "(a) では、<span class=\"chem\">(2x - 1)/(x + 1) = kx + 2</span> の両辺に <span class=\"chem\">(x + 1)</span> を掛けて展開します。",
        // EN: For part (b), set the discriminant of <span class="chem">kx^2 + kx + 3 = 0</span> equal to zero!
        "(b) では、<span class=\"chem\">kx^2 + kx + 3 = 0</span> の判別式を 0 とおきます！",
      ],
      // EN: <p>(a) Setting <span class="chem">(2x - 1)/(x + 1) = kx + 2</span> and multiplying by <span class="chem">x + 1</span> (<span class="chem">x != -1</span>) gives <span class="chem">2x - 1 = kx^2 + kx + 2x + 2 => kx^2 + kx + 3 = 0</span>.<br>(b) For tangency, <span class="chem">Delta = k^2 - 4(k)(3) = k(k - 12) = 0</span>. Since <span class="chem">k != 0</span>, <span class="chem">k = 12</span>. Substituting <span class="chem">k = 12</span> gives <span class="chem">12x^2 + 12x + 3 = 3(2x + 1)^2 = 0 => x = -1/2</span>, and <span class="chem">y = 12(-1/2) + 2 = -4</span>, so the point of contact is <span class="chem">(-1/2, -4)</span>.</p>
      solution: "<p>(a) <span class=\"chem\">(2x - 1)/(x + 1) = kx + 2</span> とおいて <span class=\"chem\">x + 1</span>（<span class=\"chem\">x != -1</span>）を掛けると、<span class=\"chem\">2x - 1 = kx^2 + kx + 2x + 2 => kx^2 + kx + 3 = 0</span> となります。<br>(b) 接する条件は <span class=\"chem\">Delta = k^2 - 4(k)(3) = k(k - 12) = 0</span> です。<span class=\"chem\">k != 0</span> より <span class=\"chem\">k = 12</span>。<span class=\"chem\">k = 12</span> を代入すると <span class=\"chem\">12x^2 + 12x + 3 = 3(2x + 1)^2 = 0 => x = -1/2</span>、<span class=\"chem\">y = 12(-1/2) + 2 = -4</span> となるため、接点は <span class=\"chem\">(-1/2, -4)</span> です。</p>",
      // EN: <p>(a) <span class="chem">(2x - 1)/(x + 1) = kx + 2 => 2x - 1 = (kx + 2)(x + 1) = kx^2 + (k + 2)x + 2 => kx^2 + kx + 3 = 0</span>; (b) <span class="chem">k = 12</span>, point of contact <span class="chem">(-1/2, -4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(2x - 1)/(x + 1) = kx + 2 => 2x - 1 = (kx + 2)(x + 1) = kx^2 + (k + 2)x + 2 => kx^2 + kx + 3 = 0</span>；(b) <span class=\"chem\">k = 12</span>、接点 <span class=\"chem\">(-1/2, -4)</span>。</p>",
      markscheme: [
        // EN: M1: Equates (2x − 1)/(x + 1) = kx + 2 and multiplies both sides by (x + 1).
        "M1：(2x − 1)/(x + 1) = kx + 2 と等置し、両辺に (x + 1) を掛ける。",
        // EN: A1: Expands correctly: 2x − 1 = kx² + (k + 2)x + 2. AG: kx² + kx + 3 = 0; the given line itself earns no mark.
        "A1：正しく展開する：2x − 1 = kx² + (k + 2)x + 2。AG：kx² + kx + 3 = 0。与えられた結果の行そのものには得点がない。",
        // EN: M1: Sets discriminant Δ = k² − 4(k)(3) = 0 for tangency.
        "M1：接する条件として判別式 Δ = k² − 4(k)(3) = 0 とおく。",
        // EN: A1: Solves k(k − 12) = 0 and selects the non-zero value k = 12.
        "A1：k(k − 12) = 0 を解き、0 でない値 k = 12 を選ぶ。",
        // EN: M1: Substitutes k = 12 into 12x² + 12x + 3 = 0 ⇒ 3(2x + 1)² = 0 to find x = −1/2.
        "M1：k = 12 を 12x² + 12x + 3 = 0 ⇒ 3(2x + 1)² = 0 に代入して x = −1/2 を求める。",
        // EN: A1: Evaluates y = 12(−1/2) + 2 = −4 to state the point of contact (−1/2, −4).
        "A1：y = 12(−1/2) + 2 = −4 を計算し、接点 (−1/2, −4) を述べる。",
      ],
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't2-2.q', {
  questions: {

    // ── t2-2-q019 · numeric · foundation · SL · SL 2.6 · 2 marks
    "t2-2-q019": {
      // EN: <p>Let <span class="chem">f(x) = -2x^2 + 12x - 5</span>. Find the maximum value of <span class="chem">f(x)</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = -2x^2 + 12x - 5</span> とする。<span class=\"chem\">f(x)</span> の最大値を求めなさい (Find)。</p>",
      hints: [
        // EN: The coefficient of <span class="chem">x^2</span> is negative, so the vertex is a maximum. Use the axis of symmetry <span class="chem">x = -b/(2a)</span> from the formula booklet.
        "<span class=\"chem\">x^2</span> の係数が負なので、頂点は最大値を与えます。公式集の対称軸 <span class=\"chem\">x = -b/(2a)</span> を使います。",
        // EN: Here <span class="chem">x = -12/(2 × (-2)) = 3</span>. Now evaluate <span class="chem">f(3)</span>.
        "ここでは <span class=\"chem\">x = -12/(2 × (-2)) = 3</span> です。次に <span class=\"chem\">f(3)</span> を計算します。",
      ],
      // EN: <p>The axis of symmetry is <span class="chem">x = -b/(2a) = -12/(-4) = 3</span>. Since <span class="chem">a = -2 &lt; 0</span>, the vertex is a maximum: <span class="chem">f(3) = -2(9) + 36 - 5 = 13</span>. (Completing the square gives the same result: <span class="chem">f(x) = -2(x - 3)^2 + 13</span>.)</p>
      solution: "<p>対称軸は <span class=\"chem\">x = -b/(2a) = -12/(-4) = 3</span> です。<span class=\"chem\">a = -2 &lt; 0</span> なので頂点で最大となり、<span class=\"chem\">f(3) = -2(9) + 36 - 5 = 13</span> です。（平方完成しても同じ結果 <span class=\"chem\">f(x) = -2(x - 3)^2 + 13</span> が得られます。）</p>",
    },

    // ── t2-2-q020 · mcq · foundation · SL · SL 2.8 · 1 mark
    "t2-2-q020": {
      // EN: <p>Let <span class="chem">f(x) = 1/x</span>, for <span class="chem">x != 0</span>. Which statement is correct?</p>
      stem: "<p><span class=\"chem\">x != 0</span> に対して <span class=\"chem\">f(x) = 1/x</span> とする。正しい記述はどれか。</p>",
      options: [
        // EN: <span class="chem">f^{-1}(x) = 1/x</span>, so <span class="chem">f</span> is self-inverse and its graph is symmetric about the line <span class="chem">y = x</span>.
        "<span class=\"chem\">f^{-1}(x) = 1/x</span> なので、<span class=\"chem\">f</span> は自己逆関数であり、そのグラフは直線 <span class=\"chem\">y = x</span> に関して対称である。",
        // EN: <span class="chem">f^{-1}(x) = -1/x</span>, so the graph of <span class="chem">f</span> is symmetric about the line <span class="chem">y = -x</span>.
        "<span class=\"chem\">f^{-1}(x) = -1/x</span> なので、<span class=\"chem\">f</span> のグラフは直線 <span class=\"chem\">y = -x</span> に関して対称である。",
        // EN: <span class="chem">f</span> has no inverse function, because <span class="chem">f</span> is not defined at <span class="chem">x = 0</span>.
        "<span class=\"chem\">f</span> は <span class=\"chem\">x = 0</span> で定義されないので、<span class=\"chem\">f</span> は逆関数をもたない。",
        // EN: <span class="chem">f(f(x)) = 1/x^2</span>.
        "<span class=\"chem\">f(f(x)) = 1/x^2</span>.",
      ],
      hints: [
        // EN: Swap <span class="chem">x</span> and <span class="chem">y</span> in <span class="chem">y = 1/x</span> and make <span class="chem">y</span> the subject. What do you get?
        "<span class=\"chem\">y = 1/x</span> の <span class=\"chem\">x</span> と <span class=\"chem\">y</span> を入れ替え、<span class=\"chem\">y</span> について解きます。何が得られますか？",
      ],
      // EN: <p>Swapping gives <span class="chem">x = 1/y => y = 1/x</span>, so <span class="chem">f^{-1}(x) = 1/x = f(x)</span>: the reciprocal function is self-inverse, and <span class="chem">f(f(x)) = 1/(1/x) = x</span>. A function and its inverse are reflections in <span class="chem">y = x</span>, so the graph of a self-inverse function is symmetric about <span class="chem">y = x</span>.</p>
      solution: "<p>入れ替えると <span class=\"chem\">x = 1/y => y = 1/x</span> となるので、<span class=\"chem\">f^{-1}(x) = 1/x = f(x)</span> です。つまり分数関数は自己逆関数であり、<span class=\"chem\">f(f(x)) = 1/(1/x) = x</span> となります。関数とその逆関数は <span class=\"chem\">y = x</span> に関して対称移動の関係にあるので、自己逆関数のグラフは <span class=\"chem\">y = x</span> に関して対称です。</p>",
      misconception: {
        // EN (option B): The graph of 1/x is symmetric about y = −x as well, but that is not what makes f its own inverse. Solving x = 1/y gives y = 1/x, not −1/x.
        "1": "1/x のグラフは y = −x に関しても対称ですが、それが f を自己逆関数にしている理由ではありません。x = 1/y を解くと y = 1/x となり、−1/x にはなりません。",
        // EN (option C): A function needs to be one-to-one on its domain to have an inverse. Leaving out x = 0 does not stop that: 1/x is one-to-one on x ≠ 0.
        "2": "関数が逆関数をもつには、定義域で 1 対 1 であればよいのです。x = 0 を除いてもその妨げにはなりません：1/x は x ≠ 0 で 1 対 1 です。",
        // EN (option D): Composing is not multiplying. f(f(x)) = f(1/x) = 1/(1/x) = x, not (1/x) × (1/x).
        "3": "合成は掛け算ではありません。f(f(x)) = f(1/x) = 1/(1/x) = x であり、(1/x) × (1/x) ではありません。",
      },
    },

    // ── t2-2-q021 · numeric · foundation · SL · SL 2.9 · 2 marks
    "t2-2-q021": {
      // EN: <p>The graph of <span class="chem">y = 3^x</span> is reflected in the line <span class="chem">y = x</span> to give the graph of <span class="chem">y = g(x)</span>. Find <span class="chem">g(81)</span>.</p>
      stem: "<p><span class=\"chem\">y = 3^x</span> のグラフを直線 <span class=\"chem\">y = x</span> に関して対称移動すると、<span class=\"chem\">y = g(x)</span> のグラフが得られる。<span class=\"chem\">g(81)</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: A reflection in <span class="chem">y = x</span> gives the inverse function. The inverse of <span class="chem">3^x</span> is <span class="chem">log_3 x</span>.
        "<span class=\"chem\">y = x</span> に関する対称移動で逆関数が得られます。<span class=\"chem\">3^x</span> の逆関数は <span class=\"chem\">log_3 x</span> です。",
        // EN: Write <span class="chem">81</span> as a power of <span class="chem">3</span>.
        "<span class=\"chem\">81</span> を <span class=\"chem\">3</span> の累乗で表します。",
      ],
      // EN: <p>The reflection of <span class="chem">y = 3^x</span> in <span class="chem">y = x</span> is its inverse, <span class="chem">g(x) = log_3 x</span>. Since <span class="chem">81 = 3^4</span>, <span class="chem">g(81) = log_3 3^4 = 4</span> (booklet: <span class="chem">log_a a^x = x</span>).</p>
      solution: "<p><span class=\"chem\">y = 3^x</span> を <span class=\"chem\">y = x</span> に関して対称移動したものはその逆関数 <span class=\"chem\">g(x) = log_3 x</span> です。<span class=\"chem\">81 = 3^4</span> なので、<span class=\"chem\">g(81) = log_3 3^4 = 4</span> です（公式集：<span class=\"chem\">log_a a^x = x</span>）。</p>",
    },

    // ── t2-2-q022 · short · exam · SL · SL 2.6, 2.7 · 6 marks
    "t2-2-q022": {
      // EN: <p>The graph of <span class="chem">y = a(x - h)^2 + k</span> has its vertex at <span class="chem">(-1, 8)</span> and passes through the point <span class="chem">(2, -10)</span>.<br>(a) Write down the values of <span class="chem">h</span> and <span class="chem">k</span>, and find the value of <span class="chem">a</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-intercepts of the graph. <strong>[2 marks]</strong><br>(c) Express the function in the form <span class="chem">y = px^2 + qx + r</span>, and write down the <span class="chem">y</span>-intercept. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">y = a(x - h)^2 + k</span> のグラフは頂点が <span class=\"chem\">(-1, 8)</span> であり、点 <span class=\"chem\">(2, -10)</span> を通る。<br>(a) <span class=\"chem\">h</span> と <span class=\"chem\">k</span> の値を書きなさい (Write down)。また <span class=\"chem\">a</span> の値を求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) グラフの <span class=\"chem\">x</span> 切片を求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) この関数を <span class=\"chem\">y = px^2 + qx + r</span> の形で表し、<span class=\"chem\">y</span> 切片を書きなさい (Write down)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: In vertex form the vertex is <span class="chem">(h, k)</span>, so you can write down <span class="chem">h</span> and <span class="chem">k</span> straight away. Substitute <span class="chem">(2, -10)</span> to find <span class="chem">a</span>.
        "頂点形では頂点が <span class=\"chem\">(h, k)</span> なので、<span class=\"chem\">h</span> と <span class=\"chem\">k</span> はすぐに書けます。<span class=\"chem\">(2, -10)</span> を代入して <span class=\"chem\">a</span> を求めます。",
        // EN: For the <span class="chem">x</span>-intercepts, set <span class="chem">y = 0</span> and take square roots of <span class="chem">(x + 1)^2 = 4</span>; remember the <span class="chem">+-</span>.
        "<span class=\"chem\">x</span> 切片は <span class=\"chem\">y = 0</span> とおき、<span class=\"chem\">(x + 1)^2 = 4</span> の平方根をとります。<span class=\"chem\">+-</span> を忘れずに。",
      ],
      // EN: <p>(a) The vertex is <span class="chem">(h, k) = (-1, 8)</span>. Substituting <span class="chem">(2, -10)</span>: <span class="chem">-10 = a(3)^2 + 8 => 9a = -18 => a = -2</span>.<br>(b) <span class="chem">-2(x + 1)^2 + 8 = 0 => (x + 1)^2 = 4 => x + 1 = +-2 => x = 1</span> or <span class="chem">x = -3</span>. Check: the axis <span class="chem">x = -1</span> is halfway between them.<br>(c) <span class="chem">y = -2(x^2 + 2x + 1) + 8 = -2x^2 - 4x + 6</span>, so the <span class="chem">y</span>-intercept is <span class="chem">6</span>.</p>
      solution: "<p>(a) 頂点は <span class=\"chem\">(h, k) = (-1, 8)</span> です。<span class=\"chem\">(2, -10)</span> を代入すると <span class=\"chem\">-10 = a(3)^2 + 8 => 9a = -18 => a = -2</span> です。<br>(b) <span class=\"chem\">-2(x + 1)^2 + 8 = 0 => (x + 1)^2 = 4 => x + 1 = +-2 => x = 1</span> または <span class=\"chem\">x = -3</span> です。確認：軸 <span class=\"chem\">x = -1</span> はちょうどその中間にあります。<br>(c) <span class=\"chem\">y = -2(x^2 + 2x + 1) + 8 = -2x^2 - 4x + 6</span> なので、<span class=\"chem\">y</span> 切片は <span class=\"chem\">6</span> です。</p>",
      // EN: <p>(a) <span class="chem">h = -1</span>, <span class="chem">k = 8</span>, <span class="chem">a = -2</span>; (b) <span class="chem">x = -3</span> and <span class="chem">x = 1</span>; (c) <span class="chem">y = -2x^2 - 4x + 6</span>, <span class="chem">y</span>-intercept <span class="chem">6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">h = -1</span>、<span class=\"chem\">k = 8</span>、<span class=\"chem\">a = -2</span>；(b) <span class=\"chem\">x = -3</span> と <span class=\"chem\">x = 1</span>；(c) <span class=\"chem\">y = -2x^2 - 4x + 6</span>、<span class=\"chem\">y</span> 切片 <span class=\"chem\">6</span>。</p>",
      markscheme: [
        // EN: M1: Substitutes the point into y = a(x + 1)² + 8: −10 = a(2 + 1)² + 8, i.e. 9a = −18.
        "M1：点を y = a(x + 1)² + 8 に代入する：−10 = a(2 + 1)² + 8、すなわち 9a = −18。",
        // EN: A1: a = −2 (with h = −1, k = 8).
        "A1：a = −2（h = −1, k = 8 とともに）。",
        // EN: M1: Sets −2(x + 1)² + 8 = 0 ⇒ (x + 1)² = 4 ⇒ x + 1 = ±2.
        "M1：−2(x + 1)² + 8 = 0 ⇒ (x + 1)² = 4 ⇒ x + 1 = ±2 とおく。",
        // EN: A1: x = −3 and x = 1.
        "A1：x = −3 と x = 1。",
        // EN: A1: Expands −2(x² + 2x + 1) + 8 = −2x² − 4x + 6.
        "A1：−2(x² + 2x + 1) + 8 = −2x² − 4x + 6 と展開する。",
        // EN: A1: y-intercept is 6 (the point (0, 6)).
        "A1：y 切片は 6（点 (0, 6)）。",
      ],
    },

    // ── t2-2-q023 · numeric · exam · SL · SL 2.7 · 3 marks
    "t2-2-q023": {
      // EN: <p>The equation <span class="chem">2x^2 - 6x + 3 = 0</span> has two real roots. Find the larger root, giving your answer in exact form.</p>
      stem: "<p>方程式 <span class=\"chem\">2x^2 - 6x + 3 = 0</span> は 2 つの実数解をもつ。大きい方の解を求め (Find)、厳密な形で答えなさい。</p>",
      hints: [
        // EN: The quadratic does not factorise over the integers, so use the quadratic formula with <span class="chem">a = 2</span>, <span class="chem">b = -6</span>, <span class="chem">c = 3</span>.
        "この 2 次式は整数の範囲で因数分解できないので、<span class=\"chem\">a = 2</span>、<span class=\"chem\">b = -6</span>、<span class=\"chem\">c = 3</span> として解の公式を使います。",
        // EN: Simplify the surd: <span class="chem">sqrt(12) = 2 sqrt(3)</span>, then divide every term by the common factor.
        "根号を簡単にします：<span class=\"chem\">sqrt(12) = 2 sqrt(3)</span>。そのあと各項を共通因数で割ります。",
      ],
      // EN: <p><span class="chem">x = (6 +- sqrt(36 - 24))/4 = (6 +- sqrt(12))/4 = (6 +- 2 sqrt(3))/4 = (3 +- sqrt(3))/2</span>. The larger root is <span class="chem">(3 + sqrt(3))/2</span>.</p>
      solution: "<p><span class=\"chem\">x = (6 +- sqrt(36 - 24))/4 = (6 +- sqrt(12))/4 = (6 +- 2 sqrt(3))/4 = (3 +- sqrt(3))/2</span>。大きい方の解は <span class=\"chem\">(3 + sqrt(3))/2</span> です。</p>",
    },

    // ── t2-2-q024 · short · exam · SL · SL 2.7 · 4 marks
    "t2-2-q024": {
      // EN: <p>Solve the inequality <span class="chem">3x^2 &lt;= 5x + 2</span>.</p>
      stem: "<p>不等式 <span class=\"chem\">3x^2 &lt;= 5x + 2</span> を解きなさい。</p>",
      hints: [
        // EN: Move everything to one side so that you compare a quadratic with <span class="chem">0</span>. Do not divide by <span class="chem">x</span>.
        "すべてを一方の辺に移項し、2 次式と <span class=\"chem\">0</span> を比較する形にします。<span class=\"chem\">x</span> で割ってはいけません。",
        // EN: Factorise <span class="chem">3x^2 - 5x - 2</span> and sketch the parabola: it opens upwards, so where is it below the axis?
        "<span class=\"chem\">3x^2 - 5x - 2</span> を因数分解し、放物線の概形を描きます：下に凸なので、軸より下にあるのはどこでしょうか？",
      ],
      // EN: <p><span class="chem">3x^2 - 5x - 2 &lt;= 0 => (3x + 1)(x - 2) &lt;= 0</span>. The critical values are <span class="chem">x = -1/3</span> and <span class="chem">x = 2</span>. The parabola opens upwards, so it is on or below the <span class="chem">x</span>-axis between the roots: <span class="chem">-1/3 &lt;= x &lt;= 2</span>.</p>
      solution: "<p><span class=\"chem\">3x^2 - 5x - 2 &lt;= 0 => (3x + 1)(x - 2) &lt;= 0</span>。境界値は <span class=\"chem\">x = -1/3</span> と <span class=\"chem\">x = 2</span> です。放物線は下に凸なので、2 解の間で <span class=\"chem\">x</span> 軸上またはそれより下にあります：<span class=\"chem\">-1/3 &lt;= x &lt;= 2</span>。</p>",
      // EN: <p><span class="chem">-1/3 &lt;= x &lt;= 2</span></p>
      answer: "<p><span class=\"chem\">-1/3 &lt;= x &lt;= 2</span></p>",
      markscheme: [
        // EN: M1: Rearranges to one side: 3x² − 5x − 2 ≤ 0.
        "M1：一方の辺にまとめる：3x² − 5x − 2 ≤ 0。",
        // EN: A1: Factorises (3x + 1)(x − 2) or otherwise finds the critical values x = −1/3 and x = 2.
        "A1：(3x + 1)(x − 2) と因数分解する、または他の方法で境界値 x = −1/3 と x = 2 を求める。",
        // EN: M1: Uses a sketch of the upward parabola or a sign diagram to see the expression is ≤ 0 between the roots.
        "M1：下に凸の放物線の概形または符号図を用いて、2 解の間で式が ≤ 0 となることを確認する。",
        // EN: A1: −1/3 ≤ x ≤ 2 (inclusive inequalities required).
        "A1：−1/3 ≤ x ≤ 2（等号を含む不等号が必要）。",
      ],
    },

    // ── t2-2-q025 · short · exam · SL · SL 2.8 · 7 marks
    "t2-2-q025": {
      // EN: <p>Let <span class="chem">f(x) = (6x - 3)/(2x + 4)</span>, for <span class="chem">x != -2</span>.<br>(a) Write down the equation of (i) the vertical asymptote and (ii) the horizontal asymptote of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the coordinates of the points where the graph meets the axes. <strong>[2 marks]</strong><br>(c) Sketch the graph of <span class="chem">f</span>, showing the asymptotes and intercepts. <strong>[2 marks]</strong><br>(d) Hence write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">x != -2</span> に対して <span class=\"chem\">f(x) = (6x - 3)/(2x + 4)</span> とする。<br>(a) <span class=\"chem\">f</span> のグラフの (i) 鉛直漸近線と (ii) 水平漸近線の方程式を書きなさい (Write down)。 <strong>[2 marks]</strong><br>(b) グラフが座標軸と交わる点の座標を求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) 漸近線と切片を示して <span class=\"chem\">f</span> のグラフの概形を描きなさい (Sketch)。 <strong>[2 marks]</strong><br>(d) これを用いて (Hence)、<span class=\"chem\">f</span> の値域を書きなさい (Write down)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Set the denominator equal to zero for the vertical asymptote. For the horizontal asymptote, divide the <span class="chem">x</span>-coefficients: <span class="chem">a/c</span>.
        "鉛直漸近線は分母を 0 とおいて求めます。水平漸近線は <span class=\"chem\">x</span> の係数の比 <span class=\"chem\">a/c</span> です。",
        // EN: The <span class="chem">x</span>-intercept comes from the numerator being zero; the <span class="chem">y</span>-intercept is <span class="chem">f(0)</span>.
        "<span class=\"chem\">x</span> 切片は分子が 0 になるところから得られ、<span class=\"chem\">y</span> 切片は <span class=\"chem\">f(0)</span> です。",
        // EN: Put both intercepts on your sketch first. They tell you which pair of opposite regions the branches lie in.
        "まず 2 つの切片を概形にかき込みます。それによって、2 つの枝がどの対角の領域にあるかがわかります。",
      ],
      // EN: <p>(a) <span class="chem">2x + 4 = 0 => x = -2</span>; horizontal asymptote <span class="chem">y = 6/2 = 3</span>.<br>(b) <span class="chem">6x - 3 = 0 => x = 1/2</span>, giving <span class="chem">(1/2, 0)</span>; <span class="chem">f(0) = -3/4</span>, giving <span class="chem">(0, -3/4)</span>.<br>(c) Both intercepts lie to the right of <span class="chem">x = -2</span> and below <span class="chem">y = 3</span>, so one branch runs through them from near <span class="chem">x = -2</span> (going down to <span class="chem">-infty</span>) up towards <span class="chem">y = 3</span>. The other branch is in the opposite region: left of <span class="chem">x = -2</span>, above <span class="chem">y = 3</span>.<br>(d) The graph never reaches its horizontal asymptote, so the range is <span class="chem">y != 3</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2x + 4 = 0 => x = -2</span>。水平漸近線は <span class=\"chem\">y = 6/2 = 3</span> です。<br>(b) <span class=\"chem\">6x - 3 = 0 => x = 1/2</span> より <span class=\"chem\">(1/2, 0)</span>、<span class=\"chem\">f(0) = -3/4</span> より <span class=\"chem\">(0, -3/4)</span> です。<br>(c) 2 つの切片はどちらも <span class=\"chem\">x = -2</span> の右側かつ <span class=\"chem\">y = 3</span> の下側にあるので、一方の枝はそれらを通り、<span class=\"chem\">x = -2</span> の近く（<span class=\"chem\">-infty</span> へ下がる）から <span class=\"chem\">y = 3</span> へ向かって上がります。もう一方の枝は対角の領域、すなわち <span class=\"chem\">x = -2</span> の左側かつ <span class=\"chem\">y = 3</span> の上側にあります。<br>(d) グラフは水平漸近線に決して達しないので、値域は <span class=\"chem\">y != 3</span> です。</p>",
      // EN: <p>(a) (i) <span class="chem">x = -2</span>; (ii) <span class="chem">y = 3</span>; (b) <span class="chem">(1/2, 0)</span> and <span class="chem">(0, -3/4)</span>; (c) a hyperbola in the top-left and bottom-right regions formed by the asymptotes, passing through both intercepts; (d) <span class="chem">y != 3</span> (all real <span class="chem">y</span> except <span class="chem">3</span>).</p>
      answer: "<p>(a) (i) <span class=\"chem\">x = -2</span>；(ii) <span class=\"chem\">y = 3</span>；(b) <span class=\"chem\">(1/2, 0)</span> と <span class=\"chem\">(0, -3/4)</span>；(c) 漸近線によって分けられた左上と右下の領域にあり、2 つの切片を通る双曲線；(d) <span class=\"chem\">y != 3</span>（<span class=\"chem\">3</span> を除くすべての実数 <span class=\"chem\">y</span>）。</p>",
      markscheme: [
        // EN: A1: Vertical asymptote x = −2.
        "A1：鉛直漸近線 x = −2。",
        // EN: A1: Horizontal asymptote y = 3 (ratio 6/2 of the x-coefficients).
        "A1：水平漸近線 y = 3（x の係数の比 6/2）。",
        // EN: A1: x-intercept (1/2, 0) from 6x − 3 = 0.
        "A1：6x − 3 = 0 より x 切片 (1/2, 0)。",
        // EN: A1: y-intercept (0, −3/4) from f(0) = −3/4.
        "A1：f(0) = −3/4 より y 切片 (0, −3/4)。",
        // EN: A1: Sketch shows both asymptotes and a two-branch hyperbola approaching them.
        "A1：概形に 2 本の漸近線と、それらに近づく 2 つの枝をもつ双曲線が示されている。",
        // EN: A1: Correct branches: the branch through (1/2, 0) and (0, −3/4) lies to the right of x = −2 and below y = 3; the other branch lies to the left of x = −2 and above y = 3.
        "A1：枝が正しい：(1/2, 0) と (0, −3/4) を通る枝は x = −2 の右側かつ y = 3 の下側にあり、もう一方の枝は x = −2 の左側かつ y = 3 の上側にある。",
        // EN: A1: Range y ≠ 3.
        "A1：値域 y ≠ 3。",
      ],
    },

    // ── t2-2-q026 · numeric · foundation · SL · SL 2.9 · 2 marks
    "t2-2-q026": {
      // EN: <p>The function <span class="chem">f(x) = 2^{3x}</span> can be written in the form <span class="chem">f(x) = e^{kx}</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>関数 <span class=\"chem\">f(x) = 2^{3x}</span> は <span class=\"chem\">f(x) = e^{kx}</span> の形で表せる。<span class=\"chem\">k</span> の厳密な値を求めなさい (Find)。</p>",
      hints: [
        // EN: The formula booklet gives <span class="chem">a^x = e^{x ln a}</span>. Write <span class="chem">2^{3x}</span> as <span class="chem">(2^3)^x</span> or apply the identity with exponent <span class="chem">3x</span>.
        "公式集には <span class=\"chem\">a^x = e^{x ln a}</span> があります。<span class=\"chem\">2^{3x}</span> を <span class=\"chem\">(2^3)^x</span> と書くか、指数を <span class=\"chem\">3x</span> としてこの恒等式を使います。",
      ],
      // EN: <p>Using <span class="chem">a^x = e^{x ln a}</span>: <span class="chem">2^{3x} = e^{3x ln 2}</span>, so <span class="chem">k = 3 ln 2</span> (equivalently <span class="chem">ln 8</span>).</p>
      solution: "<p><span class=\"chem\">a^x = e^{x ln a}</span> を使うと <span class=\"chem\">2^{3x} = e^{3x ln 2}</span> なので、<span class=\"chem\">k = 3 ln 2</span>（<span class=\"chem\">ln 8</span> と同値）です。</p>",
    },

    // ── t2-2-q027 · short · exam · SL · SL 2.9, 2.5 · 6 marks
    "t2-2-q027": {
      // EN: <p>Let <span class="chem">f(x) = ln(2x - 4) + 1</span>, for <span class="chem">x &gt; 2</span>.<br>(a) Write down the equation of the vertical asymptote of the graph of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(b) Find the exact <span class="chem">x</span>-intercept of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(c) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[2 marks]</strong><br>(d) Write down the equation of the horizontal asymptote of the graph of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">x &gt; 2</span> に対して <span class=\"chem\">f(x) = ln(2x - 4) + 1</span> とする。<br>(a) <span class=\"chem\">f</span> のグラフの鉛直漸近線の方程式を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(b) <span class=\"chem\">f</span> のグラフの <span class=\"chem\">x</span> 切片の厳密な値を求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) <span class=\"chem\">f^{-1}(x)</span> を表す式を求めなさい (Find)。 <strong>[2 marks]</strong><br>(d) <span class=\"chem\">f^{-1}</span> のグラフの水平漸近線の方程式を書きなさい (Write down)。 <strong>[1 mark]</strong></p>",
      hints: [
        // EN: A logarithm needs a positive argument, and its graph has a vertical asymptote where the argument is zero.
        "対数の真数は正でなければならず、そのグラフは真数が 0 になるところに鉛直漸近線をもちます。",
        // EN: For (b), set <span class="chem">f(x) = 0</span>, isolate the logarithm and use <span class="chem">ln u = -1 => u = e^{-1}</span>.
        "(b) では <span class=\"chem\">f(x) = 0</span> とおき、対数だけを一方の辺に残して <span class=\"chem\">ln u = -1 => u = e^{-1}</span> を使います。",
        // EN: For (d), the asymptotes of <span class="chem">f^{-1}</span> are the reflections of those of <span class="chem">f</span> in <span class="chem">y = x</span>.
        "(d) では、<span class=\"chem\">f^{-1}</span> の漸近線は <span class=\"chem\">f</span> の漸近線を <span class=\"chem\">y = x</span> に関して対称移動したものです。",
      ],
      // EN: <p>(a) <span class="chem">2x - 4 = 0 => x = 2</span>.<br>(b) <span class="chem">ln(2x - 4) = -1 => 2x - 4 = e^{-1} => x = 2 + 1/(2e)</span>.<br>(c) Let <span class="chem">x = ln(2y - 4) + 1</span>. Then <span class="chem">e^{x - 1} = 2y - 4</span>, so <span class="chem">f^{-1}(x) = (e^{x - 1} + 4)/2</span>.<br>(d) As <span class="chem">x -&gt; -infty</span>, <span class="chem">e^{x - 1} -&gt; 0</span>, so <span class="chem">f^{-1}(x) -&gt; 2</span>: the horizontal asymptote is <span class="chem">y = 2</span>, the reflection of <span class="chem">x = 2</span> in <span class="chem">y = x</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2x - 4 = 0 => x = 2</span>。<br>(b) <span class=\"chem\">ln(2x - 4) = -1 => 2x - 4 = e^{-1} => x = 2 + 1/(2e)</span>。<br>(c) <span class=\"chem\">x = ln(2y - 4) + 1</span> とおきます。すると <span class=\"chem\">e^{x - 1} = 2y - 4</span> なので、<span class=\"chem\">f^{-1}(x) = (e^{x - 1} + 4)/2</span> です。<br>(d) <span class=\"chem\">x -&gt; -infty</span> のとき <span class=\"chem\">e^{x - 1} -&gt; 0</span> なので、<span class=\"chem\">f^{-1}(x) -&gt; 2</span> となります。水平漸近線は <span class=\"chem\">y = 2</span> であり、これは <span class=\"chem\">x = 2</span> を <span class=\"chem\">y = x</span> に関して対称移動したものです。</p>",
      // EN: <p>(a) <span class="chem">x = 2</span>; (b) <span class="chem">x = 2 + 1/(2e)</span>; (c) <span class="chem">f^{-1}(x) = (e^{x - 1} + 4)/2</span>; (d) <span class="chem">y = 2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x = 2</span>; (b) <span class=\"chem\">x = 2 + 1/(2e)</span>; (c) <span class=\"chem\">f^{-1}(x) = (e^{x - 1} + 4)/2</span>; (d) <span class=\"chem\">y = 2</span>.</p>",
      markscheme: [
        // EN: A1: x = 2 (where 2x − 4 = 0).
        "A1：x = 2（2x − 4 = 0 となるところ）。",
        // EN: M1: Sets f(x) = 0: ln(2x − 4) = −1 ⇒ 2x − 4 = e⁻¹.
        "M1：f(x) = 0 とおく：ln(2x − 4) = −1 ⇒ 2x − 4 = e⁻¹。",
        // EN: A1: x = 2 + 1/(2e) (or (4e + 1)/(2e)).
        "A1：x = 2 + 1/(2e)（または (4e + 1)/(2e)）。",
        // EN: M1: Interchanges x and y and removes the logarithm: x − 1 = ln(2y − 4) ⇒ e^(x − 1) = 2y − 4.
        "M1：x と y を入れ替えて対数を外す：x − 1 = ln(2y − 4) ⇒ e^(x − 1) = 2y − 4。",
        // EN: A1: f⁻¹(x) = (e^(x − 1) + 4)/2.
        "A1: f⁻¹(x) = (e^(x − 1) + 4)/2.",
        // EN: A1: y = 2 (the reflection of x = 2 in y = x).
        "A1：y = 2（x = 2 を y = x に関して対称移動したもの）。",
      ],
    },

    // ── t2-2-q028 · numeric · exam · SL · SL 2.9 · 4 marks
    "t2-2-q028": {
      // EN: <p>The temperature, in °C, of a metal rod <span class="chem">t</span> minutes after it is taken out of a furnace is modelled by <span class="chem">P(t) = 40 + 60 e^{-kt}</span>, where <span class="chem">k &gt; 0</span>. After <span class="chem">10</span> minutes the temperature is <span class="chem">55</span> °C. Find the exact value of <span class="chem">k</span>, giving your answer in the form <span class="chem">(ln a)/b</span>, where <span class="chem">a, b ∈ ℤ^+</span> and <span class="chem">a</span> is prime.</p>
      stem: "<p>炉から取り出して <span class=\"chem\">t</span> 分後の金属棒の温度（°C）が <span class=\"chem\">P(t) = 40 + 60 e^{-kt}</span>（<span class=\"chem\">k &gt; 0</span>）でモデル化されている。<span class=\"chem\">10</span> 分後の温度は <span class=\"chem\">55</span> °C であった。<span class=\"chem\">k</span> の厳密な値を求め (Find)、<span class=\"chem\">a, b ∈ ℤ^+</span> かつ <span class=\"chem\">a</span> が素数であるとして <span class=\"chem\">(ln a)/b</span> の形で答えなさい。</p>",
      hints: [
        // EN: Decode: you are given one data point, <span class="chem">P(10) = 55</span>. Substitute it and isolate the exponential term before taking logs.
        "解読：与えられているデータは 1 点 <span class=\"chem\">P(10) = 55</span> です。これを代入し、対数をとる前に指数の項だけを一方の辺に残します。",
        // EN: <span class="chem">60 e^{-10k} = 15 => e^{-10k} = 1/4</span>. Now take natural logs and use <span class="chem">ln 4 = 2 ln 2</span>.
        "<span class=\"chem\">60 e^{-10k} = 15 => e^{-10k} = 1/4</span>。ここで自然対数をとり、<span class=\"chem\">ln 4 = 2 ln 2</span> を使います。",
      ],
      // EN: <p><span class="chem">40 + 60 e^{-10k} = 55 => e^{-10k} = 15/60 = 1/4 => -10k = ln(1/4) = -ln 4 => k = (ln 4)/10 = (2 ln 2)/10 = (ln 2)/5</span>.</p>
      solution: "<p><span class=\"chem\">40 + 60 e^{-10k} = 55 => e^{-10k} = 15/60 = 1/4 => -10k = ln(1/4) = -ln 4 => k = (ln 4)/10 = (2 ln 2)/10 = (ln 2)/5</span>.</p>",
    },

    // ── t2-2-q029 · numeric · exam · SL · SL 2.10, 1.7 · 4 marks
    "t2-2-q029": {
      // EN: <p>Solve the equation <span class="chem">2^{x + 1} = 3^x</span>, giving your answer in the form <span class="chem">(ln a)/(ln b - ln a)</span>, where <span class="chem">a, b ∈ ℤ^+</span>.</p>
      stem: "<p>方程式 <span class=\"chem\">2^{x + 1} = 3^x</span> を解き (Solve)、<span class=\"chem\">a, b ∈ ℤ^+</span> として <span class=\"chem\">(ln a)/(ln b - ln a)</span> の形で答えなさい。</p>",
      hints: [
        // EN: The two sides have different bases, so take natural logs of both sides and bring the powers down.
        "両辺の底が異なるので、両辺の自然対数をとり、指数を前に下ろします。",
        // EN: <span class="chem">(x + 1) ln 2 = x ln 3</span>. Collect the <span class="chem">x</span> terms on one side and factorise.
        "<span class=\"chem\">(x + 1) ln 2 = x ln 3</span>。<span class=\"chem\">x</span> を含む項を一方の辺に集めてくくり出します。",
      ],
      // EN: <p>Taking natural logs: <span class="chem">(x + 1) ln 2 = x ln 3 => ln 2 = x ln 3 - x ln 2 = x(ln 3 - ln 2)</span>, so <span class="chem">x = (ln 2)/(ln 3 - ln 2)</span> (<span class="chem">≈ 1.71</span>).</p>
      solution: "<p>自然対数をとると <span class=\"chem\">(x + 1) ln 2 = x ln 3 => ln 2 = x ln 3 - x ln 2 = x(ln 3 - ln 2)</span> なので、<span class=\"chem\">x = (ln 2)/(ln 3 - ln 2)</span>（<span class=\"chem\">≈ 1.71</span>）です。</p>",
    },

    // ── t2-2-q030 · short · challenge · SL · SL 2.6 · 8 marks
    "t2-2-q030": {
      // EN: <p>A farmer has <span class="chem">40</span> m of fencing to make a rectangular pen against a straight stone wall. The wall forms one long side of the pen, so fencing is needed for the other three sides only. The two sides perpendicular to the wall each have length <span class="chem">x</span> m.<br>(a) Show that the area of the pen is <span class="chem">A = 40x - 2x^2</span> square metres. <strong>[2 marks]</strong><br>(b) Write <span class="chem">A</span> in the form <span class="chem">a(x - h)^2 + k</span>. <strong>[2 marks]</strong><br>(c) Write down the largest possible area if the wall is long enough. <strong>[1 mark]</strong><br>(d) The wall is only <span class="chem">16</span> m long, and the side parallel to the wall cannot be longer than the wall. Find the largest possible area of the pen in this case. <strong>[3 marks]</strong></p>
      stem: "<p>ある農家が、まっすぐな石垣に沿って長方形の囲いを作るために <span class=\"chem\">40</span> m の柵をもっている。石垣が囲いの長い辺の 1 つになるので、柵が必要なのは残りの 3 辺だけである。石垣に垂直な 2 辺の長さはどちらも <span class=\"chem\">x</span> m である。<br>(a) 囲いの面積が <span class=\"chem\">A = 40x - 2x^2</span> 平方メートルであることを示しなさい (Show that)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">A</span> を <span class=\"chem\">a(x - h)^2 + k</span> の形で表しなさい。 <strong>[2 marks]</strong><br>(c) 石垣が十分に長いとき、面積の最大値を書きなさい (Write down)。 <strong>[1 mark]</strong><br>(d) 石垣の長さは <span class=\"chem\">16</span> m しかなく、石垣に平行な辺は石垣より長くできない。この場合の囲いの面積の最大値を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a quadratic maximum problem with a hidden restriction. The wall length limits the side parallel to the wall, which changes the domain of <span class="chem">x</span>, so the vertex may no longer be allowed.
        "解読：これは隠れた制約つきの 2 次関数の最大値問題です。石垣の長さが石垣に平行な辺を制限し、<span class=\"chem\">x</span> の定義域が変わるので、頂点がもはや許されないかもしれません。",
        // EN: The three fenced sides are <span class="chem">x</span>, <span class="chem">x</span> and <span class="chem">40 - 2x</span>. Multiply two adjacent sides for the area.
        "柵を張る 3 辺は <span class=\"chem\">x</span>、<span class=\"chem\">x</span>、<span class=\"chem\">40 - 2x</span> です。隣り合う 2 辺を掛けて面積を求めます。",
        // EN: In (d), turn "the side parallel to the wall is at most <span class="chem">16</span> m" into an inequality for <span class="chem">x</span>. Is the vertex <span class="chem">x = 10</span> inside the allowed set?
        "(d) では、「石垣に平行な辺は <span class=\"chem\">16</span> m 以下」を <span class=\"chem\">x</span> の不等式に直します。頂点 <span class=\"chem\">x = 10</span> は許される範囲に入っていますか？",
        // EN: If the vertex is outside the allowed interval, the maximum of a parabola on that interval is at the end-point nearest to the vertex.
        "頂点が許される区間の外にあるとき、その区間での放物線の最大値は頂点に最も近い端点でとります。",
      ],
      // EN: <p><strong>Decode:</strong> parts (a)–(c) are a standard "maximise a quadratic" problem. Part (d) adds a domain restriction hidden in words: the parallel side <span class="chem">40 - 2x</span> must be at most <span class="chem">16</span>.</p><p>(a) Fencing: <span class="chem">x + x + (40 - 2x) = 40</span>, so the parallel side is <span class="chem">40 - 2x</span> and <span class="chem">A = x(40 - 2x) = 40x - 2x^2</span>.<br>(b) <span class="chem">A = -2(x^2 - 20x) = -2[(x - 10)^2 - 100] = -2(x - 10)^2 + 200</span>.<br>(c) The maximum is <span class="chem">200</span> m² at <span class="chem">x = 10</span>, but then the parallel side is <span class="chem">20</span> m.<br>(d) We need <span class="chem">40 - 2x &lt;= 16 => x &gt;= 12</span> (and <span class="chem">x &lt; 20</span>). The vertex <span class="chem">x = 10</span> is not allowed. For <span class="chem">x &gt; 10</span> the parabola is decreasing, so the largest area is at <span class="chem">x = 12</span>: <span class="chem">A = 12 × 16 = 192</span> m².</p>
      solution: "<p><strong>解読：</strong>(a)–(c) は標準的な「2 次関数の最大化」の問題です。(d) では言葉の中に定義域の制約が隠れています：平行な辺 <span class=\"chem\">40 - 2x</span> は <span class=\"chem\">16</span> 以下でなければなりません。</p><p>(a) 柵：<span class=\"chem\">x + x + (40 - 2x) = 40</span> なので、平行な辺は <span class=\"chem\">40 - 2x</span> であり、<span class=\"chem\">A = x(40 - 2x) = 40x - 2x^2</span> です。<br>(b) <span class=\"chem\">A = -2(x^2 - 20x) = -2[(x - 10)^2 - 100] = -2(x - 10)^2 + 200</span>。<br>(c) 最大値は <span class=\"chem\">x = 10</span> のときの <span class=\"chem\">200</span> m² ですが、そのとき平行な辺は <span class=\"chem\">20</span> m になります。<br>(d) <span class=\"chem\">40 - 2x &lt;= 16 => x &gt;= 12</span>（かつ <span class=\"chem\">x &lt; 20</span>）が必要です。頂点 <span class=\"chem\">x = 10</span> は許されません。<span class=\"chem\">x &gt; 10</span> では放物線は減少しているので、面積が最大になるのは <span class=\"chem\">x = 12</span> のときで、<span class=\"chem\">A = 12 × 16 = 192</span> m² です。</p>",
      // EN: <p>(a) The side parallel to the wall is <span class="chem">40 - 2x</span>, so <span class="chem">A = x(40 - 2x) = 40x - 2x^2</span>; (b) <span class="chem">A = -2(x - 10)^2 + 200</span>; (c) <span class="chem">200</span> m²; (d) <span class="chem">192</span> m² (when <span class="chem">x = 12</span>).</p>
      answer: "<p>(a) 石垣に平行な辺は <span class=\"chem\">40 - 2x</span> なので <span class=\"chem\">A = x(40 - 2x) = 40x - 2x^2</span>；(b) <span class=\"chem\">A = -2(x - 10)^2 + 200</span>；(c) <span class=\"chem\">200</span> m²；(d) <span class=\"chem\">192</span> m²（<span class=\"chem\">x = 12</span> のとき）。</p>",
      markscheme: [
        // EN: M1: The side parallel to the wall has length 40 − 2x.
        "M1：石垣に平行な辺の長さは 40 − 2x。",
        // EN: A1: A = x(40 − 2x) = 40x − 2x². AG: the given line itself earns no mark.
        "A1：A = x(40 − 2x) = 40x − 2x²。AG：与えられた結果の行そのものには得点がない。",
        // EN: M1: Factorises −2(x² − 20x) and completes the square: −2[(x − 10)² − 100].
        "M1：−2(x² − 20x) とくくり出して平方完成する：−2[(x − 10)² − 100]。",
        // EN: A1: A = −2(x − 10)² + 200.
        "A1: A = −2(x − 10)² + 200.",
        // EN: A1: 200 m².
        "A1: 200 m².",
        // EN: M1: Writes the condition 40 − 2x ≤ 16 ⇒ x ≥ 12.
        "M1：条件 40 − 2x ≤ 16 ⇒ x ≥ 12 を書く。",
        // EN: R1: A is decreasing for x > 10 (right of the vertex), so on x ≥ 12 the maximum is at x = 12.
        "R1：x > 10（頂点の右側）で A は減少するので、x ≥ 12 での最大値は x = 12 でとる。",
        // EN: A1: A = 12 × 16 = 192 m².
        "A1: A = 12 × 16 = 192 m².",
      ],
    },

    // ── t2-2-q031 · numeric · challenge · SL · SL 2.7 · 5 marks
    "t2-2-q031": {
      // EN: <p>Consider the equation <span class="chem">kx^2 + 4x + k - 3 = 0</span>, where <span class="chem">k ∈ ℤ</span>. Find the number of integer values of <span class="chem">k</span> for which the equation has two distinct real roots.</p>
      stem: "<p><span class=\"chem\">k ∈ ℤ</span> として方程式 <span class=\"chem\">kx^2 + 4x + k - 3 = 0</span> を考える。この方程式が異なる 2 つの実数解をもつような整数 <span class=\"chem\">k</span> の値の個数を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "two distinct real roots" means <span class="chem">Delta &gt; 0</span>, which gives an interval for <span class="chem">k</span>. Then count the integers in it. There is a hidden condition: the equation must really be a quadratic.
        "解読：「異なる 2 つの実数解」は <span class=\"chem\">Delta &gt; 0</span> を意味し、<span class=\"chem\">k</span> の区間が得られます。次にその中の整数を数えます。隠れた条件があります：方程式は本当に 2 次方程式でなければなりません。",
        // EN: <span class="chem">Delta = 16 - 4k(k - 3)</span>. Set <span class="chem">Delta &gt; 0</span> and simplify to a quadratic inequality in <span class="chem">k</span>.
        "<span class=\"chem\">Delta = 16 - 4k(k - 3)</span>。<span class=\"chem\">Delta &gt; 0</span> とおき、<span class=\"chem\">k</span> の 2 次不等式に整理します。",
        // EN: You should get <span class="chem">-1 &lt; k &lt; 4</span>. Now check <span class="chem">k = 0</span> separately: what kind of equation is it then?
        "<span class=\"chem\">-1 &lt; k &lt; 4</span> が得られるはずです。次に <span class=\"chem\">k = 0</span> を別に調べます：そのとき方程式はどんな種類になりますか？",
      ],
      // EN: <p><strong>Decode:</strong> two distinct real roots needs a genuine quadratic (<span class="chem">k != 0</span>) with <span class="chem">Delta &gt; 0</span>; then count integers.</p><p><span class="chem">Delta = 16 - 4k(k - 3) &gt; 0 => 4 - k^2 + 3k &gt; 0 => k^2 - 3k - 4 &lt; 0 => (k - 4)(k + 1) &lt; 0 => -1 &lt; k &lt; 4</span>. The integers in this interval are <span class="chem">0, 1, 2, 3</span>. When <span class="chem">k = 0</span> the equation is <span class="chem">4x - 3 = 0</span>, which has only one root, so <span class="chem">k = 0</span> is rejected. That leaves <span class="chem">k = 1, 2, 3</span>: <strong>3</strong> values.</p>
      solution: "<p><strong>解読：</strong>異なる 2 つの実数解をもつには、本当の 2 次方程式（<span class=\"chem\">k != 0</span>）で <span class=\"chem\">Delta &gt; 0</span> であることが必要です。そのあと整数を数えます。</p><p><span class=\"chem\">Delta = 16 - 4k(k - 3) &gt; 0 => 4 - k^2 + 3k &gt; 0 => k^2 - 3k - 4 &lt; 0 => (k - 4)(k + 1) &lt; 0 => -1 &lt; k &lt; 4</span>。この区間にある整数は <span class=\"chem\">0, 1, 2, 3</span> です。<span class=\"chem\">k = 0</span> のとき方程式は <span class=\"chem\">4x - 3 = 0</span> となり、解は 1 つしかないので <span class=\"chem\">k = 0</span> は除外されます。残りは <span class=\"chem\">k = 1, 2, 3</span> で、<strong>3</strong> 個です。</p>",
    },

    // ── t2-2-q032 · short · challenge · SL · SL 2.8 · 7 marks
    "t2-2-q032": {
      // EN: <p>A small café has fixed costs of <span class="chem">$300</span> per day (rent, wages and power). Each cup of coffee it sells costs an extra <span class="chem">$2</span> in ingredients. The average cost per cup on a day when <span class="chem">n</span> cups are sold is <span class="chem">C(n)</span> dollars, where <span class="chem">n</span> is a positive integer.<br>(a) Show that <span class="chem">C(n) = (2n + 300)/n</span>, and write this in the form <span class="chem">C(n) = a + b/n</span>. <strong>[2 marks]</strong><br>(b) Find the least number of cups the café must sell in a day for the average cost per cup to be at most <span class="chem">$2.40</span>. <strong>[3 marks]</strong><br>(c) Write down the equation of the horizontal asymptote of the graph of <span class="chem">C</span>, and explain what it means for the café. <strong>[2 marks]</strong></p>
      stem: "<p>ある小さなカフェの固定費は 1 日 <span class=\"chem\">$300</span>（家賃、賃金、光熱費）である。コーヒーを 1 杯売るごとに材料費が <span class=\"chem\">$2</span> 余分にかかる。1 日に <span class=\"chem\">n</span> 杯売れた日の 1 杯あたりの平均費用を <span class=\"chem\">C(n)</span> ドルとする。ただし <span class=\"chem\">n</span> は正の整数である。<br>(a) <span class=\"chem\">C(n) = (2n + 300)/n</span> であることを示し (Show that)、これを <span class=\"chem\">C(n) = a + b/n</span> の形で表しなさい。 <strong>[2 marks]</strong><br>(b) 1 杯あたりの平均費用が <span class=\"chem\">$2.40</span> 以下になるために、カフェが 1 日に売らなければならない最小の杯数を求めなさい (Find)。 <strong>[3 marks]</strong><br>(c) <span class=\"chem\">C</span> のグラフの水平漸近線の方程式を書き (Write down)、それがカフェにとって何を意味するか説明しなさい (Explain)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "average cost per cup" means total cost divided by the number of cups. This builds a rational function <span class="chem">(ax + b)/(cx + d)</span> with <span class="chem">c = 1</span>, <span class="chem">d = 0</span>.
        "解読：「1 杯あたりの平均費用」は総費用を杯数で割ったものです。これにより <span class=\"chem\">c = 1</span>、<span class=\"chem\">d = 0</span> の有理関数 <span class=\"chem\">(ax + b)/(cx + d)</span> ができます。",
        // EN: The total cost on a day with <span class="chem">n</span> cups is the fixed cost plus <span class="chem">$2</span> for each cup.
        "<span class=\"chem\">n</span> 杯売れた日の総費用は、固定費に 1 杯につき <span class=\"chem\">$2</span> を加えたものです。",
        // EN: For (b), "at most" means <span class="chem">&lt;=</span>. Since <span class="chem">n &gt; 0</span>, you may multiply both sides by <span class="chem">n</span> without reversing the inequality.
        "(b) では「以下」は <span class=\"chem\">&lt;=</span> を意味します。<span class=\"chem\">n &gt; 0</span> なので、不等号の向きを変えずに両辺に <span class=\"chem\">n</span> を掛けてかまいません。",
      ],
      // EN: <p><strong>Decode:</strong> average cost = total cost ÷ number of cups, which gives a reciprocal-type model; "at most" gives an inequality; the long-run behaviour is the horizontal asymptote.</p><p>(a) Total cost <span class="chem">= 300 + 2n</span>, so <span class="chem">C(n) = (2n + 300)/n = 2 + 300/n</span>.<br>(b) <span class="chem">2 + 300/n &lt;= 2.4 => 300/n &lt;= 0.4 => n &gt;= 300/0.4 = 750</span>. The least number of cups is <span class="chem">750</span>.<br>(c) As <span class="chem">n -&gt; infty</span>, <span class="chem">300/n -&gt; 0</span>, so the asymptote is <span class="chem">C = 2</span>. The average cost per cup gets closer and closer to the <span class="chem">$2</span> ingredient cost but never reaches it, because some of the fixed cost is always included.</p>
      solution: "<p><strong>解読：</strong>平均費用 = 総費用 ÷ 杯数 であり、分数関数型のモデルになります。「以下」は不等式を与え、長期的なふるまいは水平漸近線で表されます。</p><p>(a) 総費用 <span class=\"chem\">= 300 + 2n</span> なので、<span class=\"chem\">C(n) = (2n + 300)/n = 2 + 300/n</span> です。<br>(b) <span class=\"chem\">2 + 300/n &lt;= 2.4 => 300/n &lt;= 0.4 => n &gt;= 300/0.4 = 750</span>。最小の杯数は <span class=\"chem\">750</span> です。<br>(c) <span class=\"chem\">n -&gt; infty</span> のとき <span class=\"chem\">300/n -&gt; 0</span> なので、漸近線は <span class=\"chem\">C = 2</span> です。固定費の一部が常に含まれるため、1 杯あたりの平均費用は材料費 <span class=\"chem\">$2</span> にどんどん近づきますが、決して達しません。</p>",
      // EN: <p>(a) Total cost <span class="chem">300 + 2n</span> divided by <span class="chem">n</span> cups: <span class="chem">C(n) = (2n + 300)/n = 2 + 300/n</span>; (b) <span class="chem">750</span> cups; (c) <span class="chem">C = 2</span>: however many cups are sold, the average cost per cup stays above <span class="chem">$2</span> and gets closer to it, because the fixed cost is shared over more cups.</p>
      answer: "<p>(a) 総費用 <span class=\"chem\">300 + 2n</span> を <span class=\"chem\">n</span> 杯で割る：<span class=\"chem\">C(n) = (2n + 300)/n = 2 + 300/n</span>；(b) <span class=\"chem\">750</span> 杯；(c) <span class=\"chem\">C = 2</span>：何杯売れても、1 杯あたりの平均費用は <span class=\"chem\">$2</span> より大きいままで、固定費がより多くの杯に分配されるのでそれに近づいていく。</p>",
      markscheme: [
        // EN: M1: Total daily cost = 300 + 2n, and average cost = total cost ÷ n. AG: C(n) = (2n + 300)/n; the given line itself earns no mark.
        "M1：1 日の総費用 = 300 + 2n、平均費用 = 総費用 ÷ n。AG：C(n) = (2n + 300)/n。与えられた結果の行そのものには得点がない。",
        // EN: A1: C(n) = 2 + 300/n.
        "A1: C(n) = 2 + 300/n.",
        // EN: M1: Sets up 2 + 300/n ≤ 2.40.
        "M1：2 + 300/n ≤ 2.40 を立てる。",
        // EN: A1: 300/n ≤ 0.4 ⇒ n ≥ 750 (multiplying by n is safe because n > 0).
        "A1：300/n ≤ 0.4 ⇒ n ≥ 750（n > 0 なので n を掛けても問題ない）。",
        // EN: A1: Least number of cups is 750.
        "A1：最小の杯数は 750。",
        // EN: A1: Horizontal asymptote C = 2.
        "A1：水平漸近線 C = 2。",
        // EN: R1: Interpretation: as n grows, the fixed $300 is shared over more cups, so the average cost approaches (but never reaches) the $2 ingredient cost.
        "R1：解釈：n が大きくなると固定費 $300 がより多くの杯に分配されるので、平均費用は材料費 $2 に近づく（が決して達しない）。",
      ],
    },

    // ── t2-2-q033 · numeric · challenge · SL · SL 2.9, 2.5 · 4 marks
    "t2-2-q033": {
      // EN: <p>The graph of <span class="chem">y = a^x</span>, where <span class="chem">a &gt; 0</span>, passes through the point <span class="chem">(3/2, 8)</span>. The point <span class="chem">(k, 2)</span> lies on the graph of the inverse function. Find the value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">a &gt; 0</span> として、<span class=\"chem\">y = a^x</span> のグラフは点 <span class=\"chem\">(3/2, 8)</span> を通る。点 <span class=\"chem\">(k, 2)</span> は逆関数のグラフ上にある。<span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: two separate facts. First use the given point to find the base <span class="chem">a</span>. Then remember that a point <span class="chem">(p, q)</span> on an inverse graph corresponds to <span class="chem">(q, p)</span> on the original graph.
        "解読：2 つの別々の事実があります。まず与えられた点を使って底 <span class=\"chem\">a</span> を求めます。次に、逆関数のグラフ上の点 <span class=\"chem\">(p, q)</span> はもとのグラフ上の <span class=\"chem\">(q, p)</span> に対応することを思い出します。",
        // EN: Solve <span class="chem">a^{3/2} = 8</span> by raising both sides to the power <span class="chem">2/3</span>.
        "両辺を <span class=\"chem\">2/3</span> 乗して <span class=\"chem\">a^{3/2} = 8</span> を解きます。",
        // EN: If <span class="chem">(k, 2)</span> is on the inverse, then <span class="chem">(2, k)</span> is on <span class="chem">y = a^x</span>.
        "<span class=\"chem\">(k, 2)</span> が逆関数のグラフ上にあるなら、<span class=\"chem\">(2, k)</span> は <span class=\"chem\">y = a^x</span> 上にあります。",
      ],
      // EN: <p><strong>Decode:</strong> find the base from the point, then swap coordinates to move between the graph and its inverse.</p><p><span class="chem">a^{3/2} = 8 => a = 8^{2/3} = (8^{1/3})^2 = 4</span>. The inverse of <span class="chem">y = 4^x</span> is <span class="chem">y = log_4 x</span>. Since <span class="chem">(k, 2)</span> lies on it, <span class="chem">log_4 k = 2 => k = 4^2 = 16</span>. (Equivalently, <span class="chem">(2, k)</span> lies on <span class="chem">y = 4^x</span>, so <span class="chem">k = 16</span>.)</p>
      solution: "<p><strong>解読：</strong>点から底を求め、座標を入れ替えてグラフとその逆関数のグラフを行き来します。</p><p><span class=\"chem\">a^{3/2} = 8 => a = 8^{2/3} = (8^{1/3})^2 = 4</span>。<span class=\"chem\">y = 4^x</span> の逆関数は <span class=\"chem\">y = log_4 x</span> です。<span class=\"chem\">(k, 2)</span> がその上にあるので、<span class=\"chem\">log_4 k = 2 => k = 4^2 = 16</span> です。（同様に、<span class=\"chem\">(2, k)</span> が <span class=\"chem\">y = 4^x</span> 上にあるので <span class=\"chem\">k = 16</span> です。）</p>",
    },

    // ── t2-2-q034 · numeric · challenge · SL · SL 1.7, 2.10 · 5 marks
    "t2-2-q034": {
      // EN: <p>Solve the equation <span class="chem">log_3 x = log_9(x + 6)</span>.</p>
      stem: "<p>方程式 <span class=\"chem\">log_3 x = log_9(x + 6)</span> を解きなさい (Solve)。</p>",
      hints: [
        // EN: Decode: the logarithms have different bases (<span class="chem">3</span> and <span class="chem">9 = 3^2</span>). Change them to the same base, solve the quadratic that appears, then check each root against the domain.
        "解読：対数の底が異なります（<span class=\"chem\">3</span> と <span class=\"chem\">9 = 3^2</span>）。同じ底にそろえ、現れる 2 次方程式を解き、各解を定義域と照らし合わせます。",
        // EN: Change of base: <span class="chem">log_9(x + 6) = log_3(x + 6)/log_3 9 = (1/2) log_3(x + 6)</span>.
        "底の変換：<span class=\"chem\">log_9(x + 6) = log_3(x + 6)/log_3 9 = (1/2) log_3(x + 6)</span>。",
        // EN: You should reach <span class="chem">x^2 = x + 6</span>. Which root makes <span class="chem">log_3 x</span> undefined?
        "<span class=\"chem\">x^2 = x + 6</span> にたどり着くはずです。どちらの解で <span class=\"chem\">log_3 x</span> が定義されなくなりますか？",
      ],
      // EN: <p><strong>Decode:</strong> a "same base" problem in disguise, followed by a domain check (<span class="chem">x &gt; 0</span> and <span class="chem">x + 6 &gt; 0</span>).</p><p><span class="chem">log_9(x + 6) = (1/2) log_3(x + 6)</span>, so <span class="chem">2 log_3 x = log_3(x + 6) => log_3 x^2 = log_3(x + 6) => x^2 = x + 6 => (x - 3)(x + 2) = 0</span>. The root <span class="chem">x = -2</span> is rejected because <span class="chem">log_3(-2)</span> is undefined. So <span class="chem">x = 3</span>. Check: <span class="chem">log_3 3 = 1</span> and <span class="chem">log_9 9 = 1</span>.</p>
      solution: "<p><strong>解読：</strong>形を変えた「底をそろえる」問題で、そのあと定義域の確認（<span class=\"chem\">x &gt; 0</span> かつ <span class=\"chem\">x + 6 &gt; 0</span>）が必要です。</p><p><span class=\"chem\">log_9(x + 6) = (1/2) log_3(x + 6)</span> なので、<span class=\"chem\">2 log_3 x = log_3(x + 6) => log_3 x^2 = log_3(x + 6) => x^2 = x + 6 => (x - 3)(x + 2) = 0</span> です。<span class=\"chem\">log_3(-2)</span> は定義されないので、解 <span class=\"chem\">x = -2</span> は除外されます。よって <span class=\"chem\">x = 3</span> です。確認：<span class=\"chem\">log_3 3 = 1</span>、<span class=\"chem\">log_9 9 = 1</span>。</p>",
    },

    // ── t2-2-q035 · short · challenge · SL · SL 2.8 · 7 marks
    "t2-2-q035": {
      // EN: <p>A tank holds <span class="chem">50</span> litres of water in which <span class="chem">2</span> kg of salt is dissolved. Starting at <span class="chem">t = 0</span>, salt water containing <span class="chem">0.3</span> kg of salt per litre is pumped into the tank at <span class="chem">4</span> litres per minute. Nothing leaves the tank, and the mixture stays evenly mixed. The tank can hold at most <span class="chem">200</span> litres.<br>(a) Show that the concentration of salt, in kg per litre, after <span class="chem">t</span> minutes is <span class="chem">C(t) = (2 + 1.2t)/(50 + 4t)</span>. <strong>[2 marks]</strong><br>(b) Write down the equation of the horizontal asymptote of the graph of <span class="chem">C</span>, and explain its meaning in context. <strong>[2 marks]</strong><br>(c) A scientist claims that the concentration will reach <span class="chem">0.25</span> kg per litre before the tank overflows. Determine whether the claim is correct. <strong>[3 marks]</strong></p>
      stem: "<p>あるタンクに <span class=\"chem\">50</span> リットルの水が入っており、その中に <span class=\"chem\">2</span> kg の食塩が溶けている。<span class=\"chem\">t = 0</span> から、1 リットルあたり <span class=\"chem\">0.3</span> kg の食塩を含む食塩水が毎分 <span class=\"chem\">4</span> リットルの割合でタンクに注入される。タンクからは何も流出せず、混合液は常に均一に混ざっている。タンクの容量は最大 <span class=\"chem\">200</span> リットルである。<br>(a) <span class=\"chem\">t</span> 分後の食塩の濃度（kg/リットル）が <span class=\"chem\">C(t) = (2 + 1.2t)/(50 + 4t)</span> であることを示しなさい (Show that)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">C</span> のグラフの水平漸近線の方程式を書き (Write down)、その意味を文脈に即して説明しなさい (Explain)。 <strong>[2 marks]</strong><br>(c) ある科学者は、タンクがあふれる前に濃度が 1 リットルあたり <span class=\"chem\">0.25</span> kg に達すると主張している。この主張が正しいかどうか判定しなさい (Determine)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: concentration = mass of salt ÷ volume of liquid, and both grow linearly with <span class="chem">t</span>. That is a rational function <span class="chem">(at + b)/(ct + d)</span>. The capacity of <span class="chem">200</span> litres is a hidden domain restriction.
        "解読：濃度 = 食塩の質量 ÷ 液体の体積 であり、どちらも <span class=\"chem\">t</span> について 1 次式で増加します。これは有理関数 <span class=\"chem\">(at + b)/(ct + d)</span> です。容量 <span class=\"chem\">200</span> リットルは隠れた定義域の制約です。",
        // EN: Each minute <span class="chem">4</span> litres arrive, carrying <span class="chem">4 × 0.3 = 1.2</span> kg of salt.
        "毎分 <span class=\"chem\">4</span> リットルが流入し、<span class=\"chem\">4 × 0.3 = 1.2</span> kg の食塩を運び込みます。",
        // EN: For (c), compare two times: when the tank is full, and when <span class="chem">C(t) = 0.25</span>.
        "(c) では 2 つの時刻を比べます：タンクが満杯になるときと、<span class=\"chem\">C(t) = 0.25</span> となるときです。",
      ],
      // EN: <p><strong>Decode:</strong> build a linear-over-linear model, read its asymptote, then test the claim against the domain <span class="chem">0 &lt;= t &lt;= 37.5</span> set by the tank capacity.</p><p>(a) After <span class="chem">t</span> minutes the salt is <span class="chem">2 + 0.3 × 4t = 2 + 1.2t</span> kg and the volume is <span class="chem">50 + 4t</span> L, so <span class="chem">C(t) = (2 + 1.2t)/(50 + 4t)</span>.<br>(b) Horizontal asymptote <span class="chem">C = 1.2/4 = 0.3</span>: the mixture becomes more and more like the incoming salt water.<br>(c) The tank is full when <span class="chem">50 + 4t = 200 => t = 37.5</span> min. Solving <span class="chem">C(t) = 0.25</span>: <span class="chem">2 + 1.2t = 0.25(50 + 4t) = 12.5 + t => 0.2t = 10.5 => t = 52.5</span> min. This is after the tank overflows (at <span class="chem">t = 37.5</span>, <span class="chem">C = 47/200 = 0.235</span>), so the claim is <strong>not</strong> correct.</p>
      solution: "<p><strong>解読：</strong>1 次式 ÷ 1 次式のモデルを作り、その漸近線を読み取り、タンクの容量で決まる定義域 <span class=\"chem\">0 &lt;= t &lt;= 37.5</span> に照らして主張を検証します。</p><p>(a) <span class=\"chem\">t</span> 分後の食塩は <span class=\"chem\">2 + 0.3 × 4t = 2 + 1.2t</span> kg、体積は <span class=\"chem\">50 + 4t</span> L なので、<span class=\"chem\">C(t) = (2 + 1.2t)/(50 + 4t)</span> です。<br>(b) 水平漸近線は <span class=\"chem\">C = 1.2/4 = 0.3</span> です：混合液は流入する食塩水にどんどん近づいていきます。<br>(c) タンクが満杯になるのは <span class=\"chem\">50 + 4t = 200 => t = 37.5</span> 分のときです。<span class=\"chem\">C(t) = 0.25</span> を解くと <span class=\"chem\">2 + 1.2t = 0.25(50 + 4t) = 12.5 + t => 0.2t = 10.5 => t = 52.5</span> 分です。これはタンクがあふれた後です（<span class=\"chem\">t = 37.5</span> で <span class=\"chem\">C = 47/200 = 0.235</span>）。よって主張は正しく<strong>ない</strong>。</p>",
      // EN: <p>(a) Salt <span class="chem">2 + 0.3(4t) = 2 + 1.2t</span> kg in <span class="chem">50 + 4t</span> litres; (b) <span class="chem">C = 0.3</span>: in the long run the concentration approaches that of the incoming salt water; (c) not correct: <span class="chem">C = 0.25</span> needs <span class="chem">t = 52.5</span> min, but the tank is full at <span class="chem">t = 37.5</span> min (when <span class="chem">C = 0.235</span>).</p>
      answer: "<p>(a) 食塩 <span class=\"chem\">2 + 0.3(4t) = 2 + 1.2t</span> kg が <span class=\"chem\">50 + 4t</span> リットル中にある；(b) <span class=\"chem\">C = 0.3</span>：長期的には濃度は流入する食塩水の濃度に近づく；(c) 正しくない：<span class=\"chem\">C = 0.25</span> となるには <span class=\"chem\">t = 52.5</span> 分が必要だが、タンクは <span class=\"chem\">t = 37.5</span> 分で満杯になる（そのとき <span class=\"chem\">C = 0.235</span>）。</p>",
      markscheme: [
        // EN: M1: Salt after t minutes = 2 + 0.3 × 4t = 2 + 1.2t kg; volume = 50 + 4t litres.
        "M1：t 分後の食塩 = 2 + 0.3 × 4t = 2 + 1.2t kg、体積 = 50 + 4t リットル。",
        // EN: A1: Concentration = salt ÷ volume. AG: C(t) = (2 + 1.2t)/(50 + 4t); the given line itself earns no mark.
        "A1：濃度 = 食塩 ÷ 体積。AG：C(t) = (2 + 1.2t)/(50 + 4t)。与えられた結果の行そのものには得点がない。",
        // EN: A1: Horizontal asymptote C = 1.2/4 = 0.3.
        "A1：水平漸近線 C = 1.2/4 = 0.3。",
        // EN: R1: The concentration approaches (but does not reach) 0.3 kg/L, the concentration of the incoming salt water.
        "R1：濃度は、流入する食塩水の濃度である 0.3 kg/L に近づく（が達しない）。",
        // EN: M1: Finds the time to fill: 50 + 4t = 200 ⇒ t = 37.5 minutes.
        "M1：満杯になるまでの時間を求める：50 + 4t = 200 ⇒ t = 37.5 分。",
        // EN: A1: Solves C(t) = 0.25: 2 + 1.2t = 12.5 + t ⇒ t = 52.5 minutes (or finds C(37.5) = 47/200 = 0.235).
        "A1：C(t) = 0.25 を解く：2 + 1.2t = 12.5 + t ⇒ t = 52.5 分（または C(37.5) = 47/200 = 0.235 を求める）。",
        // EN: R1: Since 52.5 > 37.5 (or 0.235 < 0.25), the tank overflows first, so the claim is not correct.
        "R1：52.5 > 37.5（または 0.235 < 0.25）なので先にタンクがあふれる。よって主張は正しくない。",
      ],
    },

    // ── t2-2-q036 · numeric · exam · SL · SL 2.6, 2.7 · 3 marks
    "t2-2-q036": {
      // EN: <p>A ball is thrown upwards from a balcony. Its height above the ground, in metres, <span class="chem">t</span> seconds after it is thrown is modelled by <span class="chem">h(t) = -4.9t^2 + 12.5t + 1.6</span>, for <span class="chem">t &gt;= 0</span>. Find the time at which the ball hits the ground, giving your answer in seconds correct to 3 significant figures.</p>
      stem: "<p>バルコニーからボールを上向きに投げる。投げてから <span class=\"chem\">t</span> 秒後のボールの地面からの高さ（メートル）は、<span class=\"chem\">t &gt;= 0</span> に対して <span class=\"chem\">h(t) = -4.9t^2 + 12.5t + 1.6</span> でモデル化される。ボールが地面に落ちる時刻を求め (Find)、秒単位で有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: The ball hits the ground when <span class="chem">h(t) = 0</span>. Use the GDC polynomial solver, or graph <span class="chem">h</span> and find its zero.
        "ボールが地面に落ちるのは <span class=\"chem\">h(t) = 0</span> のときです。GDC の多項式ソルバーを使うか、<span class=\"chem\">h</span> のグラフをかいて零点を求めます。",
        // EN: You get two roots. One is negative; reject it because <span class="chem">t &gt;= 0</span>.
        "解が 2 つ得られます。1 つは負なので、<span class=\"chem\">t &gt;= 0</span> より除外します。",
      ],
      // EN: <p>Solving <span class="chem">-4.9t^2 + 12.5t + 1.6 = 0</span> on the GDC gives <span class="chem">t ≈ -0.122</span> or <span class="chem">t ≈ 2.6732</span>. Since <span class="chem">t &gt;= 0</span>, the ball lands at <span class="chem">t = 2.67</span> s (3 s.f.).</p>
      solution: "<p>GDC で <span class=\"chem\">-4.9t^2 + 12.5t + 1.6 = 0</span> を解くと <span class=\"chem\">t ≈ -0.122</span> または <span class=\"chem\">t ≈ 2.6732</span> です。<span class=\"chem\">t &gt;= 0</span> なので、ボールが落ちるのは <span class=\"chem\">t = 2.67</span> s（有効数字 3 桁）です。</p>",
    },

    // ── t2-2-q037 · numeric · exam · SL · SL 2.7 · 3 marks
    "t2-2-q037": {
      // EN: <p>A rectangular vegetable garden is <span class="chem">3.5</span> m longer than it is wide. Its area is <span class="chem">42.6</span> m². Find the width of the garden, giving your answer in metres correct to 3 significant figures.</p>
      stem: "<p>長方形の家庭菜園は、長さが幅より <span class=\"chem\">3.5</span> m 長い。その面積は <span class=\"chem\">42.6</span> m² である。菜園の幅を求め (Find)、メートル単位で有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: let the width be <span class="chem">w</span>; then the length is <span class="chem">w + 3.5</span>. The area condition gives a quadratic equation in <span class="chem">w</span>.
        "解読：幅を <span class=\"chem\">w</span> とすると、長さは <span class=\"chem\">w + 3.5</span> です。面積の条件から <span class=\"chem\">w</span> の 2 次方程式が得られます。",
        // EN: Solve <span class="chem">w^2 + 3.5w - 42.6 = 0</span> with the GDC and keep only the root that makes sense for a length.
        "GDC で <span class=\"chem\">w^2 + 3.5w - 42.6 = 0</span> を解き、長さとして意味のある解だけを残します。",
      ],
      // EN: <p><span class="chem">w(w + 3.5) = 42.6 => w^2 + 3.5w - 42.6 = 0</span>. The GDC gives <span class="chem">w ≈ 5.0074</span> or <span class="chem">w ≈ -8.51</span>. A width must be positive, so <span class="chem">w = 5.01</span> m (3 s.f.). Note that <span class="chem">5.00</span> would be wrong: check <span class="chem">5 × 8.5 = 42.5 != 42.6</span>.</p>
      solution: "<p><span class=\"chem\">w(w + 3.5) = 42.6 => w^2 + 3.5w - 42.6 = 0</span>。GDC により <span class=\"chem\">w ≈ 5.0074</span> または <span class=\"chem\">w ≈ -8.51</span> です。幅は正でなければならないので、<span class=\"chem\">w = 5.01</span> m（有効数字 3 桁）です。<span class=\"chem\">5.00</span> は誤りであることに注意しましょう：<span class=\"chem\">5 × 8.5 = 42.5 != 42.6</span> で確認できます。</p>",
    },

    // ── t2-2-q038 · short · exam · SL · SL 2.6, 2.10 · 8 marks
    "t2-2-q038": {
      // EN: <p>The underside of a footbridge arch is modelled by <span class="chem">h(x) = ax^2 + bx + c</span>, where <span class="chem">h</span> is the height in metres above the water and <span class="chem">x</span> is the horizontal distance in metres from a marker post at the water&#8217;s edge. Three measurements are taken.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><span class="chem">x</span> (m)</th><td>0</td><td>4</td><td>10</td></tr></thead><tbody><tr><th scope="row"><span class="chem">h</span> (m)</th><td>1.2</td><td>6.8</td><td>6.0</td></tr></tbody></table></div><p>(a) Find the values of <span class="chem">a</span>, <span class="chem">b</span> and <span class="chem">c</span>. <strong>[3 marks]</strong><br>(b) Find the maximum height of the arch above the water. <strong>[2 marks]</strong><br>(c) A boat with a mast needs at least <span class="chem">5</span> m of headroom. Find the width of the part of the river, measured horizontally, in which the arch is at least <span class="chem">5</span> m above the water. <strong>[3 marks]</strong></p>
      stem: "<p>歩道橋のアーチの下面が <span class=\"chem\">h(x) = ax^2 + bx + c</span> でモデル化されている。ここで <span class=\"chem\">h</span> は水面からの高さ（メートル）、<span class=\"chem\">x</span> は水際の標柱からの水平距離（メートル）である。3 つの測定値が得られた。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><span class=\"chem\">x</span> (m)</th><td>0</td><td>4</td><td>10</td></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">h</span> (m)</th><td>1.2</td><td>6.8</td><td>6.0</td></tr></tbody></table></div><p>(a) <span class=\"chem\">a</span>、<span class=\"chem\">b</span>、<span class=\"chem\">c</span> の値を求めなさい (Find)。 <strong>[3 marks]</strong><br>(b) 水面からのアーチの最大の高さを求めなさい (Find)。 <strong>[2 marks]</strong><br>(c) マストのあるボートは少なくとも <span class=\"chem\">5</span> m の頭上空間を必要とする。アーチが水面から <span class=\"chem\">5</span> m 以上の高さにある川の部分の幅を、水平に測って求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: each data point gives one equation in <span class="chem">a, b, c</span>. The measurement at <span class="chem">x = 0</span> gives <span class="chem">c</span> straight away, so the other two points leave two linear equations in <span class="chem">a</span> and <span class="chem">b</span>.
        "解読：各データ点から <span class=\"chem\">a, b, c</span> についての方程式が 1 つずつ得られます。<span class=\"chem\">x = 0</span> での測定値からすぐに <span class=\"chem\">c</span> がわかるので、残りの 2 点から <span class=\"chem\">a</span> と <span class=\"chem\">b</span> の連立 1 次方程式が得られます。",
        // EN: Keep the full GDC values of <span class="chem">a, b, c</span> stored for later parts; rounding them early changes the third figure.
        "後の小問のために <span class=\"chem\">a, b, c</span> の GDC の値をすべて保存しておきます。早い段階で四捨五入すると 3 桁目が変わってしまいます。",
        // EN: For (c), graph <span class="chem">y = h(x)</span> and <span class="chem">y = 5</span> and find both intersections. The width is the distance between them.
        "(c) では <span class=\"chem\">y = h(x)</span> と <span class=\"chem\">y = 5</span> のグラフをかき、2 つの交点を両方求めます。幅はその間の距離です。",
      ],
      // EN: <p>(a) <span class="chem">h(0) = c = 1.2</span>. The other two points give <span class="chem">16a + 4b + 1.2 = 6.8</span> and <span class="chem">100a + 10b + 1.2 = 6.0</span>, that is <span class="chem">4a + b = 1.4</span> and <span class="chem">10a + b = 0.48</span>. Subtracting: <span class="chem">6a = -0.92</span>, so <span class="chem">a = -0.153333... = -23/150</span> and <span class="chem">b = 1.4 - 4a = 2.013333... = 151/75</span>. So <span class="chem">a = -0.153</span>, <span class="chem">b = 2.01</span>, <span class="chem">c = 1.2</span>.<br>(b) The vertex is at <span class="chem">x = -b/(2a) ≈ 6.565</span>, and <span class="chem">h(6.565) ≈ 7.8090</span>, so the maximum height is <span class="chem">7.81</span> m.<br>(c) <span class="chem">h(x) = 5</span> at <span class="chem">x ≈ 2.2851</span> and <span class="chem">x ≈ 10.8453</span>. The arch is at least <span class="chem">5</span> m high between these, a width of <span class="chem">10.8453 - 2.2851 ≈ 8.56</span> m.</p>
      solution: "<p>(a) <span class=\"chem\">h(0) = c = 1.2</span>。残りの 2 点から <span class=\"chem\">16a + 4b + 1.2 = 6.8</span> と <span class=\"chem\">100a + 10b + 1.2 = 6.0</span>、すなわち <span class=\"chem\">4a + b = 1.4</span> と <span class=\"chem\">10a + b = 0.48</span> が得られます。辺々引くと <span class=\"chem\">6a = -0.92</span> なので、<span class=\"chem\">a = -0.153333... = -23/150</span>、<span class=\"chem\">b = 1.4 - 4a = 2.013333... = 151/75</span> です。よって <span class=\"chem\">a = -0.153</span>、<span class=\"chem\">b = 2.01</span>、<span class=\"chem\">c = 1.2</span> です。<br>(b) 頂点は <span class=\"chem\">x = -b/(2a) ≈ 6.565</span> にあり、<span class=\"chem\">h(6.565) ≈ 7.8090</span> なので、最大の高さは <span class=\"chem\">7.81</span> m です。<br>(c) <span class=\"chem\">h(x) = 5</span> となるのは <span class=\"chem\">x ≈ 2.2851</span> と <span class=\"chem\">x ≈ 10.8453</span> です。アーチはこの間で <span class=\"chem\">5</span> m 以上の高さにあり、幅は <span class=\"chem\">10.8453 - 2.2851 ≈ 8.56</span> m です。</p>",
      // EN: <p>(a) <span class="chem">a = -0.153</span>, <span class="chem">b = 2.01</span>, <span class="chem">c = 1.2</span> (exactly <span class="chem">-23/150</span>, <span class="chem">151/75</span>, <span class="chem">6/5</span>); (b) <span class="chem">7.81</span> m (at <span class="chem">x ≈ 6.57</span>); (c) <span class="chem">8.56</span> m (from <span class="chem">x ≈ 2.29</span> to <span class="chem">x ≈ 10.8</span>).</p>
      answer: "<p>(a) <span class=\"chem\">a = -0.153</span>、<span class=\"chem\">b = 2.01</span>、<span class=\"chem\">c = 1.2</span>（厳密には <span class=\"chem\">-23/150</span>、<span class=\"chem\">151/75</span>、<span class=\"chem\">6/5</span>）；(b) <span class=\"chem\">7.81</span> m（<span class=\"chem\">x ≈ 6.57</span> のとき）；(c) <span class=\"chem\">8.56</span> m（<span class=\"chem\">x ≈ 2.29</span> から <span class=\"chem\">x ≈ 10.8</span> まで）。</p>",
      markscheme: [
        // EN: M1: Uses h(0) = 1.2 to get c = 1.2, and substitutes the other two points: 16a + 4b + 1.2 = 6.8 and 100a + 10b + 1.2 = 6.0.
        "M1：h(0) = 1.2 より c = 1.2 を求め、残りの 2 点を代入する：16a + 4b + 1.2 = 6.8 と 100a + 10b + 1.2 = 6.0。",
        // EN: A1: a = −0.153 (−23/150 = −0.15333…).
        "A1: a = −0.153 (−23/150 = −0.15333…).",
        // EN: A1: b = 2.01 (151/75 = 2.01333…) and c = 1.2.
        "A1：b = 2.01（151/75 = 2.01333…）と c = 1.2。",
        // EN: M1: Uses the vertex x = −b/(2a) ≈ 6.57, or the GDC maximum.
        "M1：頂点 x = −b/(2a) ≈ 6.57 または GDC の最大値機能を用いる。",
        // EN: A1: Maximum height 7.81 m.
        "A1：最大の高さ 7.81 m。",
        // EN: M1: Solves h(x) = 5 (GDC intersection of y = h(x) and y = 5).
        "M1：h(x) = 5 を解く（y = h(x) と y = 5 の GDC での交点）。",
        // EN: A1: x ≈ 2.29 and x ≈ 10.8.
        "A1：x ≈ 2.29 と x ≈ 10.8。",
        // EN: A1: Width 10.845 − 2.285 = 8.56 m.
        "A1：幅 10.845 − 2.285 = 8.56 m。",
      ],
    },

    // ── t2-2-q039 · short · exam · SL · SL 2.7 · 3 marks
    "t2-2-q039": {
      // EN: <p>Solve the inequality <span class="chem">2.4x^2 - 3.1x - 5.6 &gt; 0</span>, giving the boundary values correct to 3 significant figures.</p>
      stem: "<p>不等式 <span class=\"chem\">2.4x^2 - 3.1x - 5.6 &gt; 0</span> を解き (Solve)、境界値を有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Find where the quadratic equals zero first, using the GDC.
        "まず GDC を使って、2 次式が 0 になるところを求めます。",
        // EN: The parabola opens upwards (<span class="chem">a = 2.4 &gt; 0</span>), so it is positive outside the two roots.
        "放物線は下に凸（<span class=\"chem\">a = 2.4 &gt; 0</span>）なので、2 つの解の外側で正になります。",
      ],
      // EN: <p>The GDC gives the roots <span class="chem">x ≈ -1.0126</span> and <span class="chem">x ≈ 2.3043</span>. Since the leading coefficient is positive, the expression is positive outside the roots: <span class="chem">x &lt; -1.01</span> or <span class="chem">x &gt; 2.30</span>.</p>
      solution: "<p>GDC により解は <span class=\"chem\">x ≈ -1.0126</span> と <span class=\"chem\">x ≈ 2.3043</span> です。最高次係数が正なので、式は解の外側で正になります：<span class=\"chem\">x &lt; -1.01</span> または <span class=\"chem\">x &gt; 2.30</span>。</p>",
      // EN: <p><span class="chem">x &lt; -1.01</span> or <span class="chem">x &gt; 2.30</span></p>
      answer: "<p><span class=\"chem\">x &lt; -1.01</span> または <span class=\"chem\">x &gt; 2.30</span></p>",
      markscheme: [
        // EN: M1: Finds the roots of 2.4x² − 3.1x − 5.6 = 0 (GDC solver or quadratic formula).
        "M1：2.4x² − 3.1x − 5.6 = 0 の解を求める（GDC のソルバーまたは解の公式）。",
        // EN: A1: Roots x ≈ −1.0126 and x ≈ 2.3043.
        "A1：解 x ≈ −1.0126 と x ≈ 2.3043。",
        // EN: A1: x < −1.01 or x > 2.30 (outside the roots, strict inequalities).
        "A1：x < −1.01 または x > 2.30（解の外側、等号を含まない不等号）。",
      ],
    },

    // ── t2-2-q040 · numeric · exam · SL · SL 2.6 · 5 marks
    "t2-2-q040": {
      // EN: <p>A cinema finds that when the ticket price is <span class="chem">$8</span>, it sells <span class="chem">540</span> tickets a week, and when the price is <span class="chem">$14</span>, it sells <span class="chem">330</span> tickets a week. It models the number of tickets sold, <span class="chem">N</span>, as a linear function of the price <span class="chem">p</span> dollars. The weekly revenue is <span class="chem">R = pN</span>. Find the maximum weekly revenue predicted by the model, in dollars correct to 2 decimal places.</p>
      stem: "<p>ある映画館では、チケットの価格が <span class=\"chem\">$8</span> のとき 1 週間に <span class=\"chem\">540</span> 枚売れ、価格が <span class=\"chem\">$14</span> のとき 1 週間に <span class=\"chem\">330</span> 枚売れることがわかった。売れるチケットの枚数 <span class=\"chem\">N</span> を価格 <span class=\"chem\">p</span> ドルの 1 次関数としてモデル化する。1 週間の売上は <span class=\"chem\">R = pN</span> である。このモデルによって予測される 1 週間の売上の最大値を求め (Find)、ドル単位で小数第 2 位まで答えなさい。</p>",
      hints: [
        // EN: Decode: two (price, tickets) data points give a straight line <span class="chem">N = mp + c</span>. Revenue is price times tickets, so <span class="chem">R</span> is a quadratic in <span class="chem">p</span>, and you need its maximum.
        "解読：（価格、枚数）の 2 つのデータ点から直線 <span class=\"chem\">N = mp + c</span> が得られます。売上は価格 × 枚数なので、<span class=\"chem\">R</span> は <span class=\"chem\">p</span> の 2 次式であり、その最大値が必要です。",
        // EN: The gradient is <span class="chem">(330 - 540)/(14 - 8) = -35</span>. Find <span class="chem">c</span>, then write <span class="chem">R(p) = p(c - 35p)</span>.
        "傾きは <span class=\"chem\">(330 - 540)/(14 - 8) = -35</span> です。<span class=\"chem\">c</span> を求め、<span class=\"chem\">R(p) = p(c - 35p)</span> と書きます。",
        // EN: Find the vertex of <span class="chem">R</span> with <span class="chem">p = -b/(2a)</span> or with the GDC maximum. Do not round <span class="chem">p</span> before you work out <span class="chem">R</span>.
        "<span class=\"chem\">p = -b/(2a)</span> または GDC の最大値機能で <span class=\"chem\">R</span> の頂点を求めます。<span class=\"chem\">R</span> を計算する前に <span class=\"chem\">p</span> を四捨五入してはいけません。",
      ],
      // EN: <p><strong>Decode:</strong> linear demand from two points, then maximise a quadratic revenue.</p><p>Gradient <span class="chem">m = (330 - 540)/(14 - 8) = -35</span>, so <span class="chem">N = 540 - 35(p - 8) = 820 - 35p</span>. Then <span class="chem">R(p) = p(820 - 35p) = 820p - 35p^2</span>. The vertex is at <span class="chem">p = 820/70 ≈ 11.714</span>, and <span class="chem">R_{max} = 820^2/140 ≈ 4802.857</span>. The maximum weekly revenue is <span class="chem">$4802.86</span>.</p>
      solution: "<p><strong>解読：</strong>2 点から 1 次の需要関数を作り、次に 2 次式の売上を最大化します。</p><p>傾き <span class=\"chem\">m = (330 - 540)/(14 - 8) = -35</span> なので、<span class=\"chem\">N = 540 - 35(p - 8) = 820 - 35p</span> です。すると <span class=\"chem\">R(p) = p(820 - 35p) = 820p - 35p^2</span> となります。頂点は <span class=\"chem\">p = 820/70 ≈ 11.714</span> にあり、<span class=\"chem\">R_{max} = 820^2/140 ≈ 4802.857</span> です。1 週間の売上の最大値は <span class=\"chem\">$4802.86</span> です。</p>",
    },

    // ── t2-2-q041 · short · challenge · SL · SL 2.6 · 6 marks
    "t2-2-q041": {
      // EN: <p>A player throws a ball towards a fence. The path of the ball is modelled by <span class="chem">h(x) = -0.045x^2 + 0.62x + 1.8</span>, where <span class="chem">h</span> is the height in metres and <span class="chem">x</span> is the horizontal distance in metres from the player, for <span class="chem">h &gt;= 0</span>.<br>(a) Find the maximum height reached by the ball. <strong>[2 marks]</strong><br>(b) The fence is <span class="chem">3.8</span> m tall and stands <span class="chem">9</span> m from the player. Determine whether the ball passes over the fence. <strong>[2 marks]</strong><br>(c) The fence is then taken down. Find the horizontal distance from the player to the point where the ball lands. <strong>[2 marks]</strong></p>
      stem: "<p>選手がフェンスに向かってボールを投げる。ボールの軌道は <span class=\"chem\">h &gt;= 0</span> に対して <span class=\"chem\">h(x) = -0.045x^2 + 0.62x + 1.8</span> でモデル化される。ここで <span class=\"chem\">h</span> は高さ（メートル）、<span class=\"chem\">x</span> は選手からの水平距離（メートル）である。<br>(a) ボールが到達する最大の高さを求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) フェンスの高さは <span class=\"chem\">3.8</span> m で、選手から <span class=\"chem\">9</span> m の位置に立っている。ボールがフェンスを越えるかどうか判定しなさい (Determine)。 <strong>[2 marks]</strong><br>(c) その後フェンスが撤去された。選手からボールが落ちる地点までの水平距離を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "passes over the fence" is about the height of the ball when it is above the fence (at <span class="chem">x = 9</span>), not about its maximum height. A maximum above <span class="chem">3.8</span> m does not prove anything.
        "解読：「フェンスを越える」かどうかは、ボールがフェンスの真上（<span class=\"chem\">x = 9</span>）にあるときの高さで決まり、最大の高さではありません。最大値が <span class=\"chem\">3.8</span> m を超えていても何の証明にもなりません。",
        // EN: For (a), the vertex is at <span class="chem">x = -b/(2a)</span>; or use the GDC maximum.
        "(a) では頂点は <span class=\"chem\">x = -b/(2a)</span> にあります。GDC の最大値機能を使ってもかまいません。",
        // EN: For (b), compare <span class="chem">h(9)</span> with <span class="chem">3.8</span>. For (c), solve <span class="chem">h(x) = 0</span> and keep the positive root.
        "(b) では <span class=\"chem\">h(9)</span> と <span class=\"chem\">3.8</span> を比べます。(c) では <span class=\"chem\">h(x) = 0</span> を解き、正の解を残します。",
      ],
      // EN: <p><strong>Decode:</strong> (b) asks for the height at a given <span class="chem">x</span>, not the maximum height. The maximum (3.94 m) is above 3.8 m, but it happens at <span class="chem">x ≈ 6.89</span>, before the fence.</p><p>(a) <span class="chem">x = 0.62/(2 × 0.045) ≈ 6.889</span>, <span class="chem">h(6.889) ≈ 3.9356</span>, so the maximum height is <span class="chem">3.94</span> m.<br>(b) <span class="chem">h(9) = -0.045(81) + 0.62(9) + 1.8 = -3.645 + 5.58 + 1.8 = 3.735</span> m. This is less than <span class="chem">3.8</span> m, so the ball hits the fence and does not pass over it.<br>(c) <span class="chem">h(x) = 0</span> gives <span class="chem">x ≈ -2.46</span> or <span class="chem">x ≈ 16.24</span>. The ball lands <span class="chem">16.2</span> m from the player.</p>
      solution: "<p><strong>解読：</strong>(b) で問われているのは与えられた <span class=\"chem\">x</span> での高さであり、最大の高さではありません。最大値 (3.94 m) は 3.8 m より大きいですが、それはフェンスの手前の <span class=\"chem\">x ≈ 6.89</span> で起こります。</p><p>(a) <span class=\"chem\">x = 0.62/(2 × 0.045) ≈ 6.889</span>、<span class=\"chem\">h(6.889) ≈ 3.9356</span> なので、最大の高さは <span class=\"chem\">3.94</span> m です。<br>(b) <span class=\"chem\">h(9) = -0.045(81) + 0.62(9) + 1.8 = -3.645 + 5.58 + 1.8 = 3.735</span> m です。これは <span class=\"chem\">3.8</span> m より小さいので、ボールはフェンスに当たり、越えません。<br>(c) <span class=\"chem\">h(x) = 0</span> より <span class=\"chem\">x ≈ -2.46</span> または <span class=\"chem\">x ≈ 16.24</span> です。ボールは選手から <span class=\"chem\">16.2</span> m の地点に落ちます。</p>",
      // EN: <p>(a) <span class="chem">3.94</span> m; (b) <span class="chem">h(9) = 3.735 &lt; 3.8</span>, so the ball does <strong>not</strong> pass over the fence (it hits it); (c) <span class="chem">16.2</span> m.</p>
      answer: "<p>(a) <span class=\"chem\">3.94</span> m；(b) <span class=\"chem\">h(9) = 3.735 &lt; 3.8</span> なので、ボールはフェンスを越え<strong>ない</strong>（フェンスに当たる）；(c) <span class=\"chem\">16.2</span> m。</p>",
      markscheme: [
        // EN: M1: Uses x = −b/(2a) = 0.62/0.09 ≈ 6.89, or the GDC maximum.
        "M1：x = −b/(2a) = 0.62/0.09 ≈ 6.89 または GDC の最大値機能を用いる。",
        // EN: A1: Maximum height 3.94 m (3.9356…).
        "A1：最大の高さ 3.94 m (3.9356…)。",
        // EN: M1: Evaluates the height at the fence: h(9) = 3.735.
        "M1：フェンスの位置での高さを計算する：h(9) = 3.735。",
        // EN: R1: Since 3.735 < 3.8, the ball does not pass over the fence.
        "R1：3.735 < 3.8 なので、ボールはフェンスを越えない。",
        // EN: M1: Solves h(x) = 0 and rejects the negative root (x ≈ −2.46).
        "M1：h(x) = 0 を解き、負の解（x ≈ −2.46）を除外する。",
        // EN: A1: x = 16.2 m (16.240…).
        "A1: x = 16.2 m (16.240…).",
      ],
    },

    // ── t2-2-q042 · numeric · challenge · SL · SL 2.6 · 5 marks
    "t2-2-q042": {
      // EN: <p>A road tunnel has a parabolic cross-section. At road level the tunnel is <span class="chem">18.4</span> m wide, and its highest point is <span class="chem">7.5</span> m above the centre of the road. A truck <span class="chem">3.2</span> m wide drives exactly along the centre of the road. Safety rules require at least <span class="chem">0.3</span> m of clearance between the top corners of the truck and the tunnel roof, measured vertically. Find the maximum height of the truck allowed by these rules, in metres correct to 3 significant figures.</p>
      stem: "<p>ある道路トンネルの断面は放物線形である。路面の高さでトンネルの幅は <span class=\"chem\">18.4</span> m であり、最も高い点は道路の中央の真上 <span class=\"chem\">7.5</span> m にある。幅 <span class=\"chem\">3.2</span> m のトラックが道路のちょうど中央を走る。安全規則により、トラックの上部の角とトンネルの天井との間に、鉛直に測って少なくとも <span class=\"chem\">0.3</span> m のすき間が必要である。この規則で許されるトラックの最大の高さを求め (Find)、メートル単位で有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: choose axes yourself. Put the origin on the road at the centre of the tunnel, so the roof is <span class="chem">h(x) = 7.5 - kx^2</span> and the feet are at <span class="chem">x = +-9.2</span>. The truck is centred, so its top corners are at <span class="chem">x = +-1.6</span>, not at <span class="chem">x = 3.2</span>.
        "解読：座標軸は自分で設定します。原点をトンネル中央の路面上にとると、天井は <span class=\"chem\">h(x) = 7.5 - kx^2</span>、トンネルの下端は <span class=\"chem\">x = +-9.2</span> となります。トラックは中央にあるので、上部の角は <span class=\"chem\">x = 3.2</span> ではなく <span class=\"chem\">x = +-1.6</span> にあります。",
        // EN: Use <span class="chem">h(9.2) = 0</span> to find <span class="chem">k</span>.
        "<span class=\"chem\">h(9.2) = 0</span> を使って <span class=\"chem\">k</span> を求めます。",
        // EN: Find the roof height at <span class="chem">x = 1.6</span>, then subtract the <span class="chem">0.3</span> m clearance.
        "<span class=\"chem\">x = 1.6</span> での天井の高さを求め、すき間 <span class=\"chem\">0.3</span> m を引きます。",
      ],
      // EN: <p><strong>Decode:</strong> set up a symmetric model; a centred truck of width <span class="chem">3.2</span> m has corners <span class="chem">1.6</span> m either side of the centre; "clearance" means subtract <span class="chem">0.3</span> m.</p><p>With the origin at the centre of the road, <span class="chem">h(x) = 7.5 - kx^2</span>. Since <span class="chem">h(9.2) = 0</span>, <span class="chem">k = 7.5/9.2^2 = 7.5/84.64 ≈ 0.08861</span>. At the corners, <span class="chem">h(1.6) = 7.5 - 0.08861 × 2.56 ≈ 7.2732</span> m. The maximum truck height is <span class="chem">7.2732 - 0.3 ≈ 6.97</span> m.</p>
      solution: "<p><strong>解読：</strong>対称なモデルを立てます。中央を走る幅 <span class=\"chem\">3.2</span> m のトラックの角は中央から左右に <span class=\"chem\">1.6</span> m の位置にあります。「すき間」は <span class=\"chem\">0.3</span> m を引くことを意味します。</p><p>原点を道路の中央にとると <span class=\"chem\">h(x) = 7.5 - kx^2</span> です。<span class=\"chem\">h(9.2) = 0</span> なので、<span class=\"chem\">k = 7.5/9.2^2 = 7.5/84.64 ≈ 0.08861</span> です。角の位置では <span class=\"chem\">h(1.6) = 7.5 - 0.08861 × 2.56 ≈ 7.2732</span> m です。トラックの最大の高さは <span class=\"chem\">7.2732 - 0.3 ≈ 6.97</span> m です。</p>",
    },

    // ── t2-2-q043 · short · challenge · SL · SL 2.6, 2.7 · 8 marks
    "t2-2-q043": {
      // EN: <p>A workshop makes garden chairs. Its weekly profit is modelled by <span class="chem">P(x) = -0.8x^2 + 46x - 380</span>, where <span class="chem">P</span> is the profit in <strong>thousands</strong> of dollars and <span class="chem">x</span> is the number of chairs made in <strong>hundreds</strong>, for <span class="chem">0 &lt;= x &lt;= 55</span>.<br>(a) Find the two values of <span class="chem">x</span> at which the workshop breaks even. <strong>[2 marks]</strong><br>(b) Find the maximum weekly profit in dollars, and the number of chairs needed to earn it. <strong>[3 marks]</strong><br>(c) The owners want a weekly profit of at least <span class="chem">$200 000</span>. Find the least and greatest number of chairs they can make in a week to achieve this. <strong>[3 marks]</strong></p>
      stem: "<p>ある工房が庭用の椅子を作っている。1 週間の利益は <span class=\"chem\">0 &lt;= x &lt;= 55</span> に対して <span class=\"chem\">P(x) = -0.8x^2 + 46x - 380</span> でモデル化される。ここで <span class=\"chem\">P</span> は利益（単位は<strong>千</strong>ドル）、<span class=\"chem\">x</span> は作る椅子の数（単位は<strong>百</strong>脚）である。<br>(a) 工房の損益がちょうど 0 になる（損益分岐となる）<span class=\"chem\">x</span> の 2 つの値を求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) 1 週間の利益の最大値をドル単位で求め、それを得るのに必要な椅子の数を求めなさい (Find)。 <strong>[3 marks]</strong><br>(c) 経営者は 1 週間に少なくとも <span class=\"chem\">$200 000</span> の利益を望んでいる。これを達成するために 1 週間に作ることのできる椅子の最小数と最大数を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: watch the units. <span class="chem">P</span> is in thousands of dollars and <span class="chem">x</span> in hundreds of chairs, so "$200 000" means <span class="chem">P = 200</span>, and a value such as <span class="chem">x = 18.67</span> means <span class="chem">1867.2</span> chairs. Chairs come in whole numbers.
        "解読：単位に注意します。<span class=\"chem\">P</span> は千ドル単位、<span class=\"chem\">x</span> は百脚単位なので、「$200 000」は <span class=\"chem\">P = 200</span> を意味し、<span class=\"chem\">x = 18.67</span> のような値は <span class=\"chem\">1867.2</span> 脚を意味します。椅子の数は整数です。",
        // EN: "Breaks even" means zero profit: solve <span class="chem">P(x) = 0</span>.
        "「損益分岐」は利益 0 を意味します：<span class=\"chem\">P(x) = 0</span> を解きます。",
        // EN: For (c), solve <span class="chem">P(x) = 200</span> with the GDC. The parabola opens downwards, so <span class="chem">P &gt;= 200</span> between the roots. Then round inwards to whole chairs.
        "(c) では GDC で <span class=\"chem\">P(x) = 200</span> を解きます。放物線は上に凸なので、2 つの解の間で <span class=\"chem\">P &gt;= 200</span> です。そのあと内側に丸めて椅子の整数個にします。",
      ],
      // EN: <p><strong>Decode:</strong> convert both units before and after using the model, and remember that the number of chairs is a whole number.</p><p>(a) <span class="chem">-0.8x^2 + 46x - 380 = 0 => x = 10</span> or <span class="chem">x = 47.5</span>.<br>(b) The vertex is at <span class="chem">x = -46/(2 × (-0.8)) = 28.75</span>, with <span class="chem">P(28.75) = 281.25</span>. So the maximum profit is <span class="chem">$281 250</span>, from <span class="chem">2875</span> chairs.<br>(c) <span class="chem">P(x) &gt;= 200 => -0.8x^2 + 46x - 580 &gt;= 0</span>. The GDC gives roots <span class="chem">x ≈ 18.672</span> and <span class="chem">x ≈ 38.828</span>, and the profit is at least <span class="chem">200</span> between them. In chairs: <span class="chem">1867.2 &lt;= n &lt;= 3882.8</span>, so the least number is <span class="chem">1868</span> and the greatest is <span class="chem">3882</span>.</p>
      solution: "<p><strong>解読：</strong>モデルを使う前と後で両方の単位を変換し、椅子の数は整数であることを忘れないようにします。</p><p>(a) <span class=\"chem\">-0.8x^2 + 46x - 380 = 0 => x = 10</span> または <span class=\"chem\">x = 47.5</span>。<br>(b) 頂点は <span class=\"chem\">x = -46/(2 × (-0.8)) = 28.75</span> にあり、<span class=\"chem\">P(28.75) = 281.25</span> です。よって利益の最大値は <span class=\"chem\">$281 250</span> で、そのときの椅子は <span class=\"chem\">2875</span> 脚です。<br>(c) <span class=\"chem\">P(x) &gt;= 200 => -0.8x^2 + 46x - 580 &gt;= 0</span>。GDC により解は <span class=\"chem\">x ≈ 18.672</span> と <span class=\"chem\">x ≈ 38.828</span> であり、利益はその間で <span class=\"chem\">200</span> 以上です。椅子の数で表すと <span class=\"chem\">1867.2 &lt;= n &lt;= 3882.8</span> なので、最小数は <span class=\"chem\">1868</span>、最大数は <span class=\"chem\">3882</span> です。</p>",
      // EN: <p>(a) <span class="chem">x = 10</span> and <span class="chem">x = 47.5</span>; (b) <span class="chem">$281 250</span> from <span class="chem">2875</span> chairs; (c) from <span class="chem">1868</span> to <span class="chem">3882</span> chairs.</p>
      answer: "<p>(a) <span class=\"chem\">x = 10</span> と <span class=\"chem\">x = 47.5</span>；(b) <span class=\"chem\">2875</span> 脚で <span class=\"chem\">$281 250</span>；(c) <span class=\"chem\">1868</span> 脚から <span class=\"chem\">3882</span> 脚まで。</p>",
      markscheme: [
        // EN: M1: Solves P(x) = 0 (GDC or formula).
        "M1：P(x) = 0 を解く（GDC または公式）。",
        // EN: A1: x = 10 and x = 47.5 (1000 and 4750 chairs).
        "A1：x = 10 と x = 47.5（1000 脚と 4750 脚）。",
        // EN: M1: Finds the vertex x = 46/1.6 = 28.75 (or GDC maximum).
        "M1：頂点 x = 46/1.6 = 28.75 を求める（または GDC の最大値機能）。",
        // EN: A1: Maximum profit P = 281.25, i.e. $281 250.
        "A1：利益の最大値 P = 281.25、すなわち $281 250。",
        // EN: A1: 2875 chairs.
        "A1：2875 脚。",
        // EN: M1: Sets P(x) ≥ 200 (profit in thousands) and solves −0.8x² + 46x − 580 = 0.
        "M1：P(x) ≥ 200（利益は千ドル単位）とおき、−0.8x² + 46x − 580 = 0 を解く。",
        // EN: A1: x ≈ 18.672 and x ≈ 38.828.
        "A1：x ≈ 18.672 と x ≈ 38.828。",
        // EN: A1: Converts to whole chairs: least 1868, greatest 3882.
        "A1：椅子の整数個に変換する：最小 1868、最大 3882。",
      ],
    },

    // ── t2-2-q044 · numeric · exam · SL · SL 2.9 · 5 marks
    "t2-2-q044": {
      // EN: <p>A cup of tea is left to cool in a room kept at <span class="chem">20</span> °C. Its temperature <span class="chem">t</span> minutes later is modelled by <span class="chem">T(t) = 20 + A e^{-kt}</span>. The tea is at <span class="chem">88</span> °C when <span class="chem">t = 0</span> and at <span class="chem">61</span> °C when <span class="chem">t = 6</span>. Find the time it takes for the tea to cool to <span class="chem">35</span> °C, in minutes correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">20</span> °C に保たれた部屋に紅茶を置いて冷ます。<span class=\"chem\">t</span> 分後の温度は <span class=\"chem\">T(t) = 20 + A e^{-kt}</span> でモデル化される。紅茶は <span class=\"chem\">t = 0</span> のとき <span class=\"chem\">88</span> °C、<span class=\"chem\">t = 6</span> のとき <span class=\"chem\">61</span> °C であった。紅茶が <span class=\"chem\">35</span> °C まで冷めるのにかかる時間を求め (Find)、分単位で有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: two unknowns, two data points. <span class="chem">t = 0</span> gives <span class="chem">A</span> at once (since <span class="chem">e^0 = 1</span>); <span class="chem">t = 6</span> then gives <span class="chem">k</span>.
        "解読：未知数が 2 つ、データ点が 2 つあります。<span class=\"chem\">t = 0</span> からすぐに <span class=\"chem\">A</span> がわかり（<span class=\"chem\">e^0 = 1</span> なので）、次に <span class=\"chem\">t = 6</span> から <span class=\"chem\">k</span> が得られます。",
        // EN: You should find <span class="chem">A = 68</span> and <span class="chem">e^{-6k} = 41/68</span>.
        "<span class=\"chem\">A = 68</span> と <span class=\"chem\">e^{-6k} = 41/68</span> が得られるはずです。",
        // EN: Solve <span class="chem">20 + 68 e^{-kt} = 35</span> using logs, or graph <span class="chem">y = T(t)</span> and <span class="chem">y = 35</span>.
        "対数を使って <span class=\"chem\">20 + 68 e^{-kt} = 35</span> を解くか、<span class=\"chem\">y = T(t)</span> と <span class=\"chem\">y = 35</span> のグラフをかきます。",
      ],
      // EN: <p><span class="chem">T(0) = 20 + A = 88 => A = 68</span>. Then <span class="chem">20 + 68 e^{-6k} = 61 => e^{-6k} = 41/68 => k = (1/6) ln(68/41) ≈ 0.084323</span>. For <span class="chem">T = 35</span>: <span class="chem">68 e^{-kt} = 15 => t = ln(68/15)/k ≈ 17.925</span>, so <span class="chem">t = 17.9</span> minutes.</p>
      solution: "<p><span class=\"chem\">T(0) = 20 + A = 88 => A = 68</span>。次に <span class=\"chem\">20 + 68 e^{-6k} = 61 => e^{-6k} = 41/68 => k = (1/6) ln(68/41) ≈ 0.084323</span>。<span class=\"chem\">T = 35</span> となるのは <span class=\"chem\">68 e^{-kt} = 15 => t = ln(68/15)/k ≈ 17.925</span> のときなので、<span class=\"chem\">t = 17.9</span> 分です。</p>",
    },

    // ── t2-2-q045 · numeric · challenge · SL · SL 2.9 · 5 marks
    "t2-2-q045": {
      // EN: <p>The number of wild ponies in a national park is counted on 1 January each year. The count was <span class="chem">3400</span> in 2015 and <span class="chem">4150</span> in 2020. The rangers model the count with <span class="chem">P = 3400 b^t</span>, where <span class="chem">t</span> is the number of years after 2015. Use the model to find the first year in which the count is greater than <span class="chem">6000</span>.</p>
      stem: "<p>ある国立公園の野生のポニーの数が毎年 1 月 1 日に数えられる。2015 年の数は <span class=\"chem\">3400</span>、2020 年は <span class=\"chem\">4150</span> であった。レンジャーはこの数を <span class=\"chem\">P = 3400 b^t</span> でモデル化する。ここで <span class=\"chem\">t</span> は 2015 年からの経過年数である。このモデルを使って、数が初めて <span class=\"chem\">6000</span> より多くなる年を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the 2020 count fixes the growth factor <span class="chem">b</span>; then solve <span class="chem">P &gt; 6000</span> for <span class="chem">t</span>. The question asks for a calendar year, and counts happen only at whole values of <span class="chem">t</span>.
        "解読：2020 年の数で成長因子 <span class=\"chem\">b</span> が決まります。次に <span class=\"chem\">P &gt; 6000</span> を <span class=\"chem\">t</span> について解きます。問われているのは暦の年であり、数えるのは <span class=\"chem\">t</span> が整数のときだけです。",
        // EN: <span class="chem">3400 b^5 = 4150 => b = (4150/3400)^{1/5} ≈ 1.04067</span>.
        "<span class=\"chem\">3400 b^5 = 4150 => b = (4150/3400)^{1/5} ≈ 1.04067</span>.",
        // EN: Solving <span class="chem">3400 b^t = 6000</span> gives a non-integer <span class="chem">t</span>. The count first exceeds 6000 at the next whole <span class="chem">t</span>; check <span class="chem">P</span> at the integers on either side.
        "<span class=\"chem\">3400 b^t = 6000</span> を解くと <span class=\"chem\">t</span> は整数になりません。数が初めて 6000 を超えるのは次の整数の <span class=\"chem\">t</span> のときです。両側の整数での <span class=\"chem\">P</span> を確認します。",
      ],
      // EN: <p><strong>Decode:</strong> fit <span class="chem">b</span> from the second data point, solve the inequality, then turn <span class="chem">t</span> into a whole year.</p><p><span class="chem">b^5 = 4150/3400 => b ≈ 1.040672</span>. <span class="chem">3400 b^t = 6000 => t = ln(6000/3400)/ln b ≈ 14.25</span>. Check: <span class="chem">P(14) ≈ 5941 &lt; 6000</span> and <span class="chem">P(15) ≈ 6183 &gt; 6000</span>. So the first count above 6000 is at <span class="chem">t = 15</span>, in the year <span class="chem">2030</span>.</p>
      solution: "<p><strong>解読：</strong>2 つ目のデータ点から <span class=\"chem\">b</span> を決め、不等式を解き、<span class=\"chem\">t</span> を整数の年に直します。</p><p><span class=\"chem\">b^5 = 4150/3400 => b ≈ 1.040672</span>。<span class=\"chem\">3400 b^t = 6000 => t = ln(6000/3400)/ln b ≈ 14.25</span>。確認：<span class=\"chem\">P(14) ≈ 5941 &lt; 6000</span>、<span class=\"chem\">P(15) ≈ 6183 &gt; 6000</span>。よって 6000 を初めて超えるのは <span class=\"chem\">t = 15</span>、すなわち <span class=\"chem\">2030</span> 年です。</p>",
    },

    // ── t2-2-q046 · numeric · challenge · SL · SL 2.9 · 4 marks
    "t2-2-q046": {
      // EN: <p>After a single dose, a patient's body removes <span class="chem">30%</span> of a drug every <span class="chem">4</span> hours: in any 4-hour period, the amount present at the start falls by 30%. Assuming the amount decreases continuously according to this exponential pattern, find how long after the dose the amount first falls below <span class="chem">10%</span> of the original dose. Give your answer in hours correct to 3 significant figures.</p>
      stem: "<p>1 回投与した後、患者の体は <span class=\"chem\">4</span> 時間ごとに薬の <span class=\"chem\">30%</span> を除去する：どの 4 時間の期間でも、その始めにあった量が 30% 減少する。量はこの指数関数的なパターンに従って連続的に減少すると仮定して、投与後どれだけの時間で、量が初めてもとの投与量の <span class=\"chem\">10%</span> を下回るか求めなさい (Find)。答えは時間単位で有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: "removes 30%" means <span class="chem">70%</span> remains, so the growth factor for one 4-hour period is <span class="chem">0.7</span>. The model is <span class="chem">M(t) = M_0 (0.7)^{t/4}</span>. The size of the dose is not needed, because you compare with a percentage of it.
        "解読：「30% を除去する」とは <span class=\"chem\">70%</span> が残ることなので、4 時間あたりの成長因子は <span class=\"chem\">0.7</span> です。モデルは <span class=\"chem\">M(t) = M_0 (0.7)^{t/4}</span> です。投与量の大きさは必要ありません。それに対する割合と比べるからです。",
        // EN: Solve <span class="chem">(0.7)^{t/4} = 0.1</span>, by logs or by GDC intersection.
        "対数または GDC の交点で <span class=\"chem\">(0.7)^{t/4} = 0.1</span> を解きます。",
      ],
      // EN: <p><strong>Decode:</strong> a 30% decrease per 4 hours is a factor of <span class="chem">0.7</span> per 4 hours; "10% of the dose" means <span class="chem">M = 0.1 M_0</span>, so <span class="chem">M_0</span> cancels.</p><p><span class="chem">M_0 (0.7)^{t/4} = 0.1 M_0 => (t/4) ln 0.7 = ln 0.1 => t = 4 ln 0.1/ln 0.7 ≈ 25.82</span>. So the amount first falls below 10% after about <span class="chem">25.8</span> hours.</p>
      solution: "<p><strong>解読：</strong>4 時間ごとに 30% 減少することは、4 時間ごとに <span class=\"chem\">0.7</span> 倍になることです。「投与量の 10%」は <span class=\"chem\">M = 0.1 M_0</span> を意味するので、<span class=\"chem\">M_0</span> は約分されて消えます。</p><p><span class=\"chem\">M_0 (0.7)^{t/4} = 0.1 M_0 => (t/4) ln 0.7 = ln 0.1 => t = 4 ln 0.1/ln 0.7 ≈ 25.82</span>。よって量が初めて 10% を下回るのは約 <span class=\"chem\">25.8</span> 時間後です。</p>",
    },

    // ── t2-2-q047 · numeric · exam · SL · SL 2.9 · 4 marks
    "t2-2-q047": {
      // EN: <p>The loudness <span class="chem">L</span> decibels of a sound of intensity <span class="chem">I</span> (in watts per square metre) is given by <span class="chem">L = 10 log_{10}(I/10^{-12})</span>. A rock concert has a loudness of <span class="chem">108</span> dB and a busy street has a loudness of <span class="chem">74</span> dB. Find how many times greater the intensity of the concert is than the intensity of the street, correct to 3 significant figures.</p>
      stem: "<p>強さ <span class=\"chem\">I</span>（1 平方メートルあたりのワット）の音の大きさ <span class=\"chem\">L</span> デシベルは <span class=\"chem\">L = 10 log_{10}(I/10^{-12})</span> で与えられる。ロックコンサートの音の大きさは <span class=\"chem\">108</span> dB、にぎやかな通りの音の大きさは <span class=\"chem\">74</span> dB である。コンサートの音の強さは通りの音の強さの何倍か求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: you need the ratio <span class="chem">I_{concert}/I_{street}</span>, not the difference in decibels.
        "解読：必要なのは比 <span class=\"chem\">I_{concert}/I_{street}</span> であり、デシベルの差ではありません。",
        // EN: Make <span class="chem">I</span> the subject: <span class="chem">I = 10^{-12} × 10^{L/10}</span>. Divide one intensity by the other; the <span class="chem">10^{-12}</span> cancels.
        "<span class=\"chem\">I</span> について解きます：<span class=\"chem\">I = 10^{-12} × 10^{L/10}</span>。一方の強さをもう一方で割ると、<span class=\"chem\">10^{-12}</span> は約分されて消えます。",
      ],
      // EN: <p><span class="chem">L = 10 log_{10}(I/10^{-12}) => I = 10^{-12} × 10^{L/10}</span>. So <span class="chem">I_{concert}/I_{street} = 10^{10.8}/10^{7.4} = 10^{3.4} ≈ 2511.9</span>. The concert is about <span class="chem">2510</span> times as intense.</p>
      solution: "<p><span class=\"chem\">L = 10 log_{10}(I/10^{-12}) => I = 10^{-12} × 10^{L/10}</span>。よって <span class=\"chem\">I_{concert}/I_{street} = 10^{10.8}/10^{7.4} = 10^{3.4} ≈ 2511.9</span> です。コンサートは約 <span class=\"chem\">2510</span> 倍の強さです。</p>",
    },

    // ── t2-2-q048 · numeric · exam · SL · SL 2.9 · 5 marks
    "t2-2-q048": {
      // EN: <p>A phone battery is charged from empty. Its charge, as a percentage of full charge, <span class="chem">t</span> minutes after charging starts is modelled by <span class="chem">C(t) = 100(1 - e^{-kt})</span>. The battery reaches <span class="chem">60%</span> after <span class="chem">25</span> minutes. Find how many <strong>more</strong> minutes it takes to go from <span class="chem">60%</span> to <span class="chem">95%</span>, correct to 3 significant figures.</p>
      stem: "<p>空の状態からスマートフォンのバッテリーを充電する。充電開始から <span class=\"chem\">t</span> 分後の充電量（満充電に対する百分率）は <span class=\"chem\">C(t) = 100(1 - e^{-kt})</span> でモデル化される。バッテリーは <span class=\"chem\">25</span> 分後に <span class=\"chem\">60%</span> に達する。<span class=\"chem\">60%</span> から <span class=\"chem\">95%</span> になるまでに<strong>さらに</strong>何分かかるか求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: use the 25-minute data point to find <span class="chem">k</span>, find the time at which <span class="chem">C = 95</span>, then subtract <span class="chem">25</span>: the question asks for the extra time.
        "解読：25 分のデータ点を使って <span class=\"chem\">k</span> を求め、<span class=\"chem\">C = 95</span> となる時刻を求めてから <span class=\"chem\">25</span> を引きます。問われているのは追加の時間です。",
        // EN: <span class="chem">100(1 - e^{-25k}) = 60 => e^{-25k} = 0.4</span>.
        "<span class=\"chem\">100(1 - e^{-25k}) = 60 => e^{-25k} = 0.4</span>.",
        // EN: For <span class="chem">95%</span>: <span class="chem">e^{-kt} = 0.05</span>.
        "<span class=\"chem\">95%</span> のとき：<span class=\"chem\">e^{-kt} = 0.05</span>。",
      ],
      // EN: <p><span class="chem">e^{-25k} = 0.4 => k = -ln(0.4)/25 ≈ 0.036652</span>. For <span class="chem">C = 95</span>: <span class="chem">e^{-kt} = 0.05 => t = -ln(0.05)/k ≈ 81.735</span> minutes. The extra time is <span class="chem">81.735 - 25 ≈ 56.7</span> minutes.</p>
      solution: "<p><span class=\"chem\">e^{-25k} = 0.4 => k = -ln(0.4)/25 ≈ 0.036652</span>。<span class=\"chem\">C = 95</span> のとき：<span class=\"chem\">e^{-kt} = 0.05 => t = -ln(0.05)/k ≈ 81.735</span> 分です。追加の時間は <span class=\"chem\">81.735 - 25 ≈ 56.7</span> 分です。</p>",
    },

    // ── t2-2-q049 · numeric · exam · SL · SL 2.9 · 4 marks
    "t2-2-q049": {
      // EN: <p>The height <span class="chem">h</span> cm of a seedling <span class="chem">x</span> weeks after planting is modelled by <span class="chem">h(x) = a ln x + b</span>, for <span class="chem">x &gt;= 1</span>. The seedling is <span class="chem">5.1</span> cm tall after 2 weeks and <span class="chem">8.7</span> cm tall after 9 weeks. Find the value of <span class="chem">a</span>, correct to 3 significant figures.</p>
      stem: "<p>植えてから <span class=\"chem\">x</span> 週間後の苗の高さ <span class=\"chem\">h</span> cm は、<span class=\"chem\">x &gt;= 1</span> に対して <span class=\"chem\">h(x) = a ln x + b</span> でモデル化される。苗の高さは 2 週間後に <span class=\"chem\">5.1</span> cm、9 週間後に <span class=\"chem\">8.7</span> cm であった。<span class=\"chem\">a</span> の値を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Each data point gives a linear equation in <span class="chem">a</span> and <span class="chem">b</span>: <span class="chem">a ln 2 + b = 5.1</span> and <span class="chem">a ln 9 + b = 8.7</span>.
        "各データ点から <span class=\"chem\">a</span> と <span class=\"chem\">b</span> の 1 次方程式が得られます：<span class=\"chem\">a ln 2 + b = 5.1</span> と <span class=\"chem\">a ln 9 + b = 8.7</span>。",
        // EN: Subtract to eliminate <span class="chem">b</span>, and use <span class="chem">ln 9 - ln 2 = ln 4.5</span>; or use the GDC simultaneous-equation solver.
        "辺々引いて <span class=\"chem\">b</span> を消去し、<span class=\"chem\">ln 9 - ln 2 = ln 4.5</span> を使います。または GDC の連立方程式ソルバーを使います。",
      ],
      // EN: <p><span class="chem">a ln 9 + b = 8.7</span> and <span class="chem">a ln 2 + b = 5.1</span>. Subtracting: <span class="chem">a(ln 9 - ln 2) = 3.6 => a = 3.6/ln 4.5 ≈ 2.3935</span>, so <span class="chem">a = 2.39</span> (and <span class="chem">b ≈ 3.44</span>).</p>
      solution: "<p><span class=\"chem\">a ln 9 + b = 8.7</span> と <span class=\"chem\">a ln 2 + b = 5.1</span>。辺々引くと <span class=\"chem\">a(ln 9 - ln 2) = 3.6 => a = 3.6/ln 4.5 ≈ 2.3935</span> なので、<span class=\"chem\">a = 2.39</span>（また <span class=\"chem\">b ≈ 3.44</span>）です。</p>",
    },

    // ── t2-2-q050 · short · challenge · SL · SL 2.9, 2.10 · 9 marks
    "t2-2-q050": {
      // EN: <p>Goats are released on an island. Ecologists model the number of goats <span class="chem">t</span> years after release by <span class="chem">P(t) = L/(1 + C e^{-kt})</span>, where <span class="chem">L</span>, <span class="chem">C</span> and <span class="chem">k</span> are positive constants. The island can support at most <span class="chem">5000</span> goats, and the model's population approaches this value in the long term. <span class="chem">400</span> goats are released at <span class="chem">t = 0</span>, and there are <span class="chem">1100</span> goats after 3 years.<br>(a) Write down the value of <span class="chem">L</span>, giving a reason. <strong>[2 marks]</strong><br>(b) Show that <span class="chem">C = 11.5</span>. <strong>[2 marks]</strong><br>(c) Find the value of <span class="chem">k</span>. <strong>[3 marks]</strong><br>(d) Find how long it takes for the population to reach <span class="chem">4000</span> goats. <strong>[2 marks]</strong></p>
      stem: "<p>ある島にヤギを放す。生態学者は、放してから <span class=\"chem\">t</span> 年後のヤギの数を <span class=\"chem\">P(t) = L/(1 + C e^{-kt})</span> でモデル化する。ここで <span class=\"chem\">L</span>、<span class=\"chem\">C</span>、<span class=\"chem\">k</span> は正の定数である。島が養えるヤギは最大 <span class=\"chem\">5000</span> 頭であり、モデルの個体数は長期的にこの値に近づく。<span class=\"chem\">t = 0</span> に <span class=\"chem\">400</span> 頭のヤギが放され、3 年後には <span class=\"chem\">1100</span> 頭になった。<br>(a) 理由をつけて <span class=\"chem\">L</span> の値を書きなさい (Write down)。 <strong>[2 marks]</strong><br>(b) <span class=\"chem\">C = 11.5</span> であることを示しなさい (Show that)。 <strong>[2 marks]</strong><br>(c) <span class=\"chem\">k</span> の値を求めなさい (Find)。 <strong>[3 marks]</strong><br>(d) 個体数が <span class=\"chem\">4000</span> 頭に達するまでにかかる時間を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a logistic-style model. The phrase "approaches this value in the long term" tells you what happens to <span class="chem">P(t)</span> as <span class="chem">t -&gt; infty</span>, which gives <span class="chem">L</span> without any data. The two counts then give <span class="chem">C</span> and <span class="chem">k</span>.
        "解読：これはロジスティック型のモデルです。「長期的にこの値に近づく」という表現から、<span class=\"chem\">t -&gt; infty</span> のとき <span class=\"chem\">P(t)</span> がどうなるかがわかり、データなしで <span class=\"chem\">L</span> が得られます。そのあと 2 つの数から <span class=\"chem\">C</span> と <span class=\"chem\">k</span> が得られます。",
        // EN: At <span class="chem">t = 0</span>, <span class="chem">e^0 = 1</span>, so <span class="chem">P(0) = L/(1 + C)</span>.
        "<span class=\"chem\">t = 0</span> では <span class=\"chem\">e^0 = 1</span> なので、<span class=\"chem\">P(0) = L/(1 + C)</span> です。",
        // EN: For (c), rearrange <span class="chem">1100 = 5000/(1 + 11.5 e^{-3k})</span> to isolate <span class="chem">e^{-3k}</span>, or solve on the GDC.
        "(c) では <span class=\"chem\">1100 = 5000/(1 + 11.5 e^{-3k})</span> を変形して <span class=\"chem\">e^{-3k}</span> だけを一方の辺に残すか、GDC で解きます。",
        // EN: Keep the unrounded <span class="chem">k</span> in your GDC for (d).
        "(d) のために、四捨五入していない <span class=\"chem\">k</span> を GDC に保存しておきます。",
      ],
      // EN: <p><strong>Decode:</strong> the long-term limit is the horizontal asymptote of the model, so it gives <span class="chem">L</span>; each data point then fixes one more constant.</p><p>(a) As <span class="chem">t -&gt; infty</span>, <span class="chem">e^{-kt} -&gt; 0</span> so <span class="chem">P(t) -&gt; L</span>. The long-term population is 5000, so <span class="chem">L = 5000</span>.<br>(b) <span class="chem">400 = 5000/(1 + C) => 1 + C = 12.5 => C = 11.5</span>.<br>(c) <span class="chem">1100 = 5000/(1 + 11.5 e^{-3k}) => 1 + 11.5 e^{-3k} = 50/11 => e^{-3k} = (39/11)/11.5 ≈ 0.30830 => k = -ln(0.30830)/3 ≈ 0.392</span>.<br>(d) <span class="chem">4000 = 5000/(1 + 11.5 e^{-kt}) => 11.5 e^{-kt} = 0.25 => t = ln(46)/k ≈ 9.76</span> years.</p>
      solution: "<p><strong>解読：</strong>長期的な極限はモデルの水平漸近線なので、それから <span class=\"chem\">L</span> が得られます。そのあと各データ点から定数が 1 つずつ決まります。</p><p>(a) <span class=\"chem\">t -&gt; infty</span> のとき <span class=\"chem\">e^{-kt} -&gt; 0</span> なので、<span class=\"chem\">P(t) -&gt; L</span> です。長期的な個体数は 5000 なので、<span class=\"chem\">L = 5000</span> です。<br>(b) <span class=\"chem\">400 = 5000/(1 + C) => 1 + C = 12.5 => C = 11.5</span>。<br>(c) <span class=\"chem\">1100 = 5000/(1 + 11.5 e^{-3k}) => 1 + 11.5 e^{-3k} = 50/11 => e^{-3k} = (39/11)/11.5 ≈ 0.30830 => k = -ln(0.30830)/3 ≈ 0.392</span>。<br>(d) <span class=\"chem\">4000 = 5000/(1 + 11.5 e^{-kt}) => 11.5 e^{-kt} = 0.25 => t = ln(46)/k ≈ 9.76</span> 年です。</p>",
      // EN: <p>(a) <span class="chem">L = 5000</span>, because <span class="chem">e^{-kt} -&gt; 0</span> so <span class="chem">P -&gt; L</span>; (b) <span class="chem">400 = 5000/(1 + C) => C = 11.5</span>; (c) <span class="chem">k ≈ 0.392</span>; (d) <span class="chem">9.76</span> years.</p>
      answer: "<p>(a) <span class=\"chem\">L = 5000</span>。<span class=\"chem\">e^{-kt} -&gt; 0</span> なので <span class=\"chem\">P -&gt; L</span> となるから；(b) <span class=\"chem\">400 = 5000/(1 + C) => C = 11.5</span>；(c) <span class=\"chem\">k ≈ 0.392</span>；(d) <span class=\"chem\">9.76</span> 年。</p>",
      markscheme: [
        // EN: A1: L = 5000.
        "A1: L = 5000.",
        // EN: R1: As t → ∞, e^(−kt) → 0, so P(t) → L; the long-term value is 5000.
        "R1：t → ∞ のとき e^(−kt) → 0 なので P(t) → L。長期的な値は 5000。",
        // EN: M1: Substitutes t = 0: 400 = 5000/(1 + C e⁰) = 5000/(1 + C).
        "M1：t = 0 を代入する：400 = 5000/(1 + C e⁰) = 5000/(1 + C)。",
        // EN: A1: 1 + C = 12.5. AG: C = 11.5; the given line itself earns no mark.
        "A1：1 + C = 12.5。AG：C = 11.5。与えられた結果の行そのものには得点がない。",
        // EN: M1: Substitutes t = 3, P = 1100: 1100 = 5000/(1 + 11.5e^(−3k)).
        "M1：t = 3, P = 1100 を代入する：1100 = 5000/(1 + 11.5e^(−3k))。",
        // EN: A1: e^(−3k) = (5000/1100 − 1)/11.5 ≈ 0.30830 (or GDC solve).
        "A1：e^(−3k) = (5000/1100 − 1)/11.5 ≈ 0.30830（または GDC で解く）。",
        // EN: A1: k ≈ 0.392 (0.39223…).
        "A1: k ≈ 0.392 (0.39223…).",
        // EN: M1: Solves 4000 = 5000/(1 + 11.5e^(−kt)) (algebraically or by GDC intersection).
        "M1：4000 = 5000/(1 + 11.5e^(−kt)) を解く（式変形または GDC の交点）。",
        // EN: A1: t ≈ 9.76 years.
        "A1：t ≈ 9.76 年。",
      ],
    },

    // ── t2-2-q051 · numeric · challenge · SL · SL 2.9, 2.10 · 5 marks
    "t2-2-q051": {
      // EN: <p>At the start of 2025, town A has <span class="chem">12 000</span> residents and town B has <span class="chem">18 500</span>. The population of town A is growing by <span class="chem">2.5%</span> per year, and the population of town B is falling by <span class="chem">1.2%</span> per year. Assuming these rates continue, find the least whole number of years <span class="chem">n</span> after the start of 2025 such that the population of A is greater than the population of B after <span class="chem">n</span> years.</p>
      stem: "<p>2025 年の初めに、町 A の住民は <span class=\"chem\">12 000</span> 人、町 B の住民は <span class=\"chem\">18 500</span> 人である。町 A の人口は毎年 <span class=\"chem\">2.5%</span> ずつ増加し、町 B の人口は毎年 <span class=\"chem\">1.2%</span> ずつ減少している。これらの割合が続くと仮定して、<span class=\"chem\">n</span> 年後に A の人口が B の人口より多くなるような、2025 年の初めからの最小の整数の年数 <span class=\"chem\">n</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "growing by 2.5%" gives a factor of <span class="chem">1.025</span> per year; "falling by 1.2%" gives <span class="chem">0.988</span>. You need the first whole <span class="chem">n</span> after the two exponential graphs cross.
        "解読：「2.5% 増加」は 1 年あたり <span class=\"chem\">1.025</span> 倍、「1.2% 減少」は <span class=\"chem\">0.988</span> 倍を与えます。2 つの指数関数のグラフが交わった後の最初の整数 <span class=\"chem\">n</span> が必要です。",
        // EN: Solve <span class="chem">12000(1.025)^n = 18500(0.988)^n</span> by GDC intersection (or by logs).
        "GDC の交点（または対数）で <span class=\"chem\">12000(1.025)^n = 18500(0.988)^n</span> を解きます。",
        // EN: The crossing value is not a whole number. Round <strong>up</strong>, and check the populations at the integers on either side.
        "交わる値は整数ではありません。<strong>切り上げ</strong>て、両側の整数での人口を確認します。",
      ],
      // EN: <p><strong>Decode:</strong> two exponential models with factors <span class="chem">1.025</span> and <span class="chem">0.988</span>; find where <span class="chem">A = B</span>, then the next whole year.</p><p><span class="chem">12000(1.025)^n = 18500(0.988)^n => (1.025/0.988)^n = 18500/12000 => n = ln(18500/12000)/ln(1.025/0.988) ≈ 11.77</span>. Check: after 11 years A ≈ 15 745 and B ≈ 16 199 (B larger); after 12 years A ≈ 16 139 and B ≈ 16 005 (A larger). So <span class="chem">n = 12</span>.</p>
      solution: "<p><strong>解読：</strong>因子が <span class=\"chem\">1.025</span> と <span class=\"chem\">0.988</span> の 2 つの指数関数モデルです。<span class=\"chem\">A = B</span> となるところを求め、その次の整数の年を求めます。</p><p><span class=\"chem\">12000(1.025)^n = 18500(0.988)^n => (1.025/0.988)^n = 18500/12000 => n = ln(18500/12000)/ln(1.025/0.988) ≈ 11.77</span>。確認：11 年後は A ≈ 15 745、B ≈ 16 199（B の方が大きい）、12 年後は A ≈ 16 139、B ≈ 16 005（A の方が大きい）。よって <span class=\"chem\">n = 12</span> です。</p>",
    },

    // ── t2-2-q052 · numeric · exam · SL · SL 2.10 · 3 marks
    "t2-2-q052": {
      // EN: <p>Find the positive solution of the equation <span class="chem">x^2 - 3 = 2 ln(x + 1)</span>, giving your answer correct to 3 significant figures.</p>
      stem: "<p>方程式 <span class=\"chem\">x^2 - 3 = 2 ln(x + 1)</span> の正の解を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: There is no algebraic method for an equation mixing a polynomial and a logarithm. Graph <span class="chem">y = x^2 - 3</span> and <span class="chem">y = 2 ln(x + 1)</span> on the GDC.
        "多項式と対数が混ざった方程式には代数的な解法がありません。GDC で <span class=\"chem\">y = x^2 - 3</span> と <span class=\"chem\">y = 2 ln(x + 1)</span> のグラフをかきます。",
        // EN: There are two intersections. Choose the one with <span class="chem">x &gt; 0</span>.
        "交点は 2 つあります。<span class=\"chem\">x &gt; 0</span> の方を選びます。",
      ],
      // EN: <p>Graphing <span class="chem">Y_1 = x^2 - 3</span> and <span class="chem">Y_2 = 2 ln(x + 1)</span> gives intersections at <span class="chem">x ≈ -0.712</span> and <span class="chem">x ≈ 2.3243</span>. The positive solution is <span class="chem">x = 2.32</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">Y_1 = x^2 - 3</span> と <span class=\"chem\">Y_2 = 2 ln(x + 1)</span> のグラフをかくと、交点は <span class=\"chem\">x ≈ -0.712</span> と <span class=\"chem\">x ≈ 2.3243</span> です。正の解は <span class=\"chem\">x = 2.32</span>（有効数字 3 桁）です。</p>",
    },

    // ── t2-2-q053 · numeric · exam · SL · SL 2.10 · 3 marks
    "t2-2-q053": {
      // EN: <p>The equation <span class="chem">2^x = x + 3</span> has two solutions. Find the negative solution, correct to 3 significant figures.</p>
      stem: "<p>方程式 <span class=\"chem\">2^x = x + 3</span> は 2 つの解をもつ。負の解を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Graph <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span>, or find the zeros of <span class="chem">y = 2^x - x - 3</span>.
        "<span class=\"chem\">y = 2^x</span> と <span class=\"chem\">y = x + 3</span> のグラフをかくか、<span class=\"chem\">y = 2^x - x - 3</span> の零点を求めます。",
        // EN: The line crosses the exponential curve twice. You need the crossing to the left of the <span class="chem">y</span>-axis; your viewing window must include <span class="chem">x = -3</span>.
        "直線は指数関数の曲線と 2 回交わります。必要なのは <span class=\"chem\">y</span> 軸の左側の交点です。表示範囲に <span class=\"chem\">x = -3</span> が含まれるようにしましょう。",
      ],
      // EN: <p>The zeros of <span class="chem">2^x - x - 3</span> are <span class="chem">x ≈ -2.8625</span> and <span class="chem">x ≈ 2.4449</span>. The negative solution is <span class="chem">x = -2.86</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">2^x - x - 3</span> の零点は <span class=\"chem\">x ≈ -2.8625</span> と <span class=\"chem\">x ≈ 2.4449</span> です。負の解は <span class=\"chem\">x = -2.86</span>（有効数字 3 桁）です。</p>",
    },

    // ── t2-2-q054 · short · exam · SL · SL 2.10 · 5 marks
    "t2-2-q054": {
      // EN: <p>Let <span class="chem">f(x) = ln x</span> and <span class="chem">g(x) = 0.5x - 1</span>, for <span class="chem">x &gt; 0</span>.<br>(a) Find the <span class="chem">x</span>-coordinates of the points where the graphs of <span class="chem">f</span> and <span class="chem">g</span> intersect. <strong>[3 marks]</strong><br>(b) Hence solve the inequality <span class="chem">ln x &gt; 0.5x - 1</span>. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">x &gt; 0</span> に対して <span class=\"chem\">f(x) = ln x</span>、<span class=\"chem\">g(x) = 0.5x - 1</span> とする。<br>(a) <span class=\"chem\">f</span> と <span class=\"chem\">g</span> のグラフの交点の <span class=\"chem\">x</span> 座標を求めなさい (Find)。 <strong>[3 marks]</strong><br>(b) これを用いて (Hence)、不等式 <span class=\"chem\">ln x &gt; 0.5x - 1</span> を解きなさい。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Use the GDC intersect tool twice: once near <span class="chem">x = 0.5</span> and once near <span class="chem">x = 5</span>. Choose a window that shows both.
        "GDC の交点機能を 2 回使います：1 回は <span class=\"chem\">x = 0.5</span> の近く、もう 1 回は <span class=\"chem\">x = 5</span> の近くです。両方が見える表示範囲を選びましょう。",
        // EN: For (b), look at your graph: where is the curve <span class="chem">y = ln x</span> above the line?
        "(b) ではグラフを見ます：曲線 <span class=\"chem\">y = ln x</span> が直線より上にあるのはどこでしょうか？",
      ],
      // EN: <p>(a) The GDC gives intersections at <span class="chem">x ≈ 0.46392</span> and <span class="chem">x ≈ 5.35669</span>, i.e. <span class="chem">x ≈ 0.464</span> and <span class="chem">x ≈ 5.36</span>.<br>(b) At <span class="chem">x = 1</span>, <span class="chem">ln 1 = 0 &gt; -0.5</span>, so the curve is above the line between the intersections (and below outside them). Hence <span class="chem">0.464 &lt; x &lt; 5.36</span>.</p>
      solution: "<p>(a) GDC により交点は <span class=\"chem\">x ≈ 0.46392</span> と <span class=\"chem\">x ≈ 5.35669</span>、すなわち <span class=\"chem\">x ≈ 0.464</span> と <span class=\"chem\">x ≈ 5.36</span> です。<br>(b) <span class=\"chem\">x = 1</span> では <span class=\"chem\">ln 1 = 0 &gt; -0.5</span> なので、2 つの交点の間で曲線は直線より上にあります（外側では下にあります）。よって <span class=\"chem\">0.464 &lt; x &lt; 5.36</span> です。</p>",
      // EN: <p>(a) <span class="chem">x ≈ 0.464</span> and <span class="chem">x ≈ 5.36</span>; (b) <span class="chem">0.464 &lt; x &lt; 5.36</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x ≈ 0.464</span> と <span class=\"chem\">x ≈ 5.36</span>；(b) <span class=\"chem\">0.464 &lt; x &lt; 5.36</span>。</p>",
      markscheme: [
        // EN: M1: Graphs y = ln x and y = 0.5x − 1 (or finds the zeros of ln x − 0.5x + 1) on the GDC.
        "M1：GDC で y = ln x と y = 0.5x − 1 のグラフをかく（または ln x − 0.5x + 1 の零点を求める）。",
        // EN: A1: x ≈ 0.464.
        "A1: x ≈ 0.464.",
        // EN: A1: x ≈ 5.36.
        "A1: x ≈ 5.36.",
        // EN: M1: Identifies that the logarithm graph lies above the line between the intersections.
        "M1：2 つの交点の間で対数関数のグラフが直線より上にあることを特定する。",
        // EN: A1: 0.464 < x < 5.36.
        "A1: 0.464 < x < 5.36.",
      ],
    },

    // ── t2-2-q055 · numeric · exam · SL · SL 2.8, 2.10 · 3 marks
    "t2-2-q055": {
      // EN: <p>Solve the equation <span class="chem">(2x + 1)/(x - 1) = e^{0.5x}</span> for <span class="chem">x &gt; 1</span>, giving your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x &gt; 1</span> において方程式 <span class=\"chem\">(2x + 1)/(x - 1) = e^{0.5x}</span> を解き (Solve)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Graph <span class="chem">y = (2x + 1)/(x - 1)</span> and <span class="chem">y = e^{0.5x}</span>. The rational graph has a vertical asymptote at <span class="chem">x = 1</span>, so look to the right of it.
        "<span class=\"chem\">y = (2x + 1)/(x - 1)</span> と <span class=\"chem\">y = e^{0.5x}</span> のグラフをかきます。分数関数のグラフは <span class=\"chem\">x = 1</span> に鉛直漸近線をもつので、その右側を見ます。",
        // EN: For <span class="chem">x &gt; 1</span> the rational function decreases towards <span class="chem">2</span> while the exponential increases, so there is exactly one intersection there.
        "<span class=\"chem\">x &gt; 1</span> では分数関数は <span class=\"chem\">2</span> に向かって減少し、指数関数は増加するので、そこでの交点はちょうど 1 つです。",
      ],
      // EN: <p>The GDC intersection of <span class="chem">Y_1 = (2x + 1)/(x - 1)</span> and <span class="chem">Y_2 = e^{0.5x}</span> on <span class="chem">x &gt; 1</span> is at <span class="chem">x ≈ 2.6688</span>, so <span class="chem">x = 2.67</span>. (There is another intersection with <span class="chem">x &lt; 1</span>, which the question excludes.)</p>
      solution: "<p><span class=\"chem\">x &gt; 1</span> での <span class=\"chem\">Y_1 = (2x + 1)/(x - 1)</span> と <span class=\"chem\">Y_2 = e^{0.5x}</span> の GDC による交点は <span class=\"chem\">x ≈ 2.6688</span> なので、<span class=\"chem\">x = 2.67</span> です。（<span class=\"chem\">x &lt; 1</span> にもう 1 つ交点がありますが、問題の条件で除外されます。）</p>",
    },

    // ── t2-2-q056 · numeric · exam · SL · SL 2.10 · 2 marks
    "t2-2-q056": {
      // EN: <p>Use your GDC to find the number of real solutions of the equation <span class="chem">ln x = x^2 - 3x + 1</span>.</p>
      stem: "<p>GDC を使って、方程式 <span class=\"chem\">ln x = x^2 - 3x + 1</span> の実数解の個数を求めなさい (Find)。</p>",
      hints: [
        // EN: Graph both sides. Remember that <span class="chem">ln x</span> exists only for <span class="chem">x &gt; 0</span>, and zoom out enough to see the whole picture.
        "両辺のグラフをかきます。<span class=\"chem\">ln x</span> は <span class=\"chem\">x &gt; 0</span> でのみ存在することを忘れずに、全体が見えるまで十分に表示範囲を広げましょう。",
        // EN: The parabola has its vertex at <span class="chem">x = 1.5</span>; it is above <span class="chem">ln x</span> near <span class="chem">x = 0</span> and again for large <span class="chem">x</span>.
        "放物線の頂点は <span class=\"chem\">x = 1.5</span> にあります。放物線は <span class=\"chem\">x = 0</span> の近くと、<span class=\"chem\">x</span> が大きいところで再び <span class=\"chem\">ln x</span> より上にあります。",
      ],
      // EN: <p>Graphing <span class="chem">y = ln x</span> and <span class="chem">y = x^2 - 3x + 1</span> shows intersections at <span class="chem">x ≈ 0.621</span> and <span class="chem">x ≈ 3.04</span>. The parabola is above the curve for <span class="chem">0 &lt; x &lt; 0.621</span> and for <span class="chem">x &gt; 3.04</span>, and below it in between, so there are <strong>2</strong> real solutions.</p>
      solution: "<p><span class=\"chem\">y = ln x</span> と <span class=\"chem\">y = x^2 - 3x + 1</span> のグラフをかくと、交点は <span class=\"chem\">x ≈ 0.621</span> と <span class=\"chem\">x ≈ 3.04</span> です。放物線は <span class=\"chem\">0 &lt; x &lt; 0.621</span> と <span class=\"chem\">x &gt; 3.04</span> で曲線より上にあり、その間では下にあるので、実数解は <strong>2</strong> 個です。</p>",
    },

    // ── t2-2-q057 · numeric · exam · SL · SL 2.9, 2.10 · 3 marks
    "t2-2-q057": {
      // EN: <p>Tank A contains <span class="chem">500</span> litres of water and starts to leak. The volume left in tank A after <span class="chem">t</span> minutes is <span class="chem">V_A = 500 e^{-0.04t}</span> litres. At the same moment, tank B, which contains <span class="chem">50</span> litres, starts to be filled at <span class="chem">20</span> litres per minute. Find the time at which the two tanks contain the same volume, correct to 3 significant figures.</p>
      stem: "<p>タンク A には <span class=\"chem\">500</span> リットルの水が入っており、水が漏れ始める。<span class=\"chem\">t</span> 分後にタンク A に残っている量は <span class=\"chem\">V_A = 500 e^{-0.04t}</span> リットルである。同時に、<span class=\"chem\">50</span> リットル入っているタンク B に毎分 <span class=\"chem\">20</span> リットルの割合で水が入れられ始める。2 つのタンクの水の量が等しくなる時刻を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Decode: write the volume of tank B as a linear function, <span class="chem">V_B = 50 + 20t</span>, then solve <span class="chem">V_A = V_B</span>.
        "解読：タンク B の量を 1 次関数 <span class=\"chem\">V_B = 50 + 20t</span> で表し、<span class=\"chem\">V_A = V_B</span> を解きます。",
        // EN: An equation mixing <span class="chem">e^{-0.04t}</span> and <span class="chem">t</span> needs the GDC: intersect the two graphs.
        "<span class=\"chem\">e^{-0.04t}</span> と <span class=\"chem\">t</span> が混ざった方程式には GDC が必要です：2 つのグラフの交点を求めます。",
      ],
      // EN: <p><span class="chem">500 e^{-0.04t} = 50 + 20t</span>. The GDC intersection is at <span class="chem">t ≈ 12.602</span>, so the volumes are equal after <span class="chem">12.6</span> minutes (both about <span class="chem">302</span> litres).</p>
      solution: "<p><span class=\"chem\">500 e^{-0.04t} = 50 + 20t</span>。GDC による交点は <span class=\"chem\">t ≈ 12.602</span> なので、量が等しくなるのは <span class=\"chem\">12.6</span> 分後です（どちらも約 <span class=\"chem\">302</span> リットル）。</p>",
    },

    // ── t2-2-q058 · numeric · exam · SL · SL 2.8, 2.10 · 3 marks
    "t2-2-q058": {
      // EN: <p>The graphs of <span class="chem">y = (3x - 2)/(x + 1)</span> and <span class="chem">y = 0.5x^2 - 1.8</span> intersect at three points. Find the <span class="chem">x</span>-coordinate of the point of intersection with <span class="chem">x &gt; 1</span>, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">y = (3x - 2)/(x + 1)</span> と <span class=\"chem\">y = 0.5x^2 - 1.8</span> のグラフは 3 点で交わる。<span class=\"chem\">x &gt; 1</span> である交点の <span class=\"chem\">x</span> 座標を求め (Find)、有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Graph both functions. The rational graph has a vertical asymptote at <span class="chem">x = -1</span>; the GDC may draw a false near-vertical line there, which is not an intersection.
        "両方の関数のグラフをかきます。分数関数のグラフは <span class=\"chem\">x = -1</span> に鉛直漸近線をもちます。GDC がそこにほぼ垂直な偽の線を描くことがありますが、それは交点ではありません。",
        // EN: Use the intersect tool with a starting guess near <span class="chem">x = 2.5</span>.
        "交点機能を使い、初期値を <span class=\"chem\">x = 2.5</span> の近くにとります。",
      ],
      // EN: <p>The graphs intersect at <span class="chem">x ≈ -3.656</span>, <span class="chem">x ≈ 0.0419</span> and <span class="chem">x ≈ 2.6140</span>. The one with <span class="chem">x &gt; 1</span> is <span class="chem">x = 2.61</span> (3 s.f.).</p>
      solution: "<p>グラフは <span class=\"chem\">x ≈ -3.656</span>、<span class=\"chem\">x ≈ 0.0419</span>、<span class=\"chem\">x ≈ 2.6140</span> で交わります。<span class=\"chem\">x &gt; 1</span> であるものは <span class=\"chem\">x = 2.61</span>（有効数字 3 桁）です。</p>",
    },

    // ── t2-2-q059 · short · challenge · SL · SL 2.8, 2.9, 2.10 · 9 marks
    "t2-2-q059": {
      // EN: <p>Two students learn to touch-type. Their typing speeds, in words per minute, <span class="chem">t</span> weeks after starting are modelled by<br>Asha: <span class="chem">A(t) = (75t + 20)/(t + 4)</span> &nbsp; and &nbsp; Ben: <span class="chem">B(t) = 82(1 - e^{-0.15t})</span>, for <span class="chem">t &gt;= 0</span>.<br>(a) Write down each student's typing speed when they start. <strong>[2 marks]</strong><br>(b) Write down the speed that each student's model approaches in the long term. <strong>[2 marks]</strong><br>(c) Find the time when the two students type at the same speed. <strong>[2 marks]</strong><br>(d) Each student aims to reach <span class="chem">60</span> words per minute. Find how many weeks longer Asha takes than Ben to reach this target. <strong>[3 marks]</strong></p>
      stem: "<p>2 人の生徒がタッチタイピングを習っている。始めてから <span class=\"chem\">t</span> 週間後の 2 人のタイピング速度（1 分あたりの語数）は次のようにモデル化される。<br>アシャ：<span class=\"chem\">A(t) = (75t + 20)/(t + 4)</span> &nbsp; ベン：<span class=\"chem\">B(t) = 82(1 - e^{-0.15t})</span>（<span class=\"chem\">t &gt;= 0</span>）。<br>(a) 始めたときのそれぞれの生徒のタイピング速度を書きなさい (Write down)。 <strong>[2 marks]</strong><br>(b) それぞれの生徒のモデルが長期的に近づく速度を書きなさい (Write down)。 <strong>[2 marks]</strong><br>(c) 2 人の生徒が同じ速度でタイプする時刻を求めなさい (Find)。 <strong>[2 marks]</strong><br>(d) どちらの生徒も 1 分あたり <span class=\"chem\">60</span> 語に達することを目標にしている。この目標に達するのに、アシャがベンより何週間長くかかるか求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: one model is linear-over-linear (horizontal asymptote = ratio of the <span class="chem">t</span>-coefficients); the other is exponential (as <span class="chem">t -&gt; infty</span>, <span class="chem">e^{-0.15t} -&gt; 0</span>). "When they start" means <span class="chem">t = 0</span>; "in the long term" means the asymptotes.
        "解読：一方のモデルは 1 次式 ÷ 1 次式（水平漸近線 = <span class=\"chem\">t</span> の係数の比）、もう一方は指数関数（<span class=\"chem\">t -&gt; infty</span> のとき <span class=\"chem\">e^{-0.15t} -&gt; 0</span>）です。「始めたとき」は <span class=\"chem\">t = 0</span> を、「長期的に」は漸近線を意味します。",
        // EN: For (c), graph both models for <span class="chem">0 &lt;= t &lt;= 30</span> and use the intersect tool.
        "(c) では <span class=\"chem\">0 &lt;= t &lt;= 30</span> で両方のモデルのグラフをかき、交点機能を使います。",
        // EN: For (d), solve <span class="chem">A(t) = 60</span> and <span class="chem">B(t) = 60</span> separately, then subtract. Asha's equation can be solved by hand.
        "(d) では <span class=\"chem\">A(t) = 60</span> と <span class=\"chem\">B(t) = 60</span> を別々に解き、差をとります。アシャの方程式は手計算で解けます。",
      ],
      // EN: <p><strong>Decode:</strong> start values come from <span class="chem">t = 0</span>, long-term values from the horizontal asymptotes, and "same speed" from the intersection of the two graphs.</p><p>(a) <span class="chem">A(0) = 20/4 = 5</span>; <span class="chem">B(0) = 82(1 - 1) = 0</span>.<br>(b) <span class="chem">A(t) -&gt; 75/1 = 75</span>; <span class="chem">B(t) -&gt; 82</span> because <span class="chem">e^{-0.15t} -&gt; 0</span>.<br>(c) The GDC intersection for <span class="chem">t &gt; 0</span> is at <span class="chem">t ≈ 5.27</span> weeks (Asha is faster before this, Ben after).<br>(d) Asha: <span class="chem">75t + 20 = 60t + 240 => t = 220/15 ≈ 14.667</span>. Ben: <span class="chem">e^{-0.15t} = 22/82 => t = ln(82/22)/0.15 ≈ 8.771</span>. Asha takes <span class="chem">14.667 - 8.771 ≈ 5.90</span> weeks longer.</p>
      solution: "<p><strong>解読：</strong>初期値は <span class=\"chem\">t = 0</span> から、長期的な値は水平漸近線から、「同じ速度」は 2 つのグラフの交点から得られます。</p><p>(a) <span class=\"chem\">A(0) = 20/4 = 5</span>；<span class=\"chem\">B(0) = 82(1 - 1) = 0</span>。<br>(b) <span class=\"chem\">A(t) -&gt; 75/1 = 75</span>；<span class=\"chem\">e^{-0.15t} -&gt; 0</span> なので <span class=\"chem\">B(t) -&gt; 82</span>。<br>(c) <span class=\"chem\">t &gt; 0</span> での GDC による交点は <span class=\"chem\">t ≈ 5.27</span> 週です（それより前はアシャの方が速く、後はベンの方が速い）。<br>(d) アシャ：<span class=\"chem\">75t + 20 = 60t + 240 => t = 220/15 ≈ 14.667</span>。ベン：<span class=\"chem\">e^{-0.15t} = 22/82 => t = ln(82/22)/0.15 ≈ 8.771</span>。アシャの方が <span class=\"chem\">14.667 - 8.771 ≈ 5.90</span> 週長くかかります。</p>",
      // EN: <p>(a) Asha <span class="chem">5</span> wpm, Ben <span class="chem">0</span> wpm; (b) Asha <span class="chem">75</span> wpm, Ben <span class="chem">82</span> wpm; (c) <span class="chem">t ≈ 5.27</span> weeks; (d) Asha <span class="chem">14.67</span> weeks, Ben <span class="chem">8.77</span> weeks: <span class="chem">5.90</span> weeks longer.</p>
      answer: "<p>(a) アシャ <span class=\"chem\">5</span> wpm、ベン <span class=\"chem\">0</span> wpm；(b) アシャ <span class=\"chem\">75</span> wpm、ベン <span class=\"chem\">82</span> wpm；(c) <span class=\"chem\">t ≈ 5.27</span> 週；(d) アシャ <span class=\"chem\">14.67</span> 週、ベン <span class=\"chem\">8.77</span> 週：<span class=\"chem\">5.90</span> 週長い。</p>",
      markscheme: [
        // EN: A1: A(0) = 20/4 = 5 words per minute.
        "A1：A(0) = 20/4 = 5 語/分。",
        // EN: A1: B(0) = 82(1 − 1) = 0 words per minute.
        "A1：B(0) = 82(1 − 1) = 0 語/分。",
        // EN: A1: Asha approaches 75 (horizontal asymptote 75/1).
        "A1：アシャは 75 に近づく（水平漸近線 75/1）。",
        // EN: A1: Ben approaches 82 (since e^(−0.15t) → 0).
        "A1：ベンは 82 に近づく（e^(−0.15t) → 0 なので）。",
        // EN: M1: Solves A(t) = B(t) using the GDC (intersection for t > 0).
        "M1：GDC を使って A(t) = B(t) を解く（t > 0 での交点）。",
        // EN: A1: t ≈ 5.27 weeks.
        "A1：t ≈ 5.27 週。",
        // EN: M1: Sets A(t) = 60 and B(t) = 60 and solves each (by hand or GDC).
        "M1：A(t) = 60 と B(t) = 60 とおき、それぞれを解く（手計算または GDC）。",
        // EN: A1: Asha t = 44/3 ≈ 14.67 weeks (75t + 20 = 60t + 240) and Ben t = ln(82/22)/0.15 ≈ 8.77 weeks.
        "A1：アシャ t = 44/3 ≈ 14.67 週（75t + 20 = 60t + 240）、ベン t = ln(82/22)/0.15 ≈ 8.77 週。",
        // EN: A1: Difference ≈ 5.90 weeks.
        "A1：差 ≈ 5.90 週。",
      ],
    },

    // ── t2-2-q060 · short · challenge · SL · SL 2.9, 2.10 · 8 marks
    "t2-2-q060": {
      // EN: <p>Mia buys a car for <span class="chem">$28 000</span> with a loan. The value of the car <span class="chem">t</span> years after purchase is modelled by <span class="chem">V(t) = 28000(0.82)^t</span>. The amount she still owes on the loan is modelled by <span class="chem">D(t) = 26500 - 2900t</span>, until the loan is paid off. A car loan is described as "under water" when the amount owed is more than the value of the car.<br>(a) Find the value of the car after 3 years, to the nearest dollar. <strong>[2 marks]</strong><br>(b) Find the set of values of <span class="chem">t</span> for which Mia's loan is under water. <strong>[4 marks]</strong><br>(c) Find the greatest amount by which the debt exceeds the value of the car, to the nearest dollar. <strong>[2 marks]</strong></p>
      stem: "<p>ミアはローンを組んで <span class=\"chem\">$28 000</span> で車を買う。購入から <span class=\"chem\">t</span> 年後の車の価値は <span class=\"chem\">V(t) = 28000(0.82)^t</span> でモデル化される。ローンの残債は、完済するまで <span class=\"chem\">D(t) = 26500 - 2900t</span> でモデル化される。残債が車の価値より大きいとき、その自動車ローンは「アンダーウォーター」であるという。<br>(a) 3 年後の車の価値を 1 ドル単位で求めなさい (Find)。 <strong>[2 marks]</strong><br>(b) ミアのローンがアンダーウォーターとなる <span class=\"chem\">t</span> の値の範囲を求めなさい (Find)。 <strong>[4 marks]</strong><br>(c) 残債が車の価値を上回る額の最大値を 1 ドル単位で求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "under water" is defined in the stem: debt <span class="chem">&gt;</span> value, i.e. <span class="chem">D(t) &gt; V(t)</span>. That is an inequality between a linear and an exponential function, so you need the GDC intersections.
        "解読：「アンダーウォーター」は問題文で定義されています：残債 <span class=\"chem\">&gt;</span> 価値、すなわち <span class=\"chem\">D(t) &gt; V(t)</span>。これは 1 次関数と指数関数の間の不等式なので、GDC で交点を求める必要があります。",
        // EN: Graph <span class="chem">Y_1 = 26500 - 2900x</span> and <span class="chem">Y_2 = 28000(0.82)^x</span> for <span class="chem">0 &lt;= x &lt;= 9</span>. There are two intersections.
        "<span class=\"chem\">0 &lt;= x &lt;= 9</span> で <span class=\"chem\">Y_1 = 26500 - 2900x</span> と <span class=\"chem\">Y_2 = 28000(0.82)^x</span> のグラフをかきます。交点は 2 つあります。",
        // EN: For (c), graph <span class="chem">Y_3 = Y_1 - Y_2</span> and find its maximum. The greatest gap is not at either intersection.
        "(c) では <span class=\"chem\">Y_3 = Y_1 - Y_2</span> のグラフをかき、その最大値を求めます。差が最大になるのはどちらの交点でもありません。",
      ],
      // EN: <p><strong>Decode:</strong> translate the definition "under water" into the inequality <span class="chem">D(t) &gt; V(t)</span>, solve it graphically, and turn "greatest amount by which the debt exceeds the value" into the maximum of <span class="chem">D - V</span>.</p><p>(a) <span class="chem">V(3) = 28000(0.82)^3 ≈ 15438.30</span>, so about <span class="chem">$15 438</span>.<br>(b) At <span class="chem">t = 0</span>, <span class="chem">D = 26500 &lt; 28000 = V</span>. The graphs intersect at <span class="chem">t ≈ 0.648</span> and <span class="chem">t ≈ 6.457</span>, and <span class="chem">D &gt; V</span> between them, so the loan is under water for <span class="chem">0.648 &lt; t &lt; 6.46</span>.<br>(c) The maximum of <span class="chem">D(t) - V(t)</span> is about <span class="chem">2384.15</span> at <span class="chem">t ≈ 3.28</span>, so the greatest excess is <span class="chem">$2384</span>.</p>
      solution: "<p><strong>解読：</strong>「アンダーウォーター」の定義を不等式 <span class=\"chem\">D(t) &gt; V(t)</span> に直し、グラフを使って解きます。「残債が価値を上回る額の最大値」は <span class=\"chem\">D - V</span> の最大値に直します。</p><p>(a) <span class=\"chem\">V(3) = 28000(0.82)^3 ≈ 15438.30</span> なので、約 <span class=\"chem\">$15 438</span> です。<br>(b) <span class=\"chem\">t = 0</span> では <span class=\"chem\">D = 26500 &lt; 28000 = V</span> です。グラフは <span class=\"chem\">t ≈ 0.648</span> と <span class=\"chem\">t ≈ 6.457</span> で交わり、その間で <span class=\"chem\">D &gt; V</span> なので、ローンがアンダーウォーターとなるのは <span class=\"chem\">0.648 &lt; t &lt; 6.46</span> のときです。<br>(c) <span class=\"chem\">D(t) - V(t)</span> の最大値は <span class=\"chem\">t ≈ 3.28</span> での約 <span class=\"chem\">2384.15</span> なので、上回る額の最大値は <span class=\"chem\">$2384</span> です。</p>",
      // EN: <p>(a) <span class="chem">$15 438</span>; (b) <span class="chem">0.648 &lt; t &lt; 6.46</span>; (c) <span class="chem">$2384</span> (at <span class="chem">t ≈ 3.28</span>).</p>
      answer: "<p>(a) <span class=\"chem\">$15 438</span>；(b) <span class=\"chem\">0.648 &lt; t &lt; 6.46</span>；(c) <span class=\"chem\">$2384</span>（<span class=\"chem\">t ≈ 3.28</span> のとき）。</p>",
      markscheme: [
        // EN: M1: Substitutes t = 3: 28000 × 0.82³.
        "M1：t = 3 を代入する：28000 × 0.82³。",
        // EN: A1: $15 438 (15 438.30…).
        "A1: $15 438 (15 438.30…).",
        // EN: M1: Sets up D(t) > V(t), i.e. 26500 − 2900t > 28000(0.82)^t, and graphs both functions (or their difference).
        "M1：D(t) > V(t)、すなわち 26500 − 2900t > 28000(0.82)^t を立て、両方の関数（またはその差）のグラフをかく。",
        // EN: A1: First intersection t ≈ 0.648.
        "A1：1 つ目の交点 t ≈ 0.648。",
        // EN: A1: Second intersection t ≈ 6.46.
        "A1：2 つ目の交点 t ≈ 6.46。",
        // EN: A1: Under water for 0.648 < t < 6.46.
        "A1：0.648 < t < 6.46 でアンダーウォーター。",
        // EN: M1: Maximises D(t) − V(t) on the GDC (maximum of the difference graph).
        "M1：GDC で D(t) − V(t) を最大化する（差のグラフの最大値）。",
        // EN: A1: Greatest excess ≈ $2384 (at t ≈ 3.28).
        "A1：上回る額の最大値 ≈ $2384（t ≈ 3.28 のとき）。",
      ],
    },

  }
});
