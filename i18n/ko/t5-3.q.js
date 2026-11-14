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
      // EN: <p>Using the substitution <span class="chem">u = 1 + x^2</span> (or otherwise), find the exact value of <span class="chem">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span>. Give your answer to 3 s.f. or as an exact expression using <span class="mono">sqrt(5)</span>.</p>
      stem: "<p>치환 <span class=\"chem\">u = 1 + x^2</span>을 이용하거나 다른 방법으로 <span class=\"chem\">int_0^2 (2x^3) / sqrt(1 + x^2) dx</span>의 정확한 값을 구하시오 (Find). 유효숫자 3자리(3 s.f.) 또는 <span class=\"mono\">sqrt(5)</span>를 사용한 정확한 식으로 답하세요.</p>",
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
      // EN: <p>Find the exact value of <span class="chem">int_1^e x^2 ln(x) dx</span>. (You can type an exact expression in terms of <span class="mono">e</span> such as <span class="mono">(2*e^3+1)/9</span>, or a 3 s.f. decimal.)</p>
      stem: "<p><span class=\"chem\">int_1^e x^2 ln(x) dx</span>의 정확한 값을 구하시오 (Find). (<span class=\"mono\">(2*e^3+1)/9</span>처럼 <span class=\"mono\">e</span>를 포함한 정확한 식이나 유효숫자 3자리(3 s.f.) 소수로 입력할 수 있어요.)</p>",
      hints: [
        // EN: By LIATE, choose <span class="chem">u = ln x</span> (<span class="chem">du/dx = 1/x</span>) and <span class="chem">dv/dx = x^2</span> (<span class="chem">v = x^3 / 3</span>).
        "LIATE에 따라 <span class=\"chem\">u = ln x</span> (<span class=\"chem\">du/dx = 1/x</span>)와 <span class=\"chem\">dv/dx = x^2</span> (<span class=\"chem\">v = x^3 / 3</span>)으로 잡으세요.",
        // EN: Apply integration by parts: <span class="chem">[(x^3 / 3) ln x]_1^e - int_1^e (x^2 / 3) dx = [x^3 / 3 ln x - x^3 / 9]_1^e</span>.
        "부분적분법을 적용하세요: <span class=\"chem\">[(x^3 / 3) ln x]_1^e - int_1^e (x^2 / 3) dx = [x^3 / 3 ln x - x^3 / 9]_1^e</span>.",
      ],
      // EN: <p>Let <span class="chem">u = ln x</span> and <span class="chem">dv/dx = x^2</span>, so <span class="chem">du/dx = 1/x</span> and <span class="chem">v = x^3/3</span>. Then <span class="chem">int_1^e x^2 ln x dx = [(x^3/3)ln x]_1^e - int_1^e (x^2/3) dx = (e^3/3 - 0) - [x^3/9]_1^e = e^3/3 - (e^3 - 1)/9 = (2e^3 + 1)/9 ≈ 4.57</span>.</p>
      solution: "<p><span class=\"chem\">u = ln x</span>, <span class=\"chem\">dv/dx = x^2</span>으로 놓으면 <span class=\"chem\">du/dx = 1/x</span>, <span class=\"chem\">v = x^3/3</span>이에요. 따라서 <span class=\"chem\">int_1^e x^2 ln x dx = [(x^3/3)ln x]_1^e - int_1^e (x^2/3) dx = (e^3/3 - 0) - [x^3/9]_1^e = e^3/3 - (e^3 - 1)/9 = (2e^3 + 1)/9 ≈ 4.57</span>이에요.</p>",
    },

    // ── t5-3-q010 · mcq · exam · AHL · AHL 5.15 · 4 marks
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
      // EN: <p>Given that <span class="chem">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span>, evaluate the definite integral <span class="chem">int_3^4 6 / (x^2 - x - 2) dx</span> and give your answer to 3 s.f. (or as an exact expression such as <span class="mono">2*ln(8/5)</span>).</p>
      stem: "<p><span class=\"chem\">6 / (x^2 - x - 2) = A / (x - 2) + B / (x + 1)</span>일 때, 정적분 <span class=\"chem\">int_3^4 6 / (x^2 - x - 2) dx</span>를 계산하여 유효숫자 3자리(3 s.f.)(또는 <span class=\"mono\">2*ln(8/5)</span> 같은 정확한 식)로 답하시오 (Evaluate).</p>",
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

    // ── t5-3-q013 · mcq · exam · AHL · AHL 5.17 · 4 marks
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
        // EN (option B): You forgot to multiply by the outer factor of <span class="chem">pi</span> in <span class="chem">V = pi int y^2 dx</span>, or integrated <span class="chem">cos x</span> instead of <span class="chem">cos^2 x</span>.
        "1": "<span class=\"chem\">V = pi int y^2 dx</span> 앞의 <span class=\"chem\">pi</span>를 곱하는 것을 잊었거나, <span class=\"chem\">cos^2 x</span> 대신 <span class=\"chem\">cos x</span>를 적분했어요.",
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
        // EN: A1: isolates <span class="chem">dy/dx</span> clearly to reach the given answer <span class="chem">-(2x + y)/(x + 2y)</span> (AG).
        "A1: <span class=\"chem\">dy/dx</span>를 명확히 정리하여 주어진 식 <span class=\"chem\">-(2x + y)/(x + 2y)</span>를 유도함 (AG).",
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
      // EN: <p>By integrating by parts twice, find the exact value of the cyclic integral <span class="chem">I = int_0^{pi/2} e^{2x} sin(x) dx</span>. (You can type an exact expression in terms of <span class="mono">e</span> and <span class="mono">pi</span> such as <span class="mono">(2*e^pi+1)/5</span>, or a 3 s.f. decimal.)</p>
      stem: "<p>부분적분법을 두 번 적용하여 순환형 적분 <span class=\"chem\">I = int_0^{pi/2} e^{2x} sin(x) dx</span>의 정확한 값을 구하시오 (Find). (<span class=\"mono\">(2*e^pi+1)/5</span>처럼 <span class=\"mono\">e</span>와 <span class=\"mono\">pi</span>를 포함한 정확한 식이나 유효숫자 3자리(3 s.f.) 소수로 입력할 수 있어요.)</p>",
      hints: [
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
        // EN: M1 A1: applies integration by parts to find <span class="chem">I_1 = (e^2 + 1)/4</span>.
        "M1 A1: 부분적분법을 적용해 <span class=\"chem\">I_1 = (e^2 + 1)/4</span>를 구함.",
        // EN: M1: chooses <span class="chem">u = (ln x)^n</span> and <span class="chem">dv/dx = x</span> in <span class="chem">I_n</span>.
        "M1: <span class=\"chem\">I_n</span>에서 <span class=\"chem\">u = (ln x)^n</span>, <span class=\"chem\">dv/dx = x</span>로 잡음.",
        // EN: A1: shows boundary term <span class="chem">[(x^2/2)(ln x)^n]_1^e = e^2/2</span> and simplifies integral to <span class="chem">-(n/2)I_{n-1}</span> (AG).
        "A1: 경계항 <span class=\"chem\">[(x^2/2)(ln x)^n]_1^e = e^2/2</span>임을 보이고 적분을 <span class=\"chem\">-(n/2)I_{n-1}</span>로 정리함 (AG).",
        // EN: M1: identifies volume <span class="chem">V = pi int_1^e y^2 dx = pi I_2</span>.
        "M1: 부피가 <span class=\"chem\">V = pi int_1^e y^2 dx = pi I_2</span>임을 파악함.",
        // EN: A1: substitutes <span class="chem">n = 2</span> to obtain <span class="chem">V = pi(e^2 - 1)/4</span>.
        "A1: <span class=\"chem\">n = 2</span>를 대입해 <span class=\"chem\">V = pi(e^2 - 1)/4</span>를 얻음.",
      ],
    },

  }
});
