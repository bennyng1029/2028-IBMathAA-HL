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
      // EN: <p>Using the substitution <span class="chem">u = 1 + x^2</span> (or otherwise), find the exact value of <span class="chem">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span>. Give your answer to 3 s.f. or as an exact expression using <span class="mono">sqrt(5)</span>.</p>
      stem: "<p>使用代換法 <span class=\"chem\">u = 1 + x^2</span>（或用其他方法），求 (Find) <span class=\"chem\">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span> 的準確值。答案取至 3 位有效數字 (3 s.f.)，或以含 <span class=\"mono\">sqrt(5)</span> 的準確式表示。</p>",
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
      // EN: <p>Find the exact value of <span class="chem">int_1^e x^2 ln(x) dx</span>. (You can type an exact expression in terms of <span class="mono">e</span> such as <span class="mono">(2*e^3+1)/9</span>, or a 3 s.f. decimal.)</p>
      stem: "<p>求 (Find) <span class=\"chem\">int_1^e x^2 ln(x) dx</span> 的準確值。（你可輸入以 <span class=\"mono\">e</span> 表示的準確式，例如 <span class=\"mono\">(2*e^3+1)/9</span>，或取至 3 位有效數字的小數。）</p>",
      hints: [
        // EN: By LIATE, choose <span class="chem">u = ln x</span> (<span class="chem">du/dx = 1/x</span>) and <span class="chem">dv/dx = x^2</span> (<span class="chem">v = x^3 / 3</span>).
        "根據 LIATE，選擇 <span class=\"chem\">u = ln x</span>（<span class=\"chem\">du/dx = 1/x</span>）及 <span class=\"chem\">dv/dx = x^2</span>（<span class=\"chem\">v = x^3 / 3</span>）。",
        // EN: Apply integration by parts: <span class="chem">[(x^3 / 3) ln x]_1^e - int_1^e (x^2 / 3) dx = [x^3 / 3 ln x - x^3 / 9]_1^e</span>.
        "應用分部積分法：<span class=\"chem\">[(x^3 / 3) ln x]_1^e - int_1^e (x^2 / 3) dx = [x^3 / 3 ln x - x^3 / 9]_1^e</span>。",
      ],
      // EN: <p>Let <span class="chem">u = ln x</span> and <span class="chem">dv/dx = x^2</span>, so <span class="chem">du/dx = 1/x</span> and <span class="chem">v = x^3/3</span>. Then <span class="chem">int_1^e x^2 ln x dx = [(x^3/3)ln x]_1^e - int_1^e (x^2/3) dx = (e^3/3 - 0) - [x^3/9]_1^e = e^3/3 - (e^3 - 1)/9 = (2e^3 + 1)/9 ≈ 4.57</span>.</p>
      solution: "<p>設 <span class=\"chem\">u = ln x</span> 及 <span class=\"chem\">dv/dx = x^2</span>，故 <span class=\"chem\">du/dx = 1/x</span> 及 <span class=\"chem\">v = x^3/3</span>。因此 <span class=\"chem\">int_1^e x^2 ln x dx = [(x^3/3)ln x]_1^e - int_1^e (x^2/3) dx = (e^3/3 - 0) - [x^3/9]_1^e = e^3/3 - (e^3 - 1)/9 = (2e^3 + 1)/9 ≈ 4.57</span>。</p>",
    },

    // ── t5-3-q010 · mcq · exam · AHL · AHL 5.15 · 4 marks
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
      // EN: <p>Given that <span class="chem">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span>, evaluate the definite integral <span class="chem">int_3^4 6 / (x^2 - x - 2) dx</span> and give your answer to 3 s.f. (or as an exact expression such as <span class="mono">2*ln(8/5)</span>).</p>
      stem: "<p>已知 <span class=\"chem\">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span>，計算 (evaluate) 定積分 <span class=\"chem\">int_3^4 6 / (x^2 - x - 2) dx</span>，答案取至 3 位有效數字 (3 s.f.)（或以準確式如 <span class=\"mono\">2*ln(8/5)</span> 表示）。</p>",
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

    // ── t5-3-q013 · mcq · exam · AHL · AHL 5.17 · 4 marks
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
        // EN (option B): You forgot to multiply by the outer factor of <span class="chem">pi</span> in <span class="chem">V = pi int y^2 dx</span>, or integrated <span class="chem">cos x</span> instead of <span class="chem">cos^2 x</span>.
        "1": "你忘記乘以 <span class=\"chem\">V = pi int y^2 dx</span> 外層的因子 <span class=\"chem\">pi</span>，或誤對 <span class=\"chem\">cos x</span> 而非 <span class=\"chem\">cos^2 x</span> 積分。",
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
        // EN: A1: isolates <span class="chem">dy/dx</span> clearly to reach the given answer <span class=\"chem\">-(2x + y)/(x + 2y)</span> (AG).
        "A1: 清晰主項變換求出 <span class=\"chem\">dy/dx</span>，得出題目給出的答案 <span class=\"chem\">-(2x + y)/(x + 2y)</span> (AG)。",
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
      // EN: <p>By integrating by parts twice, find the exact value of the cyclic integral <span class="chem">I = int_0^{pi/2} e^{2x} sin(x) dx</span>. (You can type an exact expression in terms of <span class="mono">e</span> and <span class="mono">pi</span> such as <span class="mono">(2*e^pi+1)/5</span>, or a 3 s.f. decimal.)</p>
      stem: "<p>透過兩次分部積分法，求 (Find) 循環積分 <span class=\"chem\">I = int_0^{pi/2} e^{2x} sin(x) dx</span> 的準確值。（你可輸入以 <span class=\"mono\">e</span> 及 <span class=\"mono\">pi</span> 表示的準確式，例如 <span class=\"mono\">(2*e^pi+1)/5</span>，或取至 3 位有效數字的小數。）</p>",
      hints: [
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
        // EN: M1 A1: applies integration by parts to find <span class="chem">I_1 = (e^2 + 1)/4</span>.
        "M1 A1: 應用分部積分法求得 <span class=\"chem\">I_1 = (e^2 + 1)/4</span>。",
        // EN: M1: chooses <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> in <span class="chem">I_n</span>.
        "M1: 在 <span class=\"chem\">I_n</span> 中選擇 <span class=\"chem\">u = (ln x)^n</span> 及 <span class=\"chem\">dv/dx = x</span>。",
        // EN: A1: shows boundary term <span class="chem">[(x^2/2)(ln x)^n]_1^e = e^2/2</span> and simplifies integral to <span class="chem">-(n/2)I_{n-1}</span> (AG).
        "A1: 展示邊界項 <span class=\"chem\">[(x^2/2)(ln x)^n]_1^e = e^2/2</span> 並將積分簡化為 <span class=\"chem\">-(n/2)I_{n-1}</span> (AG)。",
        // EN: M1: identifies volume <span class="chem">V = pi int_1^e y^2 dx = pi I_2</span>.
        "M1: 辨識體積為 <span class=\"chem\">V = pi int_1^e y^2 dx = pi I_2</span>。",
        // EN: A1: substitutes <span class="chem">n = 2</span> to obtain <span class="chem">V = pi(e^2 - 1)/4</span>.
        "A1: 代入 <span class=\"chem\">n = 2</span> 得出 <span class=\"chem\">V = pi(e^2 - 1)/4</span>。",
      ],
    },

  }
});
