/* t5-4.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't5-4.q', {
  questions: {

    // ── t5-4-q001 · numeric · foundation · AHL · AHL 5.18 · 3 marks
    "t5-4-q001": {
      // EN: <p>Given <span class="chem">dy/dx = 2x - y</span> with initial condition <span class="chem">y(0) = 2</span>, use Euler’s method with step size <span class="chem">h = 0.2</span> to approximate <span class="chem">y(0.4)</span>.</p>
      stem: "<p>初期条件 <span class=\"chem\">y(0) = 2</span> を満たす <span class=\"chem\">dy/dx = 2x - y</span> が与えられたとき、刻み幅 <span class=\"chem\">h = 0.2</span> のオイラー法を用いて <span class=\"chem\">y(0.4)</span> の近似値を求めなさい。</p>",
      hints: [
        // EN: First step (<span class="chem">x_0 = 0, y_0 = 2</span>): <span class="chem">y_1 = 2 + 0.2(2(0) - 2) = 1.6</span> at <span class="chem">x_1 = 0.2</span>.
        "第 1 ステップ（<span class=\"chem\">x_0 = 0, y_0 = 2</span>）：<span class=\"chem\">x_1 = 0.2</span> で <span class=\"chem\">y_1 = 2 + 0.2(2(0) - 2) = 1.6</span>。",
        // EN: Second step (<span class="chem">x_1 = 0.2, y_1 = 1.6</span>): <span class="chem">y_2 = 1.6 + 0.2(2(0.2) - 1.6)</span>.
        "第 2 ステップ（<span class=\"chem\">x_1 = 0.2, y_1 = 1.6</span>）：<span class=\"chem\">y_2 = 1.6 + 0.2(2(0.2) - 1.6)</span>。",
      ],
      // EN: <p>Step 1: <span class="chem">y_1 = 2 + 0.2(0 - 2) = 1.6</span> at <span class="chem">x_1 = 0.2</span>. Step 2: <span class="chem">y_2 = 1.6 + 0.2(0.4 - 1.6) = 1.6 - 0.24 = 1.36</span>.</p>
      solution: "<p>ステップ 1：<span class=\"chem\">x_1 = 0.2</span> で <span class=\"chem\">y_1 = 2 + 0.2(0 - 2) = 1.6</span>。ステップ 2：<span class=\"chem\">y_2 = 1.6 + 0.2(0.4 - 1.6) = 1.6 - 0.24 = 1.36</span>。</p>",
    },

    // ── t5-4-q002 · mcq · foundation · AHL · AHL 5.18 · 2 marks
    "t5-4-q002": {
      // EN: <p>A solution curve <span class="chem">y = f(x)</span> is <strong>concave down</strong> (<span class="chem">d^2y/dx^2 &lt; 0</span>) on the interval <span class="chem">[0, 1]</span>. What can be concluded about an Euler’s method approximation of <span class="chem">f(1)</span> starting from <span class="chem">(0, f(0))</span>?</p>
      stem: "<p>解曲線 <span class=\"chem\">y = f(x)</span> が区間 <span class=\"chem\">[0, 1]</span> で<strong>上に凸</strong>（<span class=\"chem\">d^2y/dx^2 &lt; 0</span>）であるとする。<span class=\"chem\">(0, f(0))</span> から出発してオイラー法で <span class=\"chem\">f(1)</span> を近似すると、どのような結論が得られますか？</p>",
      options: [
        // EN: It gives an <strong>overestimate</strong> because the tangent lines lie above the curve.
        "接線が曲線の上側にあるため、<strong>過大評価（大きめの近似値）</strong>になる。",
        // EN: It gives an <strong>underestimate</strong> because the tangent lines lie below the curve.
        "接線が曲線の下側にあるため、<strong>過小評価（小さめの近似値）</strong>になる。",
        // EN: It gives the exact value because Euler’s method is independent of concavity.
        "オイラー法は凹凸に依存しないため、正確な値が得られる。",
        // EN: It gives an <strong>underestimate</strong> whenever <span class="chem">dy/dx &gt; 0</span> and an overestimate whenever <span class="chem">dy/dx &lt; 0</span>.
        "<span class=\"chem\">dy/dx &gt; 0</span> のときは常に<strong>過小評価</strong>、<span class=\"chem\">dy/dx &lt; 0</span> のときは常に過大評価になる。",
      ],
      hints: [
        // EN: Sketch a concave-down curve (shaped like an arch) and draw its tangent line at the starting point.
        "上に凸の曲線（アーチ形）を描き、出発点での接線を引いてみましょう。",
      ],
      // EN: <p>When <span class="chem">d^2y/dx^2 &lt; 0</span>, the gradient is decreasing, so every tangent line sits above the curve. Stepping along tangent lines therefore produces an overestimate.</p>
      solution: "<p><span class=\"chem\">d^2y/dx^2 &lt; 0</span> のとき、傾きは減少しているため、どの接線も曲線の上側に位置します。したがって接線に沿って進むと過大評価になります。</p>",
      misconception: {
        // EN (option B): Tangent lines lie below a curve only when it is concave <em>up</em> (<span class="chem">d^2y/dx^2 &gt; 0</span>).
        "1": "接線が曲線の下側にあるのは、曲線が<em>下に凸</em>（<span class=\"chem\">d^2y/dx^2 &gt; 0</span>）のときだけです。",
        // EN (option C): Euler’s method follows straight tangent segments, so curvature (<span class="chem">d^2y/dx^2 != 0</span>) always introduces truncation error.
        "2": "オイラー法は直線の接線分をたどるため、曲がり具合（<span class=\"chem\">d^2y/dx^2 != 0</span>）があると必ず打ち切り誤差が生じます。",
        // EN (option D): The direction of the bias depends on the sign of the second derivative (concavity), not the first derivative.
        "3": "誤差の向きは第 1 次導関数ではなく、第 2 次導関数の符号（凹凸）によって決まります。",
      },
    },

    // ── t5-4-q003 · mcq · foundation · AHL · AHL 5.18 · 2 marks
    "t5-4-q003": {
      // EN: <p>Solve the separable differential equation <span class="chem">dy/dx = 2y / x</span> (<span class="chem">x &gt; 0, y &gt; 0</span>) given that <span class="chem">y(1) = 3</span>.</p>
      stem: "<p><span class=\"chem\">y(1) = 3</span> が与えられたとき、変数分離形の微分方程式 <span class=\"chem\">dy/dx = 2y / x</span>（<span class=\"chem\">x &gt; 0, y &gt; 0</span>）を解きなさい。</p>",
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
        "変数を分離します：<span class=\"chem\">int (1/y) dy = int (2/x) dx</span>。",
        // EN: Use <span class="chem">2 ln x = ln(x^2)</span> before exponentiating both sides.
        "両辺の指数をとる前に <span class=\"chem\">2 ln x = ln(x^2)</span> を使います。",
      ],
      // EN: <p><span class="chem">int (1/y) dy = int (2/x) dx => ln y = 2 ln x + C => y = A x^2</span>. Since <span class="chem">y(1) = 3</span>, <span class="chem">A = 3</span>, giving <span class="chem">y = 3x^2</span>.</p>
      solution: "<p><span class=\"chem\">int (1/y) dy = int (2/x) dx => ln y = 2 ln x + C => y = A x^2</span>。<span class=\"chem\">y(1) = 3</span> より <span class=\"chem\">A = 3</span> なので、<span class=\"chem\">y = 3x^2</span> となります。</p>",
      misconception: {
        // EN (option B): After integrating <span class="chem">ln y = 2 ln x + C</span>, exponentiating gives <span class="chem">y = A x^2</span> (a multiplicative constant), not <span class="chem">x^2 + C</span>.
        "1": "<span class=\"chem\">ln y = 2 ln x + C</span> の両辺の指数をとると <span class=\"chem\">y = A x^2</span>（掛ける定数）になり、<span class=\"chem\">x^2 + C</span> ではありません。",
        // EN (option C): The right-hand side is <span class="chem">int (2/x) dx = 2 ln x</span>, not <span class="chem">2x</span>.
        "2": "右辺は <span class=\"chem\">int (2/x) dx = 2 ln x</span> であり、<span class=\"chem\">2x</span> ではありません。",
        // EN (option D): Notice <span class="chem">2 ln x = ln(x^2)</span>, not <span class="chem">ln(x^{1/2})</span>.
        "3": "<span class=\"chem\">2 ln x = ln(x^2)</span> であり、<span class=\"chem\">ln(x^{1/2})</span> ではありません。",
      },
    },

    // ── t5-4-q004 · multi · foundation · AHL · AHL 5.18–5.19 · 3 marks
    "t5-4-q004": {
      // EN: <p>Select <strong>all</strong> statements that are true in the IB Math AA HL syllabus.</p>
      stem: "<p>IB Math AA HL のシラバスにおいて正しい記述を<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: The integrating factor for <span class="chem">dy/dx + P(x)y = Q(x)</span> is <span class="chem">I(x) = e^{int P(x) dx}</span>.
        "<span class=\"chem\">dy/dx + P(x)y = Q(x)</span> の積分因子は <span class=\"chem\">I(x) = e^{int P(x) dx}</span> である。",
        // EN: The substitution <span class="chem">y = vx</span> transforms any homogeneous DE <span class="chem">dy/dx = F(y/x)</span> into a separable DE in <span class="chem">v</span> and <span class="chem">x</span>.
        "置換 <span class=\"chem\">y = vx</span> により、同次形微分方程式 <span class=\"chem\">dy/dx = F(y/x)</span> は <span class=\"chem\">v</span> と <span class=\"chem\">x</span> の変数分離形微分方程式に変換される。",
        // EN: In the Maclaurin series for <span class="chem">ln(1 + x)</span>, the <span class="chem">x^n</span> term has denominator <span class="chem">n</span>, not <span class="chem">n!</span>.
        "<span class=\"chem\">ln(1 + x)</span> のマクローリン級数では、<span class=\"chem\">x^n</span> の項の分母は <span class=\"chem\">n!</span> ではなく <span class=\"chem\">n</span> である。",
        // EN: In the Maclaurin series for <span class="chem">arctan x</span>, the <span class="chem">x^3</span> term is <span class="chem">-x^3 / 3!</span>.
        "<span class=\"chem\">arctan x</span> のマクローリン級数では、<span class=\"chem\">x^3</span> の項は <span class=\"chem\">-x^3 / 3!</span> である。",
      ],
      hints: [
        // EN: Check the Formula Booklet expansions for <span class="chem">ln(1 + x)</span> and <span class="chem">arctan x</span> carefully.
        "公式集にある <span class=\"chem\">ln(1 + x)</span> と <span class=\"chem\">arctan x</span> の展開式をよく確認しましょう。",
      ],
      // EN: <p>The first three statements are all true. For <span class="chem">arctan x</span>, the denominators are odd integers <span class="chem">1, 3, 5, ...</span> without factorials.</p>
      solution: "<p>最初の 3 つの記述がすべて正しいです。<span class=\"chem\">arctan x</span> の分母は階乗ではなく奇数 <span class=\"chem\">1, 3, 5, ...</span> です。</p>",
      misconception: {
        // EN (option D): <span class="chem">arctan x = x - x^3/3 + x^5/5 - ...</span> divides by <span class="chem">3</span>, not <span class="chem">3! = 6</span>.
        "3": "<span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span> では <span class=\"chem\">3! = 6</span> ではなく <span class=\"chem\">3</span> で割ります。",
      },
    },

    // ── t5-4-q005 · numeric · foundation · AHL · AHL 5.19 · 2 marks
    "t5-4-q005": {
      // EN: <p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">f(x) = sin(2x)</span>. (You can enter an exact fraction like <span class="mono">-5/7</span>.)</p>
      stem: "<p><span class=\"chem\">f(x) = sin(2x)</span> のマクローリン級数展開における <span class=\"chem\">x^3</span> の正確な係数を求めなさい (Find)。（<span class=\"mono\">-5/7</span> のような正確な分数で入力できます。）</p>",
      hints: [
        // EN: Substitute <span class="chem">u = 2x</span> into the standard Formula Booklet series <span class="chem">sin u = u - u^3/3! + ...</span>.
        "公式集の基本級数 <span class=\"chem\">sin u = u - u^3/3! + ...</span> に <span class=\"chem\">u = 2x</span> を代入します。",
      ],
      // EN: <p><span class="chem">sin(2x) = 2x - (2x)^3 / 6 + ... = 2x - (8/6)x^3 + ... = 2x - (4/3)x^3 + ...</span>, so the coefficient of <span class="chem">x^3</span> is <span class="chem">-4/3</span>.</p>
      solution: "<p><span class=\"chem\">sin(2x) = 2x - (2x)^3 / 6 + ... = 2x - (8/6)x^3 + ... = 2x - (4/3)x^3 + ...</span> より、<span class=\"chem\">x^3</span> の係数は <span class=\"chem\">-4/3</span> です。</p>",
    },

    // ── t5-4-q006 · mcq · foundation · AHL · AHL 5.18 · 2 marks
    "t5-4-q006": {
      // EN: <p>To solve the linear differential equation <span class="chem">x^2 (dy/dx) + 3xy = e^x</span> (<span class="chem">x &gt; 0</span>) using an integrating factor, what is <span class="chem">P(x)</span> in the standard form <span class="chem">dy/dx + P(x)y = Q(x)</span>?</p>
      stem: "<p>線形微分方程式 <span class=\"chem\">x^2 (dy/dx) + 3xy = e^x</span>（<span class=\"chem\">x &gt; 0</span>）を積分因子を用いて解くとき、標準形 <span class=\"chem\">dy/dx + P(x)y = Q(x)</span> における <span class=\"chem\">P(x)</span> はどれですか？</p>",
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
        "<span class=\"chem\">dy/dx</span> の係数が <span class=\"chem\">1</span> になるように、すべての項を <span class=\"chem\">x^2</span> で割ります。",
      ],
      // EN: <p>Dividing by <span class="chem">x^2</span> gives <span class="chem">dy/dx + (3/x)y = e^x / x^2</span>, so <span class="chem">P(x) = 3/x</span>.</p>
      solution: "<p><span class=\"chem\">x^2</span> で割ると <span class=\"chem\">dy/dx + (3/x)y = e^x / x^2</span> となるので、<span class=\"chem\">P(x) = 3/x</span> です。</p>",
      misconception: {
        // EN (option B): You must divide the entire equation by the leading coefficient <span class="chem">x^2</span> before reading off <span class="chem">P(x)</span>.
        "1": "<span class=\"chem\">P(x)</span> を読み取る前に、方程式全体を先頭の係数 <span class=\"chem\">x^2</span> で割る必要があります。",
        // EN (option C): <span class="chem">(3x) / x^2</span> simplifies to <span class="chem">3 / x</span>, not <span class="chem">3 / x^2</span>.
        "2": "<span class=\"chem\">(3x) / x^2</span> を約分すると <span class=\"chem\">3 / x</span> であり、<span class=\"chem\">3 / x^2</span> ではありません。",
        // EN (option D): <span class="chem">e^x / x^2</span> is <span class="chem">Q(x)</span> on the right-hand side, not <span class="chem">P(x)</span>.
        "3": "<span class=\"chem\">e^x / x^2</span> は右辺の <span class=\"chem\">Q(x)</span> であり、<span class=\"chem\">P(x)</span> ではありません。",
      },
    },

    // ── t5-4-q007 · order · exam · AHL · AHL 5.18 · 4 marks
    "t5-4-q007": {
      // EN: <p>Arrange the steps in the correct logical order to solve a homogeneous differential equation <span class="chem">dy/dx = F(y/x)</span>.</p>
      stem: "<p>同次形の微分方程式 <span class=\"chem\">dy/dx = F(y/x)</span> を解く手順を、正しい論理的順序に並べなさい。</p>",
      options: [
        // EN: Introduce the substitution <span class="chem">y = vx</span> and differentiate using the product rule to get <span class="chem">dy/dx = v + x(dv/dx)</span>.
        "置換 <span class=\"chem\">y = vx</span> を導入し、積の微分法で微分して <span class=\"chem\">dy/dx = v + x(dv/dx)</span> を得る。",
        // EN: Substitute both expressions into the DE to obtain <span class="chem">v + x(dv/dx) = F(v)</span>, so <span class="chem">x(dv/dx) = F(v) - v</span>.
        "両方を微分方程式に代入して <span class=\"chem\">v + x(dv/dx) = F(v)</span>、すなわち <span class=\"chem\">x(dv/dx) = F(v) - v</span> を得る。",
        // EN: Separate variables to integrate <span class="chem">int 1/(F(v) - v) dv = int (1/x) dx</span>.
        "変数を分離して <span class=\"chem\">int 1/(F(v) - v) dv = int (1/x) dx</span> を積分する。",
        // EN: Replace <span class="chem">v = y/x</span> and apply the initial condition to find the particular solution.
        "<span class=\"chem\">v = y/x</span> を元に戻し、初期条件を代入して特殊解を求める。",
      ],
      hints: [
        // EN: Start by defining <span class="chem">y = vx</span> and differentiating it before substituting into the DE.
        "微分方程式に代入する前に、まず <span class=\"chem\">y = vx</span> とおいて微分することから始めます。",
      ],
      // EN: <p>Define <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>, substitute to isolate <span class="chem">x(dv/dx) = F(v) - v</span>, separate variables and integrate, and finally substitute <span class="chem">v = y/x</span> back.</p>
      solution: "<p><span class=\"chem\">y = vx</span> と <span class=\"chem\">dy/dx = v + x(dv/dx)</span> を定め、代入して <span class=\"chem\">x(dv/dx) = F(v) - v</span> とし、変数分離して積分した後、最後に <span class=\"chem\">v = y/x</span> を戻します。</p>",
    },

    // ── t5-4-q008 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q008": {
      // EN: <p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x + 2y) / x</span> (<span class="chem">x &gt; 0</span>) given that <span class="chem">y(1) = 1</span>, and find the exact value of <span class="chem">y(2)</span>.</p>
      stem: "<p><span class=\"chem\">y(1) = 1</span> が与えられたとき、同次形の微分方程式 <span class=\"chem\">dy/dx = (x + 2y) / x</span>（<span class=\"chem\">x &gt; 0</span>）を解き、<span class=\"chem\">y(2)</span> の正確な値を求めなさい (find)。</p>",
      hints: [
        // EN: Let <span class="chem">y = vx</span> so <span class="chem">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>.
        "<span class=\"chem\">y = vx</span> とおくと <span class=\"chem\">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span> となります。",
        // EN: Separate variables: <span class="chem">int 1/(1 + v) dv = int (1/x) dx => 1 + v = A x</span>. Use <span class="chem">y(1) = 1</span> (<span class="chem">v = 1</span>) to find <span class="chem">A = 2</span>.
        "変数分離します：<span class=\"chem\">int 1/(1 + v) dv = int (1/x) dx => 1 + v = A x</span>。<span class=\"chem\">y(1) = 1</span>（<span class=\"chem\">v = 1</span>）を用いて <span class=\"chem\">A = 2</span> を求めます。",
      ],
      // EN: <p>With <span class="chem">y = vx</span>, <span class="chem">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>. Integrating gives <span class="chem">ln|1 + v| = ln x + C => 1 + y/x = A x</span>. Using <span class="chem">y(1) = 1</span> gives <span class="chem">A = 2</span>, so <span class="chem">y = 2x^2 - x</span>. Thus <span class="chem">y(2) = 2(4) - 2 = 6</span>.</p>
      solution: "<p><span class=\"chem\">y = vx</span> とおくと <span class=\"chem\">v + x(dv/dx) = 1 + 2v => x(dv/dx) = 1 + v</span>。積分すると <span class=\"chem\">ln|1 + v| = ln x + C => 1 + y/x = A x</span>。<span class=\"chem\">y(1) = 1</span> より <span class=\"chem\">A = 2</span> となり、<span class=\"chem\">y = 2x^2 - x</span> を得ます。したがって <span class=\"chem\">y(2) = 2(4) - 2 = 6</span> です。</p>",
    },

    // ── t5-4-q009 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q009": {
      // EN: <p>Solve the differential equation <span class="chem">dy/dx + 2y = 6e^x</span> given that <span class="chem">y(0) = 5</span>, and find the exact value of <span class="chem">y(ln 2)</span>.</p>
      stem: "<p><span class=\"chem\">y(0) = 5</span> が与えられたとき、微分方程式 <span class=\"chem\">dy/dx + 2y = 6e^x</span> を解き、<span class=\"chem\">y(ln 2)</span> の正確な値を求めなさい (find)。</p>",
      hints: [
        // EN: The integrating factor is <span class="chem">I(x) = e^{int 2 dx} = e^{2x}</span>.
        "積分因子は <span class=\"chem\">I(x) = e^{int 2 dx} = e^{2x}</span> です。",
        // EN: Multiply through to get <span class="chem">d/dx(y e^{2x}) = 6 e^{3x} => y e^{2x} = 2 e^{3x} + C</span>. Apply <span class="chem">y(0) = 5</span> to find <span class="chem">C = 3</span>.
        "両辺に掛けると <span class=\"chem\">d/dx(y e^{2x}) = 6 e^{3x} => y e^{2x} = 2 e^{3x} + C</span> となります。<span class=\"chem\">y(0) = 5</span> から <span class=\"chem\">C = 3</span> を求めます。",
      ],
      // EN: <p>Multiplying by <span class="chem">I(x) = e^{2x}</span> gives <span class="chem">d/dx(y e^{2x}) = 6 e^{3x}</span>, so <span class="chem">y e^{2x} = 2 e^{3x} + C</span>. At <span class="chem">(0, 5)</span>: <span class="chem">5 = 2 + C => C = 3</span>, giving <span class="chem">y = 2e^x + 3e^{-2x}</span>. At <span class="chem">x = ln 2</span>: <span class="chem">y = 2(2) + 3(1/4) = 4.75</span>.</p>
      solution: "<p><span class=\"chem\">I(x) = e^{2x}</span> を掛けると <span class=\"chem\">d/dx(y e^{2x}) = 6 e^{3x}</span>、よって <span class=\"chem\">y e^{2x} = 2 e^{3x} + C</span>。<span class=\"chem\">(0, 5)</span> を代入すると <span class=\"chem\">5 = 2 + C => C = 3</span> なので <span class=\"chem\">y = 2e^x + 3e^{-2x}</span> です。<span class=\"chem\">x = ln 2</span> のとき <span class=\"chem\">y = 2(2) + 3(1/4) = 4.75</span> となります。</p>",
    },

    // ── t5-4-q010 · mcq · exam · AHL · AHL 5.19 · 2 marks
    "t5-4-q010": {
      // EN: <p>What are the first two non-zero terms in the Maclaurin series expansion of <span class="chem">f(x) = ln(1 + 2x) - 2x</span>?</p>
      stem: "<p><span class=\"chem\">f(x) = ln(1 + 2x) - 2x</span> のマクローリン級数展開における最初の 2 つの非零項はどれですか？</p>",
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
        "<span class=\"chem\">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span> に <span class=\"chem\">u = 2x</span> を代入し、その後 <span class=\"chem\">2x</span> を引きます。",
      ],
      // EN: <p><span class="chem">ln(1 + 2x) - 2x = (2x - (2x)^2/2 + (2x)^3/3 - ...) - 2x = -2x^2 + (8/3)x^3 - ...</span>.</p>
      solution: "<p><span class=\"chem\">ln(1 + 2x) - 2x = (2x - (2x)^2/2 + (2x)^3/3 - ...) - 2x = -2x^2 + (8/3)x^3 - ...</span> となります。</p>",
      misconception: {
        // EN (option B): Remember to replace <span class="chem">x</span> with <span class="chem">2x</span> inside the brackets: <span class="chem">(2x)^2/2 = 2x^2</span> and <span class="chem">(2x)^3/3 = (8/3)x^3</span>.
        "1": "カッコ内の <span class=\"chem\">x</span> をすべて <span class=\"chem\">2x</span> に置き換えます：<span class=\"chem\">(2x)^2/2 = 2x^2</span> かつ <span class=\"chem\">(2x)^3/3 = (8/3)x^3</span> です。",
        // EN (option C): In <span class="chem">ln(1 + u)</span>, the <span class="chem">u^3</span> term is divided by <span class="chem">3</span>, not <span class="chem">3! = 6</span>.
        "2": "<span class=\"chem\">ln(1 + u)</span> では、<span class=\"chem\">u^3</span> の項は <span class=\"chem\">3! = 6</span> ではなく <span class=\"chem\">3</span> で割ります。",
        // EN (option D): The signs in <span class="chem">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span> alternate starting with <span class="chem">+u</span>, so the <span class="chem">x^2</span> term is negative.
        "3": "<span class=\"chem\">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span> の符号は <span class=\"chem\">+u</span> から交互に変わるため、<span class=\"chem\">x^2</span> の項は負になります。",
      },
    },

    // ── t5-4-q011 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q011": {
      // EN: <p>A fish population <span class="chem">P(t)</span> satisfies the logistic differential equation <span class="chem">dP/dt = 0.002 P(500 - P)</span>, where <span class="chem">t</span> is in years and <span class="chem">P(0) = 100</span>. Find the population <span class="chem">P(2)</span> correct to 3 significant figures.</p>
      stem: "<p>魚の個体数 <span class=\"chem\">P(t)</span> がロジスティック微分方程式 <span class=\"chem\">dP/dt = 0.002 P(500 - P)</span> を満たしている。ここで <span class=\"chem\">t</span> は年数であり、<span class=\"chem\">P(0) = 100</span> である。個体数 <span class=\"chem\">P(2)</span> を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Use partial fractions <span class="chem">500 / (P(500 - P)) = 1/P + 1/(500 - P)</span> to separate variables: <span class="chem">int (1/P + 1/(500 - P)) dP = int 1 dt</span>.
        "部分分数分解 <span class=\"chem\">500 / (P(500 - P)) = 1/P + 1/(500 - P)</span> を用いて変数分離します：<span class=\"chem\">int (1/P + 1/(500 - P)) dP = int 1 dt</span>。",
        // EN: Solve to get <span class="chem">P(t) = 500 / (1 + A e^{-t})</span>, find <span class="chem">A = 4</span> from <span class="chem">P(0) = 100</span>, and evaluate at <span class="chem">t = 2</span>.
        "解いて <span class=\"chem\">P(t) = 500 / (1 + A e^{-t})</span> を得て、<span class=\"chem\">P(0) = 100</span> から <span class=\"chem\">A = 4</span> を求め、<span class=\"chem\">t = 2</span> を代入します。",
      ],
      // EN: <p>Separating variables gives <span class="chem">ln(P / (500 - P)) = t + C => P(t) = 500 / (1 + A e^{-t})</span>. With <span class="chem">P(0) = 100</span>, <span class="chem">1 + A = 5 => A = 4</span>. Thus <span class="chem">P(2) = 500 / (1 + 4e^{-2}) ≈ 324</span>.</p>
      solution: "<p>変数分離すると <span class=\"chem\">ln(P / (500 - P)) = t + C => P(t) = 500 / (1 + A e^{-t})</span>。<span class=\"chem\">P(0) = 100</span> より <span class=\"chem\">1 + A = 5 => A = 4</span>。よって <span class=\"chem\">P(2) = 500 / (1 + 4e^{-2}) ≈ 324</span> となります。</p>",
    },

    // ── t5-4-q012 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q012": {
      // EN: <p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">g(x) = e^{2x} sin(x)</span>. (You can enter an exact fraction like <span class="mono">7/4</span>.)</p>
      stem: "<p><span class=\"chem\">g(x) = e^{2x} sin(x)</span> のマクローリン級数展開における <span class=\"chem\">x^3</span> の正確な係数を求めなさい (Find)。（<span class=\"mono\">7/4</span> のような正確な分数で入力できます。）</p>",
      hints: [
        // EN: Write <span class="chem">e^{2x} = 1 + 2x + 2x^2 + (4/3)x^3 + ...</span> and <span class="chem">sin x = x - x^3/6 + ...</span>.
        "<span class=\"chem\">e^{2x} = 1 + 2x + 2x^2 + (4/3)x^3 + ...</span> と <span class=\"chem\">sin x = x - x^3/6 + ...</span> を書き出します。",
        // EN: Multiply the two polynomials and collect all terms that give <span class="chem">x^3</span>.
        "2 つの多項式を掛け合わせ、<span class=\"chem\">x^3</span> になる項をすべて集めます。",
      ],
      // EN: <p><span class="chem">e^{2x} sin x = (1 + 2x + 2x^2 + ...)(x - x^3/6 + ...)</span>. The <span class="chem">x^3</span> coefficient is <span class="chem">1(-1/6) + 2(1) = 11/6 ≈ 1.83</span>.</p>
      solution: "<p><span class=\"chem\">e^{2x} sin x = (1 + 2x + 2x^2 + ...)(x - x^3/6 + ...)</span> より、<span class=\"chem\">x^3</span> の係数は <span class=\"chem\">1(-1/6) + 2(1) = 11/6 ≈ 1.83</span> です。</p>",
    },

    // ── t5-4-q013 · mcq · exam · AHL · AHL 5.19 · 2 marks
    "t5-4-q013": {
      // EN: <p>Use the Maclaurin series for <span class="chem">sin x</span> to evaluate <span class="chem">lim_{x->0} (sin x - x + x^3/6) / x^5</span>.</p>
      stem: "<p><span class=\"chem\">sin x</span> のマクローリン級数を用いて、<span class=\"chem\">lim_{x->0} (sin x - x + x^3/6) / x^5</span> を計算しなさい (evaluate)。</p>",
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
        "分子に <span class=\"chem\">sin x = x - x^3/6 + x^5/120 - ...</span> を代入します。",
      ],
      // EN: <p><span class="chem">sin x - x + x^3/6 = x^5/120 - x^7/5040 + ...</span>. Dividing by <span class="chem">x^5</span> and letting <span class="chem">x -> 0</span> gives <span class="chem">1/120</span>.</p>
      solution: "<p><span class=\"chem\">sin x - x + x^3/6 = x^5/120 - x^7/5040 + ...</span> となります。<span class=\"chem\">x^5</span> で割って <span class=\"chem\">x -> 0</span> とすると <span class=\"chem\">1/120</span> が得られます。</p>",
      misconception: {
        // EN (option B): The signs in <span class="chem">sin x = x - x^3/3! + x^5/5! - ...</span> alternate, so the <span class="chem">x^5</span> term is positive (<span class="chem">+x^5/120</span>).
        "1": "<span class=\"chem\">sin x = x - x^3/3! + x^5/5! - ...</span> の符号は交互に変わるので、<span class=\"chem\">x^5</span> の項は正（<span class=\"chem\">+x^5/120</span>）です。",
        // EN (option C): <span class="chem">5! = 120</span>, whereas <span class="chem">4! = 24</span>.
        "2": "<span class=\"chem\">5! = 120</span> であり、<span class=\"chem\">4! = 24</span> ではありません。",
        // EN (option D): After <span class="chem">x</span> and <span class="chem">-x^3/6</span> cancel, the leading term in the numerator is <span class="chem">x^5/120</span>, which cancels <span class="chem">x^5</span> in the denominator.
        "3": "<span class=\"chem\">x</span> と <span class=\"chem\">-x^3/6</span> が消えた後、分子の先頭項は <span class=\"chem\">x^5/120</span> となり、分母の <span class=\"chem\">x^5</span> と約分されます。",
      },
    },

    // ── t5-4-q014 · short · exam · AHL · AHL 5.18 · 7 marks
    "t5-4-q014": {
      // EN: <p>Consider the differential equation <span class="chem">x (dy/dx) - 2y = x^3 cos(x)</span> for <span class="chem">x &gt; 0</span>, with <span class="chem">y(pi) = 0</span>.</p><p>(a) Find the integrating factor for this differential equation. <strong>[3 marks]</strong></p><p>(b) Hence solve the differential equation to find <span class="chem">y</span> in terms of <span class="chem">x</span>. <strong>[4 marks]</strong></p>
      stem: "<p><span class=\"chem\">x &gt; 0</span> で <span class=\"chem\">y(pi) = 0</span> を満たす微分方程式 <span class=\"chem\">x (dy/dx) - 2y = x^3 cos(x)</span> を考える。</p><p>(a) この微分方程式の積分因子を求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(b) これを用いて (Hence) 微分方程式を解き、<span class=\"chem\">y</span> を <span class=\"chem\">x</span> で表しなさい (find)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Divide by <span class="chem">x</span> first so the coefficient of <span class="chem">dy/dx</span> is <span class="chem">1</span>.
        "最初に <span class=\"chem\">x</span> で割って <span class=\"chem\">dy/dx</span> の係数を <span class=\"chem\">1</span> にします。",
        // EN: Use <span class="chem">e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span>.
        "<span class=\"chem\">e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span> を使います。",
      ],
      // EN: <p>(a) Dividing by <span class="chem">x</span> gives <span class="chem">dy/dx - (2/x)y = x^2 cos(x)</span>, so <span class="chem">P(x) = -2/x</span>. The integrating factor is <span class="chem">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = x^{-2}</span>.</p><p>(b) Multiplying by <span class="chem">x^{-2}</span> gives <span class="chem">d/dx(x^{-2} y) = cos(x)</span>. Integrating gives <span class="chem">x^{-2} y = sin(x) + C</span>. Since <span class="chem">y(pi) = 0</span>, <span class="chem">0 = sin(pi) + C => C = 0</span>, so <span class="chem">y = x^2 sin(x)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x</span> で割ると <span class=\"chem\">dy/dx - (2/x)y = x^2 cos(x)</span> なので <span class=\"chem\">P(x) = -2/x</span>。積分因子は <span class=\"chem\">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = x^{-2}</span>。</p><p>(b) <span class=\"chem\">x^{-2}</span> を掛けると <span class=\"chem\">d/dx(x^{-2} y) = cos(x)</span>。積分すると <span class=\"chem\">x^{-2} y = sin(x) + C</span>。<span class=\"chem\">y(pi) = 0</span> より <span class=\"chem\">0 = sin(pi) + C => C = 0</span> なので、<span class=\"chem\">y = x^2 sin(x)</span>。</p>",
      markscheme: [
        // EN: M1: divides by <span class="chem">x</span> to write <span class="chem">dy/dx - (2/x)y = x^2 cos x</span>.
        "M1：<span class=\"chem\">x</span> で割って <span class=\"chem\">dy/dx - (2/x)y = x^2 cos x</span> と書いている。",
        // EN: M1: uses <span class="chem">I(x) = e^{int -2/x dx} = e^{-2 ln x}</span>.
        "M1：<span class=\"chem\">I(x) = e^{int -2/x dx} = e^{-2 ln x}</span> を用いている。",
        // EN: A1: <span class="chem">I(x) = x^{-2}</span> (or <span class="chem">1/x^2</span>).
        "A1：<span class=\"chem\">I(x) = x^{-2}</span>（または <span class=\"chem\">1/x^2</span>）。",
        // EN: M1: writes <span class="chem">d/dx(x^{-2} y) = cos x</span>.
        "M1：<span class=\"chem\">d/dx(x^{-2} y) = cos x</span> と書いている。",
        // EN: A1: integrates to <span class="chem">x^{-2} y = sin x + C</span> (must include <span class="chem">+ C</span>).
        "A1：積分して <span class=\"chem\">x^{-2} y = sin x + C</span> を得ている（<span class=\"chem\">+ C</span> が必須）。",
        // EN: M1: substitutes <span class="chem">x = pi, y = 0</span> to find <span class="chem">C = 0</span>.
        "M1：<span class=\"chem\">x = pi, y = 0</span> を代入して <span class=\"chem\">C = 0</span> を求めている。",
        // EN: A1: <span class="chem">y = x^2 sin x</span>.
        "A1：<span class=\"chem\">y = x^2 sin x</span>。",
      ],
    },

    // ── t5-4-q015 · numeric · challenge · AHL · AHL 5.19 · 5 marks
    "t5-4-q015": {
      // EN: <p>Let <span class="chem">y(x)</span> be the solution to <span class="chem">dy/dx = y^2 - x</span> with <span class="chem">y(0) = 1</span>. Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">y(x)</span>. (You can enter an exact fraction like <span class="mono">3/5</span>.)</p>
      stem: "<p><span class=\"chem\">y(x)</span> を <span class=\"chem\">y(0) = 1</span> を満たす <span class=\"chem\">dy/dx = y^2 - x</span> の解とする。<span class=\"chem\">y(x)</span> のマクローリン級数展開における <span class=\"chem\">x^3</span> の正確な係数を求めなさい (Find)。（<span class=\"mono\">3/5</span> のような正確な分数で入力できます。）</p>",
      hints: [
        // EN: Decode: the DE gives the derivatives of <span class="chem">y</span> at <span class="chem">x = 0</span> one after another, so build the Maclaurin coefficients from <span class="chem">y(0)</span>, <span class="chem">y'(0)</span>, <span class="chem">y''(0)</span> and <span class="chem">y'''(0)</span> by implicit differentiation. The <span class="chem">x^3</span> coefficient is <span class="chem">y'''(0)/3!</span>.
        "解読：微分方程式から <span class=\"chem\">x = 0</span> における <span class=\"chem\">y</span> の導関数が次々に求まるので、陰関数微分で <span class=\"chem\">y(0)</span>、<span class=\"chem\">y'(0)</span>、<span class=\"chem\">y''(0)</span>、<span class=\"chem\">y'''(0)</span> を求めてマクローリン係数を作ります。<span class=\"chem\">x^3</span> の係数は <span class=\"chem\">y'''(0)/3!</span> です。",
        // EN: Find <span class="chem">y'(0) = 1^2 - 0 = 1</span>, then differentiate implicitly: <span class="chem">y'' = 2y y' - 1</span>.
        "<span class=\"chem\">y'(0) = 1^2 - 0 = 1</span> を求め、陰関数微分して <span class=\"chem\">y'' = 2y y' - 1</span> を得ます。",
        // EN: Differentiate again: <span class="chem">y''' = 2(y')^2 + 2y y''</span>, evaluate <span class="chem">y'''(0)</span>, and divide by <span class="chem">3! = 6</span>.
        "もう一度微分して <span class=\"chem\">y''' = 2(y')^2 + 2y y''</span> を得て、<span class=\"chem\">y'''(0)</span> を計算し <span class=\"chem\">3! = 6</span> で割ります。",
      ],
      // EN: <p><span class="chem">y(0) = 1</span> and <span class="chem">y'(0) = 1</span>. Differentiating gives <span class="chem">y'' = 2y y' - 1 => y''(0) = 2(1)(1) - 1 = 1</span>, and <span class="chem">y''' = 2(y')^2 + 2y y'' => y'''(0) = 2(1)^2 + 2(1)(1) = 4</span>. The coefficient of <span class="chem">x^3</span> is <span class="chem">4 / 3! = 2/3</span>.</p>
      solution: "<p><span class=\"chem\">y(0) = 1</span> かつ <span class=\"chem\">y'(0) = 1</span> です。微分すると <span class=\"chem\">y'' = 2y y' - 1 => y''(0) = 2(1)(1) - 1 = 1</span>、さらに微分すると <span class=\"chem\">y''' = 2(y')^2 + 2y y'' => y'''(0) = 2(1)^2 + 2(1)(1) = 4</span> となります。よって <span class=\"chem\">x^3</span> の係数は <span class=\"chem\">4 / 3! = 2/3</span> です。</p>",
    },

    // ── t5-4-q016 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q016": {
      // EN: <p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x^2 + y^2) / (2xy)</span> (<span class="chem">x &gt; 0, y &gt; 0</span>) given <span class="chem">y(1) = 2</span>, and find the exact value of <span class="chem">y(4)</span>. (Enter an exact expression such as <span class="mono">3*sqrt(2)</span>.)</p>
      stem: "<p><span class=\"chem\">y(1) = 2</span> が与えられたとき、同次形の微分方程式 <span class=\"chem\">dy/dx = (x^2 + y^2) / (2xy)</span>（<span class=\"chem\">x &gt; 0, y &gt; 0</span>）を解き、<span class=\"chem\">y(4)</span> の正確な値を求めなさい (find)。（<span class=\"mono\">3*sqrt(2)</span> のような正確な式で入力してください。）</p>",
      hints: [
        // EN: Decode: divide the top and bottom by <span class="chem">x^2</span>: the right-hand side depends only on <span class="chem">y/x</span>, so the DE is homogeneous and the substitution <span class="chem">y = vx</span> works.
        "解読：分子と分母を <span class=\"chem\">x^2</span> で割ると、右辺は <span class=\"chem\">y/x</span> だけに依存するので同次形の微分方程式であり、置換 <span class=\"chem\">y = vx</span> が使えます。",
        // EN: Substitute <span class="chem">y = vx</span>: <span class="chem">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>.
        "<span class=\"chem\">y = vx</span> を代入します：<span class=\"chem\">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>。",
        // EN: Separate variables: <span class="chem">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>.
        "変数を分離します：<span class=\"chem\">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>。",
      ],
      // EN: <p>Setting <span class="chem">y = vx</span> gives <span class="chem">x(dv/dx) = (1 - v^2)/(2v)</span>, so <span class="chem">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>. At <span class="chem">(1, 2)</span>, <span class="chem">v = 2 => A = 3</span>, giving <span class="chem">y^2 = x^2 + 3x</span>. Hence <span class="chem">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span>.</p>
      solution: "<p><span class=\"chem\">y = vx</span> とおくと <span class=\"chem\">x(dv/dx) = (1 - v^2)/(2v)</span> となり、<span class=\"chem\">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>。<span class=\"chem\">(1, 2)</span> では <span class=\"chem\">v = 2 => A = 3</span> なので <span class=\"chem\">y^2 = x^2 + 3x</span>。よって <span class=\"chem\">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span> です。</p>",
    },

    // ── t5-4-q017 · mcq · challenge · AHL · AHL 5.19 · 2 marks
    "t5-4-q017": {
      // EN: <p>Find the Maclaurin series expansion of <span class="chem">f(x) = e^{sin x}</span> up to and including the term in <span class="chem">x^3</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = e^{sin x}</span> のマクローリン級数展開を <span class=\"chem\">x^3</span> の項まで求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">1 + x + (1/2)x^2</span> (the <span class="chem">x^3</span> coefficient is <span class="chem">0</span>)
        "<span class=\"chem\">1 + x + (1/2)x^2</span>（<span class=\"chem\">x^3</span> の係数は <span class=\"chem\">0</span>）",
        // EN: <span class="chem">1 + x + (1/2)x^2 + (1/6)x^3</span>
        "<span class=\"chem\">1 + x + (1/2)x^2 + (1/6)x^3</span>",
        // EN: <span class="chem">1 + x + (1/2)x^2 - (1/6)x^3</span>
        "<span class=\"chem\">1 + x + (1/2)x^2 - (1/6)x^3</span>",
        // EN: <span class="chem">1 + x + (1/2)x^2 + (1/3)x^3</span>
        "<span class=\"chem\">1 + x + (1/2)x^2 + (1/3)x^3</span>",
      ],
      hints: [
        // EN: Decode: <span class="chem">e^{sin x}</span> is a composite function, so substitute one known series into another (<span class="chem">e^u</span> with <span class="chem">u = sin x</span>) instead of differentiating three times.
        "解読：<span class=\"chem\">e^{sin x}</span> は合成関数なので、3 回微分する代わりに既知の級数を別の級数に代入します（<span class=\"chem\">u = sin x</span> として <span class=\"chem\">e^u</span>）。",
        // EN: Substitute <span class="chem">u = sin x = x - x^3/6 + ...</span> into <span class="chem">e^u = 1 + u + u^2/2! + u^3/3! + ...</span> and drop terms above <span class="chem">x^3</span>.
        "<span class=\"chem\">e^u = 1 + u + u^2/2! + u^3/3! + ...</span> に <span class=\"chem\">u = sin x = x - x^3/6 + ...</span> を代入し、<span class=\"chem\">x^3</span> より高次の項を落とします。",
      ],
      // EN: <p><span class="chem">e^{sin x} = 1 + (x - x^3/6) + (x - ...)^2/2 + (x - ...)^3/6 + ... = 1 + x + (1/2)x^2 + (-1/6 + 1/6)x^3 + ... = 1 + x + (1/2)x^2</span> up to <span class="chem">x^3</span>.</p>
      solution: "<p><span class=\"chem\">x^3</span> の項までは <span class=\"chem\">e^{sin x} = 1 + (x - x^3/6) + (x - ...)^2/2 + (x - ...)^3/6 + ... = 1 + x + (1/2)x^2 + (-1/6 + 1/6)x^3 + ... = 1 + x + (1/2)x^2</span> となります。</p>",
      misconception: {
        // EN (option B): You forgot the <span class="chem">-x^3/6</span> term inside <span class="chem">sin x = x - x^3/6 + ...</span>, which cancels <span class="chem">+x^3/6</span> from <span class="chem">u^3/3!</span>.
        "1": "<span class=\"chem\">sin x = x - x^3/6 + ...</span> の中の <span class=\"chem\">-x^3/6</span> を忘れています。これが <span class=\"chem\">u^3/3!</span> の <span class=\"chem\">+x^3/6</span> と打ち消し合います。",
        // EN (option C): You included <span class="chem">-x^3/6</span> from <span class="chem">sin x</span> but forgot <span class="chem">+u^3/3!</span> from the exponential series.
        "2": "<span class=\"chem\">sin x</span> からの <span class=\"chem\">-x^3/6</span> は入っていますが、指数級数の <span class=\"chem\">+u^3/3!</span> を忘れています。",
        // EN (option D): Check the sign: <span class="chem">-1/6 + 1/6 = 0</span>, not <span class="chem">1/3</span>.
        "3": "符号を確認しましょう：<span class=\"chem\">-1/6 + 1/6 = 0</span> であり <span class=\"chem\">1/3</span> ではありません。",
      },
    },

    // ── t5-4-q018 · short · challenge · AHL · AHL 5.18–5.19 · 8 marks
    "t5-4-q018": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx + 2xy = 1</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Using an integrating factor, show that <span class="chem">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>. <strong>[3 marks]</strong></p><p>(b) By using the Maclaurin series for <span class="chem">e^{t^2}</span> (or by implicit differentiation of the DE), find the Maclaurin series for <span class="chem">y(x)</span> up to and including the term in <span class="chem">x^5</span>. <strong>[5 marks]</strong></p>
      stem: "<p><span class=\"chem\">y(0) = 0</span> を満たす微分方程式 <span class=\"chem\">dy/dx + 2xy = 1</span> を考える。</p><p>(a) 積分因子を用いて、<span class=\"chem\">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span> であることを示しなさい (show that)。 <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">e^{t^2}</span> のマクローリン級数を用いる（または微分方程式の陰関数微分を行う）ことにより、<span class=\"chem\">y(x)</span> のマクローリン級数を <span class=\"chem\">x^5</span> の項まで求めなさい (find)。 <strong>[5 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a linear DE, so use an integrating factor. In (b), the solution is <span class="chem">e^{-x^2}</span> times an integral that cannot be found exactly, so write both factors as series and multiply.
        "解読：(a) は線形微分方程式なので積分因子を使います。(b) では解は <span class=\"chem\">e^{-x^2}</span> と正確には求められない積分との積なので、両方の因子を級数で表して掛け合わせます。",
        // EN: In part (a), integrating <span class="chem">d/dt(y(t) e^{t^2}) = e^{t^2}</span> from <span class="chem">t = 0</span> to <span class="chem">t = x</span> immediately incorporates <span class="chem">y(0) = 0</span>.
        "(a) では <span class=\"chem\">d/dt(y(t) e^{t^2}) = e^{t^2}</span> を <span class=\"chem\">t = 0</span> から <span class=\"chem\">t = x</span> まで積分すると、<span class=\"chem\">y(0) = 0</span> をそのまま組み込めます。",
        // EN: In part (b), you can either integrate the series for <span class="chem">e^{t^2}</span> and multiply by <span class="chem">e^{-x^2}</span>, or differentiate <span class="chem">y' = 1 - 2xy</span> repeatedly at <span class="chem">x = 0</span>.
        "(b) では <span class=\"chem\">e^{t^2}</span> の級数を積分して <span class=\"chem\">e^{-x^2}</span> を掛けるか、または <span class=\"chem\">y' = 1 - 2xy</span> を <span class=\"chem\">x = 0</span> で繰り返し微分します。",
      ],
      // EN: <p>(a) The integrating factor is <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>. Multiplying gives <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>. Integrating from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span> gives <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>.</p><p>(b) <span class="chem">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>. Multiplying by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> gives <span class="chem">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>.</p>
      answer: "<p>(a) 積分因子は <span class=\"chem\">I(x) = e^{int 2x dx} = e^{x^2}</span>。両辺に掛けると <span class=\"chem\">d/dx(y e^{x^2}) = e^{x^2}</span>。<span class=\"chem\">y(0) = 0</span> を用いて <span class=\"chem\">0</span> から <span class=\"chem\">x</span> まで積分すると <span class=\"chem\">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>。</p><p>(b) <span class=\"chem\">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>。これに <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> を掛けると <span class=\"chem\">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>。</p>",
      markscheme: [
        // EN: M1: integrating factor <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>.
        "M1：積分因子 <span class=\"chem\">I(x) = e^{int 2x dx} = e^{x^2}</span>。",
        // EN: A1: <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>.
        "A1：<span class=\"chem\">d/dx(y e^{x^2}) = e^{x^2}</span>。",
        // EN: A1: integrates from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span>: <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt</span>. AG: <span class="chem">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">y(0) = 0</span> を用いて <span class=\"chem\">0</span> から <span class=\"chem\">x</span> まで積分し、<span class=\"chem\">y(x) e^{x^2} = int_0^x e^{t^2} dt</span> を得る。AG：<span class=\"chem\">y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>；与えられた式そのものには点を与えない。",
        // EN: M1: expands <span class="chem">e^{t^2} = 1 + t^2 + t^4/2 + ...</span> and integrates term by term to <span class="chem">x + x^3/3 + x^5/10</span> (or differentiates DE implicitly up to <span class="chem">y^{(5)}(0)</span>).
        "M1：<span class=\"chem\">e^{t^2} = 1 + t^2 + t^4/2 + ...</span> を展開して項別積分し <span class=\"chem\">x + x^3/3 + x^5/10</span> を得ている（または微分方程式を <span class=\"chem\">y^{(5)}(0)</span> まで陰関数微分している）。",
        // EN: M1: multiplies by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> (or substitutes derivatives into Maclaurin formula).
        "M1：<span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> を掛けている（または導関数をマクローリン展開の公式に代入している）。",
        // EN: A1: first term <span class="chem">x</span>.
        "A1：初項 <span class=\"chem\">x</span>。",
        // EN: A1: <span class="chem">-(2/3)x^3</span>.
        "A1：<span class=\"chem\">-(2/3)x^3</span>。",
        // EN: A1: <span class="chem">(4/15)x^5</span>.
        "A1：<span class=\"chem\">(4/15)x^5</span>。",
      ],
    },

    // ── t5-4-q019 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q019": {
      // EN: <p>Use the Maclaurin series for <span class="chem">(1 + x)^p</span> to find the coefficient of <span class="chem">x^2</span> in the Maclaurin series of <span class="chem">f(x) = sqrt(1 + 4x)</span>.</p>
      stem: "<p><span class=\"chem\">(1 + x)^p</span> のマクローリン級数を用いて、<span class=\"chem\">f(x) = sqrt(1 + 4x)</span> のマクローリン級数における <span class=\"chem\">x^2</span> の係数を求めなさい (find)。</p>",
      hints: [
        // EN: Write <span class="chem">sqrt(1 + 4x) = (1 + u)^{1/2}</span> with <span class="chem">u = 4x</span>.
        "<span class=\"chem\">u = 4x</span> として <span class=\"chem\">sqrt(1 + 4x) = (1 + u)^{1/2}</span> と書きます。",
        // EN: Use <span class="chem">(1 + u)^p = 1 + pu + (p(p - 1)/2!) u^2 + ...</span> with <span class="chem">p = 1/2</span>.
        "<span class=\"chem\">p = 1/2</span> として <span class=\"chem\">(1 + u)^p = 1 + pu + (p(p - 1)/2!) u^2 + ...</span> を使います。",
      ],
      // EN: <p>With <span class="chem">p = 1/2</span> and <span class="chem">u = 4x</span>, the <span class="chem">x^2</span> term is <span class="chem">((1/2)(-1/2)/2!)(4x)^2 = (-1/8)(16x^2) = -2x^2</span>, so the coefficient is <span class="chem">-2</span>. The series <span class="chem">1 + 2x - 2x^2 + ...</span> is valid for <span class="chem">|4x| &lt; 1</span>, that is <span class="chem">|x| &lt; 1/4</span>.</p>
      solution: "<p><span class=\"chem\">p = 1/2</span>、<span class=\"chem\">u = 4x</span> とすると、<span class=\"chem\">x^2</span> の項は <span class=\"chem\">((1/2)(-1/2)/2!)(4x)^2 = (-1/8)(16x^2) = -2x^2</span> なので、係数は <span class=\"chem\">-2</span> です。級数 <span class=\"chem\">1 + 2x - 2x^2 + ...</span> は <span class=\"chem\">|4x| &lt; 1</span>、すなわち <span class=\"chem\">|x| &lt; 1/4</span> で成り立ちます。</p>",
    },

    // ── t5-4-q020 · numeric · foundation · AHL · AHL 5.18 · 3 marks
    "t5-4-q020": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = sqrt(x + y)</span> with <span class="chem">y(1) = 2</span>. Use Euler’s method with step size <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1.5)</span>. Carry full calculator accuracy from one step to the next and give your answer correct to 3 significant figures.</p>
      stem: "<p>関数 <span class=\"chem\">y(x)</span> は <span class=\"chem\">y(1) = 2</span> のもとで <span class=\"chem\">dy/dx = sqrt(x + y)</span> を満たす。刻み幅 <span class=\"chem\">h = 0.1</span> のオイラー法を用いて <span class=\"chem\">y(1.5)</span> を推定しなさい (estimate)。各ステップで電卓の値を丸めずにそのまま次のステップに使い、答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Five steps take you from <span class="chem">x = 1</span> to <span class="chem">x = 1.5</span>. Each step is <span class="chem">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span>, <span class="chem">x_{n+1} = x_n + 0.1</span>.
        "五つのステップで <span class=\"chem\">x = 1</span> から <span class=\"chem\">x = 1.5</span> まで進みます。各ステップは <span class=\"chem\">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span>、<span class=\"chem\">x_{n+1} = x_n + 0.1</span> です。",
        // EN: On the GDC, store the values: start with <span class="chem">x = 1, y = 2</span>, then repeat “<span class="chem">y + 0.1 sqrt(x + y) -> y</span>, <span class="chem">x + 0.1 -> x</span>” five times. The first step gives <span class="chem">y_1 = 2 + 0.1 sqrt(3) = 2.1732…</span>
        "GDC に値を記憶させます：<span class=\"chem\">x = 1, y = 2</span> から始めて、「<span class=\"chem\">y + 0.1 sqrt(x + y) -> y</span>、<span class=\"chem\">x + 0.1 -> x</span>」を五回繰り返します。最初のステップで <span class=\"chem\">y_1 = 2 + 0.1 sqrt(3) = 2.1732…</span> が得られます。",
      ],
      // EN: <p>With <span class="chem">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span>:</p><p><span class="chem">x = 1.1: y_1 = 2.17321</span>; <span class="chem">x = 1.2: y_2 = 2.35413</span>; <span class="chem">x = 1.3: y_3 = 2.54265</span>; <span class="chem">x = 1.4: y_4 = 2.73868</span>; <span class="chem">x = 1.5: y_5 = 2.94211</span> (values shown to 5 d.p., full accuracy carried).</p><p>So <span class="chem">y(1.5) ≈ 2.94</span>.</p>
      solution: "<p><span class=\"chem\">y_{n+1} = y_n + 0.1 sqrt(x_n + y_n)</span> を用いると：</p><p><span class=\"chem\">x = 1.1: y_1 = 2.17321</span>；<span class=\"chem\">x = 1.2: y_2 = 2.35413</span>；<span class=\"chem\">x = 1.3: y_3 = 2.54265</span>；<span class=\"chem\">x = 1.4: y_4 = 2.73868</span>；<span class=\"chem\">x = 1.5: y_5 = 2.94211</span>（値は小数第 5 位まで表示、計算は丸めずに続ける）。</p><p>よって <span class=\"chem\">y(1.5) ≈ 2.94</span> です。</p>",
    },

    // ── t5-4-q021 · short · exam · AHL · AHL 5.18 · 12 marks
    "t5-4-q021": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx = x e^{-y}</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Use Euler’s method with step size <span class="chem">h = 0.2</span> to estimate <span class="chem">y(1)</span>. Write each <span class="chem">y_n</span> correct to 4 decimal places, but use full calculator accuracy in the next step. <strong>[4 marks]</strong></p><p>(b) Solve the differential equation to find <span class="chem">y</span> in terms of <span class="chem">x</span>. <strong>[4 marks]</strong></p><p>(c) Find the percentage error of your estimate in part (a). <strong>[2 marks]</strong></p><p>(d) By finding <span class="chem">d^2y/dx^2</span>, explain why the Euler estimate is an underestimate. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">y(0) = 0</span> を満たす微分方程式 <span class=\"chem\">dy/dx = x e^{-y}</span> を考える。</p><p>(a) 刻み幅 <span class=\"chem\">h = 0.2</span> のオイラー法を用いて <span class=\"chem\">y(1)</span> を推定しなさい。各 <span class=\"chem\">y_n</span> は小数第 4 位まで書きなさい。ただし次のステップでは電卓の値を丸めずに使うこと。<strong>[4 marks]</strong></p><p>(b) 微分方程式を解いて、<span class=\"chem\">y</span> を <span class=\"chem\">x</span> の式で表しなさい (Find)。<strong>[4 marks]</strong></p><p>(c) (a) で求めた推定値の百分率誤差を求めなさい。<strong>[2 marks]</strong></p><p>(d) <span class=\"chem\">d^2y/dx^2</span> を求めることにより、オイラー法による推定値が過小評価になる理由を説明しなさい (Explain)。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a GDC Euler table, (b) is a separable DE, (c) compares the two, and (d) asks for the sign of the second derivative (concavity).
        "解読：(a) は GDC で作るオイラー法の表、(b) は変数分離形の微分方程式、(c) は両者の比較、(d) は第 2 次導関数の符号（凹凸）を問うています。",
        // EN: For (b), multiply both sides by <span class="chem">e^y</span>: <span class="chem">e^y (dy/dx) = x</span>.
        "(b) では両辺に <span class=\"chem\">e^y</span> を掛けます：<span class=\"chem\">e^y (dy/dx) = x</span>。",
        // EN: For (d), differentiate <span class="chem">x e^{-y}</span> with the product rule and the chain rule, then substitute <span class="chem">dy/dx = x e^{-y}</span>.
        "(d) では <span class=\"chem\">x e^{-y}</span> を積の微分法と合成関数の微分法で微分し、<span class=\"chem\">dy/dx = x e^{-y}</span> を代入します。",
      ],
      // EN: <p>(a) <span class="chem">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span>. Table: <span class="chem">x = 0.2: y_1 = 0</span>; <span class="chem">x = 0.4: y_2 = 0.0400</span>; <span class="chem">x = 0.6: y_3 = 0.1169</span>; <span class="chem">x = 0.8: y_4 = 0.2236</span>; <span class="chem">x = 1: y_5 = 0.3516</span>. So <span class="chem">y(1) ≈ 0.352</span>.</p><p>(b) <span class="chem">int e^y dy = int x dx => e^y = x^2/2 + C</span>. At <span class="chem">(0, 0)</span>, <span class="chem">C = 1</span>, so <span class="chem">y = ln(1 + x^2/2)</span>.</p><p>(c) Exact <span class="chem">y(1) = ln 1.5 = 0.405465…</span>. Percentage error <span class="chem">= |0.351566 - 0.405465| / 0.405465 × 100 ≈ 13.3%</span>.</p><p>(d) <span class="chem">d^2y/dx^2 = e^{-y} - x e^{-y} (dy/dx) = e^{-y}(1 - x^2 e^{-y})</span>. On the solution curve <span class="chem">x^2 e^{-y} = x^2/(1 + x^2/2) &lt; 1</span> for <span class="chem">0 &lt;= x &lt;= 1</span>, so <span class="chem">d^2y/dx^2 &gt; 0</span>: the curve is concave up, its tangent lines lie below it, and each Euler step lands below the curve.</p>
      answer: "<p>(a) <span class=\"chem\">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span>。表：<span class=\"chem\">x = 0.2: y_1 = 0</span>；<span class=\"chem\">x = 0.4: y_2 = 0.0400</span>；<span class=\"chem\">x = 0.6: y_3 = 0.1169</span>；<span class=\"chem\">x = 0.8: y_4 = 0.2236</span>；<span class=\"chem\">x = 1: y_5 = 0.3516</span>。よって <span class=\"chem\">y(1) ≈ 0.352</span>。</p><p>(b) <span class=\"chem\">int e^y dy = int x dx => e^y = x^2/2 + C</span>。<span class=\"chem\">(0, 0)</span> で <span class=\"chem\">C = 1</span> なので <span class=\"chem\">y = ln(1 + x^2/2)</span>。</p><p>(c) 正確な値は <span class=\"chem\">y(1) = ln 1.5 = 0.405465…</span>。百分率誤差 <span class=\"chem\">= |0.351566 - 0.405465| / 0.405465 × 100 ≈ 13.3%</span>。</p><p>(d) <span class=\"chem\">d^2y/dx^2 = e^{-y} - x e^{-y} (dy/dx) = e^{-y}(1 - x^2 e^{-y})</span>。解曲線上では <span class=\"chem\">0 &lt;= x &lt;= 1</span> に対して <span class=\"chem\">x^2 e^{-y} = x^2/(1 + x^2/2) &lt; 1</span> なので <span class=\"chem\">d^2y/dx^2 &gt; 0</span>：曲線は下に凸で、接線は曲線の下側にあり、オイラー法の各ステップは曲線の下側に着地する。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span> with <span class="chem">x_{n+1} = x_n + 0.2</span>.
        "M1：<span class=\"chem\">x_{n+1} = x_n + 0.2</span> とともに <span class=\"chem\">y_{n+1} = y_n + 0.2 x_n e^{-y_n}</span> を用いている。",
        // EN: A1: <span class="chem">y_1 = 0</span> and <span class="chem">y_2 = 0.0400</span>.
        "A1：<span class=\"chem\">y_1 = 0</span> および <span class=\"chem\">y_2 = 0.0400</span>。",
        // EN: A1: <span class="chem">y_3 = 0.1169</span> and <span class="chem">y_4 = 0.2236</span>.
        "A1：<span class=\"chem\">y_3 = 0.1169</span> および <span class=\"chem\">y_4 = 0.2236</span>。",
        // EN: A1: <span class="chem">y(1) ≈ 0.3516</span> (accept 0.352).
        "A1：<span class=\"chem\">y(1) ≈ 0.3516</span>（0.352 も可）。",
        // EN: M1: separates variables: <span class="chem">int e^y dy = int x dx</span>.
        "M1：変数を分離している：<span class=\"chem\">int e^y dy = int x dx</span>。",
        // EN: A1: <span class="chem">e^y = x^2/2 + C</span>.
        "A1：<span class=\"chem\">e^y = x^2/2 + C</span>。",
        // EN: M1: uses <span class="chem">y(0) = 0</span> to get <span class="chem">C = 1</span>.
        "M1：<span class=\"chem\">y(0) = 0</span> を用いて <span class=\"chem\">C = 1</span> を得ている。",
        // EN: A1: <span class="chem">y = ln(1 + x^2/2)</span>.
        "A1：<span class=\"chem\">y = ln(1 + x^2/2)</span>。",
        // EN: M1: exact value <span class="chem">ln 1.5 = 0.405…</span> used in <span class="chem">|approx - exact| / exact × 100</span>.
        "M1：正確な値 <span class=\"chem\">ln 1.5 = 0.405…</span> を <span class=\"chem\">|approx - exact| / exact × 100</span> に用いている。",
        // EN: A1: <span class="chem">13.3%</span>.
        "A1：<span class=\"chem\">13.3%</span>。",
        // EN: A1: <span class="chem">d^2y/dx^2 = e^{-y}(1 - x^2 e^{-y})</span> (or equivalent).
        "A1：<span class=\"chem\">d^2y/dx^2 = e^{-y}(1 - x^2 e^{-y})</span>（または同値な式）。",
        // EN: R1: <span class="chem">d^2y/dx^2 &gt; 0</span> on <span class="chem">[0, 1]</span>, so the curve is concave up and the tangent steps lie below it.
        "R1：<span class=\"chem\">[0, 1]</span> で <span class=\"chem\">d^2y/dx^2 &gt; 0</span> なので、曲線は下に凸であり、接線によるステップは曲線の下側にある。",
      ],
    },

    // ── t5-4-q022 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q022": {
      // EN: <p>A pie is taken out of an oven at <span class="chem">90</span> °C and left in a kitchen kept at <span class="chem">20</span> °C. Its temperature <span class="chem">T</span> °C after <span class="chem">t</span> minutes falls at a rate proportional to the difference between its temperature and the kitchen temperature. After 5 minutes the pie is at <span class="chem">70</span> °C. Find how many minutes after it leaves the oven the pie reaches <span class="chem">40</span> °C. Give your answer correct to 3 significant figures.</p>
      stem: "<p>パイを <span class=\"chem\">90</span> °C のオーブンから取り出し、<span class=\"chem\">20</span> °C に保たれた台所に置く。<span class=\"chem\">t</span> 分後のパイの温度 <span class=\"chem\">T</span> °C は、パイの温度と台所の温度の差に比例する速さで下がる。5 分後にパイは <span class=\"chem\">70</span> °C になった。オーブンから出して何分後にパイが <span class=\"chem\">40</span> °C になるかを求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: “rate proportional to the difference” means <span class="chem">dT/dt = -k(T - 20)</span> with <span class="chem">k &gt; 0</span>. This is a separable DE; use the two data points to find the constant and <span class="chem">k</span>.
        "解読：「差に比例する速さ」とは、<span class=\"chem\">k &gt; 0</span> として <span class=\"chem\">dT/dt = -k(T - 20)</span> という意味です。これは変数分離形の微分方程式です。2 つのデータを使って定数と <span class=\"chem\">k</span> を求めます。",
        // EN: Separating gives <span class="chem">ln|T - 20| = -kt + C</span>, so <span class="chem">T = 20 + 70 e^{-kt}</span>.
        "変数を分離すると <span class=\"chem\">ln|T - 20| = -kt + C</span> となるので、<span class=\"chem\">T = 20 + 70 e^{-kt}</span> です。",
        // EN: Use <span class="chem">T(5) = 70</span>: <span class="chem">50 = 70 e^{-5k}</span>, so <span class="chem">k = (1/5) ln 1.4</span>. Then solve <span class="chem">20 + 70 e^{-kt} = 40</span>.
        "<span class=\"chem\">T(5) = 70</span> を使います：<span class=\"chem\">50 = 70 e^{-5k}</span> より <span class=\"chem\">k = (1/5) ln 1.4</span>。次に <span class=\"chem\">20 + 70 e^{-kt} = 40</span> を解きます。",
      ],
      // EN: <p><span class="chem">dT/dt = -k(T - 20) => int 1/(T - 20) dT = int -k dt => T = 20 + A e^{-kt}</span>. From <span class="chem">T(0) = 90</span>, <span class="chem">A = 70</span>. From <span class="chem">T(5) = 70</span>, <span class="chem">e^{-5k} = 5/7</span>, so <span class="chem">k = (1/5) ln(7/5) = 0.067294…</span>.</p><p>Then <span class="chem">70 e^{-kt} = 20 => t = ln(3.5)/k = 5 ln 3.5 / ln 1.4 ≈ 18.6</span> minutes.</p>
      solution: "<p><span class=\"chem\">dT/dt = -k(T - 20) => int 1/(T - 20) dT = int -k dt => T = 20 + A e^{-kt}</span>。<span class=\"chem\">T(0) = 90</span> より <span class=\"chem\">A = 70</span>。<span class=\"chem\">T(5) = 70</span> より <span class=\"chem\">e^{-5k} = 5/7</span> なので、<span class=\"chem\">k = (1/5) ln(7/5) = 0.067294…</span>。</p><p>よって <span class=\"chem\">70 e^{-kt} = 20 => t = ln(3.5)/k = 5 ln 3.5 / ln 1.4 ≈ 18.6</span> 分です。</p>",
    },

    // ── t5-4-q023 · short · exam · AHL · AHL 5.18 · 14 marks
    "t5-4-q023": {
      // EN: <p>The number of rabbits <span class="chem">N</span> on an island <span class="chem">t</span> years after 150 were released is modelled by <span class="chem">dN/dt = 0.4N(1 - N/2000)</span>, <span class="chem">N(0) = 150</span>.</p><p>(a) Show that <span class="chem">N = 2000 / (1 + A e^{-0.4t})</span>, and find the exact value of <span class="chem">A</span>. <strong>[5 marks]</strong></p><p>(b) Find the time at which the number of rabbits reaches 1500. <strong>[2 marks]</strong></p><p>(c) Find the value of <span class="chem">N</span> at which the population grows fastest, and the time at which this happens. <strong>[3 marks]</strong></p><p>(d) Use Euler’s method with <span class="chem">h = 0.5</span> to estimate <span class="chem">N(1)</span>, and find the percentage error of this estimate. Carry full calculator accuracy throughout. <strong>[4 marks]</strong></p>
      stem: "<p>ある島に 150 匹のウサギを放してから <span class=\"chem\">t</span> 年後のウサギの数 <span class=\"chem\">N</span> は、<span class=\"chem\">dN/dt = 0.4N(1 - N/2000)</span>、<span class=\"chem\">N(0) = 150</span> でモデル化される。</p><p>(a) <span class=\"chem\">N = 2000 / (1 + A e^{-0.4t})</span> であることを示し (Show that)、<span class=\"chem\">A</span> の正確な値を求めなさい。<strong>[5 marks]</strong></p><p>(b) ウサギの数が 1500 に達する時刻を求めなさい。<strong>[2 marks]</strong></p><p>(c) 個体数が最も速く増加するときの <span class=\"chem\">N</span> の値と、それが起こる時刻を求めなさい。<strong>[3 marks]</strong></p><p>(d) <span class=\"chem\">h = 0.5</span> のオイラー法を用いて <span class=\"chem\">N(1)</span> を推定し、この推定値の百分率誤差を求めなさい。計算は最後まで電卓の値を丸めずに行うこと。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: this is the logistic model. (a) is a separable DE needing partial fractions; (c) means “maximise <span class="chem">dN/dt</span>”, not “maximise <span class="chem">N</span>”.
        "解読：これはロジスティックモデルです。(a) は部分分数分解が必要な変数分離形の微分方程式です。(c) は「<span class=\"chem\">N</span> を最大にする」ではなく「<span class=\"chem\">dN/dt</span> を最大にする」という意味です。",
        // EN: Write <span class="chem">1/(N(1 - N/2000)) = 2000/(N(2000 - N))</span> and split it into partial fractions.
        "<span class=\"chem\">1/(N(1 - N/2000)) = 2000/(N(2000 - N))</span> と書き、部分分数に分解します。",
        // EN: In (c), <span class="chem">dN/dt</span> as a function of <span class="chem">N</span> is a downward parabola: where is its vertex?
        "(c) では、<span class=\"chem\">dN/dt</span> は <span class=\"chem\">N</span> の関数として上に凸の放物線です。頂点はどこでしょうか？",
      ],
      // EN: <p>(a) <span class="chem">dN/dt = 0.4N(2000 - N)/2000</span>, so <span class="chem">int 2000/(N(2000 - N)) dN = int 0.4 dt</span>. Since <span class="chem">2000/(N(2000 - N)) = 1/N + 1/(2000 - N)</span>, <span class="chem">ln(N/(2000 - N)) = 0.4t + C</span>. So <span class="chem">(2000 - N)/N = A e^{-0.4t}</span>, giving <span class="chem">N = 2000/(1 + A e^{-0.4t})</span>. At <span class="chem">t = 0</span>: <span class="chem">150 = 2000/(1 + A)</span>, so <span class="chem">A = 37/3</span>.</p><p>(b) <span class="chem">1 + (37/3)e^{-0.4t} = 4/3 => e^{-0.4t} = 1/37 => t = ln(37)/0.4 ≈ 9.03</span> years.</p><p>(c) <span class="chem">dN/dt = 0.4N - 0.0002N^2</span> is a quadratic in <span class="chem">N</span> with its maximum at <span class="chem">N = 1000</span>. Then <span class="chem">(37/3)e^{-0.4t} = 1 => t = ln(37/3)/0.4 ≈ 6.28</span> years.</p><p>(d) <span class="chem">N_1 = 150 + 0.5(0.4)(150)(1 - 150/2000) = 177.75</span>; <span class="chem">N_2 = 177.75 + 0.5(0.4)(177.75)(1 - 177.75/2000) = 210.14…</span>. So <span class="chem">N(1) ≈ 210</span>. Exact <span class="chem">N(1) = 2000/(1 + (37/3)e^{-0.4}) = 215.81…</span>, so the percentage error is <span class="chem">≈ 2.63%</span>.</p>
      answer: "<p>(a) <span class=\"chem\">dN/dt = 0.4N(2000 - N)/2000</span> なので <span class=\"chem\">int 2000/(N(2000 - N)) dN = int 0.4 dt</span>。<span class=\"chem\">2000/(N(2000 - N)) = 1/N + 1/(2000 - N)</span> より <span class=\"chem\">ln(N/(2000 - N)) = 0.4t + C</span>。よって <span class=\"chem\">(2000 - N)/N = A e^{-0.4t}</span> となり、<span class=\"chem\">N = 2000/(1 + A e^{-0.4t})</span>。<span class=\"chem\">t = 0</span> で <span class=\"chem\">150 = 2000/(1 + A)</span> なので <span class=\"chem\">A = 37/3</span>。</p><p>(b) <span class=\"chem\">1 + (37/3)e^{-0.4t} = 4/3 => e^{-0.4t} = 1/37 => t = ln(37)/0.4 ≈ 9.03</span> 年。</p><p>(c) <span class=\"chem\">dN/dt = 0.4N - 0.0002N^2</span> は <span class=\"chem\">N</span> の 2 次式で、<span class=\"chem\">N = 1000</span> で最大となる。よって <span class=\"chem\">(37/3)e^{-0.4t} = 1 => t = ln(37/3)/0.4 ≈ 6.28</span> 年。</p><p>(d) <span class=\"chem\">N_1 = 150 + 0.5(0.4)(150)(1 - 150/2000) = 177.75</span>；<span class=\"chem\">N_2 = 177.75 + 0.5(0.4)(177.75)(1 - 177.75/2000) = 210.14…</span>。よって <span class=\"chem\">N(1) ≈ 210</span>。正確な値は <span class=\"chem\">N(1) = 2000/(1 + (37/3)e^{-0.4}) = 215.81…</span> なので、百分率誤差は <span class=\"chem\">≈ 2.63%</span>。</p>",
      markscheme: [
        // EN: M1: separates variables: <span class="chem">int 1/(N(1 - N/2000)) dN = int 0.4 dt</span> (or equivalent).
        "M1：変数を分離している：<span class=\"chem\">int 1/(N(1 - N/2000)) dN = int 0.4 dt</span>（または同値な式）。",
        // EN: M1: uses partial fractions <span class="chem">1/N + 1/(2000 - N)</span>.
        "M1：部分分数 <span class=\"chem\">1/N + 1/(2000 - N)</span> を用いている。",
        // EN: A1: <span class="chem">ln N - ln(2000 - N) = 0.4t + C</span>.
        "A1：<span class=\"chem\">ln N - ln(2000 - N) = 0.4t + C</span>。",
        // EN: A1: rearranges to <span class="chem">(2000 - N)/N = A e^{-0.4t}</span>. AG: <span class="chem">N = 2000/(1 + A e^{-0.4t})</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">(2000 - N)/N = A e^{-0.4t}</span> に変形している。AG：<span class=\"chem\">N = 2000/(1 + A e^{-0.4t})</span>；与えられた式そのものには点を与えない。",
        // EN: A1: <span class="chem">A = 37/3</span> from <span class="chem">N(0) = 150</span>.
        "A1：<span class=\"chem\">N(0) = 150</span> から <span class=\"chem\">A = 37/3</span>。",
        // EN: M1: sets <span class="chem">2000/(1 + (37/3)e^{-0.4t}) = 1500</span> (or uses a GDC intersection).
        "M1：<span class=\"chem\">2000/(1 + (37/3)e^{-0.4t}) = 1500</span> とおいている（または GDC で交点を求めている）。",
        // EN: A1: <span class="chem">t = 9.03</span> years.
        "A1：<span class=\"chem\">t = 9.03</span> 年。",
        // EN: R1: <span class="chem">dN/dt</span> is a quadratic in <span class="chem">N</span> (concave down) with vertex at the midpoint of its roots <span class="chem">0</span> and <span class="chem">2000</span>.
        "R1：<span class=\"chem\">dN/dt</span> は <span class=\"chem\">N</span> の 2 次式（上に凸）で、頂点は 2 つの解 <span class=\"chem\">0</span> と <span class=\"chem\">2000</span> の中点にある。",
        // EN: A1: <span class="chem">N = 1000</span>.
        "A1：<span class=\"chem\">N = 1000</span>。",
        // EN: A1: <span class="chem">t = 6.28</span> years.
        "A1：<span class=\"chem\">t = 6.28</span> 年。",
        // EN: M1: one correct Euler step: <span class="chem">N_1 = 177.75</span>.
        "M1：オイラー法の 1 ステップが正しい：<span class=\"chem\">N_1 = 177.75</span>。",
        // EN: A1: <span class="chem">N(1) ≈ 210</span> (210.14).
        "A1：<span class=\"chem\">N(1) ≈ 210</span>（210.14）。",
        // EN: M1: exact <span class="chem">N(1) = 215.8…</span> used in the percentage error formula.
        "M1：正確な値 <span class=\"chem\">N(1) = 215.8…</span> を百分率誤差の式に用いている。",
        // EN: A1: <span class="chem">2.63%</span> (accept 2.69% from the rounded estimate 210).
        "A1：<span class=\"chem\">2.63%</span>（丸めた推定値 210 から得た 2.69% も可）。",
      ],
    },

    // ── t5-4-q024 · numeric · challenge · AHL · AHL 5.18 · 7 marks
    "t5-4-q024": {
      // EN: <p>A patient is given a drug through a drip. At time <span class="chem">t</span> hours after the drip starts, the drip delivers the drug at a rate of <span class="chem">4e^{-0.05t}</span> mg per hour, and the body removes the drug at a rate of <span class="chem">0.25A</span> mg per hour, where <span class="chem">A</span> mg is the amount of drug in the body. There is no drug in the body at the start. Find the greatest amount of the drug in the body, in mg, correct to 3 significant figures.</p>
      stem: "<p>患者に点滴で薬を投与する。点滴開始から <span class=\"chem\">t</span> 時間後、点滴は 1 時間あたり <span class=\"chem\">4e^{-0.05t}</span> mg の速さで薬を送り込み、体は 1 時間あたり <span class=\"chem\">0.25A</span> mg の速さで薬を取り除く。ここで <span class=\"chem\">A</span> mg は体内の薬の量である。最初、体内に薬はない。体内の薬の量の最大値（mg）を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: “rate in minus rate out” gives the DE <span class="chem">dA/dt = 4e^{-0.05t} - 0.25A</span>, <span class="chem">A(0) = 0</span>. It is linear, so use an integrating factor; then maximise <span class="chem">A(t)</span>.
        "解読：「入る速さ − 出る速さ」から微分方程式 <span class=\"chem\">dA/dt = 4e^{-0.05t} - 0.25A</span>、<span class=\"chem\">A(0) = 0</span> が得られます。これは線形なので積分因子を使い、その後 <span class=\"chem\">A(t)</span> を最大にします。",
        // EN: Write <span class="chem">dA/dt + 0.25A = 4e^{-0.05t}</span>. The integrating factor is <span class="chem">e^{0.25t}</span>, so <span class="chem">d/dt(A e^{0.25t}) = 4e^{0.2t}</span>.
        "<span class=\"chem\">dA/dt + 0.25A = 4e^{-0.05t}</span> と書きます。積分因子は <span class=\"chem\">e^{0.25t}</span> なので、<span class=\"chem\">d/dt(A e^{0.25t}) = 4e^{0.2t}</span> です。",
        // EN: You should get <span class="chem">A = 20(e^{-0.05t} - e^{-0.25t})</span>. Find its maximum with the GDC, or solve <span class="chem">dA/dt = 0</span>.
        "<span class=\"chem\">A = 20(e^{-0.05t} - e^{-0.25t})</span> が得られるはずです。GDC でその最大値を求めるか、<span class=\"chem\">dA/dt = 0</span> を解きます。",
      ],
      // EN: <p><strong>Decode:</strong> the amount changes at (rate in) − (rate out), so <span class="chem">dA/dt = 4e^{-0.05t} - 0.25A</span>, a linear first-order DE; “greatest amount” means maximise its solution.</p><p>Integrating factor <span class="chem">e^{0.25t}</span>: <span class="chem">d/dt(A e^{0.25t}) = 4e^{0.2t} => A e^{0.25t} = 20e^{0.2t} + C</span>. With <span class="chem">A(0) = 0</span>, <span class="chem">C = -20</span>, so <span class="chem">A = 20(e^{-0.05t} - e^{-0.25t})</span>.</p><p><span class="chem">dA/dt = 0 => 0.05e^{-0.05t} = 0.25e^{-0.25t} => e^{0.2t} = 5 => t = 5 ln 5 ≈ 8.05</span> h. Then <span class="chem">A = 20(5^{-1/4} - 5^{-5/4}) = 16 × 5^{-1/4} ≈ 10.7</span> mg.</p>
      solution: "<p><strong>解読：</strong>薬の量は（入る速さ）−（出る速さ）で変化するので <span class=\"chem\">dA/dt = 4e^{-0.05t} - 0.25A</span> となり、これは 1 階線形微分方程式です。「最大の量」とは、その解を最大にすることです。</p><p>積分因子 <span class=\"chem\">e^{0.25t}</span>：<span class=\"chem\">d/dt(A e^{0.25t}) = 4e^{0.2t} => A e^{0.25t} = 20e^{0.2t} + C</span>。<span class=\"chem\">A(0) = 0</span> より <span class=\"chem\">C = -20</span> なので、<span class=\"chem\">A = 20(e^{-0.05t} - e^{-0.25t})</span>。</p><p><span class=\"chem\">dA/dt = 0 => 0.05e^{-0.05t} = 0.25e^{-0.25t} => e^{0.2t} = 5 => t = 5 ln 5 ≈ 8.05</span> 時間。よって <span class=\"chem\">A = 20(5^{-1/4} - 5^{-5/4}) = 16 × 5^{-1/4} ≈ 10.7</span> mg です。</p>",
    },

    // ── t5-4-q025 · short · exam · AHL · AHL 5.19 · 7 marks
    "t5-4-q025": {
      // EN: <p>(a) Use the Maclaurin series for <span class="chem">e^x</span> to write down the Maclaurin series for <span class="chem">e^{-x^2}</span> up to and including the term in <span class="chem">x^6</span>. <strong>[2 marks]</strong></p><p>(b) Hence find an approximate value for <span class="chem">int_0^{0.8} e^{-x^2} dx</span>, giving your answer correct to 4 decimal places. <strong>[3 marks]</strong></p><p>(c) Use your GDC to find the percentage error of your approximation in part (b). <strong>[2 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">e^x</span> のマクローリン級数を用いて、<span class=\"chem\">e^{-x^2}</span> のマクローリン級数を <span class=\"chem\">x^6</span> の項まで書きなさい (Write down)。<strong>[2 marks]</strong></p><p>(b) これを用いて (Hence)、<span class=\"chem\">int_0^{0.8} e^{-x^2} dx</span> の近似値を小数第 4 位まで求めなさい。<strong>[3 marks]</strong></p><p>(c) GDC を用いて、(b) で求めた近似値の百分率誤差を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: you cannot integrate <span class="chem">e^{-x^2}</span> by hand, so turn it into a polynomial first and integrate that.
        "解読：<span class=\"chem\">e^{-x^2}</span> は手計算では積分できないので、まず多項式に直してからそれを積分します。",
        // EN: Put <span class="chem">u = -x^2</span> in <span class="chem">e^u = 1 + u + u^2/2! + u^3/3! + …</span>.
        "<span class=\"chem\">u = -x^2</span> を <span class=\"chem\">e^u = 1 + u + u^2/2! + u^3/3! + …</span> に代入します。",
        // EN: Percentage error <span class="chem">= |approximate - exact| / exact × 100</span>, with the GDC value as “exact”.
        "百分率誤差 <span class=\"chem\">= |approximate - exact| / exact × 100</span>。GDC の値を「正確な値」とします。",
      ],
      // EN: <p>(a) Replacing <span class="chem">x</span> by <span class="chem">-x^2</span>: <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - x^6/6 + …</span></p><p>(b) <span class="chem">int_0^{0.8} (1 - x^2 + x^4/2 - x^6/6) dx = [x - x^3/3 + x^5/10 - x^7/42]_0^{0.8} = 0.8 - 0.170667 + 0.032768 - 0.004993 = 0.6571</span> (4 d.p.).</p><p>(c) GDC: <span class="chem">int_0^{0.8} e^{-x^2} dx = 0.657670…</span>. Percentage error <span class="chem">= |0.657108 - 0.657670| / 0.657670 × 100 ≈ 0.0854%</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x</span> を <span class=\"chem\">-x^2</span> で置き換えて：<span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - x^6/6 + …</span></p><p>(b) <span class=\"chem\">int_0^{0.8} (1 - x^2 + x^4/2 - x^6/6) dx = [x - x^3/3 + x^5/10 - x^7/42]_0^{0.8} = 0.8 - 0.170667 + 0.032768 - 0.004993 = 0.6571</span>（小数第 4 位まで）。</p><p>(c) GDC：<span class=\"chem\">int_0^{0.8} e^{-x^2} dx = 0.657670…</span>。百分率誤差 <span class=\"chem\">= |0.657108 - 0.657670| / 0.657670 × 100 ≈ 0.0854%</span>。</p>",
      markscheme: [
        // EN: M1: substitutes <span class="chem">-x^2</span> for <span class="chem">x</span> in the series for <span class="chem">e^x</span>.
        "M1：<span class=\"chem\">e^x</span> の級数で <span class=\"chem\">x</span> に <span class=\"chem\">-x^2</span> を代入している。",
        // EN: A1: <span class="chem">1 - x^2 + x^4/2 - x^6/6</span>.
        "A1：<span class=\"chem\">1 - x^2 + x^4/2 - x^6/6</span>。",
        // EN: M1: integrates the polynomial term by term.
        "M1：多項式を項別に積分している。",
        // EN: A1: <span class="chem">[x - x^3/3 + x^5/10 - x^7/42]_0^{0.8}</span>.
        "A1：<span class=\"chem\">[x - x^3/3 + x^5/10 - x^7/42]_0^{0.8}</span>。",
        // EN: A1: <span class="chem">0.6571</span>.
        "A1：<span class=\"chem\">0.6571</span>。",
        // EN: A1: GDC value <span class="chem">0.657670…</span>.
        "A1：GDC の値 <span class=\"chem\">0.657670…</span>。",
        // EN: A1: percentage error <span class="chem">0.0854%</span> (accept 0.085%, or 0.0866% from the rounded estimate 0.6571).
        "A1：百分率誤差 <span class=\"chem\">0.0854%</span>（0.085% も可。丸めた推定値 0.6571 から得た 0.0866% も可）。",
      ],
    },

    // ── t5-4-q026 · numeric · challenge · AHL · AHL 5.19 · 5 marks
    "t5-4-q026": {
      // EN: <p>An engineer models small angles by replacing <span class="chem">cos x</span> with the quadratic <span class="chem">1 - x^2/2</span>, where <span class="chem">x</span> is in radians. She will accept the model only while the error <span class="chem">|cos x - (1 - x^2/2)|</span> is less than <span class="chem">0.001</span>. Find the largest value of <span class="chem">a</span> such that the error is less than <span class="chem">0.001</span> for all <span class="chem">0 &lt; x &lt; a</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>あるエンジニアは、小さな角について <span class=\"chem\">cos x</span> を 2 次式 <span class=\"chem\">1 - x^2/2</span> で置き換えるモデルを使う。ここで <span class=\"chem\">x</span> の単位はラジアンである。誤差 <span class=\"chem\">|cos x - (1 - x^2/2)|</span> が <span class=\"chem\">0.001</span> 未満である間だけ、彼女はこのモデルを認める。すべての <span class=\"chem\">0 &lt; x &lt; a</span> に対して誤差が <span class=\"chem\">0.001</span> 未満となるような <span class=\"chem\">a</span> の最大値を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: <span class="chem">1 - x^2/2</span> is the degree-2 Maclaurin polynomial of <span class="chem">cos x</span>. You need the first positive <span class="chem">x</span> at which the error reaches <span class="chem">0.001</span>.
        "解読：<span class=\"chem\">1 - x^2/2</span> は <span class=\"chem\">cos x</span> の 2 次のマクローリン多項式です。誤差が初めて <span class=\"chem\">0.001</span> に達する正の <span class=\"chem\">x</span> を求める必要があります。",
        // EN: The next term of the series is <span class="chem">x^4/24</span>, so the error is about <span class="chem">x^4/24</span>. This gives a first estimate <span class="chem">x ≈ (0.024)^{1/4}</span>.
        "級数の次の項は <span class=\"chem\">x^4/24</span> なので、誤差はおよそ <span class=\"chem\">x^4/24</span> です。これから最初の見積もり <span class=\"chem\">x ≈ (0.024)^{1/4}</span> が得られます。",
        // EN: Now solve <span class="chem">cos x - 1 + x^2/2 = 0.001</span> with the GDC (graph both sides and find the intersection). The error increases for <span class="chem">x &gt; 0</span>, so the first intersection is the answer.
        "次に GDC で <span class=\"chem\">cos x - 1 + x^2/2 = 0.001</span> を解きます（両辺のグラフを描いて交点を求めます）。<span class=\"chem\">x &gt; 0</span> では誤差は増加するので、最初の交点が答えです。",
      ],
      // EN: <p><strong>Decode:</strong> “largest <span class="chem">a</span> with error below 0.001 for all <span class="chem">0 &lt; x &lt; a</span>” means the first positive solution of error = 0.001. Here <span class="chem">1 - x^2/2</span> is the Maclaurin polynomial of degree 2.</p><p>Since <span class="chem">cos x = 1 - x^2/2 + x^4/24 - …</span>, the error <span class="chem">cos x - (1 - x^2/2) ≈ x^4/24</span>, which is positive and increasing for small <span class="chem">x &gt; 0</span>. Estimate: <span class="chem">x^4/24 = 0.001 => x ≈ 0.394</span>.</p><p>GDC: solving <span class="chem">cos x - 1 + x^2/2 = 0.001</span> gives <span class="chem">x = 0.394108…</span>, so <span class="chem">a ≈ 0.394</span>.</p>
      solution: "<p><strong>解読：</strong>「すべての <span class=\"chem\">0 &lt; x &lt; a</span> で誤差が 0.001 未満となる最大の <span class=\"chem\">a</span>」とは、誤差 = 0.001 の最初の正の解のことです。ここで <span class=\"chem\">1 - x^2/2</span> は 2 次のマクローリン多項式です。</p><p><span class=\"chem\">cos x = 1 - x^2/2 + x^4/24 - …</span> なので、誤差 <span class=\"chem\">cos x - (1 - x^2/2) ≈ x^4/24</span> であり、小さい <span class=\"chem\">x &gt; 0</span> では正で増加します。見積もり：<span class=\"chem\">x^4/24 = 0.001 => x ≈ 0.394</span>。</p><p>GDC：<span class=\"chem\">cos x - 1 + x^2/2 = 0.001</span> を解くと <span class=\"chem\">x = 0.394108…</span> なので、<span class=\"chem\">a ≈ 0.394</span> です。</p>",
    },

    // ── t5-4-q027 · short · exam · AHL · AHL 5.18 · 10 marks
    "t5-4-q027": {
      // EN: <p>Consider <span class="chem">dy/dx = y/x + x/y</span> for <span class="chem">x &gt; 0, y &gt; 0</span>, with <span class="chem">y(1) = 1</span>.</p><p>(a) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1.5)</span>. Carry full calculator accuracy and give your answer correct to 4 significant figures. <strong>[3 marks]</strong></p><p>(b) Use the substitution <span class="chem">y = vx</span> to show that <span class="chem">y = x sqrt(2 ln x + 1)</span>. <strong>[5 marks]</strong></p><p>(c) Find the percentage error of your estimate in part (a), using its unrounded value. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">y(1) = 1</span> のもとで、<span class=\"chem\">x &gt; 0, y &gt; 0</span> に対する <span class=\"chem\">dy/dx = y/x + x/y</span> を考える。</p><p>(a) <span class=\"chem\">h = 0.1</span> のオイラー法を用いて <span class=\"chem\">y(1.5)</span> を推定しなさい。電卓の値を丸めずに計算し、答えは有効数字 4 桁で求めなさい。<strong>[3 marks]</strong></p><p>(b) 置換 <span class=\"chem\">y = vx</span> を用いて、<span class=\"chem\">y = x sqrt(2 ln x + 1)</span> であることを示しなさい (Show that)。<strong>[5 marks]</strong></p><p>(c) (a) で求めた推定値の丸める前の値を用いて、その百分率誤差を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the right-hand side depends only on <span class="chem">y/x</span>, so the DE is homogeneous: (b) is the <span class="chem">y = vx</span> method, and (a) is a GDC Euler table.
        "解読：右辺は <span class=\"chem\">y/x</span> だけで決まるので、この微分方程式は同次形です。(b) は <span class=\"chem\">y = vx</span> の方法、(a) は GDC で作るオイラー法の表です。",
        // EN: After substituting, the <span class="chem">v</span> terms cancel and you are left with <span class="chem">x(dv/dx) = 1/v</span>.
        "代入すると <span class=\"chem\">v</span> の項が消えて、<span class=\"chem\">x(dv/dx) = 1/v</span> が残ります。",
      ],
      // EN: <p>(a) <span class="chem">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span>: <span class="chem">y_1 = 1.2</span>, <span class="chem">y_2 = 1.40076</span>, <span class="chem">y_3 = 1.60316</span>, <span class="chem">y_4 = 1.80757</span>, <span class="chem">y_5 = 2.01413</span>. So <span class="chem">y(1.5) ≈ 2.014</span>.</p><p>(b) <span class="chem">y = vx => dy/dx = v + x(dv/dx)</span>. Then <span class="chem">v + x(dv/dx) = v + 1/v => v (dv/dx) = 1/x</span>. Integrating, <span class="chem">v^2/2 = ln x + C</span>. At <span class="chem">(1, 1)</span>, <span class="chem">v = 1</span>, so <span class="chem">C = 1/2</span>. Then <span class="chem">y^2/x^2 = 2 ln x + 1</span>, and since <span class="chem">x, y &gt; 0</span>, <span class="chem">y = x sqrt(2 ln x + 1)</span>.</p><p>(c) Exact <span class="chem">y(1.5) = 1.5 sqrt(2 ln 1.5 + 1) = 2.018562…</span>. Percentage error <span class="chem">= |2.014129 - 2.018562| / 2.018562 × 100 ≈ 0.220%</span>.</p>
      answer: "<p>(a) <span class=\"chem\">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span>：<span class=\"chem\">y_1 = 1.2</span>、<span class=\"chem\">y_2 = 1.40076</span>、<span class=\"chem\">y_3 = 1.60316</span>、<span class=\"chem\">y_4 = 1.80757</span>、<span class=\"chem\">y_5 = 2.01413</span>。よって <span class=\"chem\">y(1.5) ≈ 2.014</span>。</p><p>(b) <span class=\"chem\">y = vx => dy/dx = v + x(dv/dx)</span>。すると <span class=\"chem\">v + x(dv/dx) = v + 1/v => v (dv/dx) = 1/x</span>。積分して <span class=\"chem\">v^2/2 = ln x + C</span>。<span class=\"chem\">(1, 1)</span> で <span class=\"chem\">v = 1</span> なので <span class=\"chem\">C = 1/2</span>。よって <span class=\"chem\">y^2/x^2 = 2 ln x + 1</span> であり、<span class=\"chem\">x, y &gt; 0</span> なので <span class=\"chem\">y = x sqrt(2 ln x + 1)</span>。</p><p>(c) 正確な値は <span class=\"chem\">y(1.5) = 1.5 sqrt(2 ln 1.5 + 1) = 2.018562…</span>。百分率誤差 <span class=\"chem\">= |2.014129 - 2.018562| / 2.018562 × 100 ≈ 0.220%</span>。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span>.
        "M1：<span class=\"chem\">y_{n+1} = y_n + 0.1(y_n/x_n + x_n/y_n)</span> を用いている。",
        // EN: A1: at least two correct intermediate values (e.g. <span class="chem">y_1 = 1.2</span>, <span class="chem">y_2 = 1.4008</span>).
        "A1：途中の値が少なくとも 2 つ正しい（例：<span class=\"chem\">y_1 = 1.2</span>、<span class=\"chem\">y_2 = 1.4008</span>）。",
        // EN: A1: <span class="chem">y(1.5) ≈ 2.014</span>.
        "A1：<span class=\"chem\">y(1.5) ≈ 2.014</span>。",
        // EN: M1: substitutes <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>.
        "M1：<span class=\"chem\">y = vx</span> と <span class=\"chem\">dy/dx = v + x(dv/dx)</span> を代入している。",
        // EN: A1: <span class="chem">x(dv/dx) = 1/v</span>.
        "A1：<span class=\"chem\">x(dv/dx) = 1/v</span>。",
        // EN: M1: separates and integrates: <span class="chem">int v dv = int (1/x) dx</span>.
        "M1：変数を分離して積分している：<span class=\"chem\">int v dv = int (1/x) dx</span>。",
        // EN: A1: <span class="chem">v^2/2 = ln x + C</span>.
        "A1：<span class=\"chem\">v^2/2 = ln x + C</span>。",
        // EN: A1: <span class="chem">C = 1/2</span> from <span class="chem">y(1) = 1</span>, giving <span class="chem">y^2 = x^2(2 ln x + 1)</span>. AG: <span class="chem">y = x sqrt(2 ln x + 1)</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">y(1) = 1</span> から <span class=\"chem\">C = 1/2</span>、よって <span class=\"chem\">y^2 = x^2(2 ln x + 1)</span>。AG：<span class=\"chem\">y = x sqrt(2 ln x + 1)</span>；与えられた式そのものには点を与えない。",
        // EN: M1: exact value <span class="chem">2.0186</span> used in the percentage error formula.
        "M1：正確な値 <span class=\"chem\">2.0186</span> を百分率誤差の式に用いている。",
        // EN: A1: <span class="chem">0.220%</span> (accept 0.226% from the rounded value 2.014).
        "A1：<span class=\"chem\">0.220%</span>（丸めた値 2.014 から得た 0.226% も可）。",
      ],
    },

    // ── t5-4-q028 · short · exam · AHL · AHL 5.18, 5.19 · 11 marks
    "t5-4-q028": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = x^2 + y^2</span> and <span class="chem">y(0) = 1</span>.</p><p>(a) Find the Maclaurin series for <span class="chem">y(x)</span> up to and including the term in <span class="chem">x^3</span>. <strong>[5 marks]</strong></p><p>(b) Hence estimate <span class="chem">y(0.2)</span>. <strong>[1 mark]</strong></p><p>(c) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(0.2)</span>. <strong>[3 marks]</strong></p><p>(d) A numerical solver gives <span class="chem">y(0.2) = 1.2530</span> to 4 decimal places. State which estimate is more accurate, and give a reason for the size of the Euler error. <strong>[2 marks]</strong></p>
      stem: "<p>関数 <span class=\"chem\">y(x)</span> は <span class=\"chem\">dy/dx = x^2 + y^2</span> および <span class=\"chem\">y(0) = 1</span> を満たす。</p><p>(a) <span class=\"chem\">y(x)</span> のマクローリン級数を <span class=\"chem\">x^3</span> の項まで求めなさい (Find)。<strong>[5 marks]</strong></p><p>(b) これを用いて (Hence)、<span class=\"chem\">y(0.2)</span> を推定しなさい。<strong>[1 mark]</strong></p><p>(c) <span class=\"chem\">h = 0.1</span> のオイラー法を用いて <span class=\"chem\">y(0.2)</span> を推定しなさい。<strong>[3 marks]</strong></p><p>(d) 数値解法ソフトでは小数第 4 位まで <span class=\"chem\">y(0.2) = 1.2530</span> となる。どちらの推定値がより正確かを述べ (State)、オイラー法の誤差の大きさについて理由を答えなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a Maclaurin series built from the DE by repeated implicit differentiation; (c) is Euler with two steps.
        "解読：(a) は微分方程式を繰り返し陰関数微分して作るマクローリン級数、(c) は 2 ステップのオイラー法です。",
        // EN: Differentiate <span class="chem">y' = x^2 + y^2</span> with respect to <span class="chem">x</span>: <span class="chem">d/dx(y^2) = 2y y'</span>.
        "<span class=\"chem\">y' = x^2 + y^2</span> を <span class=\"chem\">x</span> について微分します：<span class=\"chem\">d/dx(y^2) = 2y y'</span>。",
        // EN: For <span class="chem">y'''</span>, differentiate <span class="chem">2y y'</span> with the product rule.
        "<span class=\"chem\">y'''</span> を求めるには、<span class=\"chem\">2y y'</span> を積の微分法で微分します。",
      ],
      // EN: <p>(a) <span class="chem">y'(0) = 0 + 1 = 1</span>. <span class="chem">y'' = 2x + 2y y'</span>, so <span class="chem">y''(0) = 2</span>. <span class="chem">y''' = 2 + 2(y')^2 + 2y y''</span>, so <span class="chem">y'''(0) = 2 + 2 + 4 = 8</span>. Hence <span class="chem">y ≈ 1 + x + (2/2!)x^2 + (8/3!)x^3 = 1 + x + x^2 + (4/3)x^3</span>.</p><p>(b) <span class="chem">y(0.2) ≈ 1 + 0.2 + 0.04 + (4/3)(0.008) = 1.2507</span> (to 4 d.p.).</p><p>(c) <span class="chem">y_1 = 1 + 0.1(0 + 1) = 1.1</span>; <span class="chem">y_2 = 1.1 + 0.1(0.01 + 1.21) = 1.222</span>.</p><p>(d) The series estimate (error about 0.002) is more accurate than Euler (error about 0.031). Euler follows tangent lines; the solution is concave up (<span class="chem">y'' &gt; 0</span>) and steep, so the tangent steps fall below the curve, and with only two large steps the error builds up.</p>
      answer: "<p>(a) <span class=\"chem\">y'(0) = 0 + 1 = 1</span>。<span class=\"chem\">y'' = 2x + 2y y'</span> なので <span class=\"chem\">y''(0) = 2</span>。<span class=\"chem\">y''' = 2 + 2(y')^2 + 2y y''</span> なので <span class=\"chem\">y'''(0) = 2 + 2 + 4 = 8</span>。よって <span class=\"chem\">y ≈ 1 + x + (2/2!)x^2 + (8/3!)x^3 = 1 + x + x^2 + (4/3)x^3</span>。</p><p>(b) <span class=\"chem\">y(0.2) ≈ 1 + 0.2 + 0.04 + (4/3)(0.008) = 1.2507</span>（小数第 4 位まで）。</p><p>(c) <span class=\"chem\">y_1 = 1 + 0.1(0 + 1) = 1.1</span>；<span class=\"chem\">y_2 = 1.1 + 0.1(0.01 + 1.21) = 1.222</span>。</p><p>(d) 級数による推定値（誤差約 0.002）の方がオイラー法（誤差約 0.031）より正確である。オイラー法は接線に沿って進む。解は下に凸（<span class=\"chem\">y'' &gt; 0</span>）で傾きが急なので、接線によるステップは曲線の下側に落ち、大きな 2 ステップだけでは誤差が積み重なる。</p>",
      markscheme: [
        // EN: A1: <span class="chem">y'(0) = 1</span>.
        "A1：<span class=\"chem\">y'(0) = 1</span>。",
        // EN: M1: differentiates implicitly: <span class="chem">y'' = 2x + 2y y'</span>.
        "M1：陰関数微分している：<span class=\"chem\">y'' = 2x + 2y y'</span>。",
        // EN: A1: <span class="chem">y''(0) = 2</span>.
        "A1：<span class=\"chem\">y''(0) = 2</span>。",
        // EN: A1: <span class="chem">y'''(0) = 8</span> (from <span class="chem">y''' = 2 + 2(y')^2 + 2y y''</span>).
        "A1：<span class=\"chem\">y'''(0) = 8</span>（<span class=\"chem\">y''' = 2 + 2(y')^2 + 2y y''</span> から）。",
        // EN: A1: <span class="chem">1 + x + x^2 + (4/3)x^3</span>.
        "A1：<span class=\"chem\">1 + x + x^2 + (4/3)x^3</span>。",
        // EN: A1: <span class="chem">y(0.2) ≈ 1.2507</span> (accept 1.25).
        "A1：<span class=\"chem\">y(0.2) ≈ 1.2507</span>（1.25 も可）。",
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.1(x_n^2 + y_n^2)</span>.
        "M1：<span class=\"chem\">y_{n+1} = y_n + 0.1(x_n^2 + y_n^2)</span> を用いている。",
        // EN: A1: <span class="chem">y_1 = 1.1</span>.
        "A1：<span class=\"chem\">y_1 = 1.1</span>。",
        // EN: A1: <span class="chem">y_2 = 1.222</span>.
        "A1：<span class=\"chem\">y_2 = 1.222</span>。",
        // EN: A1: states that the Maclaurin estimate is more accurate.
        "A1：マクローリン級数による推定値の方が正確であると述べている。",
        // EN: R1: the solution is concave up, so the Euler tangent steps lie below the curve (underestimate), and the error grows with the step size.
        "R1：解は下に凸なので、オイラー法の接線ステップは曲線の下側にあり（過小評価）、誤差は刻み幅とともに大きくなる。",
      ],
    },

    // ── t5-4-q029 · numeric · exam · AHL · AHL 5.18 · 5 marks
    "t5-4-q029": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = (1 + y^2) e^{-x}</span> and <span class="chem">y(0) = 0</span>. Find <span class="chem">y(2)</span>, giving your answer correct to 3 significant figures.</p>
      stem: "<p>関数 <span class=\"chem\">y(x)</span> は <span class=\"chem\">dy/dx = (1 + y^2) e^{-x}</span> および <span class=\"chem\">y(0) = 0</span> を満たす。<span class=\"chem\">y(2)</span> を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: The DE is separable: <span class="chem">int 1/(1 + y^2) dy = int e^{-x} dx</span>.
        "この微分方程式は変数分離形です：<span class=\"chem\">int 1/(1 + y^2) dy = int e^{-x} dx</span>。",
        // EN: This gives <span class="chem">arctan y = -e^{-x} + C</span>. Use <span class="chem">y(0) = 0</span> to find <span class="chem">C</span>.
        "これから <span class=\"chem\">arctan y = -e^{-x} + C</span> が得られます。<span class=\"chem\">y(0) = 0</span> を使って <span class=\"chem\">C</span> を求めます。",
        // EN: Make sure your GDC is in radian mode when you evaluate <span class="chem">tan</span>.
        "<span class=\"chem\">tan</span> を計算するときは、GDC がラジアンモードになっていることを確認しましょう。",
      ],
      // EN: <p><span class="chem">int 1/(1 + y^2) dy = int e^{-x} dx => arctan y = -e^{-x} + C</span>. At <span class="chem">(0, 0)</span>: <span class="chem">0 = -1 + C => C = 1</span>. So <span class="chem">y = tan(1 - e^{-x})</span>, and <span class="chem">y(2) = tan(1 - e^{-2}) ≈ 1.17</span> (radians).</p>
      solution: "<p><span class=\"chem\">int 1/(1 + y^2) dy = int e^{-x} dx => arctan y = -e^{-x} + C</span>。<span class=\"chem\">(0, 0)</span> で <span class=\"chem\">0 = -1 + C => C = 1</span>。よって <span class=\"chem\">y = tan(1 - e^{-x})</span> であり、<span class=\"chem\">y(2) = tan(1 - e^{-2}) ≈ 1.17</span>（ラジアン）です。</p>",
    },

    // ── t5-4-q030 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q030": {
      // EN: <p>An upright cylindrical water tank has internal radius <span class="chem">0.8</span> m. Water leaks from a small hole in its base, so that the volume of water in the tank decreases at a rate of <span class="chem">0.04 sqrt(h)</span> m<sup>3</sup> per minute, where <span class="chem">h</span> m is the depth of the water. At first the water is <span class="chem">1.8</span> m deep. Find the time, in minutes, for the depth of the water to fall to half its initial value. Give your answer correct to 3 significant figures.</p>
      stem: "<p>直立した円柱形の水槽の内側の半径は <span class=\"chem\">0.8</span> m である。底の小さな穴から水が漏れ、水槽内の水の体積は毎分 <span class=\"chem\">0.04 sqrt(h)</span> m<sup>3</sup> の割合で減少する。ここで <span class=\"chem\">h</span> m は水の深さである。最初の水深は <span class=\"chem\">1.8</span> m である。水深が最初の値の半分になるまでの時間（分）を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: the rate is given for the volume <span class="chem">V</span>, but the question is about the depth <span class="chem">h</span>. Write <span class="chem">V = pi (0.8)^2 h</span>, turn <span class="chem">dV/dt</span> into <span class="chem">dh/dt</span>, then solve a separable DE.
        "解読：変化率は体積 <span class=\"chem\">V</span> について与えられていますが、問われているのは深さ <span class=\"chem\">h</span> です。<span class=\"chem\">V = pi (0.8)^2 h</span> と書き、<span class=\"chem\">dV/dt</span> を <span class=\"chem\">dh/dt</span> に直してから、変数分離形の微分方程式を解きます。",
        // EN: <span class="chem">dV/dt = 0.64 pi (dh/dt) = -0.04 sqrt(h)</span>, so <span class="chem">dh/dt = -sqrt(h)/(16 pi)</span>.
        "<span class=\"chem\">dV/dt = 0.64 pi (dh/dt) = -0.04 sqrt(h)</span> なので、<span class=\"chem\">dh/dt = -sqrt(h)/(16 pi)</span> です。",
        // EN: Separate: <span class="chem">int h^{-1/2} dh = int -1/(16 pi) dt</span>, giving <span class="chem">2 sqrt(h) = -t/(16 pi) + C</span>. Find <span class="chem">C</span> from <span class="chem">h(0) = 1.8</span>, then set <span class="chem">h = 0.9</span>.
        "変数を分離します：<span class=\"chem\">int h^{-1/2} dh = int -1/(16 pi) dt</span> より <span class=\"chem\">2 sqrt(h) = -t/(16 pi) + C</span>。<span class=\"chem\">h(0) = 1.8</span> から <span class=\"chem\">C</span> を求め、<span class=\"chem\">h = 0.9</span> とおきます。",
      ],
      // EN: <p><strong>Decode:</strong> the given rate is <span class="chem">dV/dt</span> (and it is a decrease, so it is negative); the question asks about <span class="chem">h</span>, and “half its initial value” means <span class="chem">h = 0.9</span>.</p><p><span class="chem">V = 0.64 pi h => 0.64 pi (dh/dt) = -0.04 sqrt(h) => dh/dt = -sqrt(h)/(16 pi)</span>.</p><p><span class="chem">int h^{-1/2} dh = -int 1/(16 pi) dt => 2 sqrt(h) = 2 sqrt(1.8) - t/(16 pi)</span>.</p><p>At <span class="chem">h = 0.9</span>: <span class="chem">t = 32 pi (sqrt(1.8) - sqrt(0.9)) ≈ 39.5</span> minutes.</p>
      solution: "<p><strong>解読：</strong>与えられた変化率は <span class=\"chem\">dV/dt</span>（減少なので負）です。問われているのは <span class=\"chem\">h</span> で、「最初の値の半分」とは <span class=\"chem\">h = 0.9</span> のことです。</p><p><span class=\"chem\">V = 0.64 pi h => 0.64 pi (dh/dt) = -0.04 sqrt(h) => dh/dt = -sqrt(h)/(16 pi)</span>。</p><p><span class=\"chem\">int h^{-1/2} dh = -int 1/(16 pi) dt => 2 sqrt(h) = 2 sqrt(1.8) - t/(16 pi)</span>。</p><p><span class=\"chem\">h = 0.9</span> で <span class=\"chem\">t = 32 pi (sqrt(1.8) - sqrt(0.9)) ≈ 39.5</span> 分です。</p>",
    },

    // ── t5-4-q031 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q031": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx + y = sin x</span> and <span class="chem">y(0) = 1</span>. You may use the result <span class="chem">int e^x sin x dx = (1/2) e^x (sin x - cos x) + C</span>. Find the smallest positive value of <span class="chem">x</span> for which <span class="chem">y = 0</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>関数 <span class=\"chem\">y(x)</span> は <span class=\"chem\">dy/dx + y = sin x</span> および <span class=\"chem\">y(0) = 1</span> を満たす。結果 <span class=\"chem\">int e^x sin x dx = (1/2) e^x (sin x - cos x) + C</span> を用いてもよい。<span class=\"chem\">y = 0</span> となる <span class=\"chem\">x</span> の最小の正の値を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: The integrating factor is <span class="chem">e^{int 1 dx} = e^x</span>, so <span class="chem">d/dx(y e^x) = e^x sin x</span>.
        "積分因子は <span class=\"chem\">e^{int 1 dx} = e^x</span> なので、<span class=\"chem\">d/dx(y e^x) = e^x sin x</span> です。",
        // EN: Use the given integral, then <span class="chem">y(0) = 1</span>. You should reach <span class="chem">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span>.
        "与えられた積分を使い、次に <span class=\"chem\">y(0) = 1</span>。<span class=\"chem\">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span> にたどり着くはずです。",
        // EN: Graph <span class="chem">y</span> on the GDC for <span class="chem">x &gt; 0</span> and find the first zero.
        "GDC で <span class=\"chem\">x &gt; 0</span> の範囲で <span class=\"chem\">y</span> のグラフを描き、最初の零点を求めます。",
      ],
      // EN: <p>With the integrating factor <span class="chem">e^x</span>: <span class="chem">y e^x = (1/2)e^x(sin x - cos x) + C</span>. At <span class="chem">x = 0</span>: <span class="chem">1 = -1/2 + C => C = 3/2</span>. So <span class="chem">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span>.</p><p>GDC: the first positive zero is <span class="chem">x = 3.96715… ≈ 3.97</span>.</p>
      solution: "<p>積分因子 <span class=\"chem\">e^x</span> を用いると：<span class=\"chem\">y e^x = (1/2)e^x(sin x - cos x) + C</span>。<span class=\"chem\">x = 0</span> で <span class=\"chem\">1 = -1/2 + C => C = 3/2</span>。よって <span class=\"chem\">y = (1/2)(sin x - cos x) + (3/2)e^{-x}</span>。</p><p>GDC：最初の正の零点は <span class=\"chem\">x = 3.96715… ≈ 3.97</span> です。</p>",
    },

    // ── t5-4-q032 · short · challenge · AHL · AHL 5.18 · 12 marks
    "t5-4-q032": {
      // EN: <p>A skydiver jumps from a helicopter that is not moving. Her downward speed <span class="chem">v</span> m s<sup>−1</sup> after <span class="chem">t</span> seconds is modelled by <span class="chem">dv/dt = 9 - 0.0036v^2</span>, with <span class="chem">v(0) = 0</span>.</p><p>(a) Write down the speed she approaches as <span class="chem">t</span> increases (her terminal speed). <strong>[1 mark]</strong></p><p>(b) Show that <span class="chem">int 1/(2500 - v^2) dv = (1/100) ln((50 + v)/(50 - v)) + C</span> for <span class="chem">0 &lt;= v &lt; 50</span>. <strong>[3 marks]</strong></p><p>(c) Hence show that <span class="chem">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span>. <strong>[4 marks]</strong></p><p>(d) Find the time taken to reach 90% of her terminal speed. <strong>[2 marks]</strong></p><p>(e) Find the distance she falls in this time. <strong>[2 marks]</strong></p>
      stem: "<p>スカイダイバーが静止しているヘリコプターから飛び降りる。<span class=\"chem\">t</span> 秒後の彼女の下向きの速さ <span class=\"chem\">v</span> m s<sup>−1</sup> は <span class=\"chem\">dv/dt = 9 - 0.0036v^2</span>、<span class=\"chem\">v(0) = 0</span> でモデル化される。</p><p>(a) <span class=\"chem\">t</span> が大きくなるときに彼女の速さが近づく値（終端速度）を書きなさい (Write down)。<strong>[1 mark]</strong></p><p>(b) <span class=\"chem\">0 &lt;= v &lt; 50</span> に対して <span class=\"chem\">int 1/(2500 - v^2) dv = (1/100) ln((50 + v)/(50 - v)) + C</span> であることを示しなさい (Show that)。<strong>[3 marks]</strong></p><p>(c) これを用いて (Hence)、<span class=\"chem\">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span> であることを示しなさい。<strong>[4 marks]</strong></p><p>(d) 終端速度の 90% に達するまでの時間を求めなさい。<strong>[2 marks]</strong></p><p>(e) この時間に彼女が落下する距離を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: “terminal speed” means the speed at which <span class="chem">dv/dt = 0</span>; “distance fallen” means integrate the speed.
        "解読：「終端速度」とは <span class=\"chem\">dv/dt = 0</span> となるときの速さのことです。「落下した距離」とは速さを積分することです。",
        // EN: Take out the factor: <span class="chem">9 - 0.0036v^2 = 0.0036(2500 - v^2)</span>.
        "因数をくくり出します：<span class=\"chem\">9 - 0.0036v^2 = 0.0036(2500 - v^2)</span>。",
        // EN: For (e), use the GDC to integrate <span class="chem">v(t)</span> from <span class="chem">0</span> to your answer to (d) (use its unrounded value).
        "(e) では GDC を使って <span class=\"chem\">v(t)</span> を <span class=\"chem\">0</span> から (d) の答え（丸める前の値）まで積分します。",
      ],
      // EN: <p><strong>Decode:</strong> “terminal speed” is where the speed stops changing, <span class="chem">dv/dt = 0</span>; the DE is separable with a partial-fraction integral; distance is the integral of speed.</p><p>(a) <span class="chem">9 - 0.0036v^2 = 0 => v = 50</span> m s<sup>−1</sup>.</p><p>(b) <span class="chem">1/(2500 - v^2) = 1/((50 - v)(50 + v)) = (1/100)(1/(50 - v) + 1/(50 + v))</span>. Integrating: <span class="chem">(1/100)(-ln(50 - v) + ln(50 + v)) + C = (1/100) ln((50 + v)/(50 - v)) + C</span>.</p><p>(c) <span class="chem">dv/dt = 0.0036(2500 - v^2)</span>, so <span class="chem">int 1/(2500 - v^2) dv = int 0.0036 dt</span>: <span class="chem">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span>, and <span class="chem">v(0) = 0</span> gives <span class="chem">C = 0</span>. So <span class="chem">(50 + v)/(50 - v) = e^{0.36t}</span>, <span class="chem">v(1 + e^{0.36t}) = 50(e^{0.36t} - 1)</span>, and dividing top and bottom by <span class="chem">e^{0.36t}</span> gives the result.</p><p>(d) <span class="chem">v = 45 => (95/5) = e^{0.36t} => t = ln(19)/0.36 ≈ 8.18</span> s.</p><p>(e) <span class="chem">int_0^{8.179} v dt ≈ 231</span> m (GDC).</p>
      answer: "<p><strong>解読：</strong>「終端速度」とは速さが変化しなくなるところ、すなわち <span class=\"chem\">dv/dt = 0</span> です。微分方程式は変数分離形で、部分分数による積分が必要です。距離は速さの積分です。</p><p>(a) <span class=\"chem\">9 - 0.0036v^2 = 0 => v = 50</span> m s<sup>−1</sup>。</p><p>(b) <span class=\"chem\">1/(2500 - v^2) = 1/((50 - v)(50 + v)) = (1/100)(1/(50 - v) + 1/(50 + v))</span>。積分して：<span class=\"chem\">(1/100)(-ln(50 - v) + ln(50 + v)) + C = (1/100) ln((50 + v)/(50 - v)) + C</span>。</p><p>(c) <span class=\"chem\">dv/dt = 0.0036(2500 - v^2)</span> なので <span class=\"chem\">int 1/(2500 - v^2) dv = int 0.0036 dt</span>：<span class=\"chem\">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span>、そして <span class=\"chem\">v(0) = 0</span> より <span class=\"chem\">C = 0</span>。よって <span class=\"chem\">(50 + v)/(50 - v) = e^{0.36t}</span>、<span class=\"chem\">v(1 + e^{0.36t}) = 50(e^{0.36t} - 1)</span> であり、分子と分母を <span class=\"chem\">e^{0.36t}</span> で割ると結果が得られる。</p><p>(d) <span class=\"chem\">v = 45 => (95/5) = e^{0.36t} => t = ln(19)/0.36 ≈ 8.18</span> s。</p><p>(e) <span class=\"chem\">int_0^{8.179} v dt ≈ 231</span> m（GDC）。</p>",
      markscheme: [
        // EN: A1: <span class="chem">v = 50</span> m s<sup>−1</sup>.
        "A1：<span class=\"chem\">v = 50</span> m s<sup>−1</sup>。",
        // EN: M1: factorises <span class="chem">2500 - v^2 = (50 - v)(50 + v)</span> and writes partial fractions.
        "M1：<span class=\"chem\">2500 - v^2 = (50 - v)(50 + v)</span> を因数分解し、部分分数で表している。",
        // EN: A1: <span class="chem">(1/100)(1/(50 - v) + 1/(50 + v))</span>.
        "A1：<span class=\"chem\">(1/100)(1/(50 - v) + 1/(50 + v))</span>。",
        // EN: A1: integrates to <span class="chem">(1/100)(ln(50 + v) - ln(50 - v))</span>, including the sign from <span class="chem">int 1/(50 - v) dv = -ln(50 - v)</span>. AG: <span class="chem">(1/100) ln((50 + v)/(50 - v)) + C</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">int 1/(50 - v) dv = -ln(50 - v)</span> からくる符号も含めて <span class=\"chem\">(1/100)(ln(50 + v) - ln(50 - v))</span> と積分している。AG：<span class=\"chem\">(1/100) ln((50 + v)/(50 - v)) + C</span>；与えられた式そのものには点を与えない。",
        // EN: M1: writes <span class="chem">dv/dt = 0.0036(2500 - v^2)</span> and separates variables.
        "M1：<span class=\"chem\">dv/dt = 0.0036(2500 - v^2)</span> と書いて変数を分離している。",
        // EN: A1: <span class="chem">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span> with <span class="chem">C = 0</span>.
        "A1：<span class=\"chem\">C = 0</span> として <span class=\"chem\">(1/100) ln((50 + v)/(50 - v)) = 0.0036t + C</span>。",
        // EN: M1: exponentiates: <span class="chem">(50 + v)/(50 - v) = e^{0.36t}</span>.
        "M1：両辺の指数をとっている：<span class=\"chem\">(50 + v)/(50 - v) = e^{0.36t}</span>。",
        // EN: A1: rearranges to <span class="chem">v = 50(e^{0.36t} - 1)/(e^{0.36t} + 1)</span>. AG: <span class="chem">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">v = 50(e^{0.36t} - 1)/(e^{0.36t} + 1)</span> に変形している。AG：<span class=\"chem\">v = 50(1 - e^{-0.36t})/(1 + e^{-0.36t})</span>；与えられた式そのものには点を与えない。",
        // EN: M1: sets <span class="chem">v = 45</span>.
        "M1：<span class=\"chem\">v = 45</span> とおいている。",
        // EN: A1: <span class="chem">t = 8.18</span> s.
        "A1：<span class=\"chem\">t = 8.18</span> s。",
        // EN: M1: distance <span class="chem">= int_0^{8.18} v dt</span>.
        "M1：距離 <span class=\"chem\">= int_0^{8.18} v dt</span>。",
        // EN: A1: <span class="chem">231</span> m.
        "A1：<span class=\"chem\">231</span> m。",
      ],
    },

    // ── t5-4-q033 · numeric · exam · AHL · AHL 5.19 · 5 marks
    "t5-4-q033": {
      // EN: <p>The cube root of 10 can be written as <span class="chem">10^{1/3} = 2(1 + 1/4)^{1/3}</span>. Use the first three terms of the Maclaurin series for <span class="chem">(1 + x)^{1/3}</span> to estimate <span class="chem">10^{1/3}</span>. Find the percentage error of this estimate compared with the GDC value of <span class="chem">10^{1/3}</span>, correct to 3 significant figures.</p>
      stem: "<p>10 の立方根は <span class=\"chem\">10^{1/3} = 2(1 + 1/4)^{1/3}</span> と書ける。<span class=\"chem\">(1 + x)^{1/3}</span> のマクローリン級数の最初の三つの項を用いて <span class=\"chem\">10^{1/3}</span> を推定しなさい。この推定値の、GDC による <span class=\"chem\">10^{1/3}</span> の値に対する百分率誤差を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you need two numbers, the series estimate and the calculator value, and then the percentage error between them. The factor 2 appears because <span class="chem">10 = 8 × 1.25</span>.
        "解読：級数による推定値と電卓の値という二つの数が必要で、そのあと両者の百分率誤差を求めます。因数 2 が現れるのは <span class=\"chem\">10 = 8 × 1.25</span> だからです。",
        // EN: Use <span class="chem">(1 + x)^p = 1 + px + (p(p - 1)/2!)x^2 + …</span> with <span class="chem">p = 1/3</span> and <span class="chem">x = 1/4</span>.
        "<span class=\"chem\">p = 1/3</span>、<span class=\"chem\">x = 1/4</span> として <span class=\"chem\">(1 + x)^p = 1 + px + (p(p - 1)/2!)x^2 + …</span> を使います。",
        // EN: You should get the estimate <span class="chem">2(1 + 1/12 - 1/144) = 2.15278</span>. Compare it with the GDC value of <span class="chem">10^{1/3}</span>.
        "推定値 <span class=\"chem\">2(1 + 1/12 - 1/144) = 2.15278</span> が得られるはずです。それを GDC による <span class=\"chem\">10^{1/3}</span> の値と比べます。",
      ],
      // EN: <p><span class="chem">(1 + x)^{1/3} ≈ 1 + (1/3)x + ((1/3)(-2/3)/2)x^2 = 1 + x/3 - x^2/9</span>. With <span class="chem">x = 1/4</span>: <span class="chem">1 + 1/12 - 1/144 = 155/144</span>, so the estimate is <span class="chem">2 × 155/144 = 2.152778</span>.</p><p>GDC: <span class="chem">10^{1/3} = 2.154435</span>. Percentage error <span class="chem">= |2.152778 - 2.154435| / 2.154435 × 100 ≈ 0.0769%</span>.</p>
      solution: "<p><span class=\"chem\">(1 + x)^{1/3} ≈ 1 + (1/3)x + ((1/3)(-2/3)/2)x^2 = 1 + x/3 - x^2/9</span>。<span class=\"chem\">x = 1/4</span> を用いると：<span class=\"chem\">1 + 1/12 - 1/144 = 155/144</span> なので、推定値は <span class=\"chem\">2 × 155/144 = 2.152778</span> です。</p><p>GDC：<span class=\"chem\">10^{1/3} = 2.154435</span>。百分率誤差 <span class=\"chem\">= |2.152778 - 2.154435| / 2.154435 × 100 ≈ 0.0769%</span>。</p>",
    },

    // ── t5-4-q034 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q034": {
      // EN: <p>The differential equation <span class="chem">dy/dx = -y</span>, <span class="chem">y(0) = 1</span>, is solved approximately with Euler’s method, using <span class="chem">n</span> equal steps from <span class="chem">x = 0</span> to <span class="chem">x = 1</span>. Find the least value of <span class="chem">n</span> for which the Euler estimate of <span class="chem">y(1)</span> is within <span class="chem">0.005</span> of the exact value.</p>
      stem: "<p>微分方程式 <span class=\"chem\">dy/dx = -y</span>、<span class=\"chem\">y(0) = 1</span> を、<span class=\"chem\">x = 0</span> から <span class=\"chem\">x = 1</span> までを <span class=\"chem\">n</span> 等分したステップでオイラー法を用いて近似的に解く。<span class=\"chem\">y(1)</span> のオイラー法による推定値が正確な値との差 <span class=\"chem\">0.005</span> 以内に収まるような <span class=\"chem\">n</span> の最小値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you need a formula for the Euler estimate in terms of <span class="chem">n</span> (with <span class="chem">h = 1/n</span>), the exact value <span class="chem">y(1)</span>, and then the least integer <span class="chem">n</span> that meets the condition.
        "解読：<span class=\"chem\">n</span> を用いたオイラー法の推定値の式（<span class=\"chem\">h = 1/n</span>）、正確な値 <span class=\"chem\">y(1)</span>、そして条件を満たす最小の整数 <span class=\"chem\">n</span> が必要です。",
        // EN: Each step is <span class="chem">y_{k+1} = y_k + h(-y_k) = (1 - h)y_k</span>, so after <span class="chem">n</span> steps the estimate is <span class="chem">(1 - 1/n)^n</span>. The exact solution is <span class="chem">y = e^{-x}</span>.
        "各ステップは <span class=\"chem\">y_{k+1} = y_k + h(-y_k) = (1 - h)y_k</span> なので、<span class=\"chem\">n</span> ステップ後の推定値は <span class=\"chem\">(1 - 1/n)^n</span> です。正確な解は <span class=\"chem\">y = e^{-x}</span> です。",
        // EN: Tabulate <span class="chem">e^{-1} - (1 - 1/n)^n</span> on the GDC and find the first <span class="chem">n</span> for which it is less than <span class="chem">0.005</span>.
        "GDC で <span class=\"chem\">e^{-1} - (1 - 1/n)^n</span> の表を作り、それが <span class=\"chem\">0.005</span> より小さくなる最初の <span class=\"chem\">n</span> を求めます。",
      ],
      // EN: <p><strong>Decode:</strong> Euler’s steps here form a geometric sequence, so the estimate has a closed form in <span class="chem">n</span>; “least <span class="chem">n</span>” means search a GDC table.</p><p><span class="chem">y_{k+1} = (1 - 1/n)y_k => y_n = (1 - 1/n)^n</span>. Exact: <span class="chem">y(1) = e^{-1} = 0.367879…</span>.</p><p>GDC table of <span class="chem">e^{-1} - (1 - 1/n)^n</span>: <span class="chem">n = 37</span> gives <span class="chem">0.005028…</span> (too big), <span class="chem">n = 38</span> gives <span class="chem">0.004894…</span>. So the least <span class="chem">n</span> is <span class="chem">38</span>.</p>
      solution: "<p><strong>解読：</strong>ここではオイラー法のステップが等比数列をなすので、推定値は <span class=\"chem\">n</span> を用いた閉じた式で表せます。「最小の <span class=\"chem\">n</span>」とは GDC の表で探すことです。</p><p><span class=\"chem\">y_{k+1} = (1 - 1/n)y_k => y_n = (1 - 1/n)^n</span>。正確な値：<span class=\"chem\">y(1) = e^{-1} = 0.367879…</span>。</p><p><span class=\"chem\">e^{-1} - (1 - 1/n)^n</span> の GDC の表：<span class=\"chem\">n = 37</span> では <span class=\"chem\">0.005028…</span>（大きすぎる）、<span class=\"chem\">n = 38</span> では <span class=\"chem\">0.004894…</span>。よって最小の <span class=\"chem\">n</span> は <span class=\"chem\">38</span> です。</p>",
    },

    // ── t5-4-q035 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q035": {
      // EN: <p>Since <span class="chem">arctan(1/sqrt(3)) = pi/6</span>, it follows that <span class="chem">pi = 6 arctan(1/sqrt(3))</span>. Use the first four non-zero terms of the Maclaurin series for <span class="chem">arctan x</span> to find an estimate for <span class="chem">pi</span>, correct to 5 significant figures.</p>
      stem: "<p><span class=\"chem\">arctan(1/sqrt(3)) = pi/6</span> より <span class=\"chem\">pi = 6 arctan(1/sqrt(3))</span> が成り立つ。<span class=\"chem\">arctan x</span> のマクローリン級数の 0 でない最初の四つの項を用いて、<span class=\"chem\">pi</span> の推定値を有効数字 5 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: The first four non-zero terms are <span class="chem">x - x^3/3 + x^5/5 - x^7/7</span>.
        "0 でない最初の四つの項は <span class=\"chem\">x - x^3/3 + x^5/5 - x^7/7</span> です。",
        // EN: Substitute <span class="chem">x = 1/sqrt(3)</span> (store it in the GDC), then multiply the result by 6.
        "<span class=\"chem\">x = 1/sqrt(3)</span> を代入し（GDC に記憶させます）、結果に 6 を掛けます。",
      ],
      // EN: <p>With <span class="chem">x = 1/sqrt(3) = 0.577350…</span>: <span class="chem">x - x^3/3 + x^5/5 - x^7/7 = 0.577350 - 0.064150 + 0.012830 - 0.003055 = 0.522975…</span>. Multiplying by 6 gives <span class="chem">pi ≈ 3.1379</span> (5 s.f.).</p>
      solution: "<p><span class=\"chem\">x = 1/sqrt(3) = 0.577350…</span> を用いると：<span class=\"chem\">x - x^3/3 + x^5/5 - x^7/7 = 0.577350 - 0.064150 + 0.012830 - 0.003055 = 0.522975…</span>。6 を掛けると <span class=\"chem\">pi ≈ 3.1379</span>（有効数字 5 桁）です。</p>",
    },

    // ── t5-4-q036 · short · challenge · AHL · AHL 5.18 · 11 marks
    "t5-4-q036": {
      // EN: <p>A cup of coffee at <span class="chem">85</span> °C is placed in a room whose heating has just been switched on. The room temperature <span class="chem">t</span> minutes later is <span class="chem">(18 + 0.5t)</span> °C. The coffee’s temperature <span class="chem">T</span> °C changes at a rate equal to <span class="chem">0.2</span> times the difference between the room temperature and the coffee temperature.</p><p>(a) Show that <span class="chem">dT/dt + 0.2T = 3.6 + 0.1t</span>. <strong>[1 mark]</strong></p><p>(b) Use an integrating factor to show that <span class="chem">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span>. <strong>[6 marks]</strong></p><p>(c) Find the time at which the coffee reaches <span class="chem">50</span> °C. <strong>[2 marks]</strong></p><p>(d) Find the time at which the coffee and the room are at the same temperature. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">85</span> °C のコーヒーを、暖房を入れたばかりの部屋に置く。<span class=\"chem\">t</span> 分後の室温は <span class=\"chem\">(18 + 0.5t)</span> °C である。コーヒーの温度 <span class=\"chem\">T</span> °C は、室温とコーヒーの温度の差の <span class=\"chem\">0.2</span> 倍に等しい速さで変化する。</p><p>(a) <span class=\"chem\">dT/dt + 0.2T = 3.6 + 0.1t</span> であることを示しなさい (Show that)。<strong>[1 mark]</strong></p><p>(b) 積分因子を用いて、<span class=\"chem\">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span> であることを示しなさい。<strong>[6 marks]</strong></p><p>(c) コーヒーが <span class=\"chem\">50</span> °C になる時刻を求めなさい。<strong>[2 marks]</strong></p><p>(d) コーヒーと部屋が同じ温度になる時刻を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: “rate equal to 0.2 times (room − coffee)” gives <span class="chem">dT/dt = 0.2(18 + 0.5t - T)</span>. Because the room temperature depends on <span class="chem">t</span>, use the integrating factor method.
        "解読：「速さは 0.2 ×（室温 − コーヒー）に等しい」から <span class=\"chem\">dT/dt = 0.2(18 + 0.5t - T)</span> が得られます。室温が <span class=\"chem\">t</span> に依存するので、積分因子の方法を使います。",
        // EN: The integrating factor is <span class="chem">e^{0.2t}</span>. You need <span class="chem">int t e^{0.2t} dt</span> by parts, with <span class="chem">u = t</span>.
        "積分因子は <span class=\"chem\">e^{0.2t}</span> です。<span class=\"chem\">u = t</span> として、部分積分法で <span class=\"chem\">int t e^{0.2t} dt</span> を求める必要があります。",
        // EN: For (d), set <span class="chem">T = 18 + 0.5t</span>: the <span class="chem">0.5t</span> terms cancel.
        "(d) では <span class=\"chem\">T = 18 + 0.5t</span> とおきます：<span class=\"chem\">0.5t</span> の項が消えます。",
      ],
      // EN: <p><strong>Decode:</strong> the room temperature is not constant, so this is not the usual separable cooling model: it becomes a linear DE that needs an integrating factor and integration by parts.</p><p>(a) <span class="chem">dT/dt = 0.2((18 + 0.5t) - T) = 3.6 + 0.1t - 0.2T</span>, which rearranges to the result.</p><p>(b) IF <span class="chem">= e^{0.2t}</span>: <span class="chem">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>. <span class="chem">int 3.6e^{0.2t} dt = 18e^{0.2t}</span>; by parts, <span class="chem">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>. So <span class="chem">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>, <span class="chem">T = 15.5 + 0.5t + C e^{-0.2t}</span>, and <span class="chem">T(0) = 85</span> gives <span class="chem">C = 69.5</span>.</p><p>(c) GDC: <span class="chem">15.5 + 0.5t + 69.5e^{-0.2t} = 50 => t ≈ 3.78</span> minutes.</p><p>(d) <span class="chem">T - (18 + 0.5t) = 69.5e^{-0.2t} - 2.5 = 0 => t = 5 ln(27.8) ≈ 16.6</span> minutes.</p>
      answer: "<p><strong>解読：</strong>室温が一定ではないので、これは通常の変数分離形の冷却モデルではない。積分因子と部分積分法が必要な線形微分方程式になる。</p><p>(a) <span class=\"chem\">dT/dt = 0.2((18 + 0.5t) - T) = 3.6 + 0.1t - 0.2T</span>。これを変形すると結果が得られる。</p><p>(b) 積分因子 <span class=\"chem\">= e^{0.2t}</span>：<span class=\"chem\">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>。<span class=\"chem\">int 3.6e^{0.2t} dt = 18e^{0.2t}</span>；部分積分法により <span class=\"chem\">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>。よって <span class=\"chem\">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>、<span class=\"chem\">T = 15.5 + 0.5t + C e^{-0.2t}</span>、そして <span class=\"chem\">T(0) = 85</span> より <span class=\"chem\">C = 69.5</span>。</p><p>(c) GDC：<span class=\"chem\">15.5 + 0.5t + 69.5e^{-0.2t} = 50 => t ≈ 3.78</span> 分。</p><p>(d) <span class=\"chem\">T - (18 + 0.5t) = 69.5e^{-0.2t} - 2.5 = 0 => t = 5 ln(27.8) ≈ 16.6</span> 分。</p>",
      markscheme: [
        // EN: A1: writes <span class="chem">dT/dt = 0.2(18 + 0.5t - T)</span> and expands. AG: <span class="chem">dT/dt + 0.2T = 3.6 + 0.1t</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">dT/dt = 0.2(18 + 0.5t - T)</span> と書いて展開している。AG：<span class=\"chem\">dT/dt + 0.2T = 3.6 + 0.1t</span>；与えられた式そのものには点を与えない。",
        // EN: M1: integrating factor <span class="chem">e^{int 0.2 dt} = e^{0.2t}</span>.
        "M1：積分因子 <span class=\"chem\">e^{int 0.2 dt} = e^{0.2t}</span>。",
        // EN: A1: <span class="chem">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>.
        "A1：<span class=\"chem\">d/dt(T e^{0.2t}) = (3.6 + 0.1t)e^{0.2t}</span>。",
        // EN: M1: uses integration by parts on <span class="chem">int t e^{0.2t} dt</span>.
        "M1：<span class=\"chem\">int t e^{0.2t} dt</span> に部分積分法を用いている。",
        // EN: A1: <span class="chem">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>.
        "A1：<span class=\"chem\">int 0.1t e^{0.2t} dt = 0.5t e^{0.2t} - 2.5e^{0.2t}</span>。",
        // EN: A1: <span class="chem">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>.
        "A1：<span class=\"chem\">T e^{0.2t} = (15.5 + 0.5t)e^{0.2t} + C</span>。",
        // EN: A1: <span class="chem">C = 69.5</span> from <span class="chem">T(0) = 85</span>. AG: <span class="chem">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">T(0) = 85</span> から <span class=\"chem\">C = 69.5</span>。AG：<span class=\"chem\">T = 15.5 + 0.5t + 69.5e^{-0.2t}</span>；与えられた式そのものには点を与えない。",
        // EN: M1: sets <span class="chem">T = 50</span> and solves with the GDC.
        "M1：<span class=\"chem\">T = 50</span> とおいて GDC で解いている。",
        // EN: A1: <span class="chem">t = 3.78</span> minutes.
        "A1：<span class=\"chem\">t = 3.78</span> 分。",
        // EN: M1: sets <span class="chem">T = 18 + 0.5t</span>, i.e. <span class="chem">69.5e^{-0.2t} = 2.5</span>.
        "M1：<span class=\"chem\">T = 18 + 0.5t</span>、すなわち <span class=\"chem\">69.5e^{-0.2t} = 2.5</span> とおいている。",
        // EN: A1: <span class="chem">t = 16.6</span> minutes.
        "A1：<span class=\"chem\">t = 16.6</span> 分。",
      ],
    },

    // ── t5-4-q037 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q037": {
      // EN: <p>In a chemical reaction, the amount <span class="chem">x</span> grams of product formed after <span class="chem">t</span> minutes satisfies <span class="chem">dx/dt = 0.02(5 - x)(3 - x)</span>, with <span class="chem">x(0) = 0</span>. You may use <span class="chem">1/((5 - x)(3 - x)) = (1/2)(1/(3 - x) - 1/(5 - x))</span>. Find the amount of product after 10 minutes, correct to 3 significant figures.</p>
      stem: "<p>ある化学反応で、<span class=\"chem\">t</span> 分後に生成した生成物の量 <span class=\"chem\">x</span> グラムは <span class=\"chem\">x(0) = 0</span> のもとで <span class=\"chem\">dx/dt = 0.02(5 - x)(3 - x)</span> を満たす。<span class=\"chem\">1/((5 - x)(3 - x)) = (1/2)(1/(3 - x) - 1/(5 - x))</span> を用いてもよい。10 分後の生成物の量を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is a separable DE; the partial fractions are given. While <span class="chem">0 &lt;= x &lt; 3</span>, both <span class="chem">5 - x</span> and <span class="chem">3 - x</span> are positive.
        "解読：これは変数分離形の微分方程式で、部分分数分解は与えられています。<span class=\"chem\">0 &lt;= x &lt; 3</span> の間は <span class=\"chem\">5 - x</span> と <span class=\"chem\">3 - x</span> はどちらも正です。",
        // EN: Integrating gives <span class="chem">(1/2) ln((5 - x)/(3 - x)) = 0.02t + C</span>, with <span class="chem">C = (1/2) ln(5/3)</span>.
        "積分すると <span class=\"chem\">(1/2) ln((5 - x)/(3 - x)) = 0.02t + C</span> となり、<span class=\"chem\">C = (1/2) ln(5/3)</span> です。",
        // EN: So <span class="chem">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>. Put <span class="chem">t = 10</span> and solve for <span class="chem">x</span>.
        "よって <span class=\"chem\">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>。<span class=\"chem\">t = 10</span> を代入して <span class=\"chem\">x</span> について解きます。",
      ],
      // EN: <p><span class="chem">int 1/((5 - x)(3 - x)) dx = int 0.02 dt => (1/2)(-ln(3 - x) + ln(5 - x)) = 0.02t + C</span>. At <span class="chem">t = 0, x = 0</span>: <span class="chem">C = (1/2) ln(5/3)</span>. So <span class="chem">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>.</p><p>At <span class="chem">t = 10</span>, let <span class="chem">K = (5/3)e^{0.4} = 2.48654…</span>. Then <span class="chem">5 - x = K(3 - x) => x = (3K - 5)/(K - 1) ≈ 1.65</span> g.</p>
      solution: "<p><span class=\"chem\">int 1/((5 - x)(3 - x)) dx = int 0.02 dt => (1/2)(-ln(3 - x) + ln(5 - x)) = 0.02t + C</span>。<span class=\"chem\">t = 0, x = 0</span> で <span class=\"chem\">C = (1/2) ln(5/3)</span>。よって <span class=\"chem\">(5 - x)/(3 - x) = (5/3)e^{0.04t}</span>。</p><p><span class=\"chem\">t = 10</span> で <span class=\"chem\">K = (5/3)e^{0.4} = 2.48654…</span> とおきます。すると <span class=\"chem\">5 - x = K(3 - x) => x = (3K - 5)/(K - 1) ≈ 1.65</span> g です。</p>",
    },

    // ── t5-4-q038 · numeric · challenge · AHL · AHL 5.19 · 5 marks
    "t5-4-q038": {
      // EN: <p>A student estimates <span class="chem">sqrt(e)</span> by adding terms of the Maclaurin series for <span class="chem">e^x</span>. Let <span class="chem">P_n(x)</span> be the Maclaurin polynomial of <span class="chem">e^x</span> of degree <span class="chem">n</span>. Find the least value of <span class="chem">n</span> for which <span class="chem">|sqrt(e) - P_n(0.5)| &lt; 10^{-6}</span>.</p>
      stem: "<p>ある生徒が <span class=\"chem\">e^x</span> のマクローリン級数の項を足し合わせて <span class=\"chem\">sqrt(e)</span> を推定する。<span class=\"chem\">P_n(x)</span> を <span class=\"chem\">e^x</span> の <span class=\"chem\">n</span> 次のマクローリン多項式とする。<span class=\"chem\">|sqrt(e) - P_n(0.5)| &lt; 10^{-6}</span> となる <span class=\"chem\">n</span> の最小値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: <span class="chem">sqrt(e) = e^{0.5}</span>, so this asks how many terms of <span class="chem">1 + x + x^2/2! + …</span> at <span class="chem">x = 0.5</span> you need to get within <span class="chem">10^{-6}</span>. Degree <span class="chem">n</span> means the last term is <span class="chem">x^n/n!</span>.
        "解読：<span class=\"chem\">sqrt(e) = e^{0.5}</span> なので、この問題は <span class=\"chem\">x = 0.5</span> で <span class=\"chem\">1 + x + x^2/2! + …</span> の項をいくつ使えば誤差が <span class=\"chem\">10^{-6}</span> 以内になるかを問うています。<span class=\"chem\">n</span> 次とは、最後の項が <span class=\"chem\">x^n/n!</span> であるという意味です。",
        // EN: Compute <span class="chem">P_n(0.5) = sum_{k=0}^{n} 0.5^k/k!</span> for increasing <span class="chem">n</span> (a GDC sum or table helps) and compare with the GDC value of <span class="chem">e^{0.5}</span>.
        "<span class=\"chem\">n</span> を大きくしながら <span class=\"chem\">P_n(0.5) = sum_{k=0}^{n} 0.5^k/k!</span> を計算し（GDC の和や表が便利です）、GDC による <span class=\"chem\">e^{0.5}</span> の値と比べます。",
        // EN: The error is roughly the first term left out, <span class="chem">0.5^{n+1}/(n + 1)!</span>.
        "誤差はおよそ、最初に省いた項 <span class=\"chem\">0.5^{n+1}/(n + 1)!</span> です。",
      ],
      // EN: <p><strong>Decode:</strong> <span class="chem">sqrt(e) = e^{0.5}</span>, and “degree <span class="chem">n</span>” means the polynomial stops at <span class="chem">x^n/n!</span>; we need the least <span class="chem">n</span> giving error below <span class="chem">10^{-6}</span>.</p><p>GDC: <span class="chem">e^{0.5} - P_6(0.5) = 1.65 × 10^{-6}</span> (not enough) and <span class="chem">e^{0.5} - P_7(0.5) = 1.03 × 10^{-7}</span>. So <span class="chem">n = 7</span>.</p>
      solution: "<p><strong>解読：</strong><span class=\"chem\">sqrt(e) = e^{0.5}</span> であり、「<span class=\"chem\">n</span> 次」とは多項式が <span class=\"chem\">x^n/n!</span> で終わることです。誤差が <span class=\"chem\">10^{-6}</span> 未満となる最小の <span class=\"chem\">n</span> を求めます。</p><p>GDC：<span class=\"chem\">e^{0.5} - P_6(0.5) = 1.65 × 10^{-6}</span>（不十分）および <span class=\"chem\">e^{0.5} - P_7(0.5) = 1.03 × 10^{-7}</span>。よって <span class=\"chem\">n = 7</span> です。</p>",
    },

    // ── t5-4-q039 · short · exam · AHL · AHL 5.18 · 9 marks
    "t5-4-q039": {
      // EN: <p>Consider <span class="chem">dy/dx = x - y^2</span> with <span class="chem">y(0) = 1</span>. In this question, carry full calculator accuracy between steps and give final answers correct to 4 decimal places.</p><p>(a) Use Euler’s method with <span class="chem">h = 0.2</span> to estimate <span class="chem">y(1)</span>. <strong>[3 marks]</strong></p><p>(b) Use Euler’s method with <span class="chem">h = 0.1</span> to estimate <span class="chem">y(1)</span>. <strong>[2 marks]</strong></p><p>(c) A numerical solver gives <span class="chem">y(1) = 0.8334</span> to 4 decimal places. Find the error in each estimate. <strong>[2 marks]</strong></p><p>(d) Comment on how the error changes when the step size is halved. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">y(0) = 1</span> のもとで <span class=\"chem\">dy/dx = x - y^2</span> を考える。この問題では、ステップ間は電卓の値を丸めずに計算し、最終的な答えは小数第 4 位まで求めなさい。</p><p>(a) <span class=\"chem\">h = 0.2</span> のオイラー法を用いて <span class=\"chem\">y(1)</span> を推定しなさい。<strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">h = 0.1</span> のオイラー法を用いて <span class=\"chem\">y(1)</span> を推定しなさい。<strong>[2 marks]</strong></p><p>(c) 数値解法ソフトでは小数第 4 位まで <span class=\"chem\">y(1) = 0.8334</span> となる。それぞれの推定値の誤差を求めなさい。<strong>[2 marks]</strong></p><p>(d) 刻み幅を半分にすると誤差がどう変わるかについて論じなさい (Comment)。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: two GDC Euler tables (5 steps and 10 steps), then compare each with the given accurate value.
        "解読：GDC でオイラー法の表を二つ（5 ステップと 10 ステップ）作り、それぞれを与えられた精密な値と比べます。",
        // EN: Store <span class="chem">x</span> and <span class="chem">y</span> on the GDC and repeat <span class="chem">y + h(x - y^2) -> y</span>, <span class="chem">x + h -> x</span>.
        "GDC に <span class=\"chem\">x</span> と <span class=\"chem\">y</span> を記憶させ、<span class=\"chem\">y + h(x - y^2) -> y</span>、<span class=\"chem\">x + h -> x</span> を繰り返します。",
        // EN: For (d), divide the larger error by the smaller one.
        "(d) では、大きい方の誤差を小さい方の誤差で割ります。",
      ],
      // EN: <p>(a) <span class="chem">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span>: <span class="chem">0.8, 0.712, 0.690611, 0.715222, 0.772914</span>. So <span class="chem">y(1) ≈ 0.7729</span>.</p><p>(b) Ten steps of <span class="chem">y_{n+1} = y_n + 0.1(x_n - y_n^2)</span> give <span class="chem">y(1) ≈ 0.8054</span> (0.805354).</p><p>(c) Errors: <span class="chem">0.8334 - 0.7729 = 0.0605</span> and <span class="chem">0.8334 - 0.8054 = 0.0280</span>.</p><p>(d) Halving <span class="chem">h</span> roughly halves the error (<span class="chem">0.0605/0.0280 ≈ 2.2</span>): the Euler error is roughly proportional to <span class="chem">h</span>. Both estimates are too low.</p>
      answer: "<p>(a) <span class=\"chem\">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span>：<span class=\"chem\">0.8, 0.712, 0.690611, 0.715222, 0.772914</span>。よって <span class=\"chem\">y(1) ≈ 0.7729</span>。</p><p>(b) <span class=\"chem\">y_{n+1} = y_n + 0.1(x_n - y_n^2)</span> で十ステップ進むと <span class=\"chem\">y(1) ≈ 0.8054</span>（0.805354）。</p><p>(c) 誤差：<span class=\"chem\">0.8334 - 0.7729 = 0.0605</span> および <span class=\"chem\">0.8334 - 0.8054 = 0.0280</span>。</p><p>(d) <span class=\"chem\">h</span> を半分にすると誤差はほぼ半分になる（<span class=\"chem\">0.0605/0.0280 ≈ 2.2</span>）。オイラー法の誤差はおよそ <span class=\"chem\">h</span> に比例する。どちらの推定値も小さすぎる。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span>.
        "M1：<span class=\"chem\">y_{n+1} = y_n + 0.2(x_n - y_n^2)</span> を用いている。",
        // EN: A1: correct intermediate values (e.g. <span class="chem">y_1 = 0.8</span>, <span class="chem">y_2 = 0.712</span>).
        "A1：途中の値が正しい（例：<span class=\"chem\">y_1 = 0.8</span>、<span class=\"chem\">y_2 = 0.712</span>）。",
        // EN: A1: <span class="chem">y(1) ≈ 0.7729</span>.
        "A1：<span class=\"chem\">y(1) ≈ 0.7729</span>。",
        // EN: M1: ten steps with <span class="chem">h = 0.1</span>.
        "M1：<span class=\"chem\">h = 0.1</span> で十ステップ進めている。",
        // EN: A1: <span class="chem">y(1) ≈ 0.8054</span>.
        "A1：<span class=\"chem\">y(1) ≈ 0.8054</span>。",
        // EN: A1: error <span class="chem">0.0605</span> for <span class="chem">h = 0.2</span>.
        "A1：<span class=\"chem\">h = 0.2</span> の誤差 <span class=\"chem\">0.0605</span>。",
        // EN: A1: error <span class="chem">0.0280</span> for <span class="chem">h = 0.1</span>.
        "A1：<span class=\"chem\">h = 0.1</span> の誤差 <span class=\"chem\">0.0280</span>。",
        // EN: A1: the error is roughly halved (ratio about 2).
        "A1：誤差はほぼ半分になる（比はおよそ 2）。",
        // EN: R1: so the error is approximately proportional to the step size <span class="chem">h</span>.
        "R1：よって誤差は刻み幅 <span class=\"chem\">h</span> にほぼ比例する。",
      ],
    },

    // ── t5-4-q040 · numeric · challenge · AHL · AHL 5.18 · 5 marks
    "t5-4-q040": {
      // EN: <p>A fish farm models the number <span class="chem">P</span> of fish in a lake by <span class="chem">dP/dt = 0.5P(1 - P/1000) - 60</span>, where <span class="chem">t</span> is in years and 60 fish per year are caught. There is a critical starting population <span class="chem">P_c</span>: if <span class="chem">P(0) &lt; P_c</span> the fish eventually die out, and if <span class="chem">P(0)</span> is a little more than <span class="chem">P_c</span> the population survives. Find <span class="chem">P_c</span>, correct to 3 significant figures.</p>
      stem: "<p>ある養魚場は、湖の魚の数 <span class=\"chem\">P</span> を <span class=\"chem\">dP/dt = 0.5P(1 - P/1000) - 60</span> でモデル化している。ここで <span class=\"chem\">t</span> の単位は年であり、毎年 60 匹の魚が捕獲される。臨界的な初期個体数 <span class=\"chem\">P_c</span> が存在し、<span class=\"chem\">P(0) &lt; P_c</span> ならば魚はやがて絶滅し、<span class=\"chem\">P(0)</span> が <span class=\"chem\">P_c</span> より少し大きければ個体群は存続する。<span class=\"chem\">P_c</span> を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you do not need to solve the DE. Find the constant (equilibrium) solutions, where <span class="chem">dP/dt = 0</span>, and look at the sign of <span class="chem">dP/dt</span> between them.
        "解読：微分方程式を解く必要はありません。<span class=\"chem\">dP/dt = 0</span> となる定数解（平衡解）を求め、それらの間での <span class=\"chem\">dP/dt</span> の符号を調べます。",
        // EN: <span class="chem">dP/dt = 0 => 0.5P - 0.0005P^2 - 60 = 0 => P^2 - 1000P + 120000 = 0</span>. Solve this with the GDC.
        "<span class=\"chem\">dP/dt = 0 => 0.5P - 0.0005P^2 - 60 = 0 => P^2 - 1000P + 120000 = 0</span>。これを GDC で解きます。",
        // EN: Below the smaller root, <span class="chem">dP/dt &lt; 0</span>, so the population keeps falling. Between the roots, <span class="chem">dP/dt &gt; 0</span>.
        "小さい方の解より下では <span class=\"chem\">dP/dt &lt; 0</span> なので、個体数は減り続けます。2 つの解の間では <span class=\"chem\">dP/dt &gt; 0</span> です。",
      ],
      // EN: <p><strong>Decode:</strong> “critical starting population” is the boundary between falling and rising populations, that is, an equilibrium where <span class="chem">dP/dt = 0</span>.</p><p><span class="chem">P^2 - 1000P + 120000 = 0 => P = 139.44…</span> or <span class="chem">P = 860.55…</span>. <span class="chem">dP/dt</span> is a downward parabola in <span class="chem">P</span>, so <span class="chem">dP/dt &lt; 0</span> for <span class="chem">P &lt; 139.4</span> (decline to extinction) and <span class="chem">dP/dt &gt; 0</span> for <span class="chem">139.4 &lt; P &lt; 860.6</span> (growth towards 860.6). So <span class="chem">P_c ≈ 139</span>.</p>
      solution: "<p><strong>解読：</strong>「臨界的な初期個体数」とは、減少する個体群と増加する個体群の境目、すなわち <span class=\"chem\">dP/dt = 0</span> となる平衡点のことです。</p><p><span class=\"chem\">P^2 - 1000P + 120000 = 0 => P = 139.44…</span> または <span class=\"chem\">P = 860.55…</span>。<span class=\"chem\">dP/dt</span> は <span class=\"chem\">P</span> について上に凸の放物線なので、<span class=\"chem\">P &lt; 139.4</span> では <span class=\"chem\">dP/dt &lt; 0</span>（減少して絶滅）、<span class=\"chem\">139.4 &lt; P &lt; 860.6</span> では <span class=\"chem\">dP/dt &gt; 0</span>（860.6 に向かって増加）。よって <span class=\"chem\">P_c ≈ 139</span> です。</p>",
    },

    // ── t5-4-q041 · numeric · exam · AHL · AHL 5.19 · 5 marks
    "t5-4-q041": {
      // EN: <p>Use the first three non-zero terms of the Maclaurin series for <span class="chem">sin x</span> to find a polynomial approximation to <span class="chem">(sin x)/x</span>. Hence estimate <span class="chem">int_0^2 (sin x)/x dx</span>, and find the percentage error of this estimate compared with the value given by your GDC. Give the percentage error correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">sin x</span> のマクローリン級数の 0 でない最初の三つの項を用いて、<span class=\"chem\">(sin x)/x</span> の多項式による近似を求めなさい (Find)。これを用いて (Hence)、<span class=\"chem\">int_0^2 (sin x)/x dx</span> を推定し、GDC による値と比べたこの推定値の百分率誤差を求めなさい。百分率誤差は有効数字 3 桁で答えなさい。</p>",
      hints: [
        // EN: Divide <span class="chem">x - x^3/6 + x^5/120</span> by <span class="chem">x</span>: <span class="chem">(sin x)/x ≈ 1 - x^2/6 + x^4/120</span>.
        "<span class=\"chem\">x - x^3/6 + x^5/120</span> を <span class=\"chem\">x</span> で割ります：<span class=\"chem\">(sin x)/x ≈ 1 - x^2/6 + x^4/120</span>。",
        // EN: Integrate from <span class="chem">0</span> to <span class="chem">2</span>: <span class="chem">[x - x^3/18 + x^5/600]_0^2</span>.
        "<span class=\"chem\">0</span> から <span class=\"chem\">2</span> まで積分します：<span class=\"chem\">[x - x^3/18 + x^5/600]_0^2</span>。",
        // EN: Find the integral of <span class="chem">(sin x)/x</span> with the GDC, then use <span class="chem">|approx - exact| / exact × 100</span>.
        "GDC で <span class=\"chem\">(sin x)/x</span> の積分を求め、<span class=\"chem\">|approx - exact| / exact × 100</span> を使います。",
      ],
      // EN: <p><span class="chem">int_0^2 (1 - x^2/6 + x^4/120) dx = 2 - 8/18 + 32/600 = 1.608889</span>. GDC: <span class="chem">int_0^2 (sin x)/x dx = 1.605413</span>. Percentage error <span class="chem">= 0.003476/1.605413 × 100 ≈ 0.217%</span>.</p>
      solution: "<p><span class=\"chem\">int_0^2 (1 - x^2/6 + x^4/120) dx = 2 - 8/18 + 32/600 = 1.608889</span>。GDC：<span class=\"chem\">int_0^2 (sin x)/x dx = 1.605413</span>。百分率誤差 <span class=\"chem\">= 0.003476/1.605413 × 100 ≈ 0.217%</span>。</p>",
    },

    // ── t5-4-q042 · numeric · foundation · AHL · AHL 5.18 · 3 marks
    "t5-4-q042": {
      // EN: <p>The function <span class="chem">y(x)</span> satisfies <span class="chem">dy/dx = xy</span> with <span class="chem">y(1) = 2</span>. Use Euler’s method with step size <span class="chem">h = 0.5</span> to find an estimate for <span class="chem">y(2)</span>.</p>
      stem: "<p>関数 <span class=\"chem\">y(x)</span> は <span class=\"chem\">y(1) = 2</span> のもとで <span class=\"chem\">dy/dx = xy</span> を満たす。刻み幅 <span class=\"chem\">h = 0.5</span> のオイラー法を用いて、<span class=\"chem\">y(2)</span> の推定値を求めなさい (Find)。</p>",
      hints: [
        // EN: Two steps of <span class="chem">0.5</span> take you from <span class="chem">x = 1</span> to <span class="chem">x = 2</span>. Use <span class="chem">y_{n+1} = y_n + 0.5 x_n y_n</span>.
        "<span class=\"chem\">0.5</span> の二つのステップで <span class=\"chem\">x = 1</span> から <span class=\"chem\">x = 2</span> まで進みます。<span class=\"chem\">y_{n+1} = y_n + 0.5 x_n y_n</span> を使います。",
        // EN: First step: <span class="chem">y_1 = 2 + 0.5(1)(2) = 3</span> at <span class="chem">x_1 = 1.5</span>.
        "最初のステップ：<span class=\"chem\">x_1 = 1.5</span> で <span class=\"chem\">y_1 = 2 + 0.5(1)(2) = 3</span>。",
      ],
      // EN: <p><span class="chem">y_1 = 2 + 0.5(1)(2) = 3</span> at <span class="chem">x = 1.5</span>. <span class="chem">y_2 = 3 + 0.5(1.5)(3) = 3 + 2.25 = 5.25</span> at <span class="chem">x = 2</span>. So <span class="chem">y(2) ≈ 5.25</span>.</p>
      solution: "<p><span class=\"chem\">x = 1.5</span> で <span class=\"chem\">y_1 = 2 + 0.5(1)(2) = 3</span>。<span class=\"chem\">x = 2</span> で <span class=\"chem\">y_2 = 3 + 0.5(1.5)(3) = 3 + 2.25 = 5.25</span>。よって <span class=\"chem\">y(2) ≈ 5.25</span> です。</p>",
    },

    // ── t5-4-q043 · numeric · foundation · AHL · AHL 5.19 · 2 marks
    "t5-4-q043": {
      // EN: <p>Find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series for <span class="chem">cos(3x)</span>.</p>
      stem: "<p><span class=\"chem\">cos(3x)</span> のマクローリン級数における <span class=\"chem\">x^4</span> の係数の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Substitute <span class="chem">u = 3x</span> into <span class="chem">cos u = 1 - u^2/2! + u^4/4! - …</span>.
        "<span class=\"chem\">u = 3x</span> を <span class=\"chem\">cos u = 1 - u^2/2! + u^4/4! - …</span> に代入します。",
        // EN: The <span class="chem">x^4</span> term is <span class="chem">(3x)^4/4!</span>. Simplify the fraction.
        "<span class=\"chem\">x^4</span> の項は <span class=\"chem\">(3x)^4/4!</span> です。分数を簡単にします。",
      ],
      // EN: <p><span class="chem">(3x)^4/4! = 81x^4/24 = (27/8)x^4</span>, so the coefficient is <span class="chem">27/8</span>.</p>
      solution: "<p><span class=\"chem\">(3x)^4/4! = 81x^4/24 = (27/8)x^4</span> なので、係数は <span class=\"chem\">27/8</span> です。</p>",
    },

    // ── t5-4-q044 · short · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q044": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx = e^{x + y}</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Show that <span class="chem">y = -ln(2 - e^x)</span>. <strong>[4 marks]</strong></p><p>(b) State the largest interval containing <span class="chem">x = 0</span> on which this solution is defined, and justify your answer. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">y(0) = 0</span> を満たす微分方程式 <span class=\"chem\">dy/dx = e^{x + y}</span> を考える。</p><p>(a) <span class=\"chem\">y = -ln(2 - e^x)</span> であることを示しなさい (Show that)。<strong>[4 marks]</strong></p><p>(b) <span class=\"chem\">x = 0</span> を含み、この解が定義される最大の区間を述べ (State)、その理由を説明しなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Use the index law <span class="chem">e^{x + y} = e^x × e^y</span> to separate the variables.
        "指数法則 <span class=\"chem\">e^{x + y} = e^x × e^y</span> を使って変数を分離します。",
        // EN: Remember <span class="chem">int e^{-y} dy = -e^{-y}</span>.
        "<span class=\"chem\">int e^{-y} dy = -e^{-y}</span> を思い出しましょう。",
      ],
      // EN: <p>(a) <span class="chem">e^{x + y} = e^x e^y</span>, so <span class="chem">int e^{-y} dy = int e^x dx => -e^{-y} = e^x + C</span>. At <span class="chem">(0, 0)</span>: <span class="chem">-1 = 1 + C => C = -2</span>. So <span class="chem">e^{-y} = 2 - e^x</span>, and <span class="chem">-y = ln(2 - e^x)</span>, giving <span class="chem">y = -ln(2 - e^x)</span>.</p><p>(b) The logarithm needs <span class="chem">2 - e^x &gt; 0</span>, that is <span class="chem">e^x &lt; 2</span>, so <span class="chem">x &lt; ln 2</span>. The interval is <span class="chem">-inf &lt; x &lt; ln 2</span> (as <span class="chem">x -> ln 2</span>, <span class="chem">y -> inf</span>).</p>
      answer: "<p>(a) <span class=\"chem\">e^{x + y} = e^x e^y</span> なので <span class=\"chem\">int e^{-y} dy = int e^x dx => -e^{-y} = e^x + C</span>。<span class=\"chem\">(0, 0)</span> で <span class=\"chem\">-1 = 1 + C => C = -2</span>。よって <span class=\"chem\">e^{-y} = 2 - e^x</span> であり、<span class=\"chem\">-y = ln(2 - e^x)</span> なので <span class=\"chem\">y = -ln(2 - e^x)</span>。</p><p>(b) 対数には <span class=\"chem\">2 - e^x &gt; 0</span>、すなわち <span class=\"chem\">e^x &lt; 2</span> が必要なので <span class=\"chem\">x &lt; ln 2</span>。区間は <span class=\"chem\">-inf &lt; x &lt; ln 2</span>（<span class=\"chem\">x -> ln 2</span> のとき <span class=\"chem\">y -> inf</span>）。</p>",
      markscheme: [
        // EN: M1: writes <span class="chem">e^{x + y} = e^x e^y</span> and separates: <span class="chem">int e^{-y} dy = int e^x dx</span>.
        "M1：<span class=\"chem\">e^{x + y} = e^x e^y</span> と書いて変数を分離している：<span class=\"chem\">int e^{-y} dy = int e^x dx</span>。",
        // EN: A1: <span class="chem">-e^{-y} = e^x + C</span>.
        "A1：<span class=\"chem\">-e^{-y} = e^x + C</span>。",
        // EN: M1: uses <span class="chem">y(0) = 0</span> to find <span class="chem">C = -2</span>.
        "M1：<span class=\"chem\">y(0) = 0</span> を用いて <span class=\"chem\">C = -2</span> を求めている。",
        // EN: A1: <span class="chem">e^{-y} = 2 - e^x</span>. AG: <span class="chem">y = -ln(2 - e^x)</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">e^{-y} = 2 - e^x</span>。AG：<span class=\"chem\">y = -ln(2 - e^x)</span>；与えられた式そのものには点を与えない。",
        // EN: R1: requires <span class="chem">2 - e^x &gt; 0</span>.
        "R1：<span class=\"chem\">2 - e^x &gt; 0</span> が必要である。",
        // EN: A1: <span class="chem">x &lt; ln 2</span>.
        "A1：<span class=\"chem\">x &lt; ln 2</span>。",
      ],
    },

    // ── t5-4-q045 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q045": {
      // EN: <p>The function <span class="chem">y(x)</span>, where <span class="chem">x &gt; 1/2</span> and <span class="chem">y &gt; 0</span>, satisfies <span class="chem">dy/dx = (x^2 + 3y^2)/(2xy)</span> and <span class="chem">y(1) = 1</span>. Find the exact value of <span class="chem">y(2)</span>.</p>
      stem: "<p>関数 <span class=\"chem\">y(x)</span>（ただし <span class=\"chem\">x &gt; 1/2</span>、<span class=\"chem\">y &gt; 0</span>）は <span class=\"chem\">dy/dx = (x^2 + 3y^2)/(2xy)</span> および <span class=\"chem\">y(1) = 1</span> を満たす。<span class=\"chem\">y(2)</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Divide the top and bottom by <span class="chem">x^2</span>: the right-hand side depends only on <span class="chem">v = y/x</span>. Substitute <span class="chem">y = vx</span>.
        "分子と分母を <span class=\"chem\">x^2</span> で割ると、右辺は <span class=\"chem\">v = y/x</span> だけで決まります。<span class=\"chem\">y = vx</span> とおきます。",
        // EN: You should get <span class="chem">x(dv/dx) = (1 + v^2)/(2v)</span>.
        "<span class=\"chem\">x(dv/dx) = (1 + v^2)/(2v)</span> が得られるはずです。",
        // EN: Separate and integrate: <span class="chem">int 2v/(1 + v^2) dv = int (1/x) dx</span>, so <span class="chem">1 + v^2 = Ax</span>.
        "変数を分離して積分します：<span class=\"chem\">int 2v/(1 + v^2) dv = int (1/x) dx</span> なので <span class=\"chem\">1 + v^2 = Ax</span>。",
      ],
      // EN: <p><span class="chem">y = vx</span>: <span class="chem">v + x(dv/dx) = (1 + 3v^2)/(2v) => x(dv/dx) = (1 + 3v^2 - 2v^2)/(2v) = (1 + v^2)/(2v)</span>.</p><p><span class="chem">int 2v/(1 + v^2) dv = int (1/x) dx => ln(1 + v^2) = ln x + C => 1 + v^2 = Ax</span>. At <span class="chem">(1, 1)</span>: <span class="chem">A = 2</span>. So <span class="chem">y^2 = x^2(2x - 1)</span>.</p><p><span class="chem">y(2) = sqrt(4 × 3) = 2 sqrt(3)</span>.</p>
      solution: "<p><span class=\"chem\">y = vx</span>：<span class=\"chem\">v + x(dv/dx) = (1 + 3v^2)/(2v) => x(dv/dx) = (1 + 3v^2 - 2v^2)/(2v) = (1 + v^2)/(2v)</span>。</p><p><span class=\"chem\">int 2v/(1 + v^2) dv = int (1/x) dx => ln(1 + v^2) = ln x + C => 1 + v^2 = Ax</span>。<span class=\"chem\">(1, 1)</span> で <span class=\"chem\">A = 2</span>。よって <span class=\"chem\">y^2 = x^2(2x - 1)</span>。</p><p><span class=\"chem\">y(2) = sqrt(4 × 3) = 2 sqrt(3)</span>。</p>",
    },

    // ── t5-4-q046 · numeric · exam · AHL · AHL 5.18 · 6 marks
    "t5-4-q046": {
      // EN: <p>The function <span class="chem">y(x)</span>, for <span class="chem">-pi/2 &lt; x &lt; pi/2</span>, satisfies <span class="chem">dy/dx + y tan x = cos^2 x</span> and <span class="chem">y(0) = 2</span>. Find the exact value of <span class="chem">y(pi/3)</span>.</p>
      stem: "<p>関数 <span class=\"chem\">y(x)</span>（<span class=\"chem\">-pi/2 &lt; x &lt; pi/2</span>）は <span class=\"chem\">dy/dx + y tan x = cos^2 x</span> および <span class=\"chem\">y(0) = 2</span> を満たす。<span class=\"chem\">y(pi/3)</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: The integrating factor is <span class="chem">e^{int tan x dx} = e^{-ln(cos x)}</span>. Simplify it.
        "積分因子は <span class=\"chem\">e^{int tan x dx} = e^{-ln(cos x)}</span> です。これを簡単にします。",
        // EN: With <span class="chem">I(x) = sec x</span>: <span class="chem">d/dx(y sec x) = cos^2 x sec x = cos x</span>.
        "<span class=\"chem\">I(x) = sec x</span> を用いると：<span class=\"chem\">d/dx(y sec x) = cos^2 x sec x = cos x</span>。",
        // EN: So <span class="chem">y sec x = sin x + C</span>. Find <span class="chem">C</span>, then substitute <span class="chem">x = pi/3</span>.
        "よって <span class=\"chem\">y sec x = sin x + C</span>。<span class=\"chem\">C</span> を求めてから <span class=\"chem\">x = pi/3</span> を代入します。",
      ],
      // EN: <p><span class="chem">I(x) = e^{int tan x dx} = e^{-ln(cos x)} = sec x</span> (since <span class="chem">cos x &gt; 0</span>). Then <span class="chem">d/dx(y sec x) = cos x => y sec x = sin x + C</span>. At <span class="chem">x = 0</span>: <span class="chem">2 = C</span>. So <span class="chem">y = sin x cos x + 2 cos x</span>.</p><p><span class="chem">y(pi/3) = (sqrt(3)/2)(1/2) + 2(1/2) = 1 + sqrt(3)/4</span>.</p>
      solution: "<p><span class=\"chem\">I(x) = e^{int tan x dx} = e^{-ln(cos x)} = sec x</span>（<span class=\"chem\">cos x &gt; 0</span> なので）。すると <span class=\"chem\">d/dx(y sec x) = cos x => y sec x = sin x + C</span>。<span class=\"chem\">x = 0</span> で <span class=\"chem\">2 = C</span>。よって <span class=\"chem\">y = sin x cos x + 2 cos x</span>。</p><p><span class=\"chem\">y(pi/3) = (sqrt(3)/2)(1/2) + 2(1/2) = 1 + sqrt(3)/4</span>。</p>",
    },

    // ── t5-4-q047 · short · exam · AHL · AHL 5.13, 5.19 · 6 marks
    "t5-4-q047": {
      // EN: <p>(a) By substituting the Maclaurin series for <span class="chem">sin x</span> into the series for <span class="chem">ln(1 + u)</span>, show that the Maclaurin series for <span class="chem">ln(1 + sin x)</span> up to and including the term in <span class="chem">x^3</span> is <span class="chem">x - x^2/2 + x^3/6</span>. <strong>[4 marks]</strong></p><p>(b) Hence find <span class="chem">lim_{x->0} (ln(1 + sin x) - x)/x^2</span>. <strong>[2 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">sin x</span> のマクローリン級数を <span class=\"chem\">ln(1 + u)</span> の級数に代入することにより、<span class=\"chem\">ln(1 + sin x)</span> のマクローリン級数の <span class=\"chem\">x^3</span> の項までが <span class=\"chem\">x - x^2/2 + x^3/6</span> であることを示しなさい (Show that)。<strong>[4 marks]</strong></p><p>(b) これを用いて (Hence)、<span class=\"chem\">lim_{x->0} (ln(1 + sin x) - x)/x^2</span> を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Only keep terms up to <span class="chem">x^3</span>: <span class="chem">sin^2 x = x^2 - (1/3)x^4 + …</span>, so its <span class="chem">x^3</span> coefficient is 0.
        "<span class=\"chem\">x^3</span> までの項だけを残します：<span class=\"chem\">sin^2 x = x^2 - (1/3)x^4 + …</span> なので、その <span class=\"chem\">x^3</span> の係数は 0 です。",
        // EN: In (b), the <span class="chem">x</span> terms cancel; what is left starts with <span class="chem">-x^2/2</span>.
        "(b) では <span class=\"chem\">x</span> の項が消え、残りは <span class=\"chem\">-x^2/2</span> から始まります。",
      ],
      // EN: <p>(a) With <span class="chem">u = sin x = x - x^3/6 + …</span>: <span class="chem">u^2 = x^2 + …</span> and <span class="chem">u^3 = x^3 + …</span> (up to <span class="chem">x^3</span>). So <span class="chem">ln(1 + sin x) = u - u^2/2 + u^3/3 - … = (x - x^3/6) - x^2/2 + x^3/3 + … = x - x^2/2 + (1/3 - 1/6)x^3 = x - x^2/2 + x^3/6</span>.</p><p>(b) <span class="chem">(ln(1 + sin x) - x)/x^2 = (-x^2/2 + x^3/6 + …)/x^2 = -1/2 + x/6 + … -> -1/2</span>.</p>
      answer: "<p>(a) <span class=\"chem\">u = sin x = x - x^3/6 + …</span> とすると：<span class=\"chem\">u^2 = x^2 + …</span> および <span class=\"chem\">u^3 = x^3 + …</span>（<span class=\"chem\">x^3</span> まで）。よって <span class=\"chem\">ln(1 + sin x) = u - u^2/2 + u^3/3 - … = (x - x^3/6) - x^2/2 + x^3/3 + … = x - x^2/2 + (1/3 - 1/6)x^3 = x - x^2/2 + x^3/6</span>。</p><p>(b) <span class=\"chem\">(ln(1 + sin x) - x)/x^2 = (-x^2/2 + x^3/6 + …)/x^2 = -1/2 + x/6 + … -> -1/2</span>。</p>",
      markscheme: [
        // EN: M1: substitutes <span class="chem">u = sin x</span> into <span class="chem">u - u^2/2 + u^3/3</span>.
        "M1：<span class=\"chem\">u = sin x</span> を <span class=\"chem\">u - u^2/2 + u^3/3</span> に代入している。",
        // EN: A1: <span class="chem">u^2 = x^2 + …</span> (no <span class="chem">x^3</span> term) and <span class="chem">u^3 = x^3 + …</span>.
        "A1：<span class=\"chem\">u^2 = x^2 + …</span>（<span class=\"chem\">x^3</span> の項はない）および <span class=\"chem\">u^3 = x^3 + …</span>。",
        // EN: A1: <span class="chem">x^3</span> terms <span class="chem">-1/6 + 1/3</span> collected.
        "A1：<span class=\"chem\">x^3</span> の項 <span class=\"chem\">-1/6 + 1/3</span> をまとめている。",
        // EN: A1: collects <span class="chem">x - x^2/2 + (1/6)x^3</span> correctly. AG: the given series; the given line itself earns no mark.
        "A1：<span class=\"chem\">x - x^2/2 + (1/6)x^3</span> を正しくまとめている。AG：与えられた級数；与えられた式そのものには点を与えない。",
        // EN: M1: substitutes the series and divides by <span class="chem">x^2</span>.
        "M1：級数を代入して <span class=\"chem\">x^2</span> で割っている。",
        // EN: A1: <span class="chem">-1/2</span>.
        "A1：<span class=\"chem\">-1/2</span>。",
      ],
    },

    // ── t5-4-q048 · short · exam · AHL · AHL 5.19 · 7 marks
    "t5-4-q048": {
      // EN: <p>(a) Use the series for <span class="chem">(1 + x)^p</span> to write down the Maclaurin series for <span class="chem">(1 - x)^{-1}</span>, and state the values of <span class="chem">x</span> for which it is valid. <strong>[2 marks]</strong></p><p>(b) By differentiating your series term by term, show that <span class="chem">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span>. <strong>[2 marks]</strong></p><p>(c) Hence find the exact value of <span class="chem">sum_{n=1}^{inf} n/3^n</span>. <strong>[3 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">(1 + x)^p</span> の級数を用いて <span class=\"chem\">(1 - x)^{-1}</span> のマクローリン級数を書き (Write down)、それが成り立つ <span class=\"chem\">x</span> の値の範囲を述べなさい (State)。<strong>[2 marks]</strong></p><p>(b) 級数を項別に微分することにより、<span class=\"chem\">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong></p><p>(c) これを用いて (Hence)、<span class=\"chem\">sum_{n=1}^{inf} n/3^n</span> の正確な値を求めなさい。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: (c) looks like a series question from Topic 1, but it is the differentiated series in (b) evaluated at a particular <span class="chem">x</span>.
        "解読：(c) は Topic 1 の級数の問題のように見えますが、実は (b) で微分した級数に特定の <span class=\"chem\">x</span> を代入したものです。",
        // EN: In <span class="chem">(1 + u)^p = 1 + pu + p(p - 1)u^2/2! + …</span>, put <span class="chem">p = -1</span> and <span class="chem">u = -x</span>.
        "<span class=\"chem\">(1 + u)^p = 1 + pu + p(p - 1)u^2/2! + …</span> に <span class=\"chem\">p = -1</span>、<span class=\"chem\">u = -x</span> を代入します。",
        // EN: Take out a factor <span class="chem">1/3</span>: <span class="chem">n/3^n = (1/3) × n (1/3)^{n - 1}</span>.
        "因数 <span class=\"chem\">1/3</span> をくくり出します：<span class=\"chem\">n/3^n = (1/3) × n (1/3)^{n - 1}</span>。",
      ],
      // EN: <p>(a) <span class="chem">p = -1</span>, <span class="chem">x</span> replaced by <span class="chem">-x</span>: <span class="chem">(1 - x)^{-1} = 1 + x + x^2 + x^3 + … + x^n + …</span>, valid for <span class="chem">|x| &lt; 1</span>.</p><p>(b) <span class="chem">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span>, and differentiating each term <span class="chem">x^n</span> gives <span class="chem">n x^{n - 1}</span>: <span class="chem">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span>.</p><p>(c) <span class="chem">sum_{n=1}^{inf} n/3^n = (1/3) sum_{n=1}^{inf} n (1/3)^{n - 1} = (1/3)(1 - 1/3)^{-2} = (1/3)(9/4) = 3/4</span>, using <span class="chem">x = 1/3</span>, which satisfies <span class="chem">|x| &lt; 1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">p = -1</span>、<span class=\"chem\">x</span> を <span class=\"chem\">-x</span> で置き換えて：<span class=\"chem\">(1 - x)^{-1} = 1 + x + x^2 + x^3 + … + x^n + …</span>。<span class=\"chem\">|x| &lt; 1</span> で成り立つ。</p><p>(b) <span class=\"chem\">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span> であり、各項 <span class=\"chem\">x^n</span> を微分すると <span class=\"chem\">n x^{n - 1}</span> となる：<span class=\"chem\">(1 - x)^{-2} = 1 + 2x + 3x^2 + … + n x^{n - 1} + …</span>。</p><p>(c) <span class=\"chem\">sum_{n=1}^{inf} n/3^n = (1/3) sum_{n=1}^{inf} n (1/3)^{n - 1} = (1/3)(1 - 1/3)^{-2} = (1/3)(9/4) = 3/4</span>。ここで <span class=\"chem\">x = 1/3</span> を用いた。これは <span class=\"chem\">|x| &lt; 1</span> を満たす。</p>",
      markscheme: [
        // EN: A1: <span class="chem">1 + x + x^2 + x^3 + …</span>.
        "A1：<span class=\"chem\">1 + x + x^2 + x^3 + …</span>。",
        // EN: A1: valid for <span class="chem">|x| &lt; 1</span>.
        "A1：<span class=\"chem\">|x| &lt; 1</span> で成り立つ。",
        // EN: M1: differentiates the left side: <span class="chem">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span>.
        "M1：左辺を微分している：<span class=\"chem\">d/dx (1 - x)^{-1} = (1 - x)^{-2}</span>。",
        // EN: A1: differentiates each term <span class="chem">x^n -> n x^{n - 1}</span>. AG: the given series; the given line itself earns no mark.
        "A1：各項 <span class=\"chem\">x^n -> n x^{n - 1}</span> を微分している。AG：与えられた級数；与えられた式そのものには点を与えない。",
        // EN: M1: writes <span class="chem">n/3^n = (1/3) n (1/3)^{n - 1}</span>.
        "M1：<span class=\"chem\">n/3^n = (1/3) n (1/3)^{n - 1}</span> と書いている。",
        // EN: M1: substitutes <span class="chem">x = 1/3</span> into <span class="chem">(1 - x)^{-2}</span> (with <span class="chem">|1/3| &lt; 1</span>).
        "M1：<span class=\"chem\">x = 1/3</span> を <span class=\"chem\">(1 - x)^{-2}</span> に代入している（<span class=\"chem\">|1/3| &lt; 1</span>）。",
        // EN: A1: <span class="chem">3/4</span>.
        "A1：<span class=\"chem\">3/4</span>。",
      ],
    },

    // ── t5-4-q049 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q049": {
      // EN: <p>Let <span class="chem">F(x) = int_0^x ln(1 + t)/t dt</span>. By integrating a series term by term, find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series for <span class="chem">F(x)</span>.</p>
      stem: "<p><span class=\"chem\">F(x) = int_0^x ln(1 + t)/t dt</span> とする。級数を項別に積分することにより、<span class=\"chem\">F(x)</span> のマクローリン級数における <span class=\"chem\">x^4</span> の係数の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Divide the series <span class="chem">ln(1 + t) = t - t^2/2 + t^3/3 - t^4/4 + …</span> by <span class="chem">t</span>.
        "級数 <span class=\"chem\">ln(1 + t) = t - t^2/2 + t^3/3 - t^4/4 + …</span> を <span class=\"chem\">t</span> で割ります。",
        // EN: Then integrate each term from <span class="chem">0</span> to <span class="chem">x</span>. The <span class="chem">x^4</span> term comes from the <span class="chem">t^3</span> term.
        "次に各項を <span class=\"chem\">0</span> から <span class=\"chem\">x</span> まで積分します。<span class=\"chem\">x^4</span> の項は <span class=\"chem\">t^3</span> の項から生じます。",
      ],
      // EN: <p><span class="chem">ln(1 + t)/t = 1 - t/2 + t^2/3 - t^3/4 + …</span>. Integrating from 0 to <span class="chem">x</span>: <span class="chem">F(x) = x - x^2/4 + x^3/9 - x^4/16 + …</span>. The coefficient of <span class="chem">x^4</span> is <span class="chem">-1/16</span>.</p>
      solution: "<p><span class=\"chem\">ln(1 + t)/t = 1 - t/2 + t^2/3 - t^3/4 + …</span>。0 から <span class=\"chem\">x</span> まで積分すると：<span class=\"chem\">F(x) = x - x^2/4 + x^3/9 - x^4/16 + …</span>。<span class=\"chem\">x^4</span> の係数は <span class=\"chem\">-1/16</span> です。</p>",
    },

    // ── t5-4-q050 · numeric · challenge · AHL · AHL 5.19 · 6 marks
    "t5-4-q050": {
      // EN: <p>A curve passes through the origin. At every point <span class="chem">(x, y)</span> on the curve, the gradient is equal to the sum of the <span class="chem">x</span>-coordinate and the sine of the <span class="chem">y</span>-coordinate. Find the exact coefficient of <span class="chem">x^4</span> in the Maclaurin series of the curve’s equation <span class="chem">y = f(x)</span>.</p>
      stem: "<p>ある曲線は原点を通る。曲線上のすべての点 <span class=\"chem\">(x, y)</span> において、傾きは <span class=\"chem\">x</span> 座標と <span class=\"chem\">y</span> 座標の正弦との和に等しい。曲線の方程式 <span class=\"chem\">y = f(x)</span> のマクローリン級数における <span class=\"chem\">x^4</span> の係数の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the words describe the DE <span class="chem">dy/dx = x + sin y</span> with <span class="chem">y(0) = 0</span>. You need <span class="chem">f^{(4)}(0)/4!</span>, found by repeated implicit differentiation.
        "解読：文章は <span class=\"chem\">y(0) = 0</span> のもとでの微分方程式 <span class=\"chem\">dy/dx = x + sin y</span> を表しています。<span class=\"chem\">f^{(4)}(0)/4!</span> が必要で、これは繰り返し陰関数微分して求めます。",
        // EN: <span class="chem">y'(0) = 0 + sin 0 = 0</span>. Differentiate: <span class="chem">y'' = 1 + cos y × y'</span>, so <span class="chem">y''(0) = 1</span>.
        "<span class=\"chem\">y'(0) = 0 + sin 0 = 0</span>。微分すると <span class=\"chem\">y'' = 1 + cos y × y'</span> なので、<span class=\"chem\">y''(0) = 1</span>。",
        // EN: Next, <span class="chem">y''' = -sin y (y')^2 + cos y × y''</span>. Differentiate once more, and at <span class="chem">x = 0</span> use <span class="chem">y = 0, y' = 0</span>: most terms vanish.
        "次に <span class=\"chem\">y''' = -sin y (y')^2 + cos y × y''</span>。もう一度微分し、<span class=\"chem\">x = 0</span> で <span class=\"chem\">y = 0, y' = 0</span> を使うと、ほとんどの項が消えます。",
      ],
      // EN: <p><strong>Decode:</strong> “gradient equals <span class="chem">x</span> plus sine of <span class="chem">y</span>” is <span class="chem">dy/dx = x + sin y</span>; “passes through the origin” is <span class="chem">y(0) = 0</span>. Build the series from derivatives at 0.</p><p><span class="chem">y'(0) = 0</span>. <span class="chem">y'' = 1 + cos y y' => y''(0) = 1</span>. <span class="chem">y''' = -sin y (y')^2 + cos y y'' => y'''(0) = 1</span>.</p><p><span class="chem">y^{(4)} = -cos y (y')^3 - 3 sin y y' y'' + cos y y'''</span>, so <span class="chem">y^{(4)}(0) = 0 - 0 + 1 = 1</span>.</p><p>The coefficient of <span class="chem">x^4</span> is <span class="chem">1/4! = 1/24</span>.</p>
      solution: "<p><strong>解読：</strong>「傾きは <span class=\"chem\">x</span> と <span class=\"chem\">y</span> の正弦との和に等しい」は <span class=\"chem\">dy/dx = x + sin y</span>、「原点を通る」は <span class=\"chem\">y(0) = 0</span> です。0 における導関数の値から級数を作ります。</p><p><span class=\"chem\">y'(0) = 0</span>。<span class=\"chem\">y'' = 1 + cos y y' => y''(0) = 1</span>。<span class=\"chem\">y''' = -sin y (y')^2 + cos y y'' => y'''(0) = 1</span>。</p><p><span class=\"chem\">y^{(4)} = -cos y (y')^3 - 3 sin y y' y'' + cos y y'''</span> なので <span class=\"chem\">y^{(4)}(0) = 0 - 0 + 1 = 1</span>。</p><p><span class=\"chem\">x^4</span> の係数は <span class=\"chem\">1/4! = 1/24</span> です。</p>",
    },

    // ── t5-4-q051 · short · challenge · AHL · AHL 5.18 · 9 marks
    "t5-4-q051": {
      // EN: <p>A curve in the region <span class="chem">x &gt; 0</span> passes through <span class="chem">(1, 0)</span>. At each point <span class="chem">(x, y)</span> of the curve with <span class="chem">x != y</span>, its gradient is <span class="chem">(x + y)/(x - y)</span>.</p><p>(a) Use the substitution <span class="chem">y = vx</span> to show that <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>. <strong>[3 marks]</strong></p><p>(b) Hence show that the curve has equation <span class="chem">arctan(y/x) = ln sqrt(x^2 + y^2)</span>. <strong>[4 marks]</strong></p><p>(c) The curve meets the line <span class="chem">y = x/sqrt(3)</span> at the point <span class="chem">P</span> in the first quadrant. Find the exact distance from the origin <span class="chem">O</span> to <span class="chem">P</span>. <strong>[2 marks]</strong></p>
      stem: "<p>領域 <span class=\"chem\">x &gt; 0</span> にある曲線が <span class=\"chem\">(1, 0)</span> を通る。<span class=\"chem\">x != y</span> である曲線上の各点 <span class=\"chem\">(x, y)</span> において、その傾きは <span class=\"chem\">(x + y)/(x - y)</span> である。</p><p>(a) 置換 <span class=\"chem\">y = vx</span> を用いて、<span class=\"chem\">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span> であることを示しなさい (Show that)。<strong>[3 marks]</strong></p><p>(b) これを用いて (Hence)、曲線の方程式が <span class=\"chem\">arctan(y/x) = ln sqrt(x^2 + y^2)</span> であることを示しなさい。<strong>[4 marks]</strong></p><p>(c) 曲線は直線 <span class=\"chem\">y = x/sqrt(3)</span> と第 1 象限の点 <span class=\"chem\">P</span> で交わる。原点 <span class=\"chem\">O</span> から <span class=\"chem\">P</span> までの正確な距離を求めなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: divide the top and bottom of <span class="chem">(x + y)/(x - y)</span> by <span class="chem">x</span>: the DE is homogeneous, so use <span class="chem">y = vx</span>. In (c), notice what <span class="chem">arctan(y/x)</span> and <span class="chem">sqrt(x^2 + y^2)</span> mean geometrically.
        "解読：<span class=\"chem\">(x + y)/(x - y)</span> の分子と分母を <span class=\"chem\">x</span> で割ると、この微分方程式は同次形なので <span class=\"chem\">y = vx</span> を使います。(c) では、<span class=\"chem\">arctan(y/x)</span> と <span class=\"chem\">sqrt(x^2 + y^2)</span> が幾何的に何を意味するかに注目しましょう。",
        // EN: After substituting, subtract <span class="chem">v</span> from both sides and simplify over the common denominator <span class="chem">1 - v</span>.
        "代入したあと、両辺から <span class=\"chem\">v</span> を引き、共通の分母 <span class=\"chem\">1 - v</span> でまとめて簡単にします。",
        // EN: For <span class="chem">int v/(1 + v^2) dv</span>, the numerator is half the derivative of the denominator.
        "<span class=\"chem\">int v/(1 + v^2) dv</span> では、分子は分母の導関数の半分です。",
      ],
      // EN: <p><strong>Decode:</strong> the gradient is a function of <span class="chem">y/x</span>, so the DE is homogeneous. In (c), <span class="chem">arctan(y/x)</span> is the angle <span class="chem">OP</span> makes with the <span class="chem">x</span>-axis and <span class="chem">sqrt(x^2 + y^2)</span> is the distance <span class="chem">OP</span>.</p><p>(a) <span class="chem">v + x(dv/dx) = (1 + v)/(1 - v) => x(dv/dx) = (1 + v - v + v^2)/(1 - v) = (1 + v^2)/(1 - v)</span>, so <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>.</p><p>(b) <span class="chem">int 1/(1 + v^2) dv - int v/(1 + v^2) dv = arctan v - (1/2) ln(1 + v^2)</span>. So <span class="chem">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>. At <span class="chem">(1, 0)</span>, <span class="chem">v = 0</span>, so <span class="chem">C = 0</span>. Then <span class="chem">arctan(y/x) = ln x + (1/2) ln((x^2 + y^2)/x^2) = (1/2) ln(x^2 + y^2) = ln sqrt(x^2 + y^2)</span>.</p><p>(c) On <span class="chem">y = x/sqrt(3)</span>, <span class="chem">arctan(y/x) = arctan(1/sqrt(3)) = pi/6</span>. So <span class="chem">ln OP = pi/6</span> and <span class="chem">OP = e^{pi/6}</span>.</p>
      answer: "<p><strong>解読：</strong>傾きは <span class=\"chem\">y/x</span> の関数なので、この微分方程式は同次形である。(c) では、<span class=\"chem\">arctan(y/x)</span> は <span class=\"chem\">OP</span> が <span class=\"chem\">x</span> 軸となす角で、<span class=\"chem\">sqrt(x^2 + y^2)</span> は距離 <span class=\"chem\">OP</span> である。</p><p>(a) <span class=\"chem\">v + x(dv/dx) = (1 + v)/(1 - v) => x(dv/dx) = (1 + v - v + v^2)/(1 - v) = (1 + v^2)/(1 - v)</span> なので <span class=\"chem\">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>。</p><p>(b) <span class=\"chem\">int 1/(1 + v^2) dv - int v/(1 + v^2) dv = arctan v - (1/2) ln(1 + v^2)</span>。よって <span class=\"chem\">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>。<span class=\"chem\">(1, 0)</span> で <span class=\"chem\">v = 0</span> なので <span class=\"chem\">C = 0</span>。すると <span class=\"chem\">arctan(y/x) = ln x + (1/2) ln((x^2 + y^2)/x^2) = (1/2) ln(x^2 + y^2) = ln sqrt(x^2 + y^2)</span>。</p><p>(c) <span class=\"chem\">y = x/sqrt(3)</span> 上では <span class=\"chem\">arctan(y/x) = arctan(1/sqrt(3)) = pi/6</span>。よって <span class=\"chem\">ln OP = pi/6</span> および <span class=\"chem\">OP = e^{pi/6}</span>。</p>",
      markscheme: [
        // EN: M1: substitutes <span class="chem">y = vx</span>, <span class="chem">dy/dx = v + x(dv/dx)</span> and divides top and bottom by <span class="chem">x</span>.
        "M1：<span class=\"chem\">y = vx</span>、<span class=\"chem\">dy/dx = v + x(dv/dx)</span> を代入し、分子と分母を <span class=\"chem\">x</span> で割っている。",
        // EN: A1: <span class="chem">x(dv/dx) = (1 + v^2)/(1 - v)</span>.
        "A1：<span class=\"chem\">x(dv/dx) = (1 + v^2)/(1 - v)</span>。",
        // EN: A1: separates variables correctly. AG: <span class="chem">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>; the given line itself earns no mark.
        "A1：変数を正しく分離している。AG：<span class=\"chem\">int (1 - v)/(1 + v^2) dv = int (1/x) dx</span>；与えられた式そのものには点を与えない。",
        // EN: M1: splits into <span class="chem">1/(1 + v^2) - v/(1 + v^2)</span>.
        "M1：<span class=\"chem\">1/(1 + v^2) - v/(1 + v^2)</span> に分けている。",
        // EN: A1: <span class="chem">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>.
        "A1：<span class=\"chem\">arctan v - (1/2) ln(1 + v^2) = ln x + C</span>。",
        // EN: A1: <span class="chem">C = 0</span> from <span class="chem">(1, 0)</span>.
        "A1：<span class=\"chem\">(1, 0)</span> から <span class=\"chem\">C = 0</span>。",
        // EN: A1: combines the logarithms: <span class="chem">ln x + (1/2) ln(1 + y^2/x^2) = (1/2) ln(x^2 + y^2)</span>. AG: <span class="chem">arctan(y/x) = ln sqrt(x^2 + y^2)</span>; the given line itself earns no mark.
        "A1：対数をまとめている：<span class=\"chem\">ln x + (1/2) ln(1 + y^2/x^2) = (1/2) ln(x^2 + y^2)</span>。AG：<span class=\"chem\">arctan(y/x) = ln sqrt(x^2 + y^2)</span>；与えられた式そのものには点を与えない。",
        // EN: M1: uses <span class="chem">y/x = 1/sqrt(3)</span>, so <span class="chem">arctan(y/x) = pi/6</span>, and <span class="chem">OP = sqrt(x^2 + y^2)</span>.
        "M1：<span class=\"chem\">y/x = 1/sqrt(3)</span> を用いて <span class=\"chem\">arctan(y/x) = pi/6</span>、および <span class=\"chem\">OP = sqrt(x^2 + y^2)</span>。",
        // EN: A1: <span class="chem">OP = e^{pi/6}</span>.
        "A1：<span class=\"chem\">OP = e^{pi/6}</span>。",
      ],
    },

    // ── t5-4-q052 · numeric · challenge · AHL · AHL 5.18 · 6 marks
    "t5-4-q052": {
      // EN: <p>A function <span class="chem">f</span> satisfies <span class="chem">f(x) = 1 + int_0^x (f(t) + e^t) dt</span> for all <span class="chem">x ∈ ℝ</span>. Find the exact value of <span class="chem">f(1)</span>.</p>
      stem: "<p>関数 <span class=\"chem\">f</span> はすべての <span class=\"chem\">x ∈ ℝ</span> に対して <span class=\"chem\">f(x) = 1 + int_0^x (f(t) + e^t) dt</span> を満たす。<span class=\"chem\">f(1)</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is a differential equation in disguise. Differentiate both sides (fundamental theorem of calculus) to get a DE, and put <span class="chem">x = 0</span> to get the initial condition.
        "解読：これは形を変えた微分方程式です。両辺を微分して（微分積分学の基本定理）微分方程式を作り、<span class=\"chem\">x = 0</span> を代入して初期条件を得ます。",
        // EN: Differentiating gives <span class="chem">f'(x) = f(x) + e^x</span>; at <span class="chem">x = 0</span> the integral is zero, so <span class="chem">f(0) = 1</span>.
        "微分すると <span class=\"chem\">f'(x) = f(x) + e^x</span> です。<span class=\"chem\">x = 0</span> では積分は 0 なので、<span class=\"chem\">f(0) = 1</span> です。",
        // EN: Solve <span class="chem">dy/dx - y = e^x</span> with the integrating factor <span class="chem">e^{-x}</span>.
        "積分因子 <span class=\"chem\">e^{-x}</span> を用いて <span class=\"chem\">dy/dx - y = e^x</span> を解きます。",
      ],
      // EN: <p><strong>Decode:</strong> an equation with <span class="chem">f</span> inside an integral with variable upper limit becomes a DE after differentiating; the initial value comes from putting <span class="chem">x = 0</span>.</p><p><span class="chem">f'(x) = f(x) + e^x</span> and <span class="chem">f(0) = 1 + 0 = 1</span>. With <span class="chem">y = f(x)</span>: <span class="chem">dy/dx - y = e^x</span>, IF <span class="chem">e^{-x}</span>: <span class="chem">d/dx(y e^{-x}) = 1 => y e^{-x} = x + C</span>. <span class="chem">f(0) = 1 => C = 1</span>, so <span class="chem">f(x) = (x + 1)e^x</span>.</p><p><span class="chem">f(1) = 2e</span>.</p>
      solution: "<p><strong>解読：</strong>上端が変数である積分の中に <span class=\"chem\">f</span> を含む方程式は、微分すると微分方程式になります。初期値は <span class=\"chem\">x = 0</span> を代入して得られます。</p><p><span class=\"chem\">f'(x) = f(x) + e^x</span> および <span class=\"chem\">f(0) = 1 + 0 = 1</span>。<span class=\"chem\">y = f(x)</span> を用いると：<span class=\"chem\">dy/dx - y = e^x</span>、積分因子 <span class=\"chem\">e^{-x}</span>：<span class=\"chem\">d/dx(y e^{-x}) = 1 => y e^{-x} = x + C</span>。<span class=\"chem\">f(0) = 1 => C = 1</span> なので <span class=\"chem\">f(x) = (x + 1)e^x</span>。</p><p><span class=\"chem\">f(1) = 2e</span>。</p>",
    },

    // ── t5-4-q053 · numeric · challenge · AHL · AHL 5.13, 5.19 · 5 marks
    "t5-4-q053": {
      // EN: <p>Find the exact value of <span class="chem">lim_{x->inf} x^2 (1 - x sin(1/x))</span>.</p>
      stem: "<p><span class=\"chem\">lim_{x->inf} x^2 (1 - x sin(1/x))</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is a limit as <span class="chem">x -> inf</span>, but the substitution <span class="chem">u = 1/x</span> turns it into a limit as <span class="chem">u -> 0^+</span>, where Maclaurin series work.
        "解読：これは <span class=\"chem\">x -> inf</span> のときの極限ですが、置換 <span class=\"chem\">u = 1/x</span> によって <span class=\"chem\">u -> 0^+</span> のときの極限に変わり、そこではマクローリン級数が使えます。",
        // EN: With <span class="chem">u = 1/x</span>: <span class="chem">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2</span>.
        "<span class=\"chem\">u = 1/x</span> とすると：<span class=\"chem\">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2</span>。",
        // EN: Use <span class="chem">sin u = u - u^3/6 + u^5/120 - …</span>, so <span class="chem">(sin u)/u = 1 - u^2/6 + …</span>.
        "<span class=\"chem\">sin u = u - u^3/6 + u^5/120 - …</span> を使うと <span class=\"chem\">(sin u)/u = 1 - u^2/6 + …</span> です。",
      ],
      // EN: <p><strong>Decode:</strong> Maclaurin series only work near 0, so first rewrite the limit at infinity with <span class="chem">u = 1/x -> 0</span>.</p><p><span class="chem">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2 = (1 - (1 - u^2/6 + u^4/120 - …))/u^2 = 1/6 - u^2/120 + … -> 1/6</span>.</p>
      solution: "<p><strong>解読：</strong>マクローリン級数は 0 の近くでしか使えないので、まず <span class=\"chem\">u = 1/x -> 0</span> として無限大での極限を書き直します。</p><p><span class=\"chem\">x^2(1 - x sin(1/x)) = (1 - (sin u)/u)/u^2 = (1 - (1 - u^2/6 + u^4/120 - …))/u^2 = 1/6 - u^2/120 + … -> 1/6</span>。</p>",
    },

    // ── t5-4-q054 · short · exam · AHL · AHL 5.18 · 12 marks
    "t5-4-q054": {
      // EN: <p>Consider the differential equation <span class="chem">dy/dx = x^2 - y</span> with <span class="chem">y(0) = 1</span>.</p><p>(a) Use Euler’s method with step size <span class="chem">h = 0.5</span> to find an estimate for <span class="chem">y(1)</span>. <strong>[3 marks]</strong></p><p>(b) Show that <span class="chem">d^2y/dx^2 = 2x - x^2 + y</span>. <strong>[2 marks]</strong></p><p>(c) Hence explain whether the first Euler step gives an overestimate or an underestimate. <strong>[2 marks]</strong></p><p>(d) Use an integrating factor to solve the differential equation, and hence find the exact value of <span class="chem">y(1)</span>. <strong>[5 marks]</strong></p>
      stem: "<p><span class=\"chem\">y(0) = 1</span> を満たす微分方程式 <span class=\"chem\">dy/dx = x^2 - y</span> を考える。</p><p>(a) 刻み幅 <span class=\"chem\">h = 0.5</span> のオイラー法を用いて、<span class=\"chem\">y(1)</span> の推定値を求めなさい (Find)。<strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">d^2y/dx^2 = 2x - x^2 + y</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong></p><p>(c) これを用いて (Hence)、オイラー法の最初のステップが過大評価になるか過小評価になるかを説明しなさい。<strong>[2 marks]</strong></p><p>(d) 積分因子を用いて微分方程式を解き、これを用いて <span class=\"chem\">y(1)</span> の正確な値を求めなさい。<strong>[5 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is Euler by hand, (b)–(c) use concavity to predict the error, and (d) is a linear DE (integrating factor) needing integration by parts.
        "解読：(a) は手計算のオイラー法、(b)–(c) は凹凸を用いて誤差を予測し、(d) は部分積分法が必要な線形微分方程式（積分因子）です。",
        // EN: In (b), differentiate both sides of <span class="chem">dy/dx = x^2 - y</span> with respect to <span class="chem">x</span>.
        "(b) では <span class=\"chem\">dy/dx = x^2 - y</span> の両辺を <span class=\"chem\">x</span> について微分します。",
        // EN: In (d), rewrite the DE as <span class="chem">dy/dx + y = x^2</span>. For <span class="chem">int x^2 e^x dx</span>, use parts with <span class="chem">u = x^2</span>, then again with <span class="chem">u = x</span>.
        "(d) では微分方程式を <span class=\"chem\">dy/dx + y = x^2</span> と書き直します。<span class=\"chem\">int x^2 e^x dx</span> には <span class=\"chem\">u = x^2</span> として部分積分法を使い、さらに <span class=\"chem\">u = x</span> としてもう一度使います。",
      ],
      // EN: <p>(a) <span class="chem">y_1 = 1 + 0.5(0 - 1) = 0.5</span> at <span class="chem">x = 0.5</span>; <span class="chem">y_2 = 0.5 + 0.5(0.25 - 0.5) = 0.375</span>. So <span class="chem">y(1) ≈ 0.375</span>.</p><p>(b) <span class="chem">d^2y/dx^2 = 2x - dy/dx = 2x - (x^2 - y) = 2x - x^2 + y</span>.</p><p>(c) At <span class="chem">(0, 1)</span>, <span class="chem">d^2y/dx^2 = 1 &gt; 0</span>, so the curve is concave up there and lies above its tangent: the first Euler step is an underestimate.</p><p>(d) <span class="chem">dy/dx + y = x^2</span>, IF <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^2 e^x</span>. By parts twice, <span class="chem">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>. So <span class="chem">y = x^2 - 2x + 2 + C e^{-x}</span>; <span class="chem">y(0) = 1 => C = -1</span>. <span class="chem">y(1) = 1 - 2 + 2 - e^{-1} = 1 - 1/e</span>.</p>
      answer: "<p>(a) <span class=\"chem\">x = 0.5</span> で <span class=\"chem\">y_1 = 1 + 0.5(0 - 1) = 0.5</span>；<span class=\"chem\">y_2 = 0.5 + 0.5(0.25 - 0.5) = 0.375</span>。よって <span class=\"chem\">y(1) ≈ 0.375</span>。</p><p>(b) <span class=\"chem\">d^2y/dx^2 = 2x - dy/dx = 2x - (x^2 - y) = 2x - x^2 + y</span>。</p><p>(c) <span class=\"chem\">(0, 1)</span> で <span class=\"chem\">d^2y/dx^2 = 1 &gt; 0</span> なので、曲線はそこで下に凸であり、接線の上側にある。よってオイラー法の最初のステップは過小評価である。</p><p>(d) <span class=\"chem\">dy/dx + y = x^2</span>、積分因子 <span class=\"chem\">e^x</span>：<span class=\"chem\">d/dx(y e^x) = x^2 e^x</span>。部分積分法を 2 回用いて <span class=\"chem\">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>。よって <span class=\"chem\">y = x^2 - 2x + 2 + C e^{-x}</span>；<span class=\"chem\">y(0) = 1 => C = -1</span>。<span class=\"chem\">y(1) = 1 - 2 + 2 - e^{-1} = 1 - 1/e</span>。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">y_{n+1} = y_n + 0.5(x_n^2 - y_n)</span>.
        "M1：<span class=\"chem\">y_{n+1} = y_n + 0.5(x_n^2 - y_n)</span> を用いている。",
        // EN: A1: <span class="chem">y_1 = 0.5</span>.
        "A1：<span class=\"chem\">y_1 = 0.5</span>。",
        // EN: A1: <span class="chem">y(1) ≈ 0.375</span>.
        "A1：<span class=\"chem\">y(1) ≈ 0.375</span>。",
        // EN: M1: differentiates the DE: <span class="chem">d^2y/dx^2 = 2x - dy/dx</span>.
        "M1：微分方程式を微分している：<span class=\"chem\">d^2y/dx^2 = 2x - dy/dx</span>。",
        // EN: A1: substitutes <span class="chem">dy/dx = x^2 - y</span>. AG: <span class="chem">d^2y/dx^2 = 2x - x^2 + y</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">dy/dx = x^2 - y</span> を代入している。AG：<span class=\"chem\">d^2y/dx^2 = 2x - x^2 + y</span>；与えられた式そのものには点を与えない。",
        // EN: A1: <span class="chem">d^2y/dx^2 = 1 &gt; 0</span> at <span class="chem">(0, 1)</span>.
        "A1：<span class=\"chem\">(0, 1)</span> で <span class=\"chem\">d^2y/dx^2 = 1 &gt; 0</span>。",
        // EN: R1: concave up, so the tangent lies below the curve and the step underestimates.
        "R1：下に凸なので、接線は曲線の下側にあり、このステップは過小評価になる。",
        // EN: M1: integrating factor <span class="chem">e^x</span> for <span class="chem">dy/dx + y = x^2</span>.
        "M1：<span class=\"chem\">dy/dx + y = x^2</span> に対する積分因子 <span class=\"chem\">e^x</span>。",
        // EN: M1: integration by parts (twice) on <span class="chem">int x^2 e^x dx</span>.
        "M1：<span class=\"chem\">int x^2 e^x dx</span> に部分積分法を（2 回）用いている。",
        // EN: A1: <span class="chem">y e^x = (x^2 - 2x + 2)e^x + C</span>.
        "A1：<span class=\"chem\">y e^x = (x^2 - 2x + 2)e^x + C</span>。",
        // EN: A1: <span class="chem">C = -1</span>.
        "A1：<span class=\"chem\">C = -1</span>。",
        // EN: A1: <span class="chem">y(1) = 1 - 1/e</span>.
        "A1：<span class=\"chem\">y(1) = 1 - 1/e</span>。",
      ],
    },

    // ── t5-4-q055 · numeric · exam · AHL · AHL 5.19 · 4 marks
    "t5-4-q055": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the Maclaurin series for <span class="chem">sqrt(1 + 2x) e^{-x}</span>.</p>
      stem: "<p><span class=\"chem\">sqrt(1 + 2x) e^{-x}</span> のマクローリン級数における <span class=\"chem\">x^2</span> の係数を求めなさい (Find)。</p>",
      hints: [
        // EN: Use <span class="chem">(1 + u)^{1/2} = 1 + u/2 - u^2/8 + …</span> with <span class="chem">u = 2x</span>: <span class="chem">sqrt(1 + 2x) = 1 + x - x^2/2 + …</span>.
        "<span class=\"chem\">u = 2x</span> として <span class=\"chem\">(1 + u)^{1/2} = 1 + u/2 - u^2/8 + …</span> を使います：<span class=\"chem\">sqrt(1 + 2x) = 1 + x - x^2/2 + …</span>。",
        // EN: Multiply by <span class="chem">e^{-x} = 1 - x + x^2/2 - …</span> and collect the three products that give <span class="chem">x^2</span>.
        "<span class=\"chem\">e^{-x} = 1 - x + x^2/2 - …</span> を掛け、<span class=\"chem\">x^2</span> を与える三つの積を集めます。",
      ],
      // EN: <p><span class="chem">sqrt(1 + 2x) = 1 + x + ((1/2)(-1/2)/2)(2x)^2 + … = 1 + x - x^2/2 + …</span>. Then <span class="chem">(1 + x - x^2/2)(1 - x + x^2/2)</span> has <span class="chem">x^2</span> coefficient <span class="chem">1(1/2) + 1(-1) + (-1/2)(1) = -1</span>.</p>
      solution: "<p><span class=\"chem\">sqrt(1 + 2x) = 1 + x + ((1/2)(-1/2)/2)(2x)^2 + … = 1 + x - x^2/2 + …</span>。すると <span class=\"chem\">(1 + x - x^2/2)(1 - x + x^2/2)</span> の <span class=\"chem\">x^2</span> の係数は <span class=\"chem\">1(1/2) + 1(-1) + (-1/2)(1) = -1</span> です。</p>",
    },

    // ── t5-4-q056 · short · challenge · AHL · AHL 5.18, 5.19 · 17 marks
    "t5-4-q056": {
      // EN: <p><strong>How fast does Euler’s method converge?</strong> This investigation looks at the error of Euler’s method for <span class="chem">dy/dx = y</span>, <span class="chem">y(0) = 1</span>, whose exact solution is <span class="chem">y = e^x</span>.</p><p>(a) Euler’s method is used with <span class="chem">n</span> equal steps of size <span class="chem">h = 1/n</span> from <span class="chem">x = 0</span> to <span class="chem">x = 1</span>. Show that the Euler estimate of <span class="chem">y(1)</span> is <span class="chem">(1 + 1/n)^n</span>. <strong>[3 marks]</strong></p><p>Let <span class="chem">E_n = e - (1 + 1/n)^n</span> be the error.</p><p>(b) Use your GDC to calculate <span class="chem">E_n</span> for <span class="chem">n = 10, 100</span> and <span class="chem">1000</span>, giving answers correct to 4 significant figures. <strong>[3 marks]</strong></p><p>(c) Calculate <span class="chem">nE_n</span> for each of these values of <span class="chem">n</span>, and suggest a value for <span class="chem">lim_{n->inf} nE_n</span>. <strong>[2 marks]</strong></p><p>(d) Use the Maclaurin series for <span class="chem">ln(1 + x)</span> to show that <span class="chem">n ln(1 + 1/n) = 1 - 1/(2n) + 1/(3n^2) - …</span>. <strong>[2 marks]</strong></p><p>(e) Hence, by using the Maclaurin series for <span class="chem">e^x</span>, show that <span class="chem">(1 + 1/n)^n = e(1 - 1/(2n) + 11/(24n^2) - …)</span>, and deduce the exact value of <span class="chem">lim_{n->inf} nE_n</span>. <strong>[4 marks]</strong></p><p>(f) Use the approximation <span class="chem">E_n ≈ e/(2n)</span> to estimate the least <span class="chem">n</span> for which <span class="chem">E_n &lt; 0.0005</span>. Use your GDC to find the true least value of <span class="chem">n</span>, and explain the difference using part (e). <strong>[3 marks]</strong></p>
      stem: "<p><strong>オイラー法はどのくらい速く収束するか？</strong>この探究では、正確な解が <span class=\"chem\">y = e^x</span> である <span class=\"chem\">dy/dx = y</span>、<span class=\"chem\">y(0) = 1</span> に対するオイラー法の誤差を調べる。</p><p>(a) <span class=\"chem\">x = 0</span> から <span class=\"chem\">x = 1</span> まで、大きさ <span class=\"chem\">h = 1/n</span> の等しい <span class=\"chem\">n</span> ステップでオイラー法を用いる。<span class=\"chem\">y(1)</span> のオイラー法による推定値が <span class=\"chem\">(1 + 1/n)^n</span> であることを示しなさい (Show that)。<strong>[3 marks]</strong></p><p><span class=\"chem\">E_n = e - (1 + 1/n)^n</span> を誤差とする。</p><p>(b) GDC を用いて、<span class=\"chem\">n = 10, 100</span> および <span class=\"chem\">1000</span> に対する <span class=\"chem\">E_n</span> を計算し、答えは有効数字 4 桁で求めなさい。<strong>[3 marks]</strong></p><p>(c) これらの <span class=\"chem\">n</span> の値それぞれについて <span class=\"chem\">nE_n</span> を計算し、<span class=\"chem\">lim_{n->inf} nE_n</span> の値を予想しなさい。<strong>[2 marks]</strong></p><p>(d) <span class=\"chem\">ln(1 + x)</span> のマクローリン級数を用いて、<span class=\"chem\">n ln(1 + 1/n) = 1 - 1/(2n) + 1/(3n^2) - …</span> であることを示しなさい。<strong>[2 marks]</strong></p><p>(e) これを用いて (Hence)、<span class=\"chem\">e^x</span> のマクローリン級数を使って <span class=\"chem\">(1 + 1/n)^n = e(1 - 1/(2n) + 11/(24n^2) - …)</span> であることを示し、<span class=\"chem\">lim_{n->inf} nE_n</span> の正確な値を導きなさい (Deduce)。<strong>[4 marks]</strong></p><p>(f) 近似 <span class=\"chem\">E_n ≈ e/(2n)</span> を用いて、<span class=\"chem\">E_n &lt; 0.0005</span> となる最小の <span class=\"chem\">n</span> を推定しなさい。GDC を用いて <span class=\"chem\">n</span> の本当の最小値を求め、(e) を用いてその違いを説明しなさい。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a guided discovery — compute, spot a pattern, then prove it with series. The Euler steps form a geometric sequence, and the proof uses <span class="chem">a^b = e^{b ln a}</span>.
        "解読：これは誘導付きの発見型の問題です。計算し、規則性を見つけ、級数を使って証明します。オイラー法のステップは等比数列をなし、証明には <span class=\"chem\">a^b = e^{b ln a}</span> を使います。",
        // EN: In (e), write <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)}</span> and use (d). You need <span class="chem">u^2/2</span> only up to the <span class="chem">1/n^2</span> term: <span class="chem">u^2 = 1/(4n^2) + …</span>.
        "(e) では <span class=\"chem\">(1 + 1/n)^n = e^{n ln(1 + 1/n)}</span> と書き、(d) を使います。<span class=\"chem\">u^2/2</span> は <span class=\"chem\">1/n^2</span> の項まででよいです：<span class=\"chem\">u^2 = 1/(4n^2) + …</span>。",
        // EN: In (f), list <span class="chem">E_n</span> in a GDC table near <span class="chem">n = 2718</span>.
        "(f) では、GDC の表で <span class=\"chem\">n = 2718</span> の近くの <span class=\"chem\">E_n</span> を並べます。",
      ],
      // EN: <p>(a) <span class="chem">y_{k+1} = y_k + h y_k = (1 + h) y_k</span>, so <span class="chem">y_k = (1 + h)^k y_0 = (1 + h)^k</span>. After <span class="chem">n</span> steps of <span class="chem">1/n</span> we reach <span class="chem">x = 1</span>: <span class="chem">y(1) ≈ (1 + 1/n)^n</span>.</p><p>(b) <span class="chem">E_{10} = 0.1245</span>, <span class="chem">E_{100} = 0.01347</span>, <span class="chem">E_{1000} = 0.001358</span>.</p><p>(c) <span class="chem">nE_n = 1.245, 1.347, 1.358</span>. The limit appears to be about <span class="chem">1.36</span> (perhaps <span class="chem">e/2 = 1.359…</span>).</p><p>(d) With <span class="chem">x = 1/n</span>: <span class="chem">ln(1 + 1/n) = 1/n - 1/(2n^2) + 1/(3n^3) - …</span>; multiplying by <span class="chem">n</span> gives the result.</p><p>(e) <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span> with <span class="chem">u = -1/(2n) + 1/(3n^2) - …</span>. <span class="chem">e^u = 1 + u + u^2/2 + … = 1 - 1/(2n) + (1/3 + 1/8)(1/n^2) + … = 1 - 1/(2n) + 11/(24n^2) - …</span>. So <span class="chem">E_n = e/(2n) - 11e/(24n^2) + …</span> and <span class="chem">nE_n = e/2 - 11e/(24n) + … -> e/2</span>.</p><p>(f) <span class="chem">e/(2n) &lt; 0.0005 => n &gt; 1000e = 2718.28…</span>, so the estimate is <span class="chem">n = 2719</span>. GDC: <span class="chem">E_{2718} = 0.00049988… &lt; 0.0005</span> and <span class="chem">E_{2717} &gt; 0.0005</span>, so the true least value is <span class="chem">n = 2718</span>. The next term <span class="chem">-11e/(24n^2)</span> is negative, so <span class="chem">E_n</span> is slightly less than <span class="chem">e/(2n)</span>, and a slightly smaller <span class="chem">n</span> is enough.</p>
      answer: "<p>(a) <span class=\"chem\">y_{k+1} = y_k + h y_k = (1 + h) y_k</span> なので <span class=\"chem\">y_k = (1 + h)^k y_0 = (1 + h)^k</span>。<span class=\"chem\">1/n</span> で <span class=\"chem\">n</span> ステップ進むと <span class=\"chem\">x = 1</span> に達する：<span class=\"chem\">y(1) ≈ (1 + 1/n)^n</span>。</p><p>(b) <span class=\"chem\">E_{10} = 0.1245</span>、<span class=\"chem\">E_{100} = 0.01347</span>、<span class=\"chem\">E_{1000} = 0.001358</span>。</p><p>(c) <span class=\"chem\">nE_n = 1.245, 1.347, 1.358</span>。極限はおよそ <span class=\"chem\">1.36</span>（おそらく <span class=\"chem\">e/2 = 1.359…</span>）と思われる。</p><p>(d) <span class=\"chem\">x = 1/n</span> とすると：<span class=\"chem\">ln(1 + 1/n) = 1/n - 1/(2n^2) + 1/(3n^3) - …</span>。<span class=\"chem\">n</span> を掛けると結果が得られる。</p><p>(e) <span class=\"chem\">u = -1/(2n) + 1/(3n^2) - …</span> として <span class=\"chem\">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span>。<span class=\"chem\">e^u = 1 + u + u^2/2 + … = 1 - 1/(2n) + (1/3 + 1/8)(1/n^2) + … = 1 - 1/(2n) + 11/(24n^2) - …</span>。よって <span class=\"chem\">E_n = e/(2n) - 11e/(24n^2) + …</span> および <span class=\"chem\">nE_n = e/2 - 11e/(24n) + … -> e/2</span>。</p><p>(f) <span class=\"chem\">e/(2n) &lt; 0.0005 => n &gt; 1000e = 2718.28…</span> なので、推定値は <span class=\"chem\">n = 2719</span>。GDC：<span class=\"chem\">E_{2718} = 0.00049988… &lt; 0.0005</span> および <span class=\"chem\">E_{2717} &gt; 0.0005</span> なので、本当の最小値は <span class=\"chem\">n = 2718</span>。次の項 <span class=\"chem\">-11e/(24n^2)</span> は負なので、<span class=\"chem\">E_n</span> は <span class=\"chem\">e/(2n)</span> より少し小さく、少し小さい <span class=\"chem\">n</span> で十分である。</p>",
      markscheme: [
        // EN: M1: <span class="chem">y_{k+1} = y_k + h y_k = (1 + h) y_k</span>.
        "M1：<span class=\"chem\">y_{k+1} = y_k + h y_k = (1 + h) y_k</span>。",
        // EN: A1: recognises a geometric sequence: <span class="chem">y_k = (1 + h)^k</span>.
        "A1：等比数列であることに気づいている：<span class=\"chem\">y_k = (1 + h)^k</span>。",
        // EN: A1: <span class="chem">n</span> steps of size <span class="chem">1/n</span> reach <span class="chem">x = 1</span>. AG: <span class="chem">y(1) ≈ (1 + 1/n)^n</span>; the given line itself earns no mark.
        "A1：大きさ <span class=\"chem\">1/n</span> の <span class=\"chem\">n</span> ステップで <span class=\"chem\">x = 1</span> に達する。AG：<span class=\"chem\">y(1) ≈ (1 + 1/n)^n</span>；与えられた式そのものには点を与えない。",
        // EN: A1: <span class="chem">E_{10} = 0.1245</span>.
        "A1：<span class=\"chem\">E_{10} = 0.1245</span>。",
        // EN: A1: <span class="chem">E_{100} = 0.01347</span>.
        "A1：<span class=\"chem\">E_{100} = 0.01347</span>。",
        // EN: A1: <span class="chem">E_{1000} = 0.001358</span>.
        "A1：<span class=\"chem\">E_{1000} = 0.001358</span>。",
        // EN: A1: <span class="chem">nE_n = 1.245, 1.347, 1.358</span>.
        "A1：<span class=\"chem\">nE_n = 1.245, 1.347, 1.358</span>。",
        // EN: A1: suggests a limit of about <span class="chem">1.36</span> (accept any value in [1.35, 1.37]).
        "A1：極限はおよそ <span class=\"chem\">1.36</span> と予想している（[1.35, 1.37] の任意の値も可）。",
        // EN: M1: substitutes <span class="chem">x = 1/n</span> into <span class="chem">x - x^2/2 + x^3/3 - …</span>.
        "M1：<span class=\"chem\">x = 1/n</span> を <span class=\"chem\">x - x^2/2 + x^3/3 - …</span> に代入している。",
        // EN: A1: multiplies by <span class="chem">n</span> correctly. AG: <span class="chem">1 - 1/(2n) + 1/(3n^2) - …</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">n</span> を正しく掛けている。AG：<span class=\"chem\">1 - 1/(2n) + 1/(3n^2) - …</span>；与えられた式そのものには点を与えない。",
        // EN: M1: writes <span class="chem">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span>.
        "M1：<span class=\"chem\">(1 + 1/n)^n = e^{n ln(1 + 1/n)} = e × e^u</span> と書いている。",
        // EN: M1: expands <span class="chem">e^u = 1 + u + u^2/2 + …</span> and keeps terms to <span class="chem">1/n^2</span>.
        "M1：<span class=\"chem\">e^u = 1 + u + u^2/2 + …</span> を展開し、<span class=\"chem\">1/n^2</span> までの項を残している。",
        // EN: A1: <span class="chem">1/(3n^2) + 1/(8n^2) = 11/(24n^2)</span>. AG: the given expansion; the given line itself earns no mark.
        "A1：<span class=\"chem\">1/(3n^2) + 1/(8n^2) = 11/(24n^2)</span>。AG：与えられた展開式；与えられた式そのものには点を与えない。",
        // EN: A1: <span class="chem">nE_n = e/2 - 11e/(24n) + … -> e/2</span>.
        "A1：<span class=\"chem\">nE_n = e/2 - 11e/(24n) + … -> e/2</span>。",
        // EN: A1: estimate <span class="chem">n = 2719</span> (from <span class="chem">n &gt; 1000e</span>).
        "A1：推定値 <span class=\"chem\">n = 2719</span>（<span class=\"chem\">n &gt; 1000e</span> から）。",
        // EN: A1: true least value <span class="chem">n = 2718</span>.
        "A1：本当の最小値 <span class=\"chem\">n = 2718</span>。",
        // EN: R1: the <span class="chem">-11e/(24n^2)</span> term makes <span class="chem">E_n</span> a little smaller than <span class="chem">e/(2n)</span>.
        "R1：<span class=\"chem\">-11e/(24n^2)</span> の項によって <span class=\"chem\">E_n</span> は <span class=\"chem\">e/(2n)</span> より少し小さくなる。",
      ],
    },

    // ── t5-4-q057 · short · challenge · AHL · AHL 5.18, 5.19 · 17 marks
    "t5-4-q057": {
      // EN: <p><strong>A series for tan x from its differential equation.</strong> The Formula Booklet does not give a series for <span class="chem">tan x</span>. This investigation builds one.</p><p>(a) Show that <span class="chem">y = tan x</span> satisfies the differential equation <span class="chem">dy/dx = 1 + y^2</span> with <span class="chem">y(0) = 0</span>. <strong>[2 marks]</strong></p><p>(b) Show that <span class="chem">d^2y/dx^2 = 2y(1 + y^2)</span> and <span class="chem">d^3y/dx^3 = 2(1 + y^2)(1 + 3y^2)</span>. <strong>[4 marks]</strong></p><p>(c) Hence find the Maclaurin series for <span class="chem">tan x</span> up to and including the term in <span class="chem">x^3</span>. <strong>[2 marks]</strong></p><p>(d) Explain why the Maclaurin series for <span class="chem">tan x</span> contains only odd powers of <span class="chem">x</span>. <strong>[1 mark]</strong></p><p>(e) Let <span class="chem">tan x = x + (1/3)x^3 + ax^5 + bx^7 + …</span>. By substituting this series into <span class="chem">dy/dx = 1 + y^2</span> and comparing coefficients, find the exact values of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[5 marks]</strong></p><p>(f) Use the four terms of the series to estimate <span class="chem">tan 0.5</span>, and find the percentage error compared with the GDC value. <strong>[3 marks]</strong></p>
      stem: "<p><strong>微分方程式から得る tan x の級数。</strong>公式集 (Formula Booklet) には <span class=\"chem\">tan x</span> の級数は載っていない。この探究ではそれを作る。</p><p>(a) <span class=\"chem\">y = tan x</span> が <span class=\"chem\">y(0) = 0</span> のもとで微分方程式 <span class=\"chem\">dy/dx = 1 + y^2</span> を満たすことを示しなさい (Show that)。<strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">d^2y/dx^2 = 2y(1 + y^2)</span> および <span class=\"chem\">d^3y/dx^3 = 2(1 + y^2)(1 + 3y^2)</span> であることを示しなさい。<strong>[4 marks]</strong></p><p>(c) これを用いて (Hence)、<span class=\"chem\">tan x</span> のマクローリン級数を <span class=\"chem\">x^3</span> の項まで求めなさい。<strong>[2 marks]</strong></p><p>(d) <span class=\"chem\">tan x</span> のマクローリン級数が <span class=\"chem\">x</span> の奇数乗の項だけを含む理由を説明しなさい (Explain)。<strong>[1 mark]</strong></p><p>(e) <span class=\"chem\">tan x = x + (1/3)x^3 + ax^5 + bx^7 + …</span> とする。この級数を <span class=\"chem\">dy/dx = 1 + y^2</span> に代入して係数を比較することにより、<span class=\"chem\">a</span> と <span class=\"chem\">b</span> の正確な値を求めなさい。<strong>[5 marks]</strong></p><p>(f) 級数の四つの項を用いて <span class=\"chem\">tan 0.5</span> を推定し、GDC の値と比べた百分率誤差を求めなさい。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: a series is built from a DE in two ways here: by repeated differentiation in (b)–(c), and by comparing coefficients in (e).
        "解読：ここでは微分方程式から二通りの方法で級数を作ります。(b)–(c) では繰り返し微分することで、(e) では係数を比較することで作ります。",
        // EN: In (b), write <span class="chem">y'' = 2y + 2y^3</span> before differentiating again, and replace each <span class="chem">y'</span> by <span class="chem">1 + y^2</span>.
        "(b) では、もう一度微分する前に <span class=\"chem\">y'' = 2y + 2y^3</span> と書き、各 <span class=\"chem\">y'</span> を <span class=\"chem\">1 + y^2</span> で置き換えます。",
        // EN: In (e), the <span class="chem">x^6</span> term of <span class="chem">y^2</span> comes from <span class="chem">(x^3/3)^2</span> and from <span class="chem">2 × x × ax^5</span>.
        "(e) では、<span class=\"chem\">y^2</span> の <span class=\"chem\">x^6</span> の項は <span class=\"chem\">(x^3/3)^2</span> と <span class=\"chem\">2 × x × ax^5</span> から生じます。",
      ],
      // EN: <p>(a) <span class="chem">d/dx(tan x) = sec^2 x = 1 + tan^2 x</span>, so <span class="chem">dy/dx = 1 + y^2</span>; and <span class="chem">tan 0 = 0</span>.</p><p>(b) <span class="chem">y'' = 2y y' = 2y(1 + y^2)</span>. Writing <span class="chem">y'' = 2y + 2y^3</span>: <span class="chem">y''' = (2 + 6y^2) y' = 2(1 + 3y^2)(1 + y^2)</span>.</p><p>(c) <span class="chem">y(0) = 0</span>, <span class="chem">y'(0) = 1</span>, <span class="chem">y''(0) = 0</span>, <span class="chem">y'''(0) = 2</span>, so <span class="chem">tan x = x + (2/3!)x^3 + … = x + x^3/3 + …</span>.</p><p>(d) <span class="chem">tan(-x) = -tan x</span>: tan is an odd function, so every even-power coefficient must be zero.</p><p>(e) <span class="chem">dy/dx = 1 + x^2 + 5ax^4 + 7bx^6 + …</span>; <span class="chem">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>. Comparing <span class="chem">x^4</span>: <span class="chem">5a = 2/3 => a = 2/15</span>. Comparing <span class="chem">x^6</span>: <span class="chem">7b = 1/9 + 4/15 = 17/45 => b = 17/315</span>.</p><p>(f) <span class="chem">0.5 + 0.125/3 + (2/15)(0.03125) + (17/315)(0.0078125) = 0.546255</span>. GDC: <span class="chem">tan 0.5 = 0.546302</span>. Percentage error <span class="chem">≈ 0.00870%</span>.</p>
      answer: "<p>(a) <span class=\"chem\">d/dx(tan x) = sec^2 x = 1 + tan^2 x</span> なので <span class=\"chem\">dy/dx = 1 + y^2</span>。また <span class=\"chem\">tan 0 = 0</span>。</p><p>(b) <span class=\"chem\">y'' = 2y y' = 2y(1 + y^2)</span>。<span class=\"chem\">y'' = 2y + 2y^3</span> と書くと：<span class=\"chem\">y''' = (2 + 6y^2) y' = 2(1 + 3y^2)(1 + y^2)</span>。</p><p>(c) <span class=\"chem\">y(0) = 0</span>、<span class=\"chem\">y'(0) = 1</span>、<span class=\"chem\">y''(0) = 0</span>、<span class=\"chem\">y'''(0) = 2</span> なので <span class=\"chem\">tan x = x + (2/3!)x^3 + … = x + x^3/3 + …</span>。</p><p>(d) <span class=\"chem\">tan(-x) = -tan x</span>：tan は奇関数なので、偶数乗の係数はすべて 0 でなければならない。</p><p>(e) <span class=\"chem\">dy/dx = 1 + x^2 + 5ax^4 + 7bx^6 + …</span>；<span class=\"chem\">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>。<span class=\"chem\">x^4</span> を比較して：<span class=\"chem\">5a = 2/3 => a = 2/15</span>。<span class=\"chem\">x^6</span> を比較して：<span class=\"chem\">7b = 1/9 + 4/15 = 17/45 => b = 17/315</span>。</p><p>(f) <span class=\"chem\">0.5 + 0.125/3 + (2/15)(0.03125) + (17/315)(0.0078125) = 0.546255</span>。GDC：<span class=\"chem\">tan 0.5 = 0.546302</span>。百分率誤差 <span class=\"chem\">≈ 0.00870%</span>。</p>",
      markscheme: [
        // EN: M1: <span class="chem">d/dx(tan x) = sec^2 x</span>.
        "M1：<span class=\"chem\">d/dx(tan x) = sec^2 x</span>。",
        // EN: A1: uses <span class="chem">sec^2 x = 1 + tan^2 x</span> and <span class="chem">tan 0 = 0</span>. AG: <span class="chem">dy/dx = 1 + y^2</span>, <span class="chem">y(0) = 0</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">sec^2 x = 1 + tan^2 x</span> と <span class=\"chem\">tan 0 = 0</span> を用いている。AG：<span class=\"chem\">dy/dx = 1 + y^2</span>、<span class=\"chem\">y(0) = 0</span>；与えられた式そのものには点を与えない。",
        // EN: M1: chain rule: <span class="chem">d/dx(y^2) = 2y (dy/dx)</span>.
        "M1：合成関数の微分法：<span class=\"chem\">d/dx(y^2) = 2y (dy/dx)</span>。",
        // EN: A1: <span class="chem">y'' = 2y(1 + y^2)</span>.
        "A1：<span class=\"chem\">y'' = 2y(1 + y^2)</span>。",
        // EN: M1: differentiates <span class="chem">2y + 2y^3</span> to <span class="chem">(2 + 6y^2) y'</span>.
        "M1：<span class=\"chem\">2y + 2y^3</span> を微分して <span class=\"chem\">(2 + 6y^2) y'</span> を得ている。",
        // EN: A1: substitutes <span class="chem">y' = 1 + y^2</span>. AG: <span class="chem">y''' = 2(1 + y^2)(1 + 3y^2)</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">y' = 1 + y^2</span> を代入している。AG：<span class=\"chem\">y''' = 2(1 + y^2)(1 + 3y^2)</span>；与えられた式そのものには点を与えない。",
        // EN: A1: <span class="chem">y'(0) = 1</span>, <span class="chem">y''(0) = 0</span>, <span class="chem">y'''(0) = 2</span>.
        "A1：<span class=\"chem\">y'(0) = 1</span>、<span class=\"chem\">y''(0) = 0</span>、<span class=\"chem\">y'''(0) = 2</span>。",
        // EN: A1: <span class="chem">x + x^3/3</span>.
        "A1：<span class=\"chem\">x + x^3/3</span>。",
        // EN: R1: <span class="chem">tan x</span> is an odd function (<span class="chem">tan(-x) = -tan x</span>), so even-power coefficients are zero.
        "R1：<span class=\"chem\">tan x</span> は奇関数（<span class=\"chem\">tan(-x) = -tan x</span>）なので、偶数乗の係数は 0 である。",
        // EN: M1: differentiates the series term by term.
        "M1：級数を項別に微分している。",
        // EN: M1: squares the series, keeping terms up to <span class="chem">x^6</span>.
        "M1：級数を 2 乗し、<span class=\"chem\">x^6</span> までの項を残している。",
        // EN: A1: <span class="chem">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>.
        "A1：<span class=\"chem\">y^2 = x^2 + (2/3)x^4 + (1/9 + 2a)x^6 + …</span>。",
        // EN: A1: <span class="chem">a = 2/15</span>.
        "A1：<span class=\"chem\">a = 2/15</span>。",
        // EN: A1: <span class="chem">b = 17/315</span>.
        "A1：<span class=\"chem\">b = 17/315</span>。",
        // EN: A1: estimate <span class="chem">0.546255</span> (accept 0.5463).
        "A1：推定値 <span class=\"chem\">0.546255</span>（0.5463 も可）。",
        // EN: A1: GDC value <span class="chem">0.546302</span>.
        "A1：GDC の値 <span class=\"chem\">0.546302</span>。",
        // EN: A1: percentage error <span class="chem">0.00870%</span> (accept 0.0087% or 0.00869% from the rounded estimate).
        "A1：百分率誤差 <span class=\"chem\">0.00870%</span>（丸めた推定値から得た 0.0087% または 0.00869% も可）。",
      ],
    },

    // ── t5-4-q058 · short · challenge · AHL · AHL 5.18 · 18 marks
    "t5-4-q058": {
      // EN: <p><strong>Two families of circles that cross at right angles.</strong> In this investigation, <span class="chem">x &gt; 0</span> and <span class="chem">y &gt; 0</span>.</p><p>(a) Use the substitution <span class="chem">y = vx</span> to show that the general solution of <span class="chem">dy/dx = (y^2 - x^2)/(2xy)</span> is <span class="chem">x^2 + y^2 = Cx</span>, where <span class="chem">C</span> is a constant. <strong>[5 marks]</strong></p><p>(b) Describe the curves <span class="chem">x^2 + y^2 = Cx</span> geometrically, giving the centre and radius in terms of <span class="chem">C</span>. <strong>[2 marks]</strong></p><p>A second family of curves satisfies <span class="chem">dy/dx = 2xy/(x^2 - y^2)</span>, for <span class="chem">x != y</span>.</p><p>(c) Show that, at any point where both are defined, a curve of the first family and a curve of the second family cross at right angles. <strong>[2 marks]</strong></p><p>(d) You are given that <span class="chem">(1 - v^2)/(v(1 + v^2)) = 1/v - 2v/(1 + v^2)</span>. Use the substitution <span class="chem">y = vx</span> to show that the second family is <span class="chem">x^2 + y^2 = Ky</span>, where <span class="chem">K</span> is a constant. <strong>[6 marks]</strong></p><p>(e) Find the members of each family that pass through the point <span class="chem">(3, 1)</span>, and verify that their gradients there have product <span class="chem">-1</span>. <strong>[3 marks]</strong></p>
      stem: "<p><strong>直角に交わる二つの円の族。</strong>この探究では、<span class=\"chem\">x &gt; 0</span> かつ <span class=\"chem\">y &gt; 0</span> とする。</p><p>(a) 置換 <span class=\"chem\">y = vx</span> を用いて、<span class=\"chem\">dy/dx = (y^2 - x^2)/(2xy)</span> の一般解が <span class=\"chem\">x^2 + y^2 = Cx</span> であることを示しなさい (Show that)。ここで <span class=\"chem\">C</span> は定数である。<strong>[5 marks]</strong></p><p>(b) 曲線 <span class=\"chem\">x^2 + y^2 = Cx</span> を幾何的に説明し (Describe)、中心と半径を <span class=\"chem\">C</span> を用いて表しなさい。<strong>[2 marks]</strong></p><p>第二の曲線の族は <span class=\"chem\">x != y</span> に対して <span class=\"chem\">dy/dx = 2xy/(x^2 - y^2)</span> を満たす。</p><p>(c) 両方が定義される任意の点において、第一の族の曲線と第二の族の曲線が直角に交わることを示しなさい。<strong>[2 marks]</strong></p><p>(d) <span class=\"chem\">(1 - v^2)/(v(1 + v^2)) = 1/v - 2v/(1 + v^2)</span> が与えられている。置換 <span class=\"chem\">y = vx</span> を用いて、第二の族が <span class=\"chem\">x^2 + y^2 = Ky</span> であることを示しなさい。ここで <span class=\"chem\">K</span> は定数である。<strong>[6 marks]</strong></p><p>(e) 点 <span class=\"chem\">(3, 1)</span> を通る各族の曲線を求め、そこでの傾きの積が <span class=\"chem\">-1</span> であることを確かめなさい (Verify)。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: both DEs are homogeneous (each is a function of <span class="chem">y/x</span>), so each part is the <span class="chem">y = vx</span> method; (c) is about perpendicular gradients <span class="chem">m_1 m_2 = -1</span>.
        "解読：二つの微分方程式はどちらも同次形（それぞれ <span class=\"chem\">y/x</span> の関数）なので、各小問は <span class=\"chem\">y = vx</span> の方法を使います。(c) は垂直な傾き <span class=\"chem\">m_1 m_2 = -1</span> に関する問題です。",
        // EN: In (a), after substituting, <span class="chem">(v^2 - 1)/(2v) - v = (v^2 - 1 - 2v^2)/(2v)</span>.
        "(a) では代入したあと <span class=\"chem\">(v^2 - 1)/(2v) - v = (v^2 - 1 - 2v^2)/(2v)</span>。",
        // EN: In (b), complete the square in <span class="chem">x</span>. In (e), substitute <span class="chem">(3, 1)</span> into each family, and into each DE for the gradients.
        "(b) では <span class=\"chem\">x</span> について平方完成します。(e) では各族に <span class=\"chem\">(3, 1)</span> を代入し、傾きについては各微分方程式に代入します。",
      ],
      // EN: <p>(a) <span class="chem">v + x(dv/dx) = (v^2 - 1)/(2v) => x(dv/dx) = -(1 + v^2)/(2v)</span>. Then <span class="chem">int 2v/(1 + v^2) dv = -int (1/x) dx => ln(1 + v^2) = -ln x + c</span>, so <span class="chem">1 + v^2 = C/x</span>. Multiplying by <span class="chem">x^2</span>: <span class="chem">x^2 + y^2 = Cx</span>.</p><p>(b) <span class="chem">(x - C/2)^2 + y^2 = C^2/4</span>: circles with centre <span class="chem">(C/2, 0)</span> on the <span class="chem">x</span>-axis and radius <span class="chem">C/2</span>, all passing through the origin (and touching the <span class="chem">y</span>-axis there).</p><p>(c) <span class="chem">((y^2 - x^2)/(2xy)) × (2xy/(x^2 - y^2)) = -1</span>, so the tangents are perpendicular.</p><p>(d) <span class="chem">v + x(dv/dx) = 2v/(1 - v^2) => x(dv/dx) = (2v - v + v^3)/(1 - v^2) = v(1 + v^2)/(1 - v^2)</span>. So <span class="chem">int (1/v - 2v/(1 + v^2)) dv = int (1/x) dx => ln v - ln(1 + v^2) = ln x + c</span>, so <span class="chem">v/(1 + v^2) = Ax</span>. With <span class="chem">v = y/x</span>: <span class="chem">xy/(x^2 + y^2) = Ax</span>, so <span class="chem">x^2 + y^2 = Ky</span> with <span class="chem">K = 1/A</span>.</p><p>(e) <span class="chem">10 = 3C => C = 10/3</span>: <span class="chem">x^2 + y^2 = (10/3)x</span>. <span class="chem">10 = K</span>: <span class="chem">x^2 + y^2 = 10y</span>. Gradients at <span class="chem">(3, 1)</span>: <span class="chem">(1 - 9)/6 = -4/3</span> and <span class="chem">6/(9 - 1) = 3/4</span>; product <span class="chem">-1</span>.</p>
      answer: "<p>(a) <span class=\"chem\">v + x(dv/dx) = (v^2 - 1)/(2v) => x(dv/dx) = -(1 + v^2)/(2v)</span>。すると <span class=\"chem\">int 2v/(1 + v^2) dv = -int (1/x) dx => ln(1 + v^2) = -ln x + c</span> なので <span class=\"chem\">1 + v^2 = C/x</span>。<span class=\"chem\">x^2</span> を掛けて：<span class=\"chem\">x^2 + y^2 = Cx</span>。</p><p>(b) <span class=\"chem\">(x - C/2)^2 + y^2 = C^2/4</span>：中心が <span class=\"chem\">x</span> 軸上の <span class=\"chem\">(C/2, 0)</span>、半径 <span class=\"chem\">C/2</span> の円で、すべて原点を通る（そして原点で <span class=\"chem\">y</span> 軸に接する）。</p><p>(c) <span class=\"chem\">((y^2 - x^2)/(2xy)) × (2xy/(x^2 - y^2)) = -1</span> なので、接線は垂直である。</p><p>(d) <span class=\"chem\">v + x(dv/dx) = 2v/(1 - v^2) => x(dv/dx) = (2v - v + v^3)/(1 - v^2) = v(1 + v^2)/(1 - v^2)</span>。よって <span class=\"chem\">int (1/v - 2v/(1 + v^2)) dv = int (1/x) dx => ln v - ln(1 + v^2) = ln x + c</span> なので <span class=\"chem\">v/(1 + v^2) = Ax</span>。<span class=\"chem\">v = y/x</span> を用いて：<span class=\"chem\">xy/(x^2 + y^2) = Ax</span> なので、<span class=\"chem\">K = 1/A</span> として <span class=\"chem\">x^2 + y^2 = Ky</span>。</p><p>(e) <span class=\"chem\">10 = 3C => C = 10/3</span>：<span class=\"chem\">x^2 + y^2 = (10/3)x</span>。<span class=\"chem\">10 = K</span>：<span class=\"chem\">x^2 + y^2 = 10y</span>。<span class=\"chem\">(3, 1)</span> における傾き：<span class=\"chem\">(1 - 9)/6 = -4/3</span> および <span class=\"chem\">6/(9 - 1) = 3/4</span>；積 <span class=\"chem\">-1</span>。</p>",
      markscheme: [
        // EN: M1: substitutes <span class="chem">y = vx</span> and <span class="chem">dy/dx = v + x(dv/dx)</span>.
        "M1：<span class=\"chem\">y = vx</span> と <span class=\"chem\">dy/dx = v + x(dv/dx)</span> を代入している。",
        // EN: A1: <span class="chem">x(dv/dx) = -(1 + v^2)/(2v)</span>.
        "A1：<span class=\"chem\">x(dv/dx) = -(1 + v^2)/(2v)</span>。",
        // EN: M1: separates: <span class="chem">int 2v/(1 + v^2) dv = -int (1/x) dx</span>.
        "M1：変数を分離している：<span class=\"chem\">int 2v/(1 + v^2) dv = -int (1/x) dx</span>。",
        // EN: A1: <span class="chem">ln(1 + v^2) = -ln x + c</span>.
        "A1：<span class=\"chem\">ln(1 + v^2) = -ln x + c</span>。",
        // EN: A1: <span class="chem">1 + y^2/x^2 = C/x</span>. AG: <span class="chem">x^2 + y^2 = Cx</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">1 + y^2/x^2 = C/x</span>。AG：<span class=\"chem\">x^2 + y^2 = Cx</span>；与えられた式そのものには点を与えない。",
        // EN: M1: completes the square: <span class="chem">(x - C/2)^2 + y^2 = (C/2)^2</span>.
        "M1：平方完成している：<span class=\"chem\">(x - C/2)^2 + y^2 = (C/2)^2</span>。",
        // EN: A1: circles, centre <span class="chem">(C/2, 0)</span>, radius <span class="chem">C/2</span> (through the origin).
        "A1：円、中心 <span class=\"chem\">(C/2, 0)</span>、半径 <span class=\"chem\">C/2</span>（原点を通る）。",
        // EN: M1: multiplies the two gradient expressions.
        "M1：二つの傾きの式を掛け合わせている。",
        // EN: A1: product <span class="chem">= -1</span>, so the curves are perpendicular where they cross.
        "A1：積 <span class=\"chem\">= -1</span>、よって曲線は交わる点で垂直である。",
        // EN: M1: substitutes <span class="chem">y = vx</span> into the second DE.
        "M1：<span class=\"chem\">y = vx</span> を第二の微分方程式に代入している。",
        // EN: A1: <span class="chem">x(dv/dx) = v(1 + v^2)/(1 - v^2)</span>.
        "A1：<span class=\"chem\">x(dv/dx) = v(1 + v^2)/(1 - v^2)</span>。",
        // EN: M1: separates and uses the given partial fractions.
        "M1：変数を分離し、与えられた部分分数分解を用いている。",
        // EN: A1: <span class="chem">ln v - ln(1 + v^2) = ln x + c</span>.
        "A1：<span class=\"chem\">ln v - ln(1 + v^2) = ln x + c</span>。",
        // EN: M1: removes logarithms: <span class="chem">v/(1 + v^2) = Ax</span>.
        "M1：対数を外している：<span class=\"chem\">v/(1 + v^2) = Ax</span>。",
        // EN: A1: substitutes <span class="chem">v = y/x</span> and simplifies to <span class="chem">xy/(x^2 + y^2) = Ax</span>. AG: <span class="chem">x^2 + y^2 = Ky</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">v = y/x</span> を代入して <span class=\"chem\">xy/(x^2 + y^2) = Ax</span> に簡単にしている。AG：<span class=\"chem\">x^2 + y^2 = Ky</span>；与えられた式そのものには点を与えない。",
        // EN: A1: <span class="chem">C = 10/3</span>.
        "A1：<span class=\"chem\">C = 10/3</span>。",
        // EN: A1: <span class="chem">K = 10</span>.
        "A1：<span class=\"chem\">K = 10</span>。",
        // EN: A1: gradients <span class="chem">-4/3</span> and <span class="chem">3/4</span>, product <span class="chem">-1</span>.
        "A1：傾き <span class=\"chem\">-4/3</span> と <span class=\"chem\">3/4</span>、積 <span class=\"chem\">-1</span>。",
      ],
    },

    // ── t5-4-q059 · short · challenge · AHL · AHL 5.18 · 18 marks
    "t5-4-q059": {
      // EN: <p><strong>A family of linear differential equations.</strong> For each integer <span class="chem">n &gt;= 0</span>, let <span class="chem">y_n(x)</span> be the solution of <span class="chem">dy/dx + y = x^n</span> with <span class="chem">y(0) = 0</span>.</p><p>(a) Use an integrating factor to find <span class="chem">y_0(x)</span> and <span class="chem">y_1(x)</span>. <strong>[4 marks]</strong></p><p>(b) Show that <span class="chem">y_2(x) = x^2 - 2x + 2 - 2e^{-x}</span>. <strong>[3 marks]</strong></p><p>(c) By differentiating the equation <span class="chem">dy_n/dx + y_n = x^n</span>, show that, for <span class="chem">n &gt;= 1</span>, the function <span class="chem">z = (1/n)(dy_n/dx)</span> satisfies <span class="chem">dz/dx + z = x^{n - 1}</span> with <span class="chem">z(0) = 0</span>. Deduce that <span class="chem">dy_n/dx = n y_{n - 1}</span>, and verify this for <span class="chem">n = 2</span>. <strong>[3 marks]</strong></p><p>(d) Conjecture an expression for <span class="chem">y_3(x)</span>, and verify it by substituting into the differential equation. <strong>[4 marks]</strong></p><p>(e) Explain why <span class="chem">y_n(x) = e^{-x} int_0^x t^n e^t dt</span>. Use this and your GDC to find <span class="chem">y_3(1)</span>, and check that it agrees with your answer to (d). <strong>[2 marks]</strong></p><p>(f) Show that <span class="chem">0 &lt; y_n(1) &lt; 1/(n + 1)</span> for <span class="chem">n &gt;= 1</span>. <strong>[2 marks]</strong></p>
      stem: "<p><strong>線形微分方程式の族。</strong>各整数 <span class=\"chem\">n &gt;= 0</span> に対して、<span class=\"chem\">y_n(x)</span> を <span class=\"chem\">y(0) = 0</span> のもとでの <span class=\"chem\">dy/dx + y = x^n</span> の解とする。</p><p>(a) 積分因子を用いて <span class=\"chem\">y_0(x)</span> と <span class=\"chem\">y_1(x)</span> を求めなさい (Find)。<strong>[4 marks]</strong></p><p>(b) <span class=\"chem\">y_2(x) = x^2 - 2x + 2 - 2e^{-x}</span> であることを示しなさい (Show that)。<strong>[3 marks]</strong></p><p>(c) 方程式 <span class=\"chem\">dy_n/dx + y_n = x^n</span> を微分することにより、<span class=\"chem\">n &gt;= 1</span> に対して関数 <span class=\"chem\">z = (1/n)(dy_n/dx)</span> が <span class=\"chem\">z(0) = 0</span> のもとで <span class=\"chem\">dz/dx + z = x^{n - 1}</span> を満たすことを示しなさい。<span class=\"chem\">dy_n/dx = n y_{n - 1}</span> であることを導き (Deduce)、<span class=\"chem\">n = 2</span> についてこれを確かめなさい。<strong>[3 marks]</strong></p><p>(d) <span class=\"chem\">y_3(x)</span> の式を予想し (Conjecture)、微分方程式に代入してそれを確かめなさい。<strong>[4 marks]</strong></p><p>(e) <span class=\"chem\">y_n(x) = e^{-x} int_0^x t^n e^t dt</span> である理由を説明しなさい (Explain)。これと GDC を用いて <span class=\"chem\">y_3(1)</span> を求め、(d) の答えと一致することを確認しなさい。<strong>[2 marks]</strong></p><p>(f) <span class=\"chem\">n &gt;= 1</span> に対して <span class=\"chem\">0 &lt; y_n(1) &lt; 1/(n + 1)</span> であることを示しなさい。<strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: one method (integrating factor) for a whole family of DEs; the aim is to spot the pattern and prove it, not to solve each one from scratch.
        "解読：一つの方法（積分因子）で微分方程式の族全体を扱います。目的は規則性を見つけて証明することで、一つずつ最初から解くことではありません。",
        // EN: The integrating factor is always <span class="chem">e^x</span>. For (d), use <span class="chem">y_3' = 3y_2</span> from (c): integrate <span class="chem">3y_2</span> and choose the constant so that <span class="chem">y_3(0) = 0</span>.
        "積分因子は常に <span class=\"chem\">e^x</span> です。(d) では (c) の <span class=\"chem\">y_3' = 3y_2</span> を使います：<span class=\"chem\">3y_2</span> を積分し、<span class=\"chem\">y_3(0) = 0</span> となるように定数を選びます。",
        // EN: For (f), compare <span class="chem">t^n e^t</span> with <span class="chem">t^n e</span> on <span class="chem">0 &lt; t &lt; 1</span>.
        "(f) では、<span class=\"chem\">0 &lt; t &lt; 1</span> 上で <span class=\"chem\">t^n e^t</span> と <span class=\"chem\">t^n e</span> を比べます。",
      ],
      // EN: <p>(a) IF <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^n e^x</span>. For <span class="chem">n = 0</span>: <span class="chem">y e^x = e^x + C</span>, <span class="chem">C = -1</span>, so <span class="chem">y_0 = 1 - e^{-x}</span>. For <span class="chem">n = 1</span>: by parts <span class="chem">int x e^x dx = (x - 1)e^x + C</span>, <span class="chem">C = 1</span>, so <span class="chem">y_1 = x - 1 + e^{-x}</span>.</p><p>(b) <span class="chem">int x^2 e^x dx = x^2 e^x - 2 int x e^x dx = (x^2 - 2x + 2)e^x + C</span>; <span class="chem">y(0) = 0 => C = -2</span>, so <span class="chem">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>.</p><p>(c) Differentiating: <span class="chem">y_n'' + y_n' = n x^{n - 1}</span>; dividing by <span class="chem">n</span>: <span class="chem">z' + z = x^{n - 1}</span>. From the DE at <span class="chem">x = 0</span>: <span class="chem">y_n'(0) = 0^n - y_n(0) = 0</span> for <span class="chem">n &gt;= 1</span>, so <span class="chem">z(0) = 0</span>. Then <span class="chem">z</span> solves the same initial value problem as <span class="chem">y_{n - 1}</span>, so <span class="chem">z = y_{n - 1}</span> and <span class="chem">y_n' = n y_{n - 1}</span>. Check: <span class="chem">y_2' = 2x - 2 + 2e^{-x} = 2y_1</span>.</p><p>(d) Pattern: <span class="chem">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>. Then <span class="chem">y_3' = 3x^2 - 6x + 6 - 6e^{-x}</span>, and <span class="chem">y_3' + y_3 = x^3</span>; <span class="chem">y_3(0) = -6 + 6 = 0</span>. (Also <span class="chem">y_3' = 3y_2</span>.)</p><p>(e) Multiplying by the IF <span class="chem">e^x</span> and integrating <span class="chem">d/dt(y e^t) = t^n e^t</span> from 0 to <span class="chem">x</span> with <span class="chem">y(0) = 0</span> gives <span class="chem">y_n(x) e^x = int_0^x t^n e^t dt</span>. GDC: <span class="chem">e^{-1} int_0^1 t^3 e^t dt = 0.207277</span>, and (d) gives <span class="chem">y_3(1) = 1 - 3 + 6 - 6 + 6e^{-1} = 6/e - 2 = 0.207277</span>.</p><p>(f) On <span class="chem">0 &lt; t &lt; 1</span>, <span class="chem">0 &lt; t^n e^t &lt; e t^n</span>. So <span class="chem">0 &lt; y_n(1) = e^{-1} int_0^1 t^n e^t dt &lt; e^{-1} × e int_0^1 t^n dt = 1/(n + 1)</span>.</p>
      answer: "<p>(a) 積分因子 <span class=\"chem\">e^x</span>：<span class=\"chem\">d/dx(y e^x) = x^n e^x</span>。<span class=\"chem\">n = 0</span> のとき：<span class=\"chem\">y e^x = e^x + C</span>、<span class=\"chem\">C = -1</span> なので <span class=\"chem\">y_0 = 1 - e^{-x}</span>。<span class=\"chem\">n = 1</span> のとき：部分積分法により <span class=\"chem\">int x e^x dx = (x - 1)e^x + C</span>、<span class=\"chem\">C = 1</span> なので <span class=\"chem\">y_1 = x - 1 + e^{-x}</span>。</p><p>(b) <span class=\"chem\">int x^2 e^x dx = x^2 e^x - 2 int x e^x dx = (x^2 - 2x + 2)e^x + C</span>；<span class=\"chem\">y(0) = 0 => C = -2</span> なので <span class=\"chem\">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>。</p><p>(c) 微分して：<span class=\"chem\">y_n'' + y_n' = n x^{n - 1}</span>。<span class=\"chem\">n</span> で割って：<span class=\"chem\">z' + z = x^{n - 1}</span>。<span class=\"chem\">x = 0</span> での微分方程式から：<span class=\"chem\">n &gt;= 1</span> に対して <span class=\"chem\">y_n'(0) = 0^n - y_n(0) = 0</span> なので <span class=\"chem\">z(0) = 0</span>。すると <span class=\"chem\">z</span> は <span class=\"chem\">y_{n - 1}</span> と同じ初期値問題の解なので、<span class=\"chem\">z = y_{n - 1}</span> および <span class=\"chem\">y_n' = n y_{n - 1}</span>。確認：<span class=\"chem\">y_2' = 2x - 2 + 2e^{-x} = 2y_1</span>。</p><p>(d) 規則性：<span class=\"chem\">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>。すると <span class=\"chem\">y_3' = 3x^2 - 6x + 6 - 6e^{-x}</span>、そして <span class=\"chem\">y_3' + y_3 = x^3</span>；<span class=\"chem\">y_3(0) = -6 + 6 = 0</span>。（また <span class=\"chem\">y_3' = 3y_2</span>。）</p><p>(e) 積分因子 <span class=\"chem\">e^x</span> を掛け、<span class=\"chem\">y(0) = 0</span> を用いて <span class=\"chem\">d/dt(y e^t) = t^n e^t</span> を 0 から <span class=\"chem\">x</span> まで積分すると <span class=\"chem\">y_n(x) e^x = int_0^x t^n e^t dt</span>。GDC：<span class=\"chem\">e^{-1} int_0^1 t^3 e^t dt = 0.207277</span>、そして (d) からは <span class=\"chem\">y_3(1) = 1 - 3 + 6 - 6 + 6e^{-1} = 6/e - 2 = 0.207277</span>。</p><p>(f) <span class=\"chem\">0 &lt; t &lt; 1</span> 上では <span class=\"chem\">0 &lt; t^n e^t &lt; e t^n</span>。よって <span class=\"chem\">0 &lt; y_n(1) = e^{-1} int_0^1 t^n e^t dt &lt; e^{-1} × e int_0^1 t^n dt = 1/(n + 1)</span>。</p>",
      markscheme: [
        // EN: M1: integrating factor <span class="chem">e^x</span>: <span class="chem">d/dx(y e^x) = x^n e^x</span>.
        "M1：積分因子 <span class=\"chem\">e^x</span>：<span class=\"chem\">d/dx(y e^x) = x^n e^x</span>。",
        // EN: A1: <span class="chem">y_0 = 1 - e^{-x}</span>.
        "A1：<span class=\"chem\">y_0 = 1 - e^{-x}</span>。",
        // EN: M1: integration by parts for <span class="chem">int x e^x dx</span>.
        "M1：<span class=\"chem\">int x e^x dx</span> に部分積分法を用いている。",
        // EN: A1: <span class="chem">y_1 = x - 1 + e^{-x}</span>.
        "A1：<span class=\"chem\">y_1 = x - 1 + e^{-x}</span>。",
        // EN: M1: integration by parts on <span class="chem">int x^2 e^x dx</span>.
        "M1：<span class=\"chem\">int x^2 e^x dx</span> に部分積分法を用いている。",
        // EN: A1: <span class="chem">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>.
        "A1：<span class=\"chem\">int x^2 e^x dx = (x^2 - 2x + 2)e^x + C</span>。",
        // EN: A1: <span class="chem">C = -2</span>. AG: <span class="chem">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">C = -2</span>。AG：<span class=\"chem\">y_2 = x^2 - 2x + 2 - 2e^{-x}</span>；与えられた式そのものには点を与えない。",
        // EN: M1: differentiates the DE and divides by <span class="chem">n</span>.
        "M1：微分方程式を微分し、<span class=\"chem\">n</span> で割っている。",
        // EN: R1: <span class="chem">z(0) = (1/n)(0^n - y_n(0)) = 0</span>, so <span class="chem">z</span> and <span class="chem">y_{n - 1}</span> solve the same initial value problem.
        "R1：<span class=\"chem\">z(0) = (1/n)(0^n - y_n(0)) = 0</span> なので、<span class=\"chem\">z</span> と <span class=\"chem\">y_{n - 1}</span> は同じ初期値問題の解である。",
        // EN: A1: verifies <span class="chem">y_2' = 2x - 2 + 2e^{-x} = 2y_1</span>.
        "A1：<span class=\"chem\">y_2' = 2x - 2 + 2e^{-x} = 2y_1</span> を確かめている。",
        // EN: A1: conjecture <span class="chem">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>.
        "A1：予想 <span class=\"chem\">y_3 = x^3 - 3x^2 + 6x - 6 + 6e^{-x}</span>。",
        // EN: M1: differentiates the conjecture.
        "M1：予想した式を微分している。",
        // EN: A1: shows <span class="chem">y_3' + y_3 = x^3</span>.
        "A1：<span class=\"chem\">y_3' + y_3 = x^3</span> を示している。",
        // EN: A1: checks <span class="chem">y_3(0) = 0</span>.
        "A1：<span class=\"chem\">y_3(0) = 0</span> を確認している。",
        // EN: R1: integrating <span class="chem">d/dt(y e^t) = t^n e^t</span> from 0 to <span class="chem">x</span> with <span class="chem">y(0) = 0</span>.
        "R1：<span class=\"chem\">y(0) = 0</span> を用いて <span class=\"chem\">d/dt(y e^t) = t^n e^t</span> を 0 から <span class=\"chem\">x</span> まで積分する。",
        // EN: A1: <span class="chem">y_3(1) = 0.207277</span> from both methods (<span class="chem">6/e - 2</span>).
        "A1：両方の方法で <span class=\"chem\">y_3(1) = 0.207277</span>（<span class=\"chem\">6/e - 2</span>）。",
        // EN: M1: uses <span class="chem">0 &lt; e^t &lt; e</span> on <span class="chem">(0, 1)</span>.
        "M1：<span class=\"chem\">(0, 1)</span> 上で <span class=\"chem\">0 &lt; e^t &lt; e</span> を用いている。",
        // EN: A1: <span class="chem">int_0^1 t^n dt = 1/(n + 1)</span>, giving the bounds.
        "A1：<span class=\"chem\">int_0^1 t^n dt = 1/(n + 1)</span>、これにより上下の評価が得られる。",
      ],
    },

  }
});
