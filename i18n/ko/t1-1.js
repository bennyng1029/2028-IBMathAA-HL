/* t1-1 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-1', {
  strings: {

    // page title (browser tab)
    "1.1 Sequences, series and financial models | Analysis Lab": "1.1 수열, 급수 및 금융 모델 | Analysis Lab",

    // Sequences, series and financial models > page header > p
    "Topic 1.1 · SL 1.1–1.4, 1.8": "Topic 1.1 · SL 1.1–1.4, 1.8",

    // Sequences, series and financial models > page header > h1
    "Sequences, series and financial models": "수열, 급수와 금융 모델",

    // Sequences, series and financial models > page header > span
    "How do we model patterns that grow by a fixed step versus a fixed percentage, and when does an infinite sum reach a finite limit?": "일정한 간격으로 증가하는 패턴과 일정한 비율로 증가하는 패턴은 어떻게 모델링할까요? 또, 무한합이 유한한 극한에 수렴하는 조건은 무엇일까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > p
    "Tick each skill when you can do it confidently without looking at your notes. Everything on this page is SL core, examined on both SL and HL papers.": "노트를 보지 않고 자신 있게 풀 수 있는 항목에 체크하세요. 이 페이지의 모든 내용은 SL 핵심 범위로, SL과 HL 시험 모두에 출제됩니다.",

    // What you need to be able to do > checklist > span
    "Perform operations with numbers in standard form <span class=\"chem\">a × 10^k</span> where <span class=\"chem\">1 &lt;= a &lt; 10</span> and <span class=\"chem\">k</span> is an integer.": "과학적 표기법 <span class=\"chem\">a × 10^k</span> (<span class=\"chem\">1 &lt;= a &lt; 10</span>, <span class=\"chem\">k</span>는 정수)으로 나타낸 수의 사칙연산을 할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Find the <span class=\"chem\">n</span>-th term <span class=\"chem\">u_n</span> and sum of the first <span class=\"chem\">n</span> terms <span class=\"chem\">S_n</span> of an arithmetic sequence.": "등차수열의 제<span class=\"chem\">n</span>항(일반항) <span class=\"chem\">u_n</span>과 첫째항부터 제<span class=\"chem\">n</span>항까지의 합 <span class=\"chem\">S_n</span>을 구할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Evaluate and interpret sigma notation <span class=\"chem\">Σ_{r=a}^b u_r</span>, counting <span class=\"chem\">b - a + 1</span> terms accurately.": "합의 기호 <span class=\"chem\">Σ_{r=a}^b u_r</span>을 계산하고 해석하며, 항의 개수 <span class=\"chem\">b - a + 1</span>을 정확히 셀 수 있어요.",

    // What you need to be able to do > checklist > span
    "Find the <span class=\"chem\">n</span>-th term <span class=\"chem\">u_n</span> and finite sum <span class=\"chem\">S_n</span> of a geometric sequence, and solve threshold inequalities <span class=\"chem\">S_n &gt; K</span>.": "등비수열의 제<span class=\"chem\">n</span>항 <span class=\"chem\">u_n</span>과 부분합 <span class=\"chem\">S_n</span>을 구하고, 부등식 <span class=\"chem\">S_n &gt; K</span>를 풀 수 있어요.",

    // What you need to be able to do > checklist > span
    "Test for convergence (<span class=\"chem\">|r| &lt; 1</span>) and calculate the sum to infinity <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "등비급수의 수렴 조건(<span class=\"chem\">|r| &lt; 1</span>)을 판별하고, 등비급수의 합 <span class=\"chem\">S_infty = u_1 / (1 - r)</span>을 계산할 수 있어요.",

    // What you need to be able to do > checklist > span
    "Calculate compound interest, annual depreciation, and regular savings using the formula booklet and GDC Finance Solver.": "공식집(Formula booklet)과 그래픽 계산기(GDC)의 Finance Solver를 이용해 복리, 연간 감가상각, 정기 적금을 계산할 수 있어요.",

    // Question decoder: spotting which technique to use > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which technique to use > h2
    "Question decoder: spotting which technique to use": "문제 디코더: 어떤 해법을 쓸지 파악하기",

    // Question decoder: spotting which technique to use > p
    "Sequence and financial problems often hide the mathematical formula behind everyday wording. Use this table to translate exam phrases directly into equations.": "수열과 금융 문제에서는 수학 공식이 일상적인 문장 속에 숨어 있는 경우가 많아요. 아래 표를 활용해 시험 문장을 바로 식과 공식으로 바꿔 보세요.",

    // Question decoder: spotting which technique to use > table > caption
    "Question decoder — Sequences, series and finance": "문제 디코더 — 수열, 급수 및 금융",

    // Question decoder: spotting which technique to use > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which technique to use > table > th
    "What it means (formula &amp; setup)": "수학적 의미 (공식 및 식 세우기)",

    // Question decoder: spotting which technique to use > table > th
    "Paper 1 (No GDC) vs Paper 2 (GDC)": "Paper 1 (계산기 불가) vs Paper 2 (GDC)",

    // Question decoder: spotting which technique to use > table > th
    "“Increases by a fixed amount each year / month”": "“매년/매월 일정한 금액만큼 증가한다”",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Arithmetic sequence</strong> with constant difference <span class=\"chem\">d = u_2 - u_1</span>.": "공차가 <span class=\"chem\">d = u_2 - u_1</span>인 <strong>등차수열</strong>이에요.",

    // Question decoder: spotting which technique to use > table > td
    "Substitute <span class=\"chem\">u_1</span> and <span class=\"chem\">d</span> into <span class=\"chem\">u_n = u_1 + (n - 1)d</span>.": "<span class=\"chem\">u_1</span>과 <span class=\"chem\">d</span>를 <span class=\"chem\">u_n = u_1 + (n - 1)d</span>에 대입해요.",

    // Question decoder: spotting which technique to use > table > th
    "“Increases by <i>p</i>% each year” / “Loses <i>p</i>% of its value each year”": "“매년 <i>p</i>%씩 증가한다” / “매년 가치가 <i>p</i>%씩 감소한다”",

    // Question decoder: spotting which technique to use > table > td
    "<strong>Geometric sequence</strong> with <span class=\"chem\">r = 1 + p/100</span> (growth) or <span class=\"chem\">r = 1 - p/100</span> (decay).": "공비가 <span class=\"chem\">r = 1 + p/100</span>(증가) 또는 <span class=\"chem\">r = 1 - p/100</span>(감소)인 <strong>등비수열</strong>이에요.",

    // Question decoder: spotting which technique to use > table > td
    "Watch the timeline! Value after <span class=\"chem\">t</span> full years is <span class=\"chem\">PV × r^t</span> (which is <span class=\"chem\">u_{t+1}</span> if <span class=\"chem\">u_1</span> is at <span class=\"chem\">t = 0</span>).": "시점을 주의하세요! <span class=\"chem\">t</span>년이 지난 후의 가치는 <span class=\"chem\">PV × r^t</span>예요(<span class=\"chem\">t = 0</span>일 때가 <span class=\"chem\">u_1</span>이면 <span class=\"chem\">u_{t+1}</span>에 해당해요).",

    // Question decoder: spotting which technique to use > table > th
    "“Find the value in the <i>n</i>-th year” vs “Find the total over the first <i>n</i> years”": "“제<i>n</i>년차의 값을 구하시오” vs “처음 <i>n</i>년 동안의 총합을 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Single year/step <span class=\"chem\">-&gt;</span> term <span class=\"chem\">u_n</span>.<br>Cumulative total <span class=\"chem\">-&gt;</span> series sum <span class=\"chem\">S_n</span>.": "특정 한 해/단계 <span class=\"chem\">-&gt;</span> 일반항 <span class=\"chem\">u_n</span>.<br>누적 합계 <span class=\"chem\">-&gt;</span> 급수의 합 <span class=\"chem\">S_n</span>.",

    // Question decoder: spotting which technique to use > table > td
    "Underline “in the <i>n</i>-th” (<span class=\"chem\">u_n</span>) vs “total / altogether / over <i>n</i>” (<span class=\"chem\">S_n</span>) before writing a formula.": "공식을 쓰기 전에 “in the <i>n</i>-th”(<span class=\"chem\">u_n</span>)인지 “total / altogether / over <i>n</i>”(<span class=\"chem\">S_n</span>)인지 밑줄을 그어 구분하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“<i>a</i>, <i>b</i>, <i>c</i> are consecutive terms of an arithmetic / geometric sequence”": "“<i>a</i>, <i>b</i>, <i>c</i>가 등차수열 / 등비수열의 연속하는 세 항이다”",

    // Question decoder: spotting which technique to use > table > td
    "Arithmetic: <span class=\"chem\">b - a = c - b &lt;=&gt; 2b = a + c</span>.<br>Geometric: <span class=\"chem\">b / a = c / b &lt;=&gt; b^2 = ac</span>.": "등차수열: <span class=\"chem\">b - a = c - b &lt;=&gt; 2b = a + c</span>.<br>등비수열: <span class=\"chem\">b / a = c / b &lt;=&gt; b^2 = ac</span>.",

    // Question decoder: spotting which technique to use > table > td
    "Solve the resulting quadratic and check whether any root violates “distinct terms” or “convergent series”.": "얻어진 이차방정식을 푼 뒤, “서로 다른 항(distinct terms)”이나 “수렴하는 급수(convergent series)” 조건에 어긋나는 해가 없는지 확인하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Given that <span class=\"chem\">S_n = 3n^2 + 5n</span>, find <span class=\"chem\">u_n</span>”": "“<span class=\"chem\">S_n = 3n^2 + 5n</span>일 때, <span class=\"chem\">u_n</span>을 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Recover terms from cumulative sums using <span class=\"chem\">u_1 = S_1</span> and <span class=\"chem\">u_n = S_n - S_{n-1}</span> for <span class=\"chem\">n &gt;= 2</span>.": "첫째항부터의 합으로부터 <span class=\"chem\">u_1 = S_1</span>과 <span class=\"chem\">u_n = S_n - S_{n-1}</span> (<span class=\"chem\">n &gt;= 2</span>)을 이용해 일반항을 구해요.",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1 shortcut</strong>: Find <span class=\"chem\">u_1 = S_1</span> and <span class=\"chem\">u_2 = S_2 - S_1</span>; if <span class=\"chem\">S_n</span> is a quadratic with zero constant term, <span class=\"chem\">d = u_2 - u_1</span>.": "<strong>P1 지름길</strong>: <span class=\"chem\">u_1 = S_1</span>과 <span class=\"chem\">u_2 = S_2 - S_1</span>을 구하세요. <span class=\"chem\">S_n</span>이 상수항이 없는 이차식이면 <span class=\"chem\">d = u_2 - u_1</span>이에요.",

    // Question decoder: spotting which technique to use > table > th
    "“The infinite series converges” / “Find the sum to infinity”": "“무한급수가 수렴한다” / “등비급수의 합(sum to infinity)을 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Geometric series with <span class=\"chem\">|r| &lt; 1</span> (<span class=\"chem\">-1 &lt; r &lt; 1</span>) and <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "<span class=\"chem\">|r| &lt; 1</span> (<span class=\"chem\">-1 &lt; r &lt; 1</span>)인 등비급수이며, <span class=\"chem\">S_infty = u_1 / (1 - r)</span>이에요.",

    // Question decoder: spotting which technique to use > table > td
    "Use <span class=\"chem\">|r| &lt; 1</span> to reject extraneous roots of <span class=\"chem\">r</span>, then substitute into <span class=\"chem\">S_infty</span>.": "<span class=\"chem\">|r| &lt; 1</span> 조건으로 맞지 않는 <span class=\"chem\">r</span> 값을 걸러낸 뒤 <span class=\"chem\">S_infty</span> 공식에 대입하세요.",

    // Question decoder: spotting which technique to use > table > th
    "“Find the least number of terms for which the sum exceeds <i>K</i>”": "“합이 <i>K</i>를 초과하기 위한 최소 항의 개수를 구하시오”",

    // Question decoder: spotting which technique to use > table > td
    "Inequality <span class=\"chem\">S_n &gt; K</span> where <span class=\"chem\">n</span> is a positive integer.": "<span class=\"chem\">n</span>이 양의 정수인 부등식 <span class=\"chem\">S_n &gt; K</span>를 세워요.",

    // Question decoder: spotting which technique to use > table > td
    "<strong>P1</strong>: Isolate <span class=\"chem\">r^n</span> and take logs (flip inequality if <span class=\"chem\">0 &lt; r &lt; 1</span> since <span class=\"chem\">ln r &lt; 0</span>).<br><strong>P2</strong>: Use GDC table or graph intersection, then round <strong>up</strong> to the next integer.": "<strong>P1</strong>: <span class=\"chem\">r^n</span>만 남긴 뒤 로그를 취하세요(<span class=\"chem\">0 &lt; r &lt; 1</span>이면 <span class=\"chem\">ln r &lt; 0</span>이므로 부등호 방향이 반대로 바뀌어요).<br><strong>P2</strong>: GDC 표(Table) 또는 그래프 교점을 찾은 뒤 다음 정수로 <strong>올림</strong>하세요.",

    // Numbers in standard form > data-toc attribute
    "Standard form": "과학적 표기법",

    // Numbers in standard form > h2
    "Numbers in standard form": "과학적 표기법 (유효숫자 표기)",

    // Numbers in standard form > p
    "In scientific and mathematical work, very large and very small numbers are written in <dfn data-def=\"Writing a number in the form a × 10^k where 1 ≤ a &lt; 10 and k is an integer (also called scientific notation).\">standard form</dfn> (scientific notation):": "과학과 수학에서는 아주 큰 수나 아주 작은 수를 <dfn data-def=\"Writing a number in the form a × 10^k where 1 ≤ a &lt; 10 and k is an integer (also called scientific notation).\">과학적 표기법 <span class=\"en-term\">(standard form)</span></dfn>(유효숫자 표기)으로 나타내요:",

    // Numbers in standard form > data-def attribute
    "Writing a number in the form a × 10^k where 1 ≤ a < 10 and k is an integer (also called scientific notation).": "수를 a × 10^k (1 ≤ a < 10, k는 정수) 꼴로 나타내는 표기법 (scientific notation이라고도 함).",

    // Numbers in standard form > equation > maths line
    "<i>a</i> × 10<sup><i>k</i></sup> where 1 ≤ <i>a</i> &lt; 10 and <i>k</i> ∈ ℤ": "<i>a</i> × 10<sup><i>k</i></sup> (단, 1 ≤ <i>a</i> &lt; 10, <i>k</i> ∈ ℤ)",

    // Numbers in standard form > equation > dd
    "coefficient (mantissa), strictly at least 1 and less than 10 (for positive numbers)": "계수(가수), 양수일 때 1 이상 10 미만이어야 해요",

    // Numbers in standard form > equation > dd
    "integer exponent indicating the power of 10": "10의 거듭제곱을 나타내는 정수 지수",

    // Numbers in standard form > p
    "On Paper 1 (no calculator), handle the coefficients <span class=\"chem\">a</span> and powers of 10 separately:": "계산기 사용 불가(Paper 1) 시험에서는 계수 <span class=\"chem\">a</span>와 10의 거듭제곱을 따로 계산하세요:",

    // Numbers in standard form > li
    "<strong>Multiplication and division</strong>: Multiply or divide the coefficients, add or subtract the exponents (<span class=\"chem\">10^m × 10^n = 10^{m+n}</span>, <span class=\"chem\">10^m / 10^n = 10^{m-n}</span>), and adjust if the new coefficient falls outside <span class=\"chem\">[1, 10)</span>.": "<strong>곱셈과 나눗셈</strong>: 계수끼리 곱하거나 나누고, 지수끼리 더하거나 빼세요(<span class=\"chem\">10^m × 10^n = 10^{m+n}</span>, <span class=\"chem\">10^m / 10^n = 10^{m-n}</span>). 새 계수가 <span class=\"chem\">[1, 10)</span> 범위를 벗어나면 자릿수를 조정하세요.",

    // Numbers in standard form > li
    "<strong>Addition and subtraction</strong>: Rewrite both numbers with the <strong>same power of 10</strong> first, add or subtract the coefficients, then normalize back to <span class=\"chem\">1 &lt;= a &lt; 10</span>.": "<strong>덧셈과 뺄셈</strong>: 먼저 두 수의 <strong>10의 거듭제곱을 같게</strong> 맞춘 다음 계수를 더하거나 빼고, 다시 <span class=\"chem\">1 &lt;= a &lt; 10</span> 범위로 정리하세요.",

    // Numbers in standard form > common mistake > p
    "Never leave a final answer as <span class=\"chem\">14.2 × 10^5</span> or <span class=\"chem\">0.65 × 10^{-3}</span> when a question asks for the form <span class=\"chem\">a × 10^k</span>. You will lose the final accuracy mark unless <span class=\"chem\">1 &lt;= a &lt; 10</span> (<span class=\"chem\">1.42 × 10^6</span> and <span class=\"chem\">6.5 × 10^{-4}</span>). Also never write calculator shorthand like <span class=\"mono\">6.5E-4</span> on an exam paper.": "문제에서 <span class=\"chem\">a × 10^k</span> 꼴을 요구할 때 <span class=\"chem\">14.2 × 10^5</span>나 <span class=\"chem\">0.65 × 10^{-3}</span>처럼 남겨 두지 마세요. <span class=\"chem\">1 &lt;= a &lt; 10</span>(<span class=\"chem\">1.42 × 10^6</span>, <span class=\"chem\">6.5 × 10^{-4}</span>) 조건을 맞추지 않으면 마지막 정확도 점수(A1)를 잃어요. 또한 시험지에는 계산기 표기인 <span class=\"mono\">6.5E-4</span>를 절대 쓰지 마세요.",

    // Arithmetic sequences, series and sigma notation > data-toc attribute
    "Arithmetic": "등차수열",

    // Arithmetic sequences, series and sigma notation > h2
    "Arithmetic sequences, series and sigma notation": "등차수열, 등차급수와 합의 기호 (Σ)",

    // Arithmetic sequences, series and sigma notation > p
    "An <dfn data-def=\"A sequence in which the difference between any term and its preceding term is a constant d, called the common difference.\">arithmetic sequence</dfn> changes by adding a fixed step <span class=\"chem\">d</span>, called the <dfn data-def=\"The constant difference d = u_{n} - u_{n-1} between consecutive terms of an arithmetic sequence.\">common difference</dfn>, from one term to the next. Jumping from the first term <span class=\"chem\">u_1</span> to the <span class=\"chem\">n</span>-th term <span class=\"chem\">u_n</span> takes <span class=\"chem\">(n - 1)</span> steps of size <span class=\"chem\">d</span>.": "<dfn data-def=\"A sequence in which the difference between any term and its preceding term is a constant d, called the common difference.\">등차수열 <span class=\"en-term\">(arithmetic sequence)</span></dfn>은 첫째항부터 차례로 일정한 수 <span class=\"chem\">d</span>를 더하여 얻어지는 수열이에요. 이때 이 일정한 차이를 <dfn data-def=\"The constant difference d = u_{n} - u_{n-1} between consecutive terms of an arithmetic sequence.\">공차 <span class=\"en-term\">(common difference)</span></dfn>라고 해요. 첫째항 <span class=\"chem\">u_1</span>에서 제<span class=\"chem\">n</span>항 <span class=\"chem\">u_n</span>까지는 크기 <span class=\"chem\">d</span>인 간격이 <span class=\"chem\">(n - 1)</span>번 있어요.",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "A sequence in which the difference between any term and its preceding term is a constant d, called the common difference.": "이웃하는 두 항의 차가 일정한 상수 d(공차)인 수열.",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "The constant difference d = u_{n} - u_{n-1} between consecutive terms of an arithmetic sequence.": "등차수열에서 연속하는 두 항 사이의 일정한 차 d = u_{n} - u_{n-1}.",

    // Arithmetic sequences, series and sigma notation > formula booklet note > p
    "<strong>Section 1.2 of your Formula Booklet</strong> gives both the <span class=\"chem\">n</span>-th term and the two equivalent sum formulas for an arithmetic sequence:": "<strong>공식집(Formula Booklet) Section 1.2</strong>에는 등차수열의 일반항(제<span class=\"chem\">n</span>항)과 두 가지 등차급수의 합 공식이 수록되어 있어요:",

    // Arithmetic sequences, series and sigma notation > equation > dd
    // Geometric sequences, finite series and sum to infinity > equation > dd
    "first term": "첫째항",

    // Arithmetic sequences, series and sigma notation > equation > dd
    "common difference (<span class=\"chem\">d = u_2 - u_1 = u_{n} - u_{n-1}</span>)": "공차 (<span class=\"chem\">d = u_2 - u_1 = u_{n} - u_{n-1}</span>)",

    // Arithmetic sequences, series and sigma notation > equation > dt
    "u<sub>n</sub>": "u<sub>n</sub>",

    // Arithmetic sequences, series and sigma notation > equation > dd
    "<span class=\"chem\">n</span>-th term": "제<span class=\"chem\">n</span>항 (일반항)",

    // Arithmetic sequences, series and sigma notation > equation > dt
    // Geometric sequences, finite series and sum to infinity > equation > dt
    "S<sub>n</sub>": "S<sub>n</sub>",

    // Arithmetic sequences, series and sigma notation > equation > dd
    "sum of the first <span class=\"chem\">n</span> terms (<span class=\"chem\">u_1 + u_2 + ... + u_n</span>)": "첫째항부터 제<span class=\"chem\">n</span>항까지의 합 (<span class=\"chem\">u_1 + u_2 + ... + u_n</span>)",

    // Arithmetic sequences, series and sigma notation > h3
    "Sigma notation <span class=\"chem\">Σ</span>": "합의 기호 <span class=\"chem\">Σ</span> (시그마 표기)",

    // Arithmetic sequences, series and sigma notation > p
    "A <dfn data-def=\"The sum of the terms of a sequence: u_1 + u_2 + ... + u_n.\">series</dfn> is the sum of the terms of a sequence. We write series compactly using <dfn data-def=\"Summation notation Σ_{r=a}^{b} f(r), which means the sum of f(r) as the integer index r steps from a to b inclusive.\">sigma notation</dfn>:": "<dfn data-def=\"The sum of the terms of a sequence: u_1 + u_2 + ... + u_n.\">급수 <span class=\"en-term\">(series)</span></dfn>는 수열의 각 항을 덧셈 기호로 연결한 합이에요. 이를 간단히 나타낼 때 <dfn data-def=\"Summation notation Σ_{r=a}^{b} f(r), which means the sum of f(r) as the integer index r steps from a to b inclusive.\">합의 기호 <span class=\"en-term\">(sigma notation)</span></dfn>를 사용해요:",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "The sum of the terms of a sequence: u_1 + u_2 + ... + u_n.": "수열의 항들을 차례로 더한 합: u_1 + u_2 + ... + u_n.",

    // Arithmetic sequences, series and sigma notation > data-def attribute
    "Summation notation Σ_{r=a}^{b} f(r), which means the sum of f(r) as the integer index r steps from a to b inclusive.": "정수 r이 a부터 b까지 1씩 증가할 때 f(r)의 값을 모두 더한다는 합의 기호 Σ_{r=a}^{b} f(r).",

    // Arithmetic sequences, series and sigma notation > equation > maths line
    "∑<sub><i>r</i> = <i>a</i></sub><sup><i>b</i></sup> <i>f</i>(<i>r</i>) = <i>f</i>(<i>a</i>) + <i>f</i>(<i>a</i> + 1) + … + <i>f</i>(<i>b</i>) (number of terms = <i>b</i> − <i>a</i> + 1)": "∑<sub><i>r</i> = <i>a</i></sub><sup><i>b</i></sup> <i>f</i>(<i>r</i>) = <i>f</i>(<i>a</i>) + <i>f</i>(<i>a</i> + 1) + … + <i>f</i>(<i>b</i>) (항의 개수 = <i>b</i> − <i>a</i> + 1)",

    // Arithmetic sequences, series and sigma notation > p
    "Whenever <span class=\"chem\">f(r)</span> is a linear expression in <span class=\"chem\">r</span> (such as <span class=\"chem\">4r - 3</span>), the terms form an arithmetic series with common difference equal to the coefficient of <span class=\"chem\">r</span>.": "<span class=\"chem\">f(r)</span>가 <span class=\"chem\">r</span>에 대한 일차식(예: <span class=\"chem\">4r - 3</span>)이면, 각 항은 <span class=\"chem\">r</span>의 계수를 공차로 가지는 등차수열을 이뤄요.",

    // Arithmetic sequences, series and sigma notation > common mistake > p
    "<strong>Two classic sigma-notation traps:</strong><br> 1. In <span class=\"chem\">Σ_{r=4}^{15} u_r</span>, there are <span class=\"chem\">15 - 4 + 1 = 12</span> terms, <strong>not</strong> <span class=\"chem\">15 - 4 = 11</span>.<br> 2. The “first term” of that sum is evaluated at the lower limit <span class=\"chem\">r = 4</span>, not at <span class=\"chem\">r = 1</span>.": "<strong>시그마 표기에서 자주 빠지는 두 가지 함정:</strong><br> 1. <span class=\"chem\">Σ_{r=4}^{15} u_r</span>에서 항의 개수는 <span class=\"chem\">15 - 4 = 11</span>이 <strong>아니라</strong> <span class=\"chem\">15 - 4 + 1 = 12</span>개예요.<br> 2. 이 합의 “첫째항”은 <span class=\"chem\">r = 1</span>이 아니라 아래끝 <span class=\"chem\">r = 4</span>를 대입한 값이에요.",

    // Arithmetic sequences, series and sigma notation > worked example > h3
    "Finding an arithmetic series sum from two given terms": "두 항이 주어졌을 때 등차급수의 합 구하기",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "In an arithmetic sequence, the third term is <span class=\"chem\">u_3 = 22</span> and the eleventh term is <span class=\"chem\">u_{11} = -10</span>. Find the value of <span class=\"chem\">k</span> given that the sum of the first <span class=\"chem\">k</span> terms is <span class=\"chem\">S_k = 0</span> (where <span class=\"chem\">k &gt; 0</span>). <strong>[5 marks]</strong>": "등차수열에서 제3항이 <span class=\"chem\">u_3 = 22</span>이고 제11항이 <span class=\"chem\">u_{11} = -10</span>이에요. 첫째항부터 제<span class=\"chem\">k</span>항까지의 합이 <span class=\"chem\">S_k = 0</span>(<span class=\"chem\">k &gt; 0</span>)일 때, <span class=\"chem\">k</span>의 값을 구하시오 (Find). <strong>[5 marks]</strong>",

    // Arithmetic sequences, series and sigma notation > worked example > data-title attribute
    "Set up equations for u₃ and u₁₁ to find d": "u₃와 u₁₁의 식을 세워 공차 d 구하기",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "Jumping from term 3 to term 11 takes 8 steps of size d.": "제3항에서 제11항까지는 공차 d만큼 8번 이동해요.",

    // Arithmetic sequences, series and sigma notation > worked example > data-title attribute
    "Back-substitute d to find the first term u₁": "d를 대입하여 첫째항 u₁ 구하기",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "Use u₃ = u₁ + 2d = 22 to find u₁.": "u₃ = u₁ + 2d = 22를 이용해 u₁을 구해요.",

    // Arithmetic sequences, series and sigma notation > worked example > data-title attribute
    "Solve S_k = 0 for k > 0": "k > 0일 때 S_k = 0 풀기",

    // Arithmetic sequences, series and sigma notation > worked example > p
    "Substitute u₁ = 30 and d = −4 into the Formula Booklet arithmetic sum formula.": "공식집의 등차급수 합 공식에 u₁ = 30과 d = −4를 대입해요.",

    // Arithmetic sequences, series and sigma notation > worked example > maths line
    "Since <i>k</i> &gt; 0, 60 − 4<i>k</i> + 4 = 0 ⇒ 4<i>k</i> = 64 ⇒ <b><i>k</i> = 16</b> <b>[A1]</b>": "<i>k</i> &gt; 0이므로, 60 − 4<i>k</i> + 4 = 0 ⇒ 4<i>k</i> = 64 ⇒ <b><i>k</i> = 16</b> <b>[A1]</b>",

    // Arithmetic sequences, series and sigma notation > try it > p
    "In an arithmetic sequence, the first term is <span class=\"chem\">u_1 = 45</span> and the sixth term is <span class=\"chem\">u_6 = 15</span>. Find the positive integer <span class=\"chem\">k</span> for which the sum of the first <span class=\"chem\">k</span> terms is <span class=\"chem\">S_k = 0</span>.": "등차수열에서 첫째항이 <span class=\"chem\">u_1 = 45</span>이고 제6항이 <span class=\"chem\">u_6 = 15</span>예요. 첫째항부터 제<span class=\"chem\">k</span>항까지의 합이 <span class=\"chem\">S_k = 0</span>이 되는 양의 정수 <span class=\"chem\">k</span>를 구하시오 (Find).",

    // Arithmetic sequences, series and sigma notation > try it > li
    "Use <span class=\"chem\">u_6 - u_1 = 5d</span> to find the common difference <span class=\"chem\">d = -6</span>.": "<span class=\"chem\">u_6 - u_1 = 5d</span>를 이용해 공차 <span class=\"chem\">d = -6</span>을 구하세요.",

    // Arithmetic sequences, series and sigma notation > try it > li
    "Set <span class=\"chem\">S_k = (k/2)(2(45) + (k - 1)(-6)) = 0</span> and solve <span class=\"chem\">90 - 6k + 6 = 0</span>.": "<span class=\"chem\">S_k = (k/2)(2(45) + (k - 1)(-6)) = 0</span>으로 두고 <span class=\"chem\">90 - 6k + 6 = 0</span>을 푸세요.",

    // Arithmetic sequences, series and sigma notation > data-title attribute
    "Standard form & arithmetic series: quick check": "과학적 표기법과 등차급수: 빠른 확인",

    // Geometric sequences, finite series and sum to infinity > data-toc attribute
    "Geometric & S∞": "등비수열과 S∞",

    // Geometric sequences, finite series and sum to infinity > h2
    "Geometric sequences, finite series and sum to infinity": "등비수열, 유한 등비급수와 무한 등비급수의 합",

    // Geometric sequences, finite series and sum to infinity > p
    "In a <dfn data-def=\"A sequence in which each term divided by the previous term is a non-zero constant r, called the common ratio.\">geometric sequence</dfn>, each term is obtained by multiplying the previous term by a non-zero constant <span class=\"chem\">r</span>, called the <dfn data-def=\"The constant ratio r = u_{n} / u_{n-1} between consecutive terms of a geometric sequence.\">common ratio</dfn>. When <span class=\"chem\">r &lt; 0</span>, the terms alternate in sign (<span class=\"chem\">+ - + - ...</span>).": "<dfn data-def=\"A sequence in which each term divided by the previous term is a non-zero constant r, called the common ratio.\">등비수열 <span class=\"en-term\">(geometric sequence)</span></dfn>은 첫째항부터 차례로 0이 아닌 일정한 수 <span class=\"chem\">r</span>을 곱하여 얻어지는 수열이에요. 이때 이 일정한 비를 <dfn data-def=\"The constant ratio r = u_{n} / u_{n-1} between consecutive terms of a geometric sequence.\">공비 <span class=\"en-term\">(common ratio)</span></dfn>라고 해요. <span class=\"chem\">r &lt; 0</span>이면 항의 부호가 교대로 바뀌어요(<span class=\"chem\">+ - + - ...</span>).",

    // Geometric sequences, finite series and sum to infinity > data-def attribute
    "A sequence in which each term divided by the previous term is a non-zero constant r, called the common ratio.": "각 항을 바로 앞 항으로 나눈 비가 0이 아닌 일정한 상수 r(공비)인 수열.",

    // Geometric sequences, finite series and sum to infinity > data-def attribute
    "The constant ratio r = u_{n} / u_{n-1} between consecutive terms of a geometric sequence.": "등비수열에서 연속하는 두 항 사이의 일정한 비 r = u_{n} / u_{n-1}.",

    // Geometric sequences, finite series and sum to infinity > formula booklet note > p
    "<strong>Sections 1.3 and 1.8 of your Formula Booklet</strong> provide the <span class=\"chem\">n</span>-th term, finite sum, and infinite sum formulas:": "<strong>공식집(Formula Booklet) Sections 1.3과 1.8</strong>에는 제<span class=\"chem\">n</span>항(일반항), 부분합, 그리고 등비급수의 합 공식이 수록되어 있어요:",

    // Geometric sequences, finite series and sum to infinity > equation > dd
    "common ratio (<span class=\"chem\">r = u_2 / u_1</span>)": "공비 (<span class=\"chem\">r = u_2 / u_1</span>)",

    // Geometric sequences, finite series and sum to infinity > equation > dd
    "sum of the first <span class=\"chem\">n</span> terms": "첫째항부터 제<span class=\"chem\">n</span>항까지의 합",

    // Geometric sequences, finite series and sum to infinity > equation > dd
    "sum to infinity (exists if and only if <span class=\"chem\">-1 &lt; r &lt; 1</span>)": "등비급수의 합 (<span class=\"chem\">-1 &lt; r &lt; 1</span>일 때만 수렴하여 존재)",

    // Geometric sequences, finite series and sum to infinity > key idea > p
    "<strong>Why does <span class=\"chem\">|r| &lt; 1</span> give a finite sum to infinity?</strong> In the finite sum formula <span class=\"chem\">S_n = u_1(1 - r^n)/(1 - r)</span>, if <span class=\"chem\">-1 &lt; r &lt; 1</span>, then raising <span class=\"chem\">r</span> to larger and larger powers shrinks <span class=\"chem\">r^n -&gt; 0</span> as <span class=\"chem\">n -&gt; infty</span>. The factor <span class=\"chem\">(1 - r^n)</span> approaches <span class=\"chem\">1</span>, leaving <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "<strong>왜 <span class=\"chem\">|r| &lt; 1</span>일 때 등비급수의 합이 유한한 값으로 수렴할까요?</strong> 부분합 공식 <span class=\"chem\">S_n = u_1(1 - r^n)/(1 - r)</span>에서 <span class=\"chem\">-1 &lt; r &lt; 1</span>이면 <span class=\"chem\">r</span>을 더 큰 거듭제곱으로 올릴수록 <span class=\"chem\">n -&gt; infty</span>일 때 <span class=\"chem\">r^n -&gt; 0</span>으로 작아져요. 따라서 <span class=\"chem\">(1 - r^n)</span>이 <span class=\"chem\">1</span>에 가까워지고, 결국 <span class=\"chem\">S_infty = u_1 / (1 - r)</span>만 남아요.",

    // Geometric sequences, finite series and sum to infinity > widget > data-title attribute
    "Arithmetic vs geometric growth & infinite series convergence": "등차 vs 등비 성장 및 무한급수의 수렴",

    // Geometric sequences, finite series and sum to infinity > widget > figcaption
    "Switch between geometric and arithmetic sequences, and drag the common ratio <i>r</i> across the interval (−1, 1). Notice how for |<i>r</i>| &lt; 1 the terms <i>u<sub>k</sub></i> decay toward 0 and the partial sums <i>S<sub>k</sub></i> level off at the dashed horizontal limit <i>S</i><sub>∞</sub>.": "등비수열과 등차수열을 전환하고, 공비 <i>r</i>을 (−1, 1) 구간에서 움직여 보세요. |<i>r</i>| &lt; 1일 때 각 항 <i>u<sub>k</sub></i>가 0으로 줄어들면서 부분합 <i>S<sub>k</sub></i>가 점선으로 표시된 극한값 <i>S</i><sub>∞</sub>에 수렴하는 모습을 확인할 수 있어요.",

    // Geometric sequences, finite series and sum to infinity > worked example > h3
    "Finding the first term and common ratio from two non-consecutive terms": "이웃하지 않은 두 항으로 첫째항과 공비 구하기",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "In a convergent geometric series with positive terms, the second term is 18 and the fourth term is 8. Find the sum to infinity <span class=\"chem\">S_infty</span>. <strong>[5 marks]</strong>": "모든 항이 양수이고 수렴하는 등비급수에서 제2항이 18이고 제4항이 8이에요. 등비급수의 합 <span class=\"chem\">S_infty</span>를 구하시오 (Find). <strong>[5 marks]</strong>",

    // Geometric sequences, finite series and sum to infinity > worked example > data-title attribute
    "Write both given terms using the n-th term formula": "주어진 두 항을 일반항 공식으로 나타내기",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "Translating words into equations with u₁ and r gives a system we can divide to eliminate u₁.": "문장을 u₁과 r에 대한 연립방정식으로 바꾸면 두 식을 나누어 u₁을 소거할 수 있어요.",

    // Geometric sequences, finite series and sum to infinity > worked example > maths line
    "<i>u</i><sub>2</sub> = <i>u</i><sub>1</sub><i>r</i> = 18 and <i>u</i><sub>4</sub> = <i>u</i><sub>1</sub><i>r</i><sup>3</sup> = 8 <b>[M1]</b>": "<i>u</i><sub>2</sub> = <i>u</i><sub>1</sub><i>r</i> = 18이고 <i>u</i><sub>4</sub> = <i>u</i><sub>1</sub><i>r</i><sup>3</sup> = 8 <b>[M1]</b>",

    // Geometric sequences, finite series and sum to infinity > worked example > data-title attribute
    "Divide u₄ by u₂ to solve for r": "u₄를 u₂로 나누어 r 구하기",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "Dividing cancels u₁ and leaves r². Since all terms are positive, reject the negative root.": "나누면 u₁이 약분되고 r²만 남아요. 모든 항이 양수이므로 음의 제곱근은 제외해요.",

    // Geometric sequences, finite series and sum to infinity > worked example > maths line
    "<i>r</i><sup>2</sup> = <span class=\"frac\"><span>8</span><span>18</span></span> = <span class=\"frac\"><span>4</span><span>9</span></span> ⇒ <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span> (since <i>r</i> &gt; 0, |<i>r</i>| &lt; 1) <b>[A1 R1]</b>": "<i>r</i><sup>2</sup> = <span class=\"frac\"><span>8</span><span>18</span></span> = <span class=\"frac\"><span>4</span><span>9</span></span> ⇒ <i>r</i> = <span class=\"frac\"><span>2</span><span>3</span></span> (<i>r</i> &gt; 0이고 |<i>r</i>| &lt; 1이므로) <b>[A1 R1]</b>",

    // Geometric sequences, finite series and sum to infinity > worked example > data-title attribute
    "Back-substitute r to find u₁ and compute S∞": "r을 대입해 u₁을 구하고 S∞ 계산하기",

    // Geometric sequences, finite series and sum to infinity > worked example > p
    "Now that we have both u₁ and r, substitute into the Formula Booklet sum to infinity formula.": "이제 u₁과 r을 모두 구했으니 공식집의 등비급수 합 공식에 대입해요.",

    // Geometric sequences, finite series and sum to infinity > try it > p
    "A convergent geometric series has first term <span class=\"chem\">u_1 = 54</span> and third term <span class=\"chem\">u_3 = 24</span>, with all terms positive. Calculate <span class=\"chem\">S_infty</span>.": "모든 항이 양수이고 수렴하는 등비급수에서 첫째항이 <span class=\"chem\">u_1 = 54</span>이고 제3항이 <span class=\"chem\">u_3 = 24</span>예요. <span class=\"chem\">S_infty</span>를 계산하시오 (Calculate).",

    // Geometric sequences, finite series and sum to infinity > try it > li
    "Use <span class=\"chem\">u_3 / u_1 = r^2</span> to find the positive common ratio <span class=\"chem\">r</span>.": "<span class=\"chem\">u_3 / u_1 = r^2</span>을 이용해 양수인 공비 <span class=\"chem\">r</span>을 구하세요.",

    // Geometric sequences, finite series and sum to infinity > try it > li
    "You should get <span class=\"chem\">r = 2/3</span>. Now substitute <span class=\"chem\">u_1 = 54</span> and <span class=\"chem\">r = 2/3</span> into <span class=\"chem\">S_infty = u_1 / (1 - r)</span>.": "<span class=\"chem\">r = 2/3</span>이 나와요. 이제 <span class=\"chem\">u_1 = 54</span>와 <span class=\"chem\">r = 2/3</span>을 <span class=\"chem\">S_infty = u_1 / (1 - r)</span>에 대입하세요.",

    // Geometric sequences, finite series and sum to infinity > not needed for IB > p
    "<strong>What is NOT needed for IB:</strong> You do <strong>not</strong> need the Ratio Test, Root Test, Integral Test, Comparison Test, or Alternating Series Test from university calculus. In IB Math AA HL Topic 1, infinite series convergence is tested solely via geometric series (<span class=\"chem\">|r| &lt; 1</span>) (and later via Maclaurin power series in Topic 5.19).": "<strong>IB 시험 범위 외 내용:</strong> 대학 미적분학의 비판정법(Ratio Test), 근판정법(Root Test), 적분판정법, 비교판정법, 교대급수 판정법은 <strong>필요하지 않아요</strong>. IB Math AA HL Topic 1에서 무한급수의 수렴은 오직 등비급수(<span class=\"chem\">|r| &lt; 1</span>)로만 다뤄요(이후 Topic 5.19에서 매클로린 급수를 배워요).",

    // Geometric sequences, finite series and sum to infinity > data-title attribute
    "Geometric sequences & infinite series: quick check": "등비수열과 등비급수: 빠른 확인",

    // Financial applications: compound interest and depreciation > data-toc attribute
    "Financial models": "금융 모델",

    // Financial applications: compound interest and depreciation > h2
    "Financial applications: compound interest and depreciation": "금융 활용: 복리와 감가상각",

    // Financial applications: compound interest and depreciation > p
    "When an investment earns <dfn data-def=\"Interest calculated on both the initial principal and the accumulated interest from previous periods.\">compound interest</dfn> at a nominal annual rate of <span class=\"chem\">r%</span> compounded <span class=\"chem\">k</span> times per year, each compounding period adds <span class=\"chem\">(r / k)%</span> interest. Over <span class=\"chem\">n</span> years there are <span class=\"chem\">k × n</span> compounding periods, forming a geometric sequence.": "투자 원금에 연이율(명목 금리) <span class=\"chem\">r%</span>로 연 <span class=\"chem\">k</span>회 <dfn data-def=\"Interest calculated on both the initial principal and the accumulated interest from previous periods.\">복리 <span class=\"en-term\">(compound interest)</span></dfn>가 적용되면, 매 이자 계산 기간마다 <span class=\"chem\">(r / k)%</span>의 이자가 붙어요. <span class=\"chem\">n</span>년 동안 총 <span class=\"chem\">k × n</span>번의 복리 기간이 있으므로 원리합계는 등비수열을 이뤄요.",

    // Financial applications: compound interest and depreciation > data-def attribute
    "Interest calculated on both the initial principal and the accumulated interest from previous periods.": "초기 원금뿐만 아니라 이전 기간에 붙은 누적 이자에도 함께 이자가 계산되는 방식.",

    // Financial applications: compound interest and depreciation > formula booklet note > p
    "<strong>Section 1.4 of your Formula Booklet</strong> gives the compound interest formula:": "<strong>공식집(Formula Booklet) Section 1.4</strong>에는 복리 공식이 수록되어 있어요:",

    // Financial applications: compound interest and depreciation > equation > dt
    "FV": "FV",

    // Financial applications: compound interest and depreciation > equation > dd
    "future value after <span class=\"chem\">n</span> years": "<span class=\"chem\">n</span>년 후의 미래가치 (원리합계)",

    // Financial applications: compound interest and depreciation > equation > dt
    "PV": "PV",

    // Financial applications: compound interest and depreciation > equation > dd
    "present value (initial principal at <span class=\"chem\">t = 0</span>)": "현재가치 (<span class=\"chem\">t = 0</span>일 때의 초기 원금)",

    // Financial applications: compound interest and depreciation > equation > dd
    "nominal annual rate of interest": "명목 연이율",

    // Financial applications: compound interest and depreciation > equation > dd
    "number of compounding periods per year (1 = annual, 2 = half-yearly, 4 = quarterly, 12 = monthly)": "연간 복리 횟수 (1 = 연 복리, 2 = 반기 복리, 4 = 분기 복리, 12 = 월 복리)",

    // Financial applications: compound interest and depreciation > equation > dd
    "number of years": "년수 (기간)",

    // Financial applications: compound interest and depreciation > p
    "For <strong>annual depreciation</strong> (an asset losing <span class=\"chem\">r%</span> of its value each year with <span class=\"chem\">k = 1</span>) or <strong>inflation</strong> adjustment, replace the plus sign with a minus sign: <span class=\"chem\">FV = PV × (1 - r / 100)^n</span>.": "<strong>연간 감가상각</strong>(자산 가치가 매년 <span class=\"chem\">r%</span>씩 감소, <span class=\"chem\">k = 1</span>)이나 <strong>인플레이션</strong> 보정에는 더하기 부호를 빼기로 바꾸어 <span class=\"chem\">FV = PV × (1 - r / 100)^n</span>을 사용해요.",

    // Financial applications: compound interest and depreciation > widget > data-title attribute
    "Compound interest & annual depreciation simulator": "복리 및 연간 감가상각 시뮬레이터",

    // Financial applications: compound interest and depreciation > widget > figcaption
    "Adjust the present value <i>PV</i>, annual rate <i>r</i>% (positive for compound interest, negative for depreciation), and compounding frequency <i>k</i> to compare compounded growth against the annual baseline.": "현재가치 <i>PV</i>, 연이율 <i>r</i>%(양수면 복리, 음수면 감가상각), 연간 복리 횟수 <i>k</i>를 조절하여 연 복리 기준선과 비교해 보세요.",

    // Financial applications: compound interest and depreciation > exam tip (shown in English + translation) > p
    "<strong>Showing working with the GDC Finance (TVM) Solver on Paper 2:</strong> Whenever you use your calculator’s Finance Solver (for compound interest, regular savings annuities, or loan amortization), <strong>write down the list of TVM inputs</strong> in your answer box (<span class=\"mono\">N = …, I% = …, PV = …, PMT = …, FV = …, P/Y = …, C/Y = …</span>). If you make a rounding slip, listing those inputs secures the method mark <strong>[M1]</strong>! Remember that cash outflows (money you invest or pay) and cash inflows (money you receive back) must have <strong>opposite signs</strong> (<span class=\"mono\">PV &lt; 0, FV &gt; 0</span>).": "<strong>Paper 2에서 GDC Finance (TVM) Solver 풀이 과정 작성법:</strong> 계산기의 Finance Solver를 사용할 때(복리, 정기 적금, 대출 상환 등)는 반드시 답안지에 <strong>TVM 입력값 목록을 모두 적으세요</strong> (<span class=\"mono\">N = …, I% = …, PV = …, PMT = …, FV = …, P/Y = …, C/Y = …</span>). 반올림 실수를 하더라도 입력값을 적어 두면 방법 점수 <strong>[M1]</strong>을 받을 수 있어요! 현금 유출(투자·납입)과 현금 유입(수령)은 반드시 <strong>반대 부호</strong>(<span class=\"mono\">PV &lt; 0, FV &gt; 0</span>)로 입력해야 한다는 점도 잊지 마세요.",

    // Financial applications: compound interest and depreciation > not needed for IB > p
    "<strong>May 2028 syllabus note:</strong> Financial mathematics (SL 1.4) <strong>is examined in full in May 2028</strong> (it is only retiring in the 2029 syllabus revision). However, you do <strong>not</strong> need to memorize closed-form annuity or mortgage amortization formulas—use either the sum of a geometric series or your GDC Finance Solver on Paper 2.": "<strong>2028년 5월 시험 범위 안내:</strong> 금융 수학(SL 1.4)은 <strong>2028년 5월 시험까지 전체 범위가 출제돼요</strong>(2029년 개정 교육과정에서 제외 예정). 다만 연금이나 주택담보대출 상환의 복잡한 닫힌 꼴 공식을 암기할 필요는 <strong>없어요</strong>. 등비급수의 합이나 Paper 2의 GDC Finance Solver를 사용하면 돼요.",

    // Financial applications: compound interest and depreciation > data-title attribute
    "Financial models & synthesis: exam practice": "금융 모델과 종합: 시험 연습",

    // widget string (assets/js/widgets-t1-1.js)
    "Pattern type": "수열 유형",

    // widget string (assets/js/widgets-t1-1.js)
    "Geometric (constant ratio r)": "등비수열 (일정한 공비 r)",

    // widget string (assets/js/widgets-t1-1.js)
    "Arithmetic (constant difference d)": "등차수열 (일정한 공차 d)",

    // widget string (assets/js/widgets-t1-1.js)
    "First term u₁": "첫째항 u₁",

    // widget string (assets/js/widgets-t1-1.js)
    "Step parameter (r or d)": "변화 매개변수 (r 또는 d)",

    // widget string (assets/js/widgets-t1-1.js)
    "Number of terms n": "항의 개수 n",

    // widget string (assets/js/widgets-t1-1.js)
    "n-th term uₙ": "제n항 uₙ",

    // widget string (assets/js/widgets-t1-1.js)
    "Partial sum Sₙ": "부분합 Sₙ",

    // widget string (assets/js/widgets-t1-1.js)
    "Sum to infinity S∞": "등비급수의 합 S∞",

    // widget string (assets/js/widgets-t1-1.js)
    "Term u_k": "제k항 u_k",

    // widget string (assets/js/widgets-t1-1.js)
    "Partial sum S_k": "부분합 S_k",

    // widget string (assets/js/widgets-t1-1.js)
    "converges, |r| < 1": "수렴, |r| < 1",

    // widget string (assets/js/widgets-t1-1.js)
    "Limit S∞": "극한값 S∞",

    // widget string (assets/js/widgets-t1-1.js)
    "Diverges (no finite limit)": "발산 (유한한 극한값 없음)",

    // widget string (assets/js/widgets-t1-1.js)
    "Terms u_k and cumulative partial sums S_k": "항 u_k와 누적 부분합 S_k",

    // widget string (assets/js/widgets-t1-1.js)
    "Term index k": "항 번호 k",

    // widget string (assets/js/widgets-t1-1.js)
    "Value": "값",

    // widget string (assets/js/widgets-t1-1.js)
    "Present value PV": "현재가치 PV",

    // widget string (assets/js/widgets-t1-1.js)
    "Annual rate r% (+ growth / − depreciation)": "연이율 r% (+ 증가 / − 감가상각)",

    // widget string (assets/js/widgets-t1-1.js)
    "Compounding periods k / yr": "연간 복리 횟수 k",

    // widget string (assets/js/widgets-t1-1.js)
    "Annually (k = 1)": "연 복리 (k = 1)",

    // widget string (assets/js/widgets-t1-1.js)
    "Half-yearly (k = 2)": "반기 복리 (k = 2)",

    // widget string (assets/js/widgets-t1-1.js)
    "Quarterly (k = 4)": "분기 복리 (k = 4)",

    // widget string (assets/js/widgets-t1-1.js)
    "Monthly (k = 12)": "월 복리 (k = 12)",

    // widget string (assets/js/widgets-t1-1.js)
    "Years n": "년수 n",

    // widget string (assets/js/widgets-t1-1.js)
    "FV (k = 1 annual)": "FV (k = 1 연 복리)",

    // widget string (assets/js/widgets-t1-1.js)
    "FV (chosen k)": "FV (선택한 k)",

    // widget string (assets/js/widgets-t1-1.js)
    "Extra from compounding k": "복리 횟수 k에 따른 추가 수익",

    // widget string (assets/js/widgets-t1-1.js)
    "Future value FV over time": "시간에 따른 미래가치 FV",

    // widget string (assets/js/widgets-t1-1.js)
    "Time t (years)": "시간 t (년)",

    // widget string (assets/js/widgets-t1-1.js)
    "Value (USD)": "가치 (USD)",

    // widget string (assets/js/widgets-t1-1.js)
    "Selected compounding (k = {k})": "선택한 복리 (k = {k})",

    // widget string (assets/js/widgets-t1-1.js)
    "Annual baseline (k = 1)": "연 복리 기준선 (k = 1)",

  }
});
