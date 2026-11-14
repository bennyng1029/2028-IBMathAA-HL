/* t5-4.q — zh-Hant question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('zh-Hant', 't5-4.q', {
  questions: {

    // ── t5-4-q001 · numeric · foundation · AHL · AHL 5.18 · 3 marks
    "t5-4-q001": {
      // EN: <p>Given <span class="chem">dy/dx = 2x - y</span> with initial condition <span class="chem">y(0) = 2</span>, use Euler’s method with step size <span class="chem">h = 0.2</span> to approximate <span class="chem">y(0.4)</span>.</p>
      stem: "<p>已知 <span class=\"chem\">dy/dx = 2x - y</span> 及初始條件 <span class=\"chem\">y(0) = 2</span>，使用步長 <span class=\"chem\">h = 0.2</span> 的歐拉法近似 <span class=\"chem\">y(0.4)</span>。</p>",
      hints: [
        // EN: First step (<span class="chem">x_0 = 0, y_0 = 2</span>): <span class="chem">y_1 = 2 + 0.2(2(0) - 2) = 1.6</span> at <span class="chem">x_1 = 0.2</span>.
        "第一步（<span class=\"chem\">x_0 = 0, y_0 = 2</span>）：在 <span class=\"chem\">x_1 = 0.2</span> 處，<span class=\"chem\">y_1 = 2 + 0.2(2(0) - 2) = 1.6</span>。",
        // EN: Second step (<span class="chem">x_1 = 0.2, y_1 = 1.6</span>): <span class="chem">y_2 = 1.6 + 0.2(2(0.2) - 1.6)</span>.
        "第二步（<span class=\"chem\">x_1 = 0.2, y_1 = 1.6</span>）：<span class=\"chem\">y_2 = 1.6 + 0.2(2(0.2) - 1.6)</span>。",
      ],
      // EN: <p>Step 1: <span class="chem">y_1 = 2 + 0.2(0 - 2) = 1.6</span> at <span class="chem">x_1 = 0.2</span>. Step 2: <span class="chem">y_2 = 1.6 + 0.2(0.4 - 1.6) = 1.6 - 0.24 = 1.36</span>.</p>
      solution: "<p>第 1 步：在 <span class=\"chem\">x_1 = 0.2</span> 處，<span class=\"chem\">y_1 = 2 + 0.2(0 - 2) = 1.6</span>。第 2 步：<span class=\"chem\">y_2 = 1.6 + 0.2(0.4 - 1.6) = 1.6 - 0.24 = 1.36</span>。</p>",
    },

    // ── t5-4-q002 · mcq · foundation · AHL · AHL 5.18 · 2 marks
    "t5-4-q002": {
      // EN: <p>A solution curve <span class="chem">y = f(x)</span> is <strong>concave down</strong> (<span class="chem">d^2y/dx^2 &lt; 0</span>) on the interval <span class="chem">[0, 1]</span>. What can be concluded about an Euler’s method approximation of <span class="chem">f(1)</span> starting from <span class="chem">(0, f(0))</span>?</p>
      stem: "<p>解曲線 <span class=\"chem\">y = f(x)</span> 在區間 <span class=\"chem\">[0, 1]</span> 上<strong>凹向下</strong>（<span class=\"chem\">d^2y/dx^2 &lt; 0</span>）。由 <span class=\"chem\">(0, f(0))</span> 出發以歐拉法近似 <span class=\"chem\">f(1)</span>，可得出甚麼結論？</p>",
      options: [
        // EN: It gives an <strong>overestimate</strong> because the tangent lines lie above the curve.
        "由於切線位於曲線上方，它會得出<strong>高估</strong>。",
        // EN: It gives an <strong>underestimate</strong> because the tangent lines lie below the curve.
        "由於切線位於曲線下方，它會得出<strong>低估</strong>。",
        // EN: It gives the exact value because Euler’s method is independent of concavity.
        "由於歐拉法與凹性無關，它會得出準確值。",
        // EN: It gives an <strong>underestimate</strong> whenever <span class="chem">dy/dx &gt; 0</span> and an overestimate whenever <span class="chem">dy/dx &lt; 0</span>.
        "每當 <span class=\"chem\">dy/dx &gt; 0</span> 時得出<strong>低估</strong>，每當 <span class=\"chem\">dy/dx &lt; 0</span> 時得出高估。",
      ],
      hints: [
        // EN: Sketch a concave-down curve (shaped like an arch) and draw its tangent line at the starting point.
        "描繪一條凹向下的曲線（形如拱門），並在起點畫出其切線。",
      ],
      // EN: <p>When <span class="chem">d^2y/dx^2 &lt; 0</span>, the gradient is decreasing, so every tangent line sits above the curve. Stepping along tangent lines therefore produces an overestimate.</p>
      solution: "<p>當 <span class=\"chem\">d^2y/dx^2 &lt; 0</span> 時，斜率遞減，因此每條切線都位於曲線上方。沿切線步進因而會產生高估。</p>",
      misconception: {
        // EN (option B): Tangent lines lie below a curve only when it is concave <em>up</em> (<span class="chem">d^2y/dx^2 &gt; 0</span>).
        "1": "只有當曲線凹<em>向上</em>（<span class=\"chem\">d^2y/dx^2 &gt; 0</span>）時，切線才位於曲線下方。",
        // EN (option C): Euler’s method follows straight tangent segments, so curvature (<span class="chem">d^2y/dx^2 != 0</span>) always introduces truncation error.
        "2": "歐拉法沿直線切線段前進，因此曲率（<span class=\"chem\">d^2y/dx^2 != 0</span>）必定會引入截斷誤差。",
        // EN (option D): The direction of the bias depends on the sign of the second derivative (concavity), not the first derivative.
        "3": "偏差的方向取決於二階導數的正負號（凹性），而非一階導數。",
      },
    },

    // ── t5-4-q003 · mcq · foundation · AHL · AHL 5.18 · 2 marks
    "t5-4-q003": {
      // EN: <p>Solve the separable differential equation <span class="chem">dy/dx = 2y / x</span> (<span class="chem">x &gt; 0, y &gt; 0</span>) given that <span class="chem">y(1) = 3</span>.</p>
      stem: "<p>解可分離變數微分方程 <span class=\"chem\">dy/dx = 2y / x</span>（<span class=\"chem\">x &gt; 0, y &gt; 0</span>），已知 <span class=\"chem\">y(1) = 3</span>。</p>",
      options: [
        // EN: <span class="chem">y = 3x^2</span>
        "<span class=\"chem\">y = 3x^2</span>",
        // EN: <span class="chem">y = x^2 + 2</span>
        "<span class=\"chem\">y = x^2 + 2</span>",
        // EN: <span class="chem">y = 3e^{2x}</span>
        "<span class=\"chem\">y = 3e^{2x}</span>",
        // EN: <span class="chem">y = 3 sqrt(x)</span>
        "<span class=\"chem\">y = 3 sqrt(x)</span>",
      ],
      hints: [
        // EN: Separate variables: <span class="chem">int (1/y) dy = int (2/x) dx</span>.
        "分離變數：<span class=\"chem\">int (1/y) dy = int (2/x) dx</span>。",
        // EN: Use <span class="chem">2 ln x = ln(x^2)</span> before exponentiating both sides.
        "在兩邊取指數之前，先使用 <span class=\"chem\">2 ln x = ln(x^2)</span>。",
      ],
      // EN: <p><span class="chem">int (1/y) dy = int (2/x) dx => ln y = 2 ln x + C => y = A x^2</span>. Since <span class="chem">y(1) = 3</span>, <span class="chem">A = 3</span>, giving <span class="chem">y = 3x^2</span>.</p>
      solution: "<p><span class=\"chem\">int (1/y) dy = int (2/x) dx => ln y = 2 ln x + C => y = A x^2</span>。由於 <span class=\"chem\">y(1) = 3</span>，故 <span class=\"chem\">A = 3</span>，得出 <span class=\"chem\">y = 3x^2</span>。</p>",
      misconception: {
        // EN (option B): After integrating <span class="chem">ln y = 2 ln x + C</span>, exponentiating gives <span class="chem">y = A x^2</span> (a multiplicative constant), not <span class="chem">x^2 + C</span>.
        "1": "積分得 <span class=\"chem\">ln y = 2 ln x + C</span> 後，兩邊取指數得出的是 <span class=\"chem\">y = A x^2</span>（乘性常數），而非 <span class=\"chem\">x^2 + C</span>。",
        // EN (option C): The right-hand side is <span class="chem">int (2/x) dx = 2 ln x</span>, not <span class="chem">2x</span>.
        "2": "右方是 <span class=\"chem\">int (2/x) dx = 2 ln x</span>，而非 <span class=\"chem\">2x</span>。",
        // EN (option D): Notice <span class="chem">2 ln x = ln(x^2)</span>, not <span class="chem">ln(x^{1/2})</span>.
        "3": "留意 <span class=\"chem\">2 ln x = ln(x^2)</span>，而非 <span class=\"chem\">ln(x^{1/2})</span>。",
      },
    },

    // ── t5-4-q004 · multi · foundation · AHL · AHL 5.18–5.19 · 3 marks
    "t5-4-q004": {
      // EN: <p>Select <strong>all</strong> statements that are true in the IB Math AA HL syllabus.</p>
      stem: "<p>選出<strong>所有</strong>在 IB Math AA HL 課程大綱中正確的陳述。</p>",
      options: [
        // EN: The integrating factor for <span class="chem">dy/dx + P(x)y = Q(x)</span> is <span class="chem">I(x) = e^{int P(x) dx}</span>.
        "<span class=\"chem\">dy/dx + P(x)y = Q(x)</span> 的積分因子為 <span class=\"chem\">I(x) = e^{int P(x) dx}</span>。",
        // EN: The substitution <span class="chem">y = vx</span> transforms any homogeneous DE <span class="chem">dy/dx = F(y/x)</span> into a separable DE in <span class="chem">v</span> and <span class="chem">x</span>.
        "代換 <span class=\"chem\">y = vx</span> 可將任何齊次微分方程 <span class=\"chem\">dy/dx = F(y/x)</span> 轉化為關於 <span class=\"chem\">v</span> 與 <span class=\"chem\">x</span> 的可分離變數微分方程。",
        // EN: In the Maclaurin series for <span class="chem">ln(1 + x)</span>, the <span class="chem">x^n</span> term has denominator <span class="chem">n</span>, not <span class="chem">n!</span>.
        "在 <span class=\"chem\">ln(1 + x)</span> 的麥克勞林級數中，<span class=\"chem\">x^n</span> 項的分母是 <span class=\"chem\">n</span>，而非 <span class=\"chem\">n!</span>。",
        // EN: In the Maclaurin series for <span class="chem">arctan x</span>, the <span class="chem">x^3</span> term is <span class="chem">-x^3 / 3!</span>.
        "在 <span class=\"chem\">arctan x</span> 的麥克勞林級數中，<span class=\"chem\">x^3</span> 項為 <span class=\"chem\">-x^3 / 3!</span>。",
      ],
      hints: [
        // EN: Check the Formula Booklet expansions for <span class="chem">ln(1 + x)</span> and <span class="chem">arctan x</span> carefully.
        "仔細核對公式手冊中 <span class=\"chem\">ln(1 + x)</span> 與 <span class=\"chem\">arctan x</span> 的展開式。",
      ],
      // EN: <p>The first three statements are all true. For <span class="chem">arctan x</span>, the denominators are odd integers <span class="chem">1, 3, 5, ...</span> without factorials.</p>
      solution: "<p>首三個陳述全部正確。對於 <span class=\"chem\">arctan x</span>，分母是奇數 <span class=\"chem\">1, 3, 5, ...</span>，並沒有階乘。</p>",
      misconception: {
        // EN (option D): <span class="chem">arctan x = x - x^3/3 + x^5/5 - ...</span> divides by <span class="chem">3</span>, not <span class="chem">3! = 6</span>.
        "3": "<span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span> 除以的是 <span class=\"chem\">3</span>，而非 <span class=\"chem\">3! = 6</span>。",
      },
    },

    // ── t5-4-q005 · numeric · foundation · AHL · AHL 5.19 · 2 marks
    "t5-4-q005": {
      // EN: <p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">f(x) = sin(2x)</span>. (You can enter an exact fraction like <span class="mono">-5/7</span>.)</p>
      stem: "<p>求 (Find) <span class=\"chem\">f(x) = sin(2x)</span> 的麥克勞林級數展開式中 <span class=\"chem\">x^3</span> 的準確係數。（你可輸入準確分數，例如 <span class=\"mono\">-5/7</span>。）</p>",
      hints: [
        // EN: Substitute <span class="chem">u = 2x</span> into the standard Formula Booklet series <span class="chem">sin u = u - u^3/3! + ...</span>.
        "將 <span class=\"chem\">u = 2x</span> 代入公式手冊標準級數 <span class=\"chem\">sin u = u - u^3/3! + ...</span>。",
      ],
      // EN: <p><span class="chem">sin(2x) = 2x - (2x)^3 / 6 + ... = 2x - (8/6)x^3 + ... = 2x - (4/3)x^3 + ...</span>, so the coefficient of <span class="chem">x^3</span> is <span class="chem">-4/3</span>.</p>
      solution: "<p><span class=\"chem\">sin(2x) = 2x - (2x)^3 / 6 + ... = 2x - (8/6)x^3 + ... = 2x - (4/3)x^3 + ...</span>，故 <span class=\"chem\">x^3</span> 的係數為 <span class=\"chem\">-4/3</span>。</p>",
    },

    // ── t5-4-q006 · mcq · foundation · AHL · AHL 5.18 · 2 marks
    "t5-4-q006": {
      // EN: <p>To solve the linear differential equation <span class="chem">x^2 (dy/dx) + 3xy = e^x</span> (<span class="chem">x &gt; 0</span>) using an integrating factor, what is <span class="chem">P(x)</span> in the standard form <span class="chem">dy/dx + P(x)y = Q(x)</span>?</p>
      stem: "<p>使用積分因子解線性微分方程 <span class=\"chem\">x^2 (dy/dx) + 3xy = e^x</span>（<span class=\"chem\">x &gt; 0</span>）時，標準形式 <span class=\"chem\">dy/dx + P(x)y = Q(x)</span> 中的 <span class=\"chem\">P(x)</span> 是甚麼？</p>",
      options: [
        // EN: <span class="chem">3 / x</span>
        "<span class=\"chem\">3 / x</span>",
        // EN: <span class="chem">3x</span>
        "<span class=\"chem\">3x</span>",
        // EN: <span class="chem">3 / x^2</span>
        "<span class=\"chem\">3 / x^2</span>",
        // EN: <span class="chem">e^x / x^2</span>
        "<span class=\"chem\">e^x / x^2</span>",
      ],
      hints: [
        // EN: Divide every term by <span class="chem">x^2</span> so the coefficient of <span class="chem">dy/dx</span> is <span class="chem">1</span>.
        "將每一項除以 <span class=\"chem\">x^2</span>，使 <span class=\"chem\">dy/dx</span> 的係數成為 <span class=\"chem\">1</span>。",
      ],
      // EN: <p>Dividing by <span class="chem">x^2</span> gives <span class="chem">dy/dx + (3/x)y = e^x / x^2</span>, so <span class="chem">P(x) = 3/x</span>.</p>
      solution: "<p>兩邊除以 <span class=\"chem\">x^2</span> 得 <span class=\"chem\">dy/dx + (3/x)y = e^x / x^2</span>，因此 <span class=\"chem\">P(x) = 3/x</span>。</p>",
      misconception: {
        // EN (option B): You must divide the entire equation by the leading coefficient <span class="chem">x^2</span> before reading off <span class="chem">P(x)</span>.
        "1": "讀出 <span class=\"chem\">P(x)</span> 之前，必須先將整條方程除以首項係數 <span class=\"chem\">x^2</span>。",
        // EN (option C): <span class="chem">(3x) / x^2</span> simplifies to <span class="chem">3 / x</span>, not <span class="chem">3 / x^2</span>.
        "2": "<span class=\"chem\">(3x) / x^2</span> 化簡後為 <span class=\"chem\">3 / x</span>，而非 <span class=\"chem\">3 / x^2</span>。",
        // EN (option D): <span class="chem">e^x / x^2</span> is <span class="chem">Q(x)</span> on the right-hand side, not <span class="chem">P(x)</span>.
        "3": "<span class=\"chem\">e^x / x^2</span> 是右方的 <span class=\"chem\">Q(x)</span>，而非 <span class=\"chem\">P(x)</span>。",
      },
    },

    // ── t5-4-q007 · order · exam · AHL · AHL 5.18 · 4 marks
    "t5-4-q007": {
      // EN: <p>Arrange the steps in the correct logical order to solve a homogeneous differential equation <span class="chem">dy/dx = F(y/x)</span>.</p>
      stem: "<p>將以下解齊次微分方程 <span class=\"chem\">dy/dx = F(y/x)</span> 的步驟按正確的邏輯次序排列。</p>",
      options: [
        // EN: Introduce the substitution <span class="chem">y = vx</span> and differentiate using the product rule to get <span class="chem">dy/dx = v + x(dv/dx)</span>.
        "引入代換 <span class=\"chem\">y = vx</span>，並用積法則求導得 <span class=\"chem\">dy/dx = v + x(dv/dx)</span>。",
        // EN: Substitute both expressions into the DE to obtain <span class="chem">v + x(dv/dx) = F(v)</span>, so <span class="chem">x(dv/dx) = F(v) - v</span>.
        "將兩式代入微分方程得 <span class=\"chem\">v + x(dv/dx) = F(v)</span>，即 <span class=\"chem\">x(dv/dx) = F(v) - v</span>。",
        // EN: Separate variables to integrate <span class="chem">int 1/(F(v) - v) dv = int (1/x) dx</span>.
        "分離變數並積分：<span class=\"chem\">int 1/(F(v) - v) dv = int (1/x) dx</span>。",
        // EN: Replace <span class="chem">v = y/x</span> and apply the initial condition to find the particular solution.
        "代回 <span class=\"chem\">v = y/x</span> 並套用初始條件以求特解。",
      ],
      hints: [
        // EN: Start by defining <span class="chem">y = vx</span> and differentiating it before substituting into the DE.
        "先定義 <span class=\"chem\">y = vx</span> 並求導，然後再代入微分方程。",
      ],
      // EN: <p>Define <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>, substitute to isolate <span class="chem">x(dv/dx) = F(v) - v</span>, separate variables and integrate, and finally substitute <span class="chem">v = y/x</span> back.</p>
      solution: "<p>定義 <span class=\"chem\">y = vx</span> 及 <span class=\"chem\">dy/dx = v + x(dv/dx)</span>，代入以孤立 <span class=\"chem\">x(dv/dx) = F(v) - v</span>，分離變數並積分，最後代回 <span class=\"chem\">v = y/x</span>。</p>",
    },

    // ── t5-4-q008 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q008": {
      // EN: <p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x + 2y) / x</span> (<span class="chem">x &gt; 0</span>) given that <span class="chem">y(1) = 1</span>, and find the exact value of <span class="chem">y(2)</span>.</p>
      stem: "<p>解齊次微分方程 <span class=\"chem\">dy/dx = (x + 2y) / x</span>（<span class=\"chem\">x &gt; 0</span>），已知 <span class=\"chem\">y(1) = 1</span>，並求 (find) <span class=\"chem\">y(2)</span> 的準確值。</p>",
      hints: [
        // EN: Let <span class="chem">y = vx</span> so <span class="chem">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>.
        "設 <span class=\"chem\">y = vx</span>，得 <span class=\"chem\">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>。",
        // EN: Separate variables: <span class="chem">int 1/(1 + v) dv = int (1/x) dx => 1 + v = A x</span>. Use <span class="chem">y(1) = 1</span> (<span class="chem">v = 1</span>) to find <span class="chem">A = 2</span>.
        "分離變數：<span class=\"chem\">int 1/(1 + v) dv = int (1/x) dx => 1 + v = A x</span>。利用 <span class=\"chem\">y(1) = 1</span>（<span class=\"chem\">v = 1</span>）求得 <span class=\"chem\">A = 2</span>。",
      ],
      // EN: <p>With <span class="chem">y = vx</span>, <span class="chem">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>. Integrating gives <span class="chem">ln|1 + v| = ln x + C => 1 + y/x = A x</span>. Using <span class="chem">y(1) = 1</span> gives <span class="chem">A = 2</span>, so <span class="chem">y = 2x^2 - x</span>. Thus <span class="chem">y(2) = 2(4) - 2 = 6</span>.</p>
      solution: "<p>設 <span class=\"chem\">y = vx</span>，得 <span class=\"chem\">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>。積分得 <span class=\"chem\">ln|1 + v| = ln x + C => 1 + y/x = A x</span>。代入 <span class=\"chem\">y(1) = 1</span> 得 <span class=\"chem\">A = 2</span>，故 <span class=\"chem\">y = 2x^2 - x</span>。因此 <span class=\"chem\">y(2) = 2(4) - 2 = 6</span>。</p>",
    },

    // ── t5-4-q009 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q009": {
      // EN: <p>Solve the differential equation <span class="chem">dy/dx + 2y = 6e^x</span> given that <span class="chem">y(0) = 5</span>, and find the exact value of <span class="chem">y(ln 2)</span>.</p>
      stem: "<p>解微分方程 <span class=\"chem\">dy/dx + 2y = 6e^x</span>，已知 <span class=\"chem\">y(0) = 5</span>，並求 (find) <span class=\"chem\">y(ln 2)</span> 的準確值。</p>",
      hints: [
        // EN: The integrating factor is <span class="chem">I(x) = e^{int 2 dx} = e^{2x}</span>.
        "積分因子為 <span class=\"chem\">I(x) = e^{int 2 dx} = e^{2x}</span>。",
        // EN: Multiply through to get <span class="chem">d/dx(y e^{2x}) = 6 e^{3x} => y e^{2x} = 2 e^{3x} + C</span>. Apply <span class="chem">y(0) = 5</span> to find <span class="chem">C = 3</span>.
        "全式乘以積分因子得 <span class=\"chem\">d/dx(y e^{2x}) = 6 e^{3x} => y e^{2x} = 2 e^{3x} + C</span>。代入 <span class=\"chem\">y(0) = 5</span> 求得 <span class=\"chem\">C = 3</span>。",
      ],
      // EN: <p>Multiplying by <span class="chem">I(x) = e^{2x}</span> gives <span class="chem">d/dx(y e^{2x}) = 6 e^{3x}</span>, so <span class="chem">y e^{2x} = 2 e^{3x} + C</span>. At <span class="chem">(0, 5)</span>: <span class="chem">5 = 2 + C => C = 3</span>, giving <span class="chem">y = 2e^x + 3e^{-2x}</span>. At <span class="chem">x = ln 2</span>: <span class="chem">y = 2(2) + 3(1/4) = 4.75</span>.</p>
      solution: "<p>乘以 <span class=\"chem\">I(x) = e^{2x}</span> 得 <span class=\"chem\">d/dx(y e^{2x}) = 6 e^{3x}</span>，故 <span class=\"chem\">y e^{2x} = 2 e^{3x} + C</span>。在 <span class=\"chem\">(0, 5)</span> 處：<span class=\"chem\">5 = 2 + C => C = 3</span>，得出 <span class=\"chem\">y = 2e^x + 3e^{-2x}</span>。當 <span class=\"chem\">x = ln 2</span> 時：<span class=\"chem\">y = 2(2) + 3(1/4) = 4.75</span>。</p>",
    },

    // ── t5-4-q010 · mcq · exam · AHL · AHL 5.19 · 2 marks
    "t5-4-q010": {
      // EN: <p>What are the first two non-zero terms in the Maclaurin series expansion of <span class="chem">f(x) = ln(1 + 2x) - 2x</span>?</p>
      stem: "<p><span class=\"chem\">f(x) = ln(1 + 2x) - 2x</span> 的麥克勞林級數展開式中，首兩個非零項是甚麼？</p>",
      options: [
        // EN: <span class="chem">-2x^2 + (8/3)x^3</span>
        "<span class=\"chem\">-2x^2 + (8/3)x^3</span>",
        // EN: <span class="chem">-x^2 + (2/3)x^3</span>
        "<span class=\"chem\">-x^2 + (2/3)x^3</span>",
        // EN: <span class="chem">-2x^2 + (4/3)x^3</span>
        "<span class=\"chem\">-2x^2 + (4/3)x^3</span>",
        // EN: <span class="chem">2x^2 - (8/3)x^3</span>
        "<span class=\"chem\">2x^2 - (8/3)x^3</span>",
      ],
      hints: [
        // EN: Substitute <span class="chem">u = 2x</span> into <span class="chem">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span>, then subtract <span class="chem">2x</span>.
        "將 <span class=\"chem\">u = 2x</span> 代入 <span class=\"chem\">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span>，然後減去 <span class=\"chem\">2x</span>。",
      ],
      // EN: <p><span class="chem">ln(1 + 2x) - 2x = (2x - (2x)^2/2 + (2x)^3/3 - ...) - 2x = -2x^2 + (8/3)x^3 - ...</span>.</p>
      solution: "<p><span class=\"chem\">ln(1 + 2x) - 2x = (2x - (2x)^2/2 + (2x)^3/3 - ...) - 2x = -2x^2 + (8/3)x^3 - ...</span>。</p>",
      misconception: {
        // EN (option B): Remember to replace <span class="chem">x</span> with <span class="chem">2x</span> inside the brackets: <span class="chem">(2x)^2/2 = 2x^2</span> and <span class="chem">(2x)^3/3 = (8/3)x^3</span>.
        "1": "謹記將括號內的 <span class=\"chem\">x</span> 換成 <span class=\"chem\">2x</span>：<span class=\"chem\">(2x)^2/2 = 2x^2</span> 及 <span class=\"chem\">(2x)^3/3 = (8/3)x^3</span>。",
        // EN (option C): In <span class="chem">ln(1 + u)</span>, the <span class="chem">u^3</span> term is divided by <span class="chem">3</span>, not <span class="chem">3! = 6</span>.
        "2": "在 <span class=\"chem\">ln(1 + u)</span> 中，<span class=\"chem\">u^3</span> 項除以的是 <span class=\"chem\">3</span>，而非 <span class=\"chem\">3! = 6</span>。",
        // EN (option D): The signs in <span class="chem">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span> alternate starting with <span class="chem">+u</span>, so the <span class="chem">x^2</span> term is negative.
        "3": "<span class=\"chem\">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span> 由 <span class=\"chem\">+u</span> 開始正負交替，因此 <span class=\"chem\">x^2</span> 項為負。",
      },
    },

    // ── t5-4-q011 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q011": {
      // EN: <p>A fish population <span class="chem">P(t)</span> satisfies the logistic differential equation <span class="chem">dP/dt = 0.002 P(500 - P)</span>, where <span class="chem">t</span> is in years and <span class="chem">P(0) = 100</span>. Find the population <span class="chem">P(2)</span> correct to 3 significant figures.</p>
      stem: "<p>魚類種群 <span class=\"chem\">P(t)</span> 滿足邏輯斯蒂微分方程 <span class=\"chem\">dP/dt = 0.002 P(500 - P)</span>，其中 <span class=\"chem\">t</span> 以年為單位且 <span class=\"chem\">P(0) = 100</span>。求 (Find) 種群數量 <span class=\"chem\">P(2)</span>，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Use partial fractions <span class="chem">500 / (P(500 - P)) = 1/P + 1/(500 - P)</span> to separate variables: <span class="chem">int (1/P + 1/(500 - P)) dP = int 1 dt</span>.
        "利用部分分式 <span class=\"chem\">500 / (P(500 - P)) = 1/P + 1/(500 - P)</span> 分離變數：<span class=\"chem\">int (1/P + 1/(500 - P)) dP = int 1 dt</span>。",
        // EN: Solve to get <span class="chem">P(t) = 500 / (1 + A e^{-t})</span>, find <span class="chem">A = 4</span> from <span class="chem">P(0) = 100</span>, and evaluate at <span class="chem">t = 2</span>.
        "解出 <span class=\"chem\">P(t) = 500 / (1 + A e^{-t})</span>，由 <span class=\"chem\">P(0) = 100</span> 求得 <span class=\"chem\">A = 4</span>，然後計算 <span class=\"chem\">t = 2</span> 時的值。",
      ],
      // EN: <p>Separating variables gives <span class="chem">ln(P / (500 - P)) = t + C => P(t) = 500 / (1 + A e^{-t})</span>. With <span class="chem">P(0) = 100</span>, <span class="chem">1 + A = 5 => A = 4</span>. Thus <span class="chem">P(2) = 500 / (1 + 4e^{-2}) ≈ 324</span>.</p>
      solution: "<p>分離變數得 <span class=\"chem\">ln(P / (500 - P)) = t + C => P(t) = 500 / (1 + A e^{-t})</span>。代入 <span class=\"chem\">P(0) = 100</span> 得 <span class=\"chem\">1 + A = 5 => A = 4</span>。因此 <span class=\"chem\">P(2) = 500 / (1 + 4e^{-2}) ≈ 324</span>。</p>",
    },

    // ── t5-4-q012 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q012": {
      // EN: <p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">g(x) = e^{2x} sin(x)</span>. (You can enter an exact fraction like <span class="mono">7/4</span>.)</p>
      stem: "<p>求 (Find) <span class=\"chem\">g(x) = e^{2x} sin(x)</span> 的麥克勞林級數展開式中 <span class=\"chem\">x^3</span> 的準確係數。（你可輸入準確分數，例如 <span class=\"mono\">7/4</span>。）</p>",
      hints: [
        // EN: Write <span class="chem">e^{2x} = 1 + 2x + 2x^2 + (4/3)x^3 + ...</span> and <span class="chem">sin x = x - x^3/6 + ...</span>.
        "寫出 <span class=\"chem\">e^{2x} = 1 + 2x + 2x^2 + (4/3)x^3 + ...</span> 及 <span class=\"chem\">sin x = x - x^3/6 + ...</span>。",
        // EN: Multiply the two polynomials and collect all terms that give <span class="chem">x^3</span>.
        "將兩個多項式相乘，並合併所有產生 <span class=\"chem\">x^3</span> 的項。",
      ],
      // EN: <p><span class="chem">e^{2x} sin x = (1 + 2x + 2x^2 + ...)(x - x^3/6 + ...)</span>. The <span class="chem">x^3</span> coefficient is <span class="chem">1(-1/6) + 2(1) = 11/6 ≈ 1.83</span>.</p>
      solution: "<p><span class=\"chem\">e^{2x} sin x = (1 + 2x + 2x^2 + ...)(x - x^3/6 + ...)</span>。<span class=\"chem\">x^3</span> 的係數為 <span class=\"chem\">1(-1/6) + 2(1) = 11/6 ≈ 1.83</span>。</p>",
    },

    // ── t5-4-q013 · mcq · exam · AHL · AHL 5.19 · 2 marks
    "t5-4-q013": {
      // EN: <p>Use the Maclaurin series for <span class="chem">sin x</span> to evaluate <span class="chem">lim_{x->0} (sin x - x + x^3/6) / x^5</span>.</p>
      stem: "<p>利用 <span class=\"chem\">sin x</span> 的麥克勞林級數計算 (evaluate) <span class=\"chem\">lim_{x->0} (sin x - x + x^3/6) / x^5</span>。</p>",
      options: [
        // EN: <span class="chem">1 / 120</span>
        "<span class=\"chem\">1 / 120</span>",
        // EN: <span class="chem">-1 / 120</span>
        "<span class=\"chem\">-1 / 120</span>",
        // EN: <span class="chem">1 / 24</span>
        "<span class=\"chem\">1 / 24</span>",
        // EN: <span class="chem">0</span>
        "<span class=\"chem\">0</span>",
      ],
      hints: [
        // EN: Substitute <span class="chem">sin x = x - x^3/6 + x^5/120 - ...</span> into the numerator.
        "將 <span class=\"chem\">sin x = x - x^3/6 + x^5/120 - ...</span> 代入分子。",
      ],
      // EN: <p><span class="chem">sin x - x + x^3/6 = x^5/120 - x^7/5040 + ...</span>. Dividing by <span class="chem">x^5</span> and letting <span class="chem">x -> 0</span> gives <span class="chem">1/120</span>.</p>
      solution: "<p><span class=\"chem\">sin x - x + x^3/6 = x^5/120 - x^7/5040 + ...</span>。除以 <span class=\"chem\">x^5</span> 並令 <span class=\"chem\">x -> 0</span>，得出 <span class=\"chem\">1/120</span>。</p>",
      misconception: {
        // EN (option B): The signs in <span class="chem">sin x = x - x^3/3! + x^5/5! - ...</span> alternate, so the <span class="chem">x^5</span> term is positive (<span class="chem">+x^5/120</span>).
        "1": "<span class=\"chem\">sin x = x - x^3/3! + x^5/5! - ...</span> 的正負號交替出現，故 <span class=\"chem\">x^5</span> 項為正（<span class=\"chem\">+x^5/120</span>）。",
        // EN (option C): <span class="chem">5! = 120</span>, whereas <span class="chem">4! = 24</span>.
        "2": "<span class=\"chem\">5! = 120</span>，而 <span class=\"chem\">4! = 24</span>。",
        // EN (option D): After <span class="chem">x</span> and <span class="chem">-x^3/6</span> cancel, the leading term in the numerator is <span class="chem">x^5/120</span>, which cancels <span class="chem">x^5</span> in the denominator.
        "3": "<span class=\"chem\">x</span> 與 <span class=\"chem\">-x^3/6</span> 相消後，分子的首項是 <span class=\"chem\">x^5/120</span>，恰好與分母的 <span class=\"chem\">x^5</span> 約去。",
      },
    },

    // ── t5-4-q014 · short · exam · AHL · AHL 5.18 · 7 marks
    "t5-4-q014": {
      // EN: <p>Consider the differential equation <span class="chem">x (dy/dx) - 2y = x^3 cos(x)</span> for <span class="chem">x &gt; 0</span>, with <span class="chem">y(pi) = 0</span>.</p><p>(a) Find the integrating factor for this differential equation. <strong>[3 marks]</strong></p><p>(b) Hence solve the differential equation to find <span class="chem">y</span> in terms of <span class="chem">x</span>. <strong>[4 marks]</strong></p>
      stem: "<p>考慮微分方程 <span class=\"chem\">x (dy/dx) - 2y = x^3 cos(x)</span>（<span class=\"chem\">x &gt; 0</span>），其中 <span class=\"chem\">y(pi) = 0</span>。</p><p>(a) 求 (Find) 此微分方程的積分因子。<strong>[3 分]</strong></p><p>(b) 由此解 (Hence solve) 此微分方程，以 <span class=\"chem\">x</span> 表示 <span class=\"chem\">y</span>。<strong>[4 分]</strong></p>",
      hints: [
        // EN: Divide by <span class="chem">x</span> first so the coefficient of <span class="chem">dy/dx</span> is <span class="chem">1</span>.
        "先除以 <span class=\"chem\">x</span>，使 <span class=\"chem\">dy/dx</span> 的係數為 <span class=\"chem\">1</span>。",
        // EN: Use <span class="chem">e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span>.
        "利用 <span class=\"chem\">e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span>。",
      ],
      // EN: <p>(a) Dividing by <span class="chem">x</span> gives <span class="chem">dy/dx - (2/x)y = x^2 cos(x)</span>, so <span class="chem">P(x) = -2/x</span>. The integrating factor is <span class="chem">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = x^{-2}</span>.</p><p>(b) Multiplying by <span class="chem">x^{-2}</span> gives <span class="chem">d/dx(x^{-2} y) = cos(x)</span>. Integrating gives <span class="chem">x^{-2} y = sin(x) + C</span>. Since <span class="chem">y(pi) = 0</span>, <span class="chem">0 = sin(pi) + C => C = 0</span>, so <span class="chem">y = x^2 sin(x)</span>.</p>
      answer: "<p>(a) 除以 <span class=\"chem\">x</span> 得 <span class=\"chem\">dy/dx - (2/x)y = x^2 cos(x)</span>，故 <span class=\"chem\">P(x) = -2/x</span>。積分因子為 <span class=\"chem\">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = x^{-2}</span>。</p><p>(b) 乘以 <span class=\"chem\">x^{-2}</span> 得 <span class=\"chem\">d/dx(x^{-2} y) = cos(x)</span>。積分得 <span class=\"chem\">x^{-2} y = sin(x) + C</span>。由於 <span class=\"chem\">y(pi) = 0</span>，故 <span class=\"chem\">0 = sin(pi) + C => C = 0</span>，因此 <span class=\"chem\">y = x^2 sin(x)</span>。</p>",
      markscheme: [
        // EN: M1: divides by <span class="chem">x</span> to write <span class="chem">dy/dx - (2/x)y = x^2 cos x</span>.
        "M1: 除以 <span class=\"chem\">x</span> 寫出 <span class=\"chem\">dy/dx - (2/x)y = x^2 cos x</span>。",
        // EN: M1: uses <span class="chem">I(x) = e^{int -2/x dx} = e^{-2 ln x}</span>.
        "M1: 使用 <span class=\"chem\">I(x) = e^{int -2/x dx} = e^{-2 ln x}</span>。",
        // EN: A1: <span class="chem">I(x) = x^{-2}</span> (or <span class="chem">1/x^2</span>).
        "A1: <span class=\"chem\">I(x) = x^{-2}</span>（或 <span class=\"chem\">1/x^2</span>）。",
        // EN: M1: writes <span class="chem">d/dx(x^{-2} y) = cos x</span>.
        "M1: 寫出 <span class=\"chem\">d/dx(x^{-2} y) = cos x</span>。",
        // EN: A1: integrates to <span class="chem">x^{-2} y = sin x + C</span> (must include <span class="chem">+ C</span>).
        "A1: 積分得 <span class=\"chem\">x^{-2} y = sin x + C</span>（必須包含 <span class=\"chem\">+ C</span>）。",
        // EN: M1: substitutes <span class="chem">x = pi, y = 0</span> to find <span class="chem">C = 0</span>.
        "M1: 代入 <span class=\"chem\">x = pi, y = 0</span> 求得 <span class=\"chem\">C = 0</span>。",
        // EN: A1: <span class="chem">y = x^2 sin x</span>.
        "A1: <span class=\"chem\">y = x^2 sin x</span>。",
      ],
    },

    // ── t5-4-q015 · numeric · challenge · AHL · AHL 5.19 · 5 marks
    "t5-4-q015": {
      // EN: <p>Let <span class="chem">y(x)</span> be the solution to <span class="chem">dy/dx = y^2 - x</span> with <span class="chem">y(0) = 1</span>. Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">y(x)</span>. (You can enter an exact fraction like <span class="mono">3/5</span>.)</p>
      stem: "<p>設 <span class=\"chem\">y(x)</span> 為 <span class=\"chem\">dy/dx = y^2 - x</span> 滿足 <span class=\"chem\">y(0) = 1</span> 的解。求 (Find) <span class=\"chem\">y(x)</span> 的麥克勞林級數展開式中 <span class=\"chem\">x^3</span> 的準確係數。（你可輸入準確分數，例如 <span class=\"mono\">3/5</span>。）</p>",
      hints: [
        // EN: Decode: the DE gives the derivatives of <span class="chem">y</span> at <span class="chem">x = 0</span> one after another, so build the Maclaurin coefficients from <span class="chem">y(0)</span>, <span class="chem">y'(0)</span>, <span class="chem">y''(0)</span> and <span class="chem">y'''(0)</span> by implicit differentiation. The <span class="chem">x^3</span> coefficient is <span class="chem">y'''(0)/3!</span>.
        "解碼：微分方程逐一給出 <span class=\"chem\">y</span> 在 <span class=\"chem\">x = 0</span> 的各階導數，所以用隱函數微分求出 <span class=\"chem\">y(0)</span>、<span class=\"chem\">y'(0)</span>、<span class=\"chem\">y''(0)</span> 和 <span class=\"chem\">y'''(0)</span>，再組成麥克勞林係數。<span class=\"chem\">x^3</span> 的係數是 <span class=\"chem\">y'''(0)/3!</span>。",
        // EN: Find <span class="chem">y'(0) = 1^2 - 0 = 1</span>, then differentiate implicitly: <span class="chem">y'' = 2y y' - 1</span>.
        "求得 <span class=\"chem\">y'(0) = 1^2 - 0 = 1</span>，然後隱式求導：<span class=\"chem\">y'' = 2y y' - 1</span>。",
        // EN: Differentiate again: <span class="chem">y''' = 2(y')^2 + 2y y''</span>, evaluate <span class="chem">y'''(0)</span>, and divide by <span class="chem">3! = 6</span>.
        "再次求導：<span class=\"chem\">y''' = 2(y')^2 + 2y y''</span>，計算 <span class=\"chem\">y'''(0)</span>，並除以 <span class=\"chem\">3! = 6</span>。",
      ],
      // EN: <p><span class="chem">y(0) = 1</span> and <span class="chem">y'(0) = 1</span>. Differentiating gives <span class="chem">y'' = 2y y' - 1 => y''(0) = 2(1)(1) - 1 = 1</span>, and <span class="chem">y''' = 2(y')^2 + 2y y'' => y'''(0) = 2(1)^2 + 2(1)(1) = 4</span>. The coefficient of <span class="chem">x^3</span> is <span class="chem">4 / 3! = 2/3</span>.</p>
      solution: "<p><span class=\"chem\">y(0) = 1</span> 及 <span class=\"chem\">y'(0) = 1</span>。求導得 <span class=\"chem\">y'' = 2y y' - 1 => y''(0) = 2(1)(1) - 1 = 1</span>，再求導得 <span class=\"chem\">y''' = 2(y')^2 + 2y y'' => y'''(0) = 2(1)^2 + 2(1)(1) = 4</span>。故 <span class=\"chem\">x^3</span> 的係數為 <span class=\"chem\">4 / 3! = 2/3</span>。</p>",
    },

    // ── t5-4-q016 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q016": {
      // EN: <p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x^2 + y^2) / (2xy)</span> (<span class="chem">x &gt; 0, y &gt; 0</span>) given <span class="chem">y(1) = 2</span>, and find the exact value of <span class="chem">y(4)</span>. (Enter an exact expression such as <span class="mono">3*sqrt(2)</span>.)</p>
      stem: "<p>解齊次微分方程 <span class=\"chem\">dy/dx = (x^2 + y^2) / (2xy)</span>（<span class=\"chem\">x &gt; 0, y &gt; 0</span>），已知 <span class=\"chem\">y(1) = 2</span>，並求 (find) <span class=\"chem\">y(4)</span> 的準確值。（請輸入準確式，例如 <span class=\"mono\">3*sqrt(2)</span>。）</p>",
      hints: [
        // EN: Decode: divide the top and bottom by <span class="chem">x^2</span>: the right-hand side depends only on <span class="chem">y/x</span>, so the DE is homogeneous and the substitution <span class="chem">y = vx</span> works.
        "解碼：分子分母同除以 <span class=\"chem\">x^2</span>：右邊只依賴 <span class=\"chem\">y/x</span>，所以這是齊次微分方程，可用代換 <span class=\"chem\">y = vx</span>。",
        // EN: Substitute <span class="chem">y = vx</span>: <span class="chem">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>.
        "代入 <span class=\"chem\">y = vx</span>：<span class=\"chem\">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>。",
        // EN: Separate variables: <span class="chem">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>.
        "分離變數：<span class=\"chem\">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>。",
      ],
      // EN: <p>Setting <span class="chem">y = vx</span> gives <span class="chem">x(dv/dx) = (1 - v^2)/(2v)</span>, so <span class="chem">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>. At <span class="chem">(1, 2)</span>, <span class="chem">v = 2 => A = 3</span>, giving <span class="chem">y^2 = x^2 + 3x</span>. Hence <span class="chem">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span>.</p>
      solution: "<p>設 <span class=\"chem\">y = vx</span> 得 <span class=\"chem\">x(dv/dx) = (1 - v^2)/(2v)</span>，故 <span class=\"chem\">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>。在 <span class=\"chem\">(1, 2)</span> 處，<span class=\"chem\">v = 2 => A = 3</span>，得出 <span class=\"chem\">y^2 = x^2 + 3x</span>。因此 <span class=\"chem\">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span>。</p>",
    },

    // ── t5-4-q017 · mcq · challenge · AHL · AHL 5.19 · 2 marks
    "t5-4-q017": {
      // EN: <p>Find the Maclaurin series expansion of <span class="chem">f(x) = e^{sin x}</span> up to and including the term in <span class="chem">x^3</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">f(x) = e^{sin x}</span> 展開至 <span class=\"chem\">x^3</span> 項（包括該項）的麥克勞林級數。</p>",
      options: [
        // EN: <span class="chem">1 + x + (1/2)x^2</span> (the <span class="chem">x^3</span> coefficient is <span class="chem">0</span>)
        "<span class=\"chem\">1 + x + (1/2)x^2</span>（<span class=\"chem\">x^3</span> 係數為 <span class=\"chem\">0</span>）",
        // EN: <span class="chem">1 + x + (1/2)x^2 + (1/6)x^3</span>
        "<span class=\"chem\">1 + x + (1/2)x^2 + (1/6)x^3</span>",
        // EN: <span class="chem">1 + x + (1/2)x^2 - (1/6)x^3</span>
        "<span class=\"chem\">1 + x + (1/2)x^2 - (1/6)x^3</span>",
        // EN: <span class="chem">1 + x + (1/2)x^2 + (1/3)x^3</span>
        "<span class=\"chem\">1 + x + (1/2)x^2 + (1/3)x^3</span>",
      ],
      hints: [
        // EN: Decode: <span class="chem">e^{sin x}</span> is a composite function, so substitute one known series into another (<span class="chem">e^u</span> with <span class="chem">u = sin x</span>) instead of differentiating three times.
        "解碼：<span class=\"chem\">e^{sin x}</span> 是複合函數，所以把一個已知級數代入另一個（<span class=\"chem\">e^u</span>，其中 <span class=\"chem\">u = sin x</span>），而不是微分三次。",
        // EN: Substitute <span class="chem">u = sin x = x - x^3/6 + ...</span> into <span class="chem">e^u = 1 + u + u^2/2! + u^3/3! + ...</span> and drop terms above <span class="chem">x^3</span>.
        "將 <span class=\"chem\">u = sin x = x - x^3/6 + ...</span> 代入 <span class=\"chem\">e^u = 1 + u + u^2/2! + u^3/3! + ...</span>，並略去高於 <span class=\"chem\">x^3</span> 的項。",
      ],
      // EN: <p><span class="chem">e^{sin x} = 1 + (x - x^3/6) + (x - ...)^2/2 + (x - ...)^3/6 + ... = 1 + x + (1/2)x^2 + (-1/6 + 1/6)x^3 + ... = 1 + x + (1/2)x^2</span> up to <span class="chem">x^3</span>.</p>
      solution: "<p><span class=\"chem\">e^{sin x} = 1 + (x - x^3/6) + (x - ...)^2/2 + (x - ...)^3/6 + ... = 1 + x + (1/2)x^2 + (-1/6 + 1/6)x^3 + ... = 1 + x + (1/2)x^2</span>（至 <span class=\"chem\">x^3</span> 項）。</p>",
      misconception: {
        // EN (option B): You forgot the <span class="chem">-x^3/6</span> term inside <span class="chem">sin x = x - x^3/6 + ...</span>, which cancels <span class="chem">+x^3/6</span> from <span class="chem">u^3/3!</span>.
        "1": "你漏了 <span class=\"chem\">sin x = x - x^3/6 + ...</span> 中的 <span class=\"chem\">-x^3/6</span> 項，它會與來自 <span class=\"chem\">u^3/3!</span> 的 <span class=\"chem\">+x^3/6</span> 相消。",
        // EN (option C): You included <span class="chem">-x^3/6</span> from <span class="chem">sin x</span> but forgot <span class="chem">+u^3/3!</span> from the exponential series.
        "2": "你計入了來自 <span class=\"chem\">sin x</span> 的 <span class=\"chem\">-x^3/6</span>，但漏了指數級數中的 <span class=\"chem\">+u^3/3!</span>。",
        // EN (option D): Check the sign: <span class="chem">-1/6 + 1/6 = 0</span>, not <span class="chem">1/3</span>.
        "3": "檢查正負號：<span class=\"chem\">-1/6 + 1/6 = 0</span>，而非 <span class=\"chem\">1/3</span>。",
      },
    },

    // ── t5-4-q018 · short · challenge · AHL · AHL 5.18–5.19 · 8 marks
    "t5-4-q018": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx + 2xy = 1</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Using an integrating factor, show that <span class="chem">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>. <strong>[3 marks]</strong></p><p>(b) By using the Maclaurin series for <span class="chem">e^{t^2}</span> (or by implicit differentiation of the DE), find the Maclaurin series for <span class="chem">y(x)</span> up to and including the term in <span class="chem">x^5</span>. <strong>[5 marks]</strong></p>
      stem: "<p>考慮微分方程 <span class=\"chem\">dy/dx + 2xy = 1</span>，其中 <span class=\"chem\">y(0) = 0</span>。</p><p>(a) 利用積分因子，證明 (show that) <span class=\"chem\">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>。<strong>[3 分]</strong></p><p>(b) 利用 <span class=\"chem\">e^{t^2}</span> 的麥克勞林級數（或對微分方程作隱式求導），求 (find) <span class=\"chem\">y(x)</span> 展開至 <span class=\"chem\">x^5</span> 項（包括該項）的麥克勞林級數。<strong>[5 分]</strong></p>",
      hints: [
        // EN: Decode: (a) is a linear DE, so use an integrating factor. In (b), the solution is <span class="chem">e^{-x^2}</span> times an integral that cannot be found exactly, so write both factors as series and multiply.
        "解碼：(a) 是線性微分方程，所以用積分因子。在 (b) 中，解是 <span class=\"chem\">e^{-x^2}</span> 乘以一個無法精確求出的積分，所以把兩個因式都寫成級數再相乘。",
        // EN: In part (a), integrating <span class="chem">d/dt(y(t) e^{t^2}) = e^{t^2}</span> from <span class="chem">t = 0</span> to <span class="chem">t = x</span> immediately incorporates <span class="chem">y(0) = 0</span>.
        "在 (a) 部，將 <span class=\"chem\">d/dt(y(t) e^{t^2}) = e^{t^2}</span> 由 <span class=\"chem\">t = 0</span> 積分至 <span class=\"chem\">t = x</span>，即可直接代入 <span class=\"chem\">y(0) = 0</span>。",
        // EN: In part (b), you can either integrate the series for <span class="chem">e^{t^2}</span> and multiply by <span class="chem">e^{-x^2}</span>, or differentiate <span class="chem">y' = 1 - 2xy</span> repeatedly at <span class="chem">x = 0</span>.
        "在 (b) 部，你可將 <span class=\"chem\">e^{t^2}</span> 的級數逐項積分再乘以 <span class=\"chem\">e^{-x^2}</span>，或在 <span class=\"chem\">x = 0</span> 處對 <span class=\"chem\">y' = 1 - 2xy</span> 重複求導。",
      ],
      // EN: <p>(a) The integrating factor is <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>. Multiplying gives <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>. Integrating from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span> gives <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>.</p><p>(b) <span class="chem">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>. Multiplying by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> gives <span class="chem">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>.</p>
      answer: "<p>(a) 積分因子為 <span class=\"chem\">I(x) = e^{int 2x dx} = e^{x^2}</span>。乘以積分因子得 <span class=\"chem\">d/dx(y e^{x^2}) = e^{x^2}</span>。由 <span class=\"chem\">0</span> 積分至 <span class=\"chem\">x</span> 並代入 <span class=\"chem\">y(0) = 0</span>，得 <span class=\"chem\">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>。</p><p>(b) <span class=\"chem\">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>。乘以 <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span>，得 <span class=\"chem\">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>。</p>",
      markscheme: [
        // EN: M1: integrating factor <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>.
        "M1: 積分因子 <span class=\"chem\">I(x) = e^{int 2x dx} = e^{x^2}</span>。",
        // EN: A1: <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>.
        "A1: <span class=\"chem\">d/dx(y e^{x^2}) = e^{x^2}</span>。",
        // EN: A1: integrates from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span>: <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt</span>. AG: <span class="chem">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>; the given line itself earns no mark.
        "A1: 由 <span class=\"chem\">0</span> 積分至 <span class=\"chem\">x</span> 並代入 <span class=\"chem\">y(0) = 0</span>：<span class=\"chem\">y(x) e^{x^2} = int_0^x e^{t^2} dt</span>。AG：<span class=\"chem\">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>；寫出給定結果本身不得分。",
        // EN: M1: expands <span class="chem">e^{t^2} = 1 + t^2 + t^4/2 + ...</span> and integrates term by term to <span class="chem">x + x^3/3 + x^5/10</span> (or differentiates DE implicitly up to <span class="chem">y^{(5)}(0)</span>).
        "M1: 展開 <span class=\"chem\">e^{t^2} = 1 + t^2 + t^4/2 + ...</span> 並逐項積分得 <span class=\"chem\">x + x^3/3 + x^5/10</span>（或對微分方程作隱式求導直至 <span class=\"chem\">y^{(5)}(0)</span>）。",
        // EN: M1: multiplies by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> (or substitutes derivatives into Maclaurin formula).
        "M1: 乘以 <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span>（或將各階導數代入麥克勞林公式）。",
        // EN: A1: first term <span class="chem">x</span>.
        "A1: 首項 <span class=\"chem\">x</span>。",
        // EN: A1: <span class="chem">-(2/3)x^3</span>.
        "A1: <span class=\"chem\">-(2/3)x^3</span>。",
        // EN: A1: <span class="chem">(4/15)x^5</span>.
        "A1: <span class=\"chem\">(4/15)x^5</span>。",
      ],
    },

    // ── t5-4-q019 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q019": {
      // EN: <p>Use the Maclaurin series for <span class="chem">(1 + x)^p</span> to find the coefficient of <span class="chem">x^2</span> in the Maclaurin series of <span class="chem">f(x) = sqrt(1 + 4x)</span>.</p>
      stem: "<p>利用 <span class=\"chem\">(1 + x)^p</span> 的麥克勞林級數，求 (find) <span class=\"chem\">f(x) = sqrt(1 + 4x)</span> 的麥克勞林級數中 <span class=\"chem\">x^2</span> 的係數。</p>",
      hints: [
        // EN: Write <span class="chem">sqrt(1 + 4x) = (1 + u)^{1/2}</span> with <span class="chem">u = 4x</span>.
        "寫成 <span class=\"chem\">sqrt(1 + 4x) = (1 + u)^{1/2}</span>，其中 <span class=\"chem\">u = 4x</span>。",
        // EN: Use <span class="chem">(1 + u)^p = 1 + pu + (p(p - 1)/2!) u^2 + ...</span> with <span class="chem">p = 1/2</span>.
        "以 <span class=\"chem\">p = 1/2</span> 代入 <span class=\"chem\">(1 + u)^p = 1 + pu + (p(p - 1)/2!) u^2 + ...</span>。",
      ],
      // EN: <p>With <span class="chem">p = 1/2</span> and <span class="chem">u = 4x</span>, the <span class="chem">x^2</span> term is <span class="chem">((1/2)(-1/2)/2!)(4x)^2 = (-1/8)(16x^2) = -2x^2</span>, so the coefficient is <span class="chem">-2</span>. The series <span class="chem">1 + 2x - 2x^2 + ...</span> is valid for <span class="chem">|4x| &lt; 1</span>, that is <span class="chem">|x| &lt; 1/4</span>.</p>
      solution: "<p>以 <span class=\"chem\">p = 1/2</span> 及 <span class=\"chem\">u = 4x</span> 代入，<span class=\"chem\">x^2</span> 項為 <span class=\"chem\">((1/2)(-1/2)/2!)(4x)^2 = (-1/8)(16x^2) = -2x^2</span>，故係數為 <span class=\"chem\">-2</span>。級數 <span class=\"chem\">1 + 2x - 2x^2 + ...</span> 在 <span class=\"chem\">|4x| &lt; 1</span>，即 <span class=\"chem\">|x| &lt; 1/4</span> 時成立。</p>",
    },

    // ── t5-4-q020 · numeric · foundation · AHL · AHL 5.18 · 3 marks
    "t5-4-q020": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = sqrt(x + y)</span> with <span class="chem">y(1) = 2</span>. Use Euler’s method with step size <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1.5)</span>. Carry full calculator accuracy from one step to the next and give your answer correct to 3 significant figures.</p>
      stem: "<p>函數 <span class=\"chem\">y(x)</span> 滿足 <span class=\"chem\">dy/dx = sqrt(x + y)</span>，其中 <span class=\"chem\">y(1) = 2</span>。利用步長 <span class=\"chem\">h = 0.1</span> 的歐拉法估算 (estimate) <span class=\"chem\">y(1.5)</span>。每一步都保留計算機的完整精確度，並把答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Five steps take you from <span class="chem">x = 1</span> to <span class="chem">x = 1.5</span>. Each step is <span class="chem">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span>, <span class="chem">x_{n+1} = x_n + 0.1</span>.
        "五步就由 <span class=\"chem\">x = 1</span> 走到 <span class=\"chem\">x = 1.5</span>。每一步是 <span class=\"chem\">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span>、<span class=\"chem\">x_{n+1} = x_n + 0.1</span>。",
        // EN: On the GDC, store the values: start with <span class="chem">x = 1, y = 2</span>, then repeat “<span class="chem">y + 0.1 sqrt(x + y) -> y</span>, <span class="chem">x + 0.1 -> x</span>” five times. The first step gives <span class="chem">y_1 = 2 + 0.1 sqrt(3) = 2.1732…</span>
        "在 GDC 上儲存數值：先設 <span class=\"chem\">x = 1, y = 2</span>，然後重複「<span class=\"chem\">y + 0.1 sqrt(x + y) -> y</span>，<span class=\"chem\">x + 0.1 -> x</span>」五次。第一步得 <span class=\"chem\">y_1 = 2 + 0.1 sqrt(3) = 2.1732…</span>",
      ],
      // EN: <p>With <span class="chem">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span>:</p><p><span class="chem">x = 1.1: y_1 = 2.17321</span>; <span class="chem">x = 1.2: y_2 = 2.35413</span>; <span class="chem">x = 1.3: y_3 = 2.54265</span>; <span class="chem">x = 1.4: y_4 = 2.73868</span>; <span class="chem">x = 1.5: y_5 = 2.94211</span> (values shown to 5 d.p., full accuracy carried).</p><p>So <span class="chem">y(1.5) ≈ 2.94</span>.</p>
      solution: "<p>利用 <span class=\"chem\">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span>：</p><p><span class=\"chem\">x = 1.1: y_1 = 2.17321</span>；<span class=\"chem\">x = 1.2: y_2 = 2.35413</span>；<span class=\"chem\">x = 1.3: y_3 = 2.54265</span>；<span class=\"chem\">x = 1.4: y_4 = 2.73868</span>；<span class=\"chem\">x = 1.5: y_5 = 2.94211</span>（數值顯示至小數點後 5 位，計算時保留完整精確度）。</p><p>所以 <span class=\"chem\">y(1.5) ≈ 2.94</span>。</p>",
    },

    // ── t5-4-q021 · short · exam · AHL · AHL 5.18 · 12 marks
    "t5-4-q021": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx = x e^{-y}</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Use Euler’s method with step size <span class="chem">h = 0.2</span> to estimate <span class="chem">y(1)</span>. Write each <span class="chem">y_n</span> correct to 4 decimal places, but use full calculator accuracy in the next step. <strong>[4 marks]</strong></p><p>(b) Solve the differential equation to find <span class="chem">y</span> in terms of <span class="chem">x</span>. <strong>[4 marks]</strong></p><p>(c) Find the percentage error of your estimate in part (a). <strong>[2 marks]</strong></p><p>(d) By finding <span class="chem">d^2y/dx^2</span>, explain why the Euler estimate is an underestimate. <strong>[2 marks]</strong></p>
      stem: "<p>考慮微分方程 <span class=\"chem\">dy/dx = x e^{-y}</span>，其中 <span class=\"chem\">y(0) = 0</span>。</p><p>(a) 利用步長 <span class=\"chem\">h = 0.2</span> 的歐拉法估算 <span class=\"chem\">y(1)</span>。把每個 <span class=\"chem\">y_n</span> 寫成準確至小數點後 4 位，但在下一步使用計算機的完整精確度。<strong>[4 marks]</strong></p><p>(b) 解此微分方程，求 (Find) 以 <span class=\"chem\">x</span> 表示的 <span class=\"chem\">y</span>。<strong>[4 marks]</strong></p><p>(c) 求你在 (a) 部所得估算值的百分誤差。<strong>[2 marks]</strong></p><p>(d) 透過求 <span class=\"chem\">d^2y/dx^2</span>，解釋 (Explain) 為何歐拉法的估算值是低估。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a GDC Euler table, (b) is a separable DE, (c) compares the two, and (d) asks for the sign of the second derivative (concavity).
        "解碼：(a) 是用 GDC 列出歐拉法的表，(b) 是可分離變數微分方程，(c) 比較兩者，(d) 要求二階導數的正負（凹性）。",
        // EN: For (b), multiply both sides by <span class="chem">e^y</span>: <span class="chem">e^y (dy/dx) = x</span>.
        "在 (b) 部，兩邊乘以 <span class=\"chem\">e^y</span>：<span class=\"chem\">e^y (dy/dx) = x</span>。",
        // EN: For (d), differentiate <span class="chem">x e^{-y}</span> with the product rule and the chain rule, then substitute <span class="chem">dy/dx = x e^{-y}</span>.
        "在 (d) 部，用積法則和鏈式法則求 <span class=\"chem\">x e^{-y}</span> 的導數，然後代入 <span class=\"chem\">dy/dx = x e^{-y}</span>。",
      ],
      // EN: <p>(a) <span class="chem">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span>. Table: <span class="chem">x = 0.2: y_1 = 0</span>; <span class="chem">x = 0.4: y_2 = 0.0400</span>; <span class="chem">x = 0.6: y_3 = 0.1169</span>; <span class="chem">x = 0.8: y_4 = 0.2236</span>; <span class="chem">x = 1: y_5 = 0.3516</span>. So <span class="chem">y(1) ≈ 0.352</span>.</p><p>(b) <span class="chem">int e^y dy = int x dx => e^y = x^2/2 + C</span>. At <span class="chem">(0, 0)</span>, <span class="chem">C = 1</span>, so <span class="chem">y = ln(1 + x^2/2)</span>.</p><p>(c) Exact <span class="chem">y(1) = ln 1.5 = 0.405465…</span>. Percentage error <span class="chem">= |0.351566 - 0.405465| / 0.405465 × 100 ≈ 13.3%</span>.</p><p>(d) <span class="chem">d^2y/dx^2 = e^{-y} - x e^{-y} (dy/dx) = e^{-y}(1 - x^2 e^{-y})</span>. On the solution curve <span class="chem">x^2 e^{-y} = x^2/(1 + x^2/2) &lt; 1</span> for <span class="chem">0 &lt;= x &lt;= 1</span>, so <span class="chem">d^2y/dx^2 &gt; 0</span>: the curve is concave up, its tangent lines lie below it, and each Euler step lands below the curve.</p>
      answer: "<p>(a) <span class=\"chem\">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span>。列表：<span class=\"chem\">x = 0.2: y_1 = 0</span>；<span class=\"chem\">x = 0.4: y_2 = 0.0400</span>；<span class=\"chem\">x = 0.6: y_3 = 0.1169</span>；<span class=\"chem\">x = 0.8: y_4 = 0.2236</span>；<span class=\"chem\">x = 1: y_5 = 0.3516</span>。所以 <span class=\"chem\">y(1) ≈ 0.352</span>。</p><p>(b) <span class=\"chem\">int e^y dy = int x dx => e^y = x^2/2 + C</span>。在 <span class=\"chem\">(0, 0)</span>，<span class=\"chem\">C = 1</span>，所以 <span class=\"chem\">y = ln(1 + x^2/2)</span>。</p><p>(c) 準確值 <span class=\"chem\">y(1) = ln 1.5 = 0.405465…</span>。百分誤差 <span class=\"chem\">= |0.351566 - 0.405465| / 0.405465 × 100 ≈ 13.3%</span>。</p><p>(d) <span class=\"chem\">d^2y/dx^2 = e^{-y} - x e^{-y} (dy/dx) = e^{-y}(1 - x^2 e^{-y})</span>。在解曲線上，當 <span class=\"chem\">0 &lt;= x &lt;= 1</span> 時 <span class=\"chem\">x^2 e^{-y} = x^2/(1 + x^2/2) &lt; 1</span>，所以 <span class=\"chem\">d^2y/dx^2 &gt; 0</span>：曲線凹向上，其切線位於曲線下方，因此每一步歐拉法都落在曲線下方。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span> with <span class="chem">x_{n+1} = x_n + 0.2</span>.
        "M1: 使用 <span class=\"chem\">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span> 及 <span class=\"chem\">x_{n+1} = x_n + 0.2</span>。",
        // EN: A1: <span class="chem">y_1 = 0</span> and <span class="chem">y_2 = 0.0400</span>.
        "A1: <span class=\"chem\">y_1 = 0</span> 及 <span class=\"chem\">y_2 = 0.0400</span>。",
        // EN: A1: <span class="chem">y_3 = 0.1169</span> and <span class="chem">y_4 = 0.2236</span>.
        "A1: <span class=\"chem\">y_3 = 0.1169</span> 及 <span class=\"chem\">y_4 = 0.2236</span>。",
        // EN: A1: <span class="chem">y(1) ≈ 0.3516</span> (accept 0.352).
        "A1: <span class=\"chem\">y(1) ≈ 0.3516</span>（接受 0.352）。",
        // EN: M1: separates variables: <span class="chem">int e^y dy = int x dx</span>.
        "M1: 分離變數：<span class=\"chem\">int e^y dy = int x dx</span>。",
        // EN: A1: <span class="chem">e^y = x^2/2 + C</span>.
        "A1: <span class=\"chem\">e^y = x^2/2 + C</span>。",
        // EN: M1: uses <span class="chem">y(0) = 0</span> to get <span class="chem">C = 1</span>.
        "M1: 利用 <span class=\"chem\">y(0) = 0</span> 得 <span class=\"chem\">C = 1</span>。",
        // EN: A1: <span class="chem">y = ln(1 + x^2/2)</span>.
        "A1: <span class=\"chem\">y = ln(1 + x^2/2)</span>。",
        // EN: M1: exact value <span class="chem">ln 1.5 = 0.405…</span> used in <span class="chem">|approx - exact| / exact × 100</span>.
        "M1: 把準確值 <span class=\"chem\">ln 1.5 = 0.405…</span> 代入 <span class=\"chem\">|approx - exact| / exact × 100</span>。",
        // EN: A1: <span class="chem">13.3%</span>.
        "A1: <span class=\"chem\">13.3%</span>。",
        // EN: A1: <span class="chem">d^2y/dx^2 = e^{-y}(1 - x^2 e^{-y})</span> (or equivalent).
        "A1: <span class=\"chem\">d^2y/dx^2 = e^{-y}(1 - x^2 e^{-y})</span>（或等價式）。",
        // EN: R1: <span class="chem">d^2y/dx^2 &gt; 0</span> on <span class="chem">[0, 1]</span>, so the curve is concave up and the tangent steps lie below it.
        "R1: 在 <span class=\"chem\">[0, 1]</span> 上 <span class=\"chem\">d^2y/dx^2 &gt; 0</span>，所以曲線凹向上，切線步位於曲線下方。",
      ],
    },

    // ── t5-4-q022 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q022": {
      // EN: <p>A pie is taken out of an oven at <span class="chem">90</span> °C and left in a kitchen kept at <span class="chem">20</span> °C. Its temperature <span class="chem">T</span> °C after <span class="chem">t</span> minutes falls at a rate proportional to the difference between its temperature and the kitchen temperature. After 5 minutes the pie is at <span class="chem">70</span> °C. Find how many minutes after it leaves the oven the pie reaches <span class="chem">40</span> °C. Give your answer correct to 3 significant figures.</p>
      stem: "<p>一個批從焗爐取出時是 <span class=\"chem\">90</span> °C，然後放在保持 <span class=\"chem\">20</span> °C 的廚房裏。它在 <span class=\"chem\">t</span> 分鐘後的溫度 <span class=\"chem\">T</span> °C 下降的速率與它的溫度和廚房溫度之差成正比。5 分鐘後批的溫度是 <span class=\"chem\">70</span> °C。求 (Find) 批離開焗爐後多少分鐘達到 <span class=\"chem\">40</span> °C。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “rate proportional to the difference” means <span class="chem">dT/dt = -k(T - 20)</span> with <span class="chem">k &gt; 0</span>. This is a separable DE; use the two data points to find the constant and <span class="chem">k</span>.
        "解碼：「速率與差成正比」即 <span class=\"chem\">dT/dt = -k(T - 20)</span>，其中 <span class=\"chem\">k &gt; 0</span>。這是可分離變數微分方程；利用兩個數據點求常數及 <span class=\"chem\">k</span>。",
        // EN: Separating gives <span class="chem">ln|T - 20| = -kt + C</span>, so <span class="chem">T = 20 + 70 e^{-kt}</span>.
        "分離變數得 <span class=\"chem\">ln|T - 20| = -kt + C</span>，所以 <span class=\"chem\">T = 20 + 70 e^{-kt}</span>。",
        // EN: Use <span class="chem">T(5) = 70</span>: <span class="chem">50 = 70 e^{-5k}</span>, so <span class="chem">k = (1/5) ln 1.4</span>. Then solve <span class="chem">20 + 70 e^{-kt} = 40</span>.
        "利用 <span class=\"chem\">T(5) = 70</span>：<span class=\"chem\">50 = 70 e^{-5k}</span>，所以 <span class=\"chem\">k = (1/5) ln 1.4</span>。然後解 <span class=\"chem\">20 + 70 e^{-kt} = 40</span>。",
      ],
      // EN: <p><span class="chem">dT/dt = -k(T - 20) => int 1/(T - 20) dT = int -k dt => T = 20 + A e^{-kt}</span>. From <span class="chem">T(0) = 90</span>, <span class="chem">A = 70</span>. From <span class="chem">T(5) = 70</span>, <span class="chem">e^{-5k} = 5/7</span>, so <span class="chem">k = (1/5) ln(7/5) = 0.067294…</span>.</p><p>Then <span class="chem">70 e^{-kt} = 20 => t = ln(3.5)/k = 5 ln 3.5 / ln 1.4 ≈ 18.6</span> minutes.</p>
      solution: "<p><span class=\"chem\">dT/dt = -k(T - 20) => int 1/(T - 20) dT = int -k dt => T = 20 + A e^{-kt}</span>。由 <span class=\"chem\">T(0) = 90</span> 得 <span class=\"chem\">A = 70</span>。由 <span class=\"chem\">T(5) = 70</span> 得 <span class=\"chem\">e^{-5k} = 5/7</span>，所以 <span class=\"chem\">k = (1/5) ln(7/5) = 0.067294…</span>。</p><p>於是 <span class=\"chem\">70 e^{-kt} = 20 => t = ln(3.5)/k = 5 ln 3.5 / ln 1.4 ≈ 18.6</span> 分鐘。</p>",
    },

    // ── t5-4-q023 · short · exam · AHL · AHL 5.18 · 14 marks
    "t5-4-q023": {
      // EN: <p>The number of rabbits <span class="chem">N</span> on an island <span class="chem">t</span> years after 150 were released is modelled by <span class="chem">dN/dt = 0.4N(1 - N/2000)</span>, <span class="chem">N(0) = 150</span>.</p><p>(a) Show that <span class="chem">N = 2000 / (1 + A e^{-0.4t})</span>, and find the exact value of <span class="chem">A</span>. <strong>[5 marks]</strong></p><p>(b) Find the time at which the number of rabbits reaches 1500. <strong>[2 marks]</strong></p><p>(c) Find the value of <span class="chem">N</span> at which the population grows fastest, and the time at which this happens. <strong>[3 marks]</strong></p><p>(d) Use Euler’s method with <span class="chem">h = 0.5</span> to estimate <span class="chem">N(1)</span>, and find the percentage error of this estimate. Carry full calculator accuracy throughout. <strong>[4 marks]</strong></p>
      stem: "<p>在一個島上放生 150 隻兔子，<span class=\"chem\">t</span> 年後兔子的數目 <span class=\"chem\">N</span> 以 <span class=\"chem\">dN/dt = 0.4N(1 - N/2000)</span>、<span class=\"chem\">N(0) = 150</span> 作模型。</p><p>(a) 證明 (Show that) <span class=\"chem\">N = 2000 / (1 + A e^{-0.4t})</span>，並求 <span class=\"chem\">A</span> 的準確值。<strong>[5 marks]</strong></p><p>(b) 求兔子數目達到 1500 的時間。<strong>[2 marks]</strong></p><p>(c) 求族群增長最快時 <span class=\"chem\">N</span> 的值，以及發生這情況的時間。<strong>[3 marks]</strong></p><p>(d) 利用 <span class=\"chem\">h = 0.5</span> 的歐拉法估算 <span class=\"chem\">N(1)</span>，並求此估算值的百分誤差。全程保留計算機的完整精確度。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: this is the logistic model. (a) is a separable DE needing partial fractions; (c) means “maximise <span class="chem">dN/dt</span>”, not “maximise <span class="chem">N</span>”.
        "解碼：這是邏輯斯諦模型。(a) 是需要部分分式的可分離變數微分方程；(c) 的意思是「使 <span class=\"chem\">dN/dt</span> 最大」，而不是「使 <span class=\"chem\">N</span> 最大」。",
        // EN: Write <span class="chem">1/(N(1 - N/2000)) = 2000/(N(2000 - N))</span> and split it into partial fractions.
        "寫出 <span class=\"chem\">1/(N(1 - N/2000)) = 2000/(N(2000 - N))</span>，並把它分解為部分分式。",
        // EN: In (c), <span class="chem">dN/dt</span> as a function of <span class="chem">N</span> is a downward parabola: where is its vertex?
        "在 (c) 部，<span class=\"chem\">dN/dt</span> 作為 <span class=\"chem\">N</span> 的函數是一條開口向下的拋物線：它的頂點在哪裏？",
      ],
      // EN: <p>(a) <span class="chem">dN/dt = 0.4N(2000 - N)/2000</span>, so <span class="chem">int 2000/(N(2000 - N)) dN = int 0.4 dt</span>. Since <span class="chem">2000/(N(2000 - N)) = 1/N + 1/(2000 - N)</span>, <span class="chem">ln(N/(2000 - N)) = 0.4t + C</span>. So <span class="chem">(2000 - N)/N = A e^{-0.4t}</span>, giving <span class="chem">N = 2000/(1 + A e^{-0.4t})</span>. At <span class="chem">t = 0</span>: <span class="chem">150 = 2000/(1 + A)</span>, so <span class="chem">A = 37/3</span>.</p><p>(b) <span class="chem">1 + (37/3)e^{-0.4t} = 4/3 => e^{-0.4t} = 1/37 => t = ln(37)/0.4 ≈ 9.03</span> years.</p><p>(c) <span class="chem">dN/dt = 0.4N - 0.0002N^2</span> is a quadratic in <span class="chem">N</span> with its maximum at <span class="chem">N = 1000</span>. Then <span class="chem">(37/3)e^{-0.4t} = 1 => t = ln(37/3)/0.4 ≈ 6.28</span> years.</p><p>(d) <span class="chem">N_1 = 150 + 0.5(0.4)(150)(1 - 150/2000) = 177.75</span>; <span class="chem">N_2 = 177.75 + 0.5(0.4)(177.75)(1 - 177.75/2000) = 210.14…</span>. So <span class="chem">N(1) ≈ 210</span>. Exact <span class="chem">N(1) = 2000/(1 + (37/3)e^{-0.4}) = 215.81…</span>, so the percentage error is <span class="chem">≈ 2.63%</span>.</p>
      answer: "<p>(a) <span class=\"chem\">dN/dt = 0.4N(2000 - N)/2000</span>，所以 <span class=\"chem\">int 2000/(N(2000 - N)) dN = int 0.4 dt</span>。由於 <span class=\"chem\">2000/(N(2000 - N)) = 1/N + 1/(2000 - N)</span>，<span class=\"chem\">ln(N/(2000 - N)) = 0.4t + C</span>。所以 <span class=\"chem\">(2000 - N)/N = A e^{-0.4t}</span>，得 <span class=\"chem\">N = 2000/(1 + A e^{-0.4t})</span>。在 <span class=\"chem\">t = 0</span>：<span class=\"chem\">150 = 2000/(1 + A)</span>，所以 <span class=\"chem\">A = 37/3</span>。</p><p>(b) <span class=\"chem\">1 + (37/3)e^{-0.4t} = 4/3 => e^{-0.4t} = 1/37 => t = ln(37)/0.4 ≈ 9.03</span> 年。</p><p>(c) <span class=\"chem\">dN/dt = 0.4N - 0.0002N^2</span> 是 <span class=\"chem\">N</span> 的二次式，在 <span class=\"chem\">N = 1000</span> 時取得最大值。於是 <span class=\"chem\">(37/3)e^{-0.4t} = 1 => t = ln(37/3)/0.4 ≈ 6.28</span> 年。</p><p>(d) <span class=\"chem\">N_1 = 150 + 0.5(0.4)(150)(1 - 150/2000) = 177.75</span>；<span class=\"chem\">N_2 = 177.75 + 0.5(0.4)(177.75)(1 - 177.75/2000) = 210.14…</span>。所以 <span class=\"chem\">N(1) ≈ 210</span>。準確值 <span class=\"chem\">N(1) = 2000/(1 + (37/3)e^{-0.4}) = 215.81…</span>，所以百分誤差為 <span class=\"chem\">≈ 2.63%</span>。</p>",
      markscheme: [
        // EN: M1: separates variables: <span class="chem">int 1/(N(1 - N/2000)) dN = int 0.4 dt</span> (or equivalent).
        "M1: 分離變數：<span class=\"chem\">int 1/(N(1 - N/2000)) dN = int 0.4 dt</span>（或等價式）。",
        // EN: M1: uses partial fractions <span class="chem">1/N + 1/(2000 - N)</span>.
        "M1: 使用部分分式 <span class=\"chem\">1/N + 1/(2000 - N)</span>。",
        // EN: A1: <span class="chem">ln N - ln(2000 - N) = 0.4t + C</span>.
        "A1: <span class=\"chem\">ln N - ln(2000 - N) = 0.4t + C</span>。",
        // EN: A1: rearranges to <span class="chem">(2000 - N)/N = A e^{-0.4t}</span>. AG: <span class="chem">N = 2000/(1 + A e^{-0.4t})</span>; the given line itself earns no mark.
        "A1: 整理得 <span class=\"chem\">(2000 - N)/N = A e^{-0.4t}</span>。AG：<span class=\"chem\">N = 2000/(1 + A e^{-0.4t})</span>；寫出給定結果本身不得分。",
        // EN: A1: <span class="chem">A = 37/3</span> from <span class="chem">N(0) = 150</span>.
        "A1: 由 <span class=\"chem\">N(0) = 150</span> 得 <span class=\"chem\">A = 37/3</span>。",
        // EN: M1: sets <span class="chem">2000/(1 + (37/3)e^{-0.4t}) = 1500</span> (or uses a GDC intersection).
        "M1: 設 <span class=\"chem\">2000/(1 + (37/3)e^{-0.4t}) = 1500</span>（或用 GDC 求交點）。",
        // EN: A1: <span class="chem">t = 9.03</span> years.
        "A1: <span class=\"chem\">t = 9.03</span> 年。",
        // EN: R1: <span class="chem">dN/dt</span> is a quadratic in <span class="chem">N</span> (concave down) with vertex at the midpoint of its roots <span class="chem">0</span> and <span class="chem">2000</span>.
        "R1: <span class=\"chem\">dN/dt</span> 是 <span class=\"chem\">N</span> 的二次式（凹向下），頂點位於兩根 <span class=\"chem\">0</span> 與 <span class=\"chem\">2000</span> 的中點。",
        // EN: A1: <span class="chem">N = 1000</span>.
        "A1: <span class=\"chem\">N = 1000</span>。",
        // EN: A1: <span class="chem">t = 6.28</span> years.
        "A1: <span class=\"chem\">t = 6.28</span> 年。",
        // EN: M1: one correct Euler step: <span class="chem">N_1 = 177.75</span>.
        "M1: 一步正確的歐拉法：<span class=\"chem\">N_1 = 177.75</span>。",
        // EN: A1: <span class="chem">N(1) ≈ 210</span> (210.14).
        "A1: <span class=\"chem\">N(1) ≈ 210</span>（210.14）。",
        // EN: M1: exact <span class="chem">N(1) = 215.8…</span> used in the percentage error formula.
        "M1: 把準確值 <span class=\"chem\">N(1) = 215.8…</span> 代入百分誤差公式。",
        // EN: A1: <span class="chem">2.63%</span> (accept 2.69% from the rounded estimate 210).
        "A1: <span class=\"chem\">2.63%</span>（若用捨入後的估算值 210，接受 2.69%）。",
      ],
    },

    // ── t5-4-q024 · numeric · challenge · AHL · AHL 5.18 · 7 marks
    "t5-4-q024": {
      // EN: <p>A patient is given a drug through a drip. At time <span class="chem">t</span> hours after the drip starts, the drip delivers the drug at a rate of <span class="chem">4e^{-0.05t}</span> mg per hour, and the body removes the drug at a rate of <span class="chem">0.25A</span> mg per hour, where <span class="chem">A</span> mg is the amount of drug in the body. There is no drug in the body at the start. Find the greatest amount of the drug in the body, in mg, correct to 3 significant figures.</p>
      stem: "<p>一名病人經點滴接受藥物。點滴開始後 <span class=\"chem\">t</span> 小時，點滴以每小時 <span class=\"chem\">4e^{-0.05t}</span> mg 的速率輸入藥物，而身體以每小時 <span class=\"chem\">0.25A</span> mg 的速率排走藥物，其中 <span class=\"chem\">A</span> mg 是體內的藥量。開始時體內沒有藥物。求 (Find) 體內藥量的最大值（以 mg 為單位），準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: “rate in minus rate out” gives the DE <span class="chem">dA/dt = 4e^{-0.05t} - 0.25A</span>, <span class="chem">A(0) = 0</span>. It is linear, so use an integrating factor; then maximise <span class="chem">A(t)</span>.
        "解碼：「輸入速率減輸出速率」給出微分方程 <span class=\"chem\">dA/dt = 4e^{-0.05t} - 0.25A</span>、<span class=\"chem\">A(0) = 0</span>。它是線性的，所以用積分因子；然後使 <span class=\"chem\">A(t)</span> 最大。",
        // EN: Write <span class="chem">dA/dt + 0.25A = 4e^{-0.05t}</span>. The integrating factor is <span class="chem">e^{0.25t}</span>, so <span class="chem">d/dt(A e^{0.25t}) = 4e^{0.2t}</span>.
        "寫成 <span class=\"chem\">dA/dt + 0.25A = 4e^{-0.05t}</span>。積分因子為 <span class=\"chem\">e^{0.25t}</span>，所以 <span class=\"chem\">d/dt(A e^{0.25t}) = 4e^{0.2t}</span>。",
        // EN: You should get <span class="chem">A = 20(e^{-0.05t} - e^{-0.25t})</span>. Find its maximum with the GDC, or solve <span class="chem">dA/dt = 0</span>.
        "你應得到 <span class=\"chem\">A = 20(e^{-0.05t} - e^{-0.25t})</span>。用 GDC 求它的最大值，或解 <span class=\"chem\">dA/dt = 0</span>。",
      ],
      // EN: <p><strong>Decode:</strong> the amount changes at (rate in) − (rate out), so <span class="chem">dA/dt = 4e^{-0.05t} - 0.25A</span>, a linear first-order DE; “greatest amount” means maximise its solution.</p><p>Integrating factor <span class="chem">e^{0.25t}</span>: <span class="chem">d/dt(A e^{0.25t}) = 4e^{0.2t} => A e^{0.25t} = 20e^{0.2t} + C</span>. With <span class="chem">A(0) = 0</span>, <span class="chem">C = -20</span>, so <span class="chem">A = 20(e^{-0.05t} - e^{-0.25t})</span>.</p><p><span class="chem">dA/dt = 0 => 0.05e^{-0.05t} = 0.25e^{-0.25t} => e^{0.2t} = 5 => t = 5 ln 5 ≈ 8.05</span> h. Then <span class="chem">A = 20(5^{-1/4} - 5^{-5/4}) = 16 × 5^{-1/4} ≈ 10.7</span> mg.</p>
      solution: "<p><strong>解碼：</strong>藥量的變化率是（輸入速率）−（輸出速率），所以 <span class=\"chem\">dA/dt = 4e^{-0.05t} - 0.25A</span>，這是一階線性微分方程；「最大藥量」即求其解的最大值。</p><p>積分因子 <span class=\"chem\">e^{0.25t}</span>：<span class=\"chem\">d/dt(A e^{0.25t}) = 4e^{0.2t} => A e^{0.25t} = 20e^{0.2t} + C</span>。由 <span class=\"chem\">A(0) = 0</span> 得 <span class=\"chem\">C = -20</span>，所以 <span class=\"chem\">A = 20(e^{-0.05t} - e^{-0.25t})</span>。</p><p><span class=\"chem\">dA/dt = 0 => 0.05e^{-0.05t} = 0.25e^{-0.25t} => e^{0.2t} = 5 => t = 5 ln 5 ≈ 8.05</span> 小時。於是 <span class=\"chem\">A = 20(5^{-1/4} - 5^{-5/4}) = 16 × 5^{-1/4} ≈ 10.7</span> mg。</p>",
    },

    // ── t5-4-q025 · short · exam · AHL · AHL 5.19 · 7 marks
    "t5-4-q025": {
      // EN: <p>(a) Use the Maclaurin series for <span class="chem">e^x</span> to write down the Maclaurin series for <span class="chem">e^{-x^2}</span> up to and including the term in <span class="chem">x^6</span>. <strong>[2 marks]</strong></p><p>(b) Hence find an approximate value for <span class="chem">int_0^{0.8} e^{-x^2} dx</span>, giving your answer correct to 4 decimal places. <strong>[3 marks]</strong></p><p>(c) Use your GDC to find the percentage error of your approximation in part (b). <strong>[2 marks]</strong></p>
      stem: "<p>(a) 利用 <span class=\"chem\">e^x</span> 的麥克勞林級數，寫出 (Write down) <span class=\"chem\">e^{-x^2}</span> 展開至 <span class=\"chem\">x^6</span> 項（包括該項）的麥克勞林級數。<strong>[2 marks]</strong></p><p>(b) 由此 (Hence) 求 <span class=\"chem\">int_0^{0.8} e^{-x^2} dx</span> 的近似值，答案準確至小數點後 4 位。<strong>[3 marks]</strong></p><p>(c) 利用你的 GDC 求你在 (b) 部所得近似值的百分誤差。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: you cannot integrate <span class="chem">e^{-x^2}</span> by hand, so turn it into a polynomial first and integrate that.
        "解碼：你不能用手積分 <span class=\"chem\">e^{-x^2}</span>，所以先把它變成多項式，再積分該多項式。",
        // EN: Put <span class="chem">u = -x^2</span> in <span class="chem">e^u = 1 + u + u^2/2! + u^3/3! + …</span>.
        "把 <span class=\"chem\">u = -x^2</span> 代入 <span class=\"chem\">e^u = 1 + u + u^2/2! + u^3/3! + …</span>。",
        // EN: Percentage error <span class="chem">= |approximate - exact| / exact × 100</span>, with the GDC value as “exact”.
        "百分誤差 <span class=\"chem\">= |approximate - exact| / exact × 100</span>，以 GDC 的值作為「準確值」。",
      ],
      // EN: <p>(a) Replacing <span class="chem">x</span> by <span class="chem">-x^2</span>: <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - x^6/6 + …</span></p><p>(b) <span class="chem">int_0^{0.8} (1 - x^2 + x^4/2 - x^6/6) dx = [x - x^3/3 + x^5/10 - x^7/42]_0^{0.8} = 0.8 - 0.170667 + 0.032768 - 0.004993 = 0.6571</span> (4 d.p.).</p><p>(c) GDC: <span class="chem">int_0^{0.8} e^{-x^2} dx = 0.657670…</span>. Percentage error <span class="chem">= |0.657108 - 0.657670| / 0.657670 × 100 ≈ 0.0854%</span>.</p>
      answer: "<p>(a) 以 <span class=\"chem\">-x^2</span> 代替 <span class=\"chem\">x</span>：<span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - x^6/6 + …</span></p><p>(b) <span class=\"chem\">int_0^{0.8} (1 - x^2 + x^4/2 - x^6/6) dx = [x - x^3/3 + x^5/10 - x^7/42]_0^{0.8} = 0.8 - 0.170667 + 0.032768 - 0.004993 = 0.6571</span>（小數點後 4 位）。</p><p>(c) GDC：<span class=\"chem\">int_0^{0.8} e^{-x^2} dx = 0.657670…</span>。百分誤差 <span class=\"chem\">= |0.657108 - 0.657670| / 0.657670 × 100 ≈ 0.0854%</span>。</p>",
      markscheme: [
        // EN: M1: substitutes <span class="chem">-x^2</span> for <span class="chem">x</span> in the series for <span class="chem">e^x</span>.
        "M1: 在 <span class=\"chem\">e^x</span> 的級數中以 <span class=\"chem\">-x^2</span> 代替 <span class=\"chem\">x</span>。",
        // EN: A1: <span class="chem">1 - x^2 + x^4/2 - x^6/6</span>.
        "A1: <span class=\"chem\">1 - x^2 + x^4/2 - x^6/6</span>。",
        // EN: M1: integrates the polynomial term by term.
        "M1: 把多項式逐項積分。",
        // EN: A1: <span class="chem">[x - x^3/3 + x^5/10 - x^7/42]_0^{0.8}</span>.
        "A1: <span class=\"chem\">[x - x^3/3 + x^5/10 - x^7/42]_0^{0.8}</span>。",
        // EN: A1: <span class="chem">0.6571</span>.
        "A1: <span class=\"chem\">0.6571</span>。",
        // EN: A1: GDC value <span class="chem">0.657670…</span>.
        "A1: GDC 值 <span class=\"chem\">0.657670…</span>。",
        // EN: A1: percentage error <span class="chem">0.0854%</span> (accept 0.085%, or 0.0866% from the rounded estimate 0.6571).
        "A1: 百分誤差 <span class=\"chem\">0.0854%</span>（接受 0.085%；若用捨入後的估算值 0.6571，接受 0.0866%）。",
      ],
    },

    // ── t5-4-q026 · numeric · challenge · AHL · AHL 5.19 · 5 marks
    "t5-4-q026": {
      // EN: <p>An engineer models small angles by replacing <span class="chem">cos x</span> with the quadratic <span class="chem">1 - x^2/2</span>, where <span class="chem">x</span> is in radians. She will accept the model only while the error <span class="chem">|cos x - (1 - x^2/2)|</span> is less than <span class="chem">0.001</span>. Find the largest value of <span class="chem">a</span> such that the error is less than <span class="chem">0.001</span> for all <span class="chem">0 &lt; x &lt; a</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>一名工程師以二次式 <span class=\"chem\">1 - x^2/2</span> 代替 <span class=\"chem\">cos x</span> 來為小角度建模，其中 <span class=\"chem\">x</span> 以弧度為單位。只有在誤差 <span class=\"chem\">|cos x - (1 - x^2/2)|</span> 小於 <span class=\"chem\">0.001</span> 時，她才接受這個模型。求 (Find) 使所有 <span class=\"chem\">0 &lt; x &lt; a</span> 的誤差都小於 <span class=\"chem\">0.001</span> 的 <span class=\"chem\">a</span> 的最大值。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: <span class="chem">1 - x^2/2</span> is the degree-2 Maclaurin polynomial of <span class="chem">cos x</span>. You need the first positive <span class="chem">x</span> at which the error reaches <span class="chem">0.001</span>.
        "解碼：<span class=\"chem\">1 - x^2/2</span> 是 <span class=\"chem\">cos x</span> 的 2 次麥克勞林多項式。你需要求誤差首次達到 <span class=\"chem\">0.001</span> 時的最小正數 <span class=\"chem\">x</span>。",
        // EN: The next term of the series is <span class="chem">x^4/24</span>, so the error is about <span class="chem">x^4/24</span>. This gives a first estimate <span class="chem">x ≈ (0.024)^{1/4}</span>.
        "級數的下一項是 <span class=\"chem\">x^4/24</span>，所以誤差約為 <span class=\"chem\">x^4/24</span>。這給出初步估算 <span class=\"chem\">x ≈ (0.024)^{1/4}</span>。",
        // EN: Now solve <span class="chem">cos x - 1 + x^2/2 = 0.001</span> with the GDC (graph both sides and find the intersection). The error increases for <span class="chem">x &gt; 0</span>, so the first intersection is the answer.
        "現在用 GDC 解 <span class=\"chem\">cos x - 1 + x^2/2 = 0.001</span>（畫出兩邊的圖像並求交點）。當 <span class=\"chem\">x &gt; 0</span> 時誤差遞增，所以第一個交點就是答案。",
      ],
      // EN: <p><strong>Decode:</strong> “largest <span class="chem">a</span> with error below 0.001 for all <span class="chem">0 &lt; x &lt; a</span>” means the first positive solution of error = 0.001. Here <span class="chem">1 - x^2/2</span> is the Maclaurin polynomial of degree 2.</p><p>Since <span class="chem">cos x = 1 - x^2/2 + x^4/24 - …</span>, the error <span class="chem">cos x - (1 - x^2/2) ≈ x^4/24</span>, which is positive and increasing for small <span class="chem">x &gt; 0</span>. Estimate: <span class="chem">x^4/24 = 0.001 => x ≈ 0.394</span>.</p><p>GDC: solving <span class="chem">cos x - 1 + x^2/2 = 0.001</span> gives <span class="chem">x = 0.394108…</span>, so <span class="chem">a ≈ 0.394</span>.</p>
      solution: "<p><strong>解碼：</strong>「對所有 <span class=\"chem\">0 &lt; x &lt; a</span>，誤差都低於 0.001 的最大 <span class=\"chem\">a</span>」即誤差 = 0.001 的第一個正數解。這裏 <span class=\"chem\">1 - x^2/2</span> 是 2 次麥克勞林多項式。</p><p>由於 <span class=\"chem\">cos x = 1 - x^2/2 + x^4/24 - …</span>，誤差 <span class=\"chem\">cos x - (1 - x^2/2) ≈ x^4/24</span>，當 <span class=\"chem\">x &gt; 0</span> 很小時誤差為正且遞增。估算：<span class=\"chem\">x^4/24 = 0.001 => x ≈ 0.394</span>。</p><p>GDC：解 <span class=\"chem\">cos x - 1 + x^2/2 = 0.001</span> 得 <span class=\"chem\">x = 0.394108…</span>，所以 <span class=\"chem\">a ≈ 0.394</span>。</p>",
    },

    // ── t5-4-q027 · short · exam · AHL · AHL 5.18 · 10 marks
    "t5-4-q027": {
      // EN: <p>Consider <span class="chem">dy/dx = y/x + x/y</span> for <span class="chem">x &gt; 0, y &gt; 0</span>, with <span class="chem">y(1) = 1</span>.</p><p>(a) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1.5)</span>. Carry full calculator accuracy and give your answer correct to 4 significant figures. <strong>[3 marks]</strong></p><p>(b) Use the substitution <span class="chem">y = vx</span> to show that <span class="chem">y = x sqrt(2 ln x + 1)</span>. <strong>[5 marks]</strong></p><p>(c) Find the percentage error of your estimate in part (a), using its unrounded value. <strong>[2 marks]</strong></p>
      stem: "<p>考慮 <span class=\"chem\">dy/dx = y/x + x/y</span>，其中 <span class=\"chem\">x &gt; 0, y &gt; 0</span>，且 <span class=\"chem\">y(1) = 1</span>。</p><p>(a) 利用 <span class=\"chem\">h = 0.1</span> 的歐拉法估算 <span class=\"chem\">y(1.5)</span>。保留計算機的完整精確度，並把答案準確至 4 位有效數字。<strong>[3 marks]</strong></p><p>(b) 利用代換 <span class=\"chem\">y = vx</span> 證明 (Show that) <span class=\"chem\">y = x sqrt(2 ln x + 1)</span>。<strong>[5 marks]</strong></p><p>(c) 使用 (a) 部估算值未經捨入的值，求其百分誤差。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the right-hand side depends only on <span class="chem">y/x</span>, so the DE is homogeneous: (b) is the <span class="chem">y = vx</span> method, and (a) is a GDC Euler table.
        "解碼：右邊只取決於 <span class=\"chem\">y/x</span>，所以這是齊次微分方程：(b) 用 <span class=\"chem\">y = vx</span> 方法，而 (a) 是用 GDC 列出歐拉法的表。",
        // EN: After substituting, the <span class="chem">v</span> terms cancel and you are left with <span class="chem">x(dv/dx) = 1/v</span>.
        "代換後，<span class=\"chem\">v</span> 項互相抵消，剩下 <span class=\"chem\">x(dv/dx) = 1/v</span>。",
      ],
      // EN: <p>(a) <span class="chem">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span>: <span class="chem">y_1 = 1.2</span>, <span class="chem">y_2 = 1.40076</span>, <span class="chem">y_3 = 1.60316</span>, <span class="chem">y_4 = 1.80757</span>, <span class="chem">y_5 = 2.01413</span>. So <span class="chem">y(1.5) ≈ 2.014</span>.</p><p>(b) <span class="chem">y = vx => dy/dx = v + x(dv/dx)</span>. Then <span class="chem">v + x(dv/dx) = v + 1/v => v (dv/dx) = 1/x</span>. Integrating, <span class="chem">v^2/2 = ln x + C</span>. At <span class="chem">(1, 1)</span>, <span class="chem">v = 1</span>, so <span class="chem">C = 1/2</span>. Then <span class="chem">y^2/x^2 = 2 ln x + 1</span>, and since <span class="chem">x, y &gt; 0</span>, <span class="chem">y = x sqrt(2 ln x + 1)</span>.</p><p>(c) Exact <span class="chem">y(1.5) = 1.5 sqrt(2 ln 1.5 + 1) = 2.018562…</span>. Percentage error <span class="chem">= |2.014129 - 2.018562| / 2.018562 × 100 ≈ 0.220%</span>.</p>
      answer: "<p>(a) <span class=\"chem\">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span>：<span class=\"chem\">y_1 = 1.2</span>、<span class=\"chem\">y_2 = 1.40076</span>、<span class=\"chem\">y_3 = 1.60316</span>、<span class=\"chem\">y_4 = 1.80757</span>、<span class=\"chem\">y_5 = 2.01413</span>。所以 <span class=\"chem\">y(1.5) ≈ 2.014</span>。</p><p>(b) <span class=\"chem\">y = vx => dy/dx = v + x(dv/dx)</span>。於是 <span class=\"chem\">v + x(dv/dx) = v + 1/v => v (dv/dx) = 1/x</span>。積分得 <span class=\"chem\">v^2/2 = ln x + C</span>。在 <span class=\"chem\">(1, 1)</span>，<span class=\"chem\">v = 1</span>，所以 <span class=\"chem\">C = 1/2</span>。於是 <span class=\"chem\">y^2/x^2 = 2 ln x + 1</span>，而由於 <span class=\"chem\">x, y &gt; 0</span>，<span class=\"chem\">y = x sqrt(2 ln x + 1)</span>。</p><p>(c) 準確值 <span class=\"chem\">y(1.5) = 1.5 sqrt(2 ln 1.5 + 1) = 2.018562…</span>。百分誤差 <span class=\"chem\">= |2.014129 - 2.018562| / 2.018562 × 100 ≈ 0.220%</span>。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span>.
        "M1: 使用 <span class=\"chem\">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span>。",
        // EN: A1: at least two correct intermediate values (e.g. <span class="chem">y_1 = 1.2</span>, <span class="chem">y_2 = 1.4008</span>).
        "A1: 至少兩個正確的中間值（例如 <span class=\"chem\">y_1 = 1.2</span>、<span class=\"chem\">y_2 = 1.4008</span>）。",
        // EN: A1: <span class="chem">y(1.5) ≈ 2.014</span>.
        "A1: <span class=\"chem\">y(1.5) ≈ 2.014</span>。",
        // EN: M1: substitutes <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>.
        "M1: 代入 <span class=\"chem\">y = vx</span> 及 <span class=\"chem\">dy/dx = v + x(dv/dx)</span>。",
        // EN: A1: <span class="chem">x(dv/dx) = 1/v</span>.
        "A1: <span class=\"chem\">x(dv/dx) = 1/v</span>。",
        // EN: M1: separates and integrates: <span class="chem">int v dv = int (1/x) dx</span>.
        "M1: 分離變數並積分：<span class=\"chem\">int v dv = int (1/x) dx</span>。",
        // EN: A1: <span class="chem">v^2/2 = ln x + C</span>.
        "A1: <span class=\"chem\">v^2/2 = ln x + C</span>。",
        // EN: A1: <span class="chem">C = 1/2</span> from <span class="chem">y(1) = 1</span>, giving <span class="chem">y^2 = x^2(2 ln x + 1)</span>. AG: <span class="chem">y = x sqrt(2 ln x + 1)</span>; the given line itself earns no mark.
        "A1: 由 <span class=\"chem\">y(1) = 1</span> 得 <span class=\"chem\">C = 1/2</span>，從而 <span class=\"chem\">y^2 = x^2(2 ln x + 1)</span>。AG：<span class=\"chem\">y = x sqrt(2 ln x + 1)</span>；寫出給定結果本身不得分。",
        // EN: M1: exact value <span class="chem">2.0186</span> used in the percentage error formula.
        "M1: 把準確值 <span class=\"chem\">2.0186</span> 代入百分誤差公式。",
        // EN: A1: <span class="chem">0.220%</span> (accept 0.226% from the rounded value 2.014).
        "A1: <span class=\"chem\">0.220%</span>（若用捨入後的值 2.014，接受 0.226%）。",
      ],
    },

    // ── t5-4-q028 · short · exam · AHL · AHL 5.18, 5.19 · 11 marks
    "t5-4-q028": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = x^2 + y^2</span> and <span class="chem">y(0) = 1</span>.</p><p>(a) Find the Maclaurin series for <span class="chem">y(x)</span> up to and including the term in <span class="chem">x^3</span>. <strong>[5 marks]</strong></p><p>(b) Hence estimate <span class="chem">y(0.2)</span>. <strong>[1 mark]</strong></p><p>(c) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(0.2)</span>. <strong>[3 marks]</strong></p><p>(d) A numerical solver gives <span class="chem">y(0.2) = 1.2530</span> to 4 decimal places. State which estimate is more accurate, and give a reason for the size of the Euler error. <strong>[2 marks]</strong></p>
      stem: "<p>函數 <span class=\"chem\">y(x)</span> 滿足 <span class=\"chem\">dy/dx = x^2 + y^2</span> 及 <span class=\"chem\">y(0) = 1</span>。</p><p>(a) 求 (Find) <span class=\"chem\">y(x)</span> 展開至 <span class=\"chem\">x^3</span> 項（包括該項）的麥克勞林級數。<strong>[5 marks]</strong></p><p>(b) 由此 (Hence) 估算 <span class=\"chem\">y(0.2)</span>。<strong>[1 mark]</strong></p><p>(c) 利用 <span class=\"chem\">h = 0.1</span> 的歐拉法估算 <span class=\"chem\">y(0.2)</span>。<strong>[3 marks]</strong></p><p>(d) 數值求解器給出 <span class=\"chem\">y(0.2) = 1.2530</span>（準確至小數點後 4 位）。述明 (State) 哪個估算值較準確，並就歐拉法誤差的大小給出理由。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a Maclaurin series built from the DE by repeated implicit differentiation; (c) is Euler with two steps.
        "解碼：(a) 是由微分方程重複隱式求導建立的麥克勞林級數；(c) 是兩步的歐拉法。",
        // EN: Differentiate <span class="chem">y' = x^2 + y^2</span> with respect to <span class="chem">x</span>: <span class="chem">d/dx(y^2) = 2y y'</span>.
        "將 <span class=\"chem\">y' = x^2 + y^2</span> 對 <span class=\"chem\">x</span> 求導：<span class=\"chem\">d/dx(y^2) = 2y y'</span>。",
        // EN: For <span class="chem">y'''</span>, differentiate <span class="chem">2y y'</span> with the product rule.
        "求 <span class=\"chem\">y'''</span> 時，用積法則對 <span class=\"chem\">2y y'</span> 求導。",
      ],
      // EN: <p>(a) <span class="chem">y'(0) = 0 + 1 = 1</span>. <span class="chem">y'' = 2x + 2y y'</span>, so <span class="chem">y''(0) = 2</span>. <span class="chem">y''' = 2 + 2(y')^2 + 2y y''</span>, so <span class="chem">y'''(0) = 2 + 2 + 4 = 8</span>. Hence <span class="chem">y ≈ 1 + x + (2/2!)x^2 + (8/3!)x^3 = 1 + x + x^2 + (4/3)x^3</span>.</p><p>(b) <span class="chem">y(0.2) ≈ 1 + 0.2 + 0.04 + (4/3)(0.008) = 1.2507</span> (to 4 d.p.).</p><p>(c) <span class="chem">y_1 = 1 + 0.1(0 + 1) = 1.1</span>; <span class="chem">y_2 = 1.1 + 0.1(0.01 + 1.21) = 1.222</span>.</p><p>(d) The series estimate (error about 0.002) is more accurate than Euler (error about 0.031). Euler follows tangent lines; the solution is concave up (<span class="chem">y'' &gt; 0</span>) and steep, so the tangent steps fall below the curve, and with only two large steps the error builds up.</p>
      answer: "<p>(a) <span class=\"chem\">y'(0) = 0 + 1 = 1</span>。<span class=\"chem\">y'' = 2x + 2y y'</span>，所以 <span class=\"chem\">y''(0) = 2</span>。<span class=\"chem\">y''' = 2 + 2(y')^2 + 2y y''</span>，所以 <span class=\"chem\">y'''(0) = 2 + 2 + 4 = 8</span>。因此 <span class=\"chem\">y ≈ 1 + x + (2/2!)x^2 + (8/3!)x^3 = 1 + x + x^2 + (4/3)x^3</span>。</p><p>(b) <span class=\"chem\">y(0.2) ≈ 1 + 0.2 + 0.04 + (4/3)(0.008) = 1.2507</span>（準確至小數點後 4 位）。</p><p>(c) <span class=\"chem\">y_1 = 1 + 0.1(0 + 1) = 1.1</span>；<span class=\"chem\">y_2 = 1.1 + 0.1(0.01 + 1.21) = 1.222</span>。</p><p>(d) 級數估算值（誤差約 0.002）比歐拉法（誤差約 0.031）較準確。歐拉法沿切線前進；解曲線凹向上（<span class=\"chem\">y'' &gt; 0</span>）而且很陡，所以切線步落在曲線下方，而只用兩大步，誤差就會累積。</p>",
      markscheme: [
        // EN: A1: <span class="chem">y'(0) = 1</span>.
        "A1: <span class=\"chem\">y'(0) = 1</span>。",
        // EN: M1: differentiates implicitly: <span class="chem">y'' = 2x + 2y y'</span>.
        "M1: 隱式求導：<span class=\"chem\">y'' = 2x + 2y y'</span>。",
        // EN: A1: <span class="chem">y''(0) = 2</span>.
        "A1: <span class=\"chem\">y''(0) = 2</span>。",
        // EN: A1: <span class="chem">y'''(0) = 8</span> (from <span class="chem">y''' = 2 + 2(y')^2 + 2y y''</span>).
        "A1: <span class=\"chem\">y'''(0) = 8</span>（由 <span class=\"chem\">y''' = 2 + 2(y')^2 + 2y y''</span>）。",
        // EN: A1: <span class="chem">1 + x + x^2 + (4/3)x^3</span>.
        "A1: <span class=\"chem\">1 + x + x^2 + (4/3)x^3</span>。",
        // EN: A1: <span class="chem">y(0.2) ≈ 1.2507</span> (accept 1.25).
        "A1: <span class=\"chem\">y(0.2) ≈ 1.2507</span>（接受 1.25）。",
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.1(x_n^2 + y_n^2)</span>.
        "M1: 使用 <span class=\"chem\">y_{n+1} = y_n + 0.1(x_n^2 + y_n^2)</span>。",
        // EN: A1: <span class="chem">y_1 = 1.1</span>.
        "A1: <span class=\"chem\">y_1 = 1.1</span>。",
        // EN: A1: <span class="chem">y_2 = 1.222</span>.
        "A1: <span class=\"chem\">y_2 = 1.222</span>。",
        // EN: A1: states that the Maclaurin estimate is more accurate.
        "A1: 述明麥克勞林估算值較準確。",
        // EN: R1: the solution is concave up, so the Euler tangent steps lie below the curve (underestimate), and the error grows with the step size.
        "R1: 解曲線凹向上，所以歐拉法的切線步位於曲線下方（低估），而且誤差隨步長增大。",
      ],
    },

    // ── t5-4-q029 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q029": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = (1 + y^2) e^{-x}</span> and <span class="chem">y(0) = 0</span>. Find <span class="chem">y(2)</span>, giving your answer correct to 3 significant figures.</p>
      stem: "<p>函數 <span class=\"chem\">y(x)</span> 滿足 <span class=\"chem\">dy/dx = (1 + y^2) e^{-x}</span> 及 <span class=\"chem\">y(0) = 0</span>。求 (Find) <span class=\"chem\">y(2)</span>，答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: The DE is separable: <span class="chem">int 1/(1 + y^2) dy = int e^{-x} dx</span>.
        "這個微分方程是可分離變數的：<span class=\"chem\">int 1/(1 + y^2) dy = int e^{-x} dx</span>。",
        // EN: This gives <span class="chem">arctan y = -e^{-x} + C</span>. Use <span class="chem">y(0) = 0</span> to find <span class="chem">C</span>.
        "這給出 <span class=\"chem\">arctan y = -e^{-x} + C</span>。利用 <span class=\"chem\">y(0) = 0</span> 求 <span class=\"chem\">C</span>。",
        // EN: Make sure your GDC is in radian mode when you evaluate <span class="chem">tan</span>.
        "計算 <span class=\"chem\">tan</span> 時，確保你的 GDC 處於弧度模式。",
      ],
      // EN: <p><span class="chem">int 1/(1 + y^2) dy = int e^{-x} dx => arctan y = -e^{-x} + C</span>. At <span class="chem">(0, 0)</span>: <span class="chem">0 = -1 + C => C = 1</span>. So <span class="chem">y = tan(1 - e^{-x})</span>, and <span class="chem">y(2) = tan(1 - e^{-2}) ≈ 1.17</span> (radians).</p>
      solution: "<p><span class=\"chem\">int 1/(1 + y^2) dy = int e^{-x} dx => arctan y = -e^{-x} + C</span>。在 <span class=\"chem\">(0, 0)</span>：<span class=\"chem\">0 = -1 + C => C = 1</span>。所以 <span class=\"chem\">y = tan(1 - e^{-x})</span>，而 <span class=\"chem\">y(2) = tan(1 - e^{-2}) ≈ 1.17</span>（弧度）。</p>",
    },

    // ── t5-4-q030 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q030": {
      // EN: <p>An upright cylindrical water tank has internal radius <span class="chem">0.8</span> m. Water leaks from a small hole in its base, so that the volume of water in the tank decreases at a rate of <span class="chem">0.04 sqrt(h)</span> m<sup>3</sup> per minute, where <span class="chem">h</span> m is the depth of the water. At first the water is <span class="chem">1.8</span> m deep. Find the time, in minutes, for the depth of the water to fall to half its initial value. Give your answer correct to 3 significant figures.</p>
      stem: "<p>一個直立圓柱形水缸的內半徑為 <span class=\"chem\">0.8</span> m。水從缸底的一個小孔漏出，使缸內水的體積以每分鐘 <span class=\"chem\">0.04 sqrt(h)</span> m<sup>3</sup> 的速率減少，其中 <span class=\"chem\">h</span> m 是水深。開始時水深 <span class=\"chem\">1.8</span> m。求 (Find) 水深下降至初始值一半所需的時間（以分鐘為單位）。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: the rate is given for the volume <span class="chem">V</span>, but the question is about the depth <span class="chem">h</span>. Write <span class="chem">V = pi (0.8)^2 h</span>, turn <span class="chem">dV/dt</span> into <span class="chem">dh/dt</span>, then solve a separable DE.
        "解碼：題目給出的是體積 <span class=\"chem\">V</span> 的變化率，但問題問的是水深 <span class=\"chem\">h</span>。寫出 <span class=\"chem\">V = pi (0.8)^2 h</span>，把 <span class=\"chem\">dV/dt</span> 變成 <span class=\"chem\">dh/dt</span>，然後解一個可分離變數微分方程。",
        // EN: <span class="chem">dV/dt = 0.64 pi (dh/dt) = -0.04 sqrt(h)</span>, so <span class="chem">dh/dt = -sqrt(h)/(16 pi)</span>.
        "<span class=\"chem\">dV/dt = 0.64 pi (dh/dt) = -0.04 sqrt(h)</span>，所以 <span class=\"chem\">dh/dt = -sqrt(h)/(16 pi)</span>。",
        // EN: Separate: <span class="chem">int h^{-1/2} dh = int -1/(16 pi) dt</span>, giving <span class="chem">2 sqrt(h) = -t/(16 pi) + C</span>. Find <span class="chem">C</span> from <span class="chem">h(0) = 1.8</span>, then set <span class="chem">h = 0.9</span>.
        "分離變數：<span class=\"chem\">int h^{-1/2} dh = int -1/(16 pi) dt</span>，得 <span class=\"chem\">2 sqrt(h) = -t/(16 pi) + C</span>。由 <span class=\"chem\">h(0) = 1.8</span> 求 <span class=\"chem\">C</span>，然後設 <span class=\"chem\">h = 0.9</span>。",
      ],
      // EN: <p><strong>Decode:</strong> the given rate is <span class="chem">dV/dt</span> (and it is a decrease, so it is negative); the question asks about <span class="chem">h</span>, and “half its initial value” means <span class="chem">h = 0.9</span>.</p><p><span class="chem">V = 0.64 pi h => 0.64 pi (dh/dt) = -0.04 sqrt(h) => dh/dt = -sqrt(h)/(16 pi)</span>.</p><p><span class="chem">int h^{-1/2} dh = -int 1/(16 pi) dt => 2 sqrt(h) = 2 sqrt(1.8) - t/(16 pi)</span>.</p><p>At <span class="chem">h = 0.9</span>: <span class="chem">t = 32 pi (sqrt(1.8) - sqrt(0.9)) ≈ 39.5</span> minutes.</p>
      solution: "<p><strong>解碼：</strong>給出的變化率是 <span class=\"chem\">dV/dt</span>（而且是減少，所以是負數）；問題問的是 <span class=\"chem\">h</span>，而「初始值的一半」即 <span class=\"chem\">h = 0.9</span>。</p><p><span class=\"chem\">V = 0.64 pi h => 0.64 pi (dh/dt) = -0.04 sqrt(h) => dh/dt = -sqrt(h)/(16 pi)</span>。</p><p><span class=\"chem\">int h^{-1/2} dh = -int 1/(16 pi) dt => 2 sqrt(h) = 2 sqrt(1.8) - t/(16 pi)</span>。</p><p>在 <span class=\"chem\">h = 0.9</span>：<span class=\"chem\">t = 32 pi (sqrt(1.8) - sqrt(0.9)) ≈ 39.5</span> 分鐘。</p>",
    },

    // ── t5-4-q031 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q031": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx + y = sin x</span> and <span class="chem">y(0) = 1</span>. You may use the result <span class="chem">int e^x sin x dx = (1/2) e^x (sin x - cos x) + C</span>. Find the smallest positive value of <span class="chem">x</span> for which <span class="chem">y = 0</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>函數 <span class=\"chem\">y(x)</span> 滿足 <span class=\"chem\">dy/dx + y = sin x</span> 及 <span class=\"chem\">y(0) = 1</span>。你可使用結果 <span class=\"chem\">int e^x sin x dx = (1/2) e^x (sin x - cos x) + C</span>。求 (Find) 使 <span class=\"chem\">y = 0</span> 成立的 <span class=\"chem\">x</span> 的最小正值。答案準確至 3 位有效數字。</p>",
      hints: [
        // EN: The integrating factor is <span class="chem">e^{int 1 dx} = e^x</span>, so <span class="chem">d/dx(y e^x) = e^x sin x</span>.
        "積分因子為 <span class=\"chem\">e^{int 1 dx} = e^x</span>，所以 <span class=\"chem\">d/dx(y e^x) = e^x sin x</span>。",
        // EN: Use the given integral, then <span class="chem">y(0) = 1</span>. You should reach <span class="chem">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span>.
        "使用給定的積分，然後 <span class=\"chem\">y(0) = 1</span>。你應得到 <span class=\"chem\">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span>。",
        // EN: Graph <span class="chem">y</span> on the GDC for <span class="chem">x &gt; 0</span> and find the first zero.
        "在 GDC 上畫出 <span class=\"chem\">x &gt; 0</span> 範圍內 <span class=\"chem\">y</span> 的圖像，並求第一個零點。",
      ],
      // EN: <p>With the integrating factor <span class="chem">e^x</span>: <span class="chem">y e^x = (1/2)e^x(sin x - cos x) + C</span>. At <span class="chem">x = 0</span>: <span class="chem">1 = -1/2 + C => C = 3/2</span>. So <span class="chem">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span>.</p><p>GDC: the first positive zero is <span class="chem">x = 3.96715… ≈ 3.97</span>.</p>
      solution: "<p>利用積分因子 <span class=\"chem\">e^x</span>：<span class=\"chem\">y e^x = (1/2)e^x(sin x - cos x) + C</span>。在 <span class=\"chem\">x = 0</span>：<span class=\"chem\">1 = -1/2 + C => C = 3/2</span>。所以 <span class=\"chem\">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span>。</p><p>GDC：第一個正零點是 <span class=\"chem\">x = 3.96715… ≈ 3.97</span>。</p>",
    },

    // ── t5-4-q032 · short · challenge · AHL · AHL 5.18 · 12 marks
    "t5-4-q032": {
      // EN: <p>A skydiver jumps from a helicopter that is not moving. Her downward speed <span class="chem">v</span> m s<sup>−1</sup> after <span class="chem">t</span> seconds is modelled by <span class="chem">dv/dt = 9 - 0.0036v^2</span>, with <span class="chem">v(0) = 0</span>.</p><p>(a) Write down the speed she approaches as <span class="chem">t</span> increases (her terminal speed). <strong>[1 mark]</strong></p><p>(b) Show that <span class="chem">int 1/(2500 - v^2) dv = (1/100) ln((50 + v)/(50 - v)) + C</span> for <span class="chem">0 &lt;= v &lt; 50</span>. <strong>[3 marks]</strong></p><p>(c) Hence show that <span class="chem">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span>. <strong>[4 marks]</strong></p><p>(d) Find the time taken to reach 90% of her terminal speed. <strong>[2 marks]</strong></p><p>(e) Find the distance she falls in this time. <strong>[2 marks]</strong></p>
      stem: "<p>一名跳傘員從一架靜止的直升機跳下。她在 <span class=\"chem\">t</span> 秒後的向下速率 <span class=\"chem\">v</span> m s<sup>−1</sup> 以 <span class=\"chem\">dv/dt = 9 - 0.0036v^2</span> 作模型，其中 <span class=\"chem\">v(0) = 0</span>。</p><p>(a) 寫出 (Write down) 當 <span class=\"chem\">t</span> 增加時她趨近的速率（她的終端速率）。<strong>[1 mark]</strong></p><p>(b) 證明 (Show that) 對 <span class=\"chem\">0 &lt;= v &lt; 50</span>，<span class=\"chem\">int 1/(2500 - v^2) dv = (1/100) ln((50 + v)/(50 - v)) + C</span>。<strong>[3 marks]</strong></p><p>(c) 由此證明 (Hence show that) <span class=\"chem\">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span>。<strong>[4 marks]</strong></p><p>(d) 求達到她終端速率的 90% 所需的時間。<strong>[2 marks]</strong></p><p>(e) 求她在這段時間內下降的距離。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: “terminal speed” means the speed at which <span class="chem">dv/dt = 0</span>; “distance fallen” means integrate the speed.
        "解碼：「終端速率」指 <span class=\"chem\">dv/dt = 0</span> 時的速率；「下降的距離」即對速率積分。",
        // EN: Take out the factor: <span class="chem">9 - 0.0036v^2 = 0.0036(2500 - v^2)</span>.
        "抽出因數：<span class=\"chem\">9 - 0.0036v^2 = 0.0036(2500 - v^2)</span>。",
        // EN: For (e), use the GDC to integrate <span class="chem">v(t)</span> from <span class="chem">0</span> to your answer to (d) (use its unrounded value).
        "在 (e) 部，用 GDC 把 <span class=\"chem\">v(t)</span> 由 <span class=\"chem\">0</span> 積分至你在 (d) 部的答案（使用未經捨入的值）。",
      ],
      // EN: <p><strong>Decode:</strong> “terminal speed” is where the speed stops changing, <span class="chem">dv/dt = 0</span>; the DE is separable with a partial-fraction integral; distance is the integral of speed.</p><p>(a) <span class="chem">9 - 0.0036v^2 = 0 => v = 50</span> m s<sup>−1</sup>.</p><p>(b) <span class="chem">1/(2500 - v^2) = 1/((50 - v)(50 + v)) = (1/100)(1/(50 - v) + 1/(50 + v))</span>. Integrating: <span class="chem">(1/100)(-ln(50 - v) + ln(50 + v)) + C = (1/100) ln((50 + v)/(50 - v)) + C</span>.</p><p>(c) <span class="chem">dv/dt = 0.0036(2500 - v^2)</span>, so <span class="chem">int 1/(2500 - v^2) dv = int 0.0036 dt</span>: <span class="chem">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span>, and <span class="chem">v(0) = 0</span> gives <span class="chem">C = 0</span>. So <span class="chem">(50 + v)/(50 - v) = e^{0.36t}</span>, <span class="chem">v(1 + e^{0.36t}) = 50(e^{0.36t} - 1)</span>, and dividing top and bottom by <span class="chem">e^{0.36t}</span> gives the result.</p><p>(d) <span class="chem">v = 45 => (95/5) = e^{0.36t} => t = ln(19)/0.36 ≈ 8.18</span> s.</p><p>(e) <span class="chem">int_0^{8.179} v dt ≈ 231</span> m (GDC).</p>
      answer: "<p><strong>解碼：</strong>「終端速率」是速率不再改變之處，即 <span class=\"chem\">dv/dt = 0</span>；這個微分方程是可分離變數的，要用部分分式積分；距離是速率的積分。</p><p>(a) <span class=\"chem\">9 - 0.0036v^2 = 0 => v = 50</span> m s<sup>−1</sup>。</p><p>(b) <span class=\"chem\">1/(2500 - v^2) = 1/((50 - v)(50 + v)) = (1/100)(1/(50 - v) + 1/(50 + v))</span>。積分：<span class=\"chem\">(1/100)(-ln(50 - v) + ln(50 + v)) + C = (1/100) ln((50 + v)/(50 - v)) + C</span>。</p><p>(c) <span class=\"chem\">dv/dt = 0.0036(2500 - v^2)</span>，所以 <span class=\"chem\">int 1/(2500 - v^2) dv = int 0.0036 dt</span>：<span class=\"chem\">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span>，而 <span class=\"chem\">v(0) = 0</span> 給出 <span class=\"chem\">C = 0</span>。所以 <span class=\"chem\">(50 + v)/(50 - v) = e^{0.36t}</span>，<span class=\"chem\">v(1 + e^{0.36t}) = 50(e^{0.36t} - 1)</span>，再把分子分母同除以 <span class=\"chem\">e^{0.36t}</span> 即得結果。</p><p>(d) <span class=\"chem\">v = 45 => (95/5) = e^{0.36t} => t = ln(19)/0.36 ≈ 8.18</span> s。</p><p>(e) <span class=\"chem\">int_0^{8.179} v dt ≈ 231</span> m（GDC）。</p>",
      markscheme: [
        // EN: A1: <span class="chem">v = 50</span> m s<sup>−1</sup>.
        "A1: <span class=\"chem\">v = 50</span> m s<sup>−1</sup>。",
        // EN: M1: factorises <span class="chem">2500 - v^2 = (50 - v)(50 + v)</span> and writes partial fractions.
        "M1: 把 <span class=\"chem\">2500 - v^2 = (50 - v)(50 + v)</span> 因式分解並寫成部分分式。",
        // EN: A1: <span class="chem">(1/100)(1/(50 - v) + 1/(50 + v))</span>.
        "A1: <span class=\"chem\">(1/100)(1/(50 - v) + 1/(50 + v))</span>。",
        // EN: A1: integrates to <span class="chem">(1/100)(ln(50 + v) - ln(50 - v))</span>, including the sign from <span class="chem">int 1/(50 - v) dv = -ln(50 - v)</span>. AG: <span class="chem">(1/100) ln((50 + v)/(50 - v)) + C</span>; the given line itself earns no mark.
        "A1: 積分得 <span class=\"chem\">(1/100)(ln(50 + v) - ln(50 - v))</span>，包括來自 <span class=\"chem\">int 1/(50 - v) dv = -ln(50 - v)</span> 的符號。AG：<span class=\"chem\">(1/100) ln((50 + v)/(50 - v)) + C</span>；寫出給定結果本身不得分。",
        // EN: M1: writes <span class="chem">dv/dt = 0.0036(2500 - v^2)</span> and separates variables.
        "M1: 寫出 <span class=\"chem\">dv/dt = 0.0036(2500 - v^2)</span> 並分離變數。",
        // EN: A1: <span class="chem">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span> with <span class="chem">C = 0</span>.
        "A1: <span class=\"chem\">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span>，其中 <span class=\"chem\">C = 0</span>。",
        // EN: M1: exponentiates: <span class="chem">(50 + v)/(50 - v) = e^{0.36t}</span>.
        "M1: 取指數：<span class=\"chem\">(50 + v)/(50 - v) = e^{0.36t}</span>。",
        // EN: A1: rearranges to <span class="chem">v = 50(e^{0.36t} - 1)/(e^{0.36t} + 1)</span>. AG: <span class="chem">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span>; the given line itself earns no mark.
        "A1: 整理得 <span class=\"chem\">v = 50(e^{0.36t} - 1)/(e^{0.36t} + 1)</span>。AG：<span class=\"chem\">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span>；寫出給定結果本身不得分。",
        // EN: M1: sets <span class="chem">v = 45</span>.
        "M1: 設 <span class=\"chem\">v = 45</span>。",
        // EN: A1: <span class="chem">t = 8.18</span> s.
        "A1: <span class=\"chem\">t = 8.18</span> s。",
        // EN: M1: distance <span class="chem">= int_0^{8.18} v dt</span>.
        "M1: 距離 <span class=\"chem\">= int_0^{8.18} v dt</span>。",
        // EN: A1: <span class="chem">231</span> m.
        "A1: <span class=\"chem\">231</span> m。",
      ],
    },

    // ── t5-4-q033 · numeric · exam · AHL · AHL 5.19 · 5 marks
    "t5-4-q033": {
      // EN: <p>The cube root of 10 can be written as <span class="chem">10^{1/3} = 2(1 + 1/4)^{1/3}</span>. Use the first three terms of the Maclaurin series for <span class="chem">(1 + x)^{1/3}</span> to estimate <span class="chem">10^{1/3}</span>. Find the percentage error of this estimate compared with the GDC value of <span class="chem">10^{1/3}</span>, correct to 3 significant figures.</p>
      stem: "<p>10 的立方根可寫成 <span class=\"chem\">10^{1/3} = 2(1 + 1/4)^{1/3}</span>。利用 <span class=\"chem\">(1 + x)^{1/3}</span> 的麥克勞林級數的首三項估算 <span class=\"chem\">10^{1/3}</span>。求此估算值與 GDC 所得 <span class=\"chem\">10^{1/3}</span> 的值相比的百分誤差，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: you need two numbers, the series estimate and the calculator value, and then the percentage error between them. The factor 2 appears because <span class="chem">10 = 8 × 1.25</span>.
        "解碼：你需要兩個數：級數估算值和計算機的值，然後求兩者之間的百分誤差。出現因數 2 是因為 <span class=\"chem\">10 = 8 × 1.25</span>。",
        // EN: Use <span class="chem">(1 + x)^p = 1 + px + (p(p - 1)/2!)x^2 + …</span> with <span class="chem">p = 1/3</span> and <span class="chem">x = 1/4</span>.
        "使用 <span class=\"chem\">(1 + x)^p = 1 + px + (p(p - 1)/2!)x^2 + …</span>，其中 <span class=\"chem\">p = 1/3</span> 及 <span class=\"chem\">x = 1/4</span>。",
        // EN: You should get the estimate <span class="chem">2(1 + 1/12 - 1/144) = 2.15278</span>. Compare it with the GDC value of <span class="chem">10^{1/3}</span>.
        "你應得到估算值 <span class=\"chem\">2(1 + 1/12 - 1/144) = 2.15278</span>。把它與 GDC 所得 <span class=\"chem\">10^{1/3}</span> 的值比較。",
      ],
      // EN: <p><span class="chem">(1 + x)^{1/3} ≈ 1 + (1/3)x + ((1/3)(-2/3)/2)x^2 = 1 + x/3 - x^2/9</span>. With <span class="chem">x = 1/4</span>: <span class="chem">1 + 1/12 - 1/144 = 155/144</span>, so the estimate is <span class="chem">2 × 155/144 = 2.152778</span>.</p><p>GDC: <span class="chem">10^{1/3} = 2.154435</span>. Percentage error <span class="chem">= |2.152778 - 2.154435| / 2.154435 × 100 ≈ 0.0769%</span>.</p>
      solution: "<p><span class=\"chem\">(1 + x)^{1/3} ≈ 1 + (1/3)x + ((1/3)(-2/3)/2)x^2 = 1 + x/3 - x^2/9</span>。利用 <span class=\"chem\">x = 1/4</span>：<span class=\"chem\">1 + 1/12 - 1/144 = 155/144</span>，所以估算值為 <span class=\"chem\">2 × 155/144 = 2.152778</span>。</p><p>GDC：<span class=\"chem\">10^{1/3} = 2.154435</span>。百分誤差 <span class=\"chem\">= |2.152778 - 2.154435| / 2.154435 × 100 ≈ 0.0769%</span>。</p>",
    },

    // ── t5-4-q034 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q034": {
      // EN: <p>The differential equation <span class="chem">dy/dx = -y</span>, <span class="chem">y(0) = 1</span>, is solved approximately with Euler’s method, using <span class="chem">n</span> equal steps from <span class="chem">x = 0</span> to <span class="chem">x = 1</span>. Find the least value of <span class="chem">n</span> for which the Euler estimate of <span class="chem">y(1)</span> is within <span class="chem">0.005</span> of the exact value.</p>
      stem: "<p>微分方程 <span class=\"chem\">dy/dx = -y</span>、<span class=\"chem\">y(0) = 1</span> 用歐拉法近似求解，由 <span class=\"chem\">x = 0</span> 至 <span class=\"chem\">x = 1</span> 分成 <span class=\"chem\">n</span> 個相等的步。求 (Find) 使 <span class=\"chem\">y(1)</span> 的歐拉估算值與準確值相差在 <span class=\"chem\">0.005</span> 以內的 <span class=\"chem\">n</span> 的最小值。</p>",
      hints: [
        // EN: Decode: you need a formula for the Euler estimate in terms of <span class="chem">n</span> (with <span class="chem">h = 1/n</span>), the exact value <span class="chem">y(1)</span>, and then the least integer <span class="chem">n</span> that meets the condition.
        "解碼：你需要以 <span class=\"chem\">n</span> 表示的歐拉估算值公式（其中 <span class=\"chem\">h = 1/n</span>）、準確值 <span class=\"chem\">y(1)</span>，然後求符合條件的最小整數 <span class=\"chem\">n</span>。",
        // EN: Each step is <span class="chem">y_{k+1} = y_k + h(-y_k) = (1 - h)y_k</span>, so after <span class="chem">n</span> steps the estimate is <span class="chem">(1 - 1/n)^n</span>. The exact solution is <span class="chem">y = e^{-x}</span>.
        "每一步是 <span class=\"chem\">y_{k+1} = y_k + h(-y_k) = (1 - h)y_k</span>，所以 <span class=\"chem\">n</span> 步後估算值為 <span class=\"chem\">(1 - 1/n)^n</span>。準確解為 <span class=\"chem\">y = e^{-x}</span>。",
        // EN: Tabulate <span class="chem">e^{-1} - (1 - 1/n)^n</span> on the GDC and find the first <span class="chem">n</span> for which it is less than <span class="chem">0.005</span>.
        "在 GDC 上把 <span class=\"chem\">e^{-1} - (1 - 1/n)^n</span> 列表，並求使它小於 <span class=\"chem\">0.005</span> 的第一個 <span class=\"chem\">n</span>。",
      ],
      // EN: <p><strong>Decode:</strong> Euler’s steps here form a geometric sequence, so the estimate has a closed form in <span class="chem">n</span>; “least <span class="chem">n</span>” means search a GDC table.</p><p><span class="chem">y_{k+1} = (1 - 1/n)y_k => y_n = (1 - 1/n)^n</span>. Exact: <span class="chem">y(1) = e^{-1} = 0.367879…</span>.</p><p>GDC table of <span class="chem">e^{-1} - (1 - 1/n)^n</span>: <span class="chem">n = 37</span> gives <span class="chem">0.005028…</span> (too big), <span class="chem">n = 38</span> gives <span class="chem">0.004894…</span>. So the least <span class="chem">n</span> is <span class="chem">38</span>.</p>
      solution: "<p><strong>解碼：</strong>這裏歐拉法的各步構成一個等比數列，所以估算值有以 <span class=\"chem\">n</span> 表示的封閉形式；「最小的 <span class=\"chem\">n</span>」即在 GDC 表中搜尋。</p><p><span class=\"chem\">y_{k+1} = (1 - 1/n)y_k => y_n = (1 - 1/n)^n</span>。準確值：<span class=\"chem\">y(1) = e^{-1} = 0.367879…</span>。</p><p><span class=\"chem\">e^{-1} - (1 - 1/n)^n</span> 的 GDC 表：<span class=\"chem\">n = 37</span> 給出 <span class=\"chem\">0.005028…</span>（太大），<span class=\"chem\">n = 38</span> 給出 <span class=\"chem\">0.004894…</span>。所以最小的 <span class=\"chem\">n</span> 是 <span class=\"chem\">38</span>。</p>",
    },

    // ── t5-4-q035 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q035": {
      // EN: <p>Since <span class="chem">arctan(1/sqrt(3)) = pi/6</span>, it follows that <span class="chem">pi = 6 arctan(1/sqrt(3))</span>. Use the first four non-zero terms of the Maclaurin series for <span class="chem">arctan x</span> to find an estimate for <span class="chem">pi</span>, correct to 5 significant figures.</p>
      stem: "<p>由於 <span class=\"chem\">arctan(1/sqrt(3)) = pi/6</span>，可推得 <span class=\"chem\">pi = 6 arctan(1/sqrt(3))</span>。利用 <span class=\"chem\">arctan x</span> 的麥克勞林級數的首四個非零項，求 (Find) <span class=\"chem\">pi</span> 的估算值，準確至 5 位有效數字。</p>",
      hints: [
        // EN: The first four non-zero terms are <span class="chem">x - x^3/3 + x^5/5 - x^7/7</span>.
        "首四個非零項是 <span class=\"chem\">x - x^3/3 + x^5/5 - x^7/7</span>。",
        // EN: Substitute <span class="chem">x = 1/sqrt(3)</span> (store it in the GDC), then multiply the result by 6.
        "代入 <span class=\"chem\">x = 1/sqrt(3)</span>（把它儲存在 GDC 中），然後把結果乘以 6。",
      ],
      // EN: <p>With <span class="chem">x = 1/sqrt(3) = 0.577350…</span>: <span class="chem">x - x^3/3 + x^5/5 - x^7/7 = 0.577350 - 0.064150 + 0.012830 - 0.003055 = 0.522975…</span>. Multiplying by 6 gives <span class="chem">pi ≈ 3.1379</span> (5 s.f.).</p>
      solution: "<p>利用 <span class=\"chem\">x = 1/sqrt(3) = 0.577350…</span>：<span class=\"chem\">x - x^3/3 + x^5/5 - x^7/7 = 0.577350 - 0.064150 + 0.012830 - 0.003055 = 0.522975…</span>。乘以 6 得 <span class=\"chem\">pi ≈ 3.1379</span>（5 位有效數字）。</p>",
    },

    // ── t5-4-q036 · short · challenge · AHL · AHL 5.18 · 11 marks
    "t5-4-q036": {
      // EN: <p>A cup of coffee at <span class="chem">85</span> °C is placed in a room whose heating has just been switched on. The room temperature <span class="chem">t</span> minutes later is <span class="chem">(18 + 0.5t)</span> °C. The coffee’s temperature <span class="chem">T</span> °C changes at a rate equal to <span class="chem">0.2</span> times the difference between the room temperature and the coffee temperature.</p><p>(a) Show that <span class="chem">dT/dt + 0.2T = 3.6 + 0.1t</span>. <strong>[1 mark]</strong></p><p>(b) Use an integrating factor to show that <span class="chem">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span>. <strong>[6 marks]</strong></p><p>(c) Find the time at which the coffee reaches <span class="chem">50</span> °C. <strong>[2 marks]</strong></p><p>(d) Find the time at which the coffee and the room are at the same temperature. <strong>[2 marks]</strong></p>
      stem: "<p>一杯 <span class=\"chem\">85</span> °C 的咖啡放在一個剛開啟暖氣的房間裏。<span class=\"chem\">t</span> 分鐘後的室溫是 <span class=\"chem\">(18 + 0.5t)</span> °C。咖啡的溫度 <span class=\"chem\">T</span> °C 的變化率等於室溫與咖啡溫度之差的 <span class=\"chem\">0.2</span> 倍。</p><p>(a) 證明 (Show that) <span class=\"chem\">dT/dt + 0.2T = 3.6 + 0.1t</span>。<strong>[1 mark]</strong></p><p>(b) 利用積分因子證明 <span class=\"chem\">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span>。<strong>[6 marks]</strong></p><p>(c) 求咖啡達到 <span class=\"chem\">50</span> °C 的時間。<strong>[2 marks]</strong></p><p>(d) 求咖啡與房間溫度相同的時間。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: “rate equal to 0.2 times (room − coffee)” gives <span class="chem">dT/dt = 0.2(18 + 0.5t - T)</span>. Because the room temperature depends on <span class="chem">t</span>, use the integrating factor method.
        "解碼：「變化率等於 0.2 乘以（室溫 − 咖啡溫度）」給出 <span class=\"chem\">dT/dt = 0.2(18 + 0.5t - T)</span>。由於室溫取決於 <span class=\"chem\">t</span>，要用積分因子法。",
        // EN: The integrating factor is <span class="chem">e^{0.2t}</span>. You need <span class="chem">int t e^{0.2t} dt</span> by parts, with <span class="chem">u = t</span>.
        "積分因子為 <span class=\"chem\">e^{0.2t}</span>。你需要用分部積分法求 <span class=\"chem\">int t e^{0.2t} dt</span>，其中 <span class=\"chem\">u = t</span>。",
        // EN: For (d), set <span class="chem">T = 18 + 0.5t</span>: the <span class="chem">0.5t</span> terms cancel.
        "在 (d) 部，設 <span class=\"chem\">T = 18 + 0.5t</span>：<span class=\"chem\">0.5t</span> 項互相抵消。",
      ],
      // EN: <p><strong>Decode:</strong> the room temperature is not constant, so this is not the usual separable cooling model: it becomes a linear DE that needs an integrating factor and integration by parts.</p><p>(a) <span class="chem">dT/dt = 0.2((18 + 0.5t) - T) = 3.6 + 0.1t - 0.2T</span>, which rearranges to the result.</p><p>(b) IF <span class="chem">= e^{0.2t}</span>: <span class="chem">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>. <span class="chem">int 3.6e^{0.2t} dt = 18e^{0.2t}</span>; by parts, <span class="chem">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>. So <span class="chem">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>, <span class="chem">T = 15.5 + 0.5t + C e^{-0.2t}</span>, and <span class="chem">T(0) = 85</span> gives <span class="chem">C = 69.5</span>.</p><p>(c) GDC: <span class="chem">15.5 + 0.5t + 69.5e^{-0.2t} = 50 => t ≈ 3.78</span> minutes.</p><p>(d) <span class="chem">T - (18 + 0.5t) = 69.5e^{-0.2t} - 2.5 = 0 => t = 5 ln(27.8) ≈ 16.6</span> minutes.</p>
      answer: "<p><strong>解碼：</strong>室溫不是常數，所以這不是一般的可分離變數冷卻模型：它變成一個需要積分因子和分部積分法的線性微分方程。</p><p>(a) <span class=\"chem\">dT/dt = 0.2((18 + 0.5t) - T) = 3.6 + 0.1t - 0.2T</span>，整理即得結果。</p><p>(b) 積分因子 <span class=\"chem\">= e^{0.2t}</span>：<span class=\"chem\">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>。<span class=\"chem\">int 3.6e^{0.2t} dt = 18e^{0.2t}</span>；用分部積分法，<span class=\"chem\">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>。所以 <span class=\"chem\">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>，<span class=\"chem\">T = 15.5 + 0.5t + C e^{-0.2t}</span>，而 <span class=\"chem\">T(0) = 85</span> 給出 <span class=\"chem\">C = 69.5</span>。</p><p>(c) GDC：<span class=\"chem\">15.5 + 0.5t + 69.5e^{-0.2t} = 50 => t ≈ 3.78</span> 分鐘。</p><p>(d) <span class=\"chem\">T - (18 + 0.5t) = 69.5e^{-0.2t} - 2.5 = 0 => t = 5 ln(27.8) ≈ 16.6</span> 分鐘。</p>",
      markscheme: [
        // EN: A1: writes <span class="chem">dT/dt = 0.2(18 + 0.5t - T)</span> and expands. AG: <span class="chem">dT/dt + 0.2T = 3.6 + 0.1t</span>; the given line itself earns no mark.
        "A1: 寫出 <span class=\"chem\">dT/dt = 0.2(18 + 0.5t - T)</span> 並展開。AG：<span class=\"chem\">dT/dt + 0.2T = 3.6 + 0.1t</span>；寫出給定結果本身不得分。",
        // EN: M1: integrating factor <span class="chem">e^{int 0.2 dt} = e^{0.2t}</span>.
        "M1: 積分因子 <span class=\"chem\">e^{int 0.2 dt} = e^{0.2t}</span>。",
        // EN: A1: <span class="chem">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>.
        "A1: <span class=\"chem\">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>。",
        // EN: M1: uses integration by parts on <span class="chem">int t e^{0.2t} dt</span>.
        "M1: 對 <span class=\"chem\">int t e^{0.2t} dt</span> 使用分部積分法。",
        // EN: A1: <span class="chem">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>.
        "A1: <span class=\"chem\">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>。",
        // EN: A1: <span class="chem">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>.
        "A1: <span class=\"chem\">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>。",
        // EN: A1: <span class="chem">C = 69.5</span> from <span class="chem">T(0) = 85</span>. AG: <span class="chem">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span>; the given line itself earns no mark.
        "A1: 由 <span class=\"chem\">T(0) = 85</span> 得 <span class=\"chem\">C = 69.5</span>。AG：<span class=\"chem\">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span>；寫出給定結果本身不得分。",
        // EN: M1: sets <span class="chem">T = 50</span> and solves with the GDC.
        "M1: 設 <span class=\"chem\">T = 50</span> 並用 GDC 求解。",
        // EN: A1: <span class="chem">t = 3.78</span> minutes.
        "A1: <span class=\"chem\">t = 3.78</span> 分鐘。",
        // EN: M1: sets <span class="chem">T = 18 + 0.5t</span>, i.e. <span class="chem">69.5e^{-0.2t} = 2.5</span>.
        "M1: 設 <span class=\"chem\">T = 18 + 0.5t</span>，即 <span class=\"chem\">69.5e^{-0.2t} = 2.5</span>。",
        // EN: A1: <span class="chem">t = 16.6</span> minutes.
        "A1: <span class=\"chem\">t = 16.6</span> 分鐘。",
      ],
    },

    // ── t5-4-q037 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q037": {
      // EN: <p>In a chemical reaction, the amount <span class="chem">x</span> grams of product formed after <span class="chem">t</span> minutes satisfies <span class="chem">dx/dt = 0.02(5 - x)(3 - x)</span>, with <span class="chem">x(0) = 0</span>. You may use <span class="chem">1/((5 - x)(3 - x)) = (1/2)(1/(3 - x) - 1/(5 - x))</span>. Find the amount of product after 10 minutes, correct to 3 significant figures.</p>
      stem: "<p>在一個化學反應中，<span class=\"chem\">t</span> 分鐘後生成的產物質量 <span class=\"chem\">x</span> 克滿足 <span class=\"chem\">dx/dt = 0.02(5 - x)(3 - x)</span>，其中 <span class=\"chem\">x(0) = 0</span>。你可使用 <span class=\"chem\">1/((5 - x)(3 - x)) = (1/2)(1/(3 - x) - 1/(5 - x))</span>。求 (Find) 10 分鐘後產物的質量，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: this is a separable DE; the partial fractions are given. While <span class="chem">0 &lt;= x &lt; 3</span>, both <span class="chem">5 - x</span> and <span class="chem">3 - x</span> are positive.
        "解碼：這是可分離變數微分方程；部分分式已經給出。當 <span class=\"chem\">0 &lt;= x &lt; 3</span> 時，<span class=\"chem\">5 - x</span> 和 <span class=\"chem\">3 - x</span> 都是正數。",
        // EN: Integrating gives <span class="chem">(1/2) ln((5 - x)/(3 - x)) = 0.02t + C</span>, with <span class="chem">C = (1/2) ln(5/3)</span>.
        "積分得 <span class=\"chem\">(1/2) ln((5 - x)/(3 - x)) = 0.02t + C</span>，其中 <span class=\"chem\">C = (1/2) ln(5/3)</span>。",
        // EN: So <span class="chem">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>. Put <span class="chem">t = 10</span> and solve for <span class="chem">x</span>.
        "所以 <span class=\"chem\">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>。代入 <span class=\"chem\">t = 10</span> 並解出 <span class=\"chem\">x</span>。",
      ],
      // EN: <p><span class="chem">int 1/((5 - x)(3 - x)) dx = int 0.02 dt => (1/2)(-ln(3 - x) + ln(5 - x)) = 0.02t + C</span>. At <span class="chem">t = 0, x = 0</span>: <span class="chem">C = (1/2) ln(5/3)</span>. So <span class="chem">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>.</p><p>At <span class="chem">t = 10</span>, let <span class="chem">K = (5/3)e^{0.4} = 2.48654…</span>. Then <span class="chem">5 - x = K(3 - x) => x = (3K - 5)/(K - 1) ≈ 1.65</span> g.</p>
      solution: "<p><span class=\"chem\">int 1/((5 - x)(3 - x)) dx = int 0.02 dt => (1/2)(-ln(3 - x) + ln(5 - x)) = 0.02t + C</span>。在 <span class=\"chem\">t = 0, x = 0</span>：<span class=\"chem\">C = (1/2) ln(5/3)</span>。所以 <span class=\"chem\">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>。</p><p>在 <span class=\"chem\">t = 10</span>，設 <span class=\"chem\">K = (5/3)e^{0.4} = 2.48654…</span>。於是 <span class=\"chem\">5 - x = K(3 - x) => x = (3K - 5)/(K - 1) ≈ 1.65</span> g。</p>",
    },

    // ── t5-4-q038 · numeric · challenge · AHL · AHL 5.19 · 5 marks
    "t5-4-q038": {
      // EN: <p>A student estimates <span class="chem">sqrt(e)</span> by adding terms of the Maclaurin series for <span class="chem">e^x</span>. Let <span class="chem">P_n(x)</span> be the Maclaurin polynomial of <span class="chem">e^x</span> of degree <span class="chem">n</span>. Find the least value of <span class="chem">n</span> for which <span class="chem">|sqrt(e) - P_n(0.5)| &lt; 10^{-6}</span>.</p>
      stem: "<p>一名學生把 <span class=\"chem\">e^x</span> 的麥克勞林級數各項相加來估算 <span class=\"chem\">sqrt(e)</span>。設 <span class=\"chem\">P_n(x)</span> 為 <span class=\"chem\">e^x</span> 的 <span class=\"chem\">n</span> 次麥克勞林多項式。求 (Find) 使 <span class=\"chem\">|sqrt(e) - P_n(0.5)| &lt; 10^{-6}</span> 成立的 <span class=\"chem\">n</span> 的最小值。</p>",
      hints: [
        // EN: Decode: <span class="chem">sqrt(e) = e^{0.5}</span>, so this asks how many terms of <span class="chem">1 + x + x^2/2! + …</span> at <span class="chem">x = 0.5</span> you need to get within <span class="chem">10^{-6}</span>. Degree <span class="chem">n</span> means the last term is <span class="chem">x^n/n!</span>.
        "解碼：<span class=\"chem\">sqrt(e) = e^{0.5}</span>，所以這是問在 <span class=\"chem\">x = 0.5</span> 時需要 <span class=\"chem\">1 + x + x^2/2! + …</span> 的多少項，才能使誤差在 <span class=\"chem\">10^{-6}</span> 以內。<span class=\"chem\">n</span> 次的意思是最後一項為 <span class=\"chem\">x^n/n!</span>。",
        // EN: Compute <span class="chem">P_n(0.5) = sum_{k=0}^{n} 0.5^k/k!</span> for increasing <span class="chem">n</span> (a GDC sum or table helps) and compare with the GDC value of <span class="chem">e^{0.5}</span>.
        "對遞增的 <span class=\"chem\">n</span> 計算 <span class=\"chem\">P_n(0.5) = sum_{k=0}^{n} 0.5^k/k!</span>（GDC 的求和或列表功能會有幫助），並與 GDC 所得 <span class=\"chem\">e^{0.5}</span> 的值比較。",
        // EN: The error is roughly the first term left out, <span class="chem">0.5^{n+1}/(n + 1)!</span>.
        "誤差大約等於第一個略去的項 <span class=\"chem\">0.5^{n+1}/(n + 1)!</span>。",
      ],
      // EN: <p><strong>Decode:</strong> <span class="chem">sqrt(e) = e^{0.5}</span>, and “degree <span class="chem">n</span>” means the polynomial stops at <span class="chem">x^n/n!</span>; we need the least <span class="chem">n</span> giving error below <span class="chem">10^{-6}</span>.</p><p>GDC: <span class="chem">e^{0.5} - P_6(0.5) = 1.65 × 10^{-6}</span> (not enough) and <span class="chem">e^{0.5} - P_7(0.5) = 1.03 × 10^{-7}</span>. So <span class="chem">n = 7</span>.</p>
      solution: "<p><strong>解碼：</strong><span class=\"chem\">sqrt(e) = e^{0.5}</span>，而「<span class=\"chem\">n</span> 次」表示多項式到 <span class=\"chem\">x^n/n!</span> 為止；我們需要使誤差低於 <span class=\"chem\">10^{-6}</span> 的最小 <span class=\"chem\">n</span>。</p><p>GDC：<span class=\"chem\">e^{0.5} - P_6(0.5) = 1.65 × 10^{-6}</span>（不足夠）及 <span class=\"chem\">e^{0.5} - P_7(0.5) = 1.03 × 10^{-7}</span>。所以 <span class=\"chem\">n = 7</span>。</p>",
    },

    // ── t5-4-q039 · short · exam · AHL · AHL 5.18 · 9 marks
    "t5-4-q039": {
      // EN: <p>Consider <span class="chem">dy/dx = x - y^2</span> with <span class="chem">y(0) = 1</span>. In this question, carry full calculator accuracy between steps and give final answers correct to 4 decimal places.</p><p>(a) Use Euler’s method with <span class="chem">h = 0.2</span> to estimate <span class="chem">y(1)</span>. <strong>[3 marks]</strong></p><p>(b) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1)</span>. <strong>[2 marks]</strong></p><p>(c) A numerical solver gives <span class="chem">y(1) = 0.8334</span> to 4 decimal places. Find the error in each estimate. <strong>[2 marks]</strong></p><p>(d) Comment on how the error changes when the step size is halved. <strong>[2 marks]</strong></p>
      stem: "<p>考慮 <span class=\"chem\">dy/dx = x - y^2</span>，其中 <span class=\"chem\">y(0) = 1</span>。在本題中，各步之間保留計算機的完整精確度，最終答案準確至小數點後 4 位。</p><p>(a) 利用 <span class=\"chem\">h = 0.2</span> 的歐拉法估算 <span class=\"chem\">y(1)</span>。<strong>[3 marks]</strong></p><p>(b) 利用 <span class=\"chem\">h = 0.1</span> 的歐拉法估算 <span class=\"chem\">y(1)</span>。<strong>[2 marks]</strong></p><p>(c) 數值求解器給出 <span class=\"chem\">y(1) = 0.8334</span>（準確至小數點後 4 位）。求每個估算值的誤差。<strong>[2 marks]</strong></p><p>(d) 評論 (Comment) 當步長減半時誤差如何變化。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: two GDC Euler tables (5 steps and 10 steps), then compare each with the given accurate value.
        "解碼：兩個用 GDC 列出的歐拉法表（5 步及 10 步），然後把每個結果與給定的準確值比較。",
        // EN: Store <span class="chem">x</span> and <span class="chem">y</span> on the GDC and repeat <span class="chem">y + h(x - y^2) -> y</span>, <span class="chem">x + h -> x</span>.
        "在 GDC 上儲存 <span class=\"chem\">x</span> 及 <span class=\"chem\">y</span>，並重複 <span class=\"chem\">y + h(x - y^2) -> y</span>、<span class=\"chem\">x + h -> x</span>。",
        // EN: For (d), divide the larger error by the smaller one.
        "在 (d) 部，把較大的誤差除以較小的誤差。",
      ],
      // EN: <p>(a) <span class="chem">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span>: <span class="chem">0.8, 0.712, 0.690611, 0.715222, 0.772914</span>. So <span class="chem">y(1) ≈ 0.7729</span>.</p><p>(b) Ten steps of <span class="chem">y_{n+1} = y_n + 0.1(x_n - y_n^2)</span> give <span class="chem">y(1) ≈ 0.8054</span> (0.805354).</p><p>(c) Errors: <span class="chem">0.8334 - 0.7729 = 0.0605</span> and <span class="chem">0.8334 - 0.8054 = 0.0280</span>.</p><p>(d) Halving <span class="chem">h</span> roughly halves the error (<span class="chem">0.0605/0.0280 ≈ 2.2</span>): the Euler error is roughly proportional to <span class="chem">h</span>. Both estimates are too low.</p>
      answer: "<p>(a) <span class=\"chem\">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span>：<span class=\"chem\">0.8, 0.712, 0.690611, 0.715222, 0.772914</span>。所以 <span class=\"chem\">y(1) ≈ 0.7729</span>。</p><p>(b) 以 <span class=\"chem\">y_{n+1} = y_n + 0.1(x_n - y_n^2)</span> 走十步得 <span class=\"chem\">y(1) ≈ 0.8054</span>（0.805354）。</p><p>(c) 誤差：<span class=\"chem\">0.8334 - 0.7729 = 0.0605</span> 及 <span class=\"chem\">0.8334 - 0.8054 = 0.0280</span>。</p><p>(d) 把 <span class=\"chem\">h</span> 減半，誤差大約減半（<span class=\"chem\">0.0605/0.0280 ≈ 2.2</span>）：歐拉法的誤差大約與 <span class=\"chem\">h</span> 成正比。兩個估算值都偏低。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span>.
        "M1: 使用 <span class=\"chem\">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span>。",
        // EN: A1: correct intermediate values (e.g. <span class="chem">y_1 = 0.8</span>, <span class="chem">y_2 = 0.712</span>).
        "A1: 正確的中間值（例如 <span class=\"chem\">y_1 = 0.8</span>、<span class=\"chem\">y_2 = 0.712</span>）。",
        // EN: A1: <span class="chem">y(1) ≈ 0.7729</span>.
        "A1: <span class=\"chem\">y(1) ≈ 0.7729</span>。",
        // EN: M1: ten steps with <span class="chem">h = 0.1</span>.
        "M1: 以 <span class=\"chem\">h = 0.1</span> 走十步。",
        // EN: A1: <span class="chem">y(1) ≈ 0.8054</span>.
        "A1: <span class=\"chem\">y(1) ≈ 0.8054</span>。",
        // EN: A1: error <span class="chem">0.0605</span> for <span class="chem">h = 0.2</span>.
        "A1: <span class=\"chem\">h = 0.2</span> 的誤差 <span class=\"chem\">0.0605</span>。",
        // EN: A1: error <span class="chem">0.0280</span> for <span class="chem">h = 0.1</span>.
        "A1: <span class=\"chem\">h = 0.1</span> 的誤差 <span class=\"chem\">0.0280</span>。",
        // EN: A1: the error is roughly halved (ratio about 2).
        "A1: 誤差大約減半（比約為 2）。",
        // EN: R1: so the error is approximately proportional to the step size <span class="chem">h</span>.
        "R1: 所以誤差大約與步長 <span class=\"chem\">h</span> 成正比。",
      ],
    },

    // ── t5-4-q040 · numeric · challenge · AHL · AHL 5.18 · 5 marks
    "t5-4-q040": {
      // EN: <p>A fish farm models the number <span class="chem">P</span> of fish in a lake by <span class="chem">dP/dt = 0.5P(1 - P/1000) - 60</span>, where <span class="chem">t</span> is in years and 60 fish per year are caught. There is a critical starting population <span class="chem">P_c</span>: if <span class="chem">P(0) &lt; P_c</span> the fish eventually die out, and if <span class="chem">P(0)</span> is a little more than <span class="chem">P_c</span> the population survives. Find <span class="chem">P_c</span>, correct to 3 significant figures.</p>
      stem: "<p>一個養魚場以 <span class=\"chem\">dP/dt = 0.5P(1 - P/1000) - 60</span> 為湖中魚的數目 <span class=\"chem\">P</span> 建模，其中 <span class=\"chem\">t</span> 以年為單位，而每年捕撈 60 條魚。存在一個臨界初始族群 <span class=\"chem\">P_c</span>：若 <span class=\"chem\">P(0) &lt; P_c</span>，魚最終會絕跡；若 <span class=\"chem\">P(0)</span> 稍大於 <span class=\"chem\">P_c</span>，族群能夠存活。求 (Find) <span class=\"chem\">P_c</span>，準確至 3 位有效數字。</p>",
      hints: [
        // EN: Decode: you do not need to solve the DE. Find the constant (equilibrium) solutions, where <span class="chem">dP/dt = 0</span>, and look at the sign of <span class="chem">dP/dt</span> between them.
        "解碼：你不需要解這個微分方程。求 <span class=\"chem\">dP/dt = 0</span> 時的常數（平衡）解，並觀察兩解之間 <span class=\"chem\">dP/dt</span> 的正負。",
        // EN: <span class="chem">dP/dt = 0 => 0.5P - 0.0005P^2 - 60 = 0 => P^2 - 1000P + 120000 = 0</span>. Solve this with the GDC.
        "<span class=\"chem\">dP/dt = 0 => 0.5P - 0.0005P^2 - 60 = 0 => P^2 - 1000P + 120000 = 0</span>。用 GDC 解這個方程。",
        // EN: Below the smaller root, <span class="chem">dP/dt &lt; 0</span>, so the population keeps falling. Between the roots, <span class="chem">dP/dt &gt; 0</span>.
        "在較小的根以下，<span class=\"chem\">dP/dt &lt; 0</span>，所以族群持續下降。在兩根之間，<span class=\"chem\">dP/dt &gt; 0</span>。",
      ],
      // EN: <p><strong>Decode:</strong> “critical starting population” is the boundary between falling and rising populations, that is, an equilibrium where <span class="chem">dP/dt = 0</span>.</p><p><span class="chem">P^2 - 1000P + 120000 = 0 => P = 139.44…</span> or <span class="chem">P = 860.55…</span>. <span class="chem">dP/dt</span> is a downward parabola in <span class="chem">P</span>, so <span class="chem">dP/dt &lt; 0</span> for <span class="chem">P &lt; 139.4</span> (decline to extinction) and <span class="chem">dP/dt &gt; 0</span> for <span class="chem">139.4 &lt; P &lt; 860.6</span> (growth towards 860.6). So <span class="chem">P_c ≈ 139</span>.</p>
      solution: "<p><strong>解碼：</strong>「臨界初始族群」是族群下降與上升之間的分界，即 <span class=\"chem\">dP/dt = 0</span> 的平衡點。</p><p><span class=\"chem\">P^2 - 1000P + 120000 = 0 => P = 139.44…</span> 或 <span class=\"chem\">P = 860.55…</span>。<span class=\"chem\">dP/dt</span> 是 <span class=\"chem\">P</span> 的開口向下拋物線，所以當 <span class=\"chem\">P &lt; 139.4</span> 時 <span class=\"chem\">dP/dt &lt; 0</span>（下降至絕跡），當 <span class=\"chem\">139.4 &lt; P &lt; 860.6</span> 時 <span class=\"chem\">dP/dt &gt; 0</span>（增長趨向 860.6）。所以 <span class=\"chem\">P_c ≈ 139</span>。</p>",
    },

    // ── t5-4-q041 · numeric · exam · AHL · AHL 5.19 · 5 marks
    "t5-4-q041": {
      // EN: <p>Use the first three non-zero terms of the Maclaurin series for <span class="chem">sin x</span> to find a polynomial approximation to <span class="chem">(sin x)/x</span>. Hence estimate <span class="chem">int_0^2 (sin x)/x dx</span>, and find the percentage error of this estimate compared with the value given by your GDC. Give the percentage error correct to 3 significant figures.</p>
      stem: "<p>利用 <span class=\"chem\">sin x</span> 的麥克勞林級數的首三個非零項，求 (Find) <span class=\"chem\">(sin x)/x</span> 的多項式近似。由此 (Hence) 估算 <span class=\"chem\">int_0^2 (sin x)/x dx</span>，並求此估算值與 GDC 所得值相比的百分誤差。百分誤差準確至 3 位有效數字。</p>",
      hints: [
        // EN: Divide <span class="chem">x - x^3/6 + x^5/120</span> by <span class="chem">x</span>: <span class="chem">(sin x)/x ≈ 1 - x^2/6 + x^4/120</span>.
        "把 <span class=\"chem\">x - x^3/6 + x^5/120</span> 除以 <span class=\"chem\">x</span>：<span class=\"chem\">(sin x)/x ≈ 1 - x^2/6 + x^4/120</span>。",
        // EN: Integrate from <span class="chem">0</span> to <span class="chem">2</span>: <span class="chem">[x - x^3/18 + x^5/600]_0^2</span>.
        "由 <span class=\"chem\">0</span> 積分至 <span class=\"chem\">2</span>：<span class=\"chem\">[x - x^3/18 + x^5/600]_0^2</span>。",
        // EN: Find the integral of <span class="chem">(sin x)/x</span> with the GDC, then use <span class="chem">|approx - exact| / exact × 100</span>.
        "用 GDC 求 <span class=\"chem\">(sin x)/x</span> 的積分，然後使用 <span class=\"chem\">|approx - exact| / exact × 100</span>。",
      ],
      // EN: <p><span class="chem">int_0^2 (1 - x^2/6 + x^4/120) dx = 2 - 8/18 + 32/600 = 1.608889</span>. GDC: <span class="chem">int_0^2 (sin x)/x dx = 1.605413</span>. Percentage error <span class="chem">= 0.003476/1.605413 × 100 ≈ 0.217%</span>.</p>
      solution: "<p><span class=\"chem\">int_0^2 (1 - x^2/6 + x^4/120) dx = 2 - 8/18 + 32/600 = 1.608889</span>。GDC：<span class=\"chem\">int_0^2 (sin x)/x dx = 1.605413</span>。百分誤差 <span class=\"chem\">= 0.003476/1.605413 × 100 ≈ 0.217%</span>。</p>",
    },

    // ── t5-4-q042 · numeric · foundation · AHL · AHL 5.18 · 3 marks
    "t5-4-q042": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = xy</span> with <span class="chem">y(1) = 2</span>. Use Euler’s method with step size <span class="chem">h = 0.5</span> to find an estimate for <span class="chem">y(2)</span>.</p>
      stem: "<p>函數 <span class=\"chem\">y(x)</span> 滿足 <span class=\"chem\">dy/dx = xy</span>，其中 <span class=\"chem\">y(1) = 2</span>。利用步長 <span class=\"chem\">h = 0.5</span> 的歐拉法，求 (Find) <span class=\"chem\">y(2)</span> 的估算值。</p>",
      hints: [
        // EN: Two steps of <span class="chem">0.5</span> take you from <span class="chem">x = 1</span> to <span class="chem">x = 2</span>. Use <span class="chem">y_{n+1} = y_n + 0.5 x_n y_n</span>.
        "用 <span class=\"chem\">0.5</span> 走兩步，由 <span class=\"chem\">x = 1</span> 到達 <span class=\"chem\">x = 2</span>。使用 <span class=\"chem\">y_{n+1} = y_n + 0.5 x_n y_n</span>。",
        // EN: First step: <span class="chem">y_1 = 2 + 0.5(1)(2) = 3</span> at <span class="chem">x_1 = 1.5</span>.
        "第一步：在 <span class=\"chem\">x_1 = 1.5</span>，<span class=\"chem\">y_1 = 2 + 0.5(1)(2) = 3</span>。",
      ],
      // EN: <p><span class="chem">y_1 = 2 + 0.5(1)(2) = 3</span> at <span class="chem">x = 1.5</span>. <span class="chem">y_2 = 3 + 0.5(1.5)(3) = 3 + 2.25 = 5.25</span> at <span class="chem">x = 2</span>. So <span class="chem">y(2) ≈ 5.25</span>.</p>
      solution: "<p>在 <span class=\"chem\">x = 1.5</span>，<span class=\"chem\">y_1 = 2 + 0.5(1)(2) = 3</span>。在 <span class=\"chem\">x = 2</span>，<span class=\"chem\">y_2 = 3 + 0.5(1.5)(3) = 3 + 2.25 = 5.25</span>。所以 <span class=\"chem\">y(2) ≈ 5.25</span>。</p>",
    },

    // ── t5-4-q043 · numeric · foundation · AHL · AHL 5.19 · 2 marks
    "t5-4-q043": {
      // EN: <p>Find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series for <span class="chem">cos(3x)</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">cos(3x)</span> 的麥克勞林級數中 <span class=\"chem\">x^4</span> 的準確係數。</p>",
      hints: [
        // EN: Substitute <span class="chem">u = 3x</span> into <span class="chem">cos u = 1 - u^2/2! + u^4/4! - …</span>.
        "把 <span class=\"chem\">u = 3x</span> 代入 <span class=\"chem\">cos u = 1 - u^2/2! + u^4/4! - …</span>。",
        // EN: The <span class="chem">x^4</span> term is <span class="chem">(3x)^4/4!</span>. Simplify the fraction.
        "<span class=\"chem\">x^4</span> 項是 <span class=\"chem\">(3x)^4/4!</span>。化簡該分數。",
      ],
      // EN: <p><span class="chem">(3x)^4/4! = 81x^4/24 = (27/8)x^4</span>, so the coefficient is <span class="chem">27/8</span>.</p>
      solution: "<p><span class=\"chem\">(3x)^4/4! = 81x^4/24 = (27/8)x^4</span>，所以係數為 <span class=\"chem\">27/8</span>。</p>",
    },

    // ── t5-4-q044 · short · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q044": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx = e^{x + y}</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Show that <span class="chem">y = -ln(2 - e^x)</span>. <strong>[4 marks]</strong></p><p>(b) State the largest interval containing <span class="chem">x = 0</span> on which this solution is defined, and justify your answer. <strong>[2 marks]</strong></p>
      stem: "<p>考慮微分方程 <span class=\"chem\">dy/dx = e^{x + y}</span>，其中 <span class=\"chem\">y(0) = 0</span>。</p><p>(a) 證明 (Show that) <span class=\"chem\">y = -ln(2 - e^x)</span>。<strong>[4 marks]</strong></p><p>(b) 述明 (State) 此解有定義且包含 <span class=\"chem\">x = 0</span> 的最大區間，並證明你的答案。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Use the index law <span class="chem">e^{x + y} = e^x × e^y</span> to separate the variables.
        "使用指數定律 <span class=\"chem\">e^{x + y} = e^x × e^y</span> 來分離變數。",
        // EN: Remember <span class="chem">int e^{-y} dy = -e^{-y}</span>.
        "記住 <span class=\"chem\">int e^{-y} dy = -e^{-y}</span>。",
      ],
      // EN: <p>(a) <span class="chem">e^{x + y} = e^x e^y</span>, so <span class="chem">int e^{-y} dy = int e^x dx => -e^{-y} = e^x + C</span>. At <span class="chem">(0, 0)</span>: <span class="chem">-1 = 1 + C => C = -2</span>. So <span class="chem">e^{-y} = 2 - e^x</span>, and <span class="chem">-y = ln(2 - e^x)</span>, giving <span class="chem">y = -ln(2 - e^x)</span>.</p><p>(b) The logarithm needs <span class="chem">2 - e^x &gt; 0</span>, that is <span class="chem">e^x &lt; 2</span>, so <span class="chem">x &lt; ln 2</span>. The interval is <span class="chem">-inf &lt; x &lt; ln 2</span> (as <span class="chem">x -> ln 2</span>, <span class="chem">y -> inf</span>).</p>
      answer: "<p>(a) <span class=\"chem\">e^{x + y} = e^x e^y</span>，所以 <span class=\"chem\">int e^{-y} dy = int e^x dx => -e^{-y} = e^x + C</span>。在 <span class=\"chem\">(0, 0)</span>：<span class=\"chem\">-1 = 1 + C => C = -2</span>。所以 <span class=\"chem\">e^{-y} = 2 - e^x</span>，而 <span class=\"chem\">-y = ln(2 - e^x)</span>，得 <span class=\"chem\">y = -ln(2 - e^x)</span>。</p><p>(b) 對數要求 <span class=\"chem\">2 - e^x &gt; 0</span>，即 <span class=\"chem\">e^x &lt; 2</span>，所以 <span class=\"chem\">x &lt; ln 2</span>。區間為 <span class=\"chem\">-inf &lt; x &lt; ln 2</span>（當 <span class=\"chem\">x -> ln 2</span> 時，<span class=\"chem\">y -> inf</span>）。</p>",
      markscheme: [
        // EN: M1: writes <span class="chem">e^{x + y} = e^x e^y</span> and separates: <span class="chem">int e^{-y} dy = int e^x dx</span>.
        "M1: 寫出 <span class=\"chem\">e^{x + y} = e^x e^y</span> 並分離變數：<span class=\"chem\">int e^{-y} dy = int e^x dx</span>。",
        // EN: A1: <span class="chem">-e^{-y} = e^x + C</span>.
        "A1: <span class=\"chem\">-e^{-y} = e^x + C</span>。",
        // EN: M1: uses <span class="chem">y(0) = 0</span> to find <span class="chem">C = -2</span>.
        "M1: 利用 <span class=\"chem\">y(0) = 0</span> 求 <span class=\"chem\">C = -2</span>。",
        // EN: A1: <span class="chem">e^{-y} = 2 - e^x</span>. AG: <span class="chem">y = -ln(2 - e^x)</span>; the given line itself earns no mark.
        "A1: <span class=\"chem\">e^{-y} = 2 - e^x</span>。AG：<span class=\"chem\">y = -ln(2 - e^x)</span>；寫出給定結果本身不得分。",
        // EN: R1: requires <span class="chem">2 - e^x &gt; 0</span>.
        "R1: 要求 <span class=\"chem\">2 - e^x &gt; 0</span>。",
        // EN: A1: <span class="chem">x &lt; ln 2</span>.
        "A1: <span class=\"chem\">x &lt; ln 2</span>。",
      ],
    },

    // ── t5-4-q045 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q045": {
      // EN: <p>The function <span class="chem">y(x)</span>, where <span class="chem">x &gt; 1/2</span> and <span class="chem">y &gt; 0</span>, satisfies <span class="chem">dy/dx = (x^2 + 3y^2)/(2xy)</span> and <span class="chem">y(1) = 1</span>. Find the exact value of <span class="chem">y(2)</span>.</p>
      stem: "<p>函數 <span class=\"chem\">y(x)</span>（其中 <span class=\"chem\">x &gt; 1/2</span> 及 <span class=\"chem\">y &gt; 0</span>）滿足 <span class=\"chem\">dy/dx = (x^2 + 3y^2)/(2xy)</span> 及 <span class=\"chem\">y(1) = 1</span>。求 (Find) <span class=\"chem\">y(2)</span> 的準確值。</p>",
      hints: [
        // EN: Divide the top and bottom by <span class="chem">x^2</span>: the right-hand side depends only on <span class="chem">v = y/x</span>. Substitute <span class="chem">y = vx</span>.
        "把分子分母同除以 <span class=\"chem\">x^2</span>：右邊只取決於 <span class=\"chem\">v = y/x</span>。代換 <span class=\"chem\">y = vx</span>。",
        // EN: You should get <span class="chem">x(dv/dx) = (1 + v^2)/(2v)</span>.
        "你應得到 <span class=\"chem\">x(dv/dx) = (1 + v^2)/(2v)</span>。",
        // EN: Separate and integrate: <span class="chem">int 2v/(1 + v^2) dv = int (1/x) dx</span>, so <span class="chem">1 + v^2 = Ax</span>.
        "分離變數並積分：<span class=\"chem\">int 2v/(1 + v^2) dv = int (1/x) dx</span>，所以 <span class=\"chem\">1 + v^2 = Ax</span>。",
      ],
      // EN: <p><span class="chem">y = vx</span>: <span class="chem">v + x(dv/dx) = (1 + 3v^2)/(2v) => x(dv/dx) = (1 + 3v^2 - 2v^2)/(2v) = (1 + v^2)/(2v)</span>.</p><p><span class="chem">int 2v/(1 + v^2) dv = int (1/x) dx => ln(1 + v^2) = ln x + C => 1 + v^2 = Ax</span>. At <span class="chem">(1, 1)</span>: <span class="chem">A = 2</span>. So <span class="chem">y^2 = x^2(2x - 1)</span>.</p><p><span class="chem">y(2) = sqrt(4 × 3) = 2 sqrt(3)</span>.</p>
      solution: "<p><span class=\"chem\">y = vx</span>：<span class=\"chem\">v + x(dv/dx) = (1 + 3v^2)/(2v) => x(dv/dx) = (1 + 3v^2 - 2v^2)/(2v) = (1 + v^2)/(2v)</span>。</p><p><span class=\"chem\">int 2v/(1 + v^2) dv = int (1/x) dx => ln(1 + v^2) = ln x + C => 1 + v^2 = Ax</span>。在 <span class=\"chem\">(1, 1)</span>：<span class=\"chem\">A = 2</span>。所以 <span class=\"chem\">y^2 = x^2(2x - 1)</span>。</p><p><span class=\"chem\">y(2) = sqrt(4 × 3) = 2 sqrt(3)</span>。</p>",
    },

    // ── t5-4-q046 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q046": {
      // EN: <p>The function <span class="chem">y(x)</span>, for <span class="chem">-pi/2 &lt; x &lt; pi/2</span>, satisfies <span class="chem">dy/dx + y tan x = cos^2 x</span> and <span class="chem">y(0) = 2</span>. Find the exact value of <span class="chem">y(pi/3)</span>.</p>
      stem: "<p>函數 <span class=\"chem\">y(x)</span>（<span class=\"chem\">-pi/2 &lt; x &lt; pi/2</span>）滿足 <span class=\"chem\">dy/dx + y tan x = cos^2 x</span> 及 <span class=\"chem\">y(0) = 2</span>。求 (Find) <span class=\"chem\">y(pi/3)</span> 的準確值。</p>",
      hints: [
        // EN: The integrating factor is <span class="chem">e^{int tan x dx} = e^{-ln(cos x)}</span>. Simplify it.
        "積分因子為 <span class=\"chem\">e^{int tan x dx} = e^{-ln(cos x)}</span>。把它化簡。",
        // EN: With <span class="chem">I(x) = sec x</span>: <span class="chem">d/dx(y sec x) = cos^2 x sec x = cos x</span>.
        "利用 <span class=\"chem\">I(x) = sec x</span>：<span class=\"chem\">d/dx(y sec x) = cos^2 x sec x = cos x</span>。",
        // EN: So <span class="chem">y sec x = sin x + C</span>. Find <span class="chem">C</span>, then substitute <span class="chem">x = pi/3</span>.
        "所以 <span class=\"chem\">y sec x = sin x + C</span>。求 <span class=\"chem\">C</span>，然後代入 <span class=\"chem\">x = pi/3</span>。",
      ],
      // EN: <p><span class="chem">I(x) = e^{int tan x dx} = e^{-ln(cos x)} = sec x</span> (since <span class="chem">cos x &gt; 0</span>). Then <span class="chem">d/dx(y sec x) = cos x => y sec x = sin x + C</span>. At <span class="chem">x = 0</span>: <span class="chem">2 = C</span>. So <span class="chem">y = sin x cos x + 2 cos x</span>.</p><p><span class="chem">y(pi/3) = (sqrt(3)/2)(1/2) + 2(1/2) = 1 + sqrt(3)/4</span>.</p>
      solution: "<p><span class=\"chem\">I(x) = e^{int tan x dx} = e^{-ln(cos x)} = sec x</span>（因為 <span class=\"chem\">cos x &gt; 0</span>）。於是 <span class=\"chem\">d/dx(y sec x) = cos x => y sec x = sin x + C</span>。在 <span class=\"chem\">x = 0</span>：<span class=\"chem\">2 = C</span>。所以 <span class=\"chem\">y = sin x cos x + 2 cos x</span>。</p><p><span class=\"chem\">y(pi/3) = (sqrt(3)/2)(1/2) + 2(1/2) = 1 + sqrt(3)/4</span>。</p>",
    },

    // ── t5-4-q047 · short · exam · AHL · AHL 5.13, 5.19 · 6 marks
    "t5-4-q047": {
      // EN: <p>(a) By substituting the Maclaurin series for <span class="chem">sin x</span> into the series for <span class="chem">ln(1 + u)</span>, show that the Maclaurin series for <span class="chem">ln(1 + sin x)</span> up to and including the term in <span class="chem">x^3</span> is <span class="chem">x - x^2/2 + x^3/6</span>. <strong>[4 marks]</strong></p><p>(b) Hence find <span class="chem">lim_{x->0} (ln(1 + sin x) - x)/x^2</span>. <strong>[2 marks]</strong></p>
      stem: "<p>(a) 把 <span class=\"chem\">sin x</span> 的麥克勞林級數代入 <span class=\"chem\">ln(1 + u)</span> 的級數，證明 (Show that) <span class=\"chem\">ln(1 + sin x)</span> 展開至 <span class=\"chem\">x^3</span> 項（包括該項）的麥克勞林級數是 <span class=\"chem\">x - x^2/2 + x^3/6</span>。<strong>[4 marks]</strong></p><p>(b) 由此 (Hence) 求 <span class=\"chem\">lim_{x->0} (ln(1 + sin x) - x)/x^2</span>。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Only keep terms up to <span class="chem">x^3</span>: <span class="chem">sin^2 x = x^2 - (1/3)x^4 + …</span>, so its <span class="chem">x^3</span> coefficient is 0.
        "只保留至 <span class=\"chem\">x^3</span> 的項：<span class=\"chem\">sin^2 x = x^2 - (1/3)x^4 + …</span>，所以它的 <span class=\"chem\">x^3</span> 係數是 0。",
        // EN: In (b), the <span class="chem">x</span> terms cancel; what is left starts with <span class="chem">-x^2/2</span>.
        "在 (b) 部，<span class=\"chem\">x</span> 項互相抵消；剩下的部分由 <span class=\"chem\">-x^2/2</span> 開始。",
      ],
      // EN: <p>(a) With <span class="chem">u = sin x = x - x^3/6 + …</span>: <span class="chem">u^2 = x^2 + …</span> and <span class="chem">u^3 = x^3 + …</span> (up to <span class="chem">x^3</span>). So <span class="chem">ln(1 + sin x) = u - u^2/2 + u^3/3 - … = (x - x^3/6) - x^2/2 + x^3/3 + … = x - x^2/2 + (1/3 - 1/6)x^3 = x - x^2/2 + x^3/6</span>.</p><p>(b) <span class="chem">(ln(1 + sin x) - x)/x^2 = (-x^2/2 + x^3/6 + …)/x^2 = -1/2 + x/6 + … -> -1/2</span>.</p>
      answer: "<p>(a) 利用 <span class=\"chem\">u = sin x = x - x^3/6 + …</span>：<span class=\"chem\">u^2 = x^2 + …</span> 及 <span class=\"chem\">u^3 = x^3 + …</span>（至 <span class=\"chem\">x^3</span>）。所以 <span class=\"chem\">ln(1 + sin x) = u - u^2/2 + u^3/3 - … = (x - x^3/6) - x^2/2 + x^3/3 + … = x - x^2/2 + (1/3 - 1/6)x^3 = x - x^2/2 + x^3/6</span>。</p><p>(b) <span class=\"chem\">(ln(1 + sin x) - x)/x^2 = (-x^2/2 + x^3/6 + …)/x^2 = -1/2 + x/6 + … -> -1/2</span>。</p>",
      markscheme: [
        // EN: M1: substitutes <span class="chem">u = sin x</span> into <span class="chem">u - u^2/2 + u^3/3</span>.
        "M1: 把 <span class=\"chem\">u = sin x</span> 代入 <span class=\"chem\">u - u^2/2 + u^3/3</span>。",
        // EN: A1: <span class="chem">u^2 = x^2 + …</span> (no <span class="chem">x^3</span> term) and <span class="chem">u^3 = x^3 + …</span>.
        "A1: <span class=\"chem\">u^2 = x^2 + …</span>（沒有 <span class=\"chem\">x^3</span> 項）及 <span class=\"chem\">u^3 = x^3 + …</span>。",
        // EN: A1: <span class="chem">x^3</span> terms <span class="chem">-1/6 + 1/3</span> collected.
        "A1: 合併 <span class=\"chem\">x^3</span> 項 <span class=\"chem\">-1/6 + 1/3</span>。",
        // EN: A1: collects <span class="chem">x - x^2/2 + (1/6)x^3</span> correctly. AG: the given series; the given line itself earns no mark.
        "A1: 正確合併 <span class=\"chem\">x - x^2/2 + (1/6)x^3</span>。AG：給定的級數；寫出給定結果本身不得分。",
        // EN: M1: substitutes the series and divides by <span class="chem">x^2</span>.
        "M1: 代入級數並除以 <span class=\"chem\">x^2</span>。",
        // EN: A1: <span class="chem">-1/2</span>.
        "A1: <span class=\"chem\">-1/2</span>。",
      ],
    },

    // ── t5-4-q048 · short · exam · AHL · AHL 5.19 · 7 marks
    "t5-4-q048": {
      // EN: <p>(a) Use the series for <span class="chem">(1 + x)^p</span> to write down the Maclaurin series for <span class="chem">(1 - x)^{-1}</span>, and state the values of <span class="chem">x</span> for which it is valid. <strong>[2 marks]</strong></p><p>(b) By differentiating your series term by term, show that <span class="chem">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span>. <strong>[2 marks]</strong></p><p>(c) Hence find the exact value of <span class="chem">sum_{n=1}^{inf} n/3^n</span>. <strong>[3 marks]</strong></p>
      stem: "<p>(a) 利用 <span class=\"chem\">(1 + x)^p</span> 的級數寫出 (Write down) <span class=\"chem\">(1 - x)^{-1}</span> 的麥克勞林級數，並述明 (State) 它成立的 <span class=\"chem\">x</span> 值。<strong>[2 marks]</strong></p><p>(b) 把你的級數逐項求導，證明 (Show that) <span class=\"chem\">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span>。<strong>[2 marks]</strong></p><p>(c) 由此 (Hence) 求 <span class=\"chem\">sum_{n=1}^{inf} n/3^n</span> 的準確值。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: (c) looks like a series question from Topic 1, but it is the differentiated series in (b) evaluated at a particular <span class="chem">x</span>.
        "解碼：(c) 看似課題 1 的級數題，但其實是 (b) 中求導後的級數在某個特定 <span class=\"chem\">x</span> 的值。",
        // EN: In <span class="chem">(1 + u)^p = 1 + pu + p(p - 1)u^2/2! + …</span>, put <span class="chem">p = -1</span> and <span class="chem">u = -x</span>.
        "在 <span class=\"chem\">(1 + u)^p = 1 + pu + p(p - 1)u^2/2! + …</span> 中，代入 <span class=\"chem\">p = -1</span> 及 <span class=\"chem\">u = -x</span>。",
        // EN: Take out a factor <span class="chem">1/3</span>: <span class="chem">n/3^n = (1/3) × n (1/3)^{n - 1}</span>.
        "抽出因數 <span class=\"chem\">1/3</span>：<span class=\"chem\">n/3^n = (1/3) × n (1/3)^{n - 1}</span>。",
      ],
      // EN: <p>(a) <span class="chem">p = -1</span>, <span class="chem">x</span> replaced by <span class="chem">-x</span>: <span class="chem">(1 - x)^{-1} = 1 + x + x^2 + x^3 + … + x^n + …</span>, valid for <span class="chem">|x| &lt; 1</span>.</p><p>(b) <span class="chem">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span>, and differentiating each term <span class="chem">x^n</span> gives <span class="chem">n x^{n - 1}</span>: <span class="chem">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span>.</p><p>(c) <span class="chem">sum_{n=1}^{inf} n/3^n = (1/3) sum_{n=1}^{inf} n (1/3)^{n - 1} = (1/3)(1 - 1/3)^{-2} = (1/3)(9/4) = 3/4</span>, using <span class="chem">x = 1/3</span>, which satisfies <span class="chem">|x| &lt; 1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">p = -1</span>，以 <span class=\"chem\">-x</span> 代替 <span class=\"chem\">x</span>：<span class=\"chem\">(1 - x)^{-1} = 1 + x + x^2 + x^3 + … + x^n + …</span>，在 <span class=\"chem\">|x| &lt; 1</span> 時成立。</p><p>(b) <span class=\"chem\">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span>，而把每一項 <span class=\"chem\">x^n</span> 求導得 <span class=\"chem\">n x^{n - 1}</span>：<span class=\"chem\">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span>。</p><p>(c) <span class=\"chem\">sum_{n=1}^{inf} n/3^n = (1/3) sum_{n=1}^{inf} n (1/3)^{n - 1} = (1/3)(1 - 1/3)^{-2} = (1/3)(9/4) = 3/4</span>，利用 <span class=\"chem\">x = 1/3</span>，它滿足 <span class=\"chem\">|x| &lt; 1</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">1 + x + x^2 + x^3 + …</span>.
        "A1: <span class=\"chem\">1 + x + x^2 + x^3 + …</span>。",
        // EN: A1: valid for <span class="chem">|x| &lt; 1</span>.
        "A1: 在 <span class=\"chem\">|x| &lt; 1</span> 時成立。",
        // EN: M1: differentiates the left side: <span class="chem">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span>.
        "M1: 對左邊求導：<span class=\"chem\">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span>。",
        // EN: A1: differentiates each term <span class="chem">x^n -> n x^{n - 1}</span>. AG: the given series; the given line itself earns no mark.
        "A1: 對每一項 <span class=\"chem\">x^n -> n x^{n - 1}</span> 求導。AG：給定的級數；寫出給定結果本身不得分。",
        // EN: M1: writes <span class="chem">n/3^n = (1/3) n (1/3)^{n - 1}</span>.
        "M1: 寫出 <span class=\"chem\">n/3^n = (1/3) n (1/3)^{n - 1}</span>。",
        // EN: M1: substitutes <span class="chem">x = 1/3</span> into <span class="chem">(1 - x)^{-2}</span> (with <span class="chem">|1/3| &lt; 1</span>).
        "M1: 把 <span class=\"chem\">x = 1/3</span> 代入 <span class=\"chem\">(1 - x)^{-2}</span>（其中 <span class=\"chem\">|1/3| &lt; 1</span>）。",
        // EN: A1: <span class="chem">3/4</span>.
        "A1: <span class=\"chem\">3/4</span>。",
      ],
    },

    // ── t5-4-q049 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q049": {
      // EN: <p>Let <span class="chem">F(x) = int_0^x ln(1 + t)/t dt</span>. By integrating a series term by term, find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series for <span class="chem">F(x)</span>.</p>
      stem: "<p>設 <span class=\"chem\">F(x) = int_0^x ln(1 + t)/t dt</span>。把級數逐項積分，求 (Find) <span class=\"chem\">F(x)</span> 的麥克勞林級數中 <span class=\"chem\">x^4</span> 的準確係數。</p>",
      hints: [
        // EN: Divide the series <span class="chem">ln(1 + t) = t - t^2/2 + t^3/3 - t^4/4 + …</span> by <span class="chem">t</span>.
        "把級數 <span class=\"chem\">ln(1 + t) = t - t^2/2 + t^3/3 - t^4/4 + …</span> 除以 <span class=\"chem\">t</span>。",
        // EN: Then integrate each term from <span class="chem">0</span> to <span class="chem">x</span>. The <span class="chem">x^4</span> term comes from the <span class="chem">t^3</span> term.
        "然後把每一項由 <span class=\"chem\">0</span> 積分至 <span class=\"chem\">x</span>。<span class=\"chem\">x^4</span> 項來自 <span class=\"chem\">t^3</span> 項。",
      ],
      // EN: <p><span class="chem">ln(1 + t)/t = 1 - t/2 + t^2/3 - t^3/4 + …</span>. Integrating from 0 to <span class="chem">x</span>: <span class="chem">F(x) = x - x^2/4 + x^3/9 - x^4/16 + …</span>. The coefficient of <span class="chem">x^4</span> is <span class="chem">-1/16</span>.</p>
      solution: "<p><span class=\"chem\">ln(1 + t)/t = 1 - t/2 + t^2/3 - t^3/4 + …</span>。由 0 積分至 <span class=\"chem\">x</span>：<span class=\"chem\">F(x) = x - x^2/4 + x^3/9 - x^4/16 + …</span>。<span class=\"chem\">x^4</span> 的係數為 <span class=\"chem\">-1/16</span>。</p>",
    },

    // ── t5-4-q050 · numeric · challenge · AHL · AHL 5.19 · 6 marks
    "t5-4-q050": {
      // EN: <p>A curve passes through the origin. At every point <span class="chem">(x, y)</span> on the curve, the gradient is equal to the sum of the <span class="chem">x</span>-coordinate and the sine of the <span class="chem">y</span>-coordinate. Find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series of the curve’s equation <span class="chem">y = f(x)</span>.</p>
      stem: "<p>一條曲線通過原點。在曲線上每一點 <span class=\"chem\">(x, y)</span>，斜率等於 <span class=\"chem\">x</span> 坐標與 <span class=\"chem\">y</span> 坐標的正弦之和。求 (Find) 曲線方程 <span class=\"chem\">y = f(x)</span> 的麥克勞林級數中 <span class=\"chem\">x^4</span> 的準確係數。</p>",
      hints: [
        // EN: Decode: the words describe the DE <span class="chem">dy/dx = x + sin y</span> with <span class="chem">y(0) = 0</span>. You need <span class="chem">f^{(4)}(0)/4!</span>, found by repeated implicit differentiation.
        "解碼：題目文字描述的是微分方程 <span class=\"chem\">dy/dx = x + sin y</span>，其中 <span class=\"chem\">y(0) = 0</span>。你需要 <span class=\"chem\">f^{(4)}(0)/4!</span>，可透過重複隱式求導求得。",
        // EN: <span class="chem">y'(0) = 0 + sin 0 = 0</span>. Differentiate: <span class="chem">y'' = 1 + cos y × y'</span>, so <span class="chem">y''(0) = 1</span>.
        "<span class=\"chem\">y'(0) = 0 + sin 0 = 0</span>。求導：<span class=\"chem\">y'' = 1 + cos y × y'</span>，所以 <span class=\"chem\">y''(0) = 1</span>。",
        // EN: Next, <span class="chem">y''' = -sin y (y')^2 + cos y × y''</span>. Differentiate once more, and at <span class="chem">x = 0</span> use <span class="chem">y = 0, y' = 0</span>: most terms vanish.
        "接着，<span class=\"chem\">y''' = -sin y (y')^2 + cos y × y''</span>。再求導一次，並在 <span class=\"chem\">x = 0</span> 使用 <span class=\"chem\">y = 0, y' = 0</span>：大部分項都會消失。",
      ],
      // EN: <p><strong>Decode:</strong> “gradient equals <span class="chem">x</span> plus sine of <span class="chem">y</span>” is <span class="chem">dy/dx = x + sin y</span>; “passes through the origin” is <span class="chem">y(0) = 0</span>. Build the series from derivatives at 0.</p><p><span class="chem">y'(0) = 0</span>. <span class="chem">y'' = 1 + cos y y' => y''(0) = 1</span>. <span class="chem">y''' = -sin y (y')^2 + cos y y'' => y'''(0) = 1</span>.</p><p><span class="chem">y^{(4)} = -cos y (y')^3 - 3 sin y y' y'' + cos y y'''</span>, so <span class="chem">y^{(4)}(0) = 0 - 0 + 1 = 1</span>.</p><p>The coefficient of <span class="chem">x^4</span> is <span class="chem">1/4! = 1/24</span>.</p>
      solution: "<p><strong>解碼：</strong>「斜率等於 <span class=\"chem\">x</span> 加 <span class=\"chem\">y</span> 的正弦」即 <span class=\"chem\">dy/dx = x + sin y</span>；「通過原點」即 <span class=\"chem\">y(0) = 0</span>。由在 0 的各階導數建立級數。</p><p><span class=\"chem\">y'(0) = 0</span>。<span class=\"chem\">y'' = 1 + cos y y' => y''(0) = 1</span>。<span class=\"chem\">y''' = -sin y (y')^2 + cos y y'' => y'''(0) = 1</span>。</p><p><span class=\"chem\">y^{(4)} = -cos y (y')^3 - 3 sin y y' y'' + cos y y'''</span>，所以 <span class=\"chem\">y^{(4)}(0) = 0 - 0 + 1 = 1</span>。</p><p><span class=\"chem\">x^4</span> 的係數為 <span class=\"chem\">1/4! = 1/24</span>。</p>",
    },

    // ── t5-4-q051 · short · challenge · AHL · AHL 5.18 · 9 marks
    "t5-4-q051": {
      // EN: <p>A curve in the region <span class="chem">x &gt; 0</span> passes through <span class="chem">(1, 0)</span>. At each point <span class="chem">(x, y)</span> of the curve with <span class="chem">x != y</span>, its gradient is <span class="chem">(x + y)/(x - y)</span>.</p><p>(a) Use the substitution <span class="chem">y = vx</span> to show that <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>. <strong>[3 marks]</strong></p><p>(b) Hence show that the curve has equation <span class="chem">arctan(y/x) = ln sqrt(x^2 + y^2)</span>. <strong>[4 marks]</strong></p><p>(c) The curve meets the line <span class="chem">y = x/sqrt(3)</span> at the point <span class="chem">P</span> in the first quadrant. Find the exact distance from the origin <span class="chem">O</span> to <span class="chem">P</span>. <strong>[2 marks]</strong></p>
      stem: "<p>區域 <span class=\"chem\">x &gt; 0</span> 中的一條曲線通過 <span class=\"chem\">(1, 0)</span>。在曲線上每一點 <span class=\"chem\">(x, y)</span>（其中 <span class=\"chem\">x != y</span>），其斜率為 <span class=\"chem\">(x + y)/(x - y)</span>。</p><p>(a) 利用代換 <span class=\"chem\">y = vx</span> 證明 (Show that) <span class=\"chem\">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>。<strong>[3 marks]</strong></p><p>(b) 由此證明 (Hence show that) 曲線的方程為 <span class=\"chem\">arctan(y/x) = ln sqrt(x^2 + y^2)</span>。<strong>[4 marks]</strong></p><p>(c) 曲線與直線 <span class=\"chem\">y = x/sqrt(3)</span> 相交於第一象限的點 <span class=\"chem\">P</span>。求原點 <span class=\"chem\">O</span> 至 <span class=\"chem\">P</span> 的準確距離。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: divide the top and bottom of <span class="chem">(x + y)/(x - y)</span> by <span class="chem">x</span>: the DE is homogeneous, so use <span class="chem">y = vx</span>. In (c), notice what <span class="chem">arctan(y/x)</span> and <span class="chem">sqrt(x^2 + y^2)</span> mean geometrically.
        "解碼：把 <span class=\"chem\">(x + y)/(x - y)</span> 的分子分母同除以 <span class=\"chem\">x</span>：這是齊次微分方程，所以用 <span class=\"chem\">y = vx</span>。在 (c) 部，留意 <span class=\"chem\">arctan(y/x)</span> 和 <span class=\"chem\">sqrt(x^2 + y^2)</span> 的幾何意義。",
        // EN: After substituting, subtract <span class="chem">v</span> from both sides and simplify over the common denominator <span class="chem">1 - v</span>.
        "代換後，兩邊減去 <span class=\"chem\">v</span>，並以公分母 <span class=\"chem\">1 - v</span> 化簡。",
        // EN: For <span class="chem">int v/(1 + v^2) dv</span>, the numerator is half the derivative of the denominator.
        "對於 <span class=\"chem\">int v/(1 + v^2) dv</span>，分子是分母導數的一半。",
      ],
      // EN: <p><strong>Decode:</strong> the gradient is a function of <span class="chem">y/x</span>, so the DE is homogeneous. In (c), <span class="chem">arctan(y/x)</span> is the angle <span class="chem">OP</span> makes with the <span class="chem">x</span>-axis and <span class="chem">sqrt(x^2 + y^2)</span> is the distance <span class="chem">OP</span>.</p><p>(a) <span class="chem">v + x(dv/dx) = (1 + v)/(1 - v) => x(dv/dx) = (1 + v - v + v^2)/(1 - v) = (1 + v^2)/(1 - v)</span>, so <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>.</p><p>(b) <span class="chem">int 1/(1 + v^2) dv - int v/(1 + v^2) dv = arctan v - (1/2) ln(1 + v^2)</span>. So <span class="chem">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>. At <span class="chem">(1, 0)</span>, <span class="chem">v = 0</span>, so <span class="chem">C = 0</span>. Then <span class="chem">arctan(y/x) = ln x + (1/2) ln((x^2 + y^2)/x^2) = (1/2) ln(x^2 + y^2) = ln sqrt(x^2 + y^2)</span>.</p><p>(c) On <span class="chem">y = x/sqrt(3)</span>, <span class="chem">arctan(y/x) = arctan(1/sqrt(3)) = pi/6</span>. So <span class="chem">ln OP = pi/6</span> and <span class="chem">OP = e^{pi/6}</span>.</p>
      answer: "<p><strong>解碼：</strong>斜率是 <span class=\"chem\">y/x</span> 的函數，所以這是齊次微分方程。在 (c) 部，<span class=\"chem\">arctan(y/x)</span> 是 <span class=\"chem\">OP</span> 與 <span class=\"chem\">x</span> 軸所成的角，而 <span class=\"chem\">sqrt(x^2 + y^2)</span> 是距離 <span class=\"chem\">OP</span>。</p><p>(a) <span class=\"chem\">v + x(dv/dx) = (1 + v)/(1 - v) => x(dv/dx) = (1 + v - v + v^2)/(1 - v) = (1 + v^2)/(1 - v)</span>，所以 <span class=\"chem\">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>。</p><p>(b) <span class=\"chem\">int 1/(1 + v^2) dv - int v/(1 + v^2) dv = arctan v - (1/2) ln(1 + v^2)</span>。所以 <span class=\"chem\">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>。在 <span class=\"chem\">(1, 0)</span>，<span class=\"chem\">v = 0</span>，所以 <span class=\"chem\">C = 0</span>。於是 <span class=\"chem\">arctan(y/x) = ln x + (1/2) ln((x^2 + y^2)/x^2) = (1/2) ln(x^2 + y^2) = ln sqrt(x^2 + y^2)</span>。</p><p>(c) 在 <span class=\"chem\">y = x/sqrt(3)</span> 上，<span class=\"chem\">arctan(y/x) = arctan(1/sqrt(3)) = pi/6</span>。所以 <span class=\"chem\">ln OP = pi/6</span> 及 <span class=\"chem\">OP = e^{pi/6}</span>。</p>",
      markscheme: [
        // EN: M1: substitutes <span class="chem">y = vx</span>, <span class="chem">dy/dx = v + x(dv/dx)</span> and divides top and bottom by <span class="chem">x</span>.
        "M1: 代入 <span class=\"chem\">y = vx</span>、<span class=\"chem\">dy/dx = v + x(dv/dx)</span>，並把分子分母同除以 <span class=\"chem\">x</span>。",
        // EN: A1: <span class="chem">x(dv/dx) = (1 + v^2)/(1 - v)</span>.
        "A1: <span class=\"chem\">x(dv/dx) = (1 + v^2)/(1 - v)</span>。",
        // EN: A1: separates variables correctly. AG: <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>; the given line itself earns no mark.
        "A1: 正確分離變數。AG：<span class=\"chem\">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>；寫出給定結果本身不得分。",
        // EN: M1: splits into <span class="chem">1/(1 + v^2) - v/(1 + v^2)</span>.
        "M1: 拆分為 <span class=\"chem\">1/(1 + v^2) - v/(1 + v^2)</span>。",
        // EN: A1: <span class="chem">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>.
        "A1: <span class=\"chem\">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>。",
        // EN: A1: <span class="chem">C = 0</span> from <span class="chem">(1, 0)</span>.
        "A1: 由 <span class=\"chem\">(1, 0)</span> 得 <span class=\"chem\">C = 0</span>。",
        // EN: A1: combines the logarithms: <span class="chem">ln x + (1/2) ln(1 + y^2/x^2) = (1/2) ln(x^2 + y^2)</span>. AG: <span class="chem">arctan(y/x) = ln sqrt(x^2 + y^2)</span>; the given line itself earns no mark.
        "A1: 合併對數：<span class=\"chem\">ln x + (1/2) ln(1 + y^2/x^2) = (1/2) ln(x^2 + y^2)</span>。AG：<span class=\"chem\">arctan(y/x) = ln sqrt(x^2 + y^2)</span>；寫出給定結果本身不得分。",
        // EN: M1: uses <span class="chem">y/x = 1/sqrt(3)</span>, so <span class="chem">arctan(y/x) = pi/6</span>, and <span class="chem">OP = sqrt(x^2 + y^2)</span>.
        "M1: 利用 <span class=\"chem\">y/x = 1/sqrt(3)</span>，所以 <span class=\"chem\">arctan(y/x) = pi/6</span>，及 <span class=\"chem\">OP = sqrt(x^2 + y^2)</span>。",
        // EN: A1: <span class="chem">OP = e^{pi/6}</span>.
        "A1: <span class=\"chem\">OP = e^{pi/6}</span>。",
      ],
    },

    // ── t5-4-q052 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q052": {
      // EN: <p>A function <span class="chem">f</span> satisfies <span class="chem">f(x) = 1 + int_0^x (f(t) + e^t) dt</span> for all <span class="chem">x ∈ ℝ</span>. Find the exact value of <span class="chem">f(1)</span>.</p>
      stem: "<p>函數 <span class=\"chem\">f</span> 對所有 <span class=\"chem\">x ∈ ℝ</span> 滿足 <span class=\"chem\">f(x) = 1 + int_0^x (f(t) + e^t) dt</span>。求 (Find) <span class=\"chem\">f(1)</span> 的準確值。</p>",
      hints: [
        // EN: Decode: this is a differential equation in disguise. Differentiate both sides (fundamental theorem of calculus) to get a DE, and put <span class="chem">x = 0</span> to get the initial condition.
        "解碼：這其實是一個微分方程。把兩邊求導（微積分基本定理）得到微分方程，並代入 <span class=\"chem\">x = 0</span> 得到初始條件。",
        // EN: Differentiating gives <span class="chem">f'(x) = f(x) + e^x</span>; at <span class="chem">x = 0</span> the integral is zero, so <span class="chem">f(0) = 1</span>.
        "求導得 <span class=\"chem\">f'(x) = f(x) + e^x</span>；在 <span class=\"chem\">x = 0</span> 時積分為零，所以 <span class=\"chem\">f(0) = 1</span>。",
        // EN: Solve <span class="chem">dy/dx - y = e^x</span> with the integrating factor <span class="chem">e^{-x}</span>.
        "用積分因子 <span class=\"chem\">e^{-x}</span> 解 <span class=\"chem\">dy/dx - y = e^x</span>。",
      ],
      // EN: <p><strong>Decode:</strong> an equation with <span class="chem">f</span> inside an integral with variable upper limit becomes a DE after differentiating; the initial value comes from putting <span class="chem">x = 0</span>.</p><p><span class="chem">f'(x) = f(x) + e^x</span> and <span class="chem">f(0) = 1 + 0 = 1</span>. With <span class="chem">y = f(x)</span>: <span class="chem">dy/dx - y = e^x</span>, IF <span class="chem">e^{-x}</span>: <span class="chem">d/dx(y e^{-x}) = 1 => y e^{-x} = x + C</span>. <span class="chem">f(0) = 1 => C = 1</span>, so <span class="chem">f(x) = (x + 1)e^x</span>.</p><p><span class="chem">f(1) = 2e</span>.</p>
      solution: "<p><strong>解碼：</strong>若方程中 <span class=\"chem\">f</span> 出現在上限為變數的積分內，求導後就變成微分方程；初始值由代入 <span class=\"chem\">x = 0</span> 得到。</p><p><span class=\"chem\">f'(x) = f(x) + e^x</span> 及 <span class=\"chem\">f(0) = 1 + 0 = 1</span>。利用 <span class=\"chem\">y = f(x)</span>：<span class=\"chem\">dy/dx - y = e^x</span>，積分因子 <span class=\"chem\">e^{-x}</span>：<span class=\"chem\">d/dx(y e^{-x}) = 1 => y e^{-x} = x + C</span>。<span class=\"chem\">f(0) = 1 => C = 1</span>，所以 <span class=\"chem\">f(x) = (x + 1)e^x</span>。</p><p><span class=\"chem\">f(1) = 2e</span>。</p>",
    },

    // ── t5-4-q053 · numeric · challenge · AHL · AHL 5.13, 5.19 · 5 marks
    "t5-4-q053": {
      // EN: <p>Find the exact value of <span class="chem">lim_{x->inf} x^2 (1 - x sin(1/x))</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">lim_{x->inf} x^2 (1 - x sin(1/x))</span> 的準確值。</p>",
      hints: [
        // EN: Decode: this is a limit as <span class="chem">x -> inf</span>, but the substitution <span class="chem">u = 1/x</span> turns it into a limit as <span class="chem">u -> 0^+</span>, where Maclaurin series work.
        "解碼：這是當 <span class=\"chem\">x -> inf</span> 時的極限，但代換 <span class=\"chem\">u = 1/x</span> 把它變成當 <span class=\"chem\">u -> 0^+</span> 時的極限，這時麥克勞林級數就適用。",
        // EN: With <span class="chem">u = 1/x</span>: <span class="chem">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2</span>.
        "利用 <span class=\"chem\">u = 1/x</span>：<span class=\"chem\">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2</span>。",
        // EN: Use <span class="chem">sin u = u - u^3/6 + u^5/120 - …</span>, so <span class="chem">(sin u)/u = 1 - u^2/6 + …</span>.
        "使用 <span class=\"chem\">sin u = u - u^3/6 + u^5/120 - …</span>，所以 <span class=\"chem\">(sin u)/u = 1 - u^2/6 + …</span>。",
      ],
      // EN: <p><strong>Decode:</strong> Maclaurin series only work near 0, so first rewrite the limit at infinity with <span class="chem">u = 1/x -> 0</span>.</p><p><span class="chem">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2 = (1 - (1 - u^2/6 + u^4/120 - …))/u^2 = 1/6 - u^2/120 + … -> 1/6</span>.</p>
      solution: "<p><strong>解碼：</strong>麥克勞林級數只在 0 附近適用，所以先用 <span class=\"chem\">u = 1/x -> 0</span> 改寫在無窮遠處的極限。</p><p><span class=\"chem\">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2 = (1 - (1 - u^2/6 + u^4/120 - …))/u^2 = 1/6 - u^2/120 + … -> 1/6</span>。</p>",
    },

    // ── t5-4-q054 · short · exam · AHL · AHL 5.18 · 12 marks
    "t5-4-q054": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx = x^2 - y</span> with <span class="chem">y(0) = 1</span>.</p><p>(a) Use Euler’s method with step size <span class="chem">h = 0.5</span> to find an estimate for <span class="chem">y(1)</span>. <strong>[3 marks]</strong></p><p>(b) Show that <span class="chem">d^2y/dx^2 = 2x - x^2 + y</span>. <strong>[2 marks]</strong></p><p>(c) Hence explain whether the first Euler step gives an overestimate or an underestimate. <strong>[2 marks]</strong></p><p>(d) Use an integrating factor to solve the differential equation, and hence find the exact value of <span class="chem">y(1)</span>. <strong>[5 marks]</strong></p>
      stem: "<p>考慮微分方程 <span class=\"chem\">dy/dx = x^2 - y</span>，其中 <span class=\"chem\">y(0) = 1</span>。</p><p>(a) 利用步長 <span class=\"chem\">h = 0.5</span> 的歐拉法，求 (Find) <span class=\"chem\">y(1)</span> 的估算值。<strong>[3 marks]</strong></p><p>(b) 證明 (Show that) <span class=\"chem\">d^2y/dx^2 = 2x - x^2 + y</span>。<strong>[2 marks]</strong></p><p>(c) 由此 (Hence) 解釋第一步歐拉法得出的是高估還是低估。<strong>[2 marks]</strong></p><p>(d) 利用積分因子解此微分方程，並由此求 <span class=\"chem\">y(1)</span> 的準確值。<strong>[5 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is Euler by hand, (b)–(c) use concavity to predict the error, and (d) is a linear DE (integrating factor) needing integration by parts.
        "解碼：(a) 是用手計算歐拉法，(b)–(c) 利用凹性預測誤差，(d) 是需要分部積分法的線性微分方程（積分因子）。",
        // EN: In (b), differentiate both sides of <span class="chem">dy/dx = x^2 - y</span> with respect to <span class="chem">x</span>.
        "在 (b) 部，把 <span class=\"chem\">dy/dx = x^2 - y</span> 的兩邊對 <span class=\"chem\">x</span> 求導。",
        // EN: In (d), rewrite the DE as <span class="chem">dy/dx + y = x^2</span>. For <span class="chem">int x^2 e^x dx</span>, use parts with <span class="chem">u = x^2</span>, then again with <span class="chem">u = x</span>.
        "在 (d) 部，把微分方程改寫為 <span class=\"chem\">dy/dx + y = x^2</span>。求 <span class=\"chem\">int x^2 e^x dx</span> 時，以 <span class=\"chem\">u = x^2</span> 用分部積分法，然後再以 <span class=\"chem\">u = x</span> 用一次。",
      ],
      // EN: <p>(a) <span class="chem">y_1 = 1 + 0.5(0 - 1) = 0.5</span> at <span class="chem">x = 0.5</span>; <span class="chem">y_2 = 0.5 + 0.5(0.25 - 0.5) = 0.375</span>. So <span class="chem">y(1) ≈ 0.375</span>.</p><p>(b) <span class="chem">d^2y/dx^2 = 2x - dy/dx = 2x - (x^2 - y) = 2x - x^2 + y</span>.</p><p>(c) At <span class="chem">(0, 1)</span>, <span class="chem">d^2y/dx^2 = 1 &gt; 0</span>, so the curve is concave up there and lies above its tangent: the first Euler step is an underestimate.</p><p>(d) <span class="chem">dy/dx + y = x^2</span>, IF <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^2 e^x</span>. By parts twice, <span class="chem">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>. So <span class="chem">y = x^2 - 2x + 2 + C e^{-x}</span>; <span class="chem">y(0) = 1 => C = -1</span>. <span class="chem">y(1) = 1 - 2 + 2 - e^{-1} = 1 - 1/e</span>.</p>
      answer: "<p>(a) 在 <span class=\"chem\">x = 0.5</span>，<span class=\"chem\">y_1 = 1 + 0.5(0 - 1) = 0.5</span>；<span class=\"chem\">y_2 = 0.5 + 0.5(0.25 - 0.5) = 0.375</span>。所以 <span class=\"chem\">y(1) ≈ 0.375</span>。</p><p>(b) <span class=\"chem\">d^2y/dx^2 = 2x - dy/dx = 2x - (x^2 - y) = 2x - x^2 + y</span>。</p><p>(c) 在 <span class=\"chem\">(0, 1)</span>，<span class=\"chem\">d^2y/dx^2 = 1 &gt; 0</span>，所以曲線在該處凹向上，位於其切線上方：第一步歐拉法是低估。</p><p>(d) <span class=\"chem\">dy/dx + y = x^2</span>，積分因子 <span class=\"chem\">e^x</span>：<span class=\"chem\">d/dx(y e^x) = x^2 e^x</span>。用兩次分部積分法，<span class=\"chem\">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>。所以 <span class=\"chem\">y = x^2 - 2x + 2 + C e^{-x}</span>；<span class=\"chem\">y(0) = 1 => C = -1</span>。<span class=\"chem\">y(1) = 1 - 2 + 2 - e^{-1} = 1 - 1/e</span>。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.5(x_n^2 - y_n)</span>.
        "M1: 使用 <span class=\"chem\">y_{n+1} = y_n + 0.5(x_n^2 - y_n)</span>。",
        // EN: A1: <span class="chem">y_1 = 0.5</span>.
        "A1: <span class=\"chem\">y_1 = 0.5</span>。",
        // EN: A1: <span class="chem">y(1) ≈ 0.375</span>.
        "A1: <span class=\"chem\">y(1) ≈ 0.375</span>。",
        // EN: M1: differentiates the DE: <span class="chem">d^2y/dx^2 = 2x - dy/dx</span>.
        "M1: 對微分方程求導：<span class=\"chem\">d^2y/dx^2 = 2x - dy/dx</span>。",
        // EN: A1: substitutes <span class="chem">dy/dx = x^2 - y</span>. AG: <span class="chem">d^2y/dx^2 = 2x - x^2 + y</span>; the given line itself earns no mark.
        "A1: 代入 <span class=\"chem\">dy/dx = x^2 - y</span>。AG：<span class=\"chem\">d^2y/dx^2 = 2x - x^2 + y</span>；寫出給定結果本身不得分。",
        // EN: A1: <span class="chem">d^2y/dx^2 = 1 &gt; 0</span> at <span class="chem">(0, 1)</span>.
        "A1: 在 <span class=\"chem\">(0, 1)</span>，<span class=\"chem\">d^2y/dx^2 = 1 &gt; 0</span>。",
        // EN: R1: concave up, so the tangent lies below the curve and the step underestimates.
        "R1: 凹向上，所以切線位於曲線下方，該步是低估。",
        // EN: M1: integrating factor <span class="chem">e^x</span> for <span class="chem">dy/dx + y = x^2</span>.
        "M1: <span class=\"chem\">dy/dx + y = x^2</span> 的積分因子 <span class=\"chem\">e^x</span>。",
        // EN: M1: integration by parts (twice) on <span class="chem">int x^2 e^x dx</span>.
        "M1: 對 <span class=\"chem\">int x^2 e^x dx</span> 使用（兩次）分部積分法。",
        // EN: A1: <span class="chem">y e^x = (x^2 - 2x + 2)e^x + C</span>.
        "A1: <span class=\"chem\">y e^x = (x^2 - 2x + 2)e^x + C</span>。",
        // EN: A1: <span class="chem">C = -1</span>.
        "A1: <span class=\"chem\">C = -1</span>。",
        // EN: A1: <span class="chem">y(1) = 1 - 1/e</span>.
        "A1: <span class=\"chem\">y(1) = 1 - 1/e</span>。",
      ],
    },

    // ── t5-4-q055 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q055": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the Maclaurin series for <span class="chem">sqrt(1 + 2x) e^{-x}</span>.</p>
      stem: "<p>求 (Find) <span class=\"chem\">sqrt(1 + 2x) e^{-x}</span> 的麥克勞林級數中 <span class=\"chem\">x^2</span> 的係數。</p>",
      hints: [
        // EN: Use <span class="chem">(1 + u)^{1/2} = 1 + u/2 - u^2/8 + …</span> with <span class="chem">u = 2x</span>: <span class="chem">sqrt(1 + 2x) = 1 + x - x^2/2 + …</span>.
        "使用 <span class=\"chem\">(1 + u)^{1/2} = 1 + u/2 - u^2/8 + …</span>，其中 <span class=\"chem\">u = 2x</span>：<span class=\"chem\">sqrt(1 + 2x) = 1 + x - x^2/2 + …</span>。",
        // EN: Multiply by <span class="chem">e^{-x} = 1 - x + x^2/2 - …</span> and collect the three products that give <span class="chem">x^2</span>.
        "乘以 <span class=\"chem\">e^{-x} = 1 - x + x^2/2 - …</span>，並合併給出 <span class=\"chem\">x^2</span> 的三個乘積。",
      ],
      // EN: <p><span class="chem">sqrt(1 + 2x) = 1 + x + ((1/2)(-1/2)/2)(2x)^2 + … = 1 + x - x^2/2 + …</span>. Then <span class="chem">(1 + x - x^2/2)(1 - x + x^2/2)</span> has <span class="chem">x^2</span> coefficient <span class="chem">1(1/2) + 1(-1) + (-1/2)(1) = -1</span>.</p>
      solution: "<p><span class=\"chem\">sqrt(1 + 2x) = 1 + x + ((1/2)(-1/2)/2)(2x)^2 + … = 1 + x - x^2/2 + …</span>。於是 <span class=\"chem\">(1 + x - x^2/2)(1 - x + x^2/2)</span> 的 <span class=\"chem\">x^2</span> 係數為 <span class=\"chem\">1(1/2) + 1(-1) + (-1/2)(1) = -1</span>。</p>",
    },

    // ── t5-4-q056 · short · challenge · AHL · AHL 5.18, 5.19 · 17 marks
    "t5-4-q056": {
      // EN: <p><strong>How fast does Euler’s method converge?</strong> This investigation looks at the error of Euler’s method for <span class="chem">dy/dx = y</span>, <span class="chem">y(0) = 1</span>, whose exact solution is <span class="chem">y = e^x</span>.</p><p>(a) Euler’s method is used with <span class="chem">n</span> equal steps of size <span class="chem">h = 1/n</span> from <span class="chem">x = 0</span> to <span class="chem">x = 1</span>. Show that the Euler estimate of <span class="chem">y(1)</span> is <span class="chem">(1 + 1/n)^n</span>. <strong>[3 marks]</strong></p><p>Let <span class="chem">E_n = e - (1 + 1/n)^n</span> be the error.</p><p>(b) Use your GDC to calculate <span class="chem">E_n</span> for <span class="chem">n = 10, 100</span> and <span class="chem">1000</span>, giving answers correct to 4 significant figures. <strong>[3 marks]</strong></p><p>(c) Calculate <span class="chem">nE_n</span> for each of these values of <span class="chem">n</span>, and suggest a value for <span class="chem">lim_{n->inf} nE_n</span>. <strong>[2 marks]</strong></p><p>(d) Use the Maclaurin series for <span class="chem">ln(1 + x)</span> to show that <span class="chem">n ln(1 + 1/n) = 1 - 1/(2n) + 1/(3n^2) - …</span>. <strong>[2 marks]</strong></p><p>(e) Hence, by using the Maclaurin series for <span class="chem">e^x</span>, show that <span class="chem">(1 + 1/n)^n = e(1 - 1/(2n) + 11/(24n^2) - …)</span>, and deduce the exact value of <span class="chem">lim_{n->inf} nE_n</span>. <strong>[4 marks]</strong></p><p>(f) Use the approximation <span class="chem">E_n ≈ e/(2n)</span> to estimate the least <span class="chem">n</span> for which <span class="chem">E_n &lt; 0.0005</span>. Use your GDC to find the true least value of <span class="chem">n</span>, and explain the difference using part (e). <strong>[3 marks]</strong></p>
      stem: "<p><strong>歐拉法收斂得有多快？</strong>本探究考察歐拉法用於 <span class=\"chem\">dy/dx = y</span>、<span class=\"chem\">y(0) = 1</span> 時的誤差，其準確解為 <span class=\"chem\">y = e^x</span>。</p><p>(a) 由 <span class=\"chem\">x = 0</span> 至 <span class=\"chem\">x = 1</span>，以 <span class=\"chem\">n</span> 個大小為 <span class=\"chem\">h = 1/n</span> 的相等步使用歐拉法。證明 (Show that) <span class=\"chem\">y(1)</span> 的歐拉估算值是 <span class=\"chem\">(1 + 1/n)^n</span>。<strong>[3 marks]</strong></p><p>設 <span class=\"chem\">E_n = e - (1 + 1/n)^n</span> 為誤差。</p><p>(b) 利用你的 GDC 計算 <span class=\"chem\">n = 10, 100</span> 及 <span class=\"chem\">1000</span> 時的 <span class=\"chem\">E_n</span>，答案準確至 4 位有效數字。<strong>[3 marks]</strong></p><p>(c) 對這些 <span class=\"chem\">n</span> 值分別計算 <span class=\"chem\">nE_n</span>，並提出 <span class=\"chem\">lim_{n->inf} nE_n</span> 的一個值。<strong>[2 marks]</strong></p><p>(d) 利用 <span class=\"chem\">ln(1 + x)</span> 的麥克勞林級數證明 <span class=\"chem\">n ln(1 + 1/n) = 1 - 1/(2n) + 1/(3n^2) - …</span>。<strong>[2 marks]</strong></p><p>(e) 由此 (Hence)，利用 <span class=\"chem\">e^x</span> 的麥克勞林級數證明 <span class=\"chem\">(1 + 1/n)^n = e(1 - 1/(2n) + 11/(24n^2) - …)</span>，並推斷 (Deduce) <span class=\"chem\">lim_{n->inf} nE_n</span> 的準確值。<strong>[4 marks]</strong></p><p>(f) 利用近似式 <span class=\"chem\">E_n ≈ e/(2n)</span> 估算使 <span class=\"chem\">E_n &lt; 0.0005</span> 成立的最小 <span class=\"chem\">n</span>。用你的 GDC 求 <span class=\"chem\">n</span> 的真正最小值，並利用 (e) 部解釋兩者的差異。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a guided discovery — compute, spot a pattern, then prove it with series. The Euler steps form a geometric sequence, and the proof uses <span class="chem">a^b = e^{b ln a}</span>.
        "解碼：這是引導式探究——先計算，找出規律，再用級數證明。歐拉法的各步構成等比數列，而證明要用到 <span class=\"chem\">a^b = e^{b ln a}</span>。",
        // EN: In (e), write <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)}</span> and use (d). You need <span class="chem">u^2/2</span> only up to the <span class="chem">1/n^2</span> term: <span class="chem">u^2 = 1/(4n^2) + …</span>.
        "在 (e) 部，寫出 <span class=\"chem\">(1 + 1/n)^n = e^{n ln(1 + 1/n)}</span> 並利用 (d)。你只需要 <span class=\"chem\">u^2/2</span> 至 <span class=\"chem\">1/n^2</span> 項：<span class=\"chem\">u^2 = 1/(4n^2) + …</span>。",
        // EN: In (f), list <span class="chem">E_n</span> in a GDC table near <span class="chem">n = 2718</span>.
        "在 (f) 部，在 GDC 表中列出 <span class=\"chem\">n = 2718</span> 附近的 <span class=\"chem\">E_n</span>。",
      ],
      // EN: <p>(a) <span class="chem">y_{k+1} = y_k + h y_k = (1 + h) y_k</span>, so <span class="chem">y_k = (1 + h)^k y_0 = (1 + h)^k</span>. After <span class="chem">n</span> steps of <span class="chem">1/n</span> we reach <span class="chem">x = 1</span>: <span class="chem">y(1) ≈ (1 + 1/n)^n</span>.</p><p>(b) <span class="chem">E_{10} = 0.1245</span>, <span class="chem">E_{100} = 0.01347</span>, <span class="chem">E_{1000} = 0.001358</span>.</p><p>(c) <span class="chem">nE_n = 1.245, 1.347, 1.358</span>. The limit appears to be about <span class="chem">1.36</span> (perhaps <span class="chem">e/2 = 1.359…</span>).</p><p>(d) With <span class="chem">x = 1/n</span>: <span class="chem">ln(1 + 1/n) = 1/n - 1/(2n^2) + 1/(3n^3) - …</span>; multiplying by <span class="chem">n</span> gives the result.</p><p>(e) <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span> with <span class="chem">u = -1/(2n) + 1/(3n^2) - …</span>. <span class="chem">e^u = 1 + u + u^2/2 + … = 1 - 1/(2n) + (1/3 + 1/8)(1/n^2) + … = 1 - 1/(2n) + 11/(24n^2) - …</span>. So <span class="chem">E_n = e/(2n) - 11e/(24n^2) + …</span> and <span class="chem">nE_n = e/2 - 11e/(24n) + … -> e/2</span>.</p><p>(f) <span class="chem">e/(2n) &lt; 0.0005 => n &gt; 1000e = 2718.28…</span>, so the estimate is <span class="chem">n = 2719</span>. GDC: <span class="chem">E_{2718} = 0.00049988… &lt; 0.0005</span> and <span class="chem">E_{2717} &gt; 0.0005</span>, so the true least value is <span class="chem">n = 2718</span>. The next term <span class="chem">-11e/(24n^2)</span> is negative, so <span class="chem">E_n</span> is slightly less than <span class="chem">e/(2n)</span>, and a slightly smaller <span class="chem">n</span> is enough.</p>
      answer: "<p>(a) <span class=\"chem\">y_{k+1} = y_k + h y_k = (1 + h) y_k</span>，所以 <span class=\"chem\">y_k = (1 + h)^k y_0 = (1 + h)^k</span>。以 <span class=\"chem\">1/n</span> 走 <span class=\"chem\">n</span> 步後到達 <span class=\"chem\">x = 1</span>：<span class=\"chem\">y(1) ≈ (1 + 1/n)^n</span>。</p><p>(b) <span class=\"chem\">E_{10} = 0.1245</span>，<span class=\"chem\">E_{100} = 0.01347</span>，<span class=\"chem\">E_{1000} = 0.001358</span>。</p><p>(c) <span class=\"chem\">nE_n = 1.245, 1.347, 1.358</span>。極限看來約為 <span class=\"chem\">1.36</span>（或許是 <span class=\"chem\">e/2 = 1.359…</span>）。</p><p>(d) 利用 <span class=\"chem\">x = 1/n</span>：<span class=\"chem\">ln(1 + 1/n) = 1/n - 1/(2n^2) + 1/(3n^3) - …</span>；乘以 <span class=\"chem\">n</span> 即得結果。</p><p>(e) <span class=\"chem\">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span>，其中 <span class=\"chem\">u = -1/(2n) + 1/(3n^2) - …</span>。<span class=\"chem\">e^u = 1 + u + u^2/2 + … = 1 - 1/(2n) + (1/3 + 1/8)(1/n^2) + … = 1 - 1/(2n) + 11/(24n^2) - …</span>。所以 <span class=\"chem\">E_n = e/(2n) - 11e/(24n^2) + …</span> 及 <span class=\"chem\">nE_n = e/2 - 11e/(24n) + … -> e/2</span>。</p><p>(f) <span class=\"chem\">e/(2n) &lt; 0.0005 => n &gt; 1000e = 2718.28…</span>，所以估算值為 <span class=\"chem\">n = 2719</span>。GDC：<span class=\"chem\">E_{2718} = 0.00049988… &lt; 0.0005</span> 及 <span class=\"chem\">E_{2717} &gt; 0.0005</span>，所以真正的最小值是 <span class=\"chem\">n = 2718</span>。下一項 <span class=\"chem\">-11e/(24n^2)</span> 是負數，所以 <span class=\"chem\">E_n</span> 略小於 <span class=\"chem\">e/(2n)</span>，稍小的 <span class=\"chem\">n</span> 已足夠。</p>",
      markscheme: [
        // EN: M1: <span class="chem">y_{k+1} = y_k + h y_k = (1 + h) y_k</span>.
        "M1: <span class=\"chem\">y_{k+1} = y_k + h y_k = (1 + h) y_k</span>。",
        // EN: A1: recognises a geometric sequence: <span class="chem">y_k = (1 + h)^k</span>.
        "A1: 辨認出等比數列：<span class=\"chem\">y_k = (1 + h)^k</span>。",
        // EN: A1: <span class="chem">n</span> steps of size <span class="chem">1/n</span> reach <span class="chem">x = 1</span>. AG: <span class="chem">y(1) ≈ (1 + 1/n)^n</span>; the given line itself earns no mark.
        "A1: 以大小為 <span class=\"chem\">1/n</span> 的 <span class=\"chem\">n</span> 步到達 <span class=\"chem\">x = 1</span>。AG：<span class=\"chem\">y(1) ≈ (1 + 1/n)^n</span>；寫出給定結果本身不得分。",
        // EN: A1: <span class="chem">E_{10} = 0.1245</span>.
        "A1: <span class=\"chem\">E_{10} = 0.1245</span>。",
        // EN: A1: <span class="chem">E_{100} = 0.01347</span>.
        "A1: <span class=\"chem\">E_{100} = 0.01347</span>。",
        // EN: A1: <span class="chem">E_{1000} = 0.001358</span>.
        "A1: <span class=\"chem\">E_{1000} = 0.001358</span>。",
        // EN: A1: <span class="chem">nE_n = 1.245, 1.347, 1.358</span>.
        "A1: <span class=\"chem\">nE_n = 1.245, 1.347, 1.358</span>。",
        // EN: A1: suggests a limit of about <span class="chem">1.36</span> (accept any value in [1.35, 1.37]).
        "A1: 提出極限約為 <span class=\"chem\">1.36</span>（接受 [1.35, 1.37] 內任何值）。",
        // EN: M1: substitutes <span class="chem">x = 1/n</span> into <span class="chem">x - x^2/2 + x^3/3 - …</span>.
        "M1: 把 <span class=\"chem\">x = 1/n</span> 代入 <span class=\"chem\">x - x^2/2 + x^3/3 - …</span>。",
        // EN: A1: multiplies by <span class="chem">n</span> correctly. AG: <span class="chem">1 - 1/(2n) + 1/(3n^2) - …</span>; the given line itself earns no mark.
        "A1: 正確地乘以 <span class=\"chem\">n</span>。AG：<span class=\"chem\">1 - 1/(2n) + 1/(3n^2) - …</span>；寫出給定結果本身不得分。",
        // EN: M1: writes <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span>.
        "M1: 寫出 <span class=\"chem\">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span>。",
        // EN: M1: expands <span class="chem">e^u = 1 + u + u^2/2 + …</span> and keeps terms to <span class="chem">1/n^2</span>.
        "M1: 展開 <span class=\"chem\">e^u = 1 + u + u^2/2 + …</span> 並保留至 <span class=\"chem\">1/n^2</span> 的項。",
        // EN: A1: <span class="chem">1/(3n^2) + 1/(8n^2) = 11/(24n^2)</span>. AG: the given expansion; the given line itself earns no mark.
        "A1: <span class=\"chem\">1/(3n^2) + 1/(8n^2) = 11/(24n^2)</span>。AG：給定的展開式；寫出給定結果本身不得分。",
        // EN: A1: <span class="chem">nE_n = e/2 - 11e/(24n) + … -> e/2</span>.
        "A1: <span class=\"chem\">nE_n = e/2 - 11e/(24n) + … -> e/2</span>。",
        // EN: A1: estimate <span class="chem">n = 2719</span> (from <span class="chem">n &gt; 1000e</span>).
        "A1: 估算值 <span class=\"chem\">n = 2719</span>（由 <span class=\"chem\">n &gt; 1000e</span>）。",
        // EN: A1: true least value <span class="chem">n = 2718</span>.
        "A1: 真正的最小值 <span class=\"chem\">n = 2718</span>。",
        // EN: R1: the <span class="chem">-11e/(24n^2)</span> term makes <span class="chem">E_n</span> a little smaller than <span class="chem">e/(2n)</span>.
        "R1: <span class=\"chem\">-11e/(24n^2)</span> 項使 <span class=\"chem\">E_n</span> 略小於 <span class=\"chem\">e/(2n)</span>。",
      ],
    },

    // ── t5-4-q057 · short · challenge · AHL · AHL 5.18, 5.19 · 17 marks
    "t5-4-q057": {
      // EN: <p><strong>A series for tan x from its differential equation.</strong> The Formula Booklet does not give a series for <span class="chem">tan x</span>. This investigation builds one.</p><p>(a) Show that <span class="chem">y = tan x</span> satisfies the differential equation <span class="chem">dy/dx = 1 + y^2</span> with <span class="chem">y(0) = 0</span>. <strong>[2 marks]</strong></p><p>(b) Show that <span class="chem">d^2y/dx^2 = 2y(1 + y^2)</span> and <span class="chem">d^3y/dx^3 = 2(1 + y^2)(1 + 3y^2)</span>. <strong>[4 marks]</strong></p><p>(c) Hence find the Maclaurin series for <span class="chem">tan x</span> up to and including the term in <span class="chem">x^3</span>. <strong>[2 marks]</strong></p><p>(d) Explain why the Maclaurin series for <span class="chem">tan x</span> contains only odd powers of <span class="chem">x</span>. <strong>[1 mark]</strong></p><p>(e) Let <span class="chem">tan x = x + (1/3)x^3 + ax^5 + bx^7 + …</span>. By substituting this series into <span class="chem">dy/dx = 1 + y^2</span> and comparing coefficients, find the exact values of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[5 marks]</strong></p><p>(f) Use the four terms of the series to estimate <span class="chem">tan 0.5</span>, and find the percentage error compared with the GDC value. <strong>[3 marks]</strong></p>
      stem: "<p><strong>由微分方程得出 tan x 的級數。</strong>公式冊沒有給出 <span class=\"chem\">tan x</span> 的級數。本探究會建立這個級數。</p><p>(a) 證明 (Show that) <span class=\"chem\">y = tan x</span> 滿足微分方程 <span class=\"chem\">dy/dx = 1 + y^2</span>，其中 <span class=\"chem\">y(0) = 0</span>。<strong>[2 marks]</strong></p><p>(b) 證明 <span class=\"chem\">d^2y/dx^2 = 2y(1 + y^2)</span> 及 <span class=\"chem\">d^3y/dx^3 = 2(1 + y^2)(1 + 3y^2)</span>。<strong>[4 marks]</strong></p><p>(c) 由此 (Hence) 求 <span class=\"chem\">tan x</span> 展開至 <span class=\"chem\">x^3</span> 項（包括該項）的麥克勞林級數。<strong>[2 marks]</strong></p><p>(d) 解釋 (Explain) 為何 <span class=\"chem\">tan x</span> 的麥克勞林級數只含 <span class=\"chem\">x</span> 的奇數次冪。<strong>[1 mark]</strong></p><p>(e) 設 <span class=\"chem\">tan x = x + (1/3)x^3 + ax^5 + bx^7 + …</span>。把這個級數代入 <span class=\"chem\">dy/dx = 1 + y^2</span> 並比較係數，求 <span class=\"chem\">a</span> 及 <span class=\"chem\">b</span> 的準確值。<strong>[5 marks]</strong></p><p>(f) 利用級數的四項估算 <span class=\"chem\">tan 0.5</span>，並求與 GDC 值相比的百分誤差。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: a series is built from a DE in two ways here: by repeated differentiation in (b)–(c), and by comparing coefficients in (e).
        "解碼：這裏用兩種方法由微分方程建立級數：在 (b)–(c) 中重複求導，在 (e) 中比較係數。",
        // EN: In (b), write <span class="chem">y'' = 2y + 2y^3</span> before differentiating again, and replace each <span class="chem">y'</span> by <span class="chem">1 + y^2</span>.
        "在 (b) 部，再次求導前先寫成 <span class=\"chem\">y'' = 2y + 2y^3</span>，並把每個 <span class=\"chem\">y'</span> 換成 <span class=\"chem\">1 + y^2</span>。",
        // EN: In (e), the <span class="chem">x^6</span> term of <span class="chem">y^2</span> comes from <span class="chem">(x^3/3)^2</span> and from <span class="chem">2 × x × ax^5</span>.
        "在 (e) 部，<span class=\"chem\">y^2</span> 的 <span class=\"chem\">x^6</span> 項來自 <span class=\"chem\">(x^3/3)^2</span> 及 <span class=\"chem\">2 × x × ax^5</span>。",
      ],
      // EN: <p>(a) <span class="chem">d/dx(tan x) = sec^2 x = 1 + tan^2 x</span>, so <span class="chem">dy/dx = 1 + y^2</span>; and <span class="chem">tan 0 = 0</span>.</p><p>(b) <span class="chem">y'' = 2y y' = 2y(1 + y^2)</span>. Writing <span class="chem">y'' = 2y + 2y^3</span>: <span class="chem">y''' = (2 + 6y^2) y' = 2(1 + 3y^2)(1 + y^2)</span>.</p><p>(c) <span class="chem">y(0) = 0</span>, <span class="chem">y'(0) = 1</span>, <span class="chem">y''(0) = 0</span>, <span class="chem">y'''(0) = 2</span>, so <span class="chem">tan x = x + (2/3!)x^3 + … = x + x^3/3 + …</span>.</p><p>(d) <span class="chem">tan(-x) = -tan x</span>: tan is an odd function, so every even-power coefficient must be zero.</p><p>(e) <span class="chem">dy/dx = 1 + x^2 + 5ax^4 + 7bx^6 + …</span>; <span class="chem">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>. Comparing <span class="chem">x^4</span>: <span class="chem">5a = 2/3 => a = 2/15</span>. Comparing <span class="chem">x^6</span>: <span class="chem">7b = 1/9 + 4/15 = 17/45 => b = 17/315</span>.</p><p>(f) <span class="chem">0.5 + 0.125/3 + (2/15)(0.03125) + (17/315)(0.0078125) = 0.546255</span>. GDC: <span class="chem">tan 0.5 = 0.546302</span>. Percentage error <span class="chem">≈ 0.00870%</span>.</p>
      answer: "<p>(a) <span class=\"chem\">d/dx(tan x) = sec^2 x = 1 + tan^2 x</span>，所以 <span class=\"chem\">dy/dx = 1 + y^2</span>；而 <span class=\"chem\">tan 0 = 0</span>。</p><p>(b) <span class=\"chem\">y'' = 2y y' = 2y(1 + y^2)</span>。寫成 <span class=\"chem\">y'' = 2y + 2y^3</span>：<span class=\"chem\">y''' = (2 + 6y^2) y' = 2(1 + 3y^2)(1 + y^2)</span>。</p><p>(c) <span class=\"chem\">y(0) = 0</span>、<span class=\"chem\">y'(0) = 1</span>、<span class=\"chem\">y''(0) = 0</span>、<span class=\"chem\">y'''(0) = 2</span>，所以 <span class=\"chem\">tan x = x + (2/3!)x^3 + … = x + x^3/3 + …</span>。</p><p>(d) <span class=\"chem\">tan(-x) = -tan x</span>：tan 是奇函數，所以每個偶數次冪的係數都必須為零。</p><p>(e) <span class=\"chem\">dy/dx = 1 + x^2 + 5ax^4 + 7bx^6 + …</span>；<span class=\"chem\">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>。比較 <span class=\"chem\">x^4</span>：<span class=\"chem\">5a = 2/3 => a = 2/15</span>。比較 <span class=\"chem\">x^6</span>：<span class=\"chem\">7b = 1/9 + 4/15 = 17/45 => b = 17/315</span>。</p><p>(f) <span class=\"chem\">0.5 + 0.125/3 + (2/15)(0.03125) + (17/315)(0.0078125) = 0.546255</span>。GDC：<span class=\"chem\">tan 0.5 = 0.546302</span>。百分誤差 <span class=\"chem\">≈ 0.00870%</span>。</p>",
      markscheme: [
        // EN: M1: <span class="chem">d/dx(tan x) = sec^2 x</span>.
        "M1: <span class=\"chem\">d/dx(tan x) = sec^2 x</span>。",
        // EN: A1: uses <span class="chem">sec^2 x = 1 + tan^2 x</span> and <span class="chem">tan 0 = 0</span>. AG: <span class="chem">dy/dx = 1 + y^2</span>, <span class="chem">y(0) = 0</span>; the given line itself earns no mark.
        "A1: 使用 <span class=\"chem\">sec^2 x = 1 + tan^2 x</span> 及 <span class=\"chem\">tan 0 = 0</span>。AG：<span class=\"chem\">dy/dx = 1 + y^2</span>、<span class=\"chem\">y(0) = 0</span>；寫出給定結果本身不得分。",
        // EN: M1: chain rule: <span class="chem">d/dx(y^2) = 2y (dy/dx)</span>.
        "M1: 鏈式法則：<span class=\"chem\">d/dx(y^2) = 2y (dy/dx)</span>。",
        // EN: A1: <span class="chem">y'' = 2y(1 + y^2)</span>.
        "A1: <span class=\"chem\">y'' = 2y(1 + y^2)</span>。",
        // EN: M1: differentiates <span class="chem">2y + 2y^3</span> to <span class="chem">(2 + 6y^2) y'</span>.
        "M1: 把 <span class=\"chem\">2y + 2y^3</span> 求導得 <span class=\"chem\">(2 + 6y^2) y'</span>。",
        // EN: A1: substitutes <span class="chem">y' = 1 + y^2</span>. AG: <span class="chem">y''' = 2(1 + y^2)(1 + 3y^2)</span>; the given line itself earns no mark.
        "A1: 代入 <span class=\"chem\">y' = 1 + y^2</span>。AG：<span class=\"chem\">y''' = 2(1 + y^2)(1 + 3y^2)</span>；寫出給定結果本身不得分。",
        // EN: A1: <span class="chem">y'(0) = 1</span>, <span class="chem">y''(0) = 0</span>, <span class="chem">y'''(0) = 2</span>.
        "A1: <span class=\"chem\">y'(0) = 1</span>、<span class=\"chem\">y''(0) = 0</span>、<span class=\"chem\">y'''(0) = 2</span>。",
        // EN: A1: <span class="chem">x + x^3/3</span>.
        "A1: <span class=\"chem\">x + x^3/3</span>。",
        // EN: R1: <span class="chem">tan x</span> is an odd function (<span class="chem">tan(-x) = -tan x</span>), so even-power coefficients are zero.
        "R1: <span class=\"chem\">tan x</span> 是奇函數（<span class=\"chem\">tan(-x) = -tan x</span>），所以偶數次冪的係數為零。",
        // EN: M1: differentiates the series term by term.
        "M1: 把級數逐項求導。",
        // EN: M1: squares the series, keeping terms up to <span class="chem">x^6</span>.
        "M1: 把級數平方，保留至 <span class=\"chem\">x^6</span> 的項。",
        // EN: A1: <span class="chem">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>.
        "A1: <span class=\"chem\">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>。",
        // EN: A1: <span class="chem">a = 2/15</span>.
        "A1: <span class=\"chem\">a = 2/15</span>。",
        // EN: A1: <span class="chem">b = 17/315</span>.
        "A1: <span class=\"chem\">b = 17/315</span>。",
        // EN: A1: estimate <span class="chem">0.546255</span> (accept 0.5463).
        "A1: 估算值 <span class=\"chem\">0.546255</span>（接受 0.5463）。",
        // EN: A1: GDC value <span class="chem">0.546302</span>.
        "A1: GDC 值 <span class=\"chem\">0.546302</span>。",
        // EN: A1: percentage error <span class="chem">0.00870%</span> (accept 0.0087% or 0.00869% from the rounded estimate).
        "A1: 百分誤差 <span class=\"chem\">0.00870%</span>（若用捨入後的估算值，接受 0.0087% 或 0.00869%）。",
      ],
    },

    // ── t5-4-q058 · short · challenge · AHL · AHL 5.18 · 18 marks
    "t5-4-q058": {
      // EN: <p><strong>Two families of circles that cross at right angles.</strong> In this investigation, <span class="chem">x &gt; 0</span> and <span class="chem">y &gt; 0</span>.</p><p>(a) Use the substitution <span class="chem">y = vx</span> to show that the general solution of <span class="chem">dy/dx = (y^2 - x^2)/(2xy)</span> is <span class="chem">x^2 + y^2 = Cx</span>, where <span class="chem">C</span> is a constant. <strong>[5 marks]</strong></p><p>(b) Describe the curves <span class="chem">x^2 + y^2 = Cx</span> geometrically, giving the centre and radius in terms of <span class="chem">C</span>. <strong>[2 marks]</strong></p><p>A second family of curves satisfies <span class="chem">dy/dx = 2xy/(x^2 - y^2)</span>, for <span class="chem">x != y</span>.</p><p>(c) Show that, at any point where both are defined, a curve of the first family and a curve of the second family cross at right angles. <strong>[2 marks]</strong></p><p>(d) You are given that <span class="chem">(1 - v^2)/(v(1 + v^2)) = 1/v - 2v/(1 + v^2)</span>. Use the substitution <span class="chem">y = vx</span> to show that the second family is <span class="chem">x^2 + y^2 = Ky</span>, where <span class="chem">K</span> is a constant. <strong>[6 marks]</strong></p><p>(e) Find the members of each family that pass through the point <span class="chem">(3, 1)</span>, and verify that their gradients there have product <span class="chem">-1</span>. <strong>[3 marks]</strong></p>
      stem: "<p><strong>兩族互相垂直相交的圓。</strong>在本探究中，<span class=\"chem\">x &gt; 0</span> 及 <span class=\"chem\">y &gt; 0</span>。</p><p>(a) 利用代換 <span class=\"chem\">y = vx</span> 證明 (Show that) <span class=\"chem\">dy/dx = (y^2 - x^2)/(2xy)</span> 的通解是 <span class=\"chem\">x^2 + y^2 = Cx</span>，其中 <span class=\"chem\">C</span> 是常數。<strong>[5 marks]</strong></p><p>(b) 以幾何方式描述 (Describe) 曲線 <span class=\"chem\">x^2 + y^2 = Cx</span>，並以 <span class=\"chem\">C</span> 表示圓心和半徑。<strong>[2 marks]</strong></p><p>第二族曲線滿足 <span class=\"chem\">dy/dx = 2xy/(x^2 - y^2)</span>，其中 <span class=\"chem\">x != y</span>。</p><p>(c) 證明在兩者都有定義的任何一點，第一族的曲線與第二族的曲線都互相垂直相交。<strong>[2 marks]</strong></p><p>(d) 已知 <span class=\"chem\">(1 - v^2)/(v(1 + v^2)) = 1/v - 2v/(1 + v^2)</span>。利用代換 <span class=\"chem\">y = vx</span> 證明第二族是 <span class=\"chem\">x^2 + y^2 = Ky</span>，其中 <span class=\"chem\">K</span> 是常數。<strong>[6 marks]</strong></p><p>(e) 求每一族中通過點 <span class=\"chem\">(3, 1)</span> 的曲線，並驗證 (Verify) 它們在該點的斜率之積為 <span class=\"chem\">-1</span>。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: both DEs are homogeneous (each is a function of <span class="chem">y/x</span>), so each part is the <span class="chem">y = vx</span> method; (c) is about perpendicular gradients <span class="chem">m_1 m_2 = -1</span>.
        "解碼：兩個微分方程都是齊次的（每個都是 <span class=\"chem\">y/x</span> 的函數），所以每一部分都用 <span class=\"chem\">y = vx</span> 方法；(c) 是關於互相垂直的斜率 <span class=\"chem\">m_1 m_2 = -1</span>。",
        // EN: In (a), after substituting, <span class="chem">(v^2 - 1)/(2v) - v = (v^2 - 1 - 2v^2)/(2v)</span>.
        "在 (a) 部，代換後 <span class=\"chem\">(v^2 - 1)/(2v) - v = (v^2 - 1 - 2v^2)/(2v)</span>。",
        // EN: In (b), complete the square in <span class="chem">x</span>. In (e), substitute <span class="chem">(3, 1)</span> into each family, and into each DE for the gradients.
        "在 (b) 部，對 <span class=\"chem\">x</span> 配方。在 (e) 部，把 <span class=\"chem\">(3, 1)</span> 代入每一族，並代入每個微分方程求斜率。",
      ],
      // EN: <p>(a) <span class="chem">v + x(dv/dx) = (v^2 - 1)/(2v) => x(dv/dx) = -(1 + v^2)/(2v)</span>. Then <span class="chem">int 2v/(1 + v^2) dv = -int (1/x) dx => ln(1 + v^2) = -ln x + c</span>, so <span class="chem">1 + v^2 = C/x</span>. Multiplying by <span class="chem">x^2</span>: <span class="chem">x^2 + y^2 = Cx</span>.</p><p>(b) <span class="chem">(x - C/2)^2 + y^2 = C^2/4</span>: circles with centre <span class="chem">(C/2, 0)</span> on the <span class="chem">x</span>-axis and radius <span class="chem">C/2</span>, all passing through the origin (and touching the <span class="chem">y</span>-axis there).</p><p>(c) <span class="chem">((y^2 - x^2)/(2xy)) × (2xy/(x^2 - y^2)) = -1</span>, so the tangents are perpendicular.</p><p>(d) <span class="chem">v + x(dv/dx) = 2v/(1 - v^2) => x(dv/dx) = (2v - v + v^3)/(1 - v^2) = v(1 + v^2)/(1 - v^2)</span>. So <span class="chem">int (1/v - 2v/(1 + v^2)) dv = int (1/x) dx => ln v - ln(1 + v^2) = ln x + c</span>, so <span class="chem">v/(1 + v^2) = Ax</span>. With <span class="chem">v = y/x</span>: <span class="chem">xy/(x^2 + y^2) = Ax</span>, so <span class="chem">x^2 + y^2 = Ky</span> with <span class="chem">K = 1/A</span>.</p><p>(e) <span class="chem">10 = 3C => C = 10/3</span>: <span class="chem">x^2 + y^2 = (10/3)x</span>. <span class="chem">10 = K</span>: <span class="chem">x^2 + y^2 = 10y</span>. Gradients at <span class="chem">(3, 1)</span>: <span class="chem">(1 - 9)/6 = -4/3</span> and <span class="chem">6/(9 - 1) = 3/4</span>; product <span class="chem">-1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">v + x(dv/dx) = (v^2 - 1)/(2v) => x(dv/dx) = -(1 + v^2)/(2v)</span>。於是 <span class=\"chem\">int 2v/(1 + v^2) dv = -int (1/x) dx => ln(1 + v^2) = -ln x + c</span>，所以 <span class=\"chem\">1 + v^2 = C/x</span>。乘以 <span class=\"chem\">x^2</span>：<span class=\"chem\">x^2 + y^2 = Cx</span>。</p><p>(b) <span class=\"chem\">(x - C/2)^2 + y^2 = C^2/4</span>：圓心為 <span class=\"chem\">x</span> 軸上的 <span class=\"chem\">(C/2, 0)</span>、半徑為 <span class=\"chem\">C/2</span> 的圓，全部都通過原點（並在原點與 <span class=\"chem\">y</span> 軸相切）。</p><p>(c) <span class=\"chem\">((y^2 - x^2)/(2xy)) × (2xy/(x^2 - y^2)) = -1</span>，所以切線互相垂直。</p><p>(d) <span class=\"chem\">v + x(dv/dx) = 2v/(1 - v^2) => x(dv/dx) = (2v - v + v^3)/(1 - v^2) = v(1 + v^2)/(1 - v^2)</span>。所以 <span class=\"chem\">int (1/v - 2v/(1 + v^2)) dv = int (1/x) dx => ln v - ln(1 + v^2) = ln x + c</span>，從而 <span class=\"chem\">v/(1 + v^2) = Ax</span>。利用 <span class=\"chem\">v = y/x</span>：<span class=\"chem\">xy/(x^2 + y^2) = Ax</span>，所以 <span class=\"chem\">x^2 + y^2 = Ky</span>，其中 <span class=\"chem\">K = 1/A</span>。</p><p>(e) <span class=\"chem\">10 = 3C => C = 10/3</span>：<span class=\"chem\">x^2 + y^2 = (10/3)x</span>。<span class=\"chem\">10 = K</span>：<span class=\"chem\">x^2 + y^2 = 10y</span>。在 <span class=\"chem\">(3, 1)</span> 的斜率：<span class=\"chem\">(1 - 9)/6 = -4/3</span> 及 <span class=\"chem\">6/(9 - 1) = 3/4</span>；積為 <span class=\"chem\">-1</span>。</p>",
      markscheme: [
        // EN: M1: substitutes <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>.
        "M1: 代入 <span class=\"chem\">y = vx</span> 及 <span class=\"chem\">dy/dx = v + x(dv/dx)</span>。",
        // EN: A1: <span class="chem">x(dv/dx) = -(1 + v^2)/(2v)</span>.
        "A1: <span class=\"chem\">x(dv/dx) = -(1 + v^2)/(2v)</span>。",
        // EN: M1: separates: <span class="chem">int 2v/(1 + v^2) dv = -int (1/x) dx</span>.
        "M1: 分離變數：<span class=\"chem\">int 2v/(1 + v^2) dv = -int (1/x) dx</span>。",
        // EN: A1: <span class="chem">ln(1 + v^2) = -ln x + c</span>.
        "A1: <span class=\"chem\">ln(1 + v^2) = -ln x + c</span>。",
        // EN: A1: <span class="chem">1 + y^2/x^2 = C/x</span>. AG: <span class="chem">x^2 + y^2 = Cx</span>; the given line itself earns no mark.
        "A1: <span class=\"chem\">1 + y^2/x^2 = C/x</span>。AG：<span class=\"chem\">x^2 + y^2 = Cx</span>；寫出給定結果本身不得分。",
        // EN: M1: completes the square: <span class="chem">(x - C/2)^2 + y^2 = (C/2)^2</span>.
        "M1: 配方：<span class=\"chem\">(x - C/2)^2 + y^2 = (C/2)^2</span>。",
        // EN: A1: circles, centre <span class="chem">(C/2, 0)</span>, radius <span class="chem">C/2</span> (through the origin).
        "A1: 圓，圓心 <span class=\"chem\">(C/2, 0)</span>，半徑 <span class=\"chem\">C/2</span>（通過原點）。",
        // EN: M1: multiplies the two gradient expressions.
        "M1: 把兩個斜率表達式相乘。",
        // EN: A1: product <span class="chem">= -1</span>, so the curves are perpendicular where they cross.
        "A1: 積為 <span class=\"chem\">= -1</span>，所以曲線在相交處互相垂直。",
        // EN: M1: substitutes <span class="chem">y = vx</span> into the second DE.
        "M1: 把 <span class=\"chem\">y = vx</span> 代入第二個微分方程。",
        // EN: A1: <span class="chem">x(dv/dx) = v(1 + v^2)/(1 - v^2)</span>.
        "A1: <span class=\"chem\">x(dv/dx) = v(1 + v^2)/(1 - v^2)</span>。",
        // EN: M1: separates and uses the given partial fractions.
        "M1: 分離變數並使用給定的部分分式。",
        // EN: A1: <span class="chem">ln v - ln(1 + v^2) = ln x + c</span>.
        "A1: <span class=\"chem\">ln v - ln(1 + v^2) = ln x + c</span>。",
        // EN: M1: removes logarithms: <span class="chem">v/(1 + v^2) = Ax</span>.
        "M1: 消去對數：<span class=\"chem\">v/(1 + v^2) = Ax</span>。",
        // EN: A1: substitutes <span class="chem">v = y/x</span> and simplifies to <span class="chem">xy/(x^2 + y^2) = Ax</span>. AG: <span class="chem">x^2 + y^2 = Ky</span>; the given line itself earns no mark.
        "A1: 代入 <span class=\"chem\">v = y/x</span> 並化簡為 <span class=\"chem\">xy/(x^2 + y^2) = Ax</span>。AG：<span class=\"chem\">x^2 + y^2 = Ky</span>；寫出給定結果本身不得分。",
        // EN: A1: <span class="chem">C = 10/3</span>.
        "A1: <span class=\"chem\">C = 10/3</span>。",
        // EN: A1: <span class="chem">K = 10</span>.
        "A1: <span class=\"chem\">K = 10</span>。",
        // EN: A1: gradients <span class="chem">-4/3</span> and <span class="chem">3/4</span>, product <span class="chem">-1</span>.
        "A1: 斜率 <span class=\"chem\">-4/3</span> 及 <span class=\"chem\">3/4</span>，積為 <span class=\"chem\">-1</span>。",
      ],
    },

    // ── t5-4-q059 · short · challenge · AHL · AHL 5.18 · 18 marks
    "t5-4-q059": {
      // EN: <p><strong>A family of linear differential equations.</strong> For each integer <span class="chem">n &gt;= 0</span>, let <span class="chem">y_n(x)</span> be the solution of <span class="chem">dy/dx + y = x^n</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Use an integrating factor to find <span class="chem">y_0(x)</span> and <span class="chem">y_1(x)</span>. <strong>[4 marks]</strong></p><p>(b) Show that <span class="chem">y_2(x) = x^2 - 2x + 2 - 2e^{-x}</span>. <strong>[3 marks]</strong></p><p>(c) By differentiating the equation <span class="chem">dy_n/dx + y_n = x^n</span>, show that, for <span class="chem">n &gt;= 1</span>, the function <span class="chem">z = (1/n)(dy_n/dx)</span> satisfies <span class="chem">dz/dx + z = x^{n - 1}</span> with <span class="chem">z(0) = 0</span>. Deduce that <span class="chem">dy_n/dx = n y_{n - 1}</span>, and verify this for <span class="chem">n = 2</span>. <strong>[3 marks]</strong></p><p>(d) Conjecture an expression for <span class="chem">y_3(x)</span>, and verify it by substituting into the differential equation. <strong>[4 marks]</strong></p><p>(e) Explain why <span class="chem">y_n(x) = e^{-x} int_0^x t^n e^t dt</span>. Use this and your GDC to find <span class="chem">y_3(1)</span>, and check that it agrees with your answer to (d). <strong>[2 marks]</strong></p><p>(f) Show that <span class="chem">0 &lt; y_n(1) &lt; 1/(n + 1)</span> for <span class="chem">n &gt;= 1</span>. <strong>[2 marks]</strong></p>
      stem: "<p><strong>一族線性微分方程。</strong>對每個整數 <span class=\"chem\">n &gt;= 0</span>，設 <span class=\"chem\">y_n(x)</span> 為 <span class=\"chem\">dy/dx + y = x^n</span> 的解，其中 <span class=\"chem\">y(0) = 0</span>。</p><p>(a) 利用積分因子求 (Find) <span class=\"chem\">y_0(x)</span> 及 <span class=\"chem\">y_1(x)</span>。<strong>[4 marks]</strong></p><p>(b) 證明 (Show that) <span class=\"chem\">y_2(x) = x^2 - 2x + 2 - 2e^{-x}</span>。<strong>[3 marks]</strong></p><p>(c) 把方程 <span class=\"chem\">dy_n/dx + y_n = x^n</span> 求導，證明對 <span class=\"chem\">n &gt;= 1</span>，函數 <span class=\"chem\">z = (1/n)(dy_n/dx)</span> 滿足 <span class=\"chem\">dz/dx + z = x^{n - 1}</span>，其中 <span class=\"chem\">z(0) = 0</span>。推斷 (Deduce) <span class=\"chem\">dy_n/dx = n y_{n - 1}</span>，並就 <span class=\"chem\">n = 2</span> 驗證這結果。<strong>[3 marks]</strong></p><p>(d) 猜想 (Conjecture) <span class=\"chem\">y_3(x)</span> 的表達式，並代入微分方程驗證它。<strong>[4 marks]</strong></p><p>(e) 解釋 (Explain) 為何 <span class=\"chem\">y_n(x) = e^{-x} int_0^x t^n e^t dt</span>。利用這結果和你的 GDC 求 <span class=\"chem\">y_3(1)</span>，並檢查它與你在 (d) 部的答案是否一致。<strong>[2 marks]</strong></p><p>(f) 證明對 <span class=\"chem\">n &gt;= 1</span>，<span class=\"chem\">0 &lt; y_n(1) &lt; 1/(n + 1)</span>。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: one method (integrating factor) for a whole family of DEs; the aim is to spot the pattern and prove it, not to solve each one from scratch.
        "解碼：用同一種方法（積分因子）處理一整族微分方程；目的是找出規律並加以證明，而不是逐一從頭求解。",
        // EN: The integrating factor is always <span class="chem">e^x</span>. For (d), use <span class="chem">y_3' = 3y_2</span> from (c): integrate <span class="chem">3y_2</span> and choose the constant so that <span class="chem">y_3(0) = 0</span>.
        "積分因子總是 <span class=\"chem\">e^x</span>。在 (d) 部，使用 (c) 中的 <span class=\"chem\">y_3' = 3y_2</span>：積分 <span class=\"chem\">3y_2</span> 並選取常數使 <span class=\"chem\">y_3(0) = 0</span>。",
        // EN: For (f), compare <span class="chem">t^n e^t</span> with <span class="chem">t^n e</span> on <span class="chem">0 &lt; t &lt; 1</span>.
        "在 (f) 部，在 <span class=\"chem\">0 &lt; t &lt; 1</span> 上比較 <span class=\"chem\">t^n e^t</span> 與 <span class=\"chem\">t^n e</span>。",
      ],
      // EN: <p>(a) IF <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^n e^x</span>. For <span class="chem">n = 0</span>: <span class="chem">y e^x = e^x + C</span>, <span class="chem">C = -1</span>, so <span class="chem">y_0 = 1 - e^{-x}</span>. For <span class="chem">n = 1</span>: by parts <span class="chem">int x e^x dx = (x - 1)e^x + C</span>, <span class="chem">C = 1</span>, so <span class="chem">y_1 = x - 1 + e^{-x}</span>.</p><p>(b) <span class="chem">int x^2 e^x dx = x^2 e^x - 2 int x e^x dx = (x^2 - 2x + 2)e^x + C</span>; <span class="chem">y(0) = 0 => C = -2</span>, so <span class="chem">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>.</p><p>(c) Differentiating: <span class="chem">y_n'' + y_n' = n x^{n - 1}</span>; dividing by <span class="chem">n</span>: <span class="chem">z' + z = x^{n - 1}</span>. From the DE at <span class="chem">x = 0</span>: <span class="chem">y_n'(0) = 0^n - y_n(0) = 0</span> for <span class="chem">n &gt;= 1</span>, so <span class="chem">z(0) = 0</span>. Then <span class="chem">z</span> solves the same initial value problem as <span class="chem">y_{n - 1}</span>, so <span class="chem">z = y_{n - 1}</span> and <span class="chem">y_n' = n y_{n - 1}</span>. Check: <span class="chem">y_2' = 2x - 2 + 2e^{-x} = 2y_1</span>.</p><p>(d) Pattern: <span class="chem">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>. Then <span class="chem">y_3' = 3x^2 - 6x + 6 - 6e^{-x}</span>, and <span class="chem">y_3' + y_3 = x^3</span>; <span class="chem">y_3(0) = -6 + 6 = 0</span>. (Also <span class="chem">y_3' = 3y_2</span>.)</p><p>(e) Multiplying by the IF <span class="chem">e^x</span> and integrating <span class="chem">d/dt(y e^t) = t^n e^t</span> from 0 to <span class="chem">x</span> with <span class="chem">y(0) = 0</span> gives <span class="chem">y_n(x) e^x = int_0^x t^n e^t dt</span>. GDC: <span class="chem">e^{-1} int_0^1 t^3 e^t dt = 0.207277</span>, and (d) gives <span class="chem">y_3(1) = 1 - 3 + 6 - 6 + 6e^{-1} = 6/e - 2 = 0.207277</span>.</p><p>(f) On <span class="chem">0 &lt; t &lt; 1</span>, <span class="chem">0 &lt; t^n e^t &lt; e t^n</span>. So <span class="chem">0 &lt; y_n(1) = e^{-1} int_0^1 t^n e^t dt &lt; e^{-1} × e int_0^1 t^n dt = 1/(n + 1)</span>.</p>
      answer: "<p>(a) 積分因子 <span class=\"chem\">e^x</span>：<span class=\"chem\">d/dx(y e^x) = x^n e^x</span>。對於 <span class=\"chem\">n = 0</span>：<span class=\"chem\">y e^x = e^x + C</span>，<span class=\"chem\">C = -1</span>，所以 <span class=\"chem\">y_0 = 1 - e^{-x}</span>。對於 <span class=\"chem\">n = 1</span>：用分部積分法 <span class=\"chem\">int x e^x dx = (x - 1)e^x + C</span>，<span class=\"chem\">C = 1</span>，所以 <span class=\"chem\">y_1 = x - 1 + e^{-x}</span>。</p><p>(b) <span class=\"chem\">int x^2 e^x dx = x^2 e^x - 2 int x e^x dx = (x^2 - 2x + 2)e^x + C</span>；<span class=\"chem\">y(0) = 0 => C = -2</span>，所以 <span class=\"chem\">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>。</p><p>(c) 求導：<span class=\"chem\">y_n'' + y_n' = n x^{n - 1}</span>；除以 <span class=\"chem\">n</span>：<span class=\"chem\">z' + z = x^{n - 1}</span>。由微分方程在 <span class=\"chem\">x = 0</span>：對 <span class=\"chem\">n &gt;= 1</span>，<span class=\"chem\">y_n'(0) = 0^n - y_n(0) = 0</span>，所以 <span class=\"chem\">z(0) = 0</span>。於是 <span class=\"chem\">z</span> 與 <span class=\"chem\">y_{n - 1}</span> 解同一個初值問題，所以 <span class=\"chem\">z = y_{n - 1}</span> 及 <span class=\"chem\">y_n' = n y_{n - 1}</span>。檢查：<span class=\"chem\">y_2' = 2x - 2 + 2e^{-x} = 2y_1</span>。</p><p>(d) 規律：<span class=\"chem\">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>。於是 <span class=\"chem\">y_3' = 3x^2 - 6x + 6 - 6e^{-x}</span>，而 <span class=\"chem\">y_3' + y_3 = x^3</span>；<span class=\"chem\">y_3(0) = -6 + 6 = 0</span>。（亦有 <span class=\"chem\">y_3' = 3y_2</span>。）</p><p>(e) 乘以積分因子 <span class=\"chem\">e^x</span>，並把 <span class=\"chem\">d/dt(y e^t) = t^n e^t</span> 由 0 積分至 <span class=\"chem\">x</span>，利用 <span class=\"chem\">y(0) = 0</span> 得 <span class=\"chem\">y_n(x) e^x = int_0^x t^n e^t dt</span>。GDC：<span class=\"chem\">e^{-1} int_0^1 t^3 e^t dt = 0.207277</span>，而 (d) 給出 <span class=\"chem\">y_3(1) = 1 - 3 + 6 - 6 + 6e^{-1} = 6/e - 2 = 0.207277</span>。</p><p>(f) 在 <span class=\"chem\">0 &lt; t &lt; 1</span> 上，<span class=\"chem\">0 &lt; t^n e^t &lt; e t^n</span>。所以 <span class=\"chem\">0 &lt; y_n(1) = e^{-1} int_0^1 t^n e^t dt &lt; e^{-1} × e int_0^1 t^n dt = 1/(n + 1)</span>。</p>",
      markscheme: [
        // EN: M1: integrating factor <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^n e^x</span>.
        "M1: 積分因子 <span class=\"chem\">e^x</span>：<span class=\"chem\">d/dx(y e^x) = x^n e^x</span>。",
        // EN: A1: <span class="chem">y_0 = 1 - e^{-x}</span>.
        "A1: <span class=\"chem\">y_0 = 1 - e^{-x}</span>。",
        // EN: M1: integration by parts for <span class="chem">int x e^x dx</span>.
        "M1: 對 <span class=\"chem\">int x e^x dx</span> 使用分部積分法。",
        // EN: A1: <span class="chem">y_1 = x - 1 + e^{-x}</span>.
        "A1: <span class=\"chem\">y_1 = x - 1 + e^{-x}</span>。",
        // EN: M1: integration by parts on <span class="chem">int x^2 e^x dx</span>.
        "M1: 對 <span class=\"chem\">int x^2 e^x dx</span> 使用分部積分法。",
        // EN: A1: <span class="chem">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>.
        "A1: <span class=\"chem\">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>。",
        // EN: A1: <span class="chem">C = -2</span>. AG: <span class="chem">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>; the given line itself earns no mark.
        "A1: <span class=\"chem\">C = -2</span>。AG：<span class=\"chem\">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>；寫出給定結果本身不得分。",
        // EN: M1: differentiates the DE and divides by <span class="chem">n</span>.
        "M1: 把微分方程求導並除以 <span class=\"chem\">n</span>。",
        // EN: R1: <span class="chem">z(0) = (1/n)(0^n - y_n(0)) = 0</span>, so <span class="chem">z</span> and <span class="chem">y_{n - 1}</span> solve the same initial value problem.
        "R1: <span class=\"chem\">z(0) = (1/n)(0^n - y_n(0)) = 0</span>，所以 <span class=\"chem\">z</span> 與 <span class=\"chem\">y_{n - 1}</span> 解同一個初值問題。",
        // EN: A1: verifies <span class="chem">y_2' = 2x - 2 + 2e^{-x} = 2y_1</span>.
        "A1: 驗證 <span class=\"chem\">y_2' = 2x - 2 + 2e^{-x} = 2y_1</span>。",
        // EN: A1: conjecture <span class="chem">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>.
        "A1: 猜想 <span class=\"chem\">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>。",
        // EN: M1: differentiates the conjecture.
        "M1: 把猜想求導。",
        // EN: A1: shows <span class="chem">y_3' + y_3 = x^3</span>.
        "A1: 證明 <span class=\"chem\">y_3' + y_3 = x^3</span>。",
        // EN: A1: checks <span class="chem">y_3(0) = 0</span>.
        "A1: 檢查 <span class=\"chem\">y_3(0) = 0</span>。",
        // EN: R1: integrating <span class="chem">d/dt(y e^t) = t^n e^t</span> from 0 to <span class="chem">x</span> with <span class="chem">y(0) = 0</span>.
        "R1: 把 <span class=\"chem\">d/dt(y e^t) = t^n e^t</span> 由 0 積分至 <span class=\"chem\">x</span>，利用 <span class=\"chem\">y(0) = 0</span>。",
        // EN: A1: <span class="chem">y_3(1) = 0.207277</span> from both methods (<span class="chem">6/e - 2</span>).
        "A1: 兩種方法都得 <span class=\"chem\">y_3(1) = 0.207277</span>（<span class=\"chem\">6/e - 2</span>）。",
        // EN: M1: uses <span class="chem">0 &lt; e^t &lt; e</span> on <span class="chem">(0, 1)</span>.
        "M1: 在 <span class=\"chem\">(0, 1)</span> 上使用 <span class=\"chem\">0 &lt; e^t &lt; e</span>。",
        // EN: A1: <span class="chem">int_0^1 t^n dt = 1/(n + 1)</span>, giving the bounds.
        "A1: <span class=\"chem\">int_0^1 t^n dt = 1/(n + 1)</span>，從而得出上下界。",
      ],
    },

  }
});
