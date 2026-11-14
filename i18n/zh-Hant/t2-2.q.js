/* t2-2.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't2-2.q', {
  questions: {

    // ── t2-2-q001 · mcq · foundation · SL · SL 2.6 · 2 marks
    "t2-2-q001": {
      // EN: <p>Express the quadratic function <span class="chem">f(x) = 3x^2 - 12x + 7</span> in vertex form <span class="chem">a(x - h)^2 + k</span>.</p>
      stem: "<p>把二次函數 <span class=\"chem\">f(x) = 3x^2 - 12x + 7</span> 表示為 (Express ... in ... form) 頂點式 <span class=\"chem\">a(x - h)^2 + k</span>。</p>",
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
        "從前兩項抽出公因數 <span class=\"chem\">3</span>：<span class=\"chem\">3(x^2 - 4x) + 7</span>。",
        // EN: Replace <span class="chem">x^2 - 4x</span> with <span class="chem">(x - 2)^2 - 4</span> and distribute the <span class="chem">3</span>.
        "把 <span class=\"chem\">x^2 - 4x</span> 寫成 <span class=\"chem\">(x - 2)^2 - 4</span>，再把 <span class=\"chem\">3</span> 分配展開。",
      ],
      // EN: <p><span class="chem">f(x) = 3(x^2 - 4x) + 7 = 3[(x - 2)^2 - 4] + 7 = 3(x - 2)^2 - 12 + 7 = 3(x - 2)^2 - 5</span>. You can verify the vertex at <span class="chem">x = -(-12)/(2 × 3) = 2</span> and <span class="chem">f(2) = 3(4) - 24 + 7 = -5</span>.</p>
      solution: "<p><span class=\"chem\">f(x) = 3(x^2 - 4x) + 7 = 3[(x - 2)^2 - 4] + 7 = 3(x - 2)^2 - 12 + 7 = 3(x - 2)^2 - 5</span>。你可用 <span class=\"chem\">x = -(-12)/(2 × 3) = 2</span> 及 <span class=\"chem\">f(2) = 3(4) - 24 + 7 = -5</span> 驗證頂點。</p>",
      misconception: {
        // EN (option B): When completing the square inside 3[(x − 2)² − 4] + 7, you forgot to multiply −4 by the factored 3, subtracting 4 instead of 12.
        "1": "在 3[(x − 2)² − 4] + 7 內配方時，你忘記把 −4 乘以抽出的 3，結果減去了 4 而非 12。",
        // EN (option C): You halved −12 to −6 before factoring out 3. Always factor 3 out of 3x² − 12x = 3(x² − 4x) first!
        "2": "你在抽出 3 之前就把 −12 減半成 −6。務必先從 3x² − 12x = 3(x² − 4x) 抽出 3！",
        // EN (option D): Since the middle term is −12x, the bracket is (x − 2)², not (x + 2)².
        "3": "因為中間項是 −12x，括號內應為 (x − 2)²，而非 (x + 2)²。",
      },
    },

    // ── t2-2-q002 · numeric · foundation · SL · SL 2.6 · 2 marks
    "t2-2-q002": {
      // EN: <p>A parabola has <span class="chem">x</span>-intercepts at <span class="chem">(-3, 0)</span> and <span class="chem">(7, 0)</span>, and passes through the point <span class="chem">(0, -42)</span>. Find the <span class="chem">y</span>-coordinate of its vertex.</p>
      stem: "<p>一條拋物線的 <span class=\"chem\">x</span> 軸截距為 <span class=\"chem\">(-3, 0)</span> 與 <span class=\"chem\">(7, 0)</span>，並通過點 <span class=\"chem\">(0, -42)</span>。求 (Find) 其頂點的 <span class=\"chem\">y</span> 坐標。</p>",
      hints: [
        // EN: Write the quadratic in factored form <span class="chem">y = a(x + 3)(x - 7)</span> and plug in <span class="chem">(0, -42)</span> to find <span class="chem">a</span>.
        "把二次函數寫成因式分解式 <span class=\"chem\">y = a(x + 3)(x - 7)</span>，並代入 <span class=\"chem\">(0, -42)</span> 求 <span class=\"chem\">a</span>。",
        // EN: The axis of symmetry is halfway between the roots at <span class="chem">x = (-3 + 7)/2 = 2</span>. Evaluate <span class="chem">y(2)</span>.
        "對稱軸位於兩根正中 <span class=\"chem\">x = (-3 + 7)/2 = 2</span>。計算 <span class=\"chem\">y(2)</span>。",
      ],
      // EN: <p>Using factored form <span class="chem">y = a(x + 3)(x - 7)</span>, substituting <span class="chem">(0, -42)</span> gives <span class="chem">-42 = a(3)(-7) = -21a => a = 2</span>. The axis of symmetry is <span class="chem">x = (-3 + 7)/2 = 2</span>, so the vertex <span class="chem">y</span>-coordinate is <span class="chem">y(2) = 2(2 + 3)(2 - 7) = 2(5)(-5) = -50</span>.</p>
      solution: "<p>利用因式分解式 <span class=\"chem\">y = a(x + 3)(x - 7)</span>，代入 <span class=\"chem\">(0, -42)</span> 得 <span class=\"chem\">-42 = a(3)(-7) = -21a => a = 2</span>。對稱軸為 <span class=\"chem\">x = (-3 + 7)/2 = 2</span>，故頂點的 <span class=\"chem\">y</span> 坐標為 <span class=\"chem\">y(2) = 2(2 + 3)(2 - 7) = 2(5)(-5) = -50</span>。</p>",
    },

    // ── t2-2-q003 · mcq · foundation · SL · SL 2.7 · 2 marks
    "t2-2-q003": {
      // EN: <p>Solve the quadratic inequality <span class="chem">2x^2 + 3x - 9 &gt;= 0</span>.</p>
      stem: "<p>解 (Solve) 二次不等式 <span class=\"chem\">2x^2 + 3x - 9 &gt;= 0</span>。</p>",
      options: [
        // EN: <span class="chem">x &lt;= -3</span> or <span class="chem">x &gt;= 1.5</span>
        "<span class=\"chem\">x &lt;= -3</span> 或 <span class=\"chem\">x &gt;= 1.5</span>",
        // EN: <span class="chem">-3 &lt;= x &lt;= 1.5</span>
        "<span class=\"chem\">-3 &lt;= x &lt;= 1.5</span>",
        // EN: <span class="chem">x &lt;= -1.5</span> or <span class="chem">x &gt;= 3</span>
        "<span class=\"chem\">x &lt;= -1.5</span> 或 <span class=\"chem\">x &gt;= 3</span>",
        // EN: <span class="chem">x &gt;= 1.5</span>
        "<span class=\"chem\">x &gt;= 1.5</span>",
      ],
      hints: [
        // EN: Factor <span class="chem">2x^2 + 3x - 9 = (2x - 3)(x + 3)</span> to find the roots <span class="chem">x = -3</span> and <span class="chem">x = 1.5</span>.
        "因式分解 <span class=\"chem\">2x^2 + 3x - 9 = (2x - 3)(x + 3)</span> 得根 <span class=\"chem\">x = -3</span> 與 <span class=\"chem\">x = 1.5</span>。",
        // EN: Sketch the upward-opening parabola and identify where it lies on or above the <span class="chem">x</span>-axis.
        "描繪開口向上的拋物線略圖，找出曲線位於 <span class=\"chem\">x</span> 軸上或其上方的區間。",
      ],
      // EN: <p>Factoring gives <span class="chem">(2x - 3)(x + 3) &gt;= 0</span>, with roots at <span class="chem">x = -3</span> and <span class="chem">x = 1.5</span>. Since the leading coefficient is positive (<span class="chem">a = 2 &gt; 0</span>), the parabola opens upwards and is <span class="chem">&gt;= 0</span> outside the roots: <span class="chem">x &lt;= -3</span> or <span class="chem">x &gt;= 1.5</span>.</p>
      solution: "<p>因式分解得 <span class=\"chem\">(2x - 3)(x + 3) &gt;= 0</span>，根為 <span class=\"chem\">x = -3</span> 及 <span class=\"chem\">x = 1.5</span>。由於首項係數為正（<span class=\"chem\">a = 2 &gt; 0</span>），拋物線開口向上，在兩根之外 <span class=\"chem\">&gt;= 0</span>：<span class=\"chem\">x &lt;= -3</span> 或 <span class=\"chem\">x &gt;= 1.5</span>。</p>",
      misconception: {
        // EN (option B): Because a = 2 > 0, the parabola opens upwards, so 2x² + 3x − 9 is ≥ 0 OUTSIDE the roots, not between them.
        "1": "因為 a = 2 > 0，拋物線開口向上，因此 2x² + 3x − 9 ≥ 0 發生在兩根之外，而非兩根之間。",
        // EN (option C): You flipped the signs of the roots when factoring (2x − 3)(x + 3) = 0; the roots are x = 1.5 and x = −3.
        "2": "因式分解 (2x − 3)(x + 3) = 0 時弄反了根的正負號；根應為 x = 1.5 及 x = −3。",
        // EN (option D): You forgot the left branch x ≤ −3 where the parabola also rises above the x-axis.
        "3": "你漏掉了左邊分支 x ≤ −3（該處拋物線同樣高於 x 軸）。",
      },
    },

    // ── t2-2-q004 · numeric · exam · SL · SL 2.7 · 4 marks
    "t2-2-q004": {
      // EN: <p>The line <span class="chem">y = 2x + k</span> is a tangent to the parabola <span class="chem">y = x^2 - 4x + 7</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>直線 <span class=\"chem\">y = 2x + k</span> 與拋物線 <span class=\"chem\">y = x^2 - 4x + 7</span> 相切。求 (Find) <span class=\"chem\">k</span> 的準確值。</p>",
      hints: [
        // EN: Equate <span class="chem">x^2 - 4x + 7 = 2x + k</span> and move all terms to the left: <span class="chem">x^2 - 6x + (7 - k) = 0</span>.
        "令 <span class=\"chem\">x^2 - 4x + 7 = 2x + k</span> 並把所有項移至左方：<span class=\"chem\">x^2 - 6x + (7 - k) = 0</span>。",
        // EN: A tangent line touches the parabola at a single repeated root, so set <span class="chem">Delta = (-6)^2 - 4(1)(7 - k) = 0</span>.
        "切線與拋物線在單一重根相觸，故設 <span class=\"chem\">Delta = (-6)^2 - 4(1)(7 - k) = 0</span>。",
      ],
      // EN: <p>Setting <span class="chem">x^2 - 4x + 7 = 2x + k</span> gives <span class="chem">x^2 - 6x + (7 - k) = 0</span>. Since the line is tangent to the parabola, <span class="chem">Delta = 0</span>: <span class="chem">(-6)^2 - 4(1)(7 - k) = 0 => 36 - 28 + 4k = 0 => 4k = -8 => k = -2</span>.</p>
      solution: "<p>令 <span class=\"chem\">x^2 - 4x + 7 = 2x + k</span> 得 <span class=\"chem\">x^2 - 6x + (7 - k) = 0</span>。因為直線與拋物線相切，故 <span class=\"chem\">Delta = 0</span>：<span class=\"chem\">(-6)^2 - 4(1)(7 - k) = 0 => 36 - 28 + 4k = 0 => 4k = -8 => k = -2</span>。</p>",
    },

    // ── t2-2-q005 · mcq · exam · SL · SL 2.7 · 2 marks
    "t2-2-q005": {
      // EN: <p>Find the set of values of <span class="chem">k</span> for which the quadratic expression <span class="chem">kx^2 + 6x + k</span> is <strong>strictly positive</strong> (<span class="chem">&gt; 0</span>) for all real values of <span class="chem">x</span>.</p>
      stem: "<p>求 (Find) 使二次表式 <span class=\"chem\">kx^2 + 6x + k</span> 對所有實數 <span class=\"chem\">x</span> 皆<strong>嚴格為正</strong>（<span class=\"chem\">&gt; 0</span>）的 <span class=\"chem\">k</span> 值範圍。</p>",
      options: [
        // EN: <span class="chem">k &gt; 3</span>
        "<span class=\"chem\">k &gt; 3</span>",
        // EN: <span class="chem">k &lt; -3</span> or <span class="chem">k &gt; 3</span>
        "<span class=\"chem\">k &lt; -3</span> 或 <span class=\"chem\">k &gt; 3</span>",
        // EN: <span class="chem">-3 &lt; k &lt; 3</span>
        "<span class=\"chem\">-3 &lt; k &lt; 3</span>",
        // EN: <span class="chem">k &gt;= 3</span>
        "<span class=\"chem\">k &gt;= 3</span>",
      ],
      hints: [
        // EN: For a quadratic to be strictly positive (<span class="chem">&gt; 0</span>) for all <span class="chem">x ∈ ℝ</span>, two conditions must hold simultaneously: <span class="chem">a &gt; 0</span> (opens upwards) AND <span class="chem">Delta &lt; 0</span> (never touches the <span class="chem">x</span>-axis).
        "要使二次式對所有 <span class=\"chem\">x ∈ ℝ</span> 嚴格大於零（<span class=\"chem\">&gt; 0</span>），必須同時滿足兩個條件：<span class=\"chem\">a &gt; 0</span>（開口向上）及 <span class=\"chem\">Delta &lt; 0</span>（永不觸及 <span class=\"chem\">x</span> 軸）。",
        // EN: Solve <span class="chem">6^2 - 4(k)(k) &lt; 0</span> and intersect with <span class="chem">k &gt; 0</span>.
        "解 <span class=\"chem\">6^2 - 4(k)(k) &lt; 0</span> 並與 <span class=\"chem\">k &gt; 0</span> 取交集。",
      ],
      // EN: <p>We need the parabola to open upwards (<span class="chem">k &gt; 0</span>) and never touch the <span class="chem">x</span>-axis (<span class="chem">Delta &lt; 0</span>). Here <span class="chem">Delta = 36 - 4k^2 &lt; 0 => k^2 &gt; 9 => k &lt; -3</span> or <span class="chem">k &gt; 3</span>. Intersecting with <span class="chem">k &gt; 0</span> leaves <span class="chem">k &gt; 3</span>.</p>
      solution: "<p>我們需要拋物線開口向上（<span class=\"chem\">k &gt; 0</span>）且永不觸及 <span class=\"chem\">x</span> 軸（<span class=\"chem\">Delta &lt; 0</span>）。此處 <span class=\"chem\">Delta = 36 - 4k^2 &lt; 0 => k^2 &gt; 9 => k &lt; -3</span> 或 <span class=\"chem\">k &gt; 3</span>。與 <span class=\"chem\">k &gt; 0</span> 取交集得 <span class=\"chem\">k &gt; 3</span>。</p>",
      misconception: {
        // EN (option B): Δ < 0 gives k² > 9 (k < −3 or k > 3), but for k < −3 the parabola opens downwards and is always NEGATIVE, not always positive! You must also require a = k > 0.
        "1": "Δ < 0 給出 k² > 9（k < −3 或 k > 3），但當 k < −3 時拋物線開口向下而恒為負，而非恒為正！你必須同時要求 a = k > 0。",
        // EN (option C): You solved Δ > 0 (two real roots) instead of Δ < 0 (no real roots).
        "2": "你解了 Δ > 0（兩個實根），而非 Δ < 0（無實根）。",
        // EN (option D): If k = 3, then 3x² + 6x + 3 = 3(x + 1)² equals 0 at x = −1, violating strictly positive (> 0).
        "3": "若 k = 3，則 3x² + 6x + 3 = 3(x + 1)² 在 x = −1 處等於 0，違反嚴格大於零 (> 0)。",
      },
    },

    // ── t2-2-q006 · mcq · foundation · SL · SL 2.8 · 2 marks
    "t2-2-q006": {
      // EN: <p>What are the equations of the vertical and horizontal asymptotes of the rational function <span class="chem">f(x) = (6 - 2x)/(x + 4)</span>?</p>
      stem: "<p>有理函數 <span class=\"chem\">f(x) = (6 - 2x)/(x + 4)</span> 的垂直漸近線與水平漸近線方程是甚麼？</p>",
      options: [
        // EN: Vertical asymptote: <span class="chem">x = -4</span>; Horizontal asymptote: <span class="chem">y = -2</span>
        "垂直漸近線：<span class=\"chem\">x = -4</span>；水平漸近線：<span class=\"chem\">y = -2</span>",
        // EN: Vertical asymptote: <span class="chem">x = -4</span>; Horizontal asymptote: <span class="chem">y = 6</span>
        "垂直漸近線：<span class=\"chem\">x = -4</span>；水平漸近線：<span class=\"chem\">y = 6</span>",
        // EN: Vertical asymptote: <span class="chem">x = 4</span>; Horizontal asymptote: <span class="chem">y = -2</span>
        "垂直漸近線：<span class=\"chem\">x = 4</span>；水平漸近線：<span class=\"chem\">y = -2</span>",
        // EN: Vertical asymptote: <span class="chem">x = 3</span>; Horizontal asymptote: <span class="chem">y = -4</span>
        "垂直漸近線：<span class=\"chem\">x = 3</span>；水平漸近線：<span class=\"chem\">y = -4</span>",
      ],
      hints: [
        // EN: Write the numerator in standard descending order <span class="chem">f(x) = (-2x + 6)/(x + 4)</span> so you do not misread <span class="chem">a</span>!
        "把分子按降冪順序寫成 <span class=\"chem\">f(x) = (-2x + 6)/(x + 4)</span>，以免讀錯 <span class=\"chem\">a</span>！",
      ],
      // EN: <p>Rewriting <span class="chem">f(x) = (-2x + 6)/(x + 4)</span>: the denominator is zero when <span class="chem">x + 4 = 0 => x = -4</span> (vertical asymptote), and the ratio of <span class="chem">x</span>-coefficients is <span class="chem">-2/1 = -2 => y = -2</span> (horizontal asymptote).</p>
      solution: "<p>改寫為 <span class=\"chem\">f(x) = (-2x + 6)/(x + 4)</span>：當 <span class=\"chem\">x + 4 = 0 => x = -4</span> 時分母為零（垂直漸近線），而 <span class=\"chem\">x</span> 係數之比為 <span class=\"chem\">-2/1 = -2 => y = -2</span>（水平漸近線）。</p>",
      misconception: {
        // EN (option B): Watch the order of terms in the numerator 6 − 2x = −2x + 6! The leading x-coefficient is −2 (not 6), so y = −2/1 = −2.
        "1": "留意分子中各項的順序 6 − 2x = −2x + 6！x 的首項係數是 −2（不是 6），故 y = −2/1 = −2。",
        // EN (option C): Setting the denominator x + 4 = 0 gives x = −4, not x = +4.
        "2": "令分母 x + 4 = 0 得 x = −4，而非 x = +4。",
        // EN (option D): Setting the numerator 6 − 2x = 0 gives the x-intercept x = 3, not the vertical asymptote.
        "3": "令分子 6 − 2x = 0 得出的是 x 軸截距 x = 3，而非垂直漸近線。",
      },
    },

    // ── t2-2-q007 · numeric · exam · SL · SL 2.8 · 3 marks
    "t2-2-q007": {
      // EN: <p>When the rational function <span class="chem">f(x) = (4x - 3)/(x + 2)</span> is written in the form <span class="chem">A + B/(x + 2)</span>, find the value of <span class="chem">B</span>.</p>
      stem: "<p>當有理函數 <span class=\"chem\">f(x) = (4x - 3)/(x + 2)</span> 寫成 <span class=\"chem\">A + B/(x + 2)</span> 的形式時，求 (find) <span class=\"chem\">B</span> 的值。</p>",
      hints: [
        // EN: Write <span class="chem">4x - 3 = 4(x + 2) + B</span> and equate constants on both sides.
        "寫出 <span class=\"chem\">4x - 3 = 4(x + 2) + B</span> 並比較兩邊的常數項。",
      ],
      // EN: <p>Write the numerator in terms of <span class="chem">(x + 2)</span>: <span class="chem">4x - 3 = 4(x + 2) - 8 - 3 = 4(x + 2) - 11</span>. Dividing by <span class="chem">(x + 2)</span> gives <span class="chem">f(x) = 4 + (-11)/(x + 2)</span>, so <span class="chem">B = -11</span>.</p>
      solution: "<p>以 <span class=\"chem\">(x + 2)</span> 改寫分子：<span class=\"chem\">4x - 3 = 4(x + 2) - 8 - 3 = 4(x + 2) - 11</span>。除以 <span class=\"chem\">(x + 2)</span> 得 <span class=\"chem\">f(x) = 4 + (-11)/(x + 2)</span>，故 <span class=\"chem\">B = -11</span>。</p>",
    },

    // ── t2-2-q008 · multi · exam · SL · SL 2.9 · 3 marks
    "t2-2-q008": {
      // EN: <p>Consider the logarithmic function <span class="chem">f(x) = 2 ln(x - 3) + 4</span>. Which of the following statements about the graph of <span class="chem">f</span> are correct?</p>
      stem: "<p>考慮對數函數 <span class=\"chem\">f(x) = 2 ln(x - 3) + 4</span>。關於 <span class=\"chem\">f</span> 的圖像，下列哪些陳述是正確的？</p>",
      options: [
        // EN: The graph has a vertical asymptote with equation <span class="chem">x = 3</span>.
        "圖像有一條方程為 <span class=\"chem\">x = 3</span> 的垂直漸近線。",
        // EN: The domain of <span class="chem">f</span> is <span class="chem">x &gt; 3</span> and the range is <span class="chem">y ∈ ℝ</span>.
        "<span class=\"chem\">f</span> 的定義域為 <span class=\"chem\">x &gt; 3</span>，值域為 <span class=\"chem\">y ∈ ℝ</span>。",
        // EN: The graph passes through the point <span class="chem">(4, 4)</span>.
        "圖像通過點 <span class=\"chem\">(4, 4)</span>。",
        // EN: The graph has a horizontal asymptote with equation <span class="chem">y = 4</span>.
        "圖像有一條方程為 <span class=\"chem\">y = 4</span> 的水平漸近線。",
      ],
      hints: [
        // EN: Check the log domain requirement <span class="chem">x - 3 &gt; 0</span>, evaluate <span class="chem">f(4)</span> using <span class="chem">ln(1) = 0</span>, and recall whether log graphs have horizontal or vertical asymptotes.
        "檢查對數定義域條件 <span class=\"chem\">x - 3 &gt; 0</span>，利用 <span class=\"chem\">ln(1) = 0</span> 計算 <span class=\"chem\">f(4)</span>，並回想對數圖像擁有的是水平漸近線還是垂直漸近線。",
      ],
      // EN: <p>Since <span class="chem">ln(u)</span> requires <span class="chem">u &gt; 0</span>, the domain is <span class="chem">x &gt; 3</span> with vertical asymptote <span class="chem">x = 3</span>, and the range of any logarithm is all real numbers <span class="chem">ℝ</span> (no horizontal asymptote). At <span class="chem">x = 4</span>, <span class="chem">f(4) = 2 ln(1) + 4 = 0 + 4 = 4</span>.</p>
      solution: "<p>由於 <span class=\"chem\">ln(u)</span> 要求 <span class=\"chem\">u &gt; 0</span>，故定義域為 <span class=\"chem\">x &gt; 3</span> 且有垂直漸近線 <span class=\"chem\">x = 3</span>；而任何對數函數的值域皆為全體實數 <span class=\"chem\">ℝ</span>（沒有水平漸近線）。當 <span class=\"chem\">x = 4</span> 時，<span class=\"chem\">f(4) = 2 ln(1) + 4 = 0 + 4 = 4</span>。</p>",
      misconception: {
        // EN (option D): Exponential functions have a horizontal asymptote, whereas logarithmic functions grow without bound as x → ∞ and have a VERTICAL asymptote (x = 3), not a horizontal one.
        "3": "指數函數有水平漸近線，而對數函數當 x → ∞ 時無界增長，並擁有垂直漸近線 (x = 3)，而非水平漸近線。",
      },
    },

    // ── t2-2-q009 · order · foundation · SL · SL 2.7 · 3 marks
    "t2-2-q009": {
      // EN: <p>Place the following steps in the correct logical order to find the values of <span class="chem">m</span> for which the line <span class="chem">y = mx - 2</span> is tangent to the parabola <span class="chem">y = 2x^2 + 3x</span>.</p>
      stem: "<p>把下列步驟按正確邏輯順序排列，以求使直線 <span class=\"chem\">y = mx - 2</span> 與拋物線 <span class=\"chem\">y = 2x^2 + 3x</span> 相切的 <span class=\"chem\">m</span> 值。</p>",
      options: [
        // EN: Equate the two equations: <span class="chem">2x^2 + 3x = mx - 2</span>.
        "令兩條方程相等：<span class=\"chem\">2x^2 + 3x = mx - 2</span>。",
        // EN: Rearrange into standard quadratic form <span class="chem">Ax^2 + Bx + C = 0</span>: <span class="chem">2x^2 + (3 - m)x + 2 = 0</span>.
        "整理為標準二次方程 <span class=\"chem\">Ax^2 + Bx + C = 0</span>：<span class=\"chem\">2x^2 + (3 - m)x + 2 = 0</span>。",
        // EN: Set the discriminant <span class="chem">Delta = B^2 - 4AC = 0</span> for tangency: <span class="chem">(3 - m)^2 - 4(2)(2) = 0</span>.
        "因相切而設判別式 <span class=\"chem\">Delta = B^2 - 4AC = 0</span>：<span class=\"chem\">(3 - m)^2 - 4(2)(2) = 0</span>。",
        // EN: Solve <span class="chem">(3 - m)^2 = 16</span> to obtain <span class="chem">3 - m = +-4</span>, giving <span class="chem">m = -1</span> or <span class="chem">m = 7</span>.
        "解 <span class=\"chem\">(3 - m)^2 = 16</span> 得 <span class=\"chem\">3 - m = +-4</span>，即 <span class=\"chem\">m = -1</span> 或 <span class=\"chem\">m = 7</span>。",
      ],
      hints: [
        // EN: First equate <span class="chem">y</span>-values, group like powers of <span class="chem">x</span> to identify <span class="chem">A, B, C</span>, apply <span class="chem">Delta = 0</span>, and solve for <span class="chem">m</span>.
        "先令兩者的 <span class=\"chem\">y</span> 值相等，合併 <span class=\"chem\">x</span> 的同類項以辨識 <span class=\"chem\">A, B, C</span>，應用 <span class=\"chem\">Delta = 0</span>，再解出 <span class=\"chem\">m</span>。",
      ],
      // EN: <p>Equating <span class="chem">2x^2 + 3x = mx - 2</span> and rearranging to <span class="chem">2x^2 + (3 - m)x + 2 = 0</span> identifies <span class="chem">A = 2, B = 3 - m, C = 2</span>. Tangency requires <span class="chem">Delta = (3 - m)^2 - 16 = 0 => m = -1</span> or <span class="chem">m = 7</span>.</p>
      solution: "<p>令 <span class=\"chem\">2x^2 + 3x = mx - 2</span> 並整理為 <span class=\"chem\">2x^2 + (3 - m)x + 2 = 0</span>，可得 <span class=\"chem\">A = 2, B = 3 - m, C = 2</span>。相切要求 <span class=\"chem\">Delta = (3 - m)^2 - 16 = 0 => m = -1</span> 或 <span class=\"chem\">m = 7</span>。</p>",
    },

    // ── t2-2-q010 · numeric · exam · SL · SL 2.9 · 3 marks
    "t2-2-q010": {
      // EN: <p>A population of bacteria is modelled by <span class="chem">P(t) = 450 e^{0.18t}</span>, where <span class="chem">t</span> is the time in hours after observation begins. Find the time <span class="chem">t</span> when the population reaches <span class="chem">1800</span>, giving your answer in hours correct to 3 significant figures.</p>
      stem: "<p>細菌的數量以 <span class=\"chem\">P(t) = 450 e^{0.18t}</span> 模擬，其中 <span class=\"chem\">t</span> 為開始觀察後的小時數。求 (Find) 數量達到 <span class=\"chem\">1800</span> 所需的時間 <span class=\"chem\">t</span>，答案以小時為單位並準確至 3 位有效數字。</p>",
      hints: [
        // EN: Divide both sides of <span class="chem">450 e^{0.18t} = 1800</span> by <span class="chem">450</span> first to get <span class="chem">e^{0.18t} = 4</span>.
        "先把 <span class=\"chem\">450 e^{0.18t} = 1800</span> 兩邊同除以 <span class=\"chem\">450</span> 得 <span class=\"chem\">e^{0.18t} = 4</span>。",
        // EN: Take the natural logarithm: <span class="chem">t = (ln 4) / 0.18</span>.
        "取自然對數：<span class=\"chem\">t = (ln 4) / 0.18</span>。",
      ],
      // EN: <p>Setting <span class="chem">450 e^{0.18t} = 1800</span> gives <span class="chem">e^{0.18t} = 4 => 0.18t = ln 4 => t = (ln 4)/0.18 ≈ 7.7016 = 7.70</span> hours (3 s.f.).</p>
      solution: "<p>令 <span class=\"chem\">450 e^{0.18t} = 1800</span> 得 <span class=\"chem\">e^{0.18t} = 4 => 0.18t = ln 4 => t = (ln 4)/0.18 ≈ 7.7016 = 7.70</span> 小時（3 位有效數字）。</p>",
    },

    // ── t2-2-q011 · numeric · exam · SL · SL 2.10 · 3 marks
    "t2-2-q011": {
      // EN: <p>Using a GDC, find the solution to the equation <span class="chem">ln(x + 2) = 4 - x</span>, giving your answer correct to 3 significant figures.</p>
      stem: "<p>使用 GDC，求 (find) 方程 <span class=\"chem\">ln(x + 2) = 4 - x</span> 的解，答案須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Graph <span class="chem">Y_1 = ln(x + 2)</span> and <span class="chem">Y_2 = 4 - x</span> (or find the zero of <span class="chem">ln(x + 2) + x - 4</span>).
        "在 GDC 上繪出 <span class=\"chem\">Y_1 = ln(x + 2)</span> 與 <span class=\"chem\">Y_2 = 4 - x</span>（或求 <span class=\"chem\">ln(x + 2) + x - 4</span> 的零點）。",
        // EN: Use the intersect tool (or the zero tool on <span class="chem">ln(x + 2) + x - 4</span>); you should find <span class="chem">x ≈ 2.497</span>. Check: <span class="chem">ln(4.497) ≈ 1.503</span> and <span class="chem">4 - 2.497 = 1.503</span>.
        "使用求交點功能（或對 <span class=\"chem\">ln(x + 2) + x - 4</span> 使用求零點功能），應得 <span class=\"chem\">x ≈ 2.497</span>。驗算：<span class=\"chem\">ln(4.497) ≈ 1.503</span> 而 <span class=\"chem\">4 - 2.497 = 1.503</span>。",
      ],
      // EN: <p>Graphing <span class="chem">Y_1 = ln(x + 2)</span> and <span class="chem">Y_2 = 4 - x</span> gives a single intersection at <span class="chem">(2.4967, 1.5033)</span>, so <span class="chem">x = 2.50</span> (3 s.f.). There is only one solution because <span class="chem">ln(x + 2)</span> is increasing and <span class="chem">4 - x</span> is decreasing.</p>
      solution: "<p>繪出 <span class=\"chem\">Y_1 = ln(x + 2)</span> 與 <span class=\"chem\">Y_2 = 4 - x</span>，兩者只有一個交點 <span class=\"chem\">(2.4967, 1.5033)</span>，所以 <span class=\"chem\">x = 2.50</span>（3 位有效數字）。由於 <span class=\"chem\">ln(x + 2)</span> 遞增而 <span class=\"chem\">4 - x</span> 遞減，方程只有一個解。</p>",
    },

    // ── t2-2-q012 · mcq · exam · SL · SL 2.8 · 2 marks
    "t2-2-q012": {
      // EN: <p>The graph of the rational function <span class="chem">f(x) = (ax + b)/(x + c)</span> has a vertical asymptote <span class="chem">x = 2</span>, a horizontal asymptote <span class="chem">y = -3</span>, and passes through the origin <span class="chem">(0, 0)</span>. What are the values of <span class="chem">a, b, c</span>?</p>
      stem: "<p>有理函數 <span class=\"chem\">f(x) = (ax + b)/(x + c)</span> 的圖像有一條垂直漸近線 <span class=\"chem\">x = 2</span>、一條水平漸近線 <span class=\"chem\">y = -3</span>，並通過原點 <span class=\"chem\">(0, 0)</span>。<span class=\"chem\">a, b, c</span> 的值分別是多少？</p>",
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
        "利用垂直漸近線 <span class=\"chem\">x = -c = 2</span> 求 <span class=\"chem\">c</span>，利用水平漸近線 <span class=\"chem\">y = a/1 = -3</span> 求 <span class=\"chem\">a</span>，並利用 <span class=\"chem\">f(0) = 0</span> 求 <span class=\"chem\">b</span>。",
      ],
      // EN: <p>The vertical asymptote <span class="chem">x = 2</span> requires <span class="chem">2 + c = 0 => c = -2</span>. The horizontal asymptote <span class="chem">y = -3</span> gives <span class="chem">a/1 = -3 => a = -3</span>. Passing through <span class="chem">(0, 0)</span> gives <span class="chem">f(0) = b/(-2) = 0 => b = 0</span>.</p>
      solution: "<p>垂直漸近線 <span class=\"chem\">x = 2</span> 要求 <span class=\"chem\">2 + c = 0 => c = -2</span>。水平漸近線 <span class=\"chem\">y = -3</span> 給出 <span class=\"chem\">a/1 = -3 => a = -3</span>。通過 <span class=\"chem\">(0, 0)</span> 給出 <span class=\"chem\">f(0) = b/(-2) = 0 => b = 0</span>。</p>",
      misconception: {
        // EN (option B): A vertical asymptote at x = 2 means the denominator x + c is zero when x = 2, so 2 + c = 0 ⇒ c = −2, not +2.
        "1": "垂直漸近線在 x = 2 意味着當 x = 2 時分母 x + c 為零，故 2 + c = 0 ⇒ c = −2，而非 +2。",
        // EN (option C): You swapped the horizontal asymptote y = a and the vertical asymptote x = −c.
        "2": "你把水平漸近線 y = a 與垂直漸近線 x = −c 對調了。",
        // EN (option D): Since the graph passes through (0, 0), f(0) = b/c = 0 ⇒ b = 0.
        "3": "因為圖像通過 (0, 0)，所以 f(0) = b/c = 0 ⇒ b = 0。",
      },
    },

    // ── t2-2-q013 · short · exam · SL · SL 2.7 · 6 marks
    "t2-2-q013": {
      // EN: <p>Let <span class="chem">f(x) = x^2 + (k + 1)x + 2k + 2</span>, where <span class="chem">k ∈ ℝ</span>.<br>(a) Show that the discriminant of <span class="chem">f(x)</span> can be written as <span class="chem">Delta = (k + 1)(k - 7)</span>. <strong>[3 marks]</strong><br>(b) Hence find the set of values of <span class="chem">k</span> for which the equation <span class="chem">f(x) = 0</span> has two distinct real roots. <strong>[3 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = x^2 + (k + 1)x + 2k + 2</span>，其中 <span class=\"chem\">k ∈ ℝ</span>。<br>(a) 證明 (Show that) <span class=\"chem\">f(x)</span> 的判別式可寫成 <span class=\"chem\">Delta = (k + 1)(k - 7)</span>。<strong>[3 marks]</strong><br>(b) 由此求 (Hence find) 使方程 <span class=\"chem\">f(x) = 0</span> 有兩個相異實根的 <span class=\"chem\">k</span> 值範圍。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: In part (a), notice that <span class="chem">2k + 2 = 2(k + 1)</span>, so you can factor <span class="chem">(k + 1)</span> out of <span class="chem">(k + 1)^2 - 8(k + 1)</span> in one step!
        "在 (a) 部中，留意 <span class=\"chem\">2k + 2 = 2(k + 1)</span>，因此一步即可從 <span class=\"chem\">(k + 1)^2 - 8(k + 1)</span> 中抽出公因式 <span class=\"chem\">(k + 1)</span>！",
        // EN: In part (b), sketch the upward-opening parabola <span class="chem">y = (k + 1)(k - 7)</span> to see where <span class="chem">Delta &gt; 0</span>.
        "在 (b) 部中，描繪開口向上的拋物線 <span class=\"chem\">y = (k + 1)(k - 7)</span> 略圖，找出 <span class=\"chem\">Delta &gt; 0</span> 的區間。",
      ],
      // EN: <p>(a) <span class="chem">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)^2 - 8(k + 1) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>.<br>(b) For two distinct real roots, <span class="chem">Delta &gt; 0 => (k + 1)(k - 7) &gt; 0</span>. Since the quadratic in <span class="chem">k</span> opens upwards with roots at <span class="chem">k = -1</span> and <span class="chem">k = 7</span>, we have <span class="chem">k &lt; -1</span> or <span class="chem">k &gt; 7</span>.</p>
      solution: "<p>(a) <span class=\"chem\">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)^2 - 8(k + 1) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>。<br>(b) 兩個相異實根要求 <span class=\"chem\">Delta &gt; 0 => (k + 1)(k - 7) &gt; 0</span>。由於關於 <span class=\"chem\">k</span> 的二次式開口向上，兩根為 <span class=\"chem\">k = -1</span> 與 <span class=\"chem\">k = 7</span>，故得 <span class=\"chem\">k &lt; -1</span> 或 <span class=\"chem\">k &gt; 7</span>。</p>",
      // EN: <p>(a) <span class="chem">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>; (b) <span class="chem">k &lt; -1</span> or <span class="chem">k &gt; 7</span>.</p>
      answer: "<p>(a) <span class=\"chem\">Delta = (k + 1)^2 - 4(1)(2k + 2) = (k + 1)[(k + 1) - 8] = (k + 1)(k - 7)</span>；(b) <span class=\"chem\">k &lt; -1</span> 或 <span class=\"chem\">k &gt; 7</span>。</p>",
      markscheme: [
        // EN: M1: Substitutes a = 1, b = k + 1, c = 2k + 2 into Δ = b² − 4ac to get Δ = (k + 1)² − 4(2k + 2).
        "M1：把 a = 1, b = k + 1, c = 2k + 2 代入 Δ = b² − 4ac 得 Δ = (k + 1)² − 4(2k + 2)。",
        // EN: M1: Expands to k² + 2k + 1 − 8k − 8 (or writes 4(2k + 2) as 8(k + 1) to give (k + 1)² − 8(k + 1)).
        "M1：展開為 k² + 2k + 1 − 8k − 8（或把 4(2k + 2) 寫成 8(k + 1)，得 (k + 1)² − 8(k + 1)）。",
        // EN: A1: Obtains k² − 6k − 7 (or (k + 1)[(k + 1) − 8]). AG: Δ = (k + 1)(k − 7) follows; the given line itself earns no mark.
        "A1：得出 k² − 6k − 7（或 (k + 1)[(k + 1) − 8]）。AG：由此得 Δ = (k + 1)(k − 7)；寫出題目已給的結果本身不得分。",
        // EN: M1: Uses the condition Δ > 0 for two distinct real roots: (k + 1)(k − 7) > 0.
        "M1：運用兩個相異實根的條件 Δ > 0：(k + 1)(k − 7) > 0。",
        // EN: A1: Identifies critical values k = −1 and k = 7.
        "A1：找出臨界值 k = −1 及 k = 7。",
        // EN: A1: States the correct outside intervals k < −1 or k > 7 (strict inequalities required).
        "A1：寫出正確的兩側區間 k < −1 或 k > 7（須使用嚴格不等號）。",
      ],
    },

    // ── t2-2-q014 · short · exam · SL · SL 2.9 · 6 marks
    "t2-2-q014": {
      // EN: <p>The mass <span class="chem">M(t)</span> (in milligrams) of a medical tracer in a patient's bloodstream <span class="chem">t</span> hours after injection is modelled by <span class="chem">M(t) = M_0 e^{-kt}</span> for <span class="chem">t &gt;= 0</span>. Initially (<span class="chem">t = 0</span>), <span class="chem">120</span> <span class="unit">mg</span> is injected. After <span class="chem">4</span> hours, <span class="chem">75</span> <span class="unit">mg</span> remains.<br>(a) Find the value of <span class="chem">M_0</span> and show that <span class="chem">k = (1/4) ln(8/5)</span>. <strong>[3 marks]</strong><br>(b) Find the half-life of the tracer (the time taken for the mass to fall to <span class="chem">60</span> <span class="unit">mg</span>), giving your answer in hours to 3 significant figures. <strong>[3 marks]</strong></p>
      stem: "<p>注射醫用示蹤劑 <span class=\"chem\">t</span> 小時後，病人血液內的示蹤劑質量 <span class=\"chem\">M(t)</span>（以毫克為單位）以 <span class=\"chem\">M(t) = M_0 e^{-kt}</span>（<span class=\"chem\">t &gt;= 0</span>）模擬。最初（<span class=\"chem\">t = 0</span>）注射了 <span class=\"chem\">120</span> <span class=\"unit\">mg</span>；經過 <span class=\"chem\">4</span> 小時後，餘下 <span class=\"chem\">75</span> <span class=\"unit\">mg</span>。<br>(a) 求 (Find) <span class=\"chem\">M_0</span> 的值，並證明 (show that) <span class=\"chem\">k = (1/4) ln(8/5)</span>。<strong>[3 marks]</strong><br>(b) 求 (Find) 示蹤劑的半衰期（質量降至 <span class=\"chem\">60</span> <span class=\"unit\">mg</span> 所需的時間），答案以小時為單位並準確至 3 位有效數字。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Simplify the fraction <span class="chem">75 / 120 = 5 / 8</span> and use <span class="chem">-ln(5/8) = ln(8/5)</span>.
        "約簡分數 <span class=\"chem\">75 / 120 = 5 / 8</span> 並運用 <span class=\"chem\">-ln(5/8) = ln(8/5)</span>。",
        // EN: For the half-life, solve <span class="chem">e^{-kt} = 0.5 => t = (ln 2) / k</span>.
        "求半衰期時，解 <span class=\"chem\">e^{-kt} = 0.5 => t = (ln 2) / k</span>。",
      ],
      // EN: <p>(a) At <span class="chem">t = 0</span>, <span class="chem">M(0) = M_0 e^0 = 120 => M_0 = 120</span>. At <span class="chem">t = 4</span>, <span class="chem">120 e^{-4k} = 75 => e^{-4k} = 75/120 = 5/8 => -4k = ln(5/8) = -ln(8/5) => k = (1/4) ln(8/5)</span>.<br>(b) Setting <span class="chem">M(t) = 60</span> gives <span class="chem">e^{-kt} = 1/2 => kt = ln 2 => t = 4 ln 2 / ln(8/5) ≈ 5.899 = 5.90</span> hours (3 s.f.).</p>
      solution: "<p>(a) 當 <span class=\"chem\">t = 0</span> 時，<span class=\"chem\">M(0) = M_0 e^0 = 120 => M_0 = 120</span>。當 <span class=\"chem\">t = 4</span> 時，<span class=\"chem\">120 e^{-4k} = 75 => e^{-4k} = 75/120 = 5/8 => -4k = ln(5/8) = -ln(8/5) => k = (1/4) ln(8/5)</span>。<br>(b) 令 <span class=\"chem\">M(t) = 60</span> 得 <span class=\"chem\">e^{-kt} = 1/2 => kt = ln 2 => t = 4 ln 2 / ln(8/5) ≈ 5.899 = 5.90</span> 小時（3 位有效數字）。</p>",
      // EN: <p>(a) <span class="chem">M_0 = 120</span>; <span class="chem">k = (1/4) ln(8/5) ≈ 0.1175</span>; (b) <span class="chem">5.90</span> hours.</p>
      answer: "<p>(a) <span class=\"chem\">M_0 = 120</span>；<span class=\"chem\">k = (1/4) ln(8/5) ≈ 0.1175</span>；(b) <span class=\"chem\">5.90</span> 小時。</p>",
      markscheme: [
        // EN: A1: States M₀ = 120 from M(0) = 120.
        "A1：由 M(0) = 120 寫出 M₀ = 120。",
        // EN: M1: Substitutes t = 4, M = 75 to write 120 e^(−4k) = 75 ⇒ e^(−4k) = 75/120 = 5/8.
        "M1：代入 t = 4, M = 75 寫出 120 e^(−4k) = 75 ⇒ e^(−4k) = 75/120 = 5/8。",
        // EN: A1: Takes natural logs: −4k = ln(5/8) = −ln(8/5). AG: k = (1/4) ln(8/5); the given line itself earns no mark.
        "A1：取自然對數：−4k = ln(5/8) = −ln(8/5)。AG：k = (1/4) ln(8/5)；寫出題目已給的結果本身不得分。",
        // EN: M1: Sets e^(−kt) = 1/2 (or 120 e^(−kt) = 60).
        "M1：令 e^(−kt) = 1/2（或 120 e^(−kt) = 60）。",
        // EN: M1: Solves t = (ln 2) / k = 4 ln 2 / ln(8/5).
        "M1：解出 t = (ln 2) / k = 4 ln 2 / ln(8/5)。",
        // EN: A1: Evaluates t = 5.899... = 5.90 hours (3 s.f.).
        "A1：計出 t = 5.899... = 5.90 小時（3 位有效數字）。",
      ],
    },

    // ── t2-2-q015 · numeric · exam · SL · SL 1.7 / 2.7 · 4 marks
    "t2-2-q015": {
      // EN: <p>The equation <span class="chem">9^x - 12(3^{x - 1}) + 3 = 0</span> has two real solutions. Solve the equation, and give the <strong>positive</strong> solution <span class="chem">x</span>.</p>
      stem: "<p>方程 <span class=\"chem\">9^x - 12(3^{x - 1}) + 3 = 0</span> 有兩個實數解。解 (Solve) 此方程，並寫出<strong>正</strong>的解 <span class=\"chem\">x</span>。</p>",
      hints: [
        // EN: Rewrite <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span>.
        "把 <span class=\"chem\">9^x = (3^x)^2</span> 及 <span class=\"chem\">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span> 改寫。",
        // EN: Let <span class="chem">u = 3^x</span> to get <span class="chem">u^2 - 4u + 3 = 0</span>, find both values of <span class="chem">u</span>, and solve <span class="chem">3^x = u</span>.
        "設 <span class=\"chem\">u = 3^x</span> 得 <span class=\"chem\">u^2 - 4u + 3 = 0</span>，求出兩個 <span class=\"chem\">u</span> 值，再解 <span class=\"chem\">3^x = u</span>。",
      ],
      // EN: <p>Using exponent laws, <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span>. Letting <span class="chem">u = 3^x</span> gives <span class="chem">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span>, so <span class="chem">u = 1</span> or <span class="chem">u = 3</span>. Since <span class="chem">3^x = 1 => x = 0</span> and <span class="chem">3^x = 3 => x = 1</span>, the solutions are <span class="chem">x = 0</span> and <span class="chem">x = 1</span>, so the positive solution is <span class="chem">x = 1</span>.</p>
      solution: "<p>運用指數定律，<span class=\"chem\">9^x = (3^x)^2</span> 及 <span class=\"chem\">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span>。設 <span class=\"chem\">u = 3^x</span> 得 <span class=\"chem\">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span>，故 <span class=\"chem\">u = 1</span> 或 <span class=\"chem\">u = 3</span>。由於 <span class=\"chem\">3^x = 1 => x = 0</span> 及 <span class=\"chem\">3^x = 3 => x = 1</span>，方程的解為 <span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x = 1</span>，故正的解為 <span class=\"chem\">x = 1</span>。</p>",
    },

    // ── t2-2-q016 · mcq · challenge · SL · SL 2.7 · 2 marks
    "t2-2-q016": {
      // EN: <p>Find the complete set of values of the real parameter <span class="chem">m</span> for which the inequality <span class="chem">(m - 2)x^2 + 2(m - 2)x + 4 &gt; 0</span> holds for <strong>all</strong> <span class="chem">x ∈ ℝ</span>.</p>
      stem: "<p>求 (Find) 使不等式 <span class=\"chem\">(m - 2)x^2 + 2(m - 2)x + 4 &gt; 0</span> 對<strong>所有</strong> <span class=\"chem\">x ∈ ℝ</span> 成立的實參數 <span class=\"chem\">m</span> 之完整取值範圍。</p>",
      options: [
        // EN: <span class="chem">2 &lt;= m &lt; 6</span>
        "<span class=\"chem\">2 &lt;= m &lt; 6</span>",
        // EN: <span class="chem">2 &lt; m &lt; 6</span>
        "<span class=\"chem\">2 &lt; m &lt; 6</span>",
        // EN: <span class="chem">m &lt; 2</span> or <span class="chem">m &gt; 6</span>
        "<span class=\"chem\">m &lt; 2</span> 或 <span class=\"chem\">m &gt; 6</span>",
        // EN: <span class="chem">m &gt; 2</span>
        "<span class=\"chem\">m &gt; 2</span>",
      ],
      hints: [
        // EN: Decode: the coefficient of <span class="chem">x^2</span> contains the parameter, so "for all <span class="chem">x</span>" splits into two situations: the expression is a genuine quadratic (<span class="chem">m != 2</span>), or the <span class="chem">x^2</span> coefficient is zero and it is not a quadratic at all. Both must be checked.
        "解碼：<span class=\"chem\">x^2</span> 的係數含有參數，所以「對所有 <span class=\"chem\">x</span> 成立」要分成兩種情況：式子確實是二次式（<span class=\"chem\">m != 2</span>），或者 <span class=\"chem\">x^2</span> 的係數為零，這時式子根本不是二次式。兩種情況都要檢查。",
        // EN: First check the quadratic case where <span class="chem">a = m - 2 &gt; 0</span> and <span class="chem">Delta &lt; 0</span>.
        "先檢查二次情況，即 <span class=\"chem\">a = m - 2 &gt; 0</span> 且 <span class=\"chem\">Delta &lt; 0</span>。",
        // EN: Then separately test the degenerate case <span class="chem">m = 2</span> where the <span class="chem">x^2</span> and <span class="chem">x</span> terms vanish!
        "然後單獨測試退化情況 <span class=\"chem\">m = 2</span>，此時 <span class=\"chem\">x^2</span> 與 <span class=\"chem\">x</span> 項皆消失！",
      ],
      // EN: <p>Case 1 (<span class="chem">m != 2</span>, quadratic): Require <span class="chem">m - 2 &gt; 0 => m &gt; 2</span> and <span class="chem">Delta = 4(m - 2)^2 - 16(m - 2) = 4(m - 2)(m - 6) &lt; 0 => 2 &lt; m &lt; 6</span>.<br>Case 2 (<span class="chem">m = 2</span>, constant): Substituting <span class="chem">m = 2</span> gives <span class="chem">0x^2 + 0x + 4 &gt; 0 => 4 &gt; 0</span>, which is true for all <span class="chem">x ∈ ℝ</span>! Combining both cases gives <span class="chem">2 &lt;= m &lt; 6</span>.</p>
      solution: "<p>情況 1（<span class=\"chem\">m != 2</span>，二次式）：需要 <span class=\"chem\">m - 2 &gt; 0 => m &gt; 2</span> 及 <span class=\"chem\">Delta = 4(m - 2)^2 - 16(m - 2) = 4(m - 2)(m - 6) &lt; 0 => 2 &lt; m &lt; 6</span>。<br>情況 2（<span class=\"chem\">m = 2</span>，常數）：代入 <span class=\"chem\">m = 2</span> 得 <span class=\"chem\">0x^2 + 0x + 4 &gt; 0 => 4 &gt; 0</span>，對所有 <span class=\"chem\">x ∈ ℝ</span> 成立！合併兩種情況得 <span class=\"chem\">2 &lt;= m &lt; 6</span>。</p>",
      misconception: {
        // EN (option B): You checked the quadratic case m − 2 > 0 and Δ < 0 (giving 2 < m < 6), but forgot to test the degenerate case m = 2! When m = 2, the expression reduces to 4 > 0, which holds for all x ∈ ℝ.
        "1": "你檢查了二次情況 m − 2 > 0 及 Δ < 0（得 2 < m < 6），但忘記測試退化情況 m = 2！當 m = 2 時，原式簡化為 4 > 0，對所有 x ∈ ℝ 成立。",
        // EN (option C): You solved Δ > 0 instead of Δ < 0.
        "2": "你解了 Δ > 0 而非 Δ < 0。",
        // EN (option D): You checked a = m − 2 > 0, but forgot to require Δ < 0.
        "3": "你檢查了 a = m − 2 > 0，但忘記要求 Δ < 0。",
      },
    },

    // ── t2-2-q017 · numeric · exam · SL · SL 1.7 · 4 marks
    "t2-2-q017": {
      // EN: <p>Solve the logarithmic equation <span class="chem">log_2(x - 1) + log_2(x + 2) = 2</span> for <span class="chem">x</span>.</p>
      stem: "<p>解 (Solve) 對數方程 <span class=\"chem\">log_2(x - 1) + log_2(x + 2) = 2</span> 求 <span class=\"chem\">x</span>。</p>",
      hints: [
        // EN: Combine the logs using <span class="chem">log_2((x - 1)(x + 2)) = 2</span>, so <span class="chem">(x - 1)(x + 2) = 2^2 = 4</span>.
        "合併對數為 <span class=\"chem\">log_2((x - 1)(x + 2)) = 2</span>，得 <span class=\"chem\">(x - 1)(x + 2) = 2^2 = 4</span>。",
        // EN: Solve the quadratic and reject any root that violates the domain restriction <span class="chem">x - 1 &gt; 0</span>!
        "解二次方程並捨去任何違反定義域限制 <span class=\"chem\">x - 1 &gt; 0</span> 的根！",
      ],
      // EN: <p>Domain requires <span class="chem">x - 1 &gt; 0</span> and <span class="chem">x + 2 &gt; 0</span>, so <span class="chem">x &gt; 1</span>. Combining the logarithms gives <span class="chem">log_2[(x - 1)(x + 2)] = 2 => (x - 1)(x + 2) = 2^2 = 4 => x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0</span>. Rejecting <span class="chem">x = -3</span> (since <span class="chem">x &gt; 1</span>) leaves the unique valid solution <span class="chem">x = 2</span>.</p>
      solution: "<p>定義域要求 <span class=\"chem\">x - 1 &gt; 0</span> 且 <span class=\"chem\">x + 2 &gt; 0</span>，故 <span class=\"chem\">x &gt; 1</span>。合併對數得 <span class=\"chem\">log_2[(x - 1)(x + 2)] = 2 => (x - 1)(x + 2) = 2^2 = 4 => x^2 + x - 6 = 0 => (x + 3)(x - 2) = 0</span>。捨去 <span class=\"chem\">x = -3</span>（因 <span class=\"chem\">x &gt; 1</span>），剩下唯一有效解 <span class=\"chem\">x = 2</span>。</p>",
    },

    // ── t2-2-q018 · short · challenge · SL · SL 2.8 · 6 marks
    "t2-2-q018": {
      // EN: <p>Let <span class="chem">f(x) = (2x - 1)/(x + 1)</span> for <span class="chem">x != -1</span>, and let <span class="chem">g_k(x) = kx + 2</span>.<br>(a) Show that the <span class="chem">x</span>-coordinates of the points of intersection of the graphs of <span class="chem">f</span> and <span class="chem">g_k</span> satisfy <span class="chem">kx^2 + kx + 3 = 0</span>. <strong>[2 marks]</strong><br>(b) Hence find the non-zero value of <span class="chem">k</span> for which the line <span class="chem">y = kx + 2</span> is tangent to the hyperbola <span class="chem">y = f(x)</span>, and find the coordinates of the point of contact. <strong>[4 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = (2x - 1)/(x + 1)</span>（<span class=\"chem\">x != -1</span>），及 <span class=\"chem\">g_k(x) = kx + 2</span>。<br>(a) 證明 (Show that) <span class=\"chem\">f</span> 與 <span class=\"chem\">g_k</span> 圖像交點的 <span class=\"chem\">x</span> 坐標滿足 <span class=\"chem\">kx^2 + kx + 3 = 0</span>。<strong>[2 marks]</strong><br>(b) 由此求 (Hence find) 使直線 <span class=\"chem\">y = kx + 2</span> 與雙曲線 <span class=\"chem\">y = f(x)</span> 相切的非零 <span class=\"chem\">k</span> 值，並求切點坐標。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: "tangent" means the line meets the curve at exactly one point, so the equation from (a) must have a repeated root (<span class="chem">Delta = 0</span>). "Non-zero" tells you to reject <span class="chem">k = 0</span>, because then the equation is not a quadratic.
        "解碼：「相切」表示直線與曲線只相交於一點，所以 (a) 中的方程必須有重根（<span class=\"chem\">Delta = 0</span>）。「非零」提示你要捨去 <span class=\"chem\">k = 0</span>，因為那時方程不是二次方程。",
        // EN: For part (a), multiply both sides of <span class="chem">(2x - 1)/(x + 1) = kx + 2</span> by <span class="chem">(x + 1)</span> and expand.
        "在 (a) 部中，把 <span class=\"chem\">(2x - 1)/(x + 1) = kx + 2</span> 兩邊同乘 <span class=\"chem\">(x + 1)</span> 並展開。",
        // EN: For part (b), set the discriminant of <span class="chem">kx^2 + kx + 3 = 0</span> equal to zero!
        "在 (b) 部中，令 <span class=\"chem\">kx^2 + kx + 3 = 0</span> 的判別式等於零！",
      ],
      // EN: <p>(a) Setting <span class="chem">(2x - 1)/(x + 1) = kx + 2</span> and multiplying by <span class="chem">x + 1</span> (<span class="chem">x != -1</span>) gives <span class="chem">2x - 1 = kx^2 + kx + 2x + 2 => kx^2 + kx + 3 = 0</span>.<br>(b) For tangency, <span class="chem">Delta = k^2 - 4(k)(3) = k(k - 12) = 0</span>. Since <span class="chem">k != 0</span>, <span class="chem">k = 12</span>. Substituting <span class="chem">k = 12</span> gives <span class="chem">12x^2 + 12x + 3 = 3(2x + 1)^2 = 0 => x = -1/2</span>, and <span class="chem">y = 12(-1/2) + 2 = -4</span>, so the point of contact is <span class="chem">(-1/2, -4)</span>.</p>
      solution: "<p>(a) 令 <span class=\"chem\">(2x - 1)/(x + 1) = kx + 2</span> 並乘以 <span class=\"chem\">x + 1</span>（<span class=\"chem\">x != -1</span>）得 <span class=\"chem\">2x - 1 = kx^2 + kx + 2x + 2 => kx^2 + kx + 3 = 0</span>。<br>(b) 相切時 <span class=\"chem\">Delta = k^2 - 4(k)(3) = k(k - 12) = 0</span>。因為 <span class=\"chem\">k != 0</span>，所以 <span class=\"chem\">k = 12</span>。代入 <span class=\"chem\">k = 12</span> 得 <span class=\"chem\">12x^2 + 12x + 3 = 3(2x + 1)^2 = 0 => x = -1/2</span>，及 <span class=\"chem\">y = 12(-1/2) + 2 = -4</span>，故切點為 <span class=\"chem\">(-1/2, -4)</span>。</p>",
      // EN: <p>(a) <span class="chem">(2x - 1)/(x + 1) = kx + 2 => 2x - 1 = (kx + 2)(x + 1) = kx^2 + (k + 2)x + 2 => kx^2 + kx + 3 = 0</span>; (b) <span class="chem">k = 12</span>, point of contact <span class="chem">(-1/2, -4)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">(2x - 1)/(x + 1) = kx + 2 => 2x - 1 = (kx + 2)(x + 1) = kx^2 + (k + 2)x + 2 => kx^2 + kx + 3 = 0</span>；(b) <span class=\"chem\">k = 12</span>，切點為 <span class=\"chem\">(-1/2, -4)</span>。</p>",
      markscheme: [
        // EN: M1: Equates (2x − 1)/(x + 1) = kx + 2 and multiplies both sides by (x + 1).
        "M1：令 (2x − 1)/(x + 1) = kx + 2 並把兩邊同乘 (x + 1)。",
        // EN: A1: Expands correctly: 2x − 1 = kx² + (k + 2)x + 2. AG: kx² + kx + 3 = 0; the given line itself earns no mark.
        "A1：正確展開：2x − 1 = kx² + (k + 2)x + 2。AG：kx² + kx + 3 = 0；寫出題目已給的結果本身不得分。",
        // EN: M1: Sets discriminant Δ = k² − 4(k)(3) = 0 for tangency.
        "M1：因相切而設判別式 Δ = k² − 4(k)(3) = 0。",
        // EN: A1: Solves k(k − 12) = 0 and selects the non-zero value k = 12.
        "A1：解 k(k − 12) = 0 並選取非零值 k = 12。",
        // EN: M1: Substitutes k = 12 into 12x² + 12x + 3 = 0 ⇒ 3(2x + 1)² = 0 to find x = −1/2.
        "M1：把 k = 12 代入 12x² + 12x + 3 = 0 ⇒ 3(2x + 1)² = 0 求得 x = −1/2。",
        // EN: A1: Evaluates y = 12(−1/2) + 2 = −4 to state the point of contact (−1/2, −4).
        "A1：計出 y = 12(−1/2) + 2 = −4，寫出切點 (−1/2, −4)。",
      ],
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't2-2.q', {
  questions: {

    // ── t2-2-q019 · numeric · foundation · SL · SL 2.6 · 2 marks
    "t2-2-q019": {
      // EN: <p>Let <span class="chem">f(x) = -2x^2 + 12x - 5</span>. Find the maximum value of <span class="chem">f(x)</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = -2x^2 + 12x - 5</span>。求 (Find) <span class=\"chem\">f(x)</span> 的最大值。</p>",
      hints: [
        // EN: The coefficient of <span class="chem">x^2</span> is negative, so the vertex is a maximum. Use the axis of symmetry <span class="chem">x = -b/(2a)</span> from the formula booklet.
        "<span class=\"chem\">x^2</span> 的係數為負，因此頂點是最大點。運用公式手冊中的對稱軸 <span class=\"chem\">x = -b/(2a)</span>。",
        // EN: Here <span class="chem">x = -12/(2 × (-2)) = 3</span>. Now evaluate <span class="chem">f(3)</span>.
        "此處 <span class=\"chem\">x = -12/(2 × (-2)) = 3</span>。接着計算 <span class=\"chem\">f(3)</span>。",
      ],
      // EN: <p>The axis of symmetry is <span class="chem">x = -b/(2a) = -12/(-4) = 3</span>. Since <span class="chem">a = -2 &lt; 0</span>, the vertex is a maximum: <span class="chem">f(3) = -2(9) + 36 - 5 = 13</span>. (Completing the square gives the same result: <span class="chem">f(x) = -2(x - 3)^2 + 13</span>.)</p>
      solution: "<p>對稱軸為 <span class=\"chem\">x = -b/(2a) = -12/(-4) = 3</span>。由於 <span class=\"chem\">a = -2 &lt; 0</span>，頂點是最大點：<span class=\"chem\">f(3) = -2(9) + 36 - 5 = 13</span>。（用配方法亦得相同結果：<span class=\"chem\">f(x) = -2(x - 3)^2 + 13</span>。）</p>",
    },

    // ── t2-2-q020 · mcq · foundation · SL · SL 2.8 · 1 mark
    "t2-2-q020": {
      // EN: <p>Let <span class="chem">f(x) = 1/x</span>, for <span class="chem">x != 0</span>. Which statement is correct?</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 1/x</span>，其中 <span class=\"chem\">x != 0</span>。下列哪項陳述正確？</p>",
      options: [
        // EN: <span class="chem">f^{-1}(x) = 1/x</span>, so <span class="chem">f</span> is self-inverse and its graph is symmetric about the line <span class="chem">y = x</span>.
        "<span class=\"chem\">f^{-1}(x) = 1/x</span>，故 <span class=\"chem\">f</span> 是自反函數，其圖像對稱於直線 <span class=\"chem\">y = x</span>。",
        // EN: <span class="chem">f^{-1}(x) = -1/x</span>, so the graph of <span class="chem">f</span> is symmetric about the line <span class="chem">y = -x</span>.
        "<span class=\"chem\">f^{-1}(x) = -1/x</span>，故 <span class=\"chem\">f</span> 的圖像對稱於直線 <span class=\"chem\">y = -x</span>。",
        // EN: <span class="chem">f</span> has no inverse function, because <span class="chem">f</span> is not defined at <span class="chem">x = 0</span>.
        "<span class=\"chem\">f</span> 沒有反函數，因為 <span class=\"chem\">f</span> 在 <span class=\"chem\">x = 0</span> 時沒有定義。",
        // EN: <span class="chem">f(f(x)) = 1/x^2</span>.
        "<span class=\"chem\">f(f(x)) = 1/x^2</span>.",
      ],
      hints: [
        // EN: Swap <span class="chem">x</span> and <span class="chem">y</span> in <span class="chem">y = 1/x</span> and make <span class="chem">y</span> the subject. What do you get?
        "在 <span class=\"chem\">y = 1/x</span> 中把 <span class=\"chem\">x</span> 與 <span class=\"chem\">y</span> 互換，再以 <span class=\"chem\">y</span> 為主項。你得到甚麼？",
      ],
      // EN: <p>Swapping gives <span class="chem">x = 1/y => y = 1/x</span>, so <span class="chem">f^{-1}(x) = 1/x = f(x)</span>: the reciprocal function is self-inverse, and <span class="chem">f(f(x)) = 1/(1/x) = x</span>. A function and its inverse are reflections in <span class="chem">y = x</span>, so the graph of a self-inverse function is symmetric about <span class="chem">y = x</span>.</p>
      solution: "<p>互換後得 <span class=\"chem\">x = 1/y => y = 1/x</span>，故 <span class=\"chem\">f^{-1}(x) = 1/x = f(x)</span>：倒數函數是自反函數，而且 <span class=\"chem\">f(f(x)) = 1/(1/x) = x</span>。函數與其反函數互為對 <span class=\"chem\">y = x</span> 的反射，因此自反函數的圖像對稱於 <span class=\"chem\">y = x</span>。</p>",
      misconception: {
        // EN (option B): The graph of 1/x is symmetric about y = −x as well, but that is not what makes f its own inverse. Solving x = 1/y gives y = 1/x, not −1/x.
        "1": "1/x 的圖像亦對稱於 y = −x，但這並不是 f 為其自身反函數的原因。解 x = 1/y 得 y = 1/x，而非 −1/x。",
        // EN (option C): A function needs to be one-to-one on its domain to have an inverse. Leaving out x = 0 does not stop that: 1/x is one-to-one on x ≠ 0.
        "2": "函數只要在其定義域上是一對一，便有反函數。剔除 x = 0 並不影響這一點：1/x 在 x ≠ 0 上是一對一的。",
        // EN (option D): Composing is not multiplying. f(f(x)) = f(1/x) = 1/(1/x) = x, not (1/x) × (1/x).
        "3": "複合不是相乘。f(f(x)) = f(1/x) = 1/(1/x) = x，而非 (1/x) × (1/x)。",
      },
    },

    // ── t2-2-q021 · numeric · foundation · SL · SL 2.9 · 2 marks
    "t2-2-q021": {
      // EN: <p>The graph of <span class="chem">y = 3^x</span> is reflected in the line <span class="chem">y = x</span> to give the graph of <span class="chem">y = g(x)</span>. Find <span class="chem">g(81)</span>.</p>
      stem: "<p>把 <span class=\"chem\">y = 3^x</span> 的圖像對直線 <span class=\"chem\">y = x</span> 反射，得 <span class=\"chem\">y = g(x)</span> 的圖像。求 (Find) <span class=\"chem\">g(81)</span>。</p>",
      hints: [
        // EN: A reflection in <span class="chem">y = x</span> gives the inverse function. The inverse of <span class="chem">3^x</span> is <span class="chem">log_3 x</span>.
        "對 <span class=\"chem\">y = x</span> 反射得出反函數。<span class=\"chem\">3^x</span> 的反函數是 <span class=\"chem\">log_3 x</span>。",
        // EN: Write <span class="chem">81</span> as a power of <span class="chem">3</span>.
        "把 <span class=\"chem\">81</span> 寫成 <span class=\"chem\">3</span> 的冪。",
      ],
      // EN: <p>The reflection of <span class="chem">y = 3^x</span> in <span class="chem">y = x</span> is its inverse, <span class="chem">g(x) = log_3 x</span>. Since <span class="chem">81 = 3^4</span>, <span class="chem">g(81) = log_3 3^4 = 4</span> (booklet: <span class="chem">log_a a^x = x</span>).</p>
      solution: "<p><span class=\"chem\">y = 3^x</span> 對 <span class=\"chem\">y = x</span> 的反射是其反函數 <span class=\"chem\">g(x) = log_3 x</span>。由於 <span class=\"chem\">81 = 3^4</span>，故 <span class=\"chem\">g(81) = log_3 3^4 = 4</span>（公式手冊：<span class=\"chem\">log_a a^x = x</span>）。</p>",
    },

    // ── t2-2-q022 · short · exam · SL · SL 2.6, 2.7 · 6 marks
    "t2-2-q022": {
      // EN: <p>The graph of <span class="chem">y = a(x - h)^2 + k</span> has its vertex at <span class="chem">(-1, 8)</span> and passes through the point <span class="chem">(2, -10)</span>.<br>(a) Write down the values of <span class="chem">h</span> and <span class="chem">k</span>, and find the value of <span class="chem">a</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-intercepts of the graph. <strong>[2 marks]</strong><br>(c) Express the function in the form <span class="chem">y = px^2 + qx + r</span>, and write down the <span class="chem">y</span>-intercept. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">y = a(x - h)^2 + k</span> 的圖像的頂點為 <span class=\"chem\">(-1, 8)</span>，並通過點 <span class=\"chem\">(2, -10)</span>。<br>(a) 寫出 (Write down) <span class=\"chem\">h</span> 和 <span class=\"chem\">k</span> 的值，並求 <span class=\"chem\">a</span> 的值。<strong>[2 marks]</strong><br>(b) 求 (Find) 該圖像的 <span class=\"chem\">x</span> 截距。<strong>[2 marks]</strong><br>(c) 把該函數表示為 (Express) <span class=\"chem\">y = px^2 + qx + r</span> 的形式，並寫出 <span class=\"chem\">y</span> 截距。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: In vertex form the vertex is <span class="chem">(h, k)</span>, so you can write down <span class="chem">h</span> and <span class="chem">k</span> straight away. Substitute <span class="chem">(2, -10)</span> to find <span class="chem">a</span>.
        "在頂點形式中，頂點為 <span class=\"chem\">(h, k)</span>，因此可直接寫出 <span class=\"chem\">h</span> 和 <span class=\"chem\">k</span>。代入 <span class=\"chem\">(2, -10)</span> 以求 <span class=\"chem\">a</span>。",
        // EN: For the <span class="chem">x</span>-intercepts, set <span class="chem">y = 0</span> and take square roots of <span class="chem">(x + 1)^2 = 4</span>; remember the <span class="chem">+-</span>.
        "求 <span class=\"chem\">x</span> 截距時，令 <span class=\"chem\">y = 0</span>，並對 <span class=\"chem\">(x + 1)^2 = 4</span> 取平方根；別忘記 <span class=\"chem\">+-</span>。",
      ],
      // EN: <p>(a) The vertex is <span class="chem">(h, k) = (-1, 8)</span>. Substituting <span class="chem">(2, -10)</span>: <span class="chem">-10 = a(3)^2 + 8 => 9a = -18 => a = -2</span>.<br>(b) <span class="chem">-2(x + 1)^2 + 8 = 0 => (x + 1)^2 = 4 => x + 1 = +-2 => x = 1</span> or <span class="chem">x = -3</span>. Check: the axis <span class="chem">x = -1</span> is halfway between them.<br>(c) <span class="chem">y = -2(x^2 + 2x + 1) + 8 = -2x^2 - 4x + 6</span>, so the <span class="chem">y</span>-intercept is <span class="chem">6</span>.</p>
      solution: "<p>(a) 頂點為 <span class=\"chem\">(h, k) = (-1, 8)</span>。代入 <span class=\"chem\">(2, -10)</span>：<span class=\"chem\">-10 = a(3)^2 + 8 => 9a = -18 => a = -2</span>。<br>(b) <span class=\"chem\">-2(x + 1)^2 + 8 = 0 => (x + 1)^2 = 4 => x + 1 = +-2 => x = 1</span> 或 <span class=\"chem\">x = -3</span>。驗算：對稱軸 <span class=\"chem\">x = -1</span> 剛好位於兩者正中。<br>(c) <span class=\"chem\">y = -2(x^2 + 2x + 1) + 8 = -2x^2 - 4x + 6</span>，故 <span class=\"chem\">y</span> 截距為 <span class=\"chem\">6</span>。</p>",
      // EN: <p>(a) <span class="chem">h = -1</span>, <span class="chem">k = 8</span>, <span class="chem">a = -2</span>; (b) <span class="chem">x = -3</span> and <span class="chem">x = 1</span>; (c) <span class="chem">y = -2x^2 - 4x + 6</span>, <span class="chem">y</span>-intercept <span class="chem">6</span>.</p>
      answer: "<p>(a) <span class=\"chem\">h = -1</span>，<span class=\"chem\">k = 8</span>，<span class=\"chem\">a = -2</span>；(b) <span class=\"chem\">x = -3</span> 及 <span class=\"chem\">x = 1</span>；(c) <span class=\"chem\">y = -2x^2 - 4x + 6</span>，<span class=\"chem\">y</span> 截距為 <span class=\"chem\">6</span>。</p>",
      markscheme: [
        // EN: M1: Substitutes the point into y = a(x + 1)² + 8: −10 = a(2 + 1)² + 8, i.e. 9a = −18.
        "M1：把該點代入 y = a(x + 1)² + 8：−10 = a(2 + 1)² + 8，即 9a = −18。",
        // EN: A1: a = −2 (with h = −1, k = 8).
        "A1：a = −2（及 h = −1, k = 8）。",
        // EN: M1: Sets −2(x + 1)² + 8 = 0 ⇒ (x + 1)² = 4 ⇒ x + 1 = ±2.
        "M1：令 −2(x + 1)² + 8 = 0 ⇒ (x + 1)² = 4 ⇒ x + 1 = ±2。",
        // EN: A1: x = −3 and x = 1.
        "A1：x = −3 及 x = 1。",
        // EN: A1: Expands −2(x² + 2x + 1) + 8 = −2x² − 4x + 6.
        "A1：展開 −2(x² + 2x + 1) + 8 = −2x² − 4x + 6。",
        // EN: A1: y-intercept is 6 (the point (0, 6)).
        "A1：y 截距為 6（即點 (0, 6)）。",
      ],
    },

    // ── t2-2-q023 · numeric · exam · SL · SL 2.7 · 3 marks
    "t2-2-q023": {
      // EN: <p>The equation <span class="chem">2x^2 - 6x + 3 = 0</span> has two real roots. Find the larger root, giving your answer in exact form.</p>
      stem: "<p>方程 <span class=\"chem\">2x^2 - 6x + 3 = 0</span> 有兩個實根。求 (Find) 較大的根，答案以準確形式表示。</p>",
      hints: [
        // EN: The quadratic does not factorise over the integers, so use the quadratic formula with <span class="chem">a = 2</span>, <span class="chem">b = -6</span>, <span class="chem">c = 3</span>.
        "此二次式不能在整數範圍內因式分解，因此以 <span class=\"chem\">a = 2</span>、<span class=\"chem\">b = -6</span>、<span class=\"chem\">c = 3</span> 代入二次公式。",
        // EN: Simplify the surd: <span class="chem">sqrt(12) = 2 sqrt(3)</span>, then divide every term by the common factor.
        "化簡根式：<span class=\"chem\">sqrt(12) = 2 sqrt(3)</span>，然後把每一項除以公因數。",
      ],
      // EN: <p><span class="chem">x = (6 +- sqrt(36 - 24))/4 = (6 +- sqrt(12))/4 = (6 +- 2 sqrt(3))/4 = (3 +- sqrt(3))/2</span>. The larger root is <span class="chem">(3 + sqrt(3))/2</span>.</p>
      solution: "<p><span class=\"chem\">x = (6 +- sqrt(36 - 24))/4 = (6 +- sqrt(12))/4 = (6 +- 2 sqrt(3))/4 = (3 +- sqrt(3))/2</span>。較大的根是 <span class=\"chem\">(3 + sqrt(3))/2</span>。</p>",
    },

    // ── t2-2-q024 · short · exam · SL · SL 2.7 · 4 marks
    "t2-2-q024": {
      // EN: <p>Solve the inequality <span class="chem">3x^2 &lt;= 5x + 2</span>.</p>
      stem: "<p>解 (Solve) 不等式 <span class=\"chem\">3x^2 &lt;= 5x + 2</span>。</p>",
      hints: [
        // EN: Move everything to one side so that you compare a quadratic with <span class="chem">0</span>. Do not divide by <span class="chem">x</span>.
        "把所有項移到同一邊，使二次式與 <span class=\"chem\">0</span> 比較。不要除以 <span class=\"chem\">x</span>。",
        // EN: Factorise <span class="chem">3x^2 - 5x - 2</span> and sketch the parabola: it opens upwards, so where is it below the axis?
        "因式分解 <span class=\"chem\">3x^2 - 5x - 2</span> 並描繪拋物線略圖：它開口向上，那麼它在哪裏位於軸的下方？",
      ],
      // EN: <p><span class="chem">3x^2 - 5x - 2 &lt;= 0 => (3x + 1)(x - 2) &lt;= 0</span>. The critical values are <span class="chem">x = -1/3</span> and <span class="chem">x = 2</span>. The parabola opens upwards, so it is on or below the <span class="chem">x</span>-axis between the roots: <span class="chem">-1/3 &lt;= x &lt;= 2</span>.</p>
      solution: "<p><span class=\"chem\">3x^2 - 5x - 2 &lt;= 0 => (3x + 1)(x - 2) &lt;= 0</span>。臨界值為 <span class=\"chem\">x = -1/3</span> 及 <span class=\"chem\">x = 2</span>。拋物線開口向上，因此在兩根之間位於 <span class=\"chem\">x</span> 軸上或其下方：<span class=\"chem\">-1/3 &lt;= x &lt;= 2</span>。</p>",
      // EN: <p><span class="chem">-1/3 &lt;= x &lt;= 2</span></p>
      answer: "<p><span class=\"chem\">-1/3 &lt;= x &lt;= 2</span></p>",
      markscheme: [
        // EN: M1: Rearranges to one side: 3x² − 5x − 2 ≤ 0.
        "M1：移項至同一邊：3x² − 5x − 2 ≤ 0。",
        // EN: A1: Factorises (3x + 1)(x − 2) or otherwise finds the critical values x = −1/3 and x = 2.
        "A1：因式分解為 (3x + 1)(x − 2)，或以其他方法求出臨界值 x = −1/3 及 x = 2。",
        // EN: M1: Uses a sketch of the upward parabola or a sign diagram to see the expression is ≤ 0 between the roots.
        "M1：利用開口向上的拋物線略圖或正負號圖，看出該式在兩根之間 ≤ 0。",
        // EN: A1: −1/3 ≤ x ≤ 2 (inclusive inequalities required).
        "A1：−1/3 ≤ x ≤ 2（須使用包含等號的不等號）。",
      ],
    },

    // ── t2-2-q025 · short · exam · SL · SL 2.8 · 7 marks
    "t2-2-q025": {
      // EN: <p>Let <span class="chem">f(x) = (6x - 3)/(2x + 4)</span>, for <span class="chem">x != -2</span>.<br>(a) Write down the equation of (i) the vertical asymptote and (ii) the horizontal asymptote of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the coordinates of the points where the graph meets the axes. <strong>[2 marks]</strong><br>(c) Sketch the graph of <span class="chem">f</span>, showing the asymptotes and intercepts. <strong>[2 marks]</strong><br>(d) Hence write down the range of <span class="chem">f</span>. <strong>[1 mark]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = (6x - 3)/(2x + 4)</span>，其中 <span class=\"chem\">x != -2</span>。<br>(a) 寫出 (Write down) <span class=\"chem\">f</span> 的圖像的 (i) 垂直漸近線及 (ii) 水平漸近線的方程。<strong>[2 marks]</strong><br>(b) 求 (Find) 圖像與坐標軸相交的點的坐標。<strong>[2 marks]</strong><br>(c) 畫出 (Sketch) <span class=\"chem\">f</span> 的圖像，並標示漸近線及截距。<strong>[2 marks]</strong><br>(d) 由此寫出 (Hence write down) <span class=\"chem\">f</span> 的值域。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Set the denominator equal to zero for the vertical asymptote. For the horizontal asymptote, divide the <span class="chem">x</span>-coefficients: <span class="chem">a/c</span>.
        "令分母等於零以求垂直漸近線。求水平漸近線時，把 <span class=\"chem\">x</span> 的係數相除：<span class=\"chem\">a/c</span>。",
        // EN: The <span class="chem">x</span>-intercept comes from the numerator being zero; the <span class="chem">y</span>-intercept is <span class="chem">f(0)</span>.
        "<span class=\"chem\">x</span> 截距來自分子等於零；<span class=\"chem\">y</span> 截距是 <span class=\"chem\">f(0)</span>。",
        // EN: Put both intercepts on your sketch first. They tell you which pair of opposite regions the branches lie in.
        "先把兩個截距標在略圖上。它們會告訴你兩支曲線位於哪一對相對的區域。",
      ],
      // EN: <p>(a) <span class="chem">2x + 4 = 0 => x = -2</span>; horizontal asymptote <span class="chem">y = 6/2 = 3</span>.<br>(b) <span class="chem">6x - 3 = 0 => x = 1/2</span>, giving <span class="chem">(1/2, 0)</span>; <span class="chem">f(0) = -3/4</span>, giving <span class="chem">(0, -3/4)</span>.<br>(c) Both intercepts lie to the right of <span class="chem">x = -2</span> and below <span class="chem">y = 3</span>, so one branch runs through them from near <span class="chem">x = -2</span> (going down to <span class="chem">-infty</span>) up towards <span class="chem">y = 3</span>. The other branch is in the opposite region: left of <span class="chem">x = -2</span>, above <span class="chem">y = 3</span>.<br>(d) The graph never reaches its horizontal asymptote, so the range is <span class="chem">y != 3</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2x + 4 = 0 => x = -2</span>；水平漸近線為 <span class=\"chem\">y = 6/2 = 3</span>。<br>(b) <span class=\"chem\">6x - 3 = 0 => x = 1/2</span>，得 <span class=\"chem\">(1/2, 0)</span>；<span class=\"chem\">f(0) = -3/4</span>，得 <span class=\"chem\">(0, -3/4)</span>。<br>(c) 兩個截距都位於 <span class=\"chem\">x = -2</span> 的右方及 <span class=\"chem\">y = 3</span> 的下方，因此其中一支曲線通過它們，從 <span class=\"chem\">x = -2</span> 附近（向下趨向 <span class=\"chem\">-infty</span>）向上趨近 <span class=\"chem\">y = 3</span>。另一支曲線位於相對的區域：<span class=\"chem\">x = -2</span> 的左方、<span class=\"chem\">y = 3</span> 的上方。<br>(d) 圖像永遠不會到達其水平漸近線，因此值域為 <span class=\"chem\">y != 3</span>。</p>",
      // EN: <p>(a) (i) <span class="chem">x = -2</span>; (ii) <span class="chem">y = 3</span>; (b) <span class="chem">(1/2, 0)</span> and <span class="chem">(0, -3/4)</span>; (c) a hyperbola in the top-left and bottom-right regions formed by the asymptotes, passing through both intercepts; (d) <span class="chem">y != 3</span> (all real <span class="chem">y</span> except <span class="chem">3</span>).</p>
      answer: "<p>(a) (i) <span class=\"chem\">x = -2</span>；(ii) <span class=\"chem\">y = 3</span>；(b) <span class=\"chem\">(1/2, 0)</span> 及 <span class=\"chem\">(0, -3/4)</span>；(c) 位於漸近線所分隔的左上及右下區域、並通過兩個截距的雙曲線；(d) <span class=\"chem\">y != 3</span>（除 <span class=\"chem\">3</span> 以外的所有實數 <span class=\"chem\">y</span>）。</p>",
      markscheme: [
        // EN: A1: Vertical asymptote x = −2.
        "A1：垂直漸近線 x = −2。",
        // EN: A1: Horizontal asymptote y = 3 (ratio 6/2 of the x-coefficients).
        "A1：水平漸近線 y = 3（x 係數之比 6/2）。",
        // EN: A1: x-intercept (1/2, 0) from 6x − 3 = 0.
        "A1：由 6x − 3 = 0 得 x 截距 (1/2, 0)。",
        // EN: A1: y-intercept (0, −3/4) from f(0) = −3/4.
        "A1：由 f(0) = −3/4 得 y 截距 (0, −3/4)。",
        // EN: A1: Sketch shows both asymptotes and a two-branch hyperbola approaching them.
        "A1：略圖顯示兩條漸近線，以及趨近它們的兩支雙曲線。",
        // EN: A1: Correct branches: the branch through (1/2, 0) and (0, −3/4) lies to the right of x = −2 and below y = 3; the other branch lies to the left of x = −2 and above y = 3.
        "A1：兩支曲線位置正確：通過 (1/2, 0) 及 (0, −3/4) 的一支位於 x = −2 的右方及 y = 3 的下方；另一支位於 x = −2 的左方及 y = 3 的上方。",
        // EN: A1: Range y ≠ 3.
        "A1：值域 y ≠ 3。",
      ],
    },

    // ── t2-2-q026 · numeric · foundation · SL · SL 2.9 · 2 marks
    "t2-2-q026": {
      // EN: <p>The function <span class="chem">f(x) = 2^{3x}</span> can be written in the form <span class="chem">f(x) = e^{kx}</span>. Find the exact value of <span class="chem">k</span>.</p>
      stem: "<p>函數 <span class=\"chem\">f(x) = 2^{3x}</span> 可寫成 <span class=\"chem\">f(x) = e^{kx}</span> 的形式。求 (Find) <span class=\"chem\">k</span> 的準確值。</p>",
      hints: [
        // EN: The formula booklet gives <span class="chem">a^x = e^{x ln a}</span>. Write <span class="chem">2^{3x}</span> as <span class="chem">(2^3)^x</span> or apply the identity with exponent <span class="chem">3x</span>.
        "公式手冊給出 <span class=\"chem\">a^x = e^{x ln a}</span>。把 <span class=\"chem\">2^{3x}</span> 寫成 <span class=\"chem\">(2^3)^x</span>，或以指數 <span class=\"chem\">3x</span> 運用該恆等式。",
      ],
      // EN: <p>Using <span class="chem">a^x = e^{x ln a}</span>: <span class="chem">2^{3x} = e^{3x ln 2}</span>, so <span class="chem">k = 3 ln 2</span> (equivalently <span class="chem">ln 8</span>).</p>
      solution: "<p>運用 <span class=\"chem\">a^x = e^{x ln a}</span>：<span class=\"chem\">2^{3x} = e^{3x ln 2}</span>，故 <span class=\"chem\">k = 3 ln 2</span>（亦即 <span class=\"chem\">ln 8</span>）。</p>",
    },

    // ── t2-2-q027 · short · exam · SL · SL 2.9, 2.5 · 6 marks
    "t2-2-q027": {
      // EN: <p>Let <span class="chem">f(x) = ln(2x - 4) + 1</span>, for <span class="chem">x &gt; 2</span>.<br>(a) Write down the equation of the vertical asymptote of the graph of <span class="chem">f</span>. <strong>[1 mark]</strong><br>(b) Find the exact <span class="chem">x</span>-intercept of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(c) Find an expression for <span class="chem">f^{-1}(x)</span>. <strong>[2 marks]</strong><br>(d) Write down the equation of the horizontal asymptote of the graph of <span class="chem">f^{-1}</span>. <strong>[1 mark]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = ln(2x - 4) + 1</span>，其中 <span class=\"chem\">x &gt; 2</span>。<br>(a) 寫出 (Write down) <span class=\"chem\">f</span> 的圖像的垂直漸近線的方程。<strong>[1 mark]</strong><br>(b) 求 (Find) <span class=\"chem\">f</span> 的圖像的 <span class=\"chem\">x</span> 截距的準確值。<strong>[2 marks]</strong><br>(c) 求 (Find) <span class=\"chem\">f^{-1}(x)</span> 的表達式。<strong>[2 marks]</strong><br>(d) 寫出 (Write down) <span class=\"chem\">f^{-1}</span> 的圖像的水平漸近線的方程。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: A logarithm needs a positive argument, and its graph has a vertical asymptote where the argument is zero.
        "對數的真數必須為正，而其圖像在真數為零之處有垂直漸近線。",
        // EN: For (b), set <span class="chem">f(x) = 0</span>, isolate the logarithm and use <span class="chem">ln u = -1 => u = e^{-1}</span>.
        "在 (b) 部中，令 <span class=\"chem\">f(x) = 0</span>，把對數項單獨置於一邊，再運用 <span class=\"chem\">ln u = -1 => u = e^{-1}</span>。",
        // EN: For (d), the asymptotes of <span class="chem">f^{-1}</span> are the reflections of those of <span class="chem">f</span> in <span class="chem">y = x</span>.
        "在 (d) 部中，<span class=\"chem\">f^{-1}</span> 的漸近線是 <span class=\"chem\">f</span> 的漸近線對 <span class=\"chem\">y = x</span> 的反射。",
      ],
      // EN: <p>(a) <span class="chem">2x - 4 = 0 => x = 2</span>.<br>(b) <span class="chem">ln(2x - 4) = -1 => 2x - 4 = e^{-1} => x = 2 + 1/(2e)</span>.<br>(c) Let <span class="chem">x = ln(2y - 4) + 1</span>. Then <span class="chem">e^{x - 1} = 2y - 4</span>, so <span class="chem">f^{-1}(x) = (e^{x - 1} + 4)/2</span>.<br>(d) As <span class="chem">x -&gt; -infty</span>, <span class="chem">e^{x - 1} -&gt; 0</span>, so <span class="chem">f^{-1}(x) -&gt; 2</span>: the horizontal asymptote is <span class="chem">y = 2</span>, the reflection of <span class="chem">x = 2</span> in <span class="chem">y = x</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2x - 4 = 0 => x = 2</span>。<br>(b) <span class=\"chem\">ln(2x - 4) = -1 => 2x - 4 = e^{-1} => x = 2 + 1/(2e)</span>。<br>(c) 設 <span class=\"chem\">x = ln(2y - 4) + 1</span>。則 <span class=\"chem\">e^{x - 1} = 2y - 4</span>，故 <span class=\"chem\">f^{-1}(x) = (e^{x - 1} + 4)/2</span>。<br>(d) 當 <span class=\"chem\">x -&gt; -infty</span> 時，<span class=\"chem\">e^{x - 1} -&gt; 0</span>，故 <span class=\"chem\">f^{-1}(x) -&gt; 2</span>：水平漸近線為 <span class=\"chem\">y = 2</span>，即 <span class=\"chem\">x = 2</span> 對 <span class=\"chem\">y = x</span> 的反射。</p>",
      // EN: <p>(a) <span class="chem">x = 2</span>; (b) <span class="chem">x = 2 + 1/(2e)</span>; (c) <span class="chem">f^{-1}(x) = (e^{x - 1} + 4)/2</span>; (d) <span class="chem">y = 2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x = 2</span>; (b) <span class=\"chem\">x = 2 + 1/(2e)</span>; (c) <span class=\"chem\">f^{-1}(x) = (e^{x - 1} + 4)/2</span>; (d) <span class=\"chem\">y = 2</span>.</p>",
      markscheme: [
        // EN: A1: x = 2 (where 2x − 4 = 0).
        "A1：x = 2（即 2x − 4 = 0 之處）。",
        // EN: M1: Sets f(x) = 0: ln(2x − 4) = −1 ⇒ 2x − 4 = e⁻¹.
        "M1：令 f(x) = 0：ln(2x − 4) = −1 ⇒ 2x − 4 = e⁻¹。",
        // EN: A1: x = 2 + 1/(2e) (or (4e + 1)/(2e)).
        "A1：x = 2 + 1/(2e)（或 (4e + 1)/(2e)）。",
        // EN: M1: Interchanges x and y and removes the logarithm: x − 1 = ln(2y − 4) ⇒ e^(x − 1) = 2y − 4.
        "M1：互換 x 與 y 並消去對數：x − 1 = ln(2y − 4) ⇒ e^(x − 1) = 2y − 4。",
        // EN: A1: f⁻¹(x) = (e^(x − 1) + 4)/2.
        "A1: f⁻¹(x) = (e^(x − 1) + 4)/2.",
        // EN: A1: y = 2 (the reflection of x = 2 in y = x).
        "A1：y = 2（即 x = 2 對 y = x 的反射）。",
      ],
    },

    // ── t2-2-q028 · numeric · exam · SL · SL 2.9 · 4 marks
    "t2-2-q028": {
      // EN: <p>The temperature, in °C, of a metal rod <span class="chem">t</span> minutes after it is taken out of a furnace is modelled by <span class="chem">P(t) = 40 + 60 e^{-kt}</span>, where <span class="chem">k &gt; 0</span>. After <span class="chem">10</span> minutes the temperature is <span class="chem">55</span> °C. Find the exact value of <span class="chem">k</span>, giving your answer in the form <span class="chem">(ln a)/b</span>, where <span class="chem">a, b ∈ ℤ^+</span> and <span class="chem">a</span> is prime.</p>
      stem: "<p>一枝金屬棒從熔爐取出 <span class=\"chem\">t</span> 分鐘後的溫度（以 °C 為單位）以 <span class=\"chem\">P(t) = 40 + 60 e^{-kt}</span> 模擬，其中 <span class=\"chem\">k &gt; 0</span>。<span class=\"chem\">10</span> 分鐘後，溫度為 <span class=\"chem\">55</span> °C。求 (Find) <span class=\"chem\">k</span> 的準確值，答案以 <span class=\"chem\">(ln a)/b</span> 的形式表示，其中 <span class=\"chem\">a, b ∈ ℤ^+</span>，且 <span class=\"chem\">a</span> 為質數。</p>",
      hints: [
        // EN: Decode: you are given one data point, <span class="chem">P(10) = 55</span>. Substitute it and isolate the exponential term before taking logs.
        "解碼：題目給出一個數據點 <span class=\"chem\">P(10) = 55</span>。代入該點，並在取對數之前先把指數項單獨置於一邊。",
        // EN: <span class="chem">60 e^{-10k} = 15 => e^{-10k} = 1/4</span>. Now take natural logs and use <span class="chem">ln 4 = 2 ln 2</span>.
        "<span class=\"chem\">60 e^{-10k} = 15 => e^{-10k} = 1/4</span>。現在取自然對數並運用 <span class=\"chem\">ln 4 = 2 ln 2</span>。",
      ],
      // EN: <p><span class="chem">40 + 60 e^{-10k} = 55 => e^{-10k} = 15/60 = 1/4 => -10k = ln(1/4) = -ln 4 => k = (ln 4)/10 = (2 ln 2)/10 = (ln 2)/5</span>.</p>
      solution: "<p><span class=\"chem\">40 + 60 e^{-10k} = 55 => e^{-10k} = 15/60 = 1/4 => -10k = ln(1/4) = -ln 4 => k = (ln 4)/10 = (2 ln 2)/10 = (ln 2)/5</span>.</p>",
    },

    // ── t2-2-q029 · numeric · exam · SL · SL 2.10, 1.7 · 4 marks
    "t2-2-q029": {
      // EN: <p>Solve the equation <span class="chem">2^{x + 1} = 3^x</span>, giving your answer in the form <span class="chem">(ln a)/(ln b - ln a)</span>, where <span class="chem">a, b ∈ ℤ^+</span>.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">2^{x + 1} = 3^x</span>，答案以 <span class=\"chem\">(ln a)/(ln b - ln a)</span> 的形式表示，其中 <span class=\"chem\">a, b ∈ ℤ^+</span>。</p>",
      hints: [
        // EN: The two sides have different bases, so take natural logs of both sides and bring the powers down.
        "兩邊的底不同，因此對兩邊取自然對數，並把指數移到前面。",
        // EN: <span class="chem">(x + 1) ln 2 = x ln 3</span>. Collect the <span class="chem">x</span> terms on one side and factorise.
        "<span class=\"chem\">(x + 1) ln 2 = x ln 3</span>。把含 <span class=\"chem\">x</span> 的項移到同一邊，再抽出公因式。",
      ],
      // EN: <p>Taking natural logs: <span class="chem">(x + 1) ln 2 = x ln 3 => ln 2 = x ln 3 - x ln 2 = x(ln 3 - ln 2)</span>, so <span class="chem">x = (ln 2)/(ln 3 - ln 2)</span> (<span class="chem">≈ 1.71</span>).</p>
      solution: "<p>取自然對數：<span class=\"chem\">(x + 1) ln 2 = x ln 3 => ln 2 = x ln 3 - x ln 2 = x(ln 3 - ln 2)</span>，故 <span class=\"chem\">x = (ln 2)/(ln 3 - ln 2)</span>（<span class=\"chem\">≈ 1.71</span>）。</p>",
    },

    // ── t2-2-q030 · short · challenge · SL · SL 2.6 · 8 marks
    "t2-2-q030": {
      // EN: <p>A farmer has <span class="chem">40</span> m of fencing to make a rectangular pen against a straight stone wall. The wall forms one long side of the pen, so fencing is needed for the other three sides only. The two sides perpendicular to the wall each have length <span class="chem">x</span> m.<br>(a) Show that the area of the pen is <span class="chem">A = 40x - 2x^2</span> square metres. <strong>[2 marks]</strong><br>(b) Write <span class="chem">A</span> in the form <span class="chem">a(x - h)^2 + k</span>. <strong>[2 marks]</strong><br>(c) Write down the largest possible area if the wall is long enough. <strong>[1 mark]</strong><br>(d) The wall is only <span class="chem">16</span> m long, and the side parallel to the wall cannot be longer than the wall. Find the largest possible area of the pen in this case. <strong>[3 marks]</strong></p>
      stem: "<p>一名農夫有 <span class=\"chem\">40</span> m 長的圍欄，要倚着一幅筆直的石牆圍出一個長方形圍欄區。石牆構成圍欄區的一條長邊，因此只有其餘三邊需要圍欄。垂直於石牆的兩條邊長度均為 <span class=\"chem\">x</span> m。<br>(a) 證明 (Show that) 圍欄區的面積為 <span class=\"chem\">A = 40x - 2x^2</span> 平方米。<strong>[2 marks]</strong><br>(b) 把 <span class=\"chem\">A</span> 寫成 <span class=\"chem\">a(x - h)^2 + k</span> 的形式。<strong>[2 marks]</strong><br>(c) 若石牆足夠長，寫出 (Write down) 最大可能的面積。<strong>[1 mark]</strong><br>(d) 石牆只有 <span class=\"chem\">16</span> m 長，而平行於石牆的邊不能比石牆長。求 (Find) 在此情況下圍欄區最大可能的面積。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a quadratic maximum problem with a hidden restriction. The wall length limits the side parallel to the wall, which changes the domain of <span class="chem">x</span>, so the vertex may no longer be allowed.
        "解碼：這是一道帶有隱藏限制的二次函數最大值問題。石牆的長度限制了平行於石牆的邊，從而改變 <span class=\"chem\">x</span> 的定義域，因此頂點未必仍然容許。",
        // EN: The three fenced sides are <span class="chem">x</span>, <span class="chem">x</span> and <span class="chem">40 - 2x</span>. Multiply two adjacent sides for the area.
        "三條圍上圍欄的邊為 <span class=\"chem\">x</span>、<span class=\"chem\">x</span> 及 <span class=\"chem\">40 - 2x</span>。把兩條相鄰的邊相乘便得面積。",
        // EN: In (d), turn "the side parallel to the wall is at most <span class="chem">16</span> m" into an inequality for <span class="chem">x</span>. Is the vertex <span class="chem">x = 10</span> inside the allowed set?
        "在 (d) 部中，把「平行於石牆的邊最多為 <span class=\"chem\">16</span> m」化為關於 <span class=\"chem\">x</span> 的不等式。頂點 <span class=\"chem\">x = 10</span> 是否在容許的集合內？",
        // EN: If the vertex is outside the allowed interval, the maximum of a parabola on that interval is at the end-point nearest to the vertex.
        "若頂點在容許區間以外，拋物線在該區間上的最大值位於最接近頂點的端點。",
      ],
      // EN: <p><strong>Decode:</strong> parts (a)–(c) are a standard "maximise a quadratic" problem. Part (d) adds a domain restriction hidden in words: the parallel side <span class="chem">40 - 2x</span> must be at most <span class="chem">16</span>.</p><p>(a) Fencing: <span class="chem">x + x + (40 - 2x) = 40</span>, so the parallel side is <span class="chem">40 - 2x</span> and <span class="chem">A = x(40 - 2x) = 40x - 2x^2</span>.<br>(b) <span class="chem">A = -2(x^2 - 20x) = -2[(x - 10)^2 - 100] = -2(x - 10)^2 + 200</span>.<br>(c) The maximum is <span class="chem">200</span> m² at <span class="chem">x = 10</span>, but then the parallel side is <span class="chem">20</span> m.<br>(d) We need <span class="chem">40 - 2x &lt;= 16 => x &gt;= 12</span> (and <span class="chem">x &lt; 20</span>). The vertex <span class="chem">x = 10</span> is not allowed. For <span class="chem">x &gt; 10</span> the parabola is decreasing, so the largest area is at <span class="chem">x = 12</span>: <span class="chem">A = 12 × 16 = 192</span> m².</p>
      solution: "<p><strong>解碼：</strong>(a)–(c) 部是標準的「求二次函數最大值」問題。(d) 部加入了隱藏在文字中的定義域限制：平行邊 <span class=\"chem\">40 - 2x</span> 最多為 <span class=\"chem\">16</span>。</p><p>(a) 圍欄：<span class=\"chem\">x + x + (40 - 2x) = 40</span>，故平行邊為 <span class=\"chem\">40 - 2x</span>，而 <span class=\"chem\">A = x(40 - 2x) = 40x - 2x^2</span>。<br>(b) <span class=\"chem\">A = -2(x^2 - 20x) = -2[(x - 10)^2 - 100] = -2(x - 10)^2 + 200</span>。<br>(c) 最大值為 <span class=\"chem\">200</span> m²，於 <span class=\"chem\">x = 10</span> 時取得，但此時平行邊為 <span class=\"chem\">20</span> m。<br>(d) 須有 <span class=\"chem\">40 - 2x &lt;= 16 => x &gt;= 12</span>（及 <span class=\"chem\">x &lt; 20</span>）。頂點 <span class=\"chem\">x = 10</span> 不容許。當 <span class=\"chem\">x &gt; 10</span> 時拋物線遞減，故最大面積於 <span class=\"chem\">x = 12</span> 時取得：<span class=\"chem\">A = 12 × 16 = 192</span> m²。</p>",
      // EN: <p>(a) The side parallel to the wall is <span class="chem">40 - 2x</span>, so <span class="chem">A = x(40 - 2x) = 40x - 2x^2</span>; (b) <span class="chem">A = -2(x - 10)^2 + 200</span>; (c) <span class="chem">200</span> m²; (d) <span class="chem">192</span> m² (when <span class="chem">x = 12</span>).</p>
      answer: "<p>(a) 平行於石牆的邊為 <span class=\"chem\">40 - 2x</span>，故 <span class=\"chem\">A = x(40 - 2x) = 40x - 2x^2</span>；(b) <span class=\"chem\">A = -2(x - 10)^2 + 200</span>；(c) <span class=\"chem\">200</span> m²；(d) <span class=\"chem\">192</span> m²（當 <span class=\"chem\">x = 12</span> 時）。</p>",
      markscheme: [
        // EN: M1: The side parallel to the wall has length 40 − 2x.
        "M1：平行於石牆的邊長為 40 − 2x。",
        // EN: A1: A = x(40 − 2x) = 40x − 2x². AG: the given line itself earns no mark.
        "A1：A = x(40 − 2x) = 40x − 2x²。AG：寫出題目已給的結果本身不得分。",
        // EN: M1: Factorises −2(x² − 20x) and completes the square: −2[(x − 10)² − 100].
        "M1：抽出因式得 −2(x² − 20x) 並配方：−2[(x − 10)² − 100]。",
        // EN: A1: A = −2(x − 10)² + 200.
        "A1: A = −2(x − 10)² + 200.",
        // EN: A1: 200 m².
        "A1: 200 m².",
        // EN: M1: Writes the condition 40 − 2x ≤ 16 ⇒ x ≥ 12.
        "M1：寫出條件 40 − 2x ≤ 16 ⇒ x ≥ 12。",
        // EN: R1: A is decreasing for x > 10 (right of the vertex), so on x ≥ 12 the maximum is at x = 12.
        "R1：A 在 x > 10（頂點右方）時遞減，故在 x ≥ 12 上最大值於 x = 12 取得。",
        // EN: A1: A = 12 × 16 = 192 m².
        "A1: A = 12 × 16 = 192 m².",
      ],
    },

    // ── t2-2-q031 · numeric · challenge · SL · SL 2.7 · 5 marks
    "t2-2-q031": {
      // EN: <p>Consider the equation <span class="chem">kx^2 + 4x + k - 3 = 0</span>, where <span class="chem">k ∈ ℤ</span>. Find the number of integer values of <span class="chem">k</span> for which the equation has two distinct real roots.</p>
      stem: "<p>考慮方程 <span class=\"chem\">kx^2 + 4x + k - 3 = 0</span>，其中 <span class=\"chem\">k ∈ ℤ</span>。求 (Find) 使方程有兩個相異實根的整數 <span class=\"chem\">k</span> 值的數目。</p>",
      hints: [
        // EN: Decode: "two distinct real roots" means <span class="chem">Delta &gt; 0</span>, which gives an interval for <span class="chem">k</span>. Then count the integers in it. There is a hidden condition: the equation must really be a quadratic.
        "解碼：「兩個相異實根」即 <span class=\"chem\">Delta &gt; 0</span>，由此得出 <span class=\"chem\">k</span> 的一個區間，然後數出其中的整數。這裏有一個隱藏條件：方程必須真的是二次方程。",
        // EN: <span class="chem">Delta = 16 - 4k(k - 3)</span>. Set <span class="chem">Delta &gt; 0</span> and simplify to a quadratic inequality in <span class="chem">k</span>.
        "<span class=\"chem\">Delta = 16 - 4k(k - 3)</span>。令 <span class=\"chem\">Delta &gt; 0</span>，並化簡為關於 <span class=\"chem\">k</span> 的二次不等式。",
        // EN: You should get <span class="chem">-1 &lt; k &lt; 4</span>. Now check <span class="chem">k = 0</span> separately: what kind of equation is it then?
        "你應得到 <span class=\"chem\">-1 &lt; k &lt; 4</span>。現在另行檢查 <span class=\"chem\">k = 0</span>：此時方程屬於哪一類？",
      ],
      // EN: <p><strong>Decode:</strong> two distinct real roots needs a genuine quadratic (<span class="chem">k != 0</span>) with <span class="chem">Delta &gt; 0</span>; then count integers.</p><p><span class="chem">Delta = 16 - 4k(k - 3) &gt; 0 => 4 - k^2 + 3k &gt; 0 => k^2 - 3k - 4 &lt; 0 => (k - 4)(k + 1) &lt; 0 => -1 &lt; k &lt; 4</span>. The integers in this interval are <span class="chem">0, 1, 2, 3</span>. When <span class="chem">k = 0</span> the equation is <span class="chem">4x - 3 = 0</span>, which has only one root, so <span class="chem">k = 0</span> is rejected. That leaves <span class="chem">k = 1, 2, 3</span>: <strong>3</strong> values.</p>
      solution: "<p><strong>解碼：</strong>要有兩個相異實根，方程必須是真正的二次方程（<span class=\"chem\">k != 0</span>）且 <span class=\"chem\">Delta &gt; 0</span>；然後數出整數。</p><p><span class=\"chem\">Delta = 16 - 4k(k - 3) &gt; 0 => 4 - k^2 + 3k &gt; 0 => k^2 - 3k - 4 &lt; 0 => (k - 4)(k + 1) &lt; 0 => -1 &lt; k &lt; 4</span>。此區間內的整數為 <span class=\"chem\">0, 1, 2, 3</span>。當 <span class=\"chem\">k = 0</span> 時，方程為 <span class=\"chem\">4x - 3 = 0</span>，只有一個根，因此 <span class=\"chem\">k = 0</span> 須捨去。餘下 <span class=\"chem\">k = 1, 2, 3</span>：共 <strong>3</strong> 個值。</p>",
    },

    // ── t2-2-q032 · short · challenge · SL · SL 2.8 · 7 marks
    "t2-2-q032": {
      // EN: <p>A small café has fixed costs of <span class="chem">$300</span> per day (rent, wages and power). Each cup of coffee it sells costs an extra <span class="chem">$2</span> in ingredients. The average cost per cup on a day when <span class="chem">n</span> cups are sold is <span class="chem">C(n)</span> dollars, where <span class="chem">n</span> is a positive integer.<br>(a) Show that <span class="chem">C(n) = (2n + 300)/n</span>, and write this in the form <span class="chem">C(n) = a + b/n</span>. <strong>[2 marks]</strong><br>(b) Find the least number of cups the café must sell in a day for the average cost per cup to be at most <span class="chem">$2.40</span>. <strong>[3 marks]</strong><br>(c) Write down the equation of the horizontal asymptote of the graph of <span class="chem">C</span>, and explain what it means for the café. <strong>[2 marks]</strong></p>
      stem: "<p>一間小咖啡店每天的固定成本為 <span class=\"chem\">$300</span>（租金、工資及電費）。每售出一杯咖啡，材料另需 <span class=\"chem\">$2</span>。某天售出 <span class=\"chem\">n</span> 杯時，每杯的平均成本為 <span class=\"chem\">C(n)</span> 元，其中 <span class=\"chem\">n</span> 為正整數。<br>(a) 證明 (Show that) <span class=\"chem\">C(n) = (2n + 300)/n</span>，並把它寫成 <span class=\"chem\">C(n) = a + b/n</span> 的形式。<strong>[2 marks]</strong><br>(b) 求 (Find) 咖啡店一天最少須售出多少杯，才能使每杯的平均成本不多於 <span class=\"chem\">$2.40</span>。<strong>[3 marks]</strong><br>(c) 寫出 (Write down) <span class=\"chem\">C</span> 的圖像的水平漸近線的方程，並解釋 (explain) 它對咖啡店的意義。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "average cost per cup" means total cost divided by the number of cups. This builds a rational function <span class="chem">(ax + b)/(cx + d)</span> with <span class="chem">c = 1</span>, <span class="chem">d = 0</span>.
        "解碼：「每杯的平均成本」是總成本除以杯數。這得出一個 <span class=\"chem\">c = 1</span>、<span class=\"chem\">d = 0</span> 的有理函數 <span class=\"chem\">(ax + b)/(cx + d)</span>。",
        // EN: The total cost on a day with <span class="chem">n</span> cups is the fixed cost plus <span class="chem">$2</span> for each cup.
        "售出 <span class=\"chem\">n</span> 杯的那天，總成本為固定成本加上每杯 <span class=\"chem\">$2</span>。",
        // EN: For (b), "at most" means <span class="chem">&lt;=</span>. Since <span class="chem">n &gt; 0</span>, you may multiply both sides by <span class="chem">n</span> without reversing the inequality.
        "在 (b) 部中，「不多於」即 <span class=\"chem\">&lt;=</span>。由於 <span class=\"chem\">n &gt; 0</span>，兩邊可乘以 <span class=\"chem\">n</span> 而不須改變不等號方向。",
      ],
      // EN: <p><strong>Decode:</strong> average cost = total cost ÷ number of cups, which gives a reciprocal-type model; "at most" gives an inequality; the long-run behaviour is the horizontal asymptote.</p><p>(a) Total cost <span class="chem">= 300 + 2n</span>, so <span class="chem">C(n) = (2n + 300)/n = 2 + 300/n</span>.<br>(b) <span class="chem">2 + 300/n &lt;= 2.4 => 300/n &lt;= 0.4 => n &gt;= 300/0.4 = 750</span>. The least number of cups is <span class="chem">750</span>.<br>(c) As <span class="chem">n -&gt; infty</span>, <span class="chem">300/n -&gt; 0</span>, so the asymptote is <span class="chem">C = 2</span>. The average cost per cup gets closer and closer to the <span class="chem">$2</span> ingredient cost but never reaches it, because some of the fixed cost is always included.</p>
      solution: "<p><strong>解碼：</strong>平均成本 = 總成本 ÷ 杯數，得出倒數型模型；「不多於」給出不等式；長遠的趨勢就是水平漸近線。</p><p>(a) 總成本 <span class=\"chem\">= 300 + 2n</span>，故 <span class=\"chem\">C(n) = (2n + 300)/n = 2 + 300/n</span>。<br>(b) <span class=\"chem\">2 + 300/n &lt;= 2.4 => 300/n &lt;= 0.4 => n &gt;= 300/0.4 = 750</span>。最少杯數為 <span class=\"chem\">750</span>。<br>(c) 當 <span class=\"chem\">n -&gt; infty</span> 時，<span class=\"chem\">300/n -&gt; 0</span>，故漸近線為 <span class=\"chem\">C = 2</span>。每杯的平均成本愈來愈接近 <span class=\"chem\">$2</span> 的材料成本，但永遠不會達到，因為當中總包含部分固定成本。</p>",
      // EN: <p>(a) Total cost <span class="chem">300 + 2n</span> divided by <span class="chem">n</span> cups: <span class="chem">C(n) = (2n + 300)/n = 2 + 300/n</span>; (b) <span class="chem">750</span> cups; (c) <span class="chem">C = 2</span>: however many cups are sold, the average cost per cup stays above <span class="chem">$2</span> and gets closer to it, because the fixed cost is shared over more cups.</p>
      answer: "<p>(a) 總成本 <span class=\"chem\">300 + 2n</span> 除以 <span class=\"chem\">n</span> 杯：<span class=\"chem\">C(n) = (2n + 300)/n = 2 + 300/n</span>；(b) <span class=\"chem\">750</span> 杯；(c) <span class=\"chem\">C = 2</span>：無論售出多少杯，每杯的平均成本總高於 <span class=\"chem\">$2</span> 並愈來愈接近它，因為固定成本分攤到更多杯上。</p>",
      markscheme: [
        // EN: M1: Total daily cost = 300 + 2n, and average cost = total cost ÷ n. AG: C(n) = (2n + 300)/n; the given line itself earns no mark.
        "M1：每天總成本 = 300 + 2n，而平均成本 = 總成本 ÷ n。AG：C(n) = (2n + 300)/n；寫出題目已給的結果本身不得分。",
        // EN: A1: C(n) = 2 + 300/n.
        "A1: C(n) = 2 + 300/n.",
        // EN: M1: Sets up 2 + 300/n ≤ 2.40.
        "M1：列出 2 + 300/n ≤ 2.40。",
        // EN: A1: 300/n ≤ 0.4 ⇒ n ≥ 750 (multiplying by n is safe because n > 0).
        "A1：300/n ≤ 0.4 ⇒ n ≥ 750（由於 n > 0，乘以 n 是安全的）。",
        // EN: A1: Least number of cups is 750.
        "A1：最少杯數為 750。",
        // EN: A1: Horizontal asymptote C = 2.
        "A1：水平漸近線 C = 2。",
        // EN: R1: Interpretation: as n grows, the fixed $300 is shared over more cups, so the average cost approaches (but never reaches) the $2 ingredient cost.
        "R1：詮釋：隨着 n 增大，固定的 $300 分攤到更多杯上，因此平均成本趨近（但永遠不會達到）$2 的材料成本。",
      ],
    },

    // ── t2-2-q033 · numeric · challenge · SL · SL 2.9, 2.5 · 4 marks
    "t2-2-q033": {
      // EN: <p>The graph of <span class="chem">y = a^x</span>, where <span class="chem">a &gt; 0</span>, passes through the point <span class="chem">(3/2, 8)</span>. The point <span class="chem">(k, 2)</span> lies on the graph of the inverse function. Find the value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">y = a^x</span> 的圖像（其中 <span class=\"chem\">a &gt; 0</span>）通過點 <span class=\"chem\">(3/2, 8)</span>。點 <span class=\"chem\">(k, 2)</span> 位於反函數的圖像上。求 (Find) <span class=\"chem\">k</span> 的值。</p>",
      hints: [
        // EN: Decode: two separate facts. First use the given point to find the base <span class="chem">a</span>. Then remember that a point <span class="chem">(p, q)</span> on an inverse graph corresponds to <span class="chem">(q, p)</span> on the original graph.
        "解碼：這裏有兩項獨立的資料。先用已知點求出底 <span class=\"chem\">a</span>。然後記住：反函數圖像上的點 <span class=\"chem\">(p, q)</span> 對應原圖像上的 <span class=\"chem\">(q, p)</span>。",
        // EN: Solve <span class="chem">a^{3/2} = 8</span> by raising both sides to the power <span class="chem">2/3</span>.
        "把兩邊同時取 <span class=\"chem\">2/3</span> 次冪，以解 <span class=\"chem\">a^{3/2} = 8</span>。",
        // EN: If <span class="chem">(k, 2)</span> is on the inverse, then <span class="chem">(2, k)</span> is on <span class="chem">y = a^x</span>.
        "若 <span class=\"chem\">(k, 2)</span> 在反函數的圖像上，則 <span class=\"chem\">(2, k)</span> 在 <span class=\"chem\">y = a^x</span> 上。",
      ],
      // EN: <p><strong>Decode:</strong> find the base from the point, then swap coordinates to move between the graph and its inverse.</p><p><span class="chem">a^{3/2} = 8 => a = 8^{2/3} = (8^{1/3})^2 = 4</span>. The inverse of <span class="chem">y = 4^x</span> is <span class="chem">y = log_4 x</span>. Since <span class="chem">(k, 2)</span> lies on it, <span class="chem">log_4 k = 2 => k = 4^2 = 16</span>. (Equivalently, <span class="chem">(2, k)</span> lies on <span class="chem">y = 4^x</span>, so <span class="chem">k = 16</span>.)</p>
      solution: "<p><strong>解碼：</strong>由已知點求出底，再互換坐標，在圖像與其反函數的圖像之間轉換。</p><p><span class=\"chem\">a^{3/2} = 8 => a = 8^{2/3} = (8^{1/3})^2 = 4</span>。<span class=\"chem\">y = 4^x</span> 的反函數是 <span class=\"chem\">y = log_4 x</span>。由於 <span class=\"chem\">(k, 2)</span> 在其上，故 <span class=\"chem\">log_4 k = 2 => k = 4^2 = 16</span>。（同樣地，<span class=\"chem\">(2, k)</span> 在 <span class=\"chem\">y = 4^x</span> 上，故 <span class=\"chem\">k = 16</span>。）</p>",
    },

    // ── t2-2-q034 · numeric · challenge · SL · SL 1.7, 2.10 · 5 marks
    "t2-2-q034": {
      // EN: <p>Solve the equation <span class="chem">log_3 x = log_9(x + 6)</span>.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">log_3 x = log_9(x + 6)</span>。</p>",
      hints: [
        // EN: Decode: the logarithms have different bases (<span class="chem">3</span> and <span class="chem">9 = 3^2</span>). Change them to the same base, solve the quadratic that appears, then check each root against the domain.
        "解碼：兩個對數的底不同（<span class=\"chem\">3</span> 與 <span class=\"chem\">9 = 3^2</span>）。把它們化為同一個底，解出所得的二次方程，再把每個根與定義域比較。",
        // EN: Change of base: <span class="chem">log_9(x + 6) = log_3(x + 6)/log_3 9 = (1/2) log_3(x + 6)</span>.
        "換底：<span class=\"chem\">log_9(x + 6) = log_3(x + 6)/log_3 9 = (1/2) log_3(x + 6)</span>。",
        // EN: You should reach <span class="chem">x^2 = x + 6</span>. Which root makes <span class="chem">log_3 x</span> undefined?
        "你應得到 <span class=\"chem\">x^2 = x + 6</span>。哪一個根會使 <span class=\"chem\">log_3 x</span> 沒有定義？",
      ],
      // EN: <p><strong>Decode:</strong> a "same base" problem in disguise, followed by a domain check (<span class="chem">x &gt; 0</span> and <span class="chem">x + 6 &gt; 0</span>).</p><p><span class="chem">log_9(x + 6) = (1/2) log_3(x + 6)</span>, so <span class="chem">2 log_3 x = log_3(x + 6) => log_3 x^2 = log_3(x + 6) => x^2 = x + 6 => (x - 3)(x + 2) = 0</span>. The root <span class="chem">x = -2</span> is rejected because <span class="chem">log_3(-2)</span> is undefined. So <span class="chem">x = 3</span>. Check: <span class="chem">log_3 3 = 1</span> and <span class="chem">log_9 9 = 1</span>.</p>
      solution: "<p><strong>解碼：</strong>這是一道經過偽裝的「同底」問題，之後須檢查定義域（<span class=\"chem\">x &gt; 0</span> 及 <span class=\"chem\">x + 6 &gt; 0</span>）。</p><p><span class=\"chem\">log_9(x + 6) = (1/2) log_3(x + 6)</span>，故 <span class=\"chem\">2 log_3 x = log_3(x + 6) => log_3 x^2 = log_3(x + 6) => x^2 = x + 6 => (x - 3)(x + 2) = 0</span>。由於 <span class=\"chem\">log_3(-2)</span> 沒有定義，根 <span class=\"chem\">x = -2</span> 須捨去。所以 <span class=\"chem\">x = 3</span>。驗算：<span class=\"chem\">log_3 3 = 1</span> 及 <span class=\"chem\">log_9 9 = 1</span>。</p>",
    },

    // ── t2-2-q035 · short · challenge · SL · SL 2.8 · 7 marks
    "t2-2-q035": {
      // EN: <p>A tank holds <span class="chem">50</span> litres of water in which <span class="chem">2</span> kg of salt is dissolved. Starting at <span class="chem">t = 0</span>, salt water containing <span class="chem">0.3</span> kg of salt per litre is pumped into the tank at <span class="chem">4</span> litres per minute. Nothing leaves the tank, and the mixture stays evenly mixed. The tank can hold at most <span class="chem">200</span> litres.<br>(a) Show that the concentration of salt, in kg per litre, after <span class="chem">t</span> minutes is <span class="chem">C(t) = (2 + 1.2t)/(50 + 4t)</span>. <strong>[2 marks]</strong><br>(b) Write down the equation of the horizontal asymptote of the graph of <span class="chem">C</span>, and explain its meaning in context. <strong>[2 marks]</strong><br>(c) A scientist claims that the concentration will reach <span class="chem">0.25</span> kg per litre before the tank overflows. Determine whether the claim is correct. <strong>[3 marks]</strong></p>
      stem: "<p>一個水缸盛有 <span class=\"chem\">50</span> 公升水，水中溶有 <span class=\"chem\">2</span> kg 鹽。由 <span class=\"chem\">t = 0</span> 開始，每公升含 <span class=\"chem\">0.3</span> kg 鹽的鹽水以每分鐘 <span class=\"chem\">4</span> 公升的速率泵入水缸。沒有液體流出水缸，而混合液一直保持均勻。水缸最多可盛 <span class=\"chem\">200</span> 公升。<br>(a) 證明 (Show that) <span class=\"chem\">t</span> 分鐘後鹽的濃度（以 kg 每公升為單位）為 <span class=\"chem\">C(t) = (2 + 1.2t)/(50 + 4t)</span>。<strong>[2 marks]</strong><br>(b) 寫出 (Write down) <span class=\"chem\">C</span> 的圖像的水平漸近線的方程，並就題目情境解釋 (explain) 其意義。<strong>[2 marks]</strong><br>(c) 一名科學家聲稱，在水缸滿瀉之前，濃度會達到每公升 <span class=\"chem\">0.25</span> kg。判斷 (Determine) 此說法是否正確。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: concentration = mass of salt ÷ volume of liquid, and both grow linearly with <span class="chem">t</span>. That is a rational function <span class="chem">(at + b)/(ct + d)</span>. The capacity of <span class="chem">200</span> litres is a hidden domain restriction.
        "解碼：濃度 = 鹽的質量 ÷ 液體的體積，而兩者都隨 <span class=\"chem\">t</span> 線性增長。這是一個有理函數 <span class=\"chem\">(at + b)/(ct + d)</span>。容量 <span class=\"chem\">200</span> 公升是一個隱藏的定義域限制。",
        // EN: Each minute <span class="chem">4</span> litres arrive, carrying <span class="chem">4 × 0.3 = 1.2</span> kg of salt.
        "每分鐘流入 <span class=\"chem\">4</span> 公升，帶來 <span class=\"chem\">4 × 0.3 = 1.2</span> kg 鹽。",
        // EN: For (c), compare two times: when the tank is full, and when <span class="chem">C(t) = 0.25</span>.
        "在 (c) 部中，比較兩個時間：水缸注滿的時間，以及 <span class=\"chem\">C(t) = 0.25</span> 的時間。",
      ],
      // EN: <p><strong>Decode:</strong> build a linear-over-linear model, read its asymptote, then test the claim against the domain <span class="chem">0 &lt;= t &lt;= 37.5</span> set by the tank capacity.</p><p>(a) After <span class="chem">t</span> minutes the salt is <span class="chem">2 + 0.3 × 4t = 2 + 1.2t</span> kg and the volume is <span class="chem">50 + 4t</span> L, so <span class="chem">C(t) = (2 + 1.2t)/(50 + 4t)</span>.<br>(b) Horizontal asymptote <span class="chem">C = 1.2/4 = 0.3</span>: the mixture becomes more and more like the incoming salt water.<br>(c) The tank is full when <span class="chem">50 + 4t = 200 => t = 37.5</span> min. Solving <span class="chem">C(t) = 0.25</span>: <span class="chem">2 + 1.2t = 0.25(50 + 4t) = 12.5 + t => 0.2t = 10.5 => t = 52.5</span> min. This is after the tank overflows (at <span class="chem">t = 37.5</span>, <span class="chem">C = 47/200 = 0.235</span>), so the claim is <strong>not</strong> correct.</p>
      solution: "<p><strong>解碼：</strong>建立「線性 ÷ 線性」模型，讀出其漸近線，再按水缸容量所定的定義域 <span class=\"chem\">0 &lt;= t &lt;= 37.5</span> 檢驗該說法。</p><p>(a) <span class=\"chem\">t</span> 分鐘後，鹽有 <span class=\"chem\">2 + 0.3 × 4t = 2 + 1.2t</span> kg，體積為 <span class=\"chem\">50 + 4t</span> L，故 <span class=\"chem\">C(t) = (2 + 1.2t)/(50 + 4t)</span>。<br>(b) 水平漸近線 <span class=\"chem\">C = 1.2/4 = 0.3</span>：混合液變得愈來愈像流入的鹽水。<br>(c) 水缸在 <span class=\"chem\">50 + 4t = 200 => t = 37.5</span> 分鐘時注滿。解 <span class=\"chem\">C(t) = 0.25</span>：<span class=\"chem\">2 + 1.2t = 0.25(50 + 4t) = 12.5 + t => 0.2t = 10.5 => t = 52.5</span> 分鐘。這是在水缸滿瀉之後（在 <span class=\"chem\">t = 37.5</span> 時，<span class=\"chem\">C = 47/200 = 0.235</span>），因此該說法<strong>不</strong>正確。</p>",
      // EN: <p>(a) Salt <span class="chem">2 + 0.3(4t) = 2 + 1.2t</span> kg in <span class="chem">50 + 4t</span> litres; (b) <span class="chem">C = 0.3</span>: in the long run the concentration approaches that of the incoming salt water; (c) not correct: <span class="chem">C = 0.25</span> needs <span class="chem">t = 52.5</span> min, but the tank is full at <span class="chem">t = 37.5</span> min (when <span class="chem">C = 0.235</span>).</p>
      answer: "<p>(a) 鹽 <span class=\"chem\">2 + 0.3(4t) = 2 + 1.2t</span> kg，在 <span class=\"chem\">50 + 4t</span> 公升中；(b) <span class=\"chem\">C = 0.3</span>：長遠而言，濃度趨近流入鹽水的濃度；(c) 不正確：<span class=\"chem\">C = 0.25</span> 需要 <span class=\"chem\">t = 52.5</span> 分鐘，但水缸在 <span class=\"chem\">t = 37.5</span> 分鐘時已注滿（此時 <span class=\"chem\">C = 0.235</span>）。</p>",
      markscheme: [
        // EN: M1: Salt after t minutes = 2 + 0.3 × 4t = 2 + 1.2t kg; volume = 50 + 4t litres.
        "M1：t 分鐘後的鹽 = 2 + 0.3 × 4t = 2 + 1.2t kg；體積 = 50 + 4t 公升。",
        // EN: A1: Concentration = salt ÷ volume. AG: C(t) = (2 + 1.2t)/(50 + 4t); the given line itself earns no mark.
        "A1：濃度 = 鹽 ÷ 體積。AG：C(t) = (2 + 1.2t)/(50 + 4t)；寫出題目已給的結果本身不得分。",
        // EN: A1: Horizontal asymptote C = 1.2/4 = 0.3.
        "A1：水平漸近線 C = 1.2/4 = 0.3。",
        // EN: R1: The concentration approaches (but does not reach) 0.3 kg/L, the concentration of the incoming salt water.
        "R1：濃度趨近（但不會達到）0.3 kg/L，即流入鹽水的濃度。",
        // EN: M1: Finds the time to fill: 50 + 4t = 200 ⇒ t = 37.5 minutes.
        "M1：求注滿所需時間：50 + 4t = 200 ⇒ t = 37.5 分鐘。",
        // EN: A1: Solves C(t) = 0.25: 2 + 1.2t = 12.5 + t ⇒ t = 52.5 minutes (or finds C(37.5) = 47/200 = 0.235).
        "A1：解 C(t) = 0.25：2 + 1.2t = 12.5 + t ⇒ t = 52.5 分鐘（或求得 C(37.5) = 47/200 = 0.235）。",
        // EN: R1: Since 52.5 > 37.5 (or 0.235 < 0.25), the tank overflows first, so the claim is not correct.
        "R1：由於 52.5 > 37.5（或 0.235 < 0.25），水缸先滿瀉，因此該說法不正確。",
      ],
    },

    // ── t2-2-q036 · numeric · exam · SL · SL 2.6, 2.7 · 3 marks
    "t2-2-q036": {
      // EN: <p>A ball is thrown upwards from a balcony. Its height above the ground, in metres, <span class="chem">t</span> seconds after it is thrown is modelled by <span class="chem">h(t) = -4.9t^2 + 12.5t + 1.6</span>, for <span class="chem">t &gt;= 0</span>. Find the time at which the ball hits the ground, giving your answer in seconds correct to 3 significant figures.</p>
      stem: "<p>從露台向上拋出一個球。拋出後 <span class=\"chem\">t</span> 秒，球離地面的高度（以米為單位）以 <span class=\"chem\">h(t) = -4.9t^2 + 12.5t + 1.6</span>（<span class=\"chem\">t &gt;= 0</span>）模擬。求 (Find) 球落到地面的時間，答案以秒為單位並準確至 3 位有效數字。</p>",
      hints: [
        // EN: The ball hits the ground when <span class="chem">h(t) = 0</span>. Use the GDC polynomial solver, or graph <span class="chem">h</span> and find its zero.
        "當 <span class=\"chem\">h(t) = 0</span> 時球落到地面。使用 GDC 的多項式求解功能，或繪畫 <span class=\"chem\">h</span> 的圖像並找出其零點。",
        // EN: You get two roots. One is negative; reject it because <span class="chem">t &gt;= 0</span>.
        "你會得到兩個根。其中一個為負數；由於 <span class=\"chem\">t &gt;= 0</span>，須把它捨去。",
      ],
      // EN: <p>Solving <span class="chem">-4.9t^2 + 12.5t + 1.6 = 0</span> on the GDC gives <span class="chem">t ≈ -0.122</span> or <span class="chem">t ≈ 2.6732</span>. Since <span class="chem">t &gt;= 0</span>, the ball lands at <span class="chem">t = 2.67</span> s (3 s.f.).</p>
      solution: "<p>用 GDC 解 <span class=\"chem\">-4.9t^2 + 12.5t + 1.6 = 0</span> 得 <span class=\"chem\">t ≈ -0.122</span> 或 <span class=\"chem\">t ≈ 2.6732</span>。由於 <span class=\"chem\">t &gt;= 0</span>，球於 <span class=\"chem\">t = 2.67</span> s（3 位有效數字）落地。</p>",
    },

    // ── t2-2-q037 · numeric · exam · SL · SL 2.7 · 3 marks
    "t2-2-q037": {
      // EN: <p>A rectangular vegetable garden is <span class="chem">3.5</span> m longer than it is wide. Its area is <span class="chem">42.6</span> m². Find the width of the garden, giving your answer in metres correct to 3 significant figures.</p>
      stem: "<p>一個長方形菜園的長度比闊度多 <span class=\"chem\">3.5</span> m，面積為 <span class=\"chem\">42.6</span> m²。求 (Find) 菜園的闊度，答案以米為單位並準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: let the width be <span class="chem">w</span>; then the length is <span class="chem">w + 3.5</span>. The area condition gives a quadratic equation in <span class="chem">w</span>.
        "解碼：設闊度為 <span class=\"chem\">w</span>，則長度為 <span class=\"chem\">w + 3.5</span>。面積條件給出一個關於 <span class=\"chem\">w</span> 的二次方程。",
        // EN: Solve <span class="chem">w^2 + 3.5w - 42.6 = 0</span> with the GDC and keep only the root that makes sense for a length.
        "用 GDC 解 <span class=\"chem\">w^2 + 3.5w - 42.6 = 0</span>，只保留對長度而言合理的根。",
      ],
      // EN: <p><span class="chem">w(w + 3.5) = 42.6 => w^2 + 3.5w - 42.6 = 0</span>. The GDC gives <span class="chem">w ≈ 5.0074</span> or <span class="chem">w ≈ -8.51</span>. A width must be positive, so <span class="chem">w = 5.01</span> m (3 s.f.). Note that <span class="chem">5.00</span> would be wrong: check <span class="chem">5 × 8.5 = 42.5 != 42.6</span>.</p>
      solution: "<p><span class=\"chem\">w(w + 3.5) = 42.6 => w^2 + 3.5w - 42.6 = 0</span>。GDC 給出 <span class=\"chem\">w ≈ 5.0074</span> 或 <span class=\"chem\">w ≈ -8.51</span>。闊度必須為正，故 <span class=\"chem\">w = 5.01</span> m（3 位有效數字）。注意 <span class=\"chem\">5.00</span> 是錯的：驗算 <span class=\"chem\">5 × 8.5 = 42.5 != 42.6</span>。</p>",
    },

    // ── t2-2-q038 · short · exam · SL · SL 2.6, 2.10 · 8 marks
    "t2-2-q038": {
      // EN: <p>The underside of a footbridge arch is modelled by <span class="chem">h(x) = ax^2 + bx + c</span>, where <span class="chem">h</span> is the height in metres above the water and <span class="chem">x</span> is the horizontal distance in metres from a marker post at the water&#8217;s edge. Three measurements are taken.</p><div class="table-scroll"><table class="data"><thead><tr><th scope="col"><span class="chem">x</span> (m)</th><td>0</td><td>4</td><td>10</td></tr></thead><tbody><tr><th scope="row"><span class="chem">h</span> (m)</th><td>1.2</td><td>6.8</td><td>6.0</td></tr></tbody></table></div><p>(a) Find the values of <span class="chem">a</span>, <span class="chem">b</span> and <span class="chem">c</span>. <strong>[3 marks]</strong><br>(b) Find the maximum height of the arch above the water. <strong>[2 marks]</strong><br>(c) A boat with a mast needs at least <span class="chem">5</span> m of headroom. Find the width of the part of the river, measured horizontally, in which the arch is at least <span class="chem">5</span> m above the water. <strong>[3 marks]</strong></p>
      stem: "<p>一座行人天橋拱的底面以 <span class=\"chem\">h(x) = ax^2 + bx + c</span> 模擬，其中 <span class=\"chem\">h</span> 為離水面的高度（以米為單位），<span class=\"chem\">x</span> 為與水邊標柱的水平距離（以米為單位）。現取得三個量度數據。</p><div class=\"table-scroll\"><table class=\"data\"><thead><tr><th scope=\"col\"><span class=\"chem\">x</span> (m)</th><td>0</td><td>4</td><td>10</td></tr></thead><tbody><tr><th scope=\"row\"><span class=\"chem\">h</span> (m)</th><td>1.2</td><td>6.8</td><td>6.0</td></tr></tbody></table></div><p>(a) 求 (Find) <span class=\"chem\">a</span>、<span class=\"chem\">b</span> 及 <span class=\"chem\">c</span> 的值。<strong>[3 marks]</strong><br>(b) 求 (Find) 拱離水面的最大高度。<strong>[2 marks]</strong><br>(c) 一艘有桅杆的船需要最少 <span class=\"chem\">5</span> m 的淨空高度。求 (Find) 拱離水面最少 <span class=\"chem\">5</span> m 的那部分河道的闊度（水平量度）。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: each data point gives one equation in <span class="chem">a, b, c</span>. The measurement at <span class="chem">x = 0</span> gives <span class="chem">c</span> straight away, so the other two points leave two linear equations in <span class="chem">a</span> and <span class="chem">b</span>.
        "解碼：每個數據點給出一條關於 <span class=\"chem\">a, b, c</span> 的方程。<span class=\"chem\">x = 0</span> 處的量度可直接得出 <span class=\"chem\">c</span>，因此其餘兩點給出兩條關於 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 的線性方程。",
        // EN: Keep the full GDC values of <span class="chem">a, b, c</span> stored for later parts; rounding them early changes the third figure.
        "把 GDC 中 <span class=\"chem\">a, b, c</span> 的完整數值儲存起來，供之後各部使用；過早捨入會改變第三位數字。",
        // EN: For (c), graph <span class="chem">y = h(x)</span> and <span class="chem">y = 5</span> and find both intersections. The width is the distance between them.
        "在 (c) 部中，繪畫 <span class=\"chem\">y = h(x)</span> 和 <span class=\"chem\">y = 5</span> 的圖像，並找出兩個交點。闊度就是兩者之間的距離。",
      ],
      // EN: <p>(a) <span class="chem">h(0) = c = 1.2</span>. The other two points give <span class="chem">16a + 4b + 1.2 = 6.8</span> and <span class="chem">100a + 10b + 1.2 = 6.0</span>, that is <span class="chem">4a + b = 1.4</span> and <span class="chem">10a + b = 0.48</span>. Subtracting: <span class="chem">6a = -0.92</span>, so <span class="chem">a = -0.153333... = -23/150</span> and <span class="chem">b = 1.4 - 4a = 2.013333... = 151/75</span>. So <span class="chem">a = -0.153</span>, <span class="chem">b = 2.01</span>, <span class="chem">c = 1.2</span>.<br>(b) The vertex is at <span class="chem">x = -b/(2a) ≈ 6.565</span>, and <span class="chem">h(6.565) ≈ 7.8090</span>, so the maximum height is <span class="chem">7.81</span> m.<br>(c) <span class="chem">h(x) = 5</span> at <span class="chem">x ≈ 2.2851</span> and <span class="chem">x ≈ 10.8453</span>. The arch is at least <span class="chem">5</span> m high between these, a width of <span class="chem">10.8453 - 2.2851 ≈ 8.56</span> m.</p>
      solution: "<p>(a) <span class=\"chem\">h(0) = c = 1.2</span>。其餘兩點給出 <span class=\"chem\">16a + 4b + 1.2 = 6.8</span> 及 <span class=\"chem\">100a + 10b + 1.2 = 6.0</span>，即 <span class=\"chem\">4a + b = 1.4</span> 及 <span class=\"chem\">10a + b = 0.48</span>。兩式相減：<span class=\"chem\">6a = -0.92</span>，故 <span class=\"chem\">a = -0.153333... = -23/150</span> 及 <span class=\"chem\">b = 1.4 - 4a = 2.013333... = 151/75</span>。所以 <span class=\"chem\">a = -0.153</span>，<span class=\"chem\">b = 2.01</span>，<span class=\"chem\">c = 1.2</span>。<br>(b) 頂點位於 <span class=\"chem\">x = -b/(2a) ≈ 6.565</span>，而 <span class=\"chem\">h(6.565) ≈ 7.8090</span>，故最大高度為 <span class=\"chem\">7.81</span> m。<br>(c) 在 <span class=\"chem\">x ≈ 2.2851</span> 及 <span class=\"chem\">x ≈ 10.8453</span> 時 <span class=\"chem\">h(x) = 5</span>。拱在兩者之間的高度最少為 <span class=\"chem\">5</span> m，闊度為 <span class=\"chem\">10.8453 - 2.2851 ≈ 8.56</span> m。</p>",
      // EN: <p>(a) <span class="chem">a = -0.153</span>, <span class="chem">b = 2.01</span>, <span class="chem">c = 1.2</span> (exactly <span class="chem">-23/150</span>, <span class="chem">151/75</span>, <span class="chem">6/5</span>); (b) <span class="chem">7.81</span> m (at <span class="chem">x ≈ 6.57</span>); (c) <span class="chem">8.56</span> m (from <span class="chem">x ≈ 2.29</span> to <span class="chem">x ≈ 10.8</span>).</p>
      answer: "<p>(a) <span class=\"chem\">a = -0.153</span>，<span class=\"chem\">b = 2.01</span>，<span class=\"chem\">c = 1.2</span>（準確值為 <span class=\"chem\">-23/150</span>，<span class=\"chem\">151/75</span>，<span class=\"chem\">6/5</span>）；(b) <span class=\"chem\">7.81</span> m（在 <span class=\"chem\">x ≈ 6.57</span> 處）；(c) <span class=\"chem\">8.56</span> m（由 <span class=\"chem\">x ≈ 2.29</span> 至 <span class=\"chem\">x ≈ 10.8</span>）。</p>",
      markscheme: [
        // EN: M1: Uses h(0) = 1.2 to get c = 1.2, and substitutes the other two points: 16a + 4b + 1.2 = 6.8 and 100a + 10b + 1.2 = 6.0.
        "M1：利用 h(0) = 1.2 得 c = 1.2，並代入其餘兩點：16a + 4b + 1.2 = 6.8 及 100a + 10b + 1.2 = 6.0。",
        // EN: A1: a = −0.153 (−23/150 = −0.15333…).
        "A1: a = −0.153 (−23/150 = −0.15333…).",
        // EN: A1: b = 2.01 (151/75 = 2.01333…) and c = 1.2.
        "A1：b = 2.01（151/75 = 2.01333…）及 c = 1.2。",
        // EN: M1: Uses the vertex x = −b/(2a) ≈ 6.57, or the GDC maximum.
        "M1：利用頂點 x = −b/(2a) ≈ 6.57，或 GDC 的最大值功能。",
        // EN: A1: Maximum height 7.81 m.
        "A1：最大高度 7.81 m。",
        // EN: M1: Solves h(x) = 5 (GDC intersection of y = h(x) and y = 5).
        "M1：解 h(x) = 5（以 GDC 求 y = h(x) 與 y = 5 的交點）。",
        // EN: A1: x ≈ 2.29 and x ≈ 10.8.
        "A1：x ≈ 2.29 及 x ≈ 10.8。",
        // EN: A1: Width 10.845 − 2.285 = 8.56 m.
        "A1：闊度 10.845 − 2.285 = 8.56 m。",
      ],
    },

    // ── t2-2-q039 · short · exam · SL · SL 2.7 · 3 marks
    "t2-2-q039": {
      // EN: <p>Solve the inequality <span class="chem">2.4x^2 - 3.1x - 5.6 &gt; 0</span>, giving the boundary values correct to 3 significant figures.</p>
      stem: "<p>解 (Solve) 不等式 <span class=\"chem\">2.4x^2 - 3.1x - 5.6 &gt; 0</span>，邊界值須準確至 3 位有效數字。</p>",
      hints: [
        // EN: Find where the quadratic equals zero first, using the GDC.
        "先用 GDC 找出二次式等於零之處。",
        // EN: The parabola opens upwards (<span class="chem">a = 2.4 &gt; 0</span>), so it is positive outside the two roots.
        "拋物線開口向上（<span class=\"chem\">a = 2.4 &gt; 0</span>），因此在兩根以外為正。",
      ],
      // EN: <p>The GDC gives the roots <span class="chem">x ≈ -1.0126</span> and <span class="chem">x ≈ 2.3043</span>. Since the leading coefficient is positive, the expression is positive outside the roots: <span class="chem">x &lt; -1.01</span> or <span class="chem">x &gt; 2.30</span>.</p>
      solution: "<p>GDC 給出兩根 <span class=\"chem\">x ≈ -1.0126</span> 及 <span class=\"chem\">x ≈ 2.3043</span>。由於首項係數為正，該式在兩根以外為正：<span class=\"chem\">x &lt; -1.01</span> 或 <span class=\"chem\">x &gt; 2.30</span>。</p>",
      // EN: <p><span class="chem">x &lt; -1.01</span> or <span class="chem">x &gt; 2.30</span></p>
      answer: "<p><span class=\"chem\">x &lt; -1.01</span> 或 <span class=\"chem\">x &gt; 2.30</span></p>",
      markscheme: [
        // EN: M1: Finds the roots of 2.4x² − 3.1x − 5.6 = 0 (GDC solver or quadratic formula).
        "M1：求 2.4x² − 3.1x − 5.6 = 0 的根（GDC 求解功能或二次公式）。",
        // EN: A1: Roots x ≈ −1.0126 and x ≈ 2.3043.
        "A1：兩根 x ≈ −1.0126 及 x ≈ 2.3043。",
        // EN: A1: x < −1.01 or x > 2.30 (outside the roots, strict inequalities).
        "A1：x < −1.01 或 x > 2.30（兩根以外，嚴格不等號）。",
      ],
    },

    // ── t2-2-q040 · numeric · exam · SL · SL 2.6 · 5 marks
    "t2-2-q040": {
      // EN: <p>A cinema finds that when the ticket price is <span class="chem">$8</span>, it sells <span class="chem">540</span> tickets a week, and when the price is <span class="chem">$14</span>, it sells <span class="chem">330</span> tickets a week. It models the number of tickets sold, <span class="chem">N</span>, as a linear function of the price <span class="chem">p</span> dollars. The weekly revenue is <span class="chem">R = pN</span>. Find the maximum weekly revenue predicted by the model, in dollars correct to 2 decimal places.</p>
      stem: "<p>一間戲院發現，當票價為 <span class=\"chem\">$8</span> 時，每星期售出 <span class=\"chem\">540</span> 張票；當票價為 <span class=\"chem\">$14</span> 時，每星期售出 <span class=\"chem\">330</span> 張票。戲院把售出的票數 <span class=\"chem\">N</span> 模擬為票價 <span class=\"chem\">p</span> 元的線性函數。每星期的收入為 <span class=\"chem\">R = pN</span>。求 (Find) 此模型所預測的最大每星期收入，答案以元為單位並準確至 2 位小數。</p>",
      hints: [
        // EN: Decode: two (price, tickets) data points give a straight line <span class="chem">N = mp + c</span>. Revenue is price times tickets, so <span class="chem">R</span> is a quadratic in <span class="chem">p</span>, and you need its maximum.
        "解碼：兩個（票價, 票數）數據點給出一條直線 <span class=\"chem\">N = mp + c</span>。收入 = 票價 × 票數，故 <span class=\"chem\">R</span> 是關於 <span class=\"chem\">p</span> 的二次式，你需要求其最大值。",
        // EN: The gradient is <span class="chem">(330 - 540)/(14 - 8) = -35</span>. Find <span class="chem">c</span>, then write <span class="chem">R(p) = p(c - 35p)</span>.
        "斜率為 <span class=\"chem\">(330 - 540)/(14 - 8) = -35</span>。求出 <span class=\"chem\">c</span>，然後寫出 <span class=\"chem\">R(p) = p(c - 35p)</span>。",
        // EN: Find the vertex of <span class="chem">R</span> with <span class="chem">p = -b/(2a)</span> or with the GDC maximum. Do not round <span class="chem">p</span> before you work out <span class="chem">R</span>.
        "以 <span class=\"chem\">p = -b/(2a)</span> 或 GDC 的最大值功能求 <span class=\"chem\">R</span> 的頂點。在計算 <span class=\"chem\">R</span> 之前不要把 <span class=\"chem\">p</span> 捨入。",
      ],
      // EN: <p><strong>Decode:</strong> linear demand from two points, then maximise a quadratic revenue.</p><p>Gradient <span class="chem">m = (330 - 540)/(14 - 8) = -35</span>, so <span class="chem">N = 540 - 35(p - 8) = 820 - 35p</span>. Then <span class="chem">R(p) = p(820 - 35p) = 820p - 35p^2</span>. The vertex is at <span class="chem">p = 820/70 ≈ 11.714</span>, and <span class="chem">R_{max} = 820^2/140 ≈ 4802.857</span>. The maximum weekly revenue is <span class="chem">$4802.86</span>.</p>
      solution: "<p><strong>解碼：</strong>由兩點得出線性需求，再求二次收入函數的最大值。</p><p>斜率 <span class=\"chem\">m = (330 - 540)/(14 - 8) = -35</span>，故 <span class=\"chem\">N = 540 - 35(p - 8) = 820 - 35p</span>。於是 <span class=\"chem\">R(p) = p(820 - 35p) = 820p - 35p^2</span>。頂點位於 <span class=\"chem\">p = 820/70 ≈ 11.714</span>，而 <span class=\"chem\">R_{max} = 820^2/140 ≈ 4802.857</span>。最大每星期收入為 <span class=\"chem\">$4802.86</span>。</p>",
    },

    // ── t2-2-q041 · short · challenge · SL · SL 2.6 · 6 marks
    "t2-2-q041": {
      // EN: <p>A player throws a ball towards a fence. The path of the ball is modelled by <span class="chem">h(x) = -0.045x^2 + 0.62x + 1.8</span>, where <span class="chem">h</span> is the height in metres and <span class="chem">x</span> is the horizontal distance in metres from the player, for <span class="chem">h &gt;= 0</span>.<br>(a) Find the maximum height reached by the ball. <strong>[2 marks]</strong><br>(b) The fence is <span class="chem">3.8</span> m tall and stands <span class="chem">9</span> m from the player. Determine whether the ball passes over the fence. <strong>[2 marks]</strong><br>(c) The fence is then taken down. Find the horizontal distance from the player to the point where the ball lands. <strong>[2 marks]</strong></p>
      stem: "<p>一名球員把球拋向一道圍欄。球的路徑以 <span class=\"chem\">h(x) = -0.045x^2 + 0.62x + 1.8</span> 模擬，其中 <span class=\"chem\">h</span> 為高度（以米為單位），<span class=\"chem\">x</span> 為與球員的水平距離（以米為單位），<span class=\"chem\">h &gt;= 0</span>。<br>(a) 求 (Find) 球所達到的最大高度。<strong>[2 marks]</strong><br>(b) 圍欄高 <span class=\"chem\">3.8</span> m，位於離球員 <span class=\"chem\">9</span> m 處。判斷 (Determine) 球是否越過圍欄。<strong>[2 marks]</strong><br>(c) 其後圍欄被拆除。求 (Find) 球員與球着地點之間的水平距離。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "passes over the fence" is about the height of the ball when it is above the fence (at <span class="chem">x = 9</span>), not about its maximum height. A maximum above <span class="chem">3.8</span> m does not prove anything.
        "解碼：「越過圍欄」關乎球在圍欄正上方（<span class=\"chem\">x = 9</span>）時的高度，而非其最大高度。最大高度高於 <span class=\"chem\">3.8</span> m 並不能證明甚麼。",
        // EN: For (a), the vertex is at <span class="chem">x = -b/(2a)</span>; or use the GDC maximum.
        "在 (a) 部中，頂點位於 <span class=\"chem\">x = -b/(2a)</span>；或使用 GDC 的最大值功能。",
        // EN: For (b), compare <span class="chem">h(9)</span> with <span class="chem">3.8</span>. For (c), solve <span class="chem">h(x) = 0</span> and keep the positive root.
        "在 (b) 部中，比較 <span class=\"chem\">h(9)</span> 與 <span class=\"chem\">3.8</span>。在 (c) 部中，解 <span class=\"chem\">h(x) = 0</span> 並保留正根。",
      ],
      // EN: <p><strong>Decode:</strong> (b) asks for the height at a given <span class="chem">x</span>, not the maximum height. The maximum (3.94 m) is above 3.8 m, but it happens at <span class="chem">x ≈ 6.89</span>, before the fence.</p><p>(a) <span class="chem">x = 0.62/(2 × 0.045) ≈ 6.889</span>, <span class="chem">h(6.889) ≈ 3.9356</span>, so the maximum height is <span class="chem">3.94</span> m.<br>(b) <span class="chem">h(9) = -0.045(81) + 0.62(9) + 1.8 = -3.645 + 5.58 + 1.8 = 3.735</span> m. This is less than <span class="chem">3.8</span> m, so the ball hits the fence and does not pass over it.<br>(c) <span class="chem">h(x) = 0</span> gives <span class="chem">x ≈ -2.46</span> or <span class="chem">x ≈ 16.24</span>. The ball lands <span class="chem">16.2</span> m from the player.</p>
      solution: "<p><strong>解碼：</strong>(b) 部問的是在給定 <span class=\"chem\">x</span> 處的高度，而非最大高度。最大高度 (3.94 m) 高於 3.8 m，但它出現在 <span class=\"chem\">x ≈ 6.89</span>，即圍欄之前。</p><p>(a) <span class=\"chem\">x = 0.62/(2 × 0.045) ≈ 6.889</span>，<span class=\"chem\">h(6.889) ≈ 3.9356</span>，故最大高度為 <span class=\"chem\">3.94</span> m。<br>(b) <span class=\"chem\">h(9) = -0.045(81) + 0.62(9) + 1.8 = -3.645 + 5.58 + 1.8 = 3.735</span> m。這小於 <span class=\"chem\">3.8</span> m，因此球撞到圍欄，沒有越過。<br>(c) <span class=\"chem\">h(x) = 0</span> 給出 <span class=\"chem\">x ≈ -2.46</span> 或 <span class=\"chem\">x ≈ 16.24</span>。球在離球員 <span class=\"chem\">16.2</span> m 處着地。</p>",
      // EN: <p>(a) <span class="chem">3.94</span> m; (b) <span class="chem">h(9) = 3.735 &lt; 3.8</span>, so the ball does <strong>not</strong> pass over the fence (it hits it); (c) <span class="chem">16.2</span> m.</p>
      answer: "<p>(a) <span class=\"chem\">3.94</span> m；(b) <span class=\"chem\">h(9) = 3.735 &lt; 3.8</span>，故球<strong>沒有</strong>越過圍欄（球撞到圍欄）；(c) <span class=\"chem\">16.2</span> m。</p>",
      markscheme: [
        // EN: M1: Uses x = −b/(2a) = 0.62/0.09 ≈ 6.89, or the GDC maximum.
        "M1：利用 x = −b/(2a) = 0.62/0.09 ≈ 6.89，或 GDC 的最大值功能。",
        // EN: A1: Maximum height 3.94 m (3.9356…).
        "A1：最大高度 3.94 m (3.9356…)。",
        // EN: M1: Evaluates the height at the fence: h(9) = 3.735.
        "M1：計算在圍欄處的高度：h(9) = 3.735。",
        // EN: R1: Since 3.735 < 3.8, the ball does not pass over the fence.
        "R1：由於 3.735 < 3.8，球沒有越過圍欄。",
        // EN: M1: Solves h(x) = 0 and rejects the negative root (x ≈ −2.46).
        "M1：解 h(x) = 0 並捨去負根（x ≈ −2.46）。",
        // EN: A1: x = 16.2 m (16.240…).
        "A1: x = 16.2 m (16.240…).",
      ],
    },

    // ── t2-2-q042 · numeric · challenge · SL · SL 2.6 · 5 marks
    "t2-2-q042": {
      // EN: <p>A road tunnel has a parabolic cross-section. At road level the tunnel is <span class="chem">18.4</span> m wide, and its highest point is <span class="chem">7.5</span> m above the centre of the road. A truck <span class="chem">3.2</span> m wide drives exactly along the centre of the road. Safety rules require at least <span class="chem">0.3</span> m of clearance between the top corners of the truck and the tunnel roof, measured vertically. Find the maximum height of the truck allowed by these rules, in metres correct to 3 significant figures.</p>
      stem: "<p>一條行車隧道的橫截面呈拋物線形。在路面水平，隧道闊 <span class=\"chem\">18.4</span> m，其最高點位於路面中央上方 <span class=\"chem\">7.5</span> m。一輛闊 <span class=\"chem\">3.2</span> m 的貨車正好沿路面中央行駛。安全規定要求貨車頂部的角與隧道頂之間有最少 <span class=\"chem\">0.3</span> m 的鉛垂淨空。求 (Find) 這些規定所容許的貨車最大高度，答案以米為單位並準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: choose axes yourself. Put the origin on the road at the centre of the tunnel, so the roof is <span class="chem">h(x) = 7.5 - kx^2</span> and the feet are at <span class="chem">x = +-9.2</span>. The truck is centred, so its top corners are at <span class="chem">x = +-1.6</span>, not at <span class="chem">x = 3.2</span>.
        "解碼：自行選取坐標軸。把原點設在隧道中央的路面上，則隧道頂為 <span class=\"chem\">h(x) = 7.5 - kx^2</span>，兩端底部位於 <span class=\"chem\">x = +-9.2</span>。貨車位於中央，因此其頂部的角位於 <span class=\"chem\">x = +-1.6</span>，而非 <span class=\"chem\">x = 3.2</span>。",
        // EN: Use <span class="chem">h(9.2) = 0</span> to find <span class="chem">k</span>.
        "利用 <span class=\"chem\">h(9.2) = 0</span> 求 <span class=\"chem\">k</span>。",
        // EN: Find the roof height at <span class="chem">x = 1.6</span>, then subtract the <span class="chem">0.3</span> m clearance.
        "求在 <span class=\"chem\">x = 1.6</span> 處隧道頂的高度，然後減去 <span class=\"chem\">0.3</span> m 的淨空。",
      ],
      // EN: <p><strong>Decode:</strong> set up a symmetric model; a centred truck of width <span class="chem">3.2</span> m has corners <span class="chem">1.6</span> m either side of the centre; "clearance" means subtract <span class="chem">0.3</span> m.</p><p>With the origin at the centre of the road, <span class="chem">h(x) = 7.5 - kx^2</span>. Since <span class="chem">h(9.2) = 0</span>, <span class="chem">k = 7.5/9.2^2 = 7.5/84.64 ≈ 0.08861</span>. At the corners, <span class="chem">h(1.6) = 7.5 - 0.08861 × 2.56 ≈ 7.2732</span> m. The maximum truck height is <span class="chem">7.2732 - 0.3 ≈ 6.97</span> m.</p>
      solution: "<p><strong>解碼：</strong>建立一個對稱模型；位於中央、闊 <span class=\"chem\">3.2</span> m 的貨車，其角位於中央兩旁各 <span class=\"chem\">1.6</span> m 處；「淨空」即減去 <span class=\"chem\">0.3</span> m。</p><p>以路面中央為原點，<span class=\"chem\">h(x) = 7.5 - kx^2</span>。由於 <span class=\"chem\">h(9.2) = 0</span>，<span class=\"chem\">k = 7.5/9.2^2 = 7.5/84.64 ≈ 0.08861</span>。在角的位置，<span class=\"chem\">h(1.6) = 7.5 - 0.08861 × 2.56 ≈ 7.2732</span> m。貨車的最大高度為 <span class=\"chem\">7.2732 - 0.3 ≈ 6.97</span> m。</p>",
    },

    // ── t2-2-q043 · short · challenge · SL · SL 2.6, 2.7 · 8 marks
    "t2-2-q043": {
      // EN: <p>A workshop makes garden chairs. Its weekly profit is modelled by <span class="chem">P(x) = -0.8x^2 + 46x - 380</span>, where <span class="chem">P</span> is the profit in <strong>thousands</strong> of dollars and <span class="chem">x</span> is the number of chairs made in <strong>hundreds</strong>, for <span class="chem">0 &lt;= x &lt;= 55</span>.<br>(a) Find the two values of <span class="chem">x</span> at which the workshop breaks even. <strong>[2 marks]</strong><br>(b) Find the maximum weekly profit in dollars, and the number of chairs needed to earn it. <strong>[3 marks]</strong><br>(c) The owners want a weekly profit of at least <span class="chem">$200 000</span>. Find the least and greatest number of chairs they can make in a week to achieve this. <strong>[3 marks]</strong></p>
      stem: "<p>一間工場製造花園椅。其每星期的利潤以 <span class=\"chem\">P(x) = -0.8x^2 + 46x - 380</span> 模擬，其中 <span class=\"chem\">P</span> 為利潤（以<strong>千</strong>元為單位），<span class=\"chem\">x</span> 為製造的椅子數目（以<strong>百</strong>張為單位），<span class=\"chem\">0 &lt;= x &lt;= 55</span>。<br>(a) 求 (Find) 使工場收支平衡的兩個 <span class=\"chem\">x</span> 值。<strong>[2 marks]</strong><br>(b) 求 (Find) 以元為單位的最大每星期利潤，以及賺取該利潤所需的椅子數目。<strong>[3 marks]</strong><br>(c) 東主希望每星期利潤最少為 <span class=\"chem\">$200 000</span>。求 (Find) 為達到此目標，每星期可製造的椅子的最少及最多數目。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: watch the units. <span class="chem">P</span> is in thousands of dollars and <span class="chem">x</span> in hundreds of chairs, so "$200 000" means <span class="chem">P = 200</span>, and a value such as <span class="chem">x = 18.67</span> means <span class="chem">1867.2</span> chairs. Chairs come in whole numbers.
        "解碼：留意單位。<span class=\"chem\">P</span> 以千元為單位，<span class=\"chem\">x</span> 以百張椅子為單位，因此「$200 000」即 <span class=\"chem\">P = 200</span>，而像 <span class=\"chem\">x = 18.67</span> 這樣的值即 <span class=\"chem\">1867.2</span> 張椅子。椅子的數目是整數。",
        // EN: "Breaks even" means zero profit: solve <span class="chem">P(x) = 0</span>.
        "「收支平衡」即利潤為零：解 <span class=\"chem\">P(x) = 0</span>。",
        // EN: For (c), solve <span class="chem">P(x) = 200</span> with the GDC. The parabola opens downwards, so <span class="chem">P &gt;= 200</span> between the roots. Then round inwards to whole chairs.
        "在 (c) 部中，用 GDC 解 <span class=\"chem\">P(x) = 200</span>。拋物線開口向下，因此在兩根之間 <span class=\"chem\">P &gt;= 200</span>。然後向內捨入至整數張椅子。",
      ],
      // EN: <p><strong>Decode:</strong> convert both units before and after using the model, and remember that the number of chairs is a whole number.</p><p>(a) <span class="chem">-0.8x^2 + 46x - 380 = 0 => x = 10</span> or <span class="chem">x = 47.5</span>.<br>(b) The vertex is at <span class="chem">x = -46/(2 × (-0.8)) = 28.75</span>, with <span class="chem">P(28.75) = 281.25</span>. So the maximum profit is <span class="chem">$281 250</span>, from <span class="chem">2875</span> chairs.<br>(c) <span class="chem">P(x) &gt;= 200 => -0.8x^2 + 46x - 580 &gt;= 0</span>. The GDC gives roots <span class="chem">x ≈ 18.672</span> and <span class="chem">x ≈ 38.828</span>, and the profit is at least <span class="chem">200</span> between them. In chairs: <span class="chem">1867.2 &lt;= n &lt;= 3882.8</span>, so the least number is <span class="chem">1868</span> and the greatest is <span class="chem">3882</span>.</p>
      solution: "<p><strong>解碼：</strong>使用模型前後都要轉換單位，並記住椅子的數目是整數。</p><p>(a) <span class=\"chem\">-0.8x^2 + 46x - 380 = 0 => x = 10</span> 或 <span class=\"chem\">x = 47.5</span>。<br>(b) 頂點位於 <span class=\"chem\">x = -46/(2 × (-0.8)) = 28.75</span>，而 <span class=\"chem\">P(28.75) = 281.25</span>。所以最大利潤為 <span class=\"chem\">$281 250</span>，須製造 <span class=\"chem\">2875</span> 張椅子。<br>(c) <span class=\"chem\">P(x) &gt;= 200 => -0.8x^2 + 46x - 580 &gt;= 0</span>。GDC 給出兩根 <span class=\"chem\">x ≈ 18.672</span> 及 <span class=\"chem\">x ≈ 38.828</span>，而利潤在兩者之間最少為 <span class=\"chem\">200</span>。以椅子數目表示：<span class=\"chem\">1867.2 &lt;= n &lt;= 3882.8</span>，故最少數目為 <span class=\"chem\">1868</span>，最多數目為 <span class=\"chem\">3882</span>。</p>",
      // EN: <p>(a) <span class="chem">x = 10</span> and <span class="chem">x = 47.5</span>; (b) <span class="chem">$281 250</span> from <span class="chem">2875</span> chairs; (c) from <span class="chem">1868</span> to <span class="chem">3882</span> chairs.</p>
      answer: "<p>(a) <span class=\"chem\">x = 10</span> 及 <span class=\"chem\">x = 47.5</span>；(b) <span class=\"chem\">$281 250</span>，須製造 <span class=\"chem\">2875</span> 張椅子；(c) 由 <span class=\"chem\">1868</span> 至 <span class=\"chem\">3882</span> 張椅子。</p>",
      markscheme: [
        // EN: M1: Solves P(x) = 0 (GDC or formula).
        "M1：解 P(x) = 0（GDC 或公式）。",
        // EN: A1: x = 10 and x = 47.5 (1000 and 4750 chairs).
        "A1：x = 10 及 x = 47.5（1000 及 4750 張椅子）。",
        // EN: M1: Finds the vertex x = 46/1.6 = 28.75 (or GDC maximum).
        "M1：求頂點 x = 46/1.6 = 28.75（或 GDC 的最大值功能）。",
        // EN: A1: Maximum profit P = 281.25, i.e. $281 250.
        "A1：最大利潤 P = 281.25，即 $281 250。",
        // EN: A1: 2875 chairs.
        "A1：2875 張椅子。",
        // EN: M1: Sets P(x) ≥ 200 (profit in thousands) and solves −0.8x² + 46x − 580 = 0.
        "M1：令 P(x) ≥ 200（利潤以千元為單位），並解 −0.8x² + 46x − 580 = 0。",
        // EN: A1: x ≈ 18.672 and x ≈ 38.828.
        "A1：x ≈ 18.672 及 x ≈ 38.828。",
        // EN: A1: Converts to whole chairs: least 1868, greatest 3882.
        "A1：轉換為整數張椅子：最少 1868，最多 3882。",
      ],
    },

    // ── t2-2-q044 · numeric · exam · SL · SL 2.9 · 5 marks
    "t2-2-q044": {
      // EN: <p>A cup of tea is left to cool in a room kept at <span class="chem">20</span> °C. Its temperature <span class="chem">t</span> minutes later is modelled by <span class="chem">T(t) = 20 + A e^{-kt}</span>. The tea is at <span class="chem">88</span> °C when <span class="chem">t = 0</span> and at <span class="chem">61</span> °C when <span class="chem">t = 6</span>. Find the time it takes for the tea to cool to <span class="chem">35</span> °C, in minutes correct to 3 significant figures.</p>
      stem: "<p>一杯茶放在保持 <span class=\"chem\">20</span> °C 的房間內冷卻。<span class=\"chem\">t</span> 分鐘後，茶的溫度以 <span class=\"chem\">T(t) = 20 + A e^{-kt}</span> 模擬。當 <span class=\"chem\">t = 0</span> 時茶的溫度為 <span class=\"chem\">88</span> °C，當 <span class=\"chem\">t = 6</span> 時為 <span class=\"chem\">61</span> °C。求 (Find) 茶冷卻至 <span class=\"chem\">35</span> °C 所需的時間，答案以分鐘為單位並準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: two unknowns, two data points. <span class="chem">t = 0</span> gives <span class="chem">A</span> at once (since <span class="chem">e^0 = 1</span>); <span class="chem">t = 6</span> then gives <span class="chem">k</span>.
        "解碼：兩個未知數，兩個數據點。<span class=\"chem\">t = 0</span> 立即給出 <span class=\"chem\">A</span>（因為 <span class=\"chem\">e^0 = 1</span>）；然後 <span class=\"chem\">t = 6</span> 給出 <span class=\"chem\">k</span>。",
        // EN: You should find <span class="chem">A = 68</span> and <span class="chem">e^{-6k} = 41/68</span>.
        "你應得到 <span class=\"chem\">A = 68</span> 及 <span class=\"chem\">e^{-6k} = 41/68</span>。",
        // EN: Solve <span class="chem">20 + 68 e^{-kt} = 35</span> using logs, or graph <span class="chem">y = T(t)</span> and <span class="chem">y = 35</span>.
        "用對數解 <span class=\"chem\">20 + 68 e^{-kt} = 35</span>，或繪畫 <span class=\"chem\">y = T(t)</span> 和 <span class=\"chem\">y = 35</span> 的圖像。",
      ],
      // EN: <p><span class="chem">T(0) = 20 + A = 88 => A = 68</span>. Then <span class="chem">20 + 68 e^{-6k} = 61 => e^{-6k} = 41/68 => k = (1/6) ln(68/41) ≈ 0.084323</span>. For <span class="chem">T = 35</span>: <span class="chem">68 e^{-kt} = 15 => t = ln(68/15)/k ≈ 17.925</span>, so <span class="chem">t = 17.9</span> minutes.</p>
      solution: "<p><span class=\"chem\">T(0) = 20 + A = 88 => A = 68</span>。然後 <span class=\"chem\">20 + 68 e^{-6k} = 61 => e^{-6k} = 41/68 => k = (1/6) ln(68/41) ≈ 0.084323</span>。當 <span class=\"chem\">T = 35</span> 時：<span class=\"chem\">68 e^{-kt} = 15 => t = ln(68/15)/k ≈ 17.925</span>，故 <span class=\"chem\">t = 17.9</span> 分鐘。</p>",
    },

    // ── t2-2-q045 · numeric · challenge · SL · SL 2.9 · 5 marks
    "t2-2-q045": {
      // EN: <p>The number of wild ponies in a national park is counted on 1 January each year. The count was <span class="chem">3400</span> in 2015 and <span class="chem">4150</span> in 2020. The rangers model the count with <span class="chem">P = 3400 b^t</span>, where <span class="chem">t</span> is the number of years after 2015. Use the model to find the first year in which the count is greater than <span class="chem">6000</span>.</p>
      stem: "<p>某國家公園每年 1 月 1 日點算野馬的數目。2015 年的數目為 <span class=\"chem\">3400</span>，2020 年為 <span class=\"chem\">4150</span>。護理員以 <span class=\"chem\">P = 3400 b^t</span> 模擬該數目，其中 <span class=\"chem\">t</span> 為 2015 年後的年數。利用此模型，求 (Find) 數目首次大於 <span class=\"chem\">6000</span> 的年份。</p>",
      hints: [
        // EN: Decode: the 2020 count fixes the growth factor <span class="chem">b</span>; then solve <span class="chem">P &gt; 6000</span> for <span class="chem">t</span>. The question asks for a calendar year, and counts happen only at whole values of <span class="chem">t</span>.
        "解碼：2020 年的數目決定增長因子 <span class=\"chem\">b</span>；然後就 <span class=\"chem\">t</span> 解 <span class=\"chem\">P &gt; 6000</span>。題目問的是公曆年份，而點算只在 <span class=\"chem\">t</span> 為整數時進行。",
        // EN: <span class="chem">3400 b^5 = 4150 => b = (4150/3400)^{1/5} ≈ 1.04067</span>.
        "<span class=\"chem\">3400 b^5 = 4150 => b = (4150/3400)^{1/5} ≈ 1.04067</span>.",
        // EN: Solving <span class="chem">3400 b^t = 6000</span> gives a non-integer <span class="chem">t</span>. The count first exceeds 6000 at the next whole <span class="chem">t</span>; check <span class="chem">P</span> at the integers on either side.
        "解 <span class=\"chem\">3400 b^t = 6000</span> 得出一個非整數的 <span class=\"chem\">t</span>。數目在下一個整數 <span class=\"chem\">t</span> 時首次超過 6000；檢查兩旁整數處的 <span class=\"chem\">P</span>。",
      ],
      // EN: <p><strong>Decode:</strong> fit <span class="chem">b</span> from the second data point, solve the inequality, then turn <span class="chem">t</span> into a whole year.</p><p><span class="chem">b^5 = 4150/3400 => b ≈ 1.040672</span>. <span class="chem">3400 b^t = 6000 => t = ln(6000/3400)/ln b ≈ 14.25</span>. Check: <span class="chem">P(14) ≈ 5941 &lt; 6000</span> and <span class="chem">P(15) ≈ 6183 &gt; 6000</span>. So the first count above 6000 is at <span class="chem">t = 15</span>, in the year <span class="chem">2030</span>.</p>
      solution: "<p><strong>解碼：</strong>由第二個數據點求出 <span class=\"chem\">b</span>，解不等式，然後把 <span class=\"chem\">t</span> 轉為整數年份。</p><p><span class=\"chem\">b^5 = 4150/3400 => b ≈ 1.040672</span>。<span class=\"chem\">3400 b^t = 6000 => t = ln(6000/3400)/ln b ≈ 14.25</span>。驗算：<span class=\"chem\">P(14) ≈ 5941 &lt; 6000</span> 及 <span class=\"chem\">P(15) ≈ 6183 &gt; 6000</span>。所以首次超過 6000 的點算是在 <span class=\"chem\">t = 15</span>，即 <span class=\"chem\">2030</span> 年。</p>",
    },

    // ── t2-2-q046 · numeric · challenge · SL · SL 2.9 · 4 marks
    "t2-2-q046": {
      // EN: <p>After a single dose, a patient's body removes <span class="chem">30%</span> of a drug every <span class="chem">4</span> hours: in any 4-hour period, the amount present at the start falls by 30%. Assuming the amount decreases continuously according to this exponential pattern, find how long after the dose the amount first falls below <span class="chem">10%</span> of the original dose. Give your answer in hours correct to 3 significant figures.</p>
      stem: "<p>服用單一劑量後，病人的身體每 <span class=\"chem\">4</span> 小時清除 <span class=\"chem\">30%</span> 的藥物：在任何 4 小時期間內，期初的藥量會減少 30%。假設藥量按此指數模式連續減少，求 (Find) 服藥後多久藥量首次低於原劑量的 <span class=\"chem\">10%</span>。答案以小時為單位並準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: "removes 30%" means <span class="chem">70%</span> remains, so the growth factor for one 4-hour period is <span class="chem">0.7</span>. The model is <span class="chem">M(t) = M_0 (0.7)^{t/4}</span>. The size of the dose is not needed, because you compare with a percentage of it.
        "解碼：「清除 30%」即餘下 <span class=\"chem\">70%</span>，因此每 4 小時期間的增長因子為 <span class=\"chem\">0.7</span>。模型為 <span class=\"chem\">M(t) = M_0 (0.7)^{t/4}</span>。不需要知道劑量的大小，因為你是與它的百分比作比較。",
        // EN: Solve <span class="chem">(0.7)^{t/4} = 0.1</span>, by logs or by GDC intersection.
        "用對數或 GDC 求交點，解 <span class=\"chem\">(0.7)^{t/4} = 0.1</span>。",
      ],
      // EN: <p><strong>Decode:</strong> a 30% decrease per 4 hours is a factor of <span class="chem">0.7</span> per 4 hours; "10% of the dose" means <span class="chem">M = 0.1 M_0</span>, so <span class="chem">M_0</span> cancels.</p><p><span class="chem">M_0 (0.7)^{t/4} = 0.1 M_0 => (t/4) ln 0.7 = ln 0.1 => t = 4 ln 0.1/ln 0.7 ≈ 25.82</span>. So the amount first falls below 10% after about <span class="chem">25.8</span> hours.</p>
      solution: "<p><strong>解碼：</strong>每 4 小時減少 30% 即每 4 小時乘以因子 <span class=\"chem\">0.7</span>；「劑量的 10%」即 <span class=\"chem\">M = 0.1 M_0</span>，因此 <span class=\"chem\">M_0</span> 可約去。</p><p><span class=\"chem\">M_0 (0.7)^{t/4} = 0.1 M_0 => (t/4) ln 0.7 = ln 0.1 => t = 4 ln 0.1/ln 0.7 ≈ 25.82</span>。所以藥量約在 <span class=\"chem\">25.8</span> 小時後首次低於 10%。</p>",
    },

    // ── t2-2-q047 · numeric · exam · SL · SL 2.9 · 4 marks
    "t2-2-q047": {
      // EN: <p>The loudness <span class="chem">L</span> decibels of a sound of intensity <span class="chem">I</span> (in watts per square metre) is given by <span class="chem">L = 10 log_{10}(I/10^{-12})</span>. A rock concert has a loudness of <span class="chem">108</span> dB and a busy street has a loudness of <span class="chem">74</span> dB. Find how many times greater the intensity of the concert is than the intensity of the street, correct to 3 significant figures.</p>
      stem: "<p>強度為 <span class=\"chem\">I</span>（以瓦特每平方米為單位）的聲音，其響度 <span class=\"chem\">L</span> 分貝由 <span class=\"chem\">L = 10 log_{10}(I/10^{-12})</span> 給出。一場搖滾音樂會的響度為 <span class=\"chem\">108</span> dB，一條繁忙街道的響度為 <span class=\"chem\">74</span> dB。求 (Find) 音樂會的強度是街道強度的多少倍，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: you need the ratio <span class="chem">I_{concert}/I_{street}</span>, not the difference in decibels.
        "解碼：你需要的是比 <span class=\"chem\">I_{concert}/I_{street}</span>，而不是分貝的差。",
        // EN: Make <span class="chem">I</span> the subject: <span class="chem">I = 10^{-12} × 10^{L/10}</span>. Divide one intensity by the other; the <span class="chem">10^{-12}</span> cancels.
        "以 <span class=\"chem\">I</span> 為主項：<span class=\"chem\">I = 10^{-12} × 10^{L/10}</span>。把一個強度除以另一個；<span class=\"chem\">10^{-12}</span> 會約去。",
      ],
      // EN: <p><span class="chem">L = 10 log_{10}(I/10^{-12}) => I = 10^{-12} × 10^{L/10}</span>. So <span class="chem">I_{concert}/I_{street} = 10^{10.8}/10^{7.4} = 10^{3.4} ≈ 2511.9</span>. The concert is about <span class="chem">2510</span> times as intense.</p>
      solution: "<p><span class=\"chem\">L = 10 log_{10}(I/10^{-12}) => I = 10^{-12} × 10^{L/10}</span>。所以 <span class=\"chem\">I_{concert}/I_{street} = 10^{10.8}/10^{7.4} = 10^{3.4} ≈ 2511.9</span>。音樂會的強度約為 <span class=\"chem\">2510</span> 倍。</p>",
    },

    // ── t2-2-q048 · numeric · exam · SL · SL 2.9 · 5 marks
    "t2-2-q048": {
      // EN: <p>A phone battery is charged from empty. Its charge, as a percentage of full charge, <span class="chem">t</span> minutes after charging starts is modelled by <span class="chem">C(t) = 100(1 - e^{-kt})</span>. The battery reaches <span class="chem">60%</span> after <span class="chem">25</span> minutes. Find how many <strong>more</strong> minutes it takes to go from <span class="chem">60%</span> to <span class="chem">95%</span>, correct to 3 significant figures.</p>
      stem: "<p>一部手機的電池由完全沒電開始充電。開始充電 <span class=\"chem\">t</span> 分鐘後，其電量（佔滿電的百分率）以 <span class=\"chem\">C(t) = 100(1 - e^{-kt})</span> 模擬。電池在 <span class=\"chem\">25</span> 分鐘後達到 <span class=\"chem\">60%</span>。求 (Find) 由 <span class=\"chem\">60%</span> 充至 <span class=\"chem\">95%</span> 還<strong>額外</strong>需要多少分鐘，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: use the 25-minute data point to find <span class="chem">k</span>, find the time at which <span class="chem">C = 95</span>, then subtract <span class="chem">25</span>: the question asks for the extra time.
        "解碼：利用 25 分鐘的數據點求 <span class=\"chem\">k</span>，求出 <span class=\"chem\">C = 95</span> 的時間，然後減去 <span class=\"chem\">25</span>：題目問的是額外的時間。",
        // EN: <span class="chem">100(1 - e^{-25k}) = 60 => e^{-25k} = 0.4</span>.
        "<span class=\"chem\">100(1 - e^{-25k}) = 60 => e^{-25k} = 0.4</span>.",
        // EN: For <span class="chem">95%</span>: <span class="chem">e^{-kt} = 0.05</span>.
        "對於 <span class=\"chem\">95%</span>：<span class=\"chem\">e^{-kt} = 0.05</span>。",
      ],
      // EN: <p><span class="chem">e^{-25k} = 0.4 => k = -ln(0.4)/25 ≈ 0.036652</span>. For <span class="chem">C = 95</span>: <span class="chem">e^{-kt} = 0.05 => t = -ln(0.05)/k ≈ 81.735</span> minutes. The extra time is <span class="chem">81.735 - 25 ≈ 56.7</span> minutes.</p>
      solution: "<p><span class=\"chem\">e^{-25k} = 0.4 => k = -ln(0.4)/25 ≈ 0.036652</span>。對於 <span class=\"chem\">C = 95</span>：<span class=\"chem\">e^{-kt} = 0.05 => t = -ln(0.05)/k ≈ 81.735</span> 分鐘。額外的時間為 <span class=\"chem\">81.735 - 25 ≈ 56.7</span> 分鐘。</p>",
    },

    // ── t2-2-q049 · numeric · exam · SL · SL 2.9 · 4 marks
    "t2-2-q049": {
      // EN: <p>The height <span class="chem">h</span> cm of a seedling <span class="chem">x</span> weeks after planting is modelled by <span class="chem">h(x) = a ln x + b</span>, for <span class="chem">x &gt;= 1</span>. The seedling is <span class="chem">5.1</span> cm tall after 2 weeks and <span class="chem">8.7</span> cm tall after 9 weeks. Find the value of <span class="chem">a</span>, correct to 3 significant figures.</p>
      stem: "<p>一株幼苗在種植 <span class=\"chem\">x</span> 星期後的高度 <span class=\"chem\">h</span> cm 以 <span class=\"chem\">h(x) = a ln x + b</span>（<span class=\"chem\">x &gt;= 1</span>）模擬。幼苗在 2 星期後高 <span class=\"chem\">5.1</span> cm，在 9 星期後高 <span class=\"chem\">8.7</span> cm。求 (Find) <span class=\"chem\">a</span> 的值，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Each data point gives a linear equation in <span class="chem">a</span> and <span class="chem">b</span>: <span class="chem">a ln 2 + b = 5.1</span> and <span class="chem">a ln 9 + b = 8.7</span>.
        "每個數據點給出一條關於 <span class=\"chem\">a</span> 和 <span class=\"chem\">b</span> 的線性方程：<span class=\"chem\">a ln 2 + b = 5.1</span> 及 <span class=\"chem\">a ln 9 + b = 8.7</span>。",
        // EN: Subtract to eliminate <span class="chem">b</span>, and use <span class="chem">ln 9 - ln 2 = ln 4.5</span>; or use the GDC simultaneous-equation solver.
        "兩式相減以消去 <span class=\"chem\">b</span>，並運用 <span class=\"chem\">ln 9 - ln 2 = ln 4.5</span>；或使用 GDC 的聯立方程求解功能。",
      ],
      // EN: <p><span class="chem">a ln 9 + b = 8.7</span> and <span class="chem">a ln 2 + b = 5.1</span>. Subtracting: <span class="chem">a(ln 9 - ln 2) = 3.6 => a = 3.6/ln 4.5 ≈ 2.3935</span>, so <span class="chem">a = 2.39</span> (and <span class="chem">b ≈ 3.44</span>).</p>
      solution: "<p><span class=\"chem\">a ln 9 + b = 8.7</span> 及 <span class=\"chem\">a ln 2 + b = 5.1</span>。兩式相減：<span class=\"chem\">a(ln 9 - ln 2) = 3.6 => a = 3.6/ln 4.5 ≈ 2.3935</span>，故 <span class=\"chem\">a = 2.39</span>（而 <span class=\"chem\">b ≈ 3.44</span>）。</p>",
    },

    // ── t2-2-q050 · short · challenge · SL · SL 2.9, 2.10 · 9 marks
    "t2-2-q050": {
      // EN: <p>Goats are released on an island. Ecologists model the number of goats <span class="chem">t</span> years after release by <span class="chem">P(t) = L/(1 + C e^{-kt})</span>, where <span class="chem">L</span>, <span class="chem">C</span> and <span class="chem">k</span> are positive constants. The island can support at most <span class="chem">5000</span> goats, and the model's population approaches this value in the long term. <span class="chem">400</span> goats are released at <span class="chem">t = 0</span>, and there are <span class="chem">1100</span> goats after 3 years.<br>(a) Write down the value of <span class="chem">L</span>, giving a reason. <strong>[2 marks]</strong><br>(b) Show that <span class="chem">C = 11.5</span>. <strong>[2 marks]</strong><br>(c) Find the value of <span class="chem">k</span>. <strong>[3 marks]</strong><br>(d) Find how long it takes for the population to reach <span class="chem">4000</span> goats. <strong>[2 marks]</strong></p>
      stem: "<p>一群山羊被放到一個島上。生態學家以 <span class=\"chem\">P(t) = L/(1 + C e^{-kt})</span> 模擬放羊 <span class=\"chem\">t</span> 年後的山羊數目，其中 <span class=\"chem\">L</span>、<span class=\"chem\">C</span> 及 <span class=\"chem\">k</span> 為正常數。該島最多可供養 <span class=\"chem\">5000</span> 隻山羊，而模型中的數目長遠會趨近此值。在 <span class=\"chem\">t = 0</span> 時放出 <span class=\"chem\">400</span> 隻山羊，3 年後有 <span class=\"chem\">1100</span> 隻。<br>(a) 寫出 (Write down) <span class=\"chem\">L</span> 的值，並給出理由。<strong>[2 marks]</strong><br>(b) 證明 (Show that) <span class=\"chem\">C = 11.5</span>。<strong>[2 marks]</strong><br>(c) 求 (Find) <span class=\"chem\">k</span> 的值。<strong>[3 marks]</strong><br>(d) 求 (Find) 數目達到 <span class=\"chem\">4000</span> 隻所需的時間。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a logistic-style model. The phrase "approaches this value in the long term" tells you what happens to <span class="chem">P(t)</span> as <span class="chem">t -&gt; infty</span>, which gives <span class="chem">L</span> without any data. The two counts then give <span class="chem">C</span> and <span class="chem">k</span>.
        "解碼：這是一個邏輯斯諦型模型。「長遠會趨近此值」說明了當 <span class=\"chem\">t -&gt; infty</span> 時 <span class=\"chem\">P(t)</span> 的變化，因此毋須任何數據便可得出 <span class=\"chem\">L</span>。之後兩個點算數目給出 <span class=\"chem\">C</span> 和 <span class=\"chem\">k</span>。",
        // EN: At <span class="chem">t = 0</span>, <span class="chem">e^0 = 1</span>, so <span class="chem">P(0) = L/(1 + C)</span>.
        "當 <span class=\"chem\">t = 0</span> 時，<span class=\"chem\">e^0 = 1</span>，故 <span class=\"chem\">P(0) = L/(1 + C)</span>。",
        // EN: For (c), rearrange <span class="chem">1100 = 5000/(1 + 11.5 e^{-3k})</span> to isolate <span class="chem">e^{-3k}</span>, or solve on the GDC.
        "在 (c) 部中，整理 <span class=\"chem\">1100 = 5000/(1 + 11.5 e^{-3k})</span> 使 <span class=\"chem\">e^{-3k}</span> 單獨置於一邊，或用 GDC 求解。",
        // EN: Keep the unrounded <span class="chem">k</span> in your GDC for (d).
        "把未經捨入的 <span class=\"chem\">k</span> 保留在 GDC 中，供 (d) 部使用。",
      ],
      // EN: <p><strong>Decode:</strong> the long-term limit is the horizontal asymptote of the model, so it gives <span class="chem">L</span>; each data point then fixes one more constant.</p><p>(a) As <span class="chem">t -&gt; infty</span>, <span class="chem">e^{-kt} -&gt; 0</span> so <span class="chem">P(t) -&gt; L</span>. The long-term population is 5000, so <span class="chem">L = 5000</span>.<br>(b) <span class="chem">400 = 5000/(1 + C) => 1 + C = 12.5 => C = 11.5</span>.<br>(c) <span class="chem">1100 = 5000/(1 + 11.5 e^{-3k}) => 1 + 11.5 e^{-3k} = 50/11 => e^{-3k} = (39/11)/11.5 ≈ 0.30830 => k = -ln(0.30830)/3 ≈ 0.392</span>.<br>(d) <span class="chem">4000 = 5000/(1 + 11.5 e^{-kt}) => 11.5 e^{-kt} = 0.25 => t = ln(46)/k ≈ 9.76</span> years.</p>
      solution: "<p><strong>解碼：</strong>長遠的極限是模型的水平漸近線，因此給出 <span class=\"chem\">L</span>；之後每個數據點各決定一個常數。</p><p>(a) 當 <span class=\"chem\">t -&gt; infty</span> 時，<span class=\"chem\">e^{-kt} -&gt; 0</span>，故 <span class=\"chem\">P(t) -&gt; L</span>。長遠的數目為 5000，故 <span class=\"chem\">L = 5000</span>。<br>(b) <span class=\"chem\">400 = 5000/(1 + C) => 1 + C = 12.5 => C = 11.5</span>。<br>(c) <span class=\"chem\">1100 = 5000/(1 + 11.5 e^{-3k}) => 1 + 11.5 e^{-3k} = 50/11 => e^{-3k} = (39/11)/11.5 ≈ 0.30830 => k = -ln(0.30830)/3 ≈ 0.392</span>。<br>(d) <span class=\"chem\">4000 = 5000/(1 + 11.5 e^{-kt}) => 11.5 e^{-kt} = 0.25 => t = ln(46)/k ≈ 9.76</span> 年。</p>",
      // EN: <p>(a) <span class="chem">L = 5000</span>, because <span class="chem">e^{-kt} -&gt; 0</span> so <span class="chem">P -&gt; L</span>; (b) <span class="chem">400 = 5000/(1 + C) => C = 11.5</span>; (c) <span class="chem">k ≈ 0.392</span>; (d) <span class="chem">9.76</span> years.</p>
      answer: "<p>(a) <span class=\"chem\">L = 5000</span>，因為 <span class=\"chem\">e^{-kt} -&gt; 0</span>，故 <span class=\"chem\">P -&gt; L</span>；(b) <span class=\"chem\">400 = 5000/(1 + C) => C = 11.5</span>；(c) <span class=\"chem\">k ≈ 0.392</span>；(d) <span class=\"chem\">9.76</span> 年。</p>",
      markscheme: [
        // EN: A1: L = 5000.
        "A1: L = 5000.",
        // EN: R1: As t → ∞, e^(−kt) → 0, so P(t) → L; the long-term value is 5000.
        "R1：當 t → ∞ 時，e^(−kt) → 0，故 P(t) → L；長遠的值為 5000。",
        // EN: M1: Substitutes t = 0: 400 = 5000/(1 + C e⁰) = 5000/(1 + C).
        "M1：代入 t = 0：400 = 5000/(1 + C e⁰) = 5000/(1 + C)。",
        // EN: A1: 1 + C = 12.5. AG: C = 11.5; the given line itself earns no mark.
        "A1：1 + C = 12.5。AG：C = 11.5；寫出題目已給的結果本身不得分。",
        // EN: M1: Substitutes t = 3, P = 1100: 1100 = 5000/(1 + 11.5e^(−3k)).
        "M1：代入 t = 3, P = 1100：1100 = 5000/(1 + 11.5e^(−3k))。",
        // EN: A1: e^(−3k) = (5000/1100 − 1)/11.5 ≈ 0.30830 (or GDC solve).
        "A1：e^(−3k) = (5000/1100 − 1)/11.5 ≈ 0.30830（或用 GDC 求解）。",
        // EN: A1: k ≈ 0.392 (0.39223…).
        "A1: k ≈ 0.392 (0.39223…).",
        // EN: M1: Solves 4000 = 5000/(1 + 11.5e^(−kt)) (algebraically or by GDC intersection).
        "M1：解 4000 = 5000/(1 + 11.5e^(−kt))（用代數方法或 GDC 求交點）。",
        // EN: A1: t ≈ 9.76 years.
        "A1：t ≈ 9.76 年。",
      ],
    },

    // ── t2-2-q051 · numeric · challenge · SL · SL 2.9, 2.10 · 5 marks
    "t2-2-q051": {
      // EN: <p>At the start of 2025, town A has <span class="chem">12 000</span> residents and town B has <span class="chem">18 500</span>. The population of town A is growing by <span class="chem">2.5%</span> per year, and the population of town B is falling by <span class="chem">1.2%</span> per year. Assuming these rates continue, find the least whole number of years <span class="chem">n</span> after the start of 2025 such that the population of A is greater than the population of B after <span class="chem">n</span> years.</p>
      stem: "<p>在 2025 年初，A 鎮有 <span class=\"chem\">12 000</span> 名居民，B 鎮有 <span class=\"chem\">18 500</span> 名。A 鎮人口每年增長 <span class=\"chem\">2.5%</span>，B 鎮人口每年下降 <span class=\"chem\">1.2%</span>。假設這些比率維持不變，求 (Find) 2025 年初之後的最小整數年數 <span class=\"chem\">n</span>，使得 <span class=\"chem\">n</span> 年後 A 鎮人口多於 B 鎮人口。</p>",
      hints: [
        // EN: Decode: "growing by 2.5%" gives a factor of <span class="chem">1.025</span> per year; "falling by 1.2%" gives <span class="chem">0.988</span>. You need the first whole <span class="chem">n</span> after the two exponential graphs cross.
        "解碼：「增長 2.5%」給出每年因子 <span class=\"chem\">1.025</span>；「下降 1.2%」給出 <span class=\"chem\">0.988</span>。你需要的是兩條指數圖像相交之後的第一個整數 <span class=\"chem\">n</span>。",
        // EN: Solve <span class="chem">12000(1.025)^n = 18500(0.988)^n</span> by GDC intersection (or by logs).
        "用 GDC 求交點（或用對數）解 <span class=\"chem\">12000(1.025)^n = 18500(0.988)^n</span>。",
        // EN: The crossing value is not a whole number. Round <strong>up</strong>, and check the populations at the integers on either side.
        "相交處的值不是整數。須<strong>向上</strong>捨入，並檢查兩旁整數處的人口。",
      ],
      // EN: <p><strong>Decode:</strong> two exponential models with factors <span class="chem">1.025</span> and <span class="chem">0.988</span>; find where <span class="chem">A = B</span>, then the next whole year.</p><p><span class="chem">12000(1.025)^n = 18500(0.988)^n => (1.025/0.988)^n = 18500/12000 => n = ln(18500/12000)/ln(1.025/0.988) ≈ 11.77</span>. Check: after 11 years A ≈ 15 745 and B ≈ 16 199 (B larger); after 12 years A ≈ 16 139 and B ≈ 16 005 (A larger). So <span class="chem">n = 12</span>.</p>
      solution: "<p><strong>解碼：</strong>兩個因子分別為 <span class=\"chem\">1.025</span> 及 <span class=\"chem\">0.988</span> 的指數模型；求 <span class=\"chem\">A = B</span> 之處，然後取下一個整數年。</p><p><span class=\"chem\">12000(1.025)^n = 18500(0.988)^n => (1.025/0.988)^n = 18500/12000 => n = ln(18500/12000)/ln(1.025/0.988) ≈ 11.77</span>。驗算：11 年後 A ≈ 15 745，B ≈ 16 199（B 較大）；12 年後 A ≈ 16 139，B ≈ 16 005（A 較大）。所以 <span class=\"chem\">n = 12</span>。</p>",
    },

    // ── t2-2-q052 · numeric · exam · SL · SL 2.10 · 3 marks
    "t2-2-q052": {
      // EN: <p>Find the positive solution of the equation <span class="chem">x^2 - 3 = 2 ln(x + 1)</span>, giving your answer correct to 3 significant figures.</p>
      stem: "<p>求 (Find) 方程 <span class=\"chem\">x^2 - 3 = 2 ln(x + 1)</span> 的正解，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: There is no algebraic method for an equation mixing a polynomial and a logarithm. Graph <span class="chem">y = x^2 - 3</span> and <span class="chem">y = 2 ln(x + 1)</span> on the GDC.
        "同時含多項式和對數的方程沒有代數解法。用 GDC 繪畫 <span class=\"chem\">y = x^2 - 3</span> 和 <span class=\"chem\">y = 2 ln(x + 1)</span> 的圖像。",
        // EN: There are two intersections. Choose the one with <span class="chem">x &gt; 0</span>.
        "共有兩個交點。選取 <span class=\"chem\">x &gt; 0</span> 的那一個。",
      ],
      // EN: <p>Graphing <span class="chem">Y_1 = x^2 - 3</span> and <span class="chem">Y_2 = 2 ln(x + 1)</span> gives intersections at <span class="chem">x ≈ -0.712</span> and <span class="chem">x ≈ 2.3243</span>. The positive solution is <span class="chem">x = 2.32</span> (3 s.f.).</p>
      solution: "<p>繪畫 <span class=\"chem\">Y_1 = x^2 - 3</span> 和 <span class=\"chem\">Y_2 = 2 ln(x + 1)</span> 的圖像，得交點 <span class=\"chem\">x ≈ -0.712</span> 及 <span class=\"chem\">x ≈ 2.3243</span>。正解為 <span class=\"chem\">x = 2.32</span>（3 位有效數字）。</p>",
    },

    // ── t2-2-q053 · numeric · exam · SL · SL 2.10 · 3 marks
    "t2-2-q053": {
      // EN: <p>The equation <span class="chem">2^x = x + 3</span> has two solutions. Find the negative solution, correct to 3 significant figures.</p>
      stem: "<p>方程 <span class=\"chem\">2^x = x + 3</span> 有兩個解。求 (Find) 其負解，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Graph <span class="chem">y = 2^x</span> and <span class="chem">y = x + 3</span>, or find the zeros of <span class="chem">y = 2^x - x - 3</span>.
        "繪畫 <span class=\"chem\">y = 2^x</span> 和 <span class=\"chem\">y = x + 3</span> 的圖像，或求 <span class=\"chem\">y = 2^x - x - 3</span> 的零點。",
        // EN: The line crosses the exponential curve twice. You need the crossing to the left of the <span class="chem">y</span>-axis; your viewing window must include <span class="chem">x = -3</span>.
        "直線與指數曲線相交兩次。你需要的是 <span class=\"chem\">y</span> 軸左方的交點；你的顯示範圍必須包括 <span class=\"chem\">x = -3</span>。",
      ],
      // EN: <p>The zeros of <span class="chem">2^x - x - 3</span> are <span class="chem">x ≈ -2.8625</span> and <span class="chem">x ≈ 2.4449</span>. The negative solution is <span class="chem">x = -2.86</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">2^x - x - 3</span> 的零點為 <span class=\"chem\">x ≈ -2.8625</span> 及 <span class=\"chem\">x ≈ 2.4449</span>。負解為 <span class=\"chem\">x = -2.86</span>（3 位有效數字）。</p>",
    },

    // ── t2-2-q054 · short · exam · SL · SL 2.10 · 5 marks
    "t2-2-q054": {
      // EN: <p>Let <span class="chem">f(x) = ln x</span> and <span class="chem">g(x) = 0.5x - 1</span>, for <span class="chem">x &gt; 0</span>.<br>(a) Find the <span class="chem">x</span>-coordinates of the points where the graphs of <span class="chem">f</span> and <span class="chem">g</span> intersect. <strong>[3 marks]</strong><br>(b) Hence solve the inequality <span class="chem">ln x &gt; 0.5x - 1</span>. <strong>[2 marks]</strong></p>
      stem: "<p>設 <span class=\"chem\">f(x) = ln x</span> 及 <span class=\"chem\">g(x) = 0.5x - 1</span>，其中 <span class=\"chem\">x &gt; 0</span>。<br>(a) 求 (Find) <span class=\"chem\">f</span> 與 <span class=\"chem\">g</span> 的圖像交點的 <span class=\"chem\">x</span> 坐標。<strong>[3 marks]</strong><br>(b) 由此解 (Hence solve) 不等式 <span class=\"chem\">ln x &gt; 0.5x - 1</span>。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Use the GDC intersect tool twice: once near <span class="chem">x = 0.5</span> and once near <span class="chem">x = 5</span>. Choose a window that shows both.
        "使用 GDC 的求交點功能兩次：一次在 <span class=\"chem\">x = 0.5</span> 附近，一次在 <span class=\"chem\">x = 5</span> 附近。選取可同時顯示兩者的範圍。",
        // EN: For (b), look at your graph: where is the curve <span class="chem">y = ln x</span> above the line?
        "在 (b) 部中，觀察你的圖像：曲線 <span class=\"chem\">y = ln x</span> 在哪裏位於直線上方？",
      ],
      // EN: <p>(a) The GDC gives intersections at <span class="chem">x ≈ 0.46392</span> and <span class="chem">x ≈ 5.35669</span>, i.e. <span class="chem">x ≈ 0.464</span> and <span class="chem">x ≈ 5.36</span>.<br>(b) At <span class="chem">x = 1</span>, <span class="chem">ln 1 = 0 &gt; -0.5</span>, so the curve is above the line between the intersections (and below outside them). Hence <span class="chem">0.464 &lt; x &lt; 5.36</span>.</p>
      solution: "<p>(a) GDC 給出交點 <span class=\"chem\">x ≈ 0.46392</span> 及 <span class=\"chem\">x ≈ 5.35669</span>，即 <span class=\"chem\">x ≈ 0.464</span> 及 <span class=\"chem\">x ≈ 5.36</span>。<br>(b) 在 <span class=\"chem\">x = 1</span> 處，<span class=\"chem\">ln 1 = 0 &gt; -0.5</span>，故曲線在兩個交點之間位於直線上方（在兩交點以外則位於下方）。由此得 <span class=\"chem\">0.464 &lt; x &lt; 5.36</span>。</p>",
      // EN: <p>(a) <span class="chem">x ≈ 0.464</span> and <span class="chem">x ≈ 5.36</span>; (b) <span class="chem">0.464 &lt; x &lt; 5.36</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x ≈ 0.464</span> 及 <span class=\"chem\">x ≈ 5.36</span>；(b) <span class=\"chem\">0.464 &lt; x &lt; 5.36</span>。</p>",
      markscheme: [
        // EN: M1: Graphs y = ln x and y = 0.5x − 1 (or finds the zeros of ln x − 0.5x + 1) on the GDC.
        "M1：用 GDC 繪畫 y = ln x 和 y = 0.5x − 1 的圖像（或求 ln x − 0.5x + 1 的零點）。",
        // EN: A1: x ≈ 0.464.
        "A1: x ≈ 0.464.",
        // EN: A1: x ≈ 5.36.
        "A1: x ≈ 5.36.",
        // EN: M1: Identifies that the logarithm graph lies above the line between the intersections.
        "M1：指出對數函數的圖像在兩個交點之間位於直線上方。",
        // EN: A1: 0.464 < x < 5.36.
        "A1: 0.464 < x < 5.36.",
      ],
    },

    // ── t2-2-q055 · numeric · exam · SL · SL 2.8, 2.10 · 3 marks
    "t2-2-q055": {
      // EN: <p>Solve the equation <span class="chem">(2x + 1)/(x - 1) = e^{0.5x}</span> for <span class="chem">x &gt; 1</span>, giving your answer correct to 3 significant figures.</p>
      stem: "<p>就 <span class=\"chem\">x &gt; 1</span> 解 (Solve) 方程 <span class=\"chem\">(2x + 1)/(x - 1) = e^{0.5x}</span>，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Graph <span class="chem">y = (2x + 1)/(x - 1)</span> and <span class="chem">y = e^{0.5x}</span>. The rational graph has a vertical asymptote at <span class="chem">x = 1</span>, so look to the right of it.
        "繪畫 <span class=\"chem\">y = (2x + 1)/(x - 1)</span> 和 <span class=\"chem\">y = e^{0.5x}</span> 的圖像。有理函數的圖像在 <span class=\"chem\">x = 1</span> 有垂直漸近線，因此須看它的右方。",
        // EN: For <span class="chem">x &gt; 1</span> the rational function decreases towards <span class="chem">2</span> while the exponential increases, so there is exactly one intersection there.
        "當 <span class=\"chem\">x &gt; 1</span> 時，有理函數遞減並趨近 <span class=\"chem\">2</span>，而指數函數遞增，因此在該處恰有一個交點。",
      ],
      // EN: <p>The GDC intersection of <span class="chem">Y_1 = (2x + 1)/(x - 1)</span> and <span class="chem">Y_2 = e^{0.5x}</span> on <span class="chem">x &gt; 1</span> is at <span class="chem">x ≈ 2.6688</span>, so <span class="chem">x = 2.67</span>. (There is another intersection with <span class="chem">x &lt; 1</span>, which the question excludes.)</p>
      solution: "<p>在 <span class=\"chem\">x &gt; 1</span> 上，<span class=\"chem\">Y_1 = (2x + 1)/(x - 1)</span> 與 <span class=\"chem\">Y_2 = e^{0.5x}</span> 的 GDC 交點位於 <span class=\"chem\">x ≈ 2.6688</span>，故 <span class=\"chem\">x = 2.67</span>。（在 <span class=\"chem\">x &lt; 1</span> 處還有另一個交點，但題目已把它排除。）</p>",
    },

    // ── t2-2-q056 · numeric · exam · SL · SL 2.10 · 2 marks
    "t2-2-q056": {
      // EN: <p>Use your GDC to find the number of real solutions of the equation <span class="chem">ln x = x^2 - 3x + 1</span>.</p>
      stem: "<p>用你的 GDC 求 (Find) 方程 <span class=\"chem\">ln x = x^2 - 3x + 1</span> 的實數解的數目。</p>",
      hints: [
        // EN: Graph both sides. Remember that <span class="chem">ln x</span> exists only for <span class="chem">x &gt; 0</span>, and zoom out enough to see the whole picture.
        "繪畫兩邊的圖像。記住 <span class=\"chem\">ln x</span> 只在 <span class=\"chem\">x &gt; 0</span> 時存在，並把顯示範圍放得足夠大，以看到整體情況。",
        // EN: The parabola has its vertex at <span class="chem">x = 1.5</span>; it is above <span class="chem">ln x</span> near <span class="chem">x = 0</span> and again for large <span class="chem">x</span>.
        "拋物線的頂點位於 <span class=\"chem\">x = 1.5</span>；它在 <span class=\"chem\">x = 0</span> 附近位於 <span class=\"chem\">ln x</span> 上方，而在 <span class=\"chem\">x</span> 很大時再次位於其上方。",
      ],
      // EN: <p>Graphing <span class="chem">y = ln x</span> and <span class="chem">y = x^2 - 3x + 1</span> shows intersections at <span class="chem">x ≈ 0.621</span> and <span class="chem">x ≈ 3.04</span>. The parabola is above the curve for <span class="chem">0 &lt; x &lt; 0.621</span> and for <span class="chem">x &gt; 3.04</span>, and below it in between, so there are <strong>2</strong> real solutions.</p>
      solution: "<p>繪畫 <span class=\"chem\">y = ln x</span> 和 <span class=\"chem\">y = x^2 - 3x + 1</span> 的圖像，可見交點位於 <span class=\"chem\">x ≈ 0.621</span> 及 <span class=\"chem\">x ≈ 3.04</span>。拋物線在 <span class=\"chem\">0 &lt; x &lt; 0.621</span> 及 <span class=\"chem\">x &gt; 3.04</span> 時位於曲線上方，而在兩者之間位於其下方，因此共有 <strong>2</strong> 個實數解。</p>",
    },

    // ── t2-2-q057 · numeric · exam · SL · SL 2.9, 2.10 · 3 marks
    "t2-2-q057": {
      // EN: <p>Tank A contains <span class="chem">500</span> litres of water and starts to leak. The volume left in tank A after <span class="chem">t</span> minutes is <span class="chem">V_A = 500 e^{-0.04t}</span> litres. At the same moment, tank B, which contains <span class="chem">50</span> litres, starts to be filled at <span class="chem">20</span> litres per minute. Find the time at which the two tanks contain the same volume, correct to 3 significant figures.</p>
      stem: "<p>A 缸盛有 <span class=\"chem\">500</span> 公升水，並開始漏水。<span class=\"chem\">t</span> 分鐘後 A 缸餘下的水量為 <span class=\"chem\">V_A = 500 e^{-0.04t}</span> 公升。與此同時，盛有 <span class=\"chem\">50</span> 公升水的 B 缸開始以每分鐘 <span class=\"chem\">20</span> 公升的速率注水。求 (Find) 兩個水缸水量相同的時間，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: write the volume of tank B as a linear function, <span class="chem">V_B = 50 + 20t</span>, then solve <span class="chem">V_A = V_B</span>.
        "解碼：把 B 缸的水量寫成線性函數 <span class=\"chem\">V_B = 50 + 20t</span>，然後解 <span class=\"chem\">V_A = V_B</span>。",
        // EN: An equation mixing <span class="chem">e^{-0.04t}</span> and <span class="chem">t</span> needs the GDC: intersect the two graphs.
        "同時含 <span class=\"chem\">e^{-0.04t}</span> 和 <span class=\"chem\">t</span> 的方程需要用 GDC：求兩條圖像的交點。",
      ],
      // EN: <p><span class="chem">500 e^{-0.04t} = 50 + 20t</span>. The GDC intersection is at <span class="chem">t ≈ 12.602</span>, so the volumes are equal after <span class="chem">12.6</span> minutes (both about <span class="chem">302</span> litres).</p>
      solution: "<p><span class=\"chem\">500 e^{-0.04t} = 50 + 20t</span>。GDC 求得交點位於 <span class=\"chem\">t ≈ 12.602</span>，故 <span class=\"chem\">12.6</span> 分鐘後兩缸水量相同（均約為 <span class=\"chem\">302</span> 公升）。</p>",
    },

    // ── t2-2-q058 · numeric · exam · SL · SL 2.8, 2.10 · 3 marks
    "t2-2-q058": {
      // EN: <p>The graphs of <span class="chem">y = (3x - 2)/(x + 1)</span> and <span class="chem">y = 0.5x^2 - 1.8</span> intersect at three points. Find the <span class="chem">x</span>-coordinate of the point of intersection with <span class="chem">x &gt; 1</span>, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">y = (3x - 2)/(x + 1)</span> 與 <span class=\"chem\">y = 0.5x^2 - 1.8</span> 的圖像相交於三點。求 (Find) 滿足 <span class=\"chem\">x &gt; 1</span> 的交點的 <span class=\"chem\">x</span> 坐標，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Graph both functions. The rational graph has a vertical asymptote at <span class="chem">x = -1</span>; the GDC may draw a false near-vertical line there, which is not an intersection.
        "繪畫兩個函數的圖像。有理函數的圖像在 <span class=\"chem\">x = -1</span> 有垂直漸近線；GDC 可能在該處畫出一條假的近乎鉛垂的線，那並不是交點。",
        // EN: Use the intersect tool with a starting guess near <span class="chem">x = 2.5</span>.
        "使用求交點功能，起始估值取在 <span class=\"chem\">x = 2.5</span> 附近。",
      ],
      // EN: <p>The graphs intersect at <span class="chem">x ≈ -3.656</span>, <span class="chem">x ≈ 0.0419</span> and <span class="chem">x ≈ 2.6140</span>. The one with <span class="chem">x &gt; 1</span> is <span class="chem">x = 2.61</span> (3 s.f.).</p>
      solution: "<p>兩條圖像相交於 <span class=\"chem\">x ≈ -3.656</span>、<span class=\"chem\">x ≈ 0.0419</span> 及 <span class=\"chem\">x ≈ 2.6140</span>。滿足 <span class=\"chem\">x &gt; 1</span> 的是 <span class=\"chem\">x = 2.61</span>（3 位有效數字）。</p>",
    },

    // ── t2-2-q059 · short · challenge · SL · SL 2.8, 2.9, 2.10 · 9 marks
    "t2-2-q059": {
      // EN: <p>Two students learn to touch-type. Their typing speeds, in words per minute, <span class="chem">t</span> weeks after starting are modelled by<br>Asha: <span class="chem">A(t) = (75t + 20)/(t + 4)</span> &nbsp; and &nbsp; Ben: <span class="chem">B(t) = 82(1 - e^{-0.15t})</span>, for <span class="chem">t &gt;= 0</span>.<br>(a) Write down each student's typing speed when they start. <strong>[2 marks]</strong><br>(b) Write down the speed that each student's model approaches in the long term. <strong>[2 marks]</strong><br>(c) Find the time when the two students type at the same speed. <strong>[2 marks]</strong><br>(d) Each student aims to reach <span class="chem">60</span> words per minute. Find how many weeks longer Asha takes than Ben to reach this target. <strong>[3 marks]</strong></p>
      stem: "<p>兩名學生學習盲打。開始學習 <span class=\"chem\">t</span> 星期後，他們的打字速度（以每分鐘字數計）模擬為<br>Asha：<span class=\"chem\">A(t) = (75t + 20)/(t + 4)</span> &nbsp; 及 &nbsp; Ben：<span class=\"chem\">B(t) = 82(1 - e^{-0.15t})</span>，其中 <span class=\"chem\">t &gt;= 0</span>。<br>(a) 寫出 (Write down) 每名學生開始時的打字速度。<strong>[2 marks]</strong><br>(b) 寫出 (Write down) 每名學生的模型長遠所趨近的速度。<strong>[2 marks]</strong><br>(c) 求 (Find) 兩名學生打字速度相同的時間。<strong>[2 marks]</strong><br>(d) 兩名學生的目標都是達到每分鐘 <span class=\"chem\">60</span> 字。求 (Find) Asha 比 Ben 多用多少星期達到此目標。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: one model is linear-over-linear (horizontal asymptote = ratio of the <span class="chem">t</span>-coefficients); the other is exponential (as <span class="chem">t -&gt; infty</span>, <span class="chem">e^{-0.15t} -&gt; 0</span>). "When they start" means <span class="chem">t = 0</span>; "in the long term" means the asymptotes.
        "解碼：一個模型是「線性 ÷ 線性」（水平漸近線 = <span class=\"chem\">t</span> 係數之比）；另一個是指數模型（當 <span class=\"chem\">t -&gt; infty</span> 時，<span class=\"chem\">e^{-0.15t} -&gt; 0</span>）。「開始時」即 <span class=\"chem\">t = 0</span>；「長遠」即漸近線。",
        // EN: For (c), graph both models for <span class="chem">0 &lt;= t &lt;= 30</span> and use the intersect tool.
        "在 (c) 部中，在 <span class=\"chem\">0 &lt;= t &lt;= 30</span> 範圍內繪畫兩個模型的圖像，並使用求交點功能。",
        // EN: For (d), solve <span class="chem">A(t) = 60</span> and <span class="chem">B(t) = 60</span> separately, then subtract. Asha's equation can be solved by hand.
        "在 (d) 部中，分別解 <span class=\"chem\">A(t) = 60</span> 及 <span class=\"chem\">B(t) = 60</span>，然後相減。Asha 的方程可以用手解。",
      ],
      // EN: <p><strong>Decode:</strong> start values come from <span class="chem">t = 0</span>, long-term values from the horizontal asymptotes, and "same speed" from the intersection of the two graphs.</p><p>(a) <span class="chem">A(0) = 20/4 = 5</span>; <span class="chem">B(0) = 82(1 - 1) = 0</span>.<br>(b) <span class="chem">A(t) -&gt; 75/1 = 75</span>; <span class="chem">B(t) -&gt; 82</span> because <span class="chem">e^{-0.15t} -&gt; 0</span>.<br>(c) The GDC intersection for <span class="chem">t &gt; 0</span> is at <span class="chem">t ≈ 5.27</span> weeks (Asha is faster before this, Ben after).<br>(d) Asha: <span class="chem">75t + 20 = 60t + 240 => t = 220/15 ≈ 14.667</span>. Ben: <span class="chem">e^{-0.15t} = 22/82 => t = ln(82/22)/0.15 ≈ 8.771</span>. Asha takes <span class="chem">14.667 - 8.771 ≈ 5.90</span> weeks longer.</p>
      solution: "<p><strong>解碼：</strong>開始時的值來自 <span class=\"chem\">t = 0</span>，長遠的值來自水平漸近線，而「速度相同」來自兩條圖像的交點。</p><p>(a) <span class=\"chem\">A(0) = 20/4 = 5</span>；<span class=\"chem\">B(0) = 82(1 - 1) = 0</span>。<br>(b) <span class=\"chem\">A(t) -&gt; 75/1 = 75</span>；<span class=\"chem\">B(t) -&gt; 82</span>，因為 <span class=\"chem\">e^{-0.15t} -&gt; 0</span>。<br>(c) 在 <span class=\"chem\">t &gt; 0</span> 上的 GDC 交點位於 <span class=\"chem\">t ≈ 5.27</span> 星期（在此之前 Asha 較快，之後 Ben 較快）。<br>(d) Asha：<span class=\"chem\">75t + 20 = 60t + 240 => t = 220/15 ≈ 14.667</span>。Ben：<span class=\"chem\">e^{-0.15t} = 22/82 => t = ln(82/22)/0.15 ≈ 8.771</span>。Asha 多用 <span class=\"chem\">14.667 - 8.771 ≈ 5.90</span> 星期。</p>",
      // EN: <p>(a) Asha <span class="chem">5</span> wpm, Ben <span class="chem">0</span> wpm; (b) Asha <span class="chem">75</span> wpm, Ben <span class="chem">82</span> wpm; (c) <span class="chem">t ≈ 5.27</span> weeks; (d) Asha <span class="chem">14.67</span> weeks, Ben <span class="chem">8.77</span> weeks: <span class="chem">5.90</span> weeks longer.</p>
      answer: "<p>(a) Asha <span class=\"chem\">5</span> wpm，Ben <span class=\"chem\">0</span> wpm；(b) Asha <span class=\"chem\">75</span> wpm，Ben <span class=\"chem\">82</span> wpm；(c) <span class=\"chem\">t ≈ 5.27</span> 星期；(d) Asha <span class=\"chem\">14.67</span> 星期，Ben <span class=\"chem\">8.77</span> 星期：多用 <span class=\"chem\">5.90</span> 星期。</p>",
      markscheme: [
        // EN: A1: A(0) = 20/4 = 5 words per minute.
        "A1：A(0) = 20/4 = 每分鐘 5 字。",
        // EN: A1: B(0) = 82(1 − 1) = 0 words per minute.
        "A1：B(0) = 82(1 − 1) = 每分鐘 0 字。",
        // EN: A1: Asha approaches 75 (horizontal asymptote 75/1).
        "A1：Asha 趨近 75（水平漸近線 75/1）。",
        // EN: A1: Ben approaches 82 (since e^(−0.15t) → 0).
        "A1：Ben 趨近 82（因為 e^(−0.15t) → 0）。",
        // EN: M1: Solves A(t) = B(t) using the GDC (intersection for t > 0).
        "M1：用 GDC 解 A(t) = B(t)（t > 0 的交點）。",
        // EN: A1: t ≈ 5.27 weeks.
        "A1：t ≈ 5.27 星期。",
        // EN: M1: Sets A(t) = 60 and B(t) = 60 and solves each (by hand or GDC).
        "M1：令 A(t) = 60 及 B(t) = 60，並分別求解（用手或 GDC）。",
        // EN: A1: Asha t = 44/3 ≈ 14.67 weeks (75t + 20 = 60t + 240) and Ben t = ln(82/22)/0.15 ≈ 8.77 weeks.
        "A1：Asha t = 44/3 ≈ 14.67 星期（75t + 20 = 60t + 240），Ben t = ln(82/22)/0.15 ≈ 8.77 星期。",
        // EN: A1: Difference ≈ 5.90 weeks.
        "A1：相差 ≈ 5.90 星期。",
      ],
    },

    // ── t2-2-q060 · short · challenge · SL · SL 2.9, 2.10 · 8 marks
    "t2-2-q060": {
      // EN: <p>Mia buys a car for <span class="chem">$28 000</span> with a loan. The value of the car <span class="chem">t</span> years after purchase is modelled by <span class="chem">V(t) = 28000(0.82)^t</span>. The amount she still owes on the loan is modelled by <span class="chem">D(t) = 26500 - 2900t</span>, until the loan is paid off. A car loan is described as "under water" when the amount owed is more than the value of the car.<br>(a) Find the value of the car after 3 years, to the nearest dollar. <strong>[2 marks]</strong><br>(b) Find the set of values of <span class="chem">t</span> for which Mia's loan is under water. <strong>[4 marks]</strong><br>(c) Find the greatest amount by which the debt exceeds the value of the car, to the nearest dollar. <strong>[2 marks]</strong></p>
      stem: "<p>Mia 以貸款購買一輛 <span class=\"chem\">$28 000</span> 的汽車。購車 <span class=\"chem\">t</span> 年後，汽車的價值以 <span class=\"chem\">V(t) = 28000(0.82)^t</span> 模擬。在還清貸款之前，她尚欠的貸款額以 <span class=\"chem\">D(t) = 26500 - 2900t</span> 模擬。當所欠款額多於汽車的價值時，該汽車貸款稱為「資不抵債」(under water)。<br>(a) 求 (Find) 3 年後汽車的價值，答案準確至最接近的元。<strong>[2 marks]</strong><br>(b) 求 (Find) 使 Mia 的貸款資不抵債的 <span class=\"chem\">t</span> 值範圍。<strong>[4 marks]</strong><br>(c) 求 (Find) 債務超出汽車價值的最大金額，答案準確至最接近的元。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: "under water" is defined in the stem: debt <span class="chem">&gt;</span> value, i.e. <span class="chem">D(t) &gt; V(t)</span>. That is an inequality between a linear and an exponential function, so you need the GDC intersections.
        "解碼：「資不抵債」已在題目中定義：債務 <span class=\"chem\">&gt;</span> 價值，即 <span class=\"chem\">D(t) &gt; V(t)</span>。這是線性函數與指數函數之間的不等式，因此需要用 GDC 求交點。",
        // EN: Graph <span class="chem">Y_1 = 26500 - 2900x</span> and <span class="chem">Y_2 = 28000(0.82)^x</span> for <span class="chem">0 &lt;= x &lt;= 9</span>. There are two intersections.
        "在 <span class=\"chem\">0 &lt;= x &lt;= 9</span> 範圍內繪畫 <span class=\"chem\">Y_1 = 26500 - 2900x</span> 和 <span class=\"chem\">Y_2 = 28000(0.82)^x</span> 的圖像。共有兩個交點。",
        // EN: For (c), graph <span class="chem">Y_3 = Y_1 - Y_2</span> and find its maximum. The greatest gap is not at either intersection.
        "在 (c) 部中，繪畫 <span class=\"chem\">Y_3 = Y_1 - Y_2</span> 的圖像並求其最大值。最大差距並不在任何一個交點處。",
      ],
      // EN: <p><strong>Decode:</strong> translate the definition "under water" into the inequality <span class="chem">D(t) &gt; V(t)</span>, solve it graphically, and turn "greatest amount by which the debt exceeds the value" into the maximum of <span class="chem">D - V</span>.</p><p>(a) <span class="chem">V(3) = 28000(0.82)^3 ≈ 15438.30</span>, so about <span class="chem">$15 438</span>.<br>(b) At <span class="chem">t = 0</span>, <span class="chem">D = 26500 &lt; 28000 = V</span>. The graphs intersect at <span class="chem">t ≈ 0.648</span> and <span class="chem">t ≈ 6.457</span>, and <span class="chem">D &gt; V</span> between them, so the loan is under water for <span class="chem">0.648 &lt; t &lt; 6.46</span>.<br>(c) The maximum of <span class="chem">D(t) - V(t)</span> is about <span class="chem">2384.15</span> at <span class="chem">t ≈ 3.28</span>, so the greatest excess is <span class="chem">$2384</span>.</p>
      solution: "<p><strong>解碼：</strong>把「資不抵債」的定義轉化為不等式 <span class=\"chem\">D(t) &gt; V(t)</span>，用圖像求解，並把「債務超出價值的最大金額」轉化為 <span class=\"chem\">D - V</span> 的最大值。</p><p>(a) <span class=\"chem\">V(3) = 28000(0.82)^3 ≈ 15438.30</span>，故約為 <span class=\"chem\">$15 438</span>。<br>(b) 當 <span class=\"chem\">t = 0</span> 時，<span class=\"chem\">D = 26500 &lt; 28000 = V</span>。兩條圖像相交於 <span class=\"chem\">t ≈ 0.648</span> 及 <span class=\"chem\">t ≈ 6.457</span>，而在兩者之間 <span class=\"chem\">D &gt; V</span>，因此貸款在 <span class=\"chem\">0.648 &lt; t &lt; 6.46</span> 時資不抵債。<br>(c) <span class=\"chem\">D(t) - V(t)</span> 的最大值約為 <span class=\"chem\">2384.15</span>，於 <span class=\"chem\">t ≈ 3.28</span> 時取得，因此最大超出金額為 <span class=\"chem\">$2384</span>。</p>",
      // EN: <p>(a) <span class="chem">$15 438</span>; (b) <span class="chem">0.648 &lt; t &lt; 6.46</span>; (c) <span class="chem">$2384</span> (at <span class="chem">t ≈ 3.28</span>).</p>
      answer: "<p>(a) <span class=\"chem\">$15 438</span>；(b) <span class=\"chem\">0.648 &lt; t &lt; 6.46</span>；(c) <span class=\"chem\">$2384</span>（在 <span class=\"chem\">t ≈ 3.28</span> 時）。</p>",
      markscheme: [
        // EN: M1: Substitutes t = 3: 28000 × 0.82³.
        "M1：代入 t = 3：28000 × 0.82³。",
        // EN: A1: $15 438 (15 438.30…).
        "A1: $15 438 (15 438.30…).",
        // EN: M1: Sets up D(t) > V(t), i.e. 26500 − 2900t > 28000(0.82)^t, and graphs both functions (or their difference).
        "M1：列出 D(t) > V(t)，即 26500 − 2900t > 28000(0.82)^t，並繪畫兩個函數（或其差）的圖像。",
        // EN: A1: First intersection t ≈ 0.648.
        "A1：第一個交點 t ≈ 0.648。",
        // EN: A1: Second intersection t ≈ 6.46.
        "A1：第二個交點 t ≈ 6.46。",
        // EN: A1: Under water for 0.648 < t < 6.46.
        "A1：在 0.648 < t < 6.46 時資不抵債。",
        // EN: M1: Maximises D(t) − V(t) on the GDC (maximum of the difference graph).
        "M1：用 GDC 求 D(t) − V(t) 的最大值（差的圖像的最大值）。",
        // EN: A1: Greatest excess ≈ $2384 (at t ≈ 3.28).
        "A1：最大超出金額 ≈ $2384（在 t ≈ 3.28 時）。",
      ],
    },

  }
});
