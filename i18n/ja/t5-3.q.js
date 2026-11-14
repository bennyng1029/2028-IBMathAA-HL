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
