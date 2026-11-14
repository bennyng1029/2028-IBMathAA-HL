/* t5-4 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't5-4', {
  strings: {

    // page title (browser tab)
    "5.4 Differential equations and Maclaurin series | Analysis Lab": "5.4 미분방정식과 매클로린 급수 | Analysis Lab",

    // Differential equations and Maclaurin series > page header > p
    "Topic 5.4 · AHL 5.18–5.19": "Topic 5.4 · AHL 5.18–5.19",

    // Differential equations and Maclaurin series > page header > h1
    "Differential equations and Maclaurin series": "미분방정식과 매클로린 급수",

    // Differential equations and Maclaurin series > page header > span
    "How can a rule that specifies only the local rate of change reconstruct an entire function—either exactly, numerically step-by-step, or as an infinite power series?": "국소적인 변화율만 알려 주는 식으로부터 어떻게 전체 함수를 정확하게, 단계별 수치 근사로, 또는 무한 멱급수로 복원할 수 있을까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 목표",

    // What you need to be able to do > h2
    "What you need to be able to do": "이 단원에서 할 수 있어야 하는 것",

    // What you need to be able to do > checklist > Additional HL > span
    "Approximate solutions of <span class=\"chem\">dy/dx = f(x, y)</span> numerically using Euler’s method <span class=\"chem\">y_{n+1} = y_n + h f(x_n, y_n)</span>, <span class=\"chem\">x_{n+1} = x_n + h</span>, and interpret slope fields and concavity errors.": "오일러 방법 <span class=\"chem\">y_{n+1} = y_n + h f(x_n, y_n)</span>, <span class=\"chem\">x_{n+1} = x_n + h</span>를 이용해 <span class=\"chem\">dy/dx = f(x, y)</span>의 해를 수치적으로 근사하고, 기울기장과 오목·볼록에 따른 오차를 해석해요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve first-order separable differential equations <span class=\"chem\">dy/dx = g(x) h(y)</span> by integrating <span class=\"chem\">int (1/h(y)) dy = int g(x) dx</span>, including exponential, cooling, and logistic growth models.": "변수분리형 1계 미분방정식 <span class=\"chem\">dy/dx = g(x) h(y)</span>을 <span class=\"chem\">int (1/h(y)) dy = int g(x) dx</span>로 적분해 풀어요(지수 모형, 냉각 법칙, 로지스틱 성장 모형 포함).",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve first-order homogeneous differential equations <span class=\"chem\">dy/dx = F(y/x)</span> using the substitution <span class=\"chem\">y = vx</span> and <span class=\"chem\">dy/dx = v + x (dv/dx)</span>.": "치환 <span class=\"chem\">y = vx</span>와 <span class=\"chem\">dy/dx = v + x (dv/dx)</span>를 이용해 1계 동차 미분방정식 <span class=\"chem\">dy/dx = F(y/x)</span>을 풀어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve first-order linear differential equations <span class=\"chem\">dy/dx + P(x)y = Q(x)</span> using the integrating factor <span class=\"chem\">I(x) = e^{int P(x) dx}</span>.": "적분인자 <span class=\"chem\">I(x) = e^{int P(x) dx}</span>를 이용해 1계 선형 미분방정식 <span class=\"chem\">dy/dx + P(x)y = Q(x)</span>을 풀어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Find Maclaurin series using <span class=\"chem\">f(x) = f(0) + x f'(0) + (x^2/2!) f''(0) + ...</span> and by substituting, multiplying, differentiating, or integrating the standard Formula Booklet series (<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1 + x), (1 + x)^p</span>).": "<span class=\"chem\">f(x) = f(0) + x f'(0) + (x^2/2!) f''(0) + ...</span>를 이용하거나 공식집의 기본 급수(<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1 + x), (1 + x)^p</span>)를 대입·곱셈·미분·적분해 매클로린 급수를 구해요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Develop the Maclaurin series of a solution <span class=\"chem\">y(x)</span> directly from a differential equation <span class=\"chem\">dy/dx = f(x, y)</span> and initial condition <span class=\"chem\">y(0) = y_0</span> by repeated implicit differentiation.": "반복적인 음함수 미분을 통해 미분방정식 <span class=\"chem\">dy/dx = f(x, y)</span>와 초기조건 <span class=\"chem\">y(0) = y_0</span>으로부터 해 <span class=\"chem\">y(x)</span>의 매클로린 급수를 직접 전개해요.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: The 4-way first-order DE classifier &amp;  > h2
    "Question decoder: The 4-way first-order DE classifier &amp; Maclaurin series": "문제 디코더: 1계 미분방정식 4가지 유형 판별표 &amp; 매클로린 급수",

    // Question decoder: The 4-way first-order DE classifier &amp;  > p
    "Every first-order differential equation in IB Math AA HL belongs to one of four exact archetypes. Run through the 4-way classifier below in order, then check the Maclaurin series decoder for power-series questions.": "IB Math AA HL에 나오는 모든 1계 미분방정식은 다음 4가지 유형 중 하나에 속해요. 아래 4단계 판별표를 순서대로 확인한 뒤, 멱급수 문제는 매클로린 급수 디코더를 참고하세요.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > caption
    "The 4-way first-order differential equation classifier": "1계 미분방정식 4가지 유형 판별표",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Archetype &amp; structural pattern": "유형 및 식의 구조",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Formula &amp; transformation setup": "공식 및 식 변형 방법",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Paper 1 (No GDC) vs Paper 2 / 3 strategy": "Paper 1 (계산기 불가) vs Paper 2 / 3 전략",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "1. Variables separable:<br><span class=\"chem\">dy/dx = g(x) h(y)</span><br>(pure product/quotient of an <i>x</i>-factor and a <i>y</i>-factor)": "1. 변수분리형:<br><span class=\"chem\">dy/dx = g(x) h(y)</span><br>(<i>x</i>에 관한 식과 <i>y</i>에 관한 식의 곱·나눗셈 꼴)",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Divide by <span class=\"chem\">h(y)</span> and multiply by <span class=\"chem\">dx</span>:<br><span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>.": "<span class=\"chem\">h(y)</span>로 나누고 <span class=\"chem\">dx</span>를 곱해요:<br><span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Add <span class=\"chem\">+ C</span> the instant you integrate! For logistic equations <span class=\"chem\">dP/dt = kP(M - P)</span>, use partial fractions on <span class=\"chem\">1/(P(M - P))</span>.": "적분하자마자 <span class=\"chem\">+ C</span>를 바로 붙이세요! 로지스틱 방정식 <span class=\"chem\">dP/dt = kP(M - P)</span>에서는 <span class=\"chem\">1/(P(M - P))</span>에 부분분수 분해를 쓰세요.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "2. Homogeneous DE:<br><span class=\"chem\">dy/dx = f(y/x)</span><br>(every term in <span class=\"chem\">M(x, y)</span> and <span class=\"chem\">N(x, y)</span> has the same total degree, e.g. <span class=\"chem\">(x^2 + y^2)/(xy)</span>)": "2. 동차 미분방정식:<br><span class=\"chem\">dy/dx = f(y/x)</span><br>(<span class=\"chem\">M(x, y)</span>와 <span class=\"chem\">N(x, y)</span>의 모든 항의 차수가 같음, 예: <span class=\"chem\">(x^2 + y^2)/(xy)</span>)",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Substitute <strong><span class=\"chem\">y = vx</span></strong> and <strong><span class=\"chem\">dy/dx = v + x(dv/dx)</span></strong>.<br>Simplifies to the separable equation:<br><span class=\"chem\">x(dv/dx) = f(v) - v =&gt; int 1/(f(v) - v) dv = int (1/x) dx</span>.": "<strong><span class=\"chem\">y = vx</span></strong>와 <strong><span class=\"chem\">dy/dx = v + x(dv/dx)</span></strong>를 대입해요.<br>그러면 다음 변수분리형 방정식으로 정리돼요:<br><span class=\"chem\">x(dv/dx) = f(v) - v =&gt; int 1/(f(v) - v) dv = int (1/x) dx</span>.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Neither <span class=\"chem\">y = vx</span> nor <span class=\"chem\">dy/dx = v + x(dv/dx)</span> is printed in the Formula Booklet—memorize both! Always replace <span class=\"chem\">v = y/x</span> at the end.": "<span class=\"chem\">y = vx</span>와 <span class=\"chem\">dy/dx = v + x(dv/dx)</span>는 공식집에 실려 있지 않으니 둘 다 외워 두세요! 마지막에는 반드시 <span class=\"chem\">v = y/x</span>로 되돌려 놓아야 해요.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "3. First-order linear DE:<br><span class=\"chem\">dy/dx + P(x)y = Q(x)</span><br>(linear in <i>y</i> and <span class=\"chem\">dy/dx</span>, with functions of <i>x</i> only as coefficients)": "3. 1계 선형 미분방정식:<br><span class=\"chem\">dy/dx + P(x)y = Q(x)</span><br>(<i>y</i>와 <span class=\"chem\">dy/dx</span>에 대해 일차이고, 계수는 <i>x</i>만의 함수인 꼴)",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Compute the <strong>integrating factor</strong> (Booklet 5.18):<br><span class=\"chem\">I(x) = e^{int P(x) dx}</span>.<br>Multiplying through collapses the left side by the product rule:<br><span class=\"chem\">d/dx[I(x) y] = I(x) Q(x) =&gt; I(x) y = int I(x) Q(x) dx + C</span>.": "<strong>적분인자</strong>를 구해요 (공식집 5.18):<br><span class=\"chem\">I(x) = e^{int P(x) dx}</span>.<br>양변에 곱하면 좌변이 곱의 미분법으로 묶여요:<br><span class=\"chem\">d/dx[I(x) y] = I(x) Q(x) =&gt; I(x) y = int I(x) Q(x) dx + C</span>.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Trap:</strong> If there is a coefficient in front of <span class=\"chem\">dy/dx</span> (such as <span class=\"chem\">x(dy/dx) + 2y = x^3</span>), <strong>divide the entire equation by <i>x</i> first</strong> so <span class=\"chem\">P(x) = 2/x</span>!": "<strong>함정 주의:</strong> <span class=\"chem\">x(dy/dx) + 2y = x^3</span>처럼 <span class=\"chem\">dy/dx</span> 앞에 계수가 있으면 <strong>먼저 식 전체를 <i>x</i>로 나누어</strong> <span class=\"chem\">P(x) = 2/x</span>가 되게 하세요!",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "4. “Use Euler’s method with step size <i>h</i> to estimate <span class=\"chem\">y(x_n)</span>”": "4. “단계 크기 <i>h</i>인 오일러 방법을 사용하여 <span class=\"chem\">y(x_n)</span>의 근삿값을 구하시오”",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Numerical recurrence (Booklet 5.18):<br><span class=\"chem\">x_{n+1} = x_n + h</span><br><span class=\"chem\">y_{n+1} = y_n + h × f(x_n, y_n)</span>": "수치 점화식 (공식집 5.18):<br><span class=\"chem\">x_{n+1} = x_n + h</span><br><span class=\"chem\">y_{n+1} = y_n + h × f(x_n, y_n)</span>",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "On Paper 2, draw a clear table with columns <span class=\"chem\">n, x_n, y_n, f(x_n, y_n), y_{n+1}</span> and keep full calculator precision until the final 3 s.f. rounding.": "Paper 2에서는 <span class=\"chem\">n, x_n, y_n, f(x_n, y_n), y_{n+1}</span> 열로 깔끔한 표를 만들고, 마지막에 유효숫자 3자리(3 s.f.)로 반올림하기 전까지는 계산기의 모든 자릿수를 그대로 유지하세요.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > caption
    "Maclaurin series decoder — choosing the fastest expansion pathway": "매클로린 급수 디코더 — 가장 빠른 전개 경로 고르기",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "What the exam question asks": "시험 문제의 요구",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Fastest IB method": "가장 빠른 IB 해법",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Why students lose time or marks": "시간이나 점수를 잃기 쉬운 이유",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Expand a composite or product of known functions, e.g. <span class=\"chem\">e^{2x} cos(3x)</span> or <span class=\"chem\">ln(1 + 2x^2)</span> up to <span class=\"chem\">x^4</span>": "알려진 함수들의 합성 또는 곱을 <span class=\"chem\">x^4</span>항까지 전개하기 (예: <span class=\"chem\">e^{2x} cos(3x)</span>, <span class=\"chem\">ln(1 + 2x^2)</span>)",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Build from standard Booklet series</strong> (<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1+x), (1+x)^p</span>): substitute the inner term, multiply polynomials, and drop powers above <span class=\"chem\">x^4</span>.": "<strong>공식집 기본 급수로 만들기</strong> (<span class=\"chem\">e^x, sin x, cos x, arctan x, ln(1+x), (1+x)^p</span>): 속함수를 대입하고 다항식끼리 곱한 뒤 <span class=\"chem\">x^4</span>보다 높은 차수는 버려요.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Differentiating <span class=\"chem\">e^{2x} cos(3x)</span> four times by the product rule takes 10 minutes and invites sign errors; multiplying the two Booklet series takes 45 seconds!": "<span class=\"chem\">e^{2x} cos(3x)</span>를 곱의 미분법으로 4번 미분하면 10분이나 걸리고 부호 실수도 나기 쉬워요; 공식집 두 급수를 곱하면 45초면 충분해요!",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Expand a non-standard function such as <span class=\"chem\">f(x) = tan x</span>, <span class=\"chem\">sec x</span>, or <span class=\"chem\">e^{sin x}</span> from first principles": "<span class=\"chem\">f(x) = tan x</span>, <span class=\"chem\">sec x</span>, <span class=\"chem\">e^{sin x}</span> 같은 비표준 함수를 정의로부터 전개하기",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Repeated differentiation</strong>: compute <span class=\"chem\">f(0), f'(0), f''(0), f'''(0)</span> and substitute into <span class=\"chem\">f(0) + x f'(0) + (x^2/2!)f''(0) + (x^3/3!)f'''(0) + ...</span>.": "<strong>반복 미분</strong>: <span class=\"chem\">f(0), f'(0), f''(0), f'''(0)</span>을 구해 <span class=\"chem\">f(0) + x f'(0) + (x^2/2!)f''(0) + (x^3/3!)f'''(0) + ...</span>에 대입해요.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Remember to divide by <span class=\"chem\">2! = 2</span>, <span class=\"chem\">3! = 6</span>, <span class=\"chem\">4! = 24</span>! Writing <span class=\"chem\">f''(0) x^2</span> without <span class=\"chem\">2!</span> is a classic slip.": "<span class=\"chem\">2! = 2</span>, <span class=\"chem\">3! = 6</span>, <span class=\"chem\">4! = 24</span>로 나누는 것을 잊지 마세요! <span class=\"chem\">2!</span> 없이 <span class=\"chem\">f''(0) x^2</span>이라고 쓰는 것이 대표적인 실수예요.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > th
    "Given <span class=\"chem\">dy/dx = f(x, y)</span> and <span class=\"chem\">y(0) = y_0</span>, find the Maclaurin series for <span class=\"chem\">y(x)</span> up to <span class=\"chem\">x^3</span>": "<span class=\"chem\">dy/dx = f(x, y)</span>와 <span class=\"chem\">y(0) = y_0</span>이 주어졌을 때 <span class=\"chem\">y(x)</span>의 매클로린 급수를 <span class=\"chem\">x^3</span>항까지 구하기",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "<strong>Implicit differentiation of the DE</strong>: differentiate <span class=\"chem\">y' = f(x, y)</span> with respect to <i>x</i> to express <span class=\"chem\">y''</span> in terms of <span class=\"chem\">x, y, y'</span>, then differentiate again for <span class=\"chem\">y'''</span>, and evaluate at <span class=\"chem\">x = 0</span>.": "<strong>미분방정식의 음함수 미분</strong>: <span class=\"chem\">y' = f(x, y)</span>를 <i>x</i>에 대해 미분해 <span class=\"chem\">y''</span>을 <span class=\"chem\">x, y, y'</span>의 식으로 나타내고, 한 번 더 미분해 <span class=\"chem\">y'''</span>을 구한 뒤 <span class=\"chem\">x = 0</span>에서의 값을 계산해요.",

    // Question decoder: The 4-way first-order DE classifier &amp;  > table > td
    "Never try to solve a non-linear DE like <span class=\"chem\">dy/dx = x + y^2</span> analytically—differentiating the DE directly gives <span class=\"chem\">y''(0)</span> and <span class=\"chem\">y'''(0)</span> in two lines!": "<span class=\"chem\">dy/dx = x + y^2</span> 같은 비선형 미분방정식을 직접 풀려고 하지 마세요. 미분방정식을 바로 미분하면 두 줄 만에 <span class=\"chem\">y''(0)</span>과 <span class=\"chem\">y'''(0)</span>을 구할 수 있어요!",

    // Slope fields, Euler’s method and separable differential equa > data-toc attribute
    "Euler & separable DEs": "오일러 방법과 변수분리형",

    // Slope fields, Euler’s method and separable differential equa > h2
    "Slope fields, Euler’s method and separable differential equations": "기울기장, 오일러 방법 및 변수분리형 미분방정식",

    // Slope fields, Euler’s method and separable differential equa > p
    "A first-order differential equation <span class=\"chem\">dy/dx = f(x, y)</span> assigns a tangent gradient to every point <span class=\"chem\">(x, y)</span> in the plane. Plotting short line segments with slope <span class=\"chem\">f(x, y)</span> on a grid produces a <dfn data-def=\"A graphical grid of short line segments showing the gradient dy/dx = f(x, y) at each point (x, y), which solution curves must follow tangentially.\">slope field</dfn> (direction field). Any solution curve <span class=\"chem\">y(x)</span> passing through an initial point <span class=\"chem\">(x_0, y_0)</span> must be tangent to the slope-field segments everywhere along its path.": "1계 미분방정식 <span class=\"chem\">dy/dx = f(x, y)</span>는 평면 위의 모든 점 <span class=\"chem\">(x, y)</span>에 접선의 기울기를 지정해 줘요. 격자점마다 기울기가 <span class=\"chem\">f(x, y)</span>인 짧은 선분을 그리면 <dfn data-def=\"A graphical grid of short line segments showing the gradient dy/dx = f(x, y) at each point (x, y), which solution curves must follow tangentially.\">기울기장 <span class=\"en-term\">(slope field)</span></dfn>(방향장)이 돼요. 초기점 <span class=\"chem\">(x_0, y_0)</span>을 지나는 해곡선 <span class=\"chem\">y(x)</span>는 경로 위의 모든 점에서 기울기장의 선분과 접해야 해요.",

    // Slope fields, Euler’s method and separable differential equa > data-def attribute
    "A graphical grid of short line segments showing the gradient dy/dx = f(x, y) at each point (x, y), which solution curves must follow tangentially.": "각 점 (x, y)에서의 기울기 dy/dx = f(x, y)를 짧은 선분들로 나타낸 격자 그림으로, 해곡선은 이 선분들에 접하며 지나갑니다.",

    // Slope fields, Euler’s method and separable differential equa > h3
    "Numerical approximation via Euler’s method": "오일러 방법을 이용한 수치 근사",

    // Slope fields, Euler’s method and separable differential equa > p
    "When a differential equation cannot be solved algebraically, <dfn data-def=\"A numerical step-by-step algorithm that approximates the solution curve of dy/dx = f(x, y) by moving along the local tangent line over small horizontal steps of size h.\">Euler’s method</dfn> approximates the solution curve by stepping forward along the current tangent line in small increments of step length <i>h</i>:": "미분방정식을 대수적으로 풀 수 없을 때, <dfn data-def=\"A numerical step-by-step algorithm that approximates the solution curve of dy/dx = f(x, y) by moving along the local tangent line over small horizontal steps of size h.\">오일러 방법 <span class=\"en-term\">(Euler’s method)</span></dfn>은 작은 단계 크기 <i>h</i>만큼 현재의 접선을 따라 한 걸음씩 나아가며 해곡선을 근사해요:",

    // Slope fields, Euler’s method and separable differential equa > data-def attribute
    "A numerical step-by-step algorithm that approximates the solution curve of dy/dx = f(x, y) by moving along the local tangent line over small horizontal steps of size h.": "작은 가로 간격 h만큼 국소 접선을 따라 이동하며 dy/dx = f(x, y)의 해곡선을 단계별로 근사하는 수치 알고리즘입니다.",

    // Slope fields, Euler’s method and separable differential equa > equation > dd
    "constant horizontal step size": "일정한 가로 단계 크기",

    // Slope fields, Euler’s method and separable differential equa > equation > dt
    "f(x<sub>n</sub>, y<sub>n</sub>)": "f(x<sub>n</sub>, y<sub>n</sub>)",

    // Slope fields, Euler’s method and separable differential equa > equation > dd
    "gradient dy/dx evaluated at the current point (<i>x</i><sub><i>n</i></sub>, <i>y</i><sub><i>n</i></sub>)": "현재 점 (<i>x</i><sub><i>n</i></sub>, <i>y</i><sub><i>n</i></sub>)에서의 기울기 dy/dx",

    // Slope fields, Euler’s method and separable differential equa > key idea > p
    "<strong>Overestimate vs underestimate (concavity analysis):</strong> Because Euler’s method follows the tangent line at each step:": "<strong>과대평가 vs 과소평가 (오목과 볼록 분석):</strong> 오일러 방법은 매 단계마다 접선을 따라가므로:",

    // Slope fields, Euler’s method and separable differential equa > key idea > li
    "If the solution curve is <strong>concave up (<span class=\"chem\">d^2y/dx^2 &gt; 0</span>)</strong> on the interval, every tangent line lies <em>below</em> the curve, so Euler’s method gives an <strong>underestimate</strong>.": "구간에서 해곡선이 <strong>아래로 볼록 (<span class=\"chem\">d^2y/dx^2 &gt; 0</span>)</strong>이면 모든 접선이 곡선 <em>아래</em>에 놓이므로 오일러 방법은 <strong>과소평가(underestimate)</strong>를 해요.",

    // Slope fields, Euler’s method and separable differential equa > key idea > li
    "If the solution curve is <strong>concave down (<span class=\"chem\">d^2y/dx^2 &lt; 0</span>)</strong>, every tangent line lies <em>above</em> the curve, so Euler’s method gives an <strong>overestimate</strong>.": "해곡선이 <strong>위로 볼록 (<span class=\"chem\">d^2y/dx^2 &lt; 0</span>)</strong>이면 모든 접선이 곡선 <em>위</em>에 놓이므로 오일러 방법은 <strong>과대평가(overestimate)</strong>를 해요.",

    // Slope fields, Euler’s method and separable differential equa > key idea > li
    "Reducing the step size <i>h</i> (for example, halving <i>h</i>) reduces the truncation error and brings the Euler polygon closer to the exact curve.": "단계 크기 <i>h</i>를 줄이면(예: <i>h</i>를 절반으로 줄이면) 절단 오차가 줄어들어 오일러 꺾은선이 실제 해곡선에 더 가까워져요.",

    // Slope fields, Euler’s method and separable differential equa > widget > data-title attribute
    "Slope field & Euler’s method step explorer": "기울기장 및 오일러 방법 단계 탐색기",

    // Slope fields, Euler’s method and separable differential equa > widget > data-kicker attribute
    "AHL 5.18 · Interactive": "AHL 5.18 · 인터랙티브",

    // Slope fields, Euler’s method and separable differential equa > widget > figcaption
    "The background segments show the slope field <span class=\"chem\">dy/dx = f(x, y)</span>. The solid curve is the exact solution through <span class=\"chem\">(0, y_0)</span>, and the dashed polygon shows Euler’s method with step size <i>h</i>. Notice how concave-up regions cause Euler’s polygon to sit below the exact curve.": "배경의 선분들은 기울기장 <span class=\"chem\">dy/dx = f(x, y)</span>를 나타내요. 실선은 <span class=\"chem\">(0, y_0)</span>을 지나는 정확한 해이고, 점선 꺾은선은 단계 크기 <i>h</i>인 오일러 방법의 근사예요. 아래로 볼록한 구간에서 오일러 꺾은선이 실제 곡선 아래에 놓이는 것을 확인해 보세요.",

    // Slope fields, Euler’s method and separable differential equa > h3
    "Separable differential equations and growth models": "변수분리형 미분방정식과 성장 모형",

    // Slope fields, Euler’s method and separable differential equa > p
    "When <span class=\"chem\">dy/dx = g(x) h(y)</span>, separate the variables by placing all <i>y</i> terms with <span class=\"chem\">dy</span> and all <i>x</i> terms with <span class=\"chem\">dx</span>:": "<span class=\"chem\">dy/dx = g(x) h(y)</span> 꼴일 때는 <i>y</i>에 관한 항은 모두 <span class=\"chem\">dy</span> 쪽으로, <i>x</i>에 관한 항은 모두 <span class=\"chem\">dx</span> 쪽으로 변수를 분리해요:",

    // Slope fields, Euler’s method and separable differential equa > p
    "<span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>.": "<span class=\"chem\">int (1 / h(y)) dy = int g(x) dx</span>.",

    // Slope fields, Euler’s method and separable differential equa > p
    "Two classic scientific models in IB AA HL rely on separation of variables:": "IB AA HL에서 자주 나오는 두 가지 대표적 과학 모형은 변수분리법을 사용해요:",

    // Slope fields, Euler’s method and separable differential equa > li
    "<strong>Newton’s law of cooling / radioactive decay:</strong> <span class=\"chem\">dT/dt = -k(T - T_s) =&gt; int 1/(T - T_s) dT = int -k dt =&gt; T(t) = T_s + A e^{-kt}</span>.": "<strong>뉴턴의 냉각 법칙 / 방사성 붕괴:</strong> <span class=\"chem\">dT/dt = -k(T - T_s) =&gt; int 1/(T - T_s) dT = int -k dt =&gt; T(t) = T_s + A e^{-kt}</span>.",

    // Slope fields, Euler’s method and separable differential equa > li
    "<strong>Logistic population growth:</strong> <span class=\"chem\">dP/dt = kP(M - P)</span>, where <i>M</i> is the carrying capacity. Separating gives <span class=\"chem\">int M/(P(M - P)) dP = int Mk dt</span>; splitting the left side by partial fractions <span class=\"chem\">1/P + 1/(M - P)</span> yields <span class=\"chem\">ln|P / (M - P)| = Mkt + C =&gt; P(t) = M / (1 + A e^{-Mkt})</span>.": "<strong>로지스틱 개체수 성장:</strong> <span class=\"chem\">dP/dt = kP(M - P)</span> (여기서 <i>M</i>은 환경 수용력). 변수를 분리하면 <span class=\"chem\">int M/(P(M - P)) dP = int Mk dt</span>이고, 좌변을 부분분수 <span class=\"chem\">1/P + 1/(M - P)</span>로 쪼개면 <span class=\"chem\">ln|P / (M - P)| = Mkt + C =&gt; P(t) = M / (1 + A e^{-Mkt})</span>를 얻어요.",

    // Slope fields, Euler’s method and separable differential equa > worked example > h3
    "Using Euler’s method and solving a separable differential equation": "오일러 방법 적용하기와 변수분리형 미분방정식 풀기",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Consider the differential equation <span class=\"chem\">dy/dx = 2xy^2</span> with initial condition <span class=\"chem\">y(0) = 1</span>.": "초기조건 <span class=\"chem\">y(0) = 1</span>을 만족하는 미분방정식 <span class=\"chem\">dy/dx = 2xy^2</span>이 주어져 있어요.",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "(a) Use Euler’s method with step size <span class=\"chem\">h = 0.2</span> to approximate <span class=\"chem\">y(0.4)</span>. <strong>[3 marks]</strong>": "(a) 단계 크기 <span class=\"chem\">h = 0.2</span>인 오일러 방법을 사용하여 <span class=\"chem\">y(0.4)</span>의 근삿값을 구하시오. <strong>[3 marks]</strong>",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "(b) Solve the differential equation analytically to find the exact value of <span class=\"chem\">y(0.4)</span>, and explain why Euler’s method underestimated the exact value. <strong>[5 marks]</strong>": "(b) 미분방정식을 해석적으로 풀어 <span class=\"chem\">y(0.4)</span>의 정확한 값을 구하고, 오일러 방법이 실제 값보다 과소평가한 이유를 설명하시오. <strong>[5 marks]</strong>",

    // Slope fields, Euler’s method and separable differential equa > worked example > data-title attribute
    "Step through Euler’s recurrence from x₀ = 0 to x₂ = 0.4": "x₀ = 0에서 x₂ = 0.4까지 오일러 점화식 계산하기",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Apply y_{n+1} = y_n + 0.2(2 x_n y_n²) twice in a clear table.": "표에 정리하며 y_{n+1} = y_n + 0.2(2 x_n y_n²)을 두 번 적용해요.",

    // Slope fields, Euler’s method and separable differential equa > worked example > maths line
    "Step 0 → 1: <i>x</i><sub>0</sub> = 0, <i>y</i><sub>0</sub> = 1, <i>f</i>(0, 1) = 2(0)(1)<sup>2</sup> = 0 ⇒ <i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1 + 0.2(0) = 1 <b>[M1 A1]</b>": "단계 0 → 1: <i>x</i><sub>0</sub> = 0, <i>y</i><sub>0</sub> = 1, <i>f</i>(0, 1) = 2(0)(1)<sup>2</sup> = 0 ⇒ <i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1 + 0.2(0) = 1 <b>[M1 A1]</b>",

    // Slope fields, Euler’s method and separable differential equa > worked example > maths line
    "Step 1 → 2: <i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1, <i>f</i>(0.2, 1) = 2(0.2)(1)<sup>2</sup> = 0.4 ⇒ <i>x</i><sub>2</sub> = 0.4, <i>y</i><sub>2</sub> = 1 + 0.2(0.4) = <b>1.08</b> <b>[A1]</b>": "단계 1 → 2: <i>x</i><sub>1</sub> = 0.2, <i>y</i><sub>1</sub> = 1, <i>f</i>(0.2, 1) = 2(0.2)(1)<sup>2</sup> = 0.4 ⇒ <i>x</i><sub>2</sub> = 0.4, <i>y</i><sub>2</sub> = 1 + 0.2(0.4) = <b>1.08</b> <b>[A1]</b>",

    // Slope fields, Euler’s method and separable differential equa > worked example > data-title attribute
    "Separate variables and integrate both sides": "변수분리 후 양변 적분하기",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Divide by y² to isolate y on the left and x on the right.": "y²으로 나누어 좌변에는 y만, 우변에는 x만 남게 해요.",

    // Slope fields, Euler’s method and separable differential equa > worked example > data-title attribute
    "Apply y(0) = 1, evaluate y(0.4), and compare concavity": "y(0) = 1을 대입해 y(0.4)를 구하고 오목·볼록 비교하기",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "Substitute x = 0, y = 1 to find C, then compute y(0.4).": "x = 0, y = 1을 대입해 C를 구한 뒤 y(0.4)를 계산해요.",

    // Slope fields, Euler’s method and separable differential equa > worked example > maths line
    "Exact value: <i>y</i>(0.4) = <span class=\"frac\"><span>1</span><span>1 − 0.16</span></span> = <span class=\"frac\"><span>1</span><span>0.84</span></span> = <b><span class=\"frac\"><span>25</span><span>21</span></span> ≈ 1.19</b>. Because <i>y</i>(<i>x</i>) is concave up (<i>y</i>″ &gt; 0) on [0, 0.4], the tangent lines lie below the curve, so Euler’s method underestimates <i>y</i>(0.4). <b>[A1 R1]</b>": "정확한 값: <i>y</i>(0.4) = <span class=\"frac\"><span>1</span><span>1 − 0.16</span></span> = <span class=\"frac\"><span>1</span><span>0.84</span></span> = <b><span class=\"frac\"><span>25</span><span>21</span></span> ≈ 1.19</b>. [0, 0.4]에서 <i>y</i>(<i>x</i>)가 아래로 볼록(<i>y</i>″ &gt; 0)이므로 접선들이 곡선 아래에 놓여 오일러 방법이 <i>y</i>(0.4)를 과소평가해요. <b>[A1 R1]</b>",

    // Slope fields, Euler’s method and separable differential equa > worked example > p
    "(a) 1.08; (b) 25/21 ≈ 1.19 (underestimate since curve is concave up)": "(a) 1.08; (b) 25/21 ≈ 1.19 (곡선이 아래로 볼록하므로 과소평가)",

    // Slope fields, Euler’s method and separable differential equa > try it > p
    "Given the differential equation <span class=\"chem\">dy/dx = x + y</span> with initial condition <span class=\"chem\">y(0) = 1</span>, use Euler’s method with step length <span class=\"chem\">h = 0.1</span> to calculate the approximation <span class=\"chem\">y_2</span> for <span class=\"chem\">y(0.2)</span>.": "초기조건 <span class=\"chem\">y(0) = 1</span>인 미분방정식 <span class=\"chem\">dy/dx = x + y</span>에서 단계 크기 <span class=\"chem\">h = 0.1</span>인 오일러 방법을 사용하여 <span class=\"chem\">y(0.2)</span>의 근삿값 <span class=\"chem\">y_2</span>를 계산하시오 (Calculate).",

    // Slope fields, Euler’s method and separable differential equa > try it > li
    "For the first step (<span class=\"chem\">x_0 = 0, y_0 = 1</span>): <span class=\"chem\">f(0, 1) = 0 + 1 = 1</span>, so <span class=\"chem\">y_1 = 1 + 0.1(1) = 1.1</span> at <span class=\"chem\">x_1 = 0.1</span>.": "첫 번째 단계(<span class=\"chem\">x_0 = 0, y_0 = 1</span>): <span class=\"chem\">f(0, 1) = 0 + 1 = 1</span>이므로 <span class=\"chem\">x_1 = 0.1</span>에서 <span class=\"chem\">y_1 = 1 + 0.1(1) = 1.1</span>이에요.",

    // Slope fields, Euler’s method and separable differential equa > try it > li
    "For the second step (<span class=\"chem\">x_1 = 0.1, y_1 = 1.1</span>): <span class=\"chem\">f(0.1, 1.1) = 0.1 + 1.1 = 1.2</span>, so <span class=\"chem\">y_2 = 1.1 + 0.1(1.2)</span>.": "두 번째 단계(<span class=\"chem\">x_1 = 0.1, y_1 = 1.1</span>): <span class=\"chem\">f(0.1, 1.1) = 0.1 + 1.1 = 1.2</span>이므로 <span class=\"chem\">y_2 = 1.1 + 0.1(1.2)</span>예요.",

    // Homogeneous differential equations and the integrating facto > data-toc attribute
    "Homogeneous & integrating factor": "동차 미분방정식과 적분인자",

    // Homogeneous differential equations and the integrating facto > h2
    "Homogeneous differential equations and the integrating factor": "동차 미분방정식과 적분인자",

    // Homogeneous differential equations and the integrating facto > h3
    "1. Homogeneous differential equations (<span class=\"chem\">y = vx</span>)": "1. 동차 미분방정식 (<span class=\"chem\">y = vx</span>)",

    // Homogeneous differential equations and the integrating facto > p
    "A first-order differential equation is <dfn data-def=\"A differential equation that can be written in the form dy/dx = F(y/x), where every algebraic term in x and y has the same total degree.\">homogeneous</dfn> if it can be written as <span class=\"chem\">dy/dx = F(y/x)</span>—for example, <span class=\"chem\">dy/dx = (x^2 + 3y^2)/(2xy) = (1/2)(x/y) + (3/2)(y/x)</span>. Because the ratio <span class=\"chem\">y/x</span> couples the variables, we introduce the new variable <span class=\"chem\">v = y/x</span>:": "1계 미분방정식이 <span class=\"chem\">dy/dx = F(y/x)</span> 꼴(예: <span class=\"chem\">dy/dx = (x^2 + 3y^2)/(2xy) = (1/2)(x/y) + (3/2)(y/x)</span>)로 쓰일 수 있을 때 <dfn data-def=\"A differential equation that can be written in the form dy/dx = F(y/x), where every algebraic term in x and y has the same total degree.\">동차 <span class=\"en-term\">(homogeneous)</span></dfn> 미분방정식이라고 해요. 비율 <span class=\"chem\">y/x</span>로 변수들이 엮여 있으므로 새로운 변수 <span class=\"chem\">v = y/x</span>를 도입해요:",

    // Homogeneous differential equations and the integrating facto > data-def attribute
    "A differential equation that can be written in the form dy/dx = F(y/x), where every algebraic term in x and y has the same total degree.": "x와 y의 모든 항의 차수가 같아 dy/dx = F(y/x) 꼴로 나타낼 수 있는 미분방정식입니다.",

    // Homogeneous differential equations and the integrating facto > equation > maths line
    "Let <i>y</i> = <i>vx</i> ⇒ <span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> = <i>v</i> + <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> ⇒ <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = <i>F</i>(<i>v</i>) − <i>v</i>": "<i>y</i> = <i>vx</i>라 하면 ⇒ <span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> = <i>v</i> + <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> ⇒ <i>x</i> <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = <i>F</i>(<i>v</i>) − <i>v</i>",

    // Homogeneous differential equations and the integrating facto > equation > dd
    "dimensionless ratio substitution (must be memorized—not in the Formula Booklet!)": "비율 치환 (공식집에 없으므로 반드시 암기해야 해요!)",

    // Homogeneous differential equations and the integrating facto > equation > dt
    "x(dv/dx) = F(v) − v": "x(dv/dx) = F(v) − v",

    // Homogeneous differential equations and the integrating facto > equation > dd
    "always separates into ∫ 1/(F(v) − v) dv = ∫ (1/x) dx": "항상 ∫ 1/(F(v) − v) dv = ∫ (1/x) dx 꼴의 변수분리형으로 바뀌어요",

    // Homogeneous differential equations and the integrating facto > h3
    "2. First-order linear differential equations and the integrating factor": "2. 1계 선형 미분방정식과 적분인자",

    // Homogeneous differential equations and the integrating facto > p
    "When a differential equation is linear in both <span class=\"chem\">dy/dx</span> and <i>y</i>, first divide by any coefficient in front of <span class=\"chem\">dy/dx</span> to put it into standard form:": "미분방정식이 <span class=\"chem\">dy/dx</span>와 <i>y</i>에 대해 모두 일차일 때는 먼저 <span class=\"chem\">dy/dx</span> 앞의 계수로 나누어 표준형으로 만들어요:",

    // Homogeneous differential equations and the integrating facto > p
    "<span class=\"chem\">dy/dx + P(x) y = Q(x)</span>.": "<span class=\"chem\">dy/dx + P(x) y = Q(x)</span>.",

    // Homogeneous differential equations and the integrating facto > p
    "Multiplying every term by the <dfn data-def=\"The function I(x) = e^{∫ P(x) dx} that turns the left-hand side of dy/dx + P(x)y = Q(x) into the exact product-rule derivative d/dx[I(x) y].\">integrating factor</dfn> <span class=\"chem\">I(x) = e^{int P(x) dx}</span> turns the left-hand side into a single product-rule derivative:": "모든 항에 <dfn data-def=\"The function I(x) = e^{∫ P(x) dx} that turns the left-hand side of dy/dx + P(x)y = Q(x) into the exact product-rule derivative d/dx[I(x) y].\">적분인자 <span class=\"en-term\">(integrating factor)</span></dfn> <span class=\"chem\">I(x) = e^{int P(x) dx}</span>를 곱하면 좌변이 하나의 곱의 미분 꼴로 바뀌어요:",

    // Homogeneous differential equations and the integrating facto > data-def attribute
    "The function I(x) = e^{∫ P(x) dx} that turns the left-hand side of dy/dx + P(x)y = Q(x) into the exact product-rule derivative d/dx[I(x) y].": "dy/dx + P(x)y = Q(x)의 좌변을 곱의 미분법 도함수 d/dx[I(x) y]로 바꾸어 주는 함수 I(x) = e^{∫ P(x) dx}입니다.",

    // Homogeneous differential equations and the integrating facto > equation > dd
    "coefficient of <i>y</i> (including its plus or minus sign!) after making the coefficient of dy/dx equal to 1": "dy/dx의 계수를 1로 만든 뒤 <i>y</i>의 계수 (부호까지 포함!)",

    // Homogeneous differential equations and the integrating facto > common mistake > p
    "<strong>Two classic integrating-factor traps:</strong>": "<strong>적분인자에서 자주 빠지는 두 가지 함정:</strong>",

    // Homogeneous differential equations and the integrating facto > common mistake > li
    "<strong>Forgetting to divide by the leading coefficient first:</strong> In <span class=\"chem\">x(dy/dx) - 2y = x^4</span>, you must divide by <i>x</i> to get <span class=\"chem\">dy/dx - (2/x)y = x^3</span>. Thus <span class=\"chem\">P(x) = -2/x</span>, and <span class=\"chem\">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span> (not <span class=\"chem\">e^{-2x}</span>!).": "<strong>최고차 계수로 먼저 나누는 것을 잊는 실수:</strong> <span class=\"chem\">x(dy/dx) - 2y = x^4</span>에서는 먼저 <i>x</i>로 나누어 <span class=\"chem\">dy/dx - (2/x)y = x^3</span>으로 만들어야 해요. 따라서 <span class=\"chem\">P(x) = -2/x</span>이고 <span class=\"chem\">I(x) = e^{int (-2/x) dx} = e^{-2 ln x} = e^{ln(x^{-2})} = x^{-2}</span>예요 (<span class=\"chem\">e^{-2x}</span>가 아니에요!).",

    // Homogeneous differential equations and the integrating facto > common mistake > li
    "<strong>Forgetting to divide the constant <span class=\"chem\">+ C</span> by <span class=\"chem\">I(x)</span>:</strong> Write <span class=\"chem\">+ C</span> immediately when integrating <span class=\"chem\">int I(x) Q(x) dx</span>, then divide the <em>entire</em> right-hand side (including <i>C</i>) by <span class=\"chem\">I(x)</span>.": "<strong>상수 <span class=\"chem\">+ C</span>를 <span class=\"chem\">I(x)</span>로 나누는 것을 잊는 실수:</strong> <span class=\"chem\">int I(x) Q(x) dx</span>를 적분할 때 즉시 <span class=\"chem\">+ C</span>를 쓰고, <i>C</i>를 포함한 우변 <em>전체</em>를 <span class=\"chem\">I(x)</span>로 나누세요.",

    // Homogeneous differential equations and the integrating facto > worked example > h3
    "Solving a first-order linear differential equation using an integrating factor": "적분인자를 이용해 1계 선형 미분방정식 풀기",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "Find the particular solution of the differential equation <span class=\"chem\">x (dy/dx) + 2y = 4x^2</span> (<span class=\"chem\">x &gt; 0</span>) given that <span class=\"chem\">y(1) = 3</span>. <strong>[6 marks]</strong>": "<span class=\"chem\">y(1) = 3</span>일 때 미분방정식 <span class=\"chem\">x (dy/dx) + 2y = 4x^2</span> (<span class=\"chem\">x &gt; 0</span>)의 특수해를 구하시오 (Find). <strong>[6 marks]</strong>",

    // Homogeneous differential equations and the integrating facto > worked example > data-title attribute
    "Divide by x to write the equation in standard form dy/dx + P(x)y = Q(x)": "x로 나누어 표준형 dy/dx + P(x)y = Q(x)로 만들기",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "The integrating factor formula requires the coefficient of dy/dx to be 1.": "적분인자 공식을 쓰려면 dy/dx의 계수가 1이어야 해요.",

    // Homogeneous differential equations and the integrating facto > worked example > maths line
    "<span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> + <span class=\"frac\"><span>2</span><span><i>x</i></span></span><i>y</i> = 4<i>x</i> (so <i>P</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span><i>x</i></span></span>, <i>Q</i>(<i>x</i>) = 4<i>x</i>) <b>[M1]</b>": "<span class=\"frac\"><span><i>dy</i></span><span><i>dx</i></span></span> + <span class=\"frac\"><span>2</span><span><i>x</i></span></span><i>y</i> = 4<i>x</i> (따라서 <i>P</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span><i>x</i></span></span>, <i>Q</i>(<i>x</i>) = 4<i>x</i>) <b>[M1]</b>",

    // Homogeneous differential equations and the integrating facto > worked example > data-title attribute
    "Calculate the integrating factor I(x)": "적분인자 I(x) 계산하기",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "Use exponent and log rules to simplify e^{2 ln x} to x².": "지수와 로그의 성질을 써서 e^{2 ln x}를 x²으로 간단히 해요.",

    // Homogeneous differential equations and the integrating facto > worked example > data-title attribute
    "Multiply by x², integrate both sides, and apply y(1) = 3": "x²을 곱해 양변을 적분하고 y(1) = 3 대입하기",

    // Homogeneous differential equations and the integrating facto > worked example > p
    "The left side collapses to d/dx(x²y). Integrate the right side and don’t forget + C.": "좌변이 d/dx(x²y)로 묶여요. 우변을 적분하고 + C를 빠뜨리지 마세요.",

    // Homogeneous differential equations and the integrating facto > worked example > maths line
    "Substitute <i>x</i> = 1, <i>y</i> = 3: (1)<sup>2</sup>(3) = 1<sup>4</sup> + <i>C</i> ⇒ <i>C</i> = 2 ⇒ <b><i>y</i> = <i>x</i><sup>2</sup> + <span class=\"frac\"><span>2</span><span><i>x</i><sup>2</sup></span></span></b> <b>[A1]</b>": "<i>x</i> = 1, <i>y</i> = 3 대입: (1)<sup>2</sup>(3) = 1<sup>4</sup> + <i>C</i> ⇒ <i>C</i> = 2 ⇒ <b><i>y</i> = <i>x</i><sup>2</sup> + <span class=\"frac\"><span>2</span><span><i>x</i><sup>2</sup></span></span></b> <b>[A1]</b>",

    // Homogeneous differential equations and the integrating facto > try it > p
    "Solve the differential equation <span class=\"chem\">x (dy/dx) - y = 3x^2</span> (<span class=\"chem\">x &gt; 0</span>) given that <span class=\"chem\">y(1) = 2</span>, and find the exact value of <span class=\"chem\">y(2)</span>.": "<span class=\"chem\">y(1) = 2</span>일 때 미분방정식 <span class=\"chem\">x (dy/dx) - y = 3x^2</span> (<span class=\"chem\">x &gt; 0</span>)을 풀고 <span class=\"chem\">y(2)</span>의 정확한 값을 구하시오 (Find).",

    // Homogeneous differential equations and the integrating facto > try it > li
    "Divide by <i>x</i>: <span class=\"chem\">dy/dx - (1/x)y = 3x</span>. The integrating factor is <span class=\"chem\">I(x) = e^{int (-1/x) dx} = e^{-ln x} = 1/x</span>.": "<i>x</i>로 나누면 <span class=\"chem\">dy/dx - (1/x)y = 3x</span>예요. 적분인자는 <span class=\"chem\">I(x) = e^{int (-1/x) dx} = e^{-ln x} = 1/x</span>예요.",

    // Homogeneous differential equations and the integrating facto > try it > li
    "Multiply by <span class=\"chem\">1/x</span>: <span class=\"chem\">d/dx(y / x) = 3 =&gt; y / x = 3x + C</span>. Use <span class=\"chem\">y(1) = 2</span> to find <i>C</i>, then evaluate <span class=\"chem\">y(2)</span>.": "<span class=\"chem\">1/x</span>을 곱하면 <span class=\"chem\">d/dx(y / x) = 3 =&gt; y / x = 3x + C</span>예요. <span class=\"chem\">y(1) = 2</span>를 이용해 <i>C</i>를 구한 뒤 <span class=\"chem\">y(2)</span>를 계산하세요.",

    // Maclaurin series expansions and differential equation series > data-toc attribute
    "Maclaurin series": "매클로린 급수",

    // Maclaurin series expansions and differential equation series > h2
    "Maclaurin series expansions and differential equation series": "매클로린 급수 전개와 미분방정식의 급수 해",

    // Maclaurin series expansions and differential equation series > p
    "A <dfn data-def=\"A power series expansion of a smooth function f(x) centred at x = 0, matching the function's value and all its derivatives at x = 0.\">Maclaurin series</dfn> approximates a smooth function <span class=\"chem\">f(x)</span> near <span class=\"chem\">x = 0</span> using a polynomial whose derivatives at <span class=\"chem\">x = 0</span> match those of <span class=\"chem\">f(x)</span> order by order:": "<dfn data-def=\"A power series expansion of a smooth function f(x) centred at x = 0, matching the function's value and all its derivatives at x = 0.\">매클로린 급수 <span class=\"en-term\">(Maclaurin series)</span></dfn>는 <span class=\"chem\">x = 0</span>에서의 함숫값과 모든 고계도함수 값이 <span class=\"chem\">f(x)</span>와 차수별로 일치하는 다항식을 이용해 <span class=\"chem\">x = 0</span> 근방에서 매끄러운 함수 <span class=\"chem\">f(x)</span>를 근사해요:",

    // Maclaurin series expansions and differential equation series > data-def attribute
    "A power series expansion of a smooth function f(x) centred at x = 0, matching the function's value and all its derivatives at x = 0.": "x = 0을 중심으로 전개하여 x = 0에서의 함숫값과 모든 도함수 값이 f(x)와 일치하도록 만든 멱급수입니다.",

    // Maclaurin series expansions and differential equation series > equation > dd
    "<i>n</i>-th derivative of <i>f</i> evaluated at <i>x</i> = 0": "<i>x</i> = 0에서의 <i>f</i>의 <i>n</i>계도함수 값",

    // Maclaurin series expansions and differential equation series > equation > dd
    "factorial 1 × 2 × … × <i>n</i> (with 0! = 1)": "계승 1 × 2 × … × <i>n</i> (단, 0! = 1)",

    // Maclaurin series expansions and differential equation series > formula booklet note > p
    "<strong>Standard Maclaurin expansions in your Formula Booklet (Section 5.19 &amp; 1.10):</strong>": "<strong>공식집(Formula booklet)에 수록된 기본 매클로린 급수 (5.19절 &amp; 1.10절):</strong>",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">e^x = 1 + x + x^2/2! + x^3/3! + ...</span> (valid for all <span class=\"chem\">x in R</span>)": "<span class=\"chem\">e^x = 1 + x + x^2/2! + x^3/3! + ...</span> (모든 <span class=\"chem\">x in R</span>에서 성립)",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">sin x = x - x^3/3! + x^5/5! - ...</span> (odd powers, alternating signs, all <span class=\"chem\">x in R</span>)": "<span class=\"chem\">sin x = x - x^3/3! + x^5/5! - ...</span> (홀수 차수, 부호 교대, 모든 <span class=\"chem\">x in R</span>)",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">cos x = 1 - x^2/2! + x^4/4! - ...</span> (even powers, alternating signs, all <span class=\"chem\">x in R</span>)": "<span class=\"chem\">cos x = 1 - x^2/2! + x^4/4! - ...</span> (짝수 차수, 부호 교대, 모든 <span class=\"chem\">x in R</span>)",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">ln(1 + x) = x - x^2/2 + x^3/3 - x^4/4 + ...</span> (divides by <i>n</i>, <strong>not</strong> <span class=\"chem\">n!</span>; valid for <span class=\"chem\">-1 &lt; x &lt;= 1</span>)": "<span class=\"chem\">ln(1 + x) = x - x^2/2 + x^3/3 - x^4/4 + ...</span> (<span class=\"chem\">n!</span>이 <strong>아니라</strong> <i>n</i>으로 나눔; <span class=\"chem\">-1 &lt; x &lt;= 1</span>에서 성립)",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span> (odd powers divided by <span class=\"chem\">2k + 1</span>, <strong>not</strong> factorials; valid for <span class=\"chem\">|x| &lt;= 1</span>)": "<span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span> (계승이 <strong>아니라</strong> 홀수 차수를 <span class=\"chem\">2k + 1</span>로 나눔; <span class=\"chem\">|x| &lt;= 1</span>에서 성립)",

    // Maclaurin series expansions and differential equation series > formula booklet note > li
    "<span class=\"chem\">(1 + x)^p = 1 + px + p(p - 1)/2! x^2 + ...</span> (from Section 1.10; valid for <span class=\"chem\">|x| &lt; 1</span>)": "<span class=\"chem\">(1 + x)^p = 1 + px + p(p - 1)/2! x^2 + ...</span> (1.10절 수록; <span class=\"chem\">|x| &lt; 1</span>에서 성립)",

    // Maclaurin series expansions and differential equation series > h3
    "Combining series and developing Maclaurin series from differential equations": "급수의 조합과 미분방정식으로부터 매클로린 급수 구하기",

    // Maclaurin series expansions and differential equation series > p
    "You can generate new Maclaurin series in four fast ways:": "다음 4가지 빠른 방법으로 새로운 매클로린 급수를 만들 수 있어요:",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Substitution:</strong> Replace <i>x</i> with <span class=\"chem\">-x^2</span> in <span class=\"chem\">e^x</span> to get <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2! - x^6/3! + ...</span> immediately.": "<strong>대입:</strong> <span class=\"chem\">e^x</span>에서 <i>x</i> 대신 <span class=\"chem\">-x^2</span>을 대입하면 바로 <span class=\"chem\">e^{-x^2} = 1 - x^2 + x^4/2! - x^6/3! + ...</span>을 얻어요.",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Multiplication:</strong> Multiply the truncated polynomials for <span class=\"chem\">f(x)</span> and <span class=\"chem\">g(x)</span> and collect like powers of <i>x</i> up to the required degree.": "<strong>곱셈:</strong> <span class=\"chem\">f(x)</span>와 <span class=\"chem\">g(x)</span>의 다항식 근사를 곱한 뒤 필요한 차수까지 <i>x</i>의 동류항을 모아요.",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Term-by-term differentiation or integration:</strong> Differentiating <span class=\"chem\">sin x</span> gives <span class=\"chem\">cos x</span>; integrating <span class=\"chem\">1/(1 + x^2) = 1 - x^2 + x^4 - ...</span> gives <span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span>.": "<strong>항별 미분 또는 적분:</strong> <span class=\"chem\">sin x</span>를 미분하면 <span class=\"chem\">cos x</span>가 되고, <span class=\"chem\">1/(1 + x^2) = 1 - x^2 + x^4 - ...</span>을 적분하면 <span class=\"chem\">arctan x = x - x^3/3 + x^5/5 - ...</span>이 돼요.",

    // Maclaurin series expansions and differential equation series > li
    "<strong>Implicit differentiation of a differential equation (Paper 3 favourite!):</strong> Given <span class=\"chem\">dy/dx = f(x, y)</span> and <span class=\"chem\">y(0) = y_0</span>, evaluate <span class=\"chem\">y'(0) = f(0, y_0)</span> directly from the DE, then differentiate the DE implicitly using the product and chain rules to find <span class=\"chem\">y''(0)</span>, <span class=\"chem\">y'''(0)</span>, and so on.": "<strong>미분방정식의 음함수 미분 (Paper 3 단골 출제!):</strong> <span class=\"chem\">dy/dx = f(x, y)</span>와 <span class=\"chem\">y(0) = y_0</span>이 주어지면 미분방정식에서 바로 <span class=\"chem\">y'(0) = f(0, y_0)</span>을 구한 뒤, 곱의 미분법과 연쇄법칙으로 음함수 미분을 반복해 <span class=\"chem\">y''(0)</span>, <span class=\"chem\">y'''(0)</span> 등을 차례로 구해요.",

    // Maclaurin series expansions and differential equation series > not needed for IB > p
    "<strong>Not needed for IB Math AA HL:</strong>": "<strong>IB Math AA HL 시험 범위 외:</strong>",

    // Maclaurin series expansions and differential equation series > not needed for IB > li
    "<strong>Second-order differential equations</strong> (<span class=\"chem\">a y'' + b y' + c y = f(x)</span>), characteristic auxiliary equations, and coupled linear systems (<span class=\"chem\">dx/dt = ax + by</span>) are <strong>not</strong> in the IB Math AA HL syllabus.": "<strong>2계 미분방정식</strong> (<span class=\"chem\">a y'' + b y' + c y = f(x)</span>), 특성방정식, 연립 선형 미분방정식 (<span class=\"chem\">dx/dt = ax + by</span>)은 IB Math AA HL 교육과정에 <strong>포함되지 않아요</strong>.",

    // Maclaurin series expansions and differential equation series > not needed for IB > li
    "<strong>General Taylor series centred at <span class=\"chem\">x = a != 0</span></strong>, formal ratio/root tests for radius of convergence, and the Lagrange error remainder bound are <strong>not</strong> required in IB Math AA HL (only Maclaurin series centred at <span class=\"chem\">x = 0</span> are examined).": "<strong><span class=\"chem\">x = a != 0</span> 중심의 일반 테일러 급수</strong>, 수렴반지름을 구하는 비판정법·근판정법, 라그랑주 나머지 오차 한계는 IB Math AA HL에서 <strong>다루지 않아요</strong> (<span class=\"chem\">x = 0</span> 중심의 매클로린 급수만 출제돼요).",

    // Maclaurin series expansions and differential equation series > widget > data-title attribute
    "Maclaurin polynomial approximation studio": "매클로린 다항식 근사 스튜디오",

    // Maclaurin series expansions and differential equation series > widget > data-kicker attribute
    "AHL 5.19 · Interactive": "AHL 5.19 · 인터랙티브",

    // Maclaurin series expansions and differential equation series > widget > figcaption
    "As the degree <i>n</i> increases, the Maclaurin polynomial <span class=\"chem\">P_n(x)</span> matches higher derivatives at <span class=\"chem\">x = 0</span> and hugs <span class=\"chem\">f(x)</span> over a wider interval. Notice that <span class=\"chem\">ln(1 + x)</span> and <span class=\"chem\">(1 + x)^{-1}</span> only converge inside <span class=\"chem\">|x| &lt; 1</span> because of the vertical asymptote at <span class=\"chem\">x = -1</span>.": "차수 <i>n</i>이 커질수록 매클로린 다항식 <span class=\"chem\">P_n(x)</span>는 <span class=\"chem\">x = 0</span>에서 더 높은 계수의 도함수까지 일치하며 더 넓은 구간에서 <span class=\"chem\">f(x)</span>에 밀착해요. <span class=\"chem\">ln(1 + x)</span>와 <span class=\"chem\">(1 + x)^{-1}</span>은 <span class=\"chem\">x = -1</span>의 수직점근선 때문에 <span class=\"chem\">|x| &lt; 1</span> 안에서만 수렴하는 것을 확인해 보세요.",

    // Maclaurin series expansions and differential equation series > worked example > h3
    "Finding a Maclaurin series directly from a non-linear differential equation": "비선형 미분방정식에서 직접 매클로린 급수 구하기",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Let <span class=\"chem\">y = f(x)</span> be the solution to the differential equation <span class=\"chem\">dy/dx = x + y^2</span> with initial condition <span class=\"chem\">y(0) = 1</span>. Find the Maclaurin series for <span class=\"chem\">y</span> up to and including the term in <span class=\"chem\">x^3</span>. <strong>[6 marks]</strong>": "<span class=\"chem\">y = f(x)</span>가 초기조건 <span class=\"chem\">y(0) = 1</span>을 만족하는 미분방정식 <span class=\"chem\">dy/dx = x + y^2</span>의 해라 하자. <span class=\"chem\">y</span>의 매클로린 급수를 <span class=\"chem\">x^3</span>항까지 구하시오 (Find). <strong>[6 marks]</strong>",

    // Maclaurin series expansions and differential equation series > worked example > data-title attribute
    "Find y(0) and y′(0) directly from the differential equation": "미분방정식에서 바로 y(0)과 y′(0) 구하기",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Substitute x = 0 and y(0) = 1 into dy/dx = x + y².": "dy/dx = x + y²에 x = 0과 y(0) = 1을 대입해요.",

    // Maclaurin series expansions and differential equation series > worked example > maths line
    "<i>y</i>(0) = 1, and <i>y</i>′(0) = 0 + (1)<sup>2</sup> = 1 <b>[A1]</b>": "<i>y</i>(0) = 1이고 <i>y</i>′(0) = 0 + (1)<sup>2</sup> = 1 <b>[A1]</b>",

    // Maclaurin series expansions and differential equation series > worked example > data-title attribute
    "Differentiate the ODE implicitly to find y″(0) and y‴(0)": "미분방정식을 음함수 미분해 y″(0)과 y‴(0) 구하기",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Use the chain rule d/dx(y²) = 2y y′, and then the product rule on 2y y′.": "연쇄법칙 d/dx(y²) = 2y y′을 쓴 다음, 2y y′에 곱의 미분법을 적용해요.",

    // Maclaurin series expansions and differential equation series > worked example > data-title attribute
    "Substitute the derivatives at x = 0 into the Maclaurin formula": "x = 0에서의 도함수 값들을 매클로린 공식에 대입하기",

    // Maclaurin series expansions and differential equation series > worked example > p
    "Divide by 2! = 2 and 3! = 6 and simplify the fractions.": "2! = 2와 3! = 6으로 나누고 분수를 약분해요.",

    // Maclaurin series expansions and differential equation series > try it > p
    "In the Maclaurin series expansion of <span class=\"chem\">f(x) = e^{2x} cos(3x)</span>, find the exact coefficient of <span class=\"chem\">x^2</span>.": "<span class=\"chem\">f(x) = e^{2x} cos(3x)</span>의 매클로린 급수 전개에서 <span class=\"chem\">x^2</span>의 정확한 계수를 구하시오 (Find).",

    // Maclaurin series expansions and differential equation series > try it > li
    "Write out the Booklet expansions up to <span class=\"chem\">x^2</span>: <span class=\"chem\">e^{2x} = 1 + 2x + (2x)^2/2! + ... = 1 + 2x + 2x^2 + ...</span> and <span class=\"chem\">cos(3x) = 1 - (3x)^2/2! + ... = 1 - (9/2)x^2 + ...</span>.": "공식집의 전개를 <span class=\"chem\">x^2</span>항까지 적으세요: <span class=\"chem\">e^{2x} = 1 + 2x + (2x)^2/2! + ... = 1 + 2x + 2x^2 + ...</span>, <span class=\"chem\">cos(3x) = 1 - (3x)^2/2! + ... = 1 - (9/2)x^2 + ...</span>.",

    // Maclaurin series expansions and differential equation series > try it > li
    "Multiply <span class=\"chem\">(1 + 2x + 2x^2)(1 - (9/2)x^2)</span> and collect the <span class=\"chem\">x^2</span> terms: <span class=\"chem\">1(-9/2) + 2(1)</span>.": "<span class=\"chem\">(1 + 2x + 2x^2)(1 - (9/2)x^2)</span>을 전개해 <span class=\"chem\">x^2</span>항을 모으세요: <span class=\"chem\">1(-9/2) + 2(1)</span>.",

    // Maclaurin series expansions and differential equation series > try it > maths line
    "Coefficient of <i>x</i><sup>2</sup> = 2 − <span class=\"frac\"><span>9</span><span>2</span></span> = <b>−<span class=\"frac\"><span>5</span><span>2</span></span> = −2.5</b>": "<i>x</i><sup>2</sup>의 계수 = 2 − <span class=\"frac\"><span>9</span><span>2</span></span> = <b>−<span class=\"frac\"><span>5</span><span>2</span></span> = −2.5</b>",

    // Quick practice > data-toc attribute
    "Practice": "연습 문제",

    // Quick practice > h2
    "Quick practice": "빠른 연습 문제",

    // widget string (assets/js/widgets-t5-4.js)
    "Differential equation": "미분방정식",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = x + y": "dy/dx = x + y",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = 0.5 x y": "dy/dx = 0.5 x y",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = 0.6 y (3 − y)": "dy/dx = 0.6 y (3 − y)",

    // widget string (assets/js/widgets-t5-4.js)
    "dy/dx = cos(x) − 0.5y": "dy/dx = cos(x) − 0.5y",

    // widget string (assets/js/widgets-t5-4.js)
    "Step size h": "단계 크기 h",

    // widget string (assets/js/widgets-t5-4.js)
    "Initial condition y(0)": "초기조건 y(0)",

    // widget string (assets/js/widgets-t5-4.js)
    "Steps to x = 1.5": "x = 1.5까지의 단계 수",

    // widget string (assets/js/widgets-t5-4.js)
    "Euler estimate y_n(1.5)": "오일러 근삿값 y_n(1.5)",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact value y(1.5)": "정확한 값 y(1.5)",

    // widget string (assets/js/widgets-t5-4.js)
    "Global truncation error": "전체 절단 오차",

    // widget string (assets/js/widgets-t5-4.js)
    "Slope field, exact solution curve, and Euler polygon": "기울기장, 정확한 해곡선 및 오일러 꺾은선",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact solution y(x)": "정확한 해 y(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Euler polygon (h =": "오일러 꺾은선 (h =",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact": "정확한 값",

    // widget string (assets/js/widgets-t5-4.js)
    "Euler": "오일러 근사",

    // widget string (assets/js/widgets-t5-4.js)
    "Function f(x)": "함수 f(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "f(x) = sin(x)": "f(x) = sin(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "f(x) = cos(x)": "f(x) = cos(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "f(x) = e^x": "f(x) = e^x",

    // widget string (assets/js/widgets-t5-4.js)
    "f(x) = ln(1 + x) (|x| ≤ 1)": "f(x) = ln(1 + x) (|x| ≤ 1)",

    // widget string (assets/js/widgets-t5-4.js)
    "f(x) = (1 + x)⁻¹ (|x| < 1)": "f(x) = (1 + x)⁻¹ (|x| < 1)",

    // widget string (assets/js/widgets-t5-4.js)
    "Maclaurin degree n": "매클로린 차수 n",

    // widget string (assets/js/widgets-t5-4.js)
    "Test point x": "확인할 점 x",

    // widget string (assets/js/widgets-t5-4.js)
    "Polynomial P_n(x)": "다항식 P_n(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Exact f(x)": "정확한 값 f(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Approx P_n(x)": "근삿값 P_n(x)",

    // widget string (assets/js/widgets-t5-4.js)
    "Error |f(x) − P_n(x)|": "오차 |f(x) − P_n(x)|",

    // widget string (assets/js/widgets-t5-4.js)
    "Function f(x) and its degree-n Maclaurin polynomial P_n(x)": "함수 f(x)와 n차 매클로린 다항식 P_n(x)",

  }
});
