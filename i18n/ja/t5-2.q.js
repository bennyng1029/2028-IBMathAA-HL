/* t5-2.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't5-2.q', {
  questions: {

    // ── t5-2-q001 · mcq · foundation · SL · SL 5.10 · 3 marks
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

    // ── t5-2-q002 · numeric · foundation · SL · SL 5.5 · 5 marks
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

    // ── t5-2-q006 · mcq · exam · SL · SL 5.10, 5.11 · 5 marks
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
        // EN (option D): You differentiated (ln x)²/x instead of integrating it.
        "3": "(ln x)²/x を積分するのではなく微分してしまいました。",
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
        // EN: Make sure your GDC is in <strong>radian mode</strong> and enter <span class="mono">fnInt(abs(4*sin(t) - t + 1), t, 0, 4)</span>.
        "GDC が<strong>ラジアン（弧度法）モード</strong>であることを確認し、<span class=\"mono\">fnInt(abs(4*sin(t) - t + 1), t, 0, 4)</span> と入力します。",
      ],
      // EN: <p>In radian mode on a GDC, <span class="chem">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span>, which rounds to <span class="chem">10.7</span> <span class="unit">m</span> (3 s.f.). (Note: the net displacement is only <span class="chem">int_0^4 v(t) dt ≈ 2.61</span> <span class="unit">m</span> because <span class="chem">v(t)</span> turns negative around <span class="chem">t ≈ 2.70</span> <span class="unit">s</span>.)</p>
      solution: "<p>GDC のラジアンモードで <span class=\"chem\">d = int_0^4 |4 sin(t) - t + 1| dt ≈ 10.728...</span> となり、有効数字 3 桁に丸めると <span class=\"chem\">10.7</span> <span class=\"unit\">m</span> です。（なお、<span class=\"chem\">v(t)</span> が <span class=\"chem\">t ≈ 2.70</span> <span class=\"unit\">s</span> 付近で負になるため、純変位は <span class=\"chem\">int_0^4 v(t) dt ≈ 2.61</span> <span class=\"unit\">m</span> にすぎません。）</p>",
    },

    // ── t5-2-q012 · mcq · exam · SL · SL 5.9 · 5 marks
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
        // EN: The curve crosses the <span class="chem">x</span>-axis at <span class="chem">x = 0</span> and <span class="chem">x = 4</span>, and lies above the <span class="chem">x</span>-axis on <span class="chem">[0, 4]</span> since <span class="chem">k &gt; 0</span>.
        "曲線は <span class=\"chem\">x = 0</span> と <span class=\"chem\">x = 4</span> で <span class=\"chem\">x</span> 軸と交わり、<span class=\"chem\">k &gt; 0</span> より <span class=\"chem\">[0, 4]</span> 上で <span class=\"chem\">x</span> 軸より上側にあります。",
        // EN: Set <span class="chem">k int_0^4 (4x - x^2) dx = 32</span> and solve for <span class="chem">k</span>.
        "<span class=\"chem\">k int_0^4 (4x - x^2) dx = 32</span> とおいて <span class=\"chem\">k</span> について解きます。",
      ],
      // EN: <p>Since <span class="chem">k &gt; 0</span>, <span class="chem">y &gt;= 0</span> on <span class="chem">[0, 4]</span>. The area is <span class="chem">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>. Setting <span class="chem">(32/3)k = 32</span> gives <span class="chem">k = 3</span>.</p>
      solution: "<p><span class=\"chem\">k &gt; 0</span> より <span class=\"chem\">[0, 4]</span> 上で <span class=\"chem\">y &gt;= 0</span> です。面積は <span class=\"chem\">int_0^4 k(4x - x^2) dx = k[2x^2 - x^3/3]_0^4 = k(32 - 64/3) = (32/3)k</span>。<span class=\"chem\">(32/3)k = 32</span> とおくと <span class=\"chem\">k = 3</span> です。</p>",
    },

    // ── t5-2-q015 · mcq · challenge · SL · SL 5.10, 5.11 · 5 marks
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

    // ── t5-2-q016 · numeric · challenge · SL · SL 5.11 · 6 marks
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
