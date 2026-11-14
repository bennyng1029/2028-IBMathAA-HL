/* t2-2 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't2-2', {
  strings: {

    // page title (browser tab)
    "2.2 Quadratics, rational, exponential and log models | Analysis Lab": "2.2 이차함수, 유리함수, 지수·로그 모델 | Analysis Lab",

    // Quadratics, rational, exponential and log models > page header > p
    "Topic 2.2 · SL 2.6–2.10": "Topic 2.2 · SL 2.6–2.10",

    // Quadratics, rational, exponential and log models > page header > h1
    "Quadratics, rational, exponential and log models": "이차함수, 유리함수, 지수·로그 모델",

    // Quadratics, rational, exponential and log models > page header > span
    "How do algebraic parameters control turning points, root counts, and asymptotes across the core families of mathematical models?": "핵심 수학적 모델들의 꼭짓점, 근의 개수, 점근선은 대수적 매개변수에 의해 어떻게 결정될까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > p
    "You need function notation, domains and inverse functions from <a href=\"t2-1.html\">2.1 Lines, functions, domains, inverses and composites</a>, and the laws of exponents and logarithms from <a href=\"t1-2.html\">1.2 Exponents, logarithms and the binomial theorem</a>, before you start this page.": "이 페이지를 시작하기 전에 <a href=\"t2-1.html\">2.1 직선, 함수, 정의역, 역함수와 합성함수</a>의 함수 표기법, 정의역, 역함수와 <a href=\"t1-2.html\">1.2 지수, 로그와 이항정리</a>의 지수 법칙과 로그 법칙을 먼저 알아야 해요.",

    // What you need to be able to do > checklist > span
    "Convert quadratics between standard form <span class=\"chem\">ax^2 + bx + c</span>, vertex form <span class=\"chem\">a(x - h)^2 + k</span> (by completing the square), and factored form <span class=\"chem\">a(x - p)(x - q)</span>.": "이차함수를 일반형 <span class=\"chem\">ax^2 + bx + c</span>, 표준형(완전제곱식) <span class=\"chem\">a(x - h)^2 + k</span>, 인수분해형 <span class=\"chem\">a(x - p)(x - q)</span> 사이에서 자유롭게 변환할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Use the discriminant <span class=\"chem\">Delta = b^2 - 4ac</span> to determine the number of real roots or line-curve intersections (<span class=\"chem\">Delta &gt; 0</span>, <span class=\"chem\">Delta = 0</span>, <span class=\"chem\">Delta &lt; 0</span>, <span class=\"chem\">Delta &gt;= 0</span>).": "판별식 <span class=\"chem\">Delta = b^2 - 4ac</span>를 이용해 실근의 개수나 직선과 곡선의 교점 개수(<span class=\"chem\">Delta &gt; 0</span>, <span class=\"chem\">Delta = 0</span>, <span class=\"chem\">Delta &lt; 0</span>, <span class=\"chem\">Delta &gt;= 0</span>)를 판별할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Solve quadratic inequalities (including parameters inside <span class=\"chem\">Delta</span>) by sketching the parabola or drawing a sign diagram.": "포물선 그래프를 그리거나 부호표를 작성하여 이차부등식(<span class=\"chem\">Delta</span> 안에 매개변수가 포함된 경우 포함)을 풀 수 있어요.",

    // What you need to be able to do > checklist > span
    "Sketch linear rational functions <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span>, stating the equations of the vertical asymptote <span class=\"chem\">x = -d/c</span> and horizontal asymptote <span class=\"chem\">y = a/c</span>.": "일차 유리함수 <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span>의 그래프를 그리고 수직점근선 <span class=\"chem\">x = -d/c</span>와 수평점근선 <span class=\"chem\">y = a/c</span>의 방정식을 쓸 수 있어요.",

    // What you need to be able to do > checklist > span
    "Model growth and decay with <span class=\"chem\">f(t) = a e^{kt} + c</span> and sketch logarithmic graphs <span class=\"chem\">y = ln(x - h)</span> with their asymptotes and intercepts.": "<span class=\"chem\">f(t) = a e^{kt} + c</span>로 성장과 감쇠를 모델링하고, 로그 그래프 <span class=\"chem\">y = ln(x - h)</span>를 점근선 및 절편과 함께 그릴 수 있어요.",

    // What you need to be able to do > checklist > span
    "Solve transcendental equations <span class=\"chem\">f(x) = g(x)</span> on Paper 2 using GDC graph intersections and sketch the curves to earn method marks.": "Paper 2에서 GDC 그래프 교점을 이용해 초월방정식 <span class=\"chem\">f(x) = g(x)</span>를 풀고, 풀이 점수를 받기 위해 곡선을 스케치할 수 있어요.",

    // Question decoder: spotting disguised discriminant &amp; mode > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting disguised discriminant &amp; mode > h2
    "Question decoder: spotting disguised discriminant &amp; modelling cues": "문제 디코더: 숨겨진 판별식 및 모델링 단서 찾기",

    // Question decoder: spotting disguised discriminant &amp; mode > p
    "Many Paper 1 quadratic questions never use the word “discriminant”—they disguise <span class=\"chem\">Delta = b^2 - 4ac</span> behind geometric words like <em>tangent</em>, <em>never meets</em>, or <em>always positive</em>.": "Paper 1 이차함수 문제 중 상당수는 “판별식(discriminant)”이라는 단어를 직접 쓰지 않고, <em>접한다(tangent)</em>, <em>만나지 않는다(never meets)</em>, <em>항상 양수이다(always positive)</em> 같은 기하학적 표현 뒤에 <span class=\"chem\">Delta = b^2 - 4ac</span>를 숨겨 놓아요.",

    // Exponential models, logarithmic graphs and GDC equation solving > callout > p
    "<strong>In your Formula Booklet (SL 2.9):</strong> <span class=\"chem\">a^x = e^{x ln a}</span> and <span class=\"chem\">log_a a^x = x = a^{log_a x}</span> (for <span class=\"chem\">a &gt; 0</span>, <span class=\"chem\">a != 1</span>, and <span class=\"chem\">x &gt; 0</span> in the second form) are printed. Use the first to rewrite any exponential with base <span class=\"chem\">e</span>, for example <span class=\"chem\">2^x = e^{x ln 2}</span>.": "<strong>공식집(Formula Booklet, SL 2.9):</strong> <span class=\"chem\">a^x = e^{x ln a}</span>와 <span class=\"chem\">log_a a^x = x = a^{log_a x}</span> (<span class=\"chem\">a &gt; 0</span>, <span class=\"chem\">a != 1</span>, 두 번째 식에서는 <span class=\"chem\">x &gt; 0</span>)가 실려 있어요. 첫 번째 식을 쓰면 어떤 지수함수든 밑이 <span class=\"chem\">e</span>인 꼴로 바꿀 수 있어요. 예: <span class=\"chem\">2^x = e^{x ln 2}</span>.",

    // Reciprocal and linear rational functions > p > data-def attribute
    "The function f(x) = 1/x, x ≠ 0. Its graph is a rectangular hyperbola with asymptotes x = 0 and y = 0.": "함수 f(x) = 1/x (x ≠ 0). 그래프는 x = 0과 y = 0을 점근선으로 하는 직각쌍곡선이에요.",

    // Reciprocal and linear rational functions > p
    "The <dfn data-def=\"The function f(x) = 1/x, x ≠ 0. Its graph is a rectangular hyperbola with asymptotes x = 0 and y = 0.\">reciprocal function</dfn> <span class=\"chem\">f(x) = 1/x</span> (<span class=\"chem\">x != 0</span>) has asymptotes <span class=\"chem\">x = 0</span> and <span class=\"chem\">y = 0</span>. It is <strong>self-inverse</strong>: <span class=\"chem\">f(f(x)) = 1/(1/x) = x</span>, so <span class=\"chem\">f^{-1}(x) = f(x)</span>, and its graph is symmetric in the line <span class=\"chem\">y = x</span>.": "<dfn data-def=\"함수 f(x) = 1/x (x ≠ 0). 그래프는 x = 0과 y = 0을 점근선으로 하는 직각쌍곡선이에요.\">분수함수 <span class=\"en-term\">(reciprocal function)</span></dfn> <span class=\"chem\">f(x) = 1/x</span> (<span class=\"chem\">x != 0</span>)의 점근선은 <span class=\"chem\">x = 0</span>과 <span class=\"chem\">y = 0</span>이에요. 이 함수는 <strong>자기역함수</strong>예요: <span class=\"chem\">f(f(x)) = 1/(1/x) = x</span>이므로 <span class=\"chem\">f^{-1}(x) = f(x)</span>이고, 그래프는 직선 <span class=\"chem\">y = x</span>에 대해 대칭이에요.",

    // Quadratic forms, completing the square and the discriminant > callout > p
    "<strong>In your Formula Booklet (SL 2.6 and SL 2.7):</strong> The axis of symmetry <span class=\"chem\">x = -b/(2a)</span>, the quadratic formula <span class=\"chem\">x = (-b +- sqrt(b^2 - 4ac))/(2a)</span> and the discriminant <span class=\"chem\">Delta = b^2 - 4ac</span> are printed. What each sign of <span class=\"chem\">Delta</span> tells you about the roots is not printed, so learn it.": "<strong>공식집(Formula Booklet, SL 2.6·SL 2.7):</strong> 대칭축 <span class=\"chem\">x = -b/(2a)</span>, 근의 공식 <span class=\"chem\">x = (-b +- sqrt(b^2 - 4ac))/(2a)</span>, 판별식 <span class=\"chem\">Delta = b^2 - 4ac</span>가 실려 있어요. <span class=\"chem\">Delta</span>의 부호가 근에 대해 무엇을 알려 주는지는 실려 있지 않으니 외워 두세요.",

    // Question decoder: spotting disguised discriminant &amp; mode > table > caption
    "Question decoder — Quadratics, rational functions, exponentials &amp; GDC solving": "문제 디코더 — 이차함수, 유리함수, 지수함수 및 GDC 풀이",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Two distinct real roots” / “Line intersects the curve twice”": "“서로 다른 두 실근” / “직선이 곡선과 두 점에서 만난다”",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Equate <span class=\"chem\">f(x) = g(x)</span>, rearrange to <span class=\"chem\">Ax^2 + Bx + C = 0</span>, and set <strong><span class=\"chem\">Delta = B^2 - 4AC &gt; 0</span></strong>.": "<span class=\"chem\">f(x) = g(x)</span>로 놓고 <span class=\"chem\">Ax^2 + Bx + C = 0</span>으로 정리한 뒤 <strong><span class=\"chem\">Delta = B^2 - 4AC &gt; 0</span></strong>으로 두세요.",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "If <span class=\"chem\">Delta &gt; 0</span> gives a quadratic inequality in <span class=\"chem\">k</span>, sketch a mini parabola in <span class=\"chem\">k</span> to pick the right intervals!": "<span class=\"chem\">Delta &gt; 0</span>이 <span class=\"chem\">k</span>에 대한 이차부등식이 되면, <span class=\"chem\">k</span>에 대한 작은 포물선을 그려 올바른 구간을 고르세요!",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Touches the <span class=\"chem\">x</span>-axis” / “Line is tangent to the parabola” / “Equal (repeated) root”": "“<span class=\"chem\">x</span>축에 접한다” / “직선이 포물선에 접한다” / “중근”",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Rearrange to <span class=\"chem\">Ax^2 + Bx + C = 0</span> and set <strong><span class=\"chem\">Delta = B^2 - 4AC = 0</span></strong>.": "<span class=\"chem\">Ax^2 + Bx + C = 0</span>으로 정리한 뒤 <strong><span class=\"chem\">Delta = B^2 - 4AC = 0</span></strong>으로 두세요.",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Setting <span class=\"chem\">Delta = 0</span> is much faster than using derivatives when an unknown parameter <span class=\"chem\">k</span> appears in multiple terms.": "미지수 <span class=\"chem\">k</span>가 여러 항에 들어 있을 때는 미분을 쓰는 것보다 <span class=\"chem\">Delta = 0</span>을 쓰는 편이 훨씬 빨라요.",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“No real roots” / “Line never meets the curve” / “Always positive for all <span class=\"chem\">x ∈ ℝ</span>”": "“실근이 없다” / “직선이 곡선과 만나지 않는다” / “모든 <span class=\"chem\">x ∈ ℝ</span>에 대해 항상 양수”",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Set <strong><span class=\"chem\">Delta = B^2 - 4AC &lt; 0</span></strong> (and require leading coefficient <strong><span class=\"chem\">a &gt; 0</span></strong> for “always positive”, or <span class=\"chem\">a &lt; 0</span> for “always negative”).": "<strong><span class=\"chem\">Delta = B^2 - 4AC &lt; 0</span></strong>으로 두세요 (단, “항상 양수”면 최고차항 계수 <strong><span class=\"chem\">a &gt; 0</span></strong>, “항상 음수”면 <span class=\"chem\">a &lt; 0</span> 조건도 필요해요).",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Remember: a parabola lies entirely above the <span class=\"chem\">x</span>-axis if and only if it opens upwards (<span class=\"chem\">a &gt; 0</span>) <em>and</em> never crosses the axis (<span class=\"chem\">Delta &lt; 0</span>).": "기억하세요: 포물선이 <span class=\"chem\">x</span>축 위에 완전히 놓이려면 아래로 볼록(<span class=\"chem\">a &gt; 0</span>)이면서 <em>동시에</em> 축과 만나지 않아야(<span class=\"chem\">Delta &lt; 0</span>) 해요.",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“The equation has real roots”": "“방정식이 실근을 갖는다”",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Could be 1 repeated root <em>or</em> 2 distinct roots: set <strong><span class=\"chem\">Delta = b^2 - 4ac &gt;= 0</span></strong> (non-strict!).": "중근 1개<em>이거나</em> 서로 다른 두 실근 2개일 수 있으므로 <strong><span class=\"chem\">Delta = b^2 - 4ac &gt;= 0</span></strong> (등호 포함!)으로 두세요.",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Watch the wording carefully: “real roots” (<span class=\"chem\">Delta &gt;= 0</span>) vs “two distinct real roots” (<span class=\"chem\">Delta &gt; 0</span>).": "표현을 주의 깊게 보세요: “실근(real roots)” (<span class=\"chem\">Delta &gt;= 0</span>) vs “서로 다른 두 실근(two distinct real roots)” (<span class=\"chem\">Delta &gt; 0</span>).",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Solve <span class=\"chem\">ax^2 + bx + c &gt; 0</span> (or <span class=\"chem\">&lt;= 0</span>)”": "“<span class=\"chem\">ax^2 + bx + c &gt; 0</span> (또는 <span class=\"chem\">&lt;= 0</span>)을 푸시오”",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Factor to find the roots <span class=\"chem\">p, q</span>, then <strong>always sketch the parabola</strong> or a sign diagram.": "인수분해하여 근 <span class=\"chem\">p, q</span>를 구한 뒤, <strong>항상 포물선 그래프</strong>나 부호표를 그리세요.",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Never write <span class=\"chem\">x &gt; +-3</span>! For <span class=\"chem\">a &gt; 0</span>: <span class=\"chem\">&lt; 0</span> is <em>between</em> the roots (<span class=\"chem\">p &lt; x &lt; q</span>); <span class=\"chem\">&gt; 0</span> is <em>outside</em> the roots (<span class=\"chem\">x &lt; p</span> or <span class=\"chem\">x &gt; q</span>).": "절대 <span class=\"chem\">x &gt; +-3</span>처럼 쓰지 마세요! <span class=\"chem\">a &gt; 0</span>일 때 <span class=\"chem\">&lt; 0</span>은 두 근 <em>사이</em>(<span class=\"chem\">p &lt; x &lt; q</span>), <span class=\"chem\">&gt; 0</span>은 두 근 <em>바깥쪽</em>(<span class=\"chem\">x &lt; p</span> 또는 <span class=\"chem\">x &gt; q</span>)이에요.",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Find the initial population / temperature”": "“초기 개체 수 / 온도를 구하시오”",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Substitute <strong><span class=\"chem\">t = 0</span></strong> into the model and use <span class=\"chem\">b^0 = 1</span> or <span class=\"chem\">e^0 = 1</span>.": "모델에 <strong><span class=\"chem\">t = 0</span></strong>을 대입하고 <span class=\"chem\">b^0 = 1</span> 또는 <span class=\"chem\">e^0 = 1</span>을 이용하세요.",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "In <span class=\"chem\">P(t) = A + B e^{-kt}</span>, the initial value is <span class=\"chem\">P(0) = A + B</span>, <em>not</em> <span class=\"chem\">A</span> and <em>not</em> <span class=\"chem\">B</span> alone!": "<span class=\"chem\">P(t) = A + B e^{-kt}</span>에서 초깃값은 <span class=\"chem\">A</span><em>도 아니고</em> <span class=\"chem\">B</span><em>만도 아닌</em> <span class=\"chem\">P(0) = A + B</span>예요!",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Find the long-term / limiting value as <span class=\"chem\">t -&gt; infty</span>”": "“<span class=\"chem\">t -&gt; infty</span>일 때의 장기적 / 극한 값을 구하시오”",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Horizontal asymptote of the decay/growth model: since <span class=\"chem\">e^{-kt} -&gt; 0</span> (for <span class=\"chem\">k &gt; 0</span>), <span class=\"chem\">P(t) -&gt; A</span>.": "감쇠/성장 모델의 수평점근선: <span class=\"chem\">k &gt; 0</span>일 때 <span class=\"chem\">e^{-kt} -&gt; 0</span>이므로 <span class=\"chem\">P(t) -&gt; A</span>예요.",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Write <em>“As <span class=\"chem\">t -&gt; infty, e^{-kt} -&gt; 0</span>”</em> explicitly if the question says <em>Explain</em> or <em>Show that</em>.": "문제에 <em>Explain</em>이나 <em>Show that</em>이 있으면 <em>“<span class=\"chem\">t -&gt; infty, e^{-kt} -&gt; 0</span>이므로”</em>를 명확히 적으세요.",

    // Question decoder: spotting disguised discriminant &amp; mode > table > th
    "“Solve <span class=\"chem\">e^x = 5 - x^2</span>”": "“<span class=\"chem\">e^x = 5 - x^2</span>을 푸시오”",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Mixed exponential + polynomial equation has no algebraic closed form. Use <strong>Paper 2 GDC graph intersection</strong>!": "지수함수와 다항함수가 섞인 방정식은 대수적으로 풀 수 없어요. <strong>Paper 2 GDC 그래프 교점</strong>을 이용하세요!",

    // Question decoder: spotting disguised discriminant &amp; mode > table > td
    "Plot <span class=\"chem\">Y_1 = e^x</span> and <span class=\"chem\">Y_2 = 5 - x^2</span> (or <span class=\"chem\">Y_1 = e^x + x^2 - 5</span> zeroes). Draw a quick sketch showing the intersections to secure <strong>[M1]</strong>.": "<span class=\"chem\">Y_1 = e^x</span>와 <span class=\"chem\">Y_2 = 5 - x^2</span>을 그리거나 <span class=\"chem\">Y_1 = e^x + x^2 - 5</span>의 영점을 찾으세요. 방법 점수 <strong>[M1]</strong>을 받기 위해 교점이 보이는 간단한 그래프를 그려 두세요.",

    // Quadratic forms, completing the square and the discriminant > data-toc attribute
    "Quadratics & Δ": "이차함수와 Δ",

    // Quadratic forms, completing the square and the discriminant > h2
    "Quadratic forms, completing the square and the discriminant": "이차함수의 세 가지 형식, 완전제곱식과 판별식",

    // Quadratic forms, completing the square and the discriminant > p
    "Every quadratic function <span class=\"chem\">f(x) = ax^2 + bx + c</span> (<span class=\"chem\">a != 0</span>) graphs as a symmetrical parabola. Depending on what the question gives or asks for, you should pick the most direct of the three quadratic forms:": "모든 이차함수 <span class=\"chem\">f(x) = ax^2 + bx + c</span> (<span class=\"chem\">a != 0</span>)의 그래프는 대칭인 포물선이에요. 문제가 주거나 묻는 정보에 따라 세 가지 형식 중 가장 편리한 것을 고르세요:",

    // Quadratic forms, completing the square and the discriminant > table > caption
    "The three quadratic forms and what each reveals immediately": "이차함수의 세 가지 형식과 바로 알 수 있는 정보",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Form": "형식",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Equation": "방정식",

    // Quadratic forms, completing the square and the discriminant > table > th
    "What you can read off immediately": "바로 읽을 수 있는 정보",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Standard form": "일반형",

    // Quadratic forms, completing the square and the discriminant > table > td
    "<span class=\"chem\">f(x) = ax^2 + bx + c</span>": "<span class=\"chem\">f(x) = ax^2 + bx + c</span>",

    // Quadratic forms, completing the square and the discriminant > table > td
    "<span class=\"chem\">y</span>-intercept at <span class=\"chem\">(0, c)</span>; axis of symmetry <span class=\"chem\">x = -b / (2a)</span>; concavity (<span class=\"chem\">a &gt; 0</span> opens up, <span class=\"chem\">a &lt; 0</span> opens down).": "<span class=\"chem\">y</span>절편 <span class=\"chem\">(0, c)</span>; 대칭축 <span class=\"chem\">x = -b / (2a)</span>; 볼록성 (<span class=\"chem\">a &gt; 0</span>이면 아래로 볼록, <span class=\"chem\">a &lt; 0</span>이면 위로 볼록).",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Vertex (completed square) form": "표준형 (완전제곱식)",

    // Quadratic forms, completing the square and the discriminant > table > td
    "Vertex (turning point) at <span class=\"chem\">(h, k)</span>; axis of symmetry <span class=\"chem\">x = h</span>; range is <span class=\"chem\">y &gt;= k</span> (if <span class=\"chem\">a &gt; 0</span>) or <span class=\"chem\">y &lt;= k</span> (if <span class=\"chem\">a &lt; 0</span>).": "꼭짓점(극값) <span class=\"chem\">(h, k)</span>; 대칭축 <span class=\"chem\">x = h</span>; 치역은 <span class=\"chem\">y &gt;= k</span> (<span class=\"chem\">a &gt; 0</span>일 때) 또는 <span class=\"chem\">y &lt;= k</span> (<span class=\"chem\">a &lt; 0</span>일 때).",

    // Quadratic forms, completing the square and the discriminant > table > th
    "Factored (intercept) form": "인수분해형 (절편형)",

    // Quadratic forms, completing the square and the discriminant > table > td
    "<span class=\"chem\">x</span>-intercepts (roots) at <span class=\"chem\">(p, 0)</span> and <span class=\"chem\">(q, 0)</span>; axis of symmetry halfway between roots at <span class=\"chem\">x = (p + q) / 2</span>.": "<span class=\"chem\">x</span>절편(근) <span class=\"chem\">(p, 0)</span>, <span class=\"chem\">(q, 0)</span>; 대칭축은 두 근의 중점인 <span class=\"chem\">x = (p + q) / 2</span>.",

    // Quadratic forms, completing the square and the discriminant > h3
    "Completing the square when <span class=\"chem\">a != 1</span>": "<span class=\"chem\">a != 1</span>일 때 완전제곱식 만들기",

    // Quadratic forms, completing the square and the discriminant > p
    "To convert <span class=\"chem\">ax^2 + bx + c</span> into vertex form <span class=\"chem\">a(x - h)^2 + k</span> without making sign errors, <strong>factor <span class=\"chem\">a</span> out of the first two terms only</strong>, halve the coefficient of <span class=\"chem\">x</span>, and remember to multiply the subtracted square by <span class=\"chem\">a</span> when bringing it outside the bracket:": "부호 실수 없이 <span class=\"chem\">ax^2 + bx + c</span>를 표준형 <span class=\"chem\">a(x - h)^2 + k</span>로 바꾸려면, <strong>앞의 두 항에서만 <span class=\"chem\">a</span>를 묶어 내고</strong> <span class=\"chem\">x</span> 계수의 절반을 구한 뒤, 괄호 밖으로 뺄 때 반드시 <span class=\"chem\">a</span>를 곱하는 것을 잊지 마세요:",

    // Quadratic forms, completing the square and the discriminant > equation > dd
    "shortcut check: <span class=\"chem\">h = -(-12)/(2 × 2) = 3</span> and <span class=\"chem\">k = f(3) = 2(9) - 36 + 11 = -7</span>": "빠른 검산: <span class=\"chem\">h = -(-12)/(2 × 2) = 3</span>이고 <span class=\"chem\">k = f(3) = 2(9) - 36 + 11 = -7</span>",

    // Quadratic forms, completing the square and the discriminant > equation > dt
    "Δ = b<sup>2</sup> − 4ac": "Δ = b<sup>2</sup> − 4ac",

    // Quadratic forms, completing the square and the discriminant > equation > dd
    "<dfn data-def=\"The quantity Δ = b² − 4ac under the square root in the quadratic formula, which determines the number and nature of roots.\">discriminant</dfn>: <span class=\"chem\">Delta &gt; 0</span> (2 distinct real roots), <span class=\"chem\">Delta = 0</span> (1 repeated root), <span class=\"chem\">Delta &lt; 0</span> (no real roots)": "<dfn data-def=\"The quantity Δ = b² − 4ac under the square root in the quadratic formula, which determines the number and nature of roots.\">판별식 <span class=\"en-term\">(discriminant)</span></dfn>: <span class=\"chem\">Delta &gt; 0</span> (서로 다른 2개의 실근), <span class=\"chem\">Delta = 0</span> (중근 1개), <span class=\"chem\">Delta &lt; 0</span> (실근 없음)",

    // Quadratic forms, completing the square and the discriminant > equation > data-def attribute
    "The quantity Δ = b² − 4ac under the square root in the quadratic formula, which determines the number and nature of roots.": "근의 공식에서 근호 안의 식 Δ = b² − 4ac로, 방정식의 실근의 개수와 성질을 결정하는 값.",

    // Quadratic forms, completing the square and the discriminant > widget > data-title attribute
    "Interactive quadratic & line-parabola discriminant lab": "대화형 이차함수 및 직선-포물선 판별식 실험실",

    // Quadratic forms, completing the square and the discriminant > widget > figcaption
    "Adjust the quadratic coefficients <span class=\"chem\">a, b, c</span> and optional line <span class=\"chem\">y = mx + d</span> to see how the discriminant <span class=\"chem\">Delta</span> controls the number of intersections and the vertex <span class=\"chem\">(h, k)</span>.": "이차함수의 계수 <span class=\"chem\">a, b, c</span>와 직선 <span class=\"chem\">y = mx + d</span>를 조절하며 판별식 <span class=\"chem\">Delta</span>가 교점의 개수와 꼭짓점 <span class=\"chem\">(h, k)</span>를 어떻게 바꾸는지 살펴보세요.",

    // Quadratic forms, completing the square and the discriminant > worked example > h3
    "Solving a disguised discriminant inequality for a tangent/non-intersecting line": "접하거나 만나지 않는 직선에 대한 숨겨진 판별식 부등식 풀기",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "Consider the quadratic curve <span class=\"chem\">y = x^2 + (k - 2)x + 5</span> and the straight line <span class=\"chem\">y = 2x + 1</span>, where <span class=\"chem\">k ∈ ℝ</span>. Find the set of values of <span class=\"chem\">k</span> for which the line and the curve <strong>never intersect</strong>. <strong>[5 marks]</strong>": "이차곡선 <span class=\"chem\">y = x^2 + (k - 2)x + 5</span>와 직선 <span class=\"chem\">y = 2x + 1</span> (<span class=\"chem\">k ∈ ℝ</span>)을 생각하자. 직선과 곡선이 <strong>만나지 않도록</strong> 하는 <span class=\"chem\">k</span>의 값의 범위를 구하시오 (Find). <strong>[5 marks]</strong>",

    // Quadratic forms, completing the square and the discriminant > worked example > data-title attribute
    "Equate the curve and line and rearrange to Ax² + Bx + C = 0": "곡선과 직선을 같다고 놓고 Ax² + Bx + C = 0으로 정리하기",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "Intersections occur where both y-values are equal; standard quadratic form lets us identify A, B, and C.": "교점은 두 식의 y값이 같아지는 곳에서 생기므로 일반형으로 정리해 A, B, C를 찾으세요.",

    // Quadratic forms, completing the square and the discriminant > worked example > data-title attribute
    "Set the discriminant Δ < 0 for no real intersections": "교점이 없도록 판별식 Δ < 0으로 놓기",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "The line and parabola never meet if and only if the intersection equation has no real roots.": "직선과 포물선이 만나지 않는 것은 교점 방정식이 실근을 갖지 않을 때와 같아요.",

    // Quadratic forms, completing the square and the discriminant > worked example > data-title attribute
    "Find the critical values and use a parabolic sketch to write the interval": "경계값을 구하고 포물선 개형으로 구간 적기",

    // Quadratic forms, completing the square and the discriminant > worked example > p
    "Difference of two squares (or expanding k² − 8k &lt; 0) gives critical values k = 0 and k = 8. Since this quadratic in k opens upwards, it is negative between the roots.": "제곱의 차(또는 k² − 8k &lt; 0 전개)로 경계값 k = 0과 k = 8을 얻어요. k에 대한 이 이차식은 아래로 볼록하므로 두 근 사이에서 음수예요.",

    // Quadratic forms, completing the square and the discriminant > worked example > maths line
    "<i>k</i>(<i>k</i> − 8) &lt; 0 ⇒ critical values <i>k</i> = 0, 8 &nbsp; <b>[(A1)]</b>": "<i>k</i>(<i>k</i> − 8) &lt; 0 ⇒ 경계값 <i>k</i> = 0, 8 &nbsp; <b>[(A1)]</b>",

    // Quadratic forms, completing the square and the discriminant > try it > p
    "The quadratic function <span class=\"chem\">f(x) = 2x^2 - 6x + k</span> has <strong>one repeated real root</strong> (its graph is tangent to the <span class=\"chem\">x</span>-axis). Find the exact value of <span class=\"chem\">k</span>.": "이차함수 <span class=\"chem\">f(x) = 2x^2 - 6x + k</span>가 <strong>중근</strong>을 가져요(그래프가 <span class=\"chem\">x</span>축에 접함). <span class=\"chem\">k</span>의 정확한 값을 구하시오 (Find).",

    // Quadratic forms, completing the square and the discriminant > try it > li
    "For a quadratic to have one repeated root (touch the <span class=\"chem\">x</span>-axis), set its discriminant <span class=\"chem\">Delta = b^2 - 4ac = 0</span>.": "이차방정식이 중근을 가지려면(<span class=\"chem\">x</span>축에 접하려면) 판별식 <span class=\"chem\">Delta = b^2 - 4ac = 0</span>으로 놓으세요.",

    // Quadratic forms, completing the square and the discriminant > try it > li
    "Substitute <span class=\"chem\">a = 2</span>, <span class=\"chem\">b = -6</span>, and <span class=\"chem\">c = k</span> into <span class=\"chem\">(-6)^2 - 4(2)(k) = 0</span>.": "<span class=\"chem\">(-6)^2 - 4(2)(k) = 0</span>에 <span class=\"chem\">a = 2</span>, <span class=\"chem\">b = -6</span>, <span class=\"chem\">c = k</span>를 대입하세요.",

    // Quadratic forms, completing the square and the discriminant > try it > maths line
    "8<i>k</i> = 36 ⇒ <i>k</i> = <span class=\"frac\"><span>36</span><span>8</span></span> = <b>4.5</b> (or 9/2)": "8<i>k</i> = 36 ⇒ <i>k</i> = <span class=\"frac\"><span>36</span><span>8</span></span> = <b>4.5</b> (또는 9/2)",

    // Reciprocal and linear rational functions > data-toc attribute
    "Rational functions": "유리함수",

    // Reciprocal and linear rational functions > h2
    "Reciprocal and linear rational functions": "반비례 함수와 일차 유리함수",

    // Reciprocal and linear rational functions > p
    "A linear-over-linear <dfn data-def=\"A function of the form f(x) = (ax + b)/(cx + d) with c ≠ 0 and ad − bc ≠ 0, whose graph is a rectangular hyperbola with one vertical and one horizontal asymptote.\">rational function</dfn> has the form <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span> with <span class=\"chem\">c != 0</span> and <span class=\"chem\">ad - bc != 0</span> (otherwise <span class=\"chem\">f</span> is a constant with a hole). Its graph is a transformation of the basic reciprocal hyperbola <span class=\"chem\">y = 1/x</span> and is anchored by two perpendicular asymptotes:": "일차식 나누기 일차식 꼴의 <dfn data-def=\"A function of the form f(x) = (ax + b)/(cx + d) with c ≠ 0 and ad − bc ≠ 0, whose graph is a rectangular hyperbola with one vertical and one horizontal asymptote.\">유리함수 <span class=\"en-term\">(rational function)</span></dfn>는 <span class=\"chem\">c != 0</span>이고 <span class=\"chem\">ad - bc != 0</span>인 <span class=\"chem\">f(x) = (ax + b)/(cx + d)</span> 꼴이에요(그렇지 않으면 <span class=\"chem\">f</span>는 구멍이 하나 있는 상수함수예요). 그 그래프는 기본 쌍곡선 <span class=\"chem\">y = 1/x</span>를 평행·대칭이동한 것으로, 서로 수직인 두 점근선이 기준이 돼요:",

    // Reciprocal and linear rational functions > data-def attribute
    "A function of the form f(x) = (ax + b)/(cx + d) with c ≠ 0 and ad − bc ≠ 0, whose graph is a rectangular hyperbola with one vertical and one horizontal asymptote.": "c ≠ 0, ad − bc ≠ 0일 때 f(x) = (ax + b)/(cx + d) 꼴의 함수로, 수직점근선 하나와 수평점근선 하나를 갖는 직각쌍곡선 그래프.",

    // Reciprocal and linear rational functions > equation > dt
    "Vertical asymptote": "수직점근선",

    // Reciprocal and linear rational functions > equation > dd
    "set denominator <span class=\"chem\">cx + d = 0</span> to get the line <span class=\"chem\">x = -d/c</span> (excluded from domain)": "분모 <span class=\"chem\">cx + d = 0</span>으로 놓으면 직선 <span class=\"chem\">x = -d/c</span> (정의역에서 제외)",

    // Reciprocal and linear rational functions > equation > dt
    "Horizontal asymptote": "수평점근선",

    // Reciprocal and linear rational functions > equation > dd
    "ratio of leading <span class=\"chem\">x</span>-coefficients as <span class=\"chem\">x -&gt; +-infty</span> gives the line <span class=\"chem\">y = a/c</span> (excluded from range)": "<span class=\"chem\">x -&gt; +-infty</span>일 때 <span class=\"chem\">x</span>의 계수의 비가 직선 <span class=\"chem\">y = a/c</span>를 줌 (치역에서 제외)",

    // Reciprocal and linear rational functions > equation > dt
    // widget string (assets/js/widgets-t2-2.js)
    "Axial intercepts": "좌표축 절편",

    // widget string (assets/js/widgets-t2-2.js)
    "hole": "구멍",

    // widget string (assets/js/widgets-t2-2.js)
    "every x ≠ ": "모든 x ≠ ",

    // widget string (assets/js/widgets-t2-2.js)
    "hole at": "구멍 위치",

    // widget string (assets/js/widgets-t2-2.js)
    "none: ad − bc = 0, so f is constant": "없음: ad − bc = 0이므로 f는 상수함수",

    // widget string (assets/js/widgets-t2-2.js)
    "a = 0 is not a quadratic: choose a ≠ 0": "a = 0이면 이차함수가 아니에요: a ≠ 0을 고르세요",

    // Reciprocal and linear rational functions > equation > dd
    "<span class=\"chem\">y</span>-intercept at <span class=\"chem\">x = 0</span> gives <span class=\"chem\">(0, b/d)</span>; <span class=\"chem\">x</span>-intercept at <span class=\"chem\">y = 0</span> (<span class=\"chem\">ax + b = 0</span>) gives <span class=\"chem\">(-b/a, 0)</span>": "<span class=\"chem\">x = 0</span>에서 <span class=\"chem\">y</span>절편 <span class=\"chem\">(0, b/d)</span>; <span class=\"chem\">y = 0</span> (<span class=\"chem\">ax + b = 0</span>)에서 <span class=\"chem\">x</span>절편 <span class=\"chem\">(-b/a, 0)</span>",

    // Reciprocal and linear rational functions > common mistake > p
    "<strong>Common mistake — Writing an asymptote as a number instead of an equation:</strong> Writing <em>“Vertical asymptote = 2”</em> or <em>“HA = 3”</em> usually loses the mark: markschemes expect an equation. An asymptote is a straight line, so you <strong>must</strong> write the full equation <strong><span class=\"chem\">x = 2</span></strong> for a vertical asymptote and <strong><span class=\"chem\">y = 3</span></strong> for a horizontal asymptote.": "<strong>자주 하는 실수 — 점근선을 방정식이 아닌 숫자로 적기:</strong> <em>“수직점근선 = 2”</em> 또는 <em>“HA = 3”</em>이라고 쓰면 보통 점수를 잃어요. 채점 기준은 방정식을 요구하기 때문이에요. 점근선은 직선이므로 수직점근선은 <strong>반드시</strong> 방정식 <strong><span class=\"chem\">x = 2</span></strong>, 수평점근선은 <strong><span class=\"chem\">y = 3</span></strong>으로 써야 해요.",

    // Reciprocal and linear rational functions > widget > data-title attribute
    "Linear rational function explorer: f(x) = (ax + b) / (cx + d)": "일차 유리함수 탐색기: f(x) = (ax + b) / (cx + d)",

    // Reciprocal and linear rational functions > widget > figcaption
    "Adjust <span class=\"chem\">a, b, c, d</span> to see how the vertical asymptote <span class=\"chem\">x = -d/c</span>, horizontal asymptote <span class=\"chem\">y = a/c</span>, axial intercepts, and decomposed form <span class=\"chem\">A + B/(cx + d)</span> update in real time.": "<span class=\"chem\">a, b, c, d</span>를 조절하여 수직점근선 <span class=\"chem\">x = -d/c</span>, 수평점근선 <span class=\"chem\">y = a/c</span>, 좌표축 절편, 그리고 변형된 꼴 <span class=\"chem\">A + B/(cx + d)</span>이 실시간으로 어떻게 변하는지 확인해 보세요.",

    // Reciprocal and linear rational functions > worked example > h3
    "Rewriting a rational function to identify asymptotes and intercepts": "유리함수를 변형하여 점근선과 절편 구하기",

    // Reciprocal and linear rational functions > worked example > p
    "The function <span class=\"chem\">f</span> is defined by <span class=\"chem\">f(x) = (3x - 5)/(x - 2)</span> for <span class=\"chem\">x != 2</span>.<br> (a) State the equations of the vertical and horizontal asymptotes of the graph of <span class=\"chem\">f</span>. <strong>[2 marks]</strong><br> (b) Express <span class=\"chem\">f(x)</span> in the form <span class=\"chem\">A + B/(x - 2)</span>, where <span class=\"chem\">A, B ∈ ℤ</span>. <strong>[2 marks]</strong>": "함수 <span class=\"chem\">f</span>가 <span class=\"chem\">x != 2</span>에서 <span class=\"chem\">f(x) = (3x - 5)/(x - 2)</span>로 정의되어 있다.<br> (a) <span class=\"chem\">f</span>의 그래프의 수직점근선과 수평점근선의 방정식을 쓰시오 (State). <strong>[2 marks]</strong><br> (b) <span class=\"chem\">f(x)</span>를 <span class=\"chem\">A + B/(x - 2)</span> (<span class=\"chem\">A, B ∈ ℤ</span>) 꼴로 나타내시오. <strong>[2 marks]</strong>",

    // Reciprocal and linear rational functions > worked example > data-title attribute
    "Find the vertical and horizontal asymptotes as line equations": "수직점근선과 수평점근선을 직선의 방정식으로 구하기",

    // Reciprocal and linear rational functions > worked example > p
    "Set the denominator to 0 for the vertical asymptote, and take the ratio of x-coefficients for the horizontal asymptote.": "수직점근선은 분모를 0으로 놓고, 수평점근선은 x 계수의 비를 구하세요.",

    // Reciprocal and linear rational functions > worked example > maths line
    "Vertical asymptote: <b><i>x</i> = 2</b> &nbsp; <b>[A1]</b>": "수직점근선: <b><i>x</i> = 2</b> &nbsp; <b>[A1]</b>",

    // Reciprocal and linear rational functions > worked example > maths line
    "Horizontal asymptote: <b><i>y</i> = 3</b> &nbsp; (from <span class=\"chem\">3x / x</span>) &nbsp; <b>[A1]</b>": "수평점근선: <b><i>y</i> = 3</b> &nbsp; (<span class=\"chem\">3x / x</span>에서) &nbsp; <b>[A1]</b>",

    // Reciprocal and linear rational functions > worked example > data-title attribute
    "Rewrite the numerator in terms of (x − 2) and split the fraction": "분자를 (x − 2) 꼴로 고쳐 쓰고 분수 나누기",

    // Reciprocal and linear rational functions > worked example > p
    "Creating 3(x − 2) in the numerator lets (x − 2) cancel cleanly into the constant horizontal asymptote value A = 3.": "분자에 3(x − 2)를 만들면 (x − 2)가 약분되어 수평점근선 값인 상수 A = 3이 깔끔하게 분리돼요.",

    // Reciprocal and linear rational functions > worked example > p
    "(a) VA: <span class=\"chem\">x = 2</span>, HA: <span class=\"chem\">y = 3</span>; (b) <span class=\"chem\">3 + 1/(x - 2)</span>": "(a) 수직점근선: <span class=\"chem\">x = 2</span>, 수평점근선: <span class=\"chem\">y = 3</span>; (b) <span class=\"chem\">3 + 1/(x - 2)</span>",

    // Reciprocal and linear rational functions > try it > p
    "The graph of <span class=\"chem\">f(x) = (4x + 7)/(2x + 5)</span> has a vertical asymptote with equation <span class=\"chem\">x = k</span>. Find the exact value of <span class=\"chem\">k</span>.": "<span class=\"chem\">f(x) = (4x + 7)/(2x + 5)</span>의 그래프는 방정식이 <span class=\"chem\">x = k</span>인 수직점근선을 가져요. <span class=\"chem\">k</span>의 정확한 값을 구하시오 (Find).",

    // Reciprocal and linear rational functions > try it > li
    "A vertical asymptote occurs where the denominator equals zero (provided the numerator is non-zero there).": "수직점근선은 분모가 0이 되는 곳에서 생겨요 (그 점에서 분자가 0이 아닐 때).",

    // Reciprocal and linear rational functions > try it > li
    "Solve <span class=\"chem\">2x + 5 = 0</span> for <span class=\"chem\">x</span>.": "<span class=\"chem\">2x + 5 = 0</span>을 <span class=\"chem\">x</span>에 관해 푸세요.",

    // Reciprocal and linear rational functions > try it > maths line
    "2<i>x</i> + 5 = 0 ⇒ 2<i>x</i> = −5 ⇒ <i>k</i> = <b>−2.5</b> (or −5/2)": "2<i>x</i> + 5 = 0 ⇒ 2<i>x</i> = −5 ⇒ <i>k</i> = <b>−2.5</b> (또는 −5/2)",

    // Exponential models, logarithmic graphs and GDC equation solv > data-toc attribute
    "Exp & log models": "지수·로그 모델",

    // Exponential models, logarithmic graphs and GDC equation solv > h2
    "Exponential models, logarithmic graphs and GDC equation solving": "지수 모델, 로그 그래프와 GDC 방정식 풀이",

    // Exponential models, logarithmic graphs and GDC equation solv > p
    "Exponential and logarithmic functions are <strong>inverse pairs</strong>: <span class=\"chem\">y = a^x</span> and <span class=\"chem\">y = log_a x</span> (and in particular <span class=\"chem\">y = e^x</span> and <span class=\"chem\">y = ln x</span>) are reflections of each other across the line <span class=\"chem\">y = x</span>.": "지수함수와 로그함수는 <strong>역함수 쌍</strong>이에요: <span class=\"chem\">y = a^x</span>와 <span class=\"chem\">y = log_a x</span> (특히 <span class=\"chem\">y = e^x</span>와 <span class=\"chem\">y = ln x</span>)는 직선 <span class=\"chem\">y = x</span>에 대해 서로 대칭이에요.",

    // Exponential models, logarithmic graphs and GDC equation solv > table > caption
    "Comparing shifted exponential and logarithmic graphs": "평행이동된 지수함수와 로그함수 그래프 비교",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Feature": "특징",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Exponential model <span class=\"chem\">f(t) = A e^{kt} + C</span>": "지수 모델 <span class=\"chem\">f(t) = A e^{kt} + C</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Logarithmic model <span class=\"chem\">g(x) = a ln(x - h) + d</span>": "로그 모델 <span class=\"chem\">g(x) = a ln(x - h) + d</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Domain": "정의역",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "All real numbers <span class=\"chem\">t ∈ ℝ</span> (or <span class=\"chem\">t &gt;= 0</span> in time contexts)": "모든 실수 <span class=\"chem\">t ∈ ℝ</span> (시간 문맥에서는 <span class=\"chem\">t &gt;= 0</span>)",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "Restricted: <span class=\"chem\">x - h &gt; 0 =&gt; x &gt; h</span>": "제한됨: <span class=\"chem\">x - h &gt; 0 =&gt; x &gt; h</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Range": "치역",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "Restricted: <span class=\"chem\">y &gt; C</span> (if <span class=\"chem\">A &gt; 0</span>) or <span class=\"chem\">y &lt; C</span> (if <span class=\"chem\">A &lt; 0</span>)": "제한됨: <span class=\"chem\">y &gt; C</span> (<span class=\"chem\">A &gt; 0</span>일 때) 또는 <span class=\"chem\">y &lt; C</span> (<span class=\"chem\">A &lt; 0</span>일 때)",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "All real numbers <span class=\"chem\">y ∈ ℝ</span>": "모든 실수 <span class=\"chem\">y ∈ ℝ</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Asymptote": "점근선",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "<strong>Horizontal asymptote <span class=\"chem\">y = C</span></strong> (since <span class=\"chem\">e^{kt} -&gt; 0</span> as <span class=\"chem\">kt -&gt; -infty</span>)": "<strong>수평점근선 <span class=\"chem\">y = C</span></strong> (<span class=\"chem\">kt -&gt; -infty</span>일 때 <span class=\"chem\">e^{kt} -&gt; 0</span>이므로)",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "<strong>Vertical asymptote <span class=\"chem\">x = h</span></strong> (where the log argument hits <span class=\"chem\">0</span>)": "<strong>수직점근선 <span class=\"chem\">x = h</span></strong> (로그의 진수가 <span class=\"chem\">0</span>이 되는 곳)",

    // Exponential models, logarithmic graphs and GDC equation solv > table > th
    "Initial / key point": "초깃값 / 기준점",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "At <span class=\"chem\">t = 0</span>, <span class=\"chem\">f(0) = A e^0 + C = A + C</span>": "<span class=\"chem\">t = 0</span>일 때 <span class=\"chem\">f(0) = A e^0 + C = A + C</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > table > td
    "When <span class=\"chem\">x - h = 1</span> (<span class=\"chem\">x = h + 1</span>), <span class=\"chem\">ln(1) = 0</span> so <span class=\"chem\">g(h + 1) = d</span>": "<span class=\"chem\">x - h = 1</span> (<span class=\"chem\">x = h + 1</span>)일 때 <span class=\"chem\">ln(1) = 0</span>이므로 <span class=\"chem\">g(h + 1) = d</span>",

    // Exponential models, logarithmic graphs and GDC equation solv > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Earning full marks on Paper 2 GDC intersection questions:</strong> When a Paper 2 question asks you to solve an equation like <span class=\"chem\">e^{-0.4x} = x^2 - 3</span> where x appears both inside an exponential/log and inside a polynomial, <strong>do not try to isolate <span class=\"chem\">x</span> algebraically</strong>—it is impossible! Instead, graph <span class=\"chem\">Y_1 = e^{-0.4x}</span> and <span class=\"chem\">Y_2 = x^2 - 3</span> on your GDC, <strong>draw a small labelled sketch</strong> showing the curves and their intersection point(s) in your answer booklet (this secures the <strong>[M1]</strong> method mark even if you misread a digit), and write the coordinates to 3 s.f.": "<strong>시험 팁 — Paper 2 GDC 교점 문제에서 만점 받기:</strong> Paper 2에서 <span class=\"chem\">e^{-0.4x} = x^2 - 3</span>처럼 지수/로그 안과 다항식 안에 x가 동시에 들어 있는 방정식을 풀라고 할 때는 <strong>절대 <span class=\"chem\">x</span>를 대수적으로 풀려 하지 마세요</strong>—불가능해요! 대신 GDC에 <span class=\"chem\">Y_1 = e^{-0.4x}</span>와 <span class=\"chem\">Y_2 = x^2 - 3</span>을 그리고, 답안지에 두 곡선과 교점이 드러나는 <strong>간단한 스케치를 그려서</strong>(숫자를 잘못 읽더라도 방법 점수 <strong>[M1]</strong>을 확보할 수 있어요!) 좌표를 유효숫자 3자리로 적으세요.",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > h3
    "Modelling Newton's cooling with an exponential decay function": "지수 감쇠 함수로 뉴턴의 냉각 법칙 모델링하기",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "The temperature <span class=\"chem\">T</span> (in <span class=\"unit\">°C</span>) of a cup of coffee <span class=\"chem\">t</span> minutes after it is poured is modelled by <span class=\"chem\">T(t) = 22 + 68 e^{-0.08t}</span> for <span class=\"chem\">t &gt;= 0</span>.<br> (a) Write down the initial temperature of the coffee and the room temperature it approaches after a very long time. <strong>[2 marks]</strong><br> (b) Find the exact time <span class=\"chem\">t</span> when the coffee reaches <span class=\"chem\">56</span> <span class=\"unit\">°C</span>, giving your answer in the form <span class=\"chem\">a ln 2</span>. <strong>[3 marks]</strong>": "커피를 따른 지 <span class=\"chem\">t</span>분 후의 온도 <span class=\"chem\">T</span>(<span class=\"unit\">°C</span>)가 <span class=\"chem\">t &gt;= 0</span>에서 <span class=\"chem\">T(t) = 22 + 68 e^{-0.08t}</span>로 모델링된다.<br> (a) 커피의 초기 온도와 아주 오랜 시간이 지난 뒤 가까워지는 실내 온도를 각각 쓰시오 (Write down). <strong>[2 marks]</strong><br> (b) 커피의 온도가 <span class=\"chem\">56</span> <span class=\"unit\">°C</span>에 도달하는 정확한 시각 <span class=\"chem\">t</span>를 <span class=\"chem\">a ln 2</span> 꼴로 구하시오 (Find). <strong>[3 marks]</strong>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > data-title attribute
    "Evaluate t = 0 for initial temperature and t → ∞ for limiting temperature": "t = 0에서 초기 온도, t → ∞에서 극한 온도 구하기",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "At t = 0, e⁰ = 1; as t → ∞, the exponential term tends to 0, leaving the horizontal asymptote T = 22.": "t = 0일 때 e⁰ = 1이고, t → ∞일 때 지수항은 0에 가까워지므로 수평점근선 T = 22만 남아요.",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > maths line
    "Initial temperature: <i>T</i>(0) = 22 + 68(1) = <b>90 °C</b> &nbsp; <b>[A1]</b>": "초기 온도: <i>T</i>(0) = 22 + 68(1) = <b>90 °C</b> &nbsp; <b>[A1]</b>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > maths line
    "Long-term room temperature (as <i>t</i> → ∞): <b>22 °C</b> &nbsp; <b>[A1]</b>": "장기적인 실내 온도 (<i>t</i> → ∞일 때): <b>22 °C</b> &nbsp; <b>[A1]</b>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > data-title attribute
    "Isolate the exponential term before taking natural logs": "자연로그를 취하기 전에 지수항만 남기기",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "Always subtract 22 and divide by 68 BEFORE applying ln to both sides.": "양변에 ln을 취하기 전에 반드시 22를 빼고 68로 먼저 나누세요.",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > data-title attribute
    "Take natural logs and use ln(1/2) = −ln 2": "자연로그를 취하고 ln(1/2) = −ln 2 이용하기",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "Writing ln(1/2) = −ln 2 cancels the negative sign and gives the exact form a ln 2.": "ln(1/2) = −ln 2로 고쳐 쓰면 마이너스 부호가 상쇄되어 정확한 a ln 2 꼴을 얻어요.",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > maths line
    "−0.08<i>t</i> = ln(1/2) = −ln 2 ⇒ <i>t</i> = <span class=\"frac\"><span>ln 2</span><span>0.08</span></span> = <b>12.5 ln 2</b> (or <span class=\"frac\"><span>25</span><span>2</span></span> ln 2) minutes &nbsp; <b>[A1]</b>": "−0.08<i>t</i> = ln(1/2) = −ln 2 ⇒ <i>t</i> = <span class=\"frac\"><span>ln 2</span><span>0.08</span></span> = <b>12.5 ln 2</b> (또는 <span class=\"frac\"><span>25</span><span>2</span></span> ln 2) 분 &nbsp; <b>[A1]</b>",

    // Exponential models, logarithmic graphs and GDC equation solv > worked example > p
    "(a) Initial: <span class=\"chem\">90</span> <span class=\"unit\">°C</span>, Long-term: <span class=\"chem\">22</span> <span class=\"unit\">°C</span>; (b) <span class=\"chem\">t = 12.5 ln 2</span> minutes": "(a) 초기: <span class=\"chem\">90</span> <span class=\"unit\">°C</span>, 장기: <span class=\"chem\">22</span> <span class=\"unit\">°C</span>; (b) <span class=\"chem\">t = 12.5 ln 2</span> 분",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > p
    "Using your GDC, find the positive root of the equation <span class=\"chem\">e^x = 6 - x^2</span>, giving your answer correct to 3 significant figures.": "GDC를 사용하여 방정식 <span class=\"chem\">e^x = 6 - x^2</span>의 양의 근을 구하고 (Find) 유효숫자 3자리로 답하시오.",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > li
    "Plot <span class=\"chem\">Y_1 = e^x</span> and <span class=\"chem\">Y_2 = 6 - x^2</span> on your GDC (or find the positive zero of <span class=\"chem\">f(x) = e^x + x^2 - 6</span>).": "GDC에 <span class=\"chem\">Y_1 = e^x</span>와 <span class=\"chem\">Y_2 = 6 - x^2</span>을 그리세요 (또는 <span class=\"chem\">f(x) = e^x + x^2 - 6</span>의 양의 영점을 찾으세요).",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > li
    "Use the GDC intersection tool in the first quadrant (<span class=\"chem\">x &gt; 0</span>) and round <span class=\"chem\">x ≈ 1.39778</span> to 3 significant figures.": "제1사분면(<span class=\"chem\">x &gt; 0</span>)에서 GDC 교점 도구를 사용하고 <span class=\"chem\">x ≈ 1.39778</span>을 유효숫자 3자리로 반올림하세요.",

    // Exponential models, logarithmic graphs and GDC equation solv > try it > maths line
    "Intersecting <i>y</i> = <i>e</i><sup><i>x</i></sup> and <i>y</i> = 6 − <i>x</i><sup>2</sup> for <i>x</i> &gt; 0 gives (1.398, 4.046) ⇒ <i>x</i> = <b>1.40</b> (3 s.f.).": "<i>y</i> = <i>e</i><sup><i>x</i></sup>와 <i>y</i> = 6 − <i>x</i><sup>2</sup>의 <i>x</i> &gt; 0에서의 교점은 (1.398, 4.046) ⇒ <i>x</i> = <b>1.40</b> (3 s.f.).",

    // Exponential models, logarithmic graphs and GDC equation solv > not needed for IB > p
    "<strong>Not needed for IB:</strong> You do not need focus-directrix definitions of parabolas, standard equations of ellipses (<span class=\"chem\">x^2/a^2 + y^2/b^2 = 1</span>) or hyperbolas (<span class=\"chem\">x^2/a^2 - y^2/b^2 = 1</span>), or the Lambert <span class=\"chem\">W</span>-function for solving <span class=\"chem\">x e^x = c</span> analytically.": "<strong>IB 시험 범위 외 내용:</strong> 포물선의 초점-준선 정의, 타원의 표준 방정식(<span class=\"chem\">x^2/a^2 + y^2/b^2 = 1</span>)이나 쌍곡선의 표준 방정식(<span class=\"chem\">x^2/a^2 - y^2/b^2 = 1</span>), 그리고 <span class=\"chem\">x e^x = c</span>를 해석적으로 풀기 위한 람베르트 <span class=\"chem\">W</span> 함수는 필요하지 않아요.",

    // Quick practice > data-toc attribute
    "Practice": "연습 문제",

    // Quick practice > h2
    "Quick practice": "빠른 연습 문제",

    // Quick practice > h3
    "Foundation: quadratic forms, asymptotes and inverse graphs": "기초: 이차함수의 형태, 점근선과 역함수 그래프",

    // Quick practice > data-title attribute
    "2.2 foundation": "2.2 기초",

    // Quick practice > h3
    "Exam standard: Paper 1 and Paper 2": "실전 수준: Paper 1 및 Paper 2",

    // Quick practice > data-title attribute
    "2.2 exam standard": "2.2 실전",

    // Quick practice > h3
    "Challenge: decoding unfamiliar models": "심화: 낯선 모델 해독하기",

    // Quick practice > data-title attribute
    "2.2 challenge": "2.2 심화",

    // widget string (assets/js/widgets-t2-2.js)
    "Coefficient a": "계수 a",

    // widget string (assets/js/widgets-t2-2.js)
    "Coefficient b": "계수 b",

    // widget string (assets/js/widgets-t2-2.js)
    "Constant c": "상수 c",

    // widget string (assets/js/widgets-t2-2.js)
    "Line gradient m (y = mx)": "직선 기울기 m (y = mx)",

    // widget string (assets/js/widgets-t2-2.js)
    "Tangent (Δ = 0)": "접선 (Δ = 0)",

    // widget string (assets/js/widgets-t2-2.js)
    "Always positive (Δ < 0)": "항상 양수 (Δ < 0)",

    // widget string (assets/js/widgets-t2-2.js)
    "Parabola vertex & axis": "포물선 꼭짓점 및 대칭축",

    // widget string (assets/js/widgets-t2-2.js)
    "Intersection equation f(x) = mx": "교점 방정식 f(x) = mx",

    // widget string (assets/js/widgets-t2-2.js)
    "Discriminant Δ = B² − 4AC": "판별식 Δ = B² − 4AC",

    // widget string (assets/js/widgets-t2-2.js)
    "Geometric interpretation": "기하학적 해석",

    // widget string (assets/js/widgets-t2-2.js)
    "Δ = 0 → 1 repeated real root (line is tangent at x =": "Δ = 0 → 중근 1개 (직선이 접함, x =",

    // widget string (assets/js/widgets-t2-2.js)
    "Δ > 0 → 2 distinct real intersections (x =": "Δ > 0 → 서로 다른 실수 교점 2개 (x =",

    // widget string (assets/js/widgets-t2-2.js)
    "Δ < 0 → 0 real intersections (curve and line never meet)": "Δ < 0 → 실수 교점 0개 (곡선과 직선이 만나지 않음)",

    // widget string (assets/js/widgets-t2-2.js)
    "Parabola y = ax² + bx + c and line y = mx": "포물선 y = ax² + bx + c와 직선 y = mx",

    // widget string (assets/js/widgets-t2-2.js)
    "Numerator a (in ax + b)": "분자 a (ax + b 중)",

    // widget string (assets/js/widgets-t2-2.js)
    "Numerator b (in ax + b)": "분자 b (ax + b 중)",

    // widget string (assets/js/widgets-t2-2.js)
    "Denominator c (in cx + d)": "분모 c (cx + d 중)",

    // widget string (assets/js/widgets-t2-2.js)
    "Denominator d (in cx + d)": "분모 d (cx + d 중)",

    // widget string (assets/js/widgets-t2-2.js)
    "Vertical asymptote (VA)": "수직점근선 (VA)",

    // widget string (assets/js/widgets-t2-2.js)
    "Horizontal asymptote (HA)": "수평점근선 (HA)",

    // widget string (assets/js/widgets-t2-2.js)
    "Decomposed form A + B/(cx + d)": "분리된 꼴 A + B/(cx + d)",

    // widget string (assets/js/widgets-t2-2.js)
    "Graph of rational function f(x) = (ax + b)/(cx + d) with asymptotes": "점근선이 포함된 유리함수 f(x) = (ax + b)/(cx + d)의 그래프",

  }
});
