/* t5-3.q — ja question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ja', 't5-3.q', {
  questions: {

    // ── t5-3-q001 · mcq · foundation · AHL · AHL 5.12 · 2 marks
    "t5-3-q001": {
      // EN: <p>To differentiate <span class="chem">f(x) = 3/x</span> from first principles using <span class="chem">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span>, which algebraic expression is obtained after combining the numerator over a single common denominator (before dividing by <i>h</i> and taking the limit)?</p>
      stem: "<p><span class=\"chem\">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span> を用いて <span class=\"chem\">f(x) = 3/x</span> を定義に従って微分するとき、分子を 1 つの共通分母で通分した直後（<i>h</i> で割って極限をとる前）の式はどれですか？</p>",
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
        "<span class=\"chem\">f(x + h) - f(x) = 3/(x + h) - 3/x</span> と書きます。",
        // EN: Put both fractions over the common denominator <span class="chem">x(x + h)</span>: <span class="chem">(3x - 3(x + h)) / (x(x + h))</span>.
        "両方の分数を共通分母 <span class=\"chem\">x(x + h)</span> で通分します：<span class=\"chem\">(3x - 3(x + h)) / (x(x + h))</span>。",
      ],
      // EN: <p>We have <span class="chem">f(x + h) - f(x) = 3/(x + h) - 3/x = (3x - 3x - 3h) / (x(x + h)) = -3h / (x(x + h))</span>. Dividing by <i>h</i> and letting <span class="chem">h -> 0</span> gives <span class="chem">f'(x) = -3/x^2</span>.</p>
      solution: "<p><span class=\"chem\">f(x + h) - f(x) = 3/(x + h) - 3/x = (3x - 3x - 3h) / (x(x + h)) = -3h / (x(x + h))</span> となります。これを <i>h</i> で割って <span class=\"chem\">h -> 0</span> とすると <span class=\"chem\">f'(x) = -3/x^2</span> が得られます。</p>",
      misconception: {
        // EN (option B): Check the subtraction order: <span class="chem">3/(x + h) - 3/x = (3x - 3(x + h))/(x(x + h)) = -3h/(x(x + h))</span>, which has a minus sign.
        "1": "引き算の順番を確認しましょう：<span class=\"chem\">3/(x + h) - 3/x = (3x - 3(x + h))/(x(x + h)) = -3h/(x(x + h))</span> なのでマイナス符号がつきます。",
        // EN (option C): Combining fractions requires the product of denominators <span class="chem">x(x + h)</span>, not <span class="chem">x^2 + h^2</span>.
        "2": "分数の通分には分母の積 <span class=\"chem\">x(x + h)</span> が必要であり、<span class=\"chem\">x^2 + h^2</span> ではありません。",
        // EN (option D): You cannot subtract denominators directly; <span class="chem">1/(x + h) - 1/x != 1/h</span>.
        "3": "分母どうしを直接引くことはできません：<span class=\"chem\">1/(x + h) - 1/x != 1/h</span> です。",
      },
    },

    // ── t5-3-q002 · mcq · foundation · AHL · AHL 5.13 · 2 marks
    "t5-3-q002": {
      // EN: <p>A student attempts to evaluate <span class="chem">lim_{x->0} (cos x) / (x + 2)</span> by differentiating numerator and denominator to obtain <span class="chem">lim_{x->0} (-sin x) / 1 = 0</span>. Why is this working invalid?</p>
      stem: "<p>ある生徒が <span class=\"chem\">lim_{x->0} (cos x) / (x + 2)</span> を求める際、分子と分母をそれぞれ微分して <span class=\"chem\">lim_{x->0} (-sin x) / 1 = 0</span> としました。この解き方が誤りである理由は何ですか？</p>",
      options: [
        // EN: At <span class="chem">x = 0</span>, the expression approaches <span class="chem">1/2</span>, which is not an indeterminate form <span class="chem">0/0</span> or <span class="chem">infty/infty</span>.
        "<span class=\"chem\">x = 0</span> のとき式は <span class=\"chem\">1/2</span> に近づくため、<span class=\"chem\">0/0</span> や <span class=\"chem\">infty/infty</span> の不定形ではないから。",
        // EN: The student should have used the quotient rule <span class="chem">(v u' - u v')/v^2</span> when applying L’Hôpital’s rule.
        "ロピタルの定理を適用する際は商の微分法 <span class=\"chem\">(v u' - u v')/v^2</span> を使うべきだから。",
        // EN: The derivative of <span class="chem">cos x</span> is <span class="chem">+sin x</span>, not <span class="chem">-sin x</span>.
        "<span class=\"chem\">cos x</span> の導関数は <span class=\"chem\">-sin x</span> ではなく <span class=\"chem\">+sin x</span> だから。",
        // EN: L’Hôpital’s rule can only be used as <span class="chem">x -> infty</span>, never as <span class="chem">x -> 0</span>.
        "ロピタルの定理は <span class=\"chem\">x -> infty</span> のときにしか使えず、<span class=\"chem\">x -> 0</span> では使えないから。",
      ],
      hints: [
        // EN: Substitute <span class="chem">x = 0</span> directly into <span class="chem">(cos x)/(x + 2)</span> before doing any differentiation.
        "微分する前に、まず <span class=\"chem\">x = 0</span> を <span class=\"chem\">(cos x)/(x + 2)</span> に直接代入してみましょう。",
      ],
      // EN: <p>Direct substitution at <span class="chem">x = 0</span> gives <span class="chem">cos(0) / (0 + 2) = 1/2</span>. Because the limit is not of the indeterminate form <span class="chem">0/0</span> or <span class="chem">infty/infty</span>, L’Hôpital’s rule does not apply.</p>
      solution: "<p><span class=\"chem\">x = 0</span> を直接代入すると <span class=\"chem\">cos(0) / (0 + 2) = 1/2</span> になります。<span class=\"chem\">0/0</span> または <span class=\"chem\">infty/infty</span> の不定形ではないため、ロピタルの定理は適用できません。</p>",
      misconception: {
        // EN (option B): L’Hôpital’s rule differentiates numerator and denominator separately—never with the quotient rule—but it requires an indeterminate form first.
        "1": "ロピタルの定理では商の微分法は使わず分子と分母を別々に微分しますが、そもそも不定形であることが前提条件です。",
        // EN (option C): The derivative of <span class="chem">cos x</span> is indeed <span class="chem">-sin x</span>; the error is applying L’Hôpital’s rule when the denominator is non-zero.
        "2": "<span class=\"chem\">cos x</span> の微分は <span class=\"chem\">-sin x</span> で正しいです。誤りの原因は分母が 0 でないのにロピタルの定理を使ったことです。",
        // EN (option D): L’Hôpital’s rule works for any limit point <span class="chem">x -> a</span> or <span class="chem">x -> +-infty</span>, provided the form is <span class="chem">0/0</span> or <span class=\"chem\">+-infty/+-infty</span>.
        "3": "ロピタルの定理は、<span class=\"chem\">0/0</span> または <span class=\"chem\">+-infty/+-infty</span> の不定形であれば、<span class=\"chem\">x -> a</span> でも <span class=\"chem\">x -> +-infty</span> でも使えます。",
      },
    },

    // ── t5-3-q003 · numeric · foundation · AHL · AHL 5.13 · 3 marks
    "t5-3-q003": {
      // EN: <p>Evaluate <span class="chem">lim_{x->0} (e^{3x} - 1 - 3x) / x^2</span>.</p>
      stem: "<p><span class=\"chem\">lim_{x->0} (e^{3x} - 1 - 3x) / x^2</span> を計算しなさい (Evaluate)。</p>",
      hints: [
        // EN: Check that <span class="chem">x = 0</span> gives <span class="chem">0/0</span>, then apply L’Hôpital’s rule once to get <span class="chem">lim_{x->0} (3e^{3x} - 3) / (2x)</span>.
        "<span class=\"chem\">x = 0</span> で <span class=\"chem\">0/0</span> になることを確認し、ロピタルの定理を 1 回適用して <span class=\"chem\">lim_{x->0} (3e^{3x} - 3) / (2x)</span> を得ます。",
        // EN: Apply L’Hôpital’s rule a second time: <span class="chem">lim_{x->0} (9e^{3x}) / 2</span>.
        "ロピタルの定理を 2 回目適用すると <span class=\"chem\">lim_{x->0} (9e^{3x}) / 2</span> となります。",
      ],
      // EN: <p>At <span class="chem">x = 0</span>, the limit has the form <span class="chem">0/0</span>. Applying L’Hôpital’s rule twice gives <span class="chem">lim_{x->0} (3e^{3x} - 3)/(2x) = lim_{x->0} (9e^{3x})/2 = 9/2 = 4.5</span>.</p>
      solution: "<p><span class=\"chem\">x = 0</span> のとき <span class=\"chem\">0/0</span> の不定形です。ロピタルの定理を 2 回適用すると、<span class=\"chem\">lim_{x->0} (3e^{3x} - 3)/(2x) = lim_{x->0} (9e^{3x})/2 = 9/2 = 4.5</span> となります。</p>",
    },

    // ── t5-3-q004 · mcq · foundation · AHL · AHL 5.15 · 2 marks
    "t5-3-q004": {
      // EN: <p>Find the derivative of <span class="chem">f(x) = arcsin(3x)</span> for <span class="chem">|x| &lt; 1/3</span>.</p>
      stem: "<p><span class=\"chem\">|x| &lt; 1/3</span> において、<span class=\"chem\">f(x) = arcsin(3x)</span> の導関数を求めなさい (Find)。</p>",
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
        "公式集の公式 <span class=\"chem\">d/du(arcsin u) = 1/sqrt(1 - u^2)</span> に <span class=\"chem\">u = 3x</span> を当てはめ、<span class=\"chem\">du/dx = 3</span> を掛けます。",
      ],
      // EN: <p>By the chain rule, <span class="chem">f'(x) = (1 / sqrt(1 - (3x)^2)) × 3 = 3 / sqrt(1 - 9x^2)</span>.</p>
      solution: "<p>合成関数の微分法により、<span class=\"chem\">f'(x) = (1 / sqrt(1 - (3x)^2)) × 3 = 3 / sqrt(1 - 9x^2)</span> となります。</p>",
      misconception: {
        // EN (option B): You forgot to multiply by the inner derivative <span class="chem">d/dx(3x) = 3</span> from the chain rule.
        "1": "合成関数の微分法による内側の微分 <span class=\"chem\">d/dx(3x) = 3</span> を掛け忘れています。",
        // EN (option C): Remember to square the entire inner argument <span class="chem">(3x)^2 = 9x^2</span> inside the square root.
        "2": "根号の中は <span class=\"chem\">(3x)^2 = 9x^2</span> と全体を 2 乗します。",
        // EN (option D): <span class="chem">1/(1 + u^2)</span> is the derivative of <span class="chem">arctan u</span>, not <span class="chem">arcsin u</span>.
        "3": "<span class=\"chem\">1/(1 + u^2)</span> は <span class=\"chem\">arcsin u</span> ではなく <span class=\"chem\">arctan u</span> の導関数です。",
      },
    },

    // ── t5-3-q005 · numeric · foundation · AHL · AHL 5.14 · 4 marks
    "t5-3-q005": {
      // EN: <p>A curve is defined implicitly by <span class="chem">x^2 + xy + y^2 = 7</span>. Find the gradient <span class="chem">dy/dx</span> of the curve at the point <span class="chem">(2, 1)</span>.</p>
      stem: "<p>陰関数 <span class=\"chem\">x^2 + xy + y^2 = 7</span> で定められる曲線について、点 <span class=\"chem\">(2, 1)</span> における曲線の傾き <span class=\"chem\">dy/dx</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Differentiate every term with respect to <i>x</i>: <span class="chem">2x + (y + x dy/dx) + 2y dy/dx = 0</span>.
        "すべての項を <i>x</i> で微分します：<span class=\"chem\">2x + (y + x dy/dx) + 2y dy/dx = 0</span>。",
        // EN: Substitute <span class="chem">x = 2</span> and <span class="chem">y = 1</span> into the differentiated equation and solve for <span class="chem">dy/dx</span>.
        "微分した式に <span class=\"chem\">x = 2</span> と <span class=\"chem\">y = 1</span> を代入し、<span class=\"chem\">dy/dx</span> について解きます。",
      ],
      // EN: <p>Differentiating implicitly with respect to <i>x</i> gives <span class="chem">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>. At <span class="chem">(2, 1)</span>: <span class="chem">4 + 1 + (2 + 2)(dy/dx) = 0 => 4(dy/dx) = -5 => dy/dx = -5/4 = -1.25</span>.</p>
      solution: "<p><i>x</i> で陰関数微分すると <span class=\"chem\">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span> となります。<span class=\"chem\">(2, 1)</span> を代入すると <span class=\"chem\">4 + 1 + (2 + 2)(dy/dx) = 0 => 4(dy/dx) = -5 => dy/dx = -5/4 = -1.25</span> です。</p>",
    },

    // ── t5-3-q006 · multi · foundation · AHL · AHL 5.15–5.16 · 3 marks
    "t5-3-q006": {
      // EN: <p>Select <strong>all</strong> integrals below whose exact value on the given interval equals <span class="chem">pi / 4</span>.</p>
      stem: "<p>次の積分のうち、与えられた区間での正確な値が <span class=\"chem\">pi / 4</span> に等しいものを<strong>すべて</strong>選びなさい。</p>",
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
        "<span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a)</span> と <span class=\"chem\">int 1/sqrt(1 - x^2) dx = arcsin x</span> を使ってそれぞれ確認しましょう。",
      ],
      // EN: <p>A: <span class="chem">[arctan x]_0^1 = pi/4</span>. B: <span class="chem">2[(1/2) arctan(x/2)]_0^2 = arctan(1) = pi/4</span>. C: <span class="chem">[arcsin x]_0^{1/sqrt(2)} = pi/4</span>. D gives <span class="chem">pi/8</span>.</p>
      solution: "<p>A：<span class=\"chem\">[arctan x]_0^1 = pi/4</span>。B：<span class=\"chem\">2[(1/2) arctan(x/2)]_0^2 = arctan(1) = pi/4</span>。C：<span class=\"chem\">[arcsin x]_0^{1/sqrt(2)} = pi/4</span>。D は <span class=\"chem\">pi/8</span> になります。</p>",
      misconception: {
        // EN (option D): By the Formula Booklet, <span class="chem">int_0^2 1/(2^2 + x^2) dx = [(1/2) arctan(x/2)]_0^2 = (1/2)(pi/4) = pi/8</span> because of the <span class="chem">1/a</span> factor.
        "3": "公式集より <span class=\"chem\">1/a</span> の係数がつくため、<span class=\"chem\">int_0^2 1/(2^2 + x^2) dx = [(1/2) arctan(x/2)]_0^2 = (1/2)(pi/4) = pi/8</span> となります。",
      },
    },

    // ── t5-3-q007 · order · exam · AHL · AHL 5.16 · 4 marks
    "t5-3-q007": {
      // EN: <p>Arrange the steps in the correct logical order to evaluate the definite integral <span class="chem">int_0^{pi/2} x cos(x) dx</span> using integration by parts.</p>
      stem: "<p>部分積分法を用いて定積分 <span class=\"chem\">int_0^{pi/2} x cos(x) dx</span> を計算する手順を、正しい論理的順序に並べなさい。</p>",
      options: [
        // EN: Choose <span class="chem">u = x</span> and <span class="chem">dv/dx = cos x</span> following the LIATE priority rule.
        "LIATE の優先順位に従って <span class=\"chem\">u = x</span>、<span class=\"chem\">dv/dx = cos x</span> と選ぶ。",
        // EN: Differentiate and integrate to find <span class="chem">du/dx = 1</span> and <span class=\"chem\">v = sin x</span>.
        "微分と積分を行い、<span class=\"chem\">du/dx = 1</span>、<span class=\"chem\">v = sin x</span> を求める。",
        // EN: Apply the parts formula: <span class="chem">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>.
        "部分積分法の公式を適用する：<span class=\"chem\">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>。",
        // EN: Evaluate the anti-derivative <span class="chem">[x sin x + cos x]_0^{pi/2} = (pi/2 + 0) - (0 + 1) = pi/2 - 1</span>.
        "不定積分を計算する：<span class=\"chem\">[x sin x + cos x]_0^{pi/2} = (pi/2 + 0) - (0 + 1) = pi/2 - 1</span>。",
      ],
      hints: [
        // EN: Start by identifying <i>u</i> and <span class="chem">dv/dx</span>, then compute <span class="chem">du/dx</span> and <i>v</i> before assembling <span class="chem">uv - int v du</span>.
        "まず <i>u</i> と <span class=\"chem\">dv/dx</span> を決め、<span class=\"chem\">du/dx</span> と <i>v</i> を求めてから <span class=\"chem\">uv - int v du</span> に代入します。",
      ],
      // EN: <p>Choose <span class="chem">u = x, dv/dx = cos x</span>, find <span class="chem">du/dx = 1, v = sin x</span>, write <span class="chem">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>, and evaluate <span class="chem">[x sin x + cos x]_0^{pi/2} = pi/2 - 1</span>.</p>
      solution: "<p><span class=\"chem\">u = x, dv/dx = cos x</span> と選び、<span class=\"chem\">du/dx = 1, v = sin x</span> を求め、<span class=\"chem\">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span> と書いて、<span class=\"chem\">[x sin x + cos x]_0^{pi/2} = pi/2 - 1</span> を計算します。</p>",
    },

    // ── t5-3-q008 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q008": {
      // EN: <p>Using the substitution <span class="chem">u = 1 + x^2</span> (or otherwise), find the exact value of <span class="chem">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span>.</p>
      stem: "<p>置換 <span class=\"chem\">u = 1 + x^2</span> を用いて（または他の方法で）、<span class=\"chem\">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span> の正確な値を求めなさい (find)。</p>",
      hints: [
        // EN: Let <span class="chem">u = 1 + x^2</span>, so <span class="chem">du = 2x dx</span> and <span class="chem">x^2 = u - 1</span>. Transform the limits: <span class="chem">x = 0 -> u = 1</span> and <span class="chem">x = 2 -> u = 5</span>.
        "<span class=\"chem\">u = 1 + x^2</span> とおくと <span class=\"chem\">du = 2x dx</span> かつ <span class=\"chem\">x^2 = u - 1</span> です。積分区間を <span class=\"chem\">x = 0 -> u = 1</span>、<span class=\"chem\">x = 2 -> u = 5</span> に変換します。",
        // EN: Rewrite the integral as <span class="chem">int_1^5 (u - 1) / sqrt(u) du = int_1^5 (u^{1/2} - u^{-1/2}) du</span>.
        "積分を <span class=\"chem\">int_1^5 (u - 1) / sqrt(u) du = int_1^5 (u^{1/2} - u^{-1/2}) du</span> と書き換えます。",
      ],
      // EN: <p>Let <span class="chem">u = 1 + x^2</span>, <span class="chem">du = 2x dx</span>, <span class="chem">x^2 = u - 1</span>, with limits <span class="chem">u = 1</span> to <span class="chem">u = 5</span>. Then <span class="chem">int_1^5 (u^{1/2} - u^{-1/2}) du = [(2/3)u^{3/2} - 2u^{1/2}]_1^5 = ((10/3)sqrt(5) - 2sqrt(5)) - (2/3 - 2) = (4/3)sqrt(5) + 4/3 = (4/3)(sqrt(5) + 1) ≈ 4.31</span>.</p>
      solution: "<p><span class=\"chem\">u = 1 + x^2</span>、<span class=\"chem\">du = 2x dx</span>、<span class=\"chem\">x^2 = u - 1</span> とおくと積分区間は <span class=\"chem\">u = 1</span> から <span class=\"chem\">u = 5</span> になります。したがって <span class=\"chem\">int_1^5 (u^{1/2} - u^{-1/2}) du = [(2/3)u^{3/2} - 2u^{1/2}]_1^5 = ((10/3)sqrt(5) - 2sqrt(5)) - (2/3 - 2) = (4/3)sqrt(5) + 4/3 = (4/3)(sqrt(5) + 1) ≈ 4.31</span> です。</p>",
    },

    // ── t5-3-q009 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q009": {
      // EN: <p>Find the exact value of <span class="chem">int_1^e x^2 ln(x) dx</span>. (Enter an exact expression in terms of <span class="mono">e</span>.)</p>
      stem: "<p><span class=\"chem\">int_1^e x^2 ln(x) dx</span> の正確な値を求めなさい (Find)。（<span class=\"mono\">e</span> を用いた正確な式で入力しなさい。）</p>",
      hints: [
        // EN: By LIATE, choose <span class="chem">u = ln x</span> (<span class="chem">du/dx = 1/x</span>) and <span class="chem">dv/dx = x^2</span> (<span class="chem">v = x^3 / 3</span>).
        "LIATE より <span class=\"chem\">u = ln x</span>（<span class=\"chem\">du/dx = 1/x</span>）、<span class=\"chem\">dv/dx = x^2</span>（<span class=\"chem\">v = x^3 / 3</span>）を選びます。",
        // EN: Apply integration by parts: <span class="chem">[(x^3 / 3) ln x]_1^e - int_1^e (x^2 / 3) dx = [x^3 / 3 ln x - x^3 / 9]_1^e</span>.
        "部分積分法を適用します：<span class=\"chem\">[(x^3 / 3) ln x]_1^e - int_1^e (x^2 / 3) dx = [x^3 / 3 ln x - x^3 / 9]_1^e</span>。",
      ],
      // EN: <p>Let <span class="chem">u = ln x</span> and <span class="chem">dv/dx = x^2</span>, so <span class="chem">du/dx = 1/x</span> and <span class="chem">v = x^3/3</span>. Then <span class="chem">int_1^e x^2 ln x dx = [(x^3/3)ln x]_1^e - int_1^e (x^2/3) dx = (e^3/3 - 0) - [x^3/9]_1^e = e^3/3 - (e^3 - 1)/9 = (2e^3 + 1)/9 ≈ 4.57</span>.</p>
      solution: "<p><span class=\"chem\">u = ln x</span>、<span class=\"chem\">dv/dx = x^2</span> とおくと <span class=\"chem\">du/dx = 1/x</span>、<span class=\"chem\">v = x^3/3</span> です。よって <span class=\"chem\">int_1^e x^2 ln x dx = [(x^3/3)ln x]_1^e - int_1^e (x^2/3) dx = (e^3/3 - 0) - [x^3/9]_1^e = e^3/3 - (e^3 - 1)/9 = (2e^3 + 1)/9 ≈ 4.57</span> となります。</p>",
    },

    // ── t5-3-q010 · mcq · exam · AHL · AHL 5.15 · 2 marks
    "t5-3-q010": {
      // EN: <p>By completing the square in the denominator, find <span class="chem">int 1 / (x^2 - 4x + 13) dx</span>.</p>
      stem: "<p>分母を平方完成することにより、<span class=\"chem\">int 1 / (x^2 - 4x + 13) dx</span> を求めなさい (find)。</p>",
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
        "平方完成します：<span class=\"chem\">x^2 - 4x + 13 = (x - 2)^2 - 4 + 13 = (x - 2)^2 + 3^2</span>。",
        // EN: Use the Formula Booklet standard integral <span class="chem">int 1/(u^2 + a^2) du = (1/a) arctan(u/a) + C</span> with <span class="chem">u = x - 2</span> and <span class="chem">a = 3</span>.
        "公式集の基本積分 <span class=\"chem\">int 1/(u^2 + a^2) du = (1/a) arctan(u/a) + C</span> に <span class=\"chem\">u = x - 2</span>、<span class=\"chem\">a = 3</span> を当てはめます。",
      ],
      // EN: <p>Since <span class="chem">x^2 - 4x + 13 = (x - 2)^2 + 3^2</span>, the integral is <span class="chem">int 1/((x - 2)^2 + 3^2) dx = (1/3) arctan((x - 2)/3) + C</span>.</p>
      solution: "<p><span class=\"chem\">x^2 - 4x + 13 = (x - 2)^2 + 3^2</span> なので、積分は <span class=\"chem\">int 1/((x - 2)^2 + 3^2) dx = (1/3) arctan((x - 2)/3) + C</span> となります。</p>",
      misconception: {
        // EN (option B): Don’t forget the <span class="chem">1/a = 1/3</span> coefficient in front of <span class="chem">arctan((x - 2)/3)</span>!
        "1": "<span class=\"chem\">arctan((x - 2)/3)</span> の前に係数 <span class=\"chem\">1/a = 1/3</span> を忘れないようにしましょう！",
        // EN (option C): Since <span class="chem">a^2 = 9</span>, we have <span class="chem">a = 3</span>, not <span class="chem">9</span>.
        "2": "<span class=\"chem\">a^2 = 9</span> なので、<span class=\"chem\">a = 3</span> であり <span class=\"chem\">9</span> ではありません。",
        // EN (option D): There is no square root in the denominator, so this is an <span class="chem">arctan</span> integral, not <span class="chem">arcsin</span>.
        "3": "分母に平方根がないため、<span class=\"chem\">arcsin</span> ではなく <span class=\"chem\">arctan</span> の積分になります。",
      },
    },

    // ── t5-3-q011 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q011": {
      // EN: <p>Given that <span class="chem">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span>, find the exact value of <span class="chem">int_3^4 6 / (x^2 - x - 2) dx</span>.</p>
      stem: "<p><span class=\"chem\">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span> であるとき、<span class=\"chem\">int_3^4 6 / (x^2 - x - 2) dx</span> の正確な値を求めなさい (find)。</p>",
      hints: [
        // EN: Factor <span class="chem">x^2 - x - 2 = (x - 2)(x + 1)</span>. Cover-up method gives <span class="chem">A = 6/(2 + 1) = 2</span> and <span class="chem">B = 6/(-1 - 2) = -2</span>.
        "<span class=\"chem\">x^2 - x - 2 = (x - 2)(x + 1)</span> と因数分解します。係数を求めると <span class=\"chem\">A = 6/(2 + 1) = 2</span>、<span class=\"chem\">B = 6/(-1 - 2) = -2</span> です。",
        // EN: Integrate <span class="chem">[2 ln|x - 2| - 2 ln|x + 1|]_3^4 = [2 ln|(x - 2)/(x + 1)|]_3^4</span>.
        "積分すると <span class=\"chem\">[2 ln|x - 2| - 2 ln|x + 1|]_3^4 = [2 ln|(x - 2)/(x + 1)|]_3^4</span> となります。",
      ],
      // EN: <p>Using partial fractions, <span class="chem">6/((x - 2)(x + 1)) = 2/(x - 2) - 2/(x + 1)</span>. Integrating from <span class="chem">3</span> to <span class="chem">4</span> gives <span class="chem">[2 ln((x - 2)/(x + 1))]_3^4 = 2 ln(2/5) - 2 ln(1/4) = 2 ln(8/5) ≈ 0.940</span>.</p>
      solution: "<p>部分分数分解により <span class=\"chem\">6/((x - 2)(x + 1)) = 2/(x - 2) - 2/(x + 1)</span> です。<span class=\"chem\">3</span> から <span class=\"chem\">4</span> まで積分すると <span class=\"chem\">[2 ln((x - 2)/(x + 1))]_3^4 = 2 ln(2/5) - 2 ln(1/4) = 2 ln(8/5) ≈ 0.940</span> となります。</p>",
      // EN: 2 ln(8/5) ≈ 0.940
      answerDisplay: "2 ln(8/5) ≈ 0.940",
    },

    // ── t5-3-q012 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q012": {
      // EN: <p>A spherical balloon is being inflated so that its volume increases at a constant rate of <span class="unit">100 cm3 s-1</span>. Find the rate at which its surface area <span class="chem">A = 4 pi r^2</span> is increasing when the radius is <span class="chem">r = 5</span> <span class="unit">cm</span>.</p>
      stem: "<p>球形の風船が、体積が一定の割合 <span class=\"unit\">100 cm3 s-1</span> で増加するように膨らまされている。半径が <span class=\"chem\">r = 5</span> <span class=\"unit\">cm</span> のとき、表面積 <span class=\"chem\">A = 4 pi r^2</span> が増加する速さを求めなさい (Find)。</p>",
      hints: [
        // EN: For a sphere, <span class="chem">V = (4/3) pi r^3 => dV/dr = 4 pi r^2</span>, and <span class="chem">A = 4 pi r^2 => dA/dr = 8 pi r</span>.
        "球では <span class=\"chem\">V = (4/3) pi r^3 => dV/dr = 4 pi r^2</span>、および <span class=\"chem\">A = 4 pi r^2 => dA/dr = 8 pi r</span> です。",
        // EN: By the chain rule, <span class="chem">dA/dt = (dA/dr) / (dV/dr) × (dV/dt) = (8 pi r) / (4 pi r^2) × 100 = (2/r) × 100</span>.
        "合成関数の微分法より、<span class=\"chem\">dA/dt = (dA/dr) / (dV/dr) × (dV/dt) = (8 pi r) / (4 pi r^2) × 100 = (2/r) × 100</span> となります。",
      ],
      // EN: <p>We have <span class="chem">dV/dr = 4 pi r^2</span> and <span class="chem">dA/dr = 8 pi r</span>. By the chain rule, <span class="chem">dA/dt = (dA/dr)(dr/dt) = (8 pi r) × (100 / (4 pi r^2)) = 200 / r</span>. When <span class="chem">r = 5</span> <span class="unit">cm</span>, <span class="chem">dA/dt = 200 / 5 = 40</span> <span class="unit">cm2 s-1</span>.</p>
      solution: "<p><span class=\"chem\">dV/dr = 4 pi r^2</span> かつ <span class=\"chem\">dA/dr = 8 pi r</span> です。合成関数の微分法より <span class=\"chem\">dA/dt = (dA/dr)(dr/dt) = (8 pi r) × (100 / (4 pi r^2)) = 200 / r</span> となります。<span class=\"chem\">r = 5</span> <span class=\"unit\">cm</span> のとき <span class=\"chem\">dA/dt = 200 / 5 = 40</span> <span class=\"unit\">cm2 s-1</span> です。</p>",
    },

    // ── t5-3-q013 · mcq · exam · AHL · AHL 5.17 · 2 marks
    "t5-3-q013": {
      // EN: <p>The region bounded by <span class="chem">y = cos x</span>, the <i>x</i>-axis, <span class="chem">x = 0</span>, and <span class="chem">x = pi/2</span> is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. What is the exact volume of the solid formed?</p>
      stem: "<p><span class=\"chem\">y = cos x</span>、<i>x</i> 軸、<span class=\"chem\">x = 0</span>、および <span class=\"chem\">x = pi/2</span> で囲まれた領域を、<i>x</i> 軸の周りに <span class=\"chem\">2pi</span> ラジアン回転させる。できる立体の正確な体積はいくらですか？</p>",
      options: [
        // EN: <span class="chem">pi^2 / 4</span>
        "<span class=\"chem\">pi^2 / 4</span>",
        // EN: <span class="chem">pi / 2</span>
        "<span class=\"chem\">pi / 2</span>",
        // EN: <span class="chem">pi^2 / 2</span>
        "<span class=\"chem\">pi^2 / 2</span>",
        // EN: <span class="chem">pi</span>
        "<span class=\"chem\">pi</span>",
      ],
      hints: [
        // EN: Set up <span class="chem">V = pi int_0^{pi/2} cos^2(x) dx</span>.
        "<span class=\"chem\">V = pi int_0^{pi/2} cos^2(x) dx</span> と立式します。",
        // EN: Use the double-angle identity <span class="chem">cos^2 x = (1 + cos(2x))/2</span>.
        "2 倍角の公式 <span class=\"chem\">cos^2 x = (1 + cos(2x))/2</span> を使います。",
      ],
      // EN: <p><span class="chem">V = pi int_0^{pi/2} cos^2 x dx = (pi/2) int_0^{pi/2} (1 + cos 2x) dx = (pi/2) [x + (1/2)sin 2x]_0^{pi/2} = (pi/2)(pi/2 + 0) = pi^2 / 4</span>.</p>
      solution: "<p><span class=\"chem\">V = pi int_0^{pi/2} cos^2 x dx = (pi/2) int_0^{pi/2} (1 + cos 2x) dx = (pi/2) [x + (1/2)sin 2x]_0^{pi/2} = (pi/2)(pi/2 + 0) = pi^2 / 4</span> となります。</p>",
      misconception: {
        // EN (option B): You probably dropped the outer factor <span class="chem">pi</span> and also lost the <span class="chem">1/2</span> in <span class="chem">cos^2 x = (1 + cos 2x)/2</span>: that gives <span class="chem">int_0^{pi/2} (1 + cos 2x) dx = pi/2</span>. In fact <span class="chem">int_0^{pi/2} cos^2 x dx = pi/4</span>, so <span class="chem">V = pi(pi/4) = pi^2/4</span>.
        "1": "外側の因子 <span class=\"chem\">pi</span> を落とし、さらに <span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span> の <span class=\"chem\">1/2</span> も落とした可能性があります。そうすると <span class=\"chem\">int_0^{pi/2} (1 + cos 2x) dx = pi/2</span> になります。実際には <span class=\"chem\">int_0^{pi/2} cos^2 x dx = pi/4</span> なので、<span class=\"chem\">V = pi(pi/4) = pi^2/4</span> です。",
        // EN (option C): Remember <span class="chem">cos^2 x = (1 + cos 2x)/2</span> has a factor of <span class="chem">1/2</span>, so <span class="chem">int_0^{pi/2} cos^2 x dx = pi/4</span>, not <span class="chem">pi/2</span>.
        "2": "<span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span> には <span class=\"chem\">1/2</span> の係数があるため、<span class=\"chem\">int_0^{pi/2} cos^2 x dx = pi/4</span> であり <span class=\"chem\">pi/2</span> ではありません。",
        // EN (option D): That is <span class="chem">pi int_0^{pi/2} cos x dx = pi</span>, which fails to square the radius <i>y</i>.
        "3": "それは <span class=\"chem\">pi int_0^{pi/2} cos x dx = pi</span> であり、半径 <i>y</i> を 2 乗し忘れています。",
      },
    },

    // ── t5-3-q014 · short · exam · AHL · AHL 5.14 · 6 marks
    "t5-3-q014": {
      // EN: <p>A curve is given by the implicit equation <span class="chem">x^2 + xy + y^2 = 12</span>.</p><p>(a) Show that <span class="chem">dy/dx = -(2x + y) / (x + 2y)</span>. <strong>[3 marks]</strong></p><p>(b) Hence find the coordinates of the two stationary points on the curve. <strong>[3 marks]</strong></p>
      stem: "<p>曲線が陰関数の方程式 <span class=\"chem\">x^2 + xy + y^2 = 12</span> で与えられている。</p><p>(a) <span class=\"chem\">dy/dx = -(2x + y) / (x + 2y)</span> であることを示しなさい (Show that)。 <strong>[3 marks]</strong></p><p>(b) これを用いて (Hence)、曲線上の 2 つの停留点の座標を求めなさい (find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: In part (a), remember to apply the product rule to <span class="chem">xy</span> and the chain rule to <span class="chem">y^2</span>.
        "(a) では、<span class=\"chem\">xy</span> に積の微分法、<span class=\"chem\">y^2</span> に合成関数の微分法を適用することを忘れないでください。",
        // EN: In part (b), a stationary point has <span class="chem">dy/dx = 0</span>, so set the numerator <span class="chem">2x + y = 0</span> and substitute <span class="chem">y = -2x</span> into the original curve.
        "(b) では、停留点は <span class=\"chem\">dy/dx = 0</span> を満たすので、分子 <span class=\"chem\">2x + y = 0</span> とおき、<span class=\"chem\">y = -2x</span> を元の曲線に代入します。",
      ],
      // EN: <p>(a) Differentiating both sides with respect to <i>x</i>: <span class="chem">2x + (y + x dy/dx) + 2y dy/dx = 0</span>. Grouping <span class="chem">dy/dx</span> terms gives <span class="chem">(x + 2y) dy/dx = -(2x + y) => dy/dx = -(2x + y)/(x + 2y)</span>.</p><p>(b) Stationary points occur where <span class="chem">dy/dx = 0 => 2x + y = 0 => y = -2x</span>. Substituting into the curve: <span class="chem">x^2 + x(-2x) + (-2x)^2 = 12 => 3x^2 = 12 => x = +-2</span>. Thus the stationary points are <span class="chem">(2, -4)</span> and <span class="chem">(-2, 4)</span>.</p>
      answer: "<p>(a) 両辺を <i>x</i> で微分すると <span class=\"chem\">2x + (y + x dy/dx) + 2y dy/dx = 0</span>。<span class=\"chem\">dy/dx</span> の項をまとめると <span class=\"chem\">(x + 2y) dy/dx = -(2x + y) => dy/dx = -(2x + y)/(x + 2y)</span>。</p><p>(b) 停留点は <span class=\"chem\">dy/dx = 0 => 2x + y = 0 => y = -2x</span> のとき。曲線に代入すると <span class=\"chem\">x^2 + x(-2x) + (-2x)^2 = 12 => 3x^2 = 12 => x = +-2</span>。よって停留点は <span class=\"chem\">(2, -4)</span> と <span class=\"chem\">(-2, 4)</span>。</p>",
      markscheme: [
        // EN: M1: applies product rule to <span class="chem">xy</span> to get <span class="chem">y + x(dy/dx)</span> and chain rule to <span class="chem">y^2</span> to get <span class="chem">2y(dy/dx)</span>.
        "M1：<span class=\"chem\">xy</span> に積の微分法を適用して <span class=\"chem\">y + x(dy/dx)</span> を得て、<span class=\"chem\">y^2</span> に合成関数の微分法を適用して <span class=\"chem\">2y(dy/dx)</span> を得ている。",
        // EN: A1: correct differentiated equation <span class="chem">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>.
        "A1：正しい微分方程式 <span class=\"chem\">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span> を得ている。",
        // EN: A1: groups the <span class="chem">dy/dx</span> terms: <span class="chem">(x + 2y) dy/dx = -(2x + y)</span>, leading to the given answer <span class="chem">dy/dx = -(2x + y)/(x + 2y)</span> AG (no mark for the given line).
        "A1：<span class=\"chem\">dy/dx</span> の項をまとめて <span class=\"chem\">(x + 2y) dy/dx = -(2x + y)</span> とし、与えられた答え <span class=\"chem\">dy/dx = -(2x + y)/(x + 2y)</span> に至っている AG（与えられた式そのものには点を与えない）。",
        // EN: M1: sets numerator <span class="chem">2x + y = 0</span> (<span class="chem">y = -2x</span>) for stationary points.
        "M1：停留点のため分子 <span class=\"chem\">2x + y = 0</span>（<span class=\"chem\">y = -2x</span>）とおいている。",
        // EN: M1: substitutes <span class="chem">y = -2x</span> into <span class=\"chem">x^2 + xy + y^2 = 12</span> to obtain <span class="chem">3x^2 = 12</span>.
        "M1：<span class=\"chem\">y = -2x</span> を <span class=\"chem\">x^2 + xy + y^2 = 12</span> に代入して <span class=\"chem\">3x^2 = 12</span> を得ている。",
        // EN: A1: both coordinate pairs <span class="chem">(2, -4)</span> and <span class=\"chem">(-2, 4)</span> correct.
        "A1：2 つの座標の組 <span class=\"chem\">(2, -4)</span> と <span class=\"chem\">(-2, 4)</span> が両方正しい。",
      ],
    },

    // ── t5-3-q015 · numeric · challenge · AHL · AHL 5.16 · 6 marks
    "t5-3-q015": {
      // EN: <p>By integrating by parts twice, find the exact value of the cyclic integral <span class="chem">I = int_0^{pi/2} e^{2x} sin(x) dx</span>. (You can type an exact expression in terms of <span class="mono">e</span> and <span class="mono">pi</span> such as <span class="mono">(e^pi-1)/2</span>.)</p>
      stem: "<p>部分積分法を 2 回用いて、循環型の積分 <span class=\"chem\">I = int_0^{pi/2} e^{2x} sin(x) dx</span> の正確な値を求めなさい (find)。（<span class=\"mono\">(e^pi-1)/2</span> のように <span class=\"mono\">e</span> と <span class=\"mono\">pi</span> を用いた正確な式で入力できます。）</p>",
      hints: [
        // EN: Decode: "cyclic" means that integrating by parts twice brings back the original integral <span class="chem">I</span>. Keep the same choice <span class="chem">dv/dx = e^{2x}</span> both times, then solve the resulting linear equation for <span class="chem">I</span>.
        "解読：「循環型」とは、部分積分を 2 回行うと元の積分 <span class=\"chem\">I</span> が再び現れることを意味します。2 回とも同じ選び方 <span class=\"chem\">dv/dx = e^{2x}</span> を用い、得られる <span class=\"chem\">I</span> の一次方程式を解きます。",
        // EN: First parts (<span class="chem">u = sin x, dv/dx = e^{2x}</span>): <span class="chem">I = [(1/2)e^{2x} sin x]_0^{pi/2} - (1/2) int_0^{pi/2} e^{2x} cos x dx = (1/2)e^{pi} - (1/2) int_0^{pi/2} e^{2x} cos x dx</span>.
        "1 回目の部分積分（<span class=\"chem\">u = sin x, dv/dx = e^{2x}</span>）：<span class=\"chem\">I = [(1/2)e^{2x} sin x]_0^{pi/2} - (1/2) int_0^{pi/2} e^{2x} cos x dx = (1/2)e^{pi} - (1/2) int_0^{pi/2} e^{2x} cos x dx</span>。",
        // EN: Second parts on <span class="chem">int_0^{pi/2} e^{2x} cos x dx</span> (<span class="chem">u = cos x, dv/dx = e^{2x}</span>) gives <span class="chem">[(1/2)e^{2x} cos x]_0^{pi/2} + (1/2)I = -1/2 + (1/2)I</span>. Substitute back and solve for <i>I</i>!
        "<span class=\"chem\">int_0^{pi/2} e^{2x} cos x dx</span> に対する 2 回目の部分積分（<span class=\"chem\">u = cos x, dv/dx = e^{2x}</span>）で <span class=\"chem\">[(1/2)e^{2x} cos x]_0^{pi/2} + (1/2)I = -1/2 + (1/2)I</span> を得ます。戻して <i>I</i> について解きましょう！",
      ],
      // EN: <p>Integrating by parts twice gives <span class="chem">I = (1/2)e^{pi} - (1/2)(-1/2 + (1/2)I) = (1/2)e^{pi} + 1/4 - (1/4)I</span>. Thus <span class="chem">(5/4)I = (2e^{pi} + 1)/4 => I = (2e^{pi} + 1)/5 ≈ 9.46</span>.</p>
      solution: "<p>2 回部分積分すると <span class=\"chem\">I = (1/2)e^{pi} - (1/2)(-1/2 + (1/2)I) = (1/2)e^{pi} + 1/4 - (1/4)I</span> となります。よって <span class=\"chem\">(5/4)I = (2e^{pi} + 1)/4 => I = (2e^{pi} + 1)/5 ≈ 9.46</span> です。</p>",
    },

    // ── t5-3-q016 · numeric · challenge · AHL · AHL 5.13 · 6 marks
    "t5-3-q016": {
      // EN: <p>Given that the limit <span class="chem">lim_{x->0} (sin(2x) + k x cos(x)) / x^3</span> exists and is finite, find the exact value of that limit.</p>
      stem: "<p>極限 <span class=\"chem\">lim_{x->0} (sin(2x) + k x cos(x)) / x^3</span> が存在し有限の値となるとき、その極限の正確な値を求めなさい (find)。</p>",
      hints: [
        // EN: Decode: <span class="chem">k</span> is not given, but "the limit exists and is finite" fixes it. The form is <span class="chem">0/0</span>; if after one application of L’Hôpital’s rule the denominator still tends to 0, the numerator must tend to 0 as well.
        "解読：<span class=\"chem\">k</span> は与えられていませんが、「極限が存在し有限である」という条件で決まります。形は <span class=\"chem\">0/0</span> です。ロピタルの定理を 1 回適用した後も分母が 0 に近づくなら、分子も 0 に近づかなければなりません。",
        // EN: Apply L’Hôpital’s rule once: <span class="chem">lim_{x->0} (2 cos(2x) + k cos x - k x sin x) / (3x^2)</span>. Since the denominator goes to 0, the numerator at <span class="chem">x = 0</span> must also be 0: <span class="chem">2 + k = 0 => k = -2</span>.
        "ロピタルの定理を 1 回適用すると <span class=\"chem\">lim_{x->0} (2 cos(2x) + k cos x - k x sin x) / (3x^2)</span> です。分母が 0 に近づくため、<span class=\"chem\">x = 0</span> での分子も 0 にならなければなりません：<span class=\"chem\">2 + k = 0 => k = -2</span>。",
        // EN: Substitute <span class="chem">k = -2</span> and apply L’Hôpital’s rule twice more (or use Maclaurin expansions) to evaluate <span class="chem">lim_{x->0} (sin(2x) - 2x cos x) / x^3</span>.
        "<span class=\"chem\">k = -2</span> を代入し、ロピタルの定理をさらに 2 回適用して（またはマクローリン展開を用いて）<span class=\"chem\">lim_{x->0} (sin(2x) - 2x cos x) / x^3</span> を計算します。",
      ],
      // EN: <p>After one step of L’Hôpital’s rule, the numerator at <span class="chem">x = 0</span> is <span class="chem">2 + k</span>. For the limit to be finite, <span class="chem">2 + k = 0 => k = -2</span>. With <span class="chem">k = -2</span>, differentiating top and bottom twice more (or expanding <span class="chem">(2x - 8x^3/6) - 2x(1 - x^2/2) = -x^3/3</span>) gives <span class="chem">-1/3 ≈ -0.333</span>.</p>
      solution: "<p>ロピタルの定理を 1 回使った後の <span class=\"chem\">x = 0</span> における分子は <span class=\"chem\">2 + k</span> です。極限が有限となるためには <span class=\"chem\">2 + k = 0 => k = -2</span> が必要です。<span class=\"chem\">k = -2</span> として分母・分子をさらに 2 回微分する（または <span class=\"chem\">(2x - 8x^3/6) - 2x(1 - x^2/2) = -x^3/3</span> と展開する）と、<span class=\"chem\">-1/3 ≈ -0.333</span> が得られます。</p>",
    },

    // ── t5-3-q017 · short · challenge · AHL · AHL 5.16–5.17 · 7 marks
    "t5-3-q017": {
      // EN: <p>For each non-negative integer <i>n</i>, let <span class="chem">I_n = int_1^e x (ln x)^n dx</span>.</p><p>(a) Find the exact value of <span class="chem">I_0</span> and <span class="chem">I_1</span>. <strong>[3 marks]</strong></p><p>(b) Using integration by parts, show that <span class="chem">I_n = e^2 / 2 - (n / 2) I_{n-1}</span> for <span class="chem">n &gt;= 1</span>, and hence find the exact volume generated when the curve <span class="chem">y = sqrt(x) ln x</span> between <span class="chem">x = 1</span> and <span class="chem">x = e</span> is rotated <span class="chem">2pi</span> radians about the <i>x</i>-axis. <strong>[4 marks]</strong></p>
      stem: "<p>各非負整数 <i>n</i> に対して、<span class=\"chem\">I_n = int_1^e x (ln x)^n dx</span> とおく。</p><p>(a) <span class=\"chem\">I_0</span> と <span class=\"chem\">I_1</span> の正確な値を求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(b) 部分積分法を用いて、<span class=\"chem\">n &gt;= 1</span> のとき <span class=\"chem\">I_n = e^2 / 2 - (n / 2) I_{n-1}</span> であることを示し (show that)、これを用いて (hence) <span class=\"chem\">x = 1</span> から <span class=\"chem\">x = e</span> までの曲線 <span class=\"chem\">y = sqrt(x) ln x</span> を <i>x</i> 軸の周りに <span class=\"chem\">2pi</span> ラジアン回転させてできる立体の正確な体積を求めなさい (find)。 <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: <span class="chem">I_n</span> defines a family of integrals linked by a reduction formula. The volume in (b) is a member of the family in disguise, because <span class="chem">y^2 = x (ln x)^2</span>.
        "解読：<span class=\"chem\">I_n</span> は漸化式で結ばれた積分の族を定めます。<span class=\"chem\">y^2 = x (ln x)^2</span> なので、(b) の体積はこの族の 1 つが形を変えたものです。",
        // EN: For part (b), choose <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> so that <span class="chem">v = x^2 / 2</span> cancels the <span class="chem">1/x</span> in <span class="chem">du/dx</span>.
        "(b) では <span class=\"chem\">u = (ln x)^n</span>、<span class=\"chem\">dv/dx = x</span> と選ぶと、<span class=\"chem\">v = x^2 / 2</span> が <span class=\"chem\">du/dx</span> の <span class=\"chem\">1/x</span> と約分できます。",
        // EN: Notice that rotating <span class="chem">y = sqrt(x) ln x</span> about the <i>x</i>-axis gives <span class="chem">V = pi int_1^e x (ln x)^2 dx = pi I_2</span>.
        "<span class=\"chem\">y = sqrt(x) ln x</span> を <i>x</i> 軸の周りに回転させると <span class=\"chem\">V = pi int_1^e x (ln x)^2 dx = pi I_2</span> になることに注目しましょう。",
      ],
      // EN: <p>(a) <span class="chem">I_0 = int_1^e x dx = [x^2/2]_1^e = (e^2 - 1)/2</span>. Using parts on <span class="chem">I_1</span> (or the reduction formula with <span class="chem">n = 1</span>): <span class="chem">I_1 = e^2/2 - (1/2)((e^2 - 1)/2) = (e^2 + 1)/4</span>.</p><p>(b) Let <span class="chem">u = (ln x)^n => du/dx = n(ln x)^{n-1}/x</span> and <span class="chem">dv/dx = x => v = x^2/2</span>. Then <span class="chem">I_n = [(x^2/2)(ln x)^n]_1^e - int_1^e (x^2/2)(n(ln x)^{n-1}/x) dx = e^2/2 - (n/2) I_{n-1}</span>. The volume is <span class="chem">V = pi int_1^e x(ln x)^2 dx = pi I_2 = pi(e^2/2 - I_1) = pi(e^2/2 - (e^2 + 1)/4) = pi(e^2 - 1)/4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">I_0 = int_1^e x dx = [x^2/2]_1^e = (e^2 - 1)/2</span>。<span class=\"chem\">I_1</span> に部分積分を用いる（または <span class=\"chem\">n = 1</span> の漸化式を用いる）と：<span class=\"chem\">I_1 = e^2/2 - (1/2)((e^2 - 1)/2) = (e^2 + 1)/4</span>。</p><p>(b) <span class=\"chem\">u = (ln x)^n => du/dx = n(ln x)^{n-1}/x</span>、<span class=\"chem\">dv/dx = x => v = x^2/2</span> とおくと、<span class=\"chem\">I_n = [(x^2/2)(ln x)^n]_1^e - int_1^e (x^2/2)(n(ln x)^{n-1}/x) dx = e^2/2 - (n/2) I_{n-1}</span>。体積は <span class=\"chem\">V = pi int_1^e x(ln x)^2 dx = pi I_2 = pi(e^2/2 - I_1) = pi(e^2/2 - (e^2 + 1)/4) = pi(e^2 - 1)/4</span>。</p>",
      markscheme: [
        // EN: A1: correct value <span class="chem">I_0 = (e^2 - 1)/2</span>.
        "A1：正しい値 <span class=\"chem\">I_0 = (e^2 - 1)/2</span> を得ている。",
        // EN: M1: applies integration by parts (or the reduction formula with <span class="chem">n = 1</span>) to <span class="chem">I_1</span>.
        "M1：<span class=\"chem\">I_1</span> に部分積分法（または <span class=\"chem\">n = 1</span> とした漸化式）を適用している。",
        // EN: A1: <span class="chem">I_1 = (e^2 + 1)/4</span>.
        "A1：<span class=\"chem\">I_1 = (e^2 + 1)/4</span>。",
        // EN: M1: chooses <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> in <span class="chem">I_n</span>.
        "M1：<span class=\"chem\">I_n</span> において <span class=\"chem\">u = (ln x)^n</span>、<span class=\"chem\">dv/dx = x</span> と選んでいる。",
        // EN: A1: correct boundary term <span class="chem">[(x^2/2)(ln x)^n]_1^e = e^2/2</span> and remaining integral <span class="chem">(n/2) int_1^e x (ln x)^{n-1} dx</span>, leading to the given result <span class="chem">I_n = e^2/2 - (n/2) I_{n-1}</span> AG (no mark for the given line).
        "A1：境界項 <span class=\"chem\">[(x^2/2)(ln x)^n]_1^e = e^2/2</span> と残りの積分 <span class=\"chem\">(n/2) int_1^e x (ln x)^{n-1} dx</span> が正しく、与えられた結果 <span class=\"chem\">I_n = e^2/2 - (n/2) I_{n-1}</span> に至っている AG（与えられた式そのものには点を与えない）。",
        // EN: M1: identifies volume <span class="chem">V = pi int_1^e y^2 dx = pi I_2</span>.
        "M1：体積が <span class=\"chem\">V = pi int_1^e y^2 dx = pi I_2</span> であることを特定している。",
        // EN: A1: substitutes <span class="chem">n = 2</span> to obtain <span class="chem">V = pi(e^2 - 1)/4</span>.
        "A1：<span class=\"chem\">n = 2</span> を代入して <span class=\"chem\">V = pi(e^2 - 1)/4</span> を得ている。",
      ],
    },

    // ── t5-3-q018 · numeric · foundation · AHL · AHL 5.15 · 3 marks
    "t5-3-q018": {
      // EN: <p>Find the exact value of <span class="chem">int_0^2 3^x dx</span>. (Enter an exact expression such as <span class="mono">5/ln(2)</span>.)</p>
      stem: "<p><span class=\"chem\">int_0^2 3^x dx</span> の正確な値を求めなさい (Find)。（<span class=\"mono\">5/ln(2)</span> のような正確な式で入力してください。）</p>",
      hints: [
        // EN: Use the Formula Booklet result <span class="chem">int a^x dx = a^x / ln a + C</span>.
        "公式集の結果 <span class=\"chem\">int a^x dx = a^x / ln a + C</span> を使います。",
        // EN: Evaluate <span class="chem">[3^x / ln 3]_0^2</span>.
        "<span class=\"chem\">[3^x / ln 3]_0^2</span> を計算します。",
      ],
      // EN: <p><span class="chem">int_0^2 3^x dx = [3^x / ln 3]_0^2 = (9 - 1)/ln 3 = 8/ln 3 ≈ 7.28</span>.</p>
      solution: "<p><span class=\"chem\">int_0^2 3^x dx = [3^x / ln 3]_0^2 = (9 - 1)/ln 3 = 8/ln 3 ≈ 7.28</span> です。</p>",
      // EN: 8 / ln 3 ≈ 7.28
      answerDisplay: "8 / ln 3 ≈ 7.28",
    },
    // ── t5-3-q019 · mcq · foundation · AHL · AHL 5.15 · 2 marks
    "t5-3-q019": {
      // EN: <p>Find <span class="chem">d/dx (arctan(x/2))</span>.</p>
      stem: "<p><span class=\"chem\">d/dx (arctan(x/2))</span> を求めなさい (Find)。</p>",
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
        "<span class=\"chem\">u = x/2</span> として <span class=\"chem\">d/dx arctan u = (1/(1 + u^2)) (du/dx)</span> を使います。",
      ],
      // EN: <p><span class="chem">d/dx arctan(x/2) = (1/2) × 1/(1 + x^2/4) = (1/2) × 4/(4 + x^2) = 2/(4 + x^2)</span>.</p>
      solution: "<p><span class=\"chem\">d/dx arctan(x/2) = (1/2) × 1/(1 + x^2/4) = (1/2) × 4/(4 + x^2) = 2/(4 + x^2)</span> です。</p>",
      misconception: {
        // EN (option B): That is <span class="chem">1/(1 + (x/2)^2) = 4/(4 + x^2)</span>: you forgot to multiply by the inner derivative <span class="chem">1/2</span>.
        "1": "それは <span class=\"chem\">1/(1 + (x/2)^2) = 4/(4 + x^2)</span> です。内側の導関数 <span class=\"chem\">1/2</span> を掛け忘れています。",
        // EN (option C): That is the derivative of <span class="chem">arcsin(x/2)</span>, not <span class="chem">arctan(x/2)</span>.
        "2": "それは <span class=\"chem\">arctan(x/2)</span> ではなく <span class=\"chem\">arcsin(x/2)</span> の導関数です。",
        // EN (option D): You multiplied by <span class="chem">2</span> instead of by the inner derivative <span class="chem">1/2</span>.
        "3": "内側の導関数 <span class=\"chem\">1/2</span> ではなく <span class=\"chem\">2</span> を掛けています。",
      },
    },
    // ── t5-3-q020 · numeric · exam · AHL · AHL 5.17 · 4 marks
    "t5-3-q020": {
      // EN: <p>Find the exact area of the region enclosed by the curve <span class="chem">x = y^2 - 4</span> and the <i>y</i>-axis.</p>
      stem: "<p>曲線 <span class=\"chem\">x = y^2 - 4</span> と <i>y</i> 軸で囲まれた領域の面積の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: The curve meets the <i>y</i>-axis where <span class="chem">x = 0</span>, that is at <span class="chem">y = -2</span> and <span class="chem">y = 2</span>.
        "曲線は <span class=\"chem\">x = 0</span> のとき、すなわち <span class=\"chem\">y = -2</span> と <span class=\"chem\">y = 2</span> で <i>y</i> 軸と交わります。",
        // EN: Between these, <span class="chem">x = y^2 - 4 &lt;= 0</span>, so the area is <span class="chem">int_{-2}^2 (4 - y^2) dy</span>.
        "その間では <span class=\"chem\">x = y^2 - 4 &lt;= 0</span> なので、面積は <span class=\"chem\">int_{-2}^2 (4 - y^2) dy</span> です。",
      ],
      // EN: <p>The curve crosses the <i>y</i>-axis at <span class="chem">y = +-2</span> and lies to the left of it in between, so <span class="chem">A = int_{-2}^2 (4 - y^2) dy = [4y - y^3/3]_{-2}^2 = (8 - 8/3) - (-8 + 8/3) = 32/3 ≈ 10.7</span>.</p>
      solution: "<p>曲線は <span class=\"chem\">y = +-2</span> で <i>y</i> 軸と交わり、その間ではその左側にあるので、<span class=\"chem\">A = int_{-2}^2 (4 - y^2) dy = [4y - y^3/3]_{-2}^2 = (8 - 8/3) - (-8 + 8/3) = 32/3 ≈ 10.7</span> です。</p>",
      // EN: 32/3 ≈ 10.7
      answerDisplay: "32/3 ≈ 10.7",
    },
    // ── t5-3-q021 · numeric · exam · AHL · AHL 5.17 · 5 marks
    "t5-3-q021": {
      // EN: <p>The region bounded by the curve <span class="chem">y = ln x</span>, the <i>x</i>-axis, the <i>y</i>-axis and the line <span class="chem">y = 1</span> is rotated through <span class="chem">2pi</span> radians about the <strong><i>y</i>-axis</strong>. Find the exact volume of the solid formed. (Enter an exact expression such as <span class="mono">pi*(e^3-1)/3</span>.)</p>
      stem: "<p>曲線 <span class=\"chem\">y = ln x</span>、<i>x</i> 軸、<i>y</i> 軸、直線 <span class=\"chem\">y = 1</span> で囲まれた領域を <strong><i>y</i> 軸</strong>の周りに <span class=\"chem\">2pi</span> ラジアン回転させる。できる立体の正確な体積を求めなさい (Find)。（<span class=\"mono\">pi*(e^3-1)/3</span> のような正確な式で入力してください。）</p>",
      hints: [
        // EN: Rearrange <span class="chem">y = ln x</span> as <span class="chem">x = e^y</span>, so <span class="chem">x^2 = e^{2y}</span>.
        "<span class=\"chem\">y = ln x</span> を <span class=\"chem\">x = e^y</span> と変形すると <span class=\"chem\">x^2 = e^{2y}</span> です。",
        // EN: Use <span class="chem">V = pi int_0^1 x^2 dy = pi int_0^1 e^{2y} dy</span>.
        "<span class=\"chem\">V = pi int_0^1 x^2 dy = pi int_0^1 e^{2y} dy</span> を使います。",
      ],
      // EN: <p><span class="chem">x = e^y</span>, so <span class="chem">V = pi int_0^1 e^{2y} dy = pi [e^{2y}/2]_0^1 = pi(e^2 - 1)/2 ≈ 10.0</span>.</p>
      solution: "<p><span class=\"chem\">x = e^y</span> なので、<span class=\"chem\">V = pi int_0^1 e^{2y} dy = pi [e^{2y}/2]_0^1 = pi(e^2 - 1)/2 ≈ 10.0</span> です。</p>",
      // EN: π(e² − 1)/2 ≈ 10.0
      answerDisplay: "π(e² − 1)/2 ≈ 10.0",
    },
    // ── t5-3-q022 · numeric · exam · AHL · AHL 5.12 · 5 marks
    "t5-3-q022": {
      // EN: <p>The function <i>f</i> is defined by <span class="chem">f(x) = a x^3 + 2</span> for <span class="chem">x &lt;= 1</span> and <span class="chem">f(x) = b x - 1</span> for <span class="chem">x &gt; 1</span>, where <i>a</i> and <i>b</i> are constants. Given that <i>f</i> is continuous and differentiable at <span class="chem">x = 1</span>, find the value of <i>b</i>.</p>
      stem: "<p>関数 <i>f</i> は <span class=\"chem\">x &lt;= 1</span> のとき <span class=\"chem\">f(x) = a x^3 + 2</span>、<span class=\"chem\">x &gt; 1</span> のとき <span class=\"chem\">f(x) = b x - 1</span> で定義される（<i>a</i>、<i>b</i> は定数）。<i>f</i> が <span class=\"chem\">x = 1</span> で連続かつ微分可能であるとき、<i>b</i> の値を求めなさい (find)。</p>",
      hints: [
        // EN: Continuous at <span class="chem">x = 1</span>: the two pieces give the same value, <span class="chem">a + 2 = b - 1</span>.
        "<span class=\"chem\">x = 1</span> で連続：2 つの式の値が等しく、<span class=\"chem\">a + 2 = b - 1</span> です。",
        // EN: Differentiable at <span class="chem">x = 1</span>: the two derivatives agree, <span class="chem">3a = b</span>.
        "<span class=\"chem\">x = 1</span> で微分可能：2 つの導関数の値が等しく、<span class=\"chem\">3a = b</span> です。",
      ],
      // EN: <p>Continuity: <span class="chem">a + 2 = b - 1 => b = a + 3</span>. Differentiability: <span class="chem">3a(1)^2 = b => b = 3a</span>. So <span class="chem">3a = a + 3 => a = 3/2</span> and <span class="chem">b = 9/2 = 4.5</span>.</p>
      solution: "<p>連続性：<span class=\"chem\">a + 2 = b - 1 => b = a + 3</span>。微分可能性：<span class=\"chem\">3a(1)^2 = b => b = 3a</span>。よって <span class=\"chem\">3a = a + 3 => a = 3/2</span>、<span class=\"chem\">b = 9/2 = 4.5</span> です。</p>",
      // EN: 9/2 = 4.5
      answerDisplay: "9/2 = 4.5",
    },
    // ── t5-3-q023 · mcq · exam · AHL · AHL 5.13 · 2 marks
    "t5-3-q023": {
      // EN: <p>Find <span class="chem">lim_{x->infty} x^2 / e^x</span>.</p>
      stem: "<p><span class=\"chem\">lim_{x->infty} x^2 / e^x</span> を求めなさい (Find)。</p>",
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
        "この極限は <span class=\"chem\">infty/infty</span> の形なので、ロピタルの定理が使えます。2 回必要です。",
      ],
      // EN: <p><span class="chem">lim_{x->infty} x^2/e^x = lim_{x->infty} 2x/e^x = lim_{x->infty} 2/e^x = 0</span> (L’Hôpital’s rule twice, each time of the form <span class="chem">infty/infty</span>).</p>
      solution: "<p><span class=\"chem\">lim_{x->infty} x^2/e^x = lim_{x->infty} 2x/e^x = lim_{x->infty} 2/e^x = 0</span>（ロピタルの定理を 2 回。どちらも <span class=\"chem\">infty/infty</span> の形）。</p>",
      misconception: {
        // EN (option B): A limit of <span class="chem">1</span> would need <span class="chem">x^2</span> and <span class="chem">e^x</span> to grow at the same rate, but <span class="chem">e^x</span> grows much faster: two applications of L’Hôpital’s rule give <span class="chem">lim_{x->infty} 2/e^x = 0</span>.
        "1": "極限が <span class=\"chem\">1</span> になるのは <span class=\"chem\">x^2</span> と <span class=\"chem\">e^x</span> が同じ速さで増加する場合ですが、<span class=\"chem\">e^x</span> の方がはるかに速く増加します。ロピタルの定理を 2 回使うと <span class=\"chem\">lim_{x->infty} 2/e^x = 0</span> となります。",
        // EN (option C): You stopped at <span class="chem">2/e^x</span> and treated <span class="chem">e^x</span> as <span class="chem">1</span>. As <span class="chem">x -> infty</span>, <span class="chem">2/e^x -> 0</span>.
        "2": "<span class=\"chem\">2/e^x</span> で止めて <span class=\"chem\">e^x</span> を <span class=\"chem\">1</span> としています。<span class=\"chem\">x -> infty</span> のとき <span class=\"chem\">2/e^x -> 0</span> です。",
        // EN (option D): Both <span class="chem">x^2</span> and <span class="chem">e^x</span> tend to infinity (<span class="chem">infty/infty</span>), but <span class="chem">e^x</span> grows much faster. Apply L’Hôpital’s rule twice.
        "3": "<span class=\"chem\">x^2</span> も <span class=\"chem\">e^x</span> も無限大に発散します（<span class=\"chem\">infty/infty</span>）が、<span class=\"chem\">e^x</span> の方がはるかに速く増加します。ロピタルの定理を 2 回使いましょう。",
      },
    },
  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ja', 't5-3.q', {
  questions: {

    // ── t5-3-q024 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q024": {
      // EN: <p>A hemispherical bowl has inner radius <span class="unit">2 m</span>. When the water in the bowl has depth <i>h</i> metres, the volume of water is <span class="chem">V = (pi/3) h^2 (6 - h)</span> <span class="unit">m3</span>. Water is poured in at a constant rate of <span class="unit">0.25 m3 min-1</span>.</p><p>Find the rate at which the depth of the water is increasing at the instant when the bowl contains <span class="unit">5 m3</span> of water.</p>
      stem: "<p>半球形の器の内側の半径は <span class=\"unit\">2 m</span> です。器の水の深さが <i>h</i> メートルのとき、水の体積は <span class=\"chem\">V = (pi/3) h^2 (6 - h)</span> <span class=\"unit\">m3</span> です。水は <span class=\"unit\">0.25 m3 min-1</span> の一定の割合で注がれています。</p><p>器に <span class=\"unit\">5 m3</span> の水が入っている瞬間に、水の深さが増加する速さを求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is related rates. You know <span class="chem">dV/dt</span> and want <span class="chem">dh/dt</span>, but the moment is described by a volume, not a depth, so you must first find <i>h</i>.
        "解読：これは関連変化率の問題です。<span class=\"chem\">dV/dt</span> がわかっていて <span class=\"chem\">dh/dt</span> を求めたいのですが、その瞬間は深さではなく体積で表されているので、まず <i>h</i> を求める必要があります。",
        // EN: Solve <span class="chem">(pi/3) h^2 (6 - h) = 5</span> on your GDC for <span class="chem">0 &lt; h &lt; 2</span>.
        "GDC で <span class=\"chem\">0 &lt; h &lt; 2</span> の範囲で <span class=\"chem\">(pi/3) h^2 (6 - h) = 5</span> を解きます。",
        // EN: Expand <span class="chem">V = (pi/3)(6h^2 - h^3)</span>, so <span class="chem">dV/dh = pi(4h - h^2)</span>. Then <span class="chem">dh/dt = (dV/dt) / (dV/dh)</span>.
        "<span class=\"chem\">V = (pi/3)(6h^2 - h^3)</span> と展開すると <span class=\"chem\">dV/dh = pi(4h - h^2)</span> です。そして <span class=\"chem\">dh/dt = (dV/dt) / (dV/dh)</span> です。",
      ],
      // EN: <p>Decode: a related-rates question in which the instant is given by the volume. GDC: <span class="chem">(pi/3)h^2(6 - h) = 5 => h = 0.97475…</span> (the only root with <span class="chem">0 &lt; h &lt; 2</span>). Then <span class="chem">dV/dh = pi(4h - h^2) = 9.2641…</span>, so <span class="chem">dh/dt = 0.25 / 9.2641… = 0.0270</span> <span class="unit">m min-1</span> (3 s.f.).</p>
      solution: "<p>解読：その瞬間が体積で与えられている関連変化率の問題です。GDC：<span class=\"chem\">(pi/3)h^2(6 - h) = 5 => h = 0.97475…</span>（<span class=\"chem\">0 &lt; h &lt; 2</span> を満たす唯一の解）。次に <span class=\"chem\">dV/dh = pi(4h - h^2) = 9.2641…</span> なので、<span class=\"chem\">dh/dt = 0.25 / 9.2641… = 0.0270</span> <span class=\"unit\">m min-1</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-3-q025 · numeric · exam · AHL · AHL 5.14, 5.15 · 5 marks
    "t5-3-q025": {
      // EN: <p>A ladder of length <span class="unit">6.5 m</span> leans against a vertical wall with its foot on horizontal ground. The foot of the ladder slides away from the wall at a constant <span class="unit">0.3 m s-1</span>. Let <span class="chem">theta</span> be the angle between the ladder and the ground.</p><p>Find the rate at which <span class="chem">theta</span> is decreasing, in radians per second, at the instant when the foot of the ladder is <span class="unit">4.1 m</span> from the wall.</p>
      stem: "<p>長さ <span class=\"unit\">6.5 m</span> のはしごが鉛直な壁に立てかけてあり、はしごの下端は水平な地面にあります。はしごの下端は一定の速さ <span class=\"unit\">0.3 m s-1</span> で壁から離れるように滑ります。はしごと地面のなす角を <span class=\"chem\">theta</span> とします。</p><p>はしごの下端が壁から <span class=\"unit\">4.1 m</span> の位置にある瞬間に、<span class=\"chem\">theta</span> が減少する速さを毎秒あたりのラジアンで求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: link the distance of the foot, <i>x</i>, to the angle: <span class="chem">x = 6.5 cos theta</span>. You are given <span class="chem">dx/dt</span> and want <span class="chem">d theta/dt</span>.
        "解読：下端の距離 <i>x</i> と角を結びつけます：<span class=\"chem\">x = 6.5 cos theta</span>。<span class=\"chem\">dx/dt</span> が与えられていて、<span class=\"chem\">d theta/dt</span> を求めます。",
        // EN: Differentiate with respect to <i>t</i>: <span class="chem">dx/dt = -6.5 sin theta (d theta/dt)</span>.
        "<i>t</i> で微分します：<span class=\"chem\">dx/dt = -6.5 sin theta (d theta/dt)</span>。",
        // EN: At the instant, <span class="chem">cos theta = 4.1/6.5</span>, so <span class="chem">6.5 sin theta = sqrt(6.5^2 - 4.1^2)</span>, the height of the top of the ladder.
        "その瞬間には <span class=\"chem\">cos theta = 4.1/6.5</span> なので、<span class=\"chem\">6.5 sin theta = sqrt(6.5^2 - 4.1^2)</span> で、これははしごの上端の高さです。",
      ],
      // EN: <p>Decode: the angle and the foot distance are linked by <span class="chem">x = 6.5 cos theta</span>. Differentiating, <span class="chem">dx/dt = -6.5 sin theta (d theta/dt)</span>. When <span class="chem">x = 4.1</span>, <span class="chem">6.5 sin theta = sqrt(6.5^2 - 4.1^2) = 5.0438…</span>. So <span class="chem">d theta/dt = -0.3 / 5.0438… = -0.0595</span>: the angle is decreasing at <span class="chem">0.0595</span> <span class="unit">rad s-1</span> (3 s.f.).</p>
      solution: "<p>解読：角と下端の距離は <span class=\"chem\">x = 6.5 cos theta</span> で結ばれています。微分すると <span class=\"chem\">dx/dt = -6.5 sin theta (d theta/dt)</span> です。<span class=\"chem\">x = 4.1</span> のとき <span class=\"chem\">6.5 sin theta = sqrt(6.5^2 - 4.1^2) = 5.0438…</span> です。よって <span class=\"chem\">d theta/dt = -0.3 / 5.0438… = -0.0595</span> となり、角は <span class=\"chem\">0.0595</span> <span class=\"unit\">rad s-1</span>（有効数字 3 桁）の速さで減少しています。</p>",
    },

    // ── t5-3-q026 · short · challenge · AHL · AHL 5.14 · 9 marks
    "t5-3-q026": {
      // EN: <p>A water tank is an inverted right circular cone, vertex at the bottom, of height <span class="unit">5 m</span>. When the water is <i>h</i> metres deep, the radius of the water surface is <span class="chem">0.6h</span> metres. Water is pumped in at <span class="unit">0.5 m3 min-1</span>, and at the same time it leaks out of a hole at the vertex at a rate of <span class="chem">0.2 sqrt(h)</span> <span class="unit">m3 min-1</span>.</p><p>(a) Show that the volume of water in the tank is <span class="chem">V = 0.12 pi h^3</span>. <strong>[2 marks]</strong></p><p>(b) Find the rate at which the depth is changing when <span class="chem">h = 1.8</span>. <strong>[4 marks]</strong></p><p>(c) The tank starts empty. Determine whether the tank will eventually overflow. Justify your answer. <strong>[3 marks]</strong></p>
      stem: "<p>貯水タンクは頂点を下にした逆さの直円錐で、高さは <span class=\"unit\">5 m</span> です。水の深さが <i>h</i> メートルのとき、水面の半径は <span class=\"chem\">0.6h</span> メートルです。水は <span class=\"unit\">0.5 m3 min-1</span> で注入され、同時に頂点の穴から <span class=\"chem\">0.2 sqrt(h)</span> <span class=\"unit\">m3 min-1</span> の割合で漏れ出ています。</p><p>(a) タンク内の水の体積が <span class=\"chem\">V = 0.12 pi h^3</span> であることを示しなさい (Show that)。 <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">h = 1.8</span> のときに深さが変化する速さを求めなさい (Find)。 <strong>[4 marks]</strong></p><p>(c) タンクは最初は空です。タンクがいずれあふれるかどうかを決定し (Determine)、その理由を示しなさい (Justify)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: two rates act at once, so the net rate is <span class="chem">dV/dt = (in) - (out)</span>. Part (c) hides a question about when <span class="chem">dh/dt</span> becomes zero.
        "解読：2 つの変化率が同時にはたらくので、正味の変化率は <span class=\"chem\">dV/dt = (in) - (out)</span>（流入 − 流出）です。(c) には「<span class=\"chem\">dh/dt</span> がいつ 0 になるか」という問いが隠れています。",
        // EN: For (a), use similar triangles: <span class="chem">r = 0.6h</span> in the cone formula.
        "(a) では相似な三角形を使います：円錐の体積の公式に <span class=\"chem\">r = 0.6h</span> を代入します。",
        // EN: For (b), divide the net <span class="chem">dV/dt</span> by <span class="chem">dV/dh = 0.36 pi h^2</span>.
        "(b) では、正味の <span class=\"chem\">dV/dt</span> を <span class=\"chem\">dV/dh = 0.36 pi h^2</span> で割ります。",
        // EN: For (c), the level rises while <span class="chem">0.5 - 0.2 sqrt(h) &gt; 0</span>. Compare the depth where this becomes zero with the tank height.
        "(c) では、<span class=\"chem\">0.5 - 0.2 sqrt(h) &gt; 0</span> である間は水位が上がります。これが 0 になる深さとタンクの高さを比べます。",
      ],
      // EN: <p>Decode: the net rate of change of volume is inflow minus leak, and "will it overflow?" means "does the depth stop rising before <span class="chem">h = 5</span>?" (a) <span class="chem">V = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>. (b) <span class="chem">dh/dt = (0.5 - 0.2 sqrt(1.8)) / (0.36 pi (1.8)^2) = 0.0632</span> <span class="unit">m min-1</span>. (c) <span class="chem">dh/dt = 0 <=> sqrt(h) = 2.5 <=> h = 6.25</span>. Since <span class="chem">6.25 &gt; 5</span>, the depth is still increasing when it reaches <span class="unit">5 m</span>, so the tank overflows.</p>
      solution: "<p>解読：体積の正味の変化率は流入量から漏れを引いたもので、「あふれるか？」は「深さが <span class=\"chem\">h = 5</span> に達する前に上昇が止まるか？」という意味です。(a) <span class=\"chem\">V = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>。(b) <span class=\"chem\">dh/dt = (0.5 - 0.2 sqrt(1.8)) / (0.36 pi (1.8)^2) = 0.0632</span> <span class=\"unit\">m min-1</span>。(c) <span class=\"chem\">dh/dt = 0 <=> sqrt(h) = 2.5 <=> h = 6.25</span>。<span class=\"chem\">6.25 &gt; 5</span> なので、深さが <span class=\"unit\">5 m</span> に達したときもまだ増加しており、タンクはあふれます。</p>",
      // EN: <p>(a) <span class="chem">V = (1/3) pi r^2 h = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>.</p><p>(b) <span class="chem">dV/dt = 0.5 - 0.2 sqrt(h)</span> and <span class="chem">dV/dh = 0.36 pi h^2</span>, so <span class="chem">dh/dt = (0.5 - 0.2 sqrt(h)) / (0.36 pi h^2)</span>. At <span class="chem">h = 1.8</span>: <span class="chem">dh/dt = 0.23167… / 3.66435… = 0.0632</span> <span class="unit">m min-1</span>.</p><p>(c) The depth keeps rising while <span class="chem">0.5 - 0.2 sqrt(h) &gt; 0</span>, that is while <span class="chem">h &lt; 6.25</span>. The tank is only <span class="unit">5 m</span> deep, and at <span class="chem">h = 5</span> the net inflow is <span class="chem">0.5 - 0.2 sqrt(5) = 0.0528 &gt; 0</span>, so the level is still rising when it reaches the top: the tank overflows.</p>
      answer: "<p>(a) <span class=\"chem\">V = (1/3) pi r^2 h = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>。</p><p>(b) <span class=\"chem\">dV/dt = 0.5 - 0.2 sqrt(h)</span>、<span class=\"chem\">dV/dh = 0.36 pi h^2</span> なので、<span class=\"chem\">dh/dt = (0.5 - 0.2 sqrt(h)) / (0.36 pi h^2)</span>。<span class=\"chem\">h = 1.8</span> のとき：<span class=\"chem\">dh/dt = 0.23167… / 3.66435… = 0.0632</span> <span class=\"unit\">m min-1</span>。</p><p>(c) <span class=\"chem\">0.5 - 0.2 sqrt(h) &gt; 0</span>、すなわち <span class=\"chem\">h &lt; 6.25</span> である間は深さが上昇し続ける。タンクの深さは <span class=\"unit\">5 m</span> しかなく、<span class=\"chem\">h = 5</span> での正味の流入率は <span class=\"chem\">0.5 - 0.2 sqrt(5) = 0.0528 &gt; 0</span> なので、水位は上端に達したときもまだ上昇している：タンクはあふれる。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">V = (1/3) pi r^2 h</span> with <span class="chem">r = 0.6h</span>.
        "M1：<span class=\"chem\">r = 0.6h</span> として <span class=\"chem\">V = (1/3) pi r^2 h</span> を用いている。",
        // EN: A1: <span class="chem">(1/3) pi (0.36h^2) h</span> seen, leading to <span class="chem">V = 0.12 pi h^3</span> AG (no mark for the given line).
        "A1：<span class=\"chem\">(1/3) pi (0.36h^2) h</span> が書かれており、<span class=\"chem\">V = 0.12 pi h^3</span> に至っている AG（与えられた式そのものには点を与えない）。",
        // EN: M1: net rate <span class="chem">dV/dt = 0.5 - 0.2 sqrt(h)</span> (inflow minus leak).
        "M1：正味の変化率 <span class=\"chem\">dV/dt = 0.5 - 0.2 sqrt(h)</span>（流入量 − 漏れ）。",
        // EN: M1: <span class="chem">dV/dh = 0.36 pi h^2</span> and uses <span class="chem">dh/dt = (dV/dt)/(dV/dh)</span>.
        "M1：<span class=\"chem\">dV/dh = 0.36 pi h^2</span> を求め、<span class=\"chem\">dh/dt = (dV/dt)/(dV/dh)</span> を用いている。",
        // EN: A1: correct substitution of <span class="chem">h = 1.8</span>: <span class="chem">0.23167… / 3.66435…</span>.
        "A1：<span class=\"chem\">h = 1.8</span> を正しく代入している：<span class=\"chem\">0.23167… / 3.66435…</span>。",
        // EN: A1: <span class="chem">dh/dt = 0.0632</span> <span class="unit">m min-1</span>.
        "A1：<span class=\"chem\">dh/dt = 0.0632</span> <span class=\"unit\">m min-1</span>。",
        // EN: M1: considers the sign of <span class="chem">0.5 - 0.2 sqrt(h)</span> (or solves <span class="chem">dh/dt = 0</span>).
        "M1：<span class=\"chem\">0.5 - 0.2 sqrt(h)</span> の符号を考えている（または <span class=\"chem\">dh/dt = 0</span> を解いている）。",
        // EN: A1: the level stops rising only at <span class="chem">h = 6.25</span>.
        "A1：水位の上昇が止まるのは <span class=\"chem\">h = 6.25</span> のときだけである。",
        // EN: R1: <span class="chem">6.25 &gt; 5</span> (net inflow still positive at <span class="chem">h = 5</span>), so the tank overflows.
        "R1：<span class=\"chem\">6.25 &gt; 5</span>（<span class=\"chem\">h = 5</span> でも正味の流入が正）なので、タンクはあふれる。",
      ],
    },

    // ── t5-3-q027 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q027": {
      // EN: <p>The curve <i>C</i> has equation <span class="chem">x^3 + y^3 = 6xy</span>. The point <i>P</i> on <i>C</i> has <i>x</i>-coordinate <span class="chem">1</span> and <i>y</i>-coordinate greater than <span class="chem">1</span>.</p><p>Find the gradient of <i>C</i> at <i>P</i>.</p>
      stem: "<p>曲線 <i>C</i> の方程式は <span class=\"chem\">x^3 + y^3 = 6xy</span> です。<i>C</i> 上の点 <i>P</i> は <i>x</i> 座標が <span class=\"chem\">1</span> で、<i>y</i> 座標が <span class=\"chem\">1</span> より大きい点です。</p><p><i>P</i> における <i>C</i> の傾きを求めなさい (Find)。</p>",
      hints: [
        // EN: First find <i>P</i>: put <span class="chem">x = 1</span> in the equation and solve <span class="chem">y^3 - 6y + 1 = 0</span> on your GDC. Take the root greater than 1.
        "まず <i>P</i> を求めます：方程式に <span class=\"chem\">x = 1</span> を代入し、GDC で <span class=\"chem\">y^3 - 6y + 1 = 0</span> を解きます。1 より大きい解をとります。",
        // EN: Differentiate implicitly: <span class="chem">3x^2 + 3y^2 (dy/dx) = 6y + 6x (dy/dx)</span>.
        "陰関数の微分を行います：<span class=\"chem\">3x^2 + 3y^2 (dy/dx) = 6y + 6x (dy/dx)</span>。",
        // EN: Rearrange to <span class="chem">dy/dx = (6y - 3x^2)/(3y^2 - 6x)</span> and substitute the coordinates of <i>P</i>.
        "<span class=\"chem\">dy/dx = (6y - 3x^2)/(3y^2 - 6x)</span> と整理し、<i>P</i> の座標を代入します。",
      ],
      // EN: <p>With <span class="chem">x = 1</span>: <span class="chem">y^3 - 6y + 1 = 0</span>. Its roots are <span class="chem">-2.529…, 0.167…, 2.3615…</span>, so <span class="chem">P = (1, 2.3615…)</span>. Implicitly, <span class="chem">3x^2 + 3y^2 y' = 6y + 6xy'</span>, so <span class="chem">dy/dx = (6y - 3x^2)/(3y^2 - 6x) = 11.1688… / 10.7296… = 1.04</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">x = 1</span> のとき：<span class=\"chem\">y^3 - 6y + 1 = 0</span>。その解は <span class=\"chem\">-2.529…, 0.167…, 2.3615…</span> なので、<span class=\"chem\">P = (1, 2.3615…)</span> です。陰関数の微分により <span class=\"chem\">3x^2 + 3y^2 y' = 6y + 6xy'</span> なので、<span class=\"chem\">dy/dx = (6y - 3x^2)/(3y^2 - 6x) = 11.1688… / 10.7296… = 1.04</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-3-q028 · short · challenge · AHL · AHL 5.14 · 10 marks
    "t5-3-q028": {
      // EN: <p>A curve has equation <span class="chem">x^3 + xy + y^2 = 7</span>.</p><p>(a) Show that <span class="chem">dy/dx = -(3x^2 + y)/(x + 2y)</span>. <strong>[3 marks]</strong></p><p>(b) Find the coordinates of the points on the curve where the tangent is parallel to the line <span class="chem">y = x</span>. <strong>[4 marks]</strong></p><p>(c) Find the coordinates of the point on the curve where the tangent is vertical. <strong>[3 marks]</strong></p>
      stem: "<p>曲線の方程式は <span class=\"chem\">x^3 + xy + y^2 = 7</span> です。</p><p>(a) <span class=\"chem\">dy/dx = -(3x^2 + y)/(x + 2y)</span> であることを示しなさい (Show that)。 <strong>[3 marks]</strong></p><p>(b) 接線が直線 <span class=\"chem\">y = x</span> に平行となる曲線上の点の座標を求めなさい (Find)。 <strong>[4 marks]</strong></p><p>(c) 接線が鉛直となる曲線上の点の座標を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "tangent parallel to <span class="chem">y = x</span>" means <span class="chem">dy/dx = 1</span>; "tangent vertical" means the denominator of <span class="chem">dy/dx</span> is zero. Each condition gives a line through the points, which you then intersect with the curve.
        "解読：「接線が <span class=\"chem\">y = x</span> に平行」は <span class=\"chem\">dy/dx = 1</span> を意味し、「接線が鉛直」は <span class=\"chem\">dy/dx</span> の分母が 0 であることを意味します。それぞれの条件から求める点を通る直線が得られるので、それと曲線との交点を求めます。",
        // EN: In (b), clear the fraction: <span class="chem">-(3x^2 + y) = x + 2y</span>, then make <i>y</i> the subject.
        "(b) では分数を払います：<span class=\"chem\">-(3x^2 + y) = x + 2y</span>。そして <i>y</i> について解きます。",
        // EN: Substitute <span class="chem">y = -(3x^2 + x)/3</span> into <span class="chem">x^3 + xy + y^2 = 7</span> and solve with a GDC (graph or polynomial solver).
        "<span class=\"chem\">y = -(3x^2 + x)/3</span> を <span class=\"chem\">x^3 + xy + y^2 = 7</span> に代入し、GDC（グラフまたは多項式ソルバー）で解きます。",
        // EN: In (c), substitute <span class="chem">y = -x/2</span> into the curve and check the numerator is not also zero.
        "(c) では <span class=\"chem\">y = -x/2</span> を曲線の方程式に代入し、分子も同時に 0 になっていないことを確認します。",
      ],
      // EN: <p>Decode: both (b) and (c) are conditions on <span class="chem">dy/dx</span> that become a second equation; solve it simultaneously with the curve. (b) gives <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>; (c) gives <span class="chem">(2, -1)</span>.</p>
      solution: "<p>解読：(b) と (c) はどちらも <span class=\"chem\">dy/dx</span> に関する条件で、2 つ目の方程式になります。それを曲線の方程式と連立して解きます。(b) からは <span class=\"chem\">(1.51, -2.79)</span> と <span class=\"chem\">(-1.86, -2.86)</span>、(c) からは <span class=\"chem\">(2, -1)</span> が得られます。</p>",
      // EN: <p>(a) <span class="chem">3x^2 + (y + x dy/dx) + 2y dy/dx = 0 => (x + 2y) dy/dx = -(3x^2 + y) => dy/dx = -(3x^2 + y)/(x + 2y)</span>.</p><p>(b) <span class="chem">dy/dx = 1 => -(3x^2 + y) = x + 2y => y = -(3x^2 + x)/3</span>. Substituting into the curve and solving on a GDC: <span class="chem">9x^4 + 6x^3 - 2x^2 - 63 = 0</span>, so <span class="chem">x = 1.5107…</span> or <span class="chem">x = -1.8650…</span>. The points are <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>.</p><p>(c) Vertical tangent where the denominator is zero: <span class="chem">x + 2y = 0 => y = -x/2</span>. Then <span class="chem">x^3 - x^2/2 + x^2/4 = 7 => x^3 - x^2/4 - 7 = 0 => x = 2</span>, so the point is <span class="chem">(2, -1)</span> (the numerator <span class="chem">3x^2 + y = 11 != 0</span> there).</p>
      answer: "<p>(a) <span class=\"chem\">3x^2 + (y + x dy/dx) + 2y dy/dx = 0 => (x + 2y) dy/dx = -(3x^2 + y) => dy/dx = -(3x^2 + y)/(x + 2y)</span>。</p><p>(b) <span class=\"chem\">dy/dx = 1 => -(3x^2 + y) = x + 2y => y = -(3x^2 + x)/3</span>。曲線の方程式に代入して GDC で解くと：<span class=\"chem\">9x^4 + 6x^3 - 2x^2 - 63 = 0</span> より <span class=\"chem\">x = 1.5107…</span> または <span class=\"chem\">x = -1.8650…</span>。求める点は <span class=\"chem\">(1.51, -2.79)</span> と <span class=\"chem\">(-1.86, -2.86)</span>。</p><p>(c) 接線が鉛直になるのは分母が 0 のとき：<span class=\"chem\">x + 2y = 0 => y = -x/2</span>。すると <span class=\"chem\">x^3 - x^2/2 + x^2/4 = 7 => x^3 - x^2/4 - 7 = 0 => x = 2</span> なので、求める点は <span class=\"chem\">(2, -1)</span>（そこでの分子は <span class=\"chem\">3x^2 + y = 11 != 0</span>）。</p>",
      markscheme: [
        // EN: M1: implicit differentiation, with the product rule on <span class="chem">xy</span>.
        "M1：<span class=\"chem\">xy</span> に積の微分法を用いて、陰関数の微分を行っている。",
        // EN: A1: <span class="chem">3x^2 + y + x dy/dx + 2y dy/dx = 0</span>.
        "A1：<span class=\"chem\">3x^2 + y + x dy/dx + 2y dy/dx = 0</span>。",
        // EN: A1: collects terms, <span class="chem">(x + 2y) dy/dx = -(3x^2 + y)</span>, leading to the given result AG (no mark for the given line).
        "A1：項をまとめて <span class=\"chem\">(x + 2y) dy/dx = -(3x^2 + y)</span> とし、与えられた結果に至っている AG（与えられた式そのものには点を与えない）。",
        // EN: M1: sets <span class="chem">-(3x^2 + y)/(x + 2y) = 1</span>.
        "M1：<span class=\"chem\">-(3x^2 + y)/(x + 2y) = 1</span> とおいている。",
        // EN: A1: <span class="chem">y = -(3x^2 + x)/3</span> (or equivalent).
        "A1：<span class=\"chem\">y = -(3x^2 + x)/3</span>（または同値な式）。",
        // EN: M1: substitutes into the equation of the curve and solves with a GDC.
        "M1：曲線の方程式に代入し、GDC で解いている。",
        // EN: A1: both points <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>.
        "A1：2 点 <span class=\"chem\">(1.51, -2.79)</span> と <span class=\"chem\">(-1.86, -2.86)</span> が両方正しい。",
        // EN: M1: sets the denominator <span class="chem">x + 2y = 0</span>.
        "M1：分母を <span class=\"chem\">x + 2y = 0</span> とおいている。",
        // EN: M1: substitutes <span class="chem">y = -x/2</span> to get <span class="chem">x^3 - x^2/4 - 7 = 0</span>.
        "M1：<span class=\"chem\">y = -x/2</span> を代入して <span class=\"chem\">x^3 - x^2/4 - 7 = 0</span> を得ている。",
        // EN: A1: <span class="chem">(2, -1)</span>.
        "A1：<span class=\"chem\">(2, -1)</span>。",
      ],
    },

    // ── t5-3-q029 · numeric · challenge · AHL · AHL 5.14 · 6 marks
    "t5-3-q029": {
      // EN: <p>The closed curve <span class="chem">x^4 + xy + y^2 = 20</span> is the outline of a garden bed drawn on a plan, with the <i>y</i>-axis pointing north. Find how far north of the <i>x</i>-axis the most northerly point of the bed lies.</p>
      stem: "<p>閉曲線 <span class=\"chem\">x^4 + xy + y^2 = 20</span> は、<i>y</i> 軸が北を向いた平面図上に描かれた花壇の輪郭です。花壇の最も北にある点が <i>x</i> 軸からどれだけ北にあるかを求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "the most northerly point" is the greatest <i>y</i>-coordinate on the curve, which is where the tangent is horizontal: <span class="chem">dy/dx = 0</span>.
        "解読：「最も北にある点」とは曲線上で <i>y</i> 座標が最大となる点で、そこでは接線が水平です：<span class=\"chem\">dy/dx = 0</span>。",
        // EN: Differentiate implicitly: <span class="chem">4x^3 + y + x(dy/dx) + 2y(dy/dx) = 0</span>. Setting <span class="chem">dy/dx = 0</span> gives <span class="chem">y = -4x^3</span>.
        "陰関数の微分を行います：<span class=\"chem\">4x^3 + y + x(dy/dx) + 2y(dy/dx) = 0</span>。<span class=\"chem\">dy/dx = 0</span> とおくと <span class=\"chem\">y = -4x^3</span> です。",
        // EN: Substitute <span class="chem">y = -4x^3</span> into the curve: <span class="chem">16x^6 - 3x^4 - 20 = 0</span>. Solve on your GDC and choose the root that gives the larger <i>y</i>.
        "<span class=\"chem\">y = -4x^3</span> を曲線の方程式に代入します：<span class=\"chem\">16x^6 - 3x^4 - 20 = 0</span>。GDC で解き、<i>y</i> が大きくなる方の解を選びます。",
      ],
      // EN: <p>Decode: the most northerly point is the maximum of <i>y</i> on the curve, where <span class="chem">dy/dx = 0</span>. Implicitly, <span class="chem">(x + 2y) dy/dx = -(4x^3 + y)</span>, so <span class="chem">dy/dx = 0 => y = -4x^3</span>. Then <span class="chem">x^4 - 4x^4 + 16x^6 = 20 => 16x^6 - 3x^4 - 20 = 0 => x = +-1.06934…</span>. <span class="chem">x = -1.06934…</span> gives <span class="chem">y = 4.89</span> (the other gives <span class="chem">y = -4.89</span>, the most southerly point). The bed reaches <span class="chem">4.89</span> units north of the <i>x</i>-axis.</p>
      solution: "<p>解読：最も北にある点は曲線上での <i>y</i> の最大値で、そこでは <span class=\"chem\">dy/dx = 0</span> です。陰関数の微分により <span class=\"chem\">(x + 2y) dy/dx = -(4x^3 + y)</span> なので、<span class=\"chem\">dy/dx = 0 => y = -4x^3</span>。すると <span class=\"chem\">x^4 - 4x^4 + 16x^6 = 20 => 16x^6 - 3x^4 - 20 = 0 => x = +-1.06934…</span>。<span class=\"chem\">x = -1.06934…</span> から <span class=\"chem\">y = 4.89</span> が得られます（もう一方からは <span class=\"chem\">y = -4.89</span> となり、これは最も南の点です）。花壇は <i>x</i> 軸の北 <span class=\"chem\">4.89</span> 単位まで達します。</p>",
    },

    // ── t5-3-q030 · numeric · exam · AHL · AHL 5.17 · 5 marks
    "t5-3-q030": {
      // EN: <p>The region <i>R</i> is bounded by the curves <span class="chem">y = 2 cos x</span> and <span class="chem">y = x^2</span> and the <i>y</i>-axis, for <span class="chem">x &gt;= 0</span>. The region <i>R</i> is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the volume of the solid formed.</p>
      stem: "<p>領域 <i>R</i> は、<span class=\"chem\">x &gt;= 0</span> において曲線 <span class=\"chem\">y = 2 cos x</span> と <span class=\"chem\">y = x^2</span> および <i>y</i> 軸で囲まれた部分です。領域 <i>R</i> を <i>x</i> 軸の周りに <span class=\"chem\">2pi</span> ラジアン回転させます。できる立体の体積を求めなさい (Find)。</p>",
      hints: [
        // EN: Find where the curves meet for <span class="chem">x &gt; 0</span>: solve <span class="chem">2 cos x = x^2</span> on your GDC.
        "<span class=\"chem\">x &gt; 0</span> で 2 曲線が交わる点を求めます：GDC で <span class=\"chem\">2 cos x = x^2</span> を解きます。",
        // EN: The solid has a hole: use outer radius <span class="chem">2 cos x</span> and inner radius <span class="chem">x^2</span>, so <span class="chem">V = pi int_0^a ((2cos x)^2 - (x^2)^2) dx</span>.
        "この立体には穴があります：外側の半径 <span class=\"chem\">2 cos x</span>、内側の半径 <span class=\"chem\">x^2</span> を用いて <span class=\"chem\">V = pi int_0^a ((2cos x)^2 - (x^2)^2) dx</span> です。",
        // EN: Do not square the difference <span class="chem">(2cos x - x^2)</span>.
        "差 <span class=\"chem\">(2cos x - x^2)</span> を 2 乗してはいけません。",
      ],
      // EN: <p>GDC: <span class="chem">2 cos x = x^2 => a = 1.02169…</span>. The washer formula gives <span class="chem">V = pi int_0^a (4cos^2 x - x^4) dx = 8.52</span> (3 s.f.).</p>
      solution: "<p>GDC：<span class=\"chem\">2 cos x = x^2 => a = 1.02169…</span>。ワッシャー型（中空の円板）の公式により <span class=\"chem\">V = pi int_0^a (4cos^2 x - x^4) dx = 8.52</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-3-q031 · short · challenge · AHL · AHL 5.17 · 8 marks
    "t5-3-q031": {
      // EN: <p>The inside of a bowl is formed by rotating the curve <span class="chem">y = x^4/50 + x^2/10</span>, for <span class="chem">x &gt;= 0</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis. Lengths are in centimetres, and the bowl is <span class="unit">5 cm</span> deep.</p><p>(a) Show that <span class="chem">x^2 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>. <strong>[3 marks]</strong></p><p>(b) Find the capacity of the bowl. <strong>[2 marks]</strong></p><p>(c) Find the depth of the water when the bowl is half full. <strong>[3 marks]</strong></p>
      stem: "<p>ある器の内側は、曲線 <span class=\"chem\">y = x^4/50 + x^2/10</span>（<span class=\"chem\">x &gt;= 0</span>）を <i>y</i> 軸の周りに <span class=\"chem\">2pi</span> ラジアン回転させた形です。長さの単位はセンチメートルで、器の深さは <span class=\"unit\">5 cm</span> です。</p><p>(a) <span class=\"chem\">x^2 = 25(sqrt(0.01 + 0.08y) - 0.1)</span> であることを示しなさい (Show that)。 <strong>[3 marks]</strong></p><p>(b) 器の容積を求めなさい (Find)。 <strong>[2 marks]</strong></p><p>(c) 器に半分まで水が入っているときの水の深さを求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: rotation about the <i>y</i>-axis means you integrate <span class="chem">pi x^2</span> with respect to <i>y</i>, so you need <span class="chem">x^2</span> in terms of <i>y</i>. "Half full" is an equation with the upper limit <i>h</i> as the unknown.
        "解読：<i>y</i> 軸の周りの回転では <span class=\"chem\">pi x^2</span> を <i>y</i> で積分するので、<span class=\"chem\">x^2</span> を <i>y</i> で表す必要があります。「半分まで」は上端 <i>h</i> を未知数とする方程式です。",
        // EN: In (a), write <span class="chem">u = x^2</span>: the equation becomes the quadratic <span class="chem">0.02u^2 + 0.1u - y = 0</span>.
        "(a) では <span class=\"chem\">u = x^2</span> とおくと、方程式は 2 次方程式 <span class=\"chem\">0.02u^2 + 0.1u - y = 0</span> になります。",
        // EN: In (b), integrate <span class="chem">pi x^2</span> from <span class="chem">y = 0</span> to <span class="chem">y = 5</span> on your GDC.
        "(b) では GDC で <span class=\"chem\">pi x^2</span> を <span class=\"chem\">y = 0</span> から <span class=\"chem\">y = 5</span> まで積分します。",
        // EN: In (c), solve <span class="chem">pi int_0^h 25(sqrt(0.01 + 0.08y) - 0.1) dy = 65.95</span> for <i>h</i>. The depth is more than half of 5, because the bowl is wider at the top.
        "(c) では <span class=\"chem\">pi int_0^h 25(sqrt(0.01 + 0.08y) - 0.1) dy = 65.95</span> を <i>h</i> について解きます。器は上の方が広いので、深さは 5 の半分より大きくなります。",
      ],
      // EN: <p>Decode: a volume about the <i>y</i>-axis needs <span class="chem">x^2 = g(y)</span>, and "half full" makes the upper limit the unknown. (a) Quadratic in <span class="chem">x^2</span>, positive root. (b) <span class="chem">V = 131.899… ≈ 132</span> <span class="unit">cm3</span>. (c) <span class="chem">h = 3.26</span> <span class="unit">cm</span>.</p>
      solution: "<p>解読：<i>y</i> 軸の周りの体積には <span class=\"chem\">x^2 = g(y)</span> が必要で、「半分まで」により上端が未知数になります。(a) <span class=\"chem\">x^2</span> の 2 次方程式で、正の解をとります。(b) <span class=\"chem\">V = 131.899… ≈ 132</span> <span class=\"unit\">cm3</span>。(c) <span class=\"chem\">h = 3.26</span> <span class=\"unit\">cm</span>。</p>",
      // EN: <p>(a) Let <span class="chem">u = x^2</span>: <span class="chem">u^2/50 + u/10 - y = 0</span>, so <span class="chem">u = (-0.1 + sqrt(0.01 + 0.08y)) / 0.04 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>, taking the positive root because <span class="chem">x^2 &gt;= 0</span>.</p><p>(b) <span class="chem">V = pi int_0^5 x^2 dy = 132</span> <span class="unit">cm3</span> (131.899…).</p><p>(c) Solve <span class="chem">pi int_0^h x^2 dy = 65.95…</span> with a GDC: <span class="chem">h = 3.26</span> <span class="unit">cm</span>.</p>
      answer: "<p>(a) <span class=\"chem\">u = x^2</span> とおくと：<span class=\"chem\">u^2/50 + u/10 - y = 0</span> なので <span class=\"chem\">u = (-0.1 + sqrt(0.01 + 0.08y)) / 0.04 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>。<span class=\"chem\">x^2 &gt;= 0</span> なので正の解をとる。</p><p>(b) <span class=\"chem\">V = pi int_0^5 x^2 dy = 132</span> <span class=\"unit\">cm3</span>（131.899…）。</p><p>(c) GDC で <span class=\"chem\">pi int_0^h x^2 dy = 65.95…</span> を解くと：<span class=\"chem\">h = 3.26</span> <span class=\"unit\">cm</span>。</p>",
      markscheme: [
        // EN: M1: treats the equation as a quadratic in <span class="chem">x^2</span>.
        "M1：方程式を <span class=\"chem\">x^2</span> の 2 次方程式として扱っている。",
        // EN: A1: applies the quadratic formula correctly: <span class="chem">x^2 = (-0.1 +- sqrt(0.01 + 0.08y))/0.04</span>.
        "A1：解の公式を正しく用いている：<span class=\"chem\">x^2 = (-0.1 +- sqrt(0.01 + 0.08y))/0.04</span>。",
        // EN: R1: rejects the negative root because <span class="chem">x^2 &gt;= 0</span>, leading to the given result AG (no mark for the given line).
        "R1：<span class=\"chem\">x^2 &gt;= 0</span> なので負の解を捨て、与えられた結果に至っている AG（与えられた式そのものには点を与えない）。",
        // EN: M1: <span class="chem">V = pi int_0^5 x^2 dy</span> with the expression from (a).
        "M1：(a) の式を用いて <span class=\"chem\">V = pi int_0^5 x^2 dy</span> としている。",
        // EN: A1: <span class="chem">V = 132</span> <span class="unit">cm3</span>.
        "A1：<span class=\"chem\">V = 132</span> <span class=\"unit\">cm3</span>。",
        // EN: M1: sets <span class="chem">pi int_0^h x^2 dy</span> equal to half of the capacity.
        "M1：<span class=\"chem\">pi int_0^h x^2 dy</span> を容積の半分に等しいとおいている。",
        // EN: M1: solves the equation with a GDC (graph or solver).
        "M1：方程式を GDC（グラフまたはソルバー）で解いている。",
        // EN: A1: <span class="chem">h = 3.26</span> <span class="unit">cm</span>.
        "A1：<span class=\"chem\">h = 3.26</span> <span class=\"unit\">cm</span>。",
      ],
    },

    // ── t5-3-q032 · numeric · exam · AHL · AHL 5.16, 5.17 · 6 marks
    "t5-3-q032": {
      // EN: <p>The region bounded by the curve <span class="chem">y = sqrt(x) e^{-x/4}</span>, the <i>x</i>-axis and the line <span class="chem">x = k</span>, where <span class="chem">k &gt; 0</span>, is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. The volume of the solid formed is <span class="chem">5</span> cubic units. Find the value of <i>k</i>.</p>
      stem: "<p>曲線 <span class=\"chem\">y = sqrt(x) e^{-x/4}</span>、<i>x</i> 軸、および直線 <span class=\"chem\">x = k</span>（<span class=\"chem\">k &gt; 0</span>）で囲まれた領域を <i>x</i> 軸の周りに <span class=\"chem\">2pi</span> ラジアン回転させます。できる立体の体積は <span class=\"chem\">5</span> 立方単位です。<i>k</i> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the volume as <span class="chem">V = pi int_0^k x e^{-x/2} dx</span> (square <i>y</i> first).
        "体積を <span class=\"chem\">V = pi int_0^k x e^{-x/2} dx</span> と書きます（先に <i>y</i> を 2 乗します）。",
        // EN: You can integrate by parts (<span class="chem">u = x</span>, <span class="chem">dv/dx = e^{-x/2}</span>) to get <span class="chem">V = pi(4 - (2k + 4)e^{-k/2})</span>, or work with the integral directly on your GDC.
        "部分積分（<span class=\"chem\">u = x</span>、<span class=\"chem\">dv/dx = e^{-x/2}</span>）で <span class=\"chem\">V = pi(4 - (2k + 4)e^{-k/2})</span> を得てもよいし、GDC で積分を直接扱ってもかまいません。",
        // EN: Solve <span class="chem">V = 5</span> on your GDC.
        "GDC で <span class=\"chem\">V = 5</span> を解きます。",
      ],
      // EN: <p><span class="chem">V = pi int_0^k x e^{-x/2} dx</span>. By parts, <span class="chem">int x e^{-x/2} dx = -2x e^{-x/2} - 4e^{-x/2} + C</span>, so <span class="chem">V = pi(4 - (2k + 4)e^{-k/2})</span>. Solving <span class="chem">pi(4 - (2k + 4)e^{-k/2}) = 5</span> on a GDC gives <span class="chem">k = 2.74</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">V = pi int_0^k x e^{-x/2} dx</span>。部分積分により <span class=\"chem\">int x e^{-x/2} dx = -2x e^{-x/2} - 4e^{-x/2} + C</span> なので、<span class=\"chem\">V = pi(4 - (2k + 4)e^{-k/2})</span>。GDC で <span class=\"chem\">pi(4 - (2k + 4)e^{-k/2}) = 5</span> を解くと <span class=\"chem\">k = 2.74</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-3-q033 · numeric · challenge · AHL · AHL 5.15 · 7 marks
    "t5-3-q033": {
      // EN: <p>A painting hangs on a gallery wall. Its bottom edge is <span class="unit">1.6 m</span> above a visitor's eye level and its top edge is <span class="unit">5.2 m</span> above eye level. The visitor stands <i>x</i> metres from the wall. The angle <span class="chem">theta</span> subtended at the visitor's eye by the painting is largest for one value of <i>x</i>.</p><p>Find the largest possible value of <span class="chem">theta</span>, in degrees.</p>
      stem: "<p>美術館の壁に絵が掛かっています。絵の下端は来館者の目の高さより <span class=\"unit\">1.6 m</span> 上にあり、上端は目の高さより <span class=\"unit\">5.2 m</span> 上にあります。来館者は壁から <i>x</i> メートルのところに立っています。来館者の目から絵を見込む角 <span class=\"chem\">theta</span> は、ある 1 つの <i>x</i> の値で最大になります。</p><p><span class=\"chem\">theta</span> の最大値を度で求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: <span class="chem">theta</span> is the difference of two angles of elevation, so <span class="chem">theta = arctan(5.2/x) - arctan(1.6/x)</span>. This is an optimisation question on <span class="chem">theta(x)</span>.
        "解読：<span class=\"chem\">theta</span> は 2 つの仰角の差なので、<span class=\"chem\">theta = arctan(5.2/x) - arctan(1.6/x)</span> です。これは <span class=\"chem\">theta(x)</span> の最大・最小問題です。",
        // EN: Differentiate using <span class="chem">d/dx arctan(a/x) = -a/(x^2 + a^2)</span>, or graph <span class="chem">theta(x)</span> on your GDC and find its maximum.
        "<span class=\"chem\">d/dx arctan(a/x) = -a/(x^2 + a^2)</span> を用いて微分するか、GDC で <span class=\"chem\">theta(x)</span> のグラフをかいて最大値を求めます。",
        // EN: Setting the derivative equal to zero gives <span class="chem">x^2 = 5.2 × 1.6</span>. Remember to give <span class="chem">theta</span> in degrees.
        "導関数を 0 とおくと <span class=\"chem\">x^2 = 5.2 × 1.6</span> が得られます。<span class=\"chem\">theta</span> は度で答えることを忘れないでください。",
      ],
      // EN: <p>Decode: the angle subtended is (angle to the top) − (angle to the bottom), and "largest" means maximise. <span class="chem">theta(x) = arctan(5.2/x) - arctan(1.6/x)</span>, so <span class="chem">theta'(x) = -5.2/(x^2 + 27.04) + 1.6/(x^2 + 2.56)</span>. Setting this to zero: <span class="chem">5.2(x^2 + 2.56) = 1.6(x^2 + 27.04) => 3.6x^2 = 29.952 => x = sqrt(8.32) = 2.884…</span>. Then <span class="chem">theta = 0.55791…</span> rad <span class="chem">= 32.0°</span> (3 s.f.).</p>
      solution: "<p>解読：見込む角は（上端への仰角）−（下端への仰角）で、「最大」は最大化を意味します。<span class=\"chem\">theta(x) = arctan(5.2/x) - arctan(1.6/x)</span> なので <span class=\"chem\">theta'(x) = -5.2/(x^2 + 27.04) + 1.6/(x^2 + 2.56)</span>。これを 0 とおくと：<span class=\"chem\">5.2(x^2 + 2.56) = 1.6(x^2 + 27.04) => 3.6x^2 = 29.952 => x = sqrt(8.32) = 2.884…</span>。このとき <span class=\"chem\">theta = 0.55791…</span> rad <span class=\"chem\">= 32.0°</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-3-q034 · numeric · exam · AHL · AHL 5.15 · 5 marks
    "t5-3-q034": {
      // EN: <p>The number of birds in a colony <i>t</i> years after it was first counted is modelled by <span class="chem">N(t) = 200 × 1.07^t</span>. Find the value of <i>t</i> when the population first grows at a rate of <span class="chem">40</span> birds per year.</p>
      stem: "<p>ある鳥の群れの、最初に数えてから <i>t</i> 年後の個体数は <span class=\"chem\">N(t) = 200 × 1.07^t</span> でモデル化されます。個体数が初めて 1 年あたり <span class=\"chem\">40</span> 羽の割合で増加するときの <i>t</i> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "grows at a rate of 40 birds per year" is a statement about <span class="chem">dN/dt</span>, not about <i>N</i>.
        "解読：「1 年あたり 40 羽の割合で増加する」は <i>N</i> ではなく <span class=\"chem\">dN/dt</span> についての記述です。",
        // EN: Use <span class="chem">d/dt (a^t) = a^t ln a</span>: <span class="chem">dN/dt = 200 ln(1.07) × 1.07^t</span>.
        "<span class=\"chem\">d/dt (a^t) = a^t ln a</span> を用います：<span class=\"chem\">dN/dt = 200 ln(1.07) × 1.07^t</span>。",
        // EN: Solve <span class="chem">200 ln(1.07) × 1.07^t = 40</span> with logarithms or your GDC.
        "対数または GDC で <span class=\"chem\">200 ln(1.07) × 1.07^t = 40</span> を解きます。",
      ],
      // EN: <p>Decode: the rate of growth is <span class="chem">dN/dt</span>. <span class="chem">dN/dt = 200 × 1.07^t ln 1.07 = 13.5317… × 1.07^t</span>. Setting this equal to 40: <span class="chem">1.07^t = 2.9560… => t = ln(2.9560…)/ln 1.07 = 16.0</span> years (3 s.f.). Since <span class="chem">dN/dt</span> is increasing, this is the first time.</p>
      solution: "<p>解読：増加の割合は <span class=\"chem\">dN/dt</span> です。<span class=\"chem\">dN/dt = 200 × 1.07^t ln 1.07 = 13.5317… × 1.07^t</span>。これを 40 とおくと：<span class=\"chem\">1.07^t = 2.9560… => t = ln(2.9560…)/ln 1.07 = 16.0</span> 年（有効数字 3 桁）。<span class=\"chem\">dN/dt</span> は増加しているので、これが初めての時刻です。</p>",
      // EN: years
      unit: "年",
    },

    // ── t5-3-q035 · numeric · exam · AHL · AHL 5.14, 5.15 · 6 marks
    "t5-3-q035": {
      // EN: <p>A lighthouse <i>L</i> stands <span class="unit">800 m</span> from a straight shoreline. <i>O</i> is the point of the shore closest to <i>L</i>. The light rotates at a constant <span class="chem">0.5</span> revolutions per minute, and its beam meets the shore at a point <i>P</i>. Let <span class="chem">theta</span> be the angle <i>OLP</i>.</p><p>Find the speed, in metres per second, at which <i>P</i> moves along the shore at the instant when <span class="chem">theta = 50°</span>.</p>
      stem: "<p>灯台 <i>L</i> はまっすぐな海岸線から <span class=\"unit\">800 m</span> 離れたところに立っています。<i>O</i> は海岸上で <i>L</i> に最も近い点です。灯火は毎分 <span class=\"chem\">0.5</span> 回転の一定の速さで回転し、その光線は海岸上の点 <i>P</i> を照らします。角 <i>OLP</i> を <span class=\"chem\">theta</span> とします。</p><p><span class=\"chem\">theta = 50°</span> の瞬間に、<i>P</i> が海岸に沿って動く速さを毎秒あたりのメートルで求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: let <span class="chem">OP = x</span>. Right-angled trigonometry gives <span class="chem">x = 800 tan theta</span>. You know <span class="chem">d theta/dt</span> from the rotation and want <span class="chem">dx/dt</span>.
        "解読：<span class=\"chem\">OP = x</span> とおきます。直角三角形の三角比から <span class=\"chem\">x = 800 tan theta</span> です。回転から <span class=\"chem\">d theta/dt</span> がわかり、<span class=\"chem\">dx/dt</span> を求めます。",
        // EN: <span class="chem">0.5</span> revolutions per minute is <span class="chem">pi</span> radians per minute, which is <span class="chem">pi/60</span> radians per second.
        "毎分 <span class=\"chem\">0.5</span> 回転は毎分 <span class=\"chem\">pi</span> ラジアン、すなわち毎秒 <span class=\"chem\">pi/60</span> ラジアンです。",
        // EN: <span class="chem">dx/dt = 800 sec^2 theta (d theta/dt)</span>. Convert <span class="chem">50°</span> to radians (or use degree mode only for <span class="chem">sec^2 50°</span>, not for the rate).
        "<span class=\"chem\">dx/dt = 800 sec^2 theta (d theta/dt)</span>。<span class=\"chem\">50°</span> をラジアンに直します（または度モードは <span class=\"chem\">sec^2 50°</span> の計算だけに使い、変化率には使いません）。",
      ],
      // EN: <p>Decode: <span class="chem">x = 800 tan theta</span> links the position of <i>P</i> to the angle. <span class="chem">d theta/dt = 2pi × 0.5 / 60 = pi/60</span> <span class="unit">rad s-1</span>. Then <span class="chem">dx/dt = 800 sec^2 theta (d theta/dt) = 800 × 2.42027… × pi/60 = 101</span> <span class="unit">m s-1</span> (3 s.f.).</p>
      solution: "<p>解読：<span class=\"chem\">x = 800 tan theta</span> が <i>P</i> の位置と角を結びつけます。<span class=\"chem\">d theta/dt = 2pi × 0.5 / 60 = pi/60</span> <span class=\"unit\">rad s-1</span>。よって <span class=\"chem\">dx/dt = 800 sec^2 theta (d theta/dt) = 800 × 2.42027… × pi/60 = 101</span> <span class=\"unit\">m s-1</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-3-q036 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q036": {
      // EN: <p>Use integration by parts to find <span class="chem">int ln x dx</span>. Hence find the value of <i>k</i>, where <span class="chem">k &gt; 1</span>, such that <span class="chem">int_1^k ln x dx = 3</span>.</p>
      stem: "<p>部分積分法を用いて <span class=\"chem\">int ln x dx</span> を求めなさい (Find)。これを用いて (Hence)、<span class=\"chem\">int_1^k ln x dx = 3</span> となる <i>k</i>（<span class=\"chem\">k &gt; 1</span>）の値を求めなさい (find)。</p>",
      hints: [
        // EN: Write <span class="chem">ln x = 1 × ln x</span> and take <span class="chem">u = ln x</span>, <span class="chem">dv/dx = 1</span>.
        "<span class=\"chem\">ln x = 1 × ln x</span> と書き、<span class=\"chem\">u = ln x</span>、<span class=\"chem\">dv/dx = 1</span> とおきます。",
        // EN: You should get <span class="chem">int ln x dx = x ln x - x + C</span>, so <span class="chem">int_1^k ln x dx = k ln k - k + 1</span>.
        "<span class=\"chem\">int ln x dx = x ln x - x + C</span> が得られるはずなので、<span class=\"chem\">int_1^k ln x dx = k ln k - k + 1</span> です。",
        // EN: Solve <span class="chem">k ln k - k + 1 = 3</span> on your GDC.
        "GDC で <span class=\"chem\">k ln k - k + 1 = 3</span> を解きます。",
      ],
      // EN: <p>With <span class="chem">u = ln x</span>, <span class="chem">v = x</span>: <span class="chem">int ln x dx = x ln x - int 1 dx = x ln x - x + C</span>. So <span class="chem">int_1^k ln x dx = k ln k - k + 1 = 3</span>, and a GDC gives <span class="chem">k = 4.32</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">u = ln x</span>、<span class=\"chem\">v = x</span> とすると：<span class=\"chem\">int ln x dx = x ln x - int 1 dx = x ln x - x + C</span>。よって <span class=\"chem\">int_1^k ln x dx = k ln k - k + 1 = 3</span> となり、GDC により <span class=\"chem\">k = 4.32</span>（有効数字 3 桁）です。</p>",
    },

    // ── t5-3-q037 · numeric · challenge · AHL · AHL 5.16 · 7 marks
    "t5-3-q037": {
      // EN: <p>A plot of land is modelled by the region between the curve <span class="chem">y = x e^{-x}</span>, the <i>x</i>-axis and the line <span class="chem">x = 4</span>. A straight fence along the line <span class="chem">x = a</span> divides the plot into two parts of equal area. Find the value of <i>a</i>.</p>
      stem: "<p>ある土地が、曲線 <span class=\"chem\">y = x e^{-x}</span>、<i>x</i> 軸、直線 <span class=\"chem\">x = 4</span> で囲まれた領域でモデル化されています。直線 <span class=\"chem\">x = a</span> に沿ったまっすぐなフェンスが、この土地を面積の等しい 2 つの部分に分けます。<i>a</i> の値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: "two parts of equal area" means <span class="chem">int_0^a x e^{-x} dx = (1/2) int_0^4 x e^{-x} dx</span>. The unknown is a limit of integration.
        "解読：「面積の等しい 2 つの部分」は <span class=\"chem\">int_0^a x e^{-x} dx = (1/2) int_0^4 x e^{-x} dx</span> を意味します。未知数は積分の端の値です。",
        // EN: Integrate by parts: <span class="chem">int x e^{-x} dx = -x e^{-x} - e^{-x} + C</span>, so <span class="chem">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>.
        "部分積分を行います：<span class=\"chem\">int x e^{-x} dx = -x e^{-x} - e^{-x} + C</span> なので、<span class=\"chem\">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span> です。",
        // EN: The whole area is <span class="chem">1 - 5e^{-4} = 0.90842…</span>. Solve <span class="chem">1 - (a + 1)e^{-a} = 0.45421…</span> on your GDC.
        "全体の面積は <span class=\"chem\">1 - 5e^{-4} = 0.90842…</span> です。GDC で <span class=\"chem\">1 - (a + 1)e^{-a} = 0.45421…</span> を解きます。",
      ],
      // EN: <p>Decode: equal areas turn into an equation whose unknown is the upper limit <i>a</i>. By parts, <span class="chem">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>. The total area is <span class="chem">1 - 5e^{-4} = 0.908421…</span>, so solve <span class="chem">1 - (a + 1)e^{-a} = 0.454210…</span>: <span class="chem">a = 1.54</span> (3 s.f.).</p>
      solution: "<p>解読：面積が等しいという条件は、上端 <i>a</i> を未知数とする方程式になります。部分積分により <span class=\"chem\">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>。全体の面積は <span class=\"chem\">1 - 5e^{-4} = 0.908421…</span> なので、<span class=\"chem\">1 - (a + 1)e^{-a} = 0.454210…</span> を解きます：<span class=\"chem\">a = 1.54</span>（有効数字 3 桁）。</p>",
    },

    // ── t5-3-q038 · numeric · exam · AHL · AHL 5.17 · 5 marks
    "t5-3-q038": {
      // EN: <p>The curve <span class="chem">x = 4 - y^2 - e^{0.5y}</span> and the <i>y</i>-axis enclose a region. Find the area of this region.</p>
      stem: "<p>曲線 <span class=\"chem\">x = 4 - y^2 - e^{0.5y}</span> と <i>y</i> 軸は 1 つの領域を囲みます。この領域の面積を求めなさい (Find)。</p>",
      hints: [
        // EN: The curve meets the <i>y</i>-axis where <span class="chem">x = 0</span>: solve <span class="chem">4 - y^2 - e^{0.5y} = 0</span> on your GDC (two roots).
        "曲線は <span class=\"chem\">x = 0</span> のところで <i>y</i> 軸と交わります：GDC で <span class=\"chem\">4 - y^2 - e^{0.5y} = 0</span> を解きます（解は 2 つ）。",
        // EN: Between these roots the curve is to the right of the <i>y</i>-axis, so the area is <span class="chem">int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy</span>.
        "2 つの解の間では曲線は <i>y</i> 軸の右側にあるので、面積は <span class=\"chem\">int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy</span> です。",
      ],
      // EN: <p>GDC: <span class="chem">4 - y^2 - e^{0.5y} = 0</span> at <span class="chem">y_1 = -1.90090…</span> and <span class="chem">y_2 = 1.40688…</span>. Area <span class="chem">= int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy = 6.75</span> (3 s.f.).</p>
      solution: "<p>GDC：<span class=\"chem\">4 - y^2 - e^{0.5y} = 0</span> となるのは <span class=\"chem\">y_1 = -1.90090…</span> と <span class=\"chem\">y_2 = 1.40688…</span>。面積 <span class=\"chem\">= int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy = 6.75</span>（有効数字 3 桁）。</p>",
    },

    // ── t5-3-q039 · numeric · challenge · AHL · AHL 5.14 · 7 marks
    "t5-3-q039": {
      // EN: <p>A rectangle has one vertex at the origin, two sides along the positive <i>x</i>- and <i>y</i>-axes, and the opposite vertex <span class="chem">(x, y)</span> on the curve <span class="chem">x^2 + 2y^3 + y = 30</span>, with <span class="chem">x, y &gt; 0</span>. Find the maximum possible area of the rectangle.</p>
      stem: "<p>ある長方形は、1 つの頂点が原点にあり、2 辺が <i>x</i> 軸と <i>y</i> 軸の正の部分に沿っていて、向かい合う頂点 <span class=\"chem\">(x, y)</span> が曲線 <span class=\"chem\">x^2 + 2y^3 + y = 30</span> 上にあります（<span class=\"chem\">x, y &gt; 0</span>）。この長方形の面積の最大値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is optimisation with an implicit constraint. Maximise <span class="chem">A = xy</span>, treating <i>y</i> as a function of <i>x</i> defined by the curve.
        "解読：これは陰関数で表された条件のもとでの最大・最小問題です。<i>y</i> を曲線で定まる <i>x</i> の関数とみなして、<span class=\"chem\">A = xy</span> を最大化します。",
        // EN: Differentiating the curve: <span class="chem">2x + (6y^2 + 1)(dy/dx) = 0 => dy/dx = -2x/(6y^2 + 1)</span>. Then <span class="chem">dA/dx = y + x (dy/dx)</span>.
        "曲線の式を微分すると：<span class=\"chem\">2x + (6y^2 + 1)(dy/dx) = 0 => dy/dx = -2x/(6y^2 + 1)</span>。そして <span class=\"chem\">dA/dx = y + x (dy/dx)</span> です。",
        // EN: <span class="chem">dA/dx = 0</span> gives <span class="chem">2x^2 = y(6y^2 + 1)</span>. Substitute <span class="chem">x^2 = 3y^3 + y/2</span> into the curve: <span class="chem">5y^3 + 1.5y = 30</span>, and solve on your GDC.
        "<span class=\"chem\">dA/dx = 0</span> から <span class=\"chem\">2x^2 = y(6y^2 + 1)</span> が得られます。<span class=\"chem\">x^2 = 3y^3 + y/2</span> を曲線の式に代入すると <span class=\"chem\">5y^3 + 1.5y = 30</span> となるので、GDC で解きます。",
      ],
      // EN: <p>Decode: maximise <span class="chem">A = xy</span> subject to the curve. <span class="chem">dA/dx = y - 2x^2/(6y^2 + 1) = 0 => x^2 = 3y^3 + y/2</span>. Then <span class="chem">3y^3 + y/2 + 2y^3 + y = 30 => 5y^3 + 1.5y - 30 = 0 => y = 1.76211…</span>, <span class="chem">x = sqrt(3y^3 + y/2) = 4.15874…</span>. The area is <span class="chem">A = xy = 7.31</span> (3 s.f.); it is a maximum because <span class="chem">A -> 0</span> at both ends of the arc.</p>
      solution: "<p>解読：曲線の条件のもとで <span class=\"chem\">A = xy</span> を最大化します。<span class=\"chem\">dA/dx = y - 2x^2/(6y^2 + 1) = 0 => x^2 = 3y^3 + y/2</span>。すると <span class=\"chem\">3y^3 + y/2 + 2y^3 + y = 30 => 5y^3 + 1.5y - 30 = 0 => y = 1.76211…</span>、<span class=\"chem\">x = sqrt(3y^3 + y/2) = 4.15874…</span>。面積は <span class=\"chem\">A = xy = 7.31</span>（有効数字 3 桁）です。弧の両端で <span class=\"chem\">A -> 0</span> なので、これは最大値です。</p>",
    },

    // ── t5-3-q040 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q040": {
      // EN: <p>At 12:00, car <i>A</i> is at a junction <i>O</i> and car <i>B</i> is <span class="unit">30 km</span> due east of <i>O</i>. Car <i>A</i> drives due north at <span class="unit">60 km h-1</span> and car <i>B</i> drives due west, towards <i>O</i>, at <span class="unit">80 km h-1</span>. Find the rate at which the distance between the cars is changing at 12:15.</p>
      stem: "<p>12:00 に、車 <i>A</i> は交差点 <i>O</i> にあり、車 <i>B</i> は <i>O</i> の真東 <span class=\"unit\">30 km</span> の地点にあります。車 <i>A</i> は <span class=\"unit\">60 km h-1</span> で真北に進み、車 <i>B</i> は <span class=\"unit\">80 km h-1</span> で真西に（<i>O</i> に向かって）進みます。12:15 における 2 台の車の間の距離の変化率を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: write both positions in terms of the time <i>t</i> hours after 12:00. 12:15 is <span class="chem">t = 0.25</span>, not 15.
        "解読：2 台の位置を 12:00 から <i>t</i> 時間後の時刻で表します。12:15 は <span class=\"chem\">t = 0.25</span> であり、15 ではありません。",
        // EN: After <i>t</i> hours, <i>A</i> is <span class="chem">60t</span> north of <i>O</i> and <i>B</i> is <span class="chem">30 - 80t</span> east of <i>O</i>, so <span class="chem">D^2 = (60t)^2 + (30 - 80t)^2</span>.
        "<i>t</i> 時間後、<i>A</i> は <i>O</i> の北 <span class=\"chem\">60t</span>、<i>B</i> は <i>O</i> の東 <span class=\"chem\">30 - 80t</span> にあるので、<span class=\"chem\">D^2 = (60t)^2 + (30 - 80t)^2</span> です。",
        // EN: Differentiate: <span class="chem">2D (dD/dt) = 7200t - 160(30 - 80t)</span>, then substitute <span class="chem">t = 0.25</span>.
        "微分します：<span class=\"chem\">2D (dD/dt) = 7200t - 160(30 - 80t)</span>。そして <span class=\"chem\">t = 0.25</span> を代入します。",
      ],
      // EN: <p>Decode: measure time in hours from 12:00. <span class="chem">D^2 = 3600t^2 + (30 - 80t)^2</span>. At <span class="chem">t = 0.25</span>: <span class="chem">D = sqrt(225 + 100) = 18.0277…</span> and <span class="chem">2D (dD/dt) = 7200(0.25) - 160(10) = 200</span>, so <span class="chem">dD/dt = 100/18.0277… = 5.55</span> <span class="unit">km h-1</span> (3 s.f.). The distance is increasing.</p>
      solution: "<p>解読：時間は 12:00 からの時間（単位：時間）で測ります。<span class=\"chem\">D^2 = 3600t^2 + (30 - 80t)^2</span>。<span class=\"chem\">t = 0.25</span> のとき：<span class=\"chem\">D = sqrt(225 + 100) = 18.0277…</span>、<span class=\"chem\">2D (dD/dt) = 7200(0.25) - 160(10) = 200</span> なので、<span class=\"chem\">dD/dt = 100/18.0277… = 5.55</span> <span class=\"unit\">km h-1</span>（有効数字 3 桁）。距離は増加しています。</p>",
    },

    // ── t5-3-q041 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q041": {
      // EN: <p>A point moves along the curve <span class="chem">y = x^2 e^{-x}</span> so that its <i>x</i>-coordinate increases at a constant <span class="chem">0.3</span> units per second. Find the rate at which the distance of the point from the origin is changing when <span class="chem">x = 2.5</span>.</p>
      stem: "<p>点が曲線 <span class=\"chem\">y = x^2 e^{-x}</span> 上を、<i>x</i> 座標が毎秒 <span class=\"chem\">0.3</span> 単位の一定の割合で増加するように動きます。<span class=\"chem\">x = 2.5</span> のとき、点と原点との距離の変化率を求めなさい (Find)。</p>",
      hints: [
        // EN: Write the distance as a function of <i>x</i> only: <span class="chem">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>.
        "距離を <i>x</i> だけの関数で表します：<span class=\"chem\">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>。",
        // EN: By the chain rule, <span class="chem">dD/dt = (dD/dx)(dx/dt) = 0.3 D'(x)</span>. Find <span class="chem">D'(2.5)</span> with your GDC (or differentiate by hand).
        "合成関数の微分法により <span class=\"chem\">dD/dt = (dD/dx)(dx/dt) = 0.3 D'(x)</span>。GDC で <span class=\"chem\">D'(2.5)</span> を求めます（手計算で微分してもかまいません）。",
      ],
      // EN: <p><span class="chem">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>. GDC: <span class="chem">D'(2.5) = 0.958960…</span>. So <span class="chem">dD/dt = 0.3 × 0.958960… = 0.288</span> units per second (3 s.f.).</p>
      solution: "<p><span class=\"chem\">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>。GDC：<span class=\"chem\">D'(2.5) = 0.958960…</span>。よって <span class=\"chem\">dD/dt = 0.3 × 0.958960… = 0.288</span> 単位毎秒（有効数字 3 桁）です。</p>",
      // EN: units s-1
      unit: "単位 s-1",
    },

    // ── t5-3-q042 · short · challenge · AHL · AHL 5.14, 5.17 · 11 marks
    "t5-3-q042": {
      // EN: <p>The inside of a bowl is formed by rotating the curve <span class="chem">y = x^2/4</span>, <span class="chem">0 &lt;= y &lt;= 8</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis (lengths in cm). The bowl is empty at <span class="chem">t = 0</span>. Water then flows in at a rate of <span class="chem">30 e^{-0.1t}</span> <span class="unit">cm3 s-1</span>, where <i>t</i> is in seconds.</p><p>(a) Show that, when the water is <i>h</i> cm deep, its volume is <span class="chem">V = 2 pi h^2</span>. <strong>[2 marks]</strong></p><p>(b) Find the depth of the water when <span class="chem">t = 5</span>. <strong>[3 marks]</strong></p><p>(c) Find the rate at which the depth is increasing when <span class="chem">t = 5</span>. <strong>[3 marks]</strong></p><p>(d) Determine whether the bowl will ever be full. Justify your answer. <strong>[3 marks]</strong></p>
      stem: "<p>ある器の内側は、曲線 <span class=\"chem\">y = x^2/4</span>（<span class=\"chem\">0 &lt;= y &lt;= 8</span>）を <i>y</i> 軸の周りに <span class=\"chem\">2pi</span> ラジアン回転させた形です（長さの単位は cm）。<span class=\"chem\">t = 0</span> で器は空です。その後、水が <span class=\"chem\">30 e^{-0.1t}</span> <span class=\"unit\">cm3 s-1</span> の割合で流れ込みます（<i>t</i> の単位は秒）。</p><p>(a) 水の深さが <i>h</i> cm のとき、その体積が <span class=\"chem\">V = 2 pi h^2</span> であることを示しなさい (Show that)。 <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">t = 5</span> のときの水の深さを求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">t = 5</span> のときに深さが増加する速さを求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(d) 器がいつか満杯になるかどうかを決定し (Determine)、その理由を示しなさい (Justify)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the inflow rate is a function of <i>t</i>, so the volume in the bowl at time <i>t</i> is the integral of the rate. Depth then comes from <span class="chem">V = 2 pi h^2</span>, and part (d) asks whether the total inflow can ever reach the capacity.
        "解読：流入の割合は <i>t</i> の関数なので、時刻 <i>t</i> における器の水の体積はその割合の積分です。深さは <span class=\"chem\">V = 2 pi h^2</span> から求まり、(d) は流入の総量が容積に達しうるかどうかを問うています。",
        // EN: For (a), the rotation is about the <i>y</i>-axis: <span class="chem">V = pi int_0^h x^2 dy</span> with <span class="chem">x^2 = 4y</span>.
        "(a) では、回転軸は <i>y</i> 軸です：<span class=\"chem\">x^2 = 4y</span> として <span class=\"chem\">V = pi int_0^h x^2 dy</span>。",
        // EN: For (b), <span class="chem">V(5) = int_0^5 30 e^{-0.1t} dt</span>, then solve <span class="chem">2 pi h^2 = V(5)</span>.
        "(b) では <span class=\"chem\">V(5) = int_0^5 30 e^{-0.1t} dt</span> を求め、<span class=\"chem\">2 pi h^2 = V(5)</span> を解きます。",
        // EN: For (c), <span class="chem">dV/dt</span> at <span class="chem">t = 5</span> is just the inflow rate then; divide by <span class="chem">dV/dh = 4 pi h</span>. For (d), the total inflow <span class="chem">300(1 - e^{-0.1t})</span> never reaches 300.
        "(c) では、<span class=\"chem\">t = 5</span> における <span class=\"chem\">dV/dt</span> はそのときの流入の割合そのものです。それを <span class=\"chem\">dV/dh = 4 pi h</span> で割ります。(d) では、流入の総量 <span class=\"chem\">300(1 - e^{-0.1t})</span> は決して 300 に達しません。",
      ],
      // EN: <p>Decode: integrate the inflow rate to get volume, convert volume to depth with the volume of revolution, and compare the limiting inflow with the capacity. (b) <span class="chem">h = 4.33</span> cm. (c) <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>. (d) At most <span class="unit">300 cm3</span> ever flows in, less than the <span class="unit">402 cm3</span> capacity, so the bowl is never full.</p>
      solution: "<p>解読：流入の割合を積分して体積を求め、回転体の体積を使って体積を深さに直し、流入量の極限と容積を比べます。(b) <span class=\"chem\">h = 4.33</span> cm。(c) <span class=\"chem\">dh/dt = 0.334</span> <span class=\"unit\">cm s-1</span>。(d) 流れ込む水は最大でも <span class=\"unit\">300 cm3</span> で、容積 <span class=\"unit\">402 cm3</span> より少ないので、器は決して満杯になりません。</p>",
      // EN: <p>(a) <span class="chem">x^2 = 4y</span>, so <span class="chem">V = pi int_0^h 4y dy = 2 pi h^2</span>.</p><p>(b) <span class="chem">V(5) = int_0^5 30e^{-0.1t} dt = 300(1 - e^{-0.5}) = 118.04…</span>, so <span class="chem">h = sqrt(118.04…/(2pi)) = 4.33</span> cm.</p><p>(c) <span class="chem">dV/dt = 30e^{-0.5} = 18.196…</span> and <span class="chem">dV/dh = 4 pi h = 54.466…</span>, so <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>.</p><p>(d) The total volume that ever flows in is <span class="chem">int_0^T 30e^{-0.1t} dt = 300(1 - e^{-0.1T}) &lt; 300</span>. A full bowl holds <span class="chem">2 pi (8)^2 = 402</span> <span class="unit">cm3</span>, so the bowl is never full (the depth stays below <span class="chem">sqrt(300/(2pi)) = 6.91</span> cm).</p>
      answer: "<p>(a) <span class=\"chem\">x^2 = 4y</span> なので <span class=\"chem\">V = pi int_0^h 4y dy = 2 pi h^2</span>。</p><p>(b) <span class=\"chem\">V(5) = int_0^5 30e^{-0.1t} dt = 300(1 - e^{-0.5}) = 118.04…</span> なので <span class=\"chem\">h = sqrt(118.04…/(2pi)) = 4.33</span> cm。</p><p>(c) <span class=\"chem\">dV/dt = 30e^{-0.5} = 18.196…</span>、<span class=\"chem\">dV/dh = 4 pi h = 54.466…</span> なので <span class=\"chem\">dh/dt = 0.334</span> <span class=\"unit\">cm s-1</span>。</p><p>(d) 流れ込む水の総体積は <span class=\"chem\">int_0^T 30e^{-0.1t} dt = 300(1 - e^{-0.1T}) &lt; 300</span>。満杯の器には <span class=\"chem\">2 pi (8)^2 = 402</span> <span class=\"unit\">cm3</span> 入るので、器は決して満杯にならない（深さは常に <span class=\"chem\">sqrt(300/(2pi)) = 6.91</span> cm 未満）。</p>",
      markscheme: [
        // EN: M1: <span class="chem">V = pi int_0^h x^2 dy</span> with <span class="chem">x^2 = 4y</span>.
        "M1：<span class=\"chem\">x^2 = 4y</span> として <span class=\"chem\">V = pi int_0^h x^2 dy</span>。",
        // EN: A1: <span class="chem">pi [2y^2]_0^h</span>, leading to <span class="chem">V = 2 pi h^2</span> AG (no mark for the given line).
        "A1：<span class=\"chem\">pi [2y^2]_0^h</span> が書かれており、<span class=\"chem\">V = 2 pi h^2</span> に至っている AG（与えられた式そのものには点を与えない）。",
        // EN: M1: volume at <span class="chem">t = 5</span> is <span class="chem">int_0^5 30 e^{-0.1t} dt</span>.
        "M1：<span class=\"chem\">t = 5</span> での体積は <span class=\"chem\">int_0^5 30 e^{-0.1t} dt</span>。",
        // EN: A1: <span class="chem">118.04…</span> <span class="unit">cm3</span>.
        "A1：<span class=\"chem\">118.04…</span> <span class=\"unit\">cm3</span>。",
        // EN: A1: <span class="chem">h = 4.33</span> cm.
        "A1：<span class=\"chem\">h = 4.33</span> cm。",
        // EN: M1: <span class="chem">dh/dt = (dV/dt)/(dV/dh)</span> with <span class="chem">dV/dh = 4 pi h</span>.
        "M1：<span class=\"chem\">dV/dh = 4 pi h</span> として <span class=\"chem\">dh/dt = (dV/dt)/(dV/dh)</span>。",
        // EN: A1: <span class="chem">dV/dt = 30e^{-0.5} = 18.196…</span> at <span class="chem">t = 5</span>.
        "A1：<span class=\"chem\">t = 5</span> で <span class=\"chem\">dV/dt = 30e^{-0.5} = 18.196…</span>。",
        // EN: A1: <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>.
        "A1：<span class=\"chem\">dh/dt = 0.334</span> <span class=\"unit\">cm s-1</span>。",
        // EN: M1: considers the total inflow as <span class="chem">t</span> increases: <span class="chem">300(1 - e^{-0.1t}) &lt; 300</span>.
        "M1：<span class=\"chem\">t</span> が増加するときの流入の総量を考えている：<span class=\"chem\">300(1 - e^{-0.1t}) &lt; 300</span>。",
        // EN: A1: capacity <span class="chem">2 pi × 64 = 402</span> <span class="unit">cm3</span>.
        "A1：容積 <span class=\"chem\">2 pi × 64 = 402</span> <span class=\"unit\">cm3</span>。",
        // EN: R1: <span class="chem">300 &lt; 402</span>, so the bowl is never full.
        "R1：<span class=\"chem\">300 &lt; 402</span> なので、器は決して満杯にならない。",
      ],
    },

    // ── t5-3-q043 · short · exam · AHL · AHL 5.16 · 7 marks
    "t5-3-q043": {
      // EN: <p>A particle moves in a straight line, starting from the origin at <span class="chem">t = 0</span>. Its velocity after <i>t</i> seconds is <span class="chem">v(t) = 2t e^{-0.4t}</span> <span class="unit">m s-1</span>.</p><p>(a) Use integration by parts to show that the displacement of the particle after <i>t</i> seconds is <span class="chem">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>. <strong>[4 marks]</strong></p><p>(b) Find the time at which the particle is <span class="unit">8 m</span> from the origin. <strong>[3 marks]</strong></p>
      stem: "<p>粒子が直線上を、<span class=\"chem\">t = 0</span> に原点から出発して動きます。<i>t</i> 秒後の速度は <span class=\"chem\">v(t) = 2t e^{-0.4t}</span> <span class=\"unit\">m s-1</span> です。</p><p>(a) 部分積分法を用いて、<i>t</i> 秒後の粒子の変位が <span class=\"chem\">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span> であることを示しなさい (Show that)。 <strong>[4 marks]</strong></p><p>(b) 粒子が原点から <span class=\"unit\">8 m</span> の位置にある時刻を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: For (a), take <span class="chem">u = 2t</span> and <span class="chem">dv/dt = e^{-0.4t}</span>, so <span class="chem">v = -2.5 e^{-0.4t}</span>. Find the constant from <span class="chem">s(0) = 0</span>.
        "(a) では <span class=\"chem\">u = 2t</span>、<span class=\"chem\">dv/dt = e^{-0.4t}</span> とおくと <span class=\"chem\">v = -2.5 e^{-0.4t}</span> です。定数は <span class=\"chem\">s(0) = 0</span> から求めます。",
        // EN: For (b), check that the particle never changes direction, then solve <span class="chem">s(t) = 8</span> on your GDC.
        "(b) では、粒子が一度も向きを変えないことを確認してから、GDC で <span class=\"chem\">s(t) = 8</span> を解きます。",
      ],
      // EN: <p>(a) Parts gives <span class="chem">s(t) = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span> with <span class="chem">C = 12.5</span>. (b) <span class="chem">t = 5.44</span> s (3 s.f.).</p>
      solution: "<p>(a) 部分積分により <span class=\"chem\">s(t) = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span>、ただし <span class=\"chem\">C = 12.5</span>。(b) <span class=\"chem\">t = 5.44</span> s（有効数字 3 桁）。</p>",
      // EN: <p>(a) With <span class="chem">u = 2t</span>, <span class="chem">dv/dt = e^{-0.4t}</span>: <span class="chem">int 2t e^{-0.4t} dt = -5t e^{-0.4t} + int 5e^{-0.4t} dt = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span>. Since <span class="chem">s(0) = 0</span>, <span class="chem">C = 12.5</span>, so <span class="chem">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>.</p><p>(b) <span class="chem">v &gt; 0</span> for <span class="chem">t &gt; 0</span>, so the distance from the origin is <span class="chem">s(t)</span>. Solve <span class="chem">12.5 - (5t + 12.5)e^{-0.4t} = 8</span> on a GDC: <span class="chem">t = 5.44</span> s.</p>
      answer: "<p>(a) <span class=\"chem\">u = 2t</span>、<span class=\"chem\">dv/dt = e^{-0.4t}</span> とすると：<span class=\"chem\">int 2t e^{-0.4t} dt = -5t e^{-0.4t} + int 5e^{-0.4t} dt = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span>。<span class=\"chem\">s(0) = 0</span> より <span class=\"chem\">C = 12.5</span> なので、<span class=\"chem\">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>。</p><p>(b) <span class=\"chem\">t &gt; 0</span> で <span class=\"chem\">v &gt; 0</span> なので、原点からの距離は <span class=\"chem\">s(t)</span> である。GDC で <span class=\"chem\">12.5 - (5t + 12.5)e^{-0.4t} = 8</span> を解くと：<span class=\"chem\">t = 5.44</span> s。</p>",
      markscheme: [
        // EN: M1: integration by parts with <span class="chem">u = 2t</span> and <span class="chem">dv/dt = e^{-0.4t}</span> (so <span class="chem">v = -2.5e^{-0.4t}</span>).
        "M1：<span class=\"chem\">u = 2t</span>、<span class=\"chem\">dv/dt = e^{-0.4t}</span>（よって <span class=\"chem\">v = -2.5e^{-0.4t}</span>）として部分積分を行っている。",
        // EN: A1: <span class="chem">-5t e^{-0.4t} + int 5e^{-0.4t} dt</span>.
        "A1：<span class=\"chem\">-5t e^{-0.4t} + int 5e^{-0.4t} dt</span>。",
        // EN: A1: <span class="chem">-5t e^{-0.4t} - 12.5 e^{-0.4t} + C</span>.
        "A1：<span class=\"chem\">-5t e^{-0.4t} - 12.5 e^{-0.4t} + C</span>。",
        // EN: M1: uses <span class="chem">s(0) = 0</span> to find <span class="chem">C = 12.5</span>, leading to the given result AG (no mark for the given line).
        "M1：<span class=\"chem\">s(0) = 0</span> を用いて <span class=\"chem\">C = 12.5</span> を求め、与えられた結果に至っている AG（与えられた式そのものには点を与えない）。",
        // EN: R1: notes that <span class="chem">v &gt; 0</span>, so the particle never turns and its distance from the origin is <span class="chem">s(t)</span>.
        "R1：<span class=\"chem\">v &gt; 0</span> なので粒子は折り返さず、原点からの距離は <span class=\"chem\">s(t)</span> であることを述べている。",
        // EN: M1: solves <span class="chem">s(t) = 8</span> with a GDC.
        "M1：GDC で <span class=\"chem\">s(t) = 8</span> を解いている。",
        // EN: A1: <span class="chem">t = 5.44</span> s.
        "A1：<span class=\"chem\">t = 5.44</span> s。",
      ],
    },

    // ── t5-3-q044 · numeric · exam · AHL · AHL 5.17 · 6 marks
    "t5-3-q044": {
      // EN: <p>The inside of a vase is formed by rotating the curve <span class="chem">x = 3 + 0.5 sin(0.8y)</span>, <span class="chem">0 &lt;= y &lt;= 12</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis, where lengths are in centimetres and the base of the vase is at <span class="chem">y = 0</span>. Water is poured into the empty vase until it holds <span class="unit">250 cm3</span>. Find the depth of the water.</p>
      stem: "<p>ある花瓶の内側は、曲線 <span class=\"chem\">x = 3 + 0.5 sin(0.8y)</span>（<span class=\"chem\">0 &lt;= y &lt;= 12</span>）を <i>y</i> 軸の周りに <span class=\"chem\">2pi</span> ラジアン回転させた形です。長さの単位はセンチメートルで、花瓶の底は <span class=\"chem\">y = 0</span> にあります。空の花瓶に、水が <span class=\"unit\">250 cm3</span> になるまで注ぎます。水の深さを求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: the volume of water of depth <i>h</i> is a volume of revolution about the <i>y</i>-axis with upper limit <i>h</i>: <span class="chem">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>.
        "解読：深さ <i>h</i> の水の体積は、上端を <i>h</i> とする <i>y</i> 軸の周りの回転体の体積です：<span class=\"chem\">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>。",
        // EN: Solve <span class="chem">V(h) = 250</span> on your GDC, for example by graphing <span class="chem">V(h)</span> as a function of <i>h</i> and intersecting with 250.
        "GDC で <span class=\"chem\">V(h) = 250</span> を解きます。たとえば <span class=\"chem\">V(h)</span> を <i>h</i> の関数としてグラフにかき、250 との交点を求めます。",
        // EN: Check that your answer is less than 12 (the vase holds about <span class="unit">367 cm3</span> when full).
        "答えが 12 より小さいことを確認します（花瓶は満杯で約 <span class=\"unit\">367 cm3</span> 入ります）。",
      ],
      // EN: <p>Decode: the depth is the upper limit of the volume integral. <span class="chem">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>. GDC: <span class="chem">V(h) = 250 => h = 8.65</span> cm (3 s.f.). This is below the full height 12 cm (full volume <span class="chem">367</span> <span class="unit">cm3</span>).</p>
      solution: "<p>解読：深さは体積の積分の上端です。<span class=\"chem\">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>。GDC：<span class=\"chem\">V(h) = 250 => h = 8.65</span> cm（有効数字 3 桁）。これは花瓶の高さ 12 cm より低い値です（満杯時の体積は <span class=\"chem\">367</span> <span class=\"unit\">cm3</span>）。</p>",
    },

    // ── t5-3-q045 · short · challenge · AHL · AHL 5.14 · 8 marks
    "t5-3-q045": {
      // EN: <p>The curve <i>C</i> has equation <span class="chem">e^{xy} + y^2 = 5</span>. The line <span class="chem">x = 0.5</span> meets <i>C</i> at a point <i>P</i> with positive <i>y</i>-coordinate.</p><p>(a) Find the <i>y</i>-coordinate of <i>P</i>. <strong>[2 marks]</strong></p><p>(b) Find the gradient of <i>C</i> at <i>P</i>. <strong>[4 marks]</strong></p><p>(c) The tangent to <i>C</i> at <i>P</i> meets the <i>x</i>-axis at <i>Q</i>. Find the <i>x</i>-coordinate of <i>Q</i>. <strong>[2 marks]</strong></p>
      stem: "<p>曲線 <i>C</i> の方程式は <span class=\"chem\">e^{xy} + y^2 = 5</span> です。直線 <span class=\"chem\">x = 0.5</span> は <i>C</i> と、<i>y</i> 座標が正の点 <i>P</i> で交わります。</p><p>(a) <i>P</i> の <i>y</i> 座標を求めなさい (Find)。 <strong>[2 marks]</strong></p><p>(b) <i>P</i> における <i>C</i> の傾きを求めなさい (Find)。 <strong>[4 marks]</strong></p><p>(c) <i>P</i> における <i>C</i> の接線は <i>x</i> 軸と <i>Q</i> で交わります。<i>Q</i> の <i>x</i> 座標を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: <i>P</i> is not given; you must first find its <i>y</i>-coordinate numerically. Then this is an implicit gradient and a tangent line. Keep full GDC accuracy until the end.
        "解読：<i>P</i> は与えられていないので、まずその <i>y</i> 座標を数値的に求める必要があります。その後は陰関数の傾きと接線の問題です。最後まで GDC の値を丸めずに使います。",
        // EN: Differentiate <span class="chem">e^{xy}</span> with the chain rule: its derivative is <span class="chem">e^{xy}(y + x dy/dx)</span>.
        "<span class=\"chem\">e^{xy}</span> は合成関数の微分法で微分します：その導関数は <span class=\"chem\">e^{xy}(y + x dy/dx)</span> です。",
        // EN: Solve for <span class="chem">dy/dx</span>: <span class="chem">dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>, and substitute <span class="chem">x = 0.5</span> and the stored <i>y</i>.
        "<span class=\"chem\">dy/dx</span> について解きます：<span class=\"chem\">dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>。そして <span class=\"chem\">x = 0.5</span> と保存しておいた <i>y</i> の値を代入します。",
        // EN: For (c), set <span class="chem">y = 0</span> in <span class="chem">y - y_P = m(x - 0.5)</span>.
        "(c) では、<span class=\"chem\">y - y_P = m(x - 0.5)</span> で <span class=\"chem\">y = 0</span> とおきます。",
      ],
      // EN: <p>Decode: find <i>P</i> numerically, then use implicit differentiation for the gradient and the tangent. (a) <span class="chem">y_P = 1.649</span>. (b) <span class="chem">m = -0.847</span>. (c) <span class="chem">x_Q = 0.5 - y_P/m = 2.45</span>.</p>
      solution: "<p>解読：まず <i>P</i> を数値的に求め、次に陰関数の微分法で傾きと接線を求めます。(a) <span class=\"chem\">y_P = 1.649</span>。(b) <span class=\"chem\">m = -0.847</span>。(c) <span class=\"chem\">x_Q = 0.5 - y_P/m = 2.45</span>。</p>",
      // EN: <p>(a) <span class="chem">e^{0.5y} + y^2 = 5</span>; GDC gives <span class="chem">y = 1.649</span> (1.64901…).</p><p>(b) <span class="chem">e^{xy}(y + x dy/dx) + 2y dy/dx = 0 => dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>. At <i>P</i>: <span class="chem">dy/dx = -3.76099…/4.43840… = -0.847</span>.</p><p>(c) Tangent: <span class="chem">y - 1.64901… = -0.847375…(x - 0.5)</span>. Setting <span class="chem">y = 0</span>: <span class="chem">x = 0.5 + 1.64901…/0.847375… = 2.45</span>.</p>
      answer: "<p>(a) <span class=\"chem\">e^{0.5y} + y^2 = 5</span>。GDC により <span class=\"chem\">y = 1.649</span>（1.64901…）。</p><p>(b) <span class=\"chem\">e^{xy}(y + x dy/dx) + 2y dy/dx = 0 => dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>。<i>P</i> において：<span class=\"chem\">dy/dx = -3.76099…/4.43840… = -0.847</span>。</p><p>(c) 接線：<span class=\"chem\">y - 1.64901… = -0.847375…(x - 0.5)</span>。<span class=\"chem\">y = 0</span> とおくと：<span class=\"chem\">x = 0.5 + 1.64901…/0.847375… = 2.45</span>。</p>",
      markscheme: [
        // EN: M1: substitutes <span class="chem">x = 0.5</span> and solves with a GDC.
        "M1：<span class=\"chem\">x = 0.5</span> を代入し、GDC で解いている。",
        // EN: A1: <span class="chem">y = 1.65</span> (1.64901…).
        "A1：<span class=\"chem\">y = 1.65</span>（1.64901…）。",
        // EN: M1: implicit differentiation, with the chain and product rules on <span class="chem">e^{xy}</span>.
        "M1：<span class=\"chem\">e^{xy}</span> に合成関数の微分法と積の微分法を用いて、陰関数の微分を行っている。",
        // EN: A1: <span class="chem">e^{xy}(y + x dy/dx) + 2y dy/dx = 0</span>.
        "A1：<span class=\"chem\">e^{xy}(y + x dy/dx) + 2y dy/dx = 0</span>。",
        // EN: M1: substitutes the coordinates of <i>P</i> (using unrounded <i>y</i>).
        "M1：<i>P</i> の座標を（丸めていない <i>y</i> を用いて）代入している。",
        // EN: A1: <span class="chem">dy/dx = -0.847</span>.
        "A1：<span class=\"chem\">dy/dx = -0.847</span>。",
        // EN: M1: equation of the tangent, with <span class="chem">y = 0</span>.
        "M1：接線の方程式で <span class=\"chem\">y = 0</span> としている。",
        // EN: A1: <span class="chem">x = 2.45</span>.
        "A1：<span class=\"chem\">x = 2.45</span>。",
      ],
    },

    // ── t5-3-q046 · short · foundation · AHL · AHL 5.12 · 4 marks
    "t5-3-q046": {
      // EN: <p>Let <span class="chem">f(x) = 2x^2 - 5x</span>. Use differentiation from first principles to show that <span class="chem">f'(x) = 4x - 5</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = 2x^2 - 5x</span> とします。定義に従った微分を用いて、<span class=\"chem\">f'(x) = 4x - 5</span> であることを示しなさい (Show that)。</p>",
      hints: [
        // EN: Start from <span class="chem">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span>, and write <span class="chem">f(x + h)</span> out in full.
        "<span class=\"chem\">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span> から始め、<span class=\"chem\">f(x + h)</span> を省略せずに書き出します。",
        // EN: Every term without <i>h</i> cancels. Divide by <i>h</i> <strong>before</strong> you let <span class="chem">h -> 0</span>.
        "<i>h</i> を含まない項はすべて打ち消し合います。<span class=\"chem\">h -> 0</span> とする<strong>前に</strong> <i>h</i> で割ります。",
      ],
      // EN: <p><span class="chem">(f(x + h) - f(x))/h = (4xh + 2h^2 - 5h)/h = 4x + 2h - 5 -> 4x - 5</span> as <span class="chem">h -> 0</span>.</p>
      solution: "<p><span class=\"chem\">h -> 0</span> のとき <span class=\"chem\">(f(x + h) - f(x))/h = (4xh + 2h^2 - 5h)/h = 4x + 2h - 5 -> 4x - 5</span> です。</p>",
      // EN: <p><span class="chem">f(x + h) - f(x) = 2(x + h)^2 - 5(x + h) - 2x^2 + 5x = 4xh + 2h^2 - 5h</span>. So <span class="chem">f'(x) = lim_{h->0} (4xh + 2h^2 - 5h)/h = lim_{h->0} (4x + 2h - 5) = 4x - 5</span>.</p>
      answer: "<p><span class=\"chem\">f(x + h) - f(x) = 2(x + h)^2 - 5(x + h) - 2x^2 + 5x = 4xh + 2h^2 - 5h</span>。よって <span class=\"chem\">f'(x) = lim_{h->0} (4xh + 2h^2 - 5h)/h = lim_{h->0} (4x + 2h - 5) = 4x - 5</span>。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">lim_{h->0} (f(x + h) - f(x))/h</span> with <span class="chem">f(x + h) = 2(x + h)^2 - 5(x + h)</span>.
        "M1：<span class=\"chem\">f(x + h) = 2(x + h)^2 - 5(x + h)</span> として <span class=\"chem\">lim_{h->0} (f(x + h) - f(x))/h</span> を用いている。",
        // EN: A1: expands correctly: <span class="chem">2x^2 + 4xh + 2h^2 - 5x - 5h</span>.
        "A1：正しく展開している：<span class=\"chem\">2x^2 + 4xh + 2h^2 - 5x - 5h</span>。",
        // EN: A1: simplifies the numerator to <span class="chem">4xh + 2h^2 - 5h</span>.
        "A1：分子を <span class=\"chem\">4xh + 2h^2 - 5h</span> に簡単にしている。",
        // EN: A1: divides by <i>h</i> to get <span class="chem">4x + 2h - 5</span> before letting <span class="chem">h -> 0</span>, leading to <span class="chem">f'(x) = 4x - 5</span> AG (no mark for the given line).
        "A1：<span class=\"chem\">h -> 0</span> とする前に <i>h</i> で割って <span class=\"chem\">4x + 2h - 5</span> を得て、<span class=\"chem\">f'(x) = 4x - 5</span> に至っている AG（与えられた式そのものには点を与えない）。",
      ],
    },

    // ── t5-3-q047 · numeric · foundation · AHL · AHL 5.15 · 3 marks
    "t5-3-q047": {
      // EN: <p>Let <span class="chem">f(x) = sec(2x)</span>. Find the exact value of <span class="chem">f'(pi/8)</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = sec(2x)</span> とします。<span class=\"chem\">f'(pi/8)</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Use <span class="chem">d/dx sec x = sec x tan x</span> with the chain rule: <span class="chem">f'(x) = 2 sec(2x) tan(2x)</span>.
        "<span class=\"chem\">d/dx sec x = sec x tan x</span> と合成関数の微分法を用います：<span class=\"chem\">f'(x) = 2 sec(2x) tan(2x)</span>。",
        // EN: At <span class="chem">x = pi/8</span>, <span class="chem">2x = pi/4</span>, where <span class="chem">sec(pi/4) = sqrt(2)</span> and <span class="chem">tan(pi/4) = 1</span>.
        "<span class=\"chem\">x = pi/8</span> のとき <span class=\"chem\">2x = pi/4</span> で、<span class=\"chem\">sec(pi/4) = sqrt(2)</span>、<span class=\"chem\">tan(pi/4) = 1</span> です。",
      ],
      // EN: <p><span class="chem">f'(x) = 2 sec(2x) tan(2x)</span>, so <span class="chem">f'(pi/8) = 2 sec(pi/4) tan(pi/4) = 2 × sqrt(2) × 1 = 2 sqrt(2)</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 2 sec(2x) tan(2x)</span> なので、<span class=\"chem\">f'(pi/8) = 2 sec(pi/4) tan(pi/4) = 2 × sqrt(2) × 1 = 2 sqrt(2)</span> です。</p>",
    },

    // ── t5-3-q048 · numeric · exam · AHL · AHL 5.15 · 4 marks
    "t5-3-q048": {
      // EN: <p>Let <span class="chem">f(x) = x arccos x</span>, for <span class="chem">-1 &lt; x &lt; 1</span>. Find the exact value of <span class="chem">f'(1/2)</span>.</p>
      stem: "<p><span class=\"chem\">-1 &lt; x &lt; 1</span> において <span class=\"chem\">f(x) = x arccos x</span> とします。<span class=\"chem\">f'(1/2)</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Use the product rule with <span class="chem">d/dx arccos x = -1/sqrt(1 - x^2)</span>.
        "積の微分法と <span class=\"chem\">d/dx arccos x = -1/sqrt(1 - x^2)</span> を用います。",
        // EN: <span class="chem">f'(x) = arccos x - x/sqrt(1 - x^2)</span>. At <span class="chem">x = 1/2</span>, <span class="chem">arccos(1/2) = pi/3</span> and <span class="chem">sqrt(1 - 1/4) = sqrt(3)/2</span>.
        "<span class=\"chem\">f'(x) = arccos x - x/sqrt(1 - x^2)</span>。<span class=\"chem\">x = 1/2</span> のとき、<span class=\"chem\">arccos(1/2) = pi/3</span>、<span class=\"chem\">sqrt(1 - 1/4) = sqrt(3)/2</span> です。",
      ],
      // EN: <p><span class="chem">f'(x) = arccos x + x × (-1/sqrt(1 - x^2))</span>. So <span class="chem">f'(1/2) = pi/3 - (1/2)/(sqrt(3)/2) = pi/3 - 1/sqrt(3) = pi/3 - sqrt(3)/3</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = arccos x + x × (-1/sqrt(1 - x^2))</span>。よって <span class=\"chem\">f'(1/2) = pi/3 - (1/2)/(sqrt(3)/2) = pi/3 - 1/sqrt(3) = pi/3 - sqrt(3)/3</span> です。</p>",
    },

    // ── t5-3-q049 · short · exam · AHL · AHL 5.15 · 8 marks
    "t5-3-q049": {
      // EN: <p>(a) Find <span class="chem">dy/dx</span> for each of the following.</p><p>(i) <span class="chem">y = cot(3x)</span> &nbsp; (ii) <span class="chem">y = log_5 (2x - 1)</span>, <span class="chem">x &gt; 1/2</span> &nbsp; (iii) <span class="chem">y = 2^{x^2}</span> <strong>[6 marks]</strong></p><p>(b) Hence find <span class="chem">int x 2^{x^2} dx</span>. <strong>[2 marks]</strong></p>
      stem: "<p>(a) 次のそれぞれについて <span class=\"chem\">dy/dx</span> を求めなさい (Find)。</p><p>(i) <span class=\"chem\">y = cot(3x)</span> &nbsp; (ii) <span class=\"chem\">y = log_5 (2x - 1)</span>、<span class=\"chem\">x &gt; 1/2</span> &nbsp; (iii) <span class=\"chem\">y = 2^{x^2}</span> <strong>[6 marks]</strong></p><p>(b) これを用いて (Hence) <span class=\"chem\">int x 2^{x^2} dx</span> を求めなさい (find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: The formula booklet gives the derivatives of <span class="chem">cot x</span>, <span class="chem">a^x</span> and <span class="chem">log_a x</span>. In every part, multiply by the derivative of the inside function.
        "公式集には <span class=\"chem\">cot x</span>、<span class=\"chem\">a^x</span>、<span class=\"chem\">log_a x</span> の導関数が載っています。どの問いでも、内側の関数の導関数を掛けます。",
        // EN: For (ii), <span class="chem">d/dx log_a x = 1/(x ln a)</span>. For (iii), <span class="chem">d/dx a^x = a^x ln a</span>.
        "(ii) では <span class=\"chem\">d/dx log_a x = 1/(x ln a)</span>。(iii) では <span class=\"chem\">d/dx a^x = a^x ln a</span> です。",
        // EN: For (b), the integrand is (a)(iii) divided by <span class="chem">2 ln 2</span>.
        "(b) では、被積分関数は (a)(iii) の結果を <span class=\"chem\">2 ln 2</span> で割ったものです。",
      ],
      // EN: <p>(i) <span class="chem">-3 cosec^2(3x)</span>. (ii) <span class="chem">2/((2x - 1) ln 5)</span>. (iii) <span class="chem">2x ln 2 × 2^{x^2}</span>. (b) <span class="chem">2^{x^2}/(2 ln 2) + C</span>.</p>
      solution: "<p>(i) <span class=\"chem\">-3 cosec^2(3x)</span>。(ii) <span class=\"chem\">2/((2x - 1) ln 5)</span>。(iii) <span class=\"chem\">2x ln 2 × 2^{x^2}</span>。(b) <span class=\"chem\">2^{x^2}/(2 ln 2) + C</span>。</p>",
      // EN: <p>(a)(i) <span class="chem">dy/dx = -3 cosec^2(3x)</span>. (ii) <span class="chem">log_5(2x - 1) = ln(2x - 1)/ln 5</span>, so <span class="chem">dy/dx = 2/((2x - 1) ln 5)</span>. (iii) <span class="chem">dy/dx = 2^{x^2} ln 2 × 2x = 2x ln 2 × 2^{x^2}</span>.</p><p>(b) From (iii), <span class="chem">int x 2^{x^2} dx = 2^{x^2}/(2 ln 2) + C</span>.</p>
      answer: "<p>(a)(i) <span class=\"chem\">dy/dx = -3 cosec^2(3x)</span>。(ii) <span class=\"chem\">log_5(2x - 1) = ln(2x - 1)/ln 5</span> なので <span class=\"chem\">dy/dx = 2/((2x - 1) ln 5)</span>。(iii) <span class=\"chem\">dy/dx = 2^{x^2} ln 2 × 2x = 2x ln 2 × 2^{x^2}</span>。</p><p>(b) (iii) より <span class=\"chem\">int x 2^{x^2} dx = 2^{x^2}/(2 ln 2) + C</span>。</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">d/dx cot u = -cosec^2 u (du/dx)</span>.
        "M1：<span class=\"chem\">d/dx cot u = -cosec^2 u (du/dx)</span> を用いている。",
        // EN: A1: <span class="chem">-3 cosec^2(3x)</span>.
        "A1：<span class=\"chem\">-3 cosec^2(3x)</span>。",
        // EN: M1: uses <span class="chem">d/dx log_a u = (1/(u ln a))(du/dx)</span> (or the change of base to <span class="chem">ln</span>).
        "M1：<span class=\"chem\">d/dx log_a u = (1/(u ln a))(du/dx)</span>（または <span class=\"chem\">ln</span> への底の変換）を用いている。",
        // EN: A1: <span class="chem">2/((2x - 1) ln 5)</span>.
        "A1：<span class=\"chem\">2/((2x - 1) ln 5)</span>。",
        // EN: M1: uses <span class="chem">d/dx a^u = a^u ln a (du/dx)</span>.
        "M1：<span class=\"chem\">d/dx a^u = a^u ln a (du/dx)</span> を用いている。",
        // EN: A1: <span class="chem">2x ln 2 × 2^{x^2}</span>.
        "A1：<span class=\"chem\">2x ln 2 × 2^{x^2}</span>。",
        // EN: M1: reverses (a)(iii), dividing by the constant <span class="chem">2 ln 2</span>.
        "M1：(a)(iii) を逆に用い、定数 <span class=\"chem\">2 ln 2</span> で割っている。",
        // EN: A1: <span class="chem">2^{x^2}/(2 ln 2) + C</span>.
        "A1：<span class=\"chem\">2^{x^2}/(2 ln 2) + C</span>。",
      ],
    },

    // ── t5-3-q050 · numeric · exam · AHL · AHL 5.13 · 5 marks
    "t5-3-q050": {
      // EN: <p>Find the exact value of <span class="chem">lim_{x->infty} (e^x + 5x^2) / (3e^x - x^3)</span>.</p>
      stem: "<p><span class=\"chem\">lim_{x->infty} (e^x + 5x^2) / (3e^x - x^3)</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: As <span class="chem">x -> infty</span>, both numerator and denominator tend to <span class="chem">infty</span> (the exponential beats the cubic), so L’Hôpital’s rule applies.
        "<span class=\"chem\">x -> infty</span> のとき、分子も分母も <span class=\"chem\">infty</span> に発散する（指数関数は 3 次関数より速く増加する）ので、ロピタルの定理が使えます。",
        // EN: Differentiate top and bottom repeatedly: <span class="chem">(e^x + 10x)/(3e^x - 3x^2)</span>, then <span class="chem">(e^x + 10)/(3e^x - 6x)</span>, then <span class="chem">e^x/(3e^x - 6)</span>. Check the form each time.
        "分子と分母を繰り返し微分します：<span class=\"chem\">(e^x + 10x)/(3e^x - 3x^2)</span>、次に <span class=\"chem\">(e^x + 10)/(3e^x - 6x)</span>、さらに <span class=\"chem\">e^x/(3e^x - 6)</span>。毎回、形を確認しましょう。",
        // EN: Divide the last fraction through by <span class="chem">e^x</span>.
        "最後の分数の分子と分母を <span class=\"chem\">e^x</span> で割ります。",
      ],
      // EN: <p>The form is <span class="chem">infty/infty</span>. Applying L’Hôpital’s rule three times (each time <span class="chem">infty/infty</span>): <span class="chem">lim (e^x + 10x)/(3e^x - 3x^2) = lim (e^x + 10)/(3e^x - 6x) = lim e^x/(3e^x - 6) = lim 1/(3 - 6e^{-x}) = 1/3</span>.</p>
      solution: "<p>形は <span class=\"chem\">infty/infty</span> です。ロピタルの定理を 3 回適用すると（毎回 <span class=\"chem\">infty/infty</span>）：<span class=\"chem\">lim (e^x + 10x)/(3e^x - 3x^2) = lim (e^x + 10)/(3e^x - 6x) = lim e^x/(3e^x - 6) = lim 1/(3 - 6e^{-x}) = 1/3</span>。</p>",
    },

    // ── t5-3-q051 · numeric · exam · AHL · AHL 5.13 · 4 marks
    "t5-3-q051": {
      // EN: <p>Find <span class="chem">lim_{x->0} (ln(1 + 2x) - 2x) / x^2</span>.</p>
      stem: "<p><span class=\"chem\">lim_{x->0} (ln(1 + 2x) - 2x) / x^2</span> を求めなさい (Find)。</p>",
      hints: [
        // EN: Substituting <span class="chem">x = 0</span> gives <span class="chem">0/0</span>, so apply L’Hôpital’s rule.
        "<span class=\"chem\">x = 0</span> を代入すると <span class=\"chem\">0/0</span> になるので、ロピタルの定理を適用します。",
        // EN: After one step: <span class="chem">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>, still <span class="chem">0/0</span>. Apply the rule again.
        "1 回適用すると <span class=\"chem\">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span> で、まだ <span class=\"chem\">0/0</span> です。もう一度定理を適用します。",
      ],
      // EN: <p><span class="chem">0/0</span>: <span class="chem">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>, again <span class="chem">0/0</span>, so <span class="chem">= lim_{x->0} (-4/(1 + 2x)^2)/2 = -4/2 = -2</span>.</p>
      solution: "<p><span class=\"chem\">0/0</span>：<span class=\"chem\">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span> で再び <span class=\"chem\">0/0</span> なので、<span class=\"chem\">= lim_{x->0} (-4/(1 + 2x)^2)/2 = -4/2 = -2</span>。</p>",
    },

    // ── t5-3-q052 · short · exam · AHL · AHL 5.15 · 6 marks
    "t5-3-q052": {
      // EN: <p>(a) Express <span class="chem">(3x + 7)/((x + 1)(x + 3))</span> in partial fractions. <strong>[3 marks]</strong></p><p>(b) Hence find the exact value of <span class="chem">int_0^2 (3x + 7)/((x + 1)(x + 3)) dx</span>, giving your answer in the form <span class="chem">ln k</span>, where <span class="chem">k \in \mathbb{Z}</span>. <strong>[3 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">(3x + 7)/((x + 1)(x + 3))</span> を部分分数に分解しなさい (Express)。 <strong>[3 marks]</strong></p><p>(b) これを用いて (Hence)、<span class=\"chem\">int_0^2 (3x + 7)/((x + 1)(x + 3)) dx</span> の正確な値を <span class=\"chem\">ln k</span>（<span class=\"chem\">k \\in \\mathbb{Z}</span>）の形で求めなさい (find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Write <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span> and choose <span class="chem">x = -1</span> and <span class="chem">x = -3</span>.
        "<span class=\"chem\">3x + 7 = A(x + 3) + B(x + 1)</span> と書き、<span class=\"chem\">x = -1</span> と <span class=\"chem\">x = -3</span> を代入します。",
        // EN: Each partial fraction integrates to a logarithm. Combine the logarithms at the end.
        "各部分分数を積分すると対数になります。最後に対数をまとめます。",
      ],
      // EN: <p>(a) <span class="chem">2/(x + 1) + 1/(x + 3)</span>. (b) <span class="chem">[2 ln(x + 1) + ln(x + 3)]_0^2 = 2 ln 3 + ln 5 - ln 3 = ln 15</span>, so <span class="chem">k = 15</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2/(x + 1) + 1/(x + 3)</span>。(b) <span class=\"chem\">[2 ln(x + 1) + ln(x + 3)]_0^2 = 2 ln 3 + ln 5 - ln 3 = ln 15</span> なので、<span class=\"chem\">k = 15</span>。</p>",
      // EN: <p>(a) <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span>. <span class="chem">x = -1: 4 = 2A => A = 2</span>; <span class="chem">x = -3: -2 = -2B => B = 1</span>. So the integrand is <span class="chem">2/(x + 1) + 1/(x + 3)</span>.</p><p>(b) <span class="chem">[2 ln(x + 1) + ln(x + 3)]_0^2 = (2 ln 3 + ln 5) - (0 + ln 3) = ln 3 + ln 5 = ln 15</span>.</p>
      answer: "<p>(a) <span class=\"chem\">3x + 7 = A(x + 3) + B(x + 1)</span>。<span class=\"chem\">x = -1: 4 = 2A => A = 2</span>；<span class=\"chem\">x = -3: -2 = -2B => B = 1</span>。よって被積分関数は <span class=\"chem\">2/(x + 1) + 1/(x + 3)</span>。</p><p>(b) <span class=\"chem\">[2 ln(x + 1) + ln(x + 3)]_0^2 = (2 ln 3 + ln 5) - (0 + ln 3) = ln 3 + ln 5 = ln 15</span>。</p>",
      markscheme: [
        // EN: M1: writes <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span> (or equivalent).
        "M1：<span class=\"chem\">3x + 7 = A(x + 3) + B(x + 1)</span>（または同値な式）と書いている。",
        // EN: A1: <span class="chem">A = 2</span>.
        "A1：<span class=\"chem\">A = 2</span>。",
        // EN: A1: <span class="chem">B = 1</span>.
        "A1：<span class=\"chem\">B = 1</span>。",
        // EN: A1: integrates to <span class="chem">2 ln(x + 1) + ln(x + 3)</span>.
        "A1：積分して <span class=\"chem\">2 ln(x + 1) + ln(x + 3)</span> を得ている。",
        // EN: M1: substitutes both limits.
        "M1：上端と下端の両方を代入している。",
        // EN: A1: <span class="chem">ln 15</span>.
        "A1：<span class=\"chem\">ln 15</span>。",
      ],
    },

    // ── t5-3-q053 · numeric · exam · AHL · AHL 5.15, 5.16 · 5 marks
    "t5-3-q053": {
      // EN: <p>Use the substitution <span class="chem">u = e^x</span> to find the exact value of <span class="chem">int_0^{ln sqrt(3)} e^x/(1 + e^{2x}) dx</span>.</p>
      stem: "<p>置換 <span class=\"chem\">u = e^x</span> を用いて、<span class=\"chem\">int_0^{ln sqrt(3)} e^x/(1 + e^{2x}) dx</span> の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: With <span class="chem">u = e^x</span>, <span class="chem">du = e^x dx</span> and <span class="chem">e^{2x} = u^2</span>. Change the limits: <span class="chem">x = 0 -> u = 1</span>, <span class="chem">x = ln sqrt(3) -> u = sqrt(3)</span>.
        "<span class=\"chem\">u = e^x</span> とすると <span class=\"chem\">du = e^x dx</span>、<span class=\"chem\">e^{2x} = u^2</span> です。積分区間を変えます：<span class=\"chem\">x = 0 -> u = 1</span>、<span class=\"chem\">x = ln sqrt(3) -> u = sqrt(3)</span>。",
        // EN: The integral becomes <span class="chem">int_1^{sqrt(3)} 1/(1 + u^2) du</span>, a standard <span class="chem">arctan</span> integral.
        "積分は <span class=\"chem\">int_1^{sqrt(3)} 1/(1 + u^2) du</span> となり、これは標準的な <span class=\"chem\">arctan</span> の積分です。",
      ],
      // EN: <p><span class="chem">int_1^{sqrt(3)} 1/(1 + u^2) du = [arctan u]_1^{sqrt(3)} = pi/3 - pi/4 = pi/12</span>.</p>
      solution: "<p><span class=\"chem\">int_1^{sqrt(3)} 1/(1 + u^2) du = [arctan u]_1^{sqrt(3)} = pi/3 - pi/4 = pi/12</span>。</p>",
    },

    // ── t5-3-q054 · numeric · challenge · AHL · AHL 5.16, 5.17 · 7 marks
    "t5-3-q054": {
      // EN: <p>A solid ornament is made by rotating the part of the curve <span class="chem">y = x e^{x/2}</span> between <span class="chem">x = 0</span> and <span class="chem">x = 1</span> through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the exact volume of the ornament.</p>
      stem: "<p>中身の詰まった置物が、曲線 <span class=\"chem\">y = x e^{x/2}</span> の <span class=\"chem\">x = 0</span> から <span class=\"chem\">x = 1</span> までの部分を <i>x</i> 軸の周りに <span class=\"chem\">2pi</span> ラジアン回転させて作られています。置物の体積の正確な値を求めなさい (Find)。</p>",
      hints: [
        // EN: Decode: this is a volume of revolution about the <i>x</i>-axis, <span class="chem">V = pi int_0^1 y^2 dx</span>. Squaring <i>y</i> gives <span class="chem">x^2 e^x</span>, which needs integration by parts <strong>twice</strong>.
        "解読：これは <i>x</i> 軸の周りの回転体の体積 <span class=\"chem\">V = pi int_0^1 y^2 dx</span> です。<i>y</i> を 2 乗すると <span class=\"chem\">x^2 e^x</span> となり、部分積分を<strong>2 回</strong>行う必要があります。",
        // EN: First parts: <span class="chem">u = x^2</span>, <span class="chem">dv/dx = e^x</span>: <span class="chem">int x^2 e^x dx = x^2 e^x - int 2x e^x dx</span>.
        "1 回目の部分積分：<span class=\"chem\">u = x^2</span>、<span class=\"chem\">dv/dx = e^x</span>：<span class=\"chem\">int x^2 e^x dx = x^2 e^x - int 2x e^x dx</span>。",
        // EN: Second parts on <span class="chem">int 2x e^x dx</span> gives <span class="chem">2x e^x - 2e^x</span>, so <span class="chem">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>.
        "<span class=\"chem\">int 2x e^x dx</span> に 2 回目の部分積分を行うと <span class=\"chem\">2x e^x - 2e^x</span> となるので、<span class=\"chem\">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span> です。",
      ],
      // EN: <p>Decode: volume about the <i>x</i>-axis, so square <i>y</i>: <span class="chem">y^2 = x^2 e^x</span>, then repeated parts. <span class="chem">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>. So <span class="chem">V = pi [e^x(x^2 - 2x + 2)]_0^1 = pi(e - 2)</span>.</p>
      solution: "<p>解読：<i>x</i> 軸の周りの体積なので <i>y</i> を 2 乗します：<span class=\"chem\">y^2 = x^2 e^x</span>。そして部分積分を繰り返します。<span class=\"chem\">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>。よって <span class=\"chem\">V = pi [e^x(x^2 - 2x + 2)]_0^1 = pi(e - 2)</span>。</p>",
    },

    // ── t5-3-q055 · short · challenge · AHL · AHL 5.12 · 9 marks
    "t5-3-q055": {
      // EN: <p>The function <i>f</i> is defined by</p><p><span class="chem">f(x) = a x^2 + b x</span> for <span class="chem">x &lt;= 2</span>, and <span class="chem">f(x) = ln(x - 1) + 3</span> for <span class="chem">x &gt; 2</span>,</p><p>where <i>a</i> and <i>b</i> are constants. The graph of <i>f</i> has no break and no corner at <span class="chem">x = 2</span>.</p><p>(a) Find the value of <i>a</i> and the value of <i>b</i>. <strong>[6 marks]</strong></p><p>(b) Determine whether <span class="chem">f''(2)</span> exists. Justify your answer. <strong>[3 marks]</strong></p>
      stem: "<p>関数 <i>f</i> は次のように定義されています。</p><p><span class=\"chem\">x &lt;= 2</span> のとき <span class=\"chem\">f(x) = a x^2 + b x</span>、<span class=\"chem\">x &gt; 2</span> のとき <span class=\"chem\">f(x) = ln(x - 1) + 3</span></p><p>ただし <i>a</i>、<i>b</i> は定数です。<i>f</i> のグラフは <span class=\"chem\">x = 2</span> で途切れておらず、角もありません。</p><p>(a) <i>a</i> の値と <i>b</i> の値を求めなさい (Find)。 <strong>[6 marks]</strong></p><p>(b) <span class=\"chem\">f''(2)</span> が存在するかどうかを決定し (Determine)、その理由を示しなさい (Justify)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "no break" is the condition for continuity and "no corner" is the condition for differentiability at <span class="chem">x = 2</span>. Each gives one equation in <i>a</i> and <i>b</i>. Part (b) asks the same question about <span class="chem">f'</span>.
        "解読：「途切れていない」は <span class=\"chem\">x = 2</span> で連続であるための条件、「角がない」は微分可能であるための条件です。それぞれから <i>a</i> と <i>b</i> の方程式が 1 つずつ得られます。(b) は同じことを <span class=\"chem\">f'</span> について問うています。",
        // EN: Continuity: <span class="chem">a(2)^2 + 2b = ln(1) + 3</span>.
        "連続性：<span class=\"chem\">a(2)^2 + 2b = ln(1) + 3</span>。",
        // EN: Differentiability: <span class="chem">2a(2) + b</span> must equal the derivative of <span class="chem">ln(x - 1) + 3</span> at <span class="chem">x = 2</span>.
        "微分可能性：<span class=\"chem\">2a(2) + b</span> は <span class=\"chem\">x = 2</span> における <span class=\"chem\">ln(x - 1) + 3</span> の微分係数と等しくなければなりません。",
        // EN: For (b), compare <span class="chem">f''</span> just to the left and just to the right of <span class="chem">x = 2</span>.
        "(b) では、<span class=\"chem\">x = 2</span> のすぐ左とすぐ右での <span class=\"chem\">f''</span> を比べます。",
      ],
      // EN: <p>Decode: no break = continuous, no corner = differentiable; (b) tests whether <span class="chem">f'</span> is itself differentiable. (a) <span class="chem">4a + 2b = 3</span> and <span class="chem">4a + b = 1</span> give <span class="chem">b = 2</span>, <span class="chem">a = -1/4</span>. (b) <span class="chem">f''</span> is <span class="chem">-1/2</span> on the left and tends to <span class="chem">-1</span> on the right, so <span class="chem">f''(2)</span> does not exist.</p>
      solution: "<p>解読：途切れていない = 連続、角がない = 微分可能。(b) は <span class=\"chem\">f'</span> 自体が微分可能かどうかを調べます。(a) <span class=\"chem\">4a + 2b = 3</span> と <span class=\"chem\">4a + b = 1</span> から <span class=\"chem\">b = 2</span>、<span class=\"chem\">a = -1/4</span>。(b) <span class=\"chem\">f''</span> は左側で <span class=\"chem\">-1/2</span>、右側では <span class=\"chem\">-1</span> に近づくので、<span class=\"chem\">f''(2)</span> は存在しません。</p>",
      // EN: <p>(a) No break means continuous: <span class="chem">4a + 2b = ln 1 + 3 = 3</span>. No corner means differentiable: <span class="chem">2a(2) + b = 1/(2 - 1)</span>, so <span class="chem">4a + b = 1</span>. Subtracting: <span class="chem">b = 2</span>, then <span class="chem">a = -1/4</span>.</p><p>(b) For <span class="chem">x &lt; 2</span>, <span class="chem">f''(x) = 2a = -1/2</span>. For <span class="chem">x &gt; 2</span>, <span class="chem">f''(x) = -1/(x - 1)^2 -> -1</span> as <span class="chem">x -> 2^+</span>. The two values differ, so <span class="chem">f'</span> is not differentiable at <span class="chem">x = 2</span> and <span class="chem">f''(2)</span> does not exist.</p>
      answer: "<p>(a) 途切れていないことは連続を意味する：<span class=\"chem\">4a + 2b = ln 1 + 3 = 3</span>。角がないことは微分可能を意味する：<span class=\"chem\">2a(2) + b = 1/(2 - 1)</span> より <span class=\"chem\">4a + b = 1</span>。辺々引くと <span class=\"chem\">b = 2</span>、よって <span class=\"chem\">a = -1/4</span>。</p><p>(b) <span class=\"chem\">x &lt; 2</span> では <span class=\"chem\">f''(x) = 2a = -1/2</span>。<span class=\"chem\">x &gt; 2</span> では <span class=\"chem\">x -> 2^+</span> のとき <span class=\"chem\">f''(x) = -1/(x - 1)^2 -> -1</span>。2 つの値が異なるので、<span class=\"chem\">f'</span> は <span class=\"chem\">x = 2</span> で微分可能でなく、<span class=\"chem\">f''(2)</span> は存在しない。</p>",
      markscheme: [
        // EN: M1: equates the two pieces at <span class="chem">x = 2</span> (continuity).
        "M1：<span class=\"chem\">x = 2</span> で 2 つの式の値を等しいとおいている（連続性）。",
        // EN: A1: <span class="chem">4a + 2b = 3</span>.
        "A1：<span class=\"chem\">4a + 2b = 3</span>。",
        // EN: M1: equates the two derivatives at <span class="chem">x = 2</span> (differentiability).
        "M1：<span class=\"chem\">x = 2</span> で 2 つの導関数の値を等しいとおいている（微分可能性）。",
        // EN: A1: <span class="chem">4a + b = 1</span>.
        "A1：<span class=\"chem\">4a + b = 1</span>。",
        // EN: A1: <span class="chem">b = 2</span>.
        "A1：<span class=\"chem\">b = 2</span>。",
        // EN: A1: <span class="chem">a = -1/4</span>.
        "A1：<span class=\"chem\">a = -1/4</span>。",
        // EN: M1: finds <span class="chem">f''</span> on both sides of <span class="chem">x = 2</span>.
        "M1：<span class=\"chem\">x = 2</span> の両側で <span class=\"chem\">f''</span> を求めている。",
        // EN: A1: left value <span class="chem">-1/2</span> and right limit <span class="chem">-1</span>.
        "A1：左側の値 <span class=\"chem\">-1/2</span> と右側の極限 <span class=\"chem\">-1</span>。",
        // EN: R1: they are not equal, so <span class="chem">f''(2)</span> does not exist.
        "R1：両者が等しくないので、<span class=\"chem\">f''(2)</span> は存在しない。",
      ],
    },

    // ── t5-3-q056 · short · challenge · AHL · AHL 5.16, 5.17 · 20 marks
    "t5-3-q056": {
      // EN: <p>This question investigates the integrals <span class="chem">I_n = int_0^{pi/2} sin^n x dx</span>, for integers <span class="chem">n &gt;= 0</span>.</p><p>(a) Write down the value of <span class="chem">I_0</span> and find the value of <span class="chem">I_1</span>. <strong>[2 marks]</strong></p><p>(b) By writing <span class="chem">sin^n x = sin^{n-1} x × sin x</span> and integrating by parts, show that <span class="chem">n I_n = (n - 1) I_{n-2}</span> for <span class="chem">n &gt;= 2</span>. <strong>[5 marks]</strong></p><p>(c) Hence find the exact values of <span class="chem">I_2</span>, <span class="chem">I_3</span>, <span class="chem">I_4</span> and <span class="chem">I_5</span>. <strong>[3 marks]</strong></p><p>(d) Use your GDC to verify your value of <span class="chem">I_4</span>. <strong>[1 mark]</strong></p><p>(e) Conjecture an expression for <span class="chem">I_{2k}</span>, <span class="chem">k &gt;= 1</span>, as a product of fractions multiplied by <span class="chem">pi/2</span>. <strong>[2 marks]</strong></p><p>(f) Show that <span class="chem">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>, and hence prove that <span class="chem">I_n I_{n-1} = pi/(2n)</span> for all <span class="chem">n &gt;= 1</span>. <strong>[5 marks]</strong></p><p>(g) The curve <span class="chem">y = sin^2 x</span>, <span class="chem">0 &lt;= x &lt;= pi/2</span>, is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the exact volume of the solid formed. <strong>[2 marks]</strong></p>
      stem: "<p>この問題では、整数 <span class=\"chem\">n &gt;= 0</span> に対する積分 <span class=\"chem\">I_n = int_0^{pi/2} sin^n x dx</span> を調べます。</p><p>(a) <span class=\"chem\">I_0</span> の値を書き (Write down)、<span class=\"chem\">I_1</span> の値を求めなさい (find)。 <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">sin^n x = sin^{n-1} x × sin x</span> と書いて部分積分を行うことにより、<span class=\"chem\">n &gt;= 2</span> に対して <span class=\"chem\">n I_n = (n - 1) I_{n-2}</span> であることを示しなさい (Show that)。 <strong>[5 marks]</strong></p><p>(c) これを用いて (Hence)、<span class=\"chem\">I_2</span>、<span class=\"chem\">I_3</span>、<span class=\"chem\">I_4</span>、<span class=\"chem\">I_5</span> の正確な値を求めなさい (find)。 <strong>[3 marks]</strong></p><p>(d) GDC を用いて、求めた <span class=\"chem\">I_4</span> の値を確かめなさい (Verify)。 <strong>[1 mark]</strong></p><p>(e) <span class=\"chem\">I_{2k}</span>（<span class=\"chem\">k &gt;= 1</span>）を、分数の積に <span class=\"chem\">pi/2</span> を掛けた形で表す式を予想しなさい (Conjecture)。 <strong>[2 marks]</strong></p><p>(f) <span class=\"chem\">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span> であることを示し (Show that)、これを用いて (hence) すべての <span class=\"chem\">n &gt;= 1</span> に対して <span class=\"chem\">I_n I_{n-1} = pi/(2n)</span> であることを証明しなさい (prove)。 <strong>[5 marks]</strong></p><p>(g) 曲線 <span class=\"chem\">y = sin^2 x</span>（<span class=\"chem\">0 &lt;= x &lt;= pi/2</span>）を <i>x</i> 軸の周りに <span class=\"chem\">2pi</span> ラジアン回転させます。できる立体の体積の正確な値を求めなさい (Find)。 <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a reduction formula. Part (b) links each integral to the one two steps below, so you climb from <span class="chem">I_0</span> (even <i>n</i>) and <span class="chem">I_1</span> (odd <i>n</i>). Part (g) is a disguised <span class="chem">I_4</span>.
        "解読：これは漸化式の問題です。(b) は各積分を 2 つ下の積分と結びつけるので、<span class=\"chem\">I_0</span>（<i>n</i> が偶数）と <span class=\"chem\">I_1</span>（<i>n</i> が奇数）から順に上っていきます。(g) は姿を変えた <span class=\"chem\">I_4</span> です。",
        // EN: In (b), the boundary term <span class="chem">[-sin^{n-1} x cos x]_0^{pi/2}</span> vanishes: <span class="chem">cos(pi/2) = 0</span> and <span class="chem">sin 0 = 0</span>. Then use <span class="chem">cos^2 x = 1 - sin^2 x</span> and collect the two <span class="chem">I_n</span> terms.
        "(b) では、境界項 <span class=\"chem\">[-sin^{n-1} x cos x]_0^{pi/2}</span> は 0 になります：<span class=\"chem\">cos(pi/2) = 0</span>、<span class=\"chem\">sin 0 = 0</span>。そして <span class=\"chem\">cos^2 x = 1 - sin^2 x</span> を用い、2 つの <span class=\"chem\">I_n</span> の項をまとめます。",
        // EN: In (c), use <span class="chem">I_n = ((n - 1)/n) I_{n-2}</span>: even <i>n</i> start from <span class="chem">pi/2</span>, odd <i>n</i> from 1.
        "(c) では <span class=\"chem\">I_n = ((n - 1)/n) I_{n-2}</span> を用います：偶数の <i>n</i> は <span class=\"chem\">pi/2</span> から、奇数の <i>n</i> は 1 から始めます。",
        // EN: In (f), if <span class="chem">a_n = n I_n I_{n-1}</span>, the result says <span class="chem">a_n = a_{n-1}</span>, so every <span class="chem">a_n</span> equals <span class="chem">a_1</span>.
        "(f) では、<span class=\"chem\">a_n = n I_n I_{n-1}</span> とおくと、その結果は <span class=\"chem\">a_n = a_{n-1}</span> を意味するので、すべての <span class=\"chem\">a_n</span> は <span class=\"chem\">a_1</span> に等しくなります。",
        // EN: In (g), <span class="chem">y^2 = sin^4 x</span>.
        "(g) では <span class=\"chem\">y^2 = sin^4 x</span> です。",
      ],
      // EN: <p>Decode: build a reduction formula by parts, generate small cases, spot the pattern, then use the formula to find a constant product and a volume. (a) <span class="chem">pi/2</span>, <span class="chem">1</span>. (c) <span class="chem">pi/4, 2/3, 3pi/16, 8/15</span>. (e) <span class="chem">I_{2k} = ((2k - 1)/(2k)) × … × (3/4)(1/2)(pi/2)</span>. (f) <span class="chem">n I_n I_{n-1} = pi/2</span> for all <i>n</i>. (g) <span class="chem">V = 3pi^2/16</span>.</p>
      solution: "<p>解読：部分積分で漸化式を作り、小さい場合を計算してパターンを見つけ、その式を使って一定の積と体積を求めます。(a) <span class=\"chem\">pi/2</span>、<span class=\"chem\">1</span>。(c) <span class=\"chem\">pi/4, 2/3, 3pi/16, 8/15</span>。(e) <span class=\"chem\">I_{2k} = ((2k - 1)/(2k)) × … × (3/4)(1/2)(pi/2)</span>。(f) すべての <i>n</i> に対して <span class=\"chem\">n I_n I_{n-1} = pi/2</span>。(g) <span class=\"chem\">V = 3pi^2/16</span>。</p>",
      // EN: <p>(a) <span class="chem">I_0 = pi/2</span>; <span class="chem">I_1 = [-cos x]_0^{pi/2} = 1</span>.</p><p>(b) <span class="chem">u = sin^{n-1} x</span>, <span class="chem">dv/dx = sin x</span>, so <span class="chem">du/dx = (n - 1) sin^{n-2} x cos x</span> and <span class="chem">v = -cos x</span>. Then <span class="chem">I_n = [-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int_0^{pi/2} sin^{n-2} x cos^2 x dx</span>. The boundary term is <span class="chem">0</span> at both limits (for <span class="chem">n &gt;= 2</span>). With <span class="chem">cos^2 x = 1 - sin^2 x</span>: <span class="chem">I_n = (n - 1)(I_{n-2} - I_n)</span>, so <span class="chem">n I_n = (n - 1) I_{n-2}</span>.</p><p>(c) <span class="chem">I_2 = (1/2)(pi/2) = pi/4</span>, <span class="chem">I_3 = (2/3)(1) = 2/3</span>, <span class="chem">I_4 = (3/4)(pi/4) = 3pi/16</span>, <span class="chem">I_5 = (4/5)(2/3) = 8/15</span>.</p><p>(d) GDC: <span class="chem">int_0^{pi/2} sin^4 x dx = 0.589048… = 3pi/16</span>.</p><p>(e) <span class="chem">I_{2k} = (1/2)(3/4)(5/6)…((2k - 1)/(2k)) × pi/2</span>.</p><p>(f) Multiply <span class="chem">n I_n = (n - 1) I_{n-2}</span> by <span class="chem">I_{n-1}</span>. So <span class="chem">n I_n I_{n-1}</span> takes the same value for every <span class="chem">n &gt;= 1</span>, equal to its value at <span class="chem">n = 1</span>: <span class="chem">1 × I_1 I_0 = pi/2</span>. Hence <span class="chem">I_n I_{n-1} = pi/(2n)</span>.</p><p>(g) <span class="chem">V = pi int_0^{pi/2} sin^4 x dx = pi I_4 = 3pi^2/16</span>.</p>
      answer: "<p>(a) <span class=\"chem\">I_0 = pi/2</span>；<span class=\"chem\">I_1 = [-cos x]_0^{pi/2} = 1</span>。</p><p>(b) <span class=\"chem\">u = sin^{n-1} x</span>、<span class=\"chem\">dv/dx = sin x</span> とすると、<span class=\"chem\">du/dx = (n - 1) sin^{n-2} x cos x</span>、<span class=\"chem\">v = -cos x</span>。よって <span class=\"chem\">I_n = [-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int_0^{pi/2} sin^{n-2} x cos^2 x dx</span>。境界項は両端で <span class=\"chem\">0</span>（<span class=\"chem\">n &gt;= 2</span> のとき）。<span class=\"chem\">cos^2 x = 1 - sin^2 x</span> を用いると：<span class=\"chem\">I_n = (n - 1)(I_{n-2} - I_n)</span> なので <span class=\"chem\">n I_n = (n - 1) I_{n-2}</span>。</p><p>(c) <span class=\"chem\">I_2 = (1/2)(pi/2) = pi/4</span>、<span class=\"chem\">I_3 = (2/3)(1) = 2/3</span>、<span class=\"chem\">I_4 = (3/4)(pi/4) = 3pi/16</span>、<span class=\"chem\">I_5 = (4/5)(2/3) = 8/15</span>。</p><p>(d) GDC：<span class=\"chem\">int_0^{pi/2} sin^4 x dx = 0.589048… = 3pi/16</span>。</p><p>(e) <span class=\"chem\">I_{2k} = (1/2)(3/4)(5/6)…((2k - 1)/(2k)) × pi/2</span>。</p><p>(f) <span class=\"chem\">n I_n = (n - 1) I_{n-2}</span> の両辺に <span class=\"chem\">I_{n-1}</span> を掛ける。よって <span class=\"chem\">n I_n I_{n-1}</span> はすべての <span class=\"chem\">n &gt;= 1</span> で同じ値をとり、それは <span class=\"chem\">n = 1</span> での値 <span class=\"chem\">1 × I_1 I_0 = pi/2</span> に等しい。したがって <span class=\"chem\">I_n I_{n-1} = pi/(2n)</span>。</p><p>(g) <span class=\"chem\">V = pi int_0^{pi/2} sin^4 x dx = pi I_4 = 3pi^2/16</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">I_0 = pi/2</span>.
        "A1：<span class=\"chem\">I_0 = pi/2</span>。",
        // EN: A1: <span class="chem">I_1 = 1</span>.
        "A1：<span class=\"chem\">I_1 = 1</span>。",
        // EN: M1: parts with <span class="chem">u = sin^{n-1} x</span> and <span class="chem">dv/dx = sin x</span>.
        "M1：<span class=\"chem\">u = sin^{n-1} x</span>、<span class=\"chem\">dv/dx = sin x</span> として部分積分を行っている。",
        // EN: A1: <span class="chem">du/dx = (n - 1) sin^{n-2} x cos x</span> and <span class="chem">v = -cos x</span>, giving <span class="chem">[-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int sin^{n-2} x cos^2 x dx</span>.
        "A1：<span class=\"chem\">du/dx = (n - 1) sin^{n-2} x cos x</span>、<span class=\"chem\">v = -cos x</span> により <span class=\"chem\">[-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int sin^{n-2} x cos^2 x dx</span> を得ている。",
        // EN: R1: the boundary term is zero at both limits.
        "R1：境界項は両端で 0 である。",
        // EN: M1: replaces <span class="chem">cos^2 x</span> by <span class="chem">1 - sin^2 x</span>.
        "M1：<span class=\"chem\">cos^2 x</span> を <span class=\"chem\">1 - sin^2 x</span> で置き換えている。",
        // EN: A1: <span class="chem">I_n = (n - 1) I_{n-2} - (n - 1) I_n</span>, leading to <span class="chem">n I_n = (n - 1) I_{n-2}</span> AG (no mark for the given line).
        "A1：<span class=\"chem\">I_n = (n - 1) I_{n-2} - (n - 1) I_n</span> とし、<span class=\"chem\">n I_n = (n - 1) I_{n-2}</span> に至っている AG（与えられた式そのものには点を与えない）。",
        // EN: A1: <span class="chem">I_2 = pi/4</span>.
        "A1：<span class=\"chem\">I_2 = pi/4</span>。",
        // EN: A1: <span class="chem">I_3 = 2/3</span> and <span class="chem">I_4 = 3pi/16</span>.
        "A1：<span class=\"chem\">I_3 = 2/3</span> と <span class=\"chem\">I_4 = 3pi/16</span>。",
        // EN: A1: <span class="chem">I_5 = 8/15</span>.
        "A1：<span class=\"chem\">I_5 = 8/15</span>。",
        // EN: A1: GDC value <span class="chem">0.589</span> agrees with <span class="chem">3pi/16</span>.
        "A1：GDC の値 <span class=\"chem\">0.589</span> が <span class=\"chem\">3pi/16</span> と一致している。",
        // EN: M1: recognises the pattern of odd over even fractions.
        "M1：奇数／偶数の分数が並ぶパターンに気づいている。",
        // EN: A1: <span class="chem">I_{2k} = (1 × 3 × … × (2k - 1))/(2 × 4 × … × 2k) × pi/2</span>.
        "A1：<span class=\"chem\">I_{2k} = (1 × 3 × … × (2k - 1))/(2 × 4 × … × 2k) × pi/2</span>。",
        // EN: M1: multiplies the reduction formula by <span class="chem">I_{n-1}</span>.
        "M1：漸化式に <span class=\"chem\">I_{n-1}</span> を掛けている。",
        // EN: A1: obtains <span class="chem">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>.
        "A1：<span class=\"chem\">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span> を得ている。",
        // EN: R1: deduces that <span class="chem">n I_n I_{n-1}</span> is the same for every <span class="chem">n</span>.
        "R1：<span class=\"chem\">n I_n I_{n-1}</span> がすべての <span class=\"chem\">n</span> で同じであると導いている。",
        // EN: M1: evaluates the constant at <span class="chem">n = 1</span>: <span class="chem">I_1 I_0 = pi/2</span>.
        "M1：<span class=\"chem\">n = 1</span> で定数の値を求めている：<span class=\"chem\">I_1 I_0 = pi/2</span>。",
        // EN: A1: concludes <span class="chem">I_n I_{n-1} = pi/(2n)</span>.
        "A1：<span class=\"chem\">I_n I_{n-1} = pi/(2n)</span> と結論づけている。",
        // EN: M1: <span class="chem">V = pi int_0^{pi/2} (sin^2 x)^2 dx = pi I_4</span>.
        "M1：<span class=\"chem\">V = pi int_0^{pi/2} (sin^2 x)^2 dx = pi I_4</span>。",
        // EN: A1: <span class="chem">V = 3pi^2/16</span>.
        "A1：<span class=\"chem\">V = 3pi^2/16</span>。",
      ],
    },

    // ── t5-3-q057 · short · challenge · AHL · AHL 5.17, 5.13 · 19 marks
    "t5-3-q057": {
      // EN: <p>For <span class="chem">n &gt; 0</span>, let <span class="chem">R_n</span> be the region bounded by the curve <span class="chem">y = x^n</span>, the <i>x</i>-axis and the line <span class="chem">x = 1</span>. Let <span class="chem">A(n)</span> be the volume formed when <span class="chem">R_n</span> is rotated through <span class="chem">2pi</span> about the <i>x</i>-axis, and <span class="chem">B(n)</span> the volume formed when <span class="chem">R_n</span> is rotated through <span class="chem">2pi</span> about the <i>y</i>-axis.</p><p>(a) For <span class="chem">n = 1</span>, describe each solid and write down <span class="chem">A(1)</span> and <span class="chem">B(1)</span>. <strong>[3 marks]</strong></p><p>(b) Show that <span class="chem">A(n) = pi/(2n + 1)</span>. <strong>[2 marks]</strong></p><p>(c) By first finding the volume formed when the region between <span class="chem">y = x^n</span>, the <i>y</i>-axis and the line <span class="chem">y = 1</span> is rotated about the <i>y</i>-axis, show that <span class="chem">B(n) = 2pi/(n + 2)</span>. <strong>[5 marks]</strong></p><p>(d) Use your GDC to sketch <span class="chem">A(n)</span> and <span class="chem">B(n)</span> for <span class="chem">0 &lt; n &lt;= 5</span>, and hence conjecture which of <span class="chem">A(n)</span> and <span class="chem">B(n)</span> is larger. Prove your conjecture. <strong>[4 marks]</strong></p><p>(e) Find <span class="chem">lim_{n->infty} B(n)/A(n)</span>. <strong>[2 marks]</strong></p><p>(f) Find the value of <i>n</i> for which <span class="chem">B(n) - A(n)</span> is greatest, and state this greatest value. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">n &gt; 0</span> に対し、曲線 <span class=\"chem\">y = x^n</span>、<i>x</i> 軸、直線 <span class=\"chem\">x = 1</span> で囲まれた領域を <span class=\"chem\">R_n</span> とします。<span class=\"chem\">R_n</span> を <i>x</i> 軸の周りに <span class=\"chem\">2pi</span> 回転させてできる立体の体積を <span class=\"chem\">A(n)</span>、<span class=\"chem\">R_n</span> を <i>y</i> 軸の周りに <span class=\"chem\">2pi</span> 回転させてできる立体の体積を <span class=\"chem\">B(n)</span> とします。</p><p>(a) <span class=\"chem\">n = 1</span> のとき、それぞれの立体を説明し、<span class=\"chem\">A(1)</span> と <span class=\"chem\">B(1)</span> を書きなさい (write down)。 <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">A(n) = pi/(2n + 1)</span> であることを示しなさい (Show that)。 <strong>[2 marks]</strong></p><p>(c) まず <span class=\"chem\">y = x^n</span>、<i>y</i> 軸、直線 <span class=\"chem\">y = 1</span> で囲まれた領域を <i>y</i> 軸の周りに回転させてできる体積を求めることにより、<span class=\"chem\">B(n) = 2pi/(n + 2)</span> であることを示しなさい (show that)。 <strong>[5 marks]</strong></p><p>(d) GDC を用いて <span class=\"chem\">0 &lt; n &lt;= 5</span> における <span class=\"chem\">A(n)</span> と <span class=\"chem\">B(n)</span> のグラフの概形をかき (sketch)、これを用いて <span class=\"chem\">A(n)</span> と <span class=\"chem\">B(n)</span> のどちらが大きいかを予想しなさい (hence conjecture)。その予想を証明しなさい (Prove)。 <strong>[4 marks]</strong></p><p>(e) <span class=\"chem\">lim_{n->infty} B(n)/A(n)</span> を求めなさい (Find)。 <strong>[2 marks]</strong></p><p>(f) <span class=\"chem\">B(n) - A(n)</span> が最大となる <i>n</i> の値を求め (Find)、その最大値を述べなさい (state)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: a whole family of solids depends on one parameter <i>n</i>. Work out small cases, find general formulas, then compare the two formulas and study them as functions of <i>n</i>.
        "解読：立体の族全体が 1 つのパラメータ <i>n</i> に依存しています。小さい場合を計算し、一般の公式を見つけ、2 つの公式を比べて、それらを <i>n</i> の関数として調べます。",
        // EN: For (c), the region <span class="chem">R_n</span> rotated about the <i>y</i>-axis is a cylinder of radius 1 and height 1 with the solid from the region next to the <i>y</i>-axis removed.
        "(c) では、領域 <span class=\"chem\">R_n</span> を <i>y</i> 軸の周りに回転させた立体は、半径 1、高さ 1 の円柱から、<i>y</i> 軸側の領域からできる立体を取り除いたものです。",
        // EN: Use <span class="chem">x^2 = y^{2/n}</span>, and simplify <span class="chem">1/(2/n + 1) = n/(n + 2)</span>.
        "<span class=\"chem\">x^2 = y^{2/n}</span> を用い、<span class=\"chem\">1/(2/n + 1) = n/(n + 2)</span> と簡単にします。",
        // EN: For (d), both denominators are positive, so you may cross-multiply. For (e), divide top and bottom by <i>n</i> (or use L’Hôpital’s rule). For (f), solve <span class="chem">(n + 2)^2 = (2n + 1)^2</span> with <span class="chem">n &gt; 0</span>.
        "(d) では、どちらの分母も正なので、たすき掛け（両辺に分母を掛けること）ができます。(e) では分子と分母を <i>n</i> で割ります（またはロピタルの定理を使います）。(f) では <span class=\"chem\">n &gt; 0</span> のもとで <span class=\"chem\">(n + 2)^2 = (2n + 1)^2</span> を解きます。",
      ],
      // EN: <p>Decode: two volume formulas depend on the parameter <i>n</i>; compare them, then treat their difference as a function to optimise. <span class="chem">A(n) = pi/(2n + 1)</span>, <span class="chem">B(n) = 2pi/(n + 2)</span>, <span class="chem">B &gt; A</span> for all <span class="chem">n &gt; 0</span>, <span class="chem">B/A -> 4</span>, and <span class="chem">B - A</span> is greatest (<span class="chem">pi/3</span>) at <span class="chem">n = 1</span>.</p>
      solution: "<p>解読：2 つの体積の公式がパラメータ <i>n</i> に依存しています。それらを比べ、その差を最大化する関数として扱います。<span class=\"chem\">A(n) = pi/(2n + 1)</span>、<span class=\"chem\">B(n) = 2pi/(n + 2)</span>、すべての <span class=\"chem\">n &gt; 0</span> で <span class=\"chem\">B &gt; A</span>、<span class=\"chem\">B/A -> 4</span>、そして <span class=\"chem\">B - A</span> は <span class=\"chem\">n = 1</span> で最大（<span class=\"chem\">pi/3</span>）です。</p>",
      // EN: <p>(a) For <span class="chem">n = 1</span>, about the <i>x</i>-axis the solid is a cone of radius 1 and height 1: <span class="chem">A(1) = pi/3</span>. About the <i>y</i>-axis it is a cylinder of radius 1, height 1 with a cone removed: <span class="chem">B(1) = pi - pi/3 = 2pi/3</span>.</p><p>(b) <span class="chem">A(n) = pi int_0^1 x^{2n} dx = pi/(2n + 1)</span>.</p><p>(c) With <span class="chem">x = y^{1/n}</span>, the region next to the <i>y</i>-axis gives <span class="chem">pi int_0^1 y^{2/n} dy = pi/(2/n + 1) = pi n/(n + 2)</span>. <span class="chem">R_n</span> about the <i>y</i>-axis is the cylinder (volume <span class="chem">pi</span>) minus this: <span class="chem">B(n) = pi - pi n/(n + 2) = 2pi/(n + 2)</span>.</p><p>(d) The graphs suggest <span class="chem">B(n) &gt; A(n)</span> for all <span class="chem">n &gt; 0</span>. Proof: <span class="chem">2/(n + 2) &gt; 1/(2n + 1) <=> 4n + 2 &gt; n + 2 <=> 3n &gt; 0</span>, true for <span class="chem">n &gt; 0</span> (both denominators are positive).</p><p>(e) <span class="chem">B(n)/A(n) = 2(2n + 1)/(n + 2) -> 4</span>.</p><p>(f) <span class="chem">D(n) = 2pi/(n + 2) - pi/(2n + 1)</span>; <span class="chem">D'(n) = -2pi/(n + 2)^2 + 2pi/(2n + 1)^2 = 0 => n + 2 = 2n + 1 => n = 1</span>. Greatest value <span class="chem">D(1) = 2pi/3 - pi/3 = pi/3</span>.</p>
      answer: "<p>(a) <span class=\"chem\">n = 1</span> のとき、<i>x</i> 軸の周りの立体は半径 1、高さ 1 の円錐：<span class=\"chem\">A(1) = pi/3</span>。<i>y</i> 軸の周りの立体は半径 1、高さ 1 の円柱から円錐を取り除いたもの：<span class=\"chem\">B(1) = pi - pi/3 = 2pi/3</span>。</p><p>(b) <span class=\"chem\">A(n) = pi int_0^1 x^{2n} dx = pi/(2n + 1)</span>。</p><p>(c) <span class=\"chem\">x = y^{1/n}</span> より、<i>y</i> 軸側の領域から <span class=\"chem\">pi int_0^1 y^{2/n} dy = pi/(2/n + 1) = pi n/(n + 2)</span>。<span class=\"chem\">R_n</span> を <i>y</i> 軸の周りに回転させた立体は円柱（体積 <span class=\"chem\">pi</span>）からこれを引いたもの：<span class=\"chem\">B(n) = pi - pi n/(n + 2) = 2pi/(n + 2)</span>。</p><p>(d) グラフから、すべての <span class=\"chem\">n &gt; 0</span> で <span class=\"chem\">B(n) &gt; A(n)</span> と予想される。証明：<span class=\"chem\">2/(n + 2) &gt; 1/(2n + 1) <=> 4n + 2 &gt; n + 2 <=> 3n &gt; 0</span> で、これは <span class=\"chem\">n &gt; 0</span> のとき成り立つ（どちらの分母も正）。</p><p>(e) <span class=\"chem\">B(n)/A(n) = 2(2n + 1)/(n + 2) -> 4</span>。</p><p>(f) <span class=\"chem\">D(n) = 2pi/(n + 2) - pi/(2n + 1)</span>；<span class=\"chem\">D'(n) = -2pi/(n + 2)^2 + 2pi/(2n + 1)^2 = 0 => n + 2 = 2n + 1 => n = 1</span>。最大値は <span class=\"chem\">D(1) = 2pi/3 - pi/3 = pi/3</span>。</p>",
      markscheme: [
        // EN: A1: identifies the cone (about <i>x</i>) and the cylinder with a conical hole (about <i>y</i>).
        "A1：円錐（<i>x</i> 軸の周り）と、円錐形の穴のあいた円柱（<i>y</i> 軸の周り）であると特定している。",
        // EN: A1: <span class="chem">A(1) = pi/3</span>.
        "A1：<span class=\"chem\">A(1) = pi/3</span>。",
        // EN: A1: <span class="chem">B(1) = 2pi/3</span>.
        "A1：<span class=\"chem\">B(1) = 2pi/3</span>。",
        // EN: M1: <span class="chem">A(n) = pi int_0^1 (x^n)^2 dx</span>.
        "M1：<span class=\"chem\">A(n) = pi int_0^1 (x^n)^2 dx</span>。",
        // EN: A1: <span class="chem">pi [x^{2n+1}/(2n + 1)]_0^1</span>, leading to <span class="chem">pi/(2n + 1)</span> AG (no mark for the given line).
        "A1：<span class=\"chem\">pi [x^{2n+1}/(2n + 1)]_0^1</span> とし、<span class=\"chem\">pi/(2n + 1)</span> に至っている AG（与えられた式そのものには点を与えない）。",
        // EN: M1: rearranges to <span class="chem">x = y^{1/n}</span>.
        "M1：<span class=\"chem\">x = y^{1/n}</span> と変形している。",
        // EN: M1: <span class="chem">pi int_0^1 x^2 dy = pi int_0^1 y^{2/n} dy</span>.
        "M1：<span class=\"chem\">pi int_0^1 x^2 dy = pi int_0^1 y^{2/n} dy</span>。",
        // EN: A1: <span class="chem">pi n/(n + 2)</span>.
        "A1：<span class=\"chem\">pi n/(n + 2)</span>。",
        // EN: M1: <span class="chem">B(n)</span> = cylinder <span class="chem">pi(1)^2(1)</span> minus that volume.
        "M1：<span class=\"chem\">B(n)</span> = 円柱 <span class=\"chem\">pi(1)^2(1)</span> からその体積を引いたもの。",
        // EN: A1: <span class="chem">pi - pi n/(n + 2) = pi(n + 2 - n)/(n + 2)</span>, leading to <span class="chem">2pi/(n + 2)</span> AG (no mark for the given line).
        "A1：<span class=\"chem\">pi - pi n/(n + 2) = pi(n + 2 - n)/(n + 2)</span> とし、<span class=\"chem\">2pi/(n + 2)</span> に至っている AG（与えられた式そのものには点を与えない）。",
        // EN: A1: sketch with <span class="chem">B</span> above <span class="chem">A</span>, and conjecture <span class="chem">B(n) &gt; A(n)</span>.
        "A1：<span class=\"chem\">B</span> が <span class=\"chem\">A</span> より上にある概形をかき、<span class=\"chem\">B(n) &gt; A(n)</span> と予想している。",
        // EN: M1: sets up the inequality <span class="chem">2/(n + 2) &gt; 1/(2n + 1)</span>.
        "M1：不等式 <span class=\"chem\">2/(n + 2) &gt; 1/(2n + 1)</span> を立てている。",
        // EN: A1: cross-multiplies (positive denominators) to <span class="chem">3n &gt; 0</span>.
        "A1：（分母が正なので）両辺に分母を掛けて <span class=\"chem\">3n &gt; 0</span> を得ている。",
        // EN: R1: true for every <span class="chem">n &gt; 0</span>, so the conjecture holds.
        "R1：すべての <span class=\"chem\">n &gt; 0</span> で成り立つので、予想は正しい。",
        // EN: M1: <span class="chem">B(n)/A(n) = 2(2n + 1)/(n + 2)</span>.
        "M1：<span class=\"chem\">B(n)/A(n) = 2(2n + 1)/(n + 2)</span>。",
        // EN: A1: limit <span class="chem">4</span>.
        "A1：極限 <span class=\"chem\">4</span>。",
        // EN: M1: differentiates <span class="chem">B(n) - A(n)</span> and sets it equal to zero (or uses a GDC graph).
        "M1：<span class=\"chem\">B(n) - A(n)</span> を微分して 0 とおいている（または GDC のグラフを用いている）。",
        // EN: A1: <span class="chem">n = 1</span>.
        "A1：<span class=\"chem\">n = 1</span>。",
        // EN: A1: greatest value <span class="chem">pi/3</span>.
        "A1：最大値 <span class=\"chem\">pi/3</span>。",
      ],
    },

    // ── t5-3-q058 · short · challenge · AHL · AHL 5.12, 5.13 · 17 marks
    "t5-3-q058": {
      // EN: <p>This question investigates <span class="chem">f(x) = (1 + k/x)^x</span> for large <i>x</i>, where <i>k</i> is a positive constant.</p><p>(a) Let <span class="chem">k = 2</span>. Use your GDC to find <span class="chem">f(10)</span>, <span class="chem">f(100)</span> and <span class="chem">f(1000)</span>, giving each to 5 significant figures. <strong>[2 marks]</strong></p><p>(b) Hence conjecture whether <span class="chem">f(x)</span> converges as <span class="chem">x -> infty</span> and, if so, suggest its exact limit. <strong>[1 mark]</strong></p><p>(c) Show that <span class="chem">ln f(x) = ln(1 + k/x) / (1/x)</span>, and state the form of this quotient as <span class="chem">x -> infty</span>. <strong>[2 marks]</strong></p><p>(d) Use L’Hôpital’s rule to show that <span class="chem">lim_{x->infty} ln f(x) = k</span>, and hence write down <span class="chem">lim_{x->infty} f(x)</span>. <strong>[5 marks]</strong></p><p>(e) By writing <span class="chem">(x + 3)/(x - 1) = 1 + 4/(x - 1)</span>, find the exact value of <span class="chem">lim_{x->infty} ((x + 3)/(x - 1))^x</span>. <strong>[4 marks]</strong></p><p>(f) A deposit of 1000 euros earns interest at a nominal annual rate of 6%, compounded <i>m</i> times per year. After 10 years its value is <span class="chem">1000(1 + 0.06/m)^{10m}</span>. Find, to the nearest cent, the limit of this value as <span class="chem">m -> infty</span>. <strong>[3 marks]</strong></p>
      stem: "<p>この問題では、<i>x</i> が大きいときの <span class=\"chem\">f(x) = (1 + k/x)^x</span> を調べます。ただし <i>k</i> は正の定数です。</p><p>(a) <span class=\"chem\">k = 2</span> とします。GDC を用いて <span class=\"chem\">f(10)</span>、<span class=\"chem\">f(100)</span>、<span class=\"chem\">f(1000)</span> をそれぞれ有効数字 5 桁で求めなさい (find)。 <strong>[2 marks]</strong></p><p>(b) これを用いて (Hence)、<span class=\"chem\">x -> infty</span> のとき <span class=\"chem\">f(x)</span> が収束するかどうかを予想し (conjecture)、収束するならその極限の正確な値を推測しなさい (suggest)。 <strong>[1 mark]</strong></p><p>(c) <span class=\"chem\">ln f(x) = ln(1 + k/x) / (1/x)</span> であることを示し (Show that)、<span class=\"chem\">x -> infty</span> のときのこの商の形を述べなさい (state)。 <strong>[2 marks]</strong></p><p>(d) ロピタルの定理を用いて <span class=\"chem\">lim_{x->infty} ln f(x) = k</span> であることを示し (show that)、これを用いて (hence) <span class=\"chem\">lim_{x->infty} f(x)</span> を書きなさい (write down)。 <strong>[5 marks]</strong></p><p>(e) <span class=\"chem\">(x + 3)/(x - 1) = 1 + 4/(x - 1)</span> と書くことにより、<span class=\"chem\">lim_{x->infty} ((x + 3)/(x - 1))^x</span> の正確な値を求めなさい (find)。 <strong>[4 marks]</strong></p><p>(f) 1000 ユーロの預金が名目年利率 6% で、1 年に <i>m</i> 回の複利で利息がつきます。10 年後の預金額は <span class=\"chem\">1000(1 + 0.06/m)^{10m}</span> です。<span class=\"chem\">m -> infty</span> のときのこの額の極限を、セント単位まで（最も近いセントに丸めて）求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the variable is in both the base and the power, so take logarithms. That turns a power into a quotient of the form <span class="chem">0/0</span>, which is a job for L’Hôpital’s rule.
        "解読：変数が底と指数の両方にあるので、対数をとります。すると累乗が <span class=\"chem\">0/0</span> 型の商に変わり、ロピタルの定理の出番になります。",
        // EN: In (c), <span class="chem">ln((1 + k/x)^x) = x ln(1 + k/x)</span>, and multiplying by <i>x</i> is the same as dividing by <span class="chem">1/x</span>.
        "(c) では <span class=\"chem\">ln((1 + k/x)^x) = x ln(1 + k/x)</span> であり、<i>x</i> を掛けることは <span class=\"chem\">1/x</span> で割ることと同じです。",
        // EN: In (d), <span class="chem">d/dx ln(1 + k/x) = (-k/x^2)/(1 + k/x)</span> and <span class="chem">d/dx (1/x) = -1/x^2</span>. The <span class="chem">-1/x^2</span> factors cancel.
        "(d) では <span class=\"chem\">d/dx ln(1 + k/x) = (-k/x^2)/(1 + k/x)</span>、<span class=\"chem\">d/dx (1/x) = -1/x^2</span> です。<span class=\"chem\">-1/x^2</span> の因数は約分されます。",
        // EN: In (e), the exponent is <span class="chem">x = t + 1</span>, not <i>t</i>. In (f), the 6% rate and 10 years combine to <span class="chem">k = 0.6</span>.
        "(e) では、指数は <i>t</i> ではなく <span class=\"chem\">x = t + 1</span> です。(f) では、6% の利率と 10 年を合わせて <span class=\"chem\">k = 0.6</span> となります。",
      ],
      // EN: <p>Decode: a variable power is handled by taking logarithms, which produces an indeterminate quotient for L’Hôpital’s rule. (a) 6.1917, 7.2446, 7.3743. (d) <span class="chem">lim f(x) = e^k</span>. (e) <span class="chem">e^4</span>. (f) 1822.12 euros.</p>
      solution: "<p>解読：変数を含む指数は対数をとって扱います。すると不定形の商が現れ、ロピタルの定理が使えます。(a) 6.1917、7.2446、7.3743。(d) <span class=\"chem\">lim f(x) = e^k</span>。(e) <span class=\"chem\">e^4</span>。(f) 1822.12 ユーロ。</p>",
      // EN: <p>(a) <span class="chem">f(10) = 6.1917</span>, <span class="chem">f(100) = 7.2446</span>, <span class="chem">f(1000) = 7.3743</span>.</p><p>(b) The values increase and appear to converge, to about 7.39, which suggests the limit <span class="chem">e^2</span>.</p><p>(c) <span class="chem">ln f(x) = x ln(1 + k/x) = ln(1 + k/x)/(1/x)</span>. As <span class="chem">x -> infty</span>, top and bottom both tend to 0: the form <span class="chem">0/0</span>.</p><p>(d) Differentiating top and bottom: <span class="chem">((-k/x^2)/(1 + k/x)) / (-1/x^2) = k/(1 + k/x) -> k</span>. So <span class="chem">ln f(x) -> k</span>, and since <span class="chem">e^x</span> is continuous, <span class="chem">f(x) -> e^k</span>.</p><p>(e) Let <span class="chem">t = x - 1</span>: <span class="chem">((x + 3)/(x - 1))^x = (1 + 4/t)^t × (1 + 4/t) -> e^4 × 1 = e^4</span>.</p><p>(f) <span class="chem">1000(1 + 0.06/m)^{10m} = 1000((1 + 0.6/(10m))^{10m}) -> 1000 e^{0.6} = 1822.12</span> euros.</p>
      answer: "<p>(a) <span class=\"chem\">f(10) = 6.1917</span>、<span class=\"chem\">f(100) = 7.2446</span>、<span class=\"chem\">f(1000) = 7.3743</span>。</p><p>(b) 値は増加し、約 7.39 に収束するように見えるので、極限は <span class=\"chem\">e^2</span> と推測される。</p><p>(c) <span class=\"chem\">ln f(x) = x ln(1 + k/x) = ln(1 + k/x)/(1/x)</span>。<span class=\"chem\">x -> infty</span> のとき分子も分母も 0 に近づく：<span class=\"chem\">0/0</span> の形。</p><p>(d) 分子と分母を微分すると：<span class=\"chem\">((-k/x^2)/(1 + k/x)) / (-1/x^2) = k/(1 + k/x) -> k</span>。よって <span class=\"chem\">ln f(x) -> k</span> であり、<span class=\"chem\">e^x</span> は連続なので <span class=\"chem\">f(x) -> e^k</span>。</p><p>(e) <span class=\"chem\">t = x - 1</span> とおくと：<span class=\"chem\">((x + 3)/(x - 1))^x = (1 + 4/t)^t × (1 + 4/t) -> e^4 × 1 = e^4</span>。</p><p>(f) <span class=\"chem\">1000(1 + 0.06/m)^{10m} = 1000((1 + 0.6/(10m))^{10m}) -> 1000 e^{0.6} = 1822.12</span> ユーロ。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f(10) = 6.1917</span>.
        "A1：<span class=\"chem\">f(10) = 6.1917</span>。",
        // EN: A1: <span class="chem">f(100) = 7.2446</span> and <span class="chem">f(1000) = 7.3743</span>.
        "A1：<span class=\"chem\">f(100) = 7.2446</span> と <span class=\"chem\">f(1000) = 7.3743</span>。",
        // EN: A1: conjectures convergence to <span class="chem">e^2 ≈ 7.389</span>.
        "A1：<span class=\"chem\">e^2 ≈ 7.389</span> に収束すると予想している。",
        // EN: A1: <span class="chem">ln f(x) = x ln(1 + k/x)</span> rewritten as the quotient.
        "A1：<span class=\"chem\">ln f(x) = x ln(1 + k/x)</span> を商の形に書き直している。",
        // EN: A1: form <span class="chem">0/0</span> stated.
        "A1：<span class=\"chem\">0/0</span> の形であると述べている。",
        // EN: M1: differentiates the numerator: <span class="chem">(-k/x^2)/(1 + k/x)</span>.
        "M1：分子を微分している：<span class=\"chem\">(-k/x^2)/(1 + k/x)</span>。",
        // EN: A1: differentiates the denominator: <span class="chem">-1/x^2</span>.
        "A1：分母を微分している：<span class=\"chem\">-1/x^2</span>。",
        // EN: A1: simplifies to <span class="chem">k/(1 + k/x)</span>.
        "A1：<span class=\"chem\">k/(1 + k/x)</span> に簡単にしている。",
        // EN: A1: limit <span class="chem">k</span>.
        "A1：極限 <span class=\"chem\">k</span>。",
        // EN: A1: <span class="chem">lim f(x) = e^k</span>.
        "A1：<span class=\"chem\">lim f(x) = e^k</span>。",
        // EN: M1: substitutes <span class="chem">t = x - 1</span> (so <span class="chem">t -> infty</span>).
        "M1：<span class=\"chem\">t = x - 1</span> とおいている（よって <span class=\"chem\">t -> infty</span>）。",
        // EN: A1: splits into <span class="chem">(1 + 4/t)^t (1 + 4/t)</span>.
        "A1：<span class=\"chem\">(1 + 4/t)^t (1 + 4/t)</span> に分けている。",
        // EN: M1: uses the result of (d) with <span class="chem">k = 4</span>, and <span class="chem">(1 + 4/t) -> 1</span>.
        "M1：<span class=\"chem\">k = 4</span> として (d) の結果を用い、<span class=\"chem\">(1 + 4/t) -> 1</span> を用いている。",
        // EN: A1: <span class="chem">e^4</span>.
        "A1：<span class=\"chem\">e^4</span>。",
        // EN: M1: writes the value as <span class="chem">1000(1 + 0.6/n)^n</span> with <span class="chem">n = 10m</span> (or equivalent).
        "M1：<span class=\"chem\">n = 10m</span> として値を <span class=\"chem\">1000(1 + 0.6/n)^n</span> と書いている（または同値な式）。",
        // EN: A1: limit <span class="chem">1000 e^{0.6}</span>.
        "A1：極限 <span class=\"chem\">1000 e^{0.6}</span>。",
        // EN: A1: <span class="chem">1822.12</span> euros.
        "A1：<span class=\"chem\">1822.12</span> ユーロ。",
      ],
    },

    // ── t5-3-q059 · short · challenge · AHL · AHL 5.12, AHL 1.15 · 19 marks
    "t5-3-q059": {
      // EN: <p>This question investigates higher derivatives of products of a polynomial and <span class="chem">e^x</span>. Write <span class="chem">f^{(n)}(x)</span> for the <i>n</i>th derivative of <i>f</i>.</p><p>(a) Let <span class="chem">f(x) = x e^x</span>. Find <span class="chem">f'(x)</span>, <span class="chem">f''(x)</span> and <span class="chem">f'''(x)</span>. <strong>[3 marks]</strong></p><p>(b) Conjecture an expression for <span class="chem">f^{(n)}(x)</span>. <strong>[1 mark]</strong></p><p>(c) Use mathematical induction to prove your conjecture for all <span class="chem">n \in \mathbb{Z}^+</span>. <strong>[5 marks]</strong></p><p>(d) Let <span class="chem">g(x) = x^2 e^x</span>. Show that if <span class="chem">g^{(n)}(x) = (x^2 + 2nx + n(n - 1)) e^x</span> then <span class="chem">g^{(n+1)}(x) = (x^2 + 2(n + 1)x + (n + 1)n) e^x</span>, and hence state, with a reason, what this proves. <strong>[4 marks]</strong></p><p>(e) Find the smallest value of <i>n</i> for which <span class="chem">g^{(n)}(0) &gt; 1000</span>. <strong>[3 marks]</strong></p><p>(f) Find the exact <i>x</i>-coordinates of the points where the graph of <span class="chem">y = g^{(10)}(x)</span> meets the <i>x</i>-axis. <strong>[3 marks]</strong></p>
      stem: "<p>この問題では、多項式と <span class=\"chem\">e^x</span> の積の高次導関数を調べます。<i>f</i> の第 <i>n</i> 次導関数を <span class=\"chem\">f^{(n)}(x)</span> と書きます。</p><p>(a) <span class=\"chem\">f(x) = x e^x</span> とします。<span class=\"chem\">f'(x)</span>、<span class=\"chem\">f''(x)</span>、<span class=\"chem\">f'''(x)</span> を求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">f^{(n)}(x)</span> を表す式を予想しなさい (Conjecture)。 <strong>[1 mark]</strong></p><p>(c) 数学的帰納法を用いて、その予想がすべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> について成り立つことを証明しなさい (prove)。 <strong>[5 marks]</strong></p><p>(d) <span class=\"chem\">g(x) = x^2 e^x</span> とします。<span class=\"chem\">g^{(n)}(x) = (x^2 + 2nx + n(n - 1)) e^x</span> ならば <span class=\"chem\">g^{(n+1)}(x) = (x^2 + 2(n + 1)x + (n + 1)n) e^x</span> であることを示し (Show that)、これを用いて (hence) これが何を証明するかを理由とともに述べなさい (state)。 <strong>[4 marks]</strong></p><p>(e) <span class=\"chem\">g^{(n)}(0) &gt; 1000</span> となる最小の <i>n</i> の値を求めなさい (Find)。 <strong>[3 marks]</strong></p><p>(f) <span class=\"chem\">y = g^{(10)}(x)</span> のグラフが <i>x</i> 軸と交わる点の <i>x</i> 座標の正確な値を求めなさい (Find)。 <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: compute a few small cases, spot the pattern, then prove it by induction (AHL 1.15). Each new derivative uses the product rule once.
        "解読：いくつかの小さい場合を計算してパターンを見つけ、それを帰納法で証明します（AHL 1.15）。新しく導関数を求めるたびに、積の微分法を 1 回使います。",
        // EN: In (a), keep a factor <span class="chem">e^x</span> outside each time: <span class="chem">d/dx[(x + a)e^x] = (x + a + 1)e^x</span>.
        "(a) では、毎回 <span class=\"chem\">e^x</span> の因数を外に出しておきます：<span class=\"chem\">d/dx[(x + a)e^x] = (x + a + 1)e^x</span>。",
        // EN: In (d), differentiate the bracket and the exponential separately, then collect the terms in <span class="chem">x^2</span>, <i>x</i> and the constant. The step only proves the formula if you also check a starting value.
        "(d) では、かっこの部分と指数関数をそれぞれ微分し、<span class=\"chem\">x^2</span> の項、<i>x</i> の項、定数項をまとめます。この段階が公式の証明になるのは、出発点の値も確認した場合だけです。",
        // EN: In (e), put <span class="chem">x = 0</span>: <span class="chem">g^{(n)}(0) = n(n - 1)</span>. In (f), <span class="chem">e^x</span> is never zero.
        "(e) では <span class=\"chem\">x = 0</span> を代入します：<span class=\"chem\">g^{(n)}(0) = n(n - 1)</span>。(f) では、<span class=\"chem\">e^x</span> は決して 0 になりません。",
      ],
      // EN: <p>Decode: higher derivatives with a pattern call for small cases, a conjecture and an induction proof. (b) <span class="chem">f^{(n)}(x) = (x + n)e^x</span>. (d) The inductive step, with <span class="chem">n = 1</span> checked, proves <span class="chem">g^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span>. (e) <span class="chem">n = 33</span>. (f) <span class="chem">x = -10 +- sqrt(10)</span>.</p>
      solution: "<p>解読：パターンのある高次導関数では、小さい場合の計算、予想、帰納法による証明が必要です。(b) <span class=\"chem\">f^{(n)}(x) = (x + n)e^x</span>。(d) 帰納法の段階に <span class=\"chem\">n = 1</span> の確認を加えることで <span class=\"chem\">g^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span> が証明されます。(e) <span class=\"chem\">n = 33</span>。(f) <span class=\"chem\">x = -10 +- sqrt(10)</span>。</p>",
      // EN: <p>(a) <span class="chem">f'(x) = (x + 1)e^x</span>, <span class="chem">f''(x) = (x + 2)e^x</span>, <span class="chem">f'''(x) = (x + 3)e^x</span>.</p><p>(b) <span class="chem">f^{(n)}(x) = (x + n)e^x</span>.</p><p>(c) <span class="chem">n = 1</span>: <span class="chem">f'(x) = (x + 1)e^x</span>, true. Assume <span class="chem">f^{(k)}(x) = (x + k)e^x</span>. Then <span class="chem">f^{(k+1)}(x) = e^x + (x + k)e^x = (x + k + 1)e^x</span>, which is the statement for <span class="chem">n = k + 1</span>. It is true for <span class="chem">n = 1</span>, and if true for <span class="chem">n = k</span> it is true for <span class="chem">n = k + 1</span>, so it is true for all <span class="chem">n \in \mathbb{Z}^+</span>.</p><p>(d) Differentiating, <span class="chem">g^{(n+1)}(x) = (2x + 2n)e^x + (x^2 + 2nx + n^2 - n)e^x = (x^2 + (2n + 2)x + n^2 + n)e^x = (x^2 + 2(n + 1)x + (n + 1)n)e^x</span>. Also <span class="chem">g'(x) = (x^2 + 2x)e^x</span> matches the formula at <span class="chem">n = 1</span>, so by induction the formula holds for every <span class="chem">n \in \mathbb{Z}^+</span>.</p><p>(e) <span class="chem">g^{(n)}(0) = n(n - 1)</span>. <span class="chem">32 × 31 = 992</span> and <span class="chem">33 × 32 = 1056</span>, so <span class="chem">n = 33</span>.</p><p>(f) <span class="chem">g^{(10)}(x) = (x^2 + 20x + 90)e^x = 0 => x^2 + 20x + 90 = 0 => x = -10 +- sqrt(10)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = (x + 1)e^x</span>、<span class=\"chem\">f''(x) = (x + 2)e^x</span>、<span class=\"chem\">f'''(x) = (x + 3)e^x</span>。</p><p>(b) <span class=\"chem\">f^{(n)}(x) = (x + n)e^x</span>。</p><p>(c) <span class=\"chem\">n = 1</span>：<span class=\"chem\">f'(x) = (x + 1)e^x</span> で成り立つ。<span class=\"chem\">f^{(k)}(x) = (x + k)e^x</span> と仮定する。すると <span class=\"chem\">f^{(k+1)}(x) = e^x + (x + k)e^x = (x + k + 1)e^x</span> で、これは <span class=\"chem\">n = k + 1</span> のときの命題である。<span class=\"chem\">n = 1</span> で成り立ち、<span class=\"chem\">n = k</span> で成り立てば <span class=\"chem\">n = k + 1</span> でも成り立つので、すべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> で成り立つ。</p><p>(d) 微分すると <span class=\"chem\">g^{(n+1)}(x) = (2x + 2n)e^x + (x^2 + 2nx + n^2 - n)e^x = (x^2 + (2n + 2)x + n^2 + n)e^x = (x^2 + 2(n + 1)x + (n + 1)n)e^x</span>。また <span class=\"chem\">g'(x) = (x^2 + 2x)e^x</span> は <span class=\"chem\">n = 1</span> のときの公式と一致するので、帰納法により公式はすべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> で成り立つ。</p><p>(e) <span class=\"chem\">g^{(n)}(0) = n(n - 1)</span>。<span class=\"chem\">32 × 31 = 992</span>、<span class=\"chem\">33 × 32 = 1056</span> なので <span class=\"chem\">n = 33</span>。</p><p>(f) <span class=\"chem\">g^{(10)}(x) = (x^2 + 20x + 90)e^x = 0 => x^2 + 20x + 90 = 0 => x = -10 +- sqrt(10)</span>。</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = (x + 1)e^x</span>.
        "A1：<span class=\"chem\">f'(x) = (x + 1)e^x</span>。",
        // EN: A1: <span class="chem">f''(x) = (x + 2)e^x</span>.
        "A1：<span class=\"chem\">f''(x) = (x + 2)e^x</span>。",
        // EN: A1: <span class="chem">f'''(x) = (x + 3)e^x</span>.
        "A1：<span class=\"chem\">f'''(x) = (x + 3)e^x</span>。",
        // EN: A1: conjecture <span class="chem">f^{(n)}(x) = (x + n)e^x</span>.
        "A1：<span class=\"chem\">f^{(n)}(x) = (x + n)e^x</span> と予想している。",
        // EN: A1: checks <span class="chem">n = 1</span>.
        "A1：<span class=\"chem\">n = 1</span> を確認している。",
        // EN: M1: assumes the result for <span class="chem">n = k</span>.
        "M1：<span class=\"chem\">n = k</span> で結果が成り立つと仮定している。",
        // EN: M1: differentiates <span class="chem">(x + k)e^x</span> with the product rule.
        "M1：積の微分法で <span class=\"chem\">(x + k)e^x</span> を微分している。",
        // EN: A1: obtains <span class="chem">(x + k + 1)e^x</span>.
        "A1：<span class=\"chem\">(x + k + 1)e^x</span> を得ている。",
        // EN: R1: complete induction conclusion (true for <span class="chem">n = 1</span>; true for <i>k</i> implies true for <span class="chem">k + 1</span>; so true for all <span class="chem">n \in \mathbb{Z}^+</span>).
        "R1：帰納法の結論が完全である（<span class=\"chem\">n = 1</span> で成り立つ；<i>k</i> で成り立てば <span class=\"chem\">k + 1</span> で成り立つ；よってすべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> で成り立つ）。",
        // EN: M1: differentiates the product <span class="chem">(x^2 + 2nx + n(n - 1))e^x</span>.
        "M1：積 <span class=\"chem\">(x^2 + 2nx + n(n - 1))e^x</span> を微分している。",
        // EN: A1: collects terms into <span class="chem">x^2 + 2(n + 1)x + (n + 1)n</span>.
        "A1：項をまとめて <span class=\"chem\">x^2 + 2(n + 1)x + (n + 1)n</span> にしている。",
        // EN: A1: checks the formula at <span class="chem">n = 1</span>: <span class="chem">g'(x) = (x^2 + 2x)e^x</span>.
        "A1：<span class=\"chem\">n = 1</span> で公式を確認している：<span class=\"chem\">g'(x) = (x^2 + 2x)e^x</span>。",
        // EN: R1: concludes by induction that the formula holds for all <span class="chem">n \in \mathbb{Z}^+</span>.
        "R1：帰納法により、公式がすべての <span class=\"chem\">n \\in \\mathbb{Z}^+</span> で成り立つと結論づけている。",
        // EN: M1: <span class="chem">g^{(n)}(0) = n(n - 1)</span>.
        "M1：<span class=\"chem\">g^{(n)}(0) = n(n - 1)</span>。",
        // EN: M1: solves <span class="chem">n(n - 1) &gt; 1000</span> (or tests consecutive values).
        "M1：<span class=\"chem\">n(n - 1) &gt; 1000</span> を解いている（または連続する値を調べている）。",
        // EN: A1: <span class="chem">n = 33</span>.
        "A1：<span class=\"chem\">n = 33</span>。",
        // EN: M1: <span class="chem">x^2 + 20x + 90 = 0</span> (since <span class="chem">e^x != 0</span>).
        "M1：<span class=\"chem\">x^2 + 20x + 90 = 0</span>（<span class=\"chem\">e^x != 0</span> なので）。",
        // EN: A1: applies the quadratic formula.
        "A1：解の公式を用いている。",
        // EN: A1: <span class="chem">x = -10 +- sqrt(10)</span>.
        "A1：<span class=\"chem\">x = -10 +- sqrt(10)</span>。",
      ],
    },

  }
});
