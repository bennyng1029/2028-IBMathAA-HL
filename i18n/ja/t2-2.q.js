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
