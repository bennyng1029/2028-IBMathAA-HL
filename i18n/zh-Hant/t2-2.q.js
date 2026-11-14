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

    // ── t2-2-q003 · mcq · foundation · SL · SL 2.7 · 3 marks
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

    // ── t2-2-q005 · mcq · exam · SL · SL 2.7 · 4 marks
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

    // ── t2-2-q012 · mcq · exam · SL · SL 2.8 · 3 marks
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
      // EN: <p>Solve the equation <span class="chem">9^x - 12(3^{x - 1}) + 3 = 0</span>, and find the <strong>sum</strong> of all real solutions <span class="chem">x</span>.</p>
      stem: "<p>解 (Solve) 方程 <span class=\"chem\">9^x - 12(3^{x - 1}) + 3 = 0</span>，並求 (find) 所有實數解 <span class=\"chem\">x</span> 之<strong>和</strong>。</p>",
      hints: [
        // EN: Rewrite <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span>.
        "把 <span class=\"chem\">9^x = (3^x)^2</span> 及 <span class=\"chem\">12(3^{x-1}) = 12(3^x / 3) = 4(3^x)</span> 改寫。",
        // EN: Let <span class="chem">u = 3^x</span> to get <span class="chem">u^2 - 4u + 3 = 0</span>, find both values of <span class="chem">u</span>, and solve <span class="chem">3^x = u</span>.
        "設 <span class=\"chem\">u = 3^x</span> 得 <span class=\"chem\">u^2 - 4u + 3 = 0</span>，求出兩個 <span class=\"chem\">u</span> 值，再解 <span class=\"chem\">3^x = u</span>。",
      ],
      // EN: <p>Using exponent laws, <span class="chem">9^x = (3^x)^2</span> and <span class="chem">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span>. Letting <span class="chem">u = 3^x</span> gives <span class="chem">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span>, so <span class="chem">u = 1</span> or <span class="chem">u = 3</span>. Since <span class="chem">3^x = 1 => x = 0</span> and <span class="chem">3^x = 3 => x = 1</span>, the sum of all real solutions is <span class="chem">0 + 1 = 1</span>.</p>
      solution: "<p>運用指數定律，<span class=\"chem\">9^x = (3^x)^2</span> 及 <span class=\"chem\">12(3^{x-1}) = (12/3)3^x = 4(3^x)</span>。設 <span class=\"chem\">u = 3^x</span> 得 <span class=\"chem\">u^2 - 4u + 3 = (u - 1)(u - 3) = 0</span>，故 <span class=\"chem\">u = 1</span> 或 <span class=\"chem\">u = 3</span>。由於 <span class=\"chem\">3^x = 1 => x = 0</span> 及 <span class=\"chem\">3^x = 3 => x = 1</span>，所有實數解之和為 <span class=\"chem\">0 + 1 = 1</span>。</p>",
    },

    // ── t2-2-q016 · mcq · challenge · SL · SL 2.7 · 4 marks
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
