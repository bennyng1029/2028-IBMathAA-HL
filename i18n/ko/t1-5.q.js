/* t1-5.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-5.q', {
  questions: {

    // ── t1-5-q001 · mcq · foundation · SL · SL 1.6 · 2 marks
    "t1-5-q001": {
      // EN: To prove that <span class="chem">x^2 - 8x + 21 &gt;= 5</span> for all <span class="chem">x in mathbb{R}</span>, which completed-square form directly establishes the result?
      stem: "모든 <span class=\"chem\">x in mathbb{R}</span>에 대하여 <span class=\"chem\">x^2 - 8x + 21 &gt;= 5</span>임을 증명할 때, 이를 직접적으로 보여 주는 완전제곱식 형태는 어느 것인가요?",
      options: [
        // EN: <span class="chem">(x - 4)^2 + 5</span>, and since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x in mathbb{R}</span>, the expression is <span class="chem">&gt;= 5</span>.
        "<span class=\"chem\">(x - 4)^2 + 5</span>이고, 모든 <span class=\"chem\">x in mathbb{R}</span>에 대해 <span class=\"chem\">(x - 4)^2 &gt;= 0</span>이므로 식은 <span class=\"chem\">&gt;= 5</span>이다.",
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
      // EN: <p>Completing the square gives <span class="chem">x^2 - 8x + 21 == (x - 4)^2 + 5</span>. Since <span class="chem">(x - 4)^2 &gt;= 0</span> for all <span class="chem">x in mathbb{R}</span>, we have <span class="chem">(x - 4)^2 + 5 &gt;= 5</span>.</p>
      solution: "<p>완전제곱식으로 변형하면 <span class=\"chem\">x^2 - 8x + 21 == (x - 4)^2 + 5</span>예요. 모든 <span class=\"chem\">x in mathbb{R}</span>에 대해 <span class=\"chem\">(x - 4)^2 &gt;= 0</span>이므로 <span class=\"chem\">(x - 4)^2 + 5 &gt;= 5</span>가 성립해요.</p>",
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
      // EN: The sum of the squares of any three consecutive integers <span class="chem">(n - 1)^2 + n^2 + (n + 1)^2</span> can be written in the form <span class="chem">A n^2 + B</span>, where <span class="chem">A, B in mathbb{Z}</span>. Find the value of <span class="chem">A + B</span>.
      stem: "연속하는 임의의 세 정수의 제곱의 합 <span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2</span>은 <span class=\"chem\">A n^2 + B</span> (<span class=\"chem\">A, B in mathbb{Z}</span>) 꼴로 나타낼 수 있어요. <span class=\"chem\">A + B</span>의 값을 구하시오 (Find).",
      hints: [
        // EN: Expand <span class="chem">(n - 1)^2 = n^2 - 2n + 1</span> and <span class="chem">(n + 1)^2 = n^2 + 2n + 1</span>.
        "<span class=\"chem\">(n - 1)^2 = n^2 - 2n + 1</span>과 <span class=\"chem\">(n + 1)^2 = n^2 + 2n + 1</span>을 전개하세요.",
        // EN: Add all three terms: the <span class="chem">-2n</span> and <span class="chem">+2n</span> cancel, leaving <span class="chem">3n^2 + 2</span>.
        "세 식을 모두 더하면 <span class=\"chem\">-2n</span>과 <span class=\"chem\">+2n</span>이 소거되어 <span class=\"chem\">3n^2 + 2</span>만 남아요.",
      ],
      // EN: <p><span class="chem">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>. Thus <span class="chem">A = 3, B = 2</span> and <span class="chem">A + B = 5</span>.</p>
      solution: "<p><span class=\"chem\">(n - 1)^2 + n^2 + (n + 1)^2 = (n^2 - 2n + 1) + n^2 + (n^2 + 2n + 1) = 3n^2 + 2</span>예요. 따라서 <span class=\"chem\">A = 3, B = 2</span>이고 <span class=\"chem\">A + B = 5</span>예요.</p>",
    },

    // ── t1-5-q003 · order · exam · SL · SL 1.6 · 3 marks
    "t1-5-q003": {
      // EN: Arrange the steps in logical <span class="chem">LHS -&gt; RHS</span> order to prove the algebraic identity <span class="chem">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span> for <span class="chem">n in mathbb{Z}^+</span>.
      stem: "<span class=\"chem\">n in mathbb{Z}^+</span>에 대하여 항등식 <span class=\"chem\">1 / (n(n + 1)) + 1 / ((n + 1)(n + 2)) == 2 / (n(n + 2))</span>을 증명하는 단계를 논리적인 <span class=\"chem\">LHS -&gt; RHS</span> 순서로 배열하시오.",
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
      // EN: <p>Using <span class="chem">2n + 1</span> for all three numbers only proves the special case where the integers are consecutive! Using distinct <span class="chem">a, b, c in mathbb{Z}</span> gives <span class="chem">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>, which is odd.</p>
      solution: "<p>세 수에 모두 <span class=\"chem\">2n + 1</span>을 쓰면 연속하는 특별한 경우만 증명하게 돼요! 서로 다른 <span class=\"chem\">a, b, c in mathbb{Z}</span>를 사용하면 <span class=\"chem\">4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>이 되어 홀수임이 증명돼요.</p>",
      // EN: <p>Let the two odd integers be <span class="chem">2a + 1</span> and <span class="chem">2b + 1</span>, and the even integer be <span class="chem">2c</span>, where <span class="chem">a, b, c in mathbb{Z}</span>.<br><span class="chem">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>.<br>Since <span class="chem">k = 2c^2 - 2ab - a - b - 1 in mathbb{Z}</span>, the expression is of the form <span class="chem">2k + 1</span>, which is always an odd integer.</p>
      answer: "<p><span class=\"chem\">a, b, c in mathbb{Z}</span>에 대하여 두 홀수를 <span class=\"chem\">2a + 1</span>, <span class=\"chem\">2b + 1</span>이라 하고 짝수를 <span class=\"chem\">2c</span>라 하자.<br><span class=\"chem\">(2c)^2 - (2a + 1)(2b + 1) = 4c^2 - (4ab + 2a + 2b + 1) = 2(2c^2 - 2ab - a - b - 1) + 1</span>.<br><span class=\"chem\">k = 2c^2 - 2ab - a - b - 1 in mathbb{Z}</span>이므로 이 식은 <span class=\"chem\">2k + 1</span> 꼴이 되어 항상 홀수이다.</p>",
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
      // EN: In a proof by mathematical induction for <span class="chem">n in mathbb{Z}^+</span>, which wording of the inductive hypothesis earns full IB reasoning credit?
      stem: "<span class=\"chem\">n in mathbb{Z}^+</span>에 대한 수학적 귀납법 증명에서, IB 추론 점수(R1)를 온전히 받을 수 있는 귀납 가정의 표현은 어느 것인가요?",
      options: [
        // EN: “Assume <span class="chem">P(k)</span> is true for some <span class="chem">k in mathbb{Z}^+</span>.”
        "“어떤 <span class=\"chem\">k in mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(k)</span>가 참이라고 가정하자.”",
        // EN: “Assume <span class="chem">P(k)</span> is true for all <span class=\"chem\">k in mathbb{Z}^+</span>.”
        "“모든 <span class=\"chem\">k in mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(k)</span>가 참이라고 가정하자.”",
        // EN: “Suppose <span class="chem">P(n)</span> is true for <span class="chem">n = k + 1</span>.”
        "“<span class=\"chem\">n = k + 1</span>일 때 <span class=\"chem\">P(n)</span>이 참이라고 가정하자.”",
        // EN: “Since <span class="chem">P(1)</span> and <span class="chem">P(2)</span> are true, <span class="chem">P(k)</span> is true.”
        "“<span class=\"chem\">P(1)</span>과 <span class=\"chem\">P(2)</span>가 참이므로 <span class=\"chem\">P(k)</span>도 참이다.”",
      ],
      hints: [
        // EN: Remember the domino analogy: you only assume that one particular domino <span class="chem">k</span> falls, and show it knocks over <span class="chem">k + 1</span>.
        "도미노 비유를 떠올리세요: 특정한 하나의 도미노 <span class=\"chem\">k</span>가 쓰러진다고만 가정하고, 그것이 <span class=\"chem\">k + 1</span>을 쓰러뜨림을 보이는 거예요.",
        // EN: Distinguish carefully between "for some <span class="chem">k in mathbb{Z}^+</span>" and "for all <span class="chem">k in mathbb{Z}^+</span>".
        "“어떤(for some) <span class=\"chem\">k in mathbb{Z}^+</span>에 대하여”와 “모든(for all) <span class=\"chem\">k in mathbb{Z}^+</span>에 대하여”를 정확히 구분하세요.",
      ],
      // EN: <p>IB markschemes require the inductive hypothesis to be stated for <strong>some</strong> (or a particular) positive integer <span class="chem">k in mathbb{Z}^+</span>, never for all <span class="chem">k</span>.</p>
      solution: "<p>IB 채점 기준에서는 귀납 가정을 절대 모든 <span class=\"chem\">k</span>가 아니라 <strong>어떤</strong>(또는 특정한) 양의 정수 <span class=\"chem\">k in mathbb{Z}^+</span>에 대해 서술하도록 요구해요.</p>",
      misconception: {
        // EN (option B): Assuming P(k) is true for ALL k ∈ ℤ⁺ assumes the very conclusion you are trying to prove, which forfeits the final R1 mark on IB markschemes.
        "1": "모든 k ∈ ℤ⁺에 대해 P(k)가 참이라고 가정하면 증명하려는 결론 자체를 가정하는 꼴이 되어 IB 채점에서 마지막 R1 점수를 잃게 돼요.",
        // EN (option C): P(k + 1) is what you must deduce from P(k), not what you assume.
        "2": "P(k + 1)은 가정하는 것이 아니라 P(k)로부터 이끌어 내야 하는 결론이에요.",
        // EN (option D): Checking P(1) and P(2) only verifies two base cases; it does not establish P(k).
        "3": "P(1)과 P(2)를 확인하는 것은 초기 두 경우만 검증한 것일 뿐 P(k)를 성립시키지 못해요.",
      },
    },

    // ── t1-5-q006 · mcq · foundation · AHL · AHL 1.15 · 2 marks
    "t1-5-q006": {
      // EN: Consider the false statement: “For all real numbers <span class="chem">a, b in mathbb{R}</span>, if <span class="chem">a &lt; b</span>, then <span class="chem">a^2 &lt; b^2</span>.” Which pair <span class="chem">(a, b)</span> is a valid counterexample?
      stem: "거짓인 명제 “모든 실수 <span class=\"chem\">a, b in mathbb{R}</span>에 대하여 <span class=\"chem\">a &lt; b</span>이면 <span class=\"chem\">a^2 &lt; b^2</span>이다”를 생각하자. 올바른 반례가 되는 순서쌍 <span class=\"chem\">(a, b)</span>는 어느 것인가요?",
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

    // ── t1-5-q007 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q007": {
      // EN: In a proof by mathematical induction that <span class="chem">sum_{r=1}^n r(r!) = (n + 1)! - 1</span> for <span class="chem">n in mathbb{Z}^+</span>, the inductive step for <span class="chem">n = k + 1</span> combines the inductive hypothesis with the <span class="chem">(k + 1)</span>-th term:<br><span class="chem">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>.<br>State the integer value of <span class="chem">A</span>.
      stem: "<span class=\"chem\">n in mathbb{Z}^+</span>에 대하여 <span class=\"chem\">sum_{r=1}^n r(r!) = (n + 1)! - 1</span>임을 수학적 귀납법으로 증명할 때, <span class=\"chem\">n = k + 1</span>의 귀납 단계에서는 귀납 가정과 제<span class=\"chem\">(k + 1)</span>항을 합쳐 다음과 같이 정리해요:<br><span class=\"chem\">((k + 1)! - 1) + (k + 1)(k + 1)! = (k + A)(k + 1)! - 1 = (k + 2)! - 1</span>.<br>정수 <span class=\"chem\">A</span>의 값을 답하시오 (State).",
      hints: [
        // EN: Factor <span class="chem">(k + 1)!</span> out of the two terms <span class="chem">1 · (k + 1)! + (k + 1)(k + 1)!</span>.
        "두 항 <span class=\"chem\">1 · (k + 1)! + (k + 1)(k + 1)!</span>에서 <span class=\"chem\">(k + 1)!</span>을 묶어 내세요.",
        // EN: <span class="chem">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>.
        "<span class=\"chem\">(1 + k + 1)(k + 1)! = (k + 2)(k + 1)! = (k + 2)!</span>.",
      ],
      // EN: <p>Factoring <span class="chem">(k + 1)!</span> gives <span class="chem">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span>, so <span class="chem">A = 2</span>.</p>
      solution: "<p><span class=\"chem\">(k + 1)!</span>로 묶어 내면 <span class=\"chem\">(1 + k + 1)(k + 1)! - 1 = (k + 2)(k + 1)! - 1 = (k + 2)! - 1</span>이 되므로 <span class=\"chem\">A = 2</span>예요.</p>",
    },

    // ── t1-5-q008 · numeric · exam · AHL · AHL 1.15 · 4 marks
    "t1-5-q008": {
      // EN: We wish to prove by mathematical induction that <span class="chem">f(n) = 7^n + 2</span> is divisible by <span class="chem">3</span> for all <span class="chem">n in mathbb{Z}^+</span>. Assuming <span class="chem">7^k + 2 = 3A</span> (<span class="chem">A in mathbb{Z}</span>), we write <span class="chem">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span>. Enter the integer value of <span class="chem">B</span>.
      stem: "모든 <span class=\"chem\">n in mathbb{Z}^+</span>에 대하여 <span class=\"chem\">f(n) = 7^n + 2</span>가 <span class=\"chem\">3</span>으로 나누어떨어짐을 수학적 귀납법으로 증명하려고 해요. <span class=\"chem\">7^k + 2 = 3A</span> (<span class=\"chem\">A in mathbb{Z}</span>)라고 가정하면 <span class=\"chem\">f(k + 1) = 7(3A - 2) + 2 = 21A - 12 = 3(7A - B)</span>로 쓸 수 있어요. 정수 <span class=\"chem\">B</span>의 값을 입력하시오.",
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
        // EN: Assume, for a contradiction, that <span class="chem">log_3 7</span> is rational, so <span class="chem">log_3 7 = p / q</span> for some positive integers <span class="chem">p, q in mathbb{Z}^+</span>.
        "모순을 이끌어 내기 위해 <span class=\"chem\">log_3 7</span>이 유리수라고 가정하면, 어떤 양의 정수 <span class=\"chem\">p, q in mathbb{Z}^+</span>에 대해 <span class=\"chem\">log_3 7 = p / q</span>이다.",
        // EN: Rewrite the logarithmic equation in exponential form as <span class="chem">3^{p/q} = 7</span>, and raise both sides to the power <span class="chem">q</span> to obtain <span class="chem">3^p = 7^q</span>.
        "로그방정식을 지수 꼴 <span class=\"chem\">3^{p/q} = 7</span>로 고쳐 쓰고 양변을 <span class=\"chem\">q</span>제곱하여 <span class=\"chem\">3^p = 7^q</span>을 얻는다.",
        // EN: Observe that for all <span class="chem">p, q in mathbb{Z}^+</span>, <span class="chem">3^p</span> is divisible by the prime <span class="chem">3</span>, whereas <span class="chem">7^q</span> has only <span class="chem">7</span> as a prime factor and is not divisible by <span class=\"chem\">3</span>.
        "모든 <span class=\"chem\">p, q in mathbb{Z}^+</span>에 대해 <span class=\"chem\">3^p</span>는 소수 <span class=\"chem\">3</span>으로 나누어떨어지지만, <span class=\"chem\">7^q</span>은 소인수가 <span class=\"chem\">7</span>뿐이므로 <span class=\"chem\">3</span>으로 나누어떨어지지 않는다.",
        // EN: This is a contradiction by the fundamental uniqueness of prime factorizations; hence <span class="chem">log_3 7</span> must be irrational.
        "이는 소인수분해의 유일성에 모순이므로 <span class=\"chem\">log_3 7</span>은 반드시 무리수여야 한다.",
      ],
      hints: [
        // EN: Begin by assuming the negation: <span class="chem">log_3 7 = p / q</span> with <span class="chem">p, q in mathbb{Z}^+</span>.
        "먼저 명제의 부정을 가정하세요: <span class=\"chem\">p, q in mathbb{Z}^+</span>에 대해 <span class=\"chem\">log_3 7 = p / q</span>.",
        // EN: Convert to integer powers <span class="chem">3^p = 7^q</span> and compare prime factors.
        "정수 거듭제곱 <span class=\"chem\">3^p = 7^q</span>으로 바꾼 뒤 소인수를 비교하세요.",
      ],
      // EN: <p>Assume <span class="chem">log_3 7 = p/q</span> (<span class="chem">p, q in mathbb{Z}^+</span>), deduce <span class="chem">3^p = 7^q</span>, note that <span class="chem">3</span> divides the LHS but not the RHS, and conclude by contradiction that <span class="chem">log_3 7</span> is irrational.</p>
      solution: "<p><span class=\"chem\">log_3 7 = p/q</span> (<span class=\"chem\">p, q in mathbb{Z}^+</span>)로 가정하고 <span class=\"chem\">3^p = 7^q</span>을 유도한 뒤, <span class=\"chem\">3</span>이 좌변은 나누지만 우변은 나누지 못하므로 모순에 의해 <span class=\"chem\">log_3 7</span>이 무리수임을 결론짓는 순서예요.</p>",
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
      // EN: Find the unique solution to the <span class="chem">3 × 3</span> linear system:<br><span class="chem">x + y + z = 6</span><br><span class="chem">2x - y + z = 3</span><br><span class="chem">x + 2y - z = 2</span>.<br>Enter the value of <span class="chem">x + 2y + 3z</span>.
      stem: "다음 <span class=\"chem\">3 × 3</span> 연립일차방정식의 유일한 해를 구하시오 (Find):<br><span class=\"chem\">x + y + z = 6</span><br><span class=\"chem\">2x - y + z = 3</span><br><span class=\"chem\">x + 2y - z = 2</span>.<br><span class=\"chem\">x + 2y + 3z</span>의 값을 입력하시오.",
      hints: [
        // EN: Add Equation 1 and Equation 3 to eliminate <span class="chem">z</span> immediately: <span class="chem">2x + 3y = 8</span>. Also subtract Equation 1 from Equation 2 to get <span class="chem">x - 2y = -3</span>.
        "1번 식과 3번 식을 더하면 바로 <span class=\"chem\">z</span>가 소거돼요: <span class=\"chem\">2x + 3y = 8</span>. 또한 2번 식에서 1번 식을 빼면 <span class=\"chem\">x - 2y = -3</span>을 얻어요.",
        // EN: Solving <span class="chem">2x + 3y = 8</span> and <span class="chem">x - 2y = -3</span> gives <span class="chem">x = 1, y = 2</span>, and substituting into Equation 1 gives <span class="chem">z = 3</span>.
        "<span class=\"chem\">2x + 3y = 8</span>과 <span class=\"chem\">x - 2y = -3</span>을 연립해 풀면 <span class=\"chem\">x = 1, y = 2</span>가 나오고, 1번 식에 대입하면 <span class=\"chem\">z = 3</span>이에요.",
      ],
      // EN: <p>Eliminating <span class="chem">z</span> gives <span class="chem">x - 2y = -3</span> and <span class="chem">2x + 3y = 8</span>, so <span class="chem">7y = 14 =&gt; y = 2, x = 1, z = 3</span>. Therefore <span class="chem">x + 2y + 3z = 1 + 4 + 9 = 14</span>.</p>
      solution: "<p><span class=\"chem\">z</span>를 소거하면 <span class=\"chem\">x - 2y = -3</span>과 <span class=\"chem\">2x + 3y = 8</span>이 되어 <span class=\"chem\">7y = 14 =&gt; y = 2, x = 1, z = 3</span>이에요. 따라서 <span class=\"chem\">x + 2y + 3z = 1 + 4 + 9 = 14</span>예요.</p>",
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

    // ── t1-5-q015 · numeric · challenge · AHL · AHL 1.15 · 5 marks
    "t1-5-q015": {
      // EN: Let <span class="chem">f(x) = x e^{2x}</span>. It can be proved by mathematical induction that the <span class="chem">n</span>-th derivative is <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span> for all <span class="chem">n in mathbb{Z}^+</span>. Evaluate <span class="chem">f^{(5)}(0)</span>.
      stem: "<span class=\"chem\">f(x) = x e^{2x}</span>라 하자. 모든 <span class=\"chem\">n in mathbb{Z}^+</span>에 대하여 <span class=\"chem\">n</span>계도함수가 <span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>임을 수학적 귀납법으로 증명할 수 있어요. <span class=\"chem\">f^{(5)}(0)</span>의 값을 구하시오.",
      hints: [
        // EN: Substitute <span class="chem">n = 5</span> and <span class="chem">x = 0</span> into <span class="chem">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>.
        "<span class=\"chem\">f^{(n)}(x) = 2^{n-1}(2x + n)e^{2x}</span>에 <span class=\"chem\">n = 5</span>와 <span class=\"chem\">x = 0</span>을 대입하세요.",
        // EN: <span class="chem">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>.
        "<span class=\"chem\">f^{(5)}(0) = 2^{4}(0 + 5)e^0 = 16 × 5 × 1</span>.",
      ],
      // EN: <p>Substituting <span class="chem">n = 5</span> and <span class="chem">x = 0</span> gives <span class="chem">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span>.</p>
      solution: "<p><span class=\"chem\">n = 5</span>와 <span class=\"chem\">x = 0</span>을 대입하면 <span class=\"chem\">f^{(5)}(0) = 2^{5-1}(2(0) + 5)e^0 = 16 × 5 = 80</span>이에요.</p>",
    },

    // ── t1-5-q016 · mcq · challenge · AHL · AHL 1.15 · 4 marks
    "t1-5-q016": {
      // EN: Suppose a student attempts to prove by contradiction that <span class="chem">sqrt(4)</span> is irrational by writing <span class="chem">sqrt(4) = a / b</span> with <span class="chem">gcd(a, b) = 1</span>, squaring to get <span class="chem">a^2 = 4b^2</span>, and claiming: “Since <span class="chem">4</span> divides <span class="chem">a^2</span>, <span class="chem">4</span> must divide <span class="chem">a</span>.” Why does this step fail?
      stem: "어떤 학생이 <span class=\"chem\">sqrt(4)</span>가 무리수임을 귀류법으로 증명하려고 <span class=\"chem\">gcd(a, b) = 1</span>인 <span class=\"chem\">sqrt(4) = a / b</span>로 놓고 제곱해 <span class=\"chem\">a^2 = 4b^2</span>을 얻은 뒤, “<span class=\"chem\">4</span>가 <span class=\"chem\">a^2</span>을 나누므로 <span class=\"chem\">4</span>는 <span class=\"chem\">a</span>를 나누어야 한다”고 주장했어요. 이 단계가 틀린 이유는 무엇인가요?",
      options: [
        // EN: Because <span class="chem">4</span> is composite (not prime): <span class="chem">4</span> divides <span class="chem">a^2</span> only implies <span class="chem">2</span> divides <span class="chem">a</span> (for example, <span class="chem">a = 2</span> has <span class="chem">4 | 2^2</span> but <span class="chem">4 mid 2</span>).
        "<span class=\"chem\">4</span>는 소수가 아닌 합성수이기 때문이에요: <span class=\"chem\">4</span>가 <span class=\"chem\">a^2</span>을 나눈다고 해서 <span class=\"chem\">2</span>가 <span class=\"chem\">a</span>를 나눌 뿐이에요 (예: <span class=\"chem\">a = 2</span>이면 <span class=\"chem\">4 | 2^2</span>이지만 <span class=\"chem\">4 mid 2</span>예요).",
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
      // EN: Prove by mathematical induction that for all <span class="chem">n in mathbb{Z}^+</span>,<br><span class="chem">sum_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span>. [7 marks]
      stem: "모든 <span class=\"chem\">n in mathbb{Z}^+</span>에 대하여 다음 식이 성립함을 수학적 귀납법으로 증명하시오 (Prove).<br><span class=\"chem\">sum_{r=1}^n r · 2^{r-1} = (n - 1)2^n + 1</span>. [7 marks]",
      hints: [
        // EN: After substituting the inductive hypothesis for <span class="chem">n = k</span>, add the <span class="chem">(k + 1)</span>-th term <span class="chem">(k + 1)2^k</span>.
        "<span class=\"chem\">n = k</span>일 때의 귀납 가정을 대입한 뒤, 제<span class=\"chem\">(k + 1)</span>항인 <span class=\"chem\">(k + 1)2^k</span>을 더하세요.",
        // EN: Factor out <span class="chem">2^k</span> from <span class="chem">(k - 1)2^k + (k + 1)2^k</span> to get <span class="chem">2k · 2^k = k · 2^{k+1}</span>.
        "<span class=\"chem\">(k - 1)2^k + (k + 1)2^k</span>에서 <span class=\"chem\">2^k</span>을 묶어 내면 <span class=\"chem\">2k · 2^k = k · 2^{k+1}</span>을 얻어요.",
      ],
      // EN: <p>Factoring <span class="chem">2^k</span> in the inductive step gives <span class="chem">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span>, matching the <span class="chem">n = k + 1</span> formula.</p>
      solution: "<p>귀납 단계에서 <span class=\"chem\">2^k</span>을 묶어 내면 <span class=\"chem\">((k - 1) + (k + 1))2^k + 1 = 2k · 2^k + 1 = k · 2^{k+1} + 1</span>이 되어 <span class=\"chem\">n = k + 1</span>일 때의 공식과 일치해요.</p>",
      // EN: <p><strong>Base case (<span class="chem">n = 1</span>):</strong> <span class="chem">LHS = 1 · 2^0 = 1</span>; <span class="chem">RHS = (1 - 1)2^1 + 1 = 1</span>. Since <span class="chem">LHS = RHS</span>, <span class="chem">P(1)</span> is true.<br><strong>Inductive hypothesis:</strong> Assume <span class="chem">P(k)</span> is true for some <span class="chem">k in mathbb{Z}^+</span>: <span class="chem">sum_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>.<br><strong>Inductive step (<span class="chem">n = k + 1</span>):</strong><br><span class="chem">sum_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>.<br><strong>Conclusion:</strong> Since <span class="chem">P(1)</span> is true and <span class="chem">P(k) =&gt; P(k + 1)</span>, by the principle of mathematical induction <span class="chem">P(n)</span> is true for all <span class="chem">n in mathbb{Z}^+</span>.</p>
      answer: "<p><strong>초기 단계 (<span class=\"chem\">n = 1</span>):</strong> <span class=\"chem\">LHS = 1 · 2^0 = 1</span>; <span class=\"chem\">RHS = (1 - 1)2^1 + 1 = 1</span>. <span class=\"chem\">LHS = RHS</span>이므로 <span class=\"chem\">P(1)</span>은 참이다.<br><strong>귀납 가정:</strong> 어떤 <span class=\"chem\">k in mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(k)</span>가 참이라고 가정하자: <span class=\"chem\">sum_{r=1}^k r · 2^{r-1} = (k - 1)2^k + 1</span>.<br><strong>귀납 단계 (<span class=\"chem\">n = k + 1</span>):</strong><br><span class=\"chem\">sum_{r=1}^{k+1} r · 2^{r-1} = ((k - 1)2^k + 1) + (k + 1)2^k = (k - 1 + k + 1)2^k + 1 = (2k)2^k + 1 = k · 2^{k+1} + 1 = ((k + 1) - 1)2^{k+1} + 1</span>.<br><strong>결론:</strong> <span class=\"chem\">P(1)</span>이 참이고 <span class=\"chem\">P(k) =&gt; P(k + 1)</span>이므로, 수학적 귀납법의 원리에 의해 모든 <span class=\"chem\">n in mathbb{Z}^+</span>에 대하여 <span class=\"chem\">P(n)</span>은 참이다.</p>",
      markscheme: [
        // EN: R1: Base case n = 1: evaluates LHS = 1 and RHS = (0)2¹ + 1 = 1 and states P(1) is true.
        "R1: 초기 단계 n = 1: LHS = 1, RHS = (0)2¹ + 1 = 1을 계산하고 P(1)이 참임을 서술함.",
        // EN: M1: States inductive hypothesis: assumes P(k) is true for some k ∈ ℤ⁺.
        "M1: 귀납 가정 서술: 어떤 k ∈ ℤ⁺에 대해 P(k)가 참이라고 가정함.",
        // EN: M1: Considers n = k + 1 by adding the (k + 1)-th term (k + 1)2^k to the assumed sum.
        "M1: n = k + 1인 경우를 생각하여 가정한 합에 제(k + 1)항 (k + 1)2^k을 더함.",
        // EN: A1: Factors out 2^k to get ((k − 1) + (k + 1))2^k + 1 = 2k · 2^k + 1.
        "A1: 2^k으로 묶어 ((k − 1) + (k + 1))2^k + 1 = 2k · 2^k + 1을 얻음.",
        // EN: A1: Simplifies 2k · 2^k + 1 to k · 2^{k+1} + 1 = ((k + 1) − 1)2^{k+1} + 1.
        "A1: 2k · 2^k + 1을 k · 2^{k+1} + 1 = ((k + 1) − 1)2^{k+1} + 1로 정리함.",
        // EN: R1: States final induction conclusion sentence (awarded only if previous M marks earned).
        "R1: 최종 수학적 귀납법 결론 문장을 서술함 (앞선 M 점수를 획득한 경우에만 부여).",
      ],
    },

    // ── t1-5-q018 · short · exam · AHL · AHL 1.16 · 7 marks
    "t1-5-q018": {
      // EN: Consider the system of linear equations:<br><span class="chem">x - y + 2z = 1</span><br><span class="chem">2x - y + 5z = 4</span><br><span class="chem">3x - 2y + (k^2 - 2)z = k + 2</span>, where <span class="chem">k in mathbb{R}</span>.<br>(a) Reduce the system to row-echelon form and find the value of <span class="chem">k</span> for which the system has no solution, and the value of <span class="chem">k</span> for which it has infinitely many solutions. [4 marks]<br>(b) Find the general solution in parametric form when the system has infinitely many solutions. [3 marks]
      stem: "다음 연립일차방정식을 생각하자:<br><span class=\"chem\">x - y + 2z = 1</span><br><span class=\"chem\">2x - y + 5z = 4</span><br><span class=\"chem\">3x - 2y + (k^2 - 2)z = k + 2</span> (<span class=\"chem\">k in mathbb{R}</span>).<br>(a) 이 연립방정식을 행사다리꼴 형태로 정리하고, 해가 없는 <span class=\"chem\">k</span>의 값과 무수히 많은 해를 갖는 <span class=\"chem\">k</span>의 값을 각각 구하시오 (Find). [4 marks]<br>(b) 무수히 많은 해를 가질 때 일반해를 매개변수 형태로 구하시오 (Find). [3 marks]",
      hints: [
        // EN: Apply <span class="chem">R_2 - 2R_1</span> to get <span class="chem">y + z = 2</span>, and <span class="chem">R_3 - 3R_1</span> to get <span class="chem">y + (k^2 - 8)z = k - 1</span>.
        "<span class=\"chem\">R_2 - 2R_1</span>을 적용해 <span class=\"chem\">y + z = 2</span>를 얻고, <span class=\"chem\">R_3 - 3R_1</span>을 적용해 <span class=\"chem\">y + (k^2 - 8)z = k - 1</span>을 얻으세요.",
        // EN: Subtract the new Row 2 from the new Row 3 to get <span class="chem">(k^2 - 9)z = k - 3</span>.
        "새 3행에서 새 2행을 빼서 <span class=\"chem\">(k^2 - 9)z = k - 3</span>을 얻으세요.",
      ],
      // EN: <p>(a) <span class="chem">R_2 - 2R_1 =&gt; y + z = 2</span>; <span class="chem">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>; <span class="chem">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span>. Thus <span class="chem">k = -3</span> gives no solution and <span class="chem">k = 3</span> gives infinite solutions.<br>(b) With <span class="chem">z = lambda</span>, <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 1 + y - 2z = 3 - 3lambda</span>.</p>
      solution: "<p>(a) <span class=\"chem\">R_2 - 2R_1 =&gt; y + z = 2</span>; <span class=\"chem\">R_3 - 3R_1 =&gt; y + (k^2 - 8)z = k - 1</span>; <span class=\"chem\">R_3 - R_2 =&gt; (k^2 - 9)z = k - 3</span>. 따라서 <span class=\"chem\">k = -3</span>일 때 해가 없고, <span class=\"chem\">k = 3</span>일 때 무수히 많은 해를 가져요.<br>(b) <span class=\"chem\">z = lambda</span>로 두면 <span class=\"chem\">y = 2 - lambda</span>이고 <span class=\"chem\">x = 1 + y - 2z = 3 - 3lambda</span>예요.</p>",
      // EN: <p>(a) Row reduction gives <span class="chem">y + z = 2</span> and <span class="chem">(k^2 - 9)z = k - 3</span>. The system has <strong>no solution</strong> when <span class="chem">k = -3</span> and <strong>infinitely many solutions</strong> when <span class="chem">k = 3</span>.<br>(b) Letting <span class="chem">z = lambda</span> (<span class="chem">lambda in mathbb{R}</span>) gives <span class="chem">y = 2 - lambda</span> and <span class="chem">x = 3 - 3lambda</span>.</p>
      answer: "<p>(a) 행 연산으로 정리하면 <span class=\"chem\">y + z = 2</span>와 <span class=\"chem\">(k^2 - 9)z = k - 3</span>을 얻는다. <span class=\"chem\">k = -3</span>일 때 <strong>해가 없고</strong>, <span class=\"chem\">k = 3</span>일 때 <strong>무수히 많은 해</strong>를 갖는다.<br>(b) <span class=\"chem\">z = lambda</span> (<span class=\"chem\">lambda in mathbb{R}</span>)라 하면 <span class=\"chem\">y = 2 - lambda</span>, <span class=\"chem\">x = 3 - 3lambda</span>이다.</p>",
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

  }
});
