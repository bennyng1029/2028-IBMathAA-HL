/* t5-3 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't5-3', {
  strings: {

    // page title (browser tab)
    "5.3 First principles, L’Hôpital, implicit, parts and volumes | Analysis Lab": "5.3 도함수의 정의, 로피탈의 정리, 음함수 미분, 부분적분과 회전체의 부피 | Analysis Lab",

    // First principles, L’Hôpital, implicit, parts and volumes > page header > p
    "Topic 5.3 · AHL 5.12–5.17": "Topic 5.3 · AHL 5.12–5.17",

    // First principles, L’Hôpital, implicit, parts and volumes > page header > h1
    "First principles, L’Hôpital, implicit, parts and volumes": "도함수의 정의, 로피탈의 정리, 음함수 미분, 부분적분과 회전체의 부피",

    // First principles, L’Hôpital, implicit, parts and volumes > page header > span
    "How do local linear approximations unlock indeterminate limits, implicit curves, and the exact volume of three-dimensional solids of revolution?": "국소 선형 근사가 어떻게 부정형 극한, 음함수 곡선, 그리고 3차원 회전체의 정확한 부피를 풀어내는지 알아볼까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 목표",

    // What you need to be able to do > h2
    "What you need to be able to do": "이 단원에서 할 수 있어야 하는 것",

    // What you need to be able to do > checklist > Additional HL > span
    "Understand continuity and differentiability, and find derivatives from first principles <span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span> and higher derivatives <span class=\"chem\">f^{(n)}(x)</span>.": "연속성과 미분가능성을 이해하고, 도함수의 정의 <span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span>를 이용한 미분과 고계도함수 <span class=\"chem\">f^{(n)}(x)</span>를 구해요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Evaluate indeterminate limits of the form <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span> using L’Hôpital’s rule, including repeated applications and algebraic rearrangement.": "로피탈의 정리를 사용해 <span class=\"chem\">0/0</span> 또는 <span class=\"chem\">infty/infty</span> 꼴의 부정형 극한(반복 적용 및 식 변형 포함)을 계산해요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Differentiate implicit relations <span class=\"chem\">F(x, y) = 0</span> to find gradients, tangents, horizontal (<span class=\"chem\">dy/dx = 0</span>) and vertical (<span class=\"chem\">dx/dy = 0</span>) tangents, and solve related rates problems <span class=\"chem\">dy/dt = (dy/dx)(dx/dt)</span>.": "음함수 <span class=\"chem\">F(x, y) = 0</span>를 미분해 기울기, 접선, 수평 접선(<span class=\"chem\">dy/dx = 0</span>)과 수직 접선(<span class=\"chem\">dx/dy = 0</span>)을 구하고 관련 변화율 문제 <span class=\"chem\">dy/dt = (dy/dx)(dx/dt)</span>를 풀어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Differentiate and integrate reciprocal trig (<span class=\"chem\">tan x, sec x, cosec x, cot x</span>), general exponential/log (<span class=\"chem\">a^x, log_a x</span>), and inverse trig functions (<span class=\"chem\">arcsin x, arccos x, arctan x</span>).": "역수 삼각함수(<span class=\"chem\">tan x, sec x, cosec x, cot x</span>), 일반 지수·로그함수(<span class=\"chem\">a^x, log_a x</span>), 역삼각함수(<span class=\"chem\">arcsin x, arccos x, arctan x</span>)를 미분하고 적분해요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Integrate using formal substitution <span class=\"chem\">u = g(x)</span> (changing definite limits), integration by parts <span class=\"chem\">int u dv = uv - int v du</span> (including repeated and cyclic parts), partial fractions, and double-angle identities.": "치환적분법 <span class=\"chem\">u = g(x)</span>(정적분 구간 변환 포함), 부분적분법 <span class=\"chem\">int u dv = uv - int v du</span>(반복 및 순환 형태 포함), 부분분수 분해, 배각의 공식을 이용해 적분해요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Calculate areas bounded by the <i>y</i>-axis <span class=\"chem\">int_c^d |x| dy</span> and volumes of revolution about the <i>x</i>-axis <span class=\"chem\">pi int_a^b y^2 dx</span> or <i>y</i>-axis <span class=\"chem\">pi int_c^d x^2 dy</span>, including hollow washers between two curves.": "<i>y</i>축으로 둘러싸인 넓이 <span class=\"chem\">int_c^d |x| dy</span>와 <i>x</i>축 둘레 회전체의 부피 <span class=\"chem\">pi int_a^b y^2 dx</span>, <i>y</i>축 둘레 회전체의 부피 <span class=\"chem\">pi int_c^d x^2 dy</span>(두 곡선 사이의 속이 빈 고리 모양 포함)를 계산해요.",

    // Question decoder: Master integration &amp; advanced differen > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: Master integration &amp; advanced differen > h2
    "Question decoder: Master integration &amp; advanced differentiation classifier": "문제 디코더: 적분 및 심화 미분 해법 분류표",

    // Question decoder: Master integration &amp; advanced differen > p
    "In HL calculus exams, no question tells you <em>which</em> integration or differentiation rule to apply. Use the two decision tables below to spot the exact method within five seconds.": "HL 미적분 시험에서는 <em>어떤</em> 적분법이나 미분법을 써야 하는지 문제에서 알려 주지 않아요. 아래 두 가지 판별표를 보고 5초 안에 정확한 해법을 찾아내세요.",

    // Question decoder: Master integration &amp; advanced differen > table > caption
    "Master integration classifier — how to spot which integration technique to use": "적분 해법 총정리 — 어떤 적분법을 쓸지 한눈에 파악하기",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Integrand pattern you see": "피적분함수의 꼴",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Technique &amp; Formula Booklet link": "적분 기법 및 공식집(Formula booklet) 연계",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Key setup &amp; Paper 1 vs Paper 2 strategy": "핵심 식 세우기 및 Paper 1 vs Paper 2 전략",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "1. Standard AHL booklet forms:<br><span class=\"chem\">1/(x^2 + a^2)</span>, <span class=\"chem\">1/sqrt(a^2 - x^2)</span>, or <span class=\"chem\">tan x = sin x / cos x</span>": "1. AHL 공식집 기본 꼴:<br><span class=\"chem\">1/(x^2 + a^2)</span>, <span class=\"chem\">1/sqrt(a^2 - x^2)</span>, 또는 <span class=\"chem\">tan x = sin x / cos x</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Direct Booklet / Log inspection</strong> (AHL 5.15)<br><span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span><br><span class=\"chem\">int 1/sqrt(a^2 - x^2) dx = arcsin(x/a) + C</span><br><span class=\"chem\">int tan x dx = -ln|cos x| + C = ln|sec x| + C</span>": "<strong>공식집 직접 적용 / 로그 적분</strong> (AHL 5.15)<br><span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span><br><span class=\"chem\">int 1/sqrt(a^2 - x^2) dx = arcsin(x/a) + C</span><br><span class=\"chem\">int tan x dx = -ln|cos x| + C = ln|sec x| + C</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "If the denominator is a quadratic <span class=\"chem\">x^2 + bx + c</span> with <strong>no <i>x</i> on top</strong> and negative discriminant, <strong>complete the square</strong> into <span class=\"chem\">(x + h)^2 + a^2</span> and apply the <span class=\"chem\">arctan</span> formula. Notice <span class=\"chem\">arcsin(x/a)</span> has <strong>no</strong> <span class=\"chem\">1/a</span> in front!": "분모가 판별식이 음수인 이차식 <span class=\"chem\">x^2 + bx + c</span>이고 <strong>분자에 <i>x</i>가 없으면</strong> <span class=\"chem\">(x + h)^2 + a^2</span> 꼴로 <strong>완전제곱식으로 변형</strong>한 뒤 <span class=\"chem\">arctan</span> 공식을 쓰세요. <span class=\"chem\">arcsin(x/a)</span> 앞에는 <span class=\"chem\">1/a</span>가 붙지 <strong>않는다</strong>는 점에 주의하세요!",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "2. Composite function times inner derivative:<br><span class=\"chem\">int f(g(x)) g'(x) dx</span> or <span class=\"chem\">int g'(x)/g(x) dx</span>": "2. 합성함수와 속함수의 도함수의 곱:<br><span class=\"chem\">int f(g(x)) g'(x) dx</span> 또는 <span class=\"chem\">int g'(x)/g(x) dx</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Formal substitution <span class=\"chem\">u = g(x)</span></strong> (AHL 5.16)<br>Replace <span class=\"chem\">g'(x) dx = du</span>.<br>Special case: <span class=\"chem\">int g'(x)/g(x) dx = ln|g(x)| + C</span>.": "<strong>치환적분법 <span class=\"chem\">u = g(x)</span></strong> (AHL 5.16)<br><span class=\"chem\">g'(x) dx = du</span>로 바꿔요.<br>특수한 경우: <span class=\"chem\">int g'(x)/g(x) dx = ln|g(x)| + C</span>.",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Paper 1 definite integrals</strong>: Always transform the limits <span class=\"chem\">x = a -&gt; u = g(a)</span> and <span class=\"chem\">x = b -&gt; u = g(b)</span> immediately so you never have to substitute back to <i>x</i>.": "<strong>Paper 1 정적분</strong>: 적분 구간을 바로 <span class=\"chem\">x = a -&gt; u = g(a)</span>, <span class=\"chem\">x = b -&gt; u = g(b)</span>로 변환하면 다시 <i>x</i>로 되돌려 대입할 필요가 없어요.",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "3. Rational fraction with factorable quadratic denominator:<br><span class=\"chem\">int (px + q)/((x - a)(x - b)) dx</span>": "3. 분모가 인수분해되는 유리함수:<br><span class=\"chem\">int (px + q)/((x - a)(x - b)) dx</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Partial fractions</strong> (AHL 1.11 + 5.16)<br>Split into <span class=\"chem\">int (A/(x - a) + B/(x - b)) dx</span><br><span class=\"chem\">= A ln|x - a| + B ln|x - b| + C</span>.": "<strong>부분분수 분해</strong> (AHL 1.11 + 5.16)<br><span class=\"chem\">int (A/(x - a) + B/(x - b)) dx</span>로 쪼개면<br><span class=\"chem\">= A ln|x - a| + B ln|x - b| + C</span>예요.",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "If the degree of the numerator is ≥ the denominator (e.g. <span class=\"chem\">x^2/(x^2 - 1)</span>), perform <strong>polynomial long division</strong> (or algebraic splitting) first!": "분자의 차수가 분모의 차수 이상이면(예: <span class=\"chem\">x^2/(x^2 - 1)</span>), 먼저 <strong>다항식의 나눗셈</strong>(또는 식 분리)을 해야 해요!",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "4. Product of two different families (<span class=\"chem\">x^n e^x</span>, <span class=\"chem\">x^n sin x</span>, <span class=\"chem\">x^n ln x</span>) or lone <span class=\"chem\">ln x</span>, <span class=\"chem\">arcsin x</span>, <span class=\"chem\">arctan x</span>": "4. 서로 다른 두 함수족의 곱(<span class=\"chem\">x^n e^x</span>, <span class=\"chem\">x^n sin x</span>, <span class=\"chem\">x^n ln x</span>) 또는 단독 <span class=\"chem\">ln x</span>, <span class=\"chem\">arcsin x</span>, <span class=\"chem\">arctan x</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Integration by parts</strong> (AHL 5.16)<br><span class=\"chem\">int u (dv/dx) dx = uv - int v (du/dx) dx</span><br>Choose <i>u</i> using <strong>LIATE</strong> priority: <b>L</b>og, <b>I</b>nverse trig, <b>A</b>lgebraic (<span class=\"chem\">x^n</span>), <b>T</b>rig, <b>E</b>xponential.": "<strong>부분적분법</strong> (AHL 5.16)<br><span class=\"chem\">int u (dv/dx) dx = uv - int v (du/dx) dx</span><br><strong>LIATE</strong> 순서로 <i>u</i>를 정해요: <b>L</b>og(로그), <b>I</b>nverse trig(역삼각), <b>A</b>lgebraic(다항 <span class=\"chem\">x^n</span>), <b>T</b>rig(삼각), <b>E</b>xponential(지수).",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "For lone <span class=\"chem\">int ln x dx</span> or <span class=\"chem\">int arctan x dx</span>, choose <span class=\"chem\">u = ln x</span> (or <span class=\"chem\">arctan x</span>) and <span class=\"chem\">dv/dx = 1</span> (so <span class=\"chem\">v = x</span>).<br>For cyclic <span class=\"chem\">I = int e^{ax} sin(bx) dx</span>, integrate by parts <strong>twice</strong> with the same family choice and solve the linear equation for <i>I</i>.": "단독 <span class=\"chem\">int ln x dx</span>나 <span class=\"chem\">int arctan x dx</span>는 <span class=\"chem\">u = ln x</span>(또는 <span class=\"chem\">arctan x</span>), <span class=\"chem\">dv/dx = 1</span> (<span class=\"chem\">v = x</span>)로 잡아요.<br>순환형 <span class=\"chem\">I = int e^{ax} sin(bx) dx</span>는 같은 기준으로 부분적분을 <strong>두 번</strong> 반복한 뒤 <i>I</i>에 대한 일차방정식으로 풀어요.",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "5. Even power of sine or cosine:<br><span class=\"chem\">int sin^2(kx) dx</span> or <span class=\"chem\">int cos^2(kx) dx</span>": "5. 사인·코사인의 짝수 제곱:<br><span class=\"chem\">int sin^2(kx) dx</span> 또는 <span class=\"chem\">int cos^2(kx) dx</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Double-angle identity</strong> (SL 3.6 + AHL 5.16)<br><span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span><br><span class=\"chem\">sin^2 x = (1 - cos 2x)/2</span>": "<strong>배각의 공식</strong> (SL 3.6 + AHL 5.16)<br><span class=\"chem\">cos^2 x = (1 + cos 2x)/2</span><br><span class=\"chem\">sin^2 x = (1 - cos 2x)/2</span>",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Essential on Paper 1 whenever finding the volume of revolution <span class=\"chem\">pi int y^2 dx</span> of <span class=\"chem\">y = sin x</span> or <span class=\"chem\">y = cos x</span>!": "Paper 1에서 <span class=\"chem\">y = sin x</span>나 <span class=\"chem\">y = cos x</span>의 회전체 부피 <span class=\"chem\">pi int y^2 dx</span>를 구할 때 반드시 쓰여요!",

    // Question decoder: Master integration &amp; advanced differen > table > caption
    "Advanced differentiation &amp; limits decoder": "심화 미분 및 극한 문제 디코더",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "What it means (formula &amp; setup)": "의미 (공식 및 식 세우기)",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Crucial markscheme checkpoint": "핵심 채점 기준 체크포인트",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "“Differentiate <span class=\"chem\">f(x)</span> from first principles”": "“<span class=\"chem\">f(x)</span>를 도함수의 정의를 이용해 미분하시오 (from first principles)”",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Write <span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span>, expand, cancel every term without <i>h</i>, divide by <i>h</i>, then evaluate as <span class=\"chem\">h -&gt; 0</span>.": "<span class=\"chem\">f'(x) = lim_{h-&gt;0} (f(x + h) - f(x))/h</span>를 쓰고 전개한 뒤, <i>h</i>가 없는 항을 소거하고 <i>h</i>로 나눈 다음 <span class=\"chem\">h -&gt; 0</span> 극한을 계산해요.",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Keep writing <span class=\"chem\">lim_{h-&gt;0}</span> on <strong>every line</strong> until you actually substitute <span class=\"chem\">h = 0</span>. Dropping the limit notation early loses the final reasoning mark.": "실제로 <span class=\"chem\">h = 0</span>을 대입하기 전까지는 <strong>매 줄마다</strong> <span class=\"chem\">lim_{h-&gt;0}</span> 기호를 계속 써야 해요. 극한 기호를 일찍 빼먹으면 마지막 논리 점수(R1)를 잃어요.",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "“Find <span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span>”": "“<span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span>를 구하시오 (Find)”",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "First substitute <span class=\"chem\">x = a</span>. Only if you get the indeterminate form <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span>, apply <strong>L’Hôpital’s rule</strong>: <span class=\"chem\">lim_{x-&gt;a} f'(x)/g'(x)</span>.": "먼저 <span class=\"chem\">x = a</span>를 대입해 보세요. <span class=\"chem\">0/0</span> 또는 <span class=\"chem\">infty/infty</span> 부정형이 될 때만 <strong>로피탈의 정리</strong> <span class=\"chem\">lim_{x-&gt;a} f'(x)/g'(x)</span>를 적용해요.",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "Explicitly state <em>“Indeterminate form 0/0, apply L’Hôpital’s rule”</em>. Differentiate numerator and denominator <strong>separately</strong>—do NOT use the quotient rule!": "<em>“0/0 부정형이므로 로피탈의 정리를 적용한다 (Indeterminate form 0/0, apply L’Hôpital’s rule)”</em>라고 명시하세요. 분자와 분모를 <strong>각각 따로</strong> 미분해야 하며, 몫의 미분법을 쓰면 절대 안 돼요!",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "Equation with <i>x</i> and <i>y</i> mixed, e.g. <span class=\"chem\">x^2 + xy + y^3 = 7</span>": "<i>x</i>와 <i>y</i>가 섞인 방정식 (예: <span class=\"chem\">x^2 + xy + y^3 = 7</span>)",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Implicit differentiation</strong>: differentiate every term with respect to <i>x</i>. Multiply every <i>y</i>-derivative by <span class=\"chem\">dy/dx</span> (chain rule), and use the product rule on <span class=\"chem\">xy</span>.": "<strong>음함수의 미분법</strong>: 모든 항을 <i>x</i>에 대해 미분해요. <i>y</i>를 미분할 때마다 <span class=\"chem\">dy/dx</span>를 곱하고(연쇄법칙), <span class=\"chem\">xy</span>에는 곱의 미분법을 적용해요.",

    // Question decoder: Master integration &amp; advanced differen > table > li
    "Horizontal tangent (stationary point): set numerator of <span class=\"chem\">dy/dx</span> to <span class=\"chem\">0</span>.": "수평 접선(정류점): <span class=\"chem\">dy/dx</span>의 분자를 <span class=\"chem\">0</span>으로 놓아요.",

    // Question decoder: Master integration &amp; advanced differen > table > li
    "Vertical tangent (parallel to <i>y</i>-axis): set denominator of <span class=\"chem\">dy/dx</span> to <span class=\"chem\">0</span> (i.e. <span class=\"chem\">dx/dy = 0</span>).": "수직 접선(<i>y</i>축에 평행): <span class=\"chem\">dy/dx</span>의 분모를 <span class=\"chem\">0</span>(즉, <span class=\"chem\">dx/dy = 0</span>)으로 놓아요.",

    // Question decoder: Master integration &amp; advanced differen > table > th
    "“Water is poured at a constant rate of <span class=\"unit\">5 cm3 s-1</span>… find the rate at which the height is increasing”": "“물이 <span class=\"unit\">5 cm3 s-1</span>의 일정한 비율로 들어갈 때… 높이가 증가하는 비율을 구하시오”",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "<strong>Related rates</strong> via the chain rule:<br><span class=\"chem\">dh/dt = (dh/dV) × (dV/dt)</span>.": "연쇄법칙을 이용한 <strong>관련 변화율</strong>:<br><span class=\"chem\">dh/dt = (dh/dV) × (dV/dt)</span>.",

    // Question decoder: Master integration &amp; advanced differen > table > td
    "In a cone, eliminate the radius <i>r</i> using <strong>similar triangles</strong> (<span class=\"chem\">r/h = R/H</span>) <em>before</em> differentiating <span class=\"chem\">V = (1/3)pi r^2 h</span> with respect to <i>h</i>!": "원뿔 문제에서는 <span class=\"chem\">V = (1/3)pi r^2 h</span>를 <i>h</i>에 대해 미분하기 <em>전에</em> <strong>닮은 삼각형</strong>(<span class=\"chem\">r/h = R/H</span>)을 이용해 반지름 <i>r</i>을 먼저 소거하세요!",

    // First principles, continuity, higher derivatives and L’Hôpit > data-toc attribute
    "First principles & L'Hôpital": "도함수의 정의와 로피탈",

    // First principles, continuity, higher derivatives and L’Hôpit > h2
    "First principles, continuity, higher derivatives and L’Hôpital’s rule": "도함수의 정의, 연속성, 고계도함수 및 로피탈의 정리",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "A function <span class=\"chem\">f(x)</span> is <dfn data-def=\"A function is continuous at x = a if f(a) is defined, the two-sided limit as x approaches a exists, and lim_{x-&gt;a} f(x) = f(a).\">continuous</dfn> at <span class=\"chem\">x = a</span> if its graph has no holes, jumps, or vertical asymptotes there: <span class=\"chem\">lim_{x-&gt;a^-} f(x) = lim_{x-&gt;a^+} f(x) = f(a)</span>. It is <dfn data-def=\"A function is differentiable at x = a if the derivative limit from the left equals the derivative limit from the right.\">differentiable</dfn> at <span class=\"chem\">x = a</span> if the secant gradient approaches the same finite value from both the left and the right.": "함수 <span class=\"chem\">f(x)</span>의 그래프가 <span class=\"chem\">x = a</span>에서 구멍, 끊어짐, 수직점근선 없이 이어져 있을 때, 즉 <span class=\"chem\">lim_{x-&gt;a^-} f(x) = lim_{x-&gt;a^+} f(x) = f(a)</span>이면 <span class=\"chem\">x = a</span>에서 <dfn data-def=\"A function is continuous at x = a if f(a) is defined, the two-sided limit as x approaches a exists, and lim_{x-&gt;a} f(x) = f(a).\">연속 <span class=\"en-term\">(continuous)</span></dfn>이라고 해요. 또한 할선의 기울기가 왼쪽과 오른쪽에서 같은 유한한 값으로 수렴할 때 그 점에서 <dfn data-def=\"A function is differentiable at x = a if the derivative limit from the left equals the derivative limit from the right.\">미분가능 <span class=\"en-term\">(differentiable)</span></dfn>하다고 해요.",

    // First principles, continuity, higher derivatives and L’Hôpit > data-def attribute
    "A function is continuous at x = a if f(a) is defined, the two-sided limit as x approaches a exists, and lim_{x->a} f(x) = f(a).": "f(a)가 정의되어 있고, x→a일 때의 극한이 존재하며, lim_{x->a} f(x) = f(a)이면 함수는 x = a에서 연속입니다.",

    // First principles, continuity, higher derivatives and L’Hôpit > data-def attribute
    "A function is differentiable at x = a if the derivative limit from the left equals the derivative limit from the right.": "x = a에서의 좌미분계수와 우미분계수가 같으면 함수는 x = a에서 미분가능합니다.",

    // First principles, continuity, higher derivatives and L’Hôpit > key idea > p
    "<strong>Differentiability vs continuity:</strong> Every function that is differentiable at <span class=\"chem\">x = a</span> is automatically continuous at <span class=\"chem\">x = a</span>. However, the converse is false: a function with a sharp corner or cusp (such as <span class=\"chem\">f(x) = |x|</span> at <span class=\"chem\">x = 0</span>, where the left gradient is <span class=\"chem\">-1</span> and the right gradient is <span class=\"chem\">+1</span>) is continuous but <strong>not differentiable</strong> at that point.": "<strong>미분가능성과 연속성의 관계:</strong> <span class=\"chem\">x = a</span>에서 미분가능한 함수는 반드시 <span class=\"chem\">x = a</span>에서 연속이에요. 하지만 역은 성립하지 않아요: <span class=\"chem\">x = 0</span>에서의 <span class=\"chem\">f(x) = |x|</span>처럼(왼쪽 기울기는 <span class=\"chem\">-1</span>, 오른쪽 기울기는 <span class=\"chem\">+1</span>) 뾰족한 점(첨점)이 있는 함수는 연속이지만 그 점에서 <strong>미분가능하지 않아요</strong>.",

    // First principles, continuity, higher derivatives and L’Hôpit > h3
    "Differentiation from first principles": "도함수의 정의를 이용한 미분",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "When an exam question says <em>“find <span class=\"chem\">f'(x)</span> from first principles”</em>, using shortcut derivative rules earns <strong>zero marks</strong>. You must start from the Formula Booklet limit definition:": "시험 문제에서 <em>“도함수의 정의를 이용하여 <span class=\"chem\">f'(x)</span>를 구하시오 (find from first principles)”</em>라고 나오면, 미분 공식을 바로 쓰는 풀이는 <strong>0점</strong> 처리돼요. 반드시 공식집의 극한 정의에서 시작해야 해요:",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > dd
    "horizontal step between <i>x</i> and <i>x</i> + <i>h</i>": "<i>x</i>와 <i>x</i> + <i>h</i> 사이의 가로 간격",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > dd
    "gradient of the secant chord through (<i>x</i>, <i>f</i>(<i>x</i>)) and (<i>x</i> + <i>h</i>, <i>f</i>(<i>x</i> + <i>h</i>))": "(<i>x</i>, <i>f</i>(<i>x</i>))와 (<i>x</i> + <i>h</i>, <i>f</i>(<i>x</i> + <i>h</i>))를 지나는 할선의 기울기",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "Three algebraic techniques handle every first-principles proof in IB AA HL:": "IB AA HL의 모든 도함수 정의 증명 문제는 다음 세 가지 대수 기법으로 해결할 수 있어요:",

    // First principles, continuity, higher derivatives and L’Hôpit > li
    "<strong>Polynomials <span class=\"chem\">x^n</span></strong>: Expand <span class=\"chem\">(x + h)^n</span> using the binomial theorem, cancel <span class=\"chem\">x^n</span>, factor out <i>h</i>, and let <span class=\"chem\">h -&gt; 0</span>.": "<strong>다항함수 <span class=\"chem\">x^n</span></strong>: 이항정리로 <span class=\"chem\">(x + h)^n</span>을 전개하고 <span class=\"chem\">x^n</span>을 소거한 뒤 <i>h</i>로 묶어 내고 <span class=\"chem\">h -&gt; 0</span>을 취해요.",

    // First principles, continuity, higher derivatives and L’Hôpit > li
    "<strong>Fractions like <span class=\"chem\">1/x</span> or <span class=\"chem\">1/x^2</span></strong>: Combine <span class=\"chem\">1/(x + h) - 1/x = (x - (x + h))/(x(x + h)) = -h/(x(x + h))</span> over a common denominator so <i>h</i> cancels cleanly.": "<strong>분수함수 <span class=\"chem\">1/x</span> 또는 <span class=\"chem\">1/x^2</span></strong>: <span class=\"chem\">1/(x + h) - 1/x = (x - (x + h))/(x(x + h)) = -h/(x(x + h))</span>처럼 통분해서 <i>h</i>가 깔끔하게 약분되도록 해요.",

    // First principles, continuity, higher derivatives and L’Hôpit > li
    "<strong>Square roots like <span class=\"chem\">sqrt(x)</span></strong>: Multiply numerator and denominator by the conjugate <span class=\"chem\">sqrt(x + h) + sqrt(x)</span> so the numerator becomes <span class=\"chem\">(x + h) - x = h</span>.": "<strong>무리함수 <span class=\"chem\">sqrt(x)</span></strong>: 분자와 분모에 켤레식 <span class=\"chem\">sqrt(x + h) + sqrt(x)</span>를 곱해(유리화) 분자가 <span class=\"chem\">(x + h) - x = h</span>가 되게 해요.",

    // First principles, continuity, higher derivatives and L’Hôpit > h3
    "Higher derivatives <span class=\"chem\">f^{(n)}(x)</span>": "고계도함수 <span class=\"chem\">f^{(n)}(x)</span>",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "The <i>n</i>-th derivative of <span class=\"chem\">y = f(x)</span> is written <span class=\"chem\">f^{(n)}(x)</span> or <span class=\"chem\">d^n y / dx^n</span>. On Paper 1 and Paper 3, you are often asked to compute <span class=\"chem\">f'(x), f''(x), f'''(x)</span>, spot a pattern (such as powers of <span class=\"chem\">-1</span>, factorials <span class=\"chem\">n!</span>, or phase shifts <span class=\"chem\">sin(x + n pi / 2)</span>), and prove the formula for <span class=\"chem\">f^{(n)}(x)</span> by mathematical induction.": "<span class=\"chem\">y = f(x)</span>의 <i>n</i>계도함수는 <span class=\"chem\">f^{(n)}(x)</span> 또는 <span class=\"chem\">d^n y / dx^n</span>으로 나타내요. Paper 1과 Paper 3에서는 <span class=\"chem\">f'(x), f''(x), f'''(x)</span>를 구한 뒤 규칙(<span class=\"chem\">-1</span>의 거듭제곱, 계승 <span class=\"chem\">n!</span>, 위상 이동 <span class=\"chem\">sin(x + n pi / 2)</span> 등)을 찾고 수학적 귀납법으로 <span class=\"chem\">f^{(n)}(x)</span>의 공식을 증명하는 문제가 자주 출제돼요.",

    // First principles, continuity, higher derivatives and L’Hôpit > h3
    "L’Hôpital’s rule for indeterminate limits": "부정형 극한을 위한 로피탈의 정리",

    // First principles, continuity, higher derivatives and L’Hôpit > p
    "When direct substitution into <span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span> produces the indeterminate form <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span>, zooming in closely around <span class=\"chem\">x = a</span> makes both curves look like their tangent lines. Near <span class=\"chem\">x = a</span> when <span class=\"chem\">f(a) = g(a) = 0</span>, <span class=\"chem\">f(x) ≈ f'(a)(x - a)</span> and <span class=\"chem\">g(x) ≈ g'(a)(x - a)</span>, so the ratio of heights equals the ratio of gradients:": "<span class=\"chem\">lim_{x-&gt;a} f(x)/g(x)</span>에 직접 대입했을 때 <span class=\"chem\">0/0</span> 또는 <span class=\"chem\">infty/infty</span> 부정형이 나오면, <span class=\"chem\">x = a</span> 주위를 크게 확대할수록 두 곡선은 각각의 접선과 거의 같아져요. <span class=\"chem\">f(a) = g(a) = 0</span>일 때 <span class=\"chem\">x = a</span> 근방에서 <span class=\"chem\">f(x) ≈ f'(a)(x - a)</span>, <span class=\"chem\">g(x) ≈ g'(a)(x - a)</span>이므로 함숫값의 비는 접선의 기울기의 비와 같아요:",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > maths line
    "If lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>→<i>a</i></sub> <i>g</i>(<i>x</i>) = 0 (or ±∞), then lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>(<i>x</i>)</span><span><i>g</i>(<i>x</i>)</span></span> = lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>′(<i>x</i>)</span><span><i>g</i>′(<i>x</i>)</span></span>": "lim<sub><i>x</i>→<i>a</i></sub> <i>f</i>(<i>x</i>) = lim<sub><i>x</i>→<i>a</i></sub> <i>g</i>(<i>x</i>) = 0 (또는 ±∞)이면, lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>(<i>x</i>)</span><span><i>g</i>(<i>x</i>)</span></span> = lim<sub><i>x</i>→<i>a</i></sub> <span class=\"frac\"><span><i>f</i>′(<i>x</i>)</span><span><i>g</i>′(<i>x</i>)</span></span>",

    // First principles, continuity, higher derivatives and L’Hôpit > equation > dd
    "differentiate numerator and denominator separately (provided the right-hand limit exists)": "분자와 분모를 각각 따로 미분해요 (우변의 극한이 존재할 때 성립)",

    // First principles, continuity, higher derivatives and L’Hôpit > common mistake > p
    "<strong>Verify <span class=\"chem\">0/0</span> or <span class=\"chem\">infty/infty</span> before every single application!</strong> If a limit is <span class=\"chem\">lim_{x-&gt;0} cos(x)/(x + 2) = 1/2</span>, applying L’Hôpital’s rule gives <span class=\"chem\">lim_{x-&gt;0} (-sin x)/1 = 0</span>, which is completely wrong because the original limit was <span class=\"chem\">1/2</span>, not <span class=\"chem\">0/0</span>. If you have a product <span class=\"chem\">0 × infty</span> (such as <span class=\"chem\">lim_{x-&gt;0^+} x ln x</span>), rewrite it as a fraction <span class=\"chem\">(ln x)/(1/x)</span> (<span class=\"chem\">-infty/infty</span>) first!": "<strong>적용할 때마다 반드시 <span class=\"chem\">0/0</span> 또는 <span class=\"chem\">infty/infty</span> 꼴인지 확인하세요!</strong> <span class=\"chem\">lim_{x-&gt;0} cos(x)/(x + 2) = 1/2</span>처럼 부정형이 아닌 극한에 로피탈의 정리를 적용하면 <span class=\"chem\">lim_{x-&gt;0} (-sin x)/1 = 0</span>이라는 완전히 틀린 값이 나와요. 원래 극한이 <span class=\"chem\">0/0</span>이 아니라 <span class=\"chem\">1/2</span>이기 때문이에요. <span class=\"chem\">0 × infty</span> 꼴의 곱(예: <span class=\"chem\">lim_{x-&gt;0^+} x ln x</span>)이 나오면 먼저 분수 꼴 <span class=\"chem\">(ln x)/(1/x)</span> (<span class=\"chem\">-infty/infty</span>)로 바꾸세요!",

    // First principles, continuity, higher derivatives and L’Hôpit > widget > data-title attribute
    "L’Hôpital’s rule local linearization explorer": "로피탈의 정리 국소 선형 근사 탐색기",

    // First principles, continuity, higher derivatives and L’Hôpit > widget > data-kicker attribute
    "AHL 5.13 · Interactive": "AHL 5.13 · 인터랙티브",

    // First principles, continuity, higher derivatives and L’Hôpit > widget > figcaption
    "As you zoom in around <span class=\"chem\">x = a</span>, the functions <span class=\"chem\">f(x)</span> and <span class=\"chem\">g(x)</span> become indistinguishable from their tangent lines <span class=\"chem\">f'(a)(x - a)</span> and <span class=\"chem\">g'(a)(x - a)</span>. Because the <span class=\"chem\">(x - a)</span> factors cancel, the limit of <span class=\"chem\">f(x)/g(x)</span> equals the ratio of slopes <span class=\"chem\">f'(a)/g'(a)</span>.": "<span class=\"chem\">x = a</span> 주위를 확대할수록 두 함수 <span class=\"chem\">f(x)</span>와 <span class=\"chem\">g(x)</span>는 각각의 접선 <span class=\"chem\">f'(a)(x - a)</span>와 <span class=\"chem\">g'(a)(x - a)</span>와 구별할 수 없을 정도로 가까워져요. <span class=\"chem\">(x - a)</span> 인수가 약분되므로 <span class=\"chem\">f(x)/g(x)</span>의 극한은 두 접선의 기울기 비 <span class=\"chem\">f'(a)/g'(a)</span>와 같아져요.",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > h3
    "Evaluating a limit that requires applying L’Hôpital’s rule twice": "로피탈의 정리를 두 번 적용해야 하는 극한 계산하기",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "Find the exact value of <span class=\"chem\">lim_{x-&gt;0} (e^{2x} - 1 - 2x) / (1 - cos(3x))</span>. <strong>[5 marks]</strong>": "<span class=\"chem\">lim_{x-&gt;0} (e^{2x} - 1 - 2x) / (1 - cos(3x))</span>의 정확한 값을 구하시오 (Find). <strong>[5 marks]</strong>",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > data-title attribute
    "Check the indeterminate form at x = 0": "x = 0에서 부정형 확인하기",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "IB markschemes require explicit verification that both numerator and denominator approach 0 before applying L’Hôpital’s rule.": "IB 채점 기준에서는 로피탈의 정리를 적용하기 전에 분자와 분모가 모두 0으로 수렴함을 명시적으로 확인해야 점수를 줘요.",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > maths line
    "As <i>x</i> → 0: numerator <i>e</i><sup>0</sup> − 1 − 0 = 0 and denominator 1 − cos(0) = 0 (indeterminate form 0/0) <b>[R1]</b>": "<i>x</i> → 0일 때: 분자 <i>e</i><sup>0</sup> − 1 − 0 = 0, 분모 1 − cos(0) = 0 (0/0 부정형) <b>[R1]</b>",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > data-title attribute
    "Apply L’Hôpital’s rule once and re-test at x = 0": "로피탈의 정리를 한 번 적용하고 x = 0에서 다시 확인하기",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "Differentiate numerator and denominator separately with respect to x using the chain rule.": "연쇄법칙을 이용해 분자와 분모를 각각 따로 x에 대해 미분해요.",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > maths line
    "At <i>x</i> = 0: numerator 2 − 2 = 0 and denominator 3 sin(0) = 0 (still form 0/0)": "<i>x</i> = 0에서: 분자 2 − 2 = 0, 분모 3 sin(0) = 0 (여전히 0/0 부정형)",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > data-title attribute
    "Apply L’Hôpital’s rule a second time and evaluate": "로피탈의 정리를 두 번째 적용하고 극한값 구하기",

    // First principles, continuity, higher derivatives and L’Hôpit > worked example > p
    "Since the first derivative ratio is still 0/0, differentiate top and bottom one more time and substitute x = 0.": "도함수들의 비도 여전히 0/0 꼴이므로, 분자와 분모를 한 번 더 각각 미분한 뒤 x = 0을 대입해요.",

    // First principles, continuity, higher derivatives and L’Hôpit > try it > p
    "Evaluate <span class=\"chem\">lim_{x-&gt;0} (3x - sin(3x)) / (2x^3)</span>. Give your answer as an exact fraction or decimal.": "<span class=\"chem\">lim_{x-&gt;0} (3x - sin(3x)) / (2x^3)</span>을 계산하시오. 정확한 분수 또는 소수로 답하세요.",

    // First principles, continuity, higher derivatives and L’Hôpit > try it > li
    "Verify that at <span class=\"chem\">x = 0</span>, both numerator and denominator are <span class=\"chem\">0</span>. Apply L’Hôpital’s rule once to get <span class=\"chem\">lim_{x-&gt;0} (3 - 3 cos(3x)) / (6x^2)</span>.": "<span class=\"chem\">x = 0</span>에서 분자와 분모가 모두 <span class=\"chem\">0</span>인지 확인하세요. 로피탈의 정리를 한 번 적용하면 <span class=\"chem\">lim_{x-&gt;0} (3 - 3 cos(3x)) / (6x^2)</span>가 돼요.",

    // First principles, continuity, higher derivatives and L’Hôpit > try it > li
    "This is still <span class=\"chem\">0/0</span>. Differentiate top and bottom a second time to get <span class=\"chem\">lim_{x-&gt;0} (9 sin(3x)) / (12x)</span>, and a third time to get <span class=\"chem\">lim_{x-&gt;0} (27 cos(3x)) / 12</span>.": "여전히 <span class=\"chem\">0/0</span> 꼴이에요. 분자와 분모를 두 번째 미분하면 <span class=\"chem\">lim_{x-&gt;0} (9 sin(3x)) / (12x)</span>이고, 세 번째 미분하면 <span class=\"chem\">lim_{x-&gt;0} (27 cos(3x)) / 12</span>가 돼요.",

    // Implicit differentiation, related rates and AHL derivatives > data-toc attribute
    "Implicit & related rates": "음함수 미분과 관련 변화율",

    // Implicit differentiation, related rates and AHL derivatives > h2
    "Implicit differentiation, related rates and AHL derivatives": "음함수의 미분법, 관련 변화율 및 AHL 도함수",

    // Implicit differentiation, related rates and AHL derivatives > p
    "Many geometric curves—such as circles <span class=\"chem\">x^2 + y^2 = r^2</span> or rotated ellipses <span class=\"chem\">x^2 + xy + y^2 = 7</span>—cannot easily be written in explicit form <span class=\"chem\">y = f(x)</span>. Using <dfn data-def=\"Differentiating both sides of an equation F(x, y) = 0 with respect to x by treating y as an implicit function y(x) and applying the chain rule d/dx(g(y)) = g'(y) dy/dx.\">implicit differentiation</dfn>, we differentiate every term with respect to <i>x</i> directly:": "원 <span class=\"chem\">x^2 + y^2 = r^2</span>이나 회전된 타원 <span class=\"chem\">x^2 + xy + y^2 = 7</span> 같은 많은 기하학적 곡선은 양함수 꼴 <span class=\"chem\">y = f(x)</span>로 나타내기 어려워요. <dfn data-def=\"Differentiating both sides of an equation F(x, y) = 0 with respect to x by treating y as an implicit function y(x) and applying the chain rule d/dx(g(y)) = g'(y) dy/dx.\">음함수의 미분법 <span class=\"en-term\">(implicit differentiation)</span></dfn>을 사용하면 모든 항을 직접 <i>x</i>에 대해 미분할 수 있어요:",

    // Implicit differentiation, related rates and AHL derivatives > data-def attribute
    "Differentiating both sides of an equation F(x, y) = 0 with respect to x by treating y as an implicit function y(x) and applying the chain rule d/dx(g(y)) = g'(y) dy/dx.": "y를 x의 함수 y(x)로 보고 연쇄법칙 d/dx(g(y)) = g'(y) dy/dx를 적용하여 방정식 F(x, y) = 0의 양변을 x에 대해 미분하는 방법입니다.",

    // Implicit differentiation, related rates and AHL derivatives > li
    "Any term involving <i>y</i> is differentiated using the chain rule: <span class=\"chem\">d/dx(y^n) = n y^{n-1} (dy/dx)</span> and <span class=\"chem\">d/dx(e^y) = e^y (dy/dx)</span>.": "<i>y</i>가 들어간 항은 연쇄법칙으로 미분해요: <span class=\"chem\">d/dx(y^n) = n y^{n-1} (dy/dx)</span>, <span class=\"chem\">d/dx(e^y) = e^y (dy/dx)</span>.",

    // Implicit differentiation, related rates and AHL derivatives > li
    "Any mixed product such as <span class=\"chem\">x^2 y</span> requires the product rule: <span class=\"chem\">d/dx(x^2 y) = x^2 (dy/dx) + 2xy</span>.": "<span class=\"chem\">x^2 y</span>처럼 x와 y가 곱해진 항에는 곱의 미분법을 써요: <span class=\"chem\">d/dx(x^2 y) = x^2 (dy/dx) + 2xy</span>.",

    // Implicit differentiation, related rates and AHL derivatives > li
    "After differentiating both sides, collect all terms containing <span class=\"chem\">dy/dx</span> on the left, factor out <span class=\"chem\">dy/dx</span>, and divide.": "양변을 미분한 뒤 <span class=\"chem\">dy/dx</span>가 있는 항을 모두 좌변으로 모으고, <span class=\"chem\">dy/dx</span>로 묶어 나눗셈을 해 정리해요.",

    // Implicit differentiation, related rates and AHL derivatives > exam tip (shown in English + translation) > p
    "<strong>Exam tip — Horizontal vs vertical tangents on implicit curves:</strong> If <span class=\"chem\">dy/dx = P(x, y) / Q(x, y)</span>:": "<strong>시험 팁 — 음함수 곡선의 수평 접선 vs 수직 접선:</strong> <span class=\"chem\">dy/dx = P(x, y) / Q(x, y)</span>일 때:",

    // Implicit differentiation, related rates and AHL derivatives > exam tip (shown in English + translation) > li
    "<strong>Horizontal tangent (stationary point / parallel to <i>x</i>-axis):</strong> Set the numerator <span class=\"chem\">P(x, y) = 0</span>, express <i>y</i> in terms of <i>x</i> (or vice versa), and <strong>substitute back into the original curve equation</strong> to find the coordinates!": "<strong>수평 접선(정류점 / <i>x</i>축에 평행):</strong> 분자 <span class=\"chem\">P(x, y) = 0</span>으로 놓고 <i>y</i>를 <i>x</i>에 관한 식(또는 그 반대)으로 나타낸 뒤, <strong>원래 곡선의 방정식에 다시 대입</strong>해 좌표를 구해요!",

    // Implicit differentiation, related rates and AHL derivatives > exam tip (shown in English + translation) > li
    "<strong>Vertical tangent (parallel to <i>y</i>-axis):</strong> Set the denominator <span class=\"chem\">Q(x, y) = 0</span> (which is equivalent to <span class=\"chem\">dx/dy = 0</span>) and substitute back into the original curve equation.": "<strong>수직 접선(<i>y</i>축에 평행):</strong> 분모 <span class=\"chem\">Q(x, y) = 0</span>(<span class=\"chem\">dx/dy = 0</span>과 동치)으로 놓고 원래 곡선의 방정식에 다시 대입해요.",

    // Implicit differentiation, related rates and AHL derivatives > h3
    "Related rates of change": "관련 변화율 (시간에 대한 변화율)",

    // Implicit differentiation, related rates and AHL derivatives > p
    "When two or more quantities vary with time <i>t</i> (such as the volume <i>V</i>, radius <i>r</i>, and depth <i>h</i> of water in a tank), the chain rule connects their rates of change:": "물탱크 속 물의 부피 <i>V</i>, 반지름 <i>r</i>, 깊이 <i>h</i>처럼 둘 이상의 양이 시간 <i>t</i>에 따라 변할 때, 연쇄법칙이 각 변화율을 연결해 줘요:",

    // Implicit differentiation, related rates and AHL derivatives > equation > dt
    "dV/dt": "dV/dt",

    // Implicit differentiation, related rates and AHL derivatives > equation > dd
    "rate of change of volume with respect to time (positive for inflow, negative for outflow/leaking)": "시간에 대한 부피의 변화율 (유입되면 양수, 유출·누수되면 음수)",

    // Implicit differentiation, related rates and AHL derivatives > equation > dt
    "dh/dt": "dh/dt",

    // Implicit differentiation, related rates and AHL derivatives > equation > dd
    "rate of change of height with respect to time": "시간에 대한 높이의 변화율",

    // Implicit differentiation, related rates and AHL derivatives > h3
    "AHL standard derivatives (Formula Booklet 5.15)": "AHL 기본 도함수 공식 (공식집 5.15)",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > p
    "<strong>In your Formula Booklet (Section 5.15):</strong>": "<strong>공식집(Formula booklet) 5.15절에 수록:</strong>",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > li
    "Reciprocal &amp; tangent trig: <span class=\"chem\">d/dx(tan x) = sec^2 x</span>, <span class=\"chem\">d/dx(cot x) = -cosec^2 x</span>, <span class=\"chem\">d/dx(sec x) = sec x tan x</span>, <span class=\"chem\">d/dx(cosec x) = -cosec x cot x</span>. (Notice every “co-” function has a minus sign!)": "탄젠트 및 역수 삼각함수: <span class=\"chem\">d/dx(tan x) = sec^2 x</span>, <span class=\"chem\">d/dx(cot x) = -cosec^2 x</span>, <span class=\"chem\">d/dx(sec x) = sec x tan x</span>, <span class=\"chem\">d/dx(cosec x) = -cosec x cot x</span>. (“co-”로 시작하는 함수는 모두 마이너스 부호가 붙어요!)",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > li
    "General exponential &amp; log: <span class=\"chem\">d/dx(a^x) = a^x ln a</span> and <span class=\"chem\">d/dx(log_a x) = 1/(x ln a)</span>.": "일반 지수·로그함수: <span class=\"chem\">d/dx(a^x) = a^x ln a</span>, <span class=\"chem\">d/dx(log_a x) = 1/(x ln a)</span>.",

    // Implicit differentiation, related rates and AHL derivatives > formula booklet note > li
    "Inverse trig: <span class=\"chem\">d/dx(arcsin x) = 1/sqrt(1 - x^2)</span>, <span class=\"chem\">d/dx(arccos x) = -1/sqrt(1 - x^2)</span>, and <span class=\"chem\">d/dx(arctan x) = 1/(1 + x^2)</span>.": "역삼각함수: <span class=\"chem\">d/dx(arcsin x) = 1/sqrt(1 - x^2)</span>, <span class=\"chem\">d/dx(arccos x) = -1/sqrt(1 - x^2)</span>, <span class=\"chem\">d/dx(arctan x) = 1/(1 + x^2)</span>.",

    // Implicit differentiation, related rates and AHL derivatives > worked example > h3
    "Finding points with a vertical tangent on an implicit curve": "음함수 곡선에서 수직 접선을 갖는 점 찾기",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "Consider the curve defined implicitly by <span class=\"chem\">x^2 - 2xy + 4y^2 = 12</span>. Find the coordinates of the two points on the curve where the tangent is parallel to the <i>y</i>-axis. <strong>[6 marks]</strong>": "음함수 방정식 <span class=\"chem\">x^2 - 2xy + 4y^2 = 12</span>로 정의된 곡선이 있어요. 이 곡선 위에서 접선이 <i>y</i>축에 평행한 두 점의 좌표를 구하시오 (Find). <strong>[6 marks]</strong>",

    // Implicit differentiation, related rates and AHL derivatives > worked example > data-title attribute
    "Differentiate both sides implicitly with respect to x": "양변을 x에 대해 음함수 미분하기",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "Apply the product rule to −2xy and the chain rule to 4y². Remember that the derivative of 12 is 0.": "−2xy에는 곱의 미분법을, 4y²에는 연쇄법칙을 적용해요. 상수 12의 도함수는 0이에요.",

    // Implicit differentiation, related rates and AHL derivatives > worked example > data-title attribute
    "Isolate dy/dx and apply the vertical tangent condition": "dy/dx를 정리하고 수직 접선 조건 적용하기",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "A tangent parallel to the y-axis is vertical, which occurs where the denominator of dy/dx equals zero (dx/dy = 0).": "y축에 평행한 접선은 수직 접선이므로 dy/dx의 분모가 0이 되는 곳(dx/dy = 0)에서 생겨요.",

    // Implicit differentiation, related rates and AHL derivatives > worked example > maths line
    "Vertical tangent ⇒ 4<i>y</i> − <i>x</i> = 0 ⇒ <i>x</i> = 4<i>y</i> <b>[M1]</b>": "수직 접선 ⇒ 4<i>y</i> − <i>x</i> = 0 ⇒ <i>x</i> = 4<i>y</i> <b>[M1]</b>",

    // Implicit differentiation, related rates and AHL derivatives > worked example > data-title attribute
    "Substitute x = 4y back into the original curve equation": "x = 4y를 원래 곡선 방정식에 대입하기",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "The points must lie on the curve x² − 2xy + 4y² = 12.": "구하는 점은 곡선 x² − 2xy + 4y² = 12 위에 있어야 해요.",

    // Implicit differentiation, related rates and AHL derivatives > worked example > maths line
    "Since <i>x</i> = 4<i>y</i>, the points are <b>(4, 1)</b> and <b>(−4, −1)</b>. <b>[A1]</b>": "<i>x</i> = 4<i>y</i>이므로 두 점은 <b>(4, 1)</b>과 <b>(−4, −1)</b>이에요. <b>[A1]</b>",

    // Implicit differentiation, related rates and AHL derivatives > worked example > p
    "(4, 1) and (−4, −1)": "(4, 1)과 (−4, −1)",

    // Implicit differentiation, related rates and AHL derivatives > try it > p
    "An inverted right circular cone has base radius <span class=\"unit\">6 cm</span> and height <span class=\"unit\">12 cm</span>. Water is poured into the cone at a constant rate of <span class=\"unit\">8 cm3 s-1</span>. Find the rate <span class=\"chem\">dh/dt</span> at which the water depth <i>h</i> is rising when <span class=\"chem\">h = 4</span> <span class=\"unit\">cm</span>. (Give your answer to 3 s.f. or in terms of <span class=\"mono\">pi</span>.)": "거꾸로 세운 직원뿔 모양의 그릇의 밑면 반지름이 <span class=\"unit\">6 cm</span>, 높이가 <span class=\"unit\">12 cm</span>예요. 이 그릇에 물을 <span class=\"unit\">8 cm3 s-1</span>의 일정한 비율로 부을 때, 물의 깊이 <i>h</i>가 <span class=\"chem\">h = 4</span> <span class=\"unit\">cm</span>인 순간 수면이 올라가는 비율 <span class=\"chem\">dh/dt</span>를 구하시오 (Find). (유효숫자 3자리(3 s.f.) 또는 <span class=\"mono\">pi</span>를 써서 답하세요.)",

    // Implicit differentiation, related rates and AHL derivatives > try it > li
    "By similar triangles, <span class=\"chem\">r / h = 6 / 12 = 1 / 2</span>, so <span class=\"chem\">r = h / 2</span>. Substitute this into <span class=\"chem\">V = (1/3)pi r^2 h</span> to get <span class=\"chem\">V = (pi / 12) h^3</span>.": "닮은 삼각형에 의해 <span class=\"chem\">r / h = 6 / 12 = 1 / 2</span>이므로 <span class=\"chem\">r = h / 2</span>예요. 이를 <span class=\"chem\">V = (1/3)pi r^2 h</span>에 대입하면 <span class=\"chem\">V = (pi / 12) h^3</span>이 돼요.",

    // Implicit differentiation, related rates and AHL derivatives > try it > li
    "Differentiate with respect to <i>h</i>: <span class=\"chem\">dV/dh = (pi / 4) h^2</span>. At <span class=\"chem\">h = 4</span>, <span class=\"chem\">dV/dh = 4pi</span>, so <span class=\"chem\">dh/dt = (dV/dt) / (dV/dh) = 8 / (4pi) = 2 / pi</span>.": "<i>h</i>에 대해 미분하면 <span class=\"chem\">dV/dh = (pi / 4) h^2</span>예요. <span class=\"chem\">h = 4</span>일 때 <span class=\"chem\">dV/dh = 4pi</span>이므로 <span class=\"chem\">dh/dt = (dV/dt) / (dV/dh) = 8 / (4pi) = 2 / pi</span>예요.",

    // Standard AHL integrals, substitution, integration by parts a > data-toc attribute
    "Integration methods": "다양한 적분법",

    // Standard AHL integrals, substitution, integration by parts a > h2
    "Standard AHL integrals, substitution, integration by parts and partial fractions": "AHL 기본 적분, 치환적분법, 부분적분법 및 부분분수 분해",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "1. Standard AHL integrals leading to <span class=\"chem\">arcsin</span> and <span class=\"chem\">arctan</span>": "1. <span class=\"chem\">arcsin</span>과 <span class=\"chem\">arctan</span>이 나오는 AHL 기본 적분",

    // Standard AHL integrals, substitution, integration by parts a > p
    "The Formula Booklet gives two essential inverse trigonometric integrals for any positive constant <span class=\"chem\">a &gt; 0</span>:": "공식집(Formula booklet)에는 임의의 양의 상수 <span class=\"chem\">a &gt; 0</span>에 대해 꼭 알아야 할 두 가지 역삼각함수 적분 공식이 실려 있어요:",

    // Standard AHL integrals, substitution, integration by parts a > equation > maths line
    "∫ <span class=\"frac\"><span>1</span><span><i>a</i><sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = <span class=\"frac\"><span>1</span><span><i>a</i></span></span> arctan<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i>, ∫ <span class=\"frac\"><span>1</span><span>√(<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>)</span></span> <i>dx</i> = arcsin<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i> (|<i>x</i>| &lt; <i>a</i>)": "∫ <span class=\"frac\"><span>1</span><span><i>a</i><sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = <span class=\"frac\"><span>1</span><span><i>a</i></span></span> arctan<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i>, ∫ <span class=\"frac\"><span>1</span><span>√(<i>a</i><sup>2</sup> − <i>x</i><sup>2</sup>)</span></span> <i>dx</i> = arcsin<span class=\"frac\"><span><i>x</i></span><span><i>a</i></span></span> + <i>C</i> (|<i>x</i>| &lt; <i>a</i>)",

    // Standard AHL integrals, substitution, integration by parts a > equation > dt
    "1/a in arctan": "arctan 앞의 1/a",

    // Standard AHL integrals, substitution, integration by parts a > equation > dd
    "present in arctan, but NOT in arcsin!": "arctan에는 1/a가 있지만, arcsin에는 없어요!",

    // Standard AHL integrals, substitution, integration by parts a > p
    "When the denominator is an irreducible quadratic such as <span class=\"chem\">x^2 + 6x + 25</span>, complete the square first: <span class=\"chem\">x^2 + 6x + 25 = (x + 3)^2 + 4^2</span>, which integrates directly to <span class=\"chem\">(1/4) arctan((x + 3)/4) + C</span>.": "분모가 <span class=\"chem\">x^2 + 6x + 25</span>처럼 인수분해되지 않는 이차식이면 먼저 완전제곱식으로 변형하세요: <span class=\"chem\">x^2 + 6x + 25 = (x + 3)^2 + 4^2</span>이므로 바로 <span class=\"chem\">(1/4) arctan((x + 3)/4) + C</span>로 적분돼요.",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "2. Formal integration by substitution": "2. 치환적분법",

    // Standard AHL integrals, substitution, integration by parts a > p
    "To evaluate <span class=\"chem\">int_a^b f(g(x)) g'(x) dx</span> using <span class=\"chem\">u = g(x)</span>:": "<span class=\"chem\">u = g(x)</span>를 이용해 <span class=\"chem\">int_a^b f(g(x)) g'(x) dx</span>를 계산하려면:",

    // Standard AHL integrals, substitution, integration by parts a > li
    "Differentiate the substitution: <span class=\"chem\">du/dx = g'(x) =&gt; du = g'(x) dx</span>.": "치환한 식을 미분해요: <span class=\"chem\">du/dx = g'(x) =&gt; du = g'(x) dx</span>.",

    // Standard AHL integrals, substitution, integration by parts a > li
    "<strong>Change the limits of integration</strong>: lower limit <span class=\"chem\">u_1 = g(a)</span>, upper limit <span class=\"chem\">u_2 = g(b)</span>.": "<strong>적분 구간을 변환하세요</strong>: 아래끝 <span class=\"chem\">u_1 = g(a)</span>, 위끝 <span class=\"chem\">u_2 = g(b)</span>.",

    // Standard AHL integrals, substitution, integration by parts a > li
    "Rewrite the entire integrand in terms of <i>u</i> and evaluate <span class=\"chem\">int_{u_1}^{u_2} f(u) du</span> directly—no back-substitution needed!": "피적분함수 전체를 <i>u</i>에 관한 식으로 바꾼 뒤 <span class=\"chem\">int_{u_1}^{u_2} f(u) du</span>를 바로 계산해요. 다시 x로 되돌릴 필요가 없어요!",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "3. Integration by parts (<span class=\"chem\">LIATE</span>)": "3. 부분적분법 (<span class=\"chem\">LIATE</span>)",

    // Standard AHL integrals, substitution, integration by parts a > p
    "Reversing the product rule gives the integration by parts formula in Section 5.16 of the Formula Booklet:": "곱의 미분법을 거꾸로 적용하면 공식집 5.16절의 부분적분 공식을 얻어요:",

    // Standard AHL integrals, substitution, integration by parts a > equation > dd
    "factor chosen to be differentiated (pick using LIATE: Log → Inverse trig → Algebraic → Trig → Exp)": "미분할 인수 (LIATE 순서로 선택: 로그 → 역삼각 → 다항 → 삼각 → 지수)",

    // Standard AHL integrals, substitution, integration by parts a > equation > dt
    "dv/dx": "dv/dx",

    // Standard AHL integrals, substitution, integration by parts a > equation > dd
    "factor chosen to be integrated to find <i>v</i>": "적분해서 <i>v</i>를 구할 인수",

    // Standard AHL integrals, substitution, integration by parts a > key idea > p
    "<strong>Three classic IB integration by parts patterns:</strong>": "<strong>IB 시험에 자주 나오는 부분적분 3가지 유형:</strong>",

    // Standard AHL integrals, substitution, integration by parts a > key idea > li
    "<strong>Polynomial times <span class=\"chem\">e^{kx}</span>, <span class=\"chem\">sin(kx)</span>, or <span class=\"chem\">cos(kx)</span>:</strong> Choose <span class=\"chem\">u = x^n</span> so each differentiation lowers the power of <i>x</i> until it becomes a constant.": "<strong>다항식과 <span class=\"chem\">e^{kx}</span>, <span class=\"chem\">sin(kx)</span>, <span class=\"chem\">cos(kx)</span>의 곱:</strong> 미분할 때마다 <i>x</i>의 차수가 낮아져 상수가 되도록 <span class=\"chem\">u = x^n</span>으로 잡아요.",

    // Standard AHL integrals, substitution, integration by parts a > key idea > li
    "<strong>Lone <span class=\"chem\">ln x</span>, <span class=\"chem\">arcsin x</span>, or <span class=\"chem\">arctan x</span> (or multiplied by <span class=\"chem\">x^n</span>):</strong> Always choose the log or inverse trig function as <i>u</i>! For <span class=\"chem\">int ln x dx</span>, let <span class=\"chem\">u = ln x</span> and <span class=\"chem\">dv/dx = 1</span>, giving <span class=\"chem\">x ln x - int x(1/x) dx = x ln x - x + C</span>.": "<strong>단독 <span class=\"chem\">ln x</span>, <span class=\"chem\">arcsin x</span>, <span class=\"chem\">arctan x</span> (또는 <span class=\"chem\">x^n</span>과의 곱):</strong> 항상 로그함수나 역삼각함수를 <i>u</i>로 잡아요! <span class=\"chem\">int ln x dx</span>에서는 <span class=\"chem\">u = ln x</span>, <span class=\"chem\">dv/dx = 1</span>로 놓아 <span class=\"chem\">x ln x - int x(1/x) dx = x ln x - x + C</span>를 얻어요.",

    // Standard AHL integrals, substitution, integration by parts a > key idea > li
    "<strong>Cyclic <span class=\"chem\">I = int e^{ax} sin(bx) dx</span> or <span class=\"chem\">int e^{ax} cos(bx) dx</span>:</strong> Integrate by parts <strong>twice</strong> (keeping <span class=\"chem\">u = e^{ax}</span> both times) until the original integral <i>I</i> reappears on the right-hand side, then solve algebraically for <i>I</i>.": "<strong>순환형 <span class=\"chem\">I = int e^{ax} sin(bx) dx</span> 또는 <span class=\"chem\">int e^{ax} cos(bx) dx</span>:</strong> 두 번 모두 <span class=\"chem\">u = e^{ax}</span>로 유지하며 부분적분을 <strong>두 번</strong> 수행해 우변에 원래 적분 <i>I</i>가 다시 나타나게 한 뒤, <i>I</i>에 대한 방정식으로 풀어요.",

    // Standard AHL integrals, substitution, integration by parts a > h3
    "4. Integration using partial fractions": "4. 부분분수 분해를 이용한 적분",

    // Standard AHL integrals, substitution, integration by parts a > p
    "When integrating a rational function <span class=\"chem\">P(x)/Q(x)</span> where the denominator factors into distinct linear terms <span class=\"chem\">(x - a)(x - b)</span>, decompose the fraction first (from Topic 1.3 / AHL 1.11):": "분모가 서로 다른 일차식 <span class=\"chem\">(x - a)(x - b)</span>로 인수분해되는 유리함수 <span class=\"chem\">P(x)/Q(x)</span>를 적분할 때는 먼저 부분분수로 분해해요 (Topic 1.3 / AHL 1.11):",

    // Standard AHL integrals, substitution, integration by parts a > p
    "<span class=\"chem\">int (px + q)/((x - a)(x - b)) dx = int (A/(x - a) + B/(x - b)) dx = A ln|x - a| + B ln|x - b| + C</span>.": "<span class=\"chem\">int (px + q)/((x - a)(x - b)) dx = int (A/(x - a) + B/(x - b)) dx = A ln|x - a| + B ln|x - b| + C</span>.",

    // Standard AHL integrals, substitution, integration by parts a > worked example > h3
    "Definite integration by parts with an inverse trigonometric function": "역삼각함수가 포함된 정적분의 부분적분",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "Find the exact value of <span class=\"chem\">int_0^1 arctan(x) dx</span>. <strong>[5 marks]</strong>": "<span class=\"chem\">int_0^1 arctan(x) dx</span>의 정확한 값을 구하시오 (Find). <strong>[5 marks]</strong>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > data-title attribute
    "Set up u and dv/dx using LIATE": "LIATE 규칙으로 u와 dv/dx 정하기",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "For a lone inverse trig function, set u = arctan x and dv/dx = 1 so that du/dx is purely algebraic.": "역삼각함수 혼자 있을 때는 du/dx가 유리식이 되도록 u = arctan x, dv/dx = 1로 놓아요.",

    // Standard AHL integrals, substitution, integration by parts a > worked example > maths line
    "Let <i>u</i> = arctan <i>x</i> ⇒ <span class=\"frac\"><span><i>du</i></span><span><i>dx</i></span></span> = <span class=\"frac\"><span>1</span><span>1 + <i>x</i><sup>2</sup></span></span>, and <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = 1 ⇒ <i>v</i> = <i>x</i> <b>[M1 A1]</b>": "<i>u</i> = arctan <i>x</i> ⇒ <span class=\"frac\"><span><i>du</i></span><span><i>dx</i></span></span> = <span class=\"frac\"><span>1</span><span>1 + <i>x</i><sup>2</sup></span></span>, <span class=\"frac\"><span><i>dv</i></span><span><i>dx</i></span></span> = 1 ⇒ <i>v</i> = <i>x</i> <b>[M1 A1]</b>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > data-title attribute
    "Apply the integration by parts formula": "부분적분 공식 적용하기",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "Substitute into [uv] − ∫ v du and recognize the remaining integral as a logarithmic inspection form.": "[uv] − ∫ v du에 대입하고, 남은 적분이 로그 적분 꼴임을 확인해요.",

    // Standard AHL integrals, substitution, integration by parts a > worked example > maths line
    "∫<sub>0</sub><sup>1</sup> arctan <i>x</i> <i>dx</i> = [<i>x</i> arctan <i>x</i>]<sub>0</sub><sup>1</sup> − ∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span><i>x</i></span><span>1 + <i>x</i><sup>2</sup></span></span> <i>dx</i> <b>[A1]</b>": "∫<sub>0</sub><sup>1</sup> arctan <i>x</i> <i>dx</i> = [<i>x</i> arctan <i>x</i>]<sub>0</sub><sup>1</sup> − ∫<sub>0</sub><sup>1</sup> <span class=\"frac\"><span><i>x</i></span><span>1 + <i>x</i><sup>2</sup></span></span> <i>dx</i> <b>[A1]</b>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > data-title attribute
    "Integrate x/(1 + x²) and evaluate at the limits 0 and 1": "x/(1 + x²)을 적분하고 위끝 1과 아래끝 0 대입하기",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "Since d/dx(1 + x²) = 2x, the integral of x/(1 + x²) is (1/2) ln(1 + x²).": "d/dx(1 + x²) = 2x이므로 x/(1 + x²)의 적분은 (1/2) ln(1 + x²)이에요.",

    // Standard AHL integrals, substitution, integration by parts a > worked example > maths line
    "= [<i>x</i> arctan <i>x</i> − <span class=\"frac\"><span>1</span><span>2</span></span> ln(1 + <i>x</i><sup>2</sup>)]<sub>0</sub><sup>1</sup> = (1 · <span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2) − (0 − 0) = <b><span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2</b> <b>[M1 A1]</b>": "= [<i>x</i> arctan <i>x</i> − <span class=\"frac\"><span>1</span><span>2</span></span> ln(1 + <i>x</i><sup>2</sup>)]<sub>0</sub><sup>1</sup> = (1 · <span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2) − (0 − 0) = <b><span class=\"frac\"><span>π</span><span>4</span></span> − <span class=\"frac\"><span>1</span><span>2</span></span> ln 2</b> <b>[M1 A1]</b>",

    // Standard AHL integrals, substitution, integration by parts a > worked example > p
    "π/4 − (1/2) ln 2": "π/4 − (1/2) ln 2",

    // Standard AHL integrals, substitution, integration by parts a > try it > p
    "Find the exact value of <span class=\"chem\">int_0^3 2 / (x^2 + 9) dx</span>. (You can type an exact expression in terms of <span class=\"mono\">pi</span> such as <span class=\"mono\">pi/6</span>, or a 3 s.f. decimal.)": "<span class=\"chem\">int_0^3 2 / (x^2 + 9) dx</span>의 정확한 값을 구하시오 (Find). (<span class=\"mono\">pi/6</span>처럼 <span class=\"mono\">pi</span>를 포함한 정확한 식이나 유효숫자 3자리(3 s.f.) 소수로 입력할 수 있어요.)",

    // Standard AHL integrals, substitution, integration by parts a > try it > li
    "Match the integrand with the Formula Booklet standard integral <span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span> where <span class=\"chem\">a = 3</span>.": "<span class=\"chem\">a = 3</span>일 때 공식집의 기본 적분 <span class=\"chem\">int 1/(a^2 + x^2) dx = (1/a) arctan(x/a) + C</span>와 비교해 보세요.",

    // Standard AHL integrals, substitution, integration by parts a > try it > li
    "Factor out the 2 to get <span class=\"chem\">[(2/3) arctan(x/3)]_0^3</span> and use <span class=\"chem\">arctan(1) = pi/4</span>.": "2를 앞으로 빼내면 <span class=\"chem\">[(2/3) arctan(x/3)]_0^3</span>이 되고, <span class=\"chem\">arctan(1) = pi/4</span>를 이용해요.",

    // Standard AHL integrals, substitution, integration by parts a > try it > maths line
    "2 ∫<sub>0</sub><sup>3</sup> <span class=\"frac\"><span>1</span><span>3<sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = [<span class=\"frac\"><span>2</span><span>3</span></span> arctan(<span class=\"frac\"><span><i>x</i></span><span>3</span></span>)]<sub>0</sub><sup>3</sup> = <span class=\"frac\"><span>2</span><span>3</span></span>(arctan 1 − arctan 0) = <span class=\"frac\"><span>2</span><span>3</span></span> · <span class=\"frac\"><span>π</span><span>4</span></span> = <b><span class=\"frac\"><span>π</span><span>6</span></span> ≈ 0.524</b>": "2 ∫<sub>0</sub><sup>3</sup> <span class=\"frac\"><span>1</span><span>3<sup>2</sup> + <i>x</i><sup>2</sup></span></span> <i>dx</i> = [<span class=\"frac\"><span>2</span><span>3</span></span> arctan(<span class=\"frac\"><span><i>x</i></span><span>3</span></span>)]<sub>0</sub><sup>3</sup> = <span class=\"frac\"><span>2</span><span>3</span></span>(arctan 1 − arctan 0) = <span class=\"frac\"><span>2</span><span>3</span></span> · <span class=\"frac\"><span>π</span><span>4</span></span> = <b><span class=\"frac\"><span>π</span><span>6</span></span> ≈ 0.524</b>",

    // Area with the y-axis and volumes of revolution > data-toc attribute
    "Volumes of revolution": "회전체의 부피",

    // Area with the y-axis and volumes of revolution > h2
    "Area with the <i>y</i>-axis and volumes of revolution": "<i>y</i>축으로 둘러싸인 넓이와 회전체의 부피",

    // Area with the y-axis and volumes of revolution > p
    "When a region is bounded by a curve <span class=\"chem\">x = g(y)</span> and the <i>y</i>-axis between <span class=\"chem\">y = c</span> and <span class=\"chem\">y = d</span>, slicing horizontally into strips of thickness <span class=\"chem\">dy</span> gives the area <span class=\"chem\">A = int_c^d |x| dy</span>.": "영역이 <span class=\"chem\">y = c</span>와 <span class=\"chem\">y = d</span> 사이에서 곡선 <span class=\"chem\">x = g(y)</span>와 <i>y</i>축으로 둘러싸여 있을 때, 두께가 <span class=\"chem\">dy</span>인 가로 띠로 잘라 더하면 넓이 <span class=\"chem\">A = int_c^d |x| dy</span>를 얻어요.",

    // Area with the y-axis and volumes of revolution > p
    "If we rotate that region through <span class=\"chem\">2pi</span> radians (<span class=\"chem\">360°</span>) about one of the coordinate axes, each thin slice sweeps out a circular disc of radius <span class=\"chem\">R</span> and area <span class=\"chem\">pi R^2</span>:": "이 영역을 좌표축 중 하나를 둘레로 <span class=\"chem\">2pi</span> 라디안(<span class=\"chem\">360°</span>) 회전시키면, 각각의 얇은 조각이 반지름 <span class=\"chem\">R</span>, 단면적 <span class=\"chem\">pi R^2</span>인 원판을 만들어요:",

    // Area with the y-axis and volumes of revolution > equation > maths line
    "<i>V</i><sub><i>x</i></sub> = π ∫<sub><i>a</i></sub><sup><i>b</i></sup> <i>y</i><sup>2</sup> <i>dx</i> (about the <i>x</i>-axis), <i>V</i><sub><i>y</i></sub> = π ∫<sub><i>c</i></sub><sup><i>d</i></sup> <i>x</i><sup>2</sup> <i>dy</i> (about the <i>y</i>-axis)": "<i>V</i><sub><i>x</i></sub> = π ∫<sub><i>a</i></sub><sup><i>b</i></sup> <i>y</i><sup>2</sup> <i>dx</i> (<i>x</i>축 둘레 회전), <i>V</i><sub><i>y</i></sub> = π ∫<sub><i>c</i></sub><sup><i>d</i></sup> <i>x</i><sup>2</sup> <i>dy</i> (<i>y</i>축 둘레 회전)",

    // Area with the y-axis and volumes of revolution > equation > dt
    "V<sub>x</sub>": "V<sub>x</sub>",

    // Area with the y-axis and volumes of revolution > equation > dd
    "volume when rotated 2π radians about the <i>x</i>-axis (radius = <i>y</i>, limits are <i>x</i>-values)": "<i>x</i>축 둘레로 2π 라디안 회전한 부피 (반지름 = <i>y</i>, 적분 구간은 <i>x</i>값)",

    // Area with the y-axis and volumes of revolution > equation > dt
    "V<sub>y</sub>": "V<sub>y</sub>",

    // Area with the y-axis and volumes of revolution > equation > dd
    "volume when rotated 2π radians about the <i>y</i>-axis (radius = <i>x</i>, limits are <i>y</i>-values)": "<i>y</i>축 둘레로 2π 라디안 회전한 부피 (반지름 = <i>x</i>, 적분 구간은 <i>y</i>값)",

    // Area with the y-axis and volumes of revolution > h3
    "Hollow solids between two curves (the washer method)": "두 곡선 사이의 속이 빈 회전체",

    // Area with the y-axis and volumes of revolution > p
    "When the region enclosed between an outer curve <span class=\"chem\">y_{outer} = f(x)</span> and an inner curve <span class=\"chem\">y_{inner} = g(x)</span> (with <span class=\"chem\">f(x) &gt;= g(x) &gt;= 0</span>) is rotated about the <i>x</i>-axis, each vertical cross-section is a hollow ring (washer) whose area is the outer circle minus the inner hole:": "바깥쪽 곡선 <span class=\"chem\">y_{outer} = f(x)</span>와 안쪽 곡선 <span class=\"chem\">y_{inner} = g(x)</span>(<span class=\"chem\">f(x) &gt;= g(x) &gt;= 0</span>)로 둘러싸인 영역을 <i>x</i>축 둘레로 회전시키면, 각 세로 단면은 바깥 원에서 안쪽 구멍을 뺀 속이 빈 고리 모양이 돼요:",

    // Area with the y-axis and volumes of revolution > p
    "<span class=\"chem\">V = pi int_a^b ([y_{outer}]^2 - [y_{inner}]^2) dx = pi int_a^b ([f(x)]^2 - [g(x)]^2) dx</span>.": "<span class=\"chem\">V = pi int_a^b ([y_{outer}]^2 - [y_{inner}]^2) dx = pi int_a^b ([f(x)]^2 - [g(x)]^2) dx</span>.",

    // Area with the y-axis and volumes of revolution > not needed for IB > p
    "<strong>Classic mistake &amp; IB syllabus boundary:</strong>": "<strong>자주 하는 실수 &amp; IB 시험 범위 안내:</strong>",

    // Area with the y-axis and volumes of revolution > not needed for IB > li
    "<strong>Never square the difference!</strong> Writing <span class=\"chem\">pi int_a^b (y_1 - y_2)^2 dx</span> instead of <span class=\"chem\">pi int_a^b (y_1^2 - y_2^2) dx</span> is the most common volume mistake in IB HL exams. Always subtract the squared radii: <strong>outer squared minus inner squared</strong>.": "<strong>절대로 뺀 뒤 제곱하지 마세요!</strong> <span class=\"chem\">pi int_a^b (y_1^2 - y_2^2) dx</span> 대신 <span class=\"chem\">pi int_a^b (y_1 - y_2)^2 dx</span>라고 쓰는 것이 IB HL 부피 문제에서 가장 흔한 실수예요. 항상 <strong>바깥 반지름의 제곱에서 안쪽 반지름의 제곱을 빼야</strong> 해요.",

    // Area with the y-axis and volumes of revolution > not needed for IB > li
    "<strong>Not needed for IB — Cylindrical shells:</strong> The cylindrical shell method (<span class=\"chem\">V = 2pi int_a^b x y dx</span>) often taught by AI tutors and US calculus textbooks is <strong>not</strong> in the IB Math AA HL syllabus. For rotation about the <i>y</i>-axis, rearrange the curve for <span class=\"chem\">x^2</span> in terms of <i>y</i> and use <span class=\"chem\">V = pi int_c^d x^2 dy</span>.": "<strong>IB 시험 범위 외 — 원통셸 방법(원주각 적분):</strong> AI 튜터나 미국 미적분 교재에서 자주 가르치는 원통셸 방법(<span class=\"chem\">V = 2pi int_a^b x y dx</span>)은 IB Math AA HL 교육과정에 <strong>포함되지 않아요</strong>. <i>y</i>축 둘레 회전은 <span class=\"chem\">x^2</span>을 <i>y</i>에 관한 식으로 정리한 뒤 <span class=\"chem\">V = pi int_c^d x^2 dy</span>를 쓰세요.",

    // Area with the y-axis and volumes of revolution > widget > data-title attribute
    "Volume of revolution disc & 3D solid explorer": "회전체 원판 분할 및 3D 입체 탐색기",

    // Area with the y-axis and volumes of revolution > widget > data-kicker attribute
    "AHL 5.17 · Interactive": "AHL 5.17 · 인터랙티브",

    // Area with the y-axis and volumes of revolution > widget > figcaption
    "Left: the 2D profile <span class=\"chem\">y = f(x)</span> sliced into <i>N</i> rectangles of width <span class=\"chem\">Delta x</span>. Right: rotating each rectangle <span class=\"chem\">2pi</span> radians about the <i>x</i>-axis produces <i>N</i> circular discs of volume <span class=\"chem\">pi [f(x_i)]^2 Delta x</span>. Drag the 3D view to inspect the solid from any angle.": "왼쪽: 폭이 <span class=\"chem\">Delta x</span>인 <i>N</i>개의 직사각형으로 나눈 2D 단면 <span class=\"chem\">y = f(x)</span>. 오른쪽: 각 직사각형을 <i>x</i>축 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시켜 만든 부피 <span class=\"chem\">pi [f(x_i)]^2 Delta x</span>인 <i>N</i>개의 원판. 3D 화면을 드래그해서 여러 각도에서 입체를 살펴보세요.",

    // Area with the y-axis and volumes of revolution > worked example > h3
    "Volume of revolution between two curves about the x-axis": "두 곡선 사이의 영역을 x축 둘레로 회전한 입체의 부피",

    // Area with the y-axis and volumes of revolution > worked example > p
    "The region <i>R</i> is enclosed by the curve <span class=\"chem\">y = sqrt(x)</span> and the line <span class=\"chem\">y = x / 2</span> in the first quadrant. Find the exact volume of the solid formed when <i>R</i> is rotated through <span class=\"chem\">2pi</span> radians about the <i>x</i>-axis. <strong>[6 marks]</strong>": "제1사분면에서 곡선 <span class=\"chem\">y = sqrt(x)</span>와 직선 <span class=\"chem\">y = x / 2</span>로 둘러싸인 영역을 <i>R</i>이라고 해요. <i>R</i>을 <i>x</i>축 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시켜 생긴 입체의 정확한 부피를 구하시오 (Find). <strong>[6 marks]</strong>",

    // Area with the y-axis and volumes of revolution > worked example > data-title attribute
    "Find the x-coordinates of the points of intersection": "교점의 x좌표 구하기",

    // Area with the y-axis and volumes of revolution > worked example > p
    "Equating the two curves gives the limits of integration a and b along the x-axis.": "두 식을 같다고 놓으면 x축 위의 적분 구간 a와 b를 구할 수 있어요.",

    // Area with the y-axis and volumes of revolution > worked example > maths line
    "√<i>x</i> = <span class=\"frac\"><span><i>x</i></span><span>2</span></span> ⇒ <i>x</i> = <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> ⇒ <i>x</i><sup>2</sup> − 4<i>x</i> = 0 ⇒ <i>x</i> = 0 or <i>x</i> = 4 <b>[M1 A1]</b>": "√<i>x</i> = <span class=\"frac\"><span><i>x</i></span><span>2</span></span> ⇒ <i>x</i> = <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> ⇒ <i>x</i><sup>2</sup> − 4<i>x</i> = 0 ⇒ <i>x</i> = 0 또는 <i>x</i> = 4 <b>[M1 A1]</b>",

    // Area with the y-axis and volumes of revolution > worked example > data-title attribute
    "Set up the washer integral π ∫ (y_outer² − y_inner²) dx": "고리형 부피 적분 π ∫ (y_outer² − y_inner²) dx 세우기",

    // Area with the y-axis and volumes of revolution > worked example > p
    "On [0, 4], √x ≥ x/2, so y_outer = √x and y_inner = x/2. Square each radius separately before subtracting.": "[0, 4]에서 √x ≥ x/2이므로 y_outer = √x, y_inner = x/2예요. 각 반지름을 따로 제곱한 뒤 빼세요.",

    // Area with the y-axis and volumes of revolution > worked example > data-title attribute
    "Anti-differentiate and evaluate at the limits": "부정적분을 구하고 적분 구간 대입하기",

    // Area with the y-axis and volumes of revolution > worked example > p
    "Use the power rule and substitute x = 4 and x = 0.": "거듭제곱 적분 공식을 쓰고 x = 4와 x = 0을 대입해요.",

    // Area with the y-axis and volumes of revolution > try it > p
    "The region bounded by the curve <span class=\"chem\">y = x^2</span>, the <i>y</i>-axis, and the horizontal line <span class=\"chem\">y = 4</span> in the first quadrant is rotated through <span class=\"chem\">2pi</span> radians about the <strong><i>y</i>-axis</strong>. Find the volume of the solid generated (type an exact multiple of <span class=\"mono\">pi</span> such as <span class=\"mono\">8*pi</span>, or a 3 s.f. decimal).": "제1사분면에서 곡선 <span class=\"chem\">y = x^2</span>, <i>y</i>축, 그리고 수평선 <span class=\"chem\">y = 4</span>로 둘러싸인 영역을 <strong><i>y</i>축</strong> 둘레로 <span class=\"chem\">2pi</span> 라디안 회전시켜요. 이때 생기는 입체의 부피를 구하시오 (Find). (<span class=\"mono\">8*pi</span>처럼 <span class=\"mono\">pi</span>의 정확한 배수나 유효숫자 3자리(3 s.f.) 소수로 입력하세요.)",

    // Area with the y-axis and volumes of revolution > try it > li
    "For rotation about the <i>y</i>-axis, use <span class=\"chem\">V = pi int_c^d x^2 dy</span>. Since <span class=\"chem\">y = x^2</span>, we can substitute <span class=\"chem\">x^2 = y</span> directly!": "<i>y</i>축 둘레 회전에는 <span class=\"chem\">V = pi int_c^d x^2 dy</span>를 써요. <span class=\"chem\">y = x^2</span>이므로 <span class=\"chem\">x^2 = y</span>를 바로 대입할 수 있어요!",

    // Area with the y-axis and volumes of revolution > try it > li
    "Integrate with respect to <i>y</i> from <span class=\"chem\">y = 0</span> to <span class=\"chem\">y = 4</span>: <span class=\"chem\">V = pi int_0^4 y dy = pi [y^2 / 2]_0^4</span>.": "<span class=\"chem\">y = 0</span>에서 <span class=\"chem\">y = 4</span>까지 <i>y</i>에 대해 적분하세요: <span class=\"chem\">V = pi int_0^4 y dy = pi [y^2 / 2]_0^4</span>.",

    // Quick practice > data-toc attribute
    "Practice": "연습 문제",

    // Quick practice > h2
    "Quick practice": "빠른 연습 문제",

    // widget string (assets/js/widgets-t5-3.js)
    "Indeterminate 0/0 limit": "0/0 부정형 극한",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→0) sin(2x) / ln(1 + x)": "lim (x→0) sin(2x) / ln(1 + x)",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→0) (e^x − 1) / sin(x)": "lim (x→0) (e^x − 1) / sin(x)",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→1) ln(x) / (x^2 − 1)": "lim (x→1) ln(x) / (x^2 − 1)",

    // widget string (assets/js/widgets-t5-3.js)
    "lim (x→π/2) cos(x) / (2x − π)": "lim (x→π/2) cos(x) / (2x − π)",

    // widget string (assets/js/widgets-t5-3.js)
    "Zoom magnification around x = a": "x = a 주위 확대 배율",

    // widget string (assets/js/widgets-t5-3.js)
    "At x = a": "x = a에서",

    // widget string (assets/js/widgets-t5-3.js)
    "Sample ratio f(x)/g(x)": "표본 비율 f(x)/g(x)",

    // widget string (assets/js/widgets-t5-3.js)
    "Tangent slope ratio f′(a)/g′(a)": "접선 기울기 비 f′(a)/g′(a)",

    // widget string (assets/js/widgets-t5-3.js)
    "Linearization gap": "선형 근사 오차",

    // widget string (assets/js/widgets-t5-3.js)
    "Local linearization of f(x) and g(x) near x = a": "x = a 근방에서 f(x)와 g(x)의 국소 선형 근사",

    // widget string (assets/js/widgets-t5-3.js)
    "Tangent f′(a)(x − a)": "접선 f′(a)(x − a)",

    // widget string (assets/js/widgets-t5-3.js)
    "Tangent g′(a)(x − a)": "접선 g′(a)(x − a)",

    // widget string (assets/js/widgets-t5-3.js)
    "Solid profile": "회전체 단면",

    // widget string (assets/js/widgets-t5-3.js)
    "Disc: y = √x": "원판: y = √x",

    // widget string (assets/js/widgets-t5-3.js)
    "Disc: y = 0.5x (cone)": "원판: y = 0.5x (원뿔)",

    // widget string (assets/js/widgets-t5-3.js)
    "Disc: y = sin(x) + 0.8": "원판: y = sin(x) + 0.8",

    // widget string (assets/js/widgets-t5-3.js)
    "Washer: outer y = √x, inner y = 0.5x": "고리형: 바깥 y = √x, 안쪽 y = 0.5x",

    // widget string (assets/js/widgets-t5-3.js)
    "Upper limit b": "적분 위끝 b",

    // widget string (assets/js/widgets-t5-3.js)
    "Number of discs N": "원판 개수 N",

    // widget string (assets/js/widgets-t5-3.js)
    "Riemann N-disc sum": "N개 원판 리만 합",

    // widget string (assets/js/widgets-t5-3.js)
    "Exact integral V = π ∫ y² dx": "정확한 적분 V = π ∫ y² dx",

    // widget string (assets/js/widgets-t5-3.js)
    "Approximation error": "근사 오차",

    // widget string (assets/js/widgets-t5-3.js)
    "2D cross-section and Riemann slices": "2D 단면과 리만 분할 조각",

    // widget string (assets/js/widgets-t5-3.js)
    "3D solid of revolution about the x-axis": "x축 둘레 3D 회전체",

  }
});
