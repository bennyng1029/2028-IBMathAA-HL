/* t5-3.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't5-3.q', {
  questions: {

    // ── t5-3-q001 · mcq · foundation · AHL · AHL 5.12 · 2 marks
    "t5-3-q001": {
      // EN: <p>To differentiate <span class="chem">f(x) = 3/x</span> from first principles using <span class="chem">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span>, which algebraic expression is obtained after combining the numerator over a single common denominator (before dividing by <i>h</i> and taking the limit)?</p>
      stem: "<p>使用基本原理 <span class=\"chem\">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span> 對 <span class=\"chem\">f(x) = 3/x</span> 求導時，將分子通分為單一公分母後（在除以 <i>h</i> 及取極限之前），會得到哪一個代數式？</p>",
      options: [
        // EN: <span class="chem">-3h / (x(x + h))</span>
        "<span class=\"chem\">-3h / (x(x + h))</span>",
        // EN: <span class="chem">3h / (x(x + h))</span>
        "<span class=\"chem\">3h / (x(x + h))</span>",
        // EN: <span class="chem">-3 / (x^2 + h^2)</span>
        "<span class=\"chem\">-3 / (x^2 + h^2)</span>",
        // EN: <span class="chem">3 / (x + h) - 3 / x = 3 / h</span>
        "<span class=\"chem\">3 / (x + h) - 3 / x = 3 / h</span>",
      ],
      hints: [
        // EN: Write <span class="chem">f(x + h) - f(x) = 3/(x + h) - 3/x</span>.
        "寫出 <span class=\"chem\">f(x + h) - f(x) = 3/(x + h) - 3/x</span>。",
        // EN: Put both fractions over the common denominator <span class="chem">x(x + h)</span>: <span class="chem">(3x - 3(x + h)) / (x(x + h))</span>.
        "將兩個分數通分至公分母 <span class=\"chem\">x(x + h)</span>：<span class=\"chem\">(3x - 3(x + h)) / (x(x + h))</span>。",
      ],
      // EN: <p>We have <span class="chem">f(x + h) - f(x) = 3/(x + h) - 3/x = (3x - 3x - 3h) / (x(x + h)) = -3h / (x(x + h))</span>. Dividing by <i>h</i> and letting <span class="chem">h -> 0</span> gives <span class="chem">f'(x) = -3/x^2</span>.</p>
      solution: "<p>我們有 <span class=\"chem\">f(x + h) - f(x) = 3/(x + h) - 3/x = (3x - 3x - 3h) / (x(x + h)) = -3h / (x(x + h))</span>。除以 <i>h</i> 並令 <span class=\"chem\">h -> 0</span>，得 <span class=\"chem\">f'(x) = -3/x^2</span>。</p>",
      misconception: {
        // EN (option B): Check the subtraction order: <span class="chem">3/(x + h) - 3/x = (3x - 3(x + h))/(x(x + h)) = -3h/(x(x + h))</span>, which has a minus sign.
        "1": "檢查相減的次序：<span class=\"chem\">3/(x + h) - 3/x = (3x - 3(x + h))/(x(x + h)) = -3h/(x(x + h))</span>，應帶有負號。",
        // EN (option C): Combining fractions requires the product of denominators <span class="chem">x(x + h)</span>, not <span class="chem">x^2 + h^2</span>.
        "2": "合併分數需要使用分母的乘積 <span class=\"chem\">x(x + h)</span>，而非 <span class=\"chem\">x^2 + h^2</span>。",
        // EN (option D): You cannot subtract denominators directly; <span class="chem">1/(x + h) - 1/x != 1/h</span>.
        "3": "不可直接把分母相減；<span class=\"chem\">1/(x + h) - 1/x != 1/h</span>。",
      },
    },

    // ── t5-3-q002 · mcq · foundation · AHL · AHL 5.13 · 2 marks
    "t5-3-q002": {
      // EN: <p>A student attempts to evaluate <span class="chem">lim_{x->0} (cos x) / (x + 2)</span> by differentiating numerator and denominator to obtain <span class="chem">lim_{x->0} (-sin x) / 1 = 0</span>. Why is this working invalid?</p>
      stem: "<p>某學生嘗試計算 <span class=\"chem\">lim_{x->0} (cos x) / (x + 2)</span>，並對分子及分母分別求導而得出 <span class=\"chem\">lim_{x->0} (-sin x) / 1 = 0</span>。為甚麼這個做法無效？</p>",
      options: [
        // EN: At <span class="chem">x = 0</span>, the expression approaches <span class="chem">1/2</span>, which is not an indeterminate form <span class="chem">0/0</span> or <span class="chem">infty/infty</span>.
        "當 <span class=\"chem\">x = 0</span> 時，該式趨近 <span class=\"chem\">1/2</span>，並非 <span class=\"chem\">0/0</span> 或 <span class=\"chem\">infty/infty</span> 的不定型。",
        // EN: The student should have used the quotient rule <span class="chem">(v u' - u v')/v^2</span> when applying L’Hôpital’s rule.
        "該學生在應用洛必達法則時，應使用商法則 <span class=\"chem\">(v u' - u v')/v^2</span>。",
        // EN: The derivative of <span class="chem">cos x</span> is <span class="chem">+sin x</span>, not <span class="chem">-sin x</span>.
        "<span class=\"chem\">cos x</span> 的導數是 <span class=\"chem\">+sin x</span>，而非 <span class=\"chem\">-sin x</span>。",
        // EN: L’Hôpital’s rule can only be used as <span class="chem">x -> infty</span>, never as <span class="chem">x -> 0</span>.
        "洛必達法則只適用於 <span class=\"chem\">x -> infty</span>，不適用於 <span class=\"chem\">x -> 0</span>。",
      ],
      hints: [
        // EN: Substitute <span class="chem">x = 0</span> directly into <span class="chem">(cos x)/(x + 2)</span> before doing any differentiation.
        "在進行任何求導之前，先將 <span class=\"chem\">x = 0</span> 直接代入 <span class=\"chem\">(cos x)/(x + 2)</span>。",
      ],
      // EN: <p>Direct substitution at <span class="chem">x = 0</span> gives <span class="chem">cos(0) / (0 + 2) = 1/2</span>. Because the limit is not of the indeterminate form <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span>, L’Hôpital’s rule does not apply.</p>
      solution: "<p>將 <span class=\"chem\">x = 0</span> 直接代入，得 <span class=\"chem\">cos(0) / (0 + 2) = 1/2</span>。由於該極限並非 <span class=\"chem\">0/0</span> 或 <span class=\"chem\">infty/infty</span> 型不定型，因此不適用洛必達法則。</p>",
      misconception: {
        // EN (option B): L’Hôpital’s rule differentiates numerator and denominator separately—never with the quotient rule—but it requires an indeterminate form first.
        "1": "洛必達法則確是分別對分子與分母求導（絕非使用商法則），但前提是極限必須先為不定型。",
        // EN (option C): The derivative of <span class="chem">cos x</span> is indeed <span class="chem">-sin x</span>; the error is applying L’Hôpital’s rule when the denominator is non-zero.
        "2": "<span class=\"chem\">cos x</span> 的導數確實是 <span class=\"chem\">-sin x</span>；錯誤在於分母非零時仍套用洛必達法則。",
        // EN (option D): L’Hôpital’s rule works for any limit point <span class="chem">x -> a</span> or <span class="chem">x -> +-infty</span>, provided the form is <span class="chem">0/0</span> or <span class="chem">+-infty/+-infty</span>.
        "3": "只要形式為 <span class=\"chem\">0/0</span> 或 <span class=\"chem\">+-infty/+-infty</span>，洛必達法則適用於任何極限點 <span class=\"chem\">x -> a</span> 或 <span class=\"chem\">x -> +-infty</span>。",
      },
    },

    // ── t5-3-q003 · numeric · foundation · AHL · AHL 5.13 · 3 marks
    "t5-3-q003": {
      // EN: <p>Evaluate <span class="chem">lim_{x->0} (e^{3x} - 1 - 3x) / x^2</span>.</p>
      stem: "<p>計算 (Evaluate) <span class=\"chem\">lim_{x->0} (e^{3x} - 1 - 3x) / x^2</span>。</p>",
      hints: [
        // EN: Check that <span class="chem">x = 0</span> gives <span class="chem">0/0</span>, then apply L’Hôpital’s rule once to get <span class="chem">lim_{x->0} (3e^{3x} - 3) / (2x)</span>.
        "檢查 <span class=\"chem\">x = 0</span> 是否得出 <span class=\"chem\">0/0</span>，然後應用洛必達法則一次，得 <span class=\"chem\">lim_{x->0} (3e^{3x} - 3) / (2x)</span>。",
        // EN: Apply L’Hôpital’s rule a second time: <span class="chem">lim_{x->0} (9e^{3x}) / 2</span>.
        "再應用洛必達法則一次：<span class=\"chem\">lim_{x->0} (9e^{3x}) / 2</span>。",
      ],
      // EN: <p>At <span class="chem">x = 0</span>, the limit has the form <span class="chem">0/0</span>. Applying L’Hôpital’s rule twice gives <span class="chem">lim_{x->0} (3e^{3x} - 3)/(2x) = lim_{x->0} (9e^{3x})/2 = 9/2 = 4.5</span>.</p>
      solution: "<p>當 <span class=\"chem\">x = 0</span> 時，極限為 <span class=\"chem\">0/0</span> 型。應用洛必達法則兩次，得 <span class=\"chem\">lim_{x->0} (3e^{3x} - 3)/(2x) = lim_{x->0} (9e^{3x})/2 = 9/2 = 4.5</span>。</p>",
    },

    // ── t5-3-q004 · mcq · foundation · AHL · AHL 5.15 · 2 marks
    "t5-3-q004": {
      // EN: <p>Find the derivative of <span class="chem">f(x) = arcsin(3x)</span> for <span class="chem">|x| &lt; 1/3</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">f(x) = arcsin(3x)</span>（其中 <span class=\"chem\">|x| &lt; 1/3</span>）的導數。</p>",
      options: [
        // EN: <span class="chem">3 / sqrt(1 - 9x^2)</span>
        "<span class=\"chem\">3 / sqrt(1 - 9x^2)</span>",
        // EN: <span class="chem">1 / sqrt(1 - 9x^2)</span>
        "<span class=\"chem\">1 / sqrt(1 - 9x^2)</span>",
        // EN: <span class="chem">3 / sqrt(1 - 3x^2)</span>
        "<span class=\"chem\">3 / sqrt(1 - 3x^2)</span>",
        // EN: <span class="chem">1 / (1 + 9x^2)</span>
        "<span class=\"chem\">1 / (1 + 9x^2)</span>",
      ],
      hints: [
        // EN: Use the Formula Booklet rule <span class="chem">d/du(arcsin u) = 1/sqrt(1 - u^2)</span> with <span class="chem">u = 3x</span> and multiply by <span class="chem">du/dx = 3</span>.
        "運用公式手冊中的法則 <span class=\"chem\">d/du(arcsin u) = 1/sqrt(1 - u^2)</span>，設 <span class=\"chem\">u = 3x</span> 並乘以 <span class=\"chem\">du/dx = 3</span>。",
      ],
      // EN: <p>By the chain rule, <span class="chem">f'(x) = (1 / sqrt(1 - (3x)^2)) × 3 = 3 / sqrt(1 - 9x^2)</span>.</p>
      solution: "<p>由鏈式法則，得 <span class=\"chem\">f'(x) = (1 / sqrt(1 - (3x)^2)) × 3 = 3 / sqrt(1 - 9x^2)</span>。</p>",
      misconception: {
        // EN (option B): You forgot to multiply by the inner derivative <span class="chem">d/dx(3x) = 3</span> from the chain rule.
        "1": "你忘記乘以鏈式法則中的內層導數 <span class=\"chem\">d/dx(3x) = 3</span>。",
        // EN (option C): Remember to square the entire inner argument <span class="chem">(3x)^2 = 9x^2</span> inside the square root.
        "2": "謹記把平方根內的整個內層函數平方：<span class=\"chem\">(3x)^2 = 9x^2</span>。",
        // EN (option D): <span class="chem">1/(1 + u^2)</span> is the derivative of <span class="chem">arctan u</span>, not <span class="chem">arcsin u</span>.
        "3": "<span class=\"chem\">1/(1 + u^2)</span> 是 <span class=\"chem\">arctan u</span> 的導數，而非 <span class=\"chem\">arcsin u</span> 的導數。",
      },
    },

    // ── t5-3-q005 · numeric · foundation · AHL · AHL 5.14 · 4 marks
    "t5-3-q005": {
      // EN: <p>A curve is defined implicitly by <span class="chem">x^2 + xy + y^2 = 7</span>. Find the gradient <span class="chem">dy/dx</span> of the curve at the point <span class="chem">(2, 1)</span>.</p>
      stem: "<p>一條曲線由隱函數方程 <span class=\"chem\">x^2 + xy + y^2 = 7</span> 定義。求 (Find) 該曲線在點 <span class=\"chem\">(2, 1)</span> 處的斜率 <span class=\"chem\">dy/dx</span>。</p>",
      hints: [
        // EN: Differentiate every term with respect to <i>x</i>: <span class="chem">2x + (y + x dy/dx) + 2y dy/dx = 0</span>.
        "對每一項關於 <i>x</i> 求導：<span class=\"chem\">2x + (y + x dy/dx) + 2y dy/dx = 0</span>。",
        // EN: Substitute <span class="chem">x = 2</span> and <span class="chem">y = 1</span> into the differentiated equation and solve for <span class="chem">dy/dx</span>.
        "將 <span class=\"chem\">x = 2</span> 及 <span class=\"chem\">y = 1</span> 代入求導後的方程，並解出 <span class=\"chem\">dy/dx</span>。",
      ],
      // EN: <p>Differentiating implicitly with respect to <i>x</i> gives <span class="chem">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>. At <span class="chem">(2, 1)</span>: <span class="chem">4 + 1 + (2 + 2)(dy/dx) = 0 => 4(dy/dx) = -5 => dy/dx = -5/4 = -1.25</span>.</p>
      solution: "<p>關於 <i>x</i> 進行隱式求導，得 <span class=\"chem\">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>。在 <span class=\"chem\">(2, 1)</span> 處：<span class=\"chem\">4 + 1 + (2 + 2)(dy/dx) = 0 => 4(dy/dx) = -5 => dy/dx = -5/4 = -1.25</span>。</p>",
    },

    // ── t5-3-q006 · multi · foundation · AHL · AHL 5.15–5.16 · 3 marks
    "t5-3-q006": {
      // EN: <p>Select <strong>all</strong> integrals below whose exact value on the given interval equals <span class="chem">pi / 4</span>.</p>
      stem: "<p>選出下列<strong>所有</strong>在給定區間上準確值等於 <span class=\"chem\">pi / 4</span> 的積分。</p>",
      options: [
        // EN: <span class="chem">int_0^1 1 / (1 + x^2) dx</span>
        "<span class=\"chem\">int_0^1 1 / (1 + x^2) dx</span>",
        // EN: <span class="chem">int_0^2 2 / (4 + x^2) dx</span>
        "<span class=\"chem\">int_0^2 2 / (4 + x^2) dx</span>",
        // EN: <span class="chem">int_0^{1/sqrt(2)} 1 / sqrt(1 - x^2) dx</span>
        "<span class=\"chem\">int_0^{1/sqrt(2)} 1 / sqrt(1 - x^2) dx</span>",
        // EN: <span class="chem">int_0^2 1 / (4 + x^2) dx</span>
        "<span class=\"chem\">int_0^2 1 / (4 + x^2) dx</span>",
      ],
      hints: [
        // EN: Check each integral using <span class="chem">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a)</span> and <span class="chem">int 1/sqrt(1 - x^2) dx = arcsin x</span>.
        "使用 <span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a)</span> 及 <span class=\"chem\">int 1/sqrt(1 - x^2) dx = arcsin x</span> 逐一檢查各個積分。",
      ],
      // EN: <p>A: <span class="chem">[arctan x]_0^1 = pi/4</span>. B: <span class="chem">2[(1/2) arctan(x/2)]_0^2 = arctan(1) = pi/4</span>. C: <span class="chem">[arcsin x]_0^{1/sqrt(2)} = pi/4</span>. D gives <span class="chem">pi/8</span>.</p>
      solution: "<p>A：<span class=\"chem\">[arctan x]_0^1 = pi/4</span>。B：<span class=\"chem\">2[(1/2) arctan(x/2)]_0^2 = arctan(1) = pi/4</span>。C：<span class=\"chem\">[arcsin x]_0^{1/sqrt(2)} = pi/4</span>。D 則得出 <span class=\"chem\">pi/8</span>。</p>",
      misconception: {
        // EN (option D): By the Formula Booklet, <span class="chem">int_0^2 1/(2^2 + x^2) dx = [(1/2) arctan(x/2)]_0^2 = (1/2)(pi/4) = pi/8</span> because of the <span class="chem">1/a</span> factor.
        "3": "根據公式手冊，由於前面有 <span class=\"chem\">1/a</span> 因子，<span class=\"chem\">int_0^2 1/(2^2 + x^2) dx = [(1/2) arctan(x/2)]_0^2 = (1/2)(pi/4) = pi/8</span>。",
      },
    },

    // ── t5-3-q007 · order · exam · AHL · AHL 5.16 · 4 marks
    "t5-3-q007": {
      // EN: <p>Arrange the steps in the correct logical order to evaluate the definite integral <span class="chem">int_0^{pi/2} x cos(x) dx</span> using integration by parts.</p>
      stem: "<p>將以下使用分部積分法計算定積分 <span class=\"chem\">int_0^{pi/2} x cos(x) dx</span> 的步驟按正確的邏輯次序排列。</p>",
      options: [
        // EN: Choose <span class="chem">u = x</span> and <span class="chem">dv/dx = cos x</span> following the LIATE priority rule.
        "根據 LIATE 優先次序法則，選擇 <span class=\"chem\">u = x</span> 及 <span class=\"chem\">dv/dx = cos x</span>。",
        // EN: Differentiate and integrate to find <span class="chem">du/dx = 1</span> and <span class=\"chem\">v = sin x</span>.
        "分別求導與積分，得出 <span class=\"chem\">du/dx = 1</span> 及 <span class=\"chem\">v = sin x</span>。",
        // EN: Apply the parts formula: <span class="chem">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>.
        "套用分部積分公式：<span class=\"chem\">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>。",
        // EN: Evaluate the anti-derivative <span class="chem">[x sin x + cos x]_0^{pi/2} = (pi/2 + 0) - (0 + 1) = pi/2 - 1</span>.
        "計算原函數：<span class=\"chem\">[x sin x + cos x]_0^{pi/2} = (pi/2 + 0) - (0 + 1) = pi/2 - 1</span>。",
      ],
      hints: [
        // EN: Start by identifying <i>u</i> and <span class="chem">dv/dx</span>, then compute <span class="chem">du/dx</span> and <i>v</i> before assembling <span class="chem">uv - int v du</span>.
        "先確定 <i>u</i> 與 <span class=\"chem\">dv/dx</span>，然後計算 <span class=\"chem\">du/dx</span> 與 <i>v</i>，再組成 <span class=\"chem\">uv - int v du</span>。",
      ],
      // EN: <p>Choose <span class="chem">u = x, dv/dx = cos x</span>, find <span class="chem">du/dx = 1, v = sin x</span>, write <span class="chem">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>, and evaluate <span class="chem">[x sin x + cos x]_0^{pi/2} = pi/2 - 1</span>.</p>
      solution: "<p>選擇 <span class=\"chem\">u = x, dv/dx = cos x</span>，求得 <span class=\"chem\">du/dx = 1, v = sin x</span>，寫出 <span class=\"chem\">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>，再計算得 <span class=\"chem\">[x sin x + cos x]_0^{pi/2} = pi/2 - 1</span>。</p>",
    },

    // ── t5-3-q008 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q008": {
      // EN: <p>Using the substitution <span class="chem">u = 1 + x^2</span> (or otherwise), find the exact value of <span class="chem">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span>.</p>
      stem: "<p>使用代換法 <span class=\"chem\">u = 1 + x^2</span>（或用其他方法），求 (Find) <span class=\"chem\">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span> 的準確值。</p>",
      hints: [
        // EN: Let <span class="chem">u = 1 + x^2</span>, so <span class="chem">du = 2x dx</span> and <span class="chem">x^2 = u - 1</span>. Transform the limits: <span class="chem">x = 0 -> u = 1</span> and <span class="chem">x = 2 -> u = 5</span>.
        "設 <span class=\"chem\">u = 1 + x^2</span>，則 <span class=\"chem\">du = 2x dx</span> 且 <span class=\"chem\">x^2 = u - 1</span>。轉換積分限：<span class=\"chem\">x = 0 -> u = 1</span> 及 <span class=\"chem\">x = 2 -> u = 5</span>。",
        // EN: Rewrite the integral as <span class="chem">int_1^5 (u - 1) / sqrt(u) du = int_1^5 (u^{1/2} - u^{-1/2}) du</span>.
        "將積分改寫為 <span class=\"chem\">int_1^5 (u - 1) / sqrt(u) du = int_1^5 (u^{1/2} - u^{-1/2}) du</span>。",
      ],
      // EN: <p>Let <span class="chem">u = 1 + x^2</span>, <span class="chem">du = 2x dx</span>, <span class="chem">x^2 = u - 1</span>, with limits <span class="chem">u = 1</span> to <span class="chem">u = 5</span>. Then <span class="chem">int_1^5 (u^{1/2} - u^{-1/2}) du = [(2/3)u^{3/2} - 2u^{1/2}]_1^5 = ((10/3)sqrt(5) - 2sqrt(5)) - (2/3 - 2) = (4/3)sqrt(5) + 4/3 = (4/3)(sqrt(5) + 1) ≈ 4.31</span>.</p>
      solution: "<p>設 <span class=\"chem\">u = 1 + x^2</span>，<span class=\"chem\">du = 2x dx</span>，<span class=\"chem\">x^2 = u - 1</span>，積分限為 <span class=\"chem\">u = 1</span> 至 <span class=\"chem\">u = 5</span>。則 <span class=\"chem\">int_1^5 (u^{1/2} - u^{-1/2}) du = [(2/3)u^{3/2} - 2u^{1/2}]_1^5 = ((10/3)sqrt(5) - 2sqrt(5)) - (2/3 - 2) = (4/3)sqrt(5) + 4/3 = (4/3)(sqrt(5) + 1) ≈ 4.31</span>。</p>",
    },

    // ── t5-3-q009 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q009": {
      // EN: <p>Find the exact value of <span class="chem">int_1^e x^2 ln(x) dx</span>. (Enter an exact expression in terms of <span class="mono">e</span>.)</p>
      stem: "<p>求 (Find) <span class=\"chem\">int_1^e x^2 ln(x) dx</span> 的準確值。（請輸入以 <span class=\"mono\">e</span> 表示的準確式。）</p>",
      hints: [
        // EN: By LIATE, choose <span class="chem">u = ln x</span> (<span class="chem">du/dx = 1/x</span>) and <span class="chem">dv/dx = x^2</span> (<span class="chem">v = x^3 / 3</span>).
        "根據 LIATE，選擇 <span class=\"chem\">u = ln x</span>（<span class=\"chem\">du/dx = 1/x</span>）及 <span class=\"chem\">dv/dx = x^2</span>（<span class=\"chem\">v = x^3 / 3</span>）。",
        // EN: Apply integration by parts: <span class="chem">[(x^3 / 3) ln x]_1^e - int_1^e (x^2 / 3) dx = [x^3 / 3 ln x - x^3 / 9]_1^e</span>.
        "應用分部積分法：<span class=\"chem\">[(x^3 / 3) ln x]_1^e - int_1^e (x^2 / 3) dx = [x^3 / 3 ln x - x^3 / 9]_1^e</span>。",
      ],
      // EN: <p>Let <span class="chem">u = ln x</span> and <span class="chem">dv/dx = x^2</span>, so <span class="chem">du/dx = 1/x</span> and <span class="chem">v = x^3/3</span>. Then <span class="chem">int_1^e x^2 ln x dx = [(x^3/3)ln x]_1^e - int_1^e (x^2/3) dx = (e^3/3 - 0) - [x^3/9]_1^e = e^3/3 - (e^3 - 1)/9 = (2e^3 + 1)/9 ≈ 4.57</span>.</p>
      solution: "<p>設 <span class=\"chem\">u = ln x</span> 及 <span class=\"chem\">dv/dx = x^2</span>，故 <span class=\"chem\">du/dx = 1/x</span> 及 <span class=\"chem\">v = x^3/3</span>。因此 <span class=\"chem\">int_1^e x^2 ln x dx = [(x^3/3)ln x]_1^e - int_1^e (x^2/3) dx = (e^3/3 - 0) - [x^3/9]_1^e = e^3/3 - (e^3 - 1)/9 = (2e^3 + 1)/9 ≈ 4.57</span>。</p>",
    },

    // ── t5-3-q010 · mcq · exam · AHL · AHL 5.15 · 2 marks
    "t5-3-q010": {
      // EN: <p>By completing the square in the denominator, find <span class="chem">int 1 / (x^2 - 4x + 13) dx</span>.</p>
      stem: "<p>透過在分母進行配方，求 (Find) <span class=\"chem\">int 1 / (x^2 - 4x + 13) dx</span>。</p>",
      options: [
        // EN: <span class="chem">(1/3) arctan((x - 2)/3) + C</span>
        "<span class=\"chem\">(1/3) arctan((x - 2)/3) + C</span>",
        // EN: <span class="chem">arctan((x - 2)/3) + C</span>
        "<span class=\"chem\">arctan((x - 2)/3) + C</span>",
        // EN: <span class="chem">(1/9) arctan((x - 2)/9) + C</span>
        "<span class=\"chem\">(1/9) arctan((x - 2)/9) + C</span>",
        // EN: <span class="chem">arcsin((x - 2)/3) + C</span>
        "<span class=\"chem\">arcsin((x - 2)/3) + C</span>",
      ],
      hints: [
        // EN: Complete the square: <span class="chem">x^2 - 4x + 13 = (x - 2)^2 - 4 + 13 = (x - 2)^2 + 3^2</span>.
        "進行配方：<span class=\"chem\">x^2 - 4x + 13 = (x - 2)^2 - 4 + 13 = (x - 2)^2 + 3^2</span>。",
        // EN: Use the Formula Booklet standard integral <span class="chem">int 1/(u^2 + a^2) du = (1/a) arctan(u/a) + C</span> with <span class="chem">u = x - 2</span> and <span class="chem">a = 3</span>.
        "使用公式手冊標準積分 <span class=\"chem\">int 1/(u^2 + a^2) du = (1/a) arctan(u/a) + C</span>，其中 <span class=\"chem\">u = x - 2</span> 及 <span class=\"chem\">a = 3</span>。",
      ],
      // EN: <p>Since <span class="chem">x^2 - 4x + 13 = (x - 2)^2 + 3^2</span>, the integral is <span class="chem">int 1/((x - 2)^2 + 3^2) dx = (1/3) arctan((x - 2)/3) + C</span>.</p>
      solution: "<p>由於 <span class=\"chem\">x^2 - 4x + 13 = (x - 2)^2 + 3^2</span>，該積分為 <span class=\"chem\">int 1/((x - 2)^2 + 3^2) dx = (1/3) arctan((x - 2)/3) + C</span>。</p>",
      misconception: {
        // EN (option B): Don’t forget the <span class="chem">1/a = 1/3</span> coefficient in front of <span class="chem">arctan((x - 2)/3)</span>!
        "1": "切勿忘記 <span class=\"chem\">arctan((x - 2)/3)</span> 前面的係數 <span class=\"chem\">1/a = 1/3</span>！",
        // EN (option C): Since <span class="chem">a^2 = 9</span>, we have <span class="chem">a = 3</span>, not <span class="chem">9</span>.
        "2": "由於 <span class=\"chem\">a^2 = 9</span>，所以 <span class=\"chem\">a = 3</span>，而非 <span class=\"chem\">9</span>。",
        // EN (option D): There is no square root in the denominator, so this is an <span class="chem">arctan</span> integral, not <span class="chem">arcsin</span>.
        "3": "分母中沒有平方根，因此這是 <span class=\"chem\">arctan</span> 積分，而非 <span class=\"chem\">arcsin</span>。",
      },
    },

    // ── t5-3-q011 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q011": {
      // EN: <p>Given that <span class="chem">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span>, find the exact value of <span class="chem">int_3^4 6 / (x^2 - x - 2) dx</span>.</p>
      stem: "<p>已知 <span class=\"chem\">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span>，求 (find) <span class=\"chem\">int_3^4 6 / (x^2 - x - 2) dx</span> 的準確值。</p>",
      hints: [
        // EN: Factor <span class="chem">x^2 - x - 2 = (x - 2)(x + 1)</span>. Cover-up method gives <span class="chem">A = 6/(2 + 1) = 2</span> and <span class="chem">B = 6/(-1 - 2) = -2</span>.
        "因式分解 <span class=\"chem\">x^2 - x - 2 = (x - 2)(x + 1)</span>。利用遮蓋法得 <span class=\"chem\">A = 6/(2 + 1) = 2</span> 及 <span class=\"chem\">B = 6/(-1 - 2) = -2</span>。",
        // EN: Integrate <span class="chem">[2 ln|x - 2| - 2 ln|x + 1|]_3^4 = [2 ln|(x - 2)/(x + 1)|]_3^4</span>.
        "積分得 <span class=\"chem\">[2 ln|x - 2| - 2 ln|x + 1|]_3^4 = [2 ln|(x - 2)/(x + 1)|]_3^4</span>。",
      ],
      // EN: <p>Using partial fractions, <span class="chem">6/((x - 2)(x + 1)) = 2/(x - 2) - 2/(x + 1)</span>. Integrating from <span class="chem">3</span> to <span class="chem">4</span> gives <span class="chem">[2 ln((x - 2)/(x + 1))]_3^4 = 2 ln(2/5) - 2 ln(1/4) = 2 ln(8/5) ≈ 0.940</span>.</p>
      solution: "<p>利用部分分式，得 <span class=\"chem\">6/((x - 2)(x + 1)) = 2/(x - 2) - 2/(x + 1)</span>。從 <span class=\"chem\">3</span> 積分至 <span class=\"chem\">4</span>，得 <span class=\"chem\">[2 ln((x - 2)/(x + 1))]_3^4 = 2 ln(2/5) - 2 ln(1/4) = 2 ln(8/5) ≈ 0.940</span>。</p>",
      // EN: 2 ln(8/5) ≈ 0.940
      answerDisplay: "2 ln(8/5) ≈ 0.940",
    },

    // ── t5-3-q012 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q012": {
      // EN: <p>A spherical balloon is being inflated so that its volume increases at a constant rate of <span class="unit">100 cm3 s-1</span>. Find the rate at which its surface area <span class="chem">A = 4 pi r^2</span> is increasing when the radius is <span class="chem">r = 5</span> <span class="unit">cm</span>.</p>
      stem: "<p>一個球形氣球正在充氣，其體積以 <span class=\"unit\">100 cm3 s-1</span> 的恆定速率增加。求 (Find) 當半徑為 <span class=\"chem\">r = 5</span> <span class=\"unit\">cm</span> 時，其表面面積 <span class=\"chem\">A = 4 pi r^2</span> 的增加速率。</p>",
      hints: [
        // EN: For a sphere, <span class="chem">V = (4/3) pi r^3 => dV/dr = 4 pi r^2</span>, and <span class="chem">A = 4 pi r^2 => dA/dr = 8 pi r</span>.
        "對於球體，<span class=\"chem\">V = (4/3) pi r^3 => dV/dr = 4 pi r^2</span>，且 <span class=\"chem\">A = 4 pi r^2 => dA/dr = 8 pi r</span>。",
        // EN: By the chain rule, <span class="chem">dA/dt = (dA/dr) / (dV/dr) × (dV/dt) = (8 pi r) / (4 pi r^2) × 100 = (2/r) × 100</span>.
        "由鏈式法則，<span class=\"chem\">dA/dt = (dA/dr) / (dV/dr) × (dV/dt) = (8 pi r) / (4 pi r^2) × 100 = (2/r) × 100</span>。",
      ],
      // EN: <p>We have <span class="chem">dV/dr = 4 pi r^2</span> and <span class="chem">dA/dr = 8 pi r</span>. By the chain rule, <span class="chem">dA/dt = (dA/dr)(dr/dt) = (8 pi r) × (100 / (4 pi r^2)) = 200 / r</span>. When <span class="chem">r = 5</span> <span class="unit">cm</span>, <span class="chem">dA/dt = 200 / 5 = 40</span> <span class="unit">cm2 s-1</span>.</p>
      solution: "<p>我們有 <span class=\"chem\">dV/dr = 4 pi r^2</span> 及 <span class=\"chem\">dA/dr = 8 pi r</span>。由鏈式法則，得 <span class=\"chem\">dA/dt = (dA/dr)(dr/dt) = (8 pi r) × (100 / (4 pi r^2)) = 200 / r</span>。當 <span class=\"chem\">r = 5</span> <span class=\"unit\">cm</span> 時，<span class=\"chem\">dA/dt = 200 / 5 = 40</span> <span class=\"unit\">cm2 s-1</span>。</p>",
    },

    // ── t5-3-q013 · mcq · exam · AHL · AHL 5.17 · 2 marks
    "t5-3-q013": {
      // EN: <p>The region bounded by <span class="chem">y = cos x</span>, the <i>x</i>-axis, <span class="chem">x = 0</span>, and <span class="chem">x = pi/2</span> is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. What is the exact volume of the solid formed?</p>
      stem: "<p>由 <span class=\"chem\">y = cos x</span>、<i>x</i> 軸、<span class=\"chem\">x = 0</span> 及 <span class=\"chem\">x = pi/2</span> 所圍成的區域繞 <i>x</i> 軸旋轉 <span class=\"chem\">2pi</span> 弧度。所形成的立體之準確體積是多少？</p>",
      options: [
        // EN: <span class="chem">pi^2 / 4</span>
        "<span class=\"chem\">pi^2 / 4</span>",
        // EN: <span class=\"chem\">pi / 2</span>
        "<span class=\"chem\">pi / 2</span>",
        // EN: <span class="chem">pi^2 / 2</span>
        "<span class=\"chem\">pi^2 / 2</span>",
        // EN: <span class="chem">pi</span>
        "<span class=\"chem\">pi</span>",
      ],
      hints: [
        // EN: Set up <span class="chem">V = pi int_0^{pi/2} cos^2(x) dx</span>.
        "列出 <span class=\"chem\">V = pi int_0^{pi/2} cos^2(x) dx</span>。",
        // EN: Use the double-angle identity <span class="chem">cos^2 x = (1 + cos(2x))/2</span>.
        "使用二倍角恒等式 <span class=\"chem\">cos^2 x = (1 + cos(2x))/2</span>。",
      ],
      // EN: <p><span class="chem">V = pi int_0^{pi/2} cos^2 x dx = (pi/2) int_0^{pi/2} (1 + cos 2x) dx = (pi/2) [x + (1/2)sin 2x]_0^{pi/2} = (pi/2)(pi/2 + 0) = pi^2 / 4</span>.</p>
      solution: "<p><span class=\"chem\">V = pi int_0^{pi/2} cos^2 x dx = (pi/2) int_0^{pi/2} (1 + cos 2x) dx = (pi/2) [x + (1/2)sin 2x]_0^{pi/2} = (pi/2)(pi/2 + 0) = pi^2 / 4</span>。</p>",
      misconception: {
        // EN (option B): You probably dropped the outer factor <span class="chem">pi</span> and also lost the <span class="chem">1/2</span> in <span class="chem">cos^2 x = (1 + cos 2x)/2</span>: that gives <span class="chem">int_0^{pi/2} (1 + cos 2x) dx = pi/2</span>. In fact <span class="chem">int_0^{pi/2} cos^2 x dx = pi/4</span>, so <span class="chem">V = pi(pi/4) = pi^2/4</span>.
        "1": "你很可能漏掉了外層的因子 <span class=\"chem\">pi</span>，又遺漏了 <span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span> 中的 <span class=\"chem\">1/2</span>：這樣會得到 <span class=\"chem\">int_0^{pi/2} (1 + cos 2x) dx = pi/2</span>。事實上 <span class=\"chem\">int_0^{pi/2} cos^2 x dx = pi/4</span>，故 <span class=\"chem\">V = pi(pi/4) = pi^2/4</span>。",
        // EN (option C): Remember <span class="chem">cos^2 x = (1 + cos 2x)/2</span> has a factor of <span class="chem">1/2</span>, so <span class="chem">int_0^{pi/2} cos^2 x dx = pi/4</span>, not <span class="chem">pi/2</span>.
        "2": "謹記 <span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span> 含有因子 <span class=\"chem\">1/2</span>，故 <span class=\"chem\">int_0^{pi/2} cos^2 x dx = pi/4</span>，而非 <span class=\"chem\">pi/2</span>。",
        // EN (option D): That is <span class="chem">pi int_0^{pi/2} cos x dx = pi</span>, which fails to square the radius <i>y</i>.
        "3": "這是 <span class=\"chem\">pi int_0^{pi/2} cos x dx = pi</span>，沒有把半徑 <i>y</i> 平方。",
      },
    },

    // ── t5-3-q014 · short · exam · AHL · AHL 5.14 · 6 marks
    "t5-3-q014": {
      // EN: <p>A curve is given by the implicit equation <span class="chem">x^2 + xy + y^2 = 12</span>.</p><p>(a) Show that <span class="chem">dy/dx = -(2x + y) / (x + 2y)</span>. <strong>[3 marks]</strong></p><p>(b) Hence find the coordinates of the two stationary points on the curve. <strong>[3 marks]</strong></p>
      stem: "<p>一條曲線由隱函數方程 <span class=\"chem\">x^2 + xy + y^2 = 12</span> 給出。</p><p>(a) 證明 (Show that) <span class=\"chem\">dy/dx = -(2x + y) / (x + 2y)</span>。<strong>[3 分]</strong></p><p>(b) 由此求 (Hence find) 該曲線上兩個駐點的坐標。<strong>[3 分]</strong></p>",
      hints: [
        // EN: In part (a), remember to apply the product rule to <span class="chem">xy</span> and the chain rule to <span class="chem">y^2</span>.
        "在 (a) 部，謹記對 <span class=\"chem\">xy</span> 應用積法則，並對 <span class=\"chem\">y^2</span> 應用鏈式法則。",
        // EN: In part (b), a stationary point has <span class="chem">dy/dx = 0</span>, so set the numerator <span class="chem">2x + y = 0</span> and substitute <span class="chem">y = -2x</span> into the original curve.
        "在 (b) 部，駐點滿足 <span class=\"chem\">dy/dx = 0</span>，故令分子 <span class=\"chem\">2x + y = 0</span>，並將 <span class=\"chem\">y = -2x</span> 代入原曲線方程。",
      ],
      // EN: <p>(a) Differentiating both sides with respect to <i>x</i>: <span class="chem">2x + (y + x dy/dx) + 2y dy/dx = 0</span>. Grouping <span class="chem">dy/dx</span> terms gives <span class="chem">(x + 2y) dy/dx = -(2x + y) => dy/dx = -(2x + y)/(x + 2y)</span>.</p><p>(b) Stationary points occur where <span class="chem">dy/dx = 0 => 2x + y = 0 => y = -2x</span>. Substituting into the curve: <span class="chem">x^2 + x(-2x) + (-2x)^2 = 12 => 3x^2 = 12 => x = +-2</span>. Thus the stationary points are <span class="chem">(2, -4)</span> and <span class="chem">(-2, 4)</span>.</p>
      answer: "<p>(a) 兩邊同時關於 <i>x</i> 求導：<span class=\"chem\">2x + (y + x dy/dx) + 2y dy/dx = 0</span>。合併含 <span class=\"chem\">dy/dx</span> 的項，得 <span class=\"chem\">(x + 2y) dy/dx = -(2x + y) => dy/dx = -(2x + y)/(x + 2y)</span>。</p><p>(b) 駐點出現於 <span class=\"chem\">dy/dx = 0 => 2x + y = 0 => y = -2x</span>。代入曲線方程：<span class=\"chem\">x^2 + x(-2x) + (-2x)^2 = 12 => 3x^2 = 12 => x = +-2</span>。因此駐點為 <span class=\"chem\">(2, -4)</span> 及 <span class=\"chem\">(-2, 4)</span>。</p>",
      markscheme: [
        // EN: M1: applies product rule to <span class="chem">xy</span> to get <span class="chem">y + x(dy/dx)</span> and chain rule to <span class="chem">y^2</span> to get <span class="chem">2y(dy/dx)</span>.
        "M1: 對 <span class=\"chem\">xy</span> 應用積法則得 <span class=\"chem\">y + x(dy/dx)</span>，並對 <span class=\"chem\">y^2</span> 應用鏈式法則得 <span class=\"chem\">2y(dy/dx)</span>。",
        // EN: A1: correct differentiated equation <span class=\"chem\">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>.
        "A1: 求導後的方程正確：<span class=\"chem\">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>。",
        // EN: A1: groups the <span class="chem">dy/dx</span> terms: <span class="chem">(x + 2y) dy/dx = -(2x + y)</span>, leading to the given answer <span class="chem">dy/dx = -(2x + y)/(x + 2y)</span> AG (no mark for the given line).
        "A1: 合併 <span class=\"chem\">dy/dx</span> 項得 <span class=\"chem\">(x + 2y) dy/dx = -(2x + y)</span>，從而得出題目給出的答案 <span class=\"chem\">dy/dx = -(2x + y)/(x + 2y)</span> AG（寫出給定結果本身不得分）。",
        // EN: M1: sets numerator <span class="chem">2x + y = 0</span> (<span class="chem">y = -2x</span>) for stationary points.
        "M1: 就駐點令分子 <span class=\"chem\">2x + y = 0</span>（<span class=\"chem\">y = -2x</span>）。",
        // EN: M1: substitutes <span class="chem">y = -2x</span> into <span class="chem">x^2 + xy + y^2 = 12</span> to obtain <span class=\"chem\">3x^2 = 12</span>.
        "M1: 將 <span class=\"chem\">y = -2x</span> 代入 <span class=\"chem\">x^2 + xy + y^2 = 12</span>，得出 <span class=\"chem\">3x^2 = 12</span>。",
        // EN: A1: both coordinate pairs <span class="chem">(2, -4)</span> and <span class="chem">(-2, 4)</span> correct.
        "A1: 兩對坐標 <span class=\"chem\">(2, -4)</span> 及 <span class=\"chem\">(-2, 4)</span> 均正確。",
      ],
    },

    // ── t5-3-q015 · numeric · challenge · AHL · AHL 5.16 · 6 marks
    "t5-3-q015": {
      // EN: <p>By integrating by parts twice, find the exact value of the cyclic integral <span class="chem">I = int_0^{pi/2} e^{2x} sin(x) dx</span>. (You can type an exact expression in terms of <span class="mono">e</span> and <span class="mono">pi</span> such as <span class="mono">(e^pi-1)/2</span>.)</p>
      stem: "<p>透過兩次分部積分法，求 (Find) 循環積分 <span class=\"chem\">I = int_0^{pi/2} e^{2x} sin(x) dx</span> 的準確值。（你可輸入以 <span class=\"mono\">e</span> 及 <span class=\"mono\">pi</span> 表示的準確式，例如 <span class=\"mono\">(e^pi-1)/2</span>。）</p>",
      hints: [
        // EN: Decode: "cyclic" means that integrating by parts twice brings back the original integral <span class="chem">I</span>. Keep the same choice <span class="chem">dv/dx = e^{2x}</span> both times, then solve the resulting linear equation for <span class="chem">I</span>.
        "解碼：「循環」表示分部積分兩次後會重新得到原來的積分 <span class=\"chem\">I</span>。兩次都使用相同的選擇 <span class=\"chem\">dv/dx = e^{2x}</span>，然後解所得關於 <span class=\"chem\">I</span> 的一次方程。",
        // EN: First parts (<span class="chem">u = sin x, dv/dx = e^{2x}</span>): <span class="chem">I = [(1/2)e^{2x} sin x]_0^{pi/2} - (1/2) int_0^{pi/2} e^{2x} cos x dx = (1/2)e^{pi} - (1/2) int_0^{pi/2} e^{2x} cos x dx</span>.
        "第一次分部積分（<span class=\"chem\">u = sin x, dv/dx = e^{2x}</span>）：<span class=\"chem\">I = [(1/2)e^{2x} sin x]_0^{pi/2} - (1/2) int_0^{pi/2} e^{2x} cos x dx = (1/2)e^{pi} - (1/2) int_0^{pi/2} e^{2x} cos x dx</span>。",
        // EN: Second parts on <span class="chem">int_0^{pi/2} e^{2x} cos x dx</span> (<span class="chem">u = cos x, dv/dx = e^{2x}</span>) gives <span class="chem">[(1/2)e^{2x} cos x]_0^{pi/2} + (1/2)I = -1/2 + (1/2)I</span>. Substitute back and solve for <i>I</i>!
        "對 <span class=\"chem\">int_0^{pi/2} e^{2x} cos x dx</span> 作第二次分部積分（<span class=\"chem\">u = cos x, dv/dx = e^{2x}</span>）得 <span class=\"chem\">[(1/2)e^{2x} cos x]_0^{pi/2} + (1/2)I = -1/2 + (1/2)I</span>。代回原式並解出 <i>I</i>！",
      ],
      // EN: <p>Integrating by parts twice gives <span class="chem">I = (1/2)e^{pi} - (1/2)(-1/2 + (1/2)I) = (1/2)e^{pi} + 1/4 - (1/4)I</span>. Thus <span class="chem">(5/4)I = (2e^{pi} + 1)/4 => I = (2e^{pi} + 1)/5 ≈ 9.46</span>.</p>
      solution: "<p>兩次分部積分後得 <span class=\"chem\">I = (1/2)e^{pi} - (1/2)(-1/2 + (1/2)I) = (1/2)e^{pi} + 1/4 - (1/4)I</span>。故 <span class=\"chem\">(5/4)I = (2e^{pi} + 1)/4 => I = (2e^{pi} + 1)/5 ≈ 9.46</span>。</p>",
    },

    // ── t5-3-q016 · numeric · challenge · AHL · AHL 5.13 · 6 marks
    "t5-3-q016": {
      // EN: <p>Given that the limit <span class="chem">lim_{x->0} (sin(2x) + k x cos(x)) / x^3</span> exists and is finite, find the exact value of that limit.</p>
      stem: "<p>已知極限 <span class=\"chem\">lim_{x->0} (sin(2x) + k x cos(x)) / x^3</span> 存在且為有限值，求 (find) 該極限的準確值。</p>",
      hints: [
        // EN: Decode: <span class="chem">k</span> is not given, but "the limit exists and is finite" fixes it. The form is <span class="chem">0/0</span>; if after one application of L’Hôpital’s rule the denominator still tends to 0, the numerator must tend to 0 as well.
        "解碼：題目沒有給出 <span class=\"chem\">k</span>，但「極限存在且有限」這個條件決定了它。這是 <span class=\"chem\">0/0</span> 型；若使用一次洛必達法則後分母仍趨向 0，則分子也必須趨向 0。",
        // EN: Apply L’Hôpital’s rule once: <span class="chem">lim_{x->0} (2 cos(2x) + k cos x - k x sin x) / (3x^2)</span>. Since the denominator goes to 0, the numerator at <span class="chem">x = 0</span> must also be 0: <span class="chem">2 + k = 0 => k = -2</span>.
        "應用洛必達法則一次：<span class=\"chem\">lim_{x->0} (2 cos(2x) + k cos x - k x sin x) / (3x^2)</span>。由於分母趨近 0，分子在 <span class=\"chem\">x = 0</span> 時亦必為 0：<span class=\"chem\">2 + k = 0 => k = -2</span>。",
        // EN: Substitute <span class="chem">k = -2</span> and apply L’Hôpital’s rule twice more (or use Maclaurin expansions) to evaluate <span class="chem">lim_{x->0} (sin(2x) - 2x cos x) / x^3</span>.
        "代入 <span class=\"chem\">k = -2</span>，再應用洛必達法則兩次（或使用麥克勞林展開式）來計算 <span class=\"chem\">lim_{x->0} (sin(2x) - 2x cos x) / x^3</span>。",
      ],
      // EN: <p>After one step of L’Hôpital’s rule, the numerator at <span class="chem">x = 0</span> is <span class="chem">2 + k</span>. For the limit to be finite, <span class="chem">2 + k = 0 => k = -2</span>. With <span class="chem">k = -2</span>, differentiating top and bottom twice more (or expanding <span class="chem">(2x - 8x^3/6) - 2x(1 - x^2/2) = -x^3/3</span>) gives <span class="chem">-1/3 ≈ -0.333</span>.</p>
      solution: "<p>應用一次洛必達法則後，分子在 <span class=\"chem\">x = 0</span> 的值為 <span class=\"chem\">2 + k</span>。要使極限為有限值，必須 <span class=\"chem\">2 + k = 0 => k = -2</span>。代入 <span class=\"chem\">k = -2</span> 後，再對分子與分母求導兩次（或展開為 <span class=\"chem\">(2x - 8x^3/6) - 2x(1 - x^2/2) = -x^3/3</span>），得出 <span class=\"chem\">-1/3 ≈ -0.333</span>。</p>",
    },

    // ── t5-3-q017 · short · challenge · AHL · AHL 5.16–5.17 · 7 marks
    "t5-3-q017": {
      // EN: <p>For each non-negative integer <i>n</i>, let <span class="chem">I_n = int_1^e x (ln x)^n dx</span>.</p><p>(a) Find the exact value of <span class="chem">I_0</span> and <span class="chem">I_1</span>. <strong>[3 marks]</strong></p><p>(b) Using integration by parts, show that <span class="chem">I_n = e^2 / 2 - (n / 2) I_{n-1}</span> for <span class="chem">n &gt;= 1</span>, and hence find the exact volume generated when the curve <span class="chem">y = sqrt(x) ln x</span> between <span class="chem">x = 1</span> and <span class="chem">x = e</span> is rotated <span class="chem">2pi</span> radians about the <i>x</i>-axis. <strong>[4 marks]</strong></p>
      stem: "<p>對每個非負整數 <i>n</i>，設 <span class=\"chem\">I_n = int_1^e x (ln x)^n dx</span>。</p><p>(a) 求 (Find) <span class=\"chem\">I_0</span> 及 <span class=\"chem\">I_1</span> 的準確值。<strong>[3 分]</strong></p><p>(b) 利用分部積分法，證明 (show that) 當 <span class=\"chem\">n &gt;= 1</span> 時，<span class=\"chem\">I_n = e^2 / 2 - (n / 2) I_{n-1}</span>，並由此求 (hence find) 曲線 <span class=\"chem\">y = sqrt(x) ln x</span> 在 <span class=\"chem\">x = 1</span> 與 <span class=\"chem\">x = e</span> 之間繞 <i>x</i> 軸旋轉 <span class=\"chem\">2pi</span> 弧度所生成的立體之準確體積。<strong>[4 分]</strong></p>",
      hints: [
        // EN: Decode: <span class="chem">I_n</span> defines a family of integrals linked by a reduction formula. The volume in (b) is a member of the family in disguise, because <span class="chem">y^2 = x (ln x)^2</span>.
        "解碼：<span class=\"chem\">I_n</span> 定義了一族由遞推公式聯繫的積分。因為 <span class=\"chem\">y^2 = x (ln x)^2</span>，(b) 中的體積其實是這一族中的一員。",
        // EN: For part (b), choose <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> so that <span class="chem">v = x^2 / 2</span> cancels the <span class="chem">1/x</span> in <span class="chem">du/dx</span>.
        "在 (b) 部，選擇 <span class=\"chem\">u = (ln x)^n</span> 及 <span class=\"chem\">dv/dx = x</span>，使 <span class=\"chem\">v = x^2 / 2</span> 與 <span class=\"chem\">du/dx</span> 中的 <span class=\"chem\">1/x</span> 相消。",
        // EN: Notice that rotating <span class="chem">y = sqrt(x) ln x</span> about the <i>x</i>-axis gives <span class="chem">V = pi int_1^e x (ln x)^2 dx = pi I_2</span>.
        "留意將 <span class=\"chem\">y = sqrt(x) ln x</span> 繞 <i>x</i> 軸旋轉，可得 <span class=\"chem\">V = pi int_1^e x (ln x)^2 dx = pi I_2</span>。",
      ],
      // EN: <p>(a) <span class="chem">I_0 = int_1^e x dx = [x^2/2]_1^e = (e^2 - 1)/2</span>. Using parts on <span class="chem">I_1</span> (or the reduction formula with <span class="chem">n = 1</span>): <span class="chem">I_1 = e^2/2 - (1/2)((e^2 - 1)/2) = (e^2 + 1)/4</span>.</p><p>(b) Let <span class="chem">u = (ln x)^n => du/dx = n(ln x)^{n-1}/x</span> and <span class="chem">dv/dx = x => v = x^2/2</span>. Then <span class="chem">I_n = [(x^2/2)(ln x)^n]_1^e - int_1^e (x^2/2)(n(ln x)^{n-1}/x) dx = e^2/2 - (n/2) I_{n-1}</span>. The volume is <span class="chem">V = pi int_1^e x(ln x)^2 dx = pi I_2 = pi(e^2/2 - I_1) = pi(e^2/2 - (e^2 + 1)/4) = pi(e^2 - 1)/4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">I_0 = int_1^e x dx = [x^2/2]_1^e = (e^2 - 1)/2</span>。對 <span class=\"chem\">I_1</span> 使用分部積分法（或以 <span class=\"chem\">n = 1</span> 代入遞推公式）：<span class=\"chem\">I_1 = e^2/2 - (1/2)((e^2 - 1)/2) = (e^2 + 1)/4</span>。</p><p>(b) 設 <span class=\"chem\">u = (ln x)^n => du/dx = n(ln x)^{n-1}/x</span> 及 <span class=\"chem\">dv/dx = x => v = x^2/2</span>。則 <span class=\"chem\">I_n = [(x^2/2)(ln x)^n]_1^e - int_1^e (x^2/2)(n(ln x)^{n-1}/x) dx = e^2/2 - (n/2) I_{n-1}</span>。體積為 <span class=\"chem\">V = pi int_1^e x(ln x)^2 dx = pi I_2 = pi(e^2/2 - I_1) = pi(e^2/2 - (e^2 + 1)/4) = pi(e^2 - 1)/4</span>。</p>",
      markscheme: [
        // EN: A1: correct value <span class="chem">I_0 = (e^2 - 1)/2</span>.
        "A1: <span class=\"chem\">I_0 = (e^2 - 1)/2</span> 的值正確。",
        // EN: M1: applies integration by parts (or the reduction formula with <span class="chem">n = 1</span>) to <span class="chem">I_1</span>.
        "M1: 對 <span class=\"chem\">I_1</span> 應用分部積分法（或以 <span class=\"chem\">n = 1</span> 代入遞推公式）。",
        // EN: A1: <span class="chem">I_1 = (e^2 + 1)/4</span>.
        "A1: <span class=\"chem\">I_1 = (e^2 + 1)/4</span>。",
        // EN: M1: chooses <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> in <span class="chem">I_n</span>.
        "M1: 在 <span class=\"chem\">I_n</span> 中選擇 <span class=\"chem\">u = (ln x)^n</span> 及 <span class=\"chem\">dv/dx = x</span>。",
        // EN: A1: correct boundary term <span class="chem">[(x^2/2)(ln x)^n]_1^e = e^2/2</span> and remaining integral <span class="chem">(n/2) int_1^e x (ln x)^{n-1} dx</span>, leading to the given result <span class="chem">I_n = e^2/2 - (n/2) I_{n-1}</span> AG (no mark for the given line).
        "A1: 正確的邊界項 <span class=\"chem\">[(x^2/2)(ln x)^n]_1^e = e^2/2</span> 及餘下的積分 <span class=\"chem\">(n/2) int_1^e x (ln x)^{n-1} dx</span>，從而得出題目給出的結果 <span class=\"chem\">I_n = e^2/2 - (n/2) I_{n-1}</span> AG（寫出給定結果本身不得分）。",
        // EN: M1: identifies volume <span class="chem">V = pi int_1^e y^2 dx = pi I_2</span>.
        "M1: 辨識體積為 <span class=\"chem\">V = pi int_1^e y^2 dx = pi I_2</span>。",
        // EN: A1: substitutes <span class="chem">n = 2</span> to obtain <span class="chem">V = pi(e^2 - 1)/4</span>.
        "A1: 代入 <span class=\"chem\">n = 2</span> 得出 <span class=\"chem\">V = pi(e^2 - 1)/4</span>。",
      ],
    },

    // ── t5-3-q018 · numeric · foundation · AHL · AHL 5.15 · 3 marks
    "t5-3-q018": {
      // EN: <p>Find the exact value of <span class="chem">int_0^2 3^x dx</span>. (Enter an exact expression such as <span class="mono">5/ln(2)</span>.)</p>
      stem: "<p>求 (Find) <span class=\"chem\">int_0^2 3^x dx</span> 的準確值。（請輸入準確式，例如 <span class=\"mono\">5/ln(2)</span>。）</p>",
      hints: [
        // EN: Use the Formula Booklet result <span class="chem">int a^x dx = a^x / ln a + C</span>.
        "使用公式手冊的結果 <span class=\"chem\">int a^x dx = a^x / ln a + C</span>。",
        // EN: Evaluate <span class="chem">[3^x / ln 3]_0^2</span>.
        "計算 <span class=\"chem\">[3^x / ln 3]_0^2</span>。",
      ],
      // EN: <p><span class="chem">int_0^2 3^x dx = [3^x / ln 3]_0^2 = (9 - 1)/ln 3 = 8/ln 3 ≈ 7.28</span>.</p>
      solution: "<p><span class=\"chem\">int_0^2 3^x dx = [3^x / ln 3]_0^2 = (9 - 1)/ln 3 = 8/ln 3 ≈ 7.28</span>。</p>",
      // EN: 8 / ln 3 ≈ 7.28
      answerDisplay: "8 / ln 3 ≈ 7.28",
    },
    // ── t5-3-q019 · mcq · foundation · AHL · AHL 5.15 · 2 marks
    "t5-3-q019": {
      // EN: <p>Find <span class="chem">d/dx (arctan(x/2))</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">d/dx (arctan(x/2))</span>。</p>",
      options: [
        // EN: <span class="chem">2/(4 + x^2)</span>
        "<span class=\"chem\">2/(4 + x^2)</span>",
        // EN: <span class="chem">4/(4 + x^2)</span>
        "<span class=\"chem\">4/(4 + x^2)</span>",
        // EN: <span class="chem">1/sqrt(4 - x^2)</span>
        "<span class=\"chem\">1/sqrt(4 - x^2)</span>",
        // EN: <span class="chem">8/(4 + x^2)</span>
        "<span class=\"chem\">8/(4 + x^2)</span>",
      ],
      hints: [
        // EN: Use <span class="chem">d/dx arctan u = (1/(1 + u^2)) (du/dx)</span> with <span class="chem">u = x/2</span>.
        "利用 <span class=\"chem\">d/dx arctan u = (1/(1 + u^2)) (du/dx)</span>，其中 <span class=\"chem\">u = x/2</span>。",
      ],
      // EN: <p><span class="chem">d/dx arctan(x/2) = (1/2) × 1/(1 + x^2/4) = (1/2) × 4/(4 + x^2) = 2/(4 + x^2)</span>.</p>
      solution: "<p><span class=\"chem\">d/dx arctan(x/2) = (1/2) × 1/(1 + x^2/4) = (1/2) × 4/(4 + x^2) = 2/(4 + x^2)</span>。</p>",
      misconception: {
        // EN (option B): That is <span class="chem">1/(1 + (x/2)^2) = 4/(4 + x^2)</span>: you forgot to multiply by the inner derivative <span class="chem">1/2</span>.
        "1": "這是 <span class=\"chem\">1/(1 + (x/2)^2) = 4/(4 + x^2)</span>：你忘記乘以內層導數 <span class=\"chem\">1/2</span>。",
        // EN (option C): That is the derivative of <span class="chem">arcsin(x/2)</span>, not <span class="chem">arctan(x/2)</span>.
        "2": "這是 <span class=\"chem\">arcsin(x/2)</span> 的導數，而非 <span class=\"chem\">arctan(x/2)</span> 的導數。",
        // EN (option D): You multiplied by <span class="chem">2</span> instead of by the inner derivative <span class="chem">1/2</span>.
        "3": "你乘了 <span class=\"chem\">2</span>，而應乘以內層導數 <span class=\"chem\">1/2</span>。",
      },
    },
    // ── t5-3-q020 · numeric · exam · AHL · AHL 5.17 · 4 marks
    "t5-3-q020": {
      // EN: <p>Find the exact area of the region enclosed by the curve <span class="chem">x = y^2 - 4</span> and the <i>y</i>-axis.</p>
      stem: "<p>求 (Find) 由曲線 <span class=\"chem\">x = y^2 - 4</span> 與 <i>y</i> 軸所圍成區域面積的準確值。</p>",
      hints: [
        // EN: The curve meets the <i>y</i>-axis where <span class="chem">x = 0</span>, that is at <span class="chem">y = -2</span> and <span class="chem">y = 2</span>.
        "曲線在 <span class=\"chem\">x = 0</span> 處與 <i>y</i> 軸相交，即 <span class=\"chem\">y = -2</span> 及 <span class=\"chem\">y = 2</span>。",
        // EN: Between these, <span class="chem">x = y^2 - 4 &lt;= 0</span>, so the area is <span class="chem">int_{-2}^2 (4 - y^2) dy</span>.
        "在兩者之間 <span class=\"chem\">x = y^2 - 4 &lt;= 0</span>，故面積為 <span class=\"chem\">int_{-2}^2 (4 - y^2) dy</span>。",
      ],
      // EN: <p>The curve crosses the <i>y</i>-axis at <span class="chem">y = +-2</span> and lies to the left of it in between, so <span class="chem">A = int_{-2}^2 (4 - y^2) dy = [4y - y^3/3]_{-2}^2 = (8 - 8/3) - (-8 + 8/3) = 32/3 ≈ 10.7</span>.</p>
      solution: "<p>曲線在 <span class=\"chem\">y = +-2</span> 處穿過 <i>y</i> 軸，並在兩者之間位於其左方，故 <span class=\"chem\">A = int_{-2}^2 (4 - y^2) dy = [4y - y^3/3]_{-2}^2 = (8 - 8/3) - (-8 + 8/3) = 32/3 ≈ 10.7</span>。</p>",
      // EN: 32/3 ≈ 10.7
      answerDisplay: "32/3 ≈ 10.7",
    },
    // ── t5-3-q021 · numeric · exam · AHL · AHL 5.17 · 5 marks
    "t5-3-q021": {
      // EN: <p>The region bounded by the curve <span class="chem">y = ln x</span>, the <i>x</i>-axis, the <i>y</i>-axis and the line <span class="chem">y = 1</span> is rotated through <span class="chem">2pi</span> radians about the <strong><i>y</i>-axis</strong>. Find the exact volume of the solid formed. (Enter an exact expression such as <span class="mono">pi*(e^3-1)/3</span>.)</p>
      stem: "<p>由曲線 <span class=\"chem\">y = ln x</span>、<i>x</i> 軸、<i>y</i> 軸與直線 <span class=\"chem\">y = 1</span> 所圍成的區域繞 <strong><i>y</i> 軸</strong>旋轉 <span class=\"chem\">2pi</span> 弧度。求 (Find) 所形成立體的準確體積。（請輸入準確式，例如 <span class=\"mono\">pi*(e^3-1)/3</span>。）</p>",
      hints: [
        // EN: Rearrange <span class="chem">y = ln x</span> as <span class="chem">x = e^y</span>, so <span class="chem">x^2 = e^{2y}</span>.
        "把 <span class=\"chem\">y = ln x</span> 改寫為 <span class=\"chem\">x = e^y</span>，故 <span class=\"chem\">x^2 = e^{2y}</span>。",
        // EN: Use <span class="chem">V = pi int_0^1 x^2 dy = pi int_0^1 e^{2y} dy</span>.
        "使用 <span class=\"chem\">V = pi int_0^1 x^2 dy = pi int_0^1 e^{2y} dy</span>。",
      ],
      // EN: <p><span class="chem">x = e^y</span>, so <span class="chem">V = pi int_0^1 e^{2y} dy = pi [e^{2y}/2]_0^1 = pi(e^2 - 1)/2 ≈ 10.0</span>.</p>
      solution: "<p><span class=\"chem\">x = e^y</span>，故 <span class=\"chem\">V = pi int_0^1 e^{2y} dy = pi [e^{2y}/2]_0^1 = pi(e^2 - 1)/2 ≈ 10.0</span>。</p>",
      // EN: π(e² − 1)/2 ≈ 10.0
      answerDisplay: "π(e² − 1)/2 ≈ 10.0",
    },
    // ── t5-3-q022 · numeric · exam · AHL · AHL 5.12 · 5 marks
    "t5-3-q022": {
      // EN: <p>The function <i>f</i> is defined by <span class="chem">f(x) = a x^3 + 2</span> for <span class="chem">x &lt;= 1</span> and <span class="chem">f(x) = b x - 1</span> for <span class="chem">x &gt; 1</span>, where <i>a</i> and <i>b</i> are constants. Given that <i>f</i> is continuous and differentiable at <span class="chem">x = 1</span>, find the value of <i>b</i>.</p>
      stem: "<p>函數 <i>f</i> 定義為：當 <span class=\"chem\">x &lt;= 1</span> 時 <span class=\"chem\">f(x) = a x^3 + 2</span>，當 <span class=\"chem\">x &gt; 1</span> 時 <span class=\"chem\">f(x) = b x - 1</span>，其中 <i>a</i> 與 <i>b</i> 為常數。已知 <i>f</i> 在 <span class=\"chem\">x = 1</span> 處連續且可微，求 (find) <i>b</i> 的值。</p>",
      hints: [
        // EN: Continuous at <span class="chem">x = 1</span>: the two pieces give the same value, <span class="chem">a + 2 = b - 1</span>.
        "在 <span class=\"chem\">x = 1</span> 處連續：兩段的函數值相同，<span class=\"chem\">a + 2 = b - 1</span>。",
        // EN: Differentiable at <span class="chem">x = 1</span>: the two derivatives agree, <span class="chem">3a = b</span>.
        "在 <span class=\"chem\">x = 1</span> 處可微：兩段的導數相同，<span class=\"chem\">3a = b</span>。",
      ],
      // EN: <p>Continuity: <span class="chem">a + 2 = b - 1 => b = a + 3</span>. Differentiability: <span class="chem">3a(1)^2 = b => b = 3a</span>. So <span class="chem">3a = a + 3 => a = 3/2</span> and <span class="chem">b = 9/2 = 4.5</span>.</p>
      solution: "<p>連續：<span class=\"chem\">a + 2 = b - 1 => b = a + 3</span>。可微：<span class=\"chem\">3a(1)^2 = b => b = 3a</span>。故 <span class=\"chem\">3a = a + 3 => a = 3/2</span>，且 <span class=\"chem\">b = 9/2 = 4.5</span>。</p>",
      // EN: 9/2 = 4.5
      answerDisplay: "9/2 = 4.5",
    },
    // ── t5-3-q023 · mcq · exam · AHL · AHL 5.13 · 2 marks
    "t5-3-q023": {
      // EN: <p>Find <span class="chem">lim_{x->infty} x^2 / e^x</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">lim_{x->infty} x^2 / e^x</span>。</p>",
      options: [
        // EN: <span class="chem">0</span>
        "<span class=\"chem\">0</span>",
        // EN: <span class="chem">1</span>
        "<span class=\"chem\">1</span>",
        // EN: <span class="chem">2</span>
        "<span class=\"chem\">2</span>",
        // EN: <span class="chem">infty</span>
        "<span class=\"chem\">infty</span>",
      ],
      hints: [
        // EN: The limit has the form <span class="chem">infty/infty</span>, so L’Hôpital’s rule applies. You will need it twice.
        "此極限屬 <span class=\"chem\">infty/infty</span> 形式，故可應用洛必達法則，而且需要應用兩次。",
      ],
      // EN: <p><span class="chem">lim_{x->infty} x^2/e^x = lim_{x->infty} 2x/e^x = lim_{x->infty} 2/e^x = 0</span> (L’Hôpital’s rule twice, each time of the form <span class="chem">infty/infty</span>).</p>
      solution: "<p><span class=\"chem\">lim_{x->infty} x^2/e^x = lim_{x->infty} 2x/e^x = lim_{x->infty} 2/e^x = 0</span>（應用洛必達法則兩次，每次均為 <span class=\"chem\">infty/infty</span> 形式）。</p>",
      misconception: {
        // EN (option B): A limit of <span class="chem">1</span> would need <span class="chem">x^2</span> and <span class="chem">e^x</span> to grow at the same rate, but <span class="chem">e^x</span> grows much faster: two applications of L’Hôpital’s rule give <span class="chem">lim_{x->infty} 2/e^x = 0</span>.
        "1": "極限為 <span class=\"chem\">1</span> 需要 <span class=\"chem\">x^2</span> 與 <span class=\"chem\">e^x</span> 以相同速度增長，但 <span class=\"chem\">e^x</span> 增長得快得多：使用兩次洛必達法則得到 <span class=\"chem\">lim_{x->infty} 2/e^x = 0</span>。",
        // EN (option C): You stopped at <span class="chem">2/e^x</span> and treated <span class="chem">e^x</span> as <span class="chem">1</span>. As <span class="chem">x -> infty</span>, <span class="chem">2/e^x -> 0</span>.
        "2": "你停在 <span class=\"chem\">2/e^x</span> 並把 <span class=\"chem\">e^x</span> 當作 <span class=\"chem\">1</span>。當 <span class=\"chem\">x -> infty</span> 時，<span class=\"chem\">2/e^x -> 0</span>。",
        // EN (option D): Both <span class="chem">x^2</span> and <span class="chem">e^x</span> tend to infinity (<span class="chem">infty/infty</span>), but <span class="chem">e^x</span> grows much faster. Apply L’Hôpital’s rule twice.
        "3": "<span class=\"chem\">x^2</span> 與 <span class=\"chem\">e^x</span> 均趨向無限（<span class=\"chem\">infty/infty</span>），但 <span class=\"chem\">e^x</span> 增長得快得多。應用洛必達法則兩次。",
      },
    },
  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('zh-Hant', 't5-3.q', {
  questions: {

    // ── t5-3-q024 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q024": {
      // EN: <p>A hemispherical bowl has inner radius <span class="unit">2 m</span>. When the water in the bowl has depth <i>h</i> metres, the volume of water is <span class="chem">V = (pi/3) h^2 (6 - h)</span> <span class="unit">m3</span>. Water is poured in at a constant rate of <span class="unit">0.25 m3 min-1</span>.</p><p>Find the rate at which the depth of the water is increasing at the instant when the bowl contains <span class="unit">5 m3</span> of water.</p>
      stem: "<p>一個半球形碗的內半徑為 <span class=\"unit\">2 m</span>。當碗中的水深為 <i>h</i> 米時，水的體積為 <span class=\"chem\">V = (pi/3) h^2 (6 - h)</span> <span class=\"unit\">m3</span>。水以 <span class=\"unit\">0.25 m3 min-1</span> 的恆定速率注入碗中。</p><p>求 (Find) 碗中盛有 <span class=\"unit\">5 m3</span> 水的一刻，水深增加的速率。</p>",
      hints: [
        // EN: Decode: this is related rates. You know <span class="chem">dV/dt</span> and want <span class="chem">dh/dt</span>, but the moment is described by a volume, not a depth, so you must first find <i>h</i>.
        "解碼：這是相關變化率問題。你已知 <span class=\"chem\">dV/dt</span>，要求的是 <span class=\"chem\">dh/dt</span>；但該一刻是以體積而非深度描述的，所以必須先求出 <i>h</i>。",
        // EN: Solve <span class="chem">(pi/3) h^2 (6 - h) = 5</span> on your GDC for <span class="chem">0 &lt; h &lt; 2</span>.
        "在 GDC 上就 <span class=\"chem\">0 &lt; h &lt; 2</span> 解 <span class=\"chem\">(pi/3) h^2 (6 - h) = 5</span>。",
        // EN: Expand <span class="chem">V = (pi/3)(6h^2 - h^3)</span>, so <span class="chem">dV/dh = pi(4h - h^2)</span>. Then <span class="chem">dh/dt = (dV/dt) / (dV/dh)</span>.
        "展開 <span class=\"chem\">V = (pi/3)(6h^2 - h^3)</span>，故 <span class=\"chem\">dV/dh = pi(4h - h^2)</span>。然後 <span class=\"chem\">dh/dt = (dV/dt) / (dV/dh)</span>。",
      ],
      // EN: <p>Decode: a related-rates question in which the instant is given by the volume. GDC: <span class="chem">(pi/3)h^2(6 - h) = 5 => h = 0.97475…</span> (the only root with <span class="chem">0 &lt; h &lt; 2</span>). Then <span class="chem">dV/dh = pi(4h - h^2) = 9.2641…</span>, so <span class="chem">dh/dt = 0.25 / 9.2641… = 0.0270</span> <span class="unit">m min-1</span> (3 s.f.).</p>
      solution: "<p>解碼：這是一道以體積給出該一刻的相關變化率問題。GDC：<span class=\"chem\">(pi/3)h^2(6 - h) = 5 => h = 0.97475…</span>（滿足 <span class=\"chem\">0 &lt; h &lt; 2</span> 的唯一根）。然後 <span class=\"chem\">dV/dh = pi(4h - h^2) = 9.2641…</span>，故 <span class=\"chem\">dh/dt = 0.25 / 9.2641… = 0.0270</span> <span class=\"unit\">m min-1</span>（3 位有效數字）。</p>",
    },

    // ── t5-3-q025 · numeric · exam · AHL · AHL 5.14, 5.15 · 5 marks
    "t5-3-q025": {
      // EN: <p>A ladder of length <span class="unit">6.5 m</span> leans against a vertical wall with its foot on horizontal ground. The foot of the ladder slides away from the wall at a constant <span class="unit">0.3 m s-1</span>. Let <span class="chem">theta</span> be the angle between the ladder and the ground.</p><p>Find the rate at which <span class="chem">theta</span> is decreasing, in radians per second, at the instant when the foot of the ladder is <span class="unit">4.1 m</span> from the wall.</p>
      stem: "<p>一把長 <span class=\"unit\">6.5 m</span> 的梯子斜靠在一幅鉛垂的牆上，梯腳置於水平地面。梯腳以恆定的 <span class=\"unit\">0.3 m s-1</span> 滑離牆壁。設 <span class=\"chem\">theta</span> 為梯子與地面所成的角。</p><p>求 (Find) 梯腳離牆 <span class=\"unit\">4.1 m</span> 的一刻，<span class=\"chem\">theta</span> 減少的速率（以弧度每秒為單位）。</p>",
      hints: [
        // EN: Decode: link the distance of the foot, <i>x</i>, to the angle: <span class="chem">x = 6.5 cos theta</span>. You are given <span class="chem">dx/dt</span> and want <span class="chem">d theta/dt</span>.
        "解碼：把梯腳的距離 <i>x</i> 與角聯繫起來：<span class=\"chem\">x = 6.5 cos theta</span>。已知 <span class=\"chem\">dx/dt</span>，要求 <span class=\"chem\">d theta/dt</span>。",
        // EN: Differentiate with respect to <i>t</i>: <span class="chem">dx/dt = -6.5 sin theta (d theta/dt)</span>.
        "兩邊對 <i>t</i> 求導：<span class=\"chem\">dx/dt = -6.5 sin theta (d theta/dt)</span>。",
        // EN: At the instant, <span class="chem">cos theta = 4.1/6.5</span>, so <span class="chem">6.5 sin theta = sqrt(6.5^2 - 4.1^2)</span>, the height of the top of the ladder.
        "在該一刻，<span class=\"chem\">cos theta = 4.1/6.5</span>，故 <span class=\"chem\">6.5 sin theta = sqrt(6.5^2 - 4.1^2)</span>，即梯頂的高度。",
      ],
      // EN: <p>Decode: the angle and the foot distance are linked by <span class="chem">x = 6.5 cos theta</span>. Differentiating, <span class="chem">dx/dt = -6.5 sin theta (d theta/dt)</span>. When <span class="chem">x = 4.1</span>, <span class="chem">6.5 sin theta = sqrt(6.5^2 - 4.1^2) = 5.0438…</span>. So <span class="chem">d theta/dt = -0.3 / 5.0438… = -0.0595</span>: the angle is decreasing at <span class="chem">0.0595</span> <span class="unit">rad s-1</span> (3 s.f.).</p>
      solution: "<p>解碼：角與梯腳距離由 <span class=\"chem\">x = 6.5 cos theta</span> 聯繫。求導得 <span class=\"chem\">dx/dt = -6.5 sin theta (d theta/dt)</span>。當 <span class=\"chem\">x = 4.1</span> 時，<span class=\"chem\">6.5 sin theta = sqrt(6.5^2 - 4.1^2) = 5.0438…</span>。故 <span class=\"chem\">d theta/dt = -0.3 / 5.0438… = -0.0595</span>：角以 <span class=\"chem\">0.0595</span> <span class=\"unit\">rad s-1</span> 的速率減少（3 位有效數字）。</p>",
    },

    // ── t5-3-q026 · short · challenge · AHL · AHL 5.14 · 9 marks
    "t5-3-q026": {
      // EN: <p>A water tank is an inverted right circular cone, vertex at the bottom, of height <span class="unit">5 m</span>. When the water is <i>h</i> metres deep, the radius of the water surface is <span class="chem">0.6h</span> metres. Water is pumped in at <span class="unit">0.5 m3 min-1</span>, and at the same time it leaks out of a hole at the vertex at a rate of <span class="chem">0.2 sqrt(h)</span> <span class="unit">m3 min-1</span>.</p><p>(a) Show that the volume of water in the tank is <span class="chem">V = 0.12 pi h^3</span>. <strong>[2 marks]</strong></p><p>(b) Find the rate at which the depth is changing when <span class="chem">h = 1.8</span>. <strong>[4 marks]</strong></p><p>(c) The tank starts empty. Determine whether the tank will eventually overflow. Justify your answer. <strong>[3 marks]</strong></p>
      stem: "<p>一個水缸是頂點向下的倒置直立圓錐體，高 <span class=\"unit\">5 m</span>。當水深為 <i>h</i> 米時，水面的半徑為 <span class=\"chem\">0.6h</span> 米。水以 <span class=\"unit\">0.5 m3 min-1</span> 泵入水缸，同時水從頂點處的小孔以 <span class=\"chem\">0.2 sqrt(h)</span> <span class=\"unit\">m3 min-1</span> 的速率漏出。</p><p>(a) 證明 (Show that) 水缸中水的體積為 <span class=\"chem\">V = 0.12 pi h^3</span>。<strong>[2 分]</strong></p><p>(b) 求 (Find) 當 <span class=\"chem\">h = 1.8</span> 時水深的變化率。<strong>[4 分]</strong></p><p>(c) 水缸起初是空的。確定 (Determine) 水缸最終會否溢出，並提出理據 (Justify)。<strong>[3 分]</strong></p>",
      hints: [
        // EN: Decode: two rates act at once, so the net rate is <span class="chem">dV/dt = (in) - (out)</span>. Part (c) hides a question about when <span class="chem">dh/dt</span> becomes zero.
        "解碼：兩個速率同時作用，所以淨速率為 <span class=\"chem\">dV/dt = (in) - (out)</span>（注入減去流出）。(c) 部其實隱藏着一個問題：<span class=\"chem\">dh/dt</span> 何時變為零？",
        // EN: For (a), use similar triangles: <span class="chem">r = 0.6h</span> in the cone formula.
        "在 (a) 部，利用相似三角形：把 <span class=\"chem\">r = 0.6h</span> 代入圓錐體體積公式。",
        // EN: For (b), divide the net <span class="chem">dV/dt</span> by <span class="chem">dV/dh = 0.36 pi h^2</span>.
        "在 (b) 部，把淨 <span class=\"chem\">dV/dt</span> 除以 <span class=\"chem\">dV/dh = 0.36 pi h^2</span>。",
        // EN: For (c), the level rises while <span class="chem">0.5 - 0.2 sqrt(h) &gt; 0</span>. Compare the depth where this becomes zero with the tank height.
        "在 (c) 部，當 <span class=\"chem\">0.5 - 0.2 sqrt(h) &gt; 0</span> 時水位上升。把此式變為零時的水深與水缸的高度比較。",
      ],
      // EN: <p>Decode: the net rate of change of volume is inflow minus leak, and "will it overflow?" means "does the depth stop rising before <span class="chem">h = 5</span>?" (a) <span class="chem">V = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>. (b) <span class="chem">dh/dt = (0.5 - 0.2 sqrt(1.8)) / (0.36 pi (1.8)^2) = 0.0632</span> <span class="unit">m min-1</span>. (c) <span class="chem">dh/dt = 0 <=> sqrt(h) = 2.5 <=> h = 6.25</span>. Since <span class="chem">6.25 &gt; 5</span>, the depth is still increasing when it reaches <span class="unit">5 m</span>, so the tank overflows.</p>
      solution: "<p>解碼：體積的淨變化率等於注入量減去漏出量；「會否溢出？」的意思是「水深會否在 <span class=\"chem\">h = 5</span> 之前停止上升？」(a) <span class=\"chem\">V = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>。(b) <span class=\"chem\">dh/dt = (0.5 - 0.2 sqrt(1.8)) / (0.36 pi (1.8)^2) = 0.0632</span> <span class=\"unit\">m min-1</span>。(c) <span class=\"chem\">dh/dt = 0 <=> sqrt(h) = 2.5 <=> h = 6.25</span>。由於 <span class=\"chem\">6.25 &gt; 5</span>，水深到達 <span class=\"unit\">5 m</span> 時仍在增加，所以水缸會溢出。</p>",
      // EN: <p>(a) <span class="chem">V = (1/3) pi r^2 h = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>.</p><p>(b) <span class="chem">dV/dt = 0.5 - 0.2 sqrt(h)</span> and <span class="chem">dV/dh = 0.36 pi h^2</span>, so <span class="chem">dh/dt = (0.5 - 0.2 sqrt(h)) / (0.36 pi h^2)</span>. At <span class="chem">h = 1.8</span>: <span class="chem">dh/dt = 0.23167… / 3.66435… = 0.0632</span> <span class="unit">m min-1</span>.</p><p>(c) The depth keeps rising while <span class="chem">0.5 - 0.2 sqrt(h) &gt; 0</span>, that is while <span class="chem">h &lt; 6.25</span>. The tank is only <span class="unit">5 m</span> deep, and at <span class="chem">h = 5</span> the net inflow is <span class="chem">0.5 - 0.2 sqrt(5) = 0.0528 &gt; 0</span>, so the level is still rising when it reaches the top: the tank overflows.</p>
      answer: "<p>(a) <span class=\"chem\">V = (1/3) pi r^2 h = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>。</p><p>(b) <span class=\"chem\">dV/dt = 0.5 - 0.2 sqrt(h)</span> 及 <span class=\"chem\">dV/dh = 0.36 pi h^2</span>，故 <span class=\"chem\">dh/dt = (0.5 - 0.2 sqrt(h)) / (0.36 pi h^2)</span>。當 <span class=\"chem\">h = 1.8</span> 時：<span class=\"chem\">dh/dt = 0.23167… / 3.66435… = 0.0632</span> <span class=\"unit\">m min-1</span>。</p><p>(c) 當 <span class=\"chem\">0.5 - 0.2 sqrt(h) &gt; 0</span>，即 <span class=\"chem\">h &lt; 6.25</span> 時，水深持續上升。水缸只有 <span class=\"unit\">5 m</span> 深，而在 <span class=\"chem\">h = 5</span> 時淨注入率為 <span class=\"chem\">0.5 - 0.2 sqrt(5) = 0.0528 &gt; 0</span>，所以水位到達頂部時仍在上升：水缸會溢出。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">V = (1/3) pi r^2 h</span> with <span class="chem">r = 0.6h</span>.
        "M1: 使用 <span class=\"chem\">V = (1/3) pi r^2 h</span> 並代入 <span class=\"chem\">r = 0.6h</span>。",
        // EN: A1: <span class="chem">(1/3) pi (0.36h^2) h</span> seen, leading to <span class="chem">V = 0.12 pi h^3</span> AG (no mark for the given line).
        "A1: 寫出 <span class=\"chem\">(1/3) pi (0.36h^2) h</span>，從而得出 <span class=\"chem\">V = 0.12 pi h^3</span> AG（寫出給定結果本身不得分）。",
        // EN: M1: net rate <span class="chem">dV/dt = 0.5 - 0.2 sqrt(h)</span> (inflow minus leak).
        "M1: 淨速率 <span class=\"chem\">dV/dt = 0.5 - 0.2 sqrt(h)</span>（注入量減去漏出量）。",
        // EN: M1: <span class="chem">dV/dh = 0.36 pi h^2</span> and uses <span class="chem">dh/dt = (dV/dt)/(dV/dh)</span>.
        "M1: <span class=\"chem\">dV/dh = 0.36 pi h^2</span>，並使用 <span class=\"chem\">dh/dt = (dV/dt)/(dV/dh)</span>。",
        // EN: A1: correct substitution of <span class="chem">h = 1.8</span>: <span class="chem">0.23167… / 3.66435…</span>.
        "A1: 正確代入 <span class=\"chem\">h = 1.8</span>：<span class=\"chem\">0.23167… / 3.66435…</span>。",
        // EN: A1: <span class="chem">dh/dt = 0.0632</span> <span class="unit">m min-1</span>.
        "A1: <span class=\"chem\">dh/dt = 0.0632</span> <span class=\"unit\">m min-1</span>。",
        // EN: M1: considers the sign of <span class="chem">0.5 - 0.2 sqrt(h)</span> (or solves <span class="chem">dh/dt = 0</span>).
        "M1: 考慮 <span class=\"chem\">0.5 - 0.2 sqrt(h)</span> 的正負號（或解 <span class=\"chem\">dh/dt = 0</span>）。",
        // EN: A1: the level stops rising only at <span class="chem">h = 6.25</span>.
        "A1: 水位只在 <span class=\"chem\">h = 6.25</span> 時才停止上升。",
        // EN: R1: <span class="chem">6.25 &gt; 5</span> (net inflow still positive at <span class="chem">h = 5</span>), so the tank overflows.
        "R1: <span class=\"chem\">6.25 &gt; 5</span>（在 <span class=\"chem\">h = 5</span> 時淨注入率仍為正），所以水缸會溢出。",
      ],
    },

    // ── t5-3-q027 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q027": {
      // EN: <p>The curve <i>C</i> has equation <span class="chem">x^3 + y^3 = 6xy</span>. The point <i>P</i> on <i>C</i> has <i>x</i>-coordinate <span class="chem">1</span> and <i>y</i>-coordinate greater than <span class="chem">1</span>.</p><p>Find the gradient of <i>C</i> at <i>P</i>.</p>
      stem: "<p>曲線 <i>C</i> 的方程為 <span class=\"chem\">x^3 + y^3 = 6xy</span>。<i>C</i> 上的點 <i>P</i> 的 <i>x</i> 坐標為 <span class=\"chem\">1</span>，而 <i>y</i> 坐標大於 <span class=\"chem\">1</span>。</p><p>求 (Find) <i>C</i> 在 <i>P</i> 的斜率。</p>",
      hints: [
        // EN: First find <i>P</i>: put <span class="chem">x = 1</span> in the equation and solve <span class="chem">y^3 - 6y + 1 = 0</span> on your GDC. Take the root greater than 1.
        "先求 <i>P</i>：把 <span class=\"chem\">x = 1</span> 代入方程，並在 GDC 上解 <span class=\"chem\">y^3 - 6y + 1 = 0</span>。取大於 1 的根。",
        // EN: Differentiate implicitly: <span class="chem">3x^2 + 3y^2 (dy/dx) = 6y + 6x (dy/dx)</span>.
        "進行隱函數微分：<span class=\"chem\">3x^2 + 3y^2 (dy/dx) = 6y + 6x (dy/dx)</span>。",
        // EN: Rearrange to <span class="chem">dy/dx = (6y - 3x^2)/(3y^2 - 6x)</span> and substitute the coordinates of <i>P</i>.
        "整理成 <span class=\"chem\">dy/dx = (6y - 3x^2)/(3y^2 - 6x)</span>，再代入 <i>P</i> 的坐標。",
      ],
      // EN: <p>With <span class="chem">x = 1</span>: <span class="chem">y^3 - 6y + 1 = 0</span>. Its roots are <span class="chem">-2.529…, 0.167…, 2.3615…</span>, so <span class="chem">P = (1, 2.3615…)</span>. Implicitly, <span class="chem">3x^2 + 3y^2 y' = 6y + 6xy'</span>, so <span class="chem">dy/dx = (6y - 3x^2)/(3y^2 - 6x) = 11.1688… / 10.7296… = 1.04</span> (3 s.f.).</p>
      solution: "<p>當 <span class=\"chem\">x = 1</span> 時：<span class=\"chem\">y^3 - 6y + 1 = 0</span>。其根為 <span class=\"chem\">-2.529…, 0.167…, 2.3615…</span>，故 <span class=\"chem\">P = (1, 2.3615…)</span>。以隱函數微分得 <span class=\"chem\">3x^2 + 3y^2 y' = 6y + 6xy'</span>，故 <span class=\"chem\">dy/dx = (6y - 3x^2)/(3y^2 - 6x) = 11.1688… / 10.7296… = 1.04</span>（3 位有效數字）。</p>",
    },

    // ── t5-3-q028 · short · challenge · AHL · AHL 5.14 · 10 marks
    "t5-3-q028": {
      // EN: <p>A curve has equation <span class="chem">x^3 + xy + y^2 = 7</span>.</p><p>(a) Show that <span class="chem">dy/dx = -(3x^2 + y)/(x + 2y)</span>. <strong>[3 marks]</strong></p><p>(b) Find the coordinates of the points on the curve where the tangent is parallel to the line <span class="chem">y = x</span>. <strong>[4 marks]</strong></p><p>(c) Find the coordinates of the point on the curve where the tangent is vertical. <strong>[3 marks]</strong></p>
      stem: "<p>一條曲線的方程為 <span class=\"chem\">x^3 + xy + y^2 = 7</span>。</p><p>(a) 證明 (Show that) <span class=\"chem\">dy/dx = -(3x^2 + y)/(x + 2y)</span>。<strong>[3 分]</strong></p><p>(b) 求 (Find) 曲線上切線與直線 <span class=\"chem\">y = x</span> 平行的各點的坐標。<strong>[4 分]</strong></p><p>(c) 求 (Find) 曲線上切線為鉛垂線的點的坐標。<strong>[3 分]</strong></p>",
      hints: [
        // EN: Decode: "tangent parallel to <span class="chem">y = x</span>" means <span class="chem">dy/dx = 1</span>; "tangent vertical" means the denominator of <span class="chem">dy/dx</span> is zero. Each condition gives a line through the points, which you then intersect with the curve.
        "解碼：「切線與 <span class=\"chem\">y = x</span> 平行」表示 <span class=\"chem\">dy/dx = 1</span>；「切線為鉛垂線」表示 <span class=\"chem\">dy/dx</span> 的分母為零。每個條件都給出一條通過所求各點的直線，再把它與曲線求交點。",
        // EN: In (b), clear the fraction: <span class="chem">-(3x^2 + y) = x + 2y</span>, then make <i>y</i> the subject.
        "在 (b) 部，先消去分數：<span class=\"chem\">-(3x^2 + y) = x + 2y</span>，然後把 <i>y</i> 變為主項。",
        // EN: Substitute <span class="chem">y = -(3x^2 + x)/3</span> into <span class="chem">x^3 + xy + y^2 = 7</span> and solve with a GDC (graph or polynomial solver).
        "把 <span class=\"chem\">y = -(3x^2 + x)/3</span> 代入 <span class=\"chem\">x^3 + xy + y^2 = 7</span>，並用 GDC（圖像或多項式求解功能）求解。",
        // EN: In (c), substitute <span class="chem">y = -x/2</span> into the curve and check the numerator is not also zero.
        "在 (c) 部，把 <span class=\"chem\">y = -x/2</span> 代入曲線方程，並檢查分子不同時為零。",
      ],
      // EN: <p>Decode: both (b) and (c) are conditions on <span class="chem">dy/dx</span> that become a second equation; solve it simultaneously with the curve. (b) gives <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>; (c) gives <span class="chem">(2, -1)</span>.</p>
      solution: "<p>解碼：(b) 和 (c) 都是關於 <span class=\"chem\">dy/dx</span> 的條件，各自化為第二條方程；把它與曲線方程聯立求解。(b) 得 <span class=\"chem\">(1.51, -2.79)</span> 及 <span class=\"chem\">(-1.86, -2.86)</span>；(c) 得 <span class=\"chem\">(2, -1)</span>。</p>",
      // EN: <p>(a) <span class="chem">3x^2 + (y + x dy/dx) + 2y dy/dx = 0 => (x + 2y) dy/dx = -(3x^2 + y) => dy/dx = -(3x^2 + y)/(x + 2y)</span>.</p><p>(b) <span class="chem">dy/dx = 1 => -(3x^2 + y) = x + 2y => y = -(3x^2 + x)/3</span>. Substituting into the curve and solving on a GDC: <span class="chem">9x^4 + 6x^3 - 2x^2 - 63 = 0</span>, so <span class="chem">x = 1.5107…</span> or <span class="chem">x = -1.8650…</span>. The points are <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>.</p><p>(c) Vertical tangent where the denominator is zero: <span class="chem">x + 2y = 0 => y = -x/2</span>. Then <span class="chem">x^3 - x^2/2 + x^2/4 = 7 => x^3 - x^2/4 - 7 = 0 => x = 2</span>, so the point is <span class="chem">(2, -1)</span> (the numerator <span class="chem">3x^2 + y = 11 != 0</span> there).</p>
      answer: "<p>(a) <span class=\"chem\">3x^2 + (y + x dy/dx) + 2y dy/dx = 0 => (x + 2y) dy/dx = -(3x^2 + y) => dy/dx = -(3x^2 + y)/(x + 2y)</span>。</p><p>(b) <span class=\"chem\">dy/dx = 1 => -(3x^2 + y) = x + 2y => y = -(3x^2 + x)/3</span>。代入曲線方程並在 GDC 上求解：<span class=\"chem\">9x^4 + 6x^3 - 2x^2 - 63 = 0</span>，故 <span class=\"chem\">x = 1.5107…</span> 或 <span class=\"chem\">x = -1.8650…</span>。所求各點為 <span class=\"chem\">(1.51, -2.79)</span> 及 <span class=\"chem\">(-1.86, -2.86)</span>。</p><p>(c) 分母為零時切線為鉛垂線：<span class=\"chem\">x + 2y = 0 => y = -x/2</span>。於是 <span class=\"chem\">x^3 - x^2/2 + x^2/4 = 7 => x^3 - x^2/4 - 7 = 0 => x = 2</span>，故該點為 <span class=\"chem\">(2, -1)</span>（該處分子 <span class=\"chem\">3x^2 + y = 11 != 0</span>）。</p>",
      markscheme: [
        // EN: M1: implicit differentiation, with the product rule on <span class="chem">xy</span>.
        "M1: 進行隱函數微分，並對 <span class=\"chem\">xy</span> 應用積法則。",
        // EN: A1: <span class="chem">3x^2 + y + x dy/dx + 2y dy/dx = 0</span>.
        "A1: <span class=\"chem\">3x^2 + y + x dy/dx + 2y dy/dx = 0</span>。",
        // EN: A1: collects terms, <span class="chem">(x + 2y) dy/dx = -(3x^2 + y)</span>, leading to the given result AG (no mark for the given line).
        "A1: 合併各項得 <span class=\"chem\">(x + 2y) dy/dx = -(3x^2 + y)</span>，從而得出題目給出的結果 AG（寫出給定結果本身不得分）。",
        // EN: M1: sets <span class="chem">-(3x^2 + y)/(x + 2y) = 1</span>.
        "M1: 令 <span class=\"chem\">-(3x^2 + y)/(x + 2y) = 1</span>。",
        // EN: A1: <span class="chem">y = -(3x^2 + x)/3</span> (or equivalent).
        "A1: <span class=\"chem\">y = -(3x^2 + x)/3</span>（或等價式）。",
        // EN: M1: substitutes into the equation of the curve and solves with a GDC.
        "M1: 代入曲線方程並用 GDC 求解。",
        // EN: A1: both points <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>.
        "A1: 兩點 <span class=\"chem\">(1.51, -2.79)</span> 及 <span class=\"chem\">(-1.86, -2.86)</span> 均正確。",
        // EN: M1: sets the denominator <span class="chem">x + 2y = 0</span>.
        "M1: 令分母 <span class=\"chem\">x + 2y = 0</span>。",
        // EN: M1: substitutes <span class="chem">y = -x/2</span> to get <span class="chem">x^3 - x^2/4 - 7 = 0</span>.
        "M1: 代入 <span class=\"chem\">y = -x/2</span> 得 <span class=\"chem\">x^3 - x^2/4 - 7 = 0</span>。",
        // EN: A1: <span class="chem">(2, -1)</span>.
        "A1: <span class=\"chem\">(2, -1)</span>。",
      ],
    },

    // ── t5-3-q029 · numeric · challenge · AHL · AHL 5.14 · 6 marks
    "t5-3-q029": {
      // EN: <p>The closed curve <span class="chem">x^4 + xy + y^2 = 20</span> is the outline of a garden bed drawn on a plan, with the <i>y</i>-axis pointing north. Find how far north of the <i>x</i>-axis the most northerly point of the bed lies.</p>
      stem: "<p>閉曲線 <span class=\"chem\">x^4 + xy + y^2 = 20</span> 是平面圖上一個花圃的輪廓，<i>y</i> 軸指向正北。求 (Find) 花圃最北的一點位於 <i>x</i> 軸以北多遠。</p>",
      hints: [
        // EN: Decode: "the most northerly point" is the greatest <i>y</i>-coordinate on the curve, which is where the tangent is horizontal: <span class="chem">dy/dx = 0</span>.
        "解碼：「最北的一點」就是曲線上 <i>y</i> 坐標最大的點，該處切線為水平：<span class=\"chem\">dy/dx = 0</span>。",
        // EN: Differentiate implicitly: <span class="chem">4x^3 + y + x(dy/dx) + 2y(dy/dx) = 0</span>. Setting <span class="chem">dy/dx = 0</span> gives <span class="chem">y = -4x^3</span>.
        "進行隱函數微分：<span class=\"chem\">4x^3 + y + x(dy/dx) + 2y(dy/dx) = 0</span>。令 <span class=\"chem\">dy/dx = 0</span> 得 <span class=\"chem\">y = -4x^3</span>。",
        // EN: Substitute <span class="chem">y = -4x^3</span> into the curve: <span class="chem">16x^6 - 3x^4 - 20 = 0</span>. Solve on your GDC and choose the root that gives the larger <i>y</i>.
        "把 <span class=\"chem\">y = -4x^3</span> 代入曲線方程：<span class=\"chem\">16x^6 - 3x^4 - 20 = 0</span>。在 GDC 上求解，並選取使 <i>y</i> 較大的根。",
      ],
      // EN: <p>Decode: the most northerly point is the maximum of <i>y</i> on the curve, where <span class="chem">dy/dx = 0</span>. Implicitly, <span class="chem">(x + 2y) dy/dx = -(4x^3 + y)</span>, so <span class="chem">dy/dx = 0 => y = -4x^3</span>. Then <span class="chem">x^4 - 4x^4 + 16x^6 = 20 => 16x^6 - 3x^4 - 20 = 0 => x = +-1.06934…</span>. <span class="chem">x = -1.06934…</span> gives <span class="chem">y = 4.89</span> (the other gives <span class="chem">y = -4.89</span>, the most southerly point). The bed reaches <span class="chem">4.89</span> units north of the <i>x</i>-axis.</p>
      solution: "<p>解碼：最北的一點是曲線上 <i>y</i> 的最大值，該處 <span class=\"chem\">dy/dx = 0</span>。以隱函數微分得 <span class=\"chem\">(x + 2y) dy/dx = -(4x^3 + y)</span>，故 <span class=\"chem\">dy/dx = 0 => y = -4x^3</span>。於是 <span class=\"chem\">x^4 - 4x^4 + 16x^6 = 20 => 16x^6 - 3x^4 - 20 = 0 => x = +-1.06934…</span>。<span class=\"chem\">x = -1.06934…</span> 給出 <span class=\"chem\">y = 4.89</span>（另一根給出 <span class=\"chem\">y = -4.89</span>，即最南的一點）。花圃最遠到達 <i>x</i> 軸以北 <span class=\"chem\">4.89</span> 個單位。</p>",
    },

    // ── t5-3-q030 · numeric · exam · AHL · AHL 5.17 · 5 marks
    "t5-3-q030": {
      // EN: <p>The region <i>R</i> is bounded by the curves <span class="chem">y = 2 cos x</span> and <span class="chem">y = x^2</span> and the <i>y</i>-axis, for <span class="chem">x &gt;= 0</span>. The region <i>R</i> is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the volume of the solid formed.</p>
      stem: "<p>區域 <i>R</i> 由曲線 <span class=\"chem\">y = 2 cos x</span>、<span class=\"chem\">y = x^2</span> 及 <i>y</i> 軸所圍成，其中 <span class=\"chem\">x &gt;= 0</span>。把區域 <i>R</i> 繞 <i>x</i> 軸旋轉 <span class=\"chem\">2pi</span> 弧度。求 (Find) 所得立體的體積。</p>",
      hints: [
        // EN: Find where the curves meet for <span class="chem">x &gt; 0</span>: solve <span class="chem">2 cos x = x^2</span> on your GDC.
        "求兩曲線在 <span class=\"chem\">x &gt; 0</span> 的交點：在 GDC 上解 <span class=\"chem\">2 cos x = x^2</span>。",
        // EN: The solid has a hole: use outer radius <span class="chem">2 cos x</span> and inner radius <span class="chem">x^2</span>, so <span class="chem">V = pi int_0^a ((2cos x)^2 - (x^2)^2) dx</span>.
        "該立體中間是空心的：外半徑為 <span class=\"chem\">2 cos x</span>，內半徑為 <span class=\"chem\">x^2</span>，故 <span class=\"chem\">V = pi int_0^a ((2cos x)^2 - (x^2)^2) dx</span>。",
        // EN: Do not square the difference <span class="chem">(2cos x - x^2)</span>.
        "不要把差 <span class=\"chem\">(2cos x - x^2)</span> 平方。",
      ],
      // EN: <p>GDC: <span class="chem">2 cos x = x^2 => a = 1.02169…</span>. The washer formula gives <span class="chem">V = pi int_0^a (4cos^2 x - x^4) dx = 8.52</span> (3 s.f.).</p>
      solution: "<p>GDC：<span class=\"chem\">2 cos x = x^2 => a = 1.02169…</span>。墊圈法公式給出 <span class=\"chem\">V = pi int_0^a (4cos^2 x - x^4) dx = 8.52</span>（3 位有效數字）。</p>",
    },

    // ── t5-3-q031 · short · challenge · AHL · AHL 5.17 · 8 marks
    "t5-3-q031": {
      // EN: <p>The inside of a bowl is formed by rotating the curve <span class="chem">y = x^4/50 + x^2/10</span>, for <span class="chem">x &gt;= 0</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis. Lengths are in centimetres, and the bowl is <span class="unit">5 cm</span> deep.</p><p>(a) Show that <span class="chem">x^2 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>. <strong>[3 marks]</strong></p><p>(b) Find the capacity of the bowl. <strong>[2 marks]</strong></p><p>(c) Find the depth of the water when the bowl is half full. <strong>[3 marks]</strong></p>
      stem: "<p>一個碗的內部是把曲線 <span class=\"chem\">y = x^4/50 + x^2/10</span>（<span class=\"chem\">x &gt;= 0</span>）繞 <i>y</i> 軸旋轉 <span class=\"chem\">2pi</span> 弧度而成。長度以厘米為單位，碗深 <span class=\"unit\">5 cm</span>。</p><p>(a) 證明 (Show that) <span class=\"chem\">x^2 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>。<strong>[3 分]</strong></p><p>(b) 求 (Find) 碗的容量。<strong>[2 分]</strong></p><p>(c) 求 (Find) 碗盛滿一半時的水深。<strong>[3 分]</strong></p>",
      hints: [
        // EN: Decode: rotation about the <i>y</i>-axis means you integrate <span class="chem">pi x^2</span> with respect to <i>y</i>, so you need <span class="chem">x^2</span> in terms of <i>y</i>. "Half full" is an equation with the upper limit <i>h</i> as the unknown.
        "解碼：繞 <i>y</i> 軸旋轉表示要把 <span class=\"chem\">pi x^2</span> 對 <i>y</i> 積分，所以需要以 <i>y</i> 表示 <span class=\"chem\">x^2</span>。「盛滿一半」是一條以上限 <i>h</i> 為未知數的方程。",
        // EN: In (a), write <span class="chem">u = x^2</span>: the equation becomes the quadratic <span class="chem">0.02u^2 + 0.1u - y = 0</span>.
        "在 (a) 部，設 <span class=\"chem\">u = x^2</span>：方程變為二次方程 <span class=\"chem\">0.02u^2 + 0.1u - y = 0</span>。",
        // EN: In (b), integrate <span class="chem">pi x^2</span> from <span class="chem">y = 0</span> to <span class="chem">y = 5</span> on your GDC.
        "在 (b) 部，在 GDC 上把 <span class=\"chem\">pi x^2</span> 從 <span class=\"chem\">y = 0</span> 積分至 <span class=\"chem\">y = 5</span>。",
        // EN: In (c), solve <span class="chem">pi int_0^h 25(sqrt(0.01 + 0.08y) - 0.1) dy = 65.95</span> for <i>h</i>. The depth is more than half of 5, because the bowl is wider at the top.
        "在 (c) 部，就 <i>h</i> 解 <span class=\"chem\">pi int_0^h 25(sqrt(0.01 + 0.08y) - 0.1) dy = 65.95</span>。由於碗的上方較闊，水深會大於 5 的一半。",
      ],
      // EN: <p>Decode: a volume about the <i>y</i>-axis needs <span class="chem">x^2 = g(y)</span>, and "half full" makes the upper limit the unknown. (a) Quadratic in <span class="chem">x^2</span>, positive root. (b) <span class="chem">V = 131.899… ≈ 132</span> <span class="unit">cm3</span>. (c) <span class="chem">h = 3.26</span> <span class="unit">cm</span>.</p>
      solution: "<p>解碼：繞 <i>y</i> 軸的體積需要 <span class=\"chem\">x^2 = g(y)</span>，而「盛滿一半」使上限成為未知數。(a) 這是關於 <span class=\"chem\">x^2</span> 的二次方程，取正根。(b) <span class=\"chem\">V = 131.899… ≈ 132</span> <span class=\"unit\">cm3</span>。(c) <span class=\"chem\">h = 3.26</span> <span class=\"unit\">cm</span>。</p>",
      // EN: <p>(a) Let <span class="chem">u = x^2</span>: <span class="chem">u^2/50 + u/10 - y = 0</span>, so <span class="chem">u = (-0.1 + sqrt(0.01 + 0.08y)) / 0.04 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>, taking the positive root because <span class="chem">x^2 &gt;= 0</span>.</p><p>(b) <span class="chem">V = pi int_0^5 x^2 dy = 132</span> <span class="unit">cm3</span> (131.899…).</p><p>(c) Solve <span class="chem">pi int_0^h x^2 dy = 65.95…</span> with a GDC: <span class="chem">h = 3.26</span> <span class="unit">cm</span>.</p>
      answer: "<p>(a) 設 <span class=\"chem\">u = x^2</span>：<span class=\"chem\">u^2/50 + u/10 - y = 0</span>，故 <span class=\"chem\">u = (-0.1 + sqrt(0.01 + 0.08y)) / 0.04 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>；由於 <span class=\"chem\">x^2 &gt;= 0</span>，取正根。</p><p>(b) <span class=\"chem\">V = pi int_0^5 x^2 dy = 132</span> <span class=\"unit\">cm3</span>（131.899…）。</p><p>(c) 用 GDC 解 <span class=\"chem\">pi int_0^h x^2 dy = 65.95…</span>：<span class=\"chem\">h = 3.26</span> <span class=\"unit\">cm</span>。</p>",
      markscheme: [
        // EN: M1: treats the equation as a quadratic in <span class="chem">x^2</span>.
        "M1: 把方程視為關於 <span class=\"chem\">x^2</span> 的二次方程。",
        // EN: A1: applies the quadratic formula correctly: <span class="chem">x^2 = (-0.1 +- sqrt(0.01 + 0.08y))/0.04</span>.
        "A1: 正確應用二次公式：<span class=\"chem\">x^2 = (-0.1 +- sqrt(0.01 + 0.08y))/0.04</span>。",
        // EN: R1: rejects the negative root because <span class="chem">x^2 &gt;= 0</span>, leading to the given result AG (no mark for the given line).
        "R1: 因 <span class=\"chem\">x^2 &gt;= 0</span> 而捨去負根，從而得出題目給出的結果 AG（寫出給定結果本身不得分）。",
        // EN: M1: <span class="chem">V = pi int_0^5 x^2 dy</span> with the expression from (a).
        "M1: 使用 <span class=\"chem\">V = pi int_0^5 x^2 dy</span> 及 (a) 部的表達式。",
        // EN: A1: <span class="chem">V = 132</span> <span class="unit">cm3</span>.
        "A1: <span class=\"chem\">V = 132</span> <span class=\"unit\">cm3</span>。",
        // EN: M1: sets <span class="chem">pi int_0^h x^2 dy</span> equal to half of the capacity.
        "M1: 令 <span class=\"chem\">pi int_0^h x^2 dy</span> 等於容量的一半。",
        // EN: M1: solves the equation with a GDC (graph or solver).
        "M1: 用 GDC（圖像或求解功能）解方程。",
        // EN: A1: <span class="chem">h = 3.26</span> <span class="unit">cm</span>.
        "A1: <span class=\"chem\">h = 3.26</span> <span class=\"unit\">cm</span>。",
      ],
    },

    // ── t5-3-q032 · numeric · exam · AHL · AHL 5.16, 5.17 · 6 marks
    "t5-3-q032": {
      // EN: <p>The region bounded by the curve <span class="chem">y = sqrt(x) e^{-x/4}</span>, the <i>x</i>-axis and the line <span class="chem">x = k</span>, where <span class="chem">k &gt; 0</span>, is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. The volume of the solid formed is <span class="chem">5</span> cubic units. Find the value of <i>k</i>.</p>
      stem: "<p>由曲線 <span class=\"chem\">y = sqrt(x) e^{-x/4}</span>、<i>x</i> 軸及直線 <span class=\"chem\">x = k</span>（其中 <span class=\"chem\">k &gt; 0</span>）所圍成的區域繞 <i>x</i> 軸旋轉 <span class=\"chem\">2pi</span> 弧度。所得立體的體積為 <span class=\"chem\">5</span> 立方單位。求 (Find) <i>k</i> 的值。</p>",
      hints: [
        // EN: Write the volume as <span class="chem">V = pi int_0^k x e^{-x/2} dx</span> (square <i>y</i> first).
        "把體積寫成 <span class=\"chem\">V = pi int_0^k x e^{-x/2} dx</span>（先把 <i>y</i> 平方）。",
        // EN: You can integrate by parts (<span class="chem">u = x</span>, <span class="chem">dv/dx = e^{-x/2}</span>) to get <span class="chem">V = pi(4 - (2k + 4)e^{-k/2})</span>, or work with the integral directly on your GDC.
        "你可以用分部積分法（<span class=\"chem\">u = x</span>，<span class=\"chem\">dv/dx = e^{-x/2}</span>）得出 <span class=\"chem\">V = pi(4 - (2k + 4)e^{-k/2})</span>，或直接在 GDC 上處理該積分。",
        // EN: Solve <span class="chem">V = 5</span> on your GDC.
        "在 GDC 上解 <span class=\"chem\">V = 5</span>。",
      ],
      // EN: <p><span class="chem">V = pi int_0^k x e^{-x/2} dx</span>. By parts, <span class="chem">int x e^{-x/2} dx = -2x e^{-x/2} - 4e^{-x/2} + C</span>, so <span class="chem">V = pi(4 - (2k + 4)e^{-k/2})</span>. Solving <span class="chem">pi(4 - (2k + 4)e^{-k/2}) = 5</span> on a GDC gives <span class="chem">k = 2.74</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">V = pi int_0^k x e^{-x/2} dx</span>。以分部積分法得 <span class=\"chem\">int x e^{-x/2} dx = -2x e^{-x/2} - 4e^{-x/2} + C</span>，故 <span class=\"chem\">V = pi(4 - (2k + 4)e^{-k/2})</span>。在 GDC 上解 <span class=\"chem\">pi(4 - (2k + 4)e^{-k/2}) = 5</span>，得 <span class=\"chem\">k = 2.74</span>（3 位有效數字）。</p>",
    },

    // ── t5-3-q033 · numeric · challenge · AHL · AHL 5.15 · 7 marks
    "t5-3-q033": {
      // EN: <p>A painting hangs on a gallery wall. Its bottom edge is <span class="unit">1.6 m</span> above a visitor's eye level and its top edge is <span class="unit">5.2 m</span> above eye level. The visitor stands <i>x</i> metres from the wall. The angle <span class="chem">theta</span> subtended at the visitor's eye by the painting is largest for one value of <i>x</i>.</p><p>Find the largest possible value of <span class="chem">theta</span>, in degrees.</p>
      stem: "<p>一幅畫掛在畫廊的牆上。畫的底邊比參觀者的視線高 <span class=\"unit\">1.6 m</span>，頂邊比視線高 <span class=\"unit\">5.2 m</span>。參觀者站在離牆 <i>x</i> 米處。這幅畫在參觀者眼睛處所張的角 <span class=\"chem\">theta</span> 在某一個 <i>x</i> 值時最大。</p><p>求 (Find) <span class=\"chem\">theta</span> 的最大可能值（以度為單位）。</p>",
      hints: [
        // EN: Decode: <span class="chem">theta</span> is the difference of two angles of elevation, so <span class="chem">theta = arctan(5.2/x) - arctan(1.6/x)</span>. This is an optimisation question on <span class="chem">theta(x)</span>.
        "解碼：<span class=\"chem\">theta</span> 是兩個仰角之差，故 <span class=\"chem\">theta = arctan(5.2/x) - arctan(1.6/x)</span>。這是關於 <span class=\"chem\">theta(x)</span> 的最優化問題。",
        // EN: Differentiate using <span class="chem">d/dx arctan(a/x) = -a/(x^2 + a^2)</span>, or graph <span class="chem">theta(x)</span> on your GDC and find its maximum.
        "利用 <span class=\"chem\">d/dx arctan(a/x) = -a/(x^2 + a^2)</span> 求導，或在 GDC 上繪畫 <span class=\"chem\">theta(x)</span> 的圖像並找出其極大值。",
        // EN: Setting the derivative equal to zero gives <span class="chem">x^2 = 5.2 × 1.6</span>. Remember to give <span class="chem">theta</span> in degrees.
        "令導數等於零得 <span class=\"chem\">x^2 = 5.2 × 1.6</span>。緊記以度為單位寫出 <span class=\"chem\">theta</span>。",
      ],
      // EN: <p>Decode: the angle subtended is (angle to the top) − (angle to the bottom), and "largest" means maximise. <span class="chem">theta(x) = arctan(5.2/x) - arctan(1.6/x)</span>, so <span class="chem">theta'(x) = -5.2/(x^2 + 27.04) + 1.6/(x^2 + 2.56)</span>. Setting this to zero: <span class="chem">5.2(x^2 + 2.56) = 1.6(x^2 + 27.04) => 3.6x^2 = 29.952 => x = sqrt(8.32) = 2.884…</span>. Then <span class="chem">theta = 0.55791…</span> rad <span class="chem">= 32.0°</span> (3 s.f.).</p>
      solution: "<p>解碼：所張的角 = （到頂邊的仰角）−（到底邊的仰角），而「最大」表示要求極大值。<span class=\"chem\">theta(x) = arctan(5.2/x) - arctan(1.6/x)</span>，故 <span class=\"chem\">theta'(x) = -5.2/(x^2 + 27.04) + 1.6/(x^2 + 2.56)</span>。令其為零：<span class=\"chem\">5.2(x^2 + 2.56) = 1.6(x^2 + 27.04) => 3.6x^2 = 29.952 => x = sqrt(8.32) = 2.884…</span>。於是 <span class=\"chem\">theta = 0.55791…</span> rad <span class=\"chem\">= 32.0°</span>（3 位有效數字）。</p>",
    },

    // ── t5-3-q034 · numeric · exam · AHL · AHL 5.15 · 5 marks
    "t5-3-q034": {
      // EN: <p>The number of birds in a colony <i>t</i> years after it was first counted is modelled by <span class="chem">N(t) = 200 × 1.07^t</span>. Find the value of <i>t</i> when the population first grows at a rate of <span class="chem">40</span> birds per year.</p>
      stem: "<p>某鳥群在首次點算後 <i>t</i> 年的鳥隻數目以 <span class=\"chem\">N(t) = 200 × 1.07^t</span> 作模型。求 (Find) 鳥群數目首次以每年 <span class=\"chem\">40</span> 隻的速率增長時 <i>t</i> 的值。</p>",
      hints: [
        // EN: Decode: "grows at a rate of 40 birds per year" is a statement about <span class="chem">dN/dt</span>, not about <i>N</i>.
        "解碼：「以每年 40 隻的速率增長」是關於 <span class=\"chem\">dN/dt</span> 的敘述，而不是關於 <i>N</i> 的。",
        // EN: Use <span class="chem">d/dt (a^t) = a^t ln a</span>: <span class="chem">dN/dt = 200 ln(1.07) × 1.07^t</span>.
        "利用 <span class=\"chem\">d/dt (a^t) = a^t ln a</span>：<span class=\"chem\">dN/dt = 200 ln(1.07) × 1.07^t</span>。",
        // EN: Solve <span class="chem">200 ln(1.07) × 1.07^t = 40</span> with logarithms or your GDC.
        "用對數或 GDC 解 <span class=\"chem\">200 ln(1.07) × 1.07^t = 40</span>。",
      ],
      // EN: <p>Decode: the rate of growth is <span class="chem">dN/dt</span>. <span class="chem">dN/dt = 200 × 1.07^t ln 1.07 = 13.5317… × 1.07^t</span>. Setting this equal to 40: <span class="chem">1.07^t = 2.9560… => t = ln(2.9560…)/ln 1.07 = 16.0</span> years (3 s.f.). Since <span class="chem">dN/dt</span> is increasing, this is the first time.</p>
      solution: "<p>解碼：增長率就是 <span class=\"chem\">dN/dt</span>。<span class=\"chem\">dN/dt = 200 × 1.07^t ln 1.07 = 13.5317… × 1.07^t</span>。令其等於 40：<span class=\"chem\">1.07^t = 2.9560… => t = ln(2.9560…)/ln 1.07 = 16.0</span> 年（3 位有效數字）。由於 <span class=\"chem\">dN/dt</span> 遞增，這就是首次達到該速率的時刻。</p>",
      // EN: years
      unit: "年",
    },

    // ── t5-3-q035 · numeric · exam · AHL · AHL 5.14, 5.15 · 6 marks
    "t5-3-q035": {
      // EN: <p>A lighthouse <i>L</i> stands <span class="unit">800 m</span> from a straight shoreline. <i>O</i> is the point of the shore closest to <i>L</i>. The light rotates at a constant <span class="chem">0.5</span> revolutions per minute, and its beam meets the shore at a point <i>P</i>. Let <span class="chem">theta</span> be the angle <i>OLP</i>.</p><p>Find the speed, in metres per second, at which <i>P</i> moves along the shore at the instant when <span class="chem">theta = 50°</span>.</p>
      stem: "<p>燈塔 <i>L</i> 位於離一條筆直海岸線 <span class=\"unit\">800 m</span> 處。<i>O</i> 是海岸上最接近 <i>L</i> 的點。燈光以每分鐘 <span class=\"chem\">0.5</span> 轉的恆定速率旋轉，其光束照射在海岸上的點 <i>P</i>。設 <span class=\"chem\">theta</span> 為角 <i>OLP</i>。</p><p>求 (Find) 在 <span class=\"chem\">theta = 50°</span> 的一刻，<i>P</i> 沿海岸移動的速率（以米每秒為單位）。</p>",
      hints: [
        // EN: Decode: let <span class="chem">OP = x</span>. Right-angled trigonometry gives <span class="chem">x = 800 tan theta</span>. You know <span class="chem">d theta/dt</span> from the rotation and want <span class="chem">dx/dt</span>.
        "解碼：設 <span class=\"chem\">OP = x</span>。由直角三角形的三角學得 <span class=\"chem\">x = 800 tan theta</span>。你從旋轉速率得知 <span class=\"chem\">d theta/dt</span>，要求的是 <span class=\"chem\">dx/dt</span>。",
        // EN: <span class="chem">0.5</span> revolutions per minute is <span class="chem">pi</span> radians per minute, which is <span class="chem">pi/60</span> radians per second.
        "每分鐘 <span class=\"chem\">0.5</span> 轉即每分鐘 <span class=\"chem\">pi</span> 弧度，亦即每秒 <span class=\"chem\">pi/60</span> 弧度。",
        // EN: <span class="chem">dx/dt = 800 sec^2 theta (d theta/dt)</span>. Convert <span class="chem">50°</span> to radians (or use degree mode only for <span class="chem">sec^2 50°</span>, not for the rate).
        "<span class=\"chem\">dx/dt = 800 sec^2 theta (d theta/dt)</span>。把 <span class=\"chem\">50°</span> 化為弧度（或只在計算 <span class=\"chem\">sec^2 50°</span> 時使用角度模式，計算速率時則不可）。",
      ],
      // EN: <p>Decode: <span class="chem">x = 800 tan theta</span> links the position of <i>P</i> to the angle. <span class="chem">d theta/dt = 2pi × 0.5 / 60 = pi/60</span> <span class="unit">rad s-1</span>. Then <span class="chem">dx/dt = 800 sec^2 theta (d theta/dt) = 800 × 2.42027… × pi/60 = 101</span> <span class="unit">m s-1</span> (3 s.f.).</p>
      solution: "<p>解碼：<span class=\"chem\">x = 800 tan theta</span> 把 <i>P</i> 的位置與角聯繫起來。<span class=\"chem\">d theta/dt = 2pi × 0.5 / 60 = pi/60</span> <span class=\"unit\">rad s-1</span>。於是 <span class=\"chem\">dx/dt = 800 sec^2 theta (d theta/dt) = 800 × 2.42027… × pi/60 = 101</span> <span class=\"unit\">m s-1</span>（3 位有效數字）。</p>",
    },

    // ── t5-3-q036 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q036": {
      // EN: <p>Use integration by parts to find <span class="chem">int ln x dx</span>. Hence find the value of <i>k</i>, where <span class="chem">k &gt; 1</span>, such that <span class="chem">int_1^k ln x dx = 3</span>.</p>
      stem: "<p>利用分部積分法求 (Find) <span class=\"chem\">int ln x dx</span>。由此求 (Hence find) <i>k</i> 的值，其中 <span class=\"chem\">k &gt; 1</span>，使得 <span class=\"chem\">int_1^k ln x dx = 3</span>。</p>",
      hints: [
        // EN: Write <span class="chem">ln x = 1 × ln x</span> and take <span class="chem">u = ln x</span>, <span class="chem">dv/dx = 1</span>.
        "寫成 <span class=\"chem\">ln x = 1 × ln x</span>，並取 <span class=\"chem\">u = ln x</span>，<span class=\"chem\">dv/dx = 1</span>。",
        // EN: You should get <span class="chem">int ln x dx = x ln x - x + C</span>, so <span class="chem">int_1^k ln x dx = k ln k - k + 1</span>.
        "你應得到 <span class=\"chem\">int ln x dx = x ln x - x + C</span>，故 <span class=\"chem\">int_1^k ln x dx = k ln k - k + 1</span>。",
        // EN: Solve <span class="chem">k ln k - k + 1 = 3</span> on your GDC.
        "在 GDC 上解 <span class=\"chem\">k ln k - k + 1 = 3</span>。",
      ],
      // EN: <p>With <span class="chem">u = ln x</span>, <span class="chem">v = x</span>: <span class="chem">int ln x dx = x ln x - int 1 dx = x ln x - x + C</span>. So <span class="chem">int_1^k ln x dx = k ln k - k + 1 = 3</span>, and a GDC gives <span class="chem">k = 4.32</span> (3 s.f.).</p>
      solution: "<p>取 <span class=\"chem\">u = ln x</span>，<span class=\"chem\">v = x</span>：<span class=\"chem\">int ln x dx = x ln x - int 1 dx = x ln x - x + C</span>。故 <span class=\"chem\">int_1^k ln x dx = k ln k - k + 1 = 3</span>，用 GDC 得 <span class=\"chem\">k = 4.32</span>（3 位有效數字）。</p>",
    },

    // ── t5-3-q037 · numeric · challenge · AHL · AHL 5.16 · 7 marks
    "t5-3-q037": {
      // EN: <p>A plot of land is modelled by the region between the curve <span class="chem">y = x e^{-x}</span>, the <i>x</i>-axis and the line <span class="chem">x = 4</span>. A straight fence along the line <span class="chem">x = a</span> divides the plot into two parts of equal area. Find the value of <i>a</i>.</p>
      stem: "<p>一幅土地以曲線 <span class=\"chem\">y = x e^{-x}</span>、<i>x</i> 軸及直線 <span class=\"chem\">x = 4</span> 之間的區域作模型。沿直線 <span class=\"chem\">x = a</span> 的一道筆直圍欄把這幅土地分成面積相等的兩部分。求 (Find) <i>a</i> 的值。</p>",
      hints: [
        // EN: Decode: "two parts of equal area" means <span class="chem">int_0^a x e^{-x} dx = (1/2) int_0^4 x e^{-x} dx</span>. The unknown is a limit of integration.
        "解碼：「面積相等的兩部分」表示 <span class=\"chem\">int_0^a x e^{-x} dx = (1/2) int_0^4 x e^{-x} dx</span>。未知數是積分的一個限。",
        // EN: Integrate by parts: <span class="chem">int x e^{-x} dx = -x e^{-x} - e^{-x} + C</span>, so <span class="chem">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>.
        "使用分部積分法：<span class=\"chem\">int x e^{-x} dx = -x e^{-x} - e^{-x} + C</span>，故 <span class=\"chem\">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>。",
        // EN: The whole area is <span class="chem">1 - 5e^{-4} = 0.90842…</span>. Solve <span class="chem">1 - (a + 1)e^{-a} = 0.45421…</span> on your GDC.
        "整個面積為 <span class=\"chem\">1 - 5e^{-4} = 0.90842…</span>。在 GDC 上解 <span class=\"chem\">1 - (a + 1)e^{-a} = 0.45421…</span>。",
      ],
      // EN: <p>Decode: equal areas turn into an equation whose unknown is the upper limit <i>a</i>. By parts, <span class="chem">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>. The total area is <span class="chem">1 - 5e^{-4} = 0.908421…</span>, so solve <span class="chem">1 - (a + 1)e^{-a} = 0.454210…</span>: <span class="chem">a = 1.54</span> (3 s.f.).</p>
      solution: "<p>解碼：面積相等化為一條以上限 <i>a</i> 為未知數的方程。以分部積分法得 <span class=\"chem\">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>。總面積為 <span class=\"chem\">1 - 5e^{-4} = 0.908421…</span>，故解 <span class=\"chem\">1 - (a + 1)e^{-a} = 0.454210…</span>：<span class=\"chem\">a = 1.54</span>（3 位有效數字）。</p>",
    },

    // ── t5-3-q038 · numeric · exam · AHL · AHL 5.17 · 5 marks
    "t5-3-q038": {
      // EN: <p>The curve <span class="chem">x = 4 - y^2 - e^{0.5y}</span> and the <i>y</i>-axis enclose a region. Find the area of this region.</p>
      stem: "<p>曲線 <span class=\"chem\">x = 4 - y^2 - e^{0.5y}</span> 與 <i>y</i> 軸圍成一個區域。求 (Find) 此區域的面積。</p>",
      hints: [
        // EN: The curve meets the <i>y</i>-axis where <span class="chem">x = 0</span>: solve <span class="chem">4 - y^2 - e^{0.5y} = 0</span> on your GDC (two roots).
        "曲線在 <span class=\"chem\">x = 0</span> 處與 <i>y</i> 軸相交：在 GDC 上解 <span class=\"chem\">4 - y^2 - e^{0.5y} = 0</span>（有兩個根）。",
        // EN: Between these roots the curve is to the right of the <i>y</i>-axis, so the area is <span class="chem">int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy</span>.
        "在這兩個根之間，曲線位於 <i>y</i> 軸的右方，故面積為 <span class=\"chem\">int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy</span>。",
      ],
      // EN: <p>GDC: <span class="chem">4 - y^2 - e^{0.5y} = 0</span> at <span class="chem">y_1 = -1.90090…</span> and <span class="chem">y_2 = 1.40688…</span>. Area <span class="chem">= int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy = 6.75</span> (3 s.f.).</p>
      solution: "<p>GDC：<span class=\"chem\">4 - y^2 - e^{0.5y} = 0</span> 於 <span class=\"chem\">y_1 = -1.90090…</span> 及 <span class=\"chem\">y_2 = 1.40688…</span>。面積 <span class=\"chem\">= int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy = 6.75</span>（3 位有效數字）。</p>",
    },

    // ── t5-3-q039 · numeric · challenge · AHL · AHL 5.14 · 7 marks
    "t5-3-q039": {
      // EN: <p>A rectangle has one vertex at the origin, two sides along the positive <i>x</i>- and <i>y</i>-axes, and the opposite vertex <span class="chem">(x, y)</span> on the curve <span class="chem">x^2 + 2y^3 + y = 30</span>, with <span class="chem">x, y &gt; 0</span>. Find the maximum possible area of the rectangle.</p>
      stem: "<p>一個長方形的一個頂點在原點，兩條邊分別沿正 <i>x</i> 軸和正 <i>y</i> 軸，而對角頂點 <span class=\"chem\">(x, y)</span> 位於曲線 <span class=\"chem\">x^2 + 2y^3 + y = 30</span> 上，其中 <span class=\"chem\">x, y &gt; 0</span>。求 (Find) 該長方形的最大可能面積。</p>",
      hints: [
        // EN: Decode: this is optimisation with an implicit constraint. Maximise <span class="chem">A = xy</span>, treating <i>y</i> as a function of <i>x</i> defined by the curve.
        "解碼：這是帶隱函數約束條件的最優化問題。把 <i>y</i> 視為由曲線所定義的 <i>x</i> 的函數，求 <span class=\"chem\">A = xy</span> 的極大值。",
        // EN: Differentiating the curve: <span class="chem">2x + (6y^2 + 1)(dy/dx) = 0 => dy/dx = -2x/(6y^2 + 1)</span>. Then <span class="chem">dA/dx = y + x (dy/dx)</span>.
        "對曲線方程求導：<span class=\"chem\">2x + (6y^2 + 1)(dy/dx) = 0 => dy/dx = -2x/(6y^2 + 1)</span>。然後 <span class=\"chem\">dA/dx = y + x (dy/dx)</span>。",
        // EN: <span class="chem">dA/dx = 0</span> gives <span class="chem">2x^2 = y(6y^2 + 1)</span>. Substitute <span class="chem">x^2 = 3y^3 + y/2</span> into the curve: <span class="chem">5y^3 + 1.5y = 30</span>, and solve on your GDC.
        "<span class=\"chem\">dA/dx = 0</span> 給出 <span class=\"chem\">2x^2 = y(6y^2 + 1)</span>。把 <span class=\"chem\">x^2 = 3y^3 + y/2</span> 代入曲線方程：<span class=\"chem\">5y^3 + 1.5y = 30</span>，並在 GDC 上求解。",
      ],
      // EN: <p>Decode: maximise <span class="chem">A = xy</span> subject to the curve. <span class="chem">dA/dx = y - 2x^2/(6y^2 + 1) = 0 => x^2 = 3y^3 + y/2</span>. Then <span class="chem">3y^3 + y/2 + 2y^3 + y = 30 => 5y^3 + 1.5y - 30 = 0 => y = 1.76211…</span>, <span class="chem">x = sqrt(3y^3 + y/2) = 4.15874…</span>. The area is <span class="chem">A = xy = 7.31</span> (3 s.f.); it is a maximum because <span class="chem">A -> 0</span> at both ends of the arc.</p>
      solution: "<p>解碼：在曲線的約束下求 <span class=\"chem\">A = xy</span> 的極大值。<span class=\"chem\">dA/dx = y - 2x^2/(6y^2 + 1) = 0 => x^2 = 3y^3 + y/2</span>。於是 <span class=\"chem\">3y^3 + y/2 + 2y^3 + y = 30 => 5y^3 + 1.5y - 30 = 0 => y = 1.76211…</span>，<span class=\"chem\">x = sqrt(3y^3 + y/2) = 4.15874…</span>。面積為 <span class=\"chem\">A = xy = 7.31</span>（3 位有效數字）；由於在該段曲線的兩端 <span class=\"chem\">A -> 0</span>，這是極大值。</p>",
    },

    // ── t5-3-q040 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q040": {
      // EN: <p>At 12:00, car <i>A</i> is at a junction <i>O</i> and car <i>B</i> is <span class="unit">30 km</span> due east of <i>O</i>. Car <i>A</i> drives due north at <span class="unit">60 km h-1</span> and car <i>B</i> drives due west, towards <i>O</i>, at <span class="unit">80 km h-1</span>. Find the rate at which the distance between the cars is changing at 12:15.</p>
      stem: "<p>在 12:00，汽車 <i>A</i> 位於交匯處 <i>O</i>，而汽車 <i>B</i> 位於 <i>O</i> 正東 <span class=\"unit\">30 km</span> 處。汽車 <i>A</i> 以 <span class=\"unit\">60 km h-1</span> 向正北行駛，汽車 <i>B</i> 以 <span class=\"unit\">80 km h-1</span> 向正西朝 <i>O</i> 行駛。求 (Find) 在 12:15 時兩車之間距離的變化率。</p>",
      hints: [
        // EN: Decode: write both positions in terms of the time <i>t</i> hours after 12:00. 12:15 is <span class="chem">t = 0.25</span>, not 15.
        "解碼：以 12:00 後的時間 <i>t</i>（小時）表示兩車的位置。12:15 即 <span class=\"chem\">t = 0.25</span>，而不是 15。",
        // EN: After <i>t</i> hours, <i>A</i> is <span class="chem">60t</span> north of <i>O</i> and <i>B</i> is <span class="chem">30 - 80t</span> east of <i>O</i>, so <span class="chem">D^2 = (60t)^2 + (30 - 80t)^2</span>.
        "<i>t</i> 小時後，<i>A</i> 在 <i>O</i> 以北 <span class=\"chem\">60t</span> 處，<i>B</i> 在 <i>O</i> 以東 <span class=\"chem\">30 - 80t</span> 處，故 <span class=\"chem\">D^2 = (60t)^2 + (30 - 80t)^2</span>。",
        // EN: Differentiate: <span class="chem">2D (dD/dt) = 7200t - 160(30 - 80t)</span>, then substitute <span class="chem">t = 0.25</span>.
        "求導：<span class=\"chem\">2D (dD/dt) = 7200t - 160(30 - 80t)</span>，然後代入 <span class=\"chem\">t = 0.25</span>。",
      ],
      // EN: <p>Decode: measure time in hours from 12:00. <span class="chem">D^2 = 3600t^2 + (30 - 80t)^2</span>. At <span class="chem">t = 0.25</span>: <span class="chem">D = sqrt(225 + 100) = 18.0277…</span> and <span class="chem">2D (dD/dt) = 7200(0.25) - 160(10) = 200</span>, so <span class="chem">dD/dt = 100/18.0277… = 5.55</span> <span class="unit">km h-1</span> (3 s.f.). The distance is increasing.</p>
      solution: "<p>解碼：以 12:00 起計的小時數量度時間。<span class=\"chem\">D^2 = 3600t^2 + (30 - 80t)^2</span>。當 <span class=\"chem\">t = 0.25</span> 時：<span class=\"chem\">D = sqrt(225 + 100) = 18.0277…</span> 及 <span class=\"chem\">2D (dD/dt) = 7200(0.25) - 160(10) = 200</span>，故 <span class=\"chem\">dD/dt = 100/18.0277… = 5.55</span> <span class=\"unit\">km h-1</span>（3 位有效數字）。距離正在增加。</p>",
    },

    // ── t5-3-q041 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q041": {
      // EN: <p>A point moves along the curve <span class="chem">y = x^2 e^{-x}</span> so that its <i>x</i>-coordinate increases at a constant <span class="chem">0.3</span> units per second. Find the rate at which the distance of the point from the origin is changing when <span class="chem">x = 2.5</span>.</p>
      stem: "<p>一點沿曲線 <span class=\"chem\">y = x^2 e^{-x}</span> 移動，其 <i>x</i> 坐標以每秒 <span class=\"chem\">0.3</span> 個單位的恆定速率增加。求 (Find) 當 <span class=\"chem\">x = 2.5</span> 時該點與原點之間距離的變化率。</p>",
      hints: [
        // EN: Write the distance as a function of <i>x</i> only: <span class="chem">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>.
        "把距離只以 <i>x</i> 的函數表示：<span class=\"chem\">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>。",
        // EN: By the chain rule, <span class="chem">dD/dt = (dD/dx)(dx/dt) = 0.3 D'(x)</span>. Find <span class="chem">D'(2.5)</span> with your GDC (or differentiate by hand).
        "由鏈式法則，<span class=\"chem\">dD/dt = (dD/dx)(dx/dt) = 0.3 D'(x)</span>。用 GDC 求 <span class=\"chem\">D'(2.5)</span>（或以人手求導）。",
      ],
      // EN: <p><span class="chem">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>. GDC: <span class="chem">D'(2.5) = 0.958960…</span>. So <span class="chem">dD/dt = 0.3 × 0.958960… = 0.288</span> units per second (3 s.f.).</p>
      solution: "<p><span class=\"chem\">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>。GDC：<span class=\"chem\">D'(2.5) = 0.958960…</span>。故 <span class=\"chem\">dD/dt = 0.3 × 0.958960… = 0.288</span> 單位每秒（3 位有效數字）。</p>",
      // EN: units s-1
      unit: "單位 s-1",
    },

    // ── t5-3-q042 · short · challenge · AHL · AHL 5.14, 5.17 · 11 marks
    "t5-3-q042": {
      // EN: <p>The inside of a bowl is formed by rotating the curve <span class="chem">y = x^2/4</span>, <span class="chem">0 &lt;= y &lt;= 8</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis (lengths in cm). The bowl is empty at <span class="chem">t = 0</span>. Water then flows in at a rate of <span class="chem">30 e^{-0.1t}</span> <span class="unit">cm3 s-1</span>, where <i>t</i> is in seconds.</p><p>(a) Show that, when the water is <i>h</i> cm deep, its volume is <span class="chem">V = 2 pi h^2</span>. <strong>[2 marks]</strong></p><p>(b) Find the depth of the water when <span class="chem">t = 5</span>. <strong>[3 marks]</strong></p><p>(c) Find the rate at which the depth is increasing when <span class="chem">t = 5</span>. <strong>[3 marks]</strong></p><p>(d) Determine whether the bowl will ever be full. Justify your answer. <strong>[3 marks]</strong></p>
      stem: "<p>一個碗的內部是把曲線 <span class=\"chem\">y = x^2/4</span>，<span class=\"chem\">0 &lt;= y &lt;= 8</span>，繞 <i>y</i> 軸旋轉 <span class=\"chem\">2pi</span> 弧度而成（長度以 cm 為單位）。在 <span class=\"chem\">t = 0</span> 時碗是空的。然後水以 <span class=\"chem\">30 e^{-0.1t}</span> <span class=\"unit\">cm3 s-1</span> 的速率流入，其中 <i>t</i> 以秒為單位。</p><p>(a) 證明 (Show that) 當水深為 <i>h</i> cm 時，水的體積為 <span class=\"chem\">V = 2 pi h^2</span>。<strong>[2 分]</strong></p><p>(b) 求 (Find) 當 <span class=\"chem\">t = 5</span> 時的水深。<strong>[3 分]</strong></p><p>(c) 求 (Find) 當 <span class=\"chem\">t = 5</span> 時水深增加的速率。<strong>[3 分]</strong></p><p>(d) 確定 (Determine) 碗會否有盛滿的時候，並提出理據 (Justify)。<strong>[3 分]</strong></p>",
      hints: [
        // EN: Decode: the inflow rate is a function of <i>t</i>, so the volume in the bowl at time <i>t</i> is the integral of the rate. Depth then comes from <span class="chem">V = 2 pi h^2</span>, and part (d) asks whether the total inflow can ever reach the capacity.
        "解碼：流入率是 <i>t</i> 的函數，所以時間 <i>t</i> 時碗中水的體積是流入率的積分。水深再由 <span class=\"chem\">V = 2 pi h^2</span> 求得；(d) 部問的是總流入量能否達到容量。",
        // EN: For (a), the rotation is about the <i>y</i>-axis: <span class="chem">V = pi int_0^h x^2 dy</span> with <span class="chem">x^2 = 4y</span>.
        "在 (a) 部，旋轉軸是 <i>y</i> 軸：<span class=\"chem\">V = pi int_0^h x^2 dy</span>，其中 <span class=\"chem\">x^2 = 4y</span>。",
        // EN: For (b), <span class="chem">V(5) = int_0^5 30 e^{-0.1t} dt</span>, then solve <span class="chem">2 pi h^2 = V(5)</span>.
        "在 (b) 部，<span class=\"chem\">V(5) = int_0^5 30 e^{-0.1t} dt</span>，然後解 <span class=\"chem\">2 pi h^2 = V(5)</span>。",
        // EN: For (c), <span class="chem">dV/dt</span> at <span class="chem">t = 5</span> is just the inflow rate then; divide by <span class="chem">dV/dh = 4 pi h</span>. For (d), the total inflow <span class="chem">300(1 - e^{-0.1t})</span> never reaches 300.
        "在 (c) 部，<span class=\"chem\">t = 5</span> 時的 <span class=\"chem\">dV/dt</span> 就是當時的流入率；把它除以 <span class=\"chem\">dV/dh = 4 pi h</span>。在 (d) 部，總流入量 <span class=\"chem\">300(1 - e^{-0.1t})</span> 永遠達不到 300。",
      ],
      // EN: <p>Decode: integrate the inflow rate to get volume, convert volume to depth with the volume of revolution, and compare the limiting inflow with the capacity. (b) <span class="chem">h = 4.33</span> cm. (c) <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>. (d) At most <span class="unit">300 cm3</span> ever flows in, less than the <span class="unit">402 cm3</span> capacity, so the bowl is never full.</p>
      solution: "<p>解碼：把流入率積分得體積，利用旋轉體體積把體積化為水深，再把流入量的極限與容量比較。(b) <span class=\"chem\">h = 4.33</span> cm。(c) <span class=\"chem\">dh/dt = 0.334</span> <span class=\"unit\">cm s-1</span>。(d) 流入的水最多只有 <span class=\"unit\">300 cm3</span>，少於 <span class=\"unit\">402 cm3</span> 的容量，所以碗永遠不會盛滿。</p>",
      // EN: <p>(a) <span class="chem">x^2 = 4y</span>, so <span class="chem">V = pi int_0^h 4y dy = 2 pi h^2</span>.</p><p>(b) <span class="chem">V(5) = int_0^5 30e^{-0.1t} dt = 300(1 - e^{-0.5}) = 118.04…</span>, so <span class="chem">h = sqrt(118.04…/(2pi)) = 4.33</span> cm.</p><p>(c) <span class="chem">dV/dt = 30e^{-0.5} = 18.196…</span> and <span class="chem">dV/dh = 4 pi h = 54.466…</span>, so <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>.</p><p>(d) The total volume that ever flows in is <span class="chem">int_0^T 30e^{-0.1t} dt = 300(1 - e^{-0.1T}) &lt; 300</span>. A full bowl holds <span class="chem">2 pi (8)^2 = 402</span> <span class="unit">cm3</span>, so the bowl is never full (the depth stays below <span class="chem">sqrt(300/(2pi)) = 6.91</span> cm).</p>
      answer: "<p>(a) <span class=\"chem\">x^2 = 4y</span>，故 <span class=\"chem\">V = pi int_0^h 4y dy = 2 pi h^2</span>。</p><p>(b) <span class=\"chem\">V(5) = int_0^5 30e^{-0.1t} dt = 300(1 - e^{-0.5}) = 118.04…</span>，故 <span class=\"chem\">h = sqrt(118.04…/(2pi)) = 4.33</span> cm。</p><p>(c) <span class=\"chem\">dV/dt = 30e^{-0.5} = 18.196…</span> 及 <span class=\"chem\">dV/dh = 4 pi h = 54.466…</span>，故 <span class=\"chem\">dh/dt = 0.334</span> <span class=\"unit\">cm s-1</span>。</p><p>(d) 流入的總體積為 <span class=\"chem\">int_0^T 30e^{-0.1t} dt = 300(1 - e^{-0.1T}) &lt; 300</span>。盛滿的碗可容納 <span class=\"chem\">2 pi (8)^2 = 402</span> <span class=\"unit\">cm3</span>，所以碗永遠不會盛滿（水深一直低於 <span class=\"chem\">sqrt(300/(2pi)) = 6.91</span> cm）。</p>",
      markscheme: [
        // EN: M1: <span class="chem">V = pi int_0^h x^2 dy</span> with <span class="chem">x^2 = 4y</span>.
        "M1: <span class=\"chem\">V = pi int_0^h x^2 dy</span>，其中 <span class=\"chem\">x^2 = 4y</span>。",
        // EN: A1: <span class="chem">pi [2y^2]_0^h</span>, leading to <span class="chem">V = 2 pi h^2</span> AG (no mark for the given line).
        "A1: <span class=\"chem\">pi [2y^2]_0^h</span>，從而得出 <span class=\"chem\">V = 2 pi h^2</span> AG（寫出給定結果本身不得分）。",
        // EN: M1: volume at <span class="chem">t = 5</span> is <span class="chem">int_0^5 30 e^{-0.1t} dt</span>.
        "M1: <span class=\"chem\">t = 5</span> 時的體積為 <span class=\"chem\">int_0^5 30 e^{-0.1t} dt</span>。",
        // EN: A1: <span class="chem">118.04…</span> <span class="unit">cm3</span>.
        "A1: <span class=\"chem\">118.04…</span> <span class=\"unit\">cm3</span>。",
        // EN: A1: <span class="chem">h = 4.33</span> cm.
        "A1: <span class=\"chem\">h = 4.33</span> cm。",
        // EN: M1: <span class="chem">dh/dt = (dV/dt)/(dV/dh)</span> with <span class="chem">dV/dh = 4 pi h</span>.
        "M1: <span class=\"chem\">dh/dt = (dV/dt)/(dV/dh)</span>，其中 <span class=\"chem\">dV/dh = 4 pi h</span>。",
        // EN: A1: <span class="chem">dV/dt = 30e^{-0.5} = 18.196…</span> at <span class="chem">t = 5</span>.
        "A1: 在 <span class=\"chem\">t = 5</span> 時 <span class=\"chem\">dV/dt = 30e^{-0.5} = 18.196…</span>。",
        // EN: A1: <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>.
        "A1: <span class=\"chem\">dh/dt = 0.334</span> <span class=\"unit\">cm s-1</span>。",
        // EN: M1: considers the total inflow as <span class="chem">t</span> increases: <span class="chem">300(1 - e^{-0.1t}) &lt; 300</span>.
        "M1: 考慮 <span class=\"chem\">t</span> 增加時的總流入量：<span class=\"chem\">300(1 - e^{-0.1t}) &lt; 300</span>。",
        // EN: A1: capacity <span class="chem">2 pi × 64 = 402</span> <span class="unit">cm3</span>.
        "A1: 容量 <span class=\"chem\">2 pi × 64 = 402</span> <span class=\"unit\">cm3</span>。",
        // EN: R1: <span class="chem">300 &lt; 402</span>, so the bowl is never full.
        "R1: <span class=\"chem\">300 &lt; 402</span>，所以碗永遠不會盛滿。",
      ],
    },

    // ── t5-3-q043 · short · exam · AHL · AHL 5.16 · 7 marks
    "t5-3-q043": {
      // EN: <p>A particle moves in a straight line, starting from the origin at <span class="chem">t = 0</span>. Its velocity after <i>t</i> seconds is <span class="chem">v(t) = 2t e^{-0.4t}</span> <span class="unit">m s-1</span>.</p><p>(a) Use integration by parts to show that the displacement of the particle after <i>t</i> seconds is <span class="chem">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>. <strong>[4 marks]</strong></p><p>(b) Find the time at which the particle is <span class="unit">8 m</span> from the origin. <strong>[3 marks]</strong></p>
      stem: "<p>一質點沿直線運動，在 <span class=\"chem\">t = 0</span> 時從原點出發。其在 <i>t</i> 秒後的速度為 <span class=\"chem\">v(t) = 2t e^{-0.4t}</span> <span class=\"unit\">m s-1</span>。</p><p>(a) 利用分部積分法證明 (Show that) 質點在 <i>t</i> 秒後的位移為 <span class=\"chem\">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>。<strong>[4 分]</strong></p><p>(b) 求 (Find) 質點與原點相距 <span class=\"unit\">8 m</span> 的時間。<strong>[3 分]</strong></p>",
      hints: [
        // EN: For (a), take <span class="chem">u = 2t</span> and <span class="chem">dv/dt = e^{-0.4t}</span>, so <span class="chem">v = -2.5 e^{-0.4t}</span>. Find the constant from <span class="chem">s(0) = 0</span>.
        "在 (a) 部，取 <span class=\"chem\">u = 2t</span> 及 <span class=\"chem\">dv/dt = e^{-0.4t}</span>，故 <span class=\"chem\">v = -2.5 e^{-0.4t}</span>。由 <span class=\"chem\">s(0) = 0</span> 求出常數。",
        // EN: For (b), check that the particle never changes direction, then solve <span class="chem">s(t) = 8</span> on your GDC.
        "在 (b) 部，先檢查質點從不改變方向，然後在 GDC 上解 <span class=\"chem\">s(t) = 8</span>。",
      ],
      // EN: <p>(a) Parts gives <span class="chem">s(t) = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span> with <span class="chem">C = 12.5</span>. (b) <span class="chem">t = 5.44</span> s (3 s.f.).</p>
      solution: "<p>(a) 分部積分得 <span class=\"chem\">s(t) = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span>，其中 <span class=\"chem\">C = 12.5</span>。(b) <span class=\"chem\">t = 5.44</span> s（3 位有效數字）。</p>",
      // EN: <p>(a) With <span class="chem">u = 2t</span>, <span class="chem">dv/dt = e^{-0.4t}</span>: <span class="chem">int 2t e^{-0.4t} dt = -5t e^{-0.4t} + int 5e^{-0.4t} dt = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span>. Since <span class="chem">s(0) = 0</span>, <span class="chem">C = 12.5</span>, so <span class="chem">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>.</p><p>(b) <span class="chem">v &gt; 0</span> for <span class="chem">t &gt; 0</span>, so the distance from the origin is <span class="chem">s(t)</span>. Solve <span class="chem">12.5 - (5t + 12.5)e^{-0.4t} = 8</span> on a GDC: <span class="chem">t = 5.44</span> s.</p>
      answer: "<p>(a) 取 <span class=\"chem\">u = 2t</span>，<span class=\"chem\">dv/dt = e^{-0.4t}</span>：<span class=\"chem\">int 2t e^{-0.4t} dt = -5t e^{-0.4t} + int 5e^{-0.4t} dt = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span>。由於 <span class=\"chem\">s(0) = 0</span>，<span class=\"chem\">C = 12.5</span>，故 <span class=\"chem\">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>。</p><p>(b) 對 <span class=\"chem\">t &gt; 0</span> 有 <span class=\"chem\">v &gt; 0</span>，故質點與原點的距離為 <span class=\"chem\">s(t)</span>。在 GDC 上解 <span class=\"chem\">12.5 - (5t + 12.5)e^{-0.4t} = 8</span>：<span class=\"chem\">t = 5.44</span> s。</p>",
      markscheme: [
        // EN: M1: integration by parts with <span class="chem">u = 2t</span> and <span class="chem">dv/dt = e^{-0.4t}</span> (so <span class="chem">v = -2.5e^{-0.4t}</span>).
        "M1: 以 <span class=\"chem\">u = 2t</span> 及 <span class=\"chem\">dv/dt = e^{-0.4t}</span> 進行分部積分（故 <span class=\"chem\">v = -2.5e^{-0.4t}</span>）。",
        // EN: A1: <span class="chem">-5t e^{-0.4t} + int 5e^{-0.4t} dt</span>.
        "A1: <span class=\"chem\">-5t e^{-0.4t} + int 5e^{-0.4t} dt</span>。",
        // EN: A1: <span class="chem">-5t e^{-0.4t} - 12.5 e^{-0.4t} + C</span>.
        "A1: <span class=\"chem\">-5t e^{-0.4t} - 12.5 e^{-0.4t} + C</span>。",
        // EN: M1: uses <span class="chem">s(0) = 0</span> to find <span class="chem">C = 12.5</span>, leading to the given result AG (no mark for the given line).
        "M1: 利用 <span class=\"chem\">s(0) = 0</span> 求出 <span class=\"chem\">C = 12.5</span>，從而得出題目給出的結果 AG（寫出給定結果本身不得分）。",
        // EN: R1: notes that <span class="chem">v &gt; 0</span>, so the particle never turns and its distance from the origin is <span class="chem">s(t)</span>.
        "R1: 指出 <span class=\"chem\">v &gt; 0</span>，所以質點從不折返，其與原點的距離為 <span class=\"chem\">s(t)</span>。",
        // EN: M1: solves <span class="chem">s(t) = 8</span> with a GDC.
        "M1: 用 GDC 解 <span class=\"chem\">s(t) = 8</span>。",
        // EN: A1: <span class="chem">t = 5.44</span> s.
        "A1: <span class=\"chem\">t = 5.44</span> s。",
      ],
    },

    // ── t5-3-q044 · numeric · exam · AHL · AHL 5.17 · 6 marks
    "t5-3-q044": {
      // EN: <p>The inside of a vase is formed by rotating the curve <span class="chem">x = 3 + 0.5 sin(0.8y)</span>, <span class="chem">0 &lt;= y &lt;= 12</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis, where lengths are in centimetres and the base of the vase is at <span class="chem">y = 0</span>. Water is poured into the empty vase until it holds <span class="unit">250 cm3</span>. Find the depth of the water.</p>
      stem: "<p>一個花瓶的內部是把曲線 <span class=\"chem\">x = 3 + 0.5 sin(0.8y)</span>，<span class=\"chem\">0 &lt;= y &lt;= 12</span>，繞 <i>y</i> 軸旋轉 <span class=\"chem\">2pi</span> 弧度而成，其中長度以厘米為單位，花瓶底部位於 <span class=\"chem\">y = 0</span>。把水注入空花瓶，直至瓶中有 <span class=\"unit\">250 cm3</span> 水。求 (Find) 水深。</p>",
      hints: [
        // EN: Decode: the volume of water of depth <i>h</i> is a volume of revolution about the <i>y</i>-axis with upper limit <i>h</i>: <span class="chem">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>.
        "解碼：深度為 <i>h</i> 的水的體積是一個繞 <i>y</i> 軸、上限為 <i>h</i> 的旋轉體體積：<span class=\"chem\">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>。",
        // EN: Solve <span class="chem">V(h) = 250</span> on your GDC, for example by graphing <span class="chem">V(h)</span> as a function of <i>h</i> and intersecting with 250.
        "在 GDC 上解 <span class=\"chem\">V(h) = 250</span>，例如把 <span class=\"chem\">V(h)</span> 作為 <i>h</i> 的函數繪圖，再求它與 250 的交點。",
        // EN: Check that your answer is less than 12 (the vase holds about <span class="unit">367 cm3</span> when full).
        "檢查你的答案小於 12（花瓶盛滿時約可容納 <span class=\"unit\">367 cm3</span>）。",
      ],
      // EN: <p>Decode: the depth is the upper limit of the volume integral. <span class="chem">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>. GDC: <span class="chem">V(h) = 250 => h = 8.65</span> cm (3 s.f.). This is below the full height 12 cm (full volume <span class="chem">367</span> <span class="unit">cm3</span>).</p>
      solution: "<p>解碼：水深就是體積積分的上限。<span class=\"chem\">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>。GDC：<span class=\"chem\">V(h) = 250 => h = 8.65</span> cm（3 位有效數字）。這低於全高 12 cm（盛滿時體積為 <span class=\"chem\">367</span> <span class=\"unit\">cm3</span>）。</p>",
    },

    // ── t5-3-q045 · short · challenge · AHL · AHL 5.14 · 8 marks
    "t5-3-q045": {
      // EN: <p>The curve <i>C</i> has equation <span class="chem">e^{xy} + y^2 = 5</span>. The line <span class="chem">x = 0.5</span> meets <i>C</i> at a point <i>P</i> with positive <i>y</i>-coordinate.</p><p>(a) Find the <i>y</i>-coordinate of <i>P</i>. <strong>[2 marks]</strong></p><p>(b) Find the gradient of <i>C</i> at <i>P</i>. <strong>[4 marks]</strong></p><p>(c) The tangent to <i>C</i> at <i>P</i> meets the <i>x</i>-axis at <i>Q</i>. Find the <i>x</i>-coordinate of <i>Q</i>. <strong>[2 marks]</strong></p>
      stem: "<p>曲線 <i>C</i> 的方程為 <span class=\"chem\">e^{xy} + y^2 = 5</span>。直線 <span class=\"chem\">x = 0.5</span> 與 <i>C</i> 相交於一個 <i>y</i> 坐標為正的點 <i>P</i>。</p><p>(a) 求 (Find) <i>P</i> 的 <i>y</i> 坐標。<strong>[2 分]</strong></p><p>(b) 求 (Find) <i>C</i> 在 <i>P</i> 的斜率。<strong>[4 分]</strong></p><p>(c) <i>C</i> 在 <i>P</i> 的切線與 <i>x</i> 軸相交於 <i>Q</i>。求 (Find) <i>Q</i> 的 <i>x</i> 坐標。<strong>[2 分]</strong></p>",
      hints: [
        // EN: Decode: <i>P</i> is not given; you must first find its <i>y</i>-coordinate numerically. Then this is an implicit gradient and a tangent line. Keep full GDC accuracy until the end.
        "解碼：題目沒有給出 <i>P</i>；你必須先以數值方法求出它的 <i>y</i> 坐標。之後就是隱函數的斜率和切線問題。直至最後都保留 GDC 的全部精確度。",
        // EN: Differentiate <span class="chem">e^{xy}</span> with the chain rule: its derivative is <span class="chem">e^{xy}(y + x dy/dx)</span>.
        "以鏈式法則對 <span class=\"chem\">e^{xy}</span> 求導：其導數為 <span class=\"chem\">e^{xy}(y + x dy/dx)</span>。",
        // EN: Solve for <span class="chem">dy/dx</span>: <span class="chem">dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>, and substitute <span class="chem">x = 0.5</span> and the stored <i>y</i>.
        "解出 <span class=\"chem\">dy/dx</span>：<span class=\"chem\">dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>，然後代入 <span class=\"chem\">x = 0.5</span> 及已儲存的 <i>y</i> 值。",
        // EN: For (c), set <span class="chem">y = 0</span> in <span class="chem">y - y_P = m(x - 0.5)</span>.
        "在 (c) 部，在 <span class=\"chem\">y - y_P = m(x - 0.5)</span> 中令 <span class=\"chem\">y = 0</span>。",
      ],
      // EN: <p>Decode: find <i>P</i> numerically, then use implicit differentiation for the gradient and the tangent. (a) <span class="chem">y_P = 1.649</span>. (b) <span class="chem">m = -0.847</span>. (c) <span class="chem">x_Q = 0.5 - y_P/m = 2.45</span>.</p>
      solution: "<p>解碼：先以數值方法求 <i>P</i>，再用隱函數微分法求斜率和切線。(a) <span class=\"chem\">y_P = 1.649</span>。(b) <span class=\"chem\">m = -0.847</span>。(c) <span class=\"chem\">x_Q = 0.5 - y_P/m = 2.45</span>。</p>",
      // EN: <p>(a) <span class="chem">e^{0.5y} + y^2 = 5</span>; GDC gives <span class="chem">y = 1.649</span> (1.64901…).</p><p>(b) <span class="chem">e^{xy}(y + x dy/dx) + 2y dy/dx = 0 => dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>. At <i>P</i>: <span class="chem">dy/dx = -3.76099…/4.43840… = -0.847</span>.</p><p>(c) Tangent: <span class="chem">y - 1.64901… = -0.847375…(x - 0.5)</span>. Setting <span class="chem">y = 0</span>: <span class="chem">x = 0.5 + 1.64901…/0.847375… = 2.45</span>.</p>
      answer: "<p>(a) <span class=\"chem\">e^{0.5y} + y^2 = 5</span>；GDC 給出 <span class=\"chem\">y = 1.649</span>（1.64901…）。</p><p>(b) <span class=\"chem\">e^{xy}(y + x dy/dx) + 2y dy/dx = 0 => dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>。在 <i>P</i>：<span class=\"chem\">dy/dx = -3.76099…/4.43840… = -0.847</span>。</p><p>(c) 切線：<span class=\"chem\">y - 1.64901… = -0.847375…(x - 0.5)</span>。令 <span class=\"chem\">y = 0</span>：<span class=\"chem\">x = 0.5 + 1.64901…/0.847375… = 2.45</span>。</p>",
      markscheme: [
        // EN: M1: substitutes <span class="chem">x = 0.5</span> and solves with a GDC.
        "M1: 代入 <span class=\"chem\">x = 0.5</span> 並用 GDC 求解。",
        // EN: A1: <span class="chem">y = 1.65</span> (1.64901…).
        "A1: <span class=\"chem\">y = 1.65</span>（1.64901…）。",
        // EN: M1: implicit differentiation, with the chain and product rules on <span class="chem">e^{xy}</span>.
        "M1: 進行隱函數微分，並對 <span class=\"chem\">e^{xy}</span> 應用鏈式法則和積法則。",
        // EN: A1: <span class="chem">e^{xy}(y + x dy/dx) + 2y dy/dx = 0</span>.
        "A1: <span class=\"chem\">e^{xy}(y + x dy/dx) + 2y dy/dx = 0</span>。",
        // EN: M1: substitutes the coordinates of <i>P</i> (using unrounded <i>y</i>).
        "M1: 代入 <i>P</i> 的坐標（使用未經捨入的 <i>y</i>）。",
        // EN: A1: <span class="chem">dy/dx = -0.847</span>.
        "A1: <span class=\"chem\">dy/dx = -0.847</span>。",
        // EN: M1: equation of the tangent, with <span class="chem">y = 0</span>.
        "M1: 切線方程，並令 <span class=\"chem\">y = 0</span>。",
        // EN: A1: <span class="chem">x = 2.45</span>.
        "A1: <span class=\"chem\">x = 2.45</span>。",
      ],
    },

    // ── t5-3-q046 · short · foundation · AHL · AHL 5.12 · 4 marks
    "t5-3-q046": {
      // EN: <p>Let <span class="chem">f(x) = 2x^2 - 5x</span>. Use differentiation from first principles to show that <span class="chem">f'(x) = 4x - 5</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = 2x^2 - 5x</span>。利用基本原理求導法證明 (Show that) <span class=\"chem\">f'(x) = 4x - 5</span>。</p>",
      hints: [
        // EN: Start from <span class="chem">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span>, and write <span class="chem">f(x + h)</span> out in full.
        "從 <span class=\"chem\">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span> 開始，並把 <span class=\"chem\">f(x + h)</span> 完整寫出。",
        // EN: Every term without <i>h</i> cancels. Divide by <i>h</i> <strong>before</strong> you let <span class="chem">h -> 0</span>.
        "所有不含 <i>h</i> 的項都會互相抵消。<strong>先</strong>除以 <i>h</i>，然後才令 <span class=\"chem\">h -> 0</span>。",
      ],
      // EN: <p><span class="chem">(f(x + h) - f(x))/h = (4xh + 2h^2 - 5h)/h = 4x + 2h - 5 -> 4x - 5</span> as <span class="chem">h -> 0</span>.</p>
      solution: "<p>當 <span class=\"chem\">h -> 0</span> 時，<span class=\"chem\">(f(x + h) - f(x))/h = (4xh + 2h^2 - 5h)/h = 4x + 2h - 5 -> 4x - 5</span>。</p>",
      // EN: <p><span class="chem">f(x + h) - f(x) = 2(x + h)^2 - 5(x + h) - 2x^2 + 5x = 4xh + 2h^2 - 5h</span>. So <span class="chem">f'(x) = lim_{h->0} (4xh + 2h^2 - 5h)/h = lim_{h->0} (4x + 2h - 5) = 4x - 5</span>.</p>
      answer: "<p><span class=\"chem\">f(x + h) - f(x) = 2(x + h)^2 - 5(x + h) - 2x^2 + 5x = 4xh + 2h^2 - 5h</span>。故 <span class=\"chem\">f'(x) = lim_{h->0} (4xh + 2h^2 - 5h)/h = lim_{h->0} (4x + 2h - 5) = 4x - 5</span>。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">lim_{h->0} (f(x + h) - f(x))/h</span> with <span class="chem">f(x + h) = 2(x + h)^2 - 5(x + h)</span>.
        "M1: 使用 <span class=\"chem\">lim_{h->0} (f(x + h) - f(x))/h</span>，其中 <span class=\"chem\">f(x + h) = 2(x + h)^2 - 5(x + h)</span>。",
        // EN: A1: expands correctly: <span class="chem">2x^2 + 4xh + 2h^2 - 5x - 5h</span>.
        "A1: 正確展開：<span class=\"chem\">2x^2 + 4xh + 2h^2 - 5x - 5h</span>。",
        // EN: A1: simplifies the numerator to <span class="chem">4xh + 2h^2 - 5h</span>.
        "A1: 把分子化簡為 <span class=\"chem\">4xh + 2h^2 - 5h</span>。",
        // EN: A1: divides by <i>h</i> to get <span class="chem">4x + 2h - 5</span> before letting <span class="chem">h -> 0</span>, leading to <span class="chem">f'(x) = 4x - 5</span> AG (no mark for the given line).
        "A1: 在令 <span class=\"chem\">h -> 0</span> 之前先除以 <i>h</i> 得 <span class=\"chem\">4x + 2h - 5</span>，從而得出 <span class=\"chem\">f'(x) = 4x - 5</span> AG（寫出給定結果本身不得分）。",
      ],
    },

    // ── t5-3-q047 · numeric · foundation · AHL · AHL 5.15 · 3 marks
    "t5-3-q047": {
      // EN: <p>Let <span class="chem">f(x) = sec(2x)</span>. Find the exact value of <span class="chem">f'(pi/8)</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = sec(2x)</span>。求 (Find) <span class=\"chem\">f'(pi/8)</span> 的準確值。</p>",
      hints: [
        // EN: Use <span class="chem">d/dx sec x = sec x tan x</span> with the chain rule: <span class="chem">f'(x) = 2 sec(2x) tan(2x)</span>.
        "利用 <span class=\"chem\">d/dx sec x = sec x tan x</span> 及鏈式法則：<span class=\"chem\">f'(x) = 2 sec(2x) tan(2x)</span>。",
        // EN: At <span class="chem">x = pi/8</span>, <span class="chem">2x = pi/4</span>, where <span class="chem">sec(pi/4) = sqrt(2)</span> and <span class="chem">tan(pi/4) = 1</span>.
        "當 <span class=\"chem\">x = pi/8</span> 時，<span class=\"chem\">2x = pi/4</span>，而 <span class=\"chem\">sec(pi/4) = sqrt(2)</span> 及 <span class=\"chem\">tan(pi/4) = 1</span>。",
      ],
      // EN: <p><span class="chem">f'(x) = 2 sec(2x) tan(2x)</span>, so <span class="chem">f'(pi/8) = 2 sec(pi/4) tan(pi/4) = 2 × sqrt(2) × 1 = 2 sqrt(2)</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 2 sec(2x) tan(2x)</span>，故 <span class=\"chem\">f'(pi/8) = 2 sec(pi/4) tan(pi/4) = 2 × sqrt(2) × 1 = 2 sqrt(2)</span>。</p>",
    },

    // ── t5-3-q048 · numeric · exam · AHL · AHL 5.15 · 4 marks
    "t5-3-q048": {
      // EN: <p>Let <span class="chem">f(x) = x arccos x</span>, for <span class="chem">-1 &lt; x &lt; 1</span>. Find the exact value of <span class="chem">f'(1/2)</span>.</p>
      stem: "<p>設 <span class=\"chem\">f(x) = x arccos x</span>，其中 <span class=\"chem\">-1 &lt; x &lt; 1</span>。求 (Find) <span class=\"chem\">f'(1/2)</span> 的準確值。</p>",
      hints: [
        // EN: Use the product rule with <span class="chem">d/dx arccos x = -1/sqrt(1 - x^2)</span>.
        "利用積法則及 <span class=\"chem\">d/dx arccos x = -1/sqrt(1 - x^2)</span>。",
        // EN: <span class="chem">f'(x) = arccos x - x/sqrt(1 - x^2)</span>. At <span class="chem">x = 1/2</span>, <span class="chem">arccos(1/2) = pi/3</span> and <span class="chem">sqrt(1 - 1/4) = sqrt(3)/2</span>.
        "<span class=\"chem\">f'(x) = arccos x - x/sqrt(1 - x^2)</span>。當 <span class=\"chem\">x = 1/2</span> 時，<span class=\"chem\">arccos(1/2) = pi/3</span> 及 <span class=\"chem\">sqrt(1 - 1/4) = sqrt(3)/2</span>。",
      ],
      // EN: <p><span class="chem">f'(x) = arccos x + x × (-1/sqrt(1 - x^2))</span>. So <span class="chem">f'(1/2) = pi/3 - (1/2)/(sqrt(3)/2) = pi/3 - 1/sqrt(3) = pi/3 - sqrt(3)/3</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = arccos x + x × (-1/sqrt(1 - x^2))</span>。故 <span class=\"chem\">f'(1/2) = pi/3 - (1/2)/(sqrt(3)/2) = pi/3 - 1/sqrt(3) = pi/3 - sqrt(3)/3</span>。</p>",
    },

    // ── t5-3-q049 · short · exam · AHL · AHL 5.15 · 8 marks
    "t5-3-q049": {
      // EN: <p>(a) Find <span class="chem">dy/dx</span> for each of the following.</p><p>(i) <span class="chem">y = cot(3x)</span> &nbsp; (ii) <span class="chem">y = log_5 (2x - 1)</span>, <span class="chem">x &gt; 1/2</span> &nbsp; (iii) <span class="chem">y = 2^{x^2}</span> <strong>[6 marks]</strong></p><p>(b) Hence find <span class="chem">int x 2^{x^2} dx</span>. <strong>[2 marks]</strong></p>
      stem: "<p>(a) 就下列各項求 (Find) <span class=\"chem\">dy/dx</span>。</p><p>(i) <span class=\"chem\">y = cot(3x)</span> &nbsp; (ii) <span class=\"chem\">y = log_5 (2x - 1)</span>，<span class=\"chem\">x &gt; 1/2</span> &nbsp; (iii) <span class=\"chem\">y = 2^{x^2}</span> <strong>[6 分]</strong></p><p>(b) 由此求 (Hence find) <span class=\"chem\">int x 2^{x^2} dx</span>。<strong>[2 分]</strong></p>",
      hints: [
        // EN: The formula booklet gives the derivatives of <span class="chem">cot x</span>, <span class="chem">a^x</span> and <span class="chem">log_a x</span>. In every part, multiply by the derivative of the inside function.
        "公式小冊子列出了 <span class=\"chem\">cot x</span>、<span class=\"chem\">a^x</span> 及 <span class=\"chem\">log_a x</span> 的導數。在每一部分，都要乘以內函數的導數。",
        // EN: For (ii), <span class="chem">d/dx log_a x = 1/(x ln a)</span>. For (iii), <span class="chem">d/dx a^x = a^x ln a</span>.
        "在 (ii)，<span class=\"chem\">d/dx log_a x = 1/(x ln a)</span>。在 (iii)，<span class=\"chem\">d/dx a^x = a^x ln a</span>。",
        // EN: For (b), the integrand is (a)(iii) divided by <span class="chem">2 ln 2</span>.
        "在 (b) 部，被積函數就是 (a)(iii) 的結果除以 <span class=\"chem\">2 ln 2</span>。",
      ],
      // EN: <p>(i) <span class="chem">-3 cosec^2(3x)</span>. (ii) <span class="chem">2/((2x - 1) ln 5)</span>. (iii) <span class="chem">2x ln 2 × 2^{x^2}</span>. (b) <span class="chem">2^{x^2}/(2 ln 2) + C</span>.</p>
      solution: "<p>(i) <span class=\"chem\">-3 cosec^2(3x)</span>。(ii) <span class=\"chem\">2/((2x - 1) ln 5)</span>。(iii) <span class=\"chem\">2x ln 2 × 2^{x^2}</span>。(b) <span class=\"chem\">2^{x^2}/(2 ln 2) + C</span>。</p>",
      // EN: <p>(a)(i) <span class="chem">dy/dx = -3 cosec^2(3x)</span>. (ii) <span class="chem">log_5(2x - 1) = ln(2x - 1)/ln 5</span>, so <span class="chem">dy/dx = 2/((2x - 1) ln 5)</span>. (iii) <span class="chem">dy/dx = 2^{x^2} ln 2 × 2x = 2x ln 2 × 2^{x^2}</span>.</p><p>(b) From (iii), <span class="chem">int x 2^{x^2} dx = 2^{x^2}/(2 ln 2) + C</span>.</p>
      answer: "<p>(a)(i) <span class=\"chem\">dy/dx = -3 cosec^2(3x)</span>。(ii) <span class=\"chem\">log_5(2x - 1) = ln(2x - 1)/ln 5</span>，故 <span class=\"chem\">dy/dx = 2/((2x - 1) ln 5)</span>。(iii) <span class=\"chem\">dy/dx = 2^{x^2} ln 2 × 2x = 2x ln 2 × 2^{x^2}</span>。</p><p>(b) 由 (iii) 得 <span class=\"chem\">int x 2^{x^2} dx = 2^{x^2}/(2 ln 2) + C</span>。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">d/dx cot u = -cosec^2 u (du/dx)</span>.
        "M1: 使用 <span class=\"chem\">d/dx cot u = -cosec^2 u (du/dx)</span>。",
        // EN: A1: <span class="chem">-3 cosec^2(3x)</span>.
        "A1: <span class=\"chem\">-3 cosec^2(3x)</span>。",
        // EN: M1: uses <span class="chem">d/dx log_a u = (1/(u ln a))(du/dx)</span> (or the change of base to <span class="chem">ln</span>).
        "M1: 使用 <span class=\"chem\">d/dx log_a u = (1/(u ln a))(du/dx)</span>（或換底為 <span class=\"chem\">ln</span>）。",
        // EN: A1: <span class="chem">2/((2x - 1) ln 5)</span>.
        "A1: <span class=\"chem\">2/((2x - 1) ln 5)</span>。",
        // EN: M1: uses <span class="chem">d/dx a^u = a^u ln a (du/dx)</span>.
        "M1: 使用 <span class=\"chem\">d/dx a^u = a^u ln a (du/dx)</span>。",
        // EN: A1: <span class="chem">2x ln 2 × 2^{x^2}</span>.
        "A1: <span class=\"chem\">2x ln 2 × 2^{x^2}</span>。",
        // EN: M1: reverses (a)(iii), dividing by the constant <span class="chem">2 ln 2</span>.
        "M1: 逆用 (a)(iii) 的結果，除以常數 <span class=\"chem\">2 ln 2</span>。",
        // EN: A1: <span class="chem">2^{x^2}/(2 ln 2) + C</span>.
        "A1: <span class=\"chem\">2^{x^2}/(2 ln 2) + C</span>。",
      ],
    },

    // ── t5-3-q050 · numeric · exam · AHL · AHL 5.13 · 5 marks
    "t5-3-q050": {
      // EN: <p>Find the exact value of <span class="chem">lim_{x->infty} (e^x + 5x^2) / (3e^x - x^3)</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">lim_{x->infty} (e^x + 5x^2) / (3e^x - x^3)</span> 的準確值。</p>",
      hints: [
        // EN: As <span class="chem">x -> infty</span>, both numerator and denominator tend to <span class="chem">infty</span> (the exponential beats the cubic), so L’Hôpital’s rule applies.
        "當 <span class=\"chem\">x -> infty</span> 時，分子和分母都趨向 <span class=\"chem\">infty</span>（指數函數增長得比三次函數快），所以可應用洛必達法則。",
        // EN: Differentiate top and bottom repeatedly: <span class="chem">(e^x + 10x)/(3e^x - 3x^2)</span>, then <span class="chem">(e^x + 10)/(3e^x - 6x)</span>, then <span class="chem">e^x/(3e^x - 6)</span>. Check the form each time.
        "把分子和分母反覆求導：<span class=\"chem\">(e^x + 10x)/(3e^x - 3x^2)</span>，然後 <span class=\"chem\">(e^x + 10)/(3e^x - 6x)</span>，再然後 <span class=\"chem\">e^x/(3e^x - 6)</span>。每次都要檢查極限的形式。",
        // EN: Divide the last fraction through by <span class="chem">e^x</span>.
        "把最後一個分式的分子和分母同除以 <span class=\"chem\">e^x</span>。",
      ],
      // EN: <p>The form is <span class="chem">infty/infty</span>. Applying L’Hôpital’s rule three times (each time <span class="chem">infty/infty</span>): <span class="chem">lim (e^x + 10x)/(3e^x - 3x^2) = lim (e^x + 10)/(3e^x - 6x) = lim e^x/(3e^x - 6) = lim 1/(3 - 6e^{-x}) = 1/3</span>.</p>
      solution: "<p>形式為 <span class=\"chem\">infty/infty</span>。應用洛必達法則三次（每次都是 <span class=\"chem\">infty/infty</span>）：<span class=\"chem\">lim (e^x + 10x)/(3e^x - 3x^2) = lim (e^x + 10)/(3e^x - 6x) = lim e^x/(3e^x - 6) = lim 1/(3 - 6e^{-x}) = 1/3</span>。</p>",
    },

    // ── t5-3-q051 · numeric · exam · AHL · AHL 5.13 · 4 marks
    "t5-3-q051": {
      // EN: <p>Find <span class="chem">lim_{x->0} (ln(1 + 2x) - 2x) / x^2</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">lim_{x->0} (ln(1 + 2x) - 2x) / x^2</span>。</p>",
      hints: [
        // EN: Substituting <span class="chem">x = 0</span> gives <span class="chem">0/0</span>, so apply L’Hôpital’s rule.
        "代入 <span class=\"chem\">x = 0</span> 得 <span class=\"chem\">0/0</span>，所以應用洛必達法則。",
        // EN: After one step: <span class="chem">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>, still <span class="chem">0/0</span>. Apply the rule again.
        "應用一次後：<span class=\"chem\">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>，仍然是 <span class=\"chem\">0/0</span>。再應用該法則一次。",
      ],
      // EN: <p><span class="chem">0/0</span>: <span class="chem">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>, again <span class="chem">0/0</span>, so <span class="chem">= lim_{x->0} (-4/(1 + 2x)^2)/2 = -4/2 = -2</span>.</p>
      solution: "<p><span class=\"chem\">0/0</span>：<span class=\"chem\">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>，再次為 <span class=\"chem\">0/0</span>，故 <span class=\"chem\">= lim_{x->0} (-4/(1 + 2x)^2)/2 = -4/2 = -2</span>。</p>",
    },

    // ── t5-3-q052 · short · exam · AHL · AHL 5.15 · 6 marks
    "t5-3-q052": {
      // EN: <p>(a) Express <span class="chem">(3x + 7)/((x + 1)(x + 3))</span> in partial fractions. <strong>[3 marks]</strong></p><p>(b) Hence find the exact value of <span class="chem">int_0^2 (3x + 7)/((x + 1)(x + 3)) dx</span>, giving your answer in the form <span class="chem">ln k</span>, where <span class="chem">k \in \mathbb{Z}</span>. <strong>[3 marks]</strong></p>
      stem: "<p>(a) 把 <span class=\"chem\">(3x + 7)/((x + 1)(x + 3))</span> 表示為部分分式。<strong>[3 分]</strong></p><p>(b) 由此求 (Hence find) <span class=\"chem\">int_0^2 (3x + 7)/((x + 1)(x + 3)) dx</span> 的準確值，答案以 <span class=\"chem\">ln k</span> 的形式表示，其中 <span class=\"chem\">k \\in \\mathbb{Z}</span>。<strong>[3 分]</strong></p>",
      hints: [
        // EN: Write <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span> and choose <span class="chem">x = -1</span> and <span class="chem">x = -3</span>.
        "寫出 <span class=\"chem\">3x + 7 = A(x + 3) + B(x + 1)</span>，並分別取 <span class=\"chem\">x = -1</span> 及 <span class=\"chem\">x = -3</span>。",
        // EN: Each partial fraction integrates to a logarithm. Combine the logarithms at the end.
        "每個部分分式積分後都是一個對數。最後把各對數合併。",
      ],
      // EN: <p>(a) <span class="chem">2/(x + 1) + 1/(x + 3)</span>. (b) <span class="chem">[2 ln(x + 1) + ln(x + 3)]_0^2 = 2 ln 3 + ln 5 - ln 3 = ln 15</span>, so <span class="chem">k = 15</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2/(x + 1) + 1/(x + 3)</span>。(b) <span class=\"chem\">[2 ln(x + 1) + ln(x + 3)]_0^2 = 2 ln 3 + ln 5 - ln 3 = ln 15</span>，故 <span class=\"chem\">k = 15</span>。</p>",
      // EN: <p>(a) <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span>. <span class="chem">x = -1: 4 = 2A => A = 2</span>; <span class="chem">x = -3: -2 = -2B => B = 1</span>. So the integrand is <span class="chem">2/(x + 1) + 1/(x + 3)</span>.</p><p>(b) <span class="chem">[2 ln(x + 1) + ln(x + 3)]_0^2 = (2 ln 3 + ln 5) - (0 + ln 3) = ln 3 + ln 5 = ln 15</span>.</p>
      answer: "<p>(a) <span class=\"chem\">3x + 7 = A(x + 3) + B(x + 1)</span>。<span class=\"chem\">x = -1: 4 = 2A => A = 2</span>；<span class=\"chem\">x = -3: -2 = -2B => B = 1</span>。故被積函數為 <span class=\"chem\">2/(x + 1) + 1/(x + 3)</span>。</p><p>(b) <span class=\"chem\">[2 ln(x + 1) + ln(x + 3)]_0^2 = (2 ln 3 + ln 5) - (0 + ln 3) = ln 3 + ln 5 = ln 15</span>。</p>",
      markscheme: [
        // EN: M1: writes <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span> (or equivalent).
        "M1: 寫出 <span class=\"chem\">3x + 7 = A(x + 3) + B(x + 1)</span>（或等價式）。",
        // EN: A1: <span class="chem">A = 2</span>.
        "A1: <span class=\"chem\">A = 2</span>。",
        // EN: A1: <span class="chem">B = 1</span>.
        "A1: <span class=\"chem\">B = 1</span>。",
        // EN: A1: integrates to <span class="chem">2 ln(x + 1) + ln(x + 3)</span>.
        "A1: 積分得 <span class=\"chem\">2 ln(x + 1) + ln(x + 3)</span>。",
        // EN: M1: substitutes both limits.
        "M1: 代入上下兩個限。",
        // EN: A1: <span class="chem">ln 15</span>.
        "A1: <span class=\"chem\">ln 15</span>。",
      ],
    },

    // ── t5-3-q053 · numeric · exam · AHL · AHL 5.15, 5.16 · 5 marks
    "t5-3-q053": {
      // EN: <p>Use the substitution <span class="chem">u = e^x</span> to find the exact value of <span class="chem">int_0^{ln sqrt(3)} e^x/(1 + e^{2x}) dx</span>.</p>
      stem: "<p>利用代換 <span class=\"chem\">u = e^x</span> 求 (Find) <span class=\"chem\">int_0^{ln sqrt(3)} e^x/(1 + e^{2x}) dx</span> 的準確值。</p>",
      hints: [
        // EN: With <span class="chem">u = e^x</span>, <span class="chem">du = e^x dx</span> and <span class="chem">e^{2x} = u^2</span>. Change the limits: <span class="chem">x = 0 -> u = 1</span>, <span class="chem">x = ln sqrt(3) -> u = sqrt(3)</span>.
        "設 <span class=\"chem\">u = e^x</span>，則 <span class=\"chem\">du = e^x dx</span> 及 <span class=\"chem\">e^{2x} = u^2</span>。變換積分限：<span class=\"chem\">x = 0 -> u = 1</span>，<span class=\"chem\">x = ln sqrt(3) -> u = sqrt(3)</span>。",
        // EN: The integral becomes <span class="chem">int_1^{sqrt(3)} 1/(1 + u^2) du</span>, a standard <span class="chem">arctan</span> integral.
        "積分變為 <span class=\"chem\">int_1^{sqrt(3)} 1/(1 + u^2) du</span>，這是標準的 <span class=\"chem\">arctan</span> 積分。",
      ],
      // EN: <p><span class="chem">int_1^{sqrt(3)} 1/(1 + u^2) du = [arctan u]_1^{sqrt(3)} = pi/3 - pi/4 = pi/12</span>.</p>
      solution: "<p><span class=\"chem\">int_1^{sqrt(3)} 1/(1 + u^2) du = [arctan u]_1^{sqrt(3)} = pi/3 - pi/4 = pi/12</span>。</p>",
    },

    // ── t5-3-q054 · numeric · challenge · AHL · AHL 5.16, 5.17 · 7 marks
    "t5-3-q054": {
      // EN: <p>A solid ornament is made by rotating the part of the curve <span class="chem">y = x e^{x/2}</span> between <span class="chem">x = 0</span> and <span class="chem">x = 1</span> through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the exact volume of the ornament.</p>
      stem: "<p>一件實心裝飾品是把曲線 <span class=\"chem\">y = x e^{x/2}</span> 在 <span class=\"chem\">x = 0</span> 與 <span class=\"chem\">x = 1</span> 之間的部分繞 <i>x</i> 軸旋轉 <span class=\"chem\">2pi</span> 弧度而成。求 (Find) 該裝飾品的準確體積。</p>",
      hints: [
        // EN: Decode: this is a volume of revolution about the <i>x</i>-axis, <span class="chem">V = pi int_0^1 y^2 dx</span>. Squaring <i>y</i> gives <span class="chem">x^2 e^x</span>, which needs integration by parts <strong>twice</strong>.
        "解碼：這是繞 <i>x</i> 軸的旋轉體體積，<span class=\"chem\">V = pi int_0^1 y^2 dx</span>。把 <i>y</i> 平方得 <span class=\"chem\">x^2 e^x</span>，這需要使用分部積分法<strong>兩次</strong>。",
        // EN: First parts: <span class="chem">u = x^2</span>, <span class="chem">dv/dx = e^x</span>: <span class="chem">int x^2 e^x dx = x^2 e^x - int 2x e^x dx</span>.
        "第一次分部積分：<span class=\"chem\">u = x^2</span>，<span class=\"chem\">dv/dx = e^x</span>：<span class=\"chem\">int x^2 e^x dx = x^2 e^x - int 2x e^x dx</span>。",
        // EN: Second parts on <span class="chem">int 2x e^x dx</span> gives <span class="chem">2x e^x - 2e^x</span>, so <span class="chem">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>.
        "對 <span class=\"chem\">int 2x e^x dx</span> 作第二次分部積分得 <span class=\"chem\">2x e^x - 2e^x</span>，故 <span class=\"chem\">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>。",
      ],
      // EN: <p>Decode: volume about the <i>x</i>-axis, so square <i>y</i>: <span class="chem">y^2 = x^2 e^x</span>, then repeated parts. <span class="chem">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>. So <span class="chem">V = pi [e^x(x^2 - 2x + 2)]_0^1 = pi(e - 2)</span>.</p>
      solution: "<p>解碼：繞 <i>x</i> 軸的體積，所以要把 <i>y</i> 平方：<span class=\"chem\">y^2 = x^2 e^x</span>，然後重複使用分部積分法。<span class=\"chem\">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>。故 <span class=\"chem\">V = pi [e^x(x^2 - 2x + 2)]_0^1 = pi(e - 2)</span>。</p>",
    },

    // ── t5-3-q055 · short · challenge · AHL · AHL 5.12 · 9 marks
    "t5-3-q055": {
      // EN: <p>The function <i>f</i> is defined by</p><p><span class="chem">f(x) = a x^2 + b x</span> for <span class="chem">x &lt;= 2</span>, and <span class="chem">f(x) = ln(x - 1) + 3</span> for <span class="chem">x &gt; 2</span>,</p><p>where <i>a</i> and <i>b</i> are constants. The graph of <i>f</i> has no break and no corner at <span class="chem">x = 2</span>.</p><p>(a) Find the value of <i>a</i> and the value of <i>b</i>. <strong>[6 marks]</strong></p><p>(b) Determine whether <span class="chem">f''(2)</span> exists. Justify your answer. <strong>[3 marks]</strong></p>
      stem: "<p>函數 <i>f</i> 的定義為</p><p>當 <span class=\"chem\">x &lt;= 2</span> 時 <span class=\"chem\">f(x) = a x^2 + b x</span>，當 <span class=\"chem\">x &gt; 2</span> 時 <span class=\"chem\">f(x) = ln(x - 1) + 3</span>，</p><p>其中 <i>a</i> 和 <i>b</i> 為常數。<i>f</i> 的圖像在 <span class=\"chem\">x = 2</span> 處沒有斷開，也沒有尖角。</p><p>(a) 求 (Find) <i>a</i> 的值和 <i>b</i> 的值。<strong>[6 分]</strong></p><p>(b) 確定 (Determine) <span class=\"chem\">f''(2)</span> 是否存在，並提出理據 (Justify)。<strong>[3 分]</strong></p>",
      hints: [
        // EN: Decode: "no break" is the condition for continuity and "no corner" is the condition for differentiability at <span class="chem">x = 2</span>. Each gives one equation in <i>a</i> and <i>b</i>. Part (b) asks the same question about <span class="chem">f'</span>.
        "解碼：「沒有斷開」是在 <span class=\"chem\">x = 2</span> 處連續的條件，「沒有尖角」是在該處可微的條件。每個條件都給出一條關於 <i>a</i> 和 <i>b</i> 的方程。(b) 部對 <span class=\"chem\">f'</span> 提出同樣的問題。",
        // EN: Continuity: <span class="chem">a(2)^2 + 2b = ln(1) + 3</span>.
        "連續性：<span class=\"chem\">a(2)^2 + 2b = ln(1) + 3</span>。",
        // EN: Differentiability: <span class="chem">2a(2) + b</span> must equal the derivative of <span class="chem">ln(x - 1) + 3</span> at <span class="chem">x = 2</span>.
        "可微性：<span class=\"chem\">2a(2) + b</span> 必須等於 <span class=\"chem\">ln(x - 1) + 3</span> 在 <span class=\"chem\">x = 2</span> 處的導數。",
        // EN: For (b), compare <span class="chem">f''</span> just to the left and just to the right of <span class="chem">x = 2</span>.
        "在 (b) 部，比較 <span class=\"chem\">x = 2</span> 緊接左方和緊接右方的 <span class=\"chem\">f''</span>。",
      ],
      // EN: <p>Decode: no break = continuous, no corner = differentiable; (b) tests whether <span class="chem">f'</span> is itself differentiable. (a) <span class="chem">4a + 2b = 3</span> and <span class="chem">4a + b = 1</span> give <span class="chem">b = 2</span>, <span class="chem">a = -1/4</span>. (b) <span class="chem">f''</span> is <span class="chem">-1/2</span> on the left and tends to <span class="chem">-1</span> on the right, so <span class="chem">f''(2)</span> does not exist.</p>
      solution: "<p>解碼：沒有斷開 = 連續，沒有尖角 = 可微；(b) 檢驗 <span class=\"chem\">f'</span> 本身是否可微。(a) 由 <span class=\"chem\">4a + 2b = 3</span> 及 <span class=\"chem\">4a + b = 1</span> 得 <span class=\"chem\">b = 2</span>，<span class=\"chem\">a = -1/4</span>。(b) <span class=\"chem\">f''</span> 在左方為 <span class=\"chem\">-1/2</span>，在右方則趨向 <span class=\"chem\">-1</span>，故 <span class=\"chem\">f''(2)</span> 不存在。</p>",
      // EN: <p>(a) No break means continuous: <span class="chem">4a + 2b = ln 1 + 3 = 3</span>. No corner means differentiable: <span class="chem">2a(2) + b = 1/(2 - 1)</span>, so <span class="chem">4a + b = 1</span>. Subtracting: <span class="chem">b = 2</span>, then <span class="chem">a = -1/4</span>.</p><p>(b) For <span class="chem">x &lt; 2</span>, <span class="chem">f''(x) = 2a = -1/2</span>. For <span class="chem">x &gt; 2</span>, <span class="chem">f''(x) = -1/(x - 1)^2 -> -1</span> as <span class="chem">x -> 2^+</span>. The two values differ, so <span class="chem">f'</span> is not differentiable at <span class="chem">x = 2</span> and <span class="chem">f''(2)</span> does not exist.</p>
      answer: "<p>(a) 沒有斷開表示連續：<span class=\"chem\">4a + 2b = ln 1 + 3 = 3</span>。沒有尖角表示可微：<span class=\"chem\">2a(2) + b = 1/(2 - 1)</span>，故 <span class=\"chem\">4a + b = 1</span>。兩式相減：<span class=\"chem\">b = 2</span>，於是 <span class=\"chem\">a = -1/4</span>。</p><p>(b) 當 <span class=\"chem\">x &lt; 2</span> 時，<span class=\"chem\">f''(x) = 2a = -1/2</span>。當 <span class=\"chem\">x &gt; 2</span> 時，隨着 <span class=\"chem\">x -> 2^+</span>，<span class=\"chem\">f''(x) = -1/(x - 1)^2 -> -1</span>。兩個值不相等，所以 <span class=\"chem\">f'</span> 在 <span class=\"chem\">x = 2</span> 處不可微，<span class=\"chem\">f''(2)</span> 不存在。</p>",
      markscheme: [
        // EN: M1: equates the two pieces at <span class="chem">x = 2</span> (continuity).
        "M1: 令兩段在 <span class=\"chem\">x = 2</span> 處相等（連續性）。",
        // EN: A1: <span class="chem">4a + 2b = 3</span>.
        "A1: <span class=\"chem\">4a + 2b = 3</span>。",
        // EN: M1: equates the two derivatives at <span class="chem">x = 2</span> (differentiability).
        "M1: 令兩段的導數在 <span class=\"chem\">x = 2</span> 處相等（可微性）。",
        // EN: A1: <span class="chem">4a + b = 1</span>.
        "A1: <span class=\"chem\">4a + b = 1</span>。",
        // EN: A1: <span class="chem">b = 2</span>.
        "A1: <span class=\"chem\">b = 2</span>。",
        // EN: A1: <span class="chem">a = -1/4</span>.
        "A1: <span class=\"chem\">a = -1/4</span>。",
        // EN: M1: finds <span class="chem">f''</span> on both sides of <span class="chem">x = 2</span>.
        "M1: 求 <span class=\"chem\">x = 2</span> 兩側的 <span class=\"chem\">f''</span>。",
        // EN: A1: left value <span class="chem">-1/2</span> and right limit <span class="chem">-1</span>.
        "A1: 左方的值 <span class=\"chem\">-1/2</span> 及右方的極限 <span class=\"chem\">-1</span>。",
        // EN: R1: they are not equal, so <span class="chem">f''(2)</span> does not exist.
        "R1: 兩者不相等，所以 <span class=\"chem\">f''(2)</span> 不存在。",
      ],
    },

    // ── t5-3-q056 · short · challenge · AHL · AHL 5.16, 5.17 · 20 marks
    "t5-3-q056": {
      // EN: <p>This question investigates the integrals <span class="chem">I_n = int_0^{pi/2} sin^n x dx</span>, for integers <span class="chem">n &gt;= 0</span>.</p><p>(a) Write down the value of <span class="chem">I_0</span> and find the value of <span class="chem">I_1</span>. <strong>[2 marks]</strong></p><p>(b) By writing <span class="chem">sin^n x = sin^{n-1} x × sin x</span> and integrating by parts, show that <span class="chem">n I_n = (n - 1) I_{n-2}</span> for <span class="chem">n &gt;= 2</span>. <strong>[5 marks]</strong></p><p>(c) Hence find the exact values of <span class="chem">I_2</span>, <span class="chem">I_3</span>, <span class="chem">I_4</span> and <span class="chem">I_5</span>. <strong>[3 marks]</strong></p><p>(d) Use your GDC to verify your value of <span class="chem">I_4</span>. <strong>[1 mark]</strong></p><p>(e) Conjecture an expression for <span class="chem">I_{2k}</span>, <span class="chem">k &gt;= 1</span>, as a product of fractions multiplied by <span class="chem">pi/2</span>. <strong>[2 marks]</strong></p><p>(f) Show that <span class="chem">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>, and hence prove that <span class="chem">I_n I_{n-1} = pi/(2n)</span> for all <span class="chem">n &gt;= 1</span>. <strong>[5 marks]</strong></p><p>(g) The curve <span class="chem">y = sin^2 x</span>, <span class="chem">0 &lt;= x &lt;= pi/2</span>, is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the exact volume of the solid formed. <strong>[2 marks]</strong></p>
      stem: "<p>本題探究積分 <span class=\"chem\">I_n = int_0^{pi/2} sin^n x dx</span>，其中 <span class=\"chem\">n &gt;= 0</span> 為整數。</p><p>(a) 寫出 (Write down) <span class=\"chem\">I_0</span> 的值，並求 (find) <span class=\"chem\">I_1</span> 的值。<strong>[2 分]</strong></p><p>(b) 把 <span class=\"chem\">sin^n x = sin^{n-1} x × sin x</span> 寫出並使用分部積分法，證明 (Show that) 對 <span class=\"chem\">n &gt;= 2</span> 有 <span class=\"chem\">n I_n = (n - 1) I_{n-2}</span>。<strong>[5 分]</strong></p><p>(c) 由此求 (Hence find) <span class=\"chem\">I_2</span>、<span class=\"chem\">I_3</span>、<span class=\"chem\">I_4</span> 及 <span class=\"chem\">I_5</span> 的準確值。<strong>[3 分]</strong></p><p>(d) 利用你的 GDC 驗證 (Verify) 你所得的 <span class=\"chem\">I_4</span> 值。<strong>[1 分]</strong></p><p>(e) 猜想 (Conjecture) <span class=\"chem\">I_{2k}</span>（<span class=\"chem\">k &gt;= 1</span>）的表達式，把它寫成若干分數之積乘以 <span class=\"chem\">pi/2</span>。<strong>[2 分]</strong></p><p>(f) 證明 (Show that) <span class=\"chem\">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>，並由此證明 (hence prove) 對所有 <span class=\"chem\">n &gt;= 1</span> 有 <span class=\"chem\">I_n I_{n-1} = pi/(2n)</span>。<strong>[5 分]</strong></p><p>(g) 把曲線 <span class=\"chem\">y = sin^2 x</span>，<span class=\"chem\">0 &lt;= x &lt;= pi/2</span>，繞 <i>x</i> 軸旋轉 <span class=\"chem\">2pi</span> 弧度。求 (Find) 所得立體的準確體積。<strong>[2 分]</strong></p>",
      hints: [
        // EN: Decode: this is a reduction formula. Part (b) links each integral to the one two steps below, so you climb from <span class="chem">I_0</span> (even <i>n</i>) and <span class="chem">I_1</span> (odd <i>n</i>). Part (g) is a disguised <span class="chem">I_4</span>.
        "解碼：這是遞推公式（遞減公式）。(b) 部把每個積分與低兩級的積分聯繫起來，所以你要從 <span class=\"chem\">I_0</span>（偶數 <i>n</i>）及 <span class=\"chem\">I_1</span>（奇數 <i>n</i>）逐步往上推。(g) 部其實是經過偽裝的 <span class=\"chem\">I_4</span>。",
        // EN: In (b), the boundary term <span class="chem">[-sin^{n-1} x cos x]_0^{pi/2}</span> vanishes: <span class="chem">cos(pi/2) = 0</span> and <span class="chem">sin 0 = 0</span>. Then use <span class="chem">cos^2 x = 1 - sin^2 x</span> and collect the two <span class="chem">I_n</span> terms.
        "在 (b) 部，邊界項 <span class=\"chem\">[-sin^{n-1} x cos x]_0^{pi/2}</span> 等於零：<span class=\"chem\">cos(pi/2) = 0</span> 及 <span class=\"chem\">sin 0 = 0</span>。然後利用 <span class=\"chem\">cos^2 x = 1 - sin^2 x</span>，並合併兩個 <span class=\"chem\">I_n</span> 項。",
        // EN: In (c), use <span class="chem">I_n = ((n - 1)/n) I_{n-2}</span>: even <i>n</i> start from <span class="chem">pi/2</span>, odd <i>n</i> from 1.
        "在 (c) 部，利用 <span class=\"chem\">I_n = ((n - 1)/n) I_{n-2}</span>：偶數 <i>n</i> 從 <span class=\"chem\">pi/2</span> 開始，奇數 <i>n</i> 從 1 開始。",
        // EN: In (f), if <span class="chem">a_n = n I_n I_{n-1}</span>, the result says <span class="chem">a_n = a_{n-1}</span>, so every <span class="chem">a_n</span> equals <span class="chem">a_1</span>.
        "在 (f) 部，若 <span class=\"chem\">a_n = n I_n I_{n-1}</span>，則該結果表示 <span class=\"chem\">a_n = a_{n-1}</span>，所以每個 <span class=\"chem\">a_n</span> 都等於 <span class=\"chem\">a_1</span>。",
        // EN: In (g), <span class="chem">y^2 = sin^4 x</span>.
        "在 (g) 部，<span class=\"chem\">y^2 = sin^4 x</span>。",
      ],
      // EN: <p>Decode: build a reduction formula by parts, generate small cases, spot the pattern, then use the formula to find a constant product and a volume. (a) <span class="chem">pi/2</span>, <span class="chem">1</span>. (c) <span class="chem">pi/4, 2/3, 3pi/16, 8/15</span>. (e) <span class="chem">I_{2k} = ((2k - 1)/(2k)) × … × (3/4)(1/2)(pi/2)</span>. (f) <span class="chem">n I_n I_{n-1} = pi/2</span> for all <i>n</i>. (g) <span class="chem">V = 3pi^2/16</span>.</p>
      solution: "<p>解碼：用分部積分法建立遞推公式，計算若干小的情況，找出規律，再用該公式求出一個常數乘積和一個體積。(a) <span class=\"chem\">pi/2</span>，<span class=\"chem\">1</span>。(c) <span class=\"chem\">pi/4, 2/3, 3pi/16, 8/15</span>。(e) <span class=\"chem\">I_{2k} = ((2k - 1)/(2k)) × … × (3/4)(1/2)(pi/2)</span>。(f) 對所有 <i>n</i> 有 <span class=\"chem\">n I_n I_{n-1} = pi/2</span>。(g) <span class=\"chem\">V = 3pi^2/16</span>。</p>",
      // EN: <p>(a) <span class="chem">I_0 = pi/2</span>; <span class="chem">I_1 = [-cos x]_0^{pi/2} = 1</span>.</p><p>(b) <span class="chem">u = sin^{n-1} x</span>, <span class="chem">dv/dx = sin x</span>, so <span class="chem">du/dx = (n - 1) sin^{n-2} x cos x</span> and <span class="chem">v = -cos x</span>. Then <span class="chem">I_n = [-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int_0^{pi/2} sin^{n-2} x cos^2 x dx</span>. The boundary term is <span class="chem">0</span> at both limits (for <span class="chem">n &gt;= 2</span>). With <span class="chem">cos^2 x = 1 - sin^2 x</span>: <span class="chem">I_n = (n - 1)(I_{n-2} - I_n)</span>, so <span class="chem">n I_n = (n - 1) I_{n-2}</span>.</p><p>(c) <span class="chem">I_2 = (1/2)(pi/2) = pi/4</span>, <span class="chem">I_3 = (2/3)(1) = 2/3</span>, <span class="chem">I_4 = (3/4)(pi/4) = 3pi/16</span>, <span class="chem">I_5 = (4/5)(2/3) = 8/15</span>.</p><p>(d) GDC: <span class="chem">int_0^{pi/2} sin^4 x dx = 0.589048… = 3pi/16</span>.</p><p>(e) <span class="chem">I_{2k} = (1/2)(3/4)(5/6)…((2k - 1)/(2k)) × pi/2</span>.</p><p>(f) Multiply <span class="chem">n I_n = (n - 1) I_{n-2}</span> by <span class="chem">I_{n-1}</span>. So <span class="chem">n I_n I_{n-1}</span> takes the same value for every <span class="chem">n &gt;= 1</span>, equal to its value at <span class="chem">n = 1</span>: <span class="chem">1 × I_1 I_0 = pi/2</span>. Hence <span class="chem">I_n I_{n-1} = pi/(2n)</span>.</p><p>(g) <span class="chem">V = pi int_0^{pi/2} sin^4 x dx = pi I_4 = 3pi^2/16</span>.</p>
      answer: "<p>(a) <span class=\"chem\">I_0 = pi/2</span>；<span class=\"chem\">I_1 = [-cos x]_0^{pi/2} = 1</span>。</p><p>(b) <span class=\"chem\">u = sin^{n-1} x</span>，<span class=\"chem\">dv/dx = sin x</span>，故 <span class=\"chem\">du/dx = (n - 1) sin^{n-2} x cos x</span> 及 <span class=\"chem\">v = -cos x</span>。於是 <span class=\"chem\">I_n = [-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int_0^{pi/2} sin^{n-2} x cos^2 x dx</span>。邊界項在上下兩個限處均為 <span class=\"chem\">0</span>（對 <span class=\"chem\">n &gt;= 2</span>）。利用 <span class=\"chem\">cos^2 x = 1 - sin^2 x</span>：<span class=\"chem\">I_n = (n - 1)(I_{n-2} - I_n)</span>，故 <span class=\"chem\">n I_n = (n - 1) I_{n-2}</span>。</p><p>(c) <span class=\"chem\">I_2 = (1/2)(pi/2) = pi/4</span>，<span class=\"chem\">I_3 = (2/3)(1) = 2/3</span>，<span class=\"chem\">I_4 = (3/4)(pi/4) = 3pi/16</span>，<span class=\"chem\">I_5 = (4/5)(2/3) = 8/15</span>。</p><p>(d) GDC：<span class=\"chem\">int_0^{pi/2} sin^4 x dx = 0.589048… = 3pi/16</span>。</p><p>(e) <span class=\"chem\">I_{2k} = (1/2)(3/4)(5/6)…((2k - 1)/(2k)) × pi/2</span>。</p><p>(f) 把 <span class=\"chem\">n I_n = (n - 1) I_{n-2}</span> 乘以 <span class=\"chem\">I_{n-1}</span>。故 <span class=\"chem\">n I_n I_{n-1}</span> 對每個 <span class=\"chem\">n &gt;= 1</span> 取相同的值，等於它在 <span class=\"chem\">n = 1</span> 時的值：<span class=\"chem\">1 × I_1 I_0 = pi/2</span>。由此 <span class=\"chem\">I_n I_{n-1} = pi/(2n)</span>。</p><p>(g) <span class=\"chem\">V = pi int_0^{pi/2} sin^4 x dx = pi I_4 = 3pi^2/16</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">I_0 = pi/2</span>.
        "A1: <span class=\"chem\">I_0 = pi/2</span>。",
        // EN: A1: <span class="chem">I_1 = 1</span>.
        "A1: <span class=\"chem\">I_1 = 1</span>。",
        // EN: M1: parts with <span class="chem">u = sin^{n-1} x</span> and <span class="chem">dv/dx = sin x</span>.
        "M1: 以 <span class=\"chem\">u = sin^{n-1} x</span> 及 <span class=\"chem\">dv/dx = sin x</span> 進行分部積分。",
        // EN: A1: <span class="chem">du/dx = (n - 1) sin^{n-2} x cos x</span> and <span class="chem">v = -cos x</span>, giving <span class="chem">[-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int sin^{n-2} x cos^2 x dx</span>.
        "A1: <span class=\"chem\">du/dx = (n - 1) sin^{n-2} x cos x</span> 及 <span class=\"chem\">v = -cos x</span>，得 <span class=\"chem\">[-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int sin^{n-2} x cos^2 x dx</span>。",
        // EN: R1: the boundary term is zero at both limits.
        "R1: 邊界項在上下兩個限處均為零。",
        // EN: M1: replaces <span class="chem">cos^2 x</span> by <span class="chem">1 - sin^2 x</span>.
        "M1: 以 <span class=\"chem\">1 - sin^2 x</span> 代替 <span class=\"chem\">cos^2 x</span>。",
        // EN: A1: <span class="chem">I_n = (n - 1) I_{n-2} - (n - 1) I_n</span>, leading to <span class="chem">n I_n = (n - 1) I_{n-2}</span> AG (no mark for the given line).
        "A1: <span class=\"chem\">I_n = (n - 1) I_{n-2} - (n - 1) I_n</span>，從而得出 <span class=\"chem\">n I_n = (n - 1) I_{n-2}</span> AG（寫出給定結果本身不得分）。",
        // EN: A1: <span class="chem">I_2 = pi/4</span>.
        "A1: <span class=\"chem\">I_2 = pi/4</span>。",
        // EN: A1: <span class="chem">I_3 = 2/3</span> and <span class="chem">I_4 = 3pi/16</span>.
        "A1: <span class=\"chem\">I_3 = 2/3</span> 及 <span class=\"chem\">I_4 = 3pi/16</span>。",
        // EN: A1: <span class="chem">I_5 = 8/15</span>.
        "A1: <span class=\"chem\">I_5 = 8/15</span>。",
        // EN: A1: GDC value <span class="chem">0.589</span> agrees with <span class="chem">3pi/16</span>.
        "A1: GDC 所得的值 <span class=\"chem\">0.589</span> 與 <span class=\"chem\">3pi/16</span> 相符。",
        // EN: M1: recognises the pattern of odd over even fractions.
        "M1: 辨識出奇數除以偶數的分數規律。",
        // EN: A1: <span class="chem">I_{2k} = (1 × 3 × … × (2k - 1))/(2 × 4 × … × 2k) × pi/2</span>.
        "A1: <span class=\"chem\">I_{2k} = (1 × 3 × … × (2k - 1))/(2 × 4 × … × 2k) × pi/2</span>。",
        // EN: M1: multiplies the reduction formula by <span class="chem">I_{n-1}</span>.
        "M1: 把遞推公式乘以 <span class=\"chem\">I_{n-1}</span>。",
        // EN: A1: obtains <span class="chem">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>.
        "A1: 得出 <span class=\"chem\">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>。",
        // EN: R1: deduces that <span class="chem">n I_n I_{n-1}</span> is the same for every <span class="chem">n</span>.
        "R1: 推斷 <span class=\"chem\">n I_n I_{n-1}</span> 對每個 <span class=\"chem\">n</span> 都相同。",
        // EN: M1: evaluates the constant at <span class="chem">n = 1</span>: <span class="chem">I_1 I_0 = pi/2</span>.
        "M1: 在 <span class=\"chem\">n = 1</span> 處求該常數的值：<span class=\"chem\">I_1 I_0 = pi/2</span>。",
        // EN: A1: concludes <span class="chem">I_n I_{n-1} = pi/(2n)</span>.
        "A1: 得出結論 <span class=\"chem\">I_n I_{n-1} = pi/(2n)</span>。",
        // EN: M1: <span class="chem">V = pi int_0^{pi/2} (sin^2 x)^2 dx = pi I_4</span>.
        "M1: <span class=\"chem\">V = pi int_0^{pi/2} (sin^2 x)^2 dx = pi I_4</span>。",
        // EN: A1: <span class="chem">V = 3pi^2/16</span>.
        "A1: <span class=\"chem\">V = 3pi^2/16</span>。",
      ],
    },

    // ── t5-3-q057 · short · challenge · AHL · AHL 5.17, 5.13 · 19 marks
    "t5-3-q057": {
      // EN: <p>For <span class="chem">n &gt; 0</span>, let <span class="chem">R_n</span> be the region bounded by the curve <span class="chem">y = x^n</span>, the <i>x</i>-axis and the line <span class="chem">x = 1</span>. Let <span class="chem">A(n)</span> be the volume formed when <span class="chem">R_n</span> is rotated through <span class="chem">2pi</span> about the <i>x</i>-axis, and <span class="chem">B(n)</span> the volume formed when <span class="chem">R_n</span> is rotated through <span class="chem">2pi</span> about the <i>y</i>-axis.</p><p>(a) For <span class="chem">n = 1</span>, describe each solid and write down <span class="chem">A(1)</span> and <span class="chem">B(1)</span>. <strong>[3 marks]</strong></p><p>(b) Show that <span class="chem">A(n) = pi/(2n + 1)</span>. <strong>[2 marks]</strong></p><p>(c) By first finding the volume formed when the region between <span class="chem">y = x^n</span>, the <i>y</i>-axis and the line <span class="chem">y = 1</span> is rotated about the <i>y</i>-axis, show that <span class="chem">B(n) = 2pi/(n + 2)</span>. <strong>[5 marks]</strong></p><p>(d) Use your GDC to sketch <span class="chem">A(n)</span> and <span class="chem">B(n)</span> for <span class="chem">0 &lt; n &lt;= 5</span>, and hence conjecture which of <span class="chem">A(n)</span> and <span class="chem">B(n)</span> is larger. Prove your conjecture. <strong>[4 marks]</strong></p><p>(e) Find <span class="chem">lim_{n->infty} B(n)/A(n)</span>. <strong>[2 marks]</strong></p><p>(f) Find the value of <i>n</i> for which <span class="chem">B(n) - A(n)</span> is greatest, and state this greatest value. <strong>[3 marks]</strong></p>
      stem: "<p>對 <span class=\"chem\">n &gt; 0</span>，設 <span class=\"chem\">R_n</span> 為由曲線 <span class=\"chem\">y = x^n</span>、<i>x</i> 軸及直線 <span class=\"chem\">x = 1</span> 所圍成的區域。設 <span class=\"chem\">A(n)</span> 為把 <span class=\"chem\">R_n</span> 繞 <i>x</i> 軸旋轉 <span class=\"chem\">2pi</span> 所得的體積，<span class=\"chem\">B(n)</span> 為把 <span class=\"chem\">R_n</span> 繞 <i>y</i> 軸旋轉 <span class=\"chem\">2pi</span> 所得的體積。</p><p>(a) 對 <span class=\"chem\">n = 1</span>，描述每個立體，並寫出 (write down) <span class=\"chem\">A(1)</span> 及 <span class=\"chem\">B(1)</span>。<strong>[3 分]</strong></p><p>(b) 證明 (Show that) <span class=\"chem\">A(n) = pi/(2n + 1)</span>。<strong>[2 分]</strong></p><p>(c) 先求出把 <span class=\"chem\">y = x^n</span>、<i>y</i> 軸及直線 <span class=\"chem\">y = 1</span> 之間的區域繞 <i>y</i> 軸旋轉所得的體積，由此證明 (show that) <span class=\"chem\">B(n) = 2pi/(n + 2)</span>。<strong>[5 分]</strong></p><p>(d) 利用你的 GDC 就 <span class=\"chem\">0 &lt; n &lt;= 5</span> 描繪 <span class=\"chem\">A(n)</span> 及 <span class=\"chem\">B(n)</span> 的略圖 (sketch)，並由此猜想 (hence conjecture) <span class=\"chem\">A(n)</span> 與 <span class=\"chem\">B(n)</span> 何者較大。證明 (Prove) 你的猜想。<strong>[4 分]</strong></p><p>(e) 求 (Find) <span class=\"chem\">lim_{n->infty} B(n)/A(n)</span>。<strong>[2 分]</strong></p><p>(f) 求 (Find) 使 <span class=\"chem\">B(n) - A(n)</span> 為最大的 <i>n</i> 值，並寫出 (state) 這個最大值。<strong>[3 分]</strong></p>",
      hints: [
        // EN: Decode: a whole family of solids depends on one parameter <i>n</i>. Work out small cases, find general formulas, then compare the two formulas and study them as functions of <i>n</i>.
        "解碼：一整族立體取決於一個參數 <i>n</i>。先計算若干小的情況，求出一般公式，然後比較兩條公式，並把它們當作 <i>n</i> 的函數來研究。",
        // EN: For (c), the region <span class="chem">R_n</span> rotated about the <i>y</i>-axis is a cylinder of radius 1 and height 1 with the solid from the region next to the <i>y</i>-axis removed.
        "在 (c) 部，把區域 <span class=\"chem\">R_n</span> 繞 <i>y</i> 軸旋轉，所得的是半徑為 1、高為 1 的圓柱體，再挖去由靠近 <i>y</i> 軸的區域所形成的立體。",
        // EN: Use <span class="chem">x^2 = y^{2/n}</span>, and simplify <span class="chem">1/(2/n + 1) = n/(n + 2)</span>.
        "利用 <span class=\"chem\">x^2 = y^{2/n}</span>，並化簡 <span class=\"chem\">1/(2/n + 1) = n/(n + 2)</span>。",
        // EN: For (d), both denominators are positive, so you may cross-multiply. For (e), divide top and bottom by <i>n</i> (or use L’Hôpital’s rule). For (f), solve <span class="chem">(n + 2)^2 = (2n + 1)^2</span> with <span class="chem">n &gt; 0</span>.
        "在 (d) 部，兩個分母都是正數，所以可以交叉相乘。在 (e) 部，把分子和分母同除以 <i>n</i>（或使用洛必達法則）。在 (f) 部，在 <span class=\"chem\">n &gt; 0</span> 的條件下解 <span class=\"chem\">(n + 2)^2 = (2n + 1)^2</span>。",
      ],
      // EN: <p>Decode: two volume formulas depend on the parameter <i>n</i>; compare them, then treat their difference as a function to optimise. <span class="chem">A(n) = pi/(2n + 1)</span>, <span class="chem">B(n) = 2pi/(n + 2)</span>, <span class="chem">B &gt; A</span> for all <span class="chem">n &gt; 0</span>, <span class="chem">B/A -> 4</span>, and <span class="chem">B - A</span> is greatest (<span class="chem">pi/3</span>) at <span class="chem">n = 1</span>.</p>
      solution: "<p>解碼：兩條體積公式取決於參數 <i>n</i>；比較兩者，再把它們的差視為要最優化的函數。<span class=\"chem\">A(n) = pi/(2n + 1)</span>，<span class=\"chem\">B(n) = 2pi/(n + 2)</span>，對所有 <span class=\"chem\">n &gt; 0</span> 有 <span class=\"chem\">B &gt; A</span>，<span class=\"chem\">B/A -> 4</span>，而 <span class=\"chem\">B - A</span> 在 <span class=\"chem\">n = 1</span> 時最大（<span class=\"chem\">pi/3</span>）。</p>",
      // EN: <p>(a) For <span class="chem">n = 1</span>, about the <i>x</i>-axis the solid is a cone of radius 1 and height 1: <span class="chem">A(1) = pi/3</span>. About the <i>y</i>-axis it is a cylinder of radius 1, height 1 with a cone removed: <span class="chem">B(1) = pi - pi/3 = 2pi/3</span>.</p><p>(b) <span class="chem">A(n) = pi int_0^1 x^{2n} dx = pi/(2n + 1)</span>.</p><p>(c) With <span class="chem">x = y^{1/n}</span>, the region next to the <i>y</i>-axis gives <span class="chem">pi int_0^1 y^{2/n} dy = pi/(2/n + 1) = pi n/(n + 2)</span>. <span class="chem">R_n</span> about the <i>y</i>-axis is the cylinder (volume <span class="chem">pi</span>) minus this: <span class="chem">B(n) = pi - pi n/(n + 2) = 2pi/(n + 2)</span>.</p><p>(d) The graphs suggest <span class="chem">B(n) &gt; A(n)</span> for all <span class="chem">n &gt; 0</span>. Proof: <span class="chem">2/(n + 2) &gt; 1/(2n + 1) <=> 4n + 2 &gt; n + 2 <=> 3n &gt; 0</span>, true for <span class="chem">n &gt; 0</span> (both denominators are positive).</p><p>(e) <span class="chem">B(n)/A(n) = 2(2n + 1)/(n + 2) -> 4</span>.</p><p>(f) <span class="chem">D(n) = 2pi/(n + 2) - pi/(2n + 1)</span>; <span class="chem">D'(n) = -2pi/(n + 2)^2 + 2pi/(2n + 1)^2 = 0 => n + 2 = 2n + 1 => n = 1</span>. Greatest value <span class="chem">D(1) = 2pi/3 - pi/3 = pi/3</span>.</p>
      answer: "<p>(a) 對 <span class=\"chem\">n = 1</span>，繞 <i>x</i> 軸所得的立體是半徑為 1、高為 1 的圓錐體：<span class=\"chem\">A(1) = pi/3</span>。繞 <i>y</i> 軸所得的是半徑為 1、高為 1 並挖去一個圓錐體的圓柱體：<span class=\"chem\">B(1) = pi - pi/3 = 2pi/3</span>。</p><p>(b) <span class=\"chem\">A(n) = pi int_0^1 x^{2n} dx = pi/(2n + 1)</span>。</p><p>(c) 由 <span class=\"chem\">x = y^{1/n}</span>，靠近 <i>y</i> 軸的區域給出 <span class=\"chem\">pi int_0^1 y^{2/n} dy = pi/(2/n + 1) = pi n/(n + 2)</span>。<span class=\"chem\">R_n</span> 繞 <i>y</i> 軸所得的立體是圓柱體（體積 <span class=\"chem\">pi</span>）減去此立體：<span class=\"chem\">B(n) = pi - pi n/(n + 2) = 2pi/(n + 2)</span>。</p><p>(d) 圖像顯示對所有 <span class=\"chem\">n &gt; 0</span> 有 <span class=\"chem\">B(n) &gt; A(n)</span>。證明：<span class=\"chem\">2/(n + 2) &gt; 1/(2n + 1) <=> 4n + 2 &gt; n + 2 <=> 3n &gt; 0</span>，對 <span class=\"chem\">n &gt; 0</span> 成立（兩個分母均為正數）。</p><p>(e) <span class=\"chem\">B(n)/A(n) = 2(2n + 1)/(n + 2) -> 4</span>。</p><p>(f) <span class=\"chem\">D(n) = 2pi/(n + 2) - pi/(2n + 1)</span>；<span class=\"chem\">D'(n) = -2pi/(n + 2)^2 + 2pi/(2n + 1)^2 = 0 => n + 2 = 2n + 1 => n = 1</span>。最大值為 <span class=\"chem\">D(1) = 2pi/3 - pi/3 = pi/3</span>。</p>",
      markscheme: [
        // EN: A1: identifies the cone (about <i>x</i>) and the cylinder with a conical hole (about <i>y</i>).
        "A1: 辨識出圓錐體（繞 <i>x</i> 軸）及挖去圓錐形空洞的圓柱體（繞 <i>y</i> 軸）。",
        // EN: A1: <span class="chem">A(1) = pi/3</span>.
        "A1: <span class=\"chem\">A(1) = pi/3</span>。",
        // EN: A1: <span class="chem">B(1) = 2pi/3</span>.
        "A1: <span class=\"chem\">B(1) = 2pi/3</span>。",
        // EN: M1: <span class="chem">A(n) = pi int_0^1 (x^n)^2 dx</span>.
        "M1: <span class=\"chem\">A(n) = pi int_0^1 (x^n)^2 dx</span>。",
        // EN: A1: <span class="chem">pi [x^{2n+1}/(2n + 1)]_0^1</span>, leading to <span class="chem">pi/(2n + 1)</span> AG (no mark for the given line).
        "A1: <span class=\"chem\">pi [x^{2n+1}/(2n + 1)]_0^1</span>，從而得出 <span class=\"chem\">pi/(2n + 1)</span> AG（寫出給定結果本身不得分）。",
        // EN: M1: rearranges to <span class="chem">x = y^{1/n}</span>.
        "M1: 整理成 <span class=\"chem\">x = y^{1/n}</span>。",
        // EN: M1: <span class="chem">pi int_0^1 x^2 dy = pi int_0^1 y^{2/n} dy</span>.
        "M1: <span class=\"chem\">pi int_0^1 x^2 dy = pi int_0^1 y^{2/n} dy</span>。",
        // EN: A1: <span class="chem">pi n/(n + 2)</span>.
        "A1: <span class=\"chem\">pi n/(n + 2)</span>。",
        // EN: M1: <span class="chem">B(n)</span> = cylinder <span class="chem">pi(1)^2(1)</span> minus that volume.
        "M1: <span class=\"chem\">B(n)</span> = 圓柱體 <span class=\"chem\">pi(1)^2(1)</span> 減去該體積。",
        // EN: A1: <span class="chem">pi - pi n/(n + 2) = pi(n + 2 - n)/(n + 2)</span>, leading to <span class="chem">2pi/(n + 2)</span> AG (no mark for the given line).
        "A1: <span class=\"chem\">pi - pi n/(n + 2) = pi(n + 2 - n)/(n + 2)</span>，從而得出 <span class=\"chem\">2pi/(n + 2)</span> AG（寫出給定結果本身不得分）。",
        // EN: A1: sketch with <span class="chem">B</span> above <span class="chem">A</span>, and conjecture <span class="chem">B(n) &gt; A(n)</span>.
        "A1: 略圖中 <span class=\"chem\">B</span> 位於 <span class=\"chem\">A</span> 之上，並猜想 <span class=\"chem\">B(n) &gt; A(n)</span>。",
        // EN: M1: sets up the inequality <span class="chem">2/(n + 2) &gt; 1/(2n + 1)</span>.
        "M1: 列出不等式 <span class=\"chem\">2/(n + 2) &gt; 1/(2n + 1)</span>。",
        // EN: A1: cross-multiplies (positive denominators) to <span class="chem">3n &gt; 0</span>.
        "A1: 交叉相乘（分母為正）得 <span class=\"chem\">3n &gt; 0</span>。",
        // EN: R1: true for every <span class="chem">n &gt; 0</span>, so the conjecture holds.
        "R1: 對每個 <span class=\"chem\">n &gt; 0</span> 都成立，所以猜想正確。",
        // EN: M1: <span class="chem">B(n)/A(n) = 2(2n + 1)/(n + 2)</span>.
        "M1: <span class=\"chem\">B(n)/A(n) = 2(2n + 1)/(n + 2)</span>。",
        // EN: A1: limit <span class="chem">4</span>.
        "A1: 極限為 <span class=\"chem\">4</span>。",
        // EN: M1: differentiates <span class="chem">B(n) - A(n)</span> and sets it equal to zero (or uses a GDC graph).
        "M1: 對 <span class=\"chem\">B(n) - A(n)</span> 求導並令其等於零（或使用 GDC 圖像）。",
        // EN: A1: <span class="chem">n = 1</span>.
        "A1: <span class=\"chem\">n = 1</span>。",
        // EN: A1: greatest value <span class="chem">pi/3</span>.
        "A1: 最大值為 <span class=\"chem\">pi/3</span>。",
      ],
    },

    // ── t5-3-q058 · short · challenge · AHL · AHL 5.12, 5.13 · 17 marks
    "t5-3-q058": {
      // EN: <p>This question investigates <span class="chem">f(x) = (1 + k/x)^x</span> for large <i>x</i>, where <i>k</i> is a positive constant.</p><p>(a) Let <span class="chem">k = 2</span>. Use your GDC to find <span class="chem">f(10)</span>, <span class="chem">f(100)</span> and <span class="chem">f(1000)</span>, giving each to 5 significant figures. <strong>[2 marks]</strong></p><p>(b) Hence conjecture whether <span class="chem">f(x)</span> converges as <span class="chem">x -> infty</span> and, if so, suggest its exact limit. <strong>[1 mark]</strong></p><p>(c) Show that <span class="chem">ln f(x) = ln(1 + k/x) / (1/x)</span>, and state the form of this quotient as <span class="chem">x -> infty</span>. <strong>[2 marks]</strong></p><p>(d) Use L’Hôpital’s rule to show that <span class="chem">lim_{x->infty} ln f(x) = k</span>, and hence write down <span class="chem">lim_{x->infty} f(x)</span>. <strong>[5 marks]</strong></p><p>(e) By writing <span class="chem">(x + 3)/(x - 1) = 1 + 4/(x - 1)</span>, find the exact value of <span class="chem">lim_{x->infty} ((x + 3)/(x - 1))^x</span>. <strong>[4 marks]</strong></p><p>(f) A deposit of 1000 euros earns interest at a nominal annual rate of 6%, compounded <i>m</i> times per year. After 10 years its value is <span class="chem">1000(1 + 0.06/m)^{10m}</span>. Find, to the nearest cent, the limit of this value as <span class="chem">m -> infty</span>. <strong>[3 marks]</strong></p>
      stem: "<p>本題探究當 <i>x</i> 很大時的 <span class=\"chem\">f(x) = (1 + k/x)^x</span>，其中 <i>k</i> 為正常數。</p><p>(a) 設 <span class=\"chem\">k = 2</span>。利用你的 GDC 求 (find) <span class=\"chem\">f(10)</span>、<span class=\"chem\">f(100)</span> 及 <span class=\"chem\">f(1000)</span>，各答案準確至 5 位有效數字。<strong>[2 分]</strong></p><p>(b) 由此猜想 (Hence conjecture) 當 <span class=\"chem\">x -> infty</span> 時 <span class=\"chem\">f(x)</span> 是否收斂；若收斂，提出 (suggest) 其準確的極限。<strong>[1 分]</strong></p><p>(c) 證明 (Show that) <span class=\"chem\">ln f(x) = ln(1 + k/x) / (1/x)</span>，並寫出 (state) 當 <span class=\"chem\">x -> infty</span> 時此商的形式。<strong>[2 分]</strong></p><p>(d) 利用洛必達法則證明 (show that) <span class=\"chem\">lim_{x->infty} ln f(x) = k</span>，並由此寫出 (hence write down) <span class=\"chem\">lim_{x->infty} f(x)</span>。<strong>[5 分]</strong></p><p>(e) 寫成 <span class=\"chem\">(x + 3)/(x - 1) = 1 + 4/(x - 1)</span>，求 (find) <span class=\"chem\">lim_{x->infty} ((x + 3)/(x - 1))^x</span> 的準確值。<strong>[4 分]</strong></p><p>(f) 一筆 1000 歐元的存款以名義年利率 6% 計息，每年複利 <i>m</i> 次。10 年後其價值為 <span class=\"chem\">1000(1 + 0.06/m)^{10m}</span>。求 (Find) 當 <span class=\"chem\">m -> infty</span> 時此價值的極限，答案準確至最接近的仙。<strong>[3 分]</strong></p>",
      hints: [
        // EN: Decode: the variable is in both the base and the power, so take logarithms. That turns a power into a quotient of the form <span class="chem">0/0</span>, which is a job for L’Hôpital’s rule.
        "解碼：變量同時出現在底數和指數中，所以要取對數。這會把冪化為 <span class=\"chem\">0/0</span> 形式的商，正好可用洛必達法則處理。",
        // EN: In (c), <span class="chem">ln((1 + k/x)^x) = x ln(1 + k/x)</span>, and multiplying by <i>x</i> is the same as dividing by <span class="chem">1/x</span>.
        "在 (c) 部，<span class=\"chem\">ln((1 + k/x)^x) = x ln(1 + k/x)</span>，而乘以 <i>x</i> 等同於除以 <span class=\"chem\">1/x</span>。",
        // EN: In (d), <span class="chem">d/dx ln(1 + k/x) = (-k/x^2)/(1 + k/x)</span> and <span class="chem">d/dx (1/x) = -1/x^2</span>. The <span class="chem">-1/x^2</span> factors cancel.
        "在 (d) 部，<span class=\"chem\">d/dx ln(1 + k/x) = (-k/x^2)/(1 + k/x)</span> 及 <span class=\"chem\">d/dx (1/x) = -1/x^2</span>。兩個 <span class=\"chem\">-1/x^2</span> 因子互相抵消。",
        // EN: In (e), the exponent is <span class="chem">x = t + 1</span>, not <i>t</i>. In (f), the 6% rate and 10 years combine to <span class="chem">k = 0.6</span>.
        "在 (e) 部，指數是 <span class=\"chem\">x = t + 1</span>，而不是 <i>t</i>。在 (f) 部，6% 的利率與 10 年合併得 <span class=\"chem\">k = 0.6</span>。",
      ],
      // EN: <p>Decode: a variable power is handled by taking logarithms, which produces an indeterminate quotient for L’Hôpital’s rule. (a) 6.1917, 7.2446, 7.3743. (d) <span class="chem">lim f(x) = e^k</span>. (e) <span class="chem">e^4</span>. (f) 1822.12 euros.</p>
      solution: "<p>解碼：處理變量指數的方法是取對數，這會產生一個不定式的商，可用洛必達法則。(a) 6.1917、7.2446、7.3743。(d) <span class=\"chem\">lim f(x) = e^k</span>。(e) <span class=\"chem\">e^4</span>。(f) 1822.12 歐元。</p>",
      // EN: <p>(a) <span class="chem">f(10) = 6.1917</span>, <span class="chem">f(100) = 7.2446</span>, <span class="chem">f(1000) = 7.3743</span>.</p><p>(b) The values increase and appear to converge, to about 7.39, which suggests the limit <span class="chem">e^2</span>.</p><p>(c) <span class="chem">ln f(x) = x ln(1 + k/x) = ln(1 + k/x)/(1/x)</span>. As <span class="chem">x -> infty</span>, top and bottom both tend to 0: the form <span class="chem">0/0</span>.</p><p>(d) Differentiating top and bottom: <span class="chem">((-k/x^2)/(1 + k/x)) / (-1/x^2) = k/(1 + k/x) -> k</span>. So <span class="chem">ln f(x) -> k</span>, and since <span class="chem">e^x</span> is continuous, <span class="chem">f(x) -> e^k</span>.</p><p>(e) Let <span class="chem">t = x - 1</span>: <span class="chem">((x + 3)/(x - 1))^x = (1 + 4/t)^t × (1 + 4/t) -> e^4 × 1 = e^4</span>.</p><p>(f) <span class="chem">1000(1 + 0.06/m)^{10m} = 1000((1 + 0.6/(10m))^{10m}) -> 1000 e^{0.6} = 1822.12</span> euros.</p>
      answer: "<p>(a) <span class=\"chem\">f(10) = 6.1917</span>，<span class=\"chem\">f(100) = 7.2446</span>，<span class=\"chem\">f(1000) = 7.3743</span>。</p><p>(b) 這些值遞增，並似乎收斂至約 7.39，這顯示極限為 <span class=\"chem\">e^2</span>。</p><p>(c) <span class=\"chem\">ln f(x) = x ln(1 + k/x) = ln(1 + k/x)/(1/x)</span>。當 <span class=\"chem\">x -> infty</span> 時，分子和分母都趨向 0：形式為 <span class=\"chem\">0/0</span>。</p><p>(d) 分子和分母分別求導：<span class=\"chem\">((-k/x^2)/(1 + k/x)) / (-1/x^2) = k/(1 + k/x) -> k</span>。故 <span class=\"chem\">ln f(x) -> k</span>；由於 <span class=\"chem\">e^x</span> 連續，<span class=\"chem\">f(x) -> e^k</span>。</p><p>(e) 設 <span class=\"chem\">t = x - 1</span>：<span class=\"chem\">((x + 3)/(x - 1))^x = (1 + 4/t)^t × (1 + 4/t) -> e^4 × 1 = e^4</span>。</p><p>(f) <span class=\"chem\">1000(1 + 0.06/m)^{10m} = 1000((1 + 0.6/(10m))^{10m}) -> 1000 e^{0.6} = 1822.12</span> 歐元。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f(10) = 6.1917</span>.
        "A1: <span class=\"chem\">f(10) = 6.1917</span>。",
        // EN: A1: <span class="chem">f(100) = 7.2446</span> and <span class="chem">f(1000) = 7.3743</span>.
        "A1: <span class=\"chem\">f(100) = 7.2446</span> 及 <span class=\"chem\">f(1000) = 7.3743</span>。",
        // EN: A1: conjectures convergence to <span class="chem">e^2 ≈ 7.389</span>.
        "A1: 猜想收斂至 <span class=\"chem\">e^2 ≈ 7.389</span>。",
        // EN: A1: <span class="chem">ln f(x) = x ln(1 + k/x)</span> rewritten as the quotient.
        "A1: 把 <span class=\"chem\">ln f(x) = x ln(1 + k/x)</span> 改寫成商。",
        // EN: A1: form <span class="chem">0/0</span> stated.
        "A1: 寫出形式為 <span class=\"chem\">0/0</span>。",
        // EN: M1: differentiates the numerator: <span class="chem">(-k/x^2)/(1 + k/x)</span>.
        "M1: 對分子求導：<span class=\"chem\">(-k/x^2)/(1 + k/x)</span>。",
        // EN: A1: differentiates the denominator: <span class="chem">-1/x^2</span>.
        "A1: 對分母求導：<span class=\"chem\">-1/x^2</span>。",
        // EN: A1: simplifies to <span class="chem">k/(1 + k/x)</span>.
        "A1: 化簡為 <span class=\"chem\">k/(1 + k/x)</span>。",
        // EN: A1: limit <span class="chem">k</span>.
        "A1: 極限為 <span class=\"chem\">k</span>。",
        // EN: A1: <span class="chem">lim f(x) = e^k</span>.
        "A1: <span class=\"chem\">lim f(x) = e^k</span>。",
        // EN: M1: substitutes <span class="chem">t = x - 1</span> (so <span class="chem">t -> infty</span>).
        "M1: 代換 <span class=\"chem\">t = x - 1</span>（故 <span class=\"chem\">t -> infty</span>）。",
        // EN: A1: splits into <span class="chem">(1 + 4/t)^t (1 + 4/t)</span>.
        "A1: 拆分為 <span class=\"chem\">(1 + 4/t)^t (1 + 4/t)</span>。",
        // EN: M1: uses the result of (d) with <span class="chem">k = 4</span>, and <span class="chem">(1 + 4/t) -> 1</span>.
        "M1: 以 <span class=\"chem\">k = 4</span> 使用 (d) 部的結果，並使用 <span class=\"chem\">(1 + 4/t) -> 1</span>。",
        // EN: A1: <span class="chem">e^4</span>.
        "A1: <span class=\"chem\">e^4</span>。",
        // EN: M1: writes the value as <span class="chem">1000(1 + 0.6/n)^n</span> with <span class="chem">n = 10m</span> (or equivalent).
        "M1: 把價值寫成 <span class=\"chem\">1000(1 + 0.6/n)^n</span>，其中 <span class=\"chem\">n = 10m</span>（或等價式）。",
        // EN: A1: limit <span class="chem">1000 e^{0.6}</span>.
        "A1: 極限為 <span class=\"chem\">1000 e^{0.6}</span>。",
        // EN: A1: <span class="chem">1822.12</span> euros.
        "A1: <span class=\"chem\">1822.12</span> 歐元。",
      ],
    },

    // ── t5-3-q059 · short · challenge · AHL · AHL 5.12, AHL 1.15 · 19 marks
    "t5-3-q059": {
      // EN: <p>This question investigates higher derivatives of products of a polynomial and <span class="chem">e^x</span>. Write <span class="chem">f^{(n)}(x)</span> for the <i>n</i>th derivative of <i>f</i>.</p><p>(a) Let <span class="chem">f(x) = x e^x</span>. Find <span class="chem">f'(x)</span>, <span class="chem">f''(x)</span> and <span class="chem">f'''(x)</span>. <strong>[3 marks]</strong></p><p>(b) Conjecture an expression for <span class="chem">f^{(n)}(x)</span>. <strong>[1 mark]</strong></p><p>(c) Use mathematical induction to prove your conjecture for all <span class="chem">n \in \mathbb{Z}^+</span>. <strong>[5 marks]</strong></p><p>(d) Let <span class="chem">g(x) = x^2 e^x</span>. Show that if <span class="chem">g^{(n)}(x) = (x^2 + 2nx + n(n - 1)) e^x</span> then <span class="chem">g^{(n+1)}(x) = (x^2 + 2(n + 1)x + (n + 1)n) e^x</span>, and hence state, with a reason, what this proves. <strong>[4 marks]</strong></p><p>(e) Find the smallest value of <i>n</i> for which <span class="chem">g^{(n)}(0) &gt; 1000</span>. <strong>[3 marks]</strong></p><p>(f) Find the exact <i>x</i>-coordinates of the points where the graph of <span class="chem">y = g^{(10)}(x)</span> meets the <i>x</i>-axis. <strong>[3 marks]</strong></p>
      stem: "<p>本題探究多項式與 <span class=\"chem\">e^x</span> 之積的高階導數。以 <span class=\"chem\">f^{(n)}(x)</span> 表示 <i>f</i> 的 <i>n</i> 階導數。</p><p>(a) 設 <span class=\"chem\">f(x) = x e^x</span>。求 (Find) <span class=\"chem\">f'(x)</span>、<span class=\"chem\">f''(x)</span> 及 <span class=\"chem\">f'''(x)</span>。<strong>[3 分]</strong></p><p>(b) 猜想 (Conjecture) <span class=\"chem\">f^{(n)}(x)</span> 的表達式。<strong>[1 分]</strong></p><p>(c) 利用數學歸納法，證明 (prove) 你的猜想對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立。<strong>[5 分]</strong></p><p>(d) 設 <span class=\"chem\">g(x) = x^2 e^x</span>。證明 (Show that) 若 <span class=\"chem\">g^{(n)}(x) = (x^2 + 2nx + n(n - 1)) e^x</span>，則 <span class=\"chem\">g^{(n+1)}(x) = (x^2 + 2(n + 1)x + (n + 1)n) e^x</span>，並由此寫出 (hence state) 這證明了甚麼，附上理由。<strong>[4 分]</strong></p><p>(e) 求 (Find) 使 <span class=\"chem\">g^{(n)}(0) &gt; 1000</span> 的最小 <i>n</i> 值。<strong>[3 分]</strong></p><p>(f) 求 (Find) <span class=\"chem\">y = g^{(10)}(x)</span> 的圖像與 <i>x</i> 軸相交各點的準確 <i>x</i> 坐標。<strong>[3 分]</strong></p>",
      hints: [
        // EN: Decode: compute a few small cases, spot the pattern, then prove it by induction (AHL 1.15). Each new derivative uses the product rule once.
        "解碼：先計算幾個小的情況，找出規律，再用歸納法證明（AHL 1.15）。每求一次導數都要用一次積法則。",
        // EN: In (a), keep a factor <span class="chem">e^x</span> outside each time: <span class="chem">d/dx[(x + a)e^x] = (x + a + 1)e^x</span>.
        "在 (a) 部，每次都把因子 <span class=\"chem\">e^x</span> 保留在外：<span class=\"chem\">d/dx[(x + a)e^x] = (x + a + 1)e^x</span>。",
        // EN: In (d), differentiate the bracket and the exponential separately, then collect the terms in <span class="chem">x^2</span>, <i>x</i> and the constant. The step only proves the formula if you also check a starting value.
        "在 (d) 部，分別對括號和指數函數求導，然後合併 <span class=\"chem\">x^2</span> 項、<i>x</i> 項及常數項。只有在同時驗證了起始值的情況下，這一步才能證明該公式。",
        // EN: In (e), put <span class="chem">x = 0</span>: <span class="chem">g^{(n)}(0) = n(n - 1)</span>. In (f), <span class="chem">e^x</span> is never zero.
        "在 (e) 部，代入 <span class=\"chem\">x = 0</span>：<span class=\"chem\">g^{(n)}(0) = n(n - 1)</span>。在 (f) 部，<span class=\"chem\">e^x</span> 永不為零。",
      ],
      // EN: <p>Decode: higher derivatives with a pattern call for small cases, a conjecture and an induction proof. (b) <span class="chem">f^{(n)}(x) = (x + n)e^x</span>. (d) The inductive step, with <span class="chem">n = 1</span> checked, proves <span class="chem">g^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span>. (e) <span class="chem">n = 33</span>. (f) <span class="chem">x = -10 +- sqrt(10)</span>.</p>
      solution: "<p>解碼：有規律的高階導數需要先算小的情況、提出猜想，再以歸納法證明。(b) <span class=\"chem\">f^{(n)}(x) = (x + n)e^x</span>。(d) 歸納步驟加上驗證 <span class=\"chem\">n = 1</span>，證明了 <span class=\"chem\">g^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span>。(e) <span class=\"chem\">n = 33</span>。(f) <span class=\"chem\">x = -10 +- sqrt(10)</span>。</p>",
      // EN: <p>(a) <span class="chem">f'(x) = (x + 1)e^x</span>, <span class="chem">f''(x) = (x + 2)e^x</span>, <span class="chem">f'''(x) = (x + 3)e^x</span>.</p><p>(b) <span class="chem">f^{(n)}(x) = (x + n)e^x</span>.</p><p>(c) <span class="chem">n = 1</span>: <span class="chem">f'(x) = (x + 1)e^x</span>, true. Assume <span class="chem">f^{(k)}(x) = (x + k)e^x</span>. Then <span class="chem">f^{(k+1)}(x) = e^x + (x + k)e^x = (x + k + 1)e^x</span>, which is the statement for <span class="chem">n = k + 1</span>. It is true for <span class="chem">n = 1</span>, and if true for <span class="chem">n = k</span> it is true for <span class="chem">n = k + 1</span>, so it is true for all <span class="chem">n \in \mathbb{Z}^+</span>.</p><p>(d) Differentiating, <span class="chem">g^{(n+1)}(x) = (2x + 2n)e^x + (x^2 + 2nx + n^2 - n)e^x = (x^2 + (2n + 2)x + n^2 + n)e^x = (x^2 + 2(n + 1)x + (n + 1)n)e^x</span>. Also <span class="chem">g'(x) = (x^2 + 2x)e^x</span> matches the formula at <span class="chem">n = 1</span>, so by induction the formula holds for every <span class="chem">n \in \mathbb{Z}^+</span>.</p><p>(e) <span class="chem">g^{(n)}(0) = n(n - 1)</span>. <span class="chem">32 × 31 = 992</span> and <span class="chem">33 × 32 = 1056</span>, so <span class="chem">n = 33</span>.</p><p>(f) <span class="chem">g^{(10)}(x) = (x^2 + 20x + 90)e^x = 0 => x^2 + 20x + 90 = 0 => x = -10 +- sqrt(10)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = (x + 1)e^x</span>，<span class=\"chem\">f''(x) = (x + 2)e^x</span>，<span class=\"chem\">f'''(x) = (x + 3)e^x</span>。</p><p>(b) <span class=\"chem\">f^{(n)}(x) = (x + n)e^x</span>。</p><p>(c) <span class=\"chem\">n = 1</span>：<span class=\"chem\">f'(x) = (x + 1)e^x</span>，成立。假設 <span class=\"chem\">f^{(k)}(x) = (x + k)e^x</span>。則 <span class=\"chem\">f^{(k+1)}(x) = e^x + (x + k)e^x = (x + k + 1)e^x</span>，這正是 <span class=\"chem\">n = k + 1</span> 時的命題。命題在 <span class=\"chem\">n = 1</span> 時成立，且若在 <span class=\"chem\">n = k</span> 時成立，則在 <span class=\"chem\">n = k + 1</span> 時亦成立，所以對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立。</p><p>(d) 求導得 <span class=\"chem\">g^{(n+1)}(x) = (2x + 2n)e^x + (x^2 + 2nx + n^2 - n)e^x = (x^2 + (2n + 2)x + n^2 + n)e^x = (x^2 + 2(n + 1)x + (n + 1)n)e^x</span>。此外 <span class=\"chem\">g'(x) = (x^2 + 2x)e^x</span> 與公式在 <span class=\"chem\">n = 1</span> 時相符，所以由歸納法，公式對每個 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立。</p><p>(e) <span class=\"chem\">g^{(n)}(0) = n(n - 1)</span>。<span class=\"chem\">32 × 31 = 992</span> 及 <span class=\"chem\">33 × 32 = 1056</span>，故 <span class=\"chem\">n = 33</span>。</p><p>(f) <span class=\"chem\">g^{(10)}(x) = (x^2 + 20x + 90)e^x = 0 => x^2 + 20x + 90 = 0 => x = -10 +- sqrt(10)</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = (x + 1)e^x</span>.
        "A1: <span class=\"chem\">f'(x) = (x + 1)e^x</span>。",
        // EN: A1: <span class="chem">f''(x) = (x + 2)e^x</span>.
        "A1: <span class=\"chem\">f''(x) = (x + 2)e^x</span>。",
        // EN: A1: <span class="chem">f'''(x) = (x + 3)e^x</span>.
        "A1: <span class=\"chem\">f'''(x) = (x + 3)e^x</span>。",
        // EN: A1: conjecture <span class="chem">f^{(n)}(x) = (x + n)e^x</span>.
        "A1: 猜想 <span class=\"chem\">f^{(n)}(x) = (x + n)e^x</span>。",
        // EN: A1: checks <span class="chem">n = 1</span>.
        "A1: 驗證 <span class=\"chem\">n = 1</span>。",
        // EN: M1: assumes the result for <span class="chem">n = k</span>.
        "M1: 假設結果在 <span class=\"chem\">n = k</span> 時成立。",
        // EN: M1: differentiates <span class="chem">(x + k)e^x</span> with the product rule.
        "M1: 以積法則對 <span class=\"chem\">(x + k)e^x</span> 求導。",
        // EN: A1: obtains <span class="chem">(x + k + 1)e^x</span>.
        "A1: 得出 <span class=\"chem\">(x + k + 1)e^x</span>。",
        // EN: R1: complete induction conclusion (true for <span class="chem">n = 1</span>; true for <i>k</i> implies true for <span class="chem">k + 1</span>; so true for all <span class="chem">n \in \mathbb{Z}^+</span>).
        "R1: 完整的歸納法結論（在 <span class=\"chem\">n = 1</span> 時成立；若在 <i>k</i> 時成立則在 <span class=\"chem\">k + 1</span> 時成立；故對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立）。",
        // EN: M1: differentiates the product <span class="chem">(x^2 + 2nx + n(n - 1))e^x</span>.
        "M1: 對乘積 <span class=\"chem\">(x^2 + 2nx + n(n - 1))e^x</span> 求導。",
        // EN: A1: collects terms into <span class="chem">x^2 + 2(n + 1)x + (n + 1)n</span>.
        "A1: 把各項合併為 <span class=\"chem\">x^2 + 2(n + 1)x + (n + 1)n</span>。",
        // EN: A1: checks the formula at <span class="chem">n = 1</span>: <span class="chem">g'(x) = (x^2 + 2x)e^x</span>.
        "A1: 在 <span class=\"chem\">n = 1</span> 時驗證公式：<span class=\"chem\">g'(x) = (x^2 + 2x)e^x</span>。",
        // EN: R1: concludes by induction that the formula holds for all <span class="chem">n \in \mathbb{Z}^+</span>.
        "R1: 以歸納法得出結論：公式對所有 <span class=\"chem\">n \\in \\mathbb{Z}^+</span> 成立。",
        // EN: M1: <span class="chem">g^{(n)}(0) = n(n - 1)</span>.
        "M1: <span class=\"chem\">g^{(n)}(0) = n(n - 1)</span>。",
        // EN: M1: solves <span class="chem">n(n - 1) &gt; 1000</span> (or tests consecutive values).
        "M1: 解 <span class=\"chem\">n(n - 1) &gt; 1000</span>（或測試連續的整數值）。",
        // EN: A1: <span class="chem">n = 33</span>.
        "A1: <span class=\"chem\">n = 33</span>。",
        // EN: M1: <span class="chem">x^2 + 20x + 90 = 0</span> (since <span class="chem">e^x != 0</span>).
        "M1: <span class=\"chem\">x^2 + 20x + 90 = 0</span>（因為 <span class=\"chem\">e^x != 0</span>）。",
        // EN: A1: applies the quadratic formula.
        "A1: 應用二次公式。",
        // EN: A1: <span class="chem">x = -10 +- sqrt(10)</span>.
        "A1: <span class=\"chem\">x = -10 +- sqrt(10)</span>。",
      ],
    },

  }
});
