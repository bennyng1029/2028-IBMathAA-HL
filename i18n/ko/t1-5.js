/* t1-5 — ko translation overlay for Analysis Lab (page text, attributes, widget strings).
   Each entry: a comment saying where the text appears, then "English source": "translation".
   Fill in the translation; leave "" for "not translated yet" (English is shown). Never edit the English key.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-5', {
  strings: {

    // page title (browser tab)
    "1.5 Mathematical proof and systems of linear equations | Analysis Lab": "1.5 수학적 증명과 연립일차방정식 | Analysis Lab",

    // Mathematical proof and systems of linear equations > page header > p
    "Topic 1.5 · SL 1.6 + AHL 1.15–1.16": "Topic 1.5 · SL 1.6 + AHL 1.15–1.16",

    // Mathematical proof and systems of linear equations > page header > h1
    "Mathematical proof and systems of linear equations": "수학적 증명과 연립일차방정식",

    // Mathematical proof and systems of linear equations > page header > span
    "How do we establish beyond doubt that a mathematical statement holds for infinitely many cases—or determine exactly when a system of equations has one, none, or infinitely many solutions?": "수학적 명제가 무한히 많은 경우에도 의심의 여지 없이 성립함을 어떻게 증명할까요? 또 연립방정식이 유일한 해, 해 없음, 또는 무수히 많은 해를 갖는 조건은 어떻게 정확히 판별할까요?",

    // What you need to be able to do > data-toc attribute
    "Checklist": "학습 체크리스트",

    // What you need to be able to do > h2
    "What you need to be able to do": "할 수 있어야 하는 내용",

    // What you need to be able to do > checklist > span
    "Construct a rigorous left-hand-side to right-hand-side (<span class=\"chem\">LHS -&gt; RHS</span>) algebraic proof for identities, parity properties, and positivity (by completing the square).": "항등식, 홀짝성 성질, 부등식(완전제곱식 변형)에 대하여 좌변에서 우변으로(<span class=\"chem\">LHS -&gt; RHS</span>) 엄밀한 대수적 증명을 작성할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Prove statements involving series, divisibility, derivatives, and inequalities by mathematical induction using the full IB four-step structure and conclusion sentence.": "급수, 배수/나누어떨어짐, 도함수, 부등식에 관한 명제를 IB 4단계 구조와 결론 문장을 모두 갖추어 수학적 귀납법으로 증명할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Use proof by contradiction to establish irrationality (such as <span class=\"chem\">sqrt(2)</span> or <span class=\"chem\">log_2 5</span>) and parity/divisibility results.": "귀류법을 사용하여 무리수임(<span class=\"chem\">sqrt(2)</span> 또는 <span class=\"chem\">log_2 5</span> 등)과 홀짝성/배수 성질을 증명할 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Disprove a universal conjecture by providing a single explicit counterexample.": "단 하나의 명확한 반례를 들어 보편 명제(추측)가 거짓임을 보일 수 있어요.",

    // What you need to be able to do > checklist > Additional HL > span
    "Solve up to <span class=\"chem\">3 × 3</span> systems of linear equations by Gaussian elimination and determine conditions on a parameter <span class=\"chem\">k</span> for a unique solution, no solution, or infinitely many solutions.": "가우스 소거법으로 최대 <span class=\"chem\">3 × 3</span> 연립일차방정식을 풀고, 매개변수 <span class=\"chem\">k</span>에 따라 유일한 해, 해 없음, 무수히 많은 해를 갖는 조건을 구할 수 있어요.",

    // Question decoder: spotting which proof or system method to u > data-toc attribute
    "Question decoder": "문제 디코더",

    // Question decoder: spotting which proof or system method to u > h2
    "Question decoder: spotting which proof or system method to use": "문제 디코더: 어떤 증명·해법을 쓸지 파악하기",

    // Question decoder: spotting which proof or system method to u > p
    "Proof and linear system questions use strict IB command terms. Use this decoder to match the exact exam wording to the required layout and markscheme checkpoints.": "증명과 연립방정식 문제는 엄격한 IB 지시어(command terms)를 사용해요. 이 표를 이용해 시험 문제의 표현에 맞는 풀이 구조와 채점 기준 핵심 포인트를 바로 연결하세요.",

    // Question decoder: spotting which proof or system method to u > table > caption
    "Question decoder — Proof and linear systems": "문제 디코더 — 증명과 연립일차방정식",

    // Question decoder: spotting which proof or system method to u > table > th
    "What the exam question says": "시험 문제의 표현",

    // Question decoder: spotting which proof or system method to u > table > th
    "What it means (method &amp; setup)": "수학적 의미 (방법 및 식 세우기)",

    // Question decoder: spotting which proof or system method to u > table > th
    "Markscheme rules (Paper 1 &amp; Paper 2)": "채점 기준 주의사항 (Paper 1 &amp; Paper 2)",

    // Question decoder: spotting which proof or system method to u > table > th
    "“Show that…” or “Prove that <span class=\"chem\">f(x) == g(x)</span>” (SL 1.6)": "“보이시오(Show that…)” 또는 “<span class=\"chem\">f(x) == g(x)</span>임을 증명하시오(Prove that…)” (SL 1.6)",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Direct deductive proof</strong>. Start with the more complicated side (usually <span class=\"chem\">LHS</span>) and transform it step-by-step into the other side (<span class=\"chem\">RHS</span>).": "<strong>직접 연역 증명</strong>. 더 복잡한 쪽(보통 <span class=\"chem\">LHS</span>)에서 시작해 단계적으로 다른 쪽(<span class=\"chem\">RHS</span>)으로 변형하세요.",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Never start by writing <span class=\"chem\">LHS = RHS</span></strong> and working on both sides! In an Answer Given (<strong>AG</strong>) question, every intermediate algebraic step must be shown.": "<strong>절대 <span class=\"chem\">LHS = RHS</span>라고 써 놓고</strong> 양변을 동시에 변형하지 마세요! 답이 주어진(<strong>AG</strong>) 문제에서는 모든 중간 대수 과정을 빠짐없이 써야 해요.",

    // Question decoder: spotting which proof or system method to u > table > th
    "“Prove that <span class=\"chem\">x^2 - 6x + 13 &gt; 0</span> for all <span class=\"chem\">x \\in \\mathbb{R}</span>” (SL 1.6)": "“모든 <span class=\"chem\">x \\in \\mathbb{R}</span>에 대하여 <span class=\"chem\">x^2 - 6x + 13 &gt; 0</span>임을 증명하시오” (SL 1.6)",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Complete the square</strong>: rewrite as <span class=\"chem\">(x - 3)^2 + 4</span> and use the fact that <span class=\"chem\">(x - 3)^2 &gt;= 0</span> for all real <span class=\"chem\">x</span>.": "<strong>완전제곱식으로 변형</strong>: <span class=\"chem\">(x - 3)^2 + 4</span>로 고쳐 쓰고, 모든 실수 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">(x - 3)^2 &gt;= 0</span>임을 이용하세요.",

    // Question decoder: spotting which proof or system method to u > table > td
    "State explicitly: “Since <span class=\"chem\">(x - 3)^2 &gt;= 0</span> for all <span class=\"chem\">x \\in \\mathbb{R}</span>, <span class=\"chem\">(x - 3)^2 + 4 &gt;= 4 &gt; 0</span>” to earn the reasoning mark <strong>[R1]</strong>.": "추론 점수 <strong>[R1]</strong>을 받으려면 “모든 <span class=\"chem\">x \\in \\mathbb{R}</span>에 대해 <span class=\"chem\">(x - 3)^2 &gt;= 0</span>이므로 <span class=\"chem\">(x - 3)^2 + 4 &gt;= 4 &gt; 0</span>이다”라고 명확히 적으세요.",

    // Question decoder: spotting which proof or system method to u > table > th
    "“Prove by mathematical induction that…, for <span class=\"chem\">n \\in \\mathbb{Z}^+</span>” (AHL 1.15)": "“<span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 …임을 수학적 귀납법으로 증명하시오” (AHL 1.15)",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>4-step induction template</strong>:<br>1. Base case <span class=\"chem\">n = 1</span>.<br>2. Assume <span class=\"chem\">P(k)</span> is true for <em>some</em> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>.<br>3. Prove <span class=\"chem\">P(k + 1)</span> using <span class=\"chem\">P(k)</span>.<br>4. Final induction conclusion sentence.": "<strong>4단계 귀납법 형식</strong>:<br>1. 시작 단계 <span class=\"chem\">n = 1</span>.<br>2. <em>어떤</em> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(k)</span>가 성립한다고 가정.<br>3. <span class=\"chem\">P(k)</span>를 이용해 <span class=\"chem\">P(k + 1)</span> 증명.<br>4. 최종 귀납법 결론 문장.",

    // Question decoder: spotting which proof or system method to u > table > td
    "Writing “Assume true for <em>all</em> <span class=\"chem\">k</span>” or omitting the final conclusion sentence loses the final <strong>[R1]</strong> mark even if all algebra is right!": "“<em>모든</em> <span class=\"chem\">k</span>에 대해 성립한다고 가정하자”라고 쓰거나 마지막 결론 문장을 빠뜨리면, 식 전개가 완벽해도 마지막 <strong>[R1]</strong> 점수를 잃어요!",

    // Question decoder: spotting which proof or system method to u > table > th
    "“Prove by contradiction that <span class=\"chem\">sqrt(p)</span> (or <span class=\"chem\">log_a b</span>) is irrational” (AHL 1.15)": "“<span class=\"chem\">sqrt(p)</span> (또는 <span class=\"chem\">log_a b</span>)가 무리수임을 귀류법으로 증명하시오” (AHL 1.15)",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Negate the statement</strong>: Assume <span class=\"chem\">sqrt(p) = a / b</span> where <span class=\"chem\">a, b \\in \\mathbb{Z}, b != 0</span> and <strong><span class=\"chem\">gcd(a, b) = 1</span> (coprime)</strong>. Deduce that <span class=\"chem\">p</span> divides both <span class=\"chem\">a</span> and <span class=\"chem\">b</span>.": "<strong>명제를 부정하기</strong>: <span class=\"chem\">a, b \\in \\mathbb{Z}, b != 0</span>이고 <strong><span class=\"chem\">gcd(a, b) = 1</span> (서로소)</strong>인 <span class=\"chem\">sqrt(p) = a / b</span>라고 가정하세요. 그다음 <span class=\"chem\">p</span>가 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>를 모두 나눔을 유도하세요.",

    // Question decoder: spotting which proof or system method to u > table > td
    "Forgetting to state that <span class=\"chem\">a</span> and <span class=\"chem\">b</span> have <strong>no common factors</strong> (<span class=\"chem\">gcd(a, b) = 1</span>) at the start means there is no contradiction at the end!": "처음에 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>가 <strong>공약수를 갖지 않는다</strong>(<span class=\"chem\">gcd(a, b) = 1</span>)고 적지 않으면 마지막에 모순이 생기지 않아요!",

    // Question decoder: spotting which proof or system method to u > table > th
    "“Disprove the statement…” or “Determine whether the statement is always true” (AHL 1.15)": "“명제가 거짓임을 보이시오…” 또는 “명제가 항상 참인지 판별하시오” (AHL 1.15)",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Counterexample</strong>: test small boundary cases (<span class=\"chem\">0, 1, -1, 1/2</span>, negative numbers, non-primes) and exhibit <strong>one explicit example</strong> where the hypothesis holds but the conclusion fails.": "<strong>반례</strong>: 작은 경계값(<span class=\"chem\">0, 1, -1, 1/2</span>, 음수, 소수가 아닌 수)을 대입해 보고, 가정은 만족하지만 결론이 거짓이 되는 <strong>구체적인 예시 1개</strong>를 제시하세요.",

    // Question decoder: spotting which proof or system method to u > table > td
    "Do not write a general algebraic argument to disprove a statement—state the specific numerical value(s) and evaluate both sides explicitly.": "명제가 거짓임을 보일 때 일반적인 대수적 설명만 쓰지 말고, 구체적인 숫자를 제시해 양변을 직접 계산해 보여 주세요.",

    // Question decoder: spotting which proof or system method to u > table > th
    "“Find the value(s) of <span class=\"chem\">k</span> for which the <span class=\"chem\">3 × 3</span> system has a unique solution / no solution / infinitely many solutions” (AHL 1.16)": "“<span class=\"chem\">3 × 3</span> 연립방정식이 유일한 해 / 해 없음 / 무수히 많은 해를 갖도록 하는 <span class=\"chem\">k</span>의 값을 구하시오” (AHL 1.16)",

    // Question decoder: spotting which proof or system method to u > table > td
    "<strong>Gaussian elimination</strong> (row reduction) to upper-triangular form where Row 3 is <span class=\"chem\">0x + 0y + g(k)z = h(k)</span>.": "<strong>가우스 소거법</strong> (행 연산)으로 3행이 <span class=\"chem\">0x + 0y + g(k)z = h(k)</span>인 상삼각 형태로 정리하세요.",

    // Question decoder: spotting which proof or system method to u > table > td
    "• Unique: <span class=\"chem\">g(k) != 0</span>.<br>• No solution: <span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) != 0</span>.<br>• Infinite solutions: <span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) = 0</span> (set <span class=\"chem\">z = lambda \\in \\mathbb{R}</span>).": "• 유일한 해: <span class=\"chem\">g(k) != 0</span>.<br>• 해 없음: <span class=\"chem\">g(k) = 0</span>이고 <span class=\"chem\">h(k) != 0</span>.<br>• 무수히 많은 해: <span class=\"chem\">g(k) = 0</span>이고 <span class=\"chem\">h(k) = 0</span> (<span class=\"chem\">z = lambda \\in \\mathbb{R}</span>로 둠).",

    // Deductive algebraic proof and identities > data-toc attribute
    "Direct proof": "직접 증명",

    // Deductive algebraic proof and identities > h2
    "Deductive algebraic proof and identities": "연역적 대수 증명과 항등식",

    // Deductive algebraic proof and identities > p
    "A <dfn data-def=\"A logical sequence of algebraic steps starting from known definitions or one side of an identity and arriving at the required result.\">direct deductive proof</dfn> uses general algebraic symbols—never just a few numerical examples—to show that a statement is true for every value in its domain. An <dfn data-def=\"An equality that holds true for all permissible values of its variables, often written with the symbol ≡.\">identity</dfn> (<span class=\"chem\">LHS == RHS</span>) holds for all values of the variable, whereas a conditional equation holds only for specific roots.": "<dfn data-def=\"A logical sequence of algebraic steps starting from known definitions or one side of an identity and arriving at the required result.\">직접 연역 증명 <span class=\"en-term\">(direct deductive proof)</span></dfn>은 몇 개의 숫자 예시가 아니라 일반적인 문자를 사용하여 명제가 정의역의 모든 값에 대해 성립함을 보여 줘요. <dfn data-def=\"An equality that holds true for all permissible values of its variables, often written with the symbol ≡.\">항등식 <span class=\"en-term\">(identity)</span></dfn>(<span class=\"chem\">LHS == RHS</span>)은 변수의 모든 값에 대해 성립하지만, 방정식은 특정 근에서만 성립해요.",

    // Deductive algebraic proof and identities > data-def attribute
    "A logical sequence of algebraic steps starting from known definitions or one side of an identity and arriving at the required result.": "알려진 정의나 항등식의 한쪽 변에서 출발해 논리적인 대수적 단계를 거쳐 원하는 결론에 도달하는 증명.",

    // Deductive algebraic proof and identities > data-def attribute
    "An equality that holds true for all permissible values of its variables, often written with the symbol ≡.": "허용되는 모든 변수 값에 대해 항상 성립하는 등식 (보통 기호 ≡로 표기).",

    // Deductive algebraic proof and identities > h3
    "Three golden rules for SL 1.6 “Show that / Prove that” questions": "SL 1.6 “Show that / Prove that” 문제의 3가지 황금 규칙",

    // Deductive algebraic proof and identities > li
    "<strong>Work in one direction (<span class=\"chem\">LHS -&gt; RHS</span>)</strong>: Pick one side (almost always the side with more terms or fractions) and simplify it step by step until it matches the other side. Never start by assuming the conclusion <span class=\"chem\">LHS = RHS</span> and cross-multiplying!": "<strong>한 방향으로만 전개하기 (<span class=\"chem\">LHS -&gt; RHS</span>)</strong>: 한쪽 변(대부분 항이 더 많거나 분수가 있는 쪽)을 골라 다른 쪽 변과 같아질 때까지 한 단계씩 정리하세요. 절대 결론인 <span class=\"chem\">LHS = RHS</span>를 먼저 가정하고 대각선으로 곱하지 마세요!",

    // Deductive algebraic proof and identities > li
    "Any <strong>even integer</strong>: <span class=\"chem\">2n</span> (<span class=\"chem\">n \\in \\mathbb{Z}</span>); any <strong>odd integer</strong>: <span class=\"chem\">2n + 1</span>.": "임의의 <strong>짝수</strong>: <span class=\"chem\">2n</span> (<span class=\"chem\">n \\in \\mathbb{Z}</span>); 임의의 <strong>홀수</strong>: <span class=\"chem\">2n + 1</span>.",

    // Deductive algebraic proof and identities > li
    "<strong>Consecutive integers</strong>: <span class=\"chem\">n, n + 1, n + 2</span> (or <span class=\"chem\">n - 1, n, n + 1</span> so symmetric terms cancel!).": "<strong>연속하는 정수</strong>: <span class=\"chem\">n, n + 1, n + 2</span> (대칭인 항이 소거되도록 <span class=\"chem\">n - 1, n, n + 1</span>로 두면 더 좋아요!).",

    // Deductive algebraic proof and identities > li
    "A <strong>multiple of <span class=\"chem\">m</span></strong>: <span class=\"chem\">m k</span> where <span class=\"chem\">k \\in \\mathbb{Z}</span>.": "<strong><span class=\"chem\">m</span>의 배수</strong>: <span class=\"chem\">k \\in \\mathbb{Z}</span>에 대해 <span class=\"chem\">m k</span>.",

    // Deductive algebraic proof and identities > li
    "A <strong>two-digit integer</strong> with tens digit <span class=\"chem\">a</span> and units digit <span class=\"chem\">b</span>: <span class=\"chem\">10a + b</span> (reversed: <span class=\"chem\">10b + a</span>).": "십의 자리 숫자가 <span class=\"chem\">a</span>, 일의 자리 숫자가 <span class=\"chem\">b</span>인 <strong>두 자리 정수</strong>: <span class=\"chem\">10a + b</span> (자리를 바꾼 수: <span class=\"chem\">10b + a</span>).",

    // Deductive algebraic proof and identities > li
    "<strong>Complete the square to prove inequalities (<span class=\"chem\">&gt;= 0</span> or <span class=\"chem\">&gt; 0</span>)</strong>: Every real square satisfies <span class=\"chem\">A^2 &gt;= 0</span>. Rewriting a quadratic as <span class=\"chem\">a(x - h)^2 + k</span> with <span class=\"chem\">a &gt; 0, k &gt; 0</span> immediately proves it is strictly positive for all real <span class=\"chem\">x</span>.": "<strong>완전제곱식으로 부등식 증명하기 (<span class=\"chem\">&gt;= 0</span> 또는 <span class=\"chem\">&gt; 0</span>)</strong>: 실수의 제곱은 항상 <span class=\"chem\">A^2 &gt;= 0</span>이에요. 이차식을 <span class=\"chem\">a &gt; 0, k &gt; 0</span>인 <span class=\"chem\">a(x - h)^2 + k</span> 꼴로 고쳐 쓰면 모든 실수 <span class=\"chem\">x</span>에 대해 항상 양수임을 바로 증명할 수 있어요.",

    // Deductive algebraic proof and identities > exam tip (shown in English + translation) > p
    "<strong>Exam tip (AG = Answer Given):</strong> In any “Show that…” question, the target expression is printed on the exam paper. Examiners will award <strong>zero marks</strong> for the final step if you jump over the unsimplified expansion right before the given answer. Show one extra line of working!": "<strong>시험 팁 (AG = 답이 주어진 문제):</strong> “Show that…” 문제에서는 목표 식이 시험지에 인쇄되어 있어요. 주어진 답 바로 직전의 정리 전 전개 과정을 건너뛰면 마지막 단계 점수를 <strong>0점</strong> 처리해요. 중간 과정을 한 줄 더 써 주세요!",

    // Deductive algebraic proof and identities > worked example > h3
    "Direct algebraic proof with consecutive odd integers and completing the square": "연속하는 홀수와 완전제곱식을 이용한 직접 대수 증명",

    // Deductive algebraic proof and identities > worked example > p
    "(a) Prove algebraically that the difference between the squares of any two consecutive odd integers is always a multiple of <span class=\"chem\">8</span>. <strong>[3 marks]</strong>": "(a) 연속하는 임의의 두 홀수의 제곱의 차는 항상 <span class=\"chem\">8</span>의 배수임을 대수적으로 증명하시오 (Prove). <strong>[3 marks]</strong>",

    // Deductive algebraic proof and identities > worked example > p
    "(b) Prove that <span class=\"chem\">a^2 + b^2 + 2c^2 - 2ac - 2bc &gt;= 0</span> for all real numbers <span class=\"chem\">a, b, c \\in \\mathbb{R}</span>. <strong>[3 marks]</strong>": "(b) 모든 실수 <span class=\"chem\">a, b, c \\in \\mathbb{R}</span>에 대하여 <span class=\"chem\">a^2 + b^2 + 2c^2 - 2ac - 2bc &gt;= 0</span>임을 증명하시오 (Prove). <strong>[3 marks]</strong>",

    // Deductive algebraic proof and identities > worked example > data-title attribute
    "Represent two consecutive odd integers in terms of n ∈ ℤ": "연속하는 두 홀수를 n ∈ ℤ로 나타내기",

    // Deductive algebraic proof and identities > worked example > p
    "Any odd integer can be written as 2n − 1, so the next consecutive odd integer is 2n + 1 (for n ∈ ℤ).": "임의의 홀수는 2n − 1로 쓸 수 있으므로 바로 다음 홀수는 2n + 1 (n ∈ ℤ)이에요.",

    // Deductive algebraic proof and identities > worked example > maths line
    "Let the two consecutive odd integers be 2<i>n</i> − 1 and 2<i>n</i> + 1 (<i>n</i> ∈ ℤ). <b>[M1]</b>": "연속하는 두 홀수를 2<i>n</i> − 1과 2<i>n</i> + 1 (<i>n</i> ∈ ℤ)이라 하자. <b>[M1]</b>",

    // Deductive algebraic proof and identities > worked example > data-title attribute
    "Expand the difference of their squares and factor out 8": "제곱의 차를 전개하고 8로 묶어 내기",

    // Deductive algebraic proof and identities > worked example > p
    "Expanding (2n + 1)² − (2n − 1)² cancels 4n² and 1, leaving 8n.": "(2n + 1)² − (2n − 1)²을 전개하면 4n²과 1이 소거되어 8n만 남아요.",

    // Deductive algebraic proof and identities > worked example > maths line
    "Since <i>n</i> ∈ ℤ, 8<i>n</i> is a multiple of 8. <b>[R1]</b>": "<i>n</i> ∈ ℤ이므로 8<i>n</i>은 8의 배수이다. <b>[R1]</b>",

    // Deductive algebraic proof and identities > worked example > data-title attribute
    "Split 2c² into c² + c² and group into two completed squares": "2c²을 c² + c²으로 나누어 두 개의 완전제곱식으로 묶기",

    // Deductive algebraic proof and identities > worked example > p
    "Grouping a² − 2ac + c² and b² − 2bc + c² turns the expression into the sum of two squares of real numbers.": "a² − 2ac + c²과 b² − 2bc + c²으로 묶으면 식이 두 실수의 제곱의 합이 돼요.",

    // Deductive algebraic proof and identities > worked example > maths line
    "Since (<i>a</i> − <i>c</i>)<sup>2</sup> ≥ 0 and (<i>b</i> − <i>c</i>)<sup>2</sup> ≥ 0 for all <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ, their sum is ≥ 0. <b>[R1]</b>": "모든 <i>a</i>, <i>b</i>, <i>c</i> ∈ ℝ에 대해 (<i>a</i> − <i>c</i>)<sup>2</sup> ≥ 0이고 (<i>b</i> − <i>c</i>)<sup>2</sup> ≥ 0이므로 두 식의 합도 ≥ 0이다. <b>[R1]</b>",

    // Deductive algebraic proof and identities > try it > p
    "A three-digit integer has hundreds digit <span class=\"chem\">a</span>, tens digit <span class=\"chem\">b</span>, and units digit <span class=\"chem\">c</span> (with <span class=\"chem\">a &gt; c</span>), so its value is <span class=\"chem\">100a + 10b + c</span>. When its digits are reversed, the new number is <span class=\"chem\">100c + 10b + a</span>. The difference between the original number and the reversed number is always divisible by a largest positive integer <span class=\"chem\">M</span> regardless of <span class=\"chem\">a, b, c</span>. Enter the value of <span class=\"chem\">M</span>.": "세 자리 정수의 백의 자리 숫자가 <span class=\"chem\">a</span>, 십의 자리 숫자가 <span class=\"chem\">b</span>, 일의 자리 숫자가 <span class=\"chem\">c</span> (<span class=\"chem\">a &gt; c</span>)이므로 그 값은 <span class=\"chem\">100a + 10b + c</span>예요. 자릿수를 거꾸로 뒤집은 새로운 수는 <span class=\"chem\">100c + 10b + a</span>예요. 원래 수와 뒤집은 수의 차는 <span class=\"chem\">a, b, c</span>에 관계없이 항상 가장 큰 양의 정수 <span class=\"chem\">M</span>으로 나누어떨어져요. <span class=\"chem\">M</span>의 값을 입력하시오.",

    // Deductive algebraic proof and identities > try it > li
    "Subtract the reversed number from the original: <span class=\"chem\">(100a + 10b + c) - (100c + 10b + a)</span>.": "원래 수에서 뒤집은 수를 빼세요: <span class=\"chem\">(100a + 10b + c) - (100c + 10b + a)</span>.",

    // Deductive algebraic proof and identities > try it > li
    "Notice that <span class=\"chem\">10b</span> cancels completely, leaving <span class=\"chem\">99a - 99c = 99(a - c)</span>.": "<span class=\"chem\">10b</span>가 완전히 소거되어 <span class=\"chem\">99a - 99c = 99(a - c)</span>만 남아요.",

    // Proof by mathematical induction > Additional HL > data-toc attribute
    "Induction": "수학적 귀납법",

    // Proof by mathematical induction > Additional HL > h2
    "Proof by mathematical induction": "수학적 귀납법에 의한 증명",

    // Proof by mathematical induction > Additional HL > p
    "<dfn data-def=\"A method of proving a statement P(n) for all integers n ≥ n₀ by proving a base case P(n₀) and proving the inductive step that P(k) ⇒ P(k+1).\">Mathematical induction</dfn> proves an infinite sequence of statements <span class=\"chem\">P(1), P(2), P(3), ...</span> in the same way an infinite line of dominoes falls: if you knock over the <strong>first domino</strong> (<span class=\"chem\">P(1)</span> is true), and you prove that <strong>any domino falling knocks over the very next domino</strong> (<span class=\"chem\">P(k) =&gt; P(k + 1)</span>), then every domino <span class=\"chem\">P(n)</span> for <span class=\"chem\">n \\in \\mathbb{Z}^+</span> must fall.": "<dfn data-def=\"A method of proving a statement P(n) for all integers n ≥ n₀ by proving a base case P(n₀) and proving the inductive step that P(k) ⇒ P(k+1).\">수학적 귀납법 <span class=\"en-term\">(mathematical induction)</span></dfn>은 무한히 늘어선 도미노가 쓰러지는 원리와 똑같이 <span class=\"chem\">P(1), P(2), P(3), ...</span>을 증명해요. <strong>첫 번째 도미노</strong>를 쓰러뜨리고(<span class=\"chem\">P(1)</span>이 참), <strong>어떤 도미노가 쓰러지면 바로 다음 도미노도 쓰러진다</strong>(<span class=\"chem\">P(k) =&gt; P(k + 1)</span>)는 것을 보이면, 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">P(n)</span>이 참이 돼요.",

    // Proof by mathematical induction > Additional HL > data-def attribute
    "A method of proving a statement P(n) for all integers n ≥ n₀ by proving a base case P(n₀) and proving the inductive step that P(k) ⇒ P(k+1).": "초기 조건 P(n₀)이 참임을 보이고 P(k) ⇒ P(k+1)인 귀납 단계를 증명하여 모든 정수 n ≥ n₀에 대해 명제 P(n)을 증명하는 방법.",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > p
    "<strong>The mandatory 4-step IB markscheme template (memorize word-for-word):</strong>": "<strong>필수 4단계 IB 채점 기준 양식 (토씨 하나 틀리지 않고 외우세요):</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Base case (<span class=\"chem\">n = 1</span>, or initial <span class=\"chem\">n_0</span>)</strong>: Compute <span class=\"chem\">LHS</span> and <span class=\"chem\">RHS</span> separately (or evaluate <span class=\"chem\">f(1)</span>) and write: <em>“Therefore <span class=\"chem\">P(1)</span> is true.”</em> <strong>[R1]</strong>": "<strong>초기 단계 (<span class=\"chem\">n = 1</span>, 또는 시작값 <span class=\"chem\">n_0</span>)</strong>: <span class=\"chem\">LHS</span>와 <span class=\"chem\">RHS</span>를 따로 계산하거나 <span class=\"chem\">f(1)</span>을 구한 뒤 <em>“따라서 <span class=\"chem\">P(1)</span>은 참이다.”</em>라고 쓰세요. <strong>[R1]</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Inductive hypothesis (<span class=\"chem\">n = k</span>)</strong>: Write: <em>“Assume <span class=\"chem\">P(k)</span> is true for <strong>some</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>”</em> and state the <span class=\"chem\">n = k</span> equation explicitly. <strong>[M1]</strong>": "<strong>귀납 가정 (<span class=\"chem\">n = k</span>)</strong>: <em>“<strong>어떤</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(k)</span>가 참이라고 가정하자”</em>라고 쓰고 <span class=\"chem\">n = k</span>일 때의 식을 명확히 적으세요. <strong>[M1]</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Inductive step (<span class=\"chem\">n = k + 1</span>)</strong>: Start from the <span class=\"chem\">n = k + 1</span> expression, <strong>explicitly substitute your inductive hypothesis</strong>, and factor/simplify to the exact <span class=\"chem\">(k + 1)</span> target form. <strong>[M1 A1 A1]</strong>": "<strong>귀납 단계 (<span class=\"chem\">n = k + 1</span>)</strong>: <span class=\"chem\">n = k + 1</span>일 때의 식에서 출발해 <strong>귀납 가정을 명시적으로 대입</strong>한 뒤, 인수분해·정리하여 정확히 <span class=\"chem\">(k + 1)</span> 목표 꼴을 만드세요. <strong>[M1 A1 A1]</strong>",

    // Proof by mathematical induction > exam tip (shown in English + translation) > Additional HL > li
    "<strong>Conclusion sentence</strong>: <em>“Since <span class=\"chem\">P(1)</span> is true, and <span class=\"chem\">P(k)</span> being true implies <span class=\"chem\">P(k + 1)</span> is true, by the principle of mathematical induction, <span class=\"chem\">P(n)</span> is true for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>.”</em> <strong>[R1]</strong>": "<strong>결론 문장</strong>: <em>“<span class=\"chem\">P(1)</span>이 참이고, <span class=\"chem\">P(k)</span>가 참이면 <span class=\"chem\">P(k + 1)</span>도 참이므로, 수학적 귀납법의 원리에 의해 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(n)</span>은 참이다.”</em> <strong>[R1]</strong>",

    // Proof by mathematical induction > common mistake > Additional HL > p
    "<strong>Never write “Assume <span class=\"chem\">P(k)</span> is true for all <span class=\"chem\">k</span>”!</strong> If you assume it is true for <em>all</em> <span class=\"chem\">k</span>, you have assumed what you are trying to prove. Always write <em>“for <strong>some</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>”</em>. Also note that the final <strong>[R1]</strong> mark for the conclusion sentence is only awarded if at least the base case and inductive hypothesis substitution were attempted.": "<strong>절대 “모든 <span class=\"chem\">k</span>에 대하여 <span class=\"chem\">P(k)</span>가 참이라고 가정하자”라고 쓰지 마세요!</strong> <em>모든</em> <span class=\"chem\">k</span>에 대해 참이라고 가정하면 증명하려는 결론 자체를 가정하는 셈이 돼요. 항상 <em>“<strong>어떤</strong> <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여”</em>라고 쓰세요. 또한 결론 문장의 마지막 <strong>[R1]</strong> 점수는 최소한 초기 단계와 귀납 가정 대입을 시도했을 때만 부여돼요.",

    // Proof by mathematical induction > Additional HL > h3
    "How to execute the inductive step (<span class=\"chem\">n = k + 1</span>) across all 4 IB question types": "4가지 IB 출제 유형별 귀납 단계 (<span class=\"chem\">n = k + 1</span>) 풀이 전략",

    // Proof by mathematical induction > Additional HL > li
    "<strong>1. Series summations (<span class=\"chem\">sum_{r=1}^n u_r = S(n)</span>)</strong>: Split off the last term: <span class=\"chem\">sum_{r=1}^{k+1} u_r = (sum_{r=1}^k u_r) + u_{k+1} = S(k) + u_{k+1}</span>. <strong>Factor out common factors</strong> like <span class=\"chem\">(k + 1)</span> or <span class=\"chem\">k!</span> or <span class=\"chem\">2^k</span> immediately instead of expanding everything into a giant polynomial!": "<strong>1. 급수의 합 (<span class=\"chem\">sum_{r=1}^n u_r = S(n)</span>)</strong>: 마지막 항을 분리하세요: <span class=\"chem\">sum_{r=1}^{k+1} u_r = (sum_{r=1}^k u_r) + u_{k+1} = S(k) + u_{k+1}</span>. 거대한 다항식으로 전부 전개하지 말고 바로 <span class=\"chem\">(k + 1)</span>, <span class=\"chem\">k!</span>, <span class=\"chem\">2^k</span> 같은 <strong>공통인수로 묶어 내세요</strong>!",

    // Proof by mathematical induction > Additional HL > li
    "<strong>2. Divisibility (“<span class=\"chem\">f(n)</span> is divisible by <span class=\"chem\">m</span>”)</strong>: In your hypothesis, write <span class=\"chem\">f(k) = m A</span> for some <span class=\"chem\">A \\in \\mathbb{Z}</span>, <strong>isolate the highest exponential term</strong> (e.g. <span class=\"chem\">7^k = 6A - 1</span> or <span class=\"chem\">5^{2k} = 24A + 1</span>), and substitute it straight into <span class=\"chem\">f(k + 1)</span>.": "<strong>2. 배수/나누어떨어짐 (“<span class=\"chem\">f(n)</span>이 <span class=\"chem\">m</span>으로 나누어떨어진다”)</strong>: 가정에서 어떤 <span class=\"chem\">A \\in \\mathbb{Z}</span>에 대해 <span class=\"chem\">f(k) = m A</span>라 두고, <strong>가장 큰 거듭제곱 항을 한쪽에 남긴 뒤</strong> (예: <span class=\"chem\">7^k = 6A - 1</span> 또는 <span class=\"chem\">5^{2k} = 24A + 1</span>) <span class=\"chem\">f(k + 1)</span>에 바로 대입하세요.",

    // Proof by mathematical induction > Additional HL > li
    "<strong>3. Higher derivatives (<span class=\"chem\">f^{(n)}(x)</span>)</strong>: Differentiate your <span class=\"chem\">n = k</span> formula once with respect to <span class=\"chem\">x</span> using the product, quotient, or chain rule: <span class=\"chem\">f^{(k+1)}(x) = d/dx [f^{(k)}(x)]</span>.": "<strong>3. 고계도함수 (<span class=\"chem\">f^{(n)}(x)</span>)</strong>: 곱의 미분법, 몫의 미분법, 연쇄법칙을 이용해 <span class=\"chem\">n = k</span>일 때의 식을 <span class=\"chem\">x</span>에 대해 한 번 미분하세요: <span class=\"chem\">f^{(k+1)}(x) = d/dx [f^{(k)}(x)]</span>.",

    // Proof by mathematical induction > Additional HL > li
    "<strong>4. Inequalities (<span class=\"chem\">L(n) &gt; R(n)</span>)</strong>: Start with <span class=\"chem\">L(k + 1)</span>, apply the inductive hypothesis inequality to replace <span class=\"chem\">L(k)</span> with <span class=\"chem\">R(k)</span>, and show that the resulting expression is <span class=\"chem\">&gt; R(k + 1)</span>.": "<strong>4. 부등식 (<span class=\"chem\">L(n) &gt; R(n)</span>)</strong>: <span class=\"chem\">L(k + 1)</span>에서 시작해 귀납 가정 부등식을 적용하여 <span class=\"chem\">L(k)</span>를 <span class=\"chem\">R(k)</span>로 바꾼 뒤, 그 식이 <span class=\"chem\">&gt; R(k + 1)</span>임을 보이세요.",

    // Proof by mathematical induction > widget > Additional HL > data-title attribute
    "Mathematical induction domino & step verifier": "수학적 귀납법 도미노 및 단계 검증기",

    // Proof by mathematical induction > widget > Additional HL > figcaption
    "Select a proposition <span class=\"chem\">P(n)</span> and step through the domino chain from <span class=\"chem\">n = 1</span> up to <span class=\"chem\">n = 7</span> to see how the inductive hypothesis <span class=\"chem\">P(k)</span> algebraically locks into <span class=\"chem\">P(k + 1)</span> at every step.": "명제 <span class=\"chem\">P(n)</span>을 선택하고 <span class=\"chem\">n = 1</span>부터 <span class=\"chem\">n = 7</span>까지 도미노 연쇄를 따라가며 매 단계 귀납 가정 <span class=\"chem\">P(k)</span>가 어떻게 <span class=\"chem\">P(k + 1)</span>로 대수적으로 연결되는지 확인해 보세요.",

    // Proof by mathematical induction > worked example > Additional HL > h3
    "Proving divisibility by mathematical induction": "수학적 귀납법으로 나누어떨어짐 증명하기",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Prove by mathematical induction that <span class=\"chem\">f(n) = 5^{2n} - 1</span> is divisible by <span class=\"chem\">24</span> for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>. <strong>[6 marks]</strong>": "모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">f(n) = 5^{2n} - 1</span>이 <span class=\"chem\">24</span>로 나누어떨어짐을 수학적 귀납법으로 증명하시오 (Prove). <strong>[6 marks]</strong>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 1: Base case n = 1": "1단계: 초기 조건 n = 1",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Evaluate f(1) explicitly and show it is an integer multiple of 24.": "f(1)을 직접 계산해 24의 정수배임을 보이세요.",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "For <i>n</i> = 1: <i>f</i>(1) = 5<sup>2(1)</sup> − 1 = 25 − 1 = 24 = 24(1), which is divisible by 24. Hence <i>P</i>(1) is true. <b>[R1]</b>": "<i>n</i> = 1일 때: <i>f</i>(1) = 5<sup>2(1)</sup> − 1 = 25 − 1 = 24 = 24(1)이므로 24로 나누어떨어진다. 따라서 <i>P</i>(1)은 참이다. <b>[R1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 2: Inductive hypothesis n = k": "2단계: 귀납 가정 n = k",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Assume P(k) holds for some positive integer k, and isolate 5^(2k) so we can substitute it cleanly into f(k+1).": "어떤 양의 정수 k에 대해 P(k)가 성립한다고 가정하고, f(k+1)에 깔끔하게 대입할 수 있도록 5^(2k)만 남기세요.",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "Assume <i>P</i>(<i>k</i>) is true for some <i>k</i> ∈ ℤ<sup>+</sup>: 5<sup>2<i>k</i></sup> − 1 = 24<i>A</i> for some <i>A</i> ∈ ℤ ⇒ 5<sup>2<i>k</i></sup> = 24<i>A</i> + 1. <b>[M1]</b>": "어떤 <i>k</i> ∈ ℤ<sup>+</sup>에 대해 <i>P</i>(<i>k</i>)가 참이라고 가정하자: 어떤 <i>A</i> ∈ ℤ에 대해 5<sup>2<i>k</i></sup> − 1 = 24<i>A</i> ⇒ 5<sup>2<i>k</i></sup> = 24<i>A</i> + 1. <b>[M1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 3: Inductive step n = k + 1": "3단계: 귀납 단계 n = k + 1",

    // Proof by mathematical induction > worked example > Additional HL > p
    "Rewrite 5^(2(k+1)) as 5² · 5^(2k) = 25 · 5^(2k), substitute 5^(2k) = 24A + 1, and factor out 24.": "5^(2(k+1))을 5² · 5^(2k) = 25 · 5^(2k)로 고쳐 쓰고, 5^(2k) = 24A + 1을 대입한 뒤 24로 묶어 내세요.",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "For <i>n</i> = <i>k</i> + 1: <i>f</i>(<i>k</i> + 1) = 5<sup>2(<i>k</i>+1)</sup> − 1 = 5<sup>2</sup> · 5<sup>2<i>k</i></sup> − 1 = 25(24<i>A</i> + 1) − 1 <b>[M1 A1]</b>": "<i>n</i> = <i>k</i> + 1일 때: <i>f</i>(<i>k</i> + 1) = 5<sup>2(<i>k</i>+1)</sup> − 1 = 5<sup>2</sup> · 5<sup>2<i>k</i></sup> − 1 = 25(24<i>A</i> + 1) − 1 <b>[M1 A1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "<i>f</i>(<i>k</i> + 1) = 25(24<i>A</i>) + 25 − 1 = 24(25<i>A</i> + 1), which is divisible by 24 since 25<i>A</i> + 1 ∈ ℤ. <b>[A1]</b>": "<i>f</i>(<i>k</i> + 1) = 25(24<i>A</i>) + 25 − 1 = 24(25<i>A</i> + 1)이고 25<i>A</i> + 1 ∈ ℤ이므로 24로 나누어떨어진다. <b>[A1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > data-title attribute
    "Step 4: Mandatory conclusion sentence": "4단계: 필수 결론 문장",

    // Proof by mathematical induction > worked example > Additional HL > p
    "State the principle of mathematical induction linking the base case and the inductive step.": "초기 단계와 귀납 단계를 연결해 수학적 귀납법의 원리를 서술하세요.",

    // Proof by mathematical induction > worked example > Additional HL > maths line
    "Since <i>P</i>(1) is true, and <i>P</i>(<i>k</i>) being true implies <i>P</i>(<i>k</i> + 1) is true, by the principle of mathematical induction <i>P</i>(<i>n</i>) is true for all <i>n</i> ∈ ℤ<sup>+</sup>. <b>[R1]</b>": "<i>P</i>(1)이 참이고, <i>P</i>(<i>k</i>)가 참이면 <i>P</i>(<i>k</i> + 1)도 참이므로, 수학적 귀납법의 원리에 의해 모든 <i>n</i> ∈ ℤ<sup>+</sup>에 대하여 <i>P</i>(<i>n</i>)은 참이다. <b>[R1]</b>",

    // Proof by mathematical induction > worked example > Additional HL > p
    "f(k+1) = 24(25A + 1), divisible by 24 for all n ∈ ℤ⁺": "f(k+1) = 24(25A + 1), 모든 n ∈ ℤ⁺에 대해 24로 나누어떨어짐",

    // Proof by mathematical induction > try it > Additional HL > p
    "Consider the proposition that <span class=\"chem\">f(n) = 3^{2n} + 7</span> is divisible by <span class=\"chem\">m</span> for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>. By testing <span class=\"chem\">n = 1</span> and <span class=\"chem\">n = 2</span> (or setting up the inductive step <span class=\"chem\">f(k+1) = 9(3^{2k} + 7) - 56</span>), find the largest positive integer <span class=\"chem\">m</span> for which this statement holds for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>.": "모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">f(n) = 3^{2n} + 7</span>이 <span class=\"chem\">m</span>으로 나누어떨어진다는 명제를 생각하자. <span class=\"chem\">n = 1</span>과 <span class=\"chem\">n = 2</span>를 확인하거나 귀납 단계 <span class=\"chem\">f(k+1) = 9(3^{2k} + 7) - 56</span>을 세워, 이 명제가 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대해 성립하도록 하는 가장 큰 양의 정수 <span class=\"chem\">m</span>을 구하시오 (Find).",

    // Proof by mathematical induction > try it > Additional HL > li
    "Evaluate <span class=\"chem\">f(1) = 3^2 + 7 = 16</span> and <span class=\"chem\">f(2) = 3^4 + 7 = 88</span>.": "<span class=\"chem\">f(1) = 3^2 + 7 = 16</span>과 <span class=\"chem\">f(2) = 3^4 + 7 = 88</span>을 계산하세요.",

    // Proof by mathematical induction > try it > Additional HL > li
    "Find <span class=\"chem\">gcd(16, 88)</span>, and notice in the inductive step that <span class=\"chem\">f(k+1) = 9 f(k) - 56 = 8(9A - 7)</span>.": "<span class=\"chem\">gcd(16, 88)</span>을 구하고, 귀납 단계에서 <span class=\"chem\">f(k+1) = 9 f(k) - 56 = 8(9A - 7)</span>이 됨을 확인하세요.",

    // Proof by mathematical induction > try it > Additional HL > maths line
    "<i>f</i>(1) = 16, <i>f</i>(2) = 88 ⇒ gcd(16, 88) = <b>8</b>": "<i>f</i>(1) = 16, <i>f</i>(2) = 88 ⇒ gcd(16, 88) = <b>8</b>",

    // Proof by mathematical induction > try it > Additional HL > maths line
    "Inductive step: 3<sup>2(<i>k</i>+1)</sup> + 7 = 9(8<i>A</i> − 7) + 7 = 72<i>A</i> − 56 = 8(9<i>A</i> − 7)": "귀납 단계: 3<sup>2(<i>k</i>+1)</sup> + 7 = 9(8<i>A</i> − 7) + 7 = 72<i>A</i> − 56 = 8(9<i>A</i> − 7)",

    // Proof by contradiction and disproof by counterexample > Additional HL > data-toc attribute
    "Contradiction & counterexamples": "귀류법과 반례",

    // Proof by contradiction and disproof by counterexample > Additional HL > h2
    "Proof by contradiction and disproof by counterexample": "귀류법과 반례를 이용한 반증",

    // Proof by contradiction and disproof by counterexample > Additional HL > h3
    "Proof by contradiction": "귀류법",

    // Proof by contradiction and disproof by counterexample > Additional HL > p
    "In a <dfn data-def=\"A proof technique that assumes the negation of the desired statement and deduces a logical impossibility (contradiction), proving the original statement must be true.\">proof by contradiction</dfn>, to prove a statement <span class=\"chem\">P</span> is true, we begin by <strong>assuming <span class=\"chem\">P</span> is false</strong> (its logical negation <span class=\"chem\">not P</span> is true). We then follow valid algebraic steps until we reach a statement that contradicts either our initial assumption or a known mathematical fact.": "<dfn data-def=\"A proof technique that assumes the negation of the desired statement and deduces a logical impossibility (contradiction), proving the original statement must be true.\">귀류법 <span class=\"en-term\">(proof by contradiction)</span></dfn>에서는 명제 <span class=\"chem\">P</span>가 참임을 증명하기 위해 먼저 <strong><span class=\"chem\">P</span>가 거짓이라고 가정</strong>(논리적 부정 <span class=\"chem\">not P</span>가 참이라고 가정)해요. 그런 다음 올바른 대수적 과정을 거쳐 처음의 가정이나 이미 알려진 수학적 사실과 어긋나는 모순을 이끌어내요.",

    // Proof by contradiction and disproof by counterexample > Additional HL > data-def attribute
    "A proof technique that assumes the negation of the desired statement and deduces a logical impossibility (contradiction), proving the original statement must be true.": "증명하려는 명제의 부정을 가정하여 논리적 모순을 이끌어 냄으로써 원래 명제가 참임을 보이는 증명 방법.",

    // Proof by contradiction and disproof by counterexample > Additional HL > h4
    "Two classic IB contradiction proofs": "두 가지 대표적인 IB 귀류법 증명",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<strong>Irrationality of <span class=\"chem\">sqrt(p)</span> (for prime <span class=\"chem\">p</span>, e.g. <span class=\"chem\">sqrt(2), sqrt(3), sqrt(5)</span>)</strong>: Assume <span class=\"chem\">sqrt(p)</span> is rational, so <span class=\"chem\">sqrt(p) = a / b</span> where <span class=\"chem\">a, b \\in \\mathbb{Z}^+</span> and <strong><span class=\"chem\">gcd(a, b) = 1</span> (no common factors)</strong>. Squaring gives <span class=\"chem\">a^2 = p b^2</span>, so <span class=\"chem\">p</span> divides <span class=\"chem\">a^2</span>, which (since <span class=\"chem\">p</span> is prime) implies <span class=\"chem\">p</span> divides <span class=\"chem\">a</span>. Write <span class=\"chem\">a = p k</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>); substituting gives <span class=\"chem\">p^2 k^2 = p b^2 =&gt; b^2 = p k^2</span>, so <span class=\"chem\">p</span> also divides <span class=\"chem\">b</span>. Thus <span class=\"chem\">p</span> is a common factor of <span class=\"chem\">a</span> and <span class=\"chem\">b</span>, contradicting <span class=\"chem\">gcd(a, b) = 1</span>!": "<strong><span class=\"chem\">sqrt(p)</span>가 무리수임의 증명 (소수 <span class=\"chem\">p</span>, 예: <span class=\"chem\">sqrt(2), sqrt(3), sqrt(5)</span>)</strong>: <span class=\"chem\">sqrt(p)</span>가 유리수라고 가정하면 <span class=\"chem\">a, b \\in \\mathbb{Z}^+</span>이고 <strong><span class=\"chem\">gcd(a, b) = 1</span> (서로소)</strong>인 <span class=\"chem\">sqrt(p) = a / b</span>로 쓸 수 있어요. 양변을 제곱하면 <span class=\"chem\">a^2 = p b^2</span>이므로 <span class=\"chem\">p</span>는 <span class=\"chem\">a^2</span>을 나누고, <span class=\"chem\">p</span>가 소수이므로 <span class=\"chem\">p</span>는 <span class=\"chem\">a</span>를 나눠요. <span class=\"chem\">a = p k</span> (<span class=\"chem\">k \\in \\mathbb{Z}</span>)로 대입하면 <span class=\"chem\">p^2 k^2 = p b^2 =&gt; b^2 = p k^2</span>이므로 <span class=\"chem\">p</span>는 <span class=\"chem\">b</span>도 나눠요. 따라서 <span class=\"chem\">p</span>가 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>의 공약수가 되어 <span class=\"chem\">gcd(a, b) = 1</span>에 모순이에요!",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<strong>Irrationality of <span class=\"chem\">log_a b</span> (when <span class=\"chem\">a, b</span> have different prime factors, e.g. <span class=\"chem\">log_2 5</span>)</strong>: Assume <span class=\"chem\">log_2 5 = p / q</span> where <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>. Rewriting in exponential form gives <span class=\"chem\">2^{p/q} = 5 =&gt; 2^p = 5^q</span>. However, for any <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>, <span class=\"chem\">2^p</span> is always <strong>even</strong> while <span class=\"chem\">5^q</span> is always <strong>odd</strong>—a contradiction!": "<strong><span class=\"chem\">log_a b</span>가 무리수임의 증명 (<span class=\"chem\">a, b</span>의 소인수가 다를 때, 예: <span class=\"chem\">log_2 5</span>)</strong>: <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">log_2 5 = p / q</span>라고 가정하세요. 지수 꼴로 고치면 <span class=\"chem\">2^{p/q} = 5 =&gt; 2^p = 5^q</span>가 돼요. 하지만 임의의 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">2^p</span>는 항상 <strong>짝수</strong>이고 <span class=\"chem\">5^q</span>는 항상 <strong>홀수</strong>이므로 모순이에요!",

    // Proof by contradiction and disproof by counterexample > Additional HL > h3
    "Disproof by counterexample": "반례를 이용한 반증",

    // Proof by contradiction and disproof by counterexample > Additional HL > p
    "To prove a universal statement (“For all <span class=\"chem\">x \\in S</span>, property <span class=\"chem\">Q(x)</span> holds”) is <strong>false</strong>, you only need to exhibit <strong>one single <dfn data-def=\"A specific example that satisfies the hypothesis of a general statement but makes its conclusion false.\">counterexample</dfn></strong> <span class=\"chem\">x_0 \\in S</span> for which <span class=\"chem\">Q(x_0)</span> is false. (Note: Proof by counterexample remains fully examinable in the May 2028 IB AA HL syllabus.)": "보편 명제(“모든 <span class=\"chem\">x \\in S</span>에 대해 성질 <span class=\"chem\">Q(x)</span>가 성립한다”)가 <strong>거짓</strong>임을 보이려면, <span class=\"chem\">Q(x_0)</span>이 거짓이 되는 <strong>단 하나의 <dfn data-def=\"A specific example that satisfies the hypothesis of a general statement but makes its conclusion false.\">반례 <span class=\"en-term\">(counterexample)</span></dfn></strong> <span class=\"chem\">x_0 \\in S</span>만 제시하면 돼요. (참고: 반례를 이용한 증명은 May 2028 IB AA HL 시험 범위에 그대로 포함돼요.)",

    // Proof by contradiction and disproof by counterexample > Additional HL > data-def attribute
    "A specific example that satisfies the hypothesis of a general statement but makes its conclusion false.": "일반적인 명제의 가정은 만족하지만 결론은 거짓이 되게 하는 구체적인 예시.",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<em>Conjecture:</em> “For all real numbers <span class=\"chem\">x, y</span>, if <span class=\"chem\">x^2 &gt; y^2</span>, then <span class=\"chem\">x &gt; y</span>.” → <strong>False</strong>: take <span class=\"chem\">x = -3, y = 1</span>. Then <span class=\"chem\">x^2 = 9 &gt; 1 = y^2</span>, but <span class=\"chem\">-3 &lt; 1</span>.": "<em>추측:</em> “모든 실수 <span class=\"chem\">x, y</span>에 대해 <span class=\"chem\">x^2 &gt; y^2</span>이면 <span class=\"chem\">x &gt; y</span>이다.” → <strong>거짓</strong>: <span class=\"chem\">x = -3, y = 1</span>을 택하면 <span class=\"chem\">x^2 = 9 &gt; 1 = y^2</span>이지만 <span class=\"chem\">-3 &lt; 1</span>이에요.",

    // Proof by contradiction and disproof by counterexample > Additional HL > li
    "<em>Conjecture:</em> “<span class=\"chem\">n^2 + n + 41</span> is prime for all <span class=\"chem\">n \\in \\mathbb{Z}^+</span>.” → <strong>False</strong>: take <span class=\"chem\">n = 41</span>. Then <span class=\"chem\">41^2 + 41 + 41 = 41(41 + 1 + 1) = 41 × 43</span>, which is composite.": "<em>추측:</em> “모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">n^2 + n + 41</span>은 소수이다.” → <strong>거짓</strong>: <span class=\"chem\">n = 41</span>을 택하면 <span class=\"chem\">41^2 + 41 + 41 = 41(41 + 1 + 1) = 41 × 43</span>이므로 합성수예요.",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > h3
    "Proving irrationality by contradiction": "귀류법으로 무리수임 증명하기",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Prove by contradiction that <span class=\"chem\">sqrt(3)</span> is irrational. <strong>[5 marks]</strong>": "<span class=\"chem\">sqrt(3)</span>이 무리수임을 귀류법으로 증명하시오 (Prove). <strong>[5 marks]</strong>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > data-title attribute
    "Assume the negation in lowest terms (coprime integers)": "명제의 부정을 기약분수(서로소인 정수)로 가정하기",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Assume √3 is rational and write it as a fraction a/b where a and b share no common factors other than 1.": "√3이 유리수라고 가정하고, 1 이외의 공약수가 없는 기약분수 a/b로 나타내세요.",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "Assume, for a contradiction, that √3 is rational, so √3 = <span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span> where <i>a</i>, <i>b</i> ∈ ℤ<sup>+</sup> and gcd(<i>a</i>, <i>b</i>) = 1. <b>[M1]</b>": "모순을 이끌어 내기 위해 √3이 유리수라고 가정하면, √3 = <span class=\"frac\"><span><i>a</i></span><span><i>b</i></span></span> (단, <i>a</i>, <i>b</i> ∈ ℤ<sup>+</sup>이고 gcd(<i>a</i>, <i>b</i>) = 1)로 쓸 수 있다. <b>[M1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > data-title attribute
    "Square both sides and deduce that 3 divides a": "양변을 제곱하여 3이 a를 나눔을 보이기",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Since 3 is prime, if 3 divides a², then 3 must divide a itself.": "3은 소수이므로 3이 a²을 나누면 3은 a도 나누어야 해요.",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "3 = <span class=\"frac\"><span><i>a</i><sup>2</sup></span><span><i>b</i><sup>2</sup></span></span> ⇒ <i>a</i><sup>2</sup> = 3<i>b</i><sup>2</sup>. Hence 3 divides <i>a</i><sup>2</sup>, and since 3 is prime, 3 divides <i>a</i>. <b>[M1 A1]</b>": "3 = <span class=\"frac\"><span><i>a</i><sup>2</sup></span><span><i>b</i><sup>2</sup></span></span> ⇒ <i>a</i><sup>2</sup> = 3<i>b</i><sup>2</sup>. 따라서 3은 <i>a</i><sup>2</sup>을 나누고, 3이 소수이므로 3은 <i>a</i>를 나눈다. <b>[M1 A1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > data-title attribute
    "Substitute a = 3k to deduce that 3 also divides b, giving a contradiction": "a = 3k를 대입해 3이 b도 나눔을 보여 모순 이끌기",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "Showing 3 divides both a and b contradicts gcd(a, b) = 1.": "3이 a와 b를 모두 나눈다는 것은 gcd(a, b) = 1에 모순돼요.",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "Let <i>a</i> = 3<i>k</i> (<i>k</i> ∈ ℤ). Then (3<i>k</i>)<sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ 9<i>k</i><sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ <i>b</i><sup>2</sup> = 3<i>k</i><sup>2</sup>. <b>[M1]</b>": "<i>a</i> = 3<i>k</i> (<i>k</i> ∈ ℤ)라 하면 (3<i>k</i>)<sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ 9<i>k</i><sup>2</sup> = 3<i>b</i><sup>2</sup> ⇒ <i>b</i><sup>2</sup> = 3<i>k</i><sup>2</sup>. <b>[M1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > maths line
    "Thus 3 also divides <i>b</i><sup>2</sup> and hence 3 divides <i>b</i>. This contradicts gcd(<i>a</i>, <i>b</i>) = 1; therefore √3 is irrational. <b>[R1]</b>": "따라서 3은 <i>b</i><sup>2</sup>도 나누므로 3은 <i>b</i>를 나눈다. 이는 gcd(<i>a</i>, <i>b</i>) = 1에 모순이므로 √3은 무리수이다. <b>[R1]</b>",

    // Proof by contradiction and disproof by counterexample > worked example > Additional HL > p
    "3 divides both a and b, contradicting gcd(a, b) = 1 ⇒ √3 is irrational": "3이 a와 b를 모두 나누므로 gcd(a, b) = 1에 모순 ⇒ √3은 무리수",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > p
    "A student claims that the number <span class=\"chem\">f(n) = 2^n - 1</span> is prime for every prime number <span class=\"chem\">n</span>. While this is true for <span class=\"chem\">n = 2, 3, 5, 7</span>, it fails at the next prime <span class=\"chem\">n = 11</span> because <span class=\"chem\">2^{11} - 1 = 2047 = 23 × 89</span>. Now consider a simpler claim: “<span class=\"chem\">n^2 - n + 5</span> is prime for all positive integers <span class=\"chem\">n</span>.” Find the smallest integer <span class=\"chem\">n &gt;= 2</span> that serves as a counterexample.": "어떤 학생이 모든 소수 <span class=\"chem\">n</span>에 대해 <span class=\"chem\">f(n) = 2^n - 1</span>도 소수라고 주장했어요. 이 주장은 <span class=\"chem\">n = 2, 3, 5, 7</span>에서는 참이지만, 다음 소수인 <span class=\"chem\">n = 11</span>에서 <span class=\"chem\">2^{11} - 1 = 2047 = 23 × 89</span>이므로 거짓이에요. 이제 더 간단한 주장 “모든 양의 정수 <span class=\"chem\">n</span>에 대해 <span class=\"chem\">n^2 - n + 5</span>는 소수이다”를 생각해 봅시다. 반례가 되는 가장 작은 정수 <span class=\"chem\">n &gt;= 2</span>를 구하시오 (Find).",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > li
    "Test <span class=\"chem\">n = 2, 3, 4, 5</span> in <span class=\"chem\">n^2 - n + 5</span>.": "<span class=\"chem\">n^2 - n + 5</span>에 <span class=\"chem\">n = 2, 3, 4, 5</span>를 대입해 보세요.",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > li
    "For <span class=\"chem\">n = 2</span>: <span class=\"chem\">7</span> (prime). For <span class=\"chem\">n = 3</span>: <span class=\"chem\">11</span> (prime). For <span class=\"chem\">n = 4</span>: <span class=\"chem\">17</span> (prime). What happens at <span class=\"chem\">n = 5</span>?": "<span class=\"chem\">n = 2</span>일 때 <span class=\"chem\">7</span> (소수), <span class=\"chem\">n = 3</span>일 때 <span class=\"chem\">11</span> (소수), <span class=\"chem\">n = 4</span>일 때 <span class=\"chem\">17</span> (소수)이에요. <span class=\"chem\">n = 5</span>일 때는 어떻게 되나요?",

    // Proof by contradiction and disproof by counterexample > try it > Additional HL > maths line
    "For <i>n</i> = <b>5</b>: 5<sup>2</sup> − 5 + 5 = 25 = 5 × 5, which is composite (not prime).": "<i>n</i> = <b>5</b>일 때: 5<sup>2</sup> − 5 + 5 = 25 = 5 × 5이므로 합성수(소수가 아님)예요.",

    // Systems of linear equations (up to 3 variables) > Additional HL > data-toc attribute
    "3×3 linear systems": "3×3 연립일차방정식",

    // Systems of linear equations (up to 3 variables) > Additional HL > h2
    "Systems of linear equations (up to 3 variables)": "연립일차방정식 (최대 3변수)",

    // Systems of linear equations (up to 3 variables) > Additional HL > p
    "A system of three linear equations in three unknowns <span class=\"chem\">x, y, z</span> represents three planes in 3D space (Topic 3.18). We solve and classify the system algebraically using <dfn data-def=\"The systematic use of elementary row operations (swapping rows, scaling a row by a non-zero constant, adding a multiple of one row to another) to reduce a system to upper-triangular (echelon) form.\">Gaussian elimination</dfn>: use the first equation to eliminate <span class=\"chem\">x</span> from equations 2 and 3, then use the new second equation to eliminate <span class=\"chem\">y</span> from equation 3, arriving at an upper-triangular (row-echelon) system:": "세 미지수 <span class=\"chem\">x, y, z</span>에 대한 세 일차방정식의 연립방정식은 3차원 공간의 세 평면을 나타내요(Topic 3.18). 우리는 <dfn data-def=\"The systematic use of elementary row operations (swapping rows, scaling a row by a non-zero constant, adding a multiple of one row to another) to reduce a system to upper-triangular (echelon) form.\">가우스 소거법 <span class=\"en-term\">(Gaussian elimination)</span></dfn>을 이용해 이를 대수적으로 풀고 분류해요: 첫 번째 식으로 2번, 3번 식에서 <span class=\"chem\">x</span>를 소거한 뒤, 새로 얻은 두 번째 식으로 3번 식에서 <span class=\"chem\">y</span>를 소거하여 상삼각(행사다리꼴) 형태를 만들어요:",

    // Systems of linear equations (up to 3 variables) > Additional HL > data-def attribute
    "The systematic use of elementary row operations (swapping rows, scaling a row by a non-zero constant, adding a multiple of one row to another) to reduce a system to upper-triangular (echelon) form.": "기본 행 연산(두 행 교환, 한 행에 0이 아닌 상수 곱하기, 한 행의 실수배를 다른 행에 더하기)을 체계적으로 사용해 연립방정식을 상삼각 형태로 줄이는 방법.",

    // Systems of linear equations (up to 3 variables) > Additional HL > h3
    "Classifying the 3 outcomes from the final reduced row <span class=\"chem\">g(k) z = h(k)</span>": "마지막 정리된 행 <span class=\"chem\">g(k) z = h(k)</span>로 3가지 해의 유형 분류하기",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > caption
    "Classification of a 3 × 3 linear system after Gaussian elimination": "가우스 소거법 후 3 × 3 연립일차방정식의 분류",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "Condition on Row 3: <span class=\"chem\">g(k) z = h(k)</span>": "3행의 조건: <span class=\"chem\">g(k) z = h(k)</span>",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "Algebraic outcome": "대수적 해의 유형",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "3D geometric meaning (Topic 3.18)": "3차원 기하학적 의미 (Topic 3.18)",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "<strong>Unique solution</strong> (consistent): <span class=\"chem\">z = h(k) / g(k)</span>, then back-substitute to find unique <span class=\"chem\">y</span> and <span class=\"chem\">x</span>.": "<strong>유일한 해</strong> (해가 존재): <span class=\"chem\">z = h(k) / g(k)</span>를 구한 뒤 역으로 대입하여 유일한 <span class=\"chem\">y</span>와 <span class=\"chem\">x</span>를 구해요.",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "The three planes intersect at a <strong>single point</strong> <span class=\"chem\">(x, y, z)</span>.": "세 평면이 <strong>한 점</strong> <span class=\"chem\">(x, y, z)</span>에서 만나요.",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "<strong><span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) != 0</span></strong>": "<strong><span class=\"chem\">g(k) = 0</span>이고 <span class=\"chem\">h(k) != 0</span></strong>",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "<strong>No solution</strong> (inconsistent): Row 3 reads <span class=\"chem\">0 = h(k) != 0</span>, which is impossible.": "<strong>해 없음</strong> (불능): 3행이 <span class=\"chem\">0 = h(k) != 0</span>이 되어 모순이에요.",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "The planes form a <strong>triangular prism</strong> (pairwise intersecting in 3 parallel lines) or two/three planes are parallel and distinct.": "세 평면이 <strong>삼각기둥</strong>을 이루거나(두 평면씩 평행한 3개의 직선에서 만남), 둘 또는 세 평면이 서로 평행하고 달라요.",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > th
    "<strong><span class=\"chem\">g(k) = 0</span> and <span class=\"chem\">h(k) = 0</span></strong>": "<strong><span class=\"chem\">g(k) = 0</span>이고 <span class=\"chem\">h(k) = 0</span></strong>",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "<strong>Infinitely many solutions</strong> (dependent): Row 3 reads <span class=\"chem\">0 = 0</span>. Let <span class=\"chem\">z = lambda</span> (<span class=\"chem\">lambda \\in \\mathbb{R}</span>) and back-substitute into Row 2 and Row 1.": "<strong>무수히 많은 해</strong> (부정): 3행이 <span class=\"chem\">0 = 0</span>이 돼요. <span class=\"chem\">z = lambda</span> (<span class=\"chem\">lambda \\in \\mathbb{R}</span>)로 두고 2행과 1행에 대입하세요.",

    // Systems of linear equations (up to 3 variables) > table > Additional HL > td
    "The three planes meet along a common <strong>line of intersection</strong> <span class=\"chem\">\\mathbf{r} = \\mathbf{a} + \\lambda \\mathbf{b}</span> (a sheaf of planes) or are coincident.": "세 평면이 하나의 <strong>교선</strong> <span class=\"chem\">\\mathbf{r} = \\mathbf{a} + \\lambda \\mathbf{b}</span>에서 만나거나(평면다발) 서로 일치해요.",

    // Systems of linear equations (up to 3 variables) > not needed for IB > Additional HL > p
    "<strong>Not needed for IB Math AA HL:</strong> Matrix algebra, <span class=\"chem\">3 × 3</span> determinants (<span class=\"chem\">det(A) = 0</span>), inverse matrices <span class=\"chem\">A^{-1}</span>, Cramer's rule, eigenvalues, and Gauss-Jordan RREF matrix notation are <strong>not in the IB Math AA HL syllabus</strong> (matrices are only in Math AI). While you can use an augmented matrix shorthand for row operations, you must use Gaussian elimination to <span class=\"chem\">g(k)z = h(k)</span> to distinguish between <em>no solution</em> and <em>infinitely many solutions</em>.": "<strong>IB Math AA HL 시험 범위 외 내용:</strong> 행렬 연산, <span class=\"chem\">3 × 3</span> 행렬식(<span class=\"chem\">det(A) = 0</span>), 역행렬 <span class=\"chem\">A^{-1}</span>, 크라메르 공식, 고윳값, 가우스-조르당 기약 행사다리꼴(RREF) 표기는 <strong>IB Math AA HL 교육과정에 포함되지 않아요</strong> (행렬은 Math AI 전용이에요). 행 연산을 위해 첨가행렬 약식을 쓸 수는 있지만, <em>해 없음</em>과 <em>무수히 많은 해</em>를 구분하려면 반드시 가우스 소거법으로 <span class=\"chem\">g(k)z = h(k)</span> 꼴을 만들어야 해요.",

    // Systems of linear equations (up to 3 variables) > common mistake > Additional HL > p
    "<strong>Never divide a row by an expression containing the parameter <span class=\"chem\">k</span>!</strong> Dividing Row 2 by <span class=\"chem\">(k - 2)</span> silently assumes <span class=\"chem\">k != 2</span>, which destroys the exact singular value the question is asking you to investigate. Multiply rows by constants or expressions only when keeping track of zero factors.": "<strong>절대 매개변수 <span class=\"chem\">k</span>가 포함된 식으로 행을 나누지 마세요!</strong> 2행을 <span class=\"chem\">(k - 2)</span>로 나누면 암묵적으로 <span class=\"chem\">k != 2</span>라고 가정하는 것이 되어, 문제가 조사하라고 요구하는 바로 그 특이값을 놓치게 돼요. 0이 되는 인수를 따로 확인하지 않는 한 행에 상수만 곱하거나 0이 될 수 있는 식에 주의하세요.",

    // Systems of linear equations (up to 3 variables) > widget > Additional HL > data-title attribute
    "3D planes & 3×3 linear system classifier": "3차원 평면 및 3×3 연립방정식 분류기",

    // Systems of linear equations (up to 3 variables) > widget > Additional HL > figcaption
    "Explore the three geometric configurations of a <span class=\"chem\">3 × 3</span> linear system in 3D space—a unique point of intersection, a sheaf of planes meeting along a line (infinitely many solutions), and a triangular prism of planes (no solution)—alongside their reduced echelon rows.": "3차원 공간에서 <span class=\"chem\">3 × 3</span> 연립일차방정식이 나타내는 세 가지 기하학적 배치—한 점에서의 교차, 한 직선에서 만나는 평면다발(무수히 많은 해), 삼각기둥(해 없음)—와 정리된 행을 함께 살펴보세요.",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > h3
    "Finding parameter values for no solution and infinitely many solutions": "해 없음과 무수히 많은 해를 갖는 매개변수 값 구하기",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "Consider the system of linear equations:": "다음 연립일차방정식을 생각하자:",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "<span class=\"chem\">x + y + z = 2</span><br> <span class=\"chem\">2x + 3y + 4z = 5</span><br> <span class=\"chem\">3x + 4y + (k^2 - 4)z = k + 4</span>, &nbsp; where <span class=\"chem\">k \\in \\mathbb{R}</span>.": "<span class=\"chem\">x + y + z = 2</span><br> <span class=\"chem\">2x + 3y + 4z = 5</span><br> <span class=\"chem\">3x + 4y + (k^2 - 4)z = k + 4</span>, &nbsp; (<span class=\"chem\">k \\in \\mathbb{R}</span>).",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "(a) Find the value(s) of <span class=\"chem\">k</span> for which the system has: (i) a unique solution, (ii) no solution, (iii) infinitely many solutions. <strong>[5 marks]</strong>": "(a) 이 연립방정식이 (i) 유일한 해, (ii) 해 없음, (iii) 무수히 많은 해를 갖도록 하는 <span class=\"chem\">k</span>의 값을 각각 구하시오 (Find). <strong>[5 marks]</strong>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "(b) For the value of <span class=\"chem\">k</span> that gives infinitely many solutions, find the general solution in terms of a real parameter <span class=\"chem\">lambda</span>. <strong>[3 marks]</strong>": "(b) 무수히 많은 해를 갖는 <span class=\"chem\">k</span>의 값에 대하여 일반해를 실수 매개변수 <span class=\"chem\">lambda</span>로 나타내시오 (Find). <strong>[3 marks]</strong>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > data-title attribute
    "Eliminate x from equations 2 and 3 using R₂ → R₂ − 2R₁ and R₃ → R₃ − 3R₁": "R₂ → R₂ − 2R₁과 R₃ → R₃ − 3R₁을 이용해 2행과 3행에서 x 소거하기",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "Subtracting 2×(Row 1) from Row 2 and 3×(Row 1) from Row 3 zeroes out the x-column below Row 1.": "2행에서 2×(1행)을 빼고 3행에서 3×(1행)을 빼면 1행 아래의 x 열이 모두 0이 돼요.",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > data-title attribute
    "Eliminate y from equation 3 using R₃ → R₃ − R₂ and classify by k": "R₃ → R₃ − R₂를 이용해 3행에서 y 소거하고 k에 따라 분류하기",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "Subtracting the new Row 2 from the new Row 3 isolates z in the form g(k)z = h(k).": "새 3행에서 새 2행을 빼면 z가 g(k)z = h(k) 꼴로 정리돼요.",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > maths line
    "(i) <b>Unique solution</b>: <i>k</i><sup>2</sup> − 9 ≠ 0 ⇒ <b><i>k</i> ≠ 3 and <i>k</i> ≠ −3</b>.<br>(ii) <b>No solution</b>: <i>k</i> = −3 gives 0<i>z</i> = −6 (inconsistent), so <b><i>k</i> = −3</b>.<br>(iii) <b>Infinite solutions</b>: <i>k</i> = 3 gives 0<i>z</i> = 0, so <b><i>k</i> = 3</b>. <b>[A1]</b>": "(i) <b>유일한 해</b>: <i>k</i><sup>2</sup> − 9 ≠ 0 ⇒ <b><i>k</i> ≠ 3이고 <i>k</i> ≠ −3</b>.<br>(ii) <b>해 없음</b>: <i>k</i> = −3이면 0<i>z</i> = −6 (모순)이므로 <b><i>k</i> = −3</b>.<br>(iii) <b>무수히 많은 해</b>: <i>k</i> = 3이면 0<i>z</i> = 0이므로 <b><i>k</i> = 3</b>. <b>[A1]</b>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > data-title attribute
    "Set z = λ for k = 3 and back-substitute into Row 2 and Row 1": "k = 3일 때 z = λ로 놓고 2행과 1행에 역으로 대입하기",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "With Row 3 reduced to 0 = 0, z is a free parameter λ ∈ ℝ.": "3행이 0 = 0이 되었으므로 z는 자유 매개변수 λ ∈ ℝ이에요.",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > maths line
    "Let <i>z</i> = <i>λ</i> (<i>λ</i> ∈ ℝ). From <i>R</i><sub>2</sub>: <i>y</i> = 1 − 2<i>z</i> = <b>1 − 2<i>λ</i></b> <b>[M1]</b>": "<i>z</i> = <i>λ</i> (<i>λ</i> ∈ ℝ)라 하자. <i>R</i><sub>2</sub>에서: <i>y</i> = 1 − 2<i>z</i> = <b>1 − 2<i>λ</i></b> <b>[M1]</b>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > maths line
    "From <i>R</i><sub>1</sub>: <i>x</i> = 2 − <i>y</i> − <i>z</i> = 2 − (1 − 2<i>λ</i>) − <i>λ</i> = <b>1 + <i>λ</i></b> <b>[A1]</b>": "<i>R</i><sub>1</sub>에서: <i>x</i> = 2 − <i>y</i> − <i>z</i> = 2 − (1 − 2<i>λ</i>) − <i>λ</i> = <b>1 + <i>λ</i></b> <b>[A1]</b>",

    // Systems of linear equations (up to 3 variables) > worked example > Additional HL > p
    "(a) Unique: k ≠ ±3; No solution: k = −3; Infinite: k = 3 &nbsp;&nbsp; (b) (x, y, z) = (1 + λ, 1 − 2λ, λ)": "(a) 유일한 해: k ≠ ±3; 해 없음: k = −3; 무수히 많은 해: k = 3 &nbsp;&nbsp; (b) (x, y, z) = (1 + λ, 1 − 2λ, λ)",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > p
    "The system of equations <span class=\"chem\">x + 2y - z = 3</span>, <span class=\"chem\">2x + 5y + z = 8</span>, and <span class=\"chem\">3x + 7y + kz = 11</span> has <strong>infinitely many solutions</strong> for a specific real constant <span class=\"chem\">k</span>. When <span class=\"chem\">z = 2</span>, find the value of <span class=\"chem\">x + y + k</span>.": "연립방정식 <span class=\"chem\">x + 2y - z = 3</span>, <span class=\"chem\">2x + 5y + z = 8</span>, <span class=\"chem\">3x + 7y + kz = 11</span>이 특정한 실수 상수 <span class=\"chem\">k</span>에 대해 <strong>무수히 많은 해</strong>를 가져요. <span class=\"chem\">z = 2</span>일 때 <span class=\"chem\">x + y + k</span>의 값을 구하시오 (Find).",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > li
    "Notice that <span class=\"chem\">R_1 + R_2</span> on the left-hand side has <span class=\"chem\">(1+2)x + (2+5)y = 3x + 7y</span>, which matches <span class=\"chem\">R_3</span>! Also <span class=\"chem\">3 + 8 = 11</span>. Thus for infinite solutions we need <span class=\"chem\">k = -1 + 1 = 0</span>.": "좌변에서 <span class=\"chem\">R_1 + R_2</span>를 하면 <span class=\"chem\">(1+2)x + (2+5)y = 3x + 7y</span>가 되어 <span class=\"chem\">R_3</span>과 같아요! 우변도 <span class=\"chem\">3 + 8 = 11</span>이에요. 따라서 무수히 많은 해를 가지려면 <span class=\"chem\">k = -1 + 1 = 0</span>이어야 해요.",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > li
    "Now set <span class=\"chem\">z = 2</span> in <span class=\"chem\">x + 2y = 3 + z = 5</span> and <span class=\"chem\">2x + 5y = 8 - z = 6</span> to find <span class=\"chem\">x = 13, y = -4</span>, and compute <span class=\"chem\">x + y + k</span>.": "이제 <span class=\"chem\">x + 2y = 3 + z = 5</span>와 <span class=\"chem\">2x + 5y = 8 - z = 6</span>에 <span class=\"chem\">z = 2</span>를 대입해 <span class=\"chem\">x = 13, y = -4</span>를 구한 뒤 <span class=\"chem\">x + y + k</span>를 계산하세요.",

    // Systems of linear equations (up to 3 variables) > try it > Additional HL > maths line
    "For <i>z</i> = 2: <i>y</i> = 2 − 3(2) = −4, <i>x</i> = 3 − 2(−4) + 2 = 13 ⇒ <i>x</i> + <i>y</i> + <i>k</i> = 13 − 4 + 0 = <b>9</b>": "<i>z</i> = 2일 때: <i>y</i> = 2 − 3(2) = −4, <i>x</i> = 3 − 2(−4) + 2 = 13 ⇒ <i>x</i> + <i>y</i> + <i>k</i> = 13 − 4 + 0 = <b>9</b>",

    // Check your understanding > data-toc attribute
    "Practice": "연습 문제",

    // Check your understanding > h2
    "Check your understanding": "이해도 확인하기",

    // Check your understanding > data-title attribute
    "Topic 1.5 practice check": "Topic 1.5 연습 문제",

    // widget string (assets/js/widgets-t1-5.js)
    "Proposition P(n)": "명제 P(n)",

    // widget string (assets/js/widgets-t1-5.js)
    "Sum of squares: Σ r² = n(n+1)(2n+1)/6": "제곱의 합: Σ r² = n(n+1)(2n+1)/6",

    // widget string (assets/js/widgets-t1-5.js)
    "Sum of odd integers: Σ (2r − 1) = n²": "홀수의 합: Σ (2r − 1) = n²",

    // widget string (assets/js/widgets-t1-5.js)
    "Divisibility: 5^{2n} − 1 is divisible by 24": "배수 성질: 5^{2n} − 1은 24로 나누어떨어짐",

    // widget string (assets/js/widgets-t1-5.js)
    "Inductive step index k (proving P(k) ⇒ P(k+1))": "귀납 단계 번호 k (P(k) ⇒ P(k+1) 증명)",

    // widget string (assets/js/widgets-t1-5.js)
    "Step k → k + 1": "단계 k → k + 1",

    // widget string (assets/js/widgets-t1-5.js)
    "1. Base case P(1)": "1. 초기 조건 P(1)",

    // widget string (assets/js/widgets-t1-5.js)
    "2. Inductive hypothesis P(k)": "2. 귀납 가정 P(k)",

    // widget string (assets/js/widgets-t1-5.js)
    "3. Inductive step P(k + 1)": "3. 귀납 단계 P(k + 1)",

    // widget string (assets/js/widgets-t1-5.js)
    "Numerical check at n = k + 1": "n = k + 1일 때 수치 확인",

    // widget string (assets/js/widgets-t1-5.js)
    "Domino chain showing P(1) through P(7) falling by mathematical induction": "수학적 귀납법으로 P(1)부터 P(7)까지 쓰러지는 도미노 연쇄",

    // widget string (assets/js/widgets-t1-5.js)
    "Base": "초기값",

    // widget string (assets/js/widgets-t1-5.js)
    "3 × 3 System Configuration": "3 × 3 연립방정식 배치",

    // widget string (assets/js/widgets-t1-5.js)
    "Unique solution (k = 1): 3 planes meet at 1 point": "유일한 해 (k = 1): 3개 평면이 1점에서 만남",

    // widget string (assets/js/widgets-t1-5.js)
    "Infinite solutions (k = 3): sheaf of 3 planes meeting on a line": "무수히 많은 해 (k = 3): 한 직선에서 만나는 3개 평면의 다발",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution (k = −3): 3 planes form a triangular prism": "해 없음 (k = −3): 3개 평면이 삼각기둥을 이룸",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution: parallel planes": "해 없음: 평행한 평면들",

    // widget string (assets/js/widgets-t1-5.js)
    "Reduced Row 3: g(k)z = h(k)": "정리된 3행: g(k)z = h(k)",

    // widget string (assets/js/widgets-t1-5.js)
    "Algebraic classification": "대수적 분류",

    // widget string (assets/js/widgets-t1-5.js)
    "3D geometric intersection": "3차원 기하학적 교차",

    // widget string (assets/js/widgets-t1-5.js)
    "Unique solution: (x, y, z) = (5/4, 1/2, 1/4)": "유일한 해: (x, y, z) = (5/4, 1/2, 1/4)",

    // widget string (assets/js/widgets-t1-5.js)
    "Three planes intersect at a single point P": "세 평면이 한 점 P에서 만남",

    // widget string (assets/js/widgets-t1-5.js)
    "Three planes intersecting at a single unique point in 3D space": "3차원 공간에서 유일한 한 점에서 만나는 세 평면",

    // widget string (assets/js/widgets-t1-5.js)
    "Infinitely many solutions: (x, y, z) = (1 + λ, 1 − 2λ, λ), λ ∈ ℝ": "무수히 많은 해: (x, y, z) = (1 + λ, 1 − 2λ, λ), λ ∈ ℝ",

    // widget string (assets/js/widgets-t1-5.js)
    "Sheaf of 3 planes sharing a common line of intersection": "공통 교선을 공유하는 3개 평면의 다발",

    // widget string (assets/js/widgets-t1-5.js)
    "Sheaf of three planes intersecting along a single common line": "하나의 공통 교선을 따라 만나는 세 평면의 다발",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution (inconsistent system: 0 = −6)": "해 없음 (모순인 연립방정식: 0 = −6)",

    // widget string (assets/js/widgets-t1-5.js)
    "Triangular prism: pairs of planes meet in 3 parallel lines": "삼각기둥: 두 평면씩 평행한 3개의 직선에서 만남",

    // widget string (assets/js/widgets-t1-5.js)
    "Three planes forming a triangular prism with no common intersection": "공통 교점 없이 삼각기둥을 이루는 세 평면",

    // widget string (assets/js/widgets-t1-5.js)
    "No solution (inconsistent: parallel planes never meet)": "해 없음 (모순: 평행한 평면들은 만나지 않음)",

    // widget string (assets/js/widgets-t1-5.js)
    "At least two planes are strictly parallel and distinct": "적어도 두 평면이 서로 평행하고 다름",

    // widget string (assets/js/widgets-t1-5.js)
    "Three parallel distinct planes with no common intersection": "공통 교점 없이 평행하게 놓인 서로 다른 세 평면",

  }
});
