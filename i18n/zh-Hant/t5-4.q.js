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

    // ── t5-4-q003 · mcq · foundation · AHL · AHL 5.18 · 3 marks
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
        // EN (option D): Notice <span class="chem">2 ln x = ln(x^2)</span>, not <span class=\"chem\">ln(x^{1/2})</span>.
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
      // EN: <p>Multiplying by <span class="chem">I(x) = e^{2x}</span> gives <span class="chem">d/dx(y e^{2x}) = 6 e^{3x}</span>, so <span class="chem">y e^{2x} = 2 e^{3x} + C</span>. At <span class=\"chem\">(0, 5)</span>: <span class=\"chem\">5 = 2 + C => C = 3</span>, giving <span class=\"chem\">y = 2e^x + 3e^{-2x}</span>. At <span class=\"chem\">x = ln 2</span>: <span class=\"chem\">y = 2(2) + 3(1/4) = 4.75</span>.</p>
      solution: "<p>乘以 <span class=\"chem\">I(x) = e^{2x}</span> 得 <span class=\"chem\">d/dx(y e^{2x}) = 6 e^{3x}</span>，故 <span class=\"chem\">y e^{2x} = 2 e^{3x} + C</span>。在 <span class=\"chem\">(0, 5)</span> 處：<span class=\"chem\">5 = 2 + C => C = 3</span>，得出 <span class=\"chem\">y = 2e^x + 3e^{-2x}</span>。當 <span class=\"chem\">x = ln 2</span> 時：<span class=\"chem\">y = 2(2) + 3(1/4) = 4.75</span>。</p>",
    },

    // ── t5-4-q010 · mcq · exam · AHL · AHL 5.19 · 3 marks
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

    // ── t5-4-q013 · mcq · exam · AHL · AHL 5.19 · 3 marks
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
        // EN (option C): <span class="chem">5! = 120</span>, whereas <span class=\"chem\">4! = 24</span>.
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
        // EN: A1: integrates to <span class="chem">x^{-2} y = sin x + C</span> (must include <span class=\"chem\">+ C</span>).
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
        // EN: Find <span class="chem">y'(0) = 1^2 - 0 = 1</span>, then differentiate implicitly: <span class="chem">y'' = 2y y' - 1</span>.
        "求得 <span class=\"chem\">y'(0) = 1^2 - 0 = 1</span>，然後隱式求導：<span class=\"chem\">y'' = 2y y' - 1</span>。",
        // EN: Differentiate again: <span class="chem">y''' = 2(y')^2 + 2y y''</span>, evaluate <span class="chem">y'''(0)</span>, and divide by <span class=\"chem\">3! = 6</span>.
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
        // EN: Substitute <span class="chem">y = vx</span>: <span class="chem">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>.
        "代入 <span class=\"chem\">y = vx</span>：<span class=\"chem\">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>。",
        // EN: Separate variables: <span class="chem">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>.
        "分離變數：<span class=\"chem\">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>。",
      ],
      // EN: <p>Setting <span class="chem">y = vx</span> gives <span class="chem">x(dv/dx) = (1 - v^2)/(2v)</span>, so <span class="chem">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>. At <span class="chem">(1, 2)</span>, <span class="chem">v = 2 => A = 3</span>, giving <span class="chem">y^2 = x^2 + 3x</span>. Hence <span class="chem">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span>.</p>
      solution: "<p>設 <span class=\"chem\">y = vx</span> 得 <span class=\"chem\">x(dv/dx) = (1 - v^2)/(2v)</span>，故 <span class=\"chem\">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>。在 <span class=\"chem\">(1, 2)</span> 處，<span class=\"chem\">v = 2 => A = 3</span>，得出 <span class=\"chem\">y^2 = x^2 + 3x</span>。因此 <span class=\"chem\">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span>。</p>",
    },

    // ── t5-4-q017 · mcq · challenge · AHL · AHL 5.19 · 5 marks
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
        // EN: A1: integrates from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span>: <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt</span>, leading to the given result AG (no mark for the given line).
        "A1: 由 <span class=\"chem\">0</span> 積分至 <span class=\"chem\">x</span> 並代入 <span class=\"chem\">y(0) = 0</span>：<span class=\"chem\">y(x) e^{x^2} = int_0^x e^{t^2} dt</span>，從而得出題目給出的結果 AG（寫出給定結果本身不得分）。",
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
  }
});
