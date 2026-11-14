/* t5-1 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't5-1', {
  strings: {

    // page title (browser tab)
    "5.1 Differentiation, curve analysis and optimization | Analysis Lab": "5.1 미분, 곡선 개형 분석과 최적화 | Analysis Lab",

    // Differentiation, curve analysis and optimization > page header > p
    "Topic 5.1 · SL 5.1–5.4, 5.6–5.8": "Topic 5.1 · SL 5.1–5.4, 5.6–5.8",

    // Differentiation, curve analysis and optimization > page header > h1
    "Differentiation, curve analysis and optimization": "미분, 곡선 개형 분석과 최적화",

    // Differentiation, curve analysis and optimization > page header > span
    "How do the first and second derivatives reveal the exact gradient, turning points, concavity, and optimal values of a function?": "이계도함수와 일계도함수는 함수의 정확한 기울기, 극값, 오목성과 볼록성, 최댓값과 최솟값을 어떻게 알려줄까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > checklist > span
    "Interpret the derivative <span class=\"chem\">f'(x)</span> as the gradient of the tangent line and the instantaneous rate of change of <span class=\"chem\">y = f(x)</span>.": "도함수 <span class=\"chem\">f'(x)</span>를 접선의 기울기이자 <span class=\"chem\">y = f(x)</span>의 순간변화율로 해석할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Differentiate powers <span class=\"chem\">x^n</span> (<span class=\"chem\">n</span> rational) and standard functions <span class=\"chem\">sin x</span>, <span class=\"chem\">cos x</span>, <span class=\"chem\">e^x</span>, and <span class=\"chem\">ln x</span>.": "거듭제곱 <span class=\"chem\">x^n</span> (<span class=\"chem\">n</span>은 유리수)과 기본 함수 <span class=\"chem\">sin x</span>, <span class=\"chem\">cos x</span>, <span class=\"chem\">e^x</span>, <span class=\"chem\">ln x</span>를 미분할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Find equations of tangents and normals at a given point and find where they intersect axes or curves.": "주어진 점에서의 접선과 법선의 방정식을 구하고 좌표축이나 곡선과의 교점을 찾을 수 있어요.",

    // What you need to be able to do > checklist > span
    "Differentiate composite, product, and quotient functions using the chain rule, product rule, and quotient rule.": "연쇄법칙, 곱의 미분법, 몫의 미분법을 이용해 합성함수, 곱함수, 몫함수를 미분할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Find intervals where <span class=\"chem\">f(x)</span> is increasing or decreasing, classify local maxima and minima using <span class=\"chem\">f'(x)</span> or <span class=\"chem\">f''(x)</span>, and identify stationary and non-stationary points of inflexion.": "<span class=\"chem\">f(x)</span>가 증가하거나 감소하는 구간을 찾고, <span class=\"chem\">f'(x)</span> 또는 <span class=\"chem\">f''(x)</span>로 극대와 극소를 판별하며, 정류 변곡점과 비정류 변곡점을 구분할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Connect features across the graphs of <span class=\"chem\">f(x)</span>, <span class=\"chem\">f'(x)</span>, and <span class=\"chem\">f''(x)</span>.": "<span class=\"chem\">f(x)</span>, <span class=\"chem\">f'(x)</span>, <span class=\"chem\">f''(x)</span> 그래프의 특징을 서로 연결할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Set up a single-variable objective function using a constraint equation and find maximum or minimum values in context.": "제약 조건을 이용해 일변수 목적함수를 세우고 실생활 맥락에서 최댓값 또는 최솟값을 구할 수 있어요.",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "문제 디코더: 어떤 미분 기법을 쓸지 바로 찾기",

    // Question decoder: spotting which technique to use > p
    "Calculus questions in IB Math AA use recurring trigger phrases. Use this table to translate the wording on the exam paper directly into the required equation and test.": "IB Math AA 미적분 문제는 반복되는 핵심 표현을 써요. 아래 표를 보고 시험지 문구를 필요한 방정식과 판별법으로 바로 바꾸어 보세요.",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Differentiation, curve analysis and optimization": "문제 디코더 — 미분, 곡선 개형 분석과 최적화",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting which technique to use > table > th
    "“Find the gradient of the curve at <span class=\"chem\">x = a</span>”": "“<span class=\"chem\">x = a</span>에서 곡선의 기울기를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Differentiate <span class=\"chem\">f(x)</span> and evaluate <span class=\"chem\">m_T = f'(a)</span>.": "<span class=\"chem\">f(x)</span>를 미분하고 <span class=\"chem\">m_T = f'(a)</span>를 계산하세요.",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Differentiate algebraically and substitute <span class=\"chem\">x = a</span>.<br><strong>Paper 2:</strong> Use <span class=\"mono\">nDeriv</span> (<span class=\"chem\">d/dx</span> at <span class=\"chem\">x = a</span>) directly on your GDC.": "<strong>Paper 1:</strong> 식으로 미분한 뒤 <span class=\"chem\">x = a</span>를 대입하세요.<br><strong>Paper 2:</strong> GDC에서 바로 <span class=\"mono\">nDeriv</span> (<span class=\"chem\">x = a</span>에서의 <span class=\"chem\">d/dx</span>)를 쓰세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Find the equation of the normal at <span class=\"chem\">x = a</span>”": "“<span class=\"chem\">x = a</span>에서 법선의 방정식을 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Find point <span class=\"chem\">y_1 = f(a)</span>, tangent gradient <span class=\"chem\">m_T = f'(a)</span>, and normal gradient <span class=\"chem\">m_N = -1 / f'(a)</span>. Then use <span class=\"chem\">y - y_1 = m_N(x - a)</span>.": "점 <span class=\"chem\">y_1 = f(a)</span>, 접선의 기울기 <span class=\"chem\">m_T = f'(a)</span>, 법선의 기울기 <span class=\"chem\">m_N = -1 / f'(a)</span>를 구한 뒤 <span class=\"chem\">y - y_1 = m_N(x - a)</span>를 쓰세요.",

    // Question decoder: spotting which technique to use > table > td
    "Check if a specific form is requested (<span class=\"chem\">y = mx + c</span> or <span class=\"chem\">ax + by + d = 0</span> with integers). If <span class=\"chem\">f'(a) = 0</span>, the tangent is horizontal (<span class=\"chem\">y = y_1</span>) and the normal is vertical (<span class=\"chem\">x = a</span>).": "특정 형태(<span class=\"chem\">y = mx + c</span> 또는 정수 계수의 <span class=\"chem\">ax + by + d = 0</span>)를 요구하는지 확인하세요. <span class=\"chem\">f'(a) = 0</span>이면 접선은 수평선(<span class=\"chem\">y = y_1</span>), 법선은 수직선(<span class=\"chem\">x = a</span>)이에요.",

    // Question decoder: spotting which technique to use > table > th
    "“Find the coordinates of the stationary point(s) / turning point(s) / local maximum or minimum”": "“정류점 / 극점 / 극댓값 또는 극솟값의 좌표를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Solve <span class=\"chem\">f'(x) = 0</span> for <span class=\"chem\">x</span>, substitute back into <strong>original</strong> <span class=\"chem\">f(x)</span> for <span class=\"chem\">y</span>, and test nature via sign change of <span class=\"chem\">f'(x)</span> or sign of <span class=\"chem\">f''(x)</span>.": "<span class=\"chem\">f'(x) = 0</span>을 풀어 <span class=\"chem\">x</span>를 구하고, <strong>원래 함수</strong> <span class=\"chem\">f(x)</span>에 대입해 <span class=\"chem\">y</span>를 구한 뒤, <span class=\"chem\">f'(x)</span>의 부호 변화 또는 <span class=\"chem\">f''(x)</span>의 부호로 성질을 판별하세요.",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Factor <span class=\"chem\">f'(x) = 0</span> and show a sign table or <span class=\"chem\">f''(a)</span> value.<br><strong>Paper 2:</strong> Graph <span class=\"chem\">y = f(x)</span> and use <span class=\"mono\">Maximum</span> / <span class=\"mono\">Minimum</span> (or zeros of <span class=\"chem\">f'(x)</span>).": "<strong>Paper 1:</strong> <span class=\"chem\">f'(x) = 0</span>을 인수분해하고 증감표나 <span class=\"chem\">f''(a)</span> 값을 보이세요.<br><strong>Paper 2:</strong> <span class=\"chem\">y = f(x)</span> 그래프를 그리고 <span class=\"mono\">Maximum</span> / <span class=\"mono\">Minimum</span> (또는 <span class=\"chem\">f'(x)</span>의 영점)을 쓰세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Find the coordinates of the point(s) of inflexion”": "“변곡점의 좌표를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Solve <span class=\"chem\">f''(x) = 0</span> <strong>AND</strong> verify that <span class=\"chem\">f''(x)</span> <strong>changes sign</strong> across that root (concavity switches between <span class=\"chem\">f'' &gt; 0</span> and <span class=\"chem\">f'' &lt; 0</span>).": "<span class=\"chem\">f''(x) = 0</span>을 풀고 <strong>동시에</strong> 그 근의 좌우에서 <span class=\"chem\">f''(x)</span>의 <strong>부호가 바뀜</strong>을 확인하세요 (오목성이 <span class=\"chem\">f'' &gt; 0</span>과 <span class=\"chem\">f'' &lt; 0</span> 사이에서 전환).",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Warning:</strong> <span class=\"chem\">f''(a) = 0</span> alone is <em>not</em> enough (for example, <span class=\"chem\">y = x^4</span> has <span class=\"chem\">f''(0) = 0</span> but no inflexion point). Always draw a sign chart for <span class=\"chem\">f''(x)</span> to earn the reasoning mark <strong>[R1]</strong>!": "<strong>주의:</strong> <span class=\"chem\">f''(a) = 0</span>만으로는 충분하지 <em>않아요</em> (예: <span class=\"chem\">y = x^4</span>는 <span class=\"chem\">f''(0) = 0</span>이지만 변곡점이 아니에요). 논리 점수 <strong>[R1]</strong>을 받으려면 항상 <span class=\"chem\">f''(x)</span> 부호표를 그리세요!",

    // Question decoder: spotting which technique to use > table > th
    "“The diagram shows the graph of <span class=\"chem\">y = f'(x)</span>. Find where <span class=\"chem\">f(x)</span> is increasing, has local extrema, or has points of inflexion.”": "“그림은 도함수 <span class=\"chem\">y = f'(x)</span>의 그래프이다. <span class=\"chem\">f(x)</span>가 증가하는 구간, 극값, 또는 변곡점을 구하시오.”",

    // Question decoder: spotting which technique to use > table > td
    "Read the given graph as the <em>derivative</em>:<br>• <span class=\"chem\">f(x)</span> increasing <span class=\"chem\">&lt;=&gt; f'(x) &gt; 0</span> (above <span class=\"chem\">x</span>-axis).<br>• Local max/min of <span class=\"chem\">f(x)</span> <span class=\"chem\">&lt;=&gt; f'(x)</span> crosses the <span class=\"chem\">x</span>-axis.<br>• Point of inflexion of <span class=\"chem\">f(x)</span> <span class=\"chem\">&lt;=&gt;</span> <strong>turning point (local max/min) of <span class=\"chem\">f'(x)</span></strong>!": "주어진 그래프를 <em>도함수</em>로 읽으세요:<br>• <span class=\"chem\">f(x)</span> 증가 <span class=\"chem\">&lt;=&gt; f'(x) &gt; 0</span> (<span class=\"chem\">x</span>축 위).<br>• <span class=\"chem\">f(x)</span>의 극대/극소 <span class=\"chem\">&lt;=&gt; f'(x)</span>가 <span class=\"chem\">x</span>축을 통과함.<br>• <span class=\"chem\">f(x)</span>의 변곡점 <span class=\"chem\">&lt;=&gt;</span> <strong><span class=\"chem\">f'(x)</span>의 극점(극대/극소)</strong>!",

    // Question decoder: spotting which technique to use > table > td
    "Before doing anything, circle the axis label (<span class=\"chem\">y = f(x)</span> vs <span class=\"chem\">y = f'(x)</span>). If <span class=\"chem\">f'(x)</span> touches the <span class=\"chem\">x</span>-axis without crossing it, <span class=\"chem\">f(x)</span> has a <strong>stationary point of inflexion</strong>.": "문제를 풀기 전에 축 이름(<span class=\"chem\">y = f(x)</span>인지 <span class=\"chem\">y = f'(x)</span>인지)에 동그라미를 치세요. <span class=\"chem\">f'(x)</span>가 <span class=\"chem\">x</span>축을 뚫고 지나가지 않고 접하기만 하면 <span class=\"chem\">f(x)</span>는 <strong>정류 변곡점</strong>을 가져요.",

    // Question decoder: spotting which technique to use > table > th
    "“Show that the surface area is given by <span class=\"chem\">A(x) = ...</span> and find the value of <span class=\"chem\">x</span> that minimizes <span class=\"chem\">A</span>”": "“겉넓이가 <span class=\"chem\">A(x) = ...</span>임을 보이고, <span class=\"chem\">A</span>를 최소화하는 <span class=\"chem\">x</span>의 값을 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "1. Write the constraint equation (e.g. fixed volume <span class=\"chem\">V</span>) and isolate the second variable <span class=\"chem\">h</span>.<br>2. Substitute <span class=\"chem\">h</span> into the objective function <span class=\"chem\">A</span>.<br>3. Solve <span class=\"chem\">A'(x) = 0</span> and justify minimum via <span class=\"chem\">A''(x) &gt; 0</span>.": "1. 제약 식(예: 고정된 부피 <span class=\"chem\">V</span>)을 세워 두 번째 변수 <span class=\"chem\">h</span>를 정리하세요.<br>2. <span class=\"chem\">h</span>를 목적함수 <span class=\"chem\">A</span>에 대입하세요.<br>3. <span class=\"chem\">A'(x) = 0</span>을 풀고 <span class=\"chem\">A''(x) &gt; 0</span>으로 최솟값임을 정당화하세요.",

    // Question decoder: spotting which technique to use > table > td
    "Because the formula for <span class=\"chem\">A(x)</span> is given in a “Show that” part, you can still do the calculus part even if you get stuck on the geometry setup!": "“Show that” 소문항에서 <span class=\"chem\">A(x)</span> 공식이 이미 주어지므로, 기하 식 세우기에서 막히더라도 뒤의 미분 계산 부분은 그대로 풀 수 있어요!",

    // Limits, standard derivatives, tangents, normals and differen > data-toc attribute
    "Limits & rules": "극한과 미분법",

    // Limits, standard derivatives, tangents, normals and differen > h2
    "Limits, standard derivatives, tangents, normals and differentiation rules": "극한, 기본 도함수, 접선·법선과 미분 공식",

    // Limits, standard derivatives, tangents, normals and differen > p
    "When we zoom in closely on a smooth curve <span class=\"chem\">y = f(x)</span> near a point <span class=\"chem\">P(x, f(x))</span>, the curve looks like a straight line. If we pick a nearby point <span class=\"chem\">Q(x + h, f(x + h))</span>, the chord <span class=\"chem\">PQ</span> has gradient <span class=\"chem\">(f(x + h) - f(x)) / h</span>. As the step <span class=\"chem\">h -&gt; 0</span>, the chord approaches the <dfn data-def=\"A straight line that touches a curve at a point and has the exact same instantaneous gradient f'(x) as the curve at that point.\">tangent line</dfn>, and its limiting gradient is the <dfn data-def=\"The instantaneous rate of change of f(x) with respect to x, giving the gradient of the tangent to y = f(x) at any point x.\">derivative</dfn> <span class=\"chem\">f'(x)</span> (also written <span class=\"chem\">dy/dx</span>).": "매끄러운 곡선 <span class=\"chem\">y = f(x)</span> 위의 점 <span class=\"chem\">P(x, f(x))</span> 근처를 크게 확대하면 곡선은 직선처럼 보여요. 가까운 점 <span class=\"chem\">Q(x + h, f(x + h))</span>를 잡으면 현 <span class=\"chem\">PQ</span>의 기울기는 <span class=\"chem\">(f(x + h) - f(x)) / h</span>예요. 간격 <span class=\"chem\">h -&gt; 0</span>이 되면 현은 <dfn data-def=\"A straight line that touches a curve at a point and has the exact same instantaneous gradient f'(x) as the curve at that point.\">접선 <span class=\"en-term\">(tangent line)</span></dfn>에 가까워지고, 그 극한 기울기가 바로 <dfn data-def=\"The instantaneous rate of change of f(x) with respect to x, giving the gradient of the tangent to y = f(x) at any point x.\">도함수 <span class=\"en-term\">(derivative)</span></dfn> <span class=\"chem\">f'(x)</span> (<span class=\"chem\">dy/dx</span>로도 씀)예요.",

    // Limits, standard derivatives, tangents, normals and differen > data-def attribute
    "A straight line that touches a curve at a point and has the exact same instantaneous gradient f'(x) as the curve at that point.": "곡선 위의 한 점에서 곡선과 접하며, 그 점에서의 순간 기울기 f'(x)와 정확히 같은 기울기를 갖는 직선.",

    // Limits, standard derivatives, tangents, normals and differen > data-def attribute
    "The instantaneous rate of change of f(x) with respect to x, giving the gradient of the tangent to y = f(x) at any point x.": "x에 대한 f(x)의 순간변화율로, 임의의 점 x에서 y = f(x)의 접선의 기울기를 나타냄.",

    // Limits, standard derivatives, tangents, normals and differen > h3
    "Power rule and standard derivatives": "거듭제곱 미분과 기본 도함수",

    // Limits, standard derivatives, tangents, normals and differen > p
    "For any rational power <span class=\"chem\">n</span>, the power rule brings the exponent down to the front and subtracts <span class=\"chem\">1</span> from the exponent. Before differentiating roots or fractions with <span class=\"chem\">x</span> in the denominator, always rewrite them in index form <span class=\"chem\">a x^n</span> first:": "임의의 유리수 지수 <span class=\"chem\">n</span>에 대해 거듭제곱 미분은 지수를 앞으로 내리고 지수에서 <span class=\"chem\">1</span>을 빼요. 거듭제곱근이나 분모에 <span class=\"chem\">x</span>가 있는 분수를 미분하기 전에는 항상 지수 꼴 <span class=\"chem\">a x^n</span>으로 먼저 고쳐 쓰세요:",

    // Limits, standard derivatives, tangents, normals and differen > li
    "<span class=\"chem\">1 / x^k = x^{-k}</span> (for example, <span class=\"chem\">1 / x^3 = x^{-3} -&gt; -3x^{-4} = -3 / x^4</span>).": "<span class=\"chem\">1 / x^k = x^{-k}</span> (예: <span class=\"chem\">1 / x^3 = x^{-3} -&gt; -3x^{-4} = -3 / x^4</span>).",

    // Limits, standard derivatives, tangents, normals and differen > li
    "<span class=\"chem\">sqrt(x) = x^{1/2} -&gt; (1/2)x^{-1/2} = 1 / (2 sqrt(x))</span>, and <span class=\"chem\">1 / sqrt(x) = x^{-1/2} -&gt; -(1/2)x^{-3/2}</span>.": "<span class=\"chem\">sqrt(x) = x^{1/2} -&gt; (1/2)x^{-1/2} = 1 / (2 sqrt(x))</span>, 그리고 <span class=\"chem\">1 / sqrt(x) = x^{-1/2} -&gt; -(1/2)x^{-3/2}</span>.",

    // Limits, standard derivatives, tangents, normals and differen > li
    "A standalone constant <span class=\"chem\">c</span> has gradient zero (<span class=\"chem\">d/dx (c) = 0</span>), and constants multiplying a function stay in front: <span class=\"chem\">d/dx [k f(x)] = k f'(x)</span>.": "혼자 있는 상수 <span class=\"chem\">c</span>의 기울기는 0이고 (<span class=\"chem\">d/dx (c) = 0</span>), 함수에 곱해진 상수는 앞에 그대로 남아요: <span class=\"chem\">d/dx [k f(x)] = k f'(x)</span>.",

    // Limits, standard derivatives, tangents, normals and differen > formula booklet note > p
    "<strong>In your formula booklet (SL 5.3 &amp; 5.6):</strong> Standard derivatives given in the booklet:": "<strong>공식집에 수록 (SL 5.3 &amp; 5.6):</strong> 공식집에 제공되는 기본 도함수:",

    // Limits, standard derivatives, tangents, normals and differen > formula booklet note > li
    "<span class=\"chem\">f(x) = sin x =&gt; f'(x) = cos x</span> and <span class=\"chem\">f(x) = cos x =&gt; f'(x) = -sin x</span>": "<span class=\"chem\">f(x) = sin x =&gt; f'(x) = cos x</span> 그리고 <span class=\"chem\">f(x) = cos x =&gt; f'(x) = -sin x</span>",

    // Limits, standard derivatives, tangents, normals and differen > formula booklet note > li
    "<span class=\"chem\">f(x) = e^x =&gt; f'(x) = e^x</span> and <span class=\"chem\">f(x) = ln x =&gt; f'(x) = 1/x</span>": "<span class=\"chem\">f(x) = e^x =&gt; f'(x) = e^x</span> 그리고 <span class=\"chem\">f(x) = ln x =&gt; f'(x) = 1/x</span>",

    // Limits, standard derivatives, tangents, normals and differen > common mistake > p
    "<strong>Common mistake — Degrees vs radians and expanding before differentiating:</strong><br> 1. The formulas <span class=\"chem\">d/dx (sin x) = cos x</span> and <span class=\"chem\">d/dx (cos x) = -sin x</span> are valid <strong>only when <span class=\"chem\">x</span> is in radians</strong>.<br> 2. When given a single-term denominator like <span class=\"chem\">y = (x^3 - 4x + 1) / x^2</span>, do <em>not</em> jump straight to the quotient rule! Split the fraction into powers first: <span class=\"chem\">y = x - 4x^{-1} + x^{-2}</span>, then differentiate term by term in one line: <span class=\"chem\">dy/dx = 1 + 4x^{-2} - 2x^{-3}</span>.": "<strong>흔한 실수 — 도(°) vs 라디안, 그리고 미분 전 식 쪼개기:</strong><br> 1. <span class=\"chem\">d/dx (sin x) = cos x</span>와 <span class=\"chem\">d/dx (cos x) = -sin x</span>는 <strong><span class=\"chem\">x</span>가 라디안일 때만</strong> 성립해요.<br> 2. <span class=\"chem\">y = (x^3 - 4x + 1) / x^2</span>처럼 분모가 단항식일 때는 바로 몫의 미분법을 쓰지 <em>마세요</em>! 먼저 거듭제곱 항으로 쪼개어 <span class=\"chem\">y = x - 4x^{-1} + x^{-2}</span>로 만든 뒤 한 줄에 항별로 미분하세요: <span class=\"chem\">dy/dx = 1 + 4x^{-2} - 2x^{-3}</span>.",

    // Limits, standard derivatives, tangents, normals and differen > h3
    "Tangents and normals": "접선과 법선",

    // Limits, standard derivatives, tangents, normals and differen > p
    "At the point on <span class=\"chem\">y = f(x)</span> where <span class=\"chem\">x = a</span>, the <span class=\"chem\">y</span>-coordinate is <span class=\"chem\">y_1 = f(a)</span> and the tangent gradient is <span class=\"chem\">m_T = f'(a)</span>. The <dfn data-def=\"The straight line perpendicular to the tangent line at the point of contact (a, f(a)), with gradient m_N = -1 / f'(a).\">normal line</dfn> is perpendicular to the tangent at <span class=\"chem\">(a, f(a))</span>, so its gradient is the negative reciprocal <span class=\"chem\">m_N = -1 / m_T = -1 / f'(a)</span> (provided <span class=\"chem\">f'(a) != 0</span>).": "<span class=\"chem\">y = f(x)</span> 위의 <span class=\"chem\">x = a</span>인 점에서 <span class=\"chem\">y</span>좌표는 <span class=\"chem\">y_1 = f(a)</span>이고 접선의 기울기는 <span class=\"chem\">m_T = f'(a)</span>예요. <dfn data-def=\"The straight line perpendicular to the tangent line at the point of contact (a, f(a)), with gradient m_N = -1 / f'(a).\">법선 <span class=\"en-term\">(normal line)</span></dfn>은 <span class=\"chem\">(a, f(a))</span>에서 접선에 수직인 직선이므로 기울기는 음의 역수 <span class=\"chem\">m_N = -1 / m_T = -1 / f'(a)</span>예요 (<span class=\"chem\">f'(a) != 0</span>일 때).",

    // Limits, standard derivatives, tangents, normals and differen > data-def attribute
    "The straight line perpendicular to the tangent line at the point of contact (a, f(a)), with gradient m_N = -1 / f'(a).": "접점 (a, f(a))에서 접선에 수직이고 기울기가 m_N = -1 / f'(a)인 직선.",

    // Limits, standard derivatives, tangents, normals and differen > equation > maths line
    "Tangent: <i>y</i> − <i>f</i>(<i>a</i>) = <i>f'</i>(<i>a</i>)(<i>x</i> − <i>a</i>) &nbsp;&nbsp;|&nbsp;&nbsp; Normal: <i>y</i> − <i>f</i>(<i>a</i>) = −<span class=\"frac\"><span>1</span><span><i>f'</i>(<i>a</i>)</span></span>(<i>x</i> − <i>a</i>)": "접선: <i>y</i> − <i>f</i>(<i>a</i>) = <i>f'</i>(<i>a</i>)(<i>x</i> − <i>a</i>) &nbsp;&nbsp;|&nbsp;&nbsp; 법선: <i>y</i> − <i>f</i>(<i>a</i>) = −<span class=\"frac\"><span>1</span><span><i>f'</i>(<i>a</i>)</span></span>(<i>x</i> − <i>a</i>)",

    // Limits, standard derivatives, tangents, normals and differen > equation > dd
    "point of contact on the curve": "곡선 위의 접점",

    // Limits, standard derivatives, tangents, normals and differen > equation > dd
    "gradient of the tangent at <i>x</i> = <i>a</i>": "<i>x</i> = <i>a</i>에서의 접선의 기울기",

    // Limits, standard derivatives, tangents, normals and differen > equation > dd
    "gradient of the normal at <i>x</i> = <i>a</i>": "<i>x</i> = <i>a</i>에서의 법선의 기울기",

    // Limits, standard derivatives, tangents, normals and differen > widget > data-title attribute
    "Tangent, normal and secant limit explorer": "접선, 법선 및 할선 극한 탐색기",

    // Limits, standard derivatives, tangents, normals and differen > widget > figcaption
    "Choose a function, move the point of contact <span class=\"chem\">x_0</span>, and shrink the secant step <span class=\"chem\">h -&gt; 0</span> to see the secant chord lock onto the tangent line while the normal stays perpendicular.": "함수를 고르고 접점 <span class=\"chem\">x_0</span>을 움직인 뒤 할선 간격 <span class=\"chem\">h -&gt; 0</span>을 줄여 보세요. 법선은 수직을 유지한 채 할선이 접선에 딱 맞게 수렴하는 모습을 확인할 수 있어요.",

    // Limits, standard derivatives, tangents, normals and differen > h3
    "Chain rule, product rule, and quotient rule": "연쇄법칙(합성함수 미분), 곱의 미분법과 몫의 미분법",

    // Limits, standard derivatives, tangents, normals and differen > p
    "When functions are combined by composition, multiplication, or division, you cannot simply differentiate each piece separately. Use the three structural rules from your Formula Booklet:": "함수가 합성, 곱셈, 나눗셈으로 결합되어 있을 때는 각 부분을 따로 미분해서는 안 돼요. 공식집에 있는 세 가지 구조 공식을 쓰세요:",

    // Limits, standard derivatives, tangents, normals and differen > table > caption
    "Differentiation rules for composite, product and quotient functions (SL 5.6)": "합성함수, 곱함수, 몫함수의 미분 법칙 (SL 5.6)",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Rule": "법칙",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "When to use it": "사용하는 경우",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Formula Booklet form &amp; fast pattern": "공식집 형태 및 빠른 패턴",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Quick example": "간단한 예시",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Chain rule": "연쇄법칙 (Chain rule)",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "A function <em>inside</em> another function: <span class=\"chem\">y = f(g(x))</span>.": "다른 함수 <em>안</em>에 함수가 들어 있는 꼴: <span class=\"chem\">y = f(g(x))</span>.",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">dy/dx = (dy/du) * (du/dx) = f'(g(x)) * g'(x)</span><br><em>(“Differentiate the outside leaving the inside alone, then multiply by the derivative of the inside.”)</em>": "<span class=\"chem\">dy/dx = (dy/du) * (du/dx) = f'(g(x)) * g'(x)</span><br><em>(“속은 그대로 두고 겉을 미분한 뒤, 속함수의 미분을 곱한다.”)</em>",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">d/dx [e^{3x^2}] = e^{3x^2} * 6x</span><br><span class=\"chem\">d/dx [ln(5x - 2)] = 5 / (5x - 2)</span><br><span class=\"chem\">d/dx [cos(4x)] = -4 sin(4x)</span>": "<span class=\"chem\">d/dx [e^{3x^2}] = e^{3x^2} * 6x</span><br><span class=\"chem\">d/dx [ln(5x - 2)] = 5 / (5x - 2)</span><br><span class=\"chem\">d/dx [cos(4x)] = -4 sin(4x)</span>",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Product rule": "곱의 미분법 (Product rule)",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "Two functions of <span class=\"chem\">x</span> multiplied together: <span class=\"chem\">y = u(x) v(x)</span>.": "<span class=\"chem\">x</span>에 대한 두 함수가 곱해진 꼴: <span class=\"chem\">y = u(x) v(x)</span>.",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">dy/dx = u (dv/dx) + v (du/dx) = u v' + v u'</span><br><em>(“First times derivative of second, plus second times derivative of first.”)</em>": "<span class=\"chem\">dy/dx = u (dv/dx) + v (du/dx) = u v' + v u'</span><br><em>(“앞 그대로 × 뒤 미분 + 뒤 그대로 × 앞 미분.”)</em>",

    // Limits, standard derivatives, tangents, normals and differen > table > th
    "Quotient rule": "몫의 미분법 (Quotient rule)",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "One function of <span class=\"chem\">x</span> divided by another: <span class=\"chem\">y = u(x) / v(x)</span>.": "<span class=\"chem\">x</span>에 대한 한 함수를 다른 함수로 나눈 꼴: <span class=\"chem\">y = u(x) / v(x)</span>.",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">dy/dx = (v (du/dx) - u (dv/dx)) / v^2 = (v u' - u v') / v^2</span><br><em>(“Bottom times derivative of top, minus top times derivative of bottom, all over bottom squared.”)</em>": "<span class=\"chem\">dy/dx = (v (du/dx) - u (dv/dx)) / v^2 = (v u' - u v') / v^2</span><br><em>(“(분모 × 분자 미분 − 분자 × 분모 미분) ÷ 분모의 제곱.”)</em>",

    // Limits, standard derivatives, tangents, normals and differen > table > td
    "<span class=\"chem\">y = (ln x) / x</span>:<br><span class=\"chem\">y' = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>": "<span class=\"chem\">y = (ln x) / x</span>:<br><span class=\"chem\">y' = (x(1/x) - (ln x)(1)) / x^2 = (1 - ln x) / x^2</span>",

    // Limits, standard derivatives, tangents, normals and differen > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Factoring after the product or quotient rule:</strong> Whenever a question asks you to solve <span class=\"chem\">f'(x) = 0</span> after using the product or quotient rule, <strong>do not expand</strong> brackets! Instead, factor out common terms (especially <span class=\"chem\">e^{kx}</span>, which is never zero, or fractional powers like <span class=\"chem\">(2x + 1)^{-1/2}</span>). For a quotient <span class=\"chem\">(v u' - u v') / v^2 = 0</span>, you only need to set the numerator <span class=\"chem\">v u' - u v' = 0</span> (checking that <span class=\"chem\">v != 0</span>).": "<strong>시험 팁 — 곱의 미분법/몫의 미분법 후 인수분해하기:</strong> 곱의 미분법이나 몫의 미분법을 쓴 뒤 <span class=\"chem\">f'(x) = 0</span>을 풀어야 할 때는 괄호를 <strong>전개하지 마세요</strong>! 대신 공통인수(특히 절대 0이 되지 않는 <span class=\"chem\">e^{kx}</span>나 <span class=\"chem\">(2x + 1)^{-1/2}</span> 같은 분수 지수)를 묶어 내세요. 분수 <span class=\"chem\">(v u' - u v') / v^2 = 0</span>에서는 (<span class=\"chem\">v != 0</span> 확인 후) 분자 <span class=\"chem\">v u' - u v' = 0</span>만 풀면 돼요.",

    // Limits, standard derivatives, tangents, normals and differen > worked example > h3
    "Finding where a normal line intersects a coordinate axis": "법선이 좌표축과 만나는 점 구하기",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Consider the curve <span class=\"chem\">f(x) = e^{2x - 2} * (x^2 + 1)</span>. The normal to the curve at the point <span class=\"chem\">P</span> where <span class=\"chem\">x = 1</span> intersects the <span class=\"chem\">x</span>-axis at point <span class=\"chem\">Q</span>. Find the exact coordinates of <span class=\"chem\">Q</span>. <strong>[6 marks]</strong>": "곡선 <span class=\"chem\">f(x) = e^{2x - 2} * (x^2 + 1)</span>을 생각하자. 이 곡선 위의 <span class=\"chem\">x = 1</span>인 점 <span class=\"chem\">P</span>에서의 법선이 <span class=\"chem\">x</span>축과 점 <span class=\"chem\">Q</span>에서 만난다. <span class=\"chem\">Q</span>의 정확한 좌표를 구하시오 (Find). <strong>[6 marks]</strong>",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Find the y-coordinate of P at x = 1": "x = 1에서 P의 y좌표 구하기",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Substitute x = 1 into f(x) first so we have the full coordinates of the point of contact P.": "먼저 x = 1을 f(x)에 대입해 접점 P의 전체 좌표를 구하세요.",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Differentiate f(x) using the product rule and chain rule": "곱의 미분법과 연쇄법칙으로 f(x) 미분하기",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "f(x) is a product of u = e^{2x−2} (which needs the chain rule, u' = 2e^{2x−2}) and v = x² + 1 (v' = 2x).": "f(x)는 u = e^{2x−2} (연쇄법칙 필요, u' = 2e^{2x−2})와 v = x² + 1 (v' = 2x)의 곱이에요.",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Evaluate the tangent gradient m_T and normal gradient m_N at x = 1": "x = 1에서 접선의 기울기 m_T와 법선의 기울기 m_N 구하기",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Substitute x = 1 into f'(x) to get m_T, then take the negative reciprocal for the normal.": "f'(x)에 x = 1을 대입해 m_T를 구한 뒤, 음의 역수를 취해 법선의 기울기를 구하세요.",

    // Limits, standard derivatives, tangents, normals and differen > worked example > data-title attribute
    "Write the equation of the normal and set y = 0 for the x-intercept Q": "법선의 방정식을 세우고 y = 0을 대입해 x절편 Q 구하기",

    // Limits, standard derivatives, tangents, normals and differen > worked example > p
    "Use point-gradient form at P(1, 2), then substitute y = 0 where the normal crosses the x-axis.": "P(1, 2)에서 점-기울기 꼴을 세운 뒤 법선이 x축과 만나는 곳에서 y = 0을 대입하세요.",

    // Limits, standard derivatives, tangents, normals and differen > try it > p
    "Let <span class=\"chem\">f(x) = x^3 - 6x + 4</span>. Calculate the gradient <span class=\"chem\">f'(1)</span> of the tangent to the curve at <span class=\"chem\">x = 1</span>.": "<span class=\"chem\">f(x) = x^3 - 6x + 4</span>일 때, <span class=\"chem\">x = 1</span>에서 곡선에 그은 접선의 기울기 <span class=\"chem\">f'(1)</span>을 계산하시오 (Calculate).",

    // Limits, standard derivatives, tangents, normals and differen > try it > li
    "Differentiate term by term using the power rule: <span class=\"chem\">f'(x) = 3x^2 - 6</span>.": "거듭제곱 미분으로 항별로 미분하세요: <span class=\"chem\">f'(x) = 3x^2 - 6</span>.",

    // Limits, standard derivatives, tangents, normals and differen > try it > li
    "Substitute <span class=\"chem\">x = 1</span> into <span class=\"chem\">f'(x) = 3(1)^2 - 6</span>.": "<span class=\"chem\">f'(x) = 3(1)^2 - 6</span>에 <span class=\"chem\">x = 1</span>을 대입하세요.",

    // Increasing and decreasing functions, concavity, and connecti > data-toc attribute
    "Curve analysis": "곡선 개형 분석",

    // Increasing and decreasing functions, concavity, and connecti > h2
    "Increasing and decreasing functions, concavity, and connecting <span class=\"chem\">f</span>, <span class=\"chem\">f'</span> and <span class=\"chem\">f''</span>": "함수의 증가와 감소, 오목·볼록, 그리고 <span class=\"chem\">f</span>, <span class=\"chem\">f'</span>, <span class=\"chem\">f''</span>의 연결",

    // Increasing and decreasing functions, concavity, and connecti > p
    "The first derivative <span class=\"chem\">f'(x)</span> tells you the direction of the curve (going uphill or downhill), while the second derivative <span class=\"chem\">f''(x) = d^2y / dx^2</span> tells you the rate of change of the gradient itself—that is, how the curve bends (<dfn data-def=\"Whether a curve bends upwards like a cup (concave up, f''(x) &gt; 0, tangent lies below the curve) or downwards like a cap (concave down, f''(x) &lt; 0, tangent lies above the curve).\">concavity</dfn>).": "일계도함수 <span class=\"chem\">f'(x)</span>는 곡선의 방향(오르막인지 내리막인지)을 알려주고, 이계도함수 <span class=\"chem\">f''(x) = d^2y / dx^2</span>는 기울기 자체의 변화율—즉 곡선이 휘는 방향(<dfn data-def=\"Whether a curve bends upwards like a cup (concave up, f''(x) &gt; 0, tangent lies below the curve) or downwards like a cap (concave down, f''(x) &lt; 0, tangent lies above the curve).\">오목성 <span class=\"en-term\">(concavity)</span></dfn>)을 알려줘요.",

    // Increasing and decreasing functions, concavity, and connecti > data-def attribute
    "Whether a curve bends upwards like a cup (concave up, f''(x) > 0, tangent lies below the curve) or downwards like a cap (concave down, f''(x) < 0, tangent lies above the curve).": "곡선이 컵처럼 위로 휘는지(아래로 볼록, f''(x) > 0, 접선이 곡선 아래에 있음) 모자처럼 아래로 휘는지(위로 볼록, f''(x) < 0, 접선이 곡선 위에 있음)를 나타냄.",

    // Increasing and decreasing functions, concavity, and connecti > h3
    "Classifying stationary points and points of inflexion": "정류점과 변곡점 분류하기",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>Local maximum:</strong> <span class=\"chem\">f'(x)</span> changes sign from <span class=\"chem\">+</span> to <span class=\"chem\">-</span> across <span class=\"chem\">x = a</span> (or <span class=\"chem\">f''(a) &lt; 0</span>, concave down).": "<strong>극대:</strong> <span class=\"chem\">x = a</span>를 지나며 <span class=\"chem\">f'(x)</span>의 부호가 <span class=\"chem\">+</span>에서 <span class=\"chem\">-</span>로 바뀌어요 (또는 <span class=\"chem\">f''(a) &lt; 0</span>, 위로 볼록).",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>Local minimum:</strong> <span class=\"chem\">f'(x)</span> changes sign from <span class=\"chem\">-</span> to <span class=\"chem\">+</span> across <span class=\"chem\">x = a</span> (or <span class=\"chem\">f''(a) &gt; 0</span>, concave up).": "<strong>극소:</strong> <span class=\"chem\">x = a</span>를 지나며 <span class=\"chem\">f'(x)</span>의 부호가 <span class=\"chem\">-</span>에서 <span class=\"chem\">+</span>로 바뀌어요 (또는 <span class=\"chem\">f''(a) &gt; 0</span>, 아래로 볼록).",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>Stationary (horizontal) point of inflexion:</strong> <span class=\"chem\">f'(x)</span> has the <em>same</em> sign on both sides of <span class=\"chem\">x = a</span> (either <span class=\"chem\">+</span> to <span class=\"chem\">0</span> to <span class=\"chem\">+</span>, like <span class=\"chem\">y = x^3</span>, or <span class=\"chem\">-</span> to <span class=\"chem\">0</span> to <span class=\"chem\">-</span>). Here <span class=\"chem\">f''(a) = 0</span> and <span class=\"chem\">f''(x)</span> changes sign.": "<strong>정류(수평) 변곡점:</strong> <span class=\"chem\">x = a</span>의 양쪽에서 <span class=\"chem\">f'(x)</span>의 부호가 <em>같아요</em> (<span class=\"chem\">y = x^3</span>처럼 <span class=\"chem\">+</span>에서 <span class=\"chem\">0</span>을 거쳐 <span class=\"chem\">+</span>, 또는 <span class=\"chem\">-</span>에서 <span class=\"chem\">0</span>을 거쳐 <span class=\"chem\">-</span>). 여기서는 <span class=\"chem\">f''(a) = 0</span>이고 <span class=\"chem\">f''(x)</span>의 부호가 바뀌어요.",

    // Increasing and decreasing functions, concavity, and connecti > li
    "<strong>General <dfn data-def=\"A point on a curve where the concavity changes (from concave up to concave down, or vice versa), meaning f''(x) changes sign across the point.\">point of inflexion</dfn>:</strong> Any point where the curve switches between concave up (<span class=\"chem\">f''(x) &gt; 0</span>) and concave down (<span class=\"chem\">f''(x) &lt; 0</span>). A point of inflexion can be <strong>stationary</strong> (<span class=\"chem\">f'(a) = 0</span>) or <strong>non-stationary</strong> (<span class=\"chem\">f'(a) != 0</span>; here the gradient <span class=\"chem\">f'(x)</span> itself has a local maximum or minimum).": "<strong>일반적인 <dfn data-def=\"A point on a curve where the concavity changes (from concave up to concave down, or vice versa), meaning f''(x) changes sign across the point.\">변곡점 <span class=\"en-term\">(point of inflexion)</span></dfn>:</strong> 곡선이 아래로 볼록(<span class=\"chem\">f''(x) &gt; 0</span>)에서 위로 볼록(<span class=\"chem\">f''(x) &lt; 0</span>)으로, 또는 그 반대로 바뀌는 모든 점이에요. 변곡점은 <strong>정류 변곡점</strong>(<span class=\"chem\">f'(a) = 0</span>)일 수도 있고 <strong>비정류 변곡점</strong>(<span class=\"chem\">f'(a) != 0</span>; 이때 기울기 <span class=\"chem\">f'(x)</span> 자체가 극대 또는 극소를 가져요)일 수도 있어요.",

    // Increasing and decreasing functions, concavity, and connecti > data-def attribute
    "A point on a curve where the concavity changes (from concave up to concave down, or vice versa), meaning f''(x) changes sign across the point.": "곡선의 오목·볼록이 바뀌는 점, 즉 그 점의 좌우에서 f''(x)의 부호가 바뀌는 점.",

    // Increasing and decreasing functions, concavity, and connecti > common mistake > p
    "<strong>Crucial trap — <span class=\"chem\">f''(a) = 0</span> does NOT guarantee a point of inflexion!</strong><br> Consider <span class=\"chem\">f(x) = x^4</span> at <span class=\"chem\">x = 0</span>: we have <span class=\"chem\">f'(x) = 4x^3 = 0</span> and <span class=\"chem\">f''(x) = 12x^2 = 0</span> at <span class=\"chem\">x = 0</span>. However, for both <span class=\"chem\">x &lt; 0</span> and <span class=\"chem\">x &gt; 0</span>, <span class=\"chem\">f''(x) = 12x^2 &gt; 0</span> (concave up on both sides!), so <span class=\"chem\">(0, 0)</span> is a <strong>local minimum</strong>, not a point of inflexion. Whenever the Second Derivative Test gives <span class=\"chem\">f''(a) = 0</span>, the test is inconclusive—you <em>must</em> check a sign table of <span class=\"chem\">f'(x)</span> or <span class=\"chem\">f''(x)</span> on either side of <span class=\"chem\">x = a</span>.": "<strong>치명적 함정 — <span class=\"chem\">f''(a) = 0</span>이라고 해서 반드시 변곡점인 것은 아니에요!</strong><br> <span class=\"chem\">x = 0</span>에서 <span class=\"chem\">f(x) = x^4</span>을 생각해 보세요: <span class=\"chem\">x = 0</span>에서 <span class=\"chem\">f'(x) = 4x^3 = 0</span>이고 <span class=\"chem\">f''(x) = 12x^2 = 0</span>이에요. 하지만 <span class=\"chem\">x &lt; 0</span>과 <span class=\"chem\">x &gt; 0</span> 모두에서 <span class=\"chem\">f''(x) = 12x^2 &gt; 0</span>(양쪽 다 아래로 볼록!)이므로 <span class=\"chem\">(0, 0)</span>은 변곡점이 아니라 <strong>극솟값</strong>이에요. 이계도함수 판정에서 <span class=\"chem\">f''(a) = 0</span>이 나오면 판정 불가이므로 <em>반드시</em> <span class=\"chem\">x = a</span> 좌우에서 <span class=\"chem\">f'(x)</span> 또는 <span class=\"chem\">f''(x)</span>의 부호표를 확인해야 해요.",

    // Increasing and decreasing functions, concavity, and connecti > h3
    "Master dictionary: connecting <span class=\"chem\">f(x)</span>, <span class=\"chem\">f'(x)</span>, and <span class=\"chem\">f''(x)</span>": "핵심 대응표: <span class=\"chem\">f(x)</span>, <span class=\"chem\">f'(x)</span>, <span class=\"chem\">f''(x)</span> 연결하기",

    // Increasing and decreasing functions, concavity, and connecti > table > caption
    "How features of y = f(x) appear on the graphs of y = f'(x) and y = f''(x)": "y = f(x)의 특징이 y = f'(x)와 y = f''(x) 그래프에 나타나는 모습",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Feature on <span class=\"chem\">y = f(x)</span>": "<span class=\"chem\">y = f(x)</span>에서의 특징",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "What happens on <span class=\"chem\">y = f'(x)</span>": "<span class=\"chem\">y = f'(x)</span>에서의 모습",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "What happens on <span class=\"chem\">y = f''(x)</span>": "<span class=\"chem\">y = f''(x)</span>에서의 모습",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is increasing": "<span class=\"chem\">f(x)</span>가 증가함",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x) &gt; 0</span> (graph of <span class=\"chem\">f'</span> lies <strong>above</strong> the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f'(x) &gt; 0</span> (<span class=\"chem\">f'</span> 그래프가 <span class=\"chem\">x</span>축 <strong>위</strong>에 있음)",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is decreasing": "<span class=\"chem\">f(x)</span>가 감소함",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x) &lt; 0</span> (graph of <span class=\"chem\">f'</span> lies <strong>below</strong> the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f'(x) &lt; 0</span> (<span class=\"chem\">f'</span> 그래프가 <span class=\"chem\">x</span>축 <strong>아래</strong>에 있음)",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Local maximum of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span>의 극대",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">x</span>-intercept where <span class=\"chem\">f'(x)</span> crosses from <strong>above to below</strong> (<span class=\"chem\">+ -&gt; -</span>)": "<span class=\"chem\">f'(x)</span>가 <strong>위에서 아래로</strong> 지나가는 <span class=\"chem\">x</span>절편 (<span class=\"chem\">+ -&gt; -</span>)",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f''(x) &lt; 0</span> (below the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f''(x) &lt; 0</span> (<span class=\"chem\">x</span>축 아래)",
    "<span class=\"chem\">f''(x) &lt;= 0</span> at that point: usually <span class=\"chem\">f''(x) &lt; 0</span> (below the <span class=\"chem\">x</span>-axis), but <span class=\"chem\">f''(x) = 0</span> is possible, e.g. <span class=\"chem\">y = -x^4</span> at <span class=\"chem\">x = 0</span>": "그 점에서 <span class=\"chem\">f''(x) &lt;= 0</span>: 보통은 <span class=\"chem\">f''(x) &lt; 0</span> (<span class=\"chem\">x</span>축 아래)이지만, <span class=\"chem\">f''(x) = 0</span>일 수도 있어요 (예: <span class=\"chem\">x = 0</span>에서의 <span class=\"chem\">y = -x^4</span>)",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Local minimum of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span>의 극소",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">x</span>-intercept where <span class=\"chem\">f'(x)</span> crosses from <strong>below to above</strong> (<span class=\"chem\">- -&gt; +</span>)": "<span class=\"chem\">f'(x)</span>가 <strong>아래에서 위로</strong> 지나가는 <span class=\"chem\">x</span>절편 (<span class=\"chem\">- -&gt; +</span>)",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f''(x) &gt; 0</span> (above the <span class=\"chem\">x</span>-axis)": "<span class=\"chem\">f''(x) &gt; 0</span> (<span class=\"chem\">x</span>축 위)",
    "<span class=\"chem\">f''(x) &gt;= 0</span> at that point: usually <span class=\"chem\">f''(x) &gt; 0</span> (above the <span class=\"chem\">x</span>-axis), but <span class=\"chem\">f''(x) = 0</span> is possible, e.g. <span class=\"chem\">y = x^4</span> at <span class=\"chem\">x = 0</span>": "그 점에서 <span class=\"chem\">f''(x) &gt;= 0</span>: 보통은 <span class=\"chem\">f''(x) &gt; 0</span> (<span class=\"chem\">x</span>축 위)이지만, <span class=\"chem\">f''(x) = 0</span>일 수도 있어요 (예: <span class=\"chem\">x = 0</span>에서의 <span class=\"chem\">y = x^4</span>)",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is concave up (<span class=\"chem\">∪</span>)": "<span class=\"chem\">f(x)</span>가 아래로 볼록 (<span class=\"chem\">∪</span>)",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x)</span> is <strong>increasing</strong> (positive slope on <span class=\"chem\">f'</span>)": "<span class=\"chem\">f'(x)</span>가 <strong>증가함</strong> (<span class=\"chem\">f'</span>의 기울기가 양수)",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "<span class=\"chem\">f(x)</span> is concave down (<span class=\"chem\">∩</span>)": "<span class=\"chem\">f(x)</span>가 위로 볼록 (<span class=\"chem\">∩</span>)",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x)</span> is <strong>decreasing</strong> (negative slope on <span class=\"chem\">f'</span>)": "<span class=\"chem\">f'(x)</span>가 <strong>감소함</strong> (<span class=\"chem\">f'</span>의 기울기가 음수)",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Point of inflexion of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span>의 변곡점",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<strong>Local maximum or minimum (turning point) of <span class=\"chem\">f'(x)</span></strong>": "<strong><span class=\"chem\">f'(x)</span>의 극대 또는 극소(극점)</strong>",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">x</span>-intercept where <span class=\"chem\">f''(x) = 0</span> <strong>and crosses the <span class=\"chem\">x</span>-axis</strong>": "<span class=\"chem\">f''(x) = 0</span>이고 <strong><span class=\"chem\">x</span>축을 뚫고 지나는</strong> <span class=\"chem\">x</span>절편",

    // Increasing and decreasing functions, concavity, and connecti > table > th
    "Stationary point of inflexion of <span class=\"chem\">f(x)</span>": "<span class=\"chem\">f(x)</span>의 정류 변곡점",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f'(x) = 0</span> and <span class=\"chem\">f'(x)</span> <strong>touches</strong> the <span class=\"chem\">x</span>-axis without crossing": "<span class=\"chem\">f'(x) = 0</span>이고 <span class=\"chem\">f'(x)</span>가 <span class=\"chem\">x</span>축을 뚫지 않고 <strong>접함</strong>",

    // Increasing and decreasing functions, concavity, and connecti > table > td
    "<span class=\"chem\">f''(x) = 0</span> and <span class=\"chem\">f''(x)</span> crosses the <span class=\"chem\">x</span>-axis": "<span class=\"chem\">f''(x) = 0</span>이고 <span class=\"chem\">f''(x)</span>가 <span class=\"chem\">x</span>축을 뚫고 지남",

    // Increasing and decreasing functions, concavity, and connecti > widget > data-title attribute
    "Synchronized f(x), f'(x) and f''(x) explorer": "동기화된 f(x), f'(x), f''(x) 탐색기",

    // Increasing and decreasing functions, concavity, and connecti > widget > figcaption
    "Drag <span class=\"chem\">x_0</span> across the domain and compare all three curves at once: zeros of <span class=\"chem\">f'(x)</span> align vertically with turning points of <span class=\"chem\">f(x)</span>, while turning points of <span class=\"chem\">f'(x)</span> (and sign-changing zeros of <span class=\"chem\">f''(x)</span>) align vertically with points of inflexion of <span class=\"chem\">f(x)</span>. Switch to <span class=\"chem\">f(x) = x^4</span> to see why <span class=\"chem\">f''(0) = 0</span> without a sign change is a minimum, not an inflexion point.": "정의역에서 <span class=\"chem\">x_0</span>을 드래그해 세 곡선을 한꺼번에 비교해 보세요: <span class=\"chem\">f'(x)</span>의 영점은 <span class=\"chem\">f(x)</span>의 극점과 수직으로 정렬되고, <span class=\"chem\">f'(x)</span>의 극점(및 부호가 바뀌는 <span class=\"chem\">f''(x)</span>의 영점)은 <span class=\"chem\">f(x)</span>의 변곡점과 수직으로 정렬돼요. <span class=\"chem\">f(x) = x^4</span>로 바꾸어 부호 변화 없는 <span class=\"chem\">f''(0) = 0</span>이 왜 변곡점이 아니라 극솟값인지 확인해 보세요.",

    // Increasing and decreasing functions, concavity, and connecti > worked example > h3
    "Classifying stationary and inflexion points of a polynomial": "다항함수의 정류점과 변곡점 분류하기",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Consider <span class=\"chem\">f(x) = x^4 - 4x^3 + 10</span>. Find the coordinates of all stationary points and points of inflexion on the graph of <span class=\"chem\">f</span>, justifying their nature. <strong>[7 marks]</strong>": "<span class=\"chem\">f(x) = x^4 - 4x^3 + 10</span>을 생각하자. <span class=\"chem\">f</span>의 그래프 위의 모든 정류점과 변곡점의 좌표를 구하고 (Find), 각 점의 성질을 정당화하시오. <strong>[7 marks]</strong>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > data-title attribute
    "Find f'(x) and solve f'(x) = 0 for stationary points": "f'(x)를 구하고 f'(x) = 0을 풀어 정류점 찾기",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Factor out the highest common power of x to find all roots of f'(x) = 0 cleanly.": "x의 가장 큰 공통 거듭제곱을 묶어 내어 f'(x) = 0의 모든 근을 깔끔하게 구하세요.",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "<i>f'</i>(<i>x</i>) = 4<i>x</i><sup>3</sup> − 12<i>x</i><sup>2</sup> = 4<i>x</i><sup>2</sup>(<i>x</i> − 3) = 0 ⇒ <i>x</i> = 0 or <i>x</i> = 3 <b>[M1 A1]</b>": "<i>f'</i>(<i>x</i>) = 4<i>x</i><sup>3</sup> − 12<i>x</i><sup>2</sup> = 4<i>x</i><sup>2</sup>(<i>x</i> − 3) = 0 ⇒ <i>x</i> = 0 또는 <i>x</i> = 3 <b>[M1 A1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > data-title attribute
    "Find f''(x) and solve f''(x) = 0 for candidate inflexion points": "f''(x)를 구하고 f''(x) = 0을 풀어 변곡점 후보 찾기",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Differentiate f'(x) to get f''(x) and factor to find where concavity can change.": "f'(x)를 미분해 f''(x)를 얻고 인수분해하여 오목·볼록이 바뀔 수 있는 곳을 찾으세요.",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "<i>f''</i>(<i>x</i>) = 12<i>x</i><sup>2</sup> − 24<i>x</i> = 12<i>x</i>(<i>x</i> − 2) = 0 ⇒ <i>x</i> = 0 or <i>x</i> = 2 <b>[M1 A1]</b>": "<i>f''</i>(<i>x</i>) = 12<i>x</i><sup>2</sup> − 24<i>x</i> = 12<i>x</i>(<i>x</i> − 2) = 0 ⇒ <i>x</i> = 0 또는 <i>x</i> = 2 <b>[M1 A1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > data-title attribute
    "Test sign changes of f''(x) and classify every point": "f''(x)의 부호 변화를 확인해 모든 점 분류하기",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "For x &lt; 0 (e.g. x = −1), f''(−1) = +36 &gt; 0. For 0 &lt; x &lt; 2 (e.g. x = 1), f''(1) = −12 &lt; 0. For x &gt; 2 (e.g. x = 3), f''(3) = +36 &gt; 0.": "x &lt; 0일 때(예: x = −1) f''(−1) = +36 &gt; 0이고, 0 &lt; x &lt; 2일 때(예: x = 1) f''(1) = −12 &lt; 0이며, x &gt; 2일 때(예: x = 3) f''(3) = +36 &gt; 0이에요.",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "At <i>x</i> = 3: <i>f'</i>(3) = 0 and <i>f''</i>(3) = 36 &gt; 0 ⇒ <b>(3, −17) is a local minimum</b> <b>[R1]</b>": "<i>x</i> = 3에서: <i>f'</i>(3) = 0이고 <i>f''</i>(3) = 36 &gt; 0 ⇒ <b>(3, −17)은 극솟값</b> <b>[R1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "At <i>x</i> = 0: <i>f'</i>(0) = 0, <i>f''</i>(0) = 0, and <i>f''</i>(<i>x</i>) changes sign (+ to −) ⇒ <b>(0, 10) is a stationary point of inflexion</b>": "<i>x</i> = 0에서: <i>f'</i>(0) = 0, <i>f''</i>(0) = 0이고 <i>f''</i>(<i>x</i>)의 부호가 바뀜(+에서 −로) ⇒ <b>(0, 10)은 정류 변곡점</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > maths line
    "At <i>x</i> = 2: <i>f</i>(2) = 16 − 32 + 10 = −6, <i>f''</i>(2) = 0, and <i>f''</i>(<i>x</i>) changes sign (− to +) ⇒ <b>(2, −6) is a non-stationary point of inflexion</b> <b>[A1]</b>": "<i>x</i> = 2에서: <i>f</i>(2) = 16 − 32 + 10 = −6, <i>f''</i>(2) = 0이고 <i>f''</i>(<i>x</i>)의 부호가 바뀜(−에서 +로) ⇒ <b>(2, −6)은 비정류 변곡점</b> <b>[A1]</b>",

    // Increasing and decreasing functions, concavity, and connecti > worked example > p
    "Local minimum at <span class=\"chem\">(3, -17)</span>; stationary point of inflexion at <span class=\"chem\">(0, 10)</span>; non-stationary point of inflexion at <span class=\"chem\">(2, -6)</span>.": "극솟값 <span class=\"chem\">(3, -17)</span>; 정류 변곡점 <span class=\"chem\">(0, 10)</span>; 비정류 변곡점 <span class=\"chem\">(2, -6)</span>.",

    // Increasing and decreasing functions, concavity, and connecti > try it > p
    "For the cubic curve <span class=\"chem\">g(x) = x^3 - 6x^2 + 9x - 5</span>, calculate the <span class=\"chem\">y</span>-coordinate of its point of inflexion.": "삼차곡선 <span class=\"chem\">g(x) = x^3 - 6x^2 + 9x - 5</span>의 변곡점의 <span class=\"chem\">y</span>좌표를 계산하시오 (Calculate).",

    // Increasing and decreasing functions, concavity, and connecti > try it > li
    "Differentiate twice: <span class=\"chem\">g'(x) = 3x^2 - 12x + 9</span> and <span class=\"chem\">g''(x) = 6x - 12</span>.": "두 번 미분하세요: <span class=\"chem\">g'(x) = 3x^2 - 12x + 9</span>, <span class=\"chem\">g''(x) = 6x - 12</span>.",

    // Increasing and decreasing functions, concavity, and connecti > try it > li
    "Set <span class=\"chem\">g''(x) = 0</span> to get <span class=\"chem\">x = 2</span> (where <span class=\"chem\">g''(x)</span> changes sign from negative to positive), then substitute <span class=\"chem\">x = 2</span> into <span class=\"chem\">g(x) = 2^3 - 6(2^2) + 9(2) - 5</span>.": "<span class=\"chem\">g''(x) = 0</span>으로 놓아 <span class=\"chem\">x = 2</span> (<span class=\"chem\">g''(x)</span>의 부호가 음에서 양으로 바뀜)를 구한 뒤, <span class=\"chem\">g(x) = 2^3 - 6(2^2) + 9(2) - 5</span>에 <span class=\"chem\">x = 2</span>를 대입하세요.",

    // Optimization in geometric and real-world contexts > data-toc attribute
    "Optimization": "최적화",

    // Optimization in geometric and real-world contexts > h2
    "Optimization in geometric and real-world contexts": "기하 및 실생활 맥락에서의 최적화",

    // Optimization in geometric and real-world contexts > p
    "Optimization problems ask for the largest or smallest possible value of a quantity (such as volume, surface area, profit, or travel time) subject to a fixed constraint. Every IB optimization question follows a reliable four-step structure:": "최적화 문제는 주어진 제약 조건 아래 어떤 양(부피, 겉넓이, 이익, 이동 시간 등)의 최댓값이나 최솟값을 구하는 문제예요. 모든 IB 최적화 문제는 다음 4단계 구조를 따라요:",

    // Optimization in geometric and real-world contexts > li
    "<strong>Use the constraint to eliminate the second variable:</strong> Write the constraint equation (for example, fixed volume <span class=\"chem\">V = pi r^2 h = 500</span>), isolate the second variable (<span class=\"chem\">h = 500 / (pi r^2)</span>), and substitute it into the quantity you want to optimize so that your objective function has <strong>only one input variable</strong>.": "<strong>제약 조건으로 두 번째 변수 소거하기:</strong> 제약 방정식(예: 고정 부피 <span class=\"chem\">V = pi r^2 h = 500</span>)을 써서 두 번째 변수(<span class=\"chem\">h = 500 / (pi r^2)</span>)를 정리한 뒤 최적화할 식에 대입해 목적함수가 <strong>오직 하나의 입력 변수</strong>만 갖도록 만드세요.",

    // Optimization in geometric and real-world contexts > li
    "<strong>Differentiate and set the derivative to zero:</strong> Rewrite fractions with negative exponents first (<span class=\"chem\">r^{-1}</span> or <span class=\"chem\">r^{-2}</span>), differentiate with respect to your variable, and solve <span class=\"chem\">f'(x) = 0</span>.": "<strong>미분하고 도함수를 0으로 놓기:</strong> 분수를 먼저 음수 지수(<span class=\"chem\">r^{-1}</span> 또는 <span class=\"chem\">r^{-2}</span>)로 고쳐 쓴 뒤 변수에 대해 미분해 <span class=\"chem\">f'(x) = 0</span>을 푸세요.",

    // Optimization in geometric and real-world contexts > li
    "<strong>Justify that you found a maximum or minimum:</strong> The markscheme nearly always awards a dedicated mark for proving that your stationary point is indeed a maximum (<span class=\"chem\">f''(x) &lt; 0</span>) or a minimum (<span class=\"chem\">f''(x) &gt; 0</span>).": "<strong>최댓값 또는 최솟값임을 정당화하기:</strong> 채점 기준에는 거의 항상 정류점이 실제로 최댓값(<span class=\"chem\">f''(x) &lt; 0</span>) 또는 최솟값(<span class=\"chem\">f''(x) &gt; 0</span>)임을 증명하는 별도의 배점이 있어요.",

    // Optimization in geometric and real-world contexts > li
    "<strong>Check domain endpoints and answer the exact question:</strong> If <span class=\"chem\">x</span> is restricted to a closed interval <span class=\"chem\">a &lt;= x &lt;= b</span>, compare <span class=\"chem\">f(x)</span> at the stationary point with the endpoint values <span class=\"chem\">f(a)</span> and <span class=\"chem\">f(b)</span>. Finally, check whether the question asked for the optimal dimension <span class=\"chem\">x</span> or the optimal value <span class=\"chem\">f(x)</span>!": "<strong>정의역의 양 끝점을 확인하고 문제의 요구에 정확히 답하기:</strong> <span class=\"chem\">x</span>가 닫힌구간 <span class=\"chem\">a &lt;= x &lt;= b</span>로 제한되어 있다면 정류점에서의 <span class=\"chem\">f(x)</span>와 끝점 값 <span class=\"chem\">f(a)</span>, <span class=\"chem\">f(b)</span>를 비교하세요. 마지막으로 문제가 최적의 길이 <span class=\"chem\">x</span>를 묻는지 최적의 값 <span class=\"chem\">f(x)</span>를 묻는지 확인하세요!",

    // Optimization in geometric and real-world contexts > not needed for IB > p
    "<strong>Not needed for IB (Scope boundary):</strong> Multivariable optimization using partial derivatives (<span class=\"chem\">∂f/∂x = 0</span>, <span class=\"chem\">∂f/∂y = 0</span>) or Lagrange multipliers is <strong>not</strong> in the IB Math AA syllabus. Every optimization problem in IB Math AA reduces to a function of a <strong>single variable</strong> after substituting the constraint.": "<strong>IB 시험 범위 외 내용:</strong> 편미분(<span class=\"chem\">∂f/∂x = 0</span>, <span class=\"chem\">∂f/∂y = 0</span>)이나 라그랑주 승수법을 이용한 다변수 최적화는 IB Math AA 교육과정에 <strong>없어요</strong>. IB Math AA의 모든 최적화 문제는 제약 조건을 대입하면 <strong>일변수 함수</strong>로 줄어들어요.",

    // Optimization in geometric and real-world contexts > worked example > h3
    "Minimizing the surface area of an open-top rectangular box": "뚜껑이 없는 직육면체 상자의 겉넓이 최소화하기",

    // Optimization in geometric and real-world contexts > worked example > p
    "An open-top rectangular container has a square base of side length <span class=\"chem\">x</span> <span class=\"unit\">cm</span>, height <span class=\"chem\">h</span> <span class=\"unit\">cm</span>, and a fixed volume of <span class=\"chem\">108</span> <span class=\"unit\">cm3</span>.<br> (a) Show that the total external surface area <span class=\"chem\">A</span> <span class=\"unit\">cm2</span> of the container is given by <span class=\"chem\">A(x) = x^2 + 432 / x</span>. <strong>[2 marks]</strong><br> (b) Find the value of <span class=\"chem\">x</span> that minimizes the surface area, justifying that it is a minimum, and state the minimum surface area. <strong>[5 marks]</strong>": "뚜껑이 없는 직육면체 용기의 밑면은 한 변의 길이가 <span class=\"chem\">x</span> <span class=\"unit\">cm</span>인 정사각형이고, 높이는 <span class=\"chem\">h</span> <span class=\"unit\">cm</span>이며, 부피는 <span class=\"chem\">108</span> <span class=\"unit\">cm3</span>로 고정되어 있다.<br> (a) 용기의 전체 바깥 겉넓이 <span class=\"chem\">A</span> <span class=\"unit\">cm2</span>가 <span class=\"chem\">A(x) = x^2 + 432 / x</span>로 주어짐을 보이시오 (Show that). <strong>[2 marks]</strong><br> (b) 겉넓이를 최소화하는 <span class=\"chem\">x</span>의 값을 구하고 (Find) 최솟값임을 정당화한 뒤, 최소 겉넓이를 답하시오 (state). <strong>[5 marks]</strong>",

    // Optimization in geometric and real-world contexts > worked example > data-title attribute
    "Part (a): Express h in terms of x using the volume constraint and substitute into A": "(a) 부피 제약 조건으로 h를 x로 나타내고 A에 대입하기",

    // Optimization in geometric and real-world contexts > worked example > p
    "An open-top box has 1 square base of area x² and 4 vertical rectangular sides each of area xh. In a 'Show that' question, explicitly show the substitution of h.": "뚜껑 없는 상자는 넓이가 x²인 정사각형 밑면 1개와 넓이가 xh인 수직 직사각형 옆면 4개로 이루어져 있어요. 'Show that' 문제에서는 h를 대입하는 과정을 분명히 적으세요.",

    // Optimization in geometric and real-world contexts > worked example > data-title attribute
    "Part (b): Differentiate A(x) = x² + 432x⁻¹ and solve A'(x) = 0": "(b) A(x) = x² + 432x⁻¹을 미분하고 A'(x) = 0 풀기",

    // Optimization in geometric and real-world contexts > worked example > p
    "Rewrite 432/x as 432x⁻¹ before differentiating, then set A'(x) = 0.": "미분하기 전에 432/x를 432x⁻¹로 고쳐 쓴 뒤 A'(x) = 0으로 놓으세요.",

    // Optimization in geometric and real-world contexts > worked example > data-title attribute
    "Justify minimum using A''(x) and calculate A(6)": "A''(x)로 최솟값임을 정당화하고 A(6) 계산하기",

    // Optimization in geometric and real-world contexts > worked example > p
    "Show A''(6) &gt; 0 to prove it is a minimum, then substitute x = 6 into A(x).": "A''(6) &gt; 0임을 보여 최솟값임을 증명한 뒤, A(x)에 x = 6을 대입하세요.",

    // Optimization in geometric and real-world contexts > worked example > maths line
    "<i>A''</i>(<i>x</i>) = 2 + <span class=\"frac\"><span>864</span><span><i>x</i><sup>3</sup></span></span> ⇒ <i>A''</i>(6) = 2 + 4 = 6 &gt; 0, so <i>x</i> = 6 gives a minimum <b>[R1]</b>": "<i>A''</i>(<i>x</i>) = 2 + <span class=\"frac\"><span>864</span><span><i>x</i><sup>3</sup></span></span> ⇒ <i>A''</i>(6) = 2 + 4 = 6 &gt; 0이므로 <i>x</i> = 6에서 최솟값 <b>[R1]</b>",

    // Optimization in geometric and real-world contexts > worked example > p
    "<span class=\"chem\">x = 6</span> <span class=\"unit\">cm</span>; minimum surface area <span class=\"chem\">A = 108</span> <span class=\"unit\">cm2</span>.": "<span class=\"chem\">x = 6</span> <span class=\"unit\">cm</span>; 최소 겉넓이 <span class=\"chem\">A = 108</span> <span class=\"unit\">cm2</span>.",

    // Optimization in geometric and real-world contexts > try it > p
    "A rectangle has one side along the positive <span class=\"chem\">x</span>-axis, one side along the positive <span class=\"chem\">y</span>-axis, and its opposite vertex <span class=\"chem\">(x, y)</span> on the parabola <span class=\"chem\">y = 24 - 2x^2</span> in the first quadrant (<span class=\"chem\">0 &lt; x &lt; sqrt(12)</span>). Calculate the maximum possible area of the rectangle.": "한 변은 양의 <span class=\"chem\">x</span>축 위에, 다른 한 변은 양의 <span class=\"chem\">y</span>축 위에 있고, 맞은편 꼭짓점 <span class=\"chem\">(x, y)</span>가 제1사분면(<span class=\"chem\">0 &lt; x &lt; sqrt(12)</span>)의 포물선 <span class=\"chem\">y = 24 - 2x^2</span> 위에 있는 직사각형이 있어요. 이 직사각형의 최대 넓이를 계산하시오 (Calculate).",

    // Optimization in geometric and real-world contexts > try it > li
    "Write the area function <span class=\"chem\">A(x) = x y = x(24 - 2x^2) = 24x - 2x^3</span> and differentiate: <span class=\"chem\">A'(x) = 24 - 6x^2</span>.": "넓이 함수 <span class=\"chem\">A(x) = x y = x(24 - 2x^2) = 24x - 2x^3</span>을 세우고 미분하세요: <span class=\"chem\">A'(x) = 24 - 6x^2</span>.",

    // Optimization in geometric and real-world contexts > try it > li
    "Set <span class=\"chem\">A'(x) = 0</span> with <span class=\"chem\">x &gt; 0</span> to get <span class=\"chem\">x = 2</span>, then evaluate <span class=\"chem\">A(2) = 2(24 - 2(4))</span>.": "<span class=\"chem\">x &gt; 0</span>에서 <span class=\"chem\">A'(x) = 0</span>을 풀어 <span class=\"chem\">x = 2</span>를 구한 뒤 <span class=\"chem\">A(2) = 2(24 - 2(4))</span>를 계산하세요.",

    // Optimization in geometric and real-world contexts > try it > maths line
    "<i>A'</i>(<i>x</i>) = 24 − 6<i>x</i><sup>2</sup> = 0 ⇒ <i>x</i> = 2 (since <i>x</i> &gt; 0), and <i>A''</i>(2) = −24 &lt; 0": "<i>A'</i>(<i>x</i>) = 24 − 6<i>x</i><sup>2</sup> = 0 ⇒ <i>x</i> = 2 (<i>x</i> &gt; 0이므로), 그리고 <i>A''</i>(2) = −24 &lt; 0",

    // Quick practice > data-toc attribute
    "Practice": "연습 문제",

    // Quick practice > h2
    "Quick practice": "실전 연습",

    // widget string (assets/js/widgets-t5-1.js)
    "vertical": "수직",

    // widget string (assets/js/widgets-t5-1.js)
    "limit h → 0": "극한 h → 0",

    // widget string (assets/js/widgets-t5-1.js)
    "Tangent": "접선",

    // widget string (assets/js/widgets-t5-1.js)
    "Normal": "법선",

    // widget string (assets/js/widgets-t5-1.js)
    "Secant PQ": "할선 PQ",

    // widget string (assets/js/widgets-t5-1.js)
    "Graph of f(x) with tangent, normal and secant lines": "접선, 법선, 할선이 표시된 f(x)의 그래프",

    // widget string (assets/js/widgets-t5-1.js)
    "Stationary point of inflexion (f' = 0, f'' = 0 & changes sign)": "정류 변곡점 (f' = 0, f'' = 0이며 부호 변화)",

    // widget string (assets/js/widgets-t5-1.js)
    "Local minimum (f' = 0, f'' = 0 but f'' ≥ 0 on both sides!)": "극솟값 (f' = 0, f'' = 0이지만 양쪽 모두 f'' ≥ 0!)",

    // widget string (assets/js/widgets-t5-1.js)
    "Local maximum (f' = 0, f'' < 0)": "극댓값 (f' = 0, f'' < 0)",

    // widget string (assets/js/widgets-t5-1.js)
    "Local minimum (f' = 0, f'' > 0)": "극솟값 (f' = 0, f'' > 0)",

    // widget string (assets/js/widgets-t5-1.js)
    "Non-stationary point of inflexion (turning point of f', f'' changes sign)": "비정류 변곡점 (f'의 극점, f'' 부호 변화)",

    // widget string (assets/js/widgets-t5-1.js)
    "Increasing (f' > 0)": "증가 (f' > 0)",

    // widget string (assets/js/widgets-t5-1.js)
    "Decreasing (f' < 0)": "감소 (f' < 0)",

    // widget string (assets/js/widgets-t5-1.js)
    "concave up (f'' > 0)": "아래로 볼록 (f'' > 0)",

    // widget string (assets/js/widgets-t5-1.js)
    "concave down (f'' < 0)": "위로 볼록 (f'' < 0)",

    // widget string (assets/js/widgets-t5-1.js)
    "Synchronized graphs of f(x), f'(x) and f''(x)": "동기화된 f(x), f'(x), f''(x) 그래프",

  }
});
