/* t2-3 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't2-3', {
  strings: {

    // page title (browser tab)
    "2.3 Transformations, polynomials and modulus functions | Analysis Lab": "2.3 그래프의 변환, 다항식과 절댓값 함수 | Analysis Lab",

    // Transformations, polynomials and modulus functions > page header > p
    "Topic 2.3 · SL 2.11 + AHL 2.12–2.16": "Topic 2.3 · SL 2.11 + AHL 2.12–2.16",

    // Transformations, polynomials and modulus functions > page header > h1
    "Transformations, polynomials and modulus functions": "그래프의 변환, 다항식과 절댓값 함수",

    // Transformations, polynomials and modulus functions > page header > span
    "How can we transform any graph systematically, extract polynomial roots and symmetries without expanding everything, and solve rational and modulus inequalities without losing solutions?": "임의의 그래프를 체계적으로 변환하고, 식을 다 전개하지 않고도 다항식의 근과 대칭성을 찾아내며, 해를 빠뜨리지 않고 유리부등식과 절댓값 부등식을 푸는 방법은 무엇일까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > checklist > span
    "Apply translations, reflections, and vertical/horizontal stretches—including composite transformations <span class=\"chem\">y = a f(b(x - h)) + k</span>—in the correct order and track key coordinates.": "평행이동, 대칭이동, 수직/수평 확대·축소(합성 변환 <span class=\"chem\">y = a f(b(x - h)) + k</span> 포함)를 올바른 순서로 적용하고 주요 좌표를 추적할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Use the Remainder Theorem (<span class=\"chem\">P(b/a)</span>) and Factor Theorem (<span class=\"chem\">P(k) = 0</span>) to factorise polynomials and find unknown coefficients.": "나머지정리(<span class=\"chem\">P(b/a)</span>)와 인수정리(<span class=\"chem\">P(k) = 0</span>)를 이용해 다항식을 인수분해하고 미지계수를 구할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Use Vieta's formulas for the sum and product of polynomial roots to evaluate symmetric expressions like <span class=\"chem\">alpha^2 + beta^2</span> without solving for individual roots.": "근과 계수의 관계(비에타의 공식)를 이용해 근을 직접 구하지 않고도 <span class=\"chem\">alpha^2 + beta^2</span> 같은 대칭식의 값을 계산할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Sketch rational functions <span class=\"chem\">(ax + b)/(cx^2 + dx + e)</span> and <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span>, finding vertical, horizontal, and oblique asymptotes via polynomial division.": "유리함수 <span class=\"chem\">(ax + b)/(cx^2 + dx + e)</span>와 <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span>의 그래프를 그리고, 다항식의 나눗셈을 통해 수직·수평·사선점근선을 구할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Test for even (<span class=\"chem\">f(-x) = f(x)</span>), odd (<span class=\"chem\">f(-x) = -f(x)</span>), and self-inverse (<span class=\"chem\">f(f(x)) = x</span>) functions, and restrict a domain at a turning point so <span class=\"chem\">f^{-1}</span> exists.": "짝함수(<span class=\"chem\">f(-x) = f(x)</span>), 홀함수(<span class=\"chem\">f(-x) = -f(x)</span>), 자기자신이 역함수인 함수(<span class=\"chem\">f(f(x)) = x</span>)를 판별하고, <span class=\"chem\">f^{-1}</span>가 존재하도록 극값에서 정의역을 제한할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Sketch <span class=\"chem\">y = |f(x)|</span>, <span class=\"chem\">y = f(|x|)</span>, <span class=\"chem\">y = 1/f(x)</span>, and <span class=\"chem\">y = [f(x)]^2</span>, and solve polynomial, rational, and modulus inequalities analytically and graphically.": "<span class=\"chem\">y = |f(x)|</span>, <span class=\"chem\">y = f(|x|)</span>, <span class=\"chem\">y = 1/f(x)</span>, <span class=\"chem\">y = [f(x)]^2</span>의 그래프를 그리고, 다항·유리·절댓값 부등식을 대수적·그래프적으로 풀 수 있어요.",

    // Question decoder: spotting transformation, polynomial &amp;  > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting transformation, polynomial &amp;  > h2
    "Question decoder: spotting transformation, polynomial &amp; inequality cues": "문제 디코더: 변환, 다항식 및 부등식 단서 찾기",

    // Question decoder: spotting transformation, polynomial &amp;  > p
    "Exam questions in Topic 2.3 reward students who spot the algebraic shortcut immediately—especially when the question forbids finding roots explicitly or hides an asymptote inside an improper fraction.": "Topic 2.3 시험 문제는 대수적 지름길을 바로 알아보는 학생에게 유리해요—특히 근을 직접 구하지 말라고 하거나 가분수 꼴 안에 점근선을 숨겨 둔 문제에서요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > caption
    "Question decoder — Transformations, polynomials, rational functions &amp; modulus": "문제 디코더 — 그래프 변환, 다항식, 유리함수와 절댓값",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Describe the sequence of transformations from <span class=\"chem\">f(x)</span> to <span class=\"chem\">a f(bx + c) + d</span>”": "“<span class=\"chem\">f(x)</span>에서 <span class=\"chem\">a f(bx + c) + d</span>로 가는 변환의 순서를 설명하시오”",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Factor inside <span class=\"chem\">f</span> first: <span class=\"chem\">a f(b(x + c/b)) + d</span>. Horizontal stretch by <span class=\"chem\">1/b</span> <strong>then</strong> shift by <span class=\"chem\">-c/b</span>; vertical stretch by <span class=\"chem\">a</span> <strong>then</strong> shift by <span class=\"chem\">d</span>.": "먼저 <span class=\"chem\">f</span> 안을 묶어 <span class=\"chem\">a f(b(x + c/b)) + d</span>로 쓰세요. <span class=\"chem\">1/b</span>배 수평 확대·축소 <strong>후</strong> <span class=\"chem\">-c/b</span>만큼 평행이동; <span class=\"chem\">a</span>배 수직 확대·축소 <strong>후</strong> <span class=\"chem\">d</span>만큼 평행이동이에요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Check any point <span class=\"chem\">(x_0, y_0)</span> using coordinate tracking: <span class=\"chem\">x_new = (x_0 - c)/b</span> and <span class=\"chem\">y_new = a y_0 + d</span>.": "좌표 추적으로 임의의 점 <span class=\"chem\">(x_0, y_0)</span>을 확인하세요: <span class=\"chem\">x_new = (x_0 - c)/b</span>이고 <span class=\"chem\">y_new = a y_0 + d</span>예요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“<span class=\"chem\">P(x)</span> is divisible by <span class=\"chem\">(x - k)</span>” / “<span class=\"chem\">(x - k)</span> is a factor of <span class=\"chem\">P(x)</span>”": "“<span class=\"chem\">P(x)</span>가 <span class=\"chem\">(x - k)</span>로 나누어떨어진다” / “<span class=\"chem\">(x - k)</span>는 <span class=\"chem\">P(x)</span>의 인수이다”",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Apply the <strong>Factor Theorem</strong>: set <strong><span class=\"chem\">P(k) = 0</span></strong>.": "<strong>인수정리(Factor Theorem)</strong>를 적용하여 <strong><span class=\"chem\">P(k) = 0</span></strong>으로 두세요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Substitute <span class=\"chem\">x = k</span> directly into <span class=\"chem\">P(x)</span>—much faster than polynomial long division.": "<span class=\"chem\">P(x)</span>에 <span class=\"chem\">x = k</span>를 바로 대입하세요—다항식 나눗셈보다 훨씬 빨라요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find the remainder when <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(ax - b)</span>”": "“<span class=\"chem\">P(x)</span>를 <span class=\"chem\">(ax - b)</span>로 나눈 나머지를 구하시오”",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Apply the <strong>Remainder Theorem</strong>: remainder is <strong><span class=\"chem\">P(b/a)</span></strong>.": "<strong>나머지정리(Remainder Theorem)</strong>를 적용하면 나머지는 <strong><span class=\"chem\">P(b/a)</span></strong>예요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "If divided by a quadratic <span class=\"chem\">(x - p)(x - q)</span>, write <span class=\"chem\">P(x) = Q(x)(x - p)(x - q) + mx + c</span> and plug in <span class=\"chem\">x = p</span> and <span class=\"chem\">x = q</span>.": "이차식 <span class=\"chem\">(x - p)(x - q)</span>로 나눌 때는 <span class=\"chem\">P(x) = Q(x)(x - p)(x - q) + mx + c</span>로 쓰고 <span class=\"chem\">x = p</span>와 <span class=\"chem\">x = q</span>를 대입하세요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find <span class=\"chem\">alpha^2 + beta^2</span> (or <span class=\"chem\">1/alpha + 1/beta</span>) without finding the roots”": "“근을 구하지 않고 <span class=\"chem\">alpha^2 + beta^2</span> (또는 <span class=\"chem\">1/alpha + 1/beta</span>)을 구하시오”",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Use <strong>Vieta's formulas</strong> for <span class=\"chem\">alpha + beta = -b/a</span> and <span class=\"chem\">alpha beta = c/a</span>, then rewrite <span class=\"chem\">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>.": "<strong>근과 계수의 관계</strong> <span class=\"chem\">alpha + beta = -b/a</span>, <span class=\"chem\">alpha beta = c/a</span>를 이용해 <span class=\"chem\">alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta</span>로 변형하세요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "For cubics, use <span class=\"chem\">sum alpha = -a_2/a_3</span>, <span class=\"chem\">sum alpha beta = a_1/a_3</span>, <span class=\"chem\">alpha beta gamma = -a_0/a_3</span>.": "삼차방정식에서는 <span class=\"chem\">sum alpha = -a_2/a_3</span>, <span class=\"chem\">sum alpha beta = a_1/a_3</span>, <span class=\"chem\">alpha beta gamma = -a_0/a_3</span>을 사용하세요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find the equation of the oblique asymptote of <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span>”": "“<span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span>의 사선점근선의 방정식을 구하시오”",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Divide numerator by denominator: <span class=\"chem\">f(x) = mx + k + R/(dx + e)</span>. As <span class=\"chem\">x -&gt; +-infty</span>, remainder <span class=\"chem\">-&gt; 0</span>.": "분자를 분모로 나누세요: <span class=\"chem\">f(x) = mx + k + R/(dx + e)</span>. <span class=\"chem\">x -&gt; +-infty</span>일 때 나머지 항은 <span class=\"chem\">-&gt; 0</span>이 돼요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "The oblique asymptote is the linear quotient <strong><span class=\"chem\">y = mx + k</span></strong> (must be written as <span class=\"chem\">y = …</span>).": "사선점근선은 일차식 몫인 <strong><span class=\"chem\">y = mx + k</span></strong>예요 (반드시 <span class=\"chem\">y = …</span> 방정식 형태로 쓰세요).",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Find the largest domain containing <span class=\"chem\">x = a</span> for which <span class=\"chem\">f^{-1}</span> exists”": "“<span class=\"chem\">f^{-1}</span>가 존재하도록 <span class=\"chem\">x = a</span>를 포함하는 가장 큰 정의역을 구하시오”",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "<span class=\"chem\">f</span> must be <strong>one-to-one</strong>: cut the domain at the turning point where <strong><span class=\"chem\">f'(x) = 0</span></strong> (or vertex).": "<span class=\"chem\">f</span>는 <strong>일대일함수</strong>여야 하므로 <strong><span class=\"chem\">f'(x) = 0</span></strong>인 극값(또는 꼭짓점)에서 정의역을 자르세요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "On Paper 2, find the local max/min on the GDC; pick the branch around <span class=\"chem\">x = a</span> up to the turning point.": "Paper 2에서는 GDC로 극댓값/극솟값을 찾은 뒤, <span class=\"chem\">x = a</span>가 속한 극점까지의 구간을 선택하세요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Sketch <span class=\"chem\">|f(x)|</span> vs <span class=\"chem\">f(|x|)</span> vs <span class=\"chem\">1/f(x)</span>”": "“<span class=\"chem\">|f(x)|</span> vs <span class=\"chem\">f(|x|)</span> vs <span class=\"chem\">1/f(x)</span>의 개형을 그리시오”",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "<span class=\"chem\">|f(x)|</span>: reflect <span class=\"chem\">y &lt; 0</span> up. <span class=\"chem\">f(|x|)</span>: copy <span class=\"chem\">x &gt;= 0</span> to <span class=\"chem\">x &lt; 0</span>. <span class=\"chem\">1/f(x)</span>: roots <span class=\"chem\">-&gt;</span> VAs, <span class=\"chem\">y = +-1</span> invariant.": "<span class=\"chem\">|f(x)|</span>: <span class=\"chem\">y &lt; 0</span> 부분을 위로 꺾어 올림. <span class=\"chem\">f(|x|)</span>: <span class=\"chem\">x &gt;= 0</span> 부분을 <span class=\"chem\">x &lt; 0</span>에 대칭 복사. <span class=\"chem\">1/f(x)</span>: 근 <span class=\"chem\">-&gt;</span> 수직점근선, <span class=\"chem\">y = +-1</span> 고정.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Always label <span class=\"chem\">x</span>-intercepts, cusps, asymptotes, and reciprocal extrema <span class=\"chem\">(a, 1/M)</span>.": "항상 <span class=\"chem\">x</span>절편, 뾰족점(첨점), 점근선, 역수 극값 <span class=\"chem\">(a, 1/M)</span>을 표시하세요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > th
    "“Solve <span class=\"chem\">(ax + b)/(cx + d) &gt;= k</span>” or “<span class=\"chem\">|2x - 1| &lt; |x + 3|</span>”": "“<span class=\"chem\">(ax + b)/(cx + d) &gt;= k</span>” 또는 “<span class=\"chem\">|2x - 1| &lt; |x + 3|</span>”을 푸시오",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "Rational: subtract <span class=\"chem\">k</span> to one side, combine into one fraction, use a sign diagram. Two moduli: square both sides.": "유리부등식: <span class=\"chem\">k</span>를 이항해 통분한 뒤 부호표 사용. 양변 절댓값: 양변을 제곱하세요.",

    // Question decoder: spotting transformation, polynomial &amp;  > table > td
    "<strong>Never cross-multiply</strong> by <span class=\"chem\">(cx + d)</span>! On Paper 2, check your intervals against a GDC plot.": "절대로 <span class=\"chem\">(cx + d)</span>를 <strong>양변에 그대로 곱하지 마세요</strong>! Paper 2에서는 GDC 그래프로 구간을 확인하세요.",

    // Graph transformations and composite order > data-toc attribute
    "Transformations": "그래프의 변환",

    // Graph transformations and composite order > h2
    "Graph transformations and composite order": "그래프의 변환과 합성 변환의 순서",

    // Graph transformations and composite order > p
    "Every transformation of <span class=\"chem\">y = f(x)</span> belongs to one of two independent worlds: <strong>vertical</strong> changes (outside <span class=\"chem\">f</span>, affecting <span class=\"chem\">y</span> directly) and <strong>horizontal</strong> changes (inside <span class=\"chem\">f</span>, affecting <span class=\"chem\">x</span> in the opposite direction).": "<span class=\"chem\">y = f(x)</span>의 모든 변환은 서로 독립인 두 세계로 나뉘어요: <strong>수직</strong> 변화(<span class=\"chem\">f</span> 바깥쪽에서 <span class=\"chem\">y</span>에 직접 작용)와 <strong>수평</strong> 변화(<span class=\"chem\">f</span> 안쪽에서 <span class=\"chem\">x</span>에 반대 방향으로 작용)예요.",

    // Graph transformations and composite order > table > caption
    "Core graph transformations (SL 2.11)": "핵심 그래프 변환 (SL 2.11)",

    // Graph transformations and composite order > table > th
    "Equation": "방정식",

    // Graph transformations and composite order > table > th
    "Geometric transformation": "기하학적 변환",

    // Graph transformations and composite order > table > th
    "Effect on point <span class=\"chem\">(x_0, y_0)</span>": "점 <span class=\"chem\">(x_0, y_0)</span>에 미치는 영향",

    // Graph transformations and composite order > table > td
    "Vertical translation by vector <span class=\"chem\">(0, k)</span>": "벡터 <span class=\"chem\">(0, k)</span>만큼 수직 평행이동",

    // Graph transformations and composite order > table > td
    "Horizontal translation by vector <span class=\"chem\">(h, 0)</span> (<span class=\"chem\">h &gt; 0</span> moves right)": "벡터 <span class=\"chem\">(h, 0)</span>만큼 수평 평행이동 (<span class=\"chem\">h &gt; 0</span>이면 오른쪽)",

    // Graph transformations and composite order > table > td
    "Reflection in the <span class=\"chem\">x</span>-axis": "<span class=\"chem\">x</span>축 대칭이동",

    // Graph transformations and composite order > table > td
    "Reflection in the <span class=\"chem\">y</span>-axis": "<span class=\"chem\">y</span>축 대칭이동",

    // Graph transformations and composite order > table > td
    "Vertical stretch of scale factor <span class=\"chem\">|a|</span> (plus <span class=\"chem\">x</span>-axis reflection if <span class=\"chem\">a &lt; 0</span>)": "배율 <span class=\"chem\">|a|</span>의 수직 확대·축소 (<span class=\"chem\">a &lt; 0</span>이면 <span class=\"chem\">x</span>축 대칭 포함)",

    // Graph transformations and composite order > table > th
    "<span class=\"chem\">y = f(bx)</span>": "<span class=\"chem\">y = f(bx)</span>",

    // Graph transformations and composite order > table > td
    "Horizontal stretch of scale factor <span class=\"chem\">1/|b|</span> (plus <span class=\"chem\">y</span>-axis reflection if <span class=\"chem\">b &lt; 0</span>)": "배율 <span class=\"chem\">1/|b|</span>의 수평 확대·축소 (<span class=\"chem\">b &lt; 0</span>이면 <span class=\"chem\">y</span>축 대칭 포함)",

    // Graph transformations and composite order > h3
    "Composite transformations: why order matters": "합성 변환: 순서가 중요한 이유",

    // Graph transformations and composite order > p
    "When both a stretch and a translation act in the same direction—for example, <span class=\"chem\">y = a f(bx + c) + d</span>—the safest method is to <strong>factor <span class=\"chem\">b</span> out inside the bracket first</strong>:": "같은 방향으로 확대·축소와 평행이동이 함께 작용할 때—예를 들어 <span class=\"chem\">y = a f(bx + c) + d</span>—가장 안전한 방법은 <strong>먼저 괄호 안에서 <span class=\"chem\">b</span>를 묶어 내는 것</strong>이에요:",

    // Graph transformations and composite order > equation > dt
    "Factored horizontal order": "묶어 낸 수평 변환 순서",

    // Graph transformations and composite order > equation > dd
    "1. Horizontal stretch by factor <span class=\"chem\">1/b</span> (and reflect in <span class=\"chem\">y</span>-axis if <span class=\"chem\">b &lt; 0</span>), <strong>then</strong> 2. Horizontal shift by <span class=\"chem\">h</span>.": "1. 배율 <span class=\"chem\">1/b</span>로 수평 확대·축소 (<span class=\"chem\">b &lt; 0</span>이면 <span class=\"chem\">y</span>축 대칭), <strong>그다음</strong> 2. <span class=\"chem\">h</span>만큼 수평 평행이동.",

    // Graph transformations and composite order > equation > dt
    "Vertical order": "수직 변환 순서",

    // Graph transformations and composite order > equation > dd
    "1. Vertical stretch by factor <span class=\"chem\">a</span> (and reflect in <span class=\"chem\">x</span>-axis if <span class=\"chem\">a &lt; 0</span>), <strong>then</strong> 2. Vertical shift by <span class=\"chem\">k</span>.": "1. 배율 <span class=\"chem\">a</span>로 수직 확대·축소 (<span class=\"chem\">a &lt; 0</span>이면 <span class=\"chem\">x</span>축 대칭), <strong>그다음</strong> 2. <span class=\"chem\">k</span>만큼 수직 평행이동.",

    // Graph transformations and composite order > equation > dt
    "Unfactored <span class=\"chem\">f(bx + c)</span>": "묶지 않은 <span class=\"chem\">f(bx + c)</span>",

    // Graph transformations and composite order > equation > dd
    "If you do <em>not</em> factor out <span class=\"chem\">b</span>, you must shift by <span class=\"chem\">-c</span> <strong>first</strong>, then stretch by <span class=\"chem\">1/b</span> (since <span class=\"chem\">x_new = (x_0 - c)/b</span>).": "만약 <span class=\"chem\">b</span>를 묶어 내지 <em>않는다면</em>, <strong>먼저</strong> <span class=\"chem\">-c</span>만큼 평행이동한 뒤 <span class=\"chem\">1/b</span>배 확대·축소해야 해요 (<span class=\"chem\">x_new = (x_0 - c)/b</span>이기 때문이에요).",

    // Graph transformations and composite order > common mistake > p
    "<strong>Common mistake — Wrong horizontal shift in <span class=\"chem\">f(2x - 6)</span>:</strong> Students often see <span class=\"chem\">- 6</span> and state a translation of <span class=\"chem\">6</span> units right after stretching by <span class=\"chem\">1/2</span>. Always factor first: <span class=\"chem\">f(2x - 6) = f(2(x - 3))</span>, so the translation is <strong><span class=\"chem\">3</span> units right</strong>, not <span class=\"chem\">6</span>!": "<strong>자주 하는 실수 — <span class=\"chem\">f(2x - 6)</span>에서 수평 평행이동량 착각:</strong> <span class=\"chem\">- 6</span>만 보고 <span class=\"chem\">1/2</span>배 수평 축소 후 오른쪽으로 <span class=\"chem\">6</span>만큼 이동했다고 적기 쉬워요. 항상 먼저 묶어 내세요: <span class=\"chem\">f(2x - 6) = f(2(x - 3))</span>이므로 평행이동은 <span class=\"chem\">6</span>이 아니라 <strong>오른쪽으로 <span class=\"chem\">3</span>만큼</strong>이에요!",

    // Graph transformations and composite order > widget > data-title attribute
    "Interactive graph transformation studio: y = a f(b(x − h)) + k": "대화형 그래프 변환 스튜디오: y = a f(b(x − h)) + k",

    // Graph transformations and composite order > widget > figcaption
    "Adjust <span class=\"chem\">a, b, h, k</span> to see how the parent curve <span class=\"chem\">f(x)</span> (dashed) transforms into <span class=\"chem\">g(x) = a f(b(x - h)) + k</span> (solid) and track how the key point <span class=\"chem\">P(x_0, y_0)</span> moves to <span class=\"chem\">P'(x_0/b + h, a y_0 + k)</span>.": "<span class=\"chem\">a, b, h, k</span>를 조절하여 원래 곡선 <span class=\"chem\">f(x)</span> (점선)가 <span class=\"chem\">g(x) = a f(b(x - h)) + k</span> (실선)로 어떻게 변하는지 확인하고, 주요 점 <span class=\"chem\">P(x_0, y_0)</span>가 <span class=\"chem\">P'(x_0/b + h, a y_0 + k)</span>로 이동하는 과정을 추적해 보세요.",

    // Graph transformations and composite order > worked example > h3
    "Finding the image of a point and describing composite transformations": "점의 상 구하기와 합성 변환 설명하기",

    // Graph transformations and composite order > worked example > p
    "The graph of <span class=\"chem\">y = f(x)</span> has a local maximum at <span class=\"chem\">P(-4, 6)</span>. Let <span class=\"chem\">g(x) = -2 f(3x + 6) + 1</span>.<br> (a) Describe a sequence of transformations that maps <span class=\"chem\">y = f(x)</span> onto <span class=\"chem\">y = g(x)</span>. <strong>[4 marks]</strong><br> (b) Find the coordinates of the image of <span class=\"chem\">P</span> on <span class=\"chem\">y = g(x)</span>. <strong>[2 marks]</strong>": "<span class=\"chem\">y = f(x)</span>의 그래프가 <span class=\"chem\">P(-4, 6)</span>에서 극댓값을 갖는다. <span class=\"chem\">g(x) = -2 f(3x + 6) + 1</span>이라 하자.<br> (a) <span class=\"chem\">y = f(x)</span>를 <span class=\"chem\">y = g(x)</span>로 옮기는 변환의 순서를 설명하시오 (Describe). <strong>[4 marks]</strong><br> (b) <span class=\"chem\">y = g(x)</span> 위에서 점 <span class=\"chem\">P</span>의 상의 좌표를 구하시오 (Find). <strong>[2 marks]</strong>",

    // Graph transformations and composite order > worked example > data-title attribute
    "Factor out 3 inside the argument of f": "f의 괄호 안에서 3 묶어 내기",

    // Graph transformations and composite order > worked example > p
    "Factoring b = 3 reveals the true horizontal translation h = −2 once the stretch is applied first.": "b = 3을 묶어 내면 확대·축소를 먼저 적용한 뒤의 실제 수평 평행이동 h = −2가 드러나요.",

    // Graph transformations and composite order > worked example > data-title attribute
    "List the horizontal and vertical transformations in valid order": "수평 및 수직 변환을 올바른 순서로 나열하기",

    // Graph transformations and composite order > worked example > p
    "In factored form, stretches/reflections come before translations in each direction.": "묶어 낸 꼴에서는 각 방향마다 확대·축소 및 대칭이동이 평행이동보다 먼저 와요.",

    // Graph transformations and composite order > worked example > maths line
    "1. Horizontal stretch of scale factor <span class=\"frac\"><span>1</span><span>3</span></span> (parallel to the <i>x</i>-axis) &nbsp; <b>[A1]</b>": "1. 배율 <span class=\"frac\"><span>1</span><span>3</span></span>의 수평 축소 (<i>x</i>축과 나란한 방향) &nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > maths line
    "2. Translation of 2 units left: vector <span class=\"chem\">(-2, 0)</span> &nbsp; <b>[A1]</b>": "2. 왼쪽으로 2만큼 평행이동: 벡터 <span class=\"chem\">(-2, 0)</span> &nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > maths line
    "3. Vertical stretch of scale factor 2 and reflection in the <i>x</i>-axis, followed by translation 1 unit up: vector <span class=\"chem\">(0, 1)</span> &nbsp; <b>[A1]</b>": "3. 배율 2의 수직 확대 및 <i>x</i>축 대칭이동 후 위로 1만큼 평행이동: 벡터 <span class=\"chem\">(0, 1)</span> &nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > data-title attribute
    "Track the coordinates of P(−4, 6) using x_new = x₀/b + h and y_new = a y₀ + k": "x_new = x₀/b + h와 y_new = a y₀ + k를 이용해 P(−4, 6)의 좌표 추적하기",

    // Graph transformations and composite order > worked example > p
    "Check both by applying the steps and by solving 3x_new + 6 = −4.": "변환 단계를 순서대로 적용한 것과 3x_new + 6 = −4를 푼 결과를 모두 확인하세요.",

    // Graph transformations and composite order > worked example > maths line
    "<i>y</i><sub>new</sub> = −2(6) + 1 = <b>−11</b> &nbsp; (now a local minimum!) &nbsp; <b>[A1]</b>": "<i>y</i><sub>new</sub> = −2(6) + 1 = <b>−11</b> &nbsp; (이제 극솟값이에요!) &nbsp; <b>[A1]</b>",

    // Graph transformations and composite order > worked example > p
    "(a) H-stretch <span class=\"chem\">1/3</span>, shift <span class=\"chem\">(-2, 0)</span>, V-stretch <span class=\"chem\">2</span> + <span class=\"chem\">x</span>-axis reflection, shift <span class=\"chem\">(0, 1)</span>; (b) <span class=\"chem\">(-10/3, -11)</span>": "(a) 수평 축소 <span class=\"chem\">1/3</span>, 평행이동 <span class=\"chem\">(-2, 0)</span>, 수직 확대 <span class=\"chem\">2</span> + <span class=\"chem\">x</span>축 대칭이동, 평행이동 <span class=\"chem\">(0, 1)</span>; (b) <span class=\"chem\">(-10/3, -11)</span>",

    // Graph transformations and composite order > try it > p
    "The point <span class=\"chem\">(6, -4)</span> lies on the graph of <span class=\"chem\">y = f(x)</span>. Find the <span class=\"chem\">y</span>-coordinate of its image on the graph of <span class=\"chem\">y = -3 f(2x - 4) - 1</span>.": "점 <span class=\"chem\">(6, -4)</span>가 <span class=\"chem\">y = f(x)</span>의 그래프 위에 있어요. <span class=\"chem\">y = -3 f(2x - 4) - 1</span>의 그래프 위로 옮겨진 상의 <span class=\"chem\">y</span>좌표를 구하시오 (Find).",

    // Graph transformations and composite order > try it > li
    "Remember that only the outside parameters <span class=\"chem\">a = -3</span> and <span class=\"chem\">k = -1</span> affect the <span class=\"chem\">y</span>-coordinate.": "바깥쪽 매개변수 <span class=\"chem\">a = -3</span>과 <span class=\"chem\">k = -1</span>만이 <span class=\"chem\">y</span>좌표에 영향을 준다는 점을 기억하세요.",

    // Graph transformations and composite order > try it > li
    "Compute <span class=\"chem\">y_new = -3(-4) - 1</span>.": "<span class=\"chem\">y_new = -3(-4) - 1</span>을 계산하세요.",

    // Graph transformations and composite order > try it > maths line
    "<i>y</i><sub>new</sub> = −3(−4) − 1 = 12 − 1 = <b>11</b> (and <i>x</i><sub>new</sub> = 6/2 + 2 = 5, giving (5, 11)).": "<i>y</i><sub>new</sub> = −3(−4) − 1 = 12 − 1 = <b>11</b> (그리고 <i>x</i><sub>new</sub> = 6/2 + 2 = 5이므로 (5, 11)이에요).",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > data-toc attribute
    "Polynomials & Vieta": "다항식과 근과 계수의 관계",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > h2
    "Polynomial theorems, root multiplicity &amp; Vieta's formulas": "다항식의 정리, 근의 중복도와 근과 계수의 관계",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > p
    "When a polynomial <span class=\"chem\">P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0</span> (<span class=\"chem\">a_n != 0</span>) is divided by a linear divisor <span class=\"chem\">(ax - b)</span>, we can write <span class=\"chem\">P(x) = Q(x)(ax - b) + R</span>. Substituting <span class=\"chem\">x = b/a</span> eliminates <span class=\"chem\">Q(x)</span> immediately:": "다항식 <span class=\"chem\">P(x) = a_n x^n + a_{n-1} x^{n-1} + ... + a_1 x + a_0</span> (<span class=\"chem\">a_n != 0</span>)을 일차식 <span class=\"chem\">(ax - b)</span>로 나누면 <span class=\"chem\">P(x) = Q(x)(ax - b) + R</span>로 쓸 수 있어요. <span class=\"chem\">x = b/a</span>를 대입하면 <span class=\"chem\">Q(x)</span>가 바로 사라져요:",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > li
    "<strong>Remainder Theorem</strong>: When <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(ax - b)</span>, the remainder is <span class=\"chem\">P(b/a)</span>. In particular, dividing by <span class=\"chem\">(x - k)</span> leaves remainder <span class=\"chem\">P(k)</span>.": "<strong>나머지정리(Remainder Theorem)</strong>: <span class=\"chem\">P(x)</span>를 <span class=\"chem\">(ax - b)</span>로 나눈 나머지는 <span class=\"chem\">P(b/a)</span>예요. 특히 <span class=\"chem\">(x - k)</span>로 나눈 나머지는 <span class=\"chem\">P(k)</span>예요.",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > li
    "<strong>Factor Theorem</strong>: <span class=\"chem\">(ax - b)</span> is a factor of <span class=\"chem\">P(x)</span> if and only if <span class=\"chem\">P(b/a) = 0</span>.": "<strong>인수정리(Factor Theorem)</strong>: <span class=\"chem\">(ax - b)</span>가 <span class=\"chem\">P(x)</span>의 인수일 필요충분조건은 <span class=\"chem\">P(b/a) = 0</span>이에요.",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > Additional HL > li
    "<strong>Root multiplicity &amp; graph behaviour</strong>: At a single root <span class=\"chem\">(x - r)^1</span>, the graph <em>crosses</em> the <span class=\"chem\">x</span>-axis; at a double root <span class=\"chem\">(x - r)^2</span>, it is <em>tangent</em> to the <span class=\"chem\">x</span>-axis (bounces); at a triple root <span class=\"chem\">(x - r)^3</span>, it crosses with a <em>horizontal point of inflexion</em>.": "<strong>근의 중복도와 그래프의 모양</strong>: 단일근 <span class=\"chem\">(x - r)^1</span>에서는 그래프가 <span class=\"chem\">x</span>축을 <em>가로질러 통과하고</em>, 중근(2중근) <span class=\"chem\">(x - r)^2</span>에서는 <span class=\"chem\">x</span>축에 <em>접하며(튕기며)</em>, 삼중근 <span class=\"chem\">(x - r)^3</span>에서는 <em>수평 변곡점</em>을 가지며 통과해요.",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > formula booklet note > Additional HL > p
    "<strong>In your Formula Booklet (Section 2.12):</strong> For a polynomial equation <span class=\"chem\">sum_{r=0}^n a_r x^r = 0</span> of degree <span class=\"chem\">n</span>, the <strong>sum of roots</strong> is <span class=\"chem\">-a_{n-1} / a_n</span> and the <strong>product of roots</strong> is <span class=\"chem\">(-1)^n a_0 / a_n</span>.": "<strong>공식집(Formula Booklet, Section 2.12) 수록:</strong> <span class=\"chem\">n</span>차 다항방정식 <span class=\"chem\">sum_{r=0}^n a_r x^r = 0</span>에서 <strong>모든 근의 합</strong>은 <span class=\"chem\">-a_{n-1} / a_n</span>이고 <strong>모든 근의 곱</strong>은 <span class=\"chem\">(-1)^n a_0 / a_n</span>이에요.",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dt
    "Squared sum": "제곱의 합",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dd
    "<span class=\"chem\">alpha^2 + beta^2 + gamma^2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>": "<span class=\"chem\">alpha^2 + beta^2 + gamma^2 = (alpha + beta + gamma)^2 - 2(alpha beta + beta gamma + gamma alpha)</span>",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dt
    "Reciprocal sum": "역수의 합",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > equation > Additional HL > dd
    "<span class=\"chem\">1/alpha + 1/beta + 1/gamma = (alpha beta + beta gamma + gamma alpha) / (alpha beta gamma)</span>": "<span class=\"chem\">1/alpha + 1/beta + 1/gamma = (alpha beta + beta gamma + gamma alpha) / (alpha beta gamma)</span>",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > common mistake > Additional HL > p
    "<strong>Common mistake — Sign of the product of roots:</strong> The formula has <span class=\"chem\">(-1)^n a_0 / a_n</span>. For an <strong>even</strong> degree (quadratic, quartic), the product is <span class=\"chem\">+a_0 / a_n</span>. For an <strong>odd</strong> degree (cubic), it is <span class=\"chem\">-a_0 / a_n</span>. Always alternate signs <span class=\"chem\">-, +, -, +, ...</span> starting from the <span class=\"chem\">x^{n-1}</span> term—and watch for missing terms with coefficient <span class=\"chem\">0</span>!": "<strong>자주 하는 실수 — 근의 곱의 부호:</strong> 공식에는 <span class=\"chem\">(-1)^n a_0 / a_n</span>가 들어 있어요. <strong>짝수</strong> 차수(이차, 사차)에서는 근의 곱이 <span class=\"chem\">+a_0 / a_n</span>이고, <strong>홀수</strong> 차수(삼차)에서는 <span class=\"chem\">-a_0 / a_n</span>이에요. 항상 <span class=\"chem\">x^{n-1}</span> 항부터 <span class=\"chem\">-, +, -, +, ...</span> 순서로 부호를 번갈아 붙이세요—계수가 <span class=\"chem\">0</span>이라 빠진 항도 조심하세요!",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > h3
    "Using Vieta's formulas and the Remainder Theorem together": "근과 계수의 관계와 나머지정리 함께 사용하기",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "The cubic equation <span class=\"chem\">2x^3 - 5x^2 + kx - 6 = 0</span> has roots <span class=\"chem\">alpha, beta, gamma</span>.<br> (a) Given that <span class=\"chem\">(x - 2)</span> is a factor of <span class=\"chem\">P(x) = 2x^3 - 5x^2 + kx - 6</span>, find <span class=\"chem\">k</span>. <strong>[2 marks]</strong><br> (b) Hence find the exact value of <span class=\"chem\">alpha^2 + beta^2 + gamma^2</span> without solving for all three roots. <strong>[4 marks]</strong>": "삼차방정식 <span class=\"chem\">2x^3 - 5x^2 + kx - 6 = 0</span>의 세 근을 <span class=\"chem\">alpha, beta, gamma</span>라 하자.<br> (a) <span class=\"chem\">(x - 2)</span>가 <span class=\"chem\">P(x) = 2x^3 - 5x^2 + kx - 6</span>의 인수일 때, <span class=\"chem\">k</span>를 구하시오 (Find). <strong>[2 marks]</strong><br> (b) 이를 이용하여 세 근을 모두 구하지 않고 <span class=\"chem\">alpha^2 + beta^2 + gamma^2</span>의 정확한 값을 구하시오 (Find). <strong>[4 marks]</strong>",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > data-title attribute
    "Apply the Factor Theorem P(2) = 0 to find k": "인수정리 P(2) = 0을 적용해 k 구하기",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "Since (x − 2) is a factor, substituting x = 2 must give 0.": "(x − 2)가 인수이므로 x = 2를 대입하면 0이 나와야 해요.",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > data-title attribute
    "Write Vieta's sum and pairwise-product relations for the cubic": "삼차방정식의 근과 계수의 관계(합과 두 근끼리의 곱의 합) 적기",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "Alternate signs (−, +, −) with leading coefficient a₃ = 2.": "최고차항 계수 a₃ = 2로 나누며 부호 (−, +, −)를 번갈아 적용하세요.",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > data-title attribute
    "Use the symmetric identity for α² + β² + γ²": "α² + β² + γ²에 대한 대칭 항등식 사용하기",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "Expanding (α + β + γ)² isolates α² + β² + γ² plus twice the pairwise products.": "(α + β + γ)²을 전개하면 α² + β² + γ²과 두 근끼리의 곱의 합의 2배가 분리돼요.",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > worked example > Additional HL > p
    "(a) <span class=\"chem\">k = 5</span>; (b) <span class=\"chem\">5/4</span> (or <span class=\"chem\">1.25</span>)": "(a) <span class=\"chem\">k = 5</span>; (b) <span class=\"chem\">5/4</span> (또는 <span class=\"chem\">1.25</span>)",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > try it > Additional HL > p
    "The polynomial <span class=\"chem\">P(x) = x^3 + ax^2 - 7x + b</span> leaves a remainder of <span class=\"chem\">6</span> when divided by <span class=\"chem\">(x - 1)</span>. Find the value of <span class=\"chem\">a + b</span>.": "다항식 <span class=\"chem\">P(x) = x^3 + ax^2 - 7x + b</span>를 <span class=\"chem\">(x - 1)</span>로 나눈 나머지가 <span class=\"chem\">6</span>이에요. <span class=\"chem\">a + b</span>의 값을 구하시오 (Find).",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > try it > Additional HL > li
    "By the Remainder Theorem, the remainder when <span class=\"chem\">P(x)</span> is divided by <span class=\"chem\">(x - 1)</span> is <span class=\"chem\">P(1)</span>.": "나머지정리에 의해 <span class=\"chem\">P(x)</span>를 <span class=\"chem\">(x - 1)</span>로 나눈 나머지는 <span class=\"chem\">P(1)</span>이에요.",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > try it > Additional HL > li
    "Set <span class=\"chem\">P(1) = 1^3 + a(1)^2 - 7(1) + b = 6</span> and solve for <span class=\"chem\">a + b</span>.": "<span class=\"chem\">P(1) = 1^3 + a(1)^2 - 7(1) + b = 6</span>으로 놓고 <span class=\"chem\">a + b</span>를 구하세요.",

    // Polynomial theorems, root multiplicity &amp; Vieta's formula > not needed for IB > Additional HL > p
    "<strong>Not needed for IB:</strong> You do not need formal proofs of the Rational Root Theorem or Descartes' Rule of Signs. On Paper 1, any root needed to start factorising a cubic or quartic is either a small integer (<span class=\"chem\">+-1, +-2, +-3</span>) or guided by the question.": "<strong>IB 시험 범위 외 내용:</strong> 유리근 정리나 데카르트의 부호 법칙의 엄밀한 증명은 필요하지 않아요. Paper 1에서 삼차·사차식 인수분해를 시작할 때 필요한 근은 작은 정수(<span class=\"chem\">+-1, +-2, +-3</span>)이거나 문제에서 안내해 줘요.",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > data-toc attribute
    "Rational & symmetry": "고차 유리함수와 대칭성",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > h2
    "Higher rational functions, oblique asymptotes &amp; symmetry": "고차 유리함수, 사선점근선과 함수의 대칭성",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > p
    "Beyond the linear-over-linear hyperbolas of SL 2.8, AHL 2.13 covers two richer rational families:": "SL 2.8의 일차식/일차식 쌍곡선을 넘어, AHL 2.13에서는 두 가지 확장된 유리함수 형태를 다뤄요:",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > caption
    "AHL 2.13 rational function families and asymptotes": "AHL 2.13 유리함수 유형과 점근선",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "Family": "함수 형태",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "Vertical asymptotes (VA)": "수직점근선 (VA)",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "Horizontal / Oblique asymptote": "수평 / 사선점근선",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "<span class=\"chem\">f(x) = (ax + b) / (cx^2 + dx + e)</span>": "<span class=\"chem\">f(x) = (ax + b) / (cx^2 + dx + e)</span>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Solve <span class=\"chem\">cx^2 + dx + e = 0</span> (0, 1, or 2 VAs; check if numerator is also 0 for a hole).": "<span class=\"chem\">cx^2 + dx + e = 0</span>을 푸세요 (수직점근선 0, 1 또는 2개; 분자도 0이면 구멍인지 확인).",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Denominator has higher degree, so <strong>horizontal asymptote is always <span class=\"chem\">y = 0</span></strong>.": "분모의 차수가 더 크므로 <strong>수평점근선은 항상 <span class=\"chem\">y = 0</span></strong>이에요.",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > th
    "<span class=\"chem\">f(x) = (ax^2 + bx + c) / (dx + e)</span>": "<span class=\"chem\">f(x) = (ax^2 + bx + c) / (dx + e)</span>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Set <span class=\"chem\">dx + e = 0 =&gt; x = -e/d</span> (1 VA, unless <span class=\"chem\">(dx + e)</span> divides numerator).": "<span class=\"chem\">dx + e = 0 =&gt; x = -e/d</span> (<span class=\"chem\">(dx + e)</span>가 분자를 나누어떨어뜨리지 않으면 수직점근선 1개).",

    // Higher rational functions, oblique asymptotes &amp; symmetry > table > Additional HL > td
    "Numerator degree is 1 higher: divide to get <span class=\"chem\">mx + k + R/(dx + e)</span>. <strong>Oblique asymptote <span class=\"chem\">y = mx + k</span></strong>.": "분자의 차수가 1 더 큼: 나누어서 <span class=\"chem\">mx + k + R/(dx + e)</span>로 만드세요. <strong>사선점근선 <span class=\"chem\">y = mx + k</span></strong>.",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > h3
    "Even, odd, self-inverse &amp; domain restriction (AHL 2.14)": "짝함수, 홀함수, 자기자신이 역함수인 함수 및 정의역 제한 (AHL 2.14)",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Even function</strong>: <span class=\"chem\">f(-x) = f(x)</span> for all <span class=\"chem\">x</span> in the domain (symmetric about the <strong><span class=\"chem\">y</span>-axis</strong>; e.g., <span class=\"chem\">x^2, cos x, |x|</span>).": "<strong>짝함수(우함수)</strong>: 정의역의 모든 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">f(-x) = f(x)</span> (<strong><span class=\"chem\">y</span>축</strong> 대칭; 예: <span class=\"chem\">x^2, cos x, |x|</span>).",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Odd function</strong>: <span class=\"chem\">f(-x) = -f(x)</span> for all <span class=\"chem\">x</span> in the domain (rotational symmetry of order 2 about the <strong>origin</strong>; e.g., <span class=\"chem\">x^3, sin x, 1/x</span>).": "<strong>홀함수(기함수)</strong>: 정의역의 모든 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">f(-x) = -f(x)</span> (<strong>원점</strong>에 대해 180° 회전대칭(차수 2); 예: <span class=\"chem\">x^3, sin x, 1/x</span>).",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Self-inverse function</strong>: <span class=\"chem\">f(f(x)) = x</span>, meaning <span class=\"chem\">f^{-1}(x) = f(x)</span> and the graph is symmetric about <span class=\"chem\">y = x</span>.": "<strong>자기자신이 역함수인 함수(Self-inverse function)</strong>: <span class=\"chem\">f(f(x)) = x</span>, 즉 <span class=\"chem\">f^{-1}(x) = f(x)</span>이며 그래프가 직선 <span class=\"chem\">y = x</span>에 대해 대칭이에요.",

    // Higher rational functions, oblique asymptotes &amp; symmetry > Additional HL > li
    "<strong>Restricting a domain for <span class=\"chem\">f^{-1}</span></strong>: A function has an inverse if and only if it is <strong>one-to-one</strong> (passes the horizontal line test). For a many-to-one curve, cut the domain at its turning point(s) where <span class=\"chem\">f'(x) = 0</span>.": "<strong><span class=\"chem\">f^{-1}</span>가 존재하도록 정의역 제한하기</strong>: 함수가 역함수를 가질 필요충분조건은 <strong>일대일함수</strong>(수평선 판정법 통과)인 것이에요. 다대일 곡선에서는 <span class=\"chem\">f'(x) = 0</span>인 극점에서 정의역을 자르세요.",

    // Higher rational functions, oblique asymptotes &amp; symmetry > exam tip (shown in English + translation) > Additional HL > p
    "<strong>Exam tip — Finding the range of <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span> without calculus:</strong> Set <span class=\"chem\">y = f(x)</span>, clear the denominator to form a quadratic in <span class=\"chem\">x</span>, and require <strong><span class=\"chem\">Delta_x &gt;= 0</span></strong> (since <span class=\"chem\">x in R</span>). Solving the resulting inequality in <span class=\"chem\">y</span> gives the exact range!": "<strong>시험 팁 — 미분 없이 <span class=\"chem\">(ax^2 + bx + c)/(dx + e)</span>의 치역 구하기:</strong> <span class=\"chem\">y = f(x)</span>로 놓고 분모를 곱해 <span class=\"chem\">x</span>에 대한 이차방정식으로 정리한 뒤, (<span class=\"chem\">x in R</span>이므로) <strong><span class=\"chem\">Delta_x &gt;= 0</span></strong> 조건을 세우세요. 여기서 얻은 <span class=\"chem\">y</span>에 대한 부등식을 풀면 정확한 치역이 나와요!",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > h3
    "Finding an oblique asymptote and range of a quadratic-over-linear function": "이차식/일차식 유리함수의 사선점근선과 치역 구하기",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "Consider <span class=\"chem\">f(x) = (2x^2 - 3x + 5)/(x - 2)</span> for <span class=\"chem\">x != 2</span>.<br> (a) Express <span class=\"chem\">f(x)</span> in the form <span class=\"chem\">mx + k + R/(x - 2)</span> and state the equation of the oblique asymptote. <strong>[3 marks]</strong><br> (b) Use the discriminant method to find the range of <span class=\"chem\">f</span>. <strong>[4 marks]</strong>": "<span class=\"chem\">x != 2</span>에서 <span class=\"chem\">f(x) = (2x^2 - 3x + 5)/(x - 2)</span>를 생각하자.<br> (a) <span class=\"chem\">f(x)</span>를 <span class=\"chem\">mx + k + R/(x - 2)</span> 꼴로 나타내고 사선점근선의 방정식을 쓰시오 (State). <strong>[3 marks]</strong><br> (b) 판별식을 이용하여 <span class=\"chem\">f</span>의 치역을 구하시오 (Find). <strong>[4 marks]</strong>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > data-title attribute
    "Divide 2x² − 3x + 5 by (x − 2)": "2x² − 3x + 5를 (x − 2)로 나누기",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "Synthetic or polynomial long division separates the linear quotient from the decaying remainder.": "조립제법이나 다항식의 나눗셈을 이용해 일차식 몫과 0으로 수렴하는 나머지 항을 분리하세요.",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > maths line
    "Oblique asymptote: <b><i>y</i> = 2<i>x</i> + 1</b> &nbsp; (as <i>x</i> → ±∞, 7/(<i>x</i> − 2) → 0) &nbsp; <b>[A1]</b>": "사선점근선: <b><i>y</i> = 2<i>x</i> + 1</b> &nbsp; (<i>x</i> → ±∞일 때 7/(<i>x</i> − 2) → 0) &nbsp; <b>[A1]</b>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > data-title attribute
    "Rearrange y = f(x) into a quadratic in x": "y = f(x)를 x에 대한 이차방정식으로 정리하기",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "A value y lies in the range if and only if there is at least one real x producing it.": "어떤 값 y가 치역에 속하려면 그 값을 만드는 실수 x가 적어도 하나 존재해야 해요.",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > data-title attribute
    "Set Δ_x ≥ 0 and solve for y": "Δ_x ≥ 0으로 놓고 y에 대해 풀기",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "Real x exists iff the discriminant in x is non-negative.": "x에 대한 판별식이 0 이상일 때만 실수 x가 존재해요.",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > maths line
    "Roots: <i>y</i> = <span class=\"frac\"><span>10 ± √(100 + 124)</span><span>2</span></span> = 5 ± √56 = 5 ± 2√14": "근: <i>y</i> = <span class=\"frac\"><span>10 ± √(100 + 124)</span><span>2</span></span> = 5 ± √56 = 5 ± 2√14",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > maths line
    "Range: <b><i>y</i> ≤ 5 − 2√14</b> or <b><i>y</i> ≥ 5 + 2√14</b> &nbsp; <b>[A1]</b>": "치역: <b><i>y</i> ≤ 5 − 2√14</b> 또는 <b><i>y</i> ≥ 5 + 2√14</b> &nbsp; <b>[A1]</b>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > worked example > Additional HL > p
    "(a) <span class=\"chem\">y = 2x + 1</span>; (b) <span class=\"chem\">y &lt;= 5 - 2 sqrt(14)</span> or <span class=\"chem\">y &gt;= 5 + 2 sqrt(14)</span>": "(a) <span class=\"chem\">y = 2x + 1</span>; (b) <span class=\"chem\">y &lt;= 5 - 2 sqrt(14)</span> 또는 <span class=\"chem\">y &gt;= 5 + 2 sqrt(14)</span>",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > p
    "The rational function <span class=\"chem\">f(x) = (x^2 + 3x - 2)/(x + 4)</span> has an oblique asymptote <span class=\"chem\">y = x + k</span>. Find the exact value of <span class=\"chem\">k</span>.": "유리함수 <span class=\"chem\">f(x) = (x^2 + 3x - 2)/(x + 4)</span>가 사선점근선 <span class=\"chem\">y = x + k</span>를 가져요. <span class=\"chem\">k</span>의 정확한 값을 구하시오 (Find).",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > li
    "Divide <span class=\"chem\">x^2 + 3x - 2</span> by <span class=\"chem\">(x + 4)</span>: start with <span class=\"chem\">x(x + 4) = x^2 + 4x</span>.": "<span class=\"chem\">x^2 + 3x - 2</span>를 <span class=\"chem\">(x + 4)</span>로 나누세요: <span class=\"chem\">x(x + 4) = x^2 + 4x</span>부터 시작하세요.",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > li
    "Subtracting <span class=\"chem\">x^2 + 4x</span> leaves <span class=\"chem\">-x - 2 = -1(x + 4) + 2</span>, so the quotient is <span class=\"chem\">x - 1</span>.": "<span class=\"chem\">x^2 + 4x</span>를 빼면 <span class=\"chem\">-x - 2 = -1(x + 4) + 2</span>가 남으므로 몫은 <span class=\"chem\">x - 1</span>이에요.",

    // Higher rational functions, oblique asymptotes &amp; symmetry > try it > Additional HL > maths line
    "<i>f</i>(<i>x</i>) = <i>x</i> − 1 + <span class=\"frac\"><span>2</span><span><i>x</i> + 4</span></span> ⇒ oblique asymptote is <i>y</i> = <i>x</i> − 1, so <i>k</i> = <b>−1</b>.": "<i>f</i>(<i>x</i>) = <i>x</i> − 1 + <span class=\"frac\"><span>2</span><span><i>x</i> + 4</span></span> ⇒ 사선점근선은 <i>y</i> = <i>x</i> − 1이므로 <i>k</i> = <b>−1</b>이에요.",

    // Higher rational functions, oblique asymptotes &amp; symmetry > not needed for IB > Additional HL > p
    "<strong>Not needed for IB:</strong> AHL 2.13 only examines <span class=\"chem\">linear / quadratic</span> and <span class=\"chem\">quadratic / linear</span> rational functions. Non-linear (parabolic) asymptotes from <span class=\"chem\">cubic / linear</span> are outside the IB syllabus.": "<strong>IB 시험 범위 외 내용:</strong> AHL 2.13에서는 <span class=\"chem\">linear / quadratic</span>(일차/이차)과 <span class=\"chem\">quadratic / linear</span>(이차/일차) 유리함수만 다뤄요. <span class=\"chem\">cubic / linear</span>(삼차/일차)에서 나오는 비선형(포물선) 점근선은 IB 시험 범위 밖이에요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > Additional HL > data-toc attribute
    "Modulus & reciprocal": "절댓값과 역수 그래프",

    // Modulus, reciprocal &amp; squared graphs and inequalities > Additional HL > h2
    "Modulus, reciprocal &amp; squared graphs and inequalities": "절댓값, 역수 및 제곱 그래프와 부등식",

    // Modulus, reciprocal &amp; squared graphs and inequalities > Additional HL > p
    "Given the graph of <span class=\"chem\">y = f(x)</span>, you must be able to sketch four derived graphs and solve inequalities involving them:": "<span class=\"chem\">y = f(x)</span>의 그래프가 주어졌을 때, 네 가지 파생 그래프를 그리고 이와 관련된 부등식을 풀 수 있어야 해요:",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > caption
    "Derived graph transformations (AHL 2.16)": "파생 그래프 변환 (AHL 2.16)",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > th
    "Transformation": "변환",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > th
    "Rule to sketch from <span class=\"chem\">y = f(x)</span>": "<span class=\"chem\">y = f(x)</span>에서 그리는 규칙",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > th
    "Key features to label": "표시해야 할 핵심 특징",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Keep <span class=\"chem\">f(x) &gt;= 0</span> unchanged; reflect any part with <span class=\"chem\">f(x) &lt; 0</span> upwards in the <span class=\"chem\">x</span>-axis.": "<span class=\"chem\">f(x) &gt;= 0</span>인 부분은 그대로 두고, <span class=\"chem\">f(x) &lt; 0</span>인 부분은 <span class=\"chem\">x</span>축에 대해 위로 대칭이동해요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Sharp corners (cusps) at simple <span class=\"chem\">x</span>-intercepts; no negative <span class=\"chem\">y</span>-values.": "단순 <span class=\"chem\">x</span>절편에서 뾰족점(첨점)이 생기며 음수 <span class=\"chem\">y</span>값이 없어요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Delete the left half (<span class=\"chem\">x &lt; 0</span>); reflect the right half (<span class=\"chem\">x &gt;= 0</span>) across the <span class=\"chem\">y</span>-axis.": "왼쪽 절반(<span class=\"chem\">x &lt; 0</span>)을 지우고, 오른쪽 절반(<span class=\"chem\">x &gt;= 0</span>)을 <span class=\"chem\">y</span>축에 대해 대칭 복사해요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Always an <strong>even</strong> graph; cusp at <span class=\"chem\">(0, f(0))</span> unless <span class=\"chem\">f'(0) = 0</span>.": "항상 <strong>짝함수(우함수)</strong> 그래프; <span class=\"chem\">f'(0) = 0</span>이 아니면 <span class=\"chem\">(0, f(0))</span>에 뾰족점이 생겨요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Invert <span class=\"chem\">y</span>-values: roots become VAs; VAs become <span class=\"chem\">x</span>-intercepts; <span class=\"chem\">y -&gt; +-infty</span> becomes <span class=\"chem\">y -&gt; 0</span>.": "<span class=\"chem\">y</span>값의 역수를 취해요: 근은 수직점근선, 수직점근선은 <span class=\"chem\">x</span>절편, <span class=\"chem\">y -&gt; +-infty</span>는 <span class=\"chem\">y -&gt; 0</span>이 돼요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Invariant points at <span class=\"chem\">y = +-1</span>; local max <span class=\"chem\">(a, M)</span> becomes local min <span class=\"chem\">(a, 1/M)</span>.": "<span class=\"chem\">y = +-1</span>인 점은 고정; 극댓값 <span class=\"chem\">(a, M)</span>은 극솟값 <span class=\"chem\">(a, 1/M)</span>이 돼요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Square all <span class=\"chem\">y</span>-values: non-negative everywhere; values in <span class=\"chem\">(0, 1)</span> shrink, <span class=\"chem\">|y| &gt; 1</span> grow.": "모든 <span class=\"chem\">y</span>값을 제곱해요: 어디서나 0 이상이고, <span class=\"chem\">(0, 1)</span>의 값은 작아지며 <span class=\"chem\">|y| &gt; 1</span>의 값은 커져요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > table > Additional HL > td
    "Invariant points at <span class=\"chem\">y = 0</span> and <span class=\"chem\">y = 1</span>; simple roots become smooth tangent minima.": "<span class=\"chem\">y = 0</span>과 <span class=\"chem\">y = 1</span>인 점은 고정; 단순근은 매끄럽게 접하는 극솟점이 돼요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > widget > Additional HL > data-title attribute
    "Interactive AHL graph mapper: |f(x)|, f(|x|), and 1/f(x)": "대화형 AHL 그래프 변환기: |f(x)|, f(|x|) 및 1/f(x)",

    // Modulus, reciprocal &amp; squared graphs and inequalities > widget > Additional HL > figcaption
    "Choose a parent function <span class=\"chem\">f(x)</span> (dashed) and switch between <span class=\"chem\">|f(x)|</span>, <span class=\"chem\">f(|x|)</span>, and <span class=\"chem\">1/f(x)</span> to inspect cusps, <span class=\"chem\">y</span>-axis symmetry, invariant points <span class=\"chem\">y = +-1</span>, and roots turning into vertical asymptotes.": "원래 함수 <span class=\"chem\">f(x)</span> (점선)를 고르고 <span class=\"chem\">|f(x)|</span>, <span class=\"chem\">f(|x|)</span>, <span class=\"chem\">1/f(x)</span> 사이를 전환하며 뾰족점, <span class=\"chem\">y</span>축 대칭, 고정점 <span class=\"chem\">y = +-1</span>, 그리고 근이 수직점근선으로 바뀌는 모습을 살펴보세요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > common mistake > Additional HL > p
    "<strong>Common mistake — Cross-multiplying rational inequalities:</strong> Never multiply <span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span> by <span class=\"chem\">(x + 3)</span> because <span class=\"chem\">x + 3</span> can be negative (which flips the inequality) or zero! Always move everything to one side (<span class=\"chem\">LHS - RHS &gt;= 0</span>), combine into a single fraction, and use a sign diagram—or multiply by <span class=\"chem\">(x + 3)^2 &gt; 0</span>.": "<strong>자주 하는 실수 — 유리부등식에서 분모 그대로 곱하기:</strong> <span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span>의 양변에 <span class=\"chem\">(x + 3)</span>을 바로 곱하면 안 돼요! <span class=\"chem\">x + 3</span>이 음수(부등호 방향이 바뀜)이거나 0일 수 있기 때문이에요. 항상 한쪽으로 이항해(<span class=\"chem\">LHS - RHS &gt;= 0</span>) 하나의 분수로 통분한 뒤 부호표를 쓰거나, 양수인 <span class=\"chem\">(x + 3)^2 &gt; 0</span>을 곱하세요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > h3
    "Solving a rational inequality and a modulus inequality": "유리부등식과 절댓값 부등식 풀기",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "Solve the following inequalities analytically:<br> (a) <span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span> <strong>[3 marks]</strong><br> (b) <span class=\"chem\">|2x - 3| &lt; |x + 1|</span> <strong>[4 marks]</strong>": "다음 부등식을 대수적으로 푸시오:<br> (a) <span class=\"chem\">(2x - 1)/(x + 3) &gt;= 1</span> <strong>[3 marks]</strong><br> (b) <span class=\"chem\">|2x - 3| &lt; |x + 1|</span> <strong>[4 marks]</strong>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > data-title attribute
    "Part (a): Subtract 1 to get a single fraction ≥ 0": "(a): 1을 빼서 하나의 분수 ≥ 0 꼴로 만들기",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "Keeping everything in one fraction preserves the sign of the denominator (x + 3).": "하나의 분수로 묶어 두면 분모 (x + 3)의 부호 변화가 그대로 보존돼요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > maths line
    "Critical values: <i>x</i> = −3 (excluded, VA) and <i>x</i> = 4 (included). Sign diagram (+, −, +) gives <b><i>x</i> &lt; −3 or <i>x</i> ≥ 4</b> &nbsp; <b>[A1]</b>": "경계값: <i>x</i> = −3 (제외, 수직점근선)과 <i>x</i> = 4 (포함). 부호표 (+, −, +)에서 <b><i>x</i> &lt; −3 또는 <i>x</i> ≥ 4</b> &nbsp; <b>[A1]</b>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > data-title attribute
    "Part (b): Square both sides of |2x − 3| < |x + 1|": "(b): |2x − 3| < |x + 1|의 양변 제곱하기",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "Both sides are non-negative, so squaring preserves the inequality and removes both absolute value bars.": "양변이 모두 0 이상이므로 제곱해도 부등호 방향이 유지되고 두 절댓값 기호가 모두 사라져요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > maths line
    "Upward parabola is &lt; 0 between the roots: <b><span class=\"frac\"><span>2</span><span>3</span></span> &lt; <i>x</i> &lt; 4</b> &nbsp; <b>[A1]</b>": "아래로 볼록한 포물선은 두 근 사이에서 &lt; 0이에요: <b><span class=\"frac\"><span>2</span><span>3</span></span> &lt; <i>x</i> &lt; 4</b> &nbsp; <b>[A1]</b>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > worked example > Additional HL > p
    "(a) <span class=\"chem\">x &lt; -3</span> or <span class=\"chem\">x &gt;= 4</span>; (b) <span class=\"chem\">2/3 &lt; x &lt; 4</span>": "(a) <span class=\"chem\">x &lt; -3</span> 또는 <span class=\"chem\">x &gt;= 4</span>; (b) <span class=\"chem\">2/3 &lt; x &lt; 4</span>",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > p
    "The graph of <span class=\"chem\">y = f(x)</span> has a local minimum at <span class=\"chem\">(3, 0.1)</span>. Find the <span class=\"chem\">y</span>-coordinate of the corresponding local maximum on the graph of <span class=\"chem\">y = 1/f(x)</span>.": "<span class=\"chem\">y = f(x)</span>의 그래프가 <span class=\"chem\">(3, 0.1)</span>에서 극솟값을 가져요. <span class=\"chem\">y = 1/f(x)</span>의 그래프에서 대응하는 극댓값의 <span class=\"chem\">y</span>좌표를 구하시오 (Find).",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > li
    "For <span class=\"chem\">y = 1/f(x)</span>, a positive local minimum at <span class=\"chem\">(a, m)</span> becomes a local maximum at <span class=\"chem\">(a, 1/m)</span>.": "<span class=\"chem\">y = 1/f(x)</span>에서는 양수인 극솟값 <span class=\"chem\">(a, m)</span>이 극댓값 <span class=\"chem\">(a, 1/m)</span>이 돼요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > li
    "Compute <span class=\"chem\">1 / 0.1</span>.": "<span class=\"chem\">1 / 0.1</span>을 계산하세요.",

    // Modulus, reciprocal &amp; squared graphs and inequalities > try it > Additional HL > maths line
    "<i>y</i><sub>max</sub> = <span class=\"frac\"><span>1</span><span>0.1</span></span> = <b>10</b> at <i>x</i> = 3.": "<i>y</i><sub>max</sub> = <span class=\"frac\"><span>1</span><span>0.1</span></span> = <b>10</b> (<i>x</i> = 3에서).",

    // Quick practice > data-toc attribute
    "Practice": "연습 문제",

    // Quick practice > h2
    "Quick practice": "빠른 연습 문제",

    // widget string (assets/js/widgets-t2-3.js)
    "Quadratic: f(x) = x² − 2x": "이차함수: f(x) = x² − 2x",

    // widget string (assets/js/widgets-t2-3.js)
    "Cubic: f(x) = 0.5(x³ − 3x)": "삼차함수: f(x) = 0.5(x³ − 3x)",

    // widget string (assets/js/widgets-t2-3.js)
    "Exponential: f(x) = 2ˣ": "지수함수: f(x) = 2ˣ",

    // widget string (assets/js/widgets-t2-3.js)
    "Parent function f(x)": "원래 함수 f(x)",

    // widget string (assets/js/widgets-t2-3.js)
    "Vertical scale a": "수직 배율 a",

    // widget string (assets/js/widgets-t2-3.js)
    "Horizontal factor b": "수평 배율 계수 b",

    // widget string (assets/js/widgets-t2-3.js)
    "Horizontal shift h": "수평 평행이동 h",

    // widget string (assets/js/widgets-t2-3.js)
    "Vertical shift k": "수직 평행이동 k",

    // widget string (assets/js/widgets-t2-3.js)
    "Reset": "초기화",

    // widget string (assets/js/widgets-t2-3.js)
    "Transformed equation": "변환된 방정식",

    // widget string (assets/js/widgets-t2-3.js)
    "Tracked point P ↦ P'": "추적 점 P ↦ P'",

    // widget string (assets/js/widgets-t2-3.js)
    "Transformation sequence": "변환 순서",

    // widget string (assets/js/widgets-t2-3.js)
    "reflect in y-axis": "y축 대칭이동",

    // widget string (assets/js/widgets-t2-3.js)
    "H-stretch by": "수평 확대·축소 배율:",

    // widget string (assets/js/widgets-t2-3.js)
    "shift H by": "수평 이동:",

    // widget string (assets/js/widgets-t2-3.js)
    "reflect in x-axis": "x축 대칭이동",

    // widget string (assets/js/widgets-t2-3.js)
    "V-stretch by": "수직 확대·축소 배율:",

    // widget string (assets/js/widgets-t2-3.js)
    "shift V by": "수직 이동:",

    // widget string (assets/js/widgets-t2-3.js)
    "Identity (no transformation)": "항등 변환 (변환 없음)",

    // widget string (assets/js/widgets-t2-3.js)
    "Parent curve f(x) and transformed curve g(x) = a f(b(x − h)) + k": "원래 곡선 f(x)와 변환된 곡선 g(x) = a f(b(x − h)) + k",

    // widget string (assets/js/widgets-t2-3.js)
    "Quadratic: f(x) = x² − 2x − 3": "이차함수: f(x) = x² − 2x − 3",

    // widget string (assets/js/widgets-t2-3.js)
    "Linear: f(x) = x − 1": "일차함수: f(x) = x − 1",

    // widget string (assets/js/widgets-t2-3.js)
    "Cubic: f(x) = 0.4(x + 2)(x − 1)(x − 3)": "삼차함수: f(x) = 0.4(x + 2)(x − 1)(x − 3)",

    // widget string (assets/js/widgets-t2-3.js)
    "AHL transformation": "AHL 변환",

    // widget string (assets/js/widgets-t2-3.js)
    "y = |f(x)| (reflect y < 0 up)": "y = |f(x)| (y < 0 부분을 위로 대칭)",

    // widget string (assets/js/widgets-t2-3.js)
    "y = f(|x|) (even mirror of x ≥ 0)": "y = f(|x|) (x ≥ 0 부분의 y축 대칭)",

    // widget string (assets/js/widgets-t2-3.js)
    "y = 1 / f(x) (reciprocal)": "y = 1 / f(x) (역수 함수)",

    // widget string (assets/js/widgets-t2-3.js)
    "Mapping rule": "대응 규칙",

    // widget string (assets/js/widgets-t2-3.js)
    "Key features": "핵심 특징",

    // widget string (assets/js/widgets-t2-3.js)
    "Keep f(x) ≥ 0; reflect f(x) < 0 across the x-axis.": "f(x) ≥ 0은 유지하고, f(x) < 0은 x축 대칭이동.",

    // widget string (assets/js/widgets-t2-3.js)
    "Sharp cusps at x-intercepts: x =": "x절편에서 뾰족점(첨점): x =",

    // widget string (assets/js/widgets-t2-3.js)
    "Cusp (": "뾰족점 (",

    // widget string (assets/js/widgets-t2-3.js)
    "Discard x < 0; reflect x ≥ 0 across the y-axis (even).": "x < 0은 지우고 x ≥ 0을 y축에 대칭 복사 (짝함수).",

    // widget string (assets/js/widgets-t2-3.js)
    "Symmetric about x = 0; y-intercept at (0,": "x = 0에 대해 대칭; y절편 (0,",

    // widget string (assets/js/widgets-t2-3.js)
    "Roots of f(x) become VAs; y = ±1 stay invariant; f(x) → ±∞ becomes y → 0.": "f(x)의 근은 수직점근선; y = ±1은 고정; f(x) → ±∞는 y → 0.",

    // widget string (assets/js/widgets-t2-3.js)
    "VAs at x =": "수직점근선 x =",

    // widget string (assets/js/widgets-t2-3.js)
    "; HA: y = 0": "; 수평점근선: y = 0",

    // widget string (assets/js/widgets-t2-3.js)
    "Parent f(x) and AHL transformed curve": "원래 함수 f(x)와 AHL 변환된 곡선",

  }
});
