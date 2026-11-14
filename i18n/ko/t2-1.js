/* t2-1 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't2-1', {
  strings: {

    // page title (browser tab)
    "2.1 Lines, functions, domains, inverses and composites | Analysis Lab": "2.1 직선, 함수, 정의역, 역함수와 합성함수 | Analysis Lab",

    // Lines, functions, domains, inverses and composites > page header > p
    "Topic 2.1 · SL 2.1–2.5": "Topic 2.1 · SL 2.1–2.5",

    // Lines, functions, domains, inverses and composites > page header > h1
    "Lines, functions, domains, inverses and composites": "직선, 함수, 정의역, 역함수와 합성함수",

    // Lines, functions, domains, inverses and composites > page header > span
    "How do mathematical rules map allowed inputs to outputs, when can we chain two rules together, and when can a rule be reversed?": "수학적 규칙은 허용된 입력을 어떻게 출력에 대응시킬까요? 또 두 규칙을 언제 연결할 수 있고, 언제 거꾸로 되돌릴 수 있을까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > checklist > span
    "Write and convert equations of straight lines between gradient-intercept form <span class=\"chem\">y = mx + c</span>, point-gradient form <span class=\"chem\">y - y_1 = m(x - x_1)</span>, and general form <span class=\"chem\">ax + by + d = 0</span>.": "직선의 방정식을 기울기-절편 꼴 <span class=\"chem\">y = mx + c</span>, 한 점과 기울기 꼴 <span class=\"chem\">y - y_1 = m(x - x_1)</span>, 일반형 <span class=\"chem\">ax + by + d = 0</span>으로 쓰고 서로 변환할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Use parallel (<span class=\"chem\">m_1 = m_2</span>) and perpendicular (<span class=\"chem\">m_1 m_2 = -1</span>) gradients to find equations of normals and perpendicular bisectors.": "평행(<span class=\"chem\">m_1 = m_2</span>)과 수직(<span class=\"chem\">m_1 m_2 = -1</span>)인 직선의 기울기 조건을 이용해 법선과 수직이등분선의 방정식을 구할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Find the natural domain and exact range of a function by checking denominators, even roots, logarithms, turning points, and asymptotes.": "분모, 짝수 제곱근, 로그, 극값(꼭짓점), 점근선을 확인하여 함수의 자연 정의역과 정확한 치역을 구할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Evaluate and simplify composite functions <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span> and test whether <span class=\"chem\">Range(g)</span> fits inside <span class=\"chem\">Domain(f)</span>.": "합성함수 <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>를 계산하고 간단히 정리하며, <span class=\"chem\">Range(g)</span>가 <span class=\"chem\">Domain(f)</span> 안에 들어가는지 판별할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Find the inverse function <span class=\"chem\">f^{-1}(x)</span> algebraically, state its domain and range by swapping with <span class=\"chem\">f</span>, and sketch <span class=\"chem\">y = f^{-1}(x)</span> as a reflection in <span class=\"chem\">y = x</span>.": "역함수 <span class=\"chem\">f^{-1}(x)</span>를 대수적으로 구하고, <span class=\"chem\">f</span>와 정의역·치역을 맞바꾸어 쓴 뒤 <span class=\"chem\">y = x</span>에 대한 대칭으로 <span class=\"chem\">y = f^{-1}(x)</span>의 그래프를 그릴 수 있어요.",

    // What you need to be able to do > checklist > span
    "Solve <span class=\"chem\">f(x) = f^{-1}(x)</span> efficiently by solving <span class=\"chem\">f(x) = x</span> along the mirror line <span class=\"chem\">y = x</span>.": "대칭축 <span class=\"chem\">y = x</span> 위에서 <span class=\"chem\">f(x) = x</span>를 풀어 방정식 <span class=\"chem\">f(x) = f^{-1}(x)</span>를 효율적으로 해결할 수 있어요.",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "문제 디코더: 어떤 기법을 쓸지 파악하기",

    // Question decoder: spotting which technique to use > p
    "Topic 2 exam questions use short, standard phrases that point to a specific algebraic shortcut. Use this table to translate the wording before you start writing.": "Topic 2 시험 문제는 특정한 대수적 지름길을 가리키는 짧고 정형화된 표현을 사용해요. 풀이를 적기 전에 이 표로 문제의 표현을 먼저 해독하세요.",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Lines, domains, composites and inverses": "문제 디코더 — 직선, 정의역, 합성함수와 역함수",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting which technique to use > table > th
    "“Find the perpendicular bisector of <span class=\"chem\">[AB]</span>”": "“선분 <span class=\"chem\">[AB]</span>의 수직이등분선의 방정식을 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Line through the <strong>midpoint</strong> <span class=\"chem\">M((x_1+x_2)/2, (y_1+y_2)/2)</span> with <strong>negative reciprocal gradient</strong> <span class=\"chem\">m_2 = -1 / m_1</span>.": "<strong>중점</strong> <span class=\"chem\">M((x_1+x_2)/2, (y_1+y_2)/2)</span>을 지나고 기울기가 <strong>음의 역수</strong> <span class=\"chem\">m_2 = -1 / m_1</span>인 직선이에요.",

    // Question decoder: spotting which technique to use > table > td
    "Find <span class=\"chem\">M</span> and <span class=\"chem\">m_{AB}</span> first, flip and negate to get <span class=\"chem\">m_2</span>, then plug into <span class=\"chem\">y - y_M = m_2(x - x_M)</span>. Clear fractions if <span class=\"chem\">ax + by + d = 0</span> is requested.": "먼저 <span class=\"chem\">M</span>과 <span class=\"chem\">m_{AB}</span>를 구한 뒤 역수·부호 반대로 <span class=\"chem\">m_2</span>를 구하고 <span class=\"chem\">y - y_M = m_2(x - x_M)</span>에 대입하세요. <span class=\"chem\">ax + by + d = 0</span> 꼴을 요구하면 분모를 없애 주세요.",

    // Question decoder: spotting which technique to use > table > th
    "“State the largest possible domain of <span class=\"chem\">f</span>”": "“<span class=\"chem\">f</span>의 가능한 가장 큰 정의역을 쓰시오”",

    // Question decoder: spotting which technique to use > table > td
    "Check the 3 domain exclusions: <strong>denominator <span class=\"chem\">!= 0</span></strong>, <strong>inside even root <span class=\"chem\">&gt;= 0</span></strong>, and <strong>inside log <span class=\"chem\">&gt; 0</span></strong>.": "3가지 정의역 제외 조건을 확인하세요: <strong>분모 <span class=\"chem\">!= 0</span></strong>, <strong>짝수 제곱근 안 <span class=\"chem\">&gt;= 0</span></strong>, <strong>로그 진수 <span class=\"chem\">&gt; 0</span></strong>.",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1</strong>: Solve the resulting linear or quadratic inequality. <strong>P2</strong>: Graph <span class=\"chem\">y = f(x)</span> to confirm where the curve exists and where vertical asymptotes sit.": "<strong>P1</strong>: 얻어진 일차 또는 이차부등식을 푸세요. <strong>P2</strong>: <span class=\"chem\">y = f(x)</span>의 그래프를 그려 곡선이 존재하는 구간과 수직점근선의 위치를 확인하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Find the range of <span class=\"chem\">f</span> on <span class=\"chem\">a &lt;= x &lt;= b</span>”": "“<span class=\"chem\">a &lt;= x &lt;= b</span>에서 <span class=\"chem\">f</span>의 치역을 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Set of all <strong><span class=\"chem\">y</span>-values</strong> reached on the given domain. <strong>Do NOT just plug in the endpoints!</strong>": "주어진 정의역에서 함수가 취하는 모든 <strong><span class=\"chem\">y</span>값</strong>의 집합이에요. <strong>절대 양 끝점만 대입하지 마세요!</strong>",

    // Question decoder: spotting which technique to use > table > td
    "Always sketch the graph on <span class=\"chem\">[a, b]</span>. Check both endpoints <span class=\"chem\">f(a), f(b)</span> <em>and</em> any local maximum/minimum (vertex) inside <span class=\"chem\">[a, b]</span>.": "항상 <span class=\"chem\">[a, b]</span> 구간에서 그래프를 스케치하세요. 양 끝점 <span class=\"chem\">f(a), f(b)</span>와 구간 <span class=\"chem\">[a, b]</span> 안의 극댓값·극솟값(꼭짓점)을 <em>모두</em> 확인하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Find <span class=\"chem\">(f ∘ g)(x)</span>”": "“<span class=\"chem\">(f ∘ g)(x)</span>를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Work <strong>inside-out</strong>: <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>. Replace every <span class=\"chem\">x</span> in the formula for <span class=\"chem\">f</span> with the entire expression <span class=\"chem\">g(x)</span>.": "<strong>안쪽에서 바깥쪽으로</strong> 계산하세요: <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>. <span class=\"chem\">f</span>의 식에 있는 모든 <span class=\"chem\">x</span> 자리에 <span class=\"chem\">g(x)</span> 식 전체를 대입하세요.",

    // Question decoder: spotting which technique to use > table > td
    "If asked for a single number <span class=\"chem\">(f ∘ g)(2)</span>, calculate the number <span class=\"chem\">g(2)</span> first, then plug that number into <span class=\"chem\">f</span>.": "<span class=\"chem\">(f ∘ g)(2)</span>처럼 특정 숫자를 물으면, 먼저 숫자 <span class=\"chem\">g(2)</span>를 계산한 뒤 그 값을 <span class=\"chem\">f</span>에 대입하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“For <span class=\"chem\">(f ∘ g)(x)</span> to exist / be defined…”": "“<span class=\"chem\">(f ∘ g)(x)</span>가 존재 / 정의되기 위해서는…”",

    // Question decoder: spotting which technique to use > table > td
    "Every output of the inner function must be a legal input for the outer function: <span class=\"chem\">Range(g)</span> must be a subset of <span class=\"chem\">Domain(f)</span>.": "안쪽 함수의 모든 출력이 바깥쪽 함수의 허용된 입력이어야 해요: <span class=\"chem\">Range(g)</span>가 <span class=\"chem\">Domain(f)</span>의 부분집합이어야 해요.",

    // Question decoder: spotting which technique to use > table > td
    "Find <span class=\"chem\">Range(g)</span> first, then restrict the domain of <span class=\"chem\">g</span> (or adjust a parameter) so that every output satisfies <span class=\"chem\">Domain(f)</span>.": "먼저 <span class=\"chem\">Range(g)</span>를 구한 뒤, 모든 출력이 <span class=\"chem\">Domain(f)</span>를 만족하도록 <span class=\"chem\">g</span>의 정의역을 제한하거나 매개변수를 조정하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Find <span class=\"chem\">f^{-1}(a)</span>” (where <span class=\"chem\">a</span> is a number)": "“<span class=\"chem\">f^{-1}(a)</span>를 구하시오” (<span class=\"chem\">a</span>는 숫자)",

    // Question decoder: spotting which technique to use > table > td
    "An input to <span class=\"chem\">f^{-1}</span> is an <strong>output of <span class=\"chem\">f</span></strong>. Do not invert a messy function—just solve <span class=\"chem\">f(x) = a</span>!": "<span class=\"chem\">f^{-1}</span>의 입력은 <strong><span class=\"chem\">f</span>의 출력</strong>이에요. 복잡한 함수를 역함수로 바꾸려 하지 말고 바로 <span class=\"chem\">f(x) = a</span>를 푸세요!",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1</strong>: Solve <span class=\"chem\">f(x) = a</span> algebraically and keep the root inside <span class=\"chem\">Domain(f)</span>. <strong>P2</strong>: Intersect <span class=\"chem\">y = f(x)</span> with the horizontal line <span class=\"chem\">y = a</span>.": "<strong>P1</strong>: <span class=\"chem\">f(x) = a</span>를 대수적으로 풀고 <span class=\"chem\">Domain(f)</span> 안의 근만 남기세요. <strong>P2</strong>: <span class=\"chem\">y = f(x)</span>와 수평선 <span class=\"chem\">y = a</span>의 교점을 구하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Solve <span class=\"chem\">f(x) = f^{-1}(x)</span>”": "“<span class=\"chem\">f(x) = f^{-1}(x)</span>를 푸시오”",

    // Question decoder: spotting which technique to use > table > td
    "A curve and its reflection in <span class=\"chem\">y = x</span> meet on the mirror line itself (for increasing functions). Solve <strong><span class=\"chem\">f(x) = x</span></strong> instead!": "곡선과 <span class=\"chem\">y = x</span> 대칭 곡선은 대칭축 위에서 만나요(증가함수의 경우). 대신 <strong><span class=\"chem\">f(x) = x</span></strong>를 푸세요!",

    // Question decoder: spotting which technique to use > table > td
    "Instead of equating a quadratic to a square root (which creates a degree-4 equation), solve the simple equation <span class=\"chem\">f(x) = x</span> inside the restricted domain.": "이차식과 제곱근을 같다고 놓아 4차방정식을 만들지 말고, 제한된 정의역 안에서 간단한 방정식 <span class=\"chem\">f(x) = x</span>를 푸세요.",

    // Equations of straight lines and perpendicular bisectors > data-toc attribute
    "Straight lines": "직선의 방정식",

    // Equations of straight lines and perpendicular bisectors > h2
    "Equations of straight lines and perpendicular bisectors": "직선의 방정식과 수직이등분선",

    // Equations of straight lines and perpendicular bisectors > p
    "A straight line in the coordinate plane is completely determined by its steepness—called its <dfn data-def=\"The rate of change of y with respect to x along a line: m = (y₂ − y₁) / (x₂ − x₁).\">gradient</dfn> <span class=\"chem\">m</span>—and a single point on the line. Your Formula Booklet gives three equivalent ways to write the equation of a line.": "좌표평면 위의 직선은 기울어진 정도인 <dfn data-def=\"The rate of change of y with respect to x along a line: m = (y₂ − y₁) / (x₂ − x₁).\">기울기 <span class=\"en-term\">(gradient)</span></dfn> <span class=\"chem\">m</span>과 직선 위의 한 점에 의해 완전히 결정돼요. 공식집(Formula Booklet)에는 직선의 방정식을 쓰는 세 가지 동치 형태가 실려 있어요.",

    // Equations of straight lines and perpendicular bisectors > data-def attribute
    "The rate of change of y with respect to x along a line: m = (y₂ − y₁) / (x₂ − x₁).": "직선을 따라 x에 대한 y의 변화율: m = (y₂ − y₁) / (x₂ − x₁).",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "gradient of the line (<span class=\"chem\">x_2 != x_1</span>)": "직선의 기울기 (<span class=\"chem\">x_2 != x_1</span>)",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "<i>y</i>-intercept (where the line crosses the <i>y</i>-axis at <span class=\"chem\">(0, c)</span>)": "<i>y</i>절편 (직선이 <i>y</i>축과 만나는 점 <span class=\"chem\">(0, c)</span>)",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "any known point lying on the line": "직선 위에 있는 알려진 한 점",

    // Equations of straight lines and perpendicular bisectors > equation > dd
    "constants in general form (by IB convention, integers with <span class=\"chem\">a &gt; 0</span>)": "일반형의 상수 (IB 관례상 <span class=\"chem\">a &gt; 0</span>인 정수)",

    // Equations of straight lines and perpendicular bisectors > formula booklet note > p
    "<strong>In your Formula Booklet (SL 2.1):</strong> The gradient formula <span class=\"chem\">m = (y_2 - y_1)/(x_2 - x_1)</span> and all three line equations are printed. You must memorize the parallel and perpendicular gradient relationships and the midpoint formula from Topic 3.1.": "<strong>공식집(Formula Booklet, SL 2.1):</strong> 기울기 공식 <span class=\"chem\">m = (y_2 - y_1)/(x_2 - x_1)</span>과 세 가지 직선의 방정식이 모두 실려 있어요. 평행·수직 기울기 관계와 Topic 3.1의 중점 공식은 외워 두어야 해요.",

    // Equations of straight lines and perpendicular bisectors > h3
    "Parallel lines, perpendicular lines and perpendicular bisectors": "평행선, 수직선과 수직이등분선",

    // Equations of straight lines and perpendicular bisectors > li
    "<strong>Parallel lines</strong> never intersect and have the <strong>same gradient</strong>: <span class=\"chem\">m_1 = m_2</span>.": "<strong>평행한 두 직선</strong>은 만나지 않으며 <strong>기울기가 같아요</strong>: <span class=\"chem\">m_1 = m_2</span>.",

    // Equations of straight lines and perpendicular bisectors > li
    "<strong>Perpendicular lines</strong> meet at <span class=\"chem\">90°</span>. Their gradients are <strong>negative reciprocals</strong> of each other: <span class=\"chem\">m_1 m_2 = -1</span>, so <span class=\"chem\">m_2 = -1 / m_1</span>. (A horizontal line <span class=\"chem\">y = k</span> has gradient <span class=\"chem\">0</span> and is perpendicular to a vertical line <span class=\"chem\">x = h</span>, whose gradient is undefined.)": "<strong>수직인 두 직선</strong>은 <span class=\"chem\">90°</span>로 만나요. 기울기는 서로 <strong>음의 역수</strong> 관계예요: <span class=\"chem\">m_1 m_2 = -1</span>, 즉 <span class=\"chem\">m_2 = -1 / m_1</span>. (수평선 <span class=\"chem\">y = k</span>는 기울기가 <span class=\"chem\">0</span>이고, 기울기가 정의되지 않는 수직선 <span class=\"chem\">x = h</span>와 수직이에요.)",

    // Equations of straight lines and perpendicular bisectors > data-def attribute
    "The line that passes through the midpoint of segment [AB] at a 90° angle to [AB]. Every point on it is equidistant from A and B.": "선분 [AB]의 중점을 지나고 [AB]와 90°를 이루는 직선. 이 직선 위의 모든 점은 A와 B로부터 같은 거리에 있다.",

    // Equations of straight lines and perpendicular bisectors > li
    "Find the <strong>midpoint</strong> <span class=\"chem\">M = ((x_1 + x_2)/2, (y_1 + y_2)/2)</span>.": "<strong>중점</strong> <span class=\"chem\">M = ((x_1 + x_2)/2, (y_1 + y_2)/2)</span>을 구하세요.",

    // Equations of straight lines and perpendicular bisectors > li
    "Find the segment gradient <span class=\"chem\">m_{AB}</span>, then flip and change the sign to get the perpendicular gradient <span class=\"chem\">m_perp = -1 / m_{AB}</span>.": "선분의 기울기 <span class=\"chem\">m_{AB}</span>를 구한 뒤, 역수를 취하고 부호를 바꾸어 수직 기울기 <span class=\"chem\">m_perp = -1 / m_{AB}</span>를 구하세요.",

    // Equations of straight lines and perpendicular bisectors > li
    "Substitute <span class=\"chem\">M</span> and <span class=\"chem\">m_perp</span> into point-gradient form <span class=\"chem\">y - y_M = m_perp(x - x_M)</span>.": "<span class=\"chem\">M</span>과 <span class=\"chem\">m_perp</span>를 한 점과 기울기 꼴 <span class=\"chem\">y - y_M = m_perp(x - x_M)</span>에 대입하세요.",

    // Equations of straight lines and perpendicular bisectors > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Check the requested format:</strong> If a question says <em>“Give your answer in the form <span class=\"chem\">ax + by + d = 0</span> where <span class=\"chem\">a, b, d in Z</span>”</em>, leaving your answer as <span class=\"chem\">y = (2/3)x - 5/3</span> loses the final <strong>[A1]</strong> mark. Multiply the entire equation by the common denominator (<span class=\"chem\">3</span>) and move all terms to one side: <span class=\"chem\">2x - 3y - 5 = 0</span>.": "<strong>시험 팁 — 요구된 답안 형식을 확인하세요:</strong> 문제에서 <em>“<span class=\"chem\">a, b, d in Z</span>일 때 <span class=\"chem\">ax + by + d = 0</span> 꼴로 답하시오”</em>라고 했는데 <span class=\"chem\">y = (2/3)x - 5/3</span> 상태로 두면 마지막 <strong>[A1]</strong> 점수를 잃어요. 식 전체에 공통분모(<span class=\"chem\">3</span>)를 곱하고 모든 항을 한쪽으로 옮기세요: <span class=\"chem\">2x - 3y - 5 = 0</span>.",

    // Equations of straight lines and perpendicular bisectors > worked example > h3
    "Finding the perpendicular bisector in general integer form": "정수 계수 일반형으로 수직이등분선의 방정식 구하기",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "Points <span class=\"chem\">A(-2, 7)</span> and <span class=\"chem\">B(4, 3)</span> lie in the Cartesian plane. Find the equation of the perpendicular bisector of <span class=\"chem\">[AB]</span>, giving your answer in the form <span class=\"chem\">ax + by + d = 0</span> where <span class=\"chem\">a, b, d</span> are integers. <strong>[4 marks]</strong>": "좌표평면 위의 두 점 <span class=\"chem\">A(-2, 7)</span>과 <span class=\"chem\">B(4, 3)</span>에 대하여 선분 <span class=\"chem\">[AB]</span>의 수직이등분선의 방정식을 <span class=\"chem\">ax + by + d = 0</span> (<span class=\"chem\">a, b, d</span>는 정수) 꼴로 구하시오 (Find). <strong>[4 marks]</strong>",

    // Equations of straight lines and perpendicular bisectors > worked example > data-title attribute
    "Find the midpoint M of segment [AB]": "선분 [AB]의 중점 M 구하기",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "The bisector cuts segment [AB] in half, so it must pass through the average of the x- and y-coordinates.": "이등분선은 선분 [AB]를 반으로 나누므로 x좌표와 y좌표의 평균을 지나야 해요.",

    // Equations of straight lines and perpendicular bisectors > worked example > data-title attribute
    "Calculate the gradient of [AB] and the perpendicular gradient": "[AB]의 기울기와 수직 기울기 계산하기",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "Because the bisector meets [AB] at 90°, its gradient is the negative reciprocal of the gradient of [AB].": "수직이등분선은 [AB]와 90°로 만나므로 그 기울기는 [AB] 기울기의 음의 역수예요.",

    // Equations of straight lines and perpendicular bisectors > worked example > data-title attribute
    "Use point-gradient form and rearrange to ax + by + d = 0": "한 점과 기울기 꼴을 이용해 ax + by + d = 0으로 정리하기",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "Substitute M(1, 5) and m = 3/2 into y − y₁ = m(x − x₁), then multiply by 2 to clear fractions.": "M(1, 5)와 m = 3/2를 y − y₁ = m(x − x₁)에 대입한 뒤 분모를 없애기 위해 2를 곱하세요.",

    // Equations of straight lines and perpendicular bisectors > worked example > p
    "<span class=\"chem\">3x - 2y + 7 = 0</span> (or <span class=\"chem\">-3x + 2y - 7 = 0</span>)": "<span class=\"chem\">3x - 2y + 7 = 0</span> (또는 <span class=\"chem\">-3x + 2y - 7 = 0</span>)",

    // Equations of straight lines and perpendicular bisectors > try it > p
    "The perpendicular bisector of the segment joining <span class=\"chem\">P(1, 2)</span> and <span class=\"chem\">Q(5, 10)</span> crosses the <span class=\"chem\">y</span>-axis at <span class=\"chem\">(0, c)</span>. Find the exact value of <span class=\"chem\">c</span>.": "두 점 <span class=\"chem\">P(1, 2)</span>와 <span class=\"chem\">Q(5, 10)</span>을 잇는 선분의 수직이등분선이 <span class=\"chem\">y</span>축과 점 <span class=\"chem\">(0, c)</span>에서 만나요. <span class=\"chem\">c</span>의 정확한 값을 구하시오 (Find).",

    // Equations of straight lines and perpendicular bisectors > try it > li
    "Find the midpoint <span class=\"chem\">M</span> of <span class=\"chem\">P(1, 2)</span> and <span class=\"chem\">Q(5, 10)</span>, and the gradient <span class=\"chem\">m_{PQ} = (10 - 2)/(5 - 1)</span>.": "<span class=\"chem\">P(1, 2)</span>와 <span class=\"chem\">Q(5, 10)</span>의 중점 <span class=\"chem\">M</span>과 기울기 <span class=\"chem\">m_{PQ} = (10 - 2)/(5 - 1)</span>을 구하세요.",

    // Equations of straight lines and perpendicular bisectors > try it > li
    "You should get <span class=\"chem\">M(3, 6)</span> and <span class=\"chem\">m_{PQ} = 2</span>, so the perpendicular gradient is <span class=\"chem\">m_perp = -1/2</span>. Substitute <span class=\"chem\">x = 0</span> into <span class=\"chem\">y - 6 = (-1/2)(x - 3)</span>.": "<span class=\"chem\">M(3, 6)</span>, <span class=\"chem\">m_{PQ} = 2</span>이므로 수직 기울기는 <span class=\"chem\">m_perp = -1/2</span>이에요. <span class=\"chem\">y - 6 = (-1/2)(x - 3)</span>에 <span class=\"chem\">x = 0</span>을 대입하세요.",

    // Equations of straight lines and perpendicular bisectors > try it > maths line
    "<i>M</i> = (3, 6) and <i>m</i><sub><i>PQ</i></sub> = <span class=\"frac\"><span>10 − 2</span><span>5 − 1</span></span> = 2 ⇒ <i>m</i><sub>⊥</sub> = −<span class=\"frac\"><span>1</span><span>2</span></span>": "<i>M</i> = (3, 6)이고 <i>m</i><sub><i>PQ</i></sub> = <span class=\"frac\"><span>10 − 2</span><span>5 − 1</span></span> = 2 ⇒ <i>m</i><sub>⊥</sub> = −<span class=\"frac\"><span>1</span><span>2</span></span>",

    // Equations of straight lines and perpendicular bisectors > try it > maths line
    "<i>y</i> − 6 = −<span class=\"frac\"><span>1</span><span>2</span></span>(<i>x</i> − 3) ⇒ at <i>x</i> = 0, <i>c</i> = 6 + <span class=\"frac\"><span>3</span><span>2</span></span> = <b>7.5</b>": "<i>y</i> − 6 = −<span class=\"frac\"><span>1</span><span>2</span></span>(<i>x</i> − 3) ⇒ <i>x</i> = 0일 때, <i>c</i> = 6 + <span class=\"frac\"><span>3</span><span>2</span></span> = <b>7.5</b>",

    // Functions, natural domains, ranges and key graph features > data-toc attribute
    "Domain & range": "정의역과 치역",

    // Functions, natural domains, ranges and key graph features > h2
    "Functions, natural domains, ranges and key graph features": "함수, 자연 정의역, 치역과 그래프의 주요 특징",

    // Functions, natural domains, ranges and key graph features > p
    "A <dfn data-def=\"A mapping that assigns each input x in the domain to exactly one output y = f(x) in the range.\">function</dfn> <span class=\"chem\">f</span> is a rule that takes an input <span class=\"chem\">x</span> from a set of allowed inputs—the <dfn data-def=\"The complete set of allowed input values (x-values) for which a function f(x) is defined.\">domain</dfn>—and produces <strong>exactly one</strong> output <span class=\"chem\">y = f(x)</span>. The set of all actual outputs produced is the <dfn data-def=\"The complete set of output values (y-values) that f(x) actually takes as x varies across the domain.\">range</dfn>.": "<dfn data-def=\"A mapping that assigns each input x in the domain to exactly one output y = f(x) in the range.\">함수 <span class=\"en-term\">(function)</span></dfn> <span class=\"chem\">f</span>는 허용된 입력값의 집합인 <dfn data-def=\"The complete set of allowed input values (x-values) for which a function f(x) is defined.\">정의역 <span class=\"en-term\">(domain)</span></dfn>에서 입력 <span class=\"chem\">x</span>를 받아 <strong>오직 하나의</strong> 출력 <span class=\"chem\">y = f(x)</span>를 만들어 내는 규칙이에요. 실제로 나오는 모든 출력값의 집합을 <dfn data-def=\"The complete set of output values (y-values) that f(x) actually takes as x varies across the domain.\">치역 <span class=\"en-term\">(range)</span></dfn>이라고 해요.",

    // Functions, natural domains, ranges and key graph features > data-def attribute
    "A mapping that assigns each input x in the domain to exactly one output y = f(x) in the range.": "정의역의 각 입력 x를 치역의 오직 하나의 출력 y = f(x)에 대응시키는 규칙.",

    // Functions, natural domains, ranges and key graph features > data-def attribute
    "The complete set of allowed input values (x-values) for which a function f(x) is defined.": "함수 f(x)가 정의되는 허용된 모든 입력값(x값)의 집합.",

    // Functions, natural domains, ranges and key graph features > data-def attribute
    "The complete set of output values (y-values) that f(x) actually takes as x varies across the domain.": "x가 정의역을 움직일 때 f(x)가 실제로 취하는 모든 출력값(y값)의 집합.",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>Vertical line test (Is it a function?):</strong> A graph represents a function if and only if every vertical line <span class=\"chem\">x = k</span> hits the curve <strong>at most once</strong>. A circle <span class=\"chem\">x^2 + y^2 = 9</span> fails the vertical line test because <span class=\"chem\">x = 0</span> gives two outputs (<span class=\"chem\">y = 3</span> and <span class=\"chem\">y = -3</span>).": "<strong>수직선 판정법 (함수인가?):</strong> 모든 수직선 <span class=\"chem\">x = k</span>가 그래프와 <strong>최대 한 번</strong>만 만날 때만 그 그래프는 함수예요. 원 <span class=\"chem\">x^2 + y^2 = 9</span>는 <span class=\"chem\">x = 0</span>에서 두 개의 출력(<span class=\"chem\">y = 3</span>과 <span class=\"chem\">y = -3</span>)이 나오므로 수직선 판정법을 통과하지 못해요.",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>Horizontal line test (Is it one-to-one?):</strong> A function is <strong>one-to-one</strong> if every horizontal line <span class=\"chem\">y = k</span> hits the curve at most once. Only one-to-one functions have an inverse function on their full domain.": "<strong>수평선 판정법 (일대일함수인가?):</strong> 모든 수평선 <span class=\"chem\">y = k</span>가 그래프와 최대 한 번만 만나면 그 함수는 <strong>일대일함수(one-to-one)</strong>예요. 일대일함수만 전체 정의역에서 역함수를 가져요.",

    // Functions, natural domains, ranges and key graph features > h3
    "The three natural domain killers": "자연 정의역을 제한하는 세 가지 조건",

    // Functions, natural domains, ranges and key graph features > p
    "When a question asks for the <strong>natural domain</strong> (or <em>“largest possible domain in <span class=\"chem\">R</span>”</em>) without specifying a restriction, start with all real numbers <span class=\"chem\">x in R</span> and remove any <span class=\"chem\">x</span> that breaks one of these three algebraic rules:": "문제에서 별도 제한 없이 <strong>자연 정의역</strong>(또는 <em>“<span class=\"chem\">R</span>에서 가능한 가장 큰 정의역”</em>)을 물으면, 모든 실수 <span class=\"chem\">x in R</span>에서 출발해 다음 세 가지 규칙을 어기는 <span class=\"chem\">x</span>를 제외하세요:",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>No division by zero:</strong> For <span class=\"chem\">1 / g(x)</span>, require <span class=\"chem\">g(x) != 0</span>.": "<strong>0으로 나눌 수 없음:</strong> <span class=\"chem\">1 / g(x)</span>에서는 <span class=\"chem\">g(x) != 0</span>이어야 해요.",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>No negative numbers inside an even root:</strong> For <span class=\"chem\">sqrt(g(x))</span>, require <span class=\"chem\">g(x) &gt;= 0</span>. (If the square root is in a denominator, <span class=\"chem\">1 / sqrt(g(x))</span>, both rules combine to <span class=\"chem\">g(x) &gt; 0</span> strictly!)": "<strong>짝수 제곱근 안에는 음수가 올 수 없음:</strong> <span class=\"chem\">sqrt(g(x))</span>에서는 <span class=\"chem\">g(x) &gt;= 0</span>이어야 해요. (제곱근이 분모 <span class=\"chem\">1 / sqrt(g(x))</span>에 있으면 두 조건이 합쳐져 등호가 빠진 <span class=\"chem\">g(x) &gt; 0</span>이 돼요!)",

    // Functions, natural domains, ranges and key graph features > li
    "<strong>Only strictly positive numbers inside a logarithm:</strong> For <span class=\"chem\">ln(g(x))</span> or <span class=\"chem\">log_a(g(x))</span>, require <span class=\"chem\">g(x) &gt; 0</span>.": "<strong>로그의 진수는 반드시 양수:</strong> <span class=\"chem\">ln(g(x))</span> 또는 <span class=\"chem\">log_a(g(x))</span>에서는 <span class=\"chem\">g(x) &gt; 0</span>이어야 해요.",

    // Functions, natural domains, ranges and key graph features > common mistake > p
    "<strong>Common mistake — Finding the range by plugging in only the endpoints:</strong> Suppose <span class=\"chem\">f(x) = (x - 2)^2 + 1</span> on the domain <span class=\"chem\">0 &lt;= x &lt;= 5</span>. If you only compute <span class=\"chem\">f(0) = 5</span> and <span class=\"chem\">f(5) = 10</span>, you might write that the range is <span class=\"chem\">5 &lt;= y &lt;= 10</span>. That is <strong>wrong</strong>! At <span class=\"chem\">x = 2</span> (which lies inside <span class=\"chem\">[0, 5]</span>), the parabola dips down to its vertex <span class=\"chem\">(2, 1)</span>. The true range is <span class=\"chem\">1 &lt;= y &lt;= 10</span>. <strong>Always sketch the curve on the given domain before stating the range.</strong>": "<strong>자주 하는 실수 — 양 끝점만 대입해 치역 구하기:</strong> 정의역 <span class=\"chem\">0 &lt;= x &lt;= 5</span>에서 <span class=\"chem\">f(x) = (x - 2)^2 + 1</span>을 생각해 보세요. <span class=\"chem\">f(0) = 5</span>와 <span class=\"chem\">f(5) = 10</span>만 계산해서 치역이 <span class=\"chem\">5 &lt;= y &lt;= 10</span>이라고 적으면 <strong>틀려요</strong>! <span class=\"chem\">[0, 5]</span> 안에 있는 <span class=\"chem\">x = 2</span>에서 포물선이 꼭짓점 <span class=\"chem\">(2, 1)</span>까지 내려가기 때문이에요. 진짜 치역은 <span class=\"chem\">1 &lt;= y &lt;= 10</span>이에요. <strong>치역을 답하기 전에 항상 주어진 정의역 위에서 그래프를 그려 보세요.</strong>",

    // Functions, natural domains, ranges and key graph features > worked example > h3
    "Finding the natural domain and exact range of a transformed function": "변환된 함수의 자연 정의역과 정확한 치역 구하기",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "Consider the function <span class=\"chem\">f(x) = 5 - sqrt(2x + 6)</span>. State the largest possible domain of <span class=\"chem\">f</span> and find the corresponding range. <strong>[4 marks]</strong>": "함수 <span class=\"chem\">f(x) = 5 - sqrt(2x + 6)</span>을 생각하자. <span class=\"chem\">f</span>의 가능한 가장 큰 정의역을 쓰고 (State) 그에 해당하는 치역을 구하시오 (Find). <strong>[4 marks]</strong>",

    // Functions, natural domains, ranges and key graph features > worked example > data-title attribute
    "Set the expression inside the square root ≥ 0 for the domain": "정의역을 위해 제곱근 안의 식 ≥ 0으로 놓기",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "A real square root is defined if and only if its radicand is non-negative.": "실수 제곱근은 근호 안의 식이 0 이상일 때만 정의돼요.",

    // Functions, natural domains, ranges and key graph features > worked example > data-title attribute
    "Bound the output of the square root to deduce the range": "제곱근의 범위를 이용해 치역 구하기",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "The principal square root √(2x + 6) takes every value from 0 upwards as x increases from −3 to ∞.": "x가 −3에서 ∞까지 증가할 때 √(2x + 6)은 0 이상의 모든 값을 가져요.",

    // Functions, natural domains, ranges and key graph features > worked example > maths line
    "Since <span class=\"chem\">sqrt(2x + 6) &gt;= 0</span> for all <span class=\"chem\">x &gt;= -3</span>, multiplying by −1 and adding 5 gives: &nbsp; <b>[M1]</b>": "<span class=\"chem\">sqrt(2x + 6) &gt;= 0</span> (모든 <span class=\"chem\">x &gt;= -3</span>에 대해)이므로 −1을 곱하고 5를 더하면: &nbsp; <b>[M1]</b>",

    // Functions, natural domains, ranges and key graph features > worked example > maths line
    "5 − <span class=\"chem\">sqrt(2x + 6) &lt;= 5</span> ⇒ <b><i>f</i>(<i>x</i>) ≤ 5</b> (or <span class=\"chem\">y in (-infty, 5]</span>) &nbsp; <b>[A1]</b>": "5 − <span class=\"chem\">sqrt(2x + 6) &lt;= 5</span> ⇒ <b><i>f</i>(<i>x</i>) ≤ 5</b> (또는 <span class=\"chem\">y in (-infty, 5]</span>) &nbsp; <b>[A1]</b>",

    // Functions, natural domains, ranges and key graph features > worked example > p
    "Domain: <span class=\"chem\">x &gt;= -3</span>; Range: <span class=\"chem\">f(x) &lt;= 5</span>": "정의역: <span class=\"chem\">x &gt;= -3</span>; 치역: <span class=\"chem\">f(x) &lt;= 5</span>",

    // Functions, natural domains, ranges and key graph features > try it > p
    "The function <span class=\"chem\">g(x) = (x - 3)^2 + 2</span> is defined on the restricted domain <span class=\"chem\">1 &lt;= x &lt;= 7</span>. Find the <strong>minimum</strong> value in the range of <span class=\"chem\">g</span>.": "함수 <span class=\"chem\">g(x) = (x - 3)^2 + 2</span>가 제한된 정의역 <span class=\"chem\">1 &lt;= x &lt;= 7</span>에서 정의되어 있어요. <span class=\"chem\">g</span>의 치역에서 <strong>최솟값</strong>을 구하시오 (Find).",

    // Functions, natural domains, ranges and key graph features > try it > li
    "Identify the vertex of the parabola <span class=\"chem\">y = (x - 3)^2 + 2</span> and check whether its <span class=\"chem\">x</span>-coordinate lies inside <span class=\"chem\">1 &lt;= x &lt;= 7</span>.": "포물선 <span class=\"chem\">y = (x - 3)^2 + 2</span>의 꼭짓점을 찾고, 그 <span class=\"chem\">x</span>좌표가 <span class=\"chem\">1 &lt;= x &lt;= 7</span> 안에 들어가는지 확인하세요.",

    // Functions, natural domains, ranges and key graph features > try it > li
    "Since <span class=\"chem\">x = 3</span> is inside <span class=\"chem\">[1, 7]</span> and <span class=\"chem\">(x - 3)^2 &gt;= 0</span>, the minimum output occurs at the vertex <span class=\"chem\">x = 3</span>.": "<span class=\"chem\">x = 3</span>이 <span class=\"chem\">[1, 7]</span> 안에 있고 <span class=\"chem\">(x - 3)^2 &gt;= 0</span>이므로 최솟값은 꼭짓점 <span class=\"chem\">x = 3</span>에서 나와요.",

    // Functions, natural domains, ranges and key graph features > try it > maths line
    "At the endpoints: <i>g</i>(1) = (−2)<sup>2</sup> + 2 = 6 and <i>g</i>(7) = 4<sup>2</sup> + 2 = 18.": "양 끝점에서: <i>g</i>(1) = (−2)<sup>2</sup> + 2 = 6이고 <i>g</i>(7) = 4<sup>2</sup> + 2 = 18.",

    // Functions, natural domains, ranges and key graph features > try it > maths line
    "However, the vertex at <i>x</i> = 3 lies inside [1, 7], giving minimum value <i>g</i>(3) = 0 + 2 = <b>2</b> (so the range is <span class=\"chem\">2 &lt;= y &lt;= 18</span>).": "하지만 꼭짓점 <i>x</i> = 3이 [1, 7] 안에 있으므로 최솟값은 <i>g</i>(3) = 0 + 2 = <b>2</b>예요 (따라서 치역은 <span class=\"chem\">2 &lt;= y &lt;= 18</span>).",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > data-toc attribute
    "Composites & inverses": "합성함수와 역함수",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > h2
    "Composite functions <span class=\"chem\">(f ∘ g)(x)</span> and inverse functions <span class=\"chem\">f^{-1}(x)</span>": "합성함수 <span class=\"chem\">(f ∘ g)(x)</span>와 역함수 <span class=\"chem\">f^{-1}(x)</span>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > p
    "When the output of one function <span class=\"chem\">g</span> is fed directly as the input into a second function <span class=\"chem\">f</span>, we form the <dfn data-def=\"The function formed by applying g first and then applying f to the result: (f ∘ g)(x) = f(g(x)).\">composite function</dfn> <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>. Read <span class=\"chem\">(f ∘ g)(x)</span> from the <strong>inside out</strong>: <span class=\"chem\">g</span> acts on <span class=\"chem\">x</span> first, and <span class=\"chem\">f</span> acts on <span class=\"chem\">g(x)</span> second.": "한 함수 <span class=\"chem\">g</span>의 출력을 곧바로 두 번째 함수 <span class=\"chem\">f</span>의 입력으로 넣으면 <dfn data-def=\"The function formed by applying g first and then applying f to the result: (f ∘ g)(x) = f(g(x)).\">합성함수 <span class=\"en-term\">(composite function)</span></dfn> <span class=\"chem\">(f ∘ g)(x) = f(g(x))</span>를 얻어요. <span class=\"chem\">(f ∘ g)(x)</span>는 <strong>안쪽에서 바깥쪽으로</strong> 읽으세요: 먼저 <span class=\"chem\">g</span>가 <span class=\"chem\">x</span>에 작용하고, 그다음 <span class=\"chem\">f</span>가 <span class=\"chem\">g(x)</span>에 작용해요.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > data-def attribute
    "The function formed by applying g first and then applying f to the result: (f ∘ g)(x) = f(g(x)).": "g를 먼저 적용한 다음 그 결과에 f를 적용하여 만든 함수: (f ∘ g)(x) = f(g(x)).",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "inner function (applied first to input <i>x</i>)": "안쪽 함수 (입력 <i>x</i>에 먼저 적용)",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "outer function (applied second to the output <i>g</i>(<i>x</i>))": "바깥쪽 함수 (출력 <i>g</i>(<i>x</i>)에 두 번째로 적용)",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dt
    "Existence rule": "존재 조건",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "<span class=\"chem\">Range(g)</span> must be a subset of <span class=\"chem\">Domain(f)</span>": "<span class=\"chem\">Range(g)</span>는 반드시 <span class=\"chem\">Domain(f)</span>의 부분집합이어야 함",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > equation > dd
    "inverse function (reverses <i>f</i>; exists only when <i>f</i> is one-to-one)": "역함수 (<i>f</i>를 거꾸로 되돌림; <i>f</i>가 일대일함수일 때만 존재)",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > data-title attribute
    "Composite function pipeline & domain compatibility checker": "합성함수 파이프라인 및 정의역 호환성 검사기",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > figcaption
    "Choose an inner function <span class=\"chem\">g(x)</span>, an outer function <span class=\"chem\">f(x)</span>, and a test input <span class=\"chem\">x</span> to trace the two-stage pipeline <span class=\"chem\">x -&gt; g(x) -&gt; f(g(x))</span> and see whether <span class=\"chem\">Range(g)</span> fits inside <span class=\"chem\">Domain(f)</span>.": "안쪽 함수 <span class=\"chem\">g(x)</span>, 바깥쪽 함수 <span class=\"chem\">f(x)</span>, 테스트 입력 <span class=\"chem\">x</span>를 골라 2단계 파이프라인 <span class=\"chem\">x -&gt; g(x) -&gt; f(g(x))</span>를 따라가며 <span class=\"chem\">Range(g)</span>가 <span class=\"chem\">Domain(f)</span> 안에 들어가는지 확인해 보세요.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > h3
    "Inverse functions and the mirror line <span class=\"chem\">y = x</span>": "역함수와 대칭 직선 <span class=\"chem\">y = x</span>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > p
    "The <dfn data-def=\"The function f⁻¹ that reverses the mapping of f, so that f⁻¹(y) = x whenever f(x) = y.\">inverse function</dfn> <span class=\"chem\">f^{-1}</span> undoes what <span class=\"chem\">f</span> does: if <span class=\"chem\">f</span> maps <span class=\"chem\">a -&gt; b</span>, then <span class=\"chem\">f^{-1}</span> maps <span class=\"chem\">b -&gt; a</span>. Because every <span class=\"chem\">(x, y)</span> coordinate pair swaps to <span class=\"chem\">(y, x)</span>, three powerful facts always hold:": "<dfn data-def=\"The function f⁻¹ that reverses the mapping of f, so that f⁻¹(y) = x whenever f(x) = y.\">역함수 <span class=\"en-term\">(inverse function)</span></dfn> <span class=\"chem\">f^{-1}</span>는 <span class=\"chem\">f</span>의 대응을 거꾸로 되돌려요: <span class=\"chem\">f</span>가 <span class=\"chem\">a -&gt; b</span>로 대응시키면 <span class=\"chem\">f^{-1}</span>는 <span class=\"chem\">b -&gt; a</span>로 대응시켜요. 모든 좌표 <span class=\"chem\">(x, y)</span>가 <span class=\"chem\">(y, x)</span>로 바뀌기 때문에 다음 세 가지 중요한 성질이 항상 성립해요:",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > data-def attribute
    "The function f⁻¹ that reverses the mapping of f, so that f⁻¹(y) = x whenever f(x) = y.": "f의 대응을 거꾸로 되돌려 f(x) = y일 때마다 f⁻¹(y) = x가 되게 하는 함수 f⁻¹.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > li
    "<strong>Algebraic recipe:</strong> Write <span class=\"chem\">y = f(x)</span>, swap <span class=\"chem\">x</span> and <span class=\"chem\">y</span>, and solve for <span class=\"chem\">y</span> in terms of <span class=\"chem\">x</span>. If a <span class=\"chem\">+-sqrt(...)</span> appears, use the restricted domain of <span class=\"chem\">f</span> (which becomes the range of <span class=\"chem\">f^{-1}</span>) to pick the correct sign!": "<strong>대수적 풀이법:</strong> <span class=\"chem\">y = f(x)</span>로 놓고 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 서로 바꾼 뒤 <span class=\"chem\">y</span>를 <span class=\"chem\">x</span>에 관해 푸세요. 만약 <span class=\"chem\">+-sqrt(...)</span>가 나오면, <span class=\"chem\">f</span>의 제한된 정의역(즉 <span class=\"chem\">f^{-1}</span>의 치역)을 보고 알맞은 부호를 고르세요!",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > li
    "<strong>Domain and range swap:</strong> <span class=\"chem\">Domain(f^{-1}) = Range(f)</span> and <span class=\"chem\">Range(f^{-1}) = Domain(f)</span>. If an exam question asks for the domain of <span class=\"chem\">f^{-1}</span>, just find the range of <span class=\"chem\">f</span>.": "<strong>정의역과 치역의 맞바꿈:</strong> <span class=\"chem\">Domain(f^{-1}) = Range(f)</span>이고 <span class=\"chem\">Range(f^{-1}) = Domain(f)</span>예요. 시험에서 <span class=\"chem\">f^{-1}</span>의 정의역을 물으면 그냥 <span class=\"chem\">f</span>의 치역을 구하면 돼요.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > li
    "<strong>Geometric reflection:</strong> The graph of <span class=\"chem\">y = f^{-1}(x)</span> is the reflection of <span class=\"chem\">y = f(x)</span> across the diagonal line <span class=\"chem\">y = x</span>. In particular, any intersection of an increasing function <span class=\"chem\">y = f(x)</span> with <span class=\"chem\">y = f^{-1}(x)</span> lies directly on the line <span class=\"chem\">y = x</span>, so you can solve <span class=\"chem\">f(x) = f^{-1}(x)</span> by solving <strong><span class=\"chem\">f(x) = x</span></strong>!": "<strong>기하학적 대칭:</strong> <span class=\"chem\">y = f^{-1}(x)</span>의 그래프는 <span class=\"chem\">y = f(x)</span>의 그래프를 직선 <span class=\"chem\">y = x</span>에 대해 대칭이동한 것이에요. 특히 증가함수 <span class=\"chem\">y = f(x)</span>와 <span class=\"chem\">y = f^{-1}(x)</span>의 교점은 항상 직선 <span class=\"chem\">y = x</span> 위에 있으므로 <span class=\"chem\">f(x) = f^{-1}(x)</span> 대신 <strong><span class=\"chem\">f(x) = x</span></strong>를 풀면 돼요!",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > common mistake > p
    "<strong>Common mistake — Confusing <span class=\"chem\">f^{-1}(x)</span> with the reciprocal <span class=\"chem\">1 / f(x)</span>:</strong> In function notation, the superscript <span class=\"chem\">-1</span> in <span class=\"chem\">f^{-1}(x)</span> always means the <strong>inverse function</strong> (reversing input and output), <em>never</em> the reciprocal <span class=\"chem\">(f(x))^{-1} = 1 / f(x)</span>.": "<strong>자주 하는 실수 — <span class=\"chem\">f^{-1}(x)</span>와 역수 <span class=\"chem\">1 / f(x)</span> 혼동하기:</strong> 함수 기호에서 <span class=\"chem\">f^{-1}(x)</span>의 위첨자 <span class=\"chem\">-1</span>은 항상 입력과 출력을 뒤바꾸는 <strong>역함수</strong>를 뜻하며, <em>절대</em> 역수 <span class=\"chem\">(f(x))^{-1} = 1 / f(x)</span>가 아니에요.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > data-title attribute
    "Inverse reflection explorer: y = f(x), y = x, and y = f⁻¹(x)": "역함수 대칭 탐색기: y = f(x), y = x, y = f⁻¹(x)",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > widget > figcaption
    "Switch between invertible functions and move input <span class=\"chem\">a</span> to watch point <span class=\"chem\">P(a, b)</span> on <span class=\"chem\">y = f(x)</span> reflect across the mirror line <span class=\"chem\">y = x</span> to <span class=\"chem\">P'(b, a)</span> on <span class=\"chem\">y = f^{-1}(x)</span>.": "역함수가 존재하는 여러 함수를 바꾸어 보고 입력 <span class=\"chem\">a</span>를 움직여 <span class=\"chem\">y = f(x)</span> 위의 점 <span class=\"chem\">P(a, b)</span>가 대칭축 <span class=\"chem\">y = x</span>를 건너 <span class=\"chem\">y = f^{-1}(x)</span> 위의 점 <span class=\"chem\">P'(b, a)</span>로 이동하는 모습을 확인해 보세요.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > h3
    "Inverting a domain-restricted quadratic and solving f(x) = f⁻¹(x)": "정의역이 제한된 이차함수의 역함수 구하기 및 f(x) = f⁻¹(x) 풀기",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "The function <span class=\"chem\">f</span> is defined by <span class=\"chem\">f(x) = (x - 3)^2 - 2</span> for <span class=\"chem\">x &lt;= 3</span>.<br> (a) Find an expression for <span class=\"chem\">f^{-1}(x)</span> and state its domain. <strong>[4 marks]</strong><br> (b) Solve the equation <span class=\"chem\">f(x) = f^{-1}(x)</span>. <strong>[3 marks]</strong>": "함수 <span class=\"chem\">f</span>가 <span class=\"chem\">x &lt;= 3</span>에서 <span class=\"chem\">f(x) = (x - 3)^2 - 2</span>로 정의되어 있다.<br> (a) <span class=\"chem\">f^{-1}(x)</span>의 식을 구하고 (Find) 그 정의역을 쓰시오 (State). <strong>[4 marks]</strong><br> (b) 방정식 <span class=\"chem\">f(x) = f^{-1}(x)</span>를 푸시오. <strong>[3 marks]</strong>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > data-title attribute
    "Find the range of f to get the domain of f⁻¹": "f의 치역을 구해 f⁻¹의 정의역 얻기",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "The vertex is at (3, −2) and the parabola opens upwards, so f(x) ≥ −2 for all x ≤ 3.": "꼭짓점이 (3, −2)이고 아래로 볼록한 포물선이므로 모든 x ≤ 3에 대해 f(x) ≥ −2예요.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > maths line
    "Range of <i>f</i> is <i>y</i> ≥ −2 ⇒ <b>Domain of <i>f</i><sup>−1</sup> is <i>x</i> ≥ −2</b> &nbsp; <b>[A1]</b>": "<i>f</i>의 치역은 <i>y</i> ≥ −2 ⇒ <b><i>f</i><sup>−1</sup>의 정의역은 <i>x</i> ≥ −2</b> &nbsp; <b>[A1]</b>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > data-title attribute
    "Swap x and y and choose the branch matching Range(f⁻¹)": "x와 y를 바꾸고 Range(f⁻¹)에 맞는 부호 선택하기",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "Because Domain(f) is x ≤ 3, Range(f⁻¹) must be y ≤ 3, which forces the negative square root.": "Domain(f)가 x ≤ 3이므로 Range(f⁻¹)는 y ≤ 3이어야 하고, 따라서 음의 제곱근을 선택해야 해요.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > maths line
    "Since <i>y</i> ≤ 3, choose the minus sign: <b><i>f</i><sup>−1</sup>(<i>x</i>) = 3 − <span class=\"chem\">sqrt(x + 2)</span></b> &nbsp; <b>[R1 A1]</b>": "<i>y</i> ≤ 3이므로 마이너스 부호를 선택: <b><i>f</i><sup>−1</sup>(<i>x</i>) = 3 − <span class=\"chem\">sqrt(x + 2)</span></b> &nbsp; <b>[R1 A1]</b>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > data-title attribute
    "Solve f(x) = x on the mirror line y = x and filter by x ≤ 3": "대칭축 y = x 위에서 f(x) = x를 풀고 x ≤ 3인 근 고르기",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "Equating f(x) to x avoids squaring radicals. Only roots inside Domain(f) ∧ Domain(f⁻¹), namely −2 ≤ x ≤ 3, are valid.": "f(x) = x로 놓으면 무리식을 제곱할 필요가 없어요. Domain(f) ∧ Domain(f⁻¹), 즉 −2 ≤ x ≤ 3 안의 근만 유효해요.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > maths line
    "Since <span class=\"chem\">sqrt(21) ≈ 4.58</span>, <span class=\"chem\">(7 + sqrt(21))/2 ≈ 5.79 &gt; 3</span> (reject). Thus <b><i>x</i> = <span class=\"frac\"><span>7 − <span class=\"chem\">sqrt(21)</span></span><span>2</span></span></b> &nbsp; <b>[A1]</b>": "<span class=\"chem\">sqrt(21) ≈ 4.58</span>이므로 <span class=\"chem\">(7 + sqrt(21))/2 ≈ 5.79 &gt; 3</span> (제외). 따라서 <b><i>x</i> = <span class=\"frac\"><span>7 − <span class=\"chem\">sqrt(21)</span></span><span>2</span></span></b> &nbsp; <b>[A1]</b>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > worked example > p
    "(a) <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x + 2)</span> for <span class=\"chem\">x &gt;= -2</span>; (b) <span class=\"chem\">x = (7 - sqrt(21))/2</span>": "(a) <span class=\"chem\">x &gt;= -2</span>에서 <span class=\"chem\">f^{-1}(x) = 3 - sqrt(x + 2)</span>; (b) <span class=\"chem\">x = (7 - sqrt(21))/2</span>",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > p
    "Let <span class=\"chem\">f(x) = 2x + 3</span> and <span class=\"chem\">g(x) = x^2 - 4</span>. Solve the equation <span class=\"chem\">(f ∘ g)(x) = -0.5</span> for <span class=\"chem\">x &gt; 0</span>.": "<span class=\"chem\">f(x) = 2x + 3</span>, <span class=\"chem\">g(x) = x^2 - 4</span>라 하자. <span class=\"chem\">x &gt; 0</span>일 때 방정식 <span class=\"chem\">(f ∘ g)(x) = -0.5</span>를 푸시오.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > li
    "Form the composite function from the inside out: <span class=\"chem\">f(g(x)) = 2(x^2 - 4) + 3 = 2x^2 - 5</span>.": "안쪽에서 바깥쪽으로 합성함수를 만드세요: <span class=\"chem\">f(g(x)) = 2(x^2 - 4) + 3 = 2x^2 - 5</span>.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > li
    "Set <span class=\"chem\">2x^2 - 5 = -0.5</span>, solve for <span class=\"chem\">x^2 = 2.25</span>, and take the positive square root.": "<span class=\"chem\">2x^2 - 5 = -0.5</span>로 놓고 <span class=\"chem\">x^2 = 2.25</span>를 푼 뒤 양의 제곱근을 취하세요.",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > try it > maths line
    "2<i>x</i><sup>2</sup> = 4.5 ⇒ <i>x</i><sup>2</sup> = 2.25 ⇒ <i>x</i> = <b>1.5</b> (since <i>x</i> &gt; 0)": "2<i>x</i><sup>2</sup> = 4.5 ⇒ <i>x</i><sup>2</sup> = 2.25 ⇒ <i>x</i> = <b>1.5</b> (<i>x</i> &gt; 0이므로)",

    // Composite functions (f ∘ g)(x) and inverse functions f^{-1}( > not needed for IB > p
    "<strong>Not needed for IB:</strong> You do not need formal university set-theory proofs of <em>surjectivity</em> onto an arbitrary codomain distinct from the range, nor epsilon-delta continuity proofs. In IB Math AA HL, a function is invertible if and only if it is <strong>one-to-one</strong> on its domain (passes the horizontal line test), with its codomain taken to be its range.": "<strong>IB 시험 범위 외 내용:</strong> 치역과 다른 임의의 공역에 대한 전사성(<em>surjectivity</em>)의 대학 집합론적 엄밀한 증명이나 엡실론-델타 연속성 증명은 필요하지 않아요. IB Math AA HL에서는 공역을 치역으로 간주하므로, 함수가 정의역 위에서 <strong>일대일함수</strong>(수평선 판정법 통과)일 때만 역함수가 존재해요.",

    // Quick practice > data-toc attribute
    "Practice": "연습 문제",

    // Quick practice > h2
    "Quick practice": "빠른 연습 문제",

    // widget string (assets/js/widgets-t2-1.js)
    "Function pair": "함수 쌍",

    // widget string (assets/js/widgets-t2-1.js)
    "Input a on f(x)": "f(x)의 입력값 a",

    // widget string (assets/js/widgets-t2-1.js)
    "Jump to f(x) = f⁻¹(x)": "f(x) = f⁻¹(x) 위치로 이동",

    // widget string (assets/js/widgets-t2-1.js)
    "Point P on y = f(x)": "y = f(x) 위의 점 P",

    // widget string (assets/js/widgets-t2-1.js)
    "Reflected P' on y = f⁻¹(x)": "y = f⁻¹(x) 위로 대칭된 점 P'",

    // widget string (assets/js/widgets-t2-1.js)
    "Domain & range of f": "f의 정의역과 치역",

    // widget string (assets/js/widgets-t2-1.js)
    "Domain & range of f⁻¹": "f⁻¹의 정의역과 치역",

    // widget string (assets/js/widgets-t2-1.js)
    "Graph of y = f(x), mirror line y = x, and inverse y = f⁻¹(x)": "y = f(x), 대칭축 y = x, 역함수 y = f⁻¹(x)의 그래프",

    // widget string (assets/js/widgets-t2-1.js)
    "Composite pair (g first, then f)": "합성 쌍 (g 먼저, 그다음 f)",

    // widget string (assets/js/widgets-t2-1.js)
    "Test input x": "테스트 입력 x",

    // widget string (assets/js/widgets-t2-1.js)
    "Stage 1: u = g(x)": "1단계: u = g(x)",

    // widget string (assets/js/widgets-t2-1.js)
    "Stage 2: y = f(u) = (f ∘ g)(x)": "2단계: y = f(u) = (f ∘ g)(x)",

    // widget string (assets/js/widgets-t2-1.js)
    "Composite formula": "합성함수 식",

    // widget string (assets/js/widgets-t2-1.js)
    "Domain compatibility check": "정의역 호환성 확인",

    // widget string (assets/js/widgets-t2-1.js)
    "Graphs of inner function g(x) and composite function (f ∘ g)(x)": "안쪽 함수 g(x)와 합성함수 (f ∘ g)(x)의 그래프",

  }
});
