/* t5-3.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't5-3.q', {
  questions: {

    // ── t5-3-q001 · mcq · foundation · AHL · AHL 5.12 · 2 marks
    "t5-3-q001": {
      // EN: <p>To differentiate <span class="chem">f(x) = 3/x</span> from first principles using <span class="chem">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span>, which algebraic expression is obtained after combining the numerator over a single common denominator (before dividing by <i>h</i> and taking the limit)?</p>
      stem: "<p>도함수의 정의 <span class=\"chem\">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span>를 이용해 <span class=\"chem\">f(x) = 3/x</span>를 미분할 때, 분자를 하나의 공통분모로 통분한 직후(<i>h</i>로 나누고 극한을 취하기 전) 얻어지는 식은 무엇인가요?</p>",
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
        "<span class=\"chem\">f(x + h) - f(x) = 3/(x + h) - 3/x</span>로 써 보세요.",
        // EN: Put both fractions over the common denominator <span class="chem">x(x + h)</span>: <span class="chem">(3x - 3(x + h)) / (x(x + h))</span>.
        "두 분수를 공통분모 <span class=\"chem\">x(x + h)</span>로 통분하세요: <span class=\"chem\">(3x - 3(x + h)) / (x(x + h))</span>.",
      ],
      // EN: <p>We have <span class="chem">f(x + h) - f(x) = 3/(x + h) - 3/x = (3x - 3x - 3h) / (x(x + h)) = -3h / (x(x + h))</span>. Dividing by <i>h</i> and letting <span class="chem">h -> 0</span> gives <span class="chem">f'(x) = -3/x^2</span>.</p>
      solution: "<p><span class=\"chem\">f(x + h) - f(x) = 3/(x + h) - 3/x = (3x - 3x - 3h) / (x(x + h)) = -3h / (x(x + h))</span>이에요. <i>h</i>로 나누고 <span class=\"chem\">h -> 0</span> 극한을 취하면 <span class=\"chem\">f'(x) = -3/x^2</span>이 돼요.</p>",
      misconception: {
        // EN (option B): Check the subtraction order: <span class="chem">3/(x + h) - 3/x = (3x - 3(x + h))/(x(x + h)) = -3h/(x(x + h))</span>, which has a minus sign.
        "1": "뺄셈 순서를 확인하세요: <span class=\"chem\">3/(x + h) - 3/x = (3x - 3(x + h))/(x(x + h)) = -3h/(x(x + h))</span>이므로 음수 부호가 붙어요.",
        // EN (option C): Combining fractions requires the product of denominators <span class="chem">x(x + h)</span>, not <span class="chem">x^2 + h^2</span>.
        "2": "분수를 통분할 때는 <span class=\"chem\">x^2 + h^2</span>이 아니라 두 분모의 곱 <span class=\"chem\">x(x + h)</span>를 써야 해요.",
        // EN (option D): You cannot subtract denominators directly; <span class="chem">1/(x + h) - 1/x != 1/h</span>.
        "3": "분모끼리 바로 뺄 수 없어요; <span class=\"chem\">1/(x + h) - 1/x != 1/h</span>예요.",
      },
    },

    // ── t5-3-q002 · mcq · foundation · AHL · AHL 5.13 · 2 marks
    "t5-3-q002": {
      // EN: <p>A student attempts to evaluate <span class="chem">lim_{x->0} (cos x) / (x + 2)</span> by differentiating numerator and denominator to obtain <span class="chem">lim_{x->0} (-sin x) / 1 = 0</span>. Why is this working invalid?</p>
      stem: "<p>한 학생이 <span class=\"chem\">lim_{x->0} (cos x) / (x + 2)</span>를 구하려고 분자와 분모를 각각 미분해 <span class=\"chem\">lim_{x->0} (-sin x) / 1 = 0</span>을 얻었어요. 이 풀이가 잘못된 이유는 무엇인가요?</p>",
      options: [
        // EN: At <span class="chem">x = 0</span>, the expression approaches <span class="chem">1/2</span>, which is not an indeterminate form <span class="chem">0/0</span> or <span class="chem">infty/infty</span>.
        "<span class=\"chem\">x = 0</span>에서 식이 <span class=\"chem\">1/2</span>로 수렴하므로 <span class=\"chem\">0/0</span>이나 <span class=\"chem\">infty/infty</span> 부정형이 아니에요.",
        // EN: The student should have used the quotient rule <span class="chem">(v u' - u v')/v^2</span> when applying L’Hôpital’s rule.
        "로피탈의 정리를 적용할 때 몫의 미분법 <span class=\"chem\">(v u' - u v')/v^2</span>을 썼어야 해요.",
        // EN: The derivative of <span class="chem">cos x</span> is <span class="chem">+sin x</span>, not <span class="chem">-sin x</span>.
        "<span class=\"chem\">cos x</span>의 도함수는 <span class=\"chem\">-sin x</span>가 아니라 <span class=\"chem\">+sin x</span>예요.",
        // EN: L’Hôpital’s rule can only be used as <span class="chem">x -> infty</span>, never as <span class="chem">x -> 0</span>.
        "로피탈의 정리는 <span class=\"chem\">x -> 0</span>일 때는 쓸 수 없고 <span class=\"chem\">x -> infty</span>일 때만 쓸 수 있어요.",
      ],
      hints: [
        // EN: Substitute <span class="chem">x = 0</span> directly into <span class="chem">(cos x)/(x + 2)</span> before doing any differentiation.
        "미분하기 전에 먼저 <span class=\"chem\">x = 0</span>을 <span class=\"chem\">(cos x)/(x + 2)</span>에 직접 대입해 보세요.",
      ],
      // EN: <p>Direct substitution at <span class="chem">x = 0</span> gives <span class="chem">cos(0) / (0 + 2) = 1/2</span>. Because the limit is not of the indeterminate form <span class="chem">0/0</span> or <span class="chem">infty/infty</span>, L’Hôpital’s rule does not apply.</p>
      solution: "<p><span class=\"chem\">x = 0</span>을 직접 대입하면 <span class=\"chem\">cos(0) / (0 + 2) = 1/2</span>예요. 극한이 <span class=\"chem\">0/0</span> 또는 <span class=\"chem\">infty/infty</span> 부정형이 아니므로 로피탈의 정리를 적용할 수 없어요.</p>",
      misconception: {
        // EN (option B): L’Hôpital’s rule differentiates numerator and denominator separately—never with the quotient rule—but it requires an indeterminate form first.
        "1": "로피탈의 정리는 몫의 미분법이 아니라 분자와 분모를 각각 미분하는 정리이지만, 먼저 부정형 조건을 만족해야 해요.",
        // EN (option C): The derivative of <span class="chem">cos x</span> is indeed <span class="chem">-sin x</span>; the error is applying L’Hôpital’s rule when the denominator is non-zero.
        "2": "<span class=\"chem\">cos x</span>의 도함수는 <span class=\"chem\">-sin x</span>가 맞아요; 잘못된 점은 분모가 0이 아닌데 로피탈의 정리를 쓴 거예요.",
        // EN (option D): L’Hôpital’s rule works for any limit point <span class="chem">x -> a</span> or <span class="chem">x -> +-infty</span>, provided the form is <span class="chem">0/0</span> or <span class="chem">+-infty/+-infty</span>.
        "3": "로피탈의 정리는 <span class=\"chem\">0/0</span> 또는 <span class=\"chem\">+-infty/+-infty</span> 꼴이기만 하면 <span class=\"chem\">x -> a</span>든 <span class=\"chem\">x -> +-infty</span>든 모두 쓸 수 있어요.",
      },
    },

    // ── t5-3-q003 · numeric · foundation · AHL · AHL 5.13 · 3 marks
    "t5-3-q003": {
      // EN: <p>Evaluate <span class="chem">lim_{x->0} (e^{3x} - 1 - 3x) / x^2</span>.</p>
      stem: "<p><span class=\"chem\">lim_{x->0} (e^{3x} - 1 - 3x) / x^2</span>을 계산하시오 (Evaluate).</p>",
      hints: [
        // EN: Check that <span class="chem">x = 0</span> gives <span class="chem">0/0</span>, then apply L’Hôpital’s rule once to get <span class="chem">lim_{x->0} (3e^{3x} - 3) / (2x)</span>.
        "<span class=\"chem\">x = 0</span>에서 <span class=\"chem\">0/0</span> 꼴임을 확인한 뒤, 로피탈의 정리를 한 번 적용해 <span class=\"chem\">lim_{x->0} (3e^{3x} - 3) / (2x)</span>를 얻으세요.",
        // EN: Apply L’Hôpital’s rule a second time: <span class="chem">lim_{x->0} (9e^{3x}) / 2</span>.
        "로피탈의 정리를 두 번째 적용하세요: <span class=\"chem\">lim_{x->0} (9e^{3x}) / 2</span>.",
      ],
      // EN: <p>At <span class="chem">x = 0</span>, the limit has the form <span class="chem">0/0</span>. Applying L’Hôpital’s rule twice gives <span class="chem">lim_{x->0} (3e^{3x} - 3)/(2x) = lim_{x->0} (9e^{3x})/2 = 9/2 = 4.5</span>.</p>
      solution: "<p><span class=\"chem\">x = 0</span>에서 <span class=\"chem\">0/0</span> 부정형이에요. 로피탈의 정리를 두 번 적용하면 <span class=\"chem\">lim_{x->0} (3e^{3x} - 3)/(2x) = lim_{x->0} (9e^{3x})/2 = 9/2 = 4.5</span>예요.</p>",
    },

    // ── t5-3-q004 · mcq · foundation · AHL · AHL 5.15 · 2 marks
    "t5-3-q004": {
      // EN: <p>Find the derivative of <span class="chem">f(x) = arcsin(3x)</span> for <span class="chem">|x| &lt; 1/3</span>.</p>
      stem: "<p><span class=\"chem\">|x| &lt; 1/3</span>일 때 <span class=\"chem\">f(x) = arcsin(3x)</span>의 도함수를 구하시오 (Find).</p>",
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
        "공식집의 공식 <span class=\"chem\">d/du(arcsin u) = 1/sqrt(1 - u^2)</span>에 <span class=\"chem\">u = 3x</span>를 넣고 <span class=\"chem\">du/dx = 3</span>을 곱하세요.",
      ],
      // EN: <p>By the chain rule, <span class="chem">f'(x) = (1 / sqrt(1 - (3x)^2)) × 3 = 3 / sqrt(1 - 9x^2)</span>.</p>
      solution: "<p>연쇄법칙에 의해 <span class=\"chem\">f'(x) = (1 / sqrt(1 - (3x)^2)) × 3 = 3 / sqrt(1 - 9x^2)</span>예요.</p>",
      misconception: {
        // EN (option B): You forgot to multiply by the inner derivative <span class="chem">d/dx(3x) = 3</span> from the chain rule.
        "1": "연쇄법칙에서 속미분 <span class=\"chem\">d/dx(3x) = 3</span>을 곱하는 것을 잊었어요.",
        // EN (option C): Remember to square the entire inner argument <span class="chem">(3x)^2 = 9x^2</span> inside the square root.
        "2": "근호 안에서 <span class=\"chem\">(3x)^2 = 9x^2</span>처럼 전체를 제곱해야 해요.",
        // EN (option D): <span class="chem">1/(1 + u^2)</span> is the derivative of <span class="chem">arctan u</span>, not <span class="chem">arcsin u</span>.
        "3": "<span class=\"chem\">1/(1 + u^2)</span>는 <span class=\"chem\">arcsin u</span>가 아니라 <span class=\"chem\">arctan u</span>의 도함수예요.",
      },
    },

    // ── t5-3-q005 · numeric · foundation · AHL · AHL 5.14 · 4 marks
    "t5-3-q005": {
      // EN: <p>A curve is defined implicitly by <span class="chem">x^2 + xy + y^2 = 7</span>. Find the gradient <span class="chem">dy/dx</span> of the curve at the point <span class="chem">(2, 1)</span>.</p>
      stem: "<p>곡선이 음함수 방정식 <span class=\"chem\">x^2 + xy + y^2 = 7</span>로 정의되어 있어요. 점 <span class=\"chem\">(2, 1)</span>에서 이 곡선의 기울기 <span class=\"chem\">dy/dx</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: Differentiate every term with respect to <i>x</i>: <span class="chem">2x + (y + x dy/dx) + 2y dy/dx = 0</span>.
        "모든 항을 <i>x</i>에 대해 미분하세요: <span class=\"chem\">2x + (y + x dy/dx) + 2y dy/dx = 0</span>.",
        // EN: Substitute <span class="chem">x = 2</span> and <span class="chem">y = 1</span> into the differentiated equation and solve for <span class="chem">dy/dx</span>.
        "미분한 식에 <span class=\"chem\">x = 2</span>와 <span class=\"chem\">y = 1</span>을 대입해 <span class=\"chem\">dy/dx</span>를 구하세요.",
      ],
      // EN: <p>Differentiating implicitly with respect to <i>x</i> gives <span class="chem">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>. At <span class="chem">(2, 1)</span>: <span class="chem">4 + 1 + (2 + 2)(dy/dx) = 0 => 4(dy/dx) = -5 => dy/dx = -5/4 = -1.25</span>.</p>
      solution: "<p>양변을 <i>x</i>에 대해 음함수 미분하면 <span class=\"chem\">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>이에요. <span class=\"chem\">(2, 1)</span>을 대입하면 <span class=\"chem\">4 + 1 + (2 + 2)(dy/dx) = 0 => 4(dy/dx) = -5 => dy/dx = -5/4 = -1.25</span>예요.</p>",
    },

    // ── t5-3-q006 · multi · foundation · AHL · AHL 5.15–5.16 · 3 marks
    "t5-3-q006": {
      // EN: <p>Select <strong>all</strong> integrals below whose exact value on the given interval equals <span class="chem">pi / 4</span>.</p>
      stem: "<p>주어진 구간에서 정확한 값이 <span class=\"chem\">pi / 4</span>와 같은 적분을 아래에서 <strong>모두</strong> 고르시오.</p>",
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
        "<span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a)</span>와 <span class=\"chem\">int 1/sqrt(1 - x^2) dx = arcsin x</span>을 써서 각 적분을 확인해 보세요.",
      ],
      // EN: <p>A: <span class="chem">[arctan x]_0^1 = pi/4</span>. B: <span class="chem">2[(1/2) arctan(x/2)]_0^2 = arctan(1) = pi/4</span>. C: <span class="chem">[arcsin x]_0^{1/sqrt(2)} = pi/4</span>. D gives <span class="chem">pi/8</span>.</p>
      solution: "<p>A: <span class=\"chem\">[arctan x]_0^1 = pi/4</span>. B: <span class=\"chem\">2[(1/2) arctan(x/2)]_0^2 = arctan(1) = pi/4</span>. C: <span class=\"chem\">[arcsin x]_0^{1/sqrt(2)} = pi/4</span>. D는 <span class=\"chem\">pi/8</span>이에요.</p>",
      misconception: {
        // EN (option D): By the Formula Booklet, <span class="chem">int_0^2 1/(2^2 + x^2) dx = [(1/2) arctan(x/2)]_0^2 = (1/2)(pi/4) = pi/8</span> because of the <span class="chem">1/a</span> factor.
        "3": "공식집에 따라 <span class=\"chem\">1/a</span> 인수가 붙기 때문에 <span class=\"chem\">int_0^2 1/(2^2 + x^2) dx = [(1/2) arctan(x/2)]_0^2 = (1/2)(pi/4) = pi/8</span>이에요.",
      },
    },

    // ── t5-3-q007 · order · exam · AHL · AHL 5.16 · 4 marks
    "t5-3-q007": {
      // EN: <p>Arrange the steps in the correct logical order to evaluate the definite integral <span class="chem">int_0^{pi/2} x cos(x) dx</span> using integration by parts.</p>
      stem: "<p>부분적분법을 이용해 정적분 <span class=\"chem\">int_0^{pi/2} x cos(x) dx</span>를 계산하는 단계를 논리적인 순서대로 배열하시오.</p>",
      options: [
        // EN: Choose <span class="chem">u = x</span> and <span class="chem">dv/dx = cos x</span> following the LIATE priority rule.
        "LIATE 우선순위에 따라 <span class=\"chem\">u = x</span>, <span class=\"chem\">dv/dx = cos x</span>로 잡는다.",
        // EN: Differentiate and integrate to find <span class="chem">du/dx = 1</span> and <span class=\"chem">v = sin x</span>.
        "미분과 적분을 해 <span class=\"chem\">du/dx = 1</span>과 <span class=\"chem\">v = sin x</span>를 구한다.",
        // EN: Apply the parts formula: <span class="chem">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>.
        "부분적분 공식을 적용한다: <span class=\"chem\">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>.",
        // EN: Evaluate the anti-derivative <span class="chem">[x sin x + cos x]_0^{pi/2} = (pi/2 + 0) - (0 + 1) = pi/2 - 1</span>.
        "부정적분을 계산한다: <span class=\"chem\">[x sin x + cos x]_0^{pi/2} = (pi/2 + 0) - (0 + 1) = pi/2 - 1</span>.",
      ],
      hints: [
        // EN: Start by identifying <i>u</i> and <span class="chem">dv/dx</span>, then compute <span class="chem">du/dx</span> and <i>v</i> before assembling <span class="chem">uv - int v du</span>.
        "먼저 <i>u</i>와 <span class=\"chem\">dv/dx</span>를 정하고, <span class=\"chem\">du/dx</span>와 <i>v</i>를 구한 다음 <span class=\"chem\">uv - int v du</span>에 대입하세요.",
      ],
      // EN: <p>Choose <span class="chem">u = x, dv/dx = cos x</span>, find <span class="chem">du/dx = 1, v = sin x</span>, write <span class="chem">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>, and evaluate <span class="chem">[x sin x + cos x]_0^{pi/2} = pi/2 - 1</span>.</p>
      solution: "<p><span class=\"chem\">u = x, dv/dx = cos x</span>로 잡고 <span class=\"chem\">du/dx = 1, v = sin x</span>를 구한 뒤 <span class=\"chem\">[x sin x]_0^{pi/2} - int_0^{pi/2} sin x dx</span>를 세우고 <span class=\"chem\">[x sin x + cos x]_0^{pi/2} = pi/2 - 1</span>로 계산해요.</p>",
    },

    // ── t5-3-q008 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q008": {
      // EN: <p>Using the substitution <span class="chem">u = 1 + x^2</span> (or otherwise), find the exact value of <span class="chem">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span>.</p>
      stem: "<p>치환 <span class=\"chem\">u = 1 + x^2</span>을 이용하거나 다른 방법으로 <span class=\"chem\">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Let <span class="chem">u = 1 + x^2</span>, so <span class="chem">du = 2x dx</span> and <span class="chem">x^2 = u - 1</span>. Transform the limits: <span class="chem">x = 0 -> u = 1</span> and <span class="chem">x = 2 -> u = 5</span>.
        "<span class=\"chem\">u = 1 + x^2</span>으로 놓으면 <span class=\"chem\">du = 2x dx</span>, <span class=\"chem\">x^2 = u - 1</span>이에요. 적분 구간도 <span class=\"chem\">x = 0 -> u = 1</span>, <span class=\"chem\">x = 2 -> u = 5</span>로 바꾸세요.",
        // EN: Rewrite the integral as <span class="chem">int_1^5 (u - 1) / sqrt(u) du = int_1^5 (u^{1/2} - u^{-1/2}) du</span>.
        "적분을 <span class=\"chem\">int_1^5 (u - 1) / sqrt(u) du = int_1^5 (u^{1/2} - u^{-1/2}) du</span>로 고쳐 쓰세요.",
      ],
      // EN: <p>Let <span class="chem">u = 1 + x^2</span>, <span class="chem">du = 2x dx</span>, <span class="chem">x^2 = u - 1</span>, with limits <span class="chem">u = 1</span> to <span class="chem">u = 5</span>. Then <span class="chem">int_1^5 (u^{1/2} - u^{-1/2}) du = [(2/3)u^{3/2} - 2u^{1/2}]_1^5 = ((10/3)sqrt(5) - 2sqrt(5)) - (2/3 - 2) = (4/3)sqrt(5) + 4/3 = (4/3)(sqrt(5) + 1) ≈ 4.31</span>.</p>
      solution: "<p><span class=\"chem\">u = 1 + x^2</span>, <span class=\"chem\">du = 2x dx</span>, <span class=\"chem\">x^2 = u - 1</span>로 놓고 구간을 <span class=\"chem\">u = 1</span>에서 <span class=\"chem\">u = 5</span>로 바꾸면, <span class=\"chem\">int_1^5 (u^{1/2} - u^{-1/2}) du = [(2/3)u^{3/2} - 2u^{1/2}]_1^5 = ((10/3)sqrt(5) - 2sqrt(5)) - (2/3 - 2) = (4/3)sqrt(5) + 4/3 = (4/3)(sqrt(5) + 1) ≈ 4.31</span>이에요.</p>",
    },

    // ── t5-3-q009 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q009": {
      // EN: <p>Find the exact value of <span class="chem">int_1^e x^2 ln(x) dx</span>. (Enter an exact expression in terms of <span class="mono">e</span>.)</p>
      stem: "<p><span class=\"chem\">int_1^e x^2 ln(x) dx</span>의 정확한 값을 구하시오 (Find). (<span class=\"mono\">e</span>를 포함한 정확한 식으로 입력하세요.)</p>",
      hints: [
        // EN: By LIATE, choose <span class="chem">u = ln x</span> (<span class="chem">du/dx = 1/x</span>) and <span class="chem">dv/dx = x^2</span> (<span class="chem">v = x^3 / 3</span>).
        "LIATE에 따라 <span class=\"chem\">u = ln x</span> (<span class=\"chem\">du/dx = 1/x</span>)와 <span class=\"chem\">dv/dx = x^2</span> (<span class=\"chem\">v = x^3 / 3</span>)으로 잡으세요.",
        // EN: Apply integration by parts: <span class="chem">[(x^3 / 3) ln x]_1^e - int_1^e (x^2 / 3) dx = [x^3 / 3 ln x - x^3 / 9]_1^e</span>.
        "부분적분법을 적용하세요: <span class=\"chem\">[(x^3 / 3) ln x]_1^e - int_1^e (x^2 / 3) dx = [x^3 / 3 ln x - x^3 / 9]_1^e</span>.",
      ],
      // EN: <p>Let <span class="chem">u = ln x</span> and <span class="chem">dv/dx = x^2</span>, so <span class="chem">du/dx = 1/x</span> and <span class="chem">v = x^3/3</span>. Then <span class="chem">int_1^e x^2 ln x dx = [(x^3/3)ln x]_1^e - int_1^e (x^2/3) dx = (e^3/3 - 0) - [x^3/9]_1^e = e^3/3 - (e^3 - 1)/9 = (2e^3 + 1)/9 ≈ 4.57</span>.</p>
      solution: "<p><span class=\"chem\">u = ln x</span>, <span class=\"chem\">dv/dx = x^2</span>으로 놓으면 <span class=\"chem\">du/dx = 1/x</span>, <span class=\"chem\">v = x^3/3</span>이에요. 따라서 <span class=\"chem\">int_1^e x^2 ln x dx = [(x^3/3)ln x]_1^e - int_1^e (x^2/3) dx = (e^3/3 - 0) - [x^3/9]_1^e = e^3/3 - (e^3 - 1)/9 = (2e^3 + 1)/9 ≈ 4.57</span>이에요.</p>",
    },

    // ── t5-3-q010 · mcq · exam · AHL · AHL 5.15 · 2 marks
    "t5-3-q010": {
      // EN: <p>By completing the square in the denominator, find <span class="chem">int 1 / (x^2 - 4x + 13) dx</span>.</p>
      stem: "<p>분모를 완전제곱식으로 변형하여 <span class=\"chem\">int 1 / (x^2 - 4x + 13) dx</span>를 구하시오 (Find).</p>",
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
        "완전제곱식으로 변형하세요: <span class=\"chem\">x^2 - 4x + 13 = (x - 2)^2 - 4 + 13 = (x - 2)^2 + 3^2</span>.",
        // EN: Use the Formula Booklet standard integral <span class="chem">int 1/(u^2 + a^2) du = (1/a) arctan(u/a) + C</span> with <span class="chem">u = x - 2</span> and <span class="chem">a = 3</span>.
        "<span class=\"chem\">u = x - 2</span>, <span class=\"chem\">a = 3</span>으로 놓고 공식집의 기본 적분 <span class=\"chem\">int 1/(u^2 + a^2) du = (1/a) arctan(u/a) + C</span>을 쓰세요.",
      ],
      // EN: <p>Since <span class="chem">x^2 - 4x + 13 = (x - 2)^2 + 3^2</span>, the integral is <span class="chem">int 1/((x - 2)^2 + 3^2) dx = (1/3) arctan((x - 2)/3) + C</span>.</p>
      solution: "<p><span class=\"chem\">x^2 - 4x + 13 = (x - 2)^2 + 3^2</span>이므로 적분은 <span class=\"chem\">int 1/((x - 2)^2 + 3^2) dx = (1/3) arctan((x - 2)/3) + C</span>예요.</p>",
      misconception: {
        // EN (option B): Don’t forget the <span class="chem">1/a = 1/3</span> coefficient in front of <span class="chem">arctan((x - 2)/3)</span>!
        "1": "<span class=\"chem\">arctan((x - 2)/3)</span> 앞의 계수 <span class=\"chem\">1/a = 1/3</span>을 빼먹지 마세요!",
        // EN (option C): Since <span class="chem">a^2 = 9</span>, we have <span class="chem">a = 3</span>, not <span class="chem">9</span>.
        "2": "<span class=\"chem\">a^2 = 9</span>이므로 <span class=\"chem\">a = 3</span>이지 <span class=\"chem\">9</span>가 아니에요.",
        // EN (option D): There is no square root in the denominator, so this is an <span class=\"chem\">arctan</span> integral, not <span class=\"chem\">arcsin</span>.
        "3": "분모에 제곱근이 없으므로 <span class=\"chem\">arcsin</span>이 아니라 <span class=\"chem\">arctan</span> 적분이에요.",
      },
    },

    // ── t5-3-q011 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q011": {
      // EN: <p>Given that <span class="chem">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span>, find the exact value of <span class="chem">int_3^4 6 / (x^2 - x - 2) dx</span>.</p>
      stem: "<p><span class=\"chem\">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span>일 때, <span class=\"chem\">int_3^4 6 / (x^2 - x - 2) dx</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Factor <span class="chem">x^2 - x - 2 = (x - 2)(x + 1)</span>. Cover-up method gives <span class="chem">A = 6/(2 + 1) = 2</span> and <span class="chem">B = 6/(-1 - 2) = -2</span>.
        "<span class=\"chem\">x^2 - x - 2 = (x - 2)(x + 1)</span>로 인수분해돼요. 값을 대입하면 <span class=\"chem\">A = 6/(2 + 1) = 2</span>, <span class=\"chem\">B = 6/(-1 - 2) = -2</span>예요.",
        // EN: Integrate <span class="chem">[2 ln|x - 2| - 2 ln|x + 1|]_3^4 = [2 ln|(x - 2)/(x + 1)|]_3^4</span>.
        "적분하면 <span class=\"chem\">[2 ln|x - 2| - 2 ln|x + 1|]_3^4 = [2 ln|(x - 2)/(x + 1)|]_3^4</span>예요.",
      ],
      // EN: <p>Using partial fractions, <span class="chem">6/((x - 2)(x + 1)) = 2/(x - 2) - 2/(x + 1)</span>. Integrating from <span class="chem">3</span> to <span class="chem">4</span> gives <span class="chem">[2 ln((x - 2)/(x + 1))]_3^4 = 2 ln(2/5) - 2 ln(1/4) = 2 ln(8/5) ≈ 0.940</span>.</p>
      solution: "<p>부분분수 분해를 하면 <span class=\"chem\">6/((x - 2)(x + 1)) = 2/(x - 2) - 2/(x + 1)</span>이에요. <span class=\"chem\">3</span>에서 <span class=\"chem\">4</span>까지 적분하면 <span class=\"chem\">[2 ln((x - 2)/(x + 1))]_3^4 = 2 ln(2/5) - 2 ln(1/4) = 2 ln(8/5) ≈ 0.940</span>이에요.</p>",
      // EN: 2 ln(8/5) ≈ 0.940
      answerDisplay: "2 ln(8/5) ≈ 0.940",
    },

    // ── t5-3-q012 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q012": {
      // EN: <p>A spherical balloon is being inflated so that its volume increases at a constant rate of <span class="unit">100 cm3 s-1</span>. Find the rate at which its surface area <span class="chem">A = 4 pi r^2</span> is increasing when the radius is <span class="chem">r = 5</span> <span class="unit">cm</span>.</p>
      stem: "<p>구 모양의 풍선이 부피가 매초 <span class=\"unit\">100 cm3 s-1</span>의 일정한 비율로 커지도록 부풀어 오르고 있어요. 반지름이 <span class=\"chem\">r = 5</span> <span class=\"unit\">cm</span>일 때 겉넓이 <span class=\"chem\">A = 4 pi r^2</span>가 증가하는 비율을 구하시오 (Find).</p>",
      hints: [
        // EN: For a sphere, <span class="chem">V = (4/3) pi r^3 => dV/dr = 4 pi r^2</span>, and <span class="chem">A = 4 pi r^2 => dA/dr = 8 pi r</span>.
        "구에서 <span class=\"chem\">V = (4/3) pi r^3 => dV/dr = 4 pi r^2</span>이고, <span class=\"chem\">A = 4 pi r^2 => dA/dr = 8 pi r</span>이에요.",
        // EN: By the chain rule, <span class="chem">dA/dt = (dA/dr) / (dV/dr) × (dV/dt) = (8 pi r) / (4 pi r^2) × 100 = (2/r) × 100</span>.
        "연쇄법칙에 의해 <span class=\"chem\">dA/dt = (dA/dr) / (dV/dr) × (dV/dt) = (8 pi r) / (4 pi r^2) × 100 = (2/r) × 100</span>이에요.",
      ],
      // EN: <p>We have <span class="chem">dV/dr = 4 pi r^2</span> and <span class="chem">dA/dr = 8 pi r</span>. By the chain rule, <span class="chem">dA/dt = (dA/dr)(dr/dt) = (8 pi r) × (100 / (4 pi r^2)) = 200 / r</span>. When <span class="chem">r = 5</span> <span class="unit">cm</span>, <span class="chem">dA/dt = 200 / 5 = 40</span> <span class="unit">cm2 s-1</span>.</p>
      solution: "<p><span class=\"chem\">dV/dr = 4 pi r^2</span>이고 <span class=\"chem\">dA/dr = 8 pi r</span>이에요. 연쇄법칙에 의해 <span class=\"chem\">dA/dt = (dA/dr)(dr/dt) = (8 pi r) × (100 / (4 pi r^2)) = 200 / r</span>이에요. <span class=\"chem\">r = 5</span> <span class=\"unit\">cm</span>일 때 <span class=\"chem\">dA/dt = 200 / 5 = 40</span> <span class=\"unit\">cm2 s-1</span>이에요.</p>",
    },

    // ── t5-3-q013 · mcq · exam · AHL · AHL 5.17 · 2 marks
    "t5-3-q013": {
      // EN: <p>The region bounded by <span class="chem">y = cos x</span>, the <i>x</i>-axis, <span class="chem">x = 0</span>, and <span class="chem">x = pi/2</span> is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. What is the exact volume of the solid formed?</p>
      stem: "<p><span class=\"chem\">y = cos x</span>, <i>x</i>축, <span class=\"chem\">x = 0</span>, <span class=\"chem\">x = pi/2</span>로 둘러싸인 영역을 <i>x</i>축 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시켜요. 이때 생기는 회전체의 정확한 부피는 얼마인가요?</p>",
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
        "<span class=\"chem\">V = pi int_0^{pi/2} cos^2(x) dx</span>로 식을 세우세요.",
        // EN: Use the double-angle identity <span class="chem">cos^2 x = (1 + cos(2x))/2</span>.
        "배각의 공식 <span class=\"chem\">cos^2 x = (1 + cos(2x))/2</span>를 사용하세요.",
      ],
      // EN: <p><span class="chem">V = pi int_0^{pi/2} cos^2 x dx = (pi/2) int_0^{pi/2} (1 + cos 2x) dx = (pi/2) [x + (1/2)sin 2x]_0^{pi/2} = (pi/2)(pi/2 + 0) = pi^2 / 4</span>.</p>
      solution: "<p><span class=\"chem\">V = pi int_0^{pi/2} cos^2 x dx = (pi/2) int_0^{pi/2} (1 + cos 2x) dx = (pi/2) [x + (1/2)sin 2x]_0^{pi/2} = (pi/2)(pi/2 + 0) = pi^2 / 4</span>이에요.</p>",
      misconception: {
        // EN (option B): You probably dropped the outer factor <span class="chem">pi</span> and also lost the <span class="chem">1/2</span> in <span class="chem">cos^2 x = (1 + cos 2x)/2</span>: that gives <span class="chem">int_0^{pi/2} (1 + cos 2x) dx = pi/2</span>. In fact <span class="chem">int_0^{pi/2} cos^2 x dx = pi/4</span>, so <span class="chem">V = pi(pi/4) = pi^2/4</span>.
        "1": "바깥의 인수 <span class=\"chem\">pi</span>를 빠뜨리고, <span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span>의 <span class=\"chem\">1/2</span>도 빠뜨렸을 가능성이 커요. 그러면 <span class=\"chem\">int_0^{pi/2} (1 + cos 2x) dx = pi/2</span>가 나와요. 실제로는 <span class=\"chem\">int_0^{pi/2} cos^2 x dx = pi/4</span>이므로 <span class=\"chem\">V = pi(pi/4) = pi^2/4</span>예요.",
        // EN (option C): Remember <span class="chem">cos^2 x = (1 + cos 2x)/2</span> has a factor of <span class="chem">1/2</span>, so <span class="chem">int_0^{pi/2} cos^2 x dx = pi/4</span>, not <span class="chem">pi/2</span>.
        "2": "<span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span>에 <span class=\"chem\">1/2</span>이 있으므로 <span class=\"chem\">pi/2</span>가 아니라 <span class=\"chem\">int_0^{pi/2} cos^2 x dx = pi/4</span>예요.",
        // EN (option D): That is <span class="chem">pi int_0^{pi/2} cos x dx = pi</span>, which fails to square the radius <i>y</i>.
        "3": "그 값은 반지름 <i>y</i>를 제곱하지 않고 계산한 <span class=\"chem\">pi int_0^{pi/2} cos x dx = pi</span>예요.",
      },
    },

    // ── t5-3-q014 · short · exam · AHL · AHL 5.14 · 6 marks
    "t5-3-q014": {
      // EN: <p>A curve is given by the implicit equation <span class="chem">x^2 + xy + y^2 = 12</span>.</p><p>(a) Show that <span class="chem">dy/dx = -(2x + y) / (x + 2y)</span>. <strong>[3 marks]</strong></p><p>(b) Hence find the coordinates of the two stationary points on the curve. <strong>[3 marks]</strong></p>
      stem: "<p>곡선이 음함수 방정식 <span class=\"chem\">x^2 + xy + y^2 = 12</span>로 주어져 있어요.</p><p>(a) <span class=\"chem\">dy/dx = -(2x + y) / (x + 2y)</span>임을 보이시오 (Show that). <strong>[3 marks]</strong></p><p>(b) 이를 이용하여 (Hence) 곡선 위의 두 정류점의 좌표를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: In part (a), remember to apply the product rule to <span class="chem">xy</span> and the chain rule to <span class="chem">y^2</span>.
        "(a)에서는 <span class=\"chem\">xy</span>에 곱의 미분법을, <span class=\"chem\">y^2</span>에 연쇄법칙을 적용하세요.",
        // EN: In part (b), a stationary point has <span class="chem">dy/dx = 0</span>, so set the numerator <span class="chem">2x + y = 0</span> and substitute <span class=\"chem">y = -2x</span> into the original curve.
        "(b)에서 정류점은 <span class=\"chem\">dy/dx = 0</span>이므로 분자 <span class=\"chem\">2x + y = 0</span>으로 놓고 <span class=\"chem\">y = -2x</span>를 원래 곡선 방정식에 대입하세요.",
      ],
      // EN: <p>(a) Differentiating both sides with respect to <i>x</i>: <span class="chem">2x + (y + x dy/dx) + 2y dy/dx = 0</span>. Grouping <span class="chem">dy/dx</span> terms gives <span class="chem">(x + 2y) dy/dx = -(2x + y) => dy/dx = -(2x + y)/(x + 2y)</span>.</p><p>(b) Stationary points occur where <span class="chem">dy/dx = 0 => 2x + y = 0 => y = -2x</span>. Substituting into the curve: <span class="chem">x^2 + x(-2x) + (-2x)^2 = 12 => 3x^2 = 12 => x = +-2</span>. Thus the stationary points are <span class="chem">(2, -4)</span> and <span class="chem">(-2, 4)</span>.</p>
      answer: "<p>(a) 양변을 <i>x</i>에 대해 미분하면 <span class=\"chem\">2x + (y + x dy/dx) + 2y dy/dx = 0</span>이에요. <span class=\"chem\">dy/dx</span> 항을 묶으면 <span class=\"chem\">(x + 2y) dy/dx = -(2x + y) => dy/dx = -(2x + y)/(x + 2y)</span>가 돼요.</p><p>(b) 정류점은 <span class=\"chem\">dy/dx = 0 => 2x + y = 0 => y = -2x</span>인 곳이에요. 곡선 식에 대입하면 <span class=\"chem\">x^2 + x(-2x) + (-2x)^2 = 12 => 3x^2 = 12 => x = +-2</span>이므로, 두 정류점은 <span class=\"chem\">(2, -4)</span>와 <span class=\"chem\">(-2, 4)</span>예요.</p>",
      markscheme: [
        // EN: M1: applies product rule to <span class="chem">xy</span> to get <span class="chem">y + x(dy/dx)</span> and chain rule to <span class="chem">y^2</span> to get <span class="chem">2y(dy/dx)</span>.
        "M1: <span class=\"chem\">xy</span>에 곱의 미분법을 적용해 <span class=\"chem\">y + x(dy/dx)</span>, <span class=\"chem\">y^2</span>에 연쇄법칙을 적용해 <span class=\"chem\">2y(dy/dx)</span>를 얻음.",
        // EN: A1: correct differentiated equation <span class="chem">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>.
        "A1: 미분한 방정식 <span class=\"chem\">2x + y + x(dy/dx) + 2y(dy/dx) = 0</span>을 정확히 구함.",
        // EN: A1: groups the <span class="chem">dy/dx</span> terms: <span class="chem">(x + 2y) dy/dx = -(2x + y)</span>, leading to the given answer <span class="chem">dy/dx = -(2x + y)/(x + 2y)</span> AG (no mark for the given line).
        "A1: <span class=\"chem\">dy/dx</span> 항을 묶어 <span class=\"chem\">(x + 2y) dy/dx = -(2x + y)</span>를 얻고, 주어진 식 <span class=\"chem\">dy/dx = -(2x + y)/(x + 2y)</span>로 이어짐 AG (주어진 식 자체에는 점수 없음).",
        // EN: M1: sets numerator <span class="chem">2x + y = 0</span> (<span class="chem">y = -2x</span>) for stationary points.
        "M1: 정류점 조건으로 분자 <span class=\"chem\">2x + y = 0</span> (<span class=\"chem\">y = -2x</span>)을 세움.",
        // EN: M1: substitutes <span class="chem">y = -2x</span> into <span class="chem">x^2 + xy + y^2 = 12</span> to obtain <span class="chem">3x^2 = 12</span>.
        "M1: <span class=\"chem\">y = -2x</span>를 <span class=\"chem\">x^2 + xy + y^2 = 12</span>에 대입해 <span class=\"chem\">3x^2 = 12</span>를 얻음.",
        // EN: A1: both coordinate pairs <span class="chem">(2, -4)</span> and <span class="chem">(-2, 4)</span> correct.
        "A1: 두 좌표 <span class=\"chem\">(2, -4)</span>와 <span class=\"chem\">(-2, 4)</span>를 모두 정확히 구함.",
      ],
    },

    // ── t5-3-q015 · numeric · challenge · AHL · AHL 5.16 · 6 marks
    "t5-3-q015": {
      // EN: <p>By integrating by parts twice, find the exact value of the cyclic integral <span class="chem">I = int_0^{pi/2} e^{2x} sin(x) dx</span>. (You can type an exact expression in terms of <span class="mono">e</span> and <span class="mono">pi</span> such as <span class="mono">(e^pi-1)/2</span>.)</p>
      stem: "<p>부분적분법을 두 번 적용하여 순환형 적분 <span class=\"chem\">I = int_0^{pi/2} e^{2x} sin(x) dx</span>의 정확한 값을 구하시오 (Find). (<span class=\"mono\">(e^pi-1)/2</span>처럼 <span class=\"mono\">e</span>와 <span class=\"mono\">pi</span>를 포함한 정확한 식로 입력할 수 있어요.)</p>",
      hints: [
        // EN: Decode: "cyclic" means that integrating by parts twice brings back the original integral <span class="chem">I</span>. Keep the same choice <span class="chem">dv/dx = e^{2x}</span> both times, then solve the resulting linear equation for <span class="chem">I</span>.
        "해석: \"순환형\"이란 부분적분을 두 번 하면 원래의 적분 <span class=\"chem\">I</span>가 다시 나타난다는 뜻입니다. 두 번 모두 같은 선택 <span class=\"chem\">dv/dx = e^{2x}</span>를 사용한 다음, 얻어진 <span class=\"chem\">I</span>에 대한 일차방정식을 푸세요.",
        // EN: First parts (<span class="chem">u = sin x, dv/dx = e^{2x}</span>): <span class="chem">I = [(1/2)e^{2x} sin x]_0^{pi/2} - (1/2) int_0^{pi/2} e^{2x} cos x dx = (1/2)e^{pi} - (1/2) int_0^{pi/2} e^{2x} cos x dx</span>.
        "첫 번째 부분적분(<span class=\"chem\">u = sin x, dv/dx = e^{2x}</span>): <span class=\"chem\">I = [(1/2)e^{2x} sin x]_0^{pi/2} - (1/2) int_0^{pi/2} e^{2x} cos x dx = (1/2)e^{pi} - (1/2) int_0^{pi/2} e^{2x} cos x dx</span>.",
        // EN: Second parts on <span class="chem">int_0^{pi/2} e^{2x} cos x dx</span> (<span class="chem">u = cos x, dv/dx = e^{2x}</span>) gives <span class="chem">[(1/2)e^{2x} cos x]_0^{pi/2} + (1/2)I = -1/2 + (1/2)I</span>. Substitute back and solve for <i>I</i>!
        "<span class=\"chem\">int_0^{pi/2} e^{2x} cos x dx</span>에 두 번째 부분적분(<span class=\"chem\">u = cos x, dv/dx = e^{2x}</span>)을 적용하면 <span class=\"chem\">[(1/2)e^{2x} cos x]_0^{pi/2} + (1/2)I = -1/2 + (1/2)I</span>예요. 다시 대입해서 <i>I</i>를 구하세요!",
      ],
      // EN: <p>Integrating by parts twice gives <span class="chem">I = (1/2)e^{pi} - (1/2)(-1/2 + (1/2)I) = (1/2)e^{pi} + 1/4 - (1/4)I</span>. Thus <span class="chem">(5/4)I = (2e^{pi} + 1)/4 => I = (2e^{pi} + 1)/5 ≈ 9.46</span>.</p>
      solution: "<p>부분적분을 두 번 하면 <span class=\"chem\">I = (1/2)e^{pi} - (1/2)(-1/2 + (1/2)I) = (1/2)e^{pi} + 1/4 - (1/4)I</span>예요. 따라서 <span class=\"chem\">(5/4)I = (2e^{pi} + 1)/4 => I = (2e^{pi} + 1)/5 ≈ 9.46</span>이에요.</p>",
    },

    // ── t5-3-q016 · numeric · challenge · AHL · AHL 5.13 · 6 marks
    "t5-3-q016": {
      // EN: <p>Given that the limit <span class="chem">lim_{x->0} (sin(2x) + k x cos(x)) / x^3</span> exists and is finite, find the exact value of that limit.</p>
      stem: "<p>극한 <span class=\"chem\">lim_{x->0} (sin(2x) + k x cos(x)) / x^3</span>이 존재하고 유한할 때, 그 극한의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: <span class="chem">k</span> is not given, but "the limit exists and is finite" fixes it. The form is <span class="chem">0/0</span>; if after one application of L’Hôpital’s rule the denominator still tends to 0, the numerator must tend to 0 as well.
        "해석: <span class=\"chem\">k</span>는 주어지지 않았지만 \"극한이 존재하고 유한하다\"는 조건이 그 값을 정합니다. 꼴은 <span class=\"chem\">0/0</span>입니다. 로피탈의 정리를 한 번 적용한 뒤에도 분모가 0으로 가면 분자도 0으로 가야 합니다.",
        // EN: Apply L’Hôpital’s rule once: <span class="chem">lim_{x->0} (2 cos(2x) + k cos x - k x sin x) / (3x^2)</span>. Since the denominator goes to 0, the numerator at <span class="chem">x = 0</span> must also be 0: <span class="chem">2 + k = 0 => k = -2</span>.
        "로피탈의 정리를 한 번 적용하면 <span class=\"chem\">lim_{x->0} (2 cos(2x) + k cos x - k x sin x) / (3x^2)</span>예요. 분모가 0으로 가므로 <span class=\"chem\">x = 0</span>에서 분자도 0이어야 해요: <span class=\"chem\">2 + k = 0 => k = -2</span>.",
        // EN: Substitute <span class="chem">k = -2</span> and apply L’Hôpital’s rule twice more (or use Maclaurin expansions) to evaluate <span class="chem">lim_{x->0} (sin(2x) - 2x cos x) / x^3</span>.
        "<span class=\"chem\">k = -2</span>를 대입하고 로피탈의 정리를 두 번 더 적용하거나(또는 매클로린 급수를 이용해) <span class=\"chem\">lim_{x->0} (sin(2x) - 2x cos x) / x^3</span>을 계산하세요.",
      ],
      // EN: <p>After one step of L’Hôpital’s rule, the numerator at <span class="chem">x = 0</span> is <span class="chem">2 + k</span>. For the limit to be finite, <span class="chem">2 + k = 0 => k = -2</span>. With <span class="chem">k = -2</span>, differentiating top and bottom twice more (or expanding <span class="chem">(2x - 8x^3/6) - 2x(1 - x^2/2) = -x^3/3</span>) gives <span class="chem">-1/3 ≈ -0.333</span>.</p>
      solution: "<p>로피탈의 정리를 한 번 적용한 뒤 <span class=\"chem\">x = 0</span>에서 분자는 <span class=\"chem\">2 + k</span>예요. 극한이 유한하려면 <span class=\"chem\">2 + k = 0 => k = -2</span>여야 해요. <span class=\"chem\">k = -2</span>를 넣고 분자와 분모를 두 번 더 미분하면(또는 <span class=\"chem\">(2x - 8x^3/6) - 2x(1 - x^2/2) = -x^3/3</span>으로 전개하면) <span class=\"chem\">-1/3 ≈ -0.333</span>을 얻어요.</p>",
    },

    // ── t5-3-q017 · short · challenge · AHL · AHL 5.16–5.17 · 7 marks
    "t5-3-q017": {
      // EN: <p>For each non-negative integer <i>n</i>, let <span class="chem">I_n = int_1^e x (ln x)^n dx</span>.</p><p>(a) Find the exact value of <span class="chem">I_0</span> and <span class="chem">I_1</span>. <strong>[3 marks]</strong></p><p>(b) Using integration by parts, show that <span class="chem">I_n = e^2 / 2 - (n / 2) I_{n-1}</span> for <span class="chem">n &gt;= 1</span>, and hence find the exact volume generated when the curve <span class="chem">y = sqrt(x) ln x</span> between <span class="chem">x = 1</span> and <span class="chem">x = e</span> is rotated <span class="chem">2pi</span> radians about the <i>x</i>-axis. <strong>[4 marks]</strong></p>
      stem: "<p>음이 아닌 각 정수 <i>n</i>에 대하여 <span class=\"chem\">I_n = int_1^e x (ln x)^n dx</span>라 하자.</p><p>(a) <span class=\"chem\">I_0</span>과 <span class=\"chem\">I_1</span>의 정확한 값을 구하시오 (Find). <strong>[3 marks]</strong></p><p>(b) 부분적분법을 이용하여 <span class=\"chem\">n &gt;= 1</span>일 때 <span class=\"chem\">I_n = e^2 / 2 - (n / 2) I_{n-1}</span>임을 보이고 (Show that), 이를 이용하여 (hence) <span class=\"chem\">x = 1</span>과 <span class=\"chem\">x = e</span> 사이의 곡선 <span class=\"chem\">y = sqrt(x) ln x</span>를 <i>x</i>축 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시켜 생기는 입체의 정확한 부피를 구하시오 (Find). <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: <span class="chem">I_n</span> defines a family of integrals linked by a reduction formula. The volume in (b) is a member of the family in disguise, because <span class="chem">y^2 = x (ln x)^2</span>.
        "해석: <span class=\"chem\">I_n</span>은 점화식으로 연결된 적분들의 족을 정의합니다. <span class=\"chem\">y^2 = x (ln x)^2</span>이므로 (b)의 부피는 이 족의 한 항이 모양을 바꾼 것입니다.",
        // EN: For part (b), choose <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> so that <span class="chem">v = x^2 / 2</span> cancels the <span class="chem">1/x</span> in <span class="chem">du/dx</span>.
        "(b)에서는 <span class=\"chem\">v = x^2 / 2</span>가 <span class=\"chem\">du/dx</span>의 <span class=\"chem\">1/x</span>과 약분되도록 <span class=\"chem\">u = (ln x)^n</span>, <span class=\"chem\">dv/dx = x</span>로 잡으세요.",
        // EN: Notice that rotating <span class="chem">y = sqrt(x) ln x</span> about the <i>x</i>-axis gives <span class="chem">V = pi int_1^e x (ln x)^2 dx = pi I_2</span>.
        "<span class=\"chem\">y = sqrt(x) ln x</span>를 <i>x</i>축 둘레로 회전하면 <span class=\"chem\">V = pi int_1^e x (ln x)^2 dx = pi I_2</span>가 돼요.",
      ],
      // EN: <p>(a) <span class="chem">I_0 = int_1^e x dx = [x^2/2]_1^e = (e^2 - 1)/2</span>. Using parts on <span class="chem">I_1</span> (or the reduction formula with <span class="chem">n = 1</span>): <span class="chem">I_1 = e^2/2 - (1/2)((e^2 - 1)/2) = (e^2 + 1)/4</span>.</p><p>(b) Let <span class="chem">u = (ln x)^n => du/dx = n(ln x)^{n-1}/x</span> and <span class="chem">dv/dx = x => v = x^2/2</span>. Then <span class="chem">I_n = [(x^2/2)(ln x)^n]_1^e - int_1^e (x^2/2)(n(ln x)^{n-1}/x) dx = e^2/2 - (n/2) I_{n-1}</span>. The volume is <span class="chem">V = pi int_1^e x(ln x)^2 dx = pi I_2 = pi(e^2/2 - I_1) = pi(e^2/2 - (e^2 + 1)/4) = pi(e^2 - 1)/4</span>.</p>
      answer: "<p>(a) <span class=\"chem\">I_0 = int_1^e x dx = [x^2/2]_1^e = (e^2 - 1)/2</span>예요. <span class=\"chem\">I_1</span>에 부분적분법을 쓰면(또는 <span class=\"chem\">n = 1</span>일 때의 점화식을 쓰면) <span class=\"chem\">I_1 = e^2/2 - (1/2)((e^2 - 1)/2) = (e^2 + 1)/4</span>예요.</p><p>(b) <span class=\"chem\">u = (ln x)^n => du/dx = n(ln x)^{n-1}/x</span>, <span class=\"chem\">dv/dx = x => v = x^2/2</span>로 놓으면 <span class=\"chem\">I_n = [(x^2/2)(ln x)^n]_1^e - int_1^e (x^2/2)(n(ln x)^{n-1}/x) dx = e^2/2 - (n/2) I_{n-1}</span>이에요. 회전체의 부피는 <span class=\"chem\">V = pi int_1^e x(ln x)^2 dx = pi I_2 = pi(e^2/2 - I_1) = pi(e^2/2 - (e^2 + 1)/4) = pi(e^2 - 1)/4</span>예요.</p>",
      markscheme: [
        // EN: A1: correct value <span class="chem">I_0 = (e^2 - 1)/2</span>.
        "A1: <span class=\"chem\">I_0 = (e^2 - 1)/2</span> 값을 정확히 구함.",
        // EN: M1: applies integration by parts (or the reduction formula with <span class="chem">n = 1</span>) to <span class="chem">I_1</span>.
        "M1: <span class=\"chem\">I_1</span>에 부분적분법(또는 <span class=\"chem\">n = 1</span>인 점화식)을 적용함.",
        // EN: A1: <span class="chem">I_1 = (e^2 + 1)/4</span>.
        "A1: <span class=\"chem\">I_1 = (e^2 + 1)/4</span>.",
        // EN: M1: chooses <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> in <span class="chem">I_n</span>.
        "M1: <span class=\"chem\">I_n</span>에서 <span class=\"chem\">u = (ln x)^n</span>, <span class=\"chem\">dv/dx = x</span>로 잡음.",
        // EN: A1: correct boundary term <span class="chem">[(x^2/2)(ln x)^n]_1^e = e^2/2</span> and remaining integral <span class="chem">(n/2) int_1^e x (ln x)^{n-1} dx</span>, leading to the given result <span class="chem">I_n = e^2/2 - (n/2) I_{n-1}</span> AG (no mark for the given line).
        "A1: 경계항 <span class=\"chem\">[(x^2/2)(ln x)^n]_1^e = e^2/2</span>와 남은 적분 <span class=\"chem\">(n/2) int_1^e x (ln x)^{n-1} dx</span>가 정확하고, 주어진 결과 <span class=\"chem\">I_n = e^2/2 - (n/2) I_{n-1}</span>로 이어짐 AG (주어진 식 자체에는 점수 없음).",
        // EN: M1: identifies volume <span class="chem">V = pi int_1^e y^2 dx = pi I_2</span>.
        "M1: 부피가 <span class=\"chem\">V = pi int_1^e y^2 dx = pi I_2</span>임을 파악함.",
        // EN: A1: substitutes <span class="chem">n = 2</span> to obtain <span class="chem">V = pi(e^2 - 1)/4</span>.
        "A1: <span class=\"chem\">n = 2</span>를 대입해 <span class=\"chem\">V = pi(e^2 - 1)/4</span>를 얻음.",
      ],
    },

    // ── t5-3-q018 · numeric · foundation · AHL · AHL 5.15 · 3 marks
    "t5-3-q018": {
      // EN: <p>Find the exact value of <span class="chem">int_0^2 3^x dx</span>. (Enter an exact expression such as <span class="mono">5/ln(2)</span>.)</p>
      stem: "<p><span class=\"chem\">int_0^2 3^x dx</span>의 정확한 값을 구하시오 (Find). (<span class=\"mono\">5/ln(2)</span> 같은 정확한 식으로 입력하세요.)</p>",
      hints: [
        // EN: Use the Formula Booklet result <span class="chem">int a^x dx = a^x / ln a + C</span>.
        "공식집의 결과 <span class=\"chem\">int a^x dx = a^x / ln a + C</span>를 이용하세요.",
        // EN: Evaluate <span class="chem">[3^x / ln 3]_0^2</span>.
        "<span class=\"chem\">[3^x / ln 3]_0^2</span>를 계산하세요.",
      ],
      // EN: <p><span class="chem">int_0^2 3^x dx = [3^x / ln 3]_0^2 = (9 - 1)/ln 3 = 8/ln 3 ≈ 7.28</span>.</p>
      solution: "<p><span class=\"chem\">int_0^2 3^x dx = [3^x / ln 3]_0^2 = (9 - 1)/ln 3 = 8/ln 3 ≈ 7.28</span>이에요.</p>",
      // EN: 8 / ln 3 ≈ 7.28
      answerDisplay: "8 / ln 3 ≈ 7.28",
    },
    // ── t5-3-q019 · mcq · foundation · AHL · AHL 5.15 · 2 marks
    "t5-3-q019": {
      // EN: <p>Find <span class="chem">d/dx (arctan(x/2))</span>.</p>
      stem: "<p><span class=\"chem\">d/dx (arctan(x/2))</span>를 구하시오 (Find).</p>",
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
        "<span class=\"chem\">u = x/2</span>로 놓고 <span class=\"chem\">d/dx arctan u = (1/(1 + u^2)) (du/dx)</span>를 이용하세요.",
      ],
      // EN: <p><span class="chem">d/dx arctan(x/2) = (1/2) × 1/(1 + x^2/4) = (1/2) × 4/(4 + x^2) = 2/(4 + x^2)</span>.</p>
      solution: "<p><span class=\"chem\">d/dx arctan(x/2) = (1/2) × 1/(1 + x^2/4) = (1/2) × 4/(4 + x^2) = 2/(4 + x^2)</span>예요.</p>",
      misconception: {
        // EN (option B): That is <span class="chem">1/(1 + (x/2)^2) = 4/(4 + x^2)</span>: you forgot to multiply by the inner derivative <span class="chem">1/2</span>.
        "1": "그것은 <span class=\"chem\">1/(1 + (x/2)^2) = 4/(4 + x^2)</span>예요. 속함수의 도함수 <span class=\"chem\">1/2</span>를 곱하는 것을 잊었어요.",
        // EN (option C): That is the derivative of <span class="chem">arcsin(x/2)</span>, not <span class="chem">arctan(x/2)</span>.
        "2": "그것은 <span class=\"chem\">arctan(x/2)</span>가 아니라 <span class=\"chem\">arcsin(x/2)</span>의 도함수예요.",
        // EN (option D): You multiplied by <span class="chem">2</span> instead of by the inner derivative <span class="chem">1/2</span>.
        "3": "속함수의 도함수 <span class=\"chem\">1/2</span> 대신 <span class=\"chem\">2</span>를 곱했어요.",
      },
    },
    // ── t5-3-q020 · numeric · exam · AHL · AHL 5.17 · 4 marks
    "t5-3-q020": {
      // EN: <p>Find the exact area of the region enclosed by the curve <span class="chem">x = y^2 - 4</span> and the <i>y</i>-axis.</p>
      stem: "<p>곡선 <span class=\"chem\">x = y^2 - 4</span>와 <i>y</i>축으로 둘러싸인 영역의 넓이의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: The curve meets the <i>y</i>-axis where <span class="chem">x = 0</span>, that is at <span class="chem">y = -2</span> and <span class="chem">y = 2</span>.
        "곡선은 <span class=\"chem\">x = 0</span>일 때, 즉 <span class=\"chem\">y = -2</span>와 <span class=\"chem\">y = 2</span>에서 <i>y</i>축과 만나요.",
        // EN: Between these, <span class="chem">x = y^2 - 4 &lt;= 0</span>, so the area is <span class="chem">int_{-2}^2 (4 - y^2) dy</span>.
        "그 사이에서는 <span class=\"chem\">x = y^2 - 4 &lt;= 0</span>이므로 넓이는 <span class=\"chem\">int_{-2}^2 (4 - y^2) dy</span>예요.",
      ],
      // EN: <p>The curve crosses the <i>y</i>-axis at <span class="chem">y = +-2</span> and lies to the left of it in between, so <span class="chem">A = int_{-2}^2 (4 - y^2) dy = [4y - y^3/3]_{-2}^2 = (8 - 8/3) - (-8 + 8/3) = 32/3 ≈ 10.7</span>.</p>
      solution: "<p>곡선은 <span class=\"chem\">y = +-2</span>에서 <i>y</i>축과 만나고 그 사이에서는 그 왼쪽에 있으므로 <span class=\"chem\">A = int_{-2}^2 (4 - y^2) dy = [4y - y^3/3]_{-2}^2 = (8 - 8/3) - (-8 + 8/3) = 32/3 ≈ 10.7</span>이에요.</p>",
      // EN: 32/3 ≈ 10.7
      answerDisplay: "32/3 ≈ 10.7",
    },
    // ── t5-3-q021 · numeric · exam · AHL · AHL 5.17 · 5 marks
    "t5-3-q021": {
      // EN: <p>The region bounded by the curve <span class="chem">y = ln x</span>, the <i>x</i>-axis, the <i>y</i>-axis and the line <span class="chem">y = 1</span> is rotated through <span class="chem">2pi</span> radians about the <strong><i>y</i>-axis</strong>. Find the exact volume of the solid formed. (Enter an exact expression such as <span class="mono">pi*(e^3-1)/3</span>.)</p>
      stem: "<p>곡선 <span class=\"chem\">y = ln x</span>, <i>x</i>축, <i>y</i>축, 직선 <span class=\"chem\">y = 1</span>로 둘러싸인 영역을 <strong><i>y</i>축</strong> 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시켜요. 이때 생기는 입체의 정확한 부피를 구하시오 (Find). (<span class=\"mono\">pi*(e^3-1)/3</span> 같은 정확한 식으로 입력하세요.)</p>",
      hints: [
        // EN: Rearrange <span class="chem">y = ln x</span> as <span class="chem">x = e^y</span>, so <span class="chem">x^2 = e^{2y}</span>.
        "<span class=\"chem\">y = ln x</span>를 <span class=\"chem\">x = e^y</span>로 바꾸면 <span class=\"chem\">x^2 = e^{2y}</span>예요.",
        // EN: Use <span class="chem">V = pi int_0^1 x^2 dy = pi int_0^1 e^{2y} dy</span>.
        "<span class=\"chem\">V = pi int_0^1 x^2 dy = pi int_0^1 e^{2y} dy</span>를 이용하세요.",
      ],
      // EN: <p><span class="chem">x = e^y</span>, so <span class="chem">V = pi int_0^1 e^{2y} dy = pi [e^{2y}/2]_0^1 = pi(e^2 - 1)/2 ≈ 10.0</span>.</p>
      solution: "<p><span class=\"chem\">x = e^y</span>이므로 <span class=\"chem\">V = pi int_0^1 e^{2y} dy = pi [e^{2y}/2]_0^1 = pi(e^2 - 1)/2 ≈ 10.0</span>이에요.</p>",
      // EN: π(e² − 1)/2 ≈ 10.0
      answerDisplay: "π(e² − 1)/2 ≈ 10.0",
    },
    // ── t5-3-q022 · numeric · exam · AHL · AHL 5.12 · 5 marks
    "t5-3-q022": {
      // EN: <p>The function <i>f</i> is defined by <span class="chem">f(x) = a x^3 + 2</span> for <span class="chem">x &lt;= 1</span> and <span class="chem">f(x) = b x - 1</span> for <span class="chem">x &gt; 1</span>, where <i>a</i> and <i>b</i> are constants. Given that <i>f</i> is continuous and differentiable at <span class="chem">x = 1</span>, find the value of <i>b</i>.</p>
      stem: "<p>함수 <i>f</i>는 <span class=\"chem\">x &lt;= 1</span>일 때 <span class=\"chem\">f(x) = a x^3 + 2</span>, <span class=\"chem\">x &gt; 1</span>일 때 <span class=\"chem\">f(x) = b x - 1</span>로 정의돼요(<i>a</i>, <i>b</i>는 상수). <i>f</i>가 <span class=\"chem\">x = 1</span>에서 연속이고 미분가능할 때, <i>b</i>의 값을 구하시오 (find).</p>",
      hints: [
        // EN: Continuous at <span class="chem">x = 1</span>: the two pieces give the same value, <span class="chem">a + 2 = b - 1</span>.
        "<span class=\"chem\">x = 1</span>에서 연속: 두 식의 값이 같으므로 <span class=\"chem\">a + 2 = b - 1</span>이에요.",
        // EN: Differentiable at <span class="chem">x = 1</span>: the two derivatives agree, <span class="chem">3a = b</span>.
        "<span class=\"chem\">x = 1</span>에서 미분가능: 두 도함수의 값이 같으므로 <span class=\"chem\">3a = b</span>예요.",
      ],
      // EN: <p>Continuity: <span class="chem">a + 2 = b - 1 => b = a + 3</span>. Differentiability: <span class="chem">3a(1)^2 = b => b = 3a</span>. So <span class="chem">3a = a + 3 => a = 3/2</span> and <span class="chem">b = 9/2 = 4.5</span>.</p>
      solution: "<p>연속: <span class=\"chem\">a + 2 = b - 1 => b = a + 3</span>. 미분가능: <span class=\"chem\">3a(1)^2 = b => b = 3a</span>. 따라서 <span class=\"chem\">3a = a + 3 => a = 3/2</span>이고 <span class=\"chem\">b = 9/2 = 4.5</span>예요.</p>",
      // EN: 9/2 = 4.5
      answerDisplay: "9/2 = 4.5",
    },
    // ── t5-3-q023 · mcq · exam · AHL · AHL 5.13 · 2 marks
    "t5-3-q023": {
      // EN: <p>Find <span class="chem">lim_{x->infty} x^2 / e^x</span>.</p>
      stem: "<p><span class=\"chem\">lim_{x->infty} x^2 / e^x</span>를 구하시오 (Find).</p>",
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
        "이 극한은 <span class=\"chem\">infty/infty</span> 꼴이므로 로피탈의 정리를 쓸 수 있어요. 두 번 필요해요.",
      ],
      // EN: <p><span class="chem">lim_{x->infty} x^2/e^x = lim_{x->infty} 2x/e^x = lim_{x->infty} 2/e^x = 0</span> (L’Hôpital’s rule twice, each time of the form <span class="chem">infty/infty</span>).</p>
      solution: "<p><span class=\"chem\">lim_{x->infty} x^2/e^x = lim_{x->infty} 2x/e^x = lim_{x->infty} 2/e^x = 0</span> (로피탈의 정리를 두 번 적용, 매번 <span class=\"chem\">infty/infty</span> 꼴).</p>",
      misconception: {
        // EN (option B): A limit of <span class="chem">1</span> would need <span class="chem">x^2</span> and <span class="chem">e^x</span> to grow at the same rate, but <span class="chem">e^x</span> grows much faster: two applications of L’Hôpital’s rule give <span class="chem">lim_{x->infty} 2/e^x = 0</span>.
        "1": "극한이 <span class=\"chem\">1</span>이 되려면 <span class=\"chem\">x^2</span>과 <span class=\"chem\">e^x</span>가 같은 속도로 증가해야 하지만, <span class=\"chem\">e^x</span>가 훨씬 빠르게 증가합니다. 로피탈의 정리를 두 번 적용하면 <span class=\"chem\">lim_{x->infty} 2/e^x = 0</span>입니다.",
        // EN (option C): You stopped at <span class="chem">2/e^x</span> and treated <span class="chem">e^x</span> as <span class="chem">1</span>. As <span class="chem">x -> infty</span>, <span class="chem">2/e^x -> 0</span>.
        "2": "<span class=\"chem\">2/e^x</span>에서 멈추고 <span class=\"chem\">e^x</span>를 <span class=\"chem\">1</span>로 봤어요. <span class=\"chem\">x -> infty</span>일 때 <span class=\"chem\">2/e^x -> 0</span>이에요.",
        // EN (option D): Both <span class="chem">x^2</span> and <span class="chem">e^x</span> tend to infinity (<span class="chem">infty/infty</span>), but <span class="chem">e^x</span> grows much faster. Apply L’Hôpital’s rule twice.
        "3": "<span class=\"chem\">x^2</span>와 <span class=\"chem\">e^x</span> 모두 무한대로 발산하지만(<span class=\"chem\">infty/infty</span>), <span class=\"chem\">e^x</span>가 훨씬 빠르게 커져요. 로피탈의 정리를 두 번 적용하세요.",
      },
    },
  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't5-3.q', {
  questions: {

    // ── t5-3-q024 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q024": {
      // EN: <p>A hemispherical bowl has inner radius <span class="unit">2 m</span>. When the water in the bowl has depth <i>h</i> metres, the volume of water is <span class="chem">V = (pi/3) h^2 (6 - h)</span> <span class="unit">m3</span>. Water is poured in at a constant rate of <span class="unit">0.25 m3 min-1</span>.</p><p>Find the rate at which the depth of the water is increasing at the instant when the bowl contains <span class="unit">5 m3</span> of water.</p>
      stem: "<p>반구 모양 그릇의 안쪽 반지름은 <span class=\"unit\">2 m</span>예요. 그릇에 담긴 물의 깊이가 <i>h</i> 미터일 때, 물의 부피는 <span class=\"chem\">V = (pi/3) h^2 (6 - h)</span> <span class=\"unit\">m3</span>예요. 물을 <span class=\"unit\">0.25 m3 min-1</span>의 일정한 비율로 붓고 있어요.</p><p>그릇에 물이 <span class=\"unit\">5 m3</span> 담긴 순간, 물의 깊이가 증가하는 비율을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is related rates. You know <span class="chem">dV/dt</span> and want <span class="chem">dh/dt</span>, but the moment is described by a volume, not a depth, so you must first find <i>h</i>.
        "해석: 관련 변화율 문제입니다. <span class=\"chem\">dV/dt</span>를 알고 <span class=\"chem\">dh/dt</span>를 구해야 하는데, 그 순간이 깊이가 아니라 부피로 주어졌으므로 먼저 <i>h</i>를 구해야 합니다.",
        // EN: Solve <span class="chem">(pi/3) h^2 (6 - h) = 5</span> on your GDC for <span class="chem">0 &lt; h &lt; 2</span>.
        "GDC로 <span class=\"chem\">0 &lt; h &lt; 2</span>에서 <span class=\"chem\">(pi/3) h^2 (6 - h) = 5</span>를 푸세요.",
        // EN: Expand <span class="chem">V = (pi/3)(6h^2 - h^3)</span>, so <span class="chem">dV/dh = pi(4h - h^2)</span>. Then <span class="chem">dh/dt = (dV/dt) / (dV/dh)</span>.
        "<span class=\"chem\">V = (pi/3)(6h^2 - h^3)</span>으로 전개하면 <span class=\"chem\">dV/dh = pi(4h - h^2)</span>예요. 그다음 <span class=\"chem\">dh/dt = (dV/dt) / (dV/dh)</span>를 이용하세요.",
      ],
      // EN: <p>Decode: a related-rates question in which the instant is given by the volume. GDC: <span class="chem">(pi/3)h^2(6 - h) = 5 => h = 0.97475…</span> (the only root with <span class="chem">0 &lt; h &lt; 2</span>). Then <span class="chem">dV/dh = pi(4h - h^2) = 9.2641…</span>, so <span class="chem">dh/dt = 0.25 / 9.2641… = 0.0270</span> <span class="unit">m min-1</span> (3 s.f.).</p>
      solution: "<p>해석: 순간이 부피로 주어진 관련 변화율 문제예요. GDC: <span class=\"chem\">(pi/3)h^2(6 - h) = 5 => h = 0.97475…</span> (<span class=\"chem\">0 &lt; h &lt; 2</span>를 만족하는 유일한 근). 그러면 <span class=\"chem\">dV/dh = pi(4h - h^2) = 9.2641…</span>이므로 <span class=\"chem\">dh/dt = 0.25 / 9.2641… = 0.0270</span> <span class=\"unit\">m min-1</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-3-q025 · numeric · exam · AHL · AHL 5.14, 5.15 · 5 marks
    "t5-3-q025": {
      // EN: <p>A ladder of length <span class="unit">6.5 m</span> leans against a vertical wall with its foot on horizontal ground. The foot of the ladder slides away from the wall at a constant <span class="unit">0.3 m s-1</span>. Let <span class="chem">theta</span> be the angle between the ladder and the ground.</p><p>Find the rate at which <span class="chem">theta</span> is decreasing, in radians per second, at the instant when the foot of the ladder is <span class="unit">4.1 m</span> from the wall.</p>
      stem: "<p>길이 <span class=\"unit\">6.5 m</span>인 사다리가 수직인 벽에 기대어 있고, 사다리의 아래 끝은 수평인 지면에 놓여 있어요. 사다리의 아래 끝이 일정한 속력 <span class=\"unit\">0.3 m s-1</span>로 벽에서 멀어지며 미끄러져요. 사다리와 지면이 이루는 각을 <span class=\"chem\">theta</span>라 해요.</p><p>사다리의 아래 끝이 벽에서 <span class=\"unit\">4.1 m</span> 떨어진 순간, <span class=\"chem\">theta</span>가 감소하는 비율을 초당 라디안 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: link the distance of the foot, <i>x</i>, to the angle: <span class="chem">x = 6.5 cos theta</span>. You are given <span class="chem">dx/dt</span> and want <span class="chem">d theta/dt</span>.
        "해석: 아래 끝까지의 거리 <i>x</i>와 각을 연결하세요: <span class=\"chem\">x = 6.5 cos theta</span>. <span class=\"chem\">dx/dt</span>가 주어졌고 <span class=\"chem\">d theta/dt</span>를 구해야 합니다.",
        // EN: Differentiate with respect to <i>t</i>: <span class="chem">dx/dt = -6.5 sin theta (d theta/dt)</span>.
        "<i>t</i>에 대해 미분하세요: <span class=\"chem\">dx/dt = -6.5 sin theta (d theta/dt)</span>.",
        // EN: At the instant, <span class="chem">cos theta = 4.1/6.5</span>, so <span class="chem">6.5 sin theta = sqrt(6.5^2 - 4.1^2)</span>, the height of the top of the ladder.
        "그 순간 <span class=\"chem\">cos theta = 4.1/6.5</span>이므로 <span class=\"chem\">6.5 sin theta = sqrt(6.5^2 - 4.1^2)</span>이고, 이는 사다리 위 끝의 높이예요.",
      ],
      // EN: <p>Decode: the angle and the foot distance are linked by <span class="chem">x = 6.5 cos theta</span>. Differentiating, <span class="chem">dx/dt = -6.5 sin theta (d theta/dt)</span>. When <span class="chem">x = 4.1</span>, <span class="chem">6.5 sin theta = sqrt(6.5^2 - 4.1^2) = 5.0438…</span>. So <span class="chem">d theta/dt = -0.3 / 5.0438… = -0.0595</span>: the angle is decreasing at <span class="chem">0.0595</span> <span class="unit">rad s-1</span> (3 s.f.).</p>
      solution: "<p>해석: 각과 아래 끝까지의 거리는 <span class=\"chem\">x = 6.5 cos theta</span>로 연결돼요. 미분하면 <span class=\"chem\">dx/dt = -6.5 sin theta (d theta/dt)</span>예요. <span class=\"chem\">x = 4.1</span>일 때 <span class=\"chem\">6.5 sin theta = sqrt(6.5^2 - 4.1^2) = 5.0438…</span>이에요. 따라서 <span class=\"chem\">d theta/dt = -0.3 / 5.0438… = -0.0595</span>이므로, 각은 <span class=\"chem\">0.0595</span> <span class=\"unit\">rad s-1</span>의 비율로 감소하고 있어요 (유효숫자 3자리).</p>",
    },

    // ── t5-3-q026 · short · challenge · AHL · AHL 5.14 · 9 marks
    "t5-3-q026": {
      // EN: <p>A water tank is an inverted right circular cone, vertex at the bottom, of height <span class="unit">5 m</span>. When the water is <i>h</i> metres deep, the radius of the water surface is <span class="chem">0.6h</span> metres. Water is pumped in at <span class="unit">0.5 m3 min-1</span>, and at the same time it leaks out of a hole at the vertex at a rate of <span class="chem">0.2 sqrt(h)</span> <span class="unit">m3 min-1</span>.</p><p>(a) Show that the volume of water in the tank is <span class="chem">V = 0.12 pi h^3</span>. <strong>[2 marks]</strong></p><p>(b) Find the rate at which the depth is changing when <span class="chem">h = 1.8</span>. <strong>[4 marks]</strong></p><p>(c) The tank starts empty. Determine whether the tank will eventually overflow. Justify your answer. <strong>[3 marks]</strong></p>
      stem: "<p>물탱크는 꼭짓점이 아래를 향하도록 뒤집어 놓은 높이 <span class=\"unit\">5 m</span>의 직원뿔이에요. 물의 깊이가 <i>h</i> 미터일 때 수면의 반지름은 <span class=\"chem\">0.6h</span> 미터예요. 물을 <span class=\"unit\">0.5 m3 min-1</span>로 퍼 넣는 동시에, 꼭짓점의 구멍으로 물이 <span class=\"chem\">0.2 sqrt(h)</span> <span class=\"unit\">m3 min-1</span>의 비율로 새어 나가요.</p><p>(a) 탱크 안 물의 부피가 <span class=\"chem\">V = 0.12 pi h^3</span>임을 보이시오 (Show that). <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">h = 1.8</span>일 때 깊이가 변하는 비율을 구하시오 (Find). <strong>[4 marks]</strong></p><p>(c) 탱크는 처음에 비어 있어요. 탱크가 결국 넘치게 될지 결정하고 (Determine), 근거를 들어 설명하시오 (Justify). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: two rates act at once, so the net rate is <span class="chem">dV/dt = (in) - (out)</span>. Part (c) hides a question about when <span class="chem">dh/dt</span> becomes zero.
        "해석: 두 비율이 동시에 작용하므로 순변화율은 <span class=\"chem\">dV/dt = (in) - (out)</span>(유입 − 유출)입니다. (c)에는 <span class=\"chem\">dh/dt</span>가 언제 0이 되는지에 대한 질문이 숨어 있어요.",
        // EN: For (a), use similar triangles: <span class="chem">r = 0.6h</span> in the cone formula.
        "(a)에서는 닮은 삼각형을 이용하세요: 원뿔의 부피 공식에 <span class=\"chem\">r = 0.6h</span>를 대입합니다.",
        // EN: For (b), divide the net <span class="chem">dV/dt</span> by <span class="chem">dV/dh = 0.36 pi h^2</span>.
        "(b)에서는 순변화율 <span class=\"chem\">dV/dt</span>를 <span class=\"chem\">dV/dh = 0.36 pi h^2</span>로 나누세요.",
        // EN: For (c), the level rises while <span class="chem">0.5 - 0.2 sqrt(h) &gt; 0</span>. Compare the depth where this becomes zero with the tank height.
        "(c)에서는 <span class=\"chem\">0.5 - 0.2 sqrt(h) &gt; 0</span>인 동안 수위가 올라갑니다. 이 값이 0이 되는 깊이와 탱크의 높이를 비교하세요.",
      ],
      // EN: <p>Decode: the net rate of change of volume is inflow minus leak, and "will it overflow?" means "does the depth stop rising before <span class="chem">h = 5</span>?" (a) <span class="chem">V = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>. (b) <span class="chem">dh/dt = (0.5 - 0.2 sqrt(1.8)) / (0.36 pi (1.8)^2) = 0.0632</span> <span class="unit">m min-1</span>. (c) <span class="chem">dh/dt = 0 <=> sqrt(h) = 2.5 <=> h = 6.25</span>. Since <span class="chem">6.25 &gt; 5</span>, the depth is still increasing when it reaches <span class="unit">5 m</span>, so the tank overflows.</p>
      solution: "<p>해석: 부피의 순변화율은 유입량에서 새는 양을 뺀 것이고, \"넘치는가?\"는 \"깊이가 <span class=\"chem\">h = 5</span>에 이르기 전에 상승이 멈추는가?\"라는 뜻이에요. (a) <span class=\"chem\">V = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>. (b) <span class=\"chem\">dh/dt = (0.5 - 0.2 sqrt(1.8)) / (0.36 pi (1.8)^2) = 0.0632</span> <span class=\"unit\">m min-1</span>. (c) <span class=\"chem\">dh/dt = 0 <=> sqrt(h) = 2.5 <=> h = 6.25</span>. <span class=\"chem\">6.25 &gt; 5</span>이므로 깊이가 <span class=\"unit\">5 m</span>에 이르렀을 때도 여전히 증가하고 있어서 탱크는 넘쳐요.</p>",
      // EN: <p>(a) <span class="chem">V = (1/3) pi r^2 h = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>.</p><p>(b) <span class="chem">dV/dt = 0.5 - 0.2 sqrt(h)</span> and <span class="chem">dV/dh = 0.36 pi h^2</span>, so <span class="chem">dh/dt = (0.5 - 0.2 sqrt(h)) / (0.36 pi h^2)</span>. At <span class="chem">h = 1.8</span>: <span class="chem">dh/dt = 0.23167… / 3.66435… = 0.0632</span> <span class="unit">m min-1</span>.</p><p>(c) The depth keeps rising while <span class="chem">0.5 - 0.2 sqrt(h) &gt; 0</span>, that is while <span class="chem">h &lt; 6.25</span>. The tank is only <span class="unit">5 m</span> deep, and at <span class="chem">h = 5</span> the net inflow is <span class="chem">0.5 - 0.2 sqrt(5) = 0.0528 &gt; 0</span>, so the level is still rising when it reaches the top: the tank overflows.</p>
      answer: "<p>(a) <span class=\"chem\">V = (1/3) pi r^2 h = (1/3) pi (0.6h)^2 h = 0.12 pi h^3</span>.</p><p>(b) <span class=\"chem\">dV/dt = 0.5 - 0.2 sqrt(h)</span>이고 <span class=\"chem\">dV/dh = 0.36 pi h^2</span>이므로 <span class=\"chem\">dh/dt = (0.5 - 0.2 sqrt(h)) / (0.36 pi h^2)</span>예요. <span class=\"chem\">h = 1.8</span>일 때: <span class=\"chem\">dh/dt = 0.23167… / 3.66435… = 0.0632</span> <span class=\"unit\">m min-1</span>.</p><p>(c) <span class=\"chem\">0.5 - 0.2 sqrt(h) &gt; 0</span>, 즉 <span class=\"chem\">h &lt; 6.25</span>인 동안 깊이는 계속 올라가요. 탱크의 깊이는 <span class=\"unit\">5 m</span>뿐이고, <span class=\"chem\">h = 5</span>에서 순유입률은 <span class=\"chem\">0.5 - 0.2 sqrt(5) = 0.0528 &gt; 0</span>이므로 수위가 꼭대기에 이르렀을 때도 여전히 올라가고 있어요: 탱크는 넘쳐요.</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">V = (1/3) pi r^2 h</span> with <span class="chem">r = 0.6h</span>.
        "M1: <span class=\"chem\">r = 0.6h</span>로 놓고 <span class=\"chem\">V = (1/3) pi r^2 h</span>를 이용함.",
        // EN: A1: <span class="chem">(1/3) pi (0.36h^2) h</span> seen, leading to <span class="chem">V = 0.12 pi h^3</span> AG (no mark for the given line).
        "A1: <span class=\"chem\">(1/3) pi (0.36h^2) h</span>가 보이고, <span class=\"chem\">V = 0.12 pi h^3</span>로 이어짐 AG (주어진 식 자체에는 점수 없음).",
        // EN: M1: net rate <span class="chem">dV/dt = 0.5 - 0.2 sqrt(h)</span> (inflow minus leak).
        "M1: 순변화율 <span class=\"chem\">dV/dt = 0.5 - 0.2 sqrt(h)</span> (유입량 − 새는 양).",
        // EN: M1: <span class="chem">dV/dh = 0.36 pi h^2</span> and uses <span class="chem">dh/dt = (dV/dt)/(dV/dh)</span>.
        "M1: <span class=\"chem\">dV/dh = 0.36 pi h^2</span>를 구하고 <span class=\"chem\">dh/dt = (dV/dt)/(dV/dh)</span>를 이용함.",
        // EN: A1: correct substitution of <span class="chem">h = 1.8</span>: <span class="chem">0.23167… / 3.66435…</span>.
        "A1: <span class=\"chem\">h = 1.8</span>을 정확히 대입함: <span class=\"chem\">0.23167… / 3.66435…</span>.",
        // EN: A1: <span class="chem">dh/dt = 0.0632</span> <span class="unit">m min-1</span>.
        "A1: <span class=\"chem\">dh/dt = 0.0632</span> <span class=\"unit\">m min-1</span>.",
        // EN: M1: considers the sign of <span class="chem">0.5 - 0.2 sqrt(h)</span> (or solves <span class="chem">dh/dt = 0</span>).
        "M1: <span class=\"chem\">0.5 - 0.2 sqrt(h)</span>의 부호를 고려함 (또는 <span class=\"chem\">dh/dt = 0</span>을 풂).",
        // EN: A1: the level stops rising only at <span class="chem">h = 6.25</span>.
        "A1: 수위는 <span class=\"chem\">h = 6.25</span>에서만 상승을 멈춤.",
        // EN: R1: <span class="chem">6.25 &gt; 5</span> (net inflow still positive at <span class="chem">h = 5</span>), so the tank overflows.
        "R1: <span class=\"chem\">6.25 &gt; 5</span> (<span class=\"chem\">h = 5</span>에서도 순유입이 양수)이므로 탱크가 넘침.",
      ],
    },

    // ── t5-3-q027 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q027": {
      // EN: <p>The curve <i>C</i> has equation <span class="chem">x^3 + y^3 = 6xy</span>. The point <i>P</i> on <i>C</i> has <i>x</i>-coordinate <span class="chem">1</span> and <i>y</i>-coordinate greater than <span class="chem">1</span>.</p><p>Find the gradient of <i>C</i> at <i>P</i>.</p>
      stem: "<p>곡선 <i>C</i>의 방정식은 <span class=\"chem\">x^3 + y^3 = 6xy</span>예요. <i>C</i> 위의 점 <i>P</i>는 <i>x</i>좌표가 <span class=\"chem\">1</span>이고 <i>y</i>좌표가 <span class=\"chem\">1</span>보다 커요.</p><p><i>P</i>에서 <i>C</i>의 기울기를 구하시오 (Find).</p>",
      hints: [
        // EN: First find <i>P</i>: put <span class="chem">x = 1</span> in the equation and solve <span class="chem">y^3 - 6y + 1 = 0</span> on your GDC. Take the root greater than 1.
        "먼저 <i>P</i>를 구하세요: 방정식에 <span class=\"chem\">x = 1</span>을 대입하고 GDC로 <span class=\"chem\">y^3 - 6y + 1 = 0</span>을 풉니다. 1보다 큰 근을 택하세요.",
        // EN: Differentiate implicitly: <span class="chem">3x^2 + 3y^2 (dy/dx) = 6y + 6x (dy/dx)</span>.
        "음함수의 미분법을 적용하세요: <span class=\"chem\">3x^2 + 3y^2 (dy/dx) = 6y + 6x (dy/dx)</span>.",
        // EN: Rearrange to <span class="chem">dy/dx = (6y - 3x^2)/(3y^2 - 6x)</span> and substitute the coordinates of <i>P</i>.
        "<span class=\"chem\">dy/dx = (6y - 3x^2)/(3y^2 - 6x)</span>로 정리하고 <i>P</i>의 좌표를 대입하세요.",
      ],
      // EN: <p>With <span class="chem">x = 1</span>: <span class="chem">y^3 - 6y + 1 = 0</span>. Its roots are <span class="chem">-2.529…, 0.167…, 2.3615…</span>, so <span class="chem">P = (1, 2.3615…)</span>. Implicitly, <span class="chem">3x^2 + 3y^2 y' = 6y + 6xy'</span>, so <span class="chem">dy/dx = (6y - 3x^2)/(3y^2 - 6x) = 11.1688… / 10.7296… = 1.04</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">x = 1</span>일 때: <span class=\"chem\">y^3 - 6y + 1 = 0</span>. 그 근은 <span class=\"chem\">-2.529…, 0.167…, 2.3615…</span>이므로 <span class=\"chem\">P = (1, 2.3615…)</span>예요. 음함수의 미분법으로 <span class=\"chem\">3x^2 + 3y^2 y' = 6y + 6xy'</span>이므로 <span class=\"chem\">dy/dx = (6y - 3x^2)/(3y^2 - 6x) = 11.1688… / 10.7296… = 1.04</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-3-q028 · short · challenge · AHL · AHL 5.14 · 10 marks
    "t5-3-q028": {
      // EN: <p>A curve has equation <span class="chem">x^3 + xy + y^2 = 7</span>.</p><p>(a) Show that <span class="chem">dy/dx = -(3x^2 + y)/(x + 2y)</span>. <strong>[3 marks]</strong></p><p>(b) Find the coordinates of the points on the curve where the tangent is parallel to the line <span class="chem">y = x</span>. <strong>[4 marks]</strong></p><p>(c) Find the coordinates of the point on the curve where the tangent is vertical. <strong>[3 marks]</strong></p>
      stem: "<p>곡선의 방정식은 <span class=\"chem\">x^3 + xy + y^2 = 7</span>이에요.</p><p>(a) <span class=\"chem\">dy/dx = -(3x^2 + y)/(x + 2y)</span>임을 보이시오 (Show that). <strong>[3 marks]</strong></p><p>(b) 접선이 직선 <span class=\"chem\">y = x</span>와 평행한 곡선 위의 점들의 좌표를 구하시오 (Find). <strong>[4 marks]</strong></p><p>(c) 접선이 수직인 곡선 위의 점의 좌표를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "tangent parallel to <span class="chem">y = x</span>" means <span class="chem">dy/dx = 1</span>; "tangent vertical" means the denominator of <span class="chem">dy/dx</span> is zero. Each condition gives a line through the points, which you then intersect with the curve.
        "해석: \"접선이 <span class=\"chem\">y = x</span>와 평행\"은 <span class=\"chem\">dy/dx = 1</span>을 뜻하고, \"접선이 수직\"은 <span class=\"chem\">dy/dx</span>의 분모가 0임을 뜻합니다. 각 조건에서 구하는 점들을 지나는 직선이 나오므로, 그 직선과 곡선의 교점을 구하세요.",
        // EN: In (b), clear the fraction: <span class="chem">-(3x^2 + y) = x + 2y</span>, then make <i>y</i> the subject.
        "(b)에서는 분수를 없애세요: <span class=\"chem\">-(3x^2 + y) = x + 2y</span>. 그다음 <i>y</i>에 대해 정리하세요.",
        // EN: Substitute <span class="chem">y = -(3x^2 + x)/3</span> into <span class="chem">x^3 + xy + y^2 = 7</span> and solve with a GDC (graph or polynomial solver).
        "<span class=\"chem\">y = -(3x^2 + x)/3</span>을 <span class=\"chem\">x^3 + xy + y^2 = 7</span>에 대입하고 GDC(그래프 또는 다항식 풀이 기능)로 푸세요.",
        // EN: In (c), substitute <span class="chem">y = -x/2</span> into the curve and check the numerator is not also zero.
        "(c)에서는 <span class=\"chem\">y = -x/2</span>를 곡선의 방정식에 대입하고, 분자가 동시에 0이 되지 않는지 확인하세요.",
      ],
      // EN: <p>Decode: both (b) and (c) are conditions on <span class="chem">dy/dx</span> that become a second equation; solve it simultaneously with the curve. (b) gives <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>; (c) gives <span class="chem">(2, -1)</span>.</p>
      solution: "<p>해석: (b)와 (c)는 모두 <span class=\"chem\">dy/dx</span>에 대한 조건으로, 두 번째 방정식이 돼요. 이를 곡선의 방정식과 연립하여 풀어요. (b)에서는 <span class=\"chem\">(1.51, -2.79)</span>와 <span class=\"chem\">(-1.86, -2.86)</span>, (c)에서는 <span class=\"chem\">(2, -1)</span>을 얻어요.</p>",
      // EN: <p>(a) <span class="chem">3x^2 + (y + x dy/dx) + 2y dy/dx = 0 => (x + 2y) dy/dx = -(3x^2 + y) => dy/dx = -(3x^2 + y)/(x + 2y)</span>.</p><p>(b) <span class="chem">dy/dx = 1 => -(3x^2 + y) = x + 2y => y = -(3x^2 + x)/3</span>. Substituting into the curve and solving on a GDC: <span class="chem">9x^4 + 6x^3 - 2x^2 - 63 = 0</span>, so <span class="chem">x = 1.5107…</span> or <span class="chem">x = -1.8650…</span>. The points are <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>.</p><p>(c) Vertical tangent where the denominator is zero: <span class="chem">x + 2y = 0 => y = -x/2</span>. Then <span class="chem">x^3 - x^2/2 + x^2/4 = 7 => x^3 - x^2/4 - 7 = 0 => x = 2</span>, so the point is <span class="chem">(2, -1)</span> (the numerator <span class="chem">3x^2 + y = 11 != 0</span> there).</p>
      answer: "<p>(a) <span class=\"chem\">3x^2 + (y + x dy/dx) + 2y dy/dx = 0 => (x + 2y) dy/dx = -(3x^2 + y) => dy/dx = -(3x^2 + y)/(x + 2y)</span>.</p><p>(b) <span class=\"chem\">dy/dx = 1 => -(3x^2 + y) = x + 2y => y = -(3x^2 + x)/3</span>. 곡선의 방정식에 대입하고 GDC로 풀면: <span class=\"chem\">9x^4 + 6x^3 - 2x^2 - 63 = 0</span>이므로 <span class=\"chem\">x = 1.5107…</span> 또는 <span class=\"chem\">x = -1.8650…</span>. 구하는 점은 <span class=\"chem\">(1.51, -2.79)</span>와 <span class=\"chem\">(-1.86, -2.86)</span>이에요.</p><p>(c) 분모가 0인 곳에서 접선이 수직이에요: <span class=\"chem\">x + 2y = 0 => y = -x/2</span>. 그러면 <span class=\"chem\">x^3 - x^2/2 + x^2/4 = 7 => x^3 - x^2/4 - 7 = 0 => x = 2</span>이므로 구하는 점은 <span class=\"chem\">(2, -1)</span>이에요 (이 점에서 분자는 <span class=\"chem\">3x^2 + y = 11 != 0</span>).</p>",
      markscheme: [
        // EN: M1: implicit differentiation, with the product rule on <span class="chem">xy</span>.
        "M1: <span class=\"chem\">xy</span>에 곱의 미분법을 적용하여 음함수의 미분을 함.",
        // EN: A1: <span class="chem">3x^2 + y + x dy/dx + 2y dy/dx = 0</span>.
        "A1: <span class=\"chem\">3x^2 + y + x dy/dx + 2y dy/dx = 0</span>.",
        // EN: A1: collects terms, <span class="chem">(x + 2y) dy/dx = -(3x^2 + y)</span>, leading to the given result AG (no mark for the given line).
        "A1: 항을 묶어 <span class=\"chem\">(x + 2y) dy/dx = -(3x^2 + y)</span>를 얻고, 주어진 결과로 이어짐 AG (주어진 식 자체에는 점수 없음).",
        // EN: M1: sets <span class="chem">-(3x^2 + y)/(x + 2y) = 1</span>.
        "M1: <span class=\"chem\">-(3x^2 + y)/(x + 2y) = 1</span>로 놓음.",
        // EN: A1: <span class="chem">y = -(3x^2 + x)/3</span> (or equivalent).
        "A1: <span class=\"chem\">y = -(3x^2 + x)/3</span> (또는 동치인 식).",
        // EN: M1: substitutes into the equation of the curve and solves with a GDC.
        "M1: 곡선의 방정식에 대입하고 GDC로 풂.",
        // EN: A1: both points <span class="chem">(1.51, -2.79)</span> and <span class="chem">(-1.86, -2.86)</span>.
        "A1: 두 점 <span class=\"chem\">(1.51, -2.79)</span>와 <span class=\"chem\">(-1.86, -2.86)</span>을 모두 구함.",
        // EN: M1: sets the denominator <span class="chem">x + 2y = 0</span>.
        "M1: 분모를 <span class=\"chem\">x + 2y = 0</span>으로 놓음.",
        // EN: M1: substitutes <span class="chem">y = -x/2</span> to get <span class="chem">x^3 - x^2/4 - 7 = 0</span>.
        "M1: <span class=\"chem\">y = -x/2</span>를 대입하여 <span class=\"chem\">x^3 - x^2/4 - 7 = 0</span>을 얻음.",
        // EN: A1: <span class="chem">(2, -1)</span>.
        "A1: <span class=\"chem\">(2, -1)</span>.",
      ],
    },

    // ── t5-3-q029 · numeric · challenge · AHL · AHL 5.14 · 6 marks
    "t5-3-q029": {
      // EN: <p>The closed curve <span class="chem">x^4 + xy + y^2 = 20</span> is the outline of a garden bed drawn on a plan, with the <i>y</i>-axis pointing north. Find how far north of the <i>x</i>-axis the most northerly point of the bed lies.</p>
      stem: "<p>닫힌 곡선 <span class=\"chem\">x^4 + xy + y^2 = 20</span>은 <i>y</i>축이 북쪽을 가리키는 평면도 위에 그린 화단의 윤곽이에요. 화단의 가장 북쪽 점이 <i>x</i>축에서 북쪽으로 얼마나 떨어져 있는지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "the most northerly point" is the greatest <i>y</i>-coordinate on the curve, which is where the tangent is horizontal: <span class="chem">dy/dx = 0</span>.
        "해석: \"가장 북쪽 점\"은 곡선 위에서 <i>y</i>좌표가 가장 큰 점이고, 그 점에서 접선은 수평입니다: <span class=\"chem\">dy/dx = 0</span>.",
        // EN: Differentiate implicitly: <span class="chem">4x^3 + y + x(dy/dx) + 2y(dy/dx) = 0</span>. Setting <span class="chem">dy/dx = 0</span> gives <span class="chem">y = -4x^3</span>.
        "음함수의 미분법을 적용하세요: <span class=\"chem\">4x^3 + y + x(dy/dx) + 2y(dy/dx) = 0</span>. <span class=\"chem\">dy/dx = 0</span>으로 놓으면 <span class=\"chem\">y = -4x^3</span>이에요.",
        // EN: Substitute <span class="chem">y = -4x^3</span> into the curve: <span class="chem">16x^6 - 3x^4 - 20 = 0</span>. Solve on your GDC and choose the root that gives the larger <i>y</i>.
        "<span class=\"chem\">y = -4x^3</span>을 곡선의 방정식에 대입하세요: <span class=\"chem\">16x^6 - 3x^4 - 20 = 0</span>. GDC로 풀고 <i>y</i>가 더 커지는 근을 택하세요.",
      ],
      // EN: <p>Decode: the most northerly point is the maximum of <i>y</i> on the curve, where <span class="chem">dy/dx = 0</span>. Implicitly, <span class="chem">(x + 2y) dy/dx = -(4x^3 + y)</span>, so <span class="chem">dy/dx = 0 => y = -4x^3</span>. Then <span class="chem">x^4 - 4x^4 + 16x^6 = 20 => 16x^6 - 3x^4 - 20 = 0 => x = +-1.06934…</span>. <span class="chem">x = -1.06934…</span> gives <span class="chem">y = 4.89</span> (the other gives <span class="chem">y = -4.89</span>, the most southerly point). The bed reaches <span class="chem">4.89</span> units north of the <i>x</i>-axis.</p>
      solution: "<p>해석: 가장 북쪽 점은 곡선 위에서 <i>y</i>의 최댓값이고, 그곳에서 <span class=\"chem\">dy/dx = 0</span>이에요. 음함수의 미분법으로 <span class=\"chem\">(x + 2y) dy/dx = -(4x^3 + y)</span>이므로 <span class=\"chem\">dy/dx = 0 => y = -4x^3</span>. 그러면 <span class=\"chem\">x^4 - 4x^4 + 16x^6 = 20 => 16x^6 - 3x^4 - 20 = 0 => x = +-1.06934…</span>. <span class=\"chem\">x = -1.06934…</span>에서 <span class=\"chem\">y = 4.89</span>를 얻어요 (다른 근에서는 <span class=\"chem\">y = -4.89</span>로, 가장 남쪽 점이에요). 화단은 <i>x</i>축에서 북쪽으로 <span class=\"chem\">4.89</span> 단위까지 이르러요.</p>",
    },

    // ── t5-3-q030 · numeric · exam · AHL · AHL 5.17 · 5 marks
    "t5-3-q030": {
      // EN: <p>The region <i>R</i> is bounded by the curves <span class="chem">y = 2 cos x</span> and <span class="chem">y = x^2</span> and the <i>y</i>-axis, for <span class="chem">x &gt;= 0</span>. The region <i>R</i> is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the volume of the solid formed.</p>
      stem: "<p>영역 <i>R</i>는 <span class=\"chem\">x &gt;= 0</span>에서 곡선 <span class=\"chem\">y = 2 cos x</span>, <span class=\"chem\">y = x^2</span>와 <i>y</i>축으로 둘러싸인 부분이에요. 영역 <i>R</i>를 <i>x</i>축 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시켜요. 이때 생기는 입체의 부피를 구하시오 (Find).</p>",
      hints: [
        // EN: Find where the curves meet for <span class="chem">x &gt; 0</span>: solve <span class="chem">2 cos x = x^2</span> on your GDC.
        "<span class=\"chem\">x &gt; 0</span>에서 두 곡선이 만나는 점을 구하세요: GDC로 <span class=\"chem\">2 cos x = x^2</span>를 풉니다.",
        // EN: The solid has a hole: use outer radius <span class="chem">2 cos x</span> and inner radius <span class="chem">x^2</span>, so <span class="chem">V = pi int_0^a ((2cos x)^2 - (x^2)^2) dx</span>.
        "이 입체에는 구멍이 있어요: 바깥 반지름 <span class=\"chem\">2 cos x</span>와 안쪽 반지름 <span class=\"chem\">x^2</span>를 이용하면 <span class=\"chem\">V = pi int_0^a ((2cos x)^2 - (x^2)^2) dx</span>예요.",
        // EN: Do not square the difference <span class="chem">(2cos x - x^2)</span>.
        "차 <span class=\"chem\">(2cos x - x^2)</span>를 제곱하면 안 됩니다.",
      ],
      // EN: <p>GDC: <span class="chem">2 cos x = x^2 => a = 1.02169…</span>. The washer formula gives <span class="chem">V = pi int_0^a (4cos^2 x - x^4) dx = 8.52</span> (3 s.f.).</p>
      solution: "<p>GDC: <span class=\"chem\">2 cos x = x^2 => a = 1.02169…</span>. 와셔(가운데가 빈 원판) 공식에 의해 <span class=\"chem\">V = pi int_0^a (4cos^2 x - x^4) dx = 8.52</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-3-q031 · short · challenge · AHL · AHL 5.17 · 8 marks
    "t5-3-q031": {
      // EN: <p>The inside of a bowl is formed by rotating the curve <span class="chem">y = x^4/50 + x^2/10</span>, for <span class="chem">x &gt;= 0</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis. Lengths are in centimetres, and the bowl is <span class="unit">5 cm</span> deep.</p><p>(a) Show that <span class="chem">x^2 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>. <strong>[3 marks]</strong></p><p>(b) Find the capacity of the bowl. <strong>[2 marks]</strong></p><p>(c) Find the depth of the water when the bowl is half full. <strong>[3 marks]</strong></p>
      stem: "<p>그릇의 안쪽은 곡선 <span class=\"chem\">y = x^4/50 + x^2/10</span> (<span class=\"chem\">x &gt;= 0</span>)을 <i>y</i>축 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시킨 모양이에요. 길이의 단위는 센티미터이고, 그릇의 깊이는 <span class=\"unit\">5 cm</span>예요.</p><p>(a) <span class=\"chem\">x^2 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>임을 보이시오 (Show that). <strong>[3 marks]</strong></p><p>(b) 그릇의 용량을 구하시오 (Find). <strong>[2 marks]</strong></p><p>(c) 그릇에 물이 절반만큼 찼을 때 물의 깊이를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: rotation about the <i>y</i>-axis means you integrate <span class="chem">pi x^2</span> with respect to <i>y</i>, so you need <span class="chem">x^2</span> in terms of <i>y</i>. "Half full" is an equation with the upper limit <i>h</i> as the unknown.
        "해석: <i>y</i>축 둘레의 회전에서는 <span class=\"chem\">pi x^2</span>를 <i>y</i>에 대해 적분하므로 <span class=\"chem\">x^2</span>를 <i>y</i>로 나타내야 합니다. \"절반만큼 참\"은 위끝 <i>h</i>를 미지수로 하는 방정식이에요.",
        // EN: In (a), write <span class="chem">u = x^2</span>: the equation becomes the quadratic <span class="chem">0.02u^2 + 0.1u - y = 0</span>.
        "(a)에서는 <span class=\"chem\">u = x^2</span>로 놓으면 방정식이 이차방정식 <span class=\"chem\">0.02u^2 + 0.1u - y = 0</span>이 됩니다.",
        // EN: In (b), integrate <span class="chem">pi x^2</span> from <span class="chem">y = 0</span> to <span class="chem">y = 5</span> on your GDC.
        "(b)에서는 GDC로 <span class=\"chem\">pi x^2</span>를 <span class=\"chem\">y = 0</span>부터 <span class=\"chem\">y = 5</span>까지 적분하세요.",
        // EN: In (c), solve <span class="chem">pi int_0^h 25(sqrt(0.01 + 0.08y) - 0.1) dy = 65.95</span> for <i>h</i>. The depth is more than half of 5, because the bowl is wider at the top.
        "(c)에서는 <span class=\"chem\">pi int_0^h 25(sqrt(0.01 + 0.08y) - 0.1) dy = 65.95</span>를 <i>h</i>에 대해 푸세요. 그릇은 위쪽이 더 넓으므로 깊이는 5의 절반보다 커요.",
      ],
      // EN: <p>Decode: a volume about the <i>y</i>-axis needs <span class="chem">x^2 = g(y)</span>, and "half full" makes the upper limit the unknown. (a) Quadratic in <span class="chem">x^2</span>, positive root. (b) <span class="chem">V = 131.899… ≈ 132</span> <span class="unit">cm3</span>. (c) <span class="chem">h = 3.26</span> <span class="unit">cm</span>.</p>
      solution: "<p>해석: <i>y</i>축 둘레의 부피에는 <span class=\"chem\">x^2 = g(y)</span>가 필요하고, \"절반만큼 참\" 때문에 위끝이 미지수가 돼요. (a) <span class=\"chem\">x^2</span>에 대한 이차방정식이고, 양의 근을 택해요. (b) <span class=\"chem\">V = 131.899… ≈ 132</span> <span class=\"unit\">cm3</span>. (c) <span class=\"chem\">h = 3.26</span> <span class=\"unit\">cm</span>.</p>",
      // EN: <p>(a) Let <span class="chem">u = x^2</span>: <span class="chem">u^2/50 + u/10 - y = 0</span>, so <span class="chem">u = (-0.1 + sqrt(0.01 + 0.08y)) / 0.04 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>, taking the positive root because <span class="chem">x^2 &gt;= 0</span>.</p><p>(b) <span class="chem">V = pi int_0^5 x^2 dy = 132</span> <span class="unit">cm3</span> (131.899…).</p><p>(c) Solve <span class="chem">pi int_0^h x^2 dy = 65.95…</span> with a GDC: <span class="chem">h = 3.26</span> <span class="unit">cm</span>.</p>
      answer: "<p>(a) <span class=\"chem\">u = x^2</span>로 놓으면: <span class=\"chem\">u^2/50 + u/10 - y = 0</span>이므로 <span class=\"chem\">u = (-0.1 + sqrt(0.01 + 0.08y)) / 0.04 = 25(sqrt(0.01 + 0.08y) - 0.1)</span>이고, <span class=\"chem\">x^2 &gt;= 0</span>이므로 양의 근을 택해요.</p><p>(b) <span class=\"chem\">V = pi int_0^5 x^2 dy = 132</span> <span class=\"unit\">cm3</span> (131.899…).</p><p>(c) GDC로 <span class=\"chem\">pi int_0^h x^2 dy = 65.95…</span>를 풀면: <span class=\"chem\">h = 3.26</span> <span class=\"unit\">cm</span>.</p>",
      markscheme: [
        // EN: M1: treats the equation as a quadratic in <span class="chem">x^2</span>.
        "M1: 방정식을 <span class=\"chem\">x^2</span>에 대한 이차방정식으로 다룸.",
        // EN: A1: applies the quadratic formula correctly: <span class="chem">x^2 = (-0.1 +- sqrt(0.01 + 0.08y))/0.04</span>.
        "A1: 근의 공식을 정확히 적용함: <span class=\"chem\">x^2 = (-0.1 +- sqrt(0.01 + 0.08y))/0.04</span>.",
        // EN: R1: rejects the negative root because <span class="chem">x^2 &gt;= 0</span>, leading to the given result AG (no mark for the given line).
        "R1: <span class=\"chem\">x^2 &gt;= 0</span>이므로 음의 근을 버리고, 주어진 결과로 이어짐 AG (주어진 식 자체에는 점수 없음).",
        // EN: M1: <span class="chem">V = pi int_0^5 x^2 dy</span> with the expression from (a).
        "M1: (a)의 식으로 <span class=\"chem\">V = pi int_0^5 x^2 dy</span>를 세움.",
        // EN: A1: <span class="chem">V = 132</span> <span class="unit">cm3</span>.
        "A1: <span class=\"chem\">V = 132</span> <span class=\"unit\">cm3</span>.",
        // EN: M1: sets <span class="chem">pi int_0^h x^2 dy</span> equal to half of the capacity.
        "M1: <span class=\"chem\">pi int_0^h x^2 dy</span>를 용량의 절반과 같다고 놓음.",
        // EN: M1: solves the equation with a GDC (graph or solver).
        "M1: GDC(그래프 또는 풀이 기능)로 방정식을 풂.",
        // EN: A1: <span class="chem">h = 3.26</span> <span class="unit">cm</span>.
        "A1: <span class=\"chem\">h = 3.26</span> <span class=\"unit\">cm</span>.",
      ],
    },

    // ── t5-3-q032 · numeric · exam · AHL · AHL 5.16, 5.17 · 6 marks
    "t5-3-q032": {
      // EN: <p>The region bounded by the curve <span class="chem">y = sqrt(x) e^{-x/4}</span>, the <i>x</i>-axis and the line <span class="chem">x = k</span>, where <span class="chem">k &gt; 0</span>, is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. The volume of the solid formed is <span class="chem">5</span> cubic units. Find the value of <i>k</i>.</p>
      stem: "<p>곡선 <span class=\"chem\">y = sqrt(x) e^{-x/4}</span>, <i>x</i>축, 직선 <span class=\"chem\">x = k</span> (<span class=\"chem\">k &gt; 0</span>)로 둘러싸인 영역을 <i>x</i>축 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시켜요. 이때 생기는 입체의 부피는 <span class=\"chem\">5</span> 세제곱 단위예요. <i>k</i>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the volume as <span class="chem">V = pi int_0^k x e^{-x/2} dx</span> (square <i>y</i> first).
        "부피를 <span class=\"chem\">V = pi int_0^k x e^{-x/2} dx</span>로 쓰세요 (먼저 <i>y</i>를 제곱합니다).",
        // EN: You can integrate by parts (<span class="chem">u = x</span>, <span class="chem">dv/dx = e^{-x/2}</span>) to get <span class="chem">V = pi(4 - (2k + 4)e^{-k/2})</span>, or work with the integral directly on your GDC.
        "부분적분(<span class=\"chem\">u = x</span>, <span class=\"chem\">dv/dx = e^{-x/2}</span>)으로 <span class=\"chem\">V = pi(4 - (2k + 4)e^{-k/2})</span>를 얻거나, GDC로 적분을 직접 다룰 수 있어요.",
        // EN: Solve <span class="chem">V = 5</span> on your GDC.
        "GDC로 <span class=\"chem\">V = 5</span>를 푸세요.",
      ],
      // EN: <p><span class="chem">V = pi int_0^k x e^{-x/2} dx</span>. By parts, <span class="chem">int x e^{-x/2} dx = -2x e^{-x/2} - 4e^{-x/2} + C</span>, so <span class="chem">V = pi(4 - (2k + 4)e^{-k/2})</span>. Solving <span class="chem">pi(4 - (2k + 4)e^{-k/2}) = 5</span> on a GDC gives <span class="chem">k = 2.74</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">V = pi int_0^k x e^{-x/2} dx</span>. 부분적분으로 <span class=\"chem\">int x e^{-x/2} dx = -2x e^{-x/2} - 4e^{-x/2} + C</span>이므로 <span class=\"chem\">V = pi(4 - (2k + 4)e^{-k/2})</span>예요. GDC로 <span class=\"chem\">pi(4 - (2k + 4)e^{-k/2}) = 5</span>를 풀면 <span class=\"chem\">k = 2.74</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-3-q033 · numeric · challenge · AHL · AHL 5.15 · 7 marks
    "t5-3-q033": {
      // EN: <p>A painting hangs on a gallery wall. Its bottom edge is <span class="unit">1.6 m</span> above a visitor's eye level and its top edge is <span class="unit">5.2 m</span> above eye level. The visitor stands <i>x</i> metres from the wall. The angle <span class="chem">theta</span> subtended at the visitor's eye by the painting is largest for one value of <i>x</i>.</p><p>Find the largest possible value of <span class="chem">theta</span>, in degrees.</p>
      stem: "<p>미술관 벽에 그림이 걸려 있어요. 그림의 아래 가장자리는 관람객의 눈높이보다 <span class=\"unit\">1.6 m</span> 위에 있고, 위 가장자리는 눈높이보다 <span class=\"unit\">5.2 m</span> 위에 있어요. 관람객은 벽에서 <i>x</i> 미터 떨어진 곳에 서 있어요. 관람객의 눈에서 그림을 바라보는 각 <span class=\"chem\">theta</span>는 어떤 한 <i>x</i> 값에서 가장 커요.</p><p><span class=\"chem\">theta</span>의 최댓값을 도 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: <span class="chem">theta</span> is the difference of two angles of elevation, so <span class="chem">theta = arctan(5.2/x) - arctan(1.6/x)</span>. This is an optimisation question on <span class="chem">theta(x)</span>.
        "해석: <span class=\"chem\">theta</span>는 두 올려본각의 차이므로 <span class=\"chem\">theta = arctan(5.2/x) - arctan(1.6/x)</span>입니다. 이것은 <span class=\"chem\">theta(x)</span>에 대한 최대·최소 활용 문제예요.",
        // EN: Differentiate using <span class="chem">d/dx arctan(a/x) = -a/(x^2 + a^2)</span>, or graph <span class="chem">theta(x)</span> on your GDC and find its maximum.
        "<span class=\"chem\">d/dx arctan(a/x) = -a/(x^2 + a^2)</span>를 이용해 미분하거나, GDC로 <span class=\"chem\">theta(x)</span>의 그래프를 그려 최댓값을 구하세요.",
        // EN: Setting the derivative equal to zero gives <span class="chem">x^2 = 5.2 × 1.6</span>. Remember to give <span class="chem">theta</span> in degrees.
        "도함수를 0으로 놓으면 <span class=\"chem\">x^2 = 5.2 × 1.6</span>을 얻어요. <span class=\"chem\">theta</span>를 도 단위로 답하는 것을 잊지 마세요.",
      ],
      // EN: <p>Decode: the angle subtended is (angle to the top) − (angle to the bottom), and "largest" means maximise. <span class="chem">theta(x) = arctan(5.2/x) - arctan(1.6/x)</span>, so <span class="chem">theta'(x) = -5.2/(x^2 + 27.04) + 1.6/(x^2 + 2.56)</span>. Setting this to zero: <span class="chem">5.2(x^2 + 2.56) = 1.6(x^2 + 27.04) => 3.6x^2 = 29.952 => x = sqrt(8.32) = 2.884…</span>. Then <span class="chem">theta = 0.55791…</span> rad <span class="chem">= 32.0°</span> (3 s.f.).</p>
      solution: "<p>해석: 바라보는 각은 (위 가장자리까지의 올려본각) − (아래 가장자리까지의 올려본각)이고, \"가장 큰\"은 최대화를 뜻해요. <span class=\"chem\">theta(x) = arctan(5.2/x) - arctan(1.6/x)</span>이므로 <span class=\"chem\">theta'(x) = -5.2/(x^2 + 27.04) + 1.6/(x^2 + 2.56)</span>. 이를 0으로 놓으면: <span class=\"chem\">5.2(x^2 + 2.56) = 1.6(x^2 + 27.04) => 3.6x^2 = 29.952 => x = sqrt(8.32) = 2.884…</span>. 그러면 <span class=\"chem\">theta = 0.55791…</span> rad <span class=\"chem\">= 32.0°</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-3-q034 · numeric · exam · AHL · AHL 5.15 · 5 marks
    "t5-3-q034": {
      // EN: <p>The number of birds in a colony <i>t</i> years after it was first counted is modelled by <span class="chem">N(t) = 200 × 1.07^t</span>. Find the value of <i>t</i> when the population first grows at a rate of <span class="chem">40</span> birds per year.</p>
      stem: "<p>어느 새 무리를 처음 센 뒤 <i>t</i>년이 지났을 때의 개체 수는 <span class=\"chem\">N(t) = 200 × 1.07^t</span>로 모형화돼요. 개체 수가 처음으로 1년에 <span class=\"chem\">40</span>마리의 비율로 증가할 때 <i>t</i>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "grows at a rate of 40 birds per year" is a statement about <span class="chem">dN/dt</span>, not about <i>N</i>.
        "해석: \"1년에 40마리의 비율로 증가\"는 <i>N</i>이 아니라 <span class=\"chem\">dN/dt</span>에 대한 진술입니다.",
        // EN: Use <span class="chem">d/dt (a^t) = a^t ln a</span>: <span class="chem">dN/dt = 200 ln(1.07) × 1.07^t</span>.
        "<span class=\"chem\">d/dt (a^t) = a^t ln a</span>를 이용하세요: <span class=\"chem\">dN/dt = 200 ln(1.07) × 1.07^t</span>.",
        // EN: Solve <span class="chem">200 ln(1.07) × 1.07^t = 40</span> with logarithms or your GDC.
        "로그나 GDC로 <span class=\"chem\">200 ln(1.07) × 1.07^t = 40</span>을 푸세요.",
      ],
      // EN: <p>Decode: the rate of growth is <span class="chem">dN/dt</span>. <span class="chem">dN/dt = 200 × 1.07^t ln 1.07 = 13.5317… × 1.07^t</span>. Setting this equal to 40: <span class="chem">1.07^t = 2.9560… => t = ln(2.9560…)/ln 1.07 = 16.0</span> years (3 s.f.). Since <span class="chem">dN/dt</span> is increasing, this is the first time.</p>
      solution: "<p>해석: 증가율은 <span class=\"chem\">dN/dt</span>예요. <span class=\"chem\">dN/dt = 200 × 1.07^t ln 1.07 = 13.5317… × 1.07^t</span>. 이를 40으로 놓으면: <span class=\"chem\">1.07^t = 2.9560… => t = ln(2.9560…)/ln 1.07 = 16.0</span>년 (유효숫자 3자리). <span class=\"chem\">dN/dt</span>는 증가하므로 이것이 처음 그렇게 되는 시각이에요.</p>",
      // EN: years
      unit: "년",
    },

    // ── t5-3-q035 · numeric · exam · AHL · AHL 5.14, 5.15 · 6 marks
    "t5-3-q035": {
      // EN: <p>A lighthouse <i>L</i> stands <span class="unit">800 m</span> from a straight shoreline. <i>O</i> is the point of the shore closest to <i>L</i>. The light rotates at a constant <span class="chem">0.5</span> revolutions per minute, and its beam meets the shore at a point <i>P</i>. Let <span class="chem">theta</span> be the angle <i>OLP</i>.</p><p>Find the speed, in metres per second, at which <i>P</i> moves along the shore at the instant when <span class="chem">theta = 50°</span>.</p>
      stem: "<p>등대 <i>L</i>은 곧은 해안선에서 <span class=\"unit\">800 m</span> 떨어진 곳에 서 있어요. <i>O</i>는 해안 위에서 <i>L</i>에 가장 가까운 점이에요. 등불은 분당 <span class=\"chem\">0.5</span>회전의 일정한 속력으로 돌고, 그 빛줄기는 해안 위의 점 <i>P</i>를 비춰요. 각 <i>OLP</i>를 <span class=\"chem\">theta</span>라 해요.</p><p><span class=\"chem\">theta = 50°</span>인 순간, <i>P</i>가 해안을 따라 움직이는 속력을 초당 미터 단위로 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: let <span class="chem">OP = x</span>. Right-angled trigonometry gives <span class="chem">x = 800 tan theta</span>. You know <span class="chem">d theta/dt</span> from the rotation and want <span class="chem">dx/dt</span>.
        "해석: <span class=\"chem\">OP = x</span>로 놓으세요. 직각삼각형의 삼각비로 <span class=\"chem\">x = 800 tan theta</span>입니다. 회전으로부터 <span class=\"chem\">d theta/dt</span>를 알고, <span class=\"chem\">dx/dt</span>를 구해야 해요.",
        // EN: <span class="chem">0.5</span> revolutions per minute is <span class="chem">pi</span> radians per minute, which is <span class="chem">pi/60</span> radians per second.
        "분당 <span class=\"chem\">0.5</span>회전은 분당 <span class=\"chem\">pi</span> 라디안, 즉 초당 <span class=\"chem\">pi/60</span> 라디안이에요.",
        // EN: <span class="chem">dx/dt = 800 sec^2 theta (d theta/dt)</span>. Convert <span class="chem">50°</span> to radians (or use degree mode only for <span class="chem">sec^2 50°</span>, not for the rate).
        "<span class=\"chem\">dx/dt = 800 sec^2 theta (d theta/dt)</span>. <span class=\"chem\">50°</span>를 라디안으로 바꾸세요 (또는 도 모드는 <span class=\"chem\">sec^2 50°</span>를 계산할 때만 쓰고, 변화율에는 쓰지 마세요).",
      ],
      // EN: <p>Decode: <span class="chem">x = 800 tan theta</span> links the position of <i>P</i> to the angle. <span class="chem">d theta/dt = 2pi × 0.5 / 60 = pi/60</span> <span class="unit">rad s-1</span>. Then <span class="chem">dx/dt = 800 sec^2 theta (d theta/dt) = 800 × 2.42027… × pi/60 = 101</span> <span class="unit">m s-1</span> (3 s.f.).</p>
      solution: "<p>해석: <span class=\"chem\">x = 800 tan theta</span>가 <i>P</i>의 위치와 각을 연결해요. <span class=\"chem\">d theta/dt = 2pi × 0.5 / 60 = pi/60</span> <span class=\"unit\">rad s-1</span>. 그러면 <span class=\"chem\">dx/dt = 800 sec^2 theta (d theta/dt) = 800 × 2.42027… × pi/60 = 101</span> <span class=\"unit\">m s-1</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-3-q036 · numeric · exam · AHL · AHL 5.16 · 5 marks
    "t5-3-q036": {
      // EN: <p>Use integration by parts to find <span class="chem">int ln x dx</span>. Hence find the value of <i>k</i>, where <span class="chem">k &gt; 1</span>, such that <span class="chem">int_1^k ln x dx = 3</span>.</p>
      stem: "<p>부분적분법을 이용하여 <span class=\"chem\">int ln x dx</span>를 구하시오 (Find). 이를 이용하여 (Hence) <span class=\"chem\">int_1^k ln x dx = 3</span>을 만족하는 <i>k</i> (<span class=\"chem\">k &gt; 1</span>)의 값을 구하시오 (find).</p>",
      hints: [
        // EN: Write <span class="chem">ln x = 1 × ln x</span> and take <span class="chem">u = ln x</span>, <span class="chem">dv/dx = 1</span>.
        "<span class=\"chem\">ln x = 1 × ln x</span>로 쓰고 <span class=\"chem\">u = ln x</span>, <span class=\"chem\">dv/dx = 1</span>로 놓으세요.",
        // EN: You should get <span class="chem">int ln x dx = x ln x - x + C</span>, so <span class="chem">int_1^k ln x dx = k ln k - k + 1</span>.
        "<span class=\"chem\">int ln x dx = x ln x - x + C</span>를 얻어야 하므로 <span class=\"chem\">int_1^k ln x dx = k ln k - k + 1</span>이에요.",
        // EN: Solve <span class="chem">k ln k - k + 1 = 3</span> on your GDC.
        "GDC로 <span class=\"chem\">k ln k - k + 1 = 3</span>을 푸세요.",
      ],
      // EN: <p>With <span class="chem">u = ln x</span>, <span class="chem">v = x</span>: <span class="chem">int ln x dx = x ln x - int 1 dx = x ln x - x + C</span>. So <span class="chem">int_1^k ln x dx = k ln k - k + 1 = 3</span>, and a GDC gives <span class="chem">k = 4.32</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">u = ln x</span>, <span class=\"chem\">v = x</span>로 놓으면: <span class=\"chem\">int ln x dx = x ln x - int 1 dx = x ln x - x + C</span>. 따라서 <span class=\"chem\">int_1^k ln x dx = k ln k - k + 1 = 3</span>이고, GDC로 풀면 <span class=\"chem\">k = 4.32</span> (유효숫자 3자리)예요.</p>",
    },

    // ── t5-3-q037 · numeric · challenge · AHL · AHL 5.16 · 7 marks
    "t5-3-q037": {
      // EN: <p>A plot of land is modelled by the region between the curve <span class="chem">y = x e^{-x}</span>, the <i>x</i>-axis and the line <span class="chem">x = 4</span>. A straight fence along the line <span class="chem">x = a</span> divides the plot into two parts of equal area. Find the value of <i>a</i>.</p>
      stem: "<p>어떤 땅이 곡선 <span class=\"chem\">y = x e^{-x}</span>, <i>x</i>축, 직선 <span class=\"chem\">x = 4</span> 사이의 영역으로 모형화돼요. 직선 <span class=\"chem\">x = a</span>를 따라 세운 곧은 울타리가 이 땅을 넓이가 같은 두 부분으로 나눠요. <i>a</i>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: "two parts of equal area" means <span class="chem">int_0^a x e^{-x} dx = (1/2) int_0^4 x e^{-x} dx</span>. The unknown is a limit of integration.
        "해석: \"넓이가 같은 두 부분\"은 <span class=\"chem\">int_0^a x e^{-x} dx = (1/2) int_0^4 x e^{-x} dx</span>를 뜻합니다. 미지수는 적분의 끝값이에요.",
        // EN: Integrate by parts: <span class="chem">int x e^{-x} dx = -x e^{-x} - e^{-x} + C</span>, so <span class="chem">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>.
        "부분적분을 하세요: <span class=\"chem\">int x e^{-x} dx = -x e^{-x} - e^{-x} + C</span>이므로 <span class=\"chem\">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>예요.",
        // EN: The whole area is <span class="chem">1 - 5e^{-4} = 0.90842…</span>. Solve <span class="chem">1 - (a + 1)e^{-a} = 0.45421…</span> on your GDC.
        "전체 넓이는 <span class=\"chem\">1 - 5e^{-4} = 0.90842…</span>예요. GDC로 <span class=\"chem\">1 - (a + 1)e^{-a} = 0.45421…</span>을 푸세요.",
      ],
      // EN: <p>Decode: equal areas turn into an equation whose unknown is the upper limit <i>a</i>. By parts, <span class="chem">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>. The total area is <span class="chem">1 - 5e^{-4} = 0.908421…</span>, so solve <span class="chem">1 - (a + 1)e^{-a} = 0.454210…</span>: <span class="chem">a = 1.54</span> (3 s.f.).</p>
      solution: "<p>해석: 넓이가 같다는 조건은 위끝 <i>a</i>를 미지수로 하는 방정식이 돼요. 부분적분으로 <span class=\"chem\">int_0^a x e^{-x} dx = 1 - (a + 1)e^{-a}</span>. 전체 넓이는 <span class=\"chem\">1 - 5e^{-4} = 0.908421…</span>이므로 <span class=\"chem\">1 - (a + 1)e^{-a} = 0.454210…</span>을 풀면: <span class=\"chem\">a = 1.54</span> (유효숫자 3자리).</p>",
    },

    // ── t5-3-q038 · numeric · exam · AHL · AHL 5.17 · 5 marks
    "t5-3-q038": {
      // EN: <p>The curve <span class="chem">x = 4 - y^2 - e^{0.5y}</span> and the <i>y</i>-axis enclose a region. Find the area of this region.</p>
      stem: "<p>곡선 <span class=\"chem\">x = 4 - y^2 - e^{0.5y}</span>와 <i>y</i>축이 한 영역을 둘러싸요. 이 영역의 넓이를 구하시오 (Find).</p>",
      hints: [
        // EN: The curve meets the <i>y</i>-axis where <span class="chem">x = 0</span>: solve <span class="chem">4 - y^2 - e^{0.5y} = 0</span> on your GDC (two roots).
        "곡선은 <span class=\"chem\">x = 0</span>인 곳에서 <i>y</i>축과 만나요: GDC로 <span class=\"chem\">4 - y^2 - e^{0.5y} = 0</span>을 푸세요 (근은 두 개).",
        // EN: Between these roots the curve is to the right of the <i>y</i>-axis, so the area is <span class="chem">int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy</span>.
        "두 근 사이에서 곡선은 <i>y</i>축의 오른쪽에 있으므로 넓이는 <span class=\"chem\">int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy</span>예요.",
      ],
      // EN: <p>GDC: <span class="chem">4 - y^2 - e^{0.5y} = 0</span> at <span class="chem">y_1 = -1.90090…</span> and <span class="chem">y_2 = 1.40688…</span>. Area <span class="chem">= int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy = 6.75</span> (3 s.f.).</p>
      solution: "<p>GDC: <span class=\"chem\">4 - y^2 - e^{0.5y} = 0</span>인 곳은 <span class=\"chem\">y_1 = -1.90090…</span>과 <span class=\"chem\">y_2 = 1.40688…</span>. 넓이 <span class=\"chem\">= int_{y_1}^{y_2} (4 - y^2 - e^{0.5y}) dy = 6.75</span> (유효숫자 3자리).</p>",
    },

    // ── t5-3-q039 · numeric · challenge · AHL · AHL 5.14 · 7 marks
    "t5-3-q039": {
      // EN: <p>A rectangle has one vertex at the origin, two sides along the positive <i>x</i>- and <i>y</i>-axes, and the opposite vertex <span class="chem">(x, y)</span> on the curve <span class="chem">x^2 + 2y^3 + y = 30</span>, with <span class="chem">x, y &gt; 0</span>. Find the maximum possible area of the rectangle.</p>
      stem: "<p>직사각형의 한 꼭짓점은 원점에 있고, 두 변은 양의 <i>x</i>축과 양의 <i>y</i>축을 따라 놓여 있으며, 마주 보는 꼭짓점 <span class=\"chem\">(x, y)</span>는 곡선 <span class=\"chem\">x^2 + 2y^3 + y = 30</span> 위에 있어요 (<span class=\"chem\">x, y &gt; 0</span>). 직사각형 넓이의 최댓값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is optimisation with an implicit constraint. Maximise <span class="chem">A = xy</span>, treating <i>y</i> as a function of <i>x</i> defined by the curve.
        "해석: 음함수로 주어진 조건 아래의 최대·최소 활용 문제입니다. <i>y</i>를 곡선으로 정해지는 <i>x</i>의 함수로 보고 <span class=\"chem\">A = xy</span>를 최대화하세요.",
        // EN: Differentiating the curve: <span class="chem">2x + (6y^2 + 1)(dy/dx) = 0 => dy/dx = -2x/(6y^2 + 1)</span>. Then <span class="chem">dA/dx = y + x (dy/dx)</span>.
        "곡선의 식을 미분하면: <span class=\"chem\">2x + (6y^2 + 1)(dy/dx) = 0 => dy/dx = -2x/(6y^2 + 1)</span>. 그리고 <span class=\"chem\">dA/dx = y + x (dy/dx)</span>예요.",
        // EN: <span class="chem">dA/dx = 0</span> gives <span class="chem">2x^2 = y(6y^2 + 1)</span>. Substitute <span class="chem">x^2 = 3y^3 + y/2</span> into the curve: <span class="chem">5y^3 + 1.5y = 30</span>, and solve on your GDC.
        "<span class=\"chem\">dA/dx = 0</span>에서 <span class=\"chem\">2x^2 = y(6y^2 + 1)</span>을 얻어요. <span class=\"chem\">x^2 = 3y^3 + y/2</span>를 곡선의 식에 대입하면 <span class=\"chem\">5y^3 + 1.5y = 30</span>이므로 GDC로 푸세요.",
      ],
      // EN: <p>Decode: maximise <span class="chem">A = xy</span> subject to the curve. <span class="chem">dA/dx = y - 2x^2/(6y^2 + 1) = 0 => x^2 = 3y^3 + y/2</span>. Then <span class="chem">3y^3 + y/2 + 2y^3 + y = 30 => 5y^3 + 1.5y - 30 = 0 => y = 1.76211…</span>, <span class="chem">x = sqrt(3y^3 + y/2) = 4.15874…</span>. The area is <span class="chem">A = xy = 7.31</span> (3 s.f.); it is a maximum because <span class="chem">A -> 0</span> at both ends of the arc.</p>
      solution: "<p>해석: 곡선의 조건 아래에서 <span class=\"chem\">A = xy</span>를 최대화해요. <span class=\"chem\">dA/dx = y - 2x^2/(6y^2 + 1) = 0 => x^2 = 3y^3 + y/2</span>. 그러면 <span class=\"chem\">3y^3 + y/2 + 2y^3 + y = 30 => 5y^3 + 1.5y - 30 = 0 => y = 1.76211…</span>, <span class=\"chem\">x = sqrt(3y^3 + y/2) = 4.15874…</span>. 넓이는 <span class=\"chem\">A = xy = 7.31</span> (유효숫자 3자리)이고, 호의 양 끝에서 <span class=\"chem\">A -> 0</span>이므로 이것은 최댓값이에요.</p>",
    },

    // ── t5-3-q040 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q040": {
      // EN: <p>At 12:00, car <i>A</i> is at a junction <i>O</i> and car <i>B</i> is <span class="unit">30 km</span> due east of <i>O</i>. Car <i>A</i> drives due north at <span class="unit">60 km h-1</span> and car <i>B</i> drives due west, towards <i>O</i>, at <span class="unit">80 km h-1</span>. Find the rate at which the distance between the cars is changing at 12:15.</p>
      stem: "<p>12:00에 자동차 <i>A</i>는 교차로 <i>O</i>에 있고, 자동차 <i>B</i>는 <i>O</i>에서 정동쪽으로 <span class=\"unit\">30 km</span> 떨어진 곳에 있어요. 자동차 <i>A</i>는 <span class=\"unit\">60 km h-1</span>로 정북쪽을 향해 달리고, 자동차 <i>B</i>는 <span class=\"unit\">80 km h-1</span>로 정서쪽, 즉 <i>O</i>를 향해 달려요. 12:15에 두 자동차 사이의 거리가 변하는 비율을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: write both positions in terms of the time <i>t</i> hours after 12:00. 12:15 is <span class="chem">t = 0.25</span>, not 15.
        "해석: 두 위치를 12:00 이후 <i>t</i>시간이 지난 시각으로 나타내세요. 12:15는 <span class=\"chem\">t = 0.25</span>이지 15가 아닙니다.",
        // EN: After <i>t</i> hours, <i>A</i> is <span class="chem">60t</span> north of <i>O</i> and <i>B</i> is <span class="chem">30 - 80t</span> east of <i>O</i>, so <span class="chem">D^2 = (60t)^2 + (30 - 80t)^2</span>.
        "<i>t</i>시간 후 <i>A</i>는 <i>O</i>의 북쪽 <span class=\"chem\">60t</span>에, <i>B</i>는 <i>O</i>의 동쪽 <span class=\"chem\">30 - 80t</span>에 있으므로 <span class=\"chem\">D^2 = (60t)^2 + (30 - 80t)^2</span>이에요.",
        // EN: Differentiate: <span class="chem">2D (dD/dt) = 7200t - 160(30 - 80t)</span>, then substitute <span class="chem">t = 0.25</span>.
        "미분하세요: <span class=\"chem\">2D (dD/dt) = 7200t - 160(30 - 80t)</span>. 그다음 <span class=\"chem\">t = 0.25</span>를 대입하세요.",
      ],
      // EN: <p>Decode: measure time in hours from 12:00. <span class="chem">D^2 = 3600t^2 + (30 - 80t)^2</span>. At <span class="chem">t = 0.25</span>: <span class="chem">D = sqrt(225 + 100) = 18.0277…</span> and <span class="chem">2D (dD/dt) = 7200(0.25) - 160(10) = 200</span>, so <span class="chem">dD/dt = 100/18.0277… = 5.55</span> <span class="unit">km h-1</span> (3 s.f.). The distance is increasing.</p>
      solution: "<p>해석: 시간은 12:00부터 시간 단위로 재요. <span class=\"chem\">D^2 = 3600t^2 + (30 - 80t)^2</span>. <span class=\"chem\">t = 0.25</span>일 때: <span class=\"chem\">D = sqrt(225 + 100) = 18.0277…</span>이고 <span class=\"chem\">2D (dD/dt) = 7200(0.25) - 160(10) = 200</span>이므로 <span class=\"chem\">dD/dt = 100/18.0277… = 5.55</span> <span class=\"unit\">km h-1</span> (유효숫자 3자리)예요. 거리는 증가하고 있어요.</p>",
    },

    // ── t5-3-q041 · numeric · exam · AHL · AHL 5.14 · 5 marks
    "t5-3-q041": {
      // EN: <p>A point moves along the curve <span class="chem">y = x^2 e^{-x}</span> so that its <i>x</i>-coordinate increases at a constant <span class="chem">0.3</span> units per second. Find the rate at which the distance of the point from the origin is changing when <span class="chem">x = 2.5</span>.</p>
      stem: "<p>한 점이 곡선 <span class=\"chem\">y = x^2 e^{-x}</span> 위를 움직이는데, <i>x</i>좌표가 초당 <span class=\"chem\">0.3</span> 단위의 일정한 비율로 증가해요. <span class=\"chem\">x = 2.5</span>일 때 이 점과 원점 사이의 거리가 변하는 비율을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the distance as a function of <i>x</i> only: <span class="chem">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>.
        "거리를 <i>x</i>만의 함수로 나타내세요: <span class=\"chem\">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>.",
        // EN: By the chain rule, <span class="chem">dD/dt = (dD/dx)(dx/dt) = 0.3 D'(x)</span>. Find <span class="chem">D'(2.5)</span> with your GDC (or differentiate by hand).
        "연쇄법칙에 의해 <span class=\"chem\">dD/dt = (dD/dx)(dx/dt) = 0.3 D'(x)</span>. GDC로 <span class=\"chem\">D'(2.5)</span>를 구하세요 (또는 직접 미분하세요).",
      ],
      // EN: <p><span class="chem">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>. GDC: <span class="chem">D'(2.5) = 0.958960…</span>. So <span class="chem">dD/dt = 0.3 × 0.958960… = 0.288</span> units per second (3 s.f.).</p>
      solution: "<p><span class=\"chem\">D(x) = sqrt(x^2 + x^4 e^{-2x})</span>. GDC: <span class=\"chem\">D'(2.5) = 0.958960…</span>. 따라서 <span class=\"chem\">dD/dt = 0.3 × 0.958960… = 0.288</span> 단위/초 (유효숫자 3자리)예요.</p>",
      // EN: units s-1
      unit: "단위 s-1",
    },

    // ── t5-3-q042 · short · challenge · AHL · AHL 5.14, 5.17 · 11 marks
    "t5-3-q042": {
      // EN: <p>The inside of a bowl is formed by rotating the curve <span class="chem">y = x^2/4</span>, <span class="chem">0 &lt;= y &lt;= 8</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis (lengths in cm). The bowl is empty at <span class="chem">t = 0</span>. Water then flows in at a rate of <span class="chem">30 e^{-0.1t}</span> <span class="unit">cm3 s-1</span>, where <i>t</i> is in seconds.</p><p>(a) Show that, when the water is <i>h</i> cm deep, its volume is <span class="chem">V = 2 pi h^2</span>. <strong>[2 marks]</strong></p><p>(b) Find the depth of the water when <span class="chem">t = 5</span>. <strong>[3 marks]</strong></p><p>(c) Find the rate at which the depth is increasing when <span class="chem">t = 5</span>. <strong>[3 marks]</strong></p><p>(d) Determine whether the bowl will ever be full. Justify your answer. <strong>[3 marks]</strong></p>
      stem: "<p>그릇의 안쪽은 곡선 <span class=\"chem\">y = x^2/4</span>, <span class=\"chem\">0 &lt;= y &lt;= 8</span>을 <i>y</i>축 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시킨 모양이에요 (길이의 단위는 cm). <span class=\"chem\">t = 0</span>에 그릇은 비어 있어요. 그 뒤 물이 <span class=\"chem\">30 e^{-0.1t}</span> <span class=\"unit\">cm3 s-1</span>의 비율로 흘러 들어가요 (<i>t</i>의 단위는 초).</p><p>(a) 물의 깊이가 <i>h</i> cm일 때 그 부피가 <span class=\"chem\">V = 2 pi h^2</span>임을 보이시오 (Show that). <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">t = 5</span>일 때 물의 깊이를 구하시오 (Find). <strong>[3 marks]</strong></p><p>(c) <span class=\"chem\">t = 5</span>일 때 깊이가 증가하는 비율을 구하시오 (Find). <strong>[3 marks]</strong></p><p>(d) 그릇이 언젠가 가득 차게 될지 결정하고 (Determine), 근거를 들어 설명하시오 (Justify). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the inflow rate is a function of <i>t</i>, so the volume in the bowl at time <i>t</i> is the integral of the rate. Depth then comes from <span class="chem">V = 2 pi h^2</span>, and part (d) asks whether the total inflow can ever reach the capacity.
        "해석: 유입률이 <i>t</i>의 함수이므로 시각 <i>t</i>에 그릇에 담긴 물의 부피는 유입률의 적분입니다. 깊이는 <span class=\"chem\">V = 2 pi h^2</span>에서 구하고, (d)는 총유입량이 용량에 도달할 수 있는지를 묻고 있어요.",
        // EN: For (a), the rotation is about the <i>y</i>-axis: <span class="chem">V = pi int_0^h x^2 dy</span> with <span class="chem">x^2 = 4y</span>.
        "(a)에서 회전축은 <i>y</i>축이에요: <span class=\"chem\">x^2 = 4y</span>로 놓고 <span class=\"chem\">V = pi int_0^h x^2 dy</span>.",
        // EN: For (b), <span class="chem">V(5) = int_0^5 30 e^{-0.1t} dt</span>, then solve <span class="chem">2 pi h^2 = V(5)</span>.
        "(b)에서는 <span class=\"chem\">V(5) = int_0^5 30 e^{-0.1t} dt</span>를 구한 다음 <span class=\"chem\">2 pi h^2 = V(5)</span>를 푸세요.",
        // EN: For (c), <span class="chem">dV/dt</span> at <span class="chem">t = 5</span> is just the inflow rate then; divide by <span class="chem">dV/dh = 4 pi h</span>. For (d), the total inflow <span class="chem">300(1 - e^{-0.1t})</span> never reaches 300.
        "(c)에서 <span class=\"chem\">t = 5</span>일 때의 <span class=\"chem\">dV/dt</span>는 바로 그때의 유입률이에요. 이를 <span class=\"chem\">dV/dh = 4 pi h</span>로 나누세요. (d)에서 총유입량 <span class=\"chem\">300(1 - e^{-0.1t})</span>은 결코 300에 이르지 않아요.",
      ],
      // EN: <p>Decode: integrate the inflow rate to get volume, convert volume to depth with the volume of revolution, and compare the limiting inflow with the capacity. (b) <span class="chem">h = 4.33</span> cm. (c) <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>. (d) At most <span class="unit">300 cm3</span> ever flows in, less than the <span class="unit">402 cm3</span> capacity, so the bowl is never full.</p>
      solution: "<p>해석: 유입률을 적분해 부피를 구하고, 회전체의 부피를 이용해 부피를 깊이로 바꾼 다음, 유입량의 극한과 용량을 비교해요. (b) <span class=\"chem\">h = 4.33</span> cm. (c) <span class=\"chem\">dh/dt = 0.334</span> <span class=\"unit\">cm s-1</span>. (d) 흘러 들어오는 물은 많아야 <span class=\"unit\">300 cm3</span>로, 용량 <span class=\"unit\">402 cm3</span>보다 적으므로 그릇은 결코 가득 차지 않아요.</p>",
      // EN: <p>(a) <span class="chem">x^2 = 4y</span>, so <span class="chem">V = pi int_0^h 4y dy = 2 pi h^2</span>.</p><p>(b) <span class="chem">V(5) = int_0^5 30e^{-0.1t} dt = 300(1 - e^{-0.5}) = 118.04…</span>, so <span class="chem">h = sqrt(118.04…/(2pi)) = 4.33</span> cm.</p><p>(c) <span class="chem">dV/dt = 30e^{-0.5} = 18.196…</span> and <span class="chem">dV/dh = 4 pi h = 54.466…</span>, so <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>.</p><p>(d) The total volume that ever flows in is <span class="chem">int_0^T 30e^{-0.1t} dt = 300(1 - e^{-0.1T}) &lt; 300</span>. A full bowl holds <span class="chem">2 pi (8)^2 = 402</span> <span class="unit">cm3</span>, so the bowl is never full (the depth stays below <span class="chem">sqrt(300/(2pi)) = 6.91</span> cm).</p>
      answer: "<p>(a) <span class=\"chem\">x^2 = 4y</span>이므로 <span class=\"chem\">V = pi int_0^h 4y dy = 2 pi h^2</span>.</p><p>(b) <span class=\"chem\">V(5) = int_0^5 30e^{-0.1t} dt = 300(1 - e^{-0.5}) = 118.04…</span>이므로 <span class=\"chem\">h = sqrt(118.04…/(2pi)) = 4.33</span> cm.</p><p>(c) <span class=\"chem\">dV/dt = 30e^{-0.5} = 18.196…</span>이고 <span class=\"chem\">dV/dh = 4 pi h = 54.466…</span>이므로 <span class=\"chem\">dh/dt = 0.334</span> <span class=\"unit\">cm s-1</span>.</p><p>(d) 흘러 들어오는 물의 총부피는 <span class=\"chem\">int_0^T 30e^{-0.1t} dt = 300(1 - e^{-0.1T}) &lt; 300</span>이에요. 가득 찬 그릇에는 <span class=\"chem\">2 pi (8)^2 = 402</span> <span class=\"unit\">cm3</span>가 담기므로 그릇은 결코 가득 차지 않아요 (깊이는 항상 <span class=\"chem\">sqrt(300/(2pi)) = 6.91</span> cm보다 낮아요).</p>",
      markscheme: [
        // EN: M1: <span class="chem">V = pi int_0^h x^2 dy</span> with <span class="chem">x^2 = 4y</span>.
        "M1: <span class=\"chem\">x^2 = 4y</span>로 놓고 <span class=\"chem\">V = pi int_0^h x^2 dy</span>.",
        // EN: A1: <span class="chem">pi [2y^2]_0^h</span>, leading to <span class="chem">V = 2 pi h^2</span> AG (no mark for the given line).
        "A1: <span class=\"chem\">pi [2y^2]_0^h</span>가 보이고, <span class=\"chem\">V = 2 pi h^2</span>로 이어짐 AG (주어진 식 자체에는 점수 없음).",
        // EN: M1: volume at <span class="chem">t = 5</span> is <span class="chem">int_0^5 30 e^{-0.1t} dt</span>.
        "M1: <span class=\"chem\">t = 5</span>에서의 부피는 <span class=\"chem\">int_0^5 30 e^{-0.1t} dt</span>.",
        // EN: A1: <span class="chem">118.04…</span> <span class="unit">cm3</span>.
        "A1: <span class=\"chem\">118.04…</span> <span class=\"unit\">cm3</span>.",
        // EN: A1: <span class="chem">h = 4.33</span> cm.
        "A1: <span class=\"chem\">h = 4.33</span> cm.",
        // EN: M1: <span class="chem">dh/dt = (dV/dt)/(dV/dh)</span> with <span class="chem">dV/dh = 4 pi h</span>.
        "M1: <span class=\"chem\">dV/dh = 4 pi h</span>로 놓고 <span class=\"chem\">dh/dt = (dV/dt)/(dV/dh)</span>.",
        // EN: A1: <span class="chem">dV/dt = 30e^{-0.5} = 18.196…</span> at <span class="chem">t = 5</span>.
        "A1: <span class=\"chem\">t = 5</span>에서 <span class=\"chem\">dV/dt = 30e^{-0.5} = 18.196…</span>.",
        // EN: A1: <span class="chem">dh/dt = 0.334</span> <span class="unit">cm s-1</span>.
        "A1: <span class=\"chem\">dh/dt = 0.334</span> <span class=\"unit\">cm s-1</span>.",
        // EN: M1: considers the total inflow as <span class="chem">t</span> increases: <span class="chem">300(1 - e^{-0.1t}) &lt; 300</span>.
        "M1: <span class=\"chem\">t</span>가 커질 때의 총유입량을 고려함: <span class=\"chem\">300(1 - e^{-0.1t}) &lt; 300</span>.",
        // EN: A1: capacity <span class="chem">2 pi × 64 = 402</span> <span class="unit">cm3</span>.
        "A1: 용량 <span class=\"chem\">2 pi × 64 = 402</span> <span class=\"unit\">cm3</span>.",
        // EN: R1: <span class="chem">300 &lt; 402</span>, so the bowl is never full.
        "R1: <span class=\"chem\">300 &lt; 402</span>이므로 그릇은 결코 가득 차지 않음.",
      ],
    },

    // ── t5-3-q043 · short · exam · AHL · AHL 5.16 · 7 marks
    "t5-3-q043": {
      // EN: <p>A particle moves in a straight line, starting from the origin at <span class="chem">t = 0</span>. Its velocity after <i>t</i> seconds is <span class="chem">v(t) = 2t e^{-0.4t}</span> <span class="unit">m s-1</span>.</p><p>(a) Use integration by parts to show that the displacement of the particle after <i>t</i> seconds is <span class="chem">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>. <strong>[4 marks]</strong></p><p>(b) Find the time at which the particle is <span class="unit">8 m</span> from the origin. <strong>[3 marks]</strong></p>
      stem: "<p>입자가 <span class=\"chem\">t = 0</span>에 원점에서 출발하여 직선 위를 움직여요. <i>t</i>초 후의 속도는 <span class=\"chem\">v(t) = 2t e^{-0.4t}</span> <span class=\"unit\">m s-1</span>이에요.</p><p>(a) 부분적분법을 이용하여 <i>t</i>초 후 입자의 변위가 <span class=\"chem\">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>임을 보이시오 (Show that). <strong>[4 marks]</strong></p><p>(b) 입자가 원점에서 <span class=\"unit\">8 m</span> 떨어져 있는 시각을 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: For (a), take <span class="chem">u = 2t</span> and <span class="chem">dv/dt = e^{-0.4t}</span>, so <span class="chem">v = -2.5 e^{-0.4t}</span>. Find the constant from <span class="chem">s(0) = 0</span>.
        "(a)에서는 <span class=\"chem\">u = 2t</span>, <span class=\"chem\">dv/dt = e^{-0.4t}</span>로 놓으면 <span class=\"chem\">v = -2.5 e^{-0.4t}</span>예요. 상수는 <span class=\"chem\">s(0) = 0</span>에서 구하세요.",
        // EN: For (b), check that the particle never changes direction, then solve <span class="chem">s(t) = 8</span> on your GDC.
        "(b)에서는 입자가 방향을 한 번도 바꾸지 않음을 확인한 다음, GDC로 <span class=\"chem\">s(t) = 8</span>을 푸세요.",
      ],
      // EN: <p>(a) Parts gives <span class="chem">s(t) = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span> with <span class="chem">C = 12.5</span>. (b) <span class="chem">t = 5.44</span> s (3 s.f.).</p>
      solution: "<p>(a) 부분적분으로 <span class=\"chem\">s(t) = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span>이고 <span class=\"chem\">C = 12.5</span>예요. (b) <span class=\"chem\">t = 5.44</span> s (유효숫자 3자리).</p>",
      // EN: <p>(a) With <span class="chem">u = 2t</span>, <span class="chem">dv/dt = e^{-0.4t}</span>: <span class="chem">int 2t e^{-0.4t} dt = -5t e^{-0.4t} + int 5e^{-0.4t} dt = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span>. Since <span class="chem">s(0) = 0</span>, <span class="chem">C = 12.5</span>, so <span class="chem">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>.</p><p>(b) <span class="chem">v &gt; 0</span> for <span class="chem">t &gt; 0</span>, so the distance from the origin is <span class="chem">s(t)</span>. Solve <span class="chem">12.5 - (5t + 12.5)e^{-0.4t} = 8</span> on a GDC: <span class="chem">t = 5.44</span> s.</p>
      answer: "<p>(a) <span class=\"chem\">u = 2t</span>, <span class=\"chem\">dv/dt = e^{-0.4t}</span>로 놓으면: <span class=\"chem\">int 2t e^{-0.4t} dt = -5t e^{-0.4t} + int 5e^{-0.4t} dt = -5t e^{-0.4t} - 12.5e^{-0.4t} + C</span>. <span class=\"chem\">s(0) = 0</span>이므로 <span class=\"chem\">C = 12.5</span>이고, 따라서 <span class=\"chem\">s(t) = 12.5 - (5t + 12.5)e^{-0.4t}</span>예요.</p><p>(b) <span class=\"chem\">t &gt; 0</span>에서 <span class=\"chem\">v &gt; 0</span>이므로 원점으로부터의 거리는 <span class=\"chem\">s(t)</span>예요. GDC로 <span class=\"chem\">12.5 - (5t + 12.5)e^{-0.4t} = 8</span>을 풀면: <span class=\"chem\">t = 5.44</span> s.</p>",
      markscheme: [
        // EN: M1: integration by parts with <span class="chem">u = 2t</span> and <span class="chem">dv/dt = e^{-0.4t}</span> (so <span class="chem">v = -2.5e^{-0.4t}</span>).
        "M1: <span class=\"chem\">u = 2t</span>, <span class=\"chem\">dv/dt = e^{-0.4t}</span> (따라서 <span class=\"chem\">v = -2.5e^{-0.4t}</span>)로 부분적분을 함.",
        // EN: A1: <span class="chem">-5t e^{-0.4t} + int 5e^{-0.4t} dt</span>.
        "A1: <span class=\"chem\">-5t e^{-0.4t} + int 5e^{-0.4t} dt</span>.",
        // EN: A1: <span class="chem">-5t e^{-0.4t} - 12.5 e^{-0.4t} + C</span>.
        "A1: <span class=\"chem\">-5t e^{-0.4t} - 12.5 e^{-0.4t} + C</span>.",
        // EN: M1: uses <span class="chem">s(0) = 0</span> to find <span class="chem">C = 12.5</span>, leading to the given result AG (no mark for the given line).
        "M1: <span class=\"chem\">s(0) = 0</span>을 이용해 <span class=\"chem\">C = 12.5</span>를 구하고, 주어진 결과로 이어짐 AG (주어진 식 자체에는 점수 없음).",
        // EN: R1: notes that <span class="chem">v &gt; 0</span>, so the particle never turns and its distance from the origin is <span class="chem">s(t)</span>.
        "R1: <span class=\"chem\">v &gt; 0</span>이므로 입자가 되돌아오지 않고 원점으로부터의 거리가 <span class=\"chem\">s(t)</span>임을 언급함.",
        // EN: M1: solves <span class="chem">s(t) = 8</span> with a GDC.
        "M1: GDC로 <span class=\"chem\">s(t) = 8</span>을 풂.",
        // EN: A1: <span class="chem">t = 5.44</span> s.
        "A1: <span class=\"chem\">t = 5.44</span> s.",
      ],
    },

    // ── t5-3-q044 · numeric · exam · AHL · AHL 5.17 · 6 marks
    "t5-3-q044": {
      // EN: <p>The inside of a vase is formed by rotating the curve <span class="chem">x = 3 + 0.5 sin(0.8y)</span>, <span class="chem">0 &lt;= y &lt;= 12</span>, through <span class="chem">2pi</span> radians about the <i>y</i>-axis, where lengths are in centimetres and the base of the vase is at <span class="chem">y = 0</span>. Water is poured into the empty vase until it holds <span class="unit">250 cm3</span>. Find the depth of the water.</p>
      stem: "<p>꽃병의 안쪽은 곡선 <span class=\"chem\">x = 3 + 0.5 sin(0.8y)</span>, <span class=\"chem\">0 &lt;= y &lt;= 12</span>를 <i>y</i>축 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시킨 모양이에요. 길이의 단위는 센티미터이고, 꽃병의 바닥은 <span class=\"chem\">y = 0</span>에 있어요. 빈 꽃병에 물이 <span class=\"unit\">250 cm3</span>가 될 때까지 부어요. 물의 깊이를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the volume of water of depth <i>h</i> is a volume of revolution about the <i>y</i>-axis with upper limit <i>h</i>: <span class="chem">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>.
        "해석: 깊이가 <i>h</i>인 물의 부피는 위끝이 <i>h</i>인 <i>y</i>축 둘레의 회전체의 부피예요: <span class=\"chem\">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>.",
        // EN: Solve <span class="chem">V(h) = 250</span> on your GDC, for example by graphing <span class="chem">V(h)</span> as a function of <i>h</i> and intersecting with 250.
        "GDC로 <span class=\"chem\">V(h) = 250</span>을 푸세요. 예를 들어 <span class=\"chem\">V(h)</span>를 <i>h</i>의 함수로 그래프를 그리고 250과의 교점을 구하세요.",
        // EN: Check that your answer is less than 12 (the vase holds about <span class="unit">367 cm3</span> when full).
        "답이 12보다 작은지 확인하세요 (꽃병에는 가득 찼을 때 약 <span class=\"unit\">367 cm3</span>가 담겨요).",
      ],
      // EN: <p>Decode: the depth is the upper limit of the volume integral. <span class="chem">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>. GDC: <span class="chem">V(h) = 250 => h = 8.65</span> cm (3 s.f.). This is below the full height 12 cm (full volume <span class="chem">367</span> <span class="unit">cm3</span>).</p>
      solution: "<p>해석: 깊이는 부피 적분의 위끝이에요. <span class=\"chem\">V(h) = pi int_0^h (3 + 0.5 sin(0.8y))^2 dy</span>. GDC: <span class=\"chem\">V(h) = 250 => h = 8.65</span> cm (유효숫자 3자리). 이는 전체 높이 12 cm보다 낮아요 (가득 찼을 때의 부피는 <span class=\"chem\">367</span> <span class=\"unit\">cm3</span>).</p>",
    },

    // ── t5-3-q045 · short · challenge · AHL · AHL 5.14 · 8 marks
    "t5-3-q045": {
      // EN: <p>The curve <i>C</i> has equation <span class="chem">e^{xy} + y^2 = 5</span>. The line <span class="chem">x = 0.5</span> meets <i>C</i> at a point <i>P</i> with positive <i>y</i>-coordinate.</p><p>(a) Find the <i>y</i>-coordinate of <i>P</i>. <strong>[2 marks]</strong></p><p>(b) Find the gradient of <i>C</i> at <i>P</i>. <strong>[4 marks]</strong></p><p>(c) The tangent to <i>C</i> at <i>P</i> meets the <i>x</i>-axis at <i>Q</i>. Find the <i>x</i>-coordinate of <i>Q</i>. <strong>[2 marks]</strong></p>
      stem: "<p>곡선 <i>C</i>의 방정식은 <span class=\"chem\">e^{xy} + y^2 = 5</span>예요. 직선 <span class=\"chem\">x = 0.5</span>는 <i>C</i>와 <i>y</i>좌표가 양수인 점 <i>P</i>에서 만나요.</p><p>(a) <i>P</i>의 <i>y</i>좌표를 구하시오 (Find). <strong>[2 marks]</strong></p><p>(b) <i>P</i>에서 <i>C</i>의 기울기를 구하시오 (Find). <strong>[4 marks]</strong></p><p>(c) <i>P</i>에서 <i>C</i>의 접선은 <i>x</i>축과 <i>Q</i>에서 만나요. <i>Q</i>의 <i>x</i>좌표를 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: <i>P</i> is not given; you must first find its <i>y</i>-coordinate numerically. Then this is an implicit gradient and a tangent line. Keep full GDC accuracy until the end.
        "해석: <i>P</i>가 주어지지 않았으므로 먼저 그 <i>y</i>좌표를 수치적으로 구해야 합니다. 그다음은 음함수의 기울기와 접선 문제예요. 끝까지 GDC의 값을 반올림하지 말고 쓰세요.",
        // EN: Differentiate <span class="chem">e^{xy}</span> with the chain rule: its derivative is <span class="chem">e^{xy}(y + x dy/dx)</span>.
        "<span class=\"chem\">e^{xy}</span>는 연쇄법칙으로 미분하세요: 그 도함수는 <span class=\"chem\">e^{xy}(y + x dy/dx)</span>예요.",
        // EN: Solve for <span class="chem">dy/dx</span>: <span class="chem">dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>, and substitute <span class="chem">x = 0.5</span> and the stored <i>y</i>.
        "<span class=\"chem\">dy/dx</span>에 대해 푸세요: <span class=\"chem\">dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>. 그리고 <span class=\"chem\">x = 0.5</span>와 저장해 둔 <i>y</i> 값을 대입하세요.",
        // EN: For (c), set <span class="chem">y = 0</span> in <span class="chem">y - y_P = m(x - 0.5)</span>.
        "(c)에서는 <span class=\"chem\">y - y_P = m(x - 0.5)</span>에 <span class=\"chem\">y = 0</span>을 대입하세요.",
      ],
      // EN: <p>Decode: find <i>P</i> numerically, then use implicit differentiation for the gradient and the tangent. (a) <span class="chem">y_P = 1.649</span>. (b) <span class="chem">m = -0.847</span>. (c) <span class="chem">x_Q = 0.5 - y_P/m = 2.45</span>.</p>
      solution: "<p>해석: 먼저 <i>P</i>를 수치적으로 구하고, 음함수의 미분법으로 기울기와 접선을 구해요. (a) <span class=\"chem\">y_P = 1.649</span>. (b) <span class=\"chem\">m = -0.847</span>. (c) <span class=\"chem\">x_Q = 0.5 - y_P/m = 2.45</span>.</p>",
      // EN: <p>(a) <span class="chem">e^{0.5y} + y^2 = 5</span>; GDC gives <span class="chem">y = 1.649</span> (1.64901…).</p><p>(b) <span class="chem">e^{xy}(y + x dy/dx) + 2y dy/dx = 0 => dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>. At <i>P</i>: <span class="chem">dy/dx = -3.76099…/4.43840… = -0.847</span>.</p><p>(c) Tangent: <span class="chem">y - 1.64901… = -0.847375…(x - 0.5)</span>. Setting <span class="chem">y = 0</span>: <span class="chem">x = 0.5 + 1.64901…/0.847375… = 2.45</span>.</p>
      answer: "<p>(a) <span class=\"chem\">e^{0.5y} + y^2 = 5</span>; GDC로 <span class=\"chem\">y = 1.649</span> (1.64901…).</p><p>(b) <span class=\"chem\">e^{xy}(y + x dy/dx) + 2y dy/dx = 0 => dy/dx = -y e^{xy}/(x e^{xy} + 2y)</span>. <i>P</i>에서: <span class=\"chem\">dy/dx = -3.76099…/4.43840… = -0.847</span>.</p><p>(c) 접선: <span class=\"chem\">y - 1.64901… = -0.847375…(x - 0.5)</span>. <span class=\"chem\">y = 0</span>으로 놓으면: <span class=\"chem\">x = 0.5 + 1.64901…/0.847375… = 2.45</span>.</p>",
      markscheme: [
        // EN: M1: substitutes <span class="chem">x = 0.5</span> and solves with a GDC.
        "M1: <span class=\"chem\">x = 0.5</span>를 대입하고 GDC로 풂.",
        // EN: A1: <span class="chem">y = 1.65</span> (1.64901…).
        "A1: <span class=\"chem\">y = 1.65</span> (1.64901…).",
        // EN: M1: implicit differentiation, with the chain and product rules on <span class="chem">e^{xy}</span>.
        "M1: <span class=\"chem\">e^{xy}</span>에 연쇄법칙과 곱의 미분법을 적용하여 음함수의 미분을 함.",
        // EN: A1: <span class="chem">e^{xy}(y + x dy/dx) + 2y dy/dx = 0</span>.
        "A1: <span class=\"chem\">e^{xy}(y + x dy/dx) + 2y dy/dx = 0</span>.",
        // EN: M1: substitutes the coordinates of <i>P</i> (using unrounded <i>y</i>).
        "M1: <i>P</i>의 좌표를 (반올림하지 않은 <i>y</i>를 써서) 대입함.",
        // EN: A1: <span class="chem">dy/dx = -0.847</span>.
        "A1: <span class=\"chem\">dy/dx = -0.847</span>.",
        // EN: M1: equation of the tangent, with <span class="chem">y = 0</span>.
        "M1: 접선의 방정식에서 <span class=\"chem\">y = 0</span>으로 놓음.",
        // EN: A1: <span class="chem">x = 2.45</span>.
        "A1: <span class=\"chem\">x = 2.45</span>.",
      ],
    },

    // ── t5-3-q046 · short · foundation · AHL · AHL 5.12 · 4 marks
    "t5-3-q046": {
      // EN: <p>Let <span class="chem">f(x) = 2x^2 - 5x</span>. Use differentiation from first principles to show that <span class="chem">f'(x) = 4x - 5</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = 2x^2 - 5x</span>라 하자. 도함수의 정의를 이용한 미분으로 <span class=\"chem\">f'(x) = 4x - 5</span>임을 보이시오 (Show that).</p>",
      hints: [
        // EN: Start from <span class="chem">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span>, and write <span class="chem">f(x + h)</span> out in full.
        "<span class=\"chem\">f'(x) = lim_{h->0} (f(x + h) - f(x))/h</span>에서 시작하고, <span class=\"chem\">f(x + h)</span>를 빠짐없이 전개해 쓰세요.",
        // EN: Every term without <i>h</i> cancels. Divide by <i>h</i> <strong>before</strong> you let <span class="chem">h -> 0</span>.
        "<i>h</i>가 없는 항은 모두 소거돼요. <span class=\"chem\">h -> 0</span>으로 보내기 <strong>전에</strong> <i>h</i>로 나누세요.",
      ],
      // EN: <p><span class="chem">(f(x + h) - f(x))/h = (4xh + 2h^2 - 5h)/h = 4x + 2h - 5 -> 4x - 5</span> as <span class="chem">h -> 0</span>.</p>
      solution: "<p><span class=\"chem\">h -> 0</span>일 때 <span class=\"chem\">(f(x + h) - f(x))/h = (4xh + 2h^2 - 5h)/h = 4x + 2h - 5 -> 4x - 5</span>예요.</p>",
      // EN: <p><span class="chem">f(x + h) - f(x) = 2(x + h)^2 - 5(x + h) - 2x^2 + 5x = 4xh + 2h^2 - 5h</span>. So <span class="chem">f'(x) = lim_{h->0} (4xh + 2h^2 - 5h)/h = lim_{h->0} (4x + 2h - 5) = 4x - 5</span>.</p>
      answer: "<p><span class=\"chem\">f(x + h) - f(x) = 2(x + h)^2 - 5(x + h) - 2x^2 + 5x = 4xh + 2h^2 - 5h</span>. 따라서 <span class=\"chem\">f'(x) = lim_{h->0} (4xh + 2h^2 - 5h)/h = lim_{h->0} (4x + 2h - 5) = 4x - 5</span>예요.</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">lim_{h->0} (f(x + h) - f(x))/h</span> with <span class="chem">f(x + h) = 2(x + h)^2 - 5(x + h)</span>.
        "M1: <span class=\"chem\">f(x + h) = 2(x + h)^2 - 5(x + h)</span>로 놓고 <span class=\"chem\">lim_{h->0} (f(x + h) - f(x))/h</span>를 이용함.",
        // EN: A1: expands correctly: <span class="chem">2x^2 + 4xh + 2h^2 - 5x - 5h</span>.
        "A1: 정확히 전개함: <span class=\"chem\">2x^2 + 4xh + 2h^2 - 5x - 5h</span>.",
        // EN: A1: simplifies the numerator to <span class="chem">4xh + 2h^2 - 5h</span>.
        "A1: 분자를 <span class=\"chem\">4xh + 2h^2 - 5h</span>로 간단히 함.",
        // EN: A1: divides by <i>h</i> to get <span class="chem">4x + 2h - 5</span> before letting <span class="chem">h -> 0</span>, leading to <span class="chem">f'(x) = 4x - 5</span> AG (no mark for the given line).
        "A1: <span class=\"chem\">h -> 0</span>으로 보내기 전에 <i>h</i>로 나누어 <span class=\"chem\">4x + 2h - 5</span>를 얻고, <span class=\"chem\">f'(x) = 4x - 5</span>로 이어짐 AG (주어진 식 자체에는 점수 없음).",
      ],
    },

    // ── t5-3-q047 · numeric · foundation · AHL · AHL 5.15 · 3 marks
    "t5-3-q047": {
      // EN: <p>Let <span class="chem">f(x) = sec(2x)</span>. Find the exact value of <span class="chem">f'(pi/8)</span>.</p>
      stem: "<p><span class=\"chem\">f(x) = sec(2x)</span>라 하자. <span class=\"chem\">f'(pi/8)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Use <span class="chem">d/dx sec x = sec x tan x</span> with the chain rule: <span class="chem">f'(x) = 2 sec(2x) tan(2x)</span>.
        "<span class=\"chem\">d/dx sec x = sec x tan x</span>와 연쇄법칙을 이용하세요: <span class=\"chem\">f'(x) = 2 sec(2x) tan(2x)</span>.",
        // EN: At <span class="chem">x = pi/8</span>, <span class="chem">2x = pi/4</span>, where <span class="chem">sec(pi/4) = sqrt(2)</span> and <span class="chem">tan(pi/4) = 1</span>.
        "<span class=\"chem\">x = pi/8</span>일 때 <span class=\"chem\">2x = pi/4</span>이고, <span class=\"chem\">sec(pi/4) = sqrt(2)</span>, <span class=\"chem\">tan(pi/4) = 1</span>이에요.",
      ],
      // EN: <p><span class="chem">f'(x) = 2 sec(2x) tan(2x)</span>, so <span class="chem">f'(pi/8) = 2 sec(pi/4) tan(pi/4) = 2 × sqrt(2) × 1 = 2 sqrt(2)</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = 2 sec(2x) tan(2x)</span>이므로 <span class=\"chem\">f'(pi/8) = 2 sec(pi/4) tan(pi/4) = 2 × sqrt(2) × 1 = 2 sqrt(2)</span>예요.</p>",
    },

    // ── t5-3-q048 · numeric · exam · AHL · AHL 5.15 · 4 marks
    "t5-3-q048": {
      // EN: <p>Let <span class="chem">f(x) = x arccos x</span>, for <span class="chem">-1 &lt; x &lt; 1</span>. Find the exact value of <span class="chem">f'(1/2)</span>.</p>
      stem: "<p><span class=\"chem\">-1 &lt; x &lt; 1</span>에서 <span class=\"chem\">f(x) = x arccos x</span>라 하자. <span class=\"chem\">f'(1/2)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Use the product rule with <span class="chem">d/dx arccos x = -1/sqrt(1 - x^2)</span>.
        "곱의 미분법과 <span class=\"chem\">d/dx arccos x = -1/sqrt(1 - x^2)</span>를 이용하세요.",
        // EN: <span class="chem">f'(x) = arccos x - x/sqrt(1 - x^2)</span>. At <span class="chem">x = 1/2</span>, <span class="chem">arccos(1/2) = pi/3</span> and <span class="chem">sqrt(1 - 1/4) = sqrt(3)/2</span>.
        "<span class=\"chem\">f'(x) = arccos x - x/sqrt(1 - x^2)</span>. <span class=\"chem\">x = 1/2</span>일 때 <span class=\"chem\">arccos(1/2) = pi/3</span>이고 <span class=\"chem\">sqrt(1 - 1/4) = sqrt(3)/2</span>예요.",
      ],
      // EN: <p><span class="chem">f'(x) = arccos x + x × (-1/sqrt(1 - x^2))</span>. So <span class="chem">f'(1/2) = pi/3 - (1/2)/(sqrt(3)/2) = pi/3 - 1/sqrt(3) = pi/3 - sqrt(3)/3</span>.</p>
      solution: "<p><span class=\"chem\">f'(x) = arccos x + x × (-1/sqrt(1 - x^2))</span>. 따라서 <span class=\"chem\">f'(1/2) = pi/3 - (1/2)/(sqrt(3)/2) = pi/3 - 1/sqrt(3) = pi/3 - sqrt(3)/3</span>이에요.</p>",
    },

    // ── t5-3-q049 · short · exam · AHL · AHL 5.15 · 8 marks
    "t5-3-q049": {
      // EN: <p>(a) Find <span class="chem">dy/dx</span> for each of the following.</p><p>(i) <span class="chem">y = cot(3x)</span> &nbsp; (ii) <span class="chem">y = log_5 (2x - 1)</span>, <span class="chem">x &gt; 1/2</span> &nbsp; (iii) <span class="chem">y = 2^{x^2}</span> <strong>[6 marks]</strong></p><p>(b) Hence find <span class="chem">int x 2^{x^2} dx</span>. <strong>[2 marks]</strong></p>
      stem: "<p>(a) 다음 각각에 대하여 <span class=\"chem\">dy/dx</span>를 구하시오 (Find).</p><p>(i) <span class=\"chem\">y = cot(3x)</span> &nbsp; (ii) <span class=\"chem\">y = log_5 (2x - 1)</span>, <span class=\"chem\">x &gt; 1/2</span> &nbsp; (iii) <span class=\"chem\">y = 2^{x^2}</span> <strong>[6 marks]</strong></p><p>(b) 이를 이용하여 (Hence) <span class=\"chem\">int x 2^{x^2} dx</span>를 구하시오 (find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: The formula booklet gives the derivatives of <span class="chem">cot x</span>, <span class="chem">a^x</span> and <span class="chem">log_a x</span>. In every part, multiply by the derivative of the inside function.
        "공식집에는 <span class=\"chem\">cot x</span>, <span class=\"chem\">a^x</span>, <span class=\"chem\">log_a x</span>의 도함수가 나와 있어요. 모든 문항에서 속함수의 도함수를 곱하세요.",
        // EN: For (ii), <span class="chem">d/dx log_a x = 1/(x ln a)</span>. For (iii), <span class="chem">d/dx a^x = a^x ln a</span>.
        "(ii)에서는 <span class=\"chem\">d/dx log_a x = 1/(x ln a)</span>. (iii)에서는 <span class=\"chem\">d/dx a^x = a^x ln a</span>예요.",
        // EN: For (b), the integrand is (a)(iii) divided by <span class="chem">2 ln 2</span>.
        "(b)에서 피적분함수는 (a)(iii)의 결과를 <span class=\"chem\">2 ln 2</span>로 나눈 것이에요.",
      ],
      // EN: <p>(i) <span class="chem">-3 cosec^2(3x)</span>. (ii) <span class="chem">2/((2x - 1) ln 5)</span>. (iii) <span class="chem">2x ln 2 × 2^{x^2}</span>. (b) <span class="chem">2^{x^2}/(2 ln 2) + C</span>.</p>
      solution: "<p>(i) <span class=\"chem\">-3 cosec^2(3x)</span>. (ii) <span class=\"chem\">2/((2x - 1) ln 5)</span>. (iii) <span class=\"chem\">2x ln 2 × 2^{x^2}</span>. (b) <span class=\"chem\">2^{x^2}/(2 ln 2) + C</span>.</p>",
      // EN: <p>(a)(i) <span class="chem">dy/dx = -3 cosec^2(3x)</span>. (ii) <span class="chem">log_5(2x - 1) = ln(2x - 1)/ln 5</span>, so <span class="chem">dy/dx = 2/((2x - 1) ln 5)</span>. (iii) <span class="chem">dy/dx = 2^{x^2} ln 2 × 2x = 2x ln 2 × 2^{x^2}</span>.</p><p>(b) From (iii), <span class="chem">int x 2^{x^2} dx = 2^{x^2}/(2 ln 2) + C</span>.</p>
      answer: "<p>(a)(i) <span class=\"chem\">dy/dx = -3 cosec^2(3x)</span>. (ii) <span class=\"chem\">log_5(2x - 1) = ln(2x - 1)/ln 5</span>이므로 <span class=\"chem\">dy/dx = 2/((2x - 1) ln 5)</span>. (iii) <span class=\"chem\">dy/dx = 2^{x^2} ln 2 × 2x = 2x ln 2 × 2^{x^2}</span>.</p><p>(b) (iii)에서 <span class=\"chem\">int x 2^{x^2} dx = 2^{x^2}/(2 ln 2) + C</span>.</p>",
      markscheme: [
        // EN: M1: uses <span class="chem">d/dx cot u = -cosec^2 u (du/dx)</span>.
        "M1: <span class=\"chem\">d/dx cot u = -cosec^2 u (du/dx)</span>를 이용함.",
        // EN: A1: <span class="chem">-3 cosec^2(3x)</span>.
        "A1: <span class=\"chem\">-3 cosec^2(3x)</span>.",
        // EN: M1: uses <span class="chem">d/dx log_a u = (1/(u ln a))(du/dx)</span> (or the change of base to <span class="chem">ln</span>).
        "M1: <span class=\"chem\">d/dx log_a u = (1/(u ln a))(du/dx)</span> (또는 <span class=\"chem\">ln</span>으로의 밑 변환)를 이용함.",
        // EN: A1: <span class="chem">2/((2x - 1) ln 5)</span>.
        "A1: <span class=\"chem\">2/((2x - 1) ln 5)</span>.",
        // EN: M1: uses <span class="chem">d/dx a^u = a^u ln a (du/dx)</span>.
        "M1: <span class=\"chem\">d/dx a^u = a^u ln a (du/dx)</span>를 이용함.",
        // EN: A1: <span class="chem">2x ln 2 × 2^{x^2}</span>.
        "A1: <span class=\"chem\">2x ln 2 × 2^{x^2}</span>.",
        // EN: M1: reverses (a)(iii), dividing by the constant <span class="chem">2 ln 2</span>.
        "M1: (a)(iii)을 거꾸로 이용하여 상수 <span class=\"chem\">2 ln 2</span>로 나눔.",
        // EN: A1: <span class="chem">2^{x^2}/(2 ln 2) + C</span>.
        "A1: <span class=\"chem\">2^{x^2}/(2 ln 2) + C</span>.",
      ],
    },

    // ── t5-3-q050 · numeric · exam · AHL · AHL 5.13 · 5 marks
    "t5-3-q050": {
      // EN: <p>Find the exact value of <span class="chem">lim_{x->infty} (e^x + 5x^2) / (3e^x - x^3)</span>.</p>
      stem: "<p><span class=\"chem\">lim_{x->infty} (e^x + 5x^2) / (3e^x - x^3)</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: As <span class="chem">x -> infty</span>, both numerator and denominator tend to <span class="chem">infty</span> (the exponential beats the cubic), so L’Hôpital’s rule applies.
        "<span class=\"chem\">x -> infty</span>일 때 분자와 분모가 모두 <span class=\"chem\">infty</span>로 발산하므로 (지수함수가 삼차함수보다 빠르게 커져요) 로피탈의 정리를 쓸 수 있어요.",
        // EN: Differentiate top and bottom repeatedly: <span class="chem">(e^x + 10x)/(3e^x - 3x^2)</span>, then <span class="chem">(e^x + 10)/(3e^x - 6x)</span>, then <span class="chem">e^x/(3e^x - 6)</span>. Check the form each time.
        "분자와 분모를 반복해서 미분하세요: <span class=\"chem\">(e^x + 10x)/(3e^x - 3x^2)</span>, 그다음 <span class=\"chem\">(e^x + 10)/(3e^x - 6x)</span>, 그다음 <span class=\"chem\">e^x/(3e^x - 6)</span>. 매번 꼴을 확인하세요.",
        // EN: Divide the last fraction through by <span class="chem">e^x</span>.
        "마지막 분수의 분자와 분모를 <span class=\"chem\">e^x</span>로 나누세요.",
      ],
      // EN: <p>The form is <span class="chem">infty/infty</span>. Applying L’Hôpital’s rule three times (each time <span class="chem">infty/infty</span>): <span class="chem">lim (e^x + 10x)/(3e^x - 3x^2) = lim (e^x + 10)/(3e^x - 6x) = lim e^x/(3e^x - 6) = lim 1/(3 - 6e^{-x}) = 1/3</span>.</p>
      solution: "<p>꼴은 <span class=\"chem\">infty/infty</span>예요. 로피탈의 정리를 세 번 적용하면 (매번 <span class=\"chem\">infty/infty</span>): <span class=\"chem\">lim (e^x + 10x)/(3e^x - 3x^2) = lim (e^x + 10)/(3e^x - 6x) = lim e^x/(3e^x - 6) = lim 1/(3 - 6e^{-x}) = 1/3</span>.</p>",
    },

    // ── t5-3-q051 · numeric · exam · AHL · AHL 5.13 · 4 marks
    "t5-3-q051": {
      // EN: <p>Find <span class="chem">lim_{x->0} (ln(1 + 2x) - 2x) / x^2</span>.</p>
      stem: "<p><span class=\"chem\">lim_{x->0} (ln(1 + 2x) - 2x) / x^2</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: Substituting <span class="chem">x = 0</span> gives <span class="chem">0/0</span>, so apply L’Hôpital’s rule.
        "<span class=\"chem\">x = 0</span>을 대입하면 <span class=\"chem\">0/0</span>이므로 로피탈의 정리를 적용하세요.",
        // EN: After one step: <span class="chem">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>, still <span class="chem">0/0</span>. Apply the rule again.
        "한 번 적용하면 <span class=\"chem\">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>로, 여전히 <span class=\"chem\">0/0</span>이에요. 정리를 한 번 더 적용하세요.",
      ],
      // EN: <p><span class="chem">0/0</span>: <span class="chem">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>, again <span class="chem">0/0</span>, so <span class="chem">= lim_{x->0} (-4/(1 + 2x)^2)/2 = -4/2 = -2</span>.</p>
      solution: "<p><span class=\"chem\">0/0</span>: <span class=\"chem\">lim_{x->0} (2/(1 + 2x) - 2)/(2x)</span>, 다시 <span class=\"chem\">0/0</span>이므로 <span class=\"chem\">= lim_{x->0} (-4/(1 + 2x)^2)/2 = -4/2 = -2</span>.</p>",
    },

    // ── t5-3-q052 · short · exam · AHL · AHL 5.15 · 6 marks
    "t5-3-q052": {
      // EN: <p>(a) Express <span class="chem">(3x + 7)/((x + 1)(x + 3))</span> in partial fractions. <strong>[3 marks]</strong></p><p>(b) Hence find the exact value of <span class="chem">int_0^2 (3x + 7)/((x + 1)(x + 3)) dx</span>, giving your answer in the form <span class="chem">ln k</span>, where <span class="chem">k \in \mathbb{Z}</span>. <strong>[3 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">(3x + 7)/((x + 1)(x + 3))</span>을 부분분수로 나타내시오 (Express). <strong>[3 marks]</strong></p><p>(b) 이를 이용하여 (Hence) <span class=\"chem\">int_0^2 (3x + 7)/((x + 1)(x + 3)) dx</span>의 정확한 값을 <span class=\"chem\">ln k</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>) 꼴로 구하시오 (find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Write <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span> and choose <span class="chem">x = -1</span> and <span class="chem">x = -3</span>.
        "<span class=\"chem\">3x + 7 = A(x + 3) + B(x + 1)</span>로 쓰고 <span class=\"chem\">x = -1</span>과 <span class=\"chem\">x = -3</span>을 대입하세요.",
        // EN: Each partial fraction integrates to a logarithm. Combine the logarithms at the end.
        "각 부분분수를 적분하면 로그가 돼요. 마지막에 로그를 하나로 합치세요.",
      ],
      // EN: <p>(a) <span class="chem">2/(x + 1) + 1/(x + 3)</span>. (b) <span class="chem">[2 ln(x + 1) + ln(x + 3)]_0^2 = 2 ln 3 + ln 5 - ln 3 = ln 15</span>, so <span class="chem">k = 15</span>.</p>
      solution: "<p>(a) <span class=\"chem\">2/(x + 1) + 1/(x + 3)</span>. (b) <span class=\"chem\">[2 ln(x + 1) + ln(x + 3)]_0^2 = 2 ln 3 + ln 5 - ln 3 = ln 15</span>이므로 <span class=\"chem\">k = 15</span>.</p>",
      // EN: <p>(a) <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span>. <span class="chem">x = -1: 4 = 2A => A = 2</span>; <span class="chem">x = -3: -2 = -2B => B = 1</span>. So the integrand is <span class="chem">2/(x + 1) + 1/(x + 3)</span>.</p><p>(b) <span class="chem">[2 ln(x + 1) + ln(x + 3)]_0^2 = (2 ln 3 + ln 5) - (0 + ln 3) = ln 3 + ln 5 = ln 15</span>.</p>
      answer: "<p>(a) <span class=\"chem\">3x + 7 = A(x + 3) + B(x + 1)</span>. <span class=\"chem\">x = -1: 4 = 2A => A = 2</span>; <span class=\"chem\">x = -3: -2 = -2B => B = 1</span>. 따라서 피적분함수는 <span class=\"chem\">2/(x + 1) + 1/(x + 3)</span>이에요.</p><p>(b) <span class=\"chem\">[2 ln(x + 1) + ln(x + 3)]_0^2 = (2 ln 3 + ln 5) - (0 + ln 3) = ln 3 + ln 5 = ln 15</span>.</p>",
      markscheme: [
        // EN: M1: writes <span class="chem">3x + 7 = A(x + 3) + B(x + 1)</span> (or equivalent).
        "M1: <span class=\"chem\">3x + 7 = A(x + 3) + B(x + 1)</span> (또는 동치인 식)로 씀.",
        // EN: A1: <span class="chem">A = 2</span>.
        "A1: <span class=\"chem\">A = 2</span>.",
        // EN: A1: <span class="chem">B = 1</span>.
        "A1: <span class=\"chem\">B = 1</span>.",
        // EN: A1: integrates to <span class="chem">2 ln(x + 1) + ln(x + 3)</span>.
        "A1: 적분하여 <span class=\"chem\">2 ln(x + 1) + ln(x + 3)</span>을 얻음.",
        // EN: M1: substitutes both limits.
        "M1: 위끝과 아래끝을 모두 대입함.",
        // EN: A1: <span class="chem">ln 15</span>.
        "A1: <span class=\"chem\">ln 15</span>.",
      ],
    },

    // ── t5-3-q053 · numeric · exam · AHL · AHL 5.15, 5.16 · 5 marks
    "t5-3-q053": {
      // EN: <p>Use the substitution <span class="chem">u = e^x</span> to find the exact value of <span class="chem">int_0^{ln sqrt(3)} e^x/(1 + e^{2x}) dx</span>.</p>
      stem: "<p>치환 <span class=\"chem\">u = e^x</span>를 이용하여 <span class=\"chem\">int_0^{ln sqrt(3)} e^x/(1 + e^{2x}) dx</span>의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: With <span class="chem">u = e^x</span>, <span class="chem">du = e^x dx</span> and <span class="chem">e^{2x} = u^2</span>. Change the limits: <span class="chem">x = 0 -> u = 1</span>, <span class="chem">x = ln sqrt(3) -> u = sqrt(3)</span>.
        "<span class=\"chem\">u = e^x</span>로 놓으면 <span class=\"chem\">du = e^x dx</span>이고 <span class=\"chem\">e^{2x} = u^2</span>예요. 적분 구간을 바꾸세요: <span class=\"chem\">x = 0 -> u = 1</span>, <span class=\"chem\">x = ln sqrt(3) -> u = sqrt(3)</span>.",
        // EN: The integral becomes <span class="chem">int_1^{sqrt(3)} 1/(1 + u^2) du</span>, a standard <span class="chem">arctan</span> integral.
        "적분은 <span class=\"chem\">int_1^{sqrt(3)} 1/(1 + u^2) du</span>가 되고, 이는 표준적인 <span class=\"chem\">arctan</span> 적분이에요.",
      ],
      // EN: <p><span class="chem">int_1^{sqrt(3)} 1/(1 + u^2) du = [arctan u]_1^{sqrt(3)} = pi/3 - pi/4 = pi/12</span>.</p>
      solution: "<p><span class=\"chem\">int_1^{sqrt(3)} 1/(1 + u^2) du = [arctan u]_1^{sqrt(3)} = pi/3 - pi/4 = pi/12</span>.</p>",
    },

    // ── t5-3-q054 · numeric · challenge · AHL · AHL 5.16, 5.17 · 7 marks
    "t5-3-q054": {
      // EN: <p>A solid ornament is made by rotating the part of the curve <span class="chem">y = x e^{x/2}</span> between <span class="chem">x = 0</span> and <span class="chem">x = 1</span> through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the exact volume of the ornament.</p>
      stem: "<p>속이 꽉 찬 장식품은 곡선 <span class=\"chem\">y = x e^{x/2}</span>의 <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 1</span> 사이 부분을 <i>x</i>축 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시켜 만들어요. 장식품의 정확한 부피를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: this is a volume of revolution about the <i>x</i>-axis, <span class="chem">V = pi int_0^1 y^2 dx</span>. Squaring <i>y</i> gives <span class="chem">x^2 e^x</span>, which needs integration by parts <strong>twice</strong>.
        "해석: <i>x</i>축 둘레의 회전체의 부피 <span class=\"chem\">V = pi int_0^1 y^2 dx</span>입니다. <i>y</i>를 제곱하면 <span class=\"chem\">x^2 e^x</span>가 되어 부분적분을 <strong>두 번</strong> 해야 해요.",
        // EN: First parts: <span class="chem">u = x^2</span>, <span class="chem">dv/dx = e^x</span>: <span class="chem">int x^2 e^x dx = x^2 e^x - int 2x e^x dx</span>.
        "첫 번째 부분적분: <span class=\"chem\">u = x^2</span>, <span class=\"chem\">dv/dx = e^x</span>: <span class=\"chem\">int x^2 e^x dx = x^2 e^x - int 2x e^x dx</span>.",
        // EN: Second parts on <span class="chem">int 2x e^x dx</span> gives <span class="chem">2x e^x - 2e^x</span>, so <span class="chem">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>.
        "<span class=\"chem\">int 2x e^x dx</span>에 두 번째 부분적분을 하면 <span class=\"chem\">2x e^x - 2e^x</span>이므로 <span class=\"chem\">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>예요.",
      ],
      // EN: <p>Decode: volume about the <i>x</i>-axis, so square <i>y</i>: <span class="chem">y^2 = x^2 e^x</span>, then repeated parts. <span class="chem">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>. So <span class="chem">V = pi [e^x(x^2 - 2x + 2)]_0^1 = pi(e - 2)</span>.</p>
      solution: "<p>해석: <i>x</i>축 둘레의 부피이므로 <i>y</i>를 제곱해요: <span class=\"chem\">y^2 = x^2 e^x</span>. 그다음 부분적분을 반복해요. <span class=\"chem\">int x^2 e^x dx = e^x(x^2 - 2x + 2) + C</span>. 따라서 <span class=\"chem\">V = pi [e^x(x^2 - 2x + 2)]_0^1 = pi(e - 2)</span>예요.</p>",
    },

    // ── t5-3-q055 · short · challenge · AHL · AHL 5.12 · 9 marks
    "t5-3-q055": {
      // EN: <p>The function <i>f</i> is defined by</p><p><span class="chem">f(x) = a x^2 + b x</span> for <span class="chem">x &lt;= 2</span>, and <span class="chem">f(x) = ln(x - 1) + 3</span> for <span class="chem">x &gt; 2</span>,</p><p>where <i>a</i> and <i>b</i> are constants. The graph of <i>f</i> has no break and no corner at <span class="chem">x = 2</span>.</p><p>(a) Find the value of <i>a</i> and the value of <i>b</i>. <strong>[6 marks]</strong></p><p>(b) Determine whether <span class="chem">f''(2)</span> exists. Justify your answer. <strong>[3 marks]</strong></p>
      stem: "<p>함수 <i>f</i>는 다음과 같이 정의돼요.</p><p><span class=\"chem\">x &lt;= 2</span>일 때 <span class=\"chem\">f(x) = a x^2 + b x</span>, <span class=\"chem\">x &gt; 2</span>일 때 <span class=\"chem\">f(x) = ln(x - 1) + 3</span></p><p>(<i>a</i>, <i>b</i>는 상수). <i>f</i>의 그래프는 <span class=\"chem\">x = 2</span>에서 끊어지지 않고 꺾이지도 않아요.</p><p>(a) <i>a</i>의 값과 <i>b</i>의 값을 구하시오 (Find). <strong>[6 marks]</strong></p><p>(b) <span class=\"chem\">f''(2)</span>가 존재하는지 결정하고 (Determine), 근거를 들어 설명하시오 (Justify). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: "no break" is the condition for continuity and "no corner" is the condition for differentiability at <span class="chem">x = 2</span>. Each gives one equation in <i>a</i> and <i>b</i>. Part (b) asks the same question about <span class="chem">f'</span>.
        "해석: \"끊어지지 않음\"은 <span class=\"chem\">x = 2</span>에서 연속일 조건이고, \"꺾이지 않음\"은 미분가능할 조건입니다. 각 조건에서 <i>a</i>와 <i>b</i>에 대한 방정식이 하나씩 나와요. (b)는 같은 질문을 <span class=\"chem\">f'</span>에 대해 묻고 있어요.",
        // EN: Continuity: <span class="chem">a(2)^2 + 2b = ln(1) + 3</span>.
        "연속성: <span class=\"chem\">a(2)^2 + 2b = ln(1) + 3</span>.",
        // EN: Differentiability: <span class="chem">2a(2) + b</span> must equal the derivative of <span class="chem">ln(x - 1) + 3</span> at <span class="chem">x = 2</span>.
        "미분가능성: <span class=\"chem\">2a(2) + b</span>는 <span class=\"chem\">x = 2</span>에서 <span class=\"chem\">ln(x - 1) + 3</span>의 미분계수와 같아야 해요.",
        // EN: For (b), compare <span class="chem">f''</span> just to the left and just to the right of <span class="chem">x = 2</span>.
        "(b)에서는 <span class=\"chem\">x = 2</span>의 바로 왼쪽과 바로 오른쪽에서 <span class=\"chem\">f''</span>를 비교하세요.",
      ],
      // EN: <p>Decode: no break = continuous, no corner = differentiable; (b) tests whether <span class="chem">f'</span> is itself differentiable. (a) <span class="chem">4a + 2b = 3</span> and <span class="chem">4a + b = 1</span> give <span class="chem">b = 2</span>, <span class="chem">a = -1/4</span>. (b) <span class="chem">f''</span> is <span class="chem">-1/2</span> on the left and tends to <span class="chem">-1</span> on the right, so <span class="chem">f''(2)</span> does not exist.</p>
      solution: "<p>해석: 끊어지지 않음 = 연속, 꺾이지 않음 = 미분가능; (b)는 <span class=\"chem\">f'</span> 자체가 미분가능한지를 확인해요. (a) <span class=\"chem\">4a + 2b = 3</span>과 <span class=\"chem\">4a + b = 1</span>에서 <span class=\"chem\">b = 2</span>, <span class=\"chem\">a = -1/4</span>. (b) <span class=\"chem\">f''</span>는 왼쪽에서 <span class=\"chem\">-1/2</span>이고 오른쪽에서는 <span class=\"chem\">-1</span>에 가까워지므로 <span class=\"chem\">f''(2)</span>는 존재하지 않아요.</p>",
      // EN: <p>(a) No break means continuous: <span class="chem">4a + 2b = ln 1 + 3 = 3</span>. No corner means differentiable: <span class="chem">2a(2) + b = 1/(2 - 1)</span>, so <span class="chem">4a + b = 1</span>. Subtracting: <span class="chem">b = 2</span>, then <span class="chem">a = -1/4</span>.</p><p>(b) For <span class="chem">x &lt; 2</span>, <span class="chem">f''(x) = 2a = -1/2</span>. For <span class="chem">x &gt; 2</span>, <span class="chem">f''(x) = -1/(x - 1)^2 -> -1</span> as <span class="chem">x -> 2^+</span>. The two values differ, so <span class="chem">f'</span> is not differentiable at <span class="chem">x = 2</span> and <span class="chem">f''(2)</span> does not exist.</p>
      answer: "<p>(a) 끊어지지 않음은 연속을 뜻해요: <span class=\"chem\">4a + 2b = ln 1 + 3 = 3</span>. 꺾이지 않음은 미분가능을 뜻해요: <span class=\"chem\">2a(2) + b = 1/(2 - 1)</span>이므로 <span class=\"chem\">4a + b = 1</span>. 두 식을 빼면 <span class=\"chem\">b = 2</span>, 따라서 <span class=\"chem\">a = -1/4</span>.</p><p>(b) <span class=\"chem\">x &lt; 2</span>에서 <span class=\"chem\">f''(x) = 2a = -1/2</span>. <span class=\"chem\">x &gt; 2</span>에서는 <span class=\"chem\">x -> 2^+</span>일 때 <span class=\"chem\">f''(x) = -1/(x - 1)^2 -> -1</span>. 두 값이 다르므로 <span class=\"chem\">f'</span>는 <span class=\"chem\">x = 2</span>에서 미분가능하지 않고 <span class=\"chem\">f''(2)</span>는 존재하지 않아요.</p>",
      markscheme: [
        // EN: M1: equates the two pieces at <span class="chem">x = 2</span> (continuity).
        "M1: <span class=\"chem\">x = 2</span>에서 두 식의 값을 같게 놓음 (연속성).",
        // EN: A1: <span class="chem">4a + 2b = 3</span>.
        "A1: <span class=\"chem\">4a + 2b = 3</span>.",
        // EN: M1: equates the two derivatives at <span class="chem">x = 2</span> (differentiability).
        "M1: <span class=\"chem\">x = 2</span>에서 두 도함수의 값을 같게 놓음 (미분가능성).",
        // EN: A1: <span class="chem">4a + b = 1</span>.
        "A1: <span class=\"chem\">4a + b = 1</span>.",
        // EN: A1: <span class="chem">b = 2</span>.
        "A1: <span class=\"chem\">b = 2</span>.",
        // EN: A1: <span class="chem">a = -1/4</span>.
        "A1: <span class=\"chem\">a = -1/4</span>.",
        // EN: M1: finds <span class="chem">f''</span> on both sides of <span class="chem">x = 2</span>.
        "M1: <span class=\"chem\">x = 2</span>의 양쪽에서 <span class=\"chem\">f''</span>를 구함.",
        // EN: A1: left value <span class="chem">-1/2</span> and right limit <span class="chem">-1</span>.
        "A1: 왼쪽의 값 <span class=\"chem\">-1/2</span>와 오른쪽의 극한 <span class=\"chem\">-1</span>.",
        // EN: R1: they are not equal, so <span class="chem">f''(2)</span> does not exist.
        "R1: 두 값이 같지 않으므로 <span class=\"chem\">f''(2)</span>는 존재하지 않음.",
      ],
    },

    // ── t5-3-q056 · short · challenge · AHL · AHL 5.16, 5.17 · 20 marks
    "t5-3-q056": {
      // EN: <p>This question investigates the integrals <span class="chem">I_n = int_0^{pi/2} sin^n x dx</span>, for integers <span class="chem">n &gt;= 0</span>.</p><p>(a) Write down the value of <span class="chem">I_0</span> and find the value of <span class="chem">I_1</span>. <strong>[2 marks]</strong></p><p>(b) By writing <span class="chem">sin^n x = sin^{n-1} x × sin x</span> and integrating by parts, show that <span class="chem">n I_n = (n - 1) I_{n-2}</span> for <span class="chem">n &gt;= 2</span>. <strong>[5 marks]</strong></p><p>(c) Hence find the exact values of <span class="chem">I_2</span>, <span class="chem">I_3</span>, <span class="chem">I_4</span> and <span class="chem">I_5</span>. <strong>[3 marks]</strong></p><p>(d) Use your GDC to verify your value of <span class="chem">I_4</span>. <strong>[1 mark]</strong></p><p>(e) Conjecture an expression for <span class="chem">I_{2k}</span>, <span class="chem">k &gt;= 1</span>, as a product of fractions multiplied by <span class="chem">pi/2</span>. <strong>[2 marks]</strong></p><p>(f) Show that <span class="chem">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>, and hence prove that <span class="chem">I_n I_{n-1} = pi/(2n)</span> for all <span class="chem">n &gt;= 1</span>. <strong>[5 marks]</strong></p><p>(g) The curve <span class="chem">y = sin^2 x</span>, <span class="chem">0 &lt;= x &lt;= pi/2</span>, is rotated through <span class="chem">2pi</span> radians about the <i>x</i>-axis. Find the exact volume of the solid formed. <strong>[2 marks]</strong></p>
      stem: "<p>이 문제에서는 정수 <span class=\"chem\">n &gt;= 0</span>에 대하여 적분 <span class=\"chem\">I_n = int_0^{pi/2} sin^n x dx</span>를 탐구해요.</p><p>(a) <span class=\"chem\">I_0</span>의 값을 쓰고 (Write down) <span class=\"chem\">I_1</span>의 값을 구하시오 (find). <strong>[2 marks]</strong></p><p>(b) <span class=\"chem\">sin^n x = sin^{n-1} x × sin x</span>로 쓰고 부분적분을 하여, <span class=\"chem\">n &gt;= 2</span>일 때 <span class=\"chem\">n I_n = (n - 1) I_{n-2}</span>임을 보이시오 (Show that). <strong>[5 marks]</strong></p><p>(c) 이를 이용하여 (Hence) <span class=\"chem\">I_2</span>, <span class=\"chem\">I_3</span>, <span class=\"chem\">I_4</span>, <span class=\"chem\">I_5</span>의 정확한 값을 구하시오 (find). <strong>[3 marks]</strong></p><p>(d) GDC를 이용하여 구한 <span class=\"chem\">I_4</span>의 값을 확인하시오 (Verify). <strong>[1 mark]</strong></p><p>(e) <span class=\"chem\">I_{2k}</span> (<span class=\"chem\">k &gt;= 1</span>)를 분수들의 곱에 <span class=\"chem\">pi/2</span>를 곱한 꼴로 나타내는 식을 추측하시오 (Conjecture). <strong>[2 marks]</strong></p><p>(f) <span class=\"chem\">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>임을 보이고 (Show that), 이를 이용하여 (hence) 모든 <span class=\"chem\">n &gt;= 1</span>에 대하여 <span class=\"chem\">I_n I_{n-1} = pi/(2n)</span>임을 증명하시오 (prove). <strong>[5 marks]</strong></p><p>(g) 곡선 <span class=\"chem\">y = sin^2 x</span>, <span class=\"chem\">0 &lt;= x &lt;= pi/2</span>를 <i>x</i>축 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시켜요. 이때 생기는 입체의 정확한 부피를 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: this is a reduction formula. Part (b) links each integral to the one two steps below, so you climb from <span class="chem">I_0</span> (even <i>n</i>) and <span class="chem">I_1</span> (odd <i>n</i>). Part (g) is a disguised <span class="chem">I_4</span>.
        "해석: 점화식 문제입니다. (b)는 각 적분을 두 단계 아래의 적분과 연결하므로, <span class=\"chem\">I_0</span> (짝수 <i>n</i>)과 <span class=\"chem\">I_1</span> (홀수 <i>n</i>)에서부터 차례로 올라가요. (g)는 모양을 바꾼 <span class=\"chem\">I_4</span>예요.",
        // EN: In (b), the boundary term <span class="chem">[-sin^{n-1} x cos x]_0^{pi/2}</span> vanishes: <span class="chem">cos(pi/2) = 0</span> and <span class="chem">sin 0 = 0</span>. Then use <span class="chem">cos^2 x = 1 - sin^2 x</span> and collect the two <span class="chem">I_n</span> terms.
        "(b)에서 경계항 <span class=\"chem\">[-sin^{n-1} x cos x]_0^{pi/2}</span>는 0이 돼요: <span class=\"chem\">cos(pi/2) = 0</span>이고 <span class=\"chem\">sin 0 = 0</span>. 그다음 <span class=\"chem\">cos^2 x = 1 - sin^2 x</span>를 이용하고 두 <span class=\"chem\">I_n</span> 항을 묶으세요.",
        // EN: In (c), use <span class="chem">I_n = ((n - 1)/n) I_{n-2}</span>: even <i>n</i> start from <span class="chem">pi/2</span>, odd <i>n</i> from 1.
        "(c)에서는 <span class=\"chem\">I_n = ((n - 1)/n) I_{n-2}</span>를 이용하세요: 짝수 <i>n</i>은 <span class=\"chem\">pi/2</span>에서, 홀수 <i>n</i>은 1에서 시작해요.",
        // EN: In (f), if <span class="chem">a_n = n I_n I_{n-1}</span>, the result says <span class="chem">a_n = a_{n-1}</span>, so every <span class="chem">a_n</span> equals <span class="chem">a_1</span>.
        "(f)에서 <span class=\"chem\">a_n = n I_n I_{n-1}</span>로 놓으면 그 결과는 <span class=\"chem\">a_n = a_{n-1}</span>을 뜻하므로, 모든 <span class=\"chem\">a_n</span>은 <span class=\"chem\">a_1</span>과 같아요.",
        // EN: In (g), <span class="chem">y^2 = sin^4 x</span>.
        "(g)에서는 <span class=\"chem\">y^2 = sin^4 x</span>예요.",
      ],
      // EN: <p>Decode: build a reduction formula by parts, generate small cases, spot the pattern, then use the formula to find a constant product and a volume. (a) <span class="chem">pi/2</span>, <span class="chem">1</span>. (c) <span class="chem">pi/4, 2/3, 3pi/16, 8/15</span>. (e) <span class="chem">I_{2k} = ((2k - 1)/(2k)) × … × (3/4)(1/2)(pi/2)</span>. (f) <span class="chem">n I_n I_{n-1} = pi/2</span> for all <i>n</i>. (g) <span class="chem">V = 3pi^2/16</span>.</p>
      solution: "<p>해석: 부분적분으로 점화식을 만들고, 작은 경우를 계산해 규칙을 찾은 다음, 그 식을 이용해 일정한 곱과 부피를 구해요. (a) <span class=\"chem\">pi/2</span>, <span class=\"chem\">1</span>. (c) <span class=\"chem\">pi/4, 2/3, 3pi/16, 8/15</span>. (e) <span class=\"chem\">I_{2k} = ((2k - 1)/(2k)) × … × (3/4)(1/2)(pi/2)</span>. (f) 모든 <i>n</i>에 대하여 <span class=\"chem\">n I_n I_{n-1} = pi/2</span>. (g) <span class=\"chem\">V = 3pi^2/16</span>.</p>",
      // EN: <p>(a) <span class="chem">I_0 = pi/2</span>; <span class="chem">I_1 = [-cos x]_0^{pi/2} = 1</span>.</p><p>(b) <span class="chem">u = sin^{n-1} x</span>, <span class="chem">dv/dx = sin x</span>, so <span class="chem">du/dx = (n - 1) sin^{n-2} x cos x</span> and <span class="chem">v = -cos x</span>. Then <span class="chem">I_n = [-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int_0^{pi/2} sin^{n-2} x cos^2 x dx</span>. The boundary term is <span class="chem">0</span> at both limits (for <span class="chem">n &gt;= 2</span>). With <span class="chem">cos^2 x = 1 - sin^2 x</span>: <span class="chem">I_n = (n - 1)(I_{n-2} - I_n)</span>, so <span class="chem">n I_n = (n - 1) I_{n-2}</span>.</p><p>(c) <span class="chem">I_2 = (1/2)(pi/2) = pi/4</span>, <span class="chem">I_3 = (2/3)(1) = 2/3</span>, <span class="chem">I_4 = (3/4)(pi/4) = 3pi/16</span>, <span class="chem">I_5 = (4/5)(2/3) = 8/15</span>.</p><p>(d) GDC: <span class="chem">int_0^{pi/2} sin^4 x dx = 0.589048… = 3pi/16</span>.</p><p>(e) <span class="chem">I_{2k} = (1/2)(3/4)(5/6)…((2k - 1)/(2k)) × pi/2</span>.</p><p>(f) Multiply <span class="chem">n I_n = (n - 1) I_{n-2}</span> by <span class="chem">I_{n-1}</span>. So <span class="chem">n I_n I_{n-1}</span> takes the same value for every <span class="chem">n &gt;= 1</span>, equal to its value at <span class="chem">n = 1</span>: <span class="chem">1 × I_1 I_0 = pi/2</span>. Hence <span class="chem">I_n I_{n-1} = pi/(2n)</span>.</p><p>(g) <span class="chem">V = pi int_0^{pi/2} sin^4 x dx = pi I_4 = 3pi^2/16</span>.</p>
      answer: "<p>(a) <span class=\"chem\">I_0 = pi/2</span>; <span class=\"chem\">I_1 = [-cos x]_0^{pi/2} = 1</span>.</p><p>(b) <span class=\"chem\">u = sin^{n-1} x</span>, <span class=\"chem\">dv/dx = sin x</span>로 놓으면 <span class=\"chem\">du/dx = (n - 1) sin^{n-2} x cos x</span>이고 <span class=\"chem\">v = -cos x</span>예요. 그러면 <span class=\"chem\">I_n = [-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int_0^{pi/2} sin^{n-2} x cos^2 x dx</span>. 경계항은 양 끝에서 <span class=\"chem\">0</span>이에요 (<span class=\"chem\">n &gt;= 2</span>일 때). <span class=\"chem\">cos^2 x = 1 - sin^2 x</span>를 이용하면: <span class=\"chem\">I_n = (n - 1)(I_{n-2} - I_n)</span>이므로 <span class=\"chem\">n I_n = (n - 1) I_{n-2}</span>.</p><p>(c) <span class=\"chem\">I_2 = (1/2)(pi/2) = pi/4</span>, <span class=\"chem\">I_3 = (2/3)(1) = 2/3</span>, <span class=\"chem\">I_4 = (3/4)(pi/4) = 3pi/16</span>, <span class=\"chem\">I_5 = (4/5)(2/3) = 8/15</span>.</p><p>(d) GDC: <span class=\"chem\">int_0^{pi/2} sin^4 x dx = 0.589048… = 3pi/16</span>.</p><p>(e) <span class=\"chem\">I_{2k} = (1/2)(3/4)(5/6)…((2k - 1)/(2k)) × pi/2</span>.</p><p>(f) <span class=\"chem\">n I_n = (n - 1) I_{n-2}</span>에 <span class=\"chem\">I_{n-1}</span>을 곱해요. 따라서 <span class=\"chem\">n I_n I_{n-1}</span>은 모든 <span class=\"chem\">n &gt;= 1</span>에서 같은 값을 가지며, 그 값은 <span class=\"chem\">n = 1</span>일 때의 값 <span class=\"chem\">1 × I_1 I_0 = pi/2</span>와 같아요. 그러므로 <span class=\"chem\">I_n I_{n-1} = pi/(2n)</span>.</p><p>(g) <span class=\"chem\">V = pi int_0^{pi/2} sin^4 x dx = pi I_4 = 3pi^2/16</span>.</p>",
      markscheme: [
        // EN: A1: <span class="chem">I_0 = pi/2</span>.
        "A1: <span class=\"chem\">I_0 = pi/2</span>.",
        // EN: A1: <span class="chem">I_1 = 1</span>.
        "A1: <span class=\"chem\">I_1 = 1</span>.",
        // EN: M1: parts with <span class="chem">u = sin^{n-1} x</span> and <span class="chem">dv/dx = sin x</span>.
        "M1: <span class=\"chem\">u = sin^{n-1} x</span>, <span class=\"chem\">dv/dx = sin x</span>로 부분적분을 함.",
        // EN: A1: <span class="chem">du/dx = (n - 1) sin^{n-2} x cos x</span> and <span class="chem">v = -cos x</span>, giving <span class="chem">[-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int sin^{n-2} x cos^2 x dx</span>.
        "A1: <span class=\"chem\">du/dx = (n - 1) sin^{n-2} x cos x</span>와 <span class=\"chem\">v = -cos x</span>로 <span class=\"chem\">[-sin^{n-1} x cos x]_0^{pi/2} + (n - 1) int sin^{n-2} x cos^2 x dx</span>를 얻음.",
        // EN: R1: the boundary term is zero at both limits.
        "R1: 경계항이 양 끝에서 0임.",
        // EN: M1: replaces <span class="chem">cos^2 x</span> by <span class="chem">1 - sin^2 x</span>.
        "M1: <span class=\"chem\">cos^2 x</span>를 <span class=\"chem\">1 - sin^2 x</span>로 바꿈.",
        // EN: A1: <span class="chem">I_n = (n - 1) I_{n-2} - (n - 1) I_n</span>, leading to <span class="chem">n I_n = (n - 1) I_{n-2}</span> AG (no mark for the given line).
        "A1: <span class=\"chem\">I_n = (n - 1) I_{n-2} - (n - 1) I_n</span>을 얻고, <span class=\"chem\">n I_n = (n - 1) I_{n-2}</span>로 이어짐 AG (주어진 식 자체에는 점수 없음).",
        // EN: A1: <span class="chem">I_2 = pi/4</span>.
        "A1: <span class=\"chem\">I_2 = pi/4</span>.",
        // EN: A1: <span class="chem">I_3 = 2/3</span> and <span class="chem">I_4 = 3pi/16</span>.
        "A1: <span class=\"chem\">I_3 = 2/3</span>과 <span class=\"chem\">I_4 = 3pi/16</span>.",
        // EN: A1: <span class="chem">I_5 = 8/15</span>.
        "A1: <span class=\"chem\">I_5 = 8/15</span>.",
        // EN: A1: GDC value <span class="chem">0.589</span> agrees with <span class="chem">3pi/16</span>.
        "A1: GDC 값 <span class=\"chem\">0.589</span>가 <span class=\"chem\">3pi/16</span>과 일치함.",
        // EN: M1: recognises the pattern of odd over even fractions.
        "M1: 홀수/짝수 분수가 이어지는 규칙을 알아냄.",
        // EN: A1: <span class="chem">I_{2k} = (1 × 3 × … × (2k - 1))/(2 × 4 × … × 2k) × pi/2</span>.
        "A1: <span class=\"chem\">I_{2k} = (1 × 3 × … × (2k - 1))/(2 × 4 × … × 2k) × pi/2</span>.",
        // EN: M1: multiplies the reduction formula by <span class="chem">I_{n-1}</span>.
        "M1: 점화식에 <span class=\"chem\">I_{n-1}</span>을 곱함.",
        // EN: A1: obtains <span class="chem">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>.
        "A1: <span class=\"chem\">n I_n I_{n-1} = (n - 1) I_{n-1} I_{n-2}</span>를 얻음.",
        // EN: R1: deduces that <span class="chem">n I_n I_{n-1}</span> is the same for every <span class="chem">n</span>.
        "R1: <span class=\"chem\">n I_n I_{n-1}</span>이 모든 <span class=\"chem\">n</span>에서 같다고 추론함.",
        // EN: M1: evaluates the constant at <span class="chem">n = 1</span>: <span class="chem">I_1 I_0 = pi/2</span>.
        "M1: <span class=\"chem\">n = 1</span>에서 상수의 값을 구함: <span class=\"chem\">I_1 I_0 = pi/2</span>.",
        // EN: A1: concludes <span class="chem">I_n I_{n-1} = pi/(2n)</span>.
        "A1: <span class=\"chem\">I_n I_{n-1} = pi/(2n)</span>이라고 결론 내림.",
        // EN: M1: <span class="chem">V = pi int_0^{pi/2} (sin^2 x)^2 dx = pi I_4</span>.
        "M1: <span class=\"chem\">V = pi int_0^{pi/2} (sin^2 x)^2 dx = pi I_4</span>.",
        // EN: A1: <span class="chem">V = 3pi^2/16</span>.
        "A1: <span class=\"chem\">V = 3pi^2/16</span>.",
      ],
    },

    // ── t5-3-q057 · short · challenge · AHL · AHL 5.17, 5.13 · 19 marks
    "t5-3-q057": {
      // EN: <p>For <span class="chem">n &gt; 0</span>, let <span class="chem">R_n</span> be the region bounded by the curve <span class="chem">y = x^n</span>, the <i>x</i>-axis and the line <span class="chem">x = 1</span>. Let <span class="chem">A(n)</span> be the volume formed when <span class="chem">R_n</span> is rotated through <span class="chem">2pi</span> about the <i>x</i>-axis, and <span class="chem">B(n)</span> the volume formed when <span class="chem">R_n</span> is rotated through <span class="chem">2pi</span> about the <i>y</i>-axis.</p><p>(a) For <span class="chem">n = 1</span>, describe each solid and write down <span class="chem">A(1)</span> and <span class="chem">B(1)</span>. <strong>[3 marks]</strong></p><p>(b) Show that <span class="chem">A(n) = pi/(2n + 1)</span>. <strong>[2 marks]</strong></p><p>(c) By first finding the volume formed when the region between <span class="chem">y = x^n</span>, the <i>y</i>-axis and the line <span class="chem">y = 1</span> is rotated about the <i>y</i>-axis, show that <span class="chem">B(n) = 2pi/(n + 2)</span>. <strong>[5 marks]</strong></p><p>(d) Use your GDC to sketch <span class="chem">A(n)</span> and <span class="chem">B(n)</span> for <span class="chem">0 &lt; n &lt;= 5</span>, and hence conjecture which of <span class="chem">A(n)</span> and <span class="chem">B(n)</span> is larger. Prove your conjecture. <strong>[4 marks]</strong></p><p>(e) Find <span class="chem">lim_{n->infty} B(n)/A(n)</span>. <strong>[2 marks]</strong></p><p>(f) Find the value of <i>n</i> for which <span class="chem">B(n) - A(n)</span> is greatest, and state this greatest value. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">n &gt; 0</span>에 대하여 곡선 <span class=\"chem\">y = x^n</span>, <i>x</i>축, 직선 <span class=\"chem\">x = 1</span>로 둘러싸인 영역을 <span class=\"chem\">R_n</span>이라 하자. <span class=\"chem\">R_n</span>을 <i>x</i>축 둘레로 <span class=\"chem\">2pi</span> 회전시켜 생기는 입체의 부피를 <span class=\"chem\">A(n)</span>, <span class=\"chem\">R_n</span>을 <i>y</i>축 둘레로 <span class=\"chem\">2pi</span> 회전시켜 생기는 입체의 부피를 <span class=\"chem\">B(n)</span>이라 하자.</p><p>(a) <span class=\"chem\">n = 1</span>일 때 각 입체를 설명하고, <span class=\"chem\">A(1)</span>과 <span class=\"chem\">B(1)</span>을 쓰시오 (write down). <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">A(n) = pi/(2n + 1)</span>임을 보이시오 (Show that). <strong>[2 marks]</strong></p><p>(c) 먼저 <span class=\"chem\">y = x^n</span>, <i>y</i>축, 직선 <span class=\"chem\">y = 1</span> 사이의 영역을 <i>y</i>축 둘레로 회전시켜 생기는 부피를 구하여, <span class=\"chem\">B(n) = 2pi/(n + 2)</span>임을 보이시오 (show that). <strong>[5 marks]</strong></p><p>(d) GDC를 이용하여 <span class=\"chem\">0 &lt; n &lt;= 5</span>에서 <span class=\"chem\">A(n)</span>과 <span class=\"chem\">B(n)</span>의 그래프를 개략적으로 그리고 (sketch), 이를 이용하여 <span class=\"chem\">A(n)</span>과 <span class=\"chem\">B(n)</span> 중 어느 것이 더 큰지 추측하시오 (hence conjecture). 그 추측을 증명하시오 (Prove). <strong>[4 marks]</strong></p><p>(e) <span class=\"chem\">lim_{n->infty} B(n)/A(n)</span>을 구하시오 (Find). <strong>[2 marks]</strong></p><p>(f) <span class=\"chem\">B(n) - A(n)</span>이 최대가 되는 <i>n</i>의 값을 구하고 (Find), 그 최댓값을 답하시오 (state). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: a whole family of solids depends on one parameter <i>n</i>. Work out small cases, find general formulas, then compare the two formulas and study them as functions of <i>n</i>.
        "해석: 입체들의 족 전체가 하나의 매개변수 <i>n</i>에 따라 달라집니다. 작은 경우를 계산하고, 일반 공식을 찾고, 두 공식을 비교한 다음, 이를 <i>n</i>의 함수로 탐구하세요.",
        // EN: For (c), the region <span class="chem">R_n</span> rotated about the <i>y</i>-axis is a cylinder of radius 1 and height 1 with the solid from the region next to the <i>y</i>-axis removed.
        "(c)에서 영역 <span class=\"chem\">R_n</span>을 <i>y</i>축 둘레로 회전시킨 입체는 반지름 1, 높이 1인 원기둥에서 <i>y</i>축 쪽 영역이 만드는 입체를 뺀 것이에요.",
        // EN: Use <span class="chem">x^2 = y^{2/n}</span>, and simplify <span class="chem">1/(2/n + 1) = n/(n + 2)</span>.
        "<span class=\"chem\">x^2 = y^{2/n}</span>을 이용하고, <span class=\"chem\">1/(2/n + 1) = n/(n + 2)</span>로 간단히 하세요.",
        // EN: For (d), both denominators are positive, so you may cross-multiply. For (e), divide top and bottom by <i>n</i> (or use L’Hôpital’s rule). For (f), solve <span class="chem">(n + 2)^2 = (2n + 1)^2</span> with <span class="chem">n &gt; 0</span>.
        "(d)에서는 두 분모가 모두 양수이므로 양변에 분모를 곱할 수 있어요. (e)에서는 분자와 분모를 <i>n</i>으로 나누세요 (또는 로피탈의 정리를 쓰세요). (f)에서는 <span class=\"chem\">n &gt; 0</span>에서 <span class=\"chem\">(n + 2)^2 = (2n + 1)^2</span>을 푸세요.",
      ],
      // EN: <p>Decode: two volume formulas depend on the parameter <i>n</i>; compare them, then treat their difference as a function to optimise. <span class="chem">A(n) = pi/(2n + 1)</span>, <span class="chem">B(n) = 2pi/(n + 2)</span>, <span class="chem">B &gt; A</span> for all <span class="chem">n &gt; 0</span>, <span class="chem">B/A -> 4</span>, and <span class="chem">B - A</span> is greatest (<span class="chem">pi/3</span>) at <span class="chem">n = 1</span>.</p>
      solution: "<p>해석: 두 부피 공식이 매개변수 <i>n</i>에 따라 달라져요. 둘을 비교한 다음, 그 차를 최대화할 함수로 다뤄요. <span class=\"chem\">A(n) = pi/(2n + 1)</span>, <span class=\"chem\">B(n) = 2pi/(n + 2)</span>, 모든 <span class=\"chem\">n &gt; 0</span>에서 <span class=\"chem\">B &gt; A</span>, <span class=\"chem\">B/A -> 4</span>, 그리고 <span class=\"chem\">B - A</span>는 <span class=\"chem\">n = 1</span>에서 최대 (<span class=\"chem\">pi/3</span>)예요.</p>",
      // EN: <p>(a) For <span class="chem">n = 1</span>, about the <i>x</i>-axis the solid is a cone of radius 1 and height 1: <span class="chem">A(1) = pi/3</span>. About the <i>y</i>-axis it is a cylinder of radius 1, height 1 with a cone removed: <span class="chem">B(1) = pi - pi/3 = 2pi/3</span>.</p><p>(b) <span class="chem">A(n) = pi int_0^1 x^{2n} dx = pi/(2n + 1)</span>.</p><p>(c) With <span class="chem">x = y^{1/n}</span>, the region next to the <i>y</i>-axis gives <span class="chem">pi int_0^1 y^{2/n} dy = pi/(2/n + 1) = pi n/(n + 2)</span>. <span class="chem">R_n</span> about the <i>y</i>-axis is the cylinder (volume <span class="chem">pi</span>) minus this: <span class="chem">B(n) = pi - pi n/(n + 2) = 2pi/(n + 2)</span>.</p><p>(d) The graphs suggest <span class="chem">B(n) &gt; A(n)</span> for all <span class="chem">n &gt; 0</span>. Proof: <span class="chem">2/(n + 2) &gt; 1/(2n + 1) <=> 4n + 2 &gt; n + 2 <=> 3n &gt; 0</span>, true for <span class="chem">n &gt; 0</span> (both denominators are positive).</p><p>(e) <span class="chem">B(n)/A(n) = 2(2n + 1)/(n + 2) -> 4</span>.</p><p>(f) <span class="chem">D(n) = 2pi/(n + 2) - pi/(2n + 1)</span>; <span class="chem">D'(n) = -2pi/(n + 2)^2 + 2pi/(2n + 1)^2 = 0 => n + 2 = 2n + 1 => n = 1</span>. Greatest value <span class="chem">D(1) = 2pi/3 - pi/3 = pi/3</span>.</p>
      answer: "<p>(a) <span class=\"chem\">n = 1</span>일 때 <i>x</i>축 둘레의 입체는 반지름 1, 높이 1인 원뿔이에요: <span class=\"chem\">A(1) = pi/3</span>. <i>y</i>축 둘레의 입체는 반지름 1, 높이 1인 원기둥에서 원뿔을 뺀 것이에요: <span class=\"chem\">B(1) = pi - pi/3 = 2pi/3</span>.</p><p>(b) <span class=\"chem\">A(n) = pi int_0^1 x^{2n} dx = pi/(2n + 1)</span>.</p><p>(c) <span class=\"chem\">x = y^{1/n}</span>이므로 <i>y</i>축 쪽 영역에서 <span class=\"chem\">pi int_0^1 y^{2/n} dy = pi/(2/n + 1) = pi n/(n + 2)</span>. <span class=\"chem\">R_n</span>을 <i>y</i>축 둘레로 회전시킨 입체는 원기둥 (부피 <span class=\"chem\">pi</span>)에서 이것을 뺀 것이에요: <span class=\"chem\">B(n) = pi - pi n/(n + 2) = 2pi/(n + 2)</span>.</p><p>(d) 그래프는 모든 <span class=\"chem\">n &gt; 0</span>에서 <span class=\"chem\">B(n) &gt; A(n)</span>임을 시사해요. 증명: <span class=\"chem\">2/(n + 2) &gt; 1/(2n + 1) <=> 4n + 2 &gt; n + 2 <=> 3n &gt; 0</span>이고, 이는 <span class=\"chem\">n &gt; 0</span>일 때 참이에요 (두 분모 모두 양수).</p><p>(e) <span class=\"chem\">B(n)/A(n) = 2(2n + 1)/(n + 2) -> 4</span>.</p><p>(f) <span class=\"chem\">D(n) = 2pi/(n + 2) - pi/(2n + 1)</span>; <span class=\"chem\">D'(n) = -2pi/(n + 2)^2 + 2pi/(2n + 1)^2 = 0 => n + 2 = 2n + 1 => n = 1</span>. 최댓값은 <span class=\"chem\">D(1) = 2pi/3 - pi/3 = pi/3</span>.</p>",
      markscheme: [
        // EN: A1: identifies the cone (about <i>x</i>) and the cylinder with a conical hole (about <i>y</i>).
        "A1: 원뿔 (<i>x</i>축 둘레)과 원뿔 모양의 구멍이 있는 원기둥 (<i>y</i>축 둘레)임을 파악함.",
        // EN: A1: <span class="chem">A(1) = pi/3</span>.
        "A1: <span class=\"chem\">A(1) = pi/3</span>.",
        // EN: A1: <span class="chem">B(1) = 2pi/3</span>.
        "A1: <span class=\"chem\">B(1) = 2pi/3</span>.",
        // EN: M1: <span class="chem">A(n) = pi int_0^1 (x^n)^2 dx</span>.
        "M1: <span class=\"chem\">A(n) = pi int_0^1 (x^n)^2 dx</span>.",
        // EN: A1: <span class="chem">pi [x^{2n+1}/(2n + 1)]_0^1</span>, leading to <span class="chem">pi/(2n + 1)</span> AG (no mark for the given line).
        "A1: <span class=\"chem\">pi [x^{2n+1}/(2n + 1)]_0^1</span>을 얻고, <span class=\"chem\">pi/(2n + 1)</span>로 이어짐 AG (주어진 식 자체에는 점수 없음).",
        // EN: M1: rearranges to <span class="chem">x = y^{1/n}</span>.
        "M1: <span class=\"chem\">x = y^{1/n}</span>으로 정리함.",
        // EN: M1: <span class="chem">pi int_0^1 x^2 dy = pi int_0^1 y^{2/n} dy</span>.
        "M1: <span class=\"chem\">pi int_0^1 x^2 dy = pi int_0^1 y^{2/n} dy</span>.",
        // EN: A1: <span class="chem">pi n/(n + 2)</span>.
        "A1: <span class=\"chem\">pi n/(n + 2)</span>.",
        // EN: M1: <span class="chem">B(n)</span> = cylinder <span class="chem">pi(1)^2(1)</span> minus that volume.
        "M1: <span class=\"chem\">B(n)</span> = 원기둥 <span class=\"chem\">pi(1)^2(1)</span>에서 그 부피를 뺀 것.",
        // EN: A1: <span class="chem">pi - pi n/(n + 2) = pi(n + 2 - n)/(n + 2)</span>, leading to <span class="chem">2pi/(n + 2)</span> AG (no mark for the given line).
        "A1: <span class=\"chem\">pi - pi n/(n + 2) = pi(n + 2 - n)/(n + 2)</span>를 얻고, <span class=\"chem\">2pi/(n + 2)</span>로 이어짐 AG (주어진 식 자체에는 점수 없음).",
        // EN: A1: sketch with <span class="chem">B</span> above <span class="chem">A</span>, and conjecture <span class="chem">B(n) &gt; A(n)</span>.
        "A1: <span class=\"chem\">B</span>가 <span class=\"chem\">A</span>보다 위에 있는 개형을 그리고, <span class=\"chem\">B(n) &gt; A(n)</span>이라고 추측함.",
        // EN: M1: sets up the inequality <span class="chem">2/(n + 2) &gt; 1/(2n + 1)</span>.
        "M1: 부등식 <span class=\"chem\">2/(n + 2) &gt; 1/(2n + 1)</span>을 세움.",
        // EN: A1: cross-multiplies (positive denominators) to <span class="chem">3n &gt; 0</span>.
        "A1: (분모가 양수이므로) 양변에 분모를 곱하여 <span class=\"chem\">3n &gt; 0</span>을 얻음.",
        // EN: R1: true for every <span class="chem">n &gt; 0</span>, so the conjecture holds.
        "R1: 모든 <span class=\"chem\">n &gt; 0</span>에서 참이므로 추측이 성립함.",
        // EN: M1: <span class="chem">B(n)/A(n) = 2(2n + 1)/(n + 2)</span>.
        "M1: <span class=\"chem\">B(n)/A(n) = 2(2n + 1)/(n + 2)</span>.",
        // EN: A1: limit <span class="chem">4</span>.
        "A1: 극한 <span class=\"chem\">4</span>.",
        // EN: M1: differentiates <span class="chem">B(n) - A(n)</span> and sets it equal to zero (or uses a GDC graph).
        "M1: <span class=\"chem\">B(n) - A(n)</span>을 미분하여 0으로 놓음 (또는 GDC 그래프를 이용함).",
        // EN: A1: <span class="chem">n = 1</span>.
        "A1: <span class=\"chem\">n = 1</span>.",
        // EN: A1: greatest value <span class="chem">pi/3</span>.
        "A1: 최댓값 <span class=\"chem\">pi/3</span>.",
      ],
    },

    // ── t5-3-q058 · short · challenge · AHL · AHL 5.12, 5.13 · 17 marks
    "t5-3-q058": {
      // EN: <p>This question investigates <span class="chem">f(x) = (1 + k/x)^x</span> for large <i>x</i>, where <i>k</i> is a positive constant.</p><p>(a) Let <span class="chem">k = 2</span>. Use your GDC to find <span class="chem">f(10)</span>, <span class="chem">f(100)</span> and <span class="chem">f(1000)</span>, giving each to 5 significant figures. <strong>[2 marks]</strong></p><p>(b) Hence conjecture whether <span class="chem">f(x)</span> converges as <span class="chem">x -> infty</span> and, if so, suggest its exact limit. <strong>[1 mark]</strong></p><p>(c) Show that <span class="chem">ln f(x) = ln(1 + k/x) / (1/x)</span>, and state the form of this quotient as <span class="chem">x -> infty</span>. <strong>[2 marks]</strong></p><p>(d) Use L’Hôpital’s rule to show that <span class="chem">lim_{x->infty} ln f(x) = k</span>, and hence write down <span class="chem">lim_{x->infty} f(x)</span>. <strong>[5 marks]</strong></p><p>(e) By writing <span class="chem">(x + 3)/(x - 1) = 1 + 4/(x - 1)</span>, find the exact value of <span class="chem">lim_{x->infty} ((x + 3)/(x - 1))^x</span>. <strong>[4 marks]</strong></p><p>(f) A deposit of 1000 euros earns interest at a nominal annual rate of 6%, compounded <i>m</i> times per year. After 10 years its value is <span class="chem">1000(1 + 0.06/m)^{10m}</span>. Find, to the nearest cent, the limit of this value as <span class="chem">m -> infty</span>. <strong>[3 marks]</strong></p>
      stem: "<p>이 문제에서는 <i>x</i>가 클 때 <span class=\"chem\">f(x) = (1 + k/x)^x</span>를 탐구해요. 단, <i>k</i>는 양의 상수예요.</p><p>(a) <span class=\"chem\">k = 2</span>라 하자. GDC를 이용하여 <span class=\"chem\">f(10)</span>, <span class=\"chem\">f(100)</span>, <span class=\"chem\">f(1000)</span>을 각각 유효숫자 5자리로 구하시오 (find). <strong>[2 marks]</strong></p><p>(b) 이를 이용하여 (Hence) <span class=\"chem\">x -> infty</span>일 때 <span class=\"chem\">f(x)</span>가 수렴하는지 추측하고 (conjecture), 수렴한다면 그 극한의 정확한 값을 제시하시오 (suggest). <strong>[1 mark]</strong></p><p>(c) <span class=\"chem\">ln f(x) = ln(1 + k/x) / (1/x)</span>임을 보이고 (Show that), <span class=\"chem\">x -> infty</span>일 때 이 몫의 꼴을 답하시오 (state). <strong>[2 marks]</strong></p><p>(d) 로피탈의 정리를 이용하여 <span class=\"chem\">lim_{x->infty} ln f(x) = k</span>임을 보이고 (show that), 이를 이용하여 (hence) <span class=\"chem\">lim_{x->infty} f(x)</span>를 쓰시오 (write down). <strong>[5 marks]</strong></p><p>(e) <span class=\"chem\">(x + 3)/(x - 1) = 1 + 4/(x - 1)</span>로 써서 <span class=\"chem\">lim_{x->infty} ((x + 3)/(x - 1))^x</span>의 정확한 값을 구하시오 (find). <strong>[4 marks]</strong></p><p>(f) 1000유로의 예금이 명목 연이율 6%로, 1년에 <i>m</i>번 복리로 이자가 붙어요. 10년 후 그 금액은 <span class=\"chem\">1000(1 + 0.06/m)^{10m}</span>이에요. <span class=\"chem\">m -> infty</span>일 때 이 금액의 극한을 센트 단위까지 (가장 가까운 센트로 반올림하여) 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: the variable is in both the base and the power, so take logarithms. That turns a power into a quotient of the form <span class="chem">0/0</span>, which is a job for L’Hôpital’s rule.
        "해석: 변수가 밑과 지수 모두에 있으므로 로그를 취하세요. 그러면 거듭제곱이 <span class=\"chem\">0/0</span> 꼴의 몫으로 바뀌고, 이는 로피탈의 정리로 처리할 수 있어요.",
        // EN: In (c), <span class="chem">ln((1 + k/x)^x) = x ln(1 + k/x)</span>, and multiplying by <i>x</i> is the same as dividing by <span class="chem">1/x</span>.
        "(c)에서 <span class=\"chem\">ln((1 + k/x)^x) = x ln(1 + k/x)</span>이고, <i>x</i>를 곱하는 것은 <span class=\"chem\">1/x</span>로 나누는 것과 같아요.",
        // EN: In (d), <span class="chem">d/dx ln(1 + k/x) = (-k/x^2)/(1 + k/x)</span> and <span class="chem">d/dx (1/x) = -1/x^2</span>. The <span class="chem">-1/x^2</span> factors cancel.
        "(d)에서 <span class=\"chem\">d/dx ln(1 + k/x) = (-k/x^2)/(1 + k/x)</span>이고 <span class=\"chem\">d/dx (1/x) = -1/x^2</span>예요. <span class=\"chem\">-1/x^2</span> 인수끼리 약분돼요.",
        // EN: In (e), the exponent is <span class="chem">x = t + 1</span>, not <i>t</i>. In (f), the 6% rate and 10 years combine to <span class="chem">k = 0.6</span>.
        "(e)에서 지수는 <i>t</i>가 아니라 <span class=\"chem\">x = t + 1</span>이에요. (f)에서는 6%의 이율과 10년이 합쳐져 <span class=\"chem\">k = 0.6</span>이 돼요.",
      ],
      // EN: <p>Decode: a variable power is handled by taking logarithms, which produces an indeterminate quotient for L’Hôpital’s rule. (a) 6.1917, 7.2446, 7.3743. (d) <span class="chem">lim f(x) = e^k</span>. (e) <span class="chem">e^4</span>. (f) 1822.12 euros.</p>
      solution: "<p>해석: 변수가 포함된 지수는 로그를 취해 다루고, 그러면 로피탈의 정리를 쓸 수 있는 부정형의 몫이 생겨요. (a) 6.1917, 7.2446, 7.3743. (d) <span class=\"chem\">lim f(x) = e^k</span>. (e) <span class=\"chem\">e^4</span>. (f) 1822.12유로.</p>",
      // EN: <p>(a) <span class="chem">f(10) = 6.1917</span>, <span class="chem">f(100) = 7.2446</span>, <span class="chem">f(1000) = 7.3743</span>.</p><p>(b) The values increase and appear to converge, to about 7.39, which suggests the limit <span class="chem">e^2</span>.</p><p>(c) <span class="chem">ln f(x) = x ln(1 + k/x) = ln(1 + k/x)/(1/x)</span>. As <span class="chem">x -> infty</span>, top and bottom both tend to 0: the form <span class="chem">0/0</span>.</p><p>(d) Differentiating top and bottom: <span class="chem">((-k/x^2)/(1 + k/x)) / (-1/x^2) = k/(1 + k/x) -> k</span>. So <span class="chem">ln f(x) -> k</span>, and since <span class="chem">e^x</span> is continuous, <span class="chem">f(x) -> e^k</span>.</p><p>(e) Let <span class="chem">t = x - 1</span>: <span class="chem">((x + 3)/(x - 1))^x = (1 + 4/t)^t × (1 + 4/t) -> e^4 × 1 = e^4</span>.</p><p>(f) <span class="chem">1000(1 + 0.06/m)^{10m} = 1000((1 + 0.6/(10m))^{10m}) -> 1000 e^{0.6} = 1822.12</span> euros.</p>
      answer: "<p>(a) <span class=\"chem\">f(10) = 6.1917</span>, <span class=\"chem\">f(100) = 7.2446</span>, <span class=\"chem\">f(1000) = 7.3743</span>.</p><p>(b) 값이 증가하면서 약 7.39로 수렴하는 것처럼 보이므로 극한은 <span class=\"chem\">e^2</span>로 추측돼요.</p><p>(c) <span class=\"chem\">ln f(x) = x ln(1 + k/x) = ln(1 + k/x)/(1/x)</span>. <span class=\"chem\">x -> infty</span>일 때 분자와 분모가 모두 0으로 가요: <span class=\"chem\">0/0</span> 꼴.</p><p>(d) 분자와 분모를 미분하면: <span class=\"chem\">((-k/x^2)/(1 + k/x)) / (-1/x^2) = k/(1 + k/x) -> k</span>. 따라서 <span class=\"chem\">ln f(x) -> k</span>이고, <span class=\"chem\">e^x</span>는 연속이므로 <span class=\"chem\">f(x) -> e^k</span>.</p><p>(e) <span class=\"chem\">t = x - 1</span>로 놓으면: <span class=\"chem\">((x + 3)/(x - 1))^x = (1 + 4/t)^t × (1 + 4/t) -> e^4 × 1 = e^4</span>.</p><p>(f) <span class=\"chem\">1000(1 + 0.06/m)^{10m} = 1000((1 + 0.6/(10m))^{10m}) -> 1000 e^{0.6} = 1822.12</span>유로.</p>",
      markscheme: [
        // EN: A1: <span class="chem">f(10) = 6.1917</span>.
        "A1: <span class=\"chem\">f(10) = 6.1917</span>.",
        // EN: A1: <span class="chem">f(100) = 7.2446</span> and <span class="chem">f(1000) = 7.3743</span>.
        "A1: <span class=\"chem\">f(100) = 7.2446</span>과 <span class=\"chem\">f(1000) = 7.3743</span>.",
        // EN: A1: conjectures convergence to <span class="chem">e^2 ≈ 7.389</span>.
        "A1: <span class=\"chem\">e^2 ≈ 7.389</span>로 수렴한다고 추측함.",
        // EN: A1: <span class="chem">ln f(x) = x ln(1 + k/x)</span> rewritten as the quotient.
        "A1: <span class=\"chem\">ln f(x) = x ln(1 + k/x)</span>를 몫의 꼴로 고쳐 씀.",
        // EN: A1: form <span class="chem">0/0</span> stated.
        "A1: <span class=\"chem\">0/0</span> 꼴임을 답함.",
        // EN: M1: differentiates the numerator: <span class="chem">(-k/x^2)/(1 + k/x)</span>.
        "M1: 분자를 미분함: <span class=\"chem\">(-k/x^2)/(1 + k/x)</span>.",
        // EN: A1: differentiates the denominator: <span class="chem">-1/x^2</span>.
        "A1: 분모를 미분함: <span class=\"chem\">-1/x^2</span>.",
        // EN: A1: simplifies to <span class="chem">k/(1 + k/x)</span>.
        "A1: <span class=\"chem\">k/(1 + k/x)</span>로 간단히 함.",
        // EN: A1: limit <span class="chem">k</span>.
        "A1: 극한 <span class=\"chem\">k</span>.",
        // EN: A1: <span class="chem">lim f(x) = e^k</span>.
        "A1: <span class=\"chem\">lim f(x) = e^k</span>.",
        // EN: M1: substitutes <span class="chem">t = x - 1</span> (so <span class="chem">t -> infty</span>).
        "M1: <span class=\"chem\">t = x - 1</span>로 치환함 (따라서 <span class=\"chem\">t -> infty</span>).",
        // EN: A1: splits into <span class="chem">(1 + 4/t)^t (1 + 4/t)</span>.
        "A1: <span class=\"chem\">(1 + 4/t)^t (1 + 4/t)</span>로 나눔.",
        // EN: M1: uses the result of (d) with <span class="chem">k = 4</span>, and <span class="chem">(1 + 4/t) -> 1</span>.
        "M1: <span class=\"chem\">k = 4</span>로 (d)의 결과를 이용하고, <span class=\"chem\">(1 + 4/t) -> 1</span>을 이용함.",
        // EN: A1: <span class="chem">e^4</span>.
        "A1: <span class=\"chem\">e^4</span>.",
        // EN: M1: writes the value as <span class="chem">1000(1 + 0.6/n)^n</span> with <span class="chem">n = 10m</span> (or equivalent).
        "M1: <span class=\"chem\">n = 10m</span>으로 놓고 금액을 <span class=\"chem\">1000(1 + 0.6/n)^n</span>으로 씀 (또는 동치인 식).",
        // EN: A1: limit <span class="chem">1000 e^{0.6}</span>.
        "A1: 극한 <span class=\"chem\">1000 e^{0.6}</span>.",
        // EN: A1: <span class="chem">1822.12</span> euros.
        "A1: <span class=\"chem\">1822.12</span>유로.",
      ],
    },

    // ── t5-3-q059 · short · challenge · AHL · AHL 5.12, AHL 1.15 · 19 marks
    "t5-3-q059": {
      // EN: <p>This question investigates higher derivatives of products of a polynomial and <span class="chem">e^x</span>. Write <span class="chem">f^{(n)}(x)</span> for the <i>n</i>th derivative of <i>f</i>.</p><p>(a) Let <span class="chem">f(x) = x e^x</span>. Find <span class="chem">f'(x)</span>, <span class="chem">f''(x)</span> and <span class="chem">f'''(x)</span>. <strong>[3 marks]</strong></p><p>(b) Conjecture an expression for <span class="chem">f^{(n)}(x)</span>. <strong>[1 mark]</strong></p><p>(c) Use mathematical induction to prove your conjecture for all <span class="chem">n \in \mathbb{Z}^+</span>. <strong>[5 marks]</strong></p><p>(d) Let <span class="chem">g(x) = x^2 e^x</span>. Show that if <span class="chem">g^{(n)}(x) = (x^2 + 2nx + n(n - 1)) e^x</span> then <span class="chem">g^{(n+1)}(x) = (x^2 + 2(n + 1)x + (n + 1)n) e^x</span>, and hence state, with a reason, what this proves. <strong>[4 marks]</strong></p><p>(e) Find the smallest value of <i>n</i> for which <span class="chem">g^{(n)}(0) &gt; 1000</span>. <strong>[3 marks]</strong></p><p>(f) Find the exact <i>x</i>-coordinates of the points where the graph of <span class="chem">y = g^{(10)}(x)</span> meets the <i>x</i>-axis. <strong>[3 marks]</strong></p>
      stem: "<p>이 문제에서는 다항식과 <span class=\"chem\">e^x</span>의 곱의 고계도함수를 탐구해요. <i>f</i>의 <i>n</i>계도함수를 <span class=\"chem\">f^{(n)}(x)</span>로 나타내요.</p><p>(a) <span class=\"chem\">f(x) = x e^x</span>라 하자. <span class=\"chem\">f'(x)</span>, <span class=\"chem\">f''(x)</span>, <span class=\"chem\">f'''(x)</span>를 구하시오 (Find). <strong>[3 marks]</strong></p><p>(b) <span class=\"chem\">f^{(n)}(x)</span>를 나타내는 식을 추측하시오 (Conjecture). <strong>[1 mark]</strong></p><p>(c) 수학적 귀납법을 이용하여 그 추측이 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 성립함을 증명하시오 (prove). <strong>[5 marks]</strong></p><p>(d) <span class=\"chem\">g(x) = x^2 e^x</span>라 하자. <span class=\"chem\">g^{(n)}(x) = (x^2 + 2nx + n(n - 1)) e^x</span>이면 <span class=\"chem\">g^{(n+1)}(x) = (x^2 + 2(n + 1)x + (n + 1)n) e^x</span>임을 보이고 (Show that), 이를 이용하여 (hence) 이것이 무엇을 증명하는지 이유와 함께 답하시오 (state). <strong>[4 marks]</strong></p><p>(e) <span class=\"chem\">g^{(n)}(0) &gt; 1000</span>을 만족하는 가장 작은 <i>n</i>의 값을 구하시오 (Find). <strong>[3 marks]</strong></p><p>(f) <span class=\"chem\">y = g^{(10)}(x)</span>의 그래프가 <i>x</i>축과 만나는 점들의 정확한 <i>x</i>좌표를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: compute a few small cases, spot the pattern, then prove it by induction (AHL 1.15). Each new derivative uses the product rule once.
        "해석: 작은 경우 몇 개를 계산해 규칙을 찾은 다음, 귀납법으로 증명하세요 (AHL 1.15). 새 도함수를 구할 때마다 곱의 미분법을 한 번씩 씁니다.",
        // EN: In (a), keep a factor <span class="chem">e^x</span> outside each time: <span class="chem">d/dx[(x + a)e^x] = (x + a + 1)e^x</span>.
        "(a)에서는 매번 인수 <span class=\"chem\">e^x</span>를 밖으로 빼 두세요: <span class=\"chem\">d/dx[(x + a)e^x] = (x + a + 1)e^x</span>.",
        // EN: In (d), differentiate the bracket and the exponential separately, then collect the terms in <span class="chem">x^2</span>, <i>x</i> and the constant. The step only proves the formula if you also check a starting value.
        "(d)에서는 괄호 부분과 지수함수를 각각 미분한 다음, <span class=\"chem\">x^2</span> 항, <i>x</i> 항, 상수항을 묶으세요. 이 단계는 시작값도 확인했을 때에만 공식을 증명해요.",
        // EN: In (e), put <span class="chem">x = 0</span>: <span class="chem">g^{(n)}(0) = n(n - 1)</span>. In (f), <span class="chem">e^x</span> is never zero.
        "(e)에서는 <span class=\"chem\">x = 0</span>을 대입하세요: <span class=\"chem\">g^{(n)}(0) = n(n - 1)</span>. (f)에서 <span class=\"chem\">e^x</span>는 결코 0이 아니에요.",
      ],
      // EN: <p>Decode: higher derivatives with a pattern call for small cases, a conjecture and an induction proof. (b) <span class="chem">f^{(n)}(x) = (x + n)e^x</span>. (d) The inductive step, with <span class="chem">n = 1</span> checked, proves <span class="chem">g^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span>. (e) <span class="chem">n = 33</span>. (f) <span class="chem">x = -10 +- sqrt(10)</span>.</p>
      solution: "<p>해석: 규칙이 있는 고계도함수는 작은 경우의 계산, 추측, 귀납법에 의한 증명이 필요해요. (b) <span class=\"chem\">f^{(n)}(x) = (x + n)e^x</span>. (d) 귀납 단계에 <span class=\"chem\">n = 1</span>의 확인을 더하면 <span class=\"chem\">g^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span>가 증명돼요. (e) <span class=\"chem\">n = 33</span>. (f) <span class=\"chem\">x = -10 +- sqrt(10)</span>.</p>",
      // EN: <p>(a) <span class="chem">f'(x) = (x + 1)e^x</span>, <span class="chem">f''(x) = (x + 2)e^x</span>, <span class="chem">f'''(x) = (x + 3)e^x</span>.</p><p>(b) <span class="chem">f^{(n)}(x) = (x + n)e^x</span>.</p><p>(c) <span class="chem">n = 1</span>: <span class="chem">f'(x) = (x + 1)e^x</span>, true. Assume <span class="chem">f^{(k)}(x) = (x + k)e^x</span>. Then <span class="chem">f^{(k+1)}(x) = e^x + (x + k)e^x = (x + k + 1)e^x</span>, which is the statement for <span class="chem">n = k + 1</span>. It is true for <span class="chem">n = 1</span>, and if true for <span class="chem">n = k</span> it is true for <span class="chem">n = k + 1</span>, so it is true for all <span class="chem">n \in \mathbb{Z}^+</span>.</p><p>(d) Differentiating, <span class="chem">g^{(n+1)}(x) = (2x + 2n)e^x + (x^2 + 2nx + n^2 - n)e^x = (x^2 + (2n + 2)x + n^2 + n)e^x = (x^2 + 2(n + 1)x + (n + 1)n)e^x</span>. Also <span class="chem">g'(x) = (x^2 + 2x)e^x</span> matches the formula at <span class="chem">n = 1</span>, so by induction the formula holds for every <span class="chem">n \in \mathbb{Z}^+</span>.</p><p>(e) <span class="chem">g^{(n)}(0) = n(n - 1)</span>. <span class="chem">32 × 31 = 992</span> and <span class="chem">33 × 32 = 1056</span>, so <span class="chem">n = 33</span>.</p><p>(f) <span class="chem">g^{(10)}(x) = (x^2 + 20x + 90)e^x = 0 => x^2 + 20x + 90 = 0 => x = -10 +- sqrt(10)</span>.</p>
      answer: "<p>(a) <span class=\"chem\">f'(x) = (x + 1)e^x</span>, <span class=\"chem\">f''(x) = (x + 2)e^x</span>, <span class=\"chem\">f'''(x) = (x + 3)e^x</span>.</p><p>(b) <span class=\"chem\">f^{(n)}(x) = (x + n)e^x</span>.</p><p>(c) <span class=\"chem\">n = 1</span>: <span class=\"chem\">f'(x) = (x + 1)e^x</span>이므로 참이에요. <span class=\"chem\">f^{(k)}(x) = (x + k)e^x</span>라 가정해요. 그러면 <span class=\"chem\">f^{(k+1)}(x) = e^x + (x + k)e^x = (x + k + 1)e^x</span>이고, 이는 <span class=\"chem\">n = k + 1</span>일 때의 명제예요. <span class=\"chem\">n = 1</span>일 때 참이고, <span class=\"chem\">n = k</span>일 때 참이면 <span class=\"chem\">n = k + 1</span>일 때도 참이므로 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 참이에요.</p><p>(d) 미분하면 <span class=\"chem\">g^{(n+1)}(x) = (2x + 2n)e^x + (x^2 + 2nx + n^2 - n)e^x = (x^2 + (2n + 2)x + n^2 + n)e^x = (x^2 + 2(n + 1)x + (n + 1)n)e^x</span>. 또 <span class=\"chem\">g'(x) = (x^2 + 2x)e^x</span>는 <span class=\"chem\">n = 1</span>일 때의 공식과 일치하므로, 귀납법에 의해 공식은 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 성립해요.</p><p>(e) <span class=\"chem\">g^{(n)}(0) = n(n - 1)</span>. <span class=\"chem\">32 × 31 = 992</span>이고 <span class=\"chem\">33 × 32 = 1056</span>이므로 <span class=\"chem\">n = 33</span>.</p><p>(f) <span class=\"chem\">g^{(10)}(x) = (x^2 + 20x + 90)e^x = 0 => x^2 + 20x + 90 = 0 => x = -10 +- sqrt(10)</span>.</p>",
      markscheme: [
        // EN: A1: <span class="chem">f'(x) = (x + 1)e^x</span>.
        "A1: <span class=\"chem\">f'(x) = (x + 1)e^x</span>.",
        // EN: A1: <span class="chem">f''(x) = (x + 2)e^x</span>.
        "A1: <span class=\"chem\">f''(x) = (x + 2)e^x</span>.",
        // EN: A1: <span class="chem">f'''(x) = (x + 3)e^x</span>.
        "A1: <span class=\"chem\">f'''(x) = (x + 3)e^x</span>.",
        // EN: A1: conjecture <span class="chem">f^{(n)}(x) = (x + n)e^x</span>.
        "A1: <span class=\"chem\">f^{(n)}(x) = (x + n)e^x</span>로 추측함.",
        // EN: A1: checks <span class="chem">n = 1</span>.
        "A1: <span class=\"chem\">n = 1</span>을 확인함.",
        // EN: M1: assumes the result for <span class="chem">n = k</span>.
        "M1: <span class=\"chem\">n = k</span>일 때 결과가 성립한다고 가정함.",
        // EN: M1: differentiates <span class="chem">(x + k)e^x</span> with the product rule.
        "M1: 곱의 미분법으로 <span class=\"chem\">(x + k)e^x</span>를 미분함.",
        // EN: A1: obtains <span class="chem">(x + k + 1)e^x</span>.
        "A1: <span class=\"chem\">(x + k + 1)e^x</span>를 얻음.",
        // EN: R1: complete induction conclusion (true for <span class="chem">n = 1</span>; true for <i>k</i> implies true for <span class="chem">k + 1</span>; so true for all <span class="chem">n \in \mathbb{Z}^+</span>).
        "R1: 귀납법의 결론이 완전함 (<span class=\"chem\">n = 1</span>일 때 참; <i>k</i>일 때 참이면 <span class=\"chem\">k + 1</span>일 때 참; 따라서 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 참).",
        // EN: M1: differentiates the product <span class="chem">(x^2 + 2nx + n(n - 1))e^x</span>.
        "M1: 곱 <span class=\"chem\">(x^2 + 2nx + n(n - 1))e^x</span>를 미분함.",
        // EN: A1: collects terms into <span class="chem">x^2 + 2(n + 1)x + (n + 1)n</span>.
        "A1: 항을 묶어 <span class=\"chem\">x^2 + 2(n + 1)x + (n + 1)n</span>으로 정리함.",
        // EN: A1: checks the formula at <span class="chem">n = 1</span>: <span class="chem">g'(x) = (x^2 + 2x)e^x</span>.
        "A1: <span class=\"chem\">n = 1</span>에서 공식을 확인함: <span class=\"chem\">g'(x) = (x^2 + 2x)e^x</span>.",
        // EN: R1: concludes by induction that the formula holds for all <span class="chem">n \in \mathbb{Z}^+</span>.
        "R1: 귀납법에 의해 공식이 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 성립한다고 결론 내림.",
        // EN: M1: <span class="chem">g^{(n)}(0) = n(n - 1)</span>.
        "M1: <span class=\"chem\">g^{(n)}(0) = n(n - 1)</span>.",
        // EN: M1: solves <span class="chem">n(n - 1) &gt; 1000</span> (or tests consecutive values).
        "M1: <span class=\"chem\">n(n - 1) &gt; 1000</span>을 풂 (또는 연속된 값을 대입해 봄).",
        // EN: A1: <span class="chem">n = 33</span>.
        "A1: <span class=\"chem\">n = 33</span>.",
        // EN: M1: <span class="chem">x^2 + 20x + 90 = 0</span> (since <span class="chem">e^x != 0</span>).
        "M1: <span class=\"chem\">x^2 + 20x + 90 = 0</span> (<span class=\"chem\">e^x != 0</span>이므로).",
        // EN: A1: applies the quadratic formula.
        "A1: 근의 공식을 적용함.",
        // EN: A1: <span class="chem">x = -10 +- sqrt(10)</span>.
        "A1: <span class=\"chem\">x = -10 +- sqrt(10)</span>.",
      ],
    },

  }
});
