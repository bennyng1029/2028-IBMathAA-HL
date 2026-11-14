/* t1-5.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-5.q', {
  questions: {

    // ── t1-5-q001 · mcq · foundation · SL · SL 1.6 · 2 marks
    "t1-5-q001": {
      // EN: To prove that <span class="chem">x^2 - 8x + 21 &gt;= 5</span> for all <span class="chem">x \in \mathbb{R}</span>, which completed-square form directly establishes the result?
      stem: "모든 <span class=\"chem\">x \\in \\mathbb{R}</span>에 대하여 <span class=\"chem\">x^2 - 8x + 21 &gt;= 5</span>임을 증명할 때, 이를 직접적으로 보여 주는 완전제곱식 형태는 어느 것인가요?",
      options: [
        // EN: <span class="chem">(x - 4)^2 + 5</span>, and since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x \in \mathbb{R}</span>, the expression is <span class="chem">&gt;= 5</span>.
        "<span class=\"chem\">(x - 4)^2 + 5</span>이고, 모든 <span class=\"chem\">x \\in \\mathbb{R}</span>에 대해 <span class=\"chem\">(x - 4)^2 &gt;= 0</span>이므로 식은 <span class=\"chem\">&gt;= 5</span>이다.",
        // EN: <span class="chem">(x - 4)^2 + 21</span>, and since <span class="chem">(x - 4)^2 &gt;= 0</span>, the expression is <span class="chem">&gt;= 21 &gt;= 5</span>.
        "<span class=\"chem\">(x - 4)^2 + 21</span>이고, <span class=\"chem\">(x - 4)^2 &gt;= 0</span>이므로 식은 <span class=\"chem\">&gt;= 21 &gt;= 5</span>이다.",
        // EN: <span class="chem">(x - 8)^2 - 43</span>, which has minimum value <span class="chem">5</span>.
        "<span class=\"chem\">(x - 8)^2 - 43</span>이고, 최솟값이 <span class=\"chem\">5</span>이다.",
        // EN: Substitute <span class="chem">x = 0, 1, 2, 3, 4</span> and observe that every output is at least <span class="chem">5</span>.
        "<span class=\"chem\">x = 0, 1, 2, 3, 4</span>를 대입해 모든 결괏값이 <span class=\"chem\">5</span> 이상임을 확인한다.",
      ],
      hints: [
        // EN: Complete the square on <span class="chem">x^2 - 8x + 21</span> by halving the coefficient of <span class="chem">x</span>.
        "<span class=\"chem\">x</span>의 계수를 반으로 나누어 <span class=\"chem\">x^2 - 8x + 21</span>을 완전제곱식으로 고치세요.",
        // EN: <span class="chem">x^2 - 8x + 21 = (x - 4)^2 - 16 + 21 = (x - 4)^2 + 5</span>.
        "<span class=\"chem\">x^2 - 8x + 21 = (x - 4)^2 - 16 + 21 = (x - 4)^2 + 5</span>.",
      ],
      // EN: <p>Completing the square gives <span class="chem">x^2 - 8x + 21 == (x - 4)^2 + 5</span>. Since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x \in \mathbb{R}</span>, we have <span class="chem">(x - 4)^2 + 5 &gt;= 5</span>.</p>
      solution: "<p>완전제곱식으로 변형하면 <span class=\"chem\">x^2 - 8x + 21 == (x - 4)^2 + 5</span>예요. 모든 <span class=\"chem\">x \\in \\mathbb{R}</span>에 대해 <span class=\"chem\">(x - 4)^2 &gt;= 0</span>이므로 <span class=\"chem\">(x - 4)^2 + 5 &gt;= 5</span>가 성립해요.</p>",
      misconception: {
        // EN (option B): When completing the square on x² − 8x + 21, you must subtract (−4)² = 16: (x − 4)² − 16 + 21 = (x − 4)² + 5.
        "1": "x² − 8x + 21을 완전제곱식으로 만들 때는 (−4)² = 16을 빼주어야 해요: (x − 4)² − 16 + 21 = (x − 4)² + 5.",
        // EN (option C): Half of the coefficient of x is −8/2 = −4, not −8.
        "2": "x의 계수의 절반은 −8이 아니라 −8/2 = −4예요.",
        // EN (option D): Testing a finite list of numerical values never constitutes a deductive proof for all real numbers x ∈ ℝ.
        "3": "유한한 몇 개의 숫자를 대입해 확인하는 것은 모든 실수 x ∈ ℝ에 대한 연역적 증명이 아니에요.",
      },
    },

    // ── t1-5-q002 · numeric · foundation · SL · SL 1.6 · 3 marks
    "t1-5-q002": {
      // EN: The sum of the squares of any three consecutive integers <span class="chem">(n - 1)^2 + n^2 + (n + 1)^2</span> can be written in the form <span class="chem">A n^2 + B</span>, where <span class="chem">A, B \in \mathbb{Z}</span>. Find the value of <span class="chem">B</span>.
      stem: "연속하는 임의의 세 정수의 제곱의 합 <span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2</span>은 <span class=\"chem\">A n^2 + B</span> (<span class=\"chem\">A, B \\in \\mathbb{Z}</span>) 꼴로 나타낼 수 있어요. <span class=\"chem\">B</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: Expand <span class="chem">(n - 1)^2 = n^2 - 2n + 1</span> and <span class="chem">(n + 1)^2 = n^2 + 2n + 1</span>.
        "<span class=\"chem\">(n - 1)^2 = n^2 - 2n + 1</span>과 <span class=\"chem\">(n + 1)^2 = n^2 + 2n + 1</span>을 전개하세요.",
        // EN: Add all three terms: the <span class="chem">-2n</span> and <span class="chem">+2n</span> cancel, leaving <span class="chem">3n^2 + 2</span>.
        "세 식을 모두 더하면 <span class=\"chem\">-2n</span>과 <span class=\"chem\">+2n</span>이 소거되어 <span class=\"chem\">3n^2 + 2</span>만 남아요.",
      ],
      // EN: <p><span class="chem">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>. Thus <span class="chem">A = 3</span> and <span class="chem">B = 2</span>.</p>
      solution: "<p><span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>예요. 따라서 <span class=\"chem\">A = 3</span>이고 <span class=\"chem\">B = 2</span>예요.</p>",
    },

    // ── t1-5-q003 · order · exam · SL · SL 1.6 · 3 marks
    "t1-5-q003": {
      // EN: Arrange the steps in logical <span class="chem">LHS -&gt; RHS</span> order to prove the algebraic identity <span class="chem">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span> for <span class="chem">n \in \mathbb{Z}^+</span>.
      stem: "<span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 항등식 <span class=\"chem\">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span>을 증명하는 단계를 논리적인 <span class=\"chem\">LHS -&gt; RHS</span> 순서로 배열하시오.",
      options: [
        // EN: Start with the left-hand side: <span class="chem">LHS = 1 / (n(n + 1)) + 1 / ((n + 1)(n + 2))</span>.
        "좌변에서 시작한다: <span class=\"chem\">LHS = 1 / (n(n + 1)) + 1 / ((n + 1)(n + 2))</span>.",
        // EN: Rewrite over the common denominator <span class="chem">n(n + 1)(n + 2)</span>: <span class="chem">= ((n + 2) + n) / (n(n + 1)(n + 2))</span>.
        "공통분모 <span class=\"chem\">n(n + 1)(n + 2)</span>로 통분한다: <span class=\"chem\">= ((n + 2) + n) / (n(n + 1)(n + 2))</span>.",
        // EN: Collect like terms in the numerator and factor out 2: <span class="chem">= (2n + 2) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2))</span>.
        "분자의 동류항을 정리하고 2로 묶어 낸다: <span class=\"chem\">= (2n + 2) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2))</span>.",
        // EN: Cancel the non-zero common factor <span class="chem">(n + 1)</span> to obtain <span class="chem">2 / (n(n + 2)) = RHS</span>.
        "0이 아닌 공통인수 <span class=\"chem\">(n + 1)</span>을 약분하여 <span class=\"chem\">2 / (n(n + 2)) = RHS</span>를 얻는다.",
      ],
      hints: [
        // EN: In a direct proof of an identity, always state <span class="chem">LHS</span> first rather than assuming <span class="chem">LHS = RHS</span>.
        "항등식의 직접 증명에서는 <span class=\"chem\">LHS = RHS</span>라고 가정하지 말고 항상 <span class=\"chem\">LHS</span>부터 시작하세요.",
        // EN: Put the two fractions over a common denominator, factor the numerator as <span class="chem">2(n + 1)</span>, and cancel <span class="chem">(n + 1)</span>.
        "두 분수를 통분한 뒤 분자를 <span class=\"chem\">2(n + 1)</span>로 인수분해하고 <span class=\"chem\">(n + 1)</span>을 약분하세요.",
      ],
      // EN: <p><span class="chem">LHS = ((n + 2) + n) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2)) = 2 / (n(n + 2)) = RHS</span>.</p>
      solution: "<p><span class=\"chem\">LHS = ((n + 2) + n) / (n(n + 1)(n + 2)) = 2(n + 1) / (n(n + 1)(n + 2)) = 2 / (n(n + 2)) = RHS</span>.</p>",
    },

    // ── t1-5-q004 · short · exam · SL · SL 1.6 · 4 marks
    "t1-5-q004": {
      // EN: Prove algebraically that the product of any two odd integers subtracted from the square of an even integer is always an odd integer. [4 marks]
      stem: "짝수의 제곱에서 임의의 두 홀수의 곱을 뺀 값은 항상 홀수임을 대수적으로 증명하시오 (Prove). [4 marks]",
      hints: [
        // EN: Be careful to use <strong>different letters</strong> (<span class="chem">2a + 1, 2b + 1, 2c</span>) because the question says "any two odd integers" and "an even integer" (not necessarily related to the same <span class="chem">n</span>!).
        "문제에서 “임의의 두 홀수”와 “짝수”라고 했으므로(같은 <span class=\"chem\">n</span>과 관련될 필요가 없어요!) 반드시 <strong>서로 다른 문자</strong>(<span class=\"chem\">2a + 1, 2b + 1, 2c</span>)를 써야 해요.",
        // EN: Expand <span class="chem">(2c)^2 - (2a + 1)(2b + 1)</span> and rewrite it in the form <span class="chem">2k + 1</span> (or <span class="chem">2k - 1</span>).
        "<span class=\"chem\">(2c)^2 - (2a + 1)(2b + 1)</span>을 전개한 뒤 <span class=\"chem\">2k + 1</span> (또는 <span class=\"chem\">2k - 1</span>) 꼴로 고쳐 쓰세요.",
      ],
      // EN: <p>Using the same letter <span class="chem">n</span> for all three numbers (for example <span class="chem">2n + 1, 2n + 1, 2n</span>) only proves a special case in which the numbers are related. Using distinct <span class="chem">a, b, c \in \mathbb{Z}</span> gives <span class="chem">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>, which is odd.</p>
      solution: "<p>세 수에 모두 같은 문자 <span class=\"chem\">n</span>을 쓰면 (예: <span class=\"chem\">2n + 1, 2n + 1, 2n</span>) 수들이 서로 관련된 특별한 경우만 증명하게 돼요. 서로 다른 <span class=\"chem\">a, b, c \\in \\mathbb{Z}</span>를 사용하면 <span class=\"chem\">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>이 되어 홀수임이 증명돼요.</p>",
      // EN: <p>Let the two odd integers be <span class="chem">2a + 1</span> and <span class="chem">2b + 1</span>, and the even integer be <span class="chem">2c</span>, where <span class="chem">a, b, c \in \mathbb{Z}</span>.<br><span class="chem">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>.<br>Since <span class="chem">k = 2c^2 - 2ab - a - b - 1 \in \mathbb{Z}</span>, the expression is of the form <span class="chem">2k + 1</span>, which is always an odd integer.</p>
      answer: "<p><span class=\"chem\">a, b, c \\in \\mathbb{Z}</span>에 대하여 두 홀수를 <span class=\"chem\">2a + 1</span>, <span class=\"chem\">2b + 1</span>이라 하고 짝수를 <span class=\"chem\">2c</span>라 하자.<br><span class=\"chem\">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>.<br><span class=\"chem\">k = 2c^2 - 2ab - a - b - 1 \\in \\mathbb{Z}</span>이므로 이 식은 <span class=\"chem\">2k + 1</span> 꼴이 되어 항상 홀수이다.</p>",
      markscheme: [
        // EN: M1: Represents two general odd integers using distinct variables (e.g. 2a + 1 and 2b + 1) and an even integer (2c) for a, b, c ∈ ℤ.
        "M1: 서로 다른 변수(예: 2a + 1, 2b + 1)로 임의의 두 홀수를, (2c)로 짝수를 나타냄 (a, b, c ∈ ℤ).",
        // EN: A1: Correctly expands (2c)² − (2a + 1)(2b + 1) = 4c² − 4ab − 2a − 2b − 1.
        "A1: (2c)² − (2a + 1)(2b + 1) = 4c² − 4ab − 2a − 2b − 1을 정확히 전개함.",
        // EN: M1: Factors into the form 2(integer) − 1 or 2(integer) + 1.
        "M1: 2(정수) − 1 또는 2(정수) + 1 꼴로 묶어 냄.",
        // EN: R1: Concludes that since 2c² − 2ab − a − b − 1 ∈ ℤ, the result is an odd integer.
        "R1: 2c² − 2ab − a − b − 1 ∈ ℤ이므로 결과가 홀수임을 결론지음.",
      ],
    },

    // ── t1-5-q005 · mcq · foundation · AHL · AHL 1.15 · 2 marks
    "t1-5-q005": {
      // EN: In a proof by mathematical induction for <span class="chem">n \in \mathbb{Z}^+</span>, which wording of the inductive hypothesis earns full IB reasoning credit?
      stem: "<span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대한 수학적 귀납법 증명에서, IB 추론 점수(R1)를 온전히 받을 수 있는 귀납 가정의 표현은 어느 것인가요?",
      options: [
        // EN: “Assume <span class="chem">P(k)</span> is true for some <span class="chem">k \in \mathbb{Z}^+</span>.”
        "“어떤 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(k)</span>가 참이라고 가정하자.”",
        // EN: “Assume <span class="chem">P(k)</span> is true for all <span class="chem">k \in \mathbb{Z}^+</span>.”
        "“모든 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(k)</span>가 참이라고 가정하자.”",
        // EN: “Suppose <span class="chem">P(n)</span> is true for <span class="chem">n = k + 1</span>.”
        "“<span class=\"chem\">n = k + 1</span>일 때 <span class=\"chem\">P(n)</span>이 참이라고 가정하자.”",
        // EN: “Since <span class="chem">P(1)</span> and <span class="chem">P(2)</span> are true, <span class="chem">P(k)</span> is true.”
        "“<span class=\"chem\">P(1)</span>과 <span class=\"chem\">P(2)</span>가 참이므로 <span class=\"chem\">P(k)</span>도 참이다.”",
      ],
      hints: [
        // EN: Remember the domino analogy: you only assume that one particular domino <span class="chem">k</span> falls, and show it knocks over <span class="chem">k + 1</span>.
        "도미노 비유를 떠올리세요: 특정한 하나의 도미노 <span class=\"chem\">k</span>가 쓰러진다고만 가정하고, 그것이 <span class=\"chem\">k + 1</span>을 쓰러뜨림을 보이는 거예요.",
        // EN: Distinguish carefully between "for some <span class="chem">k \in \mathbb{Z}^+</span>" and "for all <span class="chem">k \in \mathbb{Z}^+</span>".
        "“어떤(for some) <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여”와 “모든(for all) <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여”를 정확히 구분하세요.",
      ],
      // EN: <p>IB markschemes require the inductive hypothesis to be stated for <strong>some</strong> (or a particular) positive integer <span class="chem">k \in \mathbb{Z}^+</span>, never for all <span class="chem">k</span>.</p>
      solution: "<p>IB 채점 기준에서는 귀납 가정을 절대 모든 <span class=\"chem\">k</span>가 아니라 <strong>어떤</strong>(또는 특정한) 양의 정수 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대해 서술하도록 요구해요.</p>",
      misconception: {
        // EN (option B): Assuming P(k) is true for ALL k ∈ ℤ⁺ assumes the very conclusion you are trying to prove, so on IB markschemes it loses the M1 for the inductive hypothesis and, with it, the final R1 mark.
        "1": "모든 k ∈ ℤ⁺에 대해 P(k)가 참이라고 가정하면 증명하려는 결론 자체를 가정하는 꼴이 되어 IB 채점에서 귀납 가정의 M1 점수를 잃고, 그에 따라 마지막 R1 점수도 잃게 돼요.",
        // EN (option C): P(k + 1) is what you must deduce from P(k), not what you assume.
        "2": "P(k + 1)은 가정하는 것이 아니라 P(k)로부터 이끌어 내야 하는 결론이에요.",
        // EN (option D): Checking P(1) and P(2) only verifies two base cases; it does not establish P(k).
        "3": "P(1)과 P(2)를 확인하는 것은 초기 두 경우만 검증한 것일 뿐 P(k)를 성립시키지 못해요.",
      },
    },

    // ── t1-5-q006 · mcq · foundation · AHL · AHL 1.15 · 2 marks
    "t1-5-q006": {
      // EN: Consider the false statement: “For all real numbers <span class="chem">a, b \in \mathbb{R}</span>, if <span class="chem">a &lt; b</span>, then <span class="chem">a^2 &lt; b^2</span>.” Which pair <span class="chem">(a, b)</span> is a valid counterexample?
      stem: "거짓인 명제 “모든 실수 <span class=\"chem\">a, b \\in \\mathbb{R}</span>에 대하여 <span class=\"chem\">a &lt; b</span>이면 <span class=\"chem\">a^2 &lt; b^2</span>이다”를 생각하자. 올바른 반례가 되는 순서쌍 <span class=\"chem\">(a, b)</span>는 어느 것인가요?",
      options: [
        // EN: <span class="chem">a = -3, b = 1</span>
        "<span class=\"chem\">a = -3, b = 1</span>",
        // EN: <span class="chem">a = 1, b = 3</span>
        "<span class=\"chem\">a = 1, b = 3</span>",
        // EN: <span class="chem">a = 3, b = -1</span>
        "<span class=\"chem\">a = 3, b = -1</span>",
        // EN: <span class="chem">a = 0, b = 2</span>
        "<span class=\"chem\">a = 0, b = 2</span>",
      ],
      hints: [
        // EN: A counterexample must make the hypothesis <span class="chem">a &lt; b</span> <strong>true</strong> and the conclusion <span class="chem">a^2 &lt; b^2</span> <strong>false</strong>.
        "반례는 가정 <span class=\"chem\">a &lt; b</span>를 <strong>참</strong>으로, 결론 <span class=\"chem\">a^2 &lt; b^2</span>를 <strong>거짓</strong>으로 만들어야 해요.",
        // EN: Choose a negative number <span class="chem">a</span> with a larger absolute value than <span class="chem">b</span>.
        "<span class=\"chem\">b</span>보다 절댓값이 더 큰 음수 <span class=\"chem\">a</span>를 고르세요.",
      ],
      // EN: <p>With <span class="chem">a = -3</span> and <span class="chem">b = 1</span>, the hypothesis <span class="chem">-3 &lt; 1</span> is true, but <span class="chem">a^2 = 9</span> and <span class="chem">b^2 = 1</span> so <span class="chem">a^2 &lt; b^2</span> is false.</p>
      solution: "<p><span class=\"chem\">a = -3</span>, <span class=\"chem\">b = 1</span>일 때 가정 <span class=\"chem\">-3 &lt; 1</span>은 참이지만 <span class=\"chem\">a^2 = 9</span>, <span class=\"chem\">b^2 = 1</span>이므로 <span class=\"chem\">a^2 &lt; b^2</span>은 거짓이에요.</p>",
      misconception: {
        // EN (option B): For a = 1, b = 3, both the hypothesis (1 < 3) and the conclusion (1 < 9) are true, so it does not disprove the statement.
        "1": "a = 1, b = 3에서는 가정(1 < 3)과 결론(1 < 9)이 모두 참이므로 명제를 반증하지 못해요.",
        // EN (option C): A counterexample must satisfy the hypothesis a < b; here 3 < −1 is false.
        "2": "반례는 반드시 가정 a < b를 만족해야 하는데, 여기서는 3 < −1이 거짓이에요.",
        // EN (option D): For a = 0, b = 2, 0 < 4 holds, so this is a supporting example, not a counterexample.
        "3": "a = 0, b = 2에서는 0 < 4가 성립하므로 반례가 아니라 명제가 참인 예시예요.",
      },
    },

    // ── t1-5-q007 · numeric · exam · AHL · AHL 1.15 · 2 marks
    "t1-5-q007": {
      // EN: In a proof by mathematical induction that <span class="chem">Sigma_{r=1}^n r(r!) = (n + 1)! - 1</span> for <span class="chem">n \in \mathbb{Z}^+</span>, the inductive step for <span class="chem">n = k + 1</span> combines the inductive hypothesis with the <span class="chem">(k + 1)</span>-th term:<br><span class="chem">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>.<br>Find the integer value of <span class="chem">A</span>.
      stem: "<span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">Sigma_{r=1}^n r(r!) = (n + 1)! - 1</span>임을 수학적 귀납법으로 증명할 때, <span class=\"chem\">n = k + 1</span>의 귀납 단계에서는 귀납 가정과 제<span class=\"chem\">(k + 1)</span>항을 합쳐 다음과 같이 정리해요:<br><span class=\"chem\">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>.<br>정수 <span class=\"chem\">A</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: Factor <span class="chem">(k + 1)!</span> out of the two terms <span class="chem">1 · (k + 1)! + (k + 1)(k + 1)!</span>.
        "두 항 <span class=\"chem\">1 · (k + 1)! + (k + 1)(k + 1)!</span>에서 <span class=\"chem\">(k + 1)!</span>을 묶어 내세요.",
        // EN: <span class="chem">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>.
        "<span class=\"chem\">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>.",
      ],
      // EN: <p>Factoring <span class="chem">(k + 1)!</span> gives <span class="chem">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span>, so <span class="chem">A = 2</span>.</p>
      solution: "<p><span class=\"chem\">(k + 1)!</span>로 묶어 내면 <span class=\"chem\">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span>이 되므로 <span class=\"chem\">A = 2</span>예요.</p>",
    },

    // ── t1-5-q008 · numeric · exam · AHL · AHL 1.15 · 2 marks
    "t1-5-q008": {
      // EN: We wish to prove by mathematical induction that <span class="chem">f(n) = 7^n + 2</span> is divisible by <span class="chem">3</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. Assuming <span class="chem">7^k + 2 = 3A</span> (<span class="chem">A \in \mathbb{Z}</span>), we write <span class="chem">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span>. Find the integer value of <span class="chem">B</span>.
      stem: "모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">f(n) = 7^n + 2</span>가 <span class=\"chem\">3</span>으로 나누어떨어짐을 수학적 귀납법으로 증명하려고 해요. <span class=\"chem\">7^k + 2 = 3A</span> (<span class=\"chem\">A \\in \\mathbb{Z}</span>)라고 가정하면 <span class=\"chem\">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span>로 쓸 수 있어요. 정수 <span class=\"chem\">B</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: Expand <span class="chem">7(3A - 2) + 2 = 21A - 14 + 2 = 21A - 12</span>.
        "<span class=\"chem\">7(3A - 2) + 2 = 21A - 14 + 2 = 21A - 12</span>를 전개하세요.",
        // EN: Factor out <span class="chem">3</span> from <span class="chem">21A - 12</span>.
        "<span class=\"chem\">21A - 12</span>에서 <span class=\"chem\">3</span>을 묶어 내세요.",
      ],
      // EN: <p><span class="chem">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - 4)</span>, so <span class="chem">B = 4</span>.</p>
      solution: "<p><span class=\"chem\">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - 4)</span>이므로 <span class=\"chem\">B = 4</span>예요.</p>",
    },

    // ── t1-5-q009 · order · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q009": {
      // EN: Arrange the steps in logical order to prove by contradiction that <span class="chem">log_3 7</span> is an irrational number.
      stem: "<span class=\"chem\">log_3 7</span>이 무리수임을 귀류법으로 증명하는 단계를 논리적인 순서로 배열하시오.",
      options: [
        // EN: Assume, for a contradiction, that <span class="chem">log_3 7</span> is rational, so <span class="chem">log_3 7 = p / q</span> for some positive integers <span class="chem">p, q \in \mathbb{Z}^+</span>.
        "모순을 이끌어 내기 위해 <span class=\"chem\">log_3 7</span>이 유리수라고 가정하면, 어떤 양의 정수 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">log_3 7 = p / q</span>이다.",
        // EN: Rewrite the logarithmic equation in exponential form as <span class="chem">3^{p/q} = 7</span>, and raise both sides to the power <span class="chem">q</span> to obtain <span class="chem">3^p = 7^q</span>.
        "로그방정식을 지수 꼴 <span class=\"chem\">3^{p/q} = 7</span>로 고쳐 쓰고 양변을 <span class=\"chem\">q</span>제곱하여 <span class=\"chem\">3^p = 7^q</span>을 얻는다.",
        // EN: Observe that for all <span class="chem">p, q \in \mathbb{Z}^+</span>, <span class="chem">3^p</span> is divisible by the prime <span class="chem">3</span>, whereas <span class="chem">7^q</span> has only <span class="chem">7</span> as a prime factor and is not divisible by <span class="chem">3</span>.
        "모든 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">3^p</span>는 소수 <span class=\"chem\">3</span>으로 나누어떨어지지만, <span class=\"chem\">7^q</span>은 소인수가 <span class=\"chem\">7</span>뿐이므로 <span class=\"chem\">3</span>으로 나누어떨어지지 않는다.",
        // EN: This is a contradiction by the fundamental uniqueness of prime factorizations; hence <span class="chem">log_3 7</span> must be irrational.
        "이는 소인수분해의 유일성에 모순이므로 <span class=\"chem\">log_3 7</span>은 반드시 무리수여야 한다.",
      ],
      hints: [
        // EN: Begin by assuming the negation: <span class="chem">log_3 7 = p / q</span> with <span class="chem">p, q \in \mathbb{Z}^+</span>.
        "먼저 명제의 부정을 가정하세요: <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">log_3 7 = p / q</span>.",
        // EN: Convert to integer powers <span class="chem">3^p = 7^q</span> and compare prime factors.
        "정수 거듭제곱 <span class=\"chem\">3^p = 7^q</span>으로 바꾼 뒤 소인수를 비교하세요.",
      ],
      // EN: <p>Assume <span class="chem">log_3 7 = p/q</span> (<span class="chem">p, q \in \mathbb{Z}^+</span>), deduce <span class="chem">3^p = 7^q</span>, note that <span class="chem">3</span> divides the LHS but not the RHS, and conclude by contradiction that <span class="chem">log_3 7</span> is irrational.</p>
      solution: "<p><span class=\"chem\">log_3 7 = p/q</span> (<span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>)로 가정하고 <span class=\"chem\">3^p = 7^q</span>을 유도한 뒤, <span class=\"chem\">3</span>이 좌변은 나누지만 우변은 나누지 못하므로 모순에 의해 <span class=\"chem\">log_3 7</span>이 무리수임을 결론짓는 순서예요.</p>",
    },

    // ── t1-5-q010 · mcq · foundation · AHL · AHL 1.16 · 2 marks
    "t1-5-q010": {
      // EN: After Gaussian elimination on a <span class="chem">3 × 3</span> linear system in <span class="chem">x, y, z</span>, the third row of the augmented matrix is <span class="mono">[ 0 0 k−4 | k²−16 ]</span>. For which value of <span class="chem">k</span> does the system have <strong>infinitely many solutions</strong>?
      stem: "<span class=\"chem\">x, y, z</span>에 대한 <span class=\"chem\">3 × 3</span> 연립일차방정식에 가우스 소거법을 적용한 결과, 첨가행렬의 세 번째 행이 <span class=\"mono\">[ 0 0 k−4 | k²−16 ]</span>이 되었어요. 이 연립방정식이 <strong>무수히 많은 해</strong>를 갖도록 하는 <span class=\"chem\">k</span>의 값은 무엇인가요?",
      options: [
        // EN: <span class="chem">k = 4</span>
        "<span class=\"chem\">k = 4</span>",
        // EN: <span class="chem">k = -4</span>
        "<span class=\"chem\">k = -4</span>",
        // EN: <span class="chem">k = 4</span> or <span class="chem">k = -4</span>
        "<span class=\"chem\">k = 4</span> 또는 <span class=\"chem\">k = -4</span>",
        // EN: All real values of <span class="chem">k != 4</span>
        "<span class=\"chem\">k != 4</span>인 모든 실수",
      ],
      hints: [
        // EN: Infinitely many solutions require Row 3 to become <span class="chem">0z = 0</span>.
        "무수히 많은 해를 가지려면 3행이 <span class=\"chem\">0z = 0</span>이 되어야 해요.",
        // EN: Set both <span class="chem">k - 4 = 0</span> AND <span class="chem">k^2 - 16 = 0</span>.
        "<span class=\"chem\">k - 4 = 0</span>이면서 동시에 <span class=\"chem\">k^2 - 16 = 0</span>이 되도록 놓으세요.",
      ],
      // EN: <p>For infinitely many solutions, we need both the coefficient of <span class="chem">z</span> and the RHS to be zero: <span class="chem">k - 4 = 0</span> and <span class="chem">k^2 - 16 = 0</span>, which gives <span class="chem">k = 4</span>.</p>
      solution: "<p>무수히 많은 해를 가지려면 <span class=\"chem\">z</span>의 계수와 우변이 모두 0이어야 해요: <span class=\"chem\">k - 4 = 0</span>이고 <span class=\"chem\">k^2 - 16 = 0</span>이므로 <span class=\"chem\">k = 4</span>예요.</p>",
      misconception: {
        // EN (option B): At k = −4, the right-hand side is 0 but the z-coefficient is −4 − 4 = −8 ≠ 0, giving the unique value z = 0 / (−8) = 0!
        "1": "k = −4일 때는 우변이 0이지만 z의 계수가 −4 − 4 = −8 ≠ 0이므로 유일한 값 z = 0 / (−8) = 0이 나와요!",
        // EN (option C): Only k = 4 makes the z-coefficient k − 4 equal to 0; at k = −4 the system has a unique solution with z = 0.
        "2": "z의 계수 k − 4가 0이 되는 값은 k = 4뿐이에요. k = −4일 때는 z = 0인 유일한 해를 가져요.",
        // EN (option D): k ≠ 4 is the condition for a unique solution, not infinitely many solutions.
        "3": "k ≠ 4는 무수히 많은 해가 아니라 유일한 해를 가질 조건이에요.",
      },
    },

    // ── t1-5-q011 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q011": {
      // EN: Find the unique solution to the <span class="chem">3 × 3</span> linear system:<br><span class="chem">x + y + z = 6</span><br><span class="chem">2x - y + z = 3</span><br><span class="chem">x + 2y - z = 2</span>.<br>Find the value of <span class="chem">z</span>.
      stem: "다음 <span class=\"chem\">3 × 3</span> 연립일차방정식의 유일한 해를 구하시오 (Find):<br><span class=\"chem\">x + y + z = 6</span><br><span class=\"chem\">2x - y + z = 3</span><br><span class=\"chem\">x + 2y - z = 2</span>.<br><span class=\"chem\">z</span>의 값을 구하시오.",
      hints: [
        // EN: Add Equation 1 and Equation 3 to eliminate <span class="chem">z</span> immediately: <span class="chem">2x + 3y = 8</span>. Also subtract Equation 1 from Equation 2 to get <span class="chem">x - 2y = -3</span>.
        "1번 식과 3번 식을 더하면 바로 <span class=\"chem\">z</span>가 소거돼요: <span class=\"chem\">2x + 3y = 8</span>. 또한 2번 식에서 1번 식을 빼면 <span class=\"chem\">x - 2y = -3</span>을 얻어요.",
        // EN: Solving <span class="chem">2x + 3y = 8</span> and <span class="chem">x - 2y = -3</span> gives <span class="chem">x = 1, y = 2</span>, and substituting into Equation 1 gives <span class="chem">z = 3</span>.
        "<span class=\"chem\">2x + 3y = 8</span>과 <span class=\"chem\">x - 2y = -3</span>을 연립해 풀면 <span class=\"chem\">x = 1, y = 2</span>가 나오고, 1번 식에 대입하면 <span class=\"chem\">z = 3</span>이에요.",
      ],
      // EN: <p>Eliminating <span class="chem">z</span> gives <span class="chem">x - 2y = -3</span> and <span class="chem">2x + 3y = 8</span>, so <span class="chem">7y = 14 =&gt; y = 2, x = 1, z = 3</span>. Check in Equation 3: <span class="chem">1 + 4 - 3 = 2</span>. Therefore <span class="chem">z = 3</span>.</p>
      solution: "<p><span class=\"chem\">z</span>를 소거하면 <span class=\"chem\">x - 2y = -3</span>과 <span class=\"chem\">2x + 3y = 8</span>이 되어 <span class=\"chem\">7y = 14 =&gt; y = 2, x = 1, z = 3</span>이에요. 방정식 3에 대입해 확인하면 <span class=\"chem\">1 + 4 - 3 = 2</span>예요. 따라서 <span class=\"chem\">z = 3</span>이에요.</p>",
    },

    // ── t1-5-q012 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q012": {
      // EN: Find the value of the real constant <span class="chem">k</span> for which the following system of equations is <strong>inconsistent</strong> (has no solution):<br><span class="chem">x + 2y + z = 4</span><br><span class="chem">2x + 5y + 3z = 9</span><br><span class="chem">3x + 7y + kz = 10</span>.
      stem: "다음 연립방정식이 <strong>불능</strong>(해가 없음)이 되도록 하는 실수 상수 <span class=\"chem\">k</span>의 값을 구하시오 (Find):<br><span class=\"chem\">x + 2y + z = 4</span><br><span class=\"chem\">2x + 5y + 3z = 9</span><br><span class=\"chem\">3x + 7y + kz = 10</span>.",
      hints: [
        // EN: Use Gaussian elimination: <span class="chem">R_2 -&gt; R_2 - 2R_1</span> gives <span class="chem">y + z = 1</span>, and <span class="chem">R_3 -&gt; R_3 - 3R_1</span> gives <span class="chem">y + (k - 3)z = -2</span>.
        "가우스 소거법을 사용하세요: <span class=\"chem\">R_2 -&gt; R_2 - 2R_1</span>에서 <span class=\"chem\">y + z = 1</span>을 얻고, <span class=\"chem\">R_3 -&gt; R_3 - 3R_1</span>에서 <span class=\"chem\">y + (k - 3)z = -2</span>를 얻어요.",
        // EN: Now compute <span class="chem">R_3 - R_2</span>: <span class="chem">(k - 4)z = -3</span>. For no solution, the coefficient of <span class="chem">z</span> must be <span class="chem">0</span>.
        "이제 <span class=\"chem\">R_3 - R_2</span>를 계산하면 <span class=\"chem\">(k - 4)z = -3</span>이에요. 해가 없으려면 <span class=\"chem\">z</span>의 계수가 <span class=\"chem\">0</span>이어야 해요.",
      ],
      // EN: <p>Row reduction gives <span class="chem">R_2 - 2R_1: y + z = 1</span> and <span class="chem">R_3 - 3R_1: y + (k - 3)z = -2</span>. Subtracting gives <span class="chem">(k - 4)z = -3</span>, which has no solution when <span class="chem">k = 4</span>.</p>
      solution: "<p>행 연산을 하면 <span class=\"chem\">R_2 - 2R_1: y + z = 1</span>, <span class=\"chem\">R_3 - 3R_1: y + (k - 3)z = -2</span>예요. 두 식을 빼면 <span class=\"chem\">(k - 4)z = -3</span>이 되므로 <span class=\"chem\">k = 4</span>일 때 해가 없어요.</p>",
    },

    // ── t1-5-q013 · multi · exam · AHL · AHL 1.16 · 3 marks
    "t1-5-q013": {
      // EN: A <span class="chem">3 × 3</span> linear system reduces under Gaussian elimination to:<br><span class="mono">[ 1 1 1 | 3 ]</span><br><span class="mono">[ 0 1 −2 | 1 ]</span><br><span class="mono">[ 0 0 a²−1 | a−1 ]</span>.<br>Select <strong>all</strong> correct statements.
      stem: "어떤 <span class=\"chem\">3 × 3</span> 연립일차방정식을 가우스 소거법으로 정리한 결과가 다음과 같아요:<br><span class=\"mono\">[ 1 1 1 | 3 ]</span><br><span class=\"mono\">[ 0 1 −2 | 1 ]</span><br><span class=\"mono\">[ 0 0 a²−1 | a−1 ]</span>.<br>옳은 설명을 <strong>모두</strong> 고르시오.",
      options: [
        // EN: When <span class="chem">a = 1</span>, the system has infinitely many solutions lying on a line in 3D space.
        "<span class=\"chem\">a = 1</span>일 때, 이 연립방정식은 3차원 공간의 한 직선 위에 놓이는 무수히 많은 해를 갖는다.",
        // EN: When <span class="chem">a = -1</span>, the system has no solution.
        "<span class=\"chem\">a = -1</span>일 때, 이 연립방정식은 해가 없다.",
        // EN: When <span class="chem">a = 1</span>, setting <span class="chem">z = lambda</span> gives <span class="chem">y = 1 + 2 lambda</span> and <span class="chem">x = 2 - 3 lambda</span>.
        "<span class=\"chem\">a = 1</span>일 때, <span class=\"chem\">z = lambda</span>로 두면 <span class=\"chem\">y = 1 + 2 lambda</span>, <span class=\"chem\">x = 2 - 3 lambda</span>이다.",
        // EN: When <span class="chem">a = 0</span>, the system has no solution.
        "<span class=\"chem\">a = 0</span>일 때, 이 연립방정식은 해가 없다.",
      ],
      hints: [
        // EN: Factor the third row as <span class="chem">(a - 1)(a + 1)z = a - 1</span>.
        "3행을 <span class=\"chem\">(a - 1)(a + 1)z = a - 1</span>로 인수분해하세요.",
        // EN: Check <span class="chem">a = 1</span> (<span class="chem">0z = 0</span>), <span class="chem">a = -1</span> (<span class="chem">0z = -2</span>), and <span class="chem">a = 0</span> (<span class="chem">-z = -1</span>).
        "<span class=\"chem\">a = 1</span> (<span class=\"chem\">0z = 0</span>), <span class=\"chem\">a = -1</span> (<span class=\"chem\">0z = -2</span>), <span class=\"chem\">a = 0</span> (<span class=\"chem\">-z = -1</span>)을 각각 확인하세요.",
      ],
      // EN: <p>Row 3 is <span class="chem">(a - 1)(a + 1)z = a - 1</span>. For <span class="chem">a = 1</span>, <span class="chem">0z = 0</span> (infinite solutions with <span class="chem">z = lambda, y = 1 + 2lambda, x = 3 - (1 + 2lambda) - lambda = 2 - 3lambda</span>). For <span class="chem">a = -1</span>, <span class="chem">0z = -2</span> (no solution).</p>
      solution: "<p>3행은 <span class=\"chem\">(a - 1)(a + 1)z = a - 1</span>이에요. <span class=\"chem\">a = 1</span>이면 <span class=\"chem\">0z = 0</span> (무수히 많은 해: <span class=\"chem\">z = lambda, y = 1 + 2lambda, x = 3 - (1 + 2lambda) - lambda = 2 - 3lambda</span>)이고, <span class=\"chem\">a = -1</span>이면 <span class=\"chem\">0z = -2</span> (해 없음)이에요.</p>",
      misconception: {
        // EN (option D): When a = 0, Row 3 becomes −1z = −1 ⇒ z = 1, which gives a unique solution (x, y, z) = (−1, 3, 1), not no solution.
        "3": "a = 0일 때는 3행이 −1z = −1 ⇒ z = 1이 되어 해가 없는 것이 아니라 유일한 해 (x, y, z) = (−1, 3, 1)을 가져요.",
      },
    },

    // ── t1-5-q014 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q014": {
      // EN: Find the smallest positive integer <span class="chem">n_0</span> such that the inequality <span class="chem">2^n &gt; 2n + 1</span> holds for all integers <span class="chem">n &gt;= n_0</span>.
      stem: "모든 정수 <span class=\"chem\">n &gt;= n_0</span>에 대하여 부등식 <span class=\"chem\">2^n &gt; 2n + 1</span>이 성립하도록 하는 가장 작은 양의 정수 <span class=\"chem\">n_0</span>를 구하시오 (Find).",
      hints: [
        // EN: Test <span class="chem">n = 1, 2, 3, 4</span> in <span class="chem">2^n &gt; 2n + 1</span>.
        "<span class=\"chem\">2^n &gt; 2n + 1</span>에 <span class=\"chem\">n = 1, 2, 3, 4</span>를 대입해 보세요.",
        // EN: For <span class="chem">n = 1</span>: <span class="chem">2 &gt; 3</span> (false). For <span class="chem">n = 2</span>: <span class="chem">4 &gt; 5</span> (false). For <span class="chem">n = 3</span>: <span class="chem">8 &gt; 7</span> (true).
        "<span class=\"chem\">n = 1</span>이면 <span class=\"chem\">2 &gt; 3</span> (거짓), <span class=\"chem\">n = 2</span>이면 <span class=\"chem\">4 &gt; 5</span> (거짓), <span class=\"chem\">n = 3</span>이면 <span class=\"chem\">8 &gt; 7</span> (참)이에요.",
      ],
      // EN: <p>Testing small positive integers: <span class="chem">n = 1</span> gives <span class="chem">2 &gt; 3</span> (false); <span class="chem">n = 2</span> gives <span class="chem">4 &gt; 5</span> (false); <span class="chem">n = 3</span> gives <span class="chem">8 &gt; 7</span> (true). By induction, it holds for all <span class="chem">n &gt;= 3</span>, so the base case is <span class="chem">n_0 = 3</span>.</p>
      solution: "<p>작은 양의 정수를 대입해 보면 <span class=\"chem\">n = 1</span>일 때 <span class=\"chem\">2 &gt; 3</span> (거짓), <span class=\"chem\">n = 2</span>일 때 <span class=\"chem\">4 &gt; 5</span> (거짓), <span class=\"chem\">n = 3</span>일 때 <span class=\"chem\">8 &gt; 7</span> (참)이에요. 귀납법에 의해 모든 <span class=\"chem\">n &gt;= 3</span>에서 성립하므로 시작값은 <span class=\"chem\">n_0 = 3</span>이에요.</p>",
    },

    // ── t1-5-q015 · numeric · exam · AHL · AHL 1.15 · 5 marks
    "t1-5-q015": {
      // EN: Let <span class="chem">f(x) = x e^{2x}</span>. It can be proved by mathematical induction that the <span class="chem">n</span>-th derivative is <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. Evaluate <span class="chem">f^{(5)}(0)</span>.
      stem: "<span class=\"chem\">f(x) = x e^{2x}</span>라 하자. 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">n</span>계도함수가 <span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>임을 수학적 귀납법으로 증명할 수 있어요. <span class=\"chem\">f^{(5)}(0)</span>의 값을 구하시오.",
      hints: [
        // EN: Substitute <span class="chem">n = 5</span> and <span class="chem">x = 0</span> into <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>.
        "<span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>에 <span class=\"chem\">n = 5</span>와 <span class=\"chem\">x = 0</span>을 대입하세요.",
        // EN: <span class="chem">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>.
        "<span class=\"chem\">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>.",
      ],
      // EN: <p>Substituting <span class="chem">n = 5</span> and <span class="chem">x = 0</span> gives <span class="chem">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span>.</p>
      solution: "<p><span class=\"chem\">n = 5</span>와 <span class=\"chem\">x = 0</span>을 대입하면 <span class=\"chem\">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span>이에요.</p>",
    },

    // ── t1-5-q016 · mcq · exam · AHL · AHL 1.15 · 2 marks
    "t1-5-q016": {
      // EN: Suppose a student attempts to prove by contradiction that <span class="chem">sqrt(4)</span> is irrational by writing <span class="chem">sqrt(4) = a / b</span> with <span class="chem">gcd(a, b) = 1</span>, squaring to get <span class="chem">a^2 = 4b^2</span>, and claiming: “Since <span class="chem">4</span> divides <span class="chem">a^2</span>, <span class="chem">4</span> must divide <span class="chem">a</span>.” Why does this step fail?
      stem: "어떤 학생이 <span class=\"chem\">sqrt(4)</span>가 무리수임을 귀류법으로 증명하려고 <span class=\"chem\">gcd(a, b) = 1</span>인 <span class=\"chem\">sqrt(4) = a / b</span>로 놓고 제곱해 <span class=\"chem\">a^2 = 4b^2</span>을 얻은 뒤, “<span class=\"chem\">4</span>가 <span class=\"chem\">a^2</span>을 나누므로 <span class=\"chem\">4</span>는 <span class=\"chem\">a</span>를 나누어야 한다”고 주장했어요. 이 단계가 틀린 이유는 무엇인가요?",
      options: [
        // EN: Because <span class="chem">4</span> is composite (not prime): <span class="chem">4</span> divides <span class="chem">a^2</span> only implies <span class="chem">2</span> divides <span class="chem">a</span> (for example, <span class="chem">a = 2</span> has <span class="chem">4 | 2^2</span> but <span class="chem">4 \nmid 2</span>).
        "<span class=\"chem\">4</span>는 소수가 아닌 합성수이기 때문이에요: <span class=\"chem\">4</span>가 <span class=\"chem\">a^2</span>을 나눈다고 해서 <span class=\"chem\">2</span>가 <span class=\"chem\">a</span>를 나눌 뿐이에요 (예: <span class=\"chem\">a = 2</span>이면 <span class=\"chem\">4 | 2^2</span>이지만 <span class=\"chem\">4 \\nmid 2</span>예요).",
        // EN: Because <span class="chem">a</span> and <span class="chem">b</span> cannot be chosen with <span class="chem">gcd(a, b) = 1</span> for rational numbers.
        "유리수에 대해서는 <span class=\"chem\">gcd(a, b) = 1</span>이 되도록 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>를 잡을 수 없기 때문이에요.",
        // EN: Because squaring both sides of an equation is not allowed in a proof by contradiction.
        "귀류법에서는 등식의 양변을 제곱하는 것이 허용되지 않기 때문이에요.",
        // EN: Because <span class="chem">4b^2</span> is an odd integer whenever <span class="chem">b</span> is odd.
        "<span class=\"chem\">b</span>가 홀수일 때마다 <span class=\"chem\">4b^2</span>이 홀수가 되기 때문이에요.",
      ],
      hints: [
        // EN: Compare <span class="chem">p | a^2 =&gt; p | a</span> when <span class="chem">p</span> is prime versus when <span class="chem">p = 4</span> is a square composite number.
        "<span class=\"chem\">p</span>가 소수일 때와 <span class=\"chem\">p = 4</span>처럼 제곱수(합성수)일 때 <span class=\"chem\">p | a^2 =&gt; p | a</span>가 성립하는지 비교해 보세요.",
        // EN: Test <span class="chem">a = 2, b = 1</span>: does <span class="chem">4</span> divide <span class="chem">a^2 = 4</span>? Does <span class="chem">4</span> divide <span class="chem">a = 2</span>?
        "<span class=\"chem\">a = 2, b = 1</span>을 대입해 보세요: <span class=\"chem\">4</span>가 <span class=\"chem\">a^2 = 4</span>를 나누나요? <span class=\"chem\">4</span>가 <span class=\"chem\">a = 2</span>를 나누나요?",
      ],
      // EN: <p>Euclid's lemma (<span class="chem">p | a^2 =&gt; p | a</span>) requires <span class="chem">p</span> to be prime (or square-free). Since <span class="chem">4 = 2^2</span> is composite, <span class="chem">4 | a^2</span> only implies <span class="chem">2 | a</span> (specifically <span class="chem">a = 2, b = 1</span> satisfies <span class="chem">a^2 = 4b^2</span> with <span class="chem">gcd(2, 1) = 1</span>).</p>
      solution: "<p>유클리드 보조정리(<span class=\"chem\">p | a^2 =&gt; p | a</span>)는 <span class=\"chem\">p</span>가 소수(또는 제곱인수가 없는 수)일 때만 성립해요. <span class=\"chem\">4 = 2^2</span>은 합성수이므로 <span class=\"chem\">4 | a^2</span>은 <span class=\"chem\">2 | a</span>만 보장해요 (실제로 <span class=\"chem\">a = 2, b = 1</span>은 <span class=\"chem\">gcd(2, 1) = 1</span>이면서 <span class=\"chem\">a^2 = 4b^2</span>을 만족해요).</p>",
      misconception: {
        // EN (option B): Every rational number can be written in lowest terms a/b with gcd(a, b) = 1 (for √4 = 2, a = 2 and b = 1).
        "1": "모든 유리수는 gcd(a, b) = 1인 기약분수 a/b로 나타낼 수 있어요 (√4 = 2에서는 a = 2, b = 1).",
        // EN (option C): Squaring both sides is a valid implication (A = B ⇒ A² = B²).
        "2": "양변을 제곱하는 것은 정당한 추론(A = B ⇒ A² = B²)이에요.",
        // EN (option D): 4b² is always a multiple of 4, so it is always even.
        "3": "4b²은 항상 4의 배수이므로 언제나 짝수예요.",
      },
    },

    // ── t1-5-q017 · short · exam · AHL · AHL 1.15 · 7 marks
    "t1-5-q017": {
      // EN: Prove by mathematical induction that for all <span class="chem">n \in \mathbb{Z}^+</span>,<br><span class="chem">Sigma_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span>. [7 marks]
      stem: "모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 다음 식이 성립함을 수학적 귀납법으로 증명하시오 (Prove).<br><span class=\"chem\">Sigma_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span>. [7 marks]",
      hints: [
        // EN: After substituting the inductive hypothesis for <span class="chem">n = k</span>, add the <span class="chem">(k + 1)</span>-th term <span class="chem">(k + 1)2^k</span>.
        "<span class=\"chem\">n = k</span>일 때의 귀납 가정을 대입한 뒤, 제<span class=\"chem\">(k + 1)</span>항인 <span class=\"chem\">(k + 1)2^k</span>을 더하세요.",
        // EN: Factor out <span class="chem">2^k</span> from <span class="chem">(k - 1)2^k + (k + 1)2^k</span> to get <span class="chem">2k · 2^k = k · 2^{k+1}</span>.
        "<span class=\"chem\">(k - 1)2^k + (k + 1)2^k</span>에서 <span class=\"chem\">2^k</span>을 묶어 내면 <span class=\"chem\">2k · 2^k = k · 2^{k+1}</span>을 얻어요.",
      ],
      // EN: <p>Factoring <span class="chem">2^k</span> in the inductive step gives <span class="chem">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span>, matching the <span class="chem">n = k + 1</span> formula.</p>
      solution: "<p>귀납 단계에서 <span class=\"chem\">2^k</span>을 묶어 내면 <span class=\"chem\">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span>이 되어 <span class=\"chem\">n = k + 1</span>일 때의 공식과 일치해요.</p>",
      // EN: <p><strong>Base case (<span class="chem">n = 1</span>):</strong> <span class="chem">LHS = 1 · 2^0 = 1</span>; <span class="chem">RHS = (1 - 1)2^1 + 1 = 1</span>. Since <span class="chem">LHS = RHS</span>, <span class="chem">P(1)</span> is true.<br><strong>Inductive hypothesis:</strong> Assume <span class="chem">P(k)</span> is true for some <span class="chem">k \in \mathbb{Z}^+</span>: <span class="chem">Sigma_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>.<br><strong>Inductive step (<span class="chem">n = k + 1</span>):</strong><br><span class="chem">Sigma_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>.<br><strong>Conclusion:</strong> Since <span class="chem">P(1)</span> is true and <span class="chem">P(k) =&gt; P(k + 1)</span>, by the principle of mathematical induction <span class="chem">P(n)</span> is true for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      answer: "<p><strong>초기 단계 (<span class=\"chem\">n = 1</span>):</strong> <span class=\"chem\">LHS = 1 · 2^0 = 1</span>; <span class=\"chem\">RHS = (1 - 1)2^1 + 1 = 1</span>. <span class=\"chem\">LHS = RHS</span>이므로 <span class=\"chem\">P(1)</span>은 참이다.<br><strong>귀납 가정:</strong> 어떤 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(k)</span>가 참이라고 가정하자: <span class=\"chem\">Sigma_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>.<br><strong>귀납 단계 (<span class=\"chem\">n = k + 1</span>):</strong><br><span class=\"chem\">Sigma_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>.<br><strong>결론:</strong> <span class=\"chem\">P(1)</span>이 참이고 <span class=\"chem\">P(k) =&gt; P(k + 1)</span>이므로, 수학적 귀납법의 원리에 의해 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(n)</span>은 참이다.</p>",
      markscheme: [
        // EN: A1: Base case n = 1: evaluates LHS = 1 and RHS = (0)2¹ + 1 = 1 and states P(1) is true.
        "A1: 초기 단계 n = 1: LHS = 1, RHS = (0)2¹ + 1 = 1을 계산하고 P(1)이 참임을 서술함.",
        // EN: M1: States inductive hypothesis: assumes P(k) is true for some k ∈ ℤ⁺.
        "M1: 귀납 가정 서술: 어떤 k ∈ ℤ⁺에 대해 P(k)가 참이라고 가정함.",
        // EN: M1: Considers n = k + 1 by adding the (k + 1)-th term (k + 1)2<sup>k</sup> to the assumed sum.
        "M1: n = k + 1인 경우를 생각하여 가정한 합에 제(k + 1)항 (k + 1)2<sup>k</sup>을 더함.",
        // EN: A1: Correctly writes the n = k + 1 sum as ((k − 1)2<sup>k</sup> + 1) + (k + 1)2<sup>k</sup>.
        "A1: n = k + 1일 때의 합을 ((k − 1)2<sup>k</sup> + 1) + (k + 1)2<sup>k</sup>로 올바르게 씀.",
        // EN: A1: Factors out 2<sup>k</sup> to get ((k − 1) + (k + 1))2<sup>k</sup> + 1 = 2k · 2<sup>k</sup> + 1.
        "A1: 2<sup>k</sup>으로 묶어 ((k − 1) + (k + 1))2<sup>k</sup> + 1 = 2k · 2<sup>k</sup> + 1을 얻음.",
        // EN: A1: Simplifies 2k · 2<sup>k</sup> + 1 to k · 2<sup>k+1</sup> + 1 = ((k + 1) − 1)2<sup>k+1</sup> + 1.
        "A1: 2k · 2<sup>k</sup> + 1을 k · 2<sup>k+1</sup> + 1 = ((k + 1) − 1)2<sup>k+1</sup> + 1로 정리함.",
        // EN: R1: States final induction conclusion sentence (awarded only if previous M marks earned).
        "R1: 최종 수학적 귀납법 결론 문장을 서술함 (앞선 M 점수를 획득한 경우에만 부여).",
      ],
    },

    // ── t1-5-q018 · short · exam · AHL · AHL 1.16 · 7 marks
    "t1-5-q018": {
      // EN: Consider the system of linear equations:<br><span class="chem">x - y + 2z = 1</span><br><span class="chem">2x - y + 5z = 4</span><br><span class="chem">3x - 2y + (k^2 - 2)z = k + 2</span>, where <span class="chem">k \in \mathbb{R}</span>.<br>(a) Reduce the system to row-echelon form and find the value of <span class="chem">k</span> for which the system has no solution, and the value of <span class="chem">k</span> for which it has infinitely many solutions. [4 marks]<br>(b) Find the general solution in parametric form when the system has infinitely many solutions. [3 marks]
      stem: "다음 연립일차방정식을 생각하자:<br><span class=\"chem\">x - y + 2z = 1</span><br><span class=\"chem\">2x - y + 5z = 4</span><br><span class=\"chem\">3x - 2y + (k^2 - 2)z = k + 2</span> (<span class=\"chem\">k \\in \\mathbb{R}</span>).<br>(a) 이 연립방정식을 행사다리꼴 형태로 정리하고, 해가 없는 <span class=\"chem\">k</span>의 값과 무수히 많은 해를 갖는 <span class=\"chem\">k</span>의 값을 각각 구하시오 (Find). [4 marks]<br>(b) 무수히 많은 해를 가질 때 일반해를 매개변수 형태로 구하시오 (Find). [3 marks]",
      hints: [
        // EN: Apply <span class="chem">R_2 - 2R_1</span> to get <span class="chem">y + z = 2</span>, and <span class="chem">R_3 - 3R_1</span> to get <span class="chem">y + (k^2 - 8)z = k - 1</span>.
        "<span class=\"chem\">R_2 - 2R_1</span>을 적용해 <span class=\"chem\">y + z = 2</span>를 얻고, <span class=\"chem\">R_3 - 3R_1</span>을 적용해 <span class=\"chem\">y + (k^2 - 8)z = k - 1</span>을 얻으세요.",
        // EN: Subtract the new Row 2 from the new Row 3 to get <span class="chem">(k^2 - 9)z = k - 3</span>.
        "새 3행에서 새 2행을 빼서 <span class=\"chem\">(k^2 - 9)z = k - 3</span>을 얻으세요.",
      ],
      // EN: <p>(a) <span class="chem">R_2 - 2R_1 =&gt; y + z = 2</span>; <span class="chem">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>; <span class="chem">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span>. Thus <span class="chem">k = -3</span> gives no solution and <span class="chem">k = 3</span> gives infinite solutions.<br>(b) With <span class="chem">z = lambda</span>, <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 1 + y - 2z = 3 - 3lambda</span>.</p>
      solution: "<p>(a) <span class=\"chem\">R_2 - 2R_1 =&gt; y + z = 2</span>; <span class=\"chem\">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>; <span class=\"chem\">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span>. 따라서 <span class=\"chem\">k = -3</span>일 때 해가 없고, <span class=\"chem\">k = 3</span>일 때 무수히 많은 해를 가져요.<br>(b) <span class=\"chem\">z = lambda</span>로 두면 <span class=\"chem\">y = 2 - lambda</span>이고 <span class=\"chem\">x = 1 + y - 2z = 3 - 3lambda</span>예요.</p>",
      // EN: <p>(a) Row reduction gives <span class="chem">y + z = 2</span> and <span class="chem">(k^2 - 9)z = k - 3</span>. The system has <strong>no solution</strong> when <span class="chem">k = -3</span> and <strong>infinitely many solutions</strong> when <span class="chem">k = 3</span>.<br>(b) Letting <span class="chem">z = lambda</span> (<span class="chem">lambda \in \mathbb{R}</span>) gives <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 3 - 3lambda</span>.</p>
      answer: "<p>(a) 행 연산으로 정리하면 <span class=\"chem\">y + z = 2</span>와 <span class=\"chem\">(k^2 - 9)z = k - 3</span>을 얻는다. <span class=\"chem\">k = -3</span>일 때 <strong>해가 없고</strong>, <span class=\"chem\">k = 3</span>일 때 <strong>무수히 많은 해</strong>를 갖는다.<br>(b) <span class=\"chem\">z = lambda</span> (<span class=\"chem\">lambda \\in \\mathbb{R}</span>)라 하면 <span class=\"chem\">y = 2 - lambda</span>, <span class=\"chem\">x = 3 - 3lambda</span>이다.</p>",
      markscheme: [
        // EN: M1: Eliminates x using R₂ → R₂ − 2R₁ and R₃ → R₃ − 3R₁.
        "M1: R₂ → R₂ − 2R₁과 R₃ → R₃ − 3R₁을 이용해 x를 소거함.",
        // EN: A1: Obtains y + z = 2 and y + (k² − 8)z = k − 1.
        "A1: y + z = 2와 y + (k² − 8)z = k − 1을 얻음.",
        // EN: A1: Eliminates y using R₃ → R₃ − R₂ to obtain (k² − 9)z = k − 3.
        "A1: R₃ → R₃ − R₂를 이용해 y를 소거하여 (k² − 9)z = k − 3을 얻음.",
        // EN: A1: Identifies k = −3 for no solution and k = 3 for infinitely many solutions.
        "A1: 해 없음은 k = −3, 무수히 많은 해는 k = 3임을 구함.",
        // EN: M1: Sets z = λ (λ ∈ ℝ) and back-substitutes into Row 2 to find y = 2 − λ.
        "M1: z = λ (λ ∈ ℝ)로 두고 2행에 역으로 대입해 y = 2 − λ를 구함.",
        // EN: A1: Back-substitutes into Row 1 to find x = 1 + (2 − λ) − 2λ = 3 − 3λ.
        "A1: 1행에 역으로 대입해 x = 1 + (2 − λ) − 2λ = 3 − 3λ를 구함.",
        // EN: A1: Writes the complete parametric solution (x, y, z) = (3 − 3λ, 2 − λ, λ) for λ ∈ ℝ.
        "A1: 완전한 매개변수 해 (x, y, z) = (3 − 3λ, 2 − λ, λ) (λ ∈ ℝ)를 작성함.",
      ],
    },

    // ── t1-5-q019 · numeric · exam · AHL · AHL 1.16 · 3 marks
    "t1-5-q019": {
      // EN: Use your GDC (system solver or row reduction) to solve the system of equations:<br><span class="chem">2x + 3y - z = 4.7</span><br><span class="chem">x - 2y + 5z = -1.3</span><br><span class="chem">3x + y + 2z = 6.1</span><br>Find the value of <span class="chem">x</span>, correct to 3 significant figures.
      stem: "GDC(연립방정식 풀이 기능 또는 행 연산)를 이용하여 다음 연립방정식을 푸시오:<br><span class=\"chem\">2x + 3y - z = 4.7</span><br><span class=\"chem\">x - 2y + 5z = -1.3</span><br><span class=\"chem\">3x + y + 2z = 6.1</span><br><span class=\"chem\">x</span>의 값을 유효숫자 3자리까지 구하시오 (Find).",
      hints: [
        // EN: Enter the augmented matrix with rows <span class="chem">[2, 3, -1 | 4.7]</span>, <span class="chem">[1, -2, 5 | -1.3]</span> and <span class="chem">[3, 1, 2 | 6.1]</span>, then use rref (or the simultaneous equation solver).
        "행이 <span class=\"chem\">[2, 3, -1 | 4.7]</span>, <span class=\"chem\">[1, -2, 5 | -1.3]</span>, <span class=\"chem\">[3, 1, 2 | 6.1]</span>인 첨가행렬을 입력한 다음 rref(또는 연립방정식 풀이 기능)를 사용해요.",
        // EN: The GDC gives <span class="chem">z = -1.35</span> and <span class="chem">y ≈ -1.0786</span>. Check your values by substituting them into one of the equations.
        "GDC에서 <span class=\"chem\">z = -1.35</span>와 <span class=\"chem\">y ≈ -1.0786</span>를 얻어요. 값을 방정식 하나에 대입해 확인하세요.",
      ],
      // EN: <p>The GDC gives the unique solution <span class="chem">x = 461/140 ≈ 3.29</span>, <span class="chem">y = -151/140 ≈ -1.08</span>, <span class="chem">z = -1.35</span>, so the three planes meet at one point. Check: <span class="chem">2(3.2929) + 3(-1.0786) - (-1.35) = 4.70</span>. So <span class="chem">x = 3.29</span> (3 s.f.).</p>
      solution: "<p>GDC에서 유일한 해 <span class=\"chem\">x = 461/140 ≈ 3.29</span>, <span class=\"chem\">y = -151/140 ≈ -1.08</span>, <span class=\"chem\">z = -1.35</span>를 얻으므로 세 평면은 한 점에서 만나요. 검산: <span class=\"chem\">2(3.2929) + 3(-1.0786) - (-1.35) = 4.70</span>. 따라서 <span class=\"chem\">x = 3.29</span> (유효숫자 3자리)예요.</p>",
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't1-5.q', {
  questions: {

    // ── t1-5-q020 · mcq · foundation · SL · SL 1.6 · 1 mark
    "t1-5-q020": {
      // EN: The symbol <span class="chem">==</span> (“is identically equal to”) may only be used for a statement that is true for <strong>every</strong> value of the variable. Which of the following statements is an identity?
      stem: "기호 <span class=\"chem\">==</span>(“항등적으로 같다”)는 변수의 <strong>모든</strong> 값에 대해 참인 식에만 쓸 수 있어요. 다음 중 항등식은 어느 것인가요?",
      options: [
        // EN: <span class="chem">(x - 3)^2 = x^2 - 6x + 9</span>
        "<span class=\"chem\">(x - 3)^2 = x^2 - 6x + 9</span>",
        // EN: <span class="chem">x^2 - 6x + 9 = 0</span>
        "<span class=\"chem\">x^2 - 6x + 9 = 0</span>",
        // EN: <span class="chem">(x - 3)^2 = x^2 + 9</span>
        "<span class=\"chem\">(x - 3)^2 = x^2 + 9</span>",
        // EN: <span class="chem">2(x - 3) = x - 3</span>
        "<span class=\"chem\">2(x - 3) = x - 3</span>",
      ],
      hints: [
        // EN: Test each statement with two different values, for example <span class="chem">x = 0</span> and <span class="chem">x = 1</span>. An identity never fails.
        "각 식을 서로 다른 두 값, 예를 들어 <span class=\"chem\">x = 0</span>과 <span class=\"chem\">x = 1</span>로 확인해 보세요. 항등식은 절대 거짓이 되지 않아요.",
        // EN: Expand <span class="chem">(x - 3)^2</span> fully: <span class="chem">(x - 3)(x - 3) = x^2 - 3x - 3x + 9</span>.
        "<span class=\"chem\">(x - 3)^2</span>을 완전히 전개하세요: <span class=\"chem\">(x - 3)(x - 3) = x^2 - 3x - 3x + 9</span>.",
      ],
      // EN: <p>Expanding gives <span class="chem">(x - 3)^2 = x^2 - 6x + 9</span> for every real <span class="chem">x</span>, so we may write <span class="chem">(x - 3)^2 == x^2 - 6x + 9</span>. The other three statements are equations that are true for at most one value of <span class="chem">x</span> (or are false).</p>
      solution: "<p>전개하면 모든 실수 <span class=\"chem\">x</span>에 대해 <span class=\"chem\">(x - 3)^2 = x^2 - 6x + 9</span>이므로 <span class=\"chem\">(x - 3)^2 == x^2 - 6x + 9</span>라고 쓸 수 있어요. 나머지 세 식은 참이 되는 <span class=\"chem\">x</span>의 값이 많아야 하나뿐인 방정식(또는 거짓인 식)이에요.</p>",
      misconception: {
        // EN (option B): This is an equation: it is true only when x = 3, so it is not an identity and must be written with =, not ≡.
        "1": "이것은 방정식이에요. x = 3일 때만 참이므로 항등식이 아니며, ≡가 아니라 =로 써야 해요.",
        // EN (option C): This statement is false for most x (try x = 1: 4 ≠ 10). Squaring a bracket gives the middle term −6x, so (x − 3)² ≢ x² + 9.
        "2": "이 식은 대부분의 x에서 거짓이에요(x = 1을 넣으면 4 ≠ 10). 괄호를 제곱하면 가운데 항 −6x가 생기므로 (x − 3)² ≢ x² + 9예요.",
        // EN (option D): This equation holds only for x = 3 (both sides are then 0). An identity must hold for every x.
        "3": "이 방정식은 x = 3일 때만 성립해요(이때 양변이 모두 0). 항등식은 모든 x에 대해 성립해야 해요.",
      },
    },

    // ── t1-5-q021 · short · challenge · SL · SL 1.6 · 5 marks
    "t1-5-q021": {
      // EN: A student notices that <span class="chem">1 × 2 × 3 × 4 + 1 = 25</span> and <span class="chem">2 × 3 × 4 × 5 + 1 = 121</span>. Prove that one more than the product of any four consecutive integers is always a perfect square. [5 marks]
      stem: "한 학생이 <span class=\"chem\">1 × 2 × 3 × 4 + 1 = 25</span>와 <span class=\"chem\">2 × 3 × 4 × 5 + 1 = 121</span>임을 발견했다. 연속하는 임의의 네 정수의 곱에 1을 더한 수는 항상 완전제곱수임을 증명하시오 (Prove). [5 marks]",
      hints: [
        // EN: Decode: “prove … always” means a general algebraic proof, not more examples. Write the four integers with one letter, and aim to show the expression equals (some integer)<sup>2</sup>.
        "해석: “항상 …임을 증명하라”는 예를 더 드는 것이 아니라 일반적인 대수적 증명을 뜻해요. 네 정수를 한 문자로 나타내고, 식이 (어떤 정수)<sup>2</sup>와 같음을 보이는 것을 목표로 하세요.",
        // EN: Multiply the outer pair and the inner pair: <span class="chem">n(n + 3) = n^2 + 3n</span> and <span class="chem">(n + 1)(n + 2) = n^2 + 3n + 2</span>.
        "바깥쪽 두 수와 안쪽 두 수를 각각 곱하세요: <span class=\"chem\">n(n + 3) = n^2 + 3n</span>, <span class=\"chem\">(n + 1)(n + 2) = n^2 + 3n + 2</span>.",
        // EN: Substitute <span class="chem">m = n^2 + 3n</span>: you then need to simplify <span class="chem">m(m + 2) + 1</span>.
        "<span class=\"chem\">m = n^2 + 3n</span>으로 치환하면 <span class=\"chem\">m(m + 2) + 1</span>만 정리하면 돼요.",
      ],
      // EN: <p><strong>Decode:</strong> the two numerical cases are only a pattern; the question wants a proof for every integer <span class="chem">n</span>. The hidden trick is to pair the factors so that the same quadratic <span class="chem">n^2 + 3n</span> appears twice.</p><p><span class="chem">n(n + 1)(n + 2)(n + 3) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>. With <span class="chem">m = n^2 + 3n</span> this is <span class="chem">m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>, the square of an integer. Check with <span class="chem">n = 1</span>: <span class="chem">(1 + 3 + 1)^2 = 25</span>.</p>
      solution: "<p><strong>해석:</strong> 두 개의 수치 예는 패턴일 뿐이고, 문제는 모든 정수 <span class=\"chem\">n</span>에 대한 증명을 요구해요. 숨은 요령은 같은 이차식 <span class=\"chem\">n^2 + 3n</span>이 두 번 나타나도록 인수를 짝짓는 거예요.</p><p><span class=\"chem\">n(n + 1)(n + 2)(n + 3) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>. <span class=\"chem\">m = n^2 + 3n</span>으로 두면 이 식은 <span class=\"chem\">m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>이 되어 정수의 제곱이에요. <span class=\"chem\">n = 1</span>로 확인: <span class=\"chem\">(1 + 3 + 1)^2 = 25</span>.</p>",
      // EN: <p>Let the integers be <span class="chem">n, n + 1, n + 2, n + 3</span> with <span class="chem">n \in \mathbb{Z}</span>. Pair the outer and inner factors:<br><span class="chem">n(n + 3) · (n + 1)(n + 2) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>.<br>Let <span class="chem">m = n^2 + 3n</span>. Then the expression is <span class="chem">m(m + 2) + 1 = m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>.<br>Since <span class="chem">n^2 + 3n + 1 \in \mathbb{Z}</span>, the expression is the square of an integer, i.e. a perfect square.</p>
      answer: "<p><span class=\"chem\">n \\in \\mathbb{Z}</span>일 때 네 정수를 <span class=\"chem\">n, n + 1, n + 2, n + 3</span>이라 하자. 바깥쪽 인수와 안쪽 인수를 짝지으면:<br><span class=\"chem\">n(n + 3) · (n + 1)(n + 2) + 1 = (n^2 + 3n)(n^2 + 3n + 2) + 1</span>.<br><span class=\"chem\">m = n^2 + 3n</span>이라 하자. 그러면 이 식은 <span class=\"chem\">m(m + 2) + 1 = m^2 + 2m + 1 = (m + 1)^2 = (n^2 + 3n + 1)^2</span>이다.<br><span class=\"chem\">n^2 + 3n + 1 \\in \\mathbb{Z}</span>이므로 이 식은 정수의 제곱, 즉 완전제곱수이다.</p>",
      markscheme: [
        // EN: M1: Represents four general consecutive integers as n, n + 1, n + 2, n + 3 with n ∈ ℤ.
        "M1: 연속하는 일반적인 네 정수를 n, n + 1, n + 2, n + 3 (n ∈ ℤ)으로 나타냄.",
        // EN: M1: Pairs the factors as n(n + 3) and (n + 1)(n + 2) (or expands fully to n⁴ + 6n³ + 11n² + 6n + 1).
        "M1: 인수를 n(n + 3)과 (n + 1)(n + 2)로 짝지음 (또는 n⁴ + 6n³ + 11n² + 6n + 1로 완전히 전개함).",
        // EN: A1: Obtains (n² + 3n)(n² + 3n + 2) + 1.
        "A1: (n² + 3n)(n² + 3n + 2) + 1을 얻음.",
        // EN: A1: Shows this equals (n² + 3n + 1)².
        "A1: 이것이 (n² + 3n + 1)²과 같음을 보임.",
        // EN: R1: States that n² + 3n + 1 is an integer, so the expression is a perfect square.
        "R1: n² + 3n + 1이 정수이므로 이 식이 완전제곱수임을 서술함.",
      ],
    },

    // ── t1-5-q022 · numeric · exam · SL · SL 1.6 · 3 marks
    "t1-5-q022": {
      // EN: It is given that <span class="chem">x^3 + px^2 + qx + 6 == (x - 1)(x + 2)(x + r)</span>, where <span class="chem">p, q, r</span> are constants. Find the value of <span class="chem">q</span>.
      stem: "<span class=\"chem\">p, q, r</span>가 상수일 때 <span class=\"chem\">x^3 + px^2 + qx + 6 == (x - 1)(x + 2)(x + r)</span>가 주어져 있다. <span class=\"chem\">q</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: The symbol <span class="chem">==</span> means the two sides are equal for every <span class="chem">x</span>, so the coefficients of each power of <span class="chem">x</span> must match.
        "기호 <span class=\"chem\">==</span>는 양변이 모든 <span class=\"chem\">x</span>에 대해 같다는 뜻이므로, <span class=\"chem\">x</span>의 각 거듭제곱의 계수가 일치해야 해요.",
        // EN: Expand the right-hand side: <span class="chem">(x - 1)(x + 2) = x^2 + x - 2</span>, then multiply by <span class="chem">(x + r)</span>.
        "우변을 전개하세요: <span class=\"chem\">(x - 1)(x + 2) = x^2 + x - 2</span>를 구한 뒤 <span class=\"chem\">(x + r)</span>를 곱해요.",
        // EN: Compare the constant terms first to find <span class="chem">r</span>, then compare the coefficients of <span class="chem">x</span>.
        "먼저 상수항을 비교해 <span class=\"chem\">r</span>를 구하고, 그다음 <span class=\"chem\">x</span>의 계수를 비교하세요.",
      ],
      // EN: <p><span class="chem">(x^2 + x - 2)(x + r) = x^3 + (r + 1)x^2 + (r - 2)x - 2r</span>.</p><p>Constant terms: <span class="chem">-2r = 6</span>, so <span class="chem">r = -3</span>. Coefficient of <span class="chem">x</span>: <span class="chem">q = r - 2 = -5</span>. (Also <span class="chem">p = r + 1 = -2</span>.)</p>
      solution: "<p><span class=\"chem\">(x^2 + x - 2)(x + r) = x^3 + (r + 1)x^2 + (r - 2)x - 2r</span>.</p><p>상수항: <span class=\"chem\">-2r = 6</span>이므로 <span class=\"chem\">r = -3</span>. <span class=\"chem\">x</span>의 계수: <span class=\"chem\">q = r - 2 = -5</span>. (또한 <span class=\"chem\">p = r + 1 = -2</span>.)</p>",
    },

    // ── t1-5-q023 · short · challenge · SL · SL 1.6 · 5 marks
    "t1-5-q023": {
      // EN: A puzzle website claims: “Pick any whole number, cube it, then subtract the number you started with. The answer can always be shared equally between six people.” Prove that the claim is true for every integer <span class="chem">n</span>. [5 marks]
      stem: "어느 퍼즐 웹사이트가 이렇게 주장한다: “아무 정수나 골라 세제곱한 다음, 처음 고른 수를 빼세요. 그 답은 항상 여섯 사람이 똑같이 나눠 가질 수 있습니다.” 이 주장이 모든 정수 <span class=\"chem\">n</span>에 대해 참임을 증명하시오 (Prove). [5 marks]",
      hints: [
        // EN: Decode: “shared equally between six people” means “divisible by 6”. You must prove <span class="chem">6 | (n^3 - n)</span> for every integer <span class="chem">n</span>, by a direct proof.
        "해석: “여섯 사람이 똑같이 나눠 가질 수 있다”는 “6으로 나누어떨어진다”는 뜻이에요. 모든 정수 <span class=\"chem\">n</span>에 대해 <span class=\"chem\">6 | (n^3 - n)</span>임을 직접 증명으로 보여야 해요.",
        // EN: Factorise <span class="chem">n^3 - n</span> completely. What do you notice about the three factors?
        "<span class=\"chem\">n^3 - n</span>을 완전히 인수분해하세요. 세 인수에서 무엇을 알 수 있나요?",
        // EN: To show divisibility by <span class="chem">6</span>, show divisibility by <span class="chem">2</span> and by <span class="chem">3</span> separately.
        "<span class=\"chem\">6</span>으로 나누어떨어짐을 보이려면 <span class=\"chem\">2</span>로 나누어떨어짐과 <span class=\"chem\">3</span>으로 나누어떨어짐을 따로 보이세요.",
      ],
      // EN: <p><strong>Decode:</strong> the story hides the statement “<span class="chem">n^3 - n</span> is a multiple of 6”. The disguised technique is factorising into consecutive integers.</p><p><span class="chem">n^3 - n = (n - 1)n(n + 1)</span>. Three consecutive integers contain an even number and a multiple of 3, so the product is divisible by <span class="chem">2 × 3 = 6</span> (2 and 3 are coprime).</p>
      solution: "<p><strong>해석:</strong> 이야기 속에는 “<span class=\"chem\">n^3 - n</span>은 6의 배수이다”라는 명제가 숨어 있어요. 숨은 기법은 연속하는 정수들의 곱으로 인수분해하는 거예요.</p><p><span class=\"chem\">n^3 - n = (n - 1)n(n + 1)</span>. 연속하는 세 정수 중에는 짝수와 3의 배수가 있으므로, 그 곱은 <span class=\"chem\">2 × 3 = 6</span>으로 나누어떨어져요 (2와 3은 서로소).</p>",
      // EN: <p>The claim is that <span class="chem">n^3 - n</span> is divisible by <span class="chem">6</span> for all <span class="chem">n \in \mathbb{Z}</span>.<br><span class="chem">n^3 - n = n(n^2 - 1) = (n - 1)n(n + 1)</span>, the product of three consecutive integers.<br>Among any two consecutive integers one is even, so the product is divisible by <span class="chem">2</span>.<br>Among any three consecutive integers one is a multiple of <span class="chem">3</span>, so the product is divisible by <span class="chem">3</span>.<br>Since <span class="chem">2</span> and <span class="chem">3</span> are coprime (distinct primes) and both divide the product, <span class="chem">6</span> divides <span class="chem">n^3 - n</span>.</p>
      answer: "<p>주장은 모든 <span class=\"chem\">n \\in \\mathbb{Z}</span>에 대해 <span class=\"chem\">n^3 - n</span>이 <span class=\"chem\">6</span>으로 나누어떨어진다는 것이다.<br><span class=\"chem\">n^3 - n = n(n^2 - 1) = (n - 1)n(n + 1)</span>은 연속하는 세 정수의 곱이다.<br>연속하는 임의의 두 정수 중 하나는 짝수이므로, 그 곱은 <span class=\"chem\">2</span>로 나누어떨어진다.<br>연속하는 임의의 세 정수 중 하나는 <span class=\"chem\">3</span>의 배수이므로, 그 곱은 <span class=\"chem\">3</span>으로 나누어떨어진다.<br><span class=\"chem\">2</span>와 <span class=\"chem\">3</span>은 서로소(서로 다른 소수)이고 둘 다 그 곱을 나누므로, <span class=\"chem\">6</span>은 <span class=\"chem\">n^3 - n</span>을 나눈다.</p>",
      markscheme: [
        // EN: M1: Translates the claim to “n³ − n is divisible by 6” and factorises n(n² − 1).
        "M1: 주장을 “n³ − n은 6으로 나누어떨어진다”로 바꾸고 n(n² − 1)로 인수분해함.",
        // EN: A1: Writes n³ − n = (n − 1)n(n + 1), a product of three consecutive integers.
        "A1: n³ − n = (n − 1)n(n + 1), 즉 연속하는 세 정수의 곱으로 나타냄.",
        // EN: R1: One of any two consecutive integers is even, so 2 divides the product.
        "R1: 연속하는 임의의 두 정수 중 하나는 짝수이므로 2가 그 곱을 나눔.",
        // EN: R1: One of any three consecutive integers is a multiple of 3, so 3 divides the product.
        "R1: 연속하는 임의의 세 정수 중 하나는 3의 배수이므로 3이 그 곱을 나눔.",
        // EN: R1: Since 2 and 3 are coprime and both divide n³ − n, 6 divides n³ − n.
        "R1: 2와 3은 서로소이고 둘 다 n³ − n을 나누므로 6이 n³ − n을 나눔.",
      ],
    },

    // ── t1-5-q024 · short · exam · AHL · AHL 1.15 · 6 marks
    "t1-5-q024": {
      // EN: Prove by mathematical induction that <span class="chem">11^n - 4^n</span> is divisible by <span class="chem">7</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [6 marks]
      stem: "모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">11^n - 4^n</span>이 <span class=\"chem\">7</span>로 나누어떨어짐을 수학적 귀납법으로 증명하시오 (Prove). [6 marks]",
      hints: [
        // EN: Write the assumption as <span class="chem">11^k = 7A + 4^k</span> so that you can replace <span class="chem">11^k</span> in <span class="chem">11^{k+1} = 11 · 11^k</span>.
        "가정을 <span class=\"chem\">11^k = 7A + 4^k</span>로 쓰면 <span class=\"chem\">11^{k+1} = 11 · 11^k</span>에서 <span class=\"chem\">11^k</span>를 바꿔 넣을 수 있어요.",
        // EN: After substituting, collect the <span class="chem">4^k</span> terms: <span class="chem">11 · 4^k - 4 · 4^k = 7 · 4^k</span>.
        "대입한 뒤 <span class=\"chem\">4^k</span> 항을 모으세요: <span class=\"chem\">11 · 4^k - 4 · 4^k = 7 · 4^k</span>.",
      ],
      // EN: <p><span class="chem">11^{k+1} - 4^{k+1} = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>. With the base case <span class="chem">11 - 4 = 7</span> and the standard conclusion sentence, the result holds for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      solution: "<p><span class=\"chem\">11^{k+1} - 4^{k+1} = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>. 초기 단계 <span class=\"chem\">11 - 4 = 7</span>과 표준 결론 문장을 더하면, 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대해 결과가 성립해요.</p>",
      // EN: <p><strong>Base case:</strong> for <span class="chem">n = 1</span>, <span class="chem">11 - 4 = 7</span>, which is divisible by 7, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">P(k)</span> is true for some <span class="chem">k \in \mathbb{Z}^+</span>, i.e. <span class="chem">11^k - 4^k = 7A</span> for some <span class="chem">A \in \mathbb{Z}</span>.<br><strong>Step:</strong> <span class="chem">11^{k+1} - 4^{k+1} = 11 · 11^k - 4 · 4^k = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>, which is divisible by 7 because <span class="chem">11A + 4^k \in \mathbb{Z}</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by the principle of mathematical induction <span class="chem">P(n)</span> is true for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      answer: "<p><strong>초기 단계:</strong> <span class=\"chem\">n = 1</span>일 때 <span class=\"chem\">11 - 4 = 7</span>이고 7로 나누어떨어지므로 <span class=\"chem\">P(1)</span>은 참이다.<br><strong>귀납 가정:</strong> 어떤 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(k)</span>가 참이라고 가정하자. 즉 어떤 <span class=\"chem\">A \\in \\mathbb{Z}</span>에 대하여 <span class=\"chem\">11^k - 4^k = 7A</span>이다.<br><strong>귀납 단계:</strong> <span class=\"chem\">11^{k+1} - 4^{k+1} = 11 · 11^k - 4 · 4^k = 11(7A + 4^k) - 4 · 4^k = 77A + 7 · 4^k = 7(11A + 4^k)</span>이고, <span class=\"chem\">11A + 4^k \\in \\mathbb{Z}</span>이므로 이는 7로 나누어떨어진다.<br><strong>결론:</strong> <span class=\"chem\">P(1)</span>이 참이고, <span class=\"chem\">P(k)</span>가 참이면 <span class=\"chem\">P(k + 1)</span>도 참이므로, 수학적 귀납법의 원리에 의해 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(n)</span>은 참이다.</p>",
      markscheme: [
        // EN: A1: n = 1: 11 − 4 = 7, divisible by 7, so P(1) is true.
        "A1: n = 1: 11 − 4 = 7은 7로 나누어떨어지므로 P(1)은 참.",
        // EN: M1: Assumes P(k) true for some k ∈ ℤ⁺: 11<sup>k</sup> − 4<sup>k</sup> = 7A, A ∈ ℤ.
        "M1: 어떤 k ∈ ℤ⁺에 대해 P(k)가 참이라고 가정함: 11<sup>k</sup> − 4<sup>k</sup> = 7A, A ∈ ℤ.",
        // EN: M1: Writes 11<sup>k+1</sup> − 4<sup>k+1</sup> = 11 · 11<sup>k</sup> − 4 · 4<sup>k</sup>.
        "M1: 11<sup>k+1</sup> − 4<sup>k+1</sup> = 11 · 11<sup>k</sup> − 4 · 4<sup>k</sup>로 씀.",
        // EN: M1: Substitutes 11<sup>k</sup> = 7A + 4<sup>k</sup> (or an equivalent use of the assumption).
        "M1: 11<sup>k</sup> = 7A + 4<sup>k</sup>를 대입함 (또는 이와 동등하게 가정을 이용함).",
        // EN: A1: Obtains 77A + 7 · 4<sup>k</sup> = 7(11A + 4<sup>k</sup>), a multiple of 7.
        "A1: 7의 배수인 77A + 7 · 4<sup>k</sup> = 7(11A + 4<sup>k</sup>)를 얻음.",
        // EN: R1: Induction conclusion sentence (only if the M marks above are earned).
        "R1: 수학적 귀납법 결론 문장 (앞선 M 점수를 획득한 경우에만 부여).",
      ],
    },

    // ── t1-5-q025 · short · exam · AHL · AHL 1.15, 1.14 · 7 marks
    "t1-5-q025": {
      // EN: Prove by mathematical induction that <span class="chem">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [7 marks]
      stem: "모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">(cos theta + i sin theta)^n = cos(n theta) + i sin(n theta)</span>임을 수학적 귀납법으로 증명하시오 (Prove). [7 marks]",
      hints: [
        // EN: This is De Moivre’s theorem (AHL 1.14). You need the compound angle identities (topic 3.2): <span class="chem">cos(A + B) = cos A cos B - sin A sin B</span> and <span class="chem">sin(A + B) = sin A cos B + cos A sin B</span>.
        "이것은 드무아브르 정리(AHL 1.14)예요. 삼각함수의 덧셈정리(주제 3.2)가 필요해요: <span class=\"chem\">cos(A + B) = cos A cos B - sin A sin B</span>, <span class=\"chem\">sin(A + B) = sin A cos B + cos A sin B</span>.",
        // EN: In the step, split off one factor: <span class="chem">z^{k+1} = z^k · z</span>, replace <span class="chem">z^k</span> by the assumption and multiply out, remembering <span class="chem">i^2 = -1</span>.
        "귀납 단계에서는 인수 하나를 떼어 내세요: <span class=\"chem\">z^{k+1} = z^k · z</span>. <span class=\"chem\">z^k</span>를 가정으로 바꾸고 전개하되, <span class=\"chem\">i^2 = -1</span>임을 잊지 마세요.",
      ],
      // EN: <p>Multiplying out <span class="chem">(cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span> gives real part <span class="chem">cos(k theta)cos theta - sin(k theta)sin theta = cos((k + 1)theta)</span> and imaginary part <span class="chem">sin(k theta)cos theta + cos(k theta)sin theta = sin((k + 1)theta)</span>. Together with the base case and the conclusion sentence this completes the proof.</p>
      solution: "<p><span class=\"chem\">(cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span>를 전개하면 실수부는 <span class=\"chem\">cos(k theta)cos theta - sin(k theta)sin theta = cos((k + 1)theta)</span>, 허수부는 <span class=\"chem\">sin(k theta)cos theta + cos(k theta)sin theta = sin((k + 1)theta)</span>예요. 초기 단계와 결론 문장을 함께 쓰면 증명이 완성돼요.</p>",
      // EN: <p><strong>Base case:</strong> for <span class="chem">n = 1</span>, LHS <span class="chem">= cos theta + i sin theta =</span> RHS, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span><br><span class="chem">= cos(k theta)cos theta - sin(k theta)sin theta + i(sin(k theta)cos theta + cos(k theta)sin theta)</span><br><span class="chem">= cos((k + 1)theta) + i sin((k + 1)theta)</span>, using the compound angle identities.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by mathematical induction the result holds for all <span class="chem">n \in \mathbb{Z}^+</span>.</p>
      answer: "<p><strong>초기 단계:</strong> <span class=\"chem\">n = 1</span>일 때 LHS <span class=\"chem\">= cos theta + i sin theta =</span> RHS이므로 <span class=\"chem\">P(1)</span>은 참이다.<br><strong>귀납 가정:</strong> 어떤 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">(cos theta + i sin theta)^k = cos(k theta) + i sin(k theta)</span>라고 가정하자.<br><strong>귀납 단계:</strong> <span class=\"chem\">(cos theta + i sin theta)^{k+1} = (cos(k theta) + i sin(k theta))(cos theta + i sin theta)</span><br><span class=\"chem\">= cos(k theta)cos theta - sin(k theta)sin theta + i(sin(k theta)cos theta + cos(k theta)sin theta)</span><br><span class=\"chem\">= cos((k + 1)theta) + i sin((k + 1)theta)</span> (삼각함수의 덧셈정리 이용).<br><strong>결론:</strong> <span class=\"chem\">P(1)</span>이 참이고, <span class=\"chem\">P(k)</span>가 참이면 <span class=\"chem\">P(k + 1)</span>도 참이므로, 수학적 귀납법에 의해 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 결과가 성립한다.</p>",
      markscheme: [
        // EN: A1: n = 1: (cos θ + i sin θ)¹ = cos θ + i sin θ, so P(1) is true.
        "A1: n = 1: (cos θ + i sin θ)¹ = cos θ + i sin θ이므로 P(1)은 참.",
        // EN: M1: Assumes P(k) true for some k ∈ ℤ⁺.
        "M1: 어떤 k ∈ ℤ⁺에 대해 P(k)가 참이라고 가정함.",
        // EN: M1: Writes (cos θ + i sin θ)<sup>k+1</sup> = (cos kθ + i sin kθ)(cos θ + i sin θ) using the assumption.
        "M1: 가정을 이용해 (cos θ + i sin θ)<sup>k+1</sup> = (cos kθ + i sin kθ)(cos θ + i sin θ)로 씀.",
        // EN: A1: Expands correctly, using i² = −1: cos kθ cos θ − sin kθ sin θ + i(sin kθ cos θ + cos kθ sin θ).
        "A1: i² = −1을 이용해 올바르게 전개함: cos kθ cos θ − sin kθ sin θ + i(sin kθ cos θ + cos kθ sin θ).",
        // EN: M1: Uses the compound angle identities for cos(A + B) and sin(A + B).
        "M1: cos(A + B)와 sin(A + B)의 덧셈정리를 이용함.",
        // EN: A1: Obtains cos((k + 1)θ) + i sin((k + 1)θ).
        "A1: cos((k + 1)θ) + i sin((k + 1)θ)를 얻음.",
        // EN: R1: Induction conclusion sentence (only if the M marks above are earned).
        "R1: 수학적 귀납법 결론 문장 (앞선 M 점수를 획득한 경우에만 부여).",
      ],
    },

    // ── t1-5-q026 · short · exam · AHL · AHL 1.15 · 6 marks
    "t1-5-q026": {
      // EN: Let <span class="chem">f(x) = 1 / (1 - 2x)</span>, <span class="chem">x != 1/2</span>. Prove by mathematical induction that <span class="chem">f^{(n)}(x) = (2^n n!) / (1 - 2x)^{n+1}</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [6 marks]
      stem: "<span class=\"chem\">f(x) = 1 / (1 - 2x)</span>, <span class=\"chem\">x != 1/2</span>라 하자. 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">f^{(n)}(x) = (2^n n!) / (1 - 2x)^{n+1}</span>임을 수학적 귀납법으로 증명하시오 (Prove). [6 marks]",
      hints: [
        // EN: You need the chain rule (topic 5.1): <span class="chem">d/dx (1 - 2x)^m = m(1 - 2x)^{m-1} · (-2)</span>.
        "연쇄법칙(주제 5.1)이 필요해요: <span class=\"chem\">d/dx (1 - 2x)^m = m(1 - 2x)^{m-1} · (-2)</span>.",
        // EN: In the step, differentiate the formula for <span class="chem">n = k</span> once. The two minus signs cancel, and <span class="chem">(k + 1) · k! = (k + 1)!</span>.
        "귀납 단계에서는 <span class=\"chem\">n = k</span>일 때의 식을 한 번 미분하세요. 두 음의 부호가 상쇄되고, <span class=\"chem\">(k + 1) · k! = (k + 1)!</span>이에요.",
      ],
      // EN: <p>The key step is <span class="chem">d/dx (1 - 2x)^{-(k+1)} = 2(k + 1)(1 - 2x)^{-(k+2)}</span>, so <span class="chem">f^{(k+1)}(x) = 2^k k! · 2(k + 1)(1 - 2x)^{-(k+2)} = 2^{k+1}(k + 1)!/(1 - 2x)^{k+2}</span>.</p>
      solution: "<p>핵심 단계는 <span class=\"chem\">d/dx (1 - 2x)^{-(k+1)} = 2(k + 1)(1 - 2x)^{-(k+2)}</span>이므로 <span class=\"chem\">f^{(k+1)}(x) = 2^k k! · 2(k + 1)(1 - 2x)^{-(k+2)} = 2^{k+1}(k + 1)!/(1 - 2x)^{k+2}</span>예요.</p>",
      // EN: <p><strong>Base case:</strong> <span class="chem">f(x) = (1 - 2x)^{-1}</span>, so <span class="chem">f'(x) = -(1 - 2x)^{-2} · (-2) = 2 / (1 - 2x)^2</span>, and the formula gives <span class="chem">(2^1 · 1!) / (1 - 2x)^2 = 2 / (1 - 2x)^2</span>. So <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">f^{(k)}(x) = 2^k k! (1 - 2x)^{-(k+1)}</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">f^{(k+1)}(x) = d/dx [2^k k! (1 - 2x)^{-(k+1)}] = 2^k k! · (-(k + 1))(1 - 2x)^{-(k+2)} · (-2)</span><br><span class="chem">= 2^{k+1}(k + 1)! (1 - 2x)^{-(k+2)} = (2^{k+1}(k + 1)!) / (1 - 2x)^{k+2}</span>, which is the formula with <span class="chem">n = k + 1</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, the result holds for all <span class="chem">n \in \mathbb{Z}^+</span> by mathematical induction.</p>
      answer: "<p><strong>초기 단계:</strong> <span class=\"chem\">f(x) = (1 - 2x)^{-1}</span>이므로 <span class=\"chem\">f'(x) = -(1 - 2x)^{-2} · (-2) = 2 / (1 - 2x)^2</span>이고, 공식은 <span class=\"chem\">(2^1 · 1!) / (1 - 2x)^2 = 2 / (1 - 2x)^2</span>을 준다. 따라서 <span class=\"chem\">P(1)</span>은 참이다.<br><strong>귀납 가정:</strong> 어떤 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">f^{(k)}(x) = 2^k k! (1 - 2x)^{-(k+1)}</span>이라고 가정하자.<br><strong>귀납 단계:</strong> <span class=\"chem\">f^{(k+1)}(x) = d/dx [2^k k! (1 - 2x)^{-(k+1)}] = 2^k k! · (-(k + 1))(1 - 2x)^{-(k+2)} · (-2)</span><br><span class=\"chem\">= 2^{k+1}(k + 1)! (1 - 2x)^{-(k+2)} = (2^{k+1}(k + 1)!) / (1 - 2x)^{k+2}</span>이고, 이는 <span class=\"chem\">n = k + 1</span>일 때의 공식이다.<br><strong>결론:</strong> <span class=\"chem\">P(1)</span>이 참이고, <span class=\"chem\">P(k)</span>가 참이면 <span class=\"chem\">P(k + 1)</span>도 참이므로, 수학적 귀납법에 의해 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 결과가 성립한다.</p>",
      markscheme: [
        // EN: A1: Shows f′(x) = 2/(1 − 2x)² and that this matches the formula for n = 1, so P(1) is true.
        "A1: f′(x) = 2/(1 − 2x)²을 보이고 이것이 n = 1일 때의 공식과 일치하므로 P(1)이 참임을 보임.",
        // EN: M1: Assumes P(k) true for some k ∈ ℤ⁺.
        "M1: 어떤 k ∈ ℤ⁺에 대해 P(k)가 참이라고 가정함.",
        // EN: M1: Differentiates the assumed f<sup>(k)</sup>(x) using the chain rule.
        "M1: 가정한 f<sup>(k)</sup>(x)를 연쇄법칙을 이용해 미분함.",
        // EN: A1: Obtains 2<sup>k</sup> k! · (−(k + 1))(1 − 2x)<sup>−(k+2)</sup> · (−2).
        "A1: 2<sup>k</sup> k! · (−(k + 1))(1 − 2x)<sup>−(k+2)</sup> · (−2)를 얻음.",
        // EN: A1: Simplifies to 2<sup>k+1</sup>(k + 1)!/(1 − 2x)<sup>k+2</sup>.
        "A1: 2<sup>k+1</sup>(k + 1)!/(1 − 2x)<sup>k+2</sup>로 정리함.",
        // EN: R1: Induction conclusion sentence (only if the M marks above are earned).
        "R1: 수학적 귀납법 결론 문장 (앞선 M 점수를 획득한 경우에만 부여).",
      ],
    },

    // ── t1-5-q027 · short · challenge · AHL · AHL 1.15 · 7 marks
    "t1-5-q027": {
      // EN: A computer scientist compares two algorithms. One takes <span class="chem">n!</span> steps and the other <span class="chem">3^n</span> steps for an input of size <span class="chem">n \in \mathbb{Z}^+</span>.<br>(a) Find the smallest positive integer <span class="chem">n_0</span> such that <span class="chem">n! &gt; 3^n</span> for <span class="chem">n = n_0</span>, showing that the inequality fails for <span class="chem">n = n_0 - 1</span>. [2 marks]<br>(b) Prove by mathematical induction that <span class="chem">n! &gt; 3^n</span> for all integers <span class="chem">n &gt;= n_0</span>. [5 marks]
      stem: "한 컴퓨터 과학자가 두 알고리즘을 비교한다. 크기가 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>인 입력에 대해 하나는 <span class=\"chem\">n!</span>단계, 다른 하나는 <span class=\"chem\">3^n</span>단계가 걸린다.<br>(a) <span class=\"chem\">n = n_0</span>일 때 <span class=\"chem\">n! &gt; 3^n</span>이 되는 가장 작은 양의 정수 <span class=\"chem\">n_0</span>을 구하고 (Find), <span class=\"chem\">n = n_0 - 1</span>일 때는 부등식이 성립하지 않음을 보이시오. [2 marks]<br>(b) <span class=\"chem\">n &gt;= n_0</span>인 모든 정수에 대해 <span class=\"chem\">n! &gt; 3^n</span>임을 수학적 귀납법으로 증명하시오 (Prove). [5 marks]",
      hints: [
        // EN: Decode: the algorithm story is just the inequality <span class="chem">n! &gt; 3^n</span>. The hidden condition is that the base case is not <span class="chem">n = 1</span>: you must first find where the inequality starts to hold.
        "해석: 알고리즘 이야기는 부등식 <span class=\"chem\">n! &gt; 3^n</span>일 뿐이에요. 숨은 조건은 초기 단계가 <span class=\"chem\">n = 1</span>이 아니라는 거예요. 먼저 부등식이 어디서부터 성립하기 시작하는지 찾아야 해요.",
        // EN: Make a small table of <span class="chem">n!</span> and <span class="chem">3^n</span> for <span class="chem">n = 1, ..., 7</span>.
        "<span class=\"chem\">n = 1, ..., 7</span>에 대해 <span class=\"chem\">n!</span>과 <span class=\"chem\">3^n</span>의 작은 표를 만들어 보세요.",
        // EN: In the inductive step use <span class="chem">(k + 1)! = (k + 1) · k!</span>, then the assumption, then the fact that <span class="chem">k + 1 &gt; 3</span>.
        "귀납 단계에서는 <span class=\"chem\">(k + 1)! = (k + 1) · k!</span>을 쓰고, 다음으로 가정을, 마지막으로 <span class=\"chem\">k + 1 &gt; 3</span>이라는 사실을 이용하세요.",
      ],
      // EN: <p><strong>Decode:</strong> this is an induction proof of an inequality with a base case <span class="chem">n_0 &gt; 1</span>, which you find by testing small values.</p><p>(a) <span class="chem">6! = 720 &lt; 729</span>, <span class="chem">7! = 5040 &gt; 2187</span>, so <span class="chem">n_0 = 7</span>.<br>(b) <span class="chem">(k + 1)! = (k + 1)k! &gt; (k + 1)3^k &gt; 3 · 3^k = 3^{k+1}</span>, using <span class="chem">k + 1 &gt;= 8 &gt; 3</span>.</p>
      solution: "<p><strong>해석:</strong> 이것은 초기 단계가 <span class=\"chem\">n_0 &gt; 1</span>인 부등식의 귀납법 증명이며, 초기 단계는 작은 값들을 대입해 찾아요.</p><p>(a) <span class=\"chem\">6! = 720 &lt; 729</span>, <span class=\"chem\">7! = 5040 &gt; 2187</span>이므로 <span class=\"chem\">n_0 = 7</span>.<br>(b) <span class=\"chem\">k + 1 &gt;= 8 &gt; 3</span>을 이용하면 <span class=\"chem\">(k + 1)! = (k + 1)k! &gt; (k + 1)3^k &gt; 3 · 3^k = 3^{k+1}</span>.</p>",
      // EN: <p>(a) <span class="chem">6! = 720 &lt; 729 = 3^6</span>, but <span class="chem">7! = 5040 &gt; 2187 = 3^7</span> (and the inequality also fails for <span class="chem">n = 1, ..., 5</span>). So <span class="chem">n_0 = 7</span>.<br>(b) The base case <span class="chem">n = 7</span> is shown in (a). Assume <span class="chem">k! &gt; 3^k</span> for some integer <span class="chem">k &gt;= 7</span>. Then <span class="chem">(k + 1)! = (k + 1) · k! &gt; (k + 1) · 3^k</span>. Since <span class="chem">k &gt;= 7</span>, <span class="chem">k + 1 &gt; 3</span>, so <span class="chem">(k + 1) · 3^k &gt; 3 · 3^k = 3^{k+1}</span>. Hence <span class="chem">(k + 1)! &gt; 3^{k+1}</span>. Since the result is true for <span class="chem">n = 7</span>, and true for <span class="chem">n = k</span> implies true for <span class="chem">n = k + 1</span>, by mathematical induction it is true for all integers <span class="chem">n &gt;= 7</span>.</p>
      answer: "<p>(a) <span class=\"chem\">6! = 720 &lt; 729 = 3^6</span>이지만 <span class=\"chem\">7! = 5040 &gt; 2187 = 3^7</span>이다 (<span class=\"chem\">n = 1, ..., 5</span>에서도 부등식은 성립하지 않는다). 따라서 <span class=\"chem\">n_0 = 7</span>.<br>(b) 초기 단계 <span class=\"chem\">n = 7</span>은 (a)에서 보였다. 어떤 정수 <span class=\"chem\">k &gt;= 7</span>에 대하여 <span class=\"chem\">k! &gt; 3^k</span>라고 가정하자. 그러면 <span class=\"chem\">(k + 1)! = (k + 1) · k! &gt; (k + 1) · 3^k</span>이다. <span class=\"chem\">k &gt;= 7</span>이므로 <span class=\"chem\">k + 1 &gt; 3</span>이고, 따라서 <span class=\"chem\">(k + 1) · 3^k &gt; 3 · 3^k = 3^{k+1}</span>이다. 그러므로 <span class=\"chem\">(k + 1)! &gt; 3^{k+1}</span>. 결과가 <span class=\"chem\">n = 7</span>일 때 참이고, <span class=\"chem\">n = k</span>일 때 참이면 <span class=\"chem\">n = k + 1</span>일 때도 참이므로, 수학적 귀납법에 의해 <span class=\"chem\">n &gt;= 7</span>인 모든 정수에 대하여 참이다.</p>",
      markscheme: [
        // EN: A1: (a) Evaluates 6! = 720 and 3⁶ = 729, so the inequality fails for n = 6.
        "A1: (a) 6! = 720과 3⁶ = 729를 계산하여 n = 6에서 부등식이 성립하지 않음을 보임.",
        // EN: A1: (a) Evaluates 7! = 5040 > 2187 = 3⁷, so n₀ = 7.
        "A1: (a) 7! = 5040 > 2187 = 3⁷을 계산하여 n₀ = 7을 얻음.",
        // EN: M1: (b) Assumes k! > 3<sup>k</sup> for some integer k ≥ 7 (base case n = 7 from part (a)).
        "M1: (b) 어떤 정수 k ≥ 7에 대해 k! > 3<sup>k</sup>라고 가정함 (초기 단계 n = 7은 (a)에서).",
        // EN: M1: (b) Writes (k + 1)! = (k + 1) · k! > (k + 1) · 3<sup>k</sup>.
        "M1: (b) (k + 1)! = (k + 1) · k! > (k + 1) · 3<sup>k</sup>로 씀.",
        // EN: R1: (b) Uses k + 1 > 3 (because k ≥ 7) to deduce (k + 1) · 3<sup>k</sup> > 3 · 3<sup>k</sup>.
        "R1: (b) k + 1 > 3 (k ≥ 7이므로)을 이용해 (k + 1) · 3<sup>k</sup> > 3 · 3<sup>k</sup>를 이끌어 냄.",
        // EN: A1: (b) Concludes (k + 1)! > 3<sup>k+1</sup>.
        "A1: (b) (k + 1)! > 3<sup>k+1</sup>이라고 결론지음.",
        // EN: R1: (b) Induction conclusion sentence for all n ≥ 7 (only if the M marks above are earned).
        "R1: (b) 모든 n ≥ 7에 대한 수학적 귀납법 결론 문장 (앞선 M 점수를 획득한 경우에만 부여).",
      ],
    },

    // ── t1-5-q028 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q028": {
      // EN: A sequence is defined by <span class="chem">u_1 = 1</span> and <span class="chem">u_{n+1} = 2u_n + 3</span> for <span class="chem">n \in \mathbb{Z}^+</span>. It can be proved by induction that <span class="chem">u_n = p · 2^n + q</span> for all <span class="chem">n \in \mathbb{Z}^+</span>, where <span class="chem">p</span> and <span class="chem">q</span> are constants. By first finding <span class="chem">p</span> and <span class="chem">q</span>, find the value of <span class="chem">u_{12}</span>.
      stem: "수열이 <span class=\"chem\">u_1 = 1</span>, <span class=\"chem\">u_{n+1} = 2u_n + 3</span> (<span class=\"chem\">n \\in \\mathbb{Z}^+</span>)으로 정의된다. <span class=\"chem\">p</span>와 <span class=\"chem\">q</span>가 상수일 때, 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">u_n = p · 2^n + q</span>임을 귀납법으로 증명할 수 있다. 먼저 <span class=\"chem\">p</span>와 <span class=\"chem\">q</span>를 구한 다음 <span class=\"chem\">u_{12}</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: Decode: you do not need to iterate eleven times. Use two known terms to find <span class="chem">p</span> and <span class="chem">q</span>, then substitute <span class="chem">n = 12</span> into the closed form.
        "해석: 열한 번 반복 계산할 필요가 없어요. 알고 있는 두 항으로 <span class=\"chem\">p</span>와 <span class=\"chem\">q</span>를 구한 뒤, 일반항에 <span class=\"chem\">n = 12</span>를 대입하세요.",
        // EN: From the recurrence, <span class="chem">u_2 = 2(1) + 3 = 5</span>. So <span class="chem">2p + q = 1</span> and <span class="chem">4p + q = 5</span>.
        "점화식에서 <span class=\"chem\">u_2 = 2(1) + 3 = 5</span>예요. 따라서 <span class=\"chem\">2p + q = 1</span>, <span class=\"chem\">4p + q = 5</span>예요.",
        // EN: Solving gives <span class="chem">p = 2</span>, <span class="chem">q = -3</span>, so <span class="chem">u_n = 2^{n+1} - 3</span>.
        "풀면 <span class=\"chem\">p = 2</span>, <span class=\"chem\">q = -3</span>이므로 <span class=\"chem\">u_n = 2^{n+1} - 3</span>이에요.",
      ],
      // EN: <p><span class="chem">u_1 = 2p + q = 1</span> and <span class="chem">u_2 = 4p + q = 5</span>, so <span class="chem">p = 2</span> and <span class="chem">q = -3</span>: <span class="chem">u_n = 2^{n+1} - 3</span>. Check: <span class="chem">u_3 = 2(5) + 3 = 13 = 2^4 - 3</span>. Then <span class="chem">u_{12} = 2^{13} - 3 = 8192 - 3 = 8189</span>.</p>
      solution: "<p><span class=\"chem\">u_1 = 2p + q = 1</span>, <span class=\"chem\">u_2 = 4p + q = 5</span>이므로 <span class=\"chem\">p = 2</span>, <span class=\"chem\">q = -3</span>: <span class=\"chem\">u_n = 2^{n+1} - 3</span>. 확인: <span class=\"chem\">u_3 = 2(5) + 3 = 13 = 2^4 - 3</span>. 따라서 <span class=\"chem\">u_{12} = 2^{13} - 3 = 8192 - 3 = 8189</span>예요.</p>",
    },

    // ── t1-5-q029 · short · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q029": {
      // EN: Prove by contradiction that there are no integers <span class="chem">a</span> and <span class="chem">b</span> such that <span class="chem">14a + 21b = 100</span>. [4 marks]
      stem: "<span class=\"chem\">14a + 21b = 100</span>을 만족하는 정수 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>가 존재하지 않음을 귀류법으로 증명하시오 (Prove). [4 marks]",
      hints: [
        // EN: Start with “Assume there exist integers <span class="chem">a</span> and <span class="chem">b</span> such that …”.
        "“…을 만족하는 정수 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>가 존재한다고 가정하자”로 시작하세요.",
        // EN: Look for a common factor of <span class="chem">14</span> and <span class="chem">21</span>.
        "<span class=\"chem\">14</span>와 <span class=\"chem\">21</span>의 공약수를 찾아보세요.",
      ],
      // EN: <p>The left-hand side <span class="chem">14a + 21b = 7(2a + 3b)</span> is always a multiple of 7 when <span class="chem">a, b \in \mathbb{Z}</span>, but <span class="chem">100</span> leaves remainder 2 on division by 7. This contradiction shows no integer solution exists.</p>
      solution: "<p><span class=\"chem\">a, b \\in \\mathbb{Z}</span>일 때 좌변 <span class=\"chem\">14a + 21b = 7(2a + 3b)</span>는 항상 7의 배수이지만, <span class=\"chem\">100</span>을 7로 나눈 나머지는 2예요. 이 모순은 정수해가 존재하지 않음을 보여 줘요.</p>",
      // EN: <p>Assume, for a contradiction, that there exist integers <span class="chem">a, b</span> with <span class="chem">14a + 21b = 100</span>. Then <span class="chem">7(2a + 3b) = 100</span>. Since <span class="chem">2a + 3b \in \mathbb{Z}</span>, this means <span class="chem">7</span> divides <span class="chem">100</span>. But <span class="chem">100 = 7 × 14 + 2</span>, so <span class="chem">7</span> does not divide <span class="chem">100</span>: a contradiction. Hence no such integers exist.</p>
      answer: "<p>모순을 이끌어 내기 위해 <span class=\"chem\">14a + 21b = 100</span>을 만족하는 정수 <span class=\"chem\">a, b</span>가 존재한다고 가정하자. 그러면 <span class=\"chem\">7(2a + 3b) = 100</span>이다. <span class=\"chem\">2a + 3b \\in \\mathbb{Z}</span>이므로 이는 <span class=\"chem\">7</span>이 <span class=\"chem\">100</span>을 나눈다는 뜻이다. 그러나 <span class=\"chem\">100 = 7 × 14 + 2</span>이므로 <span class=\"chem\">7</span>은 <span class=\"chem\">100</span>을 나누지 않는다. 이는 모순이다. 따라서 그러한 정수는 존재하지 않는다.</p>",
      markscheme: [
        // EN: M1: Assumes (for a contradiction) that integers a and b exist with 14a + 21b = 100.
        "M1: (모순을 이끌어 내기 위해) 14a + 21b = 100을 만족하는 정수 a와 b가 존재한다고 가정함.",
        // EN: A1: Factorises the left-hand side: 7(2a + 3b) = 100.
        "A1: 좌변을 인수분해함: 7(2a + 3b) = 100.",
        // EN: R1: States that 2a + 3b is an integer, so 7 would divide 100.
        "R1: 2a + 3b가 정수이므로 7이 100을 나누게 됨을 서술함.",
        // EN: R1: 7 does not divide 100 (100 = 7 × 14 + 2), a contradiction, so no such integers exist.
        "R1: 7은 100을 나누지 않으므로 (100 = 7 × 14 + 2) 모순이고, 따라서 그러한 정수는 존재하지 않음.",
      ],
    },

    // ── t1-5-q030 · short · exam · AHL · AHL 1.15 · 6 marks
    "t1-5-q030": {
      // EN: Prove by contradiction that <span class="chem">∛2</span>, the real cube root of 2, is irrational. You may assume that the cube of an odd integer is odd. [6 marks]
      stem: "2의 실수 세제곱근 <span class=\"chem\">∛2</span>가 무리수임을 귀류법으로 증명하시오 (Prove). 홀수의 세제곱은 홀수라는 사실을 이용해도 된다. [6 marks]",
      hints: [
        // EN: Assume the opposite: <span class="chem">∛2 = a/b</span> in lowest terms, then cube both sides.
        "반대를 가정하세요: 기약분수로 <span class=\"chem\">∛2 = a/b</span>라 하고 양변을 세제곱해요.",
        // EN: Show first that <span class="chem">a</span> must be even, write <span class="chem">a = 2c</span>, and substitute back.
        "먼저 <span class=\"chem\">a</span>가 짝수여야 함을 보이고, <span class=\"chem\">a = 2c</span>로 놓고 다시 대입하세요.",
      ],
      // EN: <p>From <span class="chem">a^3 = 2b^3</span>, <span class="chem">a</span> is even; writing <span class="chem">a = 2c</span> gives <span class="chem">b^3 = 4c^3</span>, so <span class="chem">b</span> is even too. A fraction in lowest terms cannot have both parts even, which is the contradiction.</p>
      solution: "<p><span class=\"chem\">a^3 = 2b^3</span>에서 <span class=\"chem\">a</span>는 짝수예요. <span class=\"chem\">a = 2c</span>로 쓰면 <span class=\"chem\">b^3 = 4c^3</span>이 되어 <span class=\"chem\">b</span>도 짝수예요. 기약분수는 분자와 분모가 모두 짝수일 수 없으므로, 이것이 모순이에요.</p>",
      // EN: <p>Assume <span class="chem">∛2</span> is rational, so <span class="chem">∛2 = a/b</span> with <span class="chem">a, b \in \mathbb{Z}^+</span> and <span class="chem">gcd(a, b) = 1</span>. Cubing gives <span class="chem">a^3 = 2b^3</span>, so <span class="chem">a^3</span> is even. If <span class="chem">a</span> were odd, <span class="chem">a^3</span> would be odd, so <span class="chem">a</span> is even: <span class="chem">a = 2c</span>, <span class="chem">c \in \mathbb{Z}^+</span>. Then <span class="chem">8c^3 = 2b^3</span>, so <span class="chem">b^3 = 4c^3</span> is even and therefore <span class="chem">b</span> is even. So <span class="chem">a</span> and <span class="chem">b</span> are both even, contradicting <span class="chem">gcd(a, b) = 1</span>. Hence <span class="chem">∛2</span> is irrational.</p>
      answer: "<p><span class=\"chem\">∛2</span>가 유리수라고 가정하면, <span class=\"chem\">a, b \\in \\mathbb{Z}^+</span>이고 <span class=\"chem\">gcd(a, b) = 1</span>인 <span class=\"chem\">∛2 = a/b</span>로 쓸 수 있다. 세제곱하면 <span class=\"chem\">a^3 = 2b^3</span>이므로 <span class=\"chem\">a^3</span>은 짝수이다. 만약 <span class=\"chem\">a</span>가 홀수라면 <span class=\"chem\">a^3</span>도 홀수가 되므로, <span class=\"chem\">a</span>는 짝수이다: <span class=\"chem\">a = 2c</span>, <span class=\"chem\">c \\in \\mathbb{Z}^+</span>. 그러면 <span class=\"chem\">8c^3 = 2b^3</span>이므로 <span class=\"chem\">b^3 = 4c^3</span>은 짝수이고, 따라서 <span class=\"chem\">b</span>는 짝수이다. 그러므로 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>는 모두 짝수가 되어 <span class=\"chem\">gcd(a, b) = 1</span>에 모순이다. 따라서 <span class=\"chem\">∛2</span>는 무리수이다.</p>",
      markscheme: [
        // EN: M1: Assumes ∛2 = a/b with a, b ∈ ℤ⁺ and gcd(a, b) = 1.
        "M1: a, b ∈ ℤ⁺이고 gcd(a, b) = 1인 ∛2 = a/b라고 가정함.",
        // EN: A1: Cubes to obtain a³ = 2b³.
        "A1: 세제곱하여 a³ = 2b³을 얻음.",
        // EN: R1: a³ is even, so a is even (since the cube of an odd integer is odd).
        "R1: a³이 짝수이므로 a는 짝수임 (홀수의 세제곱은 홀수이므로).",
        // EN: A1: Substitutes a = 2c to obtain b³ = 4c³.
        "A1: a = 2c를 대입하여 b³ = 4c³을 얻음.",
        // EN: R1: Hence b³ is even, so b is even.
        "R1: 따라서 b³이 짝수이므로 b는 짝수임.",
        // EN: R1: Both a and b even contradicts gcd(a, b) = 1, so ∛2 is irrational.
        "R1: a와 b가 모두 짝수인 것은 gcd(a, b) = 1에 모순이므로 ∛2는 무리수임.",
      ],
    },

    // ── t1-5-q031 · numeric · exam · AHL · AHL 1.15 · 3 marks
    "t1-5-q031": {
      // EN: Consider the conjecture: “For every prime number <span class="chem">p</span>, the number <span class="chem">2^p - 1</span> is also prime.” Find the smallest prime <span class="chem">p</span> that is a counterexample to this conjecture. (You may use <span class="chem">2047 = 23 × 89</span>.)
      stem: "추측 “모든 소수 <span class=\"chem\">p</span>에 대해 수 <span class=\"chem\">2^p - 1</span>도 소수이다”를 생각하자. 이 추측의 반례가 되는 가장 작은 소수 <span class=\"chem\">p</span>를 구하시오 (Find). (<span class=\"chem\">2047 = 23 × 89</span>를 이용해도 된다.)",
      hints: [
        // EN: A counterexample is a prime <span class="chem">p</span> for which <span class="chem">2^p - 1</span> is <strong>not</strong> prime. Test the primes in increasing order.
        "반례는 <span class=\"chem\">2^p - 1</span>이 소수가 <strong>아닌</strong> 소수 <span class=\"chem\">p</span>예요. 소수를 작은 것부터 차례로 확인하세요.",
        // EN: <span class="chem">2^2 - 1 = 3</span>, <span class="chem">2^3 - 1 = 7</span>, <span class="chem">2^5 - 1 = 31</span> and <span class="chem">2^7 - 1 = 127</span> are all prime. Which prime comes next?
        "<span class=\"chem\">2^2 - 1 = 3</span>, <span class=\"chem\">2^3 - 1 = 7</span>, <span class=\"chem\">2^5 - 1 = 31</span>, <span class=\"chem\">2^7 - 1 = 127</span>은 모두 소수예요. 그다음 소수는 무엇인가요?",
      ],
      // EN: <p>For <span class="chem">p = 2, 3, 5, 7</span> we get <span class="chem">3, 7, 31, 127</span>, all prime. For <span class="chem">p = 11</span>, <span class="chem">2^{11} - 1 = 2047 = 23 × 89</span>, which is composite. So the smallest counterexample is <span class="chem">p = 11</span>. One counterexample is enough to disprove the conjecture.</p>
      solution: "<p><span class=\"chem\">p = 2, 3, 5, 7</span>이면 <span class=\"chem\">3, 7, 31, 127</span>로 모두 소수예요. <span class=\"chem\">p = 11</span>이면 <span class=\"chem\">2^{11} - 1 = 2047 = 23 × 89</span>로 합성수예요. 따라서 가장 작은 반례는 <span class=\"chem\">p = 11</span>이에요. 추측을 반증하는 데에는 반례 하나로 충분해요.</p>",
    },

    // ── t1-5-q032 · mcq · foundation · AHL · AHL 1.15 · 1 mark
    "t1-5-q032": {
      // EN: A student wants to prove by contradiction that <span class="chem">sqrt(7)</span> is irrational. What should the first line of the proof assume?
      stem: "한 학생이 <span class=\"chem\">sqrt(7)</span>이 무리수임을 귀류법으로 증명하려고 한다. 증명의 첫 줄에서는 무엇을 가정해야 하나요?",
      options: [
        // EN: <span class="chem">sqrt(7) = p/q</span> for some <span class="chem">p, q \in \mathbb{Z}^+</span> with <span class="chem">gcd(p, q) = 1</span>.
        "어떤 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span> (<span class=\"chem\">gcd(p, q) = 1</span>)에 대해 <span class=\"chem\">sqrt(7) = p/q</span>.",
        // EN: <span class="chem">sqrt(7)</span> is irrational.
        "<span class=\"chem\">sqrt(7)</span>은 무리수이다.",
        // EN: <span class="chem">sqrt(7) = p/q</span> where <span class="chem">p</span> and <span class="chem">q</span> are irrational numbers.
        "<span class=\"chem\">p</span>와 <span class=\"chem\">q</span>가 무리수일 때 <span class=\"chem\">sqrt(7) = p/q</span>.",
        // EN: <span class="chem">7 = p^2 / q^2</span> for all <span class="chem">p, q \in \mathbb{Z}^+</span>.
        "모든 <span class=\"chem\">p, q \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">7 = p^2 / q^2</span>.",
      ],
      hints: [
        // EN: Proof by contradiction: assume the <strong>opposite</strong> of what you want to prove.
        "귀류법: 증명하려는 것의 <strong>반대</strong>를 가정하세요.",
        // EN: What is the definition of a rational number?
        "유리수의 정의는 무엇인가요?",
      ],
      // EN: <p>The negation of “<span class="chem">sqrt(7)</span> is irrational” is “<span class="chem">sqrt(7)</span> is rational”, i.e. <span class="chem">sqrt(7) = p/q</span> for some positive integers with no common factor. The proof then derives a contradiction from this assumption.</p>
      solution: "<p>“<span class=\"chem\">sqrt(7)</span>은 무리수이다”의 부정은 “<span class=\"chem\">sqrt(7)</span>은 유리수이다”, 즉 공약수가 없는 어떤 양의 정수들에 대해 <span class=\"chem\">sqrt(7) = p/q</span>라는 것이에요. 증명은 이 가정으로부터 모순을 이끌어 내요.</p>",
      misconception: {
        // EN (option B): This is the statement you want to prove. A proof by contradiction starts by assuming its negation (that √7 is rational).
        "1": "이것은 증명하려는 명제 자체예요. 귀류법은 그 부정(√7이 유리수라는 것)을 가정하는 것에서 시작해요.",
        // EN (option C): A rational number is a ratio of integers. Allowing p and q to be irrational says nothing (√7 = √7/1 already).
        "2": "유리수는 정수의 비예요. p와 q가 무리수여도 된다면 아무 의미가 없어요 (이미 √7 = √7/1이니까요).",
        // EN (option D): “For all p, q” is false and is not the negation of the statement. You assume the existence of one particular pair p, q.
        "3": "“모든 p, q에 대해”는 거짓이며 명제의 부정도 아니에요. 가정해야 하는 것은 특정한 한 쌍의 p, q가 존재한다는 것이에요.",
      },
    },

    // ── t1-5-q033 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q033": {
      // EN: Solve the system of equations<br><span class="chem">x + 2y - z = 1</span><br><span class="chem">2x - y + 3z = 12</span><br><span class="chem">3x + y + z = 10</span><br>and hence find the value of <span class="chem">z</span>.
      stem: "연립방정식<br><span class=\"chem\">x + 2y - z = 1</span><br><span class=\"chem\">2x - y + 3z = 12</span><br><span class=\"chem\">3x + y + z = 10</span><br>을 풀고, 이를 이용하여 (Hence) <span class=\"chem\">z</span>의 값을 구하시오.",
      hints: [
        // EN: Eliminate <span class="chem">x</span>: use <span class="chem">R_2 - 2R_1</span> and <span class="chem">R_3 - 3R_1</span>.
        "<span class=\"chem\">x</span>를 소거하세요: <span class=\"chem\">R_2 - 2R_1</span>과 <span class=\"chem\">R_3 - 3R_1</span>을 이용해요.",
        // EN: You should get <span class="chem">-5y + 5z = 10</span> and <span class="chem">-5y + 4z = 7</span>. Subtract these to find <span class="chem">z</span>.
        "<span class=\"chem\">-5y + 5z = 10</span>과 <span class=\"chem\">-5y + 4z = 7</span>을 얻을 거예요. 두 식을 빼서 <span class=\"chem\">z</span>를 구하세요.",
      ],
      // EN: <p><span class="chem">R_2 - 2R_1: -5y + 5z = 10</span>, i.e. <span class="chem">-y + z = 2</span>. <span class="chem">R_3 - 3R_1: -5y + 4z = 7</span>. Subtracting: <span class="chem">z = 3</span>. Then <span class="chem">y = z - 2 = 1</span> and <span class="chem">x = 1 - 2y + z = 2</span>. Check in equation 3: <span class="chem">6 + 1 + 3 = 10</span>. So <span class="chem">z = 3</span>.</p>
      solution: "<p><span class=\"chem\">R_2 - 2R_1: -5y + 5z = 10</span>, 즉 <span class=\"chem\">-y + z = 2</span>. <span class=\"chem\">R_3 - 3R_1: -5y + 4z = 7</span>. 빼면 <span class=\"chem\">z = 3</span>. 그러면 <span class=\"chem\">y = z - 2 = 1</span>, <span class=\"chem\">x = 1 - 2y + z = 2</span>. 3번째 식으로 확인: <span class=\"chem\">6 + 1 + 3 = 10</span>. 따라서 <span class=\"chem\">z = 3</span>이에요.</p>",
    },

    // ── t1-5-q034 · short · exam · AHL · AHL 1.16 · 8 marks
    "t1-5-q034": {
      // EN: Consider the system of equations<br><span class="chem">x + y + z = 2</span><br><span class="chem">x + 2y + 3z = 5</span><br><span class="chem">2x + 3y + az = b</span>, where <span class="chem">a, b \in \mathbb{R}</span>.<br>(a) Use row reduction to find the value of <span class="chem">a</span> for which the system does not have a unique solution. [3 marks]<br>(b) For this value of <span class="chem">a</span>, find the value of <span class="chem">b</span> for which the system has infinitely many solutions. [1 mark]<br>(c) For these values of <span class="chem">a</span> and <span class="chem">b</span>, find the general solution and describe the solution set geometrically. [3 marks]<br>(d) Describe the geometrical arrangement of the three planes when <span class="chem">a</span> takes the value in (a) and <span class="chem">b</span> does not take the value in (b). [1 mark]
      stem: "연립방정식<br><span class=\"chem\">x + y + z = 2</span><br><span class=\"chem\">x + 2y + 3z = 5</span><br><span class=\"chem\">2x + 3y + az = b</span> (<span class=\"chem\">a, b \\in \\mathbb{R}</span>)를 생각하자.<br>(a) 행 연산을 이용하여 연립방정식이 유일한 해를 갖지 않도록 하는 <span class=\"chem\">a</span>의 값을 구하시오 (Find). [3 marks]<br>(b) 이 <span class=\"chem\">a</span>의 값에 대해 연립방정식이 무수히 많은 해를 갖도록 하는 <span class=\"chem\">b</span>의 값을 구하시오 (Find). [1 mark]<br>(c) 이러한 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>의 값에 대해 일반해를 구하고 (Find), 해집합을 기하적으로 설명하시오. [3 marks]<br>(d) <span class=\"chem\">a</span>가 (a)의 값을 갖고 <span class=\"chem\">b</span>가 (b)의 값을 갖지 않을 때, 세 평면의 기하적 배치를 설명하시오 (Describe). [1 mark]",
      hints: [
        // EN: Eliminate <span class="chem">x</span> from rows 2 and 3, then eliminate <span class="chem">y</span> from row 3 to reach <span class="chem">g(a)z = h(b)</span>.
        "2행과 3행에서 <span class=\"chem\">x</span>를 소거한 다음, 3행에서 <span class=\"chem\">y</span>를 소거해 <span class=\"chem\">g(a)z = h(b)</span> 꼴을 만드세요.",
        // EN: For infinitely many solutions the final row must read <span class="chem">0z = 0</span>; for no solution it reads <span class="chem">0z = </span>(non-zero).
        "무수히 많은 해를 가지려면 마지막 행이 <span class=\"chem\">0z = 0</span>이어야 하고, 해가 없을 때는 <span class=\"chem\">0z = </span>(0이 아닌 수)가 돼요.",
        // EN: For the geometry, check whether any two normal vectors are parallel (topic 3.3).
        "기하적 배치를 볼 때는 두 법선벡터가 평행한지 확인하세요 (주제 3.3).",
      ],
      // EN: <p>Row reduction gives <span class="chem">y + 2z = 3</span> and <span class="chem">(a - 4)z = b - 7</span>. With <span class="chem">a = 4, b = 7</span> the solution set is the line <span class="chem">(-1 + lambda, 3 - 2lambda, lambda)</span>. Check with <span class="chem">lambda = 1</span>: <span class="chem">(0, 1, 1)</span> satisfies all three equations (<span class="chem">2x + 3y + 4z = 7</span>). With <span class="chem">a = 4, b != 7</span> the system is inconsistent, and since no two planes are parallel they form a triangular prism.</p>
      solution: "<p>행 연산으로 <span class=\"chem\">y + 2z = 3</span>과 <span class=\"chem\">(a - 4)z = b - 7</span>을 얻어요. <span class=\"chem\">a = 4, b = 7</span>일 때 해집합은 직선 <span class=\"chem\">(-1 + lambda, 3 - 2lambda, lambda)</span>예요. <span class=\"chem\">lambda = 1</span>로 확인: <span class=\"chem\">(0, 1, 1)</span>은 세 식을 모두 만족해요 (<span class=\"chem\">2x + 3y + 4z = 7</span>). <span class=\"chem\">a = 4, b != 7</span>일 때 연립방정식은 불능이고, 어느 두 평면도 평행하지 않으므로 세 평면은 삼각기둥을 이뤄요.</p>",
      // EN: <p>(a) <span class="chem">R_2 - R_1: y + 2z = 3</span>; <span class="chem">R_3 - 2R_1: y + (a - 2)z = b - 4</span>; subtracting: <span class="chem">(a - 4)z = b - 7</span>. No unique solution when <span class="chem">a = 4</span>.<br>(b) <span class="chem">b = 7</span> (the last row becomes <span class="chem">0z = 0</span>).<br>(c) Let <span class="chem">z = lambda</span>: <span class="chem">y = 3 - 2lambda</span>, <span class="chem">x = 2 - y - z = -1 + lambda</span>, so <span class="chem">(x, y, z) = (-1 + lambda, 3 - 2lambda, lambda)</span>, <span class="chem">lambda \in \mathbb{R}</span>. The three planes meet in a common line (a sheaf).<br>(d) No two of the normals <span class="chem">(1, 1, 1), (1, 2, 3), (2, 3, 4)</span> are parallel, and there is no common point, so the planes form a triangular prism (each pair meets in a line, the three lines are parallel).</p>
      answer: "<p>(a) <span class=\"chem\">R_2 - R_1: y + 2z = 3</span>; <span class=\"chem\">R_3 - 2R_1: y + (a - 2)z = b - 4</span>; 빼면 <span class=\"chem\">(a - 4)z = b - 7</span>. <span class=\"chem\">a = 4</span>일 때 유일한 해를 갖지 않는다.<br>(b) <span class=\"chem\">b = 7</span> (마지막 행이 <span class=\"chem\">0z = 0</span>이 된다).<br>(c) <span class=\"chem\">z = lambda</span>라 하면 <span class=\"chem\">y = 3 - 2lambda</span>, <span class=\"chem\">x = 2 - y - z = -1 + lambda</span>이므로 <span class=\"chem\">(x, y, z) = (-1 + lambda, 3 - 2lambda, lambda)</span>, <span class=\"chem\">lambda \\in \\mathbb{R}</span>. 세 평면은 공통인 한 직선에서 만난다 (평면 다발).<br>(d) 법선 <span class=\"chem\">(1, 1, 1), (1, 2, 3), (2, 3, 4)</span> 중 어느 두 개도 평행하지 않고 공통점도 없으므로, 세 평면은 삼각기둥을 이룬다 (두 평면씩 한 직선에서 만나고, 그 세 직선은 평행하다).</p>",
      markscheme: [
        // EN: M1: (a) Eliminates x with R₂ − R₁ and R₃ − 2R₁.
        "M1: (a) R₂ − R₁과 R₃ − 2R₁로 x를 소거함.",
        // EN: A1: (a) Reaches (a − 4)z = b − 7 (or equivalent).
        "A1: (a) (a − 4)z = b − 7 (또는 동등한 식)에 도달함.",
        // EN: A1: (a) a = 4.
        "A1: (a) a = 4.",
        // EN: A1: (b) b = 7.
        "A1: (b) b = 7.",
        // EN: M1: (c) Sets z = λ and back-substitutes.
        "M1: (c) z = λ로 두고 역으로 대입함.",
        // EN: A1: (c) (x, y, z) = (−1 + λ, 3 − 2λ, λ), λ ∈ ℝ (or equivalent).
        "A1: (c) (x, y, z) = (−1 + λ, 3 − 2λ, λ), λ ∈ ℝ (또는 동등한 식).",
        // EN: A1: (c) The three planes intersect in a line.
        "A1: (c) 세 평면이 한 직선에서 만남.",
        // EN: R1: (d) Triangular prism: no two planes are parallel and there is no point common to all three.
        "R1: (d) 삼각기둥: 어느 두 평면도 평행하지 않고 세 평면 모두에 공통인 점이 없음.",
      ],
    },

    // ── t1-5-q035 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q035": {
      // EN: A drone films a ball thrown upwards. The height of the ball, <span class="chem">h</span> metres, <span class="chem">t</span> seconds after the throw is modelled by <span class="chem">h(t) = at^2 + bt + c</span>. The drone records <span class="chem">h = 6.85</span> when <span class="chem">t = 0.5</span>, <span class="chem">h = 9.62</span> when <span class="chem">t = 1.2</span> and <span class="chem">h = 8.30</span> when <span class="chem">t = 2.0</span>. Find the maximum height of the ball predicted by the model.
      stem: "드론이 위로 던진 공을 촬영한다. 던진 지 <span class=\"chem\">t</span>초 후 공의 높이 <span class=\"chem\">h</span>미터는 <span class=\"chem\">h(t) = at^2 + bt + c</span>로 모델링된다. 드론은 <span class=\"chem\">t = 0.5</span>일 때 <span class=\"chem\">h = 6.85</span>, <span class=\"chem\">t = 1.2</span>일 때 <span class=\"chem\">h = 9.62</span>, <span class=\"chem\">t = 2.0</span>일 때 <span class=\"chem\">h = 8.30</span>을 기록했다. 이 모델이 예측하는 공의 최대 높이를 구하시오 (Find).",
      hints: [
        // EN: Decode: each data point gives one linear equation in the unknowns <span class="chem">a, b, c</span>. Solve the <span class="chem">3 × 3</span> system with your GDC, then find the vertex of the parabola.
        "해석: 각 데이터 점은 미지수 <span class=\"chem\">a, b, c</span>에 대한 일차방정식을 하나씩 줘요. GDC로 <span class=\"chem\">3 × 3</span> 연립방정식을 푼 다음, 포물선의 꼭짓점을 구하세요.",
        // EN: The equations are <span class="chem">0.25a + 0.5b + c = 6.85</span>, <span class="chem">1.44a + 1.2b + c = 9.62</span> and <span class="chem">4a + 2b + c = 8.30</span>.
        "방정식은 <span class=\"chem\">0.25a + 0.5b + c = 6.85</span>, <span class=\"chem\">1.44a + 1.2b + c = 9.62</span>, <span class=\"chem\">4a + 2b + c = 8.30</span>이에요.",
        // EN: With <span class="chem">a, b, c</span> stored, the maximum is at <span class="chem">t = -b/(2a)</span>; or graph <span class="chem">h(t)</span> and use the maximum feature.
        "<span class=\"chem\">a, b, c</span>를 저장해 두면 최댓값은 <span class=\"chem\">t = -b/(2a)</span>에서 나타나요. 또는 <span class=\"chem\">h(t)</span>의 그래프를 그려 최댓값 기능을 이용하세요.",
      ],
      // EN: <p>The GDC gives <span class="chem">a = -3.7381...</span>, <span class="chem">b = 10.3119...</span>, <span class="chem">c = 2.6286...</span>. The vertex is at <span class="chem">t = -b/(2a) = 1.3793...</span> s, so the maximum height is <span class="chem">h(1.3793...) = 9.74</span> m (3 s.f.). Keep the full stored values: rounding <span class="chem">a, b, c</span> early changes the third figure.</p>
      solution: "<p>GDC로 <span class=\"chem\">a = -3.7381...</span>, <span class=\"chem\">b = 10.3119...</span>, <span class=\"chem\">c = 2.6286...</span>을 얻어요. 꼭짓점은 <span class=\"chem\">t = -b/(2a) = 1.3793...</span> s에 있으므로 최대 높이는 <span class=\"chem\">h(1.3793...) = 9.74</span> m (유효숫자 3자리)예요. 저장한 값을 그대로 쓰세요: <span class=\"chem\">a, b, c</span>를 일찍 반올림하면 셋째 자리가 달라져요.</p>",
    },

    // ── t1-5-q036 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q036": {
      // EN: Mei invests a total of <span class="chem">$40 000</span> in three accounts, A, B and C, which pay simple interest at annual rates of <span class="chem">2.6%</span>, <span class="chem">3.4%</span> and <span class="chem">5.1%</span> respectively. After one year she has earned <span class="chem">$1437.51</span> in interest in total. The amount invested in account C is <span class="chem">$2000</span> less than the amount invested in account A. Find the amount invested in account B. Give your answer correct to 2 decimal places.
      stem: "메이는 총 <span class=\"chem\">$40 000</span>을 세 계좌 A, B, C에 투자했고, 이 계좌들은 각각 연 <span class=\"chem\">2.6%</span>, <span class=\"chem\">3.4%</span>, <span class=\"chem\">5.1%</span>의 단리 이자를 준다. 1년 후 그녀가 받은 이자는 모두 <span class=\"chem\">$1437.51</span>이었다. 계좌 C에 투자한 금액은 계좌 A에 투자한 금액보다 <span class=\"chem\">$2000</span> 적다. 계좌 B에 투자한 금액을 구하시오 (Find). 답은 소수점 아래 2자리까지 나타내시오.",
      hints: [
        // EN: Decode: three unknown amounts and three facts (total, total interest, the A–C relation) give a <span class="chem">3 × 3</span> linear system. Let the amounts be <span class="chem">x, y, z</span>.
        "해석: 미지의 금액 세 개와 사실 세 가지(총액, 총이자, A와 C의 관계)로 <span class=\"chem\">3 × 3</span> 연립일차방정식을 세울 수 있어요. 금액을 <span class=\"chem\">x, y, z</span>라 하세요.",
        // EN: The equations are <span class="chem">x + y + z = 40000</span>, <span class="chem">0.026x + 0.034y + 0.051z = 1437.51</span> and <span class="chem">x - z = 2000</span>.
        "방정식은 <span class=\"chem\">x + y + z = 40000</span>, <span class=\"chem\">0.026x + 0.034y + 0.051z = 1437.51</span>, <span class=\"chem\">x - z = 2000</span>이에요.",
        // EN: Enter the augmented matrix in your GDC (or use the simultaneous-equation solver) and read off <span class="chem">y</span>.
        "첨가행렬을 GDC에 입력하고(또는 연립방정식 풀이 기능을 사용하고) <span class=\"chem\">y</span>를 읽으세요.",
      ],
      // EN: <p>Solving <span class="chem">x + y + z = 40000</span>, <span class="chem">0.026x + 0.034y + 0.051z = 1437.51</span>, <span class="chem">x - z = 2000</span> with the GDC gives <span class="chem">x = 12390</span>, <span class="chem">y = 17220</span>, <span class="chem">z = 10390</span>. Check: <span class="chem">322.14 + 585.48 + 529.89 = 1437.51</span>. So <span class="chem">$17 220.00</span> is invested in account B.</p>
      solution: "<p><span class=\"chem\">x + y + z = 40000</span>, <span class=\"chem\">0.026x + 0.034y + 0.051z = 1437.51</span>, <span class=\"chem\">x - z = 2000</span>을 GDC로 풀면 <span class=\"chem\">x = 12390</span>, <span class=\"chem\">y = 17220</span>, <span class=\"chem\">z = 10390</span>이에요. 확인: <span class=\"chem\">322.14 + 585.48 + 529.89 = 1437.51</span>. 따라서 계좌 B에 투자한 금액은 <span class=\"chem\">$17 220.00</span>이에요.</p>",
    },

    // ── t1-5-q037 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q037": {
      // EN: An archaeologist finds three fragments of a circular plate. On a coordinate grid (units: cm) the fragments lie at the points <span class="chem">(1.2, 3.5)</span>, <span class="chem">(-2.4, 1.1)</span> and <span class="chem">(4.0, -0.6)</span>, all on the rim of the plate. The rim has an equation of the form <span class="chem">x^2 + y^2 + Dx + Ey + F = 0</span>. Find the radius of the plate.
      stem: "한 고고학자가 원형 접시의 조각 세 개를 발견했다. 좌표평면(단위: cm)에서 조각들은 점 <span class=\"chem\">(1.2, 3.5)</span>, <span class=\"chem\">(-2.4, 1.1)</span>, <span class=\"chem\">(4.0, -0.6)</span>에 있고, 모두 접시의 테두리 위에 있다. 테두리의 방정식은 <span class=\"chem\">x^2 + y^2 + Dx + Ey + F = 0</span> 꼴이다. 접시의 반지름을 구하시오 (Find).",
      hints: [
        // EN: Decode: the equation is not linear in <span class="chem">x</span> and <span class="chem">y</span>, but it IS linear in the unknown constants <span class="chem">D, E, F</span>. Substituting each point gives one linear equation, so this is a hidden <span class="chem">3 × 3</span> system.
        "해석: 이 방정식은 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>에 대해서는 일차가 아니지만, 미지의 상수 <span class=\"chem\">D, E, F</span>에 대해서는 일차예요. 각 점을 대입하면 일차방정식이 하나씩 나오므로, 이것은 숨은 <span class=\"chem\">3 × 3</span> 연립방정식이에요.",
        // EN: For <span class="chem">(1.2, 3.5)</span>: <span class="chem">1.2D + 3.5E + F = -(1.2^2 + 3.5^2) = -13.69</span>. Form the other two equations the same way and solve with your GDC.
        "<span class=\"chem\">(1.2, 3.5)</span>의 경우: <span class=\"chem\">1.2D + 3.5E + F = -(1.2^2 + 3.5^2) = -13.69</span>. 나머지 두 방정식도 같은 방법으로 세우고 GDC로 푸세요.",
        // EN: Complete the square: the centre is <span class="chem">(-D/2, -E/2)</span> and <span class="chem">r^2 = D^2/4 + E^2/4 - F</span>.
        "완전제곱식으로 바꾸세요: 중심은 <span class=\"chem\">(-D/2, -E/2)</span>이고 <span class=\"chem\">r^2 = D^2/4 + E^2/4 - F</span>예요.",
      ],
      // EN: <p><strong>Decode:</strong> the unknowns are the coefficients <span class="chem">D, E, F</span>, and each point gives a linear equation in them.</p><p><span class="chem">1.2D + 3.5E + F = -13.69</span>, <span class="chem">-2.4D + 1.1E + F = -6.97</span>, <span class="chem">4.0D - 0.6E + F = -16.36</span>. The GDC gives <span class="chem">D = -1.5810...</span>, <span class="chem">E = -0.42849...</span>, <span class="chem">F = -10.2931...</span>. Then <span class="chem">r = sqrt(D^2/4 + E^2/4 - F) = 3.31</span> cm (3 s.f.).</p>
      solution: "<p><strong>해석:</strong> 미지수는 계수 <span class=\"chem\">D, E, F</span>이고, 각 점은 이들에 대한 일차방정식을 줘요.</p><p><span class=\"chem\">1.2D + 3.5E + F = -13.69</span>, <span class=\"chem\">-2.4D + 1.1E + F = -6.97</span>, <span class=\"chem\">4.0D - 0.6E + F = -16.36</span>. GDC로 <span class=\"chem\">D = -1.5810...</span>, <span class=\"chem\">E = -0.42849...</span>, <span class=\"chem\">F = -10.2931...</span>을 얻어요. 따라서 <span class=\"chem\">r = sqrt(D^2/4 + E^2/4 - F) = 3.31</span> cm (유효숫자 3자리)예요.</p>",
    },

    // ── t1-5-q038 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q038": {
      // EN: A sports nutritionist mixes three foods, P, Q and R. The table gives the mass in grams of protein, carbohydrate and fat in <strong>100 g</strong> of each food.<br><span class="mono">Food: protein | carbohydrate | fat</span><br><span class="mono">P: 12.5 | 8.2 | 3.1</span><br><span class="mono">Q: 3.4 | 22.6 | 1.2</span><br><span class="mono">R: 7.8 | 4.5 | 14.3</span><br>A meal must contain exactly 48 g of protein, 95 g of carbohydrate and 36 g of fat. Find the mass of food Q in the meal, in grams.
      stem: "한 스포츠 영양사가 세 식품 P, Q, R을 섞는다. 표는 각 식품 <strong>100 g</strong>에 들어 있는 단백질, 탄수화물, 지방의 질량(그램)을 나타낸다.<br><span class=\"mono\">Food: protein | carbohydrate | fat</span><br><span class=\"mono\">P: 12.5 | 8.2 | 3.1</span><br><span class=\"mono\">Q: 3.4 | 22.6 | 1.2</span><br><span class=\"mono\">R: 7.8 | 4.5 | 14.3</span><br>한 끼 식사에는 단백질 48 g, 탄수화물 95 g, 지방 36 g이 정확히 들어 있어야 한다. 이 식사에 들어가는 식품 Q의 질량을 그램 단위로 구하시오 (Find).",
      hints: [
        // EN: Decode: let <span class="chem">p, q, r</span> be the masses in units of 100 g. Each nutrient gives one linear equation.
        "해석: <span class=\"chem\">p, q, r</span>를 100 g 단위의 질량이라 하세요. 각 영양소마다 일차방정식이 하나씩 나와요.",
        // EN: Protein: <span class="chem">12.5p + 3.4q + 7.8r = 48</span>. Write the carbohydrate and fat equations, then solve with your GDC.
        "단백질: <span class=\"chem\">12.5p + 3.4q + 7.8r = 48</span>. 탄수화물과 지방의 방정식을 쓰고 GDC로 푸세요.",
        // EN: Remember to convert <span class="chem">q</span> back to grams by multiplying by 100.
        "<span class=\"chem\">q</span>에 100을 곱해 그램으로 바꾸는 것을 잊지 마세요.",
      ],
      // EN: <p><span class="chem">12.5p + 3.4q + 7.8r = 48</span>, <span class="chem">8.2p + 22.6q + 4.5r = 95</span>, <span class="chem">3.1p + 1.2q + 14.3r = 36</span>. The GDC gives <span class="chem">p = 1.8178...</span>, <span class="chem">q = 3.1742...</span>, <span class="chem">r = 1.8570...</span> (hundreds of grams). So the meal contains <span class="chem">317</span> g of food Q (3 s.f.).</p>
      solution: "<p><span class=\"chem\">12.5p + 3.4q + 7.8r = 48</span>, <span class=\"chem\">8.2p + 22.6q + 4.5r = 95</span>, <span class=\"chem\">3.1p + 1.2q + 14.3r = 36</span>. GDC로 <span class=\"chem\">p = 1.8178...</span>, <span class=\"chem\">q = 3.1742...</span>, <span class=\"chem\">r = 1.8570...</span>(백 그램 단위)을 얻어요. 따라서 식사에는 식품 Q가 <span class=\"chem\">317</span> g 들어 있어요 (유효숫자 3자리).</p>",
    },

    // ── t1-5-q039 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q039": {
      // EN: The temperature <span class="chem">T</span> °C in a greenhouse <span class="chem">t</span> hours after midnight is modelled by <span class="chem">T(t) = a sin((pi t)/12) + b cos((pi t)/12) + d</span>, for <span class="chem">0 &lt;= t &lt;= 24</span>. Sensors record <span class="chem">14.2</span> °C at 03:00, <span class="chem">22.9</span> °C at 10:00 and <span class="chem">11.5</span> °C at 18:00. Find the maximum temperature predicted by the model.
      stem: "자정으로부터 <span class=\"chem\">t</span>시간 후 온실의 온도 <span class=\"chem\">T</span> °C는 <span class=\"chem\">0 &lt;= t &lt;= 24</span>에서 <span class=\"chem\">T(t) = a sin((pi t)/12) + b cos((pi t)/12) + d</span>로 모델링된다. 센서는 03:00에 <span class=\"chem\">14.2</span> °C, 10:00에 <span class=\"chem\">22.9</span> °C, 18:00에 <span class=\"chem\">11.5</span> °C를 기록했다. 이 모델이 예측하는 최고 온도를 구하시오 (Find).",
      hints: [
        // EN: Decode: for a fixed time <span class="chem">t</span>, the values <span class="chem">sin((pi t)/12)</span> and <span class="chem">cos((pi t)/12)</span> are just numbers, so each reading gives a LINEAR equation in <span class="chem">a, b, d</span>. Remember the times are <span class="chem">t = 3, 10, 18</span>, and use radians.
        "해석: 시각 <span class=\"chem\">t</span>를 고정하면 <span class=\"chem\">sin((pi t)/12)</span>와 <span class=\"chem\">cos((pi t)/12)</span>는 그냥 수이므로, 각 측정값은 <span class=\"chem\">a, b, d</span>에 대한 일차방정식을 줘요. 시각은 <span class=\"chem\">t = 3, 10, 18</span>이고 라디안을 쓴다는 점을 기억하세요.",
        // EN: At <span class="chem">t = 3</span>: <span class="chem">a sin(pi/4) + b cos(pi/4) + d = 14.2</span>. At <span class="chem">t = 18</span>: <span class="chem">sin(3pi/2) = -1</span> and <span class="chem">cos(3pi/2) = 0</span>, so <span class="chem">-a + d = 11.5</span>.
        "<span class=\"chem\">t = 3</span>일 때: <span class=\"chem\">a sin(pi/4) + b cos(pi/4) + d = 14.2</span>. <span class=\"chem\">t = 18</span>일 때: <span class=\"chem\">sin(3pi/2) = -1</span>, <span class=\"chem\">cos(3pi/2) = 0</span>이므로 <span class=\"chem\">-a + d = 11.5</span>.",
        // EN: Solve for <span class="chem">a, b, d</span> with your GDC, then graph <span class="chem">T(t)</span> on <span class="chem">0 &lt;= t &lt;= 24</span> and find its maximum.
        "GDC로 <span class=\"chem\">a, b, d</span>를 구한 다음, <span class=\"chem\">0 &lt;= t &lt;= 24</span>에서 <span class=\"chem\">T(t)</span>의 그래프를 그려 최댓값을 구하세요.",
      ],
      // EN: <p><strong>Decode:</strong> the model is not linear in <span class="chem">t</span>, but it is linear in the unknown coefficients, so three readings give a <span class="chem">3 × 3</span> system.</p><p>The GDC gives <span class="chem">a = 4.0957...</span>, <span class="chem">b = -6.0696...</span>, <span class="chem">d = 15.5957...</span>. Graphing <span class="chem">T(t)</span> gives a maximum of <span class="chem">22.9</span> °C (3 s.f.), at about <span class="chem">t = 10.2</span> (about 10:13). (Equivalently, <span class="chem">T_{max} = d + sqrt(a^2 + b^2)</span>.)</p>
      solution: "<p><strong>해석:</strong> 이 모델은 <span class=\"chem\">t</span>에 대해서는 일차가 아니지만 미지의 계수에 대해서는 일차이므로, 세 측정값으로 <span class=\"chem\">3 × 3</span> 연립방정식을 얻어요.</p><p>GDC로 <span class=\"chem\">a = 4.0957...</span>, <span class=\"chem\">b = -6.0696...</span>, <span class=\"chem\">d = 15.5957...</span>을 얻어요. <span class=\"chem\">T(t)</span>의 그래프를 그리면 최댓값은 <span class=\"chem\">22.9</span> °C (유효숫자 3자리)이고, 약 <span class=\"chem\">t = 10.2</span>(약 10:13)에서 나타나요. (동등하게 <span class=\"chem\">T_{max} = d + sqrt(a^2 + b^2)</span>.)</p>",
    },

    // ── t1-5-q040 · numeric · challenge · AHL · AHL 1.16 · 7 marks
    "t1-5-q040": {
      // EN: The concentration <span class="chem">C</span> mg L<sup>−1</sup> of a drug in a patient’s blood <span class="chem">t</span> hours after an injection is modelled by <span class="chem">C = A t^p e^{qt}</span>, <span class="chem">t &gt; 0</span>, where <span class="chem">A, p, q</span> are constants. Measurements give <span class="chem">C = 4.2</span> at <span class="chem">t = 1</span>, <span class="chem">C = 6.9</span> at <span class="chem">t = 3</span> and <span class="chem">C = 3.8</span> at <span class="chem">t = 6</span>. By taking natural logarithms, find the time at which the model predicts the maximum concentration.
      stem: "주사 후 <span class=\"chem\">t</span>시간이 지났을 때 환자 혈액 속 약물의 농도 <span class=\"chem\">C</span> mg L<sup>−1</sup>는 <span class=\"chem\">A, p, q</span>가 상수일 때 <span class=\"chem\">C = A t^p e^{qt}</span>, <span class=\"chem\">t &gt; 0</span>으로 모델링된다. 측정 결과 <span class=\"chem\">t = 1</span>에서 <span class=\"chem\">C = 4.2</span>, <span class=\"chem\">t = 3</span>에서 <span class=\"chem\">C = 6.9</span>, <span class=\"chem\">t = 6</span>에서 <span class=\"chem\">C = 3.8</span>이었다. 자연로그를 취하여, 이 모델이 최대 농도를 예측하는 시각을 구하시오 (Find).",
      hints: [
        // EN: Decode: <span class="chem">ln C = ln A + p ln t + qt</span> is linear in the three unknowns <span class="chem">ln A</span>, <span class="chem">p</span> and <span class="chem">q</span>. So the data give a <span class="chem">3 × 3</span> linear system.
        "해석: <span class=\"chem\">ln C = ln A + p ln t + qt</span>는 세 미지수 <span class=\"chem\">ln A</span>, <span class=\"chem\">p</span>, <span class=\"chem\">q</span>에 대해 일차예요. 따라서 데이터로 <span class=\"chem\">3 × 3</span> 연립일차방정식을 얻어요.",
        // EN: At <span class="chem">t = 1</span>, <span class="chem">ln 1 = 0</span>, so <span class="chem">ln A + q = ln 4.2</span>. Write the other two equations using <span class="chem">ln 3</span> and <span class="chem">ln 6</span>, and solve with your GDC.
        "<span class=\"chem\">t = 1</span>일 때 <span class=\"chem\">ln 1 = 0</span>이므로 <span class=\"chem\">ln A + q = ln 4.2</span>. <span class=\"chem\">ln 3</span>과 <span class=\"chem\">ln 6</span>을 이용해 나머지 두 방정식을 쓰고 GDC로 푸세요.",
        // EN: Then <span class="chem">dC/dt = A t^{p-1} e^{qt}(p + qt)</span>, which is zero when <span class="chem">t = -p/q</span>. (You can also graph <span class="chem">C</span> and use the maximum feature.)
        "그러면 <span class=\"chem\">dC/dt = A t^{p-1} e^{qt}(p + qt)</span>이고, 이는 <span class=\"chem\">t = -p/q</span>일 때 0이에요. (<span class=\"chem\">C</span>의 그래프를 그려 최댓값 기능을 써도 돼요.)",
      ],
      // EN: <p><strong>Decode:</strong> logarithms turn the product model into a linear equation in <span class="chem">ln A, p, q</span>.</p><p><span class="chem">ln A + q = ln 4.2</span>, <span class="chem">ln A + p ln 3 + 3q = ln 6.9</span>, <span class="chem">ln A + p ln 6 + 6q = ln 3.8</span>. The GDC gives <span class="chem">p = 1.4047...</span>, <span class="chem">q = -0.52340...</span>, <span class="chem">A = 7.0886...</span>. The maximum is at <span class="chem">t = -p/q = 2.68</span> hours (3 s.f.).</p>
      solution: "<p><strong>해석:</strong> 로그를 취하면 곱 꼴의 모델이 <span class=\"chem\">ln A, p, q</span>에 대한 일차방정식이 돼요.</p><p><span class=\"chem\">ln A + q = ln 4.2</span>, <span class=\"chem\">ln A + p ln 3 + 3q = ln 6.9</span>, <span class=\"chem\">ln A + p ln 6 + 6q = ln 3.8</span>. GDC로 <span class=\"chem\">p = 1.4047...</span>, <span class=\"chem\">q = -0.52340...</span>, <span class=\"chem\">A = 7.0886...</span>을 얻어요. 최댓값은 <span class=\"chem\">t = -p/q = 2.68</span>시간 (유효숫자 3자리)에서 나타나요.</p>",
    },

    // ── t1-5-q041 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q041": {
      // EN: A country has three regions, A, B and C, with a total population of 2.4 million that stays constant. Each year:<br>• of the people in A, 85% stay, 10% move to B and 5% move to C;<br>• of the people in B, 75% stay, 15% move to A and 10% move to C;<br>• of the people in C, 80% stay, 12% move to A and 8% move to B.<br>In the long run the population of each region no longer changes from one year to the next. Find the long-run population of region B, in millions.
      stem: "어느 나라에는 세 지역 A, B, C가 있고, 총인구는 2.4백만 명으로 일정하다. 매년:<br>• A의 사람들 중 85%는 남고, 10%는 B로, 5%는 C로 이동한다;<br>• B의 사람들 중 75%는 남고, 15%는 A로, 10%는 C로 이동한다;<br>• C의 사람들 중 80%는 남고, 12%는 A로, 8%는 B로 이동한다.<br>장기적으로 각 지역의 인구는 해마다 더 이상 변하지 않는다. 지역 B의 장기적인 인구를 백만 명 단위로 구하시오 (Find).",
      hints: [
        // EN: Decode: “no longer changes” means each region’s population next year equals its population this year. Write a balance equation for each region with unknowns <span class="chem">a, b, c</span> (millions).
        "해석: “더 이상 변하지 않는다”는 각 지역의 내년 인구가 올해 인구와 같다는 뜻이에요. 미지수 <span class=\"chem\">a, b, c</span>(백만 명)를 써서 각 지역의 균형 방정식을 세우세요.",
        // EN: Region A: <span class="chem">a = 0.85a + 0.15b + 0.12c</span>. Region B: <span class="chem">b = 0.10a + 0.75b + 0.08c</span>. The three balance equations are dependent (the GDC shows a row of zeros), so you must also use <span class="chem">a + b + c = 2.4</span>.
        "지역 A: <span class=\"chem\">a = 0.85a + 0.15b + 0.12c</span>. 지역 B: <span class=\"chem\">b = 0.10a + 0.75b + 0.08c</span>. 세 균형 방정식은 종속이므로(GDC에 영행이 나타나요) <span class=\"chem\">a + b + c = 2.4</span>도 함께 써야 해요.",
        // EN: Solve two balance equations together with <span class="chem">a + b + c = 2.4</span> on your GDC.
        "균형 방정식 두 개와 <span class=\"chem\">a + b + c = 2.4</span>를 함께 GDC로 푸세요.",
      ],
      // EN: <p><strong>Decode:</strong> a steady state is a linear system. The three balance equations only have rank 2 (people are neither created nor lost), which is why the total-population equation is needed.</p><p><span class="chem">-0.15a + 0.15b + 0.12c = 0</span>, <span class="chem">0.10a - 0.25b + 0.08c = 0</span>, <span class="chem">a + b + c = 2.4</span>. The GDC gives <span class="chem">a = 1.139</span>, <span class="chem">b = 0.6508...</span>, <span class="chem">c = 0.6102</span>. So region B has about <span class="chem">0.651</span> million people (3 s.f.). Check with C: <span class="chem">0.05a + 0.10b + 0.80c = c</span> holds.</p>
      solution: "<p><strong>해석:</strong> 정상 상태는 연립일차방정식이에요. 세 균형 방정식의 랭크(rank)는 2뿐이므로(사람이 새로 생기거나 사라지지 않으므로) 총인구 방정식이 필요해요.</p><p><span class=\"chem\">-0.15a + 0.15b + 0.12c = 0</span>, <span class=\"chem\">0.10a - 0.25b + 0.08c = 0</span>, <span class=\"chem\">a + b + c = 2.4</span>. GDC로 <span class=\"chem\">a = 1.139</span>, <span class=\"chem\">b = 0.6508...</span>, <span class=\"chem\">c = 0.6102</span>를 얻어요. 따라서 지역 B의 인구는 약 <span class=\"chem\">0.651</span>백만 명 (유효숫자 3자리)이에요. C로 확인: <span class=\"chem\">0.05a + 0.10b + 0.80c = c</span>가 성립해요.</p>",
      // EN: million
      unit: "백만 명",
    },

    // ── t1-5-q042 · numeric · exam · AHL · AHL 1.16 · 5 marks
    "t1-5-q042": {
      // EN: Consider the system<br><span class="chem">x + 2y + z = 3</span><br><span class="chem">2x + ky + 3z = 1</span><br><span class="chem">x + y + kz = 2</span>, where <span class="chem">k \in \mathbb{R}</span>.<br>By eliminating <span class="chem">x</span>, find the larger value of <span class="chem">k</span> for which the system does not have a unique solution.
      stem: "연립방정식<br><span class=\"chem\">x + 2y + z = 3</span><br><span class=\"chem\">2x + ky + 3z = 1</span><br><span class=\"chem\">x + y + kz = 2</span> (<span class=\"chem\">k \\in \\mathbb{R}</span>)를 생각하자.<br><span class=\"chem\">x</span>를 소거하여, 연립방정식이 유일한 해를 갖지 않도록 하는 <span class=\"chem\">k</span>의 값 중 더 큰 값을 구하시오 (Find).",
      hints: [
        // EN: <span class="chem">R_2 - 2R_1</span> gives <span class="chem">(k - 4)y + z = -5</span> and <span class="chem">R_3 - R_1</span> gives <span class="chem">-y + (k - 1)z = -1</span>.
        "<span class=\"chem\">R_2 - 2R_1</span>에서 <span class=\"chem\">(k - 4)y + z = -5</span>, <span class=\"chem\">R_3 - R_1</span>에서 <span class=\"chem\">-y + (k - 1)z = -1</span>을 얻어요.",
        // EN: Eliminate <span class="chem">z</span> (or <span class="chem">y</span>) from these two. The coefficient that remains is <span class="chem">(k - 4)(k - 1) + 1 = k^2 - 5k + 5</span>.
        "이 두 식에서 <span class=\"chem\">z</span>(또는 <span class=\"chem\">y</span>)를 소거하세요. 남는 계수는 <span class=\"chem\">(k - 4)(k - 1) + 1 = k^2 - 5k + 5</span>예요.",
        // EN: The system fails to have a unique solution when this coefficient is zero. Solve <span class="chem">k^2 - 5k + 5 = 0</span> with your GDC.
        "이 계수가 0일 때 연립방정식은 유일한 해를 갖지 않아요. GDC로 <span class=\"chem\">k^2 - 5k + 5 = 0</span>을 푸세요.",
      ],
      // EN: <p>From <span class="chem">(k - 4)y + z = -5</span> and <span class="chem">-y + (k - 1)z = -1</span>: multiply the first by <span class="chem">(k - 1)</span> and subtract the second to get <span class="chem">(k^2 - 5k + 5)y = -5k + 6</span>. No unique solution when <span class="chem">k^2 - 5k + 5 = 0</span>, so <span class="chem">k = (5 +- sqrt(5))/2</span>, i.e. <span class="chem">k = 1.38</span> or <span class="chem">k = 3.62</span>. The larger value is <span class="chem">k = 3.62</span> (3 s.f.). (At these values <span class="chem">-5k + 6 != 0</span>, so the system is in fact inconsistent.)</p>
      solution: "<p><span class=\"chem\">(k - 4)y + z = -5</span>와 <span class=\"chem\">-y + (k - 1)z = -1</span>에서: 첫 번째 식에 <span class=\"chem\">(k - 1)</span>을 곱하고 두 번째 식을 빼면 <span class=\"chem\">(k^2 - 5k + 5)y = -5k + 6</span>. <span class=\"chem\">k^2 - 5k + 5 = 0</span>일 때 유일한 해를 갖지 않으므로 <span class=\"chem\">k = (5 +- sqrt(5))/2</span>, 즉 <span class=\"chem\">k = 1.38</span> 또는 <span class=\"chem\">k = 3.62</span>예요. 더 큰 값은 <span class=\"chem\">k = 3.62</span> (유효숫자 3자리)예요. (이 값들에서는 <span class=\"chem\">-5k + 6 != 0</span>이므로 실제로 연립방정식은 불능이에요.)</p>",
    },

    // ── t1-5-q043 · short · exam · AHL · AHL 1.16 · 9 marks
    "t1-5-q043": {
      // EN: Consider the system<br><span class="chem">x + y + z = 1</span><br><span class="chem">2x - y + 3z = 4</span><br><span class="chem">x + ky + 2z = c</span>, where <span class="chem">k, c \in \mathbb{R}</span>.<br>(a) Show that row reduction leads to the equation <span class="chem">(k + 2)y = c - 3</span>. [3 marks]<br>(b) Write down the value of <span class="chem">k</span> for which the system does not have a unique solution. [1 mark]<br>(c) For this value of <span class="chem">k</span>, state the value of <span class="chem">c</span> for which the system has infinitely many solutions, and find the general solution. [3 marks]<br>(d) Use your GDC to solve the system when <span class="chem">k = 0.35</span> and <span class="chem">c = -1.8</span>, giving each value correct to 3 significant figures. [2 marks]
      stem: "연립방정식<br><span class=\"chem\">x + y + z = 1</span><br><span class=\"chem\">2x - y + 3z = 4</span><br><span class=\"chem\">x + ky + 2z = c</span> (<span class=\"chem\">k, c \\in \\mathbb{R}</span>)를 생각하자.<br>(a) 행 연산을 하면 방정식 <span class=\"chem\">(k + 2)y = c - 3</span>이 나옴을 보이시오 (Show that). [3 marks]<br>(b) 연립방정식이 유일한 해를 갖지 않도록 하는 <span class=\"chem\">k</span>의 값을 쓰시오 (Write down). [1 mark]<br>(c) 이 <span class=\"chem\">k</span>의 값에 대해 연립방정식이 무수히 많은 해를 갖도록 하는 <span class=\"chem\">c</span>의 값을 답하고 (State), 일반해를 구하시오 (Find). [3 marks]<br>(d) GDC를 이용하여 <span class=\"chem\">k = 0.35</span>, <span class=\"chem\">c = -1.8</span>일 때 연립방정식을 풀고, 각 값을 유효숫자 3자리로 나타내시오. [2 marks]",
      hints: [
        // EN: In (a) eliminate <span class="chem">x</span> from rows 2 and 3 first, then eliminate <span class="chem">z</span>, which now has coefficient 1 in both rows.
        "(a)에서는 먼저 2행과 3행에서 <span class=\"chem\">x</span>를 소거한 다음, 이제 두 행 모두에서 계수가 1인 <span class=\"chem\">z</span>를 소거하세요.",
        // EN: For (c), the final row must read <span class="chem">0y = 0</span>. Use <span class="chem">y</span> as the parameter because it is the variable whose equation vanished.
        "(c)에서는 마지막 행이 <span class=\"chem\">0y = 0</span>이어야 해요. 식이 사라진 변수인 <span class=\"chem\">y</span>를 매개변수로 쓰세요.",
        // EN: For (d), enter the augmented matrix <span class="chem">[1, 1, 1 | 1; 2, -1, 3 | 4; 1, 0.35, 2 | -1.8]</span> and use rref or the system solver.
        "(d)에서는 첨가행렬 <span class=\"chem\">[1, 1, 1 | 1; 2, -1, 3 | 4; 1, 0.35, 2 | -1.8]</span>을 입력하고 rref나 연립방정식 풀이 기능을 쓰세요.",
      ],
      // EN: <p>(a) The two reduced rows are <span class="chem">-3y + z = 2</span> and <span class="chem">(k - 1)y + z = c - 1</span>; their difference is <span class="chem">(k + 2)y = c - 3</span>.<br>(c) Check the general solution with <span class="chem">lambda = 0</span>: <span class="chem">(-1, 0, 2)</span> gives <span class="chem">1, 4, 3</span> in the three equations (with <span class="chem">k = -2</span>, <span class="chem">c = 3</span>).<br>(d) The GDC gives <span class="chem">(7.17, -2.04, -4.13)</span>; part (a) confirms <span class="chem">y = (-1.8 - 3)/(0.35 + 2) = -2.04</span>.</p>
      solution: "<p>(a) 정리된 두 행은 <span class=\"chem\">-3y + z = 2</span>와 <span class=\"chem\">(k - 1)y + z = c - 1</span>이고, 그 차가 <span class=\"chem\">(k + 2)y = c - 3</span>이에요.<br>(c) <span class=\"chem\">lambda = 0</span>으로 일반해를 확인: <span class=\"chem\">(-1, 0, 2)</span>는 세 식에서 <span class=\"chem\">1, 4, 3</span>을 줘요 (<span class=\"chem\">k = -2</span>, <span class=\"chem\">c = 3</span>일 때).<br>(d) GDC로 <span class=\"chem\">(7.17, -2.04, -4.13)</span>을 얻고, (a)로도 <span class=\"chem\">y = (-1.8 - 3)/(0.35 + 2) = -2.04</span>임을 확인할 수 있어요.</p>",
      // EN: <p>(a) <span class="chem">R_2 - 2R_1: -3y + z = 2</span>. <span class="chem">R_3 - R_1: (k - 1)y + z = c - 1</span>. Subtracting: <span class="chem">(k - 1 + 3)y = c - 1 - 2</span>, i.e. <span class="chem">(k + 2)y = c - 3</span> (AG).<br>(b) <span class="chem">k = -2</span>.<br>(c) <span class="chem">c = 3</span>. Let <span class="chem">y = lambda</span>: <span class="chem">z = 2 + 3lambda</span> and <span class="chem">x = 1 - y - z = -1 - 4lambda</span>, so <span class="chem">(x, y, z) = (-1 - 4lambda, lambda, 2 + 3lambda)</span>, <span class="chem">lambda \in \mathbb{R}</span>.<br>(d) <span class="chem">x = 7.17</span>, <span class="chem">y = -2.04</span>, <span class="chem">z = -4.13</span> (exactly <span class="chem">y = -96/47</span>, <span class="chem">x = 337/47</span>, <span class="chem">z = -194/47</span>).</p>
      answer: "<p>(a) <span class=\"chem\">R_2 - 2R_1: -3y + z = 2</span>. <span class=\"chem\">R_3 - R_1: (k - 1)y + z = c - 1</span>. 빼면 <span class=\"chem\">(k - 1 + 3)y = c - 1 - 2</span>, 즉 <span class=\"chem\">(k + 2)y = c - 3</span> (AG).<br>(b) <span class=\"chem\">k = -2</span>.<br>(c) <span class=\"chem\">c = 3</span>. <span class=\"chem\">y = lambda</span>라 하면 <span class=\"chem\">z = 2 + 3lambda</span>, <span class=\"chem\">x = 1 - y - z = -1 - 4lambda</span>이므로 <span class=\"chem\">(x, y, z) = (-1 - 4lambda, lambda, 2 + 3lambda)</span>, <span class=\"chem\">lambda \\in \\mathbb{R}</span>.<br>(d) <span class=\"chem\">x = 7.17</span>, <span class=\"chem\">y = -2.04</span>, <span class=\"chem\">z = -4.13</span> (정확히는 <span class=\"chem\">y = -96/47</span>, <span class=\"chem\">x = 337/47</span>, <span class=\"chem\">z = -194/47</span>).</p>",
      markscheme: [
        // EN: M1: (a) Eliminates x using R₂ − 2R₁ and R₃ − R₁.
        "M1: (a) R₂ − 2R₁과 R₃ − R₁을 이용해 x를 소거함.",
        // EN: A1: (a) Obtains −3y + z = 2 and (k − 1)y + z = c − 1.
        "A1: (a) −3y + z = 2와 (k − 1)y + z = c − 1을 얻음.",
        // EN: A1: (a) Subtracts the two reduced rows correctly, leading to (k + 2)y = c − 3 AG (no mark for the given line).
        "A1: (a) 정리된 두 행을 올바르게 빼서 (k + 2)y = c − 3을 이끌어 냄 AG (주어진 줄 자체에는 점수 없음).",
        // EN: A1: (b) k = −2.
        "A1: (b) k = −2.",
        // EN: A1: (c) c = 3.
        "A1: (c) c = 3.",
        // EN: M1: (c) Introduces a parameter (e.g. y = λ) and back-substitutes.
        "M1: (c) 매개변수를 도입하고 (예: y = λ) 역으로 대입함.",
        // EN: A1: (c) (x, y, z) = (−1 − 4λ, λ, 2 + 3λ), λ ∈ ℝ (or equivalent).
        "A1: (c) (x, y, z) = (−1 − 4λ, λ, 2 + 3λ), λ ∈ ℝ (또는 동등한 식).",
        // EN: A1: (d) Correct use of technology: y = −2.04 (and either other value).
        "A1: (d) 공학 도구를 올바르게 사용함: y = −2.04 (및 다른 값 중 하나).",
        // EN: A1: (d) x = 7.17, y = −2.04, z = −4.13.
        "A1: (d) x = 7.17, y = −2.04, z = −4.13.",
      ],
    },

    // ── t1-5-q044 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q044": {
      // EN: Three planes have equations<br><span class="chem">Π_1: 2.1x - 0.8y + 1.5z = 4.2</span><br><span class="chem">Π_2: 0.6x + 1.9y - 2.2z = -1.3</span><br><span class="chem">Π_3: 1.4x + 0.7y + 3.1z = 6.8</span>.<br>The three planes meet at a single point. Find the <span class="chem">z</span>-coordinate of this point.
      stem: "세 평면의 방정식이<br><span class=\"chem\">Π_1: 2.1x - 0.8y + 1.5z = 4.2</span><br><span class=\"chem\">Π_2: 0.6x + 1.9y - 2.2z = -1.3</span><br><span class=\"chem\">Π_3: 1.4x + 0.7y + 3.1z = 6.8</span>이다.<br>세 평면은 한 점에서 만난다. 이 점의 <span class=\"chem\">z</span>좌표를 구하시오 (Find).",
      hints: [
        // EN: The common point is the solution of the three equations taken together.
        "공통인 점은 세 방정식을 연립한 해예요.",
        // EN: Enter the augmented matrix <span class="chem">[2.1, -0.8, 1.5 | 4.2; 0.6, 1.9, -2.2 | -1.3; 1.4, 0.7, 3.1 | 6.8]</span> and use rref or the simultaneous-equation solver.
        "첨가행렬 <span class=\"chem\">[2.1, -0.8, 1.5 | 4.2; 0.6, 1.9, -2.2 | -1.3; 1.4, 0.7, 3.1 | 6.8]</span>을 입력하고 rref나 연립방정식 풀이 기능을 쓰세요.",
      ],
      // EN: <p>The GDC gives the unique solution <span class="chem">x = 1.1859...</span>, <span class="chem">y = 0.68262...</span>, <span class="chem">z = 1.5039...</span>, so <span class="chem">z = 1.50</span> (3 s.f.). Check in <span class="chem">Π_1</span>: <span class="chem">2.1(1.1859) - 0.8(0.6826) + 1.5(1.5039) = 4.20</span>.</p>
      solution: "<p>GDC로 유일한 해 <span class=\"chem\">x = 1.1859...</span>, <span class=\"chem\">y = 0.68262...</span>, <span class=\"chem\">z = 1.5039...</span>를 얻으므로 <span class=\"chem\">z = 1.50</span> (유효숫자 3자리)예요. <span class=\"chem\">Π_1</span>로 확인: <span class=\"chem\">2.1(1.1859) - 0.8(0.6826) + 1.5(1.5039) = 4.20</span>.</p>",
    },

    // ── t1-5-q045 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q045": {
      // EN: A foundry melts together three alloys to make 800 kg of a new bronze. By mass, alloy A is 62% copper, 28% zinc and 10% tin; alloy B is 48% copper, 35% zinc and 17% tin; alloy C is 70% copper, 12% zinc and 18% tin. The new bronze must be 58% copper, 26% zinc and 16% tin. Find the mass of alloy C that is used.
      stem: "한 주조 공장이 세 가지 합금을 함께 녹여 새 청동 800 kg을 만든다. 질량 기준으로 합금 A는 구리 62%, 아연 28%, 주석 10%이고, 합금 B는 구리 48%, 아연 35%, 주석 17%이며, 합금 C는 구리 70%, 아연 12%, 주석 18%이다. 새 청동은 구리 58%, 아연 26%, 주석 16%여야 한다. 사용하는 합금 C의 질량을 구하시오 (Find).",
      hints: [
        // EN: Decode: there are three unknown masses <span class="chem">a, b, c</span> but four facts (total mass, copper, zinc, tin). Because the percentages in each alloy add up to 100%, one of these facts is redundant.
        "해석: 미지의 질량은 <span class=\"chem\">a, b, c</span> 세 개인데, 사실은 네 가지(총질량, 구리, 아연, 주석)예요. 각 합금의 백분율을 합하면 100%이므로 이 사실들 중 하나는 불필요해요.",
        // EN: Use <span class="chem">a + b + c = 800</span>, copper <span class="chem">0.62a + 0.48b + 0.70c = 0.58 × 800</span> and zinc <span class="chem">0.28a + 0.35b + 0.12c = 0.26 × 800</span>.
        "<span class=\"chem\">a + b + c = 800</span>, 구리 <span class=\"chem\">0.62a + 0.48b + 0.70c = 0.58 × 800</span>, 아연 <span class=\"chem\">0.28a + 0.35b + 0.12c = 0.26 × 800</span>을 쓰세요.",
        // EN: Solve with your GDC, then check that the tin equation is also satisfied.
        "GDC로 푼 다음, 주석 방정식도 만족하는지 확인하세요.",
      ],
      // EN: <p><strong>Decode:</strong> the tin condition follows from the other three (tin = total − copper − zinc), so we have exactly three independent equations.</p><p><span class="chem">a + b + c = 800</span>, <span class="chem">0.62a + 0.48b + 0.70c = 464</span>, <span class="chem">0.28a + 0.35b + 0.12c = 208</span>. The GDC gives <span class="chem">a = 152.4</span>, <span class="chem">b = 381.0</span>, <span class="chem">c = 266.7</span>. Tin check: <span class="chem">0.10(152.4) + 0.17(381.0) + 0.18(266.7) = 128 = 0.16 × 800</span>. So <span class="chem">267</span> kg of alloy C (3 s.f.).</p>
      solution: "<p><strong>해석:</strong> 주석 조건은 나머지 세 조건에서 나오므로(주석 = 전체 − 구리 − 아연), 독립인 방정식은 정확히 세 개예요.</p><p><span class=\"chem\">a + b + c = 800</span>, <span class=\"chem\">0.62a + 0.48b + 0.70c = 464</span>, <span class=\"chem\">0.28a + 0.35b + 0.12c = 208</span>. GDC로 <span class=\"chem\">a = 152.4</span>, <span class=\"chem\">b = 381.0</span>, <span class=\"chem\">c = 266.7</span>을 얻어요. 주석 확인: <span class=\"chem\">0.10(152.4) + 0.17(381.0) + 0.18(266.7) = 128 = 0.16 × 800</span>. 따라서 합금 C는 <span class=\"chem\">267</span> kg (유효숫자 3자리)이에요.</p>",
    },

    // ── t1-5-q046 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q046": {
      // EN: In an electrical circuit, Kirchhoff’s laws give the following equations for the currents <span class="chem">I_1</span>, <span class="chem">I_2</span> and <span class="chem">I_3</span> (in amperes):<br><span class="chem">I_1 - I_2 - I_3 = 0</span><br><span class="chem">4.7I_1 + 2.2I_2 = 12</span><br><span class="chem">2.2I_2 - 3.3I_3 = 5</span>.<br>Find the value of <span class="chem">I_2</span>.
      stem: "어느 전기 회로에서 키르히호프의 법칙으로 전류 <span class=\"chem\">I_1</span>, <span class=\"chem\">I_2</span>, <span class=\"chem\">I_3</span>(단위: 암페어)에 대한 다음 방정식을 얻는다:<br><span class=\"chem\">I_1 - I_2 - I_3 = 0</span><br><span class=\"chem\">4.7I_1 + 2.2I_2 = 12</span><br><span class=\"chem\">2.2I_2 - 3.3I_3 = 5</span>.<br><span class=\"chem\">I_2</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: Write each equation with all three unknowns, using a coefficient of 0 where a current is missing: for example <span class="chem">4.7I_1 + 2.2I_2 + 0I_3 = 12</span>.
        "각 방정식을 세 미지수를 모두 써서 나타내고, 빠진 전류의 계수는 0으로 쓰세요. 예: <span class=\"chem\">4.7I_1 + 2.2I_2 + 0I_3 = 12</span>.",
        // EN: Solve the <span class="chem">3 × 3</span> system with your GDC.
        "GDC로 <span class=\"chem\">3 × 3</span> 연립방정식을 푸세요.",
      ],
      // EN: <p>The augmented matrix is <span class="chem">[1, -1, -1 | 0; 4.7, 2.2, 0 | 12; 0, 2.2, -3.3 | 5]</span>. The GDC gives <span class="chem">I_1 = 1.6611</span>, <span class="chem">I_2 = 1.9058</span>, <span class="chem">I_3 = -0.24464</span>. So <span class="chem">I_2 = 1.91</span> A (3 s.f.). (The negative <span class="chem">I_3</span> means that current flows the opposite way to the arrow chosen.)</p>
      solution: "<p>첨가행렬은 <span class=\"chem\">[1, -1, -1 | 0; 4.7, 2.2, 0 | 12; 0, 2.2, -3.3 | 5]</span>이에요. GDC로 <span class=\"chem\">I_1 = 1.6611</span>, <span class=\"chem\">I_2 = 1.9058</span>, <span class=\"chem\">I_3 = -0.24464</span>를 얻어요. 따라서 <span class=\"chem\">I_2 = 1.91</span> A (유효숫자 3자리)예요. (<span class=\"chem\">I_3</span>가 음수라는 것은 그 전류가 정한 화살표와 반대 방향으로 흐른다는 뜻이에요.)</p>",
    },

    // ── t1-5-q047 · short · challenge · AHL · AHL 1.16 · 8 marks
    "t1-5-q047": {
      // EN: Consider the system<br><span class="chem">1.2x + 0.5y - z = 3.4</span><br><span class="chem">0.8x - 1.5y + 2z = 1.0</span><br><span class="chem">3.2x - 0.5y = 7.8</span>.<br>(a) A student enters the augmented matrix into a GDC and finds that rref gives a final row of zeros. Explain what this tells you about the solutions, and verify it by expressing the third equation in terms of the first two. [2 marks]<br>(b) Taking <span class="chem">z = lambda</span>, find <span class="chem">x</span> and <span class="chem">y</span> in terms of <span class="chem">lambda</span>. [4 marks]<br>(c) Find the solution of the system that also satisfies <span class="chem">x + y + z = 5</span>, giving each value correct to 3 significant figures. [2 marks]
      stem: "연립방정식<br><span class=\"chem\">1.2x + 0.5y - z = 3.4</span><br><span class=\"chem\">0.8x - 1.5y + 2z = 1.0</span><br><span class=\"chem\">3.2x - 0.5y = 7.8</span>을 생각하자.<br>(a) 한 학생이 첨가행렬을 GDC에 입력했더니 rref의 마지막 행이 모두 0이었다. 이것이 해에 대해 무엇을 알려 주는지 설명하고, 세 번째 방정식을 처음 두 방정식으로 나타내어 이를 확인하시오 (Verify). [2 marks]<br>(b) <span class=\"chem\">z = lambda</span>로 두고 <span class=\"chem\">x</span>와 <span class=\"chem\">y</span>를 <span class=\"chem\">lambda</span>로 나타내시오 (Find). [4 marks]<br>(c) <span class=\"chem\">x + y + z = 5</span>도 만족하는 연립방정식의 해를 구하고 (Find), 각 값을 유효숫자 3자리로 나타내시오. [2 marks]",
      hints: [
        // EN: Decode: a zero row in rref is the technology’s way of saying “one equation is a combination of the others”. That means a line of solutions (if consistent), not a unique point.
        "해석: rref의 영행은 공학 도구가 “한 방정식이 다른 방정식들의 결합이다”라고 알려 주는 방식이에요. 즉 유일한 한 점이 아니라 (해가 존재한다면) 직선 위의 해를 가져요.",
        // EN: Look for numbers <span class="chem">alpha, beta</span> with <span class="chem">alpha R_1 + beta R_2 = R_3</span>; start with the <span class="chem">z</span>-coefficients, <span class="chem">-alpha + 2beta = 0</span>.
        "<span class=\"chem\">alpha R_1 + beta R_2 = R_3</span>가 되는 수 <span class=\"chem\">alpha, beta</span>를 찾으세요. <span class=\"chem\">z</span>의 계수 <span class=\"chem\">-alpha + 2beta = 0</span>부터 시작하세요.",
        // EN: In (c), adding the equation <span class="chem">x + y + z = 5</span> to the first two gives a new system with a unique solution, which your GDC can solve directly.
        "(c)에서는 방정식 <span class=\"chem\">x + y + z = 5</span>를 처음 두 방정식에 더하면 유일한 해를 갖는 새 연립방정식이 되고, GDC로 바로 풀 수 있어요.",
      ],
      // EN: <p><strong>Decode:</strong> a GDC row of zeros means infinitely many solutions; the parametric form describes the line, and an extra condition picks one point on it.</p><p>(a) <span class="chem">R_3 = 2R_1 + R_2</span>. (b) <span class="chem">3R_1 + R_2</span> (with <span class="chem">z = lambda</span>): <span class="chem">4.4x = 11.2 + lambda</span>, so <span class="chem">x = (56 + 5lambda)/22</span>; then <span class="chem">y = (3.4 + lambda - 1.2x)/0.5 = (38 + 80lambda)/55</span>. (c) <span class="chem">(56 + 5lambda)/22 + (38 + 80lambda)/55 + lambda = 5</span> gives <span class="chem">lambda = 0.6576</span>, so <span class="chem">(x, y, z) = (2.69, 1.65, 0.658)</span>.</p>
      solution: "<p><strong>해석:</strong> GDC의 영행은 무수히 많은 해를 뜻해요. 매개변수 형태가 그 직선을 나타내고, 추가 조건이 그 위의 한 점을 골라요.</p><p>(a) <span class=\"chem\">R_3 = 2R_1 + R_2</span>. (b) <span class=\"chem\">3R_1 + R_2</span> (<span class=\"chem\">z = lambda</span>일 때): <span class=\"chem\">4.4x = 11.2 + lambda</span>이므로 <span class=\"chem\">x = (56 + 5lambda)/22</span>. 그러면 <span class=\"chem\">y = (3.4 + lambda - 1.2x)/0.5 = (38 + 80lambda)/55</span>. (c) <span class=\"chem\">(56 + 5lambda)/22 + (38 + 80lambda)/55 + lambda = 5</span>에서 <span class=\"chem\">lambda = 0.6576</span>이므로 <span class=\"chem\">(x, y, z) = (2.69, 1.65, 0.658)</span>이에요.</p>",
      // EN: <p>(a) A zero row <span class="chem">[0 0 0 | 0]</span> means one equation is redundant and the system is consistent, so there are infinitely many solutions (the planes meet in a line). Indeed <span class="chem">2R_1 + R_2 = R_3</span>: <span class="chem">2.4 + 0.8 = 3.2</span>, <span class="chem">1.0 - 1.5 = -0.5</span>, <span class="chem">-2 + 2 = 0</span>, <span class="chem">6.8 + 1.0 = 7.8</span>.<br>(b) From <span class="chem">1.2x + 0.5y = 3.4 + lambda</span> and <span class="chem">0.8x - 1.5y = 1.0 - 2lambda</span>: <span class="chem">x = (56 + 5lambda)/22 = 2.545... + 0.2273lambda</span> and <span class="chem">y = (38 + 80lambda)/55 = 0.6909... + 1.4545lambda</span>.<br>(c) <span class="chem">x + y + z = 5</span> gives <span class="chem">lambda = 194/295</span>, so <span class="chem">x = 2.69</span>, <span class="chem">y = 1.65</span>, <span class="chem">z = 0.658</span>.</p>
      answer: "<p>(a) 영행 <span class=\"chem\">[0 0 0 | 0]</span>은 한 방정식이 불필요하고 연립방정식이 해를 가짐을 뜻하므로, 무수히 많은 해가 있다 (평면들이 한 직선에서 만난다). 실제로 <span class=\"chem\">2R_1 + R_2 = R_3</span>: <span class=\"chem\">2.4 + 0.8 = 3.2</span>, <span class=\"chem\">1.0 - 1.5 = -0.5</span>, <span class=\"chem\">-2 + 2 = 0</span>, <span class=\"chem\">6.8 + 1.0 = 7.8</span>.<br>(b) <span class=\"chem\">1.2x + 0.5y = 3.4 + lambda</span>와 <span class=\"chem\">0.8x - 1.5y = 1.0 - 2lambda</span>에서: <span class=\"chem\">x = (56 + 5lambda)/22 = 2.545... + 0.2273lambda</span>, <span class=\"chem\">y = (38 + 80lambda)/55 = 0.6909... + 1.4545lambda</span>.<br>(c) <span class=\"chem\">x + y + z = 5</span>에서 <span class=\"chem\">lambda = 194/295</span>이므로 <span class=\"chem\">x = 2.69</span>, <span class=\"chem\">y = 1.65</span>, <span class=\"chem\">z = 0.658</span>.</p>",
      markscheme: [
        // EN: R1: (a) A zero row means the equations are dependent and consistent, so there are infinitely many solutions.
        "R1: (a) 영행은 방정식들이 종속이고 해를 가짐을 뜻하므로 무수히 많은 해가 있음.",
        // EN: A1: (a) Shows R₃ = 2R₁ + R₂ (all four entries checked).
        "A1: (a) R₃ = 2R₁ + R₂임을 보임 (네 성분 모두 확인).",
        // EN: M1: (b) Rewrites the first two equations with z = λ as a 2 × 2 system in x and y.
        "M1: (b) z = λ로 두고 처음 두 방정식을 x와 y에 대한 2 × 2 연립방정식으로 다시 씀.",
        // EN: M1: (b) Eliminates one variable (e.g. 3R₁ + R₂ gives 4.4x = 11.2 + λ).
        "M1: (b) 한 변수를 소거함 (예: 3R₁ + R₂에서 4.4x = 11.2 + λ).",
        // EN: A1: (b) x = (56 + 5λ)/22 (or 2.55 + 0.227λ).
        "A1: (b) x = (56 + 5λ)/22 (또는 2.55 + 0.227λ).",
        // EN: A1: (b) y = (38 + 80λ)/55 (or 0.691 + 1.45λ).
        "A1: (b) y = (38 + 80λ)/55 (또는 0.691 + 1.45λ).",
        // EN: M1: (c) Substitutes into x + y + z = 5 (or solves the new 3 × 3 system with the GDC).
        "M1: (c) x + y + z = 5에 대입함 (또는 새 3 × 3 연립방정식을 GDC로 풂).",
        // EN: A1: (c) x = 2.69, y = 1.65, z = 0.658.
        "A1: (c) x = 2.69, y = 1.65, z = 0.658.",
      ],
    },

    // ── t1-5-q048 · numeric · exam · AHL · AHL 1.16 · 6 marks
    "t1-5-q048": {
      // EN: The curve <span class="chem">y = ax^3 + bx^2 + cx + 2</span> passes through the points <span class="chem">(1, 3.4)</span>, <span class="chem">(2, 1.7)</span> and <span class="chem">(3, 5.9)</span>. Find the <span class="chem">x</span>-coordinate of the local minimum point of the curve.
      stem: "곡선 <span class=\"chem\">y = ax^3 + bx^2 + cx + 2</span>는 점 <span class=\"chem\">(1, 3.4)</span>, <span class=\"chem\">(2, 1.7)</span>, <span class=\"chem\">(3, 5.9)</span>를 지난다. 이 곡선의 극소점의 <span class=\"chem\">x</span>좌표를 구하시오 (Find).",
      hints: [
        // EN: Substituting each point gives a linear equation in <span class="chem">a, b, c</span>. For example, <span class="chem">(1, 3.4)</span> gives <span class="chem">a + b + c + 2 = 3.4</span>.
        "각 점을 대입하면 <span class=\"chem\">a, b, c</span>에 대한 일차방정식이 나와요. 예를 들어 <span class=\"chem\">(1, 3.4)</span>에서 <span class=\"chem\">a + b + c + 2 = 3.4</span>.",
        // EN: Solve the three equations with your GDC, then graph the cubic (or solve <span class="chem">3ax^2 + 2bx + c = 0</span>) to find the local minimum.
        "세 방정식을 GDC로 푼 다음, 삼차함수의 그래프를 그리거나 (<span class=\"chem\">3ax^2 + 2bx + c = 0</span>을 풀어) 극소점을 구하세요.",
      ],
      // EN: <p><span class="chem">a + b + c = 1.4</span>, <span class="chem">8a + 4b + 2c = -0.3</span>, <span class="chem">27a + 9b + 3c = 3.9</span>. The GDC gives <span class="chem">a = 1.5</span>, <span class="chem">b = -6.05</span>, <span class="chem">c = 5.95</span>. Then <span class="chem">dy/dx = 4.5x^2 - 12.1x + 5.95 = 0</span> gives <span class="chem">x = 0.648</span> (local maximum) and <span class="chem">x = 2.04</span>. Since <span class="chem">a &gt; 0</span>, the larger root is the local minimum: <span class="chem">x = 2.04</span> (3 s.f.).</p>
      solution: "<p><span class=\"chem\">a + b + c = 1.4</span>, <span class=\"chem\">8a + 4b + 2c = -0.3</span>, <span class=\"chem\">27a + 9b + 3c = 3.9</span>. GDC로 <span class=\"chem\">a = 1.5</span>, <span class=\"chem\">b = -6.05</span>, <span class=\"chem\">c = 5.95</span>를 얻어요. 그러면 <span class=\"chem\">dy/dx = 4.5x^2 - 12.1x + 5.95 = 0</span>에서 <span class=\"chem\">x = 0.648</span>(극대)과 <span class=\"chem\">x = 2.04</span>. <span class=\"chem\">a &gt; 0</span>이므로 더 큰 근이 극소점이에요: <span class=\"chem\">x = 2.04</span> (유효숫자 3자리).</p>",
    },

    // ── t1-5-q049 · numeric · exam · AHL · AHL 1.15 · 3 marks
    "t1-5-q049": {
      // EN: A student conjectures that <span class="chem">n^2 + n + 17</span> is a prime number for every positive integer <span class="chem">n</span>. Use your GDC to find the smallest positive integer <span class="chem">n</span> that is a counterexample to this conjecture.
      stem: "한 학생이 모든 양의 정수 <span class=\"chem\">n</span>에 대해 <span class=\"chem\">n^2 + n + 17</span>은 소수라고 추측한다. GDC를 이용하여 이 추측의 반례가 되는 가장 작은 양의 정수 <span class=\"chem\">n</span>을 구하시오 (Find).",
      hints: [
        // EN: Put <span class="chem">f(n) = n^2 + n + 17</span> into the table function of your GDC and look for the first value that is not prime.
        "GDC의 표 기능에 <span class=\"chem\">f(n) = n^2 + n + 17</span>을 입력하고 소수가 아닌 첫 번째 값을 찾으세요.",
        // EN: Watch for values that are perfect squares or multiples of 17. What happens when <span class="chem">n</span> is close to 17?
        "완전제곱수나 17의 배수가 되는 값에 주의하세요. <span class=\"chem\">n</span>이 17에 가까울 때 어떤 일이 일어나나요?",
      ],
      // EN: <p>The table gives <span class="chem">19, 23, 29, 37, ..., 257</span> for <span class="chem">n = 1, ..., 15</span>, all prime. For <span class="chem">n = 16</span>: <span class="chem">16^2 + 16 + 17 = 289 = 17^2</span>, which is not prime. So <span class="chem">n = 16</span> is the smallest counterexample. (Algebra explains it: <span class="chem">n^2 + n + 17 = 16 × 17 + 17 = 17^2</span> when <span class="chem">n = 16</span>.)</p>
      solution: "<p>표에서 <span class=\"chem\">n = 1, ..., 15</span>일 때 <span class=\"chem\">19, 23, 29, 37, ..., 257</span>로 모두 소수예요. <span class=\"chem\">n = 16</span>일 때: <span class=\"chem\">16^2 + 16 + 17 = 289 = 17^2</span>로 소수가 아니에요. 따라서 <span class=\"chem\">n = 16</span>이 가장 작은 반례예요. (대수적으로 설명하면, <span class=\"chem\">n = 16</span>일 때 <span class=\"chem\">n^2 + n + 17 = 16 × 17 + 17 = 17^2</span>이에요.)</p>",
    },

    // ── t1-5-q050 · numeric · challenge · AHL · AHL 1.15 · 4 marks
    "t1-5-q050": {
      // EN: A student claims: “Exponentials always beat powers, so <span class="chem">e^x &gt;= x^3</span> for every <span class="chem">x &gt; 0</span>.” The claim is false: the set of positive values of <span class="chem">x</span> for which it fails is an interval <span class="chem">a &lt; x &lt; b</span>. Find the value of <span class="chem">b</span>.
      stem: "한 학생이 “지수함수는 항상 거듭제곱 함수를 이기므로 모든 <span class=\"chem\">x &gt; 0</span>에 대해 <span class=\"chem\">e^x &gt;= x^3</span>이다”라고 주장한다. 이 주장은 거짓이며, 이것이 성립하지 않는 양수 <span class=\"chem\">x</span>의 값의 집합은 구간 <span class=\"chem\">a &lt; x &lt; b</span>이다. <span class=\"chem\">b</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: Decode: the counterexamples are the values of <span class="chem">x</span> where <span class="chem">x^3 &gt; e^x</span>. The endpoints <span class="chem">a</span> and <span class="chem">b</span> are where the two graphs cross, and you want the larger crossing.
        "해석: 반례는 <span class=\"chem\">x^3 &gt; e^x</span>인 <span class=\"chem\">x</span>의 값들이에요. 양 끝점 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>는 두 그래프가 만나는 점이고, 구해야 하는 것은 더 큰 교점이에요.",
        // EN: Graph <span class="chem">y = e^x - x^3</span> for <span class="chem">0 &lt; x &lt; 6</span> and find its zeros.
        "<span class=\"chem\">0 &lt; x &lt; 6</span>에서 <span class=\"chem\">y = e^x - x^3</span>의 그래프를 그리고 영점을 구하세요.",
        // EN: One counterexample, such as <span class="chem">x = 3</span> (<span class="chem">e^3 = 20.1 &lt; 27</span>), already disproves the claim.
        "<span class=\"chem\">x = 3</span>(<span class=\"chem\">e^3 = 20.1 &lt; 27</span>)과 같은 반례 하나만으로도 주장은 반증돼요.",
      ],
      // EN: <p><strong>Decode:</strong> “the set where it fails” is the solution set of <span class="chem">x^3 &gt; e^x</span>, so find where the curves intersect.</p><p>The zeros of <span class="chem">e^x - x^3</span> are <span class="chem">x = 1.857...</span> and <span class="chem">x = 4.536...</span>, and <span class="chem">e^x - x^3 &lt; 0</span> between them (e.g. at <span class="chem">x = 3</span>). So <span class="chem">a = 1.86</span> and <span class="chem">b = 4.54</span> (3 s.f.). For <span class="chem">x &gt; b</span> the exponential is larger again.</p>
      solution: "<p><strong>해석:</strong> “성립하지 않는 집합”은 <span class=\"chem\">x^3 &gt; e^x</span>의 해집합이므로, 두 곡선의 교점을 구해요.</p><p><span class=\"chem\">e^x - x^3</span>의 영점은 <span class=\"chem\">x = 1.857...</span>과 <span class=\"chem\">x = 4.536...</span>이고, 그 사이에서 <span class=\"chem\">e^x - x^3 &lt; 0</span>이에요 (예: <span class=\"chem\">x = 3</span>). 따라서 <span class=\"chem\">a = 1.86</span>, <span class=\"chem\">b = 4.54</span> (유효숫자 3자리)예요. <span class=\"chem\">x &gt; b</span>에서는 다시 지수함수가 더 커요.</p>",
    },

    // ── t1-5-q051 · numeric · challenge · AHL · AHL 1.15 · 4 marks
    "t1-5-q051": {
      // EN: A proof by induction is to be written for the statement <span class="chem">2^n &gt; n^5</span> for all integers <span class="chem">n &gt;= n_0</span>. Use your GDC to find the smallest positive integer <span class="chem">n_0</span> for which the statement is true for <strong>every</strong> integer <span class="chem">n &gt;= n_0</span>.
      stem: "<span class=\"chem\">n &gt;= n_0</span>인 모든 정수에 대해 <span class=\"chem\">2^n &gt; n^5</span>라는 명제의 귀납법 증명을 쓰려고 한다. GDC를 이용하여, <span class=\"chem\">n &gt;= n_0</span>인 <strong>모든</strong> 정수에 대해 이 명제가 참이 되는 가장 작은 양의 정수 <span class=\"chem\">n_0</span>을 구하시오 (Find).",
      hints: [
        // EN: Decode: you need the point after which the inequality never fails again. Being true for one small value is not enough: check <span class="chem">n = 1</span> and then <span class="chem">n = 2</span>.
        "해석: 그 이후로 부등식이 다시는 거짓이 되지 않는 지점이 필요해요. 작은 값 하나에서 참인 것으로는 충분하지 않아요: <span class=\"chem\">n = 1</span>을 확인하고, 그다음 <span class=\"chem\">n = 2</span>를 확인하세요.",
        // EN: Use the GDC table for <span class="chem">y = 2^x - x^5</span> with step 1 and look for the last integer where the value is negative.
        "<span class=\"chem\">y = 2^x - x^5</span>에 대해 간격 1로 GDC 표를 이용해 값이 음수인 마지막 정수를 찾으세요.",
        // EN: Once <span class="chem">n</span> is large, <span class="chem">2^{n+1}/2^n = 2</span> is bigger than <span class="chem">(n + 1)^5/n^5</span>, so the inequality stays true.
        "<span class=\"chem\">n</span>이 커지면 <span class=\"chem\">2^{n+1}/2^n = 2</span>가 <span class=\"chem\">(n + 1)^5/n^5</span>보다 커지므로 부등식은 계속 참이에요.",
      ],
      // EN: <p><strong>Decode:</strong> “for every integer <span class="chem">n &gt;= n_0</span>” means you need the start of the final run of true values, not the first true value.</p><p><span class="chem">n = 1</span>: <span class="chem">2 &gt; 1</span> (true), but <span class="chem">n = 2</span>: <span class="chem">4 &lt; 32</span> (false), and the table shows it is false for every <span class="chem">n</span> from 2 to 22: <span class="chem">2^{22} = 4194304 &lt; 22^5 = 5153632</span>. For <span class="chem">n = 23</span>: <span class="chem">2^{23} = 8388608 &gt; 23^5 = 6436343</span>. For <span class="chem">n &gt;= 23</span>, <span class="chem">(1 + 1/n)^5 &lt; 2</span>, so the inequality stays true. Hence <span class="chem">n_0 = 23</span>.</p>
      solution: "<p><strong>해석:</strong> “<span class=\"chem\">n &gt;= n_0</span>인 모든 정수에 대해”는 처음으로 참이 되는 값이 아니라, 마지막으로 계속 참이 이어지는 구간의 시작이 필요하다는 뜻이에요.</p><p><span class=\"chem\">n = 1</span>: <span class=\"chem\">2 &gt; 1</span>(참)이지만 <span class=\"chem\">n = 2</span>: <span class=\"chem\">4 &lt; 32</span>(거짓)이고, 표를 보면 2부터 22까지의 모든 <span class=\"chem\">n</span>에서 거짓이에요: <span class=\"chem\">2^{22} = 4194304 &lt; 22^5 = 5153632</span>. <span class=\"chem\">n = 23</span>일 때: <span class=\"chem\">2^{23} = 8388608 &gt; 23^5 = 6436343</span>. <span class=\"chem\">n &gt;= 23</span>이면 <span class=\"chem\">(1 + 1/n)^5 &lt; 2</span>이므로 부등식은 계속 참이에요. 따라서 <span class=\"chem\">n_0 = 23</span>이에요.</p>",
    },

    // ── t1-5-q052 · short · exam · AHL · AHL 1.15 · 9 marks
    "t1-5-q052": {
      // EN: Let <span class="chem">S_n = Sigma_{r=1}^n r / 2^r</span>.<br>(a) Prove by mathematical induction that <span class="chem">S_n = 2 - (n + 2)/2^n</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [7 marks]<br>(b) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 1.999</span>. [2 marks]
      stem: "<span class=\"chem\">S_n = Sigma_{r=1}^n r / 2^r</span>이라 하자.<br>(a) 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">S_n = 2 - (n + 2)/2^n</span>임을 수학적 귀납법으로 증명하시오 (Prove). [7 marks]<br>(b) <span class=\"chem\">S_n &gt; 1.999</span>를 만족하는 가장 작은 <span class=\"chem\">n</span>의 값을 구하시오 (Find). [2 marks]",
      hints: [
        // EN: In the step, the <span class="chem">(k + 1)</span>-th term is <span class="chem">(k + 1)/2^{k+1}</span>. Write <span class="chem">(k + 2)/2^k</span> as <span class="chem">2(k + 2)/2^{k+1}</span>.
        "귀납 단계에서 제<span class=\"chem\">(k + 1)</span>항은 <span class=\"chem\">(k + 1)/2^{k+1}</span>이에요. <span class=\"chem\">(k + 2)/2^k</span>를 <span class=\"chem\">2(k + 2)/2^{k+1}</span>로 바꿔 쓰세요.",
        // EN: In (b) the inequality cannot be rearranged to make <span class="chem">n</span> the subject, so use the table function of your GDC.
        "(b)의 부등식은 <span class=\"chem\">n</span>에 대해 정리할 수 없으므로 GDC의 표 기능을 쓰세요.",
      ],
      // EN: <p>(a) <span class="chem">S_{k+1} = 2 - (2k + 4)/2^{k+1} + (k + 1)/2^{k+1} = 2 - (k + 3)/2^{k+1}</span>, which is the formula with <span class="chem">n = k + 1</span>.<br>(b) <span class="chem">S_{13} = 1.99817</span> and <span class="chem">S_{14} = 1.99902</span>, so the smallest value is <span class="chem">n = 14</span>.</p>
      solution: "<p>(a) <span class=\"chem\">S_{k+1} = 2 - (2k + 4)/2^{k+1} + (k + 1)/2^{k+1} = 2 - (k + 3)/2^{k+1}</span>이고, 이는 <span class=\"chem\">n = k + 1</span>일 때의 공식이에요.<br>(b) <span class=\"chem\">S_{13} = 1.99817</span>, <span class=\"chem\">S_{14} = 1.99902</span>이므로 가장 작은 값은 <span class=\"chem\">n = 14</span>예요.</p>",
      // EN: <p>(a) <strong>Base case:</strong> <span class="chem">n = 1</span>: <span class="chem">S_1 = 1/2</span> and <span class="chem">2 - 3/2 = 1/2</span>, so <span class="chem">P(1)</span> is true.<br><strong>Assumption:</strong> assume <span class="chem">S_k = 2 - (k + 2)/2^k</span> for some <span class="chem">k \in \mathbb{Z}^+</span>.<br><strong>Step:</strong> <span class="chem">S_{k+1} = 2 - (k + 2)/2^k + (k + 1)/2^{k+1} = 2 - (2(k + 2) - (k + 1))/2^{k+1} = 2 - (k + 3)/2^{k+1} = 2 - ((k + 1) + 2)/2^{k+1}</span>.<br><strong>Conclusion:</strong> since <span class="chem">P(1)</span> is true and <span class="chem">P(k)</span> true implies <span class="chem">P(k + 1)</span> true, by mathematical induction the formula holds for all <span class="chem">n \in \mathbb{Z}^+</span>.<br>(b) We need <span class="chem">(n + 2)/2^n &lt; 0.001</span>. The GDC table gives <span class="chem">15/2^{13} = 0.00183</span> and <span class="chem">16/2^{14} = 0.000977</span>, so <span class="chem">n = 14</span>.</p>
      answer: "<p>(a) <strong>초기 단계:</strong> <span class=\"chem\">n = 1</span>: <span class=\"chem\">S_1 = 1/2</span>이고 <span class=\"chem\">2 - 3/2 = 1/2</span>이므로 <span class=\"chem\">P(1)</span>은 참이다.<br><strong>귀납 가정:</strong> 어떤 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">S_k = 2 - (k + 2)/2^k</span>라고 가정하자.<br><strong>귀납 단계:</strong> <span class=\"chem\">S_{k+1} = 2 - (k + 2)/2^k + (k + 1)/2^{k+1} = 2 - (2(k + 2) - (k + 1))/2^{k+1} = 2 - (k + 3)/2^{k+1} = 2 - ((k + 1) + 2)/2^{k+1}</span>.<br><strong>결론:</strong> <span class=\"chem\">P(1)</span>이 참이고, <span class=\"chem\">P(k)</span>가 참이면 <span class=\"chem\">P(k + 1)</span>도 참이므로, 수학적 귀납법에 의해 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 공식이 성립한다.<br>(b) <span class=\"chem\">(n + 2)/2^n &lt; 0.001</span>이어야 한다. GDC 표에서 <span class=\"chem\">15/2^{13} = 0.00183</span>, <span class=\"chem\">16/2^{14} = 0.000977</span>이므로 <span class=\"chem\">n = 14</span>.</p>",
      markscheme: [
        // EN: A1: (a) n = 1: S₁ = 1/2 and 2 − 3/2 = 1/2, so P(1) is true.
        "A1: (a) n = 1: S₁ = 1/2이고 2 − 3/2 = 1/2이므로 P(1)은 참.",
        // EN: M1: (a) Assumes P(k) true for some k ∈ ℤ⁺.
        "M1: (a) 어떤 k ∈ ℤ⁺에 대해 P(k)가 참이라고 가정함.",
        // EN: M1: (a) Adds the (k + 1)-th term: S<sub>k+1</sub> = 2 − (k + 2)/2<sup>k</sup> + (k + 1)/2<sup>k+1</sup>.
        "M1: (a) 제(k + 1)항을 더함: S<sub>k+1</sub> = 2 − (k + 2)/2<sup>k</sup> + (k + 1)/2<sup>k+1</sup>.",
        // EN: M1: (a) Uses the common denominator 2<sup>k+1</sup>.
        "M1: (a) 공통분모 2<sup>k+1</sup>을 이용함.",
        // EN: A1: (a) Obtains 2 − (2k + 4 − k − 1)/2<sup>k+1</sup>.
        "A1: (a) 2 − (2k + 4 − k − 1)/2<sup>k+1</sup>을 얻음.",
        // EN: A1: (a) Obtains 2 − (k + 3)/2<sup>k+1</sup> = 2 − ((k + 1) + 2)/2<sup>k+1</sup>.
        "A1: (a) 2 − (k + 3)/2<sup>k+1</sup> = 2 − ((k + 1) + 2)/2<sup>k+1</sup>을 얻음.",
        // EN: R1: (a) Induction conclusion sentence (only if the M marks above are earned).
        "R1: (a) 수학적 귀납법 결론 문장 (앞선 M 점수를 획득한 경우에만 부여).",
        // EN: M1: (b) Sets up (n + 2)/2<sup>n</sup> < 0.001 (or 2 − (n + 2)/2<sup>n</sup> > 1.999) and uses a table or graph.
        "M1: (b) (n + 2)/2<sup>n</sup> < 0.001 (또는 2 − (n + 2)/2<sup>n</sup> > 1.999)을 세우고 표나 그래프를 이용함.",
        // EN: A1: (b) n = 14.
        "A1: (b) n = 14.",
      ],
    },

    // ── t1-5-q053 · numeric · challenge · AHL · AHL 1.15 · 5 marks
    "t1-5-q053": {
      // EN: A beekeeper starts season 1 with 100 hives. Each season the number of hives grows by 50%, after which 20 hives are sold. The number of hives is modelled by <span class="chem">u_1 = 100</span> and <span class="chem">u_{n+1} = 1.5u_n - 20</span>, where <span class="chem">u_n</span> is the modelled number of hives at the start of season <span class="chem">n</span>. It can be proved by induction that <span class="chem">u_n = 40 + 60(1.5)^{n-1}</span>. Find the first season in which the beekeeper starts with more than 10 000 hives.
      stem: "한 양봉가가 1시즌을 벌통 100개로 시작한다. 매 시즌 벌통의 수는 50% 늘어나고, 그 후 벌통 20개를 판다. 벌통의 수는 <span class=\"chem\">u_1 = 100</span>, <span class=\"chem\">u_{n+1} = 1.5u_n - 20</span>으로 모델링되며, 여기서 <span class=\"chem\">u_n</span>은 <span class=\"chem\">n</span>시즌 시작 시점의 벌통 수의 모델값이다. <span class=\"chem\">u_n = 40 + 60(1.5)^{n-1}</span>임을 귀납법으로 증명할 수 있다. 양봉가가 처음으로 벌통 10 000개보다 많이 가지고 시작하는 시즌을 구하시오 (Find).",
      hints: [
        // EN: Decode: you want the smallest positive integer <span class="chem">n</span> with <span class="chem">u_n &gt; 10000</span>. The closed form (proved by induction) turns this into an exponential inequality.
        "해석: <span class=\"chem\">u_n &gt; 10000</span>을 만족하는 가장 작은 양의 정수 <span class=\"chem\">n</span>을 구하는 거예요. (귀납법으로 증명된) 일반항을 쓰면 이것은 지수 부등식이 돼요.",
        // EN: Solve <span class="chem">40 + 60(1.5)^{n-1} &gt; 10000</span> with your GDC (graph or table), or rearrange to <span class="chem">1.5^{n-1} &gt; 166</span> and use logarithms.
        "GDC(그래프나 표)로 <span class=\"chem\">40 + 60(1.5)^{n-1} &gt; 10000</span>을 풀거나, <span class=\"chem\">1.5^{n-1} &gt; 166</span>으로 정리해 로그를 쓰세요.",
        // EN: The answer must be a whole number of seasons: check the integers on either side of the boundary.
        "답은 시즌의 수이므로 정수여야 해요: 경계 양쪽의 정수를 확인하세요.",
      ],
      // EN: <p><strong>Decode:</strong> a recurrence plus a threshold: use the closed form, then find the least integer <span class="chem">n</span>.</p><p><span class="chem">60(1.5)^{n-1} &gt; 9960</span> gives <span class="chem">1.5^{n-1} &gt; 166</span>, so <span class="chem">n - 1 &gt; ln 166 / ln 1.5 = 12.6</span>. Table check: <span class="chem">u_{13} = 7824.8</span> and <span class="chem">u_{14} = 11717</span>. So the first such season is season <span class="chem">14</span>.</p>
      solution: "<p><strong>해석:</strong> 점화식과 기준값의 문제예요: 일반항을 쓰고, 가장 작은 정수 <span class=\"chem\">n</span>을 찾으세요.</p><p><span class=\"chem\">60(1.5)^{n-1} &gt; 9960</span>에서 <span class=\"chem\">1.5^{n-1} &gt; 166</span>이므로 <span class=\"chem\">n - 1 &gt; ln 166 / ln 1.5 = 12.6</span>. 표로 확인: <span class=\"chem\">u_{13} = 7824.8</span>, <span class=\"chem\">u_{14} = 11717</span>. 따라서 처음 그런 시즌은 <span class=\"chem\">14</span>시즌이에요.</p>",
    },

    // ── t1-5-q054 · numeric · challenge · AHL · AHL 1.15 · 5 marks
    "t1-5-q054": {
      // EN: Let <span class="chem">f(x) = x^2 e^x</span>. It can be proved by induction that <span class="chem">f^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. Find the minimum value of the function <span class="chem">g(x) = f^{(4)}(x)</span>, <span class="chem">x \in \mathbb{R}</span>.
      stem: "<span class=\"chem\">f(x) = x^2 e^x</span>라 하자. 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">f^{(n)}(x) = (x^2 + 2nx + n(n - 1))e^x</span>임을 귀납법으로 증명할 수 있다. 함수 <span class=\"chem\">g(x) = f^{(4)}(x)</span>, <span class=\"chem\">x \\in \\mathbb{R}</span>의 최솟값을 구하시오 (Find).",
      hints: [
        // EN: Decode: <span class="chem">g = f^{(4)}</span>, so its derivative is <span class="chem">g'(x) = f^{(5)}(x)</span>, which the given formula provides. You need the stationary point of <span class="chem">g</span> that gives the least value.
        "해석: <span class=\"chem\">g = f^{(4)}</span>이므로 그 도함수는 <span class=\"chem\">g'(x) = f^{(5)}(x)</span>이고, 주어진 공식에서 얻을 수 있어요. 가장 작은 값을 주는 <span class=\"chem\">g</span>의 정류점이 필요해요.",
        // EN: From the formula with <span class="chem">n = 4</span>: <span class="chem">g(x) = (x^2 + 8x + 12)e^x</span>; with <span class="chem">n = 5</span>: <span class="chem">g'(x) = (x^2 + 10x + 20)e^x</span>.
        "공식에서 <span class=\"chem\">n = 4</span>이면 <span class=\"chem\">g(x) = (x^2 + 8x + 12)e^x</span>, <span class=\"chem\">n = 5</span>이면 <span class=\"chem\">g'(x) = (x^2 + 10x + 20)e^x</span>예요.",
        // EN: Graph <span class="chem">g</span> on your GDC (e.g. for <span class="chem">-10 &lt;= x &lt;= 1</span>) and use the minimum feature, or solve <span class="chem">x^2 + 10x + 20 = 0</span>.
        "GDC에서 <span class=\"chem\">g</span>의 그래프를 그리고(예: <span class=\"chem\">-10 &lt;= x &lt;= 1</span>) 최솟값 기능을 쓰거나, <span class=\"chem\">x^2 + 10x + 20 = 0</span>을 푸세요.",
      ],
      // EN: <p><strong>Decode:</strong> the induction formula gives both <span class="chem">g = f^{(4)}</span> and <span class="chem">g' = f^{(5)}</span>.</p><p><span class="chem">g'(x) = (x^2 + 10x + 20)e^x = 0</span> gives <span class="chem">x = -5 +- sqrt(5)</span>. At <span class="chem">x = -5 + sqrt(5) = -2.764</span>, <span class="chem">g = -0.156</span>; at <span class="chem">x = -5 - sqrt(5)</span>, <span class="chem">g = 0.00466</span> (a local maximum). As <span class="chem">x -&gt; −∞</span>, <span class="chem">g -&gt; 0</span>, so the minimum value is <span class="chem">-0.156</span> (3 s.f.).</p>
      solution: "<p><strong>해석:</strong> 귀납법 공식은 <span class=\"chem\">g = f^{(4)}</span>와 <span class=\"chem\">g' = f^{(5)}</span>를 모두 줘요.</p><p><span class=\"chem\">g'(x) = (x^2 + 10x + 20)e^x = 0</span>에서 <span class=\"chem\">x = -5 +- sqrt(5)</span>. <span class=\"chem\">x = -5 + sqrt(5) = -2.764</span>에서 <span class=\"chem\">g = -0.156</span>, <span class=\"chem\">x = -5 - sqrt(5)</span>에서 <span class=\"chem\">g = 0.00466</span>(극댓값)이에요. <span class=\"chem\">x -&gt; −∞</span>일 때 <span class=\"chem\">g -&gt; 0</span>이므로 최솟값은 <span class=\"chem\">-0.156</span> (유효숫자 3자리)이에요.</p>",
    },

    // ── t1-5-q055 · numeric · exam · AHL · AHL 1.16 · 4 marks
    "t1-5-q055": {
      // EN: A school canteen sells three meals, A, B and C, each at a fixed price. The sales on three days were:<br><span class="mono">Monday: 112 A, 85 B, 64 C, takings $1777.00</span><br><span class="mono">Tuesday: 98 A, 102 B, 71 C, takings $1848.55</span><br><span class="mono">Wednesday: 120 A, 76 B, 90 C, takings $1919.90</span><br>Find the price of meal C. Give your answer correct to 2 decimal places.
      stem: "학교 식당은 세 가지 식사 A, B, C를 각각 정해진 가격에 판매한다. 사흘 동안의 판매량은 다음과 같았다:<br><span class=\"mono\">Monday: 112 A, 85 B, 64 C, takings $1777.00</span><br><span class=\"mono\">Tuesday: 98 A, 102 B, 71 C, takings $1848.55</span><br><span class=\"mono\">Wednesday: 120 A, 76 B, 90 C, takings $1919.90</span><br>식사 C의 가격을 구하시오 (Find). 답은 소수점 아래 2자리까지 나타내시오.",
      hints: [
        // EN: Let the prices be <span class="chem">a, b, c</span> dollars. Each day gives one equation, for example <span class="chem">112a + 85b + 64c = 1777</span>.
        "가격을 <span class=\"chem\">a, b, c</span>달러라 하세요. 하루마다 방정식이 하나씩 나와요. 예: <span class=\"chem\">112a + 85b + 64c = 1777</span>.",
        // EN: Solve the system with your GDC.
        "GDC로 연립방정식을 푸세요.",
      ],
      // EN: <p><span class="chem">112a + 85b + 64c = 1777</span>, <span class="chem">98a + 102b + 71c = 1848.55</span>, <span class="chem">120a + 76b + 90c = 1919.90</span>. The GDC gives <span class="chem">a = 6.85</span>, <span class="chem">b = 7.40</span>, <span class="chem">c = 5.95</span>. Check Monday: <span class="chem">767.20 + 629.00 + 380.80 = 1777.00</span>. Meal C costs <span class="chem">$5.95</span>.</p>
      solution: "<p><span class=\"chem\">112a + 85b + 64c = 1777</span>, <span class=\"chem\">98a + 102b + 71c = 1848.55</span>, <span class=\"chem\">120a + 76b + 90c = 1919.90</span>. GDC로 <span class=\"chem\">a = 6.85</span>, <span class=\"chem\">b = 7.40</span>, <span class=\"chem\">c = 5.95</span>를 얻어요. 월요일로 확인: <span class=\"chem\">767.20 + 629.00 + 380.80 = 1777.00</span>. 식사 C의 가격은 <span class=\"chem\">$5.95</span>예요.</p>",
    },

    // ── t1-5-q056 · numeric · challenge · AHL · AHL 1.16 · 6 marks
    "t1-5-q056": {
      // EN: Consider the system<br><span class="chem">0.4x + 1.2y - 0.7z = 2.6</span><br><span class="chem">1.5x - 0.3y + 0.9z = 1.8</span><br><span class="chem">1.58x + 1.86y + kz = m</span>, where <span class="chem">k, m \in \mathbb{R}</span>.<br>The system has infinitely many solutions. Find the value of <span class="chem">m</span>.
      stem: "연립방정식<br><span class=\"chem\">0.4x + 1.2y - 0.7z = 2.6</span><br><span class=\"chem\">1.5x - 0.3y + 0.9z = 1.8</span><br><span class=\"chem\">1.58x + 1.86y + kz = m</span> (<span class=\"chem\">k, m \\in \\mathbb{R}</span>)을 생각하자.<br>이 연립방정식은 무수히 많은 해를 갖는다. <span class=\"chem\">m</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: Decode: the first two planes are not parallel, so they meet in a line. Infinitely many solutions means the third equation must be a combination <span class="chem">alpha R_1 + beta R_2</span> of the first two (all four entries).
        "해석: 처음 두 평면은 평행하지 않으므로 한 직선에서 만나요. 무수히 많은 해를 갖는다는 것은 세 번째 방정식이 처음 두 방정식의 결합 <span class=\"chem\">alpha R_1 + beta R_2</span>(네 성분 모두)여야 한다는 뜻이에요.",
        // EN: Match the <span class="chem">x</span>- and <span class="chem">y</span>-coefficients: <span class="chem">0.4alpha + 1.5beta = 1.58</span> and <span class="chem">1.2alpha - 0.3beta = 1.86</span>. Solve this <span class="chem">2 × 2</span> system (GDC).
        "<span class=\"chem\">x</span>와 <span class=\"chem\">y</span>의 계수를 맞추세요: <span class=\"chem\">0.4alpha + 1.5beta = 1.58</span>, <span class=\"chem\">1.2alpha - 0.3beta = 1.86</span>. 이 <span class=\"chem\">2 × 2</span> 연립방정식을 푸세요 (GDC).",
        // EN: Then <span class="chem">k = -0.7alpha + 0.9beta</span> and <span class="chem">m = 2.6alpha + 1.8beta</span>. Check with rref that the system really has a zero row.
        "그러면 <span class=\"chem\">k = -0.7alpha + 0.9beta</span>, <span class=\"chem\">m = 2.6alpha + 1.8beta</span>예요. rref로 연립방정식에 실제로 영행이 생기는지 확인하세요.",
      ],
      // EN: <p><strong>Decode:</strong> “infinitely many solutions” for three planes through a common line means the third equation is a linear combination of the other two, including the constant term.</p><p><span class="chem">0.4alpha + 1.5beta = 1.58</span>, <span class="chem">1.2alpha - 0.3beta = 1.86</span> give <span class="chem">alpha = 1.7</span>, <span class="chem">beta = 0.6</span>. Then <span class="chem">k = -1.19 + 0.54 = -0.65</span> and <span class="chem">m = 4.42 + 1.08 = 5.5</span>. With <span class="chem">k = -0.65</span> and <span class="chem">m = 5.5</span>, rref on the GDC gives a row of zeros, confirming infinitely many solutions.</p>
      solution: "<p><strong>해석:</strong> 공통인 한 직선을 지나는 세 평면에서 “무수히 많은 해”란, 세 번째 방정식이 상수항까지 포함해 다른 두 방정식의 일차결합이라는 뜻이에요.</p><p><span class=\"chem\">0.4alpha + 1.5beta = 1.58</span>, <span class=\"chem\">1.2alpha - 0.3beta = 1.86</span>에서 <span class=\"chem\">alpha = 1.7</span>, <span class=\"chem\">beta = 0.6</span>. 그러면 <span class=\"chem\">k = -1.19 + 0.54 = -0.65</span>, <span class=\"chem\">m = 4.42 + 1.08 = 5.5</span>예요. <span class=\"chem\">k = -0.65</span>, <span class=\"chem\">m = 5.5</span>일 때 GDC의 rref에 영행이 나타나므로 무수히 많은 해를 가짐이 확인돼요.</p>",
    },

    // ── t1-5-q057 · short · challenge · AHL · AHL 1.15, 1.16 · 18 marks
    "t1-5-q057": {
      // EN: <strong>Investigation: finding a sum formula with a linear system.</strong> Let <span class="chem">S(n) = Sigma_{r=1}^n r(r + 2)</span>.<br>(a) Write down the values of <span class="chem">S(1)</span>, <span class="chem">S(2)</span> and <span class="chem">S(3)</span>. [2 marks]<br>It is suggested that <span class="chem">S(n) = an^3 + bn^2 + cn</span> for constants <span class="chem">a, b, c</span>.<br>(b) Use your answers to (a) to write down a system of three linear equations in <span class="chem">a, b, c</span>, and solve it. [4 marks]<br>(c) Verify that your formula gives the correct value of <span class="chem">S(4)</span>. [2 marks]<br>(d) Show that your formula can be written as <span class="chem">S(n) = n(n + 1)(2n + 7)/6</span>. [2 marks]<br>(e) Prove by mathematical induction that <span class="chem">S(n) = n(n + 1)(2n + 7)/6</span> for all <span class="chem">n \in \mathbb{Z}^+</span>. [6 marks]<br>(f) Find the smallest value of <span class="chem">n</span> for which <span class="chem">S(n) &gt; 10^6</span>. [2 marks]
      stem: "<strong>탐구: 연립일차방정식으로 합의 공식 찾기.</strong> <span class=\"chem\">S(n) = Sigma_{r=1}^n r(r + 2)</span>라 하자.<br>(a) <span class=\"chem\">S(1)</span>, <span class=\"chem\">S(2)</span>, <span class=\"chem\">S(3)</span>의 값을 쓰시오 (Write down). [2 marks]<br>상수 <span class=\"chem\">a, b, c</span>에 대해 <span class=\"chem\">S(n) = an^3 + bn^2 + cn</span>이라는 제안이 있다.<br>(b) (a)의 답을 이용해 <span class=\"chem\">a, b, c</span>에 대한 세 일차방정식으로 이루어진 연립방정식을 쓰고, 이를 푸시오. [4 marks]<br>(c) 여러분의 공식이 <span class=\"chem\">S(4)</span>의 올바른 값을 줌을 확인하시오 (Verify). [2 marks]<br>(d) 여러분의 공식을 <span class=\"chem\">S(n) = n(n + 1)(2n + 7)/6</span>으로 쓸 수 있음을 보이시오 (Show that). [2 marks]<br>(e) 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대해 <span class=\"chem\">S(n) = n(n + 1)(2n + 7)/6</span>임을 수학적 귀납법으로 증명하시오 (Prove). [6 marks]<br>(f) <span class=\"chem\">S(n) &gt; 10^6</span>을 만족하는 가장 작은 <span class=\"chem\">n</span>의 값을 구하시오 (Find). [2 marks]",
      hints: [
        // EN: Decode: this is the standard Paper 3 route: compute small cases, fit a model with a linear system, test it on a new case, then prove it in general by induction and apply it.
        "해석: 이것은 Paper 3의 표준적인 흐름이에요: 작은 경우를 계산하고, 연립일차방정식으로 모델을 맞추고, 새로운 경우로 검증한 다음, 귀납법으로 일반적으로 증명하고 적용해요.",
        // EN: In (b) each value of <span class="chem">n</span> gives one equation: for <span class="chem">n = 2</span>, <span class="chem">8a + 4b + 2c = 11</span>.
        "(b)에서는 <span class=\"chem\">n</span>의 각 값이 방정식 하나를 줘요: <span class=\"chem\">n = 2</span>이면 <span class=\"chem\">8a + 4b + 2c = 11</span>.",
        // EN: In (e) the <span class="chem">(k + 1)</span>-th term is <span class="chem">(k + 1)(k + 3)</span>. Take out the common factor <span class="chem">(k + 1)/6</span> before expanding anything.
        "(e)에서 제<span class=\"chem\">(k + 1)</span>항은 <span class=\"chem\">(k + 1)(k + 3)</span>이에요. 무엇이든 전개하기 전에 공통인수 <span class=\"chem\">(k + 1)/6</span>을 묶어 내세요.",
        // EN: In (f), solve <span class="chem">n(n + 1)(2n + 7)/6 = 10^6</span> on your GDC and round up to the next integer.
        "(f)에서는 GDC로 <span class=\"chem\">n(n + 1)(2n + 7)/6 = 10^6</span>을 풀고 다음 정수로 올리세요.",
      ],
      // EN: <p><strong>Decode:</strong> parts (a)–(c) generate and test a conjecture (a linear system in <span class="chem">a, b, c</span>), (d)–(e) turn it into a proved theorem, and (f) uses it.</p><p>(b) The GDC (or elimination) gives <span class="chem">a = 1/3, b = 3/2, c = 7/6</span>. (e) The step <span class="chem">k(2k + 7) + 6(k + 3) = 2k^2 + 13k + 18 = (k + 2)(2k + 9)</span> is the heart of the induction. (f) The equation <span class="chem">S(n) = 10^6</span> has root <span class="chem">n = 142.7</span>, so the smallest integer is <span class="chem">143</span>.</p>
      solution: "<p><strong>해석:</strong> (a)–(c)는 추측(<span class=\"chem\">a, b, c</span>에 대한 연립일차방정식)을 만들고 검증하며, (d)–(e)는 그것을 증명된 정리로 만들고, (f)는 그것을 활용해요.</p><p>(b) GDC(또는 소거법)로 <span class=\"chem\">a = 1/3, b = 3/2, c = 7/6</span>. (e) 단계 <span class=\"chem\">k(2k + 7) + 6(k + 3) = 2k^2 + 13k + 18 = (k + 2)(2k + 9)</span>가 귀납법의 핵심이에요. (f) 방정식 <span class=\"chem\">S(n) = 10^6</span>의 근은 <span class=\"chem\">n = 142.7</span>이므로 가장 작은 정수는 <span class=\"chem\">143</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">S(1) = 3</span>, <span class="chem">S(2) = 3 + 8 = 11</span>, <span class="chem">S(3) = 11 + 15 = 26</span>.<br>(b) <span class="chem">a + b + c = 3</span>, <span class="chem">8a + 4b + 2c = 11</span>, <span class="chem">27a + 9b + 3c = 26</span>, giving <span class="chem">a = 1/3</span>, <span class="chem">b = 3/2</span>, <span class="chem">c = 7/6</span>.<br>(c) Directly, <span class="chem">S(4) = 26 + 4 × 6 = 50</span>; the formula gives <span class="chem">64/3 + 24 + 14/3 = 50</span>.<br>(d) <span class="chem">S(n) = (2n^3 + 9n^2 + 7n)/6 = n(2n^2 + 9n + 7)/6 = n(n + 1)(2n + 7)/6</span>.<br>(e) <span class="chem">n = 1</span>: <span class="chem">1 × 3 = 3</span> and <span class="chem">(1 × 2 × 9)/6 = 3</span>. Assume <span class="chem">S(k) = k(k + 1)(2k + 7)/6</span> for some <span class="chem">k \in \mathbb{Z}^+</span>. Then <span class="chem">S(k + 1) = k(k + 1)(2k + 7)/6 + (k + 1)(k + 3) = (k + 1)(2k^2 + 7k + 6k + 18)/6 = (k + 1)(2k^2 + 13k + 18)/6 = (k + 1)(k + 2)(2k + 9)/6</span>, which is the formula for <span class="chem">n = k + 1</span> because <span class="chem">2(k + 1) + 7 = 2k + 9</span>. Since <span class="chem">P(1)</span> is true and <span class="chem">P(k) =&gt; P(k + 1)</span>, the result holds for all <span class="chem">n \in \mathbb{Z}^+</span> by mathematical induction.<br>(f) <span class="chem">S(142) = 984 841</span> and <span class="chem">S(143) = 1 005 576</span>, so <span class="chem">n = 143</span>.</p>
      answer: "<p>(a) <span class=\"chem\">S(1) = 3</span>, <span class=\"chem\">S(2) = 3 + 8 = 11</span>, <span class=\"chem\">S(3) = 11 + 15 = 26</span>.<br>(b) <span class=\"chem\">a + b + c = 3</span>, <span class=\"chem\">8a + 4b + 2c = 11</span>, <span class=\"chem\">27a + 9b + 3c = 26</span>에서 <span class=\"chem\">a = 1/3</span>, <span class=\"chem\">b = 3/2</span>, <span class=\"chem\">c = 7/6</span>.<br>(c) 직접 계산하면 <span class=\"chem\">S(4) = 26 + 4 × 6 = 50</span>; 공식은 <span class=\"chem\">64/3 + 24 + 14/3 = 50</span>을 준다.<br>(d) <span class=\"chem\">S(n) = (2n^3 + 9n^2 + 7n)/6 = n(2n^2 + 9n + 7)/6 = n(n + 1)(2n + 7)/6</span>.<br>(e) <span class=\"chem\">n = 1</span>: <span class=\"chem\">1 × 3 = 3</span>이고 <span class=\"chem\">(1 × 2 × 9)/6 = 3</span>. 어떤 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">S(k) = k(k + 1)(2k + 7)/6</span>이라고 가정하자. 그러면 <span class=\"chem\">S(k + 1) = k(k + 1)(2k + 7)/6 + (k + 1)(k + 3) = (k + 1)(2k^2 + 7k + 6k + 18)/6 = (k + 1)(2k^2 + 13k + 18)/6 = (k + 1)(k + 2)(2k + 9)/6</span>이고, <span class=\"chem\">2(k + 1) + 7 = 2k + 9</span>이므로 이는 <span class=\"chem\">n = k + 1</span>일 때의 공식이다. <span class=\"chem\">P(1)</span>이 참이고 <span class=\"chem\">P(k) =&gt; P(k + 1)</span>이므로, 수학적 귀납법에 의해 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 결과가 성립한다.<br>(f) <span class=\"chem\">S(142) = 984 841</span>, <span class=\"chem\">S(143) = 1 005 576</span>이므로 <span class=\"chem\">n = 143</span>.</p>",
      markscheme: [
        // EN: A1: (a) S(1) = 3 and S(2) = 11.
        "A1: (a) S(1) = 3, S(2) = 11.",
        // EN: A1: (a) S(3) = 26.
        "A1: (a) S(3) = 26.",
        // EN: M1: (b) Substitutes n = 1, 2, 3 into an³ + bn² + cn.
        "M1: (b) an³ + bn² + cn에 n = 1, 2, 3을 대입함.",
        // EN: A1: (b) a + b + c = 3, 8a + 4b + 2c = 11, 27a + 9b + 3c = 26.
        "A1: (b) a + b + c = 3, 8a + 4b + 2c = 11, 27a + 9b + 3c = 26.",
        // EN: M1: (b) Solves the system (GDC or elimination).
        "M1: (b) 연립방정식을 풂 (GDC 또는 소거법).",
        // EN: A1: (b) a = 1/3, b = 3/2, c = 7/6.
        "A1: (b) a = 1/3, b = 3/2, c = 7/6.",
        // EN: A1: (c) Finds S(4) = 50 directly from the sum.
        "A1: (c) 합에서 직접 S(4) = 50을 구함.",
        // EN: A1: (c) Shows the formula gives 64/3 + 24 + 14/3 = 50.
        "A1: (c) 공식이 64/3 + 24 + 14/3 = 50을 줌을 보임.",
        // EN: M1: (d) Writes S(n) = (2n³ + 9n² + 7n)/6 = n(2n² + 9n + 7)/6.
        "M1: (d) S(n) = (2n³ + 9n² + 7n)/6 = n(2n² + 9n + 7)/6으로 씀.",
        // EN: A1: (d) Factorises 2n² + 9n + 7 = (n + 1)(2n + 7), giving the result AG (no mark for the given line).
        "A1: (d) 2n² + 9n + 7 = (n + 1)(2n + 7)로 인수분해하여 결과를 이끌어 냄 AG (주어진 줄 자체에는 점수 없음).",
        // EN: A1: (e) Base case n = 1: both sides equal 3, so P(1) is true.
        "A1: (e) 초기 단계 n = 1: 양변이 모두 3이므로 P(1)은 참.",
        // EN: M1: (e) Assumes P(k) true for some k ∈ ℤ⁺.
        "M1: (e) 어떤 k ∈ ℤ⁺에 대해 P(k)가 참이라고 가정함.",
        // EN: M1: (e) Adds the (k + 1)-th term (k + 1)(k + 3) to S(k).
        "M1: (e) S(k)에 제(k + 1)항 (k + 1)(k + 3)을 더함.",
        // EN: A1: (e) Takes out the factor (k + 1)/6 to get (k + 1)(2k² + 13k + 18)/6.
        "A1: (e) 인수 (k + 1)/6을 묶어 내어 (k + 1)(2k² + 13k + 18)/6을 얻음.",
        // EN: A1: (e) Factorises to (k + 1)(k + 2)(2k + 9)/6 = (k + 1)(k + 2)(2(k + 1) + 7)/6.
        "A1: (e) (k + 1)(k + 2)(2k + 9)/6 = (k + 1)(k + 2)(2(k + 1) + 7)/6으로 인수분해함.",
        // EN: R1: (e) Induction conclusion sentence (only if the M marks above are earned).
        "R1: (e) 수학적 귀납법 결론 문장 (앞선 M 점수를 획득한 경우에만 부여).",
        // EN: M1: (f) Uses the formula with a GDC table, graph or solver for S(n) > 10⁶.
        "M1: (f) S(n) > 10⁶에 대해 공식과 GDC 표, 그래프 또는 풀이 기능을 이용함.",
        // EN: A1: (f) n = 143.
        "A1: (f) n = 143.",
      ],
    },

    // ── t1-5-q058 · short · challenge · AHL · AHL 1.15 · 17 marks
    "t1-5-q058": {
      // EN: <strong>Investigation: closed forms for a recurrence.</strong> A sequence is defined by <span class="chem">u_1 = 2</span> and <span class="chem">u_{n+1} = 3u_n - 2</span> for <span class="chem">n \in \mathbb{Z}^+</span>.<br>(a) Write down <span class="chem">u_2</span>, <span class="chem">u_3</span>, <span class="chem">u_4</span> and <span class="chem">u_5</span>. [2 marks]<br>(b) Let <span class="chem">v_n = u_n - 1</span>. Write down <span class="chem">v_1, ..., v_5</span> and hence conjecture a formula for <span class="chem">u_n</span> in terms of <span class="chem">n</span>. [2 marks]<br>(c) Prove your conjecture by mathematical induction. [5 marks]<br>(d) Find an expression for <span class="chem">Sigma_{r=1}^n u_r</span> in terms of <span class="chem">n</span>. [3 marks]<br>(e) Find the smallest <span class="chem">n</span> for which <span class="chem">Sigma_{r=1}^n u_r &gt; 10^9</span>. [2 marks]<br>(f) Now consider the general recurrence <span class="chem">u_{n+1} = au_n + b</span> with <span class="chem">a != 1</span>, and let <span class="chem">L = b/(1 - a)</span>. Show that <span class="chem">u_{n+1} - L = a(u_n - L)</span>, deduce a formula for <span class="chem">u_n</span> in terms of <span class="chem">u_1</span>, <span class="chem">a</span>, <span class="chem">L</span> and <span class="chem">n</span>, and check it against part (b). [3 marks]
      stem: "<strong>탐구: 점화식의 일반항.</strong> 수열이 <span class=\"chem\">u_1 = 2</span>, <span class=\"chem\">u_{n+1} = 3u_n - 2</span> (<span class=\"chem\">n \\in \\mathbb{Z}^+</span>)로 정의된다.<br>(a) <span class=\"chem\">u_2</span>, <span class=\"chem\">u_3</span>, <span class=\"chem\">u_4</span>, <span class=\"chem\">u_5</span>를 쓰시오 (Write down). [2 marks]<br>(b) <span class=\"chem\">v_n = u_n - 1</span>이라 하자. <span class=\"chem\">v_1, ..., v_5</span>를 쓰고, 이를 이용하여 (Hence) <span class=\"chem\">u_n</span>을 <span class=\"chem\">n</span>으로 나타내는 공식을 추측하시오. [2 marks]<br>(c) 여러분의 추측을 수학적 귀납법으로 증명하시오 (Prove). [5 marks]<br>(d) <span class=\"chem\">Sigma_{r=1}^n u_r</span>을 <span class=\"chem\">n</span>으로 나타낸 식을 구하시오 (Find). [3 marks]<br>(e) <span class=\"chem\">Sigma_{r=1}^n u_r &gt; 10^9</span>을 만족하는 가장 작은 <span class=\"chem\">n</span>을 구하시오 (Find). [2 marks]<br>(f) 이제 <span class=\"chem\">a != 1</span>인 일반적인 점화식 <span class=\"chem\">u_{n+1} = au_n + b</span>를 생각하고, <span class=\"chem\">L = b/(1 - a)</span>라 하자. <span class=\"chem\">u_{n+1} - L = a(u_n - L)</span>임을 보이고 (Show that), <span class=\"chem\">u_n</span>을 <span class=\"chem\">u_1</span>, <span class=\"chem\">a</span>, <span class=\"chem\">L</span>, <span class=\"chem\">n</span>으로 나타내는 공식을 추론하고 (Deduce), 그것을 (b)와 비교하여 확인하시오. [3 marks]",
      hints: [
        // EN: Decode: the substitution <span class="chem">v_n = u_n - 1</span> is the key idea. It turns the recurrence into a geometric sequence; part (f) asks you to explain why this works in general.
        "해석: 치환 <span class=\"chem\">v_n = u_n - 1</span>이 핵심 아이디어예요. 이것이 점화식을 등비수열로 바꿔 줘요. (f)는 이 방법이 왜 일반적으로 통하는지 설명하라는 거예요.",
        // EN: In (c), substitute the assumption into the recurrence <span class="chem">u_{k+1} = 3u_k - 2</span>.
        "(c)에서는 가정을 점화식 <span class=\"chem\">u_{k+1} = 3u_k - 2</span>에 대입하세요.",
        // EN: In (d), split the sum into a geometric series with first term 1 and ratio 3, plus <span class="chem">n</span> ones.
        "(d)에서는 합을 첫째항 1, 공비 3인 등비급수와 1을 <span class=\"chem\">n</span>번 더한 것으로 나누세요.",
        // EN: In (f), replace <span class="chem">b</span> by <span class="chem">L(1 - a)</span> in <span class="chem">au_n + b - L</span>.
        "(f)에서는 <span class=\"chem\">au_n + b - L</span>의 <span class=\"chem\">b</span>를 <span class=\"chem\">L(1 - a)</span>로 바꾸세요.",
      ],
      // EN: <p><strong>Decode:</strong> “a fixed amount added after multiplying” hides a geometric sequence. Shifting by the fixed point <span class="chem">L</span> removes the constant term.</p><p>The closed form <span class="chem">u_n = 3^{n-1} + 1</span> is proved in one line of algebra in the inductive step. Summing gives <span class="chem">(3^n - 1)/2 + n</span>, which first exceeds <span class="chem">10^9</span> at <span class="chem">n = 20</span>. In general <span class="chem">u_n = L + (u_1 - L)a^{n-1}</span>.</p>
      solution: "<p><strong>해석:</strong> “곱한 다음 일정한 양을 더하는” 꼴에는 등비수열이 숨어 있어요. 고정점 <span class=\"chem\">L</span>만큼 평행이동하면 상수항이 사라져요.</p><p>일반항 <span class=\"chem\">u_n = 3^{n-1} + 1</span>은 귀납 단계에서 대수 한 줄로 증명돼요. 합하면 <span class=\"chem\">(3^n - 1)/2 + n</span>이고, 이것은 <span class=\"chem\">n = 20</span>에서 처음으로 <span class=\"chem\">10^9</span>을 넘어요. 일반적으로 <span class=\"chem\">u_n = L + (u_1 - L)a^{n-1}</span>이에요.</p>",
      // EN: <p>(a) <span class="chem">u_2 = 4</span>, <span class="chem">u_3 = 10</span>, <span class="chem">u_4 = 28</span>, <span class="chem">u_5 = 82</span>.<br>(b) <span class="chem">v_n = 1, 3, 9, 27, 81</span>: powers of 3, so <span class="chem">u_n = 3^{n-1} + 1</span>.<br>(c) <span class="chem">n = 1</span>: <span class="chem">3^0 + 1 = 2 = u_1</span>. Assume <span class="chem">u_k = 3^{k-1} + 1</span> for some <span class="chem">k \in \mathbb{Z}^+</span>. Then <span class="chem">u_{k+1} = 3(3^{k-1} + 1) - 2 = 3^k + 1</span>, the formula for <span class="chem">n = k + 1</span>. By induction the formula holds for all <span class="chem">n \in \mathbb{Z}^+</span>.<br>(d) <span class="chem">Sigma_{r=1}^n (3^{r-1} + 1) = (3^n - 1)/2 + n</span>.<br>(e) <span class="chem">n = 19</span> gives <span class="chem">581 130 752</span>; <span class="chem">n = 20</span> gives <span class="chem">1 743 392 220</span>. So <span class="chem">n = 20</span>.<br>(f) Since <span class="chem">b = L(1 - a)</span>, <span class="chem">u_{n+1} - L = au_n + L - aL - L = a(u_n - L)</span>. So <span class="chem">u_n - L</span> is geometric with ratio <span class="chem">a</span>: <span class="chem">u_n = L + (u_1 - L)a^{n-1}</span>. For <span class="chem">a = 3, b = -2</span>: <span class="chem">L = 1</span> and <span class="chem">u_n = 1 + (2 - 1)3^{n-1}</span>, as in (b).</p>
      answer: "<p>(a) <span class=\"chem\">u_2 = 4</span>, <span class=\"chem\">u_3 = 10</span>, <span class=\"chem\">u_4 = 28</span>, <span class=\"chem\">u_5 = 82</span>.<br>(b) <span class=\"chem\">v_n = 1, 3, 9, 27, 81</span>: 3의 거듭제곱이므로 <span class=\"chem\">u_n = 3^{n-1} + 1</span>.<br>(c) <span class=\"chem\">n = 1</span>: <span class=\"chem\">3^0 + 1 = 2 = u_1</span>. 어떤 <span class=\"chem\">k \\in \\mathbb{Z}^+</span>에 대하여 <span class=\"chem\">u_k = 3^{k-1} + 1</span>이라고 가정하자. 그러면 <span class=\"chem\">u_{k+1} = 3(3^{k-1} + 1) - 2 = 3^k + 1</span>이고, 이는 <span class=\"chem\">n = k + 1</span>일 때의 공식이다. 수학적 귀납법에 의해 모든 <span class=\"chem\">n \\in \\mathbb{Z}^+</span>에 대하여 공식이 성립한다.<br>(d) <span class=\"chem\">Sigma_{r=1}^n (3^{r-1} + 1) = (3^n - 1)/2 + n</span>.<br>(e) <span class=\"chem\">n = 19</span>이면 <span class=\"chem\">581 130 752</span>; <span class=\"chem\">n = 20</span>이면 <span class=\"chem\">1 743 392 220</span>. 따라서 <span class=\"chem\">n = 20</span>.<br>(f) <span class=\"chem\">b = L(1 - a)</span>이므로 <span class=\"chem\">u_{n+1} - L = au_n + L - aL - L = a(u_n - L)</span>. 따라서 <span class=\"chem\">u_n - L</span>은 공비가 <span class=\"chem\">a</span>인 등비수열이다: <span class=\"chem\">u_n = L + (u_1 - L)a^{n-1}</span>. <span class=\"chem\">a = 3, b = -2</span>일 때: <span class=\"chem\">L = 1</span>이고 <span class=\"chem\">u_n = 1 + (2 - 1)3^{n-1}</span>이며, (b)와 같다.</p>",
      markscheme: [
        // EN: A1: (a) u₂ = 4, u₃ = 10.
        "A1: (a) u₂ = 4, u₃ = 10.",
        // EN: A1: (a) u₄ = 28, u₅ = 82.
        "A1: (a) u₄ = 28, u₅ = 82.",
        // EN: A1: (b) v₁, …, v₅ = 1, 3, 9, 27, 81.
        "A1: (b) v₁, …, v₅ = 1, 3, 9, 27, 81.",
        // EN: A1: (b) Conjecture u<sub>n</sub> = 3<sup>n−1</sup> + 1.
        "A1: (b) u<sub>n</sub> = 3<sup>n−1</sup> + 1로 추측함.",
        // EN: A1: (c) Base case: 3⁰ + 1 = 2 = u₁, so P(1) is true.
        "A1: (c) 초기 단계: 3⁰ + 1 = 2 = u₁이므로 P(1)은 참.",
        // EN: M1: (c) Assumes u<sub>k</sub> = 3<sup>k−1</sup> + 1 for some k ∈ ℤ⁺.
        "M1: (c) 어떤 k ∈ ℤ⁺에 대해 u<sub>k</sub> = 3<sup>k−1</sup> + 1이라고 가정함.",
        // EN: M1: (c) Uses the recurrence: u<sub>k+1</sub> = 3(3<sup>k−1</sup> + 1) − 2.
        "M1: (c) 점화식을 이용함: u<sub>k+1</sub> = 3(3<sup>k−1</sup> + 1) − 2.",
        // EN: A1: (c) Simplifies to 3<sup>k</sup> + 1 = 3<sup>(k+1)−1</sup> + 1.
        "A1: (c) 3<sup>k</sup> + 1 = 3<sup>(k+1)−1</sup> + 1로 정리함.",
        // EN: R1: (c) Induction conclusion sentence (only if the M marks above are earned).
        "R1: (c) 수학적 귀납법 결론 문장 (앞선 M 점수를 획득한 경우에만 부여).",
        // EN: M1: (d) Splits the sum into Σ3<sup>r−1</sup> + Σ1.
        "M1: (d) 합을 Σ3<sup>r−1</sup> + Σ1로 나눔.",
        // EN: A1: (d) Geometric part (3<sup>n</sup> − 1)/2.
        "A1: (d) 등비 부분 (3<sup>n</sup> − 1)/2.",
        // EN: A1: (d) Total (3<sup>n</sup> − 1)/2 + n.
        "A1: (d) 합계 (3<sup>n</sup> − 1)/2 + n.",
        // EN: M1: (e) Uses a GDC table, graph or solver on (3<sup>n</sup> − 1)/2 + n > 10⁹.
        "M1: (e) (3<sup>n</sup> − 1)/2 + n > 10⁹에 대해 GDC 표, 그래프 또는 풀이 기능을 이용함.",
        // EN: A1: (e) n = 20.
        "A1: (e) n = 20.",
        // EN: M1: (f) Uses b = L(1 − a) to show u<sub>n+1</sub> − L = a(u<sub>n</sub> − L).
        "M1: (f) b = L(1 − a)를 이용해 u<sub>n+1</sub> − L = a(u<sub>n</sub> − L)을 보임.",
        // EN: A1: (f) Deduces u<sub>n</sub> = L + (u₁ − L)a<sup>n−1</sup>.
        "A1: (f) u<sub>n</sub> = L + (u₁ − L)a<sup>n−1</sup>을 추론함.",
        // EN: R1: (f) Checks a = 3, b = −2: L = 1 gives u<sub>n</sub> = 1 + 3<sup>n−1</sup>, agreeing with (b).
        "R1: (f) a = 3, b = −2로 확인함: L = 1에서 u<sub>n</sub> = 1 + 3<sup>n−1</sup>이 되어 (b)와 일치함.",
      ],
    },

    // ── t1-5-q059 · short · challenge · AHL · AHL 1.16 · 15 marks
    "t1-5-q059": {
      // EN: <strong>Investigation: when does a quadratic fit three points?</strong> We look for a quadratic <span class="chem">y = ax^2 + bx + c</span> whose graph passes through the points <span class="chem">(1, p)</span>, <span class="chem">(2, q)</span> and <span class="chem">(t, r)</span>.<br>(a) For <span class="chem">t = 3</span>, <span class="chem">p = 2</span>, <span class="chem">q = 3</span> and <span class="chem">r = 6</span>, write down the system of equations for <span class="chem">a, b, c</span> and solve it. [3 marks]<br>(b) For <span class="chem">t = 3.7</span>, <span class="chem">p = 2</span>, <span class="chem">q = 3</span>, <span class="chem">r = 6</span>, use your GDC to find <span class="chem">a</span>. [2 marks]<br>(c) For general values, show that row reduction gives <span class="chem">(t - 1)(t - 2)a = (r - p) - (t - 1)(q - p)</span>. [4 marks]<br>(d) Hence state the values of <span class="chem">t</span> for which there is a unique quadratic. For <span class="chem">t = 2</span>, state the condition for infinitely many solutions and the condition for no solution, and explain each case in terms of the points. [3 marks]<br>(e) For <span class="chem">t = 2</span> and <span class="chem">r = q</span>, let <span class="chem">a = lambda</span> and find <span class="chem">b</span> and <span class="chem">c</span> in terms of <span class="chem">lambda</span>, <span class="chem">p</span> and <span class="chem">q</span>. [2 marks]<br>(f) State what happens when <span class="chem">t = 1</span>. [1 mark]
      stem: "<strong>탐구: 이차함수가 세 점을 지나는 것은 언제인가?</strong> 그래프가 점 <span class=\"chem\">(1, p)</span>, <span class=\"chem\">(2, q)</span>, <span class=\"chem\">(t, r)</span>를 지나는 이차함수 <span class=\"chem\">y = ax^2 + bx + c</span>를 찾는다.<br>(a) <span class=\"chem\">t = 3</span>, <span class=\"chem\">p = 2</span>, <span class=\"chem\">q = 3</span>, <span class=\"chem\">r = 6</span>일 때 <span class=\"chem\">a, b, c</span>에 대한 연립방정식을 쓰고 (Write down) 이를 푸시오. [3 marks]<br>(b) <span class=\"chem\">t = 3.7</span>, <span class=\"chem\">p = 2</span>, <span class=\"chem\">q = 3</span>, <span class=\"chem\">r = 6</span>일 때 GDC를 이용하여 <span class=\"chem\">a</span>를 구하시오 (Find). [2 marks]<br>(c) 일반적인 값에 대해 행 연산으로 <span class=\"chem\">(t - 1)(t - 2)a = (r - p) - (t - 1)(q - p)</span>를 얻음을 보이시오 (Show that). [4 marks]<br>(d) 이를 이용하여 (Hence) 이차함수가 유일하게 정해지는 <span class=\"chem\">t</span>의 값을 답하시오 (State). <span class=\"chem\">t = 2</span>일 때 무수히 많은 해를 가질 조건과 해가 없을 조건을 답하고, 각 경우를 점들의 관점에서 설명하시오. [3 marks]<br>(e) <span class=\"chem\">t = 2</span>, <span class=\"chem\">r = q</span>일 때 <span class=\"chem\">a = lambda</span>라 하고 <span class=\"chem\">b</span>와 <span class=\"chem\">c</span>를 <span class=\"chem\">lambda</span>, <span class=\"chem\">p</span>, <span class=\"chem\">q</span>로 나타내시오 (Find). [2 marks]<br>(f) <span class=\"chem\">t = 1</span>일 때 어떻게 되는지 답하시오 (State). [1 mark]",
      hints: [
        // EN: Decode: this investigation links the algebra of the final row <span class="chem">g(t)a = h</span> to a picture. Ask yourself in each case: how many DIFFERENT points are there, and do any two share an <span class="chem">x</span>-coordinate?
        "해석: 이 탐구는 마지막 행 <span class=\"chem\">g(t)a = h</span>의 대수를 그림과 연결해요. 각 경우마다 스스로 물어보세요: “서로 다른” 점은 몇 개인가? <span class=\"chem\">x</span>좌표가 같은 두 점이 있는가?",
        // EN: In (c), eliminate <span class="chem">c</span> first (subtract row 1 from rows 2 and 3), then eliminate <span class="chem">b</span>.
        "(c)에서는 먼저 <span class=\"chem\">c</span>를 소거하고(2행과 3행에서 1행을 빼서), 그다음 <span class=\"chem\">b</span>를 소거하세요.",
        // EN: Factorise <span class="chem">t^2 - 3t + 2</span>. The system has a unique solution exactly when this coefficient is non-zero.
        "<span class=\"chem\">t^2 - 3t + 2</span>를 인수분해하세요. 이 계수가 0이 아닐 때, 그리고 그때에만 연립방정식은 유일한 해를 가져요.",
      ],
      // EN: <p><strong>Decode:</strong> the coefficient <span class="chem">(t - 1)(t - 2)</span> vanishes exactly when the third point shares an <span class="chem">x</span>-coordinate with one of the first two, which is when a parabola (a function) may fail to exist or fail to be unique.</p><p>(b) From (c): <span class="chem">(2.7)(1.7)a = 4 - 2.7</span>, so <span class="chem">a = 1.3/4.59 = 0.283</span>, agreeing with the GDC. (e) From <span class="chem">3lambda + b = q - p</span> and <span class="chem">lambda + b + c = p</span>.</p>
      solution: "<p><strong>해석:</strong> 계수 <span class=\"chem\">(t - 1)(t - 2)</span>는 세 번째 점이 처음 두 점 중 하나와 <span class=\"chem\">x</span>좌표가 같을 때 정확히 0이 되며, 이때가 바로 포물선(함수)이 존재하지 않거나 유일하지 않을 수 있는 때예요.</p><p>(b) (c)에서: <span class=\"chem\">(2.7)(1.7)a = 4 - 2.7</span>이므로 <span class=\"chem\">a = 1.3/4.59 = 0.283</span>이고, GDC와 일치해요. (e) <span class=\"chem\">3lambda + b = q - p</span>와 <span class=\"chem\">lambda + b + c = p</span>에서 구해요.</p>",
      // EN: <p>(a) <span class="chem">a + b + c = 2</span>, <span class="chem">4a + 2b + c = 3</span>, <span class="chem">9a + 3b + c = 6</span>. Subtracting: <span class="chem">3a + b = 1</span> and <span class="chem">5a + b = 3</span>, so <span class="chem">a = 1</span>, <span class="chem">b = -2</span>, <span class="chem">c = 3</span>.<br>(b) With <span class="chem">13.69a + 3.7b + c = 6</span>, the GDC gives <span class="chem">a = 0.283</span> (3 s.f.).<br>(c) <span class="chem">R_2 - R_1: 3a + b = q - p</span>. <span class="chem">R_3 - R_1: (t^2 - 1)a + (t - 1)b = r - p</span>. Subtract <span class="chem">(t - 1)</span> times the first: <span class="chem">(t^2 - 1 - 3(t - 1))a = (r - p) - (t - 1)(q - p)</span>, and <span class="chem">t^2 - 3t + 2 = (t - 1)(t - 2)</span>.<br>(d) Unique for <span class="chem">t != 1</span> and <span class="chem">t != 2</span> (if the three points happen to be collinear, this unique solution has <span class="chem">a = 0</span>, a straight line rather than a true quadratic). For <span class="chem">t = 2</span> the last row is <span class="chem">0a = r - q</span>: infinitely many if <span class="chem">r = q</span> (only two distinct points, and infinitely many parabolas pass through two points); none if <span class="chem">r != q</span> (two points with the same <span class="chem">x</span> and different <span class="chem">y</span>; no function can pass through both).<br>(e) <span class="chem">b = q - p - 3lambda</span>, <span class="chem">c = 2p - q + 2lambda</span>.<br>(f) For <span class="chem">t = 1</span> the last row is <span class="chem">0a = r - p</span>: infinitely many solutions if <span class="chem">r = p</span>, no solution if <span class="chem">r != p</span>.</p>
      answer: "<p>(a) <span class=\"chem\">a + b + c = 2</span>, <span class=\"chem\">4a + 2b + c = 3</span>, <span class=\"chem\">9a + 3b + c = 6</span>. 빼면 <span class=\"chem\">3a + b = 1</span>, <span class=\"chem\">5a + b = 3</span>이므로 <span class=\"chem\">a = 1</span>, <span class=\"chem\">b = -2</span>, <span class=\"chem\">c = 3</span>.<br>(b) <span class=\"chem\">13.69a + 3.7b + c = 6</span>을 쓰면 GDC로 <span class=\"chem\">a = 0.283</span> (유효숫자 3자리).<br>(c) <span class=\"chem\">R_2 - R_1: 3a + b = q - p</span>. <span class=\"chem\">R_3 - R_1: (t^2 - 1)a + (t - 1)b = r - p</span>. 첫 번째 식의 <span class=\"chem\">(t - 1)</span>배를 빼면 <span class=\"chem\">(t^2 - 1 - 3(t - 1))a = (r - p) - (t - 1)(q - p)</span>이고, <span class=\"chem\">t^2 - 3t + 2 = (t - 1)(t - 2)</span>.<br>(d) <span class=\"chem\">t != 1</span>이고 <span class=\"chem\">t != 2</span>일 때 유일하다 (세 점이 우연히 한 직선 위에 있으면 이 유일한 해는 <span class=\"chem\">a = 0</span>이 되어, 진짜 이차함수가 아니라 직선이다). <span class=\"chem\">t = 2</span>이면 마지막 행은 <span class=\"chem\">0a = r - q</span>: <span class=\"chem\">r = q</span>이면 무수히 많은 해 (서로 다른 점이 두 개뿐이고, 두 점을 지나는 포물선은 무수히 많다); <span class=\"chem\">r != q</span>이면 해가 없다 (<span class=\"chem\">x</span>가 같고 <span class=\"chem\">y</span>가 다른 두 점이므로 두 점을 모두 지나는 함수는 없다).<br>(e) <span class=\"chem\">b = q - p - 3lambda</span>, <span class=\"chem\">c = 2p - q + 2lambda</span>.<br>(f) <span class=\"chem\">t = 1</span>이면 마지막 행은 <span class=\"chem\">0a = r - p</span>: <span class=\"chem\">r = p</span>이면 무수히 많은 해, <span class=\"chem\">r != p</span>이면 해가 없다.</p>",
      markscheme: [
        // EN: M1: (a) Substitutes the three points into y = ax² + bx + c.
        "M1: (a) 세 점을 y = ax² + bx + c에 대입함.",
        // EN: A1: (a) a + b + c = 2, 4a + 2b + c = 3, 9a + 3b + c = 6.
        "A1: (a) a + b + c = 2, 4a + 2b + c = 3, 9a + 3b + c = 6.",
        // EN: A1: (a) a = 1, b = −2, c = 3.
        "A1: (a) a = 1, b = −2, c = 3.",
        // EN: M1: (b) Sets up the system with the third equation 13.69a + 3.7b + c = 6 and uses technology.
        "M1: (b) 세 번째 방정식 13.69a + 3.7b + c = 6으로 연립방정식을 세우고 공학 도구를 이용함.",
        // EN: A1: (b) a = 0.283.
        "A1: (b) a = 0.283.",
        // EN: M1: (c) R₂ − R₁ gives 3a + b = q − p.
        "M1: (c) R₂ − R₁에서 3a + b = q − p.",
        // EN: M1: (c) R₃ − R₁ gives (t² − 1)a + (t − 1)b = r − p.
        "M1: (c) R₃ − R₁에서 (t² − 1)a + (t − 1)b = r − p.",
        // EN: M1: (c) Subtracts (t − 1) × (3a + b = q − p) to eliminate b.
        "M1: (c) b를 소거하기 위해 (t − 1) × (3a + b = q − p)를 뺌.",
        // EN: A1: (c) Coefficient t² − 1 − 3(t − 1) = (t − 1)(t − 2), giving the result AG (no mark for the given line).
        "A1: (c) 계수 t² − 1 − 3(t − 1) = (t − 1)(t − 2)가 되어 결과를 이끌어 냄 AG (주어진 줄 자체에는 점수 없음).",
        // EN: A1: (d) Unique quadratic for all t except t = 1 and t = 2.
        "A1: (d) t = 1과 t = 2를 제외한 모든 t에서 유일한 이차함수.",
        // EN: A1: (d) t = 2: infinitely many if r = q, none if r ≠ q.
        "A1: (d) t = 2: r = q이면 무수히 많음, r ≠ q이면 해 없음.",
        // EN: R1: (d) Explains: r = q means only two distinct points (infinitely many parabolas fit); r ≠ q means one x-value with two y-values (no function).
        "R1: (d) 설명: r = q는 서로 다른 점이 두 개뿐이라는 뜻 (지나는 포물선이 무수히 많음); r ≠ q는 한 x값에 두 y값이 있다는 뜻 (함수가 아님).",
        // EN: M1: (e) Back-substitutes a = λ into 3a + b = q − p and a + b + c = p.
        "M1: (e) a = λ를 3a + b = q − p와 a + b + c = p에 역으로 대입함.",
        // EN: A1: (e) b = q − p − 3λ and c = 2p − q + 2λ.
        "A1: (e) b = q − p − 3λ, c = 2p − q + 2λ.",
        // EN: A1: (f) t = 1: infinitely many solutions if r = p, otherwise no solution.
        "A1: (f) t = 1: r = p이면 무수히 많은 해, 그렇지 않으면 해 없음.",
      ],
    },

  }
});
