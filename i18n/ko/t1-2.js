/* t1-2 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-2', {
  strings: {

    // page title (browser tab)
    "1.2 Exponents, logarithms and the binomial theorem | Analysis Lab": "1.2 지수, 로그 및 이항정리 | Analysis Lab",

    // Exponents, logarithms and the binomial theorem > page header > p
    "Topic 1.2 · SL 1.5, 1.7, 1.9": "Topic 1.2 · SL 1.5, 1.7, 1.9",

    // Exponents, logarithms and the binomial theorem > page header > h1
    "Exponents, logarithms and the binomial theorem": "지수, 로그와 이항정리",

    // Exponents, logarithms and the binomial theorem > page header > span
    "How do logarithms invert exponential growth, and how can we extract a single power of <i>x</i> from a high-degree binomial without expanding the entire bracket?": "로그는 지수적 성장을 어떻게 역연산할까요? 또, 고차 이항식을 전부 전개하지 않고도 <i>x</i>의 특정 거듭제곱 항 하나만 어떻게 뽑아낼 수 있을까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > p
    "Tick each skill when you can do it without looking at your notes. All skills in Topic 1.2 are SL core and frequently tested on Paper 1 (without a calculator).": "노트를 보지 않고 풀 수 있는 항목에 체크하세요. Topic 1.2의 모든 내용은 SL 핵심 범위이며 계산기 사용 불가(Paper 1) 시험에 자주 출제됩니다.",

    // What you need to be able to do > checklist > span
    "Manipulate expressions with integer, negative, and fractional exponents (<span class=\"chem\">a^{m/n}</span>).": "정수 지수, 음의 지수, 유리수(분수) 지수(<span class=\"chem\">a^{m/n}</span>)를 포함한 식을 변형하고 계산할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Convert fluently between exponential form <span class=\"chem\">a^x = b</span> and logarithmic form <span class=\"chem\">x = log_a b</span>.": "지수 꼴 <span class=\"chem\">a^x = b</span>와 로그 꼴 <span class=\"chem\">x = log_a b</span> 사이를 자유롭게 바꿀 수 있어요.",

    // What you need to be able to do > checklist > span
    "Simplify expressions and solve equations using the product, quotient, power, and change-of-base laws of logarithms.": "로그의 성질(곱, 몫, 거듭제곱)과 밑의 변환 공식을 이용해 식을 간단히 하고 방정식을 풀 수 있어요.",

    // What you need to be able to do > checklist > span
    "Spot and solve disguised quadratic equations in <span class=\"chem\">a^x</span> or <span class=\"chem\">log_a x</span>, checking domain restrictions (<span class=\"chem\">a^x &gt; 0</span>, log argument <span class=\"chem\">&gt; 0</span>).": "<span class=\"chem\">a^x</span> 또는 <span class=\"chem\">log_a x</span>에 대한 치환형 이차방정식을 알아보고 풀며, 정의역 조건(<span class=\"chem\">a^x &gt; 0</span>, 진수 조건 <span class=\"chem\">&gt; 0</span>)을 확인할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Expand <span class=\"chem\">(a + b)^n</span> for <span class=\"chem\">n</span> ∈ ℤ<sup>+</sup> using Pascal’s triangle or <span class=\"chem\">nCr</span>, and find any target term or constant term using the general term <span class=\"chem\">T_{r+1}</span>.": "파스칼의 삼각형이나 <span class=\"chem\">nCr</span>을 이용해 <span class=\"chem\">n</span> ∈ ℤ<sup>+</sup>일 때 <span class=\"chem\">(a + b)^n</span>을 전개하고, 일반항 <span class=\"chem\">T_{r+1}</span>로 원하는 항이나 상수항을 구할 수 있어요.",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "문제 디코더: 어떤 해법을 쓸지 파악하기",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Exponents, logarithms and binomial expansions": "문제 디코더 — 지수, 로그 및 이항전개",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">9^x - 10(3^x) + 9 = 0</span>” or “Solve <span class=\"chem\">e^{2x} - 5e^x + 6 = 0</span>”": "“<span class=\"chem\">9^x - 10(3^x) + 9 = 0</span>을 푸시오” 또는 “<span class=\"chem\">e^{2x} - 5e^x + 6 = 0</span>을 푸시오”",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Disguised quadratic</strong> in <span class=\"chem\">u = 3^x</span> or <span class=\"chem\">u = e^x</span> since <span class=\"chem\">9^x = (3^2)^x = (3^x)^2</span>.": "<span class=\"chem\">9^x = (3^2)^x = (3^x)^2</span>이므로 <span class=\"chem\">u = 3^x</span> 또는 <span class=\"chem\">u = e^x</span>에 대한 <strong>치환형 이차방정식</strong>이에요.",

    // Question decoder: spotting which technique to use > table > td
    "Let <span class=\"chem\">u = a^x</span> (<span class=\"chem\">u &gt; 0</span>), factor the quadratic in <span class=\"chem\">u</span>, <strong>reject any <span class=\"chem\">u &lt;= 0</span></strong>, then solve <span class=\"chem\">a^x = u</span>.": "<span class=\"chem\">u = a^x</span> (<span class=\"chem\">u &gt; 0</span>)로 치환해 <span class=\"chem\">u</span>에 대한 이차방정식을 풀고, <strong><span class=\"chem\">u &lt;= 0</span>인 근은 제외</strong>한 뒤 <span class=\"chem\">a^x = u</span>를 푸세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">log_2 x + 6 log_x 2 = 5</span>” or logs with different bases <span class=\"chem\">log_2 x, log_8 x</span>": "“<span class=\"chem\">log_2 x + 6 log_x 2 = 5</span>를 푸시오” 또는 밑이 다른 로그 <span class=\"chem\">log_2 x, log_8 x</span>",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Change of base</strong> to a single common base (usually the smallest base).": "하나의 공통된 밑(보통 가장 작은 밑)으로 <strong>밑의 변환 공식</strong>을 적용해요.",

    // Question decoder: spotting which technique to use > table > td
    "Replace <span class=\"chem\">log_x 2 = 1 / log_2 x</span> and <span class=\"chem\">log_8 x = log_2 x / log_2 8 = (1/3) log_2 x</span>.": "<span class=\"chem\">log_x 2 = 1 / log_2 x</span>, <span class=\"chem\">log_8 x = log_2 x / log_2 8 = (1/3) log_2 x</span>로 바꾸세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Express <span class=\"chem\">ln(a^2 / sqrt(b))</span> in terms of <span class=\"chem\">p = ln a</span> and <span class=\"chem\">q = ln b</span>”": "“<span class=\"chem\">ln(a^2 / sqrt(b))</span>를 <span class=\"chem\">p = ln a</span>와 <span class=\"chem\">q = ln b</span>로 나타내시오”",

    // Question decoder: spotting which technique to use > table > td
    "Split products into sums, quotients into differences, and bring powers to the front.": "곱은 합으로, 나눗셈(몫)은 차로 분리하고 지수는 로그 앞으로 내리세요.",

    // Question decoder: spotting which technique to use > table > td
    "<span class=\"chem\">ln(a^2 b^{-1/2}) = 2 ln a - (1/2) ln b = 2p - (1/2)q</span>.": "<span class=\"chem\">ln(a^2 b^{-1/2}) = 2 ln a - (1/2) ln b = 2p - (1/2)q</span>예요.",

    // Question decoder: spotting which technique to use > table > th
    "“Find the constant term / term independent of <i>x</i> in <span class=\"chem\">(ax^p + b/x^q)^n</span>”": "“<span class=\"chem\">(ax^p + b/x^q)^n</span>의 전개식에서 상수항(<i>x</i>를 포함하지 않는 항)을 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "The term in the expansion where the <strong>net exponent of <i>x</i> equals 0</strong>.": "전개식에서 <strong><i>x</i>의 전체 지수가 0이 되는 항</strong>이에요.",

    // Question decoder: spotting which technique to use > table > td
    "Write <span class=\"chem\">T_{r+1} = nCr (ax^p)^{n-r}(bx^{-q})^r</span>, set the exponent <span class=\"chem\">p(n-r) - qr = 0</span> to find <span class=\"chem\">r</span>, then evaluate.": "<span class=\"chem\">T_{r+1} = nCr (ax^p)^{n-r}(bx^{-q})^r</span>을 쓰고, 지수 <span class=\"chem\">p(n-r) - qr = 0</span>에서 <span class=\"chem\">r</span>을 구한 뒤 값을 계산하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Find the coefficient of <span class=\"chem\">x^k</span> in <span class=\"chem\">(c + dx)(a + bx)^n</span>”": "“<span class=\"chem\">(c + dx)(a + bx)^n</span>의 전개식에서 <span class=\"chem\">x^k</span>의 계수를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Product of two brackets</strong>: pair <span class=\"chem\">c</span> with the <span class=\"chem\">x^k</span> term and <span class=\"chem\">dx</span> with the <span class=\"chem\">x^{k-1}</span> term.": "<strong>두 괄호의 곱</strong>: <span class=\"chem\">c</span>는 <span class=\"chem\">x^k</span> 항과, <span class=\"chem\">dx</span>는 <span class=\"chem\">x^{k-1}</span> 항과 짝지어 곱해요.",

    // Question decoder: spotting which technique to use > table > td
    "Compute <span class=\"chem\">c × [coeff of x^k] + d × [coeff of x^{k-1}]</span>. Watch signs carefully!": "<span class=\"chem\">c × [coeff of x^k] + d × [coeff of x^{k-1}]</span>을 계산하세요. 부호에 주의하세요!",

    // Laws of exponents, logarithms and change of base > data-toc attribute
    "Exponents & logs": "지수와 로그",

    // Laws of exponents, logarithms and change of base > h2
    "Laws of exponents, logarithms and change of base": "지수법칙, 로그의 성질과 밑의 변환 공식",

    // Laws of exponents, logarithms and change of base > p
    "For any positive base <span class=\"chem\">a &gt; 0</span> (<span class=\"chem\">a != 1</span>), a <dfn data-def=\"The exponent x to which the base a must be raised to produce b: log_a(b) = x ⇔ a^x = b.\">logarithm</dfn> answers the question: <em>“To what power must I raise <span class=\"chem\">a</span> to get <span class=\"chem\">b</span>?”</em>": "양수인 밑 <span class=\"chem\">a &gt; 0</span> (<span class=\"chem\">a != 1</span>)에 대하여 <dfn data-def=\"The exponent x to which the base a must be raised to produce b: log_a(b) = x ⇔ a^x = b.\">로그 <span class=\"en-term\">(logarithm)</span></dfn>는 <em>“<span class=\"chem\">a</span>를 몇 제곱해야 <span class=\"chem\">b</span>가 될까?”</em>라는 질문에 대한 답이에요.",

    // Laws of exponents, logarithms and change of base > data-def attribute
    "The exponent x to which the base a must be raised to produce b: log_a(b) = x ⇔ a^x = b.": "밑 a를 거듭제곱하여 b가 되도록 하는 지수 x: log_a(b) = x ⇔ a^x = b.",

    // Laws of exponents, logarithms and change of base > formula booklet note > p
    "<strong>Sections 1.5 and 1.7 of your Formula Booklet</strong> give the equivalence between exponents and logarithms, the three core log laws, and the change-of-base formula:": "<strong>공식집(Formula Booklet) Sections 1.5와 1.7</strong>에는 지수와 로그의 동치 관계, 세 가지 핵심 로그의 성질, 그리고 밑의 변환 공식이 수록되어 있어요:",

    // Laws of exponents, logarithms and change of base > equation > maths line
    "log<sub><i>a</i></sub> <i>x</i> = <span class=\"frac\"><span>log<sub><i>b</i></sub> <i>x</i></span><span>log<sub><i>b</i></sub> <i>a</i></span></span> (change of base)": "log<sub><i>a</i></sub> <i>x</i> = <span class=\"frac\"><span>log<sub><i>b</i></sub> <i>x</i></span><span>log<sub><i>b</i></sub> <i>a</i></span></span> (밑의 변환 공식)",

    // Laws of exponents, logarithms and change of base > p
    "Two special bases have their own shorthand: <span class=\"chem\">log x = log_{10} x</span> (common logarithm) and <span class=\"chem\">ln x = log_e x</span> (natural logarithm, where Euler’s constant <span class=\"chem\">e ≈ 2.718</span>). Also memorize the instant identities <span class=\"chem\">log_a(1) = 0</span>, <span class=\"chem\">log_a(a) = 1</span>, <span class=\"chem\">a^{log_a x} = x</span>, and <span class=\"chem\">log_b(a) = 1 / log_a(b)</span>.": "두 가지 특별한 밑은 줄여 쓰는 표기가 있어요: <span class=\"chem\">log x = log_{10} x</span> (상용로그)와 <span class=\"chem\">ln x = log_e x</span> (자연로그, 오일러 상수 <span class=\"chem\">e ≈ 2.718</span>). 또한 기본 성질 <span class=\"chem\">log_a(1) = 0</span>, <span class=\"chem\">log_a(a) = 1</span>, <span class=\"chem\">a^{log_a x} = x</span>, <span class=\"chem\">log_b(a) = 1 / log_a(b)</span>도 꼭 기억해 두세요.",

    // Laws of exponents, logarithms and change of base > widget > data-title attribute
    "Exponential & logarithm mirror + change of base": "지수·로그 대칭 및 밑의 변환",

    // Laws of exponents, logarithms and change of base > widget > figcaption
    "Vary the base <i>a</i> and exponent <i>x</i>. Because <i>y</i> = log<sub><i>a</i></sub>(<i>x</i>) is the inverse of <i>y</i> = <i>a</i><sup><i>x</i></sup>, every point <i>P</i>(<i>x</i>, <i>b</i>) on the exponential curve reflects across the line <i>y</i> = <i>x</i> to <i>P</i>′(<i>b</i>, <i>x</i>) on the logarithmic curve.": "밑 <i>a</i>와 지수 <i>x</i>를 조절해 보세요. <i>y</i> = log<sub><i>a</i></sub>(<i>x</i>)는 <i>y</i> = <i>a</i><sup><i>x</i></sup>의 역함수이므로, 지수함수 그래프 위의 모든 점 <i>P</i>(<i>x</i>, <i>b</i>)는 직선 <i>y</i> = <i>x</i>에 대하여 대칭이동해 로그함수 그래프 위의 점 <i>P</i>′(<i>b</i>, <i>x</i>)가 돼요.",

    // Laws of exponents, logarithms and change of base > common mistake > p
    "<strong>Beware of fake logarithm laws and missing domain checks:</strong><br> 1. <span class=\"chem\">log_a(x + y)</span> does <strong>not</strong> simplify! Never write <span class=\"chem\">log_a(x + y) = log_a x + log_a y</span>.<br> 2. <span class=\"chem\">(ln x)^2</span> is <span class=\"chem\">(ln x) × (ln x)</span>, whereas <span class=\"chem\">ln(x^2) = 2 ln x</span>.<br> 3. Whenever you combine <span class=\"chem\">log_a(f(x)) + log_a(g(x))</span> into <span class=\"chem\">log_a(f(x)g(x))</span>, you must test your final roots in the <strong>original</strong> equation and reject any value of <span class=\"chem\">x</span> that makes <span class=\"chem\">f(x) &lt;= 0</span> or <span class=\"chem\">g(x) &lt;= 0</span>.": "<strong>잘못된 로그 성질과 진수 조건 누락을 조심하세요:</strong><br> 1. <span class=\"chem\">log_a(x + y)</span>는 <strong>더 간단히 정리되지 않아요!</strong> 절대 <span class=\"chem\">log_a(x + y) = log_a x + log_a y</span>라고 쓰지 마세요.<br> 2. <span class=\"chem\">(ln x)^2</span>은 <span class=\"chem\">(ln x) × (ln x)</span>이고, <span class=\"chem\">ln(x^2) = 2 ln x</span>와 달라요.<br> 3. <span class=\"chem\">log_a(f(x)) + log_a(g(x))</span>를 <span class=\"chem\">log_a(f(x)g(x))</span>로 합쳤을 때는 반드시 구한 해를 <strong>원래 방정식</strong>에 대입해 보고, <span class=\"chem\">f(x) &lt;= 0</span> 또는 <span class=\"chem\">g(x) &lt;= 0</span>이 되는 <span class=\"chem\">x</span> 값은 제외해야 해요.",

    // Laws of exponents, logarithms and change of base > worked example > h3
    "Solving a logarithmic equation with different bases": "밑이 다른 로그방정식 풀기",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Solve the equation <span class=\"chem\">log_2(x) + log_x(8) = 4</span> for <span class=\"chem\">x</span>. <strong>[5 marks]</strong>": "방정식 <span class=\"chem\">log_2(x) + log_x(8) = 4</span>를 <span class=\"chem\">x</span>에 대하여 푸시오. <strong>[5 marks]</strong>",

    // Laws of exponents, logarithms and change of base > worked example > data-title attribute
    "Change the base of log_x(8) to base 2": "log_x(8)의 밑을 2로 변환하기",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Both logarithms must share the same base before we can solve algebraically.": "대수적으로 풀려면 먼저 두 로그의 밑을 같게 만들어야 해요.",

    // Laws of exponents, logarithms and change of base > worked example > data-title attribute
    "Substitute u = log₂(x) and solve the quadratic": "u = log₂(x)로 치환하여 이차방정식 풀기",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Multiplying through by u clears the fraction and gives a factorable quadratic.": "양변에 u를 곱해 분모를 없애면 인수분해되는 이차방정식이 나와요.",

    // Laws of exponents, logarithms and change of base > worked example > data-title attribute
    "Convert back from u = log₂(x) to x": "u = log₂(x)에서 다시 x 구하기",

    // Laws of exponents, logarithms and change of base > worked example > p
    "Use log₂(x) = u ⇔ x = 2^u for each root.": "각 근에 대하여 log₂(x) = u ⇔ x = 2^u를 적용하세요.",

    // Laws of exponents, logarithms and change of base > worked example > maths line
    "log<sub>2</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 2, or log<sub>2</sub>(<i>x</i>) = 3 ⇒ <i>x</i> = 2<sup>3</sup> = 8 <b>[A1]</b>": "log<sub>2</sub>(<i>x</i>) = 1 ⇒ <i>x</i> = 2, 또는 log<sub>2</sub>(<i>x</i>) = 3 ⇒ <i>x</i> = 2<sup>3</sup> = 8 <b>[A1]</b>",

    // Laws of exponents, logarithms and change of base > worked example > p
    "x = 2 or x = 8": "x = 2 또는 x = 8",

    // Laws of exponents, logarithms and change of base > try it > p
    "Solve <span class=\"chem\">log_2(x) + 4 log_x(2) = 5</span> and enter the <strong>larger</strong> of the two solutions for <span class=\"chem\">x</span>.": "<span class=\"chem\">log_2(x) + 4 log_x(2) = 5</span>를 풀고, 두 해 중 <strong>더 큰</strong> <span class=\"chem\">x</span>의 값을 입력하시오.",

    // Laws of exponents, logarithms and change of base > try it > li
    "Rewrite <span class=\"chem\">log_x(2) = 1 / log_2(x)</span> and let <span class=\"chem\">u = log_2(x)</span>.": "<span class=\"chem\">log_x(2) = 1 / log_2(x)</span>로 고쳐 쓰고 <span class=\"chem\">u = log_2(x)</span>로 치환하세요.",

    // Laws of exponents, logarithms and change of base > try it > li
    "Solve <span class=\"chem\">u^2 - 5u + 4 = 0</span> to get <span class=\"chem\">u = 1</span> or <span class=\"chem\">u = 4</span>, then compute <span class=\"chem\">x = 2^u</span>.": "<span class=\"chem\">u^2 - 5u + 4 = 0</span>을 풀어 <span class=\"chem\">u = 1</span> 또는 <span class=\"chem\">u = 4</span>를 구한 뒤, <span class=\"chem\">x = 2^u</span>를 계산하세요.",

    // Laws of exponents, logarithms and change of base > try it > maths line
    "<i>u</i> + 4/<i>u</i> = 5 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 ⇒ <i>u</i> = 1 or <i>u</i> = 4": "<i>u</i> + 4/<i>u</i> = 5 ⇒ (<i>u</i> − 1)(<i>u</i> − 4) = 0 ⇒ <i>u</i> = 1 또는 <i>u</i> = 4",

    // Laws of exponents, logarithms and change of base > try it > maths line
    "<i>x</i> = 2<sup>1</sup> = 2 or <i>x</i> = 2<sup>4</sup> = <b>16</b>": "<i>x</i> = 2<sup>1</sup> = 2 또는 <i>x</i> = 2<sup>4</sup> = <b>16</b>",

    // Laws of exponents, logarithms and change of base > data-title attribute
    "Exponents & logarithms: quick check": "지수와 로그: 빠른 확인",

    // The binomial theorem for positive integers > data-toc attribute
    "Binomial theorem": "이항정리",

    // The binomial theorem for positive integers > h2
    "The binomial theorem for positive integers": "자연수 지수에 대한 이항정리",

    // The binomial theorem for positive integers > p
    "When a positive integer power <span class=\"chem\">(a + b)^n</span> is expanded, there are <span class=\"chem\">n + 1</span> terms. As you move from left to right across the expansion, the power of <span class=\"chem\">a</span> steps down from <span class=\"chem\">n</span> to <span class=\"chem\">0</span>, the power of <span class=\"chem\">b</span> steps up from <span class=\"chem\">0</span> to <span class=\"chem\">n</span> (so the two exponents always add up to <span class=\"chem\">n</span>), and the coefficients come from the <span class=\"chem\">n</span>-th row of <dfn data-def=\"A triangular array of binomial coefficients nCr where each entry is the sum of the two entries directly above it.\">Pascal’s triangle</dfn> or the combination formula <span class=\"chem\">nCr</span>.": "양의 정수 지수 <span class=\"chem\">(a + b)^n</span>을 전개하면 총 <span class=\"chem\">n + 1</span>개의 항이 나와요. 왼쪽에서 오른쪽으로 갈수록 <span class=\"chem\">a</span>의 지수는 <span class=\"chem\">n</span>에서 <span class=\"chem\">0</span>으로 1씩 줄어들고, <span class=\"chem\">b</span>의 지수는 <span class=\"chem\">0</span>에서 <span class=\"chem\">n</span>으로 1씩 늘어나며(두 지수의 합은 항상 <span class=\"chem\">n</span>), 계수는 <dfn data-def=\"A triangular array of binomial coefficients nCr where each entry is the sum of the two entries directly above it.\">파스칼의 삼각형 <span class=\"en-term\">(Pascal’s triangle)</span></dfn>의 <span class=\"chem\">n</span>번째 행 또는 조합 <span class=\"chem\">nCr</span>에서 얻어져요.",

    // The binomial theorem for positive integers > data-def attribute
    "A triangular array of binomial coefficients nCr where each entry is the sum of the two entries directly above it.": "각 항이 바로 위 두 항의 합으로 이루어지며 이항계수 nCr을 삼각형 모양으로 배열한 것.",

    // The binomial theorem for positive integers > formula booklet note > p
    "<strong>Section 1.9 of your Formula Booklet</strong> gives the binomial expansion and the combination formula:": "<strong>공식집(Formula Booklet) Section 1.9</strong>에는 이항전개 공식과 조합 공식이 수록되어 있어요:",

    // The binomial theorem for positive integers > equation > dd
    "positive integer power (<span class=\"chem\">n</span> ∈ ℤ<sup>+</sup>)": "양의 정수 지수 (<span class=\"chem\">n</span> ∈ ℤ<sup>+</sup>)",

    // The binomial theorem for positive integers > equation > dd
    "term index running from <span class=\"chem\">r = 0</span> to <span class=\"chem\">r = n</span>": "<span class=\"chem\">r = 0</span>부터 <span class=\"chem\">r = n</span>까지 변하는 항 번호",

    // The binomial theorem for positive integers > equation > dt
    "T<sub>r+1</sub>": "T<sub>r+1</sub>",

    // The binomial theorem for positive integers > equation > dd
    "general <span class=\"chem\">(r + 1)</span>-th term of the expansion": "전개식의 일반항 (제<span class=\"chem\">(r + 1)</span>항)",

    // The binomial theorem for positive integers > key idea > p
    "<strong>How to isolate any target term without expanding the whole bracket:</strong><br> 1. Write down the general term <span class=\"chem\">T_{r+1} = nCr (a)^{n-r} (b)^r</span>, enclosing the entire second term (including its minus sign and fractional power of <span class=\"chem\">x</span>) inside <span class=\"chem\">(b)^r</span>.<br> 2. Separate the numerical factors from the powers of <span class=\"chem\">x</span>.<br> 3. Set the combined exponent of <span class=\"chem\">x</span> equal to the target power (or <span class=\"chem\">0</span> for the constant term), solve for <span class=\"chem\">r</span>, and substitute <span class=\"chem\">r</span> back in.": "<strong>괄호 전체를 전개하지 않고 원하는 항만 뽑아내는 방법:</strong><br> 1. 일반항 <span class=\"chem\">T_{r+1} = nCr (a)^{n-r} (b)^r</span>을 적어요. 이때 두 번째 항 전체(음의 부호와 <span class=\"chem\">x</span>의 음수/분수 지수 포함)를 <span class=\"chem\">(b)^r</span> 안에 통째로 넣으세요.<br> 2. 수 계수 부분과 <span class=\"chem\">x</span>의 거듭제곱 부분을 분리해요.<br> 3. 정리한 <span class=\"chem\">x</span>의 지수를 목표 차수(상수항이면 <span class=\"chem\">0</span>)와 같다고 놓고 <span class=\"chem\">r</span>을 구한 뒤 <span class=\"chem\">r</span>을 다시 대입하세요.",

    // The binomial theorem for positive integers > widget > data-title attribute
    "Binomial general term finder & Pascal row explorer": "이항전개 일반항 찾기 및 파스칼 행 탐색기",

    // The binomial theorem for positive integers > widget > figcaption
    "Select a binomial expression and slide <i>r</i> from 0 to <i>n</i>. Watch how the powers of <i>x</i> from <i>a</i><sup><i>n</i>−<i>r</i></sup> and <i>b</i><sup><i>r</i></sup> combine, cancelling to <i>x</i><sup>0</sup> at the constant term.": "이항식을 선택하고 <i>r</i>을 0부터 <i>n</i>까지 움직여 보세요. <i>a</i><sup><i>n</i>−<i>r</i></sup>과 <i>b</i><sup><i>r</i></sup>에서 나온 <i>x</i>의 거듭제곱이 합쳐져 상수항에서 <i>x</i><sup>0</sup>으로 상쇄되는 과정을 확인할 수 있어요.",

    // The binomial theorem for positive integers > worked example > h3
    "Finding the constant term in a binomial with a reciprocal term": "분수 항이 포함된 이항식의 상수항 구하기",

    // The binomial theorem for positive integers > worked example > p
    "Find the constant term in the expansion of <span class=\"chem\">(3x - 2/x^2)^6</span>. <strong>[5 marks]</strong>": "<span class=\"chem\">(3x - 2/x^2)^6</span>의 전개식에서 상수항을 구하시오 (Find). <strong>[5 marks]</strong>",

    // The binomial theorem for positive integers > worked example > data-title attribute
    "Write the general term T_{r+1} and separate coefficients from powers of x": "일반항 T_{r+1}을 쓰고 계수와 x의 거듭제곱 분리하기",

    // The binomial theorem for positive integers > worked example > p
    "Rewrite −2/x² as −2x⁻² so all powers of x can be combined using exponent laws.": "지수법칙으로 x의 거듭제곱을 합칠 수 있도록 −2/x²을 −2x⁻²로 고쳐 써요.",

    // The binomial theorem for positive integers > worked example > data-title attribute
    "Set the net power of x equal to 0 to find r": "x의 전체 지수를 0으로 놓고 r 구하기",

    // The binomial theorem for positive integers > worked example > p
    "A constant term is independent of x, meaning its exponent on x is 0.": "상수항은 x를 포함하지 않는 항이므로 x의 지수가 0이에요.",

    // The binomial theorem for positive integers > worked example > data-title attribute
    "Substitute r = 2 into the numerical coefficient": "수 계수에 r = 2 대입하기",

    // The binomial theorem for positive integers > worked example > p
    "Compute ⁶C₂, 3⁴, and (−2)² carefully.": "⁶C₂, 3⁴, (−2)²을 차근차근 계산하세요.",

    // The binomial theorem for positive integers > try it > p
    "Find the constant term in the expansion of <span class=\"chem\">(3x - 1/x^2)^6</span>.": "<span class=\"chem\">(3x - 1/x^2)^6</span>의 전개식에서 상수항을 구하시오 (Find).",

    // The binomial theorem for positive integers > try it > li
    "As in the worked example above, the power of <span class=\"chem\">x</span> is <span class=\"chem\">x^{6-3r}</span>, so the constant term occurs at <span class=\"chem\">r = 2</span>.": "위 예제와 마찬가지로 <span class=\"chem\">x</span>의 거듭제곱은 <span class=\"chem\">x^{6-3r}</span>이므로 상수항은 <span class=\"chem\">r = 2</span>일 때 나와요.",

    // The binomial theorem for positive integers > try it > li
    "Evaluate <span class=\"chem\">6C2 × (3)^{6-2} × (-1)^2</span>.": "<span class=\"chem\">6C2 × (3)^{6-2} × (-1)^2</span>을 계산하세요.",

    // The binomial theorem for positive integers > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> You do <strong>not</strong> need the multinomial theorem for <span class=\"chem\">(a + b + c)^n</span> using <span class=\"chem\">n! / (i! j! k!)</span>. Negative and fractional exponents <span class=\"chem\">(a + bx)^n</span> for <span class=\"chem\">n</span> ∈ ℚ are Additional HL content covered on the next page (<a href=\"t1-3.html\">Topic 1.3</a>).": "<strong>IB 시험 범위 외 내용:</strong> <span class=\"chem\">n! / (i! j! k!)</span>를 사용하는 다항정리 <span class=\"chem\">(a + b + c)^n</span>은 <strong>필요하지 않아요</strong>. 유리수 지수(<span class=\"chem\">n</span> ∈ ℚ, 음수·분수)에 대한 <span class=\"chem\">(a + bx)^n</span>의 전개는 추가 HL(AHL) 내용으로 다음 페이지(<a href=\"t1-3.html\">Topic 1.3</a>)에서 다뤄요.",

    // The binomial theorem for positive integers > data-title attribute
    "Binomial theorem & mixed exam practice": "이항정리 및 종합 시험 연습",

    // widget string (assets/js/widgets-t1-2.js)
    "Base a": "밑 a",

    // widget string (assets/js/widgets-t1-2.js)
    "Exponent x (so b = a^x)": "지수 x (b = a^x)",

    // widget string (assets/js/widgets-t1-2.js)
    "Exponential form": "지수 꼴",

    // widget string (assets/js/widgets-t1-2.js)
    "Logarithmic form": "로그 꼴",

    // widget string (assets/js/widgets-t1-2.js)
    "Change of base (ln b / ln a)": "밑의 변환 (ln b / ln a)",

    // widget string (assets/js/widgets-t1-2.js)
    "Inverse reflection of y = a^x and y = log_a(x) across y = x": "직선 y = x에 대한 y = a^x와 y = log_a(x)의 역함수 대칭",

    // widget string (assets/js/widgets-t1-2.js)
    "y = a^x": "y = a^x",

    // widget string (assets/js/widgets-t1-2.js)
    "y = log_a(x)": "y = log_a(x)",

    // widget string (assets/js/widgets-t1-2.js)
    "Binomial expression": "이항식",

    // widget string (assets/js/widgets-t1-2.js)
    "Term index r (for T_{r+1})": "항 번호 r (T_{r+1} 기준)",

    // widget string (assets/js/widgets-t1-2.js)
    "General term T_{r+1}": "일반항 T_{r+1}",

    // widget string (assets/js/widgets-t1-2.js)
    "Net power of x": "x의 전체 지수",

    // widget string (assets/js/widgets-t1-2.js)
    "Evaluated term": "계산된 항",

    // widget string (assets/js/widgets-t1-2.js)
    "Constant term!": "상수항!",

    // widget string (assets/js/widgets-t1-2.js)
    "Pascal row n = {n} and all {m} terms:": "파스칼 삼각형 n = {n}행과 전체 {m}개 항:",

    // widget string (assets/js/widgets-t1-2.js)
    "Constant (x⁰)": "상수항 (x⁰)",

  }
});
