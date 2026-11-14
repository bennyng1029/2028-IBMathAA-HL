/* t5-2.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't5-2.q', {
  questions: {

    // ── t5-2-q001 · mcq · foundation · SL · SL 5.10 · 2 marks
    "t5-2-q001": {
      // EN: <p>Find <span class="chem">int (6x^2 - 4e^{2x} + cos(3x)) dx</span>.</p>
      stem: "<p><span class=\"chem\">int (6x^2 - 4e^{2x} + cos(3x)) dx</span> を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span>
        "<span class=\"chem\">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span>",
        // EN: <span class="chem">2x^3 - 8e^{2x} - 3 sin(3x) + C</span>
        "<span class=\"chem\">2x^3 - 8e^{2x} - 3 sin(3x) + C</span>",
        // EN: <span class="chem">2x^3 - 2e^{2x} - (1/3) sin(3x) + C</span>
        "<span class=\"chem\">2x^3 - 2e^{2x} - (1/3) sin(3x) + C</span>",
        // EN: <span class="chem">12x - 2e^{2x} + (1/3) sin(3x) + C</span>
        "<span class=\"chem\">12x - 2e^{2x} + (1/3) sin(3x) + C</span>",
      ],
      hints: [
        // EN: Integrate term by term using <span class="chem">int x^n dx = x^{n+1}/(n+1)</span>, <span class="chem">int e^{ax} dx = (1/a)e^{ax}</span>, and <span class="chem">int cos(ax) dx = (1/a)sin(ax)</span>.
        "<span class=\"chem\">int x^n dx = x^{n+1}/(n+1)</span>、<span class=\"chem\">int e^{ax} dx = (1/a)e^{ax}</span>、<span class=\"chem\">int cos(ax) dx = (1/a)sin(ax)</span> を使って項ごとに積分します。",
        // EN: Check the sign of <span class="chem">int cos(3x) dx</span> by differentiating your answer: <span class="chem">d/dx ((1/3) sin(3x)) = +cos(3x)</span>.
        "答えを微分して <span class=\"chem\">int cos(3x) dx</span> の符号を確かめましょう：<span class=\"chem\">d/dx ((1/3) sin(3x)) = +cos(3x)</span>。",
      ],
      // EN: <p>Integrating term by term: <span class="chem">int 6x^2 dx = 6(x^3/3) = 2x^3</span>, <span class="chem">int (-4e^{2x}) dx = -(4/2)e^{2x} = -2e^{2x}</span>, and <span class="chem">int cos(3x) dx = (1/3) sin(3x)</span>. Including the constant of integration gives <span class="chem">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span>.</p>
      solution: "<p>項ごとに積分すると：<span class=\"chem\">int 6x^2 dx = 6(x^3/3) = 2x^3</span>、<span class=\"chem\">int (-4e^{2x}) dx = -(4/2)e^{2x} = -2e^{2x}</span>、<span class=\"chem\">int cos(3x) dx = (1/3) sin(3x)</span>。積分定数を加えると <span class=\"chem\">2x^3 - 2e^{2x} + (1/3) sin(3x) + C</span> となります。</p>",
      misconception: {
        // EN (option B): You multiplied by the inner coefficients (2 and 3) instead of dividing by them, and also flipped the sign of the cosine integral.
        "1": "内側の係数（2 と 3）で割るのではなく掛けてしまい、さらに cos の積分の符号も逆にしてしまいました。",
        // EN (option C): The integral of cos(kx) is +(1/k) sin(kx) + C, not −(1/k) sin(kx) + C (it is sin(kx) that integrates to −(1/k) cos(kx)).
        "2": "cos(kx) の積分は −(1/k) sin(kx) + C ではなく +(1/k) sin(kx) + C です（−(1/k) cos(kx) になるのは sin(kx) の積分です）。",
        // EN (option D): You differentiated 6x² to get 12x instead of integrating 6x² to get 2x³.
        "3": "6x² を積分して 2x³ にするのではなく、6x² を微分して 12x にしてしまいました。",
      },
    },

    // ── t5-2-q002 · numeric · foundation · SL · SL 5.5 · 4 marks
    "t5-2-q002": {
      // EN: <p>A curve <span class="chem">y = f(x)</span> (<span class="chem">x &gt; 0</span>) has gradient <span class="chem">f'(x) = 3x^2 - 4 / x^2</span> and passes through the point <span class="chem">(1, 7)</span>. Find the value of <span class="chem">f(2)</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = f(x)</span>（<span class=\"chem\">x &gt; 0</span>）の傾きが <span class=\"chem\">f'(x) = 3x^2 - 4 / x^2</span> であり、点 <span class=\"chem\">(1, 7)</span> を通る。<span class=\"chem\">f(2)</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Rewrite <span class="chem">-4 / x^2</span> as <span class="chem">-4x^{-2}</span> before integrating.
        "積分する前に <span class=\"chem\">-4 / x^2</span> を <span class=\"chem\">-4x^{-2}</span> と書き換えます。",
        // EN: Find <span class="chem">f(x) = x^3 + 4/x + C</span>, use <span class="chem">f(1) = 7</span> to solve for <span class="chem">C</span>, then evaluate <span class="chem">f(2)</span>.
        "<span class=\"chem\">f(x) = x^3 + 4/x + C</span> を求め、<span class=\"chem\">f(1) = 7</span> から <span class=\"chem\">C</span> を求めたあと <span class=\"chem\">f(2)</span> を計算します。",
      ],
      // EN: <p>Rewrite <span class="chem">f'(x) = 3x^2 - 4x^{-2}</span>. Integrating gives <span class="chem">f(x) = x^3 - 4(x^{-1}/(-1)) + C = x^3 + 4/x + C</span>. Using <span class="chem">f(1) = 7</span>: <span class="chem">1^3 + 4/1 + C = 7 =&gt; C = 2</span>. Therefore <span class="chem">f(2) = 2^3 + 4/2 + 2 = 8 + 2 + 2 = 12</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 3x^2 - 4x^{-2}</span> と書き換えます。積分すると <span class=\"chem\">f(x) = x^3 - 4(x^{-1}/(-1)) + C = x^3 + 4/x + C</span>。<span class=\"chem\">f(1) = 7</span> を使うと <span class=\"chem\">1^3 + 4/1 + C = 7 =&gt; C = 2</span>。よって <span class=\"chem\">f(2) = 2^3 + 4/2 + 2 = 8 + 2 + 2 = 12</span> です。</p>",
    },

    // ── t5-2-q003 · mcq · foundation · SL · SL 5.10 · 2 marks
    "t5-2-q003": {
      // EN: <p>Find <span class="chem">int (8x / (2x^2 + 3)) dx</span>.</p>
      stem: "<p><span class=\"chem\">int (8x / (2x^2 + 3)) dx</span> を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">2 ln(2x^2 + 3) + C</span>
        "<span class=\"chem\">2 ln(2x^2 + 3) + C</span>",
        // EN: <span class="chem">8 ln(2x^2 + 3) + C</span>
        "<span class=\"chem\">8 ln(2x^2 + 3) + C</span>",
        // EN: <span class="chem">4x^2 / (2x^2 + 3) + C</span>
        "<span class=\"chem\">4x^2 / (2x^2 + 3) + C</span>",
        // EN: <span class="chem">2 / (2x^2 + 3)^2 + C</span>
        "<span class=\"chem\">2 / (2x^2 + 3)^2 + C</span>",
      ],
      hints: [
        // EN: Let <span class="chem">u = 2x^2 + 3</span>, so <span class="chem">du = 4x dx</span>.
        "<span class=\"chem\">u = 2x^2 + 3</span> とおくと、<span class=\"chem\">du = 4x dx</span> です。",
        // EN: Rewrite <span class="chem">8x dx</span> as <span class="chem">2(4x dx) = 2 du</span> and integrate <span class="chem">int (2/u) du</span>.
        "<span class=\"chem\">8x dx</span> を <span class=\"chem\">2(4x dx) = 2 du</span> と書き換え、<span class=\"chem\">int (2/u) du</span> を積分します。",
      ],
      // EN: <p>Let <span class="chem">u = 2x^2 + 3</span>, so <span class="chem">du = 4x dx</span>. Since <span class="chem">8x dx = 2 du</span>, the integral becomes <span class="chem">int (2/u) du = 2 ln|u| + C = 2 ln(2x^2 + 3) + C</span> (since <span class="chem">2x^2 + 3 &gt; 0</span>).</p>
      solution: "<p><span class=\"chem\">u = 2x^2 + 3</span> とおくと <span class=\"chem\">du = 4x dx</span> です。<span class=\"chem\">8x dx = 2 du</span> なので、積分は <span class=\"chem\">int (2/u) du = 2 ln|u| + C = 2 ln(2x^2 + 3) + C</span> となります（<span class=\"chem\">2x^2 + 3 &gt; 0</span> より）。</p>",
      misconception: {
        // EN (option B): The derivative of the denominator 2x² + 3 is 4x, not 8x, so 8x = 2(4x) gives 2 ln(2x² + 3), not 8 ln(2x² + 3).
        "1": "分母 2x² + 3 の微分は 8x ではなく 4x なので、8x = 2(4x) より 8 ln(2x² + 3) ではなく 2 ln(2x² + 3) になります。",
        // EN (option C): You cannot integrate the numerator 8x while leaving the denominator unchanged.
        "2": "分母をそのままにして分子の 8x だけを積分することはできません。",
        // EN (option D): You used a power-rule form instead of recognizing the g'(x)/g(x) logarithmic pattern.
        "3": "g'(x)/g(x) の対数パターンを見抜かずにべき乗の積分公式を使ってしまいました。",
      },
    },

    // ── t5-2-q004 · numeric · foundation · SL · SL 5.10, 5.11 · 3 marks
    "t5-2-q004": {
      // EN: <p>Evaluate the definite integral <span class="chem">int_0^{ln 3} 6e^{2x} dx</span>.</p>
      stem: "<p>定積分 <span class=\"chem\">int_0^{ln 3} 6e^{2x} dx</span> の値を求めなさい (Evaluate)。</p>",
      hints: [
        // EN: An antiderivative of <span class="chem">6e^{2x}</span> is <span class="chem">(6/2)e^{2x} = 3e^{2x}</span>.
        "<span class=\"chem\">6e^{2x}</span> の原始関数の 1 つは <span class=\"chem\">(6/2)e^{2x} = 3e^{2x}</span> です。",
        // EN: Recall that <span class="chem">e^{2 ln 3} = e^{ln(3^2)} = 9</span> and <span class="chem">e^0 = 1</span>.
        "<span class=\"chem\">e^{2 ln 3} = e^{ln(3^2)} = 9</span> および <span class=\"chem\">e^0 = 1</span> を思い出しましょう。",
      ],
      // EN: <p><span class="chem">int_0^{ln 3} 6e^{2x} dx = [3e^{2x}]_0^{ln 3} = 3e^{2 ln 3} - 3e^0 = 3(9) - 3(1) = 27 - 3 = 24</span>.</p>
      solution: "<p><span class=\"chem\">int_0^{ln 3} 6e^{2x} dx = [3e^{2x}]_0^{ln 3} = 3e^{2 ln 3} - 3e^0 = 3(9) - 3(1) = 27 - 3 = 24</span>。</p>",
    },

    // ── t5-2-q005 · numeric · exam · SL · SL 5.11 · 5 marks
    "t5-2-q005": {
      // EN: <p>Given that <span class="chem">int_1^5 f(x) dx = 14</span> and <span class="chem">int_3^5 f(x) dx = 6</span>, find the value of <span class="chem">int_1^3 (3f(x) + 2) dx</span>.</p>
      stem: "<p><span class=\"chem\">int_1^5 f(x) dx = 14</span> かつ <span class=\"chem\">int_3^5 f(x) dx = 6</span> のとき、<span class=\"chem\">int_1^3 (3f(x) + 2) dx</span> の値を求めなさい (find)。</p>",
      hints: [
        // EN: Use additivity <span class="chem">int_1^3 f(x) dx + int_3^5 f(x) dx = int_1^5 f(x) dx</span> to find <span class="chem">int_1^3 f(x) dx</span>.
        "加法性 <span class=\"chem\">int_1^3 f(x) dx + int_3^5 f(x) dx = int_1^5 f(x) dx</span> を使って <span class=\"chem\">int_1^3 f(x) dx</span> を求めます。",
        // EN: Split the target integral: <span class="chem">3 int_1^3 f(x) dx + int_1^3 2 dx</span>, remembering <span class="chem">int_1^3 2 dx = 2(3 - 1)</span>.
        "求める積分を <span class=\"chem\">3 int_1^3 f(x) dx + int_1^3 2 dx</span> に分け、<span class=\"chem\">int_1^3 2 dx = 2(3 - 1)</span> に注意します。",
      ],
      // EN: <p>By additivity, <span class="chem">int_1^3 f(x) dx = int_1^5 f(x) dx - int_3^5 f(x) dx = 14 - 6 = 8</span>. By linearity, <span class="chem">int_1^3 (3f(x) + 2) dx = 3 int_1^3 f(x) dx + int_1^3 2 dx = 3(8) + 2(3 - 1) = 24 + 4 = 28</span>.</p>
      solution: "<p>加法性より <span class=\"chem\">int_1^3 f(x) dx = int_1^5 f(x) dx - int_3^5 f(x) dx = 14 - 6 = 8</span>。線形性より <span class=\"chem\">int_1^3 (3f(x) + 2) dx = 3 int_1^3 f(x) dx + int_1^3 2 dx = 3(8) + 2(3 - 1) = 24 + 4 = 28</span> です。</p>",
    },

    // ── t5-2-q006 · mcq · exam · SL · SL 5.10, 5.11 · 2 marks
    "t5-2-q006": {
      // EN: <p>Evaluate <span class="chem">int_1^e ((ln x)^2 / x) dx</span>.</p>
      stem: "<p><span class=\"chem\">int_1^e ((ln x)^2 / x) dx</span> の値を求めなさい (Evaluate)。</p>",
      options: [
        // EN: <span class="chem">1/3</span>
        "<span class=\"chem\">1/3</span>",
        // EN: <span class="chem">1</span>
        "<span class=\"chem\">1</span>",
        // EN: <span class="chem">1/3 - e^{-1}</span>
        "<span class=\"chem\">1/3 - e^{-1}</span>",
        // EN: <span class="chem">2/e</span>
        "<span class=\"chem\">2/e</span>",
      ],
      hints: [
        // EN: Let <span class="chem">u = ln x</span>, so <span class="chem">du = (1/x) dx</span>.
        "<span class=\"chem\">u = ln x</span> とおくと、<span class=\"chem\">du = (1/x) dx</span> です。",
        // EN: Change the limits: when <span class="chem">x = 1</span>, <span class="chem">u = ln 1 = 0</span>; when <span class="chem">x = e</span>, <span class="chem">u = ln e = 1</span>.
        "積分区間を変換します：<span class=\"chem\">x = 1</span> のとき <span class=\"chem\">u = ln 1 = 0</span>、<span class=\"chem\">x = e</span> のとき <span class=\"chem\">u = ln e = 1</span>。",
      ],
      // EN: <p>Let <span class="chem">u = ln x</span>, so <span class="chem">du = (1/x) dx</span>. The limits become <span class="chem">u = 0</span> to <span class="chem">u = 1</span>. Thus <span class="chem">int_0^1 u^2 du = [u^3 / 3]_0^1 = 1/3 - 0 = 1/3</span>.</p>
      solution: "<p><span class=\"chem\">u = ln x</span> とおくと <span class=\"chem\">du = (1/x) dx</span> であり、積分区間は <span class=\"chem\">u = 0</span> から <span class=\"chem\">u = 1</span> になります。よって <span class=\"chem\">int_0^1 u^2 du = [u^3 / 3]_0^1 = 1/3 - 0 = 1/3</span> です。</p>",
      misconception: {
        // EN (option B): You forgot to divide by the new exponent 3 when integrating u² du = u³/3.
        "1": "u² du = u³/3 と積分するときに新しい指数 3 で割るのを忘れています。",
        // EN (option C): After substituting u = ln x, the limits change to u(1) = ln 1 = 0 and u(e) = ln e = 1; there is no e⁻¹ term.
        "2": "u = ln x と置換すると積分区間は u(1) = ln 1 = 0 と u(e) = ln e = 1 に変わるので、e⁻¹ の項は出てきません。",
        // EN (option D): You differentiated (ln x)² to get (2 ln x)/x and evaluated it at x = e, instead of integrating.
        "3": "積分するのではなく、(ln x)² を微分して (2 ln x)/x とし、それを x = e で計算してしまいました。",
      },
    },

    // ── t5-2-q007 · multi · exam · SL · SL 5.11 · 5 marks
    "t5-2-q007": {
      // EN: <p>A continuous function <span class="chem">y = f(x)</span> satisfies <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 2]</span> and <span class="chem">f(x) &lt;= 0</span> on <span class="chem">[2, 5]</span>. The geometric area between the curve and the <span class="chem">x</span>-axis on <span class="chem">[0, 2]</span> is <span class="chem">5</span>, and the geometric area between the curve and the <span class="chem">x</span>-axis on <span class="chem">[2, 5]</span> is <span class="chem">8</span>. Select <strong>all</strong> true statements.</p>
      stem: "<p>連続関数 <span class=\"chem\">y = f(x)</span> は <span class=\"chem\">[0, 2]</span> 上で <span class=\"chem\">f(x) &gt;= 0</span>、<span class=\"chem\">[2, 5]</span> 上で <span class=\"chem\">f(x) &lt;= 0</span> を満たす。<span class=\"chem\">[0, 2]</span> 上で曲線と <span class=\"chem\">x</span> 軸の間の図形の面積は <span class=\"chem\">5</span>、<span class=\"chem\">[2, 5]</span> 上で曲線と <span class=\"chem\">x</span> 軸の間の図形の面積は <span class=\"chem\">8</span> である。正しい記述を<strong>すべて</strong>選びなさい。</p>",
      options: [
        // EN: <span class="chem">int_0^5 f(x) dx = -3</span>
        "<span class=\"chem\">int_0^5 f(x) dx = -3</span>",
        // EN: <span class="chem">int_0^5 |f(x)| dx = 13</span>
        "<span class=\"chem\">int_0^5 |f(x)| dx = 13</span>",
        // EN: <span class="chem">int_5^2 f(x) dx = 8</span>
        "<span class=\"chem\">int_5^2 f(x) dx = 8</span>",
        // EN: <span class="chem">int_0^5 f(x) dx = 13</span>
        "<span class=\"chem\">int_0^5 f(x) dx = 13</span>",
      ],
      hints: [
        // EN: On <span class="chem">[2, 5]</span>, <span class="chem">f(x) &lt;= 0</span>, so <span class="chem">int_2^5 f(x) dx = -8</span>.
        "<span class=\"chem\">[2, 5]</span> 上では <span class=\"chem\">f(x) &lt;= 0</span> なので、<span class=\"chem\">int_2^5 f(x) dx = -8</span> です。",
        // EN: Reversing the limits of integration flips the sign: <span class="chem">int_5^2 f(x) dx = -int_2^5 f(x) dx</span>.
        "積分の下端と上端を入れ替えると符号が反転します：<span class=\"chem\">int_5^2 f(x) dx = -int_2^5 f(x) dx</span>。",
      ],
      // EN: <p>Since <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 2]</span>, <span class="chem">int_0^2 f(x) dx = +5</span>. Since <span class="chem">f(x) &lt;= 0</span> on <span class="chem">[2, 5]</span>, <span class="chem">int_2^5 f(x) dx = -8</span>. Therefore <span class="chem">int_0^5 f(x) dx = 5 + (-8) = -3</span>, <span class="chem">int_0^5 |f(x)| dx = 5 + 8 = 13</span>, and <span class="chem">int_5^2 f(x) dx = -int_2^5 f(x) dx = -(-8) = 8</span>.</p>
      solution: "<p><span class=\"chem\">[0, 2]</span> 上で <span class=\"chem\">f(x) &gt;= 0</span> なので <span class=\"chem\">int_0^2 f(x) dx = +5</span>、<span class=\"chem\">[2, 5]</span> 上で <span class=\"chem\">f(x) &lt;= 0</span> なので <span class=\"chem\">int_2^5 f(x) dx = -8</span> です。よって <span class=\"chem\">int_0^5 f(x) dx = 5 + (-8) = -3</span>、<span class=\"chem\">int_0^5 |f(x)| dx = 5 + 8 = 13</span>、<span class=\"chem\">int_5^2 f(x) dx = -int_2^5 f(x) dx = -(-8) = 8</span> となります。</p>",
      misconception: {
        // EN (option D): 13 is the total geometric area ∫ |f(x)| dx. Because f(x) ≤ 0 on [2, 5], that region contributes −8 to the signed integral ∫ f(x) dx, giving 5 − 8 = −3.
        "3": "13 は図形の面積の合計 ∫ |f(x)| dx です。[2, 5] 上では f(x) ≤ 0 なので、符号付き積分 ∫ f(x) dx には −8 として寄与し、5 − 8 = −3 になります。",
      },
    },

    // ── t5-2-q008 · numeric · exam · SL · SL 5.11 · 6 marks
    "t5-2-q008": {
      // EN: <p>Find the total geometric area enclosed between the curve <span class="chem">y = 3x^2 - 6x</span>, the <span class="chem">x</span>-axis, and the vertical lines <span class="chem">x = 0</span> and <span class="chem">x = 3</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = 3x^2 - 6x</span>、<span class=\"chem\">x</span> 軸、および 2 直線 <span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 3</span> で囲まれた図形の総面積を求めなさい (Find)。</p>",
      hints: [
        // EN: First solve <span class="chem">3x^2 - 6x = 0</span> to see where the curve crosses the <span class="chem">x</span>-axis inside <span class="chem">[0, 3]</span>.
        "まず <span class=\"chem\">3x^2 - 6x = 0</span> を解いて、<span class=\"chem\">[0, 3]</span> 内で曲線が <span class=\"chem\">x</span> 軸を横切る位置を確かめます。",
        // EN: The curve is below the <span class="chem">x</span>-axis on <span class="chem">[0, 2]</span> and above it on <span class="chem">[2, 3]</span>, so compute <span class="chem">|int_0^2 (3x^2 - 6x) dx| + int_2^3 (3x^2 - 6x) dx</span>.
        "曲線は <span class=\"chem\">[0, 2]</span> で <span class=\"chem\">x</span> 軸より下、<span class=\"chem\">[2, 3]</span> で上にあるので、<span class=\"chem\">|int_0^2 (3x^2 - 6x) dx| + int_2^3 (3x^2 - 6x) dx</span> を計算します。",
      ],
      // EN: <p>Setting <span class="chem">3x(x - 2) = 0</span> gives <span class="chem">x = 0</span> and <span class="chem">x = 2</span>. On <span class="chem">[0, 2]</span>, <span class="chem">y &lt;= 0</span>: <span class="chem">int_0^2 (3x^2 - 6x) dx = [x^3 - 3x^2]_0^2 = 8 - 12 = -4</span>, giving area <span class="chem">4</span>. On <span class="chem">[2, 3]</span>, <span class="chem">y &gt;= 0</span>: <span class="chem">[x^3 - 3x^2]_2^3 = (27 - 27) - (8 - 12) = 4</span>. Total enclosed area <span class="chem">= 4 + 4 = 8</span>.</p>
      solution: "<p><span class=\"chem\">3x(x - 2) = 0</span> より <span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 2</span>。<span class=\"chem\">[0, 2]</span> 上では <span class=\"chem\">y &lt;= 0</span> なので <span class=\"chem\">int_0^2 (3x^2 - 6x) dx = [x^3 - 3x^2]_0^2 = 8 - 12 = -4</span> となり面積は <span class=\"chem\">4</span>。<span class=\"chem\">[2, 3]</span> 上では <span class=\"chem\">y &gt;= 0</span> なので <span class=\"chem\">[x^3 - 3x^2]_2^3 = (27 - 27) - (8 - 12) = 4</span>。総面積は <span class=\"chem\">= 4 + 4 = 8</span> です。</p>",
    },

    // ── t5-2-q009 · numeric · exam · SL · SL 5.11 · 6 marks
    "t5-2-q009": {
      // EN: <p>Find the exact area of the finite region enclosed between the parabola <span class="chem">y = 8 - x^2</span> and the line <span class="chem">y = 2x</span>.</p>
      stem: "<p>放物線 <span class=\"chem\">y = 8 - x^2</span> と直線 <span class=\"chem\">y = 2x</span> で囲まれた有限領域の正確な面積を求めなさい (Find)。</p>",
      hints: [
        // EN: Solve <span class="chem">8 - x^2 = 2x</span> to find the intersection <span class="chem">x</span>-coordinates.
        "<span class=\"chem\">8 - x^2 = 2x</span> を解いて交点の <span class=\"chem\">x</span> 座標を求めます。",
        // EN: On <span class="chem">[-4, 2]</span>, <span class="chem">8 - x^2 &gt;= 2x</span>, so evaluate <span class="chem">int_{-4}^2 (8 - 2x - x^2) dx</span>.
        "<span class=\"chem\">[-4, 2]</span> 上では <span class=\"chem\">8 - x^2 &gt;= 2x</span> なので、<span class=\"chem\">int_{-4}^2 (8 - 2x - x^2) dx</span> を計算します。",
      ],
      // EN: <p>Equating the curves: <span class="chem">x^2 + 2x - 8 = 0 =&gt; (x + 4)(x - 2) = 0</span>, so <span class="chem">x = -4</span> and <span class="chem">x = 2</span>. Since <span class="chem">8 - x^2 &gt;= 2x</span> on <span class="chem">[-4, 2]</span>, the area is <span class="chem">int_{-4}^2 (8 - 2x - x^2) dx = [8x - x^2 - x^3/3]_{-4}^2 = (16 - 4 - 8/3) - (-32 - 16 + 64/3) = (12 - 8/3) - (-48 + 64/3) = 60 - 72/3 = 36</span>.</p>
      solution: "<p>2 曲線を等置すると <span class=\"chem\">x^2 + 2x - 8 = 0 =&gt; (x + 4)(x - 2) = 0</span> より <span class=\"chem\">x = -4</span> と <span class=\"chem\">x = 2</span>。<span class=\"chem\">[-4, 2]</span> 上で <span class=\"chem\">8 - x^2 &gt;= 2x</span> なので、面積は <span class=\"chem\">int_{-4}^2 (8 - 2x - x^2) dx = [8x - x^2 - x^3/3]_{-4}^2 = (16 - 4 - 8/3) - (-32 - 16 + 64/3) = (12 - 8/3) - (-48 + 64/3) = 60 - 72/3 = 36</span> です。</p>",
    },

    // ── t5-2-q010 · order · exam · SL · SL 5.9 · 4 marks
    "t5-2-q010": {
      // EN: <p>Arrange the steps in the correct logical order to find the total distance travelled by a particle with velocity <span class="chem">v(t) = 6t - 12</span> <span class="unit">m s-1</span> over the time interval <span class="chem">0 &lt;= t &lt;= 5</span>.</p>
      stem: "<p>速度 <span class=\"chem\">v(t) = 6t - 12</span> <span class=\"unit\">m s-1</span> で動く粒子が時間区間 <span class=\"chem\">0 &lt;= t &lt;= 5</span> に進んだ総移動距離を求める手順を正しい論理的順序に並べ替えなさい。</p>",
      options: [
        // EN: Solve <span class="chem">v(t) = 6t - 12 = 0</span> to find the turning time <span class="chem">t = 2</span> <span class="unit">s</span> inside <span class="chem">(0, 5)</span>.
        "<span class=\"chem\">v(t) = 6t - 12 = 0</span> を解き、<span class=\"chem\">(0, 5)</span> 内の折り返し時刻 <span class=\"chem\">t = 2</span> <span class=\"unit\">s</span> を求める。",
        // EN: Split the total distance integral at <span class="chem">t = 2</span>: <span class="chem">d = |int_0^2 (6t - 12) dt| + |int_2^5 (6t - 12) dt|</span>.
        "総移動距離の積分を <span class=\"chem\">t = 2</span> で分ける：<span class=\"chem\">d = |int_0^2 (6t - 12) dt| + |int_2^5 (6t - 12) dt|</span>。",
        // EN: Evaluate each definite integral using <span class="chem">[3t^2 - 12t]</span> to get <span class="chem">-12</span> on <span class="chem">[0, 2]</span> and <span class="chem">+27</span> on <span class="chem">[2, 5]</span>.
        "<span class=\"chem\">[3t^2 - 12t]</span> を使って各定積分を計算し、<span class=\"chem\">[0, 2]</span> で <span class=\"chem\">-12</span>、<span class=\"chem\">[2, 5]</span> で <span class=\"chem\">+27</span> を得る。",
        // EN: Sum the absolute values of both legs to obtain total distance <span class="chem">d = |-12| + 27 = 39</span> <span class="unit">m</span>.
        "両区間の絶対値を足し合わせ、総移動距離 <span class=\"chem\">d = |-12| + 27 = 39</span> <span class=\"unit\">m</span> を得る。",
      ],
      hints: [
        // EN: Before integrating for distance, you must check whether <span class="chem">v(t)</span> changes sign inside <span class="chem">(0, 5)</span>.
        "距離を求めるために積分する前に、<span class=\"chem\">(0, 5)</span> 内で <span class=\"chem\">v(t)</span> の符号が変わるか確認しなければなりません。",
        // EN: Once you split at <span class="chem">t = 2</span>, compute the signed integral of each leg and take absolute values at the end.
        "<span class=\"chem\">t = 2</span> で分割したら、各区間の符号付き積分を計算し、最後に絶対値をとります。",
      ],
      // EN: <p>To find total distance on Paper 1: (1) solve <span class="chem">v(t) = 0</span> to locate turning times, (2) split <span class="chem">int_0^5 |v(t)| dt</span> at <span class="chem">t = 2</span>, (3) evaluate each sub-integral, and (4) sum their absolute values: <span class="chem">12 + 27 = 39</span> <span class="unit">m</span>.</p>
      solution: "<p>Paper 1 で総移動距離を求めるには、(1) <span class=\"chem\">v(t) = 0</span> を解いて折り返し時刻を見つけ、(2) <span class=\"chem\">t = 2</span> で <span class=\"chem\">int_0^5 |v(t)| dt</span> を分割し、(3) 各部分積分を計算し、(4) それらの絶対値を足します：<span class=\"chem\">12 + 27 = 39</span> <span class=\"unit\">m</span>。</p>",
    },

    // ── t5-2-q011 · numeric · exam · SL · SL 5.9, 5.11 · 5 marks
    "t5-2-q011": {
      // EN: <p>A particle moves along a straight line with velocity <span class="chem">v(t) = 4 sin(t) - t + 1</span> <span class="unit">m s-1</span> for <span class="chem">0 &lt;= t &lt;= 4</span> (where <span class="chem">t</span> is in seconds). Using your GDC, calculate the <strong>total distance travelled</strong> by the particle from <span class="chem">t = 0</span> to <span class="chem">t = 4</span>, correct to 3 significant figures.</p>
      stem: "<p>粒子が <span class=\"chem\">0 &lt;= t &lt;= 4</span>（<span class=\"chem\">t</span> は秒）の間、速度 <span class=\"chem\">v(t) = 4 sin(t) - t + 1</span> <span class=\"unit\">m s-1</span> で直線上を動く。GDC を使って <span class=\"chem\">t = 0</span> から <span class=\"chem\">t = 4</span> までに粒子が進んだ<strong>総移動距離</strong>を有効数字 3 桁で計算しなさい (calculate)。</p>",
      hints: [
        // EN: Total distance travelled is <span class="chem">d = int_0^4 |v(t)| dt</span>, not <span class="chem">int_0^4 v(t) dt</span>.
        "総移動距離は <span class=\"chem\">int_0^4 v(t) dt</span> ではなく <span class=\"chem\">d = int_0^4 |v(t)| dt</span> です。",
        // EN: Make sure your GDC is in <strong>radian mode</strong> and use its numerical integration command (TI: fnInt; Casio: ∫dx) on <span class="chem">|4 sin(t) - t + 1|</span> from <span class="chem">t = 0</span> to <span class="chem">t = 4</span>.
        "GDC が<strong>ラジアン（弧度法）モード</strong>であることを確認し、数値積分コマンド（TI：fnInt、Casio：∫dx）で <span class=\"chem\">|4 sin(t) - t + 1|</span> を <span class=\"chem\">t = 0</span> から <span class=\"chem\">t = 4</span> まで積分します。",
      ],
      // EN: <p>In radian mode on a GDC, <span class="chem">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>, which rounds to <span class="chem">10.7</span> <span class="unit">m</span> (3 s.f.). (Note: the net displacement is only <span class="chem">int_0^4 v(t) dt ≈ 2.61</span> <span class="unit">m</span> because <span class="chem">v(t)</span> turns negative around <span class="chem">t ≈ 2.70</span> <span class="unit">s</span>.)</p>
      solution: "<p>GDC のラジアンモードで <span class=\"chem\">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span> となり、有効数字 3 桁に丸めると <span class=\"chem\">10.7</span> <span class=\"unit\">m</span> です。（なお、<span class=\"chem\">v(t)</span> が <span class=\"chem\">t ≈ 2.70</span> <span class=\"unit\">s</span> 付近で負になるため、純変位は <span class=\"chem\">int_0^4 v(t) dt ≈ 2.61</span> <span class=\"unit\">m</span> にすぎません。）</p>",
    },

    // ── t5-2-q012 · mcq · exam · SL · SL 5.9 · 2 marks
    "t5-2-q012": {
      // EN: <p>A particle moves along a straight line with displacement <span class="chem">s(t) = t^3 - 6t^2 + 9t</span> <span class="unit">m</span> for <span class="chem">t &gt;= 0</span>. During which time intervals is the particle <strong>slowing down</strong>?</p>
      stem: "<p>粒子が <span class=\"chem\">t &gt;= 0</span> で変位 <span class=\"chem\">s(t) = t^3 - 6t^2 + 9t</span> <span class=\"unit\">m</span> に従って直線上を動く。この粒子が<strong>減速している</strong>時間区間はどれですか？</p>",
      options: [
        // EN: <span class="chem">0 &lt; t &lt; 1</span> and <span class="chem">2 &lt; t &lt; 3</span>
        "<span class=\"chem\">0 &lt; t &lt; 1</span> と <span class=\"chem\">2 &lt; t &lt; 3</span>",
        // EN: <span class="chem">0 &lt; t &lt; 2</span> only
        "<span class=\"chem\">0 &lt; t &lt; 2</span> のみ",
        // EN: <span class="chem">1 &lt; t &lt; 3</span> only
        "<span class=\"chem\">1 &lt; t &lt; 3</span> のみ",
        // EN: <span class="chem">1 &lt; t &lt; 2</span> and <span class="chem">t &gt; 3</span>
        "<span class=\"chem\">1 &lt; t &lt; 2</span> と <span class=\"chem\">t &gt; 3</span>",
      ],
      hints: [
        // EN: Find both <span class="chem">v(t) = s'(t) = 3(t - 1)(t - 3)</span> and <span class="chem">a(t) = v'(t) = 6(t - 2)</span>.
        "<span class=\"chem\">v(t) = s'(t) = 3(t - 1)(t - 3)</span> と <span class=\"chem\">a(t) = v'(t) = 6(t - 2)</span> の両方を求めます。",
        // EN: A particle is slowing down when <span class="chem">v(t)</span> and <span class="chem">a(t)</span> have <strong>opposite signs</strong> (<span class="chem">v(t) * a(t) &lt; 0</span>).
        "粒子が減速するのは <span class=\"chem\">v(t)</span> と <span class=\"chem\">a(t)</span> が<strong>反対の符号</strong>（<span class=\"chem\">v(t) * a(t) &lt; 0</span>）をもつときです。",
      ],
      // EN: <p>We have <span class="chem">v(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)</span> and <span class="chem">a(t) = 6t - 12 = 6(t - 2)</span>. Testing the four intervals:<br>• <span class="chem">0 &lt; t &lt; 1</span>: <span class="chem">v &gt; 0, a &lt; 0</span> (opposite signs → slowing down)<br>• <span class="chem">1 &lt; t &lt; 2</span>: <span class="chem">v &lt; 0, a &lt; 0</span> (same sign → speeding up)<br>• <span class="chem">2 &lt; t &lt; 3</span>: <span class="chem">v &lt; 0, a &gt; 0</span> (opposite signs → slowing down)<br>• <span class="chem">t &gt; 3</span>: <span class="chem">v &gt; 0, a &gt; 0</span> (same sign → speeding up)<br>Thus the particle is slowing down for <span class="chem">0 &lt; t &lt; 1</span> and <span class="chem">2 &lt; t &lt; 3</span>.</p>
      solution: "<p><span class=\"chem\">v(t) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)</span> かつ <span class=\"chem\">a(t) = 6t - 12 = 6(t - 2)</span> です。4 つの区間を調べると：<br>• <span class=\"chem\">0 &lt; t &lt; 1</span>：<span class=\"chem\">v &gt; 0, a &lt; 0</span>（異符号 → 減速）<br>• <span class=\"chem\">1 &lt; t &lt; 2</span>：<span class=\"chem\">v &lt; 0, a &lt; 0</span>（同符号 → 加速）<br>• <span class=\"chem\">2 &lt; t &lt; 3</span>：<span class=\"chem\">v &lt; 0, a &gt; 0</span>（異符号 → 減速）<br>• <span class=\"chem\">t &gt; 3</span>：<span class=\"chem\">v &gt; 0, a &gt; 0</span>（同符号 → 加速）<br>よって粒子が減速しているのは <span class=\"chem\">0 &lt; t &lt; 1</span> と <span class=\"chem\">2 &lt; t &lt; 3</span> です。</p>",
      misconception: {
        // EN (option B): a(t) = 6(t − 2) < 0 on 0 < t < 2, but negative acceleration only means slowing down when velocity v(t) is positive; on 1 < t < 2 both v(t) and a(t) are negative, so the particle is speeding up!
        "1": "0 < t < 2 で a(t) = 6(t − 2) < 0 ですが、負の加速度が減速を意味するのは速度 v(t) が正のときだけです；1 < t < 2 では v(t) も a(t) も負なので、粒子は加速しています！",
        // EN (option C): v(t) < 0 on 1 < t < 3, which only tells you the particle is moving in the negative direction, not whether it is slowing down.
        "2": "1 < t < 3 で v(t) < 0 というのは負の向きに動いていることしか示さず、減速しているかどうかはわかりません。",
        // EN (option D): On 1 < t < 2 (both negative) and t > 3 (both positive), v(t) and a(t) have the same sign, so the particle is speeding up.
        "3": "1 < t < 2（両方負）と t > 3（両方正）では v(t) と a(t) が同じ符号なので、粒子は加速しています。",
      },
    },

    // ── t5-2-q013 · short · exam · SL · SL 5.6, 5.10, 5.11 · 6 marks
    "t5-2-q013": {
      // EN: <p>(a) Differentiate <span class="chem">F(x) = x e^{2x}</span> with respect to <span class="chem">x</span>. <strong>[2 marks]</strong><br>(b) Hence find <span class="chem">int x e^{2x} dx</span>, and evaluate <span class="chem">int_0^1 x e^{2x} dx</span> in exact form. <strong>[4 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">F(x) = x e^{2x}</span> を <span class=\"chem\">x</span> について微分しなさい。 <strong>[2 marks]</strong><br>(b) これを用いて (Hence) <span class=\"chem\">int x e^{2x} dx</span> を求め (find)、<span class=\"chem\">int_0^1 x e^{2x} dx</span> の正確な値を求めなさい (evaluate)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: For part (a), use the product rule with <span class="chem">u = x</span> and <span class="chem">v = e^{2x}</span>.
        "(a) では、<span class=\"chem\">u = x</span> と <span class=\"chem\">v = e^{2x}</span> として積の微分法を使います。",
        // EN: For part (b), “Hence” means integrate both sides of <span class="chem">d/dx(x e^{2x}) = e^{2x} + 2x e^{2x}</span> and isolate <span class="chem">int x e^{2x} dx</span>.
        "(b) では、“Hence” なので <span class=\"chem\">d/dx(x e^{2x}) = e^{2x} + 2x e^{2x}</span> の両辺を積分して <span class=\"chem\">int x e^{2x} dx</span> について解きます。",
      ],
      // EN: <p>(a) By the product rule, <span class="chem">F'(x) = e^{2x} + 2x e^{2x}</span>.<br>(b) Integrating both sides gives <span class="chem">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx = (1/2)e^{2x} + 2 int x e^{2x} dx</span> (up to a constant). Solving for the integral gives <span class="chem">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>. Evaluating from <span class="chem">0</span> to <span class="chem">1</span>: <span class="chem">[((2x - 1)/4)e^{2x}]_0^1 = (1/4)e^2 - (-1/4)e^0 = (e^2 + 1)/4</span>.</p>
      solution: "<p>(a) 積の微分法より <span class=\"chem\">F'(x) = e^{2x} + 2x e^{2x}</span>。<br>(b) 両辺を積分すると <span class=\"chem\">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx = (1/2)e^{2x} + 2 int x e^{2x} dx</span>（定数を除く）。積分について解くと <span class=\"chem\">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>。<span class=\"chem\">0</span> から <span class=\"chem\">1</span> まで定積分すると <span class=\"chem\">[((2x - 1)/4)e^{2x}]_0^1 = (1/4)e^2 - (-1/4)e^0 = (e^2 + 1)/4</span>。</p>",
      // EN: <p>(a) <span class="chem">F'(x) = (2x + 1)e^{2x}</span><br>(b) <span class="chem">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>; <span class="chem">int_0^1 x e^{2x} dx = (e^2 + 1) / 4</span></p>
      answer: "<p>(a) <span class=\"chem\">F'(x) = (2x + 1)e^{2x}</span><br>(b) <span class=\"chem\">int x e^{2x} dx = (1/2)x e^{2x} - (1/4)e^{2x} + C</span>；<span class=\"chem\">int_0^1 x e^{2x} dx = (e^2 + 1) / 4</span></p>",
      markscheme: [
        // EN: M1: Apply the product rule with <span class="chem">u = x</span> and <span class="chem">v = e^{2x}</span>.
        "M1：<span class=\"chem\">u = x</span>、<span class=\"chem\">v = e^{2x}</span> として積の微分法を適用する。",
        // EN: A1: <span class="chem">F'(x) = 1 * e^{2x} + x(2e^{2x}) = e^{2x} + 2x e^{2x}</span>.
        "A1：<span class=\"chem\">F'(x) = 1 * e^{2x} + x(2e^{2x}) = e^{2x} + 2x e^{2x}</span>。",
        // EN: M1: Integrate both sides of part (a): <span class="chem">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx</span>.
        "M1：(a) の両辺を積分する：<span class=\"chem\">x e^{2x} = int e^{2x} dx + 2 int x e^{2x} dx</span>。",
        // EN: A1: Rearrange to obtain <span class="chem">int x e^{2x} dx = (1/2) x e^{2x} - (1/4) e^{2x} + C</span>.
        "A1：整理して <span class=\"chem\">int x e^{2x} dx = (1/2) x e^{2x} - (1/4) e^{2x} + C</span> を得る。",
        // EN: M1: Substitute limits <span class="chem">0</span> and <span class="chem">1</span>: <span class="chem">((1/2)e^2 - (1/4)e^2) - (0 - 1/4)</span>.
        "M1：<span class=\"chem\">0</span> と <span class=\"chem\">1</span> を代入する：<span class=\"chem\">((1/2)e^2 - (1/4)e^2) - (0 - 1/4)</span>。",
        // EN: A1: <span class="chem">= (e^2 + 1) / 4</span>.
        "A1：<span class=\"chem\">= (e^2 + 1) / 4</span>。",
      ],
    },

    // ── t5-2-q014 · numeric · challenge · SL · SL 5.5, 5.11 · 6 marks
    "t5-2-q014": {
      // EN: <p>The finite region enclosed between the curve <span class="chem">y = k x (4 - x)</span> (where <span class="chem">k &gt; 0</span>) and the <span class="chem">x</span>-axis has an area of <span class="chem">32</span> square units. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = k x (4 - x)</span>（<span class=\"chem\">k &gt; 0</span>）と <span class=\"chem\">x</span> 軸で囲まれた有限領域の面積が <span class=\"chem\">32</span> 平方単位である。<span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the unknown <span class="chem">k</span> is inside the integrand. Find where the curve meets the <span class="chem">x</span>-axis, write the area as an expression in <span class="chem">k</span>, then set it equal to <span class="chem">32</span>.
        "解読：未知数 <span class=\"chem\">k</span> は被積分関数の中にあります。曲線と <span class=\"chem\">x</span> 軸の交点を求め、面積を <span class=\"chem\">k</span> の式で表し、それを <span class=\"chem\">32</span> とおきましょう。",
        // EN: The curve crosses the <span class="chem">x</span>-axis at <span class="chem">x = 0</span> and <span class="chem">x = 4</span>, and lies above the <span class="chem">x</span>-axis on <span class="chem">[0, 4]</span> since <span class="chem">k &gt; 0</span>.
        "曲線は <span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 4</span> で <span class=\"chem\">x</span> 軸と交わり、<span class=\"chem\">k &gt; 0</span> より <span class=\"chem\">[0, 4]</span> 上で <span class=\"chem\">x</span> 軸より上側にあります。",
        // EN: Set <span class="chem">k int_0^4 (4x - x^2) dx = 32</span> and solve for <span class="chem">k</span>.
        "<span class=\"chem\">k int_0^4 (4x - x^2) dx = 32</span> とおいて <span class=\"chem\">k</span> について解きます。",
      ],
      // EN: <p>Since <span class="chem">k &gt; 0</span>, <span class="chem">y &gt;= 0</span> on <span class="chem">[0, 4]</span>. The area is <span class="chem">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>. Setting <span class="chem">(32/3)k = 32</span> gives <span class="chem">k = 3</span>.</p>
      solution: "<p><span class=\"chem\">k &gt; 0</span> より <span class=\"chem\">[0, 4]</span> 上で <span class=\"chem\">y &gt;= 0</span> です。面積は <span class=\"chem\">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>。<span class=\"chem\">(32/3)k = 32</span> とおくと <span class=\"chem\">k = 3</span> です。</p>",
    },

    // ── t5-2-q015 · mcq · challenge · SL · SL 5.10, 5.11 · 2 marks
    "t5-2-q015": {
      // EN: <p>Given that <span class="chem">int_2^6 f(x) dx = 10</span>, find the value of <span class="chem">int_0^4 (f(x + 2) + 3) dx</span>.</p>
      stem: "<p><span class=\"chem\">int_2^6 f(x) dx = 10</span> のとき、<span class=\"chem\">int_0^4 (f(x + 2) + 3) dx</span> の値を求めなさい (find)。</p>",
      options: [
        // EN: <span class="chem">22</span>
        "<span class=\"chem\">22</span>",
        // EN: <span class="chem">13</span>
        "<span class=\"chem\">13</span>",
        // EN: <span class="chem">16</span>
        "<span class=\"chem\">16</span>",
        // EN: <span class="chem">10</span>
        "<span class=\"chem\">10</span>",
      ],
      hints: [
        // EN: Decode: you do not know <span class="chem">f</span>, so the only route is to turn <span class="chem">int_0^4 f(x + 2) dx</span> into the given integral <span class="chem">int_2^6 f(x) dx</span> by shifting the variable.
        "解読：<span class=\"chem\">f</span> は分からないので、変数をずらして <span class=\"chem\">int_0^4 f(x + 2) dx</span> を与えられた積分 <span class=\"chem\">int_2^6 f(x) dx</span> に書き換えるしか方法はありません。",
        // EN: Split the integral into <span class="chem">int_0^4 f(x + 2) dx + int_0^4 3 dx</span>.
        "積分を <span class=\"chem\">int_0^4 f(x + 2) dx + int_0^4 3 dx</span> に分けます。",
        // EN: For the first integral, substitute <span class="chem">u = x + 2</span> (<span class="chem">du = dx</span>) and update the limits from <span class="chem">x = 0, 4</span> to <span class="chem">u = 2, 6</span>.
        "最初の積分では <span class=\"chem\">u = x + 2</span>（<span class=\"chem\">du = dx</span>）と置換し、積分区間を <span class=\"chem\">x = 0, 4</span> から <span class=\"chem\">u = 2, 6</span> に更新します。",
      ],
      // EN: <p>Using linearity, <span class="chem">int_0^4 (f(x + 2) + 3) dx = int_0^4 f(x + 2) dx + int_0^4 3 dx</span>. Let <span class="chem">u = x + 2</span> (<span class="chem">du = dx</span>): when <span class="chem">x = 0</span>, <span class="chem">u = 2</span>; when <span class="chem">x = 4</span>, <span class="chem">u = 6</span>. So <span class="chem">int_0^4 f(x + 2) dx = int_2^6 f(u) du = 10</span>. Adding <span class="chem">int_0^4 3 dx = 3(4 - 0) = 12</span> gives <span class="chem">10 + 12 = 22</span>.</p>
      solution: "<p>線形性より <span class=\"chem\">int_0^4 (f(x + 2) + 3) dx = int_0^4 f(x + 2) dx + int_0^4 3 dx</span>。<span class=\"chem\">u = x + 2</span>（<span class=\"chem\">du = dx</span>）とおくと、<span class=\"chem\">x = 0</span> で <span class=\"chem\">u = 2</span>、<span class=\"chem\">x = 4</span> で <span class=\"chem\">u = 6</span> なので <span class=\"chem\">int_0^4 f(x + 2) dx = int_2^6 f(u) du = 10</span>。<span class=\"chem\">int_0^4 3 dx = 3(4 - 0) = 12</span> を足すと <span class=\"chem\">10 + 12 = 22</span> です。</p>",
      misconception: {
        // EN (option B): Integrating the constant 3 from 0 to 4 gives 3(4 − 0) = 12, not just 3.
        "1": "定数 3 を 0 から 4 まで積分すると 3 ではなく 3(4 − 0) = 12 になります。",
        // EN (option C): Check the limits: ∫₀⁴ 3 dx = 3 × 4 = 12, not 6.
        "2": "積分区間を確認しましょう：∫₀⁴ 3 dx = 3 × 4 = 12 であり、6 ではありません。",
        // EN (option D): You cannot ignore the +3 term inside the integrand; ∫₀⁴ (f(x + 2) + 3) dx = ∫₂⁶ f(u) du + ∫₀⁴ 3 dx.
        "3": "被積分関数の中の +3 の項を無視することはできません；∫₀⁴ (f(x + 2) + 3) dx = ∫₂⁶ f(u) du + ∫₀⁴ 3 dx です。",
      },
    },

    // ── t5-2-q016 · numeric · exam · SL · SL 5.11 · 6 marks
    "t5-2-q016": {
      // EN: <p>Using your GDC, find the area of the finite region enclosed between the curves <span class="chem">y = 4 - x^2</span> and <span class="chem">y = e^{0.5x}</span>, correct to 3 significant figures.</p>
      stem: "<p>GDC を使って、2 曲線 <span class=\"chem\">y = 4 - x^2</span> と <span class=\"chem\">y = e^{0.5x}</span> で囲まれた有限領域の面積を有効数字 3 桁で求めなさい (find)。</p>",
      hints: [
        // EN: Graph both curves on your GDC and find the two intersection <span class="chem">x</span>-coordinates: <span class="chem">a ≈ -1.9009</span> and <span class="chem">b ≈ 1.4069</span>.
        "GDC で両方の曲線のグラフを描き、2 つの交点の <span class=\"chem\">x</span> 座標を求めます：<span class=\"chem\">a ≈ -1.9009</span> と <span class=\"chem\">b ≈ 1.4069</span>。",
        // EN: Store the exact intersection values (to full GDC precision) and evaluate <span class="chem">int_a^b ((4 - x^2) - e^{0.5x}) dx</span>.
        "交点の値を GDC のフル精度で保存し、<span class=\"chem\">int_a^b ((4 - x^2) - e^{0.5x}) dx</span> を計算します。",
      ],
      // EN: <p>Solving <span class="chem">4 - x^2 = e^{0.5x}</span> on a GDC gives intersection points at <span class="chem">a ≈ -1.90090</span> and <span class="chem">b ≈ 1.40688</span>. Between these limits, <span class="chem">4 - x^2 &gt;= e^{0.5x}</span>, so <span class="chem">A = int_a^b (4 - x^2 - e^{0.5x}) dx ≈ 6.7451...</span>, which rounds to <span class="chem">6.75</span> (3 s.f.).</p>
      solution: "<p>GDC で <span class=\"chem\">4 - x^2 = e^{0.5x}</span> を解くと、交点は <span class=\"chem\">a ≈ -1.90090</span> と <span class=\"chem\">b ≈ 1.40688</span> になります。この区間では <span class=\"chem\">4 - x^2 &gt;= e^{0.5x}</span> なので、<span class=\"chem\">A = int_a^b (4 - x^2 - e^{0.5x}) dx ≈ 6.7451...</span> となり、有効数字 3 桁で <span class=\"chem\">6.75</span> です。</p>",
    },

    // ── t5-2-q017 · short · challenge · SL · SL 5.9 · 8 marks
    "t5-2-q017": {
      // EN: <p>A particle starts from rest at <span class="chem">t = 0</span> with initial displacement <span class="chem">s(0) = 2</span> <span class="unit">m</span> from an origin <span class="chem">O</span>, and moves along a straight line with acceleration <span class="chem">a(t) = 6t - 12</span> <span class="unit">m s-2</span> for <span class="chem">t &gt;= 0</span>.<br>(a) Find expressions for the velocity <span class="chem">v(t)</span> and the displacement <span class="chem">s(t)</span>. <strong>[4 marks]</strong><br>(b) Find the total distance travelled by the particle in the first <span class="chem">5</span> seconds (<span class="chem">0 &lt;= t &lt;= 5</span>). <strong>[4 marks]</strong></p>
      stem: "<p>粒子が <span class=\"chem\">t = 0</span> において原点 <span class=\"chem\">O</span> からの初期変位 <span class=\"chem\">s(0) = 2</span> <span class=\"unit\">m</span> で静止状態から出発し、<span class=\"chem\">t &gt;= 0</span> に対して加速度 <span class=\"chem\">a(t) = 6t - 12</span> <span class=\"unit\">m s-2</span> で直線上を動く。<br>(a) 速度 <span class=\"chem\">v(t)</span> と変位 <span class=\"chem\">s(t)</span> の式を求めなさい (Find)。 <strong>[4 marks]</strong><br>(b) 最初の <span class=\"chem\">5</span> 秒間（<span class=\"chem\">0 &lt;= t &lt;= 5</span>）に粒子が進んだ総移動距離を求めなさい (Find)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: “starts from rest” and “initial displacement” are two boundary conditions, and “total distance” means you must find where the particle turns before using <span class="chem">int |v| dt</span>.
        "解読：「静止状態から出発する」と「初期変位」は 2 つの境界条件です。「移動した総距離」とは、<span class=\"chem\">int |v| dt</span> を使う前に粒子が向きを変える時刻を求める必要があるということです。",
        // EN: “Starts from rest” means <span class="chem">v(0) = 0</span>; use this to find the first constant of integration, then use <span class="chem">s(0) = 2</span> for the second.
        "「静止状態から出発」は <span class=\"chem\">v(0) = 0</span> を意味します；これを使って最初の積分定数を求め、次に <span class=\"chem\">s(0) = 2</span> を使って 2 つ目の定数を求めます。",
        // EN: For part (b), solve <span class="chem">v(t) = 0</span> to find when the particle reverses direction before computing total distance.
        "(b) では、総移動距離を計算する前に <span class=\"chem\">v(t) = 0</span> を解いて粒子が向きを変える時刻を求めます。",
      ],
      // EN: <p>(a) Integrating <span class="chem">a(t) = 6t - 12</span> gives <span class="chem">v(t) = 3t^2 - 12t + C_1</span>. Since <span class="chem">v(0) = 0</span>, <span class="chem">C_1 = 0</span>, so <span class="chem">v(t) = 3t^2 - 12t</span>. Integrating again gives <span class="chem">s(t) = t^3 - 6t^2 + C_2</span>. Since <span class="chem">s(0) = 2</span>, <span class="chem">C_2 = 2</span>, so <span class="chem">s(t) = t^3 - 6t^2 + 2</span>.<br>(b) Setting <span class="chem">v(t) = 3t(t - 4) = 0</span> gives <span class="chem">t = 0</span> and <span class="chem">t = 4</span> <span class="unit">s</span>. Evaluating position at the endpoints and turning time: <span class="chem">s(0) = 2</span>, <span class="chem">s(4) = 64 - 96 + 2 = -30</span>, and <span class="chem">s(5) = 125 - 150 + 2 = -23</span>. Therefore, total distance <span class="chem">d = |s(4) - s(0)| + |s(5) - s(4)| = |-32| + |7| = 39</span> <span class="unit">m</span>.</p>
      solution: "<p>(a) <span class=\"chem\">a(t) = 6t - 12</span> を積分すると <span class=\"chem\">v(t) = 3t^2 - 12t + C_1</span>。<span class=\"chem\">v(0) = 0</span> より <span class=\"chem\">C_1 = 0</span> なので <span class=\"chem\">v(t) = 3t^2 - 12t</span>。もう一度積分すると <span class=\"chem\">s(t) = t^3 - 6t^2 + C_2</span>。<span class=\"chem\">s(0) = 2</span> より <span class=\"chem\">C_2 = 2</span> なので <span class=\"chem\">s(t) = t^3 - 6t^2 + 2</span>。<br>(b) <span class=\"chem\">v(t) = 3t(t - 4) = 0</span> とおくと <span class=\"chem\">t = 0</span> と <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span>。端点と折り返し時刻の位置を計算すると：<span class=\"chem\">s(0) = 2</span>、<span class=\"chem\">s(4) = 64 - 96 + 2 = -30</span>、<span class=\"chem\">s(5) = 125 - 150 + 2 = -23</span>。よって総移動距離は <span class=\"chem\">d = |s(4) - s(0)| + |s(5) - s(4)| = |-32| + |7| = 39</span> <span class=\"unit\">m</span>。</p>",
      // EN: <p>(a) <span class="chem">v(t) = 3t^2 - 12t</span> <span class="unit">m s-1</span>; <span class="chem">s(t) = t^3 - 6t^2 + 2</span> <span class="unit">m</span><br>(b) <span class="chem">39</span> <span class="unit">m</span></p>
      answer: "<p>(a) <span class=\"chem\">v(t) = 3t^2 - 12t</span> <span class=\"unit\">m s-1</span>；<span class=\"chem\">s(t) = t^3 - 6t^2 + 2</span> <span class=\"unit\">m</span><br>(b) <span class=\"chem\">39</span> <span class=\"unit\">m</span></p>",
      markscheme: [
        // EN: M1: Integrate <span class="chem">a(t)</span> and use <span class="chem">v(0) = 0</span> (“starts from rest”) to find the constant.
        "M1：<span class=\"chem\">a(t)</span> を積分し、<span class=\"chem\">v(0) = 0</span>（「静止状態から出発」）を使って定数を求める。",
        // EN: A1: <span class="chem">v(t) = 3t^2 - 12t</span>.
        "A1：<span class=\"chem\">v(t) = 3t^2 - 12t</span>。",
        // EN: M1: Integrate <span class="chem">v(t)</span> and use <span class="chem">s(0) = 2</span> to find the constant.
        "M1：<span class=\"chem\">v(t)</span> を積分し、<span class=\"chem\">s(0) = 2</span> を使って定数を求める。",
        // EN: A1: <span class="chem">s(t) = t^3 - 6t^2 + 2</span>.
        "A1：<span class=\"chem\">s(t) = t^3 - 6t^2 + 2</span>。",
        // EN: M1: Solve <span class="chem">v(t) = 3t(t - 4) = 0</span>.
        "M1：<span class=\"chem\">v(t) = 3t(t - 4) = 0</span> を解く。",
        // EN: A1: The particle turns at <span class="chem">t = 4</span> <span class="unit">s</span>, which lies in <span class="chem">(0, 5)</span>.
        "A1：粒子は <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span> で向きを変え、これは <span class=\"chem\">(0, 5)</span> 内にある。",
        // EN: M1: Evaluate <span class="chem">s(0) = 2</span>, <span class="chem">s(4) = -30</span>, <span class="chem">s(5) = -23</span> (or split the integral at <span class="chem">t = 4</span>).
        "M1：<span class=\"chem\">s(0) = 2</span>、<span class=\"chem\">s(4) = -30</span>、<span class=\"chem\">s(5) = -23</span> を計算する（または <span class=\"chem\">t = 4</span> で積分を分割する）。",
        // EN: A1: <span class="chem">d = |-30 - 2| + |-23 - (-30)| = 32 + 7 = 39</span> <span class="unit">m</span>.
        "A1：<span class=\"chem\">d = |-30 - 2| + |-23 - (-30)| = 32 + 7 = 39</span> <span class=\"unit\">m</span>。",
      ],
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't5-2.q', {
  questions: {

    // ── t5-2-q018 · numeric · foundation · SL · SL 5.5 · 2 marks
    "t5-2-q018": {
      // EN: <p>Use your GDC to calculate <span class="chem">int_0^2 sqrt(1 + x^3) dx</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>GDC を使って <span class=\"chem\">int_0^2 sqrt(1 + x^3) dx</span> を計算しなさい (calculate)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: <span class="chem">sqrt(1 + x^3)</span> has no antiderivative you can write down, so this is a job for the numerical integration command on your GDC (TI: fnInt; Casio: ∫dx; or the ∫ template).
        "<span class=\"chem\">sqrt(1 + x^3)</span> には書き表せる原始関数がないので、GDC の数値積分コマンド（TI：fnInt、Casio：∫dx、または ∫ テンプレート）を使います。",
        // EN: Enter the integrand <span class="chem">sqrt(1 + x^3)</span> with lower limit <span class="chem">0</span> and upper limit <span class="chem">2</span>, then round the result to 3 s.f.
        "被積分関数 <span class=\"chem\">sqrt(1 + x^3)</span> を入力し、下端を <span class=\"chem\">0</span>、上端を <span class=\"chem\">2</span> として、結果を有効数字 3 桁に丸めます。",
      ],
      // EN: <p>Using the GDC numerical integration command, <span class="chem">int_0^2 sqrt(1 + x^3) dx = 3.24130…</span>, so the answer is <span class="chem">3.24</span> (3 s.f.).</p>
      solution: "<p>GDC の数値積分コマンドを使うと <span class=\"chem\">int_0^2 sqrt(1 + x^3) dx = 3.24130…</span> なので、答えは <span class=\"chem\">3.24</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-2-q019 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q019": {
      // EN: <p>The curve <span class="chem">y = x^3 - 4x^2 + x + 3</span> crosses the positive <span class="chem">x</span>-axis at the points <span class="chem">A</span> and <span class="chem">B</span>, where <span class="chem">A</span> is to the left of <span class="chem">B</span>. Find the area of the region enclosed by the curve and the <span class="chem">x</span>-axis between <span class="chem">A</span> and <span class="chem">B</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x^3 - 4x^2 + x + 3</span> は <span class=\"chem\">x</span> 軸の正の部分と点 <span class=\"chem\">A</span> と <span class=\"chem\">B</span> で交わる。ただし、<span class=\"chem\">A</span> は <span class=\"chem\">B</span> の左側にある。<span class=\"chem\">A</span> と <span class=\"chem\">B</span> の間で曲線と <span class=\"chem\">x</span> 軸で囲まれた領域の面積を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: you need the two positive <span class="chem">x</span>-intercepts first (the cubic does not factorise nicely, so use the GDC root/zero tool), then an area. Check where the curve is between them: above or below the axis?
        "解読：まず 2 つの正の <span class=\"chem\">x</span> 切片が必要です（この 3 次式はきれいに因数分解できないので、GDC の解（ゼロ点）機能を使います）。そのあとで面積を求めます。その間で曲線が軸の上側にあるか下側にあるかを確認しましょう。",
        // EN: The GDC gives <span class="chem">x_A ≈ 1.2391</span> and <span class="chem">x_B ≈ 3.4605</span>. Test a point such as <span class="chem">x = 2</span>: <span class="chem">y = -3 &lt; 0</span>, so the region lies <strong>below</strong> the axis.
        "GDC から <span class=\"chem\">x_A ≈ 1.2391</span> と <span class=\"chem\">x_B ≈ 3.4605</span> が得られます。たとえば <span class=\"chem\">x = 2</span> で調べると <span class=\"chem\">y = -3 &lt; 0</span> なので、領域は軸の<strong>下側</strong>にあります。",
        // EN: The definite integral between the roots is negative. The area is its absolute value: <span class="chem">A = |int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx|</span> (or integrate <span class="chem">|y|</span> directly).
        "根の間の定積分は負になります。面積はその絶対値です：<span class=\"chem\">A = |int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx|</span>（または <span class=\"chem\">|y|</span> を直接積分します）。",
      ],
      // EN: <p>Decode: area between two GDC roots, with the region below the axis. The GDC gives the positive roots <span class="chem">x_A = 1.23912…</span> and <span class="chem">x_B = 3.46050…</span> (the third root, <span class="chem">x ≈ -0.700</span>, is negative). Since <span class="chem">y(2) = -3 &lt; 0</span>, the curve is below the <span class="chem">x</span>-axis on <span class="chem">(x_A, x_B)</span>. Using stored roots, <span class="chem">int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx = -5.57107…</span>, so the area is <span class="chem">5.57</span> (3 s.f.). A negative answer can never be an area.</p>
      solution: "<p>解読：GDC で求めた 2 つの根の間の面積で、領域は軸の下側にあります。GDC から正の根 <span class=\"chem\">x_A = 1.23912…</span> と <span class=\"chem\">x_B = 3.46050…</span> が得られます（3 つ目の根 <span class=\"chem\">x ≈ -0.700</span> は負です）。<span class=\"chem\">y(2) = -3 &lt; 0</span> なので、<span class=\"chem\">(x_A, x_B)</span> 上で曲線は <span class=\"chem\">x</span> 軸の下側にあります。保存した根を使うと <span class=\"chem\">int_{x_A}^{x_B} (x^3 - 4x^2 + x + 3) dx = -5.57107…</span> なので、面積は <span class=\"chem\">5.57</span>（有効数字 3 桁）です。負の値が面積になることは決してありません。</p>",
    },

    // ── t5-2-q020 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q020": {
      // EN: <p>Find the area of the finite region enclosed between the curves <span class="chem">y = 2 cos x</span> and <span class="chem">y = x^2 - 1</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>2 曲線 <span class=\"chem\">y = 2 cos x</span> と <span class=\"chem\">y = x^2 - 1</span> で囲まれた有限領域の面積を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Put your GDC in <strong>radian mode</strong>, graph both curves and use the intersect tool to find the two intersection points.
        "GDC を<strong>ラジアンモード</strong>にし、2 曲線のグラフをかいて交点機能で 2 つの交点を求めます。",
        // EN: The intersections are at <span class="chem">x ≈ ±1.2654</span>. At <span class="chem">x = 0</span>, <span class="chem">2 cos 0 = 2 &gt; -1</span>, so <span class="chem">y = 2 cos x</span> is the upper curve.
        "交点は <span class=\"chem\">x ≈ ±1.2654</span> です。<span class=\"chem\">x = 0</span> では <span class=\"chem\">2 cos 0 = 2 &gt; -1</span> なので、<span class=\"chem\">y = 2 cos x</span> が上側の曲線です。",
        // EN: Evaluate <span class="chem">int_{-1.2654}^{1.2654} (2 cos x - x^2 + 1) dx</span> using the stored intersection values.
        "保存した交点の値を使って <span class=\"chem\">int_{-1.2654}^{1.2654} (2 cos x - x^2 + 1) dx</span> を計算します。",
      ],
      // EN: <p>Solving <span class="chem">2 cos x = x^2 - 1</span> on a GDC (radians) gives <span class="chem">x = ±1.26542…</span>. On this interval <span class="chem">2 cos x &gt;= x^2 - 1</span>, so <span class="chem">A = int_{-1.26542}^{1.26542} (2 cos x - (x^2 - 1)) dx = 4.99490…</span>, which is <span class="chem">4.99</span> (3 s.f.). Part of the lower curve is below the <span class="chem">x</span>-axis, but “upper minus lower” already accounts for that.</p>
      solution: "<p>GDC（ラジアン）で <span class=\"chem\">2 cos x = x^2 - 1</span> を解くと <span class=\"chem\">x = ±1.26542…</span> です。この区間で <span class=\"chem\">2 cos x &gt;= x^2 - 1</span> なので <span class=\"chem\">A = int_{-1.26542}^{1.26542} (2 cos x - (x^2 - 1)) dx = 4.99490…</span> となり、<span class=\"chem\">4.99</span>（有効数字 3 桁）です。下側の曲線の一部は <span class=\"chem\">x</span> 軸より下にありますが、「上側 − 下側」でそのことはすでに考慮されています。</p>",
    },

    // ── t5-2-q021 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q021": {
      // EN: <p>Let <span class="chem">f(x) = 4 sin x - x</span> for <span class="chem">0 &lt;= x &lt;= 4</span>. Find the total area of the regions enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = 4</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">0 &lt;= x &lt;= 4</span> に対して <span class=\"chem\">f(x) = 4 sin x - x</span> とする。<span class=\"chem\">f</span> のグラフ、<span class=\"chem\">x</span> 軸、直線 <span class=\"chem\">x = 4</span> で囲まれた領域の面積の合計を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: “total area of the regions” means every region counts as positive. Sketch <span class="chem">f</span> on your GDC (radians) and look for where it crosses the axis.
        "解読：「領域の面積の合計」とは、どの領域も正として数えるということです。GDC（ラジアン）で <span class=\"chem\">f</span> のグラフをかき、軸と交わる場所を探しましょう。",
        // EN: The graph crosses the axis at <span class="chem">x = 0</span> and at <span class="chem">x ≈ 2.4746</span>; it is above the axis before that and below it after.
        "グラフは <span class=\"chem\">x = 0</span> と <span class=\"chem\">x ≈ 2.4746</span> で軸と交わります。その前は軸の上側、その後は軸の下側にあります。",
        // EN: Either add <span class="chem">int_0^{2.4746} f(x) dx</span> and <span class="chem">|int_{2.4746}^4 f(x) dx|</span>, or enter <span class="chem">int_0^4 |f(x)| dx</span> directly. Note that <span class="chem">int_0^4 f(x) dx ≈ -1.39</span> is <strong>not</strong> the area.
        "<span class=\"chem\">int_0^{2.4746} f(x) dx</span> と <span class=\"chem\">|int_{2.4746}^4 f(x) dx|</span> を足すか、<span class=\"chem\">int_0^4 |f(x)| dx</span> を直接入力します。<span class=\"chem\">int_0^4 f(x) dx ≈ -1.39</span> は面積では<strong>ない</strong>ことに注意しましょう。",
      ],
      // EN: <p>The root of <span class="chem">4 sin x = x</span> in <span class="chem">(0, 4)</span> is <span class="chem">c = 2.47457…</span>. Then <span class="chem">int_0^c f(x) dx = 4.08092…</span> (above the axis) and <span class="chem">int_c^4 f(x) dx = -5.46634…</span> (below the axis). Total area <span class="chem">= 4.08092 + 5.46634 = 9.54726…</span>, i.e. <span class="chem">int_0^4 |f(x)| dx = 9.55</span> (3 s.f.). The signed integral, <span class="chem">-1.39</span>, lets the two regions cancel and is not an area.</p>
      solution: "<p><span class=\"chem\">(0, 4)</span> における <span class=\"chem\">4 sin x = x</span> の根は <span class=\"chem\">c = 2.47457…</span> です。すると <span class=\"chem\">int_0^c f(x) dx = 4.08092…</span>（軸の上側）、<span class=\"chem\">int_c^4 f(x) dx = -5.46634…</span>（軸の下側）です。面積の合計は <span class=\"chem\">= 4.08092 + 5.46634 = 9.54726…</span>、すなわち <span class=\"chem\">int_0^4 |f(x)| dx = 9.55</span>（有効数字 3 桁）です。符号付きの積分 <span class=\"chem\">-1.39</span> では 2 つの領域が打ち消し合うので、面積ではありません。</p>",
    },

    // ── t5-2-q022 · numeric · challenge · SL · SL 5.5, 5.11 · 6 marks
    "t5-2-q022": {
      // EN: <p>A landscape architect draws a pond on a plan where 1 unit represents 1 metre. The pond is the region enclosed by the curves <span class="chem">y = ln x</span> and <span class="chem">y = (x - 2)^2</span>. A straight wooden bridge is built along the line <span class="chem">x = 2</span>, which splits the pond into two parts. Find the surface area of the <strong>larger</strong> part of the pond, in <span class="unit">m2</span>, correct to 3 significant figures.</p>
      stem: "<p>造園家が、1 単位が 1 メートルを表す設計図に池をかく。池は曲線 <span class=\"chem\">y = ln x</span> と <span class=\"chem\">y = (x - 2)^2</span> で囲まれた領域である。直線 <span class=\"chem\">x = 2</span> に沿ってまっすぐな木の橋が架けられ、池が 2 つの部分に分けられる。池の<strong>大きい方</strong>の部分の水面の面積を <span class=\"unit\">m2</span> 単位で、有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is an area between two curves, but you are asked for only one of the two pieces on either side of <span class="chem">x = 2</span>. You need the intersection points, the area on each side of <span class="chem">x = 2</span>, and then the bigger one.
        "解読：これは 2 曲線間の面積ですが、求めるのは <span class=\"chem\">x = 2</span> の両側にある 2 つの部分のうち 1 つだけです。交点、<span class=\"chem\">x = 2</span> の各側の面積を求め、大きい方を選びます。",
        // EN: The GDC intersections are <span class="chem">x = a ≈ 1.4124</span> and <span class="chem">x = b ≈ 3.0571</span>. Between them, <span class="chem">ln x</span> is the upper curve (test <span class="chem">x = 2</span>: <span class="chem">ln 2 &gt; 0</span>).
        "GDC で求めた交点は <span class=\"chem\">x = a ≈ 1.4124</span> と <span class=\"chem\">x = b ≈ 3.0571</span> です。その間では <span class=\"chem\">ln x</span> が上側の曲線です（<span class=\"chem\">x = 2</span> で確認：<span class=\"chem\">ln 2 &gt; 0</span>）。",
        // EN: Compute <span class="chem">int_a^2 (ln x - (x - 2)^2) dx</span> and <span class="chem">int_2^b (ln x - (x - 2)^2) dx</span>, and compare.
        "<span class=\"chem\">int_a^2 (ln x - (x - 2)^2) dx</span> と <span class=\"chem\">int_2^b (ln x - (x - 2)^2) dx</span> を計算して比べます。",
      ],
      // EN: <p>Decode: the bridge <span class="chem">x = 2</span> is a vertical cut, so the two parts are the areas between the curves on <span class="chem">[a, 2]</span> and <span class="chem">[2, b]</span>. The GDC gives <span class="chem">a = 1.41239…</span> and <span class="chem">b = 3.05710…</span>, with <span class="chem">ln x &gt;= (x - 2)^2</span> between them. Left part: <span class="chem">int_a^2 (ln x - (x - 2)^2) dx = 0.24338…</span>. Right part: <span class="chem">int_2^b (ln x - (x - 2)^2) dx = 0.57906…</span>. The larger part has area <span class="chem">0.579</span> <span class="unit">m2</span> (3 s.f.). (Check: the whole pond is <span class="chem">0.822</span> <span class="unit">m2</span>.)</p>
      solution: "<p>解読：橋 <span class=\"chem\">x = 2</span> は縦の切れ目なので、2 つの部分は <span class=\"chem\">[a, 2]</span> と <span class=\"chem\">[2, b]</span> における 2 曲線間の面積です。GDC から <span class=\"chem\">a = 1.41239…</span> と <span class=\"chem\">b = 3.05710…</span> が得られ、その間で <span class=\"chem\">ln x &gt;= (x - 2)^2</span> です。左の部分：<span class=\"chem\">int_a^2 (ln x - (x - 2)^2) dx = 0.24338…</span>。右の部分：<span class=\"chem\">int_2^b (ln x - (x - 2)^2) dx = 0.57906…</span>。大きい方の部分の面積は <span class=\"chem\">0.579</span> <span class=\"unit\">m2</span>（有効数字 3 桁）です。（確認：池全体は <span class=\"chem\">0.822</span> <span class=\"unit\">m2</span> です。）</p>",
    },

    // ── t5-2-q023 · short · exam · SL · SL 5.5, 5.8, 5.11 · 9 marks
    "t5-2-q023": {
      // EN: <p>Let <span class="chem">f(x) = 8x e^{-x/2}</span> and <span class="chem">g(x) = x</span>, for <span class="chem">x &gt;= 0</span>.<br>(a) Find the coordinates of the maximum point on the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the <span class="chem">x</span>-coordinates of the points where the graphs of <span class="chem">f</span> and <span class="chem">g</span> intersect. <strong>[2 marks]</strong><br>(c) Find the area of the region enclosed between the graphs of <span class="chem">f</span> and <span class="chem">g</span>. <strong>[3 marks]</strong><br>(d) Find the area of the region enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = 6</span>. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">x &gt;= 0</span> に対して <span class=\"chem\">f(x) = 8x e^{-x/2}</span>、<span class=\"chem\">g(x) = x</span> とする。<br>(a) <span class=\"chem\">f</span> のグラフの極大点の座標を求めなさい (Find)。<strong>[2 marks]</strong><br>(b) <span class=\"chem\">f</span> と <span class=\"chem\">g</span> のグラフの交点の <span class=\"chem\">x</span> 座標を求めなさい (Find)。<strong>[2 marks]</strong><br>(c) <span class=\"chem\">f</span> と <span class=\"chem\">g</span> のグラフで囲まれた領域の面積を求めなさい (Find)。<strong>[3 marks]</strong><br>(d) <span class=\"chem\">f</span> のグラフ、<span class=\"chem\">x</span> 軸、直線 <span class=\"chem\">x = 6</span> で囲まれた領域の面積を求めなさい (Find)。<strong>[2 marks]</strong><br>正確な値でない答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: (a) and (b) are GDC graph-reading tasks; (c) is “upper minus lower” between the intersections from (b); (d) is a plain area under <span class="chem">f</span>, because <span class="chem">f(x) &gt;= 0</span> for <span class="chem">x &gt;= 0</span>.
        "解読：(a) と (b) は GDC でグラフを読み取る問題、(c) は (b) の交点の間で「上側 − 下側」、(d) は <span class=\"chem\">f</span> の下側の通常の面積です。<span class=\"chem\">x &gt;= 0</span> に対して <span class=\"chem\">f(x) &gt;= 0</span> だからです。",
        // EN: For (b), the graphs meet at the origin and once more. Store the second intersection in your GDC so you can use it as a limit in (c).
        "(b) では、グラフは原点ともう 1 点で交わります。(c) で積分の端として使えるように、2 つ目の交点を GDC に保存しておきましょう。",
        // EN: Neither <span class="chem">int x e^{-x/2} dx</span> (integration by parts is AHL) nor the area needs to be done by hand here: use the GDC numerical integration.
        "ここでは <span class=\"chem\">int x e^{-x/2} dx</span>（部分積分法は AHL の内容です）も面積も手計算する必要はありません。GDC の数値積分を使います。",
      ],
      // EN: <p>(a) <span class="chem">f'(x) = 8e^{-x/2} - 4x e^{-x/2} = 8e^{-x/2}(1 - x/2)</span>, which is zero at <span class="chem">x = 2</span>; <span class="chem">f(2) = 16e^{-1} = 5.886…</span>. Maximum <span class="chem">(2, 5.89)</span>.<br>(b) <span class="chem">8x e^{-x/2} = x</span> gives <span class="chem">x = 0</span> or <span class="chem">e^{-x/2} = 1/8</span>, i.e. <span class="chem">x = 2 ln 8 = 6 ln 2 = 4.1588…</span>.<br>(c) For <span class="chem">0 &lt; x &lt; 6 ln 2</span>, <span class="chem">f(x) &gt; g(x)</span> (e.g. <span class="chem">f(2) = 5.89 &gt; 2</span>). GDC: <span class="chem">int_0^{6 ln 2} (8x e^{-x/2} - x) dx = 11.034…</span>, so the area is <span class="chem">11.0</span>.<br>(d) <span class="chem">f(x) &gt;= 0</span> on <span class="chem">[0, 6]</span>, so the area is <span class="chem">int_0^6 8x e^{-x/2} dx = 25.627… ≈ 25.6</span>.</p>
      solution: "<p>(a) <span class=\"chem\">f'(x) = 8e^{-x/2} - 4x e^{-x/2} = 8e^{-x/2}(1 - x/2)</span> は <span class=\"chem\">x = 2</span> で 0 になります。<span class=\"chem\">f(2) = 16e^{-1} = 5.886…</span>。極大点は <span class=\"chem\">(2, 5.89)</span> です。<br>(b) <span class=\"chem\">8x e^{-x/2} = x</span> より <span class=\"chem\">x = 0</span> または <span class=\"chem\">e^{-x/2} = 1/8</span>、すなわち <span class=\"chem\">x = 2 ln 8 = 6 ln 2 = 4.1588…</span>。<br>(c) <span class=\"chem\">0 &lt; x &lt; 6 ln 2</span> では <span class=\"chem\">f(x) &gt; g(x)</span>（例：<span class=\"chem\">f(2) = 5.89 &gt; 2</span>）。GDC：<span class=\"chem\">int_0^{6 ln 2} (8x e^{-x/2} - x) dx = 11.034…</span> なので、面積は <span class=\"chem\">11.0</span> です。<br>(d) <span class=\"chem\">[0, 6]</span> 上で <span class=\"chem\">f(x) &gt;= 0</span> なので、面積は <span class=\"chem\">int_0^6 8x e^{-x/2} dx = 25.627… ≈ 25.6</span> です。</p>",
      // EN: <p>(a) <span class="chem">(2, 5.89)</span> (exactly <span class="chem">(2, 16/e)</span>)<br>(b) <span class="chem">x = 0</span> and <span class="chem">x = 4.16</span> (exactly <span class="chem">6 ln 2</span>)<br>(c) <span class="chem">11.0</span><br>(d) <span class="chem">25.6</span></p>
      answer: "<p>(a) <span class=\"chem\">(2, 5.89)</span>（正確には <span class=\"chem\">(2, 16/e)</span>）<br>(b) <span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 4.16</span>（正確には <span class=\"chem\">6 ln 2</span>）<br>(c) <span class=\"chem\">11.0</span><br>(d) <span class=\"chem\">25.6</span></p>",
      markscheme: [
        // EN: M1: Uses the GDC maximum tool (or solves <span class="chem">f'(x) = 8e^{-x/2}(1 - x/2) = 0</span>).
        "M1：GDC の最大値機能を使う（または <span class=\"chem\">f'(x) = 8e^{-x/2}(1 - x/2) = 0</span> を解く）。",
        // EN: A1: <span class="chem">(2, 5.89)</span>.
        "A1：<span class=\"chem\">(2, 5.89)</span>。",
        // EN: M1: Solves <span class="chem">8x e^{-x/2} = x</span> (graphically, or <span class="chem">x = 0</span> or <span class="chem">e^{-x/2} = 1/8</span>).
        "M1：<span class=\"chem\">8x e^{-x/2} = x</span> を解く（グラフから、または <span class=\"chem\">x = 0</span> か <span class=\"chem\">e^{-x/2} = 1/8</span>）。",
        // EN: A1: <span class="chem">x = 0</span> and <span class="chem">x = 4.16</span> (<span class="chem">6 ln 2</span>).
        "A1：<span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 4.16</span>（<span class=\"chem\">6 ln 2</span>）。",
        // EN: M1: Sets up an integral of (upper − lower) between the intersections.
        "M1：交点の間で（上側 − 下側）の積分を立てる。",
        // EN: A1: <span class="chem">int_0^{4.1589} (8x e^{-x/2} - x) dx</span>, with <span class="chem">f</span> above <span class="chem">g</span>.
        "A1：<span class=\"chem\">int_0^{4.1589} (8x e^{-x/2} - x) dx</span>、ただし <span class=\"chem\">f</span> が <span class=\"chem\">g</span> の上側。",
        // EN: A1: Area <span class="chem">= 11.0</span> (11.034…).
        "A1：面積 <span class=\"chem\">= 11.0</span>（11.034…）。",
        // EN: M1: <span class="chem">int_0^6 8x e^{-x/2} dx</span> (f ≥ 0 on [0, 6]).
        "M1：<span class=\"chem\">int_0^6 8x e^{-x/2} dx</span>（[0, 6] 上で f ≥ 0）。",
        // EN: A1: <span class="chem">25.6</span> (25.627…).
        "A1：<span class=\"chem\">25.6</span>（25.627…）。",
      ],
    },

    // ── t5-2-q024 · numeric · exam · SL · SL 5.5, 5.9 · 5 marks
    "t5-2-q024": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = t^2 e^{-0.5t} - 1</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 8</span>, where <span class="chem">t</span> is in seconds. Find the total distance travelled by the particle in these 8 seconds. Give your answer correct to 3 significant figures.</p>
      stem: "<p>粒子が <span class=\"chem\">0 &lt;= t &lt;= 8</span> において速度 <span class=\"chem\">v(t) = t^2 e^{-0.5t} - 1</span> <span class=\"unit\">m s-1</span> で直線上を動く。ただし、<span class=\"chem\">t</span> は秒である。この 8 秒間に粒子が進んだ総移動距離を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Total distance is <span class="chem">int_0^8 |v(t)| dt</span>. The displacement <span class="chem">int_0^8 v(t) dt</span> is smaller, because the particle moves backwards at first.
        "総移動距離は <span class=\"chem\">int_0^8 |v(t)| dt</span> です。粒子は最初に後ろ向きに動くので、変位 <span class=\"chem\">int_0^8 v(t) dt</span> の方が小さくなります。",
        // EN: Graph <span class="chem">v</span>: it starts at <span class="chem">v(0) = -1</span> and becomes positive at <span class="chem">t ≈ 1.430</span>, staying positive up to <span class="chem">t = 8</span>.
        "<span class=\"chem\">v</span> のグラフをかきましょう。<span class=\"chem\">v(0) = -1</span> から始まり、<span class=\"chem\">t ≈ 1.430</span> で正になり、<span class=\"chem\">t = 8</span> まで正のままです。",
        // EN: Enter <span class="chem">int_0^8 |t^2 e^{-0.5t} - 1| dt</span> on the GDC, or add <span class="chem">|int_0^{1.430} v dt|</span> and <span class="chem">int_{1.430}^8 v dt</span>.
        "GDC に <span class=\"chem\">int_0^8 |t^2 e^{-0.5t} - 1| dt</span> を入力するか、<span class=\"chem\">|int_0^{1.430} v dt|</span> と <span class=\"chem\">int_{1.430}^8 v dt</span> を足します。",
      ],
      // EN: <p>The velocity is negative for <span class="chem">0 &lt;= t &lt; 1.42961…</span> and positive after that (check <span class="chem">v(8) = 64e^{-4} - 1 ≈ 0.172 &gt; 0</span>). Total distance <span class="chem">= int_0^8 |v(t)| dt = 0.85413… + 5.04447… = 5.89860…</span>, so <span class="chem">5.90</span> <span class="unit">m</span> (3 s.f.). For comparison, the displacement is only <span class="chem">int_0^8 v(t) dt ≈ 4.19</span> <span class="unit">m</span>.</p>
      solution: "<p>速度は <span class=\"chem\">0 &lt;= t &lt; 1.42961…</span> で負、その後は正です（<span class=\"chem\">v(8) = 64e^{-4} - 1 ≈ 0.172 &gt; 0</span> を確認）。総移動距離は <span class=\"chem\">= int_0^8 |v(t)| dt = 0.85413… + 5.04447… = 5.89860…</span> なので <span class=\"chem\">5.90</span> <span class=\"unit\">m</span>（有効数字 3 桁）です。比較すると、変位はわずか <span class=\"chem\">int_0^8 v(t) dt ≈ 4.19</span> <span class=\"unit\">m</span> です。</p>",
    },

    // ── t5-2-q025 · numeric · exam · SL · SL 5.5, 5.9 · 4 marks
    "t5-2-q025": {
      // EN: <p>A particle moves along a straight line so that its velocity is <span class="chem">v(t) = 6 cos(t^2 / 5)</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 5</span> seconds. When <span class="chem">t = 0</span>, the particle is <span class="chem">1</span> <span class="unit">m</span> to the right of a fixed point <span class="chem">O</span> (so <span class="chem">s(0) = 1</span>). Find the displacement <span class="chem">s(5)</span> of the particle from <span class="chem">O</span> when <span class="chem">t = 5</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>粒子が <span class=\"chem\">0 &lt;= t &lt;= 5</span> 秒において速度 <span class=\"chem\">v(t) = 6 cos(t^2 / 5)</span> <span class=\"unit\">m s-1</span> で直線上を動く。<span class=\"chem\">t = 0</span> のとき、粒子は定点 <span class=\"chem\">O</span> の右 <span class=\"chem\">1</span> <span class=\"unit\">m</span> の位置にある（つまり <span class=\"chem\">s(0) = 1</span>）。<span class=\"chem\">t = 5</span> のときの <span class=\"chem\">O</span> からの粒子の変位 <span class=\"chem\">s(5)</span> を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: you cannot integrate <span class="chem">cos(t^2/5)</span> by hand, but you do not need <span class="chem">s(t)</span> as a formula: <span class="chem">s(5) = s(0) + int_0^5 v(t) dt</span>.
        "解読：<span class=\"chem\">cos(t^2/5)</span> を手で積分することはできませんが、<span class=\"chem\">s(t)</span> を式として求める必要はありません：<span class=\"chem\">s(5) = s(0) + int_0^5 v(t) dt</span>。",
        // EN: Use the GDC (radians) for <span class="chem">int_0^5 6 cos(t^2 / 5) dt</span>, then add the starting position <span class="chem">1</span>.
        "GDC（ラジアン）で <span class=\"chem\">int_0^5 6 cos(t^2 / 5) dt</span> を計算し、出発位置 <span class=\"chem\">1</span> を足します。",
      ],
      // EN: <p>By the fundamental theorem, <span class="chem">s(5) - s(0) = int_0^5 v(t) dt</span>. The GDC (radians) gives <span class="chem">int_0^5 6 cos(t^2 / 5) dt = 5.52298…</span>. So <span class="chem">s(5) = 1 + 5.52298… = 6.52298…</span>, i.e. <span class="chem">6.52</span> <span class="unit">m</span> (3 s.f.). The velocity changes sign twice in <span class="chem">[0, 5]</span>, but that only matters for distance, not for displacement.</p>
      solution: "<p>積分学の基本定理より <span class=\"chem\">s(5) - s(0) = int_0^5 v(t) dt</span>。GDC（ラジアン）から <span class=\"chem\">int_0^5 6 cos(t^2 / 5) dt = 5.52298…</span>。よって <span class=\"chem\">s(5) = 1 + 5.52298… = 6.52298…</span>、すなわち <span class=\"chem\">6.52</span> <span class=\"unit\">m</span>（有効数字 3 桁）です。速度は <span class=\"chem\">[0, 5]</span> で 2 回符号を変えますが、それが関係するのは移動距離であって変位ではありません。</p>",
    },

    // ── t5-2-q026 · numeric · exam · SL · SL 5.9 · 5 marks
    "t5-2-q026": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = 3 - t + 2 sin(1.5t)</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 8</span> seconds. Find the acceleration of the particle at the instant when it first changes direction. Give your answer correct to 3 significant figures.</p>
      stem: "<p>粒子が <span class=\"chem\">0 &lt;= t &lt;= 8</span> 秒において速度 <span class=\"chem\">v(t) = 3 - t + 2 sin(1.5t)</span> <span class=\"unit\">m s-1</span> で直線上を動く。粒子が初めて向きを変える瞬間の加速度を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: “changes direction” means <span class="chem">v(t) = 0</span> <strong>and</strong> <span class="chem">v</span> changes sign there. Find the first such time, then evaluate <span class="chem">a(t) = v'(t)</span> at it.
        "解読：「向きを変える」とは <span class=\"chem\">v(t) = 0</span> で、<strong>かつ</strong> <span class=\"chem\">v</span> がそこで符号を変えるということです。そのような最初の時刻を求め、そこで <span class=\"chem\">a(t) = v'(t)</span> を計算します。",
        // EN: The GDC zero of <span class="chem">v</span> is <span class="chem">t ≈ 2.3242</span>, and the graph of <span class="chem">v</span> crosses (not just touches) the axis there.
        "<span class=\"chem\">v</span> の GDC でのゼロ点は <span class=\"chem\">t ≈ 2.3242</span> で、<span class=\"chem\">v</span> のグラフはそこで軸を（接するだけでなく）横切ります。",
        // EN: Differentiate: <span class="chem">a(t) = -1 + 3 cos(1.5t)</span> (or use the GDC derivative at that point).
        "微分します：<span class=\"chem\">a(t) = -1 + 3 cos(1.5t)</span>（またはその点で GDC の微分機能を使います）。",
      ],
      // EN: <p>The only zero of <span class="chem">v</span> in <span class="chem">[0, 8]</span> is <span class="chem">t = 2.32418…</span> (radians), and <span class="chem">v</span> goes from positive to negative there, so the particle changes direction. <span class="chem">a(t) = v'(t) = -1 + 2(1.5) cos(1.5t) = -1 + 3 cos(1.5t)</span>. So <span class="chem">a(2.32418…) = -3.82354…</span>, i.e. <span class="chem">-3.82</span> <span class="unit">m s-2</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">[0, 8]</span> における <span class=\"chem\">v</span> のゼロ点は <span class=\"chem\">t = 2.32418…</span>（ラジアン）だけで、そこで <span class=\"chem\">v</span> は正から負に変わるので、粒子は向きを変えます。<span class=\"chem\">a(t) = v'(t) = -1 + 2(1.5) cos(1.5t) = -1 + 3 cos(1.5t)</span>。よって <span class=\"chem\">a(2.32418…) = -3.82354…</span>、すなわち <span class=\"chem\">-3.82</span> <span class=\"unit\">m s-2</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-2-q027 · short · exam · SL · SL 5.5, 5.9 · 11 marks
    "t5-2-q027": {
      // EN: <p>A toy car moves along a straight track. Its velocity is <span class="chem">v(t) = 10t e^{-0.5t} - 2</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>, where <span class="chem">t</span> is in seconds.<br>(a) Write down the initial velocity of the car. <strong>[1 mark]</strong><br>(b) Find the values of <span class="chem">t</span> for which the car is at rest. <strong>[2 marks]</strong><br>(c) Find the maximum speed of the car. <strong>[2 marks]</strong><br>(d) Find the displacement of the car from its starting point when <span class="chem">t = 10</span>. <strong>[2 marks]</strong><br>(e) Find the total distance travelled by the car for <span class="chem">0 &lt;= t &lt;= 10</span>. <strong>[2 marks]</strong><br>(f) Find the acceleration of the car when <span class="chem">t = 1</span>. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>
      stem: "<p>おもちゃの車がまっすぐなコース上を動く。<span class=\"chem\">0 &lt;= t &lt;= 10</span> において速度は <span class=\"chem\">v(t) = 10t e^{-0.5t} - 2</span> <span class=\"unit\">m s-1</span> であり、<span class=\"chem\">t</span> は秒である。<br>(a) 車の初速度を書きなさい (Write down)。<strong>[1 mark]</strong><br>(b) 車が静止する <span class=\"chem\">t</span> の値を求めなさい (Find)。<strong>[2 marks]</strong><br>(c) 車の速さの最大値を求めなさい (Find)。<strong>[2 marks]</strong><br>(d) <span class=\"chem\">t = 10</span> のときの出発点からの車の変位を求めなさい (Find)。<strong>[2 marks]</strong><br>(e) <span class=\"chem\">0 &lt;= t &lt;= 10</span> において車が進んだ総移動距離を求めなさい (Find)。<strong>[2 marks]</strong><br>(f) <span class=\"chem\">t = 1</span> のときの車の加速度を求めなさい (Find)。<strong>[2 marks]</strong><br>正確な値でない答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: “at rest” is <span class="chem">v = 0</span>; “speed” is <span class="chem">|v|</span>, so a large negative velocity would also count; “displacement” is <span class="chem">int v dt</span> but “total distance” is <span class="chem">int |v| dt</span>.
        "解読：「静止」は <span class=\"chem\">v = 0</span>、「速さ」は <span class=\"chem\">|v|</span> なので、絶対値の大きい負の速度も含まれます。「変位」は <span class=\"chem\">int v dt</span> ですが、「総移動距離」は <span class=\"chem\">int |v| dt</span> です。",
        // EN: Graph <span class="chem">v</span> on <span class="chem">[0, 10]</span>: it is negative at both ends and has one peak. Check the endpoint values before you claim a maximum speed.
        "<span class=\"chem\">[0, 10]</span> で <span class=\"chem\">v</span> のグラフをかきましょう。両端で負になり、山が 1 つあります。速さの最大値を決める前に端点の値を確認しましょう。",
        // EN: For (f), <span class="chem">a = dv/dt</span>; use the product rule on <span class="chem">10t e^{-0.5t}</span> or the GDC derivative command.
        "(f) では <span class=\"chem\">a = dv/dt</span> です。<span class=\"chem\">10t e^{-0.5t}</span> に積の微分法を使うか、GDC の微分コマンドを使います。",
      ],
      // EN: <p>(a) <span class="chem">v(0) = 0 - 2 = -2</span> <span class="unit">m s-1</span>.<br>(b) GDC zeros of <span class="chem">v</span>: <span class="chem">t = 0.22366…</span> and <span class="chem">t = 7.15430…</span>.<br>(c) <span class="chem">v'(t) = 10e^{-0.5t}(1 - 0.5t) = 0</span> at <span class="chem">t = 2</span>, where <span class="chem">v(2) = 20e^{-1} - 2 = 5.3576…</span>. At the ends <span class="chem">|v(0)| = 2</span> and <span class="chem">|v(10)| = |100e^{-5} - 2| = 1.326…</span>, so the maximum speed is <span class="chem">5.36</span> <span class="unit">m s-1</span>.<br>(d) <span class="chem">int_0^{10} v(t) dt = 18.3829…</span>, so <span class="chem">18.4</span> <span class="unit">m</span>.<br>(e) <span class="chem">int_0^{10} |v(t)| dt = 23.1937…</span>, so <span class="chem">23.2</span> <span class="unit">m</span>. It is larger than (d) because the car moves backwards for <span class="chem">t &lt; 0.224</span> and for <span class="chem">t &gt; 7.15</span>.<br>(f) <span class="chem">a(1) = 10e^{-0.5} - 5e^{-0.5} = 5e^{-0.5} = 3.0327…</span>, so <span class="chem">3.03</span> <span class="unit">m s-2</span>.</p>
      solution: "<p>(a) <span class=\"chem\">v(0) = 0 - 2 = -2</span> <span class=\"unit\">m s-1</span>。<br>(b) <span class=\"chem\">v</span> の GDC でのゼロ点：<span class=\"chem\">t = 0.22366…</span> と <span class=\"chem\">t = 7.15430…</span>。<br>(c) <span class=\"chem\">t = 2</span> で <span class=\"chem\">v'(t) = 10e^{-0.5t}(1 - 0.5t) = 0</span>、ただし <span class=\"chem\">v(2) = 20e^{-1} - 2 = 5.3576…</span>。両端では <span class=\"chem\">|v(0)| = 2</span>、<span class=\"chem\">|v(10)| = |100e^{-5} - 2| = 1.326…</span> なので、速さの最大値は <span class=\"chem\">5.36</span> <span class=\"unit\">m s-1</span> です。<br>(d) <span class=\"chem\">int_0^{10} v(t) dt = 18.3829…</span> なので <span class=\"chem\">18.4</span> <span class=\"unit\">m</span>。<br>(e) <span class=\"chem\">int_0^{10} |v(t)| dt = 23.1937…</span> なので <span class=\"chem\">23.2</span> <span class=\"unit\">m</span>。車は <span class=\"chem\">t &lt; 0.224</span> と <span class=\"chem\">t &gt; 7.15</span> で後ろ向きに動くので、(d) より大きくなります。<br>(f) <span class=\"chem\">a(1) = 10e^{-0.5} - 5e^{-0.5} = 5e^{-0.5} = 3.0327…</span> なので <span class=\"chem\">3.03</span> <span class=\"unit\">m s-2</span>。</p>",
      // EN: <p>(a) <span class="chem">-2</span> <span class="unit">m s-1</span><br>(b) <span class="chem">t = 0.224</span> and <span class="chem">t = 7.15</span><br>(c) <span class="chem">5.36</span> <span class="unit">m s-1</span><br>(d) <span class="chem">18.4</span> <span class="unit">m</span><br>(e) <span class="chem">23.2</span> <span class="unit">m</span><br>(f) <span class="chem">3.03</span> <span class="unit">m s-2</span></p>
      answer: "<p>(a) <span class=\"chem\">-2</span> <span class=\"unit\">m s-1</span><br>(b) <span class=\"chem\">t = 0.224</span> と <span class=\"chem\">t = 7.15</span><br>(c) <span class=\"chem\">5.36</span> <span class=\"unit\">m s-1</span><br>(d) <span class=\"chem\">18.4</span> <span class=\"unit\">m</span><br>(e) <span class=\"chem\">23.2</span> <span class=\"unit\">m</span><br>(f) <span class=\"chem\">3.03</span> <span class=\"unit\">m s-2</span></p>",
      markscheme: [
        // EN: A1: <span class="chem">v(0) = -2</span> <span class="unit">m s-1</span>.
        "A1：<span class=\"chem\">v(0) = -2</span> <span class=\"unit\">m s-1</span>。",
        // EN: M1: Solves <span class="chem">v(t) = 0</span> on the GDC.
        "M1：GDC で <span class=\"chem\">v(t) = 0</span> を解く。",
        // EN: A1: <span class="chem">t = 0.224</span> and <span class="chem">t = 7.15</span>.
        "A1：<span class=\"chem\">t = 0.224</span> と <span class=\"chem\">t = 7.15</span>。",
        // EN: M1: Finds the maximum of <span class="chem">|v|</span>, comparing the local maximum <span class="chem">v(2)</span> with the endpoint values <span class="chem">|v(0)| = 2</span> and <span class="chem">|v(10)| ≈ 1.33</span>.
        "M1：<span class=\"chem\">|v|</span> の最大値を求め、極大値 <span class=\"chem\">v(2)</span> と端点の値 <span class=\"chem\">|v(0)| = 2</span>、<span class=\"chem\">|v(10)| ≈ 1.33</span> を比較する。",
        // EN: A1: Maximum speed <span class="chem">= v(2) = 20e^{-1} - 2 = 5.36</span> <span class="unit">m s-1</span>.
        "A1：速さの最大値 <span class=\"chem\">= v(2) = 20e^{-1} - 2 = 5.36</span> <span class=\"unit\">m s-1</span>。",
        // EN: M1: <span class="chem">int_0^{10} v(t) dt</span>.
        "M1：<span class=\"chem\">int_0^{10} v(t) dt</span>。",
        // EN: A1: <span class="chem">18.4</span> <span class="unit">m</span> (18.38…).
        "A1：<span class=\"chem\">18.4</span> <span class=\"unit\">m</span>（18.38…）。",
        // EN: M1: <span class="chem">int_0^{10} |v(t)| dt</span> (or splits at both zeros and adds absolute values).
        "M1：<span class=\"chem\">int_0^{10} |v(t)| dt</span>（または 2 つのゼロ点で分割し、絶対値を足す）。",
        // EN: A1: <span class="chem">23.2</span> <span class="unit">m</span> (23.19…).
        "A1：<span class=\"chem\">23.2</span> <span class=\"unit\">m</span>（23.19…）。",
        // EN: M1: <span class="chem">a(t) = v'(t) = 10e^{-0.5t} - 5t e^{-0.5t}</span> (or GDC derivative at <span class="chem">t = 1</span>).
        "M1：<span class=\"chem\">a(t) = v'(t) = 10e^{-0.5t} - 5t e^{-0.5t}</span>（または <span class=\"chem\">t = 1</span> での GDC の微分）。",
        // EN: A1: <span class="chem">a(1) = 5e^{-0.5} = 3.03</span> <span class="unit">m s-2</span>.
        "A1：<span class=\"chem\">a(1) = 5e^{-0.5} = 3.03</span> <span class=\"unit\">m s-2</span>。",
      ],
    },

    // ── t5-2-q028 · numeric · challenge · SL · SL 5.5, 5.9 · 6 marks
    "t5-2-q028": {
      // EN: <p>A particle leaves a point <span class="chem">O</span> at <span class="chem">t = 0</span> and moves in a straight line with velocity <span class="chem">v(t) = 4 - t e^{0.3t}</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. Find the time, after it leaves, when the particle is next back at <span class="chem">O</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>粒子が <span class=\"chem\">t = 0</span> に点 <span class=\"chem\">O</span> を出発し、速度 <span class=\"chem\">v(t) = 4 - t e^{0.3t}</span> <span class=\"unit\">m s-1</span> で直線上を動く。ただし、<span class=\"chem\">t &gt;= 0</span> は秒である。出発後、粒子が次に <span class=\"chem\">O</span> に戻る時刻を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: “back at O” means the <strong>displacement</strong> is zero, not the velocity. You need <span class="chem">T &gt; 0</span> with <span class="chem">int_0^T v(t) dt = 0</span>. Solving <span class="chem">v(t) = 0</span> only tells you when the particle turns round.
        "解読：「O に戻る」とは、速度ではなく<strong>変位</strong>が 0 になるということです。<span class=\"chem\">int_0^T v(t) dt = 0</span> として <span class=\"chem\">T &gt; 0</span> が必要です。<span class=\"chem\">v(t) = 0</span> を解いても、粒子が折り返す時刻がわかるだけです。",
        // EN: The particle moves forwards until <span class="chem">v = 0</span> at <span class="chem">t ≈ 2.12</span>, then comes back. So the answer must be later than 2.12 s.
        "粒子は <span class=\"chem\">t ≈ 2.12</span> で <span class=\"chem\">v = 0</span> となるまで前向きに進み、その後戻ってきます。したがって、答えは 2.12 s より後でなければなりません。",
        // EN: On the GDC, graph <span class="chem">y = int_0^x (4 - t e^{0.3t}) dt</span> (or tabulate it) and find where it returns to zero.
        "GDC で <span class=\"chem\">y = int_0^x (4 - t e^{0.3t}) dt</span> のグラフをかき（または表にし）、0 に戻る場所を求めます。",
      ],
      // EN: <p>Decode: returning to <span class="chem">O</span> means <span class="chem">s(T) = s(0)</span>, i.e. <span class="chem">int_0^T (4 - t e^{0.3t}) dt = 0</span> with <span class="chem">T &gt; 0</span>. The particle turns at <span class="chem">t = 2.1185…</span> (where <span class="chem">v = 0</span>), having travelled forwards, so it comes back afterwards. Solving the integral equation on the GDC gives <span class="chem">T = 3.69726…</span>, so the particle is back at <span class="chem">O</span> after <span class="chem">3.70</span> <span class="unit">s</span> (3 s.f.).</p>
      solution: "<p>解読：<span class=\"chem\">O</span> に戻るとは <span class=\"chem\">s(T) = s(0)</span>、すなわち <span class=\"chem\">T &gt; 0</span> として <span class=\"chem\">int_0^T (4 - t e^{0.3t}) dt = 0</span> ということです。粒子は前向きに進んだあと <span class=\"chem\">t = 2.1185…</span> で折り返す（ここで <span class=\"chem\">v = 0</span>）ので、その後戻ってきます。この積分方程式を GDC で解くと <span class=\"chem\">T = 3.69726…</span> なので、粒子は <span class=\"chem\">3.70</span> <span class=\"unit\">s</span> 後に <span class=\"chem\">O</span> に戻ります（有効数字 3 桁）。</p>",
    },

    // ── t5-2-q029 · numeric · challenge · SL · SL 5.5, 5.9 · 6 marks
    "t5-2-q029": {
      // EN: <p>A particle moves along a straight line with velocity <span class="chem">v(t) = 2 cos t + 0.5t - 1</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. The particle has an odometer that records the total distance it has travelled since <span class="chem">t = 0</span>. Find the time at which the odometer first reads <span class="chem">10</span> <span class="unit">m</span>. Give your answer correct to 3 significant figures.</p>
      stem: "<p>粒子が速度 <span class=\"chem\">v(t) = 2 cos t + 0.5t - 1</span> <span class=\"unit\">m s-1</span> で直線上を動く。ただし、<span class=\"chem\">t &gt;= 0</span> は秒である。粒子には <span class=\"chem\">t = 0</span> から進んだ総移動距離を記録する走行距離計がついている。走行距離計が初めて <span class=\"chem\">10</span> <span class=\"unit\">m</span> を示す時刻を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: an odometer measures <strong>distance</strong>, which never decreases. You need <span class="chem">T</span> with <span class="chem">int_0^T |v(t)| dt = 10</span>; using <span class="chem">int_0^T v(t) dt = 10</span> would treat backward motion as negative.
        "解読：走行距離計が測るのは<strong>移動距離</strong>で、これは決して減りません。<span class=\"chem\">int_0^T |v(t)| dt = 10</span> として <span class=\"chem\">T</span> が必要です。<span class=\"chem\">int_0^T v(t) dt = 10</span> を使うと後ろ向きの運動を負として扱ってしまいます。",
        // EN: In radians, <span class="chem">v</span> changes sign at <span class="chem">t ≈ 1.427</span> and <span class="chem">t ≈ 4.146</span>, and is positive after that.
        "ラジアンでは、<span class=\"chem\">v</span> は <span class=\"chem\">t ≈ 1.427</span> と <span class=\"chem\">t ≈ 4.146</span> で符号を変え、その後は正です。",
        // EN: Graph <span class="chem">y = int_0^x |2 cos t + 0.5t - 1| dt</span> on the GDC and intersect it with <span class="chem">y = 10</span>.
        "GDC で <span class=\"chem\">y = int_0^x |2 cos t + 0.5t - 1| dt</span> のグラフをかき、<span class=\"chem\">y = 10</span> との交点を求めます。",
      ],
      // EN: <p>Decode: the reading is the total distance <span class="chem">D(T) = int_0^T |v(t)| dt</span>, an increasing function. Solve <span class="chem">D(T) = 10</span>. The velocity is positive on <span class="chem">[0, 1.427)</span>, negative on <span class="chem">(1.427, 4.146)</span> and positive afterwards. The GDC gives <span class="chem">D(4.146…) ≈ 3.66</span>, so the 10 m mark is reached later, at <span class="chem">T = 6.57413…</span>, i.e. <span class="chem">6.57</span> <span class="unit">s</span> (3 s.f.). Solving <span class="chem">int_0^T v dt = 10</span> instead would give a later, wrong time.</p>
      solution: "<p>解読：表示は総移動距離 <span class=\"chem\">D(T) = int_0^T |v(t)| dt</span> で、これは増加関数です。<span class=\"chem\">D(T) = 10</span> を解きます。速度は <span class=\"chem\">[0, 1.427)</span> で正、<span class=\"chem\">(1.427, 4.146)</span> で負、その後は正です。GDC から <span class=\"chem\">D(4.146…) ≈ 3.66</span> なので、10 m の表示に達するのはもっと後の <span class=\"chem\">T = 6.57413…</span>、すなわち <span class=\"chem\">6.57</span> <span class=\"unit\">s</span>（有効数字 3 桁）です。代わりに <span class=\"chem\">int_0^T v dt = 10</span> を解くと、もっと遅い誤った時刻が出てしまいます。</p>",
    },

    // ── t5-2-q030 · numeric · challenge · SL · SL 5.5, 5.9 · 6 marks
    "t5-2-q030": {
      // EN: <p>A drone takes off vertically from the ground at <span class="chem">t = 0</span>. For the first <span class="chem">10</span> seconds of its flight its vertical velocity, measured upwards, is <span class="chem">v(t) = 6 - t - 2 sin t</span> <span class="unit">m s-1</span>. Find the greatest height above the ground that the drone reaches during these 10 seconds. Give your answer correct to 3 significant figures.</p>
      stem: "<p>ドローンが <span class=\"chem\">t = 0</span> に地面から鉛直に離陸する。飛行の最初の <span class=\"chem\">10</span> 秒間、上向きを正とした鉛直方向の速度は <span class=\"chem\">v(t) = 6 - t - 2 sin t</span> <span class=\"unit\">m s-1</span> である。この 10 秒間にドローンが達する地面からの最大の高さを求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: height is the displacement <span class="chem">s(t) = int_0^t v(u) du</span> (it starts at 0). Its greatest value occurs where <span class="chem">v</span> changes from positive to negative, not at <span class="chem">t = 10</span>.
        "解読：高さは変位 <span class=\"chem\">s(t) = int_0^t v(u) du</span> です（0 から始まります）。その最大値は <span class=\"chem\">t = 10</span> ではなく、<span class=\"chem\">v</span> が正から負に変わるところで生じます。",
        // EN: In radians, the GDC gives the zero of <span class="chem">v</span> at <span class="chem">t ≈ 6.1887</span>; <span class="chem">v &gt; 0</span> before it and <span class="chem">v &lt; 0</span> after it.
        "ラジアンでは、GDC から <span class=\"chem\">v</span> のゼロ点は <span class=\"chem\">t ≈ 6.1887</span> です。その前は <span class=\"chem\">v &gt; 0</span>、その後は <span class=\"chem\">v &lt; 0</span> です。",
        // EN: Evaluate <span class="chem">int_0^{6.1887} (6 - t - 2 sin t) dt</span>.
        "<span class=\"chem\">int_0^{6.1887} (6 - t - 2 sin t) dt</span> を計算します。",
      ],
      // EN: <p>Decode: maximum height = maximum of <span class="chem">s(t) = int_0^t v</span>, which occurs where <span class="chem">v</span> changes sign from + to −. The only zero of <span class="chem">v</span> in <span class="chem">[0, 10]</span> is <span class="chem">t_1 = 6.18869…</span>. The greatest height is <span class="chem">s(t_1) = int_0^{t_1} (6 - t - 2 sin t) dt = 17.9732…</span>, i.e. <span class="chem">18.0</span> <span class="unit">m</span> (3 s.f.). (At <span class="chem">t = 10</span> the drone is lower, at about <span class="chem">6.32</span> <span class="unit">m</span>, and it never reaches the ground in between.)</p>
      solution: "<p>解読：最大の高さ = <span class=\"chem\">s(t) = int_0^t v</span> の最大値で、<span class=\"chem\">v</span> の符号が + から − に変わるところで生じます。<span class=\"chem\">[0, 10]</span> における <span class=\"chem\">v</span> のゼロ点は <span class=\"chem\">t_1 = 6.18869…</span> だけです。最大の高さは <span class=\"chem\">s(t_1) = int_0^{t_1} (6 - t - 2 sin t) dt = 17.9732…</span>、すなわち <span class=\"chem\">18.0</span> <span class=\"unit\">m</span>（有効数字 3 桁）です。（<span class=\"chem\">t = 10</span> ではドローンはもっと低い約 <span class=\"chem\">6.32</span> <span class=\"unit\">m</span> の位置にあり、その間に地面に達することはありません。）</p>",
    },

    // ── t5-2-q031 · numeric · exam · SL · SL 5.5 · 4 marks
    "t5-2-q031": {
      // EN: <p>A function <span class="chem">f</span> satisfies <span class="chem">f'(x) = e^{-x^2}</span> and <span class="chem">f(0) = 2</span>. Find <span class="chem">f(1.5)</span>, correct to 3 significant figures.</p>
      stem: "<p>関数 <span class=\"chem\">f</span> は <span class=\"chem\">f'(x) = e^{-x^2}</span> と <span class=\"chem\">f(0) = 2</span> を満たす。<span class=\"chem\">f(1.5)</span> を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is a boundary-condition question, but <span class="chem">e^{-x^2}</span> has no elementary antiderivative, so you cannot find <span class="chem">f(x)</span> as a formula. Use <span class="chem">f(1.5) = f(0) + int_0^{1.5} f'(x) dx</span> instead.
        "解読：これは境界条件の問題ですが、<span class=\"chem\">e^{-x^2}</span> には初等的な原始関数がないので、<span class=\"chem\">f(x)</span> を式として求めることはできません。代わりに <span class=\"chem\">f(1.5) = f(0) + int_0^{1.5} f'(x) dx</span> を使います。",
        // EN: Evaluate <span class="chem">int_0^{1.5} e^{-x^2} dx</span> on your GDC and add <span class="chem">2</span>.
        "GDC で <span class=\"chem\">int_0^{1.5} e^{-x^2} dx</span> を計算し、<span class=\"chem\">2</span> を足します。",
      ],
      // EN: <p>Decode: “find <span class="chem">f</span> from <span class="chem">f'</span> and one point”, done with a definite integral. <span class="chem">f(1.5) - f(0) = int_0^{1.5} e^{-x^2} dx = 0.85619…</span> (GDC). So <span class="chem">f(1.5) = 2 + 0.85619… = 2.85619…</span>, i.e. <span class="chem">2.86</span> (3 s.f.).</p>
      solution: "<p>解読：「<span class=\"chem\">f'</span> と 1 点から <span class=\"chem\">f</span> を求める」問題を定積分で解きます。<span class=\"chem\">f(1.5) - f(0) = int_0^{1.5} e^{-x^2} dx = 0.85619…</span>（GDC）。よって <span class=\"chem\">f(1.5) = 2 + 0.85619… = 2.85619…</span>、すなわち <span class=\"chem\">2.86</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-2-q032 · numeric · challenge · SL · SL 5.5, 5.10, 5.11 · 6 marks
    "t5-2-q032": {
      // EN: <p>Given that <span class="chem">k &gt; 1</span> and <span class="chem">int_1^k (1/x + x/4) dx = 3</span>, find the value of <span class="chem">k</span>, correct to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">k &gt; 1</span> かつ <span class=\"chem\">int_1^k (1/x + x/4) dx = 3</span> のとき、<span class=\"chem\">k</span> の値を有効数字 3 桁で求めなさい (find)。</p>",
      hints: [
        // EN: Decode: the unknown is a <strong>limit</strong> of the integral. Integrate first to get an equation in <span class="chem">k</span>, then solve that equation on the GDC (it mixes <span class="chem">ln k</span> and <span class="chem">k^2</span>, so it has no algebraic solution).
        "解読：未知数は積分の<strong>端</strong>です。まず積分して <span class=\"chem\">k</span> の方程式を作り、それを GDC で解きます（<span class=\"chem\">ln k</span> と <span class=\"chem\">k^2</span> が混ざっているので、代数的には解けません）。",
        // EN: An antiderivative is <span class="chem">ln x + x^2/8</span>, so the equation is <span class="chem">ln k + (k^2 - 1)/8 = 3</span>.
        "原始関数の 1 つは <span class=\"chem\">ln x + x^2/8</span> なので、方程式は <span class=\"chem\">ln k + (k^2 - 1)/8 = 3</span> です。",
        // EN: Graph <span class="chem">y = ln x + (x^2 - 1)/8</span> and <span class="chem">y = 3</span> and intersect them for <span class="chem">x &gt; 1</span>.
        "<span class=\"chem\">y = ln x + (x^2 - 1)/8</span> と <span class=\"chem\">y = 3</span> のグラフをかき、<span class=\"chem\">x &gt; 1</span> で交点を求めます。",
      ],
      // EN: <p>Decode: unknown upper limit, so integrate and then solve. <span class="chem">int_1^k (1/x + x/4) dx = [ln x + x^2/8]_1^k = ln k + k^2/8 - 1/8</span>. Setting this equal to 3: <span class="chem">ln k + (k^2 - 1)/8 = 3</span>. The left side is increasing for <span class="chem">k &gt; 1</span>, so there is one solution; the GDC gives <span class="chem">k = 3.78762…</span>, i.e. <span class="chem">3.79</span> (3 s.f.). (Alternatively, solve <span class="chem">int_1^k (1/x + x/4) dx - 3 = 0</span> directly with the GDC solver.)</p>
      solution: "<p>解読：上端が未知なので、積分してから解きます。<span class=\"chem\">int_1^k (1/x + x/4) dx = [ln x + x^2/8]_1^k = ln k + k^2/8 - 1/8</span>。これを 3 とおくと：<span class=\"chem\">ln k + (k^2 - 1)/8 = 3</span>。左辺は <span class=\"chem\">k &gt; 1</span> で増加するので解は 1 つです。GDC から <span class=\"chem\">k = 3.78762…</span>、すなわち <span class=\"chem\">3.79</span>（有効数字 3 桁）です。（または、GDC のソルバーで <span class=\"chem\">int_1^k (1/x + x/4) dx - 3 = 0</span> を直接解きます。）</p>",
    },

    // ── t5-2-q033 · numeric · challenge · SL · SL 5.5 · 7 marks
    "t5-2-q033": {
      // EN: <p>At midnight (<span class="chem">t = 0</span>) a rainwater tank holds <span class="chem">200</span> litres. Over the next 24 hours, water flows in at a rate of <span class="chem">30 + 10 sin(pi t / 12)</span> litres per hour, while water is drawn off for a garden at a rate of <span class="chem">2t</span> litres per hour, where <span class="chem">t</span> is the time in hours after midnight. Find the greatest volume of water in the tank during these 24 hours, correct to 3 significant figures.</p>
      stem: "<p>真夜中（<span class=\"chem\">t = 0</span>）に雨水タンクには <span class=\"chem\">200</span> リットルの水が入っている。その後の 24 時間、水は毎時 <span class=\"chem\">30 + 10 sin(pi t / 12)</span> リットルの割合で流れ込み、同時に庭の水やりのために毎時 <span class=\"chem\">2t</span> リットルの割合で取り出される。ただし、<span class=\"chem\">t</span> は真夜中からの時間（時間単位）である。この 24 時間におけるタンク内の水の体積の最大値を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is a net-change problem. The rate of change of volume is (rate in) − (rate out) <span class="chem">= 30 + 10 sin(pi t/12) - 2t</span>, and <span class="chem">V(T) = 200 + int_0^T (rate in - rate out) dt</span>. The volume is greatest when the net rate changes from positive to negative.
        "解読：これは正味の変化の問題です。体積の変化率は（流入の割合）−（流出の割合）<span class=\"chem\">= 30 + 10 sin(pi t/12) - 2t</span> で、<span class=\"chem\">V(T) = 200 + int_0^T (rate in - rate out) dt</span> です。正味の割合が正から負に変わるとき、体積は最大になります。",
        // EN: Solve <span class="chem">30 + 10 sin(pi t / 12) - 2t = 0</span> on the GDC (radians): <span class="chem">t ≈ 13.31</span> hours.
        "GDC（ラジアン）で <span class=\"chem\">30 + 10 sin(pi t / 12) - 2t = 0</span> を解きます：<span class=\"chem\">t ≈ 13.31</span> 時間。",
        // EN: Evaluate <span class="chem">200 + int_0^{13.31} (30 + 10 sin(pi t / 12) - 2t) dt</span>, and check it is bigger than the value at the end points (<span class="chem">V(0) = 200</span>, <span class="chem">V(24) = 344</span>).
        "<span class=\"chem\">200 + int_0^{13.31} (30 + 10 sin(pi t / 12) - 2t) dt</span> を計算し、それが端点での値（<span class=\"chem\">V(0) = 200</span>、<span class=\"chem\">V(24) = 344</span>）より大きいことを確認します。",
      ],
      // EN: <p>Decode: “flows in at a rate … drawn off at a rate” describes <span class="chem">dV/dt = 30 + 10 sin(pi t/12) - 2t</span>, and the start volume is a boundary condition. <span class="chem">dV/dt = 0</span> at <span class="chem">t_1 = 13.3138…</span>, with <span class="chem">dV/dt &gt; 0</span> before and <span class="chem">&lt; 0</span> after, so <span class="chem">V</span> has its maximum there. <span class="chem">V(t_1) = 200 + int_0^{t_1} (30 + 10 sin(pi t/12) - 2t) dt = 496.313…</span>. The end values are <span class="chem">V(0) = 200</span> and <span class="chem">V(24) = 200 + 720 + 0 - 576 = 344</span>. The greatest volume is <span class="chem">496</span> litres (3 s.f.).</p>
      solution: "<p>解読：「…の割合で流れ込み…の割合で取り出される」は <span class=\"chem\">dV/dt = 30 + 10 sin(pi t/12) - 2t</span> を表し、最初の体積は境界条件です。<span class=\"chem\">t_1 = 13.3138…</span> で <span class=\"chem\">dV/dt = 0</span> となり、その前は <span class=\"chem\">dV/dt &gt; 0</span>、その後は <span class=\"chem\">&lt; 0</span> なので、<span class=\"chem\">V</span> はそこで最大になります。<span class=\"chem\">V(t_1) = 200 + int_0^{t_1} (30 + 10 sin(pi t/12) - 2t) dt = 496.313…</span>。端点での値は <span class=\"chem\">V(0) = 200</span> と <span class=\"chem\">V(24) = 200 + 720 + 0 - 576 = 344</span> です。体積の最大値は <span class=\"chem\">496</span> リットル（有効数字 3 桁）です。</p>",
    },

    // ── t5-2-q034 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q034": {
      // EN: <p>The curves <span class="chem">y = x^2 - 4</span> and <span class="chem">y = -2 cos x</span> enclose a finite region <span class="chem">R</span>, most of which lies below the <span class="chem">x</span>-axis. Find the area of <span class="chem">R</span>, correct to 3 significant figures.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x^2 - 4</span> と <span class=\"chem\">y = -2 cos x</span> は有限領域 <span class=\"chem\">R</span> を囲み、その大部分は <span class=\"chem\">x</span> 軸の下側にある。<span class=\"chem\">R</span> の面積を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the region being below the <span class="chem">x</span>-axis does not change the method for the area between two curves. Integrate (upper curve − lower curve) between the intersections; you do not split at the <span class="chem">x</span>-axis.
        "解読：領域が <span class=\"chem\">x</span> 軸の下側にあっても、2 曲線間の面積の求め方は変わりません。交点の間で（上側の曲線 − 下側の曲線）を積分します。<span class=\"chem\">x</span> 軸で分割する必要はありません。",
        // EN: In radians, the curves intersect at <span class="chem">x ≈ ±2.3136</span>. At <span class="chem">x = 0</span>: <span class="chem">-2 cos 0 = -2</span> and <span class="chem">0^2 - 4 = -4</span>, so <span class="chem">y = -2 cos x</span> is the upper curve.
        "ラジアンでは、2 曲線は <span class=\"chem\">x ≈ ±2.3136</span> で交わります。<span class=\"chem\">x = 0</span> では <span class=\"chem\">-2 cos 0 = -2</span>、<span class=\"chem\">0^2 - 4 = -4</span> なので、<span class=\"chem\">y = -2 cos x</span> が上側の曲線です。",
        // EN: Evaluate <span class="chem">int_{-2.3136}^{2.3136} (-2 cos x - x^2 + 4) dx</span>.
        "<span class=\"chem\">int_{-2.3136}^{2.3136} (-2 cos x - x^2 + 4) dx</span> を計算します。",
      ],
      // EN: <p>Solving <span class="chem">x^2 - 4 = -2 cos x</span> on the GDC gives <span class="chem">x = ±2.31358…</span>. Between them, <span class="chem">-2 cos x &gt;= x^2 - 4</span>. Area <span class="chem">= int_{-2.31358}^{2.31358} (-2 cos x - (x^2 - 4)) dx = 7.30642…</span>, so <span class="chem">7.31</span> (3 s.f.). Because the integrand is (upper − lower) ≥ 0, the answer is positive even though both curves are below the axis for much of the interval.</p>
      solution: "<p>GDC で <span class=\"chem\">x^2 - 4 = -2 cos x</span> を解くと <span class=\"chem\">x = ±2.31358…</span> です。その間では <span class=\"chem\">-2 cos x &gt;= x^2 - 4</span> です。面積は <span class=\"chem\">= int_{-2.31358}^{2.31358} (-2 cos x - (x^2 - 4)) dx = 7.30642…</span> なので <span class=\"chem\">7.31</span>（有効数字 3 桁）です。被積分関数は（上側 − 下側）≥ 0 なので、区間の大部分で両方の曲線が軸の下側にあっても答えは正になります。</p>",
    },

    // ── t5-2-q035 · numeric · foundation · SL · SL 5.5, 5.11 · 3 marks
    "t5-2-q035": {
      // EN: <p>Find the value of <span class="chem">int_1^2 (3x^2 + 2/x^2) dx</span>.</p>
      stem: "<p><span class=\"chem\">int_1^2 (3x^2 + 2/x^2) dx</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write <span class="chem">2/x^2</span> as <span class="chem">2x^{-2}</span>, which integrates to <span class="chem">2x^{-1}/(-1) = -2/x</span>.
        "<span class=\"chem\">2/x^2</span> を <span class=\"chem\">2x^{-2}</span> と書くと、積分は <span class=\"chem\">2x^{-1}/(-1) = -2/x</span> になります。",
        // EN: Evaluate <span class="chem">[x^3 - 2/x]_1^2</span> as <span class="chem">F(2) - F(1)</span>, keeping brackets around <span class="chem">F(1)</span>.
        "<span class=\"chem\">F(1)</span> のかっこを残したまま、<span class=\"chem\">[x^3 - 2/x]_1^2</span> を <span class=\"chem\">F(2) - F(1)</span> として計算します。",
      ],
      // EN: <p><span class="chem">int_1^2 (3x^2 + 2x^{-2}) dx = [x^3 - 2/x]_1^2 = (8 - 1) - (1 - 2) = 7 + 1 = 8</span>.</p>
      solution: "<p><span class=\"chem\">int_1^2 (3x^2 + 2x^{-2}) dx = [x^3 - 2/x]_1^2 = (8 - 1) - (1 - 2) = 7 + 1 = 8</span>。</p>",
    },

    // ── t5-2-q036 · mcq · foundation · SL · SL 5.10 · 2 marks
    "t5-2-q036": {
      // EN: <p>Find <span class="chem">int sin(3x - 1) dx</span>.</p>
      stem: "<p><span class=\"chem\">int sin(3x - 1) dx</span> を求めなさい (Find)。</p>",
      options: [
        // EN: <span class="chem">(1/3) cos(3x - 1) + C</span>
        "<span class=\"chem\">(1/3) cos(3x - 1) + C</span>",
        // EN: <span class="chem">-3 cos(3x - 1) + C</span>
        "<span class=\"chem\">-3 cos(3x - 1) + C</span>",
        // EN: <span class="chem">-(1/3) cos(3x - 1) + C</span>
        "<span class=\"chem\">-(1/3) cos(3x - 1) + C</span>",
        // EN: <span class="chem">-cos((3x^2)/2 - x) + C</span>
        "<span class=\"chem\">-cos((3x^2)/2 - x) + C</span>",
      ],
      hints: [
        // EN: Use <span class="chem">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span>.
        "<span class=\"chem\">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span> を使います。",
        // EN: Check by differentiating your answer: the chain rule should bring out a factor <span class="chem">3</span> that cancels the <span class="chem">1/3</span>.
        "答えを微分して確かめましょう。合成関数の微分法により因数 <span class=\"chem\">3</span> が出てきて、<span class=\"chem\">1/3</span> と打ち消し合うはずです。",
      ],
      // EN: <p>With <span class="chem">a = 3</span>: <span class="chem">int sin(3x - 1) dx = -(1/3) cos(3x - 1) + C</span>. Check: <span class="chem">d/dx(-(1/3) cos(3x - 1)) = -(1/3)(-sin(3x - 1))(3) = sin(3x - 1)</span>.</p>
      solution: "<p><span class=\"chem\">a = 3</span> を使うと：<span class=\"chem\">int sin(3x - 1) dx = -(1/3) cos(3x - 1) + C</span>。確認：<span class=\"chem\">d/dx(-(1/3) cos(3x - 1)) = -(1/3)(-sin(3x - 1))(3) = sin(3x - 1)</span>。</p>",
      misconception: {
        // EN (option A): You divided by 3 correctly but lost the minus sign: the integral of sin u is −cos u, so the answer is −(1/3) cos(3x − 1) + C.
        "0": "3 で正しく割りましたが、マイナス符号が抜けています。sin u の積分は −cos u なので、答えは −(1/3) cos(3x − 1) + C です。",
        // EN (option B): You multiplied by the inner coefficient 3 (as in the chain rule for differentiation) instead of dividing by it.
        "1": "内側の係数 3 で割るのではなく、（微分の合成関数の微分法のように）掛けてしまいました。",
        // EN (option D): You integrated the inside 3x − 1 as well. For a linear composite f(ax + b), keep the bracket unchanged and divide by a.
        "3": "内側の 3x − 1 まで積分してしまいました。1 次式との合成関数 f(ax + b) では、かっこはそのままにして a で割ります。",
      },
    },

    // ── t5-2-q037 · numeric · foundation · SL · SL 5.5, 5.9 · 3 marks
    "t5-2-q037": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = 3t^2 - 2t + 1</span> <span class="unit">m s-1</span>, where <span class="chem">t</span> is in seconds. Its displacement from a fixed point <span class="chem">O</span> at <span class="chem">t = 0</span> is <span class="chem">4</span> <span class="unit">m</span>. Find its displacement from <span class="chem">O</span> when <span class="chem">t = 2</span>.</p>
      stem: "<p>粒子が速度 <span class=\"chem\">v(t) = 3t^2 - 2t + 1</span> <span class=\"unit\">m s-1</span> で直線上を動く。ただし、<span class=\"chem\">t</span> は秒である。<span class=\"chem\">t = 0</span> における定点 <span class=\"chem\">O</span> からの変位は <span class=\"chem\">4</span> <span class=\"unit\">m</span> である。<span class=\"chem\">t = 2</span> のときの <span class=\"chem\">O</span> からの変位を求めなさい (Find)。</p>",
      hints: [
        // EN: Displacement is the antiderivative of velocity: <span class="chem">s(t) = t^3 - t^2 + t + C</span>.
        "変位は速度の原始関数です：<span class=\"chem\">s(t) = t^3 - t^2 + t + C</span>。",
        // EN: Use <span class="chem">s(0) = 4</span> to find <span class="chem">C</span>, then substitute <span class="chem">t = 2</span>.
        "<span class=\"chem\">s(0) = 4</span> を使って <span class=\"chem\">C</span> を求め、<span class=\"chem\">t = 2</span> を代入します。",
      ],
      // EN: <p><span class="chem">s(t) = int (3t^2 - 2t + 1) dt = t^3 - t^2 + t + C</span>. Since <span class="chem">s(0) = 4</span>, <span class="chem">C = 4</span>. Then <span class="chem">s(2) = 8 - 4 + 2 + 4 = 10</span> <span class="unit">m</span>.</p>
      solution: "<p><span class=\"chem\">s(t) = int (3t^2 - 2t + 1) dt = t^3 - t^2 + t + C</span>。<span class=\"chem\">s(0) = 4</span> より <span class=\"chem\">C = 4</span>。よって <span class=\"chem\">s(2) = 8 - 4 + 2 + 4 = 10</span> <span class=\"unit\">m</span> です。</p>",
    },

    // ── t5-2-q038 · short · exam · SL · SL 5.10 · 6 marks
    "t5-2-q038": {
      // EN: <p>Find each of the following.<br>(a) <span class="chem">int (2x + 1)^5 dx</span> <strong>[2 marks]</strong><br>(b) <span class="chem">int 6/(3x - 2) dx</span>, for <span class="chem">x &gt; 2/3</span> <strong>[2 marks]</strong><br>(c) <span class="chem">int 4e^{1 - 2x} dx</span> <strong>[2 marks]</strong></p>
      stem: "<p>次のそれぞれを求めなさい (Find)。<br>(a) <span class=\"chem\">int (2x + 1)^5 dx</span> <strong>[2 marks]</strong><br>(b) <span class=\"chem\">int 6/(3x - 2) dx</span>（ただし <span class=\"chem\">x &gt; 2/3</span>） <strong>[2 marks]</strong><br>(c) <span class=\"chem\">int 4e^{1 - 2x} dx</span> <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Each integrand is a standard function of a linear expression <span class="chem">ax + b</span>: integrate as usual, keep the bracket, and divide by <span class="chem">a</span>.
        "どの被積分関数も 1 次式 <span class=\"chem\">ax + b</span> の基本的な関数です。いつもどおり積分し、かっこはそのままにして <span class=\"chem\">a</span> で割ります。",
        // EN: In (c) the inner coefficient is <span class="chem">a = -2</span>, so dividing by it changes the sign.
        "(c) では内側の係数が <span class=\"chem\">a = -2</span> なので、それで割ると符号が変わります。",
      ],
      // EN: <p>(a) <span class="chem">int (2x + 1)^5 dx = (2x + 1)^6 / (6 × 2) + C = (2x + 1)^6 / 12 + C</span>.<br>(b) <span class="chem">int 6/(3x - 2) dx = 6 × (1/3) ln|3x - 2| + C = 2 ln(3x - 2) + C</span>, since <span class="chem">3x - 2 &gt; 0</span>.<br>(c) <span class="chem">int 4e^{1 - 2x} dx = 4 × (1/(-2)) e^{1 - 2x} + C = -2e^{1 - 2x} + C</span>.</p>
      solution: "<p>(a) <span class=\"chem\">int (2x + 1)^5 dx = (2x + 1)^6 / (6 × 2) + C = (2x + 1)^6 / 12 + C</span>。<br>(b) <span class=\"chem\">3x - 2 &gt; 0</span> なので <span class=\"chem\">int 6/(3x - 2) dx = 6 × (1/3) ln|3x - 2| + C = 2 ln(3x - 2) + C</span>。<br>(c) <span class=\"chem\">int 4e^{1 - 2x} dx = 4 × (1/(-2)) e^{1 - 2x} + C = -2e^{1 - 2x} + C</span>。</p>",
      // EN: <p>(a) <span class="chem">(2x + 1)^6 / 12 + C</span><br>(b) <span class="chem">2 ln(3x - 2) + C</span><br>(c) <span class="chem">-2e^{1 - 2x} + C</span></p>
      answer: "<p>(a) <span class=\"chem\">(2x + 1)^6 / 12 + C</span><br>(b) <span class=\"chem\">2 ln(3x - 2) + C</span><br>(c) <span class=\"chem\">-2e^{1 - 2x} + C</span></p>",
      markscheme: [
        // EN: M1: Power <span class="chem">(2x + 1)^6</span> with a division by the inner coefficient <span class="chem">2</span>.
        "M1：累乗 <span class=\"chem\">(2x + 1)^6</span> で、内側の係数 <span class=\"chem\">2</span> で割っている。",
        // EN: A1: <span class="chem">(2x + 1)^6 / 12 + C</span>.
        "A1：<span class=\"chem\">(2x + 1)^6 / 12 + C</span>。",
        // EN: M1: Logarithm form <span class="chem">k ln(3x - 2)</span>.
        "M1：対数の形 <span class=\"chem\">k ln(3x - 2)</span>。",
        // EN: A1: <span class="chem">2 ln(3x - 2) + C</span> (modulus not needed as <span class="chem">x &gt; 2/3</span>).
        "A1：<span class=\"chem\">2 ln(3x - 2) + C</span>（<span class=\"chem\">x &gt; 2/3</span> なので絶対値は不要）。",
        // EN: M1: Exponential form <span class="chem">k e^{1 - 2x}</span>.
        "M1：指数関数の形 <span class=\"chem\">k e^{1 - 2x}</span>。",
        // EN: A1: <span class="chem">-2e^{1 - 2x} + C</span>.
        "A1：<span class=\"chem\">-2e^{1 - 2x} + C</span>。",
      ],
    },

    // ── t5-2-q039 · numeric · exam · SL · SL 3.6, 5.10, 5.11 · 5 marks
    "t5-2-q039": {
      // EN: <p>Find the exact value of <span class="chem">int_0^{pi/4} (sin x + cos x)^2 dx</span>.</p>
      stem: "<p><span class=\"chem\">int_0^{pi/4} (sin x + cos x)^2 dx</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: you cannot integrate a squared bracket of trig functions directly. Expand it and use identities to turn it into terms you can integrate.
        "解読：三角関数のかっこの 2 乗はそのままでは積分できません。展開し、公式を使って積分できる項に直しましょう。",
        // EN: <span class="chem">(sin x + cos x)^2 = sin^2 x + cos^2 x + 2 sin x cos x = 1 + sin(2x)</span>.
        "<span class=\"chem\">(sin x + cos x)^2 = sin^2 x + cos^2 x + 2 sin x cos x = 1 + sin(2x)</span>。",
        // EN: <span class="chem">int sin(2x) dx = -(1/2) cos(2x)</span>. Then use <span class="chem">cos(pi/2) = 0</span> and <span class="chem">cos 0 = 1</span>.
        "<span class=\"chem\">int sin(2x) dx = -(1/2) cos(2x)</span>。次に <span class=\"chem\">cos(pi/2) = 0</span> と <span class=\"chem\">cos 0 = 1</span> を使います。",
      ],
      // EN: <p>Expanding, <span class="chem">(sin x + cos x)^2 = 1 + 2 sin x cos x = 1 + sin(2x)</span>. So <span class="chem">int_0^{pi/4} (1 + sin(2x)) dx = [x - (1/2) cos(2x)]_0^{pi/4} = (pi/4 - (1/2)(0)) - (0 - 1/2) = pi/4 + 1/2</span>.</p>
      solution: "<p>展開すると <span class=\"chem\">(sin x + cos x)^2 = 1 + 2 sin x cos x = 1 + sin(2x)</span>。よって <span class=\"chem\">int_0^{pi/4} (1 + sin(2x)) dx = [x - (1/2) cos(2x)]_0^{pi/4} = (pi/4 - (1/2)(0)) - (0 - 1/2) = pi/4 + 1/2</span> です。</p>",
    },

    // ── t5-2-q040 · numeric · exam · SL · SL 5.10, 5.11 · 4 marks
    "t5-2-q040": {
      // EN: <p>Find the exact value of <span class="chem">int_0^1 x(x^2 + 1)^3 dx</span>.</p>
      stem: "<p><span class=\"chem\">int_0^1 x(x^2 + 1)^3 dx</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: The factor <span class="chem">x</span> is (half of) the derivative of the inner function <span class="chem">x^2 + 1</span>: this is the reverse chain rule pattern <span class="chem">int g'(x) [g(x)]^n dx</span>.
        "因数 <span class=\"chem\">x</span> は内側の関数 <span class=\"chem\">x^2 + 1</span> の導関数（の半分）です。これは合成関数の微分の逆のパターン <span class=\"chem\">int g'(x) [g(x)]^n dx</span> です。",
        // EN: Let <span class="chem">u = x^2 + 1</span>, so <span class="chem">du = 2x dx</span> and the limits become <span class="chem">u = 1</span> to <span class="chem">u = 2</span>.
        "<span class=\"chem\">u = x^2 + 1</span> とおくと <span class=\"chem\">du = 2x dx</span> で、積分区間は <span class=\"chem\">u = 1</span> から <span class=\"chem\">u = 2</span> になります。",
      ],
      // EN: <p>With <span class="chem">u = x^2 + 1</span>, <span class="chem">x dx = (1/2) du</span>, and <span class="chem">x = 0, 1</span> give <span class="chem">u = 1, 2</span>. So the integral is <span class="chem">(1/2) int_1^2 u^3 du = (1/2)[u^4/4]_1^2 = (1/8)(16 - 1) = 15/8</span>.</p>
      solution: "<p><span class=\"chem\">u = x^2 + 1</span> とおくと <span class=\"chem\">x dx = (1/2) du</span> で、<span class=\"chem\">x = 0, 1</span> から <span class=\"chem\">u = 1, 2</span> です。よって積分は <span class=\"chem\">(1/2) int_1^2 u^3 du = (1/2)[u^4/4]_1^2 = (1/8)(16 - 1) = 15/8</span> です。</p>",
    },

    // ── t5-2-q041 · numeric · exam · SL · SL 5.10, 5.11 · 4 marks
    "t5-2-q041": {
      // EN: <p>Find the exact value of <span class="chem">int_0^{ln 2} e^x / (e^x + 1) dx</span>, giving your answer as a single logarithm.</p>
      stem: "<p><span class=\"chem\">int_0^{ln 2} e^x / (e^x + 1) dx</span> の正確な値を求め、答えを 1 つの対数で表しなさい (Find)。</p>",
      hints: [
        // EN: The numerator <span class="chem">e^x</span> is exactly the derivative of the denominator <span class="chem">e^x + 1</span>, so the integral is of the form <span class="chem">int g'(x)/g(x) dx = ln|g(x)| + C</span>.
        "分子 <span class=\"chem\">e^x</span> はちょうど分母 <span class=\"chem\">e^x + 1</span> の導関数なので、積分は <span class=\"chem\">int g'(x)/g(x) dx = ln|g(x)| + C</span> の形です。",
        // EN: Evaluate <span class="chem">[ln(e^x + 1)]_0^{ln 2}</span> using <span class="chem">e^{ln 2} = 2</span>.
        "<span class=\"chem\">e^{ln 2} = 2</span> を使って <span class=\"chem\">[ln(e^x + 1)]_0^{ln 2}</span> を計算します。",
      ],
      // EN: <p><span class="chem">int_0^{ln 2} e^x / (e^x + 1) dx = [ln(e^x + 1)]_0^{ln 2} = ln(2 + 1) - ln(1 + 1) = ln 3 - ln 2 = ln(3/2)</span>.</p>
      solution: "<p><span class=\"chem\">int_0^{ln 2} e^x / (e^x + 1) dx = [ln(e^x + 1)]_0^{ln 2} = ln(2 + 1) - ln(1 + 1) = ln 3 - ln 2 = ln(3/2)</span>。</p>",
    },

    // ── t5-2-q042 · short · exam · SL · SL 5.11 · 8 marks
    "t5-2-q042": {
      // EN: <p>Let <span class="chem">f(x) = x^2 - 4x + 3</span>.<br>(a) Find the <span class="chem">x</span>-intercepts of the graph of <span class="chem">f</span>. <strong>[2 marks]</strong><br>(b) Find the value of <span class="chem">int_0^4 f(x) dx</span>. <strong>[2 marks]</strong><br>(c) Find the total area of the regions enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the lines <span class="chem">x = 0</span> and <span class="chem">x = 4</span>. <strong>[3 marks]</strong><br>(d) Explain why your answers to (b) and (c) are different. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = x^2 - 4x + 3</span> とする。<br>(a) <span class=\"chem\">f</span> のグラフの <span class=\"chem\">x</span> 切片を求めなさい (Find)。<strong>[2 marks]</strong><br>(b) <span class=\"chem\">int_0^4 f(x) dx</span> の値を求めなさい (Find)。<strong>[2 marks]</strong><br>(c) <span class=\"chem\">f</span> のグラフ、<span class=\"chem\">x</span> 軸、直線 <span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 4</span> で囲まれた領域の面積の合計を求めなさい (Find)。<strong>[3 marks]</strong><br>(d) (b) と (c) の答えが異なる理由を説明しなさい (Explain)。<strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: (b) asks for a signed integral, (c) asks for an area. They are equal only when the curve stays above the axis.
        "解読：(b) は符号付きの積分、(c) は面積を求めています。両者が等しくなるのは、曲線がずっと軸の上側にあるときだけです。",
        // EN: Let <span class="chem">F(x) = x^3/3 - 2x^2 + 3x</span>. Then <span class="chem">F(0) = 0</span>, <span class="chem">F(1) = 4/3</span>, <span class="chem">F(3) = 0</span>, <span class="chem">F(4) = 4/3</span>.
        "<span class=\"chem\">F(x) = x^3/3 - 2x^2 + 3x</span> とおきます。すると <span class=\"chem\">F(0) = 0</span>、<span class=\"chem\">F(1) = 4/3</span>、<span class=\"chem\">F(3) = 0</span>、<span class=\"chem\">F(4) = 4/3</span> です。",
        // EN: For (c), find <span class="chem">int_0^1</span>, <span class="chem">int_1^3</span> and <span class="chem">int_3^4</span> separately and add their absolute values.
        "(c) では <span class=\"chem\">int_0^1</span>、<span class=\"chem\">int_1^3</span>、<span class=\"chem\">int_3^4</span> を別々に求め、それらの絶対値を足します。",
      ],
      // EN: <p>(a) <span class="chem">x^2 - 4x + 3 = (x - 1)(x - 3) = 0</span>, so <span class="chem">x = 1, 3</span>.<br>(b) With <span class="chem">F(x) = x^3/3 - 2x^2 + 3x</span>: <span class="chem">int_0^4 f(x) dx = F(4) - F(0) = 64/3 - 32 + 12 = 4/3</span>.<br>(c) <span class="chem">int_0^1 f = F(1) - F(0) = 4/3</span>; <span class="chem">int_1^3 f = F(3) - F(1) = 0 - 4/3 = -4/3</span>; <span class="chem">int_3^4 f = F(4) - F(3) = 4/3</span>. Total area <span class="chem">= 4/3 + 4/3 + 4/3 = 4</span>.<br>(d) <span class="chem">f &lt; 0</span> on <span class="chem">(1, 3)</span>, so that region counts negatively in the integral: <span class="chem">4/3 - 4/3 + 4/3 = 4/3</span>. Area counts it positively.</p>
      solution: "<p>(a) <span class=\"chem\">x^2 - 4x + 3 = (x - 1)(x - 3) = 0</span> なので <span class=\"chem\">x = 1, 3</span>。<br>(b) <span class=\"chem\">F(x) = x^3/3 - 2x^2 + 3x</span> を使うと：<span class=\"chem\">int_0^4 f(x) dx = F(4) - F(0) = 64/3 - 32 + 12 = 4/3</span>。<br>(c) <span class=\"chem\">int_0^1 f = F(1) - F(0) = 4/3</span>；<span class=\"chem\">int_1^3 f = F(3) - F(1) = 0 - 4/3 = -4/3</span>；<span class=\"chem\">int_3^4 f = F(4) - F(3) = 4/3</span>。面積の合計は <span class=\"chem\">= 4/3 + 4/3 + 4/3 = 4</span> です。<br>(d) <span class=\"chem\">(1, 3)</span> 上で <span class=\"chem\">f &lt; 0</span> なので、その領域は積分では負として数えられます：<span class=\"chem\">4/3 - 4/3 + 4/3 = 4/3</span>。面積では正として数えます。</p>",
      // EN: <p>(a) <span class="chem">x = 1</span> and <span class="chem">x = 3</span><br>(b) <span class="chem">4/3</span><br>(c) <span class="chem">4</span><br>(d) The region between <span class="chem">x = 1</span> and <span class="chem">x = 3</span> is below the axis, so it contributes <span class="chem">-4/3</span> to the integral but <span class="chem">+4/3</span> to the area.</p>
      answer: "<p>(a) <span class=\"chem\">x = 1</span> と <span class=\"chem\">x = 3</span><br>(b) <span class=\"chem\">4/3</span><br>(c) <span class=\"chem\">4</span><br>(d) <span class=\"chem\">x = 1</span> と <span class=\"chem\">x = 3</span> の間の領域は軸の下側にあるので、積分への寄与は <span class=\"chem\">-4/3</span> ですが、面積への寄与は <span class=\"chem\">+4/3</span> です。</p>",
      markscheme: [
        // EN: M1: Factorises <span class="chem">(x - 1)(x - 3) = 0</span> (or uses the quadratic formula).
        "M1：<span class=\"chem\">(x - 1)(x - 3) = 0</span> を因数分解する（または解の公式を使う）。",
        // EN: A1: <span class="chem">x = 1</span> and <span class="chem">x = 3</span>.
        "A1：<span class=\"chem\">x = 1</span> と <span class=\"chem\">x = 3</span>。",
        // EN: M1: Antiderivative <span class="chem">x^3/3 - 2x^2 + 3x</span> evaluated from 0 to 4.
        "M1：原始関数 <span class=\"chem\">x^3/3 - 2x^2 + 3x</span> を 0 から 4 まで計算する。",
        // EN: A1: <span class="chem">64/3 - 32 + 12 = 4/3</span>.
        "A1：<span class=\"chem\">64/3 - 32 + 12 = 4/3</span>。",
        // EN: M1: Splits at <span class="chem">x = 1</span> and <span class="chem">x = 3</span> and takes absolute values of the pieces.
        "M1：<span class=\"chem\">x = 1</span> と <span class=\"chem\">x = 3</span> で分割し、各部分の絶対値をとる。",
        // EN: A1: Pieces <span class="chem">4/3</span>, <span class="chem">-4/3</span>, <span class="chem">4/3</span>.
        "A1：各部分 <span class=\"chem\">4/3</span>、<span class=\"chem\">-4/3</span>、<span class=\"chem\">4/3</span>。",
        // EN: A1: Total area <span class="chem">= 4</span>.
        "A1：面積の合計 <span class=\"chem\">= 4</span>。",
        // EN: R1: The integral is signed: the part below the axis on <span class="chem">(1, 3)</span> is negative and cancels some of the positive parts, whereas area counts every region as positive.
        "R1：積分は符号付きである。<span class=\"chem\">(1, 3)</span> 上で軸の下側にある部分は負となり、正の部分の一部を打ち消すが、面積ではどの領域も正として数える。",
      ],
    },

    // ── t5-2-q043 · short · exam · SL · SL 5.9 · 9 marks
    "t5-2-q043": {
      // EN: <p>A particle starts at a fixed point <span class="chem">O</span> and moves in a straight line with velocity <span class="chem">v(t) = t^2 - 6t + 8</span> <span class="unit">m s-1</span>, for <span class="chem">0 &lt;= t &lt;= 5</span>, where <span class="chem">t</span> is in seconds.<br>(a) Find the values of <span class="chem">t</span> when the particle is at rest. <strong>[2 marks]</strong><br>(b) Find the acceleration of the particle when <span class="chem">t = 4</span>. <strong>[2 marks]</strong><br>(c) Find the displacement of the particle from <span class="chem">O</span> when <span class="chem">t = 5</span>. <strong>[2 marks]</strong><br>(d) Find the total distance travelled by the particle for <span class="chem">0 &lt;= t &lt;= 5</span>. <strong>[3 marks]</strong></p>
      stem: "<p>粒子が定点 <span class=\"chem\">O</span> を出発し、<span class=\"chem\">0 &lt;= t &lt;= 5</span> において速度 <span class=\"chem\">v(t) = t^2 - 6t + 8</span> <span class=\"unit\">m s-1</span> で直線上を動く。ただし、<span class=\"chem\">t</span> は秒である。<br>(a) 粒子が静止するときの <span class=\"chem\">t</span> の値を求めなさい (Find)。<strong>[2 marks]</strong><br>(b) <span class=\"chem\">t = 4</span> のときの粒子の加速度を求めなさい (Find)。<strong>[2 marks]</strong><br>(c) <span class=\"chem\">t = 5</span> のときの <span class=\"chem\">O</span> からの粒子の変位を求めなさい (Find)。<strong>[2 marks]</strong><br>(d) <span class=\"chem\">0 &lt;= t &lt;= 5</span> において粒子が進んだ総移動距離を求めなさい (Find)。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: “at rest” means <span class="chem">v = 0</span>; displacement uses <span class="chem">int v dt</span>; total distance uses <span class="chem">int |v| dt</span>, so you must split at every time from (a).
        "解読：「静止」は <span class=\"chem\">v = 0</span> を意味します。変位には <span class=\"chem\">int v dt</span>、総移動距離には <span class=\"chem\">int |v| dt</span> を使うので、(a) で求めたすべての時刻で分割しなければなりません。",
        // EN: Let <span class="chem">s(t) = t^3/3 - 3t^2 + 8t</span> (this already has <span class="chem">s(0) = 0</span>). Find <span class="chem">s(2)</span>, <span class="chem">s(4)</span> and <span class="chem">s(5)</span>.
        "<span class=\"chem\">s(t) = t^3/3 - 3t^2 + 8t</span> とおきます（これはすでに <span class=\"chem\">s(0) = 0</span> を満たしています）。<span class=\"chem\">s(2)</span>、<span class=\"chem\">s(4)</span>、<span class=\"chem\">s(5)</span> を求めます。",
      ],
      // EN: <p>(a) <span class="chem">(t - 2)(t - 4) = 0</span>, so <span class="chem">t = 2</span> or <span class="chem">t = 4</span>.<br>(b) <span class="chem">a(t) = 2t - 6</span>, so <span class="chem">a(4) = 2</span> <span class="unit">m s-2</span>.<br>(c) <span class="chem">s(t) = t^3/3 - 3t^2 + 8t</span> (with <span class="chem">s(0) = 0</span>), so <span class="chem">s(5) = 125/3 - 75 + 40 = 20/3</span> <span class="unit">m</span>.<br>(d) <span class="chem">s(2) = 8/3 - 12 + 16 = 20/3</span>, <span class="chem">s(4) = 64/3 - 48 + 32 = 16/3</span>. Distance <span class="chem">= |20/3 - 0| + |16/3 - 20/3| + |20/3 - 16/3| = 20/3 + 4/3 + 4/3 = 28/3</span> <span class="unit">m</span>.</p>
      solution: "<p>(a) <span class=\"chem\">(t - 2)(t - 4) = 0</span> なので <span class=\"chem\">t = 2</span> または <span class=\"chem\">t = 4</span>。<br>(b) <span class=\"chem\">a(t) = 2t - 6</span> なので <span class=\"chem\">a(4) = 2</span> <span class=\"unit\">m s-2</span>。<br>(c) <span class=\"chem\">s(t) = t^3/3 - 3t^2 + 8t</span>（<span class=\"chem\">s(0) = 0</span> より）なので <span class=\"chem\">s(5) = 125/3 - 75 + 40 = 20/3</span> <span class=\"unit\">m</span>。<br>(d) <span class=\"chem\">s(2) = 8/3 - 12 + 16 = 20/3</span>、<span class=\"chem\">s(4) = 64/3 - 48 + 32 = 16/3</span>。移動距離 <span class=\"chem\">= |20/3 - 0| + |16/3 - 20/3| + |20/3 - 16/3| = 20/3 + 4/3 + 4/3 = 28/3</span> <span class=\"unit\">m</span>。</p>",
      // EN: <p>(a) <span class="chem">t = 2</span> and <span class="chem">t = 4</span><br>(b) <span class="chem">2</span> <span class="unit">m s-2</span><br>(c) <span class="chem">20/3</span> <span class="unit">m</span><br>(d) <span class="chem">28/3</span> <span class="unit">m</span></p>
      answer: "<p>(a) <span class=\"chem\">t = 2</span> と <span class=\"chem\">t = 4</span><br>(b) <span class=\"chem\">2</span> <span class=\"unit\">m s-2</span><br>(c) <span class=\"chem\">20/3</span> <span class=\"unit\">m</span><br>(d) <span class=\"chem\">28/3</span> <span class=\"unit\">m</span></p>",
      markscheme: [
        // EN: M1: Solves <span class="chem">t^2 - 6t + 8 = (t - 2)(t - 4) = 0</span>.
        "M1：<span class=\"chem\">t^2 - 6t + 8 = (t - 2)(t - 4) = 0</span> を解く。",
        // EN: A1: <span class="chem">t = 2</span> and <span class="chem">t = 4</span>.
        "A1：<span class=\"chem\">t = 2</span> と <span class=\"chem\">t = 4</span>。",
        // EN: M1: <span class="chem">a(t) = v'(t) = 2t - 6</span>.
        "M1：<span class=\"chem\">a(t) = v'(t) = 2t - 6</span>。",
        // EN: A1: <span class="chem">a(4) = 2</span> <span class="unit">m s-2</span>.
        "A1：<span class=\"chem\">a(4) = 2</span> <span class=\"unit\">m s-2</span>。",
        // EN: M1: <span class="chem">s(5) = int_0^5 (t^2 - 6t + 8) dt = [t^3/3 - 3t^2 + 8t]_0^5</span>.
        "M1：<span class=\"chem\">s(5) = int_0^5 (t^2 - 6t + 8) dt = [t^3/3 - 3t^2 + 8t]_0^5</span>。",
        // EN: A1: <span class="chem">20/3</span> <span class="unit">m</span>.
        "A1：<span class=\"chem\">20/3</span> <span class=\"unit\">m</span>。",
        // EN: M1: Splits the distance integral at <span class="chem">t = 2</span> and <span class="chem">t = 4</span> (or uses <span class="chem">s(0), s(2), s(4), s(5)</span>).
        "M1：移動距離の積分を <span class=\"chem\">t = 2</span> と <span class=\"chem\">t = 4</span> で分割する（または <span class=\"chem\">s(0), s(2), s(4), s(5)</span> を使う）。",
        // EN: A1: Legs of <span class="chem">20/3</span>, <span class="chem">4/3</span> and <span class="chem">4/3</span> <span class="unit">m</span>.
        "A1：各区間の移動距離 <span class=\"chem\">20/3</span>、<span class=\"chem\">4/3</span>、<span class=\"chem\">4/3</span> <span class=\"unit\">m</span>。",
        // EN: A1: Total distance <span class="chem">28/3</span> <span class="unit">m</span>.
        "A1：総移動距離 <span class=\"chem\">28/3</span> <span class=\"unit\">m</span>。",
      ],
    },

    // ── t5-2-q044 · numeric · exam · SL · SL 5.5 · 4 marks
    "t5-2-q044": {
      // EN: <p>The gradient of a curve is given by <span class="chem">dy/dx = 6x - 4/x^3</span>, for <span class="chem">x &gt; 0</span>. The curve passes through the point <span class="chem">(1, 2)</span>. Find the value of <span class="chem">y</span> when <span class="chem">x = 2</span>.</p>
      stem: "<p>曲線の傾きは <span class=\"chem\">x &gt; 0</span> において <span class=\"chem\">dy/dx = 6x - 4/x^3</span> で与えられる。曲線は点 <span class=\"chem\">(1, 2)</span> を通る。<span class=\"chem\">x = 2</span> のときの <span class=\"chem\">y</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write <span class="chem">-4/x^3 = -4x^{-3}</span>; integrating gives <span class="chem">-4x^{-2}/(-2) = 2x^{-2}</span>.
        "<span class=\"chem\">-4/x^3 = -4x^{-3}</span> と書きます。積分すると <span class=\"chem\">-4x^{-2}/(-2) = 2x^{-2}</span> です。",
        // EN: So <span class="chem">y = 3x^2 + 2/x^2 + C</span>. Use the point <span class="chem">(1, 2)</span> to find <span class="chem">C</span>.
        "よって <span class=\"chem\">y = 3x^2 + 2/x^2 + C</span>。点 <span class=\"chem\">(1, 2)</span> を使って <span class=\"chem\">C</span> を求めます。",
      ],
      // EN: <p><span class="chem">y = int (6x - 4x^{-3}) dx = 3x^2 + 2x^{-2} + C</span>. At <span class="chem">(1, 2)</span>: <span class="chem">3 + 2 + C = 2</span>, so <span class="chem">C = -3</span>. When <span class="chem">x = 2</span>: <span class="chem">y = 12 + 2/4 - 3 = 9.5</span> (or <span class="chem">19/2</span>).</p>
      solution: "<p><span class=\"chem\">y = int (6x - 4x^{-3}) dx = 3x^2 + 2x^{-2} + C</span>。<span class=\"chem\">(1, 2)</span> において：<span class=\"chem\">3 + 2 + C = 2</span> なので <span class=\"chem\">C = -3</span>。<span class=\"chem\">x = 2</span> のとき：<span class=\"chem\">y = 12 + 2/4 - 3 = 9.5</span>（または <span class=\"chem\">19/2</span>）。</p>",
    },

    // ── t5-2-q045 · numeric · exam · SL · SL 5.10 · 5 marks
    "t5-2-q045": {
      // EN: <p>A function <span class="chem">f</span> has derivative <span class="chem">f'(x) = 2 cos(2x) + sin x</span>, and the graph of <span class="chem">f</span> passes through the point <span class="chem">(pi, 3)</span>. Find the exact value of <span class="chem">f(pi/3)</span>.</p>
      stem: "<p>関数 <span class=\"chem\">f</span> の導関数は <span class=\"chem\">f'(x) = 2 cos(2x) + sin x</span> であり、<span class=\"chem\">f</span> のグラフは点 <span class=\"chem\">(pi, 3)</span> を通る。<span class=\"chem\">f(pi/3)</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Integrate term by term: <span class="chem">int 2 cos(2x) dx = sin(2x)</span> and <span class="chem">int sin x dx = -cos x</span>.
        "項ごとに積分します：<span class=\"chem\">int 2 cos(2x) dx = sin(2x)</span> と <span class=\"chem\">int sin x dx = -cos x</span>。",
        // EN: Use <span class="chem">f(pi) = 3</span>, remembering <span class="chem">sin(2pi) = 0</span> and <span class="chem">cos pi = -1</span>, to find <span class="chem">C</span>.
        "<span class=\"chem\">sin(2pi) = 0</span> と <span class=\"chem\">cos pi = -1</span> に注意して <span class=\"chem\">f(pi) = 3</span> を使い、<span class=\"chem\">C</span> を求めます。",
        // EN: Then use <span class="chem">sin(2pi/3) = sqrt(3)/2</span> and <span class="chem">cos(pi/3) = 1/2</span>.
        "次に <span class=\"chem\">sin(2pi/3) = sqrt(3)/2</span> と <span class=\"chem\">cos(pi/3) = 1/2</span> を使います。",
      ],
      // EN: <p><span class="chem">f(x) = sin(2x) - cos x + C</span>. From <span class="chem">f(pi) = 3</span>: <span class="chem">0 - (-1) + C = 3</span>, so <span class="chem">C = 2</span>. Then <span class="chem">f(pi/3) = sin(2pi/3) - cos(pi/3) + 2 = sqrt(3)/2 - 1/2 + 2 = (3 + sqrt(3))/2</span>.</p>
      solution: "<p><span class=\"chem\">f(x) = sin(2x) - cos x + C</span>。<span class=\"chem\">f(pi) = 3</span> より：<span class=\"chem\">0 - (-1) + C = 3</span> なので <span class=\"chem\">C = 2</span>。よって <span class=\"chem\">f(pi/3) = sin(2pi/3) - cos(pi/3) + 2 = sqrt(3)/2 - 1/2 + 2 = (3 + sqrt(3))/2</span> です。</p>",
    },

    // ── t5-2-q046 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q046": {
      // EN: <p>The curves <span class="chem">y = x^3</span> and <span class="chem">y = 4x</span> enclose two finite regions. A student writes: “The area enclosed is <span class="chem">int_{-2}^2 (4x - x^3) dx = 0</span>, so the curves enclose no area.” Find the correct total area of the two regions.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x^3</span> と <span class=\"chem\">y = 4x</span> は 2 つの有限領域を囲む。ある生徒は「囲まれた面積は <span class=\"chem\">int_{-2}^2 (4x - x^3) dx = 0</span> なので、2 曲線は面積を囲まない」と書いた。2 つの領域の正しい面積の合計を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the student used one integral across both regions. Find where the curves meet and which curve is on top in <strong>each</strong> region; the upper curve swaps at <span class="chem">x = 0</span>.
        "解読：この生徒は 2 つの領域にまたがって 1 つの積分を使いました。曲線の交点と、<strong>それぞれの</strong>領域でどちらの曲線が上側にあるかを求めましょう。上側の曲線は <span class=\"chem\">x = 0</span> で入れ替わります。",
        // EN: <span class="chem">x^3 = 4x</span> gives <span class="chem">x = -2, 0, 2</span>. On <span class="chem">(0, 2)</span>, <span class="chem">4x &gt; x^3</span> (try <span class="chem">x = 1</span>); on <span class="chem">(-2, 0)</span>, <span class="chem">x^3 &gt; 4x</span> (try <span class="chem">x = -1</span>).
        "<span class=\"chem\">x^3 = 4x</span> より <span class=\"chem\">x = -2, 0, 2</span>。<span class=\"chem\">(0, 2)</span> では <span class=\"chem\">4x &gt; x^3</span>（<span class=\"chem\">x = 1</span> で確かめる）、<span class=\"chem\">(-2, 0)</span> では <span class=\"chem\">x^3 &gt; 4x</span>（<span class=\"chem\">x = -1</span> で確かめる）。",
        // EN: Compute <span class="chem">int_0^2 (4x - x^3) dx</span>, then use symmetry (or integrate <span class="chem">x^3 - 4x</span> on <span class="chem">[-2, 0]</span>).
        "<span class=\"chem\">int_0^2 (4x - x^3) dx</span> を計算し、対称性を使います（または <span class=\"chem\">[-2, 0]</span> 上で <span class=\"chem\">x^3 - 4x</span> を積分します）。",
      ],
      // EN: <p>Decode: area between curves means (upper − lower) on each interval; the curves cross at <span class="chem">x = 0</span>, so the upper curve changes there. Intersections: <span class="chem">x^3 - 4x = x(x - 2)(x + 2) = 0</span>. On <span class="chem">[0, 2]</span>: <span class="chem">int_0^2 (4x - x^3) dx = [2x^2 - x^4/4]_0^2 = 8 - 4 = 4</span>. On <span class="chem">[-2, 0]</span>: <span class="chem">int_{-2}^0 (x^3 - 4x) dx = [x^4/4 - 2x^2]_{-2}^0 = 0 - (4 - 8) = 4</span>. Total area <span class="chem">= 8</span>. The student’s integral is 0 because the two pieces have opposite signs and cancel.</p>
      solution: "<p>解読：2 曲線間の面積とは、各区間での（上側 − 下側）の積分です。曲線は <span class=\"chem\">x = 0</span> で交わるので、そこで上側の曲線が入れ替わります。交点：<span class=\"chem\">x^3 - 4x = x(x - 2)(x + 2) = 0</span>。<span class=\"chem\">[0, 2]</span> では：<span class=\"chem\">int_0^2 (4x - x^3) dx = [2x^2 - x^4/4]_0^2 = 8 - 4 = 4</span>。<span class=\"chem\">[-2, 0]</span> では：<span class=\"chem\">int_{-2}^0 (x^3 - 4x) dx = [x^4/4 - 2x^2]_{-2}^0 = 0 - (4 - 8) = 4</span>。面積の合計は <span class=\"chem\">= 8</span> です。2 つの部分は符号が逆で打ち消し合うので、生徒の積分は 0 になります。</p>",
    },

    // ── t5-2-q047 · short · exam · SL · SL 5.6, 5.10, 5.11 · 5 marks
    "t5-2-q047": {
      // EN: <p>(a) Find <span class="chem">d/dx (x ln x)</span>. <strong>[2 marks]</strong><br>(b) Hence find the exact value of <span class="chem">int_1^e ln x dx</span>. <strong>[3 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">d/dx (x ln x)</span> を求めなさい (Find)。<strong>[2 marks]</strong><br>(b) これを用いて (Hence)、<span class=\"chem\">int_1^e ln x dx</span> の正確な値を求めなさい (find)。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: For (a), the product rule gives <span class="chem">1 × ln x + x × (1/x)</span>.
        "(a) では、積の微分法により <span class=\"chem\">1 × ln x + x × (1/x)</span> です。",
        // EN: “Hence”: integrate both sides of (a) from 1 to e: <span class="chem">int_1^e (ln x + 1) dx = [x ln x]_1^e</span>, then subtract <span class="chem">int_1^e 1 dx</span>.
        "「これを用いて (Hence)」：(a) の両辺を 1 から e まで積分すると <span class=\"chem\">int_1^e (ln x + 1) dx = [x ln x]_1^e</span>。そこから <span class=\"chem\">int_1^e 1 dx</span> を引きます。",
      ],
      // EN: <p>(a) <span class="chem">d/dx (x ln x) = ln x + x(1/x) = ln x + 1</span>.<br>(b) From (a), <span class="chem">int_1^e (ln x + 1) dx = [x ln x]_1^e = e - 0 = e</span>. Since <span class="chem">int_1^e 1 dx = e - 1</span>, <span class="chem">int_1^e ln x dx = e - (e - 1) = 1</span>.</p>
      solution: "<p>(a) <span class=\"chem\">d/dx (x ln x) = ln x + x(1/x) = ln x + 1</span>。<br>(b) (a) より <span class=\"chem\">int_1^e (ln x + 1) dx = [x ln x]_1^e = e - 0 = e</span>。<span class=\"chem\">int_1^e 1 dx = e - 1</span> なので <span class=\"chem\">int_1^e ln x dx = e - (e - 1) = 1</span>。</p>",
      // EN: <p>(a) <span class="chem">ln x + 1</span><br>(b) <span class="chem">1</span></p>
      answer: "<p>(a) <span class=\"chem\">ln x + 1</span><br>(b) <span class=\"chem\">1</span></p>",
      markscheme: [
        // EN: M1: Product rule with <span class="chem">u = x</span>, <span class="chem">v = ln x</span>.
        "M1：<span class=\"chem\">u = x</span>、<span class=\"chem\">v = ln x</span> として積の微分法を使う。",
        // EN: A1: <span class="chem">d/dx (x ln x) = ln x + 1</span>.
        "A1：<span class=\"chem\">d/dx (x ln x) = ln x + 1</span>。",
        // EN: M1: Integrates (a): <span class="chem">x ln x = int ln x dx + int 1 dx</span>, i.e. <span class="chem">int ln x dx = x ln x - x + C</span>.
        "M1：(a) を積分する：<span class=\"chem\">x ln x = int ln x dx + int 1 dx</span>、すなわち <span class=\"chem\">int ln x dx = x ln x - x + C</span>。",
        // EN: A1: Substitutes the limits: <span class="chem">(e ln e - e) - (1 ln 1 - 1)</span>.
        "A1：上端と下端を代入する：<span class=\"chem\">(e ln e - e) - (1 ln 1 - 1)</span>。",
        // EN: A1: <span class="chem">= 0 - (-1) = 1</span>.
        "A1：<span class=\"chem\">= 0 - (-1) = 1</span>。",
      ],
    },

    // ── t5-2-q048 · numeric · exam · SL · SL 5.5, 5.11 · 4 marks
    "t5-2-q048": {
      // EN: <p>Given that <span class="chem">k &gt; 1</span> and <span class="chem">int_1^k (2x - 1) dx = 12</span>, find the value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">k &gt; 1</span> かつ <span class=\"chem\">int_1^k (2x - 1) dx = 12</span> のとき、<span class=\"chem\">k</span> の値を求めなさい (find)。</p>",
      hints: [
        // EN: Integrate to get an equation in <span class="chem">k</span>: <span class="chem">[x^2 - x]_1^k = k^2 - k - 0</span>.
        "積分して <span class=\"chem\">k</span> の方程式を作ります：<span class=\"chem\">[x^2 - x]_1^k = k^2 - k - 0</span>。",
        // EN: Solve <span class="chem">k^2 - k - 12 = 0</span> and use the condition <span class="chem">k &gt; 1</span> to choose the root.
        "<span class=\"chem\">k^2 - k - 12 = 0</span> を解き、条件 <span class=\"chem\">k &gt; 1</span> を使って根を選びます。",
      ],
      // EN: <p><span class="chem">int_1^k (2x - 1) dx = [x^2 - x]_1^k = (k^2 - k) - (1 - 1) = k^2 - k</span>. So <span class="chem">k^2 - k - 12 = 0</span>, <span class="chem">(k - 4)(k + 3) = 0</span>. Since <span class="chem">k &gt; 1</span>, <span class="chem">k = 4</span> (reject <span class="chem">k = -3</span>).</p>
      solution: "<p><span class=\"chem\">int_1^k (2x - 1) dx = [x^2 - x]_1^k = (k^2 - k) - (1 - 1) = k^2 - k</span>。よって <span class=\"chem\">k^2 - k - 12 = 0</span>、<span class=\"chem\">(k - 4)(k + 3) = 0</span>。<span class=\"chem\">k &gt; 1</span> なので <span class=\"chem\">k = 4</span>（<span class=\"chem\">k = -3</span> は不適）。</p>",
    },

    // ── t5-2-q049 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q049": {
      // EN: <p>The curve <span class="chem">y = x^2 - 4</span> and the line <span class="chem">y = 2x - 1</span> enclose a finite region <span class="chem">R</span>. The <span class="chem">x</span>-axis passes through <span class="chem">R</span>, so part of <span class="chem">R</span> lies above the <span class="chem">x</span>-axis and part lies below it. Find the exact area of <span class="chem">R</span>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = x^2 - 4</span> と直線 <span class=\"chem\">y = 2x - 1</span> は有限領域 <span class=\"chem\">R</span> を囲む。<span class=\"chem\">x</span> 軸は <span class=\"chem\">R</span> を通るので、<span class=\"chem\">R</span> の一部は <span class=\"chem\">x</span> 軸の上側に、一部は下側にある。<span class=\"chem\">R</span> の正確な面積を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the region asked for is enclosed by the curve and the line only. The <span class="chem">x</span>-axis is a distraction: “upper minus lower” works even where both are below the axis, so do not split at the axis.
        "解読：求める領域は曲線と直線だけで囲まれています。<span class=\"chem\">x</span> 軸は惑わせるためのものです。両方が軸の下側にあっても「上側 − 下側」は成り立つので、軸で分割してはいけません。",
        // EN: Solve <span class="chem">x^2 - 4 = 2x - 1</span>: <span class="chem">x^2 - 2x - 3 = 0</span>, so <span class="chem">x = -1</span> and <span class="chem">x = 3</span>. The line is above the curve between them (test <span class="chem">x = 0</span>).
        "<span class=\"chem\">x^2 - 4 = 2x - 1</span> を解くと <span class=\"chem\">x^2 - 2x - 3 = 0</span> なので、<span class=\"chem\">x = -1</span> と <span class=\"chem\">x = 3</span>。その間では直線が曲線の上側にあります（<span class=\"chem\">x = 0</span> で確かめる）。",
        // EN: Evaluate <span class="chem">int_{-1}^3 ((2x - 1) - (x^2 - 4)) dx = int_{-1}^3 (3 + 2x - x^2) dx</span>.
        "<span class=\"chem\">int_{-1}^3 ((2x - 1) - (x^2 - 4)) dx = int_{-1}^3 (3 + 2x - x^2) dx</span> を計算します。",
      ],
      // EN: <p>Decode: area between a line and a curve; the axis plays no part. Intersections: <span class="chem">(x - 3)(x + 1) = 0</span>, so <span class="chem">x = -1, 3</span>. At <span class="chem">x = 0</span>, the line gives <span class="chem">-1</span> and the curve <span class="chem">-4</span>, so the line is on top. <span class="chem">A = int_{-1}^3 (3 + 2x - x^2) dx = [3x + x^2 - x^3/3]_{-1}^3 = (9 + 9 - 9) - (-3 + 1 + 1/3) = 9 + 5/3 = 32/3</span>.</p>
      solution: "<p>解読：直線と曲線の間の面積で、軸は関係ありません。交点：<span class=\"chem\">(x - 3)(x + 1) = 0</span> なので <span class=\"chem\">x = -1, 3</span>。<span class=\"chem\">x = 0</span> では直線が <span class=\"chem\">-1</span>、曲線が <span class=\"chem\">-4</span> なので、直線が上側です。<span class=\"chem\">A = int_{-1}^3 (3 + 2x - x^2) dx = [3x + x^2 - x^3/3]_{-1}^3 = (9 + 9 - 9) - (-3 + 1 + 1/3) = 9 + 5/3 = 32/3</span>。</p>",
    },

    // ── t5-2-q050 · short · challenge · SL · SL 5.9 · 10 marks
    "t5-2-q050": {
      // EN: <p>A particle moves along a straight line. Its acceleration is <span class="chem">a(t) = 6t - 6</span> <span class="unit">m s-2</span>, for <span class="chem">t &gt;= 0</span> seconds. Its initial velocity is <span class="chem">-9</span> <span class="unit">m s-1</span>, and it passes through a fixed point <span class="chem">O</span> on the line when <span class="chem">t = 1</span>. Let <span class="chem">s(t)</span> be its displacement from <span class="chem">O</span>.<br>(a) Find an expression for the velocity <span class="chem">v(t)</span>. <strong>[2 marks]</strong><br>(b) Find an expression for <span class="chem">s(t)</span>. <strong>[3 marks]</strong><br>(c) Find the distance of the particle from <span class="chem">O</span> when it is first at rest. <strong>[2 marks]</strong><br>(d) Find the total distance travelled by the particle in the first 4 seconds. <strong>[3 marks]</strong></p>
      stem: "<p>粒子が直線上を動く。<span class=\"chem\">t &gt;= 0</span> 秒において加速度は <span class=\"chem\">a(t) = 6t - 6</span> <span class=\"unit\">m s-2</span> である。初速度は <span class=\"chem\">-9</span> <span class=\"unit\">m s-1</span> で、<span class=\"chem\">t = 1</span> のとき直線上の定点 <span class=\"chem\">O</span> を通過する。<span class=\"chem\">O</span> からの変位を <span class=\"chem\">s(t)</span> とする。<br>(a) 速度 <span class=\"chem\">v(t)</span> の式を求めなさい (Find)。<strong>[2 marks]</strong><br>(b) <span class=\"chem\">s(t)</span> の式を求めなさい (Find)。<strong>[3 marks]</strong><br>(c) 粒子が初めて静止するときの <span class=\"chem\">O</span> からの距離を求めなさい (Find)。<strong>[2 marks]</strong><br>(d) 最初の 4 秒間に粒子が進んだ総移動距離を求めなさい (Find)。<strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: two boundary conditions at <strong>different</strong> times. “Initial velocity” is <span class="chem">v(0) = -9</span>; “passes through O when t = 1” is <span class="chem">s(1) = 0</span>, so the particle does not start at <span class="chem">O</span>.
        "解読：<strong>異なる</strong>時刻での 2 つの境界条件です。「初速度」は <span class=\"chem\">v(0) = -9</span>、「t = 1 のとき O を通過」は <span class=\"chem\">s(1) = 0</span> なので、粒子は <span class=\"chem\">O</span> から出発するのではありません。",
        // EN: After (b), <span class="chem">s(0) = 11</span>: the particle starts 11 m from <span class="chem">O</span>. “First at rest” means the first <span class="chem">t &gt;= 0</span> with <span class="chem">v(t) = 0</span>.
        "(b) のあとで <span class=\"chem\">s(0) = 11</span>：粒子は <span class=\"chem\">O</span> から 11 m の位置から出発します。「初めて静止」とは <span class=\"chem\">v(t) = 0</span> となる最初の <span class=\"chem\">t &gt;= 0</span> のことです。",
        // EN: For (d), the particle turns at <span class="chem">t = 3</span>, so add <span class="chem">|s(3) - s(0)|</span> and <span class="chem">|s(4) - s(3)|</span>.
        "(d) では、粒子は <span class=\"chem\">t = 3</span> で折り返すので、<span class=\"chem\">|s(3) - s(0)|</span> と <span class=\"chem\">|s(4) - s(3)|</span> を足します。",
      ],
      // EN: <p>Decode: the constants come from <span class="chem">v(0) = -9</span> and <span class="chem">s(1) = 0</span>, and “distance from O” is <span class="chem">|s|</span>.<br>(a) <span class="chem">v(t) = 3t^2 - 6t + C_1</span>; <span class="chem">v(0) = -9</span> gives <span class="chem">C_1 = -9</span>, so <span class="chem">v(t) = 3t^2 - 6t - 9</span>.<br>(b) <span class="chem">s(t) = t^3 - 3t^2 - 9t + C_2</span>; <span class="chem">s(1) = 1 - 3 - 9 + C_2 = 0</span> gives <span class="chem">C_2 = 11</span>.<br>(c) <span class="chem">v(t) = 3(t^2 - 2t - 3) = 3(t - 3)(t + 1) = 0</span>, so <span class="chem">t = 3</span> (as <span class="chem">t &gt;= 0</span>). <span class="chem">s(3) = 27 - 27 - 27 + 11 = -16</span>: the particle is <span class="chem">16</span> <span class="unit">m</span> from <span class="chem">O</span> (on the negative side).<br>(d) <span class="chem">s(0) = 11</span>, <span class="chem">s(3) = -16</span>, <span class="chem">s(4) = 64 - 48 - 36 + 11 = -9</span>. Distance <span class="chem">= |-16 - 11| + |-9 - (-16)| = 27 + 7 = 34</span> <span class="unit">m</span>.</p>
      solution: "<p>解読：定数は <span class=\"chem\">v(0) = -9</span> と <span class=\"chem\">s(1) = 0</span> から求め、「O からの距離」は <span class=\"chem\">|s|</span> です。<br>(a) <span class=\"chem\">v(t) = 3t^2 - 6t + C_1</span>；<span class=\"chem\">v(0) = -9</span> より <span class=\"chem\">C_1 = -9</span> なので <span class=\"chem\">v(t) = 3t^2 - 6t - 9</span>。<br>(b) <span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + C_2</span>；<span class=\"chem\">s(1) = 1 - 3 - 9 + C_2 = 0</span> より <span class=\"chem\">C_2 = 11</span>。<br>(c) <span class=\"chem\">v(t) = 3(t^2 - 2t - 3) = 3(t - 3)(t + 1) = 0</span> なので <span class=\"chem\">t = 3</span>（<span class=\"chem\">t &gt;= 0</span> より）。<span class=\"chem\">s(3) = 27 - 27 - 27 + 11 = -16</span>：粒子は <span class=\"chem\">O</span> から <span class=\"chem\">16</span> <span class=\"unit\">m</span> の位置（負の側）にあります。<br>(d) <span class=\"chem\">s(0) = 11</span>、<span class=\"chem\">s(3) = -16</span>、<span class=\"chem\">s(4) = 64 - 48 - 36 + 11 = -9</span>。移動距離 <span class=\"chem\">= |-16 - 11| + |-9 - (-16)| = 27 + 7 = 34</span> <span class=\"unit\">m</span>。</p>",
      // EN: <p>(a) <span class="chem">v(t) = 3t^2 - 6t - 9</span><br>(b) <span class="chem">s(t) = t^3 - 3t^2 - 9t + 11</span><br>(c) <span class="chem">16</span> <span class="unit">m</span><br>(d) <span class="chem">34</span> <span class="unit">m</span></p>
      answer: "<p>(a) <span class=\"chem\">v(t) = 3t^2 - 6t - 9</span><br>(b) <span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + 11</span><br>(c) <span class=\"chem\">16</span> <span class=\"unit\">m</span><br>(d) <span class=\"chem\">34</span> <span class=\"unit\">m</span></p>",
      markscheme: [
        // EN: M1: Integrates <span class="chem">a(t)</span> and uses <span class="chem">v(0) = -9</span>.
        "M1：<span class=\"chem\">a(t)</span> を積分し、<span class=\"chem\">v(0) = -9</span> を使う。",
        // EN: A1: <span class="chem">v(t) = 3t^2 - 6t - 9</span>.
        "A1：<span class=\"chem\">v(t) = 3t^2 - 6t - 9</span>。",
        // EN: M1: Integrates: <span class="chem">s(t) = t^3 - 3t^2 - 9t + C</span>.
        "M1：積分する：<span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + C</span>。",
        // EN: M1: Uses <span class="chem">s(1) = 0</span> (not <span class="chem">s(0) = 0</span>): <span class="chem">1 - 3 - 9 + C = 0</span>.
        "M1：（<span class=\"chem\">s(0) = 0</span> ではなく）<span class=\"chem\">s(1) = 0</span> を使う：<span class=\"chem\">1 - 3 - 9 + C = 0</span>。",
        // EN: A1: <span class="chem">s(t) = t^3 - 3t^2 - 9t + 11</span>.
        "A1：<span class=\"chem\">s(t) = t^3 - 3t^2 - 9t + 11</span>。",
        // EN: M1: Solves <span class="chem">v = 3(t - 3)(t + 1) = 0</span>, giving <span class="chem">t = 3</span> (rejecting <span class="chem">t = -1</span>).
        "M1：<span class=\"chem\">v = 3(t - 3)(t + 1) = 0</span> を解き、<span class=\"chem\">t = 3</span> を得る（<span class=\"chem\">t = -1</span> は不適）。",
        // EN: A1: <span class="chem">s(3) = -16</span>, so the particle is <span class="chem">16</span> <span class="unit">m</span> from <span class="chem">O</span>.
        "A1：<span class=\"chem\">s(3) = -16</span> なので、粒子は <span class=\"chem\">O</span> から <span class=\"chem\">16</span> <span class=\"unit\">m</span> の位置にある。",
        // EN: M1: Uses <span class="chem">s(0) = 11</span>, <span class="chem">s(3) = -16</span>, <span class="chem">s(4) = -9</span> (or splits <span class="chem">int_0^4 |v| dt</span> at <span class="chem">t = 3</span>).
        "M1：<span class=\"chem\">s(0) = 11</span>、<span class=\"chem\">s(3) = -16</span>、<span class=\"chem\">s(4) = -9</span> を使う（または <span class=\"chem\">t = 3</span> で <span class=\"chem\">int_0^4 |v| dt</span> を分割する）。",
        // EN: A1: Legs of <span class="chem">27</span> and <span class="chem">7</span> <span class="unit">m</span>.
        "A1：各区間の移動距離 <span class=\"chem\">27</span> と <span class=\"chem\">7</span> <span class=\"unit\">m</span>。",
        // EN: A1: Total distance <span class="chem">34</span> <span class="unit">m</span>.
        "A1：総移動距離 <span class=\"chem\">34</span> <span class=\"unit\">m</span>。",
      ],
    },

    // ── t5-2-q051 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q051": {
      // EN: <p>The line <span class="chem">y = kx</span>, where <span class="chem">k &gt; 0</span>, and the curve <span class="chem">y = x^2</span> enclose a region of area <span class="chem">36</span> square units. Find the value of <span class="chem">k</span>.</p>
      stem: "<p>直線 <span class=\"chem\">y = kx</span>（ただし <span class=\"chem\">k &gt; 0</span>）と曲線 <span class=\"chem\">y = x^2</span> は面積 <span class=\"chem\">36</span> 平方単位の領域を囲む。<span class=\"chem\">k</span> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the unknown <span class="chem">k</span> appears in both the integrand and a limit. Find the intersections in terms of <span class="chem">k</span>, write the area as an expression in <span class="chem">k</span>, then set it equal to 36.
        "解読：未知数 <span class=\"chem\">k</span> は被積分関数と積分の端の両方に現れます。交点を <span class=\"chem\">k</span> で表し、面積を <span class=\"chem\">k</span> の式で表してから、36 とおきます。",
        // EN: The curves meet where <span class="chem">x^2 = kx</span>, i.e. <span class="chem">x = 0</span> and <span class="chem">x = k</span>. The line is on top for <span class="chem">0 &lt; x &lt; k</span>.
        "2 つは <span class=\"chem\">x^2 = kx</span>、すなわち <span class=\"chem\">x = 0</span> と <span class=\"chem\">x = k</span> で交わります。<span class=\"chem\">0 &lt; x &lt; k</span> では直線が上側です。",
        // EN: Show that <span class="chem">int_0^k (kx - x^2) dx = k^3/6</span>.
        "<span class=\"chem\">int_0^k (kx - x^2) dx = k^3/6</span> を示しましょう (Show that)。",
      ],
      // EN: <p>Decode: area as a function of the parameter. Intersections at <span class="chem">x = 0</span> and <span class="chem">x = k</span>, with <span class="chem">kx &gt;= x^2</span> between them. <span class="chem">A = int_0^k (kx - x^2) dx = [kx^2/2 - x^3/3]_0^k = k^3/2 - k^3/3 = k^3/6</span>. Setting <span class="chem">k^3/6 = 36</span> gives <span class="chem">k^3 = 216</span>, so <span class="chem">k = 6</span>.</p>
      solution: "<p>解読：パラメータの関数としての面積です。交点は <span class=\"chem\">x = 0</span> と <span class=\"chem\">x = k</span> で、その間で <span class=\"chem\">kx &gt;= x^2</span> です。<span class=\"chem\">A = int_0^k (kx - x^2) dx = [kx^2/2 - x^3/3]_0^k = k^3/2 - k^3/3 = k^3/6</span>。<span class=\"chem\">k^3/6 = 36</span> とおくと <span class=\"chem\">k^3 = 216</span> なので <span class=\"chem\">k = 6</span> です。</p>",
    },

    // ── t5-2-q052 · numeric · challenge · SL · SL 3.6, 5.10, 5.11 · 6 marks
    "t5-2-q052": {
      // EN: <p>Find the exact value of <span class="chem">int_0^{pi/2} sin(2x) cos^2 x dx</span>.</p>
      stem: "<p><span class=\"chem\">int_0^{pi/2} sin(2x) cos^2 x dx</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is a reverse chain rule integral in disguise. Rewrite <span class="chem">sin(2x)</span> with the double-angle identity so that the integrand becomes (a constant times) <span class="chem">g'(x) [g(x)]^n</span>.
        "解読：これは形を変えた、合成関数の微分の逆による積分です。2 倍角の公式で <span class=\"chem\">sin(2x)</span> を書き直し、被積分関数が（定数倍の）<span class=\"chem\">g'(x) [g(x)]^n</span> になるようにしましょう。",
        // EN: <span class="chem">sin(2x) cos^2 x = 2 sin x cos^3 x</span>. With <span class="chem">g(x) = cos x</span>, <span class="chem">g'(x) = -sin x</span>.
        "<span class=\"chem\">sin(2x) cos^2 x = 2 sin x cos^3 x</span>。<span class=\"chem\">g(x) = cos x</span> なので <span class=\"chem\">g'(x) = -sin x</span>。",
        // EN: So <span class="chem">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>. Use <span class="chem">cos(pi/2) = 0</span> and <span class="chem">cos 0 = 1</span>.
        "よって <span class=\"chem\">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>。<span class=\"chem\">cos(pi/2) = 0</span> と <span class=\"chem\">cos 0 = 1</span> を使います。",
      ],
      // EN: <p>Decode: double angle, then inspection. <span class="chem">sin(2x) cos^2 x = 2 sin x cos x × cos^2 x = 2 sin x cos^3 x</span>. Since <span class="chem">d/dx (cos^4 x) = -4 sin x cos^3 x</span>, <span class="chem">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>. Then <span class="chem">[-(1/2) cos^4 x]_0^{pi/2} = 0 - (-(1/2)(1)) = 1/2</span>.</p>
      solution: "<p>解読：2 倍角の公式を使い、次に見た目で積分します。<span class=\"chem\">sin(2x) cos^2 x = 2 sin x cos x × cos^2 x = 2 sin x cos^3 x</span>。<span class=\"chem\">d/dx (cos^4 x) = -4 sin x cos^3 x</span> なので <span class=\"chem\">int 2 sin x cos^3 x dx = -(1/2) cos^4 x + C</span>。よって <span class=\"chem\">[-(1/2) cos^4 x]_0^{pi/2} = 0 - (-(1/2)(1)) = 1/2</span> です。</p>",
    },

    // ── t5-2-q053 · numeric · challenge · SL · SL 5.11 · 6 marks
    "t5-2-q053": {
      // EN: <p>Let <span class="chem">f(x) = 3x^2 - 12</span>. Region <span class="chem">P</span> is enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the <span class="chem">y</span>-axis, for <span class="chem">0 &lt;= x &lt;= 2</span>. Region <span class="chem">Q</span> is enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the line <span class="chem">x = b</span>, for <span class="chem">2 &lt;= x &lt;= b</span>. The regions <span class="chem">P</span> and <span class="chem">Q</span> have equal areas. Find the exact value of <span class="chem">b</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = 3x^2 - 12</span> とする。領域 <span class=\"chem\">P</span> は、<span class=\"chem\">0 &lt;= x &lt;= 2</span> において <span class=\"chem\">f</span> のグラフ、<span class=\"chem\">x</span> 軸、<span class=\"chem\">y</span> 軸で囲まれている。領域 <span class=\"chem\">Q</span> は、<span class=\"chem\">2 &lt;= x &lt;= b</span> において <span class=\"chem\">f</span> のグラフ、<span class=\"chem\">x</span> 軸、直線 <span class=\"chem\">x = b</span> で囲まれている。領域 <span class=\"chem\">P</span> と <span class=\"chem\">Q</span> の面積は等しい。<span class=\"chem\">b</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: <span class="chem">P</span> is below the axis and <span class="chem">Q</span> is above it. “Equal areas” means their signed integrals cancel, so the condition is simply <span class="chem">int_0^b f(x) dx = 0</span>.
        "解読：<span class=\"chem\">P</span> は軸の下側、<span class=\"chem\">Q</span> は軸の上側にあります。「面積が等しい」とは、符号付きの積分が打ち消し合うということなので、条件は単に <span class=\"chem\">int_0^b f(x) dx = 0</span> です。",
        // EN: <span class="chem">int_0^b (3x^2 - 12) dx = b^3 - 12b</span>.
        "<span class=\"chem\">int_0^b (3x^2 - 12) dx = b^3 - 12b</span>。",
        // EN: Solve <span class="chem">b^3 - 12b = 0</span> and use <span class="chem">b &gt; 2</span>.
        "<span class=\"chem\">b^3 - 12b = 0</span> を解き、<span class=\"chem\">b &gt; 2</span> を使います。",
      ],
      // EN: <p>Decode: area of <span class="chem">P</span> = <span class="chem">-int_0^2 f</span> and area of <span class="chem">Q</span> = <span class="chem">int_2^b f</span>; setting them equal gives <span class="chem">int_0^2 f + int_2^b f = int_0^b f = 0</span>. Now <span class="chem">int_0^b (3x^2 - 12) dx = [x^3 - 12x]_0^b = b^3 - 12b = b(b^2 - 12) = 0</span>. Since <span class="chem">b &gt; 2</span>, <span class="chem">b = sqrt(12) = 2sqrt(3)</span>. (Check: area of <span class="chem">P</span> is <span class="chem">|8 - 24| = 16</span>, and area of <span class="chem">Q</span> is <span class="chem">0 - (8 - 24) = 16</span>.)</p>
      solution: "<p>解読：<span class=\"chem\">P</span> の面積 = <span class=\"chem\">-int_0^2 f</span>、<span class=\"chem\">Q</span> の面積 = <span class=\"chem\">int_2^b f</span> で、これらを等しいとおくと <span class=\"chem\">int_0^2 f + int_2^b f = int_0^b f = 0</span> です。ここで <span class=\"chem\">int_0^b (3x^2 - 12) dx = [x^3 - 12x]_0^b = b^3 - 12b = b(b^2 - 12) = 0</span>。<span class=\"chem\">b &gt; 2</span> なので <span class=\"chem\">b = sqrt(12) = 2sqrt(3)</span>。（確認：<span class=\"chem\">P</span> の面積は <span class=\"chem\">|8 - 24| = 16</span>、<span class=\"chem\">Q</span> の面積は <span class=\"chem\">0 - (8 - 24) = 16</span> です。）</p>",
    },

    // ── t5-2-q054 · short · challenge · SL · SL 5.5, 5.10, 5.11 · 10 marks
    "t5-2-q054": {
      // EN: <p>The region <span class="chem">R</span> is enclosed by the curve <span class="chem">y = sin x</span> and the <span class="chem">x</span>-axis, for <span class="chem">0 &lt;= x &lt;= pi</span>.<br>(a) Show that the area of <span class="chem">R</span> is <span class="chem">2</span>. <strong>[2 marks]</strong><br>The line <span class="chem">y = mx</span>, where <span class="chem">0 &lt; m &lt; 1</span>, meets the curve at the origin and at the point where <span class="chem">x = a</span>, with <span class="chem">0 &lt; a &lt; pi</span>.<br>(b) Show that the area of the region enclosed between the curve and the line is <span class="chem">1 - cos a - (a sin a)/2</span>. <strong>[4 marks]</strong><br>(c) The line divides <span class="chem">R</span> into two parts of equal area. Find the value of <span class="chem">a</span> and the value of <span class="chem">m</span>, each correct to 3 significant figures. <strong>[4 marks]</strong></p>
      stem: "<p>領域 <span class=\"chem\">R</span> は、<span class=\"chem\">0 &lt;= x &lt;= pi</span> において曲線 <span class=\"chem\">y = sin x</span> と <span class=\"chem\">x</span> 軸で囲まれている。<br>(a) <span class=\"chem\">R</span> の面積が <span class=\"chem\">2</span> であることを示しなさい (Show that)。<strong>[2 marks]</strong><br>直線 <span class=\"chem\">y = mx</span>（ただし <span class=\"chem\">0 &lt; m &lt; 1</span>）は、原点と <span class=\"chem\">x = a</span> となる点で曲線と交わる。ただし、<span class=\"chem\">0 &lt; a &lt; pi</span> である。<br>(b) 曲線と直線で囲まれた領域の面積が <span class=\"chem\">1 - cos a - (a sin a)/2</span> であることを示しなさい (Show that)。<strong>[4 marks]</strong><br>(c) 直線は <span class=\"chem\">R</span> を面積の等しい 2 つの部分に分ける。<span class=\"chem\">a</span> の値と <span class=\"chem\">m</span> の値を、それぞれ有効数字 3 桁で求めなさい (Find)。<strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: the line cuts <span class="chem">R</span> into a piece between the curve and the line, and a piece under the line plus the rest. “Two parts of equal area” means the piece between the curve and the line has area <span class="chem">1</span>.
        "解読：直線は <span class=\"chem\">R</span> を、曲線と直線の間の部分と、直線の下の部分および残りの部分に分けます。「面積の等しい 2 つの部分」とは、曲線と直線の間の部分の面積が <span class=\"chem\">1</span> であるということです。",
        // EN: For (b), you need two facts: (upper − lower) on <span class="chem">[0, a]</span> is <span class="chem">sin x - mx</span>, and <span class="chem">x = a</span> is on both graphs, so <span class="chem">sin a = ma</span>. Use the second to remove <span class="chem">m</span>.
        "(b) では 2 つの事実が必要です：<span class=\"chem\">[0, a]</span> 上で（上側 − 下側）は <span class=\"chem\">sin x - mx</span> であること、そして <span class=\"chem\">x = a</span> が両方のグラフ上にあるので <span class=\"chem\">sin a = ma</span> であることです。2 つ目を使って <span class=\"chem\">m</span> を消去します。",
        // EN: For (c), solve <span class="chem">cos a + (a sin a)/2 = 0</span> on your GDC (radians) for <span class="chem">0 &lt; a &lt; pi</span>, then <span class="chem">m = (sin a)/a</span>.
        "(c) では、GDC（ラジアン）で <span class=\"chem\">cos a + (a sin a)/2 = 0</span> を <span class=\"chem\">0 &lt; a &lt; pi</span> について解き、次に <span class=\"chem\">m = (sin a)/a</span> とします。",
      ],
      // EN: <p>Decode: “equal parts” is a condition on the area between curve and line, which (b) gives as a function of <span class="chem">a</span>; set it to half of (a).<br>(a) <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi = -(-1) - (-1) = 2</span>.<br>(b) On <span class="chem">(0, a)</span>, <span class="chem">sin x &gt; mx</span>, so the area is <span class="chem">int_0^a (sin x - mx) dx = [-cos x - mx^2/2]_0^a = 1 - cos a - ma^2/2</span>. The point <span class="chem">x = a</span> lies on both graphs, so <span class="chem">ma = sin a</span> and <span class="chem">ma^2/2 = (a sin a)/2</span>, giving <span class="chem">1 - cos a - (a sin a)/2</span>.<br>(c) Each part has area <span class="chem">1</span>, so <span class="chem">1 - cos a - (a sin a)/2 = 1</span>, i.e. <span class="chem">cos a + (a sin a)/2 = 0</span>. The GDC gives <span class="chem">a = 2.45871…</span> (the only root in <span class="chem">(0, pi)</span>), so <span class="chem">a = 2.46</span> and <span class="chem">m = sin(2.45871…)/2.45871… = 0.256649… ≈ 0.257</span>.</p>
      solution: "<p>解読：「等しい部分」は曲線と直線の間の面積についての条件で、(b) がそれを <span class=\"chem\">a</span> の関数として与えます。それを (a) の半分とおきます。<br>(a) <span class=\"chem\">int_0^pi sin x dx = [-cos x]_0^pi = -(-1) - (-1) = 2</span>。<br>(b) <span class=\"chem\">(0, a)</span> 上で <span class=\"chem\">sin x &gt; mx</span> なので、面積は <span class=\"chem\">int_0^a (sin x - mx) dx = [-cos x - mx^2/2]_0^a = 1 - cos a - ma^2/2</span> です。点 <span class=\"chem\">x = a</span> は両方のグラフ上にあるので <span class=\"chem\">ma = sin a</span>、<span class=\"chem\">ma^2/2 = (a sin a)/2</span> となり、<span class=\"chem\">1 - cos a - (a sin a)/2</span> です。<br>(c) 各部分の面積は <span class=\"chem\">1</span> なので <span class=\"chem\">1 - cos a - (a sin a)/2 = 1</span>、すなわち <span class=\"chem\">cos a + (a sin a)/2 = 0</span> です。GDC から <span class=\"chem\">a = 2.45871…</span>（<span class=\"chem\">(0, pi)</span> にある唯一の根）なので <span class=\"chem\">a = 2.46</span>、<span class=\"chem\">m = sin(2.45871…)/2.45871… = 0.256649… ≈ 0.257</span> です。</p>",
      // EN: <p>(a) <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi = 1 + 1 = 2</span><br>(b) <span class="chem">int_0^a (sin x - mx) dx = 1 - cos a - m a^2/2</span>, and <span class="chem">m a = sin a</span>, giving <span class="chem">1 - cos a - (a sin a)/2</span><br>(c) <span class="chem">a = 2.46</span>, <span class="chem">m = 0.257</span></p>
      answer: "<p>(a) <span class=\"chem\">int_0^pi sin x dx = [-cos x]_0^pi = 1 + 1 = 2</span><br>(b) <span class=\"chem\">int_0^a (sin x - mx) dx = 1 - cos a - m a^2/2</span>、および <span class=\"chem\">m a = sin a</span> より <span class=\"chem\">1 - cos a - (a sin a)/2</span><br>(c) <span class=\"chem\">a = 2.46</span>、<span class=\"chem\">m = 0.257</span></p>",
      markscheme: [
        // EN: M1: <span class="chem">int_0^pi sin x dx = [-cos x]_0^pi</span>.
        "M1：<span class=\"chem\">int_0^pi sin x dx = [-cos x]_0^pi</span>。",
        // EN: A1: <span class="chem">= -cos pi + cos 0 = 1 + 1</span>. AG: area of <span class="chem">R = 2</span>; the given line itself earns no mark.
        "A1：<span class=\"chem\">= -cos pi + cos 0 = 1 + 1</span>。AG：<span class=\"chem\">R = 2</span> の面積。与えられた式を書くだけでは得点にならない。",
        // EN: M1: Area <span class="chem">= int_0^a (sin x - mx) dx</span> (curve above the line on <span class="chem">(0, a)</span>).
        "M1：面積 <span class=\"chem\">= int_0^a (sin x - mx) dx</span>（<span class=\"chem\">(0, a)</span> 上で曲線が直線の上側）。",
        // EN: A1: <span class="chem">= [-cos x - m x^2/2]_0^a = 1 - cos a - m a^2/2</span>.
        "A1：<span class=\"chem\">= [-cos x - m x^2/2]_0^a = 1 - cos a - m a^2/2</span>。",
        // EN: M1: Uses the intersection condition <span class="chem">sin a = m a</span>, i.e. <span class="chem">m = (sin a)/a</span>.
        "M1：交点の条件 <span class=\"chem\">sin a = m a</span>、すなわち <span class=\"chem\">m = (sin a)/a</span> を使う。",
        // EN: A1: Substitutes: <span class="chem">m a^2/2 = (a sin a)/2</span>. AG: area <span class="chem">= 1 - cos a - (a sin a)/2</span>; the given line itself earns no mark.
        "A1：代入する：<span class=\"chem\">m a^2/2 = (a sin a)/2</span>。AG：面積 <span class=\"chem\">= 1 - cos a - (a sin a)/2</span>。与えられた式を書くだけでは得点にならない。",
        // EN: M1: Equal parts means the region between the curve and the line has area <span class="chem">1</span> (half of 2).
        "M1：等しい部分とは、曲線と直線の間の領域の面積が <span class=\"chem\">1</span>（2 の半分）であることを意味する。",
        // EN: A1: <span class="chem">1 - cos a - (a sin a)/2 = 1</span>, i.e. <span class="chem">cos a + (a sin a)/2 = 0</span>.
        "A1：<span class=\"chem\">1 - cos a - (a sin a)/2 = 1</span>、すなわち <span class=\"chem\">cos a + (a sin a)/2 = 0</span>。",
        // EN: A1: <span class="chem">a = 2.46</span> (GDC, 2.4587…).
        "A1：<span class=\"chem\">a = 2.46</span>（GDC、2.4587…）。",
        // EN: A1: <span class="chem">m = (sin a)/a = 0.257</span> (0.25665…).
        "A1：<span class=\"chem\">m = (sin a)/a = 0.257</span>（0.25665…）。",
      ],
    },

    // ── t5-2-q055 · numeric · challenge · SL · SL 5.5, 5.11 · 6 marks
    "t5-2-q055": {
      // EN: <p>A gardener’s flower bed is the region in the first quadrant enclosed by the curve <span class="chem">y = 4 - x^2</span> and the coordinate axes (units in metres). A straight path is to be laid along a vertical line <span class="chem">x = p</span> so that the bed is split into two parts of equal area. Find the value of <span class="chem">p</span>, correct to 3 significant figures.</p>
      stem: "<p>ある庭師の花壇は、第 1 象限において曲線 <span class=\"chem\">y = 4 - x^2</span> と座標軸で囲まれた領域である（単位はメートル）。花壇を面積の等しい 2 つの部分に分けるように、縦の直線 <span class=\"chem\">x = p</span> に沿ってまっすぐな小道をつくる。<span class=\"chem\">p</span> の値を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: find the whole area first, then find the upper limit <span class="chem">p</span> for which <span class="chem">int_0^p (4 - x^2) dx</span> is half of it. The unknown is a limit of integration.
        "解読：まず全体の面積を求め、次に <span class=\"chem\">int_0^p (4 - x^2) dx</span> がその半分になる上端 <span class=\"chem\">p</span> を求めます。未知数は積分の端です。",
        // EN: The whole bed has area <span class="chem">int_0^2 (4 - x^2) dx = 16/3</span>, so you need <span class="chem">int_0^p (4 - x^2) dx = 8/3</span>.
        "花壇全体の面積は <span class=\"chem\">int_0^2 (4 - x^2) dx = 16/3</span> なので、<span class=\"chem\">int_0^p (4 - x^2) dx = 8/3</span> が必要です。",
        // EN: This gives the cubic <span class="chem">4p - p^3/3 = 8/3</span>, i.e. <span class="chem">p^3 - 12p + 8 = 0</span>. Solve it on your GDC and choose the root with <span class="chem">0 &lt; p &lt; 2</span>.
        "これより 3 次方程式 <span class=\"chem\">4p - p^3/3 = 8/3</span>、すなわち <span class=\"chem\">p^3 - 12p + 8 = 0</span> が得られます。これを GDC で解き、<span class=\"chem\">0 &lt; p &lt; 2</span> を満たす根を選びます。",
      ],
      // EN: <p>Decode: “split into two parts of equal area” by a vertical line means <span class="chem">int_0^p f = (1/2) int_0^2 f</span>. The bed meets the <span class="chem">x</span>-axis at <span class="chem">x = 2</span> and has area <span class="chem">[4x - x^3/3]_0^2 = 8 - 8/3 = 16/3</span>. So <span class="chem">4p - p^3/3 = 8/3</span>, i.e. <span class="chem">p^3 - 12p + 8 = 0</span>. Its roots are about <span class="chem">-3.76</span>, <span class="chem">0.695</span> and <span class="chem">3.06</span>; only <span class="chem">p = 0.69459…</span> lies in <span class="chem">(0, 2)</span>. So <span class="chem">p = 0.695</span> <span class="unit">m</span> (3 s.f.). The path is not at <span class="chem">x = 1</span>, because the bed is taller near the <span class="chem">y</span>-axis.</p>
      solution: "<p>解読：縦の直線で「面積の等しい 2 つの部分に分ける」とは <span class=\"chem\">int_0^p f = (1/2) int_0^2 f</span> ということです。花壇は <span class=\"chem\">x = 2</span> で <span class=\"chem\">x</span> 軸と交わり、面積は <span class=\"chem\">[4x - x^3/3]_0^2 = 8 - 8/3 = 16/3</span> です。よって <span class=\"chem\">4p - p^3/3 = 8/3</span>、すなわち <span class=\"chem\">p^3 - 12p + 8 = 0</span> です。その根はおよそ <span class=\"chem\">-3.76</span>、<span class=\"chem\">0.695</span>、<span class=\"chem\">3.06</span> で、<span class=\"chem\">(0, 2)</span> にあるのは <span class=\"chem\">p = 0.69459…</span> だけです。よって <span class=\"chem\">p = 0.695</span> <span class=\"unit\">m</span>（有効数字 3 桁）です。花壇は <span class=\"chem\">y</span> 軸の近くの方が高いので、小道は <span class=\"chem\">x = 1</span> にはなりません。</p>",
    },

    // ── t5-2-q056 · numeric · challenge · SL · SL 5.9, 5.10 · 6 marks
    "t5-2-q056": {
      // EN: <p>Two runners, Ana and Ben, start together from the same point on a long straight track at <span class="chem">t = 0</span> and run in the same direction. Ana’s velocity is <span class="chem">v_A(t) = 2 + sin t</span> <span class="unit">m s-1</span> and Ben’s velocity is <span class="chem">v_B(t) = 0.5t</span> <span class="unit">m s-1</span>, where <span class="chem">t</span> is in seconds. Find the time when the runners are next level with each other. Give your answer correct to 3 significant figures.</p>
      stem: "<p>2 人のランナー Ana と Ben が、<span class=\"chem\">t = 0</span> に長いまっすぐなトラック上の同じ地点から一緒に出発し、同じ向きに走る。Ana の速度は <span class=\"chem\">v_A(t) = 2 + sin t</span> <span class=\"unit\">m s-1</span>、Ben の速度は <span class=\"chem\">v_B(t) = 0.5t</span> <span class=\"unit\">m s-1</span> であり、<span class=\"chem\">t</span> は秒である。2 人が次に並ぶ時刻を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: “level with each other” means equal <strong>displacements</strong> from the start, not equal velocities. Find each displacement by integrating with <span class="chem">s(0) = 0</span>, then solve <span class="chem">s_A(t) = s_B(t)</span> for <span class="chem">t &gt; 0</span>.
        "解読：「並ぶ」とは、速度が等しいことではなく、出発点からの<strong>変位</strong>が等しいことです。<span class=\"chem\">s(0) = 0</span> として積分してそれぞれの変位を求め、<span class=\"chem\">t &gt; 0</span> について <span class=\"chem\">s_A(t) = s_B(t)</span> を解きます。",
        // EN: <span class="chem">s_A(t) = 2t + 1 - cos t</span> (note the constant: <span class="chem">s_A(0) = 0</span> needs the <span class="chem">+1</span>) and <span class="chem">s_B(t) = t^2/4</span>.
        "<span class=\"chem\">s_A(t) = 2t + 1 - cos t</span>（定数に注意：<span class=\"chem\">s_A(0) = 0</span> には <span class=\"chem\">+1</span> が必要です）と <span class=\"chem\">s_B(t) = t^2/4</span>。",
        // EN: Graph <span class="chem">y = 2x + 1 - cos x - x^2/4</span> (radians) and find its first zero after <span class="chem">x = 0</span>.
        "<span class=\"chem\">y = 2x + 1 - cos x - x^2/4</span> のグラフ（ラジアン）をかき、<span class=\"chem\">x = 0</span> より後の最初のゼロ点を求めます。",
      ],
      // EN: <p>Decode: meeting means equal positions. <span class="chem">s_A(t) = int_0^t (2 + sin u) du = 2t - cos t + 1</span> and <span class="chem">s_B(t) = int_0^t 0.5u du = t^2/4</span>. Solve <span class="chem">2t + 1 - cos t = t^2/4</span>. Apart from <span class="chem">t = 0</span>, the GDC gives <span class="chem">t = 8.82786…</span>, so they are level again after <span class="chem">8.83</span> <span class="unit">s</span> (3 s.f.). (Equal velocities, <span class="chem">2 + sin t = 0.5t</span>, happen earlier, at about <span class="chem">t = 3.43</span> s; that is when Ben is furthest behind, not when he catches up.)</p>
      solution: "<p>解読：出会うとは位置が等しいということです。<span class=\"chem\">s_A(t) = int_0^t (2 + sin u) du = 2t - cos t + 1</span>、<span class=\"chem\">s_B(t) = int_0^t 0.5u du = t^2/4</span>。<span class=\"chem\">2t + 1 - cos t = t^2/4</span> を解きます。<span class=\"chem\">t = 0</span> 以外では GDC から <span class=\"chem\">t = 8.82786…</span> なので、2 人は <span class=\"chem\">8.83</span> <span class=\"unit\">s</span> 後に再び並びます（有効数字 3 桁）。（速度が等しくなる <span class=\"chem\">2 + sin t = 0.5t</span> はそれより早い約 <span class=\"chem\">t = 3.43</span> s で、それは Ben が最も遅れているときであり、追いつくときではありません。）</p>",
    },

    // ── t5-2-q057 · numeric · challenge · SL · SL 5.5, 5.9 · 5 marks
    "t5-2-q057": {
      // EN: <p>A particle moves in a straight line with velocity <span class="chem">v(t) = 2t - 5 + 3 cos(2t)</span> <span class="unit">m s-1</span>, where <span class="chem">t &gt;= 0</span> is in seconds. Find the distance travelled by the particle during the third second of its motion. Give your answer correct to 3 significant figures.</p>
      stem: "<p>粒子が速度 <span class=\"chem\">v(t) = 2t - 5 + 3 cos(2t)</span> <span class=\"unit\">m s-1</span> で直線上を動く。ただし、<span class=\"chem\">t &gt;= 0</span> は秒である。運動の 3 秒目の間に粒子が進んだ移動距離を求めなさい (Find)。答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: “the third second” is the interval from <span class="chem">t = 2</span> to <span class="chem">t = 3</span> (the first second is <span class="chem">0 &lt;= t &lt;= 1</span>). “Distance travelled” means <span class="chem">int |v| dt</span>.
        "解読：「3 秒目」とは <span class=\"chem\">t = 2</span> から <span class=\"chem\">t = 3</span> までの区間です（1 秒目は <span class=\"chem\">0 &lt;= t &lt;= 1</span>）。「進んだ移動距離」は <span class=\"chem\">int |v| dt</span> を意味します。",
        // EN: Check the sign of <span class="chem">v</span> on <span class="chem">[2, 3]</span> (radians): it changes sign at <span class="chem">t ≈ 2.392</span>.
        "<span class=\"chem\">[2, 3]</span> 上で <span class=\"chem\">v</span> の符号を確認しましょう（ラジアン）。<span class=\"chem\">t ≈ 2.392</span> で符号が変わります。",
        // EN: Evaluate <span class="chem">int_2^3 |2t - 5 + 3 cos(2t)| dt</span> on your GDC.
        "GDC で <span class=\"chem\">int_2^3 |2t - 5 + 3 cos(2t)| dt</span> を計算します。",
      ],
      // EN: <p>Decode: third second = <span class="chem">[2, 3]</span>, and distance = <span class="chem">int |v|</span>. In radians, <span class="chem">v(2) = -1 + 3 cos 4 ≈ -2.96 &lt; 0</span> and <span class="chem">v(3) = 1 + 3 cos 6 ≈ 3.88 &gt; 0</span>, with a single zero at <span class="chem">t = 2.39217…</span>. So the distance is <span class="chem">int_2^3 |v(t)| dt = 0.59929… + 1.31537… = 1.91466…</span>, i.e. <span class="chem">1.91</span> <span class="unit">m</span> (3 s.f.). The displacement over the same second is only <span class="chem">0.716</span> <span class="unit">m</span>.</p>
      solution: "<p>解読：3 秒目 = <span class=\"chem\">[2, 3]</span>、移動距離 = <span class=\"chem\">int |v|</span> です。ラジアンでは <span class=\"chem\">v(2) = -1 + 3 cos 4 ≈ -2.96 &lt; 0</span>、<span class=\"chem\">v(3) = 1 + 3 cos 6 ≈ 3.88 &gt; 0</span> で、ゼロ点は <span class=\"chem\">t = 2.39217…</span> の 1 つだけです。よって移動距離は <span class=\"chem\">int_2^3 |v(t)| dt = 0.59929… + 1.31537… = 1.91466…</span>、すなわち <span class=\"chem\">1.91</span> <span class=\"unit\">m</span>（有効数字 3 桁）です。同じ 1 秒間の変位はわずか <span class=\"chem\">0.716</span> <span class=\"unit\">m</span> です。</p>",
    },

    // ── t5-2-q058 · short · exam · SL · SL 5.5, 5.10 · 9 marks
    "t5-2-q058": {
      // EN: <p>A seedling is planted when it is <span class="chem">5</span> <span class="unit">cm</span> tall. Its height <span class="chem">h</span> <span class="unit">cm</span> after <span class="chem">t</span> weeks grows at the rate <span class="chem">dh/dt = 8/(t + 2) + 0.4 cos t</span>, for <span class="chem">0 &lt;= t &lt;= 10</span>.<br>(a) Find an expression for <span class="chem">h</span> in terms of <span class="chem">t</span>. <strong>[5 marks]</strong><br>(b) Find the height of the seedling after 10 weeks. <strong>[2 marks]</strong><br>(c) Find the time when the seedling is first <span class="chem">15</span> <span class="unit">cm</span> tall. <strong>[2 marks]</strong><br>Give non-exact answers correct to 3 significant figures.</p>
      stem: "<p>苗木が高さ <span class=\"chem\">5</span> <span class=\"unit\">cm</span> のときに植えられる。<span class=\"chem\">t</span> 週後の高さ <span class=\"chem\">h</span> <span class=\"unit\">cm</span> は、<span class=\"chem\">0 &lt;= t &lt;= 10</span> において割合 <span class=\"chem\">dh/dt = 8/(t + 2) + 0.4 cos t</span> で成長する。<br>(a) <span class=\"chem\">h</span> を <span class=\"chem\">t</span> の式で表しなさい (Find)。<strong>[5 marks]</strong><br>(b) 10 週後の苗木の高さを求めなさい (Find)。<strong>[2 marks]</strong><br>(c) 苗木の高さが初めて <span class=\"chem\">15</span> <span class=\"unit\">cm</span> になる時刻を求めなさい (Find)。<strong>[2 marks]</strong><br>正確な値でない答えは有効数字 3 桁で求めなさい。</p>",
      hints: [
        // EN: Decode: “planted when it is 5 cm tall” is the boundary condition <span class="chem">h(0) = 5</span>. Integrate the rate, then use it to find the constant.
        "解読：「高さ 5 cm のときに植えられる」は境界条件 <span class=\"chem\">h(0) = 5</span> です。成長の割合を積分し、それを使って定数を求めます。",
        // EN: <span class="chem">int 8/(t + 2) dt = 8 ln(t + 2)</span> (no modulus needed as <span class="chem">t + 2 &gt; 0</span>) and <span class="chem">int 0.4 cos t dt = 0.4 sin t</span>.
        "<span class=\"chem\">int 8/(t + 2) dt = 8 ln(t + 2)</span>（<span class=\"chem\">t + 2 &gt; 0</span> なので絶対値は不要）と <span class=\"chem\">int 0.4 cos t dt = 0.4 sin t</span>。",
        // EN: For (c), graph <span class="chem">h(t)</span> and <span class="chem">y = 15</span> in radian mode and find the first intersection.
        "(c) では、ラジアンモードで <span class=\"chem\">h(t)</span> と <span class=\"chem\">y = 15</span> のグラフをかき、最初の交点を求めます。",
      ],
      // EN: <p>(a) <span class="chem">h = int (8/(t + 2) + 0.4 cos t) dt = 8 ln(t + 2) + 0.4 sin t + C</span>. Since <span class="chem">h(0) = 5</span>: <span class="chem">8 ln 2 + 0 + C = 5</span>, so <span class="chem">C = 5 - 8 ln 2</span> and <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span> (equivalently <span class="chem">8 ln((t + 2)/2) + 0.4 sin t + 5</span>).<br>(b) <span class="chem">h(10) = 8 ln 6 + 0.4 sin 10 + 5 = 14.334… - 0.2176… + 5 = 19.116…</span>, so <span class="chem">19.1</span> <span class="unit">cm</span>.<br>(c) <span class="chem">dh/dt &gt; 0</span> throughout, so <span class="chem">h</span> is increasing and <span class="chem">h(t) = 15</span> has one solution: <span class="chem">t = 5.2810…</span>, i.e. <span class="chem">5.28</span> weeks.</p>
      solution: "<p>(a) <span class=\"chem\">h = int (8/(t + 2) + 0.4 cos t) dt = 8 ln(t + 2) + 0.4 sin t + C</span>。<span class=\"chem\">h(0) = 5</span> より：<span class=\"chem\">8 ln 2 + 0 + C = 5</span> なので <span class=\"chem\">C = 5 - 8 ln 2</span>、<span class=\"chem\">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span>（同値な形 <span class=\"chem\">8 ln((t + 2)/2) + 0.4 sin t + 5</span>）。<br>(b) <span class=\"chem\">h(10) = 8 ln 6 + 0.4 sin 10 + 5 = 14.334… - 0.2176… + 5 = 19.116…</span> なので <span class=\"chem\">19.1</span> <span class=\"unit\">cm</span>。<br>(c) 全体で <span class=\"chem\">dh/dt &gt; 0</span> なので <span class=\"chem\">h</span> は増加し、<span class=\"chem\">h(t) = 15</span> の解は 1 つです：<span class=\"chem\">t = 5.2810…</span>、すなわち <span class=\"chem\">5.28</span> 週。</p>",
      // EN: <p>(a) <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span><br>(b) <span class="chem">19.1</span> <span class="unit">cm</span><br>(c) <span class="chem">t = 5.28</span> weeks</p>
      answer: "<p>(a) <span class=\"chem\">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span><br>(b) <span class=\"chem\">19.1</span> <span class=\"unit\">cm</span><br>(c) <span class=\"chem\">t = 5.28</span> 週</p>",
      markscheme: [
        // EN: M1: Integrates <span class="chem">dh/dt</span> term by term.
        "M1：<span class=\"chem\">dh/dt</span> を項ごとに積分する。",
        // EN: A1: <span class="chem">8 ln(t + 2)</span>.
        "A1：<span class=\"chem\">8 ln(t + 2)</span>。",
        // EN: A1: <span class="chem">+ 0.4 sin t + C</span>.
        "A1：<span class=\"chem\">+ 0.4 sin t + C</span>。",
        // EN: M1: Uses <span class="chem">h(0) = 5</span>: <span class="chem">8 ln 2 + 0 + C = 5</span>.
        "M1：<span class=\"chem\">h(0) = 5</span> を使う：<span class=\"chem\">8 ln 2 + 0 + C = 5</span>。",
        // EN: A1: <span class="chem">C = 5 - 8 ln 2</span>, so <span class="chem">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span>.
        "A1：<span class=\"chem\">C = 5 - 8 ln 2</span> なので <span class=\"chem\">h = 8 ln(t + 2) + 0.4 sin t + 5 - 8 ln 2</span>。",
        // EN: M1: Substitutes <span class="chem">t = 10</span> (radians): <span class="chem">8 ln 12 + 0.4 sin 10 + 5 - 8 ln 2</span>.
        "M1：<span class=\"chem\">t = 10</span> を代入する（ラジアン）：<span class=\"chem\">8 ln 12 + 0.4 sin 10 + 5 - 8 ln 2</span>。",
        // EN: A1: <span class="chem">19.1</span> <span class="unit">cm</span> (19.116…).
        "A1：<span class=\"chem\">19.1</span> <span class=\"unit\">cm</span>（19.116…）。",
        // EN: M1: Solves <span class="chem">h(t) = 15</span> on the GDC.
        "M1：GDC で <span class=\"chem\">h(t) = 15</span> を解く。",
        // EN: A1: <span class="chem">t = 5.28</span> weeks.
        "A1：<span class=\"chem\">t = 5.28</span> 週。",
      ],
    },

    // ── t5-2-q059 · numeric · exam · SL · SL 5.5, 5.11 · 5 marks
    "t5-2-q059": {
      // EN: <p>The region <span class="chem">R</span> is enclosed by the curves <span class="chem">y = sqrt(x)</span> and <span class="chem">y = x^2 - 2</span> and the <span class="chem">y</span>-axis. Find the area of <span class="chem">R</span>, correct to 3 significant figures.</p>
      stem: "<p>領域 <span class=\"chem\">R</span> は曲線 <span class=\"chem\">y = sqrt(x)</span>、<span class=\"chem\">y = x^2 - 2</span> と <span class=\"chem\">y</span> 軸で囲まれている。<span class=\"chem\">R</span> の面積を有効数字 3 桁で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the left edge of <span class="chem">R</span> is the <span class="chem">y</span>-axis (<span class="chem">x = 0</span>) and the right edge is where the two curves meet. Part of <span class="chem">R</span> is below the <span class="chem">x</span>-axis, but you still integrate (upper − lower).
        "解読：<span class=\"chem\">R</span> の左端は <span class=\"chem\">y</span> 軸（<span class=\"chem\">x = 0</span>）で、右端は 2 曲線の交点です。<span class=\"chem\">R</span> の一部は <span class=\"chem\">x</span> 軸の下側にありますが、それでも（上側 − 下側）を積分します。",
        // EN: The GDC intersection of <span class="chem">y = sqrt(x)</span> and <span class="chem">y = x^2 - 2</span> is at <span class="chem">x ≈ 1.8312</span>; <span class="chem">sqrt(x)</span> is the upper curve on <span class="chem">(0, 1.8312)</span>.
        "<span class=\"chem\">y = sqrt(x)</span> と <span class=\"chem\">y = x^2 - 2</span> の GDC での交点は <span class=\"chem\">x ≈ 1.8312</span> です。<span class=\"chem\">(0, 1.8312)</span> 上では <span class=\"chem\">sqrt(x)</span> が上側の曲線です。",
        // EN: Evaluate <span class="chem">int_0^{1.8312} (sqrt(x) - x^2 + 2) dx</span>.
        "<span class=\"chem\">int_0^{1.8312} (sqrt(x) - x^2 + 2) dx</span> を計算します。",
      ],
      // EN: <p>The curves meet (for <span class="chem">x &gt;= 0</span>) at <span class="chem">x = c = 1.83117…</span>. On <span class="chem">[0, c]</span>, <span class="chem">sqrt(x) &gt;= x^2 - 2</span> (e.g. at <span class="chem">x = 0</span>: <span class="chem">0 &gt; -2</span>). Area <span class="chem">= int_0^c (sqrt(x) - (x^2 - 2)) dx = 3.26755…</span>, i.e. <span class="chem">3.27</span> (3 s.f.). Splitting at the <span class="chem">x</span>-axis is unnecessary: the integrand (upper − lower) is never negative.</p>
      solution: "<p>2 曲線は（<span class=\"chem\">x &gt;= 0</span> において）<span class=\"chem\">x = c = 1.83117…</span> で交わります。<span class=\"chem\">[0, c]</span> 上で <span class=\"chem\">sqrt(x) &gt;= x^2 - 2</span>（例：<span class=\"chem\">x = 0</span> では <span class=\"chem\">0 &gt; -2</span>）。面積は <span class=\"chem\">= int_0^c (sqrt(x) - (x^2 - 2)) dx = 3.26755…</span>、すなわち <span class=\"chem\">3.27</span>（有効数字 3 桁）です。<span class=\"chem\">x</span> 軸で分割する必要はありません。被積分関数（上側 − 下側）は決して負になりません。</p>",
    },

  }
});
