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
        "해석 (Decode): 제한이 있는 자리가 두 개예요. \"3000보다 큰\"은 천의 자리가 3, 4, 5, 6 중 하나라는 뜻이고, \"짝수\"는 일의 자리가 2, 4, 6 중 하나라는 뜻이에요. 제한이 있는 자리를 먼저 채운 다음, 가운데의 자유로운 두 자리를 채우세요.",
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
        "해석 (Decode): 분모의 제곱근은 음의 분수 지수예요. <span class=\"chem\">1/sqrt(1 - 3x) = (1 - 3x)^{-1/2}</span>이므로, 이 식은 일차식과 확장된 이항급수의 곱이에요. <span class=\"chem\">x^2</span>을 만드는 항의 곱은 두 가지뿐이에요.",
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
        "해석 (Decode): 이 문제는 하나의 논증을 차례로 쌓아 가요. 부분분수로 각 항을 차의 꼴로 바꾸고, 처음 몇 개의 합에서 규칙을 찾은 뒤, 같은 차의 꼴 덕분에 전체 합이 연쇄적으로 소거됨(“telescope”)을 보여요.",
        // EN: For (a), put <span class="chem">r = 0</span> and <span class="chem">r = -1</span> into <span class="chem">1 ≡ A(r + 1) + Br</span>.
        "(a)에서는 <span class=\"chem\">1 ≡ A(r + 1) + Br</span>에 <span class=\"chem\">r = 0</span>과 <span class=\"chem\">r = -1</span>을 대입해요.",
        // EN: For (c), write out the first and last few brackets of <span class="chem">Σ(1/r - 1/(r + 1))</span> and see which parts survive.
        "(c)에서는 <span class=\"chem\">Σ(1/r - 1/(r + 1))</span>의 처음과 마지막 몇 개의 괄호를 써 보고, 어떤 부분이 소거되지 않고 남는지 확인해요.",
        // EN: For (d), solve <span class="chem">n/(n + 1) &gt; 0.99</span>; take care with “greater than”.
        "(d)에서는 <span class=\"chem\">n/(n + 1) &gt; 0.99</span>를 풀어요. “초과”는 등호를 포함하지 않는다는 점에 주의해요.",
      ],
      // EN: <p><b>Decode:</b> partial fractions → pattern → telescoping proof → use the formula.</p><div class="worked__math">(a)  <span class="frac"><span>1</span><span><i>r</i></span></span> − <span class="frac"><span>1</span><span><i>r</i> + 1</span></span>   (b)  <span class="frac"><span>1</span><span>2</span></span>, <span class="frac"><span>2</span><span>3</span></span>, <span class="frac"><span>3</span><span>4</span></span>, <span class="frac"><span>4</span><span>5</span></span> ⇒ <i>S</i><sub><i>n</i></sub> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class="worked__math">(c)  ∑ = 1 − <span class="frac"><span>1</span><span><i>n</i> + 1</span></span> = <span class="frac"><span><i>n</i></span><span><i>n</i> + 1</span></span>   (d)  <i>n</i> &gt; 99 ⇒ <b><i>n</i> = 100</b></div>
      solution: "<p><b>해석 (Decode):</b> 부분분수 → 규칙 찾기 → 연쇄 소거로 증명 → 공식 이용.</p><div class=\"worked__math\">(a)  <span class=\"frac\"><span>1</span><span><i>r</i></span></span> − <span class=\"frac\"><span>1</span><span><i>r</i> + 1</span></span>   (b)  <span class=\"frac\"><span>1</span><span>2</span></span>, <span class=\"frac\"><span>2</span><span>3</span></span>, <span class=\"frac\"><span>3</span><span>4</span></span>, <span class=\"frac\"><span>4</span><span>5</span></span> ⇒ <i>S</i><sub><i>n</i></sub> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span></div><div class=\"worked__math\">(c)  ∑ = 1 − <span class=\"frac\"><span>1</span><span><i>n</i> + 1</span></span> = <span class=\"frac\"><span><i>n</i></span><span><i>n</i> + 1</span></span>   (d)  <i>n</i> &gt; 99 ⇒ <b><i>n</i> = 100</b></div>",
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
