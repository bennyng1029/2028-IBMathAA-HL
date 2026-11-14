/* t5-2 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't5-2', {
  strings: {

    // page title (browser tab)
    "5.2 Integration, areas between curves and kinematics | Analysis Lab": "5.2 적분, 두 곡선 사이의 넓이와 운동학 | Analysis Lab",

    // Integration, areas between curves and kinematics > page header > p
    "Topic 5.2 · SL 5.5, 5.9–5.11": "Topic 5.2 · SL 5.5, 5.9–5.11",

    // Integration, areas between curves and kinematics > page header > h1
    "Integration, areas between curves and kinematics": "적분, 두 곡선 사이의 넓이와 운동학",

    // Integration, areas between curves and kinematics > page header > span
    "How does reversing differentiation let us reconstruct a function from its rate of change, measure exact areas between curves, and track the motion of a particle?": "미분을 거꾸로 하면 변화율로부터 원래 함수를 복원하고, 두 곡선 사이의 정확한 넓이를 구하며, 입자의 운동을 어떻게 추적할 수 있을까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > checklist > span
    "Integrate powers <span class=\"chem\">x^n</span> (<span class=\"chem\">n != -1</span>), <span class=\"chem\">1/x</span>, <span class=\"chem\">sin x</span>, <span class=\"chem\">cos x</span>, and <span class=\"chem\">e^x</span>, including linear composites <span class=\"chem\">f(ax + b)</span>, and find the constant of integration <span class=\"chem\">+C</span> from a boundary condition.": "거듭제곱 <span class=\"chem\">x^n</span> (<span class=\"chem\">n != -1</span>), <span class=\"chem\">1/x</span>, <span class=\"chem\">sin x</span>, <span class=\"chem\">cos x</span>, <span class=\"chem\">e^x</span> 및 일차 합성함수 <span class=\"chem\">f(ax + b)</span>를 적분하고, 경계 조건으로부터 적분상수 <span class=\"chem\">+C</span>를 구할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Recognize and evaluate integrals of the form <span class=\"chem\">int k g'(x) f(g(x)) dx</span> by inspection (reverse chain rule) or substitution.": "<span class=\"chem\">int k g'(x) f(g(x)) dx</span> 꼴의 적분을 직관(역연쇄법칙)이나 치환적분으로 알아보고 계산할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Evaluate definite integrals using the Fundamental Theorem of Calculus <span class=\"chem\">int_a^b f'(x) dx = f(b) - f(a)</span> and apply definite integral properties.": "미적분학의 기본정리 <span class=\"chem\">int_a^b f'(x) dx = f(b) - f(a)</span>로 정적분을 계산하고 정적분의 성질을 적용할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Find the area enclosed between a curve and the <span class=\"chem\">x</span>-axis (<span class=\"chem\">int_a^b |y| dx</span>) and the area enclosed between two curves (<span class=\"chem\">int_a^b (y_top - y_bottom) dx</span>).": "곡선과 <span class=\"chem\">x</span>축으로 둘러싸인 넓이(<span class=\"chem\">int_a^b |y| dx</span>)와 두 곡선 사이의 넓이(<span class=\"chem\">int_a^b (y_top - y_bottom) dx</span>)를 구할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Move between displacement <span class=\"chem\">s(t)</span>, velocity <span class=\"chem\">v(t) = s'(t)</span>, and acceleration <span class=\"chem\">a(t) = v'(t)</span>, and distinguish net displacement <span class=\"chem\">int_{t_1}^{t_2} v(t) dt</span> from total distance travelled <span class=\"chem\">int_{t_1}^{t_2} |v(t)| dt</span>.": "변위 <span class=\"chem\">s(t)</span>, 속도 <span class=\"chem\">v(t) = s'(t)</span>, 가속도 <span class=\"chem\">a(t) = v'(t)</span> 사이를 오가고, 알짜 변위 <span class=\"chem\">int_{t_1}^{t_2} v(t) dt</span>와 총 이동 거리 <span class=\"chem\">int_{t_1}^{t_2} |v(t)| dt</span>를 구분할 수 있어요.",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "문제 디코더: 어떤 적분 기법을 쓸지 바로 찾기",

    // Question decoder: spotting which technique to use > p
    "Integration and kinematics questions on IB exams rely on specific structural cues and motion words. Use this decoder to spot the right method immediately.": "IB 시험의 적분과 운동학 문제는 특정한 식 구조와 운동 표현에 달려 있어요. 아래 디코더로 알맞은 풀이법을 바로 찾아보세요.",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Integration, areas and kinematics": "문제 디코더 — 적분, 넓이와 운동학",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting which technique to use > table > th
    "Integrand has an inner function <span class=\"chem\">g(x)</span> multiplied by a constant multiple of <span class=\"chem\">g'(x)</span>": "피적분함수에 속함수 <span class=\"chem\">g(x)</span>와 <span class=\"chem\">g'(x)</span>의 상수배가 곱해져 있음",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Reverse chain rule (inspection) / <span class=\"chem\">u</span>-substitution:</strong><br>• <span class=\"chem\">int g'(x) [g(x)]^n dx = [g(x)]^{n+1} / (n + 1) + C</span><br>• <span class=\"chem\">int g'(x) e^{g(x)} dx = e^{g(x)} + C</span><br>• <span class=\"chem\">int (g'(x) / g(x)) dx = ln|g(x)| + C</span>": "<strong>역연쇄법칙 (직관) / <span class=\"chem\">u</span>-치환적분:</strong><br>• <span class=\"chem\">int g'(x) [g(x)]^n dx = [g(x)]^{n+1} / (n + 1) + C</span><br>• <span class=\"chem\">int g'(x) e^{g(x)} dx = e^{g(x)} + C</span><br>• <span class=\"chem\">int (g'(x) / g(x)) dx = ln|g(x)| + C</span>",

    // Question decoder: spotting which technique to use > table > td
    "Let <span class=\"chem\">u = g(x)</span>, so <span class=\"chem\">du = g'(x) dx</span>. For a definite integral on Paper 1, <strong>change the limits</strong> from <span class=\"chem\">x = a, b</span> to <span class=\"chem\">u = g(a), g(b)</span> so you never have to substitute back!": "<span class=\"chem\">u = g(x)</span>로 놓으면 <span class=\"chem\">du = g'(x) dx</span>예요. Paper 1 정적분에서는 <span class=\"chem\">x = a, b</span>를 <span class=\"chem\">u = g(a), g(b)</span>로 <strong>적분 구간을 바꾸면</strong> 다시 대입할 필요가 없어요!",

    // Question decoder: spotting which technique to use > table > th
    "“(a) Differentiate <span class=\"chem\">F(x)</span>. (b) Hence find <span class=\"chem\">int f(x) dx</span>.”": "“(a) <span class=\"chem\">F(x)</span>를 미분하시오. (b) 이를 이용하여 (Hence) <span class=\"chem\">int f(x) dx</span>를 구하시오.”",

    // Question decoder: spotting which technique to use > table > td
    "“Hence” means you <strong>must</strong> reverse your answer from part (a): if <span class=\"chem\">F'(x) = k f(x) + h(x)</span>, then <span class=\"chem\">int f(x) dx = (1/k)[F(x) - int h(x) dx] + C</span>.": "“Hence”는 <strong>반드시</strong> (a)의 결과를 거꾸로 쓰라는 뜻이에요: <span class=\"chem\">F'(x) = k f(x) + h(x)</span>이면 <span class=\"chem\">int f(x) dx = (1/k)[F(x) - int h(x) dx] + C</span>예요.",

    // Question decoder: spotting which technique to use > table > td
    "Write the integral of both sides of your part (a) equation immediately—never try to integrate <span class=\"chem\">f(x)</span> from scratch when “Hence” is used!": "“Hence”가 나오면 절대 <span class=\"chem\">f(x)</span>를 처음부터 적분하려 하지 말고, 즉시 (a) 식의 양변에 적분 기호를 씌우세요!",

    // Question decoder: spotting which technique to use > table > th
    "“Find the area of the region enclosed by <span class=\"chem\">y = f(x)</span> and the <span class=\"chem\">x</span>-axis”": "“<span class=\"chem\">y = f(x)</span>와 <span class=\"chem\">x</span>축으로 둘러싸인 영역의 넓이를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Geometric area is always positive: <span class=\"chem\">A = int_a^b |f(x)| dx</span>.": "기하학적 넓이는 항상 양수예요: <span class=\"chem\">A = int_a^b |f(x)| dx</span>.",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Find any <span class=\"chem\">x</span>-intercept <span class=\"chem\">c in (a, b)</span> where <span class=\"chem\">f(x) &lt; 0</span> and split: <span class=\"chem\">int_a^c f(x) dx - int_c^b f(x) dx</span>.<br><strong>Paper 2:</strong> Enter <span class=\"mono\">fnInt(abs(f(x)), x, a, b)</span> directly on GDC.": "<strong>Paper 1:</strong> <span class=\"chem\">f(x) &lt; 0</span>이 되는 <span class=\"chem\">x</span>절편 <span class=\"chem\">c in (a, b)</span>를 찾아 구간을 나누세요: <span class=\"chem\">int_a^c f(x) dx - int_c^b f(x) dx</span>.<br><strong>Paper 2:</strong> GDC에 바로 <span class=\"mono\">fnInt(abs(f(x)), x, a, b)</span>를 입력하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Initially” / “At the origin <span class=\"chem\">O</span>” / “Momentarily at rest / changes direction / maximum displacement”": "“초기에 (Initially)” / “원점 <span class=\"chem\">O</span>에서” / “순간적으로 정지 / 운동 방향을 바꿈 / 최대 변위”",

    // Question decoder: spotting which technique to use > table > td
    "• <strong>Initially:</strong> <span class=\"chem\">t = 0</span><br>• <strong>At the origin:</strong> <span class=\"chem\">s(t) = 0</span><br>• <strong>At rest / max displacement:</strong> <span class=\"chem\">v(t) = 0</span><br>• <strong>Changes direction:</strong> <span class=\"chem\">v(t) = 0</span> <em>and</em> <span class=\"chem\">v(t)</span> changes sign!": "• <strong>초기에:</strong> <span class=\"chem\">t = 0</span><br>• <strong>원점에서:</strong> <span class=\"chem\">s(t) = 0</span><br>• <strong>정지 / 최대 변위:</strong> <span class=\"chem\">v(t) = 0</span><br>• <strong>방향 전환:</strong> <span class=\"chem\">v(t) = 0</span><em>이면서 동시에</em> <span class=\"chem\">v(t)</span>의 부호가 바뀜!",

    // Question decoder: spotting which technique to use > table > td
    "For “maximum/minimum velocity” or “constant velocity”, set acceleration <span class=\"chem\">a(t) = v'(t) = 0</span>. For “maximum speed”, maximize <span class=\"chem\">|v(t)|</span> (check turning points and endpoints!).": "“최대/최소 속도”나 “등속도”에서는 가속도 <span class=\"chem\">a(t) = v'(t) = 0</span>으로 놓으세요. “최대 속력”에서는 <span class=\"chem\">|v(t)|</span>를 최대화하세요 (극점과 끝점을 모두 확인하세요!).",

    // Question decoder: spotting which technique to use > table > th
    "“Find the displacement vs total distance travelled from <span class=\"chem\">t = t_1</span> to <span class=\"chem\">t = t_2</span>”": "“<span class=\"chem\">t = t_1</span>에서 <span class=\"chem\">t = t_2</span>까지의 변위 vs 총 이동 거리를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "• <strong>Displacement:</strong> <span class=\"chem\">Delta s = s(t_2) - s(t_1) = int_{t_1}^{t_2} v(t) dt</span><br>• <strong>Total distance:</strong> <span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt</span>": "• <strong>변위:</strong> <span class=\"chem\">Delta s = s(t_2) - s(t_1) = int_{t_1}^{t_2} v(t) dt</span><br>• <strong>총 이동 거리:</strong> <span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt</span>",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Paper 1:</strong> Solve <span class=\"chem\">v(t) = 0</span> to find any turning time <span class=\"chem\">t^* in (t_1, t_2)</span> and sum the absolute integrals of each leg.<br><strong>Paper 2:</strong> Integrate <span class=\"chem\">|v(t)|</span> on your GDC in one step.": "<strong>Paper 1:</strong> <span class=\"chem\">v(t) = 0</span>을 풀어 방향 전환 시각 <span class=\"chem\">t^* in (t_1, t_2)</span>를 찾고 각 구간의 적분 절댓값을 더하세요.<br><strong>Paper 2:</strong> GDC에서 <span class=\"chem\">|v(t)|</span>를 한 번에 적분하세요.",

    // Indefinite integrals, standard forms and the reverse chain r > data-toc attribute
    "Antiderivatives & substitution": "부정적분과 치환적분",

    // Indefinite integrals, standard forms and the reverse chain r > h2
    "Indefinite integrals, standard forms and the reverse chain rule": "부정적분, 기본 적분 공식과 역연쇄법칙",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "Integration (anti-differentiation) reverses differentiation: if <span class=\"chem\">F'(x) = f(x)</span>, then the <dfn data-def=\"The family of all antiderivatives of f(x), written F(x) + C where F'(x) = f(x) and C is an arbitrary constant.\">indefinite integral</dfn> is <span class=\"chem\">int f(x) dx = F(x) + C</span>. Because any constant disappears when differentiated (<span class=\"chem\">d/dx (C) = 0</span>), you must always include <span class=\"chem\">+ C</span> on an indefinite integral. If the question gives one point <span class=\"chem\">(x_0, y_0)</span> on the curve (a <strong>boundary condition</strong> or <strong>initial condition</strong>), substitute <span class=\"chem\">x = x_0</span> and <span class=\"chem\">y = y_0</span> to find the exact value of <span class=\"chem\">C</span>.": "적분(역미분)은 미분을 거꾸로 하는 연산이에요: <span class=\"chem\">F'(x) = f(x)</span>이면 <dfn data-def=\"The family of all antiderivatives of f(x), written F(x) + C where F'(x) = f(x) and C is an arbitrary constant.\">부정적분 <span class=\"en-term\">(indefinite integral)</span></dfn>은 <span class=\"chem\">int f(x) dx = F(x) + C</span>예요. 어떤 상수든 미분하면 사라지므로 (<span class=\"chem\">d/dx (C) = 0</span>) 부정적분에는 항상 <span class=\"chem\">+ C</span>를 붙여야 해요. 문제에서 곡선 위의 한 점 <span class=\"chem\">(x_0, y_0)</span> (<strong>경계 조건</strong> 또는 <strong>초기 조건</strong>)를 주면 <span class=\"chem\">x = x_0</span>, <span class=\"chem\">y = y_0</span>을 대입해 <span class=\"chem\">C</span>의 정확한 값을 구할 수 있어요.",

    // Indefinite integrals, standard forms and the reverse chain r > data-def attribute
    "The family of all antiderivatives of f(x), written F(x) + C where F'(x) = f(x) and C is an arbitrary constant.": "F'(x) = f(x)를 만족하는 모든 원시함수의 모임으로, 임의의 상수 C를 붙여 F(x) + C로 나타냄.",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > p
    "<strong>In your formula booklet (SL 5.5):</strong> Standard integrals given in the booklet:": "<strong>공식집에 수록 (SL 5.5):</strong> 공식집에 제공되는 기본 적분 공식:",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int x^n dx = x^{n+1} / (n + 1) + C</span> (<span class=\"chem\">n != -1</span>)": "<span class=\"chem\">int x^n dx = x^{n+1} / (n + 1) + C</span> (<span class=\"chem\">n != -1</span>)",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int (1/x) dx = ln|x| + C</span>": "<span class=\"chem\">int (1/x) dx = ln|x| + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int sin x dx = -cos x + C</span> and <span class=\"chem\">int cos x dx = sin x + C</span>": "<span class=\"chem\">int sin x dx = -cos x + C</span> 그리고 <span class=\"chem\">int cos x dx = sin x + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > formula booklet note > li
    "<span class=\"chem\">int e^x dx = e^x + C</span>": "<span class=\"chem\">int e^x dx = e^x + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > h3
    "Composites with a linear inner function <span class=\"chem\">(ax + b)</span>": "일차 속함수 <span class=\"chem\">(ax + b)</span>와의 합성함수 적분",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "When differentiating <span class=\"chem\">F(ax + b)</span>, the chain rule multiplies by the constant <span class=\"chem\">a</span>. Therefore, when integrating <span class=\"chem\">f(ax + b)</span>, you reverse that step by <strong>dividing by <span class=\"chem\">a</span></strong> (multiplying by <span class=\"chem\">1/a</span>):": "<span class=\"chem\">F(ax + b)</span>를 미분할 때는 연쇄법칙에 의해 상수 <span class=\"chem\">a</span>를 곱해요. 따라서 <span class=\"chem\">f(ax + b)</span>를 적분할 때는 그 과정을 거꾸로 하여 <strong><span class=\"chem\">a</span>로 나누어</strong> (<span class=\"chem\">1/a</span>을 곱해) 주어야 해요:",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int (ax + b)^n dx = (ax + b)^{n+1} / [a(n + 1)] + C</span> (<span class=\"chem\">n != -1</span>)": "<span class=\"chem\">int (ax + b)^n dx = (ax + b)^{n+1} / [a(n + 1)] + C</span> (<span class=\"chem\">n != -1</span>)",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int (1 / (ax + b)) dx = (1/a) ln|ax + b| + C</span>": "<span class=\"chem\">int (1 / (ax + b)) dx = (1/a) ln|ax + b| + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int e^{ax+b} dx = (1/a) e^{ax+b} + C</span>": "<span class=\"chem\">int e^{ax+b} dx = (1/a) e^{ax+b} + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<span class=\"chem\">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span> and <span class=\"chem\">int cos(ax + b) dx = (1/a) sin(ax + b) + C</span>": "<span class=\"chem\">int sin(ax + b) dx = -(1/a) cos(ax + b) + C</span> 그리고 <span class=\"chem\">int cos(ax + b) dx = (1/a) sin(ax + b) + C</span>",

    // Indefinite integrals, standard forms and the reverse chain r > common mistake > p
    "<strong>Common mistake — Dividing by a non-linear derivative:</strong> The “divide by <span class=\"chem\">a</span>” shortcut works <strong>only when the inside function is linear</strong> (<span class=\"chem\">ax + b</span>, whose derivative <span class=\"chem\">a</span> is a constant). You can <em>never</em> integrate <span class=\"chem\">int e^{x^2} dx</span> as <span class=\"chem\">e^{x^2} / (2x)</span>! If the inside function is non-linear (like <span class=\"chem\">x^2</span> or <span class=\"chem\">sin x</span>), its derivative <span class=\"chem\">g'(x)</span> must already be multiplying the integrand outside.": "<strong>흔한 실수 — 일차가 아닌 도함수로 나누기:</strong> “<span class=\"chem\">a</span>로 나누기” 지름길은 <strong>속함수가 일차식일 때만</strong> (<span class=\"chem\">ax + b</span>의 도함수 <span class=\"chem\">a</span>가 상수일 때만) 성립해요. <span class=\"chem\">int e^{x^2} dx</span>를 절대로 <span class=\"chem\">e^{x^2} / (2x)</span>로 적분할 수 <em>없어요</em>! 속함수가 <span class=\"chem\">x^2</span>이나 <span class=\"chem\">sin x</span>처럼 일차가 아니면, 그 도함수 <span class=\"chem\">g'(x)</span>가 피적분함수 밖에 이미 곱해져 있어야 해요.",

    // Indefinite integrals, standard forms and the reverse chain r > h3
    "Integration by inspection (reverse chain rule) and <span class=\"chem\">u</span>-substitution": "직관 적분(역연쇄법칙)과 <span class=\"chem\">u</span>-치환적분",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "Whenever an integrand contains a composite function <span class=\"chem\">f(g(x))</span> multiplied by a constant multiple of the inner derivative <span class=\"chem\">g'(x)</span>, set <span class=\"chem\">u = g(x)</span> so that <span class=\"chem\">du = g'(x) dx</span>:": "피적분함수에 합성함수 <span class=\"chem\">f(g(x))</span>와 속함수의 도함수 <span class=\"chem\">g'(x)</span>의 상수배가 곱해져 있을 때는 <span class=\"chem\">u = g(x)</span>로 놓아 <span class=\"chem\">du = g'(x) dx</span>를 만드세요:",

    // Indefinite integrals, standard forms and the reverse chain r > equation > dd
    "inner function (inside a power, root, exponent, denominator, or trig function)": "속함수 (거듭제곱, 근호, 지수, 분모 또는 삼각함수 안쪽)",

    // Indefinite integrals, standard forms and the reverse chain r > equation > dt
    "du = g'(x) dx": "du = g'(x) dx",

    // Indefinite integrals, standard forms and the reverse chain r > equation > dd
    "differential that absorbs the outside factor g'(x) dx": "바깥의 인수 g'(x) dx를 흡수하는 미분소",

    // Indefinite integrals, standard forms and the reverse chain r > p
    "Three reverse-chain-rule patterns appear constantly on Paper 1:": "Paper 1에는 다음 세 가지 역연쇄법칙 패턴이 계속 출제돼요:",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<strong>Power / root pattern:</strong> <span class=\"chem\">int 6x (3x^2 + 1)^4 dx</span>. Since <span class=\"chem\">d/dx (3x^2 + 1) = 6x</span>, this is <span class=\"chem\">int u^4 du = (3x^2 + 1)^5 / 5 + C</span>.": "<strong>거듭제곱 / 근호 패턴:</strong> <span class=\"chem\">int 6x (3x^2 + 1)^4 dx</span>. <span class=\"chem\">d/dx (3x^2 + 1) = 6x</span>이므로 <span class=\"chem\">int u^4 du = (3x^2 + 1)^5 / 5 + C</span>예요.",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<strong>Exponential pattern:</strong> <span class=\"chem\">int x e^{x^2} dx</span>. Since <span class=\"chem\">d/dx (x^2) = 2x</span>, adjust by <span class=\"chem\">1/2</span>: <span class=\"chem\">(1/2) int 2x e^{x^2} dx = (1/2) e^{x^2} + C</span>.": "<strong>지수함수 패턴:</strong> <span class=\"chem\">int x e^{x^2} dx</span>. <span class=\"chem\">d/dx (x^2) = 2x</span>이므로 <span class=\"chem\">1/2</span>을 맞추면 <span class=\"chem\">(1/2) int 2x e^{x^2} dx = (1/2) e^{x^2} + C</span>예요.",

    // Indefinite integrals, standard forms and the reverse chain r > li
    "<strong>Logarithmic fraction pattern (<span class=\"chem\">g'(x) / g(x)</span>):</strong> Whenever the numerator of a fraction is a constant multiple of the derivative of the denominator, the integral is a natural logarithm! For example, <span class=\"chem\">int (cos x / (2 + sin x)) dx = ln|2 + sin x| + C</span>, and <span class=\"chem\">int (x / (x^2 + 4)) dx = (1/2) ln(x^2 + 4) + C</span>.": "<strong>로그 분수 패턴 (<span class=\"chem\">g'(x) / g(x)</span>):</strong> 분수가 분모의 도함수의 상수배를 분자로 가지면 적분 결과는 자연로그예요! 예: <span class=\"chem\">int (cos x / (2 + sin x)) dx = ln|2 + sin x| + C</span>, <span class=\"chem\">int (x / (x^2 + 4)) dx = (1/2) ln(x^2 + 4) + C</span>.",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > h3
    "Finding a function from its gradient and a boundary condition": "기울기와 경계 조건으로 원래 함수 구하기",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "The gradient of a curve <span class=\"chem\">y = f(x)</span> at any point <span class=\"chem\">(x, y)</span> is given by <span class=\"chem\">f'(x) = (6x) / (x^2 + 3) + 4 e^{-2x}</span>. Given that the curve passes through the point <span class=\"chem\">(0, 3 ln 3)</span>, find an expression for <span class=\"chem\">f(x)</span>. <strong>[6 marks]</strong>": "곡선 <span class=\"chem\">y = f(x)</span> 위의 임의의 점 <span class=\"chem\">(x, y)</span>에서의 기울기가 <span class=\"chem\">f'(x) = (6x) / (x^2 + 3) + 4 e^{-2x}</span>이다. 이 곡선이 점 <span class=\"chem\">(0, 3 ln 3)</span>을 지날 때, <span class=\"chem\">f(x)</span>의 식을 구하시오 (Find). <strong>[6 marks]</strong>",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > data-title attribute
    "Spot the g'(x)/g(x) pattern on the first term and linear exponential on the second": "첫째 항에서 g'(x)/g(x) 패턴을, 둘째 항에서 일차 지수함수 찾기",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "For 6x / (x² + 3), the derivative of the denominator x² + 3 is 2x, so 6x = 3(2x). For 4e⁻²ˣ, the linear coefficient is a = −2.": "6x / (x² + 3)에서 분모 x² + 3의 도함수는 2x이므로 6x = 3(2x)예요. 4e⁻²ˣ에서 일차 계수는 a = −2예요.",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > data-title attribute
    "Substitute the boundary condition (0, 3 ln 3) to solve for C": "경계 조건 (0, 3 ln 3)을 대입해 C 구하기",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "Remember that e⁰ = 1 (never 0!), so substituting x = 0 does not make the exponential term vanish.": "e⁰ = 1 (절대 0이 아니에요!)임을 기억하세요. 따라서 x = 0을 대입해도 지수 항이 사라지지 않아요.",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > data-title attribute
    "Write the complete equation for f(x)": "f(x)의 완성된 식 적기",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "Substitute C = 2 back into f(x).": "C = 2를 f(x)에 다시 대입하세요.",

    // Indefinite integrals, standard forms and the reverse chain r > worked example > p
    "<span class=\"chem\">f(x) = 3 ln(x^2 + 3) - 2e^{-2x} + 2</span>": "<span class=\"chem\">f(x) = 3 ln(x^2 + 3) - 2e^{-2x} + 2</span>",

    // Indefinite integrals, standard forms and the reverse chain r > try it > p
    "A curve satisfies <span class=\"chem\">f'(x) = 6x (x^2 - 1)^2</span> and passes through the point <span class=\"chem\">(1, 14)</span>. Calculate the value of the <span class=\"chem\">y</span>-intercept <span class=\"chem\">f(0)</span>.": "어떤 곡선이 <span class=\"chem\">f'(x) = 6x (x^2 - 1)^2</span>을 만족하고 점 <span class=\"chem\">(1, 14)</span>를 지나요. <span class=\"chem\">y</span>절편 <span class=\"chem\">f(0)</span>의 값을 계산하시오 (Calculate).",

    // Indefinite integrals, standard forms and the reverse chain r > try it > li
    "Let <span class=\"chem\">u = x^2 - 1</span> so <span class=\"chem\">du = 2x dx</span>. Then <span class=\"chem\">f(x) = int 3(2x)(x^2 - 1)^2 dx = (x^2 - 1)^3 + C</span>.": "<span class=\"chem\">u = x^2 - 1</span>로 놓으면 <span class=\"chem\">du = 2x dx</span>예요. 그러면 <span class=\"chem\">f(x) = int 3(2x)(x^2 - 1)^2 dx = (x^2 - 1)^3 + C</span>예요.",

    // Indefinite integrals, standard forms and the reverse chain r > try it > li
    "Use <span class=\"chem\">f(1) = (1^2 - 1)^3 + C = 14</span> to find <span class=\"chem\">C = 14</span>, then evaluate <span class=\"chem\">f(0) = (0 - 1)^3 + 14</span>.": "<span class=\"chem\">f(1) = (1^2 - 1)^3 + C = 14</span>에서 <span class=\"chem\">C = 14</span>를 구한 뒤 <span class=\"chem\">f(0) = (0 - 1)^3 + 14</span>를 계산하세요.",

    // Definite integrals, signed integrals vs geometric area, and  > data-toc attribute
    "Definite integrals & areas": "정적분과 넓이",

    // Definite integrals, signed integrals vs geometric area, and  > h2
    "Definite integrals, signed integrals vs geometric area, and area between curves": "정적분, 부호 있는 적분 vs 기하학적 넓이, 그리고 두 곡선 사이의 넓이",

    // Definite integrals, signed integrals vs geometric area, and  > p
    "By the <dfn data-def=\"If F'(x) = f(x) on [a, b], then the definite integral of f(x) from x = a to x = b equals F(b) - F(a).\">Fundamental Theorem of Calculus</dfn>, if <span class=\"chem\">F(x)</span> is any antiderivative of <span class=\"chem\">f(x)</span>, then:": "<dfn data-def=\"If F'(x) = f(x) on [a, b], then the definite integral of f(x) from x = a to x = b equals F(b) - F(a).\">미적분학의 기본정리 <span class=\"en-term\">(Fundamental Theorem of Calculus)</span></dfn>에 의해, <span class=\"chem\">F(x)</span>가 <span class=\"chem\">f(x)</span>의 임의의 부정적분(원시함수)일 때 다음이 성립해요:",

    // Definite integrals, signed integrals vs geometric area, and  > data-def attribute
    "If F'(x) = f(x) on [a, b], then the definite integral of f(x) from x = a to x = b equals F(b) - F(a).": "[a, b]에서 F'(x) = f(x)이면 x = a에서 x = b까지 f(x)의 정적분은 F(b) - F(a)와 같음.",

    // Definite integrals, signed integrals vs geometric area, and  > equation > dd
    "lower and upper limits of integration": "적분의 아래끝과 위끝",

    // Definite integrals, signed integrals vs geometric area, and  > equation > dd
    "any antiderivative satisfying <i>F'</i>(<i>x</i>) = <i>f</i>(<i>x</i>) (the +<i>C</i> cancels in <i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>))": "<i>F'</i>(<i>x</i>) = <i>f</i>(<i>x</i>)를 만족하는 임의의 원시함수 (+<i>C</i>는 <i>F</i>(<i>b</i>) − <i>F</i>(<i>a</i>)에서 소거됨)",

    // Definite integrals, signed integrals vs geometric area, and  > h3
    "Key properties of definite integrals": "정적분의 핵심 성질",

    // Definite integrals, signed integrals vs geometric area, and  > p
    "Paper 1 frequently tests whether you can manipulate definite integrals without knowing the formula for <span class=\"chem\">f(x)</span>:": "Paper 1에서는 <span class=\"chem\">f(x)</span>의 식을 모르는 상태에서 정적분의 성질을 다룰 수 있는지 자주 물어요:",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Reversing limits flips the sign:</strong> <span class=\"chem\">int_b^a f(x) dx = - int_a^b f(x) dx</span>, and <span class=\"chem\">int_a^a f(x) dx = 0</span>.": "<strong>아래끝과 위끝을 바꾸면 부호가 바뀜:</strong> <span class=\"chem\">int_b^a f(x) dx = - int_a^b f(x) dx</span>, 그리고 <span class=\"chem\">int_a^a f(x) dx = 0</span>.",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Linearity:</strong> <span class=\"chem\">int_a^b [k f(x) + c] dx = k int_a^b f(x) dx + c(b - a)</span>. <em>(Watch out for the constant <span class=\"chem\">c</span>: integrating a constant <span class=\"chem\">c</span> from <span class=\"chem\">a</span> to <span class=\"chem\">b</span> gives <span class=\"chem\">c(b - a)</span>, not just <span class=\"chem\">c</span>!)</em>": "<strong>선형성:</strong> <span class=\"chem\">int_a^b [k f(x) + c] dx = k int_a^b f(x) dx + c(b - a)</span>. <em>(상수 <span class=\"chem\">c</span>에 주의하세요: <span class=\"chem\">a</span>에서 <span class=\"chem\">b</span>까지 상수 <span class=\"chem\">c</span>를 적분하면 그냥 <span class=\"chem\">c</span>가 아니라 <span class=\"chem\">c(b - a)</span>가 돼요!)</em>",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Additivity over adjacent intervals:</strong> <span class=\"chem\">int_a^b f(x) dx + int_b^c f(x) dx = int_a^c f(x) dx</span>.": "<strong>인접 구간의 덧셈 성질:</strong> <span class=\"chem\">int_a^b f(x) dx + int_b^c f(x) dx = int_a^c f(x) dx</span>.",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Horizontal shift:</strong> <span class=\"chem\">int_a^b f(x - k) dx = int_{a-k}^{b-k} f(u) du</span> (shifting the curve right by <span class=\"chem\">k</span> shifts the limits right by <span class=\"chem\">k</span>).": "<strong>수평 평행이동:</strong> <span class=\"chem\">int_a^b f(x - k) dx = int_{a-k}^{b-k} f(u) du</span> (곡선을 오른쪽으로 <span class=\"chem\">k</span>만큼 옮기면 적분 구간도 오른쪽으로 <span class=\"chem\">k</span>만큼 이동해요).",

    // Definite integrals, signed integrals vs geometric area, and  > h3
    "Signed definite integral vs enclosed geometric area": "부호 있는 정적분 vs 둘러싸인 기하학적 넓이",

    // Definite integrals, signed integrals vs geometric area, and  > p
    "A definite integral <span class=\"chem\">int_a^b f(x) dx</span> is a <strong>signed</strong> sum: regions where <span class=\"chem\">f(x) &gt; 0</span> (above the <span class=\"chem\">x</span>-axis) contribute positively, while regions where <span class=\"chem\">f(x) &lt; 0</span> (below the <span class=\"chem\">x</span>-axis) contribute <strong>negatively</strong>. In contrast, the <strong>geometric area</strong> enclosed by a curve and the <span class=\"chem\">x</span>-axis is always positive:": "정적분 <span class=\"chem\">int_a^b f(x) dx</span>는 <strong>부호가 있는</strong> 합이에요: <span class=\"chem\">f(x) &gt; 0</span> (<span class=\"chem\">x</span>축 위)인 부분은 양수로, <span class=\"chem\">f(x) &lt; 0</span> (<span class=\"chem\">x</span>축 아래)인 부분은 <strong>음수</strong>로 더해져요. 반면에 곡선과 <span class=\"chem\">x</span>축으로 둘러싸인 <strong>기하학적 넓이</strong>는 항상 양수예요:",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Area between <span class=\"chem\">y = f(x)</span> and the <span class=\"chem\">x</span>-axis on <span class=\"chem\">[a, b]</span>:</strong> <span class=\"chem\">A = int_a^b |f(x)| dx</span>. If <span class=\"chem\">f(x)</span> crosses the <span class=\"chem\">x</span>-axis at <span class=\"chem\">x = c</span> with <span class=\"chem\">f(x) &gt;= 0</span> on <span class=\"chem\">[a, c]</span> and <span class=\"chem\">f(x) &lt;= 0</span> on <span class=\"chem\">[c, b]</span>, split the integral at <span class=\"chem\">c</span>: <span class=\"chem\">A = int_a^c f(x) dx - int_c^b f(x) dx</span>.": "<strong><span class=\"chem\">[a, b]</span>에서 <span class=\"chem\">y = f(x)</span>와 <span class=\"chem\">x</span>축 사이의 넓이:</strong> <span class=\"chem\">A = int_a^b |f(x)| dx</span>. <span class=\"chem\">f(x)</span>가 <span class=\"chem\">x = c</span>에서 <span class=\"chem\">x</span>축을 지나고 <span class=\"chem\">[a, c]</span>에서 <span class=\"chem\">f(x) &gt;= 0</span>, <span class=\"chem\">[c, b]</span>에서 <span class=\"chem\">f(x) &lt;= 0</span>이면 <span class=\"chem\">c</span>에서 적분을 나누세요: <span class=\"chem\">A = int_a^c f(x) dx - int_c^b f(x) dx</span>.",

    // Definite integrals, signed integrals vs geometric area, and  > li
    "<strong>Area enclosed between two curves <span class=\"chem\">y = f(x)</span> and <span class=\"chem\">y = g(x)</span>:</strong> First solve <span class=\"chem\">f(x) = g(x)</span> to find the intersection <span class=\"chem\">x</span>-coordinates <span class=\"chem\">a</span> and <span class=\"chem\">b</span>. Then integrate the upper curve minus the lower curve: <span class=\"chem\">A = int_a^b (y_top - y_bottom) dx = int_a^b |f(x) - g(x)| dx</span>. Because <span class=\"chem\">y_top - y_bottom &gt;= 0</span>, this formula automatically gives the right positive area even when one or both curves dip below the <span class=\"chem\">x</span>-axis!": "<strong>두 곡선 <span class=\"chem\">y = f(x)</span>와 <span class=\"chem\">y = g(x)</span>로 둘러싸인 넓이:</strong> 먼저 <span class=\"chem\">f(x) = g(x)</span>를 풀어 교점의 <span class=\"chem\">x</span>좌표 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>를 찾으세요. 그런 다음 위쪽 곡선에서 아래쪽 곡선을 빼서 적분하세요: <span class=\"chem\">A = int_a^b (y_top - y_bottom) dx = int_a^b |f(x) - g(x)| dx</span>. <span class=\"chem\">y_top - y_bottom &gt;= 0</span>이므로 한쪽 또는 두 곡선이 모두 <span class=\"chem\">x</span>축 아래로 내려가도 자동으로 올바른 양수 넓이가 나와요!",

    // Definite integrals, signed integrals vs geometric area, and  > not needed for IB > p
    "<strong>Not needed for IB (Scope boundary):</strong> Numerical approximation of definite integrals using the <strong>trapezoidal rule</strong> (or Simpson's rule) belongs to <strong>IB Math AI</strong>, <strong>not</strong> IB Math AA! In Math AA, definite integrals are evaluated either analytically on Paper 1 or directly via your GDC's <span class=\"mono\">fnInt</span> (<span class=\"chem\">int</span>) command on Paper 2.": "<strong>IB 시험 범위 외 내용:</strong> <strong>사다리꼴 공식</strong>(또는 심프슨 공식)을 이용한 정적분의 수치 근사는 <strong>IB Math AI</strong> 범위이지 IB Math AA 범위가 <strong>아니에요</strong>! Math AA에서는 정적분을 Paper 1에서 해석적으로 계산하거나 Paper 2에서 GDC의 <span class=\"mono\">fnInt</span> (<span class=\"chem\">int</span>) 기능으로 바로 구해요.",

    // Definite integrals, signed integrals vs geometric area, and  > widget > data-title attribute
    "Signed integral, enclosed area and area between curves explorer": "부호 있는 적분, 둘러싸인 넓이 및 두 곡선 사이의 넓이 탐색기",

    // Definite integrals, signed integrals vs geometric area, and  > widget > figcaption
    "Adjust the integration bounds <span class=\"chem\">a</span> and <span class=\"chem\">b</span> and switch modes to see why negative lobes cancel in the signed integral <span class=\"chem\">int_a^b f(x) dx</span> but add positively in the enclosed geometric area <span class=\"chem\">int_a^b |f(x)| dx</span>.": "적분 구간 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>를 조절하고 모드를 전환해 보세요. 부호 있는 적분 <span class=\"chem\">int_a^b f(x) dx</span>에서는 음수 영역이 상쇄되지만 둘러싸인 기하학적 넓이 <span class=\"chem\">int_a^b |f(x)| dx</span>에서는 양수로 더해지는 이유를 확인할 수 있어요.",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > h3
    "Finding the exact area enclosed between a parabola and a line": "포물선과 직선으로 둘러싸인 정확한 넓이 구하기",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "Find the exact area of the finite region enclosed by the parabola <span class=\"chem\">y = 6 - x^2</span> and the line <span class=\"chem\">y = x + 4</span>. <strong>[6 marks]</strong>": "포물선 <span class=\"chem\">y = 6 - x^2</span>과 직선 <span class=\"chem\">y = x + 4</span>로 둘러싸인 유한 영역의 정확한 넓이를 구하시오 (Find). <strong>[6 marks]</strong>",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > data-title attribute
    "Equate the two functions to find the x-coordinates of intersection": "두 함수를 같다고 놓아 교점의 x좌표 구하기",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "The limits of integration a and b are the x-values where the two curves cross.": "적분 구간 a와 b는 두 곡선이 만나는 x값이에요.",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > maths line
    "<i>x</i> = −2 and <i>x</i> = 1 <b>[A1]</b>": "<i>x</i> = −2 그리고 <i>x</i> = 1 <b>[A1]</b>",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > data-title attribute
    "Identify the upper curve y_top and set up ∫ (y_top − y_bottom) dx": "위쪽 곡선 y_top을 찾고 ∫ (y_top − y_bottom) dx 세우기",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "At x = 0 ∈ (−2, 1), the parabola has y = 6 while the line has y = 4, so the parabola is on top.": "x = 0 ∈ (−2, 1)에서 포물선은 y = 6, 직선은 y = 4이므로 포물선이 위쪽에 있어요.",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > data-title attribute
    "Integrate term by term and evaluate F(1) − F(−2)": "항별로 적분하고 F(1) − F(−2) 계산하기",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "Use brackets around F(−2) to avoid sign errors with negative powers.": "음수 거듭제곱의 부호 실수를 피하려면 F(−2) 주위에 괄호를 치세요.",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > maths line
    "<i>A</i> = <span class=\"frac\"><span>7</span><span>6</span></span> − <big>(</big>−<span class=\"frac\"><span>10</span><span>3</span></span><big>)</big> = <span class=\"frac\"><span>27</span><span>6</span></span> = <b><span class=\"frac\"><span>9</span><span>2</span></span></b> (or 4.5) <b>[A1]</b>": "<i>A</i> = <span class=\"frac\"><span>7</span><span>6</span></span> − <big>(</big>−<span class=\"frac\"><span>10</span><span>3</span></span><big>)</big> = <span class=\"frac\"><span>27</span><span>6</span></span> = <b><span class=\"frac\"><span>9</span><span>2</span></span></b> (또는 4.5) <b>[A1]</b>",

    // Definite integrals, signed integrals vs geometric area, and  > worked example > p
    "<span class=\"chem\">9/2</span> (or <span class=\"chem\">4.5</span>)": "<span class=\"chem\">9/2</span> (또는 <span class=\"chem\">4.5</span>)",

    // Definite integrals, signed integrals vs geometric area, and  > try it > p
    "Given that <span class=\"chem\">int_1^4 f(x) dx = 5</span>, calculate the value of <span class=\"chem\">int_1^4 (2 f(x) + 1) dx + int_4^1 f(x) dx</span>.": "<span class=\"chem\">int_1^4 f(x) dx = 5</span>일 때, <span class=\"chem\">int_1^4 (2 f(x) + 1) dx + int_4^1 f(x) dx</span>의 값을 계산하시오 (Calculate).",

    // Definite integrals, signed integrals vs geometric area, and  > try it > li
    "Split the first integral using linearity: <span class=\"chem\">2 int_1^4 f(x) dx + int_1^4 1 dx</span>. Remember that <span class=\"chem\">int_1^4 1 dx = 1(4 - 1) = 3</span>!": "선형성을 이용해 첫 번째 적분을 나누세요: <span class=\"chem\">2 int_1^4 f(x) dx + int_1^4 1 dx</span>. <span class=\"chem\">int_1^4 1 dx = 1(4 - 1) = 3</span>임을 잊지 마세요!",

    // Definite integrals, signed integrals vs geometric area, and  > try it > li
    "For the second term, reversing the limits flips the sign: <span class=\"chem\">int_4^1 f(x) dx = -int_1^4 f(x) dx = -5</span>.": "두 번째 항은 아래끝과 위끝을 바꾸면 부호가 바뀝니다: <span class=\"chem\">int_4^1 f(x) dx = -int_1^4 f(x) dx = -5</span>.",

    // Kinematics: displacement, velocity, acceleration and total d > data-toc attribute
    "Kinematics": "운동학",

    // Kinematics: displacement, velocity, acceleration and total d > h2
    "Kinematics: displacement, velocity, acceleration and total distance": "운동학: 변위, 속도, 가속도와 총 이동 거리",

    // Kinematics: displacement, velocity, acceleration and total d > p
    "In one-dimensional kinematics, a particle moves along a straight line (usually the <span class=\"chem\">x</span>-axis or <span class=\"chem\">s</span>-axis) with position or <dfn data-def=\"The signed position s(t) of a particle relative to an origin O along a straight line.\">displacement</dfn> <span class=\"chem\">s(t)</span> relative to an origin <span class=\"chem\">O</span> at time <span class=\"chem\">t &gt;= 0</span>. Differentiation moves forward from position to velocity to acceleration, while integration moves backward:": "일차원 운동학에서 입자는 시각 <span class=\"chem\">t &gt;= 0</span>에 원점 <span class=\"chem\">O</span>에 대한 위치 또는 <dfn data-def=\"The signed position s(t) of a particle relative to an origin O along a straight line.\">변위 <span class=\"en-term\">(displacement)</span></dfn> <span class=\"chem\">s(t)</span>를 가지고 직선(보통 <span class=\"chem\">x</span>축 또는 <span class=\"chem\">s</span>축) 위를 움직여요. 미분은 위치 → 속도 → 가속도로 나아가고, 적분은 그 반대로 거슬러 올라가요:",

    // Kinematics: displacement, velocity, acceleration and total d > data-def attribute
    "The signed position s(t) of a particle relative to an origin O along a straight line.": "직선 위에서 원점 O에 대한 입자의 부호 있는 위치 s(t).",

    // Kinematics: displacement, velocity, acceleration and total d > equation > maths line
    "<i>s</i>(<i>t</i>) &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>v</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>s</i></span><span>d<i>t</i></span></span> &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>a</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>v</i></span><span>d<i>t</i></span></span> = <span class=\"frac\"><span>d<sup>2</sup><i>s</i></span><span>d<i>t</i><sup>2</sup></span></span>": "<i>s</i>(<i>t</i>) &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>v</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>s</i></span><span>d<i>t</i></span></span> &nbsp; <span class=\"chem\">-- d/dt --&gt;</span> &nbsp; <i>a</i>(<i>t</i>) = <span class=\"frac\"><span>d<i>v</i></span><span>d<i>t</i></span></span> = <span class=\"frac\"><span>d<sup>2</sup><i>s</i></span><span>d<i>t</i><sup>2</sup></span></span>",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dt
    "v(t) = ∫ a(t) dt": "v(t) = ∫ a(t) dt",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dd
    "velocity (signed rate of change of displacement; speed is |<i>v</i>(<i>t</i>)|)": "속도 (변위의 부호 있는 변화율; 속력은 |<i>v</i>(<i>t</i>)|)",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dt
    "Δs = ∫<sub>t₁</sub><sup>t₂</sup> v(t) dt": "Δs = ∫<sub>t₁</sub><sup>t₂</sup> v(t) dt",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dd
    "net displacement <i>s</i>(<i>t</i><sub>2</sub>) − <i>s</i>(<i>t</i><sub>1</sub>) over [<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>]": "[<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>] 동안의 알짜 변위 <i>s</i>(<i>t</i><sub>2</sub>) − <i>s</i>(<i>t</i><sub>1</sub>)",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dt
    "d = ∫<sub>t₁</sub><sup>t₂</sup> |v(t)| dt": "d = ∫<sub>t₁</sub><sup>t₂</sup> |v(t)| dt",

    // Kinematics: displacement, velocity, acceleration and total d > equation > dd
    "total distance travelled over [<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>]": "[<i>t</i><sub>1</sub>, <i>t</i><sub>2</sub>] 동안의 총 이동 거리",

    // Kinematics: displacement, velocity, acceleration and total d > h3
    "Displacement vs total distance travelled": "변위 vs 총 이동 거리",

    // Kinematics: displacement, velocity, acceleration and total d > p
    "Suppose a runner starts at the origin <span class=\"chem\">O</span>, runs <span class=\"chem\">10</span> <span class=\"unit\">m</span> East (<span class=\"chem\">+10</span>), turns around, and runs <span class=\"chem\">4</span> <span class=\"unit\">m</span> West (<span class=\"chem\">-4</span>):": "어떤 달리기 선수가 원점 <span class=\"chem\">O</span>에서 출발해 동쪽으로 <span class=\"chem\">10</span> <span class=\"unit\">m</span> (<span class=\"chem\">+10</span>) 달린 뒤 돌아서서 서쪽으로 <span class=\"chem\">4</span> <span class=\"unit\">m</span> (<span class=\"chem\">-4</span>) 달렸다고 하자:",

    // Kinematics: displacement, velocity, acceleration and total d > li
    "Their <strong>net displacement</strong> is <span class=\"chem\">Delta s = int_{t_1}^{t_2} v(t) dt = +10 - 4 = +6</span> <span class=\"unit\">m</span> (how far they end up from where they started).": "<strong>알짜 변위</strong>는 <span class=\"chem\">Delta s = int_{t_1}^{t_2} v(t) dt = +10 - 4 = +6</span> <span class=\"unit\">m</span>예요 (출발점에서 최종 위치까지의 위치 변화).",

    // Kinematics: displacement, velocity, acceleration and total d > li
    "Their <strong>total distance travelled</strong> is <span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt = 10 + |-4| = 14</span> <span class=\"unit\">m</span> (what a pedometer on their shoe records).": "<strong>총 이동 거리</strong>는 <span class=\"chem\">d = int_{t_1}^{t_2} |v(t)| dt = 10 + |-4| = 14</span> <span class=\"unit\">m</span>예요 (신발의 만보계가 기록하는 실제 움직인 거리).",

    // Kinematics: displacement, velocity, acceleration and total d > common mistake > p
    "<strong>Two classic kinematics traps to avoid:</strong><br> 1. <strong>Forgetting to check <span class=\"chem\">v(t) = 0</span> when finding total distance on Paper 1:</strong> Before integrating <span class=\"chem\">v(t)</span> from <span class=\"chem\">t_1</span> to <span class=\"chem\">t_2</span> to find distance, always solve <span class=\"chem\">v(t) = 0</span> first! If <span class=\"chem\">v(t)</span> changes sign at <span class=\"chem\">t = c</span> inside <span class=\"chem\">(t_1, t_2)</span>, you must split the integral at <span class=\"chem\">t = c</span> and add the absolute values: <span class=\"chem\">d = |int_{t_1}^c v(t) dt| + |int_c^{t_2} v(t) dt|</span>.<br> 2. <strong>Thinking <span class=\"chem\">a(t) &lt; 0</span> always means slowing down:</strong> A particle is <strong>speeding up</strong> whenever velocity <span class=\"chem\">v(t)</span> and acceleration <span class=\"chem\">a(t)</span> have the <strong>same sign</strong> (<span class=\"chem\">v(t) * a(t) &gt; 0</span>, either both positive or both negative!), and <strong>slowing down</strong> whenever <span class=\"chem\">v(t)</span> and <span class=\"chem\">a(t)</span> have <strong>opposite signs</strong> (<span class=\"chem\">v(t) * a(t) &lt; 0</span>).": "<strong>피해야 할 대표적인 운동학 함정 두 가지:</strong><br> 1. <strong>Paper 1에서 총 이동 거리를 구할 때 <span class=\"chem\">v(t) = 0</span> 확인을 빠뜨리는 것:</strong> 거리를 구하기 위해 <span class=\"chem\">t_1</span>에서 <span class=\"chem\">t_2</span>까지 <span class=\"chem\">v(t)</span>를 적분하기 전에 항상 <span class=\"chem\">v(t) = 0</span>부터 푸세요! <span class=\"chem\">(t_1, t_2)</span> 안의 <span class=\"chem\">t = c</span>에서 <span class=\"chem\">v(t)</span>의 부호가 바뀌면 <span class=\"chem\">t = c</span>에서 적분을 나누어 절댓값을 더해야 해요: <span class=\"chem\">d = |int_{t_1}^c v(t) dt| + |int_c^{t_2} v(t) dt|</span>.<br> 2. <strong><span class=\"chem\">a(t) &lt; 0</span>이면 무조건 느려진다고 생각하는 것:</strong> 속도 <span class=\"chem\">v(t)</span>와 가속도 <span class=\"chem\">a(t)</span>가 <strong>같은 부호</strong>일 때 (<span class=\"chem\">v(t) * a(t) &gt; 0</span>, 둘 다 양수이거나 둘 다 음수일 때!) 입자는 <strong>속력이 빨라지고</strong>, <span class=\"chem\">v(t)</span>와 <span class=\"chem\">a(t)</span>가 <strong>반대 부호</strong>일 때 (<span class=\"chem\">v(t) * a(t) &lt; 0</span>) <strong>느려져요</strong>.",

    // Kinematics: displacement, velocity, acceleration and total d > widget > data-title attribute
    "Particle kinematics lab: displacement vs total distance": "입자 운동학 실험실: 변위 vs 총 이동 거리",

    // Kinematics: displacement, velocity, acceleration and total d > widget > figcaption
    "Drag the time slider <span class=\"chem\">T</span> or press <strong>Play motion</strong> to watch the particle move along the track. Notice how the particle reverses direction at <span class=\"chem\">v(t) = 0</span>: after the turnaround, net displacement <span class=\"chem\">Delta s</span> decreases while total distance <span class=\"chem\">d = int_0^T |v(t)| dt</span> keeps growing.": "시간 슬라이더 <span class=\"chem\">T</span>를 움직이거나 <strong>Play motion</strong>을 눌러 트랙을 따라 움직이는 입자를 관찰해 보세요. <span class=\"chem\">v(t) = 0</span>에서 입자가 방향을 바꾼 뒤 알짜 변위 <span class=\"chem\">Delta s</span>는 줄어들지만 총 이동 거리 <span class=\"chem\">d = int_0^T |v(t)| dt</span>는 계속 커지는 것을 확인할 수 있어요.",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > h3
    "Finding displacement and total distance when a particle reverses direction": "입자가 방향을 바꿀 때 변위와 총 이동 거리 구하기",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "A particle moves along a straight line so that its velocity <span class=\"chem\">v</span> <span class=\"unit\">m s-1</span> at time <span class=\"chem\">t</span> seconds (<span class=\"chem\">t &gt;= 0</span>) is given by <span class=\"chem\">v(t) = 3t^2 - 12t + 9</span>. Initially, the particle is at the origin <span class=\"chem\">O</span>.<br> (a) Find the times when the particle is momentarily at rest. <strong>[2 marks]</strong><br> (b) Find the displacement of the particle from <span class=\"chem\">O</span> at <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span>, and find the total distance travelled by the particle in the first <span class=\"chem\">4</span> seconds. <strong>[5 marks]</strong>": "한 입자가 직선 위를 움직이며, 시각 <span class=\"chem\">t</span>초 (<span class=\"chem\">t &gt;= 0</span>)에서의 속도 <span class=\"chem\">v</span> <span class=\"unit\">m s-1</span>가 <span class=\"chem\">v(t) = 3t^2 - 12t + 9</span>로 주어진다. 처음에 입자는 원점 <span class=\"chem\">O</span>에 있다.<br> (a) 입자가 순간적으로 정지해 있는 시각을 구하시오 (Find). <strong>[2 marks]</strong><br> (b) <span class=\"chem\">t = 4</span> <span class=\"unit\">s</span>일 때 원점 <span class=\"chem\">O</span>로부터의 변위를 구하고 (Find), 처음 <span class=\"chem\">4</span>초 동안 입자가 움직인 총 이동 거리를 구하시오 (find). <strong>[5 marks]</strong>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > data-title attribute
    "Part (a): Solve v(t) = 0 to find when the particle reverses direction": "(a) v(t) = 0을 풀어 입자가 방향을 바꾸는 시각 구하기",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "A particle is at rest when its velocity is zero. Factor out 3 first.": "입자가 정지해 있을 때는 속도가 0이에요. 먼저 3을 묶어 내세요.",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > maths line
    "3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 = 3(<i>t</i> − 1)(<i>t</i> − 3) = 0 ⇒ <i>t</i> = 1 <span class=\"unit\">s</span> and <i>t</i> = 3 <span class=\"unit\">s</span> <b>[M1 A1]</b>": "3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 = 3(<i>t</i> − 1)(<i>t</i> − 3) = 0 ⇒ <i>t</i> = 1 <span class=\"unit\">s</span> 그리고 <i>t</i> = 3 <span class=\"unit\">s</span> <b>[M1 A1]</b>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > data-title attribute
    "Part (b): Integrate v(t) with s(0) = 0 to get s(t) and evaluate s(4)": "(b) s(0) = 0으로 v(t)를 적분해 s(t)를 구하고 s(4) 계산하기",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "Antidifferentiating v(t) gives the position s(t) at any time t, making both displacement and piecewise distance fast to compute.": "v(t)를 부정적분하면 임의의 시각 t에서의 위치 s(t)를 얻어 변위와 구간별 거리를 모두 빠르게 계산할 수 있어요.",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > maths line
    "Displacement at <i>t</i> = 4: &nbsp; <i>s</i>(4) = 4<sup>3</sup> − 6(4<sup>2</sup>) + 9(4) = 64 − 96 + 36 = <b>4 <span class=\"unit\">m</span></b> <b>[A1]</b>": "<i>t</i> = 4에서의 변위: &nbsp; <i>s</i>(4) = 4<sup>3</sup> − 6(4<sup>2</sup>) + 9(4) = 64 − 96 + 36 = <b>4 <span class=\"unit\">m</span></b> <b>[A1]</b>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > data-title attribute
    "Split [0, 4] at the turning times t = 1 and t = 3 to sum the absolute distances": "방향 전환 시각 t = 1과 t = 3에서 [0, 4]를 나누어 이동 거리 절댓값 더하기",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "Evaluate s(0) = 0, s(1) = 4, s(3) = 0, and s(4) = 4, then add the distance of each leg.": "s(0) = 0, s(1) = 4, s(3) = 0, s(4) = 4를 계산한 뒤 각 구간의 거리를 더하세요.",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > maths line
    "Total distance <i>d</i> = |<i>s</i>(1) − <i>s</i>(0)| + |<i>s</i>(3) − <i>s</i>(1)| + |<i>s</i>(4) − <i>s</i>(3)| = 4 + 4 + 4 = <b>12 <span class=\"unit\">m</span></b> <b>[M1 A1]</b>": "총 이동 거리 <i>d</i> = |<i>s</i>(1) − <i>s</i>(0)| + |<i>s</i>(3) − <i>s</i>(1)| + |<i>s</i>(4) − <i>s</i>(3)| = 4 + 4 + 4 = <b>12 <span class=\"unit\">m</span></b> <b>[M1 A1]</b>",

    // Kinematics: displacement, velocity, acceleration and total d > worked example > p
    "(a) <span class=\"chem\">t = 1</span> <span class=\"unit\">s</span> and <span class=\"chem\">t = 3</span> <span class=\"unit\">s</span>; (b) displacement <span class=\"chem\">4</span> <span class=\"unit\">m</span>, total distance <span class=\"chem\">12</span> <span class=\"unit\">m</span>.": "(a) <span class=\"chem\">t = 1</span> <span class=\"unit\">s</span> 그리고 <span class=\"chem\">t = 3</span> <span class=\"unit\">s</span>; (b) 변위 <span class=\"chem\">4</span> <span class=\"unit\">m</span>, 총 이동 거리 <span class=\"chem\">12</span> <span class=\"unit\">m</span>.",

    // Kinematics: displacement, velocity, acceleration and total d > try it > p
    "A particle moves along a line with velocity <span class=\"chem\">v(t) = 2t - 4</span> <span class=\"unit\">m s-1</span> for <span class=\"chem\">0 &lt;= t &lt;= 5</span>. Calculate the <strong>total distance travelled</strong> (in <span class=\"unit\">m</span>) by the particle between <span class=\"chem\">t = 0</span> and <span class=\"chem\">t = 5</span>.": "한 입자가 <span class=\"chem\">0 &lt;= t &lt;= 5</span>에서 속도 <span class=\"chem\">v(t) = 2t - 4</span> <span class=\"unit\">m s-1</span>로 직선 위를 움직여요. <span class=\"chem\">t = 0</span>과 <span class=\"chem\">t = 5</span> 사이에 입자가 움직인 <strong>총 이동 거리</strong>(<span class=\"unit\">m</span> 단위)를 계산하시오 (Calculate).",

    // Kinematics: displacement, velocity, acceleration and total d > try it > li
    "First find when <span class=\"chem\">v(t) = 0</span>: <span class=\"chem\">2t - 4 = 0 =&gt; t = 2</span> <span class=\"unit\">s</span>.": "먼저 <span class=\"chem\">v(t) = 0</span>인 시각을 구하세요: <span class=\"chem\">2t - 4 = 0 =&gt; t = 2</span> <span class=\"unit\">s</span>.",

    // Kinematics: displacement, velocity, acceleration and total d > try it > li
    "Split the integral at <span class=\"chem\">t = 2</span>: <span class=\"chem\">d = |int_0^2 (2t - 4) dt| + |int_2^5 (2t - 4) dt|</span>.": "<span class=\"chem\">t = 2</span>에서 적분을 나누세요: <span class=\"chem\">d = |int_0^2 (2t - 4) dt| + |int_2^5 (2t - 4) dt|</span>.",

    // Kinematics: displacement, velocity, acceleration and total d > try it > maths line
    "Total distance = |−4| + 9 = <b>13 <span class=\"unit\">m</span></b>": "총 이동 거리 = |−4| + 9 = <b>13 <span class=\"unit\">m</span></b>",

    // Quick practice > data-toc attribute
    "Practice": "연습 문제",

    // Quick practice > h2
    "Quick practice": "실전 연습",

    // widget string (assets/js/widgets-t5-2.js)
    "Definite integral and enclosed area": "정적분과 둘러싸인 넓이",

    // widget string (assets/js/widgets-t5-2.js)
    "Momentarily at rest (v = 0)": "순간 정지 (v = 0)",

    // widget string (assets/js/widgets-t5-2.js)
    "Speeding up (v and a have same sign)": "속력 증가 (v와 a가 같은 부호)",

    // widget string (assets/js/widgets-t5-2.js)
    "Slowing down (v and a have opposite signs)": "속력 감소 (v와 a가 반대 부호)",

    // widget string (assets/js/widgets-t5-2.js)
    "Velocity-time graph v(t)": "속도-시간 그래프 v(t)",

  }
});
