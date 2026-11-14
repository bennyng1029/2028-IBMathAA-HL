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

    // ── t5-4-q003 · mcq · foundation · AHL · AHL 5.18 · 3 marks
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
      // EN: <p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">f(x) = sin(2x)</span>. (You can enter an exact fraction like <span class="mono">-4/3</span>.)</p>
      stem: "<p><span class=\"chem\">f(x) = sin(2x)</span> のマクローリン級数展開における <span class=\"chem\">x^3</span> の正確な係数を求めなさい (Find)。（<span class=\"mono\">-4/3</span> のような正確な分数で入力できます。）</p>",
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

    // ── t5-4-q010 · mcq · exam · AHL · AHL 5.19 · 3 marks
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
        // EN (option D): The signs in <span class="chem">ln(1 + u) = u - u^2/2 + u^3/3 - ...</span> alternate starting with <span class=\"chem">+u</span>, so the <span class="chem">x^2</span> term is negative.
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
      // EN: <p>Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">g(x) = e^{2x} sin(x)</span>. (You can enter an exact fraction like <span class="mono">11/6</span>.)</p>
      stem: "<p><span class=\"chem\">g(x) = e^{2x} sin(x)</span> のマクローリン級数展開における <span class=\"chem\">x^3</span> の正確な係数を求めなさい (Find)。（<span class=\"mono\">11/6</span> のような正確な分数で入力できます。）</p>",
      hints: [
        // EN: Write <span class="chem">e^{2x} = 1 + 2x + 2x^2 + (4/3)x^3 + ...</span> and <span class="chem">sin x = x - x^3/6 + ...</span>.
        "<span class=\"chem\">e^{2x} = 1 + 2x + 2x^2 + (4/3)x^3 + ...</span> と <span class=\"chem\">sin x = x - x^3/6 + ...</span> を書き出します。",
        // EN: Multiply the two polynomials and collect all terms that give <span class="chem">x^3</span>.
        "2 つの多項式を掛け合わせ、<span class=\"chem\">x^3</span> になる項をすべて集めます。",
      ],
      // EN: <p><span class="chem">e^{2x} sin x = (1 + 2x + 2x^2 + ...)(x - x^3/6 + ...)</span>. The <span class="chem">x^3</span> coefficient is <span class="chem">1(-1/6) + 2(1) = 11/6 ≈ 1.83</span>.</p>
      solution: "<p><span class=\"chem\">e^{2x} sin x = (1 + 2x + 2x^2 + ...)(x - x^3/6 + ...)</span> より、<span class=\"chem\">x^3</span> の係数は <span class=\"chem\">1(-1/6) + 2(1) = 11/6 ≈ 1.83</span> です。</p>",
    },

    // ── t5-4-q013 · mcq · exam · AHL · AHL 5.19 · 3 marks
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
        // EN: M1 A1: computes <span class="chem">I(x) = e^{-2 ln x} = x^{-2}</span> (or <span class="chem">1/x^2</span>).
        "M1 A1：<span class=\"chem\">I(x) = e^{-2 ln x} = x^{-2}</span>（または <span class=\"chem\">1/x^2</span>）を計算している。",
        // EN: M1: writes <span class="chem">d/dx(x^{-2} y) = cos x</span>.
        "M1：<span class=\"chem\">d/dx(x^{-2} y) = cos x</span> と書いている。",
        // EN: A1: integrates to <span class=\"chem">x^{-2} y = sin x + C</span> (must include <span class=\"chem">+ C</span>).
        "A1：積分して <span class=\"chem\">x^{-2} y = sin x + C</span> を得ている（<span class=\"chem\">+ C</span> が必須）。",
        // EN: M1 A1: substitutes <span class="chem">x = pi, y = 0</span> to find <span class="chem">C = 0</span> and concludes <span class="chem">y = x^2 sin x</span>.
        "M1 A1：<span class=\"chem\">x = pi, y = 0</span> を代入して <span class=\"chem\">C = 0</span> を求め、<span class=\"chem\">y = x^2 sin x</span> と結論している。",
      ],
    },

    // ── t5-4-q015 · numeric · challenge · AHL · AHL 5.19 · 5 marks
    "t5-4-q015": {
      // EN: <p>Let <span class="chem">y(x)</span> be the solution to <span class="chem">dy/dx = y^2 - x</span> with <span class="chem">y(0) = 1</span>. Find the exact coefficient of <span class="chem">x^3</span> in the Maclaurin series expansion of <span class="chem">y(x)</span>. (You can enter an exact fraction like <span class="mono">2/3</span>.)</p>
      stem: "<p><span class=\"chem\">y(x)</span> を <span class=\"chem\">y(0) = 1</span> を満たす <span class=\"chem\">dy/dx = y^2 - x</span> の解とする。<span class=\"chem\">y(x)</span> のマクローリン級数展開における <span class=\"chem\">x^3</span> の正確な係数を求めなさい (Find)。（<span class=\"mono\">2/3</span> のような正確な分数で入力できます。）</p>",
      hints: [
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
      // EN: <p>Solve the homogeneous differential equation <span class="chem">dy/dx = (x^2 + y^2) / (2xy)</span> (<span class="chem">x &gt; 0, y &gt; 0</span>) given <span class="chem">y(1) = 2</span>, and find the exact value of <span class="chem">y(4)</span>. (You can enter <span class="mono">2*sqrt(7)</span> or a 3 s.f. decimal.)</p>
      stem: "<p><span class=\"chem\">y(1) = 2</span> が与えられたとき、同次形の微分方程式 <span class=\"chem\">dy/dx = (x^2 + y^2) / (2xy)</span>（<span class=\"chem\">x &gt; 0, y &gt; 0</span>）を解き、<span class=\"chem\">y(4)</span> の正確な値を求めなさい (find)。（<span class=\"mono\">2*sqrt(7)</span> または有効数字 3 桁の小数で入力できます。）</p>",
      hints: [
        // EN: Substitute <span class="chem">y = vx</span>: <span class="chem">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>.
        "<span class=\"chem\">y = vx</span> を代入します：<span class=\"chem\">v + x(dv/dx) = (1 + v^2)/(2v) => x(dv/dx) = (1 - v^2)/(2v)</span>。",
        // EN: Separate variables: <span class="chem">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>.
        "変数を分離します：<span class=\"chem\">int 2v / (1 - v^2) dv = int (1/x) dx => -ln|1 - v^2| = ln x + C</span>。",
      ],
      // EN: <p>Setting <span class="chem">y = vx</span> gives <span class="chem">x(dv/dx) = (1 - v^2)/(2v)</span>, so <span class="chem">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>. At <span class="chem">(1, 2)</span>, <span class="chem">v = 2 => A = 3</span>, giving <span class="chem">y^2 = x^2 + 3x</span>. Hence <span class="chem">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span>.</p>
      solution: "<p><span class=\"chem\">y = vx</span> とおくと <span class=\"chem\">x(dv/dx) = (1 - v^2)/(2v)</span> となり、<span class=\"chem\">int 2v/(v^2 - 1) dv = int (-1/x) dx => ln|v^2 - 1| = -ln x + C => v^2 - 1 = A/x</span>。<span class=\"chem\">(1, 2)</span> では <span class=\"chem\">v = 2 => A = 3</span> なので <span class=\"chem\">y^2 = x^2 + 3x</span>。よって <span class=\"chem\">y(4) = sqrt(16 + 12) = 2 sqrt(7) ≈ 5.29</span> です。</p>",
    },

    // ── t5-4-q017 · mcq · challenge · AHL · AHL 5.19 · 5 marks
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
        // EN: In part (a), integrating <span class="chem">d/dt(y(t) e^{t^2}) = e^{t^2}</span> from <span class="chem">t = 0</span> to <span class="chem">t = x</span> immediately incorporates <span class="chem">y(0) = 0</span>.
        "(a) では <span class=\"chem\">d/dt(y(t) e^{t^2}) = e^{t^2}</span> を <span class=\"chem\">t = 0</span> から <span class=\"chem\">t = x</span> まで積分すると、<span class=\"chem\">y(0) = 0</span> をそのまま組み込めます。",
        // EN: In part (b), you can either integrate the series for <span class="chem">e^{t^2}</span> and multiply by <span class="chem">e^{-x^2}</span>, or differentiate <span class="chem">y' = 1 - 2xy</span> repeatedly at <span class="chem">x = 0</span>.
        "(b) では <span class=\"chem\">e^{t^2}</span> の級数を積分して <span class=\"chem\">e^{-x^2}</span> を掛けるか、または <span class=\"chem\">y' = 1 - 2xy</span> を <span class=\"chem\">x = 0</span> で繰り返し微分します。",
      ],
      // EN: <p>(a) The integrating factor is <span class="chem">I(x) = e^{int 2x dx} = e^{x^2}</span>. Multiplying gives <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>. Integrating from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span> gives <span class="chem">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>.</p><p>(b) <span class="chem">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>. Multiplying by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> gives <span class="chem">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>.</p>
      answer: "<p>(a) 積分因子は <span class=\"chem\">I(x) = e^{int 2x dx} = e^{x^2}</span>。両辺に掛けると <span class=\"chem\">d/dx(y e^{x^2}) = e^{x^2}</span>。<span class=\"chem\">y(0) = 0</span> を用いて <span class=\"chem\">0</span> から <span class=\"chem\">x</span> まで積分すると <span class=\"chem\">y(x) e^{x^2} = int_0^x e^{t^2} dt => y(x) = e^{-x^2} int_0^x e^{t^2} dt</span>。</p><p>(b) <span class=\"chem\">int_0^x e^{t^2} dt = int_0^x (1 + t^2 + t^4/2 + ...) dt = x + x^3/3 + x^5/10 + ...</span>。これに <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> を掛けると <span class=\"chem\">y(x) = x + (1/3 - 1)x^3 + (1/10 - 1/3 + 1/2)x^5 + ... = x - (2/3)x^3 + (4/15)x^5 + ...</span>。</p>",
      markscheme: [
        // EN: M1 A1: computes integrating factor <span class="chem">I(x) = e^{x^2}</span> and writes <span class="chem">d/dx(y e^{x^2}) = e^{x^2}</span>.
        "M1 A1：積分因子 <span class=\"chem\">I(x) = e^{x^2}</span> を計算し、<span class=\"chem\">d/dx(y e^{x^2}) = e^{x^2}</span> と書いている。",
        // EN: A1: integrates from <span class="chem">0</span> to <span class="chem">x</span> using <span class="chem">y(0) = 0</span> to obtain the given integral expression (AG).
        "A1：<span class=\"chem\">y(0) = 0</span> を用いて <span class=\"chem\">0</span> から <span class=\"chem\">x</span> まで積分し、与えられた積分の式を導いている (AG)。",
        // EN: M1: expands <span class="chem">e^{t^2} = 1 + t^2 + t^4/2 + ...</span> and integrates term by term to <span class="chem">x + x^3/3 + x^5/10</span> (or differentiates DE implicitly up to <span class="chem">y^{(5)}(0)</span>).
        "M1：<span class=\"chem\">e^{t^2} = 1 + t^2 + t^4/2 + ...</span> を展開して項別積分し <span class=\"chem\">x + x^3/3 + x^5/10</span> を得ている（または微分方程式を <span class=\"chem\">y^{(5)}(0)</span> まで陰関数微分している）。",
        // EN: M1: multiplies by <span class="chem">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> (or substitutes derivatives into Maclaurin formula).
        "M1：<span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2 - ...</span> を掛けている（または導関数をマクローリン展開の公式に代入している）。",
        // EN: A1 A1 A1: obtains <span class="chem">x - (2/3)x^3 + (4/15)x^5</span>.
        "A1 A1 A1：<span class=\"chem\">x - (2/3)x^3 + (4/15)x^5</span> を得ている。",
      ],
    },

  }
});
