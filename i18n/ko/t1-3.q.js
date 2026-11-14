/* t1-3.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't1-3.q', {
  questions: {

    // ── t1-3-q001 · numeric · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q001": {
      // EN: <p>Evaluate <span class="chem">7P3</span>.</p>
      stem: "<p><span class=\"chem\">7P3</span>의 값을 구하시오.</p>",
      hints: [
        // EN: Use <span class="chem">nPr = n! / (n - r)!</span>.
        "<span class=\"chem\">nPr = n! / (n - r)!</span>을 사용하세요.",
        // EN: Compute <span class="chem">7 × 6 × 5</span>.
        "<span class=\"chem\">7 × 6 × 5</span>를 계산하세요.",
      ],
      // EN: <div class="worked__math"><sup>7</sup>P<sub>3</sub> = <span class="frac"><span>7!</span><span>4!</span></span> = 7 × 6 × 5 = <b>210</b></div>
      solution: "<div class=\"worked__math\"><sup>7</sup>P<sub>3</sub> = <span class=\"frac\"><span>7!</span><span>4!</span></span> = 7 × 6 × 5 = <b>210</b></div>",
    },

    // ── t1-3-q002 · mcq · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q002": {
      // EN: <p>A committee of 4 students is to be chosen from 9 volunteers. How many different committees can be formed?</p>
      stem: "<p>지원자 9명 중에서 4명의 학생으로 이루어진 위원회를 뽑으려고 해요. 구성할 수 있는 서로 다른 위원회는 모두 몇 가지인가요?</p>",
      options: [
        // EN: 126
        "126",
        // EN: 3024
        "3024",
        // EN: 36
        "36",
        // EN: 504
        "504",
      ],
      hints: [
        // EN: Does the order of selection matter for a committee?
        "위원회를 뽑을 때 뽑는 순서가 중요한가요?",
        // EN: Compute <span class="chem">9C4 = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1)</span>.
        "<span class=\"chem\">9C4 = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1)</span>을 계산하세요.",
      ],
      // EN: <div class="worked__math"><sup>9</sup>C<sub>4</sub> = <span class="frac"><span>9 × 8 × 7 × 6</span><span>24</span></span> = <b>126</b></div>
      solution: "<div class=\"worked__math\"><sup>9</sup>C<sub>4</sub> = <span class=\"frac\"><span>9 × 8 × 7 × 6</span><span>24</span></span> = <b>126</b></div>",
      misconception: {
        // EN (option B): 3024 is <span class="chem">9P4</span>, which counts ordered arrangements. In a committee, order does not matter, so use <span class="chem">9C4</span>.
        "1": "3024는 순서를 고려하여 배열하는 <span class=\"chem\">9P4</span>의 값이에요. 위원회는 순서가 중요하지 않으므로 <span class=\"chem\">9C4</span>를 써야 해요.",
        // EN (option C): Multiplying <span class="chem">9 × 4</span> does not count subsets of size 4.
        "2": "<span class=\"chem\">9 × 4</span>를 곱하는 것은 원소가 4개인 부분집합의 개수를 세는 방법이 아니에요.",
        // EN (option D): 504 is <span class="chem">9P3</span>, which neither matches the size nor the unordered nature of the committee.
        "3": "504는 <span class=\"chem\">9P3</span>의 값으로, 뽑는 인원수(4명)도 맞지 않고 순서가 없다는 조건에도 맞지 않아요.",
      },
    },

    // ── t1-3-q003 · numeric · foundation · AHL · AHL 1.11 · 3 marks
    "t1-3-q003": {
      // EN: <p>Given that <span class="chem">(5x + 4) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>, find the value of <span class="chem">A</span>.</p>
      stem: "<p><span class=\"chem\">(5x + 4) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2)</span>일 때, <span class=\"chem\">A</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Multiply both sides by <span class="chem">(x - 1)(x + 2)</span> to get <span class="chem">5x + 4 = A(x + 2) + B(x - 1)</span>.
        "양변에 <span class=\"chem\">(x - 1)(x + 2)</span>를 곱하여 <span class=\"chem\">5x + 4 = A(x + 2) + B(x - 1)</span>을 얻으세요.",
        // EN: Substitute <span class="chem">x = 1</span> so the <span class="chem">B</span> term becomes zero.
        "<span class=\"chem\">B</span> 항이 0이 되도록 <span class=\"chem\">x = 1</span>을 대입하세요.",
      ],
      // EN: <div class="worked__math">5<i>x</i> + 4 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class="worked__math">Set <i>x</i> = 1:  9 = 3<i>A</i>  ⇒  <b><i>A</i> = 3</b></div>
      solution: "<div class=\"worked__math\">5<i>x</i> + 4 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class=\"worked__math\"><i>x</i> = 1 대입: 9 = 3<i>A</i>  ⇒  <b><i>A</i> = 3</b></div>",
    },

    // ── t1-3-q004 · mcq · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q004": {
      // EN: <p>State the set of values of <span class="chem">x</span> for which the binomial expansion of <span class="chem">(3 + 2x)^{-1}</span> is valid.</p>
      stem: "<p><span class=\"chem\">(3 + 2x)^{-1}</span>의 이항전개가 유효한 <span class=\"chem\">x</span>의 값의 집합을 답하시오 (State).</p>",
      options: [
        // EN: <span class="chem">|x| &lt; 3/2</span>
        "<span class=\"chem\">|x| &lt; 3/2</span>",
        // EN: <span class="chem">|x| &lt; 1</span>
        "<span class=\"chem\">|x| &lt; 1</span>",
        // EN: <span class="chem">|x| &lt; 2/3</span>
        "<span class=\"chem\">|x| &lt; 2/3</span>",
        // EN: <span class="chem">|x| &lt; 3</span>
        "<span class=\"chem\">|x| &lt; 3</span>",
      ],
      hints: [
        // EN: Factor out <span class="chem">3^{-1}</span> to write <span class="chem">(1/3)(1 + (2/3)x)^{-1}</span>.
        "<span class=\"chem\">3^{-1}</span>을 묶어 내어 <span class=\"chem\">(1/3)(1 + (2/3)x)^{-1}</span>로 고쳐 쓰세요.",
        // EN: Solve <span class="chem">|(2/3)x| &lt; 1</span>.
        "<span class=\"chem\">|(2/3)x| &lt; 1</span>을 푸세요.",
      ],
      // EN: <div class="worked__math">(3 + 2<i>x</i>)<sup>−1</sup> = <span class="frac"><span>1</span><span>3</span></span>(1 + <span class="frac"><span>2</span><span>3</span></span><i>x</i>)<sup>−1</sup>, valid for |<span class="frac"><span>2</span><span>3</span></span><i>x</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class="frac"><span>3</span><span>2</span></span></b></div>
      solution: "<div class=\"worked__math\">(3 + 2<i>x</i>)<sup>−1</sup> = <span class=\"frac\"><span>1</span><span>3</span></span>(1 + <span class=\"frac\"><span>2</span><span>3</span></span><i>x</i>)<sup>−1</sup>, 유효 조건: |<span class=\"frac\"><span>2</span><span>3</span></span><i>x</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class=\"frac\"><span>3</span><span>2</span></span></b></div>",
      misconception: {
        // EN (option B): <span class="chem">|x| &lt; 1</span> applies to <span class="chem">(1 + x)^n</span>. Here you must first factor out 3 to get <span class="chem">(1 + (2/3)x)^{-1}</span>.
        "1": "<span class=\"chem\">|x| &lt; 1</span>은 <span class=\"chem\">(1 + x)^n</span>일 때 적용돼요. 여기서는 먼저 3을 묶어 내어 <span class=\"chem\">(1 + (2/3)x)^{-1}</span>을 만들어야 해요.",
        // EN (option C): You inverted the fraction! Set <span class="chem">|(2/3)x| &lt; 1</span>, which gives <span class="chem">|x| &lt; 3/2</span>, not <span class="chem">2/3</span>.
        "2": "분수가 뒤집혔어요! <span class=\"chem\">|(2/3)x| &lt; 1</span>을 풀면 <span class=\"chem\">2/3</span>가 아니라 <span class=\"chem\">|x| &lt; 3/2</span>가 나와요.",
        // EN (option D): You forgot the factor of 2 in <span class="chem">2x</span>.
        "3": "<span class=\"chem\">2x</span>에 곱해진 2를 빠뜨렸어요.",
      },
    },

    // ── t1-3-q005 · multi · foundation · AHL · AHL 1.10 & 1.11 · 3 marks
    "t1-3-q005": {
      // EN: <p>Which of the following statements are true? Select all that apply.</p>
      stem: "<p>다음 중 옳은 설명을 모두 고르시오.</p>",
      options: [
        // EN: <span class="chem">nCr = nPr / r!</span> for all integers <span class="chem">0 &lt;= r &lt;= n</span>.
        "모든 정수 <span class=\"chem\">0 &lt;= r &lt;= n</span>에 대해 <span class=\"chem\">nCr = nPr / r!</span>이다.",
        // EN: The binomial expansion of <span class="chem">(1 - 4x)^{1/2}</span> is valid for <span class="chem">|x| &lt; 4</span>.
        "<span class=\"chem\">(1 - 4x)^{1/2}</span>의 이항전개는 <span class=\"chem\">|x| &lt; 4</span>에서 유효하다.",
        // EN: <span class="chem">2x / ((x - 1)(x + 1)) = 1 / (x - 1) + 1 / (x + 1)</span>.
        "<span class=\"chem\">2x / ((x - 1)(x + 1)) = 1 / (x - 1) + 1 / (x + 1)</span>.",
        // EN: The number of ways to seat 5 people in a row with 2 specific people separated is <span class="chem">5! - 4!</span>.
        "5명을 일렬로 앉힐 때 특정한 2명이 이웃하지 않게 앉는 경우의 수는 <span class=\"chem\">5! - 4!</span>이다.",
      ],
      hints: [
        // EN: Check the radius of convergence of <span class="chem">(1 - 4x)^{1/2}</span> using <span class="chem">|u| &lt; 1</span>.
        "<span class=\"chem\">|u| &lt; 1</span>을 이용해 <span class=\"chem\">(1 - 4x)^{1/2}</span>의 수렴 반경을 확인하세요.",
        // EN: Add <span class=\"chem">1/(x - 1) + 1/(x + 1)</span> over a common denominator to verify option C.
        "<span class=\"chem\">1/(x - 1) + 1/(x + 1)</span>을 통분해 C 보기가 맞는지 확인하세요.",
      ],
      // EN: <p>Option A is the definition relating combinations and permutations. Option C combines to <span class="chem">((x + 1) + (x - 1)) / ((x - 1)(x + 1)) = 2x / ((x - 1)(x + 1))</span>.</p>
      solution: "<p>첫 번째 보기는 조합과 순열의 관계식 정의이고, 세 번째 보기는 통분하면 <span class=\"chem\">((x + 1) + (x - 1)) / ((x - 1)(x + 1)) = 2x / ((x - 1)(x + 1))</span>이 되어 참이에요.</p>",
      misconception: {
        // EN (option B): <span class="chem">(1 - 4x)^{1/2}</span> is valid for <span class="chem">|-4x| &lt; 1</span>, which is <span class="chem">|x| &lt; 1/4</span>, not <span class="chem">|x| &lt; 4</span>.
        "1": "<span class=\"chem\">(1 - 4x)^{1/2}</span>은 <span class=\"chem\">|-4x| &lt; 1</span>일 때 유효하므로 <span class=\"chem\">|x| &lt; 4</span>가 아니라 <span class=\"chem\">|x| &lt; 1/4</span>이에요.",
        // EN (option D): When 2 people sit together as a block, they can swap in <span class="chem">2!</span> ways, so the separated count is <span class="chem">5! - 4! × 2!</span>.
        "3": "2명이 한 묶음으로 이웃해 앉을 때 둘이 자리를 바꾸는 경우가 <span class=\"chem\">2!</span>가지 있으므로, 떨어져 앉는 경우의 수는 <span class=\"chem\">5! - 4! × 2!</span>이에요.",
      },
    },

    // ── t1-3-q006 · order · foundation · AHL · AHL 1.10 · 3 marks
    "t1-3-q006": {
      // EN: <p>Arrange the steps in the correct logical order to find the first three terms of <span class="chem">(4 + x)^{-1/2}</span>.</p>
      stem: "<p><span class=\"chem\">(4 + x)^{-1/2}</span>의 처음 세 항을 구하는 단계를 올바른 논리적 순서로 배열하시오.</p>",
      options: [
        // EN: Factor out <span class="chem">4^{-1/2} = 1/2</span> to write <span class="chem">(1/2)(1 + x/4)^{-1/2}</span>.
        "<span class=\"chem\">4^{-1/2} = 1/2</span>을 묶어 내어 <span class=\"chem\">(1/2)(1 + x/4)^{-1/2}</span>로 써요.",
        // EN: Substitute <span class="chem">n = -1/2</span> and <span class="chem">u = x/4</span> into <span class="chem">1 + nu + (n(n - 1)/2!)u^2</span>.
        "<span class=\"chem\">1 + nu + (n(n - 1)/2!)u^2</span>에 <span class=\"chem\">n = -1/2</span>과 <span class=\"chem\">u = x/4</span>를 대입해요.",
        // EN: Simplify inside the bracket to get <span class="chem">(1/2)(1 - (1/8)x + (3/128)x^2 - ...)</span>.
        "괄호 안을 정리해 <span class=\"chem\">(1/2)(1 - (1/8)x + (3/128)x^2 - ...)</span>을 얻어요.",
        // EN: Multiply through by <span class="chem">1/2</span> to obtain <span class="chem">1/2 - (1/16)x + (3/256)x^2 - ...</span>, valid for <span class="chem">|x| &lt; 4</span>.
        "<span class=\"chem\">1/2</span>을 분배해 <span class=\"chem\">1/2 - (1/16)x + (3/256)x^2 - ...</span> (유효 조건: <span class=\"chem\">|x| &lt; 4</span>)을 얻어요.",
      ],
      hints: [
        // EN: You cannot apply the <span class="chem">(1 + u)^n</span> formula until the constant inside the bracket is 1.
        "괄호 안의 상수항이 1이 되기 전에는 <span class=\"chem\">(1 + u)^n</span> 공식을 적용할 수 없어요.",
        // EN: Multiply by the factored-out <span class="chem">4^{-1/2} = 1/2</span> at the end.
        "마지막에 묶어 낸 <span class=\"chem\">4^{-1/2} = 1/2</span>을 곱해 마무리하세요.",
      ],
      // EN: <p>Factor out <span class="chem">4^{-1/2}</span> first, apply the <span class="chem">(1 + u)^n</span> series, simplify powers of <span class="chem">u</span>, and finally distribute <span class="chem">1/2</span>.</p>
      solution: "<p>먼저 <span class=\"chem\">4^{-1/2}</span>을 묶어 낸 뒤 <span class=\"chem\">(1 + u)^n</span> 급수 공식을 적용하고, <span class=\"chem\">u</span>의 거듭제곱을 정리한 다음 마지막으로 <span class=\"chem\">1/2</span>을 곱해요.</p>",
    },

    // ── t1-3-q007 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q007": {
      // EN: <p>Solve the equation <span class="chem">nP2 + nC2 = 45</span> for the positive integer <span class="chem">n</span>.</p>
      stem: "<p>양의 정수 <span class=\"chem\">n</span>에 대하여 방정식 <span class=\"chem\">nP2 + nC2 = 45</span>를 푸시오.</p>",
      hints: [
        // EN: Write <span class="chem">nP2 = n(n - 1)</span> and <span class="chem">nC2 = n(n - 1) / 2</span>.
        "<span class=\"chem\">nP2 = n(n - 1)</span>과 <span class=\"chem\">nC2 = n(n - 1) / 2</span>를 쓰세요.",
        // EN: Combine to get <span class="chem">(3/2) n(n - 1) = 45</span>, so <span class="chem">n(n - 1) = 30</span>.
        "두 항을 합치면 <span class=\"chem\">(3/2) n(n - 1) = 45</span>, 즉 <span class=\"chem\">n(n - 1) = 30</span>이 돼요.",
      ],
      // EN: <div class="worked__math"><i>n</i>(<i>n</i> − 1) + <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 45 ⇒ <span class="frac"><span>3</span><span>2</span></span><i>n</i>(<i>n</i> − 1) = 45 ⇒ <i>n</i>(<i>n</i> − 1) = 30</div><div class="worked__math"><i>n</i><sup>2</sup> − <i>n</i> − 30 = 0 ⇒ (<i>n</i> − 6)(<i>n</i> + 5) = 0 ⇒ <b><i>n</i> = 6</b> (since <i>n</i> ≥ 2)</div>
      solution: "<div class=\"worked__math\"><i>n</i>(<i>n</i> − 1) + <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 45 ⇒ <span class=\"frac\"><span>3</span><span>2</span></span><i>n</i>(<i>n</i> − 1) = 45 ⇒ <i>n</i>(<i>n</i> − 1) = 30</div><div class=\"worked__math\"><i>n</i><sup>2</sup> − <i>n</i> − 30 = 0 ⇒ (<i>n</i> − 6)(<i>n</i> + 5) = 0 ⇒ <b><i>n</i> = 6</b> (<i>n</i> ≥ 2이므로)</div>",
    },

    // ── t1-3-q008 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q008": {
      // EN: <p>A 6-member robotics team is selected from 5 engineers and 4 programmers. How many different teams contain <strong>at least 4 engineers</strong>?</p>
      stem: "<p>엔지니어 5명과 프로그래머 4명 중에서 6명의 로봇공학 팀을 선발하려고 해요. <strong>엔지니어가 적어도 4명</strong> 포함되는 서로 다른 팀은 몇 가지인가요?</p>",
      hints: [
        // EN: Split into mutually exclusive cases: 4 engineers + 2 programmers, or 5 engineers + 1 programmer.
        "서로 배반인 경우로 나누세요: 엔지니어 4명 + 프로그래머 2명, 또는 엔지니어 5명 + 프로그래머 1명.",
        // EN: Compute <span class="chem">5C4 × 4C2 + 5C5 × 4C1</span>.
        "<span class=\"chem\">5C4 × 4C2 + 5C5 × 4C1</span>을 계산하세요.",
      ],
      // EN: <div class="worked__math"><sup>5</sup>C<sub>4</sub><sup>4</sup>C<sub>2</sub> + <sup>5</sup>C<sub>5</sub><sup>4</sup>C<sub>1</sub> = (5 × 6) + (1 × 4) = 30 + 4 = <b>34</b></div>
      solution: "<div class=\"worked__math\"><sup>5</sup>C<sub>4</sub><sup>4</sup>C<sub>2</sub> + <sup>5</sup>C<sub>5</sub><sup>4</sup>C<sub>1</sub> = (5 × 6) + (1 × 4) = 30 + 4 = <b>34</b></div>",
    },

    // ── t1-3-q009 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q009": {
      // EN: <p>Eight distinct books—5 mathematics books and 3 physics books—are arranged on a shelf. In how many ways can they be arranged if no two physics books are next to each other?</p>
      stem: "<p>서로 다른 책 8권(수학책 5권과 물리책 3권)을 책장에 일렬로 꽂으려고 해요. 어느 물리책 2권도 서로 이웃하지 않도록 배열하는 방법의 수는 얼마인가요?</p>",
      hints: [
        // EN: Use the Gap method: arrange the 5 mathematics books first in <span class="chem">5!</span> ways.
        "끼워 넣기 방법을 쓰세요: 먼저 수학책 5권을 <span class=\"chem\">5!</span>가지로 배열해요.",
        // EN: There are 6 gaps around the 5 math books. Place the 3 distinct physics books in <span class="chem">^6P_3</span> ways.
        "수학책 5권 사이와 양끝에 6개의 빈자리가 있어요. 서로 다른 물리책 3권을 <span class=\"chem\">^6P_3</span>가지로 배치하세요.",
      ],
      // EN: <div class="worked__math">5! × <sup>6</sup>P<sub>3</sub> = 120 × 120 = <b>14400</b></div>
      solution: "<div class=\"worked__math\">5! × <sup>6</sup>P<sub>3</sub> = 120 × 120 = <b>14400</b></div>",
    },

    // ── t1-3-q010 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q010": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the binomial expansion of <span class="chem">(1 - 2x)^{-3}</span>.</p>
      stem: "<p><span class=\"chem\">(1 - 2x)^{-3}</span>의 이항전개식에서 <span class=\"chem\">x^2</span>의 계수를 구하시오 (Find).</p>",
      hints: [
        // EN: Use the <span class="chem">x^2</span> term formula: <span class="chem">(n(n - 1)/2!) u^2</span> with <span class="chem">n = -3</span> and <span class="chem">u = -2x</span>.
        "<span class=\"chem\">x^2</span> 항 공식 <span class=\"chem\">(n(n - 1)/2!) u^2</span>에 <span class=\"chem\">n = -3</span>, <span class=\"chem\">u = -2x</span>를 대입하세요.",
        // EN: Remember <span class="chem">(-2x)^2 = +4x^2</span>.
        "<span class=\"chem\">(-2x)^2 = +4x^2</span>임을 기억하세요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−3)(−4)</span><span>2!</span></span> (−2<i>x</i>)<sup>2</sup> = 6 × 4<i>x</i><sup>2</sup> = <b>24</b><i>x</i><sup>2</sup></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−3)(−4)</span><span>2!</span></span> (−2<i>x</i>)<sup>2</sup> = 6 × 4<i>x</i><sup>2</sup> = <b>24</b><i>x</i><sup>2</sup></div>",
    },

    // ── t1-3-q011 · numeric · exam · AHL · AHL 1.11 · 4 marks
    "t1-3-q011": {
      // EN: <p>Given that <span class="chem">(4x + 13) / ((x - 2)(2x + 3)) = A / (x - 2) + B / (2x + 3)</span>, find the value of <span class="chem">B</span>.</p>
      stem: "<p><span class=\"chem\">(4x + 13) / ((x - 2)(2x + 3)) = A / (x - 2) + B / (2x + 3)</span>일 때, <span class=\"chem\">B</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Clear the denominator: <span class="chem">4x + 13 = A(2x + 3) + B(x - 2)</span>.
        "분모를 없애세요: <span class=\"chem\">4x + 13 = A(2x + 3) + B(x - 2)</span>.",
        // EN: Substitute the root of <span class="chem">2x + 3 = 0</span>, that is <span class="chem">x = -3/2</span>, so the <span class="chem">A</span> term vanishes.
        "<span class=\"chem\">2x + 3 = 0</span>의 근, 즉 <span class=\"chem\">x = -3/2</span>을 대입해 <span class=\"chem\">A</span> 항을 없애세요.",
      ],
      // EN: <div class="worked__math">4<i>x</i> + 13 ≡ <i>A</i>(2<i>x</i> + 3) + <i>B</i>(<i>x</i> − 2)   <b>[M1]</b></div><div class="worked__math"><i>x</i> = 2 ⇒ 21 = 7<i>A</i> ⇒ <i>A</i> = 3   <b>[A1]</b></div><div class="worked__math"><i>x</i> = −<span class="frac"><span>3</span><span>2</span></span> ⇒ 7 = −<span class="frac"><span>7</span><span>2</span></span><i>B</i>   <b>[M1]</b>  ⇒  <b><i>B</i> = −2</b>   <b>[A1]</b></div>
      solution: "<div class=\"worked__math\">4<i>x</i> + 13 ≡ <i>A</i>(2<i>x</i> + 3) + <i>B</i>(<i>x</i> − 2)   <b>[M1]</b></div><div class=\"worked__math\"><i>x</i> = 2 ⇒ 21 = 7<i>A</i> ⇒ <i>A</i> = 3   <b>[A1]</b></div><div class=\"worked__math\"><i>x</i> = −<span class=\"frac\"><span>3</span><span>2</span></span> ⇒ 7 = −<span class=\"frac\"><span>7</span><span>2</span></span><i>B</i>   <b>[M1]</b>  ⇒  <b><i>B</i> = −2</b>   <b>[A1]</b></div>",
    },

    // ── t1-3-q012 · numeric · exam · AHL · AHL 1.10 & 1.11 · 5 marks
    "t1-3-q012": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(2 + x) / ((1 - x)(1 + 2x))</span> in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p><span class=\"chem\">(2 + x) / ((1 - x)(1 + 2x))</span>을 <span class=\"chem\">x</span>의 오름차순으로 전개할 때 <span class=\"chem\">x^2</span>의 계수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decompose into partial fractions first: <span class="chem">A / (1 - x) + B / (1 + 2x)</span>.
        "먼저 부분분수로 분해하세요: <span class=\"chem\">A / (1 - x) + B / (1 + 2x)</span>.",
        // EN: You should get <span class="chem">A = 1</span> and <span class="chem">B = 1</span>. Now expand <span class="chem">(1 - x)^{-1} + (1 + 2x)^{-1}</span> up to <span class="chem">x^2</span>.
        "<span class=\"chem\">A = 1</span>, <span class=\"chem\">B = 1</span>이 나와요. 이제 <span class=\"chem\">(1 - x)^{-1} + (1 + 2x)^{-1}</span>을 <span class=\"chem\">x^2</span> 항까지 전개하세요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>2 + <i>x</i></span><span>(1 − <i>x</i>)(1 + 2<i>x</i>)</span></span> = (1 − <i>x</i>)<sup>−1</sup> + (1 + 2<i>x</i>)<sup>−1</sup> = (1 + <i>x</i> + <i>x</i><sup>2</sup> + …) + (1 − 2<i>x</i> + 4<i>x</i><sup>2</sup> − …) = 2 − <i>x</i> + <b>5</b><i>x</i><sup>2</sup> + …</div>",
    },

    // ── t1-3-q013 · short · exam · AHL · AHL 1.10 & 1.11 · 6 marks
    "t1-3-q013": {
      // EN: <p>(a) Express <span class="chem">f(x) = (x + 4) / ((1 + x)(2 - x))</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence find the first three terms in the expansion of <span class="chem">f(x)</span> in ascending powers of <span class="chem">x</span>, and state the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[3 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">f(x) = (x + 4) / ((1 + x)(2 - x))</span>를 부분분수로 나타내시오. <strong>[3 marks]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">f(x)</span>의 <span class=\"chem\">x</span>에 대한 오름차순 전개식에서 처음 세 항을 구하고 (Find), 이 전개가 유효한 <span class=\"chem\">x</span>의 값의 집합을 답하시오 (State). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Use <span class="chem">x = -1</span> and <span class="chem">x = 2</span> to find <span class="chem">A</span> and <span class="chem">B</span>.
        "<span class=\"chem\">x = -1</span>과 <span class=\"chem\">x = 2</span>를 대입해 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>를 구하세요.",
        // EN: Factor out <span class="chem">2^{-1} = 1/2</span> from <span class="chem">(2 - x)^{-1}</span> before expanding.
        "전개하기 전에 <span class=\"chem\">(2 - x)^{-1}</span>에서 <span class=\"chem\">2^{-1} = 1/2</span>을 먼저 묶어 내세요.",
      ],
      // EN: <div class="worked__math">(a)  <i>f</i>(<i>x</i>) = <span class="frac"><span>1</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 − <i>x</i></span></span></div><div class="worked__math">(b)  <i>f</i>(<i>x</i>) ≈ <b>2 − <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b></div>
      solution: "<div class=\"worked__math\">(a)  <i>f</i>(<i>x</i>) = <span class=\"frac\"><span>1</span><span>1 + <i>x</i></span></span> + <span class=\"frac\"><span>2</span><span>2 − <i>x</i></span></span></div><div class=\"worked__math\">(b)  <i>f</i>(<i>x</i>) ≈ <b>2 − <span class=\"frac\"><span>1</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>, 유효 범위 <b>|<i>x</i>| &lt; 1</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">x + 4 = A(2 - x) + B(1 + x)</span>.
        "M1: <span class=\"chem\">x + 4 = A(2 - x) + B(1 + x)</span>를 세움.",
        // EN: A1: Obtains <span class="chem">A = 1</span>.
        "A1: <span class=\"chem\">A = 1</span>을 구함.",
        // EN: A1: Obtains <span class="chem">B = 2</span>, giving <span class="chem">1/(1 + x) + 2/(2 - x)</span>.
        "A1: <span class=\"chem\">B = 2</span>를 구해 <span class=\"chem\">1/(1 + x) + 2/(2 - x)</span>를 얻음.",
        // EN: M1: Expands <span class="chem">(1 + x)^{-1} = 1 - x + x^2 - ...</span> and <span class="chem">2(2 - x)^{-1} = (1 - x/2)^{-1} = 1 + x/2 + x^2/4 + ...</span>.
        "M1: <span class=\"chem\">(1 + x)^{-1} = 1 - x + x^2 - ...</span>와 <span class=\"chem\">2(2 - x)^{-1} = (1 - x/2)^{-1} = 1 + x/2 + x^2/4 + ...</span>를 전개함.",
        // EN: A1: Combines like terms to get <span class="chem">2 - (1/2)x + (5/4)x^2</span>.
        "A1: 동류항을 모아 <span class=\"chem\">2 - (1/2)x + (5/4)x^2</span>을 얻음.",
        // EN: A1: States validity <span class="chem">|x| &lt; 1</span> (intersection of <span class="chem">|x| &lt; 1</span> and <span class="chem">|x| &lt; 2</span>).
        "A1: 유효 조건 <span class=\"chem\">|x| &lt; 1</span>을 답함 (<span class=\"chem\">|x| &lt; 1</span>과 <span class=\"chem\">|x| &lt; 2</span>의 교집합).",
      ],
      // EN: <div class="worked__math">(a)  <i>x</i> + 4 ≡ <i>A</i>(2 − <i>x</i>) + <i>B</i>(1 + <i>x</i>):  <i>x</i> = −1 ⇒ 3 = 3<i>A</i> ⇒ <i>A</i> = 1;  <i>x</i> = 2 ⇒ 6 = 3<i>B</i> ⇒ <i>B</i> = 2</div><div class="worked__math"><i>f</i>(<i>x</i>) = <span class="frac"><span>1</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 − <i>x</i></span></span></div><div class="worked__math">(b)  (1 + <i>x</i>)<sup>−1</sup> = 1 − <i>x</i> + <i>x</i><sup>2</sup> − …   and   2(2 − <i>x</i>)<sup>−1</sup> = (1 − <span class="frac"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = 1 + <span class="frac"><span><i>x</i></span><span>2</span></span> + <span class="frac"><span><i>x</i><sup>2</sup></span><span>4</span></span> + …</div><div class="worked__math"><i>f</i>(<i>x</i>) ≈ <b>2 − <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>, valid for <b>|<i>x</i>| &lt; 1</b></div>
      answer: "<div class=\"worked__math\">(a)  <i>x</i> + 4 ≡ <i>A</i>(2 − <i>x</i>) + <i>B</i>(1 + <i>x</i>):  <i>x</i> = −1 ⇒ 3 = 3<i>A</i> ⇒ <i>A</i> = 1;  <i>x</i> = 2 ⇒ 6 = 3<i>B</i> ⇒ <i>B</i> = 2</div><div class=\"worked__math\"><i>f</i>(<i>x</i>) = <span class=\"frac\"><span>1</span><span>1 + <i>x</i></span></span> + <span class=\"frac\"><span>2</span><span>2 − <i>x</i></span></span></div><div class=\"worked__math\">(b)  (1 + <i>x</i>)<sup>−1</sup> = 1 − <i>x</i> + <i>x</i><sup>2</sup> − …   그리고   2(2 − <i>x</i>)<sup>−1</sup> = (1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup> = 1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span> + …</div><div class=\"worked__math\"><i>f</i>(<i>x</i>) ≈ <b>2 − <span class=\"frac\"><span>1</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>5</span><span>4</span></span><i>x</i><sup>2</sup></b>, 유효 범위 <b>|<i>x</i>| &lt; 1</b></div>",
    },

    // ── t1-3-q014 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q014": {
      // EN: <p>In the binomial expansion of <span class="chem">(1 + kx)^{-2}</span>, the coefficient of <span class="chem">x^2</span> is 48. Given that <span class="chem">k &gt; 0</span>, find the value of <span class="chem">k</span>.</p>
      stem: "<p><span class=\"chem\">(1 + kx)^{-2}</span>의 이항전개식에서 <span class=\"chem\">x^2</span>의 계수가 48이에요. <span class=\"chem\">k &gt; 0</span>일 때, <span class=\"chem\">k</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Write the <span class="chem">x^2</span> term: <span class="chem">((-2)(-3)/2!)(kx)^2 = 3k^2 x^2</span>.
        "<span class=\"chem\">x^2</span> 항을 쓰세요: <span class=\"chem\">((-2)(-3)/2!)(kx)^2 = 3k^2 x^2</span>.",
        // EN: Solve <span class="chem">3k^2 = 48</span> with <span class="chem">k &gt; 0</span>.
        "<span class=\"chem\">k &gt; 0</span> 조건에서 <span class=\"chem\">3k^2 = 48</span>을 푸세요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−2)(−3)</span><span>2!</span></span>(<i>kx</i>)<sup>2</sup> = 3<i>k</i><sup>2</sup><i>x</i><sup>2</sup> ⇒ 3<i>k</i><sup>2</sup> = 48 ⇒ <i>k</i><sup>2</sup> = 16 ⇒ <b><i>k</i> = 4</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−2)(−3)</span><span>2!</span></span>(<i>kx</i>)<sup>2</sup> = 3<i>k</i><sup>2</sup><i>x</i><sup>2</sup> ⇒ 3<i>k</i><sup>2</sup> = 48 ⇒ <i>k</i><sup>2</sup> = 16 ⇒ <b><i>k</i> = 4</b></div>",
    },

    // ── t1-3-q015 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q015": {
      // EN: <p>How many 4-digit even integers greater than 3000 can be formed using the digits <span class="chem">{1, 2, 3, 4, 5, 6}</span> if no digit may be repeated?</p>
      stem: "<p>숫자 <span class=\"chem\">{1, 2, 3, 4, 5, 6}</span>을 중복 없이 사용하여 만들 수 있는 3000보다 큰 4자리 짝수는 모두 몇 개인가요?</p>",
      hints: [
        // EN: Decode: two places are restricted. “Greater than 3000” means the thousands digit is 3, 4, 5 or 6, and “even” means the units digit is 2, 4 or 6. Fill these restricted places first, then the two free middle places.
        "해석: 제한이 있는 자리가 두 개예요. \"3000보다 큰\"은 천의 자리가 3, 4, 5, 6 중 하나라는 뜻이고, \"짝수\"는 일의 자리가 2, 4, 6 중 하나라는 뜻이에요. 제한이 있는 자리를 먼저 채운 다음, 가운데의 자유로운 두 자리를 채우세요.",
        // EN: The thousands digit must be in <span class="chem">{3, 4, 5, 6}</span> and the units digit must be in <span class="chem">{2, 4, 6}</span>. Because 4 and 6 appear in both sets, split into two cases!
        "천의 자리 숫자는 <span class=\"chem\">{3, 4, 5, 6}</span> 중 하나여야 하고, 일의 자리 숫자는 <span class=\"chem\">{2, 4, 6}</span> 중 하나여야 해요. 4와 6이 두 집합에 모두 들어 있으므로 두 경우로 나누어 세세요!",
        // EN: Case 1: thousands digit is odd (<span class="chem">{3, 5}</span>) → <span class="chem">2 × 3 × 4 × 3</span>. Case 2: thousands digit is even (<span class="chem">{4, 6}</span>) → <span class="chem">2 × 2 × 4 × 3</span>.
        "경우 1: 천의 자리가 홀수(<span class=\"chem\">{3, 5}</span>) → <span class=\"chem\">2 × 3 × 4 × 3</span>. 경우 2: 천의 자리가 짝수(<span class=\"chem\">{4, 6}</span>) → <span class=\"chem\">2 × 2 × 4 × 3</span>.",
      ],
      // EN: <div class="worked__math">Case 1 (thousands ∈ {3, 5}): 2 × 4 × 3 × 3 = 72</div><div class="worked__math">Case 2 (thousands ∈ {4, 6}): 2 × 4 × 3 × 2 = 48</div><div class="worked__math">Total = 72 + 48 = <b>120</b></div>
      solution: "<div class=\"worked__math\">경우 1 (천의 자리 ∈ {3, 5}): 2 × 4 × 3 × 3 = 72</div><div class=\"worked__math\">경우 2 (천의 자리 ∈ {4, 6}): 2 × 4 × 3 × 2 = 48</div><div class=\"worked__math\">합계 = 72 + 48 = <b>120</b></div>",
    },

    // ── t1-3-q016 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q016": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the binomial expansion of <span class="chem">(1 + 2x) / sqrt(1 - 3x)</span>.</p>
      stem: "<p><span class=\"chem\">(1 + 2x) / sqrt(1 - 3x)</span>의 이항전개식에서 <span class=\"chem\">x^2</span>의 계수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: a square root in the denominator is a negative fractional power, <span class="chem">1/sqrt(1 - 3x) = (1 - 3x)^{-1/2}</span>, so the expression is a linear factor times an extended binomial series. Only two products of terms give <span class="chem">x^2</span>.
        "해석: 분모의 제곱근은 음의 분수 지수예요. <span class=\"chem\">1/sqrt(1 - 3x) = (1 - 3x)^{-1/2}</span>이므로, 이 식은 일차식과 확장된 이항급수의 곱이에요. <span class=\"chem\">x^2</span>을 만드는 항의 곱은 두 가지뿐이에요.",
        // EN: Rewrite as <span class="chem">(1 + 2x)(1 - 3x)^{-1/2}</span> and expand <span class="chem">(1 - 3x)^{-1/2}</span> up to <span class="chem">x^2</span>.
        "<span class=\"chem\">(1 + 2x)(1 - 3x)^{-1/2}</span>로 고쳐 쓰고 <span class=\"chem\">(1 - 3x)^{-1/2}</span>을 <span class=\"chem\">x^2</span> 항까지 전개하세요.",
        // EN: Multiply <span class="chem">(1 + 2x)</span> by <span class="chem">(1 + (3/2)x + (27/8)x^2 + ...)</span> and collect the <span class="chem">x^2</span> terms.
        "<span class=\"chem\">(1 + 2x)</span>에 <span class=\"chem\">(1 + (3/2)x + (27/8)x^2 + ...)</span>을 곱해 <span class=\"chem\">x^2</span> 항을 모으세요.",
      ],
      // EN: <div class="worked__math">(1 − 3<i>x</i>)<sup>−1/2</sup> = 1 + <span class="frac"><span>3</span><span>2</span></span><i>x</i> + <span class="frac"><span>27</span><span>8</span></span><i>x</i><sup>2</sup> + …</div><div class="worked__math">Coeff of <i>x</i><sup>2</sup> in (1 + 2<i>x</i>)(1 + <span class="frac"><span>3</span><span>2</span></span><i>x</i> + <span class="frac"><span>27</span><span>8</span></span><i>x</i><sup>2</sup>) = <span class="frac"><span>27</span><span>8</span></span> + 2(<span class="frac"><span>3</span><span>2</span></span>) = <b><span class="frac"><span>51</span><span>8</span></span></b> (6.375)</div>
      solution: "<div class=\"worked__math\">(1 − 3<i>x</i>)<sup>−1/2</sup> = 1 + <span class=\"frac\"><span>3</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>27</span><span>8</span></span><i>x</i><sup>2</sup> + …</div><div class=\"worked__math\">(1 + 2<i>x</i>)(1 + <span class=\"frac\"><span>3</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>27</span><span>8</span></span><i>x</i><sup>2</sup>)에서 <i>x</i><sup>2</sup>의 계수 = <span class=\"frac\"><span>27</span><span>8</span></span> + 2(<span class=\"frac\"><span>3</span><span>2</span></span>) = <b><span class=\"frac\"><span>51</span><span>8</span></span></b> (6.375)</div>",
      // EN: 51/8 (or 6.375)
      answerDisplay: "51/8 (또는 6.375)",
    },

    // ── t1-3-q017 · short · challenge · AHL · AHL 1.11; SL 1.2 · 7 marks
    "t1-3-q017": {
      // EN: <p>Let <span class="chem">S_n = Σ_{r=1}^n 1 / (r(r + 1))</span>.</p><p>(a) Express <span class="chem">1 / (r(r + 1))</span> in partial fractions. <strong>[2 marks]</strong><br>(b) Find <span class="chem">S_1</span>, <span class="chem">S_2</span>, <span class="chem">S_3</span> and <span class="chem">S_4</span>, and hence conjecture a formula for <span class="chem">S_n</span> in terms of <span class="chem">n</span>. <strong>[2 marks]</strong><br>(c) Use your answer to (a) to prove your conjecture. <strong>[2 marks]</strong><br>(d) Find the least value of <span class="chem">n</span> for which <span class="chem">S_n &gt; 0.99</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">S_n = Σ_{r=1}^n 1 / (r(r + 1))</span>이라 해요.</p><p>(a) <span class=\"chem\">1 / (r(r + 1))</span>을 부분분수로 나타내시오 (Express). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">S_1</span>, <span class=\"chem\">S_2</span>, <span class=\"chem\">S_3</span>, <span class=\"chem\">S_4</span>를 구하고 (Find), 이를 이용하여 (hence) <span class=\"chem\">S_n</span>을 <span class=\"chem\">n</span>에 대한 식으로 나타내는 공식을 추측하시오. <strong>[2 marks]</strong><br>(c) (a)의 답을 이용하여 추측을 증명하시오 (prove). <strong>[2 marks]</strong><br>(d) <span class=\"chem\">S_n &gt; 0.99</span>를 만족하는 <span class=\"chem\">n</span>의 최솟값을 구하시오 (Find). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Decode: the question builds one argument. Partial fractions turn each term into a difference, the first few sums suggest a pattern, and the same differences then make the whole sum collapse (“telescope”).
        "해석: 이 문제는 하나의 논증을 차례로 쌓아 가요. 부분분수로 각 항을 차의 꼴로 바꾸고, 처음 몇 개의 합에서 규칙을 찾은 뒤, 같은 차의 꼴 덕분에 전체 합이 연쇄적으로 소거됨(“telescope”)을 보여요.",
        // EN: For (a), put <span class="chem">r = 0</span> and <span class="chem">r = -1</span> into <span class="chem">1 ≡ A(r + 1) + Br</span>.
        "(a)에서는 <span class=\"chem\">1 ≡ A(r + 1) + Br</span>에 <span class=\"chem\">r = 0</span>과 <span class=\"chem\">r = -1</span>을 대입해요.",
        // EN: For (c), write out the first and last few brackets of <span class="chem">Σ(1/r - 1/(r + 1))</span> and see which parts survive.
        "(c)에서는 <span class=\"chem\">Σ(1/r - 1/(r + 1))</span>의 처음과 마지막 몇 개의 괄호를 써 보고, 어떤 부분이 소거되지 않고 남는지 확인해요.",
        // EN: For (d), solve <span class="chem">n/(n + 1) &gt; 0.99</span>; take care with “greater than”.
        "(d)에서는 <span class=\"chem\">n/(n + 1) &gt; 0.99</span>를 풀어요. “초과”는 등호를 포함하지 않는다는 점에 주의해요.",
      ],
      // EN: <p><b>Decode:</b> partial fractions → pattern → telescoping proof → use the formula.</p><div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span>   (b)  <span class="frac"><span>1</span><span>2</span></span>, <span class="frac"><span>2</span><span>3</span></span>, <span class="frac"><span>3</span><span>4</span></span>, <span class="frac"><span>4</span><span>5</span></span> ⇒ <i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(c)  ∑ = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span>   (d)  <i>n</i> &gt; 99 ⇒ <b><i>n</i> = 100</b></div>
      solution: "<p><b>해석:</b> 부분분수 → 규칙 찾기 → 연쇄 소거로 증명 → 공식 이용.</p><div class=\"worked__math\">(a)  <span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 1</span></span>   (b)  <span class=\"frac\"><span>1</span><span>2</span></span>, <span class=\"frac\"><span>2</span><span>3</span></span>, <span class=\"frac\"><span>3</span><span>4</span></span>, <span class=\"frac\"><span>4</span><span>5</span></span> ⇒ <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class=\"worked__math\">(c)  ∑ = 1 − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span>   (d)  <i>n</i> &gt; 99 ⇒ <b><i>n</i> = 100</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">1 = A(r + 1) + Br</span> (or uses cover-up).
        "M1: <span class=\"chem\">1 = A(r + 1) + Br</span>로 놓음 (또는 가리기 방법 이용).",
        // EN: A1: <span class="chem">1/(r(r + 1)) = 1/r - 1/(r + 1)</span>.
        "A1: <span class=\"chem\">1/(r(r + 1)) = 1/r - 1/(r + 1)</span>.",
        // EN: A1: <span class="chem">S_1 = 1/2</span>, <span class="chem">S_2 = 2/3</span>, <span class="chem">S_3 = 3/4</span>, <span class="chem">S_4 = 4/5</span>.
        "A1: <span class=\"chem\">S_1 = 1/2</span>, <span class=\"chem\">S_2 = 2/3</span>, <span class=\"chem\">S_3 = 3/4</span>, <span class=\"chem\">S_4 = 4/5</span>.",
        // EN: A1: Conjecture <span class="chem">S_n = n/(n + 1)</span>.
        "A1: <span class=\"chem\">S_n = n/(n + 1)</span>이라고 추측함.",
        // EN: M1: Writes the sum as <span class="chem">(1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n + 1))</span>, showing the cancellation.
        "M1: 합을 <span class=\"chem\">(1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n + 1))</span>로 써서 소거되는 과정을 보임.",
        // EN: A1: <span class="chem">1 - 1/(n + 1) = n/(n + 1)</span>, which proves the conjecture.
        "A1: <span class=\"chem\">1 - 1/(n + 1) = n/(n + 1)</span>이므로 추측이 증명됨.",
        // EN: A1: <span class="chem">n = 100</span>.
        "A1: <span class=\"chem\">n = 100</span>.",
      ],
      // EN: <div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 1)</span></span> = <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span></div><div class="worked__math">(b)  <i>S</i><sub>1</sub> = <span class="frac"><span>1</span><span>2</span></span>, <i>S</i><sub>2</sub> = <span class="frac"><span>2</span><span>3</span></span>, <i>S</i><sub>3</sub> = <span class="frac"><span>3</span><span>4</span></span>, <i>S</i><sub>4</sub> = <span class="frac"><span>4</span><span>5</span></span>;  conjecture <i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(c)  <i>S</i><sub><i>n</i></sub> = (1 − <span class="frac"><span>1</span><span>2</span></span>) + (<span class="frac"><span>1</span><span>2</span></span> − <span class="frac"><span>1</span><span>3</span></span>) + … + (<span class="frac"><span>1</span><span><i>n</i></span></span> − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span>) = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(d)  <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span> &gt; 0.99 ⇔ <i>n</i> &gt; 99, so <b><i>n</i> = 100</b></div>
      answer: "<div class=\"worked__math\">(a)  <span class=\"frac\"><span>1</span><span><i>r</i>(<i>r</i> + 1)</span></span> = <span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 1</span></span></div><div class=\"worked__math\">(b)  <i>S</i><sub>1</sub> = <span class=\"frac\"><span>1</span><span>2</span></span>, <i>S</i><sub>2</sub> = <span class=\"frac\"><span>2</span><span>3</span></span>, <i>S</i><sub>3</sub> = <span class=\"frac\"><span>3</span><span>4</span></span>, <i>S</i><sub>4</sub> = <span class=\"frac\"><span>4</span><span>5</span></span>;  추측 <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class=\"worked__math\">(c)  <i>S</i><sub><i>n</i></sub> = (1 − <span class=\"frac\"><span>1</span><span>2</span></span>) + (<span class=\"frac\"><span>1</span><span>2</span></span> − <span class=\"frac\"><span>1</span><span>3</span></span>) + … + (<span class=\"frac\"><span>1</span><span><i>n</i></span></span> − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span>) = 1 − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class=\"worked__math\">(d)  <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span> &gt; 0.99 ⇔ <i>n</i> &gt; 99, 따라서 <b><i>n</i> = 100</b></div>",
    },

    // ── t1-3-q018 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q018": {
      // EN: <p>Four couples (8 people) sit in a row of 8 chairs. In how many ways can they be seated if each couple must sit together?</p>
      stem: "<p>네 쌍의 커플(8명)이 8개의 의자에 일렬로 앉으려고 해요. 각 커플이 반드시 이웃하여 앉아야 할 때, 앉을 수 있는 방법의 수는 몇 가지인가요?</p>",
      hints: [
        // EN: Glue each of the 4 couples into a single block. How many ways can you arrange the 4 blocks?
        "4쌍의 커플을 각각 하나의 묶음으로 묶으세요. 4개의 묶음을 배열하는 방법은 몇 가지인가요?",
        // EN: Multiply by <span class="chem">2!</span> for each of the 4 couples: <span class="chem">4! × (2!)^4</span>.
        "4쌍의 커플마다 각각 <span class=\"chem\">2!</span>을 곱하세요: <span class=\"chem\">4! × (2!)^4</span>.",
      ],
      // EN: <div class="worked__math">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>
      solution: "<div class=\"worked__math\">4! × (2!)<sup>4</sup> = 24 × 16 = <b>384</b></div>",
    },

  }
});

/* Added by i18n-extract --only-missing on 2026-11-14: new questions and new slots. */
S1.i18n.register('ko', 't1-3.q', {
  questions: {

    // ── t1-3-q019 · numeric · exam · AHL · AHL 1.10; SL 4.5 · 5 marks
    "t1-3-q019": {
      // EN: <p>In a national lottery, a player chooses 6 different main numbers from 1 to 40 and, separately, one power number from 1 to 15. The draw then selects 6 different main numbers and one power number at random.</p><p>Find the probability that a single ticket matches <strong>exactly 4</strong> of the 6 main numbers <strong>and</strong> the power number. Give your answer to 3 significant figures.</p>
      stem: "<p>어느 국가 복권에서 참가자는 1부터 40까지의 수 중에서 서로 다른 메인 번호 6개를 고르고, 이와 별도로 1부터 15까지의 수 중에서 파워 번호 하나를 골라요. 추첨에서는 서로 다른 메인 번호 6개와 파워 번호 하나를 무작위로 뽑아요.</p><p>복권 한 장이 메인 번호 6개 중 <strong>정확히 4개</strong>와 일치하고 <strong>동시에</strong> 파워 번호와도 일치할 확률을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: this is a counting question in disguise. Probability = (number of draws that give this result) ÷ (number of possible draws), and the order of the main numbers does not matter, so use combinations.
        "해석: 겉모습만 다를 뿐 경우의 수 문제예요. 확률 = (이 결과가 나오는 추첨의 수) ÷ (가능한 추첨의 수)이고, 메인 번호의 순서는 중요하지 않으므로 조합을 사용해요.",
        // EN: The number of possible draws is <span class="chem">40C6 × 15</span>.
        "가능한 추첨의 수는 <span class=\"chem\">40C6 × 15</span>이에요.",
        // EN: A favourable draw contains 4 of your 6 numbers and 2 of the 34 numbers you did not choose, and exactly 1 power number: <span class="chem">6C4 × 34C2 × 1</span>.
        "조건을 만족하는 추첨은 내가 고른 번호 6개 중 4개, 고르지 않은 번호 34개 중 2개, 그리고 정확히 1개의 파워 번호를 포함해요: <span class=\"chem\">6C4 × 34C2 × 1</span>.",
      ],
      // EN: <p><b>Decode:</b> count equally likely draws; main numbers form an unordered selection.</p><div class="worked__math">Possible draws = <sup>40</sup>C<sub>6</sub> × 15 = 3 838 380 × 15 = 57 575 700</div><div class="worked__math">Favourable = <sup>6</sup>C<sub>4</sub> × <sup>34</sup>C<sub>2</sub> × 1 = 15 × 561 = 8415</div><div class="worked__math">P = <span class="frac"><span>8415</span><span>57 575 700</span></span> = 1.4616… × 10<sup>−4</sup> ≈ <b>1.46 × 10<sup>−4</sup></b></div>
      solution: "<p><b>해석:</b> 일어날 가능성이 같은 추첨의 수를 세요. 메인 번호는 순서를 고려하지 않는 선택이에요.</p><div class=\"worked__math\">가능한 추첨 = <sup>40</sup>C<sub>6</sub> × 15 = 3 838 380 × 15 = 57 575 700</div><div class=\"worked__math\">조건을 만족하는 추첨 = <sup>6</sup>C<sub>4</sub> × <sup>34</sup>C<sub>2</sub> × 1 = 15 × 561 = 8415</div><div class=\"worked__math\">P = <span class=\"frac\"><span>8415</span><span>57 575 700</span></span> = 1.4616… × 10<sup>−4</sup> ≈ <b>1.46 × 10<sup>−4</sup></b></div>",
    },

    // ── t1-3-q020 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q020": {
      // EN: <p>A coach chooses 4 players from a squad of <span class="chem">n</span> players to form a relay team; the order in which they are chosen does not matter. There are exactly 27 405 possible teams. Use your GDC to find <span class="chem">n</span>.</p>
      stem: "<p>코치가 선수 <span class=\"chem\">n</span>명 중에서 4명을 뽑아 계주 팀을 구성해요. 뽑는 순서는 중요하지 않아요. 가능한 팀은 정확히 27 405가지예요. GDC를 사용하여 <span class=\"chem\">n</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: “order does not matter” means combinations, so the condition is <span class="chem">nC4 = 27405</span>, an equation in the positive integer <span class="chem">n</span>.
        "해석: \"순서가 중요하지 않다\"는 조합을 뜻하므로 조건은 <span class=\"chem\">nC4 = 27405</span>이고, 이는 양의 정수 <span class=\"chem\">n</span>에 대한 방정식이에요.",
        // EN: Enter <span class="chem">y = xC4</span> (nCr on your GDC) as a function and scroll through its table of values, or solve <span class="chem">x(x - 1)(x - 2)(x - 3)/24 = 27405</span> graphically.
        "<span class=\"chem\">y = xC4</span>(GDC의 nCr)을 함수로 입력하고 표를 넘겨 보거나, <span class=\"chem\">x(x - 1)(x - 2)(x - 3)/24 = 27405</span>를 그래프로 푸세요.",
        // EN: Only a positive integer <span class="chem">n &gt;= 4</span> makes sense.
        "의미가 있는 것은 양의 정수 <span class=\"chem\">n &gt;= 4</span>뿐이에요.",
      ],
      // EN: <div class="worked__math"><sup><i>n</i></sup>C<sub>4</sub> = <span class="frac"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)(<i>n</i> − 3)</span><span>24</span></span> = 27 405 <b>[M1]</b></div><div class="worked__math">GDC table: <sup>29</sup>C<sub>4</sub> = 23 751, <sup>30</sup>C<sub>4</sub> = 27 405, <sup>31</sup>C<sub>4</sub> = 31 465 <b>[M1 A1]</b></div><div class="worked__math"><b><i>n</i> = 30</b> <b>[A1]</b></div>
      solution: "<div class=\"worked__math\"><sup><i>n</i></sup>C<sub>4</sub> = <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)(<i>n</i> − 2)(<i>n</i> − 3)</span><span>24</span></span> = 27 405 <b>[M1]</b></div><div class=\"worked__math\">GDC 표: <sup>29</sup>C<sub>4</sub> = 23 751, <sup>30</sup>C<sub>4</sub> = 27 405, <sup>31</sup>C<sub>4</sub> = 31 465 <b>[M1 A1]</b></div><div class=\"worked__math\"><b><i>n</i> = 30</b> <b>[A1]</b></div>",
    },

    // ── t1-3-q021 · numeric · challenge · AHL · AHL 1.10 · 5 marks
    "t1-3-q021": {
      // EN: <p>A security firm sends inspection panels of 5 staff to each site. Every different panel that could be formed from its staff must be given its own six-digit code, from 000000 to 999999. As the firm takes on more staff, it will eventually run out of codes.</p><p>Find the least number of staff for which there are more possible panels than codes.</p>
      stem: "<p>어느 경비 회사는 각 현장에 직원 5명으로 이루어진 점검반을 보내요. 직원으로 만들 수 있는 서로 다른 점검반마다 000000부터 999999까지의 고유한 여섯 자리 코드를 하나씩 부여해야 해요. 회사가 직원을 더 고용하면 결국 코드가 부족해질 거예요.</p><p>가능한 점검반의 수가 코드의 수보다 많아지는 최소 직원 수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: a panel is an unordered group of 5 people, so with <span class="chem">n</span> staff there are <span class="chem">nC5</span> panels. There are <span class="chem">10^6</span> six-digit codes (000000 counts). You want the least integer <span class="chem">n</span> with <span class="chem">nC5 &gt; 10^6</span>.
        "해석: 점검반은 순서를 고려하지 않는 5명의 모임이므로 직원이 <span class=\"chem\">n</span>명이면 점검반은 <span class=\"chem\">nC5</span>가지예요. 여섯 자리 코드는 <span class=\"chem\">10^6</span>개 있어요(000000도 포함). <span class=\"chem\">nC5 &gt; 10^6</span>를 만족하는 가장 작은 정수 <span class=\"chem\">n</span>를 구해야 해요.",
        // EN: Put <span class="chem">y = xC5</span> in your GDC table and look for where it first passes 1 000 000.
        "<span class=\"chem\">y = xC5</span>을 GDC 표에 넣고 처음으로 1 000 000을 넘는 곳을 찾으세요.",
        // EN: Check the value just below as well as the value just above the cut-off.
        "경계 바로 위의 값뿐만 아니라 바로 아래의 값도 확인하세요.",
      ],
      // EN: <p><b>Decode:</b> panels = <sup><i>n</i></sup>C<sub>5</sub>; codes = 10<sup>6</sup>; find the least <i>n</i> with <sup><i>n</i></sup>C<sub>5</sub> &gt; 10<sup>6</sup>.</p><div class="worked__math">GDC table: <sup>43</sup>C<sub>5</sub> = 962 598 &lt; 10<sup>6</sup>, <sup>44</sup>C<sub>5</sub> = 1 086 008 &gt; 10<sup>6</sup></div><div class="worked__math">Least number of staff = <b>44</b></div>
      solution: "<p><b>해석:</b> 점검반의 수 = <sup><i>n</i></sup>C<sub>5</sub>; 코드의 수 = 10<sup>6</sup>; <sup><i>n</i></sup>C<sub>5</sub> &gt; 10<sup>6</sup>을 만족하는 가장 작은 <i>n</i>을 구해요.</p><div class=\"worked__math\">GDC 표: <sup>43</sup>C<sub>5</sub> = 962 598 &lt; 10<sup>6</sup>, <sup>44</sup>C<sub>5</sub> = 1 086 008 &gt; 10<sup>6</sup></div><div class=\"worked__math\">최소 직원 수 = <b>44</b></div>",
    },

    // ── t1-3-q022 · short · exam · AHL · AHL 1.10 · 10 marks
    "t1-3-q022": {
      // EN: <p>A council of 8 members is to be chosen from 12 men and 15 women.</p><p>(a) Find the number of different councils that can be chosen. <strong>[2 marks]</strong><br>(b) Find the number of councils that contain exactly 4 women. <strong>[2 marks]</strong><br>(c) Find the number of councils that contain at least 3 women. <strong>[3 marks]</strong><br>(d) One of the men, Marco, and one of the women, Wen, refuse to serve together. Find the number of councils with exactly 4 men and 4 women that do not contain both Marco and Wen. <strong>[3 marks]</strong></p>
      stem: "<p>남자 12명과 여자 15명 중에서 위원 8명으로 이루어진 위원회를 뽑아요.</p><p>(a) 뽑을 수 있는 서로 다른 위원회의 수를 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 여자가 정확히 4명 포함된 위원회의 수를 구하시오. <strong>[2 marks]</strong><br>(c) 여자가 적어도 3명 포함된 위원회의 수를 구하시오. <strong>[3 marks]</strong><br>(d) 남자 중 한 명인 Marco와 여자 중 한 명인 Wen은 함께 위원이 되기를 거부해요. 남자 정확히 4명과 여자 정확히 4명으로 이루어지고, Marco와 Wen을 동시에 포함하지 않는 위원회의 수를 구하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: a council is an unordered selection, so every part is combinations. “At least 3 women” has six cases, but its complement (0, 1 or 2 women) has only three.
        "해석: 위원회는 순서를 고려하지 않는 선택이므로 모든 소문항이 조합이에요. \"여자가 적어도 3명\"은 경우가 여섯 가지지만, 그 여사건(여자 0, 1, 2명)은 세 가지뿐이에요.",
        // EN: In (d), count the 4-men-4-women councils that DO contain both Marco and Wen (fix them, then choose 3 more men from 11 and 3 more women from 14) and subtract from (b).
        "(d)에서는 Marco와 Wen을 실제로 둘 다 포함하는 \"남자 4명·여자 4명\" 위원회를 세고(두 사람을 고정한 뒤 남자 11명 중 3명, 여자 14명 중 3명을 더 뽑아요), 이를 (b)에서 빼세요.",
        // EN: Your GDC nCr key handles the large numbers; write down each term you use.
        "GDC의 nCr 키로 큰 수도 계산할 수 있어요. 사용하는 각 항을 적어 두세요.",
      ],
      // EN: <div class="worked__math">(a) 2 220 075 (b) 675 675 (c) 2 220 075 − 109 395 = 2 110 680 (d) 675 675 − 165 × 364 = 615 615</div>
      solution: "<div class=\"worked__math\">(a) 2 220 075 (b) 675 675 (c) 2 220 075 − 109 395 = 2 110 680 (d) 675 675 − 165 × 364 = 615 615</div>",
      // EN: <div class="worked__math">(a) <sup>27</sup>C<sub>8</sub> = <b>2 220 075</b></div><div class="worked__math">(b) <sup>15</sup>C<sub>4</sub> × <sup>12</sup>C<sub>4</sub> = 1365 × 495 = <b>675 675</b></div><div class="worked__math">(c) 0, 1 or 2 women: <sup>12</sup>C<sub>8</sub> + <sup>15</sup>C<sub>1</sub><sup>12</sup>C<sub>7</sub> + <sup>15</sup>C<sub>2</sub><sup>12</sup>C<sub>6</sub> = 495 + 11 880 + 97 020 = 109 395; 2 220 075 − 109 395 = <b>2 110 680</b></div><div class="worked__math">(d) councils with both: <sup>11</sup>C<sub>3</sub> × <sup>14</sup>C<sub>3</sub> = 165 × 364 = 60 060; 675 675 − 60 060 = <b>615 615</b></div>
      answer: "<div class=\"worked__math\">(a) <sup>27</sup>C<sub>8</sub> = <b>2 220 075</b></div><div class=\"worked__math\">(b) <sup>15</sup>C<sub>4</sub> × <sup>12</sup>C<sub>4</sub> = 1365 × 495 = <b>675 675</b></div><div class=\"worked__math\">(c) 여자 0, 1, 2명: <sup>12</sup>C<sub>8</sub> + <sup>15</sup>C<sub>1</sub><sup>12</sup>C<sub>7</sub> + <sup>15</sup>C<sub>2</sub><sup>12</sup>C<sub>6</sub> = 495 + 11 880 + 97 020 = 109 395; 2 220 075 − 109 395 = <b>2 110 680</b></div><div class=\"worked__math\">(d) 두 사람을 모두 포함하는 위원회: <sup>11</sup>C<sub>3</sub> × <sup>14</sup>C<sub>3</sub> = 165 × 364 = 60 060; 675 675 − 60 060 = <b>615 615</b></div>",
      markscheme: [
        // EN: M1: Uses <span class="chem">27C8</span> (selection from all 27 people, order irrelevant).
        "M1: <span class=\"chem\">27C8</span>을 사용함(27명 전체에서 뽑으며 순서는 무관함).",
        // EN: A1: 2 220 075.
        "A1: 2 220 075.",
        // EN: M1: Multiplies <span class="chem">15C4 × 12C4</span>.
        "M1: <span class=\"chem\">15C4 × 12C4</span>을 곱함.",
        // EN: A1: 675 675.
        "A1: 675 675.",
        // EN: M1: Uses the complement (or adds the cases with 3, 4, …, 8 women).
        "M1: 여사건을 이용함(또는 여자 3, 4, …, 8명인 경우를 더함).",
        // EN: M1: Correct terms for 0, 1 and 2 women: <span class="chem">12C8 + 15C1 × 12C7 + 15C2 × 12C6 = 109395</span>.
        "M1: 여자 0, 1, 2명인 경우의 항이 올바름: <span class=\"chem\">12C8 + 15C1 × 12C7 + 15C2 × 12C6 = 109395</span>.",
        // EN: A1: 2 110 680.
        "A1: 2 110 680.",
        // EN: M1: Counts councils containing both Marco and Wen by fixing them: <span class="chem">11C3 × 14C3</span>.
        "M1: Marco와 Wen을 고정하여 두 사람을 모두 포함하는 위원회를 셈: <span class=\"chem\">11C3 × 14C3</span>.",
        // EN: A1: 60 060.
        "A1: 60 060.",
        // EN: A1: 675 675 − 60 060 = 615 615.
        "A1: 675 675 − 60 060 = 615 615.",
      ],
    },

    // ── t1-3-q023 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q023": {
      // EN: <p>A website password has exactly 8 characters. Each character is one of the 26 lower-case letters or one of the 10 digits 0–9, and no character may be used more than once.</p><p>Find the number of passwords that contain <strong>at least one digit</strong>. Give your answer in the form <span class="chem">a × 10^k</span>, where <span class="chem">1 &lt;= a &lt; 10</span> and <span class="chem">k</span> ∈ ℤ, with <span class="chem">a</span> correct to 3 significant figures.</p>
      stem: "<p>어느 웹사이트의 비밀번호는 정확히 8개의 문자로 이루어져요. 각 문자는 영어 소문자 26개 또는 숫자 0–9의 10개 중 하나이고, 같은 문자를 중복해서 사용할 수 없어요.</p><p><strong>숫자를 적어도 하나</strong> 포함하는 비밀번호의 수를 구하시오 (Find). 답은 <span class=\"chem\">a × 10^k</span> 꼴로 나타내시오. 단, <span class=\"chem\">1 &lt;= a &lt; 10</span>, <span class=\"chem\">k</span> ∈ ℤ이고, <span class=\"chem\">a</span>는 유효숫자 3자리로 나타내시오.</p>",
      hints: [
        // EN: Decode: the order of characters matters and there is no repetition, so these are permutations. “At least one digit” is easiest as (all passwords) − (passwords with no digit).
        "해석: 문자의 순서가 중요하고 중복이 없으므로 순열이에요. \"적어도 하나의 숫자\"는 (모든 비밀번호) − (숫자가 없는 비밀번호)로 구하는 것이 가장 쉬워요.",
        // EN: All passwords: <span class="chem">36P8</span>. Passwords with letters only: <span class="chem">26P8</span>.
        "모든 비밀번호: <span class=\"chem\">36P8</span>. 영문자로만 된 비밀번호: <span class=\"chem\">26P8</span>.",
        // EN: Use the nPr key on your GDC and subtract.
        "GDC의 nPr 키를 사용해 빼세요.",
      ],
      // EN: <div class="worked__math"><sup>36</sup>P<sub>8</sub> − <sup>26</sup>P<sub>8</sub> = 1 220 096 908 800 − 62 990 928 000 = 1 157 105 980 800 ≈ <b>1.16 × 10<sup>12</sup></b></div>
      solution: "<div class=\"worked__math\"><sup>36</sup>P<sub>8</sub> − <sup>26</sup>P<sub>8</sub> = 1 220 096 908 800 − 62 990 928 000 = 1 157 105 980 800 ≈ <b>1.16 × 10<sup>12</sup></b></div>",
    },

    // ── t1-3-q024 · numeric · challenge · AHL · AHL 1.10; SL 4.5 · 5 marks
    "t1-3-q024": {
      // EN: <p>A librarian puts 10 different novels and 4 different dictionaries back on an empty shelf, placing all 14 books in a random order. The dictionaries are heavy: the shelf bends if any two dictionaries stand side by side.</p><p>Find the probability that the shelf does not bend. Give your answer to 3 significant figures.</p>
      stem: "<p>사서가 서로 다른 소설 10권과 서로 다른 사전 4권을 빈 책장에 다시 꽂으면서 14권 모두를 무작위 순서로 배열해요. 사전은 무거워서 어느 두 사전이라도 나란히 이웃하면 책장이 휘어요.</p><p>책장이 휘지 않을 확률을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: “the shelf does not bend” means no two dictionaries are adjacent. All 14! orders are equally likely, so P = (orders with no two dictionaries adjacent) ÷ 14!. This is the gap method.
        "해석: \"책장이 휘지 않는다\"는 어느 두 사전도 이웃하지 않는다는 뜻이에요. 14!가지 순서는 모두 일어날 가능성이 같으므로 P = (어느 두 사전도 이웃하지 않는 순서의 수) ÷ 14!예요. 이것이 끼워 넣기 방법이에요.",
        // EN: Arrange the 10 novels first: <span class="chem">10!</span> ways. They create 11 gaps (including both ends).
        "먼저 소설 10권을 배열해요: <span class=\"chem\">10!</span>가지. 소설 사이와 양 끝에 11개의 빈자리가 생겨요.",
        // EN: Place the 4 different dictionaries in 4 different gaps: <span class="chem">11P4</span> ways. Then divide by <span class="chem">14!</span>.
        "서로 다른 사전 4권을 서로 다른 4개의 빈자리에 넣어요: <span class=\"chem\">11P4</span>가지. 그런 다음 <span class=\"chem\">14!</span>로 나누세요.",
      ],
      // EN: <p><b>Decode:</b> “does not bend” = no two dictionaries adjacent → gap method, then divide by the total number of orders.</p><div class="worked__math">Favourable = 10! × <sup>11</sup>P<sub>4</sub> = 3 628 800 × 7920 = 28 740 096 000</div><div class="worked__math">P = <span class="frac"><span>28 740 096 000</span><span>14!</span></span> = <span class="frac"><span>30</span><span>91</span></span> ≈ <b>0.330</b></div>
      solution: "<p><b>해석:</b> \"휘지 않는다\" = 어느 두 사전도 이웃하지 않음 → 끼워 넣기 방법, 그런 다음 전체 순서의 수로 나눠요.</p><div class=\"worked__math\">조건을 만족하는 경우 = 10! × <sup>11</sup>P<sub>4</sub> = 3 628 800 × 7920 = 28 740 096 000</div><div class=\"worked__math\">P = <span class=\"frac\"><span>28 740 096 000</span><span>14!</span></span> = <span class=\"frac\"><span>30</span><span>91</span></span> ≈ <b>0.330</b></div>",
    },

    // ── t1-3-q025 · numeric · exam · AHL · AHL 1.10; SL 4.5 · 5 marks
    "t1-3-q025": {
      // EN: <p>A bag holds 60 tiles: 12 red and 48 blue. A player takes 7 tiles at random, without replacement. Using counting methods, find the probability that at least 2 of the 7 tiles are red. Give your answer to 3 significant figures.</p>
      stem: "<p>주머니에 타일 60개가 들어 있어요: 빨간색 12개와 파란색 48개. 한 참가자가 타일 7개를 무작위로 꺼내요(꺼낸 타일은 다시 넣지 않아요). 경우의 수를 이용하여 꺼낸 7개 중 적어도 2개가 빨간색일 확률을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: every hand of 7 tiles is equally likely, and there are <span class="chem">60C7</span> of them. “At least 2 red” is quicker by the complement: subtract the hands with 0 or 1 red tile.
        "해석: 7개 타일의 묶음은 모두 일어날 가능성이 같고, 모두 <span class=\"chem\">60C7</span>가지예요. \"적어도 2개가 빨간색\"은 여사건으로 구하는 것이 빨라요: 빨간색이 0개 또는 1개인 묶음을 빼세요.",
        // EN: Hands with 0 red: <span class="chem">48C7</span>. Hands with exactly 1 red: <span class="chem">12C1 × 48C6</span>.
        "빨간색 0개: <span class=\"chem\">48C7</span>. 빨간색 정확히 1개: <span class=\"chem\">12C1 × 48C6</span>.",
        // EN: P = 1 − (48C7 + 12 × 48C6) / 60C7.
        "P = 1 − (48C7 + 12 × 48C6) / 60C7.",
      ],
      // EN: <div class="worked__math">P(0 or 1 red) = <span class="frac"><span><sup>48</sup>C<sub>7</sub> + <sup>12</sup>C<sub>1</sub><sup>48</sup>C<sub>6</sub></span><span><sup>60</sup>C<sub>7</sub></span></span> = <span class="frac"><span>73 629 072 + 12 × 12 271 512</span><span>386 206 920</span></span> = 0.57194…</div><div class="worked__math">P(at least 2 red) = 1 − 0.57194… ≈ <b>0.428</b></div>
      solution: "<div class=\"worked__math\">P(빨간색 0개 또는 1개) = <span class=\"frac\"><span><sup>48</sup>C<sub>7</sub> + <sup>12</sup>C<sub>1</sub><sup>48</sup>C<sub>6</sub></span><span><sup>60</sup>C<sub>7</sub></span></span> = <span class=\"frac\"><span>73 629 072 + 12 × 12 271 512</span><span>386 206 920</span></span> = 0.57194…</div><div class=\"worked__math\">P(빨간색 적어도 2개) = 1 − 0.57194… ≈ <b>0.428</b></div>",
    },

    // ── t1-3-q026 · short · exam · AHL · AHL 1.10 · 8 marks
    "t1-3-q026": {
      // EN: <p>(a) Find the first four terms of the expansion of <span class="chem">sqrt(1 + 4x)</span> in ascending powers of <span class="chem">x</span>. <strong>[3 marks]</strong><br>(b) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(c) By writing <span class="chem">26 = 25 × 1.04</span>, use your answer to (a) with a suitable value of <span class="chem">x</span> to estimate <span class="chem">sqrt(26)</span>. <strong>[2 marks]</strong><br>(d) Find the percentage error of your estimate, compared with the value of <span class="chem">sqrt(26)</span> given by your GDC. <strong>[2 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">sqrt(1 + 4x)</span>을 <span class=\"chem\">x</span>에 대한 오름차순으로 전개할 때 처음 네 항을 구하시오 (Find). <strong>[3 marks]</strong><br>(b) 이 전개가 유효한 <span class=\"chem\">x</span>의 값의 집합을 답하시오 (State). <strong>[1 mark]</strong><br>(c) <span class=\"chem\">26 = 25 × 1.04</span>로 쓰고 (a)의 답에 알맞은 <span class=\"chem\">x</span>의 값을 이용하여 <span class=\"chem\">sqrt(26)</span>의 값을 추정하시오 (Estimate). <strong>[2 marks]</strong><br>(d) GDC로 구한 <span class=\"chem\">sqrt(26)</span>의 값과 비교하여 추정값의 백분율 오차를 구하시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: In (a) use <span class="chem">n = 1/2</span> and <span class="chem">u = 4x</span>; the <span class="chem">x^3</span> coefficient is <span class="chem">(n(n - 1)(n - 2)/3!) × 4^3</span>.
        "(a)에서는 <span class=\"chem\">n = 1/2</span>과 <span class=\"chem\">u = 4x</span>를 사용하세요. <span class=\"chem\">x^3</span>의 계수는 <span class=\"chem\">(n(n - 1)(n - 2)/3!) × 4^3</span>예요.",
        // EN: In (c), <span class="chem">sqrt(26) = sqrt(25)sqrt(1.04) = 5sqrt(1 + 4x)</span> with <span class="chem">4x = 0.04</span>.
        "(c)에서 <span class=\"chem\">sqrt(26) = sqrt(25)sqrt(1.04) = 5sqrt(1 + 4x)</span>이고, <span class=\"chem\">4x = 0.04</span>예요.",
        // EN: The estimate is extremely close: keep at least 7 significant figures from your GDC before finding the error.
        "추정값이 매우 정확해요. 오차를 구하기 전에 GDC 값을 적어도 유효숫자 7자리까지 유지하세요.",
      ],
      // EN: <div class="worked__math">(a) 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> (b) |<i>x</i>| &lt; 1/4 (c) 5.09902 (d) ≈ 9.54 × 10<sup>−6</sup> %</div>
      solution: "<div class=\"worked__math\">(a) 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> (b) |<i>x</i>| &lt; 1/4 (c) 5.09902 (d) ≈ 9.54 × 10<sup>−6</sup> %</div>",
      // EN: <div class="worked__math">(a) (1 + 4<i>x</i>)<sup>1/2</sup> = 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> − …</div><div class="worked__math">(b) |4<i>x</i>| &lt; 1 ⇔ |<i>x</i>| &lt; <span class="frac"><span>1</span><span>4</span></span></div><div class="worked__math">(c) √26 = 5√1.04, so <i>x</i> = 0.01: 5(1 + 0.02 − 0.0002 + 0.000004) = 5 × 1.019804 = <b>5.09902</b></div><div class="worked__math">(d) GDC: √26 = 5.0990195…; percentage error = <span class="frac"><span>5.09902 − 5.0990195…</span><span>5.0990195…</span></span> × 100% ≈ <b>9.54 × 10<sup>−6</sup> %</b></div>
      answer: "<div class=\"worked__math\">(a) (1 + 4<i>x</i>)<sup>1/2</sup> = 1 + 2<i>x</i> − 2<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> − …</div><div class=\"worked__math\">(b) |4<i>x</i>| &lt; 1 ⇔ |<i>x</i>| &lt; <span class=\"frac\"><span>1</span><span>4</span></span></div><div class=\"worked__math\">(c) √26 = 5√1.04이므로 <i>x</i> = 0.01: 5(1 + 0.02 − 0.0002 + 0.000004) = 5 × 1.019804 = <b>5.09902</b></div><div class=\"worked__math\">(d) GDC: √26 = 5.0990195…; 백분율 오차 = <span class=\"frac\"><span>5.09902 − 5.0990195…</span><span>5.0990195…</span></span> × 100% ≈ <b>9.54 × 10<sup>−6</sup> %</b></div>",
      markscheme: [
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = 1/2</span> and <span class="chem">u = 4x</span>.
        "M1: <span class=\"chem\">n = 1/2</span>, <span class=\"chem\">u = 4x</span>로 확장된 이항전개를 사용함.",
        // EN: A1: <span class="chem">1 + 2x - 2x^2</span>.
        "A1: <span class=\"chem\">1 + 2x - 2x^2</span>.",
        // EN: A1: <span class="chem">+ 4x^3</span>.
        "A1: <span class=\"chem\">+ 4x^3</span>.",
        // EN: A1: <span class="chem">|x| &lt; 1/4</span>.
        "A1: <span class=\"chem\">|x| &lt; 1/4</span>.",
        // EN: M1: Uses <span class="chem">sqrt(26) = 5sqrt(1 + 4x)</span> with <span class="chem">x = 0.01</span>.
        "M1: <span class=\"chem\">x = 0.01</span>로 <span class=\"chem\">sqrt(26) = 5sqrt(1 + 4x)</span>을 사용함.",
        // EN: A1: 5.09902.
        "A1: 5.09902.",
        // EN: M1: Uses |estimate − GDC value| ÷ GDC value × 100.
        "M1: |추정값 − GDC 값| ÷ GDC 값 × 100을 사용함.",
        // EN: A1: <span class="chem">9.54 × 10^{-6}</span> % (accept 0.00000954 %).
        "A1: <span class=\"chem\">9.54 × 10^{-6}</span> % (0.00000954 %도 인정).",
      ],
    },

    // ── t1-3-q027 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q027": {
      // EN: <p>The first three terms of the binomial expansion of <span class="chem">(1 + x)^{-1/2}</span> are used to estimate <span class="chem">1 / sqrt(1.3)</span>.</p><p>Find the percentage error of this estimate, compared with the value given by your GDC. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">(1 + x)^{-1/2}</span>의 이항전개의 처음 세 항을 사용하여 <span class=\"chem\">1 / sqrt(1.3)</span>의 값을 추정해요.</p><p>GDC로 구한 값과 비교하여 이 추정값의 백분율 오차를 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: <span class="chem">1/sqrt(1.3) = (1 + 0.3)^{-1/2}</span>, so put <span class="chem">x = 0.3</span> into the first three terms. Then compare with the GDC value.
        "해석: <span class=\"chem\">1/sqrt(1.3) = (1 + 0.3)^{-1/2}</span>이므로 처음 세 항에 <span class=\"chem\">x = 0.3</span>를 대입하세요. 그런 다음 GDC 값과 비교하세요.",
        // EN: <span class="chem">(1 + x)^{-1/2} ≈ 1 - (1/2)x + (3/8)x^2</span>.
        "<span class=\"chem\">(1 + x)^{-1/2} ≈ 1 - (1/2)x + (3/8)x^2</span>.",
        // EN: Percentage error = |estimate − exact| ÷ exact × 100.
        "백분율 오차 = |추정값 − 정확한 값| ÷ 정확한 값 × 100.",
      ],
      // EN: <div class="worked__math">Estimate = 1 − 0.15 + <span class="frac"><span>3</span><span>8</span></span>(0.09) = 0.88375</div><div class="worked__math">GDC: 1/√1.3 = 0.877058…</div><div class="worked__math">Percentage error = <span class="frac"><span>0.88375 − 0.877058…</span><span>0.877058…</span></span> × 100 ≈ <b>0.763 %</b></div>
      solution: "<div class=\"worked__math\">추정값 = 1 − 0.15 + <span class=\"frac\"><span>3</span><span>8</span></span>(0.09) = 0.88375</div><div class=\"worked__math\">GDC: 1/√1.3 = 0.877058…</div><div class=\"worked__math\">백분율 오차 = <span class=\"frac\"><span>0.88375 − 0.877058…</span><span>0.877058…</span></span> × 100 ≈ <b>0.763 %</b></div>",
    },

    // ── t1-3-q028 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q028": {
      // EN: <p>A low-power sensor chip cannot calculate square roots, so its firmware replaces <span class="chem">sqrt(1 + x)</span> by the quadratic made from the first three terms of its binomial expansion. A reading is trusted only while the absolute error of this replacement is less than <span class="chem">5 × 10^{-4}</span>.</p><p>Given that <span class="chem">x &gt;= 0</span>, find the largest value of <span class="chem">x</span> for which readings are trusted. Give your answer to 3 significant figures.</p>
      stem: "<p>저전력 센서 칩은 제곱근을 계산할 수 없어서, 펌웨어가 <span class=\"chem\">sqrt(1 + x)</span>을 그 이항전개의 처음 세 항으로 만든 이차식으로 바꿔서 계산해요. 이렇게 바꿨을 때의 절대 오차가 <span class=\"chem\">5 × 10^{-4}</span>보다 작은 동안에만 측정값을 신뢰할 수 있어요.</p><p><span class=\"chem\">x &gt;= 0</span>일 때, 측정값을 신뢰할 수 있는 <span class=\"chem\">x</span>의 최댓값을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: first find the quadratic <span class="chem">p(x)</span> (the first three terms of <span class="chem">(1 + x)^{1/2}</span>). Then the question asks where <span class="chem">|sqrt(1 + x) - p(x)| = 5 × 10^{-4}</span> for <span class="chem">x &gt;= 0</span>: an equation you solve on the GDC.
        "해석: 먼저 이차식 <span class=\"chem\">p(x)</span>(<span class=\"chem\">(1 + x)^{1/2}</span>의 처음 세 항)을 구하세요. 그러면 문제는 <span class=\"chem\">x &gt;= 0</span>에서 <span class=\"chem\">|sqrt(1 + x) - p(x)| = 5 × 10^{-4}</span>이 되는 곳을 묻는 것이에요. 이는 GDC로 푸는 방정식이에요.",
        // EN: <span class="chem">p(x) = 1 + x/2 - x^2/8</span>.
        "<span class=\"chem\">p(x) = 1 + x/2 - x^2/8</span>.",
        // EN: Graph <span class="chem">y = sqrt(1 + x) - (1 + x/2 - x^2/8)</span> and <span class="chem">y = 0.0005</span> for <span class="chem">x &gt;= 0</span>; the error increases with <span class="chem">x</span>, so the intersection is the boundary.
        "<span class=\"chem\">x &gt;= 0</span>에서 <span class=\"chem\">y = sqrt(1 + x) - (1 + x/2 - x^2/8)</span>과 <span class=\"chem\">y = 0.0005</span>의 그래프를 그리세요. 오차는 <span class=\"chem\">x</span>에 따라 증가하므로 교점이 경계예요.",
      ],
      // EN: <p><b>Decode:</b> “trusted” means |exact − quadratic| &lt; 5 × 10<sup>−4</sup>; find the boundary of this inequality for <i>x</i> ≥ 0.</p><div class="worked__math"><i>p</i>(<i>x</i>) = 1 + <span class="frac"><span><i>x</i></span><span>2</span></span> − <span class="frac"><span><i>x</i><sup>2</sup></span><span>8</span></span></div><div class="worked__math">GDC: √(1 + <i>x</i>) − <i>p</i>(<i>x</i>) = 0.0005 at <i>x</i> = 0.20821…; the error is increasing for <i>x</i> ≥ 0</div><div class="worked__math">Largest trusted value ≈ <b>0.208</b></div>
      solution: "<p><b>해석:</b> \"신뢰할 수 있다\"는 |정확한 값 − 이차식| &lt; 5 × 10<sup>−4</sup>를 뜻해요. <i>x</i> ≥ 0에서 이 부등식의 경계를 구해요.</p><div class=\"worked__math\"><i>p</i>(<i>x</i>) = 1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span> − <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>8</span></span></div><div class=\"worked__math\">GDC: <i>x</i> = 0.20821…에서 √(1 + <i>x</i>) − <i>p</i>(<i>x</i>) = 0.0005; <i>x</i> ≥ 0에서 오차는 증가함</div><div class=\"worked__math\">신뢰할 수 있는 최댓값 ≈ <b>0.208</b></div>",
    },

    // ── t1-3-q029 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q029": {
      // EN: <p>In special relativity, an object moving at speed <span class="chem">v</span> has Lorentz factor <span class="chem">gamma = 1 / sqrt(1 - beta^2)</span>, where <span class="chem">beta = v / c</span> and <span class="chem">c</span> is the speed of light. At everyday speeds engineers replace <span class="chem">gamma</span> by the first two terms of its binomial expansion in powers of <span class="chem">beta</span>.</p><p>Find the value of <span class="chem">beta</span>, where <span class="chem">0 &lt; beta &lt; 1</span>, for which this approximation is exactly 1% smaller than the true value of <span class="chem">gamma</span>. Give your answer to 3 significant figures.</p>
      stem: "<p>특수 상대성 이론에서 속력 <span class=\"chem\">v</span>로 움직이는 물체의 로렌츠 인자는 <span class=\"chem\">gamma = 1 / sqrt(1 - beta^2)</span>예요. 여기서 <span class=\"chem\">beta = v / c</span>이고 <span class=\"chem\">c</span>는 빛의 속력이에요. 일상적인 속력에서 공학자들은 <span class=\"chem\">gamma</span>를 <span class=\"chem\">beta</span>의 거듭제곱으로 이항전개하여 처음 두 항으로 바꿔 써요.</p><p>이 근삿값이 <span class=\"chem\">gamma</span>의 실제 값보다 정확히 1% 작아지는 <span class=\"chem\">beta</span>의 값을 구하시오 (Find). 단, <span class=\"chem\">0 &lt; beta &lt; 1</span>이에요. 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: write <span class="chem">gamma = (1 + u)^{-1/2}</span> with <span class="chem">u = -beta^2</span>, find its first two terms, then “1% smaller” means approximation = <span class="chem">0.99 gamma</span>. Solve that equation for <span class="chem">beta</span> on your GDC.
        "해석: <span class=\"chem\">u = -beta^2</span>로 두고 <span class=\"chem\">gamma = (1 + u)^{-1/2}</span>로 쓴 뒤 처음 두 항을 구하세요. \"1% 작다\"는 근삿값 = <span class=\"chem\">0.99 gamma</span>을 뜻해요. 이 방정식을 GDC로 풀어 <span class=\"chem\">beta</span>를 구하세요.",
        // EN: The first two terms are <span class="chem">1 + beta^2 / 2</span>.
        "처음 두 항은 <span class=\"chem\">1 + beta^2 / 2</span>이에요.",
        // EN: Solve <span class="chem">1 + beta^2/2 = 0.99 / sqrt(1 - beta^2)</span> for <span class="chem">0 &lt; beta &lt; 1</span>.
        "<span class=\"chem\">0 &lt; beta &lt; 1</span>에서 <span class=\"chem\">1 + beta^2/2 = 0.99 / sqrt(1 - beta^2)</span>을 푸세요.",
      ],
      // EN: <p><b>Decode:</b> binomial with <i>u</i> = −β<sup>2</sup>, then an equation “approximation = 0.99 × exact”.</p><div class="worked__math">γ = (1 − β<sup>2</sup>)<sup>−1/2</sup> = 1 + <span class="frac"><span>1</span><span>2</span></span>β<sup>2</sup> + … (valid for β<sup>2</sup> &lt; 1)</div><div class="worked__math">1 + <span class="frac"><span>β<sup>2</sup></span><span>2</span></span> = <span class="frac"><span>0.99</span><span>√(1 − β<sup>2</sup>)</span></span> ⇒ (GDC) β = 0.39842…</div><div class="worked__math">β ≈ <b>0.398</b></div>
      solution: "<p><b>해석:</b> <i>u</i> = −β<sup>2</sup>로 이항전개한 뒤, 방정식 \"근삿값 = 0.99 × 정확한 값\"을 풀어요.</p><div class=\"worked__math\">γ = (1 − β<sup>2</sup>)<sup>−1/2</sup> = 1 + <span class=\"frac\"><span>1</span><span>2</span></span>β<sup>2</sup> + … (β<sup>2</sup> &lt; 1에서 유효)</div><div class=\"worked__math\">1 + <span class=\"frac\"><span>β<sup>2</sup></span><span>2</span></span> = <span class=\"frac\"><span>0.99</span><span>√(1 − β<sup>2</sup>)</span></span> ⇒ (GDC) β = 0.39842…</div><div class=\"worked__math\">β ≈ <b>0.398</b></div>",
    },

    // ── t1-3-q030 · short · exam · AHL · AHL 1.10 · 8 marks
    "t1-3-q030": {
      // EN: <p>At height <span class="chem">h</span> km above the surface of a planet of radius <span class="chem">R</span> km, the gravitational field strength is <span class="chem">g = g_0 R^2 / (R + h)^2</span>, where <span class="chem">g_0</span> is its value at the surface.</p><p>(a) Show that <span class="chem">g = g_0(1 + h/R)^{-2}</span>. <strong>[1 mark]</strong><br>(b) Hence show that, for small values of <span class="chem">h</span>, <span class="chem">g ≈ g_0(1 - 2h/R + 3h^2/R^2)</span>. <strong>[3 marks]</strong><br>(c) Given that <span class="chem">h &gt;= 0</span>, state the condition on <span class="chem">h</span> for which the full binomial series converges. <strong>[1 mark]</strong><br>(d) For the Earth take <span class="chem">R = 6371</span> and <span class="chem">g_0 = 9.81</span> <span class="unit">m s-2</span>. A satellite orbits at <span class="chem">h = 420</span>. Use the approximation in (b) to estimate <span class="chem">g</span>, and find its percentage error compared with the exact formula. <strong>[3 marks]</strong></p>
      stem: "<p>반지름이 <span class=\"chem\">R</span> km인 행성의 표면에서 높이 <span class=\"chem\">h</span> km인 지점의 중력장 세기는 <span class=\"chem\">g = g_0 R^2 / (R + h)^2</span>이에요. 여기서 <span class=\"chem\">g_0</span>는 표면에서의 값이에요.</p><p>(a) <span class=\"chem\">g = g_0(1 + h/R)^{-2}</span>임을 보이시오 (Show that). <strong>[1 mark]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">h</span>이 작을 때 <span class=\"chem\">g ≈ g_0(1 - 2h/R + 3h^2/R^2)</span>임을 보이시오. <strong>[3 marks]</strong><br>(c) <span class=\"chem\">h &gt;= 0</span>일 때, 이항급수 전체가 수렴하기 위한 <span class=\"chem\">h</span>에 대한 조건을 답하시오 (State). <strong>[1 mark]</strong><br>(d) 지구에 대해 <span class=\"chem\">R = 6371</span>, <span class=\"chem\">g_0 = 9.81</span> <span class=\"unit\">m s-2</span>로 두어요. 어느 인공위성이 <span class=\"chem\">h = 420</span>인 높이에서 궤도를 돌고 있어요. (b)의 근사식을 이용하여 <span class=\"chem\">g</span>의 값을 추정하고, 정확한 식과 비교한 백분율 오차를 구하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is a rearrangement; (b) is the extended binomial with <span class="chem">n = -2</span>; (c) is the validity condition <span class="chem">|u| &lt; 1</span>; (d) is a GDC comparison.
        "해석: (a)는 식의 변형, (b)는 <span class=\"chem\">n = -2</span>인 확장된 이항전개, (c)는 유효 조건 <span class=\"chem\">|u| &lt; 1</span>, (d)는 GDC를 이용한 비교예요.",
        // EN: Divide the top and bottom of <span class="chem">R^2/(R + h)^2</span> by <span class="chem">R^2</span>.
        "<span class=\"chem\">R^2/(R + h)^2</span>의 분자와 분모를 <span class=\"chem\">R^2</span>로 나누세요.",
        // EN: Keep full GDC accuracy for both values in (d) before finding the percentage error.
        "(d)에서 백분율 오차를 구하기 전에 두 값 모두 GDC의 정밀도를 그대로 유지하세요.",
      ],
      // EN: <div class="worked__math">(b) <i>g</i> ≈ <i>g</i><sub>0</sub>(1 − 2<i>h</i>/<i>R</i> + 3<i>h</i><sup>2</sup>/<i>R</i><sup>2</sup>) (c) <i>h</i> &lt; <i>R</i> (d) 8.64 m s<sup>−2</sup>, error ≈ 0.120 %</div>
      solution: "<div class=\"worked__math\">(b) <i>g</i> ≈ <i>g</i><sub>0</sub>(1 − 2<i>h</i>/<i>R</i> + 3<i>h</i><sup>2</sup>/<i>R</i><sup>2</sup>) (c) <i>h</i> &lt; <i>R</i> (d) 8.64 m s<sup>−2</sup>, 오차 ≈ 0.120 %</div>",
      // EN: <div class="worked__math">(a) <span class="frac"><span><i>R</i><sup>2</sup></span><span>(<i>R</i> + <i>h</i>)<sup>2</sup></span></span> = <span class="frac"><span>1</span><span>(1 + <i>h</i>/<i>R</i>)<sup>2</sup></span></span>, so <i>g</i> = <i>g</i><sub>0</sub>(1 + <i>h</i>/<i>R</i>)<sup>−2</sup></div><div class="worked__math">(b) (1 + <i>u</i>)<sup>−2</sup> = 1 − 2<i>u</i> + <span class="frac"><span>(−2)(−3)</span><span>2</span></span><i>u</i><sup>2</sup> + … = 1 − 2<i>u</i> + 3<i>u</i><sup>2</sup> + … with <i>u</i> = <i>h</i>/<i>R</i></div><div class="worked__math">(c) |<i>h</i>/<i>R</i>| &lt; 1, i.e. 0 ≤ <i>h</i> &lt; <i>R</i></div><div class="worked__math">(d) <i>u</i> = 420/6371: estimate = 9.81(1 − 2<i>u</i> + 3<i>u</i><sup>2</sup>) ≈ <b>8.64</b> m s<sup>−2</sup> (8.6445…); exact = 9.81/(1 + <i>u</i>)<sup>2</sup> = 8.6341…; percentage error ≈ <b>0.120 %</b></div>
      answer: "<div class=\"worked__math\">(a) <span class=\"frac\"><span><i>R</i><sup>2</sup></span><span>(<i>R</i> + <i>h</i>)<sup>2</sup></span></span> = <span class=\"frac\"><span>1</span><span>(1 + <i>h</i>/<i>R</i>)<sup>2</sup></span></span>이므로 <i>g</i> = <i>g</i><sub>0</sub>(1 + <i>h</i>/<i>R</i>)<sup>−2</sup></div><div class=\"worked__math\">(b) (1 + <i>u</i>)<sup>−2</sup> = 1 − 2<i>u</i> + <span class=\"frac\"><span>(−2)(−3)</span><span>2</span></span><i>u</i><sup>2</sup> + … = 1 − 2<i>u</i> + 3<i>u</i><sup>2</sup> + … (단, <i>u</i> = <i>h</i>/<i>R</i>)</div><div class=\"worked__math\">(c) |<i>h</i>/<i>R</i>| &lt; 1, 즉 0 ≤ <i>h</i> &lt; <i>R</i></div><div class=\"worked__math\">(d) <i>u</i> = 420/6371: 추정값 = 9.81(1 − 2<i>u</i> + 3<i>u</i><sup>2</sup>) ≈ <b>8.64</b> m s<sup>−2</sup> (8.6445…); 정확한 값 = 9.81/(1 + <i>u</i>)<sup>2</sup> = 8.6341…; 백분율 오차 ≈ <b>0.120 %</b></div>",
      markscheme: [
        // EN: A1: Divides numerator and denominator by <span class="chem">R^2</span> to obtain <span class="chem">g_0 / (1 + h/R)^2</span>. AG: <span class="chem">g = g_0(1 + h/R)^{-2}</span>; the given line itself earns no mark.
        "A1: 분자와 분모를 <span class=\"chem\">R^2</span>로 나누어 <span class=\"chem\">g_0 / (1 + h/R)^2</span>를 얻음. AG: <span class=\"chem\">g = g_0(1 + h/R)^{-2}</span>; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = -2</span> and <span class="chem">u = h/R</span>.
        "M1: <span class=\"chem\">n = -2</span>, <span class=\"chem\">u = h/R</span>로 확장된 이항전개를 사용함.",
        // EN: A1: Linear term <span class="chem">-2h/R</span>.
        "A1: 일차항 <span class=\"chem\">-2h/R</span>.",
        // EN: A1: Quadratic coefficient <span class="chem">(-2)(-3)/2! = 3</span>, giving <span class="chem">3h^2/R^2</span>. AG: the given approximation follows.
        "A1: 이차항의 계수 <span class=\"chem\">(-2)(-3)/2! = 3</span>로 <span class=\"chem\">3h^2/R^2</span>를 얻음. AG: 주어진 근사식이 나옴.",
        // EN: A1: <span class="chem">h &lt; R</span> (from <span class="chem">|h/R| &lt; 1</span>).
        "A1: <span class=\"chem\">h &lt; R</span> (<span class=\"chem\">|h/R| &lt; 1</span>로부터).",
        // EN: M1: Substitutes <span class="chem">h/R = 420/6371</span> into the approximation (and the exact formula).
        "M1: 근사식(및 정확한 식)에 <span class=\"chem\">h/R = 420/6371</span>을 대입함.",
        // EN: A1: Estimate 8.64 m s⁻² (8.6445…).
        "A1: 추정값 8.64 m s⁻² (8.6445…).",
        // EN: A1: Percentage error 0.120 % (exact value 8.6341…).
        "A1: 백분율 오차 0.120 % (정확한 값 8.6341…).",
      ],
    },

    // ── t1-3-q031 · numeric · challenge · AHL · AHL 1.10, 1.11 · 6 marks
    "t1-3-q031": {
      // EN: <p>Let <span class="chem">f(x) = 3 / ((1 - x)(1 + 2x))</span>. A student writes <span class="chem">f(x)</span> in partial fractions, expands each one, and keeps only the terms up to <span class="chem">x^2</span>, obtaining a quadratic <span class="chem">p(x)</span>. She accepts the replacement of <span class="chem">f</span> by <span class="chem">p</span> wherever <span class="chem">|f(x) - p(x)| &lt; 0.02</span>.</p><p>Find the greatest value of <span class="chem">c</span> such that the replacement is accepted for all <span class="chem">0 &lt;= x &lt; c</span>. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = 3 / ((1 - x)(1 + 2x))</span>이라 해요. 한 학생이 <span class=\"chem\">f(x)</span>를 부분분수로 분해하고 각각을 전개한 뒤 <span class=\"chem\">x^2</span> 항까지만 남겨 이차식 <span class=\"chem\">p(x)</span>를 얻었어요. 그녀는 <span class=\"chem\">|f(x) - p(x)| &lt; 0.02</span>인 곳에서는 <span class=\"chem\">f</span>를 <span class=\"chem\">p</span>으로 바꿔 쓰는 것을 받아들여요.</p><p>모든 <span class=\"chem\">0 &lt;= x &lt; c</span>에 대해 이렇게 바꿔 쓰는 것이 허용되는 <span class=\"chem\">c</span>의 최댓값을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: two jobs. First build <span class="chem">p(x)</span> by partial fractions and extended binomials. Then solve <span class="chem">|f(x) - p(x)| = 0.02</span> on the GDC for the first positive solution (inside the validity interval).
        "해석: 할 일은 두 가지예요. 먼저 부분분수와 확장된 이항전개로 <span class=\"chem\">p(x)</span>을 만드세요. 그런 다음 GDC로 <span class=\"chem\">|f(x) - p(x)| = 0.02</span>를 풀어 (유효 구간 안에서) 첫 번째 양의 해를 구하세요.",
        // EN: Partial fractions: <span class="chem">f(x) = 1/(1 - x) + 2/(1 + 2x)</span>.
        "부분분수: <span class=\"chem\">f(x) = 1/(1 - x) + 2/(1 + 2x)</span>.",
        // EN: Expanding: <span class="chem">p(x) = (1 + x + x^2) + 2(1 - 2x + 4x^2) = 3 - 3x + 9x^2</span>, valid for <span class="chem">|x| &lt; 1/2</span>.
        "전개하면: <span class=\"chem\">p(x) = (1 + x + x^2) + 2(1 - 2x + 4x^2) = 3 - 3x + 9x^2</span> (<span class=\"chem\">|x| &lt; 1/2</span>에서 유효).",
        // EN: Graph <span class="chem">y = |f(x) - p(x)|</span> and <span class="chem">y = 0.02</span> on <span class="chem">0 &lt;= x &lt; 0.5</span>.
        "<span class=\"chem\">0 &lt;= x &lt; 0.5</span>에서 <span class=\"chem\">y = |f(x) - p(x)|</span>과 <span class=\"chem\">y = 0.02</span>의 그래프를 그리세요.",
      ],
      // EN: <p><b>Decode:</b> make <i>p</i> from partial fractions, then find where the error first reaches 0.02.</p><div class="worked__math">3 ≡ <i>A</i>(1 + 2<i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 1; <i>x</i> = −<span class="frac"><span>1</span><span>2</span></span> ⇒ <i>B</i> = 2</div><div class="worked__math"><i>p</i>(<i>x</i>) = 3 − 3<i>x</i> + 9<i>x</i><sup>2</sup> (series valid for |<i>x</i>| &lt; <span class="frac"><span>1</span><span>2</span></span>)</div><div class="worked__math">The error |<i>f</i>(<i>x</i>) − <i>p</i>(<i>x</i>)| increases from 0 on 0 ≤ <i>x</i> &lt; 0.5; GDC: it equals 0.02 at <i>x</i> = 0.11928…</div><div class="worked__math"><i>c</i> ≈ <b>0.119</b></div>
      solution: "<p><b>해석:</b> 부분분수로 <i>p</i>를 만든 뒤, 오차가 처음으로 0.02에 도달하는 곳을 구해요.</p><div class=\"worked__math\">3 ≡ <i>A</i>(1 + 2<i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 1; <i>x</i> = −<span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <i>B</i> = 2</div><div class=\"worked__math\"><i>p</i>(<i>x</i>) = 3 − 3<i>x</i> + 9<i>x</i><sup>2</sup> (급수는 |<i>x</i>| &lt; <span class=\"frac\"><span>1</span><span>2</span></span>에서 유효)</div><div class=\"worked__math\">오차 |<i>f</i>(<i>x</i>) − <i>p</i>(<i>x</i>)|는 0 ≤ <i>x</i> &lt; 0.5에서 0부터 증가함; GDC: <i>x</i> = 0.11928…에서 0.02가 됨</div><div class=\"worked__math\"><i>c</i> ≈ <b>0.119</b></div>",
    },

    // ── t1-3-q032 · numeric · challenge · AHL · AHL 1.11; SL 5.10, 5.11 · 6 marks
    "t1-3-q032": {
      // EN: <p>Let <span class="chem">f(x) = (x + 7) / ((x - 1)(x + 3))</span>, for <span class="chem">x &gt; 1</span>. The region enclosed by the graph of <span class="chem">f</span>, the <span class="chem">x</span>-axis and the lines <span class="chem">x = 2</span> and <span class="chem">x = k</span>, where <span class="chem">k &gt; 2</span>, has area 1.</p><p>Find the value of <span class="chem">k</span>. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = (x + 7) / ((x - 1)(x + 3))</span> (<span class=\"chem\">x &gt; 1</span>)이라 해요. <span class=\"chem\">f</span>의 그래프, <span class=\"chem\">x</span>축, 그리고 직선 <span class=\"chem\">x = 2</span>와 <span class=\"chem\">x = k</span>(단, <span class=\"chem\">k &gt; 2</span>)으로 둘러싸인 영역의 넓이는 1이에요.</p><p><span class=\"chem\">k</span>의 값을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: “area of the region” means <span class="chem">int_2^k f(x) dx = 1</span> (here <span class="chem">f(x) &gt; 0</span> for <span class="chem">x &gt; 1</span>). Partial fractions turn <span class="chem">f</span> into two logarithm integrals, giving an equation in <span class="chem">k</span>.
        "해석: \"영역의 넓이\"는 <span class=\"chem\">int_2^k f(x) dx = 1</span>을 뜻해요(여기서 <span class=\"chem\">x &gt; 1</span>이면 <span class=\"chem\">f(x) &gt; 0</span>). 부분분수로 <span class=\"chem\">f</span>를 두 로그 적분으로 바꾸면 <span class=\"chem\">k</span>에 대한 방정식이 나와요.",
        // EN: Partial fractions: <span class="chem">f(x) = 2/(x - 1) - 1/(x + 3)</span>.
        "부분분수: <span class=\"chem\">f(x) = 2/(x - 1) - 1/(x + 3)</span>.",
        // EN: So <span class="chem">2ln(k - 1) - ln(k + 3) + ln 5 = 1</span>. Solve this on your GDC (or solve <span class="chem">int_2^k f(x) dx = 1</span> numerically).
        "따라서 <span class=\"chem\">2ln(k - 1) - ln(k + 3) + ln 5 = 1</span>. 이를 GDC로 푸세요(또는 <span class=\"chem\">int_2^k f(x) dx = 1</span>를 수치적으로 푸세요).",
      ],
      // EN: <p><b>Decode:</b> area → definite integral; partial fractions make it integrable; GDC solves the resulting equation.</p><div class="worked__math"><i>x</i> + 7 ≡ <i>A</i>(<i>x</i> + 3) + <i>B</i>(<i>x</i> − 1): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −3 ⇒ <i>B</i> = −1</div><div class="worked__math">∫<sub>2</sub><sup><i>k</i></sup> <i>f</i>(<i>x</i>) d<i>x</i> = [2 ln(<i>x</i> − 1) − ln(<i>x</i> + 3)]<sub>2</sub><sup><i>k</i></sup> = 2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5</div><div class="worked__math">2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5 = 1 ⇒ (GDC) <i>k</i> = 2.7713… ≈ <b>2.77</b></div>
      solution: "<p><b>해석:</b> 넓이 → 정적분; 부분분수로 적분할 수 있게 만들고, 얻은 방정식은 GDC로 풀어요.</p><div class=\"worked__math\"><i>x</i> + 7 ≡ <i>A</i>(<i>x</i> + 3) + <i>B</i>(<i>x</i> − 1): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −3 ⇒ <i>B</i> = −1</div><div class=\"worked__math\">∫<sub>2</sub><sup><i>k</i></sup> <i>f</i>(<i>x</i>) d<i>x</i> = [2 ln(<i>x</i> − 1) − ln(<i>x</i> + 3)]<sub>2</sub><sup><i>k</i></sup> = 2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5</div><div class=\"worked__math\">2 ln(<i>k</i> − 1) − ln(<i>k</i> + 3) + ln 5 = 1 ⇒ (GDC) <i>k</i> = 2.7713… ≈ <b>2.77</b></div>",
    },

    // ── t1-3-q033 · numeric · exam · AHL · AHL 1.11 · 5 marks
    "t1-3-q033": {
      // EN: <p>The denominator of <span class="chem">f(x) = (2x + 1) / (x^2 - 4x + 1)</span> has two distinct real roots <span class="chem">alpha</span> and <span class="chem">beta</span>, where <span class="chem">alpha &gt; beta</span>. Given that <span class="chem">f(x) = A / (x - alpha) + B / (x - beta)</span>, find the value of <span class="chem">A</span>. Give your answer to 3 significant figures.</p>
      stem: "<p><span class=\"chem\">f(x) = (2x + 1) / (x^2 - 4x + 1)</span>의 분모는 서로 다른 두 실근 <span class=\"chem\">alpha</span>와 <span class=\"chem\">beta</span>을 가져요(단, <span class=\"chem\">alpha &gt; beta</span>). <span class=\"chem\">f(x) = A / (x - alpha) + B / (x - beta)</span>일 때, <span class=\"chem\">A</span>의 값을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: the method is the usual cover-up, but the roots are not integers. Find <span class="chem">alpha</span> and <span class="chem">beta</span> on the GDC first.
        "해석: 방법은 늘 쓰는 근 대입법(cover-up)이지만, 근이 정수가 아니에요. 먼저 GDC로 <span class=\"chem\">alpha</span>과 <span class=\"chem\">beta</span>를 구하세요.",
        // EN: GDC: <span class="chem">alpha ≈ 3.732</span>, <span class="chem">beta ≈ 0.2679</span>. Then <span class="chem">2x + 1 ≡ A(x - beta) + B(x - alpha)</span>.
        "GDC: <span class=\"chem\">alpha ≈ 3.732</span>, <span class=\"chem\">beta ≈ 0.2679</span>. 그다음 <span class=\"chem\">2x + 1 ≡ A(x - beta) + B(x - alpha)</span>.",
        // EN: Substitute <span class="chem">x = alpha</span>: <span class="chem">A = (2alpha + 1)/(alpha - beta)</span>.
        "<span class=\"chem\">x = alpha</span>을 대입하세요: <span class=\"chem\">A = (2alpha + 1)/(alpha - beta)</span>.",
      ],
      // EN: <div class="worked__math"><i>x</i><sup>2</sup> − 4<i>x</i> + 1 = 0 ⇒ α = 3.7320…, β = 0.26794… (α = 2 + √3, β = 2 − √3)</div><div class="worked__math">2<i>x</i> + 1 ≡ <i>A</i>(<i>x</i> − β) + <i>B</i>(<i>x</i> − α); <i>x</i> = α: <i>A</i> = <span class="frac"><span>2α + 1</span><span>α − β</span></span> = <span class="frac"><span>8.4641…</span><span>3.4641…</span></span> ≈ <b>2.44</b></div>
      solution: "<div class=\"worked__math\"><i>x</i><sup>2</sup> − 4<i>x</i> + 1 = 0 ⇒ α = 3.7320…, β = 0.26794… (α = 2 + √3, β = 2 − √3)</div><div class=\"worked__math\">2<i>x</i> + 1 ≡ <i>A</i>(<i>x</i> − β) + <i>B</i>(<i>x</i> − α); <i>x</i> = α: <i>A</i> = <span class=\"frac\"><span>2α + 1</span><span>α − β</span></span> = <span class=\"frac\"><span>8.4641…</span><span>3.4641…</span></span> ≈ <b>2.44</b></div>",
    },

    // ── t1-3-q034 · short · exam · AHL · AHL 1.10, 1.11 · 10 marks
    "t1-3-q034": {
      // EN: <p>Let <span class="chem">f(x) = (x + 5) / ((1 - x)(2 + x))</span>.</p><p>(a) Express <span class="chem">f(x)</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence find the expansion of <span class="chem">f(x)</span> in ascending powers of <span class="chem">x</span>, up to and including the term in <span class="chem">x^2</span>. <strong>[3 marks]</strong><br>(c) State the set of values of <span class="chem">x</span> for which the full expansion is valid. <strong>[1 mark]</strong><br>(d) Use your answer to (b) to estimate <span class="chem">f(0.1)</span>, and find the percentage error of this estimate. <strong>[3 marks]</strong></p>
      stem: "<p><span class=\"chem\">f(x) = (x + 5) / ((1 - x)(2 + x))</span>이라 해요.</p><p>(a) <span class=\"chem\">f(x)</span>를 부분분수로 나타내시오. <strong>[3 marks]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">f(x)</span>을 <span class=\"chem\">x</span>에 대한 오름차순으로 <span class=\"chem\">x^2</span> 항까지 전개하시오. <strong>[3 marks]</strong><br>(c) 전개 전체가 유효한 <span class=\"chem\">x</span>의 값의 집합을 답하시오 (State). <strong>[1 mark]</strong><br>(d) (b)의 답을 이용하여 <span class=\"chem\">f(0.1)</span>의 값을 추정하고, 이 추정값의 백분율 오차를 구하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Use the roots <span class="chem">x = 1</span> and <span class="chem">x = -2</span> to find the numerators.
        "근 <span class=\"chem\">x = 1</span>과 <span class=\"chem\">x = -2</span>를 이용해 분자를 구하세요.",
        // EN: Before expanding <span class="chem">1/(2 + x)</span>, take out the factor <span class="chem">2^{-1}</span>.
        "<span class=\"chem\">1/(2 + x)</span>을 전개하기 전에 인수 <span class=\"chem\">2^{-1}</span>를 묶어 내세요.",
        // EN: The whole series is valid only where both parts converge.
        "급수 전체는 두 부분이 모두 수렴하는 곳에서만 유효해요.",
      ],
      // EN: <div class="worked__math">(a) 2/(1 − <i>x</i>) + 1/(2 + <i>x</i>) (b) 5/2 + (7/4)<i>x</i> + (17/8)<i>x</i><sup>2</sup> (c) |<i>x</i>| &lt; 1 (d) 2.69625, ≈ 0.0801 %</div>
      solution: "<div class=\"worked__math\">(a) 2/(1 − <i>x</i>) + 1/(2 + <i>x</i>) (b) 5/2 + (7/4)<i>x</i> + (17/8)<i>x</i><sup>2</sup> (c) |<i>x</i>| &lt; 1 (d) 2.69625, ≈ 0.0801 %</div>",
      // EN: <div class="worked__math">(a) <i>x</i> + 5 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 1; <i>f</i>(<i>x</i>) = <span class="frac"><span>2</span><span>1 − <i>x</i></span></span> + <span class="frac"><span>1</span><span>2 + <i>x</i></span></span></div><div class="worked__math">(b) 2(1 + <i>x</i> + <i>x</i><sup>2</sup>) + <span class="frac"><span>1</span><span>2</span></span>(1 − <span class="frac"><span><i>x</i></span><span>2</span></span> + <span class="frac"><span><i>x</i><sup>2</sup></span><span>4</span></span>) = <b><span class="frac"><span>5</span><span>2</span></span> + <span class="frac"><span>7</span><span>4</span></span><i>x</i> + <span class="frac"><span>17</span><span>8</span></span><i>x</i><sup>2</sup></b></div><div class="worked__math">(c) |<i>x</i>| &lt; 1 (intersection of |<i>x</i>| &lt; 1 and |<i>x</i>| &lt; 2)</div><div class="worked__math">(d) estimate = 2.5 + 0.175 + 0.02125 = <b>2.69625</b>; exact <i>f</i>(0.1) = 5.1/1.89 = 2.69841…; percentage error ≈ <b>0.0801 %</b></div>
      answer: "<div class=\"worked__math\">(a) <i>x</i> + 5 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 1; <i>f</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span>1 − <i>x</i></span></span> + <span class=\"frac\"><span>1</span><span>2 + <i>x</i></span></span></div><div class=\"worked__math\">(b) 2(1 + <i>x</i> + <i>x</i><sup>2</sup>) + <span class=\"frac\"><span>1</span><span>2</span></span>(1 − <span class=\"frac\"><span><i>x</i></span><span>2</span></span> + <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>4</span></span>) = <b><span class=\"frac\"><span>5</span><span>2</span></span> + <span class=\"frac\"><span>7</span><span>4</span></span><i>x</i> + <span class=\"frac\"><span>17</span><span>8</span></span><i>x</i><sup>2</sup></b></div><div class=\"worked__math\">(c) |<i>x</i>| &lt; 1 (|<i>x</i>| &lt; 1과 |<i>x</i>| &lt; 2의 교집합)</div><div class=\"worked__math\">(d) 추정값 = 2.5 + 0.175 + 0.02125 = <b>2.69625</b>; 정확한 값 <i>f</i>(0.1) = 5.1/1.89 = 2.69841…; 백분율 오차 ≈ <b>0.0801 %</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">x + 5 = A(2 + x) + B(1 - x)</span> (or cover-up).
        "M1: <span class=\"chem\">x + 5 = A(2 + x) + B(1 - x)</span>로 둠(또는 근 대입법(cover-up) 사용).",
        // EN: A1: <span class="chem">A = 2</span>.
        "A1: <span class=\"chem\">A = 2</span>.",
        // EN: A1: <span class="chem">B = 1</span>.
        "A1: <span class=\"chem\">B = 1</span>.",
        // EN: M1: Writes <span class="chem">1/(2 + x) = (1/2)(1 + x/2)^{-1}</span>.
        "M1: <span class=\"chem\">1/(2 + x) = (1/2)(1 + x/2)^{-1}</span>로 씀.",
        // EN: A1: Correct expansions <span class="chem">2(1 + x + x^2)</span> and <span class="chem">(1/2)(1 - x/2 + x^2/4)</span>.
        "A1: 올바른 전개 <span class=\"chem\">2(1 + x + x^2)</span>과 <span class=\"chem\">(1/2)(1 - x/2 + x^2/4)</span>.",
        // EN: A1: <span class="chem">5/2 + (7/4)x + (17/8)x^2</span>.
        "A1: <span class=\"chem\">5/2 + (7/4)x + (17/8)x^2</span>.",
        // EN: A1: <span class="chem">|x| &lt; 1</span>.
        "A1: <span class=\"chem\">|x| &lt; 1</span>.",
        // EN: A1: Estimate 2.69625.
        "A1: 추정값 2.69625.",
        // EN: M1: Uses the exact value from the GDC, 2.69841…, in |estimate − exact| ÷ exact × 100.
        "M1: |추정값 − 정확한 값| ÷ 정확한 값 × 100에 GDC로 구한 정확한 값 2.69841…을 사용함.",
        // EN: A1: 0.0801 %.
        "A1: 0.0801 %.",
      ],
    },

    // ── t1-3-q035 · numeric · challenge · AHL · AHL 1.10 · 5 marks
    "t1-3-q035": {
      // EN: <p>The <span class="chem">n</span> vertices of a regular polygon are marked on a circle. A designer wants to shade every triangle whose three corners are vertices of the polygon, each triangle in a different colour. Her software offers 10 000 colours.</p><p>Find the greatest value of <span class="chem">n</span> for which she has enough colours.</p>
      stem: "<p>정다각형의 꼭짓점 <span class=\"chem\">n</span>개가 원 위에 표시되어 있어요. 한 디자이너가 세 꼭짓점이 모두 이 다각형의 꼭짓점인 삼각형을 모두 서로 다른 색으로 칠하려고 해요. 그녀의 소프트웨어에는 10 000가지 색이 있어요.</p><p>색이 충분한 <span class=\"chem\">n</span>의 최댓값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: a triangle is fixed by choosing 3 of the <span class="chem">n</span> vertices (order irrelevant), so there are <span class="chem">nC3</span> triangles. “Enough colours” means <span class="chem">nC3 &lt;= 10000</span>; you want the GREATEST such <span class="chem">n</span>.
        "해석: 삼각형은 꼭짓점 <span class=\"chem\">n</span>개 중 3개를 고르면(순서 무관) 정해지므로 삼각형은 <span class=\"chem\">nC3</span>개예요. \"색이 충분하다\"는 <span class=\"chem\">nC3 &lt;= 10000</span>을 뜻하고, 이를 만족하는 <span class=\"chem\">n</span>의 \"최댓값\"을 구해야 해요.",
        // EN: No three vertices of a polygon on a circle are collinear, so every choice of 3 vertices really is a triangle.
        "원 위에 있는 다각형의 어느 세 꼭짓점도 한 직선 위에 있지 않으므로, 꼭짓점 3개를 고르는 모든 경우가 실제로 삼각형이 돼요.",
        // EN: Use the GDC table of <span class="chem">y = xC3</span>.
        "<span class=\"chem\">y = xC3</span>의 GDC 표를 이용하세요.",
      ],
      // EN: <p><b>Decode:</b> triangles = <sup><i>n</i></sup>C<sub>3</sub>; need <sup><i>n</i></sup>C<sub>3</sub> ≤ 10 000 and the largest such <i>n</i>.</p><div class="worked__math">GDC: <sup>40</sup>C<sub>3</sub> = 9880 ≤ 10 000, <sup>41</sup>C<sub>3</sub> = 10 660 &gt; 10 000</div><div class="worked__math">Greatest <i>n</i> = <b>40</b></div>
      solution: "<p><b>해석:</b> 삼각형의 수 = <sup><i>n</i></sup>C<sub>3</sub>; <sup><i>n</i></sup>C<sub>3</sub> ≤ 10 000을 만족하는 가장 큰 <i>n</i>이 필요해요.</p><div class=\"worked__math\">GDC: <sup>40</sup>C<sub>3</sub> = 9880 ≤ 10 000, <sup>41</sup>C<sub>3</sub> = 10 660 &gt; 10 000</div><div class=\"worked__math\">가장 큰 <i>n</i> = <b>40</b></div>",
    },

    // ── t1-3-q036 · numeric · exam · AHL · AHL 1.10; SL 4.5 · 4 marks
    "t1-3-q036": {
      // EN: <p>A teacher chooses 5 students at random from a class of 28 to present their projects. Find the probability that two friends, Ana and Ben, are both chosen. Give your answer to 3 significant figures.</p>
      stem: "<p>선생님이 28명인 반에서 학생 5명을 무작위로 뽑아 프로젝트를 발표하게 해요. 친구 사이인 Ana와 Ben이 둘 다 뽑힐 확률을 구하시오 (Find). 답은 유효숫자 3자리로 구하시오.</p>",
      hints: [
        // EN: Decode: every group of 5 is equally likely; count the groups that contain both Ana and Ben.
        "해석: 5명으로 이루어진 모든 모둠은 일어날 가능성이 같아요. Ana와 Ben을 모두 포함하는 모둠의 수를 세세요.",
        // EN: If Ana and Ben are both in, the other 3 come from the remaining 26 students: <span class="chem">26C3</span>.
        "Ana와 Ben이 모두 포함되면 나머지 3명은 남은 학생 26명 중에서 뽑아요: <span class=\"chem\">26C3</span>.",
        // EN: Divide by the total number of groups, <span class="chem">28C5</span>.
        "전체 모둠의 수 <span class=\"chem\">28C5</span>로 나누세요.",
      ],
      // EN: <div class="worked__math">P = <span class="frac"><span><sup>26</sup>C<sub>3</sub></span><span><sup>28</sup>C<sub>5</sub></span></span> = <span class="frac"><span>2600</span><span>98 280</span></span> ≈ <b>0.0265</b></div>
      solution: "<div class=\"worked__math\">P = <span class=\"frac\"><span><sup>26</sup>C<sub>3</sub></span><span><sup>28</sup>C<sub>5</sub></span></span> = <span class=\"frac\"><span>2600</span><span>98 280</span></span> ≈ <b>0.0265</b></div>",
    },

    // ── t1-3-q037 · short · exam · AHL · AHL 1.10 · 6 marks
    "t1-3-q037": {
      // EN: <p>In the expansion of <span class="chem">(1 + ax)^{1/3}</span> in ascending powers of <span class="chem">x</span>, where <span class="chem">a &gt; 0</span>, the coefficient of <span class="chem">x</span> plus the coefficient of <span class="chem">x^3</span> equals 2.</p><p>(a) Show that <span class="chem">5a^3 + 27a - 162 = 0</span>. <strong>[3 marks]</strong><br>(b) Hence find the value of <span class="chem">a</span>. <strong>[1 mark]</strong><br>(c) Find the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">(1 + ax)^{1/3}</span>(단, <span class=\"chem\">a &gt; 0</span>)을 <span class=\"chem\">x</span>에 대한 오름차순으로 전개할 때, <span class=\"chem\">x</span>의 계수와 <span class=\"chem\">x^3</span>의 계수의 합은 2예요.</p><p>(a) <span class=\"chem\">5a^3 + 27a - 162 = 0</span>임을 보이시오 (Show that). <strong>[3 marks]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">a</span>의 값을 구하시오. <strong>[1 mark]</strong><br>(c) 전개가 유효한 <span class=\"chem\">x</span>의 값의 집합을 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Use <span class="chem">n = 1/3</span> and <span class="chem">u = ax</span>; the <span class="chem">x^3</span> term is <span class="chem">(n(n - 1)(n - 2)/3!)(ax)^3</span>.
        "<span class=\"chem\">n = 1/3</span>과 <span class=\"chem\">u = ax</span>를 사용하세요. <span class=\"chem\">x^3</span> 항은 <span class=\"chem\">(n(n - 1)(n - 2)/3!)(ax)^3</span>예요.",
        // EN: The cubic in (b) has no rational root: solve it with your GDC polynomial solver.
        "(b)의 삼차방정식은 유리수 근이 없어요. GDC의 다항식 풀이 기능으로 푸세요.",
        // EN: For (c) use <span class="chem">|ax| &lt; 1</span> with your value of <span class="chem">a</span>.
        "(c)에서는 구한 <span class=\"chem\">a</span>의 값과 함께 <span class=\"chem\">|ax| &lt; 1</span>을 사용하세요.",
      ],
      // EN: <div class="worked__math">(a) <i>a</i>/3 + 5<i>a</i><sup>3</sup>/81 = 2 ⇒ 5<i>a</i><sup>3</sup> + 27<i>a</i> − 162 = 0 (b) <i>a</i> ≈ 2.63 (c) |<i>x</i>| &lt; 0.380</div>
      solution: "<div class=\"worked__math\">(a) <i>a</i>/3 + 5<i>a</i><sup>3</sup>/81 = 2 ⇒ 5<i>a</i><sup>3</sup> + 27<i>a</i> − 162 = 0 (b) <i>a</i> ≈ 2.63 (c) |<i>x</i>| &lt; 0.380</div>",
      // EN: <div class="worked__math">(a) coefficient of <i>x</i>: <span class="frac"><span><i>a</i></span><span>3</span></span>; coefficient of <i>x</i><sup>3</sup>: <span class="frac"><span>(1/3)(−2/3)(−5/3)</span><span>3!</span></span><i>a</i><sup>3</sup> = <span class="frac"><span>5<i>a</i><sup>3</sup></span><span>81</span></span>; <span class="frac"><span><i>a</i></span><span>3</span></span> + <span class="frac"><span>5<i>a</i><sup>3</sup></span><span>81</span></span> = 2 ⇒ 27<i>a</i> + 5<i>a</i><sup>3</sup> = 162</div><div class="worked__math">(b) GDC: <b><i>a</i> = 2.63</b> (2.6302…)</div><div class="worked__math">(c) |<i>ax</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; 0.380</b> (1/<i>a</i> = 0.38019…)</div>
      answer: "<div class=\"worked__math\">(a) <i>x</i>의 계수: <span class=\"frac\"><span><i>a</i></span><span>3</span></span>; <i>x</i><sup>3</sup>의 계수: <span class=\"frac\"><span>(1/3)(−2/3)(−5/3)</span><span>3!</span></span><i>a</i><sup>3</sup> = <span class=\"frac\"><span>5<i>a</i><sup>3</sup></span><span>81</span></span>; <span class=\"frac\"><span><i>a</i></span><span>3</span></span> + <span class=\"frac\"><span>5<i>a</i><sup>3</sup></span><span>81</span></span> = 2 ⇒ 27<i>a</i> + 5<i>a</i><sup>3</sup> = 162</div><div class=\"worked__math\">(b) GDC: <b><i>a</i> = 2.63</b> (2.6302…)</div><div class=\"worked__math\">(c) |<i>ax</i>| &lt; 1 ⇔ <b>|<i>x</i>| &lt; 0.380</b> (1/<i>a</i> = 0.38019…)</div>",
      markscheme: [
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = 1/3</span> and <span class="chem">u = ax</span>, including <span class="chem">n(n - 1)(n - 2)/3!</span> for the <span class="chem">x^3</span> term.
        "M1: <span class=\"chem\">n = 1/3</span>, <span class=\"chem\">u = ax</span>로 확장된 이항전개를 사용하고, <span class=\"chem\">x^3</span> 항에 <span class=\"chem\">n(n - 1)(n - 2)/3!</span>을 포함함.",
        // EN: A1: Coefficient of <span class="chem">x</span> is <span class="chem">a/3</span>.
        "A1: <span class=\"chem\">x</span>의 계수는 <span class=\"chem\">a/3</span>.",
        // EN: A1: Coefficient of <span class="chem">x^3</span> is <span class="chem">5a^3/81</span>, and multiplies <span class="chem">a/3 + 5a^3/81 = 2</span> by 81. AG: <span class="chem">5a^3 + 27a - 162 = 0</span>; the given line itself earns no mark.
        "A1: <span class=\"chem\">x^3</span>의 계수는 <span class=\"chem\">5a^3/81</span>이고, <span class=\"chem\">a/3 + 5a^3/81 = 2</span>의 양변에 81을 곱함. AG: <span class=\"chem\">5a^3 + 27a - 162 = 0</span>; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: A1: <span class="chem">a = 2.63</span> (the only real root).
        "A1: <span class=\"chem\">a = 2.63</span> (유일한 실근).",
        // EN: M1: Uses <span class="chem">|ax| &lt; 1</span>.
        "M1: <span class=\"chem\">|ax| &lt; 1</span>을 사용함.",
        // EN: A1: <span class="chem">|x| &lt; 0.380</span> (accept <span class="chem">|x| &lt; 1/a</span> with <span class="chem">1/a = 0.380</span>).
        "A1: <span class=\"chem\">|x| &lt; 0.380</span> (<span class=\"chem\">1/a = 0.380</span>으로 <span class=\"chem\">|x| &lt; 1/a</span>도 인정).",
      ],
    },

    // ── t1-3-q038 · short · challenge · AHL · AHL 1.10; SL 1.4 · 9 marks
    "t1-3-q038": {
      // EN: <p>A savings account pays an annual interest rate <span class="chem">r</span> (as a decimal), compounded once a year. A customer wants the equivalent monthly rate <span class="chem">m</span>: the rate that, compounded every month for 12 months, gives the same final amount.</p><p>(a) Show that <span class="chem">m = (1 + r)^{1/12} - 1</span>. <strong>[2 marks]</strong><br>(b) Use the extended binomial theorem to show that <span class="chem">m ≈ r/12 - 11r^2/288</span>. <strong>[3 marks]</strong><br>(c) State the condition on <span class="chem">r</span> for which the full series for <span class="chem">m</span> converges. <strong>[1 mark]</strong><br>(d) For an annual rate of 6%, find the exact value of the approximation in (b) and the value of <span class="chem">m</span> given by your GDC to 4 significant figures, and find the percentage error of the approximation, using the unrounded GDC value of <span class="chem">m</span>. <strong>[3 marks]</strong></p>
      stem: "<p>어느 예금 계좌는 연이율 <span class=\"chem\">r</span>(소수로 나타냄)을 해마다 한 번 복리로 적용해요. 한 고객은 이와 동등한 월이율 <span class=\"chem\">m</span>, 즉 매달 복리로 12개월 동안 적용했을 때 같은 최종 금액이 되는 이율을 알고 싶어 해요.</p><p>(a) <span class=\"chem\">m = (1 + r)^{1/12} - 1</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) 확장된 이항정리를 이용하여 <span class=\"chem\">m ≈ r/12 - 11r^2/288</span>임을 보이시오. <strong>[3 marks]</strong><br>(c) <span class=\"chem\">m</span>에 대한 급수 전체가 수렴하기 위한 <span class=\"chem\">r</span>에 대한 조건을 답하시오 (State). <strong>[1 mark]</strong><br>(d) 연이율이 6%일 때, (b)의 근삿값의 정확한 값과 GDC로 구한 <span class=\"chem\">m</span>의 값(유효숫자 4자리)을 구하고, 반올림하지 않은 GDC의 <span class=\"chem\">m</span> 값을 이용하여 근삿값의 백분율 오차를 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: “equivalent” means equal amounts after one year, so <span class="chem">(1 + m)^{12} = 1 + r</span>. Part (b) is then the extended binomial with the fractional index <span class="chem">1/12</span>.
        "해석: \"동등하다\"는 일 년 뒤의 금액이 같다는 뜻이므로 <span class=\"chem\">(1 + m)^{12} = 1 + r</span>이에요. (b)는 분수 지수 <span class=\"chem\">1/12</span>에 대한 확장된 이항전개예요.",
        // EN: In (b), <span class="chem">n = 1/12</span>, so <span class="chem">n - 1 = -11/12</span>.
        "(b)에서는 <span class=\"chem\">n = 1/12</span>이므로 <span class=\"chem\">n - 1 = -11/12</span>예요.",
        // EN: In (d) use <span class="chem">r = 0.06</span>, not 6.
        "(d)에서는 6이 아니라 <span class=\"chem\">r = 0.06</span>을 사용하세요.",
      ],
      // EN: <p><b>Decode:</b> “equivalent monthly rate” → (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i>; then a binomial series with <i>n</i> = 1/12.</p><div class="worked__math">(b) <i>m</i> ≈ <i>r</i>/12 − 11<i>r</i><sup>2</sup>/288 (c) |<i>r</i>| &lt; 1 (d) 0.0048625 vs 0.004868, error ≈ 0.104 %</div>
      solution: "<p><b>해석:</b> \"동등한 월이율\" → (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i>; 그런 다음 <i>n</i> = 1/12인 이항급수를 사용해요.</p><div class=\"worked__math\">(b) <i>m</i> ≈ <i>r</i>/12 − 11<i>r</i><sup>2</sup>/288 (c) |<i>r</i>| &lt; 1 (d) 0.0048625 대 0.004868, 오차 ≈ 0.104 %</div>",
      // EN: <div class="worked__math">(a) (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i> ⇒ <i>m</i> = (1 + <i>r</i>)<sup>1/12</sup> − 1</div><div class="worked__math">(b) (1 + <i>r</i>)<sup>1/12</sup> = 1 + <span class="frac"><span><i>r</i></span><span>12</span></span> + <span class="frac"><span>(1/12)(−11/12)</span><span>2</span></span><i>r</i><sup>2</sup> + … = 1 + <span class="frac"><span><i>r</i></span><span>12</span></span> − <span class="frac"><span>11<i>r</i><sup>2</sup></span><span>288</span></span> + …</div><div class="worked__math">(c) |<i>r</i>| &lt; 1 (for a positive rate, 0 &lt; <i>r</i> &lt; 1)</div><div class="worked__math">(d) <i>r</i> = 0.06: approximation = 0.005 − 0.0001375 = <b>0.0048625</b>; GDC: <i>m</i> = 1.06<sup>1/12</sup> − 1 = <b>0.004868</b> (0.0048675…); percentage error ≈ <b>0.104 %</b> (an underestimate)</div>
      answer: "<div class=\"worked__math\">(a) (1 + <i>m</i>)<sup>12</sup> = 1 + <i>r</i> ⇒ <i>m</i> = (1 + <i>r</i>)<sup>1/12</sup> − 1</div><div class=\"worked__math\">(b) (1 + <i>r</i>)<sup>1/12</sup> = 1 + <span class=\"frac\"><span><i>r</i></span><span>12</span></span> + <span class=\"frac\"><span>(1/12)(−11/12)</span><span>2</span></span><i>r</i><sup>2</sup> + … = 1 + <span class=\"frac\"><span><i>r</i></span><span>12</span></span> − <span class=\"frac\"><span>11<i>r</i><sup>2</sup></span><span>288</span></span> + …</div><div class=\"worked__math\">(c) |<i>r</i>| &lt; 1 (양의 이율이면 0 &lt; <i>r</i> &lt; 1)</div><div class=\"worked__math\">(d) <i>r</i> = 0.06: 근삿값 = 0.005 − 0.0001375 = <b>0.0048625</b>; GDC: <i>m</i> = 1.06<sup>1/12</sup> − 1 = <b>0.004868</b> (0.0048675…); 백분율 오차 ≈ <b>0.104 %</b> (과소 추정)</div>",
      markscheme: [
        // EN: M1: Equates the amounts: <span class="chem">P(1 + m)^{12} = P(1 + r)</span>.
        "M1: 두 금액을 같다고 놓음: <span class=\"chem\">P(1 + m)^{12} = P(1 + r)</span>.",
        // EN: A1: Takes the 12th root and rearranges. AG: <span class="chem">m = (1 + r)^{1/12} - 1</span>; the given line itself earns no mark.
        "A1: 12제곱근을 취하고 정리함. AG: <span class=\"chem\">m = (1 + r)^{1/12} - 1</span>; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = 1/12</span> and <span class="chem">u = r</span>.
        "M1: <span class=\"chem\">n = 1/12</span>, <span class=\"chem\">u = r</span>로 확장된 이항전개를 사용함.",
        // EN: A1: Linear term <span class="chem">r/12</span>.
        "A1: 일차항 <span class=\"chem\">r/12</span>.",
        // EN: A1: Quadratic coefficient <span class="chem">(1/12)(-11/12)/2 = -11/288</span>, and subtracts 1. AG: <span class="chem">m ≈ r/12 - 11r^2/288</span>.
        "A1: 이차항의 계수 <span class=\"chem\">(1/12)(-11/12)/2 = -11/288</span>이고, 1을 뺌. AG: <span class=\"chem\">m ≈ r/12 - 11r^2/288</span>.",
        // EN: A1: <span class="chem">|r| &lt; 1</span>.
        "A1: <span class=\"chem\">|r| &lt; 1</span>.",
        // EN: A1: Approximation 0.0048625.
        "A1: 근삿값 0.0048625.",
        // EN: A1: GDC value 0.004868 (0.0048675…).
        "A1: GDC 값 0.004868 (0.0048675…).",
        // EN: A1: Percentage error 0.104 %.
        "A1: 백분율 오차 0.104 %.",
      ],
    },

    // ── t1-3-q039 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q039": {
      // EN: <p>A hockey squad has 18 players. For a match, the coach names a captain, a vice-captain and 9 further players, whose roles are not distinguished. Find the number of different ways in which the coach can do this.</p>
      stem: "<p>어느 하키 팀에는 선수가 18명 있어요. 경기를 위해 코치는 주장, 부주장, 그리고 역할을 구분하지 않는 다른 선수 9명을 지명해요. 코치가 이렇게 지명하는 서로 다른 방법의 수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: two different kinds of choice. Captain and vice-captain are different roles (order matters); the other 9 are just a group (order does not matter).
        "해석: 종류가 다른 두 가지 선택이 있어요. 주장과 부주장은 서로 다른 역할이에요(순서가 중요함). 나머지 9명은 그냥 하나의 모임이에요(순서가 중요하지 않음).",
        // EN: Captain then vice-captain: <span class="chem">18P2</span> ways. Then choose 9 of the remaining 16 players.
        "주장, 그다음 부주장: <span class=\"chem\">18P2</span>가지. 그런 다음 남은 선수 16명 중 9명을 뽑아요.",
        // EN: Multiply: <span class="chem">18P2 × 16C9</span>.
        "곱하세요: <span class=\"chem\">18P2 × 16C9</span>.",
      ],
      // EN: <div class="worked__math"><sup>18</sup>P<sub>2</sub> × <sup>16</sup>C<sub>9</sub> = 306 × 11 440 = <b>3 500 640</b></div>
      solution: "<div class=\"worked__math\"><sup>18</sup>P<sub>2</sub> × <sup>16</sup>C<sub>9</sub> = 306 × 11 440 = <b>3 500 640</b></div>",
    },

    // ── t1-3-q040 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q040": {
      // EN: <p>A city has a rectangular grid of streets. A courier starts at junction P and must reach junction Q, which is 9 blocks east and 7 blocks north of P, by a shortest route (so she only ever travels east or north along the streets). Today the junction that is 4 blocks east and 3 blocks north of P is closed.</p><p>Find the number of shortest routes from P to Q that the courier can still use.</p>
      stem: "<p>어느 도시의 도로는 직사각형 격자 모양이에요. 배달원은 교차로 P에서 출발하여, P에서 동쪽으로 9블록, 북쪽으로 7블록 떨어진 교차로 Q까지 최단 경로로 가야 해요(따라서 도로를 따라 동쪽이나 북쪽으로만 이동해요). 오늘은 P에서 동쪽으로 4블록, 북쪽으로 3블록 떨어진 교차로가 폐쇄되었어요.</p><p>배달원이 여전히 이용할 수 있는 P에서 Q까지의 최단 경로의 수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: every shortest route is a string of 9 E-moves and 7 N-moves in some order, so choosing which 7 of the 16 moves are N fixes the route: <span class="chem">16C7</span> routes. Then remove the routes through the closed junction (complement).
        "해석: 모든 최단 경로는 E 이동 9번과 N 이동 7번을 어떤 순서로 늘어놓은 것이므로, 16번의 이동 중 어느 7번이 N인지 고르면 경로가 정해져요: <span class=\"chem\">16C7</span>가지 경로. 그런 다음 폐쇄된 교차로를 지나는 경로를 빼요(여사건).",
        // EN: Routes through the closed junction: (routes P → junction) × (routes junction → Q) = <span class="chem">7C3 × 9C4</span>.
        "폐쇄된 교차로를 지나는 경로: (P → 교차로의 경로 수) × (교차로 → Q의 경로 수) = <span class=\"chem\">7C3 × 9C4</span>.",
        // EN: Subtract from the total.
        "전체에서 빼세요.",
      ],
      // EN: <p><b>Decode:</b> a shortest route = an ordering of 9 E and 7 N moves = a choice of positions for the N moves.</p><div class="worked__math">All routes: <sup>16</sup>C<sub>7</sub> = 11 440</div><div class="worked__math">Through the closed junction (4 E, 3 N, then 5 E, 4 N): <sup>7</sup>C<sub>3</sub> × <sup>9</sup>C<sub>4</sub> = 35 × 126 = 4410</div><div class="worked__math">Available routes = 11 440 − 4410 = <b>7030</b></div>
      solution: "<p><b>해석:</b> 최단 경로 = E 이동 9번과 N 이동 7번의 배열 = N 이동의 위치 선택.</p><div class=\"worked__math\">모든 경로: <sup>16</sup>C<sub>7</sub> = 11 440</div><div class=\"worked__math\">폐쇄된 교차로를 지나는 경로(4 E, 3 N, 그다음 5 E, 4 N): <sup>7</sup>C<sub>3</sub> × <sup>9</sup>C<sub>4</sub> = 35 × 126 = 4410</div><div class=\"worked__math\">이용할 수 있는 경로 = 11 440 − 4410 = <b>7030</b></div>",
    },

    // ── t1-3-q041 · numeric · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q041": {
      // EN: <p>In a chess tournament, every player plays every other player exactly once. A total of 28 games are played. Find the number of players.</p>
      stem: "<p>어느 체스 대회에서 모든 선수는 다른 모든 선수와 정확히 한 번씩 대국해요. 모두 28번의 대국이 치러졌어요. 선수의 수를 구하시오 (Find).</p>",
      hints: [
        // EN: Each game is fixed by choosing 2 of the <span class="chem">n</span> players, so the number of games is <span class="chem">nC2 = n(n - 1)/2</span>.
        "각 대국은 선수 <span class=\"chem\">n</span>명 중 2명을 고르면 정해지므로 대국의 수는 <span class=\"chem\">nC2 = n(n - 1)/2</span>예요.",
        // EN: Solve <span class="chem">n(n - 1) = 56</span> for a positive integer <span class="chem">n</span>.
        "양의 정수 <span class=\"chem\">n</span>에 대해 <span class=\"chem\">n(n - 1) = 56</span>을 푸세요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 28 ⇒ <i>n</i><sup>2</sup> − <i>n</i> − 56 = 0 ⇒ (<i>n</i> − 8)(<i>n</i> + 7) = 0 ⇒ <b><i>n</i> = 8</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span> = 28 ⇒ <i>n</i><sup>2</sup> − <i>n</i> − 56 = 0 ⇒ (<i>n</i> − 8)(<i>n</i> + 7) = 0 ⇒ <b><i>n</i> = 8</b></div>",
    },

    // ── t1-3-q042 · numeric · foundation · AHL · AHL 1.10 · 2 marks
    "t1-3-q042": {
      // EN: <p>Find the coefficient of <span class="chem">x^2</span> in the expansion of <span class="chem">(1 - x)^{-2}</span> in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p><span class=\"chem\">(1 - x)^{-2}</span>를 <span class=\"chem\">x</span>에 대한 오름차순으로 전개할 때 <span class=\"chem\">x^2</span>의 계수를 구하시오 (Find).</p>",
      hints: [
        // EN: Use <span class="chem">(1 + u)^n = 1 + nu + (n(n - 1)/2!)u^2 + ...</span> with <span class="chem">n = -2</span> and <span class="chem">u = -x</span>.
        "<span class=\"chem\">n = -2</span>, <span class=\"chem\">u = -x</span>으로 <span class=\"chem\">(1 + u)^n = 1 + nu + (n(n - 1)/2!)u^2 + ...</span>을 사용하세요.",
        // EN: <span class="chem">(-x)^2 = x^2</span>, so the sign comes only from <span class="chem">n(n - 1)</span>.
        "<span class=\"chem\">(-x)^2 = x^2</span>이므로 부호는 <span class=\"chem\">n(n - 1)</span>에서만 결정돼요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−2)(−3)</span><span>2!</span></span>(−<i>x</i>)<sup>2</sup> = 3<i>x</i><sup>2</sup> ⇒ coefficient <b>3</b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−2)(−3)</span><span>2!</span></span>(−<i>x</i>)<sup>2</sup> = 3<i>x</i><sup>2</sup> ⇒ 계수 <b>3</b></div>",
    },

    // ── t1-3-q043 · numeric · foundation · AHL · AHL 1.11 · 3 marks
    "t1-3-q043": {
      // EN: <p>Given that <span class="chem">(x + 8) / ((x + 3)(x - 2)) = A / (x + 3) + B / (x - 2)</span>, find the value of <span class="chem">A</span>.</p>
      stem: "<p><span class=\"chem\">(x + 8) / ((x + 3)(x - 2)) = A / (x + 3) + B / (x - 2)</span>일 때, <span class=\"chem\">A</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Multiply through by <span class="chem">(x + 3)(x - 2)</span>: <span class="chem">x + 8 ≡ A(x - 2) + B(x + 3)</span>.
        "양변에 <span class=\"chem\">(x + 3)(x - 2)</span>을 곱하세요: <span class=\"chem\">x + 8 ≡ A(x - 2) + B(x + 3)</span>.",
        // EN: Choose the value of <span class="chem">x</span> that makes the <span class="chem">B</span> term zero.
        "<span class=\"chem\">B</span> 항이 사라지게 하는 <span class=\"chem\">x</span>의 값을 고르세요.",
      ],
      // EN: <div class="worked__math"><i>x</i> + 8 ≡ <i>A</i>(<i>x</i> − 2) + <i>B</i>(<i>x</i> + 3); <i>x</i> = −3: 5 = −5<i>A</i> ⇒ <b><i>A</i> = −1</b></div>
      solution: "<div class=\"worked__math\"><i>x</i> + 8 ≡ <i>A</i>(<i>x</i> − 2) + <i>B</i>(<i>x</i> + 3); <i>x</i> = −3: 5 = −5<i>A</i> ⇒ <b><i>A</i> = −1</b></div>",
    },

    // ── t1-3-q044 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q044": {
      // EN: <p>Four-digit numbers are formed from the digits 0, 1, 2, 3, 4, 5, 6, with no digit used more than once. A four-digit number cannot start with 0. Find how many of these numbers are odd.</p>
      stem: "<p>숫자 0, 1, 2, 3, 4, 5, 6을 사용하여 같은 숫자를 중복하지 않고 네 자리 수를 만들어요. 네 자리 수는 0으로 시작할 수 없어요. 이 수들 중 홀수는 몇 개인지 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: two restricted positions. The units digit must be odd (1, 3 or 5) and the thousands digit cannot be 0. Fill the most restricted slots first.
        "해석: 제한이 있는 자리가 두 개예요. 일의 자리는 홀수(1, 3, 5 중 하나)여야 하고 천의 자리는 0이 될 수 없어요. 제한이 가장 많은 자리부터 채우세요.",
        // EN: Units digit: 3 choices. Thousands digit: not 0 and not the units digit, so 5 choices.
        "일의 자리: 3가지. 천의 자리: 0도 아니고 일의 자리 숫자도 아니어야 하므로 5가지.",
        // EN: The remaining two slots are filled from the 5 digits left, then 4.
        "나머지 두 자리는 남은 숫자 5개 중에서, 그다음 4개 중에서 채워요.",
      ],
      // EN: <div class="worked__math">units (odd): 3; thousands (not 0, not the units digit): 5; hundreds: 5; tens: 4</div><div class="worked__math">3 × 5 × 5 × 4 = <b>300</b></div>
      solution: "<div class=\"worked__math\">일의 자리(홀수): 3; 천의 자리(0이 아니고 일의 자리 숫자도 아님): 5; 백의 자리: 5; 십의 자리: 4</div><div class=\"worked__math\">3 × 5 × 5 × 4 = <b>300</b></div>",
    },

    // ── t1-3-q045 · short · exam · AHL · AHL 1.10 · 6 marks
    "t1-3-q045": {
      // EN: <p>A team of 4 is chosen from 6 boys and 5 girls.</p><p>(a) Write down the number of different teams that can be chosen. <strong>[1 mark]</strong><br>(b) Find the number of teams that contain at least one girl. <strong>[2 marks]</strong><br>(c) The team must contain exactly 2 boys and 2 girls. One of the boys, Raj, and one of the girls, Sofia, cannot both be in the team. Find the number of possible teams. <strong>[3 marks]</strong></p>
      stem: "<p>남학생 6명과 여학생 5명 중에서 4명으로 이루어진 팀을 뽑아요.</p><p>(a) 뽑을 수 있는 서로 다른 팀의 수를 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) 여학생을 적어도 한 명 포함하는 팀의 수를 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 팀은 남학생 정확히 2명과 여학생 정확히 2명으로 이루어져야 해요. 남학생 중 한 명인 Raj와 여학생 중 한 명인 Sofia는 동시에 팀에 들어갈 수 없어요. 가능한 팀의 수를 구하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: “at least one girl” is best done by the complement (no girls at all).
        "해석: \"여학생이 적어도 한 명\"은 여사건(여학생이 한 명도 없음)으로 구하는 것이 가장 좋아요.",
        // EN: In (c), first count all 2-boy-2-girl teams, then subtract those that contain both Raj and Sofia (fix them, then choose 1 more boy and 1 more girl).
        "(c)에서는 먼저 \"남학생 2명·여학생 2명\"인 팀을 모두 센 다음, Raj와 Sofia를 둘 다 포함하는 팀(두 사람을 고정하고 남학생 1명과 여학생 1명을 더 뽑음)을 빼세요.",
      ],
      // EN: <div class="worked__math">(a) 330 (b) 330 − 15 = 315 (c) 150 − 20 = 130</div>
      solution: "<div class=\"worked__math\">(a) 330 (b) 330 − 15 = 315 (c) 150 − 20 = 130</div>",
      // EN: <div class="worked__math">(a) <sup>11</sup>C<sub>4</sub> = <b>330</b></div><div class="worked__math">(b) 330 − <sup>6</sup>C<sub>4</sub> = 330 − 15 = <b>315</b></div><div class="worked__math">(c) <sup>6</sup>C<sub>2</sub> × <sup>5</sup>C<sub>2</sub> = 15 × 10 = 150; teams with both Raj and Sofia: <sup>5</sup>C<sub>1</sub> × <sup>4</sup>C<sub>1</sub> = 20; 150 − 20 = <b>130</b></div>
      answer: "<div class=\"worked__math\">(a) <sup>11</sup>C<sub>4</sub> = <b>330</b></div><div class=\"worked__math\">(b) 330 − <sup>6</sup>C<sub>4</sub> = 330 − 15 = <b>315</b></div><div class=\"worked__math\">(c) <sup>6</sup>C<sub>2</sub> × <sup>5</sup>C<sub>2</sub> = 15 × 10 = 150; Raj와 Sofia를 둘 다 포함하는 팀: <sup>5</sup>C<sub>1</sub> × <sup>4</sup>C<sub>1</sub> = 20; 150 − 20 = <b>130</b></div>",
      markscheme: [
        // EN: A1: 330.
        "A1: 330.",
        // EN: M1: Uses the complement: total minus all-boy teams, <span class="chem">330 - 6C4</span>.
        "M1: 여사건을 이용함: 전체에서 남학생으로만 이루어진 팀을 뺌, <span class=\"chem\">330 - 6C4</span>.",
        // EN: A1: 315.
        "A1: 315.",
        // EN: M1: Counts 2 boys and 2 girls: <span class="chem">6C2 × 5C2 = 150</span>.
        "M1: 남학생 2명과 여학생 2명인 경우를 셈: <span class=\"chem\">6C2 × 5C2 = 150</span>.",
        // EN: M1: Counts teams containing both Raj and Sofia: <span class="chem">5C1 × 4C1 = 20</span>.
        "M1: Raj와 Sofia를 둘 다 포함하는 팀을 셈: <span class=\"chem\">5C1 × 4C1 = 20</span>.",
        // EN: A1: 130.
        "A1: 130.",
      ],
    },

    // ── t1-3-q046 · numeric · exam · AHL · AHL 1.10 · 5 marks
    "t1-3-q046": {
      // EN: <p>Seven different people, including Ali, Bea and Cal, stand in a row for a photograph. Ali and Bea must stand next to each other, and Cal must not stand at either end of the row. Find the number of possible arrangements.</p>
      stem: "<p>Ali, Bea, Cal을 포함한 서로 다른 일곱 사람이 사진을 찍기 위해 일렬로 서요. Ali와 Bea는 반드시 이웃해야 하고, Cal은 줄의 양 끝 어디에도 서면 안 돼요. 가능한 배열의 수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: “next to each other” → glue Ali and Bea into one block; “not at either end” → count the arrangements with Cal at an end and subtract (complement).
        "해석: \"이웃한다\" → Ali와 Bea를 한 묶음으로 묶어요. \"양 끝 어디에도 서지 않는다\" → Cal이 끝에 서는 배열을 세어 빼요(여사건).",
        // EN: With the block there are 6 units: <span class="chem">6! × 2!</span> arrangements in total.
        "묶음을 포함하면 단위가 6개이므로 전체 배열은 <span class=\"chem\">6! × 2!</span>가지예요.",
        // EN: Cal at an end: 2 choices of end, then arrange the other 5 units (including the block) in <span class="chem">5! × 2!</span> ways.
        "Cal이 끝에 서는 경우: 끝을 고르는 방법이 2가지이고, 나머지 5개의 단위(묶음 포함)를 <span class=\"chem\">5! × 2!</span>가지로 배열해요.",
      ],
      // EN: <div class="worked__math">Ali and Bea together: 6! × 2! = 1440</div><div class="worked__math">…with Cal at an end: 2 × 5! × 2! = 480</div><div class="worked__math">1440 − 480 = <b>960</b></div>
      solution: "<div class=\"worked__math\">Ali와 Bea가 이웃함: 6! × 2! = 1440</div><div class=\"worked__math\">…그중 Cal이 끝에 섬: 2 × 5! × 2! = 480</div><div class=\"worked__math\">1440 − 480 = <b>960</b></div>",
    },

    // ── t1-3-q047 · numeric · exam · AHL · AHL 1.10 · 4 marks
    "t1-3-q047": {
      // EN: <p>Find the exact value of the coefficient of <span class="chem">x^3</span> in the expansion of <span class="chem">(1 + 3x)^{-1/3}</span> in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p><span class=\"chem\">(1 + 3x)^{-1/3}</span>를 <span class=\"chem\">x</span>에 대한 오름차순으로 전개할 때 <span class=\"chem\">x^3</span>의 계수의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: The <span class="chem">x^3</span> term is <span class="chem">(n(n - 1)(n - 2)/3!)u^3</span> with <span class="chem">n = -1/3</span> and <span class="chem">u = 3x</span>.
        "<span class=\"chem\">x^3</span> 항은 <span class=\"chem\">(n(n - 1)(n - 2)/3!)u^3</span>이고, <span class=\"chem\">n = -1/3</span>, <span class=\"chem\">u = 3x</span>예요.",
        // EN: <span class="chem">n - 1 = -4/3</span> and <span class="chem">n - 2 = -7/3</span>; three negative factors give a negative product.
        "<span class=\"chem\">n - 1 = -4/3</span>, <span class=\"chem\">n - 2 = -7/3</span>예요. 음수 인수가 세 개이므로 곱은 음수예요.",
      ],
      // EN: <div class="worked__math"><span class="frac"><span>(−1/3)(−4/3)(−7/3)</span><span>3!</span></span>(3<i>x</i>)<sup>3</sup> = <span class="frac"><span>−28/27</span><span>6</span></span> × 27<i>x</i><sup>3</sup> = −<span class="frac"><span>28</span><span>6</span></span><i>x</i><sup>3</sup></div><div class="worked__math">Coefficient = <b>−<span class="frac"><span>14</span><span>3</span></span></b></div>
      solution: "<div class=\"worked__math\"><span class=\"frac\"><span>(−1/3)(−4/3)(−7/3)</span><span>3!</span></span>(3<i>x</i>)<sup>3</sup> = <span class=\"frac\"><span>−28/27</span><span>6</span></span> × 27<i>x</i><sup>3</sup> = −<span class=\"frac\"><span>28</span><span>6</span></span><i>x</i><sup>3</sup></div><div class=\"worked__math\">계수 = <b>−<span class=\"frac\"><span>14</span><span>3</span></span></b></div>",
    },

    // ── t1-3-q048 · short · exam · AHL · AHL 1.10 · 7 marks
    "t1-3-q048": {
      // EN: <p>(a) Find the first three terms of the expansion of <span class="chem">(8 - 3x)^{1/3}</span> in ascending powers of <span class="chem">x</span>. <strong>[4 marks]</strong><br>(b) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(c) Hence find an approximation for the cube root of 7.97, giving your answer to 6 decimal places. <strong>[2 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">(8 - 3x)^{1/3}</span>을 <span class=\"chem\">x</span>에 대한 오름차순으로 전개할 때 처음 세 항을 구하시오 (Find). <strong>[4 marks]</strong><br>(b) 이 전개가 유효한 <span class=\"chem\">x</span>의 값의 집합을 답하시오 (State). <strong>[1 mark]</strong><br>(c) 이를 이용하여 (Hence) 7.97의 세제곱근의 근삿값을 구하고, 소수점 아래 6자리까지 나타내시오. <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Take out <span class="chem">8^{1/3}</span> first so the bracket starts with 1.
        "괄호 안이 1로 시작하도록 먼저 <span class=\"chem\">8^{1/3}</span>을 묶어 내세요.",
        // EN: For (c), solve <span class="chem">8 - 3x = 7.97</span> to find the value of <span class="chem">x</span> to substitute.
        "(c)에서는 <span class=\"chem\">8 - 3x = 7.97</span>을 풀어 대입할 <span class=\"chem\">x</span>의 값을 구하세요.",
      ],
      // EN: <div class="worked__math">(a) 2 − <i>x</i>/4 − <i>x</i><sup>2</sup>/32 (b) |<i>x</i>| &lt; 8/3 (c) <i>x</i> = 0.01 ⇒ 1.997497</div>
      solution: "<div class=\"worked__math\">(a) 2 − <i>x</i>/4 − <i>x</i><sup>2</sup>/32 (b) |<i>x</i>| &lt; 8/3 (c) <i>x</i> = 0.01 ⇒ 1.997497</div>",
      // EN: <div class="worked__math">(a) (8 − 3<i>x</i>)<sup>1/3</sup> = 2(1 − <span class="frac"><span>3<i>x</i></span><span>8</span></span>)<sup>1/3</sup> = 2[1 + <span class="frac"><span>1</span><span>3</span></span>(−<span class="frac"><span>3<i>x</i></span><span>8</span></span>) + <span class="frac"><span>(1/3)(−2/3)</span><span>2</span></span>(−<span class="frac"><span>3<i>x</i></span><span>8</span></span>)<sup>2</sup> + …] = <b>2 − <span class="frac"><span><i>x</i></span><span>4</span></span> − <span class="frac"><span><i>x</i><sup>2</sup></span><span>32</span></span></b> + …</div><div class="worked__math">(b) |3<i>x</i>/8| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class="frac"><span>8</span><span>3</span></span></b></div><div class="worked__math">(c) 8 − 3<i>x</i> = 7.97 ⇒ <i>x</i> = 0.01: 2 − 0.0025 − 0.000003125 = 1.997496875 ≈ <b>1.997497</b></div>
      answer: "<div class=\"worked__math\">(a) (8 − 3<i>x</i>)<sup>1/3</sup> = 2(1 − <span class=\"frac\"><span>3<i>x</i></span><span>8</span></span>)<sup>1/3</sup> = 2[1 + <span class=\"frac\"><span>1</span><span>3</span></span>(−<span class=\"frac\"><span>3<i>x</i></span><span>8</span></span>) + <span class=\"frac\"><span>(1/3)(−2/3)</span><span>2</span></span>(−<span class=\"frac\"><span>3<i>x</i></span><span>8</span></span>)<sup>2</sup> + …] = <b>2 − <span class=\"frac\"><span><i>x</i></span><span>4</span></span> − <span class=\"frac\"><span><i>x</i><sup>2</sup></span><span>32</span></span></b> + …</div><div class=\"worked__math\">(b) |3<i>x</i>/8| &lt; 1 ⇔ <b>|<i>x</i>| &lt; <span class=\"frac\"><span>8</span><span>3</span></span></b></div><div class=\"worked__math\">(c) 8 − 3<i>x</i> = 7.97 ⇒ <i>x</i> = 0.01: 2 − 0.0025 − 0.000003125 = 1.997496875 ≈ <b>1.997497</b></div>",
      markscheme: [
        // EN: M1: Takes out the factor <span class="chem">8^{1/3} = 2</span>.
        "M1: 인수 <span class=\"chem\">8^{1/3} = 2</span>을 묶어 냄.",
        // EN: M1: Uses <span class="chem">n = 1/3</span> with <span class="chem">u = -3x/8</span>.
        "M1: <span class=\"chem\">u = -3x/8</span>로 <span class=\"chem\">n = 1/3</span>을 사용함.",
        // EN: A1: <span class="chem">2 - x/4</span>.
        "A1: <span class=\"chem\">2 - x/4</span>.",
        // EN: A1: <span class="chem">- x^2/32</span>.
        "A1: <span class=\"chem\">- x^2/32</span>.",
        // EN: A1: <span class="chem">|x| &lt; 8/3</span>.
        "A1: <span class=\"chem\">|x| &lt; 8/3</span>.",
        // EN: M1: Uses <span class="chem">x = 0.01</span> (from <span class="chem">8 - 3x = 7.97</span>).
        "M1: <span class=\"chem\">x = 0.01</span>을 사용함(<span class=\"chem\">8 - 3x = 7.97</span>로부터).",
        // EN: A1: 1.997497.
        "A1: 1.997497.",
      ],
    },

    // ── t1-3-q049 · numeric · exam · AHL · AHL 1.10, 1.11 · 6 marks
    "t1-3-q049": {
      // EN: <p>By first expressing <span class="chem">6 / ((1 - x)(2 + x))</span> in partial fractions, find the exact value of the coefficient of <span class="chem">x^3</span> in its expansion in ascending powers of <span class="chem">x</span>.</p>
      stem: "<p>먼저 <span class=\"chem\">6 / ((1 - x)(2 + x))</span>을 부분분수로 나타낸 다음, 이를 <span class=\"chem\">x</span>에 대한 오름차순으로 전개할 때 <span class=\"chem\">x^3</span>의 계수의 정확한 값을 구하시오 (Find).</p>",
      hints: [
        // EN: <span class="chem">6 ≡ A(2 + x) + B(1 - x)</span>; substitute <span class="chem">x = 1</span> and <span class="chem">x = -2</span>.
        "<span class=\"chem\">6 ≡ A(2 + x) + B(1 - x)</span>; <span class=\"chem\">x = 1</span>와 <span class=\"chem\">x = -2</span>을 대입하세요.",
        // EN: You should get <span class="chem">2/(1 - x) + 2/(2 + x)</span>. Write <span class="chem">2/(2 + x) = (1 + x/2)^{-1}</span>.
        "<span class=\"chem\">2/(1 - x) + 2/(2 + x)</span>이 나와야 해요. <span class=\"chem\">2/(2 + x) = (1 + x/2)^{-1}</span>로 쓰세요.",
        // EN: The <span class="chem">x^3</span> coefficients are 2 from <span class="chem">2(1 - x)^{-1}</span> and <span class="chem">(-1/2)^3</span> from <span class="chem">(1 + x/2)^{-1}</span>.
        "<span class=\"chem\">x^3</span>의 계수는 <span class=\"chem\">2(1 - x)^{-1}</span>에서 나오는 2와 <span class=\"chem\">(1 + x/2)^{-1}</span>에서 나오는 <span class=\"chem\">(-1/2)^3</span>이에요.",
      ],
      // EN: <div class="worked__math">6 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 2</div><div class="worked__math"><span class="frac"><span>2</span><span>1 − <i>x</i></span></span> + <span class="frac"><span>2</span><span>2 + <i>x</i></span></span> = 2(1 − <i>x</i>)<sup>−1</sup> + (1 + <span class="frac"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup></div><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = 2 + (−<span class="frac"><span>1</span><span>2</span></span>)<sup>3</sup> = 2 − <span class="frac"><span>1</span><span>8</span></span> = <b><span class="frac"><span>15</span><span>8</span></span></b></div>
      solution: "<div class=\"worked__math\">6 ≡ <i>A</i>(2 + <i>x</i>) + <i>B</i>(1 − <i>x</i>): <i>x</i> = 1 ⇒ <i>A</i> = 2; <i>x</i> = −2 ⇒ <i>B</i> = 2</div><div class=\"worked__math\"><span class=\"frac\"><span>2</span><span>1 − <i>x</i></span></span> + <span class=\"frac\"><span>2</span><span>2 + <i>x</i></span></span> = 2(1 − <i>x</i>)<sup>−1</sup> + (1 + <span class=\"frac\"><span><i>x</i></span><span>2</span></span>)<sup>−1</sup></div><div class=\"worked__math\"><i>x</i><sup>3</sup>의 계수 = 2 + (−<span class=\"frac\"><span>1</span><span>2</span></span>)<sup>3</sup> = 2 − <span class=\"frac\"><span>1</span><span>8</span></span> = <b><span class=\"frac\"><span>15</span><span>8</span></span></b></div>",
    },

    // ── t1-3-q050 · short · exam · AHL · AHL 1.10, 1.11 · 7 marks
    "t1-3-q050": {
      // EN: <p>Let <span class="chem">g(x) = (5 - x) / ((1 + x)(1 - 2x))</span>.</p><p>(a) Express <span class="chem">g(x)</span> in partial fractions. <strong>[3 marks]</strong><br>(b) Hence show that the coefficient of <span class="chem">x^n</span> in the expansion of <span class="chem">g(x)</span> in ascending powers of <span class="chem">x</span> is <span class="chem">2(-1)^n + 3 × 2^n</span>. <strong>[2 marks]</strong><br>(c) State the set of values of <span class="chem">x</span> for which the expansion is valid. <strong>[1 mark]</strong><br>(d) Write down the coefficient of <span class="chem">x^5</span>. <strong>[1 mark]</strong></p>
      stem: "<p><span class=\"chem\">g(x) = (5 - x) / ((1 + x)(1 - 2x))</span>이라 해요.</p><p>(a) <span class=\"chem\">g(x)</span>를 부분분수로 나타내시오. <strong>[3 marks]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">g(x)</span>를 <span class=\"chem\">x</span>에 대한 오름차순으로 전개할 때 <span class=\"chem\">x^n</span>의 계수가 <span class=\"chem\">2(-1)^n + 3 × 2^n</span>임을 보이시오. <strong>[2 marks]</strong><br>(c) 이 전개가 유효한 <span class=\"chem\">x</span>의 값의 집합을 답하시오 (State). <strong>[1 mark]</strong><br>(d) <span class=\"chem\">x^5</span>의 계수를 쓰시오 (Write down). <strong>[1 mark]</strong></p>",
      hints: [
        // EN: Use <span class="chem">x = -1</span> and <span class="chem">x = 1/2</span> to find <span class="chem">A</span> and <span class="chem">B</span>.
        "<span class=\"chem\">x = -1</span>과 <span class=\"chem\">x = 1/2</span>를 이용해 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>를 구하세요.",
        // EN: <span class="chem">(1 + u)^{-1} = 1 - u + u^2 - u^3 + ...</span>, so the coefficient of <span class="chem">u^n</span> is <span class="chem">(-1)^n</span>.
        "<span class=\"chem\">(1 + u)^{-1} = 1 - u + u^2 - u^3 + ...</span>이므로 <span class=\"chem\">u^n</span>의 계수는 <span class=\"chem\">(-1)^n</span>이에요.",
        // EN: Validity needs both <span class="chem">|x| &lt; 1</span> and <span class="chem">|2x| &lt; 1</span>.
        "유효하려면 <span class=\"chem\">|x| &lt; 1</span>과 <span class=\"chem\">|2x| &lt; 1</span>가 모두 필요해요.",
      ],
      // EN: <div class="worked__math">(a) 2/(1 + <i>x</i>) + 3/(1 − 2<i>x</i>) (c) |<i>x</i>| &lt; 1/2 (d) 2(−1) + 3(32) = 94</div>
      solution: "<div class=\"worked__math\">(a) 2/(1 + <i>x</i>) + 3/(1 − 2<i>x</i>) (c) |<i>x</i>| &lt; 1/2 (d) 2(−1) + 3(32) = 94</div>",
      // EN: <div class="worked__math">(a) 5 − <i>x</i> ≡ <i>A</i>(1 − 2<i>x</i>) + <i>B</i>(1 + <i>x</i>): <i>x</i> = −1 ⇒ 6 = 3<i>A</i> ⇒ <i>A</i> = 2; <i>x</i> = <span class="frac"><span>1</span><span>2</span></span> ⇒ <span class="frac"><span>9</span><span>2</span></span> = <span class="frac"><span>3</span><span>2</span></span><i>B</i> ⇒ <i>B</i> = 3; <i>g</i>(<i>x</i>) = <span class="frac"><span>2</span><span>1 + <i>x</i></span></span> + <span class="frac"><span>3</span><span>1 − 2<i>x</i></span></span></div><div class="worked__math">(b) 2(1 + <i>x</i>)<sup>−1</sup> = 2∑(−1)<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>, 3(1 − 2<i>x</i>)<sup>−1</sup> = 3∑2<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>, so the coefficient is 2(−1)<sup><i>n</i></sup> + 3 × 2<sup><i>n</i></sup></div><div class="worked__math">(c) |<i>x</i>| &lt; <span class="frac"><span>1</span><span>2</span></span></div><div class="worked__math">(d) −2 + 96 = <b>94</b></div>
      answer: "<div class=\"worked__math\">(a) 5 − <i>x</i> ≡ <i>A</i>(1 − 2<i>x</i>) + <i>B</i>(1 + <i>x</i>): <i>x</i> = −1 ⇒ 6 = 3<i>A</i> ⇒ <i>A</i> = 2; <i>x</i> = <span class=\"frac\"><span>1</span><span>2</span></span> ⇒ <span class=\"frac\"><span>9</span><span>2</span></span> = <span class=\"frac\"><span>3</span><span>2</span></span><i>B</i> ⇒ <i>B</i> = 3; <i>g</i>(<i>x</i>) = <span class=\"frac\"><span>2</span><span>1 + <i>x</i></span></span> + <span class=\"frac\"><span>3</span><span>1 − 2<i>x</i></span></span></div><div class=\"worked__math\">(b) 2(1 + <i>x</i>)<sup>−1</sup> = 2∑(−1)<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>, 3(1 − 2<i>x</i>)<sup>−1</sup> = 3∑2<sup><i>n</i></sup><i>x</i><sup><i>n</i></sup>이므로 계수는 2(−1)<sup><i>n</i></sup> + 3 × 2<sup><i>n</i></sup></div><div class=\"worked__math\">(c) |<i>x</i>| &lt; <span class=\"frac\"><span>1</span><span>2</span></span></div><div class=\"worked__math\">(d) −2 + 96 = <b>94</b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">5 - x = A(1 - 2x) + B(1 + x)</span> (or cover-up).
        "M1: <span class=\"chem\">5 - x = A(1 - 2x) + B(1 + x)</span>로 둠(또는 근 대입법(cover-up) 사용).",
        // EN: A1: <span class="chem">A = 2</span>.
        "A1: <span class=\"chem\">A = 2</span>.",
        // EN: A1: <span class="chem">B = 3</span>.
        "A1: <span class=\"chem\">B = 3</span>.",
        // EN: M1: Writes the general terms <span class="chem">(1 + x)^{-1} = Σ(-1)^n x^n</span> and <span class="chem">(1 - 2x)^{-1} = Σ(2x)^n</span>.
        "M1: 일반항 <span class=\"chem\">(1 + x)^{-1} = Σ(-1)^n x^n</span>과 <span class=\"chem\">(1 - 2x)^{-1} = Σ(2x)^n</span>를 씀.",
        // EN: A1: Combines <span class="chem">2(-1)^n + 3(2^n)</span>. AG: the given coefficient; the given line itself earns no mark.
        "A1: 합쳐서 <span class=\"chem\">2(-1)^n + 3(2^n)</span>. AG: 주어진 계수; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: A1: <span class="chem">|x| &lt; 1/2</span>.
        "A1: <span class=\"chem\">|x| &lt; 1/2</span>.",
        // EN: A1: 94.
        "A1: 94.",
      ],
    },

    // ── t1-3-q051 · numeric · challenge · AHL · AHL 1.10 · 5 marks
    "t1-3-q051": {
      // EN: <p>A student packing for a revision camp may take exactly 5 of her 9 different revision books: 4 on mathematics, 3 on physics and 2 on chemistry. Her teacher insists that every subject is represented among the books she takes. How many different selections of books can she make?</p>
      stem: "<p>복습 캠프를 위해 짐을 싸는 한 학생은 서로 다른 복습용 책 9권(수학 4권, 물리 3권, 화학 2권) 중 정확히 5권을 가져갈 수 있어요. 선생님은 가져가는 책에 모든 과목이 포함되어야 한다고 강조해요. 책을 고르는 서로 다른 방법은 몇 가지인가요?</p>",
      hints: [
        // EN: Decode: an unordered selection of 5 from 9 with the hidden condition “at least one book from each subject”. Listing cases is slow; use the complement: total − (selections missing a subject).
        "해석: 9권 중 5권을 순서 없이 고르는데, \"과목마다 적어도 한 권\"이라는 숨은 조건이 있어요. 경우를 나열하면 오래 걸리니 여사건을 이용하세요: 전체 − (어떤 과목이 빠진 선택).",
        // EN: Total: <span class="chem">9C5</span>. With no mathematics book, all 5 come from the other 5 books; with no physics, from 6; with no chemistry, from 7.
        "전체: <span class=\"chem\">9C5</span>. 수학책이 없으면 5권 모두 나머지 5권에서, 물리책이 없으면 6권에서, 화학책이 없으면 7권에서 골라요.",
        // EN: A selection of 5 cannot miss two subjects at once (at most 4 books would be left), so nothing is subtracted twice.
        "5권을 고를 때 두 과목이 동시에 빠질 수는 없으므로(남는 책이 많아야 4권), 두 번 빼는 경우가 없어요.",
      ],
      // EN: <p><b>Decode:</b> “every subject represented” = complement of “some subject missing”.</p><div class="worked__math">Total: <sup>9</sup>C<sub>5</sub> = 126</div><div class="worked__math">No maths: <sup>5</sup>C<sub>5</sub> = 1; no physics: <sup>6</sup>C<sub>5</sub> = 6; no chemistry: <sup>7</sup>C<sub>5</sub> = 21</div><div class="worked__math">No selection misses two subjects (that leaves at most 4 books)</div><div class="worked__math">126 − (1 + 6 + 21) = <b>98</b></div>
      solution: "<p><b>해석:</b> \"모든 과목이 포함됨\" = \"어떤 과목이 빠짐\"의 여사건.</p><div class=\"worked__math\">전체: <sup>9</sup>C<sub>5</sub> = 126</div><div class=\"worked__math\">수학 없음: <sup>5</sup>C<sub>5</sub> = 1; 물리 없음: <sup>6</sup>C<sub>5</sub> = 6; 화학 없음: <sup>7</sup>C<sub>5</sub> = 21</div><div class=\"worked__math\">두 과목이 빠지는 선택은 없음(그러면 남는 책이 많아야 4권)</div><div class=\"worked__math\">126 − (1 + 6 + 21) = <b>98</b></div>",
    },

    // ── t1-3-q052 · short · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q052": {
      // EN: <p>Let <span class="chem">n</span> and <span class="chem">r</span> be integers with <span class="chem">1 &lt;= r &lt;= n</span>.</p><p>(a) Prove that <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = <sup><i>n</i></sup>P<sub><i>r</i></sub> + <i>r</i> × <sup><i>n</i></sup>P<sub><i>r</i>−1</sub>. <strong>[4 marks]</strong><br>(b) By considering arrangements of <span class="chem">r</span> objects chosen from <span class="chem">n + 1</span> different objects, one of which is labelled X, explain why this identity is true. <strong>[2 marks]</strong></p>
      stem: "<p><span class=\"chem\">n</span>과 <span class=\"chem\">r</span>는 <span class=\"chem\">1 &lt;= r &lt;= n</span>인 정수예요.</p><p>(a) <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = <sup><i>n</i></sup>P<sub><i>r</i></sub> + <i>r</i> × <sup><i>n</i></sup>P<sub><i>r</i>−1</sub>임을 증명하시오 (Prove). <strong>[4 marks]</strong><br>(b) X라고 표시된 하나를 포함한 서로 다른 <span class=\"chem\">n + 1</span>개의 대상 중에서 <span class=\"chem\">r</span>개를 골라 배열하는 경우를 생각하여, 이 항등식이 성립하는 이유를 설명하시오 (Explain). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is pure factorial algebra: write every term as a fraction of factorials and put them over one denominator. (b) asks for a counting argument: split the arrangements into two cases.
        "해석: (a)는 순수한 계승의 식 변형이에요. 각 항을 계승의 분수로 쓰고 통분하세요. (b)는 경우의 수를 이용한 논증을 요구해요. 배열을 두 가지 경우로 나누세요.",
        // EN: The common denominator is <span class="chem">(n - r + 1)!</span>, because <span class="chem">(n - r + 1)! = (n - r + 1) × (n - r)!</span>.
        "<span class=\"chem\">(n - r + 1)! = (n - r + 1) × (n - r)!</span>이므로 공통분모는 <span class=\"chem\">(n - r + 1)!</span>이에요.",
        // EN: In (b), the two cases are “X is not used” and “X is used”.
        "(b)에서 두 경우는 \"X를 사용하지 않음\"과 \"X를 사용함\"이에요.",
      ],
      // EN: <p><b>Decode:</b> “Prove” = algebra with factorials; “explain” = a two-case counting argument.</p><div class="worked__math">RHS = <span class="frac"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1 + <i>r</i>)</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = LHS</div>
      solution: "<p><b>해석:</b> \"증명\" = 계승을 이용한 식 변형; \"설명\" = 두 경우로 나눈 경우의 수 논증.</p><div class=\"worked__math\">우변 = <span class=\"frac\"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1 + <i>r</i>)</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class=\"frac\"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = 좌변</div>",
      // EN: <div class="worked__math">(a) RHS = <span class="frac"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i>)!</span></span> + <i>r</i> <span class="frac"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1) + <i>r</i> <i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class="frac"><span><i>n</i>!(<i>n</i> + 1)</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <span class="frac"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = LHS</div><div class="worked__math">(b) Arrangements without X: <sup><i>n</i></sup>P<sub><i>r</i></sub>. Arrangements with X: choose X’s position (<i>r</i> ways), then arrange <i>r</i> − 1 of the other <i>n</i> objects in the remaining places (<sup><i>n</i></sup>P<sub><i>r</i>−1</sub> ways). These two cases cover all <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> arrangements exactly once.</div>
      answer: "<div class=\"worked__math\">(a) 우변 = <span class=\"frac\"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i>)!</span></span> + <i>r</i> <span class=\"frac\"><span><i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class=\"frac\"><span><i>n</i>!(<i>n</i> − <i>r</i> + 1) + <i>r</i> <i>n</i>!</span><span>(<i>n</i> − <i>r</i> + 1)!</span></span> = <span class=\"frac\"><span><i>n</i>!(<i>n</i> + 1)</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <span class=\"frac\"><span>(<i>n</i> + 1)!</span><span>(<i>n</i> + 1 − <i>r</i>)!</span></span> = <sup><i>n</i>+1</sup>P<sub><i>r</i></sub> = 좌변</div><div class=\"worked__math\">(b) X가 없는 배열: <sup><i>n</i></sup>P<sub><i>r</i></sub>. X가 있는 배열: X의 위치를 고르고(<i>r</i>가지), 나머지 자리에 다른 <i>n</i>개의 대상 중 <i>r</i> − 1개를 배열함(<sup><i>n</i></sup>P<sub><i>r</i>−1</sub>가지). 이 두 경우는 <sup><i>n</i>+1</sup>P<sub><i>r</i></sub>가지 배열 전체를 정확히 한 번씩 셈.</div>",
      markscheme: [
        // EN: M1: Writes both terms on the right with factorials: <span class="chem">n!/(n - r)! + r × n!/(n - r + 1)!</span>.
        "M1: 우변의 두 항을 계승으로 씀: <span class=\"chem\">n!/(n - r)! + r × n!/(n - r + 1)!</span>.",
        // EN: M1: Uses the common denominator <span class="chem">(n - r + 1)!</span>, using <span class="chem">(n - r + 1)! = (n - r + 1)(n - r)!</span>.
        "M1: <span class=\"chem\">(n - r + 1)! = (n - r + 1)(n - r)!</span>를 이용하여 공통분모 <span class=\"chem\">(n - r + 1)!</span>로 통분함.",
        // EN: A1: Simplifies the numerator to <span class="chem">n!(n + 1)</span>.
        "A1: 분자를 <span class=\"chem\">n!(n + 1)</span>로 정리함.",
        // EN: A1: Writes <span class="chem">(n + 1)!/(n + 1 - r)!</span> and identifies it as the left-hand side. AG: the identity; the given line itself earns no mark.
        "A1: <span class=\"chem\">(n + 1)!/(n + 1 - r)!</span>로 쓰고 이것이 좌변임을 확인함. AG: 항등식; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: R1: Splits the arrangements into those that do not contain X, counted by <sup><i>n</i></sup>P<sub><i>r</i></sub>.
        "R1: 배열을 나누어, X를 포함하지 않는 배열의 수를 <sup><i>n</i></sup>P<sub><i>r</i></sub>로 셈.",
        // EN: R1: Explains that those containing X have <span class="chem">r</span> positions for X and <sup><i>n</i></sup>P<sub><i>r</i>−1</sub> ways to fill the rest.
        "R1: X를 포함하는 배열은 X의 위치가 <span class=\"chem\">r</span>가지이고 나머지를 채우는 방법이 <sup><i>n</i></sup>P<sub><i>r</i>−1</sub>가지임을 설명함.",
      ],
    },

    // ── t1-3-q053 · numeric · challenge · AHL · AHL 1.11 · 5 marks
    "t1-3-q053": {
      // EN: <p>A puzzle setter wants the expression <span class="chem">(ax + 7) / ((x - 1)(x + 2))</span>, where <span class="chem">a</span> is a constant, to split into partial fractions <span class="chem">A / (x - 1) + B / (x + 2)</span> whose two numerators are equal. Find the value of <span class="chem">a</span>.</p>
      stem: "<p>퍼즐 출제자는 식 <span class=\"chem\">(ax + 7) / ((x - 1)(x + 2))</span>(<span class=\"chem\">a</span>는 상수)이 두 분자가 서로 같은 부분분수 <span class=\"chem\">A / (x - 1) + B / (x + 2)</span>으로 분해되기를 원해요. <span class=\"chem\">a</span>의 값을 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: the unknown is <span class="chem">a</span>, not <span class="chem">A</span> or <span class="chem">B</span>. Find <span class="chem">A</span> and <span class="chem">B</span> in terms of <span class="chem">a</span>, then impose the hidden condition <span class="chem">A = B</span>.
        "해석: 미지수는 <span class=\"chem\">a</span>이고 <span class=\"chem\">A</span>나 <span class=\"chem\">B</span>이 아니에요. <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>를 <span class=\"chem\">a</span>에 대한 식으로 나타낸 뒤 숨은 조건 <span class=\"chem\">A = B</span>을 적용하세요.",
        // EN: <span class="chem">ax + 7 ≡ A(x + 2) + B(x - 1)</span>. Put <span class="chem">x = 1</span> and <span class="chem">x = -2</span>.
        "<span class=\"chem\">ax + 7 ≡ A(x + 2) + B(x - 1)</span>. <span class=\"chem\">x = 1</span>와 <span class=\"chem\">x = -2</span>을 대입하세요.",
        // EN: You should get <span class="chem">3A = a + 7</span> and <span class="chem">3B = 2a - 7</span>.
        "<span class=\"chem\">3A = a + 7</span>과 <span class=\"chem\">3B = 2a - 7</span>가 나와야 해요.",
      ],
      // EN: <p><b>Decode:</b> express <i>A</i> and <i>B</i> in terms of <i>a</i>, then set <i>A</i> = <i>B</i>.</p><div class="worked__math"><i>ax</i> + 7 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class="worked__math"><i>x</i> = 1: 3<i>A</i> = <i>a</i> + 7; <i>x</i> = −2: −3<i>B</i> = −2<i>a</i> + 7 ⇒ 3<i>B</i> = 2<i>a</i> − 7</div><div class="worked__math"><i>A</i> = <i>B</i> ⇒ <i>a</i> + 7 = 2<i>a</i> − 7 ⇒ <b><i>a</i> = 14</b> (then <i>A</i> = <i>B</i> = 7)</div>
      solution: "<p><b>해석:</b> <i>A</i>와 <i>B</i>를 <i>a</i>에 대한 식으로 나타낸 뒤 <i>A</i> = <i>B</i>로 놓아요.</p><div class=\"worked__math\"><i>ax</i> + 7 ≡ <i>A</i>(<i>x</i> + 2) + <i>B</i>(<i>x</i> − 1)</div><div class=\"worked__math\"><i>x</i> = 1: 3<i>A</i> = <i>a</i> + 7; <i>x</i> = −2: −3<i>B</i> = −2<i>a</i> + 7 ⇒ 3<i>B</i> = 2<i>a</i> − 7</div><div class=\"worked__math\"><i>A</i> = <i>B</i> ⇒ <i>a</i> + 7 = 2<i>a</i> − 7 ⇒ <b><i>a</i> = 14</b> (이때 <i>A</i> = <i>B</i> = 7)</div>",
    },

    // ── t1-3-q054 · numeric · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q054": {
      // EN: <p>When <span class="chem">(1 + ax)^n</span>, where <span class="chem">a</span> is a constant and <span class="chem">n</span> ∈ ℚ, <span class="chem">n != 0</span>, is expanded in ascending powers of <span class="chem">x</span>, the first three terms are <span class="chem">1 - 6x + 27x^2</span>. Find the coefficient of <span class="chem">x^3</span>.</p>
      stem: "<p><span class=\"chem\">(1 + ax)^n</span>(<span class=\"chem\">a</span>는 상수, <span class=\"chem\">n</span> ∈ ℚ, <span class=\"chem\">n != 0</span>)을 <span class=\"chem\">x</span>에 대한 오름차순으로 전개하면 처음 세 항은 <span class=\"chem\">1 - 6x + 27x^2</span>이에요. <span class=\"chem\">x^3</span>의 계수를 구하시오 (Find).</p>",
      hints: [
        // EN: Decode: there are two unknowns, <span class="chem">a</span> and <span class="chem">n</span>, and two pieces of information (the <span class="chem">x</span> and <span class="chem">x^2</span> coefficients). Find both, then build the <span class="chem">x^3</span> term.
        "해석: 미지수는 <span class=\"chem\">a</span>과 <span class=\"chem\">n</span> 두 개이고, 정보도 두 개(<span class=\"chem\">x</span>과 <span class=\"chem\">x^2</span>의 계수)예요. 둘 다 구한 뒤 <span class=\"chem\">x^3</span> 항을 만드세요.",
        // EN: <span class="chem">na = -6</span> and <span class="chem">n(n - 1)a^2 / 2 = 27</span>. Divide the second by the square of the first to remove <span class="chem">a</span>.
        "<span class=\"chem\">na = -6</span>, <span class=\"chem\">n(n - 1)a^2 / 2 = 27</span>. 두 번째 식을 첫 번째 식의 제곱으로 나누어 <span class=\"chem\">a</span>를 소거하세요.",
        // EN: <span class="chem">(n - 1)/n = 54/36</span> gives <span class="chem">n = -2</span>, so <span class="chem">a = 3</span>.
        "<span class=\"chem\">(n - 1)/n = 54/36</span>에서 <span class=\"chem\">n = -2</span>이므로 <span class=\"chem\">a = 3</span>이에요.",
      ],
      // EN: <p><b>Decode:</b> two equations for two unknowns (<i>n</i>, <i>a</i>), then a third coefficient.</p><div class="worked__math"><i>na</i> = −6, <span class="frac"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 27 ⇒ <i>n</i>(<i>n</i> − 1)<i>a</i><sup>2</sup> = 54</div><div class="worked__math">Divide by <i>n</i><sup>2</sup><i>a</i><sup>2</sup> = 36: <span class="frac"><span><i>n</i> − 1</span><span><i>n</i></span></span> = <span class="frac"><span>3</span><span>2</span></span> ⇒ <i>n</i> = −2, <i>a</i> = 3</div><div class="worked__math">Coefficient of <i>x</i><sup>3</sup> = <span class="frac"><span>(−2)(−3)(−4)</span><span>3!</span></span> × 3<sup>3</sup> = −4 × 27 = <b>−108</b></div>
      solution: "<p><b>해석:</b> 두 미지수(<i>n</i>, <i>a</i>)에 대한 두 방정식, 그다음 세 번째 계수.</p><div class=\"worked__math\"><i>na</i> = −6, <span class=\"frac\"><span><i>n</i>(<i>n</i> − 1)</span><span>2</span></span><i>a</i><sup>2</sup> = 27 ⇒ <i>n</i>(<i>n</i> − 1)<i>a</i><sup>2</sup> = 54</div><div class=\"worked__math\"><i>n</i><sup>2</sup><i>a</i><sup>2</sup> = 36으로 나눔: <span class=\"frac\"><span><i>n</i> − 1</span><span><i>n</i></span></span> = <span class=\"frac\"><span>3</span><span>2</span></span> ⇒ <i>n</i> = −2, <i>a</i> = 3</div><div class=\"worked__math\"><i>x</i><sup>3</sup>의 계수 = <span class=\"frac\"><span>(−2)(−3)(−4)</span><span>3!</span></span> × 3<sup>3</sup> = −4 × 27 = <b>−108</b></div>",
    },

    // ── t1-3-q055 · short · challenge · AHL · AHL 1.10 · 6 marks
    "t1-3-q055": {
      // EN: <p>(a) Show that <span class="chem">sqrt(2) = (7/5)(1 - 1/50)^{-1/2}</span>. <strong>[2 marks]</strong><br>(b) Hence, using the first three terms of the expansion of <span class="chem">(1 - x)^{-1/2}</span>, find an approximation for <span class="chem">sqrt(2)</span>, giving your answer to 5 decimal places. <strong>[4 marks]</strong></p>
      stem: "<p>(a) <span class=\"chem\">sqrt(2) = (7/5)(1 - 1/50)^{-1/2}</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) 이를 이용하여 (Hence) <span class=\"chem\">(1 - x)^{-1/2}</span>의 전개식의 처음 세 항을 사용해 <span class=\"chem\">sqrt(2)</span>의 근삿값을 구하고, 소수점 아래 5자리까지 나타내시오. <strong>[4 marks]</strong></p>",
      hints: [
        // EN: Decode: (a) is surd manipulation; (b) asks why the strange-looking 1/50 is used: it is small, so the series with <span class="chem">x = 1/50</span> converges fast and three terms are enough.
        "해석: (a)는 무리식의 변형이에요. (b)는 이상해 보이는 1/50을 쓰는 이유를 묻고 있어요. 이 수는 작아서 <span class=\"chem\">x = 1/50</span>인 급수가 빨리 수렴하므로 세 항이면 충분해요.",
        // EN: For (a), <span class="chem">(49/50)^{-1/2} = (50/49)^{1/2} = sqrt(50)/7</span>.
        "(a)에서 <span class=\"chem\">(49/50)^{-1/2} = (50/49)^{1/2} = sqrt(50)/7</span>.",
        // EN: For (b), <span class="chem">(1 - x)^{-1/2} = 1 + (-1/2)(-x) + ((-1/2)(-3/2)/2!)(-x)^2 + ...</span>
        "(b)에서 <span class=\"chem\">(1 - x)^{-1/2} = 1 + (-1/2)(-x) + ((-1/2)(-3/2)/2!)(-x)^2 + ...</span>",
      ],
      // EN: <p><b>Decode:</b> rewrite √2 as a constant times (1 + small number)<sup><i>n</i></sup>, then use a short series.</p><div class="worked__math">√2 = (7/5)(1 − 1/50)<sup>−1/2</sup> ≈ 1.4(1 + 0.01 + 0.00015) = 1.4 × 1.01015 = <b>1.41421</b></div>
      solution: "<p><b>해석:</b> √2를 상수 × (1 + 작은 수)<sup><i>n</i></sup> 꼴로 고쳐 쓴 뒤 짧은 급수를 사용해요.</p><div class=\"worked__math\">√2 = (7/5)(1 − 1/50)<sup>−1/2</sup> ≈ 1.4(1 + 0.01 + 0.00015) = 1.4 × 1.01015 = <b>1.41421</b></div>",
      // EN: <div class="worked__math">(a) (1 − <span class="frac"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = (<span class="frac"><span>49</span><span>50</span></span>)<sup>−1/2</sup> = √(<span class="frac"><span>50</span><span>49</span></span>) = <span class="frac"><span>5√2</span><span>7</span></span>, so <span class="frac"><span>7</span><span>5</span></span>(1 − <span class="frac"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = √2</div><div class="worked__math">(b) (1 − <i>x</i>)<sup>−1/2</sup> ≈ 1 + <span class="frac"><span>1</span><span>2</span></span><i>x</i> + <span class="frac"><span>3</span><span>8</span></span><i>x</i><sup>2</sup>; <i>x</i> = 0.02: 1 + 0.01 + 0.00015 = 1.01015; √2 ≈ 1.4 × 1.01015 = <b>1.41421</b></div>
      answer: "<div class=\"worked__math\">(a) (1 − <span class=\"frac\"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = (<span class=\"frac\"><span>49</span><span>50</span></span>)<sup>−1/2</sup> = √(<span class=\"frac\"><span>50</span><span>49</span></span>) = <span class=\"frac\"><span>5√2</span><span>7</span></span>이므로 <span class=\"frac\"><span>7</span><span>5</span></span>(1 − <span class=\"frac\"><span>1</span><span>50</span></span>)<sup>−1/2</sup> = √2</div><div class=\"worked__math\">(b) (1 − <i>x</i>)<sup>−1/2</sup> ≈ 1 + <span class=\"frac\"><span>1</span><span>2</span></span><i>x</i> + <span class=\"frac\"><span>3</span><span>8</span></span><i>x</i><sup>2</sup>; <i>x</i> = 0.02: 1 + 0.01 + 0.00015 = 1.01015; √2 ≈ 1.4 × 1.01015 = <b>1.41421</b></div>",
      markscheme: [
        // EN: M1: Writes <span class="chem">1 - 1/50 = 49/50</span> and <span class="chem">(49/50)^{-1/2} = sqrt(50)/7</span>.
        "M1: <span class=\"chem\">1 - 1/50 = 49/50</span>과 <span class=\"chem\">(49/50)^{-1/2} = sqrt(50)/7</span>를 씀.",
        // EN: A1: <span class="chem">sqrt(50) = 5sqrt(2)</span>, so <span class="chem">(7/5) × 5sqrt(2)/7 = sqrt(2)</span>. AG: the given result; the given line itself earns no mark.
        "A1: <span class=\"chem\">sqrt(50) = 5sqrt(2)</span>이므로 <span class=\"chem\">(7/5) × 5sqrt(2)/7 = sqrt(2)</span>. AG: 주어진 결과; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: M1: Uses <span class="chem">n = -1/2</span> with <span class="chem">u = -x</span>.
        "M1: <span class=\"chem\">u = -x</span>로 <span class=\"chem\">n = -1/2</span>을 사용함.",
        // EN: A1: <span class="chem">1 + x/2 + 3x^2/8</span>.
        "A1: <span class=\"chem\">1 + x/2 + 3x^2/8</span>.",
        // EN: M1: Substitutes <span class="chem">x = 1/50 = 0.02</span> and multiplies by <span class="chem">7/5</span>.
        "M1: <span class=\"chem\">x = 1/50 = 0.02</span>을 대입하고 <span class=\"chem\">7/5</span>를 곱함.",
        // EN: A1: 1.41421.
        "A1: 1.41421.",
      ],
    },

    // ── t1-3-q056 · short · exam · AHL · AHL 1.10 · 16 marks
    "t1-3-q056": {
      // EN: <p>This question investigates the coefficients in the expansion of <span class="chem">(1 - x)^{-k}</span>, where <span class="chem">k</span> is a positive integer and <span class="chem">|x| &lt; 1</span>.</p><p>(a) Write down the expansion of <span class="chem">(1 - x)^{-1}</span> up to and including the term in <span class="chem">x^4</span>. <strong>[1 mark]</strong><br>(b) Find the expansions of <span class="chem">(1 - x)^{-2}</span> and <span class="chem">(1 - x)^{-3}</span>, each up to and including the term in <span class="chem">x^4</span>. <strong>[4 marks]</strong><br>(c) By comparing your coefficients with the entries of Pascal’s triangle, conjecture an expression, in the form <sup><i>p</i></sup>C<sub><i>q</i></sub>, for the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-3}</span>. <strong>[2 marks]</strong><br>(d) Prove that the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-k}</span> is <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>. <strong>[4 marks]</strong><br>(e) Hence find the coefficient of <span class="chem">x^{10}</span> in <span class="chem">(1 - x)^{-4}</span>. <strong>[2 marks]</strong><br>(f) Use your GDC to find the least value of <span class="chem">r</span> for which the coefficient of <span class="chem">x^r</span> in <span class="chem">(1 - x)^{-4}</span> exceeds 10 000. <strong>[3 marks]</strong></p>
      stem: "<p>이 문제에서는 <span class=\"chem\">(1 - x)^{-k}</span>의 전개식의 계수를 탐구해요. 단, <span class=\"chem\">k</span>는 양의 정수이고 <span class=\"chem\">|x| &lt; 1</span>이에요.</p><p>(a) <span class=\"chem\">(1 - x)^{-1}</span>의 전개식을 <span class=\"chem\">x^4</span> 항까지 쓰시오 (Write down). <strong>[1 mark]</strong><br>(b) <span class=\"chem\">(1 - x)^{-2}</span>과 <span class=\"chem\">(1 - x)^{-3}</span>의 전개식을 각각 <span class=\"chem\">x^4</span> 항까지 구하시오 (Find). <strong>[4 marks]</strong><br>(c) 구한 계수를 파스칼의 삼각형의 수와 비교하여, <span class=\"chem\">(1 - x)^{-3}</span>에서 <span class=\"chem\">x^r</span>의 계수를 <sup><i>p</i></sup>C<sub><i>q</i></sub> 꼴의 식으로 추측하시오 (Conjecture). <strong>[2 marks]</strong><br>(d) <span class=\"chem\">(1 - x)^{-k}</span>에서 <span class=\"chem\">x^r</span>의 계수가 <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>임을 증명하시오 (Prove). <strong>[4 marks]</strong><br>(e) 이를 이용하여 (Hence) <span class=\"chem\">(1 - x)^{-4}</span>에서 <span class=\"chem\">x^{10}</span>의 계수를 구하시오. <strong>[2 marks]</strong><br>(f) GDC를 사용하여 <span class=\"chem\">(1 - x)^{-4}</span>에서 <span class=\"chem\">x^r</span>의 계수가 10 000을 넘는 <span class=\"chem\">r</span>의 최솟값을 구하시오 (Find). <strong>[3 marks]</strong></p>",
      hints: [
        // EN: In (b), write <span class="chem">(1 - x)^{-2}</span> as <span class="chem">(1 + u)^{-2}</span> with <span class="chem">u = -x</span>. Every term turns out positive.
        "(b)에서는 <span class=\"chem\">u = -x</span>으로 두고 <span class=\"chem\">(1 - x)^{-2}</span>을 <span class=\"chem\">(1 + u)^{-2}</span>로 쓰세요. 모든 항이 양수가 돼요.",
        // EN: In (c), the numbers 1, 3, 6, 10, 15 are the triangular numbers. Where do they sit in Pascal’s triangle?
        "(c)에서 수 1, 3, 6, 10, 15는 삼각수예요. 파스칼의 삼각형에서 어디에 있나요?",
        // EN: In (d), there are <span class="chem">r</span> negative factors in <span class="chem">(-k)(-k - 1)…</span> and another <span class="chem">(-1)^r</span> from <span class="chem">(-x)^r</span>.
        "(d)에서는 <span class=\"chem\">(-k)(-k - 1)…</span>에 음수 인수가 <span class=\"chem\">r</span>개 있고, <span class=\"chem\">(-x)^r</span>에서 <span class=\"chem\">(-1)^r</span>이 하나 더 나와요.",
        // EN: In (f), with <span class="chem">k = 4</span> the coefficient is <span class="chem">(r + 3)C3</span>. Tabulate it on your GDC.
        "(f)에서 <span class=\"chem\">k = 4</span>일 때 계수는 <span class=\"chem\">(r + 3)C3</span>예요. GDC로 표를 만드세요.",
      ],
      // EN: <div class="worked__math">(b) 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup> (c) <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (e) 286 (f) <i>r</i> = 38</div>
      solution: "<div class=\"worked__math\">(b) 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup> (c) <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (e) 286 (f) <i>r</i> = 38</div>",
      // EN: <div class="worked__math">(a) 1 + <i>x</i> + <i>x</i><sup>2</sup> + <i>x</i><sup>3</sup> + <i>x</i><sup>4</sup></div><div class="worked__math">(b) (1 − <i>x</i>)<sup>−2</sup> = 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; (1 − <i>x</i>)<sup>−3</sup> = 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup></div><div class="worked__math">(c) 1, 3, 6, 10, 15 are <sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>, …: coefficient of <i>x</i><sup><i>r</i></sup> = <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (= <sup><i>r</i>+2</sup>C<sub>2</sub>)</div><div class="worked__math">(d) coefficient = <span class="frac"><span>(−<i>k</i>)(−<i>k</i> − 1)…(−<i>k</i> − <i>r</i> + 1)</span><span><i>r</i>!</span></span>(−1)<sup><i>r</i></sup> = <span class="frac"><span><i>k</i>(<i>k</i> + 1)…(<i>k</i> + <i>r</i> − 1)</span><span><i>r</i>!</span></span> = <span class="frac"><span>(<i>k</i> + <i>r</i> − 1)!</span><span><i>r</i>!(<i>k</i> − 1)!</span></span> = <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub></div><div class="worked__math">(e) <sup>13</sup>C<sub>10</sub> = <b>286</b></div><div class="worked__math">(f) need <sup><i>r</i>+3</sup>C<sub>3</sub> &gt; 10 000: <sup>40</sup>C<sub>3</sub> = 9880, <sup>41</sup>C<sub>3</sub> = 10 660 ⇒ <i>r</i> + 3 = 41 ⇒ <b><i>r</i> = 38</b></div>
      answer: "<div class=\"worked__math\">(a) 1 + <i>x</i> + <i>x</i><sup>2</sup> + <i>x</i><sup>3</sup> + <i>x</i><sup>4</sup></div><div class=\"worked__math\">(b) (1 − <i>x</i>)<sup>−2</sup> = 1 + 2<i>x</i> + 3<i>x</i><sup>2</sup> + 4<i>x</i><sup>3</sup> + 5<i>x</i><sup>4</sup>; (1 − <i>x</i>)<sup>−3</sup> = 1 + 3<i>x</i> + 6<i>x</i><sup>2</sup> + 10<i>x</i><sup>3</sup> + 15<i>x</i><sup>4</sup></div><div class=\"worked__math\">(c) 1, 3, 6, 10, 15은 <sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>, …이므로 <i>x</i><sup><i>r</i></sup>의 계수 = <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (= <sup><i>r</i>+2</sup>C<sub>2</sub>)</div><div class=\"worked__math\">(d) 계수 = <span class=\"frac\"><span>(−<i>k</i>)(−<i>k</i> − 1)…(−<i>k</i> − <i>r</i> + 1)</span><span><i>r</i>!</span></span>(−1)<sup><i>r</i></sup> = <span class=\"frac\"><span><i>k</i>(<i>k</i> + 1)…(<i>k</i> + <i>r</i> − 1)</span><span><i>r</i>!</span></span> = <span class=\"frac\"><span>(<i>k</i> + <i>r</i> − 1)!</span><span><i>r</i>!(<i>k</i> − 1)!</span></span> = <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub></div><div class=\"worked__math\">(e) <sup>13</sup>C<sub>10</sub> = <b>286</b></div><div class=\"worked__math\">(f) 필요 조건: <sup><i>r</i>+3</sup>C<sub>3</sub> &gt; 10 000: <sup>40</sup>C<sub>3</sub> = 9880, <sup>41</sup>C<sub>3</sub> = 10 660 ⇒ <i>r</i> + 3 = 41 ⇒ <b><i>r</i> = 38</b></div>",
      markscheme: [
        // EN: A1: <span class="chem">1 + x + x^2 + x^3 + x^4</span>.
        "A1: <span class=\"chem\">1 + x + x^2 + x^3 + x^4</span>.",
        // EN: M1: Uses the extended binomial expansion with <span class="chem">n = -2</span> and <span class="chem">u = -x</span>.
        "M1: <span class=\"chem\">n = -2</span>, <span class=\"chem\">u = -x</span>로 확장된 이항전개를 사용함.",
        // EN: A1: <span class="chem">1 + 2x + 3x^2 + 4x^3 + 5x^4</span>.
        "A1: <span class=\"chem\">1 + 2x + 3x^2 + 4x^3 + 5x^4</span>.",
        // EN: M1: Uses <span class="chem">n = -3</span> and <span class="chem">u = -x</span>.
        "M1: <span class=\"chem\">n = -3</span>과 <span class=\"chem\">u = -x</span>를 사용함.",
        // EN: A1: <span class="chem">1 + 3x + 6x^2 + 10x^3 + 15x^4</span>.
        "A1: <span class=\"chem\">1 + 3x + 6x^2 + 10x^3 + 15x^4</span>.",
        // EN: R1: Recognises 1, 3, 6, 10, 15 as a diagonal of Pascal’s triangle (<sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>, …).
        "R1: 1, 3, 6, 10, 15가 파스칼의 삼각형의 한 대각선(<sup>2</sup>C<sub>0</sub>, <sup>3</sup>C<sub>1</sub>, <sup>4</sup>C<sub>2</sub>, …)임을 알아챔.",
        // EN: A1: Conjecture: coefficient of <span class="chem">x^r</span> is <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (or <sup><i>r</i>+2</sup>C<sub>2</sub>).
        "A1: 추측: <span class=\"chem\">x^r</span>의 계수는 <sup><i>r</i>+2</sup>C<sub><i>r</i></sub> (또는 <sup><i>r</i>+2</sup>C<sub>2</sub>).",
        // EN: M1: Writes the general term with <span class="chem">n = -k</span>: <span class="chem">((-k)(-k - 1)...(-k - r + 1)/r!)(-x)^r</span>.
        "M1: <span class=\"chem\">n = -k</span>로 일반항을 씀: <span class=\"chem\">((-k)(-k - 1)...(-k - r + 1)/r!)(-x)^r</span>.",
        // EN: A1: The <span class="chem">r</span> negative signs cancel with <span class="chem">(-1)^r</span>, giving <span class="chem">k(k + 1)...(k + r - 1)/r!</span>.
        "A1: <span class=\"chem\">r</span>개의 음의 부호가 <span class=\"chem\">(-1)^r</span>와 상쇄되어 <span class=\"chem\">k(k + 1)...(k + r - 1)/r!</span>을 얻음.",
        // EN: M1: Multiplies numerator and denominator by <span class="chem">(k - 1)!</span>.
        "M1: 분자와 분모에 <span class=\"chem\">(k - 1)!</span>을 곱함.",
        // EN: A1: Obtains <span class="chem">(k + r - 1)!/(r!(k - 1)!)</span>. AG: <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>; the given line itself earns no mark.
        "A1: <span class=\"chem\">(k + r - 1)!/(r!(k - 1)!)</span>을 얻음. AG: <sup><i>k</i>+<i>r</i>−1</sup>C<sub><i>r</i></sub>; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: M1: Uses <span class="chem">k = 4</span>, <span class="chem">r = 10</span>: <sup>13</sup>C<sub>10</sub>.
        "M1: <span class=\"chem\">k = 4</span>, <span class=\"chem\">r = 10</span>를 사용함: <sup>13</sup>C<sub>10</sub>.",
        // EN: A1: 286.
        "A1: 286.",
        // EN: M1: Sets up <sup><i>r</i>+3</sup>C<sub><i>r</i></sub> &gt; 10 000 (or <span class="chem">(r + 1)(r + 2)(r + 3)/6 &gt; 10000</span>).
        "M1: <sup><i>r</i>+3</sup>C<sub><i>r</i></sub> &gt; 10 000 (또는 <span class=\"chem\">(r + 1)(r + 2)(r + 3)/6 &gt; 10000</span>)으로 놓음.",
        // EN: A1: GDC values either side: 9880 at <span class="chem">r = 37</span> and 10 660 at <span class="chem">r = 38</span>.
        "A1: 경계 양쪽의 GDC 값: <span class=\"chem\">r = 37</span>에서 9880, <span class=\"chem\">r = 38</span>에서 10 660.",
        // EN: A1: <span class="chem">r = 38</span>.
        "A1: <span class=\"chem\">r = 38</span>.",
      ],
    },

    // ── t1-3-q057 · short · challenge · AHL · AHL 1.11; SL 1.2 · 15 marks
    "t1-3-q057": {
      // EN: <p>This question uses partial fractions to investigate sums of the form <span class="chem">S_n = Σ_{r=1}^n 1/(r(r + k))</span>, where <span class="chem">k</span> is a positive integer. Start with <span class="chem">k = 2</span>.</p><p>(a) Express <span class="chem">1/(r(r + 2))</span> in partial fractions. <strong>[2 marks]</strong><br>(b) Use your GDC to find <span class="chem">S_1</span>, <span class="chem">S_2</span>, <span class="chem">S_3</span> and <span class="chem">S_4</span> for <span class="chem">k = 2</span>, as fractions. <strong>[2 marks]</strong><br>(c) Show that, for <span class="chem">k = 2</span>, <span class="chem">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>. <strong>[4 marks]</strong><br>(d) Hence write down the value of <span class="chem">S_∞</span> for <span class="chem">k = 2</span>. <strong>[1 mark]</strong><br>(e) Find the least value of <span class="chem">n</span> for which <span class="chem">S_n</span> is within 0.001 of <span class="chem">S_∞</span>, for <span class="chem">k = 2</span>. <strong>[3 marks]</strong><br>(f) By considering the partial fractions of <span class="chem">1/(r(r + 3))</span>, find the exact value of <span class="chem">S_∞</span> for <span class="chem">k = 3</span>. <strong>[3 marks]</strong></p>
      stem: "<p>이 문제에서는 부분분수를 이용하여 <span class=\"chem\">S_n = Σ_{r=1}^n 1/(r(r + k))</span> 꼴의 합을 탐구해요. 단, <span class=\"chem\">k</span>는 양의 정수예요. 먼저 <span class=\"chem\">k = 2</span>인 경우부터 시작해요.</p><p>(a) <span class=\"chem\">1/(r(r + 2))</span>를 부분분수로 나타내시오. <strong>[2 marks]</strong><br>(b) <span class=\"chem\">k = 2</span>일 때, GDC를 사용하여 <span class=\"chem\">S_1</span>, <span class=\"chem\">S_2</span>, <span class=\"chem\">S_3</span>, <span class=\"chem\">S_4</span>을 분수로 구하시오 (Find). <strong>[2 marks]</strong><br>(c) <span class=\"chem\">k = 2</span>일 때, <span class=\"chem\">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>임을 보이시오 (Show that). <strong>[4 marks]</strong><br>(d) 이를 이용하여 (Hence) <span class=\"chem\">k = 2</span>일 때 <span class=\"chem\">S_∞</span>의 값을 쓰시오 (Write down). <strong>[1 mark]</strong><br>(e) <span class=\"chem\">k = 2</span>일 때, <span class=\"chem\">S_n</span>와 <span class=\"chem\">S_∞</span>의 차가 0.001 이내가 되는 <span class=\"chem\">n</span>의 최솟값을 구하시오 (Find). <strong>[3 marks]</strong><br>(f) <span class=\"chem\">1/(r(r + 3))</span>의 부분분수를 생각하여 <span class=\"chem\">k = 3</span>일 때 <span class=\"chem\">S_∞</span>의 정확한 값을 구하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: Decode: partial fractions turn each term into a difference, so most terms cancel (the sum “telescopes”). The investigation asks you to see which terms survive, and how that depends on <span class="chem">k</span>.
        "해석: 부분분수로 각 항이 차의 꼴이 되므로 대부분의 항이 소거돼요(합이 연쇄 소거됨, “telescope”). 이 탐구에서는 어떤 항이 남는지, 그리고 그것이 <span class=\"chem\">k</span>에 따라 어떻게 달라지는지 파악해야 해요.",
        // EN: For (a), <span class="chem">1 ≡ A(r + 2) + Br</span>; put <span class="chem">r = 0</span> and <span class="chem">r = -2</span>.
        "(a)에서 <span class=\"chem\">1 ≡ A(r + 2) + Br</span>; <span class=\"chem\">r = 0</span>와 <span class=\"chem\">r = -2</span>을 대입하세요.",
        // EN: For (c), list the brackets <span class="chem">(1 - 1/3), (1/2 - 1/4), (1/3 - 1/5), …</span>; the positive part of each bracket cancels a negative part two brackets earlier.
        "(c)에서는 괄호 <span class=\"chem\">(1 - 1/3), (1/2 - 1/4), (1/3 - 1/5), …</span>을 나열하세요. 각 괄호의 양수 부분은 두 괄호 앞의 음수 부분과 소거돼요.",
        // EN: For (e), <span class="chem">S_∞ - S_n = (2n + 3)/(2(n + 1)(n + 2))</span>; tabulate it on your GDC near <span class="chem">n = 1000</span>.
        "(e)에서 <span class=\"chem\">S_∞ - S_n = (2n + 3)/(2(n + 1)(n + 2))</span>; GDC로 <span class=\"chem\">n = 1000</span> 근처의 표를 만드세요.",
      ],
      // EN: <p><b>Decode:</b> each step uses the partial-fraction difference so that a sum of <i>n</i> terms collapses to a few surviving terms.</p><div class="worked__math">(a) ½(1/<i>r</i> − 1/(<i>r</i> + 2)) (b) 1/3, 11/24, 21/40, 17/30 (d) 3/4 (e) <i>n</i> = 999 (f) 11/18</div>
      solution: "<p><b>해석:</b> 각 단계에서 부분분수로 얻은 차의 꼴을 이용하여 <i>n</i>개 항의 합이 남는 몇 개의 항으로 줄어들게 해요.</p><div class=\"worked__math\">(a) ½(1/<i>r</i> − 1/(<i>r</i> + 2)) (b) 1/3, 11/24, 21/40, 17/30 (d) 3/4 (e) <i>n</i> = 999 (f) 11/18</div>",
      // EN: <div class="worked__math">(a) <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 2)</span></span> = <span class="frac"><span>1</span><span>2</span></span>(<span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 2</span></span>)</div><div class="worked__math">(b) <i>S</i><sub>1</sub> = <span class="frac"><span>1</span><span>3</span></span>, <i>S</i><sub>2</sub> = <span class="frac"><span>11</span><span>24</span></span>, <i>S</i><sub>3</sub> = <span class="frac"><span>21</span><span>40</span></span>, <i>S</i><sub>4</sub> = <span class="frac"><span>17</span><span>30</span></span></div><div class="worked__math">(c) the sum telescopes: everything cancels except 1 + <span class="frac"><span>1</span><span>2</span></span> at the start and −<span class="frac"><span>1</span><span><i>n</i> + 1</span></span> − <span class="frac"><span>1</span><span><i>n</i> + 2</span></span> at the end, so <i>S</i><sub><i>n</i></sub> = <span class="frac"><span>1</span><span>2</span></span>(<span class="frac"><span>3</span><span>2</span></span> − <span class="frac"><span>2<i>n</i> + 3</span><span>(<i>n</i> + 1)(<i>n</i> + 2)</span></span>)</div><div class="worked__math">(d) <i>S</i><sub>∞</sub> = <span class="frac"><span>3</span><span>4</span></span></div><div class="worked__math">(e) <span class="frac"><span>2<i>n</i> + 3</span><span>2(<i>n</i> + 1)(<i>n</i> + 2)</span></span> &lt; 0.001; GDC: <i>n</i> = 998 gives 0.0010005…, <i>n</i> = 999 gives 0.00099950… ⇒ <b><i>n</i> = 999</b></div><div class="worked__math">(f) <span class="frac"><span>1</span><span><i>r</i>(<i>r</i> + 3)</span></span> = <span class="frac"><span>1</span><span>3</span></span>(<span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 3</span></span>); the terms 1, <span class="frac"><span>1</span><span>2</span></span>, <span class="frac"><span>1</span><span>3</span></span> survive: <i>S</i><sub>∞</sub> = <span class="frac"><span>1</span><span>3</span></span>(1 + <span class="frac"><span>1</span><span>2</span></span> + <span class="frac"><span>1</span><span>3</span></span>) = <b><span class="frac"><span>11</span><span>18</span></span></b></div>
      answer: "<div class=\"worked__math\">(a) <span class=\"frac\"><span>1</span><span><i>r</i>(<i>r</i> + 2)</span></span> = <span class=\"frac\"><span>1</span><span>2</span></span>(<span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 2</span></span>)</div><div class=\"worked__math\">(b) <i>S</i><sub>1</sub> = <span class=\"frac\"><span>1</span><span>3</span></span>, <i>S</i><sub>2</sub> = <span class=\"frac\"><span>11</span><span>24</span></span>, <i>S</i><sub>3</sub> = <span class=\"frac\"><span>21</span><span>40</span></span>, <i>S</i><sub>4</sub> = <span class=\"frac\"><span>17</span><span>30</span></span></div><div class=\"worked__math\">(c) 합이 연쇄 소거됨: 처음의 1 + <span class=\"frac\"><span>1</span><span>2</span></span>과 끝의 −<span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> − <span class=\"frac\"><span>1</span><span><i>n</i> + 2</span></span>를 제외한 모든 항이 소거되므로 <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span>1</span><span>2</span></span>(<span class=\"frac\"><span>3</span><span>2</span></span> − <span class=\"frac\"><span>2<i>n</i> + 3</span><span>(<i>n</i> + 1)(<i>n</i> + 2)</span></span>)</div><div class=\"worked__math\">(d) <i>S</i><sub>∞</sub> = <span class=\"frac\"><span>3</span><span>4</span></span></div><div class=\"worked__math\">(e) <span class=\"frac\"><span>2<i>n</i> + 3</span><span>2(<i>n</i> + 1)(<i>n</i> + 2)</span></span> &lt; 0.001; GDC: <i>n</i> = 998에서 0.0010005…, <i>n</i> = 999에서 0.00099950… ⇒ <b><i>n</i> = 999</b></div><div class=\"worked__math\">(f) <span class=\"frac\"><span>1</span><span><i>r</i>(<i>r</i> + 3)</span></span> = <span class=\"frac\"><span>1</span><span>3</span></span>(<span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 3</span></span>); 항 1, <span class=\"frac\"><span>1</span><span>2</span></span>, <span class=\"frac\"><span>1</span><span>3</span></span>가 남음: <i>S</i><sub>∞</sub> = <span class=\"frac\"><span>1</span><span>3</span></span>(1 + <span class=\"frac\"><span>1</span><span>2</span></span> + <span class=\"frac\"><span>1</span><span>3</span></span>) = <b><span class=\"frac\"><span>11</span><span>18</span></span></b></div>",
      markscheme: [
        // EN: M1: Sets <span class="chem">1 = A(r + 2) + Br</span> (or cover-up).
        "M1: <span class=\"chem\">1 = A(r + 2) + Br</span>로 둠(또는 근 대입법(cover-up) 사용).",
        // EN: A1: <span class="chem">1/(2r) - 1/(2(r + 2))</span>.
        "A1: <span class=\"chem\">1/(2r) - 1/(2(r + 2))</span>.",
        // EN: A1: Any two of <span class="chem">1/3, 11/24, 21/40, 17/30</span> correct.
        "A1: <span class=\"chem\">1/3, 11/24, 21/40, 17/30</span> 중 아무거나 두 개가 올바름.",
        // EN: A1: All four correct.
        "A1: 네 개 모두 올바름.",
        // EN: M1: Writes out the first few and last few terms of <span class="chem">(1/2)Σ(1/r - 1/(r + 2))</span>.
        "M1: <span class=\"chem\">(1/2)Σ(1/r - 1/(r + 2))</span>의 처음 몇 항과 마지막 몇 항을 나열함.",
        // EN: R1: Identifies the surviving terms <span class="chem">1 + 1/2</span> and <span class="chem">-1/(n + 1) - 1/(n + 2)</span>.
        "R1: 남는 항 <span class=\"chem\">1 + 1/2</span>과 <span class=\"chem\">-1/(n + 1) - 1/(n + 2)</span>를 찾음.",
        // EN: M1: Combines <span class="chem">1/(n + 1) + 1/(n + 2) = (2n + 3)/((n + 1)(n + 2))</span>.
        "M1: <span class=\"chem\">1/(n + 1) + 1/(n + 2) = (2n + 3)/((n + 1)(n + 2))</span>로 합침.",
        // EN: A1: Multiplies by <span class="chem">1/2</span>. AG: <span class="chem">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>; the given line itself earns no mark.
        "A1: <span class=\"chem\">1/2</span>을 곱함. AG: <span class=\"chem\">S_n = 3/4 - (2n + 3)/(2(n + 1)(n + 2))</span>; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: A1: <span class="chem">S_∞ = 3/4</span>.
        "A1: <span class=\"chem\">S_∞ = 3/4</span>.",
        // EN: M1: Sets up <span class="chem">(2n + 3)/(2(n + 1)(n + 2)) &lt; 0.001</span>.
        "M1: <span class=\"chem\">(2n + 3)/(2(n + 1)(n + 2)) &lt; 0.001</span>로 놓음.",
        // EN: A1: GDC values either side of 0.001 (at <span class="chem">n = 998</span> and <span class="chem">n = 999</span>).
        "A1: 0.001 양쪽의 GDC 값(<span class=\"chem\">n = 998</span>과 <span class=\"chem\">n = 999</span>에서).",
        // EN: A1: <span class="chem">n = 999</span>.
        "A1: <span class=\"chem\">n = 999</span>.",
        // EN: A1: <span class="chem">1/(r(r + 3)) = (1/3)(1/r - 1/(r + 3))</span>.
        "A1: <span class=\"chem\">1/(r(r + 3)) = (1/3)(1/r - 1/(r + 3))</span>.",
        // EN: R1: Explains that the first three positive terms <span class="chem">1, 1/2, 1/3</span> do not cancel and the remaining tail tends to 0.
        "R1: 처음 세 양수 항 <span class=\"chem\">1, 1/2, 1/3</span>은 소거되지 않고 나머지 꼬리 부분은 0에 가까워짐을 설명함.",
        // EN: A1: <span class="chem">S_∞ = 11/18</span>.
        "A1: <span class=\"chem\">S_∞ = 11/18</span>.",
      ],
    },

    // ── t1-3-q058 · short · challenge · AHL · AHL 1.10 · 14 marks
    "t1-3-q058": {
      // EN: <p>This question investigates how accurately the extended binomial theorem approximates square roots. Let <span class="chem">a</span> be a positive integer and <span class="chem">b</span> a real number.</p><p>(a) Show that <span class="chem">sqrt(a^2 + b) ≈ a + b/(2a) - b^2/(8a^3)</span>, using the first three terms of a binomial expansion. <strong>[3 marks]</strong><br>(b) State the condition on <span class="chem">b</span> for the full expansion to be valid. <strong>[1 mark]</strong><br>(c) Take <span class="chem">b = 1</span>. For <span class="chem">a = 4, 5, 6</span>, use (a) to approximate <span class="chem">sqrt(a^2 + 1)</span>, and use your GDC to find the error <span class="chem">E = sqrt(a^2 + 1) - (a + 1/(2a) - 1/(8a^3))</span> to 3 significant figures. <strong>[3 marks]</strong><br>(d) For each value of <span class="chem">a</span> in (c), calculate <span class="chem">a^5 E</span>. Hence suggest an approximate formula for <span class="chem">E</span> in terms of <span class="chem">a</span>. <strong>[2 marks]</strong><br>(e) By considering the next term of the expansion, justify your formula and generalise it to give an approximation for the error in terms of <span class="chem">a</span> and <span class="chem">b</span>. <strong>[3 marks]</strong><br>(f) Use your GDC to find the least value of <span class="chem">a</span> for which the approximation in (a) of <span class="chem">sqrt(a^2 + 1)</span> has an error less than <span class="chem">10^{-8}</span>. <strong>[2 marks]</strong></p>
      stem: "<p>이 문제에서는 확장된 이항정리가 제곱근을 얼마나 정확하게 근사하는지 탐구해요. <span class=\"chem\">a</span>은 양의 정수, <span class=\"chem\">b</span>는 실수예요.</p><p>(a) 이항전개의 처음 세 항을 사용하여 <span class=\"chem\">sqrt(a^2 + b) ≈ a + b/(2a) - b^2/(8a^3)</span>임을 보이시오 (Show that). <strong>[3 marks]</strong><br>(b) 전개 전체가 유효하기 위한 <span class=\"chem\">b</span>에 대한 조건을 답하시오 (State). <strong>[1 mark]</strong><br>(c) <span class=\"chem\">b = 1</span>로 두어요. <span class=\"chem\">a = 4, 5, 6</span>에 대해 (a)를 이용하여 <span class=\"chem\">sqrt(a^2 + 1)</span>의 근삿값을 구하고, GDC를 사용하여 오차 <span class=\"chem\">E = sqrt(a^2 + 1) - (a + 1/(2a) - 1/(8a^3))</span>을 유효숫자 3자리로 구하시오. <strong>[3 marks]</strong><br>(d) (c)의 각 <span class=\"chem\">a</span>의 값에 대해 <span class=\"chem\">a^5 E</span>을 계산하시오. 이를 이용하여 (Hence) <span class=\"chem\">E</span>을 <span class=\"chem\">a</span>에 대한 식으로 나타내는 근사 공식을 제시하시오 (Suggest). <strong>[2 marks]</strong><br>(e) 전개식의 다음 항을 생각하여 여러분의 공식의 근거를 들어 설명하고 (Justify), 이를 일반화하여 오차를 <span class=\"chem\">a</span>와 <span class=\"chem\">b</span>에 대한 식으로 나타내는 근사식을 구하시오. <strong>[3 marks]</strong><br>(f) GDC를 사용하여 (a)에 의한 <span class=\"chem\">sqrt(a^2 + 1)</span>의 근삿값의 오차가 <span class=\"chem\">10^{-8}</span>보다 작아지는 <span class=\"chem\">a</span>의 최솟값을 구하시오 (Find). <strong>[2 marks]</strong></p>",
      hints: [
        // EN: Decode: the investigation compares a three-term binomial approximation with the GDC value, looks for a pattern in the errors, and then explains the pattern with the fourth term of the series.
        "해석: 이 탐구는 세 항으로 이루어진 이항 근삿값을 GDC 값과 비교하고, 오차의 규칙을 찾은 다음, 급수의 네 번째 항으로 그 규칙을 설명해요.",
        // EN: In (a), write <span class="chem">a^2 + b = a^2(1 + b/a^2)</span>.
        "(a)에서는 <span class=\"chem\">a^2 + b = a^2(1 + b/a^2)</span>로 쓰세요.",
        // EN: In (c) and (d), keep full GDC precision: the errors are tiny.
        "(c)와 (d)에서는 GDC의 정밀도를 그대로 유지하세요. 오차가 아주 작아요.",
        // EN: In (e), the <span class="chem">u^3</span> coefficient of <span class="chem">(1 + u)^{1/2}</span> is <span class="chem">(1/2)(-1/2)(-3/2)/3!</span>.
        "(e)에서 <span class=\"chem\">(1 + u)^{1/2}</span>의 <span class=\"chem\">u^3</span> 계수는 <span class=\"chem\">(1/2)(-1/2)(-3/2)/3!</span>이에요.",
      ],
      // EN: <div class="worked__math">(a) <i>a</i> + <i>b</i>/(2<i>a</i>) − <i>b</i><sup>2</sup>/(8<i>a</i><sup>3</sup>) (b) |<i>b</i>| &lt; <i>a</i><sup>2</sup> (d) <i>E</i> ≈ 1/(16<i>a</i><sup>5</sup>) (e) <i>E</i> ≈ <i>b</i><sup>3</sup>/(16<i>a</i><sup>5</sup>) (f) <i>a</i> = 23</div>
      solution: "<div class=\"worked__math\">(a) <i>a</i> + <i>b</i>/(2<i>a</i>) − <i>b</i><sup>2</sup>/(8<i>a</i><sup>3</sup>) (b) |<i>b</i>| &lt; <i>a</i><sup>2</sup> (d) <i>E</i> ≈ 1/(16<i>a</i><sup>5</sup>) (e) <i>E</i> ≈ <i>b</i><sup>3</sup>/(16<i>a</i><sup>5</sup>) (f) <i>a</i> = 23</div>",
      // EN: <div class="worked__math">(a) √(<i>a</i><sup>2</sup> + <i>b</i>) = <i>a</i>(1 + <span class="frac"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>1/2</sup> ≈ <i>a</i>(1 + <span class="frac"><span><i>b</i></span><span>2<i>a</i><sup>2</sup></span></span> − <span class="frac"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>4</sup></span></span>) = <i>a</i> + <span class="frac"><span><i>b</i></span><span>2<i>a</i></span></span> − <span class="frac"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>3</sup></span></span></div><div class="worked__math">(b) |<i>b</i>/<i>a</i><sup>2</sup>| &lt; 1 ⇔ |<i>b</i>| &lt; <i>a</i><sup>2</sup></div><div class="worked__math">(c) <i>a</i> = 4: 4.123046875, <i>E</i> = 5.88 × 10<sup>−5</sup>; <i>a</i> = 5: 5.099, <i>E</i> = 1.95 × 10<sup>−5</sup>; <i>a</i> = 6: 6.0827546…, <i>E</i> = 7.90 × 10<sup>−6</sup></div><div class="worked__math">(d) <i>a</i><sup>5</sup><i>E</i> ≈ 0.0602, 0.0610, 0.0614: close to <span class="frac"><span>1</span><span>16</span></span> = 0.0625, so <i>E</i> ≈ <span class="frac"><span>1</span><span>16<i>a</i><sup>5</sup></span></span></div><div class="worked__math">(e) next term: <i>a</i> × <span class="frac"><span>(1/2)(−1/2)(−3/2)</span><span>3!</span></span>(<span class="frac"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>3</sup> = <span class="frac"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span>; the later terms are much smaller, so <i>E</i> ≈ <span class="frac"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span></div><div class="worked__math">(f) GDC: <i>a</i> = 22 gives <i>E</i> = 1.21 × 10<sup>−8</sup>, <i>a</i> = 23 gives <i>E</i> = 9.70 × 10<sup>−9</sup> ⇒ <b><i>a</i> = 23</b></div>
      answer: "<div class=\"worked__math\">(a) √(<i>a</i><sup>2</sup> + <i>b</i>) = <i>a</i>(1 + <span class=\"frac\"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>1/2</sup> ≈ <i>a</i>(1 + <span class=\"frac\"><span><i>b</i></span><span>2<i>a</i><sup>2</sup></span></span> − <span class=\"frac\"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>4</sup></span></span>) = <i>a</i> + <span class=\"frac\"><span><i>b</i></span><span>2<i>a</i></span></span> − <span class=\"frac\"><span><i>b</i><sup>2</sup></span><span>8<i>a</i><sup>3</sup></span></span></div><div class=\"worked__math\">(b) |<i>b</i>/<i>a</i><sup>2</sup>| &lt; 1 ⇔ |<i>b</i>| &lt; <i>a</i><sup>2</sup></div><div class=\"worked__math\">(c) <i>a</i> = 4: 4.123046875, <i>E</i> = 5.88 × 10<sup>−5</sup>; <i>a</i> = 5: 5.099, <i>E</i> = 1.95 × 10<sup>−5</sup>; <i>a</i> = 6: 6.0827546…, <i>E</i> = 7.90 × 10<sup>−6</sup></div><div class=\"worked__math\">(d) <i>a</i><sup>5</sup><i>E</i> ≈ 0.0602, 0.0610, 0.0614: <span class=\"frac\"><span>1</span><span>16</span></span> = 0.0625에 가까우므로 <i>E</i> ≈ <span class=\"frac\"><span>1</span><span>16<i>a</i><sup>5</sup></span></span></div><div class=\"worked__math\">(e) 다음 항: <i>a</i> × <span class=\"frac\"><span>(1/2)(−1/2)(−3/2)</span><span>3!</span></span>(<span class=\"frac\"><span><i>b</i></span><span><i>a</i><sup>2</sup></span></span>)<sup>3</sup> = <span class=\"frac\"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span>; 그 뒤의 항들은 훨씬 작으므로 <i>E</i> ≈ <span class=\"frac\"><span><i>b</i><sup>3</sup></span><span>16<i>a</i><sup>5</sup></span></span></div><div class=\"worked__math\">(f) GDC: <i>a</i> = 22에서 <i>E</i> = 1.21 × 10<sup>−8</sup>, <i>a</i> = 23에서 <i>E</i> = 9.70 × 10<sup>−9</sup> ⇒ <b><i>a</i> = 23</b></div>",
      markscheme: [
        // EN: M1: Takes out the factor <span class="chem">a</span>: <span class="chem">sqrt(a^2 + b) = a(1 + b/a^2)^{1/2}</span>.
        "M1: 인수 <span class=\"chem\">a</span>을 묶어 냄: <span class=\"chem\">sqrt(a^2 + b) = a(1 + b/a^2)^{1/2}</span>.",
        // EN: M1: Uses <span class="chem">n = 1/2</span> with <span class="chem">u = b/a^2</span>.
        "M1: <span class=\"chem\">u = b/a^2</span>로 <span class=\"chem\">n = 1/2</span>을 사용함.",
        // EN: A1: Expands and multiplies by <span class="chem">a</span>. AG: <span class="chem">a + b/(2a) - b^2/(8a^3)</span>; the given line itself earns no mark.
        "A1: 전개하고 <span class=\"chem\">a</span>을 곱함. AG: <span class=\"chem\">a + b/(2a) - b^2/(8a^3)</span>; 주어진 결과를 쓰는 줄 자체에는 점수가 없음.",
        // EN: A1: <span class="chem">|b| &lt; a^2</span>.
        "A1: <span class=\"chem\">|b| &lt; a^2</span>.",
        // EN: A1: Approximations 4.123046875, 5.099 and 6.0827546…
        "A1: 근삿값 4.123046875, 5.099, 6.0827546…",
        // EN: A1: Any two errors correct.
        "A1: 오차 중 아무거나 두 개가 올바름.",
        // EN: A1: All three errors correct: <span class="chem">5.88 × 10^{-5}</span>, <span class="chem">1.95 × 10^{-5}</span>, <span class="chem">7.90 × 10^{-6}</span>.
        "A1: 세 오차 모두 올바름: <span class=\"chem\">5.88 × 10^{-5}</span>, <span class=\"chem\">1.95 × 10^{-5}</span>, <span class=\"chem\">7.90 × 10^{-6}</span>.",
        // EN: A1: <span class="chem">a^5 E</span> values 0.0602, 0.0610, 0.0614.
        "A1: <span class=\"chem\">a^5 E</span>의 값 0.0602, 0.0610, 0.0614.",
        // EN: R1: Suggests <span class="chem">E ≈ 1/(16a^5)</span> (or <span class="chem">E ≈ 0.06/a^5</span>).
        "R1: <span class=\"chem\">E ≈ 1/(16a^5)</span> (또는 <span class=\"chem\">E ≈ 0.06/a^5</span>)을 제시함.",
        // EN: M1: Finds the coefficient of the <span class="chem">u^3</span> term: <span class="chem">(1/2)(-1/2)(-3/2)/3! = 1/16</span>.
        "M1: <span class=\"chem\">u^3</span> 항의 계수를 구함: <span class=\"chem\">(1/2)(-1/2)(-3/2)/3! = 1/16</span>.",
        // EN: A1: Next term <span class="chem">b^3/(16a^5)</span>.
        "A1: 다음 항 <span class=\"chem\">b^3/(16a^5)</span>.",
        // EN: R1: States that the error is approximately this next term because the later terms are much smaller, so <span class="chem">E ≈ b^3/(16a^5)</span>.
        "R1: 그 뒤의 항들은 훨씬 작으므로 오차는 대략 이 다음 항과 같다고 말하고, <span class=\"chem\">E ≈ b^3/(16a^5)</span>임을 제시함.",
        // EN: M1: Uses the GDC error values (or <span class="chem">1/(16a^5) &lt; 10^{-8}</span>) for consecutive values of <span class="chem">a</span>.
        "M1: 연속한 <span class=\"chem\">a</span>의 값에 대해 GDC 오차 값(또는 <span class=\"chem\">1/(16a^5) &lt; 10^{-8}</span>)을 사용함.",
        // EN: A1: <span class="chem">a = 23</span>.
        "A1: <span class=\"chem\">a = 23</span>.",
      ],
    },

    // ── t1-3-q059 · short · exam · AHL · AHL 1.10; SL 4.5 · 14 marks
    "t1-3-q059": {
      // EN: <p>This question investigates the number of ways to choose <span class="chem">k</span> seats from a row of <span class="chem">n</span> seats so that no two chosen seats are next to each other. Call this number <span class="chem">N(n, k)</span>.</p><p>(a) By listing, show that <span class="chem">N(5, 2) = 6</span>. <strong>[2 marks]</strong><br>(b) Find <span class="chem">N(4, 2)</span>, <span class="chem">N(6, 2)</span> and <span class="chem">N(7, 2)</span>, and conjecture a formula for <span class="chem">N(n, 2)</span> in the form <sup><i>p</i></sup>C<sub>2</sub>. <strong>[2 marks]</strong><br>(c) By thinking of the <span class="chem">n - k</span> seats that are <strong>not</strong> chosen, explain why <span class="chem">N(n, k)</span> = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>. <strong>[3 marks]</strong><br>(d) Hence find <span class="chem">N(20, 4)</span>. <strong>[1 mark]</strong><br>(e) Four friends sit down at random in 4 of the 20 seats of an empty row. Find the probability that no two of them sit next to each other. <strong>[3 marks]</strong><br>(f) Four people sit at random in a row of <span class="chem">n</span> empty seats. Use your GDC to find the least value of <span class="chem">n</span> for which the probability that no two of them are next to each other exceeds 0.9. <strong>[3 marks]</strong></p>
      stem: "<p>이 문제에서는 일렬로 놓인 <span class=\"chem\">n</span>개의 좌석 중에서 고른 어느 두 좌석도 서로 이웃하지 않도록 <span class=\"chem\">k</span>개의 좌석을 고르는 방법의 수를 탐구해요. 이 수를 <span class=\"chem\">N(n, k)</span>이라 해요.</p><p>(a) 나열하여 <span class=\"chem\">N(5, 2) = 6</span>임을 보이시오 (Show that). <strong>[2 marks]</strong><br>(b) <span class=\"chem\">N(4, 2)</span>, <span class=\"chem\">N(6, 2)</span>, <span class=\"chem\">N(7, 2)</span>을 구하고 (Find), <span class=\"chem\">N(n, 2)</span>에 대한 공식을 <sup><i>p</i></sup>C<sub>2</sub> 꼴로 추측하시오 (Conjecture). <strong>[2 marks]</strong><br>(c) 고르지 <strong>않은</strong> <span class=\"chem\">n - k</span>개의 좌석을 생각하여 <span class=\"chem\">N(n, k)</span> = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>인 이유를 설명하시오 (Explain). <strong>[3 marks]</strong><br>(d) 이를 이용하여 (Hence) <span class=\"chem\">N(20, 4)</span>을 구하시오. <strong>[1 mark]</strong><br>(e) 친구 네 명이 비어 있는 일렬 20개의 좌석 중 4개에 무작위로 앉아요. 그중 어느 두 사람도 서로 이웃하여 앉지 않을 확률을 구하시오 (Find). <strong>[3 marks]</strong><br>(f) 네 사람이 비어 있는 일렬 <span class=\"chem\">n</span>개의 좌석에 무작위로 앉아요. GDC를 사용하여 어느 두 사람도 서로 이웃하지 않을 확률이 0.9를 넘는 <span class=\"chem\">n</span>의 최솟값을 구하시오. <strong>[3 marks]</strong></p>",
      hints: [
        // EN: In (a), list the pairs in order: {1,3}, {1,4}, … and stop when you reach {3,5}.
        "(a)에서는 쌍을 순서대로 나열하세요: {1,3}, {1,4}, …, 그리고 {3,5}에 이르면 멈추세요.",
        // EN: In (c), this is the gap method: draw the unchosen seats as <code>O _ O _ O</code> and place the chosen seats into the gaps.
        "(c)는 끼워 넣기 방법이에요. 고르지 않은 좌석을 <code>O _ O _ O</code>처럼 그리고, 고른 좌석을 빈자리에 넣으세요.",
        // EN: In (e), the seats chosen are an unordered set of 4 seats, all <span class="chem">20C4</span> sets equally likely.
        "(e)에서 고른 좌석은 순서가 없는 4개 좌석의 집합이고, <span class=\"chem\">20C4</span>가지 집합은 모두 일어날 가능성이 같아요.",
        // EN: In (f), tabulate <span class="chem">y = (x - 3)C4 / xC4</span> on your GDC; it increases with <span class="chem">x</span>.
        "(f)에서는 GDC로 <span class=\"chem\">y = (x - 3)C4 / xC4</span>의 표를 만드세요. 이 값은 <span class=\"chem\">x</span>에 따라 증가해요.",
      ],
      // EN: <div class="worked__math">(b) <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub> (d) 2380 (e) 2380/4845 ≈ 0.491 (f) <i>n</i> = 117</div>
      solution: "<div class=\"worked__math\">(b) <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub> (d) 2380 (e) 2380/4845 ≈ 0.491 (f) <i>n</i> = 117</div>",
      // EN: <div class="worked__math">(a) seats 1–5: {1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}: 6 ways</div><div class="worked__math">(b) <i>N</i>(4, 2) = 3, <i>N</i>(6, 2) = 10, <i>N</i>(7, 2) = 15: these are <sup>3</sup>C<sub>2</sub>, <sup>5</sup>C<sub>2</sub>, <sup>6</sup>C<sub>2</sub>, so <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub></div><div class="worked__math">(c) the <i>n</i> − <i>k</i> unchosen seats form a row with <i>n</i> − <i>k</i> + 1 gaps (including both ends); putting at most one chosen seat in each gap keeps chosen seats apart, and every valid choice arises once, so <i>N</i>(<i>n</i>, <i>k</i>) = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub></div><div class="worked__math">(d) <sup>17</sup>C<sub>4</sub> = <b>2380</b></div><div class="worked__math">(e) P = <span class="frac"><span>2380</span><span><sup>20</sup>C<sub>4</sub></span></span> = <span class="frac"><span>2380</span><span>4845</span></span> ≈ <b>0.491</b> (the order of the friends cancels: 4! × 2380 / <sup>20</sup>P<sub>4</sub>)</div><div class="worked__math">(f) <span class="frac"><span><sup><i>n</i>−3</sup>C<sub>4</sub></span><span><sup><i>n</i></sup>C<sub>4</sub></span></span> &gt; 0.9; GDC: 0.8992… at <i>n</i> = 116, 0.9000… at <i>n</i> = 117 ⇒ <b><i>n</i> = 117</b></div>
      answer: "<div class=\"worked__math\">(a) 좌석 1–5: {1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}: 6가지</div><div class=\"worked__math\">(b) <i>N</i>(4, 2) = 3, <i>N</i>(6, 2) = 10, <i>N</i>(7, 2) = 15: 이는 <sup>3</sup>C<sub>2</sub>, <sup>5</sup>C<sub>2</sub>, <sup>6</sup>C<sub>2</sub>이므로 <i>N</i>(<i>n</i>, 2) = <sup><i>n</i>−1</sup>C<sub>2</sub></div><div class=\"worked__math\">(c) 고르지 않은 <i>n</i> − <i>k</i>개의 좌석이 한 줄을 이루면 <i>n</i> − <i>k</i> + 1개의 빈자리(양 끝 포함)가 생김. 각 빈자리에 고른 좌석을 많아야 하나씩 넣으면 고른 좌석끼리 떨어지고, 조건을 만족하는 모든 선택이 정확히 한 번씩 나타나므로 <i>N</i>(<i>n</i>, <i>k</i>) = <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub></div><div class=\"worked__math\">(d) <sup>17</sup>C<sub>4</sub> = <b>2380</b></div><div class=\"worked__math\">(e) P = <span class=\"frac\"><span>2380</span><span><sup>20</sup>C<sub>4</sub></span></span> = <span class=\"frac\"><span>2380</span><span>4845</span></span> ≈ <b>0.491</b> (친구들의 순서는 약분됨: 4! × 2380 / <sup>20</sup>P<sub>4</sub>)</div><div class=\"worked__math\">(f) <span class=\"frac\"><span><sup><i>n</i>−3</sup>C<sub>4</sub></span><span><sup><i>n</i></sup>C<sub>4</sub></span></span> &gt; 0.9; GDC: <i>n</i> = 116에서 0.8992…, <i>n</i> = 117에서 0.9000… ⇒ <b><i>n</i> = 117</b></div>",
      markscheme: [
        // EN: M1: Systematic list of pairs from seats 1 to 5.
        "M1: 좌석 1부터 5까지의 쌍을 체계적으로 나열함.",
        // EN: A1: The six pairs {1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}. AG: <span class="chem">N(5, 2) = 6</span>.
        "A1: 여섯 쌍 {1,3}, {1,4}, {1,5}, {2,4}, {2,5}, {3,5}. AG: <span class=\"chem\">N(5, 2) = 6</span>.",
        // EN: A1: 3, 10, 15.
        "A1: 3, 10, 15.",
        // EN: A1: Conjecture <sup><i>n</i>−1</sup>C<sub>2</sub>.
        "A1: 추측 <sup><i>n</i>−1</sup>C<sub>2</sub>.",
        // EN: R1: The <span class="chem">n - k</span> unchosen seats create <span class="chem">n - k + 1</span> gaps, including both ends.
        "R1: 고르지 않은 좌석 <span class=\"chem\">n - k</span>개가 양 끝을 포함하여 <span class=\"chem\">n - k + 1</span>개의 빈자리를 만듦.",
        // EN: R1: Chosen seats are non-adjacent exactly when each gap holds at most one chosen seat.
        "R1: 고른 좌석끼리 이웃하지 않는 것은 각 빈자리에 고른 좌석이 많아야 하나 들어갈 때와 정확히 같음.",
        // EN: R1: So a valid choice corresponds to choosing <span class="chem">k</span> of the <span class="chem">n - k + 1</span> gaps, giving <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>.
        "R1: 따라서 조건을 만족하는 선택은 <span class=\"chem\">n - k + 1</span>개의 빈자리 중 <span class=\"chem\">k</span>개를 고르는 것에 대응하므로 <sup><i>n</i>−<i>k</i>+1</sup>C<sub><i>k</i></sub>가 됨.",
        // EN: A1: 2380.
        "A1: 2380.",
        // EN: M1: Uses <sup>20</sup>C<sub>4</sub> = 4845 as the number of equally likely sets of seats (or <sup>20</sup>P<sub>4</sub> with 4! × 2380).
        "M1: 일어날 가능성이 같은 좌석 집합의 수로 <sup>20</sup>C<sub>4</sub> = 4845를 사용함(또는 <sup>20</sup>P<sub>4</sub>와 4! × 2380을 사용함).",
        // EN: A1: <span class="chem">2380/4845</span>.
        "A1: <span class=\"chem\">2380/4845</span>.",
        // EN: A1: 0.491.
        "A1: 0.491.",
        // EN: M1: Sets up <sup><i>n</i>−3</sup>C<sub>4</sub> / <sup><i>n</i></sup>C<sub>4</sub> &gt; 0.9.
        "M1: <sup><i>n</i>−3</sup>C<sub>4</sub> / <sup><i>n</i></sup>C<sub>4</sub> &gt; 0.9로 놓음.",
        // EN: A1: GDC values either side of 0.9 (at <span class="chem">n = 116</span> and <span class="chem">n = 117</span>).
        "A1: 0.9 양쪽의 GDC 값(<span class=\"chem\">n = 116</span>과 <span class=\"chem\">n = 117</span>에서).",
        // EN: A1: <span class="chem">n = 117</span>.
        "A1: <span class=\"chem\">n = 117</span>.",
      ],
    },

  }
});
