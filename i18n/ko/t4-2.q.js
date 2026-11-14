/* t4-2.q — ko question translations for Analysis Lab.
   Each field has the English above it as a comment. Fill in the "" values; "" means "not translated yet".
   Keep every tag, number, formula and unit. Do not translate numeric answers or option order.
   Markscheme points and model answers are shown in English with your translation underneath.
   Rules, lints and workflow: docs/TRANSLATING.md. */
S1.i18n.register('ko', 't4-2.q', {
  questions: {

    // ── t4-2-q001 · mcq · foundation · SL · SL 4.6 · 2 marks
    "t4-2-q001": {
      // EN: <p>Events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are <strong>mutually exclusive</strong> with <span class=\"chem\">P(A) = 0.30</span> and <span class=\"chem\">P(B) = 0.50</span>. What is <span class=\"chem\">P(A ∪ B)</span>?</p>
      stem: "<p>두 사건 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 <strong>서로 배반</strong>이고 <span class=\"chem\">P(A) = 0.30</span>, <span class=\"chem\">P(B) = 0.50</span>이에요. <span class=\"chem\">P(A ∪ B)</span>는 얼마인가요?</p>",
      options: [
        // EN: <span class=\"chem\">0.80</span>
        "<span class=\"chem\">0.80</span>",
        // EN: <span class=\"chem\">0.65</span>
        "<span class=\"chem\">0.65</span>",
        // EN: <span class=\"chem\">0.15</span>
        "<span class=\"chem\">0.15</span>",
        // EN: <span class=\"chem\">0.20</span>
        "<span class=\"chem\">0.20</span>",
      ],
      hints: [
        // EN: For mutually exclusive events, <span class=\"chem\">P(A ∩ B) = 0</span>.
        "배반사건에서는 <span class=\"chem\">P(A ∩ B) = 0</span>이에요.",
        // EN: Use <span class=\"chem\">P(A ∪ B) = P(A) + P(B)</span>.
        "<span class=\"chem\">P(A ∪ B) = P(A) + P(B)</span>를 쓰세요.",
      ],
      // EN: <p>Because <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are mutually exclusive, <span class=\"chem\">P(A ∩ B) = 0</span>, so <span class=\"chem\">P(A ∪ B) = P(A) + P(B) = 0.30 + 0.50 = 0.80</span>.</p>
      solution: "<p><span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 배반사건이므로 <span class=\"chem\">P(A ∩ B) = 0</span>이고, <span class=\"chem\">P(A ∪ B) = P(A) + P(B) = 0.30 + 0.50 = 0.80</span>이에요.</p>",
      misconception: {
        // EN (option B): You subtracted 0.30 × 0.50 = 0.15, which is the rule for independent events, not mutually exclusive events!
        "1": "0.30 × 0.50 = 0.15를 뺐는데, 그건 배반사건이 아니라 독립사건의 규칙이에요!",
        // EN (option C): You multiplied P(A) and P(B), which gives P(A ∩ B) for independent events; for mutually exclusive events, P(A ∩ B) = 0.
        "2": "P(A)와 P(B)를 곱한 값은 독립사건일 때의 P(A ∩ B)예요. 배반사건에서는 P(A ∩ B) = 0이에요.",
        // EN (option D): You subtracted P(A) from P(B) instead of adding them.
        "3": "더하는 대신 P(B)에서 P(A)를 뺐어요.",
      },
    },

    // ── t4-2-q002 · numeric · foundation · SL · SL 4.6 · 3 marks
    "t4-2-q002": {
      // EN: <p>Events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are <strong>independent</strong> with <span class=\"chem\">P(A) = 0.40</span> and <span class=\"chem\">P(B) = 0.60</span>. Calculate <span class=\"chem\">P(A ∪ B)</span>.</p>
      stem: "<p>두 사건 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 <strong>독립</strong>이고 <span class=\"chem\">P(A) = 0.40</span>, <span class=\"chem\">P(B) = 0.60</span>이에요. <span class=\"chem\">P(A ∪ B)</span>를 계산하시오 (Calculate).</p>",
      hints: [
        // EN: Since <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are independent, <span class=\"chem\">P(A ∩ B) = P(A)P(B) = 0.40 × 0.60</span>.
        "<span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 독립이므로 <span class=\"chem\">P(A ∩ B) = P(A)P(B) = 0.40 × 0.60</span>이에요.",
        // EN: Substitute into <span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>.
        "<span class=\"chem\">P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</span>에 대입하세요.",
      ],
      // EN: <p>By independence, <span class=\"chem\">P(A ∩ B) = 0.40 × 0.60 = 0.24</span> <b>[A1]</b>.<br>Then <span class=\"chem\">P(A ∪ B) = 0.40 + 0.60 - 0.24 = 0.76</span> <b>[M1 A1]</b>.</p>
      solution: "<p>독립이므로 <span class=\"chem\">P(A ∩ B) = 0.40 × 0.60 = 0.24</span>예요 <b>[A1]</b>.<br>따라서 <span class=\"chem\">P(A ∪ B) = 0.40 + 0.60 - 0.24 = 0.76</span>이에요 <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q003 · numeric · foundation · SL · SL 4.7 · 4 marks
    "t4-2-q003": {
      // EN: <p>A discrete random variable <span class=\"chem\">X</span> takes the values <span class=\"chem\">1, 2, 3, 4</span> with probabilities <span class=\"chem\">0.1, k, 2k, 0.3</span> respectively. Find the expected value <span class=\"chem\">E(X)</span>.</p>
      stem: "<p>이산확률변수 <span class=\"chem\">X</span>가 값 <span class=\"chem\">1, 2, 3, 4</span>를 각각 확률 <span class=\"chem\">0.1, k, 2k, 0.3</span>으로 가질 때, 기댓값 <span class=\"chem\">E(X)</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: Use <span class=\"chem\">Σ P(X = x) = 1</span> to solve <span class=\"chem\">0.1 + k + 2k + 0.3 = 1</span> for <span class=\"chem\">k</span>.
        "<span class=\"chem\">Σ P(X = x) = 1</span>을 이용해 <span class=\"chem\">0.1 + k + 2k + 0.3 = 1</span>에서 <span class=\"chem\">k</span>를 구하세요.",
        // EN: Then compute <span class=\"chem\">E(X) = 1(0.1) + 2(k) + 3(2k) + 4(0.3)</span>.
        "그다음 <span class=\"chem\">E(X) = 1(0.1) + 2(k) + 3(2k) + 4(0.3)</span>을 계산하세요.",
      ],
      // EN: <p>Since probabilities sum to <span class=\"chem\">1</span>: <span class=\"chem\">0.4 + 3k = 1 ⇒ k = 0.2</span> <b>[M1 A1]</b>.<br>Thus <span class=\"chem\">E(X) = 1(0.1) + 2(0.2) + 3(0.4) + 4(0.3) = 0.1 + 0.4 + 1.2 + 1.2 = 2.9</span> <b>[M1 A1]</b>.</p>
      solution: "<p>확률의 합이 <span class=\"chem\">1</span>이므로 <span class=\"chem\">0.4 + 3k = 1 ⇒ k = 0.2</span>예요 <b>[M1 A1]</b>.<br>따라서 <span class=\"chem\">E(X) = 1(0.1) + 2(0.2) + 3(0.4) + 4(0.3) = 0.1 + 0.4 + 1.2 + 1.2 = 2.9</span>예요 <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q004 · numeric · foundation · SL · SL 4.8 · 4 marks
    "t4-2-q004": {
      // EN: <p>A binomial random variable <span class=\"chem\">X ~ B(n, p)</span> has mean <span class=\"chem\">E(X) = 12</span> and variance <span class=\"chem\">Var(X) = 3</span>. Find the number of trials <span class=\"chem\">n</span>.</p>
      stem: "<p>이항확률변수 <span class=\"chem\">X ~ B(n, p)</span>의 평균이 <span class=\"chem\">E(X) = 12</span>이고 분산이 <span class=\"chem\">Var(X) = 3</span>이에요. 시행 횟수 <span class=\"chem\">n</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: Divide <span class=\"chem\">Var(X) = np(1 - p) = 3</span> by <span class=\"chem\">E(X) = np = 12</span> to find <span class=\"chem\">1 - p</span>.
        "<span class=\"chem\">Var(X) = np(1 - p) = 3</span>을 <span class=\"chem\">E(X) = np = 12</span>로 나누어 <span class=\"chem\">1 - p</span>를 구하세요.",
        // EN: Once you have <span class=\"chem\">p = 0.75</span>, substitute into <span class=\"chem\">np = 12</span> to solve for <span class=\"chem\">n</span>.
        "<span class=\"chem\">p = 0.75</span>를 구한 뒤 <span class=\"chem\">np = 12</span>에 대입해 <span class=\"chem\">n</span>을 구하세요.",
      ],
      // EN: <p><span class=\"chem\">1 - p = Var(X) / E(X) = 3 / 12 = 0.25 ⇒ p = 0.75</span> <b>[M1 A1]</b>.<br>From <span class=\"chem\">np = 12</span>, we get <span class=\"chem\">n = 12 / 0.75 = 16</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">1 - p = Var(X) / E(X) = 3 / 12 = 0.25 ⇒ p = 0.75</span>예요 <b>[M1 A1]</b>.<br><span class=\"chem\">np = 12</span>에서 <span class=\"chem\">n = 12 / 0.75 = 16</span>이에요 <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q005 · mcq · exam · SL · SL 4.8 · 3 marks
    "t4-2-q005": {
      // EN: <p>A biased coin has probability <span class=\"chem\">1/3</span> of landing on Heads on any toss. If the coin is tossed <span class=\"chem\">4</span> times independently, what is the exact probability of obtaining <strong>exactly 2</strong> Heads?</p>
      stem: "<p>매번 던질 때마다 앞면이 나올 확률이 <span class=\"chem\">1/3</span>인 치우친 동전이 있어요. 이 동전을 독립적으로 <span class=\"chem\">4</span>번 던질 때, 앞면이 <strong>정확히 2번</strong> 나올 정확한 확률은 얼마인가요?</p>",
      options: [
        // EN: <span class=\"chem\">8/27</span>
        "<span class=\"chem\">8/27</span>",
        // EN: <span class=\"chem\">4/81</span>
        "<span class=\"chem\">4/81</span>",
        // EN: <span class=\"chem\">2/9</span>
        "<span class=\"chem\">2/9</span>",
        // EN: <span class=\"chem\">16/81</span>
        "<span class=\"chem\">16/81</span>",
      ],
      hints: [
        // EN: Use the Binomial formula <span class=\"chem\">P(X = 2) = 4C2 (1/3)^2 (2/3)^2</span>.
        "이항분포 공식 <span class=\"chem\">P(X = 2) = 4C2 (1/3)^2 (2/3)^2</span>을 쓰세요.",
        // EN: Remember <span class=\"chem\">4C2 = 6</span>.
        "<span class=\"chem\">4C2 = 6</span>임을 기억하세요.",
      ],
      // EN: <p>Let <span class=\"chem\">X ~ B(4, 1/3)</span>. Then <span class=\"chem\">P(X = 2) = 6 × (1/3)^2 × (2/3)^2 = 6 × (4/81) = 24/81 = 8/27</span>.</p>
      solution: "<p><span class=\"chem\">X ~ B(4, 1/3)</span>라 하면 <span class=\"chem\">P(X = 2) = 6 × (1/3)^2 × (2/3)^2 = 6 × (4/81) = 24/81 = 8/27</span>이에요.</p>",
      misconception: {
        // EN (option B): You computed (1/3)²(2/3)² = 4/81 for a single specific sequence (such as HHTT) and forgot to multiply by 4C2 = 6!
        "1": "(1/3)²(2/3)² = 4/81은 특정한 한 순서(예: 앞앞뒤뒤)의 확률만 계산한 것이고, 4C2 = 6을 곱하는 것을 빠뜨렸어요!",
        // EN (option C): You may have used 6 × (1/3)³ = 6/27 = 2/9, or multiplied 1/3 × 2/3 = 2/9 without the powers. The correct value is 4C2 (1/3)² (2/3)² = 6 × 4/81 = 24/81 = 8/27.
        "2": "6 × (1/3)³ = 6/27 = 2/9를 사용했거나, 거듭제곱 없이 1/3 × 2/3 = 2/9를 곱했을 수 있어요. 올바른 값은 4C2 (1/3)² (2/3)² = 6 × 4/81 = 24/81 = 8/27이에요.",
        // EN (option D): 16/81 is (2/3)⁴, which is the probability of obtaining 0 Heads (all Tails).
        "3": "16/81은 (2/3)⁴로, 앞면이 0번(모두 뒷면) 나올 확률이에요.",
      },
    },

    // ── t4-2-q006 · numeric · exam · SL · SL 4.8 · 4 marks
    "t4-2-q006": {
      // EN: <p>A basketball player makes each free throw with constant probability <span class=\"chem\">p = 0.30</span>, independently of other attempts. Find the minimum number of attempts <span class=\"chem\">n</span> required so that the probability of making <strong>at least one</strong> free throw exceeds <span class=\"chem\">0.95</span>.</p>
      stem: "<p>어떤 농구 선수가 다른 시도와 독립적으로 매 자유투를 일정한 확률 <span class=\"chem\">p = 0.30</span>으로 성공시켜요. <strong>적어도 한 번</strong> 자유투를 성공할 확률이 <span class=\"chem\">0.95</span>를 넘도록 하는 최소 시도 횟수 <span class=\"chem\">n</span>을 구하시오 (Find).</p>",
      hints: [
        // EN: Set up the complement inequality: <span class=\"chem\">1 - P(X = 0) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span>.
        "여사건 부등식을 세우세요: <span class=\"chem\">1 - P(X = 0) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span>.",
        // EN: Solve <span class=\"chem\">n &gt; ln(0.05) / ln(0.70)</span> and round <strong>up</strong> to the next whole number.
        "<span class=\"chem\">n &gt; ln(0.05) / ln(0.70)</span>을 풀고 다음 정수로 <strong>올림</strong>하세요.",
      ],
      // EN: <p><span class=\"chem\">P(X ≥ 1) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span> <b>[M1 A1]</b>.<br><span class=\"chem\">n &gt; ln(0.05) / ln(0.70) ≈ 8.399</span> <b>[M1]</b>.<br>Rounding up to the next integer gives <span class=\"chem\">n = 9</span> attempts <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(X ≥ 1) = 1 - 0.70^n &gt; 0.95 ⇒ 0.70^n &lt; 0.05</span> <b>[M1 A1]</b>.<br><span class=\"chem\">n &gt; ln(0.05) / ln(0.70) ≈ 8.399</span> <b>[M1]</b>.<br>다음 정수로 올림하면 최소 <span class=\"chem\">n = 9</span>회예요 <b>[A1]</b>.</p>",
    },

    // ── t4-2-q007 · numeric · exam · SL · SL 4.9 · 3 marks
    "t4-2-q007": {
      // EN: <p>A random variable <span class=\"chem\">X</span> is normally distributed with mean <span class=\"chem\">μ = 100</span> and standard deviation <span class=\"chem\">σ = 15</span>. Find the value of <span class=\"chem\">k</span> such that <span class=\"chem\">P(X &gt; k) = 0.20</span>, giving your answer to 3 s.f.</p>
      stem: "<p>확률변수 <span class=\"chem\">X</span>가 평균 <span class=\"chem\">μ = 100</span>, 표준편차 <span class=\"chem\">σ = 15</span>인 정규분포를 따라요. <span class=\"chem\">P(X &gt; k) = 0.20</span>을 만족하는 <span class=\"chem\">k</span>의 값을 구하고 (Find) 유효숫자 3자리로 답하시오.</p>",
      hints: [
        // EN: Since the right-tail area is <span class=\"chem\">P(X &gt; k) = 0.20</span>, the left-tail area is <span class=\"chem\">P(X &lt; k) = 0.80</span>.
        "오른쪽 꼬리 넓이가 <span class=\"chem\">P(X &gt; k) = 0.20</span>이므로 왼쪽 꼬리 넓이는 <span class=\"chem\">P(X &lt; k) = 0.80</span>이에요.",
        // EN: Use <span class=\"mono\">invNorm(0.80, 100, 15)</span> or <span class=\"chem\">k = 100 + 15 × invNorm(0.80)</span>.
        "<span class=\"mono\">invNorm(0.80, 100, 15)</span> 또는 <span class=\"chem\">k = 100 + 15 × invNorm(0.80)</span>을 사용하세요.",
      ],
      // EN: <p>Left-tail probability is <span class=\"chem\">P(X &lt; k) = 1 - 0.20 = 0.80</span> <b>[M1]</b>.<br>Using <span class=\"chem\">z = invNorm(0.80) ≈ 0.84162</span>, <span class=\"chem\">k = 100 + 15(0.84162) = 112.62 ≈ 113</span> (3 s.f.) <b>[M1 A1]</b>.</p>
      solution: "<p>왼쪽 꼬리 확률은 <span class=\"chem\">P(X &lt; k) = 1 - 0.20 = 0.80</span>이에요 <b>[M1]</b>.<br><span class=\"chem\">z = invNorm(0.80) ≈ 0.84162</span>를 쓰면 <span class=\"chem\">k = 100 + 15(0.84162) = 112.62 ≈ 113</span> (유효숫자 3자리)이에요 <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q008 · numeric · exam · SL · SL 4.12 · 4 marks
    "t4-2-q008": {
      // EN: <p>A normal random variable <span class=\"chem\">X ~ N(μ, σ^2)</span> satisfies <span class=\"chem\">P(X &lt; 26) = P(Z &lt; -1.5)</span> and <span class=\"chem\">P(X &gt; 46) = P(Z &gt; 1.0)</span>, where <span class=\"chem\">Z ~ N(0, 1)</span>. Find the mean <span class=\"chem\">μ</span>.</p>
      stem: "<p>정규확률변수 <span class=\"chem\">X ~ N(μ, σ^2)</span>가 <span class=\"chem\">P(X &lt; 26) = P(Z &lt; -1.5)</span>와 <span class=\"chem\">P(X &gt; 46) = P(Z &gt; 1.0)</span> (<span class=\"chem\">Z ~ N(0, 1)</span>)을 만족할 때, 평균 <span class=\"chem\">μ</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: Use <span class=\"chem\">(x - μ)/σ = z</span> to write two linear equations: <span class=\"chem\">26 - μ = -1.5σ</span> and <span class=\"chem\">46 - μ = 1.0σ</span>.
        "<span class=\"chem\">(x - μ)/σ = z</span>를 이용해 두 일차방정식 <span class=\"chem\">26 - μ = -1.5σ</span>와 <span class=\"chem\">46 - μ = 1.0σ</span>를 세우세요.",
        // EN: Subtract the first equation from the second to find <span class=\"chem\">σ</span>, then back-substitute for <span class=\"chem\">μ</span>.
        "두 번째 식에서 첫 번째 식을 빼서 <span class=\"chem\">σ</span>를 구한 뒤 <span class=\"chem\">μ</span>를 구하세요.",
      ],
      // EN: <p>Standardizing gives <span class=\"chem\">26 - μ = -1.5σ</span> and <span class=\"chem\">46 - μ = 1.0σ</span> <b>[M1 A1]</b>.<br>Subtracting gives <span class=\"chem\">20 = 2.5σ ⇒ σ = 8</span> <b>[A1]</b>.<br>Therefore <span class=\"chem\">μ = 46 - 8 = 38</span> <b>[A1]</b>.</p>
      solution: "<p>표준화하면 <span class=\"chem\">26 - μ = -1.5σ</span>와 <span class=\"chem\">46 - μ = 1.0σ</span>예요 <b>[M1 A1]</b>.<br>빼면 <span class=\"chem\">20 = 2.5σ ⇒ σ = 8</span>이에요 <b>[A1]</b>.<br>따라서 <span class=\"chem\">μ = 46 - 8 = 38</span>이에요 <b>[A1]</b>.</p>",
    },

    // ── t4-2-q009 · multi · exam · SL · SL 4.6, 4.8, 4.9 · 3 marks
    "t4-2-q009": {
      // EN: <p>Select <strong>all</strong> statements that are always true for probability distributions and events.</p>
      stem: "<p>확률분포와 사건에 대해 항상 참인 설명을 <strong>모두</strong> 고르시오.</p>",
      options: [
        // EN: For any normal random variable <span class=\"chem\">X ~ N(μ, σ^2)</span>, the mean, median, and mode are all equal to <span class=\"chem\">μ</span>.
        "임의의 정규확률변수 <span class=\"chem\">X ~ N(μ, σ^2)</span>에서 평균, 중앙값, 최빈값은 모두 <span class=\"chem\">μ</span>와 같다.",
        // EN: If events <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are independent, then <span class=\"chem\">P(A | B) = P(A)</span>.
        "두 사건 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 독립이면 <span class=\"chem\">P(A | B) = P(A)</span>이다.",
        // EN: For a binomial random variable <span class=\"chem\">X ~ B(n, p)</span> with <span class=\"chem\">0 &lt; p &lt; 1</span>, the variance <span class=\"chem\">Var(X)</span> is strictly less than the mean <span class=\"chem\">E(X)</span>.
        "<span class=\"chem\">0 &lt; p &lt; 1</span>인 이항확률변수 <span class=\"chem\">X ~ B(n, p)</span>에서 분산 <span class=\"chem\">Var(X)</span>는 평균 <span class=\"chem\">E(X)</span>보다 엄격히 작다.",
        // EN: For any two events with <span class=\"chem\">P(A) &gt; 0</span> and <span class=\"chem\">P(B) &gt; 0</span>, if <span class=\"chem\">A</span> and <span class=\"chem\">B</span> are mutually exclusive then they are also independent.
        "<span class=\"chem\">P(A) &gt; 0</span>이고 <span class=\"chem\">P(B) &gt; 0</span>인 두 사건 <span class=\"chem\">A</span>와 <span class=\"chem\">B</span>가 배반이면 독립이기도 하다.",
      ],
      hints: [
        // EN: Check <span class=\"chem\">Var(X) = np(1 - p)</span> vs <span class=\"chem\">E(X) = np</span> for Binomial, and check whether mutually exclusive events can be independent.
        "이항분포에서 <span class=\"chem\">Var(X) = np(1 - p)</span>와 <span class=\"chem\">E(X) = np</span>를 비교하고, 배반사건이 독립이 될 수 있는지 확인하세요.",
      ],
      // EN: <p>Statements A, B, and C are always true (note that <span class=\"chem\">Var(X) = np(1 - p) &lt; np = E(X)</span> since <span class=\"chem\">0 &lt; 1 - p &lt; 1</span>). Statement D is false because mutually exclusive events with positive probabilities have <span class=\"chem\">P(A ∩ B) = 0 ≠ P(A)P(B)</span>.</p>
      solution: "<p>A, B, C는 항상 참이에요 (<span class=\"chem\">0 &lt; 1 - p &lt; 1</span>이므로 <span class=\"chem\">Var(X) = np(1 - p) &lt; np = E(X)</span>예요). D는 양의 확률을 갖는 배반사건에서 <span class=\"chem\">P(A ∩ B) = 0 ≠ P(A)P(B)</span>이므로 거짓이에요.</p>",
      misconception: {
        // EN (option D): If P(A) > 0 and P(B) > 0, mutually exclusive events have P(A ∩ B) = 0 ≠ P(A)P(B), so they can NEVER be independent!
        "3": "P(A) > 0이고 P(B) > 0일 때 배반사건은 P(A ∩ B) = 0 ≠ P(A)P(B)이므로 절대로 독립일 수 없어요!",
      },
    },

    // ── t4-2-q010 · order · exam · SL · SL 4.8, 4.9 · 3 marks
    "t4-2-q010": {
      // EN: <p>Apples have masses <span class=\"chem\">M ~ N(160, 12^2)</span> g. Ten apples are packed at random into a bag. Order the steps required to find the probability that <strong>at least 3</strong> apples in the bag have a mass exceeding <span class=\"chem\">175</span> g.</p>
      stem: "<p>사과의 무게가 <span class=\"chem\">M ~ N(160, 12^2)</span> g을 따라요. 봉지 하나에 사과 10개를 무작위로 담을 때, 무게가 <span class=\"chem\">175</span> g을 넘는 사과가 <strong>적어도 3개</strong>일 확률을 구하는 단계를 순서대로 배열하시오.</p>",
      options: [
        // EN: Use <span class=\"mono\">normalcdf(175, 1E99, 160, 12)</span> on <span class=\"chem\">M ~ N(160, 12^2)</span> to find the single-apple probability <span class=\"chem\">p = P(M &gt; 175) ≈ 0.10565</span>.
        "<span class=\"chem\">M ~ N(160, 12^2)</span>에서 <span class=\"mono\">normalcdf(175, 1E99, 160, 12)</span>를 써서 사과 1개의 확률 <span class=\"chem\">p = P(M &gt; 175) ≈ 0.10565</span>를 구한다.",
        // EN: Define a new discrete random variable <span class=\"chem\">Y ~ B(10, 0.10565)</span> representing the number of apples in the bag of <span class=\"chem\">10</span> with mass over <span class=\"chem\">175</span> g.
        "봉지의 사과 <span class=\"chem\">10</span>개 중 무게가 <span class=\"chem\">175</span> g을 넘는 사과의 개수를 나타내는 새 이산확률변수 <span class=\"chem\">Y ~ B(10, 0.10565)</span>를 정의한다.",
        // EN: Rewrite the discrete inequality <span class=\"chem\">P(Y ≥ 3)</span> in cumulative form as <span class=\"chem\">1 - P(Y ≤ 2)</span>.
        "이산 부등식 <span class=\"chem\">P(Y ≥ 3)</span>을 누적 형태인 <span class=\"chem\">1 - P(Y ≤ 2)</span>로 고쳐 쓴다.",
        // EN: Evaluate <span class=\"chem\">1 - binomcdf(10, 0.10565, 2)</span> and round the final probability to 3 significant figures (<span class=\"chem\">0.0803</span>).
        "<span class=\"chem\">1 - binomcdf(10, 0.10565, 2)</span>를 계산해 최종 확률을 유효숫자 3자리(<span class=\"chem\">0.0803</span>)로 반올림한다.",
      ],
      hints: [
        // EN: First find the probability <span class=\"chem\">p</span> for 1 apple from the Normal distribution, then set up the Binomial model for 10 apples.
        "먼저 정규분포에서 사과 1개의 확률 <span class=\"chem\">p</span>를 구한 뒤, 사과 10개에 대한 이항분포 모델을 세우세요.",
      ],
      // EN: <p>In a Normal-to-Binomial chain, (1) find <span class=\"chem\">p</span> for a single trial via <span class=\"mono\">normalcdf</span> (keeping 5+ s.f.), (2) define <span class=\"chem\">Y ~ B(10, p)</span>, (3) rewrite <span class=\"chem\">P(Y ≥ 3) = 1 - P(Y ≤ 2)</span>, and (4) evaluate via <span class=\"mono\">binomcdf</span>.</p>
      solution: "<p>정규분포→이항분포 연계 문제에서는 (1) <span class=\"mono\">normalcdf</span>로 한 번의 확률 <span class=\"chem\">p</span>를 구하고(유효숫자 5자리 이상 유지), (2) <span class=\"chem\">Y ~ B(10, p)</span>를 정의한 뒤, (3) <span class=\"chem\">P(Y ≥ 3) = 1 - P(Y ≤ 2)</span>로 고쳐 (4) <span class=\"mono\">binomcdf</span>로 계산해요.</p>",
    },

    // ── t4-2-q011 · short · exam · SL · SL 4.8, 4.9, 4.11 · 7 marks
    "t4-2-q011": {
      // EN: <p>The masses of coffee bags produced by a roastery are modelled by a normal distribution <span class=\"chem\">M ~ N(254, 5^2)</span> grams.<br>(a) Find the probability that a randomly selected bag has a mass less than <span class=\"chem\">250</span> g. <strong>[2 marks]</strong><br>(b) Given that a bag has a mass less than <span class=\"chem\">254</span> g, find the probability that its mass is between <span class=\"chem\">250</span> g and <span class=\"chem\">254</span> g. <strong>[2 marks]</strong><br>(c) Ten bags are chosen independently at random. Find the probability that <strong>at most 2</strong> of these bags have a mass less than <span class=\"chem\">250</span> g. <strong>[3 marks]</strong></p>
      stem: "<p>로스터리에서 생산하는 커피 봉지의 무게는 정규분포 <span class=\"chem\">M ~ N(254, 5^2)</span> g을 따른다.<br>(a) 무작위로 선택한 한 봉지의 무게가 <span class=\"chem\">250</span> g 미만일 확률을 구하시오 (Find). <strong>[2 marks]</strong><br>(b) 한 봉지의 무게가 <span class=\"chem\">254</span> g 미만일 때, 그 무게가 <span class=\"chem\">250</span> g과 <span class=\"chem\">254</span> g 사이일 확률을 구하시오 (Find). <strong>[2 marks]</strong><br>(c) 10개의 봉지를 독립적으로 무작위 선택할 때, 이 중 <strong>많아야 2개</strong>의 봉지가 <span class=\"chem\">250</span> g 미만일 확률을 구하시오 (Find). <strong>[3 marks]</strong></p>",
      // EN: <p>(a) Using GDC <span class=\"mono\">normalcdf(-1E99, 250, 254, 5)</span> gives <span class=\"chem\">p = 0.21186 ≈ 0.212</span>.<br>(b) Since <span class=\"chem\">μ = 254</span>, <span class=\"chem\">P(M &lt; 254) = 0.5</span>. Thus <span class=\"chem\">P(M &gt; 250 | M &lt; 254) = P(250 &lt; M &lt; 254) / 0.5 = (0.5 - 0.21186) / 0.5 = 0.576</span>.<br>(c) Let <span class=\"chem\">Y ~ B(10, 0.21186)</span>. Then <span class=\"chem\">P(Y ≤ 2) = binomcdf(10, 0.21186, 2) ≈ 0.642</span>.</p>
      solution: "<p>(a) GDC <span class=\"mono\">normalcdf(-1E99, 250, 254, 5)</span>를 쓰면 <span class=\"chem\">p = 0.21186 ≈ 0.212</span>예요.<br>(b) <span class=\"chem\">μ = 254</span>이므로 <span class=\"chem\">P(M &lt; 254) = 0.5</span>예요. 따라서 <span class=\"chem\">P(M &gt; 250 | M &lt; 254) = P(250 &lt; M &lt; 254) / 0.5 = (0.5 - 0.21186) / 0.5 = 0.576</span>이에요.<br>(c) <span class=\"chem\">Y ~ B(10, 0.21186)</span>이라 하면 <span class=\"chem\">P(Y ≤ 2) = binomcdf(10, 0.21186, 2) ≈ 0.642</span>예요.</p>",
      // EN: <p>(a) <span class=\"chem\">P(M &lt; 250) = 0.212</span> (more precisely <span class=\"chem\">0.21186</span>).<br>(b) <span class=\"chem\">P(250 &lt; M &lt; 254 | M &lt; 254) = (0.5 - 0.21186) / 0.5 = 0.576</span>.<br>(c) Let <span class=\"chem\">Y ~ B(10, 0.21186)</span>; <span class=\"chem\">P(Y ≤ 2) = 0.642</span>.</p>
      answer: "<p>(a) <span class=\"chem\">P(M &lt; 250) = 0.212</span> (더 정확히는 <span class=\"chem\">0.21186</span>).<br>(b) <span class=\"chem\">P(250 &lt; M &lt; 254 | M &lt; 254) = (0.5 - 0.21186) / 0.5 = 0.576</span>.<br>(c) <span class=\"chem\">Y ~ B(10, 0.21186)</span>이라 하면 <span class=\"chem\">P(Y ≤ 2) = 0.642</span>예요.</p>",
      markscheme: [
        // EN: M1: Recognizes normalcdf(-1E99, 250, 254, 5) or z = (250 − 254)/5 = −0.8.
        "M1: normalcdf(-1E99, 250, 254, 5) 또는 z = (250 − 254)/5 = −0.8을 인식함.",
        // EN: A1: Finds P(M < 250) = 0.212 (0.21186).
        "A1: P(M < 250) = 0.212 (0.21186)를 구함.",
        // EN: M1: Sets up conditional probability P(250 < M < 254) / P(M < 254) = 0.28814 / 0.5.
        "M1: 조건부확률 P(250 < M < 254) / P(M < 254) = 0.28814 / 0.5를 세움.",
        // EN: A1: Evaluates conditional probability as 0.576.
        "A1: 조건부확률을 0.576으로 계산함.",
        // EN: M1: Recognizes Binomial model Y ~ B(10, 0.21186).
        "M1: 이항분포 모델 Y ~ B(10, 0.21186)을 인식함.",
        // EN: M1: Uses binomcdf(10, 0.21186, 2) for P(Y ≤ 2).
        "M1: P(Y ≤ 2)에 대해 binomcdf(10, 0.21186, 2)를 사용함.",
        // EN: A1: Obtains 0.642 (accept 0.641 to 0.642).
        "A1: 0.642를 얻음 (0.641~0.642 허용).",
      ],
    },

    // ── t4-2-q012 · numeric · foundation · AHL · AHL 4.14 · 2 marks
    "t4-2-q012": {
      // EN: <p>A random variable <span class=\"chem\">X</span> has expected value <span class=\"chem\">E(X) = 4</span> and variance <span class=\"chem\">Var(X) = 5</span>. Calculate <span class=\"chem\">Var(3X - 7)</span>.</p>
      stem: "<p>확률변수 <span class=\"chem\">X</span>의 기댓값이 <span class=\"chem\">E(X) = 4</span>이고 분산이 <span class=\"chem\">Var(X) = 5</span>예요. <span class=\"chem\">Var(3X - 7)</span>을 계산하시오 (Calculate).</p>",
      hints: [
        // EN: Recall the linear transformation rule for variance: <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>.
        "분산의 선형 변환 공식 <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>를 떠올리세요.",
        // EN: Notice that subtracting <span class=\"chem\">7</span> does not affect the variance.
        "<span class=\"chem\">7</span>을 빼는 것은 분산에 영향을 주지 않아요.",
      ],
      // EN: <p>Using <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span> with <span class=\"chem\">a = 3, b = -7</span>:<br><span class=\"chem\">Var(3X - 7) = 3^2 × 5 = 9 × 5 = 45</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">a = 3, b = -7</span>로 두고 <span class=\"chem\">Var(aX + b) = a^2 Var(X)</span>를 쓰면:<br><span class=\"chem\">Var(3X - 7) = 3^2 × 5 = 9 × 5 = 45</span>예요 <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q013 · numeric · exam · AHL · AHL 4.14 · 3 marks
    "t4-2-q013": {
      // EN: <p>A discrete random variable <span class=\"chem\">X</span> satisfies <span class=\"chem\">E(X) = 3</span> and <span class=\"chem\">E(X^2) = 13</span>. Find the standard deviation <span class=\"chem\">σ</span> of <span class=\"chem\">X</span>.</p>
      stem: "<p>이산확률변수 <span class=\"chem\">X</span>가 <span class=\"chem\">E(X) = 3</span>과 <span class=\"chem\">E(X^2) = 13</span>을 만족해요. <span class=\"chem\">X</span>의 표준편차 <span class=\"chem\">σ</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: First compute <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>.
        "먼저 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>을 계산하세요.",
        // EN: Take the positive square root of <span class=\"chem\">Var(X)</span> to get the standard deviation.
        "<span class=\"chem\">Var(X)</span>의 양의 제곱근을 취하면 표준편차가 돼요.",
      ],
      // EN: <p><span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2 = 13 - 3^2 = 4</span> <b>[M1 A1]</b>.<br>Standard deviation <span class=\"chem\">σ = √4 = 2</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2 = 13 - 3^2 = 4</span>예요 <b>[M1 A1]</b>.<br>표준편차 <span class=\"chem\">σ = √4 = 2</span>예요 <b>[A1]</b>.</p>",
    },

    // ── t4-2-q014 · numeric · exam · AHL · AHL 4.13 · 5 marks
    "t4-2-q014": {
      // EN: <p>A courier company ships parcels via three hubs <span class=\"chem\">B_1, B_2, B_3</span> in proportions <span class=\"chem\">0.50, 0.30, 0.20</span> respectively. The probabilities that a parcel is delayed (<span class=\"chem\">D</span>) when routed through <span class=\"chem\">B_1, B_2, B_3</span> are <span class=\"chem\">0.10, 0.20, 0.25</span> respectively. Given that a parcel arrives delayed, find the probability <span class=\"chem\">P(B_3 | D)</span> that it was routed through hub <span class=\"chem\">B_3</span>.</p>
      stem: "<p>택배 회사가 세 물류 허브 <span class=\"chem\">B_1, B_2, B_3</span>를 통해 각각 <span class=\"chem\">0.50, 0.30, 0.20</span>의 비율로 소포를 배송해요. <span class=\"chem\">B_1, B_2, B_3</span>를 거칠 때 소포가 지연(<span class=\"chem\">D</span>)될 확률은 각각 <span class=\"chem\">0.10, 0.20, 0.25</span>예요. 소포가 지연되어 도착했을 때, 이 소포가 허브 <span class=\"chem\">B_3</span>을 거쳤을 확률 <span class=\"chem\">P(B_3 | D)</span>를 구하시오 (Find).</p>",
      hints: [
        // EN: Use the law of total probability to find <span class=\"chem\">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25)</span>.
        "전체 확률의 법칙으로 <span class=\"chem\">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25)</span>를 구하세요.",
        // EN: By Bayes' theorem, divide <span class=\"chem\">P(B_3 ∩ D) = 0.20(0.25) = 0.05</span> by <span class=\"chem\">P(D) = 0.16</span>.
        "베이즈 정리에 의해 <span class=\"chem\">P(B_3 ∩ D) = 0.20(0.25) = 0.05</span>를 <span class=\"chem\">P(D) = 0.16</span>으로 나누세요.",
      ],
      // EN: <p>Total probability of delay:<br><span class=\"chem\">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25) = 0.05 + 0.06 + 0.05 = 0.16</span> <b>[M1 A1]</b>.<br>By Bayes' theorem:<br><span class=\"chem\">P(B_3 | D) = 0.05 / 0.16 = 5/16 = 0.3125</span> (or <span class=\"chem\">0.313</span> to 3 s.f.) <b>[M1 A2]</b>.</p>
      solution: "<p>지연될 전체 확률:<br><span class=\"chem\">P(D) = 0.50(0.10) + 0.30(0.20) + 0.20(0.25) = 0.05 + 0.06 + 0.05 = 0.16</span> <b>[M1 A1]</b>.<br>베이즈 정리에 의해:<br><span class=\"chem\">P(B_3 | D) = 0.05 / 0.16 = 5/16 = 0.3125</span> (유효숫자 3자리로 <span class=\"chem\">0.313</span>) <b>[M1 A2]</b>.</p>",
      // EN: 5/16 (or 0.313)
      answerDisplay: "5/16 (또는 0.313)",
    },

    // ── t4-2-q015 · mcq · exam · AHL · AHL 4.14 · 3 marks
    "t4-2-q015": {
      // EN: <p>A continuous random variable <span class=\"chem\">X</span> has probability density function <span class=\"chem\">f(x) = (3/14)(x^2 + 1)</span> for <span class=\"chem\">0 ≤ x ≤ 2</span>, and <span class=\"chem\">f(x) = 0</span> otherwise. What is the <strong>mode</strong> of <span class=\"chem\">X</span>?</p>
      stem: "<p>연속확률변수 <span class=\"chem\">X</span>의 확률밀도함수가 <span class=\"chem\">0 ≤ x ≤ 2</span>에서 <span class=\"chem\">f(x) = (3/14)(x^2 + 1)</span>이고 그 외에서는 <span class=\"chem\">f(x) = 0</span>이에요. <span class=\"chem\">X</span>의 <strong>최빈값</strong>은 무엇인가요?</p>",
      options: [
        // EN: <span class=\"chem\">x = 2</span>
        "<span class=\"chem\">x = 2</span>",
        // EN: <span class=\"chem\">x = 0</span>
        "<span class=\"chem\">x = 0</span>",
        // EN: <span class=\"chem\">x = 15/14</span>
        "<span class=\"chem\">x = 15/14</span>",
        // EN: <span class=\"chem\">x = 1</span>
        "<span class=\"chem\">x = 1</span>",
      ],
      hints: [
        // EN: The mode is the value of <span class=\"chem\">x ∈ [0, 2]</span> where <span class=\"chem\">f(x)</span> reaches its global maximum.
        "최빈값은 <span class=\"chem\">x ∈ [0, 2]</span>에서 <span class=\"chem\">f(x)</span>가 전역 최댓값을 갖는 x 값이에요.",
        // EN: Check whether <span class=\"chem\">f(x) = (3/14)(x^2 + 1)</span> is increasing or decreasing on <span class=\"chem\">[0, 2]</span>.
        "<span class=\"chem\">[0, 2]</span>에서 <span class=\"chem\">f(x) = (3/14)(x^2 + 1)</span>이 증가하는지 감소하는지 확인하세요.",
      ],
      // EN: <p>On <span class=\"chem\">[0, 2]</span>, <span class=\"chem\">f'(x) = (3/7)x ≥ 0</span>, so <span class=\"chem\">f(x)</span> is strictly increasing from <span class=\"chem\">f(0) = 3/14</span> to <span class=\"chem\">f(2) = 15/14</span>. Thus <span class=\"chem\">f(x)</span> attains its global maximum at the right endpoint <span class=\"chem\">x = 2</span>.</p>
      solution: "<p><span class=\"chem\">[0, 2]</span>에서 <span class=\"chem\">f'(x) = (3/7)x ≥ 0</span>이므로 <span class=\"chem\">f(x)</span>는 <span class=\"chem\">f(0) = 3/14</span>에서 <span class=\"chem\">f(2) = 15/14</span>까지 순증가해요. 따라서 <span class=\"chem\">f(x)</span>는 오른쪽 끝점 <span class=\"chem\">x = 2</span>에서 전역 최댓값을 가져요.</p>",
      misconception: {
        // EN (option B): Setting f'(x) = (6/14)x = 0 gives x = 0, which is the global MINIMUM of f(x) on [0, 2], not the maximum!
        "1": "f'(x) = (6/14)x = 0을 풀면 x = 0이 나오는데, 이는 [0, 2]에서 최댓값이 아니라 전역 최솟값이에요!",
        // EN (option C): 15/14 is the maximum height f(2), not the x-coordinate where that maximum occurs.
        "2": "15/14는 최댓값이 발생하는 x좌표가 아니라 최대 높이 f(2)예요.",
        // EN (option D): x = 1 is the midpoint of [0, 2], but f(x) is not symmetric—it increases strictly all the way to x = 2.
        "3": "x = 1은 [0, 2]의 중점이지만 f(x)는 대칭이 아니며 x = 2까지 계속 증가해요.",
      },
    },

    // ── t4-2-q016 · numeric · exam · AHL · AHL 4.14 · 4 marks
    "t4-2-q016": {
      // EN: <p>A continuous random variable <span class=\"chem\">X</span> has probability density function <span class=\"chem\">f(x) = x / 8</span> for <span class=\"chem\">0 ≤ x ≤ 4</span>, and <span class=\"chem\">f(x) = 0</span> otherwise. Find the <strong>median</strong> <span class=\"chem\">m</span> of <span class=\"chem\">X</span> (you may type an exact radical such as <span class=\"mono\">sqrt(8)</span> or a 3 s.f. decimal).</p>
      stem: "<p>연속확률변수 <span class=\"chem\">X</span>의 확률밀도함수가 <span class=\"chem\">0 ≤ x ≤ 4</span>에서 <span class=\"chem\">f(x) = x / 8</span>이고 그 외에서는 <span class=\"chem\">f(x) = 0</span>이에요. <span class=\"chem\">X</span>의 <strong>중앙값</strong> <span class=\"chem\">m</span>의 <strong>정확한</strong> 값을 구하시오 (Find). (<span class=\"mono\">sqrt(5)/2</span> 같은 정확한 근호를 그대로 입력할 수 있어요.)</p>",
      hints: [
        // EN: The median <span class=\"chem\">m</span> satisfies <span class=\"chem\">∫_0^m (x / 8) dx = 0.5</span>.
        "중앙값 <span class=\"chem\">m</span>은 <span class=\"chem\">∫_0^m (x / 8) dx = 0.5</span>를 만족해요.",
        // EN: Solve <span class=\"chem\">m^2 / 16 = 0.5</span> for <span class=\"chem\">m &gt; 0</span>.
        "<span class=\"chem\">m &gt; 0</span>에 대해 <span class=\"chem\">m^2 / 16 = 0.5</span>를 푸세요.",
      ],
      // EN: <p>Setting the cumulative integral equal to <span class=\"chem\">0.5</span>:<br><span class=\"chem\">∫_0^m (x / 8) dx = [x^2 / 16]_0^m = m^2 / 16 = 0.5</span> <b>[M1 A1]</b>.<br><span class=\"chem\">m^2 = 8 ⇒ m = √8 = 2√2</span> (since <span class=\"chem\">0 ≤ m ≤ 4</span>) <b>[M1 A1]</b>.</p>
      solution: "<p>누적 적분을 <span class=\"chem\">0.5</span>로 놓으면:<br><span class=\"chem\">∫_0^m (x / 8) dx = [x^2 / 16]_0^m = m^2 / 16 = 0.5</span> <b>[M1 A1]</b>.<br><span class=\"chem\">m^2 = 8 ⇒ m = √8 = 2√2</span> (<span class=\"chem\">0 ≤ m ≤ 4</span>이므로) <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q017 · numeric · challenge · AHL · AHL 4.14 · 5 marks
    "t4-2-q017": {
      // EN: <p>A continuous random variable <span class=\"chem\">X</span> has probability density function <span class=\"chem\">f(x) = 3x^2</span> for <span class=\"chem\">0 ≤ x ≤ 1</span>, and <span class=\"chem\">f(x) = 0</span> otherwise. Find <span class=\"chem\">Var(X)</span> (type an exact fraction such as <span class=\"mono\">3/80</span> or a 3 s.f. decimal).</p>
      stem: "<p>연속확률변수 <span class=\"chem\">X</span>의 확률밀도함수가 <span class=\"chem\">0 ≤ x ≤ 1</span>에서 <span class=\"chem\">f(x) = 3x^2</span>이고 그 외에서는 <span class=\"chem\">f(x) = 0</span>이에요. <span class=\"chem\">Var(X)</span>의 <strong>정확한</strong> 값을 구하시오 (Find). (<span class=\"mono\">5/48</span> 같은 정확한 분수를 그대로 입력할 수 있어요.)</p>",
      hints: [
        // EN: First compute <span class=\"chem\">E(X) = ∫_0^1 x(3x^2) dx = ∫_0^1 3x^3 dx = 3/4</span>.
        "먼저 <span class=\"chem\">E(X) = ∫_0^1 x(3x^2) dx = ∫_0^1 3x^3 dx = 3/4</span>를 계산하세요.",
        // EN: Next compute <span class=\"chem\">E(X^2) = ∫_0^1 x^2(3x^2) dx = ∫_0^1 3x^4 dx = 3/5</span>, and use <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>.
        "다음으로 <span class=\"chem\">E(X^2) = ∫_0^1 x^2(3x^2) dx = ∫_0^1 3x^4 dx = 3/5</span>을 계산하고 <span class=\"chem\">Var(X) = E(X^2) - [E(X)]^2</span>을 쓰세요.",
      ],
      // EN: <p><span class=\"chem\">E(X) = ∫_0^1 3x^3 dx = [3x^4 / 4]_0^1 = 3/4</span> <b>[M1 A1]</b>.<br><span class=\"chem\">E(X^2) = ∫_0^1 3x^4 dx = [3x^5 / 5]_0^1 = 3/5</span> <b>[A1]</b>.<br><span class=\"chem\">Var(X) = 3/5 - (3/4)^2 = 3/5 - 9/16 = 3/80 = 0.0375</span> <b>[M1 A1]</b>.</p>
      solution: "<p><span class=\"chem\">E(X) = ∫_0^1 3x^3 dx = [3x^4 / 4]_0^1 = 3/4</span> <b>[M1 A1]</b>.<br><span class=\"chem\">E(X^2) = ∫_0^1 3x^4 dx = [3x^5 / 5]_0^1 = 3/5</span> <b>[A1]</b>.<br><span class=\"chem\">Var(X) = 3/5 - (3/4)^2 = 3/5 - 9/16 = 3/80 = 0.0375</span> <b>[M1 A1]</b>.</p>",
    },

    // ── t4-2-q018 · short · challenge · AHL · AHL 4.14, SL 4.11 · 7 marks
    "t4-2-q018": {
      // EN: <p>A continuous random variable <span class=\"chem\">X</span> has probability density function <span class=\"chem\">f(x) = kx(3 - x)</span> for <span class=\"chem\">0 ≤ x ≤ 3</span>, and <span class=\"chem\">f(x) = 0</span> otherwise.<br>(a) Show that <span class=\"chem\">k = 2/9</span>. <strong>[3 marks]</strong><br>(b) Find the exact conditional probability <span class=\"chem\">P(X &gt; 1 | X &lt; 2)</span>. <strong>[4 marks]</strong></p>
      stem: "<p>연속확률변수 <span class=\"chem\">X</span>의 확률밀도함수가 <span class=\"chem\">0 ≤ x ≤ 3</span>에서 <span class=\"chem\">f(x) = kx(3 - x)</span>이고 그 외에서는 <span class=\"chem\">f(x) = 0</span>이다.<br>(a) <span class=\"chem\">k = 2/9</span>임을 보이시오 (Show that). <strong>[3 marks]</strong><br>(b) 정확한 조건부확률 <span class=\"chem\">P(X &gt; 1 | X &lt; 2)</span>를 구하시오 (Find). <strong>[4 marks]</strong></p>",
      // EN: <p>(a) Since <span class=\"chem\">∫_0^3 f(x) dx = 1</span>, we have <span class=\"chem\">k [3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>.<br>(b) By definition of conditional probability, <span class=\"chem\">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>.<br>Now <span class=\"chem\">P(X &lt; 2) = (2/9)[3x^2/2 - x^3/3]_0^2 = (2/9)(6 - 8/3) = 20/27</span>, and <span class=\"chem\">P(X &lt; 1) = (2/9)(3/2 - 1/3) = 7/27</span>, so <span class=\"chem\">P(1 &lt; X &lt; 2) = 20/27 - 7/27 = 13/27</span>.<br>Dividing gives <span class=\"chem\">P(X &gt; 1 | X &lt; 2) = (13/27) / (20/27) = 13/20 = 0.65</span>.</p>
      solution: "<p>(a) <span class=\"chem\">∫_0^3 f(x) dx = 1</span>이므로 <span class=\"chem\">k [3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>예요.<br>(b) 조건부확률의 정의에 의해 <span class=\"chem\">P(X &gt; 1 | X &lt; 2) = P(1 &lt; X &lt; 2) / P(X &lt; 2)</span>예요.<br><span class=\"chem\">P(X &lt; 2) = (2/9)[3x^2/2 - x^3/3]_0^2 = (2/9)(6 - 8/3) = 20/27</span>이고 <span class=\"chem\">P(X &lt; 1) = (2/9)(3/2 - 1/3) = 7/27</span>이므로 <span class=\"chem\">P(1 &lt; X &lt; 2) = 20/27 - 7/27 = 13/27</span>이에요.<br>나누면 <span class=\"chem\">P(X &gt; 1 | X &lt; 2) = (13/27) / (20/27) = 13/20 = 0.65</span>예요.</p>",
      // EN: <p>(a) <span class=\"chem\">k ∫_0^3 (3x - x^2) dx = k[3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>.<br>(b) <span class=\"chem\">P(1 &lt; X &lt; 2) = 13/27</span> and <span class=\"chem\">P(X &lt; 2) = 20/27</span>, so <span class=\"chem\">P(X &gt; 1 | X &lt; 2) = 13/20 = 0.65</span>.</p>
      answer: "<p>(a) <span class=\"chem\">k ∫_0^3 (3x - x^2) dx = k[3x^2/2 - x^3/3]_0^3 = k(27/2 - 9) = (9/2)k = 1 ⇒ k = 2/9</span>.<br>(b) <span class=\"chem\">P(1 &lt; X &lt; 2) = 13/27</span>이고 <span class=\"chem\">P(X &lt; 2) = 20/27</span>이므로 <span class=\"chem\">P(X &gt; 1 | X &lt; 2) = 13/20 = 0.65</span>예요.</p>",
      markscheme: [
        // EN: M1: Sets up the total probability integral k ∫_0^3 (3x − x²) dx = 1.
        "M1: 전체 확률 적분식 k ∫_0^3 (3x − x²) dx = 1을 세움.",
        // EN: A1: Integrates correctly to k [3x²/2 − x³/3]_0^3.
        "A1: k [3x²/2 − x³/3]_0^3로 올바르게 적분함.",
        // EN: A1: Evaluates k(27/2 − 9) = (9/2)k = 1, so k = 2/9 (AG).
        "A1: k(27/2 − 9) = (9/2)k = 1을 계산하여 k = 2/9 (AG).",
        // EN: M1: Rewrites P(X > 1 | X < 2) as P(1 < X < 2) / P(X < 2).
        "M1: P(X > 1 | X < 2)를 P(1 < X < 2) / P(X < 2)로 고쳐 씀.",
        // EN: A1: Evaluates P(1 < X < 2) = (2/9) ∫_1^2 (3x − x²) dx = 13/27.
        "A1: P(1 < X < 2) = (2/9) ∫_1^2 (3x − x²) dx = 13/27을 구함.",
        // EN: A1: Evaluates P(X < 2) = (2/9) ∫_0^2 (3x − x²) dx = 20/27.
        "A1: P(X < 2) = (2/9) ∫_0^2 (3x − x²) dx = 20/27을 구함.",
        // EN: A1: Simplifies the ratio to 13/20 (or 0.65).
        "A1: 비율을 13/20 (또는 0.65)으로 간단히 함.",
      ],
    },

    // ── t4-2-q019 · numeric · foundation · SL · SL 4.5 · 2 marks
    "t4-2-q019": {
      // EN: <p>The probability that a seed germinates is <span class="chem">0.85</span>. A gardener plants <span class="chem">240</span> of these seeds. Find the expected number of seeds that do <strong>not</strong> germinate.</p>
      stem: "<p>어떤 씨앗이 발아할 확률은 <span class=\"chem\">0.85</span>예요. 정원사가 이 씨앗 <span class=\"chem\">240</span>개를 심어요. 발아하지 <strong>않는</strong> 씨앗 개수의 기댓값을 구하시오 (Find).</p>",
      hints: [
        // EN: First find the probability that one seed does not germinate: <span class="chem">1 - 0.85</span>.
        "먼저 씨앗 한 개가 발아하지 않을 확률 <span class=\"chem\">1 - 0.85</span>를 구하세요.",
        // EN: The expected number of occurrences is <span class="chem">n · P(A)</span>.
        "기대 발생 횟수는 <span class=\"chem\">n · P(A)</span>예요.",
      ],
      // EN: <p><span class="chem">P(not germinate) = 1 - 0.85 = 0.15</span> <b>[M1]</b>.<br>Expected number <span class="chem">= 240 × 0.15 = 36</span> <b>[A1]</b>.</p>
      solution: "<p><span class=\"chem\">P(not germinate) = 1 - 0.85 = 0.15</span> <b>[M1]</b>.<br>기대 개수 <span class=\"chem\">= 240 × 0.15 = 36</span> <b>[A1]</b>.</p>",
    },

  }
});
